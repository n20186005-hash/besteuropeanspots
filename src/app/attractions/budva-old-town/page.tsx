import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布德瓦老城 Budva Old Town｜亚得里亚海的石头珍珠，在城墙上看地中海的蓝与岁月的金 - 最佳欧洲景点',
  description: '朋友，你想象过走进一颗被时光打磨得温润的“石头珍珠”吗？布德瓦老城就是这样的存在。我第一次走近它，是从那个著名的海门（Sea Gate）进去的。门洞像是一个时间的隧道，外面是喧嚣的现代海滨大道，音乐声、冰激凌车的叮咚声不绝于耳；可一步跨进去，整个世界瞬间就安静、古老了下来。脚下是被无数双脚磨得发亮、...',
}

export default function BudvaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布德瓦老城', href: '/attractions/budva-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布德瓦老城・Budva Old Town・黑山・布德瓦</h1>
          <p className="text-lg text-gray-600 mb-6">
            朋友，你想象过走进一颗被时光打磨得温润的“石头珍珠”吗？布德瓦老城就是这样的存在。我第一次走近它，是从那个著名的海门（Sea Gate）进去的。门洞像是一个时间的隧道，外面是喧嚣的现代海滨大道，音乐声、冰激凌车的叮咚声不绝于耳；可一步跨进去，整个世界瞬间就安静、古老了下来。脚下是被无数双脚磨得发亮、在正午阳光下泛着象牙光泽的石灰岩石板路，缝隙里长出茸茸的青苔。空气里的味道很复杂，有海风送来的咸湿，有街角咖啡馆飘出的浓烈咖啡香，还有从那些厚重石墙里渗出来的、带着凉意的历史尘埃的气息。
