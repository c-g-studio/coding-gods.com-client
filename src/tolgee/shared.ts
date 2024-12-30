import { DevTools, Tolgee, FormatSimple } from '@tolgee/web';
import { ALL_LANGUAGES, NAMESPACES } from '@/constants/constants';

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

export async function getStaticData(languages: string[]) {
  const result: Record<string, any> = {};
  for (const lang of languages) {
    if (ALL_LANGUAGES.includes(lang)) {
      for (const ns of NAMESPACES) {
        result[lang] = {
          ...result[lang],
          [ns]: (await import(`../i18n/${ns}/${lang}.json`)).default,
        };
      }
    }
  }

  return result;
}

export function TolgeeBase() {
  return (
    Tolgee()
      .use(FormatSimple())
      // replace with .use(FormatIcu()) for rendering plurals, foramatted numbers, etc.
      .use(DevTools())
      .updateDefaults({
        apiKey,
        apiUrl,
      })
  );
}
