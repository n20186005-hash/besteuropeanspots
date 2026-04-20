import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '德尔斐阿波罗神庙 Delphi｜在“世界肚脐”聆听神谕，感受古希腊文明的心脏脉动 - 最佳欧洲景点',
  description: '当你第一眼看到德尔斐，可能会先深吸一口气——不是因为震撼，而是因为那段长长的、通往遗址的之字形山路，和海拔五百多米带来的稀薄空气。但紧接着，一切奔波都值了。眼前展开的，不是一个孤零零的神庙废墟，而是一整片沿着帕尔纳索斯山南坡铺开的、巨大的露天剧场。石灰岩的山体在爱琴海特有的、几乎刺眼的阳光下泛着金银...',
}

export default function SanctuaryOfApolloAtDelphiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德尔斐阿波罗神庙', href: '/attractions/sanctuary-of-apollo-at-delphi' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`德尔斐阿波罗神庙・Delphi・希腊・德尔斐`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一眼看到德尔斐，可能会先深吸一口气——不是因为震撼，而是因为那段长长的、通往遗址的之字形山路，和海拔五百多米带来的稀薄空气。但紧接着，一切奔波都值了。眼前展开的，不是一个孤零零的神庙废墟，而是一整片沿着帕尔纳索斯山南坡铺开的、巨大的露天剧场。石灰岩的山体在爱琴海特有的、几乎刺眼的阳光下泛着金银交织的光，仿佛大地本身的骨骼。空气中混合着干热的尘土味、无处不在的野生 oregano（牛至）和百里香的辛辣香气，以及从下方山谷科林斯湾吹来的、带着一丝咸涩的微风。风声是这里永恒的背景音，呼啸着穿过那些仅存的石柱，发出类似管风琴的低鸣，古人说，那是阿波罗神在低语。
这里最打动人的，是那种压倒性的“场所精神”。你立刻就能明白，为什么古希腊人选中了这里作为“世界的肚脐”。它不像雅典卫城那样君临城市，而是完全脱离凡尘，悬于天地之间。脚下是深不见底的普列斯托斯河谷，生长着漫山遍野的橄榄树林，像一片银绿色的海洋；抬头是帕尔纳索斯山嶙峋的灰色岩壁，庄严而沉默。你就站在神与人的交界线上。在古代，来自斯巴达、雅典、科林斯甚至远自埃及的使团，就是沿着你脚下的这条“神圣之路”蜿蜒而上，心怀敬畏与焦虑，去聆听那座神庙深处，皮媞亚女祭司在蒸汽中发出的、含混而决定命运的神谕。如今，游人代替了祈求者，但那种对未知的探寻、对命运的敬畏，似乎仍弥漫在每一块被阳光晒得发烫的大理石上。
走在遗迹间，你会触摸到历史的“温度”。那些散落的柱鼓石被无数手摩挲得光滑，基座上刻着模糊的铭文，可能是某个城邦感谢阿波罗帮助取胜的献词。你会看到雅典人建造的珍宝库，小巧精致，像一枚胜利的勋章；也会看到巨大的阿波罗神庙地基，仅存的几根多立克巨柱倔强地刺向蓝天。最奇妙的是，这一切并非死寂的博物馆陈列，它依然活在当地人的生活中。你会看到附近村庄的老人坐在遗址围墙外的长椅上闲聊，牧羊人的铃铛声从远处山腰隐隐传来，他们的日常与这片废墟共享着同一片阳光和风，历史在这里不是过去式，而是一种持续的、悠长的呼吸。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你第一眼看到德尔斐，可能会先深吸一口气——不是因为震撼，而是因为那段长长的、通往遗址的之字形山路，和海拔五百多米带来的稀薄空气。但紧接着，一切奔波都值了。眼前展开的，不是一个孤零零的神庙废墟，而是一整片沿着帕尔纳索斯山南坡铺开的、巨大的露天剧场。石灰岩的山体在爱琴海特有的、几乎刺眼的阳光下泛着金银交织的光，仿佛大地本身的骨骼。空气中混合着干热的尘土味、无处不在的野生 oregano（牛至）和百里香的辛辣香气，以及从下方山谷科林斯湾吹来的、带着一丝咸涩的微风。风声是这里永恒的背景音，呼啸着穿过那些仅存的石柱，发出类似管风琴的低鸣，古人说，那是阿波罗神在低语。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人的，是那种压倒性的“场所精神”。你立刻就能明白，为什么古希腊人选中了这里作为“世界的肚脐”。它不像雅典卫城那样君临城市，而是完全脱离凡尘，悬于天地之间。脚下是深不见底的普列斯托斯河谷，生长着漫山遍野的橄榄树林，像一片银绿色的海洋；抬头是帕尔纳索斯山嶙峋的灰色岩壁，庄严而沉默。你就站在神与人的交界线上。在古代，来自斯巴达、雅典、科林斯甚至远自埃及的使团，就是沿着你脚下的这条“神圣之路”蜿蜒而上，心怀敬畏与焦虑，去聆听那座神庙深处，皮媞亚女祭司在蒸汽中发出的、含混而决定命运的神谕。如今，游人代替了祈求者，但那种对未知的探寻、对命运的敬畏，似乎仍弥漫在每一块被阳光晒得发烫的大理石上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在遗迹间，你会触摸到历史的“温度”。那些散落的柱鼓石被无数手摩挲得光滑，基座上刻着模糊的铭文，可能是某个城邦感谢阿波罗帮助取胜的献词。你会看到雅典人建造的珍宝库，小巧精致，像一枚胜利的勋章；也会看到巨大的阿波罗神庙地基，仅存的几根多立克巨柱倔强地刺向蓝天。最奇妙的是，这一切并非死寂的博物馆陈列，它依然活在当地人的生活中。你会看到附近村庄的老人坐在遗址围墙外的长椅上闲聊，牧羊人的铃铛声从远处山腰隐隐传来，他们的日常与这片废墟共享着同一片阳光和风，历史在这里不是过去式，而是一种持续的、悠长的呼吸。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`德尔斐阿波罗神庙`} />
                <InfoRow label="英文名称" value={`Delphi`} />
                <InfoRow label="正式名称" value={`Archaeological Site of Delphi`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`德尔斐`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`古希腊世界最重要的宗教圣地和神谕发布中心，被视为“世界的肚脐”（Omphalos），是泛希腊精神的象征。`} />
                <InfoRow label="建筑特色" value={`依帕尔纳索斯山陡峭山坡而建的阶梯状圣地，建筑群与自然地形完美融合，形成一条蜿蜒向上的神圣之路。`} />
                <InfoRow label="建筑风格" value={`以多立克柱式为主，融合了不同时期的古希腊建筑风格，见证了从古风时期到罗马时代的演变。`} />
                <InfoRow label="文化价值" value={`不仅是祭祀阿波罗的场所，更是古希腊城邦寻求神意、解决争端、确立法律与殖民地的重要政治与文化中心，深刻影响了希腊乃至整个西方文明的历史进程。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月1日至10月31日）：上午8:00至晚上8:00。冬季（11月1日至3月31日）：上午8:30至下午3:30。请注意，开放时间可能因天气、罢工或国家假日（如1月1日、3月25日、复活节周日、12月25-26日）而临时调整。遗址内的博物馆与遗址开放时间基本同步，但闭馆时间通常早半小时，建议提前查询官网确认。`} />
              <InfoRow label="门票价格" value={`全价套票（包含考古遗址和德尔斐考古博物馆）：夏季12欧元，冬季6欧元。欧盟学生及65岁以上长者享半价优惠。18岁以下青少年及特定纪念日（如每年9月的最后一个周末）可免费入场。建议携带现金（欧元）及学生证等有效证件。`} />
              <InfoRow label="地址" value={`Delphi 330 54, Greece`} />
              <InfoRow label="交通方式" value={`从雅典出发是最常见的选择。雅典国际机场（ATH）距离德尔斐约180公里。首先，你需要从机场乘坐地铁或巴士前往雅典市中心的利奥西翁巴士总站。在利奥西翁车站，搭乘前往德尔斐的KTEL长途巴士。巴士班次每天约5-6班，车程约3小时，会穿过美丽的山区。建议提前在KTEL网站查询时刻表并预留充足时间，因为班次不算密集。自驾则是更灵活的选择，沿E75公路北上，再转入48号公路，沿途可欣赏帕尔纳索斯山的壮丽景色，全程约2.5小时。遗址位于德尔斐小镇上方，从镇中心步行上山约需15-20分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`德尔斐的故事，始于神话与地质的奇妙交织。根据传说，宙斯为了寻找大地的中心，从世界两端放飞了两只鹰，它们相遇的地方，就是德尔斐。一块名为“欧法洛斯石”的锥形石头被立在那里，标志此地为“世界肚脐”。更早的时候，这里曾是祭祀大地女神盖亚的圣地，由一条名为皮同的巨蛇守护。后来，太阳神阿波罗来到这里，杀死了皮同，建立了自己的神庙。这个神话的底层，很可能反映了实际发生的宗教权力更迭：古老的母神崇拜被新兴的、代表理性与秩序的奥林波斯男神信仰所取代。而那条被杀的巨蛇“皮同”，名字赋予了这里最初的女祭司“皮媞亚”。至于那决定神谕的“地气”，现代地质学家认为，很可能源于遗址下方两条断层的交叉处逸出的乙烯气体，这种气体能使人进入恍惚状态。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`德尔斐的黄金时代，贯穿了整个古典时期。它的崛起，离不开那项独一无二的“服务”：发布神谕。过程充满戏剧性：每月特定的日子（除了冬季阿波罗北去的三个月），一位本地年长妇女（皮媞亚）会在 Kastalia 圣泉沐浴洁净，然后咀嚼月桂叶，坐在一个三脚架上，吸入从岩石裂缝中冒出的“神圣气息”。进入迷狂状态后，她会发出一些含糊不清的词语、呻吟和呼喊。一旁等候的祭司们将这些碎片化的信息“翻译”成晦涩难懂、通常可作双重解释的六步格诗，交给焦急等待的祈求者。从个人婚嫁、生意成败，到城邦是否该发动战争、去哪里建立殖民地，古希腊人几乎事事求问神谕。正因为如此，德尔斐积累了惊人的财富，各城邦竞相在此建造华丽的“珍宝库”来存放献礼，炫耀实力，整个圣地成了一座露天的政治与艺术博览会。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，德尔斐的权威并非从未受到挑战。它最深层的魅力，在于它在神圣光环下展现的、极其现实和精明的一面。神庙的祭司们本质上是高级外交官和信息分析师，他们从遍布地中海世界的请愿者那里收集情报，做出往往有利于维持希腊世界平衡、或符合德尔斐自身利益的“神谕”。例如，当吕底亚国王克洛伊索斯询问是否该攻打波斯时，他得到的神谕是：“如果你攻打波斯，你将毁灭一个伟大的帝国。”他兴高采烈地出兵，结果毁灭的是他自己的帝国。神谕没错，只是没说是谁的帝国。这种 ambiguity（模糊性），正是其权力得以维系的关键。同时，圣地也刻着希腊人自我反思的智慧，神庙入口处铭刻着“认识你自己”、“凡事不过度”等格言，提醒着被权力和野心冲昏头脑的来访者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`繁荣在罗马时代得以延续，但也经历了掠夺与重修。罗马将军苏拉曾为筹措军费掠夺过圣地，但后来的罗马皇帝，尤其是哈德良，又成了慷慨的修复者。真正的转折点始于基督教成为国教。公元390年，信奉基督教的罗马皇帝狄奥多西一世下令关闭所有异教神庙，德尔斐的神谕活动被永久禁止。圣地逐渐被遗弃，建筑的石材被拆去修建教堂和民宅，地震和山体滑坡最终将其掩埋在泥土之下。直到19世纪末，法国考古学校才在这里开始了系统的发掘，让这座“世界的肚脐”重见天日。今天我们看到的所有遗迹布局，都得益于考古学家们一个多世纪辛勤的拼图工作。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的德尔斐深度游需要整整一天时间，并且强烈建议在附近住一晚，以避开一日游的大巴人潮。最佳安排是：前一天下午抵达德尔斐小镇入住。次日清晨8点一开门就进入考古遗址，此时光线柔和，温度适宜，游客稀少，你能独享圣地最宁静神圣的时刻。用大约2-2.5小时，按照从低到高的神圣之路顺序细细探索遗址。约10点半至11点间，当阳光变得强烈、旅行团开始涌入时，你正好转入旁边的德尔斐考古博物馆，在凉爽的室内近距离观赏那些无价的出土珍宝，特别是著名的“青铜御者”雕像和欧法洛斯石。博物馆参观约需1.5-2小时。下午，你可以去遗址下方的古剧场和体育场（包含在门票内）做最后拜访，或者驱车短程前往 Kastalia 圣泉和雅典娜圣域遗址。这样的节奏张弛有度，既尊重了历史的厚重感，也兼顾了体力与体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、防滑的徒步鞋，遗址内都是粗糙不平的古代石板路和碎石坡道，高跟鞋或凉鞋是自讨苦吃。夏季上午10点后阳光极其毒辣，帽子、太阳镜、防晒霜和水壶是保命必备品，遗址内几乎没有遮阴处。警惕遗址外过度热情的“导游”，官方讲解器或在博物馆请一位持证导游是更靠谱的选择。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入后，先在神圣之路起点停留，感受这条由无数祈求者足迹磨亮的道路向上延伸的坡度与视野`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细观看道路左侧保存完好的雅典人珍宝库，抚摸它那由帕罗斯岛大理石建成的墙壁，想象雅典人在萨拉米斯海战后的狂喜与感恩`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着神圣之路缓步上行，在两侧散落的各城邦献礼基座和雕像底座间，辨认那些模糊的铭文，玩一场跨越千年的历史猜谜游戏`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到路径的焦点——阿波罗神庙巨大的台基前，凝视那几根重新竖立的多立克巨柱，试着在脑海中重建它当年拥有38根柱子的恢宏模样`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕到神庙后方，找到那个被认为是发布神谕的幽暗地下密室所在的位置，静立片刻，听风声在山谷中回荡`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上攀登至保存极为完好的古剧场，坐在大理石观众席的最高一排，俯瞰整个阿波罗圣地和远方的橄榄树山谷`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果有余力，一定沿着小路再往上走到古体育场，这是古希腊保存最完好的体育场之一，站在起跑线上能感受到泛德尔斐运动会的竞技之魂`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后从高处俯瞰整个遗址，将神庙、剧场、山谷与远山尽收眼底，完成一次从微观到宏观的朝圣`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`神圣之路中段回望视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在雅典人珍宝库上方一点的位置，用长焦镜头压缩空间，将蜿蜒的道路、散落的遗迹作为前景，将远处山谷的橄榄树林和科林斯湾的微光作为背景，构成一幅层次丰富的史诗画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`阿波罗神庙柱廊特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，走近那几根屹立的巨柱，拍摄柱身上深深凹槽的纹理和岁月侵蚀的痕迹，让阳光在柱列间投下长长的、富有韵律的阴影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`古剧场全景与人物互动`}</h4>
                  <p className="text-sm text-gray-700">{`请你的同伴坐在剧场中央的圆形舞台（orchestra）上，你从观众席最高处俯拍，既能展现剧场的宏伟几何结构，小小的人物又能瞬间赋予场景以生动的尺度感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从体育场出口俯拍圣地`}</h4>
                  <p className="text-sm text-gray-700">{`游览完体育场后，不要急着离开，在出口处的栅栏边有一个绝佳的天然观景台，可以拍到整个德尔斐考古遗址如同模型般铺展在陡坡上的壮丽全景，尤其适合在日落前金光普照时拍摄。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`博物馆内的青铜御者雕像`}</h4>
                  <p className="text-sm text-gray-700">{`利用博物馆柔和的顶光，从雕像的斜侧方拍摄，重点捕捉他那平静凝视的珐琅眼睛、精细的发辫以及长袍如水般垂落的褶皱，这是静态雕塑中动态灵魂的绝佳体现。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`遗址内允许非商业用途的拍照和摄像，但严禁使用无人机（除非获得特别许可）。拍摄博物馆展品时务必关闭闪光灯，强光会对历经千年的颜料和金属表面造成不可逆的损伤。尊重其他游客和这片圣地神圣的氛围，避免为了拍照而长时间占据最佳位置或做出不恰当的举动。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`小镇中心温馨民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择一家由家族经营的石头小屋民宿，阳台正对着帕尔纳索斯山或山谷，晚上主人可能会邀请你品尝家酿的松香酒，并提供手绘的本地徒步小地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史酒店`}</h4>
                  <p className="text-sm text-green-800">{`入住那家坐落在遗址边缘、由老房子改建的精品酒店，部分房间的窗户直接就能望见阿波罗圣地的灯火，在星空下与古迹共眠的体验无与伦比。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山间隐居之所`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车前往距离小镇几公里外、散落在山坡橄榄园中的独栋农舍，享受绝对的宁静，清晨在鸟鸣和教堂钟声中醒来，自己煮一壶咖啡，直面群山与苍穹。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端景观酒店`}</h4>
                  <p className="text-sm text-purple-800">{`预算充足的话，可以选择镇上那家拥有无边泳池的四星级酒店，泳池仿佛与远处的山谷连成一片，在游完泳后喝着鸡尾酒看落日将整片遗迹染成金色，是结束一天完美旅程的最佳方式。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`德尔斐小镇非常小，所有住宿步行到遗址入口基本都在15分钟内，但有些是陡峭的上坡路，预订时最好确认一下位置。夏季（6-9月）是绝对旺季，务必提前数月预订，春秋两季是更舒适的选择。小镇治安极好，晚上可以放心散步，但山路没有路灯，建议携带手电筒。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开德尔斐时，我的背包里似乎比来时更沉了——不是多了纪念品，而是装满了风声、阳光的重量和那些石头无声的诉说。这个地方教给我的，远不止于古希腊的历史知识点。它让我真切地触摸到，人类是如何在一个如此不确定、充满风险的世界里，努力地为自己寻找坐标、意义和答案的。那些风尘仆仆来到这里的古代人，和我们今天在生活十字路口徘徊的现代人，在灵魂深处共享着同一种焦虑与渴望。德尔斐的神谕，与其说是神的启示，不如说是一面镜子，迫使提问者在模糊的答案中，更深刻地审视自己的内心、动机与局限。那镌刻在神庙上的“认识你自己”，穿越三千年，依然是最振聋发聩的提醒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个信息爆炸、答案似乎唾手可得的快节奏时代，德尔斐的废墟提供了一种截然不同的价值：慢下来，在悬置的空间里感受不确定性本身的力量。这里没有即时回复，没有算法推荐，只有风穿过石柱的漫长回响，和需要你用双脚去丈量、用身心去体会的物理旅程。它告诉我们，有些问题，答案就藏在你奔赴它的路上，藏在你站在天地之间、感受自身渺小与伟大的那个瞬间。每一位热爱深度游的旅人，都该来一次德尔斐。不是为了寻找那个虚无缥缈的“世界中心”，而是为了在这个被古人视为中心的地方，找到自己内心那个久违的、宁静而坚定的原点。当你转身离开，你将带走一片“世界的肚脐”，安放在自己生活的中央。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/medieval-city-rhodes" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗德岛老城（骑士街）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhodes Old Town (Street of the Knights)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monemvasia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫奈姆瓦夏</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monemvasia</p>
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
