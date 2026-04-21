import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '包斯卡历史溯源 | 立窝尼亚骑士团权力博弈与半座废墟宫殿的双面传奇',
  description: '在拉脱维亚边境，一座半是废墟半是宫殿的城堡，见证了立窝尼亚骑士团的末日、公爵的野心与帝国的炮火。走进包斯卡，触摸东欧权力游戏的冰冷石墙。',
}

export default function BauskaCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '包斯卡城堡', href: '/attractions/bauska-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`包斯卡城堡・Bauska Castle・拉脱维亚・包斯卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非童话里完美的城堡，而是一份被战争劈成两半的历史手稿。一半是<strong>15世纪</strong>坚不可摧的<strong>立窝尼亚骑士团</strong>要塞，冷峻的哥特式废墟诉说着军事修会的铁血秩序；另一半是<strong>16世纪</strong>华丽转身的<strong>文艺复兴宫殿</strong>，明亮的白墙与拱窗记载着库尔兰公爵的世俗野心。这种奇特的“双重人格”，让包斯卡城堡成为波罗的海东岸权力变迁最独特的纪念碑。抛开游玩攻略，走进包斯卡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`包斯卡城堡`} />
                <InfoRow label="英文名称" value={`Bauska Castle`} />
                <InfoRow label="正式名称" value={`Bauska Castle`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`包斯卡`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "包斯卡的诞生，源于一条河与一场无止境的边境摩擦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>穆萨河</strong>与<strong>梅梅尔河</strong>在此交汇，形成天然水道。但在中世纪，这里并非乐土，而是<strong>立窝尼亚</strong>与<strong>立陶宛大公国</strong>之间模糊而危险的边界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的基石在<strong>1443年</strong>落下。下令建造的，是当时波罗的海地区最强大的力量——<strong>条顿骑士团</strong>的分支，<strong>立窝尼亚骑士团</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的目的极其明确：巩固东部防线，监控并震慑立陶宛人，同时牢牢掌控这条重要的贸易与军事航道。城堡的名字 <strong>“Bauska”</strong> ，很可能源自古拉脱加尔语，意为“多沙之地”或“沼泽中的堡垒”，精准描述了它易守难攻的地理特征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的城堡，与优雅无关。它是一个纯粹的战争机器。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "骑士们利用两河交汇处的山丘，建造了不规则的五边形要塞。厚重的城墙、陡峭的斜坡、深挖的壕沟，一切设计都为了生存与威慑。它是一座被架在火药桶上的边境前哨，从诞生之日起，呼吸的便是紧张与警惕的空气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有浪漫的市集传说，只有哨兵日复一日凝视东方地平线的目光。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个深刻印记，是<strong>立窝尼亚骑士团</strong>的建立与崩塌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡在近百年间，不断被强化，成为骑士团国东南角最坚固的盾牌。然而，盾牌终有碎裂之时。<strong>1559年</strong>，骑士团总团长<strong>哥特哈德·凯特勒</strong>做出了一个改变命运的决策：将城堡所在的区域抵押给波兰国王。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们已无力独自抵御来自四面八方的压力……为了土地的存续，必须寻求强大保护者的荫庇。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ">" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 立窝尼亚议会决议的潜在心声" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这并非简单的租赁，而是立窝尼亚秩序崩溃的序曲。骑士团国在内忧外患下分崩离析。而包斯卡，这座边境堡垒，率先被卷入更宏大的政治漩涡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是<strong>从要塞到宫殿</strong>的华丽蜕变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着骑士团国解体，<strong>哥特哈德·凯特勒</strong>摇身一变，成为波兰-立陶宛联邦册封的<strong>库尔兰和瑟米利亚公爵</strong>。他的目光，从防御外敌转向了经营内部、彰显权力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，从<strong>16世纪80年代</strong>开始，一场惊人的改造在包斯卡上演。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在旧要塞的北侧，一座全新的、风格迥异的宫殿拔地而起。它不再是阴沉的哥特式，而是明亮、开阔的<strong>文艺复兴风格</strong>。巨大的窗户引入阳光，华丽的灰泥装饰取代了战斗的痕迹，宽敞的大厅用于举办宴会而非军事会议。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旧堡与新宫，比肩而立，一道城墙之隔，却是两个时代、两种权力的无声对话。这里不再是边境哨所，而是库尔兰公国最南端、也最奢华的行宫与行政中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是<strong>北方战争</strong>的致命一击。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "18世纪初，<strong>彼得大帝</strong>的俄罗斯与<strong>瑞典国王查理十二世</strong>为争夺波罗的海霸权展开死斗。夹在中间的库尔兰公国和它的城堡，无法幸免。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1706年</strong>，这座见证了近三百年风雨的城堡，迎来了终结时刻。撤退的俄军为了不让它落入瑞典人之手，执行了残酷的“焦土政策”——炸毁了城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "爆炸声后，骑士团的旧要塞部分被彻底废弃，化为如今所见的浪漫废墟。而较新的公爵宫殿，也严重受损，虽经修复却难复旧观。战争，最终赋予了包斯卡那副标志性的、残缺而深刻的面容。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>哥特哈德·凯特勒</strong>：末代骑士与开国公爵的双面人生" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解包斯卡，无法绕过这位复杂而关键的人物——<strong>哥特哈德·凯特勒</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他生于<strong>1517年</strong>的德意志西部，却将一生与波罗的海东岸紧紧捆绑。青年时代，他加入<strong>立窝尼亚骑士团</strong>，凭借能力与手腕步步高升，最终在<strong>1559年</strong>当选为骑士团<strong>总团长</strong>。此时，他接手的已是一个烂摊子：内部宗教改革冲击，外部俄罗斯沙皇<strong>伊凡雷帝</strong>的军队虎视眈眈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的决策决定了包斯卡乃至整个地区的命运。为求生路，他选择让骑士团国效忠波兰-立陶宛联邦，并接受世俗化。<strong>1561年</strong>，根据《维尔纽斯条约》，骑士团国正式解散，凯特勒则受封为世袭的<strong>库尔兰和瑟米利亚公爵</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我从上帝的战士，变为国王的封臣。剑与十字架的方向，已然改变。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ">" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 凯特勒心态转变的写照" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是身份转变后，他启动了包斯卡城堡的宫殿化工程。这座建筑，成为他个人从宗教军事领袖转型为世俗统治者的最佳隐喻。他晚年长居于此，治理公国，直到<strong>1587年</strong>在米塔瓦去世。包斯卡记录了他人生后半程所有的抱负与焦虑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>安娜女公爵：领地与婚姻的政治筹码</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与包斯卡渊源极深的名人，是库尔兰女公爵<strong>安娜</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她是公爵<strong>弗里德里希·威廉</strong>的遗孀，年轻守寡。她的婚姻与居所，是18世纪初欧洲宫廷政治的缩影。她曾短暂嫁给后来的俄国沙皇<strong>彼得二世</strong>，但这桩政治婚姻随着小沙皇的早夭而终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后，安娜大部分时间居住在库尔兰，而包斯卡城堡是她的重要行宫之一。在这里，她并非快乐的女主人，更像是一位被各方势力觊觎的“领地看管人”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，俄国强势干预库尔兰内政，甚至为她“安排”了一位著名的情人兼执政者——<strong>恩斯特·约翰·冯·比隆</strong>。安娜在包斯卡的生活，笼罩在圣彼得堡的阴影之下。城堡的宫殿里，可能回荡着关于权力、阴谋与无奈的低语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到<strong>1730年</strong>，她意外被俄国枢密院迎立为<strong>全俄罗斯女皇</strong>，即<strong>安娜·伊凡诺芙娜</strong>。她离开了库尔兰和包斯卡，前往冰封的圣彼得堡。包斯卡于她，或许只是一段充满压抑的插曲，但她的存在，却将这座边境城堡与俄罗斯帝国的宫廷诡计短暂地连接了起来。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在拉脱维亚的民间传说中，古老的建筑常与“守护灵”或“未安息的灵魂”相连。包斯卡城堡也不例外，它最著名的传说，关乎一位“白衣女士”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在公爵宫殿尚未建造、骑士团仍统治旧堡的时代，一位立窝尼亚骑士爱上了一位当地的拉脱维亚姑娘。这种跨越阶层与种族的爱情，为骑士团的戒律所不容。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "悲剧不可避免地发生。骑士被迫与一位德意志贵族小姐订婚。在订婚典礼的前夜，绝望的拉脱维亚姑娘从城堡最高的塔楼一跃而下，坠入冰冷的穆萨河。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，每当月圆之夜，或是风暴来临之前，城堡的废墟中就会出现一个身着白衣的纤细身影。她沉默地徘徊在古老的城墙上，望着河水，或凝视着后来建起的宫殿窗棂。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人会说：“那不是恶灵，是悲伤本身。她在等待一个永远不会回来的承诺，也在提醒我们，最坚硬的石头堡垒，也围不住人心。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更有趣的是，这个传说后来与历史发生了奇妙的交融。有人说，那位“白衣女士”的形象，在安娜女公爵居住时期也曾被仆役瞥见。人们私下议论，那或许是安娜孤独与压抑灵魂的投射，与古老的悲剧产生了共鸣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说真假难辨，但它为城堡冰冷的石块注入了人性的温度。无论是中世纪的爱而不得，还是十八世纪的政治婚姻之痛，那份属于女性的哀愁，仿佛穿透时光，凝结成了包斯卡月夜下一抹共同的、凄清的白色影子。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们站在穆萨河畔，仰望这座一半嶙峋破碎、一半端庄完整的奇特建筑时，我们看到的不是单一的“景点”，而是一部以石头写就的立体史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的废墟部分，是<strong>中世纪欧洲最后的军事修会</strong>——立窝尼亚骑士团——雄心与没落的化石。它的宫殿部分，则是<strong>波罗的海德意志贵族</strong>在世俗化浪潮中，对权力、文化与精致生活的追求。中间那道清晰的裂痕，则是<strong>北方战争</strong>乃至整个欧洲列强争霸留下的残酷伤疤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "包斯卡城堡拒绝被简单定义。它不像新天鹅堡那样提供童话幻梦，也不像卡尔卡松那样展现统一的恢弘。它诚实地展示着历史的多层与断裂、荣耀与创伤。它让你触摸到战略的冰冷、野心的温度，以及炮火的无情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂包斯卡，便是读懂了波罗的海东岸那个被称为“众强逐鹿之场”的复杂地域。它的每一块砖石，都在低语着关于生存、转型与毁灭的故事。来到这里，你不是参观一座城堡，而是步入历史本身，聆听它沉默而磅礴的回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sigulda-medieval-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡古尔达中世纪城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigulda Medieval Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aluksne-latvia-lake-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿卢克斯内</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alūksne</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ventspils-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    文
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">文茨皮尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ventspils Castle</p>
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
