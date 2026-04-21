import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮尔吉历史溯源 | 希俄斯岛几何迷宫的前世今生与刮痕彩绘传奇',
  description: '深入希腊希俄斯岛的“刮痕彩绘”古村皮尔吉。解密黑白几何纹的千年渊源，讲述热那亚统治、大屠杀悲剧与顽强重生。一场纯粹的拜占庭中世纪时空之旅。',
}

export default function PyrgiChiosHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '希俄斯岛', href: '/destinations/europe' },
            { label: '皮尔吉', href: '/attractions/pyrgi-chios-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮尔吉・Pyrgi・希腊・希俄斯岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在爱琴海深处，希俄斯岛西南岸，隐藏着一座令人过目不忘的几何迷宫——皮尔吉。它的墙壁上，镌刻着不是普通的涂料，而是传承了数个世纪、名为“xysta”的刮痕彩绘艺术。这些繁复严谨的黑白几何图形，是盾牌，是符咒，也是一部刻在墙上的无声史诗。这里并非寻常的旅游打卡地，而是一座活着的、由历史创伤与生存智慧共同浇筑的中世纪要塞村落。抛开游玩攻略，走进皮尔吉的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮尔吉`} />
                <InfoRow label="英文名称" value={`Pyrgi`} />
                <InfoRow label="正式名称" value={`Pyrgi`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`希俄斯岛`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "皮尔吉的根，深植于拜占庭帝国的晚期与爱琴海纷乱的航海时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村庄的确切诞生之年已漫漶不清，但历史学者普遍认为，其雏形形成于<strong>11世纪至13世纪</strong>之间。当时，希俄斯岛是拜占庭帝国抵御阿拉伯海盗侵袭的前哨，也是通往小亚细亚的重要跳板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Pyrgi”这个名字本身就揭示了它的出身。在希腊语中，“Πύργος”（Pyrgos）意为“塔楼”或“堡垒”。这直接指向了村庄最初的军事防御属性。学者们相信，最早的定居者为了安全，围绕一座或多座守望塔楼建造房屋，形成了紧密聚集、巷道狭窄的居住形态，以应对来自海上的突然袭击。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正塑造皮尔吉早期筋骨的力量，来自意大利的热那亚共和国。<strong>1346年</strong>，热那亚的商业公司“Maona”征服了希俄斯岛，开启了长达两个半世纪的统治。皮尔吉因其地理位置，发展成为热那亚贵族与地方领主（称为“维拉”）的一个重要据点。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份16世纪的热那亚税收档案中，首次明确提到了“Pyrgi”这个地名，并将其描述为一个“拥有坚固房屋和重要庄园”的聚落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在热那亚治下，皮尔吉的社区结构、建筑风格和防御体系得以固化。那些如今看来艺术性十足的窄巷与高墙，最初设计的首要目的，是让入侵者在迷宫中迷失方向，让居民能迅速躲藏与反击。这座村庄，从诞生之初，便与“防御”和“凝聚”紧密相连。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "皮尔吉的历史并非平缓的叙事诗，而是由几道深刻的刀痕刻写而成。其中两道，决定了它的生死与容颜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是<strong>热那亚的统治遗产</strong>。热那亚人不仅是统治者，也是文化和技术的传播者。他们将意大利半岛成熟的石砌建筑技术、拱廊样式带到了希俄斯。皮尔吉核心的<strong>圣使徒教堂</strong>，其建筑基础便带有明显的拉丁（天主教）风格，与岛上主流的东正教拜占庭风格形成有趣对话。热那亚时代奠定了村庄以中央教堂广场为核心、房屋如同心圆般向外辐射的“要塞-村落”格局。这种格局，至今未变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，最惨烈、也最直接塑造了皮尔吉视觉身份的，是<strong>1822年的希俄斯大屠杀</strong>。当时，希腊独立战争正如火如荼，希俄斯岛民起事反抗奥斯曼帝国。作为报复，奥斯曼军队在当年春天登岛，实施了长达数月、震惊欧洲的系统性屠杀与奴役。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "皮尔吉因其规模与重要性，首当其冲。村庄被焚毁，大量居民罹难或被卖为奴。这场灾难几乎将皮尔吉从地图上抹去。但幸存者们陆续归来，在焦土之上重建家园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在这次重建中，“xysta”刮痕彩绘技艺，从一种可能的局部装饰，演变为覆盖整个村庄外墙的<strong>统一视觉语言与集体疗愈仪式</strong>。人们用灰泥涂抹烧黑的墙壁，再用工具刮出白色线条，露出底层的黑色。那些三角形、菱形、波浪形、太阳纹……不仅仅是美学选择。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地史学家认为，这些严谨的几何图形，象征着重建的<strong>秩序</strong>，对抗着战争带来的混沌与毁灭。黑色代表被焚毁的过去与哀悼，白色则代表新生、纯洁与希望。每一道刮痕，都是对创伤的记忆与超越。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，则是<strong>1955年的伊斯坦布尔骚乱</strong>。这次事件导致希腊裔居民大量逃离土耳其，其中不少希俄斯裔家庭，尤其是掌握传统手工艺的匠人，回流至故乡岛屿。他们的回归，为包括皮尔吉在内的“乳香脂村”带来了新的活力与资本，也进一步强化了对“xysta”等传统技艺的文化自觉与保护。历史以循环的方式，在这里留下印记。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在皮尔吉，名人不一定是叱咤风云的政治家，更可能是文化的守护者与记录者。<strong>米哈利斯·卡索马利斯</strong>，便是这样一位将毕生献给“xysta”的灵魂人物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非出生于皮尔吉，而是邻近的奥林匹山村。但皮尔吉作为“xysta”艺术最集中、最壮观的代表，自然成为他研究的中心。卡索马利斯是一位教师、民俗学者和历史学家，生于20世纪初，亲身经历了岛屿从战乱到复苏的现代历程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇，在于<strong>第一个系统性地记录、研究并推广了“xysta”技艺</strong>。在很长一段时间里，这种技艺被视为寻常的乡村装饰，是“没有文化的匠人”之作，甚至被一些“高雅艺术”圈层所轻视。但卡索马利斯敏锐地认识到其中蕴含的深厚历史、数学智慧与文化身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他走遍皮尔吉的每一条小巷，测量图案，采访年老的匠人，记录下各种图形的名称（如“小星星”、“双斧”、“海浪”）及其可能的意义。他发现，这些图案并非随意绘制，而是遵循着代代相传的严格比例和构图法则，匠人们使用自制的简单工具（如梳子、锯齿木片），凭借经验和眼力，创造出令人眩目的对称与韵律。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在他的著作中，他写道：“这些墙上的图案，是穷人的几何学，是民众的拜占庭艺术。它们与中世纪手稿的装饰页缘、与教堂的马赛克，共享着同一套源自古典时代的视觉基因。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，卡索马利斯将“xysta”与皮尔吉的历史，特别是1822年大屠杀后的重建，坚定地联系在一起。他的研究为这种艺术形式赋予了沉重的历史维度和情感深度，使它从一个“奇观”，升华为一部<strong>民族韧性纪念碑</strong>。他的工作，极大地提升了当地人对自身文化遗产的自豪感，也吸引了外部学者和艺术家的关注。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与皮尔吉精神相连的人物，是希腊诗人<strong>奥季塞阿斯·埃利蒂斯</strong>（1979年诺贝尔文学奖得主）。虽然他并非希俄斯岛人，但他的诗作核心——对爱琴海光线、纯净几何与苦难中圣洁性的追求——与皮尔吉的灵魂惊人地契合。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "埃利蒂斯在名作《理所当然》中吟诵：“用太阳的蘸笔，把欢乐写遍大地……” 皮尔吉的匠人，正是用刮刀作笔，以黑白为墨，在墙壁上书写着他们“理所当然”的生存宣言与几何欢乐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是通过像卡索马利斯这样的本土学者，以及埃利蒂斯诗歌所代表的希腊现代精神，皮尔吉沉默的墙壁，才发出了响彻世界的声音。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在皮尔吉，每一个图形都可能是一个故事，一扇通往古老信仰的窗口。关于“xysta”的起源，流传着多个美丽的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最广为流传的一个版本，与<strong>热那亚的贵族小姐</strong>有关。传说，在热那亚统治时期，一位总督或贵族家的女儿，爱上了本地一位才华横溢的年轻工匠。阶层鸿沟让爱情无望。思念成疾的小姐，终日坐在阳台上，用剪刀无意识地剪着黑色的丝绸，碎片如雨落下。匠人看到这些散落的黑色几何碎片贴在白色墙壁上的影子，获得了灵感，从而发明了这种黑白对比的装饰艺术，以此作为对这段无果之恋的隐秘纪念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说，则与<strong>抵御邪眼</strong>密切相关。在地中海文化中，“邪眼”的迷信根深蒂固，人们相信嫉妒的目光会带来厄运。皮尔吉密集、重复、令人眼花的几何图案，被认为是最好的视觉护身符。凝视这些图案会让“邪眼”迷失、眩晕，从而无法聚焦并伤害屋内的居民。因此，“xysta”首先是一种实用性的<strong>建筑巫术</strong>，保护家庭免受超自然威胁。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位老匠人曾说：“我们不是在画画，我们在给房子穿上有法力的盔甲。那些恶灵和坏眼光，看到这些线条就头晕，不敢进来。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村庄的主保圣人是<strong>圣使徒</strong>，但民间对<strong>圣马可</strong>的传说也津津乐道。相传圣马曾在布道途中经过此地，他的足迹印在了一块石头上。这块圣石被保存在教堂中，成为庇护村庄的圣物。这些传说与“xysta”艺术交织在一起，构成了皮尔吉人精神世界的内外双重防线：图形抵御邪眼与灾祸，圣徒信仰给予心灵慰藉。走在其间，你穿行的不仅是一个物理空间，更是一个由神话、信仰和生存智慧共同编织的守护结界。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客仰头迷失在那片令人震撼的黑白几何迷宫中时，所见证的远不止一种独特的民间艺术。皮尔吉是一座<strong>活态的历史档案馆</strong>。它的墙壁，一页页记载着军事防御的智慧、殖民统治的痕迹、惨绝人寰的创伤，以及人类用秩序之美对抗混乱、用创造疗愈伤口的惊人力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂皮尔吉，意味着理解地中海历史的复杂层次——拜占庭的遗产、热那亚的印记、奥斯曼的阴影、民族苦难与重生。它小众，因为它不提供轻松的海滩度假；它深刻，因为它要求你静下心来，阅读石头上镌刻的沉默史诗。这里的每一道刮痕，都是先人与历史对话的笔触，是黑暗与光明、毁灭与创造、悲伤与希望之间永恒的辩证舞蹈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拜访皮尔吉，不是一次简单的观光，而是一场与 resilience（韧性）精神的直面。它告诉你，美可以从灰烬中诞生，身份可以在创伤中淬炼，而最平凡的家园墙壁，也可以成为不朽的史诗画布。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/corfu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科孚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corfu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lindos-acropolis" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林多斯卫城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindos Acropolis</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chania-old-town-venetian-harbor-lighthouse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尼亚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chania Old Town</p>
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
