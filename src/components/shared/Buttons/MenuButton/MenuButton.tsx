import { Icon } from '@/components/ui/Icon/Icon';
import React from 'react';

export const MenuButton = () => {
  return (
    <button className="flex h-12 w-12 items-center justify-center gap-4 md:w-36 md:justify-end">
      <span className="hidden font-roboto uppercase md:inline-block">Меню</span>
      <Icon type="menu" width={28} height={28} />
    </button>
  );
};
