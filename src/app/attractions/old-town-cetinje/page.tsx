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

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">采蒂涅老城・Old Town Cetinje・黑山・采蒂涅</h1>
          <p className="text-lg text-gray-600 mb-6">
            想象一下，你走进了一座被时间按下了暂停键的“露天博物馆”。这里就是采蒂涅老城，黑山的精神与文化心脏。街道宽敞宁静，两旁是低矮的、带着岁月痕迹的建筑，很多都曾是外国使馆，如今挂着小小的铭牌，诉说着过往。空气里有一种混合了山间清冷与历史尘埃的独特气味。最让我着迷的是那种反差感——这里没有大城市的喧嚣，却曾是一个王国的首都。你可以慢悠悠地晃过曾经的法国使馆、俄国使馆，想象百年前外交官们在此穿梭的情景，然后一转弯，宏伟的蓝宫（国家博物馆）就静静矗立在眼前，提醒你它昔日的荣耀。在这里，散步本身就是最好的游览方式。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">想象一下，你走进了一座被时间按下了暂停键的“露天博物馆”。这里就是采蒂涅老城，黑山的精神与文化心脏。街道宽敞宁静，两旁是低矮的、带着岁月痕迹的建筑，很多都曾是外国使馆，如今挂着小小的铭牌，诉说着过往。空气里有一种混合了山间清冷与历史尘埃的独特气味。最让我着迷的是那种反差感——这里没有大城市的喧嚣，却曾是一个王国的首都。你可以慢悠悠地晃过曾经的法国使馆、俄国使馆，想象百年前外交官们在此穿梭的情景，然后一转弯，宏伟的蓝宫（国家博物馆）就静静矗立在眼前，提醒你它昔日的荣耀。在这里，散步本身就是最好的游览方式。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="采蒂涅老城" />
                <InfoRow label="英文名称" value="Old Town Cetinje" />
                <InfoRow label="正式名称" value="Old Town Cetinje" />
                <InfoRow label="国家" value="黑山" />
                <InfoRow label="城市" value="采蒂涅" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城区域全天开放。内部各博物馆、宫殿等独立景点开放时间不一，通常为夏季（4月-10月）9:00-17:00，冬季（11月-3月）时间缩短或部分关闭。" />
              <InfoRow label="门票价格" value="进入古城免费。参观内部景点需单独购票，如采蒂涅修道院约2-3欧元，国家博物馆（蓝宫）约5欧元。" />
              <InfoRow label="地址" value="Stari Grad Cetinje, 81250 Cetinje, Montenegro" />
              <InfoRow label="交通方式" value="从黑山首都波德戈里察机场出发，驾车或乘坐出租车/巴士沿E65/E80公路向西北行驶，约1小时车程即可抵达采蒂涅。从科托尔或布德瓦等沿海城市驾车前来，需翻越洛夫琴山，风景壮丽，车程约1.5-2小时。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">采蒂涅的故事，简直就是黑山这个国家坚韧精神的缩影。它的历史可以追溯到15世纪，当时黑山的统治者 Ivan Crnojević 为了躲避奥斯曼帝国的威胁，将首都从扎布利亚克迁到了洛夫琴山脚下的这片山谷，并于1482年建立了采蒂涅修道院，这里逐渐成为黑山政教合一的中心。在接下来的几个世纪里，尽管奥斯曼帝国大军压境，黑山人在此坚守，采蒂涅成了他们不屈的象征。到了19世纪，在彼得二世和尼古拉一世国王的统治下，采蒂涅迎来了黄金时代，被正式确立为黑山王国的首都。欧洲列强纷纷在此设立使馆，那些我们今天看到的精致建筑就是那段历史的见证，小小的采蒂涅一度在国际舞台上扮演着重要角色。直到1918年黑山并入塞尔维亚-克罗地亚-斯洛文尼亚王国（后来的南斯拉夫），首都地位才被取代。走在街上，你能感觉到历史不是教科书上的文字，而是融进了每一块石头、每一栋建筑沉默的呼吸里。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从老城东端的“采蒂涅修道院”开始，这里是精神起点。然后向西沿Njegoševa主干道漫步，欣赏沿途的旧使馆建筑，最终抵达核心的“国王尼古拉一世广场”，参观蓝宫和国家博物馆。全程步行缓慢游览，包含内部参观，约需3-4小时。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城不大，完全不需要地图，随心所欲地探索小巷也会有惊喜。记得抬头看建筑上的徽章和铭牌。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  探访采蒂涅修道院，感受黑山东正教的古老灵魂。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  漫步Njegoševa大街，辨认两旁昔日的各国使馆建筑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  参观比尔亚尔达塔，这座奥斯曼时期的碉堡是历史的见证。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  抵达国王尼古拉一世广场，在国王雕像前驻足。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  进入蓝宫（国家博物馆），了解黑山王室的历史与生活。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  若有时间，可前往洛夫琴山国家公园的观景台，俯瞰老城全景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  国王尼古拉一世广场中央</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为下午，阳光柔和。以广场上的国王骑马雕像为前景，以宏伟的蓝宫建筑为背景，构图庄重，能拍出首都的气派。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  Njegoševa大街中段</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，光线斜射。站在街道中央，拍摄两侧色彩柔和、风格各异的使馆建筑形成的透视长廊，画面宁静而有纵深感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  采蒂涅修道院入口处</h4>
                  <p className="text-sm text-gray-700">上午光线较好。拍摄修道院古朴的石砌大门和钟楼，可以捕捉到当地人或修士出入的瞬间，充满生活与信仰交融的氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  前往洛夫琴山路上的观景台</h4>
                  <p className="text-sm text-gray-700">日落时分。从此处远眺，整个采蒂涅老城安静地卧在山谷中，背后是连绵群山，景色辽阔，是拍摄全景的绝佳位置。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄使馆建筑时，注意铭牌细节，它们是很棒的故事元素。尊重修道院内的宗教礼仪，内部拍摄通常被禁止。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济型</h4>
                  <p className="text-sm text-blue-800">老城内或周边有少量家庭旅馆和民宿，价格亲民，能体验本地生活。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档型</h4>
                  <p className="text-sm text-green-800">选择采蒂涅镇上的小型精品酒店或宾馆，设施完善，步行即可到达老城。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色体验</h4>
                  <p className="text-sm text-yellow-800">考虑入住由历史建筑改造的客栈，沉浸感更强。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  便捷型</h4>
                  <p className="text-sm text-purple-800">如果不介意短途车程，可以住在几十公里外的海滨城市布德瓦或科托尔，游玩选择更多，白天再来采蒂涅一日游。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">采蒂涅夜间非常安静，娱乐活动少，适合喜欢清静和历史氛围的旅行者。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">采蒂涅老城像一本安静打开的历史书，不需要你匆匆翻阅。它的魅力不在于令人惊叹的单一景观，而在于整个小镇弥漫的那种深沉、骄傲又略带忧伤的气质。当你触摸着粗糙的石墙，走过空旷的广场，你会真切地感受到一个小国曾经波澜壮阔的过去。如果你厌倦了海岸线的喧闹，想寻找黑山的灵魂，那么请一定来这里，花一个下午，与历史散个步。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
