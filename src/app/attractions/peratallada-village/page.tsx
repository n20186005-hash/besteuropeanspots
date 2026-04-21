import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩拉塔利亚达 Peratallada | 从岩石中生长出的千年石头村 - 最佳欧洲景点',
  description: '车子刚刚驶离平坦的葡萄园，地平线上就突兀地升起一圈高大的石墙和塔楼，像一头沉睡巨兽的脊背。这就是佩拉塔利亚达给你的第一眼印象——不是建在山上，而是从大地里“长”出来的。穿过那座跨越深邃沟壑的石桥，推开厚重的木制城门，时光仿佛“咔哒”一声被锁进了另一个齿轮。你的脚瞬间踏上的不是普通的路面，而是被无数双',
}

export default function PeratalladaVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '赫罗纳（巴塞罗那省）', href: '/destinations/europe' },
            { label: '佩拉塔利亚达', href: '/attractions/peratallada-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩拉塔利亚达・Peratallada・西班牙・赫罗纳（巴塞罗那省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚刚驶离平坦的葡萄园，地平线上就突兀地升起一圈高大的石墙和塔楼，像一头沉睡巨兽的脊背。这就是佩拉塔利亚达给你的第一眼印象——不是建在山上，而是从大地里“长”出来的。穿过那座跨越深邃沟壑的石桥，推开厚重的木制城门，时光仿佛“咔哒”一声被锁进了另一个齿轮。你的脚瞬间踏上的不是普通的路面，而是被无数双脚打磨了上千年的、裸露的砂岩基岩，坑洼不平，却光滑温润如玉。
空气中的味道很特别，是阳光烘烤过的干燥石头气味，混合着从庭院里逸出的迷迭香和天竺葵的清香。声音在这里也变得不同：你的脚步声在狭窄得几乎只容一人通过的巷道里，会发出清脆而孤独的回响，混合着远处某个庭院里隐约的杯碟碰撞声和加泰罗尼亚语的轻声交谈。抬起头，两边是高达数米、未经修饰的砂岩墙体，有些地方还能清晰看到古老凿痕的纹理。阳光只有在正午才能勉强挤进这些“石缝”，在墙上投下锐利而短暂的光斑。这里没有炫目的装饰，一切的震撼都源于一种原始的力量感——人类为了生存，竟然可以如此决绝地向岩石宣战，并最终与岩石融为一体。
你会发现，村子小得出奇，十分钟就能从这头走到那头。但正是这种紧凑，让它充满了生活的温度。周末的早晨，主广场上会摆起小小的市集，本地农人售卖着带着泥土的洋蓟和自酿的葡萄酒，老人们坐在城堡墙根的阴影里看报聊天。这座堡垒从未死去，它只是收起了獠牙，变成了守护日常生活的温暖巢穴。它的核心魅力，正在于这种极致的反差：无比坚硬的物理形态之下，包裹着的是一个依然柔软、跳动着的乡村心脏。你不是在参观一个博物馆，而是走进了石头内部，触摸着一段依然温热的、关于坚韧与家园的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子刚刚驶离平坦的葡萄园，地平线上就突兀地升起一圈高大的石墙和塔楼，像一头沉睡巨兽的脊背。这就是佩拉塔利亚达给你的第一眼印象——不是建在山上，而是从大地里“长”出来的。穿过那座跨越深邃沟壑的石桥，推开厚重的木制城门，时光仿佛“咔哒”一声被锁进了另一个齿轮。你的脚瞬间踏上的不是普通的路面，而是被无数双脚打磨了上千年的、裸露的砂岩基岩，坑洼不平，却光滑温润如玉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "空气中的味道很特别，是阳光烘烤过的干燥石头气味，混合着从庭院里逸出的迷迭香和天竺葵的清香。声音在这里也变得不同：你的脚步声在狭窄得几乎只容一人通过的巷道里，会发出清脆而孤独的回响，混合着远处某个庭院里隐约的杯碟碰撞声和加泰罗尼亚语的轻声交谈。抬起头，两边是高达数米、未经修饰的砂岩墙体，有些地方还能清晰看到古老凿痕的纹理。阳光只有在正午才能勉强挤进这些“石缝”，在墙上投下锐利而短暂的光斑。这里没有炫目的装饰，一切的震撼都源于一种原始的力量感——人类为了生存，竟然可以如此决绝地向岩石宣战，并最终与岩石融为一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你会发现，村子小得出奇，十分钟就能从这头走到那头。但正是这种紧凑，让它充满了生活的温度。周末的早晨，主广场上会摆起小小的市集，本地农人售卖着带着泥土的洋蓟和自酿的葡萄酒，老人们坐在城堡墙根的阴影里看报聊天。这座堡垒从未死去，它只是收起了獠牙，变成了守护日常生活的温暖巢穴。它的核心魅力，正在于这种极致的反差：无比坚硬的物理形态之下，包裹着的是一个依然柔软、跳动着的乡村心脏。你不是在参观一个博物馆，而是走进了石头内部，触摸着一段依然温热的、关于坚韧与家园的故事。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩拉塔利亚达`} />
                <InfoRow label="英文名称" value={`Peratallada`} />
                <InfoRow label="正式名称" value={`Peratallada`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`赫罗纳（巴塞罗那省）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`加泰罗尼亚乃至整个伊比利亚半岛中世纪防御工事的典范，一个直接从岩石母体中雕刻而生的生存堡垒。`} />
                <InfoRow label="建筑特色" value={`整个村庄的建筑、街道甚至防御工事，都直接在巨岩上开凿、雕刻和建造而成，护城河亦是人工在砂岩上深挖出的天堑。`} />
                <InfoRow label="建筑风格" value={`以粗犷坚实的罗曼风格为基础，融合了后来添加的哥特式优雅细节，形成了独特的“岩石上的罗曼-哥特”风貌。`} />
                <InfoRow label="文化价值" value={`一座“活着的”石头编年史，见证了从摩尔人边境防线到和平农业庄园的千年变迁，是加泰罗尼亚乡土建筑与防御智慧的巅峰体现。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄公共区域全天开放。核心历史建筑如城堡塔楼和部分博物馆的开放时间通常为周二至周日，上午10点至下午2点，下午4点至晚上7点（夏季可能延长）。冬季（11月至次年3月）开放时间缩短或仅周末开放。具体请以当年官方公告为准，部分小型展览馆可能需提前预约。`} />
              <InfoRow label="门票价格" value={`进入佩拉塔利亚达村庄本身是免费的。参观其核心历史建筑——佩拉塔利亚达城堡（现为私人所有，部分区域开放）通常需要支付约5-8欧元的门票，费用包含语音导览或简短讲解。学生、65岁以上老人及团体享有折扣。村庄内的小型地方历史博物馆门票约2-3欧元。建议准备现金，部分小景点可能只接受现金支付。`} />
              <InfoRow label="地址" value={`Plaza del Castell, 1, 17113 Peratallada, Girona, Spain`} />
              <InfoRow label="交通方式" value={`从巴塞罗那出发：最推荐的方式是租车自驾，沿AP-7高速公路向北行驶，在赫罗纳（Girona）附近转入内陆方向，跟随路标前往“Baix Empordà”地区，车程约1小时30分钟。乘坐公共交通较为周折：先从巴塞罗那Sants火车站乘火车到赫罗纳（约40-90分钟，车次频繁），然后在赫罗纳汽车站换乘前往La Bisbal d‘Empordà的 regional巴士（约30分钟），最后从La Bisbal打车前往佩拉塔利亚达（约10分钟，车费15-20欧元）。建议提前预约返程出租车。从赫罗纳机场直接租车或打车是最便捷的选择，车程约40分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解佩拉塔利亚达，你得先把时间拨回到公元9世纪甚至更早。那时，基督教王国与后倭马亚王朝的科尔多瓦哈里发国在这片土地上拉锯，边境线犬牙交错，充满血腥的袭击与报复。早期的定居者选中了这块巨大的砂岩礁石，绝非为了风景，而是最残酷的生存逻辑——这里地势略高，岩石本身坚硬到难以被普通工具攻破，简直是天赐的堡垒。最初的工程简单而粗暴：他们在岩石的边缘直接向下开凿，挖出了深达8米、宽约15米的巨大沟壑，这就是最初的护城河，取出的石头则垒成了第一道围墙。你看到的不是建造，而是“减法雕刻”，一个负空间的杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Peratallada”这个名字本身就泄露了天机。在加泰罗尼亚语里，“Pera tallada”直译就是“切割过的石头”。这个名字第一次出现在文献中是公元10世纪，但它的存在肯定早于那个年代。在11至12世纪，随着“再征服运动”的推进和封建制度的巩固，这里成了佩拉塔利亚达领主家族的核心要塞。这个家族并不显赫，但他们将这座天然堡垒的防御潜力发挥到了极致。我们现在看到的城堡主体和大部分罗曼风格的塔楼，就是这个时期在原有岩石基础上增筑的。他们继续向下、向深处挖掘，地窖、水窖、秘密通道……整个村庄的地下几乎被掏空成了一个错综复杂的迷宫，既用于储存物资，也用于在围城时转移和避难。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "14世纪是它的黄金时代，也是面貌定型的关键期。和平的间歇带来了财富，领主们开始在坚固的躯壳上添加文明的装饰。于是，你看到了哥特式的拱形窗户出现在厚重的罗曼墙壁上，城堡内部出现了带雕刻壁炉的大厅，教堂的门楣上也多了些精致的纹章雕刻。护城河上架起了更坚固的石桥，城门被加固并配备了复杂的闸门系统。它从一个单纯的军事哨所，转变为一个具有行政和司法功能的领主庄园中心，统治着周围广阔的农田与牧场。石头见证了从刀剑向犁铧的微妙转变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，石头也无法完全阻挡时代的洪流。随着火药的广泛应用和战争形态的改变，这种依赖天然屏障的城堡逐渐失去了军事意义。佩拉塔利亚达家族后来与更显赫的克鲁伊勒斯家族联姻，领地被整合，城堡的政治重要性下降。它慢慢沉寂下来，成为一个安静的农业村镇。幸运的是，正是这种“被遗忘”，让它避免了大规模的现代化改造，奇迹般地保存了中世纪的完整肌理。那些为了防御而建造的、不便于生活的狭窄街道和昏暗空间，在现代成了最珍贵的遗产。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到20世纪中叶，当人们重新认识到其无与伦比的历史与建筑价值时，佩拉塔利亚达才再次回到聚光灯下。它被宣布为西班牙国家历史艺术遗产。聪明的修复者们没有进行粗暴的翻新，而是遵循“修旧如旧”的原则，小心翼翼地清理、加固，让岩石自己说话。今天，你抚摸的每一道凿痕，踩过的每一块凹陷的岩石路面，都不是仿古道具，而是真实的时间层理。它没有沦为冰冷的标本，村民们依然住在祖先雕刻出的房子里，让炊烟继续从岩石的缝隙中升起，完成了历史与当下最动人的共生。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要完整感受佩拉塔利亚达的魔力，建议安排至少大半天的时间。最佳抵达时间是上午9点至10点之间，此时旅行团大军尚未抵达，晨光柔和地洒在砂岩上，呈现出温暖的金黄色，村庄刚刚苏醒，生活气息最浓。整体游览节奏宜慢不宜快，核心在于“沉浸”而非“打卡”。建议用2-3小时细致探索村庄内部，再用1小时在护城河外围漫步，从不同角度欣赏这座岩石堡垒的雄姿。下午可以在主广场的咖啡馆发呆，看光影移动。这样的安排能让你充分体验从外部震撼到内部细节，再到整体氛围感受的完整层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适防滑的鞋子，那些古老的岩石路面凹凸不平，雨天会非常湿滑。
村庄内部 signage 不多，小巷错综复杂，看似死胡同的地方可能有个拱门通往另一片天地，迷路是体验的一部分，但可随时用手机地图定位主广场方向。
周末和夏季午后是游客高峰期，如果想享受宁静，尽量安排在工作日早晨或傍晚时分游览。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主城门（Portal de la Verge）进入，第一件事是停下脚步，用手触摸城门两侧那巨大而粗糙的砂岩墙体，感受岩石冰凉的体温和坚硬的质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往村庄中心的佩拉塔利亚达城堡，不要急着进去，先绕到它的侧面和后方，观察建筑是如何与原始的岩石地基严丝合缝地生长在一起的。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进城堡内部（如果开放），重点观看那宏伟的哥特式大厅和古老的厨房，想象中世纪领主们在这岩石的腹腔中宴饮的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡出来，放任自己在如迷宫般的狭窄小巷（如Carrer d‘en Vas）里迷一次路，注意脚下直接裸露的、被磨得发亮的岩层路面和墙根处古老的凿痕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找圣埃斯特夫教堂，这座小巧的罗曼式教堂有一个简单的玫瑰窗，内部异常朴素，静坐片刻能听到自己心跳在石壁间的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走到村庄的西北角，那里有一段城墙步道，可以让你平视村庄的屋顶和塔楼，感受其作为防御整体的紧凑感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午时分，走下堡垒，绕着巨大的护城河走一圈，从外部仰视村庄，你会发现那些民居的底部直接就是垂直的岩壁，视觉效果无比震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，回到主广场（Plaza del Castell），找一家露天咖啡馆坐下，点一杯本地Empordà产区的葡萄酒，看夕阳将所有的石头染成蜜糖色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河外侧仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前一小时，从村庄西侧的农田小径往回看，可以拍到完整的村庄轮廓倒映在护城河静水中的画面，岩石与倒影对称，极具力量感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡塔楼下的巷道`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，找到一条南北走向的狭窄巷道（如Carrer del Fossar），阳光会像一把利刃劈入巷中，在两侧岩壁上形成强烈的明暗对比，拍出极具戏剧性的光影走廊。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主广场的日常生活`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，光线变得柔和，坐在广场咖啡馆的角落，用长焦镜头捕捉当地居民在城堡墙根下聊天、孩童奔跑的瞬间，人物与巨大石墙的对比充满故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`屋顶与天空的对话`}</h4>
                  <p className="text-sm text-gray-700">{`从村庄西北角的城墙步道上，用广角镜头贴近拍摄那些层层叠叠的瓦片屋顶、烟囱与远处塔楼构成的几何图形，以纯净的蓝天为背景，画面简洁而永恒。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`夜晚的魔法时刻`}</h4>
                  <p className="text-sm text-gray-700">{`日落后天空呈深蓝色时，村庄的景观灯亮起，站在石桥入口处，用三脚架长曝光拍摄，温暖的灯光从石窟般的窗户中透出，与冷色调的天空形成绝美对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重居民隐私，拍摄民居内部或庭院前最好先征得同意，许多美丽的门廊和庭院属于私人住宅。`}</li>
                <li>• {`建议携带一支广角镜头（拍摄狭窄空间和宏大场景）和一支大光圈定焦镜头（在昏暗巷道和室内捕捉细节与氛围）。`}</li>
                <li>• {`砂岩在侧光下纹理最显丰富，尽量利用早晨和傍晚的斜射光来表现石头的质感与岁月的痕迹。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`岩石中的家`}</h4>
                  <p className="text-sm text-blue-800">{`预订一间由古老石屋改造的民宿，房间的墙壁可能就是原始的砂岩，冬暖夏凉，晚上你能听到石头呼吸般的宁静，主人通常会奉上自制的本地早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`领主庄园体验`}</h4>
                  <p className="text-sm text-green-800">{`村庄附近有几处由中世纪庄园（masia）改造的精品酒店，被橄榄园和橡树林环绕，拥有游泳池和开阔的视野，让你在享受现代舒适的同时感受乡村贵族的宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`赫罗纳海岸结合`}</h4>
                  <p className="text-sm text-yellow-800">{`如果你渴望更多样的体验，可以选择住在十几公里外的海滨小镇如 Begur 或 Palafrugell，那里有迷人的海岸线和海鲜餐厅，白天探访石头村，晚上回到地中海边听涛声。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`巴塞罗那便捷基营`}</h4>
                  <p className="text-sm text-purple-800">{`若行程紧张，以巴塞罗那为基地进行一日游是完全可行的，清晨出发，傍晚返回，还能享受都市的夜生活，适合时间有限但不想错过精华的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村庄内的住宿数量非常有限，且极其抢手，尤其是在春秋旺季和周末，务必提前数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你选择住在村庄内，请做好心理准备，这里夜晚极其安静，几乎没有夜生活，是真正“与世隔绝”的体验。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "周边乡村地区的庄园酒店通常提供免费停车场，而村庄内部几乎无法停车，自驾旅客需要提前与住宿方确认停车安排。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开佩拉塔利亚达时，我的指尖仿佛还残留着那种粗糙而坚实的触感。它带给我的震撼，并非来自于某件孤立的艺术品或某个辉煌的大厅，而是一种弥漫性的、无处不在的“存在感”。这里的一切——街道、房屋、广场、城堡——都源于同一块岩石，这种本源上的统一，产生了一种难以置信的和谐与力量。它让你真切地体会到，人类文明最初是如何从自然母体中艰难分娩，又如何与自然缔结下永恒的契约。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求速度、迷恋新奇的世界上，佩拉塔利亚达像一块固执的磐石，提醒着我们一些更本质的东西：关于家园的坚韧，关于守护的耐心，关于如何用一代又一代人的生命，去雕刻一种名为“永恒”的可能性。它不是供你匆匆掠过的风景明信片，而是一个需要你用手去触摸、用脚步去丈量、用心去沉浸的“场域”。每一位热爱深度游的旅人都该来这里，不仅仅是为了看一座中世纪的村庄，更是为了完成一次与时间和岩石的对话。在这里，你会明白，最深刻的旅行，不是去了多远的地方，而是能沉入多厚的时光。佩拉塔利亚达，就是一段你可以走进去的、活着的时光。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/plaza-mayor-de-chinchon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    钦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">钦琼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chinchón</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/plasencia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普拉森西亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Plasencia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/potes-cantabria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波特斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Potes</p>
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
