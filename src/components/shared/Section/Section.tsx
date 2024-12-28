import { classnames } from '@/utils/classnames';
import React, { FC } from 'react';

import { WithChildren, WithClassName } from '@/types/common';

export const Section: FC<WithChildren & WithClassName> = ({
  className,
  children,
}) => {
  return (
    <section className={classnames('py-16 md:py-20', className)}>
      <div className="container">{children}</div>
    </section>
  );
};
