import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

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
  const gzFilePath = path.join(contentDir, `${slug}.json.gz`);
  const jsonFilePath = path.join(contentDir, `${slug}.json`);

  try {
    if (fs.existsSync(gzFilePath)) {
      const zipped = fs.readFileSync(gzFilePath);
      const unzipped = zlib.gunzipSync(zipped);
      return JSON.parse(unzipped.toString("utf8")) as AttractionPageContent;
    } else if (fs.existsSync(jsonFilePath)) {
      return JSON.parse(fs.readFileSync(jsonFilePath, "utf8")) as AttractionPageContent;
    }
  } catch (err) {
    console.error(`Error reading or parsing ${slug}:`, err);
  }

  return null;
}

export function hasAttractionPageContent(slug: string): boolean {
  return fs.existsSync(path.join(contentDir, `${slug}.json.gz`)) || fs.existsSync(path.join(contentDir, `${slug}.json`));
}
