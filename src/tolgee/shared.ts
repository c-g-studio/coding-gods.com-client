import { DevTools, Tolgee, FormatSimple } from '@tolgee/web';

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;


export async function getStaticData(
  languages: string[],
  namespaces: string[] = ['']
) {
  const result: Record<string, Record<string, string>> = {};
  const promises: Promise<void>[] = []; // Массив для хранения промисов

  for (const lang of languages) {
    for (const namespace of namespaces) {
      if (namespace) {
        promises.push(
          import(`../i18n/${lang}.json`).then((module) => {
            result[`${lang}:${namespace}`] = module.default;
          })
        );
      } else {
        promises.push(
          import(`../i18n/${lang}.json`).then((module) => {
            result[lang] = module.default;
          })
        );
      }
    }
  }

  await Promise.all(promises);

  return result;
}


export function TolgeeBase() {
  return Tolgee()
    .use(FormatSimple())
    // replace with .use(FormatIcu()) for rendering plurals, foramatted numbers, etc.
    .use(DevTools())
    .updateDefaults({
      apiKey,
      apiUrl,
    });
}
