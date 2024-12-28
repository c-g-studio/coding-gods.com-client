import React from 'react';
import { MenuIcon } from '../../../../../public/icons/MenuIcon';

export const MenuButton = () => {
  return (
    <button className="flex h-12 w-12 items-center justify-center gap-4 md:w-36 md:justify-end">
      <span className="hidden font-roboto uppercase md:inline-block">Меню</span>
      <MenuIcon width={28} height={28} />
    </button>
  );
};
