import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '罗维尼老城 Rovinj Old Town｜亚得里亚海的彩色宝石，迷失在威尼斯风情的巷弄与钟声里 - 最佳欧洲景点',
  description: '你第一眼看到罗维尼，绝对不会相信它是真实的。它就像从某个极致浪漫的童话绘本里直接搬出来，不小心掉进了亚得里亚海蔚蓝的怀抱。车还在环绕着海湾的公路上行驶，远处那个狭长的半岛就猝不及防地撞进视线——一座由暖色调房子密密麻麻、层层叠叠堆积起来的小山，山顶一座巨大的教堂和它旁边细长的钟塔，像一根定海神针，稳...',
}

export default function RovinjOldTownIstriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗维尼老城', href: '/attractions/rovinj-old-town-istria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`罗维尼老城・Rovinj Old Town・克罗地亚・伊斯特拉县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到罗维尼，绝对不会相信它是真实的。它就像从某个极致浪漫的童话绘本里直接搬出来，不小心掉进了亚得里亚海蔚蓝的怀抱。车还在环绕着海湾的公路上行驶，远处那个狭长的半岛就猝不及防地撞进视线——一座由暖色调房子密密麻麻、层层叠叠堆积起来的小山，山顶一座巨大的教堂和它旁边细长的钟塔，像一根定海神针，稳稳地镇住这片由红瓦、碧海与蓝天构成的、快要满溢出来的诗意。空气里是海风咸湿的气息，混合着路边松树和迷迭香的清新味道。
当你真正走进老城，时间立刻慢了下来。脚下的不是路，而是被几个世纪的人来人往打磨得温润光滑的石灰岩石板，缝隙里透着潮湿的凉意。巷子窄得夸张，两边的彩色墙壁仿佛要亲吻在一起，只在头顶留下一线天光。你忍不住伸手触摸那些斑驳的墙面，赭石色、蜜桃粉、鹅蛋黄……油漆在亚得里亚海的阳光和盐风中褪成无比高级的莫兰迪色系。耳边是各种语言的低语、咖啡馆杯碟的轻响，以及从高处不知哪个窗台飘下来的手风琴声。晾晒在窗外的床单随风轻摆，阳台上垂下的九重葛开得轰轰烈烈，紫红色瀑布般洒下来。这里不像一个纯粹的博物馆，而是一个依然活着的、呼吸着的老社区，转角就能遇见拎着菜篮缓缓回家的老奶奶，或是在自家门口修理渔船缆绳的渔民。
而这一切的终点，或者说制高点，必然是圣尤菲米娅教堂。你需要一点体力，沿着不断上升、迂回曲折的巷弄向上攀登。这个过程本身就像一场朝圣。每到一个稍微开阔的转弯处回头望，脚下房屋的瓦顶就如波浪般向海边蔓延，海水的颜色从近处的透明绿，渐变成远处的深邃蓝，帆船的白色桅杆星星点点。最后，当你终于站在教堂前那片宽阔的广场上，迎着毫无遮挡的海风时，那种豁然开朗的震撼无以言表。钟楼就在头顶，仿佛直通天际。你会发现，罗维尼的美，不只是明信片式的风景，更是一种将世俗生活与神圣向往、人间烟火与无尽大海完美融合在一起的、充满生命力的和谐。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到罗维尼，绝对不会相信它是真实的。它就像从某个极致浪漫的童话绘本里直接搬出来，不小心掉进了亚得里亚海蔚蓝的怀抱。车还在环绕着海湾的公路上行驶，远处那个狭长的半岛就猝不及防地撞进视线——一座由暖色调房子密密麻麻、层层叠叠堆积起来的小山，山顶一座巨大的教堂和它旁边细长的钟塔，像一根定海神针，稳稳地镇住这片由红瓦、碧海与蓝天构成的、快要满溢出来的诗意。空气里是海风咸湿的气息，混合着路边松树和迷迭香的清新味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你真正走进老城，时间立刻慢了下来。脚下的不是路，而是被几个世纪的人来人往打磨得温润光滑的石灰岩石板，缝隙里透着潮湿的凉意。巷子窄得夸张，两边的彩色墙壁仿佛要亲吻在一起，只在头顶留下一线天光。你忍不住伸手触摸那些斑驳的墙面，赭石色、蜜桃粉、鹅蛋黄……油漆在亚得里亚海的阳光和盐风中褪成无比高级的莫兰迪色系。耳边是各种语言的低语、咖啡馆杯碟的轻响，以及从高处不知哪个窗台飘下来的手风琴声。晾晒在窗外的床单随风轻摆，阳台上垂下的九重葛开得轰轰烈烈，紫红色瀑布般洒下来。这里不像一个纯粹的博物馆，而是一个依然活着的、呼吸着的老社区，转角就能遇见拎着菜篮缓缓回家的老奶奶，或是在自家门口修理渔船缆绳的渔民。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的终点，或者说制高点，必然是圣尤菲米娅教堂。你需要一点体力，沿着不断上升、迂回曲折的巷弄向上攀登。这个过程本身就像一场朝圣。每到一个稍微开阔的转弯处回头望，脚下房屋的瓦顶就如波浪般向海边蔓延，海水的颜色从近处的透明绿，渐变成远处的深邃蓝，帆船的白色桅杆星星点点。最后，当你终于站在教堂前那片宽阔的广场上，迎着毫无遮挡的海风时，那种豁然开朗的震撼无以言表。钟楼就在头顶，仿佛直通天际。你会发现，罗维尼的美，不只是明信片式的风景，更是一种将世俗生活与神圣向往、人间烟火与无尽大海完美融合在一起的、充满生命力的和谐。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`罗维尼老城`} />
                <InfoRow label="英文名称" value={`Rovinj Old Town`} />
                <InfoRow label="正式名称" value={`Rovinj Old Town`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`伊斯特拉县`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座由渔业村落演变为威尼斯共和国海上要塞，最终成为克罗地亚最负盛名的旅游明珠的半岛古城。`} />
                <InfoRow label="建筑特色" value={`密集的威尼斯风格房屋像七彩积木般紧挨着堆叠在临海的山坡上，顶端矗立着宏伟的巴洛克式教堂与高耸钟塔，形成极具戏剧性的天际线。`} />
                <InfoRow label="建筑风格" value={`以威尼斯哥特式与巴洛克风格为主，混合了哈布斯堡王朝时期的古典主义元素，外墙普遍采用温暖的赭石、橘粉和鹅黄色。`} />
                <InfoRow label="文化价值" value={`生动展现了伊斯特拉半岛作为意大利、斯拉夫和奥匈帝国文化十字路口的独特身份，其语言、美食和日常生活都是这种多元融合的活态证明。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区域全天开放。地标性建筑圣尤菲米娅大教堂的塔楼和内部参观有具体时间：夏季（4月至10月）通常为上午10点至下午7点，冬季（11月至3月）开放时间缩短，常为上午10点至下午4点，且可能因天气或宗教活动临时关闭。建议行前查阅最新信息。`} />
              <InfoRow label="门票价格" value={`进入罗维尼老城本身免费。登顶圣尤菲米娅大教堂钟楼需要购票，票价约30-40克罗地亚库纳（约合4-5欧元）。部分小型画廊或博物馆需单独购票，价格一般在20-50库纳之间。`} />
              <InfoRow label="地址" value={`Rovinj Old Town, 52210, Rovinj, Croatia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是普拉机场（PUY），距离罗维尼约40公里。从机场最便捷的方式是乘坐出租车或提前预订的接送服务，车程约40分钟。也可以先乘坐巴士到普拉市中心巴士站，再换乘前往罗维尼的本地巴士，总耗时约1.5小时。从萨格勒布或威尼斯等大城市有长途巴士直达罗维尼巴士站，车站步行至老城入口约10-15分钟。城内无火车直达。自驾车需将车停在老城外围的收费停车场，然后步行进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`罗维尼的故事，深深刻在它每一块石头的纹理里。最早，这里只是一个名叫“鲁比尼乌姆”的罗马人定居点，建在一个易于防御的岛屿上。七世纪左右，斯拉夫人来到这里，与原先的罗马-拜占庭居民逐渐融合。它的命运转折点发生在1283年，强大的威尼斯共和国将其纳入麾下。接下来的近五百年，威尼斯人的印记如同海水浸渍，深深渗透进这座城市的骨骼与灵魂。为了防御奥斯曼土耳其人的海上威胁，威尼斯人修建了坚固的城墙（如今只剩下几座城门），并将原本的岛屿通过填海造地与大陆相连，形成了今天的半岛形态。那时的罗维尼，是威尼斯在伊斯特拉半岛重要的海军与贸易据点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城市的经济命脉是渔业和造船。你如今在老城港口看到的那些色彩鲜艳的“batana”平底木船，就是罗维尼传统渔船的标志，其设计数百年来几乎没有改变。威尼斯人的统治带来了他们的建筑风格、行政体系和拉丁文化的深刻影响，意大利语成为官方语言，许多家族至今仍拥有意大利姓氏。然而，威尼斯的荣光在十八世纪末随着共和国的崩溃而熄灭。拿破仑的铁蹄短暂踏过，随后罗维尼又进入了奥匈帝国的漫长统治时期。这段哈布斯堡王朝的岁月为城市增添了一层中欧的 orderly 与典雅气质，一些新古典主义的立面出现在老建筑上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让罗维尼在精神上找到“守护神”的，是一个充满传奇色彩的事件。公元800年左右，一位名叫尤菲米娅的基督教殉道少女的石棺，据传奇迹般地从小亚细亚漂洋过海，最终抵达了罗维尼的海岸。当地人视其为神迹，尊奉圣尤菲米娅为城市的保护神。我们现在看到的宏伟的巴洛克式圣尤菲米娅大教堂，建于十八世纪，正是为了供奉她而建。那座高耸的钟楼，明显仿造了威尼斯圣马可钟楼的样式，顶端立着圣尤菲米娅的铜像，随风转动，为水手指引方向。这座教堂不仅是信仰的中心，也成为了罗维尼无可争议的地标与精神象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪的风云变幻同样席卷了这座小城。经历了两次世界大战，它的归属在意大利、南斯拉夫之间几经更迭，最终在1991年成为独立克罗地亚的一部分。战火幸而未严重摧毁它的容颜，但带来了人口结构的变化和一段时间的沉寂。直到近二三十年，它那无与伦比的美丽被世界重新发现，旅游业取代渔业成为新的支柱。聪明的罗维尼人没有把老城变成空洞的布景，而是小心翼翼地维持着它的生活气息。艺术家们被这里的色彩与光线吸引，纷纷开设画廊和工作室；渔民的后代将祖传的房子改造成温馨的民宿或餐馆。今天的罗维尼，是一部活着的、依然在书写的编年史，每一层历史的油彩都依然鲜明可辨，共同调和出它独一无二的魅力。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味罗维尼，请务必预留一整个白天，并做好“迷失”的心理准备。最佳抵达时间是清晨九点前，这时旅行团的大巴还未涌入，阳光柔和，本地人刚开始一天的生活，巷子里弥漫着咖啡和新鲜面包的香气。建议游览节奏为“先宏观后微观，先爬高再走低”：上午精力充沛时，直接穿越迷宫般的老城巷弄登顶圣尤菲米娅教堂，俯瞰全景，建立空间感；中午在港口附近寻找午餐，感受热闹氛围；下午则放慢脚步，深入那些岔路和小广场，逛逛画廊，甚至找个阴凉处发呆看海。整体耗时约6-8小时，是一场松弛有度、充分调动所有感官的漫步之旅。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适、防滑的平底鞋，那些光滑的石板路在雨后或清晨非常容易打滑。中午到下午三点是老城最拥挤的时段，热门拍照点可能需要排队，建议将核心参观安排在早或晚。港口边的餐厅价格通常较高，往小巷里走五十米，往往能找到性价比更高、本地人更常光顾的实惠小馆。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从巴尔比拱门进入老城，立刻让自己迷失在第一条向右蜿蜒上升的、挂着鲜花的狭窄石阶小巷里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`朝着钟塔的方向随意攀登，途中留意那些古老门楣上的威尼斯雄狮浮雕、生锈的华丽门灯和居民窗台上的小猫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一鼓作气登上圣尤菲米娅教堂前开阔的广场，靠在石栏杆上喘口气，让360度的无敌海景和老城红屋顶全景洗刷你的眼睛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间进入阴凉安静的教堂内部，仰望祭坛上圣尤菲米娅的壮丽雕像，感受那份庄严的宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧面一条不那么起眼的小路下山，目标明确地寻找隐藏在半山腰的“艺术巷”，那里挤满了小而美的独立画廊和工艺品店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到老城西侧临海的悬崖步道，找一张面对落日方向的长椅坐下，看海浪拍打礁石，等待日光慢慢变得金黄。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山回到主港口，沿着码头漫步，挑选一家有户外座位的餐厅，用一盘新鲜捕捞的烤鱼或伊斯特拉特色黑松露意大利面结束这完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老城港口对面防波堤上`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，以整个彩色半岛和钟塔为背景，利用水面的倒影和停泊的传统木船作为前景，构图饱满而富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣尤菲米娅教堂钟楼顶端`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后（需购票），用长焦镜头俯瞰，捕捉老城密集的红色屋顶像波浪一样涌向大海的震撼纹理，以及远处绿色岛屿的点缀。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“ Grisia ” 艺术街的台阶中段`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，站在台阶下方向上看，捕捉两侧五彩墙壁夹着陡峭石阶、光影分明的纵深感，等待一个当地人上下楼的瞬间增添生动感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城西北侧海岸岩石上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨，从这里可以拍摄到朝阳照亮老城侧面以及钟塔的经典明信片角度，结合嶙峋的礁石和清澈的海水，画面宁静而有力。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，避免将镜头直接对准居民家的窗户或院内。使用无人机在克罗地亚城市和文化遗产上空飞行有严格限制，通常需要提前申请，在老城上空飞行基本不被允许，请务必事先查清法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住老城中心一栋有数百年历史的石头房子改造的公寓，清晨在只有鸟鸣和教堂钟声的巷弄中醒来，仿佛拥有了整座古城。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感之选`}</h4>
                  <p className="text-sm text-green-800">{`位于老城边缘一栋经过极致改造的现代风格精品酒店，拥有俯瞰港口和钟塔的无敌露台，在古典外壳里享受当代的舒适。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`港湾风情`}</h4>
                  <p className="text-sm text-yellow-800">{`住在主港口附近一家家庭经营的 pension，房间窗户正对来来往往的船只，晚上伴着轻轻的海浪声入眠，体验真正的渔港生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静度假`}</h4>
                  <p className="text-sm text-purple-800">{`选择距离老城步行15分钟、隐藏在松林中的一家小型高级酒店，拥有私人海滩和泳池，闹中取静，适合想要放松的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿通常需要爬很多台阶且可能没有电梯，预订时务必确认。夏季（7-8月）是绝对旺季，住宿价格飙升且一房难求，强烈建议提前3-6个月预订。如果想体验更本地化的生活，可以考虑老城外围步行可达的居民区，价格更实惠，且能找到免费街边停车的可能。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开罗维尼很久以后，你可能记不清某条小巷的具体名字，但那种混合着海水咸味、石头凉意、咖啡香气和九重葛花影的复合感受，会长久地停留在记忆的某个角落。它不像一些宏伟古迹那样用力量压倒你，而是用一種温暖、琐碎而坚韧的美，丝丝缕缕地将你缠绕。你会发现，你怀念的不仅仅是那片风景，更是那种“允许迷失”的状态——在一个安全而美丽的迷宫里，每一次转弯都是惊喜，每一步向上都离天空和大海更近，时间失去了紧迫感，只剩下当下的光影与呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都被快速消费的时代，罗维尼固执地保留着另一种生活节奏的可能性。它告诉我们，美不必总是庄严孤高的，它可以与晾晒的床单、修补的渔网、午后咖啡馆里的闲谈共生。这座曾经的要塞，如今用它全部的色彩和光线，抵御着现代的千篇一律与浮躁。对于每一位渴望深度游的旅人来说，罗维尼不仅仅是一个目的地，更是一剂温柔的解毒剂。它邀请你停下来，用心走一段路，用皮肤感受风与阳光，用眼睛收藏每一扇窗的色彩，最终，把你的心也染上一点亚得里亚海特有的、浪漫而宁静的蓝。这，正是我们千里迢迢出发寻找的意义。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bamberg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班贝格老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bamberg Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spoleto" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/korcula" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔丘拉岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Korčula</p>
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
