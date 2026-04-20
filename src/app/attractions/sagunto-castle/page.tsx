import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨贡托 Sagunto｜在西班牙东海岸的山巅，触摸古罗马的石头与摩尔人的回声 - 最佳欧洲景点',
  description: '你第一眼看到萨贡托城堡，可能不是从山下，而是在从瓦伦西亚北上的火车窗边。它就那样毫无征兆地闯入视线——一座灰黄色的、巨大的、仿佛从山体本身生长出来的庞然巨物，沉默地镇守着海岸线与内陆平原的交界处。那种扑面而来的苍凉与威严，瞬间就能把车窗外的现代世界过滤掉。 当你真的站在山脚下，开始沿着之字形的碎石小...',
}

export default function SaguntoCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '萨贡托', href: '/attractions/sagunto-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨贡托・Sagunto・西班牙・萨贡托`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到萨贡托城堡，可能不是从山下，而是在从瓦伦西亚北上的火车窗边。它就那样毫无征兆地闯入视线——一座灰黄色的、巨大的、仿佛从山体本身生长出来的庞然巨物，沉默地镇守着海岸线与内陆平原的交界处。那种扑面而来的苍凉与威严，瞬间就能把车窗外的现代世界过滤掉。
当你真的站在山脚下，开始沿着之字形的碎石小径向上走时，感官才真正苏醒过来。脚下是晒得发烫的古老石板，缝隙里钻出倔强的野花和薰衣草，散发出干燥而热烈的香气。风很大，从地中海毫无遮拦地吹来，穿过残破的拱门和箭孔，发出呜呜的回响，那是千年前瞭望哨兵听过的同一首歌。阳光炽烈得几乎有了重量，砸在古老的石墙上，让每一道凿痕、每一片斑驳的苔藓都轮廓分明。你会忍不住伸手去触摸那些石头，有些光滑如镜，是罗马人的精心雕琢；有些粗糙硌手，带着摩尔人泥浆的颗粒感。这里没有精致的博物馆玻璃罩，历史就裸露在空气中，你可以靠坐其上，与它肌肤相亲。
对萨贡托的当地人来说，这座山不只是景点，更是生活的一部分。你会看到慢跑者喘着气穿过罗马城门，情侣坐在剧场最高处的石阶上分享一盒蜜瓜，老人在城墙的阴影下读报。这座城堡早已从军事堡垒，变成了一个巨大的社区阳台、一个俯瞰家园与历史的冥想空间。它最打动人心的魅力，正是这种惊人的“活着”的状态。你感受到的不是被供奉的“遗产”，而是一个仍在呼吸的、层叠着无数生命的记忆之丘。罗马士兵在此巡逻的脚步声，摩尔诗人吟唱的旋律，光复战争时的战鼓与祷告，都似乎被压缩进了这盘旋的山风与滚烫的阳光里，等待你去聆听。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到萨贡托城堡，可能不是从山下，而是在从瓦伦西亚北上的火车窗边。它就那样毫无征兆地闯入视线——一座灰黄色的、巨大的、仿佛从山体本身生长出来的庞然巨物，沉默地镇守着海岸线与内陆平原的交界处。那种扑面而来的苍凉与威严，瞬间就能把车窗外的现代世界过滤掉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你真的站在山脚下，开始沿着之字形的碎石小径向上走时，感官才真正苏醒过来。脚下是晒得发烫的古老石板，缝隙里钻出倔强的野花和薰衣草，散发出干燥而热烈的香气。风很大，从地中海毫无遮拦地吹来，穿过残破的拱门和箭孔，发出呜呜的回响，那是千年前瞭望哨兵听过的同一首歌。阳光炽烈得几乎有了重量，砸在古老的石墙上，让每一道凿痕、每一片斑驳的苔藓都轮廓分明。你会忍不住伸手去触摸那些石头，有些光滑如镜，是罗马人的精心雕琢；有些粗糙硌手，带着摩尔人泥浆的颗粒感。这里没有精致的博物馆玻璃罩，历史就裸露在空气中，你可以靠坐其上，与它肌肤相亲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对萨贡托的当地人来说，这座山不只是景点，更是生活的一部分。你会看到慢跑者喘着气穿过罗马城门，情侣坐在剧场最高处的石阶上分享一盒蜜瓜，老人在城墙的阴影下读报。这座城堡早已从军事堡垒，变成了一个巨大的社区阳台、一个俯瞰家园与历史的冥想空间。它最打动人心的魅力，正是这种惊人的“活着”的状态。你感受到的不是被供奉的“遗产”，而是一个仍在呼吸的、层叠着无数生命的记忆之丘。罗马士兵在此巡逻的脚步声，摩尔诗人吟唱的旋律，光复战争时的战鼓与祷告，都似乎被压缩进了这盘旋的山风与滚烫的阳光里，等待你去聆听。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨贡托`} />
                <InfoRow label="英文名称" value={`Sagunto`} />
                <InfoRow label="正式名称" value={`Sagunto Castle and Roman Theatre`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`萨贡托`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`罗马帝国在伊比利亚半岛东海岸的军事与行政前哨，后成为摩尔人重要的防御要塞，其陷落是基督教“光复运动”中的关键节点。`} />
                <InfoRow label="建筑特色" value={`一座层层叠叠、跨越千年的露天历史博物馆，在同一座山丘上，你能清晰地辨认出古罗马的剧场石阶、西哥特人的粗糙加固、摩尔人的弧线拱门和基督徒的笔直城墙。`} />
                <InfoRow label="建筑风格" value={`古罗马、伊斯兰摩尔式与中世纪基督教风格的罕见层叠，仿佛一部用石头写成的三幕剧。`} />
                <InfoRow label="文化价值" value={`见证了罗马文明的辉煌、伊斯兰世界的智慧与基督教王国光复运动的决心，是地中海文明交锋与融合的立体教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡区域全年开放，但内部部分区域（如部分塔楼、博物馆）有独立开放时间，通常为周二至周六 10:00 - 18:00（冬季至17:00），周日及节假日 10:00 - 14:00，周一闭馆（节假日除外）。罗马剧场的开放时间大致相同，夏季（6月至9月）傍晚会延长开放，并经常用于夜间演出。最建议出行前在萨贡托旅游局官网核对最新时刻表，因为西班牙的节假日安排（尤其是当地节日）可能导致临时关闭或调整。`} />
              <InfoRow label="门票价格" value={`进入城堡广阔的山顶区域本身是免费的，这是它最迷人的一点——一座开放式历史公园。然而，进入核心的罗马剧场遗址需要购票，普通票价约6欧元。优惠票价（学生、65岁以上长者等）约4欧元。每周日及部分节假日（具体日期需查询）下午常设免费入场时段。联票（包含剧场与城堡内的考古博物馆）约8欧元，非常推荐。`} />
              <InfoRow label="地址" value={`Plaza de los Hermanos de la Cruz, s/n, 46500 Sagunto, Valencia, España`} />
              <InfoRow label="交通方式" value={`从瓦伦西亚出发前往萨贡托是经典的一日游路线，极其便利。火车：从瓦伦西亚市中心火车站（Estació del Nord或Joan d‘Austria）搭乘C-6郊区列车（Cercanías），方向为“Sagunto”或“Castelló”。车程约25-30分钟，班次频繁（高峰时段每15-20分钟一班），单程票价约3欧元。到站后，出站就能看到矗立在山顶的城堡，跟着路标步行约20-25分钟上山（沿途会穿过迷人的老城区，本身就是游览的一部分）。公交：从瓦伦西亚巴士站也有定期巴士前往，但火车是更舒适快捷的选择。自驾：沿V-21或N-340公路向北行驶约25公里，城镇周边有多个付费停车场，建议停在老城外围然后步行上山，因为山顶城堡区不通车。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲萨贡托的故事，我们得把时钟拨回到公元前三世纪。那时候，这里不叫萨贡托，而是一个繁荣的伊比利亚城市，与新兴的海洋强国迦太基结盟。然而，它的命运被一位名叫汉尼拔的迦太基将军彻底改变。为了获取战争资源并挑起与罗马的冲突，汉尼拔大军围困了这座忠诚于罗马的城邦。传说中的围城战惨烈异常，持续了八个月。据说，城破在即，不愿受辱的萨贡托人将自己的财富与神庙付之一炬，集体殉城。这场悲剧直接引爆了第二次布匿战争，也让它第一次被浓墨重彩地写进罗马史册。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马人赢了战争，也彻底重建了这里，赋予了它新的名字和灵魂——“萨贡图姆”。他们在山脚下建造了那座宏伟的、能容纳八千人的剧场，将希腊的戏剧艺术带到这里。你可以想象，在两千年前的某个夏夜，地中海的海风轻拂，火把照亮舞台，市民们穿着托加袍，听着用拉丁语演绎的悲剧或喜剧，那是帝国边疆的文化灯塔。罗马帝国衰落后，西哥特人来了，他们在山顶加固了防御，但留下的痕迹不多，更像是一段粗糙的过渡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转变发生在公元八世纪。摩尔人的船帆出现在地平线上，他们征服了伊比利亚大半土地，也看中了这座扼守要道的山丘。在接下来的五个世纪里，摩尔工匠用他们特有的智慧重塑了城堡。他们修建了复杂的蓄水池系统（至今你还能看到那些拱顶水窖）、蜿蜒曲折的城门（为了削弱攻城锤的冲击力）、以及更适合弓箭手防守的弧形城墙。山顶的“阿尔卡萨瓦”（Alcazaba）成为权力的中心，一个融合了军事、行政与生活功能的微型伊斯兰城市。那时的萨贡托，空气中飘散着薄荷茶、香料和湿润泥土的气息，宣礼声在山谷间回荡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点出现在十三世纪。基督教王国光复运动的浪潮席卷而来。阿拉贡国王海梅一世率领大军，经过艰苦的围城，最终在1238年夺取了城堡。这场胜利具有标志性意义，为随后攻克瓦伦西亚铺平了道路。基督徒入主后，没有推倒一切，而是以一种实用主义的态度进行改造：他们加高了城墙，修建了哥特式的圣玛丽亚教堂（就坐落在罗马神庙的旧址上），用十字架取代了新月标志，但许多摩尔时期的核心结构被保留并融入新的防御体系。此后的几百年，它的军事地位逐渐下降，在拿破仑战争和西班牙内战中又经历了炮火的洗礼，留下了最后的伤痕，也最终归于寂静，成为我们今天看到的、充满残缺之美的宏大遗迹。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的萨贡托深度游需要预留至少4-5小时，我强烈建议在午后（比如下午3点后）抵达。这样你可以避开正午最毒辣的日头，先用1-1.5小时细致参观凉爽的半山腰罗马剧场，感受古罗马的优雅。随后在下午稍晚、光线变得金黄柔和时，开始你的城堡攀登之旅，整个过程大约需要2-3小时。当你抵达最高点的城堡核心区时，时间正好接近日落——那将是全天最魔幻的时刻，整个瓦伦西亚平原乃至远处的地中海都会被染成金色和紫红色。这样的安排，既能让你在最佳光线下欣赏建筑细节和拍照，也能以一场辉煌的日落作为整个旅程的情感高潮。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双抓地力好的运动鞋或登山鞋，山路崎岖多碎石，高跟鞋或凉鞋是自讨苦吃。
