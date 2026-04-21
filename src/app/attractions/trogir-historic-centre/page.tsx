import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特罗吉尔历史中心 Trogir｜亚得里亚海的活化石，被时光遗忘的石岛之城 - 最佳欧洲景点',
  description: '想象一下，你把车停在大陆这边，步行穿过一座短短的石桥，脚下是翡翠般透亮的亚得里亚海水。不过几十步的距离，就像穿过了一道无形的时空门。空气的味道瞬间变了——海风的咸鲜里，混入了古老石墙被烈日晒过后散发出的、略带尘土气的温暖石头味，还有从窄巷深处飘来的、咖啡和新鲜烤鱼的隐约香气。你的脚下不再是柏油路，而...',
}

export default function TrogirHistoricCentrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '克罗地亚', href: '/destinations/croatia' },
            { label: '特罗吉尔', href: '/destinations/croatia' },
            { label: '特罗吉尔历史中心', href: '/attractions/trogir-historic-centre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特罗吉尔历史中心・Trogir・克罗地亚・特罗吉尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你把车停在大陆这边，步行穿过一座短短的石桥，脚下是翡翠般透亮的亚得里亚海水。不过几十步的距离，就像穿过了一道无形的时空门。空气的味道瞬间变了——海风的咸鲜里，混入了古老石墙被烈日晒过后散发出的、略带尘土气的温暖石头味，还有从窄巷深处飘来的、咖啡和新鲜烤鱼的隐约香气。你的脚下不再是柏油路，而是被无数双脚磨得光滑温润的乳白色石灰岩石板，缝隙里长着顽强的青苔。
眼前就是特罗吉尔，一座完完整端坐在小岛上的中世纪城池。它不是废墟，不是遗址，而是一个仍然活着的、心跳平稳的古老生命。你会看到晾在百年老窗外的彩色床单，听到当地老人在广场石阶上用克罗地亚语高声谈论着足球，闻到小餐馆厨房里炖着海鲜汤的浓郁香味。它的魅力不在于某个孤立的雄伟建筑，而在于整体——那些高高低低、紧紧依偎在一起的石头房子，构成了一个错综复杂又无比和谐的迷宫。阳光在这里被切割成碎片，在狭窄的“峡谷”里投下深深浅浅的蓝色阴影，而你，就成了这座活化石城市脉搏的一部分。
最打动人的，是那种亲密的尺度感。这里没有恢弘到让人畏惧的广场，街道窄得几乎可以和对面的邻居握手。你会忍不住用手去触摸那些斑驳的墙壁，感受石头里封存了八个世纪的热度与凉意。每一个转角都可能藏着一段雕刻精美的罗马式门廊，或是一个被鲜花淹没的文艺复兴庭院。这座城市的核心魅力，就在于这种将浩瀚历史压缩进寻常巷陌的魔法——它让你觉得，你不是在参观历史，而是在历史里散步、呼吸、生活。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你把车停在大陆这边，步行穿过一座短短的石桥，脚下是翡翠般透亮的亚得里亚海水。不过几十步的距离，就像穿过了一道无形的时空门。空气的味道瞬间变了——海风的咸鲜里，混入了古老石墙被烈日晒过后散发出的、略带尘土气的温暖石头味，还有从窄巷深处飘来的、咖啡和新鲜烤鱼的隐约香气。你的脚下不再是柏油路，而是被无数双脚磨得光滑温润的乳白色石灰岩石板，缝隙里长着顽强的青苔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`眼前就是特罗吉尔，一座完完整端坐在小岛上的中世纪城池。它不是废墟，不是遗址，而是一个仍然活着的、心跳平稳的古老生命。你会看到晾在百年老窗外的彩色床单，听到当地老人在广场石阶上用克罗地亚语高声谈论着足球，闻到小餐馆厨房里炖着海鲜汤的浓郁香味。它的魅力不在于某个孤立的雄伟建筑，而在于整体——那些高高低低、紧紧依偎在一起的石头房子，构成了一个错综复杂又无比和谐的迷宫。阳光在这里被切割成碎片，在狭窄的“峡谷”里投下深深浅浅的蓝色阴影，而你，就成了这座活化石城市脉搏的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种亲密的尺度感。这里没有恢弘到让人畏惧的广场，街道窄得几乎可以和对面的邻居握手。你会忍不住用手去触摸那些斑驳的墙壁，感受石头里封存了八个世纪的热度与凉意。每一个转角都可能藏着一段雕刻精美的罗马式门廊，或是一个被鲜花淹没的文艺复兴庭院。这座城市的核心魅力，就在于这种将浩瀚历史压缩进寻常巷陌的魔法——它让你觉得，你不是在参观历史，而是在历史里散步、呼吸、生活。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特罗吉尔历史中心`} />
                <InfoRow label="英文名称" value={`Trogir`} />
                <InfoRow label="正式名称" value={`Historic City of Trogir`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`特罗吉尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在希腊、罗马、威尼斯、匈牙利等多重文明层层叠压下幸存并繁荣至今的“城市博物馆”，被誉为亚得里亚海岸最完整、最和谐的罗马-哥特式建筑群典范。`} />
                <InfoRow label="建筑特色" value={`一座建造在微型岛屿上的完整中世纪城镇，街道布局宛如迷宫，由石灰岩建造的宫殿、教堂、堡垒和民居紧密相连，仿佛从海中生长出来的石头花园。`} />
                <InfoRow label="建筑风格" value={`以罗马式和哥特式风格为主导，并完美融合了文艺复兴、巴洛克乃至威尼斯哥特式的华丽元素，展现了从公元3世纪至今连续的建筑演进史。`} />
                <InfoRow label="文化价值" value={`不仅是克罗地亚，更是整个地中海地区城市连续性发展的杰出例证，其城市规划与建筑艺术深刻体现了东西方文明在此交汇与融合的漫长历史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`整个历史中心是开放式的公共区域，24小时可自由漫步。主要室内景点如圣劳伦斯大教堂开放时间一般为夏季（4月至10月）上午9点至晚上8点，冬季（11月至3月）时间缩短，通常为上午9点至下午4点。博物馆、美术馆等通常在周一闭馆。具体时间建议出行前查阅官网，夏季常有延长开放至深夜的文化活动。`} />
              <InfoRow label="门票价格" value={`进入特罗吉尔老城区本身完全免费。各独立景点单独售票。核心景点圣劳伦斯大教堂钟楼门票约40克罗地亚库纳（约5.3欧元），登塔可俯瞰全景。卡梅尔伦戈堡垒门票约30库纳。购买联票通常更划算，约60库纳可包含2-3个主要景点。学生、儿童及团体有优惠，克罗地亚库纳为主要流通货币，欧元在许多商铺也被接受。`} />
              <InfoRow label="地址" value={`Historic City of Trogir, 21220 Trogir, Croatia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是斯普利特机场（SPU），距离特罗吉尔仅约6公里。从机场出发最便捷的方式是乘坐出租车，车程约15分钟，费用约100-150库纳。也可搭乘37路公共巴士，约30分钟可达特罗吉尔巴士总站。从克罗地亚首都萨格勒布或沿海城市杜布罗夫尼克出发，可乘坐舒适的长途巴士，班次频繁，从斯普利特到特罗吉尔的车程约30分钟。自驾游客可将车停在老城外指定的停车场，步行过桥进入这座石岛。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特罗吉尔的故事，要从公元前3世纪说起。那时候，希腊的殖民者从维斯岛渡海而来，看中了这个紧挨着大陆的小岛。他们给它起名“Tragurion”，意思是“山羊岛”。选择岛屿定居是典型的希腊智慧——易于防守，又能控制海上贸易路线。石头城墙从那时就开始垒砌，奠定了这座城最初的模样。罗马人到来后，它继续繁荣，成为达尔马提亚省一个重要的港口。然而，真正的转折点要等到公元7世纪，斯拉夫人大举涌入巴尔干，大陆上的罗马城市萨罗纳（今斯普利特附近）居民为了躲避战乱，纷纷逃到这个易守难攻的小岛上。这次逃亡，意外地让特罗吉尔成了古典罗马城市文明在这片海岸得以延续的火种。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了中世纪，特罗吉尔成了各方势力争夺的香饽饽。它先后臣服于匈牙利王国、克罗地亚本土贵族，但最深刻塑造其面貌的，是来自亚得里亚海对岸的威尼斯共和国。从1420年开始，威尼斯人统治了这里近四个世纪。你可以把威尼斯想象成一位极其富有且品味挑剔的“房东”。他们带来的不仅是政治控制，更是无与伦比的财富、艺术眼光和建筑技术。本地最显赫的贵族家族，比如著名的Ćipiko和Fanfogna家族，竞相聘请来自威尼斯、托斯卡纳的建筑师和雕塑家，在岛上有限的土地上兴建豪华宫殿和公共建筑。我们今天看到的那些华丽无比的威尼斯哥特式三联窗、精雕细琢的玫瑰花窗、气派的贵族府邸门楣，大多是这个“黄金时代”的产物。圣劳伦斯大教堂那令人惊叹的罗马式大门，由当地大师拉多万在1240年创作，被誉为克罗地亚中世纪石刻艺术的巅峰，也正是这个繁荣时期的自信写照。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，历史从不是一帆风顺。奥斯曼土耳其帝国的扩张阴影始终笼罩在巴尔干上空。为了抵御来自陆地的威胁，威尼斯人在15世纪加固了城墙，并在岛屿的东南角建造了那座雄壮的卡梅尔伦戈堡垒。你站在堡垒上就能明白其战略意义——它牢牢扼守着通往城市港口的海道。特罗吉尔就像一颗坚韧的石头，在威尼斯盾牌的保护下，抵挡住了奥斯曼的浪潮，使其独特的文化得以保全。威尼斯统治结束后，它又经历了奥匈帝国、南斯拉夫等时期，但城市的核心结构奇迹般地未曾遭受大规模战争破坏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进今天的特罗吉尔，你看到的是一部层叠的史书。地下可能埋着希腊城墙的基石，地面的街道规划承袭自罗马，两旁矗立着中世纪和文艺复兴的宅邸，而巴洛克式的教堂钟楼则为其天际线画上最后一笔。这种跨越两千多年、连续不断且清晰可见的层次感，正是它被联合国教科文组织列入世界遗产名录的核心原因。它不是某个时代的“主题公园”，而是一部用石头写成的、关于生存、适应与美的编年史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味特罗吉尔，建议你在岛上住一晚，用一个完整且悠闲的白天来探索。最佳抵达时间是上午九点之前，那时游轮带来的一日游大军还未登岸，老城还属于本地居民。整体耗时约6-8小时，节奏宜慢不宜快。上午专注于核心建筑和博物馆，下午则留给迷失街巷和享受海滨时光。这样的安排让你既能领略其艺术精华，又能感受它日常生活的韵律，傍晚时分更能独享古城在金色夕阳下的静谧之美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（7-8月）上午10点后至下午4点间是游轮客高峰期，主广场和教堂会非常拥挤，建议利用这个时间去僻静小巷或堡垒。
穿一双绝对舒适防滑的平底鞋，老城的石板路历经数百年打磨，非常光滑，尤其在雨后。
许多小餐馆只收现金（克罗地亚库纳），虽然欧元也通用，但用库纳结算往往更划算。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大陆通过那座古老的石桥（“小桥”）进入老城，首先在城门塔楼下停留，仰头看看威尼斯飞狮的徽记，摸一摸冰凉厚重的木门`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向城市的心脏——圣约翰·乌尔希尼广场，在清晨柔和的阳光下，好好端详拉多万大师创作的教堂西门，数一数那些栩栩如生的亚当夏娃和月历浮雕人物`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入圣劳伦斯大教堂，一定不要错过攀爬那座狭窄的钟楼，在顶端迎着海风俯瞰整个红色屋顶的迷宫和远处碧蓝的海峡`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂出来，随意拐进任何一条吸引你的小巷，比如Gradska ulica，用手掌感受两侧贵族宫殿墙壁上各种风格的雕刻和褪色的家族纹章`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找并参观那座坚固的卡梅尔伦戈堡垒，站在垛口想象威尼斯士兵在此守望，同时这里也是拍摄老城全景与大海的绝佳角度`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐时间，找一家藏在巷子深处或有滨海露天座位的Konoba（传统小餐馆），点一份用橄榄油和香草烹饪的墨鱼饭或新鲜烤鱼`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午将时间完全交给“迷路”，从主街岔开，探索那些只有一人宽的寂静巷道，留意那些充满生活气息的庭院、小画廊和手工艺作坊`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前，沿着老城北侧的滨海大道（Riva）散步，看本地人喝着咖啡闲聊，游艇缓缓归港，灯火逐一亮起，倒映在平静如镜的海面上`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`卡梅尔伦戈堡垒顶层西侧垛口`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，将堡垒本身的石墙作为前景框架，捕捉老城一片暖红色的屋顶、教堂钟楼与远处黛青色山峦和金色海面的层次全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣劳伦斯教堂钟楼顶端`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，以360度环绕拍摄，重点捕捉迷宫般的街巷肌理、庭院内星星点点的绿植以及船只往来如梭的海峡动态。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从大陆通往老城的石桥中段`}</h4>
                  <p className="text-sm text-gray-700">{`蓝调时刻（日落后天空将暗未暗时），使用三脚架长曝光，拍摄灯火初上的老城倒映在平静海水中的对称画面，宛如海上宫殿。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Gradska ulica 巷道深处`}</h4>
                  <p className="text-sm text-gray-700">{`正午当阳光直射入窄巷时，寻找光影切割最强烈的角度，拍摄被强烈明暗对比塑造出的建筑立面细节与行人剪影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城北侧Riva滨海步道`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时分，以棕榈树和彩色阳伞为前景，拍摄停满游艇的港口与背后层次分明、沐浴在阳光下的古老城墙与宅邸。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用广角镜头可以更好地捕捉狭窄街巷的纵深感与建筑的全貌，长焦镜头则适合从堡垒远距离压缩空间，突出建筑的密集感。`}</li>
                <li>• {`尊重当地居民隐私，拍摄阳台、庭院内景时最好先征得同意，避免使用闪光灯惊扰他人。`}</li>
                <li>• {`无人机飞行在历史中心上空有严格限制，需提前查询当地法规，通常禁止在保护区内起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城城墙内由古老石屋改造的温馨公寓，主人可能就住在楼上，会给你手绘地图并推荐只有本地人才知道的小餐馆，夜晚听着窗外隐约的海浪声入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`位于主广场旁一栋15世纪贵族宫殿内的精品酒店，房间保留了原始的石头拱顶和木梁，现代化设施隐藏其中，清晨打开窗就是教堂的钟声与无人的广场。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在老城对岸大陆海滨的五星级酒店，拥有直面世界文化遗产全景的绝佳露台和无边泳池，既能享受现代奢华，步行五分钟又能瞬间穿越回中世纪。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`避世之选`}</h4>
                  <p className="text-sm text-purple-800">{`租下老城边缘一栋带私人小庭院的历史住宅，院子里有棵无花果树，你可以像当地人一样去早市买海鲜回来烹饪，享受真正的“岛民”生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内酒店和公寓通常不设电梯，且隔音效果一般（古老的石头结构），但地理位置无与伦比。对睡眠环境要求极高或携带大件行李的游客，可考虑对岸大陆的酒店。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季房源极其紧张，尤其是周末，务必提前数月预订。冬季许多家庭经营的公寓可能歇业。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`无论住在城内城外，治安都很好，但老城夜晚巷道照明较暗，建议结伴而行。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特罗吉尔时，我的手里仿佛还留着那些石灰岩墙壁的触感——不是冰冷的，而是一种经历了无数个地中海夏日烘烤与海风浸润后的、温润的凉。这座城市教给我的，不是某种宏大的历史叙事，而是一种关于“延续”的温柔力量。它没有被封存在玻璃柜里，也没有被改造成纯粹的旅游布景。孩子们依然在圣马可教堂的台阶上追逐，老人们依然在同样的广场长椅上看着同样的潮起潮落。历史在这里不是过去式，而是现在进行时，是日常生活的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求新奇与刺激的快节奏世界里，特罗吉尔提供了一种截然不同的旅行价值：它让你慢下来，不仅仅是脚步，更是心境。它不需要你匆匆打卡，而是邀请你成为它绵长呼吸中的一个音节。每一位热爱深度游的旅人都应该来这里，不是为了收集又一个世界遗产的头衔，而是为了体验一种可能性——一种文明如何在变迁中坚守其内核，如何将巨石般的往事化为轻盈生活背景的可能性。站在那座小桥上回望，你会明白，有些地方存在的意义，就是为了提醒我们：最美的人类故事，往往就写在这些依然跳动着的、古老的石头心里。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
