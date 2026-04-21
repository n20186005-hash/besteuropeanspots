import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '南摩拉维亚历史溯源｜悬崖巴洛克巨堡弗拉诺夫的前世今生与贵族传奇',
  description: '矗立在迪耶河悬崖上的巴洛克明珠弗拉诺夫城堡。深入900年防御要塞的沧桑，揭开利希滕施泰因家族的兴衰，聆听伯爵夫人的未竟之梦。',
}

export default function VranovCastleBarokniPerlaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '弗拉诺夫-迪耶河畔镇（Vranov nad Dyjí）', href: '/destinations/europe' },
            { label: '弗拉诺夫城堡', href: '/attractions/vranov-castle-barokni-perla-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗拉诺夫城堡・Vranov nad Dyjí Castle・捷克・弗拉诺夫-迪耶河畔镇（Vranov nad Dyjí）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在捷克与奥地利的边境线上，迪耶河（Dyje）用亿万年的时间切割出一道幽深的峡谷。而在峡谷最险峻的崖顶，一座白色与赭石色的巴洛克宫殿如同从岩石中生长出来，以绝对威严的姿态俯瞰着脚下的国土与河流。这不是童话的布景，而是历经九百年烽火与权谋的<strong>弗拉诺夫城堡</strong>。它从一座朴素的边境堡垒，蜕变为让整个欧洲建筑师惊叹的巴洛克杰作，其围墙内封存着波西米亚的边疆史诗、贵族家族的野心与一位伯爵夫人未完成的艺术之梦。抛开游玩攻略，走进弗拉诺夫-迪耶河畔镇的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗拉诺夫城堡`} />
                <InfoRow label="英文名称" value={`Vranov nad Dyjí Castle`} />
                <InfoRow label="正式名称" value={`Vranov nad Dyjí Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`弗拉诺夫-迪耶河畔镇（Vranov nad Dyjí）`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇与城堡共享着“弗拉诺夫”（Vranov）之名，其词源与防御息息相关。这个名字最早可追溯至<strong>11世纪</strong>，源于古捷克语中与“守护”、“瞭望”相关的词汇，清晰地揭示了它最初的使命——<strong>波西米亚王国南部边境的防御前哨</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里并非一开始就拥有华丽的宫殿。在陡峭的石灰岩山脊上建立定居点，是纯粹的军事策略。迪耶河峡谷本身就是一道天然屏障，而崖顶的制高点则提供了无与伦比的视野，可以监控从奥地利方向可能到来的任何威胁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最早的<strong>木质堡垒</strong>建于<strong>1100年左右</strong>，由波西米亚的普热米斯尔王朝的封臣建造。它的存在，标志着中世纪王国对这片摩拉维亚南部边疆的掌控与经营。<strong>13世纪中叶</strong>，更具永久性的<strong>石质城堡</strong>取代了木结构，其核心是至今仍屹立不倒的巨型防御塔楼。城堡、悬崖、河流，三位一体，构成了一个几乎无法从正面攻克的军事堡垒。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地古老的民谚这样描述其地势：“雄鹰的巢穴建在云端，弗拉诺夫的主人站在鹰喙之上。敌人望见的只有天空与绝壁。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇则依附着城堡，在稍平缓的坡地逐渐形成，居住着为城堡服务的工匠、农民和士兵。城堡的兴衰，直接决定了小镇的命运。这种始于剑与盾的共生关系，为弗拉诺夫奠定了坚韧、孤高且与世隔绝的初始性格。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗拉诺夫城堡的历史，是一部从“军事机器”向“艺术圣殿”的惊人转变史。其中两个转折点，深刻重塑了它的面貌与灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个关键烙印是<strong>三十年战争（1618-1648）</strong>。这场席卷欧洲的宗教与政治浩劫，将弗拉诺夫彻底摧毁。<strong>1645年</strong>，瑞典军队攻占了这座当时已属于哈布斯堡王朝的城堡，并在撤退时将其付之一炬。昔日的边境雄鹰，只剩下被熏黑的断壁残垣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这场毁灭，引出了它历史上最华丽的篇章。<strong>1680年</strong>，城堡迎来了新主人——<strong>约翰·亚当·安德烈亚斯·冯·利希滕施泰因亲王</strong>。这个富可敌国的显赫家族，决心不在废墟上简单重建一座堡垒。他们聘请了当时奥地利最杰出的建筑师<strong>约翰·伯恩哈德·菲舍尔·冯·埃拉赫</strong>——他日后设计了维也纳的卡尔教堂和美泉宫的部分建筑。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "菲舍尔·冯·埃拉赫在信中写道：“亲王殿下，我将不在悬崖上建造石头，而是在岩石上谱写一首献给巴洛克的诗。让力量升华为美。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，从<strong>1687年至1695年</strong>，一场宏大的巴洛克改造工程开始了。核心诞生了城堡的灵魂空间——<strong>祖先厅</strong>。这个椭圆形、高达三层楼的宏伟大厅，顶部是令人目眩的湿壁画穹顶，描绘着利希滕施泰因家族神话般的先祖。坚硬的防御工事内部，被注入了流动的曲线、炫目的光影和歌颂家族荣耀的极致艺术。城堡从军事要塞，一跃成为彰显权力与品味的贵族夏宫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个深刻印记来自<strong>20世纪</strong>。二战后，根据《贝奈斯法令》，利希滕施泰因家族作为德意志族裔，财产被捷克斯洛伐克国家没收。<strong>1945年</strong>，城堡连同内部大量珍藏被国有化。它躲过了战火，却骤然告别了经营它近三个世纪的主人，转而成为一座向公众开放的<strong>国家博物馆与文化遗产</strong>。这个转折，让它从私人家族叙事，融入了更宏大的国家与民族共同记忆。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗拉诺夫最动人的人文篇章，并非由雄主写就，而是一位女性的艺术之梦与遗憾。她就是<strong>伊丽莎白·冯·利希滕施泰因伯爵夫人</strong>，生于<strong>1865年</strong>，逝世于<strong>1938年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊丽莎白出身于古老的<strong>海因里希伯爵家族</strong>，嫁入利希滕施泰因家族后，于<strong>19世纪末</strong>成为弗拉诺夫城堡的女主人。与她那些热衷于狩猎和政治的祖先不同，伊丽莎白是一位真正的文艺复兴式人物。她精通多国语言，热爱哲学、文学，更是一位天赋异禀的<strong>画家和室内设计师</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在丈夫相对冷漠的态度下，她将弗拉诺夫城堡视为自己毕生的艺术项目与精神家园。她认为城堡的巴洛克内饰虽然华丽，但已显得沉重过时。她主导了一场 <strong>“浪漫主义历史主义”风格</strong>的改造，旨在让城堡变得更宜居、更富有人情味与艺术气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她亲自设计家具草图，监督工匠制作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她将大量个人收藏的画作、东方瓷器、古代织物布置在各个房间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她甚至为城堡的图书馆增添了数千卷珍本藏书，其中许多是她亲自挑选的哲学与艺术著作。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在她的日记中，她写道：“弗拉诺夫不应只是家族图谱上的一个名字，或访客惊叹的冰冷画廊。它应当有温度，有呼吸，每一间屋子都应讲述一个故事，而故事的核心是美与沉思。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，她的梦想被时代巨轮碾碎。<strong>第一次世界大战</strong>的爆发，奥匈帝国的解体，以及随后家族经济的衰退，使她的许多宏大改造计划被迫中断。她晚年目睹了家族的衰微，并在二战阴影笼罩欧洲之前，在城堡中去世。她倾注心血创造的许多室内装饰，在国有化后或因疏于维护而损坏，或因不符合当时博物馆的“正统”叙事而被移除替换。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当游客漫步在城堡中，在那些略显空旷或风格混杂的房间里，细心者依然能捕捉到伊丽莎白夫人留下的痕迹——一个特定图案的瓷砖壁炉，一扇她设计的彩绘玻璃窗，或是档案里她娟秀的设计手稿。她不是青史留名的政治家或将军，但她是弗拉诺夫城堡<strong>最后一位，也是最具个人情感与艺术灵魂的塑造者</strong>。她的故事，为这座巨石宫殿注入了易碎而高贵的人文温度。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与所有古老的城堡一样，弗拉诺夫也萦绕着神秘的传说。其中最著名的，是关于城堡下方<strong>迪耶河深渊</strong>与<strong>白贵妇</strong>的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在很久以前，城堡领主的女儿爱上了一位出身贫寒的年轻渔夫。暴怒的领主将青年囚禁在城堡最深处的地牢，并告诉女儿他已丧命。心碎的小姐身着白色婚纱，从面对峡谷的最高塔楼一跃而下，坠入滚滚迪耶河。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，每当月圆之夜，或暴风雨来临前夕，人们会看见一位<strong>白衣女子的幽影</strong>出现在城堡的露台或塔楼窗口，静静凝视着下方的峡谷。据说，她并非带来厄运，而是在等待和守护。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老一代的伐木工和渔夫声称：“当你听到峡谷里传来不寻常的水声，那不是风，是白贵妇在低语。她提醒靠近深渊的人小心，因为她深知失去一切的痛苦。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与城堡的<strong>水井</strong>有关。这口挖穿岩石直至河面的深井，是城堡的生命线。相传在建造时，工匠们无论如何也无法找到水源。后来，一位神秘的老人指点，必须在井底放置一块从圣地带来的“活石”。领主照做后，清泉果然涌出。人们说，正是这口井的永不干涸，庇护着城堡历经围困而不陷落。至今，游客仍能看到这口令人惊叹的<strong>80米深井</strong>，而那块“活石”究竟何在，已成为永恒的谜。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客穿过弗拉诺夫小镇，仰望那座凌驾于万物之上的白色城堡时，所见的不仅是风景明信片上的绝美构图。那是<strong>九百年边疆风云的凝固</strong>，是<strong>巴洛克艺术征服自然险峻的宣言</strong>，是<strong>一个豪门家族兴衰的实体编年史</strong>，更是一位女性将生命注入石头的、未完成的诗篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂弗拉诺夫，便是读懂中欧历史的一个深邃截面。它见证了防御工事如何演变为艺术表达，贵族荣耀如何与个人命运交织，最终又如何归于整个民族共有的文化遗产。在这里，每一块岩石都听过战争的号角与建筑的凿音，每一扇窗户都曾映照过统治者的雄心与梦想家的侧影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它小众，因为它远离布拉格的热闹喧嚣，静守一隅；它深刻，因为它将历史的层层肌理，毫无保留地展露在迪耶河峡谷凛冽而清澈的空气之中。拜访弗拉诺夫，是一次与时间深度的对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dolni-kounice-rosa-coeli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    下
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">下库尼采罗莎·科利女子修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dolní Kounice (Rosa Coeli)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cheb-old-town-square-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    海
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">海布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cheb</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/loket-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛克特城堡（波西米亚的钥匙）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Loket Castle</p>
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
