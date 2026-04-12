import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '那慕尔城堡・Citadelle de Namur・比利时・那慕尔 | 最佳欧洲景点',
  description: '探索那慕尔城堡，比利时瓦隆地区标志性的中世纪军事要塞，坐落于默兹河与桑布尔河交汇处的山丘之巅，融合多种建筑风格。',
}

export default function NamurCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '那慕尔城堡', href: '/attractions/vianden-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">那慕尔城堡・Citadelle de Namur・比利时・那慕尔</h1>
          <p className="text-lg text-gray-600 mb-6">
            那慕尔城堡是比利时那慕尔市的象征，始建于12世纪，坐落于两河交汇的山丘之上，是中世纪欧洲最坚固的军事要塞之一。城堡融合多种建筑风格，留存着完整的防御工事、瞭望塔与博物馆，陈列着中世纪武器、文物与历史资料，见证了那慕尔地区千年历史更迭，兼具军事防御价值与建筑艺术美感，是追溯欧洲中世纪历史、俯瞰城市全景的必访之地。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              那慕尔城堡是比利时那慕尔市的象征，始建于12世纪，坐落于两河交汇的山丘之上，是中世纪欧洲最坚固的军事要塞之一。城堡融合多种建筑风格，留存着完整的防御工事、瞭望塔与博物馆，陈列着中世纪武器、文物与历史资料，见证了那慕尔地区千年历史更迭，兼具军事防御价值与建筑艺术美感，是追溯欧洲中世纪历史、俯瞰城市全景的必访之地。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="那慕尔城堡" />
                <InfoRow label="英文名称" value="Citadelle de Namur" />
                <InfoRow label="国家" value="比利时（Belgium）" />
                <InfoRow label="城市" value="那慕尔（Namur）" />
                <InfoRow label="所属区域" value="比利时瓦隆大区那慕尔省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="比利时瓦隆地区标志性的中世纪军事要塞" />
                <InfoRow label="核心特色" value="坐落于默兹河与桑布尔河交汇处的山丘之巅" />
                <InfoRow label="文化价值" value="欧洲中世纪军事防御建筑的典范" />
                <InfoRow label="建筑价值" value="融合罗马式、哥特式与巴洛克式建筑风格" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="淡季周二至周日10:00-16:30；旺季周一至周日9:30-17:30" />
              <InfoRow label="门票价格" value="成人9欧元；青少年6欧元；儿童4欧元；6岁以下免费" />
              <InfoRow label="地址" value="Citadelle de Namur, 5000 Namur, Belgium" />
              <InfoRow label="交通方式" value="从布鲁塞尔乘火车直达那慕尔约1小时；从列日乘火车约45分钟" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                那慕尔城堡的历史可追溯至公元前1世纪的罗马时期，最初是罗马帝国统治下的一个军事据点，因地处默兹河与桑布尔河交汇处的战略要地，成为连接罗马与北方部落的交通枢纽和军事屏障，见证了欧洲两千多年的历史更迭与时代变迁，是比利时历史最悠久的军事遗迹之一。
              </p>
              <p>
                罗马时期至5世纪，是城堡的初创与发展期。公元前51年，罗马人征服比利时地区后，在两河交汇的山丘上修建了简易的军事堡垒，命名为"Namurum"，作为防御日耳曼部落入侵的前沿阵地。这一时期，堡垒逐渐形成雏形，修建了简易的城墙、瞭望塔与居住设施，主要居民为罗马士兵与当地部落居民，以农业、手工业与河运为生，成为罗马帝国北方边境的重要据点。随着罗马帝国的衰落，堡垒一度陷入混乱，先后被日耳曼部落与法兰克人占领，逐渐成为法兰克王国的一部分。
              </p>
              <p>
                6世纪至11世纪，那慕尔地区进入稳定发展期，城堡成为宗教与军事并重的重要据点。6世纪，基督教传入那慕尔地区，当地在堡垒周边修建了第一座教堂，宗教文化逐渐融入城堡的发展之中。9世纪，查理曼帝国时期，城堡进行了第一次大规模修缮与扩建，加固了城墙，增设了防御工事，成为区域性的军事指挥中心。这一时期，那慕尔地区逐渐形成城镇，城堡成为城镇的核心，掌控着两河的交通与贸易，地位日益重要。
              </p>
              <p>
                12世纪至16世纪，那慕尔城堡进入鼎盛时期，成为欧洲最坚固的军事要塞之一。12世纪初，那慕尔伯爵下令大规模扩建城堡，融合罗马式与哥特式建筑风格，修建了主塔楼、地牢、防御城墙、吊桥等设施，形成了"山丘筑城、两河设防"的独特格局，防御体系极为完善，大有一夫当关万夫莫开之势。随着中世纪欧洲商业的兴起，两河成为重要的贸易通道，那慕尔凭借优越的地理位置，成为河运贸易的重要中转站，商业繁荣带动了城堡的发展，城堡内逐渐修建了民居、商铺与宗教建筑，成为兼具军事防御与生活居住功能的综合性堡垒。这一时期，城堡多次抵御外敌入侵，始终保持完好，成为那慕尔地区的象征。
              </p>
              <p>
                17世纪至19世纪，城堡历经战乱与动荡，逐渐走向衰落。17世纪，欧洲爆发宗教战争与三十年战争，那慕尔地区多次被战火波及，城堡的城墙、塔楼与建筑遭到严重破坏，大量文物被损毁或掠夺，军事功能逐渐弱化。1789年法国大革命爆发后，那慕尔被法国占领，城堡被改为军事营地，部分建筑被改造为公共设施，宗教建筑遭到冲击。19世纪，比利时独立后，那慕尔成为那慕尔省的首府，当地政府开始对城堡进行修复，修复受损的城墙与塔楼，恢复城堡的历史风貌，同时将部分建筑改造为博物馆，展示城堡的历史与文物，城堡逐渐成为当地的历史文化景点。
              </p>
              <p>
                20世纪至今，那慕尔城堡迎来全面保护与新生。20世纪初，比利时政府将那慕尔城堡列为国家级历史文化遗产，对其进行系统性保护与修缮，严格保留城堡的中世纪军事风貌，禁止大规模现代化改造。二战期间，那慕尔虽被德国占领，但城堡核心建筑未遭到严重破坏，战后政府再次对其进行修复，完善基础设施，增设游客服务设施，提升游览体验。如今，那慕尔城堡已成为比利时著名的历史景点，吸引着世界各地的游客前来探访，既保留着中世纪的古朴威严，又融入了现代旅游的便捷服务，成为历史与现代交融的典范。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐游览路线（3小时左右）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  城堡入口 → 吊桥与城门 → 主塔楼 → 防御城墙与瞭望塔 → 城堡博物馆 → 中世纪庭院 → 观景平台 → 城堡出口 → 山下集市广场
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>可从城堡山脚入口出发，全程步行游览，路线舒缓，兼顾军事遗迹、历史文物与城市景观，可租赁语音导览（支持多语言），也可跟随当地导览团（约1.5小时，提供多语言服务）
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 城堡入口</h4>
                  <p className="text-sm text-gray-700 mb-2">从山脚停车场或接驳车下车点步行5分钟即可抵达城堡入口，入口处保留着中世纪的石质城门，城门上雕刻着古老的铭文与军事图案，彰显着城堡的威严。</p>
                  <div className="text-xs text-gray-500">🚶 步行5分钟 | � 中世纪城门</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 吊桥与城门</h4>
                  <p className="text-sm text-gray-700 mb-2">进入入口后，首先抵达吊桥与城门，这座吊桥始建于12世纪，是中世纪城堡的标志性防御设施，桥面由石板铺成，两侧设有石质护栏，可手动升降。</p>
                  <div className="text-xs text-gray-500">🌉 12世纪吊桥 | 🛡️ 防御设施</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 主塔楼</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过吊桥与城门，步行8分钟即可抵达主塔楼，主塔楼是城堡的核心建筑，始建于12世纪，高约30米，融合哥特式建筑风格，墙体厚重坚固。</p>
                  <div className="text-xs text-gray-500">🏰 核心建筑 | 🗼 30米高塔</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 防御城墙与瞭望塔</h4>
                  <p className="text-sm text-gray-700 mb-2">从主塔楼下来，沿着蜿蜒的石板路前行10分钟，即可抵达防御城墙与瞭望塔。城墙始建于罗马时期，历经多次修缮，保留着中世纪的防御风貌。</p>
                  <div className="text-xs text-gray-500">🧱 罗马时期 | � 中世纪防御</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 城堡博物馆</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着城墙前行15分钟，即可抵达城堡博物馆，博物馆位于一座中世纪建筑内，前身是城堡的兵营，如今改造为展示城堡历史与那慕尔地区文化的场所。</p>
                  <div className="text-xs text-gray-500">�️ 历史博物馆 | � 文化展示</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 中世纪庭院</h4>
                  <p className="text-sm text-gray-700 mb-2">从博物馆出来，步行5分钟即可抵达中世纪庭院，庭院是当年城堡内士兵与居民的活动场所，地面由石板铺成，周边环绕着古朴的石质建筑。</p>
                  <div className="text-xs text-gray-500">�️ 中世纪庭院 | ⛲ 古朴喷泉</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">7. 观景平台</h4>
                  <p className="text-sm text-gray-700 mb-2">从庭院出发，步行10分钟即可抵达观景平台，这是城堡内观赏城市全景的最佳地点，平台视野开阔，可将那慕尔市的全貌、默兹河与桑布尔河的交汇风光尽收眼底。</p>
                  <div className="text-xs text-gray-500">🌅 观景平台 | 🏞️ 两河交汇</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">8. 城堡出口与山下集市广场</h4>
                  <p className="text-sm text-gray-700 mb-2">从观景平台下来，步行15分钟即可抵达城堡出口，出口处设有纪念品商铺，可购买当地特色纪念品。出城堡后，步行10分钟即可抵达山下的集市广场。</p>
                  <div className="text-xs text-gray-500">🛍️ 纪念品 | 🏛️ 集市广场</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 吊桥全景机位</h4>
                  <p className="text-sm text-gray-700">位于吊桥中段，采用平视角度，拍摄吊桥的全貌与城门的建筑细节，将吊桥的石板桥面、石质护栏与城门的雕刻图案融为一体，画面兼具古朴感与威严感，能展现中世纪军事防御设施的独特魅力。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 主塔楼仰拍机位</h4>
                  <p className="text-sm text-gray-700">位于主塔楼前方的石板路上，采用仰拍角度，拍摄主塔楼的全貌，利用塔楼的高耸感与哥特式建筑的线条美，凸显主塔楼的宏伟与威严，清晰展现塔身的瞭望孔、射击孔与雕刻细节。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 瞭望塔全景机位</h4>
                  <p className="text-sm text-gray-700">在任意一座瞭望塔上，采用俯拍角度，拍摄那慕尔市的全景与两河交汇的风光，将默兹河、桑布尔河的碧波与城市的古朴建筑融为一体，画面恢弘壮观，能展现那慕尔"两河交汇、山丘筑城"的独特格局。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 防御城墙机位</h4>
                  <p className="text-sm text-gray-700">位于防御城墙中段，采用侧拍角度，拍摄城墙的蜿蜒景象与瞭望塔的错落分布，利用城墙的厚重感与线条美，凸显中世纪军事防御体系的完善，画面充满复古气息与历史沧桑感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 观景平台远景机位</h4>
                  <p className="text-sm text-gray-700">在观景平台上，采用平视角度，拍摄那慕尔市的远景与两河交汇的全貌，将城市的老城区、教堂、河流与远处的田园风光同框，展现自然与人文的融合之美，画面开阔，既有城堡的古朴威严，又有河流的秀丽灵动。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 中世纪庭院机位</h4>
                  <p className="text-sm text-gray-700">在中世纪庭院内，采用平视或侧拍角度，拍摄庭院的石板地面、古朴建筑与历史雕像，搭配庭院内的绿植与喷泉，画面充满复古气息与生活感，能展现城堡内的宁静氛围。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照注意事项</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 游览城堡时，禁止攀爬建筑、刻画墙体，避免损坏文物</li>
                <li>• 博物馆内部分展品禁止拍摄，需遵守现场指示</li>
                <li>• 城堡内的军事遗迹（如瞭望塔、地牢）禁止随意触碰，注意安全</li>
                <li>• 户外拍摄时，注意脚下安全，避免踩踏草坪、破坏植被</li>
                <li>• 遵守景区规定，共同保护历史遗迹与景区环境</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">那慕尔老城（Namur Old Town）</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约1公里，步行15分钟可达，是那慕尔市的核心区域，保留着大量中世纪与文艺复兴时期的建筑，街道蜿蜒曲折，由石板铺成，充满复古气息。老城的核心景点有集市广场、那慕尔市政厅、圣奥宾大教堂等。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🏛️ 中世纪老城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">桑布尔河步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约2公里，步行或驾车5分钟可达，这条步道沿着桑布尔河南岸修建，全长约10公里，步道平缓，难度较低，适合徒步休闲与骑行。沿途风景秀丽，可欣赏桑布尔河的碧波、两岸的田园风光与古朴村落。</p>
                <div className="text-xs text-gray-500">🚶 河滨步道 | 🌸 四季美景</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">迪南古城（Dinant Old Town）</h4>
                <p className="text-sm text-gray-700 mb-2">距离那慕尔约35公里，驾车40分钟可达，乘坐火车约50分钟可达，是比利时瓦隆地区极具特色的中世纪古城，坐落于默兹河畔，以独特的建筑风格与萨克斯风发源地而闻名。迪南古城保留着大量中世纪建筑。</p>
                <div className="text-xs text-gray-500">� 车程40分钟 | � 中世纪古城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣卢普教堂（Saint Loup Church）</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约3公里，驾车10分钟可达，乘坐巴士约15分钟可达，始建于1610年，是那慕尔地区重要的宗教遗迹，建筑风格以巴洛克式为主，外观宏伟壮观，内部装饰精美，陈列着中世纪的宗教珍品与画作。</p>
                <div className="text-xs text-gray-500">⛪ 宗教遗迹 | 🕊️ 宁静氛围</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">市中心或靠近城堡山脚</h4>
                  <p className="text-sm text-blue-800">优先选择市中心或靠近城堡山脚的住宿，步行可达城堡入口、集市广场与老城核心区域，方便游览，同时能深度感受那慕尔的古朴氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">默兹河畔或桑布尔河畔</h4>
                  <p className="text-sm text-green-800">如果喜欢安静，可选择默兹河畔或桑布尔河畔的住宿，环境静谧，能欣赏到河流风光，适合休息，适合喜欢自然风光的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站或高速公路入口</h4>
                  <p className="text-sm text-yellow-800">若计划游览周边景点（如迪南古城），可选择靠近火车站或高速公路入口的住宿，交通更便捷，便于前往周边景点。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择市中心的青年旅社，普遍干净整洁、价格实惠，大多步行可达核心景点，部分提供公共厨房，适合背包客与预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🎒 背包客首选</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中档三星级酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">地理位置优越，房间舒适，部分设有餐厅，提供当地传统美食，适合家庭与情侣，性价比高，设施完善。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高档四星级以上酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于河畔或山丘附近，环境优雅，房间装饰精美，部分可欣赏到城堡或河流远景，设有露台与高级餐厅，适合追求品质的游客。</p>
                  <div className="text-xs text-gray-500">🏰 豪华住宿 | 🏞️ 自然景观</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">家庭经营民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">可选择老城区的家庭经营房源，多为石质建筑，装修古朴，常提供当地特色早餐，充满乡土气息，适合喜欢体验当地生活的游客。</p>
                  <div className="text-xs text-gray-500">🏡 家庭氛围 | 🍳 特色早餐</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>那慕尔的旅游旺季为4月至10月，尤其是夏季（7-8月）与节假日期间，游客较多，建议提前1-2个月预订住宿</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>冬季游客较少，可提前1-2周预订，部分住宿会推出优惠活动，性价比更高</p>
                    <p><strong>特色服务：</strong>部分住宿提供城堡、博物馆门票折扣券，可节省游览成本</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>比利时的酒店与民宿通常不提供一次性洗漱用品，需自备牙刷、牙膏、毛巾等</p>
                    <p className="mb-2"><strong>电器准备：</strong>当地电压为230V，插头为Type F型，与德国、法国一致，可提前准备转换插头</p>
                    <p><strong>特殊注意：</strong>冬季那慕尔气温较低，部分区域可能有降雪，住宿时可关注是否有供暖设施，避免影响休息</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                那慕尔城堡，这座矗立在两河交汇山丘上的千年军事要塞，承载着欧洲两千多年的历史记忆，融合了军事防御的威严与建筑艺术的美感，既有中世纪的古朴沧桑，又有现代生活的温馨惬意。在这里，你可以漫步在千年防御城墙，感受中世纪的战场氛围；登顶主塔楼，俯瞰两河交汇与城市全景；驻足博物馆，探寻城堡的千年历史；穿梭在山下老城，体验瓦隆地区的独特人文风情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                希望这份攻略能帮助你更好地游览那慕尔城堡，深入了解比利时瓦隆地区的历史与文化，留下一段难忘的欧洲旅行记忆。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年城堡与两河交汇的交融中，邂逅一段跨越时空的军事文化之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}