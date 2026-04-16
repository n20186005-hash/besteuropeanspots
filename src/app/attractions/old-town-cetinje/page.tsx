import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '采蒂涅老城 Old Town Cetinje｜黑山历史之都，漫步在昔日王宫与使馆之间 - 最佳欧洲景点',
  description: '想象一下，你走进了一座被时间按下了暂停键的“露天博物馆”。这里就是采蒂涅老城，黑山的精神与文化心脏。街道宽敞宁静，两旁是低矮的、带着岁月痕迹的建筑，很多都曾是外国使馆，如今挂着小小的铭牌，诉说着过往。空气里有一种混合了山间清冷与历史尘埃的独特气味。最让我着迷的是那种反差感——这里没有大城市的喧嚣，却...',
}

export default function OldTownCetinjePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '采蒂涅老城', href: '/attractions/old-town-cetinje' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">采蒂涅老城</h1>
          <p className="text-xl text-gray-600 mb-4">Old Town Cetinje</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">黑山</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">采蒂涅</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你走进了一座被时间按下了暂停键的“露天博物馆”。这里就是采蒂涅老城，黑山的精神与文化心脏。街道宽敞宁静，两旁是低矮的、带着岁月痕迹的建筑，很多都曾是外国使馆，如今挂着小小的铭牌，诉说着过往。空气里有一种混合了山间清冷与历史尘埃的独特气味。最让我着迷的是那种反差感——这里没有大城市的喧嚣，却曾是一个王国的首都。你可以慢悠悠地晃过曾经的法国使馆、俄国使馆，想象百年前外交官们在此穿梭的情景，然后一转弯，宏伟的蓝宫（国家博物馆）就静静矗立在眼前，提醒你它昔日的荣耀。在这里，散步本身就是最好的游览方式。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">*   **开放时间差异**：夏季是游览旺季，所有主要景点通常开放。冬季（尤其12月至2月）部分小型博物馆或宫殿可能只在工作日开放或需提前预约，出行前务必查询官网。</p>
              <p className="text-gray-700 leading-relaxed mb-4">*   **门票优惠**：学生、儿童及团体通常可享受门票折扣，建议携带有效证件。</p>
              <p className="text-gray-700 leading-relaxed mb-4">*   **特别提示**：老城地面多为石板路，建议穿着舒适的步行鞋。许多建筑外观比内部更有看头，如果时间有限，外部漫步结合参观1-2个核心景点（如蓝宫、修道院）即可。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">采蒂涅的故事，简直就是黑山这个国家坚韧精神的缩影。它的历史可以追溯到15世纪，当时黑山的统治者 Ivan Crnojević 为了躲避奥斯曼帝国的威胁，将首都从扎布利亚克迁到了洛夫琴山脚下的这片山谷，并于1482年建立了采蒂涅修道院，这里逐渐成为黑山政教合一的中心。在接下来的几个世纪里，尽管奥斯曼帝国大军压境，黑山人在此坚守，采蒂涅成了他们不屈的象征。到了19世纪，在彼得二世和尼古拉一世国王的统治下，采蒂涅迎来了黄金时代，被正式确立为黑山王国的首都。欧洲列强纷纷在此设立使馆，那些我们今天看到的精致建筑就是那段历史的见证，小小的采蒂涅一度在国际舞台上扮演着重要角色。直到1918年黑山并入塞尔维亚-克罗地亚-斯洛文尼亚王国（后来的南斯拉夫），首都地位才被取代。走在街上，你能感觉到历史不是教科书上的文字，而是融进了每一块石头、每一栋建筑沉默的呼吸里。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从老城东端的“采蒂涅修道院”开始，这里是精神起点。然后向西沿Njegoševa主干道漫步，欣赏沿途的旧使馆建筑，最终抵达核心的“国王尼古拉一世广场”，参观蓝宫和国家博物馆。全程步行缓慢游览，包含内部参观，约需3-4小时。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  探访**采蒂涅修道院**，感受黑山东正教的古老灵魂。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  漫步**Njegoševa大街**，辨认两旁昔日的各国使馆建筑。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  参观**比尔亚尔达塔**，这座奥斯曼时期的碉堡是历史的见证。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  抵达**国王尼古拉一世广场**，在国王雕像前驻足。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  进入**蓝宫（国家博物馆）**，了解黑山王室的历史与生活。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  若有时间，可前往**洛夫琴山国家公园**的观景台，俯瞰老城全景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城不大，完全不需要地图，随心所欲地探索小巷也会有惊喜。记得抬头看建筑上的徽章和铭牌。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **国王尼古拉一世广场中央**：最佳拍摄时间为下午，阳光柔和。以广场上的国王骑马雕像为前景，以宏伟的蓝宫建筑为背景，构图庄重，能拍出首都的气派。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **Njegoševa大街中段**：清晨或傍晚，光线斜射。站在街道中央，拍摄两侧色彩柔和、风格各异的使馆建筑形成的透视长廊，画面宁静而有纵深感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **采蒂涅修道院入口处**：上午光线较好。拍摄修道院古朴的石砌大门和钟楼，可以捕捉到当地人或修士出入的瞬间，充满生活与信仰交融的氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **前往洛夫琴山路上的观景台**：日落时分。从此处远眺，整个采蒂涅老城安静地卧在山谷中，背后是连绵群山，景色辽阔，是拍摄全景的绝佳位置。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">拍摄使馆建筑时，注意铭牌细节，它们是很棒的故事元素。尊重修道院内的宗教礼仪，内部拍摄通常被禁止。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **经济型**：老城内或周边有少量家庭旅馆和民宿，价格亲民，能体验本地生活。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **中档型**：选择采蒂涅镇上的小型精品酒店或宾馆，设施完善，步行即可到达老城。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **特色体验**：考虑入住由历史建筑改造的客栈，沉浸感更强。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **便捷型**：如果不介意短途车程，可以住在几十公里外的海滨城市布德瓦或科托尔，游玩选择更多，白天再来采蒂涅一日游。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">采蒂涅夜间非常安静，娱乐活动少，适合喜欢清静和历史氛围的旅行者。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">采蒂涅老城像一本安静打开的历史书，不需要你匆匆翻阅。它的魅力不在于令人惊叹的单一景观，而在于整个小镇弥漫的那种深沉、骄傲又略带忧伤的气质。当你触摸着粗糙的石墙，走过空旷的广场，你会真切地感受到一个小国曾经波澜壮阔的过去。如果你厌倦了海岸线的喧闹，想寻找黑山的灵魂，那么请一定来这里，花一个下午，与历史散个步。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="古城区域全天开放。内部各博物馆、宫殿等独立景点开放时间不一，通常为夏季（4月-10月）9:00-17:00，冬季（11月-3月）时间缩短或部分关闭。" />
                <InfoRow icon="🎫" label="门票" value="进入古城免费。参观内部景点需单独购票，如采蒂涅修道院约2-3欧元，国家博物馆（蓝宫）约5欧元。" />
                <InfoRow icon="📍" label="地址" value="Stari Grad Cetinje, 81250 Cetinje, Montenegro" />
                <InfoRow icon="🚌" label="交通" value="从黑山首都波德戈里察机场出发，驾车或乘坐出租车/巴士沿E65/E80公路向西北行驶，约1小时车程即可抵达采蒂涅。从科托尔或布德瓦等沿海城市驾车前来，需翻越洛夫琴山，风景壮丽，车程约1.5-2小时。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
