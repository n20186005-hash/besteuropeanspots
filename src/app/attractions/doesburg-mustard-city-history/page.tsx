import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '杜斯堡历史溯源｜荷兰芥末古城的前世今生与砖砌建筑传奇',
  description: '探索荷兰最古老的芥末城杜斯堡。穿越其700年砖砌街巷，解密中世纪的盐税秘辛、黄金时代的贸易往事，聆听牧师学者的尘封日记。小众深度历史之旅。',
}

export default function DoesburgMustardCityHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '荷兰', href: '/destinations/europe' },
            { label: '海尔德兰省', href: '/destinations/europe' },
            { label: '杜斯堡', href: '/attractions/doesburg-mustard-city-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`杜斯堡・Doesburg・荷兰・海尔德兰省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你在荷兰东部漫步，若遇见一座被护城河静静环绕、遍布温暖砖红色房屋的小城，那便是<strong>杜斯堡</strong>。它的名片并非喧闹的运河与风车，而是空气中若有似无的辛辣香气，与沉默诉说着七个世纪风雨的砖墙。这里是荷兰官方认证的“最古老芥末城”，也是一座在战火中重生的建筑宝库。历史在这里，被研磨进每一粒芥末籽，烧制进每一块窑砖。抛开游玩攻略，走进杜斯堡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`杜斯堡`} />
                <InfoRow label="英文名称" value={`Doesburg`} />
                <InfoRow label="正式名称" value={`Doesburg`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`海尔德兰省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "杜斯堡的诞生，与一条河息息相关。在<strong>艾瑟尔河</strong>与<strong>欧德艾瑟尔河</strong>的交汇处，这片高地天然具备了战略与商业价值。尽管确切记载模糊，但历史学家普遍认为，其雏形在<strong>12世纪</strong>左右便已形成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字“Doesburg”，首次见于<strong>1237年</strong>的一份文献。词源颇具意味：后半部分的“burg”在低地德语中意为“城堡”或“设防定居点”；而前半部分“Does”很可能源自当地一条名为“De Oude IJssel”河流的古称或昵称。简而言之，这是一座“河畔堡垒”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1286年</strong>，是杜斯堡命运的转折点。时任领主——<strong>海尔德兰伯爵</strong> <strong>赖纳尔德一世</strong>，正式授予其<strong>城市权</strong>。这并非荣宠，而是一笔精明的投资。伯爵看中了此地的水路要冲，意图在此设立税卡，向过往盐船征税。盐，是中世纪堪比黄金的调味品与防腐剂。杜斯堡，从诞生之初就与“味道”和“贸易”紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "获得城市权后，杜斯堡迅速修筑城墙、挖掘护城河，形成了今天所见的大致轮廓。最初的它，是一座为守护<strong>盐税</strong>而生的边境要塞小城，在荷兰众多璀璨的历史名城中，显得低调而务实。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "杜斯堡的历史，是一部砖石写就的兴衰史。两件大事，深深镌刻了它的肌理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是<strong>1572年</strong>的烈火与抉择。彼时，席卷荷兰的<strong>八十年战争</strong>（荷兰独立战争）战火延烧至此。作为战略要地，杜斯堡在西班牙军队与荷兰起义军（海上乞丐）之间反复易手。最终，城市选择了支持<strong>奥兰治的威廉</strong>，正式加入反抗西班牙的阵营。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一选择带来了毁灭与新生。城市遭受了严重破坏，但也因此融入了荷兰共和国的贸易网络。战后重建，杜斯堡迎来了它的“砖砌黄金时代”。本地丰富的粘土资源，催生了发达的制砖业。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“城市里最显眼的，便是那些用上好砖块精心砌筑的山墙，商人们以此彰显财富。” —— 17世纪旅行者笔记" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，我们今天看到的迷人景象诞生了：<strong>阶梯山墙、钟形山墙、颈形山墙</strong>……各种华丽的砖砌立面在街头争奇斗艳。市政厅、同业公会楼、富裕商人的宅邸，无一不是砖建筑艺术的展示。这座城市本身，变成了一座露天的“砖砌建筑博物馆”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道深刻印记，来自20世纪的伤痛与坚韧。<strong>1945年4月</strong>，二战临近尾声，退守的德军为阻延盟军（主要是加拿大部队）推进，将杜斯堡这座中世纪古城视为理想的防守据点。盟军的炮火与德军最后的顽抗，让市中心超过80%的建筑化为瓦砾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战后的杜斯堡没有选择现代化重建，而是开启了一项惊人的工程：<strong>“砖对砖”原样复建</strong>。市民们从废墟中仔细拣出可用的旧砖，参照战前照片和图纸，近乎偏执地恢复了每一条街道、每一栋房屋的原有面貌。这不是仿古，而是历史的<strong>复活</strong>。如今漫步城中，你所见的古老砖墙，许多都凝结着<strong>1945年</strong>那个春天的悲壮与战后一代人的执着。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在杜斯堡漫长历史中，<strong>佩特鲁斯·霍夫特</strong>并非名震欧洲的显赫人物，却是最能体现这座城市精神肌理的“记录者”。他的一生，与杜斯堡的砖石和芥末香紧密交织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>霍夫特（1646-1698）</strong>，首先是一位牧师。他于<strong>1674年</strong>来到杜斯堡，担任大教堂牧师直至去世。但使他青史留名的，是他作为学者、收藏家与编年史家的另一面。他对这座城市充满了近乎痴迷的热爱，系统性地收集、整理了一切与杜斯堡相关的文献、地图、契约和实物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的巨著《杜斯堡之镜》，详尽记录了城市的历史、法律、建筑与家族谱系。更珍贵的是他卷帙浩繁的<strong>日记</strong>与<strong>收藏</strong>。这些文字不是干瘪的史料，而是一个生活于斯的知识分子，对日常的敏锐观察。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“<strong>1678年3月15日</strong>，今日集市，见到从聚特芬来的商人贩售上等石磨，称其研磨芥末籽最为细腻，不留粗渣。本地几位作坊主围看良久，终因价高未购。然研磨技艺，实为芥末品质之关键。” —— 佩特鲁斯·霍夫特日记摘录" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从他的日记中，我们得以窥见<strong>17世纪</strong>杜斯堡作为芥末产销中心的生动细节：原料（芥末籽）的贸易路线、作坊间的竞争、制作工艺的改进（从木臼到石磨的演进），甚至早期“品牌”意识的萌芽——有些作坊开始在自己的陶罐上烧制特殊标记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍夫特还敏锐地记录了城市砖建筑的特点。他详细描述了不同街区砖块的色泽差异（源于粘土矿源不同），甚至记录了著名泥瓦匠家族的传承。他的住所本身，就是一座珍品陈列室，摆满了本地出土的古币、陶器以及建筑构件。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非只是旁观者。作为牧师，他在<strong>1679年</strong>城市大火后积极参与赈灾与重建规划，力主沿用传统砖砌风格以保持城市风貌的统一。某种意义上，他是杜斯堡最早的“文化遗产保护者”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位默默无闻的牧师，用毕生心血为杜斯堡制作了一份无比丰厚的“历史备份”。他的故居如今是城市博物馆的核心，他的手稿是学者研究的宝藏。在杜斯堡，霍夫特不是遥不可及的名人，他的影子就藏在每一本讲述本地历史的书卷开篇，他是这座小城记忆的<strong>肉身容器</strong>。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在杜斯堡，最浓郁的人文气息，莫过于那延续数百年的<strong>芥末香</strong>。围绕这辛辣的金黄色酱料，诞生了许多有趣的传说与习俗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最广为流传的故事，与城市的地标——<strong>高耸的圣马丁大教堂塔楼</strong>有关。传说在<strong>15世纪</strong>，一位吝啬的芥末作坊主，总担心竞争对手偷学他的秘方。他将配方和一小袋金币，藏在一个旧芥末罐里，封存于教堂塔楼最高处的砖石缝隙中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他突发急病去世，秘密随之埋藏。此后多年，每当东风穿过塔楼的砖缝，城里嗅觉最灵敏的老人便会说：“瞧，塔楼又在‘吐露’老亨德里克的芥末秘方呢！”这个传说让塔楼有了生命，它不仅是钟声的来源，也成了城市独特风味的守护者与象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一则传说则解释了杜斯堡芥末为何特别“有劲道”。据说，这与流经城市的<strong>欧德艾瑟尔河</strong>的水质有关。河中曾住着一位性格火爆的水精灵，她对来往盐船征税的旧事耿耿于怀。为了“报复”，她向河中施了法术，用这里的水研磨出的芥末，会带上她性格里那股子“辛辣与倔强”。这当然是古人对于风味地理学的诗意想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说沉淀为独特的本地风情。直至今日，杜斯堡每年都会举办与芥末相关的节庆。最传统的芥末作坊，依然遵循古法，用厚重的石磨缓慢研磨。购买芥末，不仅是带走一味调料，更是带走一份有传说佐味的、可以涂抹的历史。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的杜斯堡，是一座活着的“时间胶囊”。它的价值，不在于拥有多么惊心动魄的宏大叙事，而在于其历史的<strong>连续性与质感</strong>。从<strong>13世纪</strong>守护盐税的边境堡垒，到<strong>17世纪</strong>砖砌立面争辉的商贸小城，再到<strong>20世纪</strong>从战火废墟中执拗重生的文化遗产，每一层历史都清晰可辨，并被砖石忠实地封存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂杜斯堡，便是读懂一种荷兰精神：在平凡中创造独特（将普通的芥末做成传承数百年的产业），在实用中追求美感（让砖块变成建筑的诗句），在毁灭中坚守记忆（“砖对砖”的重建是一场全民的信仰）。这里每一道砖缝都可能藏着故事，每一缕空气都曾掠过中世纪盐商和芥末磨工的肩膀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史并非总是由王侯将相书写，更多是由无数个“佩特鲁斯·霍夫特”、无名砖瓦匠和芥末作坊主，用日常的坚韧共同编织。在这座安静的小城走一走，触摸那些温润的旧砖，品尝一口地道的老式芥末，你便与这七百年绵延不绝的人间烟火，有了最直接的共鸣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/zierikzee-historic-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    济
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">济里克泽历史老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zierikzee</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stevensweert" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯蒂文斯维特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stevensweert</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monnickendam-historic-fishing-harbor" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙尼肯丹</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monnickendam</p>
                  </div>
                </div>
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
