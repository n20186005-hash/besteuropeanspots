import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特罗吉尔历史古城 Trogir｜克罗地亚被时光封印的“石头之城” - 最佳欧洲景点',
  description: '你第一眼看到特罗吉尔，会觉得它像从海里直接生长出来的一块巨大、温润的琥珀。车子驶过那座短短的、连接大陆与岛屿的石桥，时间立刻被调慢了。扑面而来的是亚得里亚海干燥而温暖的风，混杂着海盐、烤鱼和远处咖啡馆飘来的浓缩咖啡香。阳光是这里真正的主角，它毫不吝啬地倾泻在每一块米白色的石灰岩上，把整座小城烘焙得发...',
}

export default function TrogirHistoricTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '特罗吉尔历史古城', href: '/attractions/trogir-historic-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特罗吉尔历史古城・Trogir・克罗地亚・特罗吉尔（斯普利特-达尔马提亚县）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到特罗吉尔，会觉得它像从海里直接生长出来的一块巨大、温润的琥珀。车子驶过那座短短的、连接大陆与岛屿的石桥，时间立刻被调慢了。扑面而来的是亚得里亚海干燥而温暖的风，混杂着海盐、烤鱼和远处咖啡馆飘来的浓缩咖啡香。阳光是这里真正的主角，它毫不吝啬地倾泻在每一块米白色的石灰岩上，把整座小城烘焙得发亮，墙壁摸上去甚至有种暖烘烘的体温感。
穿过低矮的拱形城门，你便跌入了一个石头的梦境。脚下是千百年来被无数鞋底磨得光滑如镜的石灰岩板路，缝隙里长出倔强的青苔。街道窄得不可思议，仿佛是为了让两旁的古老石屋能互相倾诉秘密。你只需伸开双臂，几乎就能同时触碰到两侧墙壁上雕刻的家族徽章、哥特式的窗棂和文艺复兴式的阳台。光线在这里变成了戏剧家，从狭窄的天空缝隙中斜切下来，在粗糙的石壁上画出明亮与阴影的锋利边界，空气里漂浮着金色的微尘。耳边是慵懒的：本地老人坐在门洞阴影里聊天的克罗地亚语低语、某扇木窗被推开时“吱呀”的呻吟、远处港口渔船引擎“突突”的闷响，还有你自己脚步声在石巷里清晰的回音。
这座城最动人的，是它活着的纹理。它不是一个被真空包装的博物馆。晾晒在阳台上的彩色床单，在巷子口踢足球的孩子，从古老石屋窗户里飘出的炖肉香气，都告诉你这里依然是家。圣劳伦斯大教堂的钟声准时敲响，声音浑厚，像石头自己在歌唱，但并不会打断岸边咖啡馆里人们享受“菲卡”（咖啡休憩）的悠闲。历史在这里不是被供奉的，而是被居住、被使用的日常背景。你会在一个看似普通的门楣上发现一尊精美的文艺复兴圣徒雕像，而它的下方正停着一辆现代自行车。这种时空层叠却毫不违和的质感，是特罗吉尔独有的魔法。
它的核心魅力，就在于这种极致的浓缩与和谐。在仅仅不到一平方公里的孤岛上，你却能步行穿越从公元前3世纪希腊殖民地到威尼斯共和国鼎盛时期的完整历史图层。每一步都是邂逅，每一个转角都是故事。它不像一些宏大景点那样需要你仰视，而是邀请你贴近、触摸、迷路，最后心甘情愿地被它石头的心跳俘获。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到特罗吉尔，会觉得它像从海里直接生长出来的一块巨大、温润的琥珀。车子驶过那座短短的、连接大陆与岛屿的石桥，时间立刻被调慢了。扑面而来的是亚得里亚海干燥而温暖的风，混杂着海盐、烤鱼和远处咖啡馆飘来的浓缩咖啡香。阳光是这里真正的主角，它毫不吝啬地倾泻在每一块米白色的石灰岩上，把整座小城烘焙得发亮，墙壁摸上去甚至有种暖烘烘的体温感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过低矮的拱形城门，你便跌入了一个石头的梦境。脚下是千百年来被无数鞋底磨得光滑如镜的石灰岩板路，缝隙里长出倔强的青苔。街道窄得不可思议，仿佛是为了让两旁的古老石屋能互相倾诉秘密。你只需伸开双臂，几乎就能同时触碰到两侧墙壁上雕刻的家族徽章、哥特式的窗棂和文艺复兴式的阳台。光线在这里变成了戏剧家，从狭窄的天空缝隙中斜切下来，在粗糙的石壁上画出明亮与阴影的锋利边界，空气里漂浮着金色的微尘。耳边是慵懒的：本地老人坐在门洞阴影里聊天的克罗地亚语低语、某扇木窗被推开时“吱呀”的呻吟、远处港口渔船引擎“突突”的闷响，还有你自己脚步声在石巷里清晰的回音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城最动人的，是它活着的纹理。它不是一个被真空包装的博物馆。晾晒在阳台上的彩色床单，在巷子口踢足球的孩子，从古老石屋窗户里飘出的炖肉香气，都告诉你这里依然是家。圣劳伦斯大教堂的钟声准时敲响，声音浑厚，像石头自己在歌唱，但并不会打断岸边咖啡馆里人们享受“菲卡”（咖啡休憩）的悠闲。历史在这里不是被供奉的，而是被居住、被使用的日常背景。你会在一个看似普通的门楣上发现一尊精美的文艺复兴圣徒雕像，而它的下方正停着一辆现代自行车。这种时空层叠却毫不违和的质感，是特罗吉尔独有的魔法。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的浓缩与和谐。在仅仅不到一平方公里的孤岛上，你却能步行穿越从公元前3世纪希腊殖民地到威尼斯共和国鼎盛时期的完整历史图层。每一步都是邂逅，每一个转角都是故事。它不像一些宏大景点那样需要你仰视，而是邀请你贴近、触摸、迷路，最后心甘情愿地被它石头的心跳俘获。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特罗吉尔历史古城`} />
                <InfoRow label="英文名称" value={`Trogir`} />
                <InfoRow label="正式名称" value={`Trogir`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`特罗吉尔（斯普利特-达尔马提亚县）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在巴掌大的小岛上，历经古希腊、古罗马、威尼斯共和国直至现代，层层叠加、保存完好的“露天建筑史教科书”。`} />
                <InfoRow label="建筑特色" value={`令人惊叹的石头迷宫，罗曼式、哥特式、文艺复兴式及巴洛克式建筑以近乎亲密的距离交织共存，完美展现了达尔马提亚石材建筑的巅峰技艺。`} />
                <InfoRow label="建筑风格" value={`以中世纪城镇规划为基础，融合了罗马式、哥特式、文艺复兴式与巴洛克式的混合风格，核心是威尼斯哥特式民用建筑。`} />
                <InfoRow label="文化价值" value={`作为亚得里亚海沿岸城市连续性及文化交流的杰出范例，其完整的城市肌理和建筑序列，生动见证了欧洲两千年来的城市发展脉络。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身为开放区域，全天24小时可进入。城内主要建筑如圣劳伦斯大教堂开放时间通常为夏季（5月至9月）周一至周六 9:00-19:00，周日 12:30-19:00；冬季（10月至次年4月）时间缩短，通常为周一至周六 9:00-15:00，周日关闭或仅下午开放。卡梅尔伦戈城堡塔楼开放时间与教堂类似，但关闭时间可能更早。具体时间随季节和节假日微调，建议行前查阅最新官网。`} />
              <InfoRow label="门票价格" value={`进入古城免费。参观核心景点需单独购票：圣劳伦斯大教堂门票约40库纳（约5.3欧元），登塔另收费；卡梅尔伦戈城堡门票约30库纳（约4欧元）。通常有联票优惠。学生、儿童及团体有折扣，具体以现场公告为准。`} />
              <InfoRow label="地址" value={`Ul. Hrvatskih Velikana 1, 21220, Trogir, Croatia`} />
              <InfoRow label="交通方式" value={`从斯普利特机场出发是最便捷的方式。机场距离特罗吉尔仅6公里，打车约10-15分钟，费用约15-20欧元。从斯普利特市中心出发，可乘坐37路公交车，车程约30-40分钟，班次频繁（约每20-30分钟一班），终点站即为特罗吉尔古城入口附近的车站，车票可在司机处购买或使用当地交通卡。如果自驾，可将车停在古城外的付费停车场（如Trg Ivana Pavla II广场附近），步行过桥进入古城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲特罗吉尔的故事，得从大海讲起。早在公元前3世纪，希腊的航海者就相中了这座紧邻大陆的狭小岛屿。它易守难攻，是天然的避风港和贸易中转站。他们叫它“Tragurion”，意思是“山羊岛”。虽然希腊人留下的实体遗迹不多，但他们奠定了这座城市的基因：一个依靠海洋、连接东西的枢纽。石头城的最初轮廓，就在那时被海浪与人类的野心共同勾勒出来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马人接过了权杖。随着罗马帝国的扩张，特罗吉尔的重要性与日俱增。它成为了达尔马提亚行省一座繁荣的自治市。你可以想象，那时的港口一定停满了运送粮食、葡萄酒和橄榄油的船只，广场上回响着拉丁语和多种方言。早期基督教也随着商船和士兵在此扎根，为日后那些宏伟教堂的建立埋下了种子。然而，帝国的崩溃也带来了动荡，哥特人、斯拉夫人的迁徙浪潮冲击着亚得里亚海岸，特罗吉尔在混乱中艰难求生，但也逐渐融入了新的斯拉夫-克罗地亚文化血液，这种融合塑造了它独特的身份。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的黄金时代，始于威尼斯共和国那头“圣马可飞狮”的目光投向这里。从1420年开始，特罗吉尔进入了长达近四个世纪的威尼斯统治时期。这是它建筑面貌定型的决定性年代。威尼斯的商人们带来了巨额的财富和前沿的亚得里亚海沿岸“威尼斯哥特式”建筑风潮。本地显赫的家族，比如著名的契波科家族，竞相聘请最优秀的石匠和艺术家，建造宫殿、修缮教堂，以彰显自己的权力与虔诚。圣劳伦斯大教堂那扇无与伦比的罗马式大门，以及内部由大师拉多万雕刻的亚当夏夫柱，都是这个竞争与信仰激情下的产物。石头不再是简单的建材，而是家族史诗与艺术灵感的载体，被雕刻得繁复而充满生命力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`威尼斯时代并非只有荣光。它也意味着不断的战争威胁，主要是应对日益强大的奥斯曼土耳其帝国的扩张。于是，特罗吉尔在威尼斯工程师的主持下，被坚固的城墙和防御塔楼严密地包裹起来，尤其是那座雄壮的卡梅尔伦戈堡垒，它像一枚坚定的石钉，守护着城市的西北角。这些防御工事赋予了特罗吉尔今天我们看到的、近乎完整的封闭形态。它成了一座真正的“城岛”，一个自给自足、抵御外侮的微型世界。拿破仑的军队曾短暂地终结了威尼斯的统治，随后是奥匈帝国的时代，但城市的物理肌理已经凝固，那些石头建筑静静地看着帝国旗帜的更迭。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进二十世纪，特罗吉尔经历了战争的创伤，但也幸运地躲过了大规模破坏。当它作为“连续城市居住的杰出范例”被列入联合国教科文组织世界遗产名录时，世界才再次将目光聚焦于这颗亚得里亚海的明珠。如今，它不再需要防御敌人，它的城墙向所有好奇的旅人敞开。那些曾被用来抵御炮火的垛口，现在坐满了欣赏落日的情侣；曾经囤积物资的古老地窖，变成了售卖当地葡萄酒的迷人酒馆。历史，在这里完成了一次温暖而诗意的转向。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览特罗吉尔的精髓在于“慢”和“乱走”，但一条清晰的脉络能让你不错过精华。建议你在清晨九点前抵达，这时旅游团大军还未涌入，阳光柔和，是感受古城苏醒气息和拍照的黄金时间。整体游览可以安排大半天（4-6小时），节奏宜松弛，留足时间在街巷中迷路和在咖啡馆发呆。路线从连接大陆的主城门开始，逆时针环绕古城核心，最后登上制高点俯瞰全景，这样的安排能让你由表及里，从宏大到细节，逐步深入这座石头迷宫的心脏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`古城内石板路光滑且多有台阶，务必穿一双舒适防滑的鞋子，高跟鞋在这里是“灾难级”选择。中午至下午三点是游船旅行团登陆的高峰期，主街和教堂会非常拥挤，建议利用这个时间去僻静小巷探索或找个阴凉处休息。在餐厅点餐前，务必确认海鲜等时令菜品的价格是“每公斤”还是“每份”，避免误会。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从气势恢宏的北侧“陆地门”进入，抚摸那威尼斯风格的拱门和圣马可飞狮浮雕，瞬间完成从现代到中世纪的穿越。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`立刻右转钻进迷宫般的窄巷，放任自己迷失在拉帕德街或契波科家族宫殿附近，用指尖感受不同年代石墙的肌理与温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迷路的尽头豁然开朗，来到城市中心的圣劳伦斯广场，仰头屏息凝望大教堂那尊被誉为克罗地亚罗马式雕塑巅峰的“亚当夏夫柱”和精雕细刻的西门。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入大教堂内部，让眼睛适应昏暗后，沿着狭窄陡峭的旋梯攀上47米高的钟楼，在呼啸的海风中收获360度无死角的红屋顶与碧海全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从钟楼下来，穿过广场东南角带顶棚的古老“议会厅”拱廊，感受中世纪市民政治生活的气息，然后拐向海滨大道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着沐浴在阳光下的海滨长廊“Riva”漫步，看桅杆轻摇，选一家有遮阳棚的咖啡馆坐下，像本地人一样点一杯咖啡，看人来人往。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从海滨折返向内陆，探寻古老的圣尼古拉修道院，那里收藏着珍贵的希腊浮雕“卡伊罗斯”（机会之神），感受古希腊艺术在此地的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从西北角登上敦实的卡梅尔伦戈城堡塔楼，在黄昏时分看着夕阳将整座石头城和远处的大陆染成温暖的蜜金色，为旅程画上圆满句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`卡梅尔伦戈城堡顶端西侧垛口`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，以城堡粗犷的石墙为前景框架，拍摄夕阳余晖洒在古城红瓦屋顶、远处山脉和闪烁海面上的壮丽全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣劳伦斯大教堂钟楼顶层东北角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚柔和光线时，俯拍古城错综复杂的街巷网络和庭院天井，捕捉光影在密集屋顶上形成的迷人图案。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`契波科宫庭院内部`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光垂直照射时，抬头拍摄文艺复兴风格的三层拱廊环绕着中央一小片天空的对称构图，光影对比极富戏剧性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`海滨大道“Riva”中段望向古城`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时，以停泊的古典帆船或游艇为前景，将威尼斯风格的联排建筑与后方圣劳伦斯教堂钟楼一同纳入镜头，展现水城风情。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“陆地门”内侧的窄巷入口`}</h4>
                  <p className="text-sm text-gray-700">{`早晨阳光斜射入巷口时，站在门洞阴影里向外拍，捕捉光线照亮飘动的咖啡馆桌布、行人以及被磨亮的石板路，营造深邃的纵深感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`利用古城无处不在的拱门、窗洞和走廊作为天然画框，能极大提升照片的层次感和故事性。尊重当地居民隐私，拍摄私人庭院或阳台上的人物时，最好先微笑示意或主动避开。飞无人机在古城上空通常需要特殊许可，且受限于密集的建筑和游客，操作风险高，不建议在此飞行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在古城核心区由15世纪石屋改造的精品酒店，睡在古老的石拱之下，夜晚当游人散去，你能独享整个寂静巷道的私密时光。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计风尚`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在与古城一桥之隔的Čiovo岛沿岸的现代设计酒店，拥有直面古城全景的无边泳池和露台，将中世纪风景框进当代生活的奢华画框里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭温馨`}</h4>
                  <p className="text-sm text-yellow-800">{`预订古城边缘一栋带有隐秘屋顶露台的公寓，自己从中央市场采购新鲜食材烹饪，晚上伴着星空和隐隐的海浪声，享受如当地人一般的居家感。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-purple-800">{`大陆区步行可达古城范围的舒适民宿或小型酒店，价格更亲民，且通常提供免费停车，对于自驾族来说是非常实用的选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`预订古城内的住宿时，请务必确认是否有行李搬运服务，因为许多地方车辆无法进入，你需要提着行李走石板路。夏季（7-8月）务必提前数月预订，这是达尔马提亚海岸的绝对旺季。选择Čiovo岛上的住宿能欣赏无敌夜景，但需注意晚上往返古城可能需要打车或步行约20分钟。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特罗吉尔许久后，我发现记忆最深的，不是某个具体的雕像或建筑的名字，而是一种整体的、包裹性的感受。是石头在午后储存了阳光，到夜晚缓缓释放出的那种温润；是海风穿堂过巷时，带来的那种微咸的、属于远方和冒险的气息；是当你用手指划过某面粗糙墙壁时，仿佛能触碰到无数代工匠、水手、主妇、孩童在此生活的温度。这座城市教会我，真正的历史不是教科书上冰冷的时间线，而是可触摸、可居住、可呼吸的日常本身。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切追求崭新、快速和庞大的世界里，特罗吉尔像一位从容的隐士，守护着一种小而美的、层叠的智慧。它证明了，无需占据广阔的土地，无需建造摩天的楼宇，人类同样可以创造出极度丰富、精致且可持续的文明样本。它邀请每一位来访者慢下来，缩小自己的尺度，去关注一条缝隙里的青苔，一道光影的移动，一次与陌生人在窄巷中侧身而过时的微笑。来到这里，你不是在参观一个景点，而是在体验一种古老却并未过时的时间哲学。这大概就是为什么，每一个热爱深度游的灵魂，都应该来一次特罗吉尔——让自己在这座活着的石头琥珀里，做一次短暂而深刻的沉浸，从而重新学会如何丈量生活与历史的深度。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/skopje-old-bazaar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯科普里老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Skopje Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mechelen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅赫伦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mechelen Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fribourg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fribourg Old Town</p>
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
