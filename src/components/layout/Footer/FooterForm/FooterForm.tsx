import React from 'react';
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Button,
} from '@headlessui/react';

import { Typography } from '@/components/ui/Typography/Typography';
import { getTranslate } from '@/tolgee/server';

import styles from '../Footer.module.css';

export const FooterForm = async () => {
  const t = await getTranslate();

  return (
    <form className={`${styles.footerForm}`}>
      <Fieldset className="space-y-4">
        <Legend className="text-center text-sm font-normal uppercase md:text-left">
          {t('home.common.submitBtn')}
        </Legend>

        <Field>
          <Label htmlFor="phone">
            <Typography variant="span" className="sr-only">
              {t('home.sectionFeedback.form.phonePh')}
            </Typography>
          </Label>

          <Input
            id="phone"
            type="text"
            placeholder={t('home.sectionFeedback.form.phonePh')}
            className="!w-full rounded-[50px] bg-transparent px-6 text-foreground placeholder:text-sm placeholder:text-foreground focus:outline-none focus:ring-0 md:w-[282px] md:placeholder:text-[12px]"
          />
        </Field>

        <Button className="defaultButton w-full">
          {t('home.common.submitBtn')}
        </Button>
      </Fieldset>
    </form>
  );
};
