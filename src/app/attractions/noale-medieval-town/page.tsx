import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '诺阿拉 Noale｜威尼斯内陆的时光琥珀，漫步在宁静护城河环绕的中世纪梦乡 - 最佳欧洲景点',
  description: '想象一下，你刚刚告别威尼斯水巷的喧嚣与海水的咸腥，坐上火车，窗外的风景在十几分钟内从潟湖切换成翠绿平坦的农田。然后，在一个不起眼的小站下车，沿着一条阳光斑驳的林荫道走上一刻钟。忽然间，一道平静如镜的水面拦在眼前，水面之上，一座简朴的红砖拱桥通向一道古老的砖砌城门。没有游客的洪流，没有纪念品商店的喧哗',
}

export default function NoaleMedievalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '诺阿拉', href: '/destinations/europe' },
            { label: '诺阿拉', href: '/attractions/noale-medieval-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`诺阿拉・Noale・意大利・诺阿拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你刚刚告别威尼斯水巷的喧嚣与海水的咸腥，坐上火车，窗外的风景在十几分钟内从潟湖切换成翠绿平坦的农田。然后，在一个不起眼的小站下车，沿着一条阳光斑驳的林荫道走上一刻钟。忽然间，一道平静如镜的水面拦在眼前，水面之上，一座简朴的红砖拱桥通向一道古老的砖砌城门。没有游客的洪流，没有纪念品商店的喧哗，只有水流缓慢的潺潺声，和风吹过岸边老柳树的沙沙响。这就是诺阿拉给你的第一记温柔撞击——它用一圈碧绿的护城河，将自己与外面的现代世界静静隔开，像一个被封存在琥珀里的中世纪之梦。
走过拱桥，穿过门洞，时间仿佛自动调慢了发条。脚下的石板路被岁月打磨得温润光滑，两旁是连绵的、有着高大拱窗和褪色百叶窗的砖石房屋。空气里的味道变了，不再是威尼斯的潮气和油炸海鲜味，而是混合了老旧石头晒过太阳后的暖意、从某户人家厨房飘出的罗勒酱香气，以及护城河边潮湿的青草味。你的耳朵会捕捉到更生活化的声音：广场上咖啡馆里杯碟碰撞的轻响，老太太们提着菜篮用浓重方言交谈的片段，还有远处不知哪个作坊里隐约传来的敲打声。这里没有“景点”的疏离感，你闯进的，是一个依然在正常运转的、有着数百年心跳的古老社区。
而小镇的灵魂，无疑是那条至今依然活着的护城河。它不是一潭死水，而是活水环绕，河水在阳光下泛着粼粼波光，倒映着砖墙、绿树和天空的云影。鸭子家族悠然地列队巡游，偶尔有当地居民沿着河岸慢跑或遛狗。这条河曾是生死攸关的防御屏障，如今却成了小镇最诗意的绿色项链，是居民们日常散步的后花园。这种从军事防御到生活景观的平和转变，恰恰是诺阿拉最动人的魅力——它没有被战争或时间摧毁，而是被时间温柔地转化了。
最让人着迷的对比，在于小镇中心。一面是宏伟的、带着垛口的钟楼（Torre dell‘Orologio）和开阔的圣乔瓦尼广场，那里充满了意大利小镇特有的、鲜活市井的生活气息。而仅仅几步之遥，穿过一条小巷，你就来到了城堡遗迹（Rocca dei Tempesta）前。残破的红砖高墙沉默矗立，拱窗空洞，野草从墙缝中顽强探出，在风中轻轻摇曳。辉煌与残破，喧嚣与宁静，生活与历史，在这里毫无隔阂地交织在一起。你不只是在“参观”一个遗迹，你是走在一个仍然用它的脉络、它的呼吸，承载着这一切记忆的活体之中。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想象一下，你刚刚告别威尼斯水巷的喧嚣与海水的咸腥，坐上火车，窗外的风景在十几分钟内从潟湖切换成翠绿平坦的农田。然后，在一个不起眼的小站下车，沿着一条阳光斑驳的林荫道走上一刻钟。忽然间，一道平静如镜的水面拦在眼前，水面之上，一座简朴的红砖拱桥通向一道古老的砖砌城门。没有游客的洪流，没有纪念品商店的喧哗，只有水流缓慢的潺潺声，和风吹过岸边老柳树的沙沙响。这就是诺阿拉给你的第一记温柔撞击——它用一圈碧绿的护城河，将自己与外面的现代世界静静隔开，像一个被封存在琥珀里的中世纪之梦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走过拱桥，穿过门洞，时间仿佛自动调慢了发条。脚下的石板路被岁月打磨得温润光滑，两旁是连绵的、有着高大拱窗和褪色百叶窗的砖石房屋。空气里的味道变了，不再是威尼斯的潮气和油炸海鲜味，而是混合了老旧石头晒过太阳后的暖意、从某户人家厨房飘出的罗勒酱香气，以及护城河边潮湿的青草味。你的耳朵会捕捉到更生活化的声音：广场上咖啡馆里杯碟碰撞的轻响，老太太们提着菜篮用浓重方言交谈的片段，还有远处不知哪个作坊里隐约传来的敲打声。这里没有“景点”的疏离感，你闯进的，是一个依然在正常运转的、有着数百年心跳的古老社区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而小镇的灵魂，无疑是那条至今依然活着的护城河。它不是一潭死水，而是活水环绕，河水在阳光下泛着粼粼波光，倒映着砖墙、绿树和天空的云影。鸭子家族悠然地列队巡游，偶尔有当地居民沿着河岸慢跑或遛狗。这条河曾是生死攸关的防御屏障，如今却成了小镇最诗意的绿色项链，是居民们日常散步的后花园。这种从军事防御到生活景观的平和转变，恰恰是诺阿拉最动人的魅力——它没有被战争或时间摧毁，而是被时间温柔地转化了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最让人着迷的对比，在于小镇中心。一面是宏伟的、带着垛口的钟楼（Torre dell‘Orologio）和开阔的圣乔瓦尼广场，那里充满了意大利小镇特有的、鲜活市井的生活气息。而仅仅几步之遥，穿过一条小巷，你就来到了城堡遗迹（Rocca dei Tempesta）前。残破的红砖高墙沉默矗立，拱窗空洞，野草从墙缝中顽强探出，在风中轻轻摇曳。辉煌与残破，喧嚣与宁静，生活与历史，在这里毫无隔阂地交织在一起。你不只是在“参观”一个遗迹，你是走在一个仍然用它的脉络、它的呼吸，承载着这一切记忆的活体之中。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`诺阿拉`} />
                <InfoRow label="英文名称" value={`Noale`} />
                <InfoRow label="正式名称" value={`Noale`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`诺阿拉`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`威尼斯共和国在陆地领土上最重要、保存最完好的防御前哨城镇之一。`} />
                <InfoRow label="建筑特色" value={`独特的双层防御系统——外有完整环形护城河，内有红砖砌筑的城墙、塔楼与城堡遗迹，钟楼与广场构成小镇跳动的心脏。`} />
                <InfoRow label="建筑风格" value={`威尼托地区典型的砖砌中世纪军事建筑与后期威尼斯哥特式民用建筑的和谐融合。`} />
                <InfoRow label="文化价值" value={`一个仍然在呼吸、生活着的“活态”中世纪社区标本，而非冰冷的博物馆，完美体现了防御工事与日常生活的共生关系。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要的城堡遗迹（罗卡德伊·托尼）围栏区域，开放时间通常为日出至日落，具体可能因季节和私人活动略有调整。小镇博物馆和钟楼（Torre dell‘Orologio）有固定开放时段，一般为周二至周日上午10点至下午1点，下午3点至6点，周一闭馆。建议行前在当地旅游信息中心或官网确认最新时间。`} />
              <InfoRow label="门票价格" value={`进入诺阿拉小镇本身完全免费。登上钟楼参观象征性收费约2-3欧元，有时包含在当地博物馆的联票中（约5欧元）。城堡遗迹外部参观免费，若遇内部特定区域临时展览可能单独收费。优惠政策通常适用于学生、65岁以上老人及团体。`} />
              <InfoRow label="地址" value={`Piazza Castello, 1, 30033 Noale VE, Italy`} />
              <InfoRow label="交通方式" value={`从威尼斯马可波罗机场（VCE）出发，最便捷的方式是先乘坐机场大巴（ATVO或ACTV公司的巴士）到梅斯特雷火车站（Venezia Mestre），车程约20分钟，班次频繁。在梅斯特雷火车站，乘坐前往特雷维索或卡斯特弗兰科方向的区域火车（Regionale），在“Noale-Scorzè”站下车，车程约15-20分钟，每小时约有2-3班车。从火车站出来，沿着指示牌或Via Roma主街步行约10-15分钟，即可抵达被护城河环绕的古镇中心。自驾则从A4或A27高速公路下来，有清晰路标，小镇外围有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诺阿拉的故事，始于威尼斯共和国那双望向内陆的、充满警惕与野心的眼睛。大约在11世纪，这片位于布伦塔河与穆尼奥内河之间的肥沃土地，被威尼斯的一个贵族家族——腾普斯塔家族（Tempesta）所控制。他们的头衔听起来就像武侠小说：“特雷维索的领主”。但对于威尼斯这座依靠海洋贸易而富甲一方的城邦来说，大陆腹地既是粮仓，也是软肋。来自北方神圣罗马帝国皇帝或米兰公爵的陆上威胁，始终像达摩克利斯之剑悬在头顶。于是，将前沿防线推进，建立坚固的陆地堡垒，就成了必然的战略。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "腾普斯塔家族深刻理解这一点。他们选址于此，开始构筑一个经典的“城堡-村庄”防御体系。核心是先建造一座坚固的城堡（Rocca），作为家族权力和军事指挥的中心。然后，奇迹般的一步来了：他们不是仅仅躲在城堡里，而是有计划地围绕城堡，修建了一道完整的环形护城河，并在河内规划了街道、广场，鼓励平民和工匠在河内定居，形成一座有自我生命的小镇。这道护城河是关键，它平均宽约25米，引入活水，让诺阿拉成为一座名副其实的“水环之城”。到13世纪，随着第二道更外围的城墙和更多塔楼的修建，诺阿拉成为了威尼斯共和国大陆领土（Terraferma）上最坚固的防御节点之一，是抵御来自帕多瓦或维罗纳方向进攻的盾牌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的命运随着大陆的烽火而起伏。14世纪初，强大的米兰维斯孔蒂家族的铁蹄南侵，诺阿拉的城堡经历了惨烈的围攻。据说，正是这场战役后，为了更好预警，那座高达33米的钟楼被加建并配备了瞭望功能。钟楼上的时钟是后来添上的，它日夜不息地提醒着居民时间的流逝与和平的珍贵。当威尼斯在15世纪初彻底征服了整个威尼托地区，边境线北移，诺阿拉的尖刀前沿地位有所下降，但它转而进入了和平发展的黄金时期。广场周围的优雅拱廊建筑、贵族府邸相继建成，小镇从纯粹的军事堡垒，演变为一个繁荣的农业和手工业中心。护城河不再需要阻隔敌人，反而成了运输货物、灌溉农田的便利通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拿破仑时代的旋风席卷意大利时，诺阿拉也无法幸免。威尼斯共和国灭亡，新来的统治者认为中世纪城堡是过时的象征，甚至是潜在的叛乱据点。于是，城堡（Rocca）被部分拆除，石材被挪作他用，只留下我们今天看到的、令人唏嘘的残垣断壁。它像一个被时光凝固的伤口，诉说着暴力与变迁。但有趣的是，小镇的生活核心——护城河内的社区——却顽强地存活了下来。居民们没有抛弃这片祖先的土地，他们继续在古老的房子里生活，在广场上交易，在钟楼的注视下度过日复一日。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入现代，特别是二战后，诺阿拉迎来了新的觉醒。人们开始重新审视这条几乎被遗忘的护城河和残破城堡的价值。这不是为了重建一个迪士尼式的中世纪主题公园，而是进行谨慎的修复和保护，清理河道，加固遗迹，让它们安全地融入现代生活。今天的诺阿拉，是一个鲜活的悖论：它既是意大利国家认定的重要历史遗产，又是一个拥有上万人口的活跃市镇。它的历史不是锁在玻璃柜里的，而是流淌在河水中，砌在每一块红砖里，回荡在周五广场集市的笑语声中。它告诉我们，历史最好的保存方式，有时不是供奉，而是温柔地接纳，让它成为当下生活呼吸的一部分。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美探索诺阿拉需要大半天时间，最佳抵达时间是上午九点左右。这时晨雾刚刚散去，阳光温柔地洒在红砖墙上，小镇刚刚苏醒，本地居民开始一天的忙碌，游客却还寥寥无几。整个游览节奏应该是极度悠闲的“漫步-发现”式，预计耗时4-5小时，包括一杯悠闲的咖啡和一顿简单的午餐。建议从外围走近，由外而内，先感受护城河的宁静气场，再深入小镇中心体验生活脉搏，最后探访寂静的遗迹，形成从平和到鲜活再到沉思的情感曲线。这样的安排让你能充分体会小镇军事防御与日常生活的双重灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周末的午餐时间（下午1-3点）来到主广场，那时可能挤满本地家庭聚餐，难以找到安静感受空间的座位。小镇石板路古老但不完全平坦，请务必穿一双舒适耐走的平底鞋。不要试图寻找“城堡入口”或买票进入遗迹内部，它的魅力就在于从外部感受那份残缺的沧桑与宁静。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来后别急着直奔中心，先沿着Via Roma走，让你的第一眼印象定格在护城河与古老砖砌城门形成的完美水岸画卷上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过斯卡利杰拉城门后，别立刻进入主广场，向左或向右拐，沿着安静的护城河内侧小径完整走上一小段，感受河水的气息与城墙倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到圣乔瓦尼广场，在带有拱廊的百年历史咖啡馆“Bar al Portico”露天座位坐下，点一杯意式浓缩，静静观察钟楼下来来往往、互相寒暄的本地人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气登上钟楼的狭窄旋梯，在顶层将整个红瓦屋顶的迷宫、完整的护城河绿环以及远方威尼托平原的边际线尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从钟楼下来，沿着指示牌寻找城堡遗迹，站在残破的拱门下，触摸那些粗糙的红砖，想象这里曾有的喧嚣与荣光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意钻进一条从广场辐射出去的小巷，比如Via Castelvecchio，留意那些门楣上的古老徽章、充满生活气息的庭院和可能偶遇的小型手工艺品作坊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在午餐时间，选择一家不在主广场上、而是藏在某条小巷里的家庭式餐馆（Trattoria），尝尝用本地农产品烹饪的威尼托家常菜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，务必再次绕到护城河的外侧，从另一个角度回望小镇，尤其是在傍晚时分，看夕阳为砖墙和钟楼镀上一层温暖的金晖。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河西北角拱桥与城门倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在护城河外西北侧岸边，利用平静的水面拍摄斯卡利杰拉城门及其完整倒影，构图时将拱桥石栏作为前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`钟楼顶俯瞰红瓦迷宫`}</h4>
                  <p className="text-sm text-gray-700">{`登上钟楼后，避开正午顶光，在上午或下午使用中长焦镜头，捕捉护城河环绕下层层叠叠、错落有致的红瓦屋顶与远处田野的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡遗迹拱门框景`}</h4>
                  <p className="text-sm text-gray-700">{`站在城堡残存的某个高大拱门内，将镜头对准门洞外的绿色草地、树木或远处的现代民居，用古老的残垣框架住今天的生命。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小巷光影与生活细节`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，钻进如Via Castelvecchio这样的小巷，捕捉光线在老旧砖墙、晾晒的衣物、窗台鲜花上形成的明暗对比与生活质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`护城河畔的绿意长廊`}</h4>
                  <p className="text-sm text-gray-700">{`从内侧沿河小径上，以低角度拍摄，让充满生机的绿草和柳枝作为前景，中景是平静的河水，背景是沉稳的砖砌城墙与房屋。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`早晚的“黄金小时”光线最能衬托红砖的温暖质感与护城河的柔和反光，正午阳光强烈，适合捕捉建筑结构的清晰轮廓和鲜明阴影。当地居民对拍照普遍友善，但拍摄私人庭院或人物特写前，一个微笑和手势征询是基本的礼貌。使用无人机拍摄前务必查清当地法规，小镇中心及历史区域通常严格禁飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于古镇边缘一栋18世纪宅邸改造的温馨民宿“Casa delle Rose”，主人会为你手绘小镇探索地图，清晨在爬满玫瑰的小花园享用家庭自制早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在护城河畔由古老水磨坊修复的精品酒店“Molino di Noale”，房间保留了原始的木梁和石墙，每晚枕着潺潺水声入眠，真正融入小镇的水岸历史。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟抵达郊外被葡萄园环绕的豪华农庄酒店“Tenuta Ca‘ Tasson”，享受静谧的托斯卡纳式庄园氛围，在无边泳池边就能遥望诺阿拉钟楼的剪影。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`中转便利`}</h4>
                  <p className="text-sm text-purple-800">{`梅斯特雷火车站附近的现代设计酒店，适合仅计划白天游览诺阿拉、晚上想方便返回威尼斯或前往机场的旅客，交通极为便捷。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诺阿拉本镇的特色住宿数量非常有限，尤其在夏季和周末，务必提前数月预订。小镇治安极好，夜晚非常安静，但即便如此，选择有安全门禁的住处总是更安心。若选择住在镇外农庄，请确保有自驾车，否则夜间出行会很不方便。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开诺阿拉很久之后，我发现自己最常回想起的，不是某座具体的建筑，而是那种整体的、包裹全身的宁静感。那是一种有声音的宁静——河水流淌，风吹树叶，远处教堂钟声，近处邻里问候。它不同于荒野的寂静，这是一种被人类文明精心呵护了上千年、沉淀了无数生活故事之后，生长出来的平和与安详。在这里，历史没有成为需要买票进入的展厅，它就是你脚下略不平整的石板，是你手边被无数代人倚靠过的砖墙，是老太太从窗口望向你这个陌生来客时，眼中那份见惯时光流转的淡然。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都在追求“更快”、“更刺激”、“更网红”的时代，诺阿拉的存在像一种温柔的抵抗。它提醒我们，深度旅行的意义，有时恰恰在于“慢下来”和“无所事事”。它不提供震撼的奇观，却给予你一种难得的“归属错觉”——哪怕只有几个小时，你感觉自己不是闯入者，而是这个古老生命体一次平静呼吸的见证者。对于每一位厌倦了打卡、渴望在旅途中找到内心回响的旅人来说，诺阿拉都值得你专程绕一段路，花上半天时光。它会像一枚温润的琥珀，将一段关于宁静、时光与共生的记忆，封存在你的心里。这，或许就是对抗遗忘最好的方式。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/crypt-of-original-sin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    原
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">原罪地穴</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Crypt of Original Sin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/narni-sotterranea" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳尔尼古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Narni Sotterranea</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viterbo-papal-palace-medieval-quarter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维泰博（教皇宫及中世纪区）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viterbo (Papal Palace and Medieval Quarter)</p>
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
