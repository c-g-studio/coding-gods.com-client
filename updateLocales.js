const { writeFileSync, existsSync, mkdirSync } = require('fs');
const { config } = require('dotenv');
const axios = require('axios');
const { resolve } = require('node:path');

config({
  path: resolve(__dirname, '.env'),
});

const API_URL = process.env.TOLGEE_API_URL || '';
const API_KEY = process.env.TOLGEE_API_KEY || '';
const PROJECT_ID = process.env.PROJECT_ID || '';

const localesInstance = axios.create({
  baseURL: `${API_URL}v2/projects/${PROJECT_ID}/`,
  headers: {
    'X-API-Key': API_KEY,
  },
});

async function tolgeeReq(path) {
  try {
    return localesInstance.get(path);
  } catch (error) {
    console.log(`tolgeeReq function error ${path}: `, error?.message);
    throw new Error(error);
  }
}

const updateLocales = async () => {
  try {
    let translations = {};
    const languagesRes = await tolgeeReq('languages');
    const namespacesRes = await tolgeeReq('namespaces');

    const languages = languagesRes.data?._embedded.languages.map(
      lang => lang.tag,
    );
    const namespaces = namespacesRes.data?._embedded.namespaces.map(
      ns => ns.name,
    );

    for (const lang of languages) {
      const result = await Promise.allSettled(
        namespaces.map(async ns => {
          const fetchRes = await tolgeeReq(`translations/${lang}?ns=${ns}`);
          const data = fetchRes.data;
          return { data, ns };
        }),
      );
      result.forEach(res => {
        if (res.status === 'fulfilled') {
          translations[lang] = {
            ...translations[lang],
            [res.value?.ns]: {
              ...(res.value.data?.[lang] || {}),
            },
          };
        }
      });
    }

    writeLocales(translations);
  } catch (error) {
    console.log(`updateLocales function error: `, error?.message);
    throw new Error(error);
  }
};

updateLocales()
  .then(() => {
    console.log('Locales successfully updated');
  })
  .catch(e => {
    console.log('Updating locales failed!');
    console.log(e.message);
  });

function writeLocales(translations) {
  try {
    if (!existsSync(resolve(__dirname, "src", 'i18n'))) {
      mkdirSync(resolve(__dirname,"src" ,'i18n'));
    }
    for (let lang in translations) {
      const currentLang = translations[lang];
      for (let ns in currentLang) {
        const dirPath = resolve(__dirname, 'src', 'i18n', ns);
        if (!existsSync(dirPath)) {
          mkdirSync(dirPath);
        }
        const path = resolve(dirPath, `${lang}.json`);
        const content = JSON.stringify(currentLang[ns]);
        writeFileSync(path, content, {});
      }
    }
  } catch (error) {
    console.log(`writeLocales function error: `, error?.message);
    throw new Error(error);
  }
}
