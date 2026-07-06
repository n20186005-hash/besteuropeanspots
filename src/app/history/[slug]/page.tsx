export const runtime = "edge";

import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Section } from "@/components/Section";
import { WeatherTimeWidget } from "@/components/WeatherTimeWidget";
import { PracticalInfoWidget } from "@/components/PracticalInfoWidget";
import { getRemoteAttraction } from "@/lib/attractions-remote";
import {
  getAttractionPageContent,
} from "@/lib/attraction-page-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pageContent = await getAttractionPageContent(slug);
  const attraction = await getRemoteAttraction(slug);

  if (!pageContent && !attraction) {
    return {};
  }

  const title = pageContent?.metadata.title || `${attraction?.name} - 历史人文`;
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

export default async function HistoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [pageContent, attraction] = await Promise.all([
    getAttractionPageContent(slug),
    getRemoteAttraction(slug),
  ]);

  if (!pageContent || !attraction) {
    notFound();
  }

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageContent.hero.title || attraction.name,
    "description": pageContent.hero.description || attraction.description,
    "articleSection": "History",
    "publisher": {
      "@type": "Organization",
      "name": "Best European Spots"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={pageContent.breadcrumbs} />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-100">
              历史人文
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
