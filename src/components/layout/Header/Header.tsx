import React from 'react';
import { LangSelector } from '@/components/Shared/LangSelector/LangSelector';
import { MenuButton } from '@/components/Shared/button/MenuButton/MenuButton';
import { Logo } from '@/components/Shared/Logo/Logo';

export const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-8">
        <LangSelector />
        <Logo fontSize={'text-base md:text-2xl'} />
        <MenuButton />
      </div>
    </header>
  );
};
