import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡比乌 Sibiu｜在“长眼睛的房屋”注视下漫步中世纪古城 - 最佳欧洲景点',
  description: '你第一眼看见锡比乌，感觉不像走进一座城，而是跌入了一个巨大而温和的梦境。脚下是被岁月打磨得温润光滑的卵石路，走上去有种独特的、令人安心的粗粝感。空气里飘着刚出炉的“科瓦尼格”（一种罗马尼亚羊角面包）的黄油香，混杂着从老房子砖缝里透出的、淡淡的潮湿苔藓气味。然后，你抬起头——就在那一瞬间，你会屏住呼吸...',
}

export default function SibiuOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '锡比乌', href: '/attractions/sibiu-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡比乌・Sibiu・罗马尼亚・锡比乌`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看见锡比乌，感觉不像走进一座城，而是跌入了一个巨大而温和的梦境。脚下是被岁月打磨得温润光滑的卵石路，走上去有种独特的、令人安心的粗粝感。空气里飘着刚出炉的“科瓦尼格”（一种罗马尼亚羊角面包）的黄油香，混杂着从老房子砖缝里透出的、淡淡的潮湿苔藓气味。然后，你抬起头——就在那一瞬间，你会屏住呼吸。高高低低的红色屋顶上，无数双“眼睛”正静静地看着你。那些是阁楼上狭长的木质通风窗，被巧妙地做成了眼睑和瞳孔的形状，有些慵懒地半眯着，有些则圆睁着充满好奇。这不是一两栋房子的偶然设计，而是整片老城区的集体表情。你会突然觉得自己成了一个被默默注视的客人，但这注视里没有审视，只有一种绵延了数百年的、静静的守护。
顺着大广场（Piața Mare）的拱廊下走，光线被切割成明暗交替的琴键。广场中央，布鲁肯塔尔宫那柠檬黄的巴洛克立面在阳光下暖融融的，而它对面那些有着陡峭屋顶和“眼睛”的撒克逊民居，则保持着一种克制的、略带忧郁的色调。当地人坐在露天咖啡馆的藤椅上，慢悠悠地啜饮着小小的意式浓缩，聊天声、刀叉轻碰盘子的声音、远处不知哪条巷子里传来的手风琴声，交织成慵懒的白噪音。你会发现，这座被列入世界文化遗产的古城，不是一座僵死的博物馆，它依然有强劲的生活脉搏。年轻人在“眼睛”的注视下匆匆走过，老太太拎着菜篮从古老的拱门下穿行，历史在这里不是陈列品，而是呼吸着的背景墙。
最打动人的，是这座城市的分层感。地上是热闹的广场与咖啡馆文化，而地下则隐藏着另一个世界——错综复杂的“通道与地窖”系统。这些中世纪为了储藏货物、甚至在围城时避难而修建的地下网络，如今有些变成了酒吧或画廊入口。这种“上下双层”的结构，仿佛隐喻着锡比乌的性格：表面是温文尔雅、略带幽默（看看那些“眼睛”的表情）的文明姿态，地下则深藏着历史的厚重、曾经的恐惧与坚韧的生存智慧。这种矛盾而统一的特质，让锡比乌的魅力远远超出了“拍照很美”的范畴，它有一种能让你安静下来，去倾听石头和木头诉说什么的魔力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看见锡比乌，感觉不像走进一座城，而是跌入了一个巨大而温和的梦境。脚下是被岁月打磨得温润光滑的卵石路，走上去有种独特的、令人安心的粗粝感。空气里飘着刚出炉的“科瓦尼格”（一种罗马尼亚羊角面包）的黄油香，混杂着从老房子砖缝里透出的、淡淡的潮湿苔藓气味。然后，你抬起头——就在那一瞬间，你会屏住呼吸。高高低低的红色屋顶上，无数双“眼睛”正静静地看着你。那些是阁楼上狭长的木质通风窗，被巧妙地做成了眼睑和瞳孔的形状，有些慵懒地半眯着，有些则圆睁着充满好奇。这不是一两栋房子的偶然设计，而是整片老城区的集体表情。你会突然觉得自己成了一个被默默注视的客人，但这注视里没有审视，只有一种绵延了数百年的、静静的守护。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着大广场（Piața Mare）的拱廊下走，光线被切割成明暗交替的琴键。广场中央，布鲁肯塔尔宫那柠檬黄的巴洛克立面在阳光下暖融融的，而它对面那些有着陡峭屋顶和“眼睛”的撒克逊民居，则保持着一种克制的、略带忧郁的色调。当地人坐在露天咖啡馆的藤椅上，慢悠悠地啜饮着小小的意式浓缩，聊天声、刀叉轻碰盘子的声音、远处不知哪条巷子里传来的手风琴声，交织成慵懒的白噪音。你会发现，这座被列入世界文化遗产的古城，不是一座僵死的博物馆，它依然有强劲的生活脉搏。年轻人在“眼睛”的注视下匆匆走过，老太太拎着菜篮从古老的拱门下穿行，历史在这里不是陈列品，而是呼吸着的背景墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是这座城市的分层感。地上是热闹的广场与咖啡馆文化，而地下则隐藏着另一个世界——错综复杂的“通道与地窖”系统。这些中世纪为了储藏货物、甚至在围城时避难而修建的地下网络，如今有些变成了酒吧或画廊入口。这种“上下双层”的结构，仿佛隐喻着锡比乌的性格：表面是温文尔雅、略带幽默（看看那些“眼睛”的表情）的文明姿态，地下则深藏着历史的厚重、曾经的恐惧与坚韧的生存智慧。这种矛盾而统一的特质，让锡比乌的魅力远远超出了“拍照很美”的范畴，它有一种能让你安静下来，去倾听石头和木头诉说什么的魔力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡比乌`} />
                <InfoRow label="英文名称" value={`Sibiu`} />
                <InfoRow label="正式名称" value={`Sibiu`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`锡比乌`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为特兰西瓦尼亚地区最具代表性的撒克逊人七大设防城堡之一，锡比乌是罗马尼亚德语文化的历史心脏与精神高地。`} />
                <InfoRow label="建筑特色" value={`其标志是遍布老城屋顶的“眼睛”——成千上万个狭长的阁楼通风窗，如同沉默而好奇的瞳孔，凝视着街道与行人。`} />
                <InfoRow label="建筑风格" value={`以坚固的防御性哥特式为基础，融合了后期绚丽的巴洛克与文艺复兴装饰元素，形成一种独特而协调的“特兰西瓦尼亚撒克逊”风格。`} />
                <InfoRow label="文化价值" value={`完美保存了中世纪城市布局与建筑肌理，生动体现了12世纪以来撒克逊定居者严谨、务实而又充满灵性的社区生活传统。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区公共区域全天24小时开放。主要广场和街道的商店、咖啡馆营业时间通常为上午9点至晚上10点。城内各博物馆（如布鲁肯塔尔博物馆、法学家塔等）开放时间各异，一般为周二至周日10:00-18:00，周一闭馆。圣诞节、复活节等重大节日，商店和博物馆开放时间会大幅缩短或关闭，建议行前具体查询。`} />
              <InfoRow label="门票价格" value={`漫步锡比乌老城本身完全免费。进入单个景点需购票：布鲁肯塔尔国家博物馆门票约25列伊（约5欧元），学生半价；登议会塔门票约10列伊；法学家塔门票约8列伊。推荐购买“锡比乌卡”，可在72小时内无限次进入大部分博物馆并享受公共交通折扣，成人约35列伊。6岁以下儿童及持有效证件的残障人士免费。`} />
              <InfoRow label="地址" value={`Piața Mare, Sibiu 550163, Romania`} />
              <InfoRow label="交通方式" value={`最近的机场是锡比乌国际机场（SBZ），距离老城约5公里。从机场抵达厅外乘坐出租车至老城中心约15分钟，费用约30-40列伊；也可乘坐11路公交车，约25分钟，车票约3列伊。从布加勒斯特或克卢日-纳波卡乘火车抵达锡比乌中央火车站后，出站乘坐1、2、8路有轨电车（往“Piața Unirii”方向）约10分钟即可抵达老城边缘，步行进入核心区。城内主要景点集中，步行是最佳游览方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`锡比乌的故事，始于一群远道而来的“客人”。12世纪中叶，匈牙利国王盖萨二世为了守卫王国的东南边疆，从遥远的摩泽尔河和莱茵河地区，招募了一批手艺精湛、纪律严明的撒克逊工匠、商人和农民。这群人穿越欧洲，来到特兰西瓦尼亚这片丰饶的谷地，在一片古罗马遗址附近扎下了根。他们享有高度的自治权，首要任务就是建造一座坚不可摧的城堡。于是，用泥土和木头搭建的防御工事最先出现，这就是锡比乌的雏形——一座典型的“撒克逊设防城堡”。社区以广场为中心，教堂、市政厅、商户和民居紧密排列，外围是层层加固的城墙和塔楼。他们不是来征服的，而是来建设和守护的，这种深深的“定居者”心态，从一开始就刻在了城市的基因里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了14、15世纪，锡比昂（当时城市的德语名字）迎来了它的黄金时代。凭借地处东西欧贸易路线十字路口的地理优势，它成了皮革、金属制品和纺织品的交易重镇，富甲一方。财富转化成了更坚固的石头城墙、更高耸的教堂和更华丽的民居。也就是在这个时期，那些可爱的“眼睛”开始普遍出现。关于它们的起源众说纷纭：一种非常实用的解释是，这种狭长的开口既能保证阁楼（用于储存谷物和货物）通风，又能防止雨水灌入，其独特的弧形木制窗盖在功能上完美无缺。而浪漫的传说则说，这是为了在围城时让守卫能从阁楼秘密观察城外敌情。无论真相如何，这些“眼睛”成了撒克逊工匠将实用主义与艺术感结合的天才创造，也赋予了城市独一无二的面容。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静的繁荣并非永恒。16世纪，奥斯曼帝国的阴影笼罩了整个东南欧。锡比乌作为基督教世界的前哨，一次次加固城防，紧张的气氛弥漫在街道之间。到了17世纪，一场灾难性的大火几乎吞噬了半个木结构的老城。灾后重建时，石头和砖瓦大量取代了木材，我们今天看到的许多巴洛克式立面，正是在那次重生后添加的。大火烧毁了房屋，却烧不尽社区的精神。重建后的锡比乌，风格更加混搭，但城市布局和那股严谨务实的精神内核丝毫未变。18世纪，在启蒙运动的影响下，出身于此的布鲁肯塔尔男爵建立了中东南欧最早、最宏伟的博物馆之一，收藏了大量艺术与科学珍品，让锡比乌赢得了“特兰西瓦尼亚雅典”的美誉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间跳转到20世纪，锡比乌经历了最为动荡的篇章。两次世界大战、政权更迭、共产主义时期，城市的德语人口大量迁离，许多古老的传统一度陷入沉寂。那些“眼睛”仿佛也陷入了漫长的沉睡。但令人惊叹的是，即便是最艰难的岁月，老城的物理结构竟然奇迹般地完整保存了下来，没有遭到大规模的破坏或愚蠢的现代化改造。转折点出现在21世纪初，当罗马尼亚加入欧盟，锡比乌与卢森堡一起被评为“2007年欧洲文化之都”。这项荣誉像一剂强心针，激发了全城、全国乃至国际力量对这座瑰宝之城的修复与复兴热情。沉睡的“眼睛”被重新擦亮，古老的墙壁被精心修复，地下通道被谨慎地清理开放。今天，漫步在锡比乌，你不仅能触摸到12世纪撒克逊定居者的匠心，15世纪富商的骄傲，17世纪灾后重建的坚韧，也能感受到21世纪一个社区重新找回自我、并向世界自信展示的活力。这是一部用砖石、木头和人类韧性写就的千年史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受锡比乌的灵魂，建议安排一整个白天，从清晨到日暮。最好在早上九点前抵达老城中心的大广场，这时游客尚未涌入，阳光斜射，给“眼睛”屋顶和柠檬黄的宫殿涂上第一层金边，城市刚刚苏醒的样子最为本真。整体游览节奏宜慢不宜快，因为精华往往藏在巷弄的细节和突然的转角视野里。路线可以设计为一个环线，从大广场出发，深入小广场和蜿蜒的巷子，登上高塔俯瞰全城，最后再回到起点，体验日间与黄昏截然不同的氛围。全程步行距离约3-4公里，包含多次登高和驻足，建议预留至少5-6小时的悠闲时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城的卵石路虽然充满风情，但绝对不适合高跟鞋或薄底鞋，一双舒适防滑的步行鞋是必需品。尽管锡比乌治安总体良好，但在热门广场和拥挤的公交上仍需看管好随身财物，提防常见的扒手手法。如果计划参观多个博物馆，提前在网上购买“锡比乌卡”通票能节省不少时间和金钱。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先踏入空旷宁静的Piața Mare（大广场），在议会塔的阴影下抬头，看第一缕阳光如何唤醒布鲁肯塔尔宫巴洛克立面上的每一道浮雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过广场西北角的拱门洞，瞬间跌入氛围更亲密的Piața Mică（小广场），在那些色彩柔和、眼睛瞪得最大的房子前发会儿呆，找找著名的“谎言桥”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走过那座铁制的“谎言桥”，听听脚下木板轻微的吱呀声，并站在桥中央向北望，捕捉法学家塔与层层叠叠屋顶构成的明信片角度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从桥头钻进那条陡峭的“眼睛”小巷（Pasajul Scarilor），触摸冰凉的石阶和墙壁，感受自己完全被两侧屋顶上密集的“目光”包围的奇异体验。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上历经沧桑的“法学家塔”，在它的露台上转一圈，让特兰西瓦尼亚的清风拂面，看脚下橙红色的屋顶海洋和远处喀尔巴阡山脉绵延的淡蓝色轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔上下来，绕到福音大教堂的背后，寻找那些安静无人的侧巷，观察普通居民在百年老宅里进出的生活痕迹，感受历史与当下的无缝衔接。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把午后的时光留给布鲁肯塔尔国家博物馆，不仅看展品，更要细细品味那座辉煌的宫殿内部，想象18世纪一位启蒙主义贵族的精神世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，回到大广场的拱廊下，找一家咖啡馆的户外座位，点一杯本地红酒或热巧克力，看广场华灯初上，“眼睛”们在暮色中渐渐隐去，而城市的夜生活悄然点亮。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大广场拱廊立柱之间`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，以拱廊为框架，对准广场对面一排有着“眼睛”屋顶的彩色房子，能拍出极具纵深感和故事感的构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`谎言桥中央偏北侧`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，利用桥的铁艺栏杆作为前景，聚焦远处矗立的法学家塔，将蜿蜒的街道和两侧房屋作为引导线，构成完美的古典街景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从法学家塔顶向西俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`晴天上午十点左右，阳光充分照亮老城全景，用长焦镜头压缩空间，拍摄屋顶“眼睛”海洋与远方福音教堂尖塔同框的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Pasajul Scarilor（阶梯通道）底部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光能直射入狭窄巷道时，站在最底部向上拍摄，捕捉两侧高墙上的“眼睛”和一线天的震撼视角。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`福音大教堂侧面小巷`}</h4>
                  <p className="text-sm text-gray-700">{`雨后傍晚，利用地面积水拍摄“眼睛”房屋的倒影，结合暖黄色的灯光初亮，营造出静谧而魔幻的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄那些“眼睛”窗户时，请务必尊重住户隐私，避免使用长焦镜头窥视屋内，将焦点放在建筑美学而非私人生活上。锡比乌的光影变化极具戏剧性，黄金时段（日出后一小时和日落前一小时）是拍摄城市温暖色调和长阴影的绝佳时机。使用无人机拍摄前，必须仔细了解罗马尼亚当地法规，老城上空通常有严格限制。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻大广场拱廊背后一栋15世纪撒克逊商人宅邸改造的精品酒店，睡在古老的木梁下，清晨推开窗就能与广场上的“眼睛”们道早安。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计师艺廊风格`}</h4>
                  <p className="text-sm text-green-800">{`位于小广场一隅，由几位当地艺术家共同经营的精品公寓，每个房间风格迥异且充满现代艺术装置，与古老建筑外壳形成有趣对话。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`静谧家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`住在老城城墙外步行五分钟的安静街区，房东妈妈会为你准备丰盛的特兰西瓦尼亚式早餐，并分享地图上找不到的本地故事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山腰全景酒店`}</h4>
                  <p className="text-sm text-purple-800">{`在距离老城约两公里的小山丘上，一家由旧别墅改建的酒店拥有俯瞰整个锡比乌老城天际线的无敌露台，夜晚景色堪称梦幻。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季和圣诞集市期间）住宿非常紧俏，务必提前数月预订，尤其是老城核心区的特色住所。老城内的酒店虽位置绝佳，但可能无法停车且需要拖着行李走一段卵石路，需提前与酒店确认行李协助服务。选择城墙外的住宿往往性价比更高，且能体验更本地化的社区氛围，步行进城也十分便捷。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开锡比乌许久后，那些“眼睛”的模样还会时常在脑海里浮现。它们不像威严的雕塑或华丽的装饰那样试图震慑你，而是用一种近乎顽皮又持久的方式，与你进行了一场沉默的对话。这座城市教会我的，是一种“温和的韧性”。它历经迁徙、繁荣、战火、大火、意识形态的变迁，却从未以狰狞或悲情的面貌示人。它只是静静地调整、吸收、重建，然后把历史的每一层印记，都转化为今天屋顶上一道独特的轮廓、墙上一种和谐的色彩、巷子里一股生活的气息。它不拒绝现代咖啡馆和艺术节，但这一切都发生在那个保存完好的中世纪框架里，新旧之间没有撕裂，只有从容的共生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求快速打卡、滤镜美颜的旅行时代，锡比乌是一种反向的存在。它不提供瞬间的视觉爆点，而是邀请你慢下来，去观察，去聆听，去想象。你需要花时间，才能读懂那些“眼睛”里细微的表情差别；你需要静下心，才能感受到石板路下隐藏的另一个世界。它告诉我们，真正的文化深度不在于建筑的宏大，而在于细节的坚持，在于社区记忆的延续，在于一种面对时代洪流时，既能坚守内核又能拥抱变化的智慧。每一位渴望深度游的旅人，都应该来锡比乌住上几天，让自己被这些古老的“目光”注视一番。你会发现，被这样看过之后，你看待历史、文化乃至自己旅程的方式，都会变得不一样了——更耐心，更敏锐，也更温暖。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ohrid-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥赫里德老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ohrid Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/girona-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫罗纳古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Girona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/caceres-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡塞雷斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cáceres Old Town</p>
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
