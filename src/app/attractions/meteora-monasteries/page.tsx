import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '梅黛奥拉悬空修道院 Meteora｜天空之城的信仰奇观，探索希腊最接近上帝的巨石秘境 - 最佳欧洲景点',
  description: '车子刚拐出卡兰巴卡小镇，一片巨大的、灰褐色的石林就毫无预兆地撞进你的视野。那一刻，你会忘记呼吸。那不是山，而是数十根高达数百米的、近乎垂直的巨岩，像是某个远古巨人随手插在大地上的楔子，沉默、孤傲，直指苍穹。阳光在它们身上切割出凌厉的明暗分界线，岩石纹理粗糙得仿佛能摸到时间的颗粒感。空气里有股干燥的、...',
}

export default function MeteoraMonasteriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '梅黛奥拉悬空修道院', href: '/attractions/meteora-monasteries' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`梅黛奥拉悬空修道院・Meteora・希腊・卡兰巴卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐出卡兰巴卡小镇，一片巨大的、灰褐色的石林就毫无预兆地撞进你的视野。那一刻，你会忘记呼吸。那不是山，而是数十根高达数百米的、近乎垂直的巨岩，像是某个远古巨人随手插在大地上的楔子，沉默、孤傲，直指苍穹。阳光在它们身上切割出凌厉的明暗分界线，岩石纹理粗糙得仿佛能摸到时间的颗粒感。空气里有股干燥的、混合着松树和岩石被太阳烘烤过的特殊气味。
而真正让你心脏漏跳一拍的，是当你眯起眼睛，仔细看向那些巨岩的顶端——在那看似根本无法立足的绝顶之上，竟然贴着小小的、带着红色屋顶的建筑。它们不是“坐落”在那里，而是“依附”在那里，像极了鸟巢，又像是岩石本身生长出的神圣冠冕。这就是梅黛奥拉，在希腊语里意为“悬浮在空中”。那份不真实感是如此强烈，你会恍惚觉得，那是不是海市蜃楼，或是某幅中世纪圣像画直接立体化在了你面前。
当你沿着蜿蜒的山路接近它们，另一种气息开始弥漫。那不是旅游景点的喧闹，而是一种深沉的、带着历史重量的宁静。偶尔，你会听到某座修道院传来悠远而沉稳的钟声，“铛……铛……”，声音在巨石之间碰撞、回荡，最后消散在广阔的山谷里。你能想象，数百年来，这钟声每日唤起的不是游客，而是修士们内心的祈祷。他们选择这里，不是为了奇观，而是为了将自己彻底放逐于世俗之外，在这离天最近的地方，独自面对上帝。这种极致的孤独感，恰恰是梅黛奥拉最打动人心的核心魅力——它让你看到的不仅是建筑奇迹，更是人类精神所能企及的一种近乎决绝的高度。
走近了看，这些修道院褪去了远观时的神秘光环，显露出它真实、甚至有些朴素的一面。斑驳的石墙、小小的木窗、窄得仅容一人通过的悬空台阶。你会触摸到那些被无数朝圣者手掌摩挲得光滑的岩石扶手，凉意沁入指尖。修士们依然在这里生活，身穿黑袍的身影偶尔在廊下一闪而过，带来一缕蜡烛、香木和旧书卷混合的宁静气息。这一刻，奇迹落回了人间，但它依然神圣，因为它仍然是一个“活着”的信仰家园，而不仅仅是一个供人瞻仰的博物馆。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚拐出卡兰巴卡小镇，一片巨大的、灰褐色的石林就毫无预兆地撞进你的视野。那一刻，你会忘记呼吸。那不是山，而是数十根高达数百米的、近乎垂直的巨岩，像是某个远古巨人随手插在大地上的楔子，沉默、孤傲，直指苍穹。阳光在它们身上切割出凌厉的明暗分界线，岩石纹理粗糙得仿佛能摸到时间的颗粒感。空气里有股干燥的、混合着松树和岩石被太阳烘烤过的特殊气味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而真正让你心脏漏跳一拍的，是当你眯起眼睛，仔细看向那些巨岩的顶端——在那看似根本无法立足的绝顶之上，竟然贴着小小的、带着红色屋顶的建筑。它们不是“坐落”在那里，而是“依附”在那里，像极了鸟巢，又像是岩石本身生长出的神圣冠冕。这就是梅黛奥拉，在希腊语里意为“悬浮在空中”。那份不真实感是如此强烈，你会恍惚觉得，那是不是海市蜃楼，或是某幅中世纪圣像画直接立体化在了你面前。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你沿着蜿蜒的山路接近它们，另一种气息开始弥漫。那不是旅游景点的喧闹，而是一种深沉的、带着历史重量的宁静。偶尔，你会听到某座修道院传来悠远而沉稳的钟声，“铛……铛……”，声音在巨石之间碰撞、回荡，最后消散在广阔的山谷里。你能想象，数百年来，这钟声每日唤起的不是游客，而是修士们内心的祈祷。他们选择这里，不是为了奇观，而是为了将自己彻底放逐于世俗之外，在这离天最近的地方，独自面对上帝。这种极致的孤独感，恰恰是梅黛奥拉最打动人心的核心魅力——它让你看到的不仅是建筑奇迹，更是人类精神所能企及的一种近乎决绝的高度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了看，这些修道院褪去了远观时的神秘光环，显露出它真实、甚至有些朴素的一面。斑驳的石墙、小小的木窗、窄得仅容一人通过的悬空台阶。你会触摸到那些被无数朝圣者手掌摩挲得光滑的岩石扶手，凉意沁入指尖。修士们依然在这里生活，身穿黑袍的身影偶尔在廊下一闪而过，带来一缕蜡烛、香木和旧书卷混合的宁静气息。这一刻，奇迹落回了人间，但它依然神圣，因为它仍然是一个“活着”的信仰家园，而不仅仅是一个供人瞻仰的博物馆。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`梅黛奥拉悬空修道院`} />
                <InfoRow label="英文名称" value={`Meteora`} />
                <InfoRow label="正式名称" value={`Meteora Monasteries`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`卡兰巴卡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是希腊东正教最神圣、最与世隔绝的修道院群落之一，是中世纪隐修主义的巅峰体现和活化石。`} />
                <InfoRow label="建筑特色" value={`数座修道院不可思议地修建在天然形成的巨型砂岩柱顶端，仿佛悬浮于天地之间。`} />
                <InfoRow label="建筑风格" value={`以拜占庭晚期建筑风格为主，融合了当地因地制宜的防御性石砌工艺。`} />
                <InfoRow label="文化价值" value={`是自然奇迹与人类坚定信仰相结合的无与伦比的杰作，体现了人类在极端环境中追求精神升华的永恒渴望。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`各修道院开放时间不同，通常夏季（4月-10月）为上午9点至下午5点，冬季（11月-3月）为上午9点至下午4点。请注意，每周各修道院轮流关闭一天（如大梅黛奥拉修道院周二关闭，圣瓦瓦拉斯修道院周五关闭）。具体日期请行前务必查阅官网。东正教重大节日期间可能全天关闭或开放时间极短。`} />
              <InfoRow label="门票价格" value={`进入每个修道院均需购票，票价约3欧元/人。学生、65岁以上老人及团体有相应折扣。套票仅在旅游信息中心有售，但一般游客按需单独购买即可。所有收益用于修道院的维护。`} />
              <InfoRow label="地址" value={`Meteora, Kalampaka 422 00, Greece`} />
              <InfoRow label="交通方式" value={`最便捷的方式是先抵达雅典或塞萨洛尼基。从雅典Larissa火车站乘坐火车前往卡兰巴卡（Kalampaka），车程约4-5小时，每日有数班列车，建议提前在希腊铁路官网购票。也可从雅典乘坐长途巴士至特里卡拉（Trikala），再转乘当地巴士至卡兰巴卡，总耗时约5小时。自驾是最推荐的方式，从雅典出发沿E75高速公路向北，约4小时车程可达卡兰巴卡，沿途风景壮丽。到达卡兰巴卡小镇后，可自驾、参加当地旅行团或租用出租车前往各修道院，山间有环形公路连接。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事的开端要追溯到公元9世纪甚至更早。那时，还没有这些壮观的悬空建筑。只有一些最虔诚、最渴望苦修的隐士，被这片仿佛世界尽头的巨石阵所吸引。他们像最初的攀登者，仅凭绳索和惊人的勇气，爬上这些天然的石塔，在岩壁上的洞穴和裂缝中栖身。他们的生活近乎原始：采集雨水，啃食野果，在绝对的孤独中冥想、祈祷。这些无名者是梅黛奥拉精神的真正奠基人，他们用最艰苦的方式，在这片巨岩中播种下了第一颗信仰的种子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在14世纪中叶。当时，奥斯曼土耳其帝国的势力在巴尔干半岛不断扩张，许多来自埃皮鲁斯和塞萨利的修士为了躲避战乱和宗教迫害，开始向这片与世隔绝的巨石丛林深处迁徙。他们需要更安全、更永久的庇护所。传说，在1356年，一位名叫阿塔纳西奥斯的圣徒，在神鹰（或说神迹）的引领下，登上了最高最险的那根石柱（后来被称为“大石”）。他认为这里是最完美的、与上帝交流的场所，于是决定在此建立第一座有组织的修道院，这就是“大梅黛奥拉修道院”的起源。他和他的追随者们是如何将第一批建筑材料运上那近乎垂直的岩顶的？至今仍是个充满传奇色彩的谜。最广泛的说法是使用可拆卸的绳梯、滑轮和巨大的吊篮，其过程之艰辛，本身就是一首信仰的史诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的两个世纪，是梅黛奥拉的“黄金时代”。在鼎盛时期，有多达24座修道院矗立在不同的石柱上，形成了一个自给自足的“天空之城”。修士们不仅祈祷，也从事抄写经卷、绘制圣像、研究哲学和医学的工作。这些修道院并非完全与世隔绝，它们与地方贵族和拜占庭皇室保持联系，获得捐赠，并成为动荡时局中保存希腊文化和东正教火种的“诺亚方舟”。建筑工艺也日趋成熟，他们利用岩顶有限的平地，巧妙地构建起包括教堂、餐厅、修士居室、蓄水池和图书馆在内的综合建筑群，有些甚至拥有令人惊叹的穹顶壁画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，辉煌之下暗藏危机。17世纪以后，随着通往岩顶的阶梯被逐步开凿出来，虽然便利了交通，却也削弱了其天然的防御性和隔绝性。更致命的打击来自近代：两次世界大战的炮火、盗匪的劫掠，尤其是战后希腊社会急速的现代化进程，让这种极端苦修的隐修生活方式难以为继。修士数量锐减，一座接一座的修道院被废弃，慢慢在风雨中倾颓，只剩下残垣断壁诉说着过往。梅黛奥拉，一度面临着被时间彻底遗忘的命运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它再次回到世界的聚光灯下，要部分归功于一部电影——1981年的詹姆斯·邦德电影《最高机密》在此取景，那惊险的悬崖画面震惊了全球观众。旅游业开始兴起。而真正关键的转折，是希腊政府、教会以及联合国教科文组织的共同努力（梅黛奥拉于1988年被列为世界文化与自然双重遗产）。如今，仅有六座修道院（大梅黛奥拉、瓦尔拉姆、圣尼古拉斯、圣芭芭拉、圣三一、圣斯蒂法诺）经过精心修复，仍有少量修士修女驻守并对公众开放。它们不再是遗世独立的孤岛，却以一种新的方式延续着生命——既作为活跃的宗教场所，也作为连接过去与现在、自然与人文的独一无二的桥梁。当你今天站在这里，你脚下踩着的，是一部浓缩了苦难、坚韧、衰落与重生的人类精神史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在卡兰巴卡或邻近的卡斯查基小镇住一晚，次日清晨出发，拥有完整的一天。理想节奏是从早上9点开始，避开10点后涌入的大型旅游团。整个深度游览需要至少6-7小时。路线建议按逆时针方向自驾或包车游览环形公路，先前往最远、最高的大梅黛奥拉修道院，趁清晨人少、光线柔和时体验其恢弘，然后依次下山参观其他几座，将最易抵达、也常最拥挤的圣斯蒂法诺修道院放在下午稍晚时候。这样的安排既能把握光线拍照，又能相对错开人流，更重要的是，你能感受到一种从“云端”逐渐回到“人间”的、富有层次感的体验过程。记得留出充足的时间在每个地方静坐片刻，感受风吹过岩石的声音。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`所有修道院入口处都提供长围裙，女性必须穿着过膝长裙，男性必须穿着长裤，不可裸露肩膀，请务必尊重当地宗教习俗。山间公路狭窄且多急弯，自驾需格外小心，旺季时停车场非常紧张。某些修道院需要攀登相当长且陡峭的阶梯才能到达入口，请评估自身体力并穿着舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从卡兰巴卡出发，沿着盘山公路在晨雾缭绕中驶向最高处的大梅黛奥拉修道院，第一个进入那安静得能听见自己心跳的中庭。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在大梅黛奥拉修道院的博物馆里驻足，仔细观看那些从绳梯、吊篮到精美圣像的展品，触摸那段近乎神话的创业史。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到修道院向外延伸的木质观景平台，深吸一口气，俯瞰脚下如盆景般的绿色平原和如丝带般的皮尼奥斯河，感受何为“上帝视角”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着山路下行，拜访以精美绝伦的16世纪湿壁画闻名的瓦尔拉姆修道院，在昏暗的教堂里借着一束天光，看清壁画上圣人眼神里的悲悯。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在连接两座修道院之间的路边，找一个安全的停车点，徒步一段古老的、布满苔藓的石阶小径，想象几个世纪前修士们每日行走的路径。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择一座修道院（如圣三一），不急着进入，先绕到其侧面的悬崖下，仰头凝视那令人眩晕的建筑底部和支撑它的巨大岩柱，感受工程的惊人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在午后温暖的阳光下，走进唯一由修女管理的圣斯蒂法诺修道院，在小巧精致的花园里逗留，感受与之前几座不同的、更为柔和的氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一小时，驱车前往卡斯查基小镇附近的观景台，看着夕阳的金辉将整个巨石林和其上的修道院染成火红色，直至变成天幕下沉默的黑色剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`卡兰巴卡镇外公路第一个转弯处的全景平台`}</h4>
                  <p className="text-sm text-gray-700">{`日出时分，利用长焦镜头压缩空间，可以拍到数座修道院在晨雾中若隐若现、层层叠叠的梦幻全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣三一修道院侧面悬崖底部的仰角`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光照亮岩壁时，使用广角镜头贴近拍摄，能极致夸张修道院与巨岩的高度差，获得最具冲击力的悬空感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`大梅黛奥拉修道院内部的穹顶壁画细节`}</h4>
                  <p className="text-sm text-gray-700">{`需使用高感光度和大光圈，关闭闪光灯，寻找从窗户投入的天然侧光，捕捉湿壁画上历经数百年依然生动的圣徒面容。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`连接瓦尔拉姆与大梅黛奥拉之间的山林小径中段`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，顺光拍摄，将蜿蜒的古老石阶作为前景引导线，远方的一座修道院作为视觉终点，构图充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`卡斯查基观景台的日落剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落后十分钟的蓝调时刻，对准天空较亮处测光，将巨石和修道院拍成轮廓分明的黑色剪影，天空会呈现出美妙的蓝紫色渐变。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部严格禁止使用闪光灯和三脚架（以免妨碍他人及损伤壁画），拍摄时请保持绝对安静。航拍在这里是严令禁止的，既出于安全考虑，也为了尊重修士们的隐私与宁静。最好的“镜头”往往是你的眼睛，别忘了放下相机，用足够长的时间去凝视和感受。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`卡兰巴卡镇中心家庭经营的公寓式旅馆，房间阳台正对着巨石林，老板会热情地为你手绘一份只有本地人才知道的徒步小地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在卡斯查基村由传统石屋改造的精品酒店里，露台直接嵌入山岩，晚上在私密的露天按摩浴缸里边泡澡边仰望星空下的巨石轮廓。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`梅黛奥拉环山公路旁唯一一家五星级遗产酒店，由旧贵族宅邸改建，拥有无边际泳池正对全景，在房间里就能守候一场从日出到日落的完整光影秀。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居修行`}</h4>
                  <p className="text-sm text-purple-800">{`预订山间某座仍在运作的小型修道院提供的极简客房（需提前数月写信申请并遵守严格作息），体验一夜真正“悬浮于世外”的宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（5-9月）的住宿非常紧俏，尤其是那些有景观的房间，务必提前至少两到三个月预订。卡兰巴卡镇生活便利，餐馆商店众多；卡斯查基村更安静、更贴近自然，但餐饮选择较少。整个地区治安良好，民风淳朴。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开梅黛奥拉许久之后，那些巨岩的影像依然会时常闯入你的脑海。但最让你怀念的，可能不是那份视觉上的震撼，而是在那里体验到的一种独特的“时间感”。在那里，时间仿佛是以岩石风化的速度、以修士日复一日诵经的节奏在流淌，缓慢、沉重，却有着磐石般的安定。它提醒着我们，在人类历史的长河中，曾有这样一群人，将信仰视为比生命更重的基石，不惜以最艰难的方式，在不可能之处建立起精神的坐标。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快节奏的、充斥着虚拟连接的时代，梅黛奥拉的存在就像一个巨大的、沉默的反问。它问我们：何为真正的“高度”？是摩天大楼的物理尺度，还是内心精神的攀登？何为真正的“连接”？是无线网络的满格信号，还是在极端孤独中与自我、与自然的深刻对话？每一位热爱深度游的旅人都该来这里，不仅是为了一睹奇迹，更是为了接受一次心灵的“地质考察”。你会在这片巨石阵中，照见自己内心的喧嚣与尘埃，并可能找到一块属于你自己的、可以安静倚靠的“岩石”。这里不是终点，而是一个起点，一个让你在回归尘世后，依然能记得那片天空和那份宁静的起点。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mycenae" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈锡尼遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mycenae</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mystras-archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米斯特拉斯遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mystras</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔塔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arta</p>
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
