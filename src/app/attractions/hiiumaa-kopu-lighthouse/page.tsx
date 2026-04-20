import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希乌马岛凯普灯塔自由行全攻略：波罗的海最古老灯塔与隐秘岛屿深度游指南',
  description: '探索爱沙尼亚Hiiumaa岛与Kõpu Lighthouse（凯普灯塔）。这份深度游攻略涵盖凯普灯塔打卡攻略、交通贴士与隐秘岛屿的避坑指南，带你发现波罗的海的粗犷灵魂。',
}

export default function HiiumaaKopuLighthousePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '希乌马岛（凯普灯塔）', href: '/attractions/hiiumaa-kopu-lighthouse' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`希乌马岛（凯普灯塔）・Hiiumaa (Kõpu Lighthouse)・爱沙尼亚・希乌马县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你正在地图上寻找一个名字陌生、却能让心跳慢下来的地方，那么爱沙尼亚的希乌马岛（Hiiumaa）绝对值得你为它划上一个重重的星标。作为爱沙尼亚的第二大岛，它却像个被时光精心藏起来的秘密，远离主流旅游路线的喧嚣。而我今天这份**希乌马岛私藏旅游攻略**，核心就是带你登上岛屿心脏位置的那座巨石——凯普灯塔（Kõpu tuletorn）。它可不是普通的灯塔，它是整个波罗的海地区现存最古老、仍在使用的航海灯塔，始建于500多年前！想象一下，站在由巨大石灰岩块垒成的粗犷塔身下，海风裹挟着松脂和咸腥气扑面而来，那种穿越历史的震撼，是任何现代景点都无法比拟的。这份**自由行指南**，就为你拨开波罗的海的迷雾，告诉你如何抵达这片秘境，怎样才能真正触摸到这座灯塔的石头所讲述的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你正在地图上寻找一个名字陌生、却能让心跳慢下来的地方，那么爱沙尼亚的希乌马岛（Hiiumaa）绝对值得你为它划上一个重重的星标。作为爱沙尼亚的第二大岛，它却像个被时光精心藏起来的秘密，远离主流旅游路线的喧嚣。而我今天这份<strong>希乌马岛私藏旅游攻略</strong>，核心就是带你登上岛屿心脏位置的那座巨石——凯普灯塔（Kõpu tuletorn）。它可不是普通的灯塔，它是整个波罗的海地区现存最古老、仍在使用的航海灯塔，始建于500多年前！想象一下，站在由巨大石灰岩块垒成的粗犷塔身下，海风裹挟着松脂和咸腥气扑面而来，那种穿越历史的震撼，是任何现代景点都无法比拟的。这份<strong>自由行指南</strong>，就为你拨开波罗的海的迷雾，告诉你如何抵达这片秘境，怎样才能真正触摸到这座灯塔的石头所讲述的故事。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`希乌马岛（凯普灯塔）`} />
                <InfoRow label="英文名称" value={`Hiiumaa (Kõpu Lighthouse)`} />
                <InfoRow label="正式名称" value={`Hiiumaa (Kõpu Lighthouse)`} />
                <InfoRow label="国家" value={`爱沙尼亚`} />
                <InfoRow label="城市" value={`希乌马县`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`凯普灯塔的历史地位，必须放在整个北欧海上贸易的大棋盘上来看。它建于1531年，那个年代，强大的汉萨同盟正掌控着波罗的海的贸易命脉。来自塔林、里加、吕贝克等城市的商船满载着毛皮、蜂蜡和木材穿梭于此，但希乌马岛附近遍布的暗礁和浅滩，是令人闻风丧胆的“船舶墓地”。为了保障这条经济动脉的安全，建造一座灯塔成了迫在眉睫的事。它的建立，不仅是航海技术史上的里程碑，更是中世纪北欧城市同盟经济与政治实力的直接体现。在随后近五个世纪里，它目睹了瑞典帝国与沙俄的争霸，经历了两次世界大战的炮火，甚至在苏联时期被涂上迷彩用作军事观察点。它就像一个沉默而坚定的历史坐标，它的光，穿透的不仅是海上的夜雾，更是爱沙尼亚这个民族在强权夹缝中求生存、最终重获独立的漫长岁月。每一次灯光闪烁，都是对一段往事的无声述说。`} />
                <InfoRow label="建筑特色" value={`当你第一眼看到凯普灯塔，你可能会脱口而出：“好……粗犷！” 是的，它完全没有后来那些精致灯塔的纤细优雅。它更像一座从大地深处生长出来的岩石堡垒，敦实、强悍，充满原始的生命力。塔身由当地开采的巨大石灰岩毛石砌成，石头未经精细打磨，表面粗糙，布满风蚀和海盐浸染的深色痕迹。石材之间用石灰砂浆填充，缝隙里可能还探出几丛顽强的地衣或苔藓。塔身是四棱柱形，越往上略有收分，但整体依然给人一种稳如磐石的视觉冲击。它的基座格外宽大，仿佛是为了深深扎根于这座岛屿的冰碛土壤中，以对抗波罗的海狂暴的西风。最引人注目的是塔顶：一个漆成鲜红色的圆顶灯室，下面环绕着一圈白色的观测台。红与白的强烈对比，在无垠的蓝天或铅灰色的海天背景下，显得格外醒目而孤独。阳光好的时候，粗糙的石头发着哑光，而顶部那抹红色则像一颗跳动的心脏。`} />
                <InfoRow label="建筑风格" value={`凯普灯塔的建筑风格，可以归入**晚期哥特式**的实用主义变体。虽然它是一座功能至上的航海建筑，但依然能看到哥特式精神的影子。哥特式建筑追求垂直升腾与光线，而凯普灯塔的“垂直性”体现在它超越周围森林树冠的、纯粹的物理高度（36.5米）上，它的存在就是为了将光投向更高更远的海面。它的粗石垒砌技法，与中世纪欧洲许多城堡、教堂的基础部分一脉相承，强调坚固与防御性——在这里，防御的对象是恶劣的自然环境。另一个显著的哥特式特征体现在其支撑结构上：仔细观察，你会发现塔身四角有厚重的、阶梯状向上收拢的扶壁。这些扶壁不仅增强了结构稳定性，其层层叠叠的造型也带有哥特式扶壁的装饰性雏形，只不过在这里被极度简化，充满了北欧的冷峻与力量感。它没有飞扶壁的轻盈，却有如古树根系般牢牢抓住大地的力量，是一种“大地哥特”风格的独特诠释。`} />
                <InfoRow label="文化价值" value={`对于爱沙尼亚人，尤其是希乌马岛的居民来说，凯普灯塔远不止一个导航工具。它是岛屿的“精神图腾”，是家园的象征。在爱沙尼亚广为传唱的民歌和诗歌中，灯塔的光常被比喻为指引、希望和不变的守望。在苏联占领时期，这片海岸线成为封闭的军事区，灯塔的光芒一度只服务于特定的机器。然而，正是这种对比，使得在1991年爱沙尼亚恢复独立后，重新向公众开放的灯塔之光，具有了双重意义：它既是物理上的安全指引，更是民族自由与开放的隐喻。如今，灯塔管理员（通常是一个传承数代的家庭）的角色备受尊敬，他们不仅是技术员，更是这份文化遗产的守护者。每年，有许多人来到灯塔脚下，不仅为风景，也为完成一种心灵上的仪式——触摸古老岩石，感受一种历经沧桑却依然屹立的韧性，这正是凯普灯塔在现代社会传递的最核心的文化价值：关于坚持、守望与回归。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 希乌马岛一日游终极路线与必打卡攻略：从凯普灯塔到隐秘海岸`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行精华步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份**自由行指南**为你规划一条紧凑而充实的希乌马岛核心区一日游路线。**上午**：建议从岛屿主要渡轮码头凯尔德拉（Kärdla）出发，租车或乘坐预定的旅游巴士（夏季有班车）前往凯普灯塔。车程约40分钟。把整个上午留给灯塔！先别急着登塔，绕着巨大的塔基走一圈，感受它的磅礴气势。然后购买门票（很便宜），攀爬那115级古老的内部石阶登顶。在塔顶的观景平台，360度环视，一边是深蓝色的波罗的海，一边是希乌马岛无垠的森林和田野，景色极为壮阔。**中午**：在灯塔附近的小咖啡馆（通常夏季开放）简单用餐，尝尝爱沙尼亚特色的黑麦面包和鱼汤。**下午**：从灯塔出发，向西沿着标记清晰的森林小径徒步约20分钟，你会到达一片名为“Kõpu半岛”的迷人海岸。这里巨石嶙峋，海浪拍岸，人迹罕至，是静坐和拍照的绝佳地点。之后返回停车场，如果时间充裕，可以驱车前往不远处的**Kõpu森林小径**，那里有宁静的湖泊和古老的森林氛围。**傍晚**：驱车返回凯尔德拉港，在港口边的餐厅享用一顿以新鲜鲱鱼或鳕鱼为主的晚餐，看着夕阳将海面染成金色，完美结束这一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>塔基的“时间胶囊”</strong>：在灯塔入口附近，仔细寻找那些垒砌的巨大基石。许多石头上刻有古老的标记和日期，有些是建造者的记号，有些是后世维修时留下的。用手触摸那些深深的刻痕，冰凉粗糙的触感直接连接着16世纪石匠的掌心温度。阳光斜射时，这些刻痕会产生深邃的阴影，仿佛石头在开口诉说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>螺旋石梯的孔洞之光</strong>：攀登内部螺旋石梯时，注意观察塔壁厚达数米的墙体上开凿的细小窗洞。它们不是为观景，而是为通风和减重。当你在昏暗的梯道中旋转上行，一束束强烈的光线从这些不规则的小孔中穿刺而入，在空气中形成清晰的光柱，尘埃在其中飞舞。这种光影游戏，让攀登过程充满了神圣的仪式感，仿佛正在走向光的源头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>铜质风向标与海鸥</strong>：登上塔顶后，别忘了抬头看看灯室上方那枚古老的铜质风向标。它通常被做成公鸡或帆船的造型，在海风中发出细微的、持续的摩擦声。常常有勇敢的海鸥停歇在上面，与你并肩俯瞰苍茫大海。这个动态的细节——旋转的金属、鸣叫的海鸟、不变的石塔——构成了动静结合的绝妙画面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>扶壁与野花的共生</strong>：从远处或近处观察那些粗大的阶梯状扶壁。在石头的缝隙和阶梯平面上，你会看到繁茂的野花、野草甚至小灌木在顽强生长。尤其是夏季，金黄色的野菊或紫色的石楠花点缀在灰黑色的巨石之上，强烈的生命力与古老沉寂的建筑形成温柔而震撼的对比，这是自然与人文历经数百年达成的默契。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>防风与防滑是第一要务</strong>：希乌马岛号称“风之岛”，凯普灯塔所在的开阔半岛更是风口。无论什么季节，尤其是春秋冬三季，<strong>必须</strong>穿防风外套，戴好能固定的帽子。登塔的石阶古老陡峭，有些地方已被磨得光滑，一双<strong>防滑性能好的徒步鞋或运动鞋</strong>至关重要，绝对不要穿凉鞋或皮鞋。夏季也请带一件薄防风衣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>交通规划是最大挑战</strong>：前往希乌马岛需从爱沙尼亚大陆的 Rohuküla 港口乘渡轮至 Heltermaa 港口，车程约1.5小时。<strong>务必提前在塔林或在线预订渡轮船票</strong>，尤其是夏季旺季和周末，当场排队很可能等数小时。岛上公共交通稀疏，最方便的方式是在港口租车或提前联系好当地的出租车/导游服务。将渡轮时刻表研究透彻，是<strong>避坑</strong>的关键一步。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>时间与开放信息</strong>：凯普灯塔的室内部分（登塔）并非全年全天开放。通常旅游旺季（5月至9月）开放时间较长，冬季可能只在周末开放或完全关闭。出发前，务必在可靠的旅游信息网站上确认最新的开放时间，避免吃闭门羹。此外，岛上餐馆和小店在旅游淡季（10月至次年4月）营业非常随机，最好自备一些干粮和水。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>享受孤独，但保持联系</strong>：这里地广人稀，手机信号在森林和某些海岸路段可能不稳定。提前下载好离线地图，告知他人你的大致行程。岛上民风淳朴，治安极好，但基本的旅行安全意识不可或缺。另外，夏季别忘了带驱蚊剂，森林和海岸边的小飞虫相当热情。" }} />
            </div>
          </Section>

          <Section title={`6. 希乌马岛特色住宿与美食攻略：灯塔旁的宁静夜晚`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想在希乌马岛获得沉浸式体验，建议至少住上一晚。灯塔附近没有大型酒店，但散布着极具特色的<strong>民宿和农家乐</strong>。推荐在 Booking 或 Airbnb 上搜索 Kõpu 或 Käina 教区附近的房源。你可以找到由百年老农舍改造的民宿，房间是质朴的木结构，窗外就是牧场和森林，晚上寂静得只能听到风声和虫鸣，星空无比清晰。主人往往会提供自家制作的早餐，包括新鲜的酸奶、浆果和鸡蛋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "餐饮方面，岛上美食的核心是<strong>新鲜、本地、质朴</strong>。在凯尔德拉港，可以尝试餐厅“Vetikatare”，品尝用当天捕捞的波罗的海鲱鱼或鳕鱼烹制的菜肴，搭配本地土豆和酸奶油。另一家值得推荐的是位于古老风车旁的 <strong>“Leigri Guesthouse”</strong>，它提供传统的爱沙尼亚农家菜，如炖猪肉配酸菜和芸豆，分量十足，风味地道。如果只是在灯塔周边，夏季那家小咖啡馆的<strong>越橘派和热巧克力</strong>会是你徒步后最好的慰藉。记住，在这里，美食是环境的一部分，慢下来，才能品出那份属于岛屿的甘甜。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>鲁斯岩（Ristna）与第二座灯塔</strong>：从凯普灯塔沿海岸公路向北驾车约15分钟，可以到达岛屿最西端的鲁斯岩。这里有一座更“现代”（建于1874年）的红色铸铁灯塔，风格与凯普迥异。旁边的<strong>Ristna岬角</strong>风势极大，巨浪拍打礁石的景象非常震撼，是观海和感受自然力量的绝佳地点。这里还有二战时期的军事堡垒遗迹，可以一并探索。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>萨雷马岛过渡点与沉船海岸</strong>：如果你被希乌马岛的宁静迷住，不妨考虑第二天乘短途渡轮（仅需约1小时）前往爱沙尼亚最大的岛屿——<strong>萨雷马岛（Saaremaa）</strong>。两岛之间的渡轮频繁。萨雷马岛拥有中世纪城堡、独特的卡利陨石坑和更多的海岸景观。这种“双岛联游”，能让你更深入地体验爱沙尼亚西部群岛截然不同的风貌，是<strong>深度游</strong>玩家的进阶选择。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "希乌马岛和它守护的凯普灯塔，教会我们的不是征服，而是聆听与守望。它的灵魂，就镌刻在那些粗糙的、被风雨磨平棱角的巨石里，藏在塔顶那束穿透历史迷雾的恒定光芒中——那是一种粗粝的温柔，一种沉默的坚韧。来到这里，你会忘记“打卡”的焦虑，只想坐在古老的石阶上，听风、看海、等一场日落，然后明白，有些地方的存在，就是为了让时间慢下来，让心沉下来。这份粗犷与宁静，就是波罗的海赠予行者最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tartu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔图老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tartu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/seaplane-harbour" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔林水上飞机港</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Seaplane Harbour</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/paide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    派
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">派德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Paide</p>
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
