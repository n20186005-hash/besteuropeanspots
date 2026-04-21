import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '勒什诺夫要塞历史溯源｜特兰西瓦尼亚农奴避难堡垒的前世今生与骑士传奇',
  description: '它不是国王的宫殿，而是平民的堡垒。深入罗马尼亚特兰西瓦尼亚，揭开勒什诺夫要塞尘封史诗：从蒙古铁骑到吸血鬼传说，一座山巅石堡如何守护七个世纪的和平。',
}

export default function RasnovFortressHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '罗马尼亚', href: '/destinations/europe' },
            { label: '布拉索夫县', href: '/destinations/europe' },
            { label: '勒什诺夫要塞', href: '/attractions/rasnov-fortress-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`勒什诺夫要塞・Râșnov Fortress・罗马尼亚・布拉索夫县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在特兰西瓦尼亚的苍茫山林间，有一座为逃亡而生的堡垒。它没有霍亨索伦的皇家气派，也并非布朗城堡的鬼魅传说。<strong>勒什诺夫要塞</strong>的每一块岩石，都浸透着农奴、牧民与手工业者最原始的求生渴望。这里的故事，始于马蹄与烽烟，关乎生存而非荣耀。抛开游玩攻略，走进这座“平民堡垒”的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`勒什诺夫要塞`} />
                <InfoRow label="英文名称" value={`Râșnov Fortress`} />
                <InfoRow label="正式名称" value={`Râșnov Fortress`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`布拉索夫县`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "勒什诺夫的故事，必须从<strong>特兰西瓦尼亚</strong>这片“林间之地”的独特命运讲起。公元<strong>1211年</strong>，匈牙利国王安德烈二世为抵御东部的库曼人，引入了以善战闻名的<strong>条顿骑士团</strong>。骑士们在此建立前沿据点，拉开了大规模殖民开发的序幕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“勒什诺夫”（Râșnov）这个名字，源于古老的斯拉夫语词根，意为“切”或“多岩石的”。这精准地描述了它的地貌——一座从平原上陡然拔起的石灰岩山丘。最初，它只是一个瞭望哨所，俯瞰着连接瓦拉几亚与特兰西瓦尼亚的重要商贸通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点，是来自东方的风暴。面对频繁的外敌劫掠，当地的<strong>特兰西瓦尼亚撒克逊人</strong>——主要是来自卢森堡、佛兰德等地的日耳曼移民——与罗马尼亚裔牧民，做出了一个迫于无奈的决定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们需要一座不归属于任何领主、只为庇护平民而存在的<strong>共同避难所</strong>。于是，在13世纪中后期，依靠社区集体的力量，一座简易的木石防御工事，开始在这座孤山上成形。它不是为彰显权力，而是为储存粮食、牲畜，并在警报响起时，收容方圆数十里的百姓。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道最深的烙印，来自<strong>1241年</strong>。蒙古大军在西征统帅拔都的带领下，如烈火般席卷匈牙利平原，其前锋直抵特兰西瓦尼亚。山下的村庄化为焦土，幸存者蜂拥逃向山巅尚未完工的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这场惨痛的经历，催生了要塞的第一次大规模石质化扩建。村民们明白，木栅栏挡不住箭雨与投石。他们用数十年时间，垒起了最初的内墙与塔楼，确保烽烟再起时，有坚壁可依。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当狼烟从东方的山头升起，钟声会急促地敲响。人们会放下手中的犁和织机，驱赶着牲畜，沿着唯一的小径向山顶奔跑。那里有提前储存的粮食和深井，大门将在最后一人进入后紧闭。”——当地古老民谚的描述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二次深刻塑造，发生在<strong>15-17世纪</strong>奥斯曼帝国扩张的阴影下。此时的要塞已成为一个功能完备的微型城镇，拥有房屋、教堂、学校甚至法庭。<strong>1467年</strong>，奥斯曼军队在莫拉查战役中击败匈牙利，特兰西瓦尼亚门户洞开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "勒什诺夫要塞成为了地区防御链的关键一环。它不仅保护本地居民，也成为来自南方瓦拉几亚的难民避风港。这期间，要塞经历了多次加固，增加了外墙、碉堡和复杂的入口防御体系。它的存在，使得奥斯曼军队始终未能完全控制这条战略走廊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而关于要塞最著名的传奇，则与一口井有关。据记载，在<strong>1612年</strong>的一次长期围困中，守军水源告急。两名被俘的土耳其士兵被允诺以自由为代价，在堡垒内的岩石中挖掘。他们耗费了<strong>11年</strong>光阴，最终凿穿了<strong>146米</strong>的岩层，找到了地下水脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这口深井解决了要塞最大的生存短板，也让它的防御能力达到了顶峰。这个故事，完美诠释了这座堡垒坚韧、务实甚至略带悲怆的生命力。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在勒什诺夫的历史星图中，<strong>约翰·洪特（Johannes Honterus）</strong> 是一颗璀璨而独特的星辰。他并非王侯将相，而是一位<strong>人文主义者、制图学家和宗教改革家</strong>。<strong>1498年</strong>，他出生在距离要塞不远的布拉索夫（克琅施塔得），一生与特兰西瓦尼亚撒克逊人的命运紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "洪特青年时游学于维也纳、克拉科夫等地，深受文艺复兴思潮影响。他最杰出的贡献，是绘制了历史上第一幅精确的<strong>特兰西瓦尼亚地图</strong>。在这幅地图上，勒什诺夫要塞被清晰地标注为地区防御的核心节点之一。他的工作，让外界第一次科学地认知了这片“欧洲的隐秘角落”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，洪特真正影响勒什诺夫的，是他的宗教改革实践。<strong>16世纪30年代</strong>，新教思想传入特兰西瓦尼亚。洪特成为路德宗的坚定推行者。他返回布拉索夫，建立了印刷所，出版了大量的宗教与教育书籍。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们信仰的堡垒，应如同勒什诺夫的山石一样坚固，但它的大门应向真理之光敞开。”——洪特在其著作中的隐喻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这股改革之风迅速吹到了勒什诺夫。要塞内的<strong>圣十字教堂</strong>，原本是一座天主教堂，在洪特的影响下转变为路德宗教堂。这一转变意义深远，它标志着特兰西瓦尼亚撒克逊人在精神与文化上，进一步与德语世界同步，强化了其作为“东方日耳曼文化前哨”的身份认同。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "洪特的教育理念同样在此扎根。他倡导用德语进行全民教育，这一思想在勒什诺夫这样的社区堡垒中得以实践。要塞内的学校开始使用他编写的教材，一代代守堡人的子女，在学习读写和算数的同时，也传承着一种坚韧、自律、重视社区的新教伦理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与勒什诺夫有微妙联系的名人，是<strong>弗拉德三世·采佩什（Vlad the Impaler）</strong>，即“吸血鬼德古拉”的原型。虽然他的主要活动区域在瓦拉几亚，但<strong>1456-1462年</strong>间，他与特兰西瓦尼亚的紧张关系人尽皆知。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "勒什诺夫要塞的守军，曾无数次在城墙上眺望南方，警惕着这位“穿刺公”的军队是否会北上劫掠。这种持续数十年的紧张对峙，成为了当地集体记忆的一部分，后来也被巧妙地编织进了<strong>布拉姆·斯托克</strong>的《德古拉》小说背景中，为要塞增添了一层哥特式的想象色彩。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了那口著名的“囚徒之井”，勒什诺夫还流传着一个关于起源的忧伤传说。故事说，在蒙古人入侵后的混乱年代，两个疲惫的牧羊人兄弟逃难至此。他们筋疲力尽，在山顶睡着，并做了同一个梦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "梦中，一位天使指引他们在岩石缝隙中寻找。醒来后，他们真的在裂缝中发现了一尊古老的<strong>圣母玛利亚象牙雕像</strong>。他们认为这是神圣的庇护信号，于是决定在此定居，并号召幸存者共同修建堡垒，将圣像供奉于未来的教堂之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说赋予了要塞建设一种“神启”的合法性，强化了社区凝聚的信念。至今，一些当地人仍相信，那尊圣像的秘密力量，是堡垒在数次围困中从未被武力攻破的真正原因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个习俗则充满了生活气息：每年秋收后的第一个星期日，勒什诺夫的居民会举行“堡垒日”。他们并非进行军事演练，而是<strong>集体上山维护道路、清理水井、修补城墙</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传统直接源于中世纪：堡垒的维护不属于任何领主，而是每一位享有其庇护权的家庭<strong>共同的义务</strong>。这一习俗跨越数百年，成为“社区自治”精神最生动的活化石。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当游客气喘吁吁地登上勒什诺夫要塞，他们所见的不仅是雄伟的石墙与喀尔巴阡山的壮丽全景。他们站在的，是一座<strong>欧洲平民生存意志的纪念碑</strong>。它见证了普通人在帝国交锋、铁骑蹂躏的夹缝中，如何用集体的智慧和汗水，为自己争取一片生存的“诺亚方舟”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的每一处磨损的台阶、每一面斑驳的墙壁，诉说的都不是君主的功业，而是关于警报、钟声、匆忙驱赶牛羊上山的脚步声，以及围城结束后，重返家园的、小心翼翼的庆幸。它解构了我们对欧洲城堡的浪漫幻想，展现了一种更质朴、更坚韧、更贴近大地的人文力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂勒什诺夫，便是读懂特兰西瓦尼亚这片土地复杂层叠的历史，以及生活其上的人们，那股沉默而顽强的生命力。它提醒我们，历史不仅是大人物的传记，更是无数小人物为守护日常生活的微光，所垒起的一砖一石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/corvin-castle-hunedoara" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡内多阿拉科尔文城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corvin Castle</p>
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
              <a href="/attractions/sighisoara-dracula-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡吉什瓦拉（吸血鬼故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sighișoara</p>
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
