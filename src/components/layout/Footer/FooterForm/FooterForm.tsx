import React from 'react';

import { getTranslate } from '@/tolgee/server';
import { BaseForm } from '@/components/shared/FormElements/BaseForm';

import styles from '../Footer.module.css';

export const FooterForm = async () => {
  const t = await getTranslate();

  return (
    <BaseForm
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
