import { getTranslate } from '@/tolgee/server';

export default async function PortfolioPage() {
  const t = await getTranslate();

  return (
    <div className="text-center text-4xl font-bold">{t('portfolioPage')}</div>
  );
}
