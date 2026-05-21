import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Section } from "@/components/Section";
import { WeatherTimeWidget } from "@/components/WeatherTimeWidget";
import { PracticalInfoWidget } from "@/components/PracticalInfoWidget";
import { getAttraction, getAllSlugs } from "@/lib/attractions";
import {
  getAttractionPageContent,
} from "@/lib/attraction-page-data";

// 建议配置 ISR revalidate 时间（秒），这里设置为 1 天
export const revalidate = 86400;

export async function generateStaticParams() {
  // 为了避免十几万页面在 build 阶段全部生成导致超时或内存溢出，
  // 我们可以在 build 阶段只生成部分核心页（如前100个），
  // 其他页面在用户首次访问时通过 ISR 动态生成并缓存。
  const slugs = getAllSlugs();
  return slugs.slice(0, 100).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pageContent = getAttractionPageContent(slug);
  const attraction = getAttraction(slug);

  if (!pageContent && !attraction) {
    return {};
  }

  const title = pageContent?.metadata.title || `${attraction?.name} - 景点百科`;
  const description = pageContent?.metadata.description || attraction?.description || "";

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

export default async function EncyclopediaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageContent = getAttractionPageContent(slug);
  const attraction = getAttraction(slug);

  if (!pageContent || !attraction) {
    notFound();
  }

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": pageContent.hero.title || attraction.name,
    "description": pageContent.hero.description || attraction.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": attraction.city,
      "addressCountry": attraction.country,
      "streetAddress": attraction.address || ''
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 注入 JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={pageContent.breadcrumbs} />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 border border-red-100">
              景点百科
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {pageContent.hero.title || `${attraction.name}・${attraction.englishName}・${attraction.country}・${attraction.city}`.replace(/・$/, '')}
          </h1>

          <div className="mb-8">
            <WeatherTimeWidget city={attraction.city} country={attraction.country} englishName={attraction.englishName} />
            <PracticalInfoWidget country={attraction.country} />
          </div>

          <p className="text-lg text-gray-600 mb-6 whitespace-pre-line">
            {pageContent.hero.description || attraction.description}
          </p>
        </div>

        <div className="space-y-8">
          {pageContent.sections.map((section) => (
            <Section key={section.title} title={section.title}>
              <div
                className="space-y-4 [&_a]:text-blue-600 [&_a]:hover:underline"
                dangerouslySetInnerHTML={{ __html: section.bodyHtml }}
              />
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
}
