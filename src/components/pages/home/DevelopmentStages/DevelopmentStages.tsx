import { FC } from 'react';

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

      <div className="relative flex items-center gap-x-[262px]">
        {/*List of development stages*/}
        <DevelopmentStagesList />

        {/*Decor*/}
        <div></div>

        {/*Chart*/}
        <DevelopmentChart />
      </div>
    </Section>
  );
};
