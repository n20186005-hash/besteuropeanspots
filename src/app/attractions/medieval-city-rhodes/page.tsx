import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '罗德岛老城（骑士街） Medieval City of Rhodes｜漫步在圣约翰骑士团的时光长廊，触碰欧洲最完整的中世纪古城脉搏 - 最佳欧洲景点',
  description: '当你从海门或自由门踏入罗德岛老城的那一刻，时光的阀门仿佛被“嘎吱”一声推开。最先迎接你的不是视觉，而是声音和气味——你的皮鞋或凉鞋踩在巨大鹅卵石铺就的路面上，发出清脆或沉闷的声响，间或夹杂着远处传来的马蹄声（没错，城里还有观光马车）。空气里混合着海风淡淡的咸味、从隐秘庭院飘出的九重葛花香、以及某家小...',
}

export default function MedievalCityRhodesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '罗德岛老城（骑士街）', href: '/attractions/medieval-city-rhodes' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`罗德岛老城（骑士街）・Rhodes Old Town (Street of the Knights)・希腊・罗德市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从海门或自由门踏入罗德岛老城的那一刻，时光的阀门仿佛被“嘎吱”一声推开。最先迎接你的不是视觉，而是声音和气味——你的皮鞋或凉鞋踩在巨大鹅卵石铺就的路面上，发出清脆或沉闷的声响，间或夹杂着远处传来的马蹄声（没错，城里还有观光马车）。空气里混合着海风淡淡的咸味、从隐秘庭院飘出的九重葛花香、以及某家小咖啡馆正在研磨的浓烈咖啡香。阳光被高耸的石墙切割，投下锋利而清凉的阴影，你一下子就从爱琴海明媚的度假模式，跌入了一个深沉、坚固、充满故事的中世纪迷宫。
而骑士街，就是这条迷宫中最笔直、最庄严的一条主动脉。它不像其他蜿蜒小巷那样充满意外，而是一种不容置疑的、通向权力的肃穆。街道两旁的建筑高大而冷峻，用当地的沙色石材砌成，每一座门楣上都雕刻着不同的纹章——十字架、狮子、百合花。你仿佛能看到身披斗篷的骑士们，按着他们所属的“语言”（即地域分支），从这些门后走出，铠甲摩擦发出金属的轻响，沿着这条上坡路走向山顶的大导师宫殿。那种秩序感和力量感，即使在今天空无一人的午后，也依然凝结在空气里，让你不由自主地压低声音，放慢脚步。
但老城的魔力远不止于骑士的荣光。就在离这条庄严街道几步之遥的小巷里，生活正以最鲜活的方式绽放。居民家的阳台上晾晒着彩色的床单，在微风里像帆一样鼓动。小餐馆把桌椅摆到狭窄的过道上，烤章鱼的香气诱人犯罪。猫咪在古老的奥斯曼式喷泉边慵懒地舔着爪子。这种强烈的对比与共生——军事的严谨与市井的烟火，基督教的堡垒与伊斯兰的圆顶，石头冰冷的永恒与人居温暖的当下——正是罗德岛老城最打动人心的核心。它不是一个被圈起来仅供瞻仰的遗址，而是一个仍然在呼吸、在心跳的有机体。
走在这里，你触摸的每一块石头都可能听过祈祷、战吼、商贩的叫卖和恋人的私语。你会明白，真正的历史不是教科书上枯燥的章节，而是阳光投射在古老纹章上的光影变化，是海风穿过石拱门时发出的那声悠长叹息，是当你坐在小广场上，看着当地老人在下棋，而身后就是一座600年前的骑士团客栈时，内心涌起的那份奇妙的宁静与连接感。这里是时光的胶囊，封存了传奇，却也从未停止酿造新的故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从海门或自由门踏入罗德岛老城的那一刻，时光的阀门仿佛被“嘎吱”一声推开。最先迎接你的不是视觉，而是声音和气味——你的皮鞋或凉鞋踩在巨大鹅卵石铺就的路面上，发出清脆或沉闷的声响，间或夹杂着远处传来的马蹄声（没错，城里还有观光马车）。空气里混合着海风淡淡的咸味、从隐秘庭院飘出的九重葛花香、以及某家小咖啡馆正在研磨的浓烈咖啡香。阳光被高耸的石墙切割，投下锋利而清凉的阴影，你一下子就从爱琴海明媚的度假模式，跌入了一个深沉、坚固、充满故事的中世纪迷宫。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而骑士街，就是这条迷宫中最笔直、最庄严的一条主动脉。它不像其他蜿蜒小巷那样充满意外，而是一种不容置疑的、通向权力的肃穆。街道两旁的建筑高大而冷峻，用当地的沙色石材砌成，每一座门楣上都雕刻着不同的纹章——十字架、狮子、百合花。你仿佛能看到身披斗篷的骑士们，按着他们所属的“语言”（即地域分支），从这些门后走出，铠甲摩擦发出金属的轻响，沿着这条上坡路走向山顶的大导师宫殿。那种秩序感和力量感，即使在今天空无一人的午后，也依然凝结在空气里，让你不由自主地压低声音，放慢脚步。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但老城的魔力远不止于骑士的荣光。就在离这条庄严街道几步之遥的小巷里，生活正以最鲜活的方式绽放。居民家的阳台上晾晒着彩色的床单，在微风里像帆一样鼓动。小餐馆把桌椅摆到狭窄的过道上，烤章鱼的香气诱人犯罪。猫咪在古老的奥斯曼式喷泉边慵懒地舔着爪子。这种强烈的对比与共生——军事的严谨与市井的烟火，基督教的堡垒与伊斯兰的圆顶，石头冰冷的永恒与人居温暖的当下——正是罗德岛老城最打动人心的核心。它不是一个被圈起来仅供瞻仰的遗址，而是一个仍然在呼吸、在心跳的有机体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在这里，你触摸的每一块石头都可能听过祈祷、战吼、商贩的叫卖和恋人的私语。你会明白，真正的历史不是教科书上枯燥的章节，而是阳光投射在古老纹章上的光影变化，是海风穿过石拱门时发出的那声悠长叹息，是当你坐在小广场上，看着当地老人在下棋，而身后就是一座600年前的骑士团客栈时，内心涌起的那份奇妙的宁静与连接感。这里是时光的胶囊，封存了传奇，却也从未停止酿造新的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`罗德岛老城（骑士街）`} />
                <InfoRow label="英文名称" value={`Rhodes Old Town (Street of the Knights)`} />
                <InfoRow label="正式名称" value={`Medieval City of Rhodes`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`罗德市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为圣约翰骑士团在东地中海最强大的堡垒，它是十字军东征、中世纪骑士精神与奥斯曼帝国征服史诗的交汇点与见证者。`} />
                <InfoRow label="建筑特色" value={`宏伟的城墙与塔楼包裹着迷宫般的街道，哥特式宫殿与奥斯曼时期的清真寺、喷泉和谐共存，构成一幅立体的历史层叠画卷。`} />
                <InfoRow label="建筑风格" value={`以中世纪晚期军事哥特式风格为主，完美融合了拜占庭、奥斯曼土耳其以及后来意大利统治时期的建筑元素。`} />
                <InfoRow label="文化价值" value={`它不是一个僵化的博物馆，而是一个至今仍有约6000居民在其中生活的、活生生的“历史层叠”城市，是欧洲现存最完整的中世纪城镇典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天24小时开放。内部主要景点如大导师宫殿（Palace of the Grand Master）开放时间通常为夏季（4月至10月）上午8:00至晚上8:00，冬季（11月至3月）上午8:30至下午3:30，周二闭馆。其他小博物馆和教堂开放时间各异，建议行前再次确认。注意希腊的许多景点在节假日（如复活节、圣诞节）可能缩短开放时间或关闭。`} />
              <InfoRow label="门票价格" value={`进入罗德岛老城本身免费。参观内部景点需单独购票。大导师宫殿与考古博物馆的联票约为12欧元。学生、65岁以上欧盟公民享有半价优惠。欧盟学生及18岁以下青少年在特定条件下免费。每年有几个免费开放日（如每年的9月最后一个周末）。建议购买联票，性价比更高。`} />
              <InfoRow label="地址" value={`Medieval City of Rhodes, Rhodes Town 851 00, Greece`} />
              <InfoRow label="交通方式" value={`最近的机场是罗德迪亚戈拉斯国际机场（RHO），距离老城约16公里。从机场出发：最经济的方式是乘坐公共巴士，出航站楼即可找到前往罗德市（Rhodes Town）的巴士站，车程约40-50分钟，终点站“新市场”（Nea Agora）距离老城入口仅5分钟步行路程。班次频率约为每30-60分钟一班，具体时间表随季节变化。出租车费用固定，约25-30欧元，车程25分钟。若从雅典乘渡轮抵达罗德岛，港口就在老城墙脚下，步行即可进入。老城内所有区域均为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`罗德岛老城的故事，是一部关于信仰、权力与生存的史诗，而骑士团的到来是其中最浓墨重彩的篇章。早在公元前，这里就有了著名的林佐斯卫城，但让我们快进到公元1309年。那一年，被从耶路撒冷和塞浦路斯一路“驱逐”的圣约翰骑士团（又称医院骑士团），用一笔交易获得了罗德岛作为他们的新家园。这些出身欧洲贵族的骑士们，不仅是虔诚的修士、专业的战士，更是顶级的工程师和战略家。他们登岛后做的第一件事，就是着手将拜占庭时期已有的防御工事，打造成当时世界上最令人望而生畏的堡垒体系。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的两个世纪，是罗德岛的“骑士时代”。他们按照出身地域分为七个“语言”（如法国、英格兰、意大利等），每个“语言”负责防守一段城墙，并在城内建造了宏伟的“客栈”作为总部和招待所——这就是骑士街两旁那些宏伟建筑的由来。山顶上，他们扩建了拜占庭堡垒，建成了宏伟的大导师宫殿。罗德岛成为了东地中海基督教世界最坚固的盾牌，一个集军事、政治、贸易于一体的强大城邦，抵御了无数次穆斯林的袭击。骑士团的统治严厉而高效，但他们也带来了西方的医疗知识、建筑技术和文化，与岛上原有的希腊东正教文化形成了复杂的融合。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，最严峻的考验在1522年来临。奥斯曼帝国苏丹苏莱曼大帝，率领一支超过十万人的庞大军队和数百艘战舰，将罗德岛围得水泄不通。这场围城战持续了惊人的六个月。城内仅有的7000名骑士和士兵，在传奇的大导师菲利普·维利耶·德·利尔·亚当的带领下，进行了堪称悲壮的抵抗。他们利用先进的棱堡城墙设计，让奥斯曼军队付出了惨重代价。关于这段历史，你至今能在城墙上看到那次惨烈围攻留下的炮弹痕迹。最终，因弹尽粮绝，骑士团获得了体面投降的条款，于1523年元旦乘船离开了他们守护了213年的岛屿。他们的离去，标志着一个时代的终结。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`骑士团走后，奥斯曼土耳其人成了这里的新主人。历史在这里发生了奇妙的“层叠”。基督教教堂被加建了敏拜尔（讲经台）和米哈拉布（祈祷龛），变成了清真寺，比如著名的苏莱曼清真寺。新的建筑元素出现了：公共浴室（哈曼）、带有精细雕刻的喷泉、以及带有突出窗户的奥斯曼风格住宅。希腊原住民被限制在特定的区域居住，即所谓的“希腊区”。老城从一座基督教的军事堡垒，转变为一个奥斯曼帝国的行省中心城市，充满了东方的气息与韵律。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1912年，意大利人从奥斯曼手中夺取了罗德岛，开始了另一轮改造。他们对中世纪建筑进行了大规模（有时也颇具争议）的“修复”和“美化”，大导师宫殿就是在墨索里尼的授意下，被重建成了今天我们看到的样子，内部甚至铺设了从罗马运来的马赛克。二战和随后的希腊回归，让老城经历了新的动荡。万幸的是，它的主体结构奇迹般地保存了下来。1988年，联合国教科文组织将整座中世纪古城列为世界文化遗产，肯定了它作为“哥特式城市定居点移植到地中海土壤上最美丽的典范之一”的独特价值。如今，当你漫步其中，你所走的每一步，都踩在由骑士、苏丹、商人、普通居民共同书写、层层叠加的史诗之上。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排整整一天来深度体验罗德岛老城，从清晨到日暮，感受它不同时段的光影与氛围。最佳抵达时间是早上9点前，从海门（Marine Gate）或自由门（Liberty Gate）进入，这时旅游团大军尚未涌入，阳光柔和，拍照光线绝佳。整体游览节奏宜张弛有度：上午集中参观需要门票的核心历史遗迹（宫殿、博物馆），中午在幽静小巷找家餐馆享受慢午餐，下午探索生活区和特色小店，傍晚时分一定要留给城墙漫步。这样安排既能领略其厚重的历史内核，也能捕捉到它作为生活社区的鲜活脉搏，不留遗憾。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季中午非常炎热且阳光暴晒，尽量安排11点到下午3点之间在室内场馆或阴凉小巷活动，并务必携带足量饮水。
