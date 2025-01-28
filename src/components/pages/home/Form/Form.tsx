import React from 'react';
import Image from 'next/image';
import { z } from 'zod';

import { getTranslate } from '@/tolgee/server';

import { Section } from '@/components/shared/Section/Section';
import { BaseForm } from '@/components/shared/FormElements/BaseForm';

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

async function handleFormAction(formData: FormData) {
  'use server';

  if (typeof formData.entries !== 'function') {
    return {
      errors: {
        name: 'Поле ім’я є обов’язковим',
        email: 'Поле електронної пошти є обов’язковим',
        phone: 'Поле номеру телефону є обов’язковим',
      },
    };
  }

  const data = Object.fromEntries(formData.entries());

  const validatedFields = formSchema.safeParse(data);

  if (!validatedFields.success) {
    const formFieldErrors = validatedFields.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors.name?.[0] ?? '',
        email: formFieldErrors.email?.[0] ?? '',
        phone: formFieldErrors.phone?.[0] ?? '',
      },
    };
  }

  return {
    success:
      'Дякуємо за ваше повідомлення! Ми з вами зв’яжемося найближчим часом.',
    errors: {
      name: '',
      email: '',
      phone: '',
    },
  };
}

export const Form = async () => {
  const t = await getTranslate();

  return (
    <Section id="form">
      <div className="grid gap-10 lg:grid-cols-[519px_1fr] lg:gap-[160px]">
        <BaseForm
          handler={handleFormAction}
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
