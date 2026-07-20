import { notFound, permanentRedirect } from "next/navigation";
import { poems } from "@/data/content";
import { getContentHref } from "@/data/content-index";

export default async function LegacyTranslationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = poems[slug];

  if (!content || !content.label?.startsWith("çeviri")) notFound();

  permanentRedirect(getContentHref(slug, content));
}
