'use client';

import React, {ChangeEvent} from 'react';
import { useTolgee } from '@tolgee/react';
import { setLanguage } from '@/tolgee/language';
import {ALL_LANGUAGES} from "@/constants/constants";

function onSelectChange(event:ChangeEvent<HTMLSelectElement>) {
  setLanguage(event.target.value);
}

export const LangSelector: React.FC = () => {
  const tolgee = useTolgee(['language']);
  const language = tolgee.getLanguage();



  return (
    <select onChange={onSelectChange} value={language}>
      {ALL_LANGUAGES.map(lang => (<option key={lang} value={lang}>{lang}</option>))}
      {/*<option value="en">🇬🇧 English</option>*/}
      {/*<option value="uk">🇨🇿 Ukraine</option>*/}
    </select>
  );
};
