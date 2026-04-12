import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣加仑修道院・St. Gallen Abbey・瑞士・圣加仑 | 最佳欧洲景点',
  description: '探索圣加仑修道院，瑞士东部阿尔卑斯山麓的千年文化瑰宝，1983年联合国教科文组织世界文化遗产，以宏伟的双塔大教堂和珍藏古籍的图书馆闻名于世。',
}

export default function StGallenAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '圣加仑修道院', href: '/attractions/st-gallen-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">圣加仑修道院・St. Gallen Abbey・瑞士・圣加仑</h1>
          <p className="text-lg text-gray-600 mb-6">
            圣加仑修道院是瑞士圣加仑市的标志性人文景点，始建于719年，为巴洛克式建筑典范，1983年列入世界文化遗产。修道院以双塔大教堂、中世纪图书馆为核心，馆藏2000余册中世纪手写本及14万册古籍，既有宗教建筑的庄严恢弘，又有学术殿堂的静谧厚重，是感受中世纪宗教文化、欧洲古典学术魅力与巴洛克建筑美学的绝佳去处。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              圣加仑修道院是瑞士圣加仑市的标志性人文景点，始建于719年，为巴洛克式建筑典范，1983年列入世界文化遗产。修道院以双塔大教堂、中世纪图书馆为核心，馆藏2000余册中世纪手写本及14万册古籍，既有宗教建筑的庄严恢弘，又有学术殿堂的静谧厚重，是感受中世纪宗教文化、欧洲古典学术魅力与巴洛克建筑美学的绝佳去处。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="圣加仑修道院" />
                <InfoRow label="英文名称" value="St. Gallen Abbey (Abbey of St. Gall)" />
                <InfoRow label="国家" value="瑞士（Switzerland）" />
                <InfoRow label="城市" value="圣加仑（St. Gallen）" />
                <InfoRow label="宗教归属" value="本笃会修道院" />
              </div>
              <div className="space-y-4">
                <InfoRow label="始建年代" value="719年（1983年列入世界文化遗产）" />
                <InfoRow label="建筑风格" value="巴洛克式建筑典范" />
                <InfoRow label="文化地位" value="联合国教科文组织世界文化遗产" />
                <InfoRow label="特色" value="双塔大教堂、珍藏古籍的图书馆" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="大教堂全年开放，夏季9:00-18:00，冬季10:00-17:00；图书馆需预约，周二至周日10:00-16:00" />
              <InfoRow label="门票价格" value="大教堂免费开放；图书馆成人18瑞士法郎，青少年10瑞士法郎，儿童免费" />
              <InfoRow label="地址" value="Stiftsplatz 1, 9000 St. Gallen, Switzerland" />
              <InfoRow label="交通方式" value="从苏黎世乘SBB火车1小时6分钟-1小时14分钟，从卢塞恩乘沃卢柏快车约2小时45分钟" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                圣加仑修道院的历史渊源可追溯至7世纪末，公元612年，爱尔兰修士圣加仑（St. Gall）在此隐居修行，搭建了简易的修行小屋，这便是修道院的雏形。圣加仑修士一生致力于传播基督教教义，同时潜心研究学术，吸引了众多信徒前来追随，逐渐形成了一个小型的宗教社群，为修道院的建立奠定了基础。
              </p>
              <p>
                公元719年，圣加仑的弟子在其修行地正式修建修道院，命名为圣加仑修道院，最初为木质结构，主要用于宗教修行与学术研究。中世纪初期，修道院凭借其优越的地理位置与浓厚的学术氛围，逐渐发展成为欧洲重要的学术与宗教中心，吸引了来自欧洲各地的学者、修士前来研习，涵盖神学、哲学、医学、文学、艺术等多个领域，成为中世纪欧洲文化传播的重要枢纽。
              </p>
              <p>
                9世纪，圣加仑修道院迎来了第一个鼎盛时期，时任修道院院长戈兹伯特（Gozbert）主持对修道院进行大规模扩建，将木质建筑改建为石砌结构，增设了教堂、图书馆、修士宿舍等建筑，同时广泛收集古籍、手稿，建立了初具规模的图书馆。这一时期，修道院还诞生了著名的《圣加仑修道院规划图》，这是9世纪创作的中世纪最早的修道院区规划图，现珍藏于修道院图书馆，成为研究中世纪建筑规划的珍贵文物。
              </p>
              <p>
                10至12世纪，圣加仑修道院的影响力持续扩大，不仅在宗教领域占据重要地位，还逐渐掌握了当地的行政、司法与经济权力，拥有大片的土地与葡萄园，成为瑞士东部最具影响力的宗教与世俗势力之一。这一时期，修道院的图书馆不断丰富馆藏，收集了大量的中世纪手写本、羊皮纸手稿，涵盖宗教教义、医学典籍、文学作品等，其中最古老的手稿已有1400多年历史，成为欧洲中世纪学术遗产的重要组成部分。
              </p>
              <p>
                16至17世纪，文艺复兴思潮传入瑞士，圣加仑修道院进行了大规模的改建与扩建，融入了巴洛克式建筑风格，将原本的罗马式教堂改建为巴洛克式双塔大教堂，增设了华丽的雕塑、壁画与灰泥装饰，使修道院的建筑风格更加恢弘精致。同时，图书馆也进行了翻新，建成了如今的曲线型阅览室，木质镶框书架、嵌花木地板与精美天花板壁画相得益彰，成为巴洛克建筑的典范之作。
              </p>
              <p>
                1805年，随着瑞士联邦的建立与宗教改革的推进，圣加仑修道院的宗教权力被削弱，不再承担宗教修行功能，逐渐转变为文化遗产与学术研究机构。19世纪至20世纪，瑞士政府对修道院进行了多次保护性修缮，严格遵循"修旧如旧"的原则，保留了修道院的历史风貌与建筑特色，同时对图书馆的古籍进行了整理与保护，确保这些珍贵的文化遗产得以传承。
              </p>
              <p>
                1983年，圣加仑修道院因其在中世纪宗教、学术与建筑领域的重要价值，被联合国教科文组织列入世界文化遗产名录，成为瑞士东部最具代表性的文化景点之一。如今，修道院不仅是展示中世纪文化与巴洛克建筑美学的重要窗口，更是全球学者研究中世纪学术、宗教历史的重要基地，每年吸引着数十万游客与学者前来参观、研究。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从圣加仑老城区入口出发，漫步鹅卵石街巷，欣赏沿途色彩缤纷的半木质结构房屋与精致的凸窗装饰，感受老城区的复古氛围，步行5分钟抵达修道院广场。首先参观修道院双塔大教堂，走进教堂内部，欣赏华丽的巴洛克式装饰、精美的壁画与雕塑，感受宗教建筑的庄严恢弘；随后前往修道院图书馆（需提前预约），参观曲线型阅览室，观赏珍贵的中世纪手稿、羊皮纸典籍与《圣加仑修道院规划图》原件，感受"灵魂药房"的静谧与厚重。最后漫步修道院庭院，欣赏庭院内的绿植与雕塑，拍摄修道院的双塔全景，沿原路返回老城区，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验修道院精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加博物馆参观、老城区深度游览及当地文化体验。参观完修道院图书馆后，前往修道院附属的圣加仑修道院博物馆，参观馆内收藏的宗教文物、中世纪艺术品、修士生活用具等，深入了解修道院的千年历史与文化传承；随后前往圣加仑纺织博物馆，这是世界上为数不多的纺织主题博物馆，参观14世纪以来的刺绣、蕾丝样品与纺织工具，感受圣加仑作为瑞士纺织重镇的独特魅力。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验瑞士东部文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 图书馆内禁止拍照、触摸古籍，参观时需保持安静，遵守工作人员指引</li>
                <li>• 进入大教堂需着装端庄，避免穿着短裤、短裙、露肩装</li>
                <li>• 夏季（6-8月）是旅游旺季，图书馆预约紧张，建议提前3-5天在官网预约</li>
                <li>• 冬季部分徒步小径可能积雪，需穿着防滑步行鞋，携带保暖用品</li>
                <li>• 修道院周边无售卖点，建议提前准备好饮用水与小零食</li>
                <li>• 导览讲解需提前预约，英文导览需提前1天预约</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 修道院广场中央</h4>
                  <p className="text-sm text-gray-700">拍摄修道院全景的最佳机位，以修道院双塔大教堂为核心，背景是圣加仑山的翠绿山峦，前景是广场上的雕塑与石板路面，画面层次丰富。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 图书馆入口走廊</h4>
                  <p className="text-sm text-gray-700">图书馆入口的巴洛克式走廊是拍摄建筑细节的核心机位，走廊两侧的雕花立柱、精美壁画与拱形穹顶，尽显巴洛克建筑的精致与华丽。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 大教堂塔楼观景台</h4>
                  <p className="text-sm text-gray-700">位于双塔大教堂的高处，需乘坐电梯或步行登顶，是俯瞰圣加仑老城区与修道院庭院的绝佳机位。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 老城区街巷拐角</h4>
                  <p className="text-sm text-gray-700">圣加仑老城区的蜿蜒街巷是拍摄修道院局部与复古氛围的绝佳机位，以色彩鲜艳的半木质房屋为前景，修道院的双塔在街巷尽头隐约可见。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 圣加仑山徒步小径中途</h4>
                  <p className="text-sm text-gray-700">位于前往圣加仑山的徒步小径中段，是拍摄修道院与自然景观同框的独特机位，以翠绿的山林为背景，修道院的双塔矗立在老城区之上。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 修道院庭院喷泉旁</h4>
                  <p className="text-sm text-gray-700">庭院内的喷泉的是拍摄修道院细节与氛围感的小众机位，以喷泉为前景，修道院的石砌墙体与雕塑为背景，水流潺潺，增添了灵动之感。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 修道院建筑以米白色、浅灰色为主，建议穿搭深色或亮色衣物，形成鲜明对比</li>
                <li>• 拍摄老城区与修道院同框时，可携带草帽、围巾等道具，增强复古氛围感</li>
                <li>• 室内拍摄时，避免使用闪光灯，以免影响建筑装饰与文物</li>
                <li>• 尊重当地规定，图书馆内部、大教堂祭坛区域禁止拍照</li>
                <li>• 徒步拍摄时，注意脚下安全，避免在陡峭路段停留过久</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣加仑纺织博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离修道院约800米，步行10分钟可达，建立于1886年，是世界上重要的纺织主题博物馆之一，收藏了3万余件藏品。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🧵 纺织文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣加仑老城区</h4>
                <p className="text-sm text-gray-700 mb-2">环绕修道院而建，是保留完好的中世纪古镇，蜿蜒的鹅卵石街巷、色彩缤纷的半木质房屋、精致的凸窗装饰。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行可达 | 🏘️ 中世纪古镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">博登湖</h4>
                <p className="text-sm text-gray-700 mb-2">距离圣加仑约20分钟车程，是欧洲第三大淡水湖，横跨瑞士、德国、奥地利三国，湖水清澈湛蓝，周边环绕着青山与特色小镇。</p>
                <div className="text-xs text-gray-500">🚗 车程20分钟 | 🌊 湖光山色</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">莱茵瀑布</h4>
                <p className="text-sm text-gray-700 mb-2">距离圣加仑约1小时车程，是欧洲流量最大的瀑布，水量丰沛，气势磅礴，被誉为"欧洲第一瀑布"。</p>
                <div className="text-xs text-gray-500">🚗 车程1小时 | 💦 欧洲最大瀑布</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿彭策尔地区</h4>
                <p className="text-sm text-gray-700 mb-2">距离圣加仑约30分钟车程，是瑞士东部的乡村风情区域，保留着传统的瑞士乡村风貌，大片的田园、古朴的乡村小屋。</p>
                <div className="text-xs text-gray-500">🚗 车程30分钟 | 🌄 田园风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">列支敦士登首都瓦杜兹</h4>
                <p className="text-sm text-gray-700 mb-2">距离圣加仑约40分钟车程，是一个袖珍国家的首都，拥有独特的人文景观，可参观瓦杜兹城堡、列支敦士登国家博物馆。</p>
                <div className="text-xs text-gray-500">🚗 车程40分钟 | 🏰 袖珍国家</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城区周边</h4>
                  <p className="text-sm text-blue-800">首选区域，距离修道院、老城区街巷较近，步行即可抵达核心景点，周边环境安静复古。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">交通便捷，距离火车站步行5-10分钟，适合需要乘坐火车前往周边景点的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">博登湖周边</h4>
                  <p className="text-sm text-yellow-800">距离圣加仑市区约20分钟车程，推窗即可欣赏湖光山色，适合休闲度假的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端文化主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城区周边，部分由历史建筑改建，融合复古与现代元素，自带餐厅、观景露台。</p>
                  <div className="text-xs text-gray-500">💎 文化体验 | 🏰 历史建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于火车站附近或老城区外围，步行可达核心景点，房间干净整洁，设施齐全。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭情侣</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型住宿</h4>
                  <p className="text-sm text-gray-700 mb-2">当地的民宿或青年旅社，民宿多为家庭经营，风格温馨，部分民宿带有厨房，价格实惠。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">博登湖度假酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">位于博登湖周边，推窗即可欣赏湖光山色，适合休闲度假，享受自然美景。</p>
                  <div className="text-xs text-gray-500">🌊 湖景房 | 🏖️ 休闲度假</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-8月、10月）：</strong>建议提前1-2个月预订，秋季风光最佳</p>
                    <p className="mb-2"><strong>淡季（11月-次年5月）：</strong>可提前1-2周预订，部分酒店推出优惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+博物馆联票优惠</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>瑞士住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>货币注意：</strong>瑞士通用瑞士法郎，部分酒店支持欧元但汇率可能不划算</p>
                    <p><strong>注意事项：</strong>老城区夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                圣加仑修道院，这座矗立在阿尔卑斯山麓的千年建筑群，历经十三个世纪的风雨变迁，依然以庄严的巴洛克建筑、珍贵的古籍藏品，诉说着中世纪欧洲的宗教传奇与学术辉煌。它既有宗教建筑的恢弘庄严，又有学术殿堂的静谧厚重；既有巴洛克艺术的精致华丽，又有千年历史的沧桑沉淀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步双塔大教堂，感受宗教的庄严与建筑的美感；可以走进图书馆，触摸千年古籍的温度，读懂欧洲中世纪的学术文明；可以穿梭老城区街巷，感受复古烟火气与多元文化的交融。无论是独自旅行、情侣出游还是家庭度假，圣加仑修道院都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与文化的浸润中，读懂瑞士东部的独特魅力，爱上这片兼具自然之美与人文底蕴的土地。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}