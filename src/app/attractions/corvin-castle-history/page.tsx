import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '胡内多阿拉历史溯源｜科尔文城堡的前世今生、匈雅提家族传奇与中世纪秘闻',
  description: '探秘罗马尼亚最壮观的哥特式城堡。穿越到15世纪，揭开“乌鸦之王”马提亚·科尔文的权谋、爱情与建筑梦想，聆听石墙中封存的骑士传说。',
}

export default function CorvinCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '胡内多阿拉科尔文城堡', href: '/attractions/corvin-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`胡内多阿拉科尔文城堡・Corvin Castle・罗马尼亚・胡内多阿拉县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在罗马尼亚特兰西瓦尼亚的工业小城胡内多阿拉，一座宛如从奇幻史诗中直接搬出的石砌城堡，傲然矗立在悬崖之上。它并非迪士尼的造物，而是欧洲现存最令人惊叹的哥特-文艺复兴军事堡垒之一，更是一个王朝兴衰的冰冷见证。<strong>科尔文城堡</strong>，这个名字与匈牙利历史上最伟大的国王之一紧密相连，其深色玄武岩墙体内，交织着王权的荣耀、家族的血泪、炼金术士的秘语以及数百年不散的幽灵传说。抛开游玩攻略，走进胡内多阿拉的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`胡内多阿拉科尔文城堡`} />
                <InfoRow label="英文名称" value={`Corvin Castle`} />
                <InfoRow label="正式名称" value={`Corvin Castle`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`胡内多阿拉县`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "胡内多阿拉的现代面貌是一座典型的工业城镇，但它的灵魂完全系于那座名为“科尔文”的城堡。这片土地的历史可追溯到中世纪早期，而城堡的崛起，则与14世纪匈牙利王国巩固其在特兰西瓦尼亚的统治直接相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡最初并非王室的华丽宫殿，而是一座纯粹的<strong>军事要塞</strong>。其核心部分的建造始于<strong>1440年</strong>，由当时的特兰西瓦尼亚总督、后来的匈牙利摄政王<strong>亚诺什·匈雅提</strong>下令兴建。选址极具战略眼光：位于一座古老的堡垒遗址上，俯瞰着齐亚河河谷，控制着连接王国中心与矿产丰富的特兰西瓦尼亚山区的要道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“科尔文”之名，并非城堡原名，而是后世对匈雅提家族的尊称。家族纹章上有一只<strong>乌鸦</strong>，口中衔着一枚金戒指。根据家族传说，其先祖曾救过一位皇帝，获赠一枚戒指作为信物，却被乌鸦叼走，后历经周折寻回，乌鸦便成为家族幸运与忠诚的象征。拉丁语中，“Corvus”意为乌鸦，因此该家族被称为“Corvinus”（科尔文）。城堡也因此从最初的“胡内多阿拉城堡”，逐渐被世人称为<strong>科尔文城堡</strong>，象征着匈雅提家族的权力与荣光。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔文城堡的历史，是砖石写就的权力史诗。它的每一轮扩建与改造，都对应着主人地位的一次攀升或时代的一次剧变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一阶段：军事堡垒的诞生（1440-1456）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>亚诺什·匈雅提</strong>是当时基督教世界对抗奥斯曼帝国扩张的关键人物。城堡最初的建筑——包括高大的主塔（守望塔）、防御城墙和骑士大厅——充满了冷峻的军事风格。深色的石材不仅是为了威严，更是为了坚固。这里是他筹集军费、集结军队、策划对抗土耳其人的大本营。城堡下的土地蕴藏铁矿，为匈雅提的军队提供了武器，也为他积累了巨额财富，用以支撑这座庞大建筑的建造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二阶段：从堡垒到王宫（1458-1490）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是城堡的黄金时代。亚诺什的儿子<strong>马提亚·科尔文</strong>加冕为匈牙利国王。尽管他将宫廷设在布达，但科尔文城堡始终是他的心头至爱和重要的行宫。马提亚深受意大利文艺复兴影响，开始对城堡进行大规模的艺术化改造。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位意大利使者曾写道：“在特兰西瓦尼亚的群山之中，国王拥有一座宫殿，其宏伟与精巧，不亚于我在意大利所见。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他增建了带有优雅拱廊的宫殿翼楼，引入了大型玻璃窗让光线涌入，并命令工匠绘制华丽的壁画。城堡从一个冰冷的军事指挥中心，转变为一个融合了哥特式力量与文艺复兴美学的<strong>权力象征与艺术庇护所</strong>。著名的“不公正之阶”——一段故意修建得歪斜、令人行走不稳的楼梯，传说就是为了让前来申诉的臣民感到敬畏与不安。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三阶段：衰落、损毁与重生（16世纪至今）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马提亚去世后，城堡几经易手，经历了哈布斯堡王朝的统治、大火、以及长期的忽视。18世纪后，它甚至被用作仓库和监狱。直到19世纪，浪漫主义思潮兴起，人们重新“发现”了这座沉睡的巨人。大规模的修复工程在20世纪展开，特别是共产主义时期和21世纪初，旨在恢复其15世纪的辉煌面貌。今天我们看到的大部分“中世纪”景象，实际上是精心考证后的修复结果，但这并未削弱其承载的厚重历史感。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>马提亚·科尔文：文艺复兴的“乌鸦之王”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说科尔文城堡有唯一的主人，那必然是<strong>马提亚·科尔文</strong>。他出生于1443年，是亚诺什·匈雅提的次子。少年时期，他与弟弟曾被作为人质扣押在敌对的哈布斯堡宫廷，这段经历磨砺了他的心志，也让他接触到了更广阔的世界。父亲去世后，年轻的马提亚在贵族支持下，于1458年意外地被选举为匈牙利国王。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 文治武功的君主</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马提亚是一位罕见的兼具军事才能与文化品位的统治者。他建立了一支强大的雇佣军“黑军”，大幅扩张了王国疆域，使匈牙利成为中欧的霸权之一。然而，他更被后世铭记的，是其对<strong>文艺复兴</strong>的热烈拥抱。他是意大利以外最重要的文艺复兴赞助人之一。他收集了大量的手稿和书籍，建立了著名的“科文尼纳图书馆”，其规模在当时仅次于梵蒂冈图书馆。他将意大利的艺术家、学者引入匈牙利，极大地推动了中欧的文化艺术发展。科尔文城堡的改造，正是他文化抱负的实体呈现——他要在边陲之地，打造一座文明的灯塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 与城堡的羁绊</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管国事繁忙，马提亚始终将科尔文城堡视为重要的根据地和精神家园。传说，正是在这里的地下室，他关押了政敌<strong>弗拉德三世·采佩什</strong>——即后来文学作品中吸血鬼德古拉的原型——长达数年。这段囚禁经历，为德古拉的传说增添了“科尔文城堡”这个地理坐标，也让城堡蒙上了一层额外的黑暗神秘色彩。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间坚信，马提亚国王有一个秘密书房，藏于城堡某处厚墙之后，里面不仅有珍贵书籍，还有他进行炼金术实验的器具。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>3. 爱情的痕迹与悲剧</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡中也镌刻着马提亚的爱情故事。他深爱他的第二任妻子，<strong>阿拉贡的比阿特丽斯</strong>。为了迎接这位来自那不勒斯宫廷的公主，他加速了城堡的奢华改造，试图让她在“蛮荒”的特兰西瓦尼亚也能感受到故乡的文艺复兴气息。城堡中一些更精致、明亮的房间，据说就是为她准备的。然而，这段婚姻最终因无子嗣而蒙上阴影，王朝的继承危机也随之埋下，成为匈雅提家族辉煌骤然落幕的伏笔。马提亚的独子亚诺什早夭，他去世后，王国迅速陷入混乱，城堡的黄金时代就此终结。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "冰冷的石块总需要火热的故事来温暖，科尔文城堡从不缺少传说。最著名的故事与城堡的<strong>深井</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座井深达30米，直接凿穿岩石通向地下水脉。传说，<strong>亚诺什·匈雅提</strong>为了激励挖井的三名土耳其战俘，许诺他们如果挖出水就给予自由。他们苦苦挖掘了<strong>十五年</strong>，终于成功。然而，亚诺什却没有履行诺言。绝望的俘虏在井壁刻下了一行字：“<strong>你拥有水，却没有灵魂。</strong>”据说，他们的幽灵至今仍在井边徘徊，而那口井的泉水，则永远带着一丝苦涩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说是关于<strong>“白夫人”</strong>。她被认为是城堡某位不幸女眷的幽灵，常在走廊中无声飘过。游客和工作人员多次报告说，在无人的展厅里，听到丝绸长裙摩擦地面的窸窣声，或是感到一阵突如其来的寒意。有人猜测，她可能是马提亚国王某位早逝的情人，或是被困于不幸婚姻中的贵族女子，其灵魂因执念而无法安息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论是关于背叛的警世寓言，还是关于哀怨的爱情悲剧，都已深深融入城堡的肌理。它们让参观不再是简单的历史巡礼，而是一次走入中世纪民间想象世界的体验。在昏暗的走廊和空旷的大厅里，现代人依然能感受到那种超越时空的、对命运、承诺与记忆的集体诉说。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客穿过那座令人屏息的巨大木桥，步入科尔文城堡的庭院时，他踏上的不仅仅是一处旅游景点。他步入的是一部立体的中世纪编年史，一个家族王朝的雄心、一位文艺复兴君主的梦想、以及数个世纪战火与时光共同雕琢的产物。这里没有维也纳美泉宫那般极致的巴洛克华丽，也没有法国香波堡那般纯粹的文艺复兴对称之美。科尔文城堡的美，是粗粝的、雄浑的、带着一丝未加完全修饰的野性，恰如特兰西瓦尼亚这片土地本身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，欧洲历史的画卷远不止巴黎、罗马或维也纳那般广为人知的中心。在那些看似边缘的角落，同样蕴藏着决定王国命运的人物、引领文化风潮的尝试和动人心魄的传奇。读懂科尔文城堡，便是读懂了中世纪东欧王国在基督教与奥斯曼帝国夹缝中求生存、图发展的坚韧，读懂了文艺复兴思潮如何越过阿尔卑斯山，点燃远方君主的内心之火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡，是石头写成的史诗，是乌鸦纹章下的永恒叙事。它的每一道阴影，都藏着一个等待被聆听的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/constantin-brancusi-endless-column-targu-jiu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔古日乌</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Târgu Jiu</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/old-town-craiova" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉约瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town Craiova</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/targu-mures" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔古穆列什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Târgu Mureș</p>
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