这座老城最摄人心魄的，莫过于它与海的亲密关系。它的城墙不是建在山上，而是直接“长”在了海里。你可以沿着城墙散步，左手触摸的是粗糙、布满沧桑刻痕的岩石，右手边几步之遥，就是亚得里亚海那清澈见底、由绿渐蓝的梦幻海水。海浪永不停歇地、温柔地拍打着墙根，发出“哗——哗——”的、摇篮曲般的声响。站在某个垛口望出去，你会恍惚觉得这整座城就是一艘巨大的石船，正准备扬帆起航，驶向地中海的深处。这种被海水360度包裹的感觉，是其他内陆古城绝对无法给予的。
当你钻进那些迷宫般的小巷，又会发现另一个世界。这里没有笔直的大道，只有蜿蜒曲折、宽仅容两三人并肩的小径。两侧是三四层高的石屋，阳台上垂下怒放的三角梅和天竺葵，像流淌着的红色与紫色的瀑布。某扇厚重的木门虚掩着，里面传来刀叉碰撞的叮当声和家人的谈笑，生活气息扑面而来。你永远不知道下一个拐角会遇见什么：可能是一家藏着绝版黑胶唱片的小店，可能是一座静谧的、挂着古老圣像的小教堂，也可能直接通到一个被阳光晒得暖洋洋的迷你广场，那里有老人在下棋，猫咪在打盹。这种探索的乐趣，是布德瓦老城最迷人的日常。
而这里最打动我的，是它的“活着”。它不是一个被真空包装的博物馆。城墙上的城堡里晚上会举办古典音乐会，古老的教堂里依然有信徒来做礼拜，小巷里的餐馆坐满了喝着本地葡萄酒“Vranac”、大声谈笑的年轻人。历史在这里不是教科书上的铅字，而是你脚下踩着的石头，耳边听到的海浪，鼻尖闻到的咖啡香。它以一种不可思议的包容力，将2500年的厚重，从容地融入了每一个阳光灿烂的当下。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">朋友，你想象过走进一颗被时光打磨得温润的“石头珍珠”吗？布德瓦老城就是这样的存在。我第一次走近它，是从那个著名的海门（Sea Gate）进去的。门洞像是一个时间的隧道，外面是喧嚣的现代海滨大道，音乐声、冰激凌车的叮咚声不绝于耳；可一步跨进去，整个世界瞬间就安静、古老了下来。脚下是被无数双脚磨得发亮、在正午阳光下泛着象牙光泽的石灰岩石板路，缝隙里长出茸茸的青苔。空气里的味道很复杂，有海风送来的咸湿，有街角咖啡馆飘出的浓烈咖啡香，还有从那些厚重石墙里渗出来的、带着凉意的历史尘埃的气息。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这座老城最摄人心魄的，莫过于它与海的亲密关系。它的城墙不是建在山上，而是直接“长”在了海里。你可以沿着城墙散步，左手触摸的是粗糙、布满沧桑刻痕的岩石，右手边几步之遥，就是亚得里亚海那清澈见底、由绿渐蓝的梦幻海水。海浪永不停歇地、温柔地拍打着墙根，发出“哗——哗——”的、摇篮曲般的声响。站在某个垛口望出去，你会恍惚觉得这整座城就是一艘巨大的石船，正准备扬帆起航，驶向地中海的深处。这种被海水360度包裹的感觉，是其他内陆古城绝对无法给予的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">当你钻进那些迷宫般的小巷，又会发现另一个世界。这里没有笔直的大道，只有蜿蜒曲折、宽仅容两三人并肩的小径。两侧是三四层高的石屋，阳台上垂下怒放的三角梅和天竺葵，像流淌着的红色与紫色的瀑布。某扇厚重的木门虚掩着，里面传来刀叉碰撞的叮当声和家人的谈笑，生活气息扑面而来。你永远不知道下一个拐角会遇见什么：可能是一家藏着绝版黑胶唱片的小店，可能是一座静谧的、挂着古老圣像的小教堂，也可能直接通到一个被阳光晒得暖洋洋的迷你广场，那里有老人在下棋，猫咪在打盹。这种探索的乐趣，是布德瓦老城最迷人的日常。</p>
              <p className="text-gray-700 leading-relaxed mb-4">而这里最打动我的，是它的“活着”。它不是一个被真空包装的博物馆。城墙上的城堡里晚上会举办古典音乐会，古老的教堂里依然有信徒来做礼拜，小巷里的餐馆坐满了喝着本地葡萄酒“Vranac”、大声谈笑的年轻人。历史在这里不是教科书上的铅字，而是你脚下踩着的石头，耳边听到的海浪，鼻尖闻到的咖啡香。它以一种不可思议的包容力，将2500年的厚重，从容地融入了每一个阳光灿烂的当下。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="布德瓦老城" />
                <InfoRow label="英文名称" value="Budva Old Town" />
                <InfoRow label="正式名称" value="Budva Old Town" />
                <InfoRow label="国家" value="黑山" />
                <InfoRow label="城市" value="布德瓦" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="一座拥有超过2500年历史的地中海古城，是亚得里亚海岸最古老的定居点之一，堪称黑山海岸的文化心脏。" />
                <InfoRow label="建筑特色" value="一座被宏伟的威尼斯风格防御石墙完整环绕的“城中城”，城墙直接插入碧蓝的海水之中，形成独一无二的海上堡垒景观。" />
                <InfoRow label="建筑风格" value="以中世纪威尼斯共和国时期的防御建筑风格为主导，融合了罗马式、哥特式、文艺复兴式以及后期巴尔干本土石屋风格的多元混合体。" />
                <InfoRow label="文化价值" value="它不仅是黑山旅游的象征，更是活着的文化遗产，完美体现了地中海城邦历经希腊、罗马、威尼斯、奥斯曼等多种文明洗礼后的坚韧与融合。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城本身是一个开放区域，全天24小时可进入。城内的具体景点（如城堡、博物馆、教堂）有独立开放时间，通常为夏季（5月至9月）上午9:00至晚上24:00；冬季（10月至次年4月）上午9:00至下午17:00。部分教堂在周日早上仅供礼拜，午后对游客开放。节假日开放时间可能缩短，建议行前查阅官网。" />
              <InfoRow label="门票价格" value="进入老城城墙区域免费。若要登上圣玛丽亚教堂的钟楼或进入城堡（Citadela）内部参观，需购买门票，约3-5欧元。有多个博物馆和教堂的联票，约8-10欧元。学生、儿童及老人通常享有折扣。" />
              <InfoRow label="地址" value="Stari Grad, Budva, 85310, Montenegro" />
              <InfoRow label="交通方式" value="最近的国际机场是蒂瓦特机场（Tivat Airport，代码 TIV），距离布德瓦约20公里。从机场出来，可以乘坐出租车（约25-30欧元，车程25分钟）或提前预订接驳车。更经济的方式是乘坐机场巴士到蒂瓦特汽车站，再换乘前往布德瓦的本地巴士（总耗时约1小时）。从首都波德戈里察机场（Podgorica Airport，代码 TGD）过来较远，约65公里，最佳方式是租车或乘坐直达长途巴士（约1.5-2小时）。布德瓦老城本身是步行区，汽车站就在老城入口附近，下车步行3分钟即到海门。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">说起来你可能不信，布德瓦老城的故事，得从荷马史诗那个时代讲起。根据传说和零星的考古发现，最早在这里建立殖民地的，是来自希腊的航海者，时间大约在公元前5世纪。他们看中了这个天然良港和易守难攻的半岛地形，给它取名“布托亚”。你可以想象一下，第一批希腊人驾着木船，看到这个被群山环抱、海水碧蓝的岬角时，该是多么欣喜。他们留下的，除了地基，还有与海洋搏斗、与外界贸易的基因，这种基因一直流淌在后来所有居民的血液里。</p>
              <p className="text-gray-700 leading-relaxed mb-4">时间的车轮滚到罗马时代，布德瓦成为了罗马帝国伊利里亚省的一部分，迎来了第一个繁荣期。罗马人带来了法律、道路和更为精湛的建筑技术。虽然今天地表上纯粹的罗马遗迹不多，但老城的街道布局，依稀还能看到罗马营地的网格状影子。更重要的是，基督教随着罗马的国教政策在这里扎下了根。公元6世纪，一场毁灭性的大地震几乎将城市夷为平地，但也催生了最早的一批基督教教堂的兴建。从那时起，布德瓦的命运就与“毁灭”和“重建”这两个词紧紧缠绕。</p>
              <p className="text-gray-700 leading-relaxed mb-4">让它拥有今天这般坚不可摧的石头外观的，是中世纪后期的威尼斯共和国。从1420年到1797年，威尼斯统治了这里近四个世纪。威尼斯人是精明的商人和更精明的防御者。他们意识到布德瓦是控制亚得里亚海东岸的关键堡垒，于是倾注巨资，修建了我们今天看到的这套庞大、复杂、坚不可摧的石头防御体系。高耸的城墙、圆形的塔楼、坚固的城堡（Citadela），全是典型的威尼斯军事建筑风格。那段时期，布德瓦是威尼斯共和国对抗奥斯曼帝国海军的前哨站，城墙上的每一块石头，都浸透着海风、硝烟和两个海上帝国争霸的紧张气息。老城的心脏——圣伊凡教堂、圣玛丽亚教堂，也都在威尼斯时期被重建或加固，带上了鲜明的亚得里亚海文艺复兴风格。</p>
              <p className="text-gray-700 leading-relaxed mb-4">威尼斯共和国衰落后，布德瓦像亚得里亚海边的许多城市一样，命运多舛。它先后被哈布斯堡王朝、法兰西第一帝国、奥匈帝国统治，最终在二十世纪成为南斯拉夫的一部分。但真正的、近乎灭顶的灾难发生在1979年4月15日。一场里氏7.0级的强烈地震袭击了黑山海岸，布德瓦老城受损极其严重，几乎80%的建筑变成了废墟。你如今看到的那些精美的石屋、教堂、城墙，绝大多数都不是“原件”，而是那次震后，黑山（当时还是南斯拉夫）举全国之力，发起的一场史诗般的“原样修复”行动的成果。工匠们一块石头一块石头地编号、清理、按原样重建，整整花了八年时间。所以，我们今天漫步的，既是一座2500年的古城，也是一座只有四十多岁的“新城”。这种重生，赋予了它一层悲壮而又坚韧的传奇色彩。</p>
              <p className="text-gray-700 leading-relaxed mb-4">1990年代南斯拉夫解体带来的动荡，也曾让这里蒙上阴影。但黑山独立后，特别是2006年正式成为主权国家后，布德瓦老城凭借其无与伦比的魅力，迅速成为地中海最炙手可热的旅游目的地之一。它没有在历史的动荡和自然的暴怒中沉没，反而像传说中的凤凰，一次次从废墟中站起，并且站得更加从容、更加美丽。今天的它，一面坦然地向世界展示着伤痕与荣耀并存的历史，一面热情地拥抱着来自全球的旅行者，继续书写着它与大海、与时光的故事。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要完整感受布德瓦老城的灵魂，我强烈建议你安排整整一天的时间。最佳抵达时间是早上9点前，这时旅游团大军还未抵达，阳光柔和，老城刚刚苏醒，是拍照和静静感受氛围的黄金时段。整体游览节奏应该是“慢”。上午专注于探索迷宫般的内城小巷和核心建筑，下午留给壮丽的城墙和海滨，傍晚则一定要在城墙上找个位置等待日落。这样的安排能让你避开最拥挤的人流，同时体验到老城在一天中不同光影下的多变气质。记得穿一双绝对舒适的平底鞋，因为石板路虽然美丽，但走久了真的会累。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>夏季正午（12点至下午3点）老城小巷里非常拥挤闷热，建议这个时段去城墙吹海风或找家咖啡馆休息。小心那些主动搭讪、提供“特殊导览”的人，官方导游都在信息中心。进入教堂时，即便天气炎热，也请确保衣着遮盖肩膀和膝盖，以示尊重。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从面朝大海、装饰着威尼斯狮子浮雕的“海门”进入，让自己第一时间被那穿越时空的隧道感击中。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">径直走到老城中心的小广场，在著名的“舞者”雕塑下停留片刻，观察周围三座不同时期教堂（圣伊凡、圣三一、圣玛丽亚）的钟楼如何划破蓝天。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一定要钻进那条最窄的“许愿小巷”，用手触摸两侧冰凉的石壁，感受传说中能让愿望成真的古老魔力。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">登上城堡（Citadela）的最高平台，这里是全城的制高点，360度无死角俯瞰红屋顶、湛蓝海湾和远处山脉的画卷在此展开。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着面向外海的西侧城墙慢慢散步，听海浪在脚下岩洞里轰鸣回响，看湛蓝海水与白色游艇构成的生动画面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从城墙的北端下来，探索那些布满艺术家工作室和精品小店的后街，这里藏着老城更文艺、更安静的一面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">日落前半小时，务必返回城堡附近的城墙或找一家城墙上的咖啡馆，点一杯饮料，看着夕阳把整个石城、海面和天空染成壮丽的金红色。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">入夜后再次走进老城，感受它与白日截然不同的魔力，灯光勾勒出城墙的轮廓，餐厅和酒吧里流淌出音乐与笑语，古城变身为一个温暖而充满活力的梦幻剧场。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 海门内侧仰拍</h4>
                  <p className="text-sm text-gray-700">上午十点前，阳光刚好照亮门洞内的威尼斯浮雕和深邃的通道，构图时把门洞作为画框，拍出穿越历史的纵深感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣三一教堂背面小巷</h4>
                  <p className="text-sm text-gray-700">下午四点左右，西斜的阳光会为教堂朴素的石墙和钟楼镀上温暖的金边，站在狭窄的小巷里向上仰拍，能获得极具视觉冲击力的几何构图。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 城堡顶层西北角</h4>
                  <p className="text-sm text-gray-700">全天皆宜，但日落前半小时最佳。这里可以同时将老城的红瓦屋顶、蜿蜒的城墙、蔚蓝的海湾以及远处的圣斯特凡岛全景收入镜头，是标志性的明信片角度。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. “许愿小巷”尽头的光影</h4>
                  <p className="text-sm text-gray-700">正午时分，阳光会像一道光柱直射入这条极窄的小巷，站在巷口往里拍，能捕捉到光线照亮石板路和一侧石壁的戏剧性瞬间，人物剪影会非常出彩。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 从海上回望城墙</h4>
                  <p className="text-sm text-gray-700">如果预算允许，租一条小船从海上拍。下午顺光时，能拍到城墙巍峨矗立于碧蓝海水中的全景，尤其能展现其作为海上堡垒的雄姿。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用偏振镜可以有效消除海面和石墙的反光，让天空更蓝、色彩更饱和。航拍在这里受到严格管制，未经特别许可严禁放飞无人机，以免干扰游客和居民。当地人很友善，但如果想拍摄店铺主人或居民特写，请务必先微笑示意并获得同意。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">老城沉浸之选</h4>
                  <p className="text-sm text-blue-800">直接住在城墙内的百年石屋改造的精品公寓里，清晨在游客涌入前独享宁静小巷，夜晚枕着隐约的海浪声入眠。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">设计感体验</h4>
                  <p className="text-sm text-green-800">位于老城入口附近、由传统民居改建的现代设计酒店，完美融合了裸露的石墙、木质横梁与斯堪的纳维亚风格的简约家具，屋顶露台是欣赏老城天际线的秘密基地。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">高端海景享受</h4>
                  <p className="text-sm text-yellow-800">步行至老城仅5分钟的五星级酒店，拥有私人沙滩和无边泳池，房间阳台正对布德瓦湾和老城全景，尤其适合在日落时分泡在浴缸里享受这油画般的景色。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">性价比之选</h4>
                  <p className="text-sm text-purple-800">距离老城步行10-15分钟的安静居民区家庭旅馆，主人会为你准备丰盛的自制黑山式早餐，并热情分享只有当地人才知道的观景角落和小餐馆。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿非常紧俏，尤其是夏季，必须提前至少3-4个月预订。住在城墙内晚上虽然氛围绝佳，但可能受楼下餐馆酒吧的噪音影响，浅眠者建议选择带双层玻璃的房间或稍远离中心的住处。布德瓦整体治安良好，但无论住在哪里，晚间散步时还是建议避开过于昏暗无人的小巷。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开布德瓦老城好些日子了，但闭上眼，那些画面和声音依然清晰：指尖划过城墙粗砺石块的触感，海浪在脚下岩洞中永不停歇的呼吸声，夕阳把整个石头世界点燃成熔金般的辉煌。它给我的触动，远不止于视觉的震撼。更在于它那种深入骨髓的坚韧与从容。这座城市经历了太多——帝国的争霸、地震的摧毁、战争的阴影，可你看它如今的样子，城墙依旧坚固，小巷里生活依旧，咖啡馆的香气依旧。它没有沉湎于悲情，也没有被商业化彻底吞没，它只是坦然地、美丽地存在着，像一位历经沧桑却眼神清澈的老者，静静地向每一个来访者诉说着关于时间、毁灭与重生的永恒寓言。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个一切都追求快速、崭新、刺激的世界里，布德瓦老城的存在是一种温柔的提醒。它告诉我们，真正的美和力量，往往来自于伤痕的愈合，来自于与自然（无论是温柔的大海还是狂暴的地震）的共生，来自于一代又一代人对自己文化根基的执着守护。在这里，你能触摸到历史的质地，也能感受到生活热腾腾的脉搏。它不仅仅是一个“景点”，更是一个能让你内心安静下来、重新思考“永恒”为何物的地方。如果你渴望一次不仅用眼睛，更用心灵去丈量的旅行，那么，请一定来布德瓦老城。让它海风般的故事，浸润你的灵魂。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
