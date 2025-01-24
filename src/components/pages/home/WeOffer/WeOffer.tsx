import { Card, Cards } from '@/components/ui/Card/Card';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import { Typography } from '@/components/ui/Typography/Typography';
import { NextPage } from 'next';
import { Section } from '@/components/shared/Section/Section';
import { getTranslate } from '@/tolgee/server';

const listItemDecorClassName = `relative pl-3 before:absolute before:left-1 before:top-2 before:h-1 before:w-1 before:rounded-[50%] before:bg-zinc-200 before:content-['']`;

const cardData = [
  {
    key: 'branding',
    link: '/about',
  },
  {
    key: 'webDesign',
    link: '/about',
  },
  {
    key: 'dev',
    link: '/about',
  },
  {
    key: 'SEO',
    link: '/about',
  },
];

export const WeOffer: NextPage = async () => {
  const t = await getTranslate();

  return (
    <Section className="text-center">
      <Typography variant="h2">Ми пропонуємо</Typography>

      <Cards.Wrapper className="mx-auto grid max-w-[220px] grid-cols-1 gap-3.5 self-stretch md:max-w-[536px] md:grid-cols-2 lg:max-w-[1082px] lg:grid-cols-4">
        {cardData.map(({ key, link }) => (
          <Card.Item key={key} className="space-y-10">
            <Card.Header>
              <Card.Title>{t(`home.sectionWeOffer.${key}.title`)}</Card.Title>
            </Card.Header>

            <Card.Body className="space-y-1.5 text-left">
              {Array.from({ length: 4 }).map((_, i) => (
                <Typography key={i} className={listItemDecorClassName}>
                  {t(`home.sectionWeOffer.${key}.li${i + 1}`)}
                </Typography>
              ))}
            </Card.Body>

            <Card.Footer>
              <CustomLink href={link}>{t('home.common.moreBtn')}</CustomLink>
            </Card.Footer>
          </Card.Item>
        ))}
      </Cards.Wrapper>
    </Section>
  );
};
