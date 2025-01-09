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
        'text-accentColor inline-flex items-center justify-center gap-2 rounded-full border border-orange-450 px-6 py-3 font-inter text-sm font-medium outline-none transition-colors duration-300 hover:bg-orange-450 hover:text-zinc-950 focus:bg-orange-450 focus:text-zinc-950',
        className,
      )}
      href={href}
    >
      {children} <Icon type="arrowTopRight" width={10} height={10} />
    </Link>
  );
};
