import React, { FC } from 'react';
import { TSubmitButton } from '@/components/shared/Buttons/SubmitButton/submitButton.types';
import { getTranslate } from '@/tolgee/server';

export const SubmitButton: FC = async ({ height, textTransform }) => {
  const t = await getTranslate();
  return (
    <button
      className={`${height} ${textTransform} bg-orange-450 w-full rounded-3xl text-black md:w-[282px]`}
    >
      {t('home.common.submitBtn')}
    </button>
  );
};
