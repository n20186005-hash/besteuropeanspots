import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿拉特里历史溯源｜独眼巨人城墙下的意大利秘境，千年古城的尘封往事与科学传奇',
  description: '探索意大利拉齐奥隐秘古城阿拉特里。揭开史前“独眼巨人”巨型多边形城墙之谜，漫步中世纪教皇避难所，追寻诺贝尔奖得主的童年足迹。一段被巨石封印的时光。',
}

export default function AlatriHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '拉齐奥', href: '/destinations/italy' },
            { label: '阿拉特里', href: '/attractions/alatri-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿拉特里・Alatri・意大利・拉齐奥`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在罗马东南方约100公里处，一座小山城静卧于群山环抱之中。它的轮廓并非由寻常砖石勾勒，而是被一道由数吨重巨型石灰岩块严丝合缝砌成的、近乎完美的多边形城墙所定义。这不是神话，是阿拉特里。它被誉为“意大利最神秘的古城”之一，其核心标志——史前卫城城墙，因石块之巨大、工艺之诡谲，自古便被归功于神话中的“独眼巨人”。抛开游玩攻略，走进阿拉特里的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿拉特里`} />
                <InfoRow label="英文名称" value={`Alatri`} />
                <InfoRow label="正式名称" value={`Alatri`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`拉齐奥`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉特里的起源深埋在史前的迷雾中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "根据主流考古学观点，这片土地在公元前二千年左右，已有人类聚居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，赋予这座城市灵魂与不朽形体的，是公元前六至七世纪左右在此兴盛的一个意大利古民族——<strong>赫尔尼奇人</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "赫尔尼奇人并非罗马人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们是亚平宁半岛上一支强悍的山地民族，与邻近的沃尔西人、埃魁人一样，是早期罗马共和国在拉丁姆地区扩张时最棘手的对手。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉特里，正是赫尔尼奇联邦最重要的中心城市之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字“Alatrium”（拉丁语）源流已模糊，一说可能源于古老的意大利语，意为“祭坛”或“高处的圣地”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这恰恰点明了城市的初始核心与功能：一座建于双峰山丘顶部的<strong>卫城</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个选址极具战略与宗教意义，易守难攻，且能俯瞰整个萨科河谷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正让阿拉特里与众不同的，并非其年代，而是其建造者选择的建筑材料与技艺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们放弃了相对容易加工的小型石块，转而从数公里外的采石场开凿、运输重达数吨乃至十数吨的巨型石灰岩块。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更令人费解的是，这些庞然巨物被切割成不规则的多边形，却能像拼图一样，不使用任何黏合剂，仅凭自身重力与精密的咬合，垒砌成高达数米、绵延近两公里的巍峨城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种技术，考古学上称为“多边形砌石术”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿拉特里，它达到了登峰造极的水平。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当后来的罗马人征服此地（公元前306年），并将之纳入罗马大道网络时，他们面对这堵城墙，也感到了深深的震撼与不解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一个流传千年的解释诞生了：这绝非人力所为，只能是神话中力大无穷、为众神建造宫殿的<strong>独眼巨人</strong>的杰作。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 独眼巨人之墙：超越时代的建筑谜题</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉特里卫城的城墙，是这座城市最深刻的历史印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非简单的防御工事，而是一部镌刻在石头上的天书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城墙大致呈五边形，环绕着两座山峰中的较高者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其最令人惊叹的部分是<strong>西北角的“风神之门”</strong> 与附近的一段墙体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的石块最大，咬合最为复杂精密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最大的石块高达三米，宽超五米，估算重量超过<strong>二十五吨</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地古老传说讲述：“当独眼巨人们为朱庇特建造完神庙后，他们来到阿拉特里，被此地的灵气所吸引。于是，他们用建造神邸的剩余巨石，在一夜之间为这里的国王建起了永不陷落的城墙。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种砌石技术究竟如何实现？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "是失传的测量与力学知识？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还是某种我们尚未完全理解的“软化石”加工法？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到今天，它仍是考古学家与历史工程师争论的焦点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这堵墙见证了赫尔尼奇文明的高度，也见证了后来者——罗马人、中世纪居民——对这份远古遗产的敬畏与沿用。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从未被彻底摧毁，一直作为城市的基石存在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 中世纪的教皇堡垒与信仰中心</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国衰落后，阿拉特里因其坚固的防御，在中世纪再次扮演了关键角色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>十二世纪</strong>，在教权与皇权激烈斗争的时代，阿拉特里的卫城被改造和强化，成为了教皇国的一个重要堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1217年</strong>，当时的教皇<strong>霍诺里乌斯三世</strong>甚至将阿拉特里作为自己的常住地之一，在此处理教会事务，使其一度成为教皇国的临时行政中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卫城内的<strong>圣西斯笃大教堂</strong>正是在这个时期，在古罗马神庙的遗址上兴建起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教堂本身融合了罗马式与早期哥特式风格，其地下室保留了古老的石砌结构，仿佛将不同时代的历史层理压缩在同一空间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段历史赋予了阿拉特里超越寻常小镇的政治与宗教分量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在卫城之内，你脚下踩着的，可能是赫尔尼奇人的神圣地基、罗马人的广场、中世纪教皇走过的石板路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>3. 拿破仑时代的插曲与近代转型</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转至近代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>十八世纪末</strong>，拿破仑的军队席卷意大利，带来了新的社会秩序。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教会财产被大量没收、拍卖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1798年</strong>，阿拉特里这座千年古城及其领地，作为教会财产，被公开拍卖给了一位名叫<strong>弗拉米尼奥·马萨</strong>的罗马贵族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这桩买卖，像一个超现实的注脚，标志着古老封建秩序的终结与现代私有产权观念的确立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古城本身，成了一件可以估价、交易的特殊“商品”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后，阿拉特里逐渐褪去军事与宗教中心的色彩，回归宁静的山区小镇生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但其地下的史前城墙、中世纪的教堂与宫殿，如同沉睡的巨人，始终守护着它的秘密与尊严，等待着被重新“阅读”。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉特里的石头记录着宏大的历史，也庇护过细腻的智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市最引以为傲的现代之子，是一位改变了人类对物质世界认知的科学家——<strong>格拉尔多·塞格雷</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>格拉尔多·塞格雷</strong>的名字，或许不如他的堂兄、因发现反质子而获诺贝尔物理学奖的<strong>埃米利奥·塞格雷</strong>那般广为人知。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但他在粒子物理学的黄金时代，同样是一位举足轻重的先驱者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1905年</strong>，格拉尔多·塞格雷出生在阿拉特里一个富裕的犹太裔家庭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的童年在这座石头之城度过，直到前往罗马大学攻读工程学，并最终转向他热爱的物理学。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的学术生涯与两位巨人紧密相连：<strong>恩里科·费米</strong>与<strong>埃米利奥·塞格雷</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>1930年代</strong>，他是费米在罗马大学领导的著名“帕尼斯佩尔纳大道少年”研究团队的核心成员之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个昵称源自他们实验室所在的街道，团队里聚集了当时意大利最顶尖的年轻物理学家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们共同推进中子物理学研究，为后来的核能开发奠定了基础。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，<strong>1938年</strong>墨索里尼颁布的《种族法》改变了一切。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为犹太人，塞格雷被迫流亡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他先到英国，最终定居美国，在芝加哥大学、伊利诺伊大学等地继续他的研究。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最重要的贡献之一，是与团队合作，首次在实验室中产生了<strong>反质子以外的反物质粒子</strong>，深化了人类对对称性与宇宙本源的理解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉特里，始终是他精神上的故乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管成年后大多时间远离，但这座城市的静谧、坚实与古老智慧，或许以一种隐秘的方式塑造了他的科学气质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在回忆录中曾提及故乡的稳固与永恒感，与他在探索的转瞬即逝的亚原子世界，形成奇特的对照。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "格拉尔多·塞格雷曾在一封信中写道：“有时候，我会想起阿拉特里卫城那些巨大的石头。它们历经三千年风雨，纹丝不动。而我们，在实验室里捕捉到的粒子，寿命只有亿分之一秒。永恒与须臾，都在试图告诉我们世界的真相。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉特里没有忘记这位儿子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，小镇以他为荣，一条街道以他的名字命名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的故事，为这座以远古巨石闻名的城市，增添了现代科学的璀璨星光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从独眼巨人的神话，到塞格雷的粒子，阿拉特里仿佛一座跨越时空的桥梁，连接着人类对世界最原始的好奇与最精密的探索。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了“独眼巨人建城”这个核心传说，阿拉特里的街巷间还弥漫着其他富有地方色彩的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说往往与具体的建筑或地点结合，代代相传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最动人的之一，是关于卫城<strong>圣西斯笃大教堂</strong>内一尊<strong>黑色圣母像</strong>的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这尊木制圣母像历史可追溯至十二世纪，因年代久远而颜色深暗，被当地人虔诚供奉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在很久以前，阿拉特里曾遭遇一场空前严重的瘟疫或干旱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们向所有神明祈祷都无济于事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最后，几位最虔诚的妇女前往教堂，向这尊圣母像日夜祷告，泪流不止。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她们的泪水滴落在圣母像的脚上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奇迹发生了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣母像的脚部，被泪水浸润的木头，竟然缓缓显现出了原本的木质纹理与颜色，仿佛在回应人们的苦难与虔诚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自那以后，灾难逐渐消退。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个“流泪圣母”的传说，赋予了这尊雕像特殊的神性，也成为了阿拉特里人坚韧与信仰的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更显神秘，与城墙的“声学”特性有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，在卫城城墙的某些特定位置，尤其是在<strong>风神之门</strong>附近，如果将耳朵紧贴那些冰冷的巨石灰岩，在万籁俱寂的深夜或风雨交加之日，便能隐约听到从石头深处传来的、仿佛巨锤敲击石块的“叮当”声，或是模糊的、巨人般的呢喃。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们会说：“那是独眼巨人的灵魂，还在继续他们的工作。他们在石头里留下了自己的记忆和声音。当你听到时，不要害怕，那是古城在对你说话。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论关于神迹还是关于远古的幽灵，都是阿拉特里历史人文肌理中不可分割的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们将冰冷的石头、古老的建筑，转化为充满情感与灵性的存在，让每一个造访者，在目睹奇观之余，更能感受到这座城市跳动了三千年的脉搏。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉特里不是罗马，没有帝国广场的浩瀚废墟；它不是佛罗伦萨，没有文艺复兴的炫目杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的力量是内向的、沉潜的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到这里，你是在阅读一本以巨石为纸、以三千年时光为墨写就的深邃之书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一块严丝合缝的多边形巨石，都是赫尔尼奇人技术与世界观的不朽宣言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪教皇宫殿的断壁，无声诉说着教权时代的波澜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小巷深处，仿佛还能听见格拉尔多·塞格雷这样的思想者，童年时奔跑的脚步声与日后在异国他乡对故乡的遥远怀想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂阿拉特里，便是读懂了一种文明的韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它被征服，却未被消化；它被改造，却从未失去本源。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从史前“独眼巨人”的谜团，到中世纪教皇的权杖，再到现代科学家的思考，层层叠叠的历史在这里凝结、共生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，在欧洲光芒四射的大都市之外，还有无数像阿拉特里这样的小城，它们本身就是一座露天的、活着的档案馆，保存着关于人类生存、信仰与求知最本真的样本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "触摸阿拉特里的城墙，你触摸的不是景点，而是时间的断层。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那一刻，你与三千年前的工匠、中世纪的修士、流亡的科学家，站在了同一块基石之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这便是小众深度旅行的终极魅力：在静谧中，与浩瀚的时光直接对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/isola-bella" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    美
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">美丽岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Isola Bella</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/teatro-olimpico-vicenza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维琴察奥林匹克剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Olimpico</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/norcia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺奇古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Norcia</p>
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
