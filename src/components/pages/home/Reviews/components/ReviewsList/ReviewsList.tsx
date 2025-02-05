'use client'
import React, {FC} from "react";
import Image from "next/image";
import {Typography} from "@/components/ui/Typography/Typography";
import {Swiper, SwiperSlide} from "swiper/react";
import s from "./reviews.module.css"
import 'swiper/css';
import {AvatarBlock} from "@/components/pages/home/Reviews/components/AvatarBlock/AvatarBlock";
import {InfoBlock} from "@/components/pages/home/Reviews/components/InfoBlock/InfoBlock";

const mockData = [
  {
    id: "1",
    img: "/images/about-us/about-us-medium.jpg",
    title: "Vika",
    review: "Дякуємо за вашу службу. Результатом я задоволена. На всіх етапах розробки проукту відчувалась підтримка команди. Дякуємо за вашу службу. Результатом я задоволена. На всіх етапах розробки проукту відчувалась підтримка команди. Дякуємо за вашу службу. Результатом я задоволена. На всіх етапах розробки проукту відчувалась підтримка команди.",
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
    img: "",
    title: "Dana",
    review: "Фуфлыжныики, запороли что-то. Онлифанс не работает",
    source: "Google Maps",
    icon: "/globe.svg"
  }
]
const breakpoints = {
  768: {
    spaceBetween: 32,
    slidesPerView: 1.25,
    centeredSlides: false
  },
  1200: {
    spaceBetween: 32,
    centeredSlides: false,
    slidesPerView: 2
  }
}
export const ReviewsList: FC = (): React.JSX.Element => {
  return <Swiper
    slidesPerView={'auto'}
    centeredSlides={true}
    breakpoints={breakpoints}
    className="w-full reviews_swiper_global"
  >
    {mockData && mockData.map((mockDatum) => (
      <SwiperSlide
        key={mockDatum.id}
        className={`rounded-[20px] border border-zinc-200 border-opacity-20 px-4 pt-6 pb-[34px] md:pl-[200px] lg:pl-[180px] md:pr-[32px] max-w-[220px] md:max-w-full h-[300px] md:h-[260px] relative ${s.backgroundGradient}`}>
        <AvatarBlock imgPath={mockDatum.img}/>
        <InfoBlock review={mockDatum.review} title={mockDatum.title} source={mockDatum.source} icon={mockDatum.icon}/>
        <Image src="/images/reviews/border-quote.svg" alt={"декор елемент"} width={409} height={197}
               className="hidden md:block absolute -z-10 left-[22%] top-[26px] lg:top-[32px] xl:top-[26px] md:w-[409px] lg:w-[380px] xl:w-[409px] "/>
      </SwiperSlide>
    ))}
  </Swiper>
}
