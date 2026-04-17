import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗罗伊登贝格老城 Freudenberg Old Town｜闯入德国版“纪念碑谷”，黑白棋盘格童话梦境 - 最佳欧洲景点',
  description: '第一眼看到弗罗伊登贝格老城，你会怀疑自己是不是不小心闯进了一个过于逼真的电影布景，或者是谁家孩子的巨型积木作品。它就那么静静地趴在一个舒缓的山坡上，整整两大排房子，像被一把巨大的尺子比着画出来的一样。所有的墙面都被刷成毫无杂质的、略带暖调的乳白色，而支撑起房屋的每一根木构架——那些纵横交错的“骨架”...',
}

export default function FreudenbergOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '弗罗伊登贝格老城', href: '/attractions/freudenberg-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗罗伊登贝格老城・Freudenberg Old Town・德国・弗罗伊登贝格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到弗罗伊登贝格老城，你会怀疑自己是不是不小心闯进了一个过于逼真的电影布景，或者是谁家孩子的巨型积木作品。它就那么静静地趴在一个舒缓的山坡上，整整两大排房子，像被一把巨大的尺子比着画出来的一样。所有的墙面都被刷成毫无杂质的、略带暖调的乳白色，而支撑起房屋的每一根木构架——那些纵横交错的“骨架”——则被涂上了浓得化不开的墨黑色。强烈的对比在阳光下干净利落，黑是黑，白是白，没有中间地带，纯粹得近乎抽象。清晨的薄雾还没散尽时，这份黑白会更加柔和，像一幅刚刚晕开笔触的水墨画。
走在由不规则小石板拼成的斜坡路上，鞋跟会发出清脆又孤单的“咔嗒”声，因为这里的清晨实在是太安静了。你能闻到空气中混杂着老木头淡淡的、类似谷仓的气味，以及从某扇虚掩的门后飘出的新鲜烘焙的黑麦面包的焦香。窗户都擦得锃亮，几乎每一扇的窗台上都规整地摆放着天竺葵或秋海棠，红色的花朵成为这黑白世界里唯一跳脱的、充满生命力的点缀。当地的老太太会慢慢地推开厚重的木窗，不紧不慢地挂出自家手织的窗帘，她们的动作本身就是这宁静韵律的一部分。这里不像那些游客蜂拥的古镇像个博物馆，它依然是一个鲜活的、呼吸着的社区，黑白的“戏服”之下，是再寻常不过的德国小镇日常。
它的核心魅力，就在于这种极致的秩序感与宁静生活气质的奇妙融合。那种整齐划一带来的不是军事化的冰冷，而是一种近乎童真的和谐与安定感。当你站在坡底向上望，房屋的线条随着地势层层叠叠，仿佛一架通往宁静乡愁的巨大阶梯。这种视觉上的震撼，初看是形式之美，细品之下，却能感受到一种强大的社区精神和集体认同——是这里的每一代居民，共同选择并维护了这个黑白分明的童话。它不张扬历史有多么辉煌，而是温柔地告诉你：美，可以如此简单、如此一致，又如此深入人心。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到弗罗伊登贝格老城，你会怀疑自己是不是不小心闯进了一个过于逼真的电影布景，或者是谁家孩子的巨型积木作品。它就那么静静地趴在一个舒缓的山坡上，整整两大排房子，像被一把巨大的尺子比着画出来的一样。所有的墙面都被刷成毫无杂质的、略带暖调的乳白色，而支撑起房屋的每一根木构架——那些纵横交错的“骨架”——则被涂上了浓得化不开的墨黑色。强烈的对比在阳光下干净利落，黑是黑，白是白，没有中间地带，纯粹得近乎抽象。清晨的薄雾还没散尽时，这份黑白会更加柔和，像一幅刚刚晕开笔触的水墨画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在由不规则小石板拼成的斜坡路上，鞋跟会发出清脆又孤单的“咔嗒”声，因为这里的清晨实在是太安静了。你能闻到空气中混杂着老木头淡淡的、类似谷仓的气味，以及从某扇虚掩的门后飘出的新鲜烘焙的黑麦面包的焦香。窗户都擦得锃亮，几乎每一扇的窗台上都规整地摆放着天竺葵或秋海棠，红色的花朵成为这黑白世界里唯一跳脱的、充满生命力的点缀。当地的老太太会慢慢地推开厚重的木窗，不紧不慢地挂出自家手织的窗帘，她们的动作本身就是这宁静韵律的一部分。这里不像那些游客蜂拥的古镇像个博物馆，它依然是一个鲜活的、呼吸着的社区，黑白的“戏服”之下，是再寻常不过的德国小镇日常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的秩序感与宁静生活气质的奇妙融合。那种整齐划一带来的不是军事化的冰冷，而是一种近乎童真的和谐与安定感。当你站在坡底向上望，房屋的线条随着地势层层叠叠，仿佛一架通往宁静乡愁的巨大阶梯。这种视觉上的震撼，初看是形式之美，细品之下，却能感受到一种强大的社区精神和集体认同——是这里的每一代居民，共同选择并维护了这个黑白分明的童话。它不张扬历史有多么辉煌，而是温柔地告诉你：美，可以如此简单、如此一致，又如此深入人心。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗罗伊登贝格老城`} />
                <InfoRow label="英文名称" value={`Freudenberg Old Town`} />
                <InfoRow label="正式名称" value={`Freudenberg Old Town`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`弗罗伊登贝格`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`德国保存最完好、视觉冲击力最强的半木结构建筑群之一，是战后民间自发修复与社区美学共识的杰出典范。`} />
                <InfoRow label="建筑特色" value={`约50栋紧密排列、清一色被涂刷成深邃黑与纯净白的两层楼半木结构房屋，形成如棋盘格或乐高积木般整齐划一又极具韵律感的阵列。`} />
                <InfoRow label="建筑风格" value={`属于中世纪晚期至文艺复兴时期盛行的德国传统半木结构民居风格，但其统一的色彩美学是20世纪后期社区运动的现代产物。`} />
                <InfoRow label="文化价值" value={`它超越了单纯的建筑遗产，代表了一种深刻的社区认同感与集体美学意志，展现了德国小镇如何在现代化进程中塑造并坚守自身独特的视觉身份。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天24小时开放。城内的小型地方博物馆和部分历史建筑内部开放时间较为灵活，通常在每年4月至10月的周二至周日，上午10点至下午5点开放，11月至次年3月仅周末开放或需提前预约。建议出行前查阅当地旅游局官网获取最新信息。`} />
              <InfoRow label="门票价格" value={`游览老城外部街道和广场完全免费。若参观市立博物馆或参与官方的导览步行游，需支付少量费用，博物馆门票约3-5欧元，导览游约8-10欧元/人。学生、儿童及团体通常有优惠。`} />
              <InfoRow label="地址" value={`Marktplatz 1, 57258 Freudenberg, Germany`} />
              <InfoRow label="交通方式" value={`从法兰克福国际机场出发是最佳选择。在机场火车站搭乘前往科隆或锡根方向的区域快车，约1.5-2小时抵达锡根中央火车站。在锡根火车站外的公交枢纽换乘前往弗罗伊登贝格的R22或R23路巴士，车程约25分钟，班次每小时1-2班。最方便的方式是购买一张涵盖北威州及周边区域的“西德车票”，可在一天内无限次乘坐区域火车和巴士。如果自驾，从法兰克福沿A45高速公路向北，在“Freudenberg”出口下，跟随棕色旅游标识“Alter Flecken”即可抵达老城附近的停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`弗罗伊登贝格的故事，始于一场大火，而成于一次集体的色彩觉醒。其实，这片被称为“Alter Flecken”的老城区，最初的命运和德国无数中世纪小镇没什么不同。它的建筑核心成型于17世纪，典型的半木结构，那时木材裸露着原本的颜色，墙面涂抹着灰泥或刷着各不相同的颜料，杂乱而富有生活气息。在漫长的岁月里，它经历了战争的边缘波及、工业革命的忽视，慢慢变得破败。真正的转折点发生在1666年，一场灾难性的大火几乎将这里夷为平地。劫后余生的小镇居民展现出了惊人的韧性，他们依照古老的产权边界和建筑传统，迅速在原址上重建家园，形成了我们今天看到的紧凑而整齐的街区布局基础。重建后的几百年，房屋根据主人的喜好被涂上黄、绿、棕等各种颜色，像一个打翻的调色盘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到20世纪，二战的炮火奇迹般地绕过了这个不起眼的小镇，这些脆弱的木构建筑得以幸存。但战后的经济困难让它们再度面临年久失修的窘境。到了上世纪六七十年代，当德国开始经济腾飞，很多类似的老城区为了“现代化”而被拆除，代之以水泥楼房。弗罗伊登贝格也走到了十字路口。这时，小镇的居民和当地的历史保护主义者站了出来。他们没有选择拆除，而是发起了一场名为“我们的弗罗伊登贝格应该更美”的社区运动。其核心理念令人惊叹：他们决定放弃杂乱，追求极致的统一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`关于为什么最终选定黑白配色，有几个流传的说法。一种比较浪漫的说法是，这源于当地一位画家在描绘小镇冬日雪景时的灵感——黑色的木梁压在白雪覆盖的白色墙面上，形成了最纯粹美丽的图画。另一种更实际的考虑是，统一的深色木框和浅色墙面，最能清晰地展现半木结构建筑的美学精髓，也最易于维护和翻新。无论起源如何，这个提议得到了绝大多数居民的支持。从1970年代末开始，一场自发的、缓慢而坚定的“色彩革命”开始了。每家每户在翻修自家房屋时，都自觉遵循这条不成文的“颜色法规”：木框架刷上沥青黑或深褐黑，墙面刷上统一的白色或米白色涂料。没有强制命令，全靠邻里共识。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个过程持续了十几年，最终造就了我们眼前这个如幻境般的黑白世界。它不是某个古代君主或建筑大师的一纸命令，而是普通市民为了家园的尊严与美丽，所达成的一次伟大共识。1990年，这片老城区被正式列为受保护的历史古迹。如今，当你漫步其中，看到的不仅是建筑，更是一部活着的、关于社区凝聚力和审美自律的教科书。每一笔黑白，都在诉说着居民对家园深沉的爱与骄傲。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览弗罗伊登贝格老城的精髓在于“慢”和“看”。建议安排至少3-4小时的沉浸时间，最佳抵达时间是工作日的清晨（9点前）或傍晚日落前。这两个时段游客稀少，光线最为美妙，更能体验小镇的本地生活气息。整体路线是一个环线，从中心集市广场开始，先向上坡方向深入住宅区感受静谧，再登上后山俯瞰全景，最后下坡从另一个角度回味街道的韵律。请务必放慢脚步，你的眼睛需要时间适应并欣赏这种极简色彩带来的复杂美感，不妨在长椅上坐坐，观察光影在黑白格子上移动的轨迹。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`这里主要是宁静的住宅区，游览时请务必保持低声交谈，尊重当地居民的隐私，不要将相机镜头对准住户的窗户内部。
小镇石板路多斜坡且凹凸不平，请一定穿一双舒适防滑的鞋子，高跟鞋在这里会是一场灾难。
春秋季节山区天气多变，即便晴天也建议带一件轻薄防风外套，观景台处风可能较大。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古朴的集市广场出发，仰头看看那座拥有洋葱顶钟楼的新教市镇教堂，它是黑白方格中唯一的异色与制高点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择任何一条向上延伸的、被岁月磨得光滑的石板小径“Krumme Gasse”，让自己彻底迷失在两排高大山墙夹出的、极具纵深感黑白走廊里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻触摸那些冰凉湿润的黑色木梁，感受木材纹理与沥青涂料的独特质感，并留意每扇门上门环造型的细微不同。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着斜坡一路走到老城区的最高处，这里房屋的排列略为松散，可以瞥见居民精心打理的后花园，那是黑白世界背后彩色的生活注脚。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从住宅区悄然折返，沿着老城西侧一条不明显的小路向上攀登几分钟，抵达“Auf dem St”观景台，这是全程的华彩乐章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在观景台的长椅上静静坐下，等待阳光角度变化，看整个老城如同一幅巨大的立体几何画在你眼前缓缓展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后绕到老城东侧外围的“Untere Wilhelmstraße”街道，从这里你可以获得一个经典的、带有坡度和前景树的侧面全景视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到集市广场，钻进广场角落那家名为“Alter Flecken”的传统咖啡馆，点一块黑森林蛋糕，隔着玻璃窗凝视这个你刚刚用脚步丈量过的童话世界。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`后山“Auf dem St”观景台全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时光线最佳，使用中焦段镜头可以压缩房屋的阵列感，让黑白格子显得更加密集震撼，若有望远镜头的长焦端，可以捕捉局部线条与光影的抽象构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老城东侧“Untere Wilhelmstraße”街道侧拍机位`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光能照亮房屋的白色山墙面，站在街道对面的人行道上，将蜿蜒的路面和几棵绿树作为前景，可以拍出富有纵深感和生活气息的经典明信片角度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`任意一条狭窄小巷“Krumme Gasse”的仰拍机位`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光直射入狭窄的巷弄，黑白对比达到极致，站在巷子中央低角度向上拍摄，让两侧高耸的黑白山墙线条向天空汇聚，极具视觉冲击力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`集市广场以教堂为背景的机位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，以广场上的古老喷泉或路灯作为前景，将背后黑白房屋衬托下的红色砖瓦教堂钟楼作为焦点，能完美体现传统与现代社区美学的交融。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带偏振镜，可以有效减少白色墙面的反光，让黑色木框的颜色更加饱和深邃，同时增强蓝天与白云的对比。`}</li>
                <li>• {`无人机飞行在德国居民区受到严格限制，弗罗伊登贝格老城上空明确禁飞，请务必遵守规定，不要打扰这片宁静。`}</li>
                <li>• {`尝试拍摄一些细节，如门环、窗台上的鲜花、光影切割的局部墙面，这些特写比全景更能传递小镇的温度。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城边缘一栋同样拥有黑白木筋墙的百年家庭民宿里，女主人会为你准备铺着亚麻桌布的丰盛早餐，在覆满露水的小花园里开始一天。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`距离老城步行10分钟的一家现代设计酒店，房间以黑白几何为设计灵感，巨大的窗户正对着远处的老城山丘，夜晚可以看到棋盘格窗户里零星亮起的暖黄灯光。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端历史体验`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车15分钟抵达附近森林环绕的城堡酒店，这座19世纪的庄园拥有广阔公园和米其林推荐餐厅，体验完极致的简约后，再沉浸在古典的奢华与宁静中。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷落脚点`}</h4>
                  <p className="text-sm text-purple-800">{`锡根火车站旁的连锁商务酒店，价格实惠，交通枢纽位置方便你结合锡根市的其他景点进行游览，乘坐巴士往返弗罗伊登贝格如同搭乘市内公交。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`弗罗伊登贝格本地的住宿数量非常有限且极具特色，如果希望沉浸式体验小镇的晨昏，务必提前数月预订，尤其在夏季和圣诞市场期间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇入夜后极为安静，几乎没有夜生活，喜欢热闹的游客可能会觉得过于沉寂，但这正是体验其纯粹之美的宝贵时刻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在锡根等附近城市是更灵活的选择，可以将弗罗伊登贝格与锡根的工业文化、森林徒步等结合起来，规划一个丰富的周末之旅。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开弗罗伊登贝格很久之后，我眼前时常还会浮现出那片黑白分明的阵列。它不像那些宏伟的教堂或宫殿，用规模和奢华震撼你；它用一种近乎固执的简洁与一致，轻轻叩击你心里某个关于秩序与安宁的角落。在这个崇尚个性与多元的时代，这个小镇反其道而行之，用集体的自律塑造了一种震撼人心的共性之美。这让我思考，美有时并非来自无限的选择和加法，而是来自于一种共识、一种克制、一种“我们都同意这样很好”的温柔力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人都应该来这里看看。它不仅仅是一个“拍照很好看”的地方。它是一堂关于社区、家园与持久之美的无声课程。当你穿行在那些黑白线条之间，你会感受到一种在现代社会日渐稀缺的确定感与平和。它告诉你，一个地方的精神可以如此清晰地被看见、被触摸——就凝结在那每一笔漆黑的木框与洁白的墙面上。在这个纷繁复杂、信息过载的世界里，弗罗伊登贝格老城就像一个视觉上的庇护所，一个用最简单色彩勾勒出的、坚实而美丽的故乡梦境。它值得你专程前来，静静待上半天，让自己被这种纯粹的黑与白，温柔地洗涤一次。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/miltenberg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米尔滕贝格（美因河畔的珍珠）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Miltenberg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/quedlinburg-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奎德林堡修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Quedlinburg Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trier-amphitheater" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特里尔竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trier Amphitheater</p>
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
