import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图尔奈历史溯源｜千年大教堂见证的五朝传奇与哥特序幕',
  description: '深入比利时最古老的城市之一，探寻图尔奈圣母主教座堂的千年故事。从罗马根基到哥特巅峰，每一块石头都镌刻着王朝更迭与信仰传奇。',
}

export default function TournaiCathedralHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '图尔奈', href: '/destinations/europe' },
            { label: '图尔奈大教堂', href: '/attractions/tournai-cathedral-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`图尔奈大教堂・Tournai Cathedral・比利时・图尔奈`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在比利时的法语区，藏着一座被游客匆匆略过的千年古城——图尔奈。它不仅是法兰克王国墨洛温王朝的发源地，更矗立着一座堪称“石质百科全书”的宏伟建筑：图尔奈圣母主教座堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座教堂拥有罕见的“五塔楼”轮廓，其厚重的罗马式中殿与轻盈的哥特式唱诗班完美交融，宛如一部凝固的欧洲建筑进化史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它见证了从克洛维国王的受洗到英法百年战争的硝烟，其命运与西欧王权的兴衰紧紧缠绕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进图尔奈的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`图尔奈大教堂`} />
                <InfoRow label="英文名称" value={`Tournai Cathedral`} />
                <InfoRow label="正式名称" value={`Tournai Cathedral`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`图尔奈`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "图尔奈的脉搏，始于古老的斯海尔德河畔。早在罗马帝国时期，这里便是一个名为“<strong>Turnacum</strong>”的重要河港与军事哨站。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人留下的，不仅是道路的基石，更将这座城市嵌入了帝国北疆的防御与贸易网络。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正让图尔奈跻身历史舞台中央的，是西欧第一个法兰克人王朝——<strong>墨洛温王朝</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元5世纪，传奇的<strong>克洛维一世</strong>在此附近出生，并以此地为早期统治中心之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>486年</strong>，他率军南下，在苏瓦松战役中击败西罗马帝国残余势力，奠定了法兰克王国的疆域。图尔奈，由此成为这个新生王权的摇篮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的名字“Tournai”本身，就是一层层历史沉积的结果。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它源于高卢-罗马时期的“Turnacum”，可能与凯尔特语中表示“湍急河流”或“山丘”的词汇相关，生动描绘了其依山傍水的地形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当法兰克人到来，拉丁语与日耳曼语在此交融，地名也逐渐演变为我们今天所熟知的模样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一座从罗马军事逻辑中诞生，却被法兰克王权赋予了灵魂的城市。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座教堂的历史，始于一簇悲惨的火焰。<strong>9世纪</strong>，凶悍的维京诺曼人沿河入侵，将图尔奈早期的教堂付之一炬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，信仰在灰烬中重生。<strong>11世纪初期</strong>，当地主教开始筹划一座前所未有的石质教堂，旨在彰显教区的权威与城市的复兴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，我们今天看到的罗马式中殿拔地而起。它巨大、沉重，由深灰色的蓝石砌成，拱顶高达<strong>26米</strong>，在落成时堪称 engineering marvel。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "五座巍峨的塔楼，如同五根手指伸向天空，构成了图尔尼天际线独一无二的标识，象征着神权的守护。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间的指针拨到<strong>13世纪</strong>，一场建筑美学的革命在此悄然发生。一场大火损坏了教堂东端的唱诗班席。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时的重建没有因循守旧，而是大胆采用了来自法国北方的最新潮流——<strong>哥特式</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一个奇迹诞生了：西端是雄浑的罗马式堡垒，东端却轻盈地“生长”出布满彩窗、肋拱飞升的哥特式唱诗班。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这并非简单的拼接，而是两个伟大时代的直接对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "图尔奈大教堂因此成为建筑史上罕见的“过渡风格”活标本，比巴黎圣母院的建造还要早近半个世纪，堪称哥特艺术向北方传播的关键一站。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“城墙外的郊区已化为焦土，但主教堂塔依然耸立。我们被困于此，每日听着石弹轰击城墙的巨响。” —— 一位修士在<strong>1340年</strong>英军围城期间的记述" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教堂的墙壁，还铭记着战争的创伤。英法百年战争期间，图尔奈因其战略地位反复易手。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1340年</strong>，英格兰国王爱德华三世亲率大军围攻图尔奈，战役惨烈。据说，教堂的巨钟“<strong>La Bancloque</strong>”在那段日子里被频繁敲响，既是警报，也是为亡魂的安息祈祷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争与和平，毁灭与重建，共同写进了这座建筑的肌理。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要寻找一位与图尔奈大教堂灵魂相契的守护者，非<strong>圣埃莱吉乌斯</strong>莫属。他并非土生土长的图尔奈人，却在<strong>7世纪</strong>被任命为当地主教，并将余生奉献于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃莱吉乌斯的故事充满传奇色彩。在成为主教前，他是法兰克王国最受信赖的宫廷金匠与财务官，服务达戈贝尔特一世国王。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的巧手曾打造无数精美的圣物箱与王室珍宝。然而，财富与地位并未腐蚀他。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一段广为流传的轶事说，国王曾给了他足够制作一座王座的金银，埃莱吉乌斯却用这些材料制作了两把宝座。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当国王惊讶质问，他平静地回答：“为上帝制作的宝座，理应与为您制作的同样精美。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种虔诚与正直，贯穿了他的一生。成为图尔奈主教后，他倾尽个人财富赎买奴隶、兴建教堂与修道院，并深入乡间传播信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他去世后，被安葬在图尔奈，其墓穴迅速成为朝圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管他的遗骨在<strong>16世纪</strong>的新教 Iconoclasm（圣像破坏运动）中被散失，但他的精神始终是这座教堂的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，他仍是金匠、铸币匠和冶金工人的主保圣人，图尔奈工匠精神的古老化身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位深刻影响教堂面貌的，是<strong>15世纪</strong>的主教<strong>雅克·德·吉斯</strong>。他是一位罕见的人物：既是高级神职人员，也是敏锐的历史学家和艺术赞助人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他主持了对教堂唱诗班区的最后装饰与维护，并可能推动了内部许多晚期哥特式雕塑的完成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，他撰写了一部关于埃诺伯爵（图尔奈所属的伯国）历史的珍贵编年史，为后世留下了理解这座城市中世纪盛况的关键文献。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在他的治理下，教堂不仅是礼拜场所，也成为了学术与艺术的中心。他曾大力支持教堂图书馆的建设，搜集和抄写古籍。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，他对于教堂内描绘《旧约》与《新约》故事的浮雕有着近乎苛刻的审美要求，坚持它们必须兼具神学准确性与艺术感染力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是通过这样一位位有学识、有品位的守护者，大教堂的瑰宝才得以在战乱与时光中存续，累积起层层叠叠的人文厚度。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在图尔奈，关于大教堂的传说往往与“奇迹”和“守护”相关。其中一个流传最广的故事，关乎教堂的建立本身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在建造之初，工人们为地基和石材运输愁眉不展。某天夜里，圣母玛利亚向一位虔诚的石匠显灵，指引他前往斯海尔德河畔一处特定的采石场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "翌日，工人们在那里发现了品质极佳的蓝色石灰岩，且石料仿佛经过粗略切割，运输起来异常轻松。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们相信，这是圣母在暗中庇护这座献给她的圣殿。因此，教堂的正式名称为“圣母主教座堂”，这份神圣的起源故事代代相传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与教堂那雄伟的<strong>五塔楼</strong>有关。当地老人会低声讲述，五座塔楼不仅代表五位 Evangelist，更是一座巨大的“<strong>神圣封印</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们镇守着斯海尔德河下的古老精魂，防止其兴风作浪，庇护城市免遭水患。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "甚至有传言说，其中一座塔楼的窗户，在特定角度的月光下，会映出类似恶魔面孔的光影，被称为“<strong>魔鬼之窗</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这并非邪恶，而是被囚禁的古老力量在圣光下的投影，警示着世人信仰的力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，将冰冷的石头建筑注入了温热的民间信仰。它们解释了为何这座建筑如此独特，也表达了世世代代图尔奈人对其深深的依赖与敬畏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史与神话的边界变得模糊，共同构建了城市独一无二的身份认同。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "站在图尔奈大教堂空旷的中殿里，你站立的不是一个景点，而是一个历史的十字路口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "脚下是墨洛温王朝的古老地基，眼前是罗马式力量的奔涌，抬头则是哥特式向往天堂的飞升。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它用石头讲述了权力从世俗王权向神权、再向人文艺术缓慢过渡的宏大叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座教堂之所以被列入联合国教科文组织世界遗产名录，远不止因为其建筑之美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更因为它是一部“石头的史诗”，见证了西欧文明核心地带<strong>1500年</strong>的连续演变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从克洛维的剑到埃莱吉乌斯的锤，从诺曼人的火到英法战争的箭，每一次创伤都在其墙体上留下修补的痕迹，每一次复兴都为其增添新的荣光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂图尔奈，便是读懂了一种欧洲的韧性——那种在废墟上重建，在传统中创新，将每一次劫难都转化为艺术灵感的深沉力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不高调，却厚重如它所采用的蓝石。当你抚摸那些被岁月打磨光滑的柱础，便是在触摸一段活着的、呼吸着的欧洲共同记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/binche-medieval-walls-gilles-carnival" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Binche</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beringen-mine-be-mine" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝灵恩煤矿遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beringen Mine (Be-MINE)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arlon-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔隆古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arlon Roman Ruins</p>
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
