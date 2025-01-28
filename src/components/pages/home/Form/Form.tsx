import React from 'react';
import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from '@headlessui/react';

import { Typography } from '@/components/ui/Typography/Typography';
import { getTranslate } from '@/tolgee/server';
import { Section } from '@/components/shared/Section/Section';
import Image from 'next/image';

export const Form = async () => {
  const t = await getTranslate();

  return (
    <Section id="form">
      <div className="grid gap-10 lg:grid-cols-[519px_1fr] lg:gap-[160px]">
        <form>
          <Fieldset className="space-y-4 text-pretty">
            <Legend className="text-center text-2xl font-normal tracking-wider md:text-left md:text-5xl">
              {t('home.sectionFeedback.title')}
            </Legend>

            <Typography className="text-center md:text-left lg:max-w-80">
              {t('home.sectionFeedback.text')}
            </Typography>

            {/* Name */}
            <Field>
              <Label htmlFor="name">
                <Typography variant="span" className="sr-only">
                  {t('home.sectionFeedback.form.namePh')}
                </Typography>
              </Label>

              <Input
                id="name"
                type="text"
                placeholder={t('home.sectionFeedback.form.namePh')}
                className="defaultInput"
              />
            </Field>

            {/* Email */}
            <Field>
              <Label htmlFor="email">
                <Typography variant="span" className="sr-only">
                  {t('home.sectionFeedback.form.emailPh')}
                </Typography>
              </Label>

              <Input
                id="email"
                type="email"
                placeholder={t('home.sectionFeedback.form.emailPh')}
                className="defaultInput"
              />
            </Field>

            {/* Phone */}
            <Field>
              <Label htmlFor="phone">
                <Typography variant="span" className="sr-only">
                  {t('home.sectionFeedback.form.phonePh')}
                </Typography>
              </Label>

              <Input
                id="phone"
                type="tel"
                placeholder={t('home.sectionFeedback.form.phonePh')}
                className="defaultInput"
              />
            </Field>

            <Button className="defaultButton w-full">
              {t('home.common.submitBtn')}
            </Button>
          </Fieldset>
        </form>

        <Image
          src="/images/form/form.jpg"
          alt="About us"
          width={642}
          height={652}
          className="order-first shrink-0 rounded-3xl object-cover md:order-last"
          loading="lazy"
        />
      </div>
    </Section>
  );
};
