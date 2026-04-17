import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迈锡尼考古遗址 Archaeological Site of Mycenae｜探秘《荷马史诗》中的黄金王国，走进希腊英雄时代的巨石迷宫 - 最佳欧洲景点',
  description: '车子拐过最后一道弯，那片闻名已久的废墟就这样毫无预警地撞进视野。第一眼的感觉不是震撼，而是一种干燥的、灼热的苍凉。阳光是希腊式的，毫无保留地倾泻下来，把每一块巨大的、泛着黄褐色的石头晒得发白。空气里弥漫着被炙烤的泥土、干草，还有一丝若有若无的野生百里香的气味。四下安静得惊人，只有风声，一种持续不断的...',
}

export default function MycenaeArchaeologicalSitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '迈锡尼考古遗址', href: '/attractions/mycenae-archaeological-site' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迈锡尼考古遗址・Archaeological Site of Mycenae・希腊・迈锡尼`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐过最后一道弯，那片闻名已久的废墟就这样毫无预警地撞进视野。第一眼的感觉不是震撼，而是一种干燥的、灼热的苍凉。阳光是希腊式的，毫无保留地倾泻下来，把每一块巨大的、泛着黄褐色的石头晒得发白。空气里弥漫着被炙烤的泥土、干草，还有一丝若有若无的野生百里香的气味。四下安静得惊人，只有风声，一种持续不断的、穿过三千年石缝的呜咽声，偶尔夹杂着几声远处橄榄树林里蝉的嘶鸣。
你站在狮子门下，那块重达二十吨的过梁石沉沉地压在头顶，两头对峙的石狮虽然头部已遗失，但那昂然的姿态依旧充满威严的压迫感。门洞深邃，穿过去的那一刻，就像穿过一道时间的阀门。门内，一切都坍圮了，只剩下宫殿的地基、破碎的墙基和纵横的沟壑，勾勒出一个巨大迷宫的轮廓。脚下是坑洼不平的石板路，被无数先民的脚步和岁月的雨水打磨得异常光滑。很难想象，这里曾是《荷马史诗》中那个“多金的”、充满了英雄、阴谋与奢华宴饮的迈锡尼王宫。如今，黄金与荣耀早已湮灭，只剩下石头，沉默而固执地对抗着时间。
但迈锡尼的魔力就在于，在这片极致的荒芜中，你的想象力会变得异常活跃。当你蹲下身，抚摸一块石头上清晰的凿痕；当你站在所谓的“阿伽门农宫殿”的中央，想象着当年这里立柱高耸、壁画绚丽、王者发号施令的场景；当你在博物馆里看到那些雕刻精美的金面具、镶嵌着野猪獠牙的头盔、描绘狩猎与战争的壁画碎片时，神话突然有了质感，史诗变成了可触摸的废墟。这里不是优雅精致的雅典卫城，它更原始，更粗粝，也更悲壮，带着一种文明初曙时的野性与力量。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子拐过最后一道弯，那片闻名已久的废墟就这样毫无预警地撞进视野。第一眼的感觉不是震撼，而是一种干燥的、灼热的苍凉。阳光是希腊式的，毫无保留地倾泻下来，把每一块巨大的、泛着黄褐色的石头晒得发白。空气里弥漫着被炙烤的泥土、干草，还有一丝若有若无的野生百里香的气味。四下安静得惊人，只有风声，一种持续不断的、穿过三千年石缝的呜咽声，偶尔夹杂着几声远处橄榄树林里蝉的嘶鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你站在狮子门下，那块重达二十吨的过梁石沉沉地压在头顶，两头对峙的石狮虽然头部已遗失，但那昂然的姿态依旧充满威严的压迫感。门洞深邃，穿过去的那一刻，就像穿过一道时间的阀门。门内，一切都坍圮了，只剩下宫殿的地基、破碎的墙基和纵横的沟壑，勾勒出一个巨大迷宫的轮廓。脚下是坑洼不平的石板路，被无数先民的脚步和岁月的雨水打磨得异常光滑。很难想象，这里曾是《荷马史诗》中那个“多金的”、充满了英雄、阴谋与奢华宴饮的迈锡尼王宫。如今，黄金与荣耀早已湮灭，只剩下石头，沉默而固执地对抗着时间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但迈锡尼的魔力就在于，在这片极致的荒芜中，你的想象力会变得异常活跃。当你蹲下身，抚摸一块石头上清晰的凿痕；当你站在所谓的“阿伽门农宫殿”的中央，想象着当年这里立柱高耸、壁画绚丽、王者发号施令的场景；当你在博物馆里看到那些雕刻精美的金面具、镶嵌着野猪獠牙的头盔、描绘狩猎与战争的壁画碎片时，神话突然有了质感，史诗变成了可触摸的废墟。这里不是优雅精致的雅典卫城，它更原始，更粗粝，也更悲壮，带着一种文明初曙时的野性与力量。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迈锡尼考古遗址`} />
                <InfoRow label="英文名称" value={`Archaeological Site of Mycenae`} />
                <InfoRow label="正式名称" value={`Archaeological Site of Mycenae`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`迈锡尼`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是希腊神话中阿伽门农王的都城，也是迈锡尼文明（约公元前1600-1100年）最重要的政治与权力中心，其发现证实了《荷马史诗》中“多金的迈锡尼”并非完全虚构。`} />
                <InfoRow label="建筑特色" value={`以庞大、粗糙的“独眼巨人式”巨石城墙、宏伟的狮子门和神秘的蜂巢状圆顶墓为标志。`} />
                <InfoRow label="建筑风格" value={`史前希腊的迈锡尼文明建筑风格，以巨石工事、迈加隆式宫殿大厅和圆顶墓为典型。`} />
                <InfoRow label="文化价值" value={`作为欧洲大陆第一个高级文明的杰出代表，连接了神话与历史，是理解古希腊文化起源和史诗传统的物理钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月1日至10月31日）：每日上午8:00至晚上20:00。
冬季（11月1日至3月31日）：每日上午8:00至下午15:00。
请注意：每逢周二，遗址会提前在下午15:00关闭（无论季节）。元旦、3月25日、复活节周日、5月1日、12月25日和26日全天关闭。圣诞节前夜和元旦前夜会提前至中午12:00关闭。希腊的公共假期安排时常变动，出发前最好在希腊文化部官网再次确认。`} />
              <InfoRow label="门票价格" value={`夏季票价（4月至10月）：全票12欧元，半票6欧元。
冬季票价（11月至3月）：全票6欧元，半票3欧元。
半票适用于欧盟国家及非欧盟国家65岁以上的公民、欧盟以外的学生（需持有效国际学生证）。免费政策适用于：18岁以下的青少年（需出示护照）、所有国家的学生（仅限于考古学、历史、艺术等特定专业，需持有效学生证及证明信）、11月1日至3月31日期间的每月第一个周日、以及某些国家纪念日（如3月6日、4月18日、5月18日、9月最后一个周末等）。门票为联票，包含遗址区和迈锡尼考古博物馆。`} />
              <InfoRow label="地址" value={`Mykines， Argolis， 212 00， Greece`} />
              <InfoRow label="交通方式" value={`迈锡尼位于伯罗奔尼撒半岛，最便捷的出发地是雅典或纳夫普利翁。从雅典出发：在雅典基菲索斯长途汽车站乘坐前往纳夫普利翁方向的大巴，告诉司机在“迈锡尼/费希提奥”路口下车，车程约2小时，班次频繁（约每小时一班）。下车后你身处一条主干道旁，距离遗址入口还有约2公里的上坡路，可以选择步行（约25-30分钟，沿途有橄榄园景致）或搭乘偶尔经过的当地出租车（最好提前预约返程）。从纳夫普利翁出发：在纳夫普利翁汽车站乘坐前往迈锡尼的直达班车，车程约30分钟，但班次较少（通常每天2-3班），务必提前查好时刻表。自驾是最灵活的方式，从雅典经E94和E65高速公路前往，约1.5小时车程，遗址外有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`迈锡尼的故事，开始于神话与历史的模糊交界处。根据传说，这里由英雄珀尔修斯建立，但真正让它名垂青史的，是那位在特洛伊战争中担任希腊联军统帅的阿伽门农王。在《荷马史诗》的吟唱中，迈锡尼是一个黄金遍地、武力强盛的强大城邦。然而，在漫长的中世纪直至近代，迈锡尼被认为只是诗人虚构的产物，直到一个相信荷马的男人出现。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十九世纪七十年代，德国商人兼考古爱好者海因里希·施里曼，怀揣着一本《伊利亚特》，近乎偏执地来到了这里。他相信荷马描述的是真实的历史。在狮子门内的一圈竖石（后来被证明是墓地）区域，施里曼进行了激动人心的发掘。1876年，他声称发现了“阿伽门农的黄金面具”——一具覆盖在男性面部、工艺精湛的金箔面具。当他通过电报向世界宣布“我凝视着阿伽门农的脸庞”时，整个世界为之轰动。尽管现代考古学证实这个面具的年代比特洛伊战争时期早约三百年，它属于一位更早的迈锡尼王者，但施里曼的发现无疑凿开了神话的硬壳，让一个失落的青铜时代文明重见天日。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个文明，我们现在称之为“迈锡尼文明”。大约从公元前1600年开始，他们从希腊本土崛起，成为东地中海的一股强大力量。迈锡尼卫城是其权力的核心。那些令人瞠目的“独眼巨人式”城墙，由未经雕琢的巨石一块块垒砌而成，每块重达数吨，古人认为只有神话中的独眼巨人才能完成如此工程。狮子门是这座坚固堡垒的主要入口，其上的双狮浮雕是欧洲最古老的纪念性雕塑之一，象征着王权的神圣与不可侵犯。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城墙，山顶是宫殿的核心区，围绕着一个巨大的中央大厅——“迈加隆”。这里是国王举行仪式、接见使节和宴会的地方，中央曾有一个永恒的圣火坛。考古学家从残存的壁画和出土器物推断，这里的社会等级森严，有着复杂的官僚体系（著名的线形文字B泥板就是账本），热衷于战争、狩猎和奢华的展示。而那些散落在遗址周围的“圆顶墓”（又称“蜂巢墓”），如宏伟的“阿特柔斯宝库”，其内部空间高达13米，由叠涩拱精巧地垒成，展示了迈锡尼人惊人的工程技艺，也是他们对于来世和王者尊荣的极端重视。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，大约在公元前1200年左右，这个辉煌的文明如同它突然兴起一样，骤然崩塌。宫殿被焚毁，城市被遗弃。原因至今成谜，可能来自内部的动荡、外部的“海上民族”入侵、气候变迁导致的经济系统崩溃，或是多种因素的综合。随着迈锡尼的衰落，文字失传，大型建筑技艺湮灭，希腊进入了近四百年的“黑暗时代”。荷马史诗，正是这个黑暗时代末期，人们对往昔英雄黄金时代的口头追忆与浪漫化重构。因此，行走在迈锡尼，你不仅是在参观一片废墟，更是在直面欧洲文明童年期的终结与一次伟大的文化断层，而希腊古典时代的曙光，将在这片断层的余烬中缓缓诞生。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整个上午（约4小时）进行深度探索。最好在早上8点开门时就抵达，这时阳光尚算温和，旅游团大军还未到来，你能独享狮子门的肃穆和废墟的宁静。整体的节奏应是“先宏观，再微观，最后升华”：先从高处俯瞰感受整体气势，再深入遗址细节触摸历史，最后在阴凉的博物馆里用出土珍宝串联所有见闻。游览顺序推荐：从入口直接前往狮子门→进入卫城遗址攀爬至最高点→下山探访城墙外的著名圆顶墓→最后参观迈锡尼考古博物馆。记得带足水、帽子和舒适的徒步鞋，整个遗址区域几乎没有遮阴处，道路多石崎岖。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双鞋底厚实、防滑的徒步鞋，遗址内全是凹凸不平的古老石板和碎石路，普通凉鞋或平底鞋会非常痛苦。夏季上午10点后阳光会变得极其暴烈，务必携带至少1升水、防晒霜、帽子和太阳镜，遗址内几乎没有可购水的地方。小心脚下的坑洞和未设护栏的陡峭边缘，特别是探访地下蓄水池时，需要格外注意安全。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨穿过那威严而斑驳的狮子门，感受巨石过梁下穿越三千年的第一缕凉风。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着右侧石阶向上攀登，来到卫城的至高点，俯瞰整个阿尔戈斯平原和远方湛蓝的爱琴海萨罗尼克湾。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在宫殿区的废墟间仔细辨认“迈加隆”大厅的圆形地基和柱基，想象当年中央圣火熊熊燃烧、壁画鲜活的盛景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`俯身探访传说中的“阿伽门农之墓”（实际是施里曼发现的竖井墓圈A），在深坑边感受当年黄金面具出土的戏剧性瞬间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出主城门，沿着小路步行约十分钟，进入那座被称为“阿特柔斯宝库”的巨大圆顶墓内部，在绝对的寂静中仰望那令人眩晕的叠涩拱顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返后，不要错过卫城西北角隐蔽的“秘密蓄水池”，沿着陡峭的台阶深入地下，体验迈锡尼人为应对围城而设计的惊人工程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，将整个上午的震撼与疑问，带进凉爽的迈锡尼考古博物馆，让那些金面具、壁画残片和线形文字B泥板，为你讲述石头上未能说完的故事。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`狮子门正面仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`在上午9点前，阳光从侧面照亮门楣上的双狮浮雕，此时站在门前广场略微仰拍，能捕捉到石门厚重沧桑的质感和浮雕的细节，构图时将巨大的石块收入画面，凸显人类的渺小。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从卫城最高点向南拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头，将前景的宫殿废墟地基、中景连绵的橄榄园和葡萄园、以及远方朦胧的阿尔戈斯平原与海湾一同纳入镜头，这张照片最能体现迈锡尼“王者俯瞰其疆域”的地理气势。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`阿特柔斯宝库墓室内景`}</h4>
                  <p className="text-sm text-gray-700">{`进入圆顶墓内部后，将相机放在地面向上仰拍，可以拍出穹顶完美的圆形结构和巨石层层内缩的震撼肌理，建议调高ISO或使用三脚架长时间曝光，以捕捉墓室内部的幽暗与神秘感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`博物馆金面具特写`}</h4>
                  <p className="text-sm text-gray-700">{`在博物馆内，隔着玻璃拍摄著名的“阿伽门农金面具”，寻找一个没有反光的角度，对焦于面具的眼睛或胡须的精细纹路，这张特写能瞬间将神话照进现实。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少巨石表面的反光和博物馆玻璃橱窗的反光。遗址区内允许使用三脚架，但在狭小的空间（如圆顶墓内、博物馆）需注意不要妨碍其他游客。出于文物保护考虑，博物馆内部分区域可能禁止使用闪光灯，请留意标识。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻在仅15分钟车程外的美丽海滨小镇纳夫普利翁，这里拥有迷人的威尼斯风格老城、海滨堡垒和众多优质餐厅，让您在探索完古老的蛮荒后，立刻回归优雅舒适的现代希腊生活。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`选择迈锡尼村或周边村庄的家庭式传统石屋民宿，早晨在公鸡啼鸣和教堂钟声中醒来，推开窗就能看见远方的卫城山丘，傍晚在露台上伴着夕阳和橄榄树影享用房东准备的乡村晚餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住阿尔戈斯平原或附近尼米亚葡萄酒产区的精品设计酒店或乡间别墅，这些酒店通常拥有无边际泳池、奢华的水疗中心和私人葡萄园景观，为您提供一段结合了考古探索与极致放松的旅程。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`纳夫普利翁的住宿选择最丰富，但旅游旺季（7-8月）需提前数月预订。如果选择住在迈锡尼村，夜晚极其宁静，餐饮选择有限，但能获得独一无二的沉浸感。伯罗奔尼撒半岛的公共交通不如雅典便利，如果计划探索更多周边遗址（如埃皮达鲁斯剧场、蒂林斯），租车是最佳选择。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开迈锡尼时，你的鞋底会沾满黄色的尘土，皮肤被太阳灼得发烫，但心里却装满了一种沉甸甸的、关于时间的感悟。这里没有帕特农神庙那种和谐完美的美感，它的美是断裂的、沉重的、充满疑问的。它不讨好你，只是沉默地矗立在那里，迫使你去思考文明的脆弱与坚韧，神话与历史的纠缠，辉煌与湮灭的一线之隔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速消费和光滑体验的时代，迈锡尼提供了一种截然相反的旅行价值。它要求你付出体力，忍受炎热，调动所有的知识储备和想象力，去主动拼接一幅破碎的巨画。但当你完成这场与时间的对话，你会感到一种深层的满足。因为你拜访的不是一个被精心包装的景点，而是一个文明真正的摇篮与坟墓。你会明白，欧洲的故事并非始于大理石柱廊，而是始于这些粗糙的巨石；英雄的传说背后，是真实存在过的权力、野心、艺术与突如其来的终结。对于一个渴望深度的旅人来说，这里不是“打卡地”，而是一堂无可替代的、关于我们共同文明源头的沉浸式历史课。站在那片荒凉的山丘上，你触碰到的，是欧洲童年最真实的体温与心跳。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/monemvasia-fortress-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫奈姆瓦夏隐秘之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monemvasia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dimitsana-gunpowder-mills" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪米察纳（伯罗奔尼撒的火药加工中心遗址）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dimitsana</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/papigo-villages-zagori" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕皮戈（扎戈里山区传统石屋村落）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Papigo (Zagori Stone Villages)</p>
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
