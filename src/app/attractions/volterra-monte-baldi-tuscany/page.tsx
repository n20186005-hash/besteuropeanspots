import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '沃尔泰拉与巴尔迪山 Volterra and Monte Baldi｜穿越三千年时光的红砖古国与灵魂休憩的静谧之岛 - 最佳欧洲景点',
  description: '车子在托斯卡纳绵延的丘陵间盘旋向上，当一片宛如从大地深处生长出来的、泛着温暖铁锈红的巨大城墙突然占据整个视野时，你知道，沃尔泰拉到了。那种红，不是佛罗伦萨那种庄严的赭石红，而是一种更沉静、更质朴，被三千年的风雨浸透了的“帕纳科”红砖的颜色。第一脚踩在古城凹凸不平的火山石街道上，耳边是截然不同的寂静—',
}

export default function VolterraMonteBaldiTuscanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '沃尔泰拉与巴尔迪山', href: '/attractions/volterra-monte-baldi-tuscany' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`沃尔泰拉与巴尔迪山・Volterra and Monte Baldi・意大利・沃尔泰拉（托斯卡纳大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在托斯卡纳绵延的丘陵间盘旋向上，当一片宛如从大地深处生长出来的、泛着温暖铁锈红的巨大城墙突然占据整个视野时，你知道，沃尔泰拉到了。那种红，不是佛罗伦萨那种庄严的赭石红，而是一种更沉静、更质朴，被三千年的风雨浸透了的“帕纳科”红砖的颜色。第一脚踩在古城凹凸不平的火山石街道上，耳边是截然不同的寂静——没有成群的旅行团喧哗，只有风穿过狭窄巷弄的呜咽声，和远处某个作坊里传来叮叮当当雕刻阿尔贝里石的细微声响。空气里混合着老房子潮湿的石材味、从面包房飘出的酵母香气，还有一种无法形容的、属于遥远过去的尘土与金属的冷冽气息。
这座城是悬浮在时间之外的。中午时分，你站在普里奥里宫广场，这是意大利最古老的中世纪市政广场之一。阳光笔直地洒在蜂蜜色的宫殿立面上，塔楼的影子缓慢移动，几个老人坐在石阶上轻声交谈，声音在空旷的广场上产生轻微的回响。这里没有急于向你推销什么的店员，生活以自己的节奏流淌。你会发现，沃尔泰拉的灵魂不仅在于地面的宏伟，更在于地下。它建在古老的盐矿和伊特鲁里亚墓穴之上，整座城市仿佛漂浮在一个巨大的、黑暗而珍贵的历史矿脉上，这种上下的张力赋予了它独特的沉重与轻盈。
而当你觉得红砖的厚重感快要将你包裹时，只需向西走几分钟，穿过古老的波尔塔阿罗门，另一重世界豁然开朗。面前是巴尔迪山绵延的、深绿色的脊线，那是沃尔泰拉的“静谧之岛”。这片受保护的天然区域与古城仅一墙之隔，却仿佛是两个宇宙。这里只有风声、鸟鸣和自己踩在枯叶上的沙沙声。站在山脊上回望，整座红砖古城就像一艘巨大的、搁浅在绿色海洋中的诺亚方舟，在午后金色的光线里散发着永恒而孤独的美。这种极致的对比——一侧是凝聚了人类三千年智慧与争斗的厚重历史，一侧是亘古不变、包容一切的自然静谧——正是沃尔泰拉最核心、也最打动人心的魅力。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在托斯卡纳绵延的丘陵间盘旋向上，当一片宛如从大地深处生长出来的、泛着温暖铁锈红的巨大城墙突然占据整个视野时，你知道，沃尔泰拉到了。那种红，不是佛罗伦萨那种庄严的赭石红，而是一种更沉静、更质朴，被三千年的风雨浸透了的“帕纳科”红砖的颜色。第一脚踩在古城凹凸不平的火山石街道上，耳边是截然不同的寂静——没有成群的旅行团喧哗，只有风穿过狭窄巷弄的呜咽声，和远处某个作坊里传来叮叮当当雕刻阿尔贝里石的细微声响。空气里混合着老房子潮湿的石材味、从面包房飘出的酵母香气，还有一种无法形容的、属于遥远过去的尘土与金属的冷冽气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城是悬浮在时间之外的。中午时分，你站在普里奥里宫广场，这是意大利最古老的中世纪市政广场之一。阳光笔直地洒在蜂蜜色的宫殿立面上，塔楼的影子缓慢移动，几个老人坐在石阶上轻声交谈，声音在空旷的广场上产生轻微的回响。这里没有急于向你推销什么的店员，生活以自己的节奏流淌。你会发现，沃尔泰拉的灵魂不仅在于地面的宏伟，更在于地下。它建在古老的盐矿和伊特鲁里亚墓穴之上，整座城市仿佛漂浮在一个巨大的、黑暗而珍贵的历史矿脉上，这种上下的张力赋予了它独特的沉重与轻盈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你觉得红砖的厚重感快要将你包裹时，只需向西走几分钟，穿过古老的波尔塔阿罗门，另一重世界豁然开朗。面前是巴尔迪山绵延的、深绿色的脊线，那是沃尔泰拉的“静谧之岛”。这片受保护的天然区域与古城仅一墙之隔，却仿佛是两个宇宙。这里只有风声、鸟鸣和自己踩在枯叶上的沙沙声。站在山脊上回望，整座红砖古城就像一艘巨大的、搁浅在绿色海洋中的诺亚方舟，在午后金色的光线里散发着永恒而孤独的美。这种极致的对比——一侧是凝聚了人类三千年智慧与争斗的厚重历史，一侧是亘古不变、包容一切的自然静谧——正是沃尔泰拉最核心、也最打动人心的魅力。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`沃尔泰拉与巴尔迪山`} />
                <InfoRow label="英文名称" value={`Volterra and Monte Baldi`} />
                <InfoRow label="正式名称" value={`Volterra and Monte Baldi`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`沃尔泰拉（托斯卡纳大区）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在悬崖上屹立了三十个世纪，经历了伊特鲁里亚文明、古罗马帝国、中世纪城邦和文艺复兴，却奇迹般未被现代旅游彻底淹没的“活着的”时光胶囊。`} />
                <InfoRow label="建筑特色" value={`标志性的“帕纳科”红砖建筑在托斯卡纳阳光下熠熠生辉，与深绿色的巴尔迪山脊形成鲜明对比，城市轮廓线由古老城墙、中世纪塔楼和质朴的屋顶构成。`} />
                <InfoRow label="建筑风格" value={`以伊特鲁里亚城墙基座、古罗马遗迹为基础，融合了厚重的罗马式、优雅的托斯卡纳哥特式以及朴素的文艺复兴风格，呈现出层次分明的“考古沉积层”式风貌。`} />
                <InfoRow label="文化价值" value={`不仅是阿尔贝里石和盐矿经济的见证者，更是理解伊特鲁里亚文明如何与后续的罗马、中世纪文化层叠、交融的关键钥匙，其宁静的气质本身就是一种抵抗时光同质化的文化宣言。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`沃尔泰拉古城本身是开放的城市空间，全年可自由进入。主要景点如伊特鲁里亚门、古罗马剧院遗址、城墙等外部区域全天开放。市内博物馆（如伊特鲁里亚博物馆、美术馆）开放时间通常为周二至周日 10:30-17:30，周一闭馆，冬季（11月至3月）部分博物馆会缩短开放时间或仅在周末开放。巴尔迪山自然公园日出至日落开放，部分小径夜间关闭。建议出行前务必查询各具体景点官网，宗教节日和8月假期期间可能有特殊安排。`} />
              <InfoRow label="门票价格" value={`沃尔泰拉古城及城墙外部参观免费。博物馆联票约15欧元，包含伊特鲁里亚博物馆、美术馆和古罗马剧院遗址。单馆门票约8欧元。学生、65岁以上老人及欧盟青年卡持有者可享受折扣价（约5-10欧元）。巴尔迪山自然公园免费进入。部分由导游带领的古城地下盐矿或陵墓考古探索团价格在25-40欧元不等，需提前预订。`} />
              <InfoRow label="地址" value={`Piazza dei Priori, 1, 56048 Volterra PI, Italy（以市政广场为参考坐标）`} />
              <InfoRow label="交通方式" value={`从最近的国际机场比萨伽利略机场出发，最便捷的方式是租车自驾，沿SR439公路行驶约1小时直达沃尔泰拉，沿途有清晰的路标。如果依赖公共交通，可从比萨中央火车站乘坐火车至Pontedera-Casciana Terme站（约20分钟），然后换乘前往沃尔泰拉的公交车（班次有限，尤其是周日和节假日，车程约50分钟）。从佛罗伦萨出发，可在SITA巴士总站乘坐直达沃尔泰拉的长途巴士，车程约1.5-2小时，每日约4-5班。强烈建议提前在Tiemme Spa公司官网查询并购买车票，山区公交时刻表变动较大。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沃尔泰拉的故事，得从那些神秘如迷的伊特鲁里亚人讲起。早在公元前8世纪，他们就看中了这座海拔五百多米、易守难攻的险峻山脊，用巨大的、未经雕琢的石头垒起了最初的城市 Velathri。这些石头至今仍构成着城市城墙的基座，你用手触摸，能感到一种粗粝的、原始的力量。伊特鲁里亚人是精湛的工匠和祭司，他们从地底开采盐和铜，财富由此累积。更令人着迷的是他们对死亡世界的理解，城周边那些被称为“空椅”的岩墓，仿佛是为灵魂留下的座位，提醒着人们这里曾有一个文明深深相信着来世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人的到来带来了秩序与融合。公元前3世纪，这里成为重要的罗马自治市，改名 Volaterrae。古罗马剧院在山坡上被建造起来，如今你坐在那些残缺的石阶上，依然能想象当年戏剧上演的盛况。然而，罗马的衰落后，才是沃尔泰拉真正塑造自己中世纪面孔的时代。来自北方的伦巴第人、随后是本地崛起的贵族，在这片高地上争夺控制权。一座座用于防御和炫耀的家族塔楼拔地而起，虽然现在只剩下零星几座，但当时的天际线必定如石质的森林般密集。12世纪，它成为独立的城邦共和国，普里奥里宫和它那威严的塔楼就是这段自治黄金期的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "文艺复兴的春风似乎只是轻轻拂过了这里。美第奇家族的征服带来了稳固，也带来了某种停滞。佛罗伦萨的辉煌吸引了大多数艺术家和资本，沃尔泰拉反而因此因祸得福，没有被大规模地巴洛克化或现代化，其中世纪和罗马式的肌理得以惊人完整地保存下来。它变成了一个安静的区域中心，依靠着历史悠久的阿尔贝里石（一种纹理美丽的石膏）雕刻业和农业默默生存。它的盐矿一直开采到上世纪，那些深入地下的坑道网络，如同城市的倒影，沉默地诉说着另一部关于黑暗、劳作与财富的地下史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "近代的战争和全球化浪潮似乎又一次绕开了它。二战时它幸运地未遭严重破坏。当托斯卡纳其他小镇如圣吉米尼亚诺、锡耶纳被游客淹没时，沃尔泰拉因为相对不便的交通，依然保持着一种固执的矜持。这不是一个被精心打扮成明信片的博物馆小镇，而是一个仍然有本地人出生、上学、工作、逝去的活生生的社区。你看到的红砖，不仅是风景，也是当地人世代居住的家。这种连续性，这种未被旅游表演彻底中断的日常感，让它的历史不是陈列品，而是呼吸着的当下。每一块红砖，都吸收了三十个世纪的阳光、雨水、战争与和平的呼喊，最终沉淀为你眼前这片沉默而恢弘的风景。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间，从清晨到黄昏，充分体验从历史厚重到自然静谧的完整韵律。最佳抵达时间是早上九点前，此时游客尚未涌入，阳光温柔，是探索古城街巷和拍摄空镜的黄金时段。上午专注于城墙内的历史核心区，以普里奥里宫广场为起点和枢纽，慢节奏地走访主要历史地标和博物馆，感受城市苏醒的节奏。中午在当地小餐馆享用漫长的午餐，品尝野猪肉酱宽面这样的本土菜肴。下午的精华在于“出城”——徒步巴尔迪山，这是情绪从密集的历史信息转向开阔自然沉思的关键过渡。最后在黄昏时分回到城墙边，等待落日将整个红砖古城染成金红色的魔幻时刻。这样的安排张弛有度，兼顾文化深度与心灵治愈。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日和意大利法定节假日，大部分商店和部分餐馆会关门，公交车班次极少甚至停运，务必避免在这天完全依赖公共交通或购物计划。
古城街道几乎全是陡峭的上下坡和凹凸不平的古石路面，请务必穿一双舒适且鞋底防滑的步行鞋，高跟鞋在这里是真正的“灾难”。
警惕那些主动带你参观“秘密地下墓穴”或“私人收藏”的所谓导游，正规的考古游览团都需要通过官方旅游信息中心或授权的旅行社提前预订。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着清晨清澈的阳光和几乎无人的街道，从古老的波尔塔阿罗门进城，用手触摸那冰凉巨大的伊特鲁里亚基石，感受三千年前的工艺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在普里奥里宫广场的石阶上坐一会儿，看市政塔楼的影子慢慢缩短，听咖啡馆拉起卷帘门和准备早点的声音，观察本地人如何开始他们的一天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进阴凉而肃穆的沃尔泰拉主教座堂，让你的眼睛适应昏暗的光线，然后寻找那些常常被忽略的、色彩依然鲜活的木质穹顶雕饰和壁画细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一个半小时沉浸于伊特鲁里亚博物馆，不只是看那些著名的“阴影之夜”骨灰瓮，更要留意那些小巧的日常器物，想象一个消失文明的生活温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在古城墙的阴影下找一家家庭经营的 trattoria，点一份用本地食材烹制的简单午餐，比如配着陈年佩克里诺奶酪的珍珠麦豆汤。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午从波尔塔阿罗门出城，毫不犹豫地踏上巴尔迪山的徒步小径，沿着清晰的路标走向山脊，让城市的喧嚣彻底被身后的树林过滤掉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在山脊的开阔处找一块平坦的石头坐下，什么都不做，只是看着远处如模型般的红砖城市和更远方托斯卡纳无尽的丘陵在光影中变幻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前缓缓下山，回到波尔塔阿罗门附近，等待夕阳为巨大的古城门和连绵的城墙勾勒出燃烧般的金边，完成一天从历史到自然再回归历史的圆满循环。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`波尔塔阿罗门远景侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，站在巴尔迪山小径的起点附近，用长焦镜头压缩空间，将巨大的伊特鲁里亚门框与后方层层叠叠的城市屋顶、塔楼一同纳入画面，此时侧光会让砖石的纹理和立体感达到极致。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`普里奥里宫广场俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`从市政宫塔楼（如果开放攀登）或广场周边建筑的二层咖啡馆窗口向下拍摄，捕捉广场几何形状的石板地面、投射的建筑阴影以及零星的行人，营造出深邃的空间感和静谧氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`巴尔迪山脊全景回望`}</h4>
                  <p className="text-sm text-gray-700">{`徒步至巴尔迪山脊中段的开阔地，在晴朗的下午使用广角镜头，将前景的荒野草丛、中景蜿蜒的古城城墙与远景的托斯卡纳丘陵天空全部容纳，展现“古城方舟”漂浮于绿海之上的孤绝之美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`古罗马剧院遗址框景`}</h4>
                  <p className="text-sm text-gray-700">{`站在剧院高处残存的拱门下，利用石拱作为天然画框，框住下方完整的扇形剧场台阶和远处的绿色山谷，巧妙结合人文遗迹与自然景观。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，深入一条狭窄的侧巷，拍摄阳光在两侧高耸红砖墙上切割出的锐利光影，以及地面石板反射的点点光斑，强调线条与明暗的抽象美感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人对拍照总体友善，但拍摄居民、特别是长者时，请务必先微笑示意并获得默许，尊重他们的私人空间。`}</li>
                <li>• {`使用无人机在古城上空飞行有严格限制，通常被禁止，如需航拍务必事先查询详细法规并向当地市政部门申请许可，巴尔迪山自然公园内也需遵守公园的无人机使用规定。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住由16世纪贵族宫殿改造的精品酒店，房间有着极高的木雕天花板和古老的壁画残片，清晨在私密的内庭花园里享用早餐，仿佛成了宫殿的临时主人。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计之选`}</h4>
                  <p className="text-sm text-green-800">{`藏在古城中心一条安静小巷里的现代设计公寓，裸露的红砖墙与极简的家具形成奇妙对话，巨大的窗户正对着教堂的钟楼，将历史变成你房间的流动壁画。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园牧歌`}</h4>
                  <p className="text-sm text-yellow-800">{`住在巴尔迪山脚下被橄榄树环绕的农庄民宿，主人会带你参观他们的菜园和酒窖，夜晚的寂静深邃无比，只有星空和偶尔的虫鸣，是彻底逃离的港湾。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-purple-800">{`位于古城边缘一座经过全面修复的修道院建筑内，房间宽敞静谧，保留着原始的拱廊和石砌细节，水疗中心设在地下的古老石窖中，提供极致的时空交错 relaxation。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古城内的住宿通常需要步行一小段陡坡才能抵达，且停车位极其稀缺且昂贵，如果自驾，务必确认酒店是否提供停车位（多在城外）及相关费用。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "预订夏季（7-8月）或当地重要节庆（如8月中旬的沃尔泰拉戏剧节）期间的住宿，需提前至少3-4个月，选择也会更多。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住在巴尔迪山周边的农庄虽然宁静，但晚间进出古城需开车或走一段没有路灯的山路，建议喜好夜生活的旅友谨慎选择。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开沃尔泰拉许久，那片红砖的颜色和山间的寂静，依然会不时地在脑海中浮现。它给我的触动，并非那种面对绝世艺术品时的惊叹，而更像是一种深沉的安抚。在这个世界上，大多数古老的地方要么被精心包装成旅游商品，要么在时光中彻底湮没遗忘。而沃尔泰拉找到了一种罕见的平衡——它没有抗拒历史在它身上留下的每一道疤痕，伊特鲁里亚的粗犷、中世纪的严峻都清晰可见；同时，它又没有将自己冻结在过去的某一刻，生命仍在那些红砖房子里真实地延续。这种“活着的古老”，让历史不再是教科书上遥远的知识，而是一种可触摸、可呼吸的当下质感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在巴尔迪山脊上回望的那一刻，我忽然明白了它为何如此重要。它像一位沉默的智者，提醒着我们：文明与自然并非对立，厚重的历史与静谧的内心可以仅一墙之隔。它不提供浮华的娱乐，却慷慨赠予凝视与思考的空间。对于每一位厌倦了打卡、渴望在旅途中与某个地方产生深刻连接的深度旅人来说，沃尔泰拉就是一处灵魂的锚点。来这里，不只是看另一座意大利古镇，而是完成一场跨越三千年的时空漫步，并在那片无言的绿色静谧中，找回被现代生活喧哗所掩盖的、自己内心深处的回响。这是一生必去的清单上，不是为了炫耀，而是为了治愈自己的那一站。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/villa-adriana-tivoli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒂沃利哈德良别墅</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Villa Adriana</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veiofro-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦纳夫罗古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veiofro Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aquileia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿奎莱亚遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aquileia</p>
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
