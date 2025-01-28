import React from 'react';
import Image from 'next/image';

import { getTranslate } from '@/tolgee/server';

import { Section } from '@/components/shared/Section/Section';
import { BaseForm } from '@/components/shared/FormElements/BaseForm';

export const Form = async () => {
  const t = await getTranslate();

  return (
    <Section id="form">
      <div className="grid gap-10 lg:grid-cols-[519px_1fr] lg:gap-[160px]">
        <BaseForm
          className=""
          legend={t('home.sectionFeedback.title')}
          fields={[
            {
              id: 'name',
              type: 'text',
              placeholder: t('home.sectionFeedback.form.namePh'),
              label: t('home.sectionFeedback.form.namePh'),
            },
            {
              id: 'email',
              type: 'email',
              placeholder: t('home.sectionFeedback.form.emailPh'),
              label: t('home.sectionFeedback.form.emailPh'),
            },
            {
              id: 'phone',
              type: 'tel',
              placeholder: t('home.sectionFeedback.form.phonePh'),
              label: t('home.sectionFeedback.form.phonePh'),
            },
          ]}
          btnText={t('home.common.submitBtn')}
        />

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
