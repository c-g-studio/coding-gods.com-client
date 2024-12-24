import React from 'react';
import Link from "next/link";
import {LangSelector} from "@/components/Shared/LangSelector/LangSelector";
import {MenuButton} from "@/components/Shared/button/MenuButton/MenuButton";

export const Header = () => {
  return (
    <header>
      <div className="container flex justify-between items-center py-8">
        <LangSelector/>
        <Link href='/' className='text-accentColor'>CODING GODS</Link>
        <MenuButton/>
      </div>
    </header>
  );
};
