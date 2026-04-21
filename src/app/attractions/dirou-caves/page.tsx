import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪洛斯溶洞 Dirou Caves｜马尼半岛的地下迷宫，乘船穿越万年钟乳石的神秘水路 - 最佳欧洲景点',
  description: '朋友，想象一下，你站在希腊南部马尼半岛一片看似荒芜的石灰岩海岸边，烈日当空，橄榄树在热风中沙沙作响。眼前只有一个毫不起眼的小小洞口，像大地微微张开的一道裂缝，里面涌出带着凉意的、幽蓝色的水。这就是迪洛斯溶洞的入口，平淡得几乎让人怀疑它的盛名。但当你弯腰坐上那条细长的、色彩鲜艳的小木艇，船夫用长篙轻轻',
}

export default function DirouCavesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '迪洛斯溶洞', href: '/attractions/dirou-caves' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪洛斯溶洞・Dirou Caves・希腊・伯罗奔尼撒半岛，阿雷奥波利（Areopoli）附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你站在希腊南部马尼半岛一片看似荒芜的石灰岩海岸边，烈日当空，橄榄树在热风中沙沙作响。眼前只有一个毫不起眼的小小洞口，像大地微微张开的一道裂缝，里面涌出带着凉意的、幽蓝色的水。这就是迪洛斯溶洞的入口，平淡得几乎让人怀疑它的盛名。但当你弯腰坐上那条细长的、色彩鲜艳的小木艇，船夫用长篙轻轻一点，将你送入那片黑暗时，整个世界瞬间被调换了。
光线急剧收缩，只剩下船头一盏微弱的小灯。首先包裹你的是气味，一种浓郁的、潮湿的、带着矿物质与古老泥土气息的凉意，瞬间洗去了外面世界的燥热。紧接着是声音，世界变得无比静谧，只剩下船篙划破水面的潺潺声，以及从看不见的穹顶某处传来的、清晰无比的水滴声——“咚”、“咚”，缓慢而恒定，像是地球的心跳。然后，视觉的奇观才真正展开。当你的眼睛适应了黑暗，在手电光束扫过的瞬间，你会倒吸一口凉气：头顶上，两侧，无数钟乳石如冻结的瀑布、倒悬的利剑、巨大的管风琴，密密地垂下来，有些低得仿佛伸手就能碰到。它们并非单调的灰白，而是呈现出琥珀色、赭红色甚至淡淡的蓝绿色，那是亿万年来矿物质沉淀的日记。
这不是一个被栏杆围起来的观光点，而是一场真正的探险。你需要不时低下头，甚至躺平在船里，才能从那些千万年形成的石笋下惊险地滑过。船夫兼导游通常是本地人，他们会用带着浓重口音的英语，指着某个形似章鱼或圣母像的岩石，讲述代代相传的民间传说。这一刻，你不再是游客，而是像早期的探险家一样，闯入了一个被时间遗忘的、属于滴水声和石头的王国。它最动人的魅力，恰恰在于这种原始的、近乎神圣的沉浸感——在绝对的寂静与幽暗中，你被迫用最原始的感官去触摸地球的脉搏，感受一种远超人类历史尺度的、缓慢而伟大的生长。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你站在希腊南部马尼半岛一片看似荒芜的石灰岩海岸边，烈日当空，橄榄树在热风中沙沙作响。眼前只有一个毫不起眼的小小洞口，像大地微微张开的一道裂缝，里面涌出带着凉意的、幽蓝色的水。这就是迪洛斯溶洞的入口，平淡得几乎让人怀疑它的盛名。但当你弯腰坐上那条细长的、色彩鲜艳的小木艇，船夫用长篙轻轻一点，将你送入那片黑暗时，整个世界瞬间被调换了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`光线急剧收缩，只剩下船头一盏微弱的小灯。首先包裹你的是气味，一种浓郁的、潮湿的、带着矿物质与古老泥土气息的凉意，瞬间洗去了外面世界的燥热。紧接着是声音，世界变得无比静谧，只剩下船篙划破水面的潺潺声，以及从看不见的穹顶某处传来的、清晰无比的水滴声——“咚”、“咚”，缓慢而恒定，像是地球的心跳。然后，视觉的奇观才真正展开。当你的眼睛适应了黑暗，在手电光束扫过的瞬间，你会倒吸一口凉气：头顶上，两侧，无数钟乳石如冻结的瀑布、倒悬的利剑、巨大的管风琴，密密地垂下来，有些低得仿佛伸手就能碰到。它们并非单调的灰白，而是呈现出琥珀色、赭红色甚至淡淡的蓝绿色，那是亿万年来矿物质沉淀的日记。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这不是一个被栏杆围起来的观光点，而是一场真正的探险。你需要不时低下头，甚至躺平在船里，才能从那些千万年形成的石笋下惊险地滑过。船夫兼导游通常是本地人，他们会用带着浓重口音的英语，指着某个形似章鱼或圣母像的岩石，讲述代代相传的民间传说。这一刻，你不再是游客，而是像早期的探险家一样，闯入了一个被时间遗忘的、属于滴水声和石头的王国。它最动人的魅力，恰恰在于这种原始的、近乎神圣的沉浸感——在绝对的寂静与幽暗中，你被迫用最原始的感官去触摸地球的脉搏，感受一种远超人类历史尺度的、缓慢而伟大的生长。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪洛斯溶洞`} />
                <InfoRow label="英文名称" value={`Dirou Caves`} />
                <InfoRow label="正式名称" value={`Dirou Caves`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`伯罗奔尼撒半岛，阿雷奥波利（Areopoli）附近`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`希腊乃至欧洲最壮观、最易抵达的水路溶洞系统之一，其发现将人类在伯罗奔尼撒半岛的活动历史追溯至新石器时代。`} />
                <InfoRow label="建筑特色" value={`非人造建筑，是大自然以水为刀、以时间为石，历经数十万年雕刻出的地下水晶宫殿与蜿蜒水道。`} />
                <InfoRow label="建筑风格" value={`纯天然喀斯特地貌，拥有极其丰富的钟乳石、石笋、流石坝和地下湖泊形态。`} />
                <InfoRow label="文化价值" value={`不仅是地质奇观，其内部发现的史前动物骨骼与人类活动痕迹，使其成为连接古希腊神话、史前文明与现代探索精神的神秘地标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常为每日上午9:00至下午5:00开放。夏季（6月至9月）开放时间会延长至下午6:30，冬季（11月至3月）可能缩短至下午4:00，且有时会因天气或水位原因临时关闭。具体信息建议出发前查看当地旅游局网站或致电确认，希腊的公共节假日也可能有调整。`} />
              <InfoRow label="门票价格" value={`常规门票约为12欧元，通常包含乘坐小艇探索水路的费用以及导游讲解（希腊语或英语）。学生、65岁以上老人及多子女家庭享有折扣价，约为6欧元。6岁以下儿童可能免费。门票建议在现场购买，旅游旺季时可能需要短暂排队。`} />
              <InfoRow label="地址" value={`Diros Caves, Areopoli 230 62, Greece`} />
              <InfoRow label="交通方式" value={`最近的机场是卡拉马塔国际机场（KLX），距离溶洞约1.5小时车程。从机场可租车自驾（最推荐，方便探索整个马尼半岛），沿E65/E961公路向南驶向阿雷奥波利，沿途有清晰路标。也可从卡拉马塔乘坐KTEL长途巴士前往阿雷奥波利镇，班次约为每天2-3班，车程约2小时，再从镇上打车（约10分钟）或参加当地旅行团前往溶洞。自驾者可将车免费停在景区停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于迪洛斯溶洞的故事，得从神话和现实的交界处开始讲起。在希腊这片土地上，一个如此深邃的地下世界，怎么可能没有神话的注脚呢？当地古老的传说认为，这里正是英雄珀尔修斯杀死蛇发女妖美杜莎后，骑着飞马珀加索斯返回时，马蹄踏裂了大地，从而创造出的入口，通往冥界的水路。这个传说为溶洞蒙上了一层幽邃而英勇的色彩，也让世世代代的当地人对它怀有敬畏，不敢轻易深入，只在洞口取水或进行一些简单的祭祀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的科学发现要晚得多，带着点偶然和惊悚的色彩。时间推到上世纪四十年代末，具体是1949年，两位当地的探险家——羊倌和教师，凭借着油灯和绳索，壮着胆子向黑暗深处摸索。他们划着小船，在狭窄的水道中前行，手电筒的光束划破亘古的黑暗。你猜他们最先发现了什么？不是闪闪发光的石头，而是埋藏在岸边淤泥里的、巨大的动物骨骼。后来经考古学家鉴定，这些是史前时代的鬣狗、豹、鹿，甚至欧洲最后的河马的遗骸。原来，在冰河时期，海平面比现在低得多，这个洞穴的一部分是干燥的，成了这些巨兽的巢穴或坟墓。这个发现像一块拼图，瞬间将这片土地的生命史向前推进了数万年。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`更震撼的还在后面。随着探索的深入，在名为“陆之洞”的干燥洞室里，考古学家们发现了更明确的痕迹：新石器时代人类使用的燧石工具、陶器碎片，以及壁炉的遗迹。这说明，在大约五千到七千年前，人类的祖先也曾把这些干燥温暖的洞室作为临时的庇护所。想象一下那个画面：洞外可能是凛冽的冰期寒风，而洞内，篝火的光芒在奇形怪状的岩壁上跳跃，早期的人类围坐在一起，打磨石器，分享食物，耳边是地底深处永恒的滴水声。迪洛斯溶洞，就这样从一个地质奇观，升格为一部立体的、关于生命演化的史书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的现代命运也与希腊的近代史紧紧缠绕。在二战及随后的希腊内战期间，这些迷宫般的水道和洞室，因其隐蔽和易守难攻，曾一度成为当地人的天然防空洞和抵抗者的藏身之所。石头见证了炮火，静水掩映过仓皇。直到上世纪六十年代，随着希腊旅游业的萌芽和基础设施的改善，当地政府才系统地开发了其中约5公里的水道（实际总长度据说超过33公里），铺设了安全的步行道，配备了专业的船夫和导游，让这片神秘的地下世界得以安全地向世人揭开面纱。如今，当小艇载着游客静静滑行，我们看到的不仅是自然的鬼斧神工，更是层层叠叠的时间本身——从神话的想象，到巨兽的咆哮，到人类的第一缕炊烟，再到近代的纷争与最终的宁静。每一滴落下塑造石笋的水，都承载着一段沉默的故事。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`一趟完美的迪洛斯溶洞之旅，精髓在于“沉浸”与“错峰”。强烈建议你在开园后第一批抵达，比如早上9:15左右。这时团队游客尚未到来，你能享受最宁静的水道，听到最清晰的水滴回声，拍到没有其他船只干扰的照片。整个游览是“水路+陆路”的结合，总耗时约1.5至2小时。首先，你会乘坐小艇进行约30-40分钟的水路探索，这是全程的高潮，请完全放松，用感官去吸收一切。随后，小艇会停靠在“陆之洞”码头，你将上岸进行约20-30分钟的徒步，在干燥的洞室中近距离观赏最精美的钟乳石构造。这样的安排张弛有度，从水上仰望的宏观震撼，到岸边平视的微观精妙，全方位领略溶洞之美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一件薄外套或防水风衣，洞内恒温约17-18度且水汽丰沛，船行时可能有水珠滴落。
鞋子一定要防滑，上下船和徒步区的有些地面潮湿且是金属网格。
洞内严禁触摸任何岩壁，人体的油脂会永久阻碍钟乳石的生长，请一定尊重这份千万年的生长。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在简朴的码头边怀着一颗探险家的心等待，看着色彩明快的小木艇在幽蓝的洞口进出`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`弯腰坐上小艇的瞬间感受那股从洞穴深处涌出的、带着特殊土腥味的凉风包裹全身`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在水路中段完全躺平身子屏住呼吸，看着上方仅寸许之遥的万年钟乳石尖缓缓滑过`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当小艇悄然停靠“陆之洞”码头，踏上木质步道时竟有种重返人间的奇异恍惚感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在徒步区那处名为“水晶森林”的洞厅驻足，让手电光扫过那些如白玉雕琢般的密集石笋群`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`侧耳倾听某个绝对安静的角落，分辨出远处不同音高的滴水声，仿佛一场地下音乐会`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在接近出口的通道回望那片被人工灯光微微照亮的湖面，与方才经历的深邃黑暗形成强烈对比`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`码头出发前回望洞口`}</h4>
                  <p className="text-sm text-gray-700">{`站在码头上，让你的同伴坐在小艇中，以幽暗的洞口和碧蓝的海水为背景，捕捉一张即将进入未知世界的“探险启程”叙事性照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`水路中段的低角度仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`在船行至宽阔水域时，尽量保持手机或相机稳定，调高ISO，尝试仰拍头顶密集的钟乳石群与它们在漆黑水面上的完美倒影，构图极具压迫感与对称美。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“棕榈树”大厅全景`}</h4>
                  <p className="text-sm text-gray-700">{`在徒步区的这个经典洞厅，走到观景平台的最远端，用广角镜头将整个巨大的、形似棕榈树叶的流石坝穹顶纳入画面，展现地下宫殿的恢宏尺度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`水晶森林微距特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用手机或相机的微距模式，近距离拍摄单个洁白如玉的石笋或钟乳石，捕捉其细腻的纹理和如同瓷器般的光泽，展现微观世界的神奇。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`洞内光线极暗且禁止使用闪光灯（会破坏脆弱的洞穴生态系统并产生严重反光），因此一部高感光度（ISO）表现好的相机或手机至关重要，拍摄时尽量寻找有微弱景观灯补光的位置。`}</li>
                <li>• {`长时间曝光拍摄水流或倒影时，需寻找稳固的支撑点（如栏杆），但请注意船只一直在缓慢移动，水上拍摄成功率需要运气和极高的感光度。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在阿雷奥波利镇中心广场旁的家庭式公寓，清晨在阳台上就能听到教堂钟声，下楼就能在爬满九重葛的咖啡馆享用最地道的希腊早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择马尼半岛特有的“马尼塔楼”石头屋民宿，这些由古代防御塔楼改造的住所充满粗犷历史感，夜晚在石头露台上看星空，仿佛被历史环抱。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住吉西翁（Gythio）或斯托帕（Stoupa）海岸边的悬崖精品酒店，在无边泳池里一边游泳一边欣赏爱奥尼亚海的落日，驱车前往溶洞也仅需半小时。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`深度体验`}</h4>
                  <p className="text-sm text-purple-800">{`预订一家由古老修道院建筑部分改建的静谧乡间旅馆，体验极致的宁静，主人可能会和你分享关于溶洞不为人知的古老家族传说。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`马尼半岛的住宿在七月和八月旺季非常紧俏，且多数特色民宿房间数有限，务必提前数月预订才能有心仪选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`强烈建议租车，因为半岛的公交系统班次稀疏，有了车才能自由探索溶洞之外那些如月球表面般的荒凉石滩、隐蔽的海湾和山顶的拜占庭教堂。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`从迪洛斯溶洞出来，重新站在南欧灼热的阳光下，你会有一阵短暂的失语。那种感觉很难形容，就像是从地球的腹腔里旅行归来，耳朵里还回荡着滴水声，皮肤上还附着着那股清冷的湿气。刚才经历的一切——那种在绝对黑暗中，被巨大而沉默的自然造物包围的体验，具有一种奇特的净化力量。它让你瞬间从日常的琐碎和焦虑中抽离出来，被迫去思考一些更宏大、更缓慢的东西：时间，以及生命在时间中的痕迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求即时满足、一切都在加速的时代，迪洛斯溶洞是一个强有力的反讽，也是一剂解药。它提醒我们，真正震撼人心的美，是需要以“万年”为单位来孕育的。那一根你可能差点碰到的石笋，可能从古希腊柏拉图在雅典学院辩论时就开始生长，至今仍未停止。这里没有Wi-Fi，信号全无，但反而让你连接上了另一种更本质的网络——与地球历史、与自然韵律的连接。它不仅仅是一个景点，更是一个冥想空间，一个能让你真切感受到自身渺小，从而获得内心宁静的圣地。每一位热爱深度游的旅人，都该来此经历一次这趟“地心游记”，因为它带给你的，远不止视觉的惊艳，更是一次对时间感知的深刻重置。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sanctuary-of-apollo-at-delphi" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德尔斐阿波罗神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Delphi</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vatheia-towers" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦西亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vatheia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/epidaurus-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃皮达鲁斯古剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Epidaurus Theatre</p>
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
