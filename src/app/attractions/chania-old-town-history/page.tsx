import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈尼亚历史溯源｜威尼斯灯塔、拜占庭迷宫与克里特战士的前世今生',
  description: '穿越哈尼亚老城的千年时光：从米诺斯海港到威尼斯堡垒，探寻灯塔下的奥斯曼密语与二战传奇。小众希腊的深度人文之旅。',
}

export default function ChaniaOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '克里特岛', href: '/destinations/europe' },
            { label: '哈尼亚老城', href: '/attractions/chania-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈尼亚老城・Chania Old Town・希腊・克里特岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在地中海的阳光下，很少有地方如哈尼亚老城这般，将三千年的征服、贸易与文明冲突，如此戏剧化地层层叠叠在一条海滨步道与一片错综的街巷之中。它不是一座“古城”，而是一本立体的、仍在呼吸的“时光之城”。威尼斯人留下了坚不可摧的堡垒与那座孤独的灯塔，奥斯曼帝国涂抹上圆顶与木雕阳台，而克里特岛桀骜不驯的灵魂，则深藏在每一次起义的弹痕与咖啡馆的慢板音乐里。抛开游玩攻略，走进哈尼亚的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈尼亚老城`} />
                <InfoRow label="英文名称" value={`Chania Old Town`} />
                <InfoRow label="正式名称" value={`Chania Old Town`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`克里特岛`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈尼亚的故事，始于一个早已失传的名字：<strong>库多尼亚</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考古学家在城西的山丘上，发现了可追溯至<strong>公元前1900年</strong>的米诺斯定居点遗迹。库多尼亚，这个古老的名字源于希腊语的“白堊土”，暗示着此地早期可能与陶器或建筑原料相关。它并非克诺索斯那样的王权中心，而更像一个繁荣的<strong>港口与贸易枢纽</strong>，将克里特的橄榄油、葡萄酒与更广阔的爱琴海世界相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马时代，它延续着港口的职能，但真正塑造其早期城市肌理的，是<strong>拜占庭帝国</strong>。公元5世纪后，这里被称为“<strong>卡斯特罗</strong>”，意为“城堡”。这个名字精准地描绘了它的新角色：一个需要高墙保护的<strong>拜占庭行省中心与教区</strong>。早期的基督教大教堂在此建立，城市布局围绕着防御核心展开，那种迷宫般的、内向的街巷格局，于此埋下最初的种子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而“哈尼亚”这个名字的最终定型，要归功于<strong>威尼斯共和国</strong>。13世纪初，威尼斯人占领克里特，他们用意大利语的耳朵听当地的希腊语名称“La Canea”，最终将其拉丁化为“<strong>Canea</strong>”（哈尼亚）。威尼斯人看中了它天然的<strong>双港格局</strong>——外港抵御风浪，内港（即今日的老港）用于安全停泊。他们决心将这里打造成“<strong>克里特岛的威尼斯</strong>”，一个在地中海东部抗衡奥斯曼帝国的坚固前哨。城市的命运，从此与海洋强权的兴衰紧密捆绑。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道深刻的印记，是<strong>威尼斯人的野心与陷落</strong>。从13到17世纪，威尼斯共和国不遗余力地加固哈尼亚。我们今天看到的<strong>老港防御体系</strong>——包括那座标志性的灯塔地基、巨大的“<strong>菲里卡斯要塞</strong>”以及环绕老城的<strong>威尼斯城墙</strong>，都是这个时期的产物。城墙的修建耗资巨大，征用民力，却也在1645年奥斯曼大军压境时，奇迹般地坚守了<strong>57天</strong>。然而，整个克里特岛的沦陷只是时间问题。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“城墙最终被大地轰开，异教徒的旗帜插上了圣方济各教堂的尖顶。”——一位威尼斯随军教士的日记片段。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1669年</strong>，随着首府干地亚（今伊拉克利翁）陷落，威尼斯在克里特长达四个多世纪的统治彻底终结。哈尼亚的圣方济各教堂被改为清真寺（今<strong>哈尼亚考古博物馆</strong>），钟楼被唤拜塔取代。但威尼斯人的建筑基础异常坚固，奥斯曼人更多地是在其上“覆盖”而非“摧毁”，这种奇特的建筑分层，成了哈尼亚最迷人的历史剖面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是<strong>克里特人的抗争与“克里特国”</strong>。奥斯曼统治并非风平浪静。哈尼亚是数次惨烈起义的中心。1897年，又一次大起义后，在列强干预下，诞生了短命的“<strong>克里特国</strong>”（1898-1913）。哈尼亚成为这个自治国的首都。这段时期虽仅十五年，却至关重要。它给了克里特一个现代自治政府的雏形，希腊国旗首次合法地在这里升起，也为最终与希腊合并铺平了道路。老港边那栋优雅的新古典主义建筑，便是当年的<strong>议会大楼</strong>，静默诉说着这段“准国家”的历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，是<strong>二战烽火中的克里特战役</strong>。<strong>1941年5月</strong>，德军发动史上第一次大规模空降入侵——克里特战役。哈尼亚及其周边是战斗最激烈的战场之一。城市遭到猛烈轰炸，许多历史建筑受损，包括威尼斯军械库。澳大利亚、新西兰、英国及希腊守军与克里特平民并肩作战，演绎了可歌可泣的抵抗。老城许多墙壁上，至今可能还嵌着当年的弹片。这场战役虽以盟军撤退告终，却重创德国空降兵，改变了二战进程。走在老城，你脚下的石板路，或许就曾跑过奔赴战场的士兵或帮助盟军逃生的平民。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座饱经沧桑的城里，诞生与成长了塑造现代希腊命运的灵魂人物：<strong>埃莱夫塞里奥斯·韦尼泽洛斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1864年</strong>，韦尼泽洛斯出生在哈尼亚东郊的一个村庄。他的父亲曾参与克里特反奥斯曼起义，这给他埋下了革命与民族统一的种子。青年韦尼泽洛斯在哈尼亚学习法律，很快以其雄辩与智慧崭露头角。在“克里特国”时期，他成为司法部长，展现出卓越的政治才能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他一生最辉煌的篇章，与哈尼亚和克里特紧密相连。<strong>1905年</strong>，因不满亲王乔治的统治，他在哈尼亚附近的塞里索山举起“<strong>塞里索革命</strong>”旗帜，要求真正的自治并推动与希腊合并。这场革命成功迫使列强改组政府。<strong>1908年</strong>，正是在哈尼亚，他带领克里特议会单方面宣布与希腊合并。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从这座阳台，我们向世界宣告，克里特的心永远与希腊母亲在一起。”——韦尼泽洛斯在一次演讲中说道。（老城有其故居及纪念场馆）" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管克里特的国际法理合并要等到1913年，但韦尼泽洛斯已凭借在克里特的声望与政绩，步入雅典政坛核心。他后来七次出任希腊首相，是现代希腊最重要的政治家。他领导希腊参与巴尔干战争、一战，并试图在巴黎和会上为希腊争取更大利益。他的政治理念深深影响了现代希腊的国界、政体与社会改革。在哈尼亚，<strong>韦尼泽洛斯故居</strong>保存完好，港口边有他的雕像，国际机场也以他的名字命名。他是哈尼亚献给希腊最伟大的儿子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与哈尼亚精神共鸣的名人，是作家<strong>尼科斯·卡赞扎基斯</strong>。他虽出生在伊拉克利翁，但哈尼亚所代表的克里特精神——那种混合了<strong>古希腊遗风、东正教虔诚、独立不羁的野性以及对生命悲剧性的深刻认知</strong>——贯穿了他的全部作品。他的史诗小说《<strong>希腊人佐尔巴</strong>》中那股原始的生命力，其源头正是克里特的山与海。他曾说：“克里特是一块巨石，在地中海上被磨砺、被炙烤。” 哈尼亚的老港、市集与街巷，就是这种磨砺与炙烤的生活剧场。游客可以在老城找到与他相关的书店或咖啡馆，感受这位文学巨匠笔下那份源自故土的热烈与哲思。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在哈尼亚，最动人的传说环绕着那座<strong>威尼斯灯塔</strong>。故事发生在奥斯曼统治时期。相传，一位奥斯曼帕夏（总督）美丽的女儿，爱上了一位被俘虏的威尼斯工程师。帕夏震怒，将工程师囚禁在灯塔底部的石室中，命其永远维护灯塔，不得与公主相见。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公主每日在面朝港湾的宫殿（今一座奥斯曼建筑）阳台上，眺望情人的孤灯。工程师则夜夜点亮灯塔，那光芒既是为船只引航，也是给爱人唯一的讯号。年复一年，直到生命尽头，他们再未相见。但灯塔的光，成了这段跨越信仰与敌我鸿沟之爱情的永恒见证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，当地老人们有时会说，灯塔的光里有一丝温柔的忧伤。它也常被昵称为“<strong>情人之塔</strong>”。这个传说解释了灯塔何以在奥斯曼时期得到精心维护，也隐喻了哈尼亚本身——在征服与对抗的冰冷历史下，永远涌动着人性共通的情感暖流，连接着不同的文明。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂哈尼亚，便是读懂地中海东部一部微缩的史诗。它不是一个静止的博物馆，而是一个<strong>不断被书写、被覆盖、又被重新发现的历史现场</strong>。每一步，你都踩在米诺斯的基石、威尼斯的地基、奥斯曼的砖石和二战后的修补之上。这里的“景点”不是孤立的存在：灯塔是航海霸权与凄美传说的合体，清真寺是信仰更迭的物证，一道弹痕墙是欧洲反法西斯战争的见证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，正在于这种<strong>惊人的历史密度与视觉上的和谐统一</strong>。不同时代的建筑并非杂乱堆砌，而是在阳光、海风与时间的调和下，形成了独特的美学。这背后，是克里特人顽强的生命力，他们接纳每一段历史，将其转化为自身身份的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到这里，请放慢脚步，触摸那些斑驳的墙体，坐在老港边想象威尼斯商船与奥斯曼帆船进港的盛景，在迷宫般的小巷里聆听历史的回音。哈尼亚老城教会我们的，是文明如何在碰撞中融合，坚韧如何在创伤中重生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/karpenisi-greece" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔派尼西</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karpenisi</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mega-spilaion-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    大
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">大斯皮莱翁修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mega Spilaion Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sanctuary-of-the-great-gods-samothrace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨莫色雷斯岛伟大神明圣域</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sanctuary of the Great Gods (Samothrace)</p>
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
