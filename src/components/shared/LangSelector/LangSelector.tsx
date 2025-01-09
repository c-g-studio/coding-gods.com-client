'use client';

import React, { useState } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { clsx } from 'clsx';

import { Icon } from '@/components/ui/Icon/Icon';
import { useTolgee } from '@tolgee/react';
import { setLanguage } from '@/tolgee/language';
import { ALL_LANGUAGES } from '@/constants/constants';

// function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
//   setLanguage(event.target.value);
// }
function onSelectChange(selectedLang: string) {
  setLanguage(selectedLang);
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
        <Listbox value={language} onChange={onSelectChange}>
          {({ open }) => (
            <div className="relative">
              <div className="relative">
                <ListboxButton
                  className={clsx(
                    'block cursor-pointer appearance-none border-none bg-background bg-none p-0 pr-8 font-roboto uppercase text-foreground',
                    open && 'bg-opacity-50',
                  )}
                >
                  {language}
                  <span className="pointer-events-none absolute right-0">
                    <Icon type="lang" width={24} height={24} />
                  </span>
                </ListboxButton>
              </div>

              <ListboxOptions className="absolute left-0 top-[70px] h-[calc(100vh-70px)] w-[calc(100vw-26px)] bg-[rgba(10,10,10,0.7)] py-10">
                <div className="">
                  {ALL_LANGUAGES.map(lang => (
                    <ListboxOption
                      key={lang.key}
                      value={lang.key}
                      className="flex items-center gap-2.5 py-2.5"
                    >
                      {({ active }) => (
                        <>
                          {active ? (
                            <Icon
                              type="langChecked"
                              width={24}
                              height={24}
                              className="m-2"
                            />
                          ) : (
                            <Icon
                              type="langNotChecked"
                              width={24}
                              height={24}
                              className="m-2"
                            />
                          )}
                          {lang.value} ({lang.key.toUpperCase()})
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </div>
              </ListboxOptions>
            </div>
          )}
        </Listbox>
      </div>
      {/*Планшет/Десктоп версия*/}
      <div className="hidden items-center gap-4 md:flex">
        {ALL_LANGUAGES.map((lang, index) => (
          <button
            key={lang.key}
            onClick={() => handleLangChange(lang.key)}
            className="relative flex items-center gap-4 font-roboto uppercase"
            value={lang.key}
          >
            {lang.key}
            {selectedLang === lang.key && (
              <span className="absolute bottom-0 left-1/4 h-[1px] w-5 -translate-x-1/2 transform rounded-t-full bg-gradient-to-r from-transparent via-foreground to-transparent"></span>
            )}
            {index < ALL_LANGUAGES.length - 1 && (
              <Icon type="langDot" width={5} height={5} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
