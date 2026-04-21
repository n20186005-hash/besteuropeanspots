import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '比尔/比安 Biel/Bienne｜漫步双语时光胶囊，探秘顶级腕表的静谧心脏 - 最佳欧洲景点',
  description: '第一眼看到比尔/比安的老城，你会误以为自己闯进了一个被时间遗忘的角落。阳光透过菩提树的枝叶，在那些被岁月打磨得光滑如镜的鹅卵石路面上洒下细碎的光斑。空气里有股清冽的味道，混合着从街角面包店飘出的黄油香，还有雨后石板缝隙里苔藓的湿润气息。耳边是奇妙的双语交响曲——身旁走过的老太太用带着轻柔口音的德语念',
}

export default function BielBienneMedievalOldTownWatchmakingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '比尔/比安', href: '/destinations/europe' },
            { label: '比尔/比安', href: '/attractions/biel-bienne-medieval-old-town-watchmaking' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`比尔/比安・Biel/Bienne・瑞士・比尔/比安`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到比尔/比安的老城，你会误以为自己闯进了一个被时间遗忘的角落。阳光透过菩提树的枝叶，在那些被岁月打磨得光滑如镜的鹅卵石路面上洒下细碎的光斑。空气里有股清冽的味道，混合着从街角面包店飘出的黄油香，还有雨后石板缝隙里苔藓的湿润气息。耳边是奇妙的双语交响曲——身旁走过的老太太用带着轻柔口音的德语念叨着购物清单，而咖啡馆露天座上，几个年轻人正用飞快的法语谈笑风生。这种自然而然的混杂，让整个街区充满了一种亲切的、生活化的活力，它不是一个博物馆式的景点，而是当地人实实在在过日子、遛狗、买面包的地方。
但只要你稍微抬起头，视线越过那些有着陡峭红瓦屋顶的古老山墙，就能望见远处几栋线条利落、玻璃幕墙反射着天光的现代建筑。那里是另一个世界，一个安静运转着的精密宇宙。你几乎能想象，在那样的建筑里，空气是恒温恒湿的，只听得见最细微的机械嗡鸣，工匠们正通过显微镜，将一个个比芝麻还小的齿轮装配进表壳。古城的心脏缓慢而有力地搏动，而几公里外，这座城市另一个心脏——全球顶级制表业的神经中枢——正以每秒数万次的高频振动着。这种极致的反差与共存，正是比尔最打动人心的魔力。
漫步是感受它的唯一正确方式。你的手指可以划过某栋15世纪房屋外墙上雕刻的葡萄藤花纹，那是过去葡萄酒贸易繁荣的印记。下一秒，你可能就在某个不起眼的巷口，看到一扇厚重的橡木门上挂着极简的金属招牌，上面只刻着一个举世闻名的腕表品牌Logo和“私人接待处”的法语字样。这里没有张扬的炫耀，只有内敛的自信。生活的烟火气与追求极致的匠人精神，在这片不大的区域里呼吸与共，形成了一种独特的气场，不喧嚣，却充满力量。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到比尔/比安的老城，你会误以为自己闯进了一个被时间遗忘的角落。阳光透过菩提树的枝叶，在那些被岁月打磨得光滑如镜的鹅卵石路面上洒下细碎的光斑。空气里有股清冽的味道，混合着从街角面包店飘出的黄油香，还有雨后石板缝隙里苔藓的湿润气息。耳边是奇妙的双语交响曲——身旁走过的老太太用带着轻柔口音的德语念叨着购物清单，而咖啡馆露天座上，几个年轻人正用飞快的法语谈笑风生。这种自然而然的混杂，让整个街区充满了一种亲切的、生活化的活力，它不是一个博物馆式的景点，而是当地人实实在在过日子、遛狗、买面包的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但只要你稍微抬起头，视线越过那些有着陡峭红瓦屋顶的古老山墙，就能望见远处几栋线条利落、玻璃幕墙反射着天光的现代建筑。那里是另一个世界，一个安静运转着的精密宇宙。你几乎能想象，在那样的建筑里，空气是恒温恒湿的，只听得见最细微的机械嗡鸣，工匠们正通过显微镜，将一个个比芝麻还小的齿轮装配进表壳。古城的心脏缓慢而有力地搏动，而几公里外，这座城市另一个心脏——全球顶级制表业的神经中枢——正以每秒数万次的高频振动着。这种极致的反差与共存，正是比尔最打动人心的魔力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步是感受它的唯一正确方式。你的手指可以划过某栋15世纪房屋外墙上雕刻的葡萄藤花纹，那是过去葡萄酒贸易繁荣的印记。下一秒，你可能就在某个不起眼的巷口，看到一扇厚重的橡木门上挂着极简的金属招牌，上面只刻着一个举世闻名的腕表品牌Logo和“私人接待处”的法语字样。这里没有张扬的炫耀，只有内敛的自信。生活的烟火气与追求极致的匠人精神，在这片不大的区域里呼吸与共，形成了一种独特的气场，不喧嚣，却充满力量。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`比尔/比安`} />
                <InfoRow label="英文名称" value={`Biel/Bienne`} />
                <InfoRow label="正式名称" value={`Biel/Bienne`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`比尔/比安`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座完美融合了德语区严谨与法语区浪漫的双语古城，更是瑞士钟表业从家庭作坊走向世界顶级精密制造的活态见证与核心腹地。`} />
                <InfoRow label="建筑特色" value={`中世纪老城的鹅卵石街道与色彩柔和的连排房屋，与不远处现代、洁净的制表工业园区形成静谧而有力的时空对话。`} />
                <InfoRow label="建筑风格" value={`老城以晚期哥特式和文艺复兴风格为主，混杂着18、19世纪的古典主义民居；工业区则是极简、实用的现代主义建筑典范。`} />
                <InfoRow label="文化价值" value={`这里不仅是地理上的双语交汇点，更是文化上“慢生活”古城灵魂与“快精密”现代工业神经的共生典范，诠释了瑞士精神的深层内核。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`比尔老城全天开放，主要街道和广场可自由漫步。核心的文化场馆如“伯尔尼汝拉地区钟表博物馆”开放时间：周二至周日上午10点至下午5点，周一闭馆。部分小型私人制表工坊需提前预约参观。夏季（5月至9月）是游览旺季，所有设施正常开放；冬季部分户外咖啡馆会关闭，但博物馆照常，且圣诞市场期间（11月底至12月）老城别有风味。`} />
              <InfoRow label="门票价格" value={`进入比尔老城区域免费。伯尔尼汝拉地区钟表博物馆：成人票12瑞士法郎，学生及老年人10瑞士法郎，16岁以下儿童免费。持有瑞士旅行通票可享受折扣。参加本地制表工坊导览体验价格在50-200瑞士法郎不等，取决于工坊级别和体验深度。`} />
              <InfoRow label="地址" value={`Biel/Bienne, 2502 Biel/Bienne, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场出发：最便捷方式是乘坐火车。在机场火车站直接乘坐前往伯尔尼或比尔/比安的直达或中转列车，车程约1小时15分钟至1小时45分钟，班次密集，每小时有多趟。从日内瓦机场出发：火车车程约2小时，通常需要在伯尔尼或纳沙泰尔换乘一次。市内交通：比尔火车站位于老城和新城区交界处，步行5分钟即可进入古城核心。城市公交系统发达，但老城区域小巧，强烈建议全程步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "比尔的故事始于一条河——苏斯河。早在罗马时代，这里就是一个重要的渡口和渔村。到了中世纪，得益于其地处从伯尔尼高地通往汝拉山区、再连接法国勃艮第的贸易通道上的关键位置，比尔逐渐发展成一个繁荣的市场小镇。13世纪，它获得了城市特许状，开始修建城墙和防御工事。你如今看到的那些带有拱廊的主街，正是在那个时期成型，为商人和市民遮风挡雨。当时的比尔主要讲德语，受伯尔尼的影响很深，但它同时也向西方敞开着怀抱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的第一次重大转折发生在16世纪。宗教改革的风暴席卷欧洲，许多信奉天主教的法国制表匠人为了躲避迫害，从法国和瑞士的法语区（尤其是日内瓦）向北迁移。他们翻过汝拉山脉，来到了相对宽容、并且急需手工业活力的比尔地区。这些身怀绝技的工匠，带来了当时最先进的钟表制作技术。茂密的汝拉森林提供了优质的木材作为燃料和制作表壳的材料，清澈的山间溪流提供了驱动早期简单机械的水力。钟表制作，从这时起，开始在这片土地上扎根，从家庭小作坊慢慢生长。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正的腾飞要等到18世纪末和19世纪的工业革命。随着精密机械和标准化生产的引入，钟表制造从一门纯粹的手艺，演变为一门融合了科学、工程和艺术的现代工业。比尔凭借之前积累的匠人基础，以及后来修建的铁路带来的交通便利，迅速成为这个新兴工业的核心区域之一。20世纪，这里诞生了如欧米茄（虽然总部后来迁往比尔附近的比尔市）、劳力士（其机芯研发与生产核心一直在比尔地区）等影响世界的品牌。1970年代的石英危机几乎摧毁了整个瑞士机械制表业，比尔也经历了阵痛，工厂倒闭，工人失业。但正是深植于这里的坚韧和创新精神，让产业在低谷中坚守，并通过聚焦高端复杂机械腕表，在80年代末奇迹般地复兴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的比尔/比安，是这段跌宕历史的集大成者。老城得到了精心的保护，每一块石头都诉说着中世纪商埠的往事。而在城市边缘及周边的汝拉山谷中，那些看似低调的工业园区里，进行着这个星球上最顶尖的微观机械制造。它不再是简单的“德语城”或“法语城”，而是一个真正意义上的“钟表之城”，两种语言、两种文化在这里共同服务于一个对精确与美有着极致追求的梦想。战争、宗教、经济危机都曾试图改变它的轨迹，但最终，时间本身——以及测量时间的艺术——成了这座城市永恒的主题与胜利者。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一个完整的日子来沉浸式体验比尔的双面灵魂。最佳抵达时间是上午9点左右，这时老城刚刚苏醒，晨光柔和，店铺陆续开门，游客尚少。整体耗时约8-9小时，游览节奏宜张弛有度：上午沉浸在老城的历史氛围中，中午享用一顿悠闲的午餐，下午探索钟表工业的文化层面，傍晚在湖边放松，感受城市的日常生活脉动。这样的安排能让你由古及今，由表及里，逐步理解这座城市从宁静古城到精密中枢的完整脉络。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观任何制表工坊都必须提前数周甚至数月通过官网或邮件预约，临时起意绝无可能进入核心区域。
老城部分石板路凹凸不平且略带坡度，请务必穿一双绝对舒适防滑的步行鞋，高跟鞋在这里是“灾难级”选择。
如果你对钟表技术并非狂热爱好者，钟表博物馆的深度信息可能略显艰深，建议提前了解一些基础知识，或重点观赏其艺术设计部分。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从中央火车站出来，故意不查看地图，任由自己迷失在伯格加西街那些被清晨阳光照亮的文艺复兴风格拱廊之下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政厅广场停下脚步，抬头仔细观察那栋16世纪建筑立面上精美的天文钟，听它整点报时发出的沉稳鸣响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开伯尔尼汝拉地区钟表博物馆厚重的大门，让自己被从古老日晷到最新陀飞轮的时光长河静静包裹，深吸一口气，那是机油、金属和历史尘埃混合的独特气味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城边缘找一家家庭经营的小餐馆，点一份经典的伯尔尼拼盘，在露台上看着穿行而过的有轨电车和步履匆匆、手提公文包的工程师们。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`预约参观一家面向公众的制表工坊或品牌展示中心，戴上放大镜片，亲眼见证一位制表师如何将细如发丝的游丝安装到摆轮之上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着比尔湖畔的步道一直往南走，直到城市的喧嚣彻底褪去，只剩下湖水轻拍岸边的声音和远处汝拉山脉的绵延轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在尼道公园的高处找一张长椅坐下，等待日落，看夕阳的金光先染红老城的教堂尖顶，再缓缓漫过远处制表工厂平整的玻璃幕墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后再次踱回寂静的老城中心，在街灯昏黄的光线下，感受石板路白天吸收的阳光余温，和空气中似乎仍未散去的精密齿轮的想象韵律。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老城拱廊光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，太阳西斜时，站在伯格加西街的东侧，利用拱廊形成的天然画框，捕捉行人走过时光影切割的明暗对比，焦点可以对准远处教堂的尖顶。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`钟表博物馆旋转楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`馆内那个连接楼层、极具现代感的螺旋楼梯，从上方向下俯拍，能形成简洁而有力的几何构图，最佳光线是室内灯光完全开启的白天。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`工业区与老城同框`}</h4>
                  <p className="text-sm text-gray-700">{`前往湖东岸的绍万德公园，用长焦镜头压缩空间，将前景的宁静湖面、中景色彩斑斓的老城房屋、与背景线条冷峻的现代制表工业园区大楼纳入同一画面，尤其在晴空万里的傍晚。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`苏斯河畔的倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨，在老城北侧的苏斯河小桥上，拍摄河水中文艺复兴风格房屋和蓝天白云的完美倒影，水面平静时能获得镜像般的对称效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`制表师工作特写（如获参观许可）`}</h4>
                  <p className="text-sm text-gray-700">{`在获准拍照的工坊内，使用大光圈镜头，聚焦于制表师手中正在调校的机芯，将周围环境虚化，捕捉那全神贯注的瞬间和精密零件上的金属光泽。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在博物馆和所有工坊内部，务必严格遵守拍照规定，闪光灯绝对禁止，因为它可能对脆弱的古董钟表机芯造成损害。`}</li>
                <li>• {`拍摄街景时，请尽量尊重当地居民隐私，避免长时间对准私人住宅窗户或对特定人物进行突兀的特写拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城心脏之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻于由16世纪贵族宅邸改造的精品酒店，房间保留了原始的橡木横梁和石墙，晚上你能听到远处市政厅钟楼传来的轻柔报时声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`湖景设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择比尔湖畔的现代设计酒店，房间拥有整面落地窗，直面湖光山色，清晨在阳台就能看到天鹅游过，体验古城与现代舒适感的完美结合。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`背包客与社交之选`}</h4>
                  <p className="text-sm text-yellow-800">{`老城入口处由传统建筑改建的国际青年旅舍，氛围友好，公共厨房里你可能会遇到来自世界各地的钟表学徒或独立制表师，是交流故事的绝佳场所。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`静谧家庭公寓`}</h4>
                  <p className="text-sm text-purple-800">{`租住位于老城安静小巷里的传统公寓，自己从市场买来食材烹饪，像本地人一样生活，夜晚枕着绝对的宁静入睡。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "比尔不是典型的旅游热点，住宿价格相对苏黎世或日内瓦亲民许多，但在大型钟表展或行业会议期间（如巴塞尔表展前后），房价会飙升且一房难求，务必提前规划。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城内的酒店多以特色和历史感取胜，但可能房间面积较小且没有电梯；湖边的酒店则更现代化，视野开阔，可根据你的旅行偏好权衡选择。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开比尔/比安许久后，那种奇特的感官记忆依然清晰：指尖划过凉滑石墙的触感，鼻尖萦绕的面包香与机油味的混杂，耳朵里德语法语单词交织的韵律。但比这些更深刻的，是这座城市教会我的一种关于“时间”的崭新理解。在这里，时间不是单向的流逝，而是多层的共处。中世纪广场上那个缓慢行走的日晷，是时间；博物馆里那些静止在某一华丽时刻的古董怀表，是时间；制表师手下那个每秒振动28800次的摆轮，是时间；湖边老人日复一日散步的日常，也是时间。比尔将它们全部容纳，不加评判，让它们在自己的维度里安然运行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、一切都被加速的世界里，比尔像一个沉静的悖论。它孕育着世界上最追求分秒不差、最快最精密的产业，但其内核却是一座慢悠悠的、让你忍不住放慢脚步的中世纪老城。这或许正是它最珍贵的启示：真正的精密，源于内心的宁静；极致的“快”，往往诞生于允许“慢”的土壤。它不是一个用来匆匆打卡的风景明信片，而是一个需要你停下、呼吸、聆听和触摸的体验之地。对于任何渴望在旅途中找到深度、质感与思想火花的旅人来说，比尔/比安不仅仅是一个目的地，更是一次走进时间本质，感受工匠精神与生活哲学如何和谐共生的冥想之旅。来这里，不只是看风景，更是校准你内心的“摆轮”。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gornergrat" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈尔内格拉特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gornergrat</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/neuchatel-castle-collegiate-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳沙泰尔城堡与大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Neuchâtel Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
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
