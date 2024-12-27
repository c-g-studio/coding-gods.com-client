import React, { FC } from 'react';
import { TGradientLine } from '@/components/Shared/GradientLine/GradientLine.types';

export const GradientLine: FC<TGradientLine> = ({ positionY }) => {
  return (
    <div
      className={`absolute left-0 ${positionY} h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent`}
    ></div>
  );
};
