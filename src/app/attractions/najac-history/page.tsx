import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '纳雅克历史溯源｜法国单街古村的前世今生与百年战争传奇',
  description: '探秘法国阿韦龙省悬崖上的单街古村纳雅克。从罗马哨所到百年战争要塞，揭秘西蒙·德·孟福尔的铁腕与“单街之眼”的传说，走进一段凝固在石灰岩脊上的中世纪史诗。',
}

export default function NajacHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '阿韦龙省', href: '/destinations/europe' },
            { label: '纳雅克', href: '/attractions/najac-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`纳雅克・Najac・法国・阿韦龙省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国阿韦龙省的深谷之间，一条长达一公里的石板街道，如龙的脊梁，精准地铺设在刀锋般的石灰岩山脊上。街道两旁，石屋紧紧相依，仿佛是从岩石中生长出来，共同守护着下方河谷与远方群山。这不是普通的村落布局，而是一部以石头写就的中世纪生存宣言。它的名字叫<strong>纳雅克</strong>。抛开游玩攻略，走进纳雅克的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`纳雅克`} />
                <InfoRow label="英文名称" value={`Najac`} />
                <InfoRow label="正式名称" value={`Najac`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`阿韦龙省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "纳雅克的起源，深埋于时间与战略的交汇点上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然今天的模样纯粹属于中世纪，但人类的足迹早在古罗马时期便已抵达。这里扼守着阿韦龙河一处重要弯道，是天然的瞭望点。罗马人很可能在此建立过简易的哨所，监控河谷交通。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，纳雅克真正意义上的“诞生”，要归功于<strong>图卢兹伯爵阿方斯·德·普瓦捷</strong>。公元<strong>1253年</strong>，这位伯爵颁布了一道著名的“建城法令”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的目的非常明确：在一片近乎无法居住的险峻山脊上，建造一座坚不可摧的“新城”，以巩固在图卢兹与鲁埃格地区交界处的统治。这不是为了舒适的田园生活，而是一项军事与殖民工程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Najac”这个名字本身，就充满了地方语言的古韵。普遍认为它源于高卢-罗马时期的地主名“<strong>Naius</strong>”或“<strong>Naiacum</strong>”，意为“纳尤斯的土地”。这个名字穿越了千年，最终定格在这座岩石城堡上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最令人惊叹的是其城市规划的极致逻辑。建筑师没有选择易于拓展的平地，而是反其道行之，完全服从于山脊的狭长地形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一条独一无二的主街贯穿全村，所有生活、贸易、防御功能都沿这条脊柱线性展开。这种“单街”形态，在欧洲极为罕见，它是权力意志与自然地理激烈碰撞后，达成的一种震撼平衡。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "纳雅克的历史，是法兰西西南部权力斗争的一面镜子，每一道石缝都渗入了过往的硝烟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个深刻印记，是<strong>阿尔比十字军</strong>的余波。<strong>13世纪初</strong>，教皇发起的这场针对卡特里派（清洁派）异端的残酷战争，席卷了整个朗格多克地区。虽然纳雅克并非主战场，但它所在的地区正是图卢兹伯爵的势力范围，深受战争重组的影响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争结束后，得胜的法国王室急于巩固成果。正是在此背景下，<strong>1253年</strong>的建城法令得以颁布。纳雅克的城堡与城墙，从诞生之日起就带有强烈的威慑与控制色彩，象征着北方法兰西王室力量对南方领土的牢牢钉入。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“伯爵大人命令，在此山脊上建立一座新城，授予其自由市场的特权，任何定居于此的居民将受到他的保护。”——摘自<strong>1253年</strong>建城法令的精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个，也是最重要的烙印，来自<strong>英法百年战争</strong>。<strong>14-15世纪</strong>，纳雅克因其险要地势，成为兵家必争的战略要塞。它数次在英军与法军之间易手。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的围城战发生在<strong>1370年</strong>，由效忠英王的加斯科尼佣兵队长<strong>贝特朗·杜·盖克兰</strong>指挥。这位传奇统帅率军围攻纳雅克，城堡一度岌岌可危。传说守军凭借其近乎垂直的悬崖防御和一条秘密的地下水源通道，顽强抵抗，最终等来了援军。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争不仅带来了破坏，也重塑了村落。居民们将房屋建得更加坚固，共用山墙以节省材料，窗户狭小如箭孔。这条单街，既是最短的生活路径，也成了最后一道内部防线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，则与宗教迫害的阴霾有关。<strong>17世纪</strong>，纳雅克成为镇压法国新教<strong>胡格诺派</strong>的一个据点。皇家龙骑兵曾驻扎于此，执行强迫改宗的残酷政策。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡一度被用作关押胡格诺派教徒的监狱。那段时期，山村平静的表面下，充满了恐惧与秘密信仰。许多石屋的地窖中，可能曾隐藏过举行秘密仪式的信徒。这段历史为纳雅克阳光明媚的风景，添上了一笔沉重的暗色。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在纳雅克陡峭的街道上，留下足迹的名人不算众多，但每一位都与这座堡垒的命运紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位，是“北方的狼”西蒙·德·孟福尔。</strong> 这位阿尔比十字军的统帅，虽然并非纳雅克的建造者，但他的铁腕为纳雅克的诞生扫清了政治障碍。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1209年至1229年</strong>，孟福尔以残酷的手段镇压朗格多克的贵族与异端，摧毁了当地原有的权力结构，为法王路易九世（圣路易）的兄弟——图卢兹伯爵阿方斯·德·普瓦捷日后在此建立新城铺平了道路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "可以想象，当<strong>1253年</strong>纳雅克的奠基石落下时，空气中仍弥漫着孟福尔时代遗留的肃杀与征服气息。他的军事行动模式——在战略要地建立坚固据点，也深刻影响了纳雅克城堡的设计理念：不求华丽，但求绝对的控制与威慑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二位，则是一位神秘的“囚徒”，让-弗朗索瓦·德·拉波特。</strong> 他的故事，将纳雅克与法国历史上最大的谜团之一联系了起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉波特是<strong>18世纪</strong>一位不起色的乡村教士，但他有一个更著名的兄弟——<strong>路易·德·拉波特</strong>，后者是“太阳王”<strong>路易十四</strong>的贴身男仆，并被认为是国王秘密婚姻的见证人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "路易十四去世后，为防止宫廷丑闻泄露，路易·德·拉波特被迅速逮捕，并消失在历史的黑幕中。而他的兄弟，让-弗朗索瓦，也受到了牵连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有历史学者认为，这位倒霉的教士曾被秘密囚禁在纳雅克城堡之中。在长达数十年的囚禁生涯里，他每日只能透过狭小的石窗，望着下方一成不变的阿韦龙河谷。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“岩石是我的墙壁，寂静是我的狱卒。唯有山谷中盘旋的雄鹰，与我共享这份无尽的孤独。”——后世虚构的拉波特狱中独白，却真实反映了纳雅克城堡作为国家监狱时的阴森。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的存在（或传说），为纳雅克蒙上了一层“国家机密”的阴影。它不再仅仅是军事要塞，更成为了旧制度下，王权无声碾碎个人命运的冰冷象征。游人今日抚摸城堡那些潮湿的囚室墙壁时，指尖滑过的，是另一段被遗忘的悲歌。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在纳雅克，最动人的传说并非关于国王或骑士，而是关于其本身的“诞生”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人世代相传着一个故事：当年，伯爵的建筑师面对这刀锋般的山脊一筹莫展，不知如何安放一座城池。一天夜里，他梦见一只巨大的<strong>山鹰</strong>，稳稳落在山脊最高处，目光如炬，凝视着四方领土。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "醒来后，他恍然大悟。山鹰的栖所，就是最佳的位置；山鹰笔直的脊梁，就是城市的中轴线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，他依照梦境，画下了那条独一无二的直线街道。城堡建在“鹰首”，教堂位于“鹰心”，民居则如“羽翼”般紧密排列在脊柱两侧。这个传说解释了纳雅克为何如此狭长、如此稳固，仿佛随时准备振翅起飞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，纳雅克也被老人们称为“<strong>单街之眼</strong>”。他们说，这条街就像大地睁开的一只眼睛，永远清醒地注视着山谷，守护着居民。任何从河谷来的威胁，都无法逃过这只“眼睛”的凝视。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个习俗则与<strong>圣文森特节</strong>有关。每年一月，村民会抬着圣像，沿着那条一公里长的陡峭主街游行。这不是轻松的仪式，而是一种对社区凝聚力与坚韧精神的年度考验和宣誓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "队伍缓慢上行，脚步声在石板路上回荡，仿佛在与几个世纪以来，所有走过这条街的先辈们——士兵、商贩、农妇、囚徒——进行一场穿越时空的对话。仪式感，在这里化为具体的、需要体力去完成的攀登。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游人漫步在纳雅克那举世无双的单街上，脚下的每一步，都是在丈量一部浓缩的中世纪史。这里没有宏大的宫殿群，没有无尽的博物馆长廊，它的全部历史就镌刻在这条街、这些墙、这座悬崖城堡的轮廓线上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你看那房屋共用的山墙，是百年战争催生的防御智慧；你触摸城堡地牢的寒气，能感知宗教迫害时期的压抑；你仰望街尽头的城堡，眼前浮现的是阿尔比十字军后王权扩张的版图。纳雅克是一座“活化石”，但它不是沉睡的。石缝间生长的野花、窗台上鲜艳的天竺葵，都是历史在当下开出的花朵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂纳雅克，便是读懂了一种在极限环境中生存、抗争并最终将命运与岩石融为一体的文明韧性。它告诉你，历史并非总是波澜壮阔的叙事，有时它只是一条固执地爬上山脊、拒绝消失的石头街道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到这里，最好的旅行方式便是放慢脚步，让想象穿越时空，聆听石头诉说的往事——关于战争、信仰、囚禁，以及平凡人在这非凡之地世代相传的生活诗篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/oppede-le-vieux" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥皮内德（吕贝隆）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oppède le Vieux</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monpazier-bastide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙帕齐耶</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monpazier</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chartres-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙特尔大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chartres Cathedral</p>
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
