// 'use client';
import React, { FC } from 'react';
import Image from 'next/image';

import { Section } from '@/components/shared/Section/Section';
import { Typography } from '@/components/ui/Typography/Typography';
import { SocialLinks } from './components/SocialLinks';
import Link from 'next/link';
import { getTranslate } from '@/tolgee/server';

export const Hero: FC = async () => {
  const t = await getTranslate();
  return (
    <Section className="relative z-10 pb-[252px] pt-6 md:pb-[350px] md:pt-[164px] lg:pb-[320px] lg:pt-[276px]">
      <div className="absolute inset-0 -z-[5] bg-zinc-950/75" />

      <div className="md:flex md:items-center md:justify-between">
        <SocialLinks />

        <div className="max-w-[51rem] space-y-6 text-pretty uppercase">
          <Typography variant="h1" className="">
            {t('home.sectionHero.title')}
          </Typography>

          <Typography className="text-xs font-normal uppercase md:text-base">
            {t('home.sectionHero.text')}
          </Typography>

          <Link className="defaultButton inline-flex" href="#form">
            {t('home.common.submitBtn')}
          </Link>
        </div>
      </div>

      <Image
        src="/images/hero/banner.jpeg"
        alt="Banner"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        width={1920}
        height={1080}
        priority
      />
    </Section>
  );
};
