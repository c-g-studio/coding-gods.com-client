// 'use client';
//
// import React, { FC } from 'react';
// import { NAVIGATIONS } from '@/constants/constants';
// import Link from 'next/link';
// import { GradientLine } from '@/components/shared/GradientLine/GradientLine';
// import { useTranslate } from '@tolgee/react';
//
// type DropdownMenuProps = {
//   closeMenu: () => void;
// };
//
// export const DropdownMenu: FC<DropdownMenuProps> = ({ closeMenu }) => {
//   const { t } = useTranslate();
//   return (
//     <div
//       className={`absolute right-0 top-[79px] flex h-[calc(100vh-79px)] w-lvw bg-[rgba(10,10,10,0.7)] backdrop-blur-[27px] md:w-[334px]`}
//     >
//       <nav className="flex w-full items-center justify-center">
//         <ul className="flex w-full flex-col">
//           {NAVIGATIONS.map(item => (
//             <li
//               key={item.key}
//               className="group relative h-16 cursor-pointer text-sm"
//             >
//               <GradientLine
//                 left={'left-1/2'}
//                 positionY={'top-0'}
//                 width={'w-0'}
//                 animation={
//                   'transition-all duration-300 group-hover:w-full group-hover:left-0'
//                 }
//               />
//               <Link
//                 className="inline-flex h-full w-full items-center justify-center uppercase group-hover:bg-[linear-gradient(132deg,rgba(155,155,155,0.20)7.71%,rgba(0,0,0,0.00)71.33%)]"
//                 href={`/${item.href}`}
//                 onClick={closeMenu}
//               >
//                 {t(item.key)}
//               </Link>
//               <GradientLine
//                 left={'left-1/2'}
//                 positionY={'bottom-0'}
//                 width={'w-0'}
//                 animation={
//                   'transition-all duration-300 group-hover:w-full group-hover:left-0'
//                 }
//               />
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };
