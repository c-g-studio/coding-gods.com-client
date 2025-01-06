import React, { FC } from 'react';
import { TGradientLine } from '@/components/shared/GradientLine/gradientLine.types';

export const GradientLine: FC<TGradientLine> = ({
  positionY,
  width,
  animation,
  left,
}) => {
  return (
    <div
      className={`absolute ${left} ${positionY} h-[1px] ${width} bg-gradient-to-r from-transparent via-foreground to-transparent ${animation}`}
    ></div>
  );
};
