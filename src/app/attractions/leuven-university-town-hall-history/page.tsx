import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '鲁汶历史溯源｜欧洲最古老大学城的喧嚣、火灾与人文荣光',
  description: '探索比利时鲁汶：一座被大火七次焚毁又浴火重生的中世纪古城，欧洲思想的心脏。在这里，石头会讲述近六个世纪的大学传奇。',
}

export default function LeuvenUniversityTownHallHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '鲁汶大学城与市政厅', href: '/attractions/leuven-university-town-hall-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`鲁汶大学城与市政厅・Leuven・比利时・鲁汶`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果欧洲大学史有一张出生证明，它的签发地一定是 <strong>鲁汶</strong>。这座距离布鲁塞尔仅25公里的小城，标签并非只有“啤酒”或“学生之都”。自 <strong>1425年</strong> 教皇诏书降临起，它便成为低地国家乃至整个欧洲北部的思想灯塔。然而，与静谧的学术想象相反，鲁汶的历史充满了火焰、政治角力与喧嚣的辩论。它的命运与一座大学死死捆绑，一同经历了辉煌、毁灭与重生。抛开游玩攻略，走进鲁汶的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`鲁汶大学城与市政厅`} />
                <InfoRow label="英文名称" value={`Leuven`} />
                <InfoRow label="正式名称" value={`Leuven`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`鲁汶`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁汶的故事，始于一条名为 <strong>德勒（Dyle）</strong> 的静谧河流。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在公元9世纪，法兰克人便在此处的河畔沙洲上建立定居点。它的名字 <strong>“Leuven”</strong>，源自古日耳曼语 <strong>“Loven”</strong>，意为“亲爱的”或“心爱的”，或许是对这片肥沃土地的深情称呼。地理的馈赠是其最初的资本：德勒河是重要的航运通道，连接着默兹河与斯海尔德河流域。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在12世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着纺织业的兴盛与贸易路线的繁荣，鲁汶迅速崛起，成为强大的 <strong>布拉班特公国（Duchy of Brabant）</strong> 的首府。宏伟的 <strong>圣伯多禄教堂</strong> 开始奠基，它不仅是信仰的丰碑，更是城市财富与雄心的宣言。城墙被一次次扩建，市场广场人声鼎沸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，与其他许多依赖商业的汉萨同盟城市不同，鲁汶的命运并未止步于经济繁荣。它的统治者，<strong>布拉班特公爵约翰四世</strong>，在15世纪初做出了一个影响深远的决定。他渴望在自己的领地上建立一所大学，一个能与巴黎、科隆比肩的知识殿堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一愿景，在 <strong>1425年12月9日</strong> 成为现实。教皇 <strong>马丁五世</strong> 颁布诏书，正式批准建立 <strong>鲁汶天主教大学</strong>。自此，这座城市的基因被彻底改写。它不再仅仅是一座商贸之城，而成为 <strong>“低地国家第一所大学”</strong> 的永恒宿主。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大学的建立，为鲁汶注入了不朽的灵魂，却也引来了无尽的动荡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，便是大学自身所带来的 <strong>“知识狂欢”与权力博弈</strong>。早期大学没有固定校园，教授们在私人住宅、修道院甚至酒馆里授课。整个城市变成了一个巨大的、嘈杂的露天课堂。不同学院（神学、法学、医学、艺学）的学生与教授组成了强大的“国中之国”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们享有司法特权，与市民冲突不断。市政厅的档案里，满是关于学生酗酒闹事、房租纠纷的卷宗。然而，正是这种世俗与学术的激烈碰撞，催生了鲁汶独特的气质：既严谨又叛逆，既传统又充满活力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个无法抹去的印记，是 <strong>1690年那场吞噬一切的大火</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "事实上，火灾是中世纪鲁汶的常客，木头与茅草的建筑群是其永恒的噩梦。但1690年的这场浩劫，程度空前。烈焰在狂风助长下席卷全城，持续了数日。当浓烟散尽，<strong>超过两千栋房屋化为灰烬</strong>，包括珍贵的大学图书馆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "市政厅与圣伯多禄教堂的塔楼奇迹般幸存，如同焦土中倔强的石碑。这场灾难几乎将鲁汶从地图上抹去。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“整个城市就像一座巨大的火葬堆……我们失去了教堂的珍宝、市民的财产，以及大学无价的书籍与手稿。”——一位当代修士的记述" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，毁灭带来了重生。重建后的鲁汶，采纳了更严格的石造建筑规范。更重要的是，大学在灰烬中展现了惊人的韧性。国际捐助纷至沓来，新的图书馆被建立，学术活动在临时场所迅速恢复。这场大火，反而锤炼了鲁汶 <strong>“浴火重生”</strong> 的集体精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，刻在 <strong>市政厅（Stadhuis）</strong> 的建筑细节中。这座建于15世纪的晚期哥特式杰作，远非单纯的行政机构。它的立面上雕刻了数百尊人物像，并非圣经先知或圣徒，而是 <strong>历代学者、历史名人、本地行会代表</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这本身就是一部石头的“城市编年史”，宣告着市民阶层的骄傲与大学精神的交融。它底层曾是热闹的布料大厅，上层是市政议事厅，完美隐喻了鲁汶经济与智识的双重支柱。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在鲁汶的星空下，群星璀璨，但有两颗星辰的光芒定义了不同的时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>德西德里乌斯·伊拉斯谟（Desiderius Erasmus），无疑是鲁汶16世纪初最著名的“居民”。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位人文主义巨匠并非鲁汶人，但他生命中至关重要的九年（1517-1526）在此度过。当时，欧洲正被宗教改革的飓风前夕的紧张气息笼罩。伊拉斯谟应他的朋友、鲁汶大学校长 <strong>热罗姆·布斯莱登</strong> 的邀请前来，旨在将这里打造成人文主义研究与基督教革新的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在鲁汶建立了 <strong>“三语学院”（Collegium Trilingue）</strong>，专门教授希伯来语、希腊语和拉丁语。这一创举旨在回归圣经原文，绕过中世纪经院哲学的冗杂注释，直抵信仰本源。学院迅速成为欧洲年轻学者心驰神往的圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，伊拉斯谟在鲁汶的岁月远非田园诗。他身处风暴眼。一方面，他倡导的内部改革与温和态度，被保守的 神学家敌视；另一方面，他拒绝支持马丁·路德的激进分裂，又遭到改革派的抨击。他在鲁汶的住所，成了全欧洲思想信件的交汇处，也成了压力的焦点。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我在这里被夹在两头燃烧……一些人把我当作路德派烧，另一些人则因我不够路德而烧我。”——伊拉斯谟在鲁汶的书信" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，日益激化的冲突让他身心俱疲，于1526年离开了鲁汶。但他播下的种子已然生根。三语学院的精神，奠定了鲁汶大学日后在语言学、文献考据领域的卓越传统。今天，大学广场上矗立着他的雕像，他手捧书卷，目光深邃，仿佛仍在沉思信仰与理性的微妙平衡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与鲁汶血脉相连的传奇，是 <strong>安德烈亚斯·维萨留斯（Andreas Vesalius）</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位近代解剖学之父，于<strong>1514年出生在布鲁塞尔，但他在鲁汶大学完成了最初的学业</strong>（1528-1533）。当时的医学教育仍严重依赖盖伦的古典著作，人体解剖极少且流于形式。年轻的维萨留斯在鲁汶展现出了对“亲手探索”的惊人热情与胆识。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一个广为流传的轶事是，他和同学曾深夜潜入城外<strong>刑场</strong>，盗取被处决罪犯的遗骸，用于秘密研究。鲁汶城墙外的 <strong>“绞刑山”</strong> ，成了他突破禁忌的第一个解剖实验室。这种对实证的狂热追求，与当时大学里盛行的经院哲学背诵风气格格不入。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在鲁汶积累的实践经验与挫折感，驱使他后来前往巴黎和帕多瓦，最终完成了颠覆性的巨著 <strong>《人体的构造》</strong>。鲁汶，可以说是他反叛精神的起点，也是他实证主义科学观的萌芽之地。这座城市见证了，一个青年如何因不满足于书本教条，而走上了改写整个医学历史的道路。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在鲁汶，知识是崇高的，但生活是鲜活甚至顽皮的。这一点，充分体现在它最著名的传说—— <strong>“学生天使”（Den Engel）</strong> 的故事里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事发生在17世纪。一个名叫 <strong>“诺特”</strong> 的年轻学子，因在酒馆流连忘返，错过了至关重要的宵禁时间。大学有严格规定，宿舍大门关闭后，迟归的学生将面临严厉惩罚。诺特在漆黑的街道上焦急徘徊，仰望星空，下意识地祈祷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "就在这时，他瞥见市政厅高耸的塔楼尖顶上，似乎有一个发光的影子。那影子越来越清晰，竟是一位展开双翼的 <strong>天使</strong>。天使对他微微一笑，轻轻挥动手臂。奇迹发生了：宿舍那扇沉重的橡木大门，竟无声无息地滑开了一道缝，刚好容他侧身溜入。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诺特将此神迹归功于自己的虔诚祈祷。但第二天，当他向同学吹嘘时，一位老教授笑着揭穿了谜底。原来，那位“天使”是市政厅钟楼上的 <strong>镀金风向标</strong>，其造型正是一位持剑的天使。深夜的月光恰好以特定角度照射其上，形成了闪烁的光晕。而门之所以开了，是因为那晚看门人自己也喝多了，忘记上门栓。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“鲁汶的天使，既拯救灵魂，也宽容肉体。毕竟，是智慧，而非苦修，才是我们追求的真谛。”——传说的结尾寓意" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个带着幽默与温情的传说，完美浓缩了鲁汶的精神：它尊重规则，但也理解人性的弱点；它追求神圣的知识，却不失人间烟火气的狡黠与宽容。直到今天，市政厅塔尖的“天使”仍是鲁汶的守护象征，提醒着每一个过客与学子：在这里，神圣与世俗，从来不是对立的两极。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步今日的鲁汶，你行走的并非一座凝固的“大学博物馆”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你脚下是七次大火焚烧过的地基，指尖划过的是宗教战争时期被砸毁又修复的圣人雕像。广场上喧闹的学生，延续着六个世纪前同龄人的活力与不羁。市政厅的石头圣人凝视着对面酒吧里畅饮“鲁汶啤酒”的人群，这场景本身，就是一部活着的、未曾中断的历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂鲁汶，便是读懂一种欧洲精神的内核：<strong>如何在毁灭与重生、信仰与理性、权威与反叛的永恒张力中，守护思想的火种</strong>。它从未登上帝国权力的巅峰，却以知识的力量，深远地塑造了欧洲的心智图景。这座小城的故事，是关于韧性、关于辩论、关于在灰烬中一次次重拾羊皮纸与鹅毛笔的倔强。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，不在于某个孤立的景点，而在于那弥漫全城、触手可及的 <strong>“历史在场感”</strong>。每一个庭院都可能走出过伊拉斯谟，每一间老酒馆都回荡过维萨留斯青年时代的辩论。在这里，历史不是教科书里的章节，而是呼吸的空气，是杯中摇曳的琥珀色液体，是永恒青春的喧嚣底色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/huy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡伊古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Huy</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/malmedy-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔梅迪修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Malmedy Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arlon-roman-archaeological-site" className="block group">
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
