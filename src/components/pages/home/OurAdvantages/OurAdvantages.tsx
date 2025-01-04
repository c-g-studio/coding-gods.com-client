import { Section } from '@/components/shared/Section/Section';
import { getTranslate } from '@/tolgee/server';
import { Typography } from '@/components/ui/Typography/Typography';
import { Card, Cards } from '@/components/ui/Card/Card';
import Image from 'next/image';
import { GradientLine } from '@/components/shared/GradientLine/GradientLine';

export const OurAdvantages = async () => {
  const t = await getTranslate();

  return (
    <Section className="relative text-center">
      <GradientLine positionY={'top-0'} />
      <Typography variant="h2" className={'md:mb-12'}>
        {t('home.sectionOurAdvantages.title')}
      </Typography>

      <Cards.Wrapper
        className={
          'flex flex-col items-center justify-center gap-3 md:flex-row md:items-stretch'
        }
      >
        <Card.Item className="px-4 py-6 lg:w-[310px]">
          <Card.Header className={'mb-6'}>
            <Image
              src={'/images/our-advantages/approach.png'}
              alt={'our approach image'}
              width={70}
              height={70}
              className={'mx-auto mb-6 h-6 w-6 md:h-12 md:w-12 lg:mb-12'}
            />
            <Card.Title>
              {t('home.sectionOurAdvantages.approach.title')}
            </Card.Title>
          </Card.Header>

          <Card.Body className={'py-4'}>
            <Typography className={'text-left'}>
              {t('home.sectionOurAdvantages.approach.text')}
            </Typography>
          </Card.Body>
        </Card.Item>

        <Card.Item className="px-4 py-6 lg:w-[310px]">
          <Card.Header className={'mb-6'}>
            <Image
              src={'/images/our-advantages/price.png'}
              alt={'our price image'}
              width={70}
              height={70}
              className={'mx-auto mb-6 h-6 w-6 md:h-12 md:w-12 lg:mb-12'}
            />
            <Card.Title>
              {t('home.sectionOurAdvantages.price.title')}
            </Card.Title>
          </Card.Header>

          <Card.Body className={'py-4'}>
            <Typography className={'text-left'}>
              {t('home.sectionOurAdvantages.price.text')}
            </Typography>
          </Card.Body>
        </Card.Item>

        <Card.Item className="px-4 py-6 lg:w-[310px]">
          <Card.Header className={'mb-6'}>
            <Image
              src={'/images/our-advantages/efficiency.png'}
              alt={'our efficiency image'}
              width={70}
              height={70}
              className={'mx-auto mb-6 h-6 w-6 md:h-12 md:w-12 lg:mb-12'}
            />
            <Card.Title>
              {t('home.sectionOurAdvantages.efficiency.title')}
            </Card.Title>
          </Card.Header>

          <Card.Body className={'py-4'}>
            <Typography className={'text-left'}>
              {t('home.sectionOurAdvantages.efficiency.text')}
            </Typography>
          </Card.Body>
        </Card.Item>
      </Cards.Wrapper>
    </Section>
  );
};
