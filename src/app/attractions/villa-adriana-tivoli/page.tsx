import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒂沃利哈德良别墅 Villa Adriana｜走进古罗马皇帝的“世界微缩盆景” - 最佳欧洲景点',
  description: '说真的，第一眼看到哈德良别墅，你可能不会立刻感受到宫殿的“华丽”。它没有高耸入云的穹顶，也没有金光闪闪的马赛克墙。穿过现代感十足的游客中心，迎面而来的是一片广阔的、在意大利炽热阳光下显得有些苍茫的旷野。脚下是疯长的野草和开着小花的匍匐植物，远处是断壁残垣的轮廓，巨大的石柱或横卧在地，或孤独地刺向湛蓝',
}

export default function VillaAdrianaTivoliPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '蒂沃利哈德良别墅', href: '/attractions/villa-adriana-tivoli' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒂沃利哈德良别墅・Villa Adriana・意大利・蒂沃利`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说真的，第一眼看到哈德良别墅，你可能不会立刻感受到宫殿的“华丽”。它没有高耸入云的穹顶，也没有金光闪闪的马赛克墙。穿过现代感十足的游客中心，迎面而来的是一片广阔的、在意大利炽热阳光下显得有些苍茫的旷野。脚下是疯长的野草和开着小花的匍匐植物，远处是断壁残垣的轮廓，巨大的石柱或横卧在地，或孤独地刺向湛蓝的天空。空气中混合着干燥的尘土味、野生迷迭香的清冽香气，以及从附近橄榄树林飘来的、略带苦涩的植物气息。耳朵里很静，只有永不停歇的蝉鸣，和偶尔从阿尔班山方向吹来的风，拂过松枝的沙沙声。这里不像一个被精心维护的“景点”，更像一个被时间轻轻搁置的、巨大的梦境现场。
但当你开始迈开脚步，在这个占地超过120公顷的遗址里随意漫步时，魔力就渐渐浮现了。你会发现，这里没有一条笔直的中轴线强迫你前进，所有的小径都邀请你去探索。当地人——无论是蒂沃利镇的居民，还是从罗马来的艺术生——把这里当成一个超级公园。你会看到情侣在荫凉的古柱下低声细语，老人带着狗在曾经的皇家步道上散步，写生的学生对着一片废墟一坐就是整个下午。它早已褪去了帝国的威严，融入了拉齐奥丘陵缓慢的日常生活节奏里，成为风景本身的一部分。
而它最打动人心的地方，正是这种“破碎中的完整”。你眼前的每一块石头，都曾经是哈德良皇帝庞大想象力的一部分。这位痴迷于建筑和旅行的君主，把他从帝国最遥远边疆——从不列颠的阴郁堡垒到埃及的炙热神庙——所见到的最触动他的景致，都“复刻”到了这个离罗马不远的山谷里。他在这里创造了一个微缩的世界模型。于是，你在意大利的阳光下，会突然走到一个名叫“卡诺普”的狭长水池边，池边矗立着埃及风格的女神柱和鳄鱼雕塑，那一刻，尼罗河的风仿佛真的穿越时空吹到了脸上。这种时空错位的震撼，是任何修复完好的宫殿都无法给予的。
最终，你会明白，这里不是一个用来“看”的宫殿，而是一个用来“感受”的场域。它邀请你用自己的双脚去丈量，用自己的想象去填补那些缺失的屋顶和墙壁。当你的手指触摸过那些被两千年来无数人抚摸得温润光滑的大理石柱础，当你的影子与哈德良皇帝曾投下的影子重叠在同一块石板上，一种奇妙的、与历史直接对话的通感便会油然而生。这不是参观，这是一次在时间碎片中的沉浸式漫步。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说真的，第一眼看到哈德良别墅，你可能不会立刻感受到宫殿的“华丽”。它没有高耸入云的穹顶，也没有金光闪闪的马赛克墙。穿过现代感十足的游客中心，迎面而来的是一片广阔的、在意大利炽热阳光下显得有些苍茫的旷野。脚下是疯长的野草和开着小花的匍匐植物，远处是断壁残垣的轮廓，巨大的石柱或横卧在地，或孤独地刺向湛蓝的天空。空气中混合着干燥的尘土味、野生迷迭香的清冽香气，以及从附近橄榄树林飘来的、略带苦涩的植物气息。耳朵里很静，只有永不停歇的蝉鸣，和偶尔从阿尔班山方向吹来的风，拂过松枝的沙沙声。这里不像一个被精心维护的“景点”，更像一个被时间轻轻搁置的、巨大的梦境现场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但当你开始迈开脚步，在这个占地超过120公顷的遗址里随意漫步时，魔力就渐渐浮现了。你会发现，这里没有一条笔直的中轴线强迫你前进，所有的小径都邀请你去探索。当地人——无论是蒂沃利镇的居民，还是从罗马来的艺术生——把这里当成一个超级公园。你会看到情侣在荫凉的古柱下低声细语，老人带着狗在曾经的皇家步道上散步，写生的学生对着一片废墟一坐就是整个下午。它早已褪去了帝国的威严，融入了拉齐奥丘陵缓慢的日常生活节奏里，成为风景本身的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动人心的地方，正是这种“破碎中的完整”。你眼前的每一块石头，都曾经是哈德良皇帝庞大想象力的一部分。这位痴迷于建筑和旅行的君主，把他从帝国最遥远边疆——从不列颠的阴郁堡垒到埃及的炙热神庙——所见到的最触动他的景致，都“复刻”到了这个离罗马不远的山谷里。他在这里创造了一个微缩的世界模型。于是，你在意大利的阳光下，会突然走到一个名叫“卡诺普”的狭长水池边，池边矗立着埃及风格的女神柱和鳄鱼雕塑，那一刻，尼罗河的风仿佛真的穿越时空吹到了脸上。这种时空错位的震撼，是任何修复完好的宫殿都无法给予的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最终，你会明白，这里不是一个用来“看”的宫殿，而是一个用来“感受”的场域。它邀请你用自己的双脚去丈量，用自己的想象去填补那些缺失的屋顶和墙壁。当你的手指触摸过那些被两千年来无数人抚摸得温润光滑的大理石柱础，当你的影子与哈德良皇帝曾投下的影子重叠在同一块石板上，一种奇妙的、与历史直接对话的通感便会油然而生。这不是参观，这是一次在时间碎片中的沉浸式漫步。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒂沃利哈德良别墅`} />
                <InfoRow label="英文名称" value={`Villa Adriana`} />
                <InfoRow label="正式名称" value={`哈德良别墅`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`蒂沃利`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`古罗马“五贤帝”之一哈德良皇帝（公元117-138年在位）倾注心血打造的私人理想国与行政行宫，是罗马帝国鼎盛时期建筑与园林艺术的巅峰之作。`} />
                <InfoRow label="建筑特色" value={`一座规模极其庞大、布局自由的“建筑集合体”，没有中轴对称，而是将来自帝国各地的建筑风格（希腊、埃及）与自然景观天衣无缝地融为一体。`} />
                <InfoRow label="建筑风格" value={`古罗马帝国风格为核心，并创造性融合了古希腊、古埃及以及当时帝国各行省的建筑元素，形成独特的“哈德良式”折衷主义风格。`} />
                <InfoRow label="文化价值" value={`它不仅是奢华的行宫，更是哈德良皇帝个人哲学、旅行见闻和世界观的物质化呈现，堪称一座“用石头写成的自传”和古代世界的“环球建筑博览会”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但开放时间随季节变化显著。夏季（约4月至9月）通常为上午9:00至晚上7:30，最后入场时间为下午6:30；冬季（约10月至3月）缩短为上午9:00至下午5:00，最后入场时间为下午3:30。请注意，每周一固定闭馆（除非遇到特殊公共假日），每年1月1日和12月25日也闭馆。具体时间常有微调，强烈建议行前在官网或当地旅游信息中心确认。`} />
              <InfoRow label="门票价格" value={`全价票为10欧元。欧盟国家18至25岁公民享有2欧元的优惠票价。18岁以下及65岁以上的欧盟公民免费入场。每月第一个周日对所有游客免费开放。门票可在遗址入口处购买，也建议通过官方合作网站在旅游旺季提前预订，以避免排队。`} />
              <InfoRow label="地址" value={`Largo Marguerite Yourcenar, 1, 00010 Tivoli RM, Italy`} />
              <InfoRow label="交通方式" value={`从罗马出发是最佳选择。首先，乘坐地铁B线到Ponte Mammolo站下车。出站后，在旁边的长途汽车站（COTRAL巴士站）搭乘前往蒂沃利（Tivoli）方向的巴士，车程大约50分钟至1小时。告诉司机你要在“Villa Adriana”下车，司机会在最近的路口提醒你。从下车点步行约5-10分钟即可到达景区售票处。巴士班次频繁，但周末和节假日可能减少。也可以从罗马Tiburtina火车站乘火车到蒂沃利站，但下车后需转乘当地巴士或出租车才能到达遗址，整体不如巴士直达方便。自驾则需注意，遗址周边停车场车位有限。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解这座别墅，你必须先了解它的主人——普布利乌斯·埃利乌斯·哈德良。公元2世纪，他成为罗马帝国的掌舵者。与我们想象中深居简出的皇帝不同，哈德良是个“永恒的旅人”。他在位21年，有超过12年时间都在帝国广阔的疆域内巡视。他去过不列颠的雨雾中，下令修建了那座著名的“哈德良长城”；他深入小亚细亚和希腊，为雅典卫城添上了新的神庙；他航行于尼罗河上，为溺水的心爱少年安提诺乌斯悲痛不已。旅行对他而言，不仅是治理，更是汲取灵感的源泉。他深深迷恋希腊文化，自称“Philhellene”（亲希腊者）。于是，当他需要一个远离罗马元老院喧嚣、可以静心思考并处理政务的地方时，他选择了故乡附近蒂沃利的这片广阔山谷。这里不是简单的度假别墅，而是他为自己建造的、一个可以随时“神游”整个帝国的精神家园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`别墅的建造始于公元118年左右，几乎贯穿了他的整个统治时期。它没有总建筑师，哈德良本人就是最核心的设计师。历史学家形容他“精通所有艺术”，常常亲自绘制草图。据说，当建筑师们对他复杂的设计表示怀疑时，他会请他们去参观一个根据他图纸预先建造的石膏模型，以此证明其可行性。整个工程动员了帝国最顶尖的工匠和无数劳动力。建筑材料极为奢华：来自埃及的红色花岗岩、希腊彭特利库斯山的白色大理石、北非的黄色石灰华……它们通过帝国的物流网络被源源不断运到这里。别墅的供水系统更是工程奇迹，通过复杂的地下管道和引水渠，将远处山泉引入，供给数十个喷泉、水池和宏伟的浴场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`别墅的核心区域并非居住宫殿，而是一系列充满象征意义的“场景再现”。最著名的莫过于“卡诺普运河”。卡诺普是埃及亚历山大港附近的一个城市，以狂欢和祭祀酒神而闻名。哈德良或许在那里有过难忘的经历，或许是为了纪念与他同游埃及却英年早逝的安提诺乌斯，他下令开挖了一条长达119米、模仿尼罗河支流的长形水池。池畔环绕着希腊风格的柱廊和雕像，尽头则是一座塞拉皮斯（希腊-埃及神祇）神庙的复制品，两侧还立着埃及的鳄鱼和河马雕塑。在这个意大利山谷中，他再造了一个充满异域情调和哲学冥想的埃及角落。另一个杰作是“海洋剧院”，一个被圆形水道环绕的孤岛别墅，只有通过可移动的木桥才能进入。这无疑是哈德良寻求宁静与私密的终极体现，一个只属于皇帝的“沉思之岛”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`哈德良皇帝于公元138年在这里去世。在他之后，别墅虽然偶有其他皇帝使用，但昔日的辉煌已难以为继。随着帝国衰落，维护如此庞大的建筑群变得不可能。它逐渐被废弃，昂贵的建筑材料被拆走，用于修建中世纪蒂沃利的教堂和堡垒（你甚至能在镇上的一些教堂里认出来自别墅的大理石柱）。大地震加速了它的坍塌，泥土和植被慢慢掩埋了废墟。在漫长的中世纪，它几乎被遗忘，只在文献中被零星提及，成为了当地人口中“有着无数古老墙壁”的神秘之地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的重生始于文艺复兴。15世纪，人文主义者和艺术家们开始重新“发现”古典世界。教廷的贵族们（比如著名的博尔盖塞家族）来到这里，像寻宝一样挖掘雕像和浮雕，用以装饰他们在罗马的宫殿和花园。这种挖掘虽然带有掠夺性质，却重新将哈德良别墅推入了欧洲文化的视野。系统的考古研究则要到18、19世纪才开始。今天，我们看到的遗址格局，是长达数个世纪考古工作的结果。尽管无数珍宝已散落在世界各地的博物馆（比如卡诺普运河的许多雕像现存于罗马卡比托利欧博物馆），但遗址本身所保留的宏大空间感和皇帝那跨越文化的想象力，依然震撼着每一个来访者。它是一片需要你用想象力参与共建的废墟，而这，或许正是哈德良留给后世最独特的礼物。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正领略哈德良别墅的精华，你需要至少预留4到5小时的悠闲时光。强烈建议在开园后不久（比如早上9点半）抵达，这时光线柔和，游客稀少，你能独享废墟的宁静与清晨的鸟鸣。游览的核心逻辑不是“打卡”，而是模拟一次在皇帝“世界微缩盆景”中的漫步。路线设计上，从最具私密性的“海洋剧院”开始，逐渐走向宏伟的公共区域，最后在承载着最多故事与异国风情的“卡诺普运河”区域结束高潮，最后以小博物馆的实物展品收尾，让想象落地。整个节奏应该是缓慢的，随时可以停下，坐在某块石头上发呆、素描，或者只是感受风吹过废墟的声音。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、适合长时间在砂石和草地上行走的鞋，高跟鞋或薄底鞋在这里是“酷刑”。园区内遮阴处很少，夏季一定要戴帽子、涂防晒霜并携带足量饮用水。遗址范围极大，标识系统虽然完善，但岔路多，建议在入口处领取一份免费地图或用手机存好电子地图，以防在“迷宫”中浪费体力。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入后，先别急着深入，向右转个弯，去探访那座被圆形水道环绕、宛如孤岛的秘密花园“海洋剧院”，想象哈德良在此独自阅读或冥想的清晨。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着缓坡向上漫步，抵达别墅的行政与礼仪核心“黄金广场”，站在宽阔的庭院中央，感受四周残缺却依然宏伟的多立克柱廊所框出的天空。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过一片橄榄树林，眼前豁然开朗，你会看到狭长如镜的“卡诺普运河”，沿着水边漫步，仔细观察两侧那些来自埃及的雕像复制品和尽头的塞拉皮斯神庙半圆形穹顶遗迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从运河区向北，走进庞大复杂的“大浴场”和“小浴场”遗址，钻进保存尚好的拱顶地下通道，感受罗马工程师如何用火炕系统为地板供暖。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开浴场，去探寻“希腊图书馆”与“拉丁图书馆”的遗迹，在仅存的几根爱奥尼柱式石柱间，仿佛能闻到当年羊皮纸卷和蜡板的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行至地势较高的“多利安柱廊”，从这里可以收获一个俯瞰卡诺普运河和部分遗址的广阔视角，是整理思绪和拍照的绝佳点位。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，一定要留时间给遗址内的小型博物馆，那里陈列着在此出土的马赛克碎片、雕塑残件和日常器物，为你刚才所有的想象提供具体的实物注解。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果意犹未尽，不妨在出口附近的绿荫下找张长椅坐下，就着从自助售卖机买来的冰咖啡，回味这场穿越了两千年的时空漫步。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`海洋剧院全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚低角度阳光时，从水道外围的东南侧拍摄，可以将环形水道、孤岛建筑遗迹与背后的远山一同纳入镜头，构图极具几何美感与孤独诗意。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`卡诺普运河倒影`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗无风的上午，站在运河南端，利用平静如镜的水面拍摄塞拉皮斯神庙遗迹及其柱廊的完美倒影，营造出对称而静谧的异域氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`大浴场拱窗光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，阳光直射入浴场遗址高大的拱形窗洞，在地面投下强烈的明暗分割线，此时站在窗内向外拍摄，能捕捉到极具戏剧性的框架构图和时光流逝感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`多利安柱廊俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，从柱廊遗址的断墙处向西眺望，以残破的石柱作为前景，将整个卡诺普运河区域和远方的丘陵收入画中，画面层次丰富，历史苍茫感扑面而来。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`橄榄树与废墟`}</h4>
                  <p className="text-sm text-gray-700">{`随时可以留意那些从废墟石缝中顽强生长出来的古老橄榄树或无花果树，以它们的枝叶作为柔和的画框，聚焦后方斑驳的石墙或柱础，诉说自然与文明的关系。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带广角镜头以捕捉遗址的宏大空间感，同时一支中长焦镜头有助于提炼废墟的细节和结构。使用无人机在意大利绝大多数考古遗址是严格禁止的，请务必遵守规定。尊重遗址，不要为了拍照而攀爬或触摸脆弱的古迹。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`蒂沃利小镇家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`选择一家由古老石屋改造的家庭式旅馆，住在爬满九重葛的阳台上，清晨在教堂钟声和咖啡香气中醒来，步行就能抵达镇中心品尝地道的罗马羊奶酪胡椒面。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`十八世纪别墅庄园`}</h4>
                  <p className="text-sm text-green-800">{`下榻于遗址附近一座建于18世纪的乡村别墅庄园酒店，房间拥有高高的彩绘天花板和古董家具，花园里带有一个可以眺望罗马平原的露天泳池，体验贵族式的慵懒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`罗马市中心设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果你更迷恋都市夜晚，不妨住在罗马市中心特拉斯特维莱或蒙蒂区的一家精品设计酒店，白天乘巴士来探访废墟，晚上则投身于罗马永不落幕的街头生活与美食盛宴。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`拉齐奥乡间农庄`}</h4>
                  <p className="text-sm text-purple-800">{`对于自驾者，可以选择遗址周边丘陵地带一座真正的农庄住宿，自己采摘水果，品尝农家自制的奶酪和腊肠，在葡萄藤架下享受一个完全逃离喧嚣的宁静夜晚。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（春末至秋初）蒂沃利的住宿相当紧俏，且价格不菲，务必提前数月预订。如果选择住在罗马，请务必查清前往Ponte Mammolo地铁站是否方便，并预留充足的往返交通时间。蒂沃利小镇夜间非常安静安全，是深度体验意大利小镇风情的好选择。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开哈德良别墅时，我的背包里好像没有增加什么实物，但心里却被塞得满满当当。那种感觉，不是看完一场盛大演出的兴奋，而更像是与一位智慧、孤独而又充满好奇心的老者进行了一场漫长的午后对话。他把他一生所见最美的风景、最奇特的建筑、最深邃的哲学思考，都化作了石头、流水和空间，封存在了这个山谷里。而我们，两千年后的陌生人，靠着双脚的行走和心灵的投射，居然能够部分地接收到这份跨越时空的“讯息”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求高效、打卡、即时满足的快节奏旅行时代，哈德良别墅提供了一种截然相反的体验。它拒绝被快速消费。它没有一目了然的壮观，它的美是隐藏的、片段的、需要你主动参与构建的。它迫使你慢下来，去观察光影在残柱上的移动，去聆听风在不同形状的废墟间穿行的声音，去想象水流曾经如何在喷泉中欢唱。正是在这种缓慢的“沉浸”与“想象”中，我们才得以短暂地脱离自己所在的时空，触碰到一个伟大灵魂如何试图在现实世界中建造他的理想国。这不仅仅是一次历史之旅，更是一次关于创造、记忆与时间本质的沉思之旅。每一位不满足于浮光掠影、渴望与往昔真正对话的旅人，都应该来这里，接受这片伟大废墟向你发出的、安静而有力的邀请。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/aquileia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿奎莱亚遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aquileia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/grado" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉多古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grado</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/modica-baroque-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫迪卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Modica</p>
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
