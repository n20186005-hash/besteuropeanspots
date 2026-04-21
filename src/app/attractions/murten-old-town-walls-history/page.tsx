import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '穆尔滕历史溯源｜瑞士中世纪小城的战争记忆与湖光传说',
  description: '探秘瑞士穆尔滕，一座被时光凝固的中世纪堡垒。1476年那场改变欧洲格局的战役在这里打响，湖怪传说在城墙下低语。这是一座活着的史书。',
}

export default function MurtenOldTownWallsHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '穆尔滕老城及城墙', href: '/attractions/murten-old-town-walls-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`穆尔滕老城及城墙・Murten Old Town and Ramparts・瑞士・弗里堡州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在瑞士德语区与法语区的交界处，穆尔滕像一枚被时光仔细镶嵌的琥珀，凝固了<strong>1476年</strong>那个决定性的夏日。它不是典型的瑞士童话小镇，而是一座真正的、活着的堡垒。胜利的钟声曾在它的塔楼上敲响，中世纪的石板路至今回响着巡逻士兵的脚步声。伯尔尼湖的微风拂过三公里长的完整城墙，带来的不仅是水汽，还有一段关于联邦崛起、以弱胜强的传奇史诗。抛开游玩攻略，走进穆尔滕的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`穆尔滕老城及城墙`} />
                <InfoRow label="英文名称" value={`Murten Old Town and Ramparts`} />
                <InfoRow label="正式名称" value={`Murten Old Town and Ramparts`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`弗里堡州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穆尔滕的脉搏，从一开始就与<strong>伯尔尼湖</strong>和<strong>防御</strong>紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生远在文字记载之前。湖岸的桩屋遗址表明，早在新石器时代，这里就是人类栖息的理想之地。然而，真正赋予它城市形态的，是在<strong>12世纪</strong>。<strong>策林根公爵</strong>，这位中欧强大的建造者，看中了这片湖湾高地的战略价值。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大约在<strong>1159年</strong>，一座城堡和一座小城被建立起来，成为控制弗里堡地区与湖上通道的关键锁钥。“穆尔滕”这个名字本身就藏着古老的密码。它很可能源于凯尔特语的 <strong>“moridunon”</strong> ，意为 <strong>“湖边的堡垒”</strong> 。这个名字穿越了罗马与日耳曼的统治，在德语中演变为“Murten”，在法语中则成了“Morat”，但核心意象——湖与堡垒——从未改变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市最初的规划如同一个严谨的军事蓝图：东西走向的主街连接两座城门，紧凑的街区布局利于防守。它的存在，不是为了贸易繁荣，而纯粹是为了军事控制。这种与生俱来的“堡垒基因”，将在未来几个世纪里，不断被强化、被考验，并最终成就了它不朽的传奇。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穆尔滕的历史，是由石头与鲜血写就的。其中最浓墨重彩的一笔，无疑是<strong>勃艮第战争</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间来到<strong>1476年6月22日</strong>。野心勃勃的<strong>勃艮第公爵“大胆查理”</strong> ，率领着当时欧洲最精锐的雇佣军，兵临穆尔滕城下。他的目标是征服瑞士联邦，打通其领土的南北走廊。穆尔滕，这座仅有一千多居民的小城，成为了挡在他铁蹄前的第一块硬骨头。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们被命令不得出城，只能眼睁睁看着他们在城外烧杀抢掠。浓烟遮蔽了太阳，空气中满是焦糊味。”——同时代编年史中的片段。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，查理犯下了致命的错误：他分兵了。当他的主力围攻穆尔滕时，瑞士联邦的援军——主要来自伯尔尼、卢塞恩等州——已悄然集结。6月22日下午，一场突如其来的暴风雨成了瑞士人的完美掩护。他们从森林中怒吼着发动突击，勃艮第军队措手不及，阵型大乱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场<strong>穆尔滕战役</strong>以瑞士联邦的决定性胜利告终。大胆查理仓皇逃走，上万勃艮第士兵阵亡或被俘。这场胜利不仅拯救了小城，更一举奠定了瑞士联邦作为欧洲一支不可忽视的军事政治力量的地位。直到今天，穆尔滕的<strong>城市纹章</strong>上仍然骄傲地展示着这场胜利的日期：“1476”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个深刻的历史印记，就是环绕老城的<strong>城墙</strong>本身。你现在漫步其上的壮观步道，大部分并非1476年激战时的原物。那场胜利后，伯尔尼（作为新的统治者）和穆尔滕市民意识到防御工事的决定性作用。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>16世纪</strong>，他们以惊人的远见和毅力，用本地砂岩和石灰岩，在旧有土墙和木栅的基础上，重建并扩建了这座近三公里长的<strong>环形堡垒</strong>。它拥有独特的双通道结构、观察孔和炮台，是当时军事工程的典范。这堵墙此后从未再经历战火，却因此被完美保存，成为欧洲保存最完好的中世纪防御城墙之一。它从战争的工具，蜕变为和平的纪念碑。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穆尔滕的传奇，不仅由宏大的战役构成，也由个人的命运所编织。这里要讲述的，不是举世闻名的公爵或国王，而是两位将生命与这座城市深刻绑定的“小人物”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位是<strong>阿德里安·冯·布本贝格</strong>。他是<strong>伯尔尼</strong>派往穆尔滕的行政长官与军事指挥官。在<strong>1476年</strong>那个危急的春天，正是他负责穆尔滕的城防。史料记载，他并非一个张扬的猛将，而是一位严谨、坚韧的组织者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在勃艮第大军围城的两周里，他面临的内外压力难以想象。城外是虎视眈眈的强敌，城内是惶恐的市民和有限的守军。他的决策将决定城市的存亡。布本贝格选择了最稳妥也最艰难的策略：固守待援。他加固城墙，分配有限的物资，并不断派出信使与联邦军队联络，坚定着城内军民坚守的信心。最终，他的坚守等来了那场传奇的救援。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "胜利之后，布本贝格的名字与穆尔滕永远联系在了一起。他后来继续管理这座城市，并埋骨于此。他的故事，是无数在历史关键时刻，以责任和勇气承担起使命的普通领袖的缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位人物，则带着一丝神秘与争议的色彩——画家<strong>汉斯·弗里斯</strong>。他并非穆尔滕本地人，而是来自瑞士中部。但在<strong>1480年</strong>，也就是穆尔滕战役胜利仅仅四年后，他接受委托，为伯尔尼的市政厅创作了一幅描绘<strong>穆尔滕战役</strong>的巨幅壁画。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我询问了那些从战场上归来的人，他们告诉我军队如何列阵，骑士如何倒下，鲜血如何染红了草地与湖水。”——后世学者推测画家的创作准备。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这幅画虽已失传，但根据记载和后世摹本，它是欧洲最早尝试真实描绘特定历史战役场景的艺术作品之一。弗里斯没有将战争神化，而是力图再现其混乱与残酷。他笔下的瑞士长枪兵不是天降神兵，而是表情凝重、浴血奋战的普通士兵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过他的画作，穆尔滕战役的视觉记忆被固化并传播开来，成为了瑞士联邦凝聚力的核心图腾之一。弗里斯的艺术选择，让穆尔滕从一个地理名词，升华为一个代表勇气、团结与自由的国家级精神符号。这位画家用画笔，完成了对这座城市传奇的第二次“加冕”。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的硝烟之外，穆尔滕的灵气还滋养着古老的传说。而这一切，都与它身旁那片温柔的<strong>伯尔尼湖</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说是关于<strong>湖怪“穆尔滕鳗”</strong>。与苏格兰尼斯湖怪的骇人形象不同，穆尔滕的湖怪传说更显顽皮与接地气。相传，湖中住着一条巨大的鳗鱼，它并非邪恶的生物，而是湖泊的守护灵。它会故意用尾巴拍打渔民的船底，吓他们一跳；也会在暴风雨来临前，在湖面露出黝黑的脊背，作为对村民的预警。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更有趣的传说是关于<strong>湖底的村庄</strong>。老人们会说，在异常清澈宁静的夏日，当阳光以特定角度射入湖心，眼尖的人能瞥见水底有教堂的尖顶和屋顶的轮廓。传说那是一个古老的村庄，因为居民的傲慢与罪恶，在一夜之间沉入湖底。而穆尔滕城持续的繁荣与谦逊，正是对那个沉没村庄的永恒警示。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说并非凭空产生。它们映射了湖畔居民对这片既给予恩惠（渔获、水源）又暗藏风险（风暴、深水）的水域的复杂情感。将自然之力人格化为湖怪，将历史灾害（或许是真的发生过的小规模滑坡或洪水）演绎为神话，正是先民理解与解释世界的方式。走在穆尔滕的城墙上，看着波光粼粼的湖面，你仿佛能听到这些古老的低语，在风中与水波间轻轻回荡。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的穆尔滕，依然保持着<strong>1476年</strong>胜利后的基本样貌。走在它的街道上，你并非走进一个博物馆化的布景，而是步入了一个仍在呼吸的历史机体。这里的<strong>钟楼</strong>仍在报时，<strong>城门</strong>仍在每日开合，<strong>城墙步道</strong>仍是市民散步最爱去的去处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂穆尔滕，便是读懂“幸存”与“铭记”的价值。它见证了小国寡民凭借信念、地形与战术，战胜强大帝国的历史转折。它的每一块城墙砖石，都不只是防御工事，更是瑞士联邦国家认同的基石。这座城市本身，就是一座关于勇气、自治与和平的、无言的纪念碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是课本上冰冷的知识，而是脚下磨光的石板，是湖面吹来的风，是钟楼传来的、数个世纪未变的钟声。它邀请每一位来访者，暂时忘记时代的喧嚣，去触摸时间真实的质感，聆听一场决定欧洲命运的战役的回响，并在湖光山色中，感受传说与历史交织的独特魅力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何漫步城墙、寻找最佳观湖点、品尝当地特色，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/neuchatel-castle-collegiate-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳沙泰尔城堡与大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Neuchâtel Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/convent-of-saint-john-in-mustair" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米施泰尔圣约翰修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convent of Saint John in Müstair</p>
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
