import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡蒂亚 Sitia｜克里特岛东部的“慢生活”秘密，威尼斯要塞与无垠棕榈海滩的慵懒协奏 - 最佳欧洲景点',
  description: '车子沿着克里特岛东部的海岸公路拐过一个弯，锡蒂亚就像一幅突然在你眼前展开的、有点褪色却无比温暖的油画。第一眼绝不是震撼，而是一种温柔的接纳。湛蓝得近乎不真实的爱琴海湾怀抱着一个弧度完美的港口，几十艘蓝白相间的小渔船随着波浪轻轻摇摆，发出懒洋洋的吱呀声。空气里有海风咸湿的味道，混杂着从港口咖啡馆飘来的',
}

export default function SitiaCretePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '锡蒂亚', href: '/destinations/europe' },
            { label: '锡蒂亚', href: '/attractions/sitia-crete' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡蒂亚・Sitia・希腊・锡蒂亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着克里特岛东部的海岸公路拐过一个弯，锡蒂亚就像一幅突然在你眼前展开的、有点褪色却无比温暖的油画。第一眼绝不是震撼，而是一种温柔的接纳。湛蓝得近乎不真实的爱琴海湾怀抱着一个弧度完美的港口，几十艘蓝白相间的小渔船随着波浪轻轻摇摆，发出懒洋洋的吱呀声。空气里有海风咸湿的味道，混杂着从港口咖啡馆飘来的、浓得化不开的希腊咖啡香气和烤章鱼的焦香。阳光在这里似乎都变得黏稠而缓慢，洒在沿岸一排排彩色百叶窗的房子上，一切都慢了下来。
你的视线会不由自主地被城市后方那座小山丘吸引。那里，赭石色的卡扎尔马要塞如同一个沉默的巨人，静静地蹲伏在蔚蓝天空下。它没有西欧城堡那种童话般的尖顶与繁复装饰，就是那么几堵厚实、近乎粗犷的城墙和一座主塔，线条简单直接，却充满了历史的重量感。沿着老城区蜿蜒的、被无数脚步磨得光滑的石阶向上走，两旁是开着九重葛的院落，老太太坐在门口剥豆子，猫咪在阴影里打盹。这里听不到大型旅游城市的喧哗，只有摩托车的突突声、邻居间的招呼声和海浪永恒的背景音。
锡蒂亚最打动人心的，正是这种“生活在此处”的质感。卡扎尔马要塞不是被圈起来仅供瞻仰的纪念碑，它脚下的山坡就是当地人傍晚散步、情侣约会看日落的后花园。港口边的长廊上，从早到晚都坐着喝咖啡、玩西洋双陆棋的老人们，时间仿佛在这里失去了效力。这里的心脏是港口，是集市，是那些飘着音乐的小酒馆（kafenio），而不是某个特定的景点。它向你展示了克里特岛灵魂中悠闲、坚韧、热爱生活的那一面，这种魅力需要你停下脚步，坐下来，喝一杯冰镇雷基酒（raki），才能真正品味到。
而当你驱车离开城区，前往周边的旷野时，另一种震撼在等待。托普卢修道院如同一座坚固的精神堡垒，孤独地矗立在贫瘠而壮丽的东部土地上，它的存在本身就是一个关于信仰与坚守的故事。更远处，欧洲最大的原生棕榈林——瓦伊海滩，则带来一种近乎异域的热带风情。从军事要塞到精神修道院，再到史前般的自然海滩，锡蒂亚地区就像一个微缩的、充满对比的世界，每一种体验都如此纯粹而深刻。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着克里特岛东部的海岸公路拐过一个弯，锡蒂亚就像一幅突然在你眼前展开的、有点褪色却无比温暖的油画。第一眼绝不是震撼，而是一种温柔的接纳。湛蓝得近乎不真实的爱琴海湾怀抱着一个弧度完美的港口，几十艘蓝白相间的小渔船随着波浪轻轻摇摆，发出懒洋洋的吱呀声。空气里有海风咸湿的味道，混杂着从港口咖啡馆飘来的、浓得化不开的希腊咖啡香气和烤章鱼的焦香。阳光在这里似乎都变得黏稠而缓慢，洒在沿岸一排排彩色百叶窗的房子上，一切都慢了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你的视线会不由自主地被城市后方那座小山丘吸引。那里，赭石色的卡扎尔马要塞如同一个沉默的巨人，静静地蹲伏在蔚蓝天空下。它没有西欧城堡那种童话般的尖顶与繁复装饰，就是那么几堵厚实、近乎粗犷的城墙和一座主塔，线条简单直接，却充满了历史的重量感。沿着老城区蜿蜒的、被无数脚步磨得光滑的石阶向上走，两旁是开着九重葛的院落，老太太坐在门口剥豆子，猫咪在阴影里打盹。这里听不到大型旅游城市的喧哗，只有摩托车的突突声、邻居间的招呼声和海浪永恒的背景音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡蒂亚最打动人心的，正是这种“生活在此处”的质感。卡扎尔马要塞不是被圈起来仅供瞻仰的纪念碑，它脚下的山坡就是当地人傍晚散步、情侣约会看日落的后花园。港口边的长廊上，从早到晚都坐着喝咖啡、玩西洋双陆棋的老人们，时间仿佛在这里失去了效力。这里的心脏是港口，是集市，是那些飘着音乐的小酒馆（kafenio），而不是某个特定的景点。它向你展示了克里特岛灵魂中悠闲、坚韧、热爱生活的那一面，这种魅力需要你停下脚步，坐下来，喝一杯冰镇雷基酒（raki），才能真正品味到。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你驱车离开城区，前往周边的旷野时，另一种震撼在等待。托普卢修道院如同一座坚固的精神堡垒，孤独地矗立在贫瘠而壮丽的东部土地上，它的存在本身就是一个关于信仰与坚守的故事。更远处，欧洲最大的原生棕榈林——瓦伊海滩，则带来一种近乎异域的热带风情。从军事要塞到精神修道院，再到史前般的自然海滩，锡蒂亚地区就像一个微缩的、充满对比的世界，每一种体验都如此纯粹而深刻。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡蒂亚`} />
                <InfoRow label="英文名称" value={`Sitia`} />
                <InfoRow label="正式名称" value={`Sitia`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`锡蒂亚`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座宁静的港城曾是威尼斯帝国在东部克里特岛的重要贸易前哨，其山顶的要塞守护了数百年的海上商路，也见证了克里特岛从威尼斯统治到奥斯曼时代，直至现代希腊的复杂历史变迁。`} />
                <InfoRow label="建筑特色" value={`坚固朴素的威尼斯军事堡垒与依山而建的白色阶梯式民居形成鲜明对比，展现出实用主义防御工事与爱琴海传统民居风格的奇妙共存。`} />
                <InfoRow label="建筑风格" value={`卡扎尔马要塞是典型的威尼斯复兴时期军事建筑风格，而城区的房屋则属于简约的爱琴海岛式建筑，大量使用白色涂料和彩色门窗。`} />
                <InfoRow label="文化价值" value={`它是体验“真正”克里特慢生活的样板，远离西部喧嚣的旅游团，保留了传统咖啡馆文化、渔港节奏和深厚的东正教修道院传统，是观察现代希腊地方生活与历史遗产和谐交融的绝佳窗口。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`卡扎尔马要塞开放时间大致为夏季（4月至10月）每天8:30-19:30，冬季开放时间缩短，通常为8:30-15:30，具体日期可能微调，建议出行前查询当地旅游局网站。托普卢修道院开放时间通常为每天9:00-13:00及14:00-日落，周日和宗教节日午间不开放。请注意，希腊许多景点在公共假日（如复活节、圣诞节）可能有特殊安排或临时关闭。`} />
              <InfoRow label="门票价格" value={`卡扎尔马要塞门票约2-3欧元。托普卢修道院通常为捐赠入场，建议捐赠2-3欧元以支持修道院维护。周边海滩及老城区公共区域免费。学生及欧盟老年人可能有优惠，但政策灵活，建议携带证件。`} />
              <InfoRow label="地址" value={`卡扎尔马要塞地址：Kazarma Fortress, Sitia 723 00, Greece
托普卢修道院地址：Toplou Monastery, Sitia 723 00, Greece`} />
              <InfoRow label="交通方式" value={`最近的国际机场是锡蒂亚公共机场（JSH），但航班较少。多数游客飞往伊拉克利翁（HER）机场。从伊拉克利翁出发：最推荐自驾，沿E75/A90号公路向东行驶约2小时即可抵达锡蒂亚，沿途海景壮丽。公共交通可乘坐KTEL长途巴士，车程约2.5-3小时，每日班次有限（夏季约4-5班/天，冬季更少），建议提前在伊拉克利翁巴士总站查询并购票。在锡蒂亚城内，景点步行可达，但前往托普卢修道院和瓦伊棕榈海滩（Vai Beach）需自驾或参加当地一日游团。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡蒂亚的故事，得从海上那些帆影说起。早在米诺斯文明时期，这里可能就有一个叫“伊塔诺斯”的港口城市。但真正让它在历史上留下清晰印记的，是13世纪的威尼斯人。当时的威尼斯共和国如日中天，急需巩固其在克里特岛（他们称为“坎迪亚王国”）的统治，并在东地中海建立一连串的贸易和防御据点。眼光毒辣的威尼斯总督看中了这个拥有天然良港、背靠山丘的战略要地。于是，“卡扎尔马”这座要塞开始在山顶上崛起。“卡扎尔马”这个名字本身就源自威尼斯语“Casa di Arma”，意为“军械库”或“兵营”，赤裸裸地表明了它的军事用途。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在威尼斯统治的近四百年里，锡蒂亚是一个忙碌而重要的二级港口。克里特岛盛产的橄榄油、葡萄酒、蜂蜜，从这里装上船只，运往威尼斯乃至整个欧洲。要塞的城墙和塔楼，警惕地注视着海面，提防着 rival 的热那亚人，以及越来越具有威胁的奥斯曼海军。城墙之内，是一个小型但自给自足的社区，有驻军、官员、商人和工匠。你可以想象那时港口帆樯如林，码头工人吆喝，空气中弥漫着货物和海洋气息的繁忙景象。威尼斯人留下的，不仅仅是那座要塞，还有他们对城市规划和防御工事的理念，这些深深烙印在了锡蒂亚的肌理中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，坚固的石墙终究挡不住历史的浪潮。1645年，奥斯曼帝国的大军开始全面进攻克里特岛。经过惨烈的长期围困，包括锡蒂亚在内的东部克里特在1648年陷落。威尼斯时代戛然而止。奥斯曼人占据了要塞，并对城市进行了改造，兴建了清真寺和浴室。但有趣的是，锡蒂亚似乎从未成为奥斯曼统治的核心区域，它相对偏远的位置反而让它在某种程度上保留了更多的克里特本土特色。这里的山丘和村落，成为了后来克里特人多次反抗奥斯曼统治的根据地和庇护所，流淌着不屈的血液。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间跳到20世纪，锡蒂亚地区又卷入了另一场全球风暴。在二战期间，克里特岛战役惨烈无比。而偏远的托普卢修道院，却扮演了一个意想不到的英雄角色。这座建于15世纪的坚固修道院，因其孤立的位置和厚实的高墙，成为了克里特抵抗组织和盟军间谍的秘密据点和中转站。修道院的院长和修士们冒着极大的风险，为抵抗战士提供 shelter、食物和情报，甚至隐藏了珍贵的克里特文物免遭纳粹掠夺。这段历史，为这片土地平添了一笔悲壮而英勇的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的锡蒂亚，早已洗去了战争的硝烟和殖民的痕迹。它安然地享受着和平与阳光。上世纪七十年代后，随着道路的改善和旅游业的缓慢发展，它向世界打开了大门，但幸运的是，它没有选择疯狂扩张的道路。它依然是一个以农业（特别是橄榄和葡萄）、渔业和温和旅游业为主的小城。卡扎尔马要塞经过精心修缮，不再用于军事，而是成为了文化活动的场所和俯瞰全城的绝佳观景台。威尼斯人、奥斯曼人、抵抗战士的故事，都层层叠叠地沉淀在了这里的石头、土壤和海洋里，化为了如今那份独特而从容的底蕴。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度体验锡蒂亚，强烈建议安排至少一整天的完整时间，并最好租车以拥有最大灵活性。理想的节奏是“上午探秘历史与信仰，午后沉醉阳光与海洋，傍晚回归古城与烟火”。早上九点左右从城区出发，驱车前往东北方向的托普卢修道院，避开午间最热时段。午后前往附近的瓦伊棕榈海滩放松，或在锡蒂亚本土的伊特拉科斯海滩享受更宁静的时光。下午四点半左右返回锡蒂亚城区，此时阳光角度变得柔和，正是徒步上山游览卡扎尔马要塞、并在城墙上看日落的黄金时间。日落后，慢悠悠下山，融入老城区的晚餐氛围。这样的安排劳逸结合，且能捕捉到一天中最美的光线。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季日照强烈，前往托普卢修道院和海滩务必做好防晒，携带充足饮用水，修道院周边几乎没有商业设施。
参观托普卢修道院时着装需庄重，男女都应避免无袖上衣和过短的裤裙，以示对宗教场所的尊重。
锡蒂亚城区停车在旺季可能稍显紧张，建议将车停在港口外围的公共停车场，然后步行探索，老城小巷更适合用双脚丈量。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨自驾出发，沿着克里特岛东部荒凉而迷人的海岸公路向北行驶，感受窗外不断变换的、从橄榄园到裸露岩山的粗犷景色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在托普卢修道院厚重的大门前停下，步入那个被高墙围合的宁静世界，在中庭古老的橘树下感受穿越时空的平和。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`细细参观修道院的小型博物馆和教堂，看看那些保存完好的圣像、二战时期的秘密电台，触摸这段集信仰、艺术与抗争于一体的历史。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后驱车片刻抵达瓦伊棕榈海滩，让自己瞬间从严肃的历史感切换到热带度假模式，在金沙滩和摇曳的棕榈影间彻底放松。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`或在更近的伊特拉科斯海滩找一张沙滩椅，点一杯鲜榨果汁，什么也不做，只是看碧绿清澈的海水一次次漫上鹅卵石滩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午晚些时候回到锡蒂亚，从老城区的石板路开始，顺着曲折的小巷和阶梯，像当地人一样散步上山，前往卡扎尔马要塞。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在要塞的城墙或塔楼上，找一个朝西的位置，静静等待夕阳将整个港口、城市和远山染成金红，这是锡蒂亚一天中最辉煌的时刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落之后，沿着被灯光点亮的蜿蜒小路下山，直奔港口边香气四溢的某家小酒馆，用一盘烤得恰到好处的章鱼和一杯冰凉的本地葡萄酒结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`卡扎尔马要塞西侧城墙日落观景点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时到一小时抵达，以城墙垛口为前景框架，拍摄夕阳下的锡蒂亚港口全景，温暖的色调与蓝色海湾形成绝佳对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`托普卢修道院中庭拱廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择上午十点或下午三四点阳光斜射时，站在拱廊下，拍摄阳光将拱门和廊柱的影子拉长投射在石板地面上的几何美学画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`锡蒂亚老城区蜿蜒阶梯与海景`}</h4>
                  <p className="text-sm text-gray-700">{`从要塞下山途中，寻找那些能同时捕捉到白色阶梯式民居、湛蓝海面和远处海湾弧线的拐角，使用中焦段压缩空间，营造层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`瓦伊棕榈海滩高处俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`爬上沙滩后方的小山坡（有指示路径），从制高点用广角镜头拍摄棕榈林簇拥着月牙形海滩和渐变色海水的标志性全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`港口渔船与生活特写`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，在码头边贴近那些色彩斑驳的渔船，捕捉缆绳、渔网、浮标等细节，或者拍摄渔民整理渔获、咖啡馆老人下棋的生活瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一支涵盖广角（如16-35mm）和中长焦（如70-200mm）的变焦镜头，以便灵活应对广阔海景和远处要塞细节的拍摄。`}</li>
                <li>• {`在修道院内部分区域和博物馆，通常禁止使用闪光灯和三脚架，拍摄前请留意标识或询问修士，保持安静和尊重。`}</li>
                <li>• {`当地人通常不反感被拍摄，但拍摄人物特写，尤其是老人和小孩，一个微笑和事先友好的示意（可以说“Kalimera”早安或“Efharisto”谢谢）会让他们更自在。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`港口情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在锡蒂亚港口正对面的一家庭经营式公寓酒店，推开阳台门就是无遮挡的蔚蓝海港 view，晚上听着轻柔的海浪声入眠，清晨看渔船出海。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`乡村静谧体验`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在锡蒂亚城郊橄榄园中的传统石屋民宿，由古老农舍修复而成，拥有私人庭院和泳池，享受绝对的宁静，主人还会奉上自家产的橄榄油和早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`老城中心特色`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻于卡扎尔马要塞山脚下老城巷弄里的精品酒店，由几栋连在一起的百年老房子改造，房间各有特色，露台直接面向要塞，出门就是最地道的咖啡馆和小店。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`无忧度假享受`}</h4>
                  <p className="text-sm text-purple-800">{`入住锡蒂亚城边伊特拉科斯海滩旁的现代设计酒店，拥有私人海滩区、泳池和海景餐厅，适合想要将历史探索与海滩放松完美结合，且追求舒适服务的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡蒂亚整体治安非常好，民风淳朴，夜间在港口和老城区散步也很安全。预订时，如果选择老城区的住宿，需注意部分房子依山而建，可能需要爬一段台阶，行李多的旅客建议提前联系确认。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）是旺季，尤其是周末，建议提前数周预订。春季（5-6月）和秋季（9-10月）气候同样宜人，价格更优，且能享受更宁静的体验。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开锡蒂亚好些日子了，我脑海里最常浮现的，不是某张明信片般的风景，而是一种感觉——那种时间可以流淌得很慢、很扎实的感觉。在这里，历史不是锁在玻璃柜里的标本，而是融化在咖啡杯里、刻在散步道石阶上、写在老人布满风霜笑容里的日常。卡扎尔马要塞的落日余晖，托普卢修道院橘树的清香，瓦伊海滩棕榈叶的沙沙响，还有港口那杯总也喝不尽的雷基酒，它们共同编织成一种独特的节奏，一种属于克里特岛东部的、悠长而真诚的呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求“打卡”和“效率”的旅行时代，锡蒂亚像一个温柔的提醒者。它告诉你，有些地方的价值不在于拥有多少“世界之最”，而在于它能否让你真正地“停下来”。停下來，看一场完整的日落；停下来，和陌生人下一盘棋；停下来，感受一座要塞从军事堡垒变为市民花园的身份转变中所蕴含的和平之可贵。它或许不够惊艳，却足够耐品。对于每一位厌倦了浮光掠影、渴望在旅途中找到某种内心共鸣的深度旅行者来说，锡蒂亚就是这样一个值得你绕点远路、专程前来，并愿意为之交付一整天光阴的“目的地”。在这里，你找到的不仅是地中海的阳光，更是一种关于如何生活的、古老而智慧的答案。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kavala-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡瓦拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kavala Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meteora-monasteries-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅黛奥拉悬空修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meteora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/preveza-nicopolis-greece" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普雷韦扎</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Preveza</p>
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
