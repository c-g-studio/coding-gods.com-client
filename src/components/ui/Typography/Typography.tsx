import { FC } from 'react';

import { classnames } from '@/utils/classnames';

import { WithChildren, WithClassName } from '@/types/common';

type Props = WithChildren &
  WithClassName & {
    variant?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  };

export const Typography: FC<Props> = ({
  variant,
  children,
  className = '',
  ...props
}: Props) => {
  const Component = variant ?? 'p';

  return (
    <Component
      className={classnames(
        'font-inter text-xs font-normal text-zinc-200 md:text-sm',
        className,
        {
          'text-2xl font-medium md:text-5xl xl:text-[64px]': variant === 'h1',
          'mb-6 text-2xl font-medium md:text-5xl lg:mb-12': variant === 'h2',
          'text-base font-medium md:text-lg': variant === 'h3',
        },
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
