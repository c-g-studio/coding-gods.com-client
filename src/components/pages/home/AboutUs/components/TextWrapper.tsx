import React, { FC, PropsWithChildren } from 'react';

export const TextWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="space-y-7">{children}</div>;
};
