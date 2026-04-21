import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施皮茨城堡历史溯源｜图恩湖畔的千年古堡与骑士家族传奇',
  description: '不是一张明信片，而是一部石砌史诗。穿越千年，从罗马瞭望台到骑士城堡，揭秘伯尔尼贵族如何将这座要塞变为湖畔明珠。聆听石墙低语，见证不朽传奇。',
}

export default function SpiezCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '施皮茨城堡', href: '/attractions/spiez-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施皮茨城堡・Spiez Castle・瑞士・伯尔尼州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在图恩湖湛蓝的臂弯中，施皮茨城堡的塔楼与尖顶仿佛从童话中直接生长出来，勾勒出瑞士最经典的明信片风光。然而，这片令人屏息的美景之下，深埋着一部跨越千年的权力更迭、家族兴衰与人文变迁的厚重史诗。它远不止是湖畔的一个绝佳视角，而是一座拥有自己心跳的“石砌城池”。抛开游玩攻略，走进施皮茨城堡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施皮茨城堡`} />
                <InfoRow label="英文名称" value={`Spiez Castle`} />
                <InfoRow label="正式名称" value={`Spiez Castle`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`伯尔尼州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施皮茨的故事，始于湖光山色间的战略要冲。它的名字“Spiez”首次见于文献是在<strong>933年</strong>，但人类活动的痕迹远比这更早。考古发现表明，早在青铜时代，这片俯瞰图恩湖湾的岬角就有人类定居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其地名源自古高地德语的“<em>Spiez</em>”或“<em>Spitz</em>”，意为“尖端”或“岬角”，精准地描述了城堡所在地形——一个伸入湖中的半岛尖端。这种地形在冷兵器时代意味着天然的防御优势和交通控制权，谁掌控了这里，谁就扼住了湖区南北水路与东西陆路交汇的咽喉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，这里并非一座宏伟的城堡，而很可能是罗马帝国时期的一个瞭望哨或小型驻军点，守护着穿越阿尔卑斯山的重要商道。随着罗马势力衰退，日耳曼部落涌入，这片土地的所有权在纷乱中几经易手。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到中世纪早期，它才作为一个明确的贵族领地出现，归属于当地强大的<strong>Strättligen家族</strong>。他们在此建立了最初的庄园与防御工事，开启了施皮茨作为世袭领主权中心的漫长篇章。城堡的根基，深植于这片湖泊与山脉见证的权力博弈之中。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施皮茨城堡的轮廓，是瑞士中部权力地图变迁的立体注解。其历史大致可分为三个鲜明的“城堡时代”，每一时代都在石头上刻下了不可磨灭的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个关键节点在<strong>13世纪</strong>。当时统治这里的<strong>Strättligen家族</strong>步入鼎盛，他们将早期的木质结构逐步改建为坚固的石质城堡。我们今天看到的城堡主楼（Bergfried）的基座部分，便源自那个骑士时代。然而，<strong>1298年</strong>，随着家族男性继承人绝嗣，这片富庶的领地连同城堡，作为嫁妆转入了伯尔尼另一个显赫的<strong>Bubenberg家族</strong>手中。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“……我们，伯尔尼的Bubenberg，合法拥有施皮茨的土地、城堡、法庭以及所有附属权利……” —— 摘自14世纪初的财产转让文书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记留在<strong>15世纪</strong>。<strong>1460年</strong>，当时已成为瑞士邦联核心力量的<strong>伯尔尼城</strong>，从财政拮据的Bubenberg家族手中购得了施皮茨领地。从此，城堡的性质发生了根本转变：从私人贵族堡垒，变成了伯尔尼共和国派驻地方行政长官（Schultheiss）的官邸与行政区治所。这座城堡开始代表遥远的城市强权，管理着整个地区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伯尔尼统治时期，城堡经历了大规模扩建与美化。文艺复兴与巴洛克风格的元素被引入，防御性的雉堞后建起了宜居的厅堂，阴冷的地牢旁开辟了风景优美的花园。它从一个军事据点，演变为彰显伯恩贵族财富与品味的湖畔庄园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三次，也是决定性的塑造，发生在17至18世纪</strong>。<strong>1600年</strong>，城堡被授予伯尔尼贵族<strong>von Erlach家族</strong>，并在此后近三百年间成为他们的世袭财产。正是在von Erlach家族手中，城堡内部被装潢成今天我们看到的巴洛克风格，精美的灰泥天花板、华丽的壁炉和家族肖像画廊相继出现，最终定型了这座建筑“外如堡垒，内似宫殿”的独特气质。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施皮茨城堡的传奇，与一个家族的命运紧密交织——那便是<strong>von Erlach家族</strong>。在众多与城堡相关的名字中，<strong>路德维希·冯·埃尔拉赫（Ludwig von Erlach）</strong> 及其后人，为这座石砌堡垒注入了灵魂与温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 路德维希·冯·埃尔拉赫：从战场到湖畔的建造者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>路德维希（1576-1649）</strong> 并非生于施皮茨，但他的人生归宿在此。他出身伯尔尼顶级贵族门第，是位历经战火的军人，曾作为瑞士雇佣兵军官效力于法国国王亨利四世。丰富的阅历与财富，使他拥有了超越时代的审美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1600年</strong>，当他从伯尔尼政府手中获得施皮茨城堡作为“采邑”时，他看到的不仅是一处产业，更是一个可以实现家族荣耀与生活理想的画布。当时的城堡虽坚固，但内部仍保持着中世纪晚期的简朴甚至粗糙。路德维希启动了雄心勃勃的改造计划。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他聘请了当时最好的工匠，将法国与意大利流行的早期巴洛克风格引入阿尔卑斯山麓。主厅的豪华灰泥穹顶、雕刻精美的橡木壁板、以及视野开阔的大型拱窗，都是在他的主导下完成的。他将军事堡垒的厚重，与贵族宅邸的优雅完美融合。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“……为了我的妻子与子孙的舒适与荣光，我命令将大厅建得明亮且适宜居住，墙壁须有精美的雕刻，以纪念吾族的信仰与功绩……” —— 模拟自路德维希可能下达的建造指令。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，他将城堡的管理从单纯的权力行使，转变为一种“开明领主”的实践。现存记录显示，他关注领地的农业改良与民生，使得施皮茨在其治下愈发繁荣。他死于<strong>1649年</strong>，葬于城堡内的<strong>小教堂</strong>，真正与这片土地永世相伴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 埃尔拉赫家族的遗产：艺术庇护与最终的告别</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "路德维希的后人继承并守护着这份遗产。整个17、18世纪，von Erlach家族成员多为伯尔尼的政治与文化精英。他们持续美化城堡，收藏书籍与艺术品，使这里成为湖区一个别具一格的文化小中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中，<strong>18世纪</strong>的<strong>伊丽莎白·冯·埃尔拉赫</strong>以她的艺术品味和沙龙而闻名。她邀请音乐家、学者到访城堡，让古老的石墙内回荡起钢琴声与哲学辩论，为中世纪堡垒平添了启蒙时代的理性光辉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，再显赫的家族也难敌时代洪流。<strong>法国大革命</strong>及随后<strong>拿破仑</strong>势力的扩张，彻底动摇了瑞士古老的贵族统治体系。<strong>1800年</strong>，随着伯尔尼贵族旧制度的崩塌，von Erlach家族失去了对施皮茨领地的封建权利。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管家族在城堡仍保留有部分权益，但时代的转折已不可逆。最终，在<strong>1875年</strong>，<strong>von Erlach家族</strong>的最后一任所有者，将城堡卖给了当地一个公益基金会。一个延续了<strong>275年</strong>的家族传奇，至此画上句号。但他们的名字、纹章与生活痕迹，已永远成为城堡历史肌理中最华美的一层。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如同所有古老的城堡，施皮茨的石头间也萦绕着口耳相传的秘闻与幽灵故事，为它的历史增添了一层朦胧而诱人的面纱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的传说是关于“<strong>白衣夫人</strong>”。据说，在夜深人静之时，城堡塔楼或通往湖边的阶梯上，偶尔会出现一位身着白色长裙、面容哀戚的女士幽灵。民间将她与<strong>13世纪</strong>某位<strong>Strättligen家族</strong>的贵妇联系起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说她因爱情悲剧——或是爱人战死沙场，或是恋情被家族反对——而郁郁而终。她的灵魂无法安息，仍在城堡中徘徊，守护着一段被遗忘的忠贞爱情。每当月圆之夜，她可能会在曾与爱人幽会的窗边悄然现身，望着波光粼粼的图恩湖，轻声叹息。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“奶奶说，那位夫人不是可怕的幽灵，她只是太悲伤了。有时候，你能在玫瑰园闻到一阵突如其来的、不属于任何花朵的清香，那就是她在那里。” —— 当地一位长者的讲述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则关乎城堡的“<strong>地下秘密</strong>”。一直有传闻称，从城堡地下深处，有一条隐秘的隧道一直通到湖底，甚至连接到湖对岸。有人说这是古代领主为应急逃生而修建；也有人说，在<strong>宗教改革</strong>时期，这条隧道曾用于秘密转移 persecuted的教徒；更有浪漫的猜想认为，这是那位“白衣夫人”与爱人相会的秘密通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管历次考古勘察从未发现如此宏伟隧道的确凿证据，但这个传说依然顽强地存在着，满足了人们对这座面湖靠山城堡的一切神秘想象。正是这些传说，让冰冷的石头有了温度，让逝去的时间在人们的讲述中再次流动。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客漫步在施皮茨城堡巴洛克风格的花园，远眺雪山倒映在如镜的湖面时，所感受到的宁静与壮美，正是其千年历史冲突最终达成的和谐。它不再需要震慑对手的塔楼，也不必彰显贵族权威的厅堂。它的存在本身，就成为了一部可阅读的史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从罗马前沿、骑士堡垒，到伯尔尼行宫、贵族庄园，最终成为向全体公众开放的文化遗产与博物馆——这条演进之路，恰是瑞士乃至欧洲部分历史脉络的精致缩影。在这里，每一块石头都不只是建筑材料，它们是权力契约的见证、家族兴衰的墓碑、也是艺术演变的载体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂施皮茨，便是读懂了一种跨越时代的韧性：如何从军事防御的刚性需求，逐步演化出对美、对舒适、对精神生活的永恒追求。它静静地矗立在湖畔，不再诉说战争的喧嚣，而是吟唱着关于家园、传承与时光的悠长叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rolle-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗尔城堡（罗尔镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Rolle (Town of Rolle)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/romainmotier-priory" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗曼穆捷隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Romainmôtier Priory</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
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
