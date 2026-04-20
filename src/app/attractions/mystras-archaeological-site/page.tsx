import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米斯特拉斯遗址 Mystras｜探访伯罗奔尼撒山脊上的“鬼城”与拜占庭最后的文化明珠 - 最佳欧洲景点',
  description: '车子拐过最后一个弯，米斯特拉斯就这样毫无预兆地撞进视野里。那不是一座建筑，而是一座山——一座被密密麻麻的灰色石头“生长”出来的山。在伯罗奔尼撒灼热的阳光下，它像一头沉睡巨兽的嶙峋骨架，沉默地趴伏在泰格特斯山脉的余脉上。空气里有浓烈的松脂和干草香气，混着古老石头被晒透后散发出的、类似尘土般的矿物质味道...',
}

export default function MystrasArchaeologicalSitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '米斯特拉斯遗址', href: '/attractions/mystras-archaeological-site' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米斯特拉斯遗址・Mystras・希腊・伯罗奔尼撒半岛，拉科尼亚地区（邻近现代斯巴达市）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐过最后一个弯，米斯特拉斯就这样毫无预兆地撞进视野里。那不是一座建筑，而是一座山——一座被密密麻麻的灰色石头“生长”出来的山。在伯罗奔尼撒灼热的阳光下，它像一头沉睡巨兽的嶙峋骨架，沉默地趴伏在泰格特斯山脉的余脉上。空气里有浓烈的松脂和干草香气，混着古老石头被晒透后散发出的、类似尘土般的矿物质味道。除了远处偶尔几声羊铃，世界安静得只剩下风穿过橄榄树林和废墟窗洞的呜咽。第一眼，你会觉得它有点“可怕”，不是惊悚，而是那种被巨大时间重量压着的、令人屏息的庄严。
但当你开始沿着之字形的古老步道向上爬，这座“鬼城”便一点点活了过来。脚下是已被无数朝圣者、士兵、学者脚步磨得光滑甚至凹陷的石板路，缝隙里探出顽强的野花。你的手会不自觉拂过那些粗粝的、暖烘烘的石墙。转过一个弯，突然就能从某个坍塌的拱门框里，望见山下斯巴达平原无边的橄榄园，绿得像一块巨大的丝绒毯子。这里没有博物馆那种刻意的陈列感，生活痕迹随处可见：半埋在地下的石制储水池、墙壁上黑黢黢的壁炉坑、甚至某处门槛上深深的凹槽，都让你瞬间想象出某个拜占庭主妇日复一日在此劳作的样子。它不是一个死去的遗址，而是一个被时间突然凝固的、依然呼吸着的社区。
而它的心脏，藏在那一座座看似朴拙的石头教堂里。推开圣迪米特里奥斯教堂厚重的木门，黑暗与清凉瞬间包裹了你。然后，等你眼睛适应了昏暗的光线，你会倒吸一口凉气——从地板到拱顶，整个内部空间被色彩绚烂到令人眩晕的壁画完全覆盖。圣人们的眼睛在摇曳的烛光中凝视着你，他们的衣袍仿佛还在微风中飘动。那种美不是宁静的，而是充满戏剧性的、饱含情感的，金色的背景似乎让整个昏暗的空间都在发光。你能闻到淡淡的蜡烛烟味、陈年木头味，还有石头深处沁出的凉气。那一刻你突然明白，米斯特拉斯最动人的，不是城堡的威严，而是这种在石头与色彩中爆发出的、近乎倔强的精神力量。它是在帝国落日时分，一群人用尽最后力气谱写的一曲辉煌挽歌。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子拐过最后一个弯，米斯特拉斯就这样毫无预兆地撞进视野里。那不是一座建筑，而是一座山——一座被密密麻麻的灰色石头“生长”出来的山。在伯罗奔尼撒灼热的阳光下，它像一头沉睡巨兽的嶙峋骨架，沉默地趴伏在泰格特斯山脉的余脉上。空气里有浓烈的松脂和干草香气，混着古老石头被晒透后散发出的、类似尘土般的矿物质味道。除了远处偶尔几声羊铃，世界安静得只剩下风穿过橄榄树林和废墟窗洞的呜咽。第一眼，你会觉得它有点“可怕”，不是惊悚，而是那种被巨大时间重量压着的、令人屏息的庄严。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但当你开始沿着之字形的古老步道向上爬，这座“鬼城”便一点点活了过来。脚下是已被无数朝圣者、士兵、学者脚步磨得光滑甚至凹陷的石板路，缝隙里探出顽强的野花。你的手会不自觉拂过那些粗粝的、暖烘烘的石墙。转过一个弯，突然就能从某个坍塌的拱门框里，望见山下斯巴达平原无边的橄榄园，绿得像一块巨大的丝绒毯子。这里没有博物馆那种刻意的陈列感，生活痕迹随处可见：半埋在地下的石制储水池、墙壁上黑黢黢的壁炉坑、甚至某处门槛上深深的凹槽，都让你瞬间想象出某个拜占庭主妇日复一日在此劳作的样子。它不是一个死去的遗址，而是一个被时间突然凝固的、依然呼吸着的社区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它的心脏，藏在那一座座看似朴拙的石头教堂里。推开圣迪米特里奥斯教堂厚重的木门，黑暗与清凉瞬间包裹了你。然后，等你眼睛适应了昏暗的光线，你会倒吸一口凉气——从地板到拱顶，整个内部空间被色彩绚烂到令人眩晕的壁画完全覆盖。圣人们的眼睛在摇曳的烛光中凝视着你，他们的衣袍仿佛还在微风中飘动。那种美不是宁静的，而是充满戏剧性的、饱含情感的，金色的背景似乎让整个昏暗的空间都在发光。你能闻到淡淡的蜡烛烟味、陈年木头味，还有石头深处沁出的凉气。那一刻你突然明白，米斯特拉斯最动人的，不是城堡的威严，而是这种在石头与色彩中爆发出的、近乎倔强的精神力量。它是在帝国落日时分，一群人用尽最后力气谱写的一曲辉煌挽歌。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米斯特拉斯遗址`} />
                <InfoRow label="英文名称" value={`Mystras`} />
                <InfoRow label="正式名称" value={`Archaeological Site of Mystras`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`伯罗奔尼撒半岛，拉科尼亚地区（邻近现代斯巴达市）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`拜占庭帝国在伯罗奔尼撒的最后政治与文化中心，被誉为“摩里亚专制国的首都”和拜占庭文艺复兴的摇篮。`} />
                <InfoRow label="建筑特色" value={`一座依陡峭山脊而建的、层次分明的“空中城市”，完美融合了防御性城堡、宫殿、民居与众多华丽教堂。`} />
                <InfoRow label="建筑风格" value={`以拜占庭晚期建筑风格为主，清晰可见法兰克、威尼斯及奥斯曼帝国统治时期的影响与叠加。`} />
                <InfoRow label="文化价值" value={`保存了14-15世纪拜占庭艺术，特别是壁画艺术的巅峰之作，是理解东罗马帝国最后辉煌的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月1日至10月31日）：每日上午8:00至晚上20:00。
冬季（11月1日至3月31日）：每日上午8:30至下午15:30。
请注意，遗址范围极大，部分偏远区域的教堂或修道院可能提前半小时关闭入场。每年1月1日、3月25日、5月1日、复活节周日、12月25-26日关闭。天气极端炎热时，中午时段游览体验较差。`} />
              <InfoRow label="门票价格" value={`全价票：12欧元。
优惠票：6欧元（适用于欧盟65岁以上公民及非欧盟25岁以下学生，需出示有效证件）。
冬季票价（11月1日至3月31日）：统一为6欧元。
18岁以下游客及特定纪念日（如3月6日、4月18日、5月18日、9月最后一周周末等）免票。门票包含上城堡、下城所有考古区域及博物馆。`} />
              <InfoRow label="地址" value={`Mystras, 231 00, Sparta, Laconia, Greece`} />
              <InfoRow label="交通方式" value={`最近的国际机场是雅典国际机场（ATH）。从雅典出发，最佳方式是自驾，沿E94/E961高速公路向西南行驶，经的里雅斯特约2.5-3小时可达米斯特拉斯山脚，有清晰路标。公共交通需先从雅典基菲索斯巴士总站乘坐KTEL长途巴士至斯巴达市（约3-3.5小时，班次频繁），再从斯巴达市中心乘坐出租车前往米斯特拉斯遗址入口（车程约15分钟，费用约15-20欧元，建议提前与司机约定返程时间，因遗址门口不易打车）。遗址入口处有停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`米斯特拉斯的故事，始于一个并不浪漫的军事命令。1249年，一位来自西欧的法兰克贵族，亚该亚亲王威廉二世·维尔阿杜安，看中了这座陡峭的山头。他的目的很纯粹：建一座城堡，来监视和镇压始终不愿屈服的斯巴达平原居民。于是，一座坚固的“米斯特拉斯城堡”在山顶矗立起来。然而，历史的玩笑在于，这座为征服而生的城堡，却在几十年后，成了被征服者拜占庭希腊人复兴的堡垒。1262年，拜占庭军队重夺此地，城堡下的山坡上，开始自发聚集起寻求保护的居民和工匠，一个生机勃勃的城镇如藤蔓般，沿着山脊蔓延生长。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`命运的转折点出现在1349年，当时的拜占庭皇帝约翰六世·坎塔库泽诺斯，将这里设立为“摩里亚专制国”的首都。他的儿子，曼努埃尔·坎塔库泽诺斯，成为了第一位专制君主。这位王子不仅是统治者，更是一位哲学家和艺术赞助人。在他的宫廷里，汇聚了从君士坦丁堡流亡而来的学者、神学家、艺术家。几乎一夜之间，米斯特拉斯从边境要塞，变身成为整个地中海世界瞩目的文化中心。哲学家格弥斯托士·卜列东在这里授课，他的新柏拉图主义思想如野火般传播，甚至深深影响了后来意大利的文艺复兴。石头房子间响起了哲学辩论声，修道院的缮写室里，抄写员正忙着保存古代的智慧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十五世纪，当奥斯曼土耳其的铁蹄一步步逼近君士坦丁堡时，米斯特拉斯迎来了它最矛盾也最辉煌的时期。政治前景晦暗，但艺术创作却达到了前所未有的顶峰。大量的教堂被修建或装饰，我们现在看到的那些震撼人心的壁画，大多来自这个“末日狂欢”的时代。艺术家们似乎在用尽最后的色彩，对抗即将到来的黑暗。1449年，最后一位拜占庭皇帝，康斯坦丁十一世·帕里奥洛格斯，正是在米斯特拉斯的圣迪米特里奥斯教堂加冕，然后北上，走向君士坦丁堡的城墙，走向他宿命般的终结。米斯特拉斯，就这样成了拜占庭帝国最后一位皇帝的出发地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`奥斯曼征服后，米斯特拉斯并未被完全废弃，它作为区域行政中心继续存在，许多教堂被改为清真寺，新的建筑元素叠加其上。威尼斯人在后来短暂的统治期间也留下了印记。但它的灵魂已经随着拜占庭的落日而逐渐消散。真正的“死亡”发生在1830年代希腊独立战争之后。新建的希腊国家决定重建古典时代的荣光，在附近的平原上建立了全新的斯巴达市。居民们被鼓励下山，去建设现代化的家园。门窗被钉死，炉火熄灭，米斯特拉斯被彻底遗弃给了风和藤蔓，成了今天我们看到的、充满诗意荒凉感的“石头之城”。直到二十世纪，考古学家才小心翼翼地拨开杂草，让这座“东方的佛罗伦萨”重新低语起它波澜壮阔的往事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略米斯特拉斯的层次与灵魂，必须预留完整的一天（至少5-6小时）。强烈建议在早上8点开门时就抵达上城堡入口，此时的阳光柔和，气温凉爽，最重要的是，你能独占整座山城的寂静。游览节奏应遵循“自上而下”的历史与地理逻辑：先从山顶的弗兰克城堡开始，那是一切的起点，也是视野的巅峰；然后沿着主路缓缓下山，依次探索上城的宫殿、贵族区与核心教堂；最后抵达下城的修道院与民居区，并在考古博物馆收尾。这样走是下坡路，较为省力，且如同翻阅一部从军事起源到文化繁盛，再到平民生活的立体史书。中午最热时，你正好可以躲在某座教堂里欣赏壁画，享受天然的清凉。请务必穿着绝对舒适、防滑的徒步鞋，带上充足的水和防晒用品，山路崎岖且毫无遮荫。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必在入口处拿一份详细地图，因为山路岔路多且标识有时不够清晰，容易错过隐藏的小教堂。
部分教堂内部严禁使用闪光灯，甚至完全禁止拍照，请务必遵守规定，管理人员对此非常严肃。
夏季务必携带至少2升水并做好极端防晒，山上几乎没有商业设施，仅在下城出口处有一家小咖啡馆。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从位于山顶附近的主入口进入，先别急着下山，转身沿着陡峭的步道一口气攀爬到最顶端的弗兰克城堡废墟，在破碎的城垛上迎接360度环绕的、令人窒息的伯罗奔尼撒山海全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰的主干道向下走，很快你会到达上城的核心——气势恢宏但如今只余高大空壳的专制君主宫殿，站在空旷的广场上想象昔日宫廷的华丽与喧嚣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转入宫殿西侧的狭窄小巷，去探访小巧精美的圣索菲亚教堂，这里是昔日宫廷的专用礼拜堂，内部残存的壁画和脚下马赛克地砖依然透露出皇家的尊贵气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续下行至被称为“车马隆”的中城区，这里的重点是以绚烂壁画闻名于世的圣迪米特里奥斯教堂，务必留足时间让你的眼睛在昏暗光线中慢慢发现满墙流动的圣经故事与圣徒面容。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着更为平缓的坡道来到下城区，在郁郁葱葱的柏树与橄榄树环抱中，找到女修道院般的潘塔纳萨修道院，它精美的外观融合了哥特与拜占庭元素，且仍有修女居住，是古城中唯一还有生命脉动的地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺路参观附近的佩里沃莱普托斯修道院，它的名字意为“由天堂所造”，其小礼拜堂内保存着米斯特拉斯所有壁画中艺术成就最高、色彩最细腻动人的基督生平场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后抵达位于最下方出口附近的考古博物馆，这座建筑本身曾是圣基里亚基教堂，馆内陈列着从遗址出土的雕塑、珠宝、陶器和壁画碎片，为你一路的所见所闻提供翔实的实物注解。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`弗兰克城堡最高点全景位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，使用广角镜头，将前景的城堡残垣、中景层层叠叠的古城废墟与远景辽阔的斯巴达平原一同纳入画面，构图极具历史纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从潘塔纳萨修道院二层回廊向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光会为修道院精美的石雕拱廊和红色砖瓦屋顶打上侧光，透过拱门框架可以拍摄到下城区的屋顶和远山，画面宁静而富有结构美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣迪米特里奥斯教堂内部壁画细节（若允许拍照）`}</h4>
                  <p className="text-sm text-gray-700">{`需要高感光度和大光圈镜头，在烛台附近借光，聚焦于某位圣徒充满情感的面部特写或衣饰的流畅线条，能拍出极具感染力的宗教艺术画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从山下通往遗址的公路拐弯处仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，驱车到公路对面，可以拍到整个米斯特拉斯山城被金色夕阳笼罩的壮丽全景，山体轮廓与建筑剪影格外分明。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一支稳固的三脚架，尤其在光线昏暗的教堂内部拍摄壁画细节时至关重要。`}</li>
                <li>• {`尊重宗教场所，如果室内有礼拜活动或明确禁止拍照的标识，请绝对不要拍摄。拍摄修女或仍在使用的修道院内部空间前，务必先征得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`便捷城市之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在山下的现代斯巴达市，选择一家干净舒适的家庭旅馆，晚上可以悠闲地逛逛城市广场，品尝地道的希腊小酒馆，为第二天的登山之旅储备体力。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸式体验`}</h4>
                  <p className="text-sm text-green-800">{`选择遗址山脚下仅有的几家传统石屋民宿，清晨在鸟鸣和山雾中醒来，推开窗就能看到被朝阳染成金色的米斯特拉斯城堡，拥有比其他游客多出数倍的宁静时光。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史氛围之选`}</h4>
                  <p className="text-sm text-yellow-800">{`入住斯巴达老城区由百年老宅改造的精品酒店，房间可能保留了原始的石头墙壁和木梁，让你在现代化舒适中仍能触摸到拉科尼亚地区的传统脉动。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端度假之选`}</h4>
                  <p className="text-sm text-purple-800">{`驱车半小时前往海边城镇吉雄或附近山区的生态度假村，在游览完厚重的历史后，用爱琴海的湛蓝或山间的清新空气彻底放松身心，享受希腊的另一种风情。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`若选择住在斯巴达，多数酒店可提供米斯特拉斯的交通协助或一日游预订服务。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是旺季，山脚和斯巴达的优质住宿很快订满，务必提前数月规划。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`米斯特拉斯遗址周边夜晚非常寂静且无照明，单独出行者建议选择斯巴达市内住宿，安全性更高且餐饮选择丰富。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开米斯特拉斯时，我的背包里仿佛装满了沉甸甸的石头。不是实物，而是那种由寂静、光影和褪色壁画共同构成的重量。回望暮色中渐渐隐去轮廓的山城，我突然觉得，它不像许多辉煌古迹那样，只诉说过去的强大。它更是在诉说一种文明的韧性，以及在无可避免的衰落中，人们如何拼命保存美的努力。那些画下最后一笔壁画的匿名艺术家，那些在哲学花园里激烈辩论的学者，他们知道帝国将倾，却依然选择在这座偏远的山城里，将精神的火焰燃烧到最旺。这种在末日来临前的极致创造，有一种悲剧性的、动人心魄的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都速生速朽的时代，米斯特拉斯教会人慢下来，去倾听石头的声音，去读懂墙壁上的故事。它不是一个被圈起来、仅供拍照的景点，而是一个需要你用脚步丈量、用呼吸感受的庞大生命体。在这里，你会真切地触摸到“历史”不再是书本上的名词，而是吹过你脸颊的风，是脚下硌脚的碎石，是教堂里那一缕穿越了六百年的、混合着蜡油与时间的气息。对于每一位渴望深度游的旅人而言，米斯特拉斯是一次精神的朝圣。它让你在荒芜与繁盛的交织中，思考何为永恒，何为存在。当你站在那片废墟之中，你会感觉自己也成了历史长河中的一部分，渺小，却因这份连接而变得无比丰盈。这，或许就是旅行能带给我们的、最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kavala" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡瓦拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kavala</p>
                  </div>
                </div>
              </a>
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
              <a href="/attractions/mystras-byzantine-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米斯特拉斯拜占庭遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mystras</p>
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
