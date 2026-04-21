import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡格马林根城堡 Sigmaringen Castle｜多瑙河畔的霍亨索伦家族秘境与武器库传奇 - 最佳欧洲景点',
  description: '火车缓缓驶入锡格马林根站台，还没等完全停稳，车厢里就响起一阵低低的惊叹声。所有人的目光都不约而同地投向窗外——多瑙河对岸，一座灰白色、尖塔林立的庞然大物，正以一种近乎霸道的姿态盘踞在一整块高耸的岩石上。阳光洒在它的立面上，明暗对比强烈得像是舞台剧的布景。这就是你对锡格马林根城堡的第一眼，不是远观的风...',
}

export default function SigmaringenCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/germany' },
            { label: '锡格马林根', href: '/destinations/germany' },
            { label: '锡格马林根城堡', href: '/attractions/sigmaringen-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡格马林根城堡・Sigmaringen Castle・德国・锡格马林根`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车缓缓驶入锡格马林根站台，还没等完全停稳，车厢里就响起一阵低低的惊叹声。所有人的目光都不约而同地投向窗外——多瑙河对岸，一座灰白色、尖塔林立的庞然大物，正以一种近乎霸道的姿态盘踞在一整块高耸的岩石上。阳光洒在它的立面上，明暗对比强烈得像是舞台剧的布景。这就是你对锡格马林根城堡的第一眼，不是远观的风景画，而是一种扑面而来的、极具压迫感的物理存在。它不像新天鹅堡那样轻盈梦幻，反而带着一种沉甸甸的、属于中世纪的真实力量感，仿佛在无声地宣告：这里曾是权力与防御的中心。
穿过古老的石桥走向城堡，脚下的多瑙河水是意想不到的碧绿色，水流平缓。空气中混合着河水微腥的气息、老城墙石缝里青苔的湿润味道，以及从山坡树林里飘来的清新草木香。斜坡小路两旁的房子漆着柔和的色彩，窗台上开满天竺葵，生活气息浓郁。但你的视线始终无法从头顶那座巨岩上的城堡移开，它像一个沉默的巨人，俯瞰着脚下这座宁静小镇的日常：遛狗的老人、骑自行车的学生、面包店里飘出的香气。这种奇妙的对比，构成了锡格马林根独特的氛围：威严的古老权力与鲜活的世俗生活，仅一河之隔，却和谐共存。
而真正让这座城堡的灵魂变得无比厚重的，是当你踏入其内部的那一刻。它不像许多已变为空洞博物馆的宫殿，这里依然弥漫着霍亨索伦家族浓烈的生活痕迹与收藏癖好。最震撼人心的，无疑是那座声名在外的武器库。推开厚重的大门，仿佛瞬间掉进了一个冷兵器与火器的奇幻世界。成千上万的铠甲、头盔、长剑、火绳枪、火炮，不是冰冷地陈列，而是以极具艺术感的方式密集排列，从地板一直延伸到高高的穹顶。金属特有的、略带冰冷的气味隐隐可闻，光线透过高窗，在精雕细琢的甲胄上流动，反射出幽暗的光芒。那种视觉冲击力，足以让任何对历史或军事感兴趣的人心跳加速。在这里，你能触摸到的不只是贵族的奢华，更是一个家族用武器书写的、关于权力、艺术与技术的漫长史诗。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`火车缓缓驶入锡格马林根站台，还没等完全停稳，车厢里就响起一阵低低的惊叹声。所有人的目光都不约而同地投向窗外——多瑙河对岸，一座灰白色、尖塔林立的庞然大物，正以一种近乎霸道的姿态盘踞在一整块高耸的岩石上。阳光洒在它的立面上，明暗对比强烈得像是舞台剧的布景。这就是你对锡格马林根城堡的第一眼，不是远观的风景画，而是一种扑面而来的、极具压迫感的物理存在。它不像新天鹅堡那样轻盈梦幻，反而带着一种沉甸甸的、属于中世纪的真实力量感，仿佛在无声地宣告：这里曾是权力与防御的中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过古老的石桥走向城堡，脚下的多瑙河水是意想不到的碧绿色，水流平缓。空气中混合着河水微腥的气息、老城墙石缝里青苔的湿润味道，以及从山坡树林里飘来的清新草木香。斜坡小路两旁的房子漆着柔和的色彩，窗台上开满天竺葵，生活气息浓郁。但你的视线始终无法从头顶那座巨岩上的城堡移开，它像一个沉默的巨人，俯瞰着脚下这座宁静小镇的日常：遛狗的老人、骑自行车的学生、面包店里飘出的香气。这种奇妙的对比，构成了锡格马林根独特的氛围：威严的古老权力与鲜活的世俗生活，仅一河之隔，却和谐共存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而真正让这座城堡的灵魂变得无比厚重的，是当你踏入其内部的那一刻。它不像许多已变为空洞博物馆的宫殿，这里依然弥漫着霍亨索伦家族浓烈的生活痕迹与收藏癖好。最震撼人心的，无疑是那座声名在外的武器库。推开厚重的大门，仿佛瞬间掉进了一个冷兵器与火器的奇幻世界。成千上万的铠甲、头盔、长剑、火绳枪、火炮，不是冰冷地陈列，而是以极具艺术感的方式密集排列，从地板一直延伸到高高的穹顶。金属特有的、略带冰冷的气味隐隐可闻，光线透过高窗，在精雕细琢的甲胄上流动，反射出幽暗的光芒。那种视觉冲击力，足以让任何对历史或军事感兴趣的人心跳加速。在这里，你能触摸到的不只是贵族的奢华，更是一个家族用武器书写的、关于权力、艺术与技术的漫长史诗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡格马林根城堡`} />
                <InfoRow label="英文名称" value={`Sigmaringen Castle`} />
                <InfoRow label="正式名称" value={`霍亨索伦家族锡格马林根宫`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`锡格马林根`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`霍亨索伦家族（普鲁士王室及德国末代皇帝家族）的祖传宫殿之一，见证了该家族南支（士瓦本系）八百年的兴衰史。`} />
                <InfoRow label="建筑特色" value={`一座庞大且高低错落的建筑群，巍然屹立于多瑙河畔的嶙峋巨岩之上，仿佛是从岩石中生长出来。`} />
                <InfoRow label="建筑风格" value={`主体为19世纪重建后的新哥特式与历史主义风格，融合了中世纪城堡的防御结构与文艺复兴宫殿的华丽装饰。`} />
                <InfoRow label="文化价值" value={`不仅是贵族生活的展示场，更因其拥有欧洲最大、最精美的私人武器库之一，而成为一部立体的军事技术与艺术史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡内部仅限导览游参观，通常每日开放，具体场次依季节变化。旺季（4月至10月）导览游场次密集，约每小时一场，首场通常在上午9:30，末场约在下午4:00。淡季（11月至次年3月）场次大幅减少，通常每天仅有2-3场，且周一可能关闭。武器库博物馆与城堡花园开放时间较为灵活，但仍建议出发前务必在其官网核查最新时刻表，国定假日（如圣诞节、元旦）期间安排特殊，可能全天关闭。`} />
              <InfoRow label="门票价格" value={`标准成人导览游门票约12欧元。优惠票（学生、残障人士、团体）约10欧元。仅参观武器库博物馆门票约6欧元。家庭票及与邻近景点（如齐勒尔河谷铁路博物馆）的联票可供选择。门票可在城堡入口处购买，旺季时强烈建议提前在线预订特定场次，以避免长时间等待或场次售罄。`} />
              <InfoRow label="地址" value={`Karl-Anton-Platz 8, 72488 Sigmaringen, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是斯图加特机场或腓特烈港机场。从斯图加特中央火车站搭乘区域火车前往锡根马林根火车站，车程约2小时，班次每小时1-2班。从慕尼黑方向出发，通常需在乌尔姆或梅明根换乘，总车程约2.5-3小时。到达锡格马林根火车站后，城堡就在河对岸的山崖上，极为醒目。从车站步行过桥，再爬一段缓坡，约15-20分钟即可抵达城堡入口。如果行李较多，火车站前也有出租车可供搭乘。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`锡格马林根的故事，始于霍亨索伦家族与这块巨岩的相遇。早在11世纪，最早的城堡雏形就已经矗立在这里，扼守着多瑙河上的重要渡口。但真正让它与霍亨索伦的命运紧密相连的，是13世纪。当时，这个来自士瓦本地区的家族，通过精明的政治联姻和忠诚的服务，从神圣罗马帝国皇帝手中获得了这块领地。从此，城堡便成为了霍亨索伦家族士瓦本支系（与后来成为普鲁士国王和德国皇帝的勃兰登堡支系同源）世世代代的家。在接下来的几百年里，它经历无数次围攻、扩建、损毁与重建，像一块坚韧的磐石，记录着这个家族在南德的起起伏伏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡命运的转折点，是一场灾难性的火灾。1893年3月，一场大火吞噬了城堡的绝大部分建筑，包括无数珍贵的内部装饰和历史文件。灰烬之中，几乎一切都被毁于一旦。然而，这场灾难反而催生了今天我们看到的这座梦幻宫殿。当时的城堡主人，卡尔·安东亲王和他的继承人，没有选择简单地修复，而是决定进行一场雄心勃勃的重建。他们聘请了当时最顶尖的建筑师和艺术家，以中世纪城堡的精神为蓝本，融入了19世纪最流行的新哥特式和历史主义风格。于是，从废墟中崛起的不再是一座单纯的防御堡垒，而是一座兼具浪漫主义情怀与皇家气派的“理想城堡”。我们今天看到的那些高耸的塔楼、精致的窗饰、宏伟的大厅，大多诞生于这个时期。可以说，大火烧掉了旧的躯体，却催生了一个更华丽、更具戏剧性的新生命。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的吊诡之处在于，这座被重建得如此辉煌的家族宫殿，却在20世纪中叶迎来了一段极其尴尬甚至耻辱的插曲。二战末期，随着盟军逼近，纳粹德国将法国的维希傀儡政府整体“搬迁”到了锡格马林根城堡。1944年9月到1945年4月，这座城堡成了以贝当元帅为首的法国投降派领导人的流亡“首都”。一时间，城堡里挤满了法国政客、军官、家属乃至记者，小镇的旅馆和民居也人满为患。这段时期被法国作家路易-费迪南·塞利纳写进了著名小说《一座城堡到另一座城堡》，让锡格马林城堡在文学史上也留下了一抹荒诞而灰暗的色彩。对于霍亨索伦家族而言，自己的家园被用于这样的政治用途，无疑是一段不愿提及的回忆。这段插曲像一道伤疤，提醒着人们，即使是如此坚固的石头城堡，在历史的洪流中也无法置身事外，反而会成为权力游戏的舞台。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后的城堡，终于回归了平静。霍亨索伦家族重新接管了它，并逐步将其对公众开放。他们所做的，不仅仅是展示华丽的大厅和卧室，更是将家族积累了数百年的惊人收藏——尤其是武器和盔甲——系统性地整理展出。这个私人武器库的规模和质量，在整个欧洲都堪称翘楚。从精巧的骑士比武铠甲，到装饰华丽的仪式性火器，每一件都不仅是武器，更是顶级艺术品。家族通过这种方式，将一部立体的欧洲军事史、工艺史和艺术史呈现在世人面前。今天的锡格马林根城堡，依然由霍亨索伦家族的后代管理，它既是一座活生生的家族纪念馆，也是一座世界级的博物馆。它见证了从中世纪骑士到二战动荡的漫长岁月，最终以一种包容而深邃的姿态，向每一个来访者诉说着关于权力、毁灭、重生与传承的复杂故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的锡格马林根之旅，始于一个清爽的早晨。建议在上午九点半前抵达城堡山脚下，这时旅游团尚未大批到来，阳光角度也适合拍摄城堡外观。整个深度游览需要预留至少4到5小时。节奏应该是“先内后外，先听再看”：首先参加一场约60-70分钟的德语或英语导览游（这是进入城堡主生活区的唯一方式），在专业讲解中了解家族秘史和房间功能；导览结束后不要急着离开，凭手环可自由进入举世闻名的武器库博物馆，这里至少需要一小时慢慢品味；最后将时间留给城堡庭院、露台和花园，从不同角度欣赏建筑与多瑙河风光，并在登顶塔楼（如果开放）后画上圆满句号。这样的安排既能保证获取核心历史信息，又能拥有自由探索和静静感受的时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在城堡官网查询并预订特定语言的导览游场次，尤其是英语场次非常有限，现场购票很可能需要等待很久或错过。城堡内部许多房间铺设了古老脆弱的镶木地板或昂贵地毯，请务必穿着柔软、干净的平底鞋，高跟鞋可能会被要求套上保护套。武器库博物馆内允许拍照，但严禁使用闪光灯和三脚架，这是为了保护那些数百年来已十分脆弱的金属和织物表面。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从多瑙河北岸的玛丽亚桥开始，拍下城堡在碧绿河水与晨光中的标准倒影全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过老城爬上斜坡，在城堡入口购票并等待导览游开场，顺便细细观察外墙上的古老石雕和家族纹章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导游穿过厚重的橡木大门，瞬间被大厅里悬挂的巨型鹿角吊灯和墙上密集的祖先肖像画所包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“宴会厅”里想象霍亨索伦家族举办奢华舞会的场景，注意观察精致的天花板壁画和华丽的瓷器壁炉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进曾安置维希法国政府的小厅堂，感受那段特殊历史留下的微妙而凝重的空气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后立即转入武器库博物馆，让自己被上下四层、密密麻麻超过3000件的铠甲与武器所震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“骑士厅”里驻足，仔细欣赏几套最精美的全身板甲，想象骑士穿着它们比武或征战时的重量与荣耀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后登上城堡的露台或指定塔楼，俯瞰整个锡格马林根小镇彩色的屋顶和多瑙河如玉带般蜿蜒远去。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`多瑙河北岸玛丽亚桥中段`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，利用河面作为前景，可以拍到城堡连同其水中倒影的完美对称构图，长焦镜头能压缩空间，突出城堡的宏伟。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡主庭院仰拍主塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`站在庭院中央，用广角镜头向上拍摄，能将高耸的新哥特式塔楼与蓝天一同纳入画框，建筑线条极具视觉冲击力，中午时分阳光直射时立体感最强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`武器库博物馆中央长廊`}</h4>
                  <p className="text-sm text-gray-700">{`站在长廊一端，利用两侧密集陈列的铠甲形成的强烈纵深感构图，对称拍摄，营造出无限延伸的震撼效果，室内光线较暗，需调高ISO或使用大光圈镜头。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`东南侧城堡花园的观景平台`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，顺光拍摄城堡侧面全景，同时能将山下老城色彩斑斓的屋顶作为前景，画面层次丰富，充满生活与历史的交融感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从老城小巷仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`随意走进城堡山下老城的一条陡峭小巷，用石块街道和两旁古老房屋作为画框，仰拍城堡一角从屋顶间探出的画面，最具本地生活气息和戏剧性。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄城堡外观，黄金时间是日出后一小时和日落前一小时，此时的侧光能为石头墙面勾勒出迷人的质感与轮廓。无人机飞行在城堡及小镇上空有严格限制，基本禁止，请不要尝试，以免招致高额罚款。在室内，尤其是武器库，请务必关闭闪光灯，那些古老的金属和彩绘表面极为怕光。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城生活之选`}</h4>
                  <p className="text-sm text-blue-800">{`城堡山脚下老城广场旁的家庭式旅馆，房间虽小但一尘不染，老板会热情地给你手绘地图，推荐本地人才去的猪肘餐馆，晚上听着广场喷泉声入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河畔历史体验`}</h4>
                  <p className="text-sm text-green-800">{`多瑙河畔一栋由古老水车房改造的精品酒店，房间保留了原始的木质结构，有些还带有能看到城堡的阳台，早餐的蜂蜜就来自酒店自己的蜂箱。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`贵族氛围沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城堡附近一栋19世纪贵族别墅内的豪华民宿，内饰充满古董家具和油画，花园宁静优美，仿佛住进了霍亨索伦家族朋友的私宅，体验感十足。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站对面的一家现代设计酒店，交通极其方便，顶楼酒吧拥有观赏城堡夜景的独特视角，适合追求舒适与便利的旅客。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇非常安全宁静，但住宿数量有限，尤其在夏季和周末，务必提前数周甚至数月预订。选择老城区的住宿，意味着晚上可以悠闲地在河边散步，感受小镇入夜后的静谧魅力，但可能需要拖着行李走一小段石板路。如果主要依靠公共交通，住在火车站附近是最方便的选择。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开锡格马林根的时候，我脑海里反复回放的，不是某一个具体房间或某一件精美的铠甲，而是一种复杂的混合感受。那是岩石的坚硬与河水的柔韧，是武器的冷冽与家族肖像目光的温存，是历史的沉重负担与小城镇市集上鲜花的轻盈芬芳。这座城堡不像一个被时间冻结的标本，它更像一个仍然在缓慢呼吸的有机体。火灾的伤疤、战争的尴尬插曲，都成了它年轮的一部分，没有被刻意掩饰。霍亨索伦家族选择将这些，连同他们的荣耀与珍藏，一并打开给你看，这种坦率本身就具有一种动人的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速打卡、滤镜美景的时代，锡格马林根提供了一种截然不同的旅行深度。它要求你慢下来，听一段关于毁灭与重建的故事，辨认一件铠甲上精雕细琢的纹章含义，理解一块岩石如何承载一个家族八百年的命运。它告诉我们，真正的历史魅力从不在于完美无瑕，而在于层叠的痕迹、矛盾的交织与顽强的延续。当你最终站在塔楼上，看着多瑙河不动声色地流向远方，你会感到自己触摸到的，不仅是一座城堡的石头，更是一段流动的、有温度的欧洲史诗。这正是深度旅行的意义——去往那些名字不那么响亮的地方，完成一场与时间厚重感的私人对话。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/speyer-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施佩耶尔大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Speyer Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lindau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林道老城区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindau Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schwaebisch-hall-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施韦比施哈尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwäbisch Hall</p>
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
