import { attractions } from "@/lib/attractions";
import { AttractionGallery } from "@/components/AttractionGallery";

export const metadata = {
  title: "景点游记 | Best European Spots",
  description: "精选欧洲旅行游记，带你深入体验小众秘境。",
};

export default function TraveloguePage() {
  const travelogueSpots = attractions.filter(a => a.category?.includes('travelogue'));

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">景点游记</h1>
          <p className="text-lg text-muted">
            跟随旅行者的脚步，阅读深度探访游记，感受每个角落独特的生活气息。
          </p>
        </div>
        <AttractionGallery attractions={travelogueSpots} />
      </div>
    </div>
  );
}