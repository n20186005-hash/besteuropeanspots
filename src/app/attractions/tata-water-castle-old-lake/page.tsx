import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '陶陶水上城堡 Tata Water Castle｜匈牙利文艺复兴明珠与天鹅共舞的湖上梦境 - 最佳欧洲景点',
  description: '第一眼看到陶陶的湖上城堡时，我恍惚以为自己闯进了一本褪色的童话书插图里。那不是一个耸立在悬崖上的、具有攻击性的堡垒，而是一个温柔地泊在巨大镜面般湖泊中央的四方院落。城堡的石墙直接从墨绿色的湖水中拔起，四角圆润的塔楼把倒影拉得很长很长。空气里有水藻淡淡的腥味，混合着岸边百年老树散发的木质清香。最动人心...',
}

export default function TataWaterCastleOldLakePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '陶陶（老湖上的水上城堡）', href: '/attractions/tata-water-castle-old-lake' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`陶陶（老湖上的水上城堡）・Tata (Water Castle on theOld Lake)・匈牙利・陶陶`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到陶陶的湖上城堡时，我恍惚以为自己闯进了一本褪色的童话书插图里。那不是一个耸立在悬崖上的、具有攻击性的堡垒，而是一个温柔地泊在巨大镜面般湖泊中央的四方院落。城堡的石墙直接从墨绿色的湖水中拔起，四角圆润的塔楼把倒影拉得很长很长。空气里有水藻淡淡的腥味，混合着岸边百年老树散发的木质清香。最动人心魄的是那些天鹅——五六只，或许更多，它们像城堡沉默的守卫，又像移动的白色浮标，不疾不徐地划开水面，在城堡的倒影里留下长长的“V”字涟漪。那一刻，喧嚣的世界被隔绝在湖岸之外，只有风穿过拱廊的细微声响，和远处孩子向天鹅投喂面包屑的欢快惊叫。
这里绝不仅仅是游客的打卡地。你会看到头发花白的老夫妻挽着手，沿着环湖小径慢慢地走，时不时停下来指一指对岸树林里新开的花；穿着运动服的年轻人绕着湖跑步，呼吸的节奏与脚下沙沙的声响融为一体；还有父亲带着儿子在栈桥上安静垂钓，他们的背影和城堡构成一幅静止的油画。这座城堡早已褪去军事的锋利，像一位退休的老绅士，将自己融入小镇每日的呼吸与脉搏中，成了当地人散步、约会、发呆的后花园。它的核心魅力，正是这种毫无距离感的、生活化的诗意。
走近了看，城堡的石墙并不是冷酷的。几百年风雨和湖水湿气的浸润，让石材表面覆盖了一层斑驳的苔藓和深浅不一的水渍，像时间亲手绘制的地图。你可以把手掌贴在微凉潮湿的墙上，仿佛能感到历史缓慢的脉搏。拱廊下的阴影里特别凉爽，阳光透过拱门，在地上切割出明亮的光斑。当你站在某个拱门下，向外望去，框景里是波光粼粼的湖面和对岸的绿树，如同一幅不断变化的活体油画。这不仅仅是建筑，这是一个巨大的、充满灵性的感官装置，温柔地包裹着你所有的视觉、触觉和听觉。
最打动人心的时刻是在黄昏。当夕阳把天空染成金粉色，城堡的轮廓被勾勒成一幅精致的剪影。灯光从塔楼的窗口陆续亮起，倒映在暗下来的湖面上，碎成一片摇晃的金星。天鹅们游回芦苇丛中的巢穴，世界渐渐安静下来。你突然明白，为什么当年的国王和贵族会选择这里作为夏宫——不是为了炫耀武力，而是为了这份远离尘嚣、与自然之水融为一体的、深沉的宁静与慰藉。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到陶陶的湖上城堡时，我恍惚以为自己闯进了一本褪色的童话书插图里。那不是一个耸立在悬崖上的、具有攻击性的堡垒，而是一个温柔地泊在巨大镜面般湖泊中央的四方院落。城堡的石墙直接从墨绿色的湖水中拔起，四角圆润的塔楼把倒影拉得很长很长。空气里有水藻淡淡的腥味，混合着岸边百年老树散发的木质清香。最动人心魄的是那些天鹅——五六只，或许更多，它们像城堡沉默的守卫，又像移动的白色浮标，不疾不徐地划开水面，在城堡的倒影里留下长长的“V”字涟漪。那一刻，喧嚣的世界被隔绝在湖岸之外，只有风穿过拱廊的细微声响，和远处孩子向天鹅投喂面包屑的欢快惊叫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝不仅仅是游客的打卡地。你会看到头发花白的老夫妻挽着手，沿着环湖小径慢慢地走，时不时停下来指一指对岸树林里新开的花；穿着运动服的年轻人绕着湖跑步，呼吸的节奏与脚下沙沙的声响融为一体；还有父亲带着儿子在栈桥上安静垂钓，他们的背影和城堡构成一幅静止的油画。这座城堡早已褪去军事的锋利，像一位退休的老绅士，将自己融入小镇每日的呼吸与脉搏中，成了当地人散步、约会、发呆的后花园。它的核心魅力，正是这种毫无距离感的、生活化的诗意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了看，城堡的石墙并不是冷酷的。几百年风雨和湖水湿气的浸润，让石材表面覆盖了一层斑驳的苔藓和深浅不一的水渍，像时间亲手绘制的地图。你可以把手掌贴在微凉潮湿的墙上，仿佛能感到历史缓慢的脉搏。拱廊下的阴影里特别凉爽，阳光透过拱门，在地上切割出明亮的光斑。当你站在某个拱门下，向外望去，框景里是波光粼粼的湖面和对岸的绿树，如同一幅不断变化的活体油画。这不仅仅是建筑，这是一个巨大的、充满灵性的感官装置，温柔地包裹着你所有的视觉、触觉和听觉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的时刻是在黄昏。当夕阳把天空染成金粉色，城堡的轮廓被勾勒成一幅精致的剪影。灯光从塔楼的窗口陆续亮起，倒映在暗下来的湖面上，碎成一片摇晃的金星。天鹅们游回芦苇丛中的巢穴，世界渐渐安静下来。你突然明白，为什么当年的国王和贵族会选择这里作为夏宫——不是为了炫耀武力，而是为了这份远离尘嚣、与自然之水融为一体的、深沉的宁静与慰藉。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`陶陶（老湖上的水上城堡）`} />
                <InfoRow label="英文名称" value={`Tata (Water Castle on theOld Lake)`} />
                <InfoRow label="正式名称" value={`Tata Castle (Vízivár)`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`陶陶`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪匈牙利王国防御体系中至关重要的边境堡垒，后演变为文艺复兴时期匈牙利贵族的奢华夏宫，见证了奥斯曼帝国的扩张与匈牙利贵族文化的黄金时代。`} />
                <InfoRow label="建筑特色" value={`一座直接从宁静的老湖湖水中生长出来的矩形城堡，拥有四角高耸的圆形塔楼、优雅的拱廊和独特的亲水设计，宛如漂浮在水面的梦幻宫殿。`} />
                <InfoRow label="建筑风格" value={`最初为哥特式军事堡垒，在15-16世纪经大规模改建，融合了晚期哥特式与早期文艺复兴风格，形成独特的匈牙利文艺复兴建筑典范。`} />
                <InfoRow label="文化价值" value={`是匈牙利保存最完好的水上城堡之一，不仅体现了从中世纪防御工事到宜居宫殿的建筑演变史，其所在的湖滨公园系统也是欧洲早期浪漫主义园林设计的珍贵实例。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡博物馆开放时间随季节变化：四月至十月，周二至周日 10:00 - 18:00；十一月至三月，周二至周日 10:00 - 16:00。周一闭馆（节假日除外）。城堡庭院及外围湖区公园全年24小时开放。请注意，冬季部分展厅可能轮流维护关闭，出行前建议查阅官网最新公告。`} />
              <InfoRow label="门票价格" value={`城堡博物馆门票：成人 2200 福林，学生/老人 1100 福林。6岁以下儿童免费。家庭套票（2成人+2儿童）有优惠。仅游览城堡庭院及湖滨公园免费。每月第一个周六为文化日，博物馆免费入场。部分临时特展需额外购票。`} />
              <InfoRow label="地址" value={`Tata, Vár tér 1, 2890 Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发最便捷。在布达佩斯 Népliget 或 Stadionok 汽车站乘坐前往 Győr 或 Tata 方向的 Volánbusz 大巴，车程约1小时15分钟，班次频繁（约每小时一班），可直接在 Tata 镇中心下车，步行约10分钟即到湖边城堡。火车也可抵达 Tata 站，但班次较少，从火车站步行至城堡需20分钟。自驾从布达佩斯沿 M1 高速公路向西，在 Tata 出口下，跟随“Vár”或“Öreg-tó”标志行驶约10分钟可达，城堡附近有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从14世纪说起。那时，这里还不是浪漫的水上宫殿，而是一个战略要地。当时统治匈牙利的安茹王朝，需要在通往维也纳和西方的商路旁建立一个坚固的据点。于是，在老湖（Öreg-tó）中一个天然岩石岛上，一座纯粹的哥特式方形堡垒竖立了起来，拥有高墙和角楼，目的只有一个：防守。冰冷的石头浸在湖水里，是为了让敌人的攻城锤和地道无从下手。在随后的动荡岁月里，它确实履行了职责，默默守护着这片土地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正改变它命运的人，是15世纪一位传奇人物：匈牙利国王兼神圣罗马帝国皇帝西吉斯蒙德。他看中了这里的战略价值和自然美景，开始将堡垒扩建。但城堡的“黄金时代”，要等到另一位更重要的主人登场——匈雅提·马加什国王，也就是著名的马加什一世。这位文艺复兴时期伟大的匈牙利国王，不仅是军事天才，更是艺术与科学的狂热赞助人。在他的构想下，城堡开始从阴郁的堡垒向舒适的宫殿转型。意大利的建筑师和工匠被请来，他们带来了亚平宁半岛的新风。高耸的防御墙被打开，装上了轻盈的拱廊，以便更好地观赏湖景；内部空间被重新规划，出现了用于聚会和宴请的大厅。马加什国王希望这里成为他狩猎后休憩、与学者诗人畅谈的“水上行宫”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`可惜，好景不长。马加什一世去世后，匈牙利陷入内忧外患。最致命的威胁来自南方——奥斯曼帝国的大军。1526年莫哈奇战役的惨败，是匈牙利乃至整个中欧历史的转折点，王国一分为三。陶陶所在的区域成了哈布斯堡王朝统治下的“皇家匈牙利”前线。城堡再次被强化军事功能，以抵御可能北上的土耳其人。烽火与硝烟一度取代了诗歌与宴乐。在接下来的近两百年里，它时而驻军，时而荒废，在战争与和平的间隙里挣扎生存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在18世纪。随着奥斯曼的威胁逐渐消退，和平终于降临。城堡当时的领主，埃斯特哈齐家族（对，就是那个赞助了海顿的显赫家族）不再需要一座兵营。他们受到席卷欧洲的浪漫主义思潮影响，开始用一种全新的眼光看待这座城堡和周围的湖泊。他们聘请园林设计师，不是要修建法式那种规整严肃的花园，而是要打造一个“如画”的英式风景园林。老湖的岸线被精心修饰，种植了大量乔木灌木，修建了蜿蜒的小径、浪漫的小桥和观景亭。城堡本身也进行了一些巴洛克风格的修饰，但它作为军事要塞的职能被永久卸下了，彻底成为园林景观中最核心、最迷人的一部分——一个点缀在湖面上的、充满历史故事的装饰品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的城堡，是历经19世纪修复和20世纪考古发掘后的模样。二战和1956年革命给它带来了新的创伤，但匈牙利人小心翼翼地修复了它。如今，城堡内部是博物馆，讲述着从史前到近代的本地历史，而它的外观和所处的环境，则是对那段从堡垒到宫殿，再到园林明珠的漫长演变史最直观、最动人的诉说。它就像一本立体的历史书，每一块石头，每一片湖水，都在低语着关于国王、骑士、战争、文艺复兴的梦想与浪漫主义的忧伤。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受陶陶水上城堡的魔力，建议安排整整大半天的时间。最佳的抵达时间是清晨九点前，这时旅行团尚未到达，湖面常有一层薄雾，阳光柔和，是拍照和享受宁静的黄金时刻。整体游览节奏宜慢不宜快，遵循“由外至内，再由内至外”的原则。首先花一个小时环绕老湖漫步，从各个角度欣赏城堡的外部形态，感受它与环境的共生关系。然后进入城堡博物馆进行深度参观，了解其内在的历史脉络，耗时约1.5-2小时。最后，在下午将时光“浪费”在湖边的长椅或草坪上，观察当地人的生活，等待迷人的黄昏降临。这样的安排能让你从宏观到微观，再从历史回归当下，完成一次立体的体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末下午湖边人可能较多，若想寻求绝对宁静，环湖北侧的小径通常更为幽静。喂食天鹅请使用专门的禽类饲料（湖边小亭有售），避免投喂面包，以保护它们的健康和湖水生态。参观城堡内部博物馆需穿行石阶和古老地板，建议穿一双舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从湖的东岸开始，逆时针沿着被垂柳轻拂的环湖小径漫步，让城堡在水中的倒影随着你的步伐变换角度和形态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过北侧那座古朴的小石桥，走到城堡正门前的广场，仰头感受四座圆形塔楼在晨曦中呈现出的温暖石色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡内庭，触摸那些文艺复兴式拱廊下冰凉的石柱，想象当年贵族们在此散步交谈的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的旋转石阶登上西南角的塔楼，在制高点将整个老湖、远方的城镇屋顶以及更苍翠的丘陵尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在博物馆里仔细寻找那块属于马加什国王的纹章石雕，以及展示城堡水下考古发现的展柜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完后，去城堡西侧湖岸边的长椅坐下，买一包饲料友好地喂食那些优雅的天鹅和成群的水禽。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着湖南岸一直走到英式园林深处的浪漫主义风格观景亭，从这里回望，城堡宛如漂浮在林海与碧波之间的模型。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分一定要回到东岸的某个开阔处，看着夕阳将城堡、湖水和天空熔铸成一幅辉煌的油画，直到华灯初上。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡对岸东侧柳树下`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，利用湖面作为前景，将城堡和它的完美倒影一同纳入镜中，构图时注意让柳枝形成自然的画框。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`西南角塔楼顶的窗口`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线最佳，从塔楼内透过古老的石窗向外拍摄，将窗框作为前景，框住远处的湖光山色与城镇风景，营造穿越时空的窥视感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡内庭拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗日子的正午前后，阳光会穿透拱廊，在石板地上投下强烈的明暗交替的光影走廊，此时拍摄建筑局部或人物剪影极具几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`湖南岸观景亭内向北望`}</h4>
                  <p className="text-sm text-gray-700">{`下午时段，顺光拍摄，将观景亭的古典柱廊作为前景，焦点对准远处的城堡，形成景深层次丰富的画中画效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老湖北端的小石桥上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨有薄雾时，以桥的栏杆引导视线，拍摄城堡在氤氲水汽中若隐若现的朦胧远景，充满童话氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜（CPL）可以有效消除湖面反光，让城堡的倒影更加清澈深邃。航拍能获得震撼视角，但务必提前了解当地无人机法规，并远离人群与鸟类。尊重他人隐私，拍摄当地居民尤其是儿童时，最好先微笑示意或取得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔情怀`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在老湖岸边的家庭式公寓，拥有直面城堡的私人阳台，清晨在天鹅的叫声中醒来，夜晚枕着轻柔的水波入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心`}</h4>
                  <p className="text-sm text-green-800">{`位于陶陶镇中心广场旁经过修复的百年建筑里的精品酒店，房间挑高很高，装饰复古，步行至城堡仅需七八分钟，周围遍布地道的小餐馆和咖啡馆。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约10分钟可达的郊外庄园酒店，坐落在葡萄园和小森林之中，提供宁静的乡村体验和美味的本地菜肴，是彻底放松身心的完美选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`温泉体验`}</h4>
                  <p className="text-sm text-purple-800">{`陶陶附近有著名的温泉区，可以选择一家带有治愈性温泉浴场的现代酒店，在探索了一天历史之后，用温暖的泉水舒缓双脚。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和周末预订需提前，尤其是湖景房非常抢手。小镇治安良好，夜晚漫步很安全。如果自驾，预订时务必确认停车是否方便及是否额外收费，镇中心部分酒店停车位可能紧张。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开陶陶很久之后，我脑海里反复回放的，不是某个具体的文物或建筑细节，而是一种整体的、安宁的“氛围”。那是一种被水和历史共同浸泡过的温柔感。在这个追求效率与刺激的时代，陶陶的水上城堡提供了一种截然相反的旅行价值：它不试图用宏大的叙事震撼你，而是邀请你慢下来，坐下来，成为它日常风景的一部分。它告诉你，美可以不是孤傲的、需要仰视的，而是亲切的、可以融入生活的。你可以是那个看风景的人，也可以成为别人风景里一个微小的、和谐的点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这或许就是深度旅行最珍贵的收获——不仅仅是用眼睛看过一个地方，而是让那个地方的节奏和气息，短暂地内化为自己生命的一部分。陶陶就是这样一个地方。它让你相信，在世界的某些角落，历史没有死去，它只是换了一种更平和的方式在呼吸，与成群的天鹅、散步的老人、玩耍的孩子共享着同一片波光。每一位厌倦了赶场式观光、渴望在旅途中获得内心宁静的旅人，都应该来这里住上一晚。在黄昏的湖边，你会找到那份久违的、关于时间与存在的，静谧的答案。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/miskolc-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米什科尔茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Miskolc Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/esztergom-basilica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃斯泰尔戈姆大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esztergom Basilica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vac-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦茨大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vác Cathedral</p>
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
