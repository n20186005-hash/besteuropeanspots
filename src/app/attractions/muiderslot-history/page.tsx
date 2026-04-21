import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '梅登城堡历史溯源｜荷兰水上要塞的前世今生与“穆登圈”名人传奇',
  description: '并非童话模板。探索荷兰保存最完好的中世纪水上城堡——梅登城堡的尘封史诗：从伯爵要塞到文化沙龙，看一方砖石如何折射低地国家的兴衰与文艺复兴之光。',
}

export default function MuiderslotHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '荷兰', href: '/destinations/europe' },
            { label: '北荷兰省，穆登', href: '/destinations/europe' },
            { label: '梅登城堡', href: '/attractions/muiderslot-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`梅登城堡・Muiderslot・荷兰・北荷兰省，穆登`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿姆斯特丹东南，艾湾（IJsselmeer）的宁静水波旁，一座石砌城堡如时光琥珀般凝固。它不是迪士尼的幻象，而是荷兰水防战略与黄金时代文化的双重心脏——梅登城堡。这里的一砖一瓦，镌刻着从军事威慑到文艺沙龙的惊人蜕变，见证了诗人、学者与将军在此交汇，共同谱写了一段被后世称为“穆登圈”的低地国家文艺复兴传奇。抛开游玩攻略，走进梅登城堡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`梅登城堡`} />
                <InfoRow label="英文名称" value={`Muiderslot`} />
                <InfoRow label="正式名称" value={`Muiderslot`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`北荷兰省，穆登`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穆登（Muiden）小镇的名字，直接揭示了它的天命。“Muiden”在古荷兰语中意为“河口”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里正是费赫特河（Vecht）汇入广阔祖德尔海（Zuiderzee，今艾湾）的关键节点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1280年</strong>，荷兰伯爵<strong>弗洛里斯五世</strong>在此动土，修建了第一座梅登城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生，毫无浪漫色彩，纯粹是冷酷的战略计算。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，荷兰伯爵与邻近的乌得勒支主教区争斗不休。费赫特河是通往乌得勒支腹地的重要商道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "控制河口，就等于扼住了对手的经济咽喉，并能对来自祖德尔海（当时还是危险的海域）的威胁做出快速反应。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的城堡是简单的方形结构，带有厚重的城墙和护城河，直接引入河水，将其变成一座孤岛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗洛里斯五世是一位极具野心的统治者，他通过修建城堡、授予城市特权来巩固权力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "梅登城堡就是他权力网络中的一个关键军事节点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这位“荷兰的创建者”命运多舛。1296年，他在附近狩猎时遭贵族背叛杀害。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的死亡也直接导致了第一座梅登城堡的毁灭。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据编年史记载，<strong>1300年</strong>，弗洛里斯五世的敌对势力——乌得勒支主教和弗洛里斯的部分封臣，联合起来“将穆登的城堡夷为平地，直至地基”。他们认为这是消除伯爵威胁的必要之举。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡化为废墟，但它的战略价值永不褪色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "近一个世纪后，另一股力量将在此处重新奠基。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道深刻印记，是毁灭与重生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "废墟静卧了七十年。<strong>1370年</strong>，一位新的强权人物登场：<strong>阿尔伯特一世</strong>，巴伐利亚公爵，同时也是荷兰的摄政王。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他看中了这个咽喉要地，决定在原址上重建一座更坚固、更符合当时军事科技的城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天所见的梅登城堡，正是阿尔伯特一世的遗产。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它采用了经典的“同心圆”防御设计：中心是高大的主塔（城堡主楼），四周环绕着带有塔楼的城墙，外围是宽阔的护城河。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种设计让进攻者需要突破层层防线。城堡的砖石呈现独特的红棕色调，那是荷兰本土粘土烧制的印记，在北方灰蓝的天空与水色映衬下，肃穆而坚实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，关乎荷兰的独立血脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十六世纪末，轰轰烈烈的<strong>八十年战争</strong>（荷兰独立战争）席卷低地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "梅登城堡因其位置，成为西班牙军队与荷兰起义军反复争夺的目标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1577年</strong>，在“海上乞丐”（荷兰反抗军）的猛攻下，城堡从西班牙驻军手中被夺取，正式纳入荷兰共和国版图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，它的军事角色发生了微妙的转变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不再是封建领主私斗的堡垒，而是新生共和国“荷兰水防线”（Hollandse Waterlinie）上的一个前哨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这道水防线是荷兰人的天才防御发明：在敌人入侵时，打开闸门淹没低地，形成一道无法逾越的浅水屏障，仅留道路和城堡等高地作为防御支点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "梅登城堡，就是这样一个关键的“支点”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，则与和平时期的转型息息相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当战争阴云暂时散去，城堡的军事功能减弱。<strong>1609年</strong>，一位特殊的“看守者”受命入驻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他就是诗人兼历史学家<strong>皮特·霍夫特</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "共和国并未废弃这座要塞，而是将其作为官职（穆登的德罗斯特丹与 bailiff）的官邸赐予他。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个决定，意外地点燃了城堡历史上最辉煌的文化火炬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "厚重的军事堡垒，即将迎来它作为文艺沙龙的黄金时代。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说城堡的砖石是骨骼，那么<strong>皮特·霍夫特</strong>则为它注入了灵魂与血液。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍夫特（<strong>1581-1647</strong>）本身就是荷兰黄金时代的一颗明星。他出身阿姆斯特丹名门，游学欧洲，深受意大利文艺复兴影响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅是诗人、剧作家，还是撰写《荷兰史》的严肃历史学家。<strong>1609年</strong>，28岁的他入住梅登城堡，一住就是38年，直至去世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并未将这里视为冰冷的岗哨。在他的主持下，城堡经历了精心的“软化”改造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他引入了当时最新的舒适设施，装修了房间，并在城堡花园中种植了奇花异草，甚至尝试引种外来的果树。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但最重要的改造，是无形的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍夫特以其学识、品味和人格魅力，将梅登城堡变成了整个尼德兰地区最著名的文化沙龙——“<strong>穆登圈</strong>”（Muiderkring）的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每周，来自阿姆斯特丹的文人雅士、艺术家、科学家会乘船沿费赫特河而下，齐聚城堡。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "霍夫特在一封信中愉快地描述：“我的小城堡成了缪斯的殿堂，这里充满了美妙的谈话、音乐和新思想的碰撞。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "常客名单堪称荷兰黄金时代的“名人录”：" }} />
              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "  <strong>玛丽亚·德塞尔</strong>：霍夫特的知音与爱人，本身就是一位才华横溢的诗人和音乐家。她的存在，为沙龙增添了不可或缺的优雅与艺术气息。" }} />
              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "  <strong>若斯特·范·登·冯德尔</strong>：荷兰最伟大的剧作家，被誉为“荷兰的莎士比亚”。他的许多思想或许就在城堡大厅的火炉边得以酝酿。" }} />
              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "  <strong>格劳秀斯</strong>：国际法奠基人，名著《论海洋自由》的作者。他在流亡生涯前后，也曾是这里的座上宾。" }} />
              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "  还有作曲家、医生、地图绘制家……他们在此朗诵诗歌，演奏音乐，探讨哲学、科学和政治。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个圈子并非严格的文学团体，而是一种松散、高雅的知识分子社交网络。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍夫特通过沙龙，极大地促进了荷兰标准语的提炼和文艺复兴文化在本土的传播与成熟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡见证了他个人的创作高峰，也见证了荷兰文化自信的崛起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，传奇总有阴影。霍夫特与玛丽亚的爱情，因社会地位悬殊（玛丽亚出身较低）而无法正式结合，成为一段毕生的遗憾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1647年</strong>，霍夫特在城堡中因瘟疫病逝。他去世后，“穆登圈”便风消云散，城堡再次陷入沉寂，主要作为军事仓库和监狱使用。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到<strong>1878年</strong>，这座日益破败的城堡面临被拆除的危机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这时，另一位“贵人”出现：<strong>维克多·德·斯图尔斯</strong>，荷兰著名的艺术史学家和国家遗产保护先驱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他发起了一场轰轰烈烈的拯救运动，成功游说政府将其收购。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在他的主持下，城堡进行了严谨的、基于历史考据的修复，目标不是创造新物，而是还原其十七世纪霍夫特时代的辉煌风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1878年</strong>的拯救，让梅登城堡没有沦为采石场，而是成为了荷兰第一座国家博物馆城堡，于<strong>1895年</strong>向公众开放。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德·斯图尔斯保护的不仅是建筑，更是霍夫特留在砖石间的文化之魂。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围绕梅登城堡的传说，大多与它的建造者<strong>弗洛里斯五世</strong>伯爵的悲剧命运紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的，是关于城堡内一口井的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，在弗洛里斯五世被谋杀后，他的魂魄无法安息。因为他被埋葬在阿尔克马尔，而心脏据说被单独安葬在穆登。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们相信，他的幽灵有时会出现在城堡的城墙上，或在午夜时分从城堡的“<strong>伯爵之井</strong>”中传出叹息。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一个古老的传说讲述：每逢暴风雨之夜，井水会无故翻涌，那是伯爵的亡灵在为他未竟的霸业和突如其来的背叛而悲愤不已。甚至有守夜人声称，看到过身着十三世纪服饰的高大幻影，在井边徘徊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更具浪漫（或惊悚）色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，弗洛里斯五世之所以遭贵族背叛，部分原因是他与一些平民骑士（而非传统贵族）交往过密，触怒了既得利益集团。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而谋杀他的地点，就在穆登附近的森林中。传说他被自己的教子等人设计诱捕，在试图逃跑时，他的马陷入沼泽，最终被杀害。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个“伯爵陨落”的故事在低地国家广为流传，为城堡的起源蒙上了一层悲壮的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至于霍夫特时代，则留下了一些温馨的轶事，它们介于历史与传说之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "比如，据说霍夫特为了给玛丽亚一个惊喜，特意在城堡花园中为她种植了一片特别的玫瑰花丛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有故事说，沙龙聚会时，若天气晴好，他们会泛舟河上，在桨声灯影中继续他们的辩论与吟唱，歌声顺着费赫特河飘出很远。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说与轶事，如同藤蔓般缠绕着城堡冰冷的石壁，让它从一部军事史册，变成了一本充满人性温度的故事集。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你乘船靠近，或走过吊桥进入梅登城堡，你穿越的不仅仅是护城河。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你从二十一世纪的荷兰，一步踏入<strong>阿尔伯特一世</strong>的军事要塞；再穿过庭院，便走进了<strong>皮特·霍夫特</strong>的文艺客厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种时空叠印的体验，正是它最核心的魅力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不像许多被掏空、仅剩外壳的城堡。它的房间里，陈列着十七世纪的家具、武器、挂毯，甚至还原了霍夫特的书房。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你会感觉主人似乎只是暂时出门散步，炉火还温，墨迹未干。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它静静地诉说着荷兰历史的两个关键面相：<strong>以水为盾的生存智慧</strong>，与<strong>黄金时代以商业财富滋养出的、蓬勃自信的文化追求</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有发生过改变欧洲格局的著名战役，却孵化过影响荷兰文学语言的思想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "没有王室居住的奢华，却充满知识分子交锋的熠熠星光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂梅登城堡，你便读懂了一个小国如何将战略要地，升华为精神家园；如何让石头堡垒，开出了文艺复兴的花朵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史的厚重不仅存在于恢弘的史诗中，也凝结在这座水上孤岛每一次从毁灭到重生、从剑刃到诗笔的转型里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、城堡内部参观路线与花园打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/giethoorn" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    羊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">羊角村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Giethoorn</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zwolle-hanseatic-star-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹沃勒</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zwolle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veere-historic-port" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费勒</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veere</p>
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
