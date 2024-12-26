import React from 'react';
import { FC } from 'react';
import {TIconProps} from "@/types/TIconProps";

export const LangDotIcon: FC<TIconProps> = ({width, height}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 5 5" fill="none">
      <circle cx="2.5" cy="2.5" r="2.5" fill="#FFAC0C"/>
    </svg>
  );
};
