'use client';

import React from 'react';
import Image from 'next/image';
import { z } from 'zod';

import { useTranslate } from '@tolgee/react';

import { Section } from '@/components/shared/Section/Section';
import { BaseForm } from '@/components/shared/FormElements/BaseForm';
import { SubmitHandler } from 'react-hook-form';
import { BaseFormInputProps } from '@/components/shared/FormElements/BaseForm/BaseForm.types';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Ім'я повинно містити мінімум 2 символи",
  }),
  email: z.string().email({
    message: 'Невірний формат електронної пошти',
  }),
  phone: z.string().min(10, {
    message: 'Невірний формат номеру телефону',
  }),
});

const submitHandler: SubmitHandler<BaseFormInputProps> = async data => {
  try {
    alert(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error:', error);
  }
};

export const Form = () => {
  const { t } = useTranslate();

  return (
    <Section id="form">
      <div className="grid gap-10 lg:grid-cols-[519px_1fr] lg:gap-[160px]">
        <BaseForm
          schema={formSchema}
          handler={submitHandler}
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
