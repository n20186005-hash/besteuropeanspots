import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩拉斯特历史溯源｜黑山峡湾“石船”的前世今生与航海家传奇',
  description: '坐落在科托尔湾的佩拉斯特，是亚得里亚海畔被时光凝固的“石船”。探索其威尼斯时期的航海荣耀、海岛教堂的神迹传说，与一代代船长家族的尘封往事。',
}

export default function PerastBayKotorMontenegroHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '黑山', href: '/destinations/europe' },
            { label: '佩拉斯特', href: '/destinations/europe' },
            { label: '佩拉斯特', href: '/attractions/perast-bay-kotor-montenegro-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩拉斯特・Perast・黑山・佩拉斯特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在壮丽的科托尔湾，有一艘永不启航的“石船”。它不是堡垒，却比任何城堡都更坚不可摧；它并非都城，却孕育了亚得里亚海最传奇的航海家族。<strong>佩拉斯特</strong>，这座人口从未超过三千的峡湾小镇，凭借其无与伦比的航海技艺与忠诚，在威尼斯共和国的史诗中，赢得了“最勇敢的附属国”的尊称。这里的每一块岩石都浸透了海水与故事，每一座宫殿都沉默地讲述着船长、圣徒与海洋的千年契约。抛开游玩攻略，走进佩拉斯特的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩拉斯特`} />
                <InfoRow label="英文名称" value={`Perast`} />
                <InfoRow label="正式名称" value={`Perast`} />
                <InfoRow label="国家" value={`黑山`} />
                <InfoRow label="城市" value={`佩拉斯特`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩拉斯特的起源，深藏在科托尔湾翡翠色水道的褶皱里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与许多拥有明确建城纪年的城市不同，佩拉斯特是“生长”出来的。历史学家普遍认为，其作为定居点的雏形可追溯至<strong>12世纪</strong>左右。它并非诞生于某位君主的敕令，而是源于海洋本身的需求——一个为往来于海湾内外、需要躲避风暴与海盗的船只提供庇护的天然锚地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字 <strong>“Perast”</strong> ，很可能源于希腊语“Πηραστός”，意为“为海员提供庇护之人”或“穿越海峡者”。这个名字本身就预示了它与航海命运般的绑定。最初，这里只是零星散布的渔民和船员小屋，背靠险峻的圣伊利亚山，面朝海湾最狭窄、也最易防守的咽喉要道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>14世纪</strong>前，它一直笼罩在强大近邻科托尔城的阴影之下。然而，正是地理上的局促，迫使佩拉斯特人将目光完全投向海洋。他们没有广阔的平原用于耕作，唯有深邃的海湾是他们生存与荣耀的战场。这种独特的“城邦”基因，注定了它将走出一条与所有内陆城市截然不同的道路：不依靠土地，而依靠勇气、技术与对海洋法则的深刻理解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当威尼斯共和国的势力于<strong>15世纪</strong>延伸至亚得里亚海东岸时，佩拉斯特敏锐地抓住了历史的缆绳。它自愿归附，并非出于屈服，而是找到了一个能让其航海天赋最大化施展的强大平台。从此，这艘“石船”正式起锚，驶入了波澜壮阔的历史主航道。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩拉斯特的历史，是由海战、信仰与石匠的技艺共同镌刻的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个无法磨灭的印记，是 <strong>1452年</strong>的<strong>神圣海战</strong>。当时，奥斯曼帝国的海上力量不断西进，威胁整个亚得里亚海。一支奥斯曼舰队企图强行突破科托尔湾，直捣腹地。兵力薄弱的佩拉斯特，并没有坚固的城墙。它的防御，是 <strong>17艘小型战船</strong>和一代人的决绝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "镇上所有能战斗的男人都登上了船。他们利用对海湾每一处暗流、每一道峡风的熟悉，与数倍于己的敌军周旋。战斗惨烈，但佩拉斯特人守住了海湾的门户。这场胜利不仅拯救了科托尔，更让威尼斯元老院对其刮目相看。自此，佩拉斯特获得了珍贵的<strong>高度自治权</strong>，并被委以训练共和国海军舵手的重任。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们佩拉斯特人，生于桨座之下，葬于波涛之中。敌人看到的不是城墙，而是我们立于船首的身影。”——一份16世纪的佩拉斯特市政档案记载了当时市民的普遍信念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是海湾中两座宛若神迹的岛屿。尤其是那座人工岛——<strong>圣母岩岛</strong>。它的诞生源于一个悲壮的事件：<strong>1630年</strong>，佩拉斯特附近的海域发现一块总出现在同一位置的礁石。同年，两名佩拉斯特水手在此处遇海难得救，声称看到了圣母显灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "镇民们决定，要用自己的双手，围绕这块“圣石”建造一座岛屿和教堂。此后的<strong>200多年</strong>里，一代又一代佩拉斯特人遵循着一个神圣传统：每当一艘船安全返航，船员们就必须向沉没区投下一块石头。甚至，他们不惜凿沉俘获的敌船和老旧的舰船，以加快“造岛”进程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，一座拥有本笃会教堂的岛屿从无到有，巍然屹立。它不仅是信仰的纪念碑，更是佩拉斯特航海社区集体意志与坚韧精神的终极体现。每一块垒砌的石头，都是一次平安的归来、一个许下的誓言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是沿岸矗立的<strong>17座巴洛克宫殿</strong>。在<strong>17-18世纪</strong>的黄金时代，佩拉斯特的航海家族积累了巨额财富。他们没有将财富用于军事扩张，而是全部倾注于故乡的建设。这些宫殿并非为了炫耀，而是船长们的光荣榜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一座宫殿的正面，都装饰着家族的船徽、大理石浮雕的帆船图案，以及从耶路撒冷、埃及、君士坦丁堡带回的异域石雕。它们彼此紧邻，和谐而立，没有高墙深垒的隔阂。这构成了佩拉斯特最独特的城市肌理：一个基于海上兄弟情谊与平等荣耀的“船长共和国”的实体宣言。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在佩拉斯特，名人不是一个孤独的星座，而是一个璀璨的星系。他们几乎都拥有同一个姓氏前缀：“船长”。这里我们聚焦两位最具代表性的人物，他们的命运与这座城水乳交融。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位，是马蒂亚·祖马诺维奇船长</strong>。他生于<strong>1680年</strong>，是佩拉斯特航海智慧与勇气的化身。他的传奇，与一艘名为 <strong>“圣尼古拉斯”号</strong> 的战舰紧密相连。这艘由威尼斯共和国委托佩拉斯特建造的巨舰，是当时亚得里亚海最强大、最快速的战舰之一，而它的船长，正是祖马诺维奇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的职业生涯是一部在地中海对抗奥斯曼海盗与舰队的英雄史诗。但让他名垂青史的，是一次不可思议的“私人航行”。<strong>1715年</strong>，他获知奥斯曼军队攻陷了威尼斯在摩里亚（伯罗奔尼撒）的据点，并将许多基督教圣物掠往君士坦丁堡。其中据说包括<strong>圣十字架的碎片</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在没有共和国命令的情况下，出于虔诚的信仰，祖马诺维奇自行组织了一次大胆的突袭。他率领“圣尼古拉斯”号潜入土耳其海域，奇迹般地截获了运送圣物的船只，并将圣物成功夺回。这一壮举使他成为整个天主教世界的英雄。晚年，他将巨额财富奉献给故乡，资助教堂建设，并留下了著名的<strong>祖马诺维奇宫</strong>。他的墓志铭上刻着：“他曾令土耳其人闻风丧胆。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二位，是特里波·科科利亚船长</strong>。他代表着佩拉斯特人的另一面：探险精神与科学好奇心。科科利亚生活在<strong>18世纪</strong>，他的航行超越了军事与贸易，指向了当时欧洲最热衷的领域——知识考古。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位古代铭文与文物的狂热收集者。在漫长的航行中，他的船队总是穿梭于地中海东岸的古老遗址之间。他最著名的贡献，是在埃及发现并拓印了大量的象形文字碑文。这些拓片被送往欧洲，成为后来商博良等学者破译象形文字的<strong>关键原始材料</strong>之一。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“今天我购得三块来自底比斯的石碑残片，上面的符号如鸟如眼，神秘莫测。我将它们安置在舱室，海浪声仿佛变成了法老祭司的低语。”——一段据信出自科科利亚航海日志的记载。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科科利亚将自己收集的无数古代石碑、雕像碎片运回佩拉斯特，用以装饰他的<strong>科科利亚宫</strong>和镇上的教堂。漫步今天的佩拉斯特，你依然可以在教堂墙壁或宫殿庭院中，不经意间瞥见一块古埃及的浮雕或古希腊的铭文。它们沉默地证明，这里的船长不仅是战士和商人，更是古典文明的搬运工和守护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传奇人物从未真正离开。他们的宫殿依然面朝大海，他们的名字被刻在街巷，他们的故事融入了峡湾的风中。在佩拉斯特，历史不是教科书，而是活着的气息。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在佩拉斯特，最动人的传说不属于某位国王，而属于大海和礁石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣母岩岛的起源</strong>，本身就是一个最伟大的民间传说。但在这个核心传说之外，还有一个更古老、更神秘的故事在渔民间代代相传。据说，在科托尔湾最深的水域下，沉睡着一座<strong>水下教堂</strong>。教堂的钟楼顶尖，偶尔会在极其清澈平静的月夜，微微露出水面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说这座教堂属于一个比佩拉斯特更古老的定居点，因为居民的傲慢而被海神淹没。唯有最纯洁的心灵和最敏锐的眼睛才能看见。佩拉斯特的历代船长们，都相信这个传说是一种隐喻和警示：海洋给予一切，也能带走一切。因此，他们每次出海前，都会向圣母岩岛投去深深的一瞥，祈祷平安。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个独特的传统，是 <strong>“Fašinada”</strong> 节。每年<strong>7月22日</strong>傍晚，几乎全镇居民都会乘上装饰鲜花的船只，驶向圣母岩岛。船队围绕小岛航行后，人们会向海中投掷石块。这不是随意的仪式，而是<strong>1630年</strong>那个神圣承诺的年度续签。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“石头沉入水底，不是消失，而是变成了岛屿的一部分。我们的记忆和信仰，就是这样一年年堆积起来，直到成为可见的陆地。”——一位当地老人解释节日意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个仪式将历史、信仰和社区凝聚力完美地结合在一起。它提醒着每个人，他们今天站立的小镇和仰望的岛屿，并非天然存在，而是由无数祖先的誓言与行动，一石一木建造起来的永恒丰碑。传说在这里，不是虚幻的故事，而是仍在进行的现实。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的佩拉斯特，是一首凝固的海洋史诗。它没有机场、没有火车站，甚至没有一条像样的主干道。时间在这里仿佛特意放慢了流速，好让那些关于勇气、信仰、探索与荣耀的故事，能够被海浪一遍遍诉说，被石墙牢牢记住。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂佩拉斯特，你就读懂了亚得里亚海数百年的航海文明密码。它告诉你，荣耀可以不必通过征服广袤领土来获得，极致的专业、绝对的忠诚与社区的团结，同样能赢得历史的尊重。它那排面朝大海的巴洛克宫殿，不是贵族的城堡，而是平民船长的“光荣榜”，展示着一个基于能力与功绩的、近乎乌托邦式的社会理想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座“石船”永远停泊在峡湾中，但它承载的灵魂，曾航行到已知世界的尽头。来到这里，你不是在参观一个景点，而是在翻阅一本立体的、用石头和海水写成的家族编年史。每一阵风，都是翻页的声音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当潮水退去，古老的码头石阶再次露出水面，你会发现，历史从未走远，它只是换了一种方式，与永恒的山海共存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kolain" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科拉欣</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kolašin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sveti-stefan" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣斯特凡岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sveti Stefan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cetinje" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采蒂涅老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cetinje</p>
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
