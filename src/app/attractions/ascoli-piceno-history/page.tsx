import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Ascoli Piceno前世今生｜意大利‘百塔之城’与罗马角斗场的千年传奇',
  description: '探寻意大利隐秘瑰宝Ascoli Piceno。穿越古罗马广场，触摸文艺复兴宫殿，聆听“百塔之城”与橄榄角斗的不朽传说。一段被时光凝固的历史之旅。',
}

export default function AscoliPicenoHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '阿斯科利皮切诺', href: '/attractions/ascoli-piceno-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿斯科利皮切诺・Ascoli Piceno・意大利・阿斯科利皮切诺`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在亚平宁山脉与亚得里亚海之间的特龙托河畔，藏着一座被时光格外厚待的石头之城——<strong>阿斯科利皮切诺</strong>。它并非旅游手册上的常客，却拥有一个更响亮的名号：“<strong>百塔之城</strong>”与“<strong>特拉vertino石之城</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的街道、广场、宫殿，皆由一种当地特有的、闪烁着珍珠母贝般光泽的灰白色石灰华岩砌成。阳光拂过，整座城便温柔地亮了起来。然而，比石头更坚硬的是它的历史：这是一座由<strong>古罗马角斗士的呐喊</strong>、<strong>中世纪自治公社的骄傲</strong>与<strong>文艺复兴大师的才华</strong>共同锻造的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进阿斯科利皮切诺的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿斯科利皮切诺`} />
                <InfoRow label="英文名称" value={`Ascoli Piceno`} />
                <InfoRow label="正式名称" value={`Ascoli Piceno`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`阿斯科利皮切诺`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿斯科利的故事，始于山与河的庇护。早在<strong>铁器时代</strong>，一支属于意大利古族“<strong>皮切尼人</strong>”的部落便在此定居。他们并非无名之辈，传说其祖先是在<strong>圣火指引下</strong>，追随一只啄木鸟（“Picus”，也是皮切尼人名称的由来）从萨宾山区迁徙至此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特龙托河与卡斯特拉诺河在此交汇，形成天然屏障，山丘则提供了防御与瞭望的制高点。这得天独厚的地理位置，注定了它的不凡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>公元前299年</strong>，历史的洪流滚滚而来。罗马共和国在征服意大利半岛的进程中，将目光投向了这片富庶之地。经过一场关键的战役，皮切尼人最终被纳入罗马的版图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人深知此地战略价值，于<strong>公元前286年</strong>在此建立了正式的拉丁殖民地，命名为“<strong>阿斯库卢姆·皮切努姆</strong>”。这，便是城市今日名字的直系源头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“阿斯库卢姆”一词的渊源至今仍有争议，一种浪漫的假说认为它源于古词“水”，意指两河环抱的地理特征。而“皮切努姆”则明确指向了这片土地最初的主人——皮切尼人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人为它规划了整齐的棋盘格街道，修建了广场、神庙、剧院和宏大的<strong>角斗场</strong>。这座城市迅速繁荣，成为通往亚得里亚海与罗马内陆的重要枢纽。那些深埋地下的罗马基石，至今仍是阿斯科利巍然屹立的根基。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马的荣光并非永恒。帝国衰落后，阿斯科利先后经历了哥特人、伦巴第人的统治。然而，真正塑造其中世纪灵魂的，是<strong>自治公社时代</strong>的到来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1183年</strong>，阿斯科利获得了神圣罗马帝国皇帝腓特烈一世（巴巴罗萨）授予的<strong>自治特许状</strong>。从此，这座城市由民选的“长老”治理，迎来了长达两个世纪的黄金时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一时期，城市的天际线被无数高耸的塔楼所定义。贵族家族竞相修建这些石制高塔，既是财富与权力的炫耀，也是在动荡时局中的防御堡垒与住所。鼎盛时超过两百座，赢得了“<strong>百塔之城</strong>”的美誉。如今，穿行在老城窄巷，依然能邂逅这些沉默的巨人，如<strong>埃米尼亚塔</strong>、<strong>朗戈巴尔迪塔</strong>，它们是无言的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的中心——<strong>人民广场</strong>，正是这个自治时代的杰作。它被誉为“意大利最美的客厅之一”。广场三面被宏伟建筑环绕：<strong>人民宫</strong>（市政厅）、<strong>主教座堂</strong>与<strong>商人凉廊</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位中世纪编年史家曾这样描述公社广场的喧嚣：“那里不仅是正义宣判之地，更是羊毛与布匹、东方香料与本地橄榄油交易的漩涡。市民的辩论声、骡马的嘶鸣、铸币的叮当，共同谱成交响。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，自治的梦想最终被更强的势力吞噬。<strong>1482年</strong>，教宗国将阿斯科利纳入统治。这并未使其衰落，反而在文艺复兴时期迎来了艺术的第二次绽放。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>美第奇家族</strong>的教宗利奥十世，以及后来的<strong>教宗西斯都五世</strong>，都对此地青睐有加，兴建了宫殿、加固了城墙。建筑师<strong>科拉·德尔·阿马特里切</strong>等人，用优雅的文艺复兴线条重新装点了这座中世纪古城，留下了如<strong>圣方济各教堂</strong>这样壮丽的复合建筑群。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最令人震撼的历史印记，依然属于古罗马。城市地下，保存着<strong>罗马时期街巷</strong>的遗迹。地面上，一座<strong>罗马剧场</strong>的轮廓依稀可辨。但真正的重磅是那座<strong>罗马角斗场</strong>的遗迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它建于<strong>奥古斯都时代</strong>，如今部分掩映在修道院建筑之下，但其椭圆形结构清晰可见。站在这古老的砂石台阶上，你几乎能听到两千年前的咆哮与欢呼。它提醒着人们，阿斯科利的基石，是用罗马的雄心与汗水浇筑的。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市养育了坚韧而博学的灵魂，他们将自己的名字刻入了更广阔的历史。其中，<strong>切萨雷·马卡里</strong>是一位无法绕过的本土巨人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>切萨雷·马卡里</strong>出生于<strong>1820年</strong>的阿斯科利。他首先是一名律师，但历史研究与文学创作才是他真正的激情所在。他是19世纪意大利复兴运动（统一运动）的坚定支持者，用笔杆子为民族觉醒呐喊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他最为后世铭记的，是一部卷帙浩繁的史学巨著——<strong>《阿斯科利编年史》</strong>。马卡里耗费数十年心血，从尘封的档案馆、修道院文书和私人信件中，挖掘、整理、考证了从史前到16世纪末阿斯科利皮切诺的全部历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这部著作不仅是地方志，更是研究整个马尔凯地区中世纪社会、政治、经济与文化的宝库。他将这座城市的命运，与教皇国、神圣罗马帝国、以及意大利各城邦的纷繁关系紧密相连。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "马卡里在书的前言中写道：“我的目标不是堆砌枯燥的年代与事件，而是让那些建造了我们广场、为我们法律奠基、用艺术美化我们教堂的先辈们，重新呼吸、说话、行动。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的故居至今保存在老城，而他的精神遗产——对乡土深沉的热爱与严谨的治史态度，成为了阿斯科利文化认同的核心。每年，城市都以他的名义举办文化活动，纪念这位“阿斯科利的历史之声”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与这座城市羁绊颇深的名人，是<strong>教宗尼古拉四世</strong>。他于<strong>1227年</strong>出生在阿斯科利附近的利西尼亚诺，原名吉罗拉莫·马希。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位<strong>方济各会士</strong>，以其虔诚与学识一路晋升。<strong>1288年</strong>，他登上圣座，成为历史上第一位方济各会出身的教皇。尽管他的教皇任期被派系斗争和十字军东征的失败所困扰，但他对艺术和科学的赞助留下了深远影响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他资助了罗马<strong>圣马利亚大教堂</strong>的宏伟马赛克装饰，并派遣像<strong>蒙特科维诺的约翰</strong>这样的传教士远赴中国元朝，成为东西方交流的重要桥梁。对于故乡，他始终怀有深情，曾给予阿斯科利教堂和修道院特别的恩典与馈赠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然他的主要舞台在罗马，但阿斯科利人依然视他为骄傲的儿子。他的出生地利西尼亚诺保存着相关遗迹，而他的故事，也为这座虔诚的宗教城市增添了一抹来自世界之巅的传奇色彩。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿斯科利，历史与传说如同特龙托河与其支流，早已水乳交融。最动人的传说，关乎城市的守护圣人——<strong>圣埃米迪奥</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在<strong>3世纪戴克里先皇帝</strong>的迫害时期，埃米迪奥是此地的主教。他被罗马总督逮捕，因坚守信仰被判处斩首。故事的高潮发生在押赴刑场的路上：当圣人的头颅被砍下，他的身躯并没有倒下，而是<strong>双手捧起自己的头颅</strong>，步行至如今<strong>圣埃米迪奥地下教堂</strong>所在的山洞，方才安息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但民间传说赋予了圣人另一项更伟大的功绩。据说，阿斯科利曾面临一场毁灭性的<strong>山体滑坡</strong>威胁，巨大的岩体即将吞噬城市。危难之际，人们向圣埃米迪奥祈祷。只见圣人显灵，<strong>伸出右手</strong>，奇迹般地让滑坡的路径偏移，拯救了全城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，在城市的主教堂立面上，你能看到一尊圣埃米迪奥的雕像，他正是以一手“推山”的姿态守护着下方的人民广场。这个传说已化为集体记忆，解释着城市地理的安然，也象征着信仰足以移山的精神力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一则传说则与城市建筑的灵魂——<strong>特拉vertino石</strong>有关。这种石头采自城郊的山区，色泽温润，易于雕刻却异常坚固。传说采石场曾有一个深不见底的洞穴，被称为“<strong>龙穴</strong>”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老石匠们会告诫学徒：“当你敲击岩石，听到空灵的回响，要小心。那是沉睡的龙在翻身。我们取走的，是龙褪下的骨甲，用以建造人间的殿堂。要心怀敬畏，不可贪多。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，开采这种美石不仅是一项工作，更是一种与自然神灵的契约。这或许解释了为何阿斯科利的建筑虽历经数百年，却依旧散发着和谐与沉静之美，因为它们是用“被祝福的石头”砌成的。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在阿斯科利皮切诺，你不是在参观一个露天博物馆，而是在阅读一部<strong>依然活着的石之史书</strong>。每一次转角，都可能邂逅一段罗马墙基；每一座宫殿的立面，都雕刻着中世纪家族的徽章与文艺复兴的优雅花饰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有佛罗伦萨或罗马那令人窒息的游客浪潮，历史以更本真、更从容的姿态展现在你面前。在<strong>人民广场</strong>的咖啡馆坐下，看着夕阳将特拉vertino石染成蜂蜜色，你会明白：历史并非遥远的回声，它就是脚下石板的温度，是空气中橄榄油的芬芳，是当地人谈及圣埃米迪奥传说时眼中闪烁的光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂阿斯科利，便是读懂了一种<strong>意大利地方文明的顽强与璀璨</strong>。它教会我们，真正的深度，不在于地标的数量，而在于一层层时光如何在此沉淀、交融，最终凝固成一座可以触摸、可以漫步、可以与之共饮一杯咖啡的“百塔之城”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/agnone-bell-foundry-molise" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿格诺内</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Agnone</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/locorotondo-trulli-valley-italy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛科罗通多</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Locorotondo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monster-garden-eye-of-neptune" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    怪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">怪兽花园与海神之眼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monster Garden and the Eye of Neptune</p>
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
