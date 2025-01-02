import { Typography } from '@/components/ui/Typography/Typography';
import { WithChildren, WithClassName } from '@/types/common';
import { classnames } from '@/utils/classnames';
import React, { FC } from 'react';

const Wrapper: FC = ({ children, className }) => {
  return <ul className={classnames(className)}>{children}</ul>;
};

const Item: FC = ({ children, className }) => {
  return (
    <ul
      className={classnames(
        'rounded-[20px] border border-zinc-200 border-opacity-20 bg-[linear-gradient(0deg,#0A0A0A,#0A0A0A),linear-gradient(131.5deg,rgba(155,155,155,0.2)_7.71%,rgba(0,0,0,0)_71.33%)] px-4 py-10 md:px-[26px]',
        className,
      )}
    >
      {children}
    </ul>
  );
};

const Header: FC = ({ children, className }) => {
  return <div className={classnames(className)}>{children}</div>;
};

const Footer: FC = ({ children, className }) => {
  return <div className={classnames(className)}>{children}</div>;
};

const Body: FC = ({ children, className }) => {
  return <div className={classnames(className)}>{children}</div>;
};

const Title: FC = ({ children, className }) => {
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
