import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '罗维尼海滨古城 Rovinj｜亚得里亚海的彩色梦境，在威尼斯风情巷弄里迷路 - 最佳欧洲景点',
  description: '我得跟你说，第一次看到罗维尼，我差点以为是谁不小心打翻了调色盘，把所有的暖色调都泼在了一座伸向大海的小山上。最佳视角是从海上来，当小船慢慢靠近，那些蜜糖黄、陶土红、珊瑚粉和奶油白的房子，一层叠着一层，像瀑布一样从山顶的教堂钟楼倾泻而下，直落到湛蓝的海水里。空气里有咸咸的海风味道，混合着岸边松树的清香...',
}

export default function RovinjCoastalOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '罗维尼海滨古城', href: '/attractions/rovinj-coastal-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`罗维尼海滨古城・Rovinj・克罗地亚・罗维尼`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`我得跟你说，第一次看到罗维尼，我差点以为是谁不小心打翻了调色盘，把所有的暖色调都泼在了一座伸向大海的小山上。最佳视角是从海上来，当小船慢慢靠近，那些蜜糖黄、陶土红、珊瑚粉和奶油白的房子，一层叠着一层，像瀑布一样从山顶的教堂钟楼倾泻而下，直落到湛蓝的海水里。空气里有咸咸的海风味道，混合着岸边松树的清香，还有从某扇敞开的窗户里飘出来的、炖鱼汤的浓郁香气。
走进古城，你就把自己交给了迷宫。脚下是几个世纪以来被无数脚步打磨得光滑温润的石灰岩石板路，窄得只容两人侧身而过。阳光在这里变成了淘气的孩子，它只在特定的时间，从特定的角度，挤进高耸的房屋缝隙，在墙上切出一块块耀眼的光斑。你的耳朵里充满了各种声音：头顶上海鸥盘旋的鸣叫，巷子深处传来叮叮当当的敲打声（那是某位工匠在制作传统的蕾丝或陶器），还有听不懂但语调欢快的克罗地亚语，从街角咖啡馆里飘出来。这里不像一个纯粹的旅游景点，更像一个被精心保存下来的生活剧场。清晨，你会看到提着菜篮子的老奶奶在拱门下聊天；午后，渔民在港口边修补着橘红色的渔网。
而这一切的终点，或者说制高点，是圣尤菲米娅教堂。当你沿着仿佛没有尽头的蜿蜒小巷向上攀登，气喘吁吁地拐过最后一个弯，那座高耸的钟楼和庄严的巴洛克立面会突然完整地出现在你面前，脚下是豁然开朗的广场。那一刻，所有的攀登都值了。这里不仅是地理上的中心，更是整座古城的精神锚点。站在教堂前的平台上回望，你看到的不再是杂乱无章的巷弄，而是一幅浑然天成的杰作：红瓦屋顶的海洋，在阳光下闪烁着温暖的光泽，一直蔓延到翡翠色的海岸线。
最打动人心的，或许是它的“活着”。游客与居民共享着同一片空间，历史不是封存在玻璃柜里，而是晾晒在阳台上的床单，是咖啡馆里持续数小时的闲聊，是港口市场里刚刚卸下的、闪着银光的鱼。罗维尼的魅力，就在于这种毫不做作的日常诗意，它让你觉得，自己闯进了一个美丽的、被时光遗忘的角落，却又被它的生活气息温柔地拥抱。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`我得跟你说，第一次看到罗维尼，我差点以为是谁不小心打翻了调色盘，把所有的暖色调都泼在了一座伸向大海的小山上。最佳视角是从海上来，当小船慢慢靠近，那些蜜糖黄、陶土红、珊瑚粉和奶油白的房子，一层叠着一层，像瀑布一样从山顶的教堂钟楼倾泻而下，直落到湛蓝的海水里。空气里有咸咸的海风味道，混合着岸边松树的清香，还有从某扇敞开的窗户里飘出来的、炖鱼汤的浓郁香气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进古城，你就把自己交给了迷宫。脚下是几个世纪以来被无数脚步打磨得光滑温润的石灰岩石板路，窄得只容两人侧身而过。阳光在这里变成了淘气的孩子，它只在特定的时间，从特定的角度，挤进高耸的房屋缝隙，在墙上切出一块块耀眼的光斑。你的耳朵里充满了各种声音：头顶上海鸥盘旋的鸣叫，巷子深处传来叮叮当当的敲打声（那是某位工匠在制作传统的蕾丝或陶器），还有听不懂但语调欢快的克罗地亚语，从街角咖啡馆里飘出来。这里不像一个纯粹的旅游景点，更像一个被精心保存下来的生活剧场。清晨，你会看到提着菜篮子的老奶奶在拱门下聊天；午后，渔民在港口边修补着橘红色的渔网。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的终点，或者说制高点，是圣尤菲米娅教堂。当你沿着仿佛没有尽头的蜿蜒小巷向上攀登，气喘吁吁地拐过最后一个弯，那座高耸的钟楼和庄严的巴洛克立面会突然完整地出现在你面前，脚下是豁然开朗的广场。那一刻，所有的攀登都值了。这里不仅是地理上的中心，更是整座古城的精神锚点。站在教堂前的平台上回望，你看到的不再是杂乱无章的巷弄，而是一幅浑然天成的杰作：红瓦屋顶的海洋，在阳光下闪烁着温暖的光泽，一直蔓延到翡翠色的海岸线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，或许是它的“活着”。游客与居民共享着同一片空间，历史不是封存在玻璃柜里，而是晾晒在阳台上的床单，是咖啡馆里持续数小时的闲聊，是港口市场里刚刚卸下的、闪着银光的鱼。罗维尼的魅力，就在于这种毫不做作的日常诗意，它让你觉得，自己闯进了一个美丽的、被时光遗忘的角落，却又被它的生活气息温柔地拥抱。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`罗维尼海滨古城`} />
                <InfoRow label="英文名称" value={`Rovinj`} />
                <InfoRow label="正式名称" value={`Rovinj`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`罗维尼`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`亚得里亚海东岸保存最完好、最具威尼斯共和国风情的古城之一。`} />
                <InfoRow label="建筑特色" value={`房屋随山势密集堆叠如彩色积木，蜿蜒窄巷通向山顶的圣尤菲米娅教堂，形成极具辨识度的天际线。`} />
                <InfoRow label="建筑风格" value={`以威尼斯风格为主，混杂了巴洛克、哥特及本地伊斯特拉石造建筑的朴素元素。`} />
                <InfoRow label="文化价值" value={`一座活着的、见证了从威尼斯共和国到现代克罗地亚变迁的“微缩地中海文明交汇博物馆”。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身为开放式区域，全天24小时可进入。核心景点圣尤菲米娅教堂开放时间约为夏季（4月至10月）上午9点至晚上8点，冬季（11月至3月）上午10点至下午5点，具体会有微调。城内多数小博物馆、画廊的开放时间通常在上午10点至下午2点及下午5点至晚上9点，中午有较长的休息时间，且冬季部分场馆可能闭馆或缩短开放。建议出行前查看最新信息。`} />
              <InfoRow label="门票价格" value={`漫步古城本身完全免费。进入圣尤菲米娅教堂免费，但攀登教堂钟楼需支付约25库纳（约合3.5欧元）的门票。城内一些小型私人博物馆或艺术馆门票在20-40库纳不等。港口边的海洋生物馆门票约60库纳。`} />
              <InfoRow label="地址" value={`Rovinj Old Town, 52210 Rovinj, Croatia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是普拉机场（PUY），距离罗维尼约40公里。从机场出发，最方便的是乘坐预约的出租车或摆渡车，车程约40分钟。从克罗地亚首都萨格勒布或斯普利特出发，可乘坐长途巴士，班次频繁，到罗维尼巴士总站下车。巴士站步行至古城入口约10分钟。如果你从威尼斯或的里雅斯特过来，夏季有渡轮航线，航程充满风情但耗时较长。在古城内，一切靠步行，石板路和高低台阶不适合拉行李箱，建议将大件行李存在酒店。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲罗维尼的故事，我们得把时钟拨回古罗马时代。这片土地最初只是一个小岛，名叫“卡斯特拉鲁比尼亚”，岛上有罗马人的定居点。那时候，它不过是帝国庞大网络中的一个不起眼的小点，凭借着天然的良港和丰富的渔业资源生存着。真正的命运转折点，发生在公元六世纪以后。随着西罗马帝国的崩溃，斯拉夫人和阿瓦尔人开始涌入这片地区，带来了新的血液和动荡。当地居民为了安全，纷纷逃往近海的小岛，罗维尼的岛居传统由此奠定。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`让它脱胎换骨的，是威尼斯共和国。从1283年到1797年，长达五百多年的威尼斯统治，如同一位严苛又富有艺术气息的雕刻师，将罗维尼彻底塑造成了我们今天看到的样子。威尼斯人不仅带来了强大的海军保护和政治体系，更重要的是，他们输出了全套的“威尼斯生活方式”和审美。你看那密集的、为了节省空间而建得又高又窄的房屋布局，你看那充满光影游戏的曲折小巷，你看那建筑立面上偶尔出现的威尼斯式三叶窗和石雕，都是那个时代留下的深刻烙印。罗维尼成为了威尼斯在亚得里亚海东岸最重要的据点之一，一座坚固的岛屿要塞，财富随着航运和贸易（特别是盐和橄榄油）积累起来。为了保护这些财富，他们在岛屿周围筑起了坚固的城墙，并开出了三道城门。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，坚固的城墙也意味着封闭。直到1763年，为了发展的需要，威尼斯人做出了一个大胆的决定：填海！他们用岩石和泥土，将这座岛屿与大陆连接了起来。罗维尼从此不再是孤岛，它获得了新的发展空间，我们今天漫步的“新”城区部分，就是从那时开始萌芽的。随着威尼斯的衰落和拿破仑的铁蹄，罗维尼的统治者像走马灯一样更换，奥匈帝国、意大利都曾管理过这里。每一次政权更迭，都在建筑、文化和居民的身份认同上留下浅浅的刻痕。你会注意到，这里的很多老人依然能说流利的意大利语，咖啡馆的菜单也总是双语并列。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二战后，罗维尼随伊斯特拉半岛一起划归南斯拉夫，这是一个充满变革也略带阵痛的时代。渔业和船舶制造是支柱产业，古城一度显得有些沉寂和破败。但转机随着克罗地亚独立和旅游业的兴起而到来。人们忽然发现，这座几乎被遗忘的古城，其未经现代化改造的、原汁原味的中世纪风貌，竟成了它最宝贵的财富。政府和居民们开始小心翼翼地修复老房子，但不是把它们变成冰冷的博物馆，而是改造成充满个性的民宿、画廊和餐厅。罗维尼没有在旅游大潮中迷失，它找到了一种平衡：既让游客沉醉于它的颜值和历史，又顽强地保持着本地社区的生活核心。今天的罗维尼，是一个关于传承与复兴的完美故事，它告诉你，历史不是包袱，而是可以温柔栖息并创造未来的家园。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味罗维尼，我强烈建议你至少留出一整个白天，从清晨到日暮。最佳的游览节奏是“先外后内，先下后上”。早上八九点，趁大批一日游游客还未涌入，先从古城外围的滨海大道开始，感受它宁静的苏醒时分。然后深入迷宫般的老城，任由自己“迷路”，在那些不知名的小巷里发现惊喜。将攀登圣尤菲米娅教堂安排在下午稍晚的时候，这时光线西斜，最适合拍摄屋顶海洋，并且可以无缝衔接山顶的绝美日落。整个过程不需要急着赶路，留出足够的时间坐下来喝杯咖啡，看看来来往往的人，这才是罗维尼的正确打开方式。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、防滑的平底鞋，古城内的石板路陡峭且光滑，高跟鞋在这里是“刑具”。夏季正午阳光暴晒，小巷里虽然阴凉但闷热，建议把最需要体力的攀登活动安排在早晨或傍晚。热门餐厅尤其是海景位置务必提前预订，临时去找很可能要排队一小时以上。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地标性的巴尔比拱门进入古城，用手触摸那粗糙的石灰岩，感受七百年前威尼斯工匠留下的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主要街道格里西亚街慢慢向上溜达，别错过两旁那些售卖手工香皂、橄榄油和蕾丝的精巧小店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在特鲁戈广场稍作停留，坐在露天咖啡馆的椅子上，看当地人牵着狗悠闲地走过，融入这慢节奏的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随机拐进任何一条吸引你的小巷，让自己彻底迷失，发现墙上斑驳的壁画、门口怒放的三角梅和隐藏在庭院里的小画廊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气爬上圣尤菲米娅教堂那狭窄的木制旋转楼梯，登上钟楼顶端，让360度的亚得里亚海和红屋顶全景冲击你的视觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂另一侧的小路下山，探索北面 quieter 的居民区，那里的生活气息更加浓厚，偶尔能听到住户家里传出的电视声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一小时，前往港口北侧的岩石海岸，找一个舒服的位置坐下，等待夕阳将整个古城染成金红色的 magic hour。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后再次踱入夜色中的古城，此时游客散去，巷弄里只有暖黄的壁灯亮着，脚步声在石板路上回响，氛围静谧而神秘。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口防波堤尽头`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，用长焦镜头压缩空间，将圣尤菲米娅教堂的钟楼与前方色彩缤纷的房屋、停泊的渔船一同纳入画面，构成经典的罗维尼明信片视角。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`格里西亚街中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光能为街道两侧高耸的建筑打出漂亮的立体感，站在较低处向上拍摄，能获得极具纵深感、巷弄通天般的震撼效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣尤菲米娅教堂钟楼顶`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，但最佳是下午日落前两小时，光线柔和，适合拍摄屋顶海洋的全景，建议使用广角镜头，并将部分钟楼的石柱作为前景框架。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`岩石海岸边利用水洼`}</h4>
                  <p className="text-sm text-gray-700">{`雨后的清晨，在古城北面的岩石海岸寻找小水洼，放低机位拍摄教堂和房屋在水中的倒影，能创造出极具艺术感的对称构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某条无名小巷的光影交界处`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光垂直射入窄巷，在明暗对比最强烈的地方等待一个行人或一只猫走过，捕捉那种故事感和瞬间的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民的隐私，拍摄阳台或窗户内的场景前最好征得同意，许多人家把小巷当作自家客厅的延伸。亚得里亚海的光线在夏季非常强烈且变化迅速，建议随身携带一块轻便的减光镜，以应对大光比场景。航拍无人机在克罗地亚城市和历史文化区域有严格限制，在罗维尼老城上空飞行基本不被允许，请务必事先查询并遵守当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济精选`}</h4>
                  <p className="text-sm text-blue-800">{`位于老城边缘一栋18世纪石头房子里的公寓，房东会热情地为你提供自制果酱早餐，从窗户就能瞥见教堂钟楼的尖顶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`藏身于古城最窄巷弄中的精品民宿，由家族世代相传的祖宅改造，房间保留着原始的岩石墙壁和木梁，每晚在绝对的宁静中入睡。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风尚`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在老城入口附近的设计酒店，将现代极简风格完美融入古老建筑结构，顶楼的露台酒吧是欣赏落日和古城夜景的私密据点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`位于海滨、拥有私人码头和泳池的五星级酒店，部分房间配有直面古城的超大露台，可以一边享受早餐一边看着帆船缓缓驶过，尽享奢华与风景。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是绝对旺季，住宿价格飙升且一房难求，务必提前至少三个月预订。如果追求极致安静，请选择老城北侧或城墙外的住宿，南侧港口区虽风景绝佳，但晚上可能仍有酒吧的热闹声。大多数老城内的住宿不提供停车位，自驾游客需要将车停在城外的公共停车场，这是一笔不小的额外开支。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开罗维尼好些天了，但闭上眼睛，那些色彩、光线和海风的声音，依然清晰得不像回忆。这个地方教会我的，不是某个惊天动地的历史事件，而是一种关于“如何生活”的细腻哲学。它美得如此毫不费力，不是因为精心设计的景点，而是因为这里的人们，依然选择在几百年前的石头房子里，过一种注重阳光、海风、邻里问候和一顿漫长晚餐的生活。这种生活本身，就是最动人的风景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、一切都要“快”和“新”的世界里，罗维尼像一个温柔的悖论。它的一切都是“慢”和“旧”的，却因此拥有了直抵人心的力量。它提醒着我们，真正的富足不在于拥有多少，而在于是否能与一片土地、一段历史、一种节奏深深地连接。每一位热爱深度游的旅人，都该来罗维尼住上几天。不是为了打卡，而是为了让自己在迷宫般的巷弄里，重新学习“迷失”的乐趣；在教堂的钟声里，感受时间的另一种维度；在日复一日的海潮声中，找回内心那份久违的、安静的喜悦。这里不是终点，而是一个让你重新思考旅程意义的起点。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
