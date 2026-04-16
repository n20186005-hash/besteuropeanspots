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

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">巴塔利亚修道院</h1>
          <p className="text-xl text-gray-600 mb-4">Batalha Monastery</p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">葡萄牙</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">巴塔利亚</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            <Section title="景点简介">
              <p className="text-gray-700 leading-relaxed mb-4">朋友，如果你来葡萄牙只看一个修道院，那必须是巴塔利亚。第一眼看到它，那种震撼是直击心灵的——这根本不像个宗教场所，倒像一座用石头写就的史诗。巨大的建筑群是奶白色石灰岩砌成，在阳光下泛着温暖的光。最吸睛的是它那“未完成的礼拜堂”，没有屋顶，任由阳光倾泻而下，雕琢得如同蕾丝般繁复的石柱直指蓝天，那种残缺的美感，简直让人屏住呼吸。走在回廊里，光影透过曼努埃尔风格的窗棂洒下，在地面投下变幻莫测的图案，时间在这里仿佛都慢了下来。你能清晰地感受到，这不是冷冰冰的历史遗迹，而是一首为了庆祝一场关键胜利而诞生的、充满感恩与雄心的石头颂歌。</p>
            </Section>
            
            <Section title="基本信息">
              <p className="text-gray-700 leading-relaxed mb-4">开放时间会随季节微调，建议出行前在官网二次确认。门票价格包含参观主教堂、回廊、创始人礼拜堂和未完成礼拜堂等所有区域。持有里斯本热罗尼莫斯修道院或托马尔基督会院门票可能有联票优惠，可现场询问。修道院内部地面为石质，建议穿着舒适的平底鞋游览。</p>
            </Section>

            <Section title="历史背景">
              <p className="text-gray-700 leading-relaxed mb-4">巴塔利亚修道院的故事，得从1385年那场决定葡萄牙王国命运的战斗说起。当时，葡萄牙若昂一世国王在阿尔茹巴罗塔战役中，以少胜多，击败了卡斯蒂利亚王国，保住了国家的独立。为了兑现对圣母的感恩誓言（他曾在战前向圣母祈祷胜利），若昂一世下令建造这座“胜利的修道院”，“Batalha”在葡语里就是“战役”的意思。工程从1386年一直持续了近两个世纪，历经七位国王。它最初是纯粹的哥特风，但建着建着，葡萄牙独有的“曼努埃尔风格”开始兴起。这种风格太有意思了，它就像大航海时代激情的石头化身，把航海元素——缆绳、贝壳、珊瑚——全都融进了宗教建筑的雕刻里。你看那些窗棂和门廊，华丽复杂到不可思议。最遗憾的是，国王曼努埃尔一世后期野心太大，想增建一个超级宏伟的皇家陵墓，也就是那个“未完成的礼拜堂”，结果工程太浩大，他去世后资金耗尽，就永远地停留在了没有屋顶的状态。不过塞翁失马，这种“未完成”反而成了它最独特、最动人的标志，仿佛一个永恒的留白，让每个参观者都能填入自己的想象。</p>
            </Section>

            <Section title="游览路线">
              <p className="text-gray-700 leading-relaxed mb-4">游览建议用时2-3小时。从西立面主入口进入，先感受主教堂的宏伟，然后顺时针参观内部几个核心空间，最后在回廊静坐欣赏建筑细节。路线终点通常是走出修道院，在广场回望其全景。</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  从西立面主门进入，仰望高耸的哥特式主教堂大厅。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  参观创始人礼拜堂，瞻仰若昂一世国王及其家族的石棺。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  漫步国王回廊，欣赏曼努埃尔风格的精致雕花窗格。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  穿过回廊进入“未完成的礼拜堂”，感受石雕华盖与天空相接的震撼。</li>
              <li className="text-gray-700 leading-relaxed mb-2">5.  如有余力，可登上部分区域，俯瞰回廊与广场的几何美景。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">内部路线标识清晰，无需特意导航。回廊地面光滑且多有台阶，务必注意脚下安全。</p>
            </Section>

            <Section title="拍照机位">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **西立面广场前**：最佳拍摄时间为清晨或下午四点后，阳光能勾勒出立面的深邃浮雕。正面广角拍摄，可收录其恢弘全景。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **未完成礼拜堂内**：正午时分阳光垂直射入时最佳。仰拍那些镂空的石柱华盖，以蓝天为背景，能拍出极具张力的“残缺之美”。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **国王回廊的拱窗下**：利用窗框作为天然画框，拍摄回廊庭院或对面的建筑细节，光影效果极富韵律感。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **从修道院侧后方小坡**：傍晚时分，可拍摄修道院建筑群与小镇民居交融的侧影，富有生活气息。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">主教堂内部光线较暗，如需拍摄建议调高感光度或使用三脚架。尊重宗教场所，在举行仪式时避免使用闪光灯。</p>
            </Section>

            <Section title="住宿小贴士">
              <ul className="list-disc pl-5 space-y-2 mb-4">
              <li className="text-gray-700 leading-relaxed mb-2">1.  **预算之选**：巴塔利亚镇上的家庭旅馆或民宿，价格亲民，步行即可到达修道院，体验小镇宁静夜晚。</li>
              <li className="text-gray-700 leading-relaxed mb-2">2.  **品质之选**：修道院附近的历史主题酒店或精品酒店，部分房间可直观赏修道院景观，沉浸感十足。</li>
              <li className="text-gray-700 leading-relaxed mb-2">3.  **便捷之选**：住在附近更大的城市莱里亚或法蒂玛，酒店选择更多，自驾前往巴塔利亚约20-30分钟车程。</li>
              <li className="text-gray-700 leading-relaxed mb-2">4.  **枢纽之选**：返回里斯本住宿，适合将巴塔利亚作为一日游目的地的游客，交通和餐饮选择最丰富。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">巴塔利亚小镇非常安静，夜间娱乐设施较少，适合喜欢清静和深度感受历史氛围的旅行者。</p>
            </Section>

            <Section title="总结感悟">
              <p className="text-gray-700 leading-relaxed mb-4">离开巴塔利亚修道院很久，脑海里还是那片没有屋顶的天空，和那些精致到仿佛会呼吸的石雕。它不仅仅是一座建筑，更像一位沉默的史官，用石头记录了葡萄牙从独立到走向海洋黄金时代的雄心与虔诚。那种将国家的命运、君主的感恩与匠人的极致浪漫熔于一炉的创造，让人感动。如果你厌倦了人潮汹涌的热门景点，来这里吧，在光与影的缝隙里，听石头静静诉说一段关于胜利、信仰与未竟梦想的故事。</p>
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
                <InfoRow icon="🕒" label="开放时间" value="夏季（4月至10月）：09:00 - 18:30（最后入场18:00）
冬季（11月至3月）：09:00 - 17:30（最后入场17:00）
关闭时间：1月1日、复活节周日、5月1日、12月25日" />
                <InfoRow icon="🎫" label="门票" value="成人票：6欧元
优惠票（65岁以上、15-25岁青年）：3欧元
家庭票（2成人+2儿童）：15欧元
免票：周日及节假日14:00前对葡萄牙居民免费，14岁以下儿童免费。" />
                <InfoRow icon="📍" label="地址" value="Largo Infante Dom Henrique, 2440-109 Batalha, Portugal" />
                <InfoRow icon="🚌" label="交通" value="从里斯本出发：自驾沿A8/A1高速公路向北，约1.5小时车程可达。乘坐公共交通可从里斯本的Sete Rios汽车站搭乘Rede Expressos大巴，车程约2小时，直达巴塔利亚镇中心，修道院就在镇中心步行可达处。" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
