import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '吉诺卡斯特 Gjirokastër｜在“千阶之城”的石头迷宫里，触摸奥斯曼帝国的白银时光 - 最佳欧洲景点',
  description: '车子在盘山公路上绕了不知多少个弯，就在你对一成不变的橄榄树和岩石感到一丝倦怠时，它突然出现了。吉诺卡斯特，阿尔巴尼亚南部的“千阶之城”，像一头用灰色石头雕成的巨兽，安静地侧卧在德里纳河谷东岸的巨大山坡上。第一眼，你就会被它的统一感所震撼——成千上万的石板屋顶在午后阳光下反射着清冷的银灰色光泽，层层叠...',
}

export default function GjirokastraCastleOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '吉诺卡斯特（千阶之城）', href: '/attractions/gjirokastra-castle-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`吉诺卡斯特（千阶之城）・Gjirokastër・阿尔巴尼亚・吉诺卡斯特州吉诺卡斯特市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在盘山公路上绕了不知多少个弯，就在你对一成不变的橄榄树和岩石感到一丝倦怠时，它突然出现了。吉诺卡斯特，阿尔巴尼亚南部的“千阶之城”，像一头用灰色石头雕成的巨兽，安静地侧卧在德里纳河谷东岸的巨大山坡上。第一眼，你就会被它的统一感所震撼——成千上万的石板屋顶在午后阳光下反射着清冷的银灰色光泽，层层叠叠，严丝合缝地铺满了整面山坡，仿佛一件被巨人精心打磨过的、巨大的石质铠甲。空气中没有尘土味，只有石头被太阳晒过后散发出的、干净而古老的气息，间或飘来一缕远处人家用木柴生火做饭的烟熏味。
走进老城，你就进入了一个由声音和斜坡构成的世界。脚下是千百年来被无数脚步打磨得光滑如镜的石灰岩石板路，它并不平坦，而是形成一级级天然的台阶，蜿蜒着伸向各个方向。你的耳边是鞋底与石板接触时清脆的“嗒嗒”声，这声音在狭窄的巷弄里被放大、回荡。当地的老人们就坐在自家石头门廊下的阴影里，沉默地看着你，他们的眼神像身后的石墙一样，历经风雨却纹丝不动。你会突然明白，这座城市不是一座博物馆，而是一个仍然在呼吸的有机体。这些陡峭的台阶和迷宫般的小巷，不仅仅是交通网络，它们构成了社区生活的骨架，定义了邻居间的距离，也见证了孩子们追逐足球、妇女们提着菜篮上下穿梭的日常。
而这座城市最打动人的核心魅力，恰恰在于这种坚硬外表下的温度。那些看起来冷峻、封闭的石头房子（当地人称为“卡勒”），内部却隐藏着惊人的温暖与精致。当你走进任何一座向公众开放的古宅，比如著名的斯库拉宅，厚重的木门在你身后关上，瞬间隔开了外界的喧嚣。你会发现自己置身于一个高挑、明亮的中央大厅，阳光从高处精心设计的窗户倾泻而下。大厅的核心永远是一个巨大的石砌壁炉，烟囱像城堡塔楼一样伸向屋顶——这里曾是家庭生活的绝对中心。墙壁上绘有精美的奥斯曼风格花卉图案，二楼环绕大厅的木质回廊雕刻繁复。坚硬与柔软，防御性与家庭性，在这里达到了奇妙的平衡。
吉诺卡斯特的魅力，还在于它承载的历史层次。它不仅是奥斯曼帝国的边疆重镇，也是二十世纪阿尔巴尼亚强人恩维尔·霍查的出生地。你可以在老城里找到他出生的房子（现在是一个关于共产主义宣传艺术的古怪博物馆），也可以在山顶的城堡里看到被遗弃的二战坦克和战斗机——那是一个截然不同的时代留下的冰冷印记。行走其间，你仿佛在同时阅读一本关于建筑、帝国、共产主义和当代阿尔巴尼亚寻找自我身份的多重奏。石头是沉默的，但这座城市的故事，却在这些沉默的石头缝隙中，震耳欲聋。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在盘山公路上绕了不知多少个弯，就在你对一成不变的橄榄树和岩石感到一丝倦怠时，它突然出现了。吉诺卡斯特，阿尔巴尼亚南部的“千阶之城”，像一头用灰色石头雕成的巨兽，安静地侧卧在德里纳河谷东岸的巨大山坡上。第一眼，你就会被它的统一感所震撼——成千上万的石板屋顶在午后阳光下反射着清冷的银灰色光泽，层层叠叠，严丝合缝地铺满了整面山坡，仿佛一件被巨人精心打磨过的、巨大的石质铠甲。空气中没有尘土味，只有石头被太阳晒过后散发出的、干净而古老的气息，间或飘来一缕远处人家用木柴生火做饭的烟熏味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进老城，你就进入了一个由声音和斜坡构成的世界。脚下是千百年来被无数脚步打磨得光滑如镜的石灰岩石板路，它并不平坦，而是形成一级级天然的台阶，蜿蜒着伸向各个方向。你的耳边是鞋底与石板接触时清脆的“嗒嗒”声，这声音在狭窄的巷弄里被放大、回荡。当地的老人们就坐在自家石头门廊下的阴影里，沉默地看着你，他们的眼神像身后的石墙一样，历经风雨却纹丝不动。你会突然明白，这座城市不是一座博物馆，而是一个仍然在呼吸的有机体。这些陡峭的台阶和迷宫般的小巷，不仅仅是交通网络，它们构成了社区生活的骨架，定义了邻居间的距离，也见证了孩子们追逐足球、妇女们提着菜篮上下穿梭的日常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这座城市最打动人的核心魅力，恰恰在于这种坚硬外表下的温度。那些看起来冷峻、封闭的石头房子（当地人称为“卡勒”），内部却隐藏着惊人的温暖与精致。当你走进任何一座向公众开放的古宅，比如著名的斯库拉宅，厚重的木门在你身后关上，瞬间隔开了外界的喧嚣。你会发现自己置身于一个高挑、明亮的中央大厅，阳光从高处精心设计的窗户倾泻而下。大厅的核心永远是一个巨大的石砌壁炉，烟囱像城堡塔楼一样伸向屋顶——这里曾是家庭生活的绝对中心。墙壁上绘有精美的奥斯曼风格花卉图案，二楼环绕大厅的木质回廊雕刻繁复。坚硬与柔软，防御性与家庭性，在这里达到了奇妙的平衡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`吉诺卡斯特的魅力，还在于它承载的历史层次。它不仅是奥斯曼帝国的边疆重镇，也是二十世纪阿尔巴尼亚强人恩维尔·霍查的出生地。你可以在老城里找到他出生的房子（现在是一个关于共产主义宣传艺术的古怪博物馆），也可以在山顶的城堡里看到被遗弃的二战坦克和战斗机——那是一个截然不同的时代留下的冰冷印记。行走其间，你仿佛在同时阅读一本关于建筑、帝国、共产主义和当代阿尔巴尼亚寻找自我身份的多重奏。石头是沉默的，但这座城市的故事，却在这些沉默的石头缝隙中，震耳欲聋。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`吉诺卡斯特（千阶之城）`} />
                <InfoRow label="英文名称" value={`Gjirokastër`} />
                <InfoRow label="正式名称" value={`Gjirokastër`} />
                <InfoRow label="国家" value={`阿尔巴尼亚`} />
                <InfoRow label="城市" value={`吉诺卡斯特州吉诺卡斯特市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座由石头垒砌的奥斯曼帝国活化石，也是阿尔巴尼亚共产主义时期领导人恩维尔·霍查的故乡，两种截然不同的历史在此交织。`} />
                <InfoRow label="建筑特色" value={`依山而建的数千栋奥斯曼风格石头房屋，屋顶覆盖着深灰色的片岩，如同层层叠叠的鱼鳞，构成了独一无二的“千阶之城”景观。`} />
                <InfoRow label="建筑风格" value={`典型的阿尔巴尼亚奥斯曼民居建筑，其核心是设有高耸烟囱和巨大壁炉的“卡勒”（tower house），兼具防御与居住功能。`} />
                <InfoRow label="文化价值" value={`作为保存最完好的奥斯曼时期城镇之一，它不仅展现了独特的建筑智慧，更记录了阿尔巴尼亚从帝国边缘到现代国家转型中的复杂身份与记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`吉诺卡斯特城堡全年开放，但内部博物馆和主要宅邸的开放时间有季节性变化。通常夏季（4月至9月）为每天上午9点至晚上7点；冬季（10月至3月）为每天上午9点至下午4点，周一可能闭馆。老城区的街道和公共区域全天可自由探索。建议出行前再次确认具体日期，阿尔巴尼亚的公共节假日可能导致开放时间临时调整。`} />
              <InfoRow label="门票价格" value={`进入吉诺卡斯特城堡区域的门票约为700列克（约合6欧元）。门票通常包含城堡庭院、城墙、部分塔楼以及城堡内的国家军械博物馆的入场。老城内的一些重要历史宅邸（如斯库拉宅、安托尼亚蒂宅）需要单独购票，每处约200-300列克。学生、65岁以上老人及儿童通常享有折扣。部分小型博物馆可能收取象征性费用。`} />
              <InfoRow label="地址" value={`Gjirokastër, Albania
（老城区及城堡无具体街道地址，此为该市通用地址）`} />
              <InfoRow label="交通方式" value={`从阿尔巴尼亚首都地拉那的国际机场出发，最灵活的方式是租车自驾。沿着SH4公路向南行驶，车程约3-4小时，沿途是连绵起伏的山丘和田园风光。若乘坐公共交通，可在地拉那的国际巴士站搭乘前往吉诺卡斯特的长途巴士，班次不算密集，每天大约3-4班，车程约4.5小时，建议提前一天购票。从海滨城市萨兰达出发则更近，巴士班次较多，车程仅1小时，沿途会穿越壮丽的德里纳河谷。进入古城后，所有车辆需停在城外的指定停车场，因为老城内部是禁止机动车通行的迷宫般石板路。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解吉诺卡斯特的石头为何如此沉默又如此有分量，你得把时钟拨回到它的起源。关于这座城市的文字记载，最早可以追溯到公元1336年，拜占庭帝国的文献中提到了“Argyrókastron”这个名字，意为“银堡”。这个名字或许源于当地贵族银色的盔甲，或许是指城堡在阳光下如白银般闪耀的石灰岩。但它的故事真正变得浓墨重彩，是在奥斯曼帝国征服阿尔巴尼亚之后。大约从15世纪开始，这里逐渐发展成为帝国在巴尔干西南部的一个重要行政和军事中心。帝国的统治带来了秩序、贸易网络，也带来了深刻的文化影响。那些我们今天看到的标志性石头宅邸，其建筑形制——高耸的塔楼、坚固的石墙、内向的庭院——正是在这个时期成熟定型。它既是奥斯曼建筑风格的体现，也是当地气候（夏季炎热、冬季寒冷多风）和山区安全需求的智慧结晶。贵族、地主和富有的商人开始竞相修建这种兼具防御与展示功能的宅邸，城市沿着山坡向上生长，形成了如今所见的壮观阶梯式布局。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了18、19世纪，吉诺卡斯特迎来了它的“白银时代”。这里成了繁荣的商贸中心，特别是手工纺织和刺绣贸易远近闻名。财富的积累直接反映在建筑上，宅邸的规模越来越大，内部装饰越来越华丽。木头雕刻的门窗、彩绘的墙壁天花板、来自远方的珍贵地毯，装点着这些石头堡垒的内部。一个独特的本地权贵阶层——“巴伊”（Beys）形成了，他们管理着大片土地，也塑造了城市的社会与文化风貌。然而，这种繁荣也伴随着动荡。作为帝国边缘地带，这里不时卷入反抗奥斯曼统治的起义，坚固的房屋和山顶的城堡不止一次成为庇护所和战场。石头，从一开始就与生存和抵抗紧密相连。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间进入20世纪，吉诺卡斯特被卷入了更剧烈的历史漩涡。它见证了阿尔巴尼亚的独立、两次世界大战的蹂躏。但最深刻的烙印，来自于它的一位“著名”的儿子——恩维尔·霍查。1908年，霍查出生在老城一所典型的奥斯曼石头宅邸里。他后来成为阿尔巴尼亚斯大林式的共产主义独裁者，统治这个国家近四十年。霍查政权对吉诺卡斯特的情感是复杂的：一方面，他们宣扬反奥斯曼、反封建的意识形态，理论上与这座城市代表的旧世界格格不入；另一方面，霍查的出生地又成为某种个人崇拜的圣地。他的旧居被改建为博物馆，城市也因他而获得了一些投资和“荣耀”。在霍查时代，吉诺卡斯特被宣布为“博物馆城市”，新的建筑被严格禁止，这无意中以一种非常规的方式，保护了老城免受现代化开发的破坏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1991年共产主义政权垮台后，阿尔巴尼亚陷入短暂的混乱，吉诺卡斯特也经历了艰难的经济转型和人口外流。许多老宅被遗弃，石头开始风化。但转机也随之而来。2005年，联合国教科文组织将吉诺卡斯特列为世界文化遗产，认可了它作为“保存完好的奥斯曼时期城镇的罕见范例”的普世价值。这一称号带来了国际关注和有限的保护资金。今天，你看到的吉诺卡斯特正处于一个微妙的十字路口：部分老宅被富有远见的外国人或阿尔巴尼亚人买下，精心修复成精品酒店或文化中心；另一些则依然由坚守在这里的老人们照料，与岁月缓慢地对抗。山顶的城堡每年夏天会举办盛大的国家民俗节，古老的石墙内回荡起传统的复调音乐——这是一种宣言，宣告石头之城依然活着，它的故事，远未结束。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略吉诺卡斯特的层叠之美，你需要至少一整天的时间，并准备好你的双腿去征服那些台阶。理想的安排是上午优先游览山顶的城堡，此时光线清亮，游客相对较少，你可以从容地俯瞰全城在晨光中苏醒的壮丽全景。随后，顺着主干道“Mehmet Gjollesha”下行，像剥洋葱一样，一层层深入老城区的肌理。下午的重点是探访一两座修复完好的奥斯曼古宅博物馆，感受石头外壳内的生活温度，并在迷宫般的小巷里随心所欲地迷路。傍晚时分，找一家老房子屋顶改造的餐厅，等待夕阳将整片石头屋顶染成金色和玫瑰色。这样的节奏让你既能把握城市宏大的轮廓，又能捕捉到它细腻的生活纹理。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对防滑、支撑性好的步行鞋，这里的石板台阶在潮湿时堪比溜冰场。老城内部巷弄错综复杂且 signage 不多，建议在手机上下载离线地图，或享受“迷失”的乐趣——反正最终总能绕回主路。尊重当地居民的隐私，拍照时尽量避免将长时间镜头对准私人住宅的门窗和庭院内部。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从老城边缘的停车场出发，沿着最宽阔的主干道“Rruga e Kalasë”开始向上攀登，目标是雄踞山顶、轮廓分明的吉诺卡斯特城堡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡入口购票后，先别急着深入，走到西侧城墙的制高点，凭栏凝视下方如瀑布般倾泻而下的千层石屋和远方无垠的德里纳河谷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一小时探索城堡内部阴凉的地下“囚徒画廊”、露天剧场、以及那几架略显突兀但充满历史荒诞感的二战时期美军战机残骸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡的南门出来，顺着一条更为古老静谧的石阶小路下行，你会路过安静的吉诺卡斯特老集市遗址和简朴的圣索菲亚教堂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“Rruga e Balli”继续向下，一定要拐进左手边标牌明显的“Zekate House”，这座拥有双塔的宏伟宅邸是奥斯曼民居防御与艺术的巅峰之作。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在正午阳光变得炙热前，抵达位于老城中心的“斯库拉宅博物馆”，在这座宛如宫殿的宅邸里感受中央大厅的清凉和高窗洒下的神圣光束。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后，任由自己在“Rruga Gjin Bue Shpata”等狭窄得仅容一人通过的分支巷弄里随意迷失，倾听自己脚步的回声，观察门廊下打盹的猫和窗台上盛开的天竺葵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前，找到老城西南侧地势较高的一家露天餐厅或咖啡馆，点一杯土耳其咖啡或当地拉基亚酒，静静等待“白银城堡”在夕阳下变成“黄金之城”的魔法时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡西侧城墙瞭望孔`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，将相机镜头紧贴古老的石质射击孔，可以框出一幅完美的画中画——前景是历经风霜的粗糙石壁，中景是层层叠叠的灰色屋顶，远景是沐浴在金色余晖中的河谷与远山。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Zekate宅邸塔楼顶部`}</h4>
                  <p className="text-sm text-gray-700">{`参观这座宅邸时，征得管理员同意后登上其标志性的双塔之一，向北俯瞰，可以拍摄到老城屋顶如鱼鳞般紧密排列的震撼纹理，以及更远处山顶城堡的完整侧影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城小巷转角光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射入狭窄的巷道时，在“Rruga Gjin Bue Shpata”寻找一处有茂盛绿植从石墙垂落的转角，等待一位当地居民（最好是穿着深色衣服的老人）缓缓走过，捕捉光影切割出的明暗对比与生动剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Bazaar老集市遗址拱门`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，太阳位置还较低时，站在旧集市残存的石拱门下仰拍，逆光会让拱门的轮廓和石头的质感异常清晰，门洞另一侧透出的老城景色则蒙上一层迷人的光晕。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从河对岸公路远眺`}</h4>
                  <p className="text-sm text-gray-700">{`如果你是自驾，务必在抵达或离开时，将车停在德里纳河对岸的E852公路边的安全地带，用长焦镜头拉近整个城市依山而建的磅礴全景，这是唯一能完整收纳“千阶之城”气势的角度。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`阿尔巴尼亚人对拍照总体友好，但拍摄人物时，尤其是老人和孩童，一个微笑和简单的手势征询（指指相机）会带来更善意的回应。航拍无人机在阿尔巴尼亚的使用规定相对宽松，但在古城和城堡上空飞行仍需保持谨慎，最好远离人群密集区并注意强风。室内博物馆和宅邸通常禁止使用闪光灯和三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式古宅体验`}</h4>
                  <p className="text-sm text-blue-800">{`选择由奥斯曼时期“卡勒”精心修复而成的精品客栈，如位于老城心脏地带的某家，睡在古老的木梁之下，清晨在私密的石头庭院里享用包含自制果酱和蜂蜜的早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`景观至上之选`}</h4>
                  <p className="text-sm text-green-800">{`下榻坐落在老城较高处、拥有宽阔露台的宾馆，房间的窗户本身就是一幅活动的画框，白天看云影掠过石屋顶，夜晚看城堡被灯光点亮，如同悬在夜空中的仙宫。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`入住老城边缘由本地家庭经营的Guesthouse，主人会热情地为你讲述他们祖辈在这石头房子里生活的故事，晚餐可能是女主人用传统方式在壁炉旁为你烹制的炖菜。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代舒适基地`}</h4>
                  <p className="text-sm text-purple-800">{`如果对古老的潮湿和台阶感到些许畏惧，可以选择位于新城平坦地段的设计酒店，享受现代化的便利设施，同时步行十分钟即可进入老城迷宫，实现古今生活的轻松切换。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿多有数百年历史，虽然经过改造，但隔音可能相对一般，且不可避免需要爬坡上坎，携带大件行李会非常吃力，建议轻装并提前联系酒店询问行李协助服务。夏季是旺季，尤其是民俗节期间，务必提前数月预订。冬季（11月-3月）许多家庭式民宿可能歇业，选择会减少，但你能拥有一个几乎独享的、静谧而略带萧瑟的石头之城。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开吉诺卡斯特的那个黄昏，我坐在河对岸，最后回望了一眼。整座山城正在慢慢沉入靛蓝色的暮色里，最先亮起的是城堡轮廓的灯带，接着，零星昏黄的灯火在那些灰色的石头盒子里逐一点燃。那一刻我突然觉得，这座城市像极了一本合上的、用石板做封面的巨书。我们这些匆匆过客，只是小心翼翼地掀开了它的几页，读到了关于建筑、战争和某个独裁者的片段章节。但更多的故事——那些关于家族传承、日常悲欢、沉默坚守的故事——依然紧紧锁在每一扇厚重的木门背后，写在每一位坐在门廊下老者的皱纹里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求光滑、快速和透明的时代，吉诺卡斯特的存在本身就是一种温柔的抵抗。它拒绝被轻易解读，拒绝变得便利。它用数千级台阶考验你的诚意，用迷宫里的小巷让你放下地图和计划，最终学会用脚步和呼吸去丈量一座城市。它不提供炫目的巴洛克装饰或哥特式的冲天激情，它给予你的，是一种沉甸甸的、土地的质感，一种在坚韧中求生存、在封闭中藏温暖的古老智慧。每一个热爱深度游的灵魂，都应该来感受一次这种“重量”。你会带着一身石头的气息和一点点攀登后的酸痛离开，但你知道，那份关于层次、关于时间、关于在坚硬世界中如何保存内心柔软的启示，已经像一块小小的石头，沉在了你的记忆里，再也无法被冲走。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/berat-thousand-windows" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    培
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">培拉特（千窗之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Berat</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/berat-albania-thousand-windows" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    培
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">培拉特（千窗之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Berat</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gjirokaster-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉诺卡斯特（石头城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gjirokastër</p>
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
