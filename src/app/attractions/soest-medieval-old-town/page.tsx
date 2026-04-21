import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '索斯特 Soest｜走进德国独一无二的绿色砂岩童话 – 最佳欧洲景点',
  description: '如果你厌倦了那些被过度修复、精致得像电影布景的中世纪小镇，那么索斯特会像一个结实的、带着粗砺掌纹的握手，给你最真实的历史触感。我的第一印象并非来自某座建筑，而是一种颜色——一种弥漫在整个老城的、温润的绿褐色。这不是植物带来的绿，而是石头本身的颜色。清晨的阳光斜斜地打在 Alter Markt（老集市...',
}

export default function SoestMedievalOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '索斯特', href: '/attractions/soest-medieval-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`索斯特・Soest・德国・索斯特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你厌倦了那些被过度修复、精致得像电影布景的中世纪小镇，那么索斯特会像一个结实的、带着粗砺掌纹的握手，给你最真实的历史触感。我的第一印象并非来自某座建筑，而是一种颜色——一种弥漫在整个老城的、温润的绿褐色。这不是植物带来的绿，而是石头本身的颜色。清晨的阳光斜斜地打在 Alter Markt（老集市广场）周围的建筑立面上，那些由本地开采的绿色砂岩砌成的山墙、拱门和塔楼，仿佛被镀上了一层蜂蜜般的光泽，柔和、沉静，像一块巨大的、未经雕琢的琥珀，把整个中世纪都包裹在了里面。
接着，各种声音开始渗入这幅画面。远处圣玛利亚教堂浑厚的钟声准时敲响，惊起一群鸽子；面包店刚出炉的黑麦面包带着焦香的热气，门上的铃铛叮当作响；你的鞋子踩在核心区那些被无数代人磨得光滑如镜的砂岩路面上，会发出一种特有的、闷闷的摩擦声。这里没有为了游客而存在的表演性喧嚣，只有当地人推着自行车去买菜，老人在长椅上读报，生活以一种不紧不慢的、威斯特法伦地区特有的稳重节奏，在这座千年古城里从容流淌。
最打动我的，是那种无与伦比的整体感。索斯特的老城被一道完整的、绿树成荫的环形城墙遗址和护城河公园所环绕，你几乎找不到一栋破坏天际线的现代建筑。从任何一个狭窄的巷子望出去，视线所及都是高低错落的绿砂岩山墙、陡峭的红瓦屋顶和教堂的尖塔。它不是某个孤立的景点，而是一个完整的、可呼吸的有机体。你能清晰地“读”到这座城市的规划：集市广场是心脏，教堂是精神支柱，城墙是防御边界，一切都遵循着中世纪城市最经典的逻辑。在这里漫步，你不是在参观“历史”，而是直接走进了历史还在持续跳动的脉搏里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你厌倦了那些被过度修复、精致得像电影布景的中世纪小镇，那么索斯特会像一个结实的、带着粗砺掌纹的握手，给你最真实的历史触感。我的第一印象并非来自某座建筑，而是一种颜色——一种弥漫在整个老城的、温润的绿褐色。这不是植物带来的绿，而是石头本身的颜色。清晨的阳光斜斜地打在 Alter Markt（老集市广场）周围的建筑立面上，那些由本地开采的绿色砂岩砌成的山墙、拱门和塔楼，仿佛被镀上了一层蜂蜜般的光泽，柔和、沉静，像一块巨大的、未经雕琢的琥珀，把整个中世纪都包裹在了里面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接着，各种声音开始渗入这幅画面。远处圣玛利亚教堂浑厚的钟声准时敲响，惊起一群鸽子；面包店刚出炉的黑麦面包带着焦香的热气，门上的铃铛叮当作响；你的鞋子踩在核心区那些被无数代人磨得光滑如镜的砂岩路面上，会发出一种特有的、闷闷的摩擦声。这里没有为了游客而存在的表演性喧嚣，只有当地人推着自行车去买菜，老人在长椅上读报，生活以一种不紧不慢的、威斯特法伦地区特有的稳重节奏，在这座千年古城里从容流淌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是那种无与伦比的整体感。索斯特的老城被一道完整的、绿树成荫的环形城墙遗址和护城河公园所环绕，你几乎找不到一栋破坏天际线的现代建筑。从任何一个狭窄的巷子望出去，视线所及都是高低错落的绿砂岩山墙、陡峭的红瓦屋顶和教堂的尖塔。它不是某个孤立的景点，而是一个完整的、可呼吸的有机体。你能清晰地“读”到这座城市的规划：集市广场是心脏，教堂是精神支柱，城墙是防御边界，一切都遵循着中世纪城市最经典的逻辑。在这里漫步，你不是在参观“历史”，而是直接走进了历史还在持续跳动的脉搏里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`索斯特`} />
                <InfoRow label="英文名称" value={`Soest`} />
                <InfoRow label="正式名称" value={`Soest`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`索斯特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座拥有千年历史的汉萨同盟城市，是连接科隆与波罗的海贸易路线上的璀璨明珠，其几乎完整保存的中世纪城市肌理在德国乃至欧洲都极为罕见。`} />
                <InfoRow label="建筑特色" value={`整座城市由一种独特的、在阳光下会呈现柔和绿褐色的砂岩建造，构成了和谐统一的“绿色之城”视觉奇观。`} />
                <InfoRow label="建筑风格" value={`以罗马式和哥特式为主体，杂糅了后哥特、文艺复兴及威斯特法伦木筋墙风格，形成独特的地域性建筑风貌。`} />
                <InfoRow label="文化价值" value={`它是一座活着的建筑博物馆，生动体现了中世纪北德汉萨城市的商业繁荣、市民自治精神与虔诚的宗教信仰如何完美融合于城市空间。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区全天可自由漫步。主要建筑内部开放时间各异：圣玛利亚教堂通常每日9:00-18:00开放；市政厅在工作日办公时间可参观部分区域；各个博物馆（如市立博物馆）的开放时间一般为周二至周日10:00-17:00。建议行前查阅具体场馆的最新时间表，冬季部分景点可能缩短开放时间。`} />
              <InfoRow label="门票价格" value={`漫步老城街区完全免费。进入圣玛利亚教堂免费，登塔可能需要小额捐赠。市立博物馆等场馆门票约4-6欧元，学生及团体享有优惠。市政厅参观通常免费。`} />
              <InfoRow label="地址" value={`Alter Markt, 59494 Soest, Germany`} />
              <InfoRow label="交通方式" value={`从多特蒙德机场出发，最便捷的方式是乘坐机场巴士或 regional train（区域火车）前往多特蒙德主火车站，耗时约20分钟。从多特蒙德主火车站乘坐频繁的 Regional-Express（RE）或 Regionalbahn（RB）列车直达索斯特火车站，车程约30-40分钟，几乎每半小时就有一班。从科隆/波恩机场出发，可乘火车至多特蒙德或哈姆转车至索斯特，总耗时约1.5小时。抵达索斯特火车站后，老城核心区就在步行10-15分钟的范围内，拖着箱子走在古老的石板路上也别有风味。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`索斯特的故事，得从一块特别的石头说起。大约在公元1000年前后，这里的居民发现地下蕴藏着一种质地相对柔软、易于开采雕刻的砂岩。奇妙的是，这种石头暴露在空气中经过风化后，表面会形成一层独特的、富含矿物质的深绿色铜锈 patina。于是，一座“绿色之城”的传奇就此奠基。到12世纪，索斯特已经成为科隆大主教辖区最重要的城市之一，财富与信仰并驾齐驱。你可以想象那时的景象：满载着盐、布料和葡萄酒的商队从科隆出发，经过漫长的旅途抵达索斯特的城墙下，商人们在这里的集市进行交易，然后把货物继续运往波罗的海沿岸。财富的积累催生了市民的自信，他们开始用本地最自豪的材料——绿色砂岩，建造足以彰显城市地位的建筑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城市的命运总是与权力和信仰交织。圣玛利亚教堂的建造就是一部史诗。早在公元1000年左右，这里就有一座前身教堂。但我们现在看到的宏伟哥特式大厅教堂，主要建于14世纪。它的建造过程本身就是一部市民精神的宣言书。它不是由某位主教或贵族下令修建，而是由富有的市民行会出资建造的。走进教堂内部，你会被那种近乎于仓库的、开阔宏大的空间感所震撼，这被称为“威斯特法伦大厅教堂”的形制，没有侧廊，巨大的拱顶由一排排细长的柱子直接支撑，阳光从高大的窗户倾泻而下，照亮整个空间。这种设计不是为了制造神秘感，而是为了容纳更多市民进行布道和集会，它是市民自治精神和商业实用主义的石头颂歌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`索斯特的黄金时代属于汉萨同盟。14世纪，它成为这个强大的北欧商业联盟的正式成员。城墙内，行会建筑、富商的宅邸、酒馆和仓库如雨后春笋般涌现。老集市广场上那座华丽的、带有阶梯山墙的市政厅，就是这个时期市民骄傲的顶峰。然而，历史的拐点出现在16世纪。宗教改革的风暴席卷而来，索斯特坚定地站在了新教一边，这导致它与天主教的科隆大主教彻底决裂，随之失去了大量的贸易特权和政治影响力。城市的经济地位逐渐被新兴的港口城市取代，繁华慢慢褪去。某种程度上，正是这种“衰落”保护了索斯特。因为它没有再经历大规模的重建和现代化改造，那些中世纪的街道布局和建筑得以像时间胶囊一样被封存下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，它也并非完全幸免于难。二战末期，猛烈的空袭摧毁了德国许多历史名城。奇迹般地，索斯特虽然也遭受了炸弹袭击，但核心的老城区大部分得以幸存。战后的重建没有选择推倒重来，而是遵循着“原位置、原形式”的谨慎原则，使用传统的绿色砂岩和工艺进行修复。正是这种对历史肌理近乎偏执的尊重，才让我们今天看到的不是一个仿古的迪士尼乐园，而是一个有着真实皱纹、伤疤和生命力的古老灵魂。走在街上，你偶尔能看到某面墙上镶嵌着不同深浅的绿色石块，那便是新旧时光对话的沉默印记。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味索斯特，强烈建议你留出一整天的时间。最佳的抵达时间是清晨，大约八点左右。这时游客尚未涌入，阳光柔和，老城刚刚苏醒，面包店的香气是最佳的向导。整体的游览节奏应该是慢悠悠的、发散式的。以老集市广场（Alter Markt）为圆心，先感受它的核心脉搏，然后像波纹一样向外扩散，去探索那些蜿蜒的小巷、隐秘的庭院和宁静的城墙公园。全程步行即可，舒适的鞋子是必需品。这样安排能让你在光线最好的上午欣赏建筑立面的色彩变化，中午在广场边的餐厅体验当地生活，下午则可以深入探索那些不太起眼却充满惊喜的角落，最后在城墙公园的绿荫下结束一天的漫步，看夕阳为绿砂岩披上金衣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午老集市广场有每周市集，非常热闹且充满生活气息，是体验当地风情的好机会，但也会非常拥挤。教堂内部请保持安静，尤其在举行礼拜时，从侧门安静进入，避免使用闪光灯。石板路在雨天会非常湿滑，穿一双防滑性能好的鞋子至关重要。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔老集市广场，站在空荡荡的广场中央环顾四周，感受被那些阶梯山墙、绿砂岩立面与古老市政厅所包围的穿越感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开圣玛利亚教堂那扇厚重的木门走进去，让你的眼睛在昏暗光线中适应片刻，然后仰望那由无数根细长石柱撑起的、如森林树冠般的网状拱顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧面小巷拐出，随意挑一条铺着发光石板的小路漫无目的地走，伸手触摸那些冰凉湿润、长着青苔的绿色砂岩墙，感受石头本身的肌理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城西南角找到那家历史可追溯到13世纪的“酿酒人屋”，即使不进去喝酒，也要看看它歪歪扭扭的木筋墙结构与厚重的绿色砂岩基座如何完美结合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰标记的“城墙小径”走上一段，从护城河另一侧的绿色公园回望老城，看连绵的红瓦屋顶与教堂尖塔组成的天际线在水中的倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果脚力尚可，去探寻一下圣帕特罗克鲁斯教堂，这座罗马式的前身教堂更为古老朴素，它的地窖里保存着令人动容的早期中世纪壁画残迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午茶时间，找一家有户外座位的咖啡馆，点一块威斯特法伦特色的“索斯特鸽子”蛋糕，静静观察广场上逐渐热闹又归于平静的日常流转。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前，再次回到圣玛利亚教堂附近，等待夕阳的金色光芒以极低的角度穿透巷子，将对面建筑的整个绿砂岩立面点燃成温暖的琥珀色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老集市广场东南角仰拍市政厅`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的侧光能完美勾勒出市政厅华丽阶梯山墙的立体感和绿砂岩的质感，将前景的行人或市场摊位纳入构图以增加生活气息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣玛利亚教堂中殿纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在主入口内侧，使用广角镜头沿中轴线向后拍，捕捉一排排石柱形成的强烈透视和尽头祭坛的光影，早晨或傍晚室内光线最具神圣氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“Höhne”小巷的经典视角`}</h4>
                  <p className="text-sm text-gray-700">{`这条狭窄弯曲的小巷两旁全是绿砂岩老房子，清晨或傍晚的低角度阳光能创造出迷人的明暗对比与狭长光影，等待一个骑自行车的人经过画面中央。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`护城河公园的倒影之镜`}</h4>
                  <p className="text-sm text-gray-700">{`在城墙公园靠近“Osthofentor”城门的水边，无风的清晨或傍晚，可以拍摄老城建筑群连同教堂尖塔在平静水面上近乎完美的对称倒影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣帕特罗克鲁斯教堂地窖的神秘光晕`}</h4>
                  <p className="text-sm text-gray-700">{`地窖内光线极度昏暗，需要使用三脚架长时间曝光，利用墙壁上微弱的射灯捕捉千年壁画残迹的斑驳质感与拱顶的低矮空间感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重隐私，拍摄当地居民特别是特写前，最好先微笑示意。使用无人机在德国城市上空飞行有严格限制，在老城区上空飞行基本被禁止，务必提前查询最新法规。绿色砂岩在阴天会呈现灰绿色，显得厚重；在晴天尤其是金色时刻会变得温暖通透，可根据想要的氛围选择天气和时间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城中心情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻于老集市广场旁一栋15世纪修复的绿砂岩建筑里的精品酒店，木梁天花板和古老的窗棂是标配，晚上听着广场的钟声入睡，清晨在面包香中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`宁静花园体验`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在环形城墙公园绿荫中的舒适民宿，房间窗户正对着护城河与老城背面，环境清幽至极，步行五分钟即可进入迷宫般的老城巷弄。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史感满格的特色住宿`}</h4>
                  <p className="text-sm text-yellow-800">{`住在由一座古老的修道院建筑部分改造而成的客栈里，厚重的石墙带来绝对的宁静，庭院里还保留着当年的水井，历史氛围直接拉满。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代设计隐居`}</h4>
                  <p className="text-sm text-purple-800">{`如果想要对比的体验，可以选择老城边缘一栋由传统仓库改造的设计师酒店，内部是极简的现代风格，但打开窗，看到的依然是那片亘古不变的绿砂岩屋顶的海洋。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量有限且非常抢手，尤其在夏季和圣诞市场期间，务必提前数月预订。所有位于老城的住处都不允许车辆进入，需要将车停在城墙外的公共停车场，然后拖着行李走一小段石板路，但这本身就是入住中世纪古城仪式感的一部分。治安非常好，夜晚独自在老城内漫步也感到十分安全。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开索斯特很久以后，我发现自己最怀念的，不是某座具体的教堂或广场，而是一种整体的、安宁的“氛围感”。在这个一切都追求速成、模仿和爆炸性视觉效果的时代，索斯特提供了一种截然相反的旅行价值：它不是用来“打卡”的，而是用来“沉浸”的。它拒绝向你炫耀，只是沉默地、谦逊地存在着，让你自己去发现绿色砂岩上每一道风霜的刻痕，去聆听石板路上回响的千年脚步声。这种美，不是张扬的、戏剧性的，而是内敛的、耐人寻味的，像一本纸质泛黄但内容扎实的书，需要你静下心来，一页一页慢慢读。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，每一位热爱深度游的旅人，都应该把索斯特列入清单，不仅仅是为了看一座保存完好的中世纪古城，更是为了体验一种完整的历史空间感。在这里，你能真切地触摸到时间本身的质地——它不是断裂的碎片，而是一条连续、绵长的河流。走在它的街上，你会不自觉地放慢脚步，降低音量，内心变得平静。索斯特教会我们，真正的文化遗产，不是玻璃罩里的标本，而是依然能容纳生活、承载情感、并与当下温柔对话的场所。它提醒我们，在追求新奇与刺激的旅途之外，还有一种旅行，是为了找回那种与过往岁月深深联结的踏实与宁静。这，或许就是它馈赠给当代旅人最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/korcula-old-town-marco-polo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔丘拉岛（马可波罗故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Korčula</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/erfurt-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃尔福特老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Erfurt Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veszprem" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维斯普雷姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">veszprem</p>
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
