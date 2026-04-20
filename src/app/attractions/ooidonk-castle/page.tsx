import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥东克城堡 Ooidonk Castle | 比利时“水镜城堡”，魔幻倒影与贵族生活的完美定格 - 最佳欧洲景点',
  description: '第一次见到奥东克城堡，是在一个佛兰德地区典型的、光线柔和的初夏午后。车子在宁静的乡间小路上拐了个弯，它就这样毫无预警地、完整地倒映在前方那片宽阔如镜的水面中，仿佛一座直接从童话书里浮出来的模型。那一瞬间，世界的声音好像被抽走了，只剩下心跳和呼吸。它不是那种高踞悬崖、睥睨众生的霸主角色，而是优雅地“坐...',
}

export default function OoidonkCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥东克城堡', href: '/attractions/ooidonk-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥东克城堡・Ooidonk Castle・比利时・德恩泽`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次见到奥东克城堡，是在一个佛兰德地区典型的、光线柔和的初夏午后。车子在宁静的乡间小路上拐了个弯，它就这样毫无预警地、完整地倒映在前方那片宽阔如镜的水面中，仿佛一座直接从童话书里浮出来的模型。那一瞬间，世界的声音好像被抽走了，只剩下心跳和呼吸。它不是那种高踞悬崖、睥睨众生的霸主角色，而是优雅地“坐”在水中央，红砖与白石构成的塔楼、山墙，连同那些精致的窗棂，都一丝不苟地在墨绿色的水面上复制了一遍。水是活的，微微荡漾着，让水中的城堡也跟着轻轻呼吸，虚实之间，界限模糊，美得有点不太真实。
走近了，穿过那座吱呀作响的古老木吊桥，感官才被更丰富的细节唤醒。空气里有河水的微腥、草地上刚割过的青草香，还有古老砖石被午后阳光晒过后散发出的、类似于灰尘与岁月混合的温暖气味。护城河里，几只天鹅慢悠悠地划着水，翅膀拍打水面的声音清晰可闻。城堡本身安静极了，但你能感觉到它并非空壳——窗台上摆着鲜花，某个烟囱仿佛还残留着冬日壁炉的暖意。它不像许多博物馆城堡那样冷冰冰地陈列历史，而更像一位身着旧式华服却依旧从容的贵族老者，依然在自己的领地里过着宁静的、与现代节奏脱节的生活。
在当地人心中，奥东克不仅仅是景点。它是东佛兰德省明信片上的常客，是周末散步遛狗的背景板，是许多比利时新人梦寐以求的婚礼举办地。它的魅力，恰恰在于这种“可亲近的庄严”。你可以在它花园的草坪上野餐，看着同一幅景象几个世纪未曾大变；你可以想象，几个世纪前，城堡主人或许也站在同样的塔楼上，眺望着他的田产与蜿蜒的利斯河。它的核心，不是金碧辉煌的装饰（事实上内部装饰是克制的优雅），也不是惊天动地的历史故事，而是一种极致宁静、近乎停滞的时间感，和那份人与环境、建筑与水景达到的永恒和谐。在这里，你会不自觉地放慢脚步，压低声音，生怕惊扰了这片水面上持续了四百多年的梦境。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次见到奥东克城堡，是在一个佛兰德地区典型的、光线柔和的初夏午后。车子在宁静的乡间小路上拐了个弯，它就这样毫无预警地、完整地倒映在前方那片宽阔如镜的水面中，仿佛一座直接从童话书里浮出来的模型。那一瞬间，世界的声音好像被抽走了，只剩下心跳和呼吸。它不是那种高踞悬崖、睥睨众生的霸主角色，而是优雅地“坐”在水中央，红砖与白石构成的塔楼、山墙，连同那些精致的窗棂，都一丝不苟地在墨绿色的水面上复制了一遍。水是活的，微微荡漾着，让水中的城堡也跟着轻轻呼吸，虚实之间，界限模糊，美得有点不太真实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，穿过那座吱呀作响的古老木吊桥，感官才被更丰富的细节唤醒。空气里有河水的微腥、草地上刚割过的青草香，还有古老砖石被午后阳光晒过后散发出的、类似于灰尘与岁月混合的温暖气味。护城河里，几只天鹅慢悠悠地划着水，翅膀拍打水面的声音清晰可闻。城堡本身安静极了，但你能感觉到它并非空壳——窗台上摆着鲜花，某个烟囱仿佛还残留着冬日壁炉的暖意。它不像许多博物馆城堡那样冷冰冰地陈列历史，而更像一位身着旧式华服却依旧从容的贵族老者，依然在自己的领地里过着宁静的、与现代节奏脱节的生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人心中，奥东克不仅仅是景点。它是东佛兰德省明信片上的常客，是周末散步遛狗的背景板，是许多比利时新人梦寐以求的婚礼举办地。它的魅力，恰恰在于这种“可亲近的庄严”。你可以在它花园的草坪上野餐，看着同一幅景象几个世纪未曾大变；你可以想象，几个世纪前，城堡主人或许也站在同样的塔楼上，眺望着他的田产与蜿蜒的利斯河。它的核心，不是金碧辉煌的装饰（事实上内部装饰是克制的优雅），也不是惊天动地的历史故事，而是一种极致宁静、近乎停滞的时间感，和那份人与环境、建筑与水景达到的永恒和谐。在这里，你会不自觉地放慢脚步，压低声音，生怕惊扰了这片水面上持续了四百多年的梦境。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥东克城堡`} />
                <InfoRow label="英文名称" value={`Ooidonk Castle`} />
                <InfoRow label="正式名称" value={`Ooidonk Castle`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`德恩泽`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座历经毁灭与重生，完美融合了中世纪防御功能与文艺复兴时期美学追求的佛兰芒贵族水堡典范。`} />
                <InfoRow label="建筑特色" value={`标志性的佛兰芒文艺复兴式阶梯山墙与洋葱造型圆塔，被宽阔的护城河如同明镜般环绕，形成举世无双的倒影景观。`} />
                <InfoRow label="建筑风格" value={`佛兰芒文艺复兴风格，带有晚期哥特式的防御元素痕迹。`} />
                <InfoRow label="文化价值" value={`不仅是一座博物馆式的古迹，更是一座至今仍充满生活气息、被同一家族守护了超过一个半世纪的“活着”的贵族宅邸与文化传承地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡内部及花园仅在每年四月至九月的周末及比利时公共假日对公众开放，开放时间为下午14:00至17:30（最后入场时间为17:00）。花园的开放时间可能略长于城堡主体。冬季（十月至次年三月）完全关闭维护。请注意，具体日期每年可能有微调，且城堡仍为私人宅邸，可能因家族活动临时关闭，务必出行前在其官网二次确认。`} />
              <InfoRow label="门票价格" value={`参观城堡内部及花园的联票约为12欧元/成人。仅参观花园的门票约为8欧元。学生、65岁以上长者及团体（通常10人以上）可享受优惠票价，具体金额每年可能略有浮动。12岁以下儿童在成人陪同下通常可免费进入花园，但进入城堡内部可能有年龄或身高限制。门票主要在城堡入口处现场购买。`} />
              <InfoRow label="地址" value={`Ooidonkdreef, 9800 Deinze, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔国际机场出发，最便捷的方式是乘坐火车。首先搭乘机场火车前往根特-圣彼得斯火车站，车程约1小时，班次频繁。在根特火车站，转乘前往德恩泽的当地火车，约15-20分钟车程即可抵达德恩泽站。从德恩泽火车站到城堡仍有约4公里距离，可选择乘坐出租车（约10分钟），或在火车站外乘坐前往“Bachte-Maria-Leerne”方向的本地巴士，在“Ooidonk”站下车步行一段。若自驾，从根特出发沿E17/A14公路朝科特赖克方向行驶，从“德恩泽”出口下，跟随棕色旅游指示牌“Kasteel Ooidonk”即可轻松抵达，城堡外有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`奥东克的故事，始于更早的硝烟之中。我们现在看到的优雅水堡，其地基深处埋藏着一段粗粝得多的往事。早在13世纪，这里就矗立着一座坚固的石头堡垒，它的使命纯粹而简单：防御。它守卫着利斯河上一个重要的渡口，这条河是连接根特和法国里尔的重要贸易水道，战略意义不言而喻。在佛兰德斯伯爵与法国国王纷争不断的年代，这样的堡垒是权力的触角，也是战火中最先被攻击的目标。最初的奥东克城堡，目睹过太多旗帜的变换，在刀剑与炮火中艰难存续。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在16世纪一场灾难性的毁灭。具体年份已模糊在战火里，但可以确定的是，在荷兰反抗西班牙统治的“八十年战争”初期，这座堡垒被攻陷并遭到了严重破坏，几乎沦为废墟。命运的齿轮由此开始转向一个全新的方向。1579年，这片充满潜力的废墟被一位来自安特卫普的富有商人兼银行家——马腾·德·瓦纳赫购得。他不是传统的军事贵族，而是一位深受文艺复兴人文思想影响的“新人”。在他的眼中，这片临水的废墟不是军事据点，而是一块绝佳的“画布”，可以描绘出理想中的家园图景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一次彻底的重建开始了。德·瓦纳赫聘请了当时顶尖的建筑师与工匠，他们的灵感并非来自本土的军事传统，而是跨越阿尔卑斯山，来自意大利和法国卢瓦尔河谷那些更注重美感与舒适性的城堡。防御功能没有被完全抛弃——宽阔的护城河、厚重的墙壁和可以拉起吊桥的入口得以保留——但建筑的灵魂已经被替换。优雅的佛兰芒阶梯式山墙取代了雄堞，精美的石雕窗框装点了立面，特别是那几座后来成为标志的洋葱头圆塔，它们柔和了城堡的天际线，将军事建筑的阳刚之气巧妙地转化为了居住空间的诗意。奥东克从一座“堡垒”，重生为一座“城堡住宅”，这是它历史上最深刻的一次蜕变。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的辉煌在德·瓦纳赫家族手中持续了不到百年。17世纪末，它再次易主，这一次，迎来了让它定型并传承至今的家族：德·波旁-德·拉·莫特家族。这个家族与欧洲王室有着千丝万缕的联系，其品味和财富确保了奥东克能得到最好的维护。19世纪，在当时的城堡主人，也是著名的艺术赞助人保罗·德·波旁-德·拉·莫特伯爵的主持下，城堡进行了一次“浪漫主义”风格的修复与内部装修。我们今天在室内看到的大量佛兰芒挂毯、西班牙皮革墙饰、精致的木雕和家族肖像收藏，很多都汇聚于这个时期。他不是在重建，而是在“润色”，用符合当时浪漫怀古趣味的物件，填充了这个文艺复兴的躯壳，让历史层层叠加，更加丰厚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`自1864年起，奥东克城堡通过联姻，转由德·奥奈达·德·阿姆斯特丹家族继承，并守护至今。两次世界大战中，比利时饱经战火，奥东克竟奇迹般地未受严重破坏，仿佛被那泓护城河水温柔地保护了起来。今天的侯爵一家仍将城堡的一部分作为私人住所，同时谨慎地向公众开放。这意味着，当你踏入那些厅堂，你走过的不仅是博物馆的展区，更是一个延续了数代人的家庭空间。每一幅肖像画上的眼神，每一件家具上的磨损，都连着一段真实的家族记忆。这种“活着的”状态，让奥东克的历史不是封存在玻璃后的标本，而是一股在阳光下依然缓缓流动的、温热的生命之河。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味奥东克的精髓，建议安排一个完整的下午（大约4-5小时），节奏务必放慢。最好在开放时间开始后不久（下午两点左右）抵达，这时光线正好开始从顶光转向侧光，是拍摄城堡外墙和护城河倒影的黄金时段。游览的整体思路是由外及内，最后沉浸于自然。先花足够时间在外部环绕、欣赏建筑与水的对话，然后进入城堡内部，领略其私密的贵族生活氛围，最后漫步于广阔的花园与公园，让之前汲取的历史与文化印象在宁静的自然中得到沉淀。这样的安排避免了走马观花，能让你逐步从视觉震撼深入到情感共鸣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在城堡官网确认开放日期，它开放的时段非常有限，扑空会非常遗憾。参观城堡内部必须参加定时开始的导览团（通常为荷语或法语，但可索取英文文字说明），请合理安排抵达时间以衔接导览。花园和公园小径多为砂石或草地，建议穿着舒适且耐脏的平底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那座吱呀作响的古老橡木吊桥，踏入鹅卵石铺就的前庭，第一时间感受从宏伟门楼投下的清凉阴影和历史带来的轻微压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`别急着进门，顺时针沿着护城河畔的小径走半圈，寻找那个能将主塔、山墙与它们在水中完整倒影同时纳入眼帘的经典角度，静静地看一会儿天鹅游过划破镜面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览进入城堡主楼，让眼睛适应室内略显幽暗的光线，瞬间被大厅里巨大的佛兰芒挂毯、深色橡木镶板和壁炉上方威严的家族纹章所包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`小心翼翼地攀爬狭窄的螺旋石阶登上主塔，从那些狭小的射击孔般的窗户望出去，体验守卫者的视角，俯瞰整个庄园、蜿蜒的利斯河与无边的佛兰德斯田野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在二楼的“骑士厅”驻足，想象一下脚下这些历经数百年磨损的木地板，曾承载过多少场华服盛宴、轻声细语的舞会与重要的家庭会议。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡后门走出，眼前豁然开朗，步入精心修剪的法式规则式花园，感受几何形的绿篱、整洁的砂石路与远处英式自然风景园形成的鲜明对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果运气好遇到厨房开放，一定要进去看看，那些古老的巨型壁炉、闪亮的铜锅和装饰性的代尔夫特蓝陶瓷砖，讲述着另一个关于日常与丰盛的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在护城河对岸的草地上或某张长椅上坐下，什么都不做，只是看着城堡在夕阳下逐渐染上金红色，等待灯光从窗口一盏盏亮起，像星星落入水中。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河西侧经典倒影位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨开门前或闭园前黄昏时分，光线最为柔和，水面也最平静，蹲低机位，让水面倒影占据画面至少一半，对称构图，捕捉城堡与倒影的完美重合。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡主塔洋葱顶特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午顺光时段，从花园方向使用长焦镜头拉近，聚焦于红砖塔身与深色洋葱顶的质感对比，以天空为背景，突出其独特的轮廓和建筑细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`吊桥与入口框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在前庭内，以古老的木制吊桥桥身和铁链作为前景框架，拍摄城堡庄严的主入口，这个角度能极大地增强画面的纵深感和故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`法式花园轴线视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在法式花园的南北主轴线上，使用广角镜头低角度拍摄，让修剪整齐的绿篱线条形成强烈的视觉引导线，最终汇聚于远处的城堡塔楼，体现秩序与庄严之美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`室内长廊光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`在午后阳光恰好射入时，位于城堡连接两翼的长廊，捕捉阳光透过铅条窗在地面投下的几何光斑，结合长廊本身的纵深感，拍摄一幅静谧的光影素描。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜（CPL）可以极大消除水面反光，让水下倒影更清晰，并增强砖石色彩的饱和度。城堡内部大多区域禁止使用闪光灯和三脚架，请调高相机感光度或依靠现场光线拍摄。始终尊重隐私指示，切勿拍摄仍用作私人住所的区域窗户。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`根特市中心运河旁一栋经过精心修复的17世纪贵族宅邸改造的精品酒店，每间客房风格各异，让你在逛完城堡后继续沐浴在佛兰芒文艺复兴的历史氛围中。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园诗意栖居`}</h4>
                  <p className="text-sm text-green-800">{`位于德恩泽乡间、利斯河畔的家庭式民宿，由农舍改造，主人热情好客，提供 homemade 早餐，晚上可以听到田野的虫鸣，真切体验城堡所在的乡村环境。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计风尚据点`}</h4>
                  <p className="text-sm text-yellow-800">{`根特旧港区由旧仓库改造的设计酒店，工业风 loft 搭配现代艺术，视野开阔，提供别样的城市视角，适合追求时尚与便利的年轻旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`贵族庄园体验`}</h4>
                  <p className="text-sm text-purple-800">{`驱车约半小时，入住位于弗兰德地区另一座历史庄园内的豪华酒店，享受米其林餐厅、水疗中心和被古老树林环绕的极致宁静，将城堡之旅延伸为全方位的贵族生活体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果希望获得最完整的宁静体验，建议选择德恩泽或周边乡村的住宿，但需有自驾车保障出行便利。根特作为省会城市，住宿选择丰富且交通枢纽作用强，但周末价格可能上浮且需提前预订。夏季（城堡开放季）是这一地区的旅游旺季，所有住宿都建议至少提前一个月规划。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥东克许久，脑海里挥之不去的，依然是那片水，和水中那个静谧的倒影。在这个追求效率、速度和不断更新的世界里，奥东克提供了一种截然相反的价值观：缓慢、持久与沉淀。它不试图用惊人的珍宝或宏大的叙事来震慑你，而是用一份几乎凝固的宁静，邀请你停下。你会意识到，美有时不需要攀登险峰去征服，只需俯身凝视一片平静的水面；历史也不总是教科书里生硬的段落，它可以是一个家族在同一个壁炉前传递了数百年的温暖。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么要把奥东克放进你的清单？因为它不仅仅是一座城堡。它是一个关于“延续”的活生生的教案。在这里，你能触摸到历史不是断裂的碎片，而是一条绵延的河流；贵族精神褪去了权力的尖锐，转化为对家园、艺术与自然景观的漫长守护。对于每一位深度旅者而言，它是一次心灵的减速带，一次在镜花水月般的倒影中，与永恒进行的短暂对视。当你被现代生活的喧嚣裹挟得疲倦时，你会想起在比利时的一片水中央，有一座红砖城堡始终在那里，倒影如画，时光如蜜，提醒着我们：有些美好，值得用几个世纪去慢慢守护，而我们的心灵，也需要这样一面宁静的“水镜”，来映照出自己最初的模样。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/muiderslot-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Muiderslot</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/citadelle-de-namur" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadelle de Namur</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/telc-water-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    泰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">泰尔奇水上城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Telč Water Castle</p>
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
