import React from 'react';
import { Input } from '@/components/Shared/FormElements/Input/Input';
import { FooterList } from '@/components/Shared/FooterList/FooterList';
import { ALL_SOCIALS, SITEMAP_ITEMS } from '@/constants/constants';
import { SubmitButton } from '@/components/Shared/Buttons/SubmitButton/SubmitButton';
import s from './Footer.module.css';
import { getTranslate } from '@/tolgee/server';
import { GradientLine } from '@/components/Shared/GradientLine/GradientLine';
import { Logo } from '@/components/Shared/Logo/Logo';

export const Footer = async () => {
  const t = await getTranslate();
  return (
    <footer
      className={`${s.footer} lg:pb-[41px]} relative pb-[51px] pt-11 md:pb-[27px]`}
    >
      <GradientLine positionY={'top-0'} />

      <div className="container flex flex-col">
        <div className="mb-[43px] flex flex-col flex-wrap justify-between gap-y-16 md:mb-[74px] md:flex-row md:gap-x-20 lg:mb-[58px]">
          <div className="flex flex-col gap-16">
            <div>
              <Logo fontSize={'text-4xl'} />
              <p className="w-[272px] text-sm">
                {t('footer.sectionFooter.text')}
              </p>
            </div>

            <form className="hidden flex-col gap-4 md:flex lg:hidden">
              <h6 className="uppercase">{t('footer.sectionFooter.text')}</h6>
              <Input />
              <SubmitButton textTransform={'uppercase'} height={'h-12'} />
            </form>
          </div>
          <div className="flex justify-between md:gap-16">
            <div className="max-w-28 lg:max-w-none">
              <h6 className="mb-8 uppercase lg:text-center">
                {t('footer.sectionFooter.sitemap.title')}
              </h6>
              <FooterList arr={SITEMAP_ITEMS} />
            </div>
            <div>
              <h6 className="mb-8 uppercase lg:text-center">
                {t('footer.sectionFooter.socials.title')}
              </h6>
              <FooterList arr={ALL_SOCIALS} />
            </div>
          </div>

          <form className="flex flex-col gap-4 md:hidden lg:flex">
            <h6 className="text-center uppercase lg:mb-4 lg:text-left">
              {t('home.common.submitBtn')}
            </h6>
            <Input />
            <SubmitButton height={'h-10'} textTransform={'normal-case'} />
          </form>
        </div>
        <span className="absolute top-[665.72] z-10 font-bungee text-[34.54px] text-accentColor opacity-10 md:top-[310.71px] md:text-[84.311px] lg:top-[198px] lg:text-[128px] xl:top-[160px] xl:text-[160px]">
          CODING GODS
        </span>
        <div className="h-[1px] w-full bg-accentColor"></div>
        <p className="mt-[45px] self-center md:mt-[43px]">
          {t('footer.sectionFooter.rights')} @Coding Gods 2024
        </p>
      </div>
    </footer>
  );
};
