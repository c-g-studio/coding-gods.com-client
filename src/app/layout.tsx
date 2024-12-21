import { ReactNode } from 'react';
import { TolgeeNextProvider } from '@/tolgee/client';
import { getStaticData } from '@/tolgee/shared';
import { getLanguage } from '@/tolgee/language';
import '@/app/globals.css';
import {LangSelector} from "@/components/Shared/LangSelector/LangSelector";
import Link from "next/link";
import {getTranslate} from "@/tolgee/server";

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLanguage();
  const staticData = await getStaticData([locale]);
  const t = await getTranslate();

  return (
    <html lang={locale}>
    <body>
    <TolgeeNextProvider language={locale} staticData={staticData}>
      <nav className={'flex justify-center gap-4'}>
        <Link href={'/about'}>{t("aboutPage")}</Link>
        <Link href={'/portfolio'}>{t("contactsPage")}</Link>
        <Link href={'/contacts'}>{t("portfolioPage")}</Link>
      </nav>
      <LangSelector/>
      {children}
    </TolgeeNextProvider>
    </body>
    </html>
  );
}
