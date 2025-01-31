'use client';

import React from 'react';
import { useTranslate } from '@tolgee/react';

import { BaseForm } from '@/components/shared/FormElements/BaseForm';

import styles from '../Footer.module.css';
import { z } from 'zod';

const formSchema = z.object({
  phone: z.string().min(10, {
    message: 'Невірний формат номеру телефону',
  }),
});

export const FooterForm = () => {
  const { t } = useTranslate();

  return (
    <BaseForm
      handler={async data => {
        try {
          alert(JSON.stringify(data, null, 2));
        } catch (error) {
          console.error('Error:', error);
        }
      }}
      schema={formSchema}
      className={`${styles.footerForm}`}
      legend={t('home.common.submitBtn')}
      fields={[
        {
          id: 'phone',
          type: 'text',
          placeholder: t('home.sectionFeedback.form.phonePh'),
          label: t('home.sectionFeedback.form.phonePh'),
        },
      ]}
      btnText={t('home.common.submitBtn')}
    />
  );
};
