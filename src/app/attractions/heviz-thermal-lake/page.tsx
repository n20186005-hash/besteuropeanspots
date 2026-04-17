import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '黑维兹温泉湖 Hévíz｜漂浮在睡莲仙境中的欧洲最大温泉湖 - 最佳欧洲景点',
  description: '想象一下，你穿过一片茂密、散发着湿润泥土气息的树林，空气突然变得温暖而氤氲，带着一丝淡淡的、并不恼人的硫磺味，像是大地在轻声呼吸。然后，一片不可思议的景色在你眼前铺开：一个巨大的、冒着袅袅白烟的湖泊，像一块被放置在森林中央的、温润的碧玉。这就是黑维兹给你的第一眼震撼。它不是游泳池，不是人工浴场，而是...',
}

export default function HevizThermalLakePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '黑维兹温泉湖', href: '/attractions/heviz-thermal-lake' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`黑维兹温泉湖・Hévíz・匈牙利・黑维兹`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你穿过一片茂密、散发着湿润泥土气息的树林，空气突然变得温暖而氤氲，带着一丝淡淡的、并不恼人的硫磺味，像是大地在轻声呼吸。然后，一片不可思议的景色在你眼前铺开：一个巨大的、冒着袅袅白烟的湖泊，像一块被放置在森林中央的、温润的碧玉。这就是黑维兹给你的第一眼震撼。它不是游泳池，不是人工浴场，而是一片活生生的、热气腾腾的天然水域，被森林和花园温柔地环抱着。湖面上，一片片硕大圆润的睡莲叶子静静漂浮，粉白或鹅黄的花朵在蒸汽中若隐若现，仿佛不属于这个季节的精灵。
当你踏入水中，那种感觉更奇妙了。水是那样温暖，大约在夏末33度、冬季26度左右，常年保持着宜人的体温。脚底不是坚硬的水泥，而是柔软、厚实、富有弹性的泥炭层，据说富含矿物质。你向湖心游去，蒸汽模糊了视线，周围是各种语言轻声交谈的愉悦叹息，有白发苍苍的当地老人缓缓划水，也有好奇的游客试着漂浮。这里不像那些喧嚣的景点，节奏被水的温度天然地调慢了。当地人把来这里泡澡称为“取水”，就像我们去咖啡馆喝一杯那样自然，是一种深入骨髓的日常疗愈仪式。
最动人的是那座矗立在湖中央的木质主浴场。它不像建筑，更像一艘永远停泊在蒸汽之海上的巨轮，或者一个从湖中生长出来的奇幻宫殿。淡黄色的木墙、优雅的弧形线条、彩色的玻璃窗，在缭绕的雾气里显得既宏伟又梦幻。你可以在它的廊柱间穿梭，看阳光如何穿过蒸汽和窗户，在木质平台上投下变幻的光影。空气里混杂着水汽、木头被暖湿空气浸润的淡淡味道，还有远处飘来的咖啡香。这里没有“参观”的疏离感，只有“浸泡”和“成为一部分”的融合。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你穿过一片茂密、散发着湿润泥土气息的树林，空气突然变得温暖而氤氲，带着一丝淡淡的、并不恼人的硫磺味，像是大地在轻声呼吸。然后，一片不可思议的景色在你眼前铺开：一个巨大的、冒着袅袅白烟的湖泊，像一块被放置在森林中央的、温润的碧玉。这就是黑维兹给你的第一眼震撼。它不是游泳池，不是人工浴场，而是一片活生生的、热气腾腾的天然水域，被森林和花园温柔地环抱着。湖面上，一片片硕大圆润的睡莲叶子静静漂浮，粉白或鹅黄的花朵在蒸汽中若隐若现，仿佛不属于这个季节的精灵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你踏入水中，那种感觉更奇妙了。水是那样温暖，大约在夏末33度、冬季26度左右，常年保持着宜人的体温。脚底不是坚硬的水泥，而是柔软、厚实、富有弹性的泥炭层，据说富含矿物质。你向湖心游去，蒸汽模糊了视线，周围是各种语言轻声交谈的愉悦叹息，有白发苍苍的当地老人缓缓划水，也有好奇的游客试着漂浮。这里不像那些喧嚣的景点，节奏被水的温度天然地调慢了。当地人把来这里泡澡称为“取水”，就像我们去咖啡馆喝一杯那样自然，是一种深入骨髓的日常疗愈仪式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最动人的是那座矗立在湖中央的木质主浴场。它不像建筑，更像一艘永远停泊在蒸汽之海上的巨轮，或者一个从湖中生长出来的奇幻宫殿。淡黄色的木墙、优雅的弧形线条、彩色的玻璃窗，在缭绕的雾气里显得既宏伟又梦幻。你可以在它的廊柱间穿梭，看阳光如何穿过蒸汽和窗户，在木质平台上投下变幻的光影。空气里混杂着水汽、木头被暖湿空气浸润的淡淡味道，还有远处飘来的咖啡香。这里没有“参观”的疏离感，只有“浸泡”和“成为一部分”的融合。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`黑维兹温泉湖`} />
                <InfoRow label="英文名称" value={`Hévíz`} />
                <InfoRow label="正式名称" value={`Hévíz Thermal Lake`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`黑维兹`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲最大、可供公共沐浴的天然温泉湖，其疗愈历史绵延数千年。`} />
                <InfoRow label="建筑特色" value={`一座建在湖面上的巨型木质新艺术风格浴场亭阁，与自然景观完美融合。`} />
                <InfoRow label="建筑风格" value={`以19世纪末20世纪初的新艺术风格（Art Nouveau）为主，融合了传统匈牙利木构建筑特色。`} />
                <InfoRow label="文化价值" value={`是匈牙利“温泉文化”的活态核心，见证了从罗马帝国到现代社会的疗愈传统与生活方式。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年365天开放，每日开放时间通常为08:00-19:00（夏季旺季可能延长至20:00）。桑拿及按摩设施开放时间一般为10:00-18:00。湖中心的大型木制浴场（Main Bathing Hall）每年仅在温暖的夏季月份（通常为5月至9月）开放，供游泳者进出湖面。冬季湖面依旧温暖，但主要从岸边的更衣室和入口下水。重要节日（如圣诞节、元旦）开放时间可能缩短，建议行前查看官网。`} />
              <InfoRow label="门票价格" value={`基础门票（3小时）：成人约4000-4500匈牙利福林，儿童/学生/老人有优惠票。全天票价格更高。门票价格分淡旺季（夏季稍贵），通常包含指定区域的储物柜使用。如需租用浴袍、毛巾或预订私人更衣室需额外付费。桑拿世界（Sauna World）和各类按摩、理疗服务需单独购票或购买组合套餐。官网提前预订偶尔有折扣。`} />
              <InfoRow label="地址" value={`Hévíz, Gyógy-tó, 8380 Hungary`} />
              <InfoRow label="交通方式" value={`最近的国际机场是布达佩斯李斯特·费伦茨国际机场（BUD）。从布达佩斯出发最便捷的方式是乘坐火车：从布达佩斯-Déli火车站乘坐列车前往凯斯特海伊（Keszthely），车程约2.5-3小时，班次频率约为每1-2小时一班，建议购买直达或换乘少的车次。抵达凯斯特海伊后，在火车站前广场乘坐5路或5B路本地巴士，约15-20分钟即可直达黑维兹温泉湖（Hévíz, Gyógy-tó）站，巴士班次频繁。若自驾，从布达佩斯沿M7高速公路转86号公路，车程约2小时。湖周边有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`黑维兹的故事，要从大地深处涌动的脉搏说起。数万年前的地质活动，在这里创造了一个奇迹：一个由地下80米深处、每天涌出约8600万升热水的泉眼所供养的湖泊。湖水大约每三天就会完全更新一次。早在罗马时代，这片神奇的热水就已为人所知，考古学家在附近发现了罗马浴场的遗迹，那些征战四方的军团士兵，或许也曾在此缓解疲惫与伤痛。然而，真正的命运转折点是在中世纪之后，当这片土地归属于强大的菲斯提蒂兹家族。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`18世纪末，一位目光远大的伯爵——捷尔吉·菲斯提蒂兹，真正看到了这片温泉的价值。他不仅仅视其为领地财产，更相信其具有强大的疗愈力量。在他的主导下，黑维兹开始了最初的系统性开发：清理湖床，修建最初的下水步道，并将湖泊向公众开放，吸引了第一批寻求缓解病痛的人们。黑维兹的名声开始像湖面的蒸汽一样，缓缓升腾、扩散。但让它从乡间温泉蜕变为欧洲闻名的疗养圣地的，则是19世纪和20世纪初的“温泉黄金时代”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那时，欧洲贵族和新兴资产阶级热衷于温泉疗养。黑维兹凭借其独一无二的规模与天然泥炭疗效，吸引了无数访客。为了迎接他们，一座与这份自然奇观相匹配的建筑应运而生——就是今天我们看到的湖心木质浴场。它建于19世纪末，最初的结构更为简单，后来不断扩建，并采用了当时最时髦的新艺术风格。木质结构既能抵御湿润的腐蚀，其轻盈的形态又仿佛漂浮于水上，与自然对话。医生们开始系统研究湖水的成分（富含硫、钙、镁等矿物质及放射性元素），并针对风湿、关节炎、运动损伤等病症开具“水疗处方”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`两次世界大战给这个宁静的疗愈之地带来了创伤，但湖水依旧温暖，希望也从未冷却。在社会主义时期，它成为了国有化的疗养院，为工人提供福利性的疗养。也正是在这个时期，它进行了大规模的现代化扩建，增添了岸边的医疗设施和大型住宿疗养院。上世纪90年代后，黑维兹再次转型，在保留核心医疗功能的同时，向世界各地的休闲游客敞开了怀抱。今天的它，既是高科技的康复中心，也是普通人放松身心的天堂。它就像湖中那些古老的睡莲，根植于深厚的历史泥炭中，却年年开出新鲜的花朵，它的蒸汽，已经飘荡了数千年，温暖着一代又一代寻求慰藉的身心。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间给黑维兹，充分享受“慢浸泡”的节奏。最佳抵达时间是早上9点开园后不久，此时人流量较少，晨雾与阳光交织的景象最为梦幻。整体耗时约6-8小时，包含浸泡、休息、体验桑拿和简单午餐。节奏应该是“浸泡-休息-再浸泡”，避免在水中连续停留过久（建议单次不超过20-30分钟）。上午先探索湖心浴场和开阔湖面，中午上岸在餐厅午餐休息，下午可以体验岸边的桑拿世界或在指定区域享受泥疗，傍晚时分再次下水，感受日落时分湖光蒸汽的柔和色彩。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必自带或租赁防滑的涉水鞋，湖底泥炭虽软但有些区域可能有光滑的石头或树枝。
贵重物品请使用付费的电子储物柜，更衣室公共区域的普通储物柜安全性一般。
下水前务必取下银饰等金属物品，温泉水中较高的硫化物含量可能导致其变黑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入后，先在岸边木质平台上驻足几分钟，让眼睛和呼吸适应这片蒸腾的、飘着睡莲的碧绿世界`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的木质步道走向湖心主浴场，感受脚下建筑随着水波微微晃动，像走在一条通往温暖秘境的浮桥上`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主浴场开阔的中央区域缓缓下水，让温暖的湖水瞬间包裹全身，并尝试向不同温度的出水口区域游去探索`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游到湖面南侧睡莲密集的区域，静静地漂浮，看阳光穿透蒸汽在花瓣和水珠上折射出细微的彩虹`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上岸后，裹上浴袍前往湖岸东侧的“桑拿世界”，在一系列不同温度和主题的桑拿房中体验热浪与冷湖水的交替刺激`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在湖景餐厅的露天座位上点一份经典的匈牙利鱼汤或简餐，配上一杯当地葡萄酒，看着湖中悠然的人们恢复体力`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果感兴趣，预约一次专业的医疗按摩或矿物泥敷疗，感受黑维兹除了浸泡之外更深层的疗愈传统`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏前再次下水，这时水温感觉格外温柔，你可以看着夕阳的金光如何将木质建筑的轮廓和缭绕的蒸汽染成蜜色`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`湖岸西北角森林边缘的长椅视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或雨后，从这个位置可以拍摄到整个湖面蒸汽最为蒸腾、主浴场在雾气中若隐若现的仙境全景，构图时将蜿蜒的步道作为引导线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`湖心浴场二层开放式走廊`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光能较好照亮建筑内部结构，在这里可以拍摄人物凭栏远望、背景是睡莲湖面与森林的经典画面，注意捕捉柱子与窗户形成的光影框架。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`南侧睡莲区的水中低角度`}</h4>
                  <p className="text-sm text-gray-700">{`使用防水设备或将相机放低贴近水面，在下午的侧光下，能拍出睡莲叶片巨大的形态、晶莹的水珠以及后方朦胧的浴场建筑，极具超现实感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主浴场内部彩色玻璃窗下`}</h4>
                  <p className="text-sm text-gray-700">{`当正午阳光直射时，彩绘玻璃会将斑斓的色彩投射在古老的木质地板和立柱上，等待有人经过光影时按下快门，画面充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`温泉出水口附近`}</h4>
                  <p className="text-sm text-gray-700">{`水下拍摄（需专业防水装备）泉水从湖底涌出时带起的沙粒和气泡的动态，这是黑维兹生命力的最直接微观景象。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`蒸汽和湿气对相机是极大挑战，建议使用防水袋或仅在干燥区域快速取出拍摄，长时间拍摄后务必放入防潮箱护理。`}</li>
                <li>• {`拍摄他人时请格外注意礼貌和隐私，尤其是在更衣区或人们专注于疗愈时，尽量避免直接的面部特写。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典疗养酒店`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在湖岸边的百年历史疗养酒店，房间阳台正对温泉湖，清晨推开窗就能吸入第一口温润的空气，并享受酒店内包含的专业理疗课程通道。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`宁静森林小屋`}</h4>
                  <p className="text-sm text-green-800">{`位于湖泊保护区外围松林中的独栋小木屋，私密性极佳，晚上只能听到风声和虫鸣，适合自驾者寻求完全放松的自然沉浸体验。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`中心区精品公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`黑维兹小镇中心步行街上的现代化公寓，厨房设施齐全，下楼就是超市、餐厅和咖啡馆，体验完温泉后可以像本地人一样逛菜市场自己烹饪。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`距离湖区几分钟车程，由著名设计师操刀，将匈牙利传统元素与极简风格融合，拥有顶尖的SPA中心和室内恒温泳池，提供奢华的“后温泉”延伸享受。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的疗养型酒店通常提供“疗养套餐”（含住宿、每日温泉票和医疗咨询），需提前很久预订，尤其是旺季。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇非常安全宁静，但选择住宿时注意是否提供免费停车位，暑期湖边停车场可能紧张。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开黑维兹很久以后，那份独特的温暖感依然留在皮肤的记忆里。它不像参观一座教堂或城堡那样，带来的是知识与眼界的冲击；它给予的，是一种缓慢的、身体层面的修复与精神上的松弛。在这个追求效率、感官被过度刺激的时代，黑维兹提供了一种古老的解药：什么都不用做，只是把自己交给一片有生命力的、温暖的水域，允许时间像蒸汽一样自然升腾、消散。你会发现，当身体漂浮起来，思绪也会变得轻盈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不仅仅是一个景点，更是一个关于“疗愈”的活态博物馆。你看到的不只是风景，而是一种延续了千百年的、人类与自然恩赐和谐共处的生活方式。那些每日前来“取水”的老人，他们的从容本身就是一种智慧。每一位热爱深度游的旅人，都应该来这里，不只是为了打卡“欧洲最大”，更是为了体验这份稀缺的、专注于自身感受的宁静。在氤氲的温泉湖中，你会明白，有时候最深刻的旅行，不是走了多远，而是沉得有多深，与自己、与这片古老而温柔的大地，进行一场无声而温暖的对话。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gyor-baroque-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰尔巴洛克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Baroque Old Town of Győr</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vac-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦茨大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vác Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kalocsa-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考洛乔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalocsa Old Town</p>
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
