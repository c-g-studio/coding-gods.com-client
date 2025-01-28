import { FC } from 'react';
import Image from 'next/image';

import { DevelopmentChart } from '@/components/pages/home/DevelopmentStages/components/DevelopmentChart/DevelopmentChart';
import { DevelopmentStagesList } from '@/components/pages/home/DevelopmentStages/components/DevelopmentStagesList';
import { Section } from '@/components/shared/Section/Section';
import { Typography } from '@/components/ui/Typography/Typography';

export const DevelopmentStages: FC = () => {
  return (
    <Section>
      <Typography
        className="motion-preset-expand text-center motion-delay-100"
        variant="h2"
      >
        Етапи розробки
      </Typography>

      <div className="relative mx-auto hidden w-[1134px] items-center gap-x-[262px] lg:flex">
        {/*List of development stages*/}
        <DevelopmentStagesList />

        {/*Decor*/}

        <Image
          width={383}
          height={588}
          className="motion-preset-blur-right absolute right-24 top-7 motion-delay-75"
          src="/numeric-decor.svg"
          alt="Numeric decor"
        />

        {/*Chart*/}
        <DevelopmentChart />
      </div>
    </Section>
  );
};
