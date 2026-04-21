import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '波尔恰城堡 Porcia Castle｜奥地利阿尔卑斯山脚下的意大利梦 - 最佳欧洲景点',
  description: '你第一眼看到波尔恰城堡，可能会怀疑自己的GPS是不是出了问题。前一秒你还沉浸在奥地利阿尔卑斯山那种熟悉的、带着木屋和尖顶教堂的风景里，下一秒，一个色泽温暖如蜂蜜、线条优雅从容的方形宫殿，就如此理所当然地坐在小镇的广场上。它不像一座防御性的“城堡”，更像一位从佛罗伦萨或威尼斯远道而来、在此歇脚的贵族，',
}

export default function PorciaCastleSpittalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '德劳河畔施皮塔尔', href: '/destinations/europe' },
            { label: '波尔恰城堡', href: '/attractions/porcia-castle-spittal' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`波尔恰城堡・Porcia Castle・奥地利・德劳河畔施皮塔尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到波尔恰城堡，可能会怀疑自己的GPS是不是出了问题。前一秒你还沉浸在奥地利阿尔卑斯山那种熟悉的、带着木屋和尖顶教堂的风景里，下一秒，一个色泽温暖如蜂蜜、线条优雅从容的方形宫殿，就如此理所当然地坐在小镇的广场上。它不像一座防御性的“城堡”，更像一位从佛罗伦萨或威尼斯远道而来、在此歇脚的贵族，姿态闲适，气质却卓尔不群。
走近它，穿过那道低调的石砌大门，世界瞬间安静下来。你走进了那个传说中的三层拱廊庭院。光线在这里被重新分配——正午的阳光斜射进来，在底层粗壮的多立克式柱廊间投下坚实有力的短影；到了二层，爱奥尼式柱头的涡卷纹在柔和的光线下显得格外精致；最上面一层，科林斯式柱头那些茛苕叶雕刻，几乎要顺着阳光生长到天空里去。你的脚步声在石廊里激起轻微的回响，混合着远处鸽子的咕咕声，还有庭院中央那个石雕喷泉几乎听不见的潺潺水声。空气里有种凉爽的、属于石头和岁月的清净气味，偶尔飘来隔壁咖啡馆刚研磨好的咖啡香。
这座城堡并非一个冰冷的博物馆。夏天的夜晚，庭院里会摆上椅子，变成露天音乐厅，莫扎特或维瓦尔第的乐声在拱廊间缠绕攀升，本地居民和游客一起，在星空下共享这份穿越了四百年的优雅。孩子们在广场上追逐，鸽子在雕像肩膀停留，它就这样完美地镶嵌在小镇的日常生活中，既是历史的丰碑，也是社区的客厅。
它最打动人的，正是这种“错位的完美”。在阿尔卑斯山的冷峻轮廓下，在南奥地利略带粗犷的乡村风情中，它固执地保留着一整颗地中海的灵魂。那种对比例、对称和光影的痴迷，那种将建筑本身作为最高艺术表达的信念，让你瞬间明白了什么是“文艺复兴”——那不仅仅是一场文艺运动，更是一种可以让石头歌唱、让空间充满理性之美的生命态度。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你第一眼看到波尔恰城堡，可能会怀疑自己的GPS是不是出了问题。前一秒你还沉浸在奥地利阿尔卑斯山那种熟悉的、带着木屋和尖顶教堂的风景里，下一秒，一个色泽温暖如蜂蜜、线条优雅从容的方形宫殿，就如此理所当然地坐在小镇的广场上。它不像一座防御性的“城堡”，更像一位从佛罗伦萨或威尼斯远道而来、在此歇脚的贵族，姿态闲适，气质却卓尔不群。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近它，穿过那道低调的石砌大门，世界瞬间安静下来。你走进了那个传说中的三层拱廊庭院。光线在这里被重新分配——正午的阳光斜射进来，在底层粗壮的多立克式柱廊间投下坚实有力的短影；到了二层，爱奥尼式柱头的涡卷纹在柔和的光线下显得格外精致；最上面一层，科林斯式柱头那些茛苕叶雕刻，几乎要顺着阳光生长到天空里去。你的脚步声在石廊里激起轻微的回响，混合着远处鸽子的咕咕声，还有庭院中央那个石雕喷泉几乎听不见的潺潺水声。空气里有种凉爽的、属于石头和岁月的清净气味，偶尔飘来隔壁咖啡馆刚研磨好的咖啡香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡并非一个冰冷的博物馆。夏天的夜晚，庭院里会摆上椅子，变成露天音乐厅，莫扎特或维瓦尔第的乐声在拱廊间缠绕攀升，本地居民和游客一起，在星空下共享这份穿越了四百年的优雅。孩子们在广场上追逐，鸽子在雕像肩膀停留，它就这样完美地镶嵌在小镇的日常生活中，既是历史的丰碑，也是社区的客厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它最打动人的，正是这种“错位的完美”。在阿尔卑斯山的冷峻轮廓下，在南奥地利略带粗犷的乡村风情中，它固执地保留着一整颗地中海的灵魂。那种对比例、对称和光影的痴迷，那种将建筑本身作为最高艺术表达的信念，让你瞬间明白了什么是“文艺复兴”——那不仅仅是一场文艺运动，更是一种可以让石头歌唱、让空间充满理性之美的生命态度。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`波尔恰城堡`} />
                <InfoRow label="英文名称" value={`Porcia Castle`} />
                <InfoRow label="正式名称" value={`Porcia Castle`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`德劳河畔施皮塔尔`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在阿尔卑斯山以北奇迹般矗立的、最纯正的意大利文艺复兴风格世俗建筑瑰宝。`} />
                <InfoRow label="建筑特色" value={`其灵魂所在是那个令人屏息的三层开放式拱廊回廊庭院，每一层拱券的韵律、柱头的雕饰都精密而和谐。`} />
                <InfoRow label="建筑风格" value={`纯粹的意大利文艺复兴风格，特别是威尼托地区宫殿建筑的杰出范本。`} />
                <InfoRow label="文化价值" value={`它是文艺复兴思想与艺术跨越阿尔卑斯山向北传播的“活的里程碑”，见证了中世纪向近代转型时期贵族对美与人文精神的极致追求。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡庭院全年免费开放，可随时进入。城堡博物馆的开放时间为每年5月至10月，周二至周日，上午10点至下午5点。7月和8月旺季期间，开放时间会延长至下午6点，并且周一也开放。冬季（11月至次年4月）博物馆关闭进行维护。每年夏季庭院内会举办“施皮塔尔夏季音乐会”，具体日期需查询当年官网。圣诞节期间城堡广场有市集。`} />
              <InfoRow label="门票价格" value={`城堡庭院参观免费。博物馆门票：成人票8欧元，优惠票（学生、65岁以上老人）6欧元，家庭票（2大2小）16欧元。持有克恩顿州卡可免费进入。导游讲解服务需提前预约，英语或德语导游，费用为每组（最多25人）50欧元，时长约1小时。`} />
              <InfoRow label="地址" value={`Burgplatz 1, 9800 Spittal an der Drau, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是克拉根福机场（KLU），距离约40公里。从机场乘坐出租车到施皮塔尔火车站约35分钟，费用约70欧元。更经济的方式是乘坐机场巴士到克拉根福中央火车站，换乘火车。从维也纳或萨尔茨堡出发，乘坐奥地利联邦铁路（ÖBB）的火车可直达“Spittal-Millstättersee”火车站，班次频繁，从维也纳出发约4小时，从萨尔茨堡出发约2.5小时。火车站出站后，步行穿过老城，沿着标志清晰的“Zur Burg”路牌，大约10-15分钟即可抵达城堡广场。小镇内步行是最佳方式，所有景点都紧凑地分布在城堡周围。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从16世纪上半叶讲起。那时的施皮塔尔，是神圣罗马帝国版图中一个重要的贸易节点。掌管这片土地的，是权倾一时的帝国财政官兼军事指挥官——加布里埃尔·冯·萨拉曼卡-奥尔滕堡。这位大人物可不是普通的贵族，他深受皇帝查理五世的信任，足迹遍布欧洲，尤其在意大利半岛浸淫多年。可以想象，当他功成名就，想要为自己家族建造一座配得上其地位的宅邸时，他脑海里浮现的，绝不会是家乡常见的那些厚重、防御性的哥特式城堡。他想要的，是他在维罗纳、在维琴察、在威尼斯看到的那种宫殿：明亮、优雅、开放，象征着人文、学识与现世的繁荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大约在1533年到1597年之间，这座梦想中的宫殿在德劳河畔破土动工。我们无从得知冯·萨拉曼卡究竟带回了哪位意大利建筑师的设计图，或是哪位大师亲自北上监工，但结果不言自明。建筑的核心被设计成了一个方形的、向内开放的庭院，这是罗马宅邸“中庭”传统的复兴，更是文艺复兴时期理想住宅的蓝本。三层拱廊，严格遵循着古典柱式的上升秩序：底层多立克（男性般刚健），中层爱奥尼（女性般柔美），顶层科林斯（少女般华丽）。这不仅是美的展示，更是一本立体的建筑教科书，宣告着新时代的审美准则。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，家族的命运如同易逝的烟花。冯·萨拉曼卡家族在17世纪初便绝嗣了。城堡几经转手，在1662年，落入了来自意大利的波尔恰家族手中——这仿佛是一场命中注定的回归。这个来自弗留利地区的贵族家族，以自己的姓氏为城堡重新命名，并在此居住了一个多世纪。他们或许更能懂得这座建筑里每一处线条的乡愁。在此期间，城堡的内部装饰被进一步丰富，增添了许多巴洛克风格的壁画和灰泥装饰，为这座文艺复兴的“骨架”披上了一层更华丽的“肌肤”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光进入19世纪，波尔恰家族也离开了。城堡一度面临被拆除的威胁，甚至被用作工厂和兵营，那些精美的墙壁被烟尘熏黑，庭院里堆满了杂物。幸运的是，它的坚实结构和内在之美拯救了它。20世纪初，施皮塔尔市买下了这座已成为城市象征的建筑，并开始了漫长而细致的修复工程。人们小心翼翼地将几个世纪积攒的污垢和不当添加物剥离，让那些浅黄色的砂岩重新呼吸，让拱廊的韵律再次清晰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，你看到的波尔恰城堡，是穿越了近五百年风雨后的平静模样。它不再是某个家族的私产，而是整座城市的骄傲与灵魂客厅。它从一位帝国重臣的野心之作，变成意大利文艺复兴在阿尔卑斯山北麓最孤独也最灿烂的守望者，最终，成为一个社区共享的记忆与舞台。它的每一块石头，都讲述着关于跨越地理的文化向往、关于美的永恒力量、以及关于一个地方如何通过珍视自己的过去而定义未来的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的上午，大约9点半左右抵达城堡。这个时候，旅行团的大巴还未涌入，清晨的阳光正好以较低的角度洒进西侧的拱廊，是拍照和感受庭院光影魔法的黄金时刻。整体游览建议留出至少3到4小时，节奏可以从容不迫。先在外围感受城堡与小镇广场的关系，然后沉浸于庭院，接着细细参观内部的博物馆，最后登高望远。这样的安排让你由外至内、由宏至微，逐步揭开这座宫殿的每一层面纱，充分体会其建筑之美和历史之厚。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周一要特别注意，即便在夏季，博物馆也可能闭馆，行前务必确认官网最新通知。参观内部博物馆时，穿着舒适的平底鞋非常必要，那些古老的木地板和石阶需要小心行走。小镇非常安全友善，但城堡内部展品请勿触摸，尤其是那些几百年的木质镶板和壁画。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡广场东侧那家有着绿色遮阳棚的古典咖啡厅开始，点一杯“Melange”咖啡，坐在室外，静静观察城堡正立面在晨光中的色彩变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开那扇厚重的木门走进内庭院，立刻在底层拱廊的中央站定，仰头旋转一周，感受三层拱廊构成的垂直交响曲。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着右手边的石阶缓缓走上第二层回廊，停下来仔细辨认爱奥尼柱头上那些精致的涡卷纹，并从这里俯看庭院中央的喷泉和下方走动的人影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡博物馆，不要错过二楼那间保留了原始巴洛克天花板的“行星大厅”，看壁画上的诸神如何在穹顶演绎宇宙的秩序。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找通往城堡小礼拜堂的侧门，那里的祭坛画和静谧气氛与外面建筑的理性之美形成动人的反差。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要攀爬狭窄的螺旋石梯登上城堡的角楼，让视野突然炸开，将施皮塔尔的红屋顶、远处的德劳河与巍峨的阿尔卑斯山尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡出来，绕着它的外墙走一圈，从北侧的花园角度回望，你会看到这座意大利式宫殿与背后雪山同框的超现实画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览结束，回到广场，在市政厅拱廊下的传统餐厅享用一顿克恩顿州风味的午餐，让味蕾也融入当地的生活节奏。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`庭院拱廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`上午9点到11点间，太阳照射西侧拱廊时，站在庭院东侧拍摄，能获得强烈的明暗对比和深邃的纵深感，人物可站在光影分界线上。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`三层拱廊仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`站在庭院正中心喷泉附近，用广角镜头垂直向上拍摄，将三层不同风格的柱廊全部纳入画面，构图极具几何美感与视觉冲击力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`塔楼俯瞰全景`}</h4>
                  <p className="text-sm text-gray-700">{`登上北侧角楼后，将相机或手机镜头从拱形窗洞中探出，以古老的石窗为画框，拍摄远处雪山环抱下的小镇全景，层次感极佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`花园侧景与雪山`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，走到城堡北面的小花园，用长焦镜头压缩空间，将城堡优雅的侧面轮廓与远处清晰的阿尔卑斯山峰拼接在同一画面中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`博物馆行星大厅细节`}</h4>
                  <p className="text-sm text-gray-700">{`利用室内柔和的自然光，拍摄大厅天花板上的巴洛克壁画细节，适当提高ISO，捕捉那些繁复华丽的神话人物与金色纹饰。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用三脚架在室内博物馆拍摄需格外谨慎，最好事先询问管理员，且绝对禁止使用闪光灯，以免伤害脆弱的古老颜料。在庭院中拍摄人物肖像时，利用柱廊形成的天然框架和柔和散射光，能拍出非常有古典韵味的照片。尊重其他游客和正在进行的文化活动（如音乐会排练），避免干扰。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`广场旁一栋16世纪联排屋里的家族经营旅馆，房间窗户正对城堡侧面，老板会为你讲述他祖辈与城堡相关的轶事，早餐是自家果园的果酱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`文艺复兴风格精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由老城另一座历史建筑改造而成，设计巧妙融入了拱廊、壁画等元素，与波尔恰城堡遥相呼应，屋顶露台是晚餐时小酌看城堡夜景的秘密角落。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`湖畔城堡酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`若想体验更恢弘的居住感，可以驱车15分钟前往米尔施塔特湖边的古老城堡酒店，住在厚重的石墙内，清晨在阳台上面对湖光山色享用皇家般早餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山间静谧度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`位于城堡视野可及的周边丘陵上，独栋的木屋拥有无敌的全景阳台，白天游玩城堡，晚上回归绝对的宁静，在星空下回味白日的文艺复兴之梦。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施皮塔尔老城区域非常小巧安全，所有住宿点步行至城堡均在10分钟内。夏季音乐节期间和圣诞市场期间住宿非常紧俏，务必提前数月预订。选择湖边或山上的住宿意味着需要自驾或乘坐出租车，但换来的是截然不同的自然体验。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开波尔恰城堡很久以后，我脑海里反复出现的，不是某个具体的雕像或房间，而是那个庭院里流动的光，和那份身处阿尔卑斯山区却呼吸着地中海空气的奇妙错位感。它像一颗被无意间遗落在此的珍珠，固执地散发着不属于这片土地的光泽。这恰恰是它最珍贵的地方——它提醒我们，文化的生命力正在于流动与嫁接。一个强大的灵魂（无论是位高权重的贵族，还是一个时代的精神），可以跨越重重地理与文化的屏障，将心中的理想国在异乡变为触手可及的现实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个趋于同质化的世界里，旅行有时是为了寻找“不同”，而波尔恰城堡提供的，是一种更高阶的惊喜：它让你在预期的“不同”之中，遇到了另一种更深刻的“不同”。它不仅仅是奥地利的一个景点，它是欧洲精神脉络的一个生动注脚。在这里，你能真切地触摸到文艺复兴那场席卷欧洲的“春风”，是如何具体而微地吹过一座山谷、影响一个人的选择，并最终凝结为石头上永恒的诗歌。对于每一位厌倦了打卡、渴望深度连接的旅人来说，这里值得你专程而来，花上一个下午，什么也不做，就坐在那拱廊下，看光移影走，听石头讲述关于美、权力、梦想与时间的故事。这是一次与历史中某个辉煌瞬间的私人对话，也是一次对自身文化视野的温柔拓宽。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/durnstein-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杜恩施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dürnstein Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/retz-windmill-wine-cellars" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷茨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Retz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bad-ischl-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴德伊舍</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Ischl</p>
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
