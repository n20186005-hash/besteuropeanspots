import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃尔茨城堡历史溯源｜深藏德国密林、850年未陷落的中世纪骑士家族传奇',
  description: '探秘德国秘境！埃尔茨城堡850年未陷落，骑士家族传奇、黄金公牛传说与活化石般的中世纪生活，尽在这座密林古堡。',
}

export default function BurgEltzHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '德国', href: '/destinations/europe' },
            { label: '莱茵兰-普法尔茨', href: '/destinations/europe' },
            { label: '埃尔茨城堡', href: '/attractions/burg-eltz-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃尔茨城堡・Burg Eltz・德国・莱茵兰-普法尔茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在摩泽尔河与莱茵河之间幽深的埃尔茨森林里，时间似乎绕道而行。这里矗立着一座从未被攻陷、也从未易主的城堡——埃尔茨城堡。它不是童话的模板，而是骑士精神与家族血脉在石头中凝固的真实史诗。八百五十年的烽烟未曾将它化为废墟，反而让它成为一部仍在书写的家族编年史。抛开游玩攻略，走进埃尔茨的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃尔茨城堡`} />
                <InfoRow label="英文名称" value={`Burg Eltz`} />
                <InfoRow label="正式名称" value={`Burg Eltz`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`莱茵兰-普法尔茨`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事始于一条名为 <strong>埃尔特巴赫（Eltzbach）</strong> 的幽静溪流。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1157年</strong>，一份由神圣罗马帝国皇帝 <strong>腓特烈一世（红胡子巴巴罗萨）</strong> 签署的赠与证书上，首次出现了“埃尔茨”之名。这份文件将此地赐予一位名叫 <strong>鲁道夫·冯·埃尔茨</strong> 的骑士。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡最初的形态，并非今日所见之宏伟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一处建在70米高岩石之上的简易木石堡垒，扼守着连接艾费尔高原与摩泽尔河谷的古老商道。最初的埃尔茨骑士，职责是守护这条帝国动脉，并向过往商旅提供“保护”——当然，也收取相应的费用。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“埃尔茨”之名的由来，与那条溪流密不可分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Elz”可能源自古高地德语的“alantia”，意指“生长”或“繁茂之地”。这恰好映衬了城堡所处的环境：它深藏于一片丰茂到令人窒息的原始森林谷底，三面被埃尔茨河蜿蜒环绕，天然形成一道难以逾越的护城河。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种选址，充满了中世纪骑士的实用主义与生存智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不追求山巅的威严，而是拥抱谷地的隐秘与安全。正是这份与生俱来的低调与坚固，为它未来数百年的传奇奠定了基石。当同时代许多城堡在战火中沦为断壁残垣时，埃尔茨却因这份“不起眼”，得以在历史的惊涛骇浪中安然幸存。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃尔茨城堡的历史并非由宏大的帝国战役写就，而是由一次次精明的抉择、幸运的豁免与坚韧的守护构成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个关键印记，是 <strong>1331年至1336年的“埃尔茨之争”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，特里尔大主教 <strong>鲍德温·冯·卢森堡</strong> 为巩固自身势力，联合周边领主，对不服从的埃尔茨、申堡等骑士家族发动了围攻。他们在埃尔茨城堡对面的山脊上，修建了一座名为 <strong>“楚申堡”</strong> 的进攻城堡，居高临下，日夜轰击。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，埃尔茨城堡岿然不动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场持续数年的围困，最终以一份和约告终。埃尔茨家族保有了自己的领地和权利，而那座进攻城堡则在历史中湮没，只剩残垣。这场胜利，首次证明了埃尔茨在军事上的近乎不可攻克。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们坚守在自己的岩石上，如同橡树扎根于土地。敌人的火焰可以烧焦树叶，却无法动摇树根。”——这段箴言被后世认为源自那段围困岁月，刻画出家族的韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个，也是决定性的印记，是 <strong>1495年的《永久和平条例》</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份由皇帝 <strong>马克西米利安一世</strong> 颁布的诏书，史称 <strong>“黄金公牛”</strong> ，旨在终结帝国境内无休止的私战。它规定，任何未经宣战的袭击或城堡围攻都属于非法。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对于埃尔茨这样的城堡，这无异于一道“免战金牌”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它使城堡得以从连绵的军事冲突中彻底抽身。当三十年战争（1618-1648）的浩劫席卷德意志，将无数城堡化为焦土时，埃尔茨因其家族成员的政治斡旋和这份诏书的余荫，奇迹般地未受战火波及。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1701年</strong>，家族第三支系的 <strong>汉斯·雅各布</strong> 伯爵开始了大规模的巴洛克风格改造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非摧毁中世纪核心，而是在其上优雅地叠加。古老的骑士大厅获得了华丽的灰泥天花板，房间装上了高大的玻璃窗。这次改造，标志着埃尔茨从纯粹的军事堡垒，转向一座适宜居住的贵族官邸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这三重印记——军事上的坚守、法律上的豁免、审美上的演进——共同作用，让埃尔茨像一枚琥珀，完整封存了从罗马式到巴洛克风格的建筑层积，成为一部“活着的”中世纪建筑史。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃尔茨的历史，归根结底是 <strong>冯·埃尔茨家族</strong> 的历史。三十余代人的血脉传承，未曾间断。其中有两位人物，尤为关键地塑造了城堡的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是 <strong>菲利普·卡尔·冯·埃尔茨（1736-1810）</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他生活的18世纪，贵族靠地租生存的模式已显颓势。而菲利普·卡尔展现出了非凡的商业远见。他做出了一个改变家族命运的决定：投资遥远的 <strong>图林根森林</strong> 的银矿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不是一次盲目的投机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他亲自学习矿业知识，派遣可靠的管理者，并引入了当时先进的开采技术。银矿带来了滚滚财富，这些财富没有用于挥霍，而是被谨慎地管理起来。他设立了 <strong>“埃尔茨银矿基金”</strong> ，这份基金像一座永不枯竭的金库，确保了家族后代即便在政治动荡、农业歉收的年代，也有充足的资金来维护这座巨大的城堡。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“城堡的石头需要面包，而面包来自远方的山峦。”菲利普·卡尔在日记中写道。他的务实精神，将家族从没落的边缘拉回，为城堡的永恒提供了经济上的“护城河”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是 <strong>约翰·雅各布·冯·埃尔茨（1607-1651）</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他活跃于惨烈的三十年战争期间。当时，新教与天主教势力在德意志大地厮杀，选边站队错误往往意味着灭顶之灾。埃尔茨家族是天主教徒，而城堡所在的地区局势复杂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约翰·雅各布的智慧在于“灵活的忠诚”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他先后为天主教联盟的 <strong>蒂利伯爵</strong> 和皇帝 <strong>斐迪南二世</strong> 效力，凭借军功晋升至骑兵上校。但他更深知保全家族根基高于一切。当瑞典新教军队势大时，他通过巧妙斡旋和支付巨额“贡献金”，使埃尔茨城堡免遭洗劫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的故事没有壮烈的牺牲，却是乱世中生存艺术的典范。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他用金币和 diplomacy（外交手腕），而非单纯的武力，保卫了家园。战后，他利用自己的影响力和人脉，积极修复与各方的关系，确保了家族在新时代的延续。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这些或开拓、或守护的先祖，赋予了埃尔茨城堡超越建筑的灵魂。他们不是神话英雄，而是精明、坚韧、有时甚至略带保守的实干家。他们的肖像至今悬挂在城堡的骑士大厅里，目光如炬，仿佛仍在看守着这份传承了八百五十年的家业。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与许多古堡一样，埃尔茨也被神秘的传说所环绕。这些传说并非凭空想象，往往根植于城堡独特的现象或历史片段。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说是关于 <strong>“护城金鹅”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在城堡最深的地下密室里，栖息着一只由纯金打造的巨大鹅像。它被强大的魔法守护，是整个城堡财富与幸运的源泉。每当家族遭遇重大危机，金鹅便会发出一声低鸣，只有纯正的埃尔茨血脉才能听见。这声鸣叫会指引当家人找到渡过难关的方法。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人口耳相传：“埃尔茨的根基不是岩石，是黄金。但那黄金有生命，化作鹅的形状。它不离开，城堡就永不陷落。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，很可能隐喻着家族那个神秘的 <strong>“银矿基金”</strong>——那个在危机时刻总能提供支持的无形宝藏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与城堡的 <strong>“镜骑士”</strong> 有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在城堡一面古老的 <strong>凸面镜</strong> 中，据说午夜时分会映出一位不属于房间内任何人的骑士影像。他身着15世纪的铠甲，沉默伫立。传说他是中世纪一位为保护城堡秘密而死的埃尔茨骑士，灵魂与城堡融为一体，成为永恒的哨兵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更有趣的是一个关于 <strong>“永不熄灭的炉火”</strong> 的传统。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡厨房里巨大的壁炉，据说自建成之日起，其中的火种就未曾完全熄灭过。即便在无人居住的时期，也会留有微弱的炭火。这被视作家族香火延续、人丁兴旺的象征。这个习俗，生动地体现了埃尔茨城堡作为“家”而非“博物馆”的本质——它从未真正死去，一直保持着生活的温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，如同藤蔓缠绕着古堡的石墙，为冰冷的历史增添了温热的血肉与奇幻的色彩。它们让来访者感受到，这里不仅仅是古迹，更是一个仍然呼吸着、被记忆与想象共同滋养的生命体。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你穿过密林，突然与这座耸立于岩巅、尖塔林立的梦幻城堡相遇时，你所惊叹的不仅是它的美丽。你看到的，是一部拒绝终结的中世纪家族史诗，一种在颠簸历史中保持延续的惊人韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃尔茨的价值，在于它的“完整性”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种完整，是建筑从未沦为废墟的完整，是产权从未旁落的完整，更是生活记忆层层累积的完整。每一件家具、每一幅肖像、每一册账簿，都原址保留，讲述着连续的故事。它不像许多修复一新的城堡那样，像一个精美的空壳。这里，历史的气息沉淀在每一个角落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它见证了神圣罗马帝国的封建秩序，经历了宗教战争的洗礼，躲过了拿破仑时代的 secularization（世俗化）风暴，又在两次世界大战的夹缝中安然无恙。它本身，就成了一种生存哲学的象征：不追求称霸一方的显赫，而追求深根固柢的永恒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂埃尔茨，便是读懂欧洲历史中那些沉默的大多数——那些并非王侯将相，却凭借智慧、团结与一点运气，让家族灯火跨越世纪而长明的古老家族。探访这里，是一次穿越时光的对话，是与一种近乎失传的延续性的邂逅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何穿越魔法森林、探访内部宝藏厅与最佳拍摄机位，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gorlitz-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格尔利茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Görlitz Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/miltenberg-main-pearl-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米尔滕贝格（美因河畔的“珍珠”）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Miltenberg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bebenhausen-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝本豪森修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bebenhausen Abbey</p>
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
