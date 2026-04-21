import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡利亚里城堡区 Cagliari (Castello)｜俯瞰蔚蓝大海与千年盐田的古老制高点 - 最佳欧洲景点',
  description: '你得先穿过下面热闹的码头区，然后开始爬坡。第一感觉是空气变了，海风的咸味里混进了古老石墙被太阳烘烤后散发出的、干燥而温暖的气息，有点像翻开一本旧书。脚下的路是光滑的石灰岩石板，被无数代人的脚步磨得发亮，在正午的阳光下像一条流淌的牛奶河。你的呼吸会随着坡度变陡而微微急促，但这正是仪式的一部分——前往一...',
}

export default function CagliariCastelloPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '卡利亚里', href: '/destinations/italy' },
            { label: '卡利亚里城堡区', href: '/attractions/cagliari-castello' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡利亚里城堡区・Cagliari (Castello)・意大利・卡利亚里`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你得先穿过下面热闹的码头区，然后开始爬坡。第一感觉是空气变了，海风的咸味里混进了古老石墙被太阳烘烤后散发出的、干燥而温暖的气息，有点像翻开一本旧书。脚下的路是光滑的石灰岩石板，被无数代人的脚步磨得发亮，在正午的阳光下像一条流淌的牛奶河。你的呼吸会随着坡度变陡而微微急促，但这正是仪式的一部分——前往一个制高点，理应付出一点点攀登的代价。
当你终于从某条陡峭的小巷或乘坐那部老式电梯“钻”进城堡区内部时，会瞬间被一种奇特的静谧包裹。外面的城市喧嚣仿佛被那堵高大厚实的城墙过滤掉了，只剩下你自己的脚步声、远处隐约的海鸥鸣叫，以及风穿过狭窄街道时发出的细微哨音。阳光在这里被切割成明暗分明的几何图形，照亮了墙上褪色的赭石色涂料，也把另一侧的小巷藏进深深的阴影里。阳台上的铁艺栏杆生着斑驳的铁锈，却挂满了晾晒的鲜艳床单，随风飘荡。这里不是一座死去的博物馆，你看，那位老太太正从布满鲜花的窗台探出身子和楼下的邻居用撒丁方言聊天，声音在石壁间轻轻回荡。
而最震撼的一刻，总会发生在你无意中走到某段城墙的边缘。毫无预兆地，整个卡利亚里湾就像一幅无限展开的蔚蓝色绸缎，“哗”地一下铺在你眼前。近处是层层叠叠的暖黄色屋顶，一直蔓延到山脚；远处是宝石般剔透的第勒尼安海，阳光下碎金闪烁。但你的视线一定会被西南方那片巨大、平坦、泛着奇幻粉红色调的盐田（Stagno di Molentargius）吸引，它像一块被巨人随手放在海岸边的调色板，安静地躺在蓝天碧海之间。白鹭成群地在那里起落，时间仿佛慢了下来。你会突然明白，为什么几千年来，人人都要争夺这座山丘——它不仅关乎防御，更关乎一种绝对的、统治性的美丽视野。
在这里，历史不是教科书里的词汇，它就浸泡在每日的阳光里。士兵巡逻的脚步声变成了游客的闲逛，贵族马车的轱辘声变成了摩托车偶尔的轰鸣，但石墙的缝隙里依然倔强地生长着野生的刺山柑，教堂的钟声依然准时敲响。城堡区最动人的，正是这种叠加感：它是堡垒，也是家园；是眺望敌情的哨所，也是欣赏落日晚餐的露台。你站在这里，同时触摸着坚硬的过去与柔软的当下。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你得先穿过下面热闹的码头区，然后开始爬坡。第一感觉是空气变了，海风的咸味里混进了古老石墙被太阳烘烤后散发出的、干燥而温暖的气息，有点像翻开一本旧书。脚下的路是光滑的石灰岩石板，被无数代人的脚步磨得发亮，在正午的阳光下像一条流淌的牛奶河。你的呼吸会随着坡度变陡而微微急促，但这正是仪式的一部分——前往一个制高点，理应付出一点点攀登的代价。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于从某条陡峭的小巷或乘坐那部老式电梯“钻”进城堡区内部时，会瞬间被一种奇特的静谧包裹。外面的城市喧嚣仿佛被那堵高大厚实的城墙过滤掉了，只剩下你自己的脚步声、远处隐约的海鸥鸣叫，以及风穿过狭窄街道时发出的细微哨音。阳光在这里被切割成明暗分明的几何图形，照亮了墙上褪色的赭石色涂料，也把另一侧的小巷藏进深深的阴影里。阳台上的铁艺栏杆生着斑驳的铁锈，却挂满了晾晒的鲜艳床单，随风飘荡。这里不是一座死去的博物馆，你看，那位老太太正从布满鲜花的窗台探出身子和楼下的邻居用撒丁方言聊天，声音在石壁间轻轻回荡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而最震撼的一刻，总会发生在你无意中走到某段城墙的边缘。毫无预兆地，整个卡利亚里湾就像一幅无限展开的蔚蓝色绸缎，“哗”地一下铺在你眼前。近处是层层叠叠的暖黄色屋顶，一直蔓延到山脚；远处是宝石般剔透的第勒尼安海，阳光下碎金闪烁。但你的视线一定会被西南方那片巨大、平坦、泛着奇幻粉红色调的盐田（Stagno di Molentargius）吸引，它像一块被巨人随手放在海岸边的调色板，安静地躺在蓝天碧海之间。白鹭成群地在那里起落，时间仿佛慢了下来。你会突然明白，为什么几千年来，人人都要争夺这座山丘——它不仅关乎防御，更关乎一种绝对的、统治性的美丽视野。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这里，历史不是教科书里的词汇，它就浸泡在每日的阳光里。士兵巡逻的脚步声变成了游客的闲逛，贵族马车的轱辘声变成了摩托车偶尔的轰鸣，但石墙的缝隙里依然倔强地生长着野生的刺山柑，教堂的钟声依然准时敲响。城堡区最动人的，正是这种叠加感：它是堡垒，也是家园；是眺望敌情的哨所，也是欣赏落日晚餐的露台。你站在这里，同时触摸着坚硬的过去与柔软的当下。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡利亚里城堡区`} />
                <InfoRow label="英文名称" value={`Cagliari (Castello)`} />
                <InfoRow label="正式名称" value={`Castello di Cagliari`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`卡利亚里`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`撒丁岛首府卡利亚里的心脏与起源，是俯瞰整个海湾、统治陆地和海洋的千年军事与权力中心。`} />
                <InfoRow label="建筑特色" value={`一座雄踞石灰岩山丘之上的巨型“石头王冠”，融合了坚固的比萨时期防御城墙、优雅的西班牙风格阳台与庄严的意大利宫殿。`} />
                <InfoRow label="建筑风格" value={`以中世纪比萨-热那亚军事防御建筑为核心，层层叠加了西班牙阿拉贡统治时期的哥特-加泰罗尼亚风格，以及后来的巴洛克与新古典主义元素。`} />
                <InfoRow label="文化价值" value={`不仅是一部露天的撒丁岛编年史，更是一个至今仍充满生机、将辉煌历史与日常烟火气完美交融的独特社区。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡区本身为24小时开放的公共区域。区内的重要景点如大象塔（Torre dell‘Elefante）、圣雷米堡垒（Bastione di Saint Remy）的观景平台等，开放时间一般为夏季（4月-10月）上午9:00至晚20:00，冬季（11月-3月）上午9:00至17:00，周一多数博物馆闭馆。具体时间随季节微调，建议行前在官网核对。`} />
              <InfoRow label="门票价格" value={`进入城堡区免费。参观大象塔门票约为5欧元，含考古博物馆的联票约为9欧元。欧盟18岁以下及65岁以上公民常有优惠，建议携带证件。部分观景平台免费。`} />
              <InfoRow label="地址" value={`Castello, 09124 Cagliari CA, Italy`} />
              <InfoRow label="交通方式" value={`从卡利亚里埃尔马斯机场（Cagliari Elmas Airport）出发，最方便的是搭乘机场穿梭巴士（Linea ARST），约15-20分钟直达市中心的马特奥蒂广场（Piazza Matteotti），车程约15分钟，班次频繁。从广场步行至城堡区山脚下的宪法广场（Piazza Costituzione），然后你可以选择：1）乘坐小巧的升降电梯（Ascensore di Castello）直达圣雷米堡垒内部，省去爬坡之苦；2）沿着富有韵味的石板步道（如Via Lamarmora）步行上山，约需15分钟，微微气喘但体验更佳。如果从卡利亚里中央火车站（Cagliari Stazione）出来，步行至山脚下约20分钟，沿途已能感受老城风情。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从将近三千年前说起。腓尼基人，那些来自东地中海的精明商人和航海家，最早看中了这座伸入海湾、易于防御的石灰岩山丘。他们在这里建立了一个贸易站，称之为“卡尔利斯”，意为“岩石之城”。但真正为这里奠定军事堡垒雏形的，是中世纪的比萨人。十一世纪左右，比萨共和国为了控制撒丁岛，在这座山丘上修筑了最初的核心防御工事。想象一下，工匠们凿开本地坚硬的石灰岩，建起了高塔和粗糙的城墙，把山顶围成一个易守难攻的据点。今天你看到的那些高大、敦实、几乎没有装饰的塔楼（比如大象塔和圣潘克拉齐奥塔），就是那个时代的遗产，它们的气质纯粹而冷酷，就是为了战争而生的巨人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的指针转到十四世纪，另一股来自海上的力量——西班牙的阿拉贡王国——登上了舞台。他们从比萨人手中夺取了卡利亚里，并将城堡区变成了统治整个撒丁岛的行政中心。西班牙人的到来，为这个坚硬的军事要塞注入了一丝南欧的浪漫与繁复。他们扩建了城墙，但也在城内修建了带有精美雕刻的宫殿和教堂。哥特-加泰罗尼亚风格的拱窗和优雅的庭院开始出现。总督府搬了进来，贵族们纷纷在此修建宅邸，小巷里开始回荡起卡斯蒂利亚语和加泰罗尼亚语，而不仅仅是意大利语或撒丁方言。城堡区从一个纯粹的兵营，逐渐变成了权力与奢华的象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的浪潮从未停歇。在随后的几个世纪里，撒丁岛先后被奥地利短暂占领，最终在十八世纪归于萨伏伊公国，成为意大利王国的一部分。城堡区的军事重要性逐渐下降，它更多地成为政府机构和上流社会的居住区。宽阔的楼梯、华丽的立面和新古典主义的广场被修建起来，比如气势恢宏的圣雷米堡垒及其大阶梯，就是在皮埃蒙特时期建造的，旨在给这座古老的要塞一个更符合当时审美、更“文明”的入口。它试图抹去一些中世纪的阴郁，用开阔的视野和优雅的线条，迎接一个更现代的时代。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但城堡区最惨痛的伤疤，来自二十世纪。第二次世界大战期间，由于其重要的港口地位，卡利亚里遭到了盟军的猛烈轰炸。1943年，密集的空袭将城堡区相当一部分区域化为废墟，许多中世纪的建筑瑰宝永远消失了。硝烟散尽后，人们面对满目疮痍的家园。战后重建是缓慢而艰难的，很多地方只是简单地清理了废墟，这也使得今天你在某些角落，依然能看到战争留下的突兀空白和不同时代建筑拼贴在一起的奇特景象。这不是完美的修复，而是一种带着伤疤的重生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`正是这种层叠的重生，塑造了今日城堡区独一无二的灵魂。它不是佛罗伦萨或罗马那种精心维护、完美无瑕的历史中心。它更像一个倔强的老人，脸上的每一道皱纹都记录着一段真实的经历——腓尼基的商贾、比萨的剑盾、西班牙的权杖、皮埃蒙特的规划图，以及炸弹的火焰。这些记忆没有消失，它们被压进了每一块石头的肌理，融入了当地居民慢悠悠的生活节奏里。如今，年轻的艺术家在古老的作坊里开设工作室，大学的研究机构入驻昔日的修道院，时髦的小酒吧开在城墙的拱门下。城堡区没有躺在历史的功劳簿上，它正用自己的方式，书写着古老石头城的新篇章。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正品味城堡区，请务必留出一整个白天，最佳抵达时间是上午九点左右。这时阳光已经驱散了晨雾，将石头街道照亮，但暑气还未升腾，游客也相对稀少。从山脚下的宪法广场开始你的攀登（或乘坐电梯），建议先花2-3小时沿着主线探索核心的历史遗迹和街道，感受其宏大的格局。中午前后，当阳光最烈时，可以躲进凉爽的大教堂或市立美术馆，既是参观也是休憩。下午的时光最适合交给那些无名的巷弄和绝佳的观景平台，慢慢逛，随意迷路，你会发现无数惊喜。将日落前的黄金一小时留给西南面的城墙，看着阳光将盐田和大海染成金色再变成粉紫。这样安排，你既能系统地了解它的历史脉络，又能拥有足够多闲散的、属于自己的发现时刻，体验从壮丽到亲密的完整层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、鞋底防滑的鞋子，这里的每一步几乎都是石板路、斜坡或台阶。夏季游览请疯狂补水并做好防晒，高地上几乎毫无遮挡，正午的阳光非常猛烈。尽管治安相对良好，但在拥挤的观景平台或市场附近，还是请将背包背在前面，保持基本的警惕。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宪法广场旁乘坐那部充满复古感的公共升降梯，像穿越时空隧道般直接抵达圣雷米堡垒内部，在震撼中开始你的城堡区之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Via Martini漫步，让脚步带领你走向城堡区的核心——卡利亚里主教座堂，别忘了低头看看脚下教堂地下室入口处那些神秘的罗马石刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主教座广场（Piazza Palazzo）的阴影里坐一会儿，观察对面 Palazzo Viceregio（总督府）庄严的立面，想象西班牙总督当年从此进出的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要钻进大象塔，沿着狭窄陡峭的内部石阶盘旋而上，当你从塔顶的小门钻出时，360度的全景会让你觉得每一步攀登都无比值得。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把自己“丢”进那些名字都记不住的狭窄巷弄（比如Via Canelles），享受迷路的乐趣，用手指触摸墙壁上不同年代的砖石和涂鸦。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午四五点的柔光中，找到 Bastione di Santa Croce 附近的城墙缺口，那里是俯瞰粉红色盐田和远处大海长卷的绝佳秘密点位。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分，回到圣雷米堡垒的巨型观景平台 Terrazza Umberto I，点一杯当地的维蒙蒂诺白葡萄酒，看着夕阳将整个卡利亚里镀上暖铜色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣雷米堡垒大阶梯顶端回望`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一小时，站在阶梯最上方，用广角镜头将前景宏伟的阶梯曲线与背景无限延伸的城市、大海一同纳入画面，气势磅礴。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大象塔顶的十字弩窗口`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线从东方射入时，透过塔楼那些狭窄的、原本用于射击的十字形窗口拍摄外面的屋顶和大海，能形成强烈的明暗对比和穿越历史的框架构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`盐田方向城墙缺口`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，在城堡区西南段的残墙边，将长焦镜头对准远方粉红色的盐田和其间如白色音符般点缀的火烈鸟群，捕捉自然与工业遗迹并存的超现实景致。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Via Lamarmora 步道仰角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，从山下沿着这条主步道向上拍，石阶在光影中极具纵深感，两侧的石墙和拱门将视线引向上方城堡的轮廓，充满向上的力量感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`主座教堂内部穹顶之光`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时进入教堂，仰拍阳光从穹顶高窗倾泻而下，照亮华丽巴洛克祭坛的瞬间，利用建筑内部的尘埃形成神圣的光柱。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`黄金时刻（日出后和日落前一小时）的光线能让石灰岩建筑呈现温暖的蜜糖色，是拍摄建筑外观和城市全景的绝佳时机。拍摄当地居民和他们的日常生活前，请务必先微笑并征求同意，这里毕竟是他们安静的家园。使用三脚架在狭窄的街道或观景台可能会妨碍他人，尽量使用高感光度和防抖功能手持拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在城堡区内由古老贵族宅邸改造的精品公寓，清晨在只属于住客的静谧石巷中散步，晚上在私享的屋顶露台上独揽星空下的全城灯火。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计美学之选`}</h4>
                  <p className="text-sm text-green-800">{`位于城堡区边缘一栋经过彻底翻新的历史建筑内，将原始的岩石墙壁与现代极简主义家具巧妙结合，巨大的窗户正对大海，每天在浪声中醒来。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便利与景观兼顾`}</h4>
                  <p className="text-sm text-yellow-800">{`选择坐落在城堡区山腰、拥有无敌海景阳台的家庭旅馆，女主人会为你准备丰盛的撒丁岛特色早餐，并热情分享只有本地人才知道的小巷故事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`逃离喧嚣`}</h4>
                  <p className="text-sm text-purple-800">{`住在山脚下 Marina 区或 Poetto 海滩附近更现代的酒店，享受海滩便利，然后每天怀着期待“攀登”进入古老的城堡世界，体验一种有趣的时空切换。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`预订城堡区内的住宿前，请确认是否有电梯或行李搬运服务，否则拖着行李箱爬台阶将是巨大挑战。夏季和重要节日期间这里一房难求，务必提前数月预订。选择住在区内，意味着你需要接受夜晚绝对的宁静（甚至有些偏僻感）和有限的餐饮选择，但换来的是无可替代的沉浸感。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡利亚里城堡区很久以后，我发现自己最怀念的，不是某一张明信片般的风景照片，而是那种复杂的、多层次的存在感。它不像那些被精心供奉起来、仅供观赏的历史遗迹。它是有呼吸的，有皱纹的，甚至有脾气的一处所在。你会记得石头的冰冷触感，也会记得某扇窗台飘出的炖菜香气；你会震撼于历史的厚重城墙，也会感动于墙根下一只正在晒太阳的懒猫。这种粗糙与温柔、宏大与细微的并存，让它变得无比真实，也无比动人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、热衷贴标签的世界里，城堡区教会我们另一种看待时间和空间的方式。它告诉我们，历史不是单向度的过去，而是可以层层叠加、与当下鲜活共存的生态。一个地方最深的魅力，或许不在于它的完美无瑕，而在于它如何承载伤痕、适应变迁，并在每一个时代都努力找到自己生机勃勃的形态。对于渴望深度游的灵魂来说，这里不仅仅是一个景点，更是一个关于坚韧、记忆与视角的生动课堂。它邀请你攀登，不仅是用双脚爬上那座山丘，更是用心灵去触摸一段未曾中断的、绵长而辉煌的地中海故事。这，正是旅行能带给我们的、最珍贵的礼物之一。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/montepulciano" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙特普齐亚诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Montepulciano</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ferrara-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费拉拉城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ferrara Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/scicli-baroque-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希克利巴洛克古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Scicli</p>
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
