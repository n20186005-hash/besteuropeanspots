import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '诺尔恰 Norcia｜圣本笃诞生地与黑松露天堂 - 探秘意大利翁布里亚的灵魂山城',
  description: '车子沿着蜿蜒的山路爬升，当一片被雄伟亚平宁山脉紧紧环抱的赭黄色城墙突然出现在眼前时，你知道，诺尔恰到了。推开厚重的Porta Ascolana城门走进去，第一股迎接你的气息绝非陈旧的历史尘埃，而是浓郁、霸道、令人瞬间垂涎的复合香气——那是陈年火腿、羊奶酪、野猪肉酱，还有，那若有若无却统领一切的王者之...',
}

export default function NorciaUmbriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '诺尔恰', href: '/destinations/italy' },
            { label: '诺尔恰（圣本笃的故乡与黑松露中心）', href: '/attractions/norcia-umbria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`诺尔恰（圣本笃的故乡与黑松露中心）・Norcia・意大利・诺尔恰`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着蜿蜒的山路爬升，当一片被雄伟亚平宁山脉紧紧环抱的赭黄色城墙突然出现在眼前时，你知道，诺尔恰到了。推开厚重的Porta Ascolana城门走进去，第一股迎接你的气息绝非陈旧的历史尘埃，而是浓郁、霸道、令人瞬间垂涎的复合香气——那是陈年火腿、羊奶酪、野猪肉酱，还有，那若有若无却统领一切的王者之味：黑松露。你的耳朵立刻被另一种充满生命力的“叮当”声吸引，那是铁匠铺里手工锻造狩猎刀和厨具的敲打声，清脆而有节奏，仿佛这座城市的心跳。
这里的生活是贴着地面的。广场上，穿着沾满泥土工作裤的老人们围在一起，用浓重的翁布里亚方言争论着今天的天气是否适合找松露；穿着洁白围裙的“诺尔恰屠夫”（Norcinerie）在橱窗后，如同艺术家般陈列着用辣椒和香料深红腌制的猪颈肉、硕大的奶酪轮。圣本笃大教堂的钟声在空气中庄重地荡开，但很快又被某家地窖餐厅飘出的烤野猪肉香味裹挟。在这里，神圣与世俗不是对立，而像黑松露与鸡蛋一样，经过时间的催化，交融成不可分割的美味整体。
诺尔恰最打动人心的，是一种扎根于苦难却绽放出丰盈的生命力。它坐落在地震带上，几个世纪来历经摧毁与重建。最近的一次是2016年那场惨烈的地震，让教堂的穹顶坍塌，让许多房屋变成危楼。但你看现在，城墙依然坚固，店铺照常营业，人们谈起损失时会眼神一黯，但随即会用力切下一片火腿请你品尝，说：“来，这个味道没变，永远不会变。”这种在废墟之上依然认真腌制火腿、寻找松露、敲打铁器的日常，本身就是一种最深刻的信仰和抵抗。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着蜿蜒的山路爬升，当一片被雄伟亚平宁山脉紧紧环抱的赭黄色城墙突然出现在眼前时，你知道，诺尔恰到了。推开厚重的Porta Ascolana城门走进去，第一股迎接你的气息绝非陈旧的历史尘埃，而是浓郁、霸道、令人瞬间垂涎的复合香气——那是陈年火腿、羊奶酪、野猪肉酱，还有，那若有若无却统领一切的王者之味：黑松露。你的耳朵立刻被另一种充满生命力的“叮当”声吸引，那是铁匠铺里手工锻造狩猎刀和厨具的敲打声，清脆而有节奏，仿佛这座城市的心跳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的生活是贴着地面的。广场上，穿着沾满泥土工作裤的老人们围在一起，用浓重的翁布里亚方言争论着今天的天气是否适合找松露；穿着洁白围裙的“诺尔恰屠夫”（Norcinerie）在橱窗后，如同艺术家般陈列着用辣椒和香料深红腌制的猪颈肉、硕大的奶酪轮。圣本笃大教堂的钟声在空气中庄重地荡开，但很快又被某家地窖餐厅飘出的烤野猪肉香味裹挟。在这里，神圣与世俗不是对立，而像黑松露与鸡蛋一样，经过时间的催化，交融成不可分割的美味整体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`诺尔恰最打动人心的，是一种扎根于苦难却绽放出丰盈的生命力。它坐落在地震带上，几个世纪来历经摧毁与重建。最近的一次是2016年那场惨烈的地震，让教堂的穹顶坍塌，让许多房屋变成危楼。但你看现在，城墙依然坚固，店铺照常营业，人们谈起损失时会眼神一黯，但随即会用力切下一片火腿请你品尝，说：“来，这个味道没变，永远不会变。”这种在废墟之上依然认真腌制火腿、寻找松露、敲打铁器的日常，本身就是一种最深刻的信仰和抵抗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`诺尔恰（圣本笃的故乡与黑松露中心）`} />
                <InfoRow label="英文名称" value={`Norcia`} />
                <InfoRow label="正式名称" value={`Norcia`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`诺尔恰`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`基督宗教西方隐修制度的发源地奠基人圣本笃的出生地，被誉为“西方修道院主义之摇篮”。`} />
                <InfoRow label="建筑特色" value={`被完整赭石色中世纪城墙环绕的珍珠，城内建筑呈现出独特的“诺尔恰风格”，即多次地震后重建形成的坚固、低矮且装饰简朴的样貌。`} />
                <InfoRow label="建筑风格" value={`以中世纪为基础，混合了罗马式、哥特式以及多次震后重建形成的务实抗震风格。`} />
                <InfoRow label="文化价值" value={`一处将神圣的宗教历史与极致世俗享乐（美食）完美融合的活态文化标本，体现了意大利人面对灾难与生活的韧性哲学。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`诺尔恰古城本身全天可自由漫步。主要宗教与历史遗址（如圣本笃大教堂、城堡博物馆）通常开放时间为夏季（4月至10月）上午9:30至下午1:00，下午3:30至7:00；冬季（11月至3月）时间缩短，且部分小型博物馆周一闭馆。城内众多肉铺、奶酪店和餐厅的营业时间较为灵活，午餐时段约12:30-3:00，晚餐约7:30开始。重要宗教节日（如圣本笃节）期间，开放时间会延长并有特殊活动。`} />
              <InfoRow label="门票价格" value={`漫步古城和城墙免费。进入圣本笃大教堂（Basilica di San Benedetto）免费，但欢迎捐款。市立博物馆（Museo Civico）门票约5欧元，学生及老年人有优惠。参加由当地向导带领的黑松露探寻之旅或美食工作坊，价格在50-150欧元之间，取决于团队规模和体验时长。品尝美食本身，从几欧元的街头小吃到人均50欧元以上的大餐，丰俭由人。`} />
              <InfoRow label="地址" value={`06046 Norcia, Province of Perugia, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是罗马菲乌米奇诺机场（FCO）或佩鲁贾圣埃吉迪奥机场（PEG）。从罗马出发，最便捷的方式是乘坐火车前往斯波莱托（Spoleto），车程约1.5小时，班次频繁。从斯波莱托火车站前，换乘Sulga或Spoletina公司的长途巴士前往诺尔恰，巴士沿SS685公路翻越山岭，一路风景壮丽，车程约1小时，每天约有4-6班车，建议提前在车站或其官网上查询并购买车票，周日班次会大幅减少。自驾是最灵活的选择，从斯波莱托出发约45分钟车程，但山路蜿蜒需小心驾驶。诺尔恰古城中心为ZTL限行区，需将车停在城墙外的免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲诺尔恰的故事，得从一个人开始：圣本笃。公元480年，他就出生在这里的一个罗马贵族家庭。那时的诺尔恰，还是罗马帝国边疆一个不起眼的小镇。年轻的本笃对罗马城的腐化堕落感到失望，选择逃往附近的苏比亚科山洞隐修，后来创立了那套影响西方文明至深的《圣本笃会规》——“祈祷与工作”。虽然他的人生主要在他建立的卡西诺山修道院展开，但诺尔恰作为他的出生地，从此被赋予了神圣的光环。中世纪时，这里成了重要的朝圣站点，人们沿着山路而来，只为触摸圣人故乡的泥土。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城市的命运与它的地理位置紧密相连。位于斯波莱托和亚得里亚海之间的战略要冲，诺尔恰在十三世纪达到了政治和经济的巅峰。也就是在那时，市民们用坚固的石头建造了那圈至今令人惊叹的完整城墙，以及宏大的圣本笃大教堂——就矗立在传说中圣人家宅的遗址之上。城墙不仅是防御工事，更是权力的宣言，它告诉世人，诺尔恰是一个自由的城邦。城内的贵族与平民，则在城墙的保护下，发展出精湛的农业、畜牧和手工艺，尤其是猪肉加工技术，为日后“美食之都”的美名埋下了种子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，诺尔恰的脚下是一片颤抖的土地。亚平宁山脉的造山运动让这里地震频发。每一次大地震，都像一双巨手将城市的积累狠狠摔碎。1730年，1859年，1979年……灾难的年份刻在历史书上，也刻在建筑重建的痕迹里。诺尔恰人发展出一种独特的建筑智慧：他们不再追求高耸入云的哥特式梦想，而是建造低矮、敦实、带有加固拱门的房屋。外墙是温暖的赭黄色，线条简洁，装饰朴素，一切为了稳固。于是，你看到的诺尔恰，不是佛罗伦萨那样的文艺复兴华美乐章，而是一首用石头写就的、关于生存的坚韧散文诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`地震在带走的同时，也意外地给予了。频繁的地质活动造就了周边山丘独特的石灰岩和粘土混合土壤，加上高山森林与草甸的纯净生态系统，这里成了顶级黑松露生长的天堂。而养猪的传统，则催生了举世闻名的“诺尔恰火腿”（Prosciutto di Norcia）以及其他无数猪肉制品。中世纪，这里的屠夫和厨师就以技艺高超闻名，甚至“Norcino”（诺尔恰屠夫）一词成了意大利语中“猪肉加工专家”的代名词。神圣的宗教起源与极致的世俗享乐，就这样在历史的长河中奇妙地融合，塑造了诺尔恰独一无二的双重灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最近的一次劫难，2016年8月24日的地震，让整个意大利中部颤抖。诺尔恰受损严重，圣本笃大教堂的正面和穹顶部分坍塌，许多建筑成为危楼。灾难后的几年，城里遍布脚手架和支撑梁，像一个正在康复的巨人。但当你今天走进它，你会震惊于它的生命力。修复工作在缓慢而坚定地进行，不仅仅是修复石头，更是修复社区网络和生活方式。人们没有离开，商店坚持营业，松露猎人依旧在拂晓时带着忠诚的狗进入森林。诺尔恰用行动告诉世界：它的历史写在石头上，更写在火腿的盐渍里、松露的香气中，以及人们每日重建生活的勇气里。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间，最好能在诺尔恰住上一晚，感受黄昏后游客散去、本地生活浮现的宁静。清晨抵达最佳，约八点半左右，这时柔和的晨光洒在城墙上，店铺刚刚卸下门板，空气中飘着新鲜咖啡和烤面包的香味。上午侧重历史与宗教脉络，沿着城墙漫步，探访核心广场与教堂；中午及下午完全交给感官盛宴，深入肉铺、奶酪店，享受漫长的午餐，甚至可以预约一次短暂的周边徒步；黄昏时分，在城墙上或广场边静坐，看光影变幻。这样的节奏张弛有度，既能领略其深厚历史，又能沉浸于活色生香的当下。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`许多小型博物馆和教堂内部可能因修复工作而临时关闭，出行前最好查看当地旅游信息网站的最新通知。与松露猎人进行探寻活动必须提前数日甚至数周预约，且强烈依赖季节和天气，秋冬是最佳时机。山区天气多变，即使夏日也请带一件防风外套，并穿一双适合行走石子路的舒适鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从Porta Ascolana城门进入后，先别急着冲向中心，向左拐上那段可以行走的古老城墙，用手触摸那些被风雨侵蚀出孔洞的石头，俯瞰城内红色屋顶的波浪和远处巍峨的西比里尼山。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着城墙走到 Piazza San Benedetto 主广场，静静地坐在石阶上，看阳光如何一点点照亮圣本笃大教堂那融合了哥特式玫瑰窗和地震后修复痕迹的复杂立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必走进教堂地下层的考古区，在幽暗的灯光下辨认古罗马住宅的镶嵌地板遗迹，那里被认为是圣本笃儿时的家，感受历史层理在脚下实实在在的堆积。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂出来，把自己扔进广场周边任何一家诺尔恰肉铺（Norcineria），不急着买，先像看艺术展一样欣赏橱窗里用红辣椒粉装饰的火腿、硕大的意式猪脸肉（Guanciale）和晶莹的脂肪纹路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在本地人推荐的餐厅点一份用诺尔恰黑松露碎慷慨铺满的扁意面（Strangozzi），配上一杯醇厚的萨格兰蒂诺红酒，让浓郁坚果香气在口腔中爆炸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后漫步到安静的 Chiesa di Sant‘Agostino 教堂附近，这里的建筑外墙有着地震留下的清晰裂痕和现代工程加固的钢架，是理解这座城市创伤与韧性的活教材。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，向城外走一小段，沿着通往“ Castelluccio ”平原方向的步道散散步，回望诺尔恰城墙与群山融为一体的全景，想象中世纪朝圣者看到它的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，回到主广场，找一家咖啡馆的外摆座，点一杯Aperol Spritz，看广场从金色的夕阳过渡到温柔的蓝调时刻，灯光渐次亮起，一天的喧嚣沉淀为沉稳的静谧。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城墙东北角外侧草坪仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，阳光从侧面照亮赭石色城墙，以远处云雾缭绕的西比里尼山为背景，能拍出古城作为山间堡垒的孤傲与雄浑。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Piazza San Benedetto 广场东南角拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`利用拱廊作为天然画框，构图将圣本笃大教堂的立面、广场上的人群以及远处山脉一同纳入，最佳拍摄时间是上午，光线均匀。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`某家诺尔恰肉铺（Norcineria）的橱窗前`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚店铺内部灯光亮起时，隔着玻璃拍摄橱窗内琳琅满目的火腿、香肠和奶酪的丰富色彩与纹理，对焦在某一片火腿的油润反光上，营造诱人的美食视觉。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从 Via Umberto I 街道中段向西拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`这条笔直的街道尽头正好是 Porta Ascolana 城门的拱洞，利用街道两侧的建筑线条形成强烈透视引导线，在日落前半小时，暖色调光线穿过门洞，意境深远。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`古城外通往 Castelluccio 的公路第一个转弯处`}</h4>
                  <p className="text-sm text-gray-700">{`这里是拍摄诺尔恰全景的经典机位，尤其推荐在清晨有薄雾或雨后初晴时，能拍到古城被群山环抱、仿佛漂浮在云中的仙境画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地店主、手工艺人或居民时，务必先微笑并征得对方同意，一个简单的手势或一句“Foto？”就能体现尊重。室内肉铺和餐厅通常允许拍摄食物和环境，但避免使用闪光灯打扰其他客人。地震受损的建筑和修复现场是历史的一部分，可以拍摄，但请保持庄重的态度。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山居老屋`}</h4>
                  <p className="text-sm text-blue-800">{`由城墙内一栋17世纪石屋改造的B&B，房间保留了原始的石头墙壁和木梁，女主人会为你准备用自家果园水果制作的丰盛早餐，充满家庭温暖。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`修道院静谧`}</h4>
                  <p className="text-sm text-green-800">{`位于古城边缘一座经过精心修复的前修道院建筑内，房间挑高极高，气氛宁静肃穆，花园里还种植着修道士曾经使用的草药，适合寻求灵性休憩的旅人。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`松露农庄体验`}</h4>
                  <p className="text-sm text-yellow-800">{`住在城外几公里处一个家族经营的农庄，房间简朴但一尘不染，晚餐可能直接来自农庄自产食材，主人还能为你安排真正的松露探寻之旅，深度连接土地。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感隐居`}</h4>
                  <p className="text-sm text-purple-800">{`古城中心一栋受损建筑重建后的精品设计酒店，将现代极简美学与古老石材完美结合，屋顶露台拥有360度无敌山景，是品味与景观的绝佳结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`诺尔恰不是大型旅游城市，住宿数量有限，尤其在黑松露季节（秋冬季）和重要宗教节日期间，务必提前数月预订。住在城墙内虽方便，但夜晚极为安静，几乎听不到车声，只有风声和教堂钟声。选择城外农庄意味着需要自驾或有自行车，但能获得更深刻的田园体验和星空。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开诺尔恰时，你的行李可能会重了一些，里面塞满了用油纸包好的火腿、坚硬的奶酪，或许还有一小罐矜贵的黑松露酱。但比这些更重的，是心里装满的某种质感复杂的东西。那不只是对一个美丽中世纪山城的风景记忆，更是一种关于“如何生活”的深刻触动。在这里，你看到了信仰最朴素的起源——一个青年对内心世界的追寻；你也看到了灾难最真实的模样——大地无情的撕裂。但诺尔恰人将这两者，都化作了生活本身：在圣人出生的地基上建起教堂，也在被地震摧毁的废墟旁升起炊烟；他们纪念神圣，也隆重地庆祝一块沾满泥土的菌菇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速、光滑、一步到位的世界里，诺尔恰就像一个固执的逆行者。它不完美，伤痕累累，重建的痕迹清晰可见，但这恰恰是它最诚实、最有力量的地方。它告诉你，文化不是博物馆里玻璃罩下的标本，而是每日清晨铁匠铺的敲打声，是屠夫案板上精准的一刀，是老太太从地窖里捧出的那瓶自制樱桃酒。它脆弱，因其立于地震带；它又无比坚韧，因其生命扎根于自己的传统与风味之中，深不可摧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来一次诺尔恰。不是为了打卡又一个“世界遗产”，而是来上一堂生动的“韧性”之课。在这里，你会明白，真正的深度旅行，是去触摸一个地方的伤疤与荣耀，品尝它的泪水与欢愉，最终带着它那份在动荡中依然认真过好每一天的平静力量，回到自己的生活里去。诺尔恰给你的，不止是一餐饭的满足，更是一种面对生活无常时，可以依凭的、沉甸甸的底气。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castellarquato-medieval-village-italy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿夸尔夸托</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castell'Arquato</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/montepulciano" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙特普齐亚诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Montepulciano</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/norcia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺奇古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Norcia</p>
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
