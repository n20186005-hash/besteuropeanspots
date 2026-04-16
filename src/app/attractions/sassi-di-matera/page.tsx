import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马泰拉石窟民居 Sassi di Matera｜穿越九千年时光的石头之城 - 最佳欧洲景点',
  description: '你第一眼看到马泰拉的感觉，很难用“城市”或“村庄”来形容。它更像一个巨大的、沉默的蜂巢，或者一块被时间蛀空了、却又顽强屹立着的古老岩石。车子盘旋而上，当整个“Sassi”石窟区毫无预警地铺展在峡谷对岸时，我瞬间屏住了呼吸。那不是建筑，那是大地本身的褶皱和伤疤，成千上万个灰白色的石窟窗口，像无数只深邃...',
}

export default function SassiDiMateraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '马泰拉石窟民居', href: '/attractions/sassi-di-matera' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">马泰拉石窟民居・Sassi di Matera・意大利・马泰拉</h1>
          <p className="text-lg text-gray-600 mb-6">
            你第一眼看到马泰拉的感觉，很难用“城市”或“村庄”来形容。它更像一个巨大的、沉默的蜂巢，或者一块被时间蛀空了、却又顽强屹立着的古老岩石。车子盘旋而上，当整个“Sassi”石窟区毫无预警地铺展在峡谷对岸时，我瞬间屏住了呼吸。那不是建筑，那是大地本身的褶皱和伤疤，成千上万个灰白色的石窟窗口，像无数只深邃的眼睛，在清晨的薄雾中静静凝视着你。空气里有种干燥的、混合着岩石粉尘和历史尘埃的气味，偶尔传来远处教堂沉郁的钟声，一下，又一下，仿佛敲在时间的轴心上。
