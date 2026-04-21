import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布吕根木屋群 Bryggen | 探访挪威峡湾门户的色彩密码与汉萨记忆 - 最佳欧洲景点',
  description: '你第一眼看到布吕根的时候，可能会觉得走进了一张过分标准的明信片。是的，就是那片紧贴着蔚蓝港口的、糖果般色彩缤纷的三角顶木屋。但别急着按快门，先停下来，用鼻子闻闻。空气里有股复杂的味道——咸湿清冷的海风，那是来自北海的气息；底下是厚重的、带着点霉味的木头香，从那些被无数双脚磨得发亮的深色栈道上蒸腾起来...',
}

export default function BryggenBergenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '挪威', href: '/destinations/norway' },
            { label: '卑尔根', href: '/destinations/norway' },
            { label: '布吕根木屋群', href: '/attractions/bryggen-bergen' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布吕根木屋群・Bryggen・挪威・卑尔根`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到布吕根的时候，可能会觉得走进了一张过分标准的明信片。是的，就是那片紧贴着蔚蓝港口的、糖果般色彩缤纷的三角顶木屋。但别急着按快门，先停下来，用鼻子闻闻。空气里有股复杂的味道——咸湿清冷的海风，那是来自北海的气息；底下是厚重的、带着点霉味的木头香，从那些被无数双脚磨得发亮的深色栈道上蒸腾起来；如果再凑近某条小巷的缝隙，或许还能捕捉到一丝淡淡的鱼干和柏油的气味，那是几百年来从未散去的贸易印记。耳边是海鸥高亢的、带着点儿不耐烦的叫声，混杂着游客隐隐的赞叹，以及脚下木板发出的、特有的“吱呀”声，这声音空洞而悠长，仿佛这排木屋是个巨大的共鸣箱，在低语着过往。
然后你沿着码头走，会发现这些木屋并非单纯的面具。转到它们的背面，景象瞬间不同。那里是另一个世界：狭窄得仅容一人通过的幽深小巷，被称为“gangs”，上方是交错支撑的木梁，光线从缝隙里挤进来，形成一道道光柱，尘埃在其中舞蹈。这里安静得多，空气似乎也凝固了。两边是一扇扇低矮的小门，门后可能是一家正在吹制玻璃的工匠工作室，也可能是藏着 vintage 旧物的小店，或者只是一个堆满杂物的后院。你这才意识到，布吕根不是博物馆里冰冷的模型，它依然活着，以一种缓慢而固执的节奏。当地的设计师、艺术家、面包师钻进这些古老的木壳里，继续为这片街区注入心跳。它最美的时刻或许是在清晨，当第一批渡轮还没靠岸，晨光刚刚给彩色山墙镀上一层金边，整个布吕根倒映在平静如镜的海水里，那一刻，时光仿佛真的倒流了。
但布吕根最打动人心的，恰恰是这种“活着的脆弱”。你知道它们都是重建的，历史上经历过大大小小无数次火灾，最近一次在1955年。挪威人选择了最笨拙也最深情的方式：在原址、用原样、尽可能使用传统技艺和木材，一次又一次地把它“种”回来。所以，你触摸到的每一块深色木墙，也许并不真的来自14世纪，但那份执念，那份要将祖先记忆和城市身份牢牢钉在海边的决心，却是无比真实的。它就像一个色彩斑斓的密码本，立在挪威峡湾的门户，无声地诉说着一个关于远航、财富、孤独、火灾与重生的漫长故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到布吕根的时候，可能会觉得走进了一张过分标准的明信片。是的，就是那片紧贴着蔚蓝港口的、糖果般色彩缤纷的三角顶木屋。但别急着按快门，先停下来，用鼻子闻闻。空气里有股复杂的味道——咸湿清冷的海风，那是来自北海的气息；底下是厚重的、带着点霉味的木头香，从那些被无数双脚磨得发亮的深色栈道上蒸腾起来；如果再凑近某条小巷的缝隙，或许还能捕捉到一丝淡淡的鱼干和柏油的气味，那是几百年来从未散去的贸易印记。耳边是海鸥高亢的、带着点儿不耐烦的叫声，混杂着游客隐隐的赞叹，以及脚下木板发出的、特有的“吱呀”声，这声音空洞而悠长，仿佛这排木屋是个巨大的共鸣箱，在低语着过往。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后你沿着码头走，会发现这些木屋并非单纯的面具。转到它们的背面，景象瞬间不同。那里是另一个世界：狭窄得仅容一人通过的幽深小巷，被称为“gangs”，上方是交错支撑的木梁，光线从缝隙里挤进来，形成一道道光柱，尘埃在其中舞蹈。这里安静得多，空气似乎也凝固了。两边是一扇扇低矮的小门，门后可能是一家正在吹制玻璃的工匠工作室，也可能是藏着 vintage 旧物的小店，或者只是一个堆满杂物的后院。你这才意识到，布吕根不是博物馆里冰冷的模型，它依然活着，以一种缓慢而固执的节奏。当地的设计师、艺术家、面包师钻进这些古老的木壳里，继续为这片街区注入心跳。它最美的时刻或许是在清晨，当第一批渡轮还没靠岸，晨光刚刚给彩色山墙镀上一层金边，整个布吕根倒映在平静如镜的海水里，那一刻，时光仿佛真的倒流了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但布吕根最打动人心的，恰恰是这种“活着的脆弱”。你知道它们都是重建的，历史上经历过大大小小无数次火灾，最近一次在1955年。挪威人选择了最笨拙也最深情的方式：在原址、用原样、尽可能使用传统技艺和木材，一次又一次地把它“种”回来。所以，你触摸到的每一块深色木墙，也许并不真的来自14世纪，但那份执念，那份要将祖先记忆和城市身份牢牢钉在海边的决心，却是无比真实的。它就像一个色彩斑斓的密码本，立在挪威峡湾的门户，无声地诉说着一个关于远航、财富、孤独、火灾与重生的漫长故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布吕根木屋群`} />
                <InfoRow label="英文名称" value={`Bryggen`} />
                <InfoRow label="正式名称" value={`Bryggen`} />
                <InfoRow label="国家" value={`挪威`} />
                <InfoRow label="城市" value={`卑尔根`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`北欧现存最重要、最完整的汉萨同盟海外商站，是联合国教科文组织世界遗产，见证了中世纪晚期北海贸易的辉煌与权力网络。`} />
                <InfoRow label="建筑特色" value={`由六十余栋三层尖顶木屋紧密排列而成，山墙一面朝向海港，形成独特的“码头立面”，背后是迷宫般狭窄的木制走廊和庭院。`} />
                <InfoRow label="建筑风格" value={`北欧传统的木构建筑（称为“lafting”技术）与汉萨同盟商人严格的功能性需求相结合，虽屡遭大火却始终坚持原址原样重建。`} />
                <InfoRow label="文化价值" value={`它不仅是挪威的木建筑瑰宝，更是一段“活着的”贸易史、隔绝的男性社会缩影，以及卑尔根作为“峡湾门户”数百年不变的城市记忆象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`布吕根木屋群外部区域及公共通道全天24小时开放，游客可自由漫步。木屋群内的博物馆、商店、画廊等内部场所开放时间各异，通常为夏季（5月至9月）每天上午9点至下午5点，冬季（10月至次年4月）缩短为上午10点至下午4点，部分周一闭馆。圣诞节、元旦及挪威国庆日（5月17日）当天，几乎所有室内场馆都会关闭。建议游览前在旅游局官网查询具体场所的当日开放时间。`} />
              <InfoRow label="门票价格" value={`在布吕根木屋群街区露天区域散步、拍照完全免费。若要深入参观，主要博物馆门票如下：布吕根博物馆（Bryggen Museum）成人票120挪威克朗，学生及老人票80挪威克朗，18岁以下免费。汉萨博物馆（Hanseatic Museum）成人票150挪威克朗，学生及老人票120挪威克朗，儿童票50挪威克朗。购买“卑尔根城市卡”可免费进入市内多数博物馆并享受公共交通，24小时卡价格为350挪威克朗左右，性价比很高。`} />
              <InfoRow label="地址" value={`Bryggen, 5003 Bergen, Norway`} />
              <InfoRow label="交通方式" value={`从卑尔根机场（BGO）出发：最便捷方式是乘坐机场轻轨（Flytoget / Bergen Light Rail），在“Bybanen”站乘坐前往市中心方向的列车，在“Byparken”站下车，步行约8-10分钟即可抵达布吕根码头区。轻轨每10分钟一班，车程约45分钟，票价约40挪威克朗，可在机场站台自动售票机购票或使用信用卡在车上直接支付。从卑尔根火车站（Bergen stasjon）出发：火车站本身就位于市中心，出站后朝着沃根港（Vågen）方向步行，大约7分钟就能看到那片标志性的彩色木屋。市内公交系统发达，但前往布吕根最棒的体验是步行，沿途感受卑尔根老城的氛围。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从卑尔根这座城市本身说起。大约在1070年，挪威国王奥拉夫三世在这里建立了定居点，因为它坐落在天然良港和富饶峡湾的交汇处，很快就成了挪威西海岸最重要的贸易中心。但让布吕根真正登上历史舞台的，是来自远方的力量。时间跳到14世纪中期，一个强大的商业和政治联盟——汉萨同盟，正从德意志北部的吕贝克等地扩张其贸易网络。他们看中了卑尔根，因为这里盛产他们梦寐以求的货物：从北方海域捕捞并晒干后像木头一样坚硬的鳕鱼（stockfish）。于是，大约在1360年，德国商人在紧邻码头的这片最佳地段，建立了他们的海外商站，这就是布吕根的真正起源。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的两百多年，是布吕根作为“国中之国”的黄金时代。这里完全由汉萨商人自治，遵循着极其严格甚至苛刻的规则。想象一下这样的画面：几百名年轻的德国学徒和伙计，背井离乡，被送到这个阴雨连绵的北欧港口。他们被禁止与挪威本地人通婚，甚至不能学习挪威语，一年中大半时间都挤在这些狭窄、昏暗、充满鱼腥味的木屋里工作、生活。每一个细节都是为了贸易效率：山墙面向大海，方便直接从船上装卸货物；背后紧密相连、结构相似的木屋，既是仓库、作坊，也是宿舍；那些迷宫般的小巷和庭院，构成了一个自给自足、对外封闭的男性社会。布吕根成了一个巨大的、运转精密的贸易机器，将挪威的鱼干运往欧洲各地，换回谷物、布匹和奢侈品，财富如潮水般涌来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，木头与火，从来都是一对危险的伴侣。布吕根的历史几乎就是一部与火灾抗争的历史。在潮湿的卑尔根，人们用火照明、取暖、加工货物，火星一旦溅上涂着焦油的干燥木头，灾难便瞬间降临。1702年的一场特大火灾几乎将整个布吕根乃至大半个卑尔根老城夷为平地。但每次灾难后，人们都选择原地重建。这不是出于浪漫，而是出于一种根深蒂固的实用主义和对土地价值的认知——这里是港口的核心，寸土寸金。重建也严格遵循旧有的地契划分和建筑格局，因此我们今天看到的街巷轮廓，与中世纪的地图惊人地一致。这种“不变”，本身就是一种强大的历史力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`汉萨同盟的垄断在18世纪后逐渐衰落，1754年，挪威-丹麦国王最终解散了卑尔根的汉萨办事处。德国商人们离开了，但木屋留了下来，被挪威商人接手，继续作为仓库和商业场所。进入20世纪，随着现代航运的发展，布吕根的老式码头设施逐渐过时，这里一度变得破败。1955年，又是一场无情的大火吞噬了部分建筑。正是这场火灾，反而激起了挪威全国上下对保护这份独特遗产的空前决心。大规模、精细的考古发掘随即展开，人们在灰烬下发现了无数中世纪的生活物品，宛如一个时间胶囊。随后的重建工程，更像是一次基于考古证据和传统技艺的“翻译”，旨在让布吕根在符合现代安全标准的同时，最大限度地保留它的灵魂。终于，在1979年，布吕根被列入联合国教科文组织世界遗产名录，它从危险的仓库区，变成了挪威献给世界的一本关于韧性与记忆的立体史书。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正感受布吕根的灵魂，我强烈建议你安排一个完整的上午或下午，至少留出3到4小时。最佳抵达时间是早上9点至10点之间，此时旅游团大军尚未完全抵达，晨光斜射在木屋上色彩最为饱满柔和，而且很多博物馆刚好开门。游览节奏应该是“由外向内，由宏至微”：先从整体上把握它的形象和与港口的关系，再钻进那些迷人的小巷深处探索细节，最后选择一个博物馆深入它的历史内脏。这样的安排能让你像剥洋葱一样，一层层揭开布吕根的魅力，避免一开始就陷入细节而失去了对整体格局的感知。别忘了，在这里，慢就是快，发呆也是游览的一部分。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对防滑、舒适的鞋子，那些被岁月打磨得光滑的木栈道和石板路在卑尔根常见的雨天会变得像溜冰场一样。卑尔根的天气说变就变，即使盛夏也请务必随身携带一件防水外套或折叠伞。如果想参观博物馆，尽量提前在网上查好开放时间并考虑购买卑尔根城市卡，能节省不少排队和费用。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从鱼市旁边的码头开始，先远眺对岸那片如积木般排列的彩色山墙，让布吕根的第一印象完整地倒映在你的眼里和心里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着主码头漫步，近距离观察每一栋木屋细微的颜色差异和斑驳的纹理，听听海水拍打木桩的声音，看海鸥停在屋顶的风向标上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`勇敢地拐进两排木屋之间任何一条看起来幽深莫测的小巷（比如著名的“布雷德巷”），让自己瞬间被古老的木结构包围，抬头看那些交叉的梁柱如何切割天空。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迷宫般的小巷里不经意地发现一个安静的庭院，停下来看看那里摆放的鲜花或旧物，想象几个世纪前商人们在此忙碌穿梭的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访布吕根博物馆，这里的地下珍藏着考古发掘出的真实地基和遗物，是理解这片木屋群层层叠叠历史的最好课堂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进复原的汉萨博物馆，在那昏暗、低矮、充满松木和干鱼气味的房间里，切身感受当年德国学徒们艰苦、孤独的日常生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有精力，登上附近的山丘或乘坐弗洛伊恩索道，从高处俯瞰布吕根木屋群如何像一把精致的彩色梳子，镶嵌在碧蓝的港湾边缘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，找一家码头边的露天咖啡馆坐下，点一杯热咖啡，看着眼前的景色从午后的明亮逐渐过渡到黄昏的暖金色，结束这次穿越之旅。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`对岸鱼市码头侧全景`}</h4>
                  <p className="text-sm text-gray-700">{`站在鱼市或它西侧的码头边，用长焦镜头压缩空间，将整排彩色木屋与前景的游船、中景的海水、背景的群山一同纳入画面，最佳光线是上午顺光时或傍晚的蓝调时刻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`小巷纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条有代表性的小巷（如Schøtstuene附近），站在巷口，利用两侧深色的木墙形成天然的引导线，将视线引向巷尾的光亮或一个有趣的门洞，阴天柔和的散射光更能表现木质的细节和氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`屋顶与山墙特写`}</h4>
                  <p className="text-sm text-gray-700">{`走到木屋群的侧面或后方，寻找一个角度可以同时拍到多个三角形山墙高低错落的节奏感，下午的阳光能很好地勾勒出山墙的轮廓和色彩。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`室内窗户框架`}</h4>
                  <p className="text-sm text-gray-700">{`在获得允许的咖啡馆或商店内，寻找一扇面向港口的小窗，以古老的、斑驳的木质窗框为前景，拍摄窗外色彩鲜艳的木屋和港口活动，形成强烈的古今与内外对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少木屋湿滑表面和海水的高光反光，让色彩更加饱和深沉。三脚架在狭窄的小巷中使用不便，且可能阻碍他人，尽量依靠提高ISO和使用大光圈镜头来应对昏暗光线。拍摄当地商户或居民时，请务必先微笑示意并获得同意，尊重他们的隐私和生活空间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`就在布吕根木屋群内部由古老仓库改造的精品酒店，房间保留了原始的木梁和低矮的天花板，晚上听着窗外轻微的波涛声入睡，仿佛成了汉萨时代的守夜人。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感码头视野`}</h4>
                  <p className="text-sm text-green-800">{`位于布吕根对岸码头区的现代设计酒店，拥有直面世界遗产全景的无敌落地窗，在时尚舒适的房间里就能将明信片般的风景和港口晨昏变化尽收眼底。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在卑尔根老城起伏山坡上的传统白色木屋民宿，由当地家庭经营，房间虽小却充满人情味，主人会为你准备丰盛的北欧早餐并分享地图上找不到的城市秘径。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端遗产酒店`}</h4>
                  <p className="text-sm text-purple-800">{`位于市中心但环境静谧的五星级酒店，由几栋历史建筑优雅连接而成，内部是斯堪的纳维亚的极致简约设计，水疗中心甚至保留了中世纪的地下石墙，体验古今交融的奢华。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住在布吕根或紧邻的老城区域固然方便，但夜晚可能会比较安静（旅游团离开后），且价格较高。卑尔根整体治安良好，但选择住宿时仍建议查看晚间周边街道的照明和人气。夏季是绝对旺季，务必提前数月预订，尤其是那些拥有独特视角或历史特色的酒店；冬季前往则可能享受到不错的折扣，并能体验更具本地感的卑尔根。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布吕根许久后，我记忆最深的，反而不是那张最鲜艳的明信片角度。而是某个下午，我蹲在一条小巷深处，手指拂过一面木墙。木头很凉，纹理粗糙而清晰，上面有无数细微的划痕、黑色的焦灼印记（不知是哪场大火留下的）、以及新木填补的痕迹。在那一刻，我忽然觉得，我触摸的不是一栋房子，而是一棵巨大无比的、横向生长的年轮树。每一道纹路都是一年，每一次修补都是一个故事，一层覆盖一层，沉默地记录着火灾、重建、贸易繁荣与衰落、异乡人的孤独、本地人的坚守。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求崭新、光滑、高效的时代，布吕根的存在像一种温柔的抵抗。它告诉你，有些价值不在于永恒不灭，而在于每次毁灭后，人们依然选择“记得”，并愿意用最费时费力的方式，把记忆的形状重新搭建起来。它不是一个凝固的琥珀，而是一条缓慢流动的河，承载着鳕鱼的咸味、德国学徒的思乡曲、大火噼啪的爆裂声和现代咖啡机的滋滋声，继续流向未来。所以，每一位热爱深度游的旅人，都该来布吕根看看。不仅仅是为了那幅举世闻名的画面，更是为了读懂这份关于“脆弱与坚韧”的北欧哲学，感受一段用木头和色彩写就的、关于人类如何与记忆共存的史诗。在这里，你会明白，最美的遗产，是那些依然在呼吸的过去。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alesund-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥勒松老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ålesund Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arctic-cathedral-tromso" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特罗姆瑟北极大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arctic Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roros-mining-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    勒
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">勒罗斯采矿镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Røros</p>
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
