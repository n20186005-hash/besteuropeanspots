export type AttractionPageTemplate = "encyclopedia" | "travelogue" | "history";

export interface AttractionPageBreadcrumb {
  label: string;
  href: string;
}

export interface AttractionPageRelatedItem {
  slug: string;
  name: string;
  englishName: string;
}

export interface AttractionPageSection {
  title: string;
  bodyHtml: string;
  relatedItems?: AttractionPageRelatedItem[];
}

export interface AttractionPageContent {
  slug: string;
  template: AttractionPageTemplate;
  metadata: {
    title: string;
    description: string;
  };
  breadcrumbs: AttractionPageBreadcrumb[];
  hero: {
    title: string;
    description: string;
  };
  sections: AttractionPageSection[];
}

async function getBaseUrlFromRequest(): Promise<string | null> {
  try {
    const mod = await import("next/headers");
    const h = await mod.headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    if (!host) return null;
    const proto = h.get("x-forwarded-proto") ?? "https";
    return `${proto}://${host}`;
  } catch {
    return null;
  }
}

async function getSiteUrl(): Promise<string> {
  const headerBase = await getBaseUrlFromRequest();
  if (headerBase) return headerBase.replace(/\/$/, "");

  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, "");

  return "http://localhost:3000";
}

async function tryReadJsonFromGzipResponse(res: Response) {
  try {
    if (res.body && typeof (globalThis as any).DecompressionStream !== "undefined") {
      const stream = res.body.pipeThrough(new (globalThis as any).DecompressionStream("gzip"));
      const text = await new Response(stream).text();
      return JSON.parse(text);
    }

    const text = await res.text();
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function getAttractionPageContent(slug: string): Promise<AttractionPageContent | null> {
  const baseUrl = await getSiteUrl();
  const gzUrl = `${baseUrl}/data/attraction-pages/${slug}.json.gz`;
  const jsonUrl = `${baseUrl}/data/attraction-pages/${slug}.json`;

  try {
    const gzRes = await fetch(gzUrl);
    if (gzRes.ok) {
      const parsed = await tryReadJsonFromGzipResponse(gzRes);
      return (parsed as AttractionPageContent) || null;
    }

    const jsonRes = await fetch(jsonUrl);
    if (jsonRes.ok) {
      return (await jsonRes.json()) as AttractionPageContent;
    }
  } catch {
    return null;
  }

  return null;
}
