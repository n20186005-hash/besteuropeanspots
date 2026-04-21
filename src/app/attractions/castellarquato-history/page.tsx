import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿夸尔夸托城堡小镇历史溯源｜中世纪维管古镇的骑士传说与贵族纹章',
  description: '探秘意大利被遗忘的中世纪瑰宝。走进阿夸尔夸托，触摸千年石墙，聆听教皇党与皇帝党的纷争、被俘圣女的传说，以及维管水渠下流淌的时光。',
}

export default function CastellarquatoHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '艾米利亚-罗马涅', href: '/destinations/europe' },
            { label: '阿夸尔夸托城堡小镇', href: '/attractions/castellarquato-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿夸尔夸托城堡小镇・Castell'Arquato・意大利・艾米利亚-罗马涅`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在意大利美食与汽车的腹地艾米利亚平原上，有一座被时间遗忘的“活化石”。它并非游客如织的托斯卡纳山城，而是一座完整保留了中世纪肌理与灵魂的维管古镇。这里的一砖一石，都镌刻着<strong>伦巴第领主</strong>的权谋、<strong>圣殿骑士</strong>的踪迹，以及连通帝国命脉的古罗马水渠密码。抛开游玩攻略，走进<strong>阿夸尔夸托</strong>的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿夸尔夸托城堡小镇`} />
                <InfoRow label="英文名称" value={`Castell'Arquato`} />
                <InfoRow label="正式名称" value={`Castell'Arquato`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`艾米利亚-罗马涅`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，本身就是一部层叠的历史。<strong>Castell’Arquato</strong>，直译为“拱门城堡”。这指向了它最初也是最重要的身份：一座守护着<strong>古罗马水渠（Aqueduct）拱门</strong>的军事要塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间要追溯到罗马帝国时期。这里并非凭空出现的聚落。公元前后，一条至关重要的引水渠——<strong>维勒娅水渠（Aqua Veleia）</strong>——从附近山区出发，跨越峡谷，将清泉引向重要的罗马殖民地<strong>皮亚琴察（Placentia）</strong>。水渠在此处需要借助巨大的拱形结构（<em>fornici</em>）跨越山谷，“拱门”（Arco/Arcuato）之名便由此生根。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的建城史始于<strong>八世纪</strong>。伦巴第人统治时期，一位名叫<strong>马格努夫（Magnulf）</strong> 的贵族在此修建了第一座城堡，用以控制交通要道与珍贵的水源。他的名字，或许也隐约留在了地名里。但更具说服力的起源，依然是那座沉默的拱门。小镇如同藤蔓，沿着山脊，缠绕着这座古老的工程奇迹生长起来，从水源守护者，逐渐演变为兵家必争的战略堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的冷门，在于其惊人的完整性。当周边的平原城市在近代化中改头换面时，阿夸尔夸托因地形所限，其<strong>中世纪晚期的城市布局、城墙、街道和主要建筑</strong>，几乎被原封不动地冻结在了14至15世纪。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的命运，与中世纪意大利两大派系——<strong>教皇党（Guelphs）与皇帝党（Ghibellines）</strong>——的残酷斗争紧密相连。它并非旁观者，而是漩涡的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>13世纪</strong>，小镇落入强大的皇帝党家族<strong>斯科特（Scott）</strong> 手中。他们建造了宏伟的<strong>市政宫（Palazzo del Podestà）</strong>，其外墙镶嵌的数百枚盾形纹章，并非装饰，而是权力更迭的残酷编年史。每一枚纹章，代表一位在此任职的“镇长”（Podestà）。频繁更换的纹章，无声诉说着那个时代的动荡与血腥。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地编年史苦涩地记载：“城门随着派系的旗帜而开合，今日的朋友，明日或许就是将你吊上城墙的敌人。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点在于<strong>维斯孔蒂（Visconti）家族</strong>的降临。<strong>1346年</strong>，米兰的这位强大公爵从斯科特家族手中夺取了小镇。皇帝党背景的维斯孔蒂，将这里打造成对抗教皇党城市皮亚琴察的前沿堡垒。他们留下的最深印记，便是那座俯瞰整个波河平原的<strong>罗卡（Rocca）城堡</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座棱角分明的砖石堡垒，是纯粹的战争机器。其方形主塔高达<strong>30米</strong>，设计上已考虑到早期火器的使用。它不仅是军事威慑，更是一个信号塔系统的一部分。天气晴朗时，守卫可以从塔楼望见数十公里外其他维斯孔蒂城堡的烽火，帝国的意志借此在平原上瞬息传递。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一枚不可磨灭的印记，是<strong>水</strong>。除了古罗马的遗产，中世纪修士们的智慧也在此流淌。小镇保存着罕见的<strong>“维管（Bottini）”系统</strong>，即地下引水道网络。这些由砖石砌成的隐秘通道，如人体血管般在地下蔓延，将山泉无声无息地引向广场的喷泉与富户的宅邸。这套系统从<strong>13世纪</strong>一直使用到20世纪初，是小镇得以在围困中存续的生命线。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座以军事和工程闻名的小镇，却诞生了一位以法律与慈悲点亮时代的知识巨人——<strong>乔瓦尼·达·莱尼扬（Giovanni da Legnano，约1320-1383）</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非战场上的骑士，而是思想领域的斗士。出生于阿夸尔夸托一个富裕家庭，乔瓦尼前往博洛尼亚，沉浸在当时欧洲最顶尖的学术殿堂，最终成为博洛尼亚大学杰出的<strong>教会法与民法教授</strong>。他的成就，远远超越了家乡的城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1360年</strong>，他完成了巨著《战争法（De bello）》与《复仇法（De represaliis）》。这使他成为国际法，尤其是战争法的奠基人之一。他试图在教皇与皇帝撕裂的乱世中，为“战争”这一暴力行为，寻找到一丝理性和法律的约束。他的思想影响了后世几代法学家。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在著作中写道：“即使在与异教徒的战争中，也应遵守一定的法则。对战俘、平民、圣地，应有基本的尊重。” 这在14世纪，无疑是超越时代的人文之光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与家乡的羁绊，深沉而具体。<strong>1376年</strong>，功成名就的乔瓦尼出资在家乡建立了<strong>圣灵医院（Ospedale di Santo Spirito）</strong>。这并非普通的医院，而是一个集医疗、收容、救济于一体的慈善综合体，专门服务于穷苦病人和朝圣者。这座美丽的砖石建筑至今矗立，其拱廊下的宁静庭院，仿佛仍回荡着他“知识应用于慈悲”的信念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与小镇结缘的名人，是意大利浪漫主义诗人及小说家<strong>乔苏埃·卡尔杜奇（Giosuè Carducci，1835-1907）</strong>，他于<strong>1906年</strong>荣获诺贝尔文学奖。卡尔杜奇虽非本地人，但曾被阿夸尔夸托极其纯粹的中世纪氛围所震撼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在一次游历后，他写道，这里的塔楼与街道，让他“真切地触摸到了但丁时代的气息”。他的赞誉，让这座默默无闻的小镇开始进入文化界的视野，被视为研究中世纪意大利世俗建筑的活态标本。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇最动人的传说，与水，以及一位被囚禁的圣女有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这便是<strong>圣乔治之泉（Fontana di San Giorgio）</strong> 的故事。相传，在巨龙（象征异教或灾难）肆虐的年代，小镇的水源被污染或断绝。居民的祈祷感动了上帝，他派遣圣乔治前来解救。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，故事并未以常见的屠龙英雄剧结束。当地的版本说，圣乔治并未直接用矛杀死巨龙，而是以神力将其驱赶至地下深处。龙在遁逃时，用尾巴猛烈击打岩层，反而凿出了一股新的、清澈的泉水。圣乔治于是将这股泉水祝福，永保小镇纯洁与安康。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "泉水旁古老的铭文写着：“龙带来了死亡，却也为忏悔者开辟了生命之泉。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则萦绕在<strong>罗卡城堡</strong>的主塔。据说，在维斯孔蒂家族统治时期，一位敌对贵族美丽的女儿被囚禁于此。她夜夜在塔楼窗边歌唱，歌声哀婉，随风飘散在平原上。一位年轻的本地铁匠爱上了这虚幻的歌声，试图攀爬高塔解救她，最终失足身亡。人们说，在某些寂静的月夜，仍能听到女子隐隐的啜泣与铁匠锤子的微弱回响。这个传说为冰冷的军事堡垒，添上了一抹凄美的浪漫色彩，也隐喻着小镇在强权夹缝中，对自由始终如一的渴望。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在阿夸尔夸托，你行走的并非一个“景区”，而是一座仍在呼吸的<strong>历史时间胶囊</strong>。这里的价值，不在于拥有某件孤立的艺术杰作，而在于其整体的、沉浸式的历史语境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从古罗马工程师计算拱门的角度，到中世纪领主在塔楼上眺望敌情的视线；从维管中潺潺的流水声，到市政宫墙壁上沉默的纹章阵列——它们共同构成了一部立体、可触摸的欧洲中世纪编年史。它让你理解，一个边缘小镇如何在帝国博弈中挣扎求存，法律与人文如何从石缝中萌芽，而传说又如何为坚硬的历史注入柔软的魂魄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有佛罗伦萨的文艺复兴辉煌，也没有威尼斯的商业传奇，但它提供了一种更为稀缺的体验：<strong>历史的“在场感”</strong>。当夕阳为罗卡城堡的砖石披上金红色外衣，你仿佛能看见维斯孔蒂的旗帜在飘扬，听见远处皮亚琴察方向的隐隐号角。这一切，都让阿夸尔夸托成为读懂意大利，乃至读懂中世纪欧洲厚重一页的隐秘钥匙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/civita-di-bagnoregio" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    白
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">白露里治奥古城（天空之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Civita di Bagnoregio</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/massa-marittima" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马萨马里蒂马</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Massa Marittima</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/venaferro-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦纳夫罗古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Venaferro Old Town</p>
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
