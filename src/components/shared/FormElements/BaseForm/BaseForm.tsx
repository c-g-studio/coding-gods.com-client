import React, { FC } from 'react';
import Form from 'next/form';

import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from '@headlessui/react';

import { classnames } from '@/utils/classnames';
import { Typography } from '@/components/ui/Typography/Typography';

import { BaseFormProps } from './BaseForm.types';

export const BaseForm: FC<BaseFormProps> = ({
  className,
  description,
  btnText,
  legend,
  fields,
  ...props
}) => {
  return (
    <Form className={classnames(className)} {...props}>
      <Fieldset className="space-y-4">
        <Legend className="text-center text-sm font-normal uppercase md:text-left">
          {legend}
        </Legend>

        {description && (
          <Typography className="text-center md:text-left lg:max-w-80">
            {description}
          </Typography>
        )}

        {fields.map(field => (
          <Field key={field.id}>
            <Label htmlFor={field.id}>
              <Typography variant="span" className="sr-only">
                {field.placeholder}
              </Typography>
            </Label>

            <Input
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              className="defaultInput"
            />
          </Field>
        ))}

        <Button type="submit" className="defaultButton w-full">
          {btnText}
        </Button>
      </Fieldset>
    </Form>
  );
};
