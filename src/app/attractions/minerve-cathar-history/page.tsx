import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米内尔沃历史溯源｜卡特里派的最后堡垒与法国南部的隐秘往事',
  description: '深入法国南部隐秘峡谷，探访卡特里派异端的最后堡垒米内尔沃。十字军、火刑与信仰的对峙，在这座岩石小镇留下了怎样的沉默回响？',
}

export default function MinerveCatharHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '米内尔沃', href: '/attractions/minerve-cathar-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米内尔沃・Minerve・法国・埃罗省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国朗格多克灼热的阳光与嶙峋的峡谷深处，藏着一个名字被写入血色史册的小镇——<strong>米内尔沃</strong>。它并非寻常的南法风情画，而是一座建立在石灰岩岬角上的天然堡垒，更是欧洲中世纪宗教清洗运动中，一个无法绕开的悲剧坐标。<strong>1209年</strong>，一场针对“异端”卡特里派的十字军征讨，在这里画上了一个残酷的句号。抛开游玩攻略，走进米内尔沃的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米内尔沃`} />
                <InfoRow label="英文名称" value={`Minerve`} />
                <InfoRow label="正式名称" value={`Minerve`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`埃罗省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米内尔沃的诞生，源于大自然的鬼斧神工与人类对安全的极致渴求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>布里扬河</strong>与<strong>塞斯河</strong>两条水流，经年累月地切割石灰岩高原，最终雕琢出一片三面环深渊、仅由一道狭窄天然石桥与外界相连的孤绝岬角。早在史前时代，这里易守难攻的地形就已吸引人类聚居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而其名字“Minerve”的由来，则笼罩着一层古典的迷雾。普遍认为，它源于拉丁语，与古罗马的智慧与战争女神<strong>密涅瓦（Minerva）</strong> 有关。这并非偶然。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在罗马帝国时期，此地可能曾建有一座供奉这位女神的圣所。女神之名，赋予了这座险峻要塞一层文化与神圣的光晕，仿佛在昭示其不可侵犯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的反讽在于，千年之后，以智慧女神为名的小镇，却见证了一场与“理性”背道而驰的信仰屠杀。从天然的避难所，到被迫选择的最后据点，米内尔沃的地理位置，从一开始就预示了它命运的多舛与悲壮。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米内尔沃的历史，与一个词紧密相连：<strong>卡特里派（Catharism）</strong>。这座小镇的每一块岩石，都浸透着这段被称为“阿尔比十字军”（Albigensian Crusade）的惨烈记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 异端的“净土”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "12-13世纪，卡特里派信仰在法国南部的朗格多克地区蓬勃生长。他们主张善恶二元，谴责天主教会腐败，吸引了大量平民乃至贵族。米内尔沃，因其偏远险峻，成为了卡特里派信徒（又称“纯洁派”）的一个重要避难所和社区中心。在教会眼中，这里成了一块必须铲除的“异端”堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 1209年的围城与抉择</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1209年夏</strong>，由西门·德·孟福尔率领的北方十字军，在教皇英诺森三世号召下南下“清剿”。在攻占贝济耶并制造大屠杀后，兵锋直指米内尔沃。围城从6月开始。十字军架起巨大的投石机“恶狼”，持续轰击小镇唯一的水源——隐藏在峡谷下的圣鲁斯蒂克泉。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "编年史家记载，围城者砍伐了整个地区的果树来建造攻城器械，他们决心“用饥饿与干渴，而非刀剑，来征服这些异端”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "断水成为压垮守军的最后一根稻草。在坚持七周后，米内尔沃的领主<strong>纪尧姆·德·米内尔沃</strong>被迫谈判投降。然而，投降协议充满了欺诈：十字军答应饶恕所有放弃异端信仰的人。可什么是“放弃”？标准由胜利者定义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>3. 殉难之火与圣纳泽尔教堂</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1209年7月22日</strong>，米内尔沃的石桥上，竖起了巨大的火刑柱。至少140名拒绝放弃信仰的卡特里派“完人”（教士）被分批烧死，其中很多是女性。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当代的卡特里派研究者常引用一位不知名修士的记述：“火焰升腾时，他们中许多人唱起了圣歌，走入火中如同步入天堂。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，小镇入口处立着一座朴素的纪念碑——“卡特里派殉难者纪念碑”，默默指向当年行刑的方向。而镇上建于11世纪的<strong>圣艾蒂安教堂</strong>，则在围城后被改建和“净化”，抹去了卡特里派的痕迹，见证了正统信仰的回归与覆盖。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米内尔沃的故事里，没有享誉全球的艺术巨匠，却充满了在信仰与强权夹缝中生存的普通人，以及一位用笔记录下这一切的“旁观者”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>纪尧姆·德·图戴尔（Guilhem de Tudèle）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非米内尔沃人，但他的作品是打开这段历史最重要的钥匙之一。图戴尔是一位来自纳瓦拉（今西班牙）的牧师兼游吟诗人。大约在<strong>1210年</strong>，也就是米内尔沃惨案发生的次年，他开始创作长篇史诗《阿尔比十字军之歌》。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这部作品的特殊性在于，图戴尔本人最初是支持十字军一方的，甚至带有一些偏见。但随着战争暴行的展开，他的笔触逐渐变得复杂，甚至流露出对朗格多克人民的同情。他详细记录了从贝济耶到米内尔沃的围攻战。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在描述米内尔沃围城时，他写道：“领主（纪尧姆）走了出来，面色苍白……他知道自己的土地将化为废墟，他的子民将沦为囚徒。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管立场并非中立，但图戴尔的记载提供了近乎“现场报道”般的细节：谈判的拉扯、守军的绝望、十字军将领的盘算。正是通过这些诗句，后世才得以窥见那场决定小镇命运谈判的紧张气氛，以及失败者一方的悲怆。他的文字，让米内尔沃不再只是历史书上一个冰冷的殉难数字。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>蒙福的纪尧姆（Blessed Guilhem）——一个被遗忘的本土记忆</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当地的微弱传承中，还流传着一位名叫<strong>纪尧姆</strong>的卡特里派“完人”。他并非显赫贵族，可能只是米内尔沃或附近村庄的一位普通信徒，因其坚定的信仰和在围城期间的领导或抚慰作用而被铭记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在最后时刻，他选择了火焰而非皈依。他的名字未被正式封圣（天主教不会封圣一位“异端”），但在一些关于卡特里派的口述史和地方研究中，他作为“蒙福的”或“圣洁的”纪尧姆出现，代表了那140位无名殉难者的集体形象。他的“传奇”不在于丰功伟绩，而在于一种沉默的、植根于土地的抵抗记忆，至今仍被少数追寻这段历史的人们所凭吊。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间冲刷了血腥，却滋生了传说。关于米内尔沃围城，流传着一个关于“背信弃义”与“神圣报复”的民间版本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，在十字军承诺“放弃信仰即可活命”后，一部分动摇的居民（或领主本人）曾假意宣布皈依天主教。他们甚至可能当着十字军的面，参加了在圣艾蒂安教堂举行的天主教弥撒。然而，这只是权宜之计，他们内心并未真正放弃卡特里派信仰。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "故事说，就在他们虚伪地领受圣餐后不久，一道闪电击中了教堂的钟楼（或是峡谷中某处），又或是领主的家族突然开始遭遇连续的厄运。当地人将此解释为上帝（或神明）对背信行为的惩罚，即使这背叛是为了求生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，反映了民间叙事对复杂历史事件的简化与道德化处理。它将历史悲剧转化为一个清晰的道德寓言：无论出于何种压力，对信仰的不忠都会招致天谴。同时，它也隐秘地表达了后世对那段屈辱投降历史的一种心理补偿——那些最终屈服的人，并未得到好报。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个更朴素的传说则与地理有关：人们说，峡谷中那些形状奇特的岩石，是被烈火灼烧过的殉难者凝固的灵魂，他们至今仍在守卫着这片土地。每当山风穿过峡谷，那呜咽之声，便是他们在低语。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的米内尔沃，静谧、优美，如同一枚镶嵌在碧绿峡谷中的赭石印章。游客沿着唯一的主街漫步，在咖啡馆露台欣赏险峻风光，很难第一时间将眼前桃源与中世纪的火刑场联系起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但这正是米内尔沃最具张力之处。它的美，与它的痛，根植于同一片岩石。来到这里，你不是在参观一个被精心包装的“历史主题公园”，而是在进行一场沉浸式的时空对话。脚下的石路，可能走过赴死的“完人”；眼前的咖啡馆墙壁，可能目睹过投降谈判的屈辱；呼啸的谷风，仍传送着八个世纪前的回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂米内尔沃，意味着理解欧洲历史中“正统”与“异端”的残酷博弈，看到宗教理想主义如何被政治与暴力碾碎。它是一座献给失败者、献给沉默者的纪念碑。它提醒我们，历史的主流叙事之外，总有一些被边缘化、被试图抹去的声音，值得被倾听。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇不需要喧哗的纪念。它的存在本身，就是最有力的历史证词。当你站在纪念碑前，或凝望那座决定生死的天然石桥时，你所感受到的，正是历史本身的重量与苍凉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/le-puy-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    勒
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">勒皮圣母大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Le Puy Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vence-rose-chapel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺斯玫瑰念珠礼拜堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vence</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/collioure-harbour-fauvist-painters" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科利尤尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Collioure</p>
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
