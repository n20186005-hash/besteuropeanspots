import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '曼托瓦老城 Mantua｜被三个湖泊温柔环绕的文艺复兴水上宝石 - 最佳欧洲景点',
  description: '你第一眼看到曼托瓦，会怀疑自己是不是走进了一个巨大的、流动的镜厅。清晨的薄雾从三个湖泊——上湖、中湖、下湖——的水面上升起，像一层柔光滤镜，把对岸那些砖红色的塔楼、宫殿的轮廓晕染得模糊而温柔。火车站出来的路笔直通向老城，走着走着，你会突然发现脚下的土地变成了一座被水面包围的孤岛，一座桥连接着现实与梦...',
}

export default function MantuaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '曼托瓦老城', href: '/attractions/mantua-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">曼托瓦老城・Mantua・意大利・曼托瓦</h1>
          <p className="text-lg text-gray-600 mb-6">
            你第一眼看到曼托瓦，会怀疑自己是不是走进了一个巨大的、流动的镜厅。清晨的薄雾从三个湖泊——上湖、中湖、下湖——的水面上升起，像一层柔光滤镜，把对岸那些砖红色的塔楼、宫殿的轮廓晕染得模糊而温柔。火车站出来的路笔直通向老城，走着走着，你会突然发现脚下的土地变成了一座被水面包围的孤岛，一座桥连接着现实与梦境。空气里有水草的腥甜，混着从咖啡馆飘出的浓缩咖啡的焦香，还有老建筑石缝里苔藓的湿润气息。鸽子扑棱棱地从你头顶的拱门飞过，翅膀的声音在狭窄的巷子里被放大。
