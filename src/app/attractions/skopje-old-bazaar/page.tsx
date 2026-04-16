import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯科普里老城 Skopje Old Bazaar｜漫步奥斯曼风情露天博物馆 - 最佳欧洲景点',
  description: '一脚踏进斯科普里老城，时间仿佛瞬间倒流了好几百年。这里完全没有新城那边那些巨大、崭新的新古典主义雕像和建筑带来的那种“舞台感”，取而代之的是一种活生生的、带着烟火气的古老。狭窄的鹅卵石街道像迷宫一样蜿蜒，两旁是奥斯曼帝国时期留下的低矮店铺，卖铜器的、做传统鞋的、调香料的……空气里混合着咖啡香、烤肉味...',
}

export default function SkopjeOldBazaarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯科普里老城', href: '/attractions/skopje-old-bazaar' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">斯科普里老城</h1>
          <p className="text-xl text-gray-600 mb-4">Skopje Old Bazaar</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">北马其顿</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">斯科普里</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">一脚踏进斯科普里老城，时间仿佛瞬间倒流了好几百年。这里完全没有新城那边那些巨大、崭新的新古典主义雕像和建筑带来的那种“舞台感”，取而代之的是一种活生生的、带着烟火气的古老。狭窄的鹅卵石街道像迷宫一样蜿蜒，两旁是奥斯曼帝国时期留下的低矮店铺，卖铜器的、做传统鞋的、调香料的……空气里混合着咖啡香、烤肉味和淡淡的金属敲打声。我最喜欢坐在某个老茶馆的露台上，看着石桥和远处的城堡山，喝一杯浓郁的马其顿咖啡，感觉整个世界都慢了下来。这里不是那种被精心修复的“样板”，而是一个仍然在呼吸、在生活的古老社区，每一块石头都藏着故事。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城露天区域24小时可进入，但建议在白天商店营业时（通常为9:00-21:00）游览，体验最佳。周五部分店铺可能在午间祈祷时段短暂休息。内部如穆斯塔法帕夏清真寺、国家美术馆（原土耳其浴室）等景点有单独开放时间和门票（通常1-3欧元），学生和儿童常有优惠。注意穿着得体，进入宗教场所需遮盖肩膀和膝盖。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">斯科普里老城的故事，简直就是巴尔干半岛历史的缩影。它的雏形可以追溯到罗马甚至更早的时期，但今天我们看到的模样，主要定型于奥斯曼土耳其帝国统治的五个多世纪里（约1392年起）。那时候，这里叫做“Čaršija”，是整座城市商业、手工业和社交生活的绝对中心。想象一下，来自不同民族和信仰的商人、工匠、学者在这里交汇，建起了无数的清真寺、教堂、商队旅馆和公共浴室，形成了一个繁荣的东方集市。不过，老城也命运多舛，特别是1963年那场毁灭性的斯科普里大地震，几乎把这里夷为平地。走在街上，你还能看到一些地震后重建的痕迹，但令人感动的是，当地人尽可能地按照原样修复了它，保留了那份独特的灵魂。冷战时期，这里一度有些没落，但独立后又重新焕发生机。如今，它不仅是旅游胜地，更是马其顿传统文化和身份认同的守护者。触摸着那些被岁月磨得光滑的石头墙壁，你能感觉到一种坚韧的生命力，仿佛在说：无论经历多少风雨，生活总会继续，文化总能传承。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从标志性的石桥（Stone Bridge）进入老城，以此为起点进行2-3小时的漫步探索。路线大致呈环形，穿过主街和蜿蜒小巷，参观主要历史建筑和集市，最后可以回到石桥或前往城堡山脚下。无需严格遵循路线，迷路也是乐趣的一部分。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从石桥进入，感受连接新城与旧城的历史通道。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  沿主街（Bit Pazar附近）漫步，体验集市的热闹氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  参观穆斯塔法帕夏清真寺，欣赏奥斯曼建筑精华。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  探访古老的商队旅馆（Kapan Han），想象昔年商旅云集。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  在国家美术馆（原达乌特帕夏浴室）感受土耳其浴场建筑之美。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  钻进小巷，寻找传统手工作坊和古朴的咖啡馆。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">穿一双舒适的平底鞋非常重要，因为鹅卵石路面不平。手机地图在这里的小巷中可能不太灵光，不如随心所欲地探索。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **石桥与老城入口**：清晨或黄昏，站在石桥靠近新城一端，将古老的桥拱与后方老城的屋顶、清真寺尖塔一同纳入镜头，层次感极佳。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **穆斯塔法帕夏清真寺庭院**：上午阳光柔和时，拍摄清真寺宏伟的圆顶和细长的宣礼塔，以庭院中的树木或拱门做前景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **商队旅馆（Kapan Han）中庭**：正午时分阳光直射中庭时，捕捉二层木制回廊的光影交错和对称结构，充满几何美感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **老城小巷深处**：下午，选择一条挂有传统招牌、地面反光的鹅卵石小巷，拍摄纵深感和生活气息，偶尔入镜的当地人是点睛之笔。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">拍摄当地人或店主前，最好先微笑示意并获得同意，这是基本的尊重。集市区域人多手杂，注意保管好相机设备。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **精品酒店（老城内）**：选择由奥斯曼时期老宅改建的精品酒店，如“Hotel Arka”，沉浸式体验历史氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **舒适型酒店（老城边缘）**：住在石桥附近的新城区酒店，如“Hotel de KOKA”，步行即可到达老城，兼顾便利与现代舒适。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **经济型旅馆/公寓**：老城周边有许多价格实惠的旅馆和出租公寓，适合预算有限的背包客。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **特色民宿**：通过预订平台寻找老城内的传统风格民宿，与当地房东交流，获取地道游玩建议。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">住在老城内夜晚非常安静，但部分老建筑隔音可能稍差。如果喜欢夜生活热闹一点，可以选择住在靠近新城区一侧。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">斯科普里老城就像一个温和的长者，不张扬，却充满智慧。它没有试图去迎合谁的期待，只是静静地在那里，保持着几个世纪以来的节奏和味道。在这里，你能找到最真实的巴尔干风情，感受到历史层叠的温度。如果你厌倦了那些过于精致的欧洲古镇，那么这里粗粝而真诚的烟火气，一定会让你印象深刻。这不仅仅是一个景点，更是一次穿越时光的对话。</p>
            </Section>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
              </p>
              <p className="text-xs text-gray-500 text-center mt-2">
                本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
              </p>
              <p className="text-xs text-gray-500 text-center">
                管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">实用信息</h3>
              <div className="space-y-4">
                <InfoRow icon="🕒" label="开放时间" value="露天区域全天开放，各商店、咖啡馆营业时间不一，通常为上午9点至晚上9点。" />
                <InfoRow icon="🎫" label="门票" value="免费进入老城区域。内部个别博物馆或历史建筑可能收取小额门票，约1-3欧元。" />
                <InfoRow icon="📍" label="地址" value="Čaršija, 1000 Skopje, North Macedonia" />
                <InfoRow icon="🚌" label="交通" value="从斯科普里国际机场（SKP）出发，乘坐出租车约20-25分钟即可抵达老城边缘，车费约10-15欧元。从斯科普里中央火车站步行至老城约需15-20分钟。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
