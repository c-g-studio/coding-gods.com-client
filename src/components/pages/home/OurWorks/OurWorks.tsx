import { FC } from 'react';
import Image from 'next/image';

import { WorksGallery } from '@/components/pages/home/OurWorks/components/WorksGallery';
import { Section } from '@/components/shared/Section/Section';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import { Typography } from '@/components/ui/Typography/Typography';
import { getTranslate } from '@/tolgee/server';

export const OurWorks: FC = async () => {
  const t = await getTranslate();
  return (
    <Section className="text-center">
      <Typography variant="h2" className="mb-6 xl:mb-12">
        {t('home.sectionOurProjects.title')}
      </Typography>

      <WorksGallery.Wrapper>
        <WorksGallery.Item className="md:col-span-4 xl:col-span-5">
          <Image
            src="/images/our-works/1.png"
            alt="gallery image"
            className="h-full w-full object-cover"
            width={100}
            height={100}
          />
        </WorksGallery.Item>

        <WorksGallery.Item className="hidden md:col-span-2 md:inline-flex xl:col-span-3">
          <Image
            src="/images/our-works/2.png"
            alt="gallery image"
            className="h-full w-full object-cover"
            width={100}
            height={100}
          />
        </WorksGallery.Item>

        <WorksGallery.Item className="hidden md:col-span-2 md:inline-flex xl:col-span-4 xl:row-span-2">
          <Image
            src="/images/our-works/3.png"
            alt="gallery image"
            className="h-full w-full object-cover"
            width={100}
            height={100}
          />
        </WorksGallery.Item>

        <WorksGallery.Item className="hidden md:col-span-4 md:inline-flex xl:col-span-3">
          <Image
            src="/images/our-works/4.png"
            alt="gallery image"
            className="h-full w-full object-cover"
            width={100}
            height={100}
          />
        </WorksGallery.Item>

        <WorksGallery.Item className="hidden xl:col-span-5 xl:inline-flex">
          <Image
            src="/images/our-works/5.png"
            alt="gallery image"
            className="h-full w-full object-cover"
            width={100}
            height={100}
          />
        </WorksGallery.Item>
      </WorksGallery.Wrapper>

      <CustomLink href="/about">{t('home.common.moreBtn')}</CustomLink>
    </Section>
  );
};
