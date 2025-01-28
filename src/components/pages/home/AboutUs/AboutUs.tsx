import React, { FC } from 'react';

import { Typography } from '@/components/ui/Typography/Typography';
import { Section } from '@/components/shared/Section/Section';
import { TextWrapper } from './components/TextWrapper';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import Image from 'next/image';

export const AboutUs: FC = () => {
  return (
    <Section>
      <div className="grid text-pretty lg:grid-cols-2 lg:gap-x-[125px] lg:gap-y-10">
        <Typography variant="h2" className="text-center lg:text-left">
          Про нас
        </Typography>

        <TextWrapper>
          <Typography>
            Ми - команда клієнтоорієнтованих фахівців, що вірить у силу
            інтернету як інструменту для трансформації бізнесу та творчості.
            Наша студія спеціалізується на дизайні та розробці веб-сайтів,
            створюючи унікальні інтернет-простори, які відзеркалюють ваш бренд
            та привертають увагу аудиторії. Ваші бізнес-цілі для нас завжди є
            відправною точкою.
          </Typography>

          <Typography>
            Ми не просто розробляємо веб-сайти. Ми створюємо цифрові історії,
            які спільно з вами будують успіх. Наша місія — надихати, інноваційно
            вирішувати завдання та робити ваш бізнес видимим у великому світі
            інтернету.
          </Typography>
        </TextWrapper>

        <Image
          src="/images/about-us/about-us-large.jpg"
          alt="About us"
          width={612}
          height={470}
          className="my-5 h-60 w-full rounded-3xl object-cover md:hidden lg:order-last lg:my-0 lg:block lg:h-auto"
          loading="lazy"
        />

        <Image
          src="/images/about-us/about-us-medium.jpg"
          alt="About us"
          width={612}
          height={470}
          className="my-5 hidden h-60 w-full rounded-3xl object-cover md:block lg:order-last lg:my-0 lg:hidden"
          loading="lazy"
        />

        <div className="grid gap-y-10 lg:self-center">
          <TextWrapper>
            <Typography>
              Незалежно від масштабів вашого бізнесу наша місія - допомогти вам
              знайти та втілити ваш унікальний стиль, який буде висвітлювати
              особливості вашого бренду та забезпечувати вам конкурентні
              переваги на ринку.
            </Typography>

            <Typography>
              Ми прагнемо не просто створити дизайн, але і вибудувати ваш
              брендовий імідж, який буде відображати унікальність та цінності
              вашого підприємства. Ви можете розраховувати на індивідуальний
              підхід та професійний погляд на кожен аспект створення вашого
              стилю.
            </Typography>
          </TextWrapper>

          <CustomLink href="/about" className="mx-auto">
            Дізнатися більше
          </CustomLink>
        </div>
      </div>
    </Section>
  );
};
