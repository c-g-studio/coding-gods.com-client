import Link from 'next/link';
import { TolgeeNextProvider } from '@/tolgee/client';
import { getStaticData } from '@/tolgee/shared';
import { getLanguage } from '@/tolgee/language';
import '@/app/globals.css';
import { getTranslate } from '@/tolgee/server';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { baloo, bungee, interMedium, interRegular, roboto } from '@/app/fonts';

import { WithChildren } from '@/types/common';

export default async function LocaleLayout({ children }: WithChildren) {
  const locale = await getLanguage();
  const staticData = await getStaticData([locale]);
  const t = await getTranslate();

  return (
    <html
      lang={locale}
      className={`${baloo.variable} ${roboto.variable} ${interRegular.variable} ${interMedium.variable} ${bungee.variable}`}
    >
      <body>
        <TolgeeNextProvider language={locale} staticData={staticData}>
          <Header />
          <nav className={'flex justify-center gap-4'}>
            <Link href={'/about'}>{t('aboutPage')}</Link>
            <Link href={'/portfolio'}>{t('contactsPage')}</Link>
            <Link href={'/contacts'}>{t('portfolioPage')}</Link>
          </nav>
          {children}
          <Footer />
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
