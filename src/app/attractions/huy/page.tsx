import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '胡伊古城・Huy・比利时・胡伊 | 最佳欧洲景点',
  description: '探索胡伊古城，比利时瓦隆地区极具历史底蕴的中世纪古城，坐落于默兹河畔山丘，融合罗马式、哥特式与文艺复兴建筑风格。',
}

export default function HuyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '胡伊古城', href: '/attractions/huy' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">胡伊古城・Huy・比利时・胡伊</h1>
          <p className="text-lg text-gray-600 mb-6">
            胡伊古城是比利时瓦隆地区千年古城，始建于罗马时期，坐落于默兹河畔山丘，融合多种建筑风格。古城核心为胡伊城堡与圣马丁大教堂，留存着中世纪城墙、古桥等遗迹，兼具军事防御价值与建筑艺术美感，陈列着中世纪文物与历史资料，见证了瓦隆地区的历史更迭，是追溯欧洲中世纪历史、体验当地人文风情的必访之地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              胡伊古城是比利时瓦隆地区千年古城，始建于罗马时期，坐落于默兹河畔山丘，融合多种建筑风格。古城核心为胡伊城堡与圣马丁大教堂，留存着中世纪城墙、古桥等遗迹，兼具军事防御价值与建筑艺术美感，陈列着中世纪文物与历史资料，见证了瓦隆地区的历史更迭，是追溯欧洲中世纪历史、体验当地人文风情的必访之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="胡伊古城" />
                <InfoRow label="英文名称" value="Huy" />
                <InfoRow label="国家" value="比利时（Belgium）" />
                <InfoRow label="城市" value="胡伊（Huy）" />
                <InfoRow label="所属区域" value="比利时瓦隆大区列日省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="瓦隆地区极具历史底蕴的中世纪古城" />
                <InfoRow label="核心特色" value="罗马式、哥特式与文艺复兴建筑风格融合" />
                <InfoRow label="文化价值" value="始建于罗马时期的千年古城" />
                <InfoRow label="建筑价值" value="军事防御遗迹与宗教建筑完美结合" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="淡季周二至周日10:00-16:30；旺季周一至周日10:00-17:30" />
              <InfoRow label="门票价格" value="古城免费；胡伊城堡成人7欧元；圣马丁大教堂成人5欧元" />
              <InfoRow label="地址" value="Place du Marché, 4500 Huy, Belgium" />
              <InfoRow label="交通方式" value="从布鲁塞尔乘火车至列日转巴士约1.5小时；从列日乘巴士约40分钟" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                胡伊古城的历史可追溯至公元前1世纪的罗马时期，最初是罗马帝国统治下的一个军事据点，因地处默兹河畔的战略要地，成为连接罗马与北方部落的交通枢纽，也是重要的军事防御要塞，见证了欧洲两千多年的历史更迭与时代变迁。
              </p>
              <p>
                罗马时期至5世纪，是古城的初创与发展期。公元前51年，罗马人征服比利时地区后，在默兹河畔的山丘上修建了军事堡垒，命名为"Civitas Tungrorum"，作为防御日耳曼部落入侵的前沿阵地。这一时期，古城逐渐形成雏形，修建了简易的城墙、道路与居住设施，主要居民为罗马士兵与当地部落居民，以农业、手工业与河运为生，成为罗马帝国北方边境的重要据点。随着罗马帝国的衰落，古城一度陷入混乱，先后被日耳曼部落与法兰克人占领，逐渐成为法兰克王国的一部分。
              </p>
              <p>
                6世纪至12世纪，胡伊古城进入稳定发展期，成为宗教与军事并重的重要城镇。6世纪，基督教传入胡伊地区，当地修建了第一座教堂——圣马丁教堂（后扩建为圣马丁大教堂），宗教文化逐渐成为古城的核心文化之一。980年，列日主教区建立后，胡伊成为主教区的重要领地，受列日主教管辖，宗教势力日益壮大，教堂与修道院逐渐增多，古城也逐渐成为区域性的宗教文化中心。这一时期，古城开始大规模修建防御工事，加固城墙、修建城堡，形成了"山丘筑城、河畔设防"的独特格局，成为中世纪欧洲军事防御建筑的典范。
              </p>
              <p>
                13世纪至16世纪，胡伊古城进入鼎盛时期。随着中世纪欧洲商业的兴起，默兹河成为重要的贸易通道，胡伊凭借优越的地理位置，成为河运贸易的重要中转站，主要经营羊毛、皮革、葡萄酒等商品，商业繁荣带动了古城的发展。这一时期，古城进行了大规模扩建，修建了更多的民居、商铺、教堂与公共建筑，建筑风格逐渐从罗马式向哥特式过渡，圣马丁大教堂、胡伊城堡等核心建筑均在这一时期完成扩建与修缮，成为古城的标志性建筑。同时，古城的政治地位也不断提升，成为列日主教区的重要行政中心，举办各类宗教仪式与商业活动，吸引了大量商人、修士与学者前来。
              </p>
              <p>
                17世纪至19世纪，古城历经战乱与动荡，逐渐走向衰落。17世纪，欧洲爆发宗教战争与三十年战争，胡伊地区多次被战火波及，古城的城墙、城堡与教堂遭到严重破坏，大量文物被损毁或掠夺，商业活动也受到严重影响。1789年法国大革命爆发后，胡伊被法国占领，宗教势力受到冲击，教堂与修道院的部分建筑被改造为公共设施，古城的宗教功能逐渐弱化。19世纪，比利时独立后，胡伊成为列日省的重要城镇，当地政府开始对古城进行修复，修复受损的城墙、城堡与教堂，恢复古城的历史风貌，同时发展工业与农业，古城逐渐恢复生机，但规模与影响力已不及鼎盛时期。
              </p>
              <p>
                20世纪至今，胡伊古城迎来全面保护与新生。20世纪初，比利时政府将胡伊古城列为历史文化遗产，对其进行系统性保护与修缮，严格保留古城的中世纪风貌，禁止大规模现代化改造。二战期间，胡伊虽被德国占领，但古城核心建筑未遭到严重破坏，战后政府再次对其进行修复，完善基础设施，将部分历史建筑改造为博物馆、文化中心，展示古城的历史与文物。如今，胡伊古城已成为比利时著名的历史景点，吸引着世界各地的游客前来探访，既保留着中世纪的古朴风貌，又融入了现代生活气息，成为历史与现代交融的典范。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（2.5-3.5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  镇主广场 → 默兹河古桥 → 古城城墙入口 → 胡伊城堡 → 圣马丁大教堂 → 古城老街 → 胡伊历史博物馆 → 镇中心特色商铺与餐馆
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>可从镇主广场出发，全程步行游览，路线舒缓，兼顾军事遗迹、宗教建筑、历史文物与人文风情，可租赁语音导览（支持多语言），也可跟随当地导览团（约1.5小时，提供多语言服务）
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 镇主广场</h4>
                  <p className="text-sm text-gray-700 mb-2">作为胡伊市的核心区域，镇主广场矗立着市政厅、历史雕像与喷泉，周边环绕着古朴的石质房屋、特色商铺与餐馆，是当地市民休闲聚会的场所，充满复古气息。</p>
                  <div className="text-xs text-gray-500">🏛️ 镇中心 | 🏘️ 中世纪建筑</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 默兹河古桥</h4>
                  <p className="text-sm text-gray-700 mb-2">从镇主广场步行3分钟即可抵达默兹河古桥，这座古桥始建于13世纪，是中世纪欧洲石拱桥的典范，桥面由石板铺成，两侧设有石质护栏，雕刻着精美的花纹与历史图案。</p>
                  <div className="text-xs text-gray-500">🚶 步行3分钟 | 🌉 中世纪石桥</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 古城城墙入口</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过默兹河古桥，即可抵达古城城墙入口，这里是进入古城核心区域的必经之路。城墙始建于罗马时期，历经多次修缮，保留着中世纪的防御风貌，墙体厚重，设有瞭望塔与城门。</p>
                  <div className="text-xs text-gray-500">🏰 古城墙 | 🚪 罗马时期</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 胡伊城堡</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着石板路步行10分钟，即可抵达胡伊城堡，城堡坐落于古城最高处的山丘上，是古城的核心军事遗迹，始建于10世纪，历经多次扩建与修缮，融合了罗马式与哥特式建筑风格。</p>
                  <div className="text-xs text-gray-500">🏰 军事遗迹 | 🏔️ 山顶城堡</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 圣马丁大教堂</h4>
                  <p className="text-sm text-gray-700 mb-2">从城堡下来，步行5分钟即可抵达圣马丁大教堂，这座教堂始建于6世纪，是胡伊古城最古老的宗教建筑，历经多次扩建，融合了罗马式、哥特式与巴洛克式建筑风格。</p>
                  <div className="text-xs text-gray-500">⛪ 古老教堂 | 🎨 多种建筑风格</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 古城老街</h4>
                  <p className="text-sm text-gray-700 mb-2">从圣马丁大教堂出来，即可漫步在古城老街，老街蜿蜒曲折，由石板铺成，两侧是古朴的石质民居、特色商铺与咖啡馆，建筑风格保留着中世纪的风貌，墙面爬满绿植。</p>
                  <div className="text-xs text-gray-500">🏘️ 古街漫步 | 🌿 中世纪风貌</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">7. 胡伊历史博物馆</h4>
                  <p className="text-sm text-gray-700 mb-2">老街尽头便是胡伊历史博物馆，这座博物馆位于一座中世纪建筑内，展示着胡伊古城从罗马时期至今的历史变迁、文物与当地文化，分为多个展区。</p>
                  <div className="text-xs text-gray-500">🏛️ 历史博物馆 | 📚 文化展示</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">8. 镇中心特色商铺与餐馆</h4>
                  <p className="text-sm text-gray-700 mb-2">游览完博物馆后，返回镇主广场周边，这里的特色商铺与餐馆集中，可购买当地特色纪念品，也可品尝当地传统美食，如比利时华夫饼、炸薯条、当地啤酒与奶酪。</p>
                  <div className="text-xs text-gray-500">🛍️ 特色购物 | 🍽️ 当地美食</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 默兹河古桥全景机位</h4>
                  <p className="text-sm text-gray-700">位于默兹河古桥中段，采用平视角度，拍摄古桥的全貌与默兹河的风光，将古桥的石质结构、雕刻细节与河流的碧波融为一体，画面开阔优美，能展现古桥的古朴与河流的秀丽。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 古城城墙城门机位</h4>
                  <p className="text-sm text-gray-700">位于古城城墙入口处，采用仰拍角度，拍摄城门与城墙的局部特写，利用城墙的厚重感与城门的对称感，凸显古城的军事防御特色，清晰展现城门上的雕刻铭文与历史痕迹。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 胡伊城堡瞭望塔机位</h4>
                  <p className="text-sm text-gray-700">在城堡的瞭望塔上，采用俯拍角度，拍摄整个胡伊古城的全景，将古城的石板路、古朴民居、圣马丁大教堂与默兹河的风光尽收眼底，画面恢弘壮观，能展现古城"山丘筑城、河畔而居"的独特格局。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 圣马丁大教堂尖塔机位</h4>
                  <p className="text-sm text-gray-700">位于教堂前方的广场上，采用仰拍角度，拍摄教堂的尖塔与外观全貌，利用尖塔的高耸感与建筑的对称美，凸显教堂的宏伟与庄严，清晰展现墙面的浮雕与花纹细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 古城老街机位</h4>
                  <p className="text-sm text-gray-700">在古城老街的石板路上，采用平视或侧拍角度，拍摄老街的蜿蜒景象与两侧的民居，搭配老街的绿植与古朴商铺，画面充满复古气息与生活感，能展现古城的慢生活节奏。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 默兹河畔远景机位</h4>
                  <p className="text-sm text-gray-700">在默兹河南岸的观景台，采用平视角度，拍摄胡伊古城的远景，将城堡、教堂、城墙与默兹河同框，展现古城与自然的融合之美，画面开阔，既有古城的古朴庄严，又有河流的秀丽灵动。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览古城时，禁止攀爬建筑、刻画墙体，避免损坏文物</li>
                <li>• 教堂内禁止大声喧哗，拍摄时禁止使用闪光灯</li>
                <li>• 博物馆内部分展品禁止拍摄，需遵守现场指示</li>
                <li>• 户外拍摄时，注意脚下安全，避免踩踏草坪、破坏植被</li>
                <li>• 遵守景区规定，共同保护历史遗迹与景区环境</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">列日老城（Liège Old Town）</h4>
                <p className="text-sm text-gray-700 mb-2">距离胡伊约30公里，驾车35分钟可达，乘坐巴士约50分钟可达，是列日省的首府，也是比利时瓦隆地区的重要城市。列日老城保留着大量中世纪与文艺复兴时期的建筑，核心景点有列日大教堂、王子主教宫、集市广场等。</p>
                <div className="text-xs text-gray-500">🚗 车程35分钟 | 🏛️ 瓦隆首府</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">瑟兰城堡（Château de Seraing）</h4>
                <p className="text-sm text-gray-700 mb-2">距离胡伊约15公里，驾车20分钟可达，乘坐巴士约30分钟可达，始建于11世纪，是中世纪欧洲军事城堡的典范，融合了罗马式与哥特式建筑风格。城堡保留着完整的城墙、瞭望塔与主塔楼。</p>
                <div className="text-xs text-gray-500">🏰 军事城堡 | 🌳 花园环绕</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">默兹河步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约2公里，步行或驾车5分钟可达，这条步道沿着默兹河北岸修建，全长约8公里，步道平缓，难度较低，适合徒步休闲与骑行。沿途风景秀丽，可欣赏默兹河的碧波、两岸的田园风光与古朴村落。</p>
                <div className="text-xs text-gray-500">🚶 河滨步道 | 🌸 四季美景</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣博尼法斯教堂（Saint Boniface Church）</h4>
                <p className="text-sm text-gray-700 mb-2">距离胡伊约8公里，驾车12分钟可达，乘坐巴士约20分钟可达，始建于12世纪，是瓦隆地区重要的宗教遗迹，建筑风格融合了哥特式与巴洛克式，外观宏伟壮观，内部装饰精美。</p>
                <div className="text-xs text-gray-500">⛪ 宗教遗迹 | 🕊️ 宁静氛围</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">镇中心或靠近古城入口</h4>
                  <p className="text-sm text-blue-800">优先选择镇中心或靠近古城入口的住宿，步行可达古城核心景点、镇主广场与默兹河古桥，方便游览，同时能深度感受古城的古朴氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">默兹河畔或镇边缘</h4>
                  <p className="text-sm text-green-800">如果喜欢安静，可选择默兹河畔或镇边缘的住宿，环境静谧，能欣赏到河流与田园风光，适合休息，适合喜欢自然风光的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">镇入口或停车场附近</h4>
                  <p className="text-sm text-yellow-800">若计划游览周边景点（如列日老城、瑟兰城堡），可选择靠近镇入口或停车场的住宿，交通更便捷，便于驾车前往周边景点。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择镇内的青年旅社，普遍干净整洁、价格实惠，大多步行可达核心景点，部分提供公共厨房，适合背包客与预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中档三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">地理位置优越，房间舒适，部分设有餐厅，提供当地传统美食，适合家庭与情侣，性价比高，设施完善。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于默兹河畔或古城周边，环境优雅，房间装饰精美，部分可欣赏到古城或河流远景，设有露台与高级餐厅，适合追求品质的游客。</p>
                  <div className="text-xs text-gray-500">🏰 豪华住宿 | 🏞️ 自然景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">家庭经营民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为石质建筑，装修古朴，常提供当地特色早餐，充满乡土气息，适合喜欢体验当地生活的游客，温馨舒适。</p>
                  <div className="text-xs text-gray-500">🏡 家庭氛围 | 🍳 特色早餐</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>胡伊的旅游旺季为4月至10月，尤其是夏季（7-8月）与节假日期间，游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>特色服务：</strong>部分住宿提供城堡、大教堂门票折扣券，可节省游览成本</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>比利时的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，与德国、法国一致，可提前准备转换插头</p>
                    <p><strong>特殊注意：</strong>冬季胡伊气温较低，部分区域可能有降雪，住宿时可关注是否有供暖设施，避免影响休息</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                胡伊古城，这座矗立在默兹河畔山丘上的千年古城，承载着欧洲两千多年的历史记忆，融合了军事防御的威严与宗教文化的庄严，既有中世纪的古朴沧桑，又有现代生活的温馨惬意。在这里，你可以漫步在千年石板路，感受中世纪的生活气息；登顶城堡瞭望塔，俯瞰古城与河流的秀丽风光；驻足圣马丁大教堂，欣赏精美的建筑与艺术珍品；穿梭在古城老街，体验瓦隆地区的独特人文风情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览胡伊古城，深入了解比利时瓦隆地区的历史与文化，留下一段难忘的欧洲旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年古城与默兹河的交融中，邂逅一段跨越时空的历史文化之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}