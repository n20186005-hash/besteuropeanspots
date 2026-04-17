import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞南克修道院 Abbaye de Sénanque｜邂逅普罗旺斯灵魂，沉浸于紫色薰衣草与千年圣咏的宁静奇迹 - 最佳欧洲景点',
  description: '相信我，无论你看过多少张它的明信片，当你的车沿着蜿蜒的山路，突然在一个拐角后，整个山谷毫无防备地撞进你眼帘时，那种震撼依然会是百分百新鲜的。那不是一张平面的图片，而是一个立体的、充满呼吸的梦境。底部是整整齐齐、泛着灰绿银光的薰衣草田，像一块巨大的、纹理细密的丝绒地毯；中间是那座蜂蜜色的石砌修道院，线...',
}

export default function SenanqueAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '塞南克修道院', href: '/attractions/senanque-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塞南克修道院・Abbaye de Sénanque・法国・沃克吕兹省，戈尔德（Gordes）附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`相信我，无论你看过多少张它的明信片，当你的车沿着蜿蜒的山路，突然在一个拐角后，整个山谷毫无防备地撞进你眼帘时，那种震撼依然会是百分百新鲜的。那不是一张平面的图片，而是一个立体的、充满呼吸的梦境。底部是整整齐齐、泛着灰绿银光的薰衣草田，像一块巨大的、纹理细密的丝绒地毯；中间是那座蜂蜜色的石砌修道院，线条干净利落，屋顶是当地的片岩，在阳光下呈现出一种温暖的灰蓝色；背景则是普罗旺斯特有的、干燥的、长满矮橡树和松林的山丘。整个画面简洁得如同上帝用尺规画下的几何图形，带着一种不容置疑的静谧与庄严。
关上车门，第一个拥抱你的是气味。那不是香水店里那种甜腻的、单一的味道，而是一种复合的、野性的芬芳。干燥的泥土气息，被烈日炙烤过的石头味道，松针的清香，当然，还有那无处不在的、略带药感的薰衣草香。它们混在一起，被山谷里的暖风搅拌着，成为塞南克独有的“嗅觉签名”。耳朵里则充斥着普罗旺斯的背景音：远处似有似无的蝉鸣，近处蜜蜂在花田间劳作发出的持续不断的、令人安心的嗡嗡声，像某种自然的白噪音。如果你足够幸运，在一天中的某个寂静时刻（通常是下午），你或许能听到修道院钟楼传来低沉、缓慢的钟声，那声音不着急，仿佛时间在这里被拉长、被稀释了。
这里绝不仅仅是一个拍照背景板。仔细观察，你会发现修士们生活的痕迹。花田边缘摆着整齐的蜂箱，那是他们自产的“塞南克蜂蜜”的来源。修道院侧面的小门偶尔开合，或许能看到一位穿着白色会袍、腰间系着黑色绳带的身影悄无声息地走过，消失在石廊深处。这座修道院至今仍有少数西多会修士居住，他们遵循着古老的“ora et labora”（祈祷与劳作）信条，保持着近乎中世纪的生活节奏。薰衣草的种植、收割、蒸馏，不仅是为了维持修道院的生计，本身就是他们修行的一部分——在沉默的劳作中接近神性。这种“活态”感，是塞南克最打动人的地方。它不是一个博物馆里的标本，而是一棵仍然在生长的、年轮古老的树。
所以，塞南克的魅力，远不止于夏日那几周惊心动魄的紫色。它的核心，在于一种极致的对比与和谐：人类精神追求的最高形式（简朴、禁欲、内省）与自然之美最慷慨的馈赠（绚烂、芬芳、丰饶）在此相遇、对话。修道院严峻的直线与拱券，柔和了薰衣草田波浪般的曲线；修士们内心的寂静，映衬着外界蜜蜂的喧闹。你来这里，不只是为了看一场花事，更是为了体验一种在当今世界几乎绝迹的、专注于内在秩序与平静的生活方式。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`相信我，无论你看过多少张它的明信片，当你的车沿着蜿蜒的山路，突然在一个拐角后，整个山谷毫无防备地撞进你眼帘时，那种震撼依然会是百分百新鲜的。那不是一张平面的图片，而是一个立体的、充满呼吸的梦境。底部是整整齐齐、泛着灰绿银光的薰衣草田，像一块巨大的、纹理细密的丝绒地毯；中间是那座蜂蜜色的石砌修道院，线条干净利落，屋顶是当地的片岩，在阳光下呈现出一种温暖的灰蓝色；背景则是普罗旺斯特有的、干燥的、长满矮橡树和松林的山丘。整个画面简洁得如同上帝用尺规画下的几何图形，带着一种不容置疑的静谧与庄严。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`关上车门，第一个拥抱你的是气味。那不是香水店里那种甜腻的、单一的味道，而是一种复合的、野性的芬芳。干燥的泥土气息，被烈日炙烤过的石头味道，松针的清香，当然，还有那无处不在的、略带药感的薰衣草香。它们混在一起，被山谷里的暖风搅拌着，成为塞南克独有的“嗅觉签名”。耳朵里则充斥着普罗旺斯的背景音：远处似有似无的蝉鸣，近处蜜蜂在花田间劳作发出的持续不断的、令人安心的嗡嗡声，像某种自然的白噪音。如果你足够幸运，在一天中的某个寂静时刻（通常是下午），你或许能听到修道院钟楼传来低沉、缓慢的钟声，那声音不着急，仿佛时间在这里被拉长、被稀释了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝不仅仅是一个拍照背景板。仔细观察，你会发现修士们生活的痕迹。花田边缘摆着整齐的蜂箱，那是他们自产的“塞南克蜂蜜”的来源。修道院侧面的小门偶尔开合，或许能看到一位穿着白色会袍、腰间系着黑色绳带的身影悄无声息地走过，消失在石廊深处。这座修道院至今仍有少数西多会修士居住，他们遵循着古老的“ora et labora”（祈祷与劳作）信条，保持着近乎中世纪的生活节奏。薰衣草的种植、收割、蒸馏，不仅是为了维持修道院的生计，本身就是他们修行的一部分——在沉默的劳作中接近神性。这种“活态”感，是塞南克最打动人的地方。它不是一个博物馆里的标本，而是一棵仍然在生长的、年轮古老的树。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，塞南克的魅力，远不止于夏日那几周惊心动魄的紫色。它的核心，在于一种极致的对比与和谐：人类精神追求的最高形式（简朴、禁欲、内省）与自然之美最慷慨的馈赠（绚烂、芬芳、丰饶）在此相遇、对话。修道院严峻的直线与拱券，柔和了薰衣草田波浪般的曲线；修士们内心的寂静，映衬着外界蜜蜂的喧闹。你来这里，不只是为了看一场花事，更是为了体验一种在当今世界几乎绝迹的、专注于内在秩序与平静的生活方式。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塞南克修道院`} />
                <InfoRow label="英文名称" value={`Abbaye de Sénanque`} />
                <InfoRow label="正式名称" value={`Abbaye Notre-Dame de Sénanque`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`沃克吕兹省，戈尔德（Gordes）附近`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`西多会修道院建筑的杰出典范，普罗旺斯地区的精神与视觉灵魂象征。`} />
                <InfoRow label="建筑特色" value={`简约到极致的罗马式建筑，与周围山谷和薰衣草田构成浑然天成的几何构图。`} />
                <InfoRow label="建筑风格" value={`西多会罗马式风格，以严峻、朴素、摒弃装饰著称。`} />
                <InfoRow label="文化价值" value={`一座仍在呼吸的“活着的”修道院，近九百年持续不断的祈祷与劳作传统的守护者。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院对游客的开放时间严格区分。内部建筑（教堂、回廊、宿舍等）仅能通过付费导览团进入，法语导览团每日多次，英语导览团通常在旅游旺季（6月至9月）的特定时段提供，需提前在官网查询并预订。修道院外部区域、书店及礼品店可自由参观，开放时间约为每日上午9:30至下午18:00，冬季（11月至次年3月）会缩短。请注意，修道院是仍在运作的宗教场所，周日上午及特定宗教节日不向游客开放，且薰衣草花田属于私人财产，严禁踏入。薰衣草最佳观赏期为6月下旬至7月中旬。`} />
              <InfoRow label="门票价格" value={`外部区域自由参观免费。内部导览团票价约为成人8-10欧元，优惠票（学生、儿童等）约5-7欧元，7岁以下儿童免费。具体票价可能随季节和导览类型变动，务必以官网实时信息为准。修道院自产的薰衣草产品、蜂蜜和书籍在商店单独出售。`} />
              <InfoRow label="地址" value={`Abbaye Notre-Dame de Sénanque, 84220 Gordes, France`} />
              <InfoRow label="交通方式" value={`最便捷的方式是自驾。从普罗旺斯的核心城市阿维尼翁（Avignon）出发，沿D900公路向东，转入D177公路前往戈尔德方向，再根据路标驶向塞南克修道院，全程约50分钟至1小时。修道院入口处有专用停车场（收费）。公共交通极其不便：可从阿维尼翁乘坐公交到戈尔德镇（班次稀少，尤其周末），但从戈尔德镇到修道院还有约4公里陡峭山路，没有固定公交，只能徒步（约1小时）或搭乘极其罕见的出租车。强烈建议自驾或参加从阿维尼翁、阿尔勒出发的一日游小团。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1148年说起。那一年，一群来自阿尔勒附近马赛扬修道院的西多会修士，在一位名叫雷蒙德·德·贝朗格的主教资助下，来到了这个名叫“塞南克”的偏僻山谷。为什么选这里？这正是西多会教规的精髓所在：他们追求彻底的苦修和自给自足，故意远离繁华城镇，寻找“荒野”之地，通过自己的双手，在孤独中开辟出与世隔绝的乐园，专心侍奉上帝。这片当时荒芜、只有一条小溪穿过的山谷，完美符合了他们的要求。最初的建筑极其简陋，但修士们凭借着惊人的毅力和手艺，一石一瓦地，建起了教堂、宿舍、回廊和作坊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个12世纪是塞南克的黄金时代。它成了西多会在普罗旺斯地区最重要的修道院之一，拥有广阔的土地和影响力。你看它那教堂，没有一丝一毫多余的装饰，没有彩绘玻璃，没有雕塑，只有厚重的墙壁、朴素的柱头和半圆形的拱券。这种风格被称为“西多会罗马式”，是圣伯尔纳铎理念的直观体现：他认为过度的华丽会分散祈祷者的心神，真正的美在于比例、光线和空间的纯粹。塞南克就是这一理念的教科书。阳光从高侧窗射入，在粗糙的石壁上移动，光与影的舞蹈就是唯一的装饰。修士们在冰冷的石凳上每日七次聚集，吟唱格里高利圣咏，声音在空旷的穹顶下回荡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中世纪的宁静没能永远持续。16世纪的宗教战争让塞南克第一次遭受重创，它被洗劫，部分建筑被毁。更大的灾难来自18世纪末的法国大革命。革命政府没收了教会财产，修士们被驱逐，修道院被当作国家财产拍卖，差点被拆成石料卖掉。幸运的是，它被私人购买，得以幸存，但在整个19世纪，它沦为了一个谷仓、羊圈，甚至一度被用来养蚕。那些神圣的空间充斥着干草和牲畜的气味，华丽的回廊拱券被烟熏黑，壁画被白灰覆盖。塞南克沉睡了一百多年，几乎被人们遗忘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的重生，像一个奇迹。20世纪初，一场保护历史古迹的运动在法国兴起，塞南克的价值被重新发现。1926年，法国文化部将其列为历史古迹。真正的转折点在1988年，一群新的西多会修士 community 在经历了漫长的谈判后，重新入驻了塞南克。他们面对的是一片亟待拯救的废墟。接下来的几十年，是一场缓慢而坚定的修复。修士们和专业的古建修复师一起，清理、加固、复原。他们不仅修复了石头建筑，也重新开垦了荒废的土地，种下了薰衣草。这种作物不仅经济实用，其宁静的紫色和芬芳的气息，也仿佛与修士们追求的精神境界天然契合。今天，你看到的井然有序的薰衣草田，本身就是一场持续了数十年的、静默的“劳作祈祷”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的塞南克，是一座平衡于过去与现在、神圣与世俗之间的微妙存在。修士们依旧保持着沉默、祈祷和劳作的传统，但他们也精明地利用薰衣草产品和有限的旅游业来维持这座庞大古建的运转。他们出版书籍，录制圣咏唱片，让这座山谷的宁静得以传播。每年夏天，当游客如潮水般涌来，只为那一抹紫色时，修士们依然在他们的回廊里按时诵读日课，仿佛外界的喧嚣只是一层可以穿透的薄雾。塞南克的故事，是一个关于信仰、毁灭、遗忘和坚韧回归的故事，它告诉我们，有些宁静，足以穿越千年的风雨，在每一个盛夏，随着薰衣草的花开，再次醒来。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味塞南克，强烈建议你在夏季的清晨（开门前抵达）或傍晚（大部分一日游团离开后）前来。这不仅是为了避开如织的人潮和正午普罗旺斯毒辣的太阳，更是因为这两个时段的斜射光线，能将修道院的石头和薰衣草田渲染出油画般浓郁而温柔的色调，氛围也最为宁静。整体游览时间建议预留2-3小时。节奏一定要慢，这里不适合赶路。流程上，先在外围感受全景和自然，再通过导览团深入建筑内部理解其精神内核，最后在书店和商店完成物质与精神的收藏。记住，安静是最大的礼貌。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着舒适耐走的鞋子，从停车场到修道院是下坡，但回程是上坡，且在石子路上行走。保持安静，尤其是在建筑内部和靠近修士生活区的地方，避免大声喧哗和奔跑。薰衣草田严禁踏入，这不仅是为了保护作物，也是尊重修士的劳动，站在田埂边拍照完全足够。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在指定停车场后，先别急着往下冲，在停车场边的观景平台停留片刻，用双眼和相机饱览那幅标志性的全景图，让第一印象深深烙印。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着那条被松树和橡树荫蔽的小径步行下山，让薰衣草的香气由淡变浓，逐渐将你包裹，耳朵开始分辨蜜蜂的嗡嗡声与远处可能的溪流声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`近距离走到修道院南侧的薰衣草田边缘（切记站在田埂外），蹲下来观察一株薰衣草，触碰它毛茸茸的茎叶，看蜜蜂如何工作，用触觉和嗅觉建立私人连接。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参加一场修道院内部的导览团，在凉爽、幽暗的教堂里站立片刻，感受从高窗洒下的光柱中飞舞的尘埃，想象近九百年来在此回响的同一套祈祷文。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在静谧的回廊中慢慢走一圈，手指轻轻拂过那些被无数代修士衣袖磨得温润的石头柱头，注视中央庭院里简朴的绿植，体会何为“内向性的建筑”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后，去修道院的书店逛逛，那里有修士们出版的关于灵修、历史和植物的书籍，以及他们录制的格里高利圣咏CD，带一份“声音的纪念品”回家。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在出口处的商店选择一两件由修士们自己种植和蒸馏的薰衣草产品，一块手工皂或一小瓶精油，让这份气息能在日后唤醒你的记忆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，再次回望山谷，此时的阳光角度已然变化，给修道院披上另一件光影的外衣，与来时所见形成奇妙的对照。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`经典明信片全景位`}</h4>
                  <p className="text-sm text-gray-700">{`停车场上方的小平台，使用中长焦镜头（70-200mm尤佳）可以压缩空间，让修道院和薰衣草田显得更加紧凑震撼，最佳光线在日出后一小时或日落前一小时。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`修道院南侧薰衣草田小径`}</h4>
                  <p className="text-sm text-gray-700">{`沿着田边小路找到能同时框住修道院侧面拱扶垛和前景成排薰衣草的角度，低机位拍摄能让薰衣草显得更加茂密，上午的光线能照亮建筑侧面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`回廊内部框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在回廊的一角，利用连续的拱券形成强烈的透视引导线，将观看者的视线引向庭院或另一端的修士，阴天柔和的光线更能体现石头的质感与静谧氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`修道院后方及修士墓地`}</h4>
                  <p className="text-sm text-gray-700">{`参加导览团后，允许进入的区域通常包括后方较为僻静的花园或古老的墓地，这里人少，可以拍摄到爬满藤蔓的斑驳石墙和十字架，故事感极强，适合人文摄影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少薰衣草叶面和石头上的反光，让色彩更饱和。航拍器在塞南克是严格禁止的，一方面出于隐私和安全，另一方面也会破坏这里的宁静氛围，请务必遵守。拍摄修士或其他访客时，请始终保持尊重，尽量避免正面怼脸拍，以捕捉环境与人的和谐瞬间为佳。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在戈尔德镇上的家庭式民宿，这些石头房子通常拥有俯瞰吕贝隆山谷的小露台，夜晚无比宁静，清晨在镇上的面包房香味中醒来，开车去修道院只需十分钟。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择修道院附近散落在橄榄园和樱桃林中的独立农庄，这些房子自带私人泳池和烧烤区，白天去探索塞南克，傍晚回来在星空下享受真正的乡村安宁。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住吕贝隆地区由古老庄园改造的五星级酒店，它们通常拥有顶尖的餐厅、无边泳池和奢华的水疗中心，将普罗旺斯的乡村奢华与塞南克的精神之旅完美结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居修行`}</h4>
                  <p className="text-sm text-purple-800">{`对于追求极致宁静的旅人，可以考虑预订远离游客中心、更深山中的小型静修旅馆或精品酒店，有些甚至提供瑜伽或冥想课程，与塞南克的气质一脉相承。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`戈尔德镇本身就是一个 perched village（悬崖村庄），非常安全，但夏季住宿极其紧俏，尤其是能看到薰衣草田景色的房间，务必提前数月预订。如果你在七月初来访，住在附近可以有机会看到清晨收割薰衣草的景象（如果修士们恰在那天劳作）。注意，许多乡村住宿要求最少入住两晚。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开塞南克许久之后，你会发现，记忆最深的可能不是那张拍得最成功的照片，而是某些微不足道的瞬间：也许是手指触碰冰凉石壁时的感觉，也许是突然飘来的一阵浓郁花香混着蜡味，也许是导览员压低嗓音讲解时，身后回廊里传来的、另一个访客轻微的呼吸声。这个地方有一种魔力，它能轻易地滤掉你内心的杂音。在一切都追求效率、速度和夸张表达的时代，塞南克固执地呈现着另一种价值观：简朴、重复、内敛、沉默。它不试图娱乐你，只邀请你存在于此，与光、与石、与植物、与一种古老的时间节拍同在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都该来一次塞南克，尤其是在它被紫色包围的季节。这不仅仅是为了兑现一个关于普罗旺斯的浪漫幻想，更是为了亲身验证，在世界的某个角落，真的有一种美，源于减而非增，源于静而非闹。它提醒我们，真正的丰盛可能藏于极简之中，永恒的活力恰恰来自于对一种古老节奏的坚守。当你在喧嚣的生活中感到疲惫时，心底那份来自塞南克的、混合着石头凉意与薰衣草暖香的记忆，便会成为一帖无声的解药。它不只是景点，它是一个关于如何生活的，沉默而芬芳的启示。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/eguisheim-alsace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃吉赛姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eguisheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-hautefort" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    欧
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">欧特福尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Hautefort</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/salers-medieval-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨莱尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Salers</p>
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
