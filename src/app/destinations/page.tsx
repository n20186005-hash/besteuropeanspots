import { attractions } from "@/lib/attractions";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata = {
  title: "欧洲目的地 | Best European Spots",
  description: "探索欧洲各国的小众宝藏景点。按国家和地区浏览隐藏的欧洲美景。",
};

// 定义全球全量国家库 (Global Standard Countries)
const GLOBAL_REGIONS = {
  亚洲: ['中国', '日本', '韩国', '朝鲜', '蒙古', '越南', '老挝', '柬埔寨', '泰国', '缅甸', '马来西亚', '新加坡', '印尼', '文莱', '菲律宾', '东帝汶', '尼泊尔', '不丹', '孟加拉国', '印度', '巴基斯坦', '斯里兰卡', '马尔代夫', '哈萨克斯坦', '吉尔吉斯斯坦', '塔吉克斯坦', '乌兹别克斯坦', '土库曼斯坦', '阿富汗', '伊拉克', '伊朗', '叙利亚', '约旦', '黎巴嫩', '以色列', '巴勒斯坦', '沙特阿拉伯', '巴林', '卡塔尔', '科威特', '阿联酋', '阿曼', '也门', '格鲁吉亚', '亚美尼亚', '阿塞拜疆', '土耳其', '塞浦路斯'],
  欧洲: ['法国', '比利时', '卢森堡', '德国', '意大利', '西班牙', '奥地利', '瑞士', '捷克', '斯洛伐克', '匈牙利', '斯洛文尼亚', '克罗地亚', '黑山', '希腊', '瑞典', '挪威', '丹麦', '芬兰', '罗马尼亚', '塞尔维亚', '北马其顿', '立陶宛', '爱沙尼亚', '葡萄牙', '波斯尼亚和黑塞哥维那', '英国', '荷兰', '阿尔巴尼亚', '拉脱维亚', '马耳他', '保加利亚', '波兰', '俄罗斯', '白俄罗斯', '乌克兰', '摩尔多瓦', '冰岛', '爱尔兰', '安道尔', '摩纳哥', '列支敦士登', '圣马力诺', '梵蒂冈'],
  美洲: ['美国', '加拿大', '墨西哥', '危地马拉', '伯利兹', '萨尔瓦多', '洪都拉斯', '尼加拉瓜', '哥斯达黎加', '巴拿马', '巴哈马', '古巴', '牙买加', '海地', '多米尼加', '安提瓜和巴布达', '圣基茨和尼维斯', '多米尼克', '圣卢西亚', '圣文森特和格林纳丁斯', '格林纳达', '巴巴多斯', '特立尼达和多巴哥', '哥伦比亚', '委内瑞拉', '圭亚那', '苏里南', '厄瓜多尔', '秘鲁', '玻利维亚', '巴西', '智利', '阿根廷', '乌拉圭', '巴拉圭'],
  非洲: ['埃及', '苏丹', '南苏丹', '利比亚', '突尼斯', '阿尔及利亚', '摩洛哥', '埃塞俄比亚', '厄立特里亚', '索马里', '吉布提', '肯尼亚', '坦桑尼亚', '乌干达', '卢旺达', '布隆迪', '塞舌尔', '毛里求斯', '安哥拉', '赞比亚', '马拉维', '莫桑比克', '纳米比亚', '博茨瓦纳', '津巴布韦', '南非', '斯威士兰', '莱索托', '马达加斯加', '科摩罗', '佛得角', '塞内加尔', '冈比亚', '马里', '布基纳法索', '几内亚', '几内亚比绍', '塞拉利昂', '利比里亚', '科特迪瓦', '加纳', '多哥', '贝宁', '尼日尔', '尼日利亚', '喀麦隆', '赤道几内亚', '乍得', '中非', '圣多美和普林西比', '加蓬', '刚果（布）', '刚果（金）'],
  大洋洲: ['澳大利亚', '新西兰', '巴布亚新几内亚', '所罗门群岛', '瓦努阿图', '密克罗尼西亚', '马绍尔群岛', '帕劳', '瑙鲁', '基里巴斯', '图瓦卢', '萨摩亚', '斐济', '汤加', '库克群岛', '纽埃']
};

// 预处理全球国家名单并生成拼音/slug映射
import { pinyin } from 'pinyin-pro';
const getSlug = (str: string) => {
  if (str === '英国') return 'uk';
  if (str === '美国') return 'usa';
  if (str === '波黑') return 'bosnia-and-herzegovina';
  if (str === '塞浦路斯') return 'cyprus';
  return pinyin(str, { toneType: 'none', type: 'array' }).join('').toLowerCase();
};

type AttractionWithCountries = {
  country?: string;
  countries?: string[];
  countrySlug?: string;
};

export default function DestinationsPage() {
  // 扫描 JSON 中的真实数据，判断哪些国家有景点
  const activeCountriesCount: Record<string, number> = {};
  const activeCountriesSlugs: Record<string, string> = {};

  attractions.forEach(a => {
    // 支持 countries 数组（跨国景点）或单 country 字段
    const attraction = a as AttractionWithCountries;
    const countryList = Array.isArray(attraction.countries)
      ? attraction.countries
      : attraction.country
        ? [attraction.country]
        : [];
    countryList.forEach((c: string) => {
      activeCountriesCount[c] = (activeCountriesCount[c] || 0) + 1;
      activeCountriesSlugs[c] = attraction.countrySlug || getSlug(c);
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
          {Object.entries(GLOBAL_REGIONS).map(([continent, countryList]) => {
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
