import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Section } from "@/components/Section";
import { WeatherTimeWidget } from "@/components/WeatherTimeWidget";
import { PracticalInfoWidget } from "@/components/PracticalInfoWidget";
import { getPageData, getAllSlugsByCategory } from "@/lib/data";

// 建议配置 ISR revalidate 时间（秒），这里设置为 1 天
export const revalidate = 86400;

export async function generateStaticParams() {
  // 为了避免十几万页面在 build 阶段全部生成导致超时或内存溢出，
  // 我们可以在 build 阶段只生成部分核心页（如前100个），
  // 其他页面在用户首次访问时通过 ISR 动态生成并缓存。
  const slugs = await getAllSlugsByCategory("encyclopedia");
  return slugs.slice(0, 100).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pageData = await getPageData("encyclopedia", slug);

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
  // 简单的换行转换为段落，实际可以引入 markdown 渲染库如 react-markdown
  return text.split('\n').filter(p => p.trim()).map((p, i) => (
    <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
  ));
}

export default async function EncyclopediaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = await getPageData("encyclopedia", slug);

  if (!pageData) {
    notFound();
  }

  const { content, hero, relatedAttractions } = pageData;

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": content['景点中文名'] || hero.title,
    "description": hero.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": content['城市'],
      "addressCountry": content['国家'],
      "streetAddress": content['地址'] || ''
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
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: content['国家'] || '欧洲', href: `/destinations` },
            { label: content['景点中文名'], href: `/encyclopedia/${slug}` },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 border border-red-100">
              景点百科
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {hero.title || [content['景点中文名'], content['景点英文名'], content['国家'], content['城市']].filter(Boolean).join('・')}
          </h1>

          <div className="mb-8">
            <WeatherTimeWidget city={content['城市']} country={content['国家']} englishName={content['景点英文名']} />
            <PracticalInfoWidget country={content['国家']} />
          </div>

          <p className="text-lg text-gray-600 mb-6 whitespace-pre-line">
            {hero.description || (content['核心简介'] || '').split('\n')[0]}
          </p>
        </div>

        <div className="space-y-8">
          {content['核心简介'] && (
            <Section title="1. 景点介绍">
              {renderSectionContent(content['核心简介'])}
            </Section>
          )}

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">中文名称</div>
                  <div className="text-gray-900 font-medium">{content['景点中文名']}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">英文名称</div>
                  <div className="text-gray-900 font-medium">{content['景点英文名']}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">国家</div>
                  <div className="text-gray-900 font-medium">{content['国家']}</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">开放时间</div>
                  <div className="text-gray-900 font-medium">{content['开放时间'] || '全天开放'}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">门票价格</div>
                  <div className="text-gray-900 font-medium">{content['门票价格'] || '免费'}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-500 mb-1">地址</div>
                  <div className="text-gray-900 font-medium">{content['地址'] || '请参考地图导航'}</div>
                </div>
              </div>
            </div>
          </Section>

          {content['历史背景'] && (
            <Section title="3. 历史背景">
              {renderSectionContent(content['历史背景'])}
            </Section>
          )}

          {content['游览路线步骤'] && (
            <Section title="4. 游览路线">
              {renderSectionContent(content['游览路线步骤'])}
            </Section>
          )}

          {/* 猜你喜欢 */}
          {relatedAttractions && relatedAttractions.length > 0 && (
            <Section title="猜你喜欢">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedAttractions.map((item: any) => (
                  <Link href={`/encyclopedia/${item.slug}`} key={item.slug} className="block group">
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
