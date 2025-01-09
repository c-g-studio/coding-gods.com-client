'use client';

import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { NAVIGATIONS } from '@/constants/constants';
import { GradientLine } from '@/components/shared/GradientLine/GradientLine';
import Link from 'next/link';
import React, { Fragment } from 'react';
import clsx from 'clsx';
import { useTranslate } from '@tolgee/react';

export const ToggleMenuButton = () => {
  const { t } = useTranslate();
  return (
    <Menu as="div" className="relative">
      <MenuButton as={Fragment}>
        {({ active }) => (
          <button className="flex h-12 w-12 items-center justify-center gap-4 md:w-36 md:justify-end">
            <span
              className={clsx(
                'hidden font-roboto uppercase md:inline-block',
                active && 'text-accentColor',
              )}
            >
              {t('header.sectionHeader.menuBtn')}
            </span>
            <div className="group flex h-7 w-7 flex-col justify-center gap-[7px]">
              <span
                className={clsx(
                  `inline-block h-[2px] w-7 origin-top-left transform transition-transform duration-300`,
                  active
                    ? '-translate-y-[5.5px] translate-x-[4.5px] rotate-45 rounded-[1px]'
                    : 'translate-x-0 translate-y-0 rotate-0',
                )}
              ></span>
              <span
                className={clsx(
                  `inline-block h-[2px] w-[19px] origin-bottom-left transform transition-transform duration-300`,
                  active
                    ? 'w-[28px] translate-x-[4.5px] translate-y-[5px] -rotate-45 rounded-[1px]'
                    : 'w-[19px] translate-x-0 translate-y-0 rotate-0 rounded-none',
                )}
              ></span>
            </div>
            {/*<Icon type="menu" width={28} height={28} />*/}
          </button>
        )}
      </MenuButton>
      <MenuItems className="absolute right-0 top-[79px] flex h-[calc(100vh-79px)] w-lvw flex-col items-center justify-center bg-[rgba(10,10,10,0.7)] backdrop-blur-[27px] md:w-[334px]">
        <nav className="w-full">
          {NAVIGATIONS.map(item => (
            <li
              key={item.key}
              className="group relative h-16 cursor-pointer list-none text-sm"
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
                className="inline-flex h-full w-full items-center justify-center uppercase group-hover:bg-[linear-gradient(132deg,rgba(155,155,155,0.20)7.71%,rgba(0,0,0,0.00)71.33%)]"
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
        </nav>
      </MenuItems>
    </Menu>
  );
};

// import { Icon } from '@/components/ui/Icon/Icon';
// import React, { useState } from 'react';
// import { useTranslate } from '@tolgee/react';
// import { DropdownMenu } from '@/components/layout/DropdownMenu/DropdownMenu';
//
// export const MenuButton = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { t } = useTranslate();
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     if (!isMenuOpen) {
//       document.body.classList.add('overflow-hidden');
//     } else {
//       document.body.classList.remove('overflow-hidden');
//     }
//   };
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };
//   return (
//     <div className="relative">
//       <button
//         onClick={toggleMenu}
//         className="flex h-12 w-12 items-center justify-center gap-4 md:w-36 md:justify-end"
//       >
//         <span className="hidden font-roboto uppercase md:inline-block">
//           {t('header.sectionHeader.menuBtn')}
//         </span>
//         <Icon type="menu" width={28} height={28} />
//       </button>
//       {isMenuOpen && <DropdownMenu closeMenu={closeMenu} />}
//     </div>
//   );
// };
