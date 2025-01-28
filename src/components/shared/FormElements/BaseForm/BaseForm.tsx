'use client';

import React, { FC, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
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

import { BaseFormProps, BaseFormInitialProps } from './BaseForm.types';

const initialState: BaseFormInitialProps = {
  success: '',
  errors: {
    name: '',
    email: '',
    phone: '',
  },
};

export const BaseForm: FC<BaseFormProps> = ({
  className,
  description,
  btnText,
  legend,
  fields,
  handler,
}) => {
  const [state, formAction, pending] = useActionState(handler, initialState);

  console.log('state', state);

  return (
    <Form action={formAction} className={classnames(className)}>
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
          <Field key={field.id} className="relative">
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
              className={classnames('defaultInput', {
                'border-rose-500': state.errors[field.id],
              })}
            />

            {state.errors[field.id] && (
              <Typography
                variant="span"
                className="absolute -bottom-4 left-4 text-[10px] text-rose-500 md:text-[10px]"
              >
                {state.errors[field.id]}
              </Typography>
            )}
          </Field>
        ))}

        <Button
          type="submit"
          className="defaultButton w-full"
          disabled={pending}
        >
          {btnText}
        </Button>
      </Fieldset>
    </Form>
  );
};
