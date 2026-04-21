import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米利泰洛-因瓦尔迪卡塔尼亚 Militello in Val di Catania｜被时光温柔遗忘的巴洛克珍宝 - 最佳欧洲景点',
  description: '车子驶离卡塔尼亚的喧嚣，沿着起伏的丘陵公路盘旋，当你觉得橄榄树与柑橘园快要看腻的时候，一片蜜糖色的屋顶和教堂钟楼尖顶就毫无征兆地从山谷里跳了出来。这就是米利泰洛给我的第一眼，不像个景点，倒像个被阳光晒得暖洋洋的、正在打盹儿的老人。把车停在镇口的老树下，推开车门，涌入鼻腔的是干燥的石粉味、远处飘来的烤',
}

export default function MilitelloInValDiCataniaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '米利泰洛-因瓦尔迪卡塔尼亚', href: '/destinations/italy' },
            { label: '米利泰洛-因瓦尔迪卡塔尼亚', href: '/attractions/militello-in-val-di-catania' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米利泰洛-因瓦尔迪卡塔尼亚・Militello in Val di Catania・意大利・米利泰洛-因瓦尔迪卡塔尼亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离卡塔尼亚的喧嚣，沿着起伏的丘陵公路盘旋，当你觉得橄榄树与柑橘园快要看腻的时候，一片蜜糖色的屋顶和教堂钟楼尖顶就毫无征兆地从山谷里跳了出来。这就是米利泰洛给我的第一眼，不像个景点，倒像个被阳光晒得暖洋洋的、正在打盹儿的老人。把车停在镇口的老树下，推开车门，涌入鼻腔的是干燥的石粉味、远处飘来的烤披萨饼底的焦香，还有一丝若有若无的、从老教堂门缝里渗出来的旧木头与蜡烛混合的气息。安静得惊人，只有自己的脚步声在石板路上敲出回响，以及不知哪家院子里传来的断续的意大利语广播声。
穿过老城门，时间瞬间调慢了发条。这里的巴洛克，不是那种咄咄逼人、让你仰望到脖子酸痛的宏伟。它是亲昵的，甚至是俏皮的。你看圣尼科洛大教堂那雕花大理石立面，天使和圣人的脸庞被几百年地中海的风雨磨得有些模糊，但衣褶的流动感依然鲜活，仿佛下一秒就要随风摆动。阳光在上午十点以最完美的斜角切过那些涡卷和贝壳装饰，在墙上投下深深浅浅的影子，整面墙就像一块巨大的、正在融化的奶油蛋糕。本地老人穿着熨帖的衬衫，慢悠悠地穿过广场，对着教堂画个十字，然后消失在一条更窄的巷子里——这些建筑从来不是博物馆里的标本，而是他们日常生活的背景板，是去市场买菜的必经之路，是傍晚散步的终点站。
最打动我的，是那种“完整的静谧”。你不会被旅行团的小旗子打扰，不会为抢一个拍照机位而烦恼。你可以把脸贴在本笃会圣玛丽亚修道院那扇厚重的木门上，仔细分辨上面雕刻的葡萄藤和奇兽，指尖能感受到木头纹理的起伏。你可以坐在小广场的台阶上，看一只肥猫在喷泉边晒太阳，看光影从一栋建筑的屋顶缓慢爬到另一栋的阳台。这里没有“表演”出来的西西里风情，只有生活本身在巴洛克的舞台上有条不紊地继续着。你能听见历史在石头缝里呼吸的声音，轻缓而绵长。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离卡塔尼亚的喧嚣，沿着起伏的丘陵公路盘旋，当你觉得橄榄树与柑橘园快要看腻的时候，一片蜜糖色的屋顶和教堂钟楼尖顶就毫无征兆地从山谷里跳了出来。这就是米利泰洛给我的第一眼，不像个景点，倒像个被阳光晒得暖洋洋的、正在打盹儿的老人。把车停在镇口的老树下，推开车门，涌入鼻腔的是干燥的石粉味、远处飘来的烤披萨饼底的焦香，还有一丝若有若无的、从老教堂门缝里渗出来的旧木头与蜡烛混合的气息。安静得惊人，只有自己的脚步声在石板路上敲出回响，以及不知哪家院子里传来的断续的意大利语广播声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过老城门，时间瞬间调慢了发条。这里的巴洛克，不是那种咄咄逼人、让你仰望到脖子酸痛的宏伟。它是亲昵的，甚至是俏皮的。你看圣尼科洛大教堂那雕花大理石立面，天使和圣人的脸庞被几百年地中海的风雨磨得有些模糊，但衣褶的流动感依然鲜活，仿佛下一秒就要随风摆动。阳光在上午十点以最完美的斜角切过那些涡卷和贝壳装饰，在墙上投下深深浅浅的影子，整面墙就像一块巨大的、正在融化的奶油蛋糕。本地老人穿着熨帖的衬衫，慢悠悠地穿过广场，对着教堂画个十字，然后消失在一条更窄的巷子里——这些建筑从来不是博物馆里的标本，而是他们日常生活的背景板，是去市场买菜的必经之路，是傍晚散步的终点站。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动我的，是那种“完整的静谧”。你不会被旅行团的小旗子打扰，不会为抢一个拍照机位而烦恼。你可以把脸贴在本笃会圣玛丽亚修道院那扇厚重的木门上，仔细分辨上面雕刻的葡萄藤和奇兽，指尖能感受到木头纹理的起伏。你可以坐在小广场的台阶上，看一只肥猫在喷泉边晒太阳，看光影从一栋建筑的屋顶缓慢爬到另一栋的阳台。这里没有“表演”出来的西西里风情，只有生活本身在巴洛克的舞台上有条不紊地继续着。你能听见历史在石头缝里呼吸的声音，轻缓而绵长。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米利泰洛-因瓦尔迪卡塔尼亚`} />
                <InfoRow label="英文名称" value={`Militello in Val di Catania`} />
                <InfoRow label="正式名称" value={`Militello in Val di Catania`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`米利泰洛-因瓦尔迪卡塔尼亚`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`1693年大地震后，在原有中世纪废墟上涅槃重生的巴洛克城镇典范，是诺托谷地八座巴洛克瑰宝中最宁静、最原真的一颗遗珠。`} />
                <InfoRow label="建筑特色" value={`教堂立面繁复雕花与内部黯淡金箔形成戏剧性对比，蜿蜒街道两旁是蜂蜜色石墙与铸铁阳台构成的静谧舞台。`} />
                <InfoRow label="建筑风格" value={`典型的西西里晚期巴洛克风格，融合了西班牙天主教式的华丽庄严与本土民间艺术的生动趣味。`} />
                <InfoRow label="文化价值" value={`一座活着的建筑博物馆，其价值不仅在于石雕艺术，更在于它完整保留了地震重建后几个世纪以来缓慢、有机的社区生活脉搏。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天可游览。主要教堂（如圣尼科洛大教堂、圣玛丽亚拉星冠修道院教堂）通常开放时间为上午8:30至12:30，下午16:00至19:00，但各教堂略有不同，建议提前在镇旅游信息中心确认。市立博物馆开放时间一般为周二至周六 9:00-13:00, 15:30-18:30；周日 9:00-13:00。许多小型教堂和修道院外观可随时参观，内部开放依赖于看管人的时间，午间（13:00-16:00）普遍关闭。`} />
              <InfoRow label="门票价格" value={`漫步古城街道免费。进入主要教堂和宗教场所通常免费，但欢迎捐赠。市立博物馆门票约3欧元，学生及65岁以上老人有优惠。一些特定节庆期间开放的私人宫殿或庭院可能需要支付少量导览费（约5欧元）。`} />
              <InfoRow label="地址" value={`Piazza Municipio, 1, 95043 Militello in Val di Catania CT, Italy`} />
              <InfoRow label="交通方式" value={`从最近的卡塔尼亚国际机场出发，最推荐的方式是租车自驾，沿A19高速公路往卡尔塔尼塞塔方向，转入SS385号公路，全程约45公里，车程50分钟，路况良好且能欣赏沿途的西西里乡村风光。若乘坐公共交通，可在卡塔尼亚中央火车站外的巴士站乘坐AST公司的长途巴士，班次较为稀疏，每天约4-5班，车程约1小时15分钟，建议提前在AST官网或车站查询时刻表并购买车票。抵达米利泰洛后，巴士站就在镇中心附近，所有景点均可轻松步行到达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲米利泰洛的故事，无论如何也绕不开1693年1月11日那个地动山摇的夜晚。一场里氏估计超过7.4级的特大地震，几乎将整个西西里东南部夷为平地，包括当时已经颇具规模的中世纪小镇米利泰洛。灾难的尘土尚未落定，幸存者们从废墟中爬出，面对的是至亲的离去和家园的彻底毁灭。然而，西西里人的坚韧，或者说，那种深植于这片土地的对生活近乎执拗的热爱，很快便开始显现。废墟没有被抛弃，反而成为了新生的基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "重建的浪潮，与一位名叫唐·弗朗切斯科·布兰奇福特的贵族紧密相连。作为当地的领主和大地主，他不仅投入了巨额财富，更展现了一种非凡的远见。他没有简单地将城镇恢复到原来的模样，而是邀请了一批当时西西里最优秀的建筑师、石匠和艺术家，以最新的巴洛克风格，绘制了一份雄心勃勃的蓝图。他的想法很明确：要建造一座“新耶路撒冷”，一个既彰显天主教荣耀，又适宜居住的模范城镇。于是，街道被规划得更加宽阔、笔直（以当时的眼光），公共广场成为社区的中心，而一座座教堂则像珍珠一样，被精心串连在街道网络的关键节点上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "重建不是一蹴而就的，它贯穿了整个18世纪。石匠们从附近的伊梅里山采来暖黄色的石灰华，雕刻师们日夜不停地工作，将《圣经》故事、圣人传奇、甚至本地神话中的形象，变成门楣上、窗棂旁、阳台下的立体叙事。有趣的是，在这股来自罗马和西班牙的“正统”巴洛克风潮中，本地的工匠悄悄塞进了自己的私货：你看那些支撑阳台的铸铁托架，可能是咧嘴大笑的太阳脸；装饰在窗沿的小雕像，穿着依稀可辨的西西里传统服装。这种“官样文章”与“民间趣味”的微妙融合，形成了米利泰洛巴洛克独一无二的性格——庄严，却不失亲切；神圣，却又充满人间烟火气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光进入19和20世纪，当欧洲其他地方经历着工业革命和战火硝烟时，米利泰洛仿佛被遗忘在了这个山谷里。经济重心的转移让它逐渐边缘化，人口增长缓慢，甚至外流。这份“被遗忘”，在某种意义上成了它的守护神。没有钱进行大规模的“现代化”改造，那些巴洛克立面得以保持原貌；没有受到二战战火的严重波及（虽然附近有过战斗），建筑群侥幸得以完整保存。它像一枚被琥珀封印的昆虫，将18世纪的城镇风貌和生活节奏，惊人完好地保存了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到2002年，它与诺托谷地的其他七座城镇一起，被联合国教科文组织列入世界遗产名录。这份荣誉像一束突然打过来的聚光灯，让外界终于注意到了这颗蒙尘的珍珠。但米利泰洛的居民似乎对此处之泰然，他们修缮教堂，整理文物，开设小博物馆，但并不急于修建大型停车场或纪念品一条街。世界遗产的身份，对他们而言更像是对祖先劳作成果的一份确认，而非彻底改变生活节奏的号令。今天的米利泰洛，依然保持着那份重建之初就定下的基调：一个为生活而建的美丽家园，恰好，它美得足以震撼每一位有幸到访的旅人。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的周日上午抵达，这时候本地居民会去教堂做弥撒，你能看到建筑在它最生动的使用场景中。安排整整一天（至少6-8小时）留给这里，节奏一定要慢。从镇口的观景台开始，建立整体印象，然后像水滴渗入海绵一样，让自己迷失在蛛网般的巷弄里。路线不必严格遵循，核心是覆盖几座最重要的教堂和广场，并在途中允许自己无数次为一道光影、一扇精美的阳台门而驻足。中午找个家庭餐馆慢慢享用午餐，下午的精力可以留给需要细细品味的博物馆和修道院内部。傍晚时分，一定要回到高点，看夕阳如何为整个小镇镀上金红色的边。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对要避开午后一点到四点，整个小镇会进入深度“午休”状态，几乎所有店铺和教堂内部都会关闭。进入任何教堂，着装需得体，避免无袖上衣和过短的裤裙。镇上几乎没有英语标识，学会几句简单的意大利语问候（Buongiorno, Grazie）会为你赢得更多友善的笑容。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从镇南的“贝尔维德尔”观景台开始，将整个蜜糖色城镇和远处埃特纳火山的身影一同收入眼帘`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着 Via Umberto I 下行，在第一广场邂逅圣尼科洛大教堂，花时间绕它走一圈，欣赏不同光线下的主立面和侧身`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进窄巷 Via Borgo，寻找那些阳台上盛开的天竺葵和精雕细琢的铸铁栏杆，与坐在门口晒太阳的老奶奶点头微笑`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入幽静的本笃会圣玛丽亚修道院回廊，触摸冰凉的石柱，在橘子树的阴影下感受与世隔绝的宁静`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在 Piazza Vittorio Emanuele 广场边的老派咖啡馆点一杯冰镇柠檬水，看孩子们绕着中央喷泉追逐嬉戏`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观市立博物馆，让那些从地震废墟中抢救出来的银器、雕塑和绘画，为你补全历史的拼图`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分爬上圣天使教堂前的台阶，回望脚下层层叠叠的屋顶和钟楼，等待日落时分的魔法时刻`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意找一家挂着“Cucina Casareccia”（家常菜）牌子的餐厅，用一顿丰盛的西西里晚餐结束完美的一天`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`贝尔维德尔观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时光线最佳，用长焦镜头压缩空间，将前景的古老屋顶与背景朦胧的埃特纳火山同框，构成地理与历史的对话`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣尼科洛大教堂立面光影`}</h4>
                  <p className="text-sm text-gray-700">{`上午九点到十一点间，阳光会以侧光完美勾勒立体的石雕，蹲低身体用广角镜头仰拍，让华丽的巴洛克涡卷直冲蓝天`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`本笃会修道院回廊拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射庭院，站在回廊的一角，透过连续的拱门框架拍摄对面被阳光照亮的橘子树与石墙，形成强烈的明暗与几何对比`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Via Borgo 巷弄纵深`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分当阳光斜射入窄巷，寻找一个富有韵律感的阳台序列，站在巷子中间，利用石板路的线条引导视线，捕捉光线在蜜色墙壁上移动的痕迹`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣天使教堂台阶俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`蓝调时刻（日落后二十分钟），小镇灯光初上而天光未尽，从教堂门口向下拍摄，能获得一幅充满宁静生活气息的暖色调全景画卷`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄阳台或门口的人物时尽量征得同意或采用远景氛围模式。教堂内部通常允许拍照，但严禁使用闪光灯和三脚架（除非获得特殊许可）。最好的“镜头”是你的眼睛，有时放下相机，单纯用感官记录，反而能收获更持久的记忆。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`镇中心由古老石屋改造的B&B，主人是一对退休教师夫妇，早餐会端上自家制的橘子酱和热腾腾的奶油甜馅煎饼卷，房间虽小却充满家的温馨`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`位于宁静巷弄里的“宫殿客房”，由18世纪贵族宅邸的一部分改建，保留了原始的彩绘天花板和高大的百叶窗，晚上能听到远处教堂隐约的钟声`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟可达郊外的农庄度假村，置身于广阔的橄榄园中，拥有无边泳池和露天餐厅，白天探索巴洛克小镇，夜晚回归绝对静谧的田园星空`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`深度沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`通过本地平台租赁一整套传统民居公寓，自己到广场市场采购食材，像当地人一样生活几天，在自家的铸铁小阳台上享用早餐，彻底融入小镇的节奏`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "镇内住宿数量非常有限，尤其是特色民宿，务必提前数月预订。选择镇外农庄虽然安静，但意味着你需要自驾，且晚上无法体验小镇夜间的宁静散步。无论住在哪里，这里的治安都非常好，夜晚独行也倍感安心。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开米利泰洛好多天了，我的手机相册里竟然没有几张像样的“标准景点照”。取而代之的，是许多细节的碎片：一扇门把手上磨损的纹路，一片落在喷泉边上的粉色九重葛花瓣，咖啡馆老爷爷擦拭咖啡杯时专注的侧影。这个小镇教会我的，或许正是“旅行”的另一重含义——它不仅仅是空间的移动，更是时间的沉浸。在这里，你被迫慢下来，因为太快会错过石雕上天使嘴角那一抹似有还无的笑意，会听不到风吹过狭窄街道时那类似叹息的回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个崇尚效率、追逐网红打卡点的时代，米利泰洛像一位沉默的隐士，固执地守护着另一种价值。它告诉我们，美可以不是喧嚣的、征服性的，而是浸润式的、需要耐心去聆听的。它的存在本身，就是一种慰藉：世界变化再快，总有一些角落，时间的河流依然以古老的节拍缓缓流淌。每一位真正的深度旅者，都应该来一次这里，不是为了收集又一个世界遗产的头衔，而是为了进行一次心灵的“降速练习”。在米利泰洛的巴洛克褶皱里，你找回的或许不只是历史的碎片，更是与自己内心宁静对话的能力。这才是旅行能带给我们的，最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/san-quirico-dorcia-tuscany" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔恰谷的圣基里科</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">San Quirico d'Orcia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stilo-byzantine-church-calabria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯蒂洛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stilo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/boville-ernica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博维莱埃尔尼卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Boville Ernica</p>
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
