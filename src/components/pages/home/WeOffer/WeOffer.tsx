import { Card, Cards } from '@/components/ui/Card/Card';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import { Typography } from '@/components/ui/Typography/Typography';
import { FC } from 'react';

import { Section } from '@/components/shared/Section/Section';
import { getTranslate } from '@/tolgee/server';

export const WeOffer: FC = async () => {
  const t = await getTranslate();
  return (
    <Section className="text-center">
      <Typography variant="h2">Ми пропонуємо</Typography>

      <Cards.Wrapper className="mx-auto grid max-w-[220px] grid-cols-1 gap-3.5 self-stretch md:max-w-[536px] md:grid-cols-2 lg:max-w-[1082px] lg:grid-cols-4">
        <Card.Item className="space-y-10">
          <Card.Header>
            <Card.Title>{t('home.sectionWeOffer.branding.title')}</Card.Title>
          </Card.Header>

          <Card.Body className="space-y-1.5 text-left">
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.branding.liOne')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.branding.liTwo')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.branding.liThree')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.branding.liFour')}
            </Typography>
          </Card.Body>

          <Card.Footer>
            <CustomLink href="/about">{t('home.common.moreBtn')}</CustomLink>
          </Card.Footer>
        </Card.Item>

        <Card.Item className="space-y-10">
          <Card.Header>
            <Card.Title>{t('home.sectionWeOffer.webDesign.title')}</Card.Title>
          </Card.Header>

          <Card.Body className="space-y-1.5 text-left">
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.webDesign.liOne')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.webDesign.liTwo')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.webDesign.liThree')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.webDesign.liFour')}
            </Typography>
          </Card.Body>

          <Card.Footer>
            <CustomLink href="/about">{t('home.common.moreBtn')}</CustomLink>
          </Card.Footer>
        </Card.Item>

        <Card.Item className="space-y-10">
          <Card.Header>
            <Card.Title>{t('home.sectionWeOffer.dev.title')}</Card.Title>
          </Card.Header>

          <Card.Body className="space-y-1.5 text-left">
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.dev.liOne')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.dev.liTwo')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.dev.liThree')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.dev.liFour')}
            </Typography>
          </Card.Body>

          <Card.Footer>
            <CustomLink href="/about">{t('home.common.moreBtn')}</CustomLink>
          </Card.Footer>
        </Card.Item>

        <Card.Item className="space-y-10">
          <Card.Header>
            <Card.Title>{t('home.sectionWeOffer.SEO.title')}</Card.Title>
          </Card.Header>

          <Card.Body className="space-y-1.5 text-left">
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.SEO.liOne')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.SEO.liTwo')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.SEO.liThree')}
            </Typography>
            <Typography
              className={`relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`}
            >
              {t('home.sectionWeOffer.SEO.liFour')}
            </Typography>
          </Card.Body>

          <Card.Footer>
            <CustomLink href="/about">{t('home.common.moreBtn')}</CustomLink>
          </Card.Footer>
        </Card.Item>
      </Cards.Wrapper>
    </Section>
  );
};
