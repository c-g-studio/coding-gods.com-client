import Image from 'next/image';
import React, { FC } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type AvatarBlockTypes = {
  imgPath?: string;
};

export const AvatarBlock: FC<AvatarBlockTypes> = ({
  imgPath,
}): React.JSX.Element => {
  return (
    <div className="relative mx-auto mb-4 flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-[50%] bg-ellipse-pattern bg-cover bg-center md:absolute md:left-6 md:top-6 md:mb-0 md:ml-0 md:mr-[89px] md:h-[95px] md:w-[95px] xl:left-8">
      {imgPath ? (
        <Image
          src={`${BASE_URL}${imgPath}`}
          alt="Зобарження користувача"
          width={800}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <Image
          src="/images/reviews/user-thin.svg"
          alt="Зобарження користувача"
          width={800}
          height={800}
          loading="lazy"
          className={`h-[56px] w-[56px]`}
        />
      )}
    </div>
  );
};
