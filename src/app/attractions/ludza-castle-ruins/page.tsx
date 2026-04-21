import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卢扎 Ludza｜探索拉脱维亚最古老城镇与雄踞山巅的红砖城堡废墟 - 最佳欧洲景点',
  description: '你猜怎么着，在拉脱维亚东部的森林与湖泊深处，藏着一个连很多欧洲资深玩家都会错过的时间胶囊。车开进卢扎的那一刻，感觉就像不小心闯进了一部泛黄的东欧老电影。第一眼看到的，永远是那座山丘——不是普通的绿色山包，而是一座顶着暗红色王冠的丘陵，那些破碎的、巨大的红砖结构在阳光下呈现出一种温柔的锈红色，静静地倒',
}

export default function LudzaCastleRuinsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '拉脱维亚', href: '/destinations/europe' },
            { label: '卢扎', href: '/destinations/europe' },
            { label: '卢扎', href: '/attractions/ludza-castle-ruins' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卢扎・Ludza・拉脱维亚・卢扎`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你猜怎么着，在拉脱维亚东部的森林与湖泊深处，藏着一个连很多欧洲资深玩家都会错过的时间胶囊。车开进卢扎的那一刻，感觉就像不小心闯进了一部泛黄的东欧老电影。第一眼看到的，永远是那座山丘——不是普通的绿色山包，而是一座顶着暗红色王冠的丘陵，那些破碎的、巨大的红砖结构在阳光下呈现出一种温柔的锈红色，静静地倒映在它脚下的湖水里。空气里有种特别的清新，混合着松针、潮湿苔藓和从远方田野飘来的干草气味，安静得能听到自己的心跳，以及从湖泊方向传来的、不知名水鸟划过水面的扑棱声。
这座小镇的生活节奏，慢得像旁边小卢扎湖的波纹。当地人骑着老式自行车从城堡山脚下叮铃铃地经过，主街上那家面包房飘出的香气，就是整个社区的晨间闹钟。城堡对于他们而言，不是需要买票朝圣的景点，而是生活背景的一部分，是傍晚散步的终点，是童年探险的秘密基地。你能看到老奶奶坐在湖边的长椅上，一边织毛衣，一边望着废墟，那眼神平静得像在看一个老朋友。这种“古迹活在日常里”的质感，才是卢扎最动人的地方。
它的核心魅力，在于一种极致的反差与和谐。一边是象征着武力、征服与边境冲突的庞大军事废墟，带着历史的沉重与创伤；另一边则是温柔宁静、波光粼粼的湖泊，滋养着小镇平和的生活。两者紧紧相依，被时光酿成了一种独特的诗意。站在废墟之上，风穿过砖石的缝隙发出呜咽，你仿佛能触摸到钢铁与火焰的冰冷记忆；转身走下山坡，在湖边咖啡馆喝一口醇厚的拉特加尔啤酒，听到的是孩子们的笑声与风铃的轻响。这种在伤痕旁生长出的宁静生活，比任何完好无损的城堡都更有力量。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你猜怎么着，在拉脱维亚东部的森林与湖泊深处，藏着一个连很多欧洲资深玩家都会错过的时间胶囊。车开进卢扎的那一刻，感觉就像不小心闯进了一部泛黄的东欧老电影。第一眼看到的，永远是那座山丘——不是普通的绿色山包，而是一座顶着暗红色王冠的丘陵，那些破碎的、巨大的红砖结构在阳光下呈现出一种温柔的锈红色，静静地倒映在它脚下的湖水里。空气里有种特别的清新，混合着松针、潮湿苔藓和从远方田野飘来的干草气味，安静得能听到自己的心跳，以及从湖泊方向传来的、不知名水鸟划过水面的扑棱声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇的生活节奏，慢得像旁边小卢扎湖的波纹。当地人骑着老式自行车从城堡山脚下叮铃铃地经过，主街上那家面包房飘出的香气，就是整个社区的晨间闹钟。城堡对于他们而言，不是需要买票朝圣的景点，而是生活背景的一部分，是傍晚散步的终点，是童年探险的秘密基地。你能看到老奶奶坐在湖边的长椅上，一边织毛衣，一边望着废墟，那眼神平静得像在看一个老朋友。这种“古迹活在日常里”的质感，才是卢扎最动人的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，在于一种极致的反差与和谐。一边是象征着武力、征服与边境冲突的庞大军事废墟，带着历史的沉重与创伤；另一边则是温柔宁静、波光粼粼的湖泊，滋养着小镇平和的生活。两者紧紧相依，被时光酿成了一种独特的诗意。站在废墟之上，风穿过砖石的缝隙发出呜咽，你仿佛能触摸到钢铁与火焰的冰冷记忆；转身走下山坡，在湖边咖啡馆喝一口醇厚的拉特加尔啤酒，听到的是孩子们的笑声与风铃的轻响。这种在伤痕旁生长出的宁静生活，比任何完好无损的城堡都更有力量。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卢扎`} />
                <InfoRow label="英文名称" value={`Ludza`} />
                <InfoRow label="正式名称" value={`Ludza Castle Ruins`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`卢扎`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`拉脱维亚现存历史最悠久的城镇，其城堡是立窝尼亚骑士团在拉特加尔地区修建的重要东部防御堡垒。`} />
                <InfoRow label="建筑特色" value={`宏伟的红砖城堡废墟雄踞于山丘之巅，俯瞰两个明镜般的湖泊，残存的墙体与塔楼基座依然能勾勒出昔日的庞大格局。`} />
                <InfoRow label="建筑风格" value={`利沃尼亚城堡建筑风格的典范，以防御功能为主的砖石结构，融合了罗马式与早期哥特式元素。`} />
                <InfoRow label="文化价值" value={`拉脱维亚东部（拉特加尔）独特历史与文化的活化石，见证了十字军东征、波兰-立陶宛统治、瑞典与俄国争夺等多重势力的交融与变迁。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡废墟全年全天24小时开放，可自由参观。卢扎历史博物馆的开放时间为每周二至周六上午10点至下午5点，周日和周一闭馆。冬季（11月至3月）博物馆开放时间可能缩短，建议行前在其官网确认。城镇本身可随时漫步游览。`} />
              <InfoRow label="门票价格" value={`进入城堡废墟区域完全免费。参观卢扎历史博物馆需购票，成人票约3欧元，学生及长者有优惠票价。博物馆偶尔举办的特展可能需要额外付费。`} />
              <InfoRow label="地址" value={`Ludzas pilsdrupas, Ludza, LV-5701, Latvia`} />
              <InfoRow label="交通方式" value={`从里加国际机场出发，最推荐的方式是租车自驾，沿A6和A12公路向东行驶，全程约250公里，需时3-3.5小时，沿途是典型的拉脱维亚森林与田园风光。乘坐公共交通的话，先从里加中央火车站乘火车或长途巴士抵达雷泽克内，车程约3小时，班次每日数趟；再从雷泽克内换乘当地巴士前往卢扎，车程约1小时，班次较为有限，最好提前查好时刻表。卢扎镇内很小，所有景点步行可达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从遥远的13世纪讲起。那时候，这片土地还不叫拉脱维亚，而是属于拉特加尔人。你想象一下，茂密的森林，星罗棋布的湖泊，部落在这里生活。然后，佩戴着十字标志的立窝尼亚骑士团，一支兼具修士与战士身份的强大武装力量，从西边来了。他们不仅带来了剑与火，也带来了砖石与建造技术。卢扎的战略位置太关键了——它处在东西方贸易与征伐的路线上，而且这个山丘卡在两个湖泊之间的狭窄地峡上，简直是天生的堡垒。于是，在大概14世纪中期，一座宏伟的红砖城堡开始在这里拔地而起。它不是为优雅的宫廷生活准备的，它从诞生之初就满身杀气，高墙、塔楼、壕沟，一切设计都是为了牢牢扼守这条通道，向东方展示骑士团的权威。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "接下来的几百年，这座城堡就像风暴中的灯塔，见证了无数政权的更迭。立窝尼亚骑士团衰落之后，它先后落入波兰-立陶宛联邦和瑞典王国的手中。每一次易主，可能都伴随着围攻、战斗与修复。墙壁越垒越厚，故事也越来越复杂。我总觉得，那些深红色的砖块里，一定浸染了不同语言发出的呐喊与祈祷。它不仅仅是拉脱维亚的，也是德国骑士、波兰贵族、瑞典士兵共同的历史舞台。在波兰统治时期，卢扎甚至获得了城市权利，小镇在城堡的庇护下慢慢发展起来，但城堡的军事属性从未改变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点发生在伟大的北方战争期间，也就是18世纪初。俄国沙皇彼得大帝的军队与瑞典国王查理十二世在这里激烈角逐。当战火最终蔓延到这座边境城堡时，它遭遇了可能是最致命的一击。历史记载有些模糊，但普遍认为，在战争末期，为了防止城堡被敌人利用，它被下令部分摧毁或自行焚毁了。烈火吞噬了木质的屋顶和内部结构，只留下这些耐烧的砖石骨架。雄伟的堡垒从此停止了呼吸，从权力的工具变成了一具巨大的、悲伤的废墟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的有趣之处就在于此。当城堡作为军事要塞的功能死亡后，它的另一段生命却悄然开始。它不再属于国王和将军，而是慢慢融入了卢扎百姓的生活。人们从它的墙体上取走砖块去修建自己的房子（如今镇里很多老建筑都能找到来自城堡的砖），它的地盘变成了牧场，孩子们在残垣断壁间玩捉迷藏。它从一座令人畏惧的堡垒，变成了一个承载集体记忆的图腾。即便在苏联时期，它也被作为历史遗迹保护起来，虽然那种保护带着意识形态的烙印，但至少阻止了它被完全遗忘。如今，你触摸那些砖石，能摸到的不仅是中世纪骑士的冰凉野心，更有几百年来普通人在此生活的温度。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底感受卢扎，我强烈建议你留出一整天的时间，并且一定要在上午抵达。这样你可以捕捉到城堡废墟在晨光中的最佳状态，然后随着日光推移，慢慢体验小镇的生活气息，最后在湖边的落日余晖中结束完美的一天。整体游览节奏应该非常舒缓，以漫步和发呆为主，路程不远但值得细细品味。先从视觉和历史的震撼开始，再慢慢融入当地的日常节奏，这样的安排能让你由远及近、由历史到当下，层层深入地理解这个地方。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡废墟没有护栏，攀爬时务必注意脚下松动的砖石，尤其是在雨后，古老的石阶会非常湿滑。
小镇的餐厅和商店关门很早，尤其是周日，最好在下午五点前解决晚餐或采购需求。
拉特加尔地区昼夜温差可能较大，即使夏季也建议带一件防风外套，湖边和废墟上风很大。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一大早就直奔城堡山，沿着缓坡走上废墟，在空无一人的断壁残垣间感受第一缕阳光把红砖染成金红色的神圣时刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细辨认废墟的格局，找到昔日主塔的位置，想象脚下曾是宴会厅或礼拜堂，然后走到面对大卢扎湖的悬崖边，体会那种一夫当关的险要视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡下来，绕到山脚的小卢扎湖畔，沿着木板步道安静地走一段，从下往上仰望废墟的倒影在水中微微荡漾。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进卢扎历史博物馆那座可爱的木头房子里，花上一个小时看看从城堡地基里发掘出的箭头、陶罐和古老的钥匙，把刚才的想象填充进真实的细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午就在主街找家家庭餐馆，点一份地道的拉特加尔风格炖肉配黑麦面包，和笑容腼腆的老板娘用简单的英语或手势聊聊天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后消食，去探访镇中心那些五彩斑斓的木头房子和小小的天主教堂，感受这个拉脱维亚东部小镇与众不同的、略带波兰风情的宁静氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前一小时，回到大卢扎湖的北岸，找一张面对城堡山的野餐长椅坐下，看着夕阳的余晖一点点为废墟和整个小镇披上紫金色的外衣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有精力，晚餐后可以再次漫步到城堡山下，在深蓝色的夜幕和繁星下，看看被柔光灯轻微照亮的废墟轮廓，那又是另一番神秘而宁静的景象。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大卢扎湖北岸全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，站在湖北岸的草坪或码头上，用广角镜头可以同时捕捉到城堡废墟、山丘绿树、平静湖面以及天空的霞光，构成一幅层次绝美的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`废墟拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`走进废墟内部，找到一个保存相对完好的拱门或窗框，以它为前景框架，将对面的湖泊或小镇彩色的屋顶纳入框中，瞬间增加照片的故事感和纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`小卢扎湖倒影镜面`}</h4>
                  <p className="text-sm text-gray-700">{`清晨无风时，在小卢扎湖东侧的步行道寻找角度，让城堡废墟的倒影完整地映在如镜的水面上，对称构图会带来极强的视觉冲击力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`木屋街巷与城堡同框`}</h4>
                  <p className="text-sm text-gray-700">{`在老城区的某些狭窄街巷，比如 near Rigas iela，可以巧妙地将色彩柔和的传统木制房屋作为前景，远景则是山丘上的红砖废墟，形成生活与历史的温情对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`微观细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`靠近废墟的墙壁，拍摄那些历经数百年风雨侵蚀的砖块纹理、缝隙里顽强生长的野花或是古老的砖石标记，用特写讲述时间的质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拉脱维亚人对隐私很看重，拍摄当地居民尤其是他们的房屋时，最好先微笑示意或征得同意。`}</li>
                <li>• {`夏季的“白夜”现象意味着日落很晚且天色不会全黑，晚上九点后仍有迷人的蓝调时光，是拍摄废墟夜景的黄金期。`}</li>
                <li>• {`使用无人机在当地法规允许的区域内是可行的，但务必远离民居并保持低调，在湖泊上空拍摄废墟与城镇的全景会非常震撼。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔宁静之选`}</h4>
                  <p className="text-sm text-blue-800">{`就在大卢扎湖岸边的家庭式旅馆，房间窗户正对着湖水和城堡山，早上会被天鹅的叫声和湖面的金光唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心民宿`}</h4>
                  <p className="text-sm text-green-800">{`一栋拥有百年历史的舒适木屋，房东老夫妇会为你准备丰盛的拉特加尔早餐，并告诉你那些旅行指南上没有的本地传说。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`经济便捷客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`位于镇口主干道旁的现代风格客栈，干净明亮，对于自驾者来说停车非常方便，是探索周边森林与湖泊的理想基地。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`特色历史体验`}</h4>
                  <p className="text-sm text-purple-800">{`小镇附近乡村由旧农庄改造的度假屋，完全融入当地田园生活，晚上可以在院子里生起篝火，仰望毫无光污染的璀璨星河。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卢扎的住宿数量非常有限，尤其在夏季周末，务必提前数周甚至数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇治安极好，夜晚安静祥和，可以放心地独自散步。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择住在湖边或老城区，虽然可能设施略传统，但那种沉浸式的体验远非镇郊酒店可比，真正能感受到“住在风景和历史里”。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开卢扎好多天了，我脑海里反复出现的，不是某一张具体的照片，而是一种感觉。那是一种巨大的宁静，一种时间终于在此处放缓脚步、甚至坐下来休息的踏实感。在这个凡事追求崭新、快速、闪耀的世界里，卢扎坦然展示着自己的破碎与古老。它不试图修复成光鲜的假古董，也不为自己的偏僻而焦虑。它就是它，一座伟大的废墟，一个宁静的湖边小镇，两者相伴了数百年，早已达成了某种深刻的谅解。这种完整接纳自身所有历史层次——包括那些残破和伤痕——的状态，本身就具有一种强大的治愈力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，为什么你要来卢扎？不是为了收集又一个“打卡”的世界遗产，而是为了来上一堂关于时间与存在的哲学课。在这里，你会明白，历史不总是胜利者的凯歌，更多时候是沉默的砖石与平静的湖水；辉煌会崩塌，但生活会在废墟旁继续绽放。它教会你用不同的尺度看待生命：个人的悲欢在数百年的城墙面前固然微小，但正是无数代平凡人的呼吸与注视，赋予了这些石头超越战争的意义。每一位热爱深度游的旅人，都应该来这个拉脱维亚的角落，静静地坐上一会儿。让自己被那种红砖的厚重与湖水的轻柔同时包裹，你会听到，历史在风中低语的不是战争，而是关于韧性、共存与和平的，更加悠长的故事。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bauska-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    包
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">包斯卡城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bauska Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dobele" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多贝莱古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dobele</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/edole-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃多莱城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ēdole Castle</p>
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
