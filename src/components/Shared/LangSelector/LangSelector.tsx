'use client';

import React, { ChangeEvent, useState } from 'react';
import { useTolgee } from '@tolgee/react';
import { setLanguage } from '@/tolgee/language';
import { ALL_LANGUAGES } from '@/constants/constants';
import { Select } from '@headlessui/react';
import { clsx } from 'clsx';
import { LangIcon } from '../../../../public/icons/LangIcon';
import { LangDotIcon } from '../../../../public/icons/LangDotIcon';
// import { ActiveLangLine } from '../../../../public/icons/ActiveLangLine';

function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
  setLanguage(event.target.value);
}

export const LangSelector: React.FC = () => {
  const tolgee = useTolgee(['language']);
  const language = tolgee.getLanguage();
  const [selectedLang, setSelectedLang] = useState(language);

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
    setLanguage(lang);
  };

  return (
    <div>
      {/*Мобильная версия*/}
      <div className="relative flex gap-2 md:hidden">
        <Select
          onChange={onSelectChange}
          value={language}
          className={clsx(
            'block cursor-pointer appearance-none border-none bg-background bg-none p-0 pr-8 font-roboto uppercase text-foreground',
          )}
        >
          {ALL_LANGUAGES.map(lang => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
          {/*<option value="en">🇬🇧 English</option>*/}
          {/*<option value="uk">🇨🇿 Ukraine</option>*/}
        </Select>
        <span className="pointer-events-none absolute right-0">
          <LangIcon width={24} height={24} />
        </span>
      </div>

      {/*Планшет/Десктоп версия*/}
      <div className="hidden items-center gap-4 md:flex">
        {ALL_LANGUAGES.map((lang, index) => (
          <button
            key={lang}
            onClick={() => handleLangChange(lang)}
            className="relative flex items-center gap-4 font-roboto uppercase"
            value={lang}
          >
            {lang}
            {selectedLang === lang && (
              <span className="absolute bottom-0 left-1/4 h-[1px] w-5 -translate-x-1/2 transform rounded-t-full bg-gradient-to-r from-transparent via-foreground to-transparent"></span>
            )}
            {index < ALL_LANGUAGES.length - 1 && (
              <LangDotIcon width={5} height={5} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
