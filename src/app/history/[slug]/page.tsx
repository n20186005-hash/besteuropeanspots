import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Section } from "@/components/Section";
import { WeatherTimeWidget } from "@/components/WeatherTimeWidget";
import { getPageData, getAllSlugsByCategory } from "@/lib/data";

// 建议配置 ISR revalidate 时间（秒），这里设置为 1 天
export const revalidate = 86400;

export async function generateStaticParams() {
  // 为了避免十几万页面在 build 阶段全部生成导致超时或内存溢出，
  // 我们可以在 build 阶段只生成部分核心页（如前100个），
  // 其他页面在用户首次访问时通过 ISR 动态生成并缓存。
  const slugs = await getAllSlugsByCategory("history");
  return slugs.slice(0, 100).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pageData = await getPageData("history", slug);

  if (!pageData) {
    return {};
  }

  const { title, description } = pageData.metadata;

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

function renderSectionContent(text: string) {
  if (!text) return null;
  return text.split('\n').filter(p => p.trim()).map((p, i) => (
    <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
  ));
}

export default async function HistoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = await getPageData("history", slug);

  if (!pageData) {
    notFound();
  }

  const { content, hero, relatedAttractions } = pageData;

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content['景点中文名'] || hero.title,
    "description": hero.description,
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
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: content['国家'] || '欧洲', href: `/destinations` },
            { label: content['景点中文名'], href: `/history/${slug}` },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-100">
              历史人文
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{hero.title}</h1>
          <p className="text-lg text-gray-600 mb-6 whitespace-pre-line">{hero.description}</p>
        </div>

        <WeatherTimeWidget city={content['城市']} country={content['国家']} englishName={content['景点英文名']} />

        <div className="space-y-8">
          {content['导语'] && (
            <Section title="1. 导语">
              {renderSectionContent(content['导语'])}
            </Section>
          )}

          {content['城市起源'] && (
            <Section title="2. 城市/景点起源">
              {renderSectionContent(content['城市起源'])}
            </Section>
          )}

          {content['历史印记'] && (
            <Section title="3. 镌刻时光的历史印记">
              {renderSectionContent(content['历史印记'])}
            </Section>
          )}

          {content['名人传奇'] && (
            <Section title="4. 与这座城共生的名人传奇">
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                {renderSectionContent(content['名人传奇'])}
              </div>
            </Section>
          )}

          {content['民间传说'] && (
            <Section title="5. 民间传说与人文风情">
              {renderSectionContent(content['民间传说'])}
            </Section>
          )}

          {content['历史回响'] && (
            <Section title="6. 历史回响：读懂这座城的旅行意义">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                {renderSectionContent(content['历史回响'])}
              </div>
            </Section>
          )}

          {/* 猜你喜欢 */}
          {relatedAttractions && relatedAttractions.length > 0 && (
            <Section title="猜你喜欢">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedAttractions.map((item: any) => (
                  <Link href={`/history/${item.slug}`} key={item.slug} className="block group">
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
          )}
        </div>
      </div>
    </div>
  );
}
