import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塔拉戈纳古罗马遗址・Tarragona Roman Ruins・西班牙・塔拉戈纳 | 最佳欧洲景点',
  description: '探索塔拉戈纳古罗马遗址，伊比利亚半岛的罗马文明印记，完整保留古罗马时期的剧院、竞技场、渡槽、城墙等遗迹，2000年被联合国教科文组织列为世界文化遗产。',
}

export default function TarragonaRomanRuinsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '塔拉戈纳', href: '/destinations/spain' },
            { label: '塔拉戈纳古罗马遗址', href: '/attractions/tarragona-roman-ruins' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">塔拉戈纳古罗马遗址・Tarragona Roman Ruins・西班牙・塔拉戈纳</h1>
          <p className="text-lg text-gray-600 mb-6">
            塔拉戈纳古罗马遗址是古罗马帝国在伊比利亚半岛的重要遗存，2000年入选世界文化遗产，涵盖圆形剧场、古罗马渡槽、奥古斯塔城墙等核心遗迹。作为古罗马塔拉科行省的首府，这里曾是地中海沿岸的政治、军事与商业枢纽，遗迹完整保留了古罗马的建筑技艺与城市格局，融合了罗马文明与伊比利亚本土文化，是解读古罗马帝国边疆统治与文化融合的鲜活样本。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              塔拉戈纳古罗马遗址是古罗马帝国在伊比利亚半岛的重要遗存，2000年入选世界文化遗产，涵盖圆形剧场、古罗马渡槽、奥古斯塔城墙等核心遗迹。作为古罗马塔拉科行省的首府，这里曾是地中海沿岸的政治、军事与商业枢纽，遗迹完整保留了古罗马的建筑技艺与城市格局，融合了罗马文明与伊比利亚本土文化，是解读古罗马帝国边疆统治与文化融合的鲜活样本。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="塔拉戈纳古罗马遗址" />
                <InfoRow label="英文名称" value="Tarragona Roman Ruins" />
                <InfoRow label="国家" value="西班牙（Spain）" />
                <InfoRow label="城市" value="塔拉戈纳（Tarragona）" />
                <InfoRow label="所属区域" value="西班牙加泰罗尼亚自治区，地中海沿岸" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史起源" value="公元前218年迦太基人建立，公元前206年罗马征服" />
                <InfoRow label="建筑风格" value="古罗马建筑、圆形剧场、渡槽、城墙" />
                <InfoRow label="核心遗迹" value="圆形剧场、古罗马渡槽、奥古斯塔城墙" />
                <InfoRow label="特色" value="世界文化遗产、古罗马行省首府" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="遗址全天开放；核心景点夏季9:00-20:00，冬季9:00-18:00；周一闭馆" />
              <InfoRow label="门票价格" value="圆形剧场、渡槽、博物馆成人票8欧元/人；联票18欧元；12岁以下儿童免费" />
              <InfoRow label="地址" value="Arqueològic de Tarragona, Plaça de la Font, 43003 Tarragona, Spain" />
              <InfoRow label="交通方式" value="从巴塞罗那乘高铁约1小时，票价15-20欧元；火车站乘1路、5路公交2站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                塔拉戈纳古罗马遗址的历史可追溯至公元前218年，最早由迦太基人建立定居点，作为地中海沿岸的军事与贸易据点，当时此处被称为“塔拉科”。公元前206年，古罗马军团击败迦太基人，征服伊比利亚半岛东北部，塔拉科成为古罗马帝国的重要城镇，逐步发展为古罗马 Hispania Citerior（近西班牙行省）的首府，也是古罗马帝国在伊比利亚半岛的政治、军事、经济与文化中心。
              </p>
              <p>
                公元前1世纪至公元1世纪，塔拉科进入鼎盛时期，古罗马人在此大规模修建城市基础设施与公共建筑，奠定了如今遗址的基本格局。这段时期，圆形剧场、露天剧院、古罗马渡槽、奥古斯塔城墙、公共浴场、议事广场等建筑陆续建成，其中圆形剧场可容纳2万余名观众，是古罗马时期伊比利亚半岛规模最大的露天竞技场所，主要用于角斗士比赛与公共娱乐活动；古罗马渡槽全长超过10公里，采用双层拱门设计，负责为整座城市输送淡水，展现了古罗马高超的建筑与水利工程技艺。
              </p>
              <p>
                公元2世纪至3世纪，塔拉科的地位进一步提升，成为古罗马帝国西部的重要城市，人口峰值达到5万余人，商业活动异常繁荣，地中海沿岸的货物在此集散，往来的商人带来了不同地区的文化与商品，促进了罗马文明与伊比利亚本土文化的深度融合。这段时期，城市规模不断扩大，建筑技艺持续发展，原有建筑被逐步修缮与扩建，公共浴场、神庙等建筑更加精美，成为古罗马边疆城市的典范。
              </p>
              <p>
                公元4世纪，罗马帝国分裂为东罗马与西罗马，塔拉科隶属于西罗马帝国，随着西罗马帝国的衰落，城市逐渐走向萧条，部分建筑因战争与自然灾害遭到损毁。公元5世纪，西哥特人征服伊比利亚半岛，塔拉科成为西哥特王国的重要城镇，古罗马遗迹遭到进一步破坏，许多建筑材料被拆用，用于修建新的建筑，但核心遗迹得以保留。
              </p>
              <p>
                中世纪时期，塔拉科更名为“塔拉戈纳”，成为基督教重要的宗教中心，古罗马遗迹被进一步改造，部分建筑被改建为教堂、城堡等宗教与世俗建筑，奥古斯塔城墙被沿用为城市防御设施，延续了城市的基本格局。这段时期，当地居民开始自发保护古罗马遗迹，部分损毁的建筑得到初步修缮，为后续的保护工作奠定了基础。
              </p>
              <p>
                19世纪至20世纪，西班牙政府开始对塔拉戈纳古罗马遗址进行系统性的考古发掘与修缮，成立了专门的考古保护机构，对圆形剧场、渡槽、城墙等核心遗迹进行加固与修复，还原其历史原貌。1979年，塔拉戈纳古罗马遗址被列入西班牙国家级文物保护单位，2000年，因其完整保留了古罗马时期的城市格局与建筑遗存，以及多元文化交融的历史底蕴，被联合国教科文组织列为世界文化遗产，成为全球关注的古罗马文明遗址。
              </p>
              <p>
                如今，塔拉戈纳古罗马遗址依然保留着千年以来的风貌，古老的罗马遗迹与现代的城市生活相互交融，圆形剧场、渡槽等遗迹不仅是历史的见证，也是塔拉戈纳市的标志性景观，吸引着全球各地的游客前来探访，感受古罗马文明的辉煌与厚重。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从塔拉戈纳火车站出发，步行10分钟或乘坐1路公交抵达遗址核心区域（圆形剧场站），首先前往古罗马圆形剧场，参观这座伊比利亚半岛规模最大的古罗马竞技场所，感受其恢弘的建筑格局，俯瞰剧场内部的座位、通道与地下密室，想象古罗马时期角斗士比赛的热闹场景；随后前往旁边的奥古斯塔城墙，漫步在古老的城墙步道上，欣赏城墙的宏伟遗迹，感受古罗马的军事防御体系，远眺地中海风光与塔拉戈纳老城区全景。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后前往古罗马渡槽，欣赏这座兼具实用性与艺术性的水利工程，近距离观察双层拱门的建筑细节，感受古罗马人的智慧与技艺；最后前往塔拉科考古博物馆，参观馆藏的古罗马时期的陶器、硬币、雕塑、石碑等文物，快速了解塔拉戈纳从迦太基时期到古罗马时期的历史发展历程，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验古罗马遗迹精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加导览服务、小众遗迹参观与美食品尝，深入感受塔拉戈纳的历史与人文魅力。参观完塔拉科考古博物馆后，预约遗址官方导览（导览费10欧元/人，全程1.5小时，有西班牙语、英语、中文三种语言可选），跟随导览深入了解各遗迹的历史典故、建筑工艺、使用功能，以及古罗马时期塔拉戈纳的社会生活、文化习俗。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往古罗马露天剧院，这座剧场依山而建，可容纳数千名观众，如今依然保留着舞台、座位与背景墙的遗迹，在这里可感受古罗马人的娱乐生活，拍摄复古氛围感照片；随后前往古罗马公共浴场遗迹，参观浴场的更衣室、热水池、冷水池等区域，感受古罗马人的生活习惯与卫生理念。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往老城区的特色餐厅，品尝加泰罗尼亚传统美食与地中海风味菜肴，如海鲜烩饭、烤章鱼、伊比利亚火腿、卡瓦起泡酒等，搭配当地产的橄榄油面包，体验塔拉戈纳的饮食文化；下午前往塞尔维拉丘，登顶俯瞰整个古罗马遗址与地中海全景，感受“罗马城市与大海共生”的独特意境，随后参观老城区的古罗马议事广场遗迹，了解古罗马的政治与商业活动场景，傍晚时分，前往地中海沿岸漫步，欣赏夕阳下的古罗马渡槽与海滨风光，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度了解古罗马文明
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 进入博物馆、遗迹内部需着装端庄，避免穿着短裤、短裙、露肩装，需脱帽参观</li>
                <li>• 遗迹区域多为石板路与碎石路，游览时注意脚下安全，建议穿着舒适的步行鞋</li>
                <li>• 参观博物馆、遗迹内部时禁止大声喧哗，拍摄文物与遗迹时禁止使用闪光灯</li>
                <li>• 夏季（6-8月）是旅游旺季，建议错峰前往（上午9:00-11:00、下午17:00后）</li>
                <li>• 遗址区域无饮用水售卖，建议提前准备好饮用水</li>
                <li>• 导览服务需提前在遗址游客中心预约，避免排队等待</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 古罗马圆形剧场顶端</h4>
                  <p className="text-sm text-gray-700">拍摄圆形剧场全景的最佳机位，站在剧场顶端的观景平台上，可将整个圆形剧场的环形格局、座位排布与地下密室尽收眼底，恢弘的古罗马建筑与远处的地中海、老城区相互映衬，历史感与自然美感相得益彰。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 古罗马渡槽双层拱门下方</h4>
                  <p className="text-sm text-gray-700">渡槽是塔拉戈纳古罗马遗址的标志性建筑，双层拱门设计极具视觉冲击力，站在拱门下方，可仰拍渡槽的高耸与规整，感受古罗马水利工程的恢弘与精巧。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 奥古斯塔城墙步道</h4>
                  <p className="text-sm text-gray-700">城墙步道蜿蜒曲折，一侧是古老的城墙遗迹，一侧是地中海与老城区风光，漫步在步道上，可拍摄城墙的细节与远处的全景，光影交错间自带复古静谧的氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 塞尔维拉丘山顶</h4>
                  <p className="text-sm text-gray-700">拍摄塔拉戈纳古罗马遗址全景的最佳机位，登顶后可将圆形剧场、渡槽、奥古斯塔城墙等核心遗迹，以及地中海、老城区全景尽收眼底，山海相依、古迹错落，画面恢弘壮观。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 塔拉科考古博物馆展厅</h4>
                  <p className="text-sm text-gray-700">博物馆内收藏了大量古罗马时期的文物，包括雕塑、石碑、陶器等，展厅的灯光设计柔和，适合拍摄文物特写，展现古罗马的艺术工艺与文化内涵。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 地中海沿岸步道（渡槽附近）</h4>
                  <p className="text-sm text-gray-700">拍摄“古罗马遗迹与大海”交融美景的绝佳机位，远处是高耸的古罗马渡槽，近处是蔚蓝的地中海，海风轻拂，画面清新又具历史感。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 遗迹建筑多为石材原色（灰色、米白色），建议穿搭素色或低饱和色衣物（如白色、米色、浅蓝色），形成鲜明对比</li>
                <li>• 拍摄建筑全景时，可采用仰拍或俯拍角度，凸显建筑的恢弘气势</li>
                <li>• 拍摄文物特写时，可近距离拍摄细节，突出雕刻的工艺之美与历史痕迹</li>
                <li>• 尊重当地文化与文物保护规定，禁止在遗迹上刻画、攀爬，拍摄时避免损坏文物</li>
                <li>• 拍摄人物时，需避免遮挡遗迹主体，兼顾历史感与人物美感</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">塔拉戈纳大教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离遗址核心区域约500米，步行8分钟可达，始建于12世纪，融合了罗马式、哥特式与巴洛克式建筑风格，教堂内部装饰精美，拥有华丽的壁画、雕塑与彩色玻璃窗，是塔拉戈纳重要的宗教建筑与地标性建筑。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行8分钟 | ⛪ 宗教建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">地中海阳台</h4>
                <p className="text-sm text-gray-700 mb-2">距离遗址核心区域约300米，步行5分钟可达，是塔拉戈纳的观景胜地，位于老城区高处，可俯瞰地中海全景与老城区风貌，视野开阔，风景优美，也是拍摄夕阳的绝佳去处。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行5分钟 | 🌅 观景胜地</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">塔拉戈纳中央市场</h4>
                <p className="text-sm text-gray-700 mb-2">距离遗址核心区域约700米，步行10分钟可达，是当地最具烟火气的场所，市场内售卖新鲜的海鲜、水果、蔬菜、奶酪、火腿等当地特产，还有各类小吃摊位，可品尝当地特色小吃。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行10分钟 | 🏪 当地市场</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">金色海岸</h4>
                <p className="text-sm text-gray-700 mb-2">距离遗址核心区域约10公里，乘坐公交20分钟可达，是西班牙东北部著名的海滨度假胜地，拥有清澈的海水、细腻的沙滩与独特的海岸风光，可漫步沙滩、享受阳光与海水。</p>
                <div className="text-xs text-gray-500">🚌 公交20分钟 | 🏖️ 海滨度假</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">埃尔塞拉约渔村</h4>
                <p className="text-sm text-gray-700 mb-2">距离遗址核心区域约15公里，乘坐公交30分钟可达，是一座保存完整的地中海渔村，村内街巷狭窄、房屋古朴，家家户户都有彩色的门窗，充满了浓郁的渔村风情。</p>
                <div className="text-xs text-gray-500">🚌 公交30分钟 | 🎣 渔村风情</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">罗马马戏场遗迹</h4>
                <p className="text-sm text-gray-700 mb-2">距离遗址核心区域约800米，步行12分钟可达，是古罗马时期的公共娱乐场所，主要用于马车比赛，如今依然保留着赛道、座位与看台的遗迹，规模宏大，历史底蕴深厚。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行12分钟 | 🏟️ 古罗马娱乐</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">遗址核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离古罗马圆形剧场、渡槽等核心景点较近，步行即可抵达，周边环境复古静谧，推窗即可欣赏古罗马遗迹与老城区风光。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">地中海沿岸</h4>
                  <p className="text-sm text-green-800">距离遗址约1公里，步行15分钟可达，可欣赏地中海海景，环境清幽，傍晚可漫步海滨步道，感受海风的温柔，适合休闲度假。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离火车站步行5-10分钟，周边有餐厅、便利店，生活便利，适合需要乘坐火车前往巴塞罗那、马德里等周边城市的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端海景酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">以海景酒店与历史主题酒店为主，部分酒店位于海滨或老城区，融合了复古与现代元素，自带餐厅、观景露台，部分房型可欣赏地中海海景或古罗马遗迹风光。</p>
                  <div className="text-xs text-gray-500">💎 海景体验 | 🏰 历史建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于遗址附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，价格适中，性价比突出，适合大多数游客。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围，体验地道的西班牙生活。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的旅行者，适合背包客和年轻游客。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（6-8月、9-10月）：</strong>海滨度假旺季和历史遗迹游览旺季，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+景点联票（如古罗马遗址、大教堂联票）的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>西班牙住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>老城区部分酒店无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>老城区与遗址附近夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                塔拉戈纳古罗马遗址，这座沉睡千年的罗马秘境，历经迦太基的初兴、古罗马的辉煌、西哥特的统治与中世纪的演变，依然保留着最纯粹的罗马文明印记。它既有圆形剧场的恢弘、渡槽的精巧，也有城墙的厚重、博物馆的底蕴；既有古罗马文明的霸气与璀璨，也有地中海海滨的温柔与浪漫；既有历史遗迹的古朴厚重，也有现代城市的烟火气息。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步古罗马遗迹，触摸千年建筑的纹理，感受古罗马帝国的辉煌；可以登上塞尔维拉丘，俯瞰山海相依的美景，领略地中海的壮阔；可以走进老城区，品尝地中海风味美食，感受当地的市井烟火。无论是独自旅行、情侣出游还是家庭度假，塔拉戈纳古罗马遗址都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的浸润中，读懂古罗马文明的魅力，爱上这片兼具历史底蕴与海滨风情的土地。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}