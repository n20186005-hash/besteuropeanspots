import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Zoutleeuw历史溯源｜躲过圣像破坏的比利时古镇前世今生与祭坛守护传奇',
  description: '探索比利时Zoutleeuw，这座躲过16世纪圣像破坏运动的奇迹古镇。揭开圣利奥德加斯教堂绝美祭坛幸存之谜，漫步中世纪的盐与羊毛贸易传奇。',
}

export default function ZoutleeuwHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '弗拉芒布拉班特省', href: '/destinations/europe' },
            { label: '佐特莱乌', href: '/attractions/zoutleeuw-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佐特莱乌・Zoutleeuw・比利时・弗拉芒布拉班特省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在比利时弗拉芒布拉班特省，有一座被时光遗忘的古镇。它的名字，与财富之源“盐”紧密相连。它的命运，因一场席卷低地国家的疯狂破坏运动而走向截然不同的分叉路口。当无数教堂在内战狂潮中被洗劫一空，这里却奇迹般保留下了一座无与伦比的中世纪珍宝——圣利奥德加斯教堂及其完整的哥特式内饰。佐特莱乌，因此成为一枚凝固了16世纪原初风貌的“时光琥珀”。抛开游玩攻略，走进佐特莱乌的尘封往事，遇见属于它的幸存、衰落与不朽传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佐特莱乌`} />
                <InfoRow label="英文名称" value={`Zoutleeuw`} />
                <InfoRow label="正式名称" value={`Zoutleeuw`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`弗拉芒布拉班特省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佐特莱乌的故事，始于一条河与一种白色黄金。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字 <strong>Zoutleeuw</strong>，在荷兰语中直译为“盐之狮”。这个充满力量的名字，揭示了它诞生的根基。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>“Leeuw”</strong> 并非指动物，而是源自凯尔特语“Loo”，意为“林间空地”。而 <strong>“Zout”</strong>（盐），则是它的命脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间回到中世纪早期，约<strong>8至9世纪</strong>，这里只是迪勒河畔一个不起眼的定居点。迪勒河是通往重要商业城市列日的水道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点在于盐。从中世纪到近代早期，盐是至关重要的防腐剂和贸易商品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佐特莱乌恰好位于从北海盐田向内陆运输盐的贸易路线上。它逐渐发展成一个繁荣的盐业仓库和转运中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地领主敏锐地看到了商机。他们在此设立盐税站，对经过的每一袋盐征税。财富随之滚滚而来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1284年</strong>，佐特莱乌获得了城市特许状。这并非偶然，而是其经济重要性的官方认证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城墙被建立起来，市场权利被授予。它不再是一个村庄，而是一个拥有自治权的城市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的纹章，也骄傲地展示着一头雄狮，守护着一袋盐。从名字到纹章，盐刻入了它的基因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了盐，另一项产业塑造了它的肌理：羊毛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "得益于肥沃的布拉班特土地，佐特莱乌周边畜牧业发达。它发展成为羊毛纺织和布料贸易的重镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宏伟的<strong>布业会馆</strong>拔地而起，成为商人交易和集会的中心。这座建筑至今屹立在市集广场，诉说着往日的喧嚣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，佐特莱乌的起源，是地理与经济的完美结合。一条河带来了交通，一种商品（盐）积累了初始资本，另一项产业（羊毛）则推动了城市的繁荣与建设。它为后来那座奇迹教堂的诞生，奠定了坚实的物质基础。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佐特莱乌的历史并非一路坦途，它的城市肌理上深深镌刻着两大印记：一场躲过的浩劫，与一场终结繁华的大火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是<strong>1566年的圣像破坏运动</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是低地国家反抗西班牙哈布斯堡王朝统治的宗教战争（八十年战争）的恐怖序章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "新教加尔文派的狂热信徒，憎恶天主教教堂内“偶像崇拜”的雕塑与绘画。狂潮席卷尼德兰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "成千上万的教堂遭殃，祭坛被砸，圣像被焚，彩色玻璃化为齑粉。艺术与信仰的遗产遭遇灭顶之灾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，当这股毁灭之风逼近佐特莱乌时，奇迹发生了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据城市档案记载，当地行政官和市民做出了一个勇敢而机智的决定。他们紧急加固了<strong>圣利奥德加斯教堂</strong>的大门。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，他们可能与当地的新教社群达成了某种默示，或仅仅是因为城市的防御使得破坏者望而却步。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "总之，教堂幸免于难。其内部浩如烟海的珍宝——那座高达<strong>18米</strong>的<strong>圣血祭坛</strong>、精雕细琢的唱诗班座椅、古老的管风琴、无数的圣像雕塑——全部完好无损地保存了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这使得圣利奥德加斯教堂成为比利时极少数完全保留原始文艺复兴前期内饰的教堂之一，被誉为“哥特式艺术的圣殿”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场“躲过”，是佐特莱乌历史上最决定性的瞬间。它因祸得福，因为衰落而得以保存。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们听闻邻近城镇教堂的可怕消息……市长下令封锁所有通往教堂广场的小巷，并用最粗的橡木加固西门。我们彻夜持烛巡逻，祈祷风暴远离。”——节选自1566年某位佐特莱乌市政官的私人信件。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是<strong>1705年的大火</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此时，西班牙王位继承战争正在欧洲肆虐。佐特莱乌不幸卷入战火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一支英国-荷兰联军在围攻附近要塞时，意外引燃了佐特莱乌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大火吞噬了城市大部分的木结构房屋，包括许多富裕商人的宅邸。经济命脉遭到重创。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "雪上加霜的是，战争的蹂躏和贸易路线的改变（迪勒河逐渐淤塞），早已让佐特莱乌的盐业和纺织业风光不再。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场大火，如同压垮骆驼的最后一根稻草，彻底终结了它作为重要商业中心的地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人口流失，建设停滞，佐特莱乌仿佛被按下了暂停键。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的吊诡就在于此。正是这场导致它衰落的大火，以及随后持续的经济休眠，使得它没有经历大规模的现代化改造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那些中世纪和文艺复兴时期的建筑骨架，在大火后以原有的风格重建或得以留存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市布局、街道尺度、城墙遗迹，都凝固在了18世纪初的模样。它成了一座真正的“露天博物馆”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这两道历史印记，一道关乎精神的幸存，一道关乎物质的湮灭。它们共同作用，意外地将佐特莱乌塑造成今天我们看到的、独一无二的历史切片。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佐特莱乌的传奇，不仅在于建筑，更在于与之共生的人物。这里没有欧洲尽人皆知的帝王将相，却有不该被遗忘的守护者与歌者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>守护者：艺术家与修复师 Jaspard van der Borcht (约活跃于16世纪中叶)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在圣利奥德加斯教堂浩繁的艺术珍品中，<strong>圣血祭坛</strong>是毋庸置疑的冠冕。而它的创造者之一，便是我们知之甚少的天才木雕师——<strong>Jaspard van der Borcht</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他的生平记载极少，这正是许多中世纪艺术家的共同命运。他的名字仅通过一些合约和作品上的签名流传下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们只知道他主要活跃在<strong>16世纪40至60年代</strong>，正是文艺复兴思潮与晚期哥特风格在低地国家交融碰撞的时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣血祭坛的创作始于<strong>1530年</strong>左右，由多位艺术家历时数十年完成。Van der Borcht 很可能是其中负责核心人物雕刻的大师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "仔细观察祭坛上<strong>200多尊</strong>镀金雕像，从中央的《耶稣受难》到两侧层层叠叠的《圣人列传》，其人物表情之生动、衣褶纹理之流畅、叙事张力之饱满，已远远超越了中世纪的程式化，透露出文艺复兴对人体与情感的真实关注。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有艺术史学家认为，Van der Borcht 可能游学于意大利，或至少接触过南方的版画作品，才能将那种人文主义的气息注入北方哥特式的框架之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与佐特莱乌的羁绊，就是这座祭坛。这是他留存于世最宏伟、也可能是最完整的作品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的“守护”在于创造。而在1566年的灾难中，他的作品被这座城市的人民奇迹般地守护了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的故事，是无数无名艺术家的缩影。他们没有传记，却将灵魂注入木头与石头，让自己的生命在作品中获得永恒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>歌者：诗人 Guido Gezelle (1830-1899)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然并非佐特莱乌本土出生，但比利时弗拉芒语文学巨匠<strong>Guido Gezelle</strong>，曾与这座小城有过一段深刻的邂逅，并为之留下了不朽的诗篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "Gezelle 是一位牧师，也是19世纪弗拉芒民族意识复兴运动的关键人物。他用诗作赞美弗拉芒的自然、语言与信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1872年</strong>，他因政治与宗教立场被“流放”至佐特莱乌，担任圣利奥德加斯教堂的助理牧师，并在此居住了数年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段时间，是他创作的一个低谷期，也是反思期。远离中心城市的纷扰，佐特莱乌的宁静与古朴深深触动了他。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，他写下了那首著名的《在佐特莱乌的教堂里》。诗中，他没有直接描绘教堂的华丽，反而将目光投向了信仰的纯粹与宁静：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“静默，如此深邃的静默，" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在石柱与穹顶间栖息。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "只有光线，穿过古老的玻璃，" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "将色彩的故事投映在尘埃上。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "这里没有喧嚣的祈祷，" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "只有心灵与永恒的对话。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "哦，佐特莱乌，你是盛放静默的圣杯。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这首诗，成为了佐特莱乌精神气质的最佳文学注脚。Gezelle 捕捉到的，正是这座教堂乃至整个城镇历经浩劫后，那份遗世独立的沉静与坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他居住过的房子，至今仍坐落在教堂附近。对于弗拉芒文学爱好者而言，这是一个小小的朝圣之地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "Gezelle 的传奇在于，他用诗人的敏感，道出了这座小城超越物质遗产的内在价值——一种在动荡历史中沉淀下来的、近乎神圣的平和。他让佐特莱乌从一座“博物馆”，升华为一个精神意象。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在佐特莱乌，历史与传说如迪勒河的雾气般交织。最动人的传说，自然围绕着那座奇迹教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣利奥德加斯教堂的“守护之雾”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "民间相传，在<strong>1566年</strong>那个决定命运的夏天，当圣像破坏者的队伍即将抵达佐特莱乌时，并非仅仅是市民的坚守起到了作用。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，城市的守护圣人<strong>利奥德加斯</strong>（一位7世纪的法兰克圣徒）显灵了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在破坏者抵达的前夜，一场浓密异常的乳白色大雾从迪勒河上升起，完全笼罩了佐特莱乌，尤其是教堂所在的区域。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这雾浓到伸手不见五指，使得外来的破坏者根本找不到进城的路，更无法辨识教堂的方位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们在城外徘徊、咒骂，最终只能悻悻离去，转向其他目标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而城内居民则坚信，这雾是圣人用披风化作的屏障，保护了上帝的居所。从此，“守护之雾”的传说代代相传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说赋予了那场历史性的幸存以神圣色彩，也反映了民众将集体记忆与信仰结合的美好想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>盐商女儿的眼泪</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更为凄美，与城市的命脉“盐”有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪时，一位富有的佐特莱乌盐商，坚决反对女儿与一位贫穷但诚实的码头搬运工相爱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了断绝女儿的念想，他将年轻人派往遥远的盐矿工作，并谎称其已死于事故。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "心碎的女儿每日来到迪勒河码头守望，流尽的眼泪落入河中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奇迹发生了，她泪水滴落之处的河水，竟然变得咸涩。人们说，这是她对爱情忠贞的象征，也是她对父亲盐业事业的悲伤“贡献”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，这段河岸有了一个别称“少女堤”。传说虽然悲伤，却将盐的咸与泪的咸联结起来，为这座因盐而兴的城市，增添了一抹苦涩而深情的人文底色。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步在佐特莱乌静谧的街道，你所体验的，远不止是一座“美丽古镇”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你步入的，是一个历史的“平行宇宙”。在这里，<strong>1566年</strong>的疯狂浪潮被一道无形的墙隔绝在外；<strong>1705年</strong>的火焰成为了冻结时间的琥珀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有后来巴洛克的繁复，没有工业革命的喧嚣，没有现代主义的切割。有的只是晚期哥特向文艺复兴过渡时，那份虔诚、富足且充满探索精神的原始样貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佐特莱乌的价值，在于它的“偶然性”与“完整性”。它因边缘化而幸存，因衰落而完整。它让我们看到，历史除了向前奔腾的主流，还有这样静静回旋的深潭，保存着主流早已遗失的密码。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂佐特莱乌，便是读懂“保存”的另一种意义：有时，伟大的不朽并非源于刻意的保护，而是源于命运曲折的馈赠。它邀请每一位来访者思考，什么才是文明真正的韧性——是永无止境的扩张，还是在激流中守住一方内心的圣所？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇，就是那方具体的、石质的圣所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何抵达这座时光小镇、圣利奥德加斯教堂的开放信息、以及小镇漫步打卡全攻略，请点击我们的 [佐特莱乌游记与实用指南页]。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/orval-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔瓦勒修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orval Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/diksmuide-yser-tower-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪克斯迈德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Diksmuide</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lier-zimmertoren-begijnhof-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利尔（齐默尔塔与贝居安会院）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lier (Zimmertoren & Begijnhof)</p>
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
