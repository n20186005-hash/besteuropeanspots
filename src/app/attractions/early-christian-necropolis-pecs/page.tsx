import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩奇早期基督教陵墓 Pécs Early Christian Necropolis｜探寻罗马帝国地下信仰圣殿 - 最佳欧洲景点',
  description: '说实话，在走进那个现代玻璃入口之前，我完全没料到会在匈牙利南部这座阳光明媚的大学城地下，遭遇如此深邃的时光断层。地面上，佩奇满是巴洛克立面和咖啡馆飘香的生活气息，而沿着游客中心那道不起眼的楼梯盘旋而下，空气瞬间变凉，带着一股特有的、潮湿的泥土与古老石材混合的气味，仿佛一脚踏进了另一个维度的寂静里。这...',
}

export default function EarlyChristianNecropolisPecsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '佩奇早期基督教陵墓', href: '/attractions/early-christian-necropolis-pecs' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩奇早期基督教陵墓・Early Christian Necropolis of Pécs・匈牙利・佩奇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在走进那个现代玻璃入口之前，我完全没料到会在匈牙利南部这座阳光明媚的大学城地下，遭遇如此深邃的时光断层。地面上，佩奇满是巴洛克立面和咖啡馆飘香的生活气息，而沿着游客中心那道不起眼的楼梯盘旋而下，空气瞬间变凉，带着一股特有的、潮湿的泥土与古老石材混合的气味，仿佛一脚踏进了另一个维度的寂静里。这不是阴森，而是一种被厚重历史包裹起来的肃穆感，耳朵里只剩下自己轻微的呼吸声和远处渗水滴落的回音。
我的眼睛花了点时间才适应昏暗的灯光。然后，那些墙壁就活了过来。不是夸张，是真的“活过来”。公元四世纪的色彩，跨越一千六百年，依然附着在石膏墙上。最震撼我的是“彼得与保罗墓室”里那幅《亚当与夏娃》。颜料已经斑驳，线条也因岁月而模糊，但那份朴素而强烈的情感表达却穿透了时光——两人羞愧地蜷缩着，用无花果树叶遮挡身体，那种人类的原初窘迫与觉醒，被一位不知名的画师用最直接的笔触定格在此。光线从精心设计的现代照明系统斜射下来，让红赭石和炭黑的轮廓在阴影中微微浮动，那一刻，你感觉不是在参观一个景点，而是在偷窥一场持续了十几个世纪的默剧。
你很快会发现，这里不是孤立的一座墓，而是一个庞大的、如蜂巢般交织的地下城市。狭窄的通道连接着一个个家族墓室（cubicula），有些宽敞得像个小型礼拜堂，有祭坛和长椅；有些则低矮私密，仅容安放一副石棺。走在其中，你能清晰地感知到当年这里不仅用于安葬，更是活着的信徒们聚集、举行纪念仪式和祈祷的场所。生与死的界限在这里被早期基督徒以一种充满社区感的方式模糊了，死亡不是终结，而是在另一个更美好的国度里团聚的开始。这种信念，就写在每一幅葡萄藤（象征基督）、鱼（象征耶稣）和孔雀（象征不朽）的壁画里。
如今，这些墓室静默无声，但佩奇人却以独特的方式让它们重新融入城市脉搏。地面上方，Cella Septichora游客中心的现代建筑轻盈地罩在部分遗址上，玻璃幕墙让阳光洒入发掘现场。你会看到当地人带着孩子来这里，不是猎奇，而是平静地讲述这座城市比匈牙利王国还要久远的根。这种古今之间的对话，让这片陵墓不再是冰冷的考古编号，而是一段依然在呼吸的、关于信仰、艺术与记忆的层叠史诗。它隐秘，却构成了佩奇文化底蕴中最坚硬的那块基石。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，在走进那个现代玻璃入口之前，我完全没料到会在匈牙利南部这座阳光明媚的大学城地下，遭遇如此深邃的时光断层。地面上，佩奇满是巴洛克立面和咖啡馆飘香的生活气息，而沿着游客中心那道不起眼的楼梯盘旋而下，空气瞬间变凉，带着一股特有的、潮湿的泥土与古老石材混合的气味，仿佛一脚踏进了另一个维度的寂静里。这不是阴森，而是一种被厚重历史包裹起来的肃穆感，耳朵里只剩下自己轻微的呼吸声和远处渗水滴落的回音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我的眼睛花了点时间才适应昏暗的灯光。然后，那些墙壁就活了过来。不是夸张，是真的“活过来”。公元四世纪的色彩，跨越一千六百年，依然附着在石膏墙上。最震撼我的是“彼得与保罗墓室”里那幅《亚当与夏娃》。颜料已经斑驳，线条也因岁月而模糊，但那份朴素而强烈的情感表达却穿透了时光——两人羞愧地蜷缩着，用无花果树叶遮挡身体，那种人类的原初窘迫与觉醒，被一位不知名的画师用最直接的笔触定格在此。光线从精心设计的现代照明系统斜射下来，让红赭石和炭黑的轮廓在阴影中微微浮动，那一刻，你感觉不是在参观一个景点，而是在偷窥一场持续了十几个世纪的默剧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这里不是孤立的一座墓，而是一个庞大的、如蜂巢般交织的地下城市。狭窄的通道连接着一个个家族墓室（cubicula），有些宽敞得像个小型礼拜堂，有祭坛和长椅；有些则低矮私密，仅容安放一副石棺。走在其中，你能清晰地感知到当年这里不仅用于安葬，更是活着的信徒们聚集、举行纪念仪式和祈祷的场所。生与死的界限在这里被早期基督徒以一种充满社区感的方式模糊了，死亡不是终结，而是在另一个更美好的国度里团聚的开始。这种信念，就写在每一幅葡萄藤（象征基督）、鱼（象征耶稣）和孔雀（象征不朽）的壁画里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，这些墓室静默无声，但佩奇人却以独特的方式让它们重新融入城市脉搏。地面上方，Cella Septichora游客中心的现代建筑轻盈地罩在部分遗址上，玻璃幕墙让阳光洒入发掘现场。你会看到当地人带着孩子来这里，不是猎奇，而是平静地讲述这座城市比匈牙利王国还要久远的根。这种古今之间的对话，让这片陵墓不再是冰冷的考古编号，而是一段依然在呼吸的、关于信仰、艺术与记忆的层叠史诗。它隐秘，却构成了佩奇文化底蕴中最坚硬的那块基石。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩奇早期基督教陵墓`} />
                <InfoRow label="英文名称" value={`Early Christian Necropolis of Pécs`} />
                <InfoRow label="正式名称" value={`Early Christian Necropolis of Pécs`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`佩奇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座庞大的地下墓穴群是罗马帝国晚期（公元4世纪）潘诺尼亚行省基督教文化繁荣与葬礼仪式的巅峰见证，也是欧洲早期基督教艺术最完整、最重要的遗存之一。`} />
                <InfoRow label="建筑特色" value={`一系列由走廊相连的地下墓室，以其保存完好的湿壁画、砖石拱顶结构和精美的石棺而闻名，展现了从异教符号向基督教图像志的过渡。`} />
                <InfoRow label="建筑风格" value={`晚期罗马建筑与早期基督教艺术的融合，具有朴素的砖砌结构、拱形天花板，以及带有罗马壁画传统技法和早期基督教象征主题的装饰。`} />
                <InfoRow label="文化价值" value={`它不仅是一座墓地，更是理解罗马帝国边疆省份如何接受、转化并最终将基督教确立为官方宗教的独特“时间胶囊”，壁画中亚当夏娃、诺亚方舟等主题是此类图像在欧洲最古老的表达之一。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年4月1日至10月31日，周二至周日开放，时间为上午10:00至下午6:00。每年11月1日至次年3月31日，周二至周日开放，时间为上午10:00至下午4:00。每周一、1月1日、12月24日至26日闭馆。请注意，地下墓室空间有限，为保护壁画，会严格控制室内人数和停留时间，可能需在入口处短暂等候。`} />
              <InfoRow label="门票价格" value={`成人票价为3000匈牙利福林（约合8欧元）。学生、6-26岁青年及62-70岁长者享有优惠票，价格为1500福林。6岁以下儿童、70岁以上老人及持有效证件的残疾人免费。家庭套票（2成人+最多3名儿童）为7500福林。门票包含进入Cella Septichora游客中心及所有开放的地下墓室。建议在官方网站查询最新价格并考虑在线购票以避免排队。`} />
              <InfoRow label="地址" value={`Szent István tér 12, Pécs, 7621, Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发最便捷。乘坐火车从布达佩斯德拉火车站（Budapest-Déli）出发，直达佩奇火车站的列车约需2.5至3小时，班次频繁，每小时约有1-2班。抵达佩奇火车站后，陵墓遗址位于市中心，步行即可轻松到达。从火车站正门出来，沿着步行街Rákóczi út向南走约15-20分钟，穿过繁华的购物街和主广场（Széchenyi tér），即可到达圣伊什特万广场（Szent István tér），遗址入口（Cella Septichora游客中心）就在广场一侧。若从佩奇机场（很小，航班少）抵达，乘坐出租车到市中心约15分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲它的故事，我们得先把时钟拨回到罗马帝国时代。那时佩奇不叫佩奇，它有一个响亮拉丁名字：索皮阿瑙埃（Sopianae）。这里是帝国重要的边疆行省——潘诺尼亚的行政与商业中心之一，驻扎着军队，融合着来自帝国各地的商人与移民。公元三、四世纪，正是罗马世界剧烈动荡和转型的时期，帝位更迭频繁，边境压力增大，而一场悄无声息却更深远的革命正在发生：基督教从地下的秘密信仰，逐渐走向公开，并在313年《米兰敕令》后获得合法地位。索皮阿瑙埃，这个看似远离罗马和君士坦丁堡的边疆城市，却成了这场精神变革的一个活跃前沿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`墓穴的修建热潮大约就始于四世纪初。为什么在这里？历史学家们推测，可能与一位或几位富有且虔信的地方贵族家族有关。他们接受了新信仰，并开始按照基督教的仪式和象征来安排身后事。但当时公开的地上教堂还不普遍，于是，在城外松软的凝灰岩山体中开凿地下墓穴，成了既安全又体面的选择。这并非独创，罗马和拉文纳都有地下墓窟，但索皮阿瑙埃的特别之处在于其壁画的艺术成就和规划的完整性。工匠们可能来自不同的传统，有些笔触能看到罗马壁画的写实遗风，有些符号则清晰地表明他们正在学习运用一种全新的、基督教的艺术语言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`让我们想象一下当时的场景：一个家族失去了亲人。送葬的队伍不会沉浸在纯粹的悲伤中，因为他们怀着复活的盼望。遗体被安放在石棺或壁龛里，墓室的门楣上或许会画上一串葡萄，象征“我是真葡萄树”。然后，家人和教友们会定期回到这里，在墓室前的“祭餐区”举行爱宴（agape），分享食物，诵读经文，缅怀逝者，并坚信他们只是在主里睡了。墙壁上的诺亚方舟、但以理在狮子坑、拉撒路复活等画面，就是在反复视觉化这种“拯救”与“复活”的应许。这些壁画不是给外人看的展览品，而是给在这个狭小空间里聚集的活人看的信仰告白和慰藉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的黄金时代持续了大概不到一百年。随着匈人入侵等蛮族浪潮冲击潘诺尼亚，索皮阿瑙埃的繁荣戛然而止。城市萎缩，地面建筑被毁，而这些深埋地下的墓穴，也因入口坍塌或被遗忘，而陷入了漫长的沉睡。泥土和碎石缓缓填入通道，将那段激荡的信仰岁月密封保存了起来，就像一个天然的时光胶囊。此后的千百年里，地面上，马扎尔人建立了匈牙利王国，奥斯曼土耳其人建起了清真寺，巴洛克建筑师们竖起了教堂，但几乎无人知道，脚下几米深处，封存着一个罗马基督教世界的鲜活断面。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在1780年，一次偶然的建筑施工让部分墓室重见天日。但真正的系统性发掘和保护要到二十世纪中期才展开。考古学家们像侦探一样，小心翼翼地清理淤泥，加固脆弱的壁画，拼接石棺的碎片。最惊人的发现莫过于那些壁画的色彩保存状态，得益于稳定的地下环境和覆盖其上的泥土保护，它们避免了光线和空气的彻底侵蚀。当第一幅《亚当与夏娃》完整呈现时，整个艺术史界为之震动——它被认为是欧洲最早的圣经场景壁画之一。2000年，联合国教科文组织将这片陵墓列入世界遗产名录，理由正是其“见证了罗马帝国晚期基督教葬仪文化、建筑与艺术的独特性和重要性”。从此，这片沉睡的地下之城，终于以其沉默却磅礴的力量，向现代世界讲述起那段决定西方文明走向的黎明时分的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议你将整个上午或下午的完整时段留给这里，至少预留2.5至3小时。最佳的抵达时间是开门后半小时（如夏季上午10:30）或闭门前两小时（如夏季下午4:00），以避开可能的学生团体。游览节奏宜慢不宜快，这是一个需要静心感受的地方。路线将从地上的现代游客中心开始，先建立宏观认知，然后深入地下核心区，在几个关键墓室长时间停留，最后回到地面，从另一个视角回望遗址全貌。这样的安排能让你完成一次从历史背景到沉浸体验，再到整体反思的完整旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`地下墓室恒温约15度，且湿度较高，即使夏季也建议带一件薄外套。务必遵守禁止使用闪光灯和禁止触摸壁画的规定，这是保护脆弱文物的生命线。墓室通道有些地方较低矮，请注意低头。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先在Cella Septichora游客中心的展陈区花二十分钟，通过模型、复原图和出土文物了解整个墓穴群的规模、结构和历史背景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后沿着设计好的步道缓缓下行，进入凉爽的地下世界，让眼睛和心境都适应从光明到幽暗的转换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“彼得与保罗墓室”驻足至少十五分钟，仔细辨认墙壁上那些斑驳却生动的圣经人物壁画，特别是那幅著名的《亚当与夏娃》。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过狭窄的连接廊道，进入装饰有精美葡萄藤和几何图案的“酒窖墓室”，感受早期基督教艺术中象征符号的频繁运用。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找并参观那个保存有原址石棺的墓室，观察石棺上的雕刻与墙壁壁画主题的呼应。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在最大的“双墓室”空间里想象早期基督徒在此举行纪念仪式的场景，注意祭餐台和长椅的遗迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着回旋路径走到发掘现场的玻璃地面下方，抬头仰望现代建筑结构如何与古老遗址和谐共处。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后返回游客中心上层的观景平台，俯瞰整个被揭示出来的墓室格局，将碎片化的体验整合成一幅完整的画面。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Cella Septichora玻璃屋顶下的全景位`}</h4>
                  <p className="text-sm text-gray-700">{`晴天下午，阳光会透过网格状屋顶在地面投下美妙光影，站在二层平台，可以拍下现代几何线条与古老砖石遗迹交织的构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“彼得与保罗墓室”壁画细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`借助室内专业的低强度冷光灯，将相机感光度调高，关闭闪光，对准《亚当与夏娃》或使徒像的局部，可以捕捉到颜料剥落带来的独特岁月质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从地下望向地面的视角`}</h4>
                  <p className="text-sm text-gray-700">{`在通往出口的楼梯上回望墓室内部，将幽暗的拱形门洞作为画框，可以拍出深邃而富有叙事感的照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`遗址外围的圣彼得圣保罗大教堂背影`}</h4>
                  <p className="text-sm text-gray-700">{`从陵墓广场侧边，可以拍到古老的教堂后殿与游客中心的现代玻璃幕墙同框，寓意着信仰传承的古今对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`这里的光线条件极具挑战但也充满艺术性，大胆提高ISO并接受一定的噪点，往往能获得更有氛围感的画面。三脚架通常不允许在拥挤的墓室内使用，倚靠墙壁或使用防抖功能是关键。请始终尊重这是一个安息之地，保持肃静，避免为了拍照而打扰其他访客的沉思。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于佩奇老城中心步行街旁的温馨家庭公寓，房东会给你手绘地图并推荐本地人才知道的便宜小酒馆，晚上听着楼下的隐约人声入睡，充满市井生气。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由一座十九世纪老建筑改造的设计师酒店，房间 loft 风格，裸露的砖墙搭配现代家具，距离陵墓仅五分钟脚程，完美融合了历史感与舒适度。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在城市边缘宁静山坡上的四星级酒店，拥有绝佳的屋顶露台酒吧，可以一边品尝匈牙利葡萄酒，一边俯瞰佩奇老城全景和远处的迈切克山。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`深度沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`选择住在大学区附近的复古风格民宿，清晨可以和学生、教授们一起在街角咖啡馆吃早餐，体验佩奇作为“大学城”的学术与文化氛围。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`佩奇治安很好，老城中心区域夜间漫步也很舒适。如果夏季前往，尤其是七八月艺术节期间，务必提前至少一个月预订住宿。选择住在老城内虽然价格稍高，但能最大化体验这座城市的步行友好度和夜晚的魅力。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`从那个清凉的地下世界回到佩奇明媚的阳光下时，我感觉自己仿佛进行了一次短暂的时间旅行。手里握着的咖啡杯是温热的，但脑海里回荡的依然是那些幽暗拱廊间的寂静和壁画上凝视了千年的目光。这个地方教会我，历史最深层的脉搏，往往不在喧嚣的广场或金碧辉煌的大殿里，而是藏在这样不起眼的地表之下，藏在普通人对生死、对信仰最朴素也最执着的表达中。它不是用来炫耀的丰碑，而是一个社群在动荡时代里，用双手和信念为自己构建的精神家园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求即时、快速和表面的时代，佩奇早期基督教陵墓提供了一种截然相反的旅行价值：它要求你慢下来，俯下身，去凝视残缺中的完整，去聆听寂静中的巨响。它告诉我们，文明最坚韧的纽带，恰恰是那些关于爱、救赎与永生的古老故事，它们被画在黑暗的墓室里，却照亮了后来整个世界的前路。每一位热爱深度游的旅人，都应该来这里站一站，不只是为了一睹世界遗产的名号，更是为了亲自感受那份穿越十六个世纪依然能直接叩击心灵的、人类共通的脆弱与希望。这趟地心之旅，最终指向的是我们自身的内心。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
