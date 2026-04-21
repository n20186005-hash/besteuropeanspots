import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮蒂利亚诺历史溯源｜伊特鲁里亚岩墓、“小耶路撒冷”与中世纪传奇的前世今生',
  description: '探秘意大利“天空之城”原型皮蒂iglia诺：伊特鲁里亚文明的岩中墓穴，中世纪犹太社区的隐秘圣殿，奥西尼家族城堡下的权力游戏。三层文明在此共生。',
}

export default function PitiglianoHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '皮蒂iglia诺', href: '/destinations/europe' },
            { label: '皮蒂利亚诺', href: '/attractions/pitigliano-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮蒂利亚诺・Pitigliano・意大利・皮蒂iglia诺`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在托斯卡纳南端的凝灰岩巨石上，皮蒂利亚诺如一座天然要塞从地壳中生长出来。它的历史并非始于砖石，而是源于刀劈斧凿的墓穴——早在罗马崛起之前，神秘的伊特鲁里亚人便在此雕刻死亡与永恒。随后，它成为了流散犹太人的“小耶路撒冷”，也见证了中世纪贵族家族的兴衰权谋。这座城本身就是一本立体的史书，每一层岩壁都镌刻着被主流历史叙事遗忘的章节。抛开游玩攻略，走进皮蒂利亚诺的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮蒂利亚诺`} />
                <InfoRow label="英文名称" value={`Pitigliano`} />
                <InfoRow label="正式名称" value={`Pitigliano`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`皮蒂iglia诺`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "皮蒂利亚诺的诞生，与<strong>公元前7世纪</strong>左右活跃于此的伊特鲁里亚文明密不可分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但与其说它是“建造”的，不如说是“雕刻”与“生长”的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片土地的核心是一块巨大的凝灰岩高地，质地相对柔软，易于开凿。伊特鲁里亚人没有选择在平地筑城，而是看中了这处天然的防御性岩脊。他们的首要工程并非房屋，而是<strong>“维娅卡瓦”</strong>——即直接在岩壁上开凿出的、用于安葬死者的墓穴通道网络。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些深邃的墓道如同大地的血管，构成了城市最初的地下骨架。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于其名字“Pitigliano”的起源，一个浪漫的传说将其与两位罗马逃亡贵族联系起来。相传，罗马共和国时期，<strong>罗马纳斯</strong>和<strong>皮蒂利奥</strong>两位贵族因故逃亡至此，他们在岩脊上建立了最初的避难所。后人便以“皮蒂利奥”的名字来命名此地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然传说难以考证，但它暗示了此地作为“避难所”和“堡垒”的双重原始基因。这座城从诞生之初，就注定与隐秘、防御和超越世俗的追寻联系在一起。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转，皮蒂利亚诺岩壁上的印记层层叠加。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>伊特鲁里亚的岩中世界</strong>是其文明的基石。在今天城市下方的岩壁中，仍保存着令人震撼的墓穴群，如<strong>“格拉多内墓”</strong>。这些墓穴并非随意挖掘，它们有着清晰的家族划分、仿照生前居所设计的厅室，甚至雕刻出的房梁与座椅。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地有古老传言：“伊特鲁里亚人相信，死者只是去了岩石另一面的世界。他们开凿的不是坟墓，是一扇扇门。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这解释了为何墓穴如此“宜居”。这不仅是葬仪，更是一种将生死界限模糊的哲学实践。这些岩墓网络，后来甚至被中世纪居民改造为酒窖或避难所，文明在实用中完成了诡异的传承。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>中世纪犹太社区的“小耶路撒冷”</strong>是皮蒂利亚诺最独特的历史印记。16世纪，随着教皇国对犹太人的迫害加剧，许多犹太家庭逃往相对宽容的托斯卡纳边区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "皮蒂利亚诺的奥尔西尼领主接纳了他们。于是，在基督教堂林立的岩上之城下方，一个完整的犹太社区悄然成型。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们建起了<strong>犹太会堂、烤制无酵饼的作坊、屠宰场、浸礼池</strong>，甚至在地下岩洞中开辟了酿酒窖。鼎盛时期，犹太人占城市人口近四分之一。这里成为了意大利乃至整个欧洲著名的犹太文化中心，赢得了 <strong>“小耶路撒冷”</strong> 的称号。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种基督教与犹太社区在物理空间（山上与山下）和社会结构上的共生，在欧洲历史上极为罕见。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>奥尔西尼家族与美第奇的权杖</strong>则塑造了城市可见的肌体。从13世纪起，强大的<strong>奥尔西尼家族</strong>统治这里数百年。他们修建了宏大的<strong>奥尔西尼宫</strong>（后称城堡）和那标志性的、连接峡谷两岸的<strong>巨型石拱引水桥</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，家族内部的争斗削弱了实力。<strong>1604年</strong>，在托斯卡纳大公<strong>斐迪南多一世·德·美第奇</strong>的军事压力下，最后一位奥尔西尼领主被迫将城市卖给美第奇家族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这次易主并非毁灭，反而带来稳定。美第奇家族加固了防御，并最终将皮蒂利亚诺纳入大公国的版图，其基本风貌就此定格。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "皮蒂利亚诺的历史舞台上有两位关键人物，他们的选择决定了城市的命运轨迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位是<strong>尼科洛三世·奥西尼</strong>。他是15世纪末至16世纪初皮蒂利亚诺的领主，一位典型的文艺复兴时期的军阀与文艺赞助人矛盾体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在政治上，他是冷酷的雇佣兵队长，为出价最高者服务，周旋于教皇、佛罗伦萨和锡耶纳之间，竭力维持自己小国的独立。但在文化上，他却是一位开明者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是<strong>尼科洛三世</strong>在<strong>1492年</strong>（同年犹太人被逐出西班牙）及其后数年，正式颁布法令，明确欢迎被驱逐的犹太人来皮蒂利亚诺定居并给予保护。这一政策虽然有增加税收、引入熟练工匠的经济考量，但在那个宗教迫害愈演愈烈的时代，无疑是需要勇气和远见的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的城堡内设有豪华的图书馆，他邀请学者和艺术家前来。城堡中庭那精美的文艺复兴式双螺旋石阶，便是他追求“文明”的证明。然而，这道石阶通向的却是阴暗的牢房和兵营——权力与文明，庇护与防御，在他身上和他的城市里浑然一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位深刻影响此地的人物，并非本地领主，而是来自佛罗伦萨的<strong>“豪华者”洛伦佐·德·美第奇</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在奥尔西尼家族出售城市之前，美第奇家族就已觊觎这座战略要地。<strong>1472年</strong>，洛伦佐发动了一场针对皮蒂利亚诺的战争。这场战争并非为了征服，更像是一次严厉的惩戒，因为奥尔西尼家族支持了他的政敌。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "洛伦佐在战后的信中写道：“我们并非要摧毁那座岩石上的鹰巢，而是要剪短它的羽翼，让它知道应该望向何方（即佛罗伦萨）。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争本身并未让皮蒂利亚诺屈服，但它极大地消耗了奥尔西尼家族的实力和财力，为一个世纪后美第奇家族的最终收购埋下了伏笔。洛伦佐的远见在于，他早已将整个托斯卡纳视为美第奇的后花园，任何不驯服的边地领主，都是必须被理顺的荆棘。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在皮蒂利亚诺，历史与传说在凝灰岩的孔隙中交织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说是关于城市起源的“皮蒂利奥传说”。故事说，罗马贵族青年皮蒂利奥和罗马纳斯因爱上同一位女子而决斗，最终不得不逃离罗马。他们一路向南，疲惫不堪时，眼前突然出现了这片犹如神迹的凝灰岩巨石。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说中描述：“就在太阳西沉、绝望袭来之际，一道闪电劈开了远方的暮色。他们看见，一座巨大的岩石之城在夕照中熠熠生辉，宛如直接从大地梦境中升起的堡垒。皮蒂利奥喊道：‘看哪，那是我们的命运之地！’”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说赋予了城市一种天命所归的浪漫色彩，也将它的形象与“奇迹”、“庇护”牢牢绑定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与犹太社区有关，围绕着一口古老的“犹太逾越节井”。据说，这口井的水在每年逾越节前夕会变得格外甘甜清澈。当地犹太社区认为，这是为了纪念先祖从埃及出走、在沙漠中获得甘泉的神迹在此地的回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有关于奥尔西尼城堡地下秘道的无数故事。人们传说，这些秘道不仅通往城外的山谷，更有一条直接连接着古老的伊特鲁里亚墓穴中心。领主们在危急时刻，可以通过这些通道，消失在比中世纪更为久远的历史迷雾之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论是真是假，都构成了皮蒂利亚诺人文肌理中不可或缺的部分，让坚硬的岩石拥有了柔软的、可供遐想的灵魂。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步皮蒂利亚诺，你走过的每一步都是文明的层叠：脚下是伊特鲁里亚人沉思永恒的墓道，身旁是中世纪犹太人求生存活的巷弄，抬头是文艺复兴领主彰显权力的城堡塔楼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂皮蒂利亚诺，便是读懂一种边缘的韧性。它从未处于历史的中心，却总能以其独特的构造——无论是地理的岩脊，还是社会的包容——成为动荡时代的避风港，保存下主流浪潮中易被冲散的文明碎片。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的旅行意义，远不止于欣赏“天空之城”的奇景。它是一次向下的考古，一场对“共生”可能性的追寻。在这座岩上之城里，死亡与生活、流散与定居、权力与庇护，完成了跨越数千年的对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castello-della-torraca-turin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托尔加塔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castello della Torraca</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aquileia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿奎莱亚遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aquileia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/comacchio" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科马基奥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Comacchio</p>
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
