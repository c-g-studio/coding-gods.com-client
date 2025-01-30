import React from 'react';
import { LangSelector } from '@/components/shared/LangSelector/LangSelector';
import { Navigation } from '@/components/shared/Buttons/Navigation/Navigation';
import { Logo } from '@/components/shared/Logo/Logo';
import { GradientLine } from '@/components/shared/GradientLine/GradientLine';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[rgba(10,10,10,0.7)] backdrop-blur-[27px] md:fixed">
      <div className="container flex h-[112px] items-center justify-between lg:h-[105px]">
        <LangSelector />
        <Logo fontSize={'text-base md:text-2xl'} section={'header'} />
        <Navigation />
      </div>
      <GradientLine positionY={'bottom-0'} width={'w-full'} left={'left-0'} />
    </header>
  );
};
