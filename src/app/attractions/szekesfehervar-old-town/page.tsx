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

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">塞克什白堡老城</h1>
          <p className="text-xl text-gray-600 mb-4">Székesfehérvár Old Town</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">匈牙利</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">塞克什白堡</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">走进塞克什白堡老城，就像不小心闯进了一本褪了色的中世纪故事书。这里没有布达佩斯那种扑面而来的华丽喧嚣，反而有种安静的、被时光打磨过的温柔。鹅卵石铺成的小巷弯弯曲曲，两旁是刷成鹅黄、淡粉或薄荷绿的老房子，阳台上摆满了天竺葵。最震撼的是站在主广场（Városház tér）上，看着那座宏伟的巴洛克风格市政厅和它对面新罗马式的圣伊什特万大教堂——这里曾是匈牙利第一位国王圣伊什特万的加冕地，足足有37位国王在此登基！空气里仿佛还飘着历史的尘埃，但转角咖啡厅飘出的烘焙香和本地老人悠闲的步伐，又立刻把你拉回闲适的当下。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">老城区的户外区域全年全天可自由漫步。主要室内景点如圣伊什特万大教堂、主教宫博物馆及布达城堡模型展览等，开放时间多为周二至周日10:00-18:00，周一闭馆（节假日可能调整）。冬季（11月至3月）部分景点可能缩短开放时间，建议行前官网确认。学生、老年人和团体票通常有折扣，6岁以下儿童普遍免费。老城地面多为鹅卵石，建议穿着舒适的平底鞋。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">塞克什白堡的故事，几乎就是匈牙利王国早期历史的缩影。公元972年，未来的圣伊什特万一世（匈牙利开国国王）就出生在这里。他父亲盖萨大公在此建立了定居点，而伊什特万在1000年加冕为国王后，正式将这里定为王国的首都和加冕城。想象一下，从11到16世纪，整整五百多年里，所有匈牙利国王的加冕礼都在老城中心的圣伊什特万大教堂（原址）举行，王冠、权杖和加冕斗篷都珍藏于此，那该是多么辉煌的景象！可惜，16世纪奥斯曼帝国的入侵带来了毁灭性打击，原来的宏伟教堂被毁，许多珍宝流失。土耳其人被赶走后，城市在18世纪迎来了重生，我们现在看到的巴洛克和古典主义风格建筑，大多是那个时期重建的。走在老城里，你能同时触摸到中世纪王权的余韵和奥匈帝国时期的优雅复兴，这种层叠的历史感特别迷人。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐从标志性的市政厅广场开始，顺时针游览老城核心区，全程步行约2-3小时。路线涵盖历史、建筑与宗教核心，终点可回到广场旁的咖啡馆休息。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  市政厅广场：欣赏巴洛克市政厅与圣伊什特万雕像。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  圣伊什特万大教堂：参观内部，了解其作为加冕教堂的历史。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  主教宫与花园：参观主教宫博物馆，漫步宁静的后花园。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  圣安娜教堂：看看老城保存完好的巴洛克内部装饰。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  步行街与老城墙遗迹：逛逛商店，寻找残存的古城墙。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  布达城堡模型：在“花园废墟”观看展示原加冕教堂规模的巨大模型。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">老城区域不大，无需导航也能轻松探索，但可以留意地面上的“历史足迹”标志引导。穿一双绝对舒适的鞋来应对鹅卵石路面。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **市政厅广场全景**：最佳拍摄时间为清晨或黄昏，阳光为巴洛克建筑立面镀上金色。从广场东南角拍摄，可将市政厅、大教堂和广场雕像一同纳入画面，构图恢宏。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **圣伊什特万大教堂正面**：下午阳光能较好照亮教堂正门。站在台阶下仰拍，突出其新罗马式建筑的庄严与精致雕刻细节。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **主教宫花园拱廊**：午后光线穿过拱廊形成美丽光影。站在拱廊一端向内拍摄，利用廊柱的纵深感营造宁静而古典的氛围。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **老城小巷**：晴天上午，阳光斜射入小巷时。选择一条有色彩鲜艳房屋和鹅卵石路的小巷拍摄，捕捉老城日常生活的温馨与色彩。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">教堂内部允许拍照但请关闭闪光灯，并保持肃静。使用广角镜头能更好地捕捉广场和教堂的宏伟气势。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **预算之选**：老城边缘的精品旅馆或公寓，价格亲民，步行几分钟即可进入核心区。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **中档推荐**：市政厅广场附近的四星级酒店，坐拥历史建筑景观，出行极其便利。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **特色体验**：改造自历史建筑的精品酒店，内部装饰复古，沉浸感强。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **家庭/团体优选**：老城周边带厨房的度假公寓，空间宽敞，适合长住。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">夏季旅游旺季建议提前预订。住在老城内虽然价格稍高，但能体验入夜后和清晨游客稀少时的绝佳氛围。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">塞克什白堡老城是一位低调的历史讲述者。它没有用喧嚣来吸引你，而是用斑驳的城墙、宁静的广场和每一块被脚步磨光的鹅卵石，轻轻诉说着千年王国的荣耀与沧桑。在这里，你可以放慢脚步，真正地触摸历史，感受一座城市从废墟中优雅重生的坚韧力量。如果你厌倦了人潮，渴望一段有深度的宁静时光，这里会是匈牙利之旅中最值得回味的一站。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="公共区域全天开放。内部各博物馆及教堂开放时间各异，通常为周二至周日 10:00-18:00。" />
                <InfoRow icon="🎫" label="门票" value="老城街道及广场免费。圣伊什特万大教堂免费进入，登塔需购票（约1500福林）。主教宫博物馆门票约2000福林。" />
                <InfoRow icon="📍" label="地址" value="Székesfehérvár, Városház tér 1, 8000 Hungary" />
                <InfoRow icon="🚌" label="交通" value="从布达佩斯李斯特·费伦茨国际机场出发，驾车或乘坐出租车约1小时可达。从布达佩斯火车南站（Déli pályaudvar）乘坐火车，约1小时10分钟抵达塞克什白堡火车站，出站后步行15分钟即可进入老城核心区。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
