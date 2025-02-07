'use client';
import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './reviews.module.css';
import 'swiper/css';
import { AvatarBlock } from '@/components/pages/home/Reviews/components/AvatarBlock/AvatarBlock';
import { InfoBlock } from '@/components/pages/home/Reviews/components/InfoBlock/InfoBlock';
import { getReviews } from '@/services/reviewsService';
import { reviewAdapter } from '@/utils/reviewAdapter/reviewAdaper';
import { generateIconSource } from '@/components/pages/home/Reviews/components/InfoBlock/generateIconSource';
import { ResponseAdapterType } from '@/utils/reviewAdapter/adapterTypes';

export const ReviewsList: FC = (): React.JSX.Element => {
  const [reviews, setReviews] = useState<ResponseAdapterType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReviews();
        if (!response || !response.data) return;

        const adaptData = reviewAdapter(response.data.data);
        setReviews(adaptData);
      } catch {
        console.error('Ошибка загрузки отзывов');
      }
    };

    fetchData();
  }, []);

  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      breakpoints={{
        768: {
          slidesPerView: 'auto',
          centeredSlides: false,
        },
        1200: {
          slidesPerView: 'auto',
          centeredSlides: false,
        },
      }}
      observer={true}
      observeParents={true}
      watchSlidesProgress={true}
      className="reviews_swiper_global w-[220px] md:w-full"
    >
      {reviews &&
        reviews.map(review => (
          <SwiperSlide
            key={review.id}
            className={`relative h-[300px] rounded-[20px] border border-zinc-200 border-opacity-20 px-4 pb-10 pt-8 md:h-[260px] md:max-w-full md:pl-[200px] md:pr-[32px] lg:pl-[180px] ${s.backgroundGradient}`}
          >
            <AvatarBlock imgPath={review.avatar} />
            <InfoBlock
              review={review.description}
              title={review.name}
              source={review.source}
              icon={review.source}
            />
            <Image
              src="/images/reviews/border-quote.svg"
              alt={'декор елемент'}
              width={409}
              height={197}
              className="absolute left-[22%] top-[26px] -z-10 hidden md:block md:w-[409px] lg:top-[32px] lg:w-[380px] xl:top-[26px] xl:w-[409px]"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
