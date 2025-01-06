import React from 'react';
import { NAVIGATIONS } from '@/constants/constants';
import { getTranslate } from '@/tolgee/server';
import Link from 'next/link';
import { GradientLine } from '@/components/shared/GradientLine/GradientLine';

export const DropdownMenu = async () => {
  const t = await getTranslate();
  return (
    <nav className="flex w-full items-center justify-center">
      <ul className="flex w-full flex-col">
        {NAVIGATIONS.map(item => (
          <li
            key={item.key}
            className="group relative h-16 cursor-pointer text-sm"
          >
            <GradientLine
              left={'left-1/2'}
              positionY={'top-0'}
              width={'w-0'}
              animation={
                'transition-all duration-300 group-hover:w-full group-hover:left-0'
              }
            />
            <Link
              className="inline-flex h-full w-full items-center justify-center uppercase"
              href={`/${item.href}`}
            >
              {t(item.key)}
            </Link>
            <GradientLine
              left={'left-1/2'}
              positionY={'bottom-0'}
              width={'w-0'}
              animation={
                'transition-all duration-300 group-hover:w-full group-hover:left-0'
              }
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
