import React from 'react';
import { getTranslate } from '@/tolgee/server';

export const Input = async () => {
  const t = await getTranslate();
  return (
    <input
      placeholder={t('home.sectionFeedback.form.phonePh')}
      className="w-full rounded-[50px] bg-transparent px-6 text-foreground placeholder:text-sm placeholder:text-foreground focus:outline-none focus:ring-0 md:w-[282px] md:placeholder:text-[12px]"
    />
  );
};
