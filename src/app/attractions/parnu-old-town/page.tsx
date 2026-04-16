import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '派尔努老城 Pärnu Old Town｜波罗的海的夏日之都，色彩斑斓的宁静古城 - 最佳欧洲景点',
  description: '走进派尔努老城，就像打开了一本褪了色但依然精美的童话书。这里没有汹涌的人潮，只有鹅卵石铺就的安静小巷，两旁是糖果色的木结构房屋，漆成柔和的鹅黄、薄荷绿和淡粉色，在波罗的海的阳光下显得格外温柔。空气中飘着海风咸咸的味道，混合着路边咖啡馆飘出的烘焙香气。老城不大，慢悠悠地晃上一个下午就能逛完，但那种慵懒...',
}

export default function ParnuOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '派尔努老城', href: '/attractions/parnu-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">派尔努老城・Pärnu Old Town・爱沙尼亚・派尔努</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进派尔努老城，就像打开了一本褪了色但依然精美的童话书。这里没有汹涌的人潮，只有鹅卵石铺就的安静小巷，两旁是糖果色的木结构房屋，漆成柔和的鹅黄、薄荷绿和淡粉色，在波罗的海的阳光下显得格外温柔。空气中飘着海风咸咸的味道，混合着路边咖啡馆飘出的烘焙香气。老城不大，慢悠悠地晃上一个下午就能逛完，但那种慵懒、治愈的氛围会让你想坐下来，点杯咖啡，看光影在古老的墙面上移动。这里不愧是爱沙尼亚人最爱的“夏日之都”，连时间都仿佛跟着慢了下来。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进派尔努老城，就像打开了一本褪了色但依然精美的童话书。这里没有汹涌的人潮，只有鹅卵石铺就的安静小巷，两旁是糖果色的木结构房屋，漆成柔和的鹅黄、薄荷绿和淡粉色，在波罗的海的阳光下显得格外温柔。空气中飘着海风咸咸的味道，混合着路边咖啡馆飘出的烘焙香气。老城不大，慢悠悠地晃上一个下午就能逛完，但那种慵懒、治愈的氛围会让你想坐下来，点杯咖啡，看光影在古老的墙面上移动。这里不愧是爱沙尼亚人最爱的“夏日之都”，连时间都仿佛跟着慢了下来。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="派尔努老城" />
                <InfoRow label="英文名称" value="Pärnu Old Town" />
                <InfoRow label="正式名称" value="Pärnu Old Town" />
                <InfoRow label="国家" value="爱沙尼亚" />
                <InfoRow label="城市" value="派尔努" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放；内部各博物馆、教堂等景点开放时间各异，通常为夏季（5-9月）10:00-18:00，冬季时间缩短或关闭。" />
              <InfoRow label="门票价格" value="漫步老城街道免费。进入具体景点如派尔努博物馆、伊丽莎白教堂等需单独购票，成人票约3-6欧元。" />
              <InfoRow label="地址" value="Pärnu Old Town, Pärnu, 80010, Estonia" />
              <InfoRow label="交通方式" value="从塔林机场出发，驾车或乘坐巴士约1.5-2小时可抵达派尔努市中心，老城步行可达。从里加机场出发，驾车约2小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">派尔努的故事始于13世纪，当时条顿骑士团在此建立了要塞，老城的雏形也随之诞生。它很快凭借其优越的港口位置，成为汉萨同盟的重要贸易站，那些储存货物的仓库和商人的宅邸，奠定了老城的格局。到了17-18世纪，瑞典统治时期，派尔努经历了大火与重建，许多我们现在看到的巴洛克风格建筑就在那时出现。19世纪是它的“黄金时代”，沙俄贵族和富商将这里打造成时髦的海滨度假胜地，建起了华丽的别墅和疗养院，派尔努“夏日之都”的美誉从此传开。漫步其中，你能从建筑上读到这些层层叠叠的历史：中世纪城墙的残垣、汉萨风格的陡峭红屋顶、瑞典时期的简洁线条，以及沙俄时代的浪漫装饰。二战的创伤和苏联时期给这里蒙上过灰色，但独立后的爱沙尼亚精心修复了老城，让它重新焕发出生机，就像一位历经沧桑却依然优雅的女士，静静地讲述着波罗的海沿岸的往事。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从地标性的“红塔”开始，以老城广场为中心向外辐射游览，最后漫步到派尔努河边。全程步行约2-3小时，节奏非常悠闲，适合边走边拍边发呆。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城小巧紧凑，无需特意导航，迷路也是乐趣。记得留意建筑立面上精美的新艺术风格雕塑和装饰。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从地标“红塔”开始，看看这座老城墙仅存的防御塔。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  走到老城广场，欣赏周围的彩色商楼和市政厅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观白色的巴洛克风格伊丽莎白教堂。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  随意穿行于Rüütli和Kuninga等主干道，欣赏两侧的新艺术风格建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  走到派尔努河边，看看古老的城墙遗迹和宁静的河景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  探索小巷中的特色小店和咖啡馆，享受悠闲时光。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  老城广场望向伊丽莎白教堂</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，阳光柔和时，以彩色的房屋为前景，拍摄教堂白色的钟楼，画面富有层次感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  Rüütli街道中段</h4>
                  <p className="text-sm text-gray-700">下午时分，阳光斜射，拍摄街道两侧色彩缤纷、装饰华丽的木结构房屋立面，充满童话感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  派尔努河边城墙下</h4>
                  <p className="text-sm text-gray-700">日落时分，以古老的石墙和宁静的河水为背景，拍摄人物剪影或风景，氛围静谧。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  某条无名鹅卵石小巷</h4>
                  <p className="text-sm text-gray-700">利用巷道的纵深感，聚焦于一扇彩色的门或一盏复古街灯，捕捉老城的细节之美。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 夏季日照时间长，“黄金时刻”持续较久，非常适合拍照。冬季雪后，彩色的房子覆上白雪，是另一番梦幻景象。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  精品酒店</h4>
                  <p className="text-sm text-blue-800">选择老城广场或Rüütli街上的历史建筑改造的精品酒店，沉浸式体验古城氛围。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  温馨民宿</h4>
                  <p className="text-sm text-green-800">入住老城内的公寓或民宿，像当地人一样生活，自己动手做早餐。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  经济旅馆/青年旅舍</h4>
                  <p className="text-sm text-yellow-800">老城边缘或河对岸有性价比高的选择，步行几分钟即可进入核心区。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  海滨度假酒店</h4>
                  <p className="text-sm text-purple-800">如果想结合海滩度假，可以选择老城附近派尔努海滩旁的酒店，兼顾两者。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季是旺季，建议提前预订。住在老城内虽然价格稍高，但夜晚和清晨独享宁静古城的感觉无与伦比。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">派尔努老城没有令人屏息的宏大景观，它的魅力在于一种细腻的、生活化的美好。在这里，历史不是冰冷陈列的，而是化作了窗台上的鲜花、咖啡馆的香气和当地人从容的微笑。它是一个让你放下攻略、随心所欲漫步的地方，每一次转角都可能遇见一抹意想不到的温柔色彩。如果你厌倦了拥挤的景点，渴望一段宁静而充满质感的时光，这个波罗的海畔的彩色小城，正静静地等着你。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
