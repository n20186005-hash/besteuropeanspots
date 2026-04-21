import { attractions } from "@/lib/attractions";
import { collections } from "@/lib/collections";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = {
  title: "精选欧洲旅行榜单 | Best European Spots",
  description: "发现最棒的欧洲小众景点榜单：包括南欧历史遗迹、北欧自然奇观等深度旅行指南。",
};

export default function CollectionsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "精选榜单", href: "/collections" },
          ]}
        />
        
        <div className="max-w-3xl mb-12 mt-8">
          <h1 className="text-4xl font-bold text-primary mb-4">精选旅行榜单</h1>
          <p className="text-lg text-muted">
            精心整理的主题聚合指南，带你深度探索欧洲不同维度的隐秘宝藏。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((col) => {
            const count = attractions.filter(col.filter).length;
            return (
              <Link
                key={col.slug}
                href={`/collections/${col.slug}`}
                className="group flex flex-col bg-surface rounded-2xl border border-gray-100 overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8 flex flex-col h-full">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full w-fit mb-4">
                    包含 {Math.min(count, 15)} 个景点
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3 line-clamp-2">
                    {col.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">
                    {col.description}
                  </p>
                  <div className="flex items-center text-primary font-medium mt-auto">
                    查看榜单
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
