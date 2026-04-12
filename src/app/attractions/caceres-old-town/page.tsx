import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡塞雷斯老城・Cáceres Old Town・西班牙・卡塞雷斯 | 最佳欧洲景点',
  description: '探索卡塞雷斯老城，石头堆砌的千年多元文明秘境，完整保留罗马式、哥特式、伊斯兰式、文艺复兴式等多种风格的建筑遗存，1986年被联合国教科文组织列为世界文化遗产。',
}

export default function CaceresOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '卡塞雷斯老城', href: '/attractions/caceres-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">卡塞雷斯老城・Cáceres Old Town・西班牙・卡塞雷斯</h1>
          <p className="text-lg text-gray-600 mb-6">
            卡塞雷斯老城是西班牙埃斯特雷马杜拉自治区的标志性历史遗存，1986年入选世界文化遗产，以“石头之城”为特色，保留了罗马、摩尔、基督教等多元文明的建筑印记。核心涵盖阿尔卡扎城堡、圣玛丽大教堂、犹太区等遗迹，曾是军事要塞与商业枢纽，完整留存了中世纪城市格局，是解读伊比利亚半岛多元文化交融历史的鲜活样本，静谧又充满古韵。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              卡塞雷斯老城是西班牙埃斯特雷马杜拉自治区的标志性历史遗存，1986年入选世界文化遗产，以“石头之城”为特色，保留了罗马、摩尔、基督教等多元文明的建筑印记。核心涵盖阿尔卡扎城堡、圣玛丽大教堂、犹太区等遗迹，曾是军事要塞与商业枢纽，完整留存了中世纪城市格局，是解读伊比利亚半岛多元文化交融历史的鲜活样本，静谧又充满古韵。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="卡塞雷斯老城" />
                <InfoRow label="英文名称" value="Cáceres Old Town" />
                <InfoRow label="国家" value="西班牙（Spain）" />
                <InfoRow label="城市" value="卡塞雷斯（Cáceres）" />
                <InfoRow label="所属区域" value="西班牙埃斯特雷马杜拉自治区" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史起源" value="公元前3世纪伊比利亚人定居，公元前2世纪罗马征服" />
                <InfoRow label="建筑风格" value="罗马式、哥特式、伊斯兰式、文艺复兴式融合" />
                <InfoRow label="核心景点" value="阿尔卡扎城堡、圣玛丽大教堂、犹太区" />
                <InfoRow label="特色" value="石头之城、多元文明交融、世界文化遗产" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城全天开放；核心景点夏季9:00-19:00，冬季9:00-17:00；周一闭馆" />
              <InfoRow label="门票价格" value="阿尔卡扎城堡6欧元，圣玛丽大教堂4欧元，联票9欧元；12岁以下儿童免费" />
              <InfoRow label="地址" value="Casco Antiguo de Cáceres, 10003 Cáceres, Spain" />
              <InfoRow label="交通方式" value="从马德里乘高铁约2.5小时，票价40-60欧元；火车站乘3路、7路公交3站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                卡塞雷斯老城的历史可追溯至公元前3世纪，最早由伊比利亚人建立定居点，作为伊比利亚半岛西南部的军事与农业据点，当时此处以石质建筑为特色，奠定了“石头之城”的最初基础。公元前2世纪，古罗马军团征服伊比利亚半岛西南部，卡塞雷斯成为古罗马帝国的重要城镇，古罗马人在此修建了城墙、公共浴场、神庙等建筑，进一步完善了城市格局，如今老城周边仍能看到古罗马城墙的遗迹碎片。
              </p>
              <p>
                公元8世纪，摩尔人入侵伊比利亚半岛，卡塞雷斯被摩尔人占领，成为摩尔人统治下的重要军事要塞。摩尔人在此大规模修建防御工事，加固城墙、修建塔楼，同时引入了伊斯兰风格的建筑元素，如马蹄形拱门、几何纹饰等，如今阿尔卡扎城堡的部分墙体与城门仍保留着鲜明的摩尔建筑特色。这段时期，卡塞雷斯成为摩尔人控制伊比利亚半岛西南部的重要枢纽，商业与手工业逐渐繁荣，多元文化开始初步交融。
              </p>
              <p>
                公元13世纪，基督教势力收复卡塞雷斯，这里成为西班牙基督教王国的重要城镇，逐步发展为埃斯特雷马杜拉地区的政治、军事与商业中心。基督教统治者在保留摩尔人建筑遗迹的基础上，大规模修建基督教建筑，如圣玛丽大教堂、圣彼得教堂等，引入哥特式、罗马式建筑风格，与摩尔建筑形成独特的交融风貌。同时，贵族们在此修建宫殿、府邸，老城的城市规模不断扩大，形成了如今错落有致的中世纪城市格局。
              </p>
              <p>
                公元15世纪至16世纪，卡塞雷斯进入鼎盛时期，随着西班牙文艺复兴运动的兴起，老城的建筑风格进一步丰富，文艺复兴式宫殿与府邸陆续建成，如奥索里奥府邸、戈麦斯府邸等，这些建筑融合了哥特式的挺拔与文艺复兴式的精致，装饰精美，成为老城建筑的亮点。这段时期，卡塞雷斯的商业活动异常繁荣，是伊比利亚半岛西南部的货物集散地，往来的商人带来了不同地区的文化与商品，进一步促进了多元文化的融合。
              </p>
              <p>
                19世纪至20世纪，西班牙政府开始对卡塞雷斯老城进行系统性的考古发掘与修缮，成立了专门的文物保护机构，对阿尔卡扎城堡、圣玛丽大教堂、古罗马城墙等核心遗迹进行加固与修复，还原其历史原貌。1986年，卡塞雷斯老城因其完整保留了多元文明的建筑遗存与中世纪城市格局，被联合国教科文组织列为世界文化遗产，2016年又进行了边界调整，进一步扩大了保护范围，成为全球关注的历史文化名城。
              </p>
              <p>
                如今，卡塞雷斯老城依然保留着千年以来的古朴风貌，石质的城墙、错落的塔楼、多元风格的建筑与现代城市生活相互交融，成为埃斯特雷马杜拉自治区的文化象征，吸引着全球各地的游客前来探访，感受多元文明碰撞的魅力与千年时光的厚重。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从卡塞雷斯火车站出发，步行20分钟或乘坐3路公交抵达老城核心区域（普拉多广场站），首先前往普拉多广场，这里是老城的中心，周边环绕着文艺复兴式府邸与哥特式建筑，可欣赏广场上的雕塑与喷泉，感受老城的热闹氛围；随后前往阿尔卡扎城堡，参观这座融合了摩尔式与哥特式风格的军事要塞，登上城堡塔楼，俯瞰整个老城的石质街巷与建筑全景，感受中世纪军事防御体系的威严。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后前往圣玛丽大教堂，这座建于15-16世纪的哥特式教堂，外表壮观，内部装饰精美，可参观教堂内的壁画、雕塑与彩色玻璃窗，触摸阿尔坎塔拉的圣彼得铜像，据说抚摸铜像的脚趾能带来好运；最后前往老城犹太区，漫步在狭窄的石板街巷中，欣赏保存完整的犹太民居，感受犹太文化与当地文化的交融，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验老城精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加导览服务、小众遗迹参观与美食品尝，深入感受卡塞雷斯老城的历史与人文魅力。参观完犹太区后，预约老城官方导览（导览费9欧元/人，全程1.5小时，有西班牙语、英语、中文三种语言可选），跟随导览深入了解各建筑的历史典故、建筑工艺、使用功能，以及不同文明在卡塞雷斯的交融历程。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往卡塞雷斯考古博物馆，参观馆藏的古罗马时期的陶器、硬币、雕塑，以及摩尔人、基督教时期的文物，快速了解卡塞雷斯从伊比利亚时期到中世纪的历史发展历程；随后前往奥索里奥府邸，欣赏这座文艺复兴式建筑的精致装饰，感受中世纪贵族的生活气息。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往老城的特色餐厅，品尝埃斯特雷马杜拉传统美食，如米加斯（与西班牙辣香肠、培根和面包屑一同烹制）、罗帕维爱佳（酱肉辅以鸡蛋和番茄）、伊比利亚火腿等，搭配当地产的利贝拉·德尔·瓜迪亚纳红酒，体验卡塞雷斯的饮食文化；下午前往老城城墙步道，漫步在古老的城墙上，欣赏城墙的遗迹与老城的全景，感受中世纪城市的防御格局，随后参观圣彼得教堂，感受罗马式建筑的古朴厚重，傍晚时分，返回普拉多广场，欣赏夕阳下的老城建筑，感受古朴静谧的氛围，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验老城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 进入教堂、城堡等遗迹内部需着装端庄，避免穿着短裤、短裙、露肩装，需脱帽参观</li>
                <li>• 老城街巷多为石板路，路面较滑，游览时注意脚下安全，建议穿着舒适的步行鞋</li>
                <li>• 参观遗迹内部时禁止大声喧哗，拍摄文物与建筑时禁止使用闪光灯，禁止触摸文物与建筑遗迹</li>
                <li>• 夏季（6-8月）是旅游旺季，参观人数较多，建议错峰前往（上午9:00-11:00、下午17:00后）</li>
                <li>• 老城部分街巷无饮用水售卖，建议提前准备好饮用水</li>
                <li>• 导览服务需提前在老城游客中心预约，避免排队等待</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 阿尔卡扎城堡塔楼</h4>
                  <p className="text-sm text-gray-700">拍摄老城全景的最佳机位，登上城堡顶端的塔楼，可将整个卡塞雷斯老城的石质街巷、错落建筑、普拉多广场尽收眼底，远处的乡村风光与老城的古朴风貌相互映衬，历史感十足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣玛丽大教堂钟楼</h4>
                  <p className="text-sm text-gray-700">大教堂的钟楼是老城的标志性建筑之一，登上钟楼，可俯瞰老城的核心区域，近距离拍摄教堂的哥特式尖顶与周边的建筑群落，光影交错间自带复古庄严的氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 老城犹太区石板街巷</h4>
                  <p className="text-sm text-gray-700">犹太区的街巷狭窄幽深，全部由石板铺就，两侧是保存完整的石质民居，门窗装饰精美，自带静谧复古的氛围。这里是拍摄氛围感人文照片的绝佳机位。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 普拉多广场中央</h4>
                  <p className="text-sm text-gray-700">普拉多广场是老城的中心，周边环绕着文艺复兴式府邸、哥特式建筑与雕塑喷泉，是拍摄老城人文风貌的绝佳机位。建议选择上午10:00左右拍摄，阳光柔和。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 老城城墙步道</h4>
                  <p className="text-sm text-gray-700">城墙步道蜿蜒曲折，一侧是古老的石质城墙，一侧是老城的街巷与建筑，漫步在步道上，可拍摄城墙的遗迹细节与远处的建筑全景，光影交错间充满历史厚重感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 奥索里奥府邸露台</h4>
                  <p className="text-sm text-gray-700">这座文艺复兴式府邸的露台视野开阔，可俯瞰老城的部分街巷与建筑，露台本身的装饰精美，充满复古气息，是拍摄复古人像与建筑细节的绝佳机位。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 老城建筑多为石质原色（灰色、米黄色），建议穿搭素色或低饱和色衣物（如白色、米色、浅棕色），形成鲜明对比</li>
                <li>• 拍摄建筑全景时，可采用仰拍或俯拍角度，凸显建筑的恢弘与古朴</li>
                <li>• 拍摄人文特写时，可捕捉当地居民的生活瞬间，增添照片的烟火气</li>
                <li>• 尊重当地文化与文物保护规定，禁止在建筑上刻画、攀爬，拍摄时避免损坏文物</li>
                <li>• 拍摄人物时，需避免遮挡建筑主体，兼顾历史感与人物美感</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">卡塞雷斯考古博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约300米，步行5分钟可达，馆内收藏了卡塞雷斯从伊比利亚时期、古罗马时期、摩尔人时期到基督教时期的各类文物，包括陶器、硬币、雕塑、石碑等，是了解卡塞雷斯历史的重要场所。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行5分钟 | 🏺 考古文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">孟弗拉圭国家公园</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约30公里，乘坐公交40分钟可达，是地中海山区的典型代表，公园内树枝缠绕，鸟类众多，还有珍稀物种皂鹫，自然风貌独特，是徒步、观鸟的绝佳去处。</p>
                <div className="text-xs text-gray-500">🚌 公交40分钟 | 🌲 自然保护</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">瓜达卢佩皇家圣玛利亚修道院</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约80公里，乘坐大巴1.5小时可达，始建于14世纪，是西班牙重要的宗教建筑，融合了哥特式与文艺复兴式建筑风格，内部装饰精美，收藏了大量宗教艺术品。</p>
                <div className="text-xs text-gray-500">🚌 大巴1.5小时 | ⛪ 宗教建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">卡塞雷斯中央市场</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约500米，步行8分钟可达，是当地最具烟火气的场所，市场内售卖新鲜的海鲜、水果、蔬菜、奶酪、火腿等当地特产，还有各类小吃摊位，可品尝当地特色小吃。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行8分钟 | 🏪 当地市场</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">梅里达罗马剧场</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约60公里，乘坐高铁30分钟可达，是古罗马时期的重要遗存，剧场可容纳3000名观众，座位安排有助于听众获得最佳听觉效果，是梅里达遗产的象征。</p>
                <div className="text-xs text-gray-500">🚂 高铁30分钟 | 🏛️ 古罗马遗迹</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">埃尔卡斯蒂略城堡</h4>
                <p className="text-sm text-gray-700 mb-2">距离老城核心区域约15公里，乘坐公交25分钟可达，始建于中世纪，是一座保存完整的军事城堡，融合了摩尔式与哥特式建筑风格，城堡内保留了防御工事、塔楼等遗迹，可俯瞰周边的乡村风光。</p>
                <div className="text-xs text-gray-500">🚌 公交25分钟 | 🏰 军事城堡</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离阿尔卡扎城堡、普拉多广场等核心景点较近，步行即可抵达，周边环境古朴静谧，推窗即可欣赏老城的石质建筑与街巷风光。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">距离火车站步行5-10分钟，周边有餐厅、便利店，生活便利，适合需要乘坐火车前往马德里、塞维利亚等周边城市的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">老城外围</h4>
                  <p className="text-sm text-yellow-800">距离核心区域步行15分钟可达，价格相对实惠，环境清幽，适合预算有限的游客，性价比突出。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端历史主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城内部，由古老的宫殿、府邸改建而成，融合了复古与现代元素，自带餐厅、观景露台，部分房型可欣赏老城全景，早餐丰富。</p>
                  <div className="text-xs text-gray-500">💎 历史体验 | 🏰 古建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，价格约70-110欧元/晚，性价比突出。</p>
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
                    <p className="mb-2"><strong>旺季（6-8月、9-10月）：</strong>夏季避暑旺季和历史遗迹游览旺季，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+景点联票（如老城核心景点、考古博物馆联票）的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>西班牙住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>老城部分酒店由古老建筑改建而成，无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>老城内部夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                卡塞雷斯老城，这座被石头包裹的千年秘境，历经伊比利亚人的开拓、古罗马人的建设、摩尔人的统治与基督教的发展，依然保留着最纯粹的多元文明印记。它既有阿尔卡扎城堡的威严、圣玛丽大教堂的庄严，也有犹太区的静谧、普拉多广场的烟火；既有不同文明碰撞的璀璨，也有乡村小镇的质朴；既有历史遗迹的古朴厚重，也有现代生活的温暖气息。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以漫步石板街巷，触摸千年石墙的纹理，感受多元文明的交融；可以登上城堡塔楼，俯瞰老城全景，领略中世纪城市的风貌；可以走进特色餐厅，品尝当地美食，感受埃斯特雷马杜拉的饮食文化。无论是独自旅行、情侣出游还是家庭度假，卡塞雷斯老城都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与时光的浸润中，读懂伊比利亚半岛的多元魅力，爱上这片兼具古朴与温暖的土地。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}