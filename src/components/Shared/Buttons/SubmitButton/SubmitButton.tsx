import React, { FC } from 'react';
import { TSubmitButton } from '@/components/Shared/Buttons/SubmitButton/submitButton.types';

export const SubmitButton: FC<TSubmitButton> = ({ height, textTransform }) => {
  return (
    <button
      className={`${height} ${textTransform} w-full rounded-3xl bg-accentColor text-black md:w-[282px]`}
    >
      Залишити заявку
    </button>
  );
};
