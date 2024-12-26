import React from 'react';
import { FC } from 'react';
import {TIconProps} from "@/types/TIconProps";

export const MenuIcon: FC<TIconProps> = ({width, height}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 28" fill="none">
      <g clipPath="url(#clip0_620_2074)">
        <path d="M0 10H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M0 19H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
      <defs>
        <clipPath id="clip0_620_2074">
          <rect width="28" height="28" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};
