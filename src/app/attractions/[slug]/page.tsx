import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Section } from "@/components/Section";
import { attractions, getAttraction, getAllSlugs } from "@/lib/attractions";
import {
  getAttractionPageContent,
  type AttractionPageContent,
  type AttractionPageRelatedItem,
} from "@/lib/attraction-page-data";

const TEMPLATE_THEME = {
  encyclopedia: {
    label: "景点百科",
    badgeClass: "bg-red-50 text-red-700 border border-red-100",
  },
  travelogue: {
    label: "景点游记",
    badgeClass: "bg-blue-50 text-blue-700 border border-blue-100",
  },
  history: {
    label: "历史人文",
    badgeClass: "bg-amber-50 text-amber-700 border border-amber-100",
  },
} as const;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const attraction = getAttraction(slug);
  const pageContent = getAttractionPageContent(slug);

  if (!attraction && !pageContent) {
    return {};
  }

  const title =
    pageContent?.metadata.title ||
    `${attraction?.name || slug} (${attraction?.englishName || slug})`;
  const description =
    pageContent?.metadata.description || attraction?.description || "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Best European Spots",
    },
  };
}

function buildFallbackContent(slug: string): AttractionPageContent | null {
  const attraction = getAttraction(slug);
  if (!attraction) return null;

  const category = attraction.category || [];
  const template = category.includes("history")
    ? "history"
    : category.includes("travelogue")
      ? "travelogue"
      : "encyclopedia";

  return {
    slug,
    template,
    metadata: {
      title: `${attraction.name} (${attraction.englishName})`,
      description: attraction.description,
    },
    breadcrumbs: [
      { label: "首页", href: "/" },
      {
        label: TEMPLATE_THEME[template].label,
        href: `/category/${template}`,
      },
      {
        label: attraction.country,
        href: `/destinations/${attraction.countrySlug || "europe"}`,
      },
      {
        label: attraction.city,
        href: `/destinations/${attraction.countrySlug || "europe"}`,
      },
      {
        label: attraction.name,
        href: `/attractions/${slug}`,
      },
    ],
    hero: {
      title: `${attraction.name}・${attraction.englishName}・${attraction.country}・${attraction.city}`,
      description: attraction.description,
    },
    sections: [
      {
        title: "1. 景点介绍",
        bodyHtml: `<p class="text-gray-700 leading-relaxed mb-4">${attraction.description}</p>`,
      },
      {
        title: "2. 基本信息",
        bodyHtml: `
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200"><div class="text-sm text-gray-500 mb-1">中文名称</div><div class="text-gray-900 font-medium">${attraction.name}</div></div>
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200"><div class="text-sm text-gray-500 mb-1">英文名称</div><div class="text-gray-900 font-medium">${attraction.englishName}</div></div>
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200"><div class="text-sm text-gray-500 mb-1">国家</div><div class="text-gray-900 font-medium">${attraction.country}</div></div>
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200"><div class="text-sm text-gray-500 mb-1">城市</div><div class="text-gray-900 font-medium">${attraction.city}</div></div>
            </div>
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200"><div class="text-sm text-gray-500 mb-1">开放时间</div><div class="text-gray-900 font-medium">${attraction.openingHours}</div></div>
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200"><div class="text-sm text-gray-500 mb-1">门票价格</div><div class="text-gray-900 font-medium">${attraction.ticketPrice}</div></div>
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200"><div class="text-sm text-gray-500 mb-1">地址</div><div class="text-gray-900 font-medium">${attraction.address}</div></div>
              <div class="bg-gray-50 p-4 rounded-lg border border-gray-200"><div class="text-sm text-gray-500 mb-1">交通方式</div><div class="text-gray-900 font-medium">${attraction.transport}</div></div>
            </div>
          </div>`,
      },
    ],
  };
}

function DefaultRelatedAttractions({ slug }: { slug: string }) {
  const attraction = getAttraction(slug);
  if (!attraction) return null;

  const related = attractions
    .filter(
      (item) =>
        item.slug !== slug &&
        (item.country === attraction.country || item.type === attraction.type)
    )
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <Section title="猜你喜欢">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {related.map((item) => (
          <Link href={`/attractions/${item.slug}`} key={item.slug} className="block group">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                {item.name[0]}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-1">{item.englishName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

function RelatedSection({
  relatedItems,
  slug,
}: {
  relatedItems: AttractionPageRelatedItem[];
  slug: string;
}) {
  if (relatedItems.length === 0) {
    return <DefaultRelatedAttractions slug={slug} />;
  }

  return (
    <Section title="猜你喜欢">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {relatedItems.map((item) => (
          <Link href={`/attractions/${item.slug}`} key={item.slug} className="block group">
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                {item.name[0]}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-1">{item.englishName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export default async function AttractionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageContent = getAttractionPageContent(slug) || buildFallbackContent(slug);
  const attraction = getAttraction(slug);

  if (!pageContent || !attraction) {
    notFound();
  }

  const theme = TEMPLATE_THEME[pageContent.template];
  const mainSections = pageContent.sections.filter((section) => section.title !== "猜你喜欢");
  const relatedSection = pageContent.sections.find((section) => section.title === "猜你喜欢");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={pageContent.breadcrumbs} />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${theme.badgeClass}`}>
              {theme.label}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{pageContent.hero.title}</h1>
          <p className="text-lg text-gray-600 mb-6 whitespace-pre-line">{pageContent.hero.description}</p>
        </div>

        <div className="space-y-8">
          {mainSections.map((section) => (
            <Section key={section.title} title={section.title}>
              <div
                className="space-y-4 [&_a]:text-blue-600 [&_a]:hover:underline"
                dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
              />
            </Section>
          ))}

          <RelatedSection
            relatedItems={relatedSection?.relatedItems || []}
            slug={slug}
          />
        </div>
      </div>
    </div>
  );
}
