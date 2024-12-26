import React from 'react';
import { Logo } from '@/components/Shared/Logo/Logo';
import Input from '@/components/Shared/formElements/Input/Input';
import { SubmitButton } from '@/components/Shared/button/SubmitBtn/SubmitBtn';
import FooterList from '@/components/Shared/FooterList/FooterList';
import { ALL_SOCIALS, SITEMAP_ITEMS } from '@/constants/constants';

export const Footer = () => {
  return (
    <footer className="relative">
      <div className="flex flex-col flex-wrap gap-y-16 px-4 md:flex-row md:gap-x-20">
        <div>
          <Logo fontSize={'text-4xl'} />
          <p className="text-sm">
            Розробка корпоративних сайтів для вашого бізнесу
          </p>
        </div>
        <div className="flex justify-between md:gap-16">
          <div className="w-28">
            <h6 className="mb-8">КАРТА САЙТУ</h6>
            <FooterList arr={SITEMAP_ITEMS} />
          </div>
          <div>
            <h6 className="mb-8">СОЦМЕРЕЖІ</h6>
            <FooterList arr={ALL_SOCIALS} />
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <Input />
          <SubmitButton />
        </form>
      </div>
    </footer>
  );
};
