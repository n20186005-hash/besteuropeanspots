import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博里霍尔姆城堡 Borgholm Castle｜见证烈火与坚毅的北欧史诗 - 最佳欧洲景点',
  description: '当你穿过厄兰岛开阔的石灰岩平原，远远看到它时，第一反应会是倒吸一口凉气。那根本不是想象中童话般的、有着尖顶和彩旗的城堡，而是一头匍匐在海岸山丘上的、由砖石构成的巨兽骨架。车越开越近，它的轮廓就越发清晰，也越发骇人——没有屋顶，窗户是巨大的空洞，高墙被整齐地撕裂，仿佛被一只天神之手粗暴地掰开，将内部的',
}

export default function BorgholmCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞典', href: '/destinations/sweden' },
            { label: '博里霍尔姆城堡', href: '/attractions/borgholm-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博里霍尔姆城堡・Borgholm Castle・瑞典・博里霍尔姆`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你穿过厄兰岛开阔的石灰岩平原，远远看到它时，第一反应会是倒吸一口凉气。那根本不是想象中童话般的、有着尖顶和彩旗的城堡，而是一头匍匐在海岸山丘上的、由砖石构成的巨兽骨架。车越开越近，它的轮廓就越发清晰，也越发骇人——没有屋顶，窗户是巨大的空洞，高墙被整齐地撕裂，仿佛被一只天神之手粗暴地掰开，将内部的结构赤裸裸地暴露在波罗的海的风与光之下。停车场的气味混合着干燥的泥土、远处的松针和海风特有的咸腥。风声是这里永恒的背景音，它穿过那些空荡的拱门和窗洞，发出低沉而持续的呜咽，像是这座建筑本身在呼吸，在诉说着几个世纪前的故事。
走近了，脚下是碎石和顽强生长在缝隙间的野草与苔藓。触摸那些被海风侵蚀了四百年的砖石，触感粗糙而温暖，阳光把一部分墙体晒得发烫，而阴影处则冰凉彻骨。抬起头，天空成了这座建筑最变幻莫测的穹顶——一会儿是瑞典标志性的、水洗过般的湛蓝，一会儿又被疾驰而过的云朵覆盖，光线在废墟的肌理上飞速移动，明暗交替，仿佛给静止的石头注入了生命。你会看到本地人带着狗在废墟外围的草地上散步，孩子们在安全的空地上奔跑嬉笑。对当地人而言，这不仅仅是个景点，它是地平线上一个永恒的存在，是季节的刻度，是童年探险的后花园，也是夏日露天音乐会与戏剧表演的绝佳舞台。它那种破碎的壮美，已经深深融入了岛民的日常与灵魂。
它的核心魅力，恰恰在于这种“未完成”和“被摧毁”的状态。这不是一座被精心修复、罩在玻璃罩里的博物馆标本，而是一个活生生的、正在被时间继续塑造的现场。它强迫你动用想象力：去想象火焰吞噬木质屋顶时的爆裂巨响，去想象曾经回荡在宴会大厅里的音乐与欢笑，去想象士兵在完整城垛上巡逻的脚步声。它不提供轻易的、甜美的历史幻梦，它提供的是历史的重量、无常的震撼，以及一种近乎残酷的诗意。在这里，美与衰败不是对立面，它们交织在一起，共同谱写了一曲关于人类野心与自然力量的、无比深沉的交响乐。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你穿过厄兰岛开阔的石灰岩平原，远远看到它时，第一反应会是倒吸一口凉气。那根本不是想象中童话般的、有着尖顶和彩旗的城堡，而是一头匍匐在海岸山丘上的、由砖石构成的巨兽骨架。车越开越近，它的轮廓就越发清晰，也越发骇人——没有屋顶，窗户是巨大的空洞，高墙被整齐地撕裂，仿佛被一只天神之手粗暴地掰开，将内部的结构赤裸裸地暴露在波罗的海的风与光之下。停车场的气味混合着干燥的泥土、远处的松针和海风特有的咸腥。风声是这里永恒的背景音，它穿过那些空荡的拱门和窗洞，发出低沉而持续的呜咽，像是这座建筑本身在呼吸，在诉说着几个世纪前的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了，脚下是碎石和顽强生长在缝隙间的野草与苔藓。触摸那些被海风侵蚀了四百年的砖石，触感粗糙而温暖，阳光把一部分墙体晒得发烫，而阴影处则冰凉彻骨。抬起头，天空成了这座建筑最变幻莫测的穹顶——一会儿是瑞典标志性的、水洗过般的湛蓝，一会儿又被疾驰而过的云朵覆盖，光线在废墟的肌理上飞速移动，明暗交替，仿佛给静止的石头注入了生命。你会看到本地人带着狗在废墟外围的草地上散步，孩子们在安全的空地上奔跑嬉笑。对当地人而言，这不仅仅是个景点，它是地平线上一个永恒的存在，是季节的刻度，是童年探险的后花园，也是夏日露天音乐会与戏剧表演的绝佳舞台。它那种破碎的壮美，已经深深融入了岛民的日常与灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，恰恰在于这种“未完成”和“被摧毁”的状态。这不是一座被精心修复、罩在玻璃罩里的博物馆标本，而是一个活生生的、正在被时间继续塑造的现场。它强迫你动用想象力：去想象火焰吞噬木质屋顶时的爆裂巨响，去想象曾经回荡在宴会大厅里的音乐与欢笑，去想象士兵在完整城垛上巡逻的脚步声。它不提供轻易的、甜美的历史幻梦，它提供的是历史的重量、无常的震撼，以及一种近乎残酷的诗意。在这里，美与衰败不是对立面，它们交织在一起，共同谱写了一曲关于人类野心与自然力量的、无比深沉的交响乐。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博里霍尔姆城堡`} />
                <InfoRow label="英文名称" value={`Borgholm Castle`} />
                <InfoRow label="正式名称" value={`Borgholm Castle`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`博里霍尔姆`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它曾是北欧规模最大、最宏伟的文艺复兴风格城堡之一，也是瑞典王国强盛时期在波罗的海地区权势的象征。`} />
                <InfoRow label="建筑特色" value={`如今是一座气势恢宏、令人屏息的巨大废墟，高耸的断壁残垣在天空下勾勒出戏剧性的剪影，被誉为“北方的雅典卫城”。`} />
                <InfoRow label="建筑风格" value={`主体为文艺复兴风格，但融合了中世纪要塞的防御元素，其规模与设计深受当时欧洲大陆，特别是丹麦和荷兰城堡建筑的影响。`} />
                <InfoRow label="文化价值" value={`它不仅是一处历史遗迹，更是一座关于毁灭、时间与记忆的露天纪念碑，展现了人与自然力量、历史与现在之间的永恒对话。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（5月中旬至9月中旬）每日开放，时间为10:00至18:00。春秋季（4月至5月初，9月中旬至10月）开放时间缩短，通常为11:00至16:00，且可能仅周末开放或根据天气调整。冬季（11月至次年3月）基本关闭，仅可在外部远观。具体开放日期每年略有变动，建议出行前查询官网。重要节假日（如仲夏节）可能关闭。`} />
              <InfoRow label="门票价格" value={`成人票：120瑞典克朗。青少年票（7-17岁）：60瑞典克朗。学生票（持有效证件）：90瑞典克朗。家庭票（2大2小）：300瑞典克朗。5岁及以下儿童免费。门票包含城堡废墟及内部小型展览的参观。支持信用卡及移动支付。`} />
              <InfoRow label="地址" value={`Borgholms Slott, 387 22 Borgholm, Sweden`} />
              <InfoRow label="交通方式" value={`最近的机场是卡尔马机场（Kalmar Airport，KLR），距离约35公里。从机场可搭乘出租车（约30分钟，费用较高）或先乘公交至卡尔马市中心再转车。最推荐的路线是从斯德哥尔摩或哥德堡乘坐火车抵达卡尔马中央车站（Kalmar C），车程约3-4小时。从卡尔马市中心汽车站（紧邻火车站）乘坐前往博里霍尔姆的100路或101路公交车，车程约40分钟，班次频繁（平日约每小时一班，夏季更密），可使用当地交通卡或上车购票。公交车终点站靠近城堡，下车后沿指示步行约10分钟即可到达。自驾是最方便的方式，从卡尔马通过厄兰桥（Öland Bridge）上岛，沿136号公路北行直达，城堡外有大型免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事得从更早的时候说起。早在12世纪，这个地方就矗立着一座木石结构的中世纪堡垒，用于控制波罗的海的贸易航线。到了16世纪，瑞典瓦萨王朝的国王们，尤其是约翰三世，怀抱着将瑞典打造成欧洲强国的雄心。他们看中了厄兰岛这个战略要地，决定在这里建造一座配得上王国声望的、前所未有的宫殿式城堡。1569年，工程启动，灵感来自当时欧洲大陆最时髦的文艺复兴风格，尤其是丹麦的克伦堡宫。想象一下当时的场景：整个波罗的海地区最好的石匠、建筑师和工人们被召集到这里，船只运来昂贵的建材，工地喧闹繁忙，一座融合了居住舒适性与军事防御性的巨构从图纸上逐渐变为现实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了17世纪，在卡尔九世和后来的克里斯蒂娜女王统治下，城堡进入了它的黄金时代。它不再仅仅是个堡垒，更是王室权威的展示厅和度假行宫。城堡内部装饰极尽奢华，拥有巨大的宴会厅、精美的壁画、华丽的家具和来自异国的珍奇。王室成员在这里狩猎、举办盛大庆典，贵族们穿梭于厅堂之间。这是博里霍尔姆最意气风发的年代，它是瑞典作为“北方雄狮”崛起的一个闪亮注脚，俯瞰着脚下日益繁忙的海域。然而，极致的繁华之下，也埋下了隐患。为了追求宏伟的立面和大面积的玻璃窗，建筑的结构在某种程度上牺牲了部分实用性，庞大的维护费用也成了王室的长期负担。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的转折点发生在1806年。那是一个干燥的秋天，关于起火原因众说纷纭，可能是维修工的不慎，也可能是雷电。总之，火苗一旦窜起，便以惊人的速度吞噬了城堡内部大量的木制结构——地板、房梁、华丽的内部装饰。当时的救火手段在面对如此巨大的石壳木芯的建筑时，显得苍白无力。目击者记载，冲天的火光将夜空映照得如同白昼，数十公里外都清晰可见。大火烧了整整两天两夜，当火焰最终熄灭，留下的就是一个被烧空了内脏的石头躯壳。屋顶坍塌，内部一切化为灰烬，只有那些厚重的石墙依然倔强地站立着。这场灾难性的火灾，彻底终结了它作为宫殿的使命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大火之后，城堡被遗弃了。它成了当地人免费的采石场，人们运走那些雕刻精美的石料去建造自己的房屋、农场围墙。风吹雨打，海盐侵蚀，植物在裂缝中扎根，年复一年地瓦解着墙体。它从一座荣耀的象征，变成了一个实用的废墟，一个巨大的、悲伤的提醒物。直到19世纪末，浪漫主义的风潮席卷欧洲，人们开始用新的眼光看待废墟。这种残缺的、带有时间痕迹的美感打动了艺术家和诗人。博里霍尔姆城堡的毁灭性之美被重新“发现”，它不再被视为耻辱，反而成为了一种强大艺术灵感的源泉，出现在无数画作和文学描述中。人们开始自发地保护它，禁止继续采石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入20世纪，它正式被列为国家文化遗产，受到了系统性的保护和加固。工程师们小心地稳定那些危险的断壁，确保它不会进一步坍塌，但绝不进行臆想性的重建。这种“保护现状”的理念，让它得以保持火灾后那份原始、震撼的废墟状态。如今，它由一个基金会管理，不仅是一个历史遗迹，更是一个活跃的文化场所。夏季，在废墟的庭院里会搭建起舞台，上演歌剧、音乐会，当现代的音乐在古老的石壁间回荡时，你会感到一种奇妙的时空融合——毁灭与创造，寂静与声响，在此刻达成了和解。从王室权杖上的明珠，到被烈火吞噬的残躯，再到受人敬仰的文化地标，博里霍尔姆城堡的故事，是一部浓缩的、关于如何与创伤和历史共存的北欧史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`最佳的游览体验始于午后。建议在下午两三点左右抵达，这时从西面（主要入口方向）照射的阳光会让城堡废墟的立面光影分明，立体感最强，非常适合初识的震撼。整体游览建议预留至少3到4小时，节奏宜缓不宜急。先从外部远观和环绕，感受其整体规模与地形关系，再进入内部，由下至上探索，最后在黄昏时分停留，这是废墟一天中最魔幻的时刻。这样的安排能让你充分体验光线变化对建筑情绪的塑造，并避开可能的一日游团队游客离场高峰，独享一份废墟的宁静与沉思氛围。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双结实防滑的鞋子，废墟内部地面不平，常有碎石和裸露的古老砖石，高跟鞋或凉鞋会非常痛苦且危险。
夏季岛上阳光强烈且风大，帽子、防晒霜和一件防风外套是必备品，废墟内几乎没有任何遮荫处。
内部探索时请务必注意安全标识，不要攀爬明确禁止的区域，某些墙体结构虽看似稳固，但历经数百年风化，仍需格外小心。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场沿着略为上坡的小径走向城堡，第一眼就让自己被那堵巍峨的、没有任何遮挡的主立面墙彻底震撼，好好体会一下“巨构”的尺度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要急着进入大门，先从左侧开始，沿着城堡外围的草地走一圈，从各个角度观察这座废墟与天空、与远处波罗的海构成的不断变化的画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过古老的拱形门洞进入城堡的内庭院，立刻站定，原地缓慢旋转一周，感受被四层楼高的残墙完全包围的、既压迫又神圣的独特空间感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细探索庭院四周拱廊下的小型展览室，那里用模型、出土文物和火灾后的遗物，无声地讲述着从辉煌到毁灭的故事脉络。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找通往上层废墟的楼梯或斜坡（通常标记清晰），鼓起勇气攀登到城堡的更高层，站在曾经是宴会厅或王室居室的地板边缘，俯瞰整个内庭。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着残留的城墙边缘小心行走一段，从那些巨大的、没有玻璃的窗框望出去，将厄兰岛平坦的田园风光和远处的海平面尽收眼底，这是属于国王的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，一定要下到城堡面向海岸的东侧底部，从下往上仰望那些从墙体中伸出的、锈蚀的巨大金属结构，感受建筑骨骼的力量与脆弱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在太阳开始西斜时，找一处面向西方的断墙基座坐下，什么都不做，只是看着金色的光线如何一寸寸爬过砖石，将废墟染成蜂蜜色再褪为玫瑰灰。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`停车场远端仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午抵达时，背对太阳，用广角镜头将城堡废墟、前景的野花草地和巨大的天空一同纳入，展现其孤傲于平原的壮阔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内庭院“国王窗框”剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时内，找到二层或三层一个保存完好的巨大石制窗框，让人物站在窗框中成为剪影，以庭院深处为背景，构图极具故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`东侧海岸仰拍建筑肌理`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或上午，阳光照亮东立面时，从城堡脚下的海岸小径向上拍摄，聚焦砖石纹理、植物侵蚀的细节和强烈的结构线条。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`废墟顶部俯拍内庭十字对称`}</h4>
                  <p className="text-sm text-gray-700">{`登上城堡某一侧的较高平台，垂直向下拍摄内庭的地面铺石图案和参观者如蚂蚁般的尺度对比，画面充满几何感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`西侧外墙长焦压缩`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏时分，使用长焦镜头从城堡西侧几百米外的田野拍摄，将废墟的剪影与缓缓下落的太阳压缩在同一画面，氛围感绝佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`黄金时段（日出后一小时和日落前一小时）的光线对这座废墟建筑的刻画是决定性的，侧光能完美展现砖石的质感与墙体的纵深。`}</li>
                <li>• {`尝试拍摄一些细节：比如墙缝里顽强开出的小花、被火烧过后变色的石头、雨水在石面上留下的痕迹，这些都能述说时间的故事。`}</li>
                <li>• {`使用无人机拍摄前，务必查询当地最新法规，文化遗产上空常有飞行限制，且强风天气频繁，飞行需格外谨慎。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济精选`}</h4>
                  <p className="text-sm text-blue-800">{`博里霍尔姆港口旁的设计感青旅，由老仓库改造，色彩明快，公共厨房面朝海港，是结识各地背包客、获取本地情报的绝佳据点。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`岛上风情`}</h4>
                  <p className="text-sm text-green-800">{`位于城堡视野范围内的传统红色木屋民宿，主人是厄兰岛历史迷，早餐能品尝到自制的接骨木花糖浆和新鲜烤制的黑麦面包，夜晚格外静谧。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-yellow-800">{`卡尔马市区内由17世纪商人宅邸修复的精品酒店，乘公交上岛很方便，既能享受老城便利，又能体验穿越历史的居住感，浴室可能有古老的穹顶壁画。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华享受`}</h4>
                  <p className="text-sm text-purple-800">{`厄兰岛南端远离喧嚣的灯塔庄园酒店，独占一片海岸，房间拥有无敌海景，提供米其林推荐的精致北欧风味晚餐，是探索城堡后极致放松的避世之所。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（尤其是六月仲夏节和七月）是厄兰岛的绝对旺季，住宿需提前数月预订，价格也达到顶峰。若想获得更好性价比，考虑五月底或八月底的肩季出行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果想获得最完整的“城堡体验”，可以选择在博里霍尔姆小镇住一晚，这样你就有机会在清晨游客未至或黄昏人潮散去后，独自漫步至城堡外围，感受它最宁静本真的模样。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开博里霍尔姆城堡许久后，那副巨大的石头骨架依然会清晰地出现在你的脑海里。它带来的冲击，与参观那些完美无瑕的宫殿完全不同。后者让你赞叹人类的巧夺天工，而前者，则迫使你直面历史的无常、时间的暴力以及某种终极的脆弱。但奇妙的是，这种感受并非全然是悲伤或消极的。站在那些废墟之中，你感受到的是一种巨大的平静。因为毁灭本身，在这里已经成为了风景的一部分，被接受了，被呈现了，甚至被赋予了新的美感和意义。它没有试图掩盖伤疤，而是将伤疤作为自己最深刻的纹身展示给世人看。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个我们习惯于快速消费、追求光鲜亮丽、害怕衰老和残缺的时代，博里霍尔姆城堡是一剂清醒而有力的良药。它告诉我们，有些价值存在于完整之外，有些力量诞生于破碎之后。它不仅仅是一座瑞典的城堡，它是一个关于所有人类造物终将面对的命运的隐喻。每一位热爱深度游的旅人都该来这里，不是为了收集又一个景点印章，而是为了参与一场沉默的对话——与历史对话，与时间对话，最终，与内心深处那个关于存在与消逝的永恒命题对话。当你触摸着那些被海风吹暖又吹凉的石头离开时，你会带走一点它的坚毅与坦然。这，或许就是废墟给予生者，最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/fortress-of-chinon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希农城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fortress of Chinon</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kufstein-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库夫施泰因要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kufstein Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beaufort-castle-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博福尔城堡遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beaufort Castle</p>
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
