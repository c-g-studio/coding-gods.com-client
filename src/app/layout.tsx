import { baloo, bungee, interMedium, interRegular, roboto } from '@/app/fonts';
import '@/app/globals.css';
import { Footer } from '@/components/layout/Footer/Footer';
import { Header } from '@/components/layout/Header/Header';
import { TolgeeNextProvider } from '@/tolgee/client';
import { getLanguage } from '@/tolgee/language';
import { getStaticData } from '@/tolgee/shared';

import { WithChildren } from '@/types/common';

export default async function LocaleLayout({ children }: WithChildren) {
  const locale = await getLanguage();
  const staticData = await getStaticData([locale]);
  return (
    <html
      lang={locale}
      className={`${baloo.variable} ${roboto.variable} ${interRegular.variable} ${interMedium.variable} ${bungee.variable}`}
    >
      <body>
        <TolgeeNextProvider language={locale} staticData={staticData}>
          <Header />
          {children}
          <Footer />
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
