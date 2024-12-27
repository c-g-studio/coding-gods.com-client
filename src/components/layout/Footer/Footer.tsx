import React from 'react';
import { Logo } from '@/components/Shared/Logo/Logo';
import Input from '@/components/Shared/formElements/Input/Input';
import FooterList from '@/components/Shared/FooterList/FooterList';
import { ALL_SOCIALS, SITEMAP_ITEMS } from '@/constants/constants';
import { SubmitButton } from '@/components/Shared/button/SubmitBtn/SubmitButton';
import s from './Footer.module.css';
import { GradientLine } from '@/components/Shared/GradientLine/GradientLine';

export const Footer = () => {
  return (
    <footer
      className={`${s.footer} lg:pb-[41px]} relative pb-[51px] md:pb-[27px]`}
    >
      <GradientLine positionY={'top'} />

      <div className="container relative flex flex-col pt-[44px]">
        <div className="mb-[43px] flex flex-col flex-wrap justify-between gap-y-16 md:mb-[74px] md:flex-row md:gap-x-20 lg:mb-[58px]">
          <div className="flex flex-col gap-16">
            <div>
              <Logo fontSize={'text-4xl'} />
              <p className="w-[272px] text-sm">
                Розробка корпоративних сайтів для вашого бізнесу
              </p>
            </div>

            <form className="hidden flex-col gap-4 md:flex lg:hidden">
              <h6 className="uppercase">Залишити заявку</h6>
              <Input />
              <SubmitButton textTransform={'uppercase'} height={'h-12'} />
            </form>
          </div>
          <div className="flex justify-between md:gap-16">
            <div className="max-w-28 lg:max-w-none">
              <h6 className="mb-8 lg:text-center">КАРТА САЙТУ</h6>
              <FooterList arr={SITEMAP_ITEMS} />
            </div>
            <div>
              <h6 className="mb-8 lg:text-center">СОЦМЕРЕЖІ</h6>
              <FooterList arr={ALL_SOCIALS} />
            </div>
          </div>

          <form className="flex flex-col gap-4 md:hidden lg:flex">
            <h6 className="text-center uppercase lg:mb-4 lg:text-left">
              Залишити заявку
            </h6>
            <Input />
            <SubmitButton height={'h-10'} textTransform={'normal-case'} />
          </form>
        </div>
        <span className="absolute top-[665.72] z-10 font-bungee text-[34.54px] text-accentColor opacity-10 md:top-[310.71px] md:text-[84.311px] lg:top-[198px] lg:text-[128px]">
          CODING GODS
        </span>
        <div className="h-[1px] w-full bg-accentColor"></div>
        <small className="mt-[45px] self-center md:mt-[43px]">
          Всі права захищено @Coding Gods 2024
        </small>
      </div>
    </footer>
  );
};
