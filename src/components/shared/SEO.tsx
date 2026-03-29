import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export function SEO({ title, description, path = "" }: SEOProps) {
  const siteName = "Talkifi - Találkozások Konferencia";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const desc = description || "Talkifi – keresztény ifjúsági konferenciák és közösségi események Pápán. Dicsőítés, tanítás, közösség.";
  const url = `https://talalkazasok.hu${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
