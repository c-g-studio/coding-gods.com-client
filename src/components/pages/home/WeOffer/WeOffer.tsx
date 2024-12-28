import { Card, Cards } from '@/components/ui/Card/Card';
import { CustomLink } from '@/components/ui/CustomLink/CustomLink';
import { Typography } from '@/components/ui/Typography/Typography';
import { FC } from 'react';

import { Section } from '@/components/shared/Section/Section';

export const WeOffer: FC = () => {
  return (
    <Section className="text-center">
      <Typography variant="h2">Ми пропонуємо</Typography>

      <Cards.Wrapper className="mx-auto grid max-w-[1082px] gap-3.5 md:grid-cols-2 lg:grid-cols-4">
        <Card.Item className="space-y-10">
          <Card.Header>
            <Card.Title>Брендинг</Card.Title>
          </Card.Header>

          <Card.Body className="space-y-1.5 text-left">
            <Typography>Дослідження брендингу</Typography>
            <Typography>Розробка логотипу</Typography>
            <Typography> Розробка фірмового стилю</Typography>
            <Typography>Маркетингові матеріали</Typography>
          </Card.Body>

          <Card.Footer>
            <CustomLink href="/about">Більше</CustomLink>
          </Card.Footer>
        </Card.Item>

        <Card.Item className="space-y-10">
          <Card.Header>
            <Card.Title>Брендинг</Card.Title>
          </Card.Header>

          <Card.Body className="space-y-1.5 text-left">
            <Typography>Дослідження брендингу</Typography>
            <Typography>Розробка логотипу</Typography>
            <Typography> Розробка фірмового стилю</Typography>
            <Typography>Маркетингові матеріали</Typography>
          </Card.Body>

          <Card.Footer>
            <CustomLink href="/about">Більше</CustomLink>
          </Card.Footer>
        </Card.Item>

        <Card.Item className="space-y-10">
          <Card.Header>
            <Card.Title>Брендинг</Card.Title>
          </Card.Header>

          <Card.Body className="space-y-1.5 text-left">
            <Typography>Дослідження брендингу</Typography>
            <Typography>Розробка логотипу</Typography>
            <Typography> Розробка фірмового стилю</Typography>
            <Typography>Маркетингові матеріали</Typography>
          </Card.Body>

          <Card.Footer>
            <CustomLink href="/about">Більше</CustomLink>
          </Card.Footer>
        </Card.Item>

        <Card.Item className="space-y-10">
          <Card.Header>
            <Card.Title>Брендинг</Card.Title>
          </Card.Header>

          <Card.Body className="space-y-1.5 text-left">
            <Typography>Дослідження брендингу</Typography>
            <Typography>Розробка логотипу</Typography>
            <Typography> Розробка фірмового стилю</Typography>
            <Typography>Маркетингові матеріали</Typography>
          </Card.Body>

          <Card.Footer>
            <CustomLink href="/about">Більше</CustomLink>
          </Card.Footer>
        </Card.Item>
      </Cards.Wrapper>
    </Section>
  );
};
