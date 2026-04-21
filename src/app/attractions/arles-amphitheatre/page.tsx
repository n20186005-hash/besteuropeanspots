import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔勒古罗马竞技场・Arles Amphitheatre・法国・阿尔勒 | 最佳欧洲景点',
  description: '探索阿尔勒古罗马竞技场，法国保存最完好的古罗马圆形剧场之一，被联合国教科文组织列为世界文化遗产，可容纳2.5万名观众，承载着近2000年的历史积淀。',
}

export default function ArlesAmphitheatrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: 'Arles', href: '/destinations/france' },
            { label: '阿尔勒古罗马竞技场', href: '/attractions/arles-amphitheatre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿尔勒古罗马竞技场・Arles Amphitheatre・法国・阿尔勒</h1>
          <p className="text-lg text-gray-600 mb-6">
            阿尔勒古罗马竞技场始建于公元80-90年，1981年被列入世界文化遗产，是法国保存最完好的古罗马圆形剧场之一。竞技场为石砌结构，可容纳2.5万名观众，融合古罗马军事建筑与公共娱乐建筑风格，曾用于角斗、竞技与公共庆典，承载着近2000年的历史积淀，是罗马帝国统治高卢地区的重要见证，也是南法古罗马文明的活化石。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
            <p className="text-gray-700 leading-relaxed mb-4">
              阿尔勒古罗马竞技场始建于公元80-90年，1981年被列入世界文化遗产，是法国保存最完好的古罗马圆形剧场之一。竞技场为石砌结构，可容纳2.5万名观众，融合古罗马军事建筑与公共娱乐建筑风格，曾用于角斗、竞技与公共庆典，承载着近2000年的历史积淀，是罗马帝国统治高卢地区的重要见证，也是南法古罗马文明的活化石。
            </p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="阿尔勒古罗马竞技场" />
                <InfoRow label="英文名称" value="Arles Amphitheatre" />
                <InfoRow label="别称" value="阿尔勒圆形剧场、罗马角斗场遗迹" />
                <InfoRow label="国家" value="法国（France）" />
                <InfoRow label="城市" value="阿尔勒（Arles）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="1981年被列入世界文化遗产" />
                <InfoRow label="建筑特色" value="可容纳2.5万名观众的古罗马圆形剧场" />
                <InfoRow label="建筑风格" value="融合古罗马军事建筑与公共娱乐建筑风格" />
                <InfoRow label="文化价值" value="法国保存最完整的古罗马竞技场之一" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="整体开放时间分季节调整：旺季9:00-19:00，淡季9:30-17:30" />
              <InfoRow label="门票价格" value="成人10欧元/人，优惠票8欧元/人，12岁以下儿童免费" />
              <InfoRow label="地址" value="1 Rond-Point des Arenes, 13200 Arles, France" />
              <InfoRow label="交通方式" value="从阿尔勒火车站步行约15分钟；市内巴士Line 1、Line 2直达" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                阿尔勒古罗马竞技场的历史跨越近2000年，是罗马帝国在高卢地区（今法国南部）留下的最具代表性的遗迹之一，其发展历程与罗马帝国的兴衰、阿尔勒地区的历史变迁紧密相连，从古罗马时期的公共娱乐中心，到中世纪的防御街区，再到如今的世界文化遗产，始终是南法历史文化的核心载体。
              </p>
              <p>
                公元80-90年，罗马帝国统治高卢地区期间，为彰显帝国权威、丰富当地民众的娱乐生活，下令在阿尔勒修建圆形竞技场，历时约10年建成，成为当时高卢地区规模最大、设施最完善的公共娱乐建筑之一。建成后的竞技场为典型的古罗马圆形剧场结构，采用当地出产的石灰岩砌筑，周长136米，直径46米，高21米，分为上下两层拱门，共60个拱门，可容纳2.5万名观众，规模仅次于罗马斗兽场，是古罗马建筑工程的杰出代表。
              </p>
              <p>
                古罗马时期，阿尔勒古罗马竞技场是当地最繁华的公共娱乐场所，主要用于举办角斗比赛、野兽搏斗、战车竞赛等活动，同时也会举办公共庆典、宗教仪式等，是罗马帝国文化与娱乐的核心阵地。当时，角斗比赛是最受欢迎的活动，奴隶、战俘或罪犯被训练为角斗士，在竞技场中搏斗，供贵族与平民观赏，这种残酷的娱乐方式持续了数百年，直到罗马帝国衰落才逐渐消失。这一时期，阿尔勒作为罗马帝国在高卢地区的重要城市，凭借竞技场的影响力，成为南法的文化、娱乐与商业中心，周边逐渐发展出商铺、市集与居民区，呈现出繁华的都市景象。
              </p>
              <p>
                中世纪初期，罗马帝国衰落，阿尔勒地区陷入战乱，日耳曼部落入侵，竞技场的公共娱乐功能逐渐丧失，被改造为防御性街区。当时的人们在竞技场内部修建了212栋房屋、2座教堂，加固了城墙与拱门，将其打造为一座易守难攻的堡垒，用于抵御外敌入侵，竞技场的原貌遭到一定程度的破坏，部分拱门被封堵，座位被拆除，成为中世纪阿尔勒地区的防御核心之一。这种居住与防御结合的状态持续了近千年，直到19世纪才被改变。
              </p>
              <p>
                1826-1830年，法国政府开始重视对历史遗迹的保护，时任阿尔勒市长推动了竞技场的清理与修复工程，拆除了内部的民居与教堂，清理了被封堵的拱门，按照古罗马原貌修复了破损的城墙、座位与通道，还原了竞技场的整体格局。1840年，阿尔勒古罗马竞技场被列为法国历史古迹，1981年，与阿尔勒其他古罗马遗迹一起被联合国教科文组织列入世界文化遗产名录，成为全球瞩目的古罗马遗迹，进一步提升了其国际知名度。
              </p>
              <p>
                如今，阿尔勒古罗马竞技场依然保留着古罗马时期的核心风貌，每年会举办斗牛比赛、音乐会、戏剧表演等活动，延续着其公共娱乐的功能，同时作为重要的旅游景点，吸引着世界各地的游客前来探访，感受罗马帝国的辉煌与南法的历史底蕴，成为连接古罗马文明与现代社会的重要纽带。
              </p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">精华路线（1.5-2小时，适合时间紧张的游客）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  从游客服务中心出发 → 竞技场入口主拱门 → 底层通道（60个拱门） → 中层座位（平民观看区） → 顶层看台（贵族观看区） → 地下牢笼（角斗士关押区） → 返回入口
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>全程涵盖竞技场核心看点，节奏紧凑，可欣赏古罗马建筑的雄浑气势，感受角斗场的历史氛围
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-3">深度路线（3-4小时，适合喜欢细致游览、热爱历史与建筑的游客）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  在精华路线基础上 → 付费导览服务 → 阿尔勒老城区游览 → 普罗旺斯特色美食体验 → 竞技场建筑细节观察 → 阿尔勒古罗马博物馆参观 → 傍晚竞技场剪影欣赏
                </p>
                <div className="text-sm text-green-800 bg-green-100 p-3 rounded">
                  <strong>建议：</strong>全方位感受阿尔勒的古罗马文化与南法市井风情，体验"美食+历史"的完美搭配
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">主拱门</h4>
                  <p className="text-sm text-gray-700 mb-2">竞技场标志性景观，石砌拱门高大雄伟，留存着古罗马时期的雕刻痕迹，可拍摄竞技场全景。</p>
                  <div className="text-xs text-gray-500">🏛️ 主入口 | 📸 全景拍摄</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">底层通道</h4>
                  <p className="text-sm text-gray-700 mb-2">共有60个拱门，分为南北两个出入口，通道墙壁上留存着古罗马时期的涂鸦与刻痕。</p>
                  <div className="text-xs text-gray-500">🚪 60个拱门 | ✍️ 古罗马涂鸦</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中层座位</h4>
                  <p className="text-sm text-gray-700 mb-2">当年平民观众的观看区域，座位由石灰岩砌筑，排列整齐，可俯瞰中央表演区。</p>
                  <div className="text-xs text-gray-500">🪑 平民座位 | 👥 观众区域</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">顶层看台</h4>
                  <p className="text-sm text-gray-700 mb-2">当年贵族与官员的观看区域，视野开阔，可俯瞰整个阿尔勒老城区与罗讷河畔风光。</p>
                  <div className="text-xs text-gray-500">🏰 贵族区域 | 🌅 俯瞰全景</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">地下牢笼</h4>
                  <p className="text-sm text-gray-700 mb-2">当年关押角斗士与野兽的地方，通道狭窄，墙壁厚重，可直观感受角斗士的悲惨处境。</p>
                  <div className="text-xs text-gray-500">⛓️ 地下牢笼 | 🦁 野兽关押</div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">阿尔勒老城区</h4>
                  <p className="text-sm text-gray-700 mb-2">环绕竞技场，留存着古罗马时期的石板街巷、石制民居与传统商铺，充满南法市井气息。</p>
                  <div className="text-xs text-gray-500">🏘️ 石板街巷 | 🛍️ 传统商铺</div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 主拱门全景</h4>
                  <p className="text-sm text-gray-700">以主拱门为核心，完整展现竞技场的圆形轮廓、双层拱门与石砌外墙，凸显古罗马建筑的雄浑气势。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 顶层看台俯瞰</h4>
                  <p className="text-sm text-gray-700">站在顶层看台顶端，可俯瞰整个竞技场的内部结构、中央表演区与底层通道，搭配远处的阿尔勒老城区与罗讷河畔。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 底层通道侧身</h4>
                  <p className="text-sm text-gray-700">沿底层通道行走，选择拱门与墙壁的侧身角度，捕捉石砌墙壁的斑驳纹理、拱门的雕刻细节与墙壁上的古罗马涂鸦。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 中央表演区仰视</h4>
                  <p className="text-sm text-gray-700">站在中央表演区，仰视竞技场的双层拱门与顶层看台，拱门层层叠叠，高耸入云，凸显古罗马建筑的恢弘与壮观。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 竞技场周边石板街巷</h4>
                  <p className="text-sm text-gray-700">竞技场周边的狭窄石板路、两侧古朴的石制民居、挂着鲜花的窗台与传统商铺的招牌，都充满了南法小镇的浪漫风情。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">6. 罗讷河畔远眺</h4>
                  <p className="text-sm text-gray-700">站在罗讷河畔，远眺阿尔勒古罗马竞技场，竞技场的圆形轮廓与河畔的绿植、流水相互映衬，展现出"千年遗迹伴流水"的独特景观。</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 竞技场建筑以石砌的米黄色为主，建议穿搭素色、简约风格或法式复古风格衣物，与建筑色调形成和谐搭配</li>
                <li>• 拍摄时禁止使用闪光灯，禁止攀爬城墙、触摸文物，避免损坏遗迹</li>
                <li>• 上午与傍晚的光线最适合拍摄，上午凸显建筑细节与雄浑气势，傍晚凸显浪漫与沧桑</li>
                <li>• 拍摄全景照时，可使用广角视角，完整展现竞技场与周边风光；拍摄细节照时，可近距离聚焦拱门雕刻、墙壁纹理、座位磨损痕迹等</li>
                <li>• 夏季夜间竞技场有灯光秀，灯光勾勒出竞技场的轮廓，可拍摄夜景，氛围感十足</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 附近景点">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿尔勒古罗马剧场（Théâtre Antique d'Arles）</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约150米，步行3分钟可达，是与竞技场同期修建的古罗马遗迹，为半圆形剧场，可容纳1万名观众。</p>
                <div className="text-xs text-gray-500">🚶 步行3分钟 | 🎭 半圆形剧场</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">梵高咖啡馆（Café Van Gogh）</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约500米，步行10分钟可达，是梵高著名画作《夜间的露天咖啡馆》的原型，保留着19世纪的风貌。</p>
                <div className="text-xs text-gray-500">🚶 步行10分钟 | 🎨 梵高画作原型</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿尔勒古罗马博物馆（Musée de l'Arles Antique）</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约800米，步行15分钟可达，馆内收藏了大量古罗马时期的文物，包括角斗士的武器、盔甲、生活用具等。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🏺 古罗马文物</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">罗讷河畔步道</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约1公里，步行15分钟可达，蜿蜒的罗讷河穿流而过，河畔步道绿植繁茂，景色优美。</p>
                <div className="text-xs text-gray-500">🚶 步行15分钟 | 🌊 河畔美景</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">阿尔勒老城区</h4>
                <p className="text-sm text-gray-700 mb-2">环绕着竞技场，留存着古罗马时期的石板街巷、石制民居、传统商铺与市集，充满南法市井烟火气。</p>
                <div className="text-xs text-gray-500">🏘️ 石板街巷 | 🛍️ 传统市集</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">圣托菲姆教堂（Église Saint-Trophime）</h4>
                <p className="text-sm text-gray-700 mb-2">距离竞技场约700米，步行12分钟可达，是一座融合罗马式与哥特式建筑风格的教堂，教堂正面的雕刻精美。</p>
                <div className="text-xs text-gray-500">🚶 步行12分钟 | ⛪ 罗马式与哥特式融合</div>
              </div>
            </div>
          </Section>

          <Section title="7. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">竞技场周边区域</h4>
                  <p className="text-sm text-blue-800">距离竞技场步行可达，周边有特色餐厅、咖啡馆与纪念品商店，既能便捷游览竞技场，又能沉浸式感受古罗马遗迹的氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">阿尔勒市中心</h4>
                  <p className="text-sm text-green-800">距离竞技场约500米，交通便捷，周边餐饮、购物设施齐全，适合需要前往周边景点或乘坐公共交通的游客。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">罗讷河畔</h4>
                  <p className="text-sm text-yellow-800">距离竞技场约1公里，可欣赏河畔风光，环境安静，适合想要放松身心的游客。</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">高端精品酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于竞技场周边或老城区，融合古罗马建筑元素与现代设施，部分由古老石屋改造而成，自带观景露台、特色餐厅与SPA服务，价格约80-150欧元/晚。</p>
                  <div className="text-xs text-gray-500">🏛️ 古罗马元素 | 🍷 竞技场联票优惠</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">中端酒店</h4>
                  <p className="text-sm text-gray-700 mb-2">多位于市中心或竞技场周边，步行可达核心景点，房间干净整洁，设施齐全，部分提供早餐与免费WiFi，价格约40-70欧元/晚。</p>
                  <div className="text-xs text-gray-500">⭐ 性价比高 | 🏛️ 竞技场联票优惠</div>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">经济型民宿与青旅</h4>
                  <p className="text-sm text-gray-700 mb-2">民宿多为家庭经营，风格温馨，部分融入古罗马元素；青年旅社适合独自旅行或预算有限游客，价格约15-35欧元/晚。</p>
                  <div className="text-xs text-gray-500">🏡 家庭经营 | 🎒 背包客友好</div>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-2">预订建议与注意事项</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-red-800">
                  <div>
                    <p className="mb-2"><strong>旺季预订：</strong>4-10月旅游旺季，7-8月夏季假期游客较多，建议提前1-2个月预订，避免无房或价格上涨</p>
                    <p className="mb-2"><strong>淡季优惠：</strong>11月至次年3月游客较少，可提前1-2周预订，价格相对实惠，部分酒店推出住宿+竞技场导览优惠套餐</p>
                    <p><strong>预订咨询：</strong>预订高端酒店时可提前咨询是否包含免费早餐或竞技场联票优惠，重点关注交通便利性、卫生情况与服务质量</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>必备用品：</strong>法国住宿普遍不提供一次性洗漱用品，需自带牙刷、牙膏、拖鞋等用品</p>
                    <p className="mb-2"><strong>入住时间：</strong>通常为14:00以后入住，11:00以前退房，如需提前入住或延迟退房需提前沟通</p>
                    <p><strong>特殊注意：</strong>老城区街巷狭窄且多石板路，建议穿舒适平底鞋；部分民宿不提供电梯，大件行李需提前咨询</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="8. 总结与感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                阿尔勒古罗马竞技场，这座矗立在南法大地上的千年遗迹，历经近2000年的风雨洗礼，依然保留着古罗马时期的雄浑风貌与历史底蕴。在这里，你可以触摸石砌拱门的斑驳纹理，感受罗马帝国的辉煌传奇；可以漫步于看台之上，想象当年角斗比赛的热闹场景；可以探访周边的古罗马遗迹与艺术景点，感受南法的人文与艺术魅力；可以远眺罗讷河畔与田园风光，感受自然与人文的完美交融。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                无论是独自旅行、情侣出游还是家庭度假，阿尔勒古罗马竞技场都能给你带来难忘的旅行体验，让你在千年遗韵中，邂逅南法的独特魅力与古罗马文明的璀璨光芒。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium">
                让你在千年古罗马遗迹与南法田园风光的交融中，邂逅一段跨越时空的文明之旅。
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}