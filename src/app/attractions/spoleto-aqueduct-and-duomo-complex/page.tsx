import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯波莱托 Spoleto｜漫步中世纪山城，仰望古罗马“天空之桥”与圣殿 - 最佳欧洲景点',
  description: '第一次看见斯波莱托，是在翁布里亚那如绿色天鹅绒般的丘陵公路上一个转弯后。它不像有些古镇乖巧地趴在山坡上，而是带着一种不容置疑的威严，从山谷中“生长”出来，层层叠叠的赭石色房屋簇拥着塔楼和教堂的尖顶，直抵山顶那座巨大的罗卡城堡。而最夺人眼球的，是横跨在两座青山之间那道巨大的、由无数白色石灰岩拱券组成的...',
}

export default function SpoletoAqueductAndDuomoComplexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯波莱托', href: '/attractions/spoleto-aqueduct-and-duomo-complex' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯波莱托・Spoleto・意大利・斯波莱托`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次看见斯波莱托，是在翁布里亚那如绿色天鹅绒般的丘陵公路上一个转弯后。它不像有些古镇乖巧地趴在山坡上，而是带着一种不容置疑的威严，从山谷中“生长”出来，层层叠叠的赭石色房屋簇拥着塔楼和教堂的尖顶，直抵山顶那座巨大的罗卡城堡。而最夺人眼球的，是横跨在两座青山之间那道巨大的、由无数白色石灰岩拱券组成的“天空之桥”——波恩特 delle Torri 高架渠。那一瞬间，你仿佛看到了古罗马工程师与中世纪建筑师跨越千年的联手，为这座山城戴上了一条最硬核的项链。
把车停在山下，空气立刻不一样了。那是混合了古老石头晒过太阳后的暖意、远处森林飘来的松木香，以及某个小巷深处飘出的新鲜罗勒和慢炖肉酱味道的复杂气息。你开始沿着被无数脚步磨得温润发亮的石板路向上攀爬。脚步声在狭窄的巷弄里回荡，夹杂着上方广场传来的隐隐约约的手风琴声和咖啡馆杯碟的轻碰声。这里的“爬”不是负担，而是一种仪式，你的身体在感受山城的坡度，眼睛在贪婪地捕捉每一个转角可能出现的风景：一扇布满铁锈的百年门环，一丛从石头墙缝里挣扎出来的紫色野花，一个摆满了陶制橄榄油罐和当地绣花亚麻布的小店橱窗。
斯波莱托最动人的，是它活生生的层次感。它不仅仅是一个供人观赏的化石。清晨，主妇们会提着篮子去老集市广场（Piazza del Mercato）采购；午后，老人们在荫凉的石阶上轻声聊天；傍晚，年轻人在大教堂前的台阶上相聚，看着夕阳把对面山上的城堡染成金色。那座令人叹为观止的输水道桥，不再是单纯的工程奇迹，它连接着城市的两部分，下面深邃的峡谷如今是悠闲的步行公园（Il Giro dei Condotti），本地人在桥拱下的步道遛狗、慢跑，让这个庞然巨物充满了人间烟火气。在这里，震撼的宏大叙事与细腻的日常生活，毫无间隙地编织在一起。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次看见斯波莱托，是在翁布里亚那如绿色天鹅绒般的丘陵公路上一个转弯后。它不像有些古镇乖巧地趴在山坡上，而是带着一种不容置疑的威严，从山谷中“生长”出来，层层叠叠的赭石色房屋簇拥着塔楼和教堂的尖顶，直抵山顶那座巨大的罗卡城堡。而最夺人眼球的，是横跨在两座青山之间那道巨大的、由无数白色石灰岩拱券组成的“天空之桥”——波恩特 delle Torri 高架渠。那一瞬间，你仿佛看到了古罗马工程师与中世纪建筑师跨越千年的联手，为这座山城戴上了一条最硬核的项链。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在山下，空气立刻不一样了。那是混合了古老石头晒过太阳后的暖意、远处森林飘来的松木香，以及某个小巷深处飘出的新鲜罗勒和慢炖肉酱味道的复杂气息。你开始沿着被无数脚步磨得温润发亮的石板路向上攀爬。脚步声在狭窄的巷弄里回荡，夹杂着上方广场传来的隐隐约约的手风琴声和咖啡馆杯碟的轻碰声。这里的“爬”不是负担，而是一种仪式，你的身体在感受山城的坡度，眼睛在贪婪地捕捉每一个转角可能出现的风景：一扇布满铁锈的百年门环，一丛从石头墙缝里挣扎出来的紫色野花，一个摆满了陶制橄榄油罐和当地绣花亚麻布的小店橱窗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`斯波莱托最动人的，是它活生生的层次感。它不仅仅是一个供人观赏的化石。清晨，主妇们会提着篮子去老集市广场（Piazza del Mercato）采购；午后，老人们在荫凉的石阶上轻声聊天；傍晚，年轻人在大教堂前的台阶上相聚，看着夕阳把对面山上的城堡染成金色。那座令人叹为观止的输水道桥，不再是单纯的工程奇迹，它连接着城市的两部分，下面深邃的峡谷如今是悠闲的步行公园（Il Giro dei Condotti），本地人在桥拱下的步道遛狗、慢跑，让这个庞然巨物充满了人间烟火气。在这里，震撼的宏大叙事与细腻的日常生活，毫无间隙地编织在一起。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯波莱托`} />
                <InfoRow label="英文名称" value={`Spoleto`} />
                <InfoRow label="正式名称" value={`Spoleto`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`斯波莱托`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座层叠了古罗马、伦巴第与文艺复兴精髓的战略山城，曾是重要的伦巴第公国中心。`} />
                <InfoRow label="建筑特色" value={`震撼的古罗马高架输水道桥与山顶城堡、大教堂共同构成错落有致的立体天际线。`} />
                <InfoRow label="建筑风格" value={`融合了古罗马工程、罗马式、哥特式及文艺复兴风格的活态建筑博物馆。`} />
                <InfoRow label="文化价值" value={`“两个世界艺术节”的举办地，体现了艺术与千年历史在古老街巷中的永恒对话。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市本身全天开放。核心景点如斯波莱托大教堂（Duomo di Spoleto）通常为上午8:30至下午7:30（夏季可能延长），冬季可能缩短。罗卡城堡（Rocca Albornoziana）开放时间常为周二至周日上午9:30至晚7:00，具体随季节调整，建议行前查询官网。古罗马剧场（Teatro Romano）等考古区域也有固定开放时段。大部分室内景点周一闭馆。`} />
              <InfoRow label="门票价格" value={`城市漫步免费。进入主要景点需购票：罗卡城堡门票约8欧元；包含古罗马剧场、考古博物馆的联票约10欧元；斯波莱托大教堂免费进入，但地下考古区域或珍宝室可能需小额捐赠。欧盟学生及65岁以上老人通常有优惠，18岁以下青少年常免费。`} />
              <InfoRow label="地址" value={`Piazza della Libertà, 06049 Spoleto PG, Italy`} />
              <InfoRow label="交通方式" value={`从罗马菲乌米奇诺机场（FCO）出发，最便捷方式是乘坐火车。先乘机场快线（Leonardo Express）或区域火车到罗马特米尼火车站（Roma Termini），耗时约30-50分钟。从特米尼站乘坐前往安科纳（Ancona）或福松布罗内（Fossato di Vico）方向的直达区域火车（Regionale），约1.5小时可抵达斯波莱托火车站（Stazione di Spoleto）。班次频繁，约每小时一班，可在意铁官网或车站购票。从火车站到山城中心可搭乘市内小巴（线路A或S），约10分钟，或步行上山，约需25-30分钟，沿途风景渐入佳境。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`斯波莱托的故事，是一部写在石头上的意大利中部编年史。早在公元前3世纪，它已经是强大的翁布里亚人定居点，随后被罗马人征服，被命名为“Spoletium”。罗马人留下了深刻的印记，那令人瞠目的高架输水道桥就是证明。这座建于公元1世纪左右的庞然大物，最初并非为了连接山城，而是为了将远处山泉的水，跨越特西诺山谷，引向北边约10公里外的古罗马城市。它高达80米，全长超过200米，上下两层拱券的结构展现了帝国鼎盛时期无与伦比的工程自信。尽管输水功能早已废弃，但它历经地震与战火依然屹立，成为了这座城市永恒的地标。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马帝国衰落后，斯波莱托因其易守难攻的地形，成了兵家必争之地。公元6世纪，伦巴第人南下，在此建立了强大的斯波莱托公国，其疆域一度覆盖了意大利中部大片地区。山顶上那座气势磅礴的罗卡城堡，虽然我们今天看到的主要是14世纪的样貌，但其地基与战略意义正是始于伦巴第时代。他们看中了这里，把山顶变成了权力中心，也让斯波莱托成为了连接罗马与伦巴第北部王国之间的关键枢纽，在混乱的中世纪早期扮演了至关重要的角色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间跳到14世纪，当时教廷为了重夺对教皇国的控制，派遣西班牙籍的红衣主教阿尔沃诺斯来此重建权威。正是在他的主持下，我们今天看到的罗卡城堡得以在旧址上大规模重建和加固。这座城堡与其说是宫殿，不如说是一座巨大的军事要塞兼行政中心，它的四座高塔和厚重城墙，清晰地宣告着教廷的力量。颇具讽刺意味的是，在接下来的几个世纪里，它也一度沦为令人畏惧的监狱。从权力中心到囚禁之地，城堡的石墙默默见证了历史的轮回与世事的无常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，斯波莱托的灵魂不止于军事与政治。它的心脏在斯波莱托大教堂。这座建于11世纪末、奠基于更古老教堂遗址上的建筑，正面是辉煌的罗马式马赛克立面，描绘着基督为圣母加冕的金色画面，在翁布里亚的阳光下熠熠生辉。内部则意外地轻盈，是罗马式与哥特式的优雅结合。但真正的宝藏在于它的艺术收藏：文艺复兴大师 Filippo Lippi 生命最后的杰作——大教堂半圆后殿的壁画系列。这位曾卷入丑闻的修士画家，在这里找到了最后的宁静与救赎，用尽生命最后的才华描绘了圣母生平，尤其是那幅《圣母加冕》，充满了柔和的情感与绚丽的色彩，与他早年作品风格迥异，仿佛是他艺术与生命的总结陈词。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`正是这种深厚而复杂的历史层次，吸引了20世纪著名的作曲家吉安·卡洛·梅诺蒂。他于1958年在这里创立了“两个世界艺术节”，将音乐、戏剧、舞蹈带入古老的教堂、剧场和广场。自此，每年夏季，古老的石墙内回响着现代的音符，中世纪广场上上演着先锋的戏剧。历史不再是沉默的背景板，而是成为了艺术创作活生生的参与者。斯波莱托就这样，从古罗马的工程师之城，到伦巴第的权力之都，再到文艺复兴的艺术庇护所，最终成为了一个跨越“两个世界”（传统与现代，历史与当代）的文化熔炉，至今仍在呼吸和低语。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受斯波莱托的立体魅力，建议安排一整天的时间，并穿上最舒适的步行鞋。理想的节奏是从“桥”开始，由低向高，最后在山顶以全景收尾。早上9点前抵达最好，能避开旅游团，享受山城苏醒的宁静。首先从火车站或山下停车场，直接前往波恩特 delle Torri 输水道桥，在清晨柔和的光线下欣赏其宏伟，并步行穿过桥下的峡谷公园。然后开始向上探索老城，依次经过古罗马剧场、主教堂广场，中午在老城用餐。下午继续攀登至罗卡城堡，参观内部并享用无敌视野。最后从城堡另一侧的小径缓缓下山，途中可以捕捉夕阳下的城市全景。这样的路线顺应了地理和历史脉络，体验从自然奇观到市井生活，再到军事要塞的完整叙事。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`山城道路多为石板坡道和台阶，务必穿防滑舒适的鞋子，绝对不要尝试高跟鞋或笨重的行李箱拖行。夏季翁布里亚阳光强烈，上午游览输水道桥和峡谷公园时树荫较少，需做好防晒并携带足量饮用水。许多小店和餐厅下午1点到4点之间会关门午休，计划午餐和购物时要注意时间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先来到 Ponte delle Torri 输水道桥的东侧观景台，仰望那排山倒海般的白色拱券在晨光中苏醒，感受峡谷里吹来的清凉微风。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着桥头下方的“Il Giro dei Condotti”步道慢慢行走，从巨大桥墩的脚下仰视这座古罗马工程，听鸟鸣在山谷间回荡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从步道返回，穿过古老的圣彼得罗门（Porta San Pietro），正式进入中世纪老城，顺着 Via del Ponte 蜿蜒而上，让脚步带领你探索那些挂着青铜招牌的手工艺店铺和飘着咖啡香的小巷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在 Piazza del Mercato 老集市广场稍作停留，想象几个世纪以来这里热闹的市集场景，或许在旁边的酒吧点一杯浓缩咖啡，看当地人匆忙的早晨。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要绕到 Piazza della Signoria 广场，看看那有趣的文艺复兴喷泉和周边古老的宫殿建筑群，感受中世纪市政中心的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将斯波莱托大教堂广场（Piazza del Duomo）作为上午的高潮，坐在宽阔的台阶上，正面欣赏那灿烂的马赛克立面，然后进入昏暗凉爽的教堂内部，寻找菲利波·利皮壁画带来的震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大教堂后面继续向上，经过曲折的坡道和阶梯，向着山顶的罗卡城堡做最后的攀登，这段路会提醒你这座山城曾经的防御是多么森严。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终抵达罗卡城堡的城墙之上，360度环绕一圈，将整个翁布里亚绿色山谷、脚下的赭色屋顶和远方的“天空之桥”尽收眼底，这是对一天攀登的最佳奖赏。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`输水道桥全景侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，从斯波莱托老城对面的 Colle Sant‘Elia 山坡小径上拍摄，可以将完整的白色桥体、深绿峡谷与背景的山城、城堡一同纳入画面，构图极具层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大教堂台阶俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，坐在大教堂广场的最高一级台阶上，用广角镜头向下拍摄，可以将广场上的人们、古老的建筑立面以及远处层叠的屋顶和山峦压缩在一张富有故事感的照片里。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城巷弄光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，阳光直射入狭窄的巷子（如 Via di Porta Fuga），在古老的石墙上形成强烈的明暗对比，拍摄一个行人走过光影交界处的背影，能完美捕捉山城的静谧与几何之美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`罗卡城堡窗框取景`}</h4>
                  <p className="text-sm text-gray-700">{`在城堡上层参观时，不要错过那些厚重的石制窗户，它们本身就是完美的画框，将窗外如油画般的翁布里亚田园风光定格，拍摄时注意将窗框的暗部细节也保留下来。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏光镜可以有效增强翁布里亚蔚蓝天空与白云、以及古老石墙色彩之间的对比。在教堂内部拍摄壁画时，务必关闭闪光灯，使用高感光度和大光圈镜头，依靠自然光拍摄，以保护珍贵的艺术品并尊重宗教场所的规定。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心宝石`}</h4>
                  <p className="text-sm text-blue-800">{`住在经过精心修复的15世纪贵族宫殿里，房间有裸露的原始石墙和木梁，早晨推开百叶窗，看到的是教堂的钟楼和一片红色的屋顶，直接融入老城的脉搏。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术节主题民宿`}</h4>
                  <p className="text-sm text-green-800">{`由当地艺术家家庭经营的温馨民宿，装饰充满戏剧和音乐元素，主人能给你讲述很多艺术节的幕后故事，并提供只有本地人才知道的餐饮推荐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山景农庄体验`}</h4>
                  <p className="text-sm text-yellow-800">{`位于斯波莱托周边丘陵上的家庭式农庄，需要短途驾车抵达，但换来的是绝对的宁静、无敌的日落视野、自产的橄榄油和葡萄酒，以及被葡萄园包围的泳池。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`精品设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在老城边缘一座现代建筑内，设计简约而富有格调，完美融合了当代舒适与山城景观，屋顶露台酒吧是傍晚小酌、欣赏城堡亮灯的最佳地点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（尤其是艺术节期间）住宿非常紧俏，价格也最高，务必提前数月预订。如果自驾，预订时一定要确认停车安排，老城内停车位极其有限且昂贵，多数住宿会提供较远的合作停车场。住在老城内虽然体验绝佳，但需做好心理准备，夜晚和清晨可能会听到教堂钟声和巷子里的回声，这是山城魅力的一部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯波莱托时，我的小腿肌肉还清晰地记得那些台阶的坡度，但脑海里盘旋的，不再是某个单一的景点画面，而是一种完整的“攀登感”。这种攀登，不仅是物理上的从山谷到山顶，更是一种穿越时间的漫步。你的手指触摸过的桥墩石块，是古罗马工匠垒砌的；你驻足仰望的教堂壁画，承载着一位文艺复兴大师一生的悲欢；你喘着气最终抵达的城堡城墙，曾凝视过伦巴第骑士与教廷使节的旗帜更迭。这座城市拒绝被扁平化地理解，它要求你用脚步去丈量，用呼吸去适应它的海拔，从而在身体记忆中刻下它的轮廓。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求高效、“打卡”速成的旅行时代，斯波莱托是一种温和而坚定的反驳。它告诉你，真正的抵达需要一点费力，真正的理解需要一些层叠。它不像那些平坦的古城让你轻松漫步，而是设置了一个天然的节奏——攀爬、停留、再攀爬。正是在这个节奏中，你放慢了速度，注意到了墙角的野花，听懂了广场上的方言笑声，感受到了历史不是教科书上的一页，而是脚下每一块被磨亮的石头，是空气中依然飘散的、混合了石头、森林与厨房的复杂气味。它让我们记得，旅行最美的部分，有时不是到达终点看到明信片般的风景，而是通往那里的、气喘吁吁却充满发现的过程。这座山城，是一位沉默而威严的叙事者，等待着愿意聆听漫长故事的旅人。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/urbino-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌尔比诺历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Urbino</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ostuni-the-white-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥斯图尼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ostuni</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mantua" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    曼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">曼托瓦古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mantua</p>
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
