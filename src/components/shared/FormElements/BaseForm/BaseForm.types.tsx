import { FormProps } from 'next/form';

export type BaseFormInitialProps = {
  success: string;
  errors: {
    name: string;
    email: string;
    phone: string;
  };
};

export type FieldProps = {
  label: string;
  id: keyof BaseFormInitialProps['errors'];
  type: string;
  placeholder: string;
};

export type BaseFormProps = FormProps & {
  fields: FieldProps[];
  legend: string;
  description?: string;
  btnText: string;
  handler: () => Promise<BaseFormInitialProps>;
};
