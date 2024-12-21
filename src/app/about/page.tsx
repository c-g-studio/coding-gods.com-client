import { getTranslate } from '@/tolgee/server';

export default async function AboutPage() {
  const t = await getTranslate();


  return (
    <div className="text-4xl text-center font-bold">
      {t("aboutPage")}
    </div>
  );
}
