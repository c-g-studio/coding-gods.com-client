import { Typography } from '@/components/ui/Typography/Typography';
import { WithChildren, WithClassName } from '@/types/common';
import { classnames } from '@/utils/classnames';
import React, { FC } from 'react';

import s from './styles.module.css';

const Wrapper: FC<WithChildren & WithClassName> = ({ children, className }) => {
  return <ul className={classnames(className)}>{children}</ul>;
};

const Item: FC<WithChildren & WithClassName> = ({ children, className }) => {
  return (
    <li
      className={classnames(
        `flex w-[220px] flex-col rounded-[20px] border border-zinc-200 border-opacity-20 px-4 py-10 md:w-[260px] md:px-[26px] ${s.backgroundGradient}`,
        className,
      )}
    >
      {children}
    </li>
  );
};

const Header: FC<WithChildren & WithClassName> = ({ children, className }) => {
  return <div className={classnames(className)}>{children}</div>;
};

const Footer: FC<WithChildren & WithClassName> = ({ children, className }) => {
  return <div className={classnames(className)}>{children}</div>;
};

const Body: FC<WithChildren & WithClassName> = ({ children, className }) => {
  return <div className={classnames('flex-1', className)}>{children}</div>;
};

const Title: FC<WithChildren & WithClassName> = ({ children, className }) => {
  return (
    <Typography className={classnames(className)} variant="h3">
      {children}
    </Typography>
  );
};

export const Cards = {
  Wrapper,
};

export const Card = {
  Body,
  Footer,
  Header,
  Item,
  Title,
};
