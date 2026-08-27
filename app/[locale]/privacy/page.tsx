import { getDictionary } from "@/config/translations";
import { type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);

  return (
    <PageHero
      eyebrow={t.footer.privacy}
      titleLines={[t.footer.privacy]}
      lead="Política de privacidad en preparación, conforme al RGPD."
    />
  );
}
