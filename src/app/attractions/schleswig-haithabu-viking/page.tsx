import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '石勒苏益格 Schleswig｜探秘维京世界遗产与波罗的海风情 - 最佳欧洲景点',
  description: '朋友，如果你对北欧的想象还停留在峡湾与极光，那么来石勒苏益格吧，这里会给你一个完全不同的、浸在咸湿海风里的答案。我的第一眼，是从施莱湾平静如镜的水面望过去的。空气中弥漫着独特的“北海气息”——不是腥，而是一种混合了水草、湿木头和远方海盐的清冽味道。阳光不算炽烈，柔和地洒在彩色的老房子上，码头上停泊的',
}

export default function SchleswigHaithabuVikingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '石勒苏益格', href: '/destinations/europe' },
            { label: '石勒苏益格', href: '/attractions/schleswig-haithabu-viking' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`石勒苏益格・Schleswig・德国・石勒苏益格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，如果你对北欧的想象还停留在峡湾与极光，那么来石勒苏益格吧，这里会给你一个完全不同的、浸在咸湿海风里的答案。我的第一眼，是从施莱湾平静如镜的水面望过去的。空气中弥漫着独特的“北海气息”——不是腥，而是一种混合了水草、湿木头和远方海盐的清冽味道。阳光不算炽烈，柔和地洒在彩色的老房子上，码头上停泊的白色帆船随着波浪轻轻摇晃，发出慵懒的“咯吱”声。这里没有慕尼黑的沸腾，也没有柏林的酷炫，它安静得像个沉思的老者，但你知道，这平静水面之下，藏着惊涛骇浪的故事。
这座小镇最打动我的，是它那种“身在德国，魂游北欧”的错位感。走在石板路上，你听到的是德语，但建筑的斜坡屋顶、明亮的色彩，又分明带着丹麦的清新影子。当地人拎着面包从砖砌的小巷里走出，生活节奏慢得仿佛还停留在上个世纪。而这一切宁静生活的“源头”，就在几公里外的施莱湾尽头——那个名叫海塔布的古老地方。当你意识到，脚下这片土地曾是维京长船横行、商贾云集的“北方 Constantinople”时，眼前悠闲遛狗的老人与千年前戴着护身符、讨价还价的维京商人，瞬间产生了奇妙的时空叠影。
它的核心魅力，正是这种层层叠叠的历史感。它不是一座孤立的城堡或教堂，而是一个完整的、仍在呼吸的历史剖面。从维京时代的野蛮与荣光，到中世纪主教与国王的权力博弈，再到近代两国争抢的边界风云，所有线索都浓缩在这个小小的半岛上。你在这里的每一次转身，都可能从21世纪的咖啡馆，跨入18世纪的城堡庭院，再瞬间联想至10世纪的港口码头。这是一种极其奢侈的深度旅行体验。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，如果你对北欧的想象还停留在峡湾与极光，那么来石勒苏益格吧，这里会给你一个完全不同的、浸在咸湿海风里的答案。我的第一眼，是从施莱湾平静如镜的水面望过去的。空气中弥漫着独特的“北海气息”——不是腥，而是一种混合了水草、湿木头和远方海盐的清冽味道。阳光不算炽烈，柔和地洒在彩色的老房子上，码头上停泊的白色帆船随着波浪轻轻摇晃，发出慵懒的“咯吱”声。这里没有慕尼黑的沸腾，也没有柏林的酷炫，它安静得像个沉思的老者，但你知道，这平静水面之下，藏着惊涛骇浪的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇最打动我的，是它那种“身在德国，魂游北欧”的错位感。走在石板路上，你听到的是德语，但建筑的斜坡屋顶、明亮的色彩，又分明带着丹麦的清新影子。当地人拎着面包从砖砌的小巷里走出，生活节奏慢得仿佛还停留在上个世纪。而这一切宁静生活的“源头”，就在几公里外的施莱湾尽头——那个名叫海塔布的古老地方。当你意识到，脚下这片土地曾是维京长船横行、商贾云集的“北方 Constantinople”时，眼前悠闲遛狗的老人与千年前戴着护身符、讨价还价的维京商人，瞬间产生了奇妙的时空叠影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，正是这种层层叠叠的历史感。它不是一座孤立的城堡或教堂，而是一个完整的、仍在呼吸的历史剖面。从维京时代的野蛮与荣光，到中世纪主教与国王的权力博弈，再到近代两国争抢的边界风云，所有线索都浓缩在这个小小的半岛上。你在这里的每一次转身，都可能从21世纪的咖啡馆，跨入18世纪的城堡庭院，再瞬间联想至10世纪的港口码头。这是一种极其奢侈的深度旅行体验。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`石勒苏益格`} />
                <InfoRow label="英文名称" value={`Schleswig`} />
                <InfoRow label="正式名称" value={`Schleswig`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`石勒苏益格`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了丹麦与德国千年纠葛、且坐拥北欧史上最繁华维京贸易中心海塔布的“活化石”边境之城。`} />
                <InfoRow label="建筑特色" value={`波罗的海畔的混血容颜，从红砖哥特式的宏伟大教堂到湖畔童话般的戈托夫城堡，建筑讲述着政权与文化的交替。`} />
                <InfoRow label="建筑风格" value={`以北德红砖哥特式为主导，融合了文艺复兴、巴洛克及丹麦风格的浪漫主义元素。`} />
                <InfoRow label="文化价值" value={`它是理解北欧维京文明向中世纪欧洲基督教文明过渡，以及日德兰半岛复杂民族身份认同的独一无二的钥匙。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。核心景点：石勒苏益格主教座堂通常为每日上午10点至下午6点开放；石勒苏益格-荷尔斯泰因州立博物馆与戈托夫城堡的开放时间为周二至周日上午10点至下午6点，周一闭馆；世界文化遗产海塔布维京博物馆及复原村落的开放时间较为复杂，夏季（4月至10月）一般为每日上午9点至下午5点，冬季（11月至3月）缩短为上午10点至下午4点，且周一可能闭馆，出行前务必在其官网核实最新时间。所有室内景点在圣诞节、元旦等主要节日会关闭。`} />
              <InfoRow label="门票价格" value={`小镇漫步免费。主教座堂免费进入，登塔需小额捐赠（约2-3欧元）。州立博物馆与戈托夫城堡联票约为12欧元，学生票8欧元。海塔布维京博物馆及户外遗址公园联票约为10欧元，家庭票有优惠。持有石勒苏益格欢迎卡或荷尔斯泰因地区通票可能享受折扣。`} />
              <InfoRow label="地址" value={`Schleswig, Schleswig-Holstein, 24837, Germany (以游客信息中心为例：Rathausmarkt 1, 24837 Schleswig)`} />
              <InfoRow label="交通方式" value={`最近的国际机场是汉堡机场。从汉堡中央火车站乘坐区域快车（RE）前往石勒苏益格火车站，车程约1小时20分钟，班次频繁，每小时至少一班，可在德铁（DB）官网或APP购票。从石勒苏益格火车站到老城区可步行（约15分钟）或乘坐本地巴士。若计划深度游览海塔布遗址，建议在镇上租用自行车（约20分钟骑行可达）或乘坐季节性运营的旅游巴士，自驾则最为方便，遗址旁有停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲石勒苏益格的故事，我们必须从它的“前世”——海塔布开始。时间拨回公元8世纪，在施莱湾这条深入内陆的天然避风港尽头，一个注定伟大的定居点诞生了。海塔布不是野蛮的强盗窝，它是维京世界智慧与野心的结晶。这里是连接北海与波罗的海、西欧与斯堪的纳维亚、乃至通往东欧与阿拉伯世界的十字路口。想象一下，公元950年左右，这里的码头停满了长船，卸下来自非洲的象牙、法兰克的玻璃、斯拉夫的毛皮和东方的银币。工匠区内炉火昼夜不熄，打造着精美的珠宝和武器。它是一座用木材、泥巴和雄心建起的“超级商城”，是维京社会从掠夺转向贸易、从部落走向国家的关键见证。然而，财富也引来了战火，1066年，斯拉夫人的军队将这座繁华之城付之一炬，灰烬掩埋了整整一个时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当海塔布的余烬渐渐冷却，历史的聚光灯移到了几公里外的施莱湾南岸。一座新的权力中心开始崛起，那就是石勒苏益格。这次，登场的主角不再是部落酋长，而是基督教的主教和丹麦的国王。1100年左右，一座宏伟的主教座堂开始在这里奠基。你能想象吗，那些可能还残留着异教记忆的石匠，开始为一位新的神建造殿堂。这座用北德特有的红砖砌成的哥特式巨构，花了几个世纪才完成。它那高达112米的钟楼，至今仍是整个地区的灯塔。教堂里安放着一件艺术珍品——波德维克祭坛画，那是中世纪匠人用橡木雕刻的圣经故事长廊，人物表情生动得仿佛下一秒就要从画框里走出来。教堂的建立，标志着这片土地被正式纳入了中世纪欧洲的基督教文明圈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与此同时，世俗权力也在湖畔扎下了根。戈托夫城堡最初是一座中世纪的水上堡垒，后来在16世纪被改造成文艺复兴式的公爵宫殿。它静静矗立在城堡湾的水中央，倒影婀娜，像童话里的场景。但它的历史绝非童话般美好。这里曾是石勒苏益格公爵们（与丹麦王室关系密切）的官邸，见证了无数关于领土与继承权的宫廷密谋。城堡本身，就是丹麦文化在此地深耕的象征。在随后的几百年里，石勒苏益格就像一块磁石，吸引着丹麦国王和德意志贵族的目光，争夺愈演愈烈。19世纪中期爆发的两次石勒苏益格-荷尔斯泰因战争，就是这种争夺的白热化，连英国首相帕默斯顿勋爵都戏谑地说：“只有三个人真正明白石勒苏益格-荷尔斯泰因问题：一个是阿尔伯特亲王（他已去世），一个是一位德国教授（他疯了），而我，已经忘记了。” 最终，在1866年，它被并入普鲁士，成为了德意志帝国的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的尘埃落定，但记忆并未消亡。二战后的和平，让石勒苏益格逐渐从军事重镇转变为文化历史的守护者。而最大的转折点发生在20世纪的考古发掘。沉睡千年的海塔布被重新唤醒，木制码头遗迹、半地穴式房屋、数不清的手工艺品重见天日。人们震惊地发现，教科书上那个符号化的“维京人”，在这里有着如此丰满、复杂和先进的生活图景。2018年，海塔布与丹麦的另两处遗址共同被列入世界文化遗产名录，这不仅仅是对一片废墟的认可，更是对石勒苏益格地区作为欧洲文明一个重要交汇点的最高致敬。从此，小镇与它的维京前世，完成了跨越千年的正式相认。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间进行深度游览。早晨9点左右抵达，趁旅游团尚未涌入，先去感受小镇本身的宁静。整体节奏宜慢不宜快，因为你需要时间在博物馆里沉浸，在遗址上想象。路线设计为从水岸到陆地，从今生回溯前世：先在小镇码头和核心老城区建立地理和感官印象，然后深入参观大教堂和城堡这两大中世纪地标，最后在下午阳光最柔和的时候，前往海塔布遗址和博物馆，完成从“结果”到“起源”的历史溯源。这样的安排逻辑清晰，且能避开部分场馆的午间拥挤时段。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`海塔布遗址范围很大且多为户外，天气变化莫测，务必穿着舒适防水的鞋子和防风外套。小镇和海塔布的餐厅选择有限且关门较早，建议中午在镇上饱餐一顿，或自备一些零食。如果对维京历史特别感兴趣，可以考虑参加博物馆组织的导览游（有时有英语团），信息量会倍增。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从老码头开始，看阳光把施莱湾染成金色，海鸥在渔船上空盘旋，买一杯咖啡感受小镇刚刚苏醒的节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的“工匠街”慢慢逛进老城中心，用手触摸那些被海风侵蚀出不同颜色的砖墙，寻找小巷里藏着的手工艺作坊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进石勒苏益格主教座堂的内部，在幽暗与静谧中寻找那件令人屏息的波德维克祭坛画，感受中世纪信仰的力量与艺术的精细。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂步行至宁静的城堡湾，站在岸边以最佳角度欣赏戈托夫城堡的水中倒影，然后过桥进入城堡庭院，仿佛走入一幅文艺复兴时期的油画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在州立博物馆里花上一两个小时，让那些从海塔布出土的琥珀首饰、阿拉伯银币和破损的武器，为你拼凑起维京商人日常生活的生动画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午，骑车或乘车前往海塔布，先登上重建的维京时代环形土墙，俯瞰整个施莱湾地形，理解这个选址无与伦比的战略与商业眼光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进半地穴式民居复原建筑，闻着柴火的味道，看“维京村民”演示如何用古老的织机织布，时光在这里瞬间倒流一千年。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在博物馆的咖啡厅坐下来，面朝曾经千帆竞泊的港口遗址，让一整天的历史信息慢慢沉淀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主教座堂侧翼仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的斜阳能将红砖教堂的质感与宏伟的飞扶壁结构刻画得淋漓尽致，站在教堂南侧的花园里，用广角镜头捕捉塔楼直插云天的气势。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`戈托夫城堡倒影`}</h4>
                  <p className="text-sm text-gray-700">{`无风的清晨或黄昏，在城堡湾的东岸，利用如镜的水面拍摄城堡及其完美倒影，对称构图能让画面充满童话般的宁静与秩序感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`海塔布环形墙顶全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时登上遗址的环形土墙，向西拍摄，暖金色的阳光会洒满整个施莱湾、远处的现代桥梁与脚下的古老村落轮廓，形成跨越千年的对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`维京长船博物馆内景`}</h4>
                  <p className="text-sm text-gray-700">{`在博物馆内拍摄那艘巨大的复原先王长船时，尽量放低机位，将参观者作为比例尺纳入画面，以凸显船只令人震撼的体量与精巧的工艺细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老码头色彩与生活`}</h4>
                  <p className="text-sm text-gray-700">{`找一个阳光明媚的上午，捕捉码头边色彩斑斓的连排房屋、系泊的船只与当地居民垂钓或整理渔网的生活场景，画面充满北欧小镇的鲜活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部拍摄祭坛画等艺术品时，请务必关闭闪光灯，并尊重是否有禁止拍摄的标志。在海塔布复原村落，拍摄穿着维京服装的工作人员前，最好先微笑示意并获得默许，这是一种礼貌。北德的天空云层变化丰富，是风光的绝佳点缀，耐心等待光线比匆忙按快门更能出好片。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`水岸闲情`}</h4>
                  <p className="text-sm text-blue-800">{`码头附近由老仓库改造的设计酒店，房间拥有巨大的拱形窗户，直接面对施莱湾的船来船往，早晨在枕边就能看到天鹅游过。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-green-800">{`老城中心一栋17世纪半木结构房屋里的精品民宿，楼梯吱呀作响，房间低矮温馨，主人会为你准备丰盛的北德风味早餐，包括各种鱼和黑面包。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城堡视野`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在城堡湾对岸的现代风格酒店，虽然外观低调，但高层房间的落地窗能提供俯瞰戈托夫城堡及整个湾区的绝佳视角，尤其夜景迷人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然静谧`}</h4>
                  <p className="text-sm text-purple-800">{`位于海塔布遗址与小镇之间的森林小径旁的度假屋，独栋的木屋被绿树环绕，极其安静，适合想要彻底放松、并计划多次深入探索遗址的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6月至8月）是旅游旺季，且石勒苏益格附近的音乐节等活动可能使住宿紧张，务必提前数月预订。小镇治安非常好，夜晚独自散步也很安全。如果选择住在更远离中心的郊区或乡村民宿，没有车可能会不太方便，预订时请确认交通接驳。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开石勒苏益格好些天了，但我总忍不住回想施莱湾上吹过的那阵风。它似乎和别处的海风不同，里面夹杂着太多东西：有维京长船破浪的水汽，有中世纪教堂砖石的尘埃，有近代边境冲突未散的硝烟，也有如今小镇安宁生活的面包香气。这个地方教会我一件事：真正的历史从来不是教科书上孤立的章节，而是一条奔流不息的长河。在海塔布，你摸到的是河的源头；在石勒苏益格老城，你站在的是河的中游；而当你坐在码头咖啡馆，看着当代的帆船驶过，你便融入了这条河的当下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求碎片化、快餐式体验的世界里，石勒苏益格提供了一种难得的“完整感”。它不迎合你，不把自己包装成单一的网红打卡点。它只是静静地在那里，把它复杂甚至沉重的过往一层层摊开给你看。你需要一点耐心，一点想象力，才能把维京的贸易网、基督教的尖塔、丹麦的城堡与德国的城镇拼成一幅完整的图画。这个过程本身，就是一种深刻的治愈。它让你慢下来，去思考文明是如何在冲突与交融中蜿蜒前进的，而一个地方的“身份”，又是多么的流动与多元。所以，如果你渴望一次不仅仅是用眼睛，更是用头脑和心灵去丈量的旅行，请务必来石勒苏益格。它不是终点，而是一把钥匙，为你打开一扇通往北欧灵魂与欧洲历史褶皱的厚重之门。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/braunfels-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布劳恩费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Braunfels Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kulmbach-plassenburg-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔姆巴赫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kulmbach</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/muehlhausen-thuringia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米尔豪森</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mühlhausen</p>
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
