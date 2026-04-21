import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '凯费尔马克特祭坛 Kefermarkt Altarpiece｜沉浸于13米哥特木雕巨作的灵魂震颤 - 最佳欧洲景点',
  description: '车子驶进凯费尔马克特时，你可能会怀疑导航错了。这只是一个安详的、被田野和缓坡环绕的典型奥地利小镇，红瓦屋顶，窗台缀满天竺葵，空气里是刚割过的青草和远处农场飘来的淡淡气味。圣沃尔夫冈教堂就静静地立在村镇广场一侧，它的外部是略显朴素的后期哥特式，甚至有些低调，与奥地利那些声名显赫的大教堂相比，像个内向的',
}

export default function KefermarktGothicAltarpiecePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '凯费尔马克特', href: '/destinations/europe' },
            { label: '凯费尔马克特祭坛', href: '/attractions/kefermarkt-gothic-altarpiece' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`凯费尔马克特祭坛・Kefermarkt Altarpiece・奥地利・凯费尔马克特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶进凯费尔马克特时，你可能会怀疑导航错了。这只是一个安详的、被田野和缓坡环绕的典型奥地利小镇，红瓦屋顶，窗台缀满天竺葵，空气里是刚割过的青草和远处农场飘来的淡淡气味。圣沃尔夫冈教堂就静静地立在村镇广场一侧，它的外部是略显朴素的后期哥特式，甚至有些低调，与奥地利那些声名显赫的大教堂相比，像个内向的邻居。你推开那扇厚重的木门，发出一声悠长的“吱呀”——然后，时间仿佛瞬间被抽空了。
所有先入为主的平凡感，在那一秒钟被击得粉碎。你的视线无法抗拒地被教堂尽头的庞然大物所捕获、所吸附。那不是什么单纯的“祭坛”，那是一座用木头垒起的、发着金褐色幽光的山峦，是一座静止却充满内在交响乐的立体宇宙。它几乎触碰到教堂的拱顶，13米的高度带来压倒性的神圣威严。起初是整体的震撼，紧接着，成千上万的细节如同潮水般涌来，淹没了你的感官。你的眼睛忙不过来，从底部圣徒沉静的面容，到中央圣母哀恸的衣褶，再到顶端上帝威严的轮廓。空气里有种独特的味道，是五百年来蜡烛烟熏渗透进木头里的微焦气息，混合着石头地面的清冷，和一丝若有若无的老旧蜂蜡的甜香。
渐渐地，你听到的不再只是自己的呼吸。这座祭坛是有声响的——一种寂静的声响。是鎏金痕迹在幽暗光线下流动的微光之音，是百位圣徒、天使、先知仿佛在窃窃私语的想象之音，是那些镂空雕花如石钟乳般垂下时凝固的旋律。它不是一个被观赏的客体，而是一个强大的能量场，将整个教堂的空间，连同其中的你，都吸纳进它用木头讲述的宏大叙事里。你会注意到，偶尔有本地老人蹒跚走进来，在长椅上静静坐一会儿，画个十字，然后又静静离开。对他们而言，这不仅是艺术瑰宝，更是生活背景里永恒的、慰藉的坐标。这份日常性与崇高性的奇妙并存，正是它最动人的魅力——巅峰的艺术，无需喧哗，就在一个寻常小镇的日常呼吸中，等待着与懂得凝视的眼睛相遇。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶进凯费尔马克特时，你可能会怀疑导航错了。这只是一个安详的、被田野和缓坡环绕的典型奥地利小镇，红瓦屋顶，窗台缀满天竺葵，空气里是刚割过的青草和远处农场飘来的淡淡气味。圣沃尔夫冈教堂就静静地立在村镇广场一侧，它的外部是略显朴素的后期哥特式，甚至有些低调，与奥地利那些声名显赫的大教堂相比，像个内向的邻居。你推开那扇厚重的木门，发出一声悠长的“吱呀”——然后，时间仿佛瞬间被抽空了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所有先入为主的平凡感，在那一秒钟被击得粉碎。你的视线无法抗拒地被教堂尽头的庞然大物所捕获、所吸附。那不是什么单纯的“祭坛”，那是一座用木头垒起的、发着金褐色幽光的山峦，是一座静止却充满内在交响乐的立体宇宙。它几乎触碰到教堂的拱顶，13米的高度带来压倒性的神圣威严。起初是整体的震撼，紧接着，成千上万的细节如同潮水般涌来，淹没了你的感官。你的眼睛忙不过来，从底部圣徒沉静的面容，到中央圣母哀恸的衣褶，再到顶端上帝威严的轮廓。空气里有种独特的味道，是五百年来蜡烛烟熏渗透进木头里的微焦气息，混合着石头地面的清冷，和一丝若有若无的老旧蜂蜡的甜香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "渐渐地，你听到的不再只是自己的呼吸。这座祭坛是有声响的——一种寂静的声响。是鎏金痕迹在幽暗光线下流动的微光之音，是百位圣徒、天使、先知仿佛在窃窃私语的想象之音，是那些镂空雕花如石钟乳般垂下时凝固的旋律。它不是一个被观赏的客体，而是一个强大的能量场，将整个教堂的空间，连同其中的你，都吸纳进它用木头讲述的宏大叙事里。你会注意到，偶尔有本地老人蹒跚走进来，在长椅上静静坐一会儿，画个十字，然后又静静离开。对他们而言，这不仅是艺术瑰宝，更是生活背景里永恒的、慰藉的坐标。这份日常性与崇高性的奇妙并存，正是它最动人的魅力——巅峰的艺术，无需喧哗，就在一个寻常小镇的日常呼吸中，等待着与懂得凝视的眼睛相遇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`凯费尔马克特祭坛`} />
                <InfoRow label="英文名称" value={`Kefermarkt Altarpiece`} />
                <InfoRow label="正式名称" value={`凯费尔马克特祭坛`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`凯费尔马克特`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是阿尔卑斯以北地区现存最宏大、最完整的晚期哥特式木雕祭坛，被誉为“木雕艺术的西斯廷天顶画”。`} />
                <InfoRow label="建筑特色" value={`一座高达13米、宽逾6米的巨型翼展式祭坛，由上百块菩提木精雕而成，人物栩栩如生，结构繁复精密如神圣的机械。`} />
                <InfoRow label="建筑风格" value={`火焰哥特式风格登峰造极的体现，充满动感的线条、镂空的华盖、纤长的人物造型，将木头的可塑性发挥到极致。`} />
                <InfoRow label="文化价值" value={`不仅是一件宗教艺术品，更是15世纪末多瑙河流域市民文化自信、手工业行会巅峰技艺与虔诚信仰融合的无言史诗。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`圣沃尔夫冈教堂全年开放，但为确保能看到祭坛内部，请务必注意时间：每年五月至十月，每日上午9点至下午5点开放参观。十一月至次年四月为冬季期，教堂仅在每周二、周四及周六的上午10点至中午12点开放，且祭坛前方的保护围栏可能更靠近，观赏细节略有影响。请注意避开奥地利法定节假日及当地宗教活动日（如圣沃尔夫冈节），具体日期需查询当地教区通知。建议行前在凯费尔马克特镇官网或上奥地利州旅游页面再次确认。`} />
              <InfoRow label="门票价格" value={`进入圣沃尔夫冈教堂及参观凯费尔马克特祭坛完全免费，这是小镇给予所有访客的一份慷慨礼物。但教堂入口处设有朴素的捐赠箱，强烈建议投入几欧元以支持这一无价文化遗产的维护与保养。教堂偶尔会出版关于祭坛的详细指南册，售价约为5-8欧元，物超所值。`} />
              <InfoRow label="地址" value={`圣沃尔夫冈教堂，沃尔夫冈街1号，凯费尔马克特，A-4292，奥地利
Pfarrkirche St. Wolfgang, Wolfgangstraße 1, 4292 Kefermarkt, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是林茨机场或慕尼黑机场。从林茨中央火车站出发是最佳选择：搭乘区域火车（R或REX线）前往弗赖施塔特站，车程约40分钟，班次每小时1-2班。在弗赖施塔特火车站前广场，换乘邮政巴士（Postbus）512路，方向“凯费尔马克特”，约15分钟即可抵达小镇中心巴士站，下车后步行2分钟即到教堂。巴士班次约每小时一班，周末略减，建议在OBB（奥地利联邦铁路）官网或APP上查询并购买“林茨-弗赖施塔特-凯费尔马克特”的联票。自驾则沿B310公路轻松抵达，教堂旁有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从十五世纪末讲起。那时的凯费尔马克特可不像今天这么宁静，它位于重要的盐铁贸易路线上，繁荣的市民阶层和富裕的行会积累了大量财富。1490年，当地一个名叫“汉斯·冯·普赫海姆”的贵族和镇长，或许是出于对信仰的虔诚，或许是为了彰显城镇的实力，也可能是两者兼有，他做出了一个决定：为我们这座不算起眼的教区教堂，定制一个配得上新时代精神与财富的祭坛。这是一个雄心勃勃的计划，目标直指当时最顶尖的艺术形式——大型翼展式木雕祭坛，这种艺术形式在德国南部和奥地利正绽放着最后、也是最绚烂的火焰哥特式光芒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一位大师被请来了。我们今天只知道他可能是来自帕绍或雷根斯堡地区作坊的翘楚，艺术史家们依据风格，谨慎地称他为“P.L.大师”，这个缩写刻在祭坛的某个隐蔽处。可以想象，他带着学徒和整套精细的工具入驻小镇，也许就住在教堂附近。他们选用了质地细腻柔软、易于雕刻又不易开裂的菩提木。接下来的七年，是刀锋与木头对话的七年。成千上万次的凿刻、打磨、镂空。大师心中没有草图，只有代代相传的技艺和心中炽热的宗教意象。中央的“圣母加冕”与“哀悼基督”，两侧的圣徒行列，顶端先知与天使的奏乐场面……每一寸空间都被赋予了生命。特别的是，人物的脸庞并非千篇一律的神圣模板，他们带着微妙的人间情绪——有的沉思，有的悲悯，有的坚定，这让神圣叙事拥有了触手可及的人性温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的尘埃总会落下。宗教改革的风暴、巴洛克艺术的浪潮席卷而来，哥特式一度被视为“过时”的旧物。这座祭坛奇迹般地躲过了被拆除或改造的命运，或许是因为它实在太庞大、太精美，让人不忍下手。但它也一度被忽视，蒙上灰尘。真正的劫难在十九世纪初来临，拿破仑战争期间，占领这里的法军曾企图将祭坛拆解运走作为战利品，是当地民众的拼死抵抗和巧妙周旋，才保住了它。到了十九世纪中叶，浪漫主义重新发现了中世纪的美，祭坛终于被“重新发现”，并被誉为国宝。二十世纪的两次世界大战，它又经历了精心拆卸、转移到盐矿深处隐藏的惊险旅程，得以在战火中幸存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最近的一次大规模修复跨越了上世纪九十年代到二十一世纪初，历时十余年。修复者们像外科医生一样，用最微创的技术清理数百年的积垢，加固每一处脆弱的结构，让那些被岁月模糊的金色与彩绘重新焕发隐约的光泽。他们甚至发现了最初上色时使用的昂贵青金石和黄金的痕迹。如今，我们站在它面前，看到的不仅是1497年完成时的惊世之作，更是一部跨越五个多世纪的、关于信仰、技艺、守护与幸存的无字史书。每一道木纹里，都藏着一位无名大师的心跳，一个时代的呼吸，和无数普通人守护它的温暖掌心。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完全沉浸于凯费尔马克特祭坛的魅力，请务必安排一个完整的上午（夏季请赶在9点开门时抵达，以享受片刻独处时光）。整体游览建议耗时2.5至3小时，节奏宜缓不宜急。首先用15分钟环绕教堂外部和广场，感受小镇平静的氛围，做好心理铺垫。进入教堂后，不要立刻冲向祭坛，先在门口长椅上静坐5-10分钟，让你的眼睛适应昏暗的光线，也让心神从尘世的喧嚣中沉淀下来。随后，用至少一个半小时，以前、中、后、左、右多个距离和角度，分层级地“阅读”这座祭坛。最后留出时间在侧廊和小礼拜堂静静回味。这样的安排能让你从宏观震撼逐步过渡到微观感动，完成一次深度的精神与艺术洗礼。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对避免在周日早晨或宗教节日的主要弥撒时间前往，此时教堂属于礼拜者，参观会受限且不敬。
教堂内部禁止使用闪光灯和三脚架，手机请务必调至静音，这是对场所神圣性和其他访客最基本的尊重。
穿着需得体，避免过于暴露的沙滩装，夏季也建议带一件薄披肩，教堂内石质空间凉爽且要求庄重。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开教堂门的瞬间先在门槛内驻足一分钟，让眼睛适应昏暗并感受那股混合着古老木头与石头的静谧气息扑面而来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓步走向教堂中殿的最后排长椅安静坐下，从这个最远的距离整体仰视祭坛，体会它作为一座“木造建筑”与教堂空间构成的完整构图与压倒性气场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢踱步到祭坛正前方约十米处，开始逐一辨认中央神龛的三大核心场景：底部的圣母哀悼、中部的圣母加冕以及顶部的圣三位一体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`贴近至保护围栏允许的最近距离，屏息细看圣徒队伍中每个人物的脸庞、手势和衣饰褶皱，寻找那位仿佛在对你微笑的圣徒或那个表情格外忧伤的天使。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕着祭坛基座缓缓行走，从侧面和背面观察其精妙如建筑脚手架般的支撑结构和翼板背面的绘画，理解它作为可开合机械的巧思。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`后退到侧廊，选择一个能看见祭坛被某扇窗户的自然光照亮的角度，观察光线如何赋予木雕生命，让金色痕迹和阴影舞蹈。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到最初的长椅坐下，闭上眼睛，尝试在脑海中重构整个祭坛的每一个细节，将视觉震撼转化为内心的持久记忆。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`中殿最后方全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`利用长椅作为前景框架，在上午10点前或下午4点后，利用从入口门或侧窗射入的斜长光线，拍下祭坛与深邃中殿廊柱构成的纵深感极强的神圣透视。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`祭坛右前侧仰拍特写`}</h4>
                  <p className="text-sm text-gray-700">{`午后时分，阳光有时会从南侧彩窗滤入，站在右侧翼板前方，向上仰拍中央神龛顶部繁复的火焰式华盖与雕像，捕捉光线勾勒出的金色轮廓和深邃阴影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`左侧廊中段平视细节`}</h4>
                  <p className="text-sm text-gray-700">{`这里光线通常较均匀柔和，适合用长焦镜头捕捉某一组圣徒雕像群像，聚焦于他们互有呼应的手势与表情，让画面充满故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`祭坛基座浮雕低角度`}</h4>
                  <p className="text-sm text-gray-700">{`蹲下身子，将镜头贴近保护围栏（但不触碰），利用大光圈虚化前景栏杆，清晰对焦于基座上精美的叙事浮雕，如圣乔治屠龙，获得极具戏剧张力的特写。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`木雕表面非常脆弱，严禁用任何物品（包括手指）触碰祭坛，即使是为了稳定手机或相机。`}</li>
                <li>• {`若使用专业相机，建议使用高感光度能力强的机身和大光圈镜头，因为室内光线极其昏暗，依赖提高ISO而非减慢快门，以免模糊。`}</li>
                <li>• {`当地人对祭坛抱有深厚虔诚，拍照时请保持肃穆姿态，避免为摆拍而做出夸张动作或喧哗，用安静和专注的姿态拍摄是对艺术品和信仰最大的致敬。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在广场旁由百年老屋改造的“金色菩提树”民宿，主人会为你准备丰盛的农家早餐，并从厨房窗口指着不远处的教堂尖顶，讲述他祖父参与战后修复祭坛的故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色庄园体验`}</h4>
                  <p className="text-sm text-green-800">{`驱车五分钟即可抵达周围丘陵间的“罗森贝格农庄”，住在拥有四柱床的木头房间里，夜晚无比静谧，只有星空和草坡上牛铃的叮咚声，白天可向主人学习传统木雕入门。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史酒店沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在林茨古城中心的“施密特酒店”，这是一座修复精美的老建筑，乘火车往返凯费尔马克特非常方便，晚上还能在林茨老城漫步，对比城市巴洛克风格与乡村哥特珍宝的不同韵味。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计型休闲居所`}</h4>
                  <p className="text-sm text-purple-800">{`选择多瑙河畔小城格赖因的现代设计酒店，房间拥有河景阳台，在震撼的祭坛艺术之旅后，回到这里享受多瑙河的舒缓流淌与当代奥地利的舒适设计，让思绪沉淀。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "凯费尔马克特本地住宿非常有限且抢手，尤其是旅游旺季（6-9月），务必提前至少两个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇及周边治安极好，夜晚安静祥和，但所有乡村住宿都可能听到清晨教堂钟声，这对于想睡懒觉的游客是“甜蜜的烦恼”，却也是融入当地节奏的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果选择住在林茨等大城市，请务必查好返程火车与巴士的末班车时间（通常在晚上8-9点左右），避免错过。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开凯费尔马克特很久之后，那座木雕祭坛的影像并没有在记忆中褪色，反而愈发清晰。它带来的震撼，不同于站在罗马圣彼得大教堂之下的那种对人类集体伟力的惊叹，也不同于看到蒙娜丽莎时对神秘微笑的揣测。它是一种更私密、更深入骨髓的触动。你被一件物品的“专注度”所深深击中。想想看，一位大师，带着他的团队，在一个或许并不为世界所知的小镇，将生命中最宝贵的七年光阴，完全倾注于用刻刀与一块块菩提木对话，创造出如此繁复、精密、充满情感与神性的宇宙。这种极致的专注与虔诚，本身就是这个时代最稀缺的奢侈品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个被碎片信息、快速消费和喧嚣噪音填满的世界里，凯费尔马克特祭坛像一座沉静的孤岛。它不追赶任何潮流，不迎合任何目光，只是静静地伫立，等着那些愿意跋涉而来、推开那扇木门的人。它告诉我们，真正的伟大可以藏在最不起眼的角落，极致的美丽需要时间的沉淀和耐心的凝视才能完全显现。它不仅仅是一件“必看”的艺术品，更是一剂给现代灵魂的解毒剂——让我们重新学会“慢下来”，学会在沉默中观看，在细节里发现永恒。每一位热爱深度游的旅人，都应该来此经历一次这种“灵魂的震颤”，这不是为了清单上多一个打卡点，而是为了在我们自己的生命里，也铭刻下一份关于专注、时间与沉默力量的，无声的启示。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hohenwerfen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍亨维尔芬城堡（飞鹰堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hohenwerfen Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gmunden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hallstatt" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尔施塔特镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hallstatt</p>
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
