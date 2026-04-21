import { attractions } from "@/lib/attractions";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = {
  title: "欧洲目的地 | Best European Spots",
  description: "探索欧洲各国的小众宝藏景点。按国家和地区浏览隐藏的欧洲美景。",
};

export default function DestinationsPage() {
  // 提取所有国家并按拼音或首字母排序
  const countries = Array.from(
    new Map(
      attractions
        .filter((a) => a.countrySlug && a.country)
        .map((a) => [a.countrySlug, a.country])
    )
  ).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "目的地", href: "/destinations" },
          ]}
        />
        
        <div className="max-w-3xl mb-12 mt-8">
          <h1 className="text-4xl font-bold text-primary mb-4">欧洲目的地</h1>
          <p className="text-lg text-muted">
            选择你感兴趣的国家，发现那些不为人知的小众美景与历史遗迹。
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {countries.map(([slug, name]) => {
            const count = attractions.filter((a) => a.countrySlug === slug).length;
            return (
              <Link
                key={slug}
                href={`/destinations/${slug}`}
                className="group flex flex-col items-center justify-center p-6 bg-surface rounded-xl border border-gray-100 hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <span className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {name}
                </span>
                <span className="text-sm text-gray-500 mt-2">{count} 个景点</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
