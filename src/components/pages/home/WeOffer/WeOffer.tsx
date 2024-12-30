import { Card, Cards } from '@/components/ui/Card/Card';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import { Typography } from '@/components/ui/Typography/Typography';
import { FC } from 'react';

import { Section } from '@/components/Shared/Section/Section';
import { getTranslate } from '@/tolgee/server';

export const WeOffer: FC = async () => {
  const t = await getTranslate();
  return (
    <Section className="text-center">
      <Typography variant="h2">Ми пропонуємо</Typography>

      <Cards.Wrapper className="mx-auto grid max-w-[1082px] gap-3.5 md:grid-cols-2 lg:grid-cols-4">
        <Card.Item className="space-y-10">
          <Card.Header>
            <Card.Title>{t('home.sectionWeOffer.branding.title')}</Card.Title>
          </Card.Header>

          <Card.Body className="space-y-1.5 text-left">
            <Typography>{t('home.sectionWeOffer.branding.liOne')}</Typography>
            <Typography>{t('home.sectionWeOffer.branding.liTwo')}</Typography>
            <Typography>{t('home.sectionWeOffer.branding.liThree')}</Typography>
            <Typography>{t('home.sectionWeOffer.branding.liFour')}</Typography>
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
            <Typography>{t('home.sectionWeOffer.webDesign.liOne')}</Typography>
            <Typography>{t('home.sectionWeOffer.webDesign.liTwo')}</Typography>
            <Typography>
              {t('home.sectionWeOffer.webDesign.liThree')}
            </Typography>
            <Typography>{t('home.sectionWeOffer.webDesign.liFour')}</Typography>
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
            <Typography>{t('home.sectionWeOffer.dev.liOne')}</Typography>
            <Typography>{t('home.sectionWeOffer.dev.liTwo')}</Typography>
            <Typography>{t('home.sectionWeOffer.dev.liThree')}</Typography>
            <Typography>{t('home.sectionWeOffer.dev.liFour')}</Typography>
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
            <Typography>{t('home.sectionWeOffer.SEO.liOne')}</Typography>
            <Typography>{t('home.sectionWeOffer.SEO.liTwo')}</Typography>
            <Typography>{t('home.sectionWeOffer.SEO.liThree')}</Typography>
            <Typography>{t('home.sectionWeOffer.SEO.liFour')}</Typography>
          </Card.Body>

          <Card.Footer>
            <CustomLink href="/about">{t('home.common.moreBtn')}</CustomLink>
          </Card.Footer>
        </Card.Item>
      </Cards.Wrapper>
    </Section>
  );
};
