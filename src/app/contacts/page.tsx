import { getTranslate } from '@/tolgee/server';

export default async function ContactsPage() {
  const t = await getTranslate();


  return (
    <div className="text-4xl text-center font-bold">
      {t("contactsPage")}
    </div>
  );
}
