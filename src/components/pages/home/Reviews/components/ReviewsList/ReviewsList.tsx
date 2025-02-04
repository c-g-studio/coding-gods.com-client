'use client'
import React, {FC} from "react";
import {Card, Cards} from '@/components/ui/Card/Card';
import Image from "next/image";
import {Typography} from "@/components/ui/Typography/Typography";
import {Swiper, SwiperSlide} from "swiper/react";
import s from "./reviews.module.css"
import 'swiper/css';

const mockData = [
  {
    id: "1",
    img: "/images/about-us/about-us-medium.jpg",
    title: "Vika",
    review: "Дякуємо за вашу службу. Результатом я задоволена. На всіх етапах розробки проукту відчувалась підтримка команди.",
    source: "Google Maps",
    icon: "/globe.svg"
  },
  {
    id: "2",
    img: "/images/about-us/about-us-medium.jpg",
    title: "Roma",
    review: "Всё супер",
    source: "Google Maps",
    icon: "/globe.svg"
  },
  {
    id: "3",
    img: "/images/about-us/about-us-medium.jpg",
    title: "Oksana",
    review: "Супер команда, оч помогли",
    source: "Google Maps",
    icon: "/globe.svg"
  },
  {
    id: "4",
    img: "/images/about-us/about-us-medium.jpg",
    title: "Dana",
    review: "Фуфлыжныики, запороли что-то. Онлифанс не работает",
    source: "Google Maps",
    icon: "/globe.svg"
  }
]
// className={`flex w-[220px] flex-col rounded-[20px] border border-zinc-200 border-opacity-20 px-4 pt-6 pb-[34px] md:w-[260px] md:px-[26px] max-w-[220px] mr-[50px] md:max-w-full ${s.backgroundGradient}`}>


export const ReviewsList: FC = (): React.JSX.Element => {
  return <Swiper
    slidesPerView={'auto'}
    centeredSlides={true}
    breakpoints={{
      768: {
        spaceBetween: 50,
        slidesPerView: 1.25,
        centeredSlides: false
      },
      1440: {
        spaceBetween: 50,
        centeredSlides: false,
        slidesPerView: 2
      }
    }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    className="w-full reviews_swiper_global"
  >
    {mockData && mockData.map((mockDatum) => (
      <SwiperSlide
        key={mockDatum.id}
        className={`rounded-[20px] border border-zinc-200 border-opacity-20 px-4 pt-6 pb-[34px] md:px-[26px] max-w-[220px] md:max-w-full h-[300px] md:h-[260px] ${s.backgroundGradient}`}>
        <div className="overflow-hidden w-20 h-20 rounded-[50%] flex items-center justify-center mx-auto mb-4">
          <Image src={mockDatum.img} alt="Зобарження користувача" width={80} height={80}
                 className="object-cover rounded-[50%] w-20 h-20"/>
        </div>
        <div className="flex-grow flex flex-col justify-between">
          <Typography variant="p" className="mb-4 text-[10px]/[1.8]">
            {mockDatum.review}
          </Typography>
          <div>
            <Typography variant="h3" className="mb-4 text-2xl/[1.71]">
              {mockDatum.title}
            </Typography>
            <div className="flex gap-2 mt-auto">
              <Typography variant="p" className="text-[10px]/[1.8]">
                {mockDatum.source}
              </Typography>
              <Image src={mockDatum.icon} alt="Зобарження Користувача" width={20} height={20}/>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
}
