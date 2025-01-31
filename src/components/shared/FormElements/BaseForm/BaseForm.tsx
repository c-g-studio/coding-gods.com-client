'use client';

import React, { FC } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

import { BaseFormInputProps, BaseFormProps } from './BaseForm.types';

const defaultValues = {
  name: '',
  email: '',
  phone: '',
};

export const BaseForm: FC<BaseFormProps> = ({
  className,
  description,
  btnText,
  legend,
  fields,
  schema,
  handler,
}) => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<BaseFormInputProps>({
    defaultValues,
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<BaseFormInputProps> = data => {
    try {
      handler(data);
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className={classnames(className)} onSubmit={handleSubmit(onSubmit)}>
      <Fieldset className="space-y-4">
        <Legend className="text-center text-sm font-normal uppercase md:text-left">
          {legend}
        </Legend>

        {description && (
          <Typography className="text-center md:text-left lg:max-w-80">
            {description}
          </Typography>
        )}

        {fields.map(item => (
          <Field key={item.id} className="relative">
            <Label htmlFor={item.id}>
              <Typography variant="span" className="sr-only">
                {item.placeholder}
              </Typography>
            </Label>

            <Controller
              name={item.id}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                  className={classnames('defaultInput w-full', {
                    'border-rose-500': errors[item.id],
                  })}
                />
              )}
            />

            {errors[item.id] && (
              <Typography
                variant="span"
                className="absolute -bottom-4 left-4 text-[10px] text-rose-500 md:text-[10px]"
              >
                {errors[item.id]?.message}
              </Typography>
            )}
          </Field>
        ))}

        <Button
          type="submit"
          className="defaultButton w-full"
          disabled={isSubmitting}
        >
          {btnText}
        </Button>
      </Fieldset>
    </form>
  );
};
