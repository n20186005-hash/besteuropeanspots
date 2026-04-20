import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉登堡 Ladenburg｜漫步在两千年的古罗马石街上，感受内卡河畔被时光遗忘的从容 - 最佳欧洲景点',
  description: '当我从拉登堡火车站走出来，沿着那条叫“巴洛克花园”的林荫路往老城走时，心里其实没抱太大期望。这听起来又是个“德国最美小镇”名单上的名字罢了。但拐过最后一个弯，眼前豁然开朗的瞬间，我好像被轻轻推了一把，跌进了一个截然不同的时间流速里。没有汹涌的游客潮，没有喧嚣的纪念品商店，只有一片由蜂蜜色木桁架房子组...',
}

export default function LadenburgGermanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '拉登堡', href: '/attractions/ladenburg-germany' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉登堡・Ladenburg・德国・巴登-符腾堡州，拉登堡市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我从拉登堡火车站走出来，沿着那条叫“巴洛克花园”的林荫路往老城走时，心里其实没抱太大期望。这听起来又是个“德国最美小镇”名单上的名字罢了。但拐过最后一个弯，眼前豁然开朗的瞬间，我好像被轻轻推了一把，跌进了一个截然不同的时间流速里。没有汹涌的游客潮，没有喧嚣的纪念品商店，只有一片由蜂蜜色木桁架房子组成的、安安静静的海洋。石板路被岁月打磨得像抛过光的皮革，在午后的阳光下泛着温润的光。空气里有股好闻的混杂气味：老木头晒暖后的甜香，从某家后院飘来的修剪过的青草味，还有隐隐约约、从内卡河方向吹来的湿润水汽。
我的第一站总是市场广场。这里不大，甚至有些“迷你”，但却是小镇跳动的心脏。市政厅那粉红色的外墙在阳光下显得格外娇憨，而它对面那排歪歪扭扭、 leaning 向彼此的古老木桁架房屋，像一群喝多了本地雷司令葡萄酒的老朋友，互相搀扶着才没倒下。广场中央的古老喷泉潺潺作响，是这里唯一的背景音。几个老奶奶坐在长椅上，膝盖上放着编织篮，不紧不慢地聊着天，她们的目光平静地掠过我这个外来者，仿佛我只是个短暂的投影。在这里，景点和日常生活没有界限。你脚下的石板，可能正覆盖着古罗马的输水管道；你倚靠的墙壁，可能砌着中世纪修士采集的河石。
然后，你顺着任何一条小巷往下走，总会不知不觉地走向内卡河。穿过一道古老的城门，世界从温暖的蜂蜜色切换成清爽的蓝绿色。河面宽阔平静，倒映着对岸的树林和天空。野鸭排成一队慢悠悠地划过，划破的涟漪很快又恢复平静。河边步道上有人在慢跑，有人推着婴儿车散步。这里的魔力在于一种极致的“完整感”。它不是一座被博物馆化的空壳，也不是一个仅仅风景如画的村庄。它是一个从罗马时代开始，层层叠叠、活生生地生长了两千年的有机体。每一块石头，每一根木梁，都还在履行着最初的职责——为人提供庇护，构成社区。这种延续性本身，就是最打动人心的奇迹。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我从拉登堡火车站走出来，沿着那条叫“巴洛克花园”的林荫路往老城走时，心里其实没抱太大期望。这听起来又是个“德国最美小镇”名单上的名字罢了。但拐过最后一个弯，眼前豁然开朗的瞬间，我好像被轻轻推了一把，跌进了一个截然不同的时间流速里。没有汹涌的游客潮，没有喧嚣的纪念品商店，只有一片由蜂蜜色木桁架房子组成的、安安静静的海洋。石板路被岁月打磨得像抛过光的皮革，在午后的阳光下泛着温润的光。空气里有股好闻的混杂气味：老木头晒暖后的甜香，从某家后院飘来的修剪过的青草味，还有隐隐约约、从内卡河方向吹来的湿润水汽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我的第一站总是市场广场。这里不大，甚至有些“迷你”，但却是小镇跳动的心脏。市政厅那粉红色的外墙在阳光下显得格外娇憨，而它对面那排歪歪扭扭、 leaning 向彼此的古老木桁架房屋，像一群喝多了本地雷司令葡萄酒的老朋友，互相搀扶着才没倒下。广场中央的古老喷泉潺潺作响，是这里唯一的背景音。几个老奶奶坐在长椅上，膝盖上放着编织篮，不紧不慢地聊着天，她们的目光平静地掠过我这个外来者，仿佛我只是个短暂的投影。在这里，景点和日常生活没有界限。你脚下的石板，可能正覆盖着古罗马的输水管道；你倚靠的墙壁，可能砌着中世纪修士采集的河石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，你顺着任何一条小巷往下走，总会不知不觉地走向内卡河。穿过一道古老的城门，世界从温暖的蜂蜜色切换成清爽的蓝绿色。河面宽阔平静，倒映着对岸的树林和天空。野鸭排成一队慢悠悠地划过，划破的涟漪很快又恢复平静。河边步道上有人在慢跑，有人推着婴儿车散步。这里的魔力在于一种极致的“完整感”。它不是一座被博物馆化的空壳，也不是一个仅仅风景如画的村庄。它是一个从罗马时代开始，层层叠叠、活生生地生长了两千年的有机体。每一块石头，每一根木梁，都还在履行着最初的职责——为人提供庇护，构成社区。这种延续性本身，就是最打动人心的奇迹。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉登堡`} />
                <InfoRow label="英文名称" value={`Ladenburg`} />
                <InfoRow label="正式名称" value={`Ladenburg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴登-符腾堡州，拉登堡市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`德国保存最完好的古罗马城市遗址之一，曾是罗马帝国在莱茵河-内卡河区域的重要行政与军事中心。`} />
                <InfoRow label="建筑特色" value={`罗马地基与中世纪木桁架建筑的完美层叠，形成“两千年不间断居住”的独特城市肌理。`} />
                <InfoRow label="建筑风格" value={`罗马式、哥特式与德国传统木桁架（Fachwerk）风格的罕见融合。`} />
                <InfoRow label="文化价值" value={`一座活着的考古现场，见证了从罗马边塞到自由帝国城市，再到宁静河畔小镇的完整欧洲城镇演变史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。核心历史建筑如 Lobdengau 博物馆、圣加仑教堂等开放时间各异。博物馆通常周二至周日 10:00-17:00 开放，周一闭馆。教堂的塔楼登顶参观时间通常仅在夏季的周末下午开放，内部祈祷区则白天基本开放。圣诞节期间及新年，几乎所有室内景点都会关闭。建议出行前务必在镇旅游局官网确认具体日期。`} />
              <InfoRow label="门票价格" value={`进入拉登堡古城本身免费。主要收费景点：Lobdengau 博物馆联合门票约 5 欧元，学生及团体有优惠。圣加仑教堂登塔费用约 2 欧元。镇上定期举办的“古罗马日”或中世纪市集等活动可能收取少量入场费。建议购买“内卡河-莱茵河地区通票”，可覆盖周边多个博物馆。`} />
              <InfoRow label="地址" value={`Marktplatz 1, 68526 Ladenburg, Germany`} />
              <InfoRow label="交通方式" value={`从法兰克福国际机场出发最便捷。在机场火车站乘坐区域快车（S-Bahn）S6 线或 S7 线（开往曼海姆方向），约 35 分钟抵达海德堡主火车站。在海德堡主火车站换乘开往曼海姆或维尔恩斯海姆的区域火车（RB），约 15 分钟即可到达拉登堡火车站。从火车站出来，步行穿过一条安静的林荫道，大约 10 分钟就能进入古镇的核心区。火车班次非常频繁，约每 20 分钟一班，可使用德国铁路通票或购买巴登-符腾堡州日票，非常划算。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我们把时钟拨回到公元 1 世纪。罗马帝国的北疆，莱茵河与内卡河交汇的这片战略要地，需要一座坚固的堡垒。于是，“洛波丹努姆”（Lopodunum）应运而生。它不是简陋的军营，而是一座按照标准罗马城市规划建造的完整城镇：笔直的道路网格（cardo and decumanus）、宏伟的公共浴场、神庙、广场和输水系统。你可以想象，来自地中海的罗马官员和商人，穿着凉鞋和托加袍，行走在这些石街上，空气中混合着橄榄油、葡萄酒和远方故土的气息。这里是文明的前哨，是将罗马式生活方式植入日耳曼森林的边缘。考古发掘出的精美马赛克地板和供暖系统（hypocaust）遗迹，无声地诉说着当时的繁荣与舒适。拉登堡是罗马帝国在上日耳曼行省最早的城镇之一，其重要性不言而喻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，罗马的荣光在公元 3 世纪后逐渐褪去。帝国防线收缩，军队撤走，但城镇的生命并未终结。法兰克人和其他日耳曼部落来了，他们没有推倒一切重来，而是做了一件非常聪明的事：他们直接在坚实的罗马地基和城墙废墟之上，建造了自己的房屋。那些巨大的方形石块，成了新城墙和教堂的现成材料。中世纪早期，拉登堡成为了主教辖区，圣加仑教堂开始在罗马建筑的基础上拔地而起。这座教堂本身就是一部石头史书：地下是罗马遗址，地上是罗曼式的地下墓室和哥特式的宏伟大殿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了中世纪鼎盛时期，拉登堡迎来了又一个高光时刻。它被授予了自由帝国城市的地位，意味着它直接效忠于神圣罗马帝国皇帝，享有高度的自治权和繁荣的贸易特权。你能从老城密集而精美的木桁架建筑中看到那个时代的富足。这些建于 15 到 18 世纪的房子，每一栋的山墙、雕刻、彩绘都各不相同，讲述着不同行会（酿酒师、皮匠、商人）的故事。广场上的市政厅（建于 18 世纪）则带着一点南德的巴洛克风情，为小镇增添了一抹轻盈的亮色。值得注意的是，拉登堡奇迹般地躲过了近代几乎所有大规模战争的毁灭性破坏，无论是三十年代战争还是两次世界大战的战火，都只是从它身边擦过，留下了完整的肌理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19 世纪后，随着邻近的曼海姆和 Heidelberg 因工业与大学而迅猛发展，拉登堡仿佛主动按下了暂停键。它安静地退居二线，成了内卡河畔一个宁静的居住地。这种“被遗忘”反而成了它最大的幸运。20 世纪 70 年代开始，系统的考古发掘让沉睡地下的罗马古城重见天日，而地上的中世纪老城也得到了精心的保护和修复。今天的拉登堡，就像一个耐心而谦逊的守护者，将罗马的基石、中世纪的骨架、文艺复兴的血肉和现代生活的脉搏，完美地融合在一个可以轻松漫步的方圆之内。它的历史不是断裂的章节，而是一首绵延两千年的、不间断的叙事诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品尝拉登堡的滋味，你需要一整天，并把节奏调到“散步”模式。建议在上午九点左右抵达，这时阳光正好为老城的木桁架房子镀上金边，商店刚开门，小镇慢慢苏醒。整体游览耗时约 6-8 小时，包括悠闲的午餐和咖啡时间。路线设计为从中心向外辐射再回到中心，最后以河边漫步收尾，这样能由内而外地感受小镇的层次。上午聚焦于建筑与博物馆的历史厚重感，下午则沉浸在小巷生活与河畔的自然风光中。别忘了，在这里，“迷路”也是体验的一部分，那些不经意拐进的死胡同里，往往藏着最美的庭院和视角。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇地面多为古旧石板路，穿一双舒适防滑的鞋子远比好看的高跟鞋重要。
周日和法定假日，几乎所有商店和博物馆都会关门，但老城街景依旧迷人，适合纯漫步和拍照。
千万不要错过当地面包店卖的“拉登堡蜜蜂”形状的姜饼，是可爱又美味的手信。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从市场广场的粉红色市政厅出发，先绕着它走一圈，看看墙上的日晷和那些表情生动的排水口石兽`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开 Lobdengau 博物馆厚重的大门，花上一个小时沉浸其中，亲手触摸古罗马的马赛克残片，再看一眼那个令人惊叹的、保存完好的罗马地下供暖系统模型`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣加仑教堂，让眼睛适应内部的幽暗，然后寻找通往地下墓室的狭窄楼梯，在那里感受千年石壁的沁凉与肃穆`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街（Hauptstraße）向东慢行，用指尖划过两旁木桁架房屋凸凹不平的墙面，仔细辨认那些梁木上雕刻的圣经故事、行业标志和吉祥图案`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城东端的“骑士之家”前驻足，仰望这座全镇最华丽也最歪斜的木桁架建筑，猜想它当年主人的故事`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家挂着老招牌的咖啡馆，坐在户外，点一份黑森林蛋糕和一杯咖啡，什么也不做，就看鸽子在广场上踱步，听钟楼每隔一刻钟奏响的清脆钟声`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的“曼海姆门”，沿着缓坡走下城墙，一直走到内卡河边的草地，选一张长椅坐下，看河水静静流淌，看对岸的火车像玩具一样缓缓驶过`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到市场广场，此时游客散去，金色夕阳笼罩着整个广场，粉红色的市政厅变得像一块巨大的草莓蛋糕，坐在喷泉边等待华灯初上的那一刻`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣加仑教堂塔楼登顶处`}</h4>
                  <p className="text-sm text-gray-700">{`在夏季周末下午开放时登顶，用广角镜头捕捉老城密密麻麻的红色屋顶与远处内卡河湾形成的完美几何构图，最佳光线是傍晚前的侧光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市场广场东南角的小巷口`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光斜射入狭窄的巷子，照亮木桁架房屋的一侧，形成强烈的明暗对比，等待一个当地居民骑自行车经过，按下快门，瞬间充满生活故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`内卡河畔望向老城全景`}</h4>
                  <p className="text-sm text-gray-700">{`从河对岸的自行车道往回看，黄昏时分，天空呈现蓝调时刻，老城的灯火初亮，与水中倒影交相辉映，使用三脚架长曝光，能拍出梦幻般的宁静画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“骑士之家”正面仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，虽然光线硬，但能清晰展现这座建筑夸张的倾斜度和精美繁复的木雕细节，使用竖构图以强化其高耸与不稳定带来的戏剧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`罗马地下遗址展示窗`}</h4>
                  <p className="text-sm text-gray-700">{`位于一些街道的地面，是玻璃覆盖的考古坑，蹲下来将相机贴近玻璃，利用现场照明拍摄下方沉睡两千年的罗马地基和陶管，营造一种时空对话的窥视感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民或私人庭院前，请务必先微笑示意并征得同意，德国人非常注重隐私。使用无人机在居民区上空飞行有严格限制，基本需要特殊许可，不建议在此尝试。阴雨天的石板路反光效果极佳，能拍出油画般的质感，别因为天气不好就收起相机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`家庭式温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心一栋16世纪木桁架房子的阁楼房间，吱呀作响的木地板和低矮的房梁充满故事，女主人会为你准备铺满果酱的丰盛早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史感精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一座古老的修道院建筑改建而成，房间环绕着宁静的内院，石墙厚实，夏季异常凉爽，晚上可以在庭院里喝一杯本地雷司令葡萄酒。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代舒适公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城边缘的新建筑内，拥有宽敞的露台，可以毫无遮挡地眺望内卡河与远处的田野，适合家庭或喜欢自己烹饪的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端河景酒店`}</h4>
                  <p className="text-sm text-purple-800">{`设在镇外不远处一座19世纪的别墅里，房间装饰典雅，拥有一个种满玫瑰的大花园，直接通向河畔步道，是追求宁静与私密的完美选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿通常非常安静，但房间可能较小且没有电梯。夏季和圣诞市场期间是绝对的热门时段，务必提前数月预订。选择河对岸或镇外一点的住宿，往往能以更优的价格获得更大的空间和绝佳的景观。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开拉登堡很久之后，我发现自己最怀念的，并不是某个具体的罗马遗址或哥特式拱门，而是那种全身心沉浸在一个完整时间胶囊里的感觉。在这个凡事追求“更快”、“更大”、“更轰动”的世界里，拉登堡提供了一种近乎奢侈的 antidote——缓慢的、连续的、层叠的“存在”。它不炫耀，不争抢，只是静静地、完整地在那里，从罗马时代一直“在”到今天。走在它的街上，你能同时用脚掌感受到中世纪石板的凹凸，用眼睛欣赏文艺复兴时期的彩绘，而耳边听到的，是当代邻居在花园里修剪玫瑰的剪刀声。这种时间的共时性，具有一种强大的治愈力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，来这里，不是为了打卡一个“必看”景点，而是为了体验一种失传已久的生活节奏和空间质感。它是写给慢旅行者的一封情书，是给那些厌倦了碎片化历史叙事的人的一剂解药。在这里，历史不是教科书里孤立的章节，而是你呼吸的空气、脚下的道路和目光所及的每一道风景。当你离开时，你会带走一份内心的平静，以及一个鲜活的认知：文明最动人的力量，不在于瞬间的辉煌，而在于那种温柔而坚韧的、持续生长与包容的韧性。拉登堡，就是这份韧性最美的注脚。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/amberg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    安
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">安贝格老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amberg Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/burghausen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博格豪森城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burghausen Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tuebingen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图宾根大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tübingen</p>
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
