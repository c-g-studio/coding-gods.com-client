import { ComponentPropsWithRef } from 'react';
import { z } from 'zod';
import { SubmitHandler } from 'react-hook-form';

export type BaseFormInputProps = {
  name: string;
  email: string;
  phone: string;
};

export type FieldProps = {
  label: string;
  id: 'name' | 'email' | 'phone';
  type: string;
  placeholder: string;
};

export type BaseFormProps = ComponentPropsWithRef<'form'> & {
  fields: FieldProps[];
  legend: string;
  description?: string;
  btnText: string;
  schema: z.ZodObject<z.ZodRawShape>;
  handler: SubmitHandler<BaseFormInputProps>;
};
