import React from 'react';
import { FC } from 'react';
import {TIconProps} from "@/types/TIconProps";

export const ActiveLangLine: FC<TIconProps> = ({width, height, ...restSVGProps}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="1" viewBox="0 0 21 1" fill="none">
      <path d="M20.5 0.5L0.5 0.5" stroke="url(#paint0_radial_640_1838)"/>
      <defs>
        <radialGradient id="paint0_radial_640_1838" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(10.5 1) rotate(-180) scale(10 0.630118)">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white" stop-opacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
};
