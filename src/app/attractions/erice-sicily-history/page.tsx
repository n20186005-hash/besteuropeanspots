import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃里切（Erice）历史溯源｜西西里天空之城的千年神话、维纳斯圣殿与诺曼传奇',
  description: '攀登至云雾之巅，探索意大利埃里切山城的前世今生。从腓尼基圣坛到中世纪堡垒，跟随埃涅阿斯、腓特烈二世的足迹，揭开这座“西西里之巅”被遗忘的史诗。',
}

export default function EriceSicilyHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '埃里切山城', href: '/attractions/erice-sicily-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃里切山城・Erice・意大利・西西里岛特拉帕尼省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在特拉帕尼湾上方750米的孤峰之巅，云雾常驻之处，矗立着一座时间仿佛停滞的中世纪石城。它并非寻常的意大利山城，而是一座层层叠压着三千年信仰与权力的“圣山”。<strong>埃里切</strong>，古希腊人眼中的<strong>厄律克斯</strong>，中世纪文献里的<strong>圣朱利亚诺山</strong>，三个名字对应着它三重鲜为人知的身份：腓尼基与希腊时代的地中海维纳斯崇拜中心、中世纪诺曼权力的鹰巢、现代科学寻找宇宙秩序的隐秘圣地。抛开游玩攻略，走进埃里切的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃里切山城`} />
                <InfoRow label="英文名称" value={`Erice`} />
                <InfoRow label="正式名称" value={`Erice`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`西西里岛特拉帕尼省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃里切的起源，深埋在神话与战略需求的交汇点。其历史可明确追溯至公元前<strong>8世纪</strong>，但传说将它推向更古老的迷雾。最初，这里是<strong>腓尼基人</strong>在向西航行时建立的一个重要据点与圣所。他们崇拜一位名叫<strong>阿斯塔特</strong>的丰饶与战争女神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "山巅的位置绝非偶然。它俯瞰整个特拉帕尼湾与第勒尼安海航道，是绝佳的瞭望台与天然堡垒。更关键的是，在古代世界，高山常被视为连接神明的场所。腓尼基人将这座孤峰神圣化，奠定了它千年圣地的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "后来，<strong>希腊殖民者</strong>到来，他们征服此地，并巧妙地进行了“神祇融合”。他们将腓尼基的阿斯塔特与自己的爱神<strong>阿佛洛狄忒</strong>（罗马的维纳斯）等同起来，并将山峰以神话中的英雄<strong>厄律克斯</strong>命名。传说厄律克斯是海神波塞冬与一位仙女之子，曾与赫拉克勒斯角力。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在雄伟的厄律克斯山巅，矗立着阿佛洛狄忒远近闻名的神殿，祭司并非凡人，而是一大群鸽子。” —— 古希腊历史学家<strong>狄奥多罗斯·西库鲁斯</strong>的记载，描绘了其神圣景象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，<strong>厄律克斯</strong>（Eryx）成为了这座城的希腊名，并因拥有地中海最重要的<strong>维纳斯神庙</strong>之一而声名远播。它的名字，从一开始就与神秘、神圣和战略牢牢绑定。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃里切的石头，铭刻着地中海权力更迭的编年史。第一个核心印记，是那座声名显赫却已消失的<strong>维纳斯神庙</strong>。它不仅是宗教中心，更是古代国际政治的工具。迦太基名将<strong>汉尼拔</strong>在第二次布匿战争前，曾专程前来献祭，祈求女神保佑他远征意大利的宏图。罗马人征服西西里后，同样尊崇此地，将“维纳斯·厄律西娜”迎请至罗马，建立了崇拜。神庙的财富与影响力持续了上千年，直至早期基督教时代才逐渐衰败，石材被挪用于建造后来的城墙与教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个不可磨灭的印记，是<strong>诺曼征服</strong>与中世纪城堡的建立。<strong>12世纪</strong>，诺曼人成为西西里的新主人。他们看中了埃里切无与伦比的战略地位，在古希腊神庙乃至可能更早的腓尼基堡垒遗址上，建造了宏大的<strong>维纳斯城堡</strong>。这座城堡并非王室居所，而是一个纯粹的军事与权力符号，用以震慑整个西部地区。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从这令人眩晕的制高点，诺曼伯爵如同鹰隼，凝视着他的领地。” —— 中世纪编年史暗示了城堡的统治功能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡与密集的石屋、蜿蜒的街巷，共同构成了我们今天看到的、近乎完整的<strong>中世纪城镇肌理</strong>。石头路面、隐秘的庭院、厚重的城门，每一处都是为了防御而设计。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是名字的变迁。随着基督教彻底取代多神教，与异教神维纳斯紧密相连的“厄律克斯”之名不再合时宜。中世纪时期，它以附近的守护圣人<strong>圣朱利亚诺</strong>重新命名，称为“<strong>圣朱利亚诺山</strong>（Monte San Giuliano）”。这个名字使用了近八百年，直到1934年，墨索里尼的民族主义政府为追溯罗马帝国的荣光，才正式恢复其古名<strong>埃里切</strong>。一座城的名字，就是一部微缩的意识形态史。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃里切的传奇，与一位如流星般闪耀的皇帝紧密相连——<strong>腓特烈二世</strong>。这位<strong>13世纪</strong>的西西里国王、神圣罗马帝国皇帝，被称为“<strong>世界惊奇</strong>”。他不仅是强大的统治者，更是热烈的学者、科学家、诗人，一位真正的文艺复兴先驱，却生活在中世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "腓特烈二世对埃里切情有独钟。这座高耸、孤寂、接近天空的城堡，完美契合了他兼具理性与神秘的气质。他将维纳斯城堡作为重要的行宫之一。在这里，他或许远眺海洋，思考着他的帝国蓝图；或许与来自阿拉伯、犹太、希腊的学者们讨论天文学与哲学。他的宫廷是东西方文化的熔炉，而埃里切的山巅，如同一个远离尘嚣的思考室。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最著名的轶事之一与猎鹰有关。腓特烈二世是历史上最早的现代鸟类学家之一，撰写了不朽的著作《<strong>猎鹰的艺术</strong>》。埃里切周围的山崖与气流，是训练鹰隼的绝佳场所。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“皇帝陛下在厄律克斯城堡的塔楼上，花费数小时观察飞行的猛禽，记录它们翅膀的每一次扇动，眼中闪烁着求知的光芒。” —— 宫廷编年史官的描述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，他曾在此进行过一项惊人的实验：将囚犯的眼睛缝上，放置在不同的高处，测试他们是否能仅凭“感觉”到高度而恐惧。这个传说虽恐怖，却侧面印证了他在人心与生理学上的病态好奇心。他的存在，为埃里切的中世纪石头，注入了一种复杂的、近乎现代的科学探索精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与埃里切有短暂交集的巨人，是<strong>伽利略·伽利莱</strong>。<strong>17世纪</strong>初期，伽利略已因支持日心说受到教会压力。他曾受邀访问埃里切，或许是为了利用其高海拔进行天文观测。虽然没有明确记录他在这里的重大发现，但这座“靠近星星”的古城与这位试图重新定义宇宙的科学家之间的相遇，本身就充满了象征意义。埃里切，从崇拜天神维纳斯的圣地，无意中成为了人类科学仰望星空的又一站台。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃里切，历史与传说在街巷的雾气中融为一体。最古老的传说，直接关系到它的名字与神庙的起源。这源于罗马史诗《埃涅阿斯纪》。英雄<strong>埃涅阿斯</strong>在特洛伊沦陷后漂泊海上，他的母亲、爱神维纳斯指引他来到父亲安喀塞斯的身边，而地点正是<strong>厄律克斯山</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "维纳斯对埃涅阿斯说：“升起帆，驶向你父亲所在之地……意大利的土地并非你的归宿，你该去的是厄律克斯，你的祖先之地。” —— 维吉尔的《埃涅阿斯纪》为这座山赋予了神圣的家族使命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说埃涅阿斯在此建立了对母亲维纳斯的崇拜，并奠定了神庙的根基。这个罗马官方的“神话嫁接”，成功地将埃里切纳入了罗马建国神话的体系，使其神圣性得到了“钦定”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更接地气，关乎城市著名的甜点——<strong>热那亚海绵蛋糕</strong>。这种用杏仁粉和糖制成的精致糕点，是埃里切修道院的修女们的杰作。传说中，一位修女在制作祭品时，受到了天使的启发，才创造了这“宛如云朵”的口感。而更浪漫的说法是，修女们通过蛋糕上糖霜编织的复杂花纹，向围栏外的世界传递隐秘的情感密码。时至今日，城中古老的糕点店依然遵循着数百年的配方，每一口甜腻，都仿佛带着修道院石窗后的叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有一则关于“<strong>金箭</strong>”的传说。据说，维纳斯神庙中曾供奉着一支由黄金制成的箭矢，是女神与凡人英雄厄律克斯爱情的象征。它在战乱中失踪，但当地老人说，在某些极其清澈的月夜，你仍能在城堡的乱石墙上，看到一道转瞬即逝的金色反光——那是失落的神圣遗物，仍在守护着这座山城。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的埃里切，依然活在其厚重的历史层次里。行走在“<strong>王室之路</strong>”光滑的火山岩路面上，你踩过的是诺曼总督的仪仗路径；抚摸<strong>圣马丁教堂</strong>的墙壁，可能触碰到来自维纳斯神庙的古老石材；在<strong> Pepoli 城堡</strong>的露台俯瞰无边的海与盐田，视线与腓尼基瞭望者、汉尼拔、腓特烈二世曾凝视的风景重叠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂埃里切，便是读懂一种地中海文明的生存范式：它如何在神圣与世俗、崇拜与权力、孤立与联通之间不断平衡。它从未成为庞大的都市，却始终是一个强大的“符号”，一个各方势力都必须占领或致敬的精神制高点。它的价值不在于有多少景点可打卡，而在于那种<strong>浓缩的时空沉浸感</strong>。在这里，神话是历史，传说嵌入石缝，每一阵掠过城堡的风，都夹杂着三千年的低语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座“天空之城”邀请你的，不是匆忙的游览，而是一场缓慢的、向历史纵深的徒步。当你穿过“尖拱门”，迷失在寂静的巷弄中时，你便成了它漫长传奇中，又一个短暂的、却也是永恒的注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tarquinia-etruscan-necropolis" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔奎尼亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarquinia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dolceacqua" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多尔切阿夸</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dolceacqua</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/certaldo-tuscany" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    切
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">切尔塔尔多</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Certaldo</p>
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
