import React from 'react';
import { Logo } from '@/components/Shared/Logo/Logo';
import Input from '@/components/Shared/formElements/Input/Input';
import { SubmitBtn } from '@/components/Shared/button/SubmitBtn/SubmitBtn';

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
            <ul className="flex flex-col gap-6">
              <li className="text-sm">Про нас</li>
              <li className="text-sm">Роботи</li>
              <li className="text-sm">Послуги</li>
              <li className="text-sm">Відгуки</li>
              <li className="text-sm">Політика приватності</li>
            </ul>
          </div>
          <div>
            <h6 className="mb-8">СОЦМЕРЕЖІ</h6>
            <ul className="flex flex-col gap-6">
              <li className="text-sm">Facebook</li>
              <li className="text-sm">X (Twitter)</li>
              <li className="text-sm">LinkedIn</li>
              <li className="text-sm">Instagram</li>
            </ul>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <Input />
          <SubmitBtn />
        </form>
      </div>
    </footer>
  );
};
