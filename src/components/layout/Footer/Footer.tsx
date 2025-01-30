import React from 'react';
import { FooterList } from '@/components/shared/FooterList/FooterList';
import { ALL_SOCIALS, SITEMAP_ITEMS } from '@/constants/constants';
import s from './Footer.module.css';
import { getTranslate } from '@/tolgee/server';
import { GradientLine } from '@/components/shared/GradientLine/GradientLine';
import { Logo } from '@/components/shared/Logo/Logo';
import { Form } from '@/components/shared/Form/Form';

export const Footer = async () => {
  const t = await getTranslate();
  return (
    <footer
      className={`${s.footer} lg:pb-[41px]} relative pb-[51px] pt-11 md:pb-[27px]`}
    >
      <GradientLine positionY={'top-0'} width={'w-full'} left={'left-0'} />

      <div className="container flex flex-col">
        <div className="mb-[43px] flex flex-wrap justify-between gap-y-16 md:mb-[74px] md:flex-row md:gap-x-20 lg:mb-[58px]">
          <div className="flex w-full flex-col gap-16 md:w-[282px]">
            <div>
              <Logo fontSize={'text-4xl'} section={'footer'} />
              <p className="w-[272px] text-sm">
                {t('footer.sectionFooter.text')}
              </p>
            </div>
            <div className="hidden flex-col gap-4 md:flex lg:hidden">
              <h6 className="uppercase">{t('home.common.submitBtn')}</h6>
              <Form />
            </div>
          </div>
          {/*<div className="flex justify-between md:gap-16">*/}
          <div className="flex-grow lg:max-w-none">
            <h6 className="mb-8 text-center uppercase">
              {t('footer.sectionFooter.sitemap.title')}
            </h6>
            <FooterList arr={SITEMAP_ITEMS} />
          </div>
          <div className="flex-grow lg:max-w-none">
            <h6 className="mb-8 text-center uppercase">
              {t('footer.sectionFooter.socials.title')}
            </h6>
            <FooterList arr={ALL_SOCIALS} />
          </div>
          {/*</div>*/}
          <div className="flex w-full flex-col gap-4 md:hidden lg:flex lg:w-[282px]">
            <h6 className="text-center uppercase lg:mb-4 lg:text-left">
              {t('home.common.submitBtn')}
            </h6>
            <Form />
          </div>
        </div>
        <span className="absolute left-1/2 top-[680px] -z-10 -translate-x-1/2 font-bungee text-[35px] text-orange-450 opacity-10 md:left-auto md:top-[347px] md:transform-none md:text-[85px] lg:top-[198px] lg:text-[128px] xl:top-[160px] xl:text-[160px]">
          CODING GODS
        </span>
        <div className="h-[1px] w-full bg-orange-450"></div>
        <p className="mt-[45px] self-center md:mt-[43px]">
          {t('footer.sectionFooter.rights')} @Coding Gods 2024
        </p>
      </div>
    </footer>
  );
};
