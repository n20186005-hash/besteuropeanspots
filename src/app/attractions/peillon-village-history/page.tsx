import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '法国佩永悬崖小镇千年史秘闻：隐匿在峭壁间的血泪与传奇',
  description: '探秘法国悬崖小镇Peillon不为人知的千年血泪史。它曾是军事堡垒、隐士避难所，亦是艺术家的灵感源泉。随我们揭开这峭壁之城的尘封往事。',
}

export default function PeillonVillageHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '佩永', href: '/destinations/europe' },
            { label: '佩永悬崖小镇', href: '/attractions/peillon-village-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩永悬崖小镇・Peillon・法国・佩永`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当人们提起法国的“悬崖小镇”，脑海中浮现的多是普罗旺斯的戈尔德或埃兹。然而，在蔚蓝海岸后方，阿尔卑斯山前沿的峭壁之上，还悬挂着一座被时光彻底遗忘的石头迷宫——<strong>佩永</strong>。它没有蔚蓝海景，也非热门旅游打卡地。它的标签是<strong>极致的封闭与防御</strong>，一部雕刻在石灰岩上的千年生存史诗。这里每一级石阶、每一扇窄窗，都讲述着关于恐惧、信仰与坚韧的故事。抛开游玩攻略，走进<strong>佩永</strong>的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩永悬崖小镇`} />
                <InfoRow label="英文名称" value={`Peillon`} />
                <InfoRow label="正式名称" value={`Peillon`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`佩永`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩永的起源，深藏在阿尔卑斯山麓的迷雾与传说之中。它并非为美而建，而是为生存而生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最早的定居痕迹可追溯到公元<strong>十世纪</strong>左右。在那个维京人肆虐、萨拉森海盗（Saracens）从地中海不断侵扰的动荡年代，利古里亚山脉的原始部落需要一处绝对安全的避难所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们看中了这座近乎垂直的<strong>石灰岩山脊</strong>。三面是令人眩晕的悬崖，仅有一条狭窄、隐蔽的天然小径可以通达山顶。这里易守难攻，视野开阔，能俯瞰整个帕永河谷（Paillon Valley）的动向。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，村民们用山上的石头，像筑巢一样，贴着崖壁搭建起最初的房舍。建筑彼此紧挨，共用墙壁，形成内部错综复杂、外部浑然一体的<strong>蜂窝状结构</strong>。这不是规划，而是本能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于“Peillon”这个名字的由来，学界有两种主流说法。一说源于拉丁语 <strong>“Pellium”</strong> ，意为“兽皮”，可能指代此地早期居民从事的鞣皮或皮革贸易。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一说则认为它与古法语词 <strong>“Piloun”</strong> 或 <strong>“Peil”</strong> 相关，意为“峭壁”或“高耸的岩石”，这更直观地描绘了它的地理特征。名字本身，就暗含着它的双重身份：一个谋生的场所，一座天然的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从一开始，佩永的基因里就写满了<strong>孤立</strong>与<strong>防御</strong>。它仿佛一个决心与山下世界划清界限的隐居者，将自己的命运，牢牢楔入了坚硬的岩石之中。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩永的历史并非波澜壮阔的史诗，而是一部在沉默中承受重压的地方编年史。它的命运，与两个关键词紧密相连：<strong>萨沃伊家族</strong> 与<strong>宗教战争</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：萨沃伊伯爵的鹰巢</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元<strong>1388年</strong>，尼斯及其周边地区（包括佩永）脱离普罗旺斯伯爵的统治，投靠了实力强大的<strong>萨沃伊家族</strong>。这一事件，彻底改变了佩永的战略地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从一个单纯的山区避难所，一跃成为萨沃伊公国面向法国的<strong>边境军事前哨</strong>。萨沃伊的工程师们强化了其天生的防御优势。他们扩建了城墙，加固了唯一入口的塔楼，并在最高点建造了领主城堡（如今已坍塌，只剩地基）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的布局本身就是一套精密的防御系统。街道窄如缝隙，且多为死胡同；房屋上层向外凸出，形成“间谍楼”（Söller），便于监视和投掷物品。整个小镇就是一个为巷战设计的迷宫。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份<strong>16世纪</strong>的萨沃伊军事档案中这样记载：“佩永之要塞，其位置之险要，可谓一夫当关，万夫莫开。只需五十名骁勇之士驻守，便可抵御千军之围攻。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：血染的信仰之城——1536年的劫难</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪</strong>，席卷欧洲的宗教改革风暴也刮进了这座高山小镇。佩永的居民绝大多数皈依了<strong>新教（胡格诺派）</strong>，这让它成为了天主教势力眼中的“异端巢穴”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1536年</strong>，灾难降临。效忠于萨沃伊公爵的天主教联军，在法国盟友的支持下，对佩永发动了血腥的围攻。关于这场战斗的细节已模糊，但结局无比清晰：小镇被攻陷，并遭到了<strong>残酷的屠杀与洗劫</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据地方志隐晦的记载，大量新教居民或被杀害，或被驱离。这场劫难在佩永的集体记忆中刻下了无法磨灭的伤痕，人口锐减，元气大伤。至今，在小镇某些古老石墙的缝隙里，据说还能找到当年鏖战留下的痕迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记三：从堡垒到采石场与隐居所</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>18世纪</strong>后，随着边境稳定、火炮技术发展，佩永的军事价值荡然无存。它迅速被时代抛弃，陷入长达两个世纪的沉寂与贫困。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "居民们赖以生存的方式，是向悬崖“索取”。他们成为了熟练的<strong>采石工</strong>，开采镇上建筑所用的同一种石灰岩，运往山下。小镇边缘的悬崖面上，至今可见当年开采留下的平整切面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "同时，与世隔绝的环境和那股悲怆宁静的氛围，意外地吸引了一些寻求寂静的灵魂。<strong>方济各会</strong>的修士曾在此短暂居住，一些艺术家和文人也将它视为逃离尘嚣的避世之地。佩永，完成了从“军事鹰巢”到“精神隐庐”的 silent 转变。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩永的传奇不属于叱咤风云的王侯将相，而属于那些被其独特气质吸引、并与之产生深刻共鸣的“静默者”。其中，<strong>多米尼克神父</strong>的故事，最能诠释这座小镇的精神内核。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：多米尼克神父——悬崖上的隐修者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>多米尼克·西斯托（Dominique Sisto）</strong>并非举世闻名的圣人，他只是<strong>17世纪</strong>一位普通的嘉布遣会（Capuchin）修士。然而，他在佩永的岁月，却为小镇涂抹上了一层永恒的神秘主义色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大约在<strong>1650年</strong>，多米尼克神父来到佩永。我们已无从得知他选择此地的确切原因——也许是为了极致的苦修，也许是在动荡时局中寻找内心的宁静。他并没有住在修道院，而是选择了小镇边缘一处<strong>天然岩洞</strong>，稍作修整后，便开始了他的隐居生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的日常，与佩永的石头一样简单而坚硬：长时间的祷告、冥想、极简的劳作，以及面对悬崖与虚空的无言对话。居民们逐渐知晓了这位悬崖隐士，并被他虔诚的气质所打动。他们开始向他寻求精神指引，并自发地为他的岩洞送去少许食物。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在一份后世整理的<strong>民间记述</strong>中，这样描写他：“那位神父就像长在悬崖上的一棵老树，根须扎进了岩石里。风雨来时，他与石头一同沉默；阳光洒下，他的祈祷声轻微如风。他成了佩永的一部分，一个活着的、呼吸的圣迹。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "多米尼克神父在佩永度过了余生，死后被安葬在小镇内。他的岩洞，后来被改造成一处小小的<strong>祈祷所</strong>，至今仍被称作“隐士洞”。他没有留下著作，也没有创立教派，但他用最极致的生活方式，印证了佩永作为“精神避风港”的可能性。他的存在，让小镇的石头，仿佛也浸染了一丝沉思的灵性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：一位过客的凝视——玛德琳·帕斯卡</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间跳到<strong>19世纪末</strong>。一位名叫<strong>玛德琳·帕斯卡（Madeleine Pascal）</strong> 的年轻女作家（其生平资料极少，更显神秘）游历至此。她被佩永与世隔绝的凄美深深震撼，并在此旅居了数月。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与多米尼克神父的内向修行不同，玛德琳用一种外部观察者的、充满文学感的眼光记录佩永。她住在村里一栋老石头房子里，每天穿行于迷宫般的巷道，与最后一批坚守于此的老居民交谈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她留下的文字（以书信和私人日记形式存世），是了解<strong>19世纪末</strong>佩永风貌的珍贵窗口。她描绘了采石工清晨的号子声如何在峡谷间回荡，记录了老妇人们在公共洗衣池边流传的关于<strong>1536年</strong>大屠杀的模糊歌谣，也写下了黄昏时分，整个小镇被阿尔卑斯山影吞没时，那种令人窒息的、美丽的孤独。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "她在<strong>一封给友人的信</strong>中写道：“<strong>佩永</strong>不是一个地方，它是一种状态。在这里，时间不是向前流淌，而是向上堆积，如同那些层层叠叠的石屋。居民们的眼神里有种古老的警觉，仿佛他们的灵魂还驻守在萨沃伊时代的瞭望塔上。我在这里写作，但词句总显得轻浮。唯有沉默，才是与它对话的正确语言。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛德琳并未使佩永成名，她的作品也未曾广为流传。但正是像她这样的敏感灵魂的短暂驻留，如同在历史的深潭中投下几颗小石子，激起了理解这座悬崖小镇的、细微而真实的涟漪。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在佩永，历史与传说之间的界限常常模糊。那些无法被正式史书记载的集体记忆，化作了口耳相传的故事，缠绕在古巷与拱廊之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣米歇尔小教堂的“圣水井”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇最高处的<strong>圣米歇尔小教堂</strong>旁，有一口看似普通的水井。传说，在<strong>1536年</strong>那场大屠杀期间，当天主教联军攻入小镇，一群躲藏在教堂里的佩永妇孺濒临绝境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中一位母亲怀抱着受洗不久的婴儿，在绝望中向守护神圣米歇尔祈祷。忽然，她身旁干燥的石头地面裂开，一泓清泉汩汩涌出。她用这水为婴儿再次施行了紧急的洗礼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "就在这时，追击的士兵闯入，但看到地上的泉水和正在进行的宗教仪式，竟莫名地心生畏惧（或说是圣米歇尔显灵），转身离去。这群人因此得救。战后，人们围绕这口“奇迹之泉”修建了水井，认为其井水拥有庇护的魔力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>“狼形守护神”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个更古老的传说，则与小镇的起源相关。在最早的先民于此定居时，夜晚常受狼群和野兽的骚扰，生活艰难。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "某天，一位神秘的猎人出现在首领的梦中。他身形矫健，半人半狼，自称是山林的精灵。他告诉首领，只要居民尊重山林，不滥杀幼兽，他便会在暗中守护此地。梦醒后，首领发现村口放着一只被精准猎杀、为害已久的巨大野猪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，佩永人有了不成立的规定：狩猎必有度。而小镇的徽章（虽然后来被官方徽章取代）上，曾一度出现过<strong>狼的侧面轮廓</strong>与<strong>城堡</strong>结合的图案，被老人们解释为对那位“狼形守护神”的隐秘纪念。这个传说，反映了早期居民在严酷自然环境中，寻求共生与安慰的心理。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你气喘吁吁地爬完最后一段“骑士坡道”，真正站在<strong>佩永</strong>那寂静无声的广场上时，你所感受到的，远非“风景如画”那么简单。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你脚下是萨沃伊士兵巡逻过的石阶，指尖触摸的是胡格诺派信徒曾倚靠祈祷的墙垣，目光所及的天际线，与<strong>多米尼克神父</strong>冥想的视野重叠。这里没有喧嚷的商铺，没有为游客准备的表演，只有<strong>石头、天空和历史深沉的呼吸</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩永的历史价值，不在于它曾多么显赫，而在于它如此<strong>完整而极端地保存了一种中世纪山城的生活与防御样本</strong>，以及一部关于恐惧、信仰、毁灭与顽强重生的微观史诗。它是一座活态的博物馆，展品就是整个小镇本身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂佩永，便是读懂人类在绝境中开凿希望的坚韧，读懂信仰冲突留下的永久伤疤，也读懂一种选择远离尘嚣、与岩石共老的孤决之美。它提醒我们，在欧洲那些闪光的热门目的地之外，还散落着许多沉默的“时光胶囊”，等待着愿意倾听石头低语的人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、徒步路线与摄影打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/historic-centre-of-lyon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里昂历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Historic Centre of Lyon</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/turenne-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒂雷讷</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Turenne</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cordouan-lighthouse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔多昂灯塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cordouan Lighthouse</p>
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
