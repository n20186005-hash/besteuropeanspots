import { attractions } from "@/lib/attractions";
import { AttractionGallery } from "@/components/AttractionGallery";

export const metadata = {
  title: "历史人文 | Best European Spots",
  description: "探索欧洲深厚的历史人文底蕴。",
};

export default function HistoryPage() {
  const historySpots = attractions.filter(a => a.category?.includes('history'));

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">历史人文</h1>
          <p className="text-lg text-muted">
            深入欧洲古城、修道院与城堡，解密这片土地上流传百年的历史故事与人文风情。
          </p>
        </div>
        <AttractionGallery attractions={historySpots} />
      </div>
    </div>
  );
}