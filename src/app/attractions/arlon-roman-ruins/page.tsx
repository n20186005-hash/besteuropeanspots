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
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '阿尔隆', href: '/destinations/belgium' },
            { label: '阿尔隆古罗马遗址', href: '/attractions/arlon-roman-ruins' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">阿尔隆古罗马遗址・Arlon Roman Ruins・比利时・阿尔隆</h1>
          <p className="text-lg text-gray-600 mb-6">
            说实话，第一眼看到阿尔隆的罗马遗址，我有点被震撼到了——不是那种庞贝式的废墟震撼，而是一种“它居然还在这里”的亲切感。你就走在比利时的普通小城街道上，拐个弯，突然就和两千年前的罗马高卢人打了个照面。最吸睛的是那段保存完好的罗马城墙和塔楼基座，厚重的砂岩在阳光下泛着暖黄色，缝隙里长着青苔和小草，历史感和生命力奇妙地交织在一起。站在这里，你几乎能想象出当年罗马士兵在城墙上巡逻，而城墙内市集喧嚣的画面。整个遗址公园打理得很整洁，没有过度修复的痕迹，就是让遗迹本身安静地诉说故事，氛围特别平和。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，第一眼看到阿尔隆的罗马遗址，我有点被震撼到了——不是那种庞贝式的废墟震撼，而是一种“它居然还在这里”的亲切感。你就走在比利时的普通小城街道上，拐个弯，突然就和两千年前的罗马高卢人打了个照面。最吸睛的是那段保存完好的罗马城墙和塔楼基座，厚重的砂岩在阳光下泛着暖黄色，缝隙里长着青苔和小草，历史感和生命力奇妙地交织在一起。站在这里，你几乎能想象出当年罗马士兵在城墙上巡逻，而城墙内市集喧嚣的画面。整个遗址公园打理得很整洁，没有过度修复的痕迹，就是让遗迹本身安静地诉说故事，氛围特别平和。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="阿尔隆古罗马遗址" />
                <InfoRow label="英文名称" value="Arlon Roman Ruins" />
                <InfoRow label="正式名称" value="Arlon Roman Ruins" />
                <InfoRow label="国家" value="比利时" />
                <InfoRow label="城市" value="阿尔隆" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="考古博物馆：周二至周日 9:30-12:00，13:30-17:00；遗址公园全年全天开放。" />
              <InfoRow label="门票价格" value="考古博物馆门票：成人6欧元，学生及65岁以上老人4欧元，12岁以下儿童免费。遗址公园免费参观。" />
              <InfoRow label="地址" value="Rue des Martyrs 13, 6700 Arlon, Belgium" />
              <InfoRow label="交通方式" value="从布鲁塞尔南站（Brussels-South）乘坐火车至阿尔隆站（Arlon），约1.5小时车程。出站后步行约15分钟即可抵达遗址区。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔隆的故事得从公元前1世纪讲起，那时罗马帝国正在高卢地区（现在的法国、比利时一带）大力扩张。大约在公元前52年左右，罗马人看中了这里的一个凯尔特人定居点，因为它正好处在重要的军事道路“巴伐利亚大道”上，战略位置超好。于是，罗马军团来了，把这里建成了一个坚固的边境堡垒城镇，叫做“Orolaunum”。你如今看到的那些厚重城墙和防御塔，大部分就是公元2世纪到3世纪加固修建的，用来抵御北边日耳曼部落的侵扰。我特别喜欢想象那个时期的阿尔隆：城墙内是整齐的罗马式街道、广场、神庙和公共浴场，穿着托加袍的罗马官员和本地高卢商人混在一起做生意，拉丁语和凯尔特语此起彼伏，妥妥的一个边疆文化熔炉。</p>
              <p className="text-gray-700 leading-relaxed mb-4">到了公元4世纪，随着罗马帝国衰落，城镇也逐渐萧条。中世纪时，人们直接把这些罗马大石头拆了去建教堂和房子，遗址就被埋在了地下。直到19世纪中期，城市扩建挖地基，这些沉睡了一千多年的宝贝才重见天日。当时的考古学家都惊喜坏了，因为像这样城墙轮廓如此清晰、地基保存这么完好的罗马城镇遗址，在整个比利时都罕见。现在你漫步的遗址公园，其实是经过精心规划，把散落在现代城市中的几处核心遗迹点串联保护了起来，让你能一路走，一路触摸罗马时代的脉搏。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  推荐游览约2-3小时。建议从考古博物馆开始，先了解背景，然后步行至遗址公园，沿着标识顺时针游览主要遗迹点，最后回到博物馆附近的老城区结束。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>遗址公园小径平坦好走，穿普通运动鞋即可。建议拿一份博物馆提供的地图，上面标明了所有遗迹点的位置和编号。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  参观考古博物馆，看精美的罗马石刻和出土文物。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  走到博物馆后的遗址公园，从保存最完好的南段城墙和塔楼开始。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  沿着铺设好的小径，观看罗马道路遗迹和建筑地基。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  登上公园内的小观景台，俯瞰遗址全貌和现代城市交汇的景象。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  寻找那处有说明牌的罗马浴室（Thermae）遗迹部分。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">6.  漫步至附近的圣多纳图斯教堂，其地基也利用了罗马材料。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  南段城墙全景</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间是下午，阳光侧射让石头的纹理更立体。站在城墙前方的小广场，用广角镜头可以拍下城墙的雄伟和延伸感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  城墙与城市交融</h4>
                  <p className="text-sm text-gray-700">在公园内的小观景台，将古老的罗马石墙与现代的教堂尖顶或红屋顶一同纳入镜头，形成时空对话。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  石刻细节特写</h4>
                  <p className="text-sm text-gray-700">博物馆内允许拍照（禁用闪光灯），可以近距离拍摄那些雕刻精美的罗马墓碑和雕塑，捕捉千年前的工艺细节。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重遗迹，不要为了拍照攀爬城墙或石刻。雨天后的石头颜色更深，拍出来别有韵味。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  经济型</h4>
                  <p className="text-sm text-blue-800">入住阿尔隆火车站附近的连锁酒店，如ibis，交通方便，价格实惠。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  舒适型</h4>
                  <p className="text-sm text-green-800">选择老城区内的精品酒店或民宿，步行即可到达遗址，更能感受小镇夜晚的宁静。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  特色体验</h4>
                  <p className="text-sm text-yellow-800">可以考虑住在遗址周边几公里内的乡村旅馆，享受瓦隆地区的田园风光。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔隆小镇不大，住宿选择有限，如果是旺季（夏季或周末）前来，建议提前预订。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">阿尔隆的罗马遗址有一种低调的魔力。它没有拥挤的游客，没有喧闹的商贩，只有石头、草地和穿越时空的风。在这里，历史不是教科书上遥远的章节，而是你脚下可以触摸的坚实存在。如果你厌倦了人山人海的热门景点，想找一个能安静对话历史的地方，阿尔隆会给你满满的惊喜和感动。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
