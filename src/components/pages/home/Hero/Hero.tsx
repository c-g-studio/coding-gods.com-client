import React, { FC } from 'react';
import Image from 'next/image';

import { Section } from '@/components/shared/Section/Section';
import { Typography } from '@/components/ui/Typography/Typography';
import { SocialLinks } from './components/SocialLinks';
import Link from 'next/link';

export const Hero: FC = () => {
  return (
    <Section className="relative z-10 pb-[252px] pt-6 md:pb-[350px] md:pt-[164px] lg:pb-[320px] lg:pt-[276px]">
      <div className="absolute inset-0 -z-[5] bg-zinc-950/75" />

      <div className="md:flex md:items-center md:justify-between">
        <SocialLinks />

        <div className="max-w-3xl space-y-6 text-pretty">
          <Typography variant="h1" className="">
            РОЗРОБКА ЦИФРОВИХ ПРОДУКТІВ
          </Typography>

          <Typography className="text-xs font-normal uppercase md:text-base">
            Ми створюємо, ви вражаєте
          </Typography>

          <Link className="defaultButton inline-flex" href="#form">
            Залишити заявку
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
