import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥提伽岛 Ortigia｜锡拉库萨的历史心脏，阿基米德故乡与巴洛克水岸古城 - 最佳欧洲景点',
  description: '第一眼看到奥提伽岛，你会以为踏进了一幅被阳光和海盐浸透了的油画。连接主岛的那座小桥像是时空隧道，这边还是寻常的意大利现代街景，几步之外，时间骤然放缓。空气立刻变得不同——咸湿的海风里混杂着晾晒床单的肥皂味、某扇虚掩的门后飘出的浓郁番茄酱香气，以及老石头被正午太阳烘烤后散发出的、略带尘土味的暖意。耳边...',
}

export default function OrtigiaHistoricHeartSyracuseSicilyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '奥提伽岛', href: '/attractions/ortigia-historic-heart-syracuse-sicily' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥提伽岛・Ortigia・意大利・锡拉库萨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到奥提伽岛，你会以为踏进了一幅被阳光和海盐浸透了的油画。连接主岛的那座小桥像是时空隧道，这边还是寻常的意大利现代街景，几步之外，时间骤然放缓。空气立刻变得不同——咸湿的海风里混杂着晾晒床单的肥皂味、某扇虚掩的门后飘出的浓郁番茄酱香气，以及老石头被正午太阳烘烤后散发出的、略带尘土味的暖意。耳边是三重奏：摩托车引擎在窄巷里沉闷的回响，咖啡馆外杯碟碰撞的清脆声音，以及无处不在的、海浪轻轻拍打古老防波堤的舒缓节拍。
这里不是一座死气沉沉的博物馆，而是一个依然强劲跳动的心脏。清晨，本地主妇们会推着小车，在有着两千年历史的“戴奥尼夏之耳”洞穴附近的露天市集，用手指捏捏番茄的软硬，用西西里方言和鱼贩讨价还价。那些巴洛克立面的阳台上，总晾着五彩的衣衫，像一面面生活的旗帜。你突然明白，奥提伽的魅力不在于某个孤立的景点，而在于这种穿越了二十七個世纪依然鲜活如初的“生活层理感”。历史在这里不是教科书上的章节，而是你脚下被磨得光滑如镜的石灰岩台阶，是墙角一丛从石缝里挣扎盛放的红色天竺葵，是巷子尽头那一抹永远蔚蓝得耀眼的地中海。
最打动人的，或许是光影的游戏。下午四点左右，当阳光斜斜地切过迷宫般的街道，整座岛便成了一个巨大的光影剧场。金色的光线将巴洛克教堂涡卷装饰的阴影拉得老长，投射在蜜糖色的墙壁上。你随便拐进一条小巷，都可能邂逅一束光，正好照亮一户人家门口彩色的圣母瓷像，或是角落一个生锈但插满了鲜花的铁皮桶。这种温暖、慵懒而又充满神性的光线，仿佛能溶解所有焦虑，让人情不自禁地放慢脚步，就想坐在某级台阶上，看光移影动，直到夕阳把整个港口染成金红色。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到奥提伽岛，你会以为踏进了一幅被阳光和海盐浸透了的油画。连接主岛的那座小桥像是时空隧道，这边还是寻常的意大利现代街景，几步之外，时间骤然放缓。空气立刻变得不同——咸湿的海风里混杂着晾晒床单的肥皂味、某扇虚掩的门后飘出的浓郁番茄酱香气，以及老石头被正午太阳烘烤后散发出的、略带尘土味的暖意。耳边是三重奏：摩托车引擎在窄巷里沉闷的回响，咖啡馆外杯碟碰撞的清脆声音，以及无处不在的、海浪轻轻拍打古老防波堤的舒缓节拍。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是一座死气沉沉的博物馆，而是一个依然强劲跳动的心脏。清晨，本地主妇们会推着小车，在有着两千年历史的“戴奥尼夏之耳”洞穴附近的露天市集，用手指捏捏番茄的软硬，用西西里方言和鱼贩讨价还价。那些巴洛克立面的阳台上，总晾着五彩的衣衫，像一面面生活的旗帜。你突然明白，奥提伽的魅力不在于某个孤立的景点，而在于这种穿越了二十七個世纪依然鲜活如初的“生活层理感”。历史在这里不是教科书上的章节，而是你脚下被磨得光滑如镜的石灰岩台阶，是墙角一丛从石缝里挣扎盛放的红色天竺葵，是巷子尽头那一抹永远蔚蓝得耀眼的地中海。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是光影的游戏。下午四点左右，当阳光斜斜地切过迷宫般的街道，整座岛便成了一个巨大的光影剧场。金色的光线将巴洛克教堂涡卷装饰的阴影拉得老长，投射在蜜糖色的墙壁上。你随便拐进一条小巷，都可能邂逅一束光，正好照亮一户人家门口彩色的圣母瓷像，或是角落一个生锈但插满了鲜花的铁皮桶。这种温暖、慵懒而又充满神性的光线，仿佛能溶解所有焦虑，让人情不自禁地放慢脚步，就想坐在某级台阶上，看光移影动，直到夕阳把整个港口染成金红色。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥提伽岛`} />
                <InfoRow label="英文名称" value={`Ortigia`} />
                <InfoRow label="正式名称" value={`Ortigia Island`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`锡拉库萨`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`西西里岛东南海岸的文明摇篮，古希腊时代地中海最强大辉煌的城邦之一锡拉库萨的核心发源地。`} />
                <InfoRow label="建筑特色" value={`石灰岩与熔岩石交织的街巷，矗立着历经希腊神殿、诺曼教堂到巴洛克立面层层叠加的“建筑活化石”。`} />
                <InfoRow label="建筑风格" value={`以辉煌的西西里巴洛克风格为主导，底层融合了古希腊、古罗马、拜占庭、阿拉伯与诺曼等多种文明的建筑痕迹。`} />
                <InfoRow label="文化价值" value={`一座微缩的地中海文明史博物馆，见证了从希腊殖民、罗马征服、拜占庭统治到巴洛克复兴的完整叙事，同时是科学与人文精神鼻祖阿基米德的故乡。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`奥提伽岛作为开放的历史街区，全天可进入。岛上的主要景点如锡拉库萨主教座堂（Duomo di Siracusa）开放时间通常为上午9:00至下午7:00，冬季可能缩短至下午5:00。马尼亚切城堡（Castello Maniace）开放时间较为有限，通常为周二至周日上午9:00至下午1:30。阿雷图萨泉水池（Fonte Aretusa）为开放式公园。所有室内景点在1月1日、12月25日及部分宗教节日关闭，建议出发前再次确认具体日期。`} />
              <InfoRow label="门票价格" value={`进入奥提伽岛本身免费。各景点单独收费：锡拉库萨主教座堂门票约2欧元。马尼亚切城堡门票约4欧元。考古公园（Parco Archeologico）联票（包含岛上部分遗址）约10欧元。欧盟18-25岁公民及教师有优惠票，18岁以下及65岁以上欧盟公民通常免费。部分教堂在弥撒期间免费进入但不能游览。`} />
              <InfoRow label="地址" value={`Isola di Ortigia, 96100 Siracusa SR, Italy`} />
              <InfoRow label="交通方式" value={`从卡塔尼亚丰塔纳罗沙机场（CTA）出发是最佳选择。抵达后，可在机场出口乘坐每小时一班的Interbus大巴直达锡拉库萨，车程约1小时15分钟，票价约6欧元。大巴终点站通常在锡拉库萨火车站（Stazione Siracusa）或附近的科尔特·比阿斯切广场（Piazza della Corte Biscia）。从火车站步行穿过那座短短的阿梅德奥桥（Ponte Umbertino）就踏上了奥提伽岛，约10-15分钟。如果自驾，可将车停在岛外的大型停车场（如Talete停车场），岛上街道狭窄且多为ZTL交通限制区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起奥提伽的故事，得从将近三千年前讲起。公元前734年，一群来自科林斯的希腊冒险家驾船登陆这座小岛，他们看中了它天然的良港和易守难攻的地形。很快，一座名为锡拉库萨的城邦在这里崛起，它迅猛发展，甚至超越了母邦科林斯，成为地中海世界财富与强权的象征。岛上的阿波罗神庙遗址，那些巨大的石柱墩座，至今还在默默诉说着古希腊时期的雄心。而真正让锡拉库萨（奥提伽是其核心）名垂青史的，是那个我们在数学课本里都熟悉的名字——阿基米德。他就出生并生活在这座岛上，据说曾在港口边的作坊里，对着阳光反射敌人战船，用他的杠杆与浮力原理守护家园。想象一下，就在这些如今停泊着彩色小渔船的岸边，曾回荡着这位伟大天才思考宇宙规律的喃喃自语。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，强盛招致了罗马的觊觎。经过惨烈的围城战，公元前212年，锡拉库萨最终陷落。传说城破之时，一位罗马士兵找到了正在沙地上演算几何图形的阿基米德，老人只说了一句“不要弄坏我的圆”，便倒在了剑下。罗马人的统治带来了新的建筑，他们甚至将雄伟的雅典娜神庙改建成了罗马风格的建筑，但其核心结构被奇迹般地保留了下来。随后的岁月里，奥提伽像一块文明磁石，先后迎来了拜占庭人、阿拉伯人和诺曼人。每一位统治者都在岛上留下了印记：拜占庭人带来了马赛克艺术和对圣徒的狂热；阿拉伯人引入了柑橘种植和精巧的灌溉技术；诺曼人则用坚固的城堡和教堂重新塑造了天际线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的重击在1693年到来，一场毁灭性的地震几乎将整个西西里东南部夷为平地。奥提伽岛也遭受重创，但这场灾难却意外地催生了它的重生。灾后，岛上掀起了一股巴洛克建筑的热潮，这是一种充满戏剧性、动感和繁复装饰的风格。天才建筑师们没有简单地推倒重来，他们像最高明的修补匠，将古老的希腊石柱、诺曼墙壁都巧妙地纳入了新的设计中。于是，你看到了今天的主教座堂——它正面是令人眼花缭乱的波浪形巴洛克立面，但侧面的墙体里，赫然嵌着一排属于古希腊雅典娜神庙的巨型石柱。这不是破坏，而是一种极致的尊重与对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`步入近代，奥提伽一度沉寂，略显破败，成了安静的渔港和老居民区。直到人们重新认识到它无与伦比的历史层积价值，细致的修复工作让它在21世纪重新焕发光彩。如今漫步岛上，你触摸的每一块石头，都可能叠合着希腊的理性、罗马的权势、拜占庭的神秘、阿拉伯的智慧、诺曼的刚毅和巴洛克的激情。它不是一个定格在某个时代的标本，而是一部用石头写就的、依然在呼吸的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味奥提伽，请务必留出完整的一天。建议在清晨八点半左右抵达，这时旅游大巴还未涌入，阳光柔和，本地生活刚刚苏醒，是感受古城气息的黄金时间。整体游览节奏宜慢不宜快，以“迷失”在巷弄中为乐趣。路线可以从连接主岛的桥头开始，顺时针环绕海岛一周，这样既能涵盖所有核心景点，又能始终让迷人的海景相伴。中午可在市集或海边午餐，下午则专注于建筑内部和博物馆，傍晚时分一定要留给美丽的港口夕阳。这样的安排顺应了光线的变化，也契合了从外部宏观感受到内部深度探索的自然节奏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`岛上很多小巷路面是古老的石板或鹅卵石，请务必穿一双绝对舒适防滑的鞋子，高跟鞋在这里是“灾难级”选择。
中午至下午三点阳光非常炽烈，且有些小巷没有遮阴，务必准备好帽子、太阳镜和充足的水分。
如果看到有当地人热情邀请你去某家“亲戚的餐厅”，最好礼貌婉拒，坚持自己选择；在港口边就餐时，若无明确标价，点餐前务必问清海鲜的时价。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从连接大陆的翁贝托桥踏上岛屿，第一站先去清晨的潘卡利市集，淹没在柠檬、章鱼和腌橄榄混合的热烈气息与摊贩洪亮的叫卖声中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过市集后右转，去探访那处幽静的阿雷图萨泉水池，看纸莎草在水中摇曳，寻找那只传说中的美丽水仙化身的踪迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着海滨大道漫步，让地中海的蓝填满视野，一直走到岛屿最南端坚固的马尼亚切城堡脚下，感受海风与历史的凛冽。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折回古城中心，在正午阳光最盛时站在锡拉库萨主教座堂广场前，仰视那震撼的巴洛克立面，然后走进教堂内部，亲手触摸那些从古希腊神庙保留至今的巨型石柱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教堂阴影下的某家咖啡馆稍作休息，点一份冰凉的石榴汁或浓缩咖啡，看广场上的人群像潮水般聚散。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后钻入主教座堂后方迷宫般的巷弄，任由自己迷失，在每一个安静的转角邂逅一个巴洛克阳台、一个摆满鲜花的隐秘庭院或一家古老的手工纸店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕到岛屿的东侧，在“戴奥尼夏之耳”那个形似耳朵的巨大石灰岩洞穴前停留，试着低声说句话，听听传说中暴君用来监听囚犯的洞穴是否有神奇的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，一定要回到面朝主港的滨水区，找一家餐厅的露天座位，点上一杯西西里白葡萄酒，静静等待夕阳将古老的建筑立面、渔船桅杆和整个海面点燃成一片辉煌的金红。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主教座堂立面与广场`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光会从侧面照亮主教堂的巴洛克立面，此时站在广场偏东南角，可以同时拍到教堂精美的门饰、台阶上的人群和澄澈的蓝天，充满生活与神圣的交融感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`阿雷图萨泉水池的纸莎草从`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，阳光角度较低时，蹲在水池的东侧边缘，以低机位拍摄，能让翠绿的纸莎草、悠游的肥天鹅与后方古老的石墙、巴洛克风格的屋顶形成绝佳的层次构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`马尼亚切城堡海滨步道`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，从城堡外侧的滨海步道向西拍摄，可以将城堡雄浑的剪影、被落日染成金红色的海面、以及远处奥提伽岛层层叠叠的建筑轮廓全部纳入镜头，场面恢弘。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`迷宫巷弄中的光影`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光穿透狭窄巷道上空时，寻找那些有悬挂的衣物、彩色木门或鲜花盆栽的角落，拍摄光束照亮这些生活元素的瞬间，照片会充满故事性和温度。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前，务必查清当地法规，许多历史区域严禁无人机飞行，以免招致高额罚款。`}</li>
                <li>• {`拍摄当地居民，尤其是老人或在自家门口劳作的人时，请务必先微笑示意，获得对方默许，这是基本的尊重。许多西西里人热情但也重视隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在岛上中心一栋经过精心修复的17世纪巴洛克宫殿里，房间有原始的壁画天花板和可以俯瞰内部庭院的铁艺阳台，夜晚安静得只能听到远处海浪声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计风尚之选`}</h4>
                  <p className="text-sm text-green-800">{`由古老修道院改建的精品酒店，现代极简设计巧妙地融入石拱和穹顶之中，屋顶露台拥有360度无敌海景，早餐是自家制作的新鲜瑞考塔奶酪蛋糕。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`亲民温馨之选`}</h4>
                  <p className="text-sm text-yellow-800">{`家庭经营的B&B，位于一条安静的巷子里，房间不大但一尘不染，老板娘每天早晨会为你准备一桌丰盛的西西里早餐，并热情地分享只有本地人才知道的小餐馆名单。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华避世之选`}</h4>
                  <p className="text-sm text-purple-800">{`岛屿最东端独享一片私家海岸线的五星级酒店，每间套房都带有面朝地中海的露台或花园，配有私人管家，可以安排乘船从海上欣赏奥提伽的独特行程。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`奥提伽岛上的住宿非常紧俏，尤其是在夏季（6-9月）和各种节日期间，务必提前至少2-3个月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择住宿时请注意，虽然岛上治安总体很好，但过于偏僻、灯光昏暗的小巷深处的住所，深夜独自返回时可能令人不安，尽量选择主要巷道附近的房源。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多古老建筑的酒店没有电梯，如果携带大型行李或行动不便，预订时一定要确认这一点。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥提伽的时候，你带走的可能不是某张明信片般的标准风景照，而是一种复杂的、难以言喻的充实感。你会记得海风的味道，记得石头的温度，记得那位在集市上硬塞给你一颗无花果尝尝的婆婆的笑容。这座岛教会你的，是一种关于时间与存在的不同理解。它告诉你，文明不是一场你死我活的替代，而可以是一次次充满智慧的叠加与共生。希腊的柱子支撑着基督教的穹顶，阿拉伯的庭院里开着诺曼式的窗，巴洛克的浮华装饰下，是远古巨石沉默的根基。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求崭新、快速和单一效率的世界里，奥提伽像一位充满智慧的古老灵魂，静静地展示着另一种可能：缓慢、层叠、包容且充满韧性。它不拒绝现代生活——这里有Wi-Fi，有咖啡机，有年轻的艺术家工作室——但它让这一切都发生在一条流淌了三千年的文明之河里。对于每一位真正的深度旅行者而言，奥提伽不仅仅是一个目的地，它是一个启示。它让我们在漫步中思考，什么才是真正值得留存的价值；它让我们在触摸那些冰冷石头时，反而感到内心被一种深厚的历史温度所慰藉。来这里，不是为了打卡，而是为了让自己也成为一个故事的一部分，一个关于地中海、关于人类、关于光与盐、关于不朽与日常的，宏大又细腻的故事的一部分。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pienza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮恩扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pienza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cortona-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔托纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cortona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/amelia-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿梅利亚古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amelia Old Town</p>
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
