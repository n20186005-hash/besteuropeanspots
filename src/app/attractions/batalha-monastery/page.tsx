import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴塔利亚修道院 Batalha Monastery｜葡萄牙“胜利的修道院”，曼努埃尔建筑的旷世杰作 - 最佳欧洲景点',
  description: '朋友，如果你来葡萄牙只看一个修道院，那必须是巴塔利亚。第一眼看到它，那种震撼是直击心灵的——这根本不像个宗教场所，倒像一座用石头写就的史诗。巨大的建筑群是奶白色石灰岩砌成，在阳光下泛着温暖的光。最吸睛的是它那“未完成的礼拜堂”，没有屋顶，任由阳光倾泻而下，雕琢得如同蕾丝般繁复的石柱直指蓝天，那种残缺...',
}

export default function BatalhaMonasteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '巴塔利亚修道院', href: '/attractions/batalha-monastery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">巴塔利亚修道院・Batalha Monastery・葡萄牙・巴塔利亚</h1>
          <p className="text-lg text-gray-600 mb-6">
            朋友，如果你来葡萄牙只看一个修道院，那必须是巴塔利亚。第一眼看到它，那种震撼是直击心灵的——这根本不像个宗教场所，倒像一座用石头写就的史诗。巨大的建筑群是奶白色石灰岩砌成，在阳光下泛着温暖的光。最吸睛的是它那“未完成的礼拜堂”，没有屋顶，任由阳光倾泻而下，雕琢得如同蕾丝般繁复的石柱直指蓝天，那种残缺的美感，简直让人屏住呼吸。走在回廊里，光影透过曼努埃尔风格的窗棂洒下，在地面投下变幻莫测的图案，时间在这里仿佛都慢了下来。你能清晰地感受到，这不是冷冰冰的历史遗迹，而是一首为了庆祝一场关键胜利而诞生的、充满感恩与雄心的石头颂歌。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">朋友，如果你来葡萄牙只看一个修道院，那必须是巴塔利亚。第一眼看到它，那种震撼是直击心灵的——这根本不像个宗教场所，倒像一座用石头写就的史诗。巨大的建筑群是奶白色石灰岩砌成，在阳光下泛着温暖的光。最吸睛的是它那“未完成的礼拜堂”，没有屋顶，任由阳光倾泻而下，雕琢得如同蕾丝般繁复的石柱直指蓝天，那种残缺的美感，简直让人屏住呼吸。走在回廊里，光影透过曼努埃尔风格的窗棂洒下，在地面投下变幻莫测的图案，时间在这里仿佛都慢了下来。你能清晰地感受到，这不是冷冰冰的历史遗迹，而是一首为了庆祝一场关键胜利而诞生的、充满感恩与雄心的石头颂歌。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="巴塔利亚修道院" />
                <InfoRow label="英文名称" value="Batalha Monastery" />
                <InfoRow label="正式名称" value="Batalha Monastery" />
                <InfoRow label="国家" value="葡萄牙" />
                <InfoRow label="城市" value="巴塔利亚" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="" />
                <InfoRow label="建筑特色" value="" />
                <InfoRow label="建筑风格" value="" />
                <InfoRow label="文化价值" value="" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="夏季（4月至10月）：09:00 - 18:30（最后入场18:00）
冬季（11月至3月）：09:00 - 17:30（最后入场17:00）
关闭时间：1月1日、复活节周日、5月1日、12月25日" />
              <InfoRow label="门票价格" value="成人票：6欧元
