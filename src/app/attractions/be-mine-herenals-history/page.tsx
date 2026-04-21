import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝灵恩历史溯源｜从黑暗矿井到光明遗产，比利时工业秘境的前世今生',
  description: '深入比利时林堡省地下，探秘欧洲最大煤矿遗址的百年兴衰。见证矿工的汗与泪，聆听机械轰鸣沉寂后，一座工业庞然大物如何重获人文新生。',
}

export default function BeMineHerenalsHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '林堡省', href: '/destinations/europe' },
            { label: '贝灵恩矿场遗产区', href: '/attractions/be-mine-herenals-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝灵恩矿场遗产区・Beringen (Be-MINE)・比利时・林堡省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有童话般的尖顶与广场，只有沉默的井架、恢弘的洗煤厂和蜿蜒的铁轨，勾勒出20世纪欧洲工业力量的冰冷轮廓。<strong>贝灵恩</strong>，曾是比利时煤炭王国跳动的心脏，一个为整个国家输送光与热的“黑金”源头。如今，轰鸣归于寂静，但那段关于地火、汗水与集体记忆的史诗，却在这片名为 <strong>Be-MINE</strong> 的后工业景观中被永久封存。抛开游玩攻略，走进贝灵恩的尘封往事，遇见属于它的钢铁、煤灰与重生传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝灵恩矿场遗产区`} />
                <InfoRow label="英文名称" value={`Beringen (Be-MINE)`} />
                <InfoRow label="正式名称" value={`Beringen (Be-MINE)`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`林堡省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝灵恩的故事，始于地底深处的黑暗与热量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然这片林堡省东部的土地早已有人居住，但其现代身份的真正塑造，要等到<strong>1901年</strong>。那一年，专业的钻探确认了此地蕴藏着储量惊人的优质煤炭层。<strong>1906年</strong>，<strong>“贝灵恩煤矿公司”</strong> 正式成立，标志着一段持续近一个世纪的工业传奇拉开帷幕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“贝灵恩”这个名字本身，源自更古老的日耳曼语，意为“<strong>贝尔加人的居住地</strong>”。然而，从二十世纪初开始，它的含义被彻底改写。它不再是单纯的聚居点，而变成一个庞大、精密且封闭的工业宇宙的代名词。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "煤矿的建立，并非偶然。当时，比利时正值第二次工业革命高潮，对能源的需求如饥似渴。林堡省地下绵延的煤田，被称为国家的“<strong>工业命脉</strong>”。贝灵恩矿址的选定，经过严格计算，旨在建设一个集开采、洗选、运输于一体的超级现代化煤矿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公司规划了一个雄心勃勃的蓝图：不仅要挖煤，更要建造一个功能齐全的“<strong>矿工之城</strong>”。于是，围绕矿井，宿舍、学校、医院、教堂、商店乃至体育场馆拔地而起。这里仿佛一个国中之国，数万矿工及其家庭在此生活、工作，命运与矿井的升降机紧紧捆绑。城市的肌理与节奏，第一次被深深地刻上了工业的齿轮印记。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：帝国的引擎与战争的燃料（1910s-1940s）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝灵恩煤矿在<strong>1914年</strong>达到首次产煤高峰，旋即被一战的炮火阴影笼罩。德军占领比利时后，这座高产煤矿成为了重要的战时资源。矿工们在极端压力和危险下被迫增产，为德国的战争机器添柴加火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一战结束后，煤矿迅速重建并扩大规模。至<strong>1930年</strong>，贝灵恩已拥有数个深井，配套的巨型洗煤厂和铁路网使其效率冠绝欧洲。然而，<strong>1940年</strong>，纳粹德国的铁蹄再次踏来。矿井又一次被占领，并被纳入德国的战时经济体系。大量矿工被强制劳动，或被送往更残酷的东方前线。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位老矿工在回忆录中写道：“井架上的灯，在战争年代从未熄灭。但它照亮的不是希望，而是我们被掠夺的祖国。我们从地下挖出的每一块煤，都仿佛在灼烧自己的灵魂。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "两次世界大战的创伤，让贝灵恩的“黑金”沾染了沉重的历史底色。它不仅是繁荣的基石，也成为被争夺、被榨取的战略资源，矿工们的命运在宏大历史叙事中浮沉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：辉煌顶峰与猝然落幕（1950s-1980s）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战结束后，欧洲重建迎来煤炭的“黄金时代”。<strong>1950年代至1960年代</strong>，是贝灵恩的全盛时期。矿工人数超过万人，日产煤量惊人。当时建起的<strong>第11号井架</strong>和庞大的<strong>洗煤厂</strong>，至今仍是地标，其规模与工业设计美学令人震撼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不仅是生产中心，更是充满活力的社区。矿工俱乐部、乐队、足球队（贝灵恩矿工队曾叱咤比甲联赛）构成了独特的文化。下井的危险与井上的生活，交织成一代人坚不可摧的集体身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，繁荣之下暗流涌动。<strong>1958年</strong>的马塞讷矿难（并非在贝灵恩，但震动全国）敲响了安全警钟。更重要的是，更廉价的中东石油和进口煤炭开始冲击市场。政府补贴难以为继，矿井变得不再经济。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1989年9月28日</strong>，最后一车煤炭从贝灵恩矿井运出。随着升降机永久停摆，一个时代轰然落幕。巨大的厂区瞬间沉寂，留下的是废弃的机器、空荡的车间和数千名失业矿工茫然的未来。这份突如其来的寂静，是贝灵恩历史上最深刻、也最复杂的印记。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>卢西亚诺·法布里（Luciano Fabri）—— 用雕塑凝固矿工灵魂</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在贝灵恩，一位意大利移民艺术家的名字与这里的土地深深融合。他叫<strong>卢西亚诺·法布里</strong>（1936-2007）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "法布里并非土生土长的林堡人。他出生于意大利，青年时恰逢二战后比利时招募外籍矿工的浪潮。<strong>1956年</strong>，20岁的他作为“客籍矿工”来到贝灵恩，怀着淘金梦，却一头扎进了地下千米的黑暗世界。在矿井里，他经历了所有矿工的日常：潮湿、闷热、粉尘、危险，以及同志间生死与共的情谊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但法布里内心有一团不同的火。在繁重体力劳动之余，他从未停止绘画和雕刻。矿井生活没有扼杀他的艺术天赋，反而成了他唯一的、也是最深刻的创作源泉。他用捡来的废木料、石头，甚至煤矿石本身进行创作。他的作品主题永远只有一个：<strong>矿工</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "法布里曾说：“我不是在雕刻石头或木头，我是在雕刻我的工友，雕刻他们的疲惫、他们的骄傲、他们被煤灰覆盖却依然闪烁的眼神。地下一千米，那里有最真实的人类史诗。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的雕塑风格粗粝、质朴，充满表现主义力量。扭曲的形体、巨大的手掌、深邃的眼窝，直白地诉说着重压、团结与坚韧。起初，这只是工友间的私人爱好，但很快，他的才华被广泛认可。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1980年代</strong>，煤矿危机日益严重，法布里的艺术获得了另一层意义——<strong>为即将消失的行业和人群树立纪念碑</strong>。他的大型作品开始出现在贝灵恩及周边城镇的公共空间。最著名的莫过于放置在贝灵恩矿场入口处的群雕《矿工》，几个高大的青铜人像，仿佛刚刚升井，带着永恒的疲惫与尊严，凝视着他们曾奋斗一生的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "煤矿关闭后，法布里成为这段历史最重要的非官方记录者。他的作品不再是个人情感的宣泄，而是整个社区乃至一个工业时代的集体记忆载体。如今，在Be-MINE遗产区内，游客仍能看到他的多处作品。他本人也从一名矿工，转型为备受尊敬的驻地艺术家，直到生命终点。法布里的传奇，完美诠释了贝灵恩的精神内核：在最坚硬、最黑暗的现实中，孕育出最柔软、最不朽的人文光芒。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在贝灵恩，除了可见的钢铁巨构，地下世界还流传着一个不可见的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "矿工们世代口耳相传，在煤矿最深、最古老的巷道里，居住着一位名为 <strong>“地心之灵”</strong> 或 <strong>“煤矿守护者”</strong> 的存在。它并非可怕的怪物，而更像一个性格乖张的精灵。据说它由凝聚的煤层瓦斯、地下水和亿万年的寂静构成，形态变幻不定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，这位守护者对人类态度矛盾。它尊重勤劳、勇敢且遵守安全规程的矿工，有时会以轻微的气流指引他们避开危险岩层，或让矿灯在关键时刻更加明亮。工人们私下相信，井下偶尔听到的、似有似无的敲击回声，就是它在与他们交流。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，它对傲慢、马虎或贪婪之人毫不留情。那些不顾警告、过度开采或忽视同伴安全的人，可能会遭遇莫名的机械故障、迷失在熟悉的巷道里，或总是听到令人不安的窃窃私语，直至他们改正行为或离开矿井。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老矿工们会告诫新人：“你要敬畏黑暗。它不只是没有光，它本身是有生命的。你尊重煤，煤才会为你让路；你尊重黑暗，黑暗才会保护你。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，本质上是矿工们将极端危险且不可控的工作环境“人格化”的结果。它将地质风险转化为一个可以沟通、甚至可以遵循规则的对象，是一种心理上的适应与慰藉。它也蕴含了朴素的生态警示：大地并非无尽的索取对象，需要敬畏与平衡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着矿井关闭，“地心之灵”的传说似乎也沉睡了。但有人说，当遗产区的攀岩者在巨大的旧矸石山上攀登，或孩子们在深坑改造的泳池里嬉戏时，或许仍能感觉到，那股古老而沉默的力量，正在地下静静地注视着地上世界的新生。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在Be-MINE广阔的遗址上，你踩踏的每一步，都回响着二十世纪欧洲工业文明的沉重跫音。这里不是一处被精心美化的复古布景，而是一具真正工业巨兽的骨骼标本。高耸的井架是它刺向天空的脊梁，迷宫般的厂房是它复杂的内脏，铁轨则是它延伸向远方的血脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂贝灵恩，就是读懂一段<strong>以人力挑战地心、以煤炭驱动大陆</strong>的磅礴历史。它关乎技术狂想、集体劳作、经济变迁，更关乎成千上万普通人的生命轨迹：他们的汗水、恐惧、 camaraderie（同志情谊）以及在时代转折处的迷茫。这里见证了资本主义的辉煌榨取，也铭刻了社区文化的顽强生长。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从“黑金”涌动的能源心脏，到沉寂荒废的工业废墟，再到如今融合了博物馆、探险公园、文化空间的<strong>后遗产地标</strong>，贝灵恩完成了一次深刻的转型。它没有试图抹去自己“生产性”的过去，而是将那段历史的全部质感——宏伟、艰涩甚至疼痛——作为最宝贵的展品呈现于世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史不只有宫殿与战场，还有厂房与矿井；英雄不只有骑士与君主，还有那些满脸煤灰、深入地狱为世界带来光热的无名者。在这里，<strong>工业不是背景，而是主角本身</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何攀爬巨型矸石山、探索井下世界、规划一日行程？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/binche-medieval-walls-gilles-carnival" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Binche</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arlon-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔隆古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arlon Roman Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/grand-curtius" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔提乌斯博物馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grand Curtius</p>
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