走下缓坡，真正进入这片石头的迷宫，感官才被完全打开。脚下是千百年来被无数足迹打磨得光滑如镜的石板路，缝隙里长出顽强的野草。巷道窄得只容一人通过，两侧是高耸的石壁，抬头望去，你家屋顶就是我家的庭院，层层叠叠，几乎没有一寸平地。你能听到头顶露台上老太太晒被单的拍打声，闻到从某个幽深门洞里飘出的、用古老炉灶炖煮的番茄酱浓香，看到一只橘猫优雅地从一扇窗台跳到另一扇，那里几千年前可能住着它的祖先。这里的一切都充满了一种原始的生命力，它不是废墟，而是一个仍然在缓慢呼吸的有机体。
最打动我的，是光与影在这里的戏剧性舞蹈。正午时分，阳光近乎残酷地直射在岩石表面，明暗对比强烈，整个城市线条硬朗，像一幅版画。而到了黄昏，金色的夕照为每一块石头镀上蜂蜜般的暖色，那些深邃的洞穴入口变得柔和，窗台的花盆里天竺葵红得耀眼。当地老人坐在自家洞穴改造成的门廊前，看着游客如时光的潮水般涨落，眼神平静。你会发现，这份“古朴”并非表演，而是他们生活的底色。马泰拉的灵魂，就在于这种惊人的连续性——从史前人类点燃第一堆篝火，到今天游客用手机拍下落日，同样的岩石庇护了九千年的炊烟、祈祷、欢笑与叹息。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">你第一眼看到马泰拉的感觉，很难用“城市”或“村庄”来形容。它更像一个巨大的、沉默的蜂巢，或者一块被时间蛀空了、却又顽强屹立着的古老岩石。车子盘旋而上，当整个“Sassi”石窟区毫无预警地铺展在峡谷对岸时，我瞬间屏住了呼吸。那不是建筑，那是大地本身的褶皱和伤疤，成千上万个灰白色的石窟窗口，像无数只深邃的眼睛，在清晨的薄雾中静静凝视着你。空气里有种干燥的、混合着岩石粉尘和历史尘埃的气味，偶尔传来远处教堂沉郁的钟声，一下，又一下，仿佛敲在时间的轴心上。</p>
              <p className="text-gray-700 leading-relaxed mb-4">走下缓坡，真正进入这片石头的迷宫，感官才被完全打开。脚下是千百年来被无数足迹打磨得光滑如镜的石板路，缝隙里长出顽强的野草。巷道窄得只容一人通过，两侧是高耸的石壁，抬头望去，你家屋顶就是我家的庭院，层层叠叠，几乎没有一寸平地。你能听到头顶露台上老太太晒被单的拍打声，闻到从某个幽深门洞里飘出的、用古老炉灶炖煮的番茄酱浓香，看到一只橘猫优雅地从一扇窗台跳到另一扇，那里几千年前可能住着它的祖先。这里的一切都充满了一种原始的生命力，它不是废墟，而是一个仍然在缓慢呼吸的有机体。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最打动我的，是光与影在这里的戏剧性舞蹈。正午时分，阳光近乎残酷地直射在岩石表面，明暗对比强烈，整个城市线条硬朗，像一幅版画。而到了黄昏，金色的夕照为每一块石头镀上蜂蜜般的暖色，那些深邃的洞穴入口变得柔和，窗台的花盆里天竺葵红得耀眼。当地老人坐在自家洞穴改造成的门廊前，看着游客如时光的潮水般涨落，眼神平静。你会发现，这份“古朴”并非表演，而是他们生活的底色。马泰拉的灵魂，就在于这种惊人的连续性——从史前人类点燃第一堆篝火，到今天游客用手机拍下落日，同样的岩石庇护了九千年的炊烟、祈祷、欢笑与叹息。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="马泰拉石窟民居" />
                <InfoRow label="英文名称" value="Sassi di Matera" />
                <InfoRow label="正式名称" value="Sassi di Matera" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="马泰拉" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="这是世界上最古老且持续有人类居住的穴居群落之一，其历史可追溯至旧石器时代，被誉为“意大利的耻辱与骄傲”，最终成为人类坚韧生存的象征和世界文化遗产。" />
                <InfoRow label="建筑特色" value="整个城市如同从石灰岩峡谷中自然生长出来，房屋、教堂、街道皆由掏空、堆叠原生岩石而成，形成迷宫般的立体洞穴网络。" />
                <InfoRow label="建筑风格" value="史前穴居风格与后续叠加的拜占庭、中世纪、文艺复兴及巴洛克元素奇妙融合的有机建筑典范。" />
                <InfoRow label="文化价值" value="它是一本活着的“人类居住史”，直观展示了从原始穴居到现代社区的全过程，其独特的形象更是无数电影（如《007：无暇赴死》、《耶稣受难记》）的取景地。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="石窟民居区域本身全天24小时开放，但进入大部分由石窟改造的酒店、餐厅或特定历史遗迹（如石窟教堂）需遵循各自的营业时间。核心参观景点如“石窟民居博物馆”（Casa Grotta）通常开放时间为夏季（4月至10月）上午9:30至晚上7:30，冬季（11月至3月）上午9:30至下午5:30，中午可能有一到两小时的休息时间。重要的石窟教堂如“石中之圣母”教堂（Santa Maria de Idris）开放时间较为多变，强烈建议出行前在官网或当地旅游信息中心确认。大部分商业场所周一可能休息。" />
              <InfoRow label="门票价格" value="漫步石窟区域本身免费。参观单个石窟民居博物馆的门票约为3-5欧元。若计划参观多个石窟教堂和博物馆，强烈推荐购买“马泰拉石窟通行证”（Matera Sassi Pass），价格约为15欧元，有效期内可进入约7-8个主要景点。学生、65岁以上老人及团体通常有1-2欧元的折扣。部分高级酒店或餐厅的露台观景需消费方可进入。" />
              <InfoRow label="地址" value="Sassi di Matera, 75100 Matera MT, Italy" />
              <InfoRow label="交通方式" value="最近的机场是巴里机场（BRI），距离马泰拉约60公里。从巴里机场出发，最便捷的方式是提前预订共享小巴或出租车，车程约1小时，费用人均约15-25欧元。也可先乘坐机场巴士到巴里中央火车站（约20分钟），再转乘火车前往马泰拉，火车班次约每1-2小时一班，车程1.5小时，总耗时约2.5小时。自驾是最灵活的选择，从巴里沿SS99公路前往，路况良好，但马泰拉老城内部为ZTL交通限制区，务必提前与住宿处确认停车安排，通常需停在城外指定停车场（费用约每天10-15欧元）。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要讲马泰拉的故事，得从一片叫做“穆尔贾”的石灰岩高原说起。大约九千年前，旧石器时代的人类发现了这里柔软易凿的石灰岩，他们掏出第一个洞穴，用以遮风避雨，躲避野兽。这不是建造，而是“减去”。历史的脉络在此以一种最直观的方式层层沉积：你往下挖，可能先碰到中世纪的地板，再往下是古罗马的瓦砾，最底层是史前人类的燧石工具。在漫长的岁月里，这里陆续住过农民、牧羊人、修道僧侣。拜占庭帝国的隐修士们在岩石深处开凿出上百座装饰着湿壁画的石窟教堂，让这里一度成为南意的宗教中心，那些褪色的圣像壁画，至今在幽暗洞穴中闪烁着神秘的光。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，马泰拉命运的转折，源于它后来的贫穷与拥挤。随着人口增长，石窟被不断分割、加建，一个原本住一家人的洞穴，可能挤进了五六户人，加上他们的牲畜。没有自来水，没有下水道，疾病蔓延。二十世纪中叶，意大利作家卡洛·莱维在其著作《基督止步埃波利》中，以悲悯而尖锐的笔触描绘了这里的极端贫困，称它为“意大利的耻辱”。这一描述震惊全国，政府终于下定决心，在1950年代强制迁出了约一万五千名居民，将他们安置到新城区的现代公寓中。一夜之间，古老的“Sassi”几乎成为被遗弃的、充满悲伤记忆的鬼城。</p>
              <p className="text-gray-700 leading-relaxed mb-4">被遗弃的三十年，是马泰拉沉默的三十年。风雨侵蚀着空荡的洞穴，野草在街道上蔓生。但转机往往在谷底出现。一批有远见的艺术家、知识分子和本地年轻人，开始以全新的眼光审视这片废墟。他们看到的不是耻辱，而是无与伦比的文化与建筑价值。他们冒着风险，购买、清理那些被遗弃的石窟，小心翼翼地修复，引入现代化的管线，但保留其原始的灵魂。一家家精品酒店、餐厅、艺术工作室像种子一样在岩石缝隙中生根发芽。这场草根的文化复兴运动，坚韧而缓慢，却彻底改变了马泰拉的命运。</p>
              <p className="text-gray-700 leading-relaxed mb-4">1993年，联合国教科文组织将马泰拉的石窟民居列入世界遗产名录，评价其为“地中海地区最著名、保存最完好的穴居人遗址，并且完美地适应了当地的地形与生态系统”。这顶桂冕像一道光芒，照亮了这座石头城。2019年，它被选为“欧洲文化之都”，盛大的庆典与艺术活动彻底将它推向了世界舞台。今天，当你走在其中，你会感受到一种奇特的和谐：那扇装着空调主机的古老石门旁，可能就挂着当代艺术家的画作；一个千年石窟教堂的地下，可能是一家获得米其林推荐的餐厅的酒窖。历史不再是被封存的标本，而是流动的、可供居住和体验的现在。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要真正领略马泰拉的灵魂，至少需要一整天时间，并且强烈建议在此住上一晚，感受它从白日喧嚣沉入夜晚宁静的魔力。理想的游览从清晨开始，大约七点半左右，这时大批一日游游客尚未抵达，光线柔和。整体节奏宜慢不宜快，因为这里的地形上下起伏极大，本身就是个体力活。上午建议从高处俯瞰全景开始，然后深入“Sasso Caveoso”区（更具原始风貌），探访石窟民居和教堂；下午可以逛“Sasso Barisano”区（更多修复的精品店和酒店），并在黄昏时分抵达最佳观景点等待落日。这样的安排能让你在光线最美的时刻身处最合适的位置，并有效避开人流高峰。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>务必穿一双绝对防滑、支撑性好的步行鞋，这里的石头路面光滑且阶梯极多，高跟鞋是灾难。
