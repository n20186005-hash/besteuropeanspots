import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊斯基亚阿拉贡城堡 Aragonese Castle of Ischia｜火山岩上由石桥连接的史诗堡垒 - 最佳欧洲景点',
  description: '你第一眼看到它，会觉得那不像是人造的城堡，而是一块被海浪和时光雕琢了千万年的巨大礁石，偶然地、却又无比坚定地从蔚蓝的第勒尼安海中升起。连接它与伊斯基亚主岛的那道长长石桥，是你通往另一个时空的甬道。走在桥上，海风带着咸味和阳光下松针的清香扑面而来，脚下是木板与钢铁结构的轻微晃动声，混合着海浪拍打桥墩的...',
}

export default function AragonCastleIschiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '伊斯基亚阿拉贡城堡', href: '/attractions/aragon-castle-ischia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`伊斯基亚阿拉贡城堡・Aragonese Castle of Ischia・意大利・伊斯基亚（伊斯基亚岛）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到它，会觉得那不像是人造的城堡，而是一块被海浪和时光雕琢了千万年的巨大礁石，偶然地、却又无比坚定地从蔚蓝的第勒尼安海中升起。连接它与伊斯基亚主岛的那道长长石桥，是你通往另一个时空的甬道。走在桥上，海风带着咸味和阳光下松针的清香扑面而来，脚下是木板与钢铁结构的轻微晃动声，混合着海浪拍打桥墩的哗哗声。左边是开阔的海湾，点缀着白色游艇，右边则是城堡脚下被海水侵蚀出洞穴的黝黑火山岩。你越走越近，堡垒粗糙的岩壁和错落的塔楼在视野里愈发巍峨，那种压迫感与诱惑力交织在一起，心跳会不由自主地加快。
当你穿过桥头那座小小的门楼，便正式踏入了这座“岛中岛”。空气瞬间变得不同，海风的喧嚣被高墙削弱，取而代之的是一种古老的、混合着潮湿岩石、陈旧木料和野生茴香的气味。这里不是一个空旷的城堡壳子，而是一个五脏俱全的微型垂直城市。蜿蜒而上的步道引领你穿过不同层次的生活印记。低处是阴凉的蓄水池和曾经关押囚犯的地牢，你能触摸到岩壁上渗出的冰凉水珠。中间层，阳光重新洒下，照亮了橄榄树环绕的宁静修道院回廊，穿着简朴的修女或许正静默走过。
而当你最终攀上最高处的露天平台，整个世界在脚下豁然开朗。360度的全景像一卷壮丽的油画缓缓铺开：远处是维苏威火山朦胧的轮廓，近处是伊斯基亚岛翡翠般的丘陵和彩色房屋，脚下是宝石蓝的海水环抱着黑色的火山岩。海鸥的鸣叫从深渊般的悬崖下传来。此刻你会明白，这座城堡最核心的魅力，正在于这种极致的反差——它是战争与和平、禁锢与自由、险峻与绝美共存的一体两面，是人类在自然的蛮荒之力上，构建出的一个关于生存、信仰与美的顽固梦想。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到它，会觉得那不像是人造的城堡，而是一块被海浪和时光雕琢了千万年的巨大礁石，偶然地、却又无比坚定地从蔚蓝的第勒尼安海中升起。连接它与伊斯基亚主岛的那道长长石桥，是你通往另一个时空的甬道。走在桥上，海风带着咸味和阳光下松针的清香扑面而来，脚下是木板与钢铁结构的轻微晃动声，混合着海浪拍打桥墩的哗哗声。左边是开阔的海湾，点缀着白色游艇，右边则是城堡脚下被海水侵蚀出洞穴的黝黑火山岩。你越走越近，堡垒粗糙的岩壁和错落的塔楼在视野里愈发巍峨，那种压迫感与诱惑力交织在一起，心跳会不由自主地加快。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你穿过桥头那座小小的门楼，便正式踏入了这座“岛中岛”。空气瞬间变得不同，海风的喧嚣被高墙削弱，取而代之的是一种古老的、混合着潮湿岩石、陈旧木料和野生茴香的气味。这里不是一个空旷的城堡壳子，而是一个五脏俱全的微型垂直城市。蜿蜒而上的步道引领你穿过不同层次的生活印记。低处是阴凉的蓄水池和曾经关押囚犯的地牢，你能触摸到岩壁上渗出的冰凉水珠。中间层，阳光重新洒下，照亮了橄榄树环绕的宁静修道院回廊，穿着简朴的修女或许正静默走过。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你最终攀上最高处的露天平台，整个世界在脚下豁然开朗。360度的全景像一卷壮丽的油画缓缓铺开：远处是维苏威火山朦胧的轮廓，近处是伊斯基亚岛翡翠般的丘陵和彩色房屋，脚下是宝石蓝的海水环抱着黑色的火山岩。海鸥的鸣叫从深渊般的悬崖下传来。此刻你会明白，这座城堡最核心的魅力，正在于这种极致的反差——它是战争与和平、禁锢与自由、险峻与绝美共存的一体两面，是人类在自然的蛮荒之力上，构建出的一个关于生存、信仰与美的顽固梦想。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`伊斯基亚阿拉贡城堡`} />
                <InfoRow label="英文名称" value={`Aragonese Castle of Ischia`} />
                <InfoRow label="正式名称" value={`Castello Aragonese d'Ischia`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`伊斯基亚（伊斯基亚岛）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座雄踞于火山岩孤岛上的堡垒，是第勒尼安海上近千年权力更迭、防御艺术与贵族生活的无言见证者，连接着古希腊、罗马、阿拉贡乃至现代意大利的历史脉络。`} />
                <InfoRow label="建筑特色" value={`一座完全从海中火山岩上“生长”出来的庞大建筑群，通过一道长达220米的优雅石桥与主岛相连，宛如一座浮在海上的中世纪迷宫。`} />
                <InfoRow label="建筑风格" value={`主要呈现文艺复兴时期加固的军事堡垒风格，并融合了更早期的中世纪元素，以及后来巴洛克式的教堂内饰。`} />
                <InfoRow label="文化价值" value={`它不仅是军事工程的杰作，更是一个微缩的、自给自足的历史社区，保存着修道院的宁静、贵族府邸的奢华与囚牢的阴森，是解读地中海岛屿文明的立体教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡全年开放，但开放时间随季节变化。夏季（通常为4月至10月）开放时间为上午9:00至日落前（约晚上7:30），冬季（11月至3月）通常为上午10:00至下午4:30。最后入场时间通常在关闭前一小时。请注意，城堡内部的小教堂和部分博物馆区域可能在周一关闭或开放时间缩短，重大宗教节日（如圣诞节、元旦）可能全天关闭。出发前务必在其官方网站或当地旅游信息中心核实最新时间。`} />
              <InfoRow label="门票价格" value={`标准成人票为12欧元。优惠票（适用于65岁以上老人、持有有效证件的学生及6-18岁青少年）为10欧元。6岁以下儿童免费。家庭票（2位成人+2位儿童）有一定折扣。部分时段（如冬季的某些工作日）可能提供特价票。门票通常在城堡入口处的售票亭购买，接受现金和信用卡。`} />
              <InfoRow label="地址" value={`Via Pontile Aragonese, 80077 Ischia, NA, Italy`} />
              <InfoRow label="交通方式" value={`从最近的国际枢纽那不勒斯国际机场出发，你有两种主要方式抵达城堡。第一种，从机场乘坐直达或经停那不勒斯中央火车站的车前往那不勒斯港口（Molo Beverello或Porta di Massa），车程约30-40分钟。第二种，直接从机场打车到港口，约20分钟。从那不勒斯港口，乘坐渡轮或水翼船前往伊斯基亚岛，航程约50分钟（水翼船）至90分钟（渡轮），班次密集，几乎每小时都有。抵达伊斯基亚岛的主要港口伊斯基亚港后，你需要前往城堡所在的“伊斯基亚桥”区域。从港口可乘坐CD或CS线公共巴士，在“Ponte Aragonese”站下车，车程约15分钟。更方便的选择是乘坐出租车，直接告诉司机“Castello Aragonese”，约10分钟车程。下车后，你会看到一个通往城堡的现代化步行桥的起点。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城堡的故事，远比“阿拉贡”这个名字要古老得多。早在公元前474年，希腊殖民者锡拉库萨的暴君耶罗一世，就看中了这块从海中突兀而出的火山岩。他在这里建立了第一个前哨站，称为“Castrum Gironis”，用以监控海上威胁并保护他在伊斯基亚岛上的利益。岩石天然的陡峭崖壁本身就是最好的城墙。罗马人接管后，这里继续作为战略要地。然而，真正让这块岩石开始大规模“生长”的，是中世纪的动荡。随着罗马帝国崩溃，伊斯基亚岛和整个那不勒斯湾成了各方势力争夺的肥肉，哥特人、拜占庭人、伦巴第人、诺曼人轮番登场。为了保护居民免受日益猖獗的海盗（特别是萨拉森人）袭击，岛上的居民开始大规模向这块易守难攻的岩石上迁移。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到15世纪，一位雄心勃勃的国王彻底改变了这座堡垒的命运与样貌。阿拉贡王朝的阿方索五世在1441年征服了那不勒斯王国后，敏锐地意识到这座城堡的战略价值。他下令进行了一项浩大的工程：不仅加固和扩建了堡垒本身，更关键的是，建造了那条我们现在看到的、长达220米的石桥，将城堡与主岛永久连接。这座桥不仅是军事通道，更象征着阿拉贡王朝对此地牢不可破的控制。在阿方索及其继任者的规划下，城堡内部兴建了宫殿、教堂、修道院、花园，甚至容纳了大约两千户家庭，形成了一个几乎自给自足的上流社会社区。贵族、教士、士兵、商人、工匠在此生活，与主岛上的平民世界隔海相望。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的几个世纪，城堡继续在历史浪潮中沉浮。它经历了西班牙统治时期的进一步军事化，见证了18世纪欧洲王位继承战争中的炮火。但更致命的打击并非来自战争，而是来自和平与发展。随着海盗威胁的消失和火器技术的进步，这种中世纪式的堡垒防御体系逐渐过时。更重要的是，人们不再愿意挤在狭窄的岩石上生活。在19世纪初，岛上的居民和大部分机构开始迁回更宽敞、更便利的主岛。城堡逐渐被废弃，只剩下少数宗教团体和守军。拿破仑战争期间，它甚至被英国人用作关押法国战俘的监狱，那些阴暗潮湿的地牢里又充满了新的痛苦回声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`废弃带来了衰败，但也带来了转机。二十世纪中叶，一位富有远见的私人所有者开始对这座近乎废墟的城堡进行漫长而细致的修复工作。他们清除了几个世纪积累的瓦砾，加固了濒临坍塌的墙壁，小心翼翼地恢复了教堂的壁画和贵族府邸的装饰。修复并非为了将其变回军事要塞，而是为了保存那段完整、多层次的历史切片。如今，当我们漫步其中，看到的不是迪士尼式的完美复原，而是一部可以触摸的、带着伤疤与皱纹的石头史书。从古希腊的基石到阿拉贡的拱门，从修道院的宁静到监狱的阴冷，每一层岩石都压叠着一段记忆，每一次潮汐都拍打着一页历史。它不再保卫任何人，却以一种更永恒的方式，守护着一段关于地中海岛屿生存、信仰、权力与艺术的全部记忆。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受城堡的魔力，请务必安排一个完整的上午或下午，至少预留3到4小时。强烈建议在开门后不久（比如夏季9:30）抵达，这时旅行团尚未涌入，光线柔和，你能享受一段相对宁静的探索时光。游览节奏宜慢不宜快，因为这里不是线性博物馆，而是一个需要你上下攀爬、左右探索的立体迷宫。路线设计上，我们遵循从外到内、从低到高、再从历史沉重走向视觉开阔的原则，最终以一场震撼的全景盛宴收尾。请穿着绝对舒适的步行鞋，因为全程都是石板路、台阶和斜坡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季午后阳光暴晒，城堡高处几乎无遮挡，务必携带帽子、太阳镜并涂抹高倍数防晒霜。部分地下通道和楼梯非常陡峭且光线昏暗，建议使用手机照明并紧握扶手。城堡内虽有指示牌，但岔路多，可以花2欧元在入口处领取一份详细地图，能帮你发现许多容易错过的小角落。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主岛那端踏上长长的步行桥，感受海风并拍摄城堡全景，慢慢调整心情进入历史场域。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的门楼进入城堡底层区域，先右转探索那阴森冰凉、曾是监狱和仓库的岩洞与地下通道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主要坡道向上，在第一个平台左转，探访被橄榄树和鲜花环绕的圣方济各修道院，感受寂静中庭的阳光与平和。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续上行，参观城堡内最重要的宗教场所——圣母升天教堂，抬头仰望其华丽的巴洛克式天花板壁画与大理石装饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上通往最高平台的“之”字形陡峭台阶，途中在观景转角处停下喘息，回望脚下不断变小的建筑群与海面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终抵达城堡制高点的露天观景平台，在这里放慢脚步，环绕一周，将维苏威火山、伊斯基亚全岛和卡普里岛的海天一色尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从另一侧缓坡下山，路过曾经的贵族住宅区遗址和一个小型当代艺术展览空间，感受古今交织的奇妙氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到入口广场，不要错过那家利用古老蓄水池改建的咖啡馆，点一杯本地柠檬冰饮，坐在岩洞中回味整个旅程。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`步行桥中段侧身拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在桥靠近城堡三分之一处，将长长的桥身作为引导线，以宏伟的城堡岩壁和塔楼为背景，能拍出极具纵深感和故事感的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`修道院回廊拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光斜射入回廊时，站在一侧拱门下，将对面爬满藤蔓的墙壁和中央的橄榄树框在拱门中，形成一幅宁静的古典画作。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣母升天教堂内部光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光会透过教堂高侧窗射入，站在中殿后方，等待光束照亮祭坛前的大理石地板和长椅，捕捉空气中浮尘舞动的神圣瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`最高观景台全景接片`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，在观景台西南角，使用手机或相机的全景模式，从左边的伊斯基亚镇房屋、中间的海湾、缓缓扫到右侧的城堡建筑轮廓与远山，获取一张史诗级的宽幅风景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡外墙与海蚀洞的无人机视角`}</h4>
                  <p className="text-sm text-gray-700">{`如果你携带无人机并确认当地法规允许，从城堡外海面较低高度，拍摄黑色火山岩基座被碧蓝海水冲刷出的洞穴与城堡坚固墙体的对比，极具视觉冲击力（飞行时务必注意强风与海鸥）。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用三脚架在城堡内部（尤其是教堂）拍摄时需格外安静，避免影响其他访客，闪光灯在多数室内区域被禁止。拍摄当地居民或修女（如果遇到）前，请务必先微笑并征得对方同意。无人机飞行前，务必确认当日城堡及周边空域是否有限制，海风多变，需谨慎操作。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-blue-800">{`伊斯基亚桥旁的家庭式公寓，推开窗就是城堡灯光点缀的夜景，房东妈妈会送来自家果园的无花果。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`位于主岛但拥有直面城堡全景露台的精品酒店，露台上配有按摩浴缸，每晚在星空和城堡剪影下泡澡是独一无二的享受。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐居美学`}</h4>
                  <p className="text-sm text-yellow-800">{`隐藏在城堡所在岩石山脚橄榄林中的复古石屋，需要步行一小段山路抵达，极致私密，被大自然和历史遗迹环绕。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端奢华`}</h4>
                  <p className="text-sm text-purple-800">{`伊斯基亚港附近的五星级海滨酒店，拥有私人海滩和顶级温泉SPA，玩了一天城堡后，可以回到这里享受地热海水带来的彻底放松。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（7-8月）住宿非常紧张且价格昂贵，建议至少提前3-4个月预订。如果选择住在伊斯基亚桥附近，晚上餐馆和酒吧热闹，生活便利；如果追求绝对宁静，则建议选择东海岸或山上的住宿。岛上治安普遍良好，但无论住哪里，晚上在偏僻小径独行仍需保持基本警惕。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开伊斯基亚阿拉贡城堡许久后，闭上眼，指尖似乎还能感受到那座石桥栏杆被阳光晒出的温度，鼻腔里还萦绕着混合了海盐、岩尘与迷迭香的复杂气息。它留给我的，远不止手机里那些恢弘的照片。它更像一个巨大的、石质的寓言。它告诉你，人类的历史是如何一层又一层地，在自然的骨骼上艰难堆砌；文明如何在隔绝与连接、防御与开放、恐惧与向往之间反复摇摆。那座长长的桥，不仅是物理的连接，更是一种隐喻——我们永远在试图从熟悉的陆地，走向孤独而险峻的理想之岛，无论那是安全的堡垒，精神的圣地，还是审美的巅峰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个快节奏、扁平化的世界里，这样一处需要你付出体力攀爬、花费时间去琢磨的空间，显得尤为珍贵。它拒绝被快速消费。你必须用双脚去丈量它的高度，用皮肤去感受它的岩壁从冰凉到温热的变化，在不同的高度获得截然不同的视野与心境。它不是一个被玻璃罩起来的展览品，而是依然呼吸着、与大海和天空进行着日夜对话的生命体。每一位热爱深度游的旅人，都应该来这里，不仅仅是为了看一座古老的城堡，而是为了体验一次时间的垂直航行，为了站在那个海天之间的制高点上，重新思考连接与孤立、永恒与变迁的真正含义。这里储存的，是地中海的灵魂密码，等待你用一颗安静的心，去解读，去共鸣。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/spoleto-aqueduct-and-duomo-complex" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spello-flower-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯佩洛花城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spello</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/erice-hill-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃里切山城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Erice</p>
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