带上充足的饮用水和防晒用品（帽子、太阳镜、防晒霜），山顶几乎没有遮阴处，且风大，体感温度虽不高但紫外线极强。
如果想完整参观罗马剧场内部和城堡里的小型考古博物馆，请务必在下午4点前进入，它们通常比城堡露天区域关得更早。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站出来，先别急着上山，沿着“Calle del Castillo”路标穿过萨贡托老城区，感受一下山脚下充满生活气息的狭窄街道和斑驳的黄色墙面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在山脚售票处购买罗马剧场的门票，然后沿着修复后的弧形石阶走到剧场中心，抬头感受这个巨大石碗将你包围的震撼声学效果。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完剧场，从剧场西侧的小径正式开始登山，你会首先经过古老的西哥特城门，那是进入层层防御体系的第一道关卡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上，穿过优雅的“阿尔莫希亚门”，这是一个典型的摩尔式马蹄拱门，门后豁然开朗，是一片开阔的广场，这里曾是一个繁荣的摩尔人市集。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙向东走，去探访那些隐藏的摩尔蓄水池，幽暗的空间里回荡着水滴声，是体验城堡“生命线”的绝佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`向着最高处的“阿尔卡萨瓦”前进，途中会经过中世纪基督教王国增建的长方形塔楼和城墙，对比脚下摩尔地基的曲线，感受建筑风格的变迁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终抵达城堡的至高点，站在“七面旗观景台”，让360度的全景洗礼你的眼睛，东面是蔚蓝的地中海，西面是无限延伸的肥沃平原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分，找一处朝西的残垣安静坐下，看夕阳将千年的石头和远处的柑橘林一同点燃，直到星星在古堡上空浮现。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`罗马剧场中心仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午稍晚时分，站在剧场舞台中央，用广角镜头向上拍摄，将巨大的弧形石阶、后方山脊上的城堡遗迹以及天空一同纳入画面，构图极具史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`阿尔莫希亚门光影`}</h4>
                  <p className="text-sm text-gray-700">{`在日落前约一小时，阳光会斜射穿过这座摩尔拱门，在内部通道的石墙上投下迷人的光影，此时拍摄门洞框架构图，将门外的蓝天或绿树作为背景，故事感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`摩尔蓄水池入口`}</h4>
                  <p className="text-sm text-gray-700">{`利用蓄水池入口的圆形或拱形结构作为天然画框，对准内部幽深的通道和水面反射的微光，调低曝光，拍出神秘而富有几何美感的内部空间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`犹太区（Call）残垣巷道`}</h4>
                  <p className="text-sm text-gray-700">{`在城堡中下层的犹太区遗址，寻找那些狭窄巷道和残破的墙垣，利用午后长长的阴影营造出明暗对比，拍摄孤独行走或凝视的剪影，表达历史的沧桑感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`七面旗观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，使用中焦段镜头，将前景古老的、带有箭孔的城墙与中景广袤的平原、远景的地平线和绚丽的晚霞进行分层构图，拍出层次丰富、色彩饱和的壮丽全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一枚广角镜头（拍摄宏大场景）和一枚定焦镜头（捕捉建筑细节和光影质感），长焦镜头在这里用处不大。`}</li>
                <li>• {`尊重遗址，不要为了拍照攀爬禁止进入的残墙或脆弱结构，这不仅危险，也可能面临罚款。`}</li>
                <li>• {`当地人对拍摄他们本人（尤其是特写）比较敏感，如需拍摄当地人生活场景，请尽量保持距离或先微笑示意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`萨贡托老城区中心的家庭式旅店（Pensión），房间简单干净，打开木窗就能看到街角的教堂和邻居阳台盛开的天空葵，晚上能听到广场上轻柔的谈话声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由一栋19世纪贵族宅邸改造的精品酒店，位于山脚下，保留了原始的马赛克地板和高挑的天花板，庭院里有一棵古老的橘子树，早餐是地道的瓦伦西亚式。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于萨贡托附近海滨区（Puerto de Sagunto）的现代设计酒店，拥有无边泳池和直面地中海的露台，在探索完苍凉的古堡后，回到这里享受海鲜大餐和海浪声，是绝妙的对比体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`瓦伦西亚市区基地`}</h4>
                  <p className="text-sm text-purple-800">{`如果行程以瓦伦西亚为主，完全可以选择住在瓦伦西亚市中心，乘坐半小时火车轻松往返萨贡托，这样晚上能享受瓦伦西亚更丰富的夜生活和美食选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在萨贡托本地，尤其是老城区，请享受它的宁静，夜晚除了少数酒吧和餐厅，街道会非常安静，这正是沉浸感的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`萨贡托治安良好，但无论住在哪里，贵重物品妥善保管是基本的旅行常识。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（7-8月及重大节假日）建议提前预订住宿，尤其是特色精品酒店，很可能一房难求。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开萨贡托时，我的手里没有带走一片石头，但心里却仿佛被塞进了一座山。那种感觉非常奇特，它不是那种令人屏息的、完美的美，比如一座精雕细琢的大教堂。它是一种粗糙的、厚重的、甚至有些凌乱的美，是时间本身未经修饰的样貌。在这里，你不会获得一个单一的故事，而是同时听到多个声部的合唱，时而和谐，时而冲撞——罗马军团的号角、摩尔商贩的叫卖、基督徒胜利的钟声，最终都化作了风吹过松林的沙沙响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、渴望即刻满足的快节奏世界里，萨贡托提供了一种截然相反的旅行价值：它要求你付出汗水（攀登），付出耐心（辨认），付出想象（重建）。它不会把答案精美地包装好递给你，而是给你一堆沉默的石头、一片辽阔的风景，让你自己去提问、去连接、去感受。当你站在山顶，看现代高速公路如银带般从古老的平原穿过，看集装箱港口与两千年前的剧场共享同一片海岸线，你会深刻地理解，文明从来不是一次覆盖一次的涂抹，而是一层层的沉淀与共生。这，或许就是深度旅行最珍贵的礼物：它让我们在时空的层理中，找到自己当下位置的坐标，并获得一种宝贵的、关于延续的宁静力量。每一位热爱深度游的旅人，都应该来萨贡托，亲手触摸一下这部石头的“历史年轮”。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castillo-de-los-templarios" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蓬
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蓬费拉达圣殿骑士城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castillo de los Templarios</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/leon-old-town-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱昂老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">León Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/santillana-del-mar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    桑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">桑蒂利亚纳代尔马尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Santillana del Mar</p>
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