优惠票（65岁以上、15-25岁青年）：3欧元
家庭票（2成人+2儿童）：15欧元
免票：周日及节假日14:00前对葡萄牙居民免费，14岁以下儿童免费。" />
              <InfoRow label="地址" value="Largo Infante Dom Henrique, 2440-109 Batalha, Portugal" />
              <InfoRow label="交通方式" value="从里斯本出发：自驾沿A8/A1高速公路向北，约1.5小时车程可达。乘坐公共交通可从里斯本的Sete Rios汽车站搭乘Rede Expressos大巴，车程约2小时，直达巴塔利亚镇中心，修道院就在镇中心步行可达处。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">巴塔利亚修道院的故事，得从1385年那场决定葡萄牙王国命运的战斗说起。当时，葡萄牙若昂一世国王在阿尔茹巴罗塔战役中，以少胜多，击败了卡斯蒂利亚王国，保住了国家的独立。为了兑现对圣母的感恩誓言（他曾在战前向圣母祈祷胜利），若昂一世下令建造这座“胜利的修道院”，“Batalha”在葡语里就是“战役”的意思。工程从1386年一直持续了近两个世纪，历经七位国王。它最初是纯粹的哥特风，但建着建着，葡萄牙独有的“曼努埃尔风格”开始兴起。这种风格太有意思了，它就像大航海时代激情的石头化身，把航海元素——缆绳、贝壳、珊瑚——全都融进了宗教建筑的雕刻里。你看那些窗棂和门廊，华丽复杂到不可思议。最遗憾的是，国王曼努埃尔一世后期野心太大，想增建一个超级宏伟的皇家陵墓，也就是那个“未完成的礼拜堂”，结果工程太浩大，他去世后资金耗尽，就永远地停留在了没有屋顶的状态。不过塞翁失马，这种“未完成”反而成了它最独特、最动人的标志，仿佛一个永恒的留白，让每个参观者都能填入自己的想象。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  游览建议用时2-3小时。从西立面主入口进入，先感受主教堂的宏伟，然后顺时针参观内部几个核心空间，最后在回廊静坐欣赏建筑细节。路线终点通常是走出修道院，在广场回望其全景。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>内部路线标识清晰，无需特意导航。回廊地面光滑且多有台阶，务必注意脚下安全。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">1.  从西立面主门进入，仰望高耸的哥特式主教堂大厅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">2.  参观创始人礼拜堂，瞻仰若昂一世国王及其家族的石棺。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">3.  漫步国王回廊，欣赏曼努埃尔风格的精致雕花窗格。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">4.  穿过回廊进入“未完成的礼拜堂”，感受石雕华盖与天空相接的震撼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">5.  如有余力，可登上部分区域，俯瞰回廊与广场的几何美景。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 1.  西立面广场前</h4>
                  <p className="text-sm text-gray-700">最佳拍摄时间为清晨或下午四点后，阳光能勾勒出立面的深邃浮雕。正面广角拍摄，可收录其恢弘全景。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 2.  未完成礼拜堂内</h4>
                  <p className="text-sm text-gray-700">正午时分阳光垂直射入时最佳。仰拍那些镂空的石柱华盖，以蓝天为背景，能拍出极具张力的“残缺之美”。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 3.  国王回廊的拱窗下</h4>
                  <p className="text-sm text-gray-700">利用窗框作为天然画框，拍摄回廊庭院或对面的建筑细节，光影效果极富韵律感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 4.  从修道院侧后方小坡</h4>
                  <p className="text-sm text-gray-700">傍晚时分，可拍摄修道院建筑群与小镇民居交融的侧影，富有生活气息。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 主教堂内部光线较暗，如需拍摄建议调高感光度或使用三脚架。尊重宗教场所，在举行仪式时避免使用闪光灯。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1.  预算之选</h4>
                  <p className="text-sm text-blue-800">巴塔利亚镇上的家庭旅馆或民宿，价格亲民，步行即可到达修道院，体验小镇宁静夜晚。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2.  品质之选</h4>
                  <p className="text-sm text-green-800">修道院附近的历史主题酒店或精品酒店，部分房间可直观赏修道院景观，沉浸感十足。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">3.  便捷之选</h4>
                  <p className="text-sm text-yellow-800">住在附近更大的城市莱里亚或法蒂玛，酒店选择更多，自驾前往巴塔利亚约20-30分钟车程。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">4.  枢纽之选</h4>
                  <p className="text-sm text-purple-800">返回里斯本住宿，适合将巴塔利亚作为一日游目的地的游客，交通和餐饮选择最丰富。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">巴塔利亚小镇非常安静，夜间娱乐设施较少，适合喜欢清静和深度感受历史氛围的旅行者。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开巴塔利亚修道院很久，脑海里还是那片没有屋顶的天空，和那些精致到仿佛会呼吸的石雕。它不仅仅是一座建筑，更像一位沉默的史官，用石头记录了葡萄牙从独立到走向海洋黄金时代的雄心与虔诚。那种将国家的命运、君主的感恩与匠人的极致浪漫熔于一炉的创造，让人感动。如果你厌倦了人潮汹涌的热门景点，来这里吧，在光与影的缝隙里，听石头静静诉说一段关于胜利、信仰与未竟梦想的故事。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
