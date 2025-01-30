import React, { FC } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon/Icon';

export type TLogoProps = {
  fontSize: string;
  section: string;
};

export const Logo: FC<TLogoProps> = ({ fontSize, section }) => {
  if (section === 'header') {
    return (
      <Link
        href="/"
        className={`text-orange-450 ${fontSize} inline-flex items-center gap-4 font-baloo`}
      >
        CODING
        <Icon type="logoOrange" width={70} height={70} />
        GODS
      </Link>
    );
  } else if (section === 'footer') {
    return (
      <Link
        href="/"
        className={`text-orange-450 ${fontSize} inline-flex items-center gap-4 whitespace-nowrap font-baloo`}
      >
        <Icon type="logoOrange" width={70} height={70} />
        CODING GODS
      </Link>
    );
  }
};
