import fs from "node:fs";
import path from "node:path";

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

const contentDir = path.join(process.cwd(), "src", "data", "attraction-pages");

export function getAttractionPageContent(slug: string): AttractionPageContent | null {
  const filePath = path.join(contentDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  return JSON.parse(fs.readFileSync(filePath, "utf8")) as AttractionPageContent;
}

export function hasAttractionPageContent(slug: string): boolean {
  return fs.existsSync(path.join(contentDir, `${slug}.json`));
}
