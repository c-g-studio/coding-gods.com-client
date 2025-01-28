import React, { FC } from 'react';

import { classnames } from '@/utils/classnames';

export const Section: FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <section className={classnames('py-16 md:py-20', className)} {...props}>
      <div className="container">{children}</div>
    </section>
  );
};
