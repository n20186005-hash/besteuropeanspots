import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '沃尔泰拉历史溯源｜一座活着伊特鲁里亚古城的千年传奇与隐秘前世',
  description: '深入托斯卡纳的孤傲山巅，探寻沃尔泰拉：从伊特鲁里亚祭司之城到文艺复兴要塞，尘封千年的盐道、黑曜石与教皇密使的传奇故事，尽在此处。',
}

export default function EtruscanVolterraHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '沃尔泰拉伊特鲁里亚遗址', href: '/attractions/etruscan-volterra-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`沃尔泰拉伊特鲁里亚遗址・Etruscan Volterra・意大利・沃尔泰拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在托斯卡纳连绵的温柔丘陵之上，一座孤傲的石头城池拔地而起，它不属于梅迪奇，也不完全属于罗马。<strong>沃尔泰拉</strong>，是伊特鲁里亚文明留给亚平宁半岛最后的、也是最倔强的背影。这座城市并非被“发现”的遗址，而是一个依然在呼吸的历史层叠现场——伊特鲁里亚的城墙托举着中世纪的塔楼，罗马剧院的残垣凝视着文艺复兴的宫殿。抛开游玩攻略，走进沃尔泰拉的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`沃尔泰拉伊特鲁里亚遗址`} />
                <InfoRow label="英文名称" value={`Etruscan Volterra`} />
                <InfoRow label="正式名称" value={`Etruscan Volterra`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`沃尔泰拉`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沃尔泰拉的起源，深埋在伊特鲁里亚文明的迷雾之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生与<strong>公元前8世纪</strong>左右活跃在意大利中部的伊特鲁里亚人息息相关。这个民族来源成谜，语言不属于印欧语系，却创造了高度发达的城市文明。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沃尔泰拉最初的伊特鲁里亚语名可能是 <strong>“Velathri”</strong> 或 <strong>“Felathri”</strong>。这个名字的涵义已不可考，或许与当地的某个神祇或地理特征有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市并非随意而建。它雄踞于海拔555米的山脊之上，俯瞰着切奇纳河与埃拉河谷。这绝非为了欣赏风景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其选址是精明的战略与生存智慧：易守难攻的天然屏障，控制着周围富饶的农业土地与至关重要的矿藏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最重要的是，这里蕴藏着一种被称为“<strong>黑色黄金</strong>”的资源——<strong>黑曜石</strong>。这种锋利的火山玻璃，是石器时代至铁器时代早期最珍贵的工具与武器原料。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沃尔泰拉的山丘，就是一座巨大的黑曜石宝库。这使得它在贸易网络中获得早期繁荣，并积累了最初的财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "后来，罗马人征服此地，将其拉丁化为 <strong>“Volaterrae”</strong>。这个名字被普遍解读为“飞翔之翼”或“高地之城”，形象地描绘了它如雄鹰之巢般盘踞山巅的姿态。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，从一开始就刻下了“防御”与“高度”的基因。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沃尔泰拉的历史，是一部在强权间周旋、却始终试图保持自我身份的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是它作为<strong>伊特鲁里亚十二城邦联盟</strong>重要成员的辉煌。尤其在公元前4至3世纪，沃尔泰拉是联盟中北部最强大的城邦之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其势力范围一度延伸到第勒尼安海沿岸。至今环绕老城的<strong>伊特鲁里亚城墙</strong>，部分仍由巨大的方形石块垒砌，沉默地诉说着那个时代的坚固与雄心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，最独特的印记在于它的<strong>宗教保守主义</strong>。当其他伊特鲁里亚城邦逐渐希腊化、罗马化时，沃尔泰拉以顽固坚守古老的宗教传统而闻名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的贵族<strong>祭司阶层</strong>（Haruspex）权力极大，他们通过观察牺牲动物的肝脏来预测神意，这种仪式被认为在这里得到了最纯粹的保存。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在沃尔泰拉，预言与政治是同一枚硬币的两面。执政官在做出任何决定前，都必须等待祭司从献祭羔羊的内脏中解读出神灵的许可。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个转折性印记是它的<strong>罗马化进程</strong>。与许多激烈反抗的城邦不同，沃尔泰拉选择了相对“聪明”的臣服。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在公元前3世纪末的罗马-伊特鲁里亚战争中，它通过条约成为罗马的同盟者，从而保全了相当程度的自治权和繁荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城中壮观的<strong>罗马剧院</strong>（建于奥古斯都时期）就是这一融合期的见证。但融合之下，暗流涌动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马内战时期，沃尔泰拉错误地支持了马略派，最终在公元前82年被苏拉的军队残酷围困两年后攻陷。这段惨痛记忆，让沃尔泰拉学会了更深沉的隐忍。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是中世纪城市自治的<strong>骄傲与伤痛</strong>。作为自由的城邦，它曾与佛罗伦萨、锡耶纳平起平坐。然而，一场因盐而起的悲剧改变了它的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1472年，佛罗伦萨的梅迪奇家族因其垄断盐业贸易，引发了沃尔泰拉的市民暴动，史称“<strong>盐荒暴动</strong>”。愤怒的市民驱逐了佛罗伦萨的盐务官。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此举招致了洛伦佐·美第奇（伟大的洛伦佐）的残酷报复。他派出的军队不仅血腥镇压了反抗，更系统地拆毁了城市的城墙与防御工事，并屠杀了大量平民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，沃尔泰拉的独立梦想彻底终结，沦为佛罗伦萨共和国的一个边远属地。这场悲剧，在沃尔泰拉人心中刻下了比任何外敌入侵都更深的伤痕。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座层叠如史书的城市里，名人并非总是光彩夺目的艺术家，更多的是在历史夹缝中留下复杂足迹的人物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是文艺复兴时期一位充满矛盾的“<strong>双面人</strong>”——<strong>弗朗切斯科·斯福尔扎</strong>的秘书与传记作者，<strong>乔万尼·西蒙内塔</strong>（Giovanni Simonetta），更常被称为 <strong>“帕诺米塔”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非沃尔泰拉土著，但他的命运与这座城紧密相连。帕诺米塔是一位出色的人文主义者、历史学家，同时也是米兰公爵冷酷无情的雇佣兵统帅与政治家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最著名的作品是《弗朗切斯科·斯福尔扎事迹》，一部为他的主公歌功颂德的传记。然而，当斯福尔扎家族倒台后，他被胜利者囚禁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇之处在于逃脱后的选择：他没有返回米兰或佛罗伦萨的中心舞台，而是隐居于相对偏僻的<strong>沃尔泰拉</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，他度过了生命的最后时光。远离了宫廷阴谋与刀光剑影，或许在沃尔泰拉陡峭宁静的街巷中，这位见过太多血腥与背叛的文人，找到了内心最后的平静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的存在，为沃尔泰拉增添了一层文艺复兴政治残酷性与人文理想矛盾交织的微妙底色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是真正与沃尔泰拉城市肌理相融合的艺术家——<strong>乔治·瓦萨里</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "没错，就是那位写下不朽的《艺苑名人传》，定义了整个文艺复兴艺术史的<strong>乔治·瓦萨里</strong>。他不仅是一位作家，更是一位活跃的建筑师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沃尔泰拉的城市面貌，深深地烙有他的印记。1543年，受命于科西莫一世·德·美第奇（美第奇家族已成为托斯卡纳大公），瓦萨里主持重建了沃尔泰拉的市政中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他设计并建造了宏伟的<strong>市政厅</strong>（Palazzo dei Priori）内部的庭院与部分结构，更重要的是，他彻底重塑了城市的主广场——<strong>普里奥里广场</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦萨里遵循着文艺复兴的理性与秩序原则，将原本杂乱的中世纪广场规整化，用统一的建筑立面赋予其庄严感。他甚至还加固了城市的防御工事，美第奇家族的“鹰堡”就留有他的设计思想。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "瓦萨里在日记中曾提及沃尔泰拉的工作：“这座古老的城市坐落在高山之巅，充满了伊特鲁里亚的记忆。我的任务不是抹去这些，而是用新的秩序，为美第奇公爵的权威提供一个坚固而优雅的框架。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有趣的是，瓦萨里作为美第奇家族的“御用”设计师，他在这里的工作，本质上是将那个曾血腥镇压沃尔泰拉的家族权力，用石头和几何美学永久地铭刻在城市中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位伟大的艺术家，也是征服者意志的执行者。这种双重性，让他在沃尔泰拉的历史中，成为一个复杂而耐人寻味的注脚。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在沃尔泰拉，历史与传说的界限常常模糊。最动人的传说，围绕着一座中世纪宫殿上的神秘石雕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>普里奥里广场</strong>旁，矗立着<strong>普里奥里宫</strong>（Palazzo dei Priori）。在其正门左侧的墙壁上，镶嵌着一只古老的、已被岁月磨蚀的<strong>石狮子</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非威风凛凛，反而有些粗拙可爱。当地人称它为“<strong>波尔泰拉的石狮</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，这只狮子并非普通的装饰。在中世纪，沃尔泰拉有一位技艺超凡但性格孤僻的石匠，名叫<strong>皮耶罗</strong>。他深爱着一位贵族小姐，但身份悬殊，爱情无望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "心碎之余，他将全部情感倾注于一件作品——就是这只石狮。传说他雕刻时，混入了自己的鲜血与泪水，并施以从伊特鲁里亚古墓中学来的神秘咒语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他向上天祈求：愿这只石狮能守护这座城市，让它免受自己心碎之苦般的“分离”与“征服”之痛。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的民谣这样唱道：“石狮睁着眼，沃尔泰拉永平安；石狮若垂首，灾祸必临头。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们相信，正是这只被赋予爱与悲伤魔力的石狮，在冥冥中守护着沃尔泰拉。尽管它经历了罗马的征服、佛罗伦萨的镇压，但城市的核心精神、它那倔强的“自我”，却如同这尊石狮一样，始终未曾被彻底磨灭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到今天，当地人路过时，仍会习惯性地触摸一下石狮，仿佛能从冰冷的石头中，汲取到那份穿越千年的坚韧与守护之力。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在沃尔泰拉，你行走的不是一个“景点”，而是一个依然在运转的<strong>时间剖面</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊特鲁里亚城门下的车辙痕，是公元前商队碾过的回声；罗马剧院里，风声仿佛还夹杂着古拉丁语的台词对白；中世纪塔楼的阴影，投在瓦萨里设计的文艺复兴广场上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的每一块斑驳的凝灰岩，都不仅是建筑材料，更是沉默的史官。它不向你灌输宏大的历史叙事，而是让你在陡峭的巷弄转角，在突然出现的古城墙断面，在博物馆里那些表情神秘的乌黑陶俑（卡诺皮罐）面前，亲身感受到文明层叠的质感与重量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂沃尔泰拉，便是读懂一种在潮流中保持边缘、在征服下存续内核的生存智慧。它提醒我们，欧洲文明的璀璨，不仅在于佛罗伦萨或罗马的中心辉煌，同样在于这些“次要”舞台上，那些坚韧、保守、伤痕累累却从未真正逝去的古老灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市，是写给所有历史漫步者的一封密信，信上写着：真正的永恒，藏在变迁的缝隙之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/loreto-aprutino-abruzzo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛雷托阿普鲁蒂诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Loreto Aprutino</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alberobello-trulli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔贝罗贝洛圆顶石屋</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alberobello</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/orvieto" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔维耶托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orvieto</p>
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
