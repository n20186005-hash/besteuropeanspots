import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯蒂廖内-德尔拉戈 Castiglione del Lago｜坐拥意大利第四大湖的绝美中世纪半岛古堡 - 最佳欧洲景点',
  description: '你得先忘掉那些挤满游客的著名湖泊。当我第一次把车停在路边，徒步走向卡斯蒂廖内时，眼前豁然开朗的景象让我直接屏住了呼吸——它不是建在湖边，而是像一艘巨大的石船，优雅地“驶入”了翡翠色的特拉西梅诺湖中。三面环水，只有一条细细的陆地脖颈与外界相连。湖风带着水藻的清新和一丝凉意扑面而来，耳边是水波轻轻拍打古...',
}

export default function CastiglioneDelLagoTrasingEnoLakePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '卡斯蒂廖内-德尔拉戈', href: '/attractions/castiglione-del-lago-trasing-eno-lake' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯蒂廖内-德尔拉戈・Castiglione del Lago・意大利・卡斯蒂廖内-德尔拉戈（佩鲁贾省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你得先忘掉那些挤满游客的著名湖泊。当我第一次把车停在路边，徒步走向卡斯蒂廖内时，眼前豁然开朗的景象让我直接屏住了呼吸——它不是建在湖边，而是像一艘巨大的石船，优雅地“驶入”了翡翠色的特拉西梅诺湖中。三面环水，只有一条细细的陆地脖颈与外界相连。湖风带着水藻的清新和一丝凉意扑面而来，耳边是水波轻轻拍打古老石基的哗哗声，还有远处帆船桅杆的细微叮当声。空气中混合着湖水、岸边野花和被阳光烘烤过的古老石墙的味道。
走进那座连接陆地与半岛的石头拱门，时间仿佛立刻慢了下来。主街不算宽，两旁是蜜糖色的石头房子，阳台上垂下怒放的三角梅。当地人骑着自行车叮铃铃地穿过，手里提着刚买的面包。老先生们聚在广场的咖啡馆外，喝着浓缩咖啡，声音不大地争论着一场足球赛。这里不像一个纯粹的景点，而是一个活着的、呼吸着的社区。生活的烟火气与八百年的历史遗迹毫无隔阂地交织在一起：你可能在去买冰淇淋的路上，一抬头就望见了城堡高耸的、带着垛口的塔楼。
而它最核心的魅力，正是这种“双重性”。你既可以像一个历史探索者，沉浸在中世纪城堡的雄浑与宫殿壁画的故事里；又可以立刻切换成一个纯粹的度假者，在湖滨的露天餐厅点一盘用当天捕捞的湖鱼做的意面，看着夕阳把整片湖水染成金红色。站在城堡的塔顶，360度的视野是无与伦比的：一边是碧波万顷的湖面，岛屿和远处的山峦像淡淡的水墨画；另一边，是翁布里亚托斯卡纳交界处那绵延起伏、种满了橄榄树和葡萄园的温柔丘陵。那一刻，你会深深理解，为什么几个世纪以来，人们都愿意为争夺和守护这片土地而战。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你得先忘掉那些挤满游客的著名湖泊。当我第一次把车停在路边，徒步走向卡斯蒂廖内时，眼前豁然开朗的景象让我直接屏住了呼吸——它不是建在湖边，而是像一艘巨大的石船，优雅地“驶入”了翡翠色的特拉西梅诺湖中。三面环水，只有一条细细的陆地脖颈与外界相连。湖风带着水藻的清新和一丝凉意扑面而来，耳边是水波轻轻拍打古老石基的哗哗声，还有远处帆船桅杆的细微叮当声。空气中混合着湖水、岸边野花和被阳光烘烤过的古老石墙的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进那座连接陆地与半岛的石头拱门，时间仿佛立刻慢了下来。主街不算宽，两旁是蜜糖色的石头房子，阳台上垂下怒放的三角梅。当地人骑着自行车叮铃铃地穿过，手里提着刚买的面包。老先生们聚在广场的咖啡馆外，喝着浓缩咖啡，声音不大地争论着一场足球赛。这里不像一个纯粹的景点，而是一个活着的、呼吸着的社区。生活的烟火气与八百年的历史遗迹毫无隔阂地交织在一起：你可能在去买冰淇淋的路上，一抬头就望见了城堡高耸的、带着垛口的塔楼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最核心的魅力，正是这种“双重性”。你既可以像一个历史探索者，沉浸在中世纪城堡的雄浑与宫殿壁画的故事里；又可以立刻切换成一个纯粹的度假者，在湖滨的露天餐厅点一盘用当天捕捞的湖鱼做的意面，看着夕阳把整片湖水染成金红色。站在城堡的塔顶，360度的视野是无与伦比的：一边是碧波万顷的湖面，岛屿和远处的山峦像淡淡的水墨画；另一边，是翁布里亚托斯卡纳交界处那绵延起伏、种满了橄榄树和葡萄园的温柔丘陵。那一刻，你会深深理解，为什么几个世纪以来，人们都愿意为争夺和守护这片土地而战。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯蒂廖内-德尔拉戈`} />
                <InfoRow label="英文名称" value={`Castiglione del Lago`} />
                <InfoRow label="正式名称" value={`Castiglione del Lago`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`卡斯蒂廖内-德尔拉戈（佩鲁贾省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座半岛上的堡垒曾是控制整个特拉西梅诺湖盆地及连接托斯卡纳与翁布里亚要道的战略锁钥。`} />
                <InfoRow label="建筑特色" value={`一座从碧蓝湖水中升起的、拥有五边形轮廓和巍峨塔楼的中世纪城堡与宫殿复合体，完美融合了军事防御与文艺复兴贵族的居住美学。`} />
                <InfoRow label="建筑风格" value={`以中世纪军事建筑为基底，并在文艺复兴时期由当时顶尖的建筑师与画家赋予了曼妙的内饰与宫殿扩建，呈现哥特式与早期文艺复兴风格的和谐交融。`} />
                <InfoRow label="文化价值" value={`它是意大利“慢生活”精髓与深厚历史层理的活态博物馆，见证了从伊特鲁里亚到文艺复兴的湖岸文明变迁。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇区域全天开放。罗卡城堡与宫殿博物馆开放时间通常为夏季（4月至9月）9:30-19:00，冬季（10月至3月）10:00-17:00，周一多数闭馆。具体时间随季节小幅调整，建议出行前查看官网确认。部分节假日如圣诞节上午、元旦上午可能关闭。`} />
              <InfoRow label="门票价格" value={`进入古镇免费。罗卡城堡与德拉科贾宫殿联票约为10欧元。优惠票（学生、65岁以上老人）约为8欧元。12岁以下儿童在成人陪同下通常免费。每月第一个周日或有免费开放日政策，建议提前查询。`} />
              <InfoRow label="地址" value={`Piazza Gramsci, 1, 06061 Castiglione del Lago PG, Italy`} />
              <InfoRow label="交通方式" value={`从最近的佩鲁贾圣弗朗西斯机场驾车约50分钟可达。从罗马或佛罗伦萨乘坐火车至丘西-基安蒂车站，然后转乘地区巴士（E440或E441线，约30分钟车程，班次每小时1-2班，需提前在车站酒吧或通过巴士公司App购票）直达古镇入口。自驾是最便捷的方式，从A1高速公路瓦尔迪基阿纳出口驶出，沿SP308公路行驶约20分钟，古镇外有数处付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这片伸入湖中的土地，命运早已被地理注定。早在公元前，伊特鲁里亚人就看中了它的战略价值，在此建立了据点，控制着湖上的贸易与航行。你可以想象，独木舟和早期帆船在湖面往来，而这个半岛就像一座天然的灯塔和堡垒。罗马人来了又去，中世纪的风云则真正塑造了它的筋骨。在教皇与帝国、周边城邦无休止的拉锯战中，这座湖中要塞成了兵家必争之地。十三世纪，在当时主宰者佩鲁贾的命令下，人们开始修筑我们今天看到的罗卡城堡的核心部分。那五边形的设计非常聪明，最大限度地利用了狭长的半岛地形，每一面墙都直面湖水或陆地，易守难攻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的石墙见证过惨烈的围攻，也经历过相对和平的繁荣。命运的转折点在十六世纪到来。教皇朱利叶斯三世将它赐给了他的妹妹，随后又传给了她的女儿，并授予其“德拉科贾”的贵族头衔。这位女继承人嫁给了一位来自佛罗伦萨显赫家族——德·美第奇家族的成员。是的，就是那个文艺复兴的金色家族。于是，城堡不再是纯粹的军事堡垒，它需要满足一位文艺复兴贵妇对美与舒适的追求。她请来了著名的建筑师和画家（比如与瓦萨里齐名的拉扎里），在城堡旁增建了华丽的宫殿，并在内部装饰了精美的壁画长廊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那些壁画描绘着神话、战争和寓言的场景，光线从高大的窗户透进来，照亮画中人物的衣袂，仿佛能听到丝绸的窸窣声。这个时期，城堡变成了一个文化与权力的沙龙，湖光山色成了宫廷生活的华丽背景。你可以想象，贵族们在这里举办宴会，诗人吟诵，音乐家演奏，而窗外就是意大利第四大湖的浩渺烟波。此后的几百年，它历经易主、修缮，一度有些没落，但骨架始终屹立不倒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到近代，人们重新发现了它无与伦比的历史与自然价值。它不再需要扮演要塞或宫殿，而是成为了所有人都可以共享的遗产。如今，城堡的塔楼里可能正在举办一场当地艺术家的画展，而城墙下的湖岸，孩子们在欢笑嬉水。战争与荣光的回声，最终融化在了翁布里亚温和的日光与平静的湖浪声中，成了小镇背景音里最深沉的一个音符。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正感受这里的灵魂，请务必安排一整天。建议在上午九点半左右抵达，这时旅行团还未涌入，阳光也正好温柔。从陆地方向的停车场步行进入古镇，先感受生活气息，再深入探索历史的厚重，最后以湖畔的慵懒时光收尾。整体节奏应该是“慢-探-慢”，上午用两到三小时细细游览城堡与宫殿内部，午后在迷宫般的小巷随意穿梭，傍晚则将时间完全交给湖景与夕阳。这样的安排能让你同时领略其作为历史纪念碑与生活家园的双重魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季午后湖滨蚊虫较多，建议备好防蚊液。古镇内很多小巷是陡峭的台阶，请务必穿一双舒适防滑的鞋子。镇上的餐厅午休时间较长（通常下午2点到7点不提供正餐），只有酒吧提供简单零食，规划用餐时间需留意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主城门“圣玛丽亚门”进入，立刻右转沿着古老的城墙步道走，感受湖风拂面并眺望整个半岛与湖泊相连的独特地理全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接前往罗卡城堡的售票处，买票后先登上五边形城堡的最高塔楼，在晨光中独占那360度无死角的震撼视野，将湖泊、岛屿和远山尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢走下塔楼，仔细参观城堡内的军事展览和地下蓄水池，然后通过连接桥进入文艺复兴风格的德拉科贾宫殿，在静谧的壁画长廊里寻找美第奇家族的纹章与神话故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿出来，回到小镇主街，随意钻进一条通往湖边的小巷，那些挂着晾衣绳的庭院和爬满藤蔓的墙角藏着最地道的意大利日常风景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`根据饥饿程度，在主广场或某条小巷里找一家有当地老人光顾的饮食店，点一份“Tagliatelle al pesce di lago”（湖鱼宽面）当作午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后前往湖滨的“湖畔步行道”，从水面上回望城堡雄姿，找个长椅坐下，看天鹅游弋，彻底放空自己。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果季节合适（通常是夏季），可以走到小镇尽头的码头，买一张船票，乘船游览湖心岛，从湖中央欣赏城堡的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时，务必回到城堡附近的城墙或湖边开阔地，准备好相机和心情，见证夕阳将古老的石墙、窗户和整个湖面点燃成金红色的魔幻时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡塔楼顶层环形垛口处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前，利用垛口作为天然画框，拍摄湖泊与远山的全景，将古老的石头与现代的帆船同时纳入镜头，故事感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从湖对岸的“沙滩区”远眺`}</h4>
                  <p className="text-sm text-gray-700">{`下午顺光时分，使用长焦镜头压缩空间，可以拍到半岛上古堡建筑群倒映在湖水中、仿佛悬浮于碧波之上的梦幻画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`德拉科贾宫殿的壁画长廊尽头窗户`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光射入时，站在长廊内，以精美的壁画为前景，透过古老的石窗拍摄窗外生机勃勃的古镇屋顶与蓝天，形成历史与当下的对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主街通往湖边的某条陡峭台阶小巷`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，蹲低机位向上拍摄，让饱经风霜的石阶充满画面，引导视线至小巷尽头那一方蔚蓝的湖水，极具纵深感与生活气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`古镇陆路入口的拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚华灯初上时，从镇内向外观望，以拱门为框，拍摄外面现代化道路与车辆的光影，形成一种穿越时空的戏剧性对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机需极其谨慎，城堡及周边为受保护历史区域，飞行前务必查询当地最新法规并避开人群。拍摄当地居民，尤其是老人与孩童，请务必先微笑示意并获得默许，尊重他们的隐私与宁静。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖景民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在古镇城墙内一栋经过精心修复的古老石屋里，房东可能是一位退休的历史老师，早餐会在爬满葡萄藤的小露台上进行，抬眼便是波光粼粼的湖面。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色庄园体验`}</h4>
                  <p className="text-sm text-green-800">{`距离古镇几分钟车程、坐落在橄榄园中的乡村农庄，房间充满质朴的托斯卡纳-翁布里亚风情，晚餐品尝主人自制的橄榄油和农场出产的食材，夜晚安静得只能听到虫鸣。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于湖畔最佳位置的一座现代风格设计酒店，拥有无边泳池和全景露台酒吧，房间落地窗将特拉西梅诺湖变成了一幅巨大的动态壁画，适合追求极致景观与舒适度的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷住所`}</h4>
                  <p className="text-sm text-purple-800">{`古镇入口处由家族经营的小型旅馆，房间干净明亮，老板热情好客，会给你手绘美食地图，步行两分钟即可融入古镇的街巷，性价比极高。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和重大节庆（如九月的湖鱼节）期间住宿非常紧俏，务必提前数月预订。选择古城内住宿需注意，部分古老建筑没有电梯，且停车位在城外，但沉浸感无与伦比。周边乡村地区治安极好，夜晚独自散步也充满安全感。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡斯蒂廖内好多天了，但我闭上眼，依然能清晰地感觉到那里湖风的湿度，舌尖仿佛还残留着白葡萄酒的微酸和湖鱼的鲜甜。这个地方带给我的，远不止一张美丽的明信片风景。它更像一个关于时间如何与自然和解的温柔寓言。坚固的堡垒最终向柔美的湖水敞开了怀抱，战争的工事变成了欣赏日落的最佳看台，贵族的宫殿里如今回响着普通孩子的笑声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求“更快”、“更高效”的世界里，卡斯蒂廖内固执地保持着它的“慢”。这种慢，不是落后，而是一种深植于土地和湖水的从容。它让你相信，有些美好需要你用脚步去丈量狭窄的巷子才能发现，有些震撼需要你静静等待夕阳一寸寸爬过古老的石墙才能领略。它不试图用喧嚣的景点填满你的每一分钟，而是慷慨地给你大把的空白——在湖边发呆的空白，在咖啡馆观察路人的空白，在星空下聆听湖水私语的空白。正是这些空白，让你真正地呼吸，思考，并最终将一段旅程内化为生命记忆里沉静而有力的一部分。如果你厌倦了清单式的打卡旅行，渴望一次真正走进风景、也走进当地人生活节奏的深度体验，那么这个长在湖心里的中世纪宝石，绝对值得你专程而来，并为之停留。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/orvieto" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔维耶托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orvieto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ragusa" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉古萨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ragusa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viterbo-papal-palace-medieval-quarter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维泰博（教皇宫及中世纪区）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viterbo (Papal Palace and Medieval Quarter)</p>
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
