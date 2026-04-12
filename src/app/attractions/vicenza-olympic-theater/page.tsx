import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维琴察奥林匹克剧院・Teatro Olimpico Vicenza・意大利・维琴察 | 最佳欧洲景点',
  description: '探索维琴察奥林匹克剧院，文艺复兴时期的戏剧艺术瑰宝，建于1580-1585年，是世界现存最古老的有屋顶剧院，完美融合建筑美学与戏剧功能。',
}

export default function VicenzaOlympicTheaterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '维琴察奥林匹克剧院', href: '/attractions/vicenza-olympic-theater' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">维琴察奥林匹克剧院・Teatro Olimpico Vicenza・意大利・维琴察</h1>
          <p className="text-lg text-gray-600 mb-6">
            维琴察奥林匹克剧院是文艺复兴时期建筑大师帕拉迪奥的晚年遗作，建于1580-1585年，是世界现存最古老的有屋顶剧院。剧院采用古典建筑风格，以半圆型观众席、木质舞台布景为特色，完美融合建筑美学与戏剧功能，1994年随维琴察城列入世界文化遗产，是解读文艺复兴时期戏剧艺术与建筑工艺的核心地标。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              维琴察奥林匹克剧院是文艺复兴时期建筑大师帕拉迪奥的晚年遗作，建于1580-1585年，是世界现存最古老的有屋顶剧院。剧院采用古典建筑风格，以半圆型观众席、木质舞台布景为特色，完美融合建筑美学与戏剧功能，1994年随维琴察城列入世界文化遗产，是解读文艺复兴时期戏剧艺术与建筑工艺的核心地标。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="维琴察奥林匹克剧院" />
                <InfoRow label="英文名称" value="Teatro Olimpico Vicenza" />
                <InfoRow label="国家" value="意大利（Italy）" />
                <InfoRow label="城市" value="维琴察（Vicenza）" />
                <InfoRow label="所属区域" value="意大利威尼托大区维琴察省" />
              </div>
              <div className="space-y-4">
                <InfoRow label="建造年代" value="1580-1585年" />
                <InfoRow label="建筑风格" value="文艺复兴建筑、古典风格" />
                <InfoRow label="核心特色" value="半圆型观众席、木质舞台布景、帕拉迪奥遗作" />
                <InfoRow label="历史地位" value="世界文化遗产、世界最古老的有屋顶剧院" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="夏季9:00-18:00，冬季9:00-17:00；每周一闭馆" />
              <InfoRow label="门票价格" value="成人票12欧元，优惠票6欧元；12岁以下儿童免费" />
              <InfoRow label="地址" value="Teatro Olimpico, Piazza Matteotti, 1, 36100 Vicenza VI, Italy" />
              <InfoRow label="交通方式" value="从威尼斯乘高铁约1小时，票价30-45欧元；火车站乘2路、5路公交3站可达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                维琴察奥林匹克剧院的历史可追溯至16世纪末，正值文艺复兴运动的鼎盛时期，当时维琴察作为意大利北部的文化重镇，人文气息浓厚，贵族与学者们热衷于戏剧艺术，迫切需要一座专门的剧院来举办戏剧演出、学术交流等活动。1579年，维琴察"奥林匹克学院"（一个由贵族、学者组成的文化团体）委托当时已年过七旬的建筑大师安德烈亚·帕拉迪奥，设计一座兼具古典美学与实用功能的剧院，这便是维琴察奥林匹克剧院的由来。
              </p>
              <p>
                安德烈亚·帕拉迪奥是文艺复兴时期最具影响力的建筑大师之一，生于1508年，早年曾在帕多瓦学习，后来成为古罗马建筑的推崇者，其设计风格融合了古罗马建筑的对称美与人文主义的审美理念，对后世建筑产生了深远影响，被称为"帕拉迪奥风格"的创始人。接受委托后，帕拉迪奥以古罗马剧院为原型，结合文艺复兴时期的人文思想，开始设计这座剧院，他希望通过建筑的对称、和谐，展现人文主义的精神内核，同时满足戏剧演出的实际需求。
              </p>
              <p>
                1580年，维琴察奥林匹克剧院正式动工修建，帕拉迪奥亲自监督施工，选用当地出产的大理石、砖块等材料，严格遵循古典建筑的比例与对称原则，设计了半圆型的观众席、阶梯式座位，以及极具特色的木质舞台布景。然而，就在剧院即将完工之际，帕拉迪奥于1580年去世，未能亲眼见证自己的心血之作落成。随后，他的学生温琴佐·斯卡莫齐接手了后续的修建工作，严格遵循帕拉迪奥的设计图纸，于1585年正式完成剧院的修建，确保了剧院的建筑风格与设计理念始终保持一致。
              </p>
              <p>
                剧院建成后，成为维琴察奥林匹克学院的核心活动场所，主要用于举办戏剧演出、诗歌朗诵、学术讲座等活动，吸引了当时意大利各地的学者、艺术家前来参与，成为文艺复兴时期文化交流的重要阵地。17世纪至18世纪，随着戏剧艺术的发展，剧院经历了多次小规模修缮，主要针对舞台布景、观众席座椅等进行维护，始终保留了帕拉迪奥时期的核心建筑风貌，未进行大规模改造。
              </p>
              <p>
                19世纪，维琴察政府开始对剧院进行系统性的保护与修复，重点加固剧院的墙体、屋顶，修复受损的木质舞台布景与大理石装饰，同时对剧院周边的老建筑进行整治，保留了老城的文艺复兴建筑格局。20世纪以来，意大利政府加大了对维琴察文化遗产的保护力度，成立专门的文物保护机构，采用现代技术对剧院进行监测与修复，还原其文艺复兴时期的原貌，同时严格控制参观人数，避免文物受到损坏。
              </p>
              <p>
                1994年，维琴察城及帕拉迪奥别墅（含维琴察奥林匹克剧院）因其完整保留的文艺复兴建筑风貌与深厚的文化底蕴，被联合国教科文组织列为世界文化遗产，维琴察奥林匹克剧院也成为全球闻名的建筑与戏剧艺术瑰宝，吸引着世界各地的游客、学者、艺术家前来探访、研究。如今，这座历经四百多年风雨的剧院依然在发挥作用，定期举办戏剧演出、音乐会、艺术展览等活动，成为文艺复兴文明与现代艺术交融的见证。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（2-3小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从维琴察火车站出发，步行15分钟或乘坐2路公交抵达马特奥蒂广场，首先观赏剧院的外观，感受帕拉迪奥式建筑的对称之美，大理石墙面搭配古典柱式，简约而庄重，拍照记录这一文艺复兴建筑杰作。随后跟随导览进入剧院内部，参观半圆型观众席，感受阶梯式座位的对称布局与声学设计的精妙，近距离观察大理石装饰与壁画细节，了解剧院的建筑工艺与设计理念。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后重点参观剧院的木质舞台布景，这是剧院的核心特色之一，由斯卡莫齐按照帕拉迪奥的设计完成，采用透视原理打造出逼真的街道景观，仿佛延伸至远方，展现了文艺复兴时期的艺术智慧；参观结束后，前往剧院周边的帕拉迪奥博物馆，这里收藏了帕拉迪奥的设计图纸、建筑模型、手稿等文物，快速了解帕拉迪奥的建筑生涯与设计风格；最后漫步在马特奥蒂广场周边的石板街巷，欣赏周边的文艺复兴时期建筑，感受古城的人文氛围，结束精华游览。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验剧院精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（4-5小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加导览服务、小众遗迹参观与美食品尝，深入感受维琴察的文艺复兴文化与人文魅力。参观完帕拉迪奥博物馆后，预约剧院深度导览（导览费15欧元/人，全程1.5小时，有意大利语、英语、中文三种语言可选），跟随导览深入了解剧院的声学原理、舞台布景的制作工艺、历史上的戏剧演出场景，以及帕拉迪奥的设计理念与人文思想，重点参观剧院的修复遗迹与后台区域。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  导览结束后，前往维琴察大教堂，这座融合了罗马式与哥特式建筑风格的教堂，距离剧院约300米，步行4分钟可达，内部装饰精美，收藏了大量文艺复兴时期的壁画、雕塑等艺术品，可感受不同建筑风格与艺术流派的碰撞；随后前往帕拉迪奥设计的巴西利卡，这是一座改造后的古典建筑，外观采用帕拉迪奥式柱廊，内部空间宽敞，是维琴察的标志性建筑之一，可参观建筑内部的装饰与展览，了解帕拉迪奥对古典建筑的创新与发展。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往老城的特色餐厅，品尝维琴察传统美食，如贝里尼烩饭、维琴察火腿、意大利千层面等，搭配当地产的白葡萄酒，体验维琴察的饮食文化；下午前往维琴察现代艺术博物馆，距离剧院约500米，步行7分钟可达，馆内收藏了大量现代艺术作品，与文艺复兴时期的建筑、艺术形成鲜明对比，感受艺术的传承与发展；傍晚时分，返回马特奥蒂广场，欣赏夕阳下的奥林匹克剧院，夕阳洒在大理石墙面上，呈现出温暖的金色，氛围感拉满，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验老城文化
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <h4 className="font-semibold text-yellow-800 mb-2">游览小贴士</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 进入剧院内部需穿着舒适的步行鞋，遵守导览规定，禁止大声喧哗、拍照时禁止使用闪光灯</li>
                <li>• 剧院内部光线较暗，建议携带手电筒（小型）</li>
                <li>• 夏季（6-8月）是旅游旺季，参观人数较多，建议错峰前往（上午9:00前、下午16:00后）</li>
                <li>• 老城区部分街巷无饮用水售卖，建议提前准备好饮用水</li>
                <li>• 导览服务需提前在官网预约，避免排队等待</li>
                <li>• 剧院设有无障碍坡道与电梯，残障人士可便捷游览，可在游客中心租借轮椅</li>
              </ul>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 马特奥蒂广场中央</h4>
                  <p className="text-sm text-gray-700">拍摄剧院外观全景的最佳机位，站在广场中央，可将剧院的完整外观、帕拉迪奥式柱廊与周边的文艺复兴建筑尽收眼底，大理石墙面的质感与建筑的对称之美极具视觉冲击力，广场的石板路与周边的绿植作为前景，增添了人文烟火气。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 剧院入口门廊</h4>
                  <p className="text-sm text-gray-700">门廊是拍摄剧院细节与人文氛围的绝佳机位，站在门廊下，可拍摄剧院的古典柱式、大理石装饰与门头浮雕，感受帕拉迪奥建筑的精致与庄重，同时可捕捉进出剧院的游客，增添画面的生动感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 剧院内部观众席中央</h4>
                  <p className="text-sm text-gray-700">这是拍摄剧院内部全景的核心机位，坐在观众席中央，可将半圆型观众席、阶梯式座位与舞台布景尽收眼底，展现剧院的对称之美与空间感，同时能清晰拍摄到舞台布景的透视效果，凸显文艺复兴时期的艺术智慧。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 舞台侧面</h4>
                  <p className="text-sm text-gray-700">站在舞台侧面，可近距离拍摄木质舞台布景的细节，捕捉透视效果下的街道景观，同时能拍摄到观众席的局部，展现剧院的空间布局与声学设计，既能凸显舞台布景的艺术感，又能体现剧院的实用功能。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 帕拉迪奥博物馆露台</h4>
                  <p className="text-sm text-gray-700">博物馆露台是俯瞰剧院与老城风貌的绝佳机位，站在露台上，可俯瞰马特奥蒂广场、奥林匹克剧院的屋顶与周边的文艺复兴建筑，感受维琴察老城的建筑格局与人文氛围，画面层次感十足。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 老城石板街巷</h4>
                  <p className="text-sm text-gray-700">老城的石板街巷狭窄幽深，两侧是文艺复兴时期的石质建筑，从街巷中抬头可拍摄剧院的局部景观，建筑的轮廓与街巷的光影形成鲜明对比，自带复古静谧的氛围。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 剧院以大理石的米白色、浅灰色为主，建议穿搭素色或低饱和色衣物（如白色、米色、浅蓝色），形成和谐的色调</li>
                <li>• 拍摄建筑全景时，可采用广角视角，凸显建筑的对称之美与空间感</li>
                <li>• 拍摄舞台布景时，可聚焦透视效果，展现其艺术巧思</li>
                <li>• 尊重当地文化与文物保护规定，禁止在剧院内部使用闪光灯、禁止攀爬建筑</li>
                <li>• 拍摄人物时，需避免遮挡剧院主体，兼顾建筑美感与人物形象</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">帕拉迪奥博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离剧院约100米，步行2分钟可达，馆内收藏了安德烈亚·帕拉迪奥的设计图纸、建筑模型、手稿、信件等文物，还有大量文艺复兴时期的艺术品，是了解帕拉迪奥建筑生涯与设计风格的重要场所。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行2分钟 | 🏛️ 建筑博物馆</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">维琴察大教堂</h4>
                <p className="text-sm text-gray-700 mb-2">距离剧院约300米，步行4分钟可达，始建于11世纪，融合了罗马式与哥特式建筑风格，外观庄重华丽，内部装饰精美，收藏了大量文艺复兴时期的壁画、雕塑、彩色玻璃窗等艺术品。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行4分钟 | ⛪ 宗教建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">帕拉迪奥巴西利卡</h4>
                <p className="text-sm text-gray-700 mb-2">距离剧院约200米，步行3分钟可达，由帕拉迪奥于1549年改造设计，是帕拉迪奥风格的代表性建筑之一，外观采用古典柱廊，内部空间宽敞，设有展览厅，展示维琴察的历史与建筑文化。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行3分钟 | 🏛️ 古典建筑</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">维琴察现代艺术博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离剧院约500米，步行7分钟可达，馆内收藏了20世纪以来的现代艺术作品，涵盖绘画、雕塑、装置艺术等多种类型，与文艺复兴时期的建筑、艺术形成鲜明对比，展现艺术的传承与创新。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行7分钟 | 🎨 现代艺术</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">维琴察中央市场</h4>
                <p className="text-sm text-gray-700 mb-2">距离剧院约250米，步行4分钟可达，是当地最具烟火气的场所，市场内售卖新鲜的海鲜、水果、蔬菜、奶酪、火腿等当地特产，还有各类小吃摊位，可品尝当地特色小吃。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行4分钟 | 🏪 当地市场</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">基耶里卡蒂宫</h4>
                <p className="text-sm text-gray-700 mb-2">距离剧院约400米，步行6分钟可达，是一座文艺复兴时期的宫殿，现为维琴察艺术博物馆，馆内收藏了大量文艺复兴时期的绘画、雕塑等艺术品，宫殿的花园也十分精美。</p>
                <div className="text-xs text-gray-500">🚶‍♂️ 步行6分钟 | 🏰 宫殿博物馆</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城核心区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离维琴察奥林匹克剧院、帕拉迪奥博物馆等核心景点较近，步行即可抵达，周边环境古朴静谧，推窗即可欣赏文艺复兴时期的建筑风貌。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-green-800">距离火车站步行5-10分钟，周边有餐厅、便利店，生活便利，适合需要乘坐火车前往威尼斯、米兰等周边城市的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">老城外围</h4>
                  <p className="text-sm text-yellow-800">距离核心区域步行15分钟可达，价格相对实惠，环境清幽，适合预算有限的游客，性价比突出。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端文艺复兴主题酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城内部，由古老的宫殿、府邸改建而成，部分酒店可欣赏剧院与老城风光，融合了复古与现代元素，自带餐厅、观景露台。</p>
                  <div className="text-xs text-gray-500">💎 历史体验 | 🏰 古建筑</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于老城附近或火车站周边，步行可达核心景点，房间干净整洁，设施齐全，价格约80-130欧元/晚，性价比突出。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿带有厨房，可自己烹饪，价格实惠，还能感受当地居民的生活氛围，体验地道的意大利生活。</p>
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
                    <p className="mb-2"><strong>旺季（6-9月）：</strong>夏季避暑旺季，文艺复兴建筑景观最佳，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（12月至次年5月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>文化套餐：</strong>部分高端酒店推出住宿+景点联票（如剧院、博物馆联票）的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>意大利住宿通常不提供洗漱用品，需自备牙刷、牙膏等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>老城部分酒店由古老建筑改建而成，无电梯，且街巷坡度较大</p>
                    <p><strong>注意事项：</strong>老城内部夜间安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                维琴察奥林匹克剧院，这座跨越四百多年的文艺复兴艺术瑰宝，历经帕拉迪奥的匠心设计、斯卡莫齐的接续完成，依然屹立在维琴察老城的核心地带。它既有文艺复兴建筑的对称之美与人文底蕴，也有戏剧艺术的鲜活气息与实用价值；既有大理石建筑的庄重典雅，也有木质舞台的精巧灵动；既有历史遗迹的厚重感，也有现代艺术的生命力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在这里，你可以跟随导览，触摸文艺复兴建筑的岁月纹理，感受帕拉迪奥的非凡匠心；可以静坐观众席，想象当年戏剧演出的盛景，读懂文艺复兴时期的人文情怀；可以漫步老城街巷，探访帕拉迪奥的其他杰作，领略"帕拉迪奥之城"的独特魅力；可以品尝当地美食，感受威尼托大区的饮食文化。无论是独自旅行、情侣出游还是家庭度假，维琴察奥林匹克剧院都能给你带来难忘的旅行体验。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在古典建筑与戏剧艺术之间，邂逅一段跨越时空的文艺复兴传奇，爱上这座兼具古朴与浪漫的意大利文化名城。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}