import React, { FC } from 'react';
import Link from 'next/link';

export type TLogoProps = {
  fontSize: string;
};

export const Logo: FC<TLogoProps> = ({ fontSize }) => {
  return (
    <Link href="/" className={`text-orange-450 ${fontSize} font-baloo`}>
      CODING GODS
    </Link>
  );
};
