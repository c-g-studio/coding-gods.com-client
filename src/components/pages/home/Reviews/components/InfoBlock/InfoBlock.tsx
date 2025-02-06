import { Typography } from '@/components/ui/Typography/Typography';
import s from './style.module.css';
import Image from 'next/image';
import React, { FC } from 'react';

type InfoBlockTypes = {
  review: string;
  title: string;
  source: string;
  icon: string;
};

export const InfoBlock: FC<InfoBlockTypes> = ({
  review,
  title,
  source,
  icon,
}): React.JSX.Element => {
  return (
    <div className="flex flex-grow flex-col justify-between md:w-[70%] md:justify-between md:pb-2 md:pt-3">
      <Typography
        variant="p"
        className={`relative mb-4 h-max max-h-[50px] overflow-y-auto text-[10px]/[1.8] md:max-h-[100px] lg:max-h-[80px] xl:max-h-[100px] ${s.customScrollbar}`}
      >
        {review}
      </Typography>
      <div className="relative">
        <Typography
          variant="h3"
          className={`mb-4 h-[28] overflow-y-auto text-2xl/[1.71] ${s.customScrollbar}`}
        >
          {title}
        </Typography>
        <div className="mt-auto flex gap-2">
          <Typography variant="p" className="text-[10px]/[1.8]">
            Відгук на {source}
          </Typography>
          <Image
            src={icon}
            alt="Зобарження Користувача"
            width={20}
            height={20}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
