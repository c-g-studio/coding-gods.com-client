import React, { FC } from 'react';

import { Typography } from '@/components/ui/Typography/Typography';
import { Section } from '@/components/shared/Section/Section';
import { TextWrapper } from './components/TextWrapper';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import Image from 'next/image';
import { getTranslate } from '@/tolgee/server';

export const AboutUs: FC = async () => {
  const t = await getTranslate();

  return (
    <Section>
      <div className="grid text-pretty lg:grid-cols-2 lg:gap-x-[125px] lg:gap-y-10">
        <Typography variant="h2" className="text-center lg:text-left">
          {t('home.sectionAboutUs.title')}
        </Typography>

        <TextWrapper>
          <Typography>{t('home.sectionAboutUs.textOne')}</Typography>

          <Typography>{t('home.sectionAboutUs.textTwo')}</Typography>
        </TextWrapper>

        <Image
          src="/images/about-us/about-us-large.jpg"
          alt="About us"
          width={612}
          height={470}
          className="my-5 h-60 w-full rounded-3xl object-cover md:hidden lg:order-last lg:my-0 lg:block lg:h-auto"
          loading="lazy"
        />

        <Image
          src="/images/about-us/about-us-medium.jpg"
          alt="About us"
          width={612}
          height={470}
          className="my-5 hidden h-60 w-full rounded-3xl object-cover md:block lg:order-last lg:my-0 lg:hidden"
          loading="lazy"
        />

        <div className="grid gap-y-10 lg:self-center">
          <TextWrapper>
            <Typography>{t('home.sectionAboutUs.textThree')}</Typography>

            <Typography>{t('home.sectionAboutUs.textFour')}</Typography>
          </TextWrapper>

          <CustomLink href="/about" className="mx-auto">
            {t('home.sectionAboutUs.knowMoreBtn')}
          </CustomLink>
        </div>
      </div>
    </Section>
  );
};
