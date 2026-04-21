import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥尔维耶托历史溯源｜奇迹之城大教堂的前世今生与名人传奇',
  description: '探秘意大利悬崖之城奥尔维耶托。从“圣血奇迹”到卢卡·西诺雷利的惊世湿壁画，一座大教堂如何凝聚信仰、艺术与权力的史诗。',
}

export default function OrvietoCathedralHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥尔维耶托大教堂', href: '/attractions/orvieto-cathedral-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥尔维耶托大教堂・Orvieto Cathedral・意大利・奥尔维耶托`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在意大利翁布里亚大区，一座孤峰拔地而起，顶端矗立着用黑白条纹讲述故事的奇迹——<strong>奥尔维耶托大教堂</strong>。它并非诞生于寻常的信仰，而是源于一桩轰动中世纪的“圣血奇迹”。这座教堂是教皇的权杖、天才画家的画布，更是整座悬崖之城的信仰王冠。抛开游玩攻略，走进奥尔维耶托的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥尔维耶托大教堂`} />
                <InfoRow label="英文名称" value={`Orvieto Cathedral`} />
                <InfoRow label="正式名称" value={`Orvieto Cathedral`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`奥尔维耶托`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥尔维耶托的起源，深埋在伊特鲁里亚人的墓穴之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在公元前七世纪，伊特鲁里亚人选中了这座由火山凝灰岩构成的天然要塞。他们在坚硬的岩体中开凿水井、墓室和纵横交错的隧道网络。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>“Urbs Vetus”</strong>——拉丁语中的“古城”，被认为是其现代名称的渊源。罗马帝国衰落後，它因其易守难攻的地势，再度成为乱世中的避难所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪早期，它作为独立的城邦崭露头角。但真正将其推上历史前台的，是<strong>教廷</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十三世纪，教皇与神圣罗马帝国皇帝腓特烈二世的斗争白热化。几位教皇将奥尔维耶托作为庇护所和行宫。这座悬崖上的孤城，就此从一座军事要塞，转变为 <strong>“教皇之城”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的命运，也因此与一场撼动欧洲信仰根基的神迹紧紧绑定。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1290年的博尔塞纳奇迹</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所有故事的起点，是一个普通神父的信仰危机。<strong>1263年</strong>，一位波希米亚神父在途经拉齐奥的博尔塞纳镇举行弥撒时，对“圣体变体论”（即饼酒变为基督身体与血）心生怀疑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此时，祭坛上的圣饼竟然渗出了鲜血，染红了圣体布（Corporal）。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "教廷档案记载：“鲜血如此真实，浸透了亚麻布，形成了身体的轮廓。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这件圣物被火速送至当时教皇<strong>乌尔班四世</strong>所在的奥尔维耶托。教皇为此颁布敕令，确立了 <strong>“基督圣体圣血节”</strong> 。为了供奉这块圣布，他下令建造一座无与伦比的大教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>建筑史诗：跨越三个世纪的交响</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1290年，奠基仪式举行。最初的设计师可能是<strong>阿诺尔福·迪·坎比奥</strong>（佛罗伦萨圣母百花大教堂的设计者）。但这座教堂的建造，是一场长达三个世纪的马拉松。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其恢弘的<strong>立面</strong>，是意大利哥特式的巅峰之作。如同巨大的金色圣龛，覆盖着璀璨的马赛克镶嵌画与精美的浮雕。负责雕塑的，是<strong>锡耶纳</strong>与<strong>翁布里亚</strong>最顶尖的工匠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的，是<strong>洛伦佐·马伊塔尼</strong>。他从1310年起主持工程近四十年，为立面底层创作了四座青铜浮雕，描绘《创世纪》故事，其精细程度令人叹为观止。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教堂的内部，则是另一场艺术的狂欢。它见证了从晚期哥特式到文艺复兴初期的风格流转。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说大教堂的外壳是集体智慧的结晶，那么它的灵魂，则由几位天才艺术家亲手注入。其中最具戏剧性的一位，是<strong>卢卡·西诺雷利</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>卢卡·西诺雷利：描绘“最后审判”的魔鬼契约者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "西诺雷利在今天的名气或许不如他的学生<strong>米开朗基罗</strong>，但在十五世纪末，他是意大利最受追捧的壁画大师之一。<strong>1499年</strong>，他接到了奥尔维耶托大教堂一项至高无上的委托：完成圣布里奇奥礼拜堂的湿壁画。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个礼拜堂的壁画主题宏大而可怖——《最后审判》与《世界末日》。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此前，另一位大师<strong>弗拉·安杰利科</strong>已绘制了拱顶部分。西诺雷利需要填充四周巨大的墙壁。他用了短短两年（1499-1502年），以惊人的精力和想象力完成了这项巨作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的笔下，<strong>复活的肉体</strong>从泥土中挣扎而出，肌肉线条充满了解剖学般的精确与力量。被罚入地狱的灵魂在魔鬼的驱赶下扭曲、坠落，场景充满了暴烈的动感与绝望的情绪。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "艺术史家瓦萨里在《名人传》中记载了一个传说：西诺雷利心爱的儿子不幸去世，悲痛欲绝的他将儿子的尸体剥去衣服，仔细描摹，只为“展现他对艺术的深沉热爱，以及他在描绘人体时所持有的坚不可摧的决心”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这种对<strong>人体形态</strong>的深刻研究和极具冲击力的表现，直接影响了后来在西斯廷教堂绘制同一主题的米开朗基罗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，关于西诺雷利，当地还流传着一个更黑暗的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>艺术家的“幽灵”：多位大师的共铸</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "西诺雷利并非唯一的明星。在他之前，<strong>弗拉·安杰利科</strong>这位虔诚的修士画家，为礼拜堂拱顶带来了完全不同的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他笔下的<strong>基督</strong>和<strong>先知</strong>，宁静、庄严，散发着神性的光辉。两位大师的风格在同一空间内形成天堂与地狱、宁静与动荡的极致对比，这本身就是艺术史上的一大奇观。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，不要忘记主持立面的<strong>马伊塔尼</strong>，以及更早参与设计的<strong>阿诺尔福·迪·坎比奥</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座教堂就像一个巨大的磁石，吸引并凝聚了从十三到十六世纪意大利中部最杰出的艺术灵魂。它并非一人之功，而是一部由多位“导演”接力完成的信仰与艺术的史诗电影。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥尔维耶托，关于大教堂最令人毛骨悚然的传说，并非关于圣血，而是关于那位描绘了地狱的画家——<strong>卢卡·西诺雷利</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人低声讲述，西诺雷利为了获得无与伦比的技艺以完成《最后审判》中那些骇人的人体，与<strong>魔鬼</strong>签订了契约。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，他将灵魂出卖，换来了精准描绘肌肉与痛苦的能力。更有甚者说，画中那些扭曲的魔鬼和受罚的灵魂肖像，其原型就是夜间到访他画室的恶魔。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一个古老的传说版本这样描述：“每当午夜钟声响起，礼拜堂壁画上的魔鬼眼睛会泛起红光。那是契约依然生效的标记，它们在等待，等待画家的灵魂最终加入它们的行列。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说或许源于他画作中那股超越时代的、近乎残忍的写实力量。当人们站在那些极具张力的壁画前，感受到直击心灵的震撼时，便不禁想象：若非有超自然力量的帮助，凡人怎能描绘出如此真实的地狱图景？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，艺术家的天才，在民间叙事的发酵下，变成了一个浮士德式的悲壮传奇，为这座神圣的教堂增添了一层幽暗而迷人的人文阴影。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你穿过翁布里亚的绿色丘陵，望见那座屹立于悬崖之巅的 striped（条纹）教堂时，你看到的不仅是一座建筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你看到的是一桩<strong>中世纪神迹</strong>的永恒纪念馆，是<strong>教皇权柄</strong>在乱世中的一座堡垒，是<strong>锡耶纳</strong>与<strong>佛罗伦萨</strong>艺术流派交锋与融合的战场，是<strong>西诺雷利</strong>笔下那挣扎在希望与毁灭间的人类群像。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥尔维耶托大教堂的魅力，在于它的 <strong>“层叠”</strong> 。地质的层叠（火山凝灰岩），历史的层叠（伊特鲁里亚、中世纪、文艺复兴），以及艺术的层叠（从马伊塔尼到安杰利科再到西诺雷利）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它小众，因为它从未是罗马或佛罗伦萨那样的权力中心；它伟大，因为它浓缩了信仰最剧烈的震颤与艺术最极致的表达。在这里，每一道黑白条纹，都在讲述一段关于奇迹、权力与人性深渊的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/teatro-olimpico-vicenza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维琴察奥林匹克剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Olimpico</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mantua-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    曼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">曼托瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mantua Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/palmanova-star-fortress-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕尔马诺瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Palmanova</p>
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
