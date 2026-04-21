import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '凯里尼亚(Kyrenia)历史溯源｜沉船、古堡与十字军，塞浦路斯北岸的千年传奇',
  description: '穿越凯里尼亚的千年层叠史：从拜占庭要塞到威尼斯堡垒，从十字军传奇到沉睡海底的希腊商船。探索这座北塞浦路斯港口不为人知的前世今生。',
}

export default function KyreniaGirneHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '塞浦路斯', href: '/destinations/europe' },
            { label: '凯里尼亚', href: '/destinations/europe' },
            { label: '凯里尼亚（基尔内）', href: '/attractions/kyrenia-girne-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`凯里尼亚（基尔内）・Kyrenia (Girne)・塞浦路斯・凯里尼亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在地中海东岸，有一座被古堡守护的港口，它的历史并非线性书写，而是如海岸线边的沉积岩般层层叠加。<strong>凯里尼亚</strong>，或按土耳其语称为<strong>基尔内</strong>，它的故事是拜占庭的虔诚、威尼斯人的野心、奥斯曼的征服与20世纪分裂伤口的共同结晶。港口中那艘来自公元前四世纪的沉船，静默地锚定了这片海域超过两千年的贸易记忆。抛开游玩攻略，走进凯里尼亚的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`凯里尼亚（基尔内）`} />
                <InfoRow label="英文名称" value={`Kyrenia (Girne)`} />
                <InfoRow label="正式名称" value={`Kyrenia (Girne)`} />
                <InfoRow label="国家" value={`塞浦路斯`} />
                <InfoRow label="城市" value={`凯里尼亚`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "凯里尼亚的名字，源自古希腊语“<strong>Κερύνεια</strong>”（Keryneia），意为“安宁”或“恬静之地”。这并非偶然，其天然良港被狭长的半岛与山脉环绕，如同母亲弯起的手臂，为船只提供了难得的庇护。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考古证据将人类定居史追溯至<strong>公元前10世纪</strong>。但真正让它在历史地图上留下坐标的，是公元前<strong>13世纪</strong>左右迈锡尼希腊人的到来。他们并非最早的居民，却赋予了此地最初的城市形态与名字。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其建城的直接动机，与岛上另一座重要城市——<strong>萨拉米斯</strong>——的兴起息息相关。凯里尼亚最初是萨拉米斯的附属港口，负责输出岛内腹地丰富的铜矿、木材与农产品。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一则古老的传说解释了港口的形成：英雄<strong>基里尼亚斯</strong>在特洛伊战争后漂流至此，他掷出的巨石落入海中，形成了保护港口的防波堤。这座俯瞰全城的山脉，至今仍以他的名字命名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "地名在漫长的岁月中几经流转：拉丁化为“Cerynia”，中世纪法兰克人称其为“<strong>La Cérines</strong>”，威尼斯人记作“Cerines”，直到奥斯曼时期演变为今天的“Girne”。每一个名字的更迭，都标志着一次权力的交接。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道深刻印记，无疑是那座雄踞港口的<strong>凯里尼亚堡垒</strong>。我们今天看到的宏伟石造建筑，主体是<strong>威尼斯共和国</strong>在<strong>16世纪</strong>初的杰作。但它的地基之下，埋藏着更早的<strong>拜占庭要塞</strong>，以及后来<strong>十字军</strong>建立的<strong>吕西尼昂王朝</strong>的城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯人并非建造者，而是彻底的改造者。面对日益逼近的奥斯曼帝国威胁，他们决定将这座中世纪城堡，升级为能够抵御火炮攻击的现代棱堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1540年</strong>，工程师<strong>乔瓦尼·吉罗拉莫·桑米凯利</strong>奉命前来。他加固了城墙，设计了独特的菱形堡垒角，并修建了面向海港的巨型炮台。然而，历史的讽刺在于，这座为抵御奥斯曼而生的堡垒，最终在<strong>1570年</strong>并未经历残酷的攻坚战。守军因寡不敌众而投降，奥斯曼帝国的旗帜悄然升起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，关乎一场现代的分裂。<strong>1974年</strong>，塞浦路斯岛上的政治冲突与外部干预，导致了南北割据的局面。凯里尼亚位于<strong>北塞浦路斯</strong>境内，这一事件彻底改变了城市的人口结构与发展轨迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "希腊裔居民南迁，土耳其裔居民北移。这座古老港口的日常语言、街巷风貌与生活节奏，随之发生了静默而深刻的转变。历史，在这里并非遥远的回响，而是仍在进行的现实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道，也是最独特的印记，深藏在堡垒之内——<strong>凯里尼亚沉船博物馆</strong>。<strong>1967年</strong>，当地一位潜水员偶然发现了这艘沉睡在海底的希腊商船。碳定年法显示，它大约在<strong>公元前300年</strong>沉没。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不仅仅是一堆古老的木头。它是时间胶囊：船上满载着来自爱琴海诸岛的<strong>400个葡萄酒罐</strong>、来自罗得岛的<strong>磨石</strong>，以及杏仁、橄榄等货物。它证明了在亚历山大大帝时代，凯里尼亚已是东地中海繁忙贸易网中的一个活跃节点。这艘船及其货物的完整性，让它被誉为“古代世界的珍宝”。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与凯里尼亚羁绊最深的历史名人，并非居住于此的君王，而是一位在此陨落的拜占庭悍将。他叫<strong>利奥·托尔尼基奥斯</strong>，一位<strong>11世纪</strong>的军事贵族与叛乱者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "利奥出身显赫，是拜占庭帝国小亚细亚军事贵族阶层的代表。他野心勃勃，不满于君士坦丁堡的中央权威。在<strong>1047年</strong>，他联合另一位贵族，共同拥立自己为对抗皇帝<strong>君士坦丁九世</strong>的共治皇帝，并发动了大规模叛乱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的军队一度势如破竹，直逼帝国首都的城下。然而，这场叛乱最终失败。作为惩罚，也可能是为了消除这个不安定因素，皇帝将利奥流放到了帝国边缘的岛屿——塞浦路斯，并任命他为凯里尼亚的指挥官。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这看似是一种宽恕，实则是一种慢性的终结。远离权力中心，困守在一座海岛要塞中，对于利奥这样的野心家而言，无异于精神的酷刑。历史没有详细记载他在凯里尼亚的具体生活，但可以想象，他每日巡视着威尼斯堡垒前身的那座城墙，眺望通往小亚细亚故乡的海路，心中充满不甘与愤懑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的结局颇具戏剧性。据编年史记载，在一次或许是精心策划的“意外”中，利奥从凯里尼亚城堡的塔楼上坠落身亡。是失足，是自杀，还是君士坦丁堡传来的秘密指令？真相已随他坠入地中海的海风之中。利奥的故事，为凯里尼亚的中世纪早期历史，增添了一抹悲情与阴谋的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与城市建筑息息相关的人物，是前述的威尼斯工程师<strong>乔瓦尼·吉罗拉莫·桑米凯利</strong>。他来自一个著名的军事建筑世家，他的叔叔<strong>米凯莱·桑米凯利</strong>是维罗纳城防的设计师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "桑米凯利在凯里尼亚的工作，是他职业生涯的关键一站。他留下的并非只是冰冷的城墙图纸。他的设计体现了文艺复兴后期最前沿的军事工程思想：低矮厚实的墙体、倾斜的壁垒、精心计算的火炮射界。他将凯里尼亚城堡从一个中世纪骑士的宅邸，改造为一件高效的战争机器。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "桑米凯利在给威尼斯元老院的报告中曾写道：“此地的防御，关键在于海陆协同。堡垒之眼，必须同时盯紧山脉与海洋。” 这句话精准概括了凯里尼亚地势的战略本质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然他的工事最终未能改变塞浦路斯归属的命运，但他设计的堡垒形态，却成为凯里尼亚直至今日最不可撼动的视觉地标与历史象征。这位工程师的灵魂，仿佛已浇筑进那些巨大的菱形棱角之中。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在凯里尼亚，最动人的传说与那艘千年沉船有关。当地老人会低声讲述，在风平浪静的月夜，有时能听到港口传来古老缥缈的歌声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，那艘希腊商船的船长是一位名叫<strong>安德罗斯</strong>的年轻人。这是他继承父业后的第一次远航，船上满载的不仅是货物，还有他对未婚妻的思念——他答应返航后便举行婚礼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "船只从凯里尼亚启航，驶向爱琴海。然而，一场突如其来的风暴袭击了船只。更致命的是，有迹象表明船底木材被船蛆严重蛀蚀。在沉没前夕，安德罗斯将给未婚妻的订婚戒指，塞进一个双耳陶罐中，并用蜡紧紧封住罐口。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“让大海保存我的誓言，直到它重见天日。” 据说这是他留下的最后一句话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说赋予了沉船博物馆里那些陶罐别样的温情。每一个被精心修复的罐子，在游客眼中，仿佛都可能藏着一段被时光冻结的私语。人们愿意相信，那枚戒指或许仍在某个尚未打开的陶罐里，等待着下一个千年的相遇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一则传说围绕堡垒中的一座塔楼，被称为“<strong>哭泣之塔</strong>”。据说在奥斯曼帝国占领后，一位被囚禁在此的威尼斯贵族少女，因思念故乡，夜夜在此哭泣。她的泪水渗入石缝，以致在某些潮湿的夜晚，塔楼的墙壁仿佛仍会渗出冰凉的水珠。这则传说，将战争的宏大叙事，凝结成了一个关于乡愁与失去的凄美意象。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的凯里尼亚，是一座在复杂历史地层上生活的现代城镇。威尼斯堡垒的倒影在清澈的海水中摇曳，土耳其语的招牌悬挂在古老石砌建筑的门廊上，游艇的桅杆紧挨着可能停泊过腓尼基商船的码头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂凯里尼亚，意味着读懂地中海文明的某种缩影：它从来不是单一文明的独奏，而是贸易、征服、迁徙与融合的交响。古希腊的陶罐、十字军的垛口、威尼斯的棱堡、奥斯曼的宣礼塔（虽不在此城醒目存在，但其统治影响深远），以及20世纪政治版图变动带来的人口印记，共同编织成它独特的身份地毯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到这里，你踏上的不是一片静止的历史废墟，而是一个层次依然鲜活的“人类学现场”。每一阵掠过港口的海风，都夹杂着跨越千年的低语——商贩的叫卖、船长的号令、士兵的步履、流放者的叹息，以及寻常百姓在朝代更迭中继续生活的韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小城的魅力，正在于它坦然展示着历史的层叠与断裂，却不试图给出简单的解释。它只是静静存在于碧海青山之间，邀请每一位来访者，成为它漫长故事最新的聆听者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tombs-of-the-kings-paphos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    国
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">国王陵墓</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tombs of the Kings</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/st-hilarion-castle-cyprus" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣伊拉里城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">St. Hilarion Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/painted-churches-troodos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特罗多斯彩绘教堂群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Painted Churches of Troodos</p>
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
