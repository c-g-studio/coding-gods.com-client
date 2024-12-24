import React from 'react';
import { FC } from 'react';
import {TIconProps} from "@/types/TIconProps";

export const LangIcon: FC<TIconProps> = ({width, height, ...restSVGProps}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M20 8.25L12.5 15.75L5 8.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"/>
    </svg>
  );
};
