import { attractions } from "@/lib/attractions";
import { AttractionGallery } from "@/components/AttractionGallery";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { collections } from "../page";

// 生成静态路由参数
export function generateStaticParams() {
  return collections.map((col) => ({
    slug: col.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug);
  if (!collection) {
    return { title: "榜单未找到" };
  }
  return {
    title: `${collection.title} | Best European Spots`,
    description: collection.description,
  };
}

export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug);

  if (!collection) {
    notFound();
  }

  // 根据榜单的过滤条件筛选景点，并限制最多显示 15 个（如标题所暗示）
  const filteredSpots = attractions.filter(collection.filter).slice(0, 15);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Breadcrumb
          items={[
            { label: "首页", href: "/" },
            { label: "精选榜单", href: "/collections" },
            { label: collection.title, href: `/collections/${params.slug}` },
          ]}
        />

        <div className="max-w-3xl mb-12 mt-8">
          <h1 className="text-4xl font-bold text-primary mb-4">{collection.title}</h1>
          <p className="text-lg text-muted">
            {collection.description}
          </p>
        </div>
        
        <AttractionGallery attractions={filteredSpots} />
      </div>
    </div>
  );
}
