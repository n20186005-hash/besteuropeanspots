import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马尔萨什洛克历史溯源｜马耳他彩色渔港的前世今生与腓尼基传奇',
  description: '从腓尼基港口到圣殿骑士避风港，探索马耳他马尔萨什洛克渔村的千年秘史。彩色鲁祖船背后，是海盗、骑士与大时代的惊涛骇浪。',
}

export default function MarsaxlokkHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '马耳他', href: '/destinations/europe' },
            { label: '东南区', href: '/destinations/europe' },
            { label: '马尔萨什洛克', href: '/attractions/marsaxlokk-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马尔萨什洛克・Marsaxlokk・马耳他・东南区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当阳光洒在马耳他岛东南海岸，那片新月形的海湾便泛起粼粼波光，几十艘眼睛图案的彩色小船——“鲁祖”——静静停泊。这里不是为游客而设的布景，而是一个活着的腓尼基港口，一段被圣殿骑士写入航海日志的隐秘篇章。喧闹的周日鱼市背后，是数个世纪海风咸味浸透的石墙与命运。抛开游玩攻略，走进马尔萨什洛克的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马尔萨什洛克`} />
                <InfoRow label="英文名称" value={`Marsaxlokk`} />
                <InfoRow label="正式名称" value={`Marsaxlokk`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`东南区`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马尔萨什洛克的名字，本身就是一张古老的海图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它由两个词根组成：<strong>Marsa</strong> 和 <strong>Xlokk</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Marsa”源自阿拉伯语，意为“港口”或“锚地”，遍布马耳他群岛的地名中，这是阿拉伯统治时期（870-1091年）留下的最深刻烙印。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Xlokk”则指向了风向，它是马耳他语中对“西罗科风”的称呼——一种从东南方向吹来、温暖而时常夹带沙尘的地中海风。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "合在一起，便是“南风港口”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一个依风向命名的海湾，揭示了它最初、也最永恒的用途：一个依偎在天然臂弯中的避风港。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片海湾的起源，远比它的阿拉伯语名字更为古老。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在<strong>公元前8世纪</strong>，善于航海的<strong>腓尼基人</strong>就已经在此停靠。他们从黎凡特沿岸而来，需要遍布地中海的可靠据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马尔萨什洛克开阔、隐蔽且面向东南的海湾，成为了理想的选择。考古发现证实，这里曾是一个重要的前罗马定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，在漫长的中世纪，这个海湾在历史记载中一度沉寂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它或许只是渔民零星使用的小锚地，直到一股强大的军事与宗教力量，重新发现了它的战略价值。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣殿骑士团</strong>的到来，改变了这一切。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1530年，骑士团接管马耳他，他们需要为舰队寻找安全的避风港和瞭望点。马尔萨什洛克优越的地理位置被重新评估。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "骑士们开始在这里修建早期的防御工事和瞭望塔，将其打造为一个次级海军基地和预警前哨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "海湾的命运，自此与大海的波涛和战争的阴云紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事，不再仅仅关于渔获与季风。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马尔萨什洛克的历史，是由海水与炮火共同书写的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非首都瓦莱塔那般精心规划的堡垒城市，而是自然与战略需求催生的产物。其历史印记，深深刻在三件事上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是 <strong>1565年“马耳他大围攻”</strong>的烽烟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一年，强大的奥斯曼帝国舰队意图拔除圣殿骑士团这颗地中海心脏的钉子。浩浩荡荡的敌军舰队，选择的登陆与锚地，正是马尔萨什洛克湾。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“1565年5月18日，星期二……我们看到了敌人的舰队，规模惊人，正驶向马尔萨什洛克湾。”——骑士团成员的记载。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣殿骑士团大团长<strong>德·瓦莱特</strong>早已预判。他在海湾后的丘陵上紧急修建了圣卢西亚堡等临时防御工事。尽管土耳其人成功登陆并建立了滩头阵地，但骑士们的顽强抵抗为此后的胜利赢得了宝贵时间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马尔萨什洛克，作为这场史诗级围城战的起点，被永远载入了欧洲历史。战争结束后，防御被大幅加强，<strong>圣卢西亚堡</strong>被改建为永久的石质堡垒，至今仍矗立在渔港西侧的山坡上，沉默地俯瞰着如今宁静的海湾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是<strong>海盗时代的阴霾与社区的形成</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大围攻后，马耳他并未获得长久和平。地中海海盗活动猖獗，北非的巴巴里海盗时常袭击沿海村落，掳掠人口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "位于岛屿东南部、相对偏远的马尔萨什洛克渔民社区，长期生活在这种恐惧之下。这种持续的外部威胁，反而催生并巩固了一个紧密团结、自给自足的渔民社群。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们发展出独特的船只——<strong>鲁祖船</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种船型小巧灵活，船首两侧绘有“荷鲁斯之眼”或“法蒂玛之手”等神秘图案。这不仅是装饰，更是古老的护身符，渔民相信这些“眼睛”能帮他们在浩瀚而危险的大海中看清前路、驱邪避祸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "社区的真正形成与壮大，是在<strong>17世纪之后</strong>。人们围绕港口建造色彩朴实的石头房屋，生活完全围绕大海的节奏展开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，是<strong>现代国家脉搏的引入</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光跃至<strong>20世纪80年代</strong>。马耳他政府决定在马尔萨什洛克湾附近修建一座重要的<strong>德尔马拉发电厂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巨大的电厂建筑群改变了海湾的部分天际线，成为了现代工业文明的醒目地标。这引发了关于传统与现代、自然景观与能源需求的长期讨论。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，颇具意味的是，这座为整个岛屿供电的现代化设施，其所需的燃料正是通过马尔萨什洛克港口的专用码头输入。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古老的渔港，以一种意想不到的方式，再次承担起了为整个岛屿“供能”的战略角色，将它的命运与国家的现代命脉紧紧相连。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马尔萨什洛克的传奇，不只有王侯将相的宏大叙事，更与两位人物的命运深深交织。一位是塑造岛屿命运的骑士团领袖，另一位则是从这片海湾走出的平凡渔民英雄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 大团长让·德·瓦莱特：战争预言家与港口规划者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管<strong>德·瓦莱特</strong>更多与瓦莱塔城联系在一起，但他深邃的战略眼光，早已投向了马尔萨什洛克。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥斯曼帝国威胁日益迫近的1550年代，德·瓦莱特就清醒地认识到马耳他防御的薄弱点。他预见到敌人可能会从岛屿南部，特别是天然良港马尔萨什洛克湾发起进攻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他力排众议，坚持在财政紧张的情况下，于马尔萨什洛克湾周边高地加强防御。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当1565年5月，奥斯曼舰队如他所料地出现在马尔萨什洛克的海平面上时，骑士团至少没有毫无准备。尽管临时堡垒未能阻止登陆，但它们的存在拖慢了敌军向内陆推进的速度，为骑士团组织核心防御争取了至关重要的几天。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大围攻胜利后，德·瓦莱特对马尔萨什洛克的关注从未停止。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他深知这个港口的重要性，不仅在于防御，也在于联通。在他的整体规划中，马尔萨什洛克作为岛屿东南部的海上门户，其防御体系的现代化被纳入日程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天看到的圣卢西亚石堡，正是在他的遗志下巩固完成的。可以说，是德·瓦莱特的远见，为这个渔村注入了第一缕厚重的历史硝烟，并将其永久地锚定在国家安全的版图之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 萨尔瓦托·“塔特-特里格拉”·卡莱亚：渔民之子与二战英雄</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说德·瓦莱特是来自外部的塑造者，那么<strong>萨尔瓦托·卡莱亚</strong>则是这片土地自己孕育的英雄。他更广为人知的名字是 <strong>“塔特-特里格拉”</strong>，意为“三叉戟之父”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他于<strong>1903年</strong>出生在马尔萨什洛克一个普通渔民家庭。大海是他的摇篮，也是他的课堂。成年后，他成为一名出色的渔民和水手，对马耳他群岛周边复杂的水文了如指掌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二次世界大战</strong>爆发，马耳他再次成为风暴之眼。岛屿被轴心国海空力量严密封锁，濒临弹尽粮绝。此时，“塔特-特里格拉”和他的鲁祖船“三叉戟号”站了出来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非军人，却执行了最危险的军事任务。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "凭借无与伦比的勇气和对海域的极致熟悉，他一次又一次驾驶着不起眼的小渔船，穿越德军与意军的重重封锁线，在夜色的掩护下往返于马耳他与远处的盟军补给点之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他运回了至关重要的燃油、食物、药品，甚至秘密情报和特工。他的小船成了马耳他抵抗生命的“毛细血管”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们相信‘眼睛’（指船头的图案），但更相信塔特-特里格拉的手和心。他知道每一处暗流，能听见每一艘敌军巡逻艇的声音。”——当地老渔民的回忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的事迹成为了传奇，鼓舞着整个岛屿的士气。战后，他获得了极高的荣誉，包括英国授予的杰出服务勋章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但他最终回到了马尔萨什洛克，继续他渔民的生活，直到1981年去世。他的雕像如今静静矗立在渔港旁，目光依然望向大海。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他证明了，马尔萨什洛克赋予子民的不仅是谋生的技能，更是深入骨髓的坚韧、勇气和对家园的忠诚。从圣殿骑士的宏大战役到普通渔民的默默坚守，这片海湾的英雄气概，一脉相承。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在马尔萨什洛克，历史书写的传说与渔民口耳相传的神话，同样动人。最璀璨的传说，就绘在每一艘鲁祖船的船头——那双守望千年的“眼睛”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种被称为“荷鲁斯之眼”或“法蒂玛之手”中心纹样的图案，其起源已湮没在时光中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "流传最广的说法，将其追溯到<strong>腓尼基时代</strong>。腓尼基人崇拜航海与风暴之神，他们相信在船头绘制神明的眼睛，可以保佑航行安全，驱散海上的迷雾与邪恶灵体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个古老的习俗，跨越数千年，被这里的渔民完整地继承了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，当地人还有一个更具体、更神圣的版本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们相信，这双“眼睛”的流行，与<strong>圣徒显现</strong>的奇迹有关。传说在很久以前，一场持续数月的风暴使得渔船无法出海，村里面临饥荒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一天，一位慈祥的老者出现在最资深的一位渔民梦中，告诉他：“在你们的船头绘上守望之眼，圣彼得将为你们指引鱼群，平息风浪。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "渔民们照做了。次日，风暴奇迹般减弱，他们出海后获得了前所未有的丰硕渔获。人们坚信，那位梦中的老者就是<strong>圣彼得</strong>——渔夫的守护圣徒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，为鲁祖船绘制精美的“眼睛”，不仅是传统，更是一场庄严的祈福仪式。新船下水前，船主会邀请家人朋友举行小型祝福礼。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这双眼睛不只替我们看路，也让圣徒看着我们，保佑我们平安回家。”——一位正在为儿子新船描绘眼眶的老画师说道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，马尔萨什洛克的海湾变成了一个流动的神话画廊。每双“眼睛”都独一无二，色彩斑斓，它们不再是恐惧的产物，而是希望、信仰与艺术表达的集合体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "海浪轻摇，千百双“眼睛”随波荡漾，仿佛整个海湾都在注视与庇佑着出航与归来的子民。传说，就这样活在了每一天的生活里。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你站在马尔萨什洛克的防波堤上，所见的是层层叠叠的历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最近处，是彩色的鲁祖船和喧闹的鱼市，那是17世纪以来渔民社区鲜活的生命力。目光稍移，是文艺复兴风格的圣卢西亚石堡，铭刻着1565年战争的炙热与骑士团的铁血。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而远方，德尔马拉发电厂的轮廓则提醒着现代国家的脉搏。至于脚下这片海湾的水域，则无声地倒映着公元前腓尼基商船的帆影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有恢弘的大教堂或宫殿，它的历史是实用主义的、防御性的、与生存息息相关的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不曾是中心，却总在关键时刻成为焦点——无论是作为古代文明的登陆点、史诗战争的序幕之地，还是现代能源的生命线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂马尔萨什洛克，便是读懂了马耳他历史的另一个剖面：不那么精致，却更加粗粝、真实、与大海同呼吸共命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，正在于这种未经彻底雕琢的历史层次感。每一道印记都清晰可辨，共同构成了这个“南风港口”不可复制的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "下一次，当你凝视鲁祖船上那双著名的“眼睛”时，你会知道，它守望的不仅是地中海的航路，更是穿越三千年的时光洪流。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？周日鱼市指南、鲁祖船摄影机位、海鲜餐厅推荐全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gozo-cittadella-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈佐岛维多利亚城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cittadella</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/three-cities" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    三
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">三姐妹城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Three Cities</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ghar-dalam-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加尔·达拉姆洞穴</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Għar Dalam Cave</p>
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
