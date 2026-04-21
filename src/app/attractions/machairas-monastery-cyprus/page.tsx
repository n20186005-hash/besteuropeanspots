import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马哈伊拉斯修道院 Machairas Monastery｜深藏松林的千年圣像传奇 - 最佳欧洲景点',
  description: '车子在特罗多斯山东部蜿蜒的山路上不知拐了多少个弯，窗外的景色从地中海式的明媚豁然切换成一种深邃的苍绿。松林越来越密，空气越来越凉，带着一种清冽的、松脂与湿润泥土混合的独特气味。就在你觉得快要迷失在这片绿色迷宫里的时候，一个转弯，它出现了——马哈伊拉斯修道院。不是想象中金碧辉煌、高耸入云的姿态，而是低',
}

export default function MachairasMonasteryCyprusPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '塞浦路斯', href: '/destinations/europe' },
            { label: '尼科西亚山区（特罗多斯山东部）', href: '/destinations/europe' },
            { label: '马哈伊拉斯修道院', href: '/attractions/machairas-monastery-cyprus' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马哈伊拉斯修道院・Machairas Monastery・塞浦路斯・尼科西亚山区（特罗多斯山东部）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在特罗多斯山东部蜿蜒的山路上不知拐了多少个弯，窗外的景色从地中海式的明媚豁然切换成一种深邃的苍绿。松林越来越密，空气越来越凉，带着一种清冽的、松脂与湿润泥土混合的独特气味。就在你觉得快要迷失在这片绿色迷宫里的时候，一个转弯，它出现了——马哈伊拉斯修道院。不是想象中金碧辉煌、高耸入云的姿态，而是低低地、紧紧地贴着山壁，那些浅灰色的石墙和暗红色的铁皮屋顶，带着一种近乎倔强的朴素，仿佛是从山体里生长出来的另一块岩石。那一刻，你听不到任何现代世界的噪音，只有风吹过万千松针的沙沙声，以及偶尔传来的、悠远而沉稳的钟声，那声音像是被森林过滤过，干净得直抵心底。
推开那扇厚重的木门，仿佛跨过了一道时间的门槛。外面的世界是辽阔的自然，里面则是凝聚到极致的虔敬。光线骤然暗了下来，空气中弥漫着古老蜡烛燃烧后的蜜蜡味、陈年木头的气息，以及一种淡淡的、难以名状的焚香余韵。你的眼睛需要几秒钟来适应。然后，你看到了它——主教堂内部。金色，无处不在的金色。不是暴发户式的炫耀，而是在幽暗中被无数烛火点亮的、温暖而神圣的金色。圣像屏上，一幅幅圣徒的面容在摇曳的光影中凝视着你，他们的目光穿越了几个世纪。最令人屏息的，是那个被无数银质还愿牌覆盖的圣像匣，里面便是传说中由圣路加亲手绘制的“马哈伊拉圣母像”。你能看到络绎不绝的当地人，他们安静地走上前，亲吻圣像，低声祷告，那种专注与投入，让整个空间充满了流动的、沉静的能量。这里不是博物馆，而是一个心脏，依然在有力地跳动。
这座修道院最打动人的，或许正是这种“活着”的感觉。你会看到穿着黑色长袍、留着长须的修士，提着水桶安静地穿过庭院，他们的身影与斑驳的石墙融为一体。在附属的小商店里，你能买到修士们亲手照料的蜂箱产出的蜂蜜，带着松林野花的香气。它不仅仅是一个景点，更是山区生活网中的一个枢纽，一个精神避难所，一个社区中心。它的魅力不在于建筑的宏伟，而在于那种在绝美而严酷的自然环境中，人类信仰所展现出的那种坚韧、持久与宁静。当你坐在庭院外的石凳上，望着脚下连绵到天际的松涛，你会明白，人们来到这里，不仅仅是为了看一幅圣像，更是为了呼吸一口这种稀薄而纯净的精神空气。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在特罗多斯山东部蜿蜒的山路上不知拐了多少个弯，窗外的景色从地中海式的明媚豁然切换成一种深邃的苍绿。松林越来越密，空气越来越凉，带着一种清冽的、松脂与湿润泥土混合的独特气味。就在你觉得快要迷失在这片绿色迷宫里的时候，一个转弯，它出现了——马哈伊拉斯修道院。不是想象中金碧辉煌、高耸入云的姿态，而是低低地、紧紧地贴着山壁，那些浅灰色的石墙和暗红色的铁皮屋顶，带着一种近乎倔强的朴素，仿佛是从山体里生长出来的另一块岩石。那一刻，你听不到任何现代世界的噪音，只有风吹过万千松针的沙沙声，以及偶尔传来的、悠远而沉稳的钟声，那声音像是被森林过滤过，干净得直抵心底。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "推开那扇厚重的木门，仿佛跨过了一道时间的门槛。外面的世界是辽阔的自然，里面则是凝聚到极致的虔敬。光线骤然暗了下来，空气中弥漫着古老蜡烛燃烧后的蜜蜡味、陈年木头的气息，以及一种淡淡的、难以名状的焚香余韵。你的眼睛需要几秒钟来适应。然后，你看到了它——主教堂内部。金色，无处不在的金色。不是暴发户式的炫耀，而是在幽暗中被无数烛火点亮的、温暖而神圣的金色。圣像屏上，一幅幅圣徒的面容在摇曳的光影中凝视着你，他们的目光穿越了几个世纪。最令人屏息的，是那个被无数银质还愿牌覆盖的圣像匣，里面便是传说中由圣路加亲手绘制的“马哈伊拉圣母像”。你能看到络绎不绝的当地人，他们安静地走上前，亲吻圣像，低声祷告，那种专注与投入，让整个空间充满了流动的、沉静的能量。这里不是博物馆，而是一个心脏，依然在有力地跳动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座修道院最打动人的，或许正是这种“活着”的感觉。你会看到穿着黑色长袍、留着长须的修士，提着水桶安静地穿过庭院，他们的身影与斑驳的石墙融为一体。在附属的小商店里，你能买到修士们亲手照料的蜂箱产出的蜂蜜，带着松林野花的香气。它不仅仅是一个景点，更是山区生活网中的一个枢纽，一个精神避难所，一个社区中心。它的魅力不在于建筑的宏伟，而在于那种在绝美而严酷的自然环境中，人类信仰所展现出的那种坚韧、持久与宁静。当你坐在庭院外的石凳上，望着脚下连绵到天际的松涛，你会明白，人们来到这里，不仅仅是为了看一幅圣像，更是为了呼吸一口这种稀薄而纯净的精神空气。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马哈伊拉斯修道院`} />
                <InfoRow label="英文名称" value={`Machairas Monastery`} />
                <InfoRow label="正式名称" value={`Machairas Monastery`} />
                <InfoRow label="国家" value={`塞浦路斯`} />
                <InfoRow label="城市" value={`尼科西亚山区（特罗多斯山东部）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`塞浦路斯最重要的东正教朝圣中心之一，守护着据信由圣路加亲手绘制的圣母圣像，是岛国信仰与精神抵抗的象征。`} />
                <InfoRow label="建筑特色" value={`一座由厚重石墙和铁皮屋顶构成的庄严建筑群，完美地融入陡峭的山坡与松林之中，外观更像一座防御堡垒而非传统修道院。`} />
                <InfoRow label="建筑风格" value={`以拜占庭传统为根基，融合了后期简朴的塞浦路斯山区建筑风格，带有明显的防御性元素。`} />
                <InfoRow label="文化价值" value={`作为活着的信仰社区，它不仅是宗教圣地，更是塞浦路斯希腊族身份、文化传统与山区生活方式的守护者。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（5月-9月）每日上午8:00至下午1:00，下午3:00至晚上7:00。冬季（10月-4月）每日上午8:00至下午1:00，下午2:00至下午5:00。修道院遵循严格的东正教宗教日程，在重大宗教节日（如圣母安息日，8月15日）全天开放并举行盛大仪式，但部分区域可能只对朝圣者开放。平日午间有较长的静休时间，建议不要在这个时段打扰。`} />
              <InfoRow label="门票价格" value={`免费参观，但诚挚欢迎自愿捐赠以支持修道院的维护。捐赠箱通常位于主教堂入口处。修道院自产和出售的蜂蜜、橄榄油及宗教纪念品是另一种很好的支持方式。`} />
              <InfoRow label="地址" value={`Machairas Monastery, Lazanias, 2640, Cyprus`} />
              <InfoRow label="交通方式" value={`从拉纳卡国际机场出发是最佳选择。自驾是最方便的方式，租车后沿A2/A3高速公路向尼科西亚方向行驶，在Politiko附近转入山区道路E903，再沿清晰的路标前往Lazanias村和修道院，全程约1小时15分钟。若使用公共交通，可从尼科西亚市中心巴士站乘坐前往Lazanias或Palaichori的山区巴士，班次非常稀少（通常每日仅1-2班），且下车后仍需步行约3公里上山，强烈不建议。若不自驾，可考虑从尼科西亚或拉纳卡预订出租车，但需谈好往返及等待价格，单程费用可能高达50-60欧元。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从一幅飘洋过海、神秘失踪的圣像讲起。传说，在基督教早期，福音书作者圣路加亲手绘制了三幅圣母玛利亚的肖像。其中一幅，在动荡的岁月里，由一位虔诚的隐士从小亚细亚带到了塞浦路斯，只为躲避当时破坏圣像的狂潮。然而，这位隐士去世后，圣像也随之消失在茫茫的特罗多斯山脉中，成了一个口耳相传的传说。时间跳到公元12世纪，大概是1172年。两位来自巴勒斯坦的隐修士，尼奥菲托斯和伊格纳提奥斯，在塞浦路斯岛上苦苦追寻神的指引。一天，他们在如今修道院所在的这片密林中，看到一处岩缝中透出奇异的光芒。拨开荆棘，他们震惊地发现了那幅失传已久的圣像。更神奇的是，圣像旁竟插着一把闪闪发光的砍刀——“machairi”。这把刀仿佛是天赐的工具，让他们得以开辟道路，建立最初的隐修所。这就是“马哈伊拉斯”之名的由来，意为“持刀者”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的正式建立，离不开一位关键人物——拜占庭皇帝曼努埃尔一世。这位痴迷于宗教与艺术的君主听说了圣像显灵的故事，慷慨解囊，资助修建了第一座正式的修道院教堂，并将珍贵的圣像庄严供奉其中。从此，马哈伊拉斯从隐士的洞穴，变成了一个重要的宗教中心，吸引了无数寻求灵性慰藉的信徒。然而，中世纪的塞浦路斯命运多舛。法兰克人、威尼斯人相继统治岛屿，东正教信仰常常受到压制。马哈伊拉斯修道院因其偏远的位置，反而成了保存希腊东正教文化和身份的秘密堡垒。修士们在这里默默抄写经文，坚持着古老的礼仪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的烈火考验发生在奥斯曼帝国统治时期。1821年，希腊本土爆发独立战争，风暴也波及了塞浦路斯。奥斯曼统治者怀疑岛上的东正教修道院是革命据点，进行了残酷的镇压。马哈伊拉斯修道院未能幸免。当时的修道院长和几位修士被逮捕，并在尼科西亚被公开处决，修道院也遭到严重破坏。这段殉道史，没有让修道院消亡，反而深深烙印在其灵魂之中，让它成为了塞浦路斯希腊族人不屈精神的象征。鲜血浇灌的信仰，扎根更深。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入20世纪，修道院见证了塞浦路斯现代史的沧桑。它继续作为信仰灯塔，在二战和后来的民族冲突中为人们提供庇护。今天的建筑主体，其实很多是在旧有基础上不断修复和扩建的结果，那份朴拙而坚固的外观，正是它历经劫波、顽强生存的证明。如今，院长和修士们依然遵循着古老的修道规条，过着祈祷与劳作的清修生活。他们照料橄榄园、养蜂、制作手工艺品，让这座古老的修道院在经济上也得以自持。当你今天站在这里，你看到的不仅是一座建筑，更是一段跌宕起伏的信仰史诗，一个民族记忆的活档案，它的一砖一瓦，一草一木，都在轻声诉说着关于坚守、磨难与重生的千年故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受马哈伊拉斯的灵魂，请务必预留出至少三个小时的沉浸时间。建议在上午9点左右抵达，这时晨祷刚结束，修道院从内部的灵修状态转向对访客的开放，光线也正好开始变得明亮柔和，穿透松林洒在庭院里。整个游览节奏宜慢不宜快，核心是“感受”而非“打卡”。先从外部环境和庭院开始，让身心适应这里的宁静氛围，再进入圣殿的核心区域，最后以在自然中静思收尾。这样的顺序能让你像剥洋葱一样，层层深入地体验这个地方从自然景观到建筑空间，再到精神内核的完整维度。午间修士休息时，你可以转到外围的山径散步。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`女性访客必须穿着过膝的裙装或长裤，并在入口处免费借用提供的长围裙包裹腰部，男性也应避免穿短裤和无袖上衣，这是对宗教场所最基本的尊重。保持绝对安静，尤其是在教堂内部，关闭手机铃声，不要使用闪光灯拍照。切勿为了拍照而干扰正在祷告的信徒或工作中的修士。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在下方停车场后，别急着上山门，先在原地停留几分钟，深呼吸松林的空气，远眺修道院建筑群与险峻山势浑然一体的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓缓走上坡道，穿过那道朴素的石砌山门，进入静谧的主庭院，注意观察地面上被岁月磨光的石板和角落里静静生长着的老树。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向主教堂那扇厚重的木门，在进入前稍作停顿，整理衣着并调整呼吸，以一份安静的心准备进入圣域。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在烛光摇曳、充满焚香气息的教堂内部，让眼睛适应幽暗，然后静静仰头欣赏金碧辉煌的圣像屏，并缓步移向左侧被银牌覆盖的圣像匣，瞻仰传说中的马哈伊拉圣母像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出主教堂，参观侧面的小型宗教博物馆，那里陈列着古老的圣器、手抄本和描绘修道院历史的版画，是理解其深厚传统的窗口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时机合适，可以去修道院附属的小商店看看，那里出售修士自产的蜂蜜、橄榄油和朴素的宗教纪念品，买一点也是支持。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着修道院外侧的一条短径走几步，找到一个可以俯瞰下方山谷的视野开阔处，坐下来，什么也不做，只是倾听风与松涛的合奏。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主庭院拱门下回望`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点左右，阳光西斜，站在通往教堂的石头拱门下，向外拍摄庭院全景，可以将石墙、绿树和远处的层峦叠嶂一同框入，构图深邃。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣像前烛光特写`}</h4>
                  <p className="text-sm text-gray-700">{`在教堂内，将相机固定或调高感光度，捕捉信徒在圣母圣像前点燃蜡烛的瞬间，专注于烛火映照在银质还愿牌和虔诚面孔上的温暖光影，避免拍摄修士正脸。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`修道院侧面全景`}</h4>
                  <p className="text-sm text-gray-700">{`从停车场上方约100米处的山路弯道向回看，用长焦镜头压缩空间，将修道院坚实的石砌建筑与背后漫无边际的深绿色松林同框，展现其遗世独立的姿态。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`山谷瞭望点`}</h4>
                  <p className="text-sm text-gray-700">{`在修道院外侧的观景石凳上，将三脚架放低，以松枝作前景，拍摄脚下山谷在晨雾或暮霭中若隐若现的辽阔景色，修道院的钟楼可作为点睛之笔置于画面一角。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部摄影务必事先征得修士或管理员的默许（通常不禁止但需极度谨慎），且绝对禁止使用闪光灯，以免破坏肃穆气氛并损伤古老壁画。拍摄修士或信徒时，请务必保持距离并使用长焦镜头，未经明确许可不要拍摄他们的正面特写，尊重他们的隐私和修行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山区传统石屋`}</h4>
                  <p className="text-sm text-blue-800">{`住在距离修道院车程15分钟的拉扎尼亚斯或帕莱乔里村庄里，由古老石屋改造的家庭旅馆，晚上能看见璀璨的星河，清晨在柴火炉的香气中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`尼科西亚设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`如果想兼顾城市便利，可以选择尼科西亚老城内的精品设计酒店，白天进山修行，晚上回到城里享受美食和夜生活，感受现代与传统的对冲。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特罗多斯山度假木屋`}</h4>
                  <p className="text-sm text-yellow-800">{`在更深入的特罗多斯山度假村中找一间独栋小木屋，被雪山和森林环绕，拥有温暖的壁炉和私人露台，适合想要彻底隐居放松的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`拉纳卡海滨住宿`}</h4>
                  <p className="text-sm text-purple-800">{`对于追求舒适的游客，可以住在拉纳卡的海滨酒店，将修道院之旅作为一天的精华行程，晚上回到海边享受地中海的海风与日落，形成强烈对比体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "山区住宿冬季（11月-3月）非常寒冷且可能降雪，务必确认住宿有完善的供暖系统。夏季则是理想的避暑胜地。预订乡村住宿时，最好询问是否提供晚餐，因为山区餐厅很少且关门早。无论是山村还是修道院周边，治安都极好，民风淳朴。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开马哈伊拉斯很久以后，我发现自己最常回味的，不是那幅被重重包裹的圣像的具体模样，而是那种整体的“氛围”。是松脂的清冷气味，是烛光在金色圣像屏上的跳跃，是老修士黑袍拂过石板地的窸窣声，是站在山崖边面对无尽绿海时那份突如其来的、巨大的宁静。在这个一切都被加速、被展示、被消费的时代，这里固执地保持着自己的节奏——一种近乎地质年代的缓慢。它不讨好你，不向你解释什么，只是沉默地在那里存在着。这种沉默，本身就是一种强大的语言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你也厌倦了那些被过度包装的“必去景点”，如果你渴望一次真正能沉淀下来的旅行，那么，请来马哈伊拉斯。它需要的不是你的惊叹，而是你的呼吸能与它的节奏同步。它不会给你 Instagram 上瞬间爆炸的视觉奇观，但它可能会在你心里种下一点不一样的東西——一种在喧嚣世界中如何保持内在安定的可能。这不仅仅是一次参观，更像是一次短暂的行修。在这个深藏于松林深处的石头庭院里，你或许能听见，自己内心深处，那被日常噪音掩盖已久的，最真实、最平静的回响。这才是深度旅行的意义：不是收集地点，而是邂逅能改变我们观看世界方式的那些瞬间。马哈伊拉斯，正是这样一个珍贵的瞬间。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kakopetria-village-troodos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡科佩特里亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kakopetria</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/amathus-cyprus" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿玛苏斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amathus</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/paphos-archaeological-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕福斯考古公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Paphos Archaeological Park</p>
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
