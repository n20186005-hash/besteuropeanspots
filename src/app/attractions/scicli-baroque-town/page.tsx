import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希克利巴洛克古城 Scicli｜被时光遗忘的西西里蜂蜜色宝石，漫步在活着的露天博物馆 - 最佳欧洲景点',
  description: '说实话，当我第一眼看到希克利时，我并没有立刻意识到自己正站在一座世界遗产里。它不像那些被栅栏围起来的博物馆小镇，它太……生活化了。阳光把那些蜂蜜色的石灰岩建筑晒得暖烘烘的，空气里混杂着街角咖啡馆飘出的浓缩咖啡香、某户人家窗口溢出的炖菜香气，还有淡淡的、来自附近花园的橙花香。我到的正是午后最慵懒的“p...',
}

export default function ScicliBaroqueTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '希克利', href: '/destinations/italy' },
            { label: '希克利巴洛克古城', href: '/attractions/scicli-baroque-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`希克利巴洛克古城・Scicli・意大利・希克利`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，当我第一眼看到希克利时，我并没有立刻意识到自己正站在一座世界遗产里。它不像那些被栅栏围起来的博物馆小镇，它太……生活化了。阳光把那些蜂蜜色的石灰岩建筑晒得暖烘烘的，空气里混杂着街角咖啡馆飘出的浓缩咖啡香、某户人家窗口溢出的炖菜香气，还有淡淡的、来自附近花园的橙花香。我到的正是午后最慵懒的“pausa”时分，街道安静得能听见自己的脚步声在光滑的石板路上回响，偶尔有骑着生锈自行车的老爷爷慢悠悠地晃过，只留下一个长长的影子。
我顺着主街 Via Francesco Mormino Penna 慢慢往下走，两侧的建筑立面像舞台布景一样徐徐展开。那些阳台真是令人着迷——扭曲成优雅涡卷的铁艺栏杆，被岁月磨得温润的石雕滴水兽，还有阳台上层层叠叠的花盆，天竺葵开得没心没肺，鲜红欲滴。我注意到许多建筑的一楼是热闹的杂货铺、面包房或小工坊，楼上是住家，晾晒的衣物在微风里轻轻摆动。这里没有将居民“清空”以供观赏，历史就流淌在买面包的零钱叮当声里，流淌在邻居隔着窄巷聊天的西西里方言里。
走到市政厅所在的意大利广场，那种感觉更强烈了。宏伟的圣伊格纳西奥教堂和市政厅（它本身就在一座18世纪的宫殿里）庄严地俯瞰着广场，而台阶上却坐着几个抽着烟闲聊的年轻人，孩子在追逐鸽子，老太太们提着满满的购物袋缓缓走过。神圣与世俗，宏伟与家常，在这里没有丝毫隔阂。希克利最打动我的，正是这种“活着的华丽”。它的巴洛克不是冰冷的历史标本，而是日常生活的框架和背景，是呼吸着的当下。
当黄昏降临，金色的夕阳为每一座建筑的曲线镶上金边，整个山谷笼罩在一种柔和的、蓝粉色的光晕中。窗户里陆续亮起温暖的灯光，餐厅开始摆出桌椅。这时你才真正明白，希克利的灵魂不在任何一张导游图上，而在这些光影变幻的瞬间，在弥漫开的晚餐香气里，在这个社区日复一日、平凡而坚韧的生命力中。它不是用来“参观”的，而是用来“沉浸”和“感受”的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，当我第一眼看到希克利时，我并没有立刻意识到自己正站在一座世界遗产里。它不像那些被栅栏围起来的博物馆小镇，它太……生活化了。阳光把那些蜂蜜色的石灰岩建筑晒得暖烘烘的，空气里混杂着街角咖啡馆飘出的浓缩咖啡香、某户人家窗口溢出的炖菜香气，还有淡淡的、来自附近花园的橙花香。我到的正是午后最慵懒的“pausa”时分，街道安静得能听见自己的脚步声在光滑的石板路上回响，偶尔有骑着生锈自行车的老爷爷慢悠悠地晃过，只留下一个长长的影子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我顺着主街 Via Francesco Mormino Penna 慢慢往下走，两侧的建筑立面像舞台布景一样徐徐展开。那些阳台真是令人着迷——扭曲成优雅涡卷的铁艺栏杆，被岁月磨得温润的石雕滴水兽，还有阳台上层层叠叠的花盆，天竺葵开得没心没肺，鲜红欲滴。我注意到许多建筑的一楼是热闹的杂货铺、面包房或小工坊，楼上是住家，晾晒的衣物在微风里轻轻摆动。这里没有将居民“清空”以供观赏，历史就流淌在买面包的零钱叮当声里，流淌在邻居隔着窄巷聊天的西西里方言里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到市政厅所在的意大利广场，那种感觉更强烈了。宏伟的圣伊格纳西奥教堂和市政厅（它本身就在一座18世纪的宫殿里）庄严地俯瞰着广场，而台阶上却坐着几个抽着烟闲聊的年轻人，孩子在追逐鸽子，老太太们提着满满的购物袋缓缓走过。神圣与世俗，宏伟与家常，在这里没有丝毫隔阂。希克利最打动我的，正是这种“活着的华丽”。它的巴洛克不是冰冷的历史标本，而是日常生活的框架和背景，是呼吸着的当下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当黄昏降临，金色的夕阳为每一座建筑的曲线镶上金边，整个山谷笼罩在一种柔和的、蓝粉色的光晕中。窗户里陆续亮起温暖的灯光，餐厅开始摆出桌椅。这时你才真正明白，希克利的灵魂不在任何一张导游图上，而在这些光影变幻的瞬间，在弥漫开的晚餐香气里，在这个社区日复一日、平凡而坚韧的生命力中。它不是用来“参观”的，而是用来“沉浸”和“感受”的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`希克利巴洛克古城`} />
                <InfoRow label="英文名称" value={`Scicli`} />
                <InfoRow label="正式名称" value={`Scicli`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`希克利`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从1693年毁灭性大地震的废墟中涅槃重生，并以其独特、和谐的晚期巴洛克建筑群定义了整个瓦迪诺托山谷风貌的标志性古镇。`} />
                <InfoRow label="建筑特色" value={`建筑随山谷地形起伏错落，线条优雅柔和的“卡图罗”（弯曲的立面）与装饰繁复的阳台、铁艺和石雕窗台交织，形成一种流动的、戏剧性的街道景观。`} />
                <InfoRow label="建筑风格" value={`西西里晚期巴洛克风格，融合了地震后重建时期的简约实用主义与洛可可式的精致装饰趣味。`} />
                <InfoRow label="文化价值" value={`不仅是联合国教科文组织遗产地，更是一个持续呼吸、生活的社区典范，其建筑与日常生活的无缝融合，展现了文化遗产“活态保护”的完美样本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城街道全天开放，但主要宫殿、教堂的内部开放时间各异，一般为上午9:30至下午1:00，下午3:30至7:00（夏季可能延长至晚上8:00）。多数教堂周一上午或整个周一不对外开放。重要节日如圣周期间，开放时间变化极大且可能举办特殊活动。建议行前在旅游局官网确认具体信息。`} />
              <InfoRow label="门票价格" value={`漫步古城街道免费。进入主要教堂（如圣马特奥教堂）通常免费，但鼓励小额捐款以支持维护。部分历史宫殿（如市政厅所在的斯皮诺宫）可免费进入大厅参观，深度导览可能需要支付少量费用（约3-5欧元）。无统一联票。`} />
              <InfoRow label="地址" value={`Piazza Italia, 1, 97018 Scicli RG, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是科米索机场（CIY），距离约25公里，有租车服务和预定的出租车，车程约30分钟。最近的铁路枢纽是拉古萨（Ragusa）火车站，从拉古萨乘坐AST公司的班车前往希克利，车程约30分钟，班次在工作日较为频繁（约每小时一班），周末班次减少，建议提前在车站或烟草店（Tabacchi）购买车票。最方便的方式是从拉古萨或莫迪卡自驾前往，沿途山谷风景绝美，古城外有多个免费或收费低廉的停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲希克利的故事，我们得把时钟拨回到1693年1月11日那个可怕的夜晚。在那之前，希克利是一个繁荣的中世纪小镇，盘踞在圣马特奥山陡峭的山坡上，拥有城堡和蜿蜒如迷宫的小巷，易守难攻。然而，一场估计高达7.4级的毁灭性大地震席卷了整个西西里东南部，将山上的老城几乎彻底摧毁，巨石滚落，埋葬了无数生命和几个世纪的记忆。那不仅仅是建筑的倒塌，更是一个时代的终结。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`劫后余生的人们面临一个抉择：是在旧日的废墟上重建，还是另起炉灶？当时的贵族、教士和市民们做出了一个大胆且颇具现代眼光的决定：下山，搬到更开阔、更安全的谷地。这并非简单的迁移，而是一次彻底的城市规划实验。在新思想的引导下，他们放弃了中世纪防御性的、混乱的格局，转而采用更开放、更理性的设计。三条主街沿着山谷的天然走向平行铺开，宽阔的广场成为社区中心，街道网格虽顺应地形略有弯曲，却充满了秩序感。这是一次从“恐惧驱动”到“生活驱动”的城镇建设哲学转变。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`重建工程持续了整个18世纪，这正是西西里巴洛克艺术绽放的最后、也是最辉煌的时期。但与拉古萨或莫迪卡那种略显厚重的巴洛克不同，希克利的建筑师们，如著名的当地建筑师萨尔瓦托·阿利和来自外地的罗萨里奥·加利亚尔迪，发展出了一种更轻盈、更富弹性的风格。由于资金并非无限，他们往往采用当地丰富的石灰岩，并巧妙地运用视觉技巧。那些著名的“卡图罗”立面——柔和的波浪形曲线，不仅美观，更巧妙地适应了不规则的地块，并让光线在建筑表面产生迷人的流动效果。装饰集中在阳台、窗台和教堂立面，精致但不浮夸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十九世纪和二十世纪，希克利像许多南方小镇一样，经历了衰退与移民潮。那些华丽的宫殿一度黯淡，许多被分隔成简单的公寓。但正是这种“平民化”的过程，意外地保护了它。因为没有足够的财富进行破坏性的现代化改造，整个古镇的建筑肌理得以完整保存。时间在这里仿佛慢了下来，巴洛克的骨架里填充着二十世纪生活的朴素内容。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到二十世纪末，随着联合国教科文组织将包括希克利在内的“瓦迪诺托谷晚期巴洛克城镇群”列入世界遗产名录，外界的目光才重新聚焦于此。而真正让它走入全球大众视野的，是意大利国宝级电视剧《蒙塔尔巴诺警长》选择这里作为主要取景地，虚构的维加塔警察局就设在市政厅。有趣的是，这场“影视旅游”的复兴并没有让它迪士尼化，反而激发了本地社区更深的自豪感和保护意识。今天的希克利，是一座成功平衡了遗产保护与真实生活需求的典范小镇，它的历史，是一部关于毁灭、重生、适应与坚韧的史诗，每一块蜂蜜色的石头都在诉说。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午九点半左右抵达，这时阳光已经足够明亮，能将建筑立面的细节和色彩完美呈现，而游客尚未涌入，本地生活刚刚苏醒，是最好的观察时机。整个深度游览需要大约5-6小时，节奏宜慢不宜快，核心是“漫步”与“发现”。路线设计为一条从高到低、从全景到细节的环形路径，先从山腰的老城遗址开始，获得地理和历史纵深感，然后沉浸到谷地新城那宛如露天剧场的街道中，最后在黄昏时分回到高点，欣赏光影魔法。记得穿一双绝对舒适的步行鞋，因为你会不停地上下坡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`许多小教堂下午有长时间的午休闭门，计划入内参观最好集中在上午或傍晚。不要被那些看似普通的民居大门迷惑，有时虚掩的门后藏着惊艳的巴洛克风格庭院，礼貌地探头询问，当地人常会自豪地邀请你进去看一眼。夏季午后阳光炽烈，务必戴帽子和墨镜，并随身带水，但别忘了，躲进一家咖啡馆享受漫长的“咖啡休息时间”本身就是希克利体验的一部分。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先打车或自驾到圣马特奥山腰的Chiesa Madre Vecchia（老主教堂）遗址，站在荒芜的断壁残垣间，俯瞰脚下如模型般铺展的整个巴洛克新城，感受那场地震带来的沧桑巨变。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着山坡上残存的中世纪石阶小道“Costarella San Matteo”慢慢向下走，抚摸墙壁上古老的刻痕，想象几个世纪前人们每日攀爬此路的生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入新城的心脏——意大利广场，在台阶上小坐，看市政厅（斯皮诺宫）和圣伊格纳西奥教堂的宏伟立面，观察广场上本地人的日常节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Via Francesco Mormino Penna主街向南漫步，刻意放慢脚步，抬头细细欣赏每一座宫殿阳台铁艺的独特涡卷和那些表情生动的石雕面具。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进安静的Via Duca degli Abruzzi小巷，这里建筑密度稍疏，光影在柔和起伏的立面上切割出迷人的几何图案，是感受“卡图罗”曲线魅力的最佳地段。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访小巧而精美的圣巴托洛梅奥教堂，感受其内部温馨的金色装饰，然后到对面的Antica Dolceria Bonajuto，品尝一块用古老阿拉伯秘方制作的“mpanatigghi”（肉馅巧克力卷）。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏前回到地势较高的圣米歇尔教堂附近，找一家有户外座位的咖啡馆，点一杯Arancina（炸饭团）和冰茶，看着夕阳如何将整个山谷染成琥珀色与玫瑰金。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐时间钻进本地人聚集的Trattoria del Carmine，在拱形石窖里品尝用新鲜刺山柑和番茄烹制的“Cavatieddi”手工面，让味蕾也沉浸在这片土地的历史中。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣马特奥山腰观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，利用侧光拍摄，将前景的老城废墟石墙作为框架，聚焦下方谷地里连绵的蜂蜜色屋顶和教堂穹顶，能拍出极具历史层次感的全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Via Mormino Penna街道中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳台装饰特别繁复的建筑，在正午阳光直射时拍摄，此时光线能最大限度消除立面阴影，突出石灰岩的温暖色泽和铁艺栏杆的细腻剪影，构图时将蜿蜒的街道线条纳入。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`本笃会修道院（现为市政厅一部分）的回廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点左右，阳光斜射入回廊，在粉刷成淡黄色的墙壁上投下优美的拱门阴影，等待一个当地人穿过庭院时抓拍，能获得动静结合、充满几何美感和生活气息的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣米歇尔教堂的台阶上`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻（日落后半小时），面向点起暖色灯光的意大利广场方向拍摄，将教堂的巴洛克尖顶作为前景轮廓，捕捉天空从深蓝到绛紫的渐变与人间灯火的交融。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人和儿童，务必先微笑并用手势征得同意，西西里人热情但也很重视隐私。使用无人机需要特别谨慎，最好远离民居密集区，并事先了解当地法规，因为许多区域属于受保护的遗产核心区。阴天时光线柔和均匀，反而是拍摄建筑立面和街道细节的好时机，能获得另一种沉静、古典的质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`由18世纪贵族宅邸的一层改造而成，拱形石顶天花板，厚实的墙壁让室内夏凉冬暖，房东会为你准备好一篮本地水果和新鲜烘焙的“scacce”馅饼。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`广场设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于意大利广场一角，将巴洛克的古典骨架与极简的现代设计完美融合，部分房间带有可俯瞰广场演出般日常生活的精致小阳台，早餐的杏仁奶和卡塔尼亚血橙汁是一绝。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山谷农庄体验`}</h4>
                  <p className="text-sm text-yellow-800">{`住在希克利郊外一个由古老“masserie”（农庄）改造的乡间旅馆，被橄榄树和角豆树环绕，可以参与清晨的采摘，晚上在星空下享用完全来自庄园的“零公里”晚餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`精品宫殿套房`}</h4>
                  <p className="text-sm text-purple-800">{`租住Via Penna主街上某座宫殿的整个顶层套房，保留了原始的彩绘天花板和巨大的壁炉，拥有一个种满九重葛的私人露台，是像本地贵族一样生活的机会。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住在古城中心固然方便，但夜间广场上年轻人的聚会可能持续到较晚，浅眠者可以选择稍靠外围但步行可达的安静街巷。夏季（7-8月）是旺季也是酷暑期，预订要提前数月，而春秋两季（4-6月，9-10月）气候宜人，价格也更优，是更理想的选择。许多特色民宿不设24小时前台，务必提前与房东确认具体的入住交接时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开希克利好些天了，我的脑海里还时常浮现出那些弯曲的街道和阳光下蜂蜜色的光泽。它给我的触动，不同于见到圣彼得大教堂那种纯粹的震撼，而是一种更绵长、更温暖的浸润。在这里，我看到了历史最美好的归宿——不是被封存在玻璃罩里供人瞻仰，而是被编织进生活的经纬，在孩子的嬉笑声里，在主妇晾晒的床单上，在老人午后门前的座椅中，继续生长。它让我相信，文化遗产真正的生命力，不在于它被保护得多么一尘不染，而在于它是否还能为今天的人们提供生活的舞台和美学的滋养。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速打卡、热衷滤镜特效的世界里，希克利是一剂温柔的解毒剂。它邀请你慢下来，不仅仅是脚步，更是心态。它不提供惊心动魄的剧情，只提供细腻的日常。在这里，深度游不是看了多少景点，而是你是否能感受到从粗糙石墙上反射过来的阳光的温度，是否能在某个街角咖啡的苦香中，捕捉到几个世纪以来未曾改变的生活智慧。每一位热爱深度游的旅人，都应该来希克利住上几天，不是为了收集又一个世界遗产的名号，而是为了让自己相信，美与诗意，从未从我们的生活中退场，它们只是换了一种更朴素、更坚韧的方式，在像希克利这样“活着”的角落里，静静等待被发现。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/modica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫迪卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Modica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/luni-archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢尼古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Luni Archaeological Site</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/san-leo-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣莱奥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">San Leo</p>
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
