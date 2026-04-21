import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉梅古历史溯源｜圣雷梅迪乌斯朝圣所的千年传奇与治愈传说',
  description: '攀登686级台阶，探寻葡萄牙山城拉梅古的灵魂。这不是一座普通的教堂，而是一部雕刻在花岗岩上的信仰史诗，讲述着治愈、希望与巴洛克的辉煌。',
}

export default function SantuarioNossaSenhoraRemediosLamegoHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '拉梅古朝圣所', href: '/attractions/santuario-nossa-senhora-remedios-lamego-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉梅古朝圣所・Santuário de Nossa Senhora dos Remédios・葡萄牙・拉梅古 (Lamego)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙杜罗河畔的起伏山峦间，<strong>拉梅古</strong>如同一枚被时光精心包浆的古老徽章。它的名字或许陌生，却是通往葡萄牙灵魂深处的一把秘钥。这里耸立着伊比利亚半岛最壮丽的巴洛克阶梯圣殿——<strong>圣雷梅迪乌斯朝圣所</strong>。它并非为战争或王权而建，它的基石是百姓对“治愈”最朴素的渴望。抛开游玩攻略，走进拉梅古的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉梅古朝圣所`} />
                <InfoRow label="英文名称" value={`Santuário de Nossa Senhora dos Remédios`} />
                <InfoRow label="正式名称" value={`Santuário de Nossa Senhora dos Remédios`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`拉梅古 (Lamego)`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉梅古的古老，超乎许多人的想象。早在罗马帝国时期，这里便已是一个重要的定居点，其名 <strong>“Lamego”</strong> 可能源自前罗马时代的部落语言。然而，真正赋予这座城市永恒灵魂的，并非罗马军团，而是一位公元3世纪的法国圣人——<strong>圣雷梅迪乌斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣雷梅迪乌斯，名字的本意便是“治愈者”或“解药”。中世纪初期，对他的崇拜随着朝圣路线和修道院的网络，从法国一路南下，深深植根于伊比利亚半岛。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地古老传说记载，早在摩尔人统治时期，山巅的洞穴中就隐藏着一尊圣雷梅迪乌斯的小雕像，被基督徒秘密供奉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元1129年，葡萄牙初代国王<strong>阿方索·恩里克斯</strong>在拉梅古召开了一场至关重要的议会，这座城市由此被载入葡萄牙建国史册。但市民们心中更神圣的坐标，始终是城市西侧那座可以俯瞰全城的山丘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，山上只有一座简陋的小教堂。14世纪，一座哥特式教堂在此建立，供奉“我们的治愈之母圣母”。从那一刻起，山巅与“治愈”便紧密相连。朝圣者、病患、心怀苦痛的人们开始攀爬陡峭的山路，寻求身体与灵魂的双重慰藉。这座山的名字，<strong>“蒙蒂圣斯特凡诺”</strong>，也由此渐渐被“<strong>圣雷梅迪乌斯山</strong>”所取代。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉梅古朝圣所的历史，是一部不断“攀登”与“重塑”的史诗。它今日令人屏息的巴洛克荣光，并非一蹴而就，而是数个世纪信仰积淀的最终爆发。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的哥特式教堂在16世纪因结构问题被拆除重建，文艺复兴风格留下了最初的印记。但真正的转折点发生在<strong>18世纪</strong>。葡萄牙的黄金时代——大量来自巴西的黄金与财富涌入，催生了空前绝后的艺术热情。教会决定，要为这位“治愈圣母”建造一座配得上其声名的、无与伦比的圣殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，从<strong>1750年</strong>开始，一场持续近百年的宏大工程启动了。这不是简单地建造一座教堂，而是以整座山为基座，雕刻一件献给上帝与圣母的巨型艺术品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "核心的<strong>686级花岗岩阶梯</strong>，如同一条通往天国的巨大地毯，从山脚铺陈至山顶。它被巧妙地分为九个平台，象征天主教念珠经的九组祷文。每一段阶梯、每一座平台、每一处喷泉与雕塑，都经过精密的神学与美学计算。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "建筑师若泽·德·热苏斯的笔记残篇中提到：“阶梯不应是苦行的折磨，而应是欢欣的序曲。让朝圣者在每一段休憩中，都能欣赏到不同的风景与寓言。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工程贯穿了<strong>1755年里斯本大地震</strong>的余波、拿破仑入侵的战争阴影，以及自由派与保守派的政治动荡。但拉梅古人的信念从未中断。他们用本地的花岗岩，聘请最优秀的本土雕塑家，将《圣经》故事、葡萄牙圣人的形象、以及象征美德与恶习的寓言雕像，密密麻麻地刻满沿途的壁龛与栏杆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到<strong>19世纪末</strong>，这座融合了<strong>洛可可</strong>的纤巧与<strong>巴洛克</strong>的壮丽的建筑群才最终完工。它没有王室主导的傲慢，充满了民间信仰的生动与热情，成为葡萄牙宗教建筑中独一无二的存在。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在朝圣所恢弘的历史中，一位几乎被正史遗忘的人物至关重要——首席石匠兼建筑师 <strong>若泽·德·热苏斯</strong>。关于他的生平记载寥寥，我们只知道他来自波尔图附近的地区，在18世纪中叶受命主持这项浩大工程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若泽·德·热苏斯并非维特鲁威那样的理论大师，而是一位从实践中成长起来的“工匠大师”。他没有留下宏伟的设计图，所有精妙的构思——阶梯的坡度、平台的转折、雕像的布局——很可能都存在于他的头脑与现场指挥中。他深谙本地石材的特性，懂得如何让坚硬的花岗岩呈现出织物般的褶皱与肌肤般的柔润。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最伟大的创造，是赋予了这条朝圣之路以“戏剧性”。攀登并非单调的苦行。他将旅程设计成一场充满惊喜的“神圣戏剧”：" }} />
              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "  <strong>第一平台</strong>的华丽喷泉，洗去尘世疲惫；" }} />
              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "   中途平台<strong>国王之泉</strong>的雕像群，讲述葡萄牙守护传说；" }} />
              <li className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: "  最后一段笔直冲向教堂的“<strong>天国阶梯</strong>”，将情绪推向顶峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史对这位天才并不温柔。工程因资金问题屡次中断，若泽·德·热苏斯很可能在未能亲眼看到作品完工前便与世长长辞。他的名字被岁月的尘埃掩盖，但他的灵魂，却仿佛凝固在了每一级台阶、每一尊微笑的小天使雕像之中。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地有则轶事：每当月圆之夜，若有石匠仔细聆听阶梯上的风声，还能听到老若泽敲打石块的清脆回响，他在永恒地打磨着他未竟的杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个与朝圣所紧密相连的“名人”，并非个人，而是一个群体——<strong>杜罗河的酿酒师</strong>。拉梅古是著名的波特酒产区。几个世纪以来，酒商们是朝圣所最重要的捐助者之一。他们相信，是圣母的庇佑赐予了葡萄园风调雨顺。每年葡萄丰收后，盛大的感恩游行会沿着阶梯上行，空气中弥漫着新酒的芬芳与虔诚的颂歌。这醇厚的酒香，构成了朝圣所历史中一抹独特的、令人微醺的人文底色。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于圣雷梅迪乌斯山的“治愈”之力，民间流传着无数动人的故事。其中最深入人心的一则，关乎“<strong>水之圣女</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在古老的教堂旁，有一眼神奇的泉水。一位双目失明多年的牧羊人，在梦中得到圣母启示，用泉水清洗眼睛。当他醒来，竟奇迹般重见光明。消息传开，这口泉被称为“<strong>治愈之泉</strong>”，吸引了无数病患。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朝圣所建造时，建筑师特意将这股泉水纳入设计，形成了阶梯中段那座美丽的<strong>喷泉</strong>。泉水至今潺潺流淌，朝圣者们依然会在此用手接水，轻触额头或患处，延续着千年的信仰仪式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与阶梯的<strong>数字</strong>有关。686级台阶，这个数字并非随意而定。民间智者将其拆解：6代表创造的天数，8象征复活与永恒，6再次出现代表人的弱点。攀登的过程，便是经历上帝创造、寻求永恒救赎、并克服自身弱点的隐喻之旅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "甚至教堂内那尊珍贵的<strong>圣母木雕像</strong>，也被传说包裹。有人说它是由一棵在闪电中幸存、却自行散发出香气的橡木雕刻而成；也有人说，它在战乱年代多次“失踪”，又总能安然回到祭坛之上，“如同母亲永远不会真正离开等待她的孩子”。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当旅行者气喘吁吁地登上最后一级台阶，回望那如瀑布般倾泻而下的宏伟阶梯与连绵的葡萄园时，他所见证的，远不止一处风景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他看到的，是一部<strong>葡萄牙民族的微观精神史</strong>——从建国时的凝聚，到大航海时代的豪情，再到将财富转化为永恒艺术的虔诚。拉梅古朝圣所，是信仰的丰碑，是民间艺术智慧的结晶，更是普通人将苦难转化为希望与美的永恒见证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有圣彼得大教堂的全球权威，也没有圣家堂的现代奇崛。它的力量，在于那种<strong>根植于土地的、质朴而坚韧的信仰生命力</strong>。每一道石缝，都仿佛在低语着几个世纪以来，无数平凡朝圣者的祈祷、叹息与欢欣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是教科书上冰冷的知识，而是可以触摸的粗糙石壁，是俯瞰杜罗河谷时那掠过山峦的清风，是萦绕在教堂烛光中那份亘古不变的、对“治愈”的渴望。它提醒我们，最打动人心的遗产，往往源于人类心灵最深处的需求与最执着的坚持。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何攀登最省力、最佳摄影机位、附近波特酒庄推荐，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/estremoz-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃什特雷莫什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Estremoz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/conimbriga-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布里加罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Conímbriga</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mafra-national-palace-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马夫拉宫与修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mafra National Palace</p>
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
