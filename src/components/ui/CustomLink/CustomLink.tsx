import { FC } from 'react';
import { LinkProps } from 'next/dist/client/link';
import Link from 'next/link';

import { classnames } from '@/utils/classnames';
import { Icon } from '@/components/ui/Icon/Icon';

import { WithChildren, WithClassName } from '@/types/common';

type Props = WithChildren &
  WithClassName & {
    href: LinkProps['href'];
  };

export const CustomLink: FC<Props> = ({ children, className, href }) => {
  return (
    <Link
      className={classnames(
        'inline-flex items-center justify-center gap-2 rounded-full border border-accentColor px-6 py-3 font-inter text-sm font-medium text-accentColor transition-colors duration-300 hover:bg-accentColor hover:text-white',
        className,
      )}
      href={href}
    >
      {children} <Icon type="arrowTopRight" width={10} height={10} />
    </Link>
  );
};
