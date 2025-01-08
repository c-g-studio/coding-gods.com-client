import { TolgeeBase, getStaticData } from './shared';

import { createServerInstance } from '@tolgee/react/server';
import { getLanguage } from './language';
import { ALL_LANGUAGES } from '@/constants/constants';

export const { getTolgee, getTranslate, T } = createServerInstance({
  getLocale: getLanguage,
  createTolgee: async locale => {
    const languages = ALL_LANGUAGES.map(item => item.key);
    const staticData = await getStaticData(languages);

    return TolgeeBase().init({
      staticData, // передаем переводы
      observerOptions: {
        fullKeyEncode: true,
      },
      language: locale,
      fetch: async (input, init) =>
        fetch(input, { ...init, next: { revalidate: 0 } }),
    });
  },
});
