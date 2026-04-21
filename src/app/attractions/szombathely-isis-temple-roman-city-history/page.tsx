import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '松博特海伊历史溯源｜匈牙利最古老罗马古城的前世今生，伊希斯神庙与名人传奇',
  description: '抛开游客喧嚣，探秘匈牙利起源地松博特海伊。沉睡的罗马帝国行省首府、庞大的伊希斯神庙遗迹、摄政王霍尔蒂的最终归宿。一座活着的“时间容器”。',
}

export default function SzombathelyIsisTempleRomanCityHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '匈牙利', href: '/destinations/europe' },
            { label: '松博特海伊', href: '/destinations/europe' },
            { label: '松博特海伊', href: '/attractions/szombathely-isis-temple-roman-city-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`松博特海伊・Szombathely・匈牙利・松博特海伊`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在匈牙利西部的沃什平原上，<strong>松博特海伊</strong> 静静地守护着一个惊人的身份：它是这个国家档案上最古老的城市。它的心跳，始于近两千年前罗马军团的号角。这里没有布达佩斯的辉煌夺目，却拥有中欧保存最完好的<strong>古罗马城市遗址之一</strong>，以及一座规模惊人的<strong>伊希斯神庙</strong>地基，沉默地诉说着多神信仰时代的辉煌。历史在这里不是教科书上的章节，而是层叠在街道之下的石头、铭文与记忆。抛开游玩攻略，走进松博特海伊的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`松博特海伊`} />
                <InfoRow label="英文名称" value={`Szombathely`} />
                <InfoRow label="正式名称" value={`Szombathely`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`松博特海伊`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>公元45年</strong>，罗马帝国皇帝<strong>克劳狄乌斯</strong> 下令，在潘诺尼亚行省的腹地建立一座新的城市。它的名字是 <strong>“科尔涅莉亚·萨瓦里亚”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市从诞生之初就肩负着战略使命。它坐落于重要的“琥珀之路”贸易路线上，这条连接波罗的海与地中海的古老商道，为它带来了最初的繁荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨瓦里亚更是一个坚固的军事与行政中心，用以巩固罗马对这片新征服土地的统治。其城市布局是经典的罗马棋盘格规划，拥有广场、输水道、公共浴场和城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而“松博特海伊”这个现代匈牙利名字，则揭示了它在中世纪的转型。它源自斯拉夫语“Sombat”，意为“星期六”，因为这座城市在中世纪获得了每周六举办大型集市的权利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“海伊”意为“地方”。于是，“星期六集市之地”这个充满烟火气的名字，逐渐取代了庄严的罗马旧称，标志着城市从帝国要塞向中世纪商贸城镇的平滑过渡。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个不可磨灭的印记，属于罗马与伊希斯女神。在萨瓦里亚城的中心，考古学家揭露出令人震撼的遗迹：一座庞大的<strong>伊希斯神庙</strong> 建筑群。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座建于<strong>公元2世纪</strong>的神庙，并非孤立的祭坛，而是一个包含主殿、柱廊、祭坛和祭司住所的宏伟综合体。它的规模在整个罗马帝国范围内都属罕见。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊希斯是一位源自埃及的母性与丰饶女神，在罗马帝国晚期信仰盛行。萨瓦里亚神庙的存在，证明了这座城市不仅是行政前沿，也是重要的宗教中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来自地中海世界的商人、士兵和移民将他们的信仰带到了这里。神庙的废墟中曾出土精美的雕塑碎片，包括很可能代表女神本人的大理石头像。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地传说称，在月圆之夜，若在神庙遗址旁静心聆听，风穿过古老石缝的声音，依稀是女祭司们为伊希斯吟唱的古老祷词。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个关键印记，是中世纪的转型与重建。罗马帝国崩溃后，城市一度衰落，但从未被遗弃。新的核心在古老的废墟上建立起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>11世纪</strong>，匈牙利第一位国王<strong>圣伊什特万一世</strong> 在这里建立了主教区，并于<strong>1009年</strong>开始建造<strong>松博特海伊大教堂</strong>。这标志着城市生命以基督教的形式重燃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大教堂就建在古罗马建筑的遗址之上，其地下室至今可见罗马时期的砖石。这座教堂在历史上多次被毁又重建，当前的巴洛克风格主体建于<strong>18世纪</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更迷人的是，主教座堂的旁边，矗立着<strong>圣殿骑士团教堂</strong>的遗址。这座<strong>13世纪</strong>的罗马式小教堂，是圣殿骑士团在匈牙利存在的罕见物证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的存在暗示了这座城市在中世纪欧洲网络中的连结点地位，连接着十字军东征的传说与本地信仰生活。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>米克洛什·霍尔蒂</strong>，这个名字是匈牙利二十世纪上半叶历史的同义词。这位奥匈帝国海军上将，在第一次世界大战后成为匈牙利的<strong>摄政王</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他统治了匈牙利长达二十四年（1920-1944），历经战间期的复杂政治。而他人生的最后篇章，与松博特海伊紧密地联系在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1944年</strong>，随着二战局势恶化，霍尔蒂被迫下台并被纳粹带走。战后，他一度被盟军拘留，最终获准流亡，但他始终心系匈牙利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "令人意外的是，这位曾权倾一时的国家元首，并未选择诸如苏黎世或里斯本这样的传统流亡地终老。他与家人选择了葡萄牙海滨小镇<strong>埃斯托里尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但<strong>1957年</strong>霍尔蒂逝世后，他的遗愿得以实现：<strong>将心脏安葬在故土</strong>。经过复杂的政治协商，他的心脏被悄悄送回匈牙利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "安放地点，正是他家族起源地附近的<strong>松博特海伊</strong>。他的心脏被安葬在市中心一座宁静的<strong>新教墓园</strong>中，墓碑简朴，只有名字和生卒年份。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他的日记中曾写道：“我的肉体可以留在异乡，但我的心脏必须回到匈牙利。” 这个充满象征意义的安排，为这座城市增添了一层沉重而私密的历史维度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与这座城市灵魂相契的名人，是画家<strong>莫多尔·奥尔拜尔特</strong>。他于<strong>1878年</strong>出生在松博特海伊一个木匠家庭，是地道的本土之子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的艺术生涯深受这座城市及周边乡村景观的滋养。莫多尔的画作充满对沃什州平原、传统农舍与普通人生活的深情描绘，风格介于现实主义与早期印象派之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅是画家，也是热烈的文化倡导者。他致力于收集和保存当地的民间艺术、服饰和文物，几乎是凭一己之力守护着地区的文化记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他位于<strong>贝奇街</strong>的故居，如今是一座迷人的纪念博物馆。馆内不仅陈列他的画作，更展示了他收藏的大量民俗物品，仿佛一个时光胶囊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫多尔代表了松博特海伊的另一种精神：不是帝国宏大的叙事，而是深深植根于土地、民间与日常生活的持久创造力。他让世界看到了匈牙利乡村的灵魂。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于那座宏伟的<strong>伊希斯神庙</strong>，废墟本身就是一个传说的源泉。中世纪的人们并不知道脚下这些巨大规整的石块来自何处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们将其归结为巨人或魔鬼的造物。一种流传甚广的说法是，这些罗马遗迹是一座“异教国王宫殿”的残骸，因其崇拜邪神而被上帝摧毁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "甚至有人认为，这些地下迷宫般的废墟与神秘的“地精”或守护宝藏的精灵有关。这些传说直到系统的考古发掘开始后才逐渐消散。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城市的<strong>主教座堂</strong>有关。教堂内供奉着一尊名为 <strong>“黑圣母”</strong> 的木质圣像。这尊圣像的历史可追溯到<strong>17世纪</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在土耳其入侵的黑暗年代，这尊圣像曾被信徒秘密隐藏，免遭破坏。战后当她被重新请回时，信徒们发现她的面容因年代和烟熏而变深。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，“黑圣母”成为了城市保护与 resilience（韧性）的象征。人们相信她以深色的面容见证了这座城市的苦难与重生，并持续守护着它。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "每年特定的宗教节日，信徒仍会抬着这尊圣像游行，穿过古老的街道。那一刻，巴洛克式的虔诚与脚下沉默的罗马基石，形成了穿越时空的对话。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在松博特海伊，你踏足的每一寸土地都可能覆盖着三层历史：罗马的萨瓦里亚、中世纪的市场城镇、以及奥匈帝国晚期的省城风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不像那些被精心包装的“博物馆式”古城。它的历史是层叠的、偶发的、甚至有些杂乱的，却因此无比真实。伊希斯神庙的废墟就静立在普通街巷旁，与咖啡馆为邻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市教会旅行者的，是一种“深读”风景的能力。它邀请你去倾听石头的低语，去想象罗马祭司的长袍如何拂过如今是草坪的石阶，去感受一位老摄政王心脏归葬于此的乡愁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座活着的“时间容器”，将帝国的荣耀、信仰的变迁、战争的创伤与艺术的温存，全部压缩在它看似低调的街廓之中。在这里，历史从未真正终结，它只是换了一种方式呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？伊希斯神庙遗址怎么找、主教座堂开放时间、莫多尔故居参观信息，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/holloko-village-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍尔罗克传统村落</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hollókő</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szekesfehervar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞克什白堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Székesfehérvár Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/szombathely-isis-temple-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    松
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">松博特海伊</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Szombathely</p>
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
