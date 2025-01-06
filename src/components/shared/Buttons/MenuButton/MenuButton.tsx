'use client';

import { Icon } from '@/components/ui/Icon/Icon';
import React, { useState } from 'react';
import { useTranslate } from '@tolgee/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MenuButton = () => {
  const pathname = usePathname();
  const [previousPath, setPreviousPath] = useState(pathname);
  const { t } = useTranslate();

  const isMenuOpen = pathname === '/menu';

  const link = isMenuOpen ? previousPath : '/menu';

  const handleClick = () => {
    if (!isMenuOpen) {
      setPreviousPath(pathname);
    }
  };

  return (
    <Link
      href={link}
      onClick={handleClick}
      className="flex h-12 w-12 items-center justify-center gap-4 md:w-36 md:justify-end"
    >
      <span className="hidden font-roboto uppercase md:inline-block">
        {t('header.sectionHeader.menuBtn')}
      </span>
      <Icon type="menu" width={28} height={28} />
    </Link>
  );
};
