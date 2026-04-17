import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯波莱托古城深度旅游攻略：悬崖上的中世纪时光漫步指南',
  description: '斯波莱托(Spoleto)深度游攻略，揭秘这座意大利翁布里亚悬崖中古城的必看景点、一日游路线及避坑指南。包含门票交通与美食住宿全攻略。',
}

export default function SpoletoUmbriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯波莱托', href: '/attractions/spoleto-umbria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯波莱托・Spoleto・意大利・斯波莱托`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了罗马和佛罗伦萨的汹涌人潮，今天这份斯波莱托私藏旅游攻略，就带你躲进一个完全不同的意大利。想象一下：你站在翁布里亚的绿色山丘之间，眼前是一座从悬崖上“生长”出来的石头古城，头顶是跨越深谷的千年古桥，脚下是蜿蜒的鹅卵石小巷，安静得只能听见自己的脚步声和远处的钟声。这里就是斯波莱托，一个被时光妥善保管的珍宝。作为你的专属向导，这份自由行指南请收好——它不只告诉你“看什么”，更会带你感受那种“慢慢生活”的意大利灵魂。我们不仅会逛遍地标，还会分享如何完美规划一日游路线，以及那些只有本地人才知道的避开游客的小众角落和实用避坑贴士。准备好，我们要走进中世纪了。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了罗马和佛罗伦萨的汹涌人潮，今天这份斯波莱托私藏旅游攻略，就带你躲进一个完全不同的意大利。想象一下：你站在翁布里亚的绿色山丘之间，眼前是一座从悬崖上“生长”出来的石头古城，头顶是跨越深谷的千年古桥，脚下是蜿蜒的鹅卵石小巷，安静得只能听见自己的脚步声和远处的钟声。这里就是斯波莱托，一个被时光妥善保管的珍宝。作为你的专属向导，这份自由行指南请收好——它不只告诉你“看什么”，更会带你感受那种“慢慢生活”的意大利灵魂。我们不仅会逛遍地标，还会分享如何完美规划一日游路线，以及那些只有本地人才知道的避开游客的小众角落和实用避坑贴士。准备好，我们要走进中世纪了。`}</p>
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
                <InfoRow label="历史地位" value={`斯波莱托的历史厚重感，几乎可以用手触摸。早在公元前7世纪，这里就是翁巴里人的重要定居点。后来罗马人来了，留下了宏伟的剧院和拱门，奠定了城市最初的格局。但让它真正在欧洲历史舞台上留下深刻印记的，是中世纪。公元6世纪后，这里成为强大的伦巴第斯波莱托公国的中心，是连接罗马与北方蛮族王国的重要枢纽，一度与教皇国分庭抗礼。你可以把它想象成中世纪意大利版图上一颗关键的棋子。更戏剧性的是，这里曾两次成为教皇的避难所：13世纪时，教皇无辜三世曾长期驻跸于此，对抗神圣罗马帝国皇帝腓特烈二世。这段历史赋予了斯波莱托超越其规模的宗教与政治影响力。漫步城中，你脚下踩的，可能就是某位教皇或公爵走过的路，这种与重大历史事件直接相连的感觉，是在许多更大城市都难以体会的。`} />
                <InfoRow label="建筑特色" value={`斯波莱托的建筑之美，在于它惊人的“层叠感”和“材料原真性”。最震撼的无疑是那座横跨苔藓谷的庞特 delle Torri（高桥引水渠）。它不是一座普通的桥，而是一座高达76米、长度超过200米的巨型石造引水渠，由无数巨大的方形石灰岩块垒砌而成。走近看，石块的缝隙里长着倔强的野草和小灌木，在阳光下，浅灰色的石壁呈现出蜂蜜色、赭石色到铁锈红的不同色调，那是几个世纪风霜雨雪留下的“包浆”。站在桥拱下方仰望，十个巨大的拱门像巨人的肋骨，分割着天空，光线从拱洞中穿过，形成一道道光瀑，壮观得令人屏息。而古城中心的建筑，则多用本地开采的淡粉色和暖灰色石材，屋顶是典型的意大利赤陶瓦，在翁布里亚清澈的阳光下，整个古城仿佛一块温暖的调色板。`} />
                <InfoRow label="建筑风格" value={`斯波莱托是建筑风格的“活标本”，最突出的是罗马式与哥特式的精妙融合。斯波莱托主教座堂（Duomo di Spoleto） 是完美典范。它的正立面是经典的罗马式风格，朴素而庄严，由一系列盲拱和精美的玫瑰窗构成，底层的大门上方有华丽的浮雕，讲述着圣经故事。但请你一定绕到侧面和后方看看，那里的建筑线条陡然变得轻盈、垂直——这是哥特式风格的影响。教堂内部更是宝藏：地面是典型的科斯马蒂风格几何镶嵌图案（一种中世纪罗马工艺），而穹顶和后殿的壁画则是文艺复兴早期的杰作。通俗点说，你在这座建筑里，能亲眼看到欧洲建筑审美是如何从厚重、防御性的罗马风，向着追求高度、光线和神圣感的哥特风过渡的。这种“混搭”丝毫不觉突兀，反而像一首和谐的复调音乐，记录了不同时代工匠对美的共同追求。`} />
                <InfoRow label="文化价值" value={`对于现代社会和当地人而言，斯波莱托的价值远不止是“历史博物馆”。它是“活着的文化心脏”。自1958年起，这里每年夏天都会举办世界著名的“斯波莱托两个世界艺术节”（Festival dei Due Mondi）。这个艺术节由意大利裔美国作曲家吉安·卡洛·梅诺蒂创立，初衷是连接欧洲（旧世界）与美洲（新世界）的文化。届时，戏剧、歌剧、古典音乐、舞蹈和视觉艺术会填满古城的每个角落——古老的罗马剧院上演先锋戏剧，教堂里举办音乐会，广场变成露天画廊。对当地人来说，这不是给游客看的表演，而是他们生活的一部分，是全城参与的盛事。平日里，古城则保持着舒缓的节奏，咖啡馆里坐着读报的老人，手工艺店铺静静营业。它证明了历史遗产不是发展的阻碍，而是创造现代文化生活的独特舞台，这种将深厚历史与鲜活当代艺术无缝衔接的能力，正是斯波莱托最动人的文化价值。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 斯波莱托一日游完美打卡路线攻略：从古桥到城堡的高效行程`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`自由行精华路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，攻略在手，我们现在就出发！这条一日游路线是我反复走过的精华，既能打卡所有核心地标，又能让你体会古城的悠闲。早上（9:00-12:30），我们从古城外的起点——庞特 delle Torri（高桥）开始。建议打车或乘坐本地小巴士直达桥头，趁晨光柔和、游客最少时，徒步走过这座史诗级的古罗马工程，感受山谷的清风和无敌视野。过桥后，沿着指示清晰的“Giro dei Condotti”步道缓缓上山，这条绿树成荫的小路会把你直接带到罗卡城堡脚下。中午（12:30-14:30），从城堡的侧门进入古城核心区，随便找一家老城墙边的家庭餐馆，点一份用黑松露调味的翁布里亚特色意面“Strangozzi”，配上一杯本地萨格兰蒂诺红酒。下午（14:30-18:00），开始我们的核心区漫步：先去斯波莱托主教座堂广场，在阳光下仔细欣赏它的立面，然后进内部看菲利波·利皮的壁画。接着穿梭于德鲁索拱门、古罗马剧院和圣欧费米亚教堂之间，这些小景点相距不过百米，却能串联起从古罗马到中世纪的历史。最后，登上罗卡城堡的露台，这里是俯瞰整个翁布里亚山谷在夕阳下变成金色的最佳地点。晚上，不必急着离开，在山下的老城找家餐厅享用晚餐，看古城灯光渐次亮起，完美结束一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  高桥的“巨人视角”：别只是远远拍照。一定要走到桥的中间，停下来，扶住古老的石栏。向东北方的苔藓谷深处望去，你会看到一道深邃、被森林覆盖的裂缝，耳边是呼啸而过的山风。转过身，西南方则是层层叠叠、铺满整个山坡的古城全景，红色屋顶在阳光下像一片片鳞甲。这个视角，是当年古罗马工程师和无数旅人曾凝视过的，一种穿越时空的辽阔感会瞬间将你包裹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  主教座堂里的“天使之舞”：进入杜莫大教堂，请径直走到主祭坛后方的半圆形后殿。抬头看穹顶——那是文艺复兴大师菲利波·利皮绘制的《圣母加冕》壁画。仔细看壁画底部那一圈载歌载舞的小天使，他们胖乎乎的脸蛋上洋溢着纯粹的 joy，衣裙飘飞，姿态各异，有的在吹奏乐器，有的仿佛在彼此嬉笑。在庄严肃穆的宗教主题中，这一抹生动至极的世俗欢乐，是利皮留给后世最温暖的礼物，让人看了忍不住微笑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  罗卡城堡的“风之露台”：爬上城堡的最高露台，这里毫无遮挡。傍晚时分，风会变大，吹乱你的头发。眼前是360度的全景画卷：近处是古城错综的屋顶和钟楼，中间是广阔的橄榄园和葡萄田，像绿色的天鹅绒地毯铺向远方，最远处是亚平宁山脉青灰色的剪影。光线每分钟都在变化，云的影子在山谷间缓慢移动。这里没有解说牌，只有风的声音和无敌的风景，是发呆和消化一天见闻的最佳地点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  小巷里的“水声与花香”：在从主座堂去往古罗马剧院的某条小巷（比如Via Brignone），留意脚下的石板路。你会听到清晰的潺潺水声——那是古老的泉水管道仍在工作。声音来自墙壁或地面的某个石雕兽头出水口。墙边往往种着一盆盆鲜红的天竺葵，湿润的空气混合着石头的凉意、泥土的腥气和淡淡的花香，这是斯波莱托最日常、也最迷人的感官记忆，是中世纪供水系统依然活着的证明。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  鞋子！鞋子！鞋子！：这可能是斯波莱托旅游攻略里最重要的一条。古城建在山上，几乎所有路都是凹凸不平的鹅卵石坡道。请务必，百分之百，穿一双防滑、支撑好、穿惯了的舒适步行鞋或运动鞋。高跟鞋、硬底皮鞋、人字拖在这里无异于“刑具”。你的脚会感谢你的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  巧妙规划时间，避开人流与烈日：斯波莱托相对小众，但夏季午后人流会明显增多，尤其是主座堂广场。最佳游览时间是5月、6月、9月和10月的平日，气候宜人。一日游的话，强烈建议早上8:30-9:00就到达高桥，享受宁静的晨光。中午12点到下午3点阳光最烈，正好安排室内参观（如教堂、博物馆）或悠闲午餐。下午4点后再出来探索小巷和城堡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与防盗须知：从罗马或佛罗伦萨过来，火车是最佳选择，车站（Spoleto）在山下新城，需转乘本地红色小巴士（Linea S）或登山缆车（funicolare） 上山到古城（Piazza della Libertà）。缆车班次有限，提前查好时间。自驾的话，古城外有大型付费停车场（如“Piazza Campello”），不要把车开进ZTL（交通限制区）。虽然是安全小镇，但在拥挤的巴士或景点门口，仍需保管好随身背包和钱包，这是意大利任何地方的通用法则。`}</p>
            </div>
          </Section>

          <Section title={`6. 斯波莱托周边住宿与美食攻略：悬崖民宿与松露意面的诱惑`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想真正融入斯波莱托的节奏，不妨考虑住一晚。古城内和周边有几家由古老宫殿或修道院改造的精品酒店和民宿，比如位于核心区的 Hotel San Luca，房间常有古朴的木梁天花板和石墙，早餐露台能看见钟楼。更独特的体验是住在古城边缘的农庄民宿（Agriturismo），开车10-15分钟，就能享受被橄榄园环绕的宁静，夜晚星空璀璨，还能品尝主人自产的橄榄油和葡萄酒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`美食是翁布里亚之旅的高光。午餐推荐主座堂附近的 Osteria del Trivio，它有个可爱的拱顶地下室。必点本地特色：黑松露意面（Tartufo Nero），那种浓郁独特的香气是这片土地的精华；烤乳猪（Porchetta），外皮酥脆，肉质多汁；还有用扁豆和香肠炖煮的 “Zuppa di Farro”（斯佩尔特小麦汤）。想喝点东西，就去Piazza del Mercato（市场广场） 的咖啡馆，点一杯Aperol Spritz，看广场上的本地人聊天，这才是意大利的“甜点”（La Dolce Vita）。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果时间宽裕，强烈推荐从斯波莱托出发进行两个短途探索：1. 皮亚诺高原（Piano Grande） & 诺尔恰（Norcia）：驾车约1小时，进入辽阔如电影场景的高山平原（春季鲜花盛开宛如天堂），终点是“意大利猪肉之城”诺尔恰，这里的熟食店（Norcineria）是肉食者的圣地，可以品尝顶级的火腿、萨拉米和野猪肉制品。2. 特雷维（Trevi）的“橄榄油之路”：驾车向东20分钟，这座被橄榄树林淹没的“悬崖之城”更加宁静，被誉为“翁布里亚的阳台”。可以参观橄榄油博物馆，在古老的榨油坊品尝被誉为“液体黄金”的特级初榨橄榄油。这两个地方能让你从艺术历史之旅，无缝切换到翁布里亚的乡村美食之旅，体验更立体的意大利中部灵魂。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`斯波莱托的灵魂，在于它那份悬崖上的坚韧与宁静。它不像一些古城那样仅供瞻仰，而是将千年的历史石墙、中世纪的虔诚、古罗马的雄浑，与当代的艺术活力和山居的日常烟火，完美地编织在了一起。在这里，你不只是在参观景点，而是在走过一段依然在呼吸的时光。离开时，你带走的不仅是照片，还有山风拂面的感觉、松露的香气，和那种在喧嚣世界之外，找到一处隐秘高地的安心。这份攻略，希望能帮你遇见它最好的样子。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pienza-renaissance-ideal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮恩扎</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pienza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rossano-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗萨诺大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rossano Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alberobello-trulli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔贝罗贝洛圆顶石屋</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alberobello</p>
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
