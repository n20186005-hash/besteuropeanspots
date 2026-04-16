import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克桑西古城 Xanthi Old Town | 漫步希腊的奥斯曼时光迷宫，沉醉于烟草、香料与百年老宅的低语 - 最佳欧洲景点',
  description: '朋友，如果你像我一样，从现代克桑西略显嘈杂的街道拐进那条上山的小巷，时间感会在瞬间错位。脚下的石板路被无数个世纪的脚步磨得温润发亮，坡度牵引着你的身体向上，像被吸入一个秘密的入口。最先拥抱你的是气味——一种复杂而迷人的混合体：老木头在阳光下发散的微甜，从某扇虚掩的门后飘出的浓烈咖啡香，墙角潮湿青苔的...',
}

export default function XanthiOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '克桑西古城', href: '/attractions/xanthi-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克桑西古城・Xanthi Old Town・希腊・克桑西`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，如果你像我一样，从现代克桑西略显嘈杂的街道拐进那条上山的小巷，时间感会在瞬间错位。脚下的石板路被无数个世纪的脚步磨得温润发亮，坡度牵引着你的身体向上，像被吸入一个秘密的入口。最先拥抱你的是气味——一种复杂而迷人的混合体：老木头在阳光下发散的微甜，从某扇虚掩的门后飘出的浓烈咖啡香，墙角潮湿青苔的土腥气，还有一丝若有若无、来自遥远记忆的烟草陈味。这些味道，是这座古城无声的自我介绍。
光线在这里是位魔术师。清晨，阳光斜斜地切开狭窄的巷弄，在鹅卵石上投下明明暗暗的光斑，那些奥斯曼老宅凸出的“沙赫尼西”（木框凸窗）在墙上拉出长长的、几何状的影子。你能听见声音从四面八方传来：头顶晾衣绳上鸟雀的啾鸣，某处庭院里潺潺的喷泉水声，远处东正教堂沉郁的钟声与清真寺尖塔传来的唤拜声在空气中微妙地交汇，并不冲突，反而像一首古老的和声。这里的居民依然生活在这些百年老屋里，阳台上晾晒着鲜艳的床单，窗台摆着天竺葵，你走过时，可能正好与一位坐在门口晒太阳的老爷爷目光相遇，他会对你微微点头。
它的核心魅力，绝非一座死气沉沉的博物馆。相反，它是一种“活着”的颓败与精美并存的状态。你看到的不是修复一新的假古董，而是时间的真实层次：一栋豪宅的山墙可能色彩剥落，露出底下红色的砖，但它的木雕窗棂依然繁复精美；隔壁的房屋或许半已倾颓，但庭院里一棵无花果树却果实累累。这里曾经因烟草贸易富甲一方，那种暴发户式的骄傲与内敛的奥斯曼美学奇异地混合在一起，创造出一种独特的、充满故事感的氛围。你在这里漫步，不像游客，更像一个偶然闯入了旧日繁华梦境的拾荒者，每一个转角都可能藏着一片失落的时间碎片。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，如果你像我一样，从现代克桑西略显嘈杂的街道拐进那条上山的小巷，时间感会在瞬间错位。脚下的石板路被无数个世纪的脚步磨得温润发亮，坡度牵引着你的身体向上，像被吸入一个秘密的入口。最先拥抱你的是气味——一种复杂而迷人的混合体：老木头在阳光下发散的微甜，从某扇虚掩的门后飘出的浓烈咖啡香，墙角潮湿青苔的土腥气，还有一丝若有若无、来自遥远记忆的烟草陈味。这些味道，是这座古城无声的自我介绍。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`光线在这里是位魔术师。清晨，阳光斜斜地切开狭窄的巷弄，在鹅卵石上投下明明暗暗的光斑，那些奥斯曼老宅凸出的“沙赫尼西”（木框凸窗）在墙上拉出长长的、几何状的影子。你能听见声音从四面八方传来：头顶晾衣绳上鸟雀的啾鸣，某处庭院里潺潺的喷泉水声，远处东正教堂沉郁的钟声与清真寺尖塔传来的唤拜声在空气中微妙地交汇，并不冲突，反而像一首古老的和声。这里的居民依然生活在这些百年老屋里，阳台上晾晒着鲜艳的床单，窗台摆着天竺葵，你走过时，可能正好与一位坐在门口晒太阳的老爷爷目光相遇，他会对你微微点头。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，绝非一座死气沉沉的博物馆。相反，它是一种“活着”的颓败与精美并存的状态。你看到的不是修复一新的假古董，而是时间的真实层次：一栋豪宅的山墙可能色彩剥落，露出底下红色的砖，但它的木雕窗棂依然繁复精美；隔壁的房屋或许半已倾颓，但庭院里一棵无花果树却果实累累。这里曾经因烟草贸易富甲一方，那种暴发户式的骄傲与内敛的奥斯曼美学奇异地混合在一起，创造出一种独特的、充满故事感的氛围。你在这里漫步，不像游客，更像一个偶然闯入了旧日繁华梦境的拾荒者，每一个转角都可能藏着一片失落的时间碎片。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克桑西古城`} />
                <InfoRow label="英文名称" value={`Xanthi Old Town`} />
                <InfoRow label="正式名称" value={`Xanthi Old Town`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`克桑西`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`希腊保存最完好、最生动的奥斯曼时期城镇之一，见证了烟草贸易带来的百年繁华与多元文化的交织。`} />
                <InfoRow label="建筑特色" value={`密集的红瓦坡顶、突出的木结构凸窗、色彩斑驳的灰泥墙面与幽深的内院，共同构成了迷宫般的街巷肌理。`} />
                <InfoRow label="建筑风格" value={`奥斯曼帝国晚期建筑风格与巴尔干本地特色的融合，带有明显的“马其顿学派”民居特征。`} />
                <InfoRow label="文化价值" value={`一个活着的文化马赛克，曾是穆斯林、基督教和犹太社区和谐共存的缩影，其物质遗产与非物质遗产（如狂欢节）同样珍贵。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城街区为全天24小时开放。其内部的各博物馆、历史宅邸开放时间各异，通常为周二至周日 9:00-15:00，冬季可能缩短，夏季部分会延长至傍晚。最重要的“克桑西民俗博物馆”和“烟草博物馆”周一闭馆。需注意，希腊的许多小店和咖啡馆在下午2点至6点之间有悠长的午休时间，街道会显得格外宁静。`} />
              <InfoRow label="门票价格" value={`漫步古城街区本身完全免费。进入各个博物馆和历史建筑需要购票，票价通常在2-5欧元之间。学生、65岁以上老人及多景点联票享有优惠。烟草博物馆门票约为4欧元，是其中最值得付费进入的景点之一。`} />
              <InfoRow label="地址" value={`Old Town of Xanthi, 671 00, Xanthi, Greece`} />
              <InfoRow label="交通方式" value={`最近的国际机场是卡瓦拉“亚历山大大帝”国际机场（KVA），距离克桑西约65公里。从机场可乘坐出租车（约50-60分钟，车费70-80欧元）或先乘坐巴士到卡瓦拉市区，再换乘前往克桑西的城际巴士。从希腊北部重镇塞萨洛尼基出发，自驾或乘坐长途巴士是最佳选择，车程约2小时。克桑西古城位于现代城区的山坡上，从市中心的公交总站或主要酒店步行上山，约15-20分钟即可抵达古城的边缘，探索全程依靠双脚。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂克桑西古城的低语，你得先认识一位“金色植物”——烟草。故事真正沸腾起来是在19世纪。当时，奥斯曼帝国统治下的克桑西，以其肥沃的土地，成为了优质东方烟草的核心产区。想象一下，随着欧洲对香烟需求的爆炸式增长，财富如洪水般涌入了这个山脚下的小城。那些精明的烟草商人，主要是希腊人、土耳其人还有犹太人，一夜之间成了新贵。他们赚了钱要做什么？当然是建房子，建最能彰显财富和品味的房子。于是，一座座融合了奥斯曼帝国晚期风格与本地巴尔干元素的豪宅，在山坡上拔地而起。这些建筑被称为“阿希诺多希亚”，特点就是那个标志性的“沙赫尼西”——木结构凸窗。这不仅仅是建筑部件，更是身份的象征，商人们坐在里面，既能俯瞰街道，又能享受充足的光线，监督着山下仓库里堆积如山的烟草包。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`财富带来了多元。鼎盛时期，克桑西古城是一个微型的“世界村”。穆斯林土耳其人、希腊东正教徒、犹太人、亚美尼亚人比邻而居。不同的信仰留下了各自的印记：清真寺的尖塔指向天空，东正教堂的钟楼沉稳厚重，犹太会堂隐匿在巷陌深处。周日早晨，教堂的钟声、唤拜词和街市的喧闹交织在一起，竟形成了一种奇特的和谐。这里的咖啡馆也分“门派”：土耳其咖啡馆里飘着水烟和象棋落子的声音，希腊咖啡馆则更喧闹，人们在讨论政治和生意。烟草拍卖季，城里挤满了来自维也纳、巴黎、开罗的买家，语言混杂，金银叮当，克桑西一时风光无两。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，所有的盛宴都有散场之时。20世纪初的巴尔干战争和第一次世界大战动摇了根基，紧接着是1923年那场彻底改变安纳托利亚和希腊人口结构的“人口交换”。克桑西的穆斯林居民大多被迫迁往土耳其，而来自土耳其的希腊难民则迁入。许多豪宅换了主人，一些建筑功能也随之改变。犹太社区在第二次世界大战中遭受了毁灭性打击。烟草经济在二战后也逐渐式微。古城仿佛一夜之间被按下了暂停键，财富的潮水退去，留下了这些美丽的建筑空壳，在风吹日晒中慢慢老去。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在20世纪80年代。希腊政府终于意识到这片建筑宝库的珍贵，将整个区域列为保护对象。但真正的拯救者，是陆续回归的“人”。艺术家的眼光最先发现了这里颓废的美，他们租下便宜的老宅作为工作室。随后，一些有情怀的家族开始小心翼翼地修复祖宅，将其变成精品酒店或文化中心。最重要的是，克桑西大学的学生和教授们为古城注入了年轻的活力。如今你看到的古城，是一个奇妙的共生体：既有摇摇欲坠、等待拯救的废弃房屋，也有修复一新、挂着当代艺术画廊招牌的豪宅；既有传统的五金铺子，也有时髦的精品咖啡馆。它没有变成僵化的旅游景点，而是在新的时代里，缓慢地、带着尊严地呼吸着，继续书写它的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味克桑西，我强烈建议你留出一整个白天，从清晨开始。上午九点左右抵达最佳，此时阳光明媚却未到炙热，本地居民开始一天的活动，游客尚稀。整体游览节奏务必“慢”，预计需要4-5小时的漫步与驻足。路线无需严格规划，核心是让自己迷失在“安纳托利亚街区”的迷宫中，但可以设定几个锚点。先从古城的门户——老集市广场开始，感受市井气息，然后顺着主巷向上，随机拐入任何吸引你的小巷。下午时分，当暑气上升，正是躲进凉爽的“烟草博物馆”或某个庭院咖啡馆的好时机。傍晚前，争取登上古城至高点，等待日落将一片片红瓦屋顶染成金红色。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、适合长时间行走和应对不平石路的鞋子，这是探索迷宫的前提。许多小商店和家庭式餐馆只接受现金欧元，记得提前备好零钱。拍摄居民和私人住宅内部前，请务必用微笑和手势征得对方同意，这是对这份活文化遗产最基本的尊重。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从热闹的“老集市广场”开始，在周日早市上挤在当地阿婆中间，闻一闻新鲜草药和烤面包的香气，感受古城依然跳动的心脏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`任由自己被“安纳托利亚街区”错综复杂、起伏不定的小巷吞没，放弃看地图，只凭直觉拐弯，每一次抬头都可能与一扇精美的雕花凸窗不期而遇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那些门扉半掩的宏伟宅邸，大胆而礼貌地向内窥探，你会看到一个绿意盎然的秘密内院，中央或许还有一口大理石喷泉在低吟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏进由古老豪宅改建的“克桑西民俗博物馆”，在幽暗凉爽的房间里，透过华丽的服饰、笨重的家具和发黄的照片，触摸一个已经消逝的世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拜访低调却内容惊人的“烟草博物馆”，在曾经的烟草商仓库里，看着那些古老的秤、压榨机和泛黄的广告画，想象当年金钱与梦想在此流动的轰鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在午后最慵懒的时刻，钻进一家由老房子地下石窖改造的咖啡馆，点一杯希腊弗雷佩冰咖啡，听着穹顶下回荡的低声谈话，让自己也成为风景的一部分。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着古城西侧边缘的步道漫步，从相对开阔的视野回望那片层层叠叠、如波浪般起伏的红色屋顶的海洋，捕捉它与背后现代城区碰撞的奇妙画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果恰逢傍晚，找个朝西的台阶或咖啡馆露台坐下，什么都不做，只是看着夕阳如何为这座时光迷宫涂抹上最壮丽也是最温柔的色彩。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`在“安纳托利亚街区”最狭窄的一条小巷中央仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光能完美勾勒出两侧建筑凸窗的精美木雕细节，并将一线蓝天框成绝妙的几何构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`基兹拉尔清真寺旁的平台`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，以那座优雅的红砖宣礼塔为前景，将其与身后一片错落有致、沐浴在金色光线中的奥斯曼老宅屋顶一同纳入镜头。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`哈吉·安德里亚诺斯宅邸的内院`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，站在内院廊下，捕捉阳光穿透葡萄藤架，在古老石板地和彩色玻璃窗上投下变幻光影的静谧画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从古城通往现代城区的下行阶梯顶端`}</h4>
                  <p className="text-sm text-gray-700">{`雨后初晴的傍晚，使用长焦镜头压缩空间，拍摄湿漉漉的石阶反射着天光，蜿蜒消失在两侧斑驳墙面的纵深感画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老集市广场的边缘`}</h4>
                  <p className="text-sm text-gray-700">{`周日早晨，用广角镜头贴近某个香料摊或鲜花摊，以前景丰富的色彩和质感，捕捉后方历史建筑立面与熙攘人群共存的生动场景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`古城建筑色彩以土黄、赭石、灰白为主，穿着亮色（如红色、宝蓝色）衣服的人物能成为画面中绝佳的点睛之笔。室内博物馆通常禁止使用闪光灯和三脚架，高感光度相机或大光圈镜头在这里更有用。尝试拍摄一些细节特写：剥落的油漆、生锈的门环、窗台上的陶罐，它们都是时间的诗篇。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住古城山脚下由家庭经营的“传统民宿”，房间简单干净，主人会热情地为你手绘一张古城寻宝地图，并邀请你共饮一杯自家酿制的齐普罗酒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`下榻由19世纪烟草商豪宅精心修复的精品酒店“老宅院”，睡在有着百年木梁的天花板下，清晨在私人庭院里被鸟鸣和喷泉声唤醒，彻底融入历史。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`预订坐落在古城边缘高处的“石屋别墅”，它由数栋相连的传统石屋改造而成，拥有无敌的 panoramic 露台，私密性极佳，可将古城全景和远山尽收眼底。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`文艺之选`}</h4>
                  <p className="text-sm text-purple-800">{`选择由艺术家工作室改建的微型公寓“画家的窗户”，空间不大但设计感十足，每扇窗都如同一个画框，截取着古城不同角度的风景，激发创作灵感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量有限且极受欢迎，尤其在每年二、三月盛大的克桑西狂欢节期间，务必提前数月预订。住在古城内意味着夜晚和清晨能独享巷弄的宁静魔力，但需要做好提着行李走一段石板坡路的心理准备。周边治安良好，但夜晚路灯昏暗，独自晚归建议携带手电。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克桑西古城好多天后，我闭上眼，脑海里浮现的不是某个具体的建筑，而是一种“感觉”。那是一种时间被拉长、被揉碎后又重新拼接起来的质感。在这个人人都追逐崭新、光鲜、高效的世界里，克桑西倔强地保持着它的旧节奏、它的斑驳、它的沉默与喧嚣并存。它没有试图去讨好谁，只是坦然展示着所有的历史层理：辉煌与落寞，共存与分离，修复与衰败。这种“不完美”的真实，恰恰具有最强大的治愈力量。它让你放下对“景点”的打卡心态，转而学习如何“闲逛”，如何用嗅觉和听觉去阅读一个地方，如何与一段依然活着的历史平等地对视。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被过度消费、同质化的欧洲老城，如果你渴望一场能走进时间褶皱深处的旅行，那么，请一定来克桑西古城。它不会用震撼的奇观冲击你，却会用一种缓慢渗透的方式，在你心里种下一些东西。可能是对一种消失的生活方式的凭吊，可能是对多元文化如何共处的深思，也可能，仅仅是对“慢”本身的重新发现。在这里，你会明白，有些地方的价值不在于它被拍摄得多好看，而在于它让你停下来，听见了自己内心的声音，也听见了历史在墙壁缝隙里，那绵长而低沉的呼吸。这，正是深度旅行的全部意义。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
