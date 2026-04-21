import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊韦尔东莱班 Yverdon-les-Bains｜温泉、古堡与史前巨石阵的千年对话 - 最佳欧洲景点',
  description: '说实话，我第一眼看到伊韦尔东莱班，感觉它和我想象中那个“温泉名城”的华丽模样有点不一样。火车缓缓进站，窗外是宁静得甚至有些朴素的街道，远处能瞥见纳沙泰尔湖泛着灰蓝色的光。没有喧嚣的旅游大巴，空气里是清冽的、带着一丝水汽的味道，混着秋天落叶淡淡的腐殖质气息。但当你拖着行李箱，沿着运河慢慢走向老城中心时',
}

export default function YverdonLesBainsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '伊韦尔东莱班', href: '/attractions/yverdon-les-bains' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`伊韦尔东莱班・Yverdon-les-Bains・瑞士・伊韦尔东莱班`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，我第一眼看到伊韦尔东莱班，感觉它和我想象中那个“温泉名城”的华丽模样有点不一样。火车缓缓进站，窗外是宁静得甚至有些朴素的街道，远处能瞥见纳沙泰尔湖泛着灰蓝色的光。没有喧嚣的旅游大巴，空气里是清冽的、带着一丝水汽的味道，混着秋天落叶淡淡的腐殖质气息。但当你拖着行李箱，沿着运河慢慢走向老城中心时，魔法就开始发生了。午后的阳光斜斜地打在古老的房屋立面上，砖石泛着蜂蜜色的暖光，咖啡馆门口坐着看报的老人，自行车的铃声叮当作响，生活以一种不紧不慢的、属于湖区的特有节奏铺展开来。
然后，它就那样毫无预兆地出现在运河的拐角——伊韦尔东莱班城堡。它不像那些高踞山巅、充满威慑力的要塞，而是谦和地“坐”在水边，四四方方的体量，四角顶着圆滚滚的塔楼，敦实又安稳。护城河的水面像一面墨绿色的镜子，完完整整地倒映着城堡的石墙和蓝天白云，几艘小艇系在岸边，随着微波轻轻摇晃。那一刻我突然懂了，这座城的核心魅力不是某种夺人眼球的震撼，而是一种层层叠叠的、需要你静下心来品味的“厚度”。是温泉水从地下涌出的温暖，是石头城堡矗立千年的凉意，是史前人类竖立巨石时那份无法言说的神秘，全部交织在这片湖光山色里。
最打动我的，是这里“水”的多重面孔。在Thermal Centre，你闻到的是淡淡的硫磺味和精油的芳香，皮肤感受到的是37度富含矿物质的池水包裹全身的熨帖，耳边是各国语言的低声絮语和水波晃动的轻柔声响，那是现代人对身心疗愈的追求。而当你走到几步之遥的城堡下，触摸那些被湖水和水汽浸润了数百年的冰冷墙砖，或者远眺湖对岸那片沉默的克拉旺立石阵，你会感觉到另一种“水”——作为历史见证者、作为运输通道、作为文明摇篮的“水”。伊韦尔东莱班就像一颗被时间层层包裹的琥珀，每一层都封印着一段关于人类如何与这片水土共生的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，我第一眼看到伊韦尔东莱班，感觉它和我想象中那个“温泉名城”的华丽模样有点不一样。火车缓缓进站，窗外是宁静得甚至有些朴素的街道，远处能瞥见纳沙泰尔湖泛着灰蓝色的光。没有喧嚣的旅游大巴，空气里是清冽的、带着一丝水汽的味道，混着秋天落叶淡淡的腐殖质气息。但当你拖着行李箱，沿着运河慢慢走向老城中心时，魔法就开始发生了。午后的阳光斜斜地打在古老的房屋立面上，砖石泛着蜂蜜色的暖光，咖啡馆门口坐着看报的老人，自行车的铃声叮当作响，生活以一种不紧不慢的、属于湖区的特有节奏铺展开来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，它就那样毫无预兆地出现在运河的拐角——伊韦尔东莱班城堡。它不像那些高踞山巅、充满威慑力的要塞，而是谦和地“坐”在水边，四四方方的体量，四角顶着圆滚滚的塔楼，敦实又安稳。护城河的水面像一面墨绿色的镜子，完完整整地倒映着城堡的石墙和蓝天白云，几艘小艇系在岸边，随着微波轻轻摇晃。那一刻我突然懂了，这座城的核心魅力不是某种夺人眼球的震撼，而是一种层层叠叠的、需要你静下心来品味的“厚度”。是温泉水从地下涌出的温暖，是石头城堡矗立千年的凉意，是史前人类竖立巨石时那份无法言说的神秘，全部交织在这片湖光山色里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动我的，是这里“水”的多重面孔。在Thermal Centre，你闻到的是淡淡的硫磺味和精油的芳香，皮肤感受到的是37度富含矿物质的池水包裹全身的熨帖，耳边是各国语言的低声絮语和水波晃动的轻柔声响，那是现代人对身心疗愈的追求。而当你走到几步之遥的城堡下，触摸那些被湖水和水汽浸润了数百年的冰冷墙砖，或者远眺湖对岸那片沉默的克拉旺立石阵，你会感觉到另一种“水”——作为历史见证者、作为运输通道、作为文明摇篮的“水”。伊韦尔东莱班就像一颗被时间层层包裹的琥珀，每一层都封印着一段关于人类如何与这片水土共生的故事。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`伊韦尔东莱班`} />
                <InfoRow label="英文名称" value={`Yverdon-les-Bains`} />
                <InfoRow label="正式名称" value={`Yverdon-les-Bains`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`伊韦尔东莱班`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从新石器时代就有人类定居，历经凯尔特、罗马、中世纪萨伏伊伯爵统治，并将古老温泉疗养传统与现代水疗文化完美融合的千年湖畔名城。`} />
                <InfoRow label="建筑特色" value={`一座宏伟的方形中世纪水上城堡，四角矗立着圆形塔楼，静静倒映在纳沙泰尔湖的运河与护城河中，与宁静的湖畔小镇相映成趣。`} />
                <InfoRow label="建筑风格" value={`城堡主体为典型的中世纪防御性建筑风格，带有萨伏伊公国的建筑特征，内部经过修缮，部分区域呈现出更近代的实用主义风格。`} />
                <InfoRow label="文化价值" value={`这里罕见地同时承载着史前巨石文明的神秘信仰、中世纪领主政治的厚重历史，以及延续数百年的“以水愈身”的温泉康养文化，是探索瑞士法语区多层面历史的活态教科书。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`伊韦尔东莱班城堡博物馆开放时间通常为周二至周日 10:00-17:00，周一闭馆（节假日除外）。小镇本身全天开放，但商店和餐厅有各自营业时间。著名的Thermal Centre温泉中心开放时间较长，一般为每日9:00-22:00，具体时段可能随季节调整，建议出行前在其官网查询最新时刻表。附近的克拉旺立石阵（Clendy Menhirs）作为户外史前遗址，全年24小时开放，但最佳探访时间为白天。`} />
              <InfoRow label="门票价格" value={`伊韦尔东莱班城堡博物馆门票约为10瑞士法郎，持有瑞士博物馆通票可能免费或优惠。Thermal Centre温泉中心单次入场票价根据时长和区域（如仅游泳池或包含桑拿世界）不同，大约在25至60瑞士法郎之间，常有家庭票、多次票或与住宿捆绑的优惠套餐。克拉旺立石阵无需门票。小镇内步行游览免费。`} />
              <InfoRow label="地址" value={`Château d‘Yverdon, Place Pestalozzi, 1400 Yverdon-les-Bains, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世国际机场（ZRH）出发最为便捷。在机场火车站乘坐直达伊韦尔东莱班的火车，车程约1小时20分钟，班次频繁，大约每半小时一班。从日内瓦机场出发，通常需要在洛桑（Lausanne）换乘一次，总耗时约1小时50分钟。购买瑞士旅行通票（Swiss Travel Pass）是最省心且经济的选择，可无限次乘坐全国火车、巴士和游船。抵达伊韦尔东莱班火车站后，几乎所有核心景点（城堡、温泉中心、老城）均在步行15分钟范围内，火车站外也有本地巴士通往各处。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让我们把时钟拨回到五千多年前。那时的纳沙泰尔湖南岸，还是一片沼泽与陆地交织的荒野。一群新石器时代晚期的人们来到这里，他们不是匆匆过客，而是定居者。出于某种我们至今未能完全破译的信仰或天文观测目的，他们从远处的山丘运来巨大的砾石，竖立在湖畔。这就是克拉旺立石阵的起源。今天，当你站在那45块沉默的巨石中间，有的高达4.5米，歪斜地指向天空，风吹过周围的芦苇沙沙作响，你依然能感受到那股原始的、试图与天地沟通的力量。这些石头比英国的巨石阵还要古老，它们是最早的“伊韦尔东人”留给世界的神秘名片。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转，凯尔特人在这片水域丰饶的土地上建立了村落。然后是罗马人，他们不仅看中了这里的战略位置，更早早发现了地下温泉的妙用。公元一世纪左右，一个罗马浴场在此建立，奠定了这里作为疗愈之地的初始基因。罗马帝国崩溃后，这里一度沉寂，直到中世纪早期才重新焕发生机。真正的城市雏形和那座标志性城堡的诞生，要归功于萨伏伊伯爵。13世纪，彼得二世伯爵决定在此建造一座坚固的城堡，以巩固他对这片湖区的控制。他们巧妙地利用了纳沙泰尔湖的支流和人工开凿的运河，让城堡被水环绕，形成易守难攻的格局。那些巨大的方形石块被一块块垒起，四座圆塔守卫四角，它既是要塞，也是伯爵权力的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡建成后的几百年里，伊韦尔东莱班在萨伏伊公国治下稳步发展。城堡不仅是军事堡垒，也逐渐承担起行政和居住功能。然而，历史的进程总是充满变数。1536年，伯尔尼的军队征服了这片土地，伊韦尔东莱班进入了伯尔尼统治时期。城堡被改造为伯尔尼行政长官的官邸和法院。有趣的是，尽管政权更迭，地下那汩汩流淌的温泉却从未被人遗忘。民间一直保留着利用温泉水治疗风湿、皮肤病的传统。温泉，成了串联起罗马时代、中世纪和近代的一条看不见的温暖线索。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在18世纪末和19世纪。随着现代医学和休闲观念的兴起，温泉疗养在欧洲成为风潮。伊韦尔东莱班抓住了这个机会。1770年，第一个现代化的温泉浴场建立。到了19世纪中叶，铁路通到了这里，彻底打开了通往世界的大门。富豪、贵族、文人墨客纷纷乘着火车而来，只为享受这里“神奇”的泉水。豪华酒店、剧院、美丽的湖畔长廊拔地而起，小镇迎来了它的“美好时代”。城堡也在此时转变了角色，它不再用作监狱或兵营，而是在19世纪末被改造为学校，后来成为了收藏本地历史文物的博物馆。战争与和平，权力与疗愈，防御与开放，所有这些看似矛盾的元素，最终都和谐地沉淀在伊韦尔东莱班的肌理之中，成就了它今天独一无二的复杂气质。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底读懂伊韦尔东莱班这本“立体历史书”，我强烈建议你至少留出完整的一天。最佳节奏是从清晨开始，趁大批一日游的温泉客还未涌入，独自享受老城和湖畔的宁静。上午的阳光柔和，最适合探索城堡的外部结构和摄影，随后进入城堡博物馆进行一场深度的历史穿越。午后，当身体略感疲惫时，正是投入温泉中心怀抱的最佳时刻，让古老的泉水洗去半日行走的辛劳。傍晚时分，乘一段短途巴士或骑上一辆公共自行车，前往城郊的克拉旺立石阵，在日落的神秘光线下与史前文明对话。这样的安排张弛有度，从近代回溯至远古，让你在身体放松的同时，完成一次精神上的时光旅行。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`温泉中心在周末和假日可能非常拥挤，尽量选择工作日午后前往体验会更舒适。参观立石阵请穿着舒适防滑的鞋子，因为草地可能潮湿，且巨石周围地面不平坦。大部分博物馆和景点周一闭馆，务必提前规划行程，避免扑空。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从火车站沿着Grand Rue大道慢悠悠地晃进老城中心，用鼻子寻找新鲜出炉的可颂和咖啡的香气，在石板路上看店铺陆续开门。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走到城堡广场（Place du Château），绕着护城河走一圈，从不同角度欣赏这座水上堡垒的倒影和敦实的四角塔楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡内部参观市立博物馆，花时间细细观看那些关于温泉历史、本地考古和中世纪生活的展品，想象各个时代的人们在此生活的画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡出来后，沿着湖畔的Quai de la Thièle散步，看天鹅游弋，一直走到现代化的Thermal Centre温泉中心，用两三个小时沉浸在不同的温泉池、桑拿和蒸汽房里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午饭可以选择老城里一家家庭经营的小餐馆，尝尝沃州特色的香肠或湖鱼，配上一杯本地产的白葡萄酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`搭乘1路或6路公交车前往克拉旺立石阵（Clendy Menhirs），在广阔的湖边空地上，漫步于那些巨大的、姿态各异的史前巨石之间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前返回湖边，在码头附近的餐厅找一张露天座位，点一份晚餐，看着纳沙泰尔湖的湖水从湛蓝变成金黄，再染上粉紫的暮色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果意犹未尽，可以在晚饭后再次漫步到城堡边，看灯光勾勒出的城堡轮廓倒映在黑丝绒般的河面上，与白天的景象截然不同。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡东侧护城河上的小桥`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时，阳光正好照亮城堡东立面，站在桥中央可以拍到城堡及其完美倒影的对称构图，水面平静如镜。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡内部庭院`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入院，利用拱廊形成的强烈明暗对比和几何线条，拍摄建筑的结构美感，人物可以站在光柱中形成剪影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城Rue du Milieu街道`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射进狭窄的街道，利用街道的纵深感，以尽头可见的城堡塔楼为焦点，捕捉光线照亮古老石门和鹅卵石路的场景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Thermal Centre温泉中心内部（如允许拍摄）`}</h4>
                  <p className="text-sm text-gray-700">{`聚焦其现代感十足的旋转楼梯或玻璃穹顶，利用建筑线条和透过玻璃的柔和天光，营造宁静而富有设计感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`克拉旺立石阵日落时分`}</h4>
                  <p className="text-sm text-gray-700">{`选择一块最高的巨石作为前景，将对焦点放在巨石纹理上，让背后染成橙红色的纳沙泰尔湖和天空成为朦胧的背景，表达史前文明与永恒自然的对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄湖畔和水中倒影时，使用偏光镜（CPL）可以有效减少水面反光，让倒影更清晰、色彩更饱和。尊重当地隐私，在温泉中心内部拍摄前务必确认规定，通常公共泳池区域禁止拍照，但建筑中庭或允许拍摄的区域除外。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城中心一家由古老宅邸改造的家庭旅馆，房间不大但充满温馨的木制家具，早晨能听到楼下市场筹备的热闹声响，老板会热情地给你手绘游览地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史体验`}</h4>
                  <p className="text-sm text-green-800">{`直接入住由城堡附属建筑改造的精品酒店，睡在拥有数百年历史的石墙之内，现代舒适的设施与暴露的原始木梁形成奇妙的时空交错感。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端水疗享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择湖畔带私人温泉接入客房的高端酒店，在房间阳台就能俯瞰湖景，享受酒店内世界级的水疗护理，将疗愈体验从公共浴场延续到私密空间。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自助游最爱`}</h4>
                  <p className="text-sm text-purple-800">{`租住位于安静居民区、带小厨房的现代公寓，像当地人一样去市场采购食材，晚上自己烹饪，深度融入这个小镇的日常节奏。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季旅游旺季和冬季温泉疗养季住宿非常紧张，务必提前数月预订，尤其是周末。小镇整体治安极好，夜间独自步行也很安全。选择离火车站或湖边稍远一点的住宿，价格往往更实惠，且能体验到更宁静的居住环境。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开伊韦尔东莱班好多天了，我闭上眼，脑海里浮现的不是某个单一壮丽的画面，而是一种混合的感受：是皮肤记忆里温泉水的滑腻温热，是指尖触碰城堡巨石时的粗砺沁凉，是立石阵前风吹过发梢时那份旷古的寂寥。这个地方教会我一件事：真正的深度，不在于景点的密集或建筑的恢弘，而在于一片土地能向你平静展示多少层时间的年轮。它不争不抢，就那样安然躺在湖边，让罗马人的浴池、萨伏伊伯爵的堡垒、伯尔尼执政官的厅堂、近代疗养客的欢笑，以及五千年前某位祭司对天空的凝视，全部沉淀在同一个空间里，任由你去解读、去连接。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都追求快速体验、网红打卡的时代，伊韦尔东莱班像一位沉静的长者，它邀请你慢下来。它要求你不仅用眼睛看，还要用身体去浸泡，用脚步去丈量，用心灵去感应从地底涌出的暖流和从远古吹来的凉风。在这里，疗愈不仅仅是温泉 brochure 上宣传的矿物质功效，更是一种在历史长河中得到片刻安顿、意识到自己只是漫长人类故事中一个小小注脚的精神释然。所以，如果你厌倦了浮光掠影的行程，渴望一次能同时抚慰身体、触动心灵并启迪思想的旅行，请务必来伊韦尔东莱班住上几天。它会用它的湖水、石头和温泉，为你讲述一个关于时间、坚韧与疗愈的，层次丰富的故事。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gandria-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    甘
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">甘德里亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gandria</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rolle-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗尔城堡（罗尔镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Rolle (Town of Rolle)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aarau-old-town-frescoes" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿劳老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aarau Old Town</p>
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
