import React from 'react';
import { LangSelector } from '@/components/shared/LangSelector/LangSelector';
import { ToggleMenuButton } from '@/components/shared/Buttons/MenuButton/MenuButton';
import { Logo } from '@/components/shared/Logo/Logo';
import { GradientLine } from '@/components/shared/GradientLine/GradientLine';

export const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-[rgba(10,10,10,0.7)] backdrop-blur-[27px] md:fixed">
      <div className="container flex items-center justify-between py-8">
        <LangSelector />
        <Logo fontSize={'text-base md:text-2xl'} />
        {/*<MenuButton />*/}
        <ToggleMenuButton />
      </div>
      <GradientLine positionY={'bottom'} width={'w-full'} left={'left-0'} />
    </header>
  );
};
