import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯洛伐克城堡历史溯源｜博伊尼采的骑士、情人、烈火与童话的前世今生',
  description: '从12世纪边境堡垒到19世纪爱情信物，再到浴火重生的童话宫殿。走进斯洛伐克最浪漫城堡，看匈牙利伯爵的痴情、烈火焚城的悲剧与民族记忆的复兴。',
}

export default function BojniceCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '博伊尼采城堡', href: '/attractions/bojnice-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博伊尼采城堡・Bojnice Castle・斯洛伐克・特伦钦州博伊尼采`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯洛伐克西部喀斯特山地的怀抱中，<strong>博伊尼采城堡</strong>如同一座从童话书页中直接浮现的幻境。尖塔、垛墙、错落的屋顶，勾勒出最经典的城堡轮廓。然而，它的魅力远不止于一张明信片。它的石墙里，封存着近千年的层叠历史：它是<strong>匈牙利王国</strong>防御北境的军事前哨，是<strong>文艺复兴</strong>时期权贵的奢华府邸，更是一位<strong>19世纪匈牙利伯爵</strong>献给挚爱的、极尽浪漫的实体情书。抛开游玩攻略，走进博伊尼采的尘封往事，遇见属于它的烈火、痴情与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博伊尼采城堡`} />
                <InfoRow label="英文名称" value={`Bojnice Castle`} />
                <InfoRow label="正式名称" value={`Bojnice Castle`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`特伦钦州博伊尼采`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博伊尼采的故事，始于中世纪早期欧洲版图的动荡边缘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "现代城堡脚下的温泉小镇看似宁静，但其根源却深植于军事防御。城堡所在的石灰岩山丘，是俯瞰整个<strong>上尼特拉地区</strong>河谷的天然制高点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于它的最早文字记载，出现在<strong>1113年</strong>的一份文献中。这份由<strong>佐伯修道院</strong>颁发的特许状，提到了“<strong>Bojnice</strong>”这个地名。当时，这里很可能已经存在一座早期的<strong>木石结构堡垒</strong>，归属于<strong>匈牙利王国</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字本身，就诉说着起源。<strong>“Bojnice”</strong> 很可能源自古斯拉夫语词根 “<em>boj</em>”，意为“战斗”或“战役”。这直接点明了其最初、也是最核心的功能——一座<strong>边境要塞</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>12-13世纪</strong>，匈牙利王国正着力巩固其北部疆界，抵御来自波西米亚等地的潜在威胁。博伊尼采正处于一条重要的南北商路与战略通道上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座最初的城堡，属于匈牙利国王。它并非贵族享乐的宫殿，而是王国防御体系中的一颗钉子，驻守着国王的军队，监控着山谷与道路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡下的定居点也随之发展，为驻军提供服务，并利用肥沃的土地进行耕作。温泉资源虽早已被知晓，但在那个年代，其疗愈价值远不如其战略位置重要。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里，最初便是一个为“战斗”而生的地方。这份坚硬的军事基因，将在未来数个世纪里，被柔情、财富与艺术层层包裹，但从未真正消失。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博伊尼采的轮廓在历史上经历了数次决定性重塑，每一次都深深镌刻下时代的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一个黄金时代：维特科夫奇的统治</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>14世纪</strong>，城堡迎来了第一位重要的长期主人——强大的匈牙利贵族<strong>马图什·恰克·特伦恰尼</strong>的部下，后来由<strong>维特科夫奇家族</strong>继承。在<strong>拉迪斯拉夫国王</strong>的赏赐下，维特科夫奇家族将这座皇家城堡变成了世袭领地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们启动了城堡的第一次大规模重建。哥特式的风格开始取代最初的罗马式防御工事。城堡被加固、扩建，增加了宫殿般的居住空间。它从一个纯粹的军事据点，转变为一个集防御、行政与居住于一体的<strong>贵族权力中心</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维特科夫奇家族统治这里近两百年，奠定了城堡作为地区重要堡垒和府邸的坚实基础。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>文艺复兴的优雅：帕尔菲家族的到来</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转变发生在<strong>17世纪</strong>。<strong>1644年</strong>，城堡落入<strong>帕尔菲家族</strong>手中，这是匈牙利最显赫、最富有的贵族家族之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕尔菲家族给博伊尼采带来了<strong>文艺复兴</strong>的春风与<strong>巴洛克</strong>的繁复。他们大幅改造了城堡内部。厚重的哥特式大厅被打开，换上更大的窗户，引入光线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "华丽的灰泥装饰、壁画、精致的壁炉出现在房间里。城堡外围建起了规整的<strong>法式花园</strong>。此时的博伊尼采，已彻底洗去边境要塞的粗粝感，成为一座展现贵族品味与财富的<strong>豪华官邸</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位17世纪的旅行者曾写道：“博伊尼采的辉煌令人惊叹，其大厅的奢华堪比维也纳的宫廷，花园中的雕塑仿佛将意大利搬到了斯洛伐克的山丘上。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕尔菲家族不仅拥有城堡，更是狂热的艺术收藏家。他们从欧洲各地搜罗古董、画作、珍贵书籍和稀奇古怪的珍品，为城堡注入了灵魂，也为其未来成为博物馆埋下了伏笔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>烈火与重生：童话城堡的诞生</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最戏剧性的一章发生在近代。<strong>1889年</strong>，一场毁灭性的大火席卷了城堡，木质结构几乎焚毁殆尽，无数艺术珍藏化为灰烬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时的主人，是<strong>弗朗茨·约瑟夫·帕尔菲伯爵</strong>。面对废墟，他没有选择放弃，而是做出了一个浪漫到近乎偏执的决定：不仅要重建，而且要把它建成梦想中的模样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他花费巨资，聘请顶尖建筑师，以法国卢瓦尔河谷的<strong>香波堡</strong>等梦幻城堡为蓝本，融合了自己对中世纪浪漫的全部想象。重建工程历时超过二十年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一座融合了<strong>法国哥特复兴式</strong>与<strong>浪漫主义</strong>风格的新城堡从灰烬中崛起。它拥有更陡峭的屋顶、更多精致的尖塔、更复杂的雕刻。那童话般的外观，其实完全是<strong>19世纪末</strong>审美与个人意志的产物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场大火与重建，是博伊尼采历史上最深刻的“印记”。它让城堡告别了真正的“古旧”，却因此获得了独一无二的、极具感染力的浪漫外形，成为了我们今天所见的、斯洛伐克的标志。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在博伊尼采的漫长历史中，<strong>弗朗茨·约瑟夫·帕尔菲伯爵</strong>无疑是最浓墨重彩的一笔。他并非传统的政治或军事英雄，而是一位<strong>美学家、收藏家、浪漫主义者</strong>，他用一生将这座城堡变成了自己的博物馆与情书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>最后的帕尔菲：一位贵族的痴迷</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗朗茨·约瑟夫生于<strong>1848年</strong>，是帕尔菲家族在博伊尼采的末代领主。他自幼接受顶尖教育，游历欧洲，精通多国语言，对考古、历史、艺术有着近乎痴迷的热情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的财富并非用于挥霍，而是全部投向了“收藏”。他的收藏范围之广令人咋舌：古埃及、希腊、罗马的文物，中世纪的盔甲兵器，文艺复兴的油画，东方瓷器，自然科学标本（包括著名的“博伊尼采猛犸象化石”），甚至还有所谓的“宗教圣物”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在日记中倾诉：“每一件藏品都是一个世界，一个故事。将它们聚集在博伊尼采，我便拥有了整个世界的历史。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的每一个房间，都被他精心设计成不同主题的展厅。他将自己视为这些人类文化遗产的守护者，而非仅仅是拥有者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>为爱重塑：城堡作为情书</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，驱使他在火灾后不惜代价重建城堡的，还有一个更私人的原因——一段无果的爱情。他深深爱上了一位法国贵族女子，但因宗教信仰差异（他是天主教徒，对方是新教徒）和家族反对，婚事未能成功。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他将这份无处安放的深情与浪漫幻想，全部倾注到了城堡的重建中。传说中城堡内部最华丽的“<strong>金厅</strong>”和风景最佳的露台，都是为他心中的“女主人”所设计。他按照理想中“公主的居所”来打造每一个细节。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，我们今天看到的梦幻城堡，本质上是一位失意贵族的<strong>实体情诗</strong>，是他用石头、木材和艺术构建的一个永不醒来的梦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>超越时代的遗产</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗朗茨·约瑟夫终身未婚，没有直系继承人。他晚年最担心的就是自己毕生收藏的命运。因此，他在遗嘱中做出了惊人决定：将整个城堡连同所有藏品，<strong>赠予捷克和斯洛伐克人民</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他设立了复杂的信托，确保城堡在他死后将成为一座<strong>公共博物馆</strong>。<strong>1914年</strong>，随着一战爆发，他的健康状况恶化，最终于<strong>1916年</strong>去世。他的遗愿得到了执行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正因为他的远见与慷慨，博伊尼采城堡没有在20世纪的政治动荡中散佚或损毁。它从私家庄园转变为国家博物馆，其浩瀚的收藏得以向公众展示。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位最后的伯爵，用他的痴迷、浪漫与无私，为博伊尼采的故事写下了最动人、也最具公共精神的结局。他让城堡的传奇，从个人幻想升华为整个民族的珍贵记忆。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如同所有古老的城堡，博伊尼采的石墙间也萦绕着挥之不去的低语与传说。其中最著名、最令人脊背发凉的故事，是关于一位<strong>无头骑士</strong>和一位<strong>白衣女鬼</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>地牢中的无头骑士</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在城堡幽深的地牢最底层，关押着一位中世纪贵族的幽灵。他生前因犯下重罪被判处死刑，在城堡庭院中被斩首。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他的灵魂无法安息。每到<strong>月圆之夜</strong>，或是暴风雨来临前，地牢深处便会传来沉重的、金属拖拽的声音。那是无头骑士的幽灵，身披残破的铠甲，提着自己的头颅，在潮湿的走廊里无尽地徘徊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，他曾试图向每一位帕尔菲伯爵申诉自己的冤情，但无人敢在深夜直面那可怖的景象。游客们有时会声称，在参观地牢时感到一阵突如其来的刺骨寒意，或听到若有似无的叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>白衣夫人的爱情悲剧</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更为凄美。在城堡的一座塔楼窗口，时常有人瞥见一位身着<strong>白色长裙</strong>的年轻女子身影。她是<strong>马图莎</strong>，一位生活在17世纪的贵族小姐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事里，她与一位出身低微的年轻军官坠入爱河，这遭到了她父亲（当时的城堡主人）的强烈反对。为了拆散他们，父亲将军官派往遥远的战场，并告诉马图莎他已战死。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "悲痛欲绝的马图莎从此郁郁寡欢，不久便香消玉殒。然而，她的灵魂始终等待着爱人归来。直到许多年后，那位军官其实并未战死，他伤痕累累地回到城堡，才得知真相。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人讲述：“有人说，在寂静的夜里，能听到塔楼传来轻柔的哭泣声。那是马图莎夫人，她还在等待，永远地等待着那个永远不会回来的拥抱。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，她的幽灵便留在了塔楼，成为城堡永恒守望的一部分。这个传说，似乎也微妙地映照着帕尔菲伯爵自己那无果的爱情，让城堡的浪漫气息中，平添了一丝忧伤的注脚。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们驻足于博伊尼采童话般的尖塔下，所见的远不止一座美丽的建筑。它是一本立体的、石砌的史书，每一页都写满了复杂的层次。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从<strong>军事要塞</strong>到<strong>贵族官邸</strong>，从<strong>烈火废墟</strong>到<strong>浪漫童话</strong>，博伊尼采的每一次变身，都是中欧历史洪流中的一个漩涡。它见证了匈牙利帝国的边疆政策，反映了文艺复兴贵族的审美追求，更铭刻了19世纪末一个灵魂对美与爱情的极致追求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>弗朗茨·约瑟夫·帕尔菲伯爵</strong>的遗产，让这座城堡超越了私人财产的范畴。它成为斯洛伐克文化遗产中一颗独特的宝石——其外观是19世纪的浪漫幻想，其内核却承载着从古埃及到文艺复兴的浩瀚人类创造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂博伊尼采，便是读懂了一种<strong>执着</strong>：对权力的执着，对艺术的执着，对爱情的执着，以及对传承的执着。它提醒我们，最动人的地方，往往拥有最复杂的“前世”。它的美，不在于纯粹的古老，而在于那层层叠加、甚至相互矛盾的历史纹理所构成的独特魅力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是枯燥的年代纪事，而是烈火中的重生、未寄出的情书、地牢里的回响，和一位伯爵留给世人的、装满整个世界的博物馆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bardejov-old-town-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尔代约夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bardejov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/presov-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普雷绍夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Prešov Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/banska-stiavnica-silver-mining-town-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班斯卡什佳夫尼察</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Banská Štiavnica</p>
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