穿着绝对舒适的步行鞋，古城内全是凹凸不平的鹅卵石路面，高跟鞋和薄底凉鞋会是灾难。
警惕那些在城门附近过于“热情”的导游，他们可能会收取过高费用。官方导游服务点设在旅游信息中心或主要景点入口。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从海门进入，立刻右转沿着城墙根走，感受那高达12米的壁垒带来的压迫感和上面清晰可见的古老炮击痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过拱门径直走向骑士街的起点，在几乎无人的街道上仰拍那条笔直通向宫殿的、被高大石墙夹峙的震撼透视全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一个半小时沉浸在大导师宫殿里，不仅要看宏大的大厅，更要细读每个房间关于罗德岛历史的展览，触摸那些复制的骑士盔甲。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿出来，沿着骑士街缓步下行，仔细辨认每座骑士客栈门楣上不同的雕刻纹章，想象七百年前不同国家的骑士在此进出的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在骑士街尽头右转，钻进迷宫般的“霍拉”（希腊区）小巷，放任自己迷路，邂逅那些刷成天蓝色或蛋黄色的房子、隐秘的小教堂和开着三角梅的庭院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在苏莱曼清真寺前的广场树荫下稍坐，观察圆顶与宣礼塔和远处骑士团钟楼同框的奇妙景象，这是文化层叠最直观的体现。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前一个半小时，从阿姆博伊斯门附近的售票处登上城墙步道，进行一场环绕部分老城的漫步，从制高点俯瞰红色屋顶的海洋和远处的爱琴海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落后不必急着离开，找一家有露天座位的传统小酒馆（比如在亚里士多德街附近），点一份 mezze 拼盘和一杯ouzo酒，看着古城在灯光中苏醒出另一种神秘面貌。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`骑士街拱门光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点，阳光斜射入骑士街，站在街道中段某个拱门下向外拍摄，能捕捉到光线切割街道、石柱投下长长影子的戏剧性构图，人物可作为点睛之笔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城墙西北角看海`}</h4>
                  <p className="text-sm text-gray-700">{`从阿姆博伊斯门登上城墙，向西北方向步行约十分钟，有一段城墙拐角可以同时拍到坚固的塔楼、老城层层叠叠的屋顶以及远处蔚蓝的爱琴海，日落时分最为壮丽。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`土耳其浴室附近的市井生活`}</h4>
                  <p className="text-sm text-gray-700">{`在希腊区的“苏莱曼浴室”周围小巷，清晨或黄昏时分，拍摄居民在古老石阶上闲坐、猫咪在奥斯曼式拱窗下打盹的场景，色彩丰富，生活气息浓郁。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`大导师宫殿庭院仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`进入宫殿中央庭院，使用广角镜头仰拍四周高耸的哥特式回廊与蓝天，能极致展现建筑的威严与几何美感，建议在正午前后阳光直射庭院时拍摄。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`老城建筑以沙黄色为主，穿着鲜艳颜色（如红色、宝蓝色）衣物的模特能让人像照片在环境中格外突出。`}</li>
                <li>• {`拍摄居民或店主时，请务必先微笑示意并征得同意，这是基本的礼貌。许多小商店内部装饰很美，允许拍照，但最好先消费再询问。`}</li>
                <li>• {`清晨（7-8点）是拥有纯净光线和空荡街道的黄金拍摄时间，摄影师不可错过。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式古城心脏`}</h4>
                  <p className="text-sm text-blue-800">{`入住骑士街附近由中世纪建筑改造的精品酒店，石头墙壁、木横梁天花板是标配，晚上听着更夫打更般的寂静入睡，清晨在私人石头庭院享用早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`经济有趣的背包客之家`}</h4>
                  <p className="text-sm text-green-800">{`选择希腊区深处由家庭经营的传统“公寓”，房间简单但干净，老板妈妈可能会送你自制的果酱，晚上在天台能看见整个老城的星空和不远处宫殿的灯光。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端海景历史融合`}</h4>
                  <p className="text-sm text-yellow-800">{`住在靠近城墙边缘的五星级酒店，部分房间的窗户直接开在古城墙上，既能享受现代奢华设施，又能拥有独一无二的历史视角，露台酒吧是观赏港口日落的绝佳地点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感十足的奥斯曼风情`}</h4>
                  <p className="text-sm text-purple-800">{`下榻在一座经过精心修复的奥斯曼宅邸，内部是极简的当代设计，却保留了原始的拱形天花板和“哈曼”风格浴室，体验东方与西方美学的奇妙碰撞。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-9月）住宿非常紧张且价格高昂，务必提前至少两三个月预订。春季和秋季是性价比更高的理想选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内很多老建筑改造的酒店没有电梯，且隔音可能相对较差，预订时请留意。同时，选择住在城内意味着你需要拖着行李走一段鹅卵石路。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果对夜间绝对安静有要求，谨慎选择紧邻主要餐馆或酒吧区域的住所，老城的夜生活可能持续到较晚。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开罗德岛老城许久后，闭起眼睛，脑海里浮现的不是某座具体的建筑，而是一种混合的“感觉”：石头被阳光晒暖后散发的干燥气息，阴影里的清凉，脚步声在狭窄巷弄里的回响，以及那种被厚重历史温柔包裹的安全感。这个地方教会我，伟大的遗产不仅仅是用来“看”的，更是用来“生活”的。当一座古城不再是冰冷的展品，而依然是一个有居民买菜、有孩童嬉戏、有老人坐在门口晒太阳的社区时，历史才真正拥有了温度，并与我们的当下产生了深刻的共鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被过度包装、只剩下商业外壳的“古镇”，罗德岛老城会是你的解药。它毫不掩饰自己的伤痕与层叠，把骑士的纹章、苏丹的圆顶、意大利的修复痕迹全都坦诚地展示给你。它邀请你做的，不是匆匆打卡，而是像解读一部立体的史书一样，去漫步，去迷路，去触摸，去想象。在这里，每一次拐弯都可能遇见一个不同的世纪。它值得我们跨越千里，不只为了见证一段传奇，更是为了在一个飞速变化的时代里，亲身感受什么是“永恒”的质感，什么是人类文明在冲突与融合中，所展现出的那种坚韧而动人的生命力。这绝对是一生必列的清单上，那个厚重而闪耀的名字。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/galaxidi-traditional-sailing-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加拉西迪</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Galaxidi</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/xanthi-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克桑西古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Xanthi Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ancient-theatre-of-epidaurus" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃皮达鲁斯古剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ancient Theatre of Epidaurus</p>
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
