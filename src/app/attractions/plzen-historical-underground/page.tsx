import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮尔森历史地下城 Plzeň Historical Underground｜穿越20公里啤酒与时光的迷宫 - 最佳欧洲景点',
  description: '想象一下，你刚刚还在比尔森阳光明媚的共和国广场上，听着电车叮咚驶过，看着人们坐在喷泉边啜饮着金黄透亮的皮尔森之源啤酒。下一秒，你推开一扇不起眼的木门，走下几级石阶，就被一股带着泥土和古老岩石气息的阴凉空气包裹。瞬间，所有的现代喧嚣都被隔绝在外，时间仿佛坍缩了。你的眼睛需要几秒钟来适应昏暗，耳边只剩下...',
}

export default function PlzenHistoricalUndergroundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/czech-republic' },
            { label: '比尔森', href: '/destinations/czech-republic' },
            { label: '皮尔森历史地下城', href: '/attractions/plzen-historical-underground' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮尔森历史地下城・Plzeň Historical Underground・捷克・比尔森`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你刚刚还在比尔森阳光明媚的共和国广场上，听着电车叮咚驶过，看着人们坐在喷泉边啜饮着金黄透亮的皮尔森之源啤酒。下一秒，你推开一扇不起眼的木门，走下几级石阶，就被一股带着泥土和古老岩石气息的阴凉空气包裹。瞬间，所有的现代喧嚣都被隔绝在外，时间仿佛坍缩了。你的眼睛需要几秒钟来适应昏暗，耳边只剩下自己的呼吸声和远处水滴落入石槽的、规律的叮咚声。这就是皮尔森历史地下城给你的初遇礼——一种沉入城市皮肤之下的恍惚感。
脚下的路是潮湿的、被无数前人磨得发亮的砂岩。隧道窄得有时需要侧身，拱顶低得让你不自觉弯腰。手电筒的光束切开黑暗，照亮墙壁上清晰的、一道道的凿痕。这不是机器切割的冰冷光滑，而是数百年前，一个活生生的人，一锤一凿，用汗水和力气开辟出的空间。你能几乎“触摸”到那种坚韧。空气里弥漫着一种复杂的味道：陈年岩石的土腥味，隐隐约约的、仿佛渗入石头骨髓的麦芽甜香，还有一丝丝地下深处涌上来的、清冽水汽的味道。这不是博物馆里消毒后的气味，这是历史本身呼吸的味道。
这些隧道，对比尔森人来说，从来不是浪漫的探险地，而是生活的一部分。从13世纪建城开始，地下的凉爽和恒定温度，让这里成了天然的“冰箱”。每家每户都在地下拥有自己的酒窖，储存食物，更重要的是，酿造和熟成啤酒。你可以想象，中世纪的面包师、屠夫、铁匠，在结束一天劳作后，举着油脂蜡烛走下这里，检查自家木桶里啤酒的发酵情况。这里也是战乱时期的生命线。当胡斯战争或三十年战争的烽火在地面肆虐时，整座城市的妇女、儿童和补给都悄然转入地下，依靠复杂如迷宫般的通道和水井系统生存。它是一座城市的集体地窖、酿酒厂和防空洞，是荣耀与恐惧共同沉淀的隐秘层。
最打动人心的，莫过于这种极致的反差。地面上，比尔森是一座充满活力、以现代工业啤酒闻名世界的城市。而在地下仅仅几米处，却沉睡着它最原始、最私密、也最坚韧的根源。在这里，啤酒不是超市货架上的商品，而是从岩石中“生长”出来的、与生存息息相关的生活艺术。走在其中，你不仅仅是在参观一个景点，你是在行走于一座城市的集体潜意识之中，在黑暗中聆听石头诉说的、关于劳作、欢庆与幸存的故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你刚刚还在比尔森阳光明媚的共和国广场上，听着电车叮咚驶过，看着人们坐在喷泉边啜饮着金黄透亮的皮尔森之源啤酒。下一秒，你推开一扇不起眼的木门，走下几级石阶，就被一股带着泥土和古老岩石气息的阴凉空气包裹。瞬间，所有的现代喧嚣都被隔绝在外，时间仿佛坍缩了。你的眼睛需要几秒钟来适应昏暗，耳边只剩下自己的呼吸声和远处水滴落入石槽的、规律的叮咚声。这就是皮尔森历史地下城给你的初遇礼——一种沉入城市皮肤之下的恍惚感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`脚下的路是潮湿的、被无数前人磨得发亮的砂岩。隧道窄得有时需要侧身，拱顶低得让你不自觉弯腰。手电筒的光束切开黑暗，照亮墙壁上清晰的、一道道的凿痕。这不是机器切割的冰冷光滑，而是数百年前，一个活生生的人，一锤一凿，用汗水和力气开辟出的空间。你能几乎“触摸”到那种坚韧。空气里弥漫着一种复杂的味道：陈年岩石的土腥味，隐隐约约的、仿佛渗入石头骨髓的麦芽甜香，还有一丝丝地下深处涌上来的、清冽水汽的味道。这不是博物馆里消毒后的气味，这是历史本身呼吸的味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这些隧道，对比尔森人来说，从来不是浪漫的探险地，而是生活的一部分。从13世纪建城开始，地下的凉爽和恒定温度，让这里成了天然的“冰箱”。每家每户都在地下拥有自己的酒窖，储存食物，更重要的是，酿造和熟成啤酒。你可以想象，中世纪的面包师、屠夫、铁匠，在结束一天劳作后，举着油脂蜡烛走下这里，检查自家木桶里啤酒的发酵情况。这里也是战乱时期的生命线。当胡斯战争或三十年战争的烽火在地面肆虐时，整座城市的妇女、儿童和补给都悄然转入地下，依靠复杂如迷宫般的通道和水井系统生存。它是一座城市的集体地窖、酿酒厂和防空洞，是荣耀与恐惧共同沉淀的隐秘层。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，莫过于这种极致的反差。地面上，比尔森是一座充满活力、以现代工业啤酒闻名世界的城市。而在地下仅仅几米处，却沉睡着它最原始、最私密、也最坚韧的根源。在这里，啤酒不是超市货架上的商品，而是从岩石中“生长”出来的、与生存息息相关的生活艺术。走在其中，你不仅仅是在参观一个景点，你是在行走于一座城市的集体潜意识之中，在黑暗中聆听石头诉说的、关于劳作、欢庆与幸存的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮尔森历史地下城`} />
                <InfoRow label="英文名称" value={`Plzeň Historical Underground`} />
                <InfoRow label="正式名称" value={`Plzeň Historical Underground`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`比尔森`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这是中欧规模最大、结构最复杂的中世纪城市地下隧道系统之一，是比尔森作为“啤酒之都”传奇的物理基石和城市生存的隐秘命脉。`} />
                <InfoRow label="建筑特色" value={`一个由手工在砂岩层中开凿出的、深达三层、总长超过20公里的迷宫式网络，包含酒窖、水井、仓库和连接市民房屋的通道，体现了纯粹的功能性与坚韧的民间智慧。`} />
                <InfoRow label="建筑风格" value={`中世纪民用/工业功能性建筑，无特定装饰风格，其形式完全服从于储物、酿造和避难的实际需求。`} />
                <InfoRow label="文化价值" value={`它是理解中世纪欧洲城市生活、手工业（尤其是啤酒酿造）以及民众在战乱中求生智慧的独一无二的地下档案库。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`导览团全年开放，但时间表随季节变动。夏季（4月至10月）通常从上午9点至下午5点，每半小时左右发一团。冬季（11月至3月）团队次数减少，通常为上午10点、中午12点、下午2点和下午4点。每周一闭馆（除非周一是国定假日）。国定假日（如12月24-26日）开放时间特殊，务必提前在官网确认。英语导览团需提前预订，尤其是周末。`} />
              <InfoRow label="门票价格" value={`标准成人票：180捷克克朗。折扣票（学生、65岁以上长者、残疾人）：150捷克克朗。家庭票（2成人+最多3名儿童）：450捷克克朗。6岁以下儿童免费。门票价格已包含约50分钟的英语或捷克语导游服务。强烈建议在线预订并选择时间段，现场购票可能在旺季需长时间等待。持有“比尔森卡”城市通票可享受门票折扣。`} />
              <InfoRow label="地址" value={`Perlová 4, 301 00 Plzeň 3, Czechia`} />
              <InfoRow label="交通方式" value={`从布拉格瓦茨拉夫·哈维尔机场出发：最便捷方式是乘坐机场巴士（RegioJet或FlixBus）直达比尔森巴士总站，车程约1小时20分钟，班次频繁。从比尔森巴士总站或比尔森主火车站（Plzeň hlavní nádraží）出发：步行前往老城中心约15-20分钟。也可乘坐有轨电车，在“Náměstí Republiky”（共和国广场）站下车，地下城入口就在广场附近的Perlová街上。从火车站乘坐20路或2路电车可达。市内交通票可在车站自动售票机或便利店购买，单次票约20克朗。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲皮尔森地下城的故事，我们得把时钟拨回公元1295年。那一年，捷克国王瓦茨拉夫二世颁发特许状，建立了比尔森这座新城。国王的规划者们很有远见，他们给每个城镇地块的业主都分配了地下开采权。这并不是出于浪漫，而是源于一条严酷的法律：城市房屋必须用石头建造，以防火灾。石头从哪儿来？就从自家房子地底下挖。于是，一场持续数个世纪的、“自上而下”的挖掘运动开始了。每家每户都在向下开辟空间，最初只是为了获取建筑材料，但他们很快发现，这些砂岩洞穴冬暖夏凉，是绝佳的储物窖。就像地鼠打洞一样，一个互不关联的地窖网络悄然成形。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了14、15世纪，事情开始变得有趣起来。这些地窖不再仅仅是仓库。比尔森地处肥沃的农业区，拥有异常柔软纯净的水源，酿酒的天赋被点燃了。而地下恒定的低温（常年保持在8-10摄氏度），正是酿造和储存啤酒的黄金条件。酿酒师们开始有意识地扩建和连接自家的地窖。通道被拓宽，通风井被精心设计，以确保空气流通却不影响温度。慢慢地，地窖之间出现了非正式的连接，最终演变成一个庞大、有机生长的隧道系统。你可以想象，在某个酒馆地下的隧道交汇处，两个酿酒师碰头，互相品尝对方的新酿，并商量着把两家隧道打通，方便运输橡木桶。这不是国王的命令，而是民间的智慧在黑暗中悄然编织网络。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地下网络真正经受烈火考验的时代，是17世纪的三十年战争。当时，比尔森一度被瑞典军队占领。地面上是外国士兵的靴子和战火，而地下，则是另一番景象。市民们将粮食、酒桶，甚至珍贵的家庭物品都转移到了地下。复杂的通道成了游击队员和信使的秘密路径，他们像幽灵一样在敌人脚下穿行。最传奇的故事是关于一口深井。据说，被围困期间，城市正是依靠地下网络中的水井和秘密通道与外界取得联系，获得补给，才最终熬过了难关。战争让这座地下城从一个经济设施，升华为一座城市的生存象征，一个充满恐惧、希望和坚韧的集体记忆堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时移世易，到了19世纪，随着现代制冷技术的出现和城市管网的铺设，地下城逐渐被遗忘。一些入口被封闭，许多通道因年久失修而坍塌。它成了都市传说的一部分，偶尔有淘气的孩子或醉汉声称在里面迷了路。直到20世纪60年代，一次城市下水道工程偶然重新发现了部分隧道，考古学家和历史学家才像发现新大陆一样开始了系统的勘探和修复。这是一项艰巨的工作，清理淤积了几个世纪的泥沙，加固危险的穹顶，绘制出精确的地图。他们不仅修复了石头，更修复了一段被尘封的共同记忆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，我们能够安全探索的约800米路线，只是这座巨大冰山露出的一角。它被小心地照亮，铺设了步行道，但开发者们非常明智地保留了它原始、粗糙的本质。他们没有把它变成迪士尼式的奇幻乐园，而是让你真实地感受那种狭窄、潮湿和黑暗。导游会指给你看墙壁上中世纪矿工留下的记号，带你触摸依然渗水的古老水井石壁，告诉你哪一段通道在二战末期还曾被用作临时防空洞。从采石场到酿酒窖，从避难所到被遗忘的废墟，再到重见天日的文化遗产，皮尔森地下城的每一层岩石，都压印着一段欧洲普通市民为美好生活而奋斗、并在动荡中努力幸存的历史。它没有王冠珠宝，却拥有更珍贵的东西——寻常百姓家生生不息的脉搏。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的游览始于“理解上下文”。建议你先在共和国广场的地面上逛逛，喝一小杯新鲜的皮尔森之源啤酒，感受一下现代城市的脉动，这样进入地下时的反差感会更强烈。导览团全程约50分钟，但由于需要集合、穿戴装备（他们会提供保暖外套，地下常年很冷），建议你预留出至少1.5小时的总时间。游览节奏完全由导游掌控，是一个单线深入并折返的过程，没有岔路可选。正因如此，反而可以让你放松下来，专注于倾听、观察和感受，而不是忙着做选择。这是一次沉浸式的“穿越”体验，而非走马观花。选择上午或中午的团次通常人较少，体验更佳。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`地下温度恒定在10摄氏度左右，即使盛夏也寒冷潮湿，务必自带长裤和一双完全包住脚趾的结实鞋子（禁止凉鞋或高跟鞋）。里面部分通道非常低矮狭窄，有幽闭恐惧症的朋友需慎重考虑。全程禁止触摸墙壁上一些特殊的白色区域，那是用于监测结构稳定的标记，而非岩石本身。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在游客中心穿上厚重的复古外套，触摸那粗纺羊毛的质感，瞬间就有了探险者的仪式感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着狭窄的螺旋石阶向下，每一步都让你离21世纪的喧嚣更远，心跳声在静谧中被放大。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一段主通道里停下，用手触摸冰凉而粗糙的砂岩壁，寻找那些数百年前镐头留下的、倾斜的平行刻痕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导游的手电光指引下，弯腰穿过一段极其低矮的“考验通道”，亲身体会中世纪矿工日常的艰辛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在一个突然开阔的小厅里，看到古老的木制绞盘和深不见底的取水井，听水滴落下的回响持续数秒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`驻足于一个被称为“酿酒师大厅”的空间，想象这里曾经堆满橡木桶，空气中弥漫着发酵的浓郁香气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在一个隐蔽的壁龛前，听导游讲述战争时期人们如何在此藏匿粮食，石壁上可能还留有当年放置油灯的烟熏痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着逐渐向上的缓坡走回，看见前方出口透出的微光，仿佛经历了一次短暂的时空逃逸，重返人间。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`最大厅堂的拱顶仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`在导游允许停留的“酿酒师大厅”，将相机或手机紧贴地面向上仰拍，利用人工灯光勾勒出砂岩拱顶的粗犷肌理和深邃感，构图充满压迫与神圣的交织。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`狭窄通道的引导线构图`}</h4>
                  <p className="text-sm text-gray-700">{`在连接两个空间的低矮通道入口处，向后拍摄，让通道两侧的岩壁形成强烈的透视引导线，将观众的视线引向隧道尽头隐约的光亮或同行者的剪影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`古老水井边的特写与氛围`}</h4>
                  <p className="text-sm text-gray-700">{`在取水井旁，聚焦于湿漉漉的木制绞盘细节或井口生满青苔的石圈，用大光圈虚化后方的黑暗，营造出神秘而古老的故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`出口处的光影对比`}</h4>
                  <p className="text-sm text-gray-700">{`在游览结束，即将走回地面楼梯时，回身拍摄隧道尽头那扇门框住的地面世界的光亮，形成强烈的明暗与时空对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`地下光线极度昏暗且不允许使用闪光灯（会破坏氛围且惊扰其他游客），因此高感光度表现好的相机或手机是关键。建议使用大光圈镜头，并准备好三脚架或寻找稳固的岩壁作为支撑进行长时间曝光。注意相机和镜头从低温潮湿环境回到温暖地面时，容易起雾，最好提前准备好密封塑料袋。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城中心的历史酒店`}</h4>
                  <p className="text-sm text-blue-800">{`选择共和国广场周边由百年建筑改造的精品酒店，住进有挑高天花板的古典房间，晚上开窗就能听到广场上的钟声，地理位置绝佳，步行至地下城仅需3分钟。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`啤酒厂旁的特色设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`下榻由古老啤酒厂宿舍或仓库改建的现代设计酒店，房间融合了工业风的红砖墙与北欧的简约舒适，有些房间甚至拥有能看到啤酒厂烟囱的露台，将啤酒文化融入住宿体验。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静街区的家庭式公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`在老城边缘的安静街区租下一整套充满捷克风情的公寓，自己从市场买回食材在厨房烹饪，像当地人一样生活，傍晚在阳台上看着红屋顶发呆，享受慢下来的旅行节奏。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外的花园民宿`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以选择比尔森近郊村庄里的传统民宿，住在一座有美丽花园的木屋里，早晨被鸟鸣唤醒，主人会为你准备丰盛的家常早餐，体验纯粹的波西米亚乡村宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`比尔森老城区面积不大，非常安全，夜间散步也很惬意。夏季啤酒节期间（十月）和圣诞市场期间（十二月）住宿异常紧张，价格飙升，务必提前数月预订。选择酒店时，注意许多历史建筑没有电梯，如果行李沉重或行动不便，预订前最好确认。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`从地下城走出来，重新被阳光拥抱的那一刻，感觉异常奇特。眼睛需要适应光亮，皮肤感受着温度的差异，但内心那份沉静却留了很久。你刚刚用双脚丈量的，不是一段普通的观光隧道，而是一座城市沉甸甸的“根”。它让你明白，那些我们在地面上看到的华丽广场、熙攘酒馆、甚至全球闻名的金色酒液，其生命力都深深扎根于这片黑暗、潮湿、充满劳作痕迹的砂岩之中。这里没有英雄史诗，只有关于储存、酿造和躲避的平凡智慧，而这恰恰是最坚实、最动人的历史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速、光亮、喧嚣的世界里，皮尔森地下城提供了一个截然相反的维度。它邀请你慢下来，低下头，甚至弯下腰，去触碰一种原始的、未加修饰的生存状态。它告诉你，真正的深厚文化，往往不在聚光灯下，而在隐秘的角落，在寻常人家为了一桶好啤酒、为了一家老小平安而默默开凿的坚持里。每一位热爱深度游的旅人，都应该来此做一次短暂的“地下居民”。这不仅是为了了解啤酒的秘密，更是为了获得一种珍贵的视角——学会在光彩夺目的地表文明之下，去发现、尊重并感受那沉默却支撑一切的基石。这趟地心之旅，终将成为照亮你日后所有地面旅程的一盏幽灯。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lednice-valtice-cultural-landscape" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱德尼采-瓦尔季采文化景观</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lednice–Valtice Cultural Landscape</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trebic-jewish-quarter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特热比奇犹太区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jewish Quarter of Třebíč</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dolni-vitkovice-industrial-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    下
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">下维特科维采工业遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dolní Vítkovice</p>
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
