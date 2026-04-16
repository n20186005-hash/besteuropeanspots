import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞克什白堡老城 Székesfehérvár Old Town｜漫步匈牙利古都，探寻国王加冕之地 - 最佳欧洲景点',
  description: '走进塞克什白堡老城，就像不小心闯进了一本褪了色的中世纪故事书。这里没有布达佩斯那种扑面而来的华丽喧嚣，反而有种安静的、被时光打磨过的温柔。鹅卵石铺成的小巷弯弯曲曲，两旁是刷成鹅黄、淡粉或薄荷绿的老房子，阳台上摆满了天竺葵。最震撼的是站在主广场（Városház tér）上，看着那座宏伟的巴洛克风格市...',
}

export default function SzekesfehervarOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '塞克什白堡老城', href: '/attractions/szekesfehervar-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">塞克什白堡老城・Székesfehérvár Old Town・匈牙利・塞克什白堡</h1>
          <p className="text-lg text-gray-600 mb-6">
            走进塞克什白堡老城，就像不小心闯进了一本褪了色的中世纪故事书。这里没有布达佩斯那种扑面而来的华丽喧嚣，反而有种安静的、被时光打磨过的温柔。鹅卵石铺成的小巷弯弯曲曲，两旁是刷成鹅黄、淡粉或薄荷绿的老房子，阳台上摆满了天竺葵。最震撼的是站在主广场（Városház tér）上，看着那座宏伟的巴洛克风格市政厅和它对面新罗马式的圣伊什特万大教堂——这里曾是匈牙利第一位国王圣伊什特万的加冕地，足足有37位国王在此登基！空气里仿佛还飘着历史的尘埃，但转角咖啡厅飘出的烘焙香和本地老人悠闲的步伐，又立刻把你拉回闲适的当下。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">走进塞克什白堡老城，就像不小心闯进了一本褪了色的中世纪故事书。这里没有布达佩斯那种扑面而来的华丽喧嚣，反而有种安静的、被时光打磨过的温柔。鹅卵石铺成的小巷弯弯曲曲，两旁是刷成鹅黄、淡粉或薄荷绿的老房子，阳台上摆满了天竺葵。最震撼的是站在主广场（Városház tér）上，看着那座宏伟的巴洛克风格市政厅和它对面新罗马式的圣伊什特万大教堂——这里曾是匈牙利第一位国王圣伊什特万的加冕地，足足有37位国王在此登基！空气里仿佛还飘着历史的尘埃，但转角咖啡厅飘出的烘焙香和本地老人悠闲的步伐，又立刻把你拉回闲适的当下。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="塞克什白堡老城" />
                <InfoRow label="英文名称" value="Székesfehérvár Old Town" />
                <InfoRow label="正式名称" value="Székesfehérvár Old Town" />
                <InfoRow label="国家" value="匈牙利" />
                <InfoRow label="城市" value="塞克什白堡" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="公共区域全天开放。内部各博物馆及教堂开放时间各异，通常为周二至周日 10:00-18:00。" />
              <InfoRow label="门票价格" value="老城街道及广场免费。圣伊什特万大教堂免费进入，登塔需购票（约1500福林）。主教宫博物馆门票约2000福林。" />
              <InfoRow label="地址" value="Székesfehérvár, Városház tér 1, 8000 Hungary" />
              <InfoRow label="交通方式" value="从布达佩斯李斯特·费伦茨国际机场出发，驾车或乘坐出租车约1小时可达。从布达佩斯火车南站（Déli pályaudvar）乘坐火车，约1小时10分钟抵达塞克什白堡火车站，出站后步行15分钟即可进入老城核心区。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">塞克什白堡的故事，几乎就是匈牙利王国早期历史的缩影。公元972年，未来的圣伊什特万一世（匈牙利开国国王）就出生在这里。他父亲盖萨大公在此建立了定居点，而伊什特万在1000年加冕为国王后，正式将这里定为王国的首都和加冕城。想象一下，从11到16世纪，整整五百多年里，所有匈牙利国王的加冕礼都在老城中心的圣伊什特万大教堂（原址）举行，王冠、权杖和加冕斗篷都珍藏于此，那该是多么辉煌的景象！可惜，16世纪奥斯曼帝国的入侵带来了毁灭性打击，原来的宏伟教堂被毁，许多珍宝流失。土耳其人被赶走后，城市在18世纪迎来了重生，我们现在看到的巴洛克和古典主义风格建筑，大多是那个时期重建的。走在老城里，你能同时触摸到中世纪王权的余韵和奥匈帝国时期的优雅复兴，这种层叠的历史感特别迷人。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐从标志性的市政厅广场开始，顺时针游览老城核心区，全程步行约2-3小时。路线涵盖历史、建筑与宗教核心，终点可回到广场旁的咖啡馆休息。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城区域不大，无需导航也能轻松探索，但可以留意地面上的“历史足迹”标志引导。穿一双绝对舒适的鞋来应对鹅卵石路面。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  市政厅广场：欣赏巴洛克市政厅与圣伊什特万雕像。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  圣伊什特万大教堂：参观内部，了解其作为加冕教堂的历史。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  主教宫与花园：参观主教宫博物馆，漫步宁静的后花园。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  圣安娜教堂：看看老城保存完好的巴洛克内部装饰。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  步行街与老城墙遗迹：逛逛商店，寻找残存的古城墙。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  布达城堡模型：在“花园废墟”观看展示原加冕教堂规模的巨大模型。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  市政厅广场全景</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或黄昏，阳光为巴洛克建筑立面镀上金色。从广场东南角拍摄，可将市政厅、大教堂和广场雕像一同纳入画面，构图恢宏。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  圣伊什特万大教堂正面</h4>
                  <p className="text-sm text-gray-700">下午阳光能较好照亮教堂正门。站在台阶下仰拍，突出其新罗马式建筑的庄严与精致雕刻细节。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  主教宫花园拱廊</h4>
                  <p className="text-sm text-gray-700">午后光线穿过拱廊形成美丽光影。站在拱廊一端向内拍摄，利用廊柱的纵深感营造宁静而古典的氛围。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  老城小巷</h4>
                  <p className="text-sm text-gray-700">晴天上午，阳光斜射入小巷时。选择一条有色彩鲜艳房屋和鹅卵石路的小巷拍摄，捕捉老城日常生活的温馨与色彩。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 教堂内部允许拍照但请关闭闪光灯，并保持肃静。使用广角镜头能更好地捕捉广场和教堂的宏伟气势。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  预算之选</h4>
                  <p className="text-sm text-blue-800">老城边缘的精品旅馆或公寓，价格亲民，步行几分钟即可进入核心区。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  中档推荐</h4>
                  <p className="text-sm text-green-800">市政厅广场附近的四星级酒店，坐拥历史建筑景观，出行极其便利。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色体验</h4>
                  <p className="text-sm text-yellow-800">改造自历史建筑的精品酒店，内部装饰复古，沉浸感强。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  家庭/团体优选</h4>
                  <p className="text-sm text-purple-800">老城周边带厨房的度假公寓，空间宽敞，适合长住。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季旅游旺季建议提前预订。住在老城内虽然价格稍高，但能体验入夜后和清晨游客稀少时的绝佳氛围。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">塞克什白堡老城是一位低调的历史讲述者。它没有用喧嚣来吸引你，而是用斑驳的城墙、宁静的广场和每一块被脚步磨光的鹅卵石，轻轻诉说着千年王国的荣耀与沧桑。在这里，你可以放慢脚步，真正地触摸历史，感受一座城市从废墟中优雅重生的坚韧力量。如果你厌倦了人潮，渴望一段有深度的宁静时光，这里会是匈牙利之旅中最值得回味的一站。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
