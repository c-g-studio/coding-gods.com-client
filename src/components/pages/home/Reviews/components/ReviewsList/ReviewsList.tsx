import React, {FC} from "react";
import {Card, Cards} from '@/components/ui/Card/Card';
import Image from "next/image";
import {Typography} from "@/components/ui/Typography/Typography";

const mockData = [
  {
    img: "/images/about-us/about-us-medium.jpg",
    title: "Vika",
    review: "Its cool",
    source: "Google Maps",
    icon: "/images/globe.svg"
  },
  {
    img: "/images/about-us/about-us-medium.jpg",
    title: "Roma",
    review: "Всё супер",
    source: "Google Maps",
    icon: "/images/globe.svg"
  },
  {
    img: "/images/about-us/about-us-medium.jpg",
    title: "Oksana",
    review: "Супер команда, оч помогли",
    source: "Google Maps",
    icon: "/images/globe.svg"
  },
  {
    img: "/images/about-us/about-us-medium.jpg",
    title: "Dana",
    review: "Фуфлыжныики, запороли что-то. Онлифанс не работает",
    source: "Google Maps",
    icon: "/images/globe.svg"
  }
]

export const ReviewsList: FC = (): React.JSX.Element => {
  return <Cards.Wrapper>
    {mockData && mockData.map((mockDatum) => (
      <Card.Item>
        <Card.Header>
          <Image src={mockDatum.img} alt="Зобарження користувача" width={50} height={50}/>
          <div>
            <Typography variant="p">
              {mockDatum.review}
            </Typography>
            <Typography variant="h3">
              {mockDatum.title}
            </Typography>
            <Typography variant="p">
              {mockDatum.source}
            </Typography>
          </div>
        </Card.Header>
      </Card.Item>
    ))}
  </Cards.Wrapper>
}
