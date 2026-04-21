import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫托文历史溯源｜伊斯特拉松露山城的前世今生与威尼斯传奇',
  description: '登上克罗地亚伊斯特拉的“松露之巅”莫托文。穿越威尼斯共和国堡垒的时光，探寻电影大师的隐居往事，聆听松露猎人与飞龙传说。',
}

export default function MotovunHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '莫托文', href: '/attractions/motovun-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫托文・Motovun・克罗地亚・伊斯特拉县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在克罗地亚伊斯特拉半岛苍翠的腹地，一座孤山拔地而起，山顶的城墙与钟楼如同从林海浪潮中浮起的方舟。这不是童话，而是<strong>莫托文</strong>，一座被松露香气与威尼斯荣耀浸透的千年山城。它的故事，始于史前的避难所，盛于威尼斯的边疆堡垒，最终在电影的镜头与黑松露的芬芳中，找到了现代的灵魂。抛开游玩攻略，走进莫托文的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫托文`} />
                <InfoRow label="英文名称" value={`Motovun`} />
                <InfoRow label="正式名称" value={`Motovun`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`伊斯特拉县`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫托文的诞生，源于人类对高处最原始的渴望——安全。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊斯特拉半岛自古便是多种文明交汇的走廊。早在公元前，伊利里亚部落便看中了这座独立于米恩河湾的圆锥形山丘。它三面环水，地势险要，是天然的瞭望台与避难所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人的到来，为它赋予了第一个清晰的名字与形态。公元1世纪，罗马人将此地称为 <strong>“Montona”</strong> 。在拉丁语中，“Mons”意为山，“Tonare”意为轰鸣、守护。这个名字精准地定义了它的角色：一座守卫着富庶内陆、俯瞰交通要道的“轰鸣之山”或“守护之山”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国崩溃后，蛮族浪潮席卷。山巅的定居点因其易守难攻的特性，得以存续。早期的石垒，为后来坚不可摧的中世纪城堡奠定了地基。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "山城真正的雏形，在斯拉夫人与法兰克人相继统治的早期中世纪逐渐清晰。人们沿着山脊修建房舍，层层向上，最终在海拔270米的顶峰，筑起了最初的防御核心。<strong>莫托文</strong>这个名字，也从此在斯拉夫语系的文献中固定下来，意为“山上的城镇”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的起源，无关贸易繁荣，也非宗教圣地，纯粹是乱世中生存智慧的结晶。这份始于防御的基因，深深烙印在它后续数百年的命运里。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说起源是生存，那么莫托文的中世纪盛期，则是一部完整的<strong>威尼斯共和国</strong>边疆史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1278年</strong>，是一个决定性的年份。威尼斯共和国凭借其强大的海军与财富，从帕特利亚尔赫伯爵手中正式购得莫托文。从此，这座山城披上了圣马可雄狮的旗帜，长达五个多世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯人看中的，是它无可替代的战略价值。作为伊斯特拉内陆的制高点，莫托文是防御奥斯曼帝国陆上侵袭、同时震慑内陆竞争对手的完美前哨。威尼斯人不惜重金，将原有的防御工事改造为令人惊叹的军事杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天看到的、环绕整个山顶的<strong>巍峨城墙</strong>与<strong>棱堡</strong>，大部分建于14至16世纪。城墙并非简单围合，而是依据陡峭的山势精密设计，形成了数层立体防御体系。<strong>圣斯蒂芬教区教堂</strong>的钟楼，最初也是瞭望塔，其顶端永远注视着森林与河流的尽头。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“Montona 是我们在大陆上的眼睛和拳头。从这里，我们可以看到威胁的来临，并用我们的法律与火炮作出回应。” —— 摘自16世纪威尼斯总督府一份军事报告。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯统治为莫托文带来了秩序、繁荣与独特的文化融合。法律的文书使用拉丁语和意大利语，而市井街巷则回响着克罗地亚语的俚语。这种双重性，刻在了建筑的石缝里，也流在了当地人的血脉中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1797年</strong>，随着威尼斯共和国的灭亡，莫托文的“威尼斯世纪”戛然而止。它先后经历了拿破仑的短暂统治与奥匈帝国的漫长管理，山城的军事意义逐渐褪去，转而成为一个宁静的行政中心与农业城镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的转折，有时充满戏剧性。当刀剑的寒光隐入博物馆，另一种来自地下的“黑色黄金”——<strong>松露</strong>，开始定义莫托文的现代身份。环绕山脚的米恩河谷橡树林，是世界顶级的白松露产区之一。这自然的馈赠，仿佛是对这座千年守卫者的一份甜蜜犒赏。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫托文的宁静与神秘，像一块磁石，吸引着那些在喧嚣世界中寻找灵感和归宿的灵魂。其中，两位艺术家的故事，尤为动人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是克罗地亚电影巨匠<strong>马里奥·安德里奥利</strong>。他并非土生土长的莫托文人，但这座城市却成了他艺术生命的归宿地与最后安息处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "安德里奥利生于1929年，是前南斯拉夫时期最具批判精神和国际声誉的导演之一。他的电影以深刻的哲学思辨、黑色幽默和超现实主义风格著称。上世纪70年代，当他厌倦了贝尔格莱德的纷扰，便开始在伊斯特拉寻找一处僻静之地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫托文的山顶老屋让他一见钟情。这里与世隔绝，唯有风声、钟声与无边的绿意。他买下一处房产，将其改造成了自己创作和生活的“堡垒”。正是在这里，他执导了生涯代表作之一的《巴尔干间谍》。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在莫托文，时间以不同的速度流逝。云从山谷爬上来需要一刻钟，一个念头从产生到成熟可能需要一年。这里没有‘外界’，只有无尽的内部空间，正好用来安置我那些古怪的角色和故事。” —— 马里奥·安德里奥利" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他深度融入了小镇生活，却又保持着观察者的距离。2006年，<strong>安德里奥利去世后，根据他的遗愿，被安葬在莫托文小镇的墓园里</strong>。如今，莫托文国际电影节的一个重要单元就以他的名字命名，他的故居也成为影迷心中的圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与莫托文紧密相连的名人，是克罗地亚女作家<strong>玛蒂娅·迪瓦茨</strong>。她于1913年出生在莫托文山脚下，一生都用克罗地亚语和意大利语进行创作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迪瓦茨的童年和青年时期在莫托文城堡的阴影下度过，这段经历深刻地影响了她的写作。她的作品充满对伊斯特拉乡村生活、家庭关系以及女性命运的细腻描绘，带有浓厚的乡土情怀与诗意现实主义色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她最著名的作品之一是小说《广场上的婚礼》，其中对山城社会风貌的刻画入木三分。尽管她后来移居萨格勒布，但莫托文始终是她文学世界中不可或缺的地理坐标和精神原乡。她的作品，为这座以军事历史闻名的山城，增添了一份温柔而坚韧的女性叙事视角。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些名人并未在莫托文建造宏伟的宫殿，他们的痕迹是无声的：一扇曾经深夜亮着灯创作的老窗，一本描绘了小镇晨雾的书，一座俯瞰着他们热爱的森林的朴素墓碑。他们让莫托文从一段坚硬的历史，变成了一处可被感知、可供沉思的人文景观。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在莫托文，历史写在石头上，传说则藏在森林的泥土里和古老的屋檐下。最广为流传的，是关于<strong>松露起源</strong>的神秘故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在很久以前，莫托文森林里住着一位名叫弗拉霍的猎人。一个电闪雷鸣的夜晚，他看见一道巨大的闪电击中了森林中央一棵老橡树的树根。奇迹般的是，雷击之后，那里并未起火，反而散发出一股前所未有的、浓郁醉人的香气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "好奇的弗拉霍挖开泥土，发现了一些外表粗糙、其貌不扬的黑色块茎。他带回家，妻子将其削片与鸡蛋同炒，瞬间满屋异香，味道宛如天堂。人们相信，这是天神对莫托文人的恩赐，将天堂的美味通过雷电埋入地下，只有依靠嗅觉敏锐的猎狗（后来是经过训练的猪狗）和虔诚的心才能找到。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则关乎小镇的守护者——<strong>莫托龙</strong>。这不是西方传统的喷火龙，而是一只栖息在米恩河深处、形如巨蜥的善良生物。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们说，每当山城面临重大危机（如瘟疫或极度干旱），莫托龙便会从河底现身，它翻滚身体，带来充沛的雨水，洗去灾厄。它粗重的呼吸化作山谷中的晨雾，保护着小镇不被敌人发现。因此，莫托文的城徽上，至今绘有一条<strong>振翅的飞龙</strong>，它象征着庇护与神秘的力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说代代相传，让松露的采集不仅仅是经济活动，更带上了一丝仪式感；也让环绕小镇的森林与河流，充满了灵性。走在古老的街道上，你会感觉，每一阵穿过城门的风，都可能携带着龙的低语与松露的秘香。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的莫托文，是一座活的历史纪念碑。它的每一级石阶，都踩着威尼斯的石板；每一段城墙，都映照着帝国的斜阳；每一阵从河谷升起的雾，都混杂着松露猎人的低唤与电影胶片的幻影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂莫托文，便是读懂一种边缘的生存智慧：如何在强权环伺中坚守自我，如何在时代浪潮褪去后，凭借大地本身的馈赠与深沉的内在世界，完成从“堡垒”到“家园”再到“精神栖息地”的华丽转身。它不张扬，只是静静矗立，用它厚重的石壁和穿透历史的钟声，告诉来访者：真正的力量，源于沉淀，归于宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到这里，你触摸的不是一个景点，而是一段层叠的、依然呼吸的时光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡姆城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hum</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/groznjan-istria-art-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格罗日年</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grožnjan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/primosten-dalmatia-travel-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普里莫什滕</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Primošten</p>
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