这不是一个被标本化、仅供参观的老城。西装革履的男士骑着老式自行车叮铃铃穿过索尔代洛广场，车篮里放着公文包；主座教堂门口，穿着时髦的老太太正慢悠悠地遛一只脾气很好的腊肠犬；而广场另一侧，菜贩的摊位上，番茄红得惊人，罗勒叶绿得发亮。文艺复兴的宏大叙事，就这样和“今天午饭吃什么”的日常琐碎无缝拼接在一起。权力与艺术曾经在这里激烈碰撞，但如今沉淀下来的，是一种近乎慵懒的、被湖水浸泡过的平静生活节奏。
最打动人的，是那种“被包裹”的安全感。三道湖泊像母亲环抱的手臂，将城市的喧嚣与匆忙隔绝在外。你沿着湖岸散步，看天鹅一家慢条斯理地划过倒映着云彩的水面，对岸的宫殿建筑群就像漂浮在水上的海市蜃楼。这里没有佛罗伦萨的人头攒动，没有威尼斯的商业喧嚣，它安静地待在内陆，守着它曾经的辉煌和现在的惬意。走进那些宫殿，你会被铺天盖地的壁画震撼；而走出宫殿，在某个不知名的巷口转角，可能就遇上一面爬满藤蔓的旧墙，墙头探出一棵柠檬树。这就是曼托瓦的魅力——它把惊世骇俗的艺术和不动声色的生活，同时端到了你面前。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">你第一眼看到曼托瓦，会怀疑自己是不是走进了一个巨大的、流动的镜厅。清晨的薄雾从三个湖泊——上湖、中湖、下湖——的水面上升起，像一层柔光滤镜，把对岸那些砖红色的塔楼、宫殿的轮廓晕染得模糊而温柔。火车站出来的路笔直通向老城，走着走着，你会突然发现脚下的土地变成了一座被水面包围的孤岛，一座桥连接着现实与梦境。空气里有水草的腥甜，混着从咖啡馆飘出的浓缩咖啡的焦香，还有老建筑石缝里苔藓的湿润气息。鸽子扑棱棱地从你头顶的拱门飞过，翅膀的声音在狭窄的巷子里被放大。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这不是一个被标本化、仅供参观的老城。西装革履的男士骑着老式自行车叮铃铃穿过索尔代洛广场，车篮里放着公文包；主座教堂门口，穿着时髦的老太太正慢悠悠地遛一只脾气很好的腊肠犬；而广场另一侧，菜贩的摊位上，番茄红得惊人，罗勒叶绿得发亮。文艺复兴的宏大叙事，就这样和“今天午饭吃什么”的日常琐碎无缝拼接在一起。权力与艺术曾经在这里激烈碰撞，但如今沉淀下来的，是一种近乎慵懒的、被湖水浸泡过的平静生活节奏。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最打动人的，是那种“被包裹”的安全感。三道湖泊像母亲环抱的手臂，将城市的喧嚣与匆忙隔绝在外。你沿着湖岸散步，看天鹅一家慢条斯理地划过倒映着云彩的水面，对岸的宫殿建筑群就像漂浮在水上的海市蜃楼。这里没有佛罗伦萨的人头攒动，没有威尼斯的商业喧嚣，它安静地待在内陆，守着它曾经的辉煌和现在的惬意。走进那些宫殿，你会被铺天盖地的壁画震撼；而走出宫殿，在某个不知名的巷口转角，可能就遇上一面爬满藤蔓的旧墙，墙头探出一棵柠檬树。这就是曼托瓦的魅力——它把惊世骇俗的艺术和不动声色的生活，同时端到了你面前。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="曼托瓦老城" />
                <InfoRow label="英文名称" value="Mantua" />
                <InfoRow label="正式名称" value="Città di Mantova" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="曼托瓦" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="文艺复兴时期意大利北部最耀眼的文化与权力中心之一，贡扎加家族在此统治了四个世纪。" />
                <InfoRow label="建筑特色" value="一座由人工湖泊完美防御、融合了中世纪厚重与文艺复兴优雅的“理想城市”范本。" />
                <InfoRow label="建筑风格" value="以中世纪罗马式与哥特式为基础，淋漓尽致地展现了文艺复兴鼎盛时期及早期巴洛克风格。" />
                <InfoRow label="文化价值" value="一部活着的贡扎加家族兴衰史，拥有欧洲最令人惊叹的宫廷壁画群之一，被誉为“壁画之城”。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城公共区域全天24小时开放。城内主要景点（如公爵宫、泰宫、圣安德烈教堂等）开放时间各不相同，通常为周二至周日，上午9:00至下午7:00（夏季可能延长），周一普遍闭馆。具体景点请在出发前于官网二次确认，并注意部分景点中午有1-2小时的午休关闭时间。" />
              <InfoRow label="门票价格" value="进入曼托瓦老城区免费。主要宫殿和博物馆需单独购票。推荐购买“曼托瓦博物馆卡”（Mantova Musei Card），价格约20欧元，有效期内可进入公爵宫、泰宫、圣塞巴斯蒂亚诺宫等多个重要景点，性价比极高。学生、老人及欧盟青年通常享有折扣，部分教堂免费参观但会鼓励捐赠。" />
              <InfoRow label="地址" value="Piazza Sordello, 46100 Mantova MN, Italy" />
              <InfoRow label="交通方式" value="从最近的国际机场维罗纳机场出发，乘坐机场大巴前往维罗纳新门火车站，车程约15分钟。从维罗纳新门火车站乘坐区间火车直达曼托瓦火车站，班次频繁，车程约30-40分钟。从米兰中心火车站乘坐火车前往曼托瓦约需1.5至2小时。曼托瓦火车站距离老城中心约1.5公里，可轻松步行（20分钟）穿过美丽的公共花园和湖泊沿岸，或乘坐本地小巴。建议使用意铁官网或APP提前购票，现场购票机也支持英语。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">曼托瓦的故事，要从水说起。早在古罗马时代，这片被明乔河环绕的沼泽地就有人定居，但真正让它脱胎换骨的，是中世纪晚期的水利工程。12世纪，一位名叫阿尔贝托·皮特蒙特的工程师，受命于当时的统治者，设计并建造了庞大的堤坝和水闸系统，将肆虐的河水驯服，形成了今天我们看到的三个调节水位的湖泊。这一壮举不仅解决了洪涝，更将曼托瓦变成了一座易守难攻的“岛城”，为它未来的强盛打下了地理基础。</p>
              <p className="text-gray-700 leading-relaxed mb-4">而赋予这座城市灵魂的，是贡扎加家族。1328年，路易吉·贡扎加通过一场不算光彩的政变上台，开始了这个家族对曼托瓦长达近四百年的统治。最初的几代人更像是精明冷酷的军阀和政客，他们深谙意大利城邦政治的生存之道，通过联姻、雇佣军合同和灵活的外交，在米兰、威尼斯、佛罗伦萨这些巨头的夹缝中，小心翼翼地维持着独立与繁荣。直到15世纪，一位真正热爱艺术的统治者出现——卢多维科二世·贡扎加。他娶了勃兰登堡的 Barbara of Brandenburg，更重要的是，他将文艺复兴的春风吹进了曼托瓦的宫廷。</p>
              <p className="text-gray-700 leading-relaxed mb-4">卢多维科请来了当时已名满天下的建筑大师莱昂·巴蒂斯塔·阿尔伯蒂，为他设计建造了圣安德烈教堂和圣塞巴斯蒂亚诺教堂。这两座建筑彻底颠覆了中世纪的传统，比例之和谐、理念之古典，堪称文艺复兴建筑的里程碑。但真正让曼托瓦登上艺术圣殿顶峰的，是卢多维科的孙子，弗朗切斯科二世。他和妻子伊莎贝拉·德·埃斯特，可能是欧洲历史上最著名的一对艺术赞助人夫妇。伊莎贝拉本人就是一位学识渊博的人文主义者，她的“书房”里收藏着古罗马雕像、当代画作和珍贵手稿。她写信给达·芬奇、乔尔乔内、佩鲁吉诺，恳求（有时是半强迫地）他们为曼托瓦创作。虽然大师们留下的真迹不多，但那种对美的狂热追求，塑造了这座城市的基因。</p>
              <p className="text-gray-700 leading-relaxed mb-4">家族的巅峰在16世纪到来。费德里科二世·贡扎加公爵为了取悦他心爱的情人（后来成为妻子），决定建造一座“欢乐宫”，这就是举世闻名的泰宫。他找来的画家，是年仅二十岁、才华横溢的朱利奥·罗马诺。这位拉斐尔的高徒，在这座郊外别墅里彻底放飞了想象力。你走进“巨人厅”，会感到一阵目眩神迷——从地板到天花板，壁画描绘了奥林匹斯众神崩塌的骇人景象，扭曲的肌肉、惊恐的面容、碎裂的建筑向你压来。这是风格主义最早、最激进的宣言，它不再追求文艺复兴的和谐完美，而是刻意制造失衡、戏剧和情感冲击。泰宫，成了贡扎加家族财富、权力与叛逆艺术品味最奢侈的证明。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，盛极必衰。17世纪初，贡扎加家族主系绝嗣，引发了复杂的继承战争。曼托瓦在战火中惨遭劫掠，无数艺术珍品流散。之后，它先后落入奥地利哈布斯堡王朝和法国波旁王朝的统治之下，沦为帝国的一个边陲行省，往日的独立与光彩逐渐黯淡。直到19世纪意大利统一运动，曼托瓦才重新成为意大利的一部分。或许正是这段长达两个多世纪的“沉睡”，意外地保护了它。发展停滞，反而让老城的中世纪和文艺复兴肌理得以完整保存，没有受到工业化的大规模破坏。今天的曼托瓦，就像一颗被时光琥珀封存的珍珠，当你拂去表面的灰尘，内里贡扎加时代的光芒，依然璀璨夺目。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要真正感受曼托瓦，强烈建议你安排至少一整天的深度游览。最佳抵达时间是上午九点前，这时湖泊上的晨雾未完全散去，阳光柔和，游客稀少，老城刚刚苏醒。整体游览节奏应是“先外后内，先宏后微”：先用一个上午，沿着湖泊漫步，从外围把握这座“水上之城”的独特地理格局和天际线；下午再深入核心区域，沉浸于宫殿和教堂的内部艺术世界。傍晚时分，务必回到湖边，看夕阳将湖水、砖墙和天空染成一片金红。这样安排能让你在光影最佳的时刻看到曼托瓦最美的两面——自然的诗意与人文的辉煌。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>务必提前查询主要宫殿的开放时间，周一大部分关闭，且许多景点午休时间很长（约12:30-15:00），规划行程时要巧妙避开。
