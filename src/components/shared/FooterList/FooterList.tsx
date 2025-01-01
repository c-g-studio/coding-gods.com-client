import React, { FC } from 'react';
import { TFooterList } from '@/components/shared/FooterList/footerList.types';
import { getTranslate } from '@/tolgee/server';

export const FooterList: FC<TFooterList> = async ({ arr }) => {
  const t = await getTranslate();
  return (
    <ul className="flex flex-col gap-6 lg:text-center">
      {arr.map(item => (
        <li key={item} className="text-sm">
          {t(item)}
        </li>
      ))}
    </ul>
  );
};
