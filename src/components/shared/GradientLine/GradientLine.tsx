import React, { ComponentPropsWithoutRef, FC } from 'react';
import { classnames } from '@/utils/classnames';

export const GradientLine: FC<ComponentPropsWithoutRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={classnames(
        `absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-foreground to-transparent`,
        className,
      )}
      {...props}
    />
  );
};
