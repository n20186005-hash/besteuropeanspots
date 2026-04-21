import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔马格罗 Almagro｜探访保存完好的黄金世纪露天剧场与魔力庭院 - 最佳欧洲景点',
  description: '朋友，想象一下，你拐进一条赭石色与泥白色相间的窄巷，地面是被几个世纪的脚步磨得温润发亮的石板。午后的阳光斜射下来，空气里有股干燥的泥土味，混杂着从某户人家敞开的门里飘出的淡淡橘花香。然后，你眼前豁然开朗，一个被三层木制回廊严密围合的长方形广场撞进视线——这就是阿尔马格罗的主广场。它不像西班牙其他广场...',
}

export default function AlmagroMedievalCourtyardTheatrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '阿尔马格罗', href: '/attractions/almagro-medieval-courtyard-theatre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔马格罗・Almagro・西班牙・雷阿尔城省， 卡斯蒂利亚-拉曼查自治区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你拐进一条赭石色与泥白色相间的窄巷，地面是被几个世纪的脚步磨得温润发亮的石板。午后的阳光斜射下来，空气里有股干燥的泥土味，混杂着从某户人家敞开的门里飘出的淡淡橘花香。然后，你眼前豁然开朗，一个被三层木制回廊严密围合的长方形广场撞进视线——这就是阿尔马格罗的主广场。它不像西班牙其他广场那样喧闹开放，它更像一个巨大的、露天的客厅，安静，私密，带着一种内向的尊严。那些深绿色的木窗棂整齐地排列着，像在沉默地观看。
但真正让你灵魂出窍的，是走进那个著名的“市立剧院”。它藏在广场一角不起眼的门廊后。当你推开门，黑暗瞬间拥抱了你，随后，眼睛适应了昏暗的光线。你发现自己站在一个“庭院”里——是的，一个建于十七世纪、专为演戏而生的庭院。三面是两层楼的木制廊台包厢，雕刻着简单的花纹，漆色已经斑驳。正对面是石头筑成的舞台，没有繁复的布景，只有几扇门和一道楼廊。抬头，是敞开的天空。空气是凉的，带着老木头、旧帆布和灰尘特有的沉静气味。你几乎能立刻听到，四百年前，观众挤在这些长条木凳上，小贩在过道叫卖杏仁和水，台上的人物正用华丽的诗体，诉说着荣誉、爱情与命运。
阿尔马格罗最迷人的地方在于，它不是一个冷冰冰的博物馆。这个小镇，连同它的广场、剧院和无数个被称为“庭院”的贵族老宅，仍然活在一种戏剧的节奏里。当地人的日常生活——在广场拱廊下的咖啡馆喝一杯，在街角的面包店买刚出炉的点心——都与这座舞台的呼吸息息相关。到了七月，整个小镇会彻底变身为一个巨大的剧场，演员们穿着古老的戏服在石板路上穿行，夜晚，从那些古老的庭院里传来抑扬顿挫的台词声和观众的掌声。在这里，戏剧不是被供奉的，它是呼吸着的，是小镇的血液和心跳。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你拐进一条赭石色与泥白色相间的窄巷，地面是被几个世纪的脚步磨得温润发亮的石板。午后的阳光斜射下来，空气里有股干燥的泥土味，混杂着从某户人家敞开的门里飘出的淡淡橘花香。然后，你眼前豁然开朗，一个被三层木制回廊严密围合的长方形广场撞进视线——这就是阿尔马格罗的主广场。它不像西班牙其他广场那样喧闹开放，它更像一个巨大的、露天的客厅，安静，私密，带着一种内向的尊严。那些深绿色的木窗棂整齐地排列着，像在沉默地观看。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但真正让你灵魂出窍的，是走进那个著名的“市立剧院”。它藏在广场一角不起眼的门廊后。当你推开门，黑暗瞬间拥抱了你，随后，眼睛适应了昏暗的光线。你发现自己站在一个“庭院”里——是的，一个建于十七世纪、专为演戏而生的庭院。三面是两层楼的木制廊台包厢，雕刻着简单的花纹，漆色已经斑驳。正对面是石头筑成的舞台，没有繁复的布景，只有几扇门和一道楼廊。抬头，是敞开的天空。空气是凉的，带着老木头、旧帆布和灰尘特有的沉静气味。你几乎能立刻听到，四百年前，观众挤在这些长条木凳上，小贩在过道叫卖杏仁和水，台上的人物正用华丽的诗体，诉说着荣誉、爱情与命运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`阿尔马格罗最迷人的地方在于，它不是一个冷冰冰的博物馆。这个小镇，连同它的广场、剧院和无数个被称为“庭院”的贵族老宅，仍然活在一种戏剧的节奏里。当地人的日常生活——在广场拱廊下的咖啡馆喝一杯，在街角的面包店买刚出炉的点心——都与这座舞台的呼吸息息相关。到了七月，整个小镇会彻底变身为一个巨大的剧场，演员们穿着古老的戏服在石板路上穿行，夜晚，从那些古老的庭院里传来抑扬顿挫的台词声和观众的掌声。在这里，戏剧不是被供奉的，它是呼吸着的，是小镇的血液和心跳。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔马格罗`} />
                <InfoRow label="英文名称" value={`Almagro`} />
                <InfoRow label="正式名称" value={`Almagro`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`雷阿尔城省， 卡斯蒂利亚-拉曼查自治区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`西班牙黄金世纪戏剧独一无二的活化石，拥有世界上唯一一座仍在原址定期上演古典戏剧的十七世纪露天庭院剧场。`} />
                <InfoRow label="建筑特色" value={`以宏伟的砖石结构主广场为核心，环绕着由贵族宫邸改造的、带柱廊的古典庭院，尤以那座保存完好的木结构露天剧院为灵魂。`} />
                <InfoRow label="建筑风格" value={`卡斯蒂利亚文艺复兴风格与民间泥砖建筑传统（俗称“托斯卡”）的完美融合。`} />
                <InfoRow label="文化价值" value={`不仅是建筑遗产，更是一个延续了四个多世纪的活态文化传统，通过每年七月盛大的古典戏剧节，让塞万提斯与洛佩·德·维加时代的戏剧生命在此永恒跳动。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`主广场与街巷全天开放。主要景点“市立剧院”开放时间通常为周二至周六 10:00-14:00， 16:00-19:00（夏季傍晚延至20:00）；周日及节假日 10:00-14:00。每年七月“古典戏剧节”期间，剧院日间开放供参观，夜间有演出。建议行前查询当地旅游局官网，冬季开放时间可能缩短。`} />
              <InfoRow label="门票价格" value={`市立剧院门票约6欧元。通常有学生、青年卡及65岁以上长者优惠票，约4欧元。团体票（15人以上）可提前预约享受折扣。戏剧节期间观看演出需单独购票，价格因剧目和座位而异，通常在15-60欧元不等。`} />
              <InfoRow label="地址" value={`Plaza Mayor, 1, 13270 Almagro, Ciudad Real, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发最方便。由马德里阿托查火车站乘坐AVE高速火车至雷阿尔城站，车程约50分钟。抵达后，在车站外乘坐前往阿尔马格罗的本地大巴（如“Aisa”公司），车程约25-30分钟，班次约为每小时一班。从马德里自驾沿A-4高速公路向南，在雷阿尔城出口转CM-412公路，总车程约2小时。古城内街道狭窄，建议将车停在城外的免费公共停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿尔马格罗的故事，始于一个被遗忘的罗马驿站，但真正让它登上历史舞台的，是财富与权力。十六世纪，一个名叫富格尔的德国银行家家族，因其对西班牙王室的巨额贷款，被国王赐予了附近阿尔马德én水银矿的开采权。他们的财富管理中心，就设在阿尔马格罗。滚滚而来的白银和水银利润，让这个内陆小镇一夜暴富。富格尔家族和随之而来的其他贵族、富商，开始在这里大兴土木，建造奢华的府邸。他们引入了文艺复兴的建筑理念，但使用了本地最常见的材料：泥土烧制的红砖和木材。于是，一种独特的风格诞生了——宏伟的柱廊、精美的纹章雕刻在朴素的砖面上，内部是一个个别有洞天的“庭院”，这是西班牙宅邸的核心，是家庭生活、社交乃至商业活动的中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`剧院的诞生，充满了偶然与必然。十七世纪是西班牙文学的“黄金世纪”，戏剧空前繁荣。当时流行的演出场所，就是利用这些贵族宅邸的中央庭院。演员在庭院一端临时搭台，观众则站在庭院地面或周围的廊台观看。这种形式深入民心。1954年，阿尔马格罗发生了戏剧性的一幕：当地一所学校的校长，在修缮一栋属于“市立剧院协会”的老房子时，意外地在夹层里发现了一批十七世纪的古老文件和一整套完整的木制剧场结构构件。经考证，这栋建筑正是由一位名叫莱昂纳多·德·奥万多的高级教士，在1628年为自己建造的宅邸，而这个庭院，从建成之初就被设计并用作固定剧场！它不是一个临时改造品，而是从一开始就为戏剧而生的建筑瑰宝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这一发现震惊了全国。经过精心修复，这座被遗忘近三百年的剧院在1954年重新开幕。它被命名为“市立剧院”，并被赋予了新的生命。人们意识到，他们拥有的不仅仅是一座古老建筑，而是一条直通西班牙文化辉煌时代的时光隧道。为了让这条隧道保持畅通，一个更大胆的想法诞生了：恢复演出。1978年，第一届阿尔马格罗古典戏剧节在此揭幕。最初可能只是一种文化怀旧，但很快，它演变成了一场席卷整个小镇的文化复兴运动。演员们重新学习黄金世纪的发音和表演方式，学者们深入研究古籍，工匠们复刻当时的服装与道具。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，每年七月，阿尔马格罗就变成了一个巨大的、活生生的舞台。戏剧节不仅在市立剧院上演剧目，更辐射到镇上其他二十多座历史“庭院”。那些昔日的贵族客厅、马车库房甚至修道院回廊，都被改造成各具特色的小剧场。观众在一个晚上，可以穿梭在不同的时空之间：刚刚还在十六世纪的宫殿庭院里看一场洛佩·德·维加的骑士喜剧，转眼又走进一个十八世纪的修道院，观看一场现代改编的卡尔德隆哲理剧。阿尔马格罗用最生动的方式证明，伟大的传统不是用来膜拜的，而是用来点燃当下生活的火焰。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在午后三点左右抵达阿尔马格罗，此时西班牙的酷热稍稍减退，阳光变得金黄柔和。将车停在城外，徒步走进古城，本身就是融入的第一步。整个深度游览需要至少4-5小时，节奏宜慢不宜快。先从宏大的主广场开始，建立空间感，然后像剥洋葱一样深入小巷，探寻那些隐藏的庭院，最后在黄昏时分进入市立剧院，感受一天中光线最富戏剧性的时刻，并为夜晚可能的戏剧演出预留期待。这样的安排让你从宏观到微观，从外在建筑到内在文化核心，层层递进地理解这座“戏剧之城”。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在旅游局网站查询“庭院开放日”，许多最美的私人庭院并非每日开放，错过会非常遗憾。
穿着舒适的平底鞋至关重要，古城内全是凹凸不平的石板路，高跟鞋简直是灾难。
即使不懂西班牙语，也强烈建议在戏剧节期间看一场演出，肢体语言、华服与现场音乐本身就是一种穿越的体验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城外的停车场沿着树荫下的步道慢行，让第一眼看见赭红色主广场塔楼尖顶的瞬间成为仪式感的开始。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主广场拱廊下的露天咖啡座点一杯冰咖啡，静静观察广场立面上那些整齐如琴键般的绿色木窗与繁忙却宁静的本地生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开市立剧院那扇厚重的木门，让眼睛在昏暗光线中慢慢适应，然后独自站在空荡荡的庭院剧场中央，聆听历史的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拿着“庭院开放地图”，像寻宝一样钻进主广场辐射出的任一条小巷，去敲开一扇标注着“参观开放”的古老宅邸大门，探索其私密的柱廊庭院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分回到主广场，看夕阳将整个砖石立面染成炽烈的金红色，等待广场周围的灯光逐一亮起。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家由古老酒窖改造的餐厅，在石拱顶下享用一顿以曼查奶酪和葡萄酒为特色的晚餐，完成感官的沉浸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果恰逢戏剧节期间，晚餐后务必加入手拿节目单、身着正装或传统服饰、涌向各个剧场的人群，成为今晚演出的一部分。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主广场东侧拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四至六点，阳光西斜，能拍摄到光线穿过拱廊，在广场地面投下长长光影，并勾勒出对面建筑木窗精美轮廓的经典构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市立剧院二楼包厢俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`参观时若允许上楼，从二楼正对舞台的包厢向下拍摄，可以完美捕捉整个庭院剧场的对称结构，人物在舞台或观众席中会成为绝佳的点缀。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣巴托洛梅修道院回廊`}</h4>
                  <p className="text-sm text-gray-700">{`这是一处鲜有游客的静谧之地，清晨或闭馆前，柔和的光线穿过双层拱廊，在地面形成规律的光斑，是拍摄极简建筑几何美学的绝佳地点。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`任意一处开放庭院的内角`}</h4>
                  <p className="text-sm text-gray-700">{`利用庭院中央的柱子或绿植作为前景框架，拍摄对角线的柱廊，能极大增强画面的纵深感与宁静氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在剧院内部，请绝对禁止使用闪光灯，以免破坏古老木结构与脆弱彩绘。高感光度的相机或手机夜间模式是更好的选择。拍摄当地居民，尤其是老人或工作中的店主，一个微笑和简单的手势征得同意，会收获更友善的回应。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式体验`}</h4>
                  <p className="text-sm text-blue-800">{`下榻由十六世纪贵族宫殿改造的“帕拉多尔”，睡在古董家具环绕的房间里，清晨独自享用空旷的罗马式回廊庭院早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`文艺气息之选`}</h4>
                  <p className="text-sm text-green-800">{`主广场旁的家庭式精品酒店，房间阳台正对广场，晚上可以伴着广场上若有若无的吉他声入睡，戏剧节期间更是近水楼台。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`经济舒适`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古城边缘一栋经过现代化改造的“托斯卡”传统泥砖房里，由热情的老夫妇经营，能品尝到最地道的家庭风味早餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特尝试`}</h4>
                  <p className="text-sm text-purple-800">{`戏剧节期间，一些本地居民会出租自家带有小庭院的房间，让你真正像当地人一样生活，并有机会和房东聊聊他们与戏剧节的故事。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`帕拉多尔和广场周边酒店在戏剧节期间（七月）非常紧俏，需提前至少三至六个月预订。古城内极为安全，夜晚漫步小巷也很惬意，但所有住宿点隔音可能相对一般，这正是体验中世纪小镇“生活气息”的一部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿尔马格罗许久，那个露天剧场的画面依然会在某个安静的夜晚浮现。它让我思考，什么才是真正的“保存”？是把一件东西锁进玻璃柜，保持它绝对的、静止的原始状态吗？阿尔马格罗给出了另一个更动人、也更艰难的答案：真正的保存，是赋予其持续不断的、有意义的生命。这里的每一块砖、每一根木梁，都因为每年夏天响起的台词、亮起的灯光和观众屏住的呼吸，而保持着自己的温度。它不是一个关于过去的纪念碑，而是一座连接过去与现在的桥梁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都被数字化、快餐化的时代，阿尔马格罗的存在，像是一个温柔的坚持。它告诉我们，有些体验无法被屏幕取代，那是空气的流动、是邻座观众的叹息、是演员汗水在灯光下的微光、是台词在古老砖墙间碰撞的回声。它提醒我们，文化最鲜活的形态不是陈列，而是呼吸与共鸣。所以，如果你也相信旅行是为了触碰那些仍在有力跳动的历史脉搏，那么，请一定来阿尔马格罗坐一坐。不要只是参观，试着去观看。在星空下的古老庭院里，让自己成为这出延续了四百年的伟大戏剧中，又一个被感动、被连接的观众。这一刻，你便也成了历史的一部分。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/albarracin-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔瓦拉辛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Albarracín</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ronda-cliff-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    龙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">龙达悬崖小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ronda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/merida-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅里达罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mérida Roman Ruins</p>
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
