import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔隆古罗马遗址 Arlon Roman Ruins｜探索比利时保存最完好的罗马高卢遗迹 - 最佳欧洲景点',
  description: '说实话，第一眼看到阿尔隆的罗马遗址，我有点被震撼到了——不是那种庞贝式的废墟震撼，而是一种“它居然还在这里”的亲切感。你就走在比利时的普通小城街道上，拐个弯，突然就和两千年前的罗马高卢人打了个照面。最吸睛的是那段保存完好的罗马城墙和塔楼基座，厚重的砂岩在阳光下泛着暖黄色，缝隙里长着青苔和小草，历史感...',
}

export default function ArlonRomanRuinsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿尔隆古罗马遗址', href: '/attractions/arlon-roman-ruins' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿尔隆古罗马遗址</h1>
          <p className="text-xl text-gray-600 mb-4">Arlon Roman Ruins</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">比利时</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">阿尔隆</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，第一眼看到阿尔隆的罗马遗址，我有点被震撼到了——不是那种庞贝式的废墟震撼，而是一种“它居然还在这里”的亲切感。你就走在比利时的普通小城街道上，拐个弯，突然就和两千年前的罗马高卢人打了个照面。最吸睛的是那段保存完好的罗马城墙和塔楼基座，厚重的砂岩在阳光下泛着暖黄色，缝隙里长着青苔和小草，历史感和生命力奇妙地交织在一起。站在这里，你几乎能想象出当年罗马士兵在城墙上巡逻，而城墙内市集喧嚣的画面。整个遗址公园打理得很整洁，没有过度修复的痕迹，就是让遗迹本身安静地诉说故事，氛围特别平和。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">考古博物馆周一闭馆，公共假日开放时间可能调整，建议出行前官网确认。遗址公园没有围栏，24小时可进入，但夜间无照明。博物馆门票包含语音导览（含中文），家庭套票（2大2小）15欧元。每年7-8月旺季时，博物馆有时会延长开放时间至18:00。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔隆的故事得从公元前1世纪讲起，那时罗马帝国正在高卢地区（现在的法国、比利时一带）大力扩张。大约在公元前52年左右，罗马人看中了这里的一个凯尔特人定居点，因为它正好处在重要的军事道路“巴伐利亚大道”上，战略位置超好。于是，罗马军团来了，把这里建成了一个坚固的边境堡垒城镇，叫做“Orolaunum”。你如今看到的那些厚重城墙和防御塔，大部分就是公元2世纪到3世纪加固修建的，用来抵御北边日耳曼部落的侵扰。我特别喜欢想象那个时期的阿尔隆：城墙内是整齐的罗马式街道、广场、神庙和公共浴场，穿着托加袍的罗马官员和本地高卢商人混在一起做生意，拉丁语和凯尔特语此起彼伏，妥妥的一个边疆文化熔炉。</p>
              <p className="text-gray-700 leading-relaxed mb-4">到了公元4世纪，随着罗马帝国衰落，城镇也逐渐萧条。中世纪时，人们直接把这些罗马大石头拆了去建教堂和房子，遗址就被埋在了地下。直到19世纪中期，城市扩建挖地基，这些沉睡了一千多年的宝贝才重见天日。当时的考古学家都惊喜坏了，因为像这样城墙轮廓如此清晰、地基保存这么完好的罗马城镇遗址，在整个比利时都罕见。现在你漫步的遗址公园，其实是经过精心规划，把散落在现代城市中的几处核心遗迹点串联保护了起来，让你能一路走，一路触摸罗马时代的脉搏。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">推荐游览约2-3小时。建议从考古博物馆开始，先了解背景，然后步行至遗址公园，沿着标识顺时针游览主要遗迹点，最后回到博物馆附近的老城区结束。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  参观考古博物馆，看精美的罗马石刻和出土文物。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  走到博物馆后的遗址公园，从保存最完好的南段城墙和塔楼开始。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  沿着铺设好的小径，观看罗马道路遗迹和建筑地基。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  登上公园内的小观景台，俯瞰遗址全貌和现代城市交汇的景象。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  寻找那处有说明牌的罗马浴室（Thermae）遗迹部分。</li>
              <li className="text-gray-700 leading-relaxed mb-2">6.  漫步至附近的圣多纳图斯教堂，其地基也利用了罗马材料。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">遗址公园小径平坦好走，穿普通运动鞋即可。建议拿一份博物馆提供的地图，上面标明了所有遗迹点的位置和编号。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **南段城墙全景**：最佳拍摄时间是下午，阳光侧射让石头的纹理更立体。站在城墙前方的小广场，用广角镜头可以拍下城墙的雄伟和延伸感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **城墙与城市交融**：在公园内的小观景台，将古老的罗马石墙与现代的教堂尖顶或红屋顶一同纳入镜头，形成时空对话。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **石刻细节特写**：博物馆内允许拍照（禁用闪光灯），可以近距离拍摄那些雕刻精美的罗马墓碑和雕塑，捕捉千年前的工艺细节。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">尊重遗迹，不要为了拍照攀爬城墙或石刻。雨天后的石头颜色更深，拍出来别有韵味。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **经济型**：入住阿尔隆火车站附近的连锁酒店，如ibis，交通方便，价格实惠。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **舒适型**：选择老城区内的精品酒店或民宿，步行即可到达遗址，更能感受小镇夜晚的宁静。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **特色体验**：可以考虑住在遗址周边几公里内的乡村旅馆，享受瓦隆地区的田园风光。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">阿尔隆小镇不大，住宿选择有限，如果是旺季（夏季或周末）前来，建议提前预订。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔隆的罗马遗址有一种低调的魔力。它没有拥挤的游客，没有喧闹的商贩，只有石头、草地和穿越时空的风。在这里，历史不是教科书上遥远的章节，而是你脚下可以触摸的坚实存在。如果你厌倦了人山人海的热门景点，想找一个能安静对话历史的地方，阿尔隆会给你满满的惊喜和感动。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="考古博物馆：周二至周日 9:30-12:00，13:30-17:00；遗址公园全年全天开放。" />
                <InfoRow icon="🎫" label="门票" value="考古博物馆门票：成人6欧元，学生及65岁以上老人4欧元，12岁以下儿童免费。遗址公园免费参观。" />
                <InfoRow icon="📍" label="地址" value="Rue des Martyrs 13, 6700 Arlon, Belgium" />
                <InfoRow icon="🚌" label="交通" value="从布鲁塞尔南站（Brussels-South）乘坐火车至阿尔隆站（Arlon），约1.5小时车程。出站后步行约15分钟即可抵达遗址区。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
