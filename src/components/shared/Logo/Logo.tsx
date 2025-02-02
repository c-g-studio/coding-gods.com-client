import React, { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { Icon } from '@/components/ui/Icon/Icon';
import { classnames } from '@/utils/classnames';
import { WithClassName } from '@/types/common';

export type TLogoProps = LinkProps &
  WithClassName & {
    textFlow?: 'left' | 'between';
  };

export const Logo: FC<TLogoProps> = ({
  textFlow = 'left',
  className,
  ...props
}) => {
  return (
    <Link
      className={classnames(
        'inline-flex items-center gap-4 font-baloo text-orange-450',
        className,
      )}
      {...props}
    >
      {textFlow === 'between' ? (
        <>
          CODING
          <Icon type="logoOrange" width={70} height={70} />
          GODS
        </>
      ) : (
        <>
          <Icon type="logoOrange" width={70} height={70} /> CODING GODS{' '}
        </>
      )}
    </Link>
  );
};
