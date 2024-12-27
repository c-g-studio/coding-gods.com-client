import React, { FC } from 'react';
import { TFooterList } from '@/components/Shared/FooterList/FooterList.types';

const FooterList: FC<TFooterList> = ({ arr }) => {
  return (
    <ul className="flex flex-col gap-6 lg:text-center">
      {arr.map(item => (
        <li key={item} className="text-sm">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FooterList;
