import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '戈里齐亚 Gorizia｜探访冷战时被一分为二的边境之城，在奥匈帝国旧梦与意大利阳光下漫步 - 最佳欧洲景点',
  description: '你还记得那种一脚踏在两个世界边缘的感觉吗？在戈里齐亚，这种感觉不是比喻，而是你每一步踏在古老石板路上都能呼吸到的现实。我抵达的那个清晨，空气里有一股奇特的混合香气——从意大利咖啡馆飘出的浓郁 espresso 焦香，与隔壁斯洛文尼亚面包店刚出炉的“波提察”甜面包的黄油和核桃味交织在一起。阳光斜斜地打',
}

export default function GoriziaItalySloveniaBorderTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '戈里齐亚', href: '/destinations/italy' },
            { label: '戈里齐亚', href: '/attractions/gorizia-italy-slovenia-border-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`戈里齐亚・Gorizia・意大利・戈里齐亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你还记得那种一脚踏在两个世界边缘的感觉吗？在戈里齐亚，这种感觉不是比喻，而是你每一步踏在古老石板路上都能呼吸到的现实。我抵达的那个清晨，空气里有一股奇特的混合香气——从意大利咖啡馆飘出的浓郁 espresso 焦香，与隔壁斯洛文尼亚面包店刚出炉的“波提察”甜面包的黄油和核桃味交织在一起。阳光斜斜地打在广场那些鹅黄色的哈布斯堡时代建筑立面上，把上面精美的灰泥装饰照得发亮，而一转头，就能望见不远处山丘上，那座红褐色石头的戈里齐亚城堡，像一位沉默的哨兵，俯瞰着脚下这片命运多舛的土地。
这里的生活节奏有一种边境特有的、慢悠悠的警觉。老先生们坐在“欧洲咖啡馆”的户外椅上，用带着弗留利方言口音的意大利语读报，偶尔夹杂着几个斯洛文尼亚语词汇。电车早已停驶，但街道的宽度依然保留着奥匈帝国时期为马车队列设计的规模，显得格外空旷。最打动我的，是那种无处不在的“之间”的状态。你站在 Via Roma 街上，左边是意式冰淇淋店，右边是售卖斯洛文尼亚传统蕾丝和蜂蜜的店铺。人们的面孔也混合了拉丁的深邃和斯拉夫的轮廓。这里不像典型的意大利小镇那样外向奔放，它的魅力是内敛的、复杂的，需要你静静聆听街角建筑墙壁上那些弹孔的无声诉说。
它的核心魅力，恰恰在于这种分裂与融合的悖论。冷战时期一道有形的铁丝网，曾将兄弟、恋人、市场一分为二，造就了“戈里齐亚意大利”与“新戈里察”（斯洛文尼亚部分）的双子城奇观。如今铁丝网已拆，申根区让边境形同虚设，但历史的断层线依然以更微妙的方式存在着——在人们的口音里，在菜系的融合中，在那些纪念分裂与庆祝重逢的博物馆里。来这里，你不是观看一个完美的、凝固的历史标本，而是在探访一个依然带着伤疤、却努力愈合的活生生的有机体。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你还记得那种一脚踏在两个世界边缘的感觉吗？在戈里齐亚，这种感觉不是比喻，而是你每一步踏在古老石板路上都能呼吸到的现实。我抵达的那个清晨，空气里有一股奇特的混合香气——从意大利咖啡馆飘出的浓郁 espresso 焦香，与隔壁斯洛文尼亚面包店刚出炉的“波提察”甜面包的黄油和核桃味交织在一起。阳光斜斜地打在广场那些鹅黄色的哈布斯堡时代建筑立面上，把上面精美的灰泥装饰照得发亮，而一转头，就能望见不远处山丘上，那座红褐色石头的戈里齐亚城堡，像一位沉默的哨兵，俯瞰着脚下这片命运多舛的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的生活节奏有一种边境特有的、慢悠悠的警觉。老先生们坐在“欧洲咖啡馆”的户外椅上，用带着弗留利方言口音的意大利语读报，偶尔夹杂着几个斯洛文尼亚语词汇。电车早已停驶，但街道的宽度依然保留着奥匈帝国时期为马车队列设计的规模，显得格外空旷。最打动我的，是那种无处不在的“之间”的状态。你站在 Via Roma 街上，左边是意式冰淇淋店，右边是售卖斯洛文尼亚传统蕾丝和蜂蜜的店铺。人们的面孔也混合了拉丁的深邃和斯拉夫的轮廓。这里不像典型的意大利小镇那样外向奔放，它的魅力是内敛的、复杂的，需要你静静聆听街角建筑墙壁上那些弹孔的无声诉说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，恰恰在于这种分裂与融合的悖论。冷战时期一道有形的铁丝网，曾将兄弟、恋人、市场一分为二，造就了“戈里齐亚意大利”与“新戈里察”（斯洛文尼亚部分）的双子城奇观。如今铁丝网已拆，申根区让边境形同虚设，但历史的断层线依然以更微妙的方式存在着——在人们的口音里，在菜系的融合中，在那些纪念分裂与庆祝重逢的博物馆里。来这里，你不是观看一个完美的、凝固的历史标本，而是在探访一个依然带着伤疤、却努力愈合的活生生的有机体。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`戈里齐亚`} />
                <InfoRow label="英文名称" value={`Gorizia`} />
                <InfoRow label="正式名称" value={`Gorizia`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`戈里齐亚`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在20世纪被意识形态的“铁幕”硬生生撕裂的欧洲边境城市，是冷战历史最鲜活的露天博物馆。`} />
                <InfoRow label="建筑特色" value={`山顶的中世纪城堡与山下充满奥匈帝国时代风情的新艺术风格建筑和谐共存，形成了独特的天际线。`} />
                <InfoRow label="建筑风格" value={`混合了威尼斯哥特式、哈布斯堡王朝的巴洛克与新艺术风格，是一部立体的建筑史教科书。`} />
                <InfoRow label="文化价值" value={`作为意大利、斯洛文尼亚和奥地利文化的十字路口，它见证了战争与分裂的伤痛，也孕育了超越国界的多元身份认同。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`戈里齐亚城堡：夏季（4月至9月）通常为9:00-19:00，冬季（10月至3月）为9:00-17:00，周一可能闭馆或缩短开放时间。城市本身全天可游览，但室内景点如博物馆等有各自开放时间，多数在下午1点至3点有午休。节假日开放时间变动较大，建议行前查阅官网。`} />
              <InfoRow label="门票价格" value={`戈里齐亚城堡入场费约为5欧元，常设展览联票约8欧元。65岁以上老人、学生及团体通常享有折扣。每月第一个周日许多市立博物馆免费。老城漫步无需门票。`} />
              <InfoRow label="地址" value={`Piazza della Vittoria, 34170 Gorizia GO, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是威尼斯马可·波罗机场（VCE）或的里雅斯特机场（TRS）。从威尼斯机场可搭乘机场巴士至威尼斯主火车站（Mestre或Santa Lucia），转乘火车前往戈里齐亚，总耗时约2.5-3小时，班次频繁。从的里雅斯特机场出发更便捷，乘机场 shuttle 到的里雅斯特火车站，再转乘区域火车，约40-50分钟即可抵达戈里齐亚，每小时至少一班。建议使用意大利铁路Trenitalia App提前查询和购票。自驾则沿A4高速公路，从威尼斯或的里雅斯特方向均有清晰路标。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解戈里齐亚，你得把时间拨回到远不止冷战那么近。它的故事始于公元1001年，名字第一次出现在文献上，作为神圣罗马帝国边缘的一个小据点。但真正塑造它性格的，是威尼斯共和国与哈布斯堡奥地利帝国长达几个世纪的拉锯战。这座石头城堡在14到16世纪间被反复争夺、加固，你如今看到的雄伟模样，大部分是威尼斯人占领时期留下的防御工事，充满了地中海的实用主义军事美学。然而，城堡之下的城镇，灵魂却逐渐倾向了维也纳。从1500年到第一次世界大战前，除了短暂的拿破仑插曲，戈里齐亚一直是奥匈帝国的一部分，是繁华的“奥地利里维埃拉”的一颗明珠，贵族们在此建造夏宫，城中弥漫着中欧咖啡馆文化与宫廷礼仪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，20世纪的巨浪以最残酷的方式袭来。戈里齐亚发现自己正处在意大利与奥匈帝国血战的前线——伊松佐河战役。你可能听说过这个名字，那是第一次世界大战中最惨烈的山地战之一，双方在周边的石灰岩山区反复冲杀，死伤百万。城市多次易手，被炮火严重摧毁。战后，根据条约，戈里齐亚并入了意大利。但这远不是动荡的结束，而是另一段分裂的开始。二战结束后，南斯拉夫领导人铁托的军队占领了城市东部，一道临时分界线划了下来。谁能想到，这道线会成为冷战“铁幕”在阿尔卑斯山南麓的具体化身？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1947年的巴黎和约，正式将戈里齐亚一分为二。城堡和老城中心归意大利，而东部包括火车站、墓地和大片郊区则划归南斯拉夫（后来的斯洛文尼亚），并改名为“新戈里察”。一夜之间，街道被截断，有轨电车线路戛然而止，家人和邻里被一道带刺的铁丝网和检查站分离。电影《爱因斯坦在戈里齐亚》就生动描绘了那段荒诞而心碎的岁月。意大利这边的戈里齐亚，仿佛一下子被抽走了半个身躯，成了“边境尽头”的城市，在战后意大利的经济奇迹中多少有些被遗忘，反而意外保留了大量奥匈帝国时期的建筑风貌，像一座时间的琥珀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点发生在2004年，斯洛文尼亚加入欧盟，尤其是2007年加入申根区后。那道物理的边境屏障终于被移除。如今，你甚至可以参加一个名为“跨越边界”的徒步游，轻松步行穿过曾经的无人区，在一天内体验两个国家、三种语言（意大利语、斯洛文尼亚语、弗留利语）、数段交织的历史。戈里齐亚没有试图抹去伤痕，而是将伤痕变成了理解欧洲的窗口。那些曾经的边境哨所，有的变成了艺术装置，有的成了咖啡馆。这座城市从撕裂的伤口中，生长出一种独特的、属于边境的智慧与韧性。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味戈里齐亚的复杂与美丽，我强烈建议你留出一整天时间，从清晨到日暮。上午光线柔和、游客稀少，是探访城堡和宁静老城的最佳时段。中午前后，边境气氛最浓郁，适合在分裂的街区漫步观察。下午可以深入博物馆或进行一次短暂的跨国步行体验。傍晚则留给夕阳和广场的 aperitivo（餐前酒）时光。这样的节奏既能覆盖主要地标，又能留出足够的空白去感受那些细微的、不经意的边境生活瞬间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周一很多博物馆和城堡内部区域可能关闭，务必提前规划。老城区街道上下起伏，请务必穿一双非常舒适耐走的鞋。虽然治安良好，但在探索偏僻小巷时，保持基本的旅行警觉总是好的。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁晨雾未散时沿着蜿蜒的坡道徒步登上戈里齐亚城堡，在空旷的城垛上独自享受俯瞰被霞光染成金粉色的整片城市与远方斯洛文尼亚丘陵的无敌视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`细细探索城堡内部阴凉的石砌大厅、中世纪武器博物馆以及那个令人印象深刻的地下蓄水池，想象威尼斯守卫军在此驻守的岁月。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡后山的小径慢慢走下，让自己迷失在 Borgo Castello 区那些宁静的、挂着蕾丝窗帘的奥斯时代住宅小巷里，聆听窗口传来的收音机声和锅碗瓢盆的轻响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在正午前回到市中心的胜利广场，坐在“欧洲咖啡馆”的红色天鹅绒座椅上，点一杯招牌咖啡，观察广场上各国游客与本地老人交汇的生动图景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场沿着 Via Roma 向东漫步，刻意寻找那些建筑上新旧不一的砖石修补痕迹和偶尔可见的纪念铭牌，它们都是历史层积的无声注解。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过看似普通的居民区，寻找“Transalpina 广场”这个极具象征意义的地点，这里的地面仍保留着一条金属线标记着曾经的国界，体验一脚踏两国的奇妙感觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和签证允许（申根区通用），不妨跨过那条消失的边界，步行二十分钟进入斯洛文尼亚的新戈里察，看看那面标志性的“永不再”纪念墙，再从另一个视角回望意大利的城堡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分返回戈里齐亚，在城堡山脚下的某家露天餐厅，点一份融合了意式与斯洛文尼亚风味的特色料理，比如浇了本地黑松露酱的玉米粥，慢慢享用晚餐。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡最高塔楼西北角垛口`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，将镜头对准远方斯洛文尼亚的新戈里察城市景观，将沧桑的石砌垛口作为前景框，能拍出历史凝视现代的强烈对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`胜利广场的“欧洲咖啡馆”正对面`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右的侧光能完美勾勒出广场上哈布斯堡时代建筑立面的浮雕细节，等待一个行人或鸽子飞过的瞬间增添生气。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Transalpina 广场的边界金属线`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗日子的正午，垂直俯拍自己双脚分别站在金属线两侧的特写，影子落在刻有“Gorizia”和“Nova Gorica”的地面上，寓意深刻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣伊格内修斯教堂内部`}</h4>
                  <p className="text-sm text-gray-700">{`当阳光透过祭坛左侧的彩色玻璃窗射入时（通常下午），坐在长椅上低角度拍摄光束中飞舞的尘埃与巴洛克装饰的交融，充满神圣的静谧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从斯洛文尼亚新戈里察的“欧洲广场”回望`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚华灯初上时，用长焦镜头压缩空间，拍摄戈里齐亚城堡在暮色中亮起灯光的远景，背景是深蓝色的天空。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人时，请务必先微笑示意并获得默许，尊重他们的隐私。使用无人机在边境区域上空拍摄可能受到严格管制，需提前查询法规。室内博物馆和教堂通常禁止使用闪光灯。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由一栋19世纪末奥匈帝国官员宅邸改造的精品酒店，房间挑高极高，保留着原始拼花地板和水晶吊灯，开窗就是宁静的内庭花园与城堡 view。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`边境体验首选`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在老城边缘、靠近昔日边境线的设计酒店，由旧仓库改造，工业风设计中巧妙融入弗留利织物元素，顶楼露台酒吧是欣赏双子城夜景的绝佳地点。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`租一辆车，住在城外几公里处山丘上的弗留利风格农庄民宿，主人会奉上自家酿的葡萄酒和格拉巴酒，夜晚只有虫鸣和星空，清晨在露台看薄雾从边境山谷升起。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近一家由家族三代经营的温馨旅馆，设施简单但一尘不染，老板是本地通，能给你手绘最地道的步行地图和只有本地人才知道的餐厅名单。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季和9月举行的“中世纪戈里齐亚”节期间住宿非常紧俏，务必提前数月预订。老城中心的住宿最能感受氛围，但夜间非常安静，喜欢夜生活的朋友可能觉得太过沉寂。选择靠近边境的住宿，可以非常方便地步行探索两国。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开戈里齐亚好些日子了，我脑海里反复回响的，不是某座宏伟的建筑，而是那种弥漫在空气中的、复杂的宁静。这里没有罗马的辉煌、威尼斯的热闹，甚至没有托斯卡纳的明信片般的完美。它有的是弹孔修补后的墙面颜色深浅不一，是咖啡馆里人们切换语言的淡然，是脚下那条曾意味着隔绝与绝望、如今只是旅游纪念的金属边界线。这种不完美，恰恰是它最真实、最有力的地方。它告诉你，欧洲的历史从来不是直线前进的凯歌，而是充满断裂、回旋与艰难和解的崎岖之路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个全球化口号响亮、却又暗涌着新壁垒的时代，戈里齐亚像一个温和而坚定的提醒者。它亲身经历了撕裂的极致痛苦，也正在实践着重逢的日常奇迹。每一位深度旅行的爱好者，都应该来这里住上几天。不是为了收集又一个景点，而是为了让自己沉浸在这种“之间”的状态里——在意大利的咖啡与斯洛文尼亚的蜂蜜酒之间，在历史的沉重与当下的轻盈之间，在伤痛的记忆与和解的希望之间。你会明白，边界可以划分土地，但无法永远分割人心深处对联系与归属的渴望。戈里齐亚，这座曾被称为“哭泣之城”的地方，如今正用它独特的、带着泪光的微笑，向你讲述一个关于欧洲，也关于我们所有人的故事。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/otranto-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥特朗托老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Otranto Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lucca-old-town-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢卡古城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lucca Old Town Walls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/modica-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫迪卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Modica Old Town</p>
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
