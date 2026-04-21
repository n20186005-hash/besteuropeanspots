import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '热艾城堡 Château de Jehay｜探秘棋盘纹理水镜奇观与古典雕塑花园 - 最佳欧洲景点',
  description: '说实话，当我第一眼从林荫道的尽头望见热艾城堡时，我愣了好几秒。它不像那些张牙舞爪、强调防御的堡垒，也并非极尽奢华的宫殿。它就那样静静地矗立在一片宽阔如镜的水道中央，倒影完美得让人分不清虚实，像一座从童话里直接搬出来的纸雕模型。但真正抓住我呼吸的，是它外墙的肌理——整座建筑，从塔楼到主体，都被一种深邃',
}

export default function JehayCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '阿迈，热艾村 (Amay, Jehay)', href: '/destinations/europe' },
            { label: '热艾城堡', href: '/attractions/jehay-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`热艾城堡・Château de Jehay・比利时・阿迈，热艾村 (Amay, Jehay)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，当我第一眼从林荫道的尽头望见热艾城堡时，我愣了好几秒。它不像那些张牙舞爪、强调防御的堡垒，也并非极尽奢华的宫殿。它就那样静静地矗立在一片宽阔如镜的水道中央，倒影完美得让人分不清虚实，像一座从童话里直接搬出来的纸雕模型。但真正抓住我呼吸的，是它外墙的肌理——整座建筑，从塔楼到主体，都被一种深邃的灰与纯净的白切割成无比规整的方格，就像一块被巨人精心雕琢过的、硕大无比的棋盘。阳光洒在上面，黑色的燧石泛着冷峻的光泽，白色的石灰岩则温暖柔和，那种强烈的对比与几何韵律，有种近乎催眠的魔力。
走近了，水道的宁静感将你包围。你能听见轻微的潺潺水声，那是连接各片池塘的小小水闸在低语。空气里混合着湿润的青草气息、古老的石头的微凉气味，还有从花园飘来的、若有若无的花香。几只天鹅和绿头鸭悠闲地划破水面的倒影，让静止的画面忽然有了生动的涟漪。绕着水道走，城堡的每一个立面都呈现出不同的“棋盘”构图，随着光影角度的变化，那些方格仿佛在缓缓移动、重组。你会发现，这并非冰冷的建筑炫耀，而是一种深沉而克制的浪漫，一种用石头写就的、极其严谨的诗歌。
在当地人心中，这里远不止是一个景点。周末，你会看到附近的居民带着狗在广阔的草坪上散步，恋人们坐在水边的长椅上静静看书，艺术系的学生对着某个雕塑角落写生。城堡公园是他们巨大的后花园，是生活的一部分。而城堡本身，那种奇特的纹理已经成为一种地域骄傲的象征，深深印在每个人的认知里。它的核心魅力，就在于这种奇妙的矛盾统一：外观是极致的理性和几何学，而它所处的环境与营造的氛围，却充满了感性的、田园诗般的柔情与宁静。它不试图讲述宏大的历史叙事，只是邀请你沉浸在这份独一无二的、由水、光、石与艺术交织而成的静谧之中。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，当我第一眼从林荫道的尽头望见热艾城堡时，我愣了好几秒。它不像那些张牙舞爪、强调防御的堡垒，也并非极尽奢华的宫殿。它就那样静静地矗立在一片宽阔如镜的水道中央，倒影完美得让人分不清虚实，像一座从童话里直接搬出来的纸雕模型。但真正抓住我呼吸的，是它外墙的肌理——整座建筑，从塔楼到主体，都被一种深邃的灰与纯净的白切割成无比规整的方格，就像一块被巨人精心雕琢过的、硕大无比的棋盘。阳光洒在上面，黑色的燧石泛着冷峻的光泽，白色的石灰岩则温暖柔和，那种强烈的对比与几何韵律，有种近乎催眠的魔力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了，水道的宁静感将你包围。你能听见轻微的潺潺水声，那是连接各片池塘的小小水闸在低语。空气里混合着湿润的青草气息、古老的石头的微凉气味，还有从花园飘来的、若有若无的花香。几只天鹅和绿头鸭悠闲地划破水面的倒影，让静止的画面忽然有了生动的涟漪。绕着水道走，城堡的每一个立面都呈现出不同的“棋盘”构图，随着光影角度的变化，那些方格仿佛在缓缓移动、重组。你会发现，这并非冰冷的建筑炫耀，而是一种深沉而克制的浪漫，一种用石头写就的、极其严谨的诗歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当地人心中，这里远不止是一个景点。周末，你会看到附近的居民带着狗在广阔的草坪上散步，恋人们坐在水边的长椅上静静看书，艺术系的学生对着某个雕塑角落写生。城堡公园是他们巨大的后花园，是生活的一部分。而城堡本身，那种奇特的纹理已经成为一种地域骄傲的象征，深深印在每个人的认知里。它的核心魅力，就在于这种奇妙的矛盾统一：外观是极致的理性和几何学，而它所处的环境与营造的氛围，却充满了感性的、田园诗般的柔情与宁静。它不试图讲述宏大的历史叙事，只是邀请你沉浸在这份独一无二的、由水、光、石与艺术交织而成的静谧之中。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`热艾城堡`} />
                <InfoRow label="英文名称" value={`Château de Jehay`} />
                <InfoRow label="正式名称" value={`Château de Jehay`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`阿迈，热艾村 (Amay, Jehay)`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了瓦隆尼亚地区数个贵族家族兴衰更替的文艺复兴式水上珍宝，以其无与伦比的建筑外观成为比利时城堡中独一无二的存在。`} />
                <InfoRow label="建筑特色" value={`其最震撼人心的特征在于建筑外墙全部由深灰色燧石与白色石灰岩以极其精准的工艺砌成规则的“棋盘式”方格纹理，整体宛若一件巨大的立体编织艺术品。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为基调，融合了部分晚期哥特式与莫桑地区本土建筑元素，形成了一种优雅而独特的区域风格。`} />
                <InfoRow label="文化价值" value={`不仅是一座建筑纪念碑，更是一个活着的艺术容器，内部收藏了大量古典雕塑、古董家具与绘画，其花园本身就是一座露天雕塑博物馆，延续着贵族宅邸的生活与艺术收藏传统。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体建筑（内部博物馆）通常在4月至10月的周末及法定节假日对公众开放，具体时间为下午1:30至6:00（最后入场时间为5:00）。占地面积广阔的公园与花园则全年每日免费向公众开放，从日出至日落。请注意，城堡内部因经常用于私人活动或学术研究而临时关闭，出行前务必在其官网或当地旅游局核实最新开放日期。`} />
              <InfoRow label="门票价格" value={`进入城堡公园及花园免费。城堡内部（博物馆）参观门票：成人票8欧元，65岁以上长者、学生及团体（15人以上）票价为6欧元，6至18岁青少年4欧元，6岁以下儿童免费。每月第一个周日可享受半价优惠。门票包含语音导览器（提供多种语言）的使用权。`} />
              <InfoRow label="地址" value={`Rue du Parc 1, 4540 Amay (Jehay), Belgium`} />
              <InfoRow label="交通方式" value={`从最近的列日-居尔莱讷机场出发，驾车约30分钟即可抵达。最推荐的公共交通路线是从列日市中心开始：在列日吉耶曼火车站乘坐开往“Amay”方向的火车，约20分钟车程到达Amay站。出站后，在车站广场换乘前往“Jehay”方向的当地巴士（班次有限，约每小时一班，周日更少），约10分钟在“Jehay Château”站下车，步行2分钟即到城堡入口。强烈建议在列日火车站的信息中心索取详细的巴士时刻表，或直接使用比利时国家铁路APP规划行程。如果自驾，城堡外设有免费停车场，跟着棕色旅游指示牌“Château de Jehay”行驶即可。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "热艾城堡的故事，始于中世纪一片沼泽地上的简陋堡垒。大约在13世纪，这片土地属于一个名叫“德·热艾”的家族，城堡的名字便由此而来。但当时的样子与今日相去甚远，更多的是为了守卫和实用。真正改变它命运的，是16世纪下半叶。那时候，城堡落入了范·登·斯坦恩家族手中，这是一个在列日公国颇有影响力的贵族世家。我们今天看到的这座如梦似幻的建筑，正是在这个家族的鼎盛时期，由一位名叫阿诺德·德·范·登·斯坦恩的成员主持改建的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想象一下16世纪的欧洲，文艺复兴的风潮正从意大利吹向北方。阿诺德很可能是一位见过世面、富有艺术品味且财力雄厚的人物。他决定抛弃旧堡垒阴郁的军事外观，要建造一座配得上家族荣耀、同时能享受舒适生活的“快乐宫殿”。于是，他请来了当时最顶尖的石匠和建筑师。关键的灵感诞生了：他们决定大量使用本地出产的两种石材——颜色深邃坚硬的燧石，和洁白温润的石灰岩。工匠们以令人叹为观止的精度，将这两种石材切割成完全统一的尺寸，然后像编织最精美的挂毯一样，将它们交错砌筑。每一块石头都必须严丝合缝，这个工程所耗费的心血和成本难以估量。最终，这座“棋盘城堡”拔地而起，它那革命性的外观立刻成为了地区传奇，象征着主人的财富、权势与超凡脱俗的审美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，贵族的命运如同潮汐。范·登·斯坦恩家族后来家道中落，城堡在17、18世纪几经易手，经历过西班牙继承战争的动荡，也见证过法国大革命浪潮的冲击。它一度被遗弃，变得破败不堪。转机出现在19世纪。一位名叫纪尧姆·德·訥訥的伯爵买下了城堡，他是一位狂热的艺术收藏家和古董爱好者。他不仅精心修复了这座濒临倒塌的建筑瑰宝，更用毕生心血收集了大量的古典雕塑、文艺复兴时期的家具、挂毯和绘画。他将城堡内部变成了一个琳琅满目的私人博物馆，每个房间都讲述着不同的艺术故事。更重要的是，他重新设计了城堡周围的花园，移入了许多他收藏的古代石棺、罗马柱头和各类雕塑，让户外空间也成为艺术的延伸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "20世纪，城堡经历了二战的风雨，所幸未遭严重破坏。它最后的私人主人，訥訥家族的后代，决定将这份珍贵的遗产交给国家。1978年，列日省正式接管了热艾城堡及其所有藏品。公共机构接手后，进行了更为科学和专业的修复与维护，并谨慎地向公众开放。今天，我们不仅能惊叹于它外部那穿越了四个多世纪的棋盘纹理，还能走进其内部，感受19世纪那位收藏家伯爵留下的浓郁艺术气息。从防御堡垒，到文艺复兴的明珠，再到私人艺术圣殿，最终成为公共的文化遗产——热艾城堡的每一块黑白相间的石头，都层层叠叠地镌刻着这些变迁的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在下午早些时候（大约1点）抵达，这样你可以有充足的时间先享受室外部分的最佳光线，再进入城堡内部细细品味。整体游览时间建议预留至少3到4小时。节奏应该是从外到内，由动到静。首先，花一个小时以上慢悠悠地环游水道和花园，让感官充分适应这里宁静奇幻的氛围，并捕捉光影在棋盘立面上的变化。然后，在城堡内部开放时间开始后进入参观，沉浸于艺术收藏中约一个半小时。最后，在闭园前再次回到花园，享受黄昏时分柔和光线下的城堡全景。这样的安排能让你体验城堡从午后明朗到傍晚温柔的不同面孔，完成一次完整的感官旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部空间不大且藏品珍贵，游客承载量有限，若在旺季周末前往，做好可能需要短暂排队等候入场的心理准备。
夏季花园和水边蚊虫较多，建议穿着长袖衣物或提前喷涂防蚊液，以便能安心享受户外时光。
请务必保持安静，尤其是在室内，这里更像是贵族宅邸而非喧闹景点，尊重这份宁静是体验其魅力的关键。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场穿过一片高大的树林，让城堡在水道尽头的惊艳全景作为你旅程的盛大开幕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要顺时针沿着平静如镜的水道慢行一圈，从每一个角度观察城堡黑白方格与水中倒影构成的不同几何画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`靠近主入口的桥边，驻足仔细凝视那些燧石与石灰岩的接缝，触摸历经风雨后依然清晰的纹理，感受16世纪工匠的鬼斧神工。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡内部后，不要急着走，在入口大厅抬头看看装饰着华丽浮雕的木质天花板，那是穿越时光的第一个信号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着摆满古董的展厅逐一参观，特别留意那些来自意大利和佛兰德斯的古典雕塑，它们与建筑本身形成了跨越时空的对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出城堡后门，踏入被高大树篱分割的古典法式花园，在绿意和鲜花中发现那些被精心布置的古代石雕与雕塑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，走到城堡后方更广阔英式园林的大池塘边，找一张长椅坐下，看夕阳将城堡的棋盘格子染成温暖的金色与玫瑰色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`水道东南角全景位`}</h4>
                  <p className="text-sm text-gray-700">{`下午三至五点的侧光最为理想，将城堡与其完整倒影一同纳入画面，使用广角镜头并尽量降低机位贴近水面，能拍出极具对称感和纵深感的震撼大片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主立面棋盘纹理特写`}</h4>
                  <p className="text-sm text-gray-700">{`选择阳光能同时照亮黑白两色石材的角度（通常上午东立面，下午西立面），使用中长焦镜头压缩空间，聚焦于局部纹理，突出石材的质感与色彩的戏剧性对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡内部旋转楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`利用室内柔和的自然光，从楼梯底部向上仰拍，捕捉螺旋线条与从高处小窗射入的光束，营造出神秘而富有几何美感的空间氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`花园雕塑框景`}</h4>
                  <p className="text-sm text-gray-700">{`在法式花园中，寻找那些用树篱或拱门自然形成的“画框”，将远处的城堡塔楼或某尊优雅雕塑置于框中，创造出层次分明的古典构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`池塘边黄昏剪影`}</h4>
                  <p className="text-sm text-gray-700">{`在日落前后半小时，太阳位于城堡侧后方时，以池塘为前景，拍摄城堡和树木的深色剪影 against 绚烂的晚霞天空，水面会反射出丰富的色彩。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部严格禁止使用闪光灯和三脚架（除非获得特殊许可），这是为了保护脆弱的古董和绘画，请务必遵守。`}</li>
                <li>• {`使用偏振镜（CPL）可以极大地消除水面的反光，让你在拍摄倒影时获得更清晰、色彩更饱和的效果。`}</li>
                <li>• {`无人机飞行在城堡上空需要特殊申请，且可能打扰到野生动物与其他游客的宁静，不建议在此地使用。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`极致体验`}</h4>
                  <p className="text-sm text-blue-800">{`城堡本身提供极少数量的历史客房预订，让你在游客散尽后独享整片庄园的星空与寂静，清晨在鸟鸣中醒来，仿佛成为城堡的临时主人。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色民宿`}</h4>
                  <p className="text-sm text-green-800">{`热艾村内由古老石屋改造的家庭式民宿，主人会为你准备地道的瓦隆尼亚早餐，并提供只有当地人才知道的散步小径地图。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷城市之选`}</h4>
                  <p className="text-sm text-yellow-800">{`住在列日市中心，选择一家沿马斯河而建的设计酒店，白天来城堡探秘，晚上则能享受列日热闹的夜生活与著名的列日华夫饼。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静乡间度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`在城堡周边几分钟车程的田野间，租下一栋带花园的乡间农舍，自己烹饪当地食材，享受完全融入比利时乡村节奏的慢生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果选择住在热艾村或周边乡村，请务必提前储备一些食物和饮料，因为晚间餐饮选择非常有限，小村庄的商店关门也很早。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一带治安极好，民风淳朴，但夜间照明不多，如果晚间在乡间小路上散步，建议携带手电筒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "预订城堡客房需要极大的提前量和运气，通常需要直接联系列日省遗产管理部门，且开放日期非常不固定。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开热艾城堡很久之后，我脑海里反复回放的，不是某一张具体的照片，而是那种整体的、宁静到能听见自己心跳的氛围。在这个追求感官刺激和打卡效率的时代，它提供了一种截然相反的旅行价值：它不是让你去“征服”或“收集”一个地标，而是邀请你“进入”一种状态。那种状态，是水流缓慢的节奏，是光线在棋盘格子上移动的轨迹，是艺术被生活化地安放在每个角落的随意与郑重。它让你慢下来，仔细看，用心听。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我想，这就是深度旅行最珍贵的部分吧。热艾城堡或许没有卢浮宫那样的全球知名度，也没有新天鹅堡那样的戏剧性传说。但它拥有一种完整的、自洽的世界观。它告诉我们，美可以不必是张扬的，也可以是内敛的、严谨的，甚至是带有数学般精确的；历史不必总是血与火的篇章，也可以是一个家族对美的执着，一个收藏家对时光的温柔挽留。每一位热爱深度游的旅人都应该来这里，不仅仅是为了一睹那举世无双的棋盘外墙，更是为了体验一种在高度秩序中寻得的内心宁静，为了证明在这个世界上，还有一些角落，顽固而优美地按照自己的节奏呼吸着，等待着懂得欣赏这种节奏的人前来，与之共度一个悠长的下午。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/malmedy-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔梅迪修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Malmedy Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sint-truiden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣特雷登</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sint-Truiden</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aalst-carnival-historic-city-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔斯特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aalst</p>
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
