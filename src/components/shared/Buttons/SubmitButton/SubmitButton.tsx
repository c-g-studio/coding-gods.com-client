import React, { FC } from 'react';
import { TSubmitButton } from '@/components/Shared/Buttons/SubmitButton/submitButton.types';
import { getTranslate } from '@/tolgee/server';

export const SubmitButton: FC<TSubmitButton> = async ({
  height,
  textTransform,
}) => {
  const t = await getTranslate();
  return (
    <button
      className={`${height} ${textTransform} w-full rounded-3xl bg-accentColor text-black md:w-[282px]`}
    >
      {t('home.common.submitBtn')}
    </button>
  );
};
