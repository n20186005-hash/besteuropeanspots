import { attractions } from "@/lib/attractions";
import { AttractionGallery } from "@/components/AttractionGallery";

export const metadata = {
  title: "景点百科 | Best European Spots",
  description: "探索欧洲景点百科，了解详细的景点信息。",
};

export default function EncyclopediaPage() {
  const encyclopediaSpots = attractions.filter(a => a.category?.includes('encyclopedia'));

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">景点百科</h1>
          <p className="text-lg text-muted">
            全面收录欧洲各地的标志性景点与小众秘境，为您提供最详实的百科级介绍。
          </p>
        </div>
        <AttractionGallery attractions={encyclopediaSpots} />
      </div>
    </div>
  );
}