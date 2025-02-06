'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './reviews.module.css';
import 'swiper/css';
import { AvatarBlock } from '@/components/pages/home/Reviews/components/AvatarBlock/AvatarBlock';
import { InfoBlock } from '@/components/pages/home/Reviews/components/InfoBlock/InfoBlock';

const mockData = [
  {
    id: '1',
    img: '/images/about-us/about-us-medium.jpg',
    title: 'Ambroksol Hasid Romanovich Alm-sheih',
    review:
      'Дякуємо за вашу службу. Результатом я задоволена. На всіх етапах розробки проукту відчувалась підтримка команди. Дякуємо за вашу службу. Результатом я задоволена. На всіх етапах розробки проукту відчувалась підтримка команди. Дякуємо за вашу службу. Результатом я задоволена. На всіх етапах розробки проукту відчувалась підтримка команди.',
    source: 'Google Maps',
    icon: '/globe.svg',
  },
  {
    id: '2',
    img: '/images/about-us/about-us-medium.jpg',
    title: 'Ambroksol Hasid Romanovich Alm-sheih',
    review: 'Всё супер',
    source: 'Google Maps',
    icon: '/globe.svg',
  },
  {
    id: '3',
    img: '/images/about-us/about-us-medium.jpg',
    title: 'Oksana',
    review: 'Супер команда, оч помогли',
    source: 'Google Maps',
    icon: '/globe.svg',
  },
  {
    id: '4',
    img: '',
    title: 'Dana',
    review: 'Фуфлыжныики, запороли что-то. Онлифанс не работает',
    source: 'Google Maps',
    icon: '/globe.svg',
  },
];

export const ReviewsList: FC = (): React.JSX.Element => {
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
      {mockData &&
        mockData.map(mockDatum => (
          <SwiperSlide
            key={mockDatum.id}
            className={`relative h-[300px] rounded-[20px] border border-zinc-200 border-opacity-20 px-4 pb-10 pt-8 md:h-[260px] md:max-w-full md:pl-[200px] md:pr-[32px] lg:pl-[180px] ${s.backgroundGradient}`}
          >
            <AvatarBlock imgPath={mockDatum.img} />
            <InfoBlock
              review={mockDatum.review}
              title={mockDatum.title}
              source={mockDatum.source}
              icon={mockDatum.icon}
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