老城中心区域多为石板路和拱廊，穿着舒适耐走的鞋子至关重要，部分宫殿内部地面光滑或为古老木地板，高跟鞋会非常不便且可能不被允许。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">清晨从火车站出来，别急着进城，先右转沿着Viale Piave路走向上湖湖畔，从水面的最外侧静静欣赏被三个湖泊托起的整个老城轮廓。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过维托里奥·埃马努埃莱二世桥，正式进入老城岛，沿着绿树成荫的 Lungolago dei Gonzaga 湖滨道慢走，看天鹅游弋，对岸公爵宫的塔楼倒映在平静的湖水中。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从湖滨道转入老城小巷，让直觉带你乱走一会，在那些挂着晾衣绳的安静居民区感受本地生活的脉搏，直到眼前豁然开朗，抵达城市心脏——宏伟的索尔代洛广场。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在广场边的咖啡馆喝一杯地道的意式浓缩咖啡，然后转身走进那扇不起眼的小门，开启贡扎加家族权力核心“公爵宫”数小时的华丽迷失之旅。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从公爵宫侧门出来，绕过主座教堂，步行几分钟来到另一个震撼的广场——布鲁莱蒂广场，仰望阿尔伯蒂设计的圣安德烈教堂那令人屏息的巨大拱顶立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着熙攘的维托里奥·埃马努埃莱街走走，在古老的拱廊下浏览橱窗，然后在街角百年老店买一个当地特色的南瓜馅意式馄饨作为午餐。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">下午乘坐本地巴士或租一辆自行车，前往位于城北郊区的泰宫，准备迎接朱利奥·罗马诺在“巨人厅”带给你的、颠覆感官的风格主义壁画冲击。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">日落前返回城内，登上圣乔治城堡的塔楼（如果开放）或简单地坐在湖边台阶上，看夕阳的余晖一点点为曼托瓦的砖瓦屋顶镀上温暖的金边，直到华灯初上。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 上湖对岸全景拍摄点</h4>
                  <p className="text-sm text-gray-700">清晨或黄昏，站在上湖（Lago Superiore）北岸的公共花园边缘，用长焦镜头压缩空间，可以拍到宫殿群、塔楼与它们在湖中完整倒影同框的经典画面，晨雾或晚霞是绝佳加分项。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 索尔代洛广场仰角</h4>
                  <p className="text-sm text-gray-700">下午阳光斜射时，站在广场靠近拉乔内宫的一侧，向上仰拍公爵宫和主座教堂的钟塔，利用广场地面的石板作为引导线，能拍出建筑极具压迫感和历史纵深感的照片。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 圣乔治城堡桥洞框架构图</h4>
                  <p className="text-sm text-gray-700">走到连接城堡与老城的桥下，利用古老的砖石桥洞作为天然画框，将对岸鳞次栉比的房屋和教堂塔楼框入其中，构图巧妙且富有层次感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 泰宫“巨人厅”细节捕捉</h4>
                  <p className="text-sm text-gray-700">室内禁用闪光灯，但可调高ISO。聚焦壁画中某个戏剧性的局部，如坠落巨神惊恐的面容或碎裂的柱础，利用壁画本身的动态线条和明暗对比，拍出极具情感张力的特写。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 曼托瓦的光线在春秋季的清晨和黄昏最为迷人，柔和的金色光线能极大增强砖石建筑的质感与温暖色调。室内壁画拍摄务必关闭闪光灯，这是对珍贵文物最基本的保护，也是规定。尝试拍摄一些动态的生活场景，如市场色彩、湖中天鹅、巷口聊天的老人，这些画面能让你的照片更有“呼吸感”。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">精品之选</h4>
                  <p className="text-sm text-blue-800">位于索尔代洛广场一侧由16世纪贵族宫殿改造的精品酒店，房间天花板保留着原始的壁画残片，开窗即是文艺复兴广场的日常戏剧，晚上能听见广场石砖上隐约的脚步声。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">湖景体验</h4>
                  <p className="text-sm text-green-800">坐落在中湖湖畔一栋经过精心修复的19世纪建筑内，房间拥有面对湖泊和圣乔治城堡的小阳台，早晨在私人阳台享用早餐，看天鹅从窗前游过，是真正融入曼托瓦水城意境的体验。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">特色民宿</h4>
                  <p className="text-sm text-yellow-800">藏匿在老城深处一条安静小巷里的家庭经营民宿，主人是一位退休的历史老师，房子本身就有数百年历史，木梁低垂，他会为你手绘地图，讲述书本上没有的贡扎加家族八卦。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">郊外庄园</h4>
                  <p className="text-sm text-purple-800">若自驾，可选择距离老城约十分钟车程、被农田环绕的18世纪乡村庄园，体验托斯卡纳式的宁静，在花园里品尝庄园自产的葡萄酒，远眺月光下曼托瓦老城的剪影。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城中心住宿位置绝佳，但多数由古老建筑改造，房间可能不大且电梯稀缺，行李多或行动不便者需留意。曼托瓦治安非常好，深夜在老城散步也感到安全。夏季和重要节日（如美食节）期间住宿紧俏，务必提前数月预订，尤其是那些拥有寥寥几间房的特色住所。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开曼托瓦许久后，我发现自己最常回忆起的，不是那些令人震撼的穹顶壁画，也不是宫殿里金碧辉煌的大厅，而是某个无所事事的午后，我坐在湖畔石阶上发呆。湖水轻轻拍打着岸边的石头，发出柔和的哗哗声，几个少年骑着自行车从身后的小路欢笑着掠过，空气里是水、泥土和阳光混合的、懒洋洋的味道。在那一刻，我忽然明白了曼托瓦最珍贵的馈赠是什么。</p>
              <p className="text-gray-700 leading-relaxed mb-4">它是一部伟大的历史书，但更是一处让人安心“浪费时间”的桃源。在这个追求效率、一切都被加速的世界里，曼托瓦用它温柔的湖水，把喧嚣挡在了外面。它告诉你，美不必总是高高在上、需要你费力仰望的。美可以是一面斑驳的墙，一扇生锈的窗，一个在广场上追逐鸽子的孩子，是生活本身从容不迫的节奏。贡扎加家族用权力和财富攫取了那个时代最顶尖的艺术，但他们最终留给世人的，却是一座能安放平静与诗意的城池。每一位渴望深度游的旅人，都该来曼托瓦住上几天。不为打卡，只为让自己慢下来，在水光与砖影之间，重新找回那种“感受”的能力，而不是“消费”景点的匆忙。在这里，你会和一段辉煌的历史相遇，更会与一个久违的、宁静的自己重逢。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
