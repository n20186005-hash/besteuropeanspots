import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卢戈古罗马城墙 Roman Walls of Lugo｜漫步世上唯一保存完整的古罗马城墙之巅 - 最佳欧洲景点',
  description: '想象一下，你站在一块被无数脚步磨得温润发亮的古老石板上，眼前是一条宽度足以并行两人的、略微起伏的步道。左边，是超过十米高、由巨大的深灰色和赭石色石块垒砌而成的坚实墙体，石缝间探出顽强的青草和小花；右边，是一道粗犷的石砌护栏，护栏之外，整个卢戈老城的红色瓦顶像温暖的波浪一样在你脚下铺展开来。这就是卢戈...',
}

export default function RomanWallsOfLugoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '卢戈古罗马城墙', href: '/attractions/roman-walls-of-lugo' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卢戈古罗马城墙・Roman Walls of Lugo・西班牙・卢戈`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你站在一块被无数脚步磨得温润发亮的古老石板上，眼前是一条宽度足以并行两人的、略微起伏的步道。左边，是超过十米高、由巨大的深灰色和赭石色石块垒砌而成的坚实墙体，石缝间探出顽强的青草和小花；右边，是一道粗犷的石砌护栏，护栏之外，整个卢戈老城的红色瓦顶像温暖的波浪一样在你脚下铺展开来。这就是卢戈城墙给你的第一击——不是仰望的震撼，而是一种奇特的、被历史托举在半空中的漫步感。风毫无阻隔地吹过，带着远处加利西亚丘陵特有的湿润草木气息，还有老城面包房飘来的淡淡黄油香。
你很快会发现，这堵墙绝非博物馆里冰冷的展品。清晨，它是当地人的露天健身步道，穿着运动服的人们从你身边轻快地跑过，向你投来友好的“Buenos días”（早上好）；午后，有老人靠在阳光最盛的墙垛边打盹，书本摊在膝头；傍晚，成群的年轻人会坐在某座塔楼的阴影里，分享一瓶啤酒，笑声和吉他声混在一起。这座城墙早已褪去战争的戾气，像一位温和的巨人，沉默地环抱着城内的生活，又为城内的人们提供了一个绝佳的、360度无死角的观景台。你行走其上，仿佛踩在时间的脊梁上，一侧是历经沧桑的过去，一侧是生机勃勃的现在。
最动人的时刻，或许是当你穿过一座狭小的原始罗马城门洞——比如圣地亚哥门——的时候。光线瞬间变暗，空气骤然阴凉，你能清晰地触摸到石块上当年凿刻的痕迹，甚至仿佛能听见罗马士兵皮靴的回响和马车车轮的轱辘声。而走出门洞的刹那，现代化的街道和咖啡馆又扑面而来。这种时空穿梭的恍惚感，在卢戈城墙的漫步中会反复出现。它不是一段被抽离的遗迹，而是深深织入城市肌理的生命线。你的每一步，都踏在历史与现实的交界线上。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你站在一块被无数脚步磨得温润发亮的古老石板上，眼前是一条宽度足以并行两人的、略微起伏的步道。左边，是超过十米高、由巨大的深灰色和赭石色石块垒砌而成的坚实墙体，石缝间探出顽强的青草和小花；右边，是一道粗犷的石砌护栏，护栏之外，整个卢戈老城的红色瓦顶像温暖的波浪一样在你脚下铺展开来。这就是卢戈城墙给你的第一击——不是仰望的震撼，而是一种奇特的、被历史托举在半空中的漫步感。风毫无阻隔地吹过，带着远处加利西亚丘陵特有的湿润草木气息，还有老城面包房飘来的淡淡黄油香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这堵墙绝非博物馆里冰冷的展品。清晨，它是当地人的露天健身步道，穿着运动服的人们从你身边轻快地跑过，向你投来友好的“Buenos días”（早上好）；午后，有老人靠在阳光最盛的墙垛边打盹，书本摊在膝头；傍晚，成群的年轻人会坐在某座塔楼的阴影里，分享一瓶啤酒，笑声和吉他声混在一起。这座城墙早已褪去战争的戾气，像一位温和的巨人，沉默地环抱着城内的生活，又为城内的人们提供了一个绝佳的、360度无死角的观景台。你行走其上，仿佛踩在时间的脊梁上，一侧是历经沧桑的过去，一侧是生机勃勃的现在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最动人的时刻，或许是当你穿过一座狭小的原始罗马城门洞——比如圣地亚哥门——的时候。光线瞬间变暗，空气骤然阴凉，你能清晰地触摸到石块上当年凿刻的痕迹，甚至仿佛能听见罗马士兵皮靴的回响和马车车轮的轱辘声。而走出门洞的刹那，现代化的街道和咖啡馆又扑面而来。这种时空穿梭的恍惚感，在卢戈城墙的漫步中会反复出现。它不是一段被抽离的遗迹，而是深深织入城市肌理的生命线。你的每一步，都踏在历史与现实的交界线上。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卢戈古罗马城墙`} />
                <InfoRow label="英文名称" value={`Roman Walls of Lugo`} />
                <InfoRow label="正式名称" value={`Roman Walls of Lugo`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`卢戈`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是罗马帝国在帝国晚期建造的宏伟军事防御工程的杰出典范，也是全世界唯一一座保存了完整原始轮廓的罗马城墙。`} />
                <InfoRow label="建筑特色" value={`一条全长超过2公里、完全闭合的巨环，拥有71座大部分保存完好的半圆形塔楼、10座城门和4段楼梯，形成了双墙结构的独特防御体系。`} />
                <InfoRow label="建筑风格" value={`经典的晚期罗马帝国军事建筑风格，注重实用性与威慑力，采用本地片岩、花岗岩等材料，见证了罗马工程技术的标准化与适应性。`} />
                <InfoRow label="文化价值" value={`它不仅是一件军事杰作，更是一个活着的城市器官，定义了卢戈的城市形态与市民生活长达一千七百年，是罗马化在伊比利亚半岛西北边疆的永恒印记。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城墙步道及公共区域全天24小时开放。但请注意，城墙上没有照明设施，日落后游览需自备光源以确保安全。城墙沿线的部分城门通道在夜间可能关闭。附属的城墙诠释中心（Centro de Interpretación da Muralla）开放时间通常为周二至周六上午10:00至下午14:00，下午16:30至19:30；周日及节假日上午11:00至下午14:00；周一闭馆。具体时间可能因季节调整，建议出行前官网二次确认。`} />
              <InfoRow label="门票价格" value={`完全免费。环绕城墙步行、攀登塔楼、穿越城门均无需任何费用。城墙诠释中心也免费入场。这是一项属于全人类的公共遗产，向所有人敞开怀抱。`} />
              <InfoRow label="地址" value={`Muralla Romana de Lugo, 27001 Lugo, Spain`} />
              <InfoRow label="交通方式" value={`卢戈有一座小型机场（Lugo Airport），但航班极少。最便捷的方式是先飞往圣地亚哥-德孔波斯特拉机场（SCQ）或拉科鲁尼亚机场（LCG）。从圣地亚哥机场出发，可以乘坐ALSA长途巴士直达卢戈汽车站，车程约1.5小时，班次频繁。从拉科鲁尼亚出发，火车和巴士都是不错的选择，火车约1小时，巴士约1.5小时。抵达卢戈后，古城被城墙完整环绕，从汽车站或火车站步行至最近的城门（如圣费尔南多门）仅需10-15分钟。城市内部步行即可，完全不需要交通工具。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从罗马帝国的扩张说起。大约在公元3世纪末，罗马帝国已显疲态，边疆不再稳固。在伊比利亚半岛西北角的这片土地上，一个名为卢库斯·奥古斯蒂（Lucus Augusti）的罗马城镇已经存在了两个多世纪。这里盛产金矿，是重要的行政和贸易中心。然而，随着帝国中央权威的削弱，来自北方和海盗的威胁日益加剧。城镇的元老和居民们感到了实实在在的不安。于是，一项雄心勃勃的防御计划被提上日程——不是扩建城市，而是为已有的城市铸造一件坚不可摧的铠甲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`决定建造城墙的，可能是一位来自罗马的工程师或地方总督，他的名字已湮没在历史中，但他的眼光和决策力留下了不朽的证明。建造过程本身就是一个奇迹。工人们就地取材，从附近的采石场运来巨大的花岗岩和片岩。为了快速建成，他们甚至拆毁了一些城外的罗马建筑，比如别墅和陵墓，将那些雕刻精美的石块也填进了墙基。这解释了为什么后来考古学家能在城墙内部发现带有铭文的墓碑碎片。城墙的设计是典型的晚期罗马军事风格：双墙结构，内外两堵墙之间用泥土和碎石填充，形成一条可供士兵快速移动的通道。那71座半圆形塔楼，不仅是为了加固，更提供了无死角的射击视野。想象一下，当这座长达2公里多、高8到12米的庞然大物在十几年内拔地而起时，对当地居民和潜在的敌人产生了何等巨大的心理威慑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城墙建成后，它经历了西哥特人、苏维汇人的时代，见证了中世纪早期的动荡。有趣的是，它并未因罗马帝国的崩溃而废弃。相反，中世纪的人们聪明地“接管”了它。城墙的轮廓限定了卢戈老城的范围，此后的教堂、广场、民居都乖乖地在它的怀抱内生长。一些罗马城门被加固，甚至加建了中世纪风格的拱门和 chapel（小礼拜堂）。城墙从纯粹的军事屏障，转变成了城市的法律边界、税收关卡和市民身份的象征。它保护了城内的人，也定义了“城内”与“城外”的世界。十六世纪后，随着火炮的出现，这样的石墙在军事上已然过时，但它作为城市标志和生活空间的功能却被保留并强化了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近代以来，城墙经历了多次修复，但最幸运的是，它奇迹般地躲过了19、20世纪许多欧洲城市为了“现代化”而疯狂拆除古城墙的浪潮。卢戈人似乎天生懂得与这座巨环共存。直到今天，当城市需要扩建时，他们选择在城墙外建设新区，小心翼翼不去触动这古老的轮廓。2000年，联合国教科文组织将卢戈罗马城墙列入世界遗产名录，给出的评语精准地道出了它的价值：“它代表了罗马帝国晚期的军事建筑，并见证了罗马权力和传统在西哥特王国时期的延续。” 这不是一座死去的废墟，而是一个持续演进了十七个世纪的、关于守护与生活的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味卢戈城墙，建议留出至少3到4个小时，采取“先外后内，环线漫步，重点深入”的策略。最佳抵达时间是清晨（9点前）或傍晚（日落前2小时）。清晨光线柔和，城墙上的本地跑步者会成为你镜头里生动的风景，且游客极少；傍晚则能捕捉到金色的夕阳为石墙和塔楼披上壮丽外衣的魔幻时刻，并见证华灯初上时古城与城墙的交相辉映。路线从最具代表性的北段开始，顺时针完整环绕一圈，途中根据兴趣下城墙探索老城核心，最后在城墙诠释中心深化认知。节奏宜慢不宜快，这是一场需要用脚丈量、用心感受的时空漫步。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双最舒服的步行鞋，城墙步道虽然平坦，但全程超过两公里且无遮挡，对脚是不小的考验。
带上水壶，城墙沿线没有商店，夏季阳光强烈，及时补水至关重要。
留意城墙诠释中心的开放时间，如果恰逢闭馆日，可以改为参观卢戈主座教堂或省博物馆，它们也从不同角度讲述着这座城市的故事。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城墙北端的“圣费尔南多门”开始你的征程，这是最常使用的主城门之一，能立刻感受到城门洞内外的时空温差。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺时针行走，在最初的五百米内集中欣赏城墙最壮观的一段，注意观察墙体上不同时期修补留下的“补丁”和顽强生长的植物生态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到东北角的“米尼奥河观景台”，一定要停下凭栏远眺，看蜿蜒的米尼奥河如何像一条玉带般环抱城墙的东侧，构成天然护城河。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“圣地亚哥门”或“新门”走下城墙，钻进老城迷宫般的小巷，目标是去主座教堂广场坐一会儿，喝杯咖啡，从内部仰望城墙的雄姿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`重新选择一个城门（比如“波尔塔菲拉门”）上墙，继续后半段的漫步，这段路更显幽静，能清晰地听到自己的脚步声和鸟鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到并攀登一座可以进入的塔楼（如靠近“医生之门”的几座），站在塔楼顶部的垛口处，体验一把古代哨兵的视野和心境。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，将城墙诠释中心作为终点，用博物馆里精致的模型、出土文物和互动展陈，为你刚刚完成的环行画上一个圆满的知识句号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果意犹未尽，就在日落时分重返西北段的城墙，看夕阳的余晖将整面石墙染成炽烈的金红色，直至星光与城内的灯火一同亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`米尼奥河畔全景`}</h4>
                  <p className="text-sm text-gray-700">{`从城外东南方向的河滨公园（Paseo do Río）用长焦镜头拍摄，清晨或黄昏时，城墙、塔楼与它们在平静河水中的完美倒影构成一幅对称的画卷。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`塔楼拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`站在一座半圆形塔楼的内部拱门下，将镜头对准门外老城的屋顶和教堂尖塔，利用石拱门形成天然的画框，层次感立刻凸显。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙步道纵深`}</h4>
                  <p className="text-sm text-gray-700">{`在游人较少的西段城墙，放低机位，沿着步道中心线拍摄，利用石板路的延伸感和两侧墙体的引导线，营造深邃的历史隧道视觉。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣地亚哥门穿越`}</h4>
                  <p className="text-sm text-gray-700">{`在门洞内部，捕捉行人或骑车人从明亮的城外走入昏暗门洞，或从门洞走向城内的瞬间剪影，光影对比极具故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`民居窗台点缀`}</h4>
                  <p className="text-sm text-gray-700">{`在老城内寻找那些阳台正对城墙的民居，以点缀着鲜花盆栽的窗台或阳台作为前景，拍摄背后厚重的城墙墙体，冷暖与刚柔对比强烈。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`黄金一小时（日出后和日落前）的光线最能体现石材质感的纹理与温暖色调，尽量避免正午顶光拍摄，画面容易生硬扁平。`}</li>
                <li>• {`尊重当地居民隐私，拍摄以城墙为主体时，如果无意中拍到居民窗户，请尽量避免或做模糊处理。`}</li>
                <li>• {`使用偏振镜可以有效减少石墙表面的反光，让色彩更加饱和，尤其是在雨后石材湿润时。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城穿越之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住紧挨着城墙内侧的百年石屋改造客栈，晚上枕着古老的石头入睡，清晨打开木窗就能伸手触摸到城墙上的苔藓。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感栖居`}</h4>
                  <p className="text-sm text-green-800">{`由老城传统民居改造的精品设计酒店，内部是极简的加利西亚风格，拥有一个隐秘的屋顶露台，可以一边享用早餐一边俯瞰城墙的蜿蜒曲线。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城门边的家常`}</h4>
                  <p className="text-sm text-yellow-800">{`位于一座罗马城门旁的家族经营旅馆，老板娘会热情地告诉你只有本地人才知道的城墙观景角落，房间简朴但充满家的温暖。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城外宁静庄园`}</h4>
                  <p className="text-sm text-purple-800">{`如果你追求绝对宁静，可以选择坐落在城外公路上、被橡树林环绕的乡村庄园酒店，从高处远眺被城墙完整勾勒出的古城全景，夜景尤为震撼。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿通常由古老建筑改造，隔音可能一般，但氛围无可替代，请根据自己对睡眠环境的要求选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`卢戈治安非常好，即使夜晚独自在城墙或老城散步也很安全，但基本的旅行警惕心仍需保持。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季旅游旺季和每年十月的圣弗罗伊兰节期间住宿非常紧张，务必提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卢戈许久后，我发现自己最常回忆起的，不是某一块特定的石头或塔楼，而是那种“行走在边界上”的奇妙感受。这堵墙是一道物理的边界，分隔了城内与城外；它也是一道时间的边界，左手边是公元三世纪的罗马帝国，右手边是二十一世纪的咖啡香气。但它最了不起的地方在于，它从未真正“分隔”什么，而是成为了一种“连接”的媒介。它连接了过去与现在，连接了军事与生活，连接了遗产与日常。在这个我们习惯于建造又迅速拆除、追求崭新却轻易遗忘的时代，卢戈城墙展示了一种截然不同的智慧：如何与历史共存，如何让古老的躯体注入新的生命。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来卢戈走一走这圈城墙。它不像其他宏伟古迹那样需要你仰视到脖颈酸痛，它邀请你平视，邀请你并肩而行，邀请你成为它漫长生命中的一个瞬间的见证者。当你走完这完整的一圈，你会理解，真正的永恒不在于永不改变，而在于拥有包容一切变化的胸怀。这圈沉默的石环，教会我们的或许正是这种温柔而坚定的力量。它就在那里，不喧哗，自有声；不追赶时间，却成为了时间本身。这趟漫步，是一场与时空达成的温柔和解。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/jaen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈恩古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jaén Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/girona" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫罗纳古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Girona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/caceres-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡塞雷斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cáceres</p>
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
