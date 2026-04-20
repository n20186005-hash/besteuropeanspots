import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡尔莫纳 Carmona｜塞维利亚的时光胶囊，古罗马城门与摩尔城堡的千年守卫 - 最佳欧洲景点',
  description: '车子刚刚驶离塞维利亚的喧嚣，眼前的风景就迅速变成了连绵的橄榄园和金色的麦田。当远方地平线上，一座白色的小镇如同王冠般稳稳地戴在一座孤山之上，你心里就会“咯噔”一下，知道目的地到了。那种感觉，不是初见伟大建筑的震撼，而是一种扑面而来的、沉甸甸的安定感。它不像那些被游客塞满的明信片小镇，它更像一个沉默而...',
}

export default function CarmonaSevilleSpainPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卡尔莫纳', href: '/attractions/carmona-seville-spain' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡尔莫纳・Carmona・西班牙・塞维利亚省，卡尔莫纳镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚刚驶离塞维利亚的喧嚣，眼前的风景就迅速变成了连绵的橄榄园和金色的麦田。当远方地平线上，一座白色的小镇如同王冠般稳稳地戴在一座孤山之上，你心里就会“咯噔”一下，知道目的地到了。那种感觉，不是初见伟大建筑的震撼，而是一种扑面而来的、沉甸甸的安定感。它不像那些被游客塞满的明信片小镇，它更像一个沉默而骄傲的守卫者，几千年来就这么看着平原上的日升月落。
穿过令人屏息的罗马城门——普埃塔德塞维利亚门时，时间立刻被压缩了。手指划过门洞旁被岁月打磨得无比光滑的巨石，凉意直透指尖。拱门内侧的幽暗与门外安达卢西亚炽烈的阳光形成戏剧性的对比，仿佛穿过一道时光隧道。门洞里总有三两老人坐着闲聊，他们的声音在石壁间回荡，混着远处咖啡馆飘来的苦咖啡香和新鲜出炉的“普林奥斯”面包的甜腻气味。这一刻，这座建于两千年前的军事防御设施，神奇地变成了社区客厅的背景墙。
当你真正走进卡尔莫纳的街巷，会立刻被它的“生活感”淹没。这里当然有历史，但历史不是被关在玻璃罩里的展品。它就在你脚下凹凸不平的石板路里，在转角突然出现的、装饰着华丽铁艺窗棂和鲜花的白色庭院里，在老教堂门口晒着太阳、慢悠悠剥着橘子的大爷身上。小镇依山而建，每一步爬升都能带来新的视野：一会儿是某个隐蔽广场上巴洛克教堂繁复到令人眼花缭乱的石雕立面，一会儿又能从两栋房子狭窄的缝隙间，瞥见山下无垠的平原，像一块巨大的、绿黄相间的地毯铺向天边。
而这一切的制高点，也是卡尔莫纳灵魂的所在，是那座摩尔人留下的城堡，现在的帕拉多国营古堡酒店。即便不住在那里，也一定要走到它的脚下。站在城堡的围墙边，猛烈的、带着干草气息的风几乎要把人吹透。从这里俯瞰，整个小镇的白色屋顶如波浪般在脚下铺展，远处的罗马城门成了一个小小的模型。你会瞬间明白，为什么从古至今的征服者都要抢占这里——它守住的不是一座城，是整个瓜达尔基维尔河谷的咽喉。但这种战略上的雄伟，此刻只化为一种极致的宁静与苍茫。夕阳西下时，整个卡尔莫纳会被镀上一层蜂蜜般的金色，钟声从好几座教堂的钟楼里不紧不慢地响起，那声音悠远而清澈，能一直落到你的心底。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚刚驶离塞维利亚的喧嚣，眼前的风景就迅速变成了连绵的橄榄园和金色的麦田。当远方地平线上，一座白色的小镇如同王冠般稳稳地戴在一座孤山之上，你心里就会“咯噔”一下，知道目的地到了。那种感觉，不是初见伟大建筑的震撼，而是一种扑面而来的、沉甸甸的安定感。它不像那些被游客塞满的明信片小镇，它更像一个沉默而骄傲的守卫者，几千年来就这么看着平原上的日升月落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过令人屏息的罗马城门——普埃塔德塞维利亚门时，时间立刻被压缩了。手指划过门洞旁被岁月打磨得无比光滑的巨石，凉意直透指尖。拱门内侧的幽暗与门外安达卢西亚炽烈的阳光形成戏剧性的对比，仿佛穿过一道时光隧道。门洞里总有三两老人坐着闲聊，他们的声音在石壁间回荡，混着远处咖啡馆飘来的苦咖啡香和新鲜出炉的“普林奥斯”面包的甜腻气味。这一刻，这座建于两千年前的军事防御设施，神奇地变成了社区客厅的背景墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你真正走进卡尔莫纳的街巷，会立刻被它的“生活感”淹没。这里当然有历史，但历史不是被关在玻璃罩里的展品。它就在你脚下凹凸不平的石板路里，在转角突然出现的、装饰着华丽铁艺窗棂和鲜花的白色庭院里，在老教堂门口晒着太阳、慢悠悠剥着橘子的大爷身上。小镇依山而建，每一步爬升都能带来新的视野：一会儿是某个隐蔽广场上巴洛克教堂繁复到令人眼花缭乱的石雕立面，一会儿又能从两栋房子狭窄的缝隙间，瞥见山下无垠的平原，像一块巨大的、绿黄相间的地毯铺向天边。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的制高点，也是卡尔莫纳灵魂的所在，是那座摩尔人留下的城堡，现在的帕拉多国营古堡酒店。即便不住在那里，也一定要走到它的脚下。站在城堡的围墙边，猛烈的、带着干草气息的风几乎要把人吹透。从这里俯瞰，整个小镇的白色屋顶如波浪般在脚下铺展，远处的罗马城门成了一个小小的模型。你会瞬间明白，为什么从古至今的征服者都要抢占这里——它守住的不是一座城，是整个瓜达尔基维尔河谷的咽喉。但这种战略上的雄伟，此刻只化为一种极致的宁静与苍茫。夕阳西下时，整个卡尔莫纳会被镀上一层蜂蜜般的金色，钟声从好几座教堂的钟楼里不紧不慢地响起，那声音悠远而清澈，能一直落到你的心底。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡尔莫纳`} />
                <InfoRow label="英文名称" value={`Carmona`} />
                <InfoRow label="正式名称" value={`Carmona`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`塞维利亚省，卡尔莫纳镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了伊比利亚半岛史前、古罗马、伊斯兰与基督教文明更迭的活化石城镇，被誉为“安达卢西亚的阳台”。`} />
                <InfoRow label="建筑特色" value={`白色房屋与红瓦屋顶构成的迷宫般街道，被极其宏伟的罗马时代双层拱门与雄踞山巅的摩尔式城堡所镇守。`} />
                <InfoRow label="建筑风格" value={`融合了古罗马、摩尔式（穆德哈尔）与安达卢西亚巴洛克风格的迷人混合体。`} />
                <InfoRow label="文化价值" value={`它不仅是历史的层积岩，更是理解安达卢西亚乡村社会结构、宗教交融与韧性精神的绝佳样本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。核心古迹如阿尔卡萨尔德拉普埃塔（城堡）及部分教堂开放时间约为周二至周日10:00-18:00（夏季可能延长至20:00），冬季可能缩短至17:00，周一通常闭馆。罗马墓地（Necrópolis Romana）开放时间相似，但午休时间较长（通常14:00-16:00关闭）。重要节假日如圣诞节、元旦可能全天关闭。强烈建议行前在卡尔莫纳旅游局官网核对最新时刻表。`} />
              <InfoRow label="门票价格" value={`进入古镇免费。参观主要古迹需单独购票：阿尔卡萨尔城堡（Alcázar de la Puerta de Sevilla）门票约4欧元；罗马墓地（Necrópolis）门票约3欧元；圣佩德罗教堂（Iglesia de San Pedro）等主要教堂免费或小额捐赠。有联票选项，价格约6欧元，可覆盖2-3个主要景点。学生、65岁以上老人及儿童通常享有折扣，需出示有效证件。`} />
              <InfoRow label="地址" value={`Plaza de Arriba, 1, 41410 Carmona, Sevilla, Spain`} />
              <InfoRow label="交通方式" value={`从塞维利亚出发最为便捷。自驾：沿A-4公路向东北方向行驶约30分钟即可抵达，镇外有清晰指示牌和停车场（如Plaza de Arriba附近）。公共交通：从塞维利亚的圣胡斯塔火车站（Estación de Sevilla-Santa Justa）或市中心巴士站（Plaza de Armas）乘坐M-124或M-121路公交车，班次约每小时一班，车程约45分钟至1小时，票价约3欧元。从塞维利亚机场直接打车前往费用较高，约40-50欧元，建议先乘机场巴士到塞维利亚市区再转公交。购票建议直接在公交车上向司机购买。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卡尔莫纳的故事，得从比罗马人更早的时候讲起。这座山丘，早在史前时代就因其易守难攻的位置和俯瞰丰饶平原的视野，吸引了人类聚居。伊比利亚人在这里建立了坚固的定居点，他们大概也会像我们今天一样，站在山崖边，警惕地观望，或者充满希望地眺望丰收的田野。但真正把这里变成一座名载史册的坚固城池的，是罗马人。公元前二世纪，罗马共和国将触角深入伊比利亚半岛，他们一眼就相中了这个战略要地，赋予它“卡莫”的名字，并将其建设为连接重镇伊斯帕利斯（今天的塞维利亚）和科尔多瓦的重要节点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马人是了不起的建筑师和城市规划者。他们留下的最惊人的遗产，就是那座普埃塔德塞维利亚门。别把它想象成一个简单的门洞，它是一座复杂的双层拱门防御体系，兼具城门、堡垒和公共广场的功能。更令人震撼的是城外山坡上的罗马墓地。那不是一个阴森的地方，相反，在橄榄树的环绕下，那些古老的墓室、壁龛和陵墓，安静地诉说着罗马人对于来世的观念。其中一些贵族墓穴规模宏大，甚至有庭院和列柱廊，仿佛为灵魂准备的别墅。你可以想象，在两千年前，身着托加袍的罗马公民从这里庄严地列队而入，穿过那座宏伟的城门，市集里充斥着各种语言叫卖的声音，公共浴场蒸汽氤氲——那时的卡尔莫纳，是边疆行省里一座繁荣、自信且重要的城市。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马的光辉黯淡后，西哥特人来了又走，直到公元八世纪，北非的摩尔人跨过直布罗陀海峡，为这片土地带来了全新的文明印记。摩尔人加固并扩建了罗马的防御工事，并在城市的最高点，修建了我们今天看到的城堡的核心——阿尔卡萨尔。他们将复杂的灌溉技术和精美的几何图案带到这里，城堡的花园里想必曾流水潺潺，装饰着彩色的瓷砖。卡尔莫纳成为了泰法王国时期一个独立小王国的首都，达到了另一个繁荣的顶峰。那段时期，基督教、伊斯兰教和犹太教文化在这里相互碰撞又奇妙共生，街巷的布局、房屋内向庭院的设计，都深深打上了伊斯兰的烙印。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在1247年。卡斯蒂利亚国王“圣者”费尔南多三世，在收复失地运动的洪流中，兵临城下。经过艰苦的围城，卡尔莫纳最终被基督教王国收复。收复后的卡尔莫纳并未衰落，基督教国王们认识到了它的价值，对摩尔城堡进行了改造，将其变成了皇家宫殿。随后的几个世纪，在相对和平的环境下，卡尔莫纳的贵族和教会积累了财富，于是我们看到了一座又一座华丽的教堂和豪宅拔地而起。圣佩德罗教堂建起了高耸的、模仿塞维利亚希拉尔达塔的钟楼；圣母玛利亚主教堂则在内部堆砌了令人瞠目的巴洛克式黄金装饰。这些建筑，就像一层华丽的新漆，覆盖在罗马和摩尔的地基之上，共同构成了今天我们看到的、层次无比丰富的卡尔莫纳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它没有像一些城市那样在近代工业化浪潮中剧烈扩张或转型，某种程度上，这种“停滞”成了它的幸运。它安然地待在它的山丘上，保留了中世纪以来的街道肌理和舒缓的生活节奏。上世纪中叶，那座传奇的摩尔城堡被改造成西班牙第一批“帕拉多”国营古堡酒店之一，这个决定非常巧妙，既保护了古迹，又让旅行者有机会真正“住进”历史里。今天的卡尔莫纳，就像一位历经沧桑却衣冠整洁的老绅士，不疾不徐地向每一位愿意倾听的访客，讲述着跨越数千年的、关于生存、信仰与美学的漫长故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的方式是安排一整天（至少8小时）给卡尔莫纳，做一次沉浸式的时光漫步。建议早上9点左右从塞维利亚出发，避开最热的午间，大约10点前抵达。游览节奏宜慢不宜快，核心思想是“先宏观，再微观，最后以全景收尾”。上午精力充沛时，先攻克至高点城堡区域并俯瞰全城，然后下山逐步探访核心古迹和街巷；下午在阴影里穿梭，感受本地生活，最后在黄昏时分回到视野开阔处，等待金色的日落。这样的安排能最大程度地体验光线的变化与小镇不同时段的气质。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`中午12点到下午4点之间阳光非常猛烈，尽量安排室内参观（如教堂）或在咖啡馆休息，准备好帽子、墨镜和充足的水。小镇很多小巷坡度很大，务必穿一双绝对舒适、防滑的步行鞋。警惕过于热情的“向导”在城门口招揽生意，官方旅游信息中心就在罗马城门内，可以免费获取地图和建议。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从震撼人心的普埃塔德塞维利亚罗马城门进入，用手触摸那些冰凉的、历经两千年战火与风雨的巨石，感受穿越时空隧道的恍惚。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直上行，穿过宁静的白色街巷，目标明确地前往山顶的阿尔卡萨尔城堡，不急着拍照，先让自己沉浸在那近乎360度的、统治了整个安达卢西亚平原的壮阔视野里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡下来，绕到背面的圣佩德罗教堂，仰头看那座“小希拉尔达塔”，然后钻进它旁边迷宫般的圣费利佩街区，在错综复杂的白色小巷中“迷路”，偶遇一个又一个开满鲜花的私家庭院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政广场（Plaza de San Fernando）找一家有遮阳棚的咖啡馆坐下，像当地人一样点一杯冰镇啤酒或“咖啡 con hielo”，什么都不做，就看广场上的人来人往和鸽子起落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午的时光留给圣母玛利亚主教堂，让自己被内部那极致奢华、金光闪闪的巴洛克祭坛所震撼，然后对比旁边简朴的哥特式回廊，体会两种虔诚的不同表达。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街Calle Prim缓缓下行，浏览那些售卖陶器、橄榄油和本地刺绣的小店，用嗅觉寻找一家传统的糕点铺，买一块用糖和杏仁粉做的“托卡多”甜点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和兴趣允许，在日落前乘车或步行（约20分钟）前往城外的罗马墓地，在漫长的斜阳下，漫步于古老的墓穴之间，感受一种超越时空的奇异宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在日暮时分回到古城边缘的某处观景台，比如城堡下方的城墙步道，看着小镇的灯火一一点亮，从一片金色的辉煌渐入蓝调时刻的静谧。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`罗马城门内部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，阳光会直射入门洞，站在门内阴影处向外拍摄，可以拍到光线勾勒出古老石拱的完美轮廓，门外是鲜活的现代小镇生活，对比感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从阿尔卡萨尔城堡城墙西南角俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，这里可以将小镇层层叠叠的白色屋顶、教堂钟楼作为前景，背景是无限延伸的安达卢西亚平原，构图充满层次感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣费利佩街区的狭窄巷弄`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，太阳西斜，光线会斜射入狭窄的白墙巷子，形成迷人的光影切割，等待一个本地居民或一只猫走过，能为画面注入灵魂。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣母玛利亚主教堂祭坛细节`}</h4>
                  <p className="text-sm text-gray-700">{`室内光线较暗，需使用高感光度或三脚架（若允许），聚焦于祭坛上局部极其繁复的金色雕刻，利用阴影突出其立体感和奢华质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城外罗马墓地的人像雕塑与橄榄树`}</h4>
                  <p className="text-sm text-gray-700">{`日落前的黄金一小时，阳光低角度照射，让古老的石雕产生长长的阴影，与虬结的橄榄树一同构成充满哲理和故事感的画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人，务必先微笑并示意，获得对方默许后再举起相机，这是基本的尊重。在教堂内部拍摄前，务必查看是否有禁止拍照或禁止使用闪光灯的标志，宗教场所需格外谨慎。蓝调时刻（日落后半小时）在小镇高处拍摄点灯的城市全景，会得到比纯夜景更富氛围感的照片。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`终极体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接入住阿尔卡萨尔德拉普埃塔城堡内的帕拉多国营古堡酒店，在真正的中世纪城墙房间里入睡，清晨独享空无一人的城堡露台和仿佛专属于你的无边平原景色。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心精品之选`}</h4>
                  <p className="text-sm text-green-800">{`藏身于主广场附近一座经过精心修复的16世纪贵族宅邸，房间环绕着一个经典的安达卢西亚内庭，晚上能听到广场上轻柔的吉他声，位置完美。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`由一对当地夫妇经营的“卡萨”民宿，位于一条安静的坡巷里，房间虽小但一尘不染，早餐有家传秘方的橘子酱和新鲜羊角包，主人能告诉你最地道的酒馆在哪里。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`乡间宁静度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`位于卡尔莫纳城外几分钟车程的橄榄园中，一座独立的“科尔蒂霍”农舍，拥有私人泳池和烧烤区，白天探索古镇，晚上归来享受绝对的星空与寂静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在历史中心，请做好需要拖着行李走一段石板坡路的准备，但沉浸感无可替代。古镇夜间非常安全宁静，可以放心散步。预订帕拉多酒店或热门民宿务必提前数月，尤其是春秋旺季和周末。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡尔莫纳许久，我脑海里反复出现的，不是某一座具体的建筑，而是一种感觉。那是一种厚重的“在地感”。它不像那些被精心包装的旅游产品，它从未试图讨好谁。它只是在它的山头上，日复一日地过着自己的生活。历史在这里不是标本，而是呼吸，是墙壁的温度，是街角老咖啡杯里冒出的热气。你会觉得，这座城市是有记忆、有性格的，它记得罗马军团的脚步声，记得摩尔人庭院里的水声，也记得基督教钟声每一次的敲响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在一切都追求快速、新潮和刺激的今天，卡尔莫纳提供了一种截然相反的旅行价值：不是获取，而是沉淀；不是打卡，而是感受。它教会你慢下来，用脚去丈量时间的厚度，用眼睛去阅读石头的语言，用心去体会一种延续了千年的生活韧性。在这里，你会明白，真正的震撼往往不是仰视高耸入云的尖塔，而是当你抚摸一道两千年前的城墙，发现它的基石依然稳固，而墙缝里一株小小的野花，正迎着风盛开。对于任何一位厌倦了浮光掠影，渴望触碰欧洲真实脉搏与灵魂的旅人来说，卡尔莫纳都是一剂必不可少的、安神定心的良药。它静静地在塞维利亚的光环旁闪烁着属于自己的、温润而坚定的光芒，等待懂得的人前来，与时光对坐，共饮一杯。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/loarre-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗阿雷城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Loarre Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ainsa-medieval-town-pyrnees" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    艾
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">艾恩萨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ainsa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/segovia-aqueduct" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞哥维亚罗马水道桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Segovia Aqueduct</p>
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
