import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯波莱托古城 Spoleto｜罗马剧场与天空城堡交织的千年山城 - 最佳欧洲景点',
  description: '第一眼看到斯波莱托，你会感觉它不是被“建造”出来的，而是从这座长满橄榄树和柏树的翁布里亚山丘里，“生长”出来的。你的旅程从山脚开始，乘坐那段有点咯吱作响的老式登山扶梯，仿佛穿过一条时光隧道。当扶梯尽头的光亮涌来，你发现自己已经站在了一条狭窄的石板巷弄里，空气瞬间变得不同——那是古老石墙在阳光下蒸腾出...',
}

export default function SpoletoHistoricTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯波莱托古城', href: '/attractions/spoleto-historic-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯波莱托古城・Spoleto・意大利・斯波莱托`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到斯波莱托，你会感觉它不是被“建造”出来的，而是从这座长满橄榄树和柏树的翁布里亚山丘里，“生长”出来的。你的旅程从山脚开始，乘坐那段有点咯吱作响的老式登山扶梯，仿佛穿过一条时光隧道。当扶梯尽头的光亮涌来，你发现自己已经站在了一条狭窄的石板巷弄里，空气瞬间变得不同——那是古老石墙在阳光下蒸腾出的微凉气息，混合着从某扇木门后飘出的新鲜咖啡和烤面包的暖香。你的耳边响起的不再是车流声，而是清脆的足音、远处教堂隐约的钟鸣，以及意大利老太太在阳台上晾晒床单时，那快速而充满韵律的交谈声。
这里不是博物馆式的古城，而是一个活生生的、呼吸着的社区。上午十点，主教堂广场旁的露天咖啡馆刚摆好桌椅，银发的老先生们已经开始了他们的每日棋局。杂货店的老板把一筐筐亮晶晶的李子和无花果搬到门口，颜色鲜艳得像文艺复兴时期的静物画。你沿着陡峭的巷子往上走，会经过一个不起眼的小门洞，探身进去，里面竟是一个公元一世纪的罗马民居遗址，马赛克地板上游鱼图案依然清晰。历史在这里不是被封存的展品，它就是邻居家的一面墙，是脚下被磨得光滑如镜的石阶，是转角处突然撞见的一幅褪色湿壁画。
而斯波莱托最摄人心魄的魅力，在于那种垂直的、戏剧性的空间张力。你的视线总是不由自主地被牵引向上：从幽暗蜿蜒的街巷，到突然开阔的广场，再到巍峨矗立于城市之巅的罗卡城堡。那座由教宗建造的庞然大物，用其厚重的石墙和塔楼，为整个古城勾勒出如梦境般的天际线。当你最终穿过古老的石桥，站在城堡的露台上回望，你会发现，整座城市、远处的山谷、无垠的橄榄园，都在你的脚下铺展开来。这是一种奇妙的体验，你既是古城迷宫中的探索者，又是这片千年风景的俯瞰者。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到斯波莱托，你会感觉它不是被“建造”出来的，而是从这座长满橄榄树和柏树的翁布里亚山丘里，“生长”出来的。你的旅程从山脚开始，乘坐那段有点咯吱作响的老式登山扶梯，仿佛穿过一条时光隧道。当扶梯尽头的光亮涌来，你发现自己已经站在了一条狭窄的石板巷弄里，空气瞬间变得不同——那是古老石墙在阳光下蒸腾出的微凉气息，混合着从某扇木门后飘出的新鲜咖啡和烤面包的暖香。你的耳边响起的不再是车流声，而是清脆的足音、远处教堂隐约的钟鸣，以及意大利老太太在阳台上晾晒床单时，那快速而充满韵律的交谈声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是博物馆式的古城，而是一个活生生的、呼吸着的社区。上午十点，主教堂广场旁的露天咖啡馆刚摆好桌椅，银发的老先生们已经开始了他们的每日棋局。杂货店的老板把一筐筐亮晶晶的李子和无花果搬到门口，颜色鲜艳得像文艺复兴时期的静物画。你沿着陡峭的巷子往上走，会经过一个不起眼的小门洞，探身进去，里面竟是一个公元一世纪的罗马民居遗址，马赛克地板上游鱼图案依然清晰。历史在这里不是被封存的展品，它就是邻居家的一面墙，是脚下被磨得光滑如镜的石阶，是转角处突然撞见的一幅褪色湿壁画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而斯波莱托最摄人心魄的魅力，在于那种垂直的、戏剧性的空间张力。你的视线总是不由自主地被牵引向上：从幽暗蜿蜒的街巷，到突然开阔的广场，再到巍峨矗立于城市之巅的罗卡城堡。那座由教宗建造的庞然大物，用其厚重的石墙和塔楼，为整个古城勾勒出如梦境般的天际线。当你最终穿过古老的石桥，站在城堡的露台上回望，你会发现，整座城市、远处的山谷、无垠的橄榄园，都在你的脚下铺展开来。这是一种奇妙的体验，你既是古城迷宫中的探索者，又是这片千年风景的俯瞰者。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯波莱托古城`} />
                <InfoRow label="英文名称" value={`Spoleto`} />
                <InfoRow label="正式名称" value={`The Historic Centre of Spoleto`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`斯波莱托`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座层叠了伊特鲁里亚、罗马、伦巴第、文艺复兴与巴洛克文明的“活态历史教科书”，被誉为“意大利之心”。`} />
                <InfoRow label="建筑特色" value={`罗马帝国的宏伟工程、中世纪山城的防御堡垒与文艺复兴的优雅宫殿，在橄榄树覆盖的山丘上奇迹般地融为一体。`} />
                <InfoRow label="建筑风格" value={`以坚实的罗马式为基础，融合了精致的伦巴第罗马式、哥特式以及后世的巴洛克装饰，形成独特的翁布里亚山城风格。`} />
                <InfoRow label="文化价值" value={`不仅是古迹的集合，更是持续了半个多世纪的“两个世界音乐节”的舞台，古老石头因当代艺术而重获呼吸。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。主要古迹（如罗马剧院、罗卡城堡）开放时间一般为夏季（4月至9月）上午9:30至晚上7:30，冬季（10月至3月）上午10点至下午5点，周一多数闭馆。每年六月下旬至七月中旬因举办“两个世界音乐节”，部分区域开放时间会延长并有调整，具体需查询官网。`} />
              <InfoRow label="门票价格" value={`进入古城本身免费。参观主要景点通常购买联票更划算：“斯波莱托卡”约12欧元，包含罗马剧院考古区、罗卡城堡、市政美术馆等。单买罗马剧院约8欧元，罗卡城堡约9欧元。65岁以上老人及欧盟学生享有折扣，18岁以下儿童通常免费。音乐节期间部分场地需单独购演出票。`} />
              <InfoRow label="地址" value={`Centro Storico, 06049 Spoleto PG, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是罗马菲乌米奇诺机场。从罗马Termini火车站乘坐直达的地区火车前往斯波莱托站，车程约1小时20分钟，班次频繁（每小时约1-2班），可在意铁官网或车站购买车票。到达斯波莱托火车站后，出站即可看到山巅的老城。建议乘坐古老的“机动扶梯”缆车系统，它能将你从山脚直接送到半山腰的老城中心，单程票约1欧元，省力又有趣。若想徒步，沿着清晰指示牌的陡峭小路攀登约20-30分钟也可抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂斯波莱托石头的低语，你得把时钟拨回两千多年前。早在罗马人到来之前，顽强的翁布里亚人和后来的伊特鲁里亚人就已经在这座战略性的山丘上定居。但真正把斯波莱托推向历史前台的，是罗马帝国。公元前三世纪，罗马人在这里建立了一个重要的殖民城市“斯波莱提乌姆”。你今天看到的，那座保存惊人完好的罗马剧院，就是那个辉煌时代的见证。想象一下，公元一世纪，这里坐满了穿着托加袍的市民，舞台上上演着普劳图斯的喜剧，山谷的风将演员的台词传得很远。剧院不远处，是宏伟的凯旋门——德鲁苏斯和日耳曼尼库斯拱门，它纪念着罗马将军的赫赫战功，也标志着通往罗马的弗拉米尼亚大道从这里经过。斯波莱托是罗马北上的重要门户，它的石头地基，牢牢地打下了帝国的烙印。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马的光辉黯淡后，斯波莱托迎来了动荡而传奇的中世纪。它成了伦巴第人建立的斯波莱托公国的首都，这是一个强大到足以与法兰克王国和教宗国掰手腕的势力。这段历史赋予了城市一层坚韧、好斗的军事气质。巍峨的罗卡城堡看似建于十四世纪，但其精神内核正是源自这个需要时刻防御的时期。那时的城市被高大的城墙紧紧包裹，教堂也建得如同堡垒，比如圣彼得教堂外墙上那些复杂而充满力量的浮雕，刻画着怪兽、圣经故事和日常劳作场景，那是伦巴第石匠留给世界的独特密码。每一块石头都在诉说着生存的艰辛与信仰的虔诚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`文艺复兴的春风吹到了这座山城，但它带来的不是佛罗伦萨式的奢华，而是一种属于翁布里亚的、内省而优雅的气质。最杰出的代表就是主教堂广场。大教堂本身是一座建筑编年史：朴素的罗马式立面、华丽的玫瑰窗、内部由 Filippo Lippi 绘制的璀璨穹顶壁画《圣母加冕》——这位文艺复兴大师的一生在此终结，他的灵魂也永远留在了这幅杰作里。广场另一侧，是文艺复兴风格的市政厅和一座优美的喷泉。这个广场成了城市新的心脏，不再是防御的中心，而是市民聚会、庆典和思考美与信仰的沙龙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到近代，斯波莱托一度沉寂，成了被游客匆匆略过的“翁布里亚明珠”。直到1958年，作曲家吉安·卡洛·梅诺蒂独具慧眼，在这里创办了“两个世界音乐节”。这个决定，像一道闪电，激活了古城沉睡的灵魂。从此，每年夏天，罗马剧场的古老石阶上坐满了聆听歌剧的观众，中世纪的教堂里回荡着先锋的弦乐四重奏，城堡的庭院变成了现代舞的舞台。古老的石材与最前沿的艺术产生了不可思议的化学反应。斯波莱托不再仅仅是一个过去式的名词，它成了一个进行时的动词，一个让历史与当代持续对话的永恒舞台。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你拿出完整的一天，像剥洋葱一样层层深入地体验斯波莱托。最好的抵达时间是清晨九点前，那时旅游大巴还未抵达，阳光柔和，古城刚刚苏醒。整体游览节奏应该是“慢爬-沉浸-登顶-回味”。先从山脚乘扶梯进入老城核心，用上午的三到四小时穿梭在中世纪街巷，探访地面的罗马遗迹和主教堂。中午在广场旁享用漫长的午餐。下午的重点是挑战“登顶”，徒步走过那座惊人的 Ponte delle Torri 高架渠桥，前往雄踞山巅的罗卡城堡，并在城堡俯瞰全景。傍晚时分，沿着更安静的小路下山，感受夕阳为古城披上的金色外衣。这样的安排顺应了山城的地理节奏，也完美结合了文化探索与视觉震撼。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、防滑的鞋，这里的路几乎全是凹凸不平的石板和陡峭的台阶，高跟鞋是灾难。夏季午后阳光非常猛烈，城堡区域缺乏遮荫，务必戴帽子和准备充足饮水。如果体力有限，可以从城堡乘坐出租车下山回到老城中心，告诉司机“Piazza della Libertà”即可。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从火车站出来，直接去寻找那座通往山城的古老机动扶梯入口，让它像魔法电梯般将你送入中世纪的心脏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出扶梯站首先融入早市氛围，在 Piazza del Mercato 广场看看当地人如何购买新鲜奶酪和熏肉，感受古城的烟火气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着 Via dell‘Arringo 缓坡向上，不经意间在左手边发现下沉的罗马剧院遗址，沿着石阶走下去触摸冰凉的两千年前的观众席。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让主教堂广场的震撼第一次冲击你，先不急于进去，坐在对面咖啡馆外看看教堂立面上那颗巨大的玫瑰窗如何吸收晨光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入大教堂直奔后殿，仰头沉浸在那幅巨大而绚烂的 Filippo Lippi 壁画《圣母加冕》之下，寻找画家与诗人儿子的自画像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧面的小巷开始一段轻度攀爬，穿过圣尤菲米亚教堂那异常高耸简朴的伦巴第罗马式中殿，感受中世纪的精神力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气踏上那座令人心跳加速的 Ponte delle Torri 十拱高架渠桥，走过这长达230米、高80米的空中走廊，前往最后的堡垒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`征服罗卡城堡，在其宽阔的城墙和塔楼上随意行走，从各个角度俯瞰整个斯波莱托城和翁布里亚绿色山谷的全景画卷。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`罗马剧院上层平台侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光最适合，站在剧院上层回廊，以部分古老的石拱门作为画框，框住下层完整的扇形观众席和远处的山峦。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主教堂玫瑰窗特写与广场生活结合`}</h4>
                  <p className="text-sm text-gray-700">{`清晨九点前或下午五点后，阳光斜射在教堂立面时，使用长焦镜头压缩空间，将发光的玫瑰窗与广场上正在读报的老人或嬉戏的孩童一同纳入画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Ponte delle Torri 高架渠桥的仰视与透视`}</h4>
                  <p className="text-sm text-gray-700">{`从靠近城堡一端的桥下小路仰拍，上午光线最佳，利用桥体巨大的石拱形成强烈的透视引导线，人物可以小小地站在桥头，突出建筑的恢弘与人类的渺小。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`罗卡城堡西北角塔楼俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`日落前黄金一小时，登上城堡最西北角的塔楼，将你的镜头越过雄堞，对准山下如模型般铺展的整个老城屋顶、主教堂的钟楼以及更远处无尽的橄榄园，层次感无敌。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷中的光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午当阳光垂直射入狭窄巷弄时，去寻找那些有藤蔓、老旧木门和鲜花盆栽的角落，捕捉光线在石墙上切割出的明暗几何图案与生动的局部细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄教堂内部壁画前务必确认是否允许（主教堂的 Lippi 壁画允许非闪光灯拍摄）。使用无人机在意大利历史中心上空飞行有严格限制，通常被禁止，请勿尝试。当地人非常友善，拍摄街头人文场景时，一个微笑和简单的手势征求同意，往往会换来更生动的表情。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在主教堂广场旁一栋经过精心修复的十五世纪贵族宫殿里，房间有着原始的石头墙壁和木梁天花板，夜晚听着广场的钟声入睡，清晨在私人小阳台上独占无人的广场美景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术家氛围民宿`}</h4>
                  <p className="text-sm text-green-800">{`由当地画家家庭经营的温馨民宿，位于宁静的古老街区，每个房间装饰着主人的原创油画，早餐是 homemade 的蛋糕和自家农场的橄榄油，能听到最地道的音乐节故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计型修道院改造酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在稍僻静山坡上的前修道院建筑，将极简现代设计与古老的拱廊、回廊完美结合，拥有一个可游泳并俯瞰山谷的绝美 infinity 泳池，是古典与现代碰撞的静谧天堂。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`乡村庄园体验`}</h4>
                  <p className="text-sm text-purple-800">{`位于斯波莱托城外几公里处橄榄园中的 agriturismo（农家乐），住进古老的石头农舍，品尝全部自产的晚餐，在无光污染的夜空下看到银河，享受真正的翁布里亚乡村宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿多为历史建筑，可能没有电梯，行李搬运会是个小挑战，但位置无与伦比。如果自驾，务必确认酒店是否有停车场（通常需额外付费且位置有限）。音乐节期间（六七月）的住宿非常紧张，价格也会飙升，必须提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯波莱托的时候，我背包里沉甸甸的，不是买了多少纪念品，而是装满了那些具体的、细碎的感官记忆：手指拂过罗马剧院石栏的粗糙触感，高架渠桥上吹过耳畔的、带着柏树清香的山风，午后小巷里突然飘来的某户人家炖肉的浓郁香气，还有落日时分，整个山谷从翠绿变成金绿，再染上一抹葡萄酒般玫红色的那个漫长瞬间。这座山城教会我的，是一种“垂直”的旅行哲学——它不仅仅是在地图上平面的移动，更是向下挖掘时间的层理，向上攀登视野的极限，向内探索一座城市生生不息的灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求“快”和“新”的世界里，斯波莱托的存在，像一首缓慢而庄严的复调音乐。它的低音部是伊特鲁里亚的基石、罗马的拱廊、中世纪的祷歌，坚实而深邃。它的高音部，则是音乐节上前卫的乐章、咖啡馆里年轻人的笑语、艺术家工作室里敲打金属的叮当声，明亮而充满活力。两者交织在一起，奏响的不是关于过去的挽歌，而是关于持续生长的赞歌。它让你相信，历史不是沉重的负担，而是可以与之共舞、与之对话、并从中汲取无尽创造力的源泉。如果你厌倦了那些被游客脚步磨平了的景点，渴望一场既能触摸千年石头，又能听见当代心跳的旅行，那么，请一定来斯波莱托。它会用一整座山城的层次，丰富你对“深度”二字的全部理解。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
