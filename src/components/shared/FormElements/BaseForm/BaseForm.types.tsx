export type FieldProps = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
};

export type BaseFormProps = React.HTMLProps<HTMLFormElement> & {
  fields: FieldProps[];
  legend: string;
  description?: string;
  btnText: string;
};
