import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特拉科什恰恩城堡历史溯源｜哥特复兴之梦与德拉什科维奇家族四百年秘史',
  description: '探秘克罗地亚“水中城堡”特拉科什恰恩。它并非童话模板，而是一部由骑士、伯爵、悲剧与复兴交织的家族史诗。抛开明信片，走入它的真实岁月。',
}

export default function TrakoAnHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '克罗地亚', href: '/destinations/europe' },
            { label: '瓦拉日丁县', href: '/destinations/europe' },
            { label: '特拉科什恰恩城堡', href: '/attractions/trako--an-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特拉科什恰恩城堡・Trakošćan Castle・克罗地亚・瓦拉日丁县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在克罗地亚北部连绵的丘陵与森林之间，特拉科什恰恩城堡如一枚精致的戒指，镶嵌于静谧的湖水之上。世人皆惊叹于它哥特复兴式的浪漫轮廓与完美倒影，却鲜少追问：这座宛如从童话中直接搬出的城堡，为何会出现在这里？它的故事，远比其外表更为幽深复杂。<strong>它并非为童话而生，而是为一个家族四百年的荣耀、衰落与最后一抹文艺复兴之梦而建</strong>。抛开游玩攻略，走进特拉科什恰恩的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特拉科什恰恩城堡`} />
                <InfoRow label="英文名称" value={`Trakošćan Castle`} />
                <InfoRow label="正式名称" value={`Trakošćan Castle`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`瓦拉日丁县`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于特拉科什恰恩的起源，历史与传说交织，给它蒙上了一层神秘面纱。一种广为流传的说法将其与古罗马时期联系起来。有学者认为，其地名可能源于 <strong>“特拉西亚”（Thracia）</strong> ，指代曾在此驻扎的罗马军团——来自色雷斯的士兵。但更为确凿的记载始于中世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的雏形是一座建于 <strong>13世纪</strong> 的防御工事。在那个动荡的年代，匈牙利-克罗地亚王国的贵族们为了守卫北部边境，抵御可能的外来入侵，在战略要地上修筑了一系列堡垒。特拉科什恰恩便是其中之一，它最初的功能纯粹是军事性的：监视山谷，控制交通要道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于城堡名字的来源，另一则中世纪的传说则充满了骑士浪漫主义色彩。据说，在更早的时期，这里曾有一座名为“<strong>阿尔特拉克</strong>”（<em>Arttack</em>）或“<strong>特拉库斯</strong>”（<em>Trakus</em>）的堡垒，属于一位同名的传奇骑士。语言学上的考据则倾向于认为，“特拉科什恰恩”可能源自一个古老的斯拉夫词语，意为“荆棘之地”或“多刺的灌木丛”，这倒是与城堡周围原始的自然环境颇为相符。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在漫长的中世纪里，这座石头要塞几易其主，默默履行着它的军事职责。它真正命运的转折，始于 <strong>16世纪</strong> 一个显赫家族的入主。从此，城堡不再仅仅是一座堡垒，它开始与一个姓氏的血脉、野心与审美紧紧绑定。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特拉科什恰恩的历史，可以清晰地分为三个截然不同的阶段：<strong>中世纪的军事堡垒、鼎盛时期的贵族庄园，以及19世纪浪漫主义的终极幻梦</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个深刻的印记，刻在它最古老的核心墙体上。尽管历经多次改造，城堡底部仍保留着最初 <strong>13至14世纪</strong> 要塞的遗迹。厚实的石墙、狭小的窗户，诉说着它诞生的唯一目的——战争与生存。在奥斯曼帝国势力向欧洲腹地不断扩张的阴影下，这样的城堡是边境地区贵族与平民的生命线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个关键转折发生在 <strong>16世纪中期（约1540年）</strong>。克罗地亚-斯拉沃尼亚王国议会将城堡授予了 <strong>德拉什科维奇家族（Drašković）</strong>。这个决定，开启了城堡与这个家族跨越四个世纪的共生史。德拉什科维奇家族并非普通的乡绅，他们是克罗地亚历史上最具影响力的名门望族之一，出过多位总督（巴诺）、军事统帅和政治家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在家族最初的经营下，城堡逐渐从单纯的军事据点转变为带有文艺复兴风格的贵族居住庄园。防御功能依然重要，但生活的舒适性与象征家族地位的奢华开始被纳入考量。城堡见证了家族在<strong>反奥斯曼战争</strong>中的功勋，也陪伴他们度过了相对和平的繁荣岁月。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最耀眼、也最具决定性的一笔，落在 <strong>19世纪</strong>。<strong>1840年至1864年间</strong>，时任城堡主人的 <strong>约西普·德拉什科维奇伯爵（Count Juraj Josip Drašković）</strong> ，进行了一场彻底而浪漫的改造。他深受当时席卷欧洲的 <strong>“哥特复兴”（Gothic Revival）</strong> 运动影响。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "约西普伯爵在日记中曾写道：“古老的墙壁不应只讲述战争，它们应该吟唱诗歌，歌颂我们家族的历史与骑士精神的浪漫。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他拆除了大部分文艺复兴和巴洛克时期的增建部分，聘请顶尖建筑师，以想象中的“理想中世纪城堡”为蓝本，重新塑造了特拉科什恰恩。高耸的塔楼、尖拱窗、雄堞墙、华丽的内部木雕和彩绘玻璃……我们今天所见的如梦似幻的城堡形象，并非来自中世纪，而是19世纪一位怀旧贵族对家族辉煌历史的浪漫致敬与艺术创造。他甚至下令挖掘并扩大山脚下的天然池塘，形成了如今映照城堡英姿的完美人工湖，这是画龙点睛的最后一笔，将建筑与自然景观彻底融为一体，完成了这幅绝世之作。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特拉科什恰恩的灵魂，与德拉什科维奇家族的命运息息相关。在众多家族成员中，有两位人物的故事，尤其深刻地塑造了城堡的今天。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 约西普·德拉什科维奇伯爵 (Count Juraj Josip Drašković, 1770–1856)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是特拉科什恰恩的“再造之父”。约西普伯爵的一生，本身就是一部从帝国军人到文化庇护者的转型史。他早年效力于哈布斯堡王朝军队，参与了对抗拿破仑的战争，官至中将。然而，他人生的高光时刻并非在战场上，而是在他继承家族遗产之后。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为一位学识渊博的绅士，他不仅是政治家（曾任克罗地亚议会主席），更是艺术的狂热爱好者和收藏家。他对中世纪历史与骑士文化有着近乎痴迷的向往。当他从繁忙的公务中退隐，回到略显破旧的特拉科什恰恩时，一个宏大的计划在他心中成型：他要将这座祖传的堡垒，改造成一座能够永恒展现家族荣耀与骑士精神的“活博物馆”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的改造工程历时二十余年，倾注了巨大的心血与财富。他不仅关注建筑外观，更精心布置内部。他从欧洲各地搜集古董家具、武器、铠甲、绘画和书籍，其中许多是货真价实的<strong>16-17世纪</strong>珍品。他特意在城堡内设立了<strong>家族肖像画廊</strong>和<strong>兵器陈列室</strong>，将家族的历史实物化、场景化。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位曾到访的客人记录道：“伯爵的书房像一座小型图书馆，空气中弥漫着旧皮革与纸张的味道。他乐于向访客展示每一件盔甲的来历，仿佛它们昨日的主人才刚刚卸下。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约西普伯爵的愿景超越了个人居所。他将特拉科什恰恩视为德拉什科维奇家族精神传承的物质载体。他去世后，城堡基本保持了他在世时的模样，成为家族后代缅怀先人、展示血统的圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 伊莎贝拉·德拉什科维奇 (Izabela Drašković) 与未竟的悲伤</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说约西普伯爵赋予了城堡躯体与灵魂，那么他的孙女（一说为其他近亲后代）<strong>伊莎贝拉</strong>的故事，则为这座城堡注入了一缕挥之不去的哀婉诗意。关于她的确切生平记载不多，但在当地传说和家族记忆里，她是一位美丽而忧郁的少女。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，伊莎贝拉爱上了一位出身不被家族认可的年轻军官或艺术家。这场恋情遭到了家族的强烈反对。在19世纪严格的贵族礼教下，个人的情感必须为家族利益与声誉让路。被囚禁于城堡华丽牢笼中的伊莎贝拉，终日郁郁寡欢。传说她最喜欢待在城堡面向湖泊的某个塔楼房间，眺望远方，等待永远不会到来的爱人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，这场无望的爱情以悲剧收场。伊莎贝拉在年轻时就香消玉殒。她的房间，以及城堡中某些特定的角落，从此被一种淡淡的忧伤氛围所笼罩。甚至有“幽灵传说”称，在月圆之夜，能看到一个白衣女子的身影在湖边或走廊徘徊。无论事实如何，伊莎贝拉的故事代表了这座华丽城堡的另一面：在家族荣耀与宏大叙事之下，被牺牲的个人命运与无声的情感悲剧。她的存在提醒着参观者，石头城堡所封存的，不仅是辉煌，也有寂寥的叹息。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了家族正史，特拉科什恰恩的湖泊与城墙之下，还流淌着更为古老的民间传说。这些故事代代相传，为城堡的起源披上了神话的外衣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的传说，解释了城堡下那片美丽湖泊的由来。在骑士时代，一位名叫 <strong>“特拉库斯”</strong> 的年轻骑士统治着这片土地。他勇敢、英俊，深受领民爱戴。然而，他的美丽未婚妻却不幸早逝。特拉库斯骑士悲痛欲绝，他的眼泪如此之多，如此之深，竟汇集成了一汪清澈的湖水。为了永远守护爱人的记忆，也为了让自己时刻能看到这面“泪湖”，他在湖畔的山岩上修建了一座坚固的城堡。因此，这湖水被称为 <strong>“骑士之泪”</strong> ，而城堡也得名于这位痴情的领主。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡的<strong>“白色夫人”</strong>幽灵有关。这很可能与伊莎贝拉的故事相互融合。当地人说，在深夜或薄雾清晨，有时会看到一位身着旧式白色长裙的女子，静静伫立在最高的塔楼窗口，或缓缓行走于连接城堡与湖心小岛的步道上。她从不吓人，只是无声地出现，又悄然消失。老人们相信，这是城堡某位因爱情而心碎的女主人，她的灵魂依然眷恋着生前的居所，等待着永恒的安宁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论是否基于真实事件，都已成为特拉科什恰恩人文肌理的一部分。它们将自然的湖泊、人工的建筑与人类最原始的情感——爱情、忠诚与失去——连接起来，让冰冷的石头有了温度，也让游客在欣赏风景时，多了一份跨越时空的想象与共情。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们泛舟湖上，仰望特拉科什恰恩童话般的尖塔时，我们所见的，远不止一座美丽的建筑。它是一个家族长达四个世纪的<strong>记忆容器</strong>，是19世纪欧洲浪漫主义怀旧思潮在克罗地亚土地上的<strong>一座立体纪念碑</strong>，也是个人情感在宏大历史中留下的<strong>一道微妙刻痕</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值，不在于它是否“原汁原味”地来自中世纪（事实上它并非如此），而在于它清晰地展示了一个欧洲贵族家族如何理解自己的过去，并动用所有的艺术与财力，将这种理解具象化为一个可见、可居、可传承的实体。从防御要塞到浪漫主义杰作的演变，本身就是一部生动的欧洲建筑思想史与社会史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战之后，德拉什科维奇家族离开了这里，城堡于 <strong>1953年</strong> 被国有化，改为博物馆。这或许是它命运的又一次转折，从一个家族的私产，变成了全体国民乃至世界游客的共同文化遗产。如今，城堡内部依旧陈列着约西普伯爵当年搜集的众多珍宝，仿佛时间在他完成改造的那一刻便已凝固。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂特拉科什恰恩，便是读懂一种复杂的历史层次感：传说垫底，真实历史层层叠加，最终被一个浪漫的梦想所定格。它提醒我们，欧洲最动人的风景，往往不是天然形成，而是被人类的野心、才华、情感与记忆，经年累月、一层层浇铸而成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、内部参观路线与打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ibenik" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bale-istria-dinosaur-fossil-stone-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴莱（伊斯特拉半岛的恐龙化石与石屋小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bale / Valle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vrsar-istria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗尔萨尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vrsar</p>
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
