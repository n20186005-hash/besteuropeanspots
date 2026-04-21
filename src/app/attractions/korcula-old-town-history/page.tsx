import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔丘拉历史溯源｜马可波罗传说故居的前世今生与岛屿石城传奇',
  description: '深入克罗地亚亚得里亚海的“小杜布罗夫尼克”。探寻马可·波罗出生地的千年疑云，揭开石头迷宫、海权争夺与斯拉夫启蒙者的隐秘往事。',
}

export default function KorculaOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '科尔丘拉老城', href: '/attractions/korcula-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科尔丘拉老城・Korčula Old Town・克罗地亚・科尔丘拉镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在杜布罗夫尼克以北的蔚蓝海域中，一座石岛如战舰般劈开海浪。它并非只有阳光与沙滩。它的灵魂，铭刻在每一条遵循人体血液流向而设计的狭巷里，纠缠于一位伟大旅行家的身世谜团中，更回响着一场决定地中海格局的古老海战。这里是科尔丘拉，一座为自己书写了独立编年史的石头王国。抛开游玩攻略，走进科尔丘拉的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科尔丘拉老城`} />
                <InfoRow label="英文名称" value={`Korčula Old Town`} />
                <InfoRow label="正式名称" value={`Korčula Old Town`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`科尔丘拉镇`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔丘拉岛的史前迷雾，最早由古希腊航海者拨开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元前4世纪，来自科林斯或锡拉库扎的希腊殖民者，看中了这座岛屿东岸的天然良港与茂密森林。他们在此建立定居点，可能称之为“<strong>黑色科尔松</strong>”（Melaina Korkyra），意指岛上深邃的“黑松林”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "名字“Korčula”便由此古名演变而来，带着古典时代的烙印。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正赋予老城今日肌理的，是公元13世纪的威尼斯共和国。面对亚得里亚海对岸强盛的杜布罗夫尼克共和国（拉古萨）的竞争，威尼斯急需一个坚固的前哨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，<strong>1214年</strong>，一份精心规划的城市蓝图被付诸实施。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯工程师没有随意布局。他们采用了独特的“鱼骨式”街巷设计。东西向的主街宽阔笔直，如鱼的脊椎；南北向的狭窄分支小巷则如肋骨般密集排列。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地流传的解释充满智慧：“这样设计，夏天凉爽的‘ maestro ’西北风能贯通主街，驱散闷热；而冬天凛冽的‘ bora ’东北风，则被迷宫般的小巷化解削弱，保护居民。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "不仅如此，小巷的走向并非完全对称。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有学者认为，这模仿了人体血液循环系统——主街是主动脉，小巷是毛细血管——旨在最优分配城市空间与风向。这使得科尔丘拉老城成为中世纪城市规划的“活化石”，一个为生存而精心计算的几何杰作。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔丘拉的历史，是一部微缩的地中海霸权争夺史。石头城墙见证的不仅是岁月，更是决定性的瞬间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个无法绕开的印记，是 <strong>1298年9月7日</strong> 的“科尔丘拉海战”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场热那亚与威尼斯两大海上共和国之间的惨烈对决，就发生在老城眼前的海域。尽管威尼斯舰队战败，但其指挥官 <strong>安德烈亚·丹多洛</strong> 的英勇却成为传奇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更为后世津津乐道的是，传说中，热那亚一方关押了一位特殊的战俘——<strong>马可·波罗</strong>。他被俘后，正是在监狱中向狱友口述了那部震惊世界的《寰宇记》。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场海战，意外地成为连接东西方见闻录诞生的催化剂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，是 <strong>1420年</strong> 后长达近四百年的威尼斯统治。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯人不仅加固了城墙，更将自身的文化、法律与建筑风格深深植入。老城内<strong>圣马可主教座堂</strong>的兴建，就是威尼斯影响力的顶峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的石材来自科尔丘拉本岛与邻近的布拉奇岛，由当地最杰出的石匠家族操刀。教堂正立面的玫瑰花窗与浮雕，混合了哥特式的瑰丽与早期文艺复兴的和谐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而支撑这一切的，是岛上强大的 <strong>石匠行会</strong>（Bratovština Kamenara）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，便镌刻在这些无名的石匠手中。从中世纪到19世纪，科尔丘拉的石匠技艺享誉整个亚得里亚海东岸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们不仅建造了本地的教堂、宫殿、城墙，其技艺更随着商船出口到杜布罗夫尼克、甚至远至意大利。老城街巷中那些精美绝伦的石制窗棂、徽章与门楣，都是这古老行会沉默的勋章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "石头，是科尔丘拉的骨骼，也是它的记忆体。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔丘拉的名人叙事，始终在历史事实与浪漫传说之间跳着迷人的舞蹈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传说之子：马可·波罗的千年羁绊</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然威尼斯档案明确记载马可·波罗为威尼斯公民，但科尔丘拉人坚信，这位伟大的旅行家于 <strong>1254年</strong> 出生在老城一座朴素的石屋里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说其家族为躲避威尼斯内斗，早先迁居于此。老城一座被称为“马可·波罗故居”的三层石塔楼，几个世纪来一直承载着这份骄傲。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "19世纪英国旅行作家 <strong>F. H. Jackson</strong> 曾记录当地老人的讲述：“我们所有人都知道，马可是我们的人。他的父亲从这里扬帆，前往君士坦丁堡，开始了东方之旅。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座“故居”本身，就是一部建筑史。它的底层是典型的威尼斯-哥特式拱门，而上层窗户则是朴素的罗马式。它更像一个关于起源的象征，而非确凿的证据。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1954年，在“纪念马可·波罗诞辰700周年”的国际热潮中，这座塔楼被正式设立为纪念馆。馆内展陈虽无铁证，却精心梳理了《寰宇记》中的线索与科尔丘拉历史的重叠之处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史学家们争论不休，但科尔丘拉已将自己的名字与探索世界的好奇心永久绑定。每年夏季，老城还会上演传统的“马可·波罗戏剧”，将传说娓娓道来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>真正的本土之光：茨里洛·梅托德</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相较于马可·波罗的朦胧，另一位名人则有着坚实的历史足迹。他是 <strong>茨里洛·梅托德</strong>，一位文艺复兴时期的博学者与<strong>斯拉夫文化启蒙者</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他于15世纪中叶出生在科尔丘拉的一个贵族家庭。在意大利接受教育后，他带着人文主义思想回到了故乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的伟大贡献在于语言与文化。当时，克罗地亚沿海地区使用的<strong>格拉哥里字母</strong>（Glagolitic）正面临被拉丁字母取代的危机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "梅托德不仅致力于保护这种古老的斯拉夫文字，更积极用它进行创作和宗教传播。他在科尔丘拉及周边岛屿推广格拉哥里字母的使用，使其在教堂和文献中得以延续。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他本人也是一位诗人，用格拉哥里字母和 vernacular 语言创作，是早期克罗地亚文学的重要人物。他的存在，让科尔丘拉成为了斯拉夫文化在亚得里亚海的一个坚韧的堡垒，而不仅仅是威尼斯文化的附庸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城的<strong>圣米迦勒教堂</strong>内，仍保存着与他时代相关的格拉哥里字母铭文，静静诉说着这段本土文化的守护史。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在科尔丘拉，最激昂的传说并非关于个人，而是一场每年上演的、刀光剑影的舞蹈——“<strong>莫雷斯卡</strong>”（Moreška）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一种传统的剑舞，表演者可追溯至 <strong>15世纪</strong>。它讲述了一个二元对立的故事：黑王（摩尔人）劫走了白王的未婚妻，双方军队为争夺她而展开象征性的战斗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "舞蹈节奏紧张，演员们手持真剑，用复杂的节奏相互敲击，最终以白王胜利、有情人团聚而告终。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "关于其起源，最动人的传说与 <strong>1571年的勒班陀海战</strong>有关。传说科尔丘拉的年轻水手参加了这场基督教联盟对阵奥斯曼帝国的大海战并凯旋。他们为了庆祝胜利，将战场上看到的异域元素融入古老的舞蹈，创造了“莫雷斯卡”，以此永久纪念这场保卫家园和信仰的战役。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，“莫雷斯卡”远不止是民俗表演。它是将历史创伤、胜利喜悦与文化融合浓缩进艺术形式的活态记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "舞蹈中摩尔人的形象，映射了地中海沿岸数百年来与奥斯曼势力的对抗。而最终爱情战胜劫掠的剧情，则赋予了它永恒的普世主题。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年夏季的特定夜晚，老城的主广场化为中世纪剧场，铿锵的剑击声在海风中回荡，每个观众都成为这则古老传奇的一部分。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在科尔丘拉老城，你踏过的不是普通的石板路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那是古希腊殖民者的登陆点，威尼斯工程师的绘图纸，热那亚战舰与威尼斯桨帆船交锋的海域投影，是石匠行会会员一凿一斧的刻度，是马可·波罗传说中扬帆的港口，也是茨里洛·梅托德守护的格拉哥里字母蜿蜒的笔划。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市教会我们，历史并非杜布罗夫尼克那样恢弘单一的叙事诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它更像一部由多方合著、充满插曲与脚注的传奇小说。这里有确凿的史实，也有坚定的传说；有霸权的烙印，更有本土文化倔强的生长。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不强迫你相信马可·波罗在此出生，却邀请你思考传说为何在此生根。它不炫耀庞大的规模，却展示着人类如何用智慧（鱼骨街道）与艺术（莫雷斯卡舞蹈）在狭小空间与宏大历史中创造秩序与意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂科尔丘拉，便是读懂亚得里亚海小城的一种典型生存哲学：在巨人的夹缝中，精心经营自己的世界，并将一切——无论虚实——都锻造成独属于自己的身份徽章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kornati-islands-national-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔纳蒂群岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kornati Islands</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rijeka" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里耶卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rijeka</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/groznjan-istria-art-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格罗日年</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grožnjan</p>
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
