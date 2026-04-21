import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗里堡老城深度旅游攻略：悬崖双语古城的漫步与桥梁指南',
  description: '探索瑞士弗里堡老城Fribourg，中世纪双语悬崖之城深度游攻略，涵盖桥梁、峡谷与美食指南。',
}

export default function FribourgOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '弗里堡老城', href: '/attractions/fribourg-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗里堡老城・Fribourg Old Town・瑞士・弗里堡州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，如果你厌倦了瑞士那些明信片式的“标准风景”，今天这份**弗里堡私藏旅游攻略**，就带你一头扎进一个完全不同的、充满“地心引力”的奇幻世界。想象一下：你刚走出火车站，眼前不是一马平川，而是一个巨大的、绿意盎然的萨里讷河峡谷豁然张开。峡谷两侧，密密麻麻的中世纪房屋像乐高积木一样，从谷底一直垒到悬崖顶端，上百座形态各异的古老桥梁——木头的、石头的、带顶棚的——如同纤细的神经，将这座被生生劈成“上城”与“下城”的城市连接起来。耳边飘过的是德语和法语交织的对话，空气里是河水与古老石墙的气息。这，就是弗里堡，一个用桥梁书写历史的活化石。作为你的专属向导，这份**自由行指南**将带你避开旅行团，像当地人一样，用脚步丈量这座“三维城市”的每一层肌理。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，如果你厌倦了瑞士那些明信片式的“标准风景”，今天这份<strong>弗里堡私藏旅游攻略</strong>，就带你一头扎进一个完全不同的、充满“地心引力”的奇幻世界。想象一下：你刚走出火车站，眼前不是一马平川，而是一个巨大的、绿意盎然的萨里讷河峡谷豁然张开。峡谷两侧，密密麻麻的中世纪房屋像乐高积木一样，从谷底一直垒到悬崖顶端，上百座形态各异的古老桥梁——木头的、石头的、带顶棚的——如同纤细的神经，将这座被生生劈成“上城”与“下城”的城市连接起来。耳边飘过的是德语和法语交织的对话，空气里是河水与古老石墙的气息。这，就是弗里堡，一个用桥梁书写历史的活化石。作为你的专属向导，这份<strong>自由行指南</strong>将带你避开旅行团，像当地人一样，用脚步丈量这座“三维城市”的每一层肌理。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗里堡老城`} />
                <InfoRow label="英文名称" value={`Fribourg Old Town`} />
                <InfoRow label="正式名称" value={`Fribourg Old Town`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`弗里堡州`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`弗里堡可不是一座简单的美丽老城。它成立于1157年，诞生之初就是伯尔尼地区公爵用于遏制邻邦的战略要塞。这个峡谷地形是天然的护城河，让它在冷兵器时代易守难攻。正因如此，它完整保留下了惊人的中世纪城市结构。更关键的是它的“夹缝”身份：在16世纪席卷欧洲的宗教改革风暴中，弗里堡是瑞士少数几个坚定保持天主教信仰的州之一，成了一座“信仰孤岛”。这种坚持，让它吸引了大量的修道院、神学院，塑造了其深沉、保守又充满学术气息的城市性格。同时，它地处瑞士德语区与法语区的交界线，几个世纪以来都是两种文化、语言碰撞与融合的前沿阵地。这种“双语”特性不是政策口号，而是刻在街名牌（上用法语，下用德语）、咖啡馆闲聊和教堂钟声里的日常。因此，弗里堡在欧洲历史中扮演的，是一个“坚守者”与“调和者”的双重角色，在政治的夹缝与地理的裂缝中，走出了自己独一无二的道路。`} />
                <InfoRow label="建筑特色" value={`弗里堡的建筑是一场献给“层次”与“材质”的视觉盛宴。从峡谷对岸远眺，整个城市立面如同一幅用石头、木材和瓦片绘制的巨大拼贴画。**色彩**是温润的：砂岩建筑主体是蜂蜜黄与灰褐色，历经风雨后泛出沉稳的斑驳；无数红瓦屋顶层层叠叠，在阳光下像一片片温暖的鳞片；而点睛之笔是那些墨绿色或棕色的木质百叶窗，以及阳台上盛开的鲜红天竺葵。**材质**的对话无处不在：上城的市政厅、贵族宅邸是规整的切割石材，彰显权威；下城沿河而建的工匠房屋则多用粗犷的毛石和深色木材，显得质朴亲切。最迷人的是那些**桥梁**：比如著名的“伯恩桥”，是一座长达250米的封闭式木廊桥，走在里面光线幽暗，木板在脚下发出好听的吱呀声，两侧小窗像画框，框出流动的河水和石壁。而“圣约翰桥”则是坚实的石拱桥，桥墩巨大，爬满青苔。这些建筑不是孤立的美，它们因险峻的地势而获得了一种戏剧性的立体构图，无论从哪个角度看，都充满震撼的张力。`} />
                <InfoRow label="建筑风格" value={`行走在弗里堡，你就像在翻阅一本活体的“中世纪建筑教科书”。这里的主导风格是**哥特式**，但不是巴黎那种飞升入云的凌厉，而是更敦实、更富乡土气息的“瑞士晚期哥特式”。最杰出的代表是**圣母主教座堂**，它的单塔楼设计（南塔）高达76米，像一柄石剑直刺苍穹。你可以仔细观察塔楼立面上繁复的雕像壁龛和镂空石雕，那是典型哥特式对垂直线条的痴迷。教堂内部的肋骨拱顶，将人的视线自然引向祭坛，充满神圣的升腾感。市政厅则是**文艺复兴**与当地传统的融合，其华丽的拱廊立面、对称的窗户布局，体现了文艺复兴对秩序与比例的追求。而遍布老城的民居，则更多地展现了**本土木筋墙建筑**风格，特别是在下城，你能看到大量外墙裸露着深色木构架，填充以浅色灰泥的建筑，这种风格实用、温暖，与土地紧密相连。弗里堡的建筑风格不是单一的，它是防御需求的实用主义、天主教信仰的庄严表达与普通市民生活美学的混合体，共同铸就了这座悬崖之城的独特风貌。`} />
                <InfoRow label="文化价值" value={`对今天的弗里堡人来说，这座城市不仅是家园，更是一种独特生活哲学的实体化。**双语制**是其最核心的文化基因。这里的孩子从小在双语环境中长大，大学（弗里堡大学）也是瑞士唯一一所坚持双语教学的高等学府。走在街上，你可能会在面包店听到法语点单，转角书店的橱窗里却陈列着德语小说。这种自然而然的双语切换，赋予了城市一种开放、包容且略带思辨的气质。其次，它深厚的**天主教传统**并未褪色，而是转化为一种沉静的城市节奏和丰富的文化遗产（众多的教堂、修道院、宗教艺术收藏）。同时，作为大学城，年轻学生的活力又不断注入这座古老躯体，街角的现代艺术涂鸦、热闹的学生酒吧，与寂静的修道院庭院形成有趣对话。弗里堡教会现代人的，或许正是在深刻的历史根基上，如何优雅地拥抱多元与变化，如何在“上”与“下”、“过去”与“现在”、“一种声音”与“另一种声音”之间，搭建属于自己的桥梁。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 弗里堡老城一日游打卡路线攻略：经典上下城漫步`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线：从峡谷之巅到河岸深处`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，我的自由行伙伴们，收好这份一日游路线攻略，我们这就出发！**上午（9:00-12:30）：上城的历史心脏**。建议从火车站坐2路公交到“市政厅”站下车，直接投入上城的怀抱。首先在**市政厅广场**醒醒神，看看那座华丽的文艺复兴建筑，感受城市行政中心的庄严。然后，沿着鹅卵石小路步行几分钟，抵达今天的重头戏——**圣母主教座堂**。别急着进去，先绕到教堂东侧，那里有一个绝佳的观景台，可以第一次完整俯瞰萨里讷河峡谷和密密麻麻的下城屋顶，拍照打卡必备！接着进入教堂内部，花半小时静静欣赏那些无与伦比的彩绘玻璃窗。从教堂出来，顺着指示牌轻松走到**古城墙遗址**和**防御塔楼**，触摸真正的中世纪石头，想象士兵在此巡逻的景象。**中午（12:30-14:00）：桥梁上的午餐时光**。从城墙边的小径下坡，走向**伯恩桥**。这座带顶棚的古老木桥本身就是景点，桥内甚至有小型展览。我强烈推荐在桥头或桥尾找一家能看到河景的咖啡馆或小餐馆，比如“Le Port”，点一份当地特色的**奶酪火锅**或**弗里堡香肠配土豆饼**，看着窗外河水潺潺，享受一顿“悬浮”在峡谷之上的午餐。**下午（14:00-17:30）：下城的迷宫探险**。过桥之后，你就正式进入了迷人的下城区域。这里的街道更窄，坡度更陡，充满了意外之喜。可以随意迷失在蜿蜒的小巷里，寻找那些有数百年历史的手工工坊、古董店和迷你博物馆（如“瑞士缝纫机博物馆”，很有趣！）。一定要沿着**萨里讷河岸步道**走一段，仰视你上午站过的悬崖，视角完全反转，无比震撼。最后，搭乘**“佩罗勒”缆索地铁**（世界上最后一条依靠城市污水重量驱动的水力缆车！）轻松回到上城，结束完美的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>圣母主教座堂的彩绘玻璃</strong>：这不是普通的彩色玻璃。请一定在午后阳光斜射时，站在中殿抬头看。由波兰艺术家Józef Mehoffer设计的这组现代风格彩绘玻璃（1940年代），打破了传统圣经故事叙事，用大胆的色块和抽象图案表现宗教主题。当阳光穿透，整个石头殿堂内会流淌起宝石蓝、翡翠绿和琥珀色的光河，光影在地面石板上缓慢移动，仿佛一场无声的神圣音乐会。那种古典空间与现代艺术的碰撞所带来的震撼，难以言喻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>古城墙上的“猫道”与瞭望口</strong>：在靠近“伯恩桥”上桥口的一段古城墙上，保留着原始的步行通道——“猫道”。走在上面，一侧是坚固的石墙，另一侧就是毫无遮挡的悬崖深渊。请蹲下来，从一个狭小的中世纪弓箭瞭望口望出去。你的视野瞬间被框成一幅生动的长卷：脚下是伯恩桥红色的木制屋顶，远处是下城棕色的房子，萨里讷河像一条绿丝带蜿蜒穿过。几百年前的守城士兵，看到的也是同样的景致（除了多了些现代屋顶），那一刻，时空仿佛重叠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>伯恩桥内部的“私密画廊”</strong>：这座封闭式木桥内部昏暗、悠长，弥漫着木头陈年的香气。别光顾着走路，请留意桥身内侧木板墙上悬挂的一系列古老油画和说明牌。它们静静地讲述着这座桥的历史、城市的洪水记忆以及桥梁兄弟会的故事。透过桥两侧那些小巧的、如同舷窗般的玻璃窗望出去，河流与对岸的建筑被切割成一幅幅不断变化的流动画作，安静而私密，是体验弗里堡“桥文化”的最佳方式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>下城河岸工坊的“时光胶囊”</strong>：在下城最靠近河岸的Rue de la Neuveve等小巷里，藏着一些仍在营业的传统手工工坊。比如一家小小的铁匠铺，你能听到叮叮当当的敲打声从敞开的门里传出，看到炉火的红光映在老师傅沾满煤灰的脸上。或者是一家木桶匠作坊，空气中弥漫着新鲜刨花的潮湿木头香气。这些地方几乎没有游客，它们的存在提醒着你，弗里堡不仅仅是一个博物馆，它依然是一座有呼吸、有手艺活着的城市。" }} />
            </div>
          </Section>

          <Section title={`5. 弗里堡自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>最佳时间与交通</strong>：<strong>避开</strong>周末的上午和中午，这时周边居民常来购物，主街人流较大。最佳游览时间是<strong>工作日上午或春季/秋季的午后</strong>，光线柔美，氛围宁静。从伯尔尼或洛桑坐火车到弗里堡非常方便（约20-30分钟），但请注意，老城内的景点集中但上下坡极多，<strong>穿一双绝对舒适防滑的步行鞋</strong>是头等大事！高跟鞋或硬底鞋在这里等于“刑具”。市区公交覆盖好，但探索精髓在于步行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>破解“迷路”与“腿软”</strong>：弗里堡老城道路蜿蜒起伏，极易迷路。别依赖手机地图的直线距离，因为它不会告诉你中间有十层楼高的楼梯。秘诀是：<strong>多用“上下”概念导航</strong>。想去某个地方，先问自己它在“上城”（Haut）还是“下城”（Bas）。善用城市提供的公共电梯和那条神奇的<strong>佩罗勒水力缆车</strong>（连接新城区与下城，票价低廉），它们是节省体力的神器。另外，许多小巷楼梯又陡又窄，雨天湿滑，务必小心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>财物与餐饮贴士</strong>：瑞士整体安全，但在游客集中的市政厅广场和教堂附近，仍需看管好随身物品。用餐方面，老城餐厅价格不菲。<strong>避坑</strong>方法是：可以走到大学校区附近（上城东部），那里有很多学生青睐的性价比高的小餐馆和快餐。想体验正宗当地菜，午餐选择“当日套餐”（Menu du jour/Menü des Tages）比单点划算得多。很多咖啡馆只收现金或瑞士本地借记卡，备些小额瑞士法郎现金很必要。" }} />
            </div>
          </Section>

          <Section title={`6. 弗里堡周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想沉浸式体验这座古城，建议在弗里堡住上一晚，当一日游的游客散去，夜晚的峡谷灯火与清晨的教堂钟声才是它的私藏魅力。住宿方面，上城气氛更经典。推荐<strong>Hotel du Faucon</strong>，位于一栋历史建筑内，房间古朴温馨，部分房间拥有俯瞰老城屋顶的绝美视角，早餐也很丰盛。如果想住得更具设计感，可以选<strong>Hotel de la Rose</strong>，现代舒适与古典外观结合得很好。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "餐饮是弗里堡之旅的高光。强烈推荐位于伯恩桥附近的<strong>Auberge de la Cigogne</strong>，它就在一栋历史悠久的建筑里，露台座位紧挨着悬崖边，景观无敌。必尝<strong>弗里堡奶酪火锅</strong>（Moitié-moitié），用的是本地格鲁耶尔和瓦什寒奶酪的混合，香浓不腻。配上一盘本地风干牛肉，绝了。另一道名菜是<strong>弗里堡香肠</strong>，通常搭配奶油土豆饼（Rösti）和酸菜。想吃点简单的，去下城的<strong>Café du Midi</strong>，这家老牌咖啡馆的洋葱派和自制蛋糕非常出色，氛围就像本地人的客厅。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你的脚步还有余力，弗里堡周边有两个“秘密花园”不容错过。第一个是<strong>卡塞拉特瞭望台</strong>，它不在老城核心，但绝对值得你坐一小段公交（或步行20分钟上坡）前往。这里是俯瞰整个弗里堡峡谷全景的<strong>终极位置</strong>。你会看到城市像模型一样嵌在巨大的绿色裂缝中，所有桥梁的走向、上下城的关系一目了然，尤其在日落时分，景色壮丽到令人窒息。第二个是<strong>瑞士缝纫机博物馆</strong>，听起来很 niche，但它就藏在下城一座老房子里，收藏了从古至今数百台精美的缝纫机，像一场关于机械美学的微观艺术展，小巧有趣，能让你看到弗里堡作为手工业之城被忽略的另一面。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗里堡的灵魂，在于它那种深刻的“二元融合”：德语区的严谨与法语区的浪漫在街角咖啡馆交汇；天主教的神圣肃穆与大学城的青春活力在石板路上碰撞；峡谷的险峻自然与人类巧夺天工的桥梁建筑达成和解。它不急于炫耀，只是静静地在自己的裂缝里，用一座座桥，连接起所有的对立与差异，最终形成了一种厚重、温暖、充满智慧感的独特魅力。来到这里，你不是在看风景，而是在阅读一部用石头、木头和河流写成的，关于“连接”的哲学书。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vitznau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    琉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">琉森湖畔维茨瑙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vitznau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tarasp-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔拉斯普城堡（恩嘎丁山谷的守护者）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarasp Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rapperswil-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉珀斯维尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rapperswil Castle</p>
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
