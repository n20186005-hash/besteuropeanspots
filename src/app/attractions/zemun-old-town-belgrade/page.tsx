import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泽蒙老城 Zemun｜多瑙河畔被时光遗忘的童话小镇 - 最佳欧洲景点',
  description: '第一次踏入泽蒙，你会恍惚以为自己走错了时空隧道。这里没有贝尔格莱德市中心那种宏大的社会主义建筑和喧嚣的电车声，取而代之的是一种近乎停滞的、黄油般柔和的宁静。空气里飘着复杂的味道——多瑙河带来的淡淡水腥气，混合着从街角面包房飘出的热腾腾的“布雷克”（Burek，酥皮馅饼）的油酥香，还有老房子外墙灰泥在...',
}

export default function ZemunOldTownBelgradePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '泽蒙老城', href: '/attractions/zemun-old-town-belgrade' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">泽蒙老城・Zemun・塞尔维亚・贝尔格莱德</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一次踏入泽蒙，你会恍惚以为自己走错了时空隧道。这里没有贝尔格莱德市中心那种宏大的社会主义建筑和喧嚣的电车声，取而代之的是一种近乎停滞的、黄油般柔和的宁静。空气里飘着复杂的味道——多瑙河带来的淡淡水腥气，混合着从街角面包房飘出的热腾腾的“布雷克”（Burek，酥皮馅饼）的油酥香，还有老房子外墙灰泥在阳光下散发的、略带潮湿的温暖气息。
你的耳朵会先于眼睛爱上这里。脚步声在鹅卵石路上敲打出清脆的回响，远处传来教堂若有若无的钟声，而最恒定的背景音，是多瑙河水的轻轻拍岸声，以及成群天鹅与海鸥的鸣叫。沿着主街“格拉查尼卡”往上走，两旁是蜜糖色、淡鹅黄和薄荷绿的小楼，阳台上无一例外地垂挂着怒放的天空葵，红得像一团团凝固的火焰。老太太们坐在窗后静静地望着街景，时间在这里不是用来追赶的，而是用来浸泡的。
泽蒙的心脏，是那条宽阔的多瑙河岸。这里没有冰冷的护栏，只有一系列露天餐馆，摆着蓝白格子的桌布。当地人称之为“鱼街”。黄昏时分，炭火被点燃，烤鱼的香气霸道地弥漫开来。你会看到全家老小围坐一桌，用面包蘸着浓郁的鱼汤，大叔们喝着冰镇啤酒，争论着昨晚的足球赛。这不再是供人观赏的“景点”，而是泽蒙人血管的一部分，一种延续了几个世纪的生活仪式——向这条慷慨的河流索取，并在它的岸边庆祝生活本身。
它的核心魅力，正在于这种“身在首都，心在天涯”的疏离感。它离贝尔格莱德的喧嚣只有半小时车程，却固执地守护着自己慢半拍的节奏、中欧风味的外观和一种深入骨髓的河港小镇灵魂。它不试图震撼你，而是温柔地邀请你坐下，浪费一个下午，看云看河看鸟，重新发现“无所事事”的美好。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一次踏入泽蒙，你会恍惚以为自己走错了时空隧道。这里没有贝尔格莱德市中心那种宏大的社会主义建筑和喧嚣的电车声，取而代之的是一种近乎停滞的、黄油般柔和的宁静。空气里飘着复杂的味道——多瑙河带来的淡淡水腥气，混合着从街角面包房飘出的热腾腾的“布雷克”（Burek，酥皮馅饼）的油酥香，还有老房子外墙灰泥在阳光下散发的、略带潮湿的温暖气息。</p>
              <p className="text-gray-700 leading-relaxed mb-4">你的耳朵会先于眼睛爱上这里。脚步声在鹅卵石路上敲打出清脆的回响，远处传来教堂若有若无的钟声，而最恒定的背景音，是多瑙河水的轻轻拍岸声，以及成群天鹅与海鸥的鸣叫。沿着主街“格拉查尼卡”往上走，两旁是蜜糖色、淡鹅黄和薄荷绿的小楼，阳台上无一例外地垂挂着怒放的天空葵，红得像一团团凝固的火焰。老太太们坐在窗后静静地望着街景，时间在这里不是用来追赶的，而是用来浸泡的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">泽蒙的心脏，是那条宽阔的多瑙河岸。这里没有冰冷的护栏，只有一系列露天餐馆，摆着蓝白格子的桌布。当地人称之为“鱼街”。黄昏时分，炭火被点燃，烤鱼的香气霸道地弥漫开来。你会看到全家老小围坐一桌，用面包蘸着浓郁的鱼汤，大叔们喝着冰镇啤酒，争论着昨晚的足球赛。这不再是供人观赏的“景点”，而是泽蒙人血管的一部分，一种延续了几个世纪的生活仪式——向这条慷慨的河流索取，并在它的岸边庆祝生活本身。</p>
              <p className="text-gray-700 leading-relaxed mb-4">它的核心魅力，正在于这种“身在首都，心在天涯”的疏离感。它离贝尔格莱德的喧嚣只有半小时车程，却固执地守护着自己慢半拍的节奏、中欧风味的外观和一种深入骨髓的河港小镇灵魂。它不试图震撼你，而是温柔地邀请你坐下，浪费一个下午，看云看河看鸟，重新发现“无所事事”的美好。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="泽蒙老城" />
                <InfoRow label="英文名称" value="Zemun" />
                <InfoRow label="正式名称" value="Zemun" />
                <InfoRow label="国家" value="塞尔维亚" />
                <InfoRow label="城市" value="贝尔格莱德" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="一个曾独立于贝尔格莱德数百年、长期作为奥匈帝国东南前哨的自治城镇，其历史是巴尔干半岛权力更迭的微观缩影。" />
                <InfoRow label="建筑特色" value="色彩柔和的低层巴洛克与古典主义民居沿着蜿蜒的鹅卵石小巷紧密排列，与耸立在山丘上标志性的中世纪风格塔楼共同构成和谐天际线。" />
                <InfoRow label="建筑风格" value="以18-19世纪奥匈帝国统治时期留下的中欧巴洛克和古典主义风格为主，混杂了本地巴尔干民间建筑元素。" />
                <InfoRow label="文化价值" value="保留了与贝尔格莱德“粗犷”气质截然不同的、慵懒而优雅的多瑙河中游小镇文化，是感受塞尔维亚多元历史层次的活态博物馆。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城街区全天开放。核心历史建筑（如 Gardos Tower）的开放时间通常为夏季（4月-10月）每日 10:00-20:00；冬季（11月-3月）开放时间缩短，可能为 10:00-17:00，且周一可能闭馆。具体需查询当日信息。咖啡馆、餐馆营业时间各异，多数从早晨营业至深夜。" />
              <InfoRow label="门票价格" value="进入泽蒙老城街区免费。登Gardos塔（戛尔朵什塔）需购票，成人票价约300塞尔维亚第纳尔（约合2.5欧元），学生及儿童有优惠。部分小型画廊或私人博物馆可能收取象征性费用。" />
              <InfoRow label="地址" value="Zemun, Belgrade, Serbia" />
              <InfoRow label="交通方式" value="从贝尔格莱德尼古拉·特斯拉国际机场出发：最方便的方式是乘坐出租车，车程约30分钟，费用在2000-3000第纳尔之间（提前议价或使用Pink Taxi等正规公司）。从贝尔格莱德市中心（如共和国广场）出发：乘坐公交15路或84路，车程约40分钟，票价约150第纳尔，需在公交卡亭购买交通卡或向司机购票（准备零钱）。此外，从市中心沿多瑙河岸散步或骑自行车前往泽蒙也是一大享受，距离约6-8公里，一路风景绝佳。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要听懂泽蒙的故事，你得先忘掉现在的国界地图。很久以前，这里就是多瑙河上一个重要的渡口和定居点，它的名字“Zemun”最早出现在10世纪的文献里，据说源自于“zemlj”这个词根，意思是“土地”或“大地”——一个非常质朴的起源。在漫长的中世纪，这片土地就像巴尔干半岛上大多数地方一样，在拜占庭、保加利亚和匈牙利等帝国之间反复易手，饱经战火。但真正塑造了泽蒙今天模样的，是那个持续了数百年的“对望”格局：宽阔的多瑙河北岸是泽蒙，南岸则是贝尔格莱德（当时常被称为“Singidunum”或“Nandorfehervar”）。一道河水，隔开了两个世界。</p>
              <p className="text-gray-700 leading-relaxed mb-4">历史的高潮在1521年到来，强大的奥斯曼帝国苏丹苏莱曼大帝攻陷了贝尔格莱德，然而，北岸的泽蒙却侥幸未被完全征服，反而在之后成为哈布斯堡王朝（奥匈帝国前身）对抗奥斯曼土耳其人的最前沿军事要塞。从18世纪初开始，随着哈布斯堡王朝在军事上取得优势并控制该区域，泽蒙进入了它的“黄金时代”。它被正式并入哈布斯堡帝国，并作为一个自由的皇城蓬勃发展。来自中欧的商人、工匠和移民涌入，带来了巴洛克和古典主义的建筑风格、城市规划理念以及那种讲究秩序和优雅的生活气息。你如今看到的那些色彩和谐、线条整齐的民居街道，正是那个时代的遗产。那时的泽蒙，经济繁荣，文化上是中欧的一分子，与河对岸奥斯曼统治下、氛围迥异的贝尔格莱德形成了戏剧性的对比。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这种“双城记”的局面持续了近两百年。泽蒙不仅是军事堡垒，更成了贸易枢纽和多瑙河航运的重要港口。码头上堆满了来自维也纳、布达佩斯的货物，空气中混杂着各种语言。直到19世纪，随着奥斯曼势力的衰退，塞尔维亚逐渐取得自治权，贝尔格莱德开始复兴，但泽蒙依然保持着它的独特性。它甚至在1918年塞尔维亚人、克罗地亚人和斯洛文尼亚人王国（即南斯拉夫前身）成立后，仍短暂地维持着自治市的地位。它就像一个优雅的旧时代贵族，不愿完全融入新兴的国家肌体。</p>
              <p className="text-gray-700 leading-relaxed mb-4">真正的转折点是在二战之后。随着大贝尔格莱德城市规划的实施，泽蒙在行政上被正式并入首都，成为了它的一个区。推土机和现代公寓楼开始出现在它的边缘。听起来这像是一个小镇被大城市吞噬的悲伤故事，对吗？但泽蒙的魔力在于它的韧性。它的老城核心被奇迹般地保存了下来，未被大规模改造。当地居民固执地延续着他们的生活方式——在河畔钓鱼，在咖啡馆里下棋，在周末去市场采购。那段作为独立城镇的历史，化作了弥漫在街头巷尾的集体记忆和自豪感。今天的泽蒙，就像一位历经沧桑却依旧穿着得体、从容不迫的妇人，她的皱纹里刻着奥匈帝国的余晖、战争的伤痕，以及多瑙河水永恒的流淌声。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要完全感受泽蒙的精华，我强烈建议你安排完整的一天，从清晨到日暮。早上9点前抵达是最佳选择，这时旅游团还未涌入，本地人的生活刚刚苏醒，阳光斜射在彩色墙面上，光影极美。整体游览节奏务必放慢，以“散步”和“停留”为主，路线设计为从河岸开始，漫步老城小巷，登高望远，最后再回到河岸沉浸于黄昏的盛宴。这样的循环能让你从平视、仰视到俯视，全方位体验泽蒙的层次。总耗时约6-8小时，包括长时间的咖啡休息和一顿悠闲的午餐。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>“鱼街”餐馆的菜单价格可能略高，但为风景和氛围付费是值得的，也可以选择岔路里更本地化的小餐馆。
