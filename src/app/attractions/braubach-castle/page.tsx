import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布劳巴赫城堡・Braubach Castle・德国・布劳巴赫 | 最佳欧洲景点',
  description: '探索布劳巴赫城堡，莱茵河畔的中世纪防御瑰宝，是莱茵河中游唯一保存完好、未遭战争破坏的中世纪高地城堡，以独特的防御建筑风格、悠久的历史底蕴和绝美的河畔风光闻名，是探访德国中世纪城堡文化与莱茵河风情的必游之地。',
}

export default function BraubachCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布劳巴赫城堡', href: '/attractions/braubach-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布劳巴赫城堡・Braubach Castle・德国・布劳巴赫</h1>
          <p className="text-lg text-gray-600 mb-6">
            布劳巴赫城堡始建于12世纪，是莱茵河中游唯一完整留存的中世纪高地城堡，隶属于德国布劳巴赫市。城堡依山而建，融合罗马式与哥特式建筑风格，兼具防御功能与居住属性，内部留存着中世纪防御设施、文物展品与宗教遗迹，登顶可俯瞰莱茵河全景与布劳巴赫小镇风光，既能感受中世纪军事防御的威严，又能领略莱茵河畔的人文与自然之美，是中世纪城堡建筑与莱茵河文化的生动见证。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              布劳巴赫城堡始建于12世纪，是莱茵河中游唯一完整留存的中世纪高地城堡，隶属于德国布劳巴赫市。城堡依山而建，融合罗马式与哥特式建筑风格，兼具防御功能与居住属性，内部留存着中世纪防御设施、文物展品与宗教遗迹，登顶可俯瞰莱茵河全景与布劳巴赫小镇风光，既能感受中世纪军事防御的威严，又能领略莱茵河畔的人文与自然之美，是中世纪城堡建筑与莱茵河文化的生动见证。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="布劳巴赫城堡" />
                <InfoRow label="英文名称" value="Braubach Castle" />
                <InfoRow label="国家" value="德国（Germany）" />
                <InfoRow label="城市" value="布劳巴赫（Braubach）" />
                <InfoRow label="所属区域" value="德国莱茵兰-普法尔茨州（Rhineland-Palatinate）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="莱茵河中游唯一完整中世纪高地城堡" />
                <InfoRow label="核心特色" value="中世纪防御建筑、莱茵河城堡群" />
                <InfoRow label="建筑价值" value="罗马式与哥特式融合、防御与居住功能" />
                <InfoRow label="文化价值" value="莱茵河文化、中世纪军事防御" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="城堡全年开放，夏季9:00-17:00，冬季10:00-16:00；每周一闭馆" />
              <InfoRow label="门票价格" value="成人票12欧元，优惠票8欧元；导览票额外3欧元；城堡+莱茵河游船联票25欧元" />
              <InfoRow label="地址" value="Marksburg 1, 56346 Braubach, Germany" />
              <InfoRow label="交通方式" value="从法兰克福乘德铁约1小时10分钟；从科隆乘德铁约1小时40分钟；可乘坐150路巴士直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                布劳巴赫城堡的历史可追溯至12世纪，其发展历程与莱茵河的贸易繁荣、中世纪的诸侯纷争紧密相连，历经近千年风雨，始终保持着原始的建筑风貌，成为莱茵河中游中世纪城堡的典范，承载着德国中世纪的军事、政治与文化记忆。12世纪初，布劳巴赫地区的贵族冯·布劳巴赫家族（von Braubach）在莱茵河畔的陡峭山丘上修建了最初的防御工事，作为家族的居所与军事据点，这便是布劳巴赫城堡的雏形，当时的城堡主要以木质结构为主，防御功能较为简单。
              </p>
              <p>
                1231年，布劳巴赫城堡首次在官方文献中被提及，当时已成为普法尔茨伯爵的领地，被用作莱茵河沿岸的税收关卡与防御要塞，负责监控莱茵河的航运贸易，征收过往船只的税费，同时抵御外敌入侵。1260年左右，城堡被改造为关税城堡，进一步强化了防御设施，增设了城墙、塔楼与护城河，成为莱茵河中游重要的军事防御据点，此时的城堡已逐渐改建为石质结构，规模不断扩大。
              </p>
              <p>
                1283年，卡岑埃尔恩博根伯爵（Counts of Katzenelnbogen）将布劳巴赫城堡选为临时居所，对城堡进行了大规模修缮与扩建，增设了宫殿、礼拜堂与仓库，使其兼具防御、居住与宗教功能。1437年，因城堡内修建了圣马克斯礼拜堂（Markus Kapelle），城堡正式更名为"Marksburg"（马克斯堡），但民间仍习惯称之为布劳巴赫城堡。这一时期，城堡的建筑风格逐渐融合罗马式与哥特式元素，墙面采用厚重的石块砌筑，塔楼高耸挺拔，窗户设计精巧，既保留了军事防御的威严，又增添了居住的舒适性。
              </p>
              <p>
                1479年，布劳巴赫城堡被黑森州伯爵（Landgraves of Hesse）接管，此后的数百年间，城堡先后被纳骚公国（Duchy of Nassau）、普鲁士王国（Kingdom of Prussia）统治，期间多次经历修缮，但始终保持着中世纪的核心风貌。1802年，拿破仑战争期间，城堡被纳入纳骚公国版图，成为公国的重要行政据点；1866年，普奥战争后，城堡归属普鲁士王国，被用作军事仓库与监狱。
              </p>
              <p>
                1899年，布劳巴赫城堡被德国城堡协会（Deutsche Burgenvereinigung）收购，这是一个致力于保护德国中世纪城堡的民间组织，协会对城堡进行了全面的修缮与保护，严格遵循原始建筑工艺，修复了受损的城墙、塔楼与内部建筑，还原了中世纪城堡的原貌。二战期间，布劳巴赫城堡幸运地避开了大规模轰炸，核心建筑与内部文物得以完整留存，成为莱茵河沿岸少数未遭战争破坏的中世纪城堡。如今，布劳巴赫城堡不仅是一座历史遗迹，更是德国中世纪城堡建筑与莱茵河文化的重要载体，每年吸引着世界各地的游客前来探寻其千年底蕴。城堡内设有博物馆，收藏着中世纪的兵器、盔甲、宫廷用品与历史文献，详细记录了城堡的发展历程与莱茵河沿岸的历史文化，成为研究中世纪欧洲军事、建筑与社会生活的重要场所。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从城堡入口进入，首先参观城堡大门与吊桥，这是中世纪城堡的标志性防御设施，吊桥可随时收起，抵御外敌入侵，大门两侧的城墙高达10米，墙面布满射击孔，尽显军事防御的威严。随后进入城堡庭院，庭院中央矗立着一座罗马式喷泉，周边环绕着礼拜堂、宫殿与防御塔楼，可驻足欣赏建筑的细节之美。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  接着前往圣马克斯礼拜堂，这座建于14世纪的礼拜堂是城堡的宗教核心，内部彩绘玻璃、雕塑与壁画精美，留存着中世纪的宗教遗迹，可感受宗教文化与城堡建筑的融合之美。之后参观城堡博物馆，欣赏馆内收藏的中世纪兵器、盔甲、宫廷用品与历史文献，了解城堡的发展历程与中世纪的军事文化。最后登顶城堡主塔楼，俯瞰莱茵河全景与布劳巴赫小镇风光，远处的莱茵河蜿蜒流淌，两岸青山环绕，小镇的红瓦房屋错落有致，画面开阔优美，结束精华游览，全程路线紧凑，涵盖城堡核心看点。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>适合人群：</strong>时间紧张的游客，想要快速体验城堡精华
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线的基础上，增加小众景点游览与文化体验，深入感受城堡的千年底蕴。参观完城堡博物馆后，前往城堡的地下地牢与仓库，地牢曾是中世纪关押囚犯的场所，内部阴暗潮湿，留存着刑具与囚室，可感受中世纪的残酷与威严；仓库则用于储存粮食、武器与生活用品，展示了中世纪城堡的后勤保障体系。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  中午前往城堡内的特色餐厅，品尝莱茵兰-普法尔茨州的传统美食，如烤猪肘、香肠、土豆泥与当地特色的莱茵河鲜鱼，搭配正宗的德国啤酒或果汁，体验当地的饮食文化。下午参观城堡的防御工事，包括城墙、瞭望塔与射击孔，了解中世纪城堡的防御体系与军事策略，可在瞭望塔上观察城堡的整体布局与周边地形，感受古代军事家的智慧。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  之后前往城堡的花园，花园位于城堡西侧，种植着中世纪的花卉与绿植，环境静谧优美，可在花园的长椅上休息，欣赏莱茵河风光，感受城堡的宁静与惬意。傍晚时分，返回城堡主塔楼，欣赏夕阳下的莱茵河与布劳巴赫小镇，夕阳洒在河面上，波光粼粼，小镇的房屋被染成温暖的金色，氛围感拉满，结束深度游览。
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>适合人群：</strong>喜欢细致游览的游客，想要深度体验历史文化
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 城堡主塔楼顶端</h4>
                  <p className="text-sm text-gray-700">这是拍摄城堡与莱茵河全景的最佳机位，登顶塔楼，可360度俯瞰整个布劳巴赫城堡的轮廓、莱茵河蜿蜒流淌的身姿与布劳巴赫小镇的全貌，远处的青山与河畔的建筑交相辉映，画面开阔大气，兼具人文与自然之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 城堡吊桥入口</h4>
                  <p className="text-sm text-gray-700">这是拍摄城堡防御风貌的绝佳机位，以城堡的吊桥、大门与厚重的城墙为主体，可清晰捕捉中世纪城堡的防御特色，吊桥的木质结构与城墙的石质纹理形成鲜明对比，尽显城堡的威严与厚重。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 莱茵河畔步道</h4>
                  <p className="text-sm text-gray-700">这是拍摄城堡与莱茵河同框的绝佳机位，以莱茵河为前景，远处的布劳巴赫城堡矗立在山丘之上，背景是连绵的青山，既能展现城堡的雄伟，又能凸显莱茵河的柔美，画面静谧优美。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 城堡庭院中央</h4>
                  <p className="text-sm text-gray-700">这是拍摄城堡内部建筑的绝佳机位，庭院中央的罗马式喷泉、周边的礼拜堂与防御塔楼错落有致，建筑风格融合罗马式与哥特式元素，细节精美，可捕捉城堡的内部风貌与人文气息。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 城堡花园露台</h4>
                  <p className="text-sm text-gray-700">这是拍摄城堡与小镇同框的绝佳机位，露台地势稍高，可俯瞰布劳巴赫小镇的红瓦房屋与城堡的部分建筑，背景是莱茵河与青山，画面温馨惬意，兼具人文与自然之美。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 城堡瞭望塔</h4>
                  <p className="text-sm text-gray-700">这是拍摄城堡防御工事与周边地形的绝佳机位，瞭望塔视野开阔，可清晰看到城堡的城墙、射击孔与周边的山丘、河流，能直观展现中世纪城堡的防御布局与地理位置优势。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 城堡建筑以石质结构为主，色调厚重，周边有莱茵河与青山环绕，建议穿搭浅色系、复古风格或大地色系衣物，形成和谐的色调</li>
                <li>• 拍摄城堡内部博物馆、地牢与文物展品时，禁止使用闪光灯，避免损坏文物、影响其他游客游览</li>
                <li>• 禁止攀爬城墙、触摸雕塑与文物，拍摄时避免影响他人通行，尊重当地的游览规定</li>
                <li>• 傍晚时分的光线最适合拍摄，可呈现出温暖的氛围感，凸显城堡的浪漫与历史厚重感</li>
                <li>• 拍摄莱茵河与城堡同框时，可使用广角视角，完整展现城堡、河流与青山的绝美画面</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">布劳巴赫老城</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约15分钟步行路程，是一座保存完好的中世纪小镇，街巷纵横交错，遍布色彩斑斓的半木结构房屋、复古商铺与露天咖啡馆，充满浓郁的中世纪风情，可漫步于小镇街巷，感受当地的烟火气。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🏘️ 中世纪小镇</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">莱茵河游船</h4>
                <p className="text-sm text-gray-700 mb-2">布劳巴赫码头距离城堡约20分钟步行路程，可乘坐莱茵河游船，沿途欣赏莱茵河两岸的城堡群、青山绿水与特色小镇，游船全程约1小时，途经多个中世纪城堡，可从水上视角欣赏布劳巴赫城堡的雄伟。</p>
                <div className="text-xs text-gray-500">🚶 步行20分钟 | 🚢 莱茵河风光</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">科布伦茨（Koblenz）</h4>
                <p className="text-sm text-gray-700 mb-2">距离布劳巴赫约20分钟车程，是莱茵河与摩泽尔河的交汇处，拥有丰富的历史遗迹与人文景观，如德意志之角、科布伦茨老城、Ehrenbreitstein要塞等，可参观德意志之角的纪念碑，漫步于老城街巷。</p>
                <div className="text-xs text-gray-500">🚗 车程20分钟 | 🏛️ 历史名城</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣戈阿尔（St. Goar）</h4>
                <p className="text-sm text-gray-700 mb-2">距离布劳巴赫约15分钟车程，是莱茵河沿岸的另一座特色小镇，拥有圣戈阿尔城堡与猫堡（Burg Katz），两座城堡隔河相望，形成独特的景观，小镇内还有古老的教堂、复古商铺与特色餐厅。</p>
                <div className="text-xs text-gray-500">🚗 车程15分钟 | 🏰 城堡文化</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">莱茵河自行车道</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约5分钟步行路程，是莱茵河沿岸的经典自行车路线，步道沿途植被繁茂，可欣赏莱茵河风光与两岸的城堡、小镇，适合喜欢自然景观、想要休闲健身的游客，可租赁自行车沿自行车道游览。</p>
                <div className="text-xs text-gray-500">🚶 步行5分钟 | 🚴 莱茵河骑行</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">布劳巴赫民俗博物馆</h4>
                <p className="text-sm text-gray-700 mb-2">距离城堡约10分钟步行路程，展示了布劳巴赫从古代到现代的民俗文化、传统工艺与生活方式，收藏了大量民俗文物、传统服饰、手工业制品与生活器具，可了解当地的地域文化与居民生活。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🎭 民俗文化</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">城堡周边区域</h4>
                  <p className="text-sm text-blue-800">首选区域，距离布劳巴赫城堡步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览城堡，又能感受中世纪小镇的氛围与莱茵河风光，适合想要深度体验布劳巴赫历史文化与小镇生活的游客。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">莱茵河畔住宿</h4>
                  <p className="text-sm text-green-800">距离莱茵河步行可达，可欣赏莱茵河夜景与日出，环境静谧舒适，适合休闲度假、喜欢自然风光的游客，可体验河畔生活与莱茵河美景。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">火车站附近</h4>
                  <p className="text-sm text-yellow-800">距离车站步行10分钟可达，周边有餐厅、便利店，生活便利，适合需要乘坐火车、巴士前往周边城市的游客，交通便利是主要优势。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端景观酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于莱茵河畔或城堡周边，融合中世纪建筑元素与现代设施，自带观景露台、餐厅与休闲区，可欣赏莱茵河全景或城堡风光，部分酒店由古老建筑改造而成，风格独特。</p>
                  <div className="text-xs text-gray-500">🏰 城堡景观 | 🏞️ 莱茵河景</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于小镇中心或火车站周边，步行可达城堡与莱茵河畔，房间干净整洁，设施齐全，部分酒店提供早餐与免费WiFi，部分酒店还提供城堡门票与莱茵河游船优惠。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 👨‍👩‍👧‍👦 家庭出游</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿</h4>
                  <p className="text-sm text-gray-700 mb-2">多为家庭经营，风格温馨，部分民宿由中世纪半木结构房屋改造而成，充满特色，还能感受当地居民的生活氛围，价格约30-50欧元/晚，适合预算有限的游客。</p>
                  <div className="text-xs text-gray-500">💰 预算友好 | 🏡 家庭氛围</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">青年旅社</h4>
                  <p className="text-sm text-gray-700 mb-2">适合独自旅行或预算有限的游客，价格实惠，通常位于交通便利的位置，可结识来自世界各地的游客，价格约18-30欧元/晚，设施简洁实用，社交氛围浓厚。</p>
                  <div className="text-xs text-gray-500">🎒 背包客首选 | 🌍 国际交流</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季（5-10月）：</strong>春季气候宜人，夏季莱茵河风光优美，秋季色彩斑斓，游客较多，建议提前1-2个月预订</p>
                    <p className="mb-2"><strong>淡季（11月至次年4月）：</strong>可提前1-2周预订，价格相对实惠</p>
                    <p><strong>特色套餐：</strong>部分高端酒店推出住宿+城堡门票、住宿+莱茵河游船的优惠套餐</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>德国住宿通常不提供洗漱用品，需自带牙刷、牙膏、拖鞋等</p>
                    <p className="mb-2"><strong>特殊注意：</strong>城堡周边部分酒店位于山坡上，地势有坡度且无电梯，预订时可提前咨询</p>
                    <p><strong>注意事项：</strong>小镇夜间非常安静，需保持安静；大部分酒店为无烟酒店</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                布劳巴赫城堡，这座矗立在莱茵河畔的中世纪防御瑰宝，历经近千年风雨洗礼，依然保留着原始的建筑风貌与深厚的历史底蕴。在这里，你可以漫步于城堡的城墙与塔楼，触摸中世纪军事防御的匠心；可以走进博物馆，探寻城堡的千年往事与莱茵河的贸易繁荣；可以登顶塔楼，俯瞰莱茵河与小镇的绝美风光；可以逛逛古朴小镇，感受莱茵河畔的烟火气与静谧氛围。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，布劳巴赫城堡都能给你带来难忘的旅行体验，让你在历史与自然的交融中，邂逅一段跨越千年的中世纪城堡之约，爱上这座兼具军事之威、人文之韵与自然之美的莱茵河瑰宝。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在历史与自然的交融中，邂逅一段跨越千年的中世纪城堡之约。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}