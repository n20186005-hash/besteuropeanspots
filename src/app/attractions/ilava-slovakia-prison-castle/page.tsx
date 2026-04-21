import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊拉瓦 Ilava｜探访“活着的监狱”与沉睡的老城 - 斯洛伐克最独特的对比之旅 - 最佳欧洲景点',
  description: '车子驶离高速公路，转入伊拉瓦的街道，一种奇特的安静感便笼罩下来。不是那种田园诗般的宁静，而是一种带着些许悬疑的、被注视的静谧。你的目光会不由自主地被小镇北侧那片庞大的建筑群吸引——那不是浪漫的城堡废墟，而是由高大厚实的石墙、规律得令人压抑的窗户网格、以及戒备森严的大门构成的综合体。空气中仿佛飘散着一',
}

export default function IlavaSlovakiaPrisonCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛伐克', href: '/destinations/europe' },
            { label: '伊拉瓦', href: '/destinations/europe' },
            { label: '伊拉瓦', href: '/attractions/ilava-slovakia-prison-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`伊拉瓦・Ilava・斯洛伐克・伊拉瓦`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离高速公路，转入伊拉瓦的街道，一种奇特的安静感便笼罩下来。不是那种田园诗般的宁静，而是一种带着些许悬疑的、被注视的静谧。你的目光会不由自主地被小镇北侧那片庞大的建筑群吸引——那不是浪漫的城堡废墟，而是由高大厚实的石墙、规律得令人压抑的窗户网格、以及戒备森严的大门构成的综合体。空气中仿佛飘散着一种混合了旧石头、潮湿苔藓和某种难以名状的纪律性的气味。这就是伊拉瓦给你的第一记视觉冲击：一座仍在呼吸、仍在运作的国家监狱，赫然矗立在民居与教堂之间。
然而，当你转身走进几步之遥的主广场（Námestie slobody，意为“自由广场”），画面瞬间切换。鸽子在铺路石上踱步，阳光把巴洛克式圣三一教堂的淡黄色外墙晒得暖洋洋的，几位老人坐在长椅上闲谈，声音在广场上轻轻回响。你闻到咖啡馆里飘出的烘焙香味，听到教堂偶尔传出的钟声。这里是典型的、慢节奏的斯洛伐克小镇生活图景，温暖、质朴，甚至有些慵懒。这种极端的并置——高墙铁丝网与教堂尖顶，绝对的禁锢与日常的自由——相距不过百米，构成了伊拉瓦最令人着迷也最令人不安的核心魅力。
它不是为游客准备的舞台。监狱不会为你打开大门，教堂也保持着日常的宗教功能。你来这里，仿佛是一个偶然闯入的旁观者，目睹着一场持续了数百年的、静默的对话。一边是代表国家权力、秩序与惩罚的冰冷实体，另一边是承载社区信仰、记忆与生活温暖的灵魂中心。你无法深入其中一方，却能在两者的夹缝中，感受到一种无比真实的历史质感。这里的打动人心之处，恰恰在于它的“不协调”，在于这种未经修饰的、功能性的历史层叠，逼迫你去思考建筑、权力与普通人生活之间复杂而永恒的关系。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离高速公路，转入伊拉瓦的街道，一种奇特的安静感便笼罩下来。不是那种田园诗般的宁静，而是一种带着些许悬疑的、被注视的静谧。你的目光会不由自主地被小镇北侧那片庞大的建筑群吸引——那不是浪漫的城堡废墟，而是由高大厚实的石墙、规律得令人压抑的窗户网格、以及戒备森严的大门构成的综合体。空气中仿佛飘散着一种混合了旧石头、潮湿苔藓和某种难以名状的纪律性的气味。这就是伊拉瓦给你的第一记视觉冲击：一座仍在呼吸、仍在运作的国家监狱，赫然矗立在民居与教堂之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，当你转身走进几步之遥的主广场（Námestie slobody，意为“自由广场”），画面瞬间切换。鸽子在铺路石上踱步，阳光把巴洛克式圣三一教堂的淡黄色外墙晒得暖洋洋的，几位老人坐在长椅上闲谈，声音在广场上轻轻回响。你闻到咖啡馆里飘出的烘焙香味，听到教堂偶尔传出的钟声。这里是典型的、慢节奏的斯洛伐克小镇生活图景，温暖、质朴，甚至有些慵懒。这种极端的并置——高墙铁丝网与教堂尖顶，绝对的禁锢与日常的自由——相距不过百米，构成了伊拉瓦最令人着迷也最令人不安的核心魅力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不是为游客准备的舞台。监狱不会为你打开大门，教堂也保持着日常的宗教功能。你来这里，仿佛是一个偶然闯入的旁观者，目睹着一场持续了数百年的、静默的对话。一边是代表国家权力、秩序与惩罚的冰冷实体，另一边是承载社区信仰、记忆与生活温暖的灵魂中心。你无法深入其中一方，却能在两者的夹缝中，感受到一种无比真实的历史质感。这里的打动人心之处，恰恰在于它的“不协调”，在于这种未经修饰的、功能性的历史层叠，逼迫你去思考建筑、权力与普通人生活之间复杂而永恒的关系。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`伊拉瓦`} />
                <InfoRow label="英文名称" value={`Ilava`} />
                <InfoRow label="正式名称" value={`Mesto Ilava`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`伊拉瓦`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从中世纪边境要塞直接“转型”为现代国家机器的建筑，见证了权力功能性的冷酷延续。`} />
                <InfoRow label="建筑特色" value={`厚重、封闭、带有防御工事的城堡主体，与一旁轻盈、装饰着湿壁画的巴洛克教堂钟楼形成戏剧性的视觉与功能对峙。`} />
                <InfoRow label="建筑风格" value={`以哥特式城堡为基础，历经文艺复兴加固，最终在18世纪被赋予实用主义监狱功能的混合体。`} />
                <InfoRow label="文化价值" value={`其存在本身就是一个尖锐的文化符号，生动展示了历史层叠中，建筑如何被权力重新定义，并与民间宗教生活形成触手可及的奇异共生。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城广场及圣三一教堂区域：教堂内部开放时间通常为每日上午9点至下午5点，具体可能随季节和宗教活动微调；广场全天开放。核心建筑——伊拉瓦城堡（现监狱）不向公众开放参观，仅能从外部观看。建议出行前查阅当地旅游局网站确认最新信息。`} />
              <InfoRow label="门票价格" value={`进入伊拉瓦老城广场及教堂区域免费。由于监狱城堡是仍在运作的司法设施，内部参观项目不存在，因此无门票。小镇上的小型博物馆可能需要少量门票（通常约2-3欧元）。`} />
              <InfoRow label="地址" value={`Námestie slobody 1, 019 01 Ilava，斯洛伐克`} />
              <InfoRow label="交通方式" value={`从斯洛伐克首都布拉迪斯拉发出发：在Bratislava hl.st. 主火车站乘坐前往日利纳或波普拉德方向的火车，在“Ilava”站下车，车程约1.5-2小时，班次频繁。火车站步行至老城中心约15分钟。从最近的国际机场（布拉迪斯拉发机场或维也纳机场）需先转乘火车或巴士至上述火车站。自驾则沿D1高速公路前往，在“Ilava”出口下，非常方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊拉瓦的故事，始于中世纪那条波澜壮阔的瓦赫河。这里曾是匈牙利王国重要的边境通道，控制河谷就意味着控制财富与军事命脉。大概在13世纪，一座坚固的城堡在此拔地而起，最初是皇家财产，用于征收通行税和抵御外敌。它经历过领主间的争夺，在文艺复兴时期被扩建加固，成为当地贵族舒伦堡家族的舒适宅邸。那时的城堡，虽有防御功能，但更多是权力与地位的象征，里面回荡的可能是宴会上的音乐与争辩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "命运的齿轮在18世纪发生了戏剧性的扭转。奥匈帝国时期，中央政府决定在全国范围内建立现代化的监狱体系。目光投向了伊拉瓦这座已经有些过时、但结构极其坚固的城堡。它厚实的墙壁、有限的出口、易于看守的位置，在当时的官员眼中，简直是现成的完美监狱模板。于是，一项改造工程启动：华丽的内部装饰被剥离，窗户被缩小并加装铁栏，房间被分割成狭小的牢房，城堡的功能被彻底抽空，再填入一个全新的、冰冷的灵魂——惩戒与规训。从那时起，城堡的钟声不再为宴会而鸣，而是为纪律而响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座监狱见证了近现代中欧的诸多动荡。它关押过普通的罪犯，也曾在战乱和政治清洗时期容纳过“特殊”的囚犯。二战期间，它被纳粹控制；共产主义时期，它继续作为国家监狱运作。高墙之内，是无数个人的故事被隔绝、被湮没。而与它一街之隔的圣三一教堂，则像一位沉默的守望者。它建于18世纪早期，恰好在城堡转型为监狱的前夕。它的巴洛克风格充满了向上的动感和宗教的热情，湿壁画描绘着天堂的圣景，与隔壁日益沉重、向内的建筑形成了出生即对立的命运。教堂的钟声日复一日地响起，为小镇居民标记着出生、婚礼与葬礼，对墙内的世界而言，那或许是唯一的、来自“正常”时间流逝的声音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到今天，伊拉瓦监狱仍然是斯洛伐克共和国的矫正设施之一。城堡没有再变回博物馆或酒店，它顽固地履行着它被赋予的最后一个历史职能。这种“仍在进行中”的状态，让伊拉瓦免于成为被彻底浪漫化的历史景点。它不美，甚至有些粗糙和令人却步，但正是这种真实性，让它拥有了无可替代的叙事力量。它是一本立体的史书，书页的一边写着封建领主的荣耀与没落，另一边则写着现代国家权力的形成与实施，而连接这两部分的装订线，就是小镇居民在广场上日复一日的平凡生活。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一个完整的白天（大约6-8小时）来沉浸式体验伊拉瓦。最好在上午9点左右抵达，这时小镇刚刚苏醒，阳光柔和，适合感受广场的宁静氛围。整个游览节奏应是“外围绕行”与“中心沉浸”的结合。上午先从外部多角度观察监狱城堡的体量，然后深入广场和教堂内部，体会空间的对比。午后可以探索小镇其他街巷，寻找那些能同时框住监狱与教堂的视角，最后在傍晚时分，于瓦赫河畔回望整个小镇，感受光线变化下建筑群情绪的改变。这样的安排能让你由远及近、由表及里地理解这个地方独特的空间叙事。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对不要试图接近监狱大门或对建筑内部进行拍摄，尊重其为正常运作的司法设施，保持安全距离。
穿着舒适便于步行的鞋子，因为小镇街道多为石板路，且需要从不同角度步行观察建筑。
如果对教堂内部感兴趣，最好避开周日早晨的弥撒时间，选择工作日前去会更安静。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先来到自由广场的中心，在圣三一教堂前静立，抬头感受巴洛克式山墙上那些圣像雕塑在蓝天下的剪影，然后转身，让视线越过屋顶直接落在那片灰扑扑的、带网格窗户的高墙上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开教堂厚重的木门走进去，让眼睛适应内部昏暗的光线，仔细辨认中殿拱顶上那些可能已斑驳但仍充满动感的湿壁画，聆听这里绝对的寂静，再想象一墙之外的世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场西北角的小巷穿出，沿着监狱城堡外围的街道慢行，用指尖触碰那些冰冷粗糙的巨石墙基，数一数那些规律排列的、尺寸被缩小了的窗户，体会建筑扑面而来的封闭感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家正对监狱高墙的本地小餐馆或咖啡馆（比如广场附近的“U Holuba”），点一杯斯洛伐克啤酒或咖啡，坐在户外，就着这独特的“景观”享用一顿简单的午餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后前往瓦赫河畔的散步道，从河流南岸回望整个伊拉瓦镇，看监狱建筑群如何与教堂钟楼、红色屋顶共同构成一幅极不寻常却又浑然天成的小镇天际线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果开放，可以去小镇的小型地方博物馆（在文化中心内）转转，那里或许有老地图或照片，帮你拼凑起城堡变身监狱之前已然模糊的容貌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，再次回到自由广场，坐在长椅上什么也不做，只是观察放学回家的孩子、下班的人群，看日常生活如何在这座巨大的“阴影”旁从容不迫地流淌。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣三一教堂台阶仰拍与监狱背景`}</h4>
                  <p className="text-sm text-gray-700">{`站在教堂正门前台阶下，用广角镜头仰拍教堂华丽的巴洛克立面，同时将远处监狱建筑的一角纳入画面上方，形成信仰与规训的构图对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`河对岸全景长焦压缩`}</h4>
                  <p className="text-sm text-gray-700">{`在瓦赫河南岸的步行道上，使用长焦镜头压缩空间，将监狱的连续高墙、教堂的钟楼以及中间色彩鲜艳的民居屋顶压缩进同一画面，突出它们物理上的紧密与意象上的疏离。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城小巷的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`寻找一条狭窄的、指向监狱外墙的老城小巷，利用两侧房屋形成自然的画框，将巷子尽头那面巨大、单调的监狱墙壁作为视觉终点，营造深邃与压迫感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`自由广场上的生活瞬间`}</h4>
                  <p className="text-sm text-gray-700">{`在广场的长椅区域，捕捉当地居民读书、闲聊或鸽子起飞的瞬间，以监狱高墙作为模糊的背景虚化，讲述“日常与异常”并存的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以减少广场石板路和建筑立面的反光，让色彩更饱和，尤其是在正午阳光下。`}</li>
                <li>• {`拍摄监狱外部时，尽量避免将任何警卫、岗哨或清晰的安全设施作为焦点，以建筑本身为对象，更为稳妥且尊重。`}</li>
                <li>• {`清晨或黄昏的侧光能极大增强监狱石墙的质感，同时让教堂的暖色调外墙更加温暖，是拍摄对比的黄金时间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`广场附近的Penzión Bystrica，家庭式经营，房间干净明亮，老板能告诉你许多小镇不为人知的往事，早晨在飘着咖啡香的小餐厅醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中档特色之选`}</h4>
                  <p className="text-sm text-green-800">{`特伦钦市中心的Hotel Tatra，位于邻近更大更热闹的城市，车程仅20分钟，享受完善的酒店服务后，可以轻松一日往返探索伊拉瓦，形成节奏对比。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端河景之选`}</h4>
                  <p className="text-sm text-yellow-800">{`瓦赫河上游的温泉小镇皮耶什佳尼的豪华温泉酒店，如Thermia Palace，在体验完伊拉瓦的历史沉重感后，用温暖的泉水、新艺术风格的奢华和宁静河景来放松身心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特体验之选`}</h4>
                  <p className="text-sm text-purple-800">{`寻找伊拉瓦周边村庄的农庄民宿，真正住进斯洛伐克乡村，夜晚星空如盖，白天鸡鸣狗吠，从另一种平凡的视角反思你对那座监狱小镇的观感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊拉瓦本地住宿选择有限且较为朴素，若对住宿品质有较高要求，强烈建议以车程半小时内的特伦钦或皮耶什佳尼为基地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季和节假日期间，皮耶什佳尼的温泉酒店非常紧俏，务必提前数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择民宿时，留意是否提供免费停车，这对于自驾探索周边地区非常关键。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开伊拉瓦时，你带走的可能不是明信片般的风景，而是一种复杂的、挥之不去的思绪。它不像那些精心保养的城堡或宫殿，给你直接的震撼或愉悦。它提供的，是一种更为稀有的旅行体验：一次关于历史真实性的触碰。在这里，历史没有被打扮成供人消费的模样，它就在那里，以最直白、甚至有些刺眼的方式运转着。你会意识到，历史的进程并非总是线性的“进步”或“衰落”，而常常是功能的叠加、意义的扭转，是同一堆石头承载截然相反的叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求快速打卡和极致体验的时代，伊拉瓦仿佛一个固执的异类。它不讨好你，不急于讲述一个完整流畅的故事。它只是存在着，带着它所有的矛盾与张力，要求你停下来，去看、去听、去思考。正是这种“不完美”和“未完成”，让它对于深度旅者而言，显得无比珍贵。它提醒我们，旅行不仅是去寻找他处的美好，也是去理解世界的复杂与多维。伊拉瓦教会你的，或许是如何在并置的荒谬中看到历史的逻辑，如何在冰冷的墙壁外听到生活温暖的脉搏。这趟旅程，最终审视的不仅是那座建筑，或许也是我们自身对自由、边界与权力永恒的思考。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/presov-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普雷绍夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Prešov Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/beckov-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝兹道城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Beckov Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cachtice-castle-slovakia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    恰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">恰赫季采城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cachtice Castle</p>
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