穿着绝对舒适的平底鞋，泽蒙的坡路和鹅卵石对高跟鞋是终极挑战。
如果夏季来访，午后阳光强烈，记得戴帽子和墨镜，并多在树荫或咖啡馆里休息。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从著名的“鱼街”（Kej oslobodenja）起点开始，迎着晨光沿多瑙河堤散步，看天鹅在泛着金光的河面上梳理羽毛，渔民正在检查前一夜布下的渔网。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">拐进与河岸平行的格拉查尼卡街（Glavna Ulica），让脚步在光滑的鹅卵石上打滑，仰头细看两旁建筑门楣上各不相同的浮雕、雕像和褪色的家族徽章。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">寻找小巷里通往圣尼古拉斯教堂的台阶，走进这座安静的塞尔维亚东正教教堂，感受蜡烛的暖光和圣像屏风前虔诚的老妇人低声祷告的肃穆氛围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着蜿蜒的上坡小径一路走向地标Gardos塔，途中会在民居的花园围墙外邂逅打盹的猫和怒放的玫瑰。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">登上Gardos塔的观景台，在360度的全景中寻找多瑙河转弯的弧线、对岸贝尔格莱德的新城天际线，以及脚下红瓦如鱼鳞般铺开的老城屋顶。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">下山后不必按原路返回，随意钻进任何一条看起来有趣的小巷，比如Ulica Zmaj Jovina，你会路过充满艺术气息的小画廊、古董店和飘着咖啡香的后院。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在下午三四点，必须找一家河畔的“卡法纳”（传统餐馆），抢一张靠近水边的桌子，点一份烤鲈鱼或煎鲤鱼，配上一杯本地白葡萄酒，进入泽蒙式的“慢食”时光。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">当夕阳将河面和对岸的建筑染成蜜色，加入当地人饭后散步的行列，沿着河岸一直走到泽蒙市场附近，感受晚风和生活气息的完美交融。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. Gardos塔下山路径上的拐角处</h4>
                  <p className="text-sm text-gray-700">下午日落前一小时，以红瓦屋顶和塔楼为背景，利用蜿蜒的石阶作为视觉引导线，能拍出极具纵深感和故事感的照片。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 多瑙河堤栏杆处</h4>
                  <p className="text-sm text-gray-700">清晨或蓝调时刻（日落后），以河面上成双成对的天鹅为前景，对焦于远处灯火初上的Gardos塔，营造浪漫静谧的氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 格拉查尼卡街中段的拱门下</h4>
                  <p className="text-sm text-gray-700">正午时分阳光直射时，拱门会形成强烈的明暗对比，人物站在阴影中，望向门外被阳光照亮的街道和行人，构图极具戏剧性。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 圣尼古拉斯教堂内部（如允许拍照）</h4>
                  <p className="text-sm text-gray-700">利用从窗户射入的光束，拍摄圣像屏风的金色细节和飘浮在空中的蜡烛烟雾，营造神秘而神圣的光影效果。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 某条无名小巷的尽头</h4>
                  <p className="text-sm text-gray-700">傍晚时分，巷子尽头的墙壁被夕阳染成暖金色，等待一个本地居民（如骑自行车的人、散步的老人）走入画面，捕捉最生活化的瞬间。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄当地居民，尤其是老人或小孩时，请务必先微笑示意并获得默许，尊重他们的隐私。</li>
                <li>• 河畔拍摄天鹅时切勿使用闪光灯，以免惊吓它们。</li>
                <li>• 教堂内部拍摄前一定要确认是否允许，并且绝对不要使用三脚架（通常禁止）或开启闪光灯。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">河景之选</h4>
                  <p className="text-sm text-blue-800">入住“鱼街”背后一栋19世纪老建筑改造的精品公寓，推开木窗就能看到多瑙河和海鸥的身影，夜晚在潺潺水声中入眠。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">历史沉浸</h4>
                  <p className="text-sm text-green-800">选择老城中心由传统住宅改建的民宿，房东奶奶会为你准备地道的自制早餐（果酱和奶酪），房间里是古朴的木梁和老家具。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">现代便利</h4>
                  <p className="text-sm text-yellow-800">住在泽蒙与贝尔格莱德新城交界处的设计酒店，既享有一流的现代设施和交通便利，步行十分钟又能瞬间进入老城的时空胶囊。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">极致浪漫</h4>
                  <p className="text-sm text-purple-800">预订Gardos山腰上为数不多的隐蔽别墅房间，拥有私人的小露台，可以独享毫无遮挡的日出和城市华灯初上的全景。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季（6-8月）是泽蒙的旺季，河畔住宿非常抢手，务必提前数月预订。</p>
              <p className="text-gray-700 leading-relaxed mb-4">泽蒙老城区域治安良好，夜晚散步很安全，但依然建议保管好随身物品。</p>
              <p className="text-gray-700 leading-relaxed mb-4">选择民宿时，注意很多老房子没有电梯，如果行李沉重，预订前最好确认一下。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开泽蒙许久后，我发现自己最怀念的，不是某个具体的建筑或画面，而是一种整体的“感觉”。那是一种脉搏放缓、感官打开的松弛状态。在这个效率至上的时代，泽蒙像是一个温柔的“叛逆者”。它不提供 checklist 式的景点打卡，它只提供生活本身——缓慢的、琐碎的、充满烟火气的真实生活。它让你重新学会“浪费”时间，并意识到这种“浪费”恰恰是旅行，乃至人生中最珍贵的部分。</p>
              <p className="text-gray-700 leading-relaxed mb-4">所以，如果你厌倦了那些被过度包装、人声鼎沸的欧洲名城，如果你渴望在一趟旅程中找到一个能让心灵真正靠岸的角落，请一定要来泽蒙。它可能不会给你带来视觉上极致的震撼，但它会像多瑙河水一样，无声地浸润你，抚平你内心的褶皱。在这里，你会发现，最美的风景不在明信片上，而在清晨面包房的雾气里，在老人下棋时长时间的沉默中，在夕阳下情侣共享一盘烤鱼时相视而笑的瞬间。泽蒙教会我们，历史不全是宏大的叙事，更多时候，它藏在这些平凡而坚韧的日常里，静静流淌，生生不息。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
