import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '费尔莫古城 Fermo Historic Center｜漫步在时光静止的中世纪山城 - 最佳欧洲景点',
  description: '嘿，如果你问我费尔莫古城是什么感觉，我会说它像一个被时光遗忘的、优雅的梦境。车子沿着盘山路向上，当你在人民广场（Piazza del Popolo）下车的那一刻，仿佛瞬间穿越。脚下是光滑的石灰华石板路，四周是蜂蜜色的中世纪和文艺复兴建筑，拱廊下飘着咖啡香。这里没有汹涌的人潮，安静得能听见自己的脚步声...',
}

export default function FermoHistoricCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '费尔莫古城', href: '/attractions/fermo-historic-center' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">费尔莫古城・Fermo Historic Center・意大利・费尔莫</h1>
          <p className="text-lg text-gray-600 mb-6">
            嘿，如果你问我费尔莫古城是什么感觉，我会说它像一个被时光遗忘的、优雅的梦境。车子沿着盘山路向上，当你在人民广场（Piazza del Popolo）下车的那一刻，仿佛瞬间穿越。脚下是光滑的石灰华石板路，四周是蜂蜜色的中世纪和文艺复兴建筑，拱廊下飘着咖啡香。这里没有汹涌的人潮，安静得能听见自己的脚步声和远处教堂的钟声。最神奇的是，你随时可能拐进一条陡峭的石阶小巷（他们叫“rue”），两边是紧闭的古老木门和窗台上的天竺葵，巷子尽头豁然开朗，眼前是绵延到亚得里亚海的无限田园风光，那一刻的震撼，难以言表。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">嘿，如果你问我费尔莫古城是什么感觉，我会说它像一个被时光遗忘的、优雅的梦境。车子沿着盘山路向上，当你在人民广场（Piazza del Popolo）下车的那一刻，仿佛瞬间穿越。脚下是光滑的石灰华石板路，四周是蜂蜜色的中世纪和文艺复兴建筑，拱廊下飘着咖啡香。这里没有汹涌的人潮，安静得能听见自己的脚步声和远处教堂的钟声。最神奇的是，你随时可能拐进一条陡峭的石阶小巷（他们叫“rue”），两边是紧闭的古老木门和窗台上的天竺葵，巷子尽头豁然开朗，眼前是绵延到亚得里亚海的无限田园风光，那一刻的震撼，难以言表。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="费尔莫古城" />
                <InfoRow label="英文名称" value="Fermo Historic Center" />
                <InfoRow label="正式名称" value="Fermo Historic Center" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="费尔莫" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城公共区域全天开放。主要室内景点（如大教堂、博物馆）开放时间通常为周二至周日 10:00-13:00，15:30-19:30（夏季可能延长），周一闭馆。" />
              <InfoRow label="门票价格" value="进入古城免费。参观个别博物馆或教堂内部需购票，联票约5-10欧元。" />
              <InfoRow label="地址" value="Piazza del Popolo, 1, 63900 Fermo FM, Italy" />
              <InfoRow label="交通方式" value="从最近的安科纳机场（AOI）出发，驾车约1小时可达。从最近的火车站费尔莫站（Stazione di Fermo）出发，步行上山约20-25分钟即可抵达古城中心的人民广场。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">费尔莫的故事可深了。早在公元前264年，罗马人就在这里建立了重要的殖民地“Firmum Picenum”，你在地下看到的那些巨大的罗马蓄水池就是那个时代的工程奇迹，它们为整座城市供水，至今保存完好，走进去那种阴凉和宏伟感，让人对古罗马人的智慧肃然起敬。中世纪是它的黄金时期，作为马尔凯地区的重镇，留下了我们今天看到的核心风貌。13世纪修建的人民广场和市政厅（Palazzo dei Priori）就是权力的象征，广场上的红砖拱廊特别有味道。后来它经历了教皇国的统治，文艺复兴和巴洛克风潮也为它增添了许多精美的教堂和宫殿立面，比如圣多明我教堂。漫步城中，你能清晰地看到这些历史层叠的痕迹，就像阅读一本立体的历史书，每一页都触手可及。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从古城的心脏——人民广场开始，先感受主广场的宏伟，然后探索周边街道和主要室内景点，最后沿着城墙或高处的小路漫步，欣赏全景。全程步行，慢慢逛下来大约需要3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>古城小路像迷宫，但迷路也是乐趣的一部分。务必穿一双绝对舒适的鞋子，因为上下坡很多。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  起点人民广场，欣赏拱廊与市政厅钟楼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观市政厅内的市立美术馆与地图厅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  步行至费尔莫大教堂，看其罗马式立面与地下考古区。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  探访令人惊叹的古罗马地下蓄水池。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  随意钻进一条陡峭小巷（如Via degli Aceti），感受本地生活气息。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  终点可设在某处城墙观景台，俯瞰马尔凯田园风光。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  人民广场拱廊下</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，利用拱廊的纵深感拍摄，光线柔和，人物与建筑结合很有故事感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  从大教堂前平台眺望</h4>
                  <p className="text-sm text-gray-700">下午顺光时，拍摄红瓦屋顶、教堂钟楼与远方田野组成的经典托斯卡纳（风格）全景。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  某条石阶小巷的尽头</h4>
                  <p className="text-sm text-gray-700">日落时分，以古老的石阶和墙壁为前景，框住远处开阔的风景，形成强烈对比。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  罗马蓄水池内部</h4>
                  <p className="text-sm text-gray-700">借助室内灯光，拍摄宏伟的拱顶和柱廊，营造神秘而古老的气氛。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，避免对着住户的窗户直接拍摄。室内景点通常允许拍照但禁用闪光灯。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  古城内精品酒店</h4>
                  <p className="text-sm text-blue-800">入住经过修复的历史宫殿，体验真正的古韵，价格中高。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  古城边缘的B&B</h4>
                  <p className="text-sm text-green-800">性价比高，通常由家族经营，能获得本地建议，步行几分钟进城。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  山下现代城区酒店</h4>
                  <p className="text-sm text-yellow-800">价格更实惠，设施新，需驾车或乘坐公共交通上山。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  周边农庄住宿</h4>
                  <p className="text-sm text-purple-800">适合自驾者，体验田园生活，清晨在橄榄树间远眺山巅古城。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">如果追求沉浸式体验，强烈推荐住在古城内，夜晚和清晨的宁静是独一无二的。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">费尔莫不是那种清单上必打卡的喧嚣名胜，它是一位需要你静静聆听的叙述者。在这里，旅行的节奏不由自主地慢下来。你会记得石板路的冰凉触感，某个转角突如其来的海景，广场上喝着咖啡看着报纸的老人。它美得不张扬，却有种让人心安的力量。如果你厌倦了拥挤，想寻找一个真实、古老而温柔的意大利，那么费尔莫就在这座小山丘上，静静地等着你。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
