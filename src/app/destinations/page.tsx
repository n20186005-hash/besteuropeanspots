import { attractions } from "@/lib/attractions";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GLOBAL_COUNTRIES_BY_CONTINENT, getAttractionCountries, getCountrySlug } from "@/lib/countries";

export const metadata = {
  title: "欧洲目的地 | Best European Spots",
  description: "探索欧洲各国的小众宝藏景点。按国家和地区浏览隐藏的欧洲美景。",
};

export default function DestinationsPage() {
  // 扫描 JSON 中的真实数据，判断哪些国家有景点
  const activeCountriesCount: Record<string, number> = {};
  const activeCountriesSlugs: Record<string, string> = {};

  attractions.forEach((a) => {
    const countryList = getAttractionCountries(a);
    countryList.forEach((c: string) => {
      activeCountriesCount[c] = (activeCountriesCount[c] || 0) + 1;
      activeCountriesSlugs[c] = getCountrySlug(c);
    });
  });

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(GLOBAL_COUNTRIES_BY_CONTINENT).map(([continent, countryList]) => {
            // 只渲染在当前数据库中有景点的国家
            const activeInContinent = countryList.filter(c => activeCountriesCount[c] > 0);
            
            if (activeInContinent.length === 0) return null;

            return (
              <div key={continent} className="mb-12 col-span-full">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-blue-500 inline-block">
                  {continent}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {activeInContinent.map(country => {
                    const slug = activeCountriesSlugs[country];
                    const count = activeCountriesCount[country];
                    
                    return (
                      <Link 
                        key={country} 
                        href={`/destinations/${slug}`}
                        className="group block p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-blue-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                            {country}
                          </span>
                          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-semibold">
                            {count}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
