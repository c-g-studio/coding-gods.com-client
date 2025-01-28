import React, { FC } from 'react';

import { Icon } from '@/components/ui/Icon/Icon';
import { IconType } from '@/components/ui/Icon/Icon.types';

type TSocialLink = {
  name: IconType;
  href: string;
};

const socials: TSocialLink[] = [
  {
    name: 'facebook',
    href: 'https://www.facebook.com/',
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/',
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/',
  },
];

export const SocialLinks: FC = () => {
  return (
    <div className="mb-[90px] flex items-center justify-center gap-10 md:order-last md:flex-col md:gap-6">
      {socials.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center justify-center p-1 transition-colors duration-300 hover:text-orange-450"
        >
          <span className="sr-only">{name}</span>

          <Icon type={name} width={24} height={24} />
        </a>
      ))}
    </div>
  );
};
