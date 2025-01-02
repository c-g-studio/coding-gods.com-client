import { Icon } from '@/components/ui/Icon/Icon';
import React from 'react';
import { getTranslate } from '@/tolgee/server';

export const MenuButton = async () => {
  const t = await getTranslate();
  return (
    <button className="flex h-12 w-12 items-center justify-center gap-4 md:w-36 md:justify-end">
      <span className="hidden font-roboto uppercase md:inline-block">
        {t('header.sectionHeader.menuBtn')}
      </span>
      <Icon type="menu" width={28} height={28} />
    </button>
  );
};