很多小巷没有明确路标且GPS信号弱，别怕迷路，迷失本身就是马泰拉体验的一部分，但大方向记住“向上走”总能回到主广场。
警惕过于热情的“免费导游”带你去看“特别洞穴”，他们通常最后会索要高额小费，所有正规景点都有明确标价。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">清晨先从主教堂广场旁的观景台出发，看晨光如何一寸寸点亮对面层层叠叠如迷宫般的石窟群，听整个石头之城在鸟鸣中缓缓苏醒。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">顺着陡峭的阶梯向下，钻进“Sasso Caveoso”区最窄的巷子，用手触摸那被无数代人摩挲得温润如玉的岩石墙壁。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一定要走进一家复原的“石窟民居博物馆”，坐在那铺着简单麻布床单的石床上，想象一个家庭与他们的驴、鸡共享这同一个洞穴空间的艰辛生活。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">找到隐藏在岩石褶皱里的“石中之圣母”教堂，在幽暗的光线里辨认拜占庭湿壁画上那些目光沉静的圣徒面孔。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">中午时分，找一家有石窟露台的餐厅，点一份用古老方法制作的“鹰嘴豆泥糊”，一边享用一边俯瞰脚下深谷。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">下午在“Sasso Barisano”区随意穿梭，探访那些由洞穴改造的精致手工艺品店，看当代设计如何与原始岩壁对话。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">务必在日落前一小时抵达“黄昏观景台”，看着夕阳将整个石窟区从灰白染成金黄，再变成温暖的赭石红，直到灯火如星辰般在洞穴窗口中次第亮起。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">晚餐后，不要急着回去，就在寂静无人的巷道里随意走走，月光下的马泰拉会呈现出与白日截然不同的、神秘而苍凉的面貌。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 观景台全景</h4>
                  <p className="text-sm text-gray-700">日落前黄金一小时，从“Belvedere di Piazza Giovanni Pascoli”观景台向西拍摄，使用长焦镜头压缩空间，能拍出石窟群如瀑布般从山顶倾泻而下的史诗感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 洞穴窗框构图</h4>
                  <p className="text-sm text-gray-700">正午阳光直射时，在“Sasso Caveoso”区找一个有漂亮门洞或窗框的角落，将人物作为剪影置于前景，框住后面被阳光照得发白的密集石窟群落。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 深巷光影对比</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚的侧光时分，走进一条狭窄的阶梯小巷，让阳光从一侧斜射进来，捕捉光线切割岩石墙壁形成的强烈明暗对比和质感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 内部空间叙事</h4>
                  <p className="text-sm text-gray-700">参观石窟民居时，将相机感光度调高，利用室内昏暗的自然光，拍摄石灶、石床等细节，营造出时间凝固的静谧氛围。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 夜景魔法时刻</h4>
                  <p className="text-sm text-gray-700">日落后蓝色时刻，从新城区的“Via Ridola”街道向老城望去，等待石窟窗口的暖黄色灯光与深蓝色的天空形成绝美对比。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，拍摄居民或他们家的内部前，请务必先微笑并征得同意，一个手势就能表达善意。</li>
                <li>• 准备一个广角镜头（拍全景和洞穴内部）和一个大光圈定焦镜头（在昏暗教堂和巷道里捕捉细节），三脚架在夜间拍摄非常有用。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">沉浸式洞穴体验</h4>
                  <p className="text-sm text-blue-800">住在“Sasso Caveoso”区核心地带一座经过精心修复的石窟酒店里，房间就是千年前的洞穴，拱形岩顶和原始石壁被完美保留，但配备了地暖和水疗淋浴，晚上能听到岩石的呼吸声。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">设计感精品之选</h4>
                  <p className="text-sm text-green-800">由一组相连洞穴改造而成的精品酒店，融合了极简设计与原始岩壁，拥有一个可从岩石中掏挖出的、如同梦幻般的悬崖泳池，在泳池里就能俯瞰整个峡谷。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">历史官邸奢华</h4>
                  <p className="text-sm text-yellow-800">入住位于老城最高点、由一座十六世纪宫殿改造的五星级酒店，不仅享受现代奢华，更拥有可以360度环视石窟区和辽阔高原的绝美屋顶露台。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">温馨家庭石窟</h4>
                  <p className="text-sm text-purple-800">选择一家由本地家庭经营的民宿，房间可能小巧但充满人情味，房东妈妈会为你准备丰盛的普利亚大区早餐，并分享她童年在这个石窟里长大的故事。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">旺季（春夏和节假日）的马泰拉住宿非常紧俏，尤其是特色洞穴酒店，务必提前至少两三个月预订。</p>
              <p className="text-gray-700 leading-relaxed mb-4">洞穴酒店普遍存在手机信号弱的问题，但Wi-Fi通常良好，把这当作一次数字排毒的机会吧。</p>
              <p className="text-gray-700 leading-relaxed mb-4">无论住哪里，请做好心理准备：你需要拖着行李走一段相当崎岖的石板路才能到达，这是抵达穿越感的第一课。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开马泰拉许久，那片石头的颜色和质感还会时常在脑海里浮现。它给我的震撼，不仅仅来自于视觉的奇观，更来自于一种深层的、关于时间与人类存在的思考。我们习惯了生活在由砖瓦、钢筋和玻璃构筑的、不断更新换代的世界里，时间被切割成清晰的段落。但在马泰拉，时间是一种绵密的、叠加的、循环的物质。你踩着的石头，可能既是史前人类的地板，也是中世纪修士的房顶，还是今天某位艺术家工作室的墙壁。这里没有“过去”与“现在”的决然分野，只有生生不息的“居住”本身。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这大概就是马泰拉在当今这个追求崭新、速度和效率的世界里，显得如此珍贵的原因。它是一面镜子，让我们看到人类生存最原始也最坚韧的形态。它告诉我们，家可以不是占有土地向上建造，而是向大地母亲内部寻求庇护；社区可以不是整齐划一的规划，而是在岩石的褶皱中自然生长出的共生关系。它曾因“落后”而被抛弃，又因这份“古老”而获得重生。每一位热爱深度游的旅人，都应该来感受这份时间的重量。在这里，你不仅能拍到惊艳的照片，更能获得一种难得的平静——当你触摸着那被九千年炊烟熏暖的岩壁，你会明白，所有的喧嚣都是暂时的，而生命与石头一样，自有其沉默而恒久的韵律。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
