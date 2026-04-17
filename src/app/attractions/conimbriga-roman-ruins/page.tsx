import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科英布里加罗马遗址 Conímbriga｜葡萄牙保存最完好的罗马古城与惊世马赛克 - 最佳欧洲景点',
  description: '车子拐下高速公路，驶入一片宁静的葡萄牙乡村，橄榄树和葡萄园在山丘上划出温柔的线条。然后，毫无预兆地，一片巨大的、赭黄色的石头废墟就那样横亘在阳光下。那不是几根孤零零的柱子，而是一座完整的、沉睡着的小城轮廓。空气里是干燥的泥土气息，混合着野生迷迭香被太阳炙烤后的清香。一脚踏进去，脚下是碎石与千年尘埃，...',
}

export default function ConimbrigaRomanRuinsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '科英布里加罗马遗址', href: '/attractions/conimbriga-roman-ruins' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科英布里加罗马遗址・Conímbriga・葡萄牙・孔德沙镇 (科英布拉区)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下高速公路，驶入一片宁静的葡萄牙乡村，橄榄树和葡萄园在山丘上划出温柔的线条。然后，毫无预兆地，一片巨大的、赭黄色的石头废墟就那样横亘在阳光下。那不是几根孤零零的柱子，而是一座完整的、沉睡着的小城轮廓。空气里是干燥的泥土气息，混合着野生迷迭香被太阳炙烤后的清香。一脚踏进去，脚下是碎石与千年尘埃，耳边只剩下呼呼的风声和断壁残垣间不知名虫子的鸣叫。时间在这里忽然失重，现代世界的嘈杂被一道看不见的屏障隔绝在外。
但真正让你倒吸一口凉气的，是当你低头的时候。穿过看似平凡的门廊，走进那些被标记为“宅邸”的区域，你的脚下会瞬间绽放出绚烂的色彩。不是比喻，是真的绽放——两千年前的罗马工匠，用拇指盖大小的彩色石块（tesserae），在地面上拼出了神话、海兽、几何图案与狩猎场景。最著名的“坎塔伯斯宅邸”里，那幅巨大的海洋主题马赛克，蓝色的海浪仿佛还在翻滚，海豚在跃起，各种奇异的海洋生物栩栩如生。阳光直射下来，那些玻璃和石质的碎片折射出细微的、湿润的光泽，让你恍惚间觉得，主人只是暂时离开，地板上粼粼的波光下一秒就会打湿你的鞋尖。
这里不是那种仅供仰望的纪念碑。你能走进富商家的中庭，想象喷泉曾如何叮咚作响；你能穿过公共浴场一个个功能明确的房间，从更衣室到热水池，蒸汽似乎还未散尽；你还能沿着最初铺设的石板路漫步，路边的排水沟渠依旧清晰。遗址与周边的现代村落仅一墙之隔，当地居民的生活——晾晒的衣物、午后的咖啡香、孩子的嬉笑声——隐隐传来。这种奇妙的并置，让历史不再是教科书上冰冷的章节，而是触手可及、仍在呼吸的过往。它最动人的魅力，便在于这种极致的“保存”：保存了繁华，也保存了废墟；保存了艺术的巅峰，也保存了生活最琐碎的痕迹。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子拐下高速公路，驶入一片宁静的葡萄牙乡村，橄榄树和葡萄园在山丘上划出温柔的线条。然后，毫无预兆地，一片巨大的、赭黄色的石头废墟就那样横亘在阳光下。那不是几根孤零零的柱子，而是一座完整的、沉睡着的小城轮廓。空气里是干燥的泥土气息，混合着野生迷迭香被太阳炙烤后的清香。一脚踏进去，脚下是碎石与千年尘埃，耳边只剩下呼呼的风声和断壁残垣间不知名虫子的鸣叫。时间在这里忽然失重，现代世界的嘈杂被一道看不见的屏障隔绝在外。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但真正让你倒吸一口凉气的，是当你低头的时候。穿过看似平凡的门廊，走进那些被标记为“宅邸”的区域，你的脚下会瞬间绽放出绚烂的色彩。不是比喻，是真的绽放——两千年前的罗马工匠，用拇指盖大小的彩色石块（tesserae），在地面上拼出了神话、海兽、几何图案与狩猎场景。最著名的“坎塔伯斯宅邸”里，那幅巨大的海洋主题马赛克，蓝色的海浪仿佛还在翻滚，海豚在跃起，各种奇异的海洋生物栩栩如生。阳光直射下来，那些玻璃和石质的碎片折射出细微的、湿润的光泽，让你恍惚间觉得，主人只是暂时离开，地板上粼粼的波光下一秒就会打湿你的鞋尖。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是那种仅供仰望的纪念碑。你能走进富商家的中庭，想象喷泉曾如何叮咚作响；你能穿过公共浴场一个个功能明确的房间，从更衣室到热水池，蒸汽似乎还未散尽；你还能沿着最初铺设的石板路漫步，路边的排水沟渠依旧清晰。遗址与周边的现代村落仅一墙之隔，当地居民的生活——晾晒的衣物、午后的咖啡香、孩子的嬉笑声——隐隐传来。这种奇妙的并置，让历史不再是教科书上冰冷的章节，而是触手可及、仍在呼吸的过往。它最动人的魅力，便在于这种极致的“保存”：保存了繁华，也保存了废墟；保存了艺术的巅峰，也保存了生活最琐碎的痕迹。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科英布里加罗马遗址`} />
                <InfoRow label="英文名称" value={`Conímbriga`} />
                <InfoRow label="正式名称" value={`Conímbriga Ruins`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`孔德沙镇 (科英布拉区)`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙境内规模最大、保存最为完好的罗马帝国时期城市遗址。`} />
                <InfoRow label="建筑特色" value={`以令人叹为观止、保存完好的精美室内马赛克地面为核心特色，同时拥有完整的宅邸、公共浴场、广场和防御城墙体系。`} />
                <InfoRow label="建筑风格" value={`典型的罗马帝国晚期城市建筑，融合了罗马本土技术与当地伊比利亚风格。`} />
                <InfoRow label="文化价值" value={`如同一本打开的石砌史书，生动展现了罗马帝国在伊比利亚半岛西部边疆的社会生活、艺术成就与历史变迁。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月至9月）：每日上午10:00至晚上7:00，最后入场时间为下午6:15。
冬季（10月至3月）：每日上午10:00至下午6:00，最后入场时间为下午5:15。
全年每周一上午关闭，下午2:00开放（公众假期除外）。
圣诞节、元旦和复活节周日下午关闭。强烈建议出发前在其官网再次确认，因为小型维护或特殊活动可能导致临时关闭。`} />
              <InfoRow label="门票价格" value={`标准票价：5欧元。
优惠票价（65岁以上老人及持有效学生证者）：2.5欧元。
家庭票（2位成人+2位儿童）：12.5欧元。
10岁以下儿童免费。
持有“葡萄牙遗产通票”可免费入场。门票包含遗址和博物馆的参观。建议提前在线购票以避免旺季排队。`} />
              <InfoRow label="地址" value={`Conímbriga， 3150-220 Condeixa-a-Nova， Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本出发：自驾是最方便的方式，沿A1高速公路向北，在“Condeixa-a-Nova”出口下，再根据路标行驶约5分钟即可到达，全程约2小时。若乘坐火车，可从里斯本东方火车站搭乘前往科英布拉的火车（车程约1.5-2小时），抵达科英布拉火车站后，转乘当地出租车（约20分钟，费用25-30欧元）或提前查询班次稀疏的当地巴士（路线编号不详，需在科英布拉汽车站咨询）。
从波尔图出发：自驾沿A1高速公路向南，同样在“Condeixa-a-Nova”出口下，车程约1小时20分钟。火车需先到科英布拉中转，再按上述方式前往。遗址门口有充足的免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科英布里加的故事，远比“罗马遗址”四个字要曲折得多。早在罗马人到来之前，这片俯瞰着蒙德古河支流的小山丘上，就已经有一个繁荣的卡斯特罗文化（属于凯尔特-伊比利亚人）的定居点。“Conímbriga”这个名字本身，就源于前罗马时代的词根“conim”（意为“高处”或“岩石”）和凯尔特语的“briga”（意为“设防的高地”）。公元前1世纪，罗马共和国的大军横扫伊比利亚半岛，这里被纳入了罗马的统治版图，最初是作为连接里斯本（Olisipo）和布拉加（Bracara Augusta）重要道路上的一个驿站。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的黄金时代始于公元1世纪，罗马帝国进入和平繁荣的“罗马和平”时期。科英布里加获得了自治市地位，城市开始按照典型的罗马网格规划进行大规模扩建。富裕的市民，很可能是通过当地的农业（橄榄油、葡萄酒）和矿业贸易积累了财富，开始竞相建造豪华宅邸。他们引入了先进的城市设施：复杂的引水渠从数公里外引来源源不断的活水，供给喷泉、家庭和宏伟的公共浴场；铺设了平整的石板路和高效的下水道系统。而彰显他们品味与财富的，正是那些耗费巨资、由顶尖工匠铺设的马赛克地面。这些马赛克不仅是装饰，更是社会地位的象征，描绘着主人的知识（神话故事）、财富（狩猎场景）和世界观（海洋与陆地）。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，帝国的边疆从不真正平静。公元3世纪后期，罗马帝国陷入危机，日耳曼部落开始渗透侵扰伊比利亚半岛。为了自保，科英布里加的居民在公元4世纪做出一个重大决定：他们放弃了原本宽敞的城市规划，仓促地建造了一道高达6-7米、厚实坚固的防御城墙。这道城墙就像一把残酷的手术刀，将城市一分为二：一部分被保护在内，另一部分包括宏伟的早期广场，则被无情地舍弃在墙外。你可以清晰地看到，有些豪华宅邸的马赛克地板，甚至被新建的城墙墙基直接压碎、覆盖。这道墙是焦虑时代的纪念碑，标志着无忧无虑的繁荣时代的终结。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城墙并未能带来永久的安宁。公元465年左右，属于日耳曼部落的苏维汇人最终攻占了科英布里加。城市遭受了严重破坏，许多建筑被焚毁。幸存的居民和城市的政治、宗教重心，逐渐迁移到了附近更易防守的科英布拉（这就是今天科英布拉大学的所在地）。科英布里加被逐渐废弃，泥土掩埋了街道，野草在精美的马赛克上生长。直到十九世纪，它才被系统地考古发掘，重见天日。它的毁灭与掩埋， ironically， 恰恰是那些脆弱而美丽的马赛克得以完好保存至今的原因——它们被深埋地下，避免了风化和人为的破坏。战争与时间摧毁了城市，却意外地封存了它的艺术心脏。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午10点开门时就抵达，此时光线柔和，游客稀少，你能独享这份古老的宁静。整个深度游览需要至少3-4小时，节奏宜慢不宜快，因为精华在于细细观察和想象。游览顺序建议先户外遗址，再室内博物馆，这样能形成一个从直观感受到历史认知的完整闭环。先从入口处的模型和俯瞰开始建立整体空间概念，然后顺时针沿着主要的废墟区漫步，重点深入几个有顶棚保护的豪华宅邸欣赏马赛克，接着感受公共浴场的规模，最后在防御城墙处思考城市的结局。将凉爽的博物馆作为行程的后半段，那里详细的解说和出土文物能解答你游览中产生的所有疑问。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双结实、防滑的鞋子，遗址地面遍布碎石和凹凸不平的古石板，高跟鞋是绝对禁区。葡萄牙午间阳光非常猛烈，遗址中遮阴处极少，帽子和防晒霜是必备品，并携带足量饮用水。尽量避免在周末下午前往，那时可能会有较多的本地家庭游客团。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从游客中心旁的观景平台开始，俯瞰整个遗址的全貌，让那些街道、地基和围墙的布局在你脑中形成一张活地图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主路走下坡，首先探访“坎塔伯斯宅邸”，蹲下来花至少二十分钟细细品味那幅巨大、色彩斑斓且细节惊人的海洋生物马赛克。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过曾经的集市广场遗址，感受石板上被马车轮磨出的深深凹痕，然后进入结构清晰的公共浴场，从冷水池走到热水池，想象罗马人社交洗浴的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕到遗址的西南角，触摸那道将城市割裂的厚重晚期罗马防御城墙，寻找那些被匆忙砌入墙体的早期建筑装饰碎片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到“喷泉之屋”，欣赏其中庭保存完好的水系结构和马赛克，听流水声在残垣间制造出奇妙的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入有顶棚保护的“狩猎之屋”，在相对幽暗的光线下，看墙根处描绘狩猎场景的马赛克如何依然生动鲜活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，不要错过遗址内的博物馆，那里陈列着从遗址出土的雕塑、日用品和珠宝，尤其要看那些马赛克的剖面模型，了解其精湛的构造工艺。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`坎塔伯斯宅邸马赛克俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至十一点，阳光斜射入有顶棚保护的宅邸内部，此时光线最均匀柔和，蹲下放低机位，用广角镜头尽可能多地将那幅海洋马赛克的绚丽图案和深邃的蓝色收入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`防御城墙与远景结合`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，站在城墙内侧较高的位置，以巨大的方形石砌城墙为前景框架，将对面的现代村庄和绿色丘陵纳入背景，形成强烈的时间对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`公共浴场拱廊下的光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光从浴场遗址残存的拱门和窗洞直射进来，在地面的废墟和杂草上投下清晰的几何光斑，寻找一个角度捕捉这道穿越千年的光柱。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`博物馆内的细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`在博物馆室内光线稳定的环境下，使用大光圈镜头近距离拍摄马赛克碎片、青铜雕像的面部表情或刻有铭文的石头，捕捉历史的精微质感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄马赛克时请绝对不要使用闪光灯，强烈的闪光会加速这些古老色块的褪色。无人机飞行在遗址上空通常是被严格禁止的，请务必遵守规定。最好的拍摄心态是等待，等待一缕光，等待一个没有人的瞬间，这里的静默感比任何壮观的景象都更值得记录。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`科英布拉市中心历史区的精品酒店，住在充满学术气息的古老街道，晚上可以漫步探访大学和图书馆，次日再轻松前往遗址。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`乡村体验`}</h4>
                  <p className="text-sm text-green-800">{`孔德沙镇或附近村庄由石头农舍改建的乡村民宿，享受绝对的宁静，在星空下的泳池边回味白天的历史震撼。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感居所`}</h4>
                  <p className="text-sm text-yellow-800">{`蒙德古河畔经过现代设计的精品旅馆，将古老的石材与极简风格融合，在露台上享用早餐时眺望田园风光。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华享受`}</h4>
                  <p className="text-sm text-purple-800">{`驱车半小时可达的巴塔利亚或布萨科森林周边的历史宫殿酒店，将自己完全沉浸在葡萄牙的遗产氛围中，让罗马遗迹与中世纪修道院完成一场时空对话。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果希望获得最沉浸的体验，非常推荐住在孔德沙镇或周边乡村，这样你可以在清晨遗址刚开门或傍晚闭门前独享整个废墟，感受截然不同。科英布拉作为大学城，夜间生活丰富，餐饮选择也多，但旺季时需要提前很久预订。该区域治安良好，民风淳朴。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科英布里加的时候，我鞋底沾满了红色的尘土，指尖似乎还残留着抚摸过那些冰凉石块的触感。脑海里挥之不去的，不是帝国的宏伟，反倒是那些细节：马赛克里一只海豚调皮的眼神，排水沟边一块被脚步磨得圆润的石板，还有那道为了求生而仓促建起、却压碎了昔日繁华地板的城墙。这里讲述的，是一个关于建造、繁荣、恐惧、坚守与最终沉寂的完整故事。它没有戏剧性的崩塌，更像是一种缓慢的、带着无奈感的呼吸停止。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率和崭新事物的时代，科英布里加提供了一种珍贵的“慢读”体验。它要求你蹲下来，仔细观察；它邀请你停下脚步，努力倾听风声中的历史回响。它不像那些金碧辉煌的宫殿，只展示权力顶峰的瞬间，而是坦诚地展露了生活的全貌——从极致的美到迫切的求生欲。每一位热爱深度游的旅人，都应该来这里上一堂关于时间的课。它会温柔地提醒你，所有我们今日为之奔忙的一切，无论是艺术、财富还是安全，在漫长的时光尺度下，都将归于尘土，但那些试图创造美、构建家园、努力生存过的痕迹，本身就是最动人、最永恒的人类诗篇。站在废墟之上，你反而会对当下生活，生出一种更踏实、也更豁达的热爱。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/evora-bone-chapel-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃武拉人骨教堂与古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Evora Bone Chapel and Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/convent-of-christ-tomar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托马尔骑士团修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convent of Christ</p>
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
