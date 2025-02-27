import Image from 'next/image';
import React, { FC } from 'react';

const NEXT_PUBLIC_SANITY_BASE_URL = process.env.NEXT_PUBLIC_SANITY_BASE_URL;

type AvatarBlockTypes = {
  imgPath?: string;
};

export const AvatarBlock: FC<AvatarBlockTypes> = ({
  imgPath,
}): React.JSX.Element => {
  return (
    <div className="relative mx-auto mb-4 flex size-20 items-center justify-center overflow-hidden rounded-[50%] bg-ellipse-pattern bg-cover bg-center md:absolute md:left-6 md:top-6 md:mb-0 md:ml-0 md:mr-[89px] md:size-[95px] xl:left-8">
      <Image
        src={
          imgPath
            ? `${NEXT_PUBLIC_SANITY_BASE_URL}${imgPath}`
            : '/images/reviews/user-thin.svg'
        }
        alt="Зобарження користувача"
        width={800}
        height={800}
        loading="lazy"
        className={imgPath ? 'h-full w-full object-cover' : 'size-[56px]'}
      />
    </div>
  );
};
