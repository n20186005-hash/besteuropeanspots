import { attractions } from "@/lib/attractions";
import { AttractionGallery } from "@/components/AttractionGallery";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";

// 生成静态路由参数
export function generateStaticParams() {
  const slugs = Array.from(new Set(attractions.map((a) => a.countrySlug).filter(Boolean)));
  return slugs.map((slug) => ({
    countrySlug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ countrySlug: string }> }) {
  const { countrySlug } = await params;
  const country = attractions.find((a) => a.countrySlug === countrySlug)?.country;
  if (!country) {
    return { title: "目的地未找到" };
  }
  return {
    title: `${country} 小众景点 | Best European Spots`,
    description: `探索${country}深度游攻略与隐藏宝藏景点，了解其背后的历史与文化。`,
  };
}

export default async function CountryPage({ params }: { params: Promise<{ countrySlug: string }> }) {
  const { countrySlug } = await params;
  const countrySpots = attractions.filter((a) => a.countrySlug === countrySlug);

  if (countrySpots.length === 0) {
    notFound();
  }

  const countryName = countrySpots[0]!.country;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "目的地", href: "/destinations" },
            { label: countryName, href: `/destinations/${countrySlug}` },
          ]}
        />

        <div className="max-w-3xl mb-12 mt-8">
          <h1 className="text-4xl font-bold text-primary mb-4">{countryName} 小众景点</h1>
          <p className="text-lg text-muted">
            深入探索{countryName}那些避开人潮的绝美古镇、历史遗迹与自然风光。
          </p>
        </div>
        
        <AttractionGallery attractions={countrySpots} />
      </div>
    </div>
  );
}
