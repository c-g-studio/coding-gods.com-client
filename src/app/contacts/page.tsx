import { getTranslate } from '@/tolgee/server';

export default async function ContactsPage() {
  const t = await getTranslate();

  return (
    <div className="text-center text-4xl font-bold">{t('contactsPage')}</div>
  );
}
