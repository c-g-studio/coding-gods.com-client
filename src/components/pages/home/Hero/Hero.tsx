import React, { FC } from 'react';

import { Section } from '@/components/shared/Section/Section';
import { Typography } from '@/components/ui/Typography/Typography';
import { SocialLinks } from './components/SocialLinks';
import { LeaveRequest } from './components/LeaveRequest';
import Image from 'next/image';

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

          <LeaveRequest />
        </div>
      </div>

      <Image
        src="/images/hero/banner.jpeg"
        alt="Banner"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        layout="fill"
      />
    </Section>
  );
};
