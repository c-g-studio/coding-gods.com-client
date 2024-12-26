import React, { FC } from 'react';
import Link from 'next/link';
import { TextProps } from '@/types/TextProps';

export const Logo: FC<TextProps> = ({ fontSize }) => {
  return (
    <Link href="/" className={`text-accentColor ${fontSize}`}>
      CODING GODS
    </Link>
  );
};
