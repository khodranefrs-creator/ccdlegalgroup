import { getDictionary } from "@/config/translations";
import { type Locale } from "@/config/site";
import PageHero from "@/components/PageHero";

export default async function LegalNoticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lc = locale as Locale;
  const t = getDictionary(lc);

  return (
    <PageHero
      eyebrow={t.footer.legalNotice}
      titleLines={[t.footer.legalNotice]}
      lead="Contenido pendiente de redactar. Aviso legal (LSSI-CE) y condiciones de uso."
    />
  );
}
