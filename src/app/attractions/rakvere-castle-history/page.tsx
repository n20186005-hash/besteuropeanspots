import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉克韦雷城堡历史溯源｜爱沙尼亚北境要塞的中世纪血腥博弈与重生传奇',
  description: '从条顿骑士团到北欧雄狮的权斗场，一座见证北方十字军东征与爱沙尼亚民族意识觉醒的石头史书。深入波罗的海腹地的黑暗记忆。',
}

export default function RakvereCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '拉克韦雷中世纪城堡', href: '/attractions/rakvere-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉克韦雷中世纪城堡・Rakvere Castle・爱沙尼亚・西维鲁县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在爱沙尼亚北部连绵的丘陵与森林之间，<strong>拉克韦雷城堡</strong>的黑色断壁并非一处宁静的废墟。它的真名曾是 <strong>“塔皮亚山”</strong>，一个在古爱沙尼亚语中意为“杀戮之地”的凶险之名。这里不是童话城堡，而是一部镌刻在玄武岩上的、关乎征服、信仰与生存的残酷史诗。八百年间，丹麦王冠、条顿十字、瑞典雄狮与沙俄双头鹰的旗帜在此轮番升降，每一块崩裂的石头都浸透着北方十字军东征的冷冽寒风与利沃尼亚战争的硝烟。抛开游玩攻略，走进拉克韦雷的尘封往事，遇见属于它的铁血时光与不屈传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉克韦雷中世纪城堡`} />
                <InfoRow label="英文名称" value={`Rakvere Castle`} />
                <InfoRow label="正式名称" value={`Rakvere Castle`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`西维鲁县`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉克韦雷的故事，始于比城堡石头更古老的战略要冲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元5-6世纪，一个被称为 <strong>“塔皮亚”</strong> 的古爱沙尼亚部落在此筑起他们的山堡。这座木石结构的堡垒雄踞于瓦苏拉山脊，俯瞰着连接海岸与内陆的古老商路，名字直白而血腥——<strong>“杀戮之地”</strong>。它并非凭空得名，而是部落间为争夺这片富饶土地控制权的漫长血战的直接产物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在13世纪初，<strong>北方十字军东征</strong>的浪潮席卷波罗的海东岸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1226年，手持十字剑的<strong>条顿骑士团</strong>征服了这片区域。他们立刻意识到塔皮亚山无与伦比的军事价值。最初，他们只是在原有山堡基础上，用木头加固了防御。但这仅仅是序章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的德语名称 <strong>“韦森贝格”</strong>首次出现在史料中，意为“白色之山”，或许是对其裸露石灰岩山体的描述，亦可能是骑士团试图用新名覆盖旧血的一种象征性净化。然而，“塔皮亚”的阴魂从未散去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1268年，一场决定性的战役在城堡附近的战场上爆发。诺夫哥罗德共和国军队与条顿骑士团及其盟友激战，双方伤亡惨重。这场战役虽未直接摧毁城堡，却深刻影响了地区力量平衡，也让“塔皮亚”的凶名远扬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到14世纪早期，条顿骑士团才开始了大规模的石砌城堡建设。我们今天看到的废墟主体，便源于那个征服者巩固统治、镇压原住民反抗的时代。城堡的起源，就是一部用铁与火写就的殖民与反殖民的开篇。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光在石墙上刻下的最深印记，莫过于两次彻底改变城堡命运与容颜的战争。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个决定性时刻属于<strong>丹麦王国</strong>。1343年，爆发了声势浩大的<strong>圣乔治之夜起义</strong>，爱沙尼亚原住民对德意志领主的压迫发起猛烈反抗。起义军一度围攻了韦森贝格城堡。为了稳住局势，丹麦国王瓦尔德马四世果断出兵介入。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "编年史家曾隐晦记载：“山堡之下，土地被血浸透，自由的声音被铁蹄踏碎。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1346年，丹麦直接从条顿骑士团手中买下了整个北爱沙尼亚，包括这座战略城堡。丹麦人带来了更先进的筑城理念。他们增建了宏伟的<strong>环形外墙</strong>和多座坚固的塔楼，特别是那座俯瞰全城的方形主塔。城堡从一座骑士团的前哨站，升级为丹麦王室在北爱沙尼亚的行政与军事核心，其名也正式在爱沙尼亚语中演化为<strong>“拉克韦雷”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而真正将城堡推向毁灭巅峰的，是16世纪的<strong>利沃尼亚战争</strong>。这场持续二十五年的混战，将俄罗斯沙皇国、波兰-立陶宛联邦、瑞典和丹麦全都卷入其中，拉克韦雷成了风暴眼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1558年，<strong>俄罗斯沙皇伊凡雷帝</strong>的军队首次攻占并洗劫了城堡。此后的几十年，它像一件破烂的玩具，在各方势力手中反复易主。最惨烈的围攻发生在1574年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时驻守城堡的是瑞典军队。俄军发动了漫长而残酷的围攻。守军弹尽粮绝，<strong>瘟疫</strong>又在紧闭的城墙内爆发。当城堡最终陷落时，里面几乎已无活人。战争结束后，胜利者瑞典王国审视这座千疮百孔的堡垒，认定其已失去军事价值，再无修复必要。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，<strong>拉克韦雷城堡被正式废弃</strong>。石头被居民拆去建造房屋，唯有巨大的墙体骨架，如同巨兽的骸骨，留在这座山丘上，沉默地诉说利沃尼亚战争的疯狂与代价。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在城堡漫长的占领史上，有一位君主的短暂停留，为其增添了一抹复杂而悲情的传奇色彩。他就是瑞典国王<strong>埃里克十四世</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃里克于1560年登基，是一位聪明但性情极不稳定、最终陷入疯狂的君主。他的野心是建立一個强大的波罗的海帝国。在利沃尼亚战争初期，瑞典趁乱扩张，拉克韦雷于1561年落入瑞典手中。尽管埃里克本人可能从未亲临这座偏远的城堡，但他的意志深深影响了这里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了巩固统治，埃里克推行了一项激进政策：向拉克韦雷等爱沙尼亚城镇大量迁移<strong>瑞典农民</strong>。他希望以此改变人口结构，将这里彻底“瑞典化”。这一政策在城堡周边留下了持久的文化印记，也为后来的民族关系埋下伏笔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但埃里克的传奇更在于他个人的悲剧。他的多疑与妄想症日益严重，最终在1568年被自己的兄弟<strong>约翰三世</strong>发动政变推翻并囚禁。关于他被囚禁的城堡，有多种说法，而拉克韦雷的坚固与偏远，使其成为民间传说中一个热门的候选地。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "有传说描绘，疯王在幽暗的塔楼里，终日与幻影对话，在墙壁上涂画他想象中的帝国版图。狱卒常听到他高喊：“朕是北方的雄狮！这片海，这片土地，都是朕的！”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然正史记载他并未关押于此，但这个传说却顽强地附着在拉克韦雷城堡的废墟上。它象征了权力巅峰的脆弱，以及野心如何反噬其主人。参观者行走于地牢般的底层大厅时，仿佛仍能感受到那种由极权与孤独混合而成的、令人窒息的寒意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与城堡灵魂相关的人物，并非国王，而是一位虚构的“守护者”——<strong>“塔尔”</strong>。在现代城堡重建的体验项目中，塔尔被塑造为一名14世纪的城堡护卫队长，一个粗犷、幽默、深爱着这片土地的爱沙尼亚汉子。通过他之口，游客听到的不再是征服者的丰功伟绩，而是普通士兵的日常、对家园的眷恋，以及在强大外力碾压下的无奈与坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塔尔这个角色的创造，代表了当代爱沙尼亚人对自身历史叙述的夺回。城堡不再仅仅是外国领主统治的象征，也成为爱沙尼亚民族坚韧生命力的一个舞台。在这里，历史的讲述权，终于部分回归到了这片土地最初子民的后代手中。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在所有围绕拉克韦雷城堡的传说中，最深入人心、也最令人脊背发凉的，是关于 <strong>“永恒哨兵”</strong> 的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在利沃尼亚战争期间，一位年轻的瑞典哨兵被指派在城堡最外围的城墙哨位上站岗。那是一个风雪交加的冬夜，俄军的围城已持续数月，饥饿和绝望弥漫在守军之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哨兵又冷又困，但他牢记职责，死死盯着城墙外漆黑的森林。恍惚间，他仿佛看到心爱的家乡姑娘在向他招手，呼唤他放下武器，回家过平静的生活。就在他心神动摇、几乎要向前迈出一步的瞬间，一声惊雷般的炮响将他震醒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他发现自己的双脚，不知何时已被冻结在城墙的石头中，并且不断向上石化。原来，这是城堡古老的<strong>守护精灵</strong>（或说是阵亡将士的集体意志）对他的惩罚——因他一瞬间的渎职念头。他的身体从脚到头，逐渐变成了城墙的一部分。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人会说：“如果你在满月之夜触摸南墙那块颜色更深的石头，还能感觉到一丝微弱的心跳。那是哨兵永不停止的忏悔。他没能保卫城堡到最后，所以被罚永远站在这里，履行他未尽的职责。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说深刻地反映了战争年代严苛的军纪、普通人被卷入宏大历史悲剧的无奈，以及爱沙尼亚民间故事中常见的、人与自然（石头）力量的神秘结合。它让冰冷的废墟拥有了人性化的悲情内核。每一个听到这个故事的游客，再凝视那些斑驳古老的城墙时，目光中都会多出一份敬畏与叹息。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，漫步在部分重建的拉克韦雷城堡中，你触摸的并非一段浪漫化的中世纪。你触摸的是欧洲东北角地缘政治摩擦最尖锐的断层线，是<strong>殖民、宗教战争与帝国争霸</strong>三重奏下的具体伤痕。它没有塔林老城的童话色彩，也没有派尔努的度假风情。它的气质是粗粝、阴郁而沉重的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂拉克韦雷，就是读懂爱沙尼亚民族历史中那段身不由己的“夹缝时代”。它如同一块<strong>历史的活化石</strong>，清晰地展示了这个民族如何在德意志骑士、丹麦国王、瑞典君主和沙俄皇帝之间被反复易手，却始终顽强地保存着自己的语言与文化认同，最终在二十世纪末重获独立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的每一阵风都似带着古战场的回响，每一块残砖都可能承载着一个被遗忘的名字。它提醒我们，在欧洲那些光鲜的文明中心之外，在波罗的海的凛冽风中，还存在着这样一些以血与石书写历史的沉默见证者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旅行至此，不仅是参观一座城堡，更是参与一场跨越八个世纪的<strong>历史对话</strong>。当你在“永恒哨兵”的墙前驻足，或在“塔尔”的营火旁聆听，你便连接了这片土地的记忆链。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、中世纪体验活动全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/suure-moisa-manor" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    苏
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">苏雷梅伊萨庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Suure-Mõisa Manor</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tartu-university-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu University Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rakvere-medieval-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉克韦雷中世纪城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rakvere Castle</p>
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
