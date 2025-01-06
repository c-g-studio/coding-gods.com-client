import { ReactNode } from 'react';

export type WithChildren = {
  children: ReactNode;
  menu?: ReactNode;
};

export type WithClassName = {
  className?: string;
};
