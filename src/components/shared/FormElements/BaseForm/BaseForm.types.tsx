import { FormProps } from 'next/form';

export type FieldProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
};

export type BaseFormProps = FormProps & {
  fields: FieldProps[];
  legend: string;
  description?: string;
  btnText: string;
};
