import React, { FC } from 'react';
import { Typography } from '@/components/ui/Typography/Typography';
import { Section } from '@/components/shared/Section/Section';
import { ReviewsList } from '@/components/pages/home/Reviews/components/ReviewsList/ReviewsList';
import { getReviews } from '@/services/reviewsService';
import { reviewAdapter } from '@/utils/reviewAdapter/reviewAdaper';

export const Reviews: FC = async (): Promise<React.JSX.Element | null> => {
  const data = await getReviews();
  const adaptData = reviewAdapter(data.data);

  if (adaptData.length === 0) return null;

  return (
    <Section className="overflow-hidden lg:overflow-visible">
      <div className="xl:px-[86px]">
        <Typography variant="h2" className="text-center">
          Відгуки
        </Typography>
        <ReviewsList reviews={adaptData} />
      </div>
    </Section>
  );
};
