import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯佩尔隆加 Sperlonga｜提比略皇帝的纯白迷宫，第勒尼安海畔的时光琥珀 - 最佳欧洲景点',
  description: '车子沿着第勒尼安海岸线蜿蜒前行，一个恍惚间，它就像一块被海浪偶然冲上岸的、不规则的白垩岩，突然嵌入了那片无边际的蔚蓝与苍绿之间。这就是你对斯佩尔隆加的第一眼——不真实得像个模型。那种白，不是刺眼的雪白，而是被地中海阳光和盐分浸润了千百年的、带着温暖象牙光泽的“活”的白。停好车，沿着坡道向上走，海风立...',
}

export default function SperlongaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '斯佩尔隆加', href: '/attractions/sperlonga' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯佩尔隆加・Sperlonga・意大利・斯佩尔隆加`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着第勒尼安海岸线蜿蜒前行，一个恍惚间，它就像一块被海浪偶然冲上岸的、不规则的白垩岩，突然嵌入了那片无边际的蔚蓝与苍绿之间。这就是你对斯佩尔隆加的第一眼——不真实得像个模型。那种白，不是刺眼的雪白，而是被地中海阳光和盐分浸润了千百年的、带着温暖象牙光泽的“活”的白。停好车，沿着坡道向上走，海风立刻带来了清晰的气味分层：最底层是咸腥的海水味，中间缠绕着九重葛和橘子花的甜香，最高处，则是从那些狭窄巷弄里飘出的、混合了现磨咖啡、烤披萨饼底和晒热了的石灰墙的复杂气息。
声音渐渐取代了画面。高跟鞋（在这里绝对是错误选择）叩击古老火山岩石板路的清脆声响，迅速被潺潺的水声和人们的低语稀释。你会发现，水是这里的背景音。不是海的声音，而是隐藏在白墙之下、石阶之侧的细小泉眼和古老水道，它们从山岩中渗出，沿着精心设计的水槽流淌，最终消失在某个布满蕨类植物的角落。当地人提着篮子从你身边轻快走过，篮子里装着刚买的鲜鱼和一捧罗勒。他们消失在某个拱门之下，那里可能通往一个拥有海景露台的厨房。在这里，景点和生活没有边界，每一扇虚掩的木门后，都是一个延续了数百年的日常剧场。
而当你开始深入它的肌理，斯佩尔隆加最迷人的核心魅力才真正展开：它是一种关于“层”的艺术。地理上，房屋一层叠着一层，从海平面一直堆叠到山顶城堡，形成立体的迷宫。历史上，古罗马的碎石地基托举着中世纪的拱廊，文艺复兴的壁画碎片可能嵌在某家冰淇淋店的墙里。时间在这里不是线性的，而是像小镇的楼梯一样，螺旋上升，让你在同一个转角，同时听见帝国宴会的余音、海盗来袭的警钟，以及今天孩童追逐足球的笑声。它不是被博物馆玻璃罩起来的遗珍，而是一块仍然在呼吸、在生长的“时光琥珀”。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着第勒尼安海岸线蜿蜒前行，一个恍惚间，它就像一块被海浪偶然冲上岸的、不规则的白垩岩，突然嵌入了那片无边际的蔚蓝与苍绿之间。这就是你对斯佩尔隆加的第一眼——不真实得像个模型。那种白，不是刺眼的雪白，而是被地中海阳光和盐分浸润了千百年的、带着温暖象牙光泽的“活”的白。停好车，沿着坡道向上走，海风立刻带来了清晰的气味分层：最底层是咸腥的海水味，中间缠绕着九重葛和橘子花的甜香，最高处，则是从那些狭窄巷弄里飘出的、混合了现磨咖啡、烤披萨饼底和晒热了的石灰墙的复杂气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`声音渐渐取代了画面。高跟鞋（在这里绝对是错误选择）叩击古老火山岩石板路的清脆声响，迅速被潺潺的水声和人们的低语稀释。你会发现，水是这里的背景音。不是海的声音，而是隐藏在白墙之下、石阶之侧的细小泉眼和古老水道，它们从山岩中渗出，沿着精心设计的水槽流淌，最终消失在某个布满蕨类植物的角落。当地人提着篮子从你身边轻快走过，篮子里装着刚买的鲜鱼和一捧罗勒。他们消失在某个拱门之下，那里可能通往一个拥有海景露台的厨房。在这里，景点和生活没有边界，每一扇虚掩的木门后，都是一个延续了数百年的日常剧场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你开始深入它的肌理，斯佩尔隆加最迷人的核心魅力才真正展开：它是一种关于“层”的艺术。地理上，房屋一层叠着一层，从海平面一直堆叠到山顶城堡，形成立体的迷宫。历史上，古罗马的碎石地基托举着中世纪的拱廊，文艺复兴的壁画碎片可能嵌在某家冰淇淋店的墙里。时间在这里不是线性的，而是像小镇的楼梯一样，螺旋上升，让你在同一个转角，同时听见帝国宴会的余音、海盗来袭的警钟，以及今天孩童追逐足球的笑声。它不是被博物馆玻璃罩起来的遗珍，而是一块仍然在呼吸、在生长的“时光琥珀”。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯佩尔隆加`} />
                <InfoRow label="英文名称" value={`Sperlonga`} />
                <InfoRow label="正式名称" value={`Sperlonga`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`斯佩尔隆加`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`古罗马皇帝提比略最钟爱的海滨度假别墅所在地，其洞穴餐厅中出土的希腊化时期巨型雕塑群是地中海世界最重要的考古发现之一。`} />
                <InfoRow label="建筑特色" value={`一座从悬崖上生长出来的、由无数纯白色房屋和迷宫般的阶梯与拱廊构成的“蛋糕”状小镇，与蔚蓝的第勒尼安海形成绝妙对比。`} />
                <InfoRow label="建筑风格" value={`典型的中世纪地中海防御性山城格局，建筑外观统一为白色灰泥墙面与砖红色瓦顶，内部常包含古老的拱顶和石砌结构。`} />
                <InfoRow label="文化价值" value={`是古罗马帝国奢华生活、中世纪平民防御智慧与意大利甜蜜慢生活哲学在时空中的一次完美叠加与对话。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天24小时开放。核心的斯佩尔隆加国家考古博物馆及毗邻的提比略洞穴考古区开放时间为每日上午8:30至晚上7:30（夏季可能延长至午夜），最后入场时间提前一小时；冬季（约11月至次年3月）可能缩短至下午5:00闭馆。每周一、1月1日、5月1日和12月25日闭馆。具体时间可能因季节和特殊活动调整，建议出行前查阅官网。`} />
              <InfoRow label="门票价格" value={`进入斯佩尔隆加小镇本身免费。参观国家考古博物馆及提比略洞穴遗址联票价格为全票8欧元，优惠票2欧元（适用于18-25岁的欧盟公民）。18岁以下及65岁以上欧盟公民免费。每月第一个周日对所有游客免费开放。门票可在博物馆入口处直接购买。`} />
              <InfoRow label="地址" value={`Piazza del Municipio, 1, 04029 Sperlonga LT, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是罗马菲乌米奇诺机场。从罗马Termini火车站乘坐区域火车前往 Fondi-Sperlonga 站，车程约1小时至1.5小时，班次频繁。抵达Fondi-Sperlonga站后，出站即可换乘前往斯佩尔隆加小镇的Cotral巴士，车程约15-20分钟，巴士班次与火车时刻衔接，但非高峰期班次较少，建议提前查询时刻表。若自驾，从罗马沿SS7或高速公路A1/E45南下，转入SS213即可抵达，小镇外围有大型付费停车场，历史中心区域禁止外部车辆进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从公元前开始讲起。那时，这里只是罗马通往南方的“阿皮亚古道”旁一个风景绝佳的海湾。财富与权力总是最先发现美景。到了公元一世纪，罗马帝国第二位皇帝提比略，彻底爱上了这个地方。他在这里建造了一座规模惊人的海滨别墅，不仅仅是为了晒太阳。别墅最天才的设计，是巧妙地利用了一个面向大海的天然洞穴。提比略让人将这个洞穴改造成为奢华无比的“洞穴餐厅”。想象一下，在盛夏的夜晚，海风穿过洞穴，奴隶们举着火把，客人们半躺在长椅上，面前是直接从海里捕捞上来的最新鲜的鱼获。而最令人震撼的，是洞穴里安置的一组组巨型大理石雕塑，它们描绘着《奥德赛》中最惊险的场景：独眼巨人波吕斐摩斯被刺瞎、斯库拉海怪攫取水手……这些雕塑不仅是装饰，更是权力与文化的宣言，标志着皇帝本人如奥德修斯般智慧与勇武。这个洞穴，成了古代世界最酷的派对场所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，帝国的辉煌随着时间坍塌。蛮族入侵，海盗肆虐，富人们的别墅沦为废墟，被沙土掩埋。幸存下来的平民们做出了一个决定：他们放弃了便利但危险的海边，搬到了上方陡峭的悬崖上。他们用石头和勇气，建造了一个易守难攻的迷宫。狭窄的阶梯是为了让入侵的马匹无法奔跑，弯曲的巷道是为了迷惑敌人，所有的房屋都彼此相连，屋顶相通。这座白色的堡垒，不是为了美观，而是为了生存。中世纪的斯佩尔隆加，是一个时时警惕着海平线的哨兵。它封闭、内向，将灿烂的古罗马遗产深深埋在了脚下，几乎被遗忘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在1957年。一次普通的道路施工，锄头意外地凿开了沉睡的泥土，露出了精美的大理石碎片。考古学家们蜂拥而至，一场持续数年的发掘就此展开。当那些属于提比略洞穴的、残缺却依然壮丽的雕塑重见天日时，整个艺术史界为之震动。这些作品被认为是希腊化时期雕塑艺术的巅峰之作，其技艺和表现力无与伦比。斯佩尔隆加一夜之间，从一個宁静的渔村，变成了考古地图上的明星。为了保护和研究这些珍宝，政府直接在遗址旁建立了国家考古博物馆。历史的断层被猛然接通，小镇居民忽然意识到，他们每日行走的土地下，埋藏着帝国的遗产。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今的斯佩尔隆加，完美地平衡了这两种身份。它不再需要惧怕海盗，于是将面向大海的防御墙打开，变成了可以啜饮咖啡、欣赏落日的阳台。白色的涂料被重新粉刷，不是为了隐蔽，而是为了反射地中海的阳光，让整个小镇闪闪发光。迷宫般的巷道里，防御用的拱门下，开起了精致的手工艺品店、家庭餐馆和画廊。提比略的洞穴不再是私人宴厅，而是所有游客可以驻足凭吊的露天博物馆。小镇居民既是中世纪堡垒的守护者后代，也成了古罗马遗产的现代管家。从生存的堡垒到生活的乐园，从被遗忘的角落到世界的焦点，斯佩尔隆加的故事，是一部关于人类如何在历史的动荡中寻找美、守护家，并最终与自己的过去和解的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的斯佩尔隆加之旅需要至少一整天，最好能住上一晚，以感受它从黄昏到清晨不同光影下的魔力。建议下午早些时候抵达，将车停在山脚下的停车场，轻装上阵。整个游览节奏应是“先俯瞰，再沉浸，后探秘”。首先不要急于钻进小巷，而是沿着外侧的 panoramic road 走一小段，获得小镇与大海关系的全景印象。然后从主城门进入，彻底迷失在白色迷宫中，这是体验的核心。将考古博物馆和洞穴遗址安排在下午晚些时候，阳光西斜时，洞穴内的光影效果最佳。黄昏一定要留给西侧的观景平台看日落。晚上在小镇里享用漫长晚餐，第二天清晨再去海边漫步，探访古罗马港口遗址。这样安排，你便能立体地收获它的历史、建筑与生活三重奏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适防滑的平底鞋，这里的“路”几乎全部由光滑的古老石阶构成，高跟鞋和凉鞋是行走噩梦。八月是意大利全民假期，小镇会异常拥挤，尽量避开，五月、六月或九月是最佳选择。参观考古博物馆和洞穴时，内部较为阴凉且地面不平，可带一件薄外套并注意脚下。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的“Porta Carrese”城门钻进小镇，立刻让自己迷失在那些只容一人通过的、被紫藤花和天竺葵装点的白色阶梯巷弄里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在某个突然出现的阶梯转角豁口处停下，抓住一次突如其来的、框镜般的第勒尼安海全景视野，看帆船像静止的玩具一样泊在碧蓝画布上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到隐藏在民居之间的圣玛丽亚升天教堂，推门进去感受那份昏暗的凉爽，并寻找那幅珍贵的拜占庭风格《圣母与圣子》壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着指示牌下坡，前往斯佩尔隆加国家考古博物馆，花上一小时凝视那些从皇帝洞穴中打捞起的、表情依然生动的巨人雕像碎片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出博物馆，直接步入毗邻的提比略洞穴考古区，站在巨大的天然石窟中，想象公元一世纪这里灯火通明、笙歌宴饮的奢华场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时，沿着Via San Rocco走到小镇西端的“Terrazza dell’Ulivo”橄榄树平台，找把长椅坐下，看夕阳将白色房屋染成蜜糖色，再缓缓沉入海平线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`华灯初上时，在历史中心找一家家庭经营的“白房子”餐厅，点一份用当天渔获制作的“海鲜意大利面 allo scoglio”，就着烛光和远处的海浪声享用。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天清晨，趁游客未至，顺着阶梯一直下到“Spiaggia di Levante”东侧海滩，在柔软的沙子上散步，寻找露出沙面的古罗马港口防波堤遗迹。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从海上或东侧海滩仰拍小镇全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，使用长焦镜头压缩空间，将层层叠叠的白色房屋与背景的蓝天大海框在一起，突出其“蛋糕山”的立体感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“Vicolo degli Innamorati”（恋人小巷）阶梯转角`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点阳光斜射时，蹲低角度向上拍摄，让蜿蜒的白色阶梯占据前景，透过尽头的拱门或看见的一角海面作为背景，形成强烈的纵深和光影对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`提比略洞穴内部`}</h4>
                  <p className="text-sm text-gray-700">{`利用洞口的自然光作为唯一光源，拍摄洞穴深邃的几何结构，或者将同行人的剪影置于洞口，与巨大的古代遗址空间形成震撼的大小对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇某处纯白拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光强烈时，反而适合在拱廊的深色阴影中拍摄人物，以被阳光照得耀眼的远处白墙和海面为过曝背景，营造梦幻的明暗反差。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄以小巷和建筑外观为主，避免将镜头直接对准居民家的门窗和私人露台。尝试在日出后一小时和日落前一小时的“黄金时刻”进行拍摄，此时阳光角度低，能为白色的墙壁和石板路染上温暖的金色光泽，质感最佳。不妨尝试黑白摄影，能极致地凸显出这里阶梯的线条感、光影的戏剧性和建筑的历史肌理。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心宝藏`}</h4>
                  <p className="text-sm text-blue-800">{`由16世纪老宅改造的精品民宿，房间拥有原始的石头拱顶和手工烧制的地砖，早餐在种满柠檬树的小庭院享用，老板娘会给你手绘一张只有本地人才知道的秘密角落地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`海景阳台天堂`}</h4>
                  <p className="text-sm text-green-800">{`坐落在小镇中层西侧的一间家庭公寓，拥有一个可以俯瞰整个海湾的私人露台，傍晚你可以买回市场的食材自己烹饪，就着无敌日落晚餐，枕着海浪声入眠。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`海滨现代舒适`}</h4>
                  <p className="text-sm text-yellow-800">{`位于山脚下海滩边的四星级酒店，出门即是沙滩，拥有游泳池和SPA，适合想要兼顾古城探索与海滨放松的家庭或情侣，从房间阳台就能看到山顶上灯光点缀的白色小镇。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`乡村田园静谧`}</h4>
                  <p className="text-sm text-purple-800">{`位于斯佩尔隆加后方丘陵上的“农庄住宿”，被橄榄园和果园环绕，需要短程驾车进城，但能享受到绝对的宁静、广阔的田园风光和主人自产的有机早餐。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇中心很多老房子改造的住宿没有电梯，且需要爬不少台阶才能到达，预订时务必确认行李搬运是否方便或自己能否接受。夏季（6月至9月）住宿非常紧俏，价格也最高，建议至少提前两到三个月预订。如果自驾，优先选择提供停车位或能协助安排山下停车的住宿，这是最大的便利。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯佩尔隆加许久后，记忆中最鲜明的，可能不是某座具体的雕塑或某个确切的观景台，而是一种“感觉”。一种在狭窄的白色巷道里转身时，手肘不经意蹭到温暖墙面上的粗糙颗粒感；一种在寂静午后，听到头顶露台传来老人收晾衣服的窸窣声和收音机里模糊歌剧声的混合韵律。这个地方教会你的，不是庞杂的历史知识，而是一种感知历史密度的方法。它让你明白，伟大的过去并非总是庄严地陈列在殿堂里，它可以被编织进日常的脉络中，存在于妈妈喊孩子回家吃饭的叫声里，存在于老咖啡馆 espresso 机喷出的蒸汽里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、热衷贴标签的快节奏世界里，斯佩尔隆加是一种温和的反抗。它拒绝被一眼看穿，你必须用脚步去丈量它，用耐心去解锁它。每一个阶梯的转弯都可能带来惊喜或“死路”，但这不正是深度旅行——乃至生活本身——的隐喻吗？它之所以值得被列入一生必去的清单，不仅因为提比略的洞穴或明信片般的风景，更因为它提供了一种宝贵的体验：让你暂时生活在一个由时间层层累积而成的、活着的“立体史书”里。在这里，你是读者，也是故事背景里一个微小的、愉快的注脚。当你最终从迷宫中走出，重新回到广阔的海边，你会感到一种奇特的充实——仿佛你的心灵，也像那些白色的房子一样，被历史和当下的阳光，刷洗得明亮而通透。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/norcia-old-town" className="block group">
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
              <a href="/attractions/urbino-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌尔比诺历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Urbino</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/noto-baroque-town-sicily" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺托巴洛克古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Noto</p>
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
