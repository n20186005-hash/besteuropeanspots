import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布朗库堡・Castelo Branco・葡萄牙・布朗库堡 | 最佳欧洲景点',
  description: '探索布朗库堡，葡萄牙中部的千年军事与人文秘境，以中世纪军事城堡为核心，融合罗曼式、哥特式与巴洛克式建筑风格。',
}

export default function CasteloBrancoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '布朗库堡', href: '/destinations/portugal' },
            { label: '布朗库堡', href: '/attractions/castelo-branco' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布朗库堡・Castelo Branco・葡萄牙・布朗库堡</h1>
          <p className="text-lg text-gray-600 mb-6">
            布朗库堡是葡萄牙中部标志性人文与军事景点，起源于12世纪，保留了中世纪军事堡垒、宗教建筑与古街巷等遗迹。城堡以白色墙体为特色，搭配厚重的防御工事与精致的建筑装饰，核心区域涵盖主城堡、城墙、瞭望塔及周边古街区，既有军事堡垒的雄浑厚重，又有人文建筑的精致典雅，是领略葡萄牙中世纪军事文化、建筑美学与边境民俗风情的必访之地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              布朗库堡是葡萄牙中部标志性人文与军事景点，起源于12世纪，保留了中世纪军事堡垒、宗教建筑与古街巷等遗迹。城堡以白色墙体为特色，搭配厚重的防御工事与精致的建筑装饰，核心区域涵盖主城堡、城墙、瞭望塔及周边古街区，既有军事堡垒的雄浑厚重，又有人文建筑的精致典雅，是领略葡萄牙中世纪军事文化、建筑美学与边境民俗风情的必访之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="布朗库堡" />
                <InfoRow label="英文名称" value="Castelo Branco Castle" />
                <InfoRow label="国家" value="葡萄牙（Portugal）" />
                <InfoRow label="城市" value="布朗库堡（Castelo Branco）" />
                <InfoRow label="所属区域" value="葡萄牙布朗库堡区，中部内陆，毗邻西班牙边境" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史起源" value="12世纪，葡萄牙国王阿方索一世时期" />
                <InfoRow label="建筑风格" value="罗曼式、哥特式与巴洛克式融合" />
                <InfoRow label="核心景点" value="主城堡、城墙、瞭望塔、军事博物馆" />
                <InfoRow label="特色" value="白色墙体、军事防御、边境文化" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="城堡夏季9:00-18:00，冬季10:00-17:00；博物馆10:00-17:00；古街巷全天开放" />
              <InfoRow label="门票价格" value="城堡外围免费；主建筑+博物馆联票成人7欧元；特展成人3欧元；团体8折优惠" />
              <InfoRow label="地址" value="Rua do Castelo, 6000-108 Castelo Branco, Portugal" />
              <InfoRow label="交通方式" value="从里斯本乘火车约2小时40分钟，从波尔图约1小时40分钟；火车站乘公交3站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                布朗库堡的历史渊源可追溯至12世纪，当时葡萄牙国王阿方索一世为巩固中部边境防御，抵御摩尔人与卡斯蒂利亚人的入侵，在地势险要的高地修建军事要塞，这便是布朗库堡的雏形，也是葡萄牙中部早期重要的军事防御据点之一。最初的城堡为木质结构，规模较小，主要用于军事瞭望与防御，随着边境局势的紧张，逐渐改建为石质结构，增设防御城墙与瞭望塔，奠定了如今城堡的基本格局。
              </p>
              <p>
                13至14世纪，布朗库堡迎来第一个发展鼎盛期，作为葡萄牙中部边境的军事重镇，这里驻扎着大量军队，城堡不断扩建，增设了军械库、粮仓、士兵营房等设施，防御体系更加完善，成为守护葡萄牙中部边境的重要屏障。这段时期，城堡不仅承担着军事防御功能，还逐渐成为周边地区的行政与商业中心，周边聚集了商人、工匠与农民，形成了最初的古街巷与市井聚落，摩尔文化与基督教文化在此相互交融，在建筑风格与民俗风情中留下了深刻印记。
              </p>
              <p>
                15世纪，葡萄牙实现国家统一，边境局势趋于稳定，布朗库堡的军事功能逐渐弱化，开始向人文与商业重镇转型。这一时期，当地贵族对城堡进行了大规模修缮与改建，在保留军事防御功能的基础上，融入了罗曼式与哥特式建筑风格，增添了精致的雕塑、华丽的壁画与拱形门窗，让原本雄浑的军事堡垒增添了人文气息。同时，城堡周边的古街巷不断延伸，花岗岩与白色墙体的民居错落有致，形成了兼具军事特色与市井烟火气的古城风貌。
              </p>
              <p>
                16至17世纪，巴洛克风格传入葡萄牙，布朗库堡的城堡与周边宗教建筑进行了局部改建，城堡内部的大厅、礼拜堂增添了华丽的装饰与曲线造型，周边的圣母教堂也融入了巴洛克元素，让古城的建筑风格更加多元。这段时期，布朗库堡成为葡萄牙中部的文化重镇，聚集了大量学者与艺术家，当地的手工艺品、葡萄酒产业逐渐兴起，进一步丰富了古城的人文底蕴。
              </p>
              <p>
                20世纪以来，葡萄牙政府将布朗库堡列为国家级历史遗迹，加大了保护与修缮力度，完善了古城的基础设施，增设了游客服务中心、导览标识等，让城堡既能承载千年军事历史，又能适配现代游览需求。如今，布朗库堡不仅是葡萄牙中部的文化地标，更是全球游客感受伊比利亚半岛中世纪军事文化与边境风情的重要窗口，每年吸引着数十万游客前来探访，重温千年防御传奇。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从布朗库堡火车站出发，乘坐3路公交抵达城堡入口，这是游览的起点。首先参观城堡外围城墙，漫步在厚重的石质城墙上，欣赏中世纪防御工事的雄浑，远眺周边田园与城市风光，感受军事堡垒的威严；随后进入城堡主建筑，参观内部的军事博物馆，观赏古代军械、盔甲、地图等文物，了解布朗库堡的军事历史与边境防御故事。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  参观完博物馆后，登顶城堡的瞭望塔，俯瞰整座布朗库堡古城的全貌，感受白色墙体与花岗岩建筑的错落之美，远处的丘陵与田园风光尽收眼底；随后走出城堡，漫步周边的古街巷，欣赏白色墙体的民居、复古小店与精致的窗台装饰，感受古城的市井烟火气；最后前往城堡脚下的中心广场，欣赏广场上的雕塑与喷泉，休息片刻后，沿原路返回，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验城堡精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加宗教建筑探访、民俗体验与美食品尝，深入感受布朗库堡的多元魅力。参观完中心广场后，前往周边的圣母教堂，这座融合了哥特式与巴洛克风格的教堂，外墙精美华丽，内部的壁画与雕塑极具艺术价值，感受宗教文化与建筑艺术的交融。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  离开教堂后，深度漫步古城街巷，探访当地的民俗小店，购买传统手工艺品、葡萄酒与特色甜点，感受当地的民俗风情；随后前往城堡周边的田园小径，徒步25分钟，欣赏葡萄牙中部的田园风光，感受自然与人文的交融，沿途可打卡当地的小型农场，了解当地的农业文化。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  徒步结束后，前往古城内的特色餐厅，品尝葡萄牙中部传统美食，如烤羊肉、豆焖肉、葡式炸鳕鱼等，搭配当地产的红葡萄酒，体验葡萄牙中部的饮食文化；傍晚时分，再次返回城堡，欣赏夕阳下的城堡全景，金色余晖洒在白色墙体上，氛围感拉满，感受夜幕降临前的静谧氛围，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验古城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 进入城堡与教堂需着装端庄，避免穿着短裤、短裙、露肩装</li>
                <li>• 博物馆内禁止拍照、触摸展品，参观时需保持安静，遵守工作人员指引</li>
                <li>• 夏季（6-8月）是旅游旺季，城堡参观人数较多，建议错峰前往</li>
                <li>• 冬季部分路段可能有积雪，需穿着防滑步行鞋</li>
                <li>• 城堡地势较高，台阶较多，建议穿着舒适的步行鞋</li>
                <li>• 古城周边售卖点较少，建议提前准备好饮用水与小零食</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 城堡瞭望塔顶端</h4>
                  <p className="text-sm text-gray-700">拍摄布朗库堡全景的最佳机位，从这里可将整座古城的白色民居、蜿蜒街巷、中心广场尽收眼底，远处的丘陵与田园风光隐约可见。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 城堡主入口处</h4>
                  <p className="text-sm text-gray-700">城堡主入口的拱形大门的罗曼式雕花的绝佳机位，厚重的石质大门、精致的雕花与白色墙体相互映衬，尽显中世纪军事建筑的雄浑与精致。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 古城白色街巷拐角</h4>
                  <p className="text-sm text-gray-700">布朗库堡的白色民居街巷是拍摄复古氛围的核心机位，以纯净的白色墙体为背景，蜿蜒的石板路延伸至远方，两侧的窗台摆放着鲜花。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 圣母教堂外墙前</h4>
                  <p className="text-sm text-gray-700">圣母教堂的巴洛克式外墙是拍摄建筑特写的小众机位，外墙的精美雕花、华丽装饰与柔和的色彩，尽显巴洛克艺术的优雅。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 城堡城墙中段</h4>
                  <p className="text-sm text-gray-700">城墙中段的瞭望口是拍摄军事氛围的独特机位，透过瞭望口可拍摄到城堡内部的建筑与外部的田园风光，既有军事堡垒的历史厚重感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 田园小径旁</h4>
                  <p className="text-sm text-gray-700">位于古城外围的田园小径，是拍摄古城与自然景观同框的绝佳机位。以翠绿的田园为前景，古城的白色民居与城堡塔楼在远处矗立。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 古城建筑以白色为主，建议穿搭深色衣物（如黑色、深蓝色），形成鲜明对比</li>
                <li>• 拍摄街巷时，可携带复古帽子、披肩等道具，增强复古氛围感</li>
                <li>• 室内拍摄时，避免使用闪光灯，以免影响建筑装饰与展品</li>
                <li>• 尊重当地规定，博物馆内部、教堂祭坛区域禁止拍照</li>
                <li>• 徒步拍摄时，注意脚下的石板路与台阶，避免滑倒</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">布朗库堡考古博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城核心区域约800米，步行10分钟可达，展示布朗库堡及周边地区历史文物的博物馆，馆内收藏了古罗马时期、中世纪的陶器、青铜器、军械等文物。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🏛️ 历史文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">塔霍河沿岸步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离古城约2公里，乘坐5路公交可直达，沿塔霍河修建的休闲步道，步道两侧绿植繁茂、河水潺潺，还有雕塑与休闲座椅。</p>
                <div className="text-xs text-gray-500">🚌 公交直达 | 🌊 河畔风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">马尔旺城堡</h4>
                <p className="text-sm text-gray-700 mb-2">距离布朗库堡约25分钟车程，保留完好的中世纪军事城堡，始建于12世纪，融合了罗曼式与哥特式建筑风格，周边环绕着翠绿的山林。</p>
                <div className="text-xs text-gray-500">🚗 车程25分钟 | 🏰 军事城堡</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">塞拉·德·埃斯特雷拉自然公园</h4>
                <p className="text-sm text-gray-700 mb-2">距离布朗库堡约40分钟车程，葡萄牙中部著名的自然景观，公园内山川连绵、森林茂密，还有湖泊、瀑布等自然景观，可徒步、露营、野餐。</p>
                <div className="text-xs text-gray-500">🚗 车程40分钟 | 🏔️ 自然公园</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">瓜达小镇</h4>
                <p className="text-sm text-gray-700 mb-2">距离布朗库堡约30分钟车程，保留完好的中世纪小镇，小镇内白色民居错落有致，鹅卵石街巷蜿蜒交错，还有古老的教堂、城堡遗址与民俗小店。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | 🏘️ 中世纪小镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">葡萄牙-西班牙边境小镇巴达霍斯</h4>
                <p className="text-sm text-gray-700 mb-2">距离布朗库堡约1小时车程，兼具葡萄牙与西班牙文化特色的边境小镇，小镇内既有葡萄牙的建筑风格，又有西班牙的民俗风情。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 🌍 边境文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">古城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离城堡、古街巷、中心广场等核心景点较近，步行即可抵达，周边环境安静复古，推窗即可欣赏白色民居与城堡风光。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">交通便捷，距离火车站步行5-10分钟，适合需要乘坐火车前往周边景点的游客，周边有餐厅、便利店，生活便利。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">塔霍河沿岸</h4>
                  <p className="text-sm text-yellow-800">距离古城约2公里，环境清幽，推窗即可欣赏河景，适合休闲度假的游客，可沿河散步，感受自然之美。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端文化主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于古城核心区域，部分由历史建筑改建而成，融合了复古与现代元素，自带餐厅、观景露台，部分房型可欣赏城堡或田园风光。</p>
                  <div className="text-xs text-gray-500">💎 文化体验 | 🏰 历史建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于火车站附近或古城外围，步行可达核心景点，房间干净整洁，设施齐全，价格适中，性价比突出。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭情侣</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-8月、10月）：</strong>建议提前1-2个月预订，秋季风光最佳</p>
                    <p className="mb-2"><strong>淡季（11月-次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+城堡联票的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>葡萄牙住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>货币注意：</strong>葡萄牙通用欧元，酒店均支持欧元支付</p>
                    <p><strong>注意事项：</strong>古城夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                布朗库堡，这座矗立在葡萄牙中部的千年军事秘境，历经近千年的风雨变迁，依然以雄浑的军事城堡、纯净的白色民居、蜿蜒的古街巷，诉说着伊比利亚半岛的边境传奇与人文底蕴。它既有中世纪军事堡垒的沧桑厚重，又有宗教建筑的精致优雅；既有边境文化的多元交融，又有市井生活的烟火气息。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步城堡城墙，感受军事防御的威严；可以走进博物馆，触摸千年历史的温度；可以穿梭街巷，感受复古静谧的氛围；可以漫步田园，领略葡萄牙中部的自然之美。无论是独自旅行、情侣出游还是家庭度假，布朗库堡都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与文化的浸润中，读懂葡萄牙中部的独特魅力，爱上这片兼具军事底蕴与自然之美的土地。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}