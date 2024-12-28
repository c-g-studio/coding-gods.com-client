import React, { FC } from 'react';

import { classnames } from '@/utils/classnames';

import { WithChildren, WithClassName } from '@/types/common';

const Wrapper: FC<WithChildren> = ({ children }) => {
  return (
    <ul className="mb-6 gap-4 md:mb-10 md:grid md:grid-cols-6 md:grid-rows-2 xl:mb-8 xl:grid-cols-12">
      {children}
    </ul>
  );
};

const Item: FC<WithChildren & WithClassName> = ({ children, className }) => {
  return (
    <li
      className={classnames(
        'border-cardBorder rounded-md border border-opacity-20 p-4',
        className,
      )}
    >
      {children}
    </li>
  );
};

export const WorksGallery = {
  Wrapper,
  Item,
};
