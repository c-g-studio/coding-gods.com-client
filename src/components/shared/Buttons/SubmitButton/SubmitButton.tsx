'use client';

import React, { FC } from 'react';
import { TSubmitButton } from '@/components/shared/Buttons/SubmitButton/submitButton.types';

import { useTranslate } from '@tolgee/react';

export const SubmitButton: FC<TSubmitButton> = ({ height, textTransform }) => {
  const { t } = useTranslate();
  return (
    <button
      type="submit"
      className={`${height} ${textTransform} w-full rounded-3xl bg-orange-450 text-black md:w-[282px]`}
    >
      {t('home.common.submitBtn')}
    </button>
  );
};
