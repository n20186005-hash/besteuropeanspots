import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯基罗斯岛 Skyros｜探秘拜占庭山顶堡垒与百年木雕技艺的隐秘天堂 - 最佳欧洲景点',
  description: '第一眼看到斯基罗斯岛的霍拉镇，你会忍不住倒吸一口凉气。那根本不是寻常意义上的小镇，而是一座从蔚蓝爱琴海中拔地而起、垂直攀附在灰色巨岩上的白色梦境。你的视线会不由自主地沿着那些层层叠叠、仿佛随时要滚落下来的白房子向上爬，最终定格在山巅那一圈褐色的、伤痕累累的巨石城墙——那就是著名的“Kastro”，堡',
}

export default function SkyrosIslandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯基罗斯岛', href: '/attractions/skyros-island' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯基罗斯岛・Skyros・希腊・斯基罗斯镇（霍拉）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到斯基罗斯岛的霍拉镇，你会忍不住倒吸一口凉气。那根本不是寻常意义上的小镇，而是一座从蔚蓝爱琴海中拔地而起、垂直攀附在灰色巨岩上的白色梦境。你的视线会不由自主地沿着那些层层叠叠、仿佛随时要滚落下来的白房子向上爬，最终定格在山巅那一圈褐色的、伤痕累累的巨石城墙——那就是著名的“Kastro”，堡垒。海风带着咸味和野生百里香的干燥香气扑面而来，耳边是永不停歇的风声、远处港口隐约的汽笛，以及叮当作响的驴铃。
走进霍拉迷宫般的巷子，脚下的石板被几个世纪的脚步磨得光滑如镜，反射着地中海刺眼的阳光。这里没有为了游客而存在的“景点”，每一条狭窄的阶梯、每一扇漆成天蓝色或墨绿色的木门后面，都是真实的生活。老奶奶坐在门前晒着太阳拆毛线，空气中飘来隔壁厨房炖煮番茄和肉桂的浓郁香味。你会突然意识到，这座堡垒不是被供奉起来的遗迹，它依然是整个社区跳动的心脏。当地人每日的采购、闲聊、节庆，依然在这些陡峭的巷道里延续，历史从未离开，只是化为了日常的呼吸。
而最打动人的，是岛上那种沉静的、手工的温度。这种温度，在那些深藏在巷弄里的木雕作坊中达到极致。推开一扇不起眼的门，木屑的清香立刻包裹了你。光线从高窗洒下，照在老师傅沟壑纵横的手上，他们正用最古老的工具，雕刻着线条繁复的橱柜、床架或椅子。斯基罗斯的木雕家具不是商品，是家族记忆的载体，每一道花纹都有故事。同样有故事的，还有岛上特有的斯基罗斯矮种马，这些毛茸茸、眼神温顺的小家伙自由地漫步在岛屿北部的松林与沙滩之间，它们是活着的图腾，象征着这座岛屿顽强的生命力与孤独的骄傲。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到斯基罗斯岛的霍拉镇，你会忍不住倒吸一口凉气。那根本不是寻常意义上的小镇，而是一座从蔚蓝爱琴海中拔地而起、垂直攀附在灰色巨岩上的白色梦境。你的视线会不由自主地沿着那些层层叠叠、仿佛随时要滚落下来的白房子向上爬，最终定格在山巅那一圈褐色的、伤痕累累的巨石城墙——那就是著名的“Kastro”，堡垒。海风带着咸味和野生百里香的干燥香气扑面而来，耳边是永不停歇的风声、远处港口隐约的汽笛，以及叮当作响的驴铃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进霍拉迷宫般的巷子，脚下的石板被几个世纪的脚步磨得光滑如镜，反射着地中海刺眼的阳光。这里没有为了游客而存在的“景点”，每一条狭窄的阶梯、每一扇漆成天蓝色或墨绿色的木门后面，都是真实的生活。老奶奶坐在门前晒着太阳拆毛线，空气中飘来隔壁厨房炖煮番茄和肉桂的浓郁香味。你会突然意识到，这座堡垒不是被供奉起来的遗迹，它依然是整个社区跳动的心脏。当地人每日的采购、闲聊、节庆，依然在这些陡峭的巷道里延续，历史从未离开，只是化为了日常的呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最打动人的，是岛上那种沉静的、手工的温度。这种温度，在那些深藏在巷弄里的木雕作坊中达到极致。推开一扇不起眼的门，木屑的清香立刻包裹了你。光线从高窗洒下，照在老师傅沟壑纵横的手上，他们正用最古老的工具，雕刻着线条繁复的橱柜、床架或椅子。斯基罗斯的木雕家具不是商品，是家族记忆的载体，每一道花纹都有故事。同样有故事的，还有岛上特有的斯基罗斯矮种马，这些毛茸茸、眼神温顺的小家伙自由地漫步在岛屿北部的松林与沙滩之间，它们是活着的图腾，象征着这座岛屿顽强的生命力与孤独的骄傲。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯基罗斯岛`} />
                <InfoRow label="英文名称" value={`Skyros`} />
                <InfoRow label="正式名称" value={`Skyros`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`斯基罗斯镇（霍拉）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`爱琴海上斯波拉泽斯群岛东南部的隐秘瑰宝，以其近乎完整保存的拜占庭-威尼斯时期山顶堡垒城镇和独特的本土文化而著称。`} />
                <InfoRow label="建筑特色" value={`白色房屋如同瀑布般从陡峭的岩石山脊倾泻而下，顶部矗立着由巨大岩石垒砌的古老堡垒遗迹，形成极具视觉冲击力的垂直聚落景观。`} />
                <InfoRow label="建筑风格" value={`基克拉迪式白房子与中世纪拜占庭、威尼斯防御工事的奇妙融合，带有强烈的爱琴海岛屿特色。`} />
                <InfoRow label="文化价值" value={`一个活着的文化博物馆，不仅保存了古老的建筑形态，更完整传承了包括手工木雕、刺绣、独特节日庆典以及与矮种马共生的传统生活方式。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`岛上全年可游览，但最佳旅行季为每年5月至10月。山顶堡垒（Kastro）遗址区域24小时开放，但建议白天游览。民俗博物馆及传统木雕作坊的开放时间较为灵活，通常为周一至周六上午10点至下午2点，下午5点至晚上8点，周日可能休息或缩短开放时间。冬季（11月至次年4月）许多旅游设施和家族作坊会进入“慢节奏”模式，建议提前联系确认。重要节假日如东正教复活节期间，岛上活动丰富但营业时间变化大。`} />
              <InfoRow label="门票价格" value={`进入斯基罗斯岛本身无需门票。拜占庭山顶堡垒遗址免费参观。斯基罗斯民俗博物馆门票约3欧元。参观私人木雕作坊通常免费，但鼓励购买手工艺品以示支持。观看或参与当地节庆活动（如狂欢节、复活节仪式）免费。骑马体验（接触斯基罗斯矮种马）费用因时长和项目而异，约30-80欧元。`} />
              <InfoRow label="地址" value={`Skyros Island, 340 07, Euboea, Greece`} />
              <InfoRow label="交通方式" value={`斯基罗斯岛相对隐秘，抵达本身就是一场探险。从雅典出发有两种主要方式：1. **飞机**：奥林匹克航空有小型螺旋桨飞机从雅典国际机场（ATH）飞往斯基罗斯岛国家机场（SKU），航程约45分钟，班次较少（通常每天1-2班），需提前数月预订。2. **渡轮+巴士**：更经典且经济的路线。先从雅典Liossion巴士总站乘坐约1.5小时长途巴士到埃维亚岛的Kymi港（班次较频繁），再从Kymi港搭乘渡轮前往斯基罗斯岛的主港Linaria，渡程约1.5-2小时。渡轮班次受天气影响，夏季较多，冬季减少。抵达Linaria港后，可搭乘出租车或本地巴士前往岛上的主要城镇霍拉（Chora），车程约20分钟。建议查询最新船期（如Skyros Shipping Company）并预留充足弹性时间。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯基罗斯岛的历史，就像它崎岖的海岸线一样层叠而复杂。早在神话时代，这里就被认为是英雄阿喀琉斯被母亲藏匿、以逃避特洛伊战争命运的地方。当然，传说为岛屿蒙上了第一层神秘的釉彩。而真正塑造了今天霍拉镇惊人风貌的，是拜占庭帝国后期那段动荡的岁月。大约从公元10世纪开始，爱琴海不再平静，海盗（尤其是阿拉伯海盗）的劫掠如同季节性的风暴。岛民为了生存，做出了一个艰难而伟大的决定：放弃沿海平坦舒适的定居点，全体迁移到这座近乎垂直的、面海背岩的险峻山丘上。他们用巨大的本地岩石，一环一环地筑起了坚固的防御城墙，这就是Kastro的起源。在山顶，你至今能触摸到那些未经雕琢、仅靠重量和智慧垒砌的墙基，那是普通人求生意志的纪念碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "堡垒的坚固，让它在随后的威尼斯人统治时期（13-15世纪）成为了重要的战略据点。威尼斯人强化了防御，增加了塔楼和更复杂的入口系统。你能在城墙的某些部分看到更规整的石砌工艺，那是威尼斯工程的印记。然而，真正有趣的融合发生在城墙之内。外来统治者带来了新的建筑理念，但本地居民在有限的、陡峭的空间里，发展出了独一无二的建筑语言：为了最大化利用空间和抵御强风，房屋紧紧相依，共用墙壁；为了采光，设计了内院和高窗；外墙粉刷成耀眼的白色以反射烈日。于是，拜占庭的防御内核，包裹上了基克拉迪式的白色肌肤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥斯曼帝国统治的数百年间，斯基罗斯因其偏远和贫瘠，反而获得了某种程度的自治与宁静。文化在此沉淀、发酵，形成了极其内向而坚韧的传统。其中，木雕艺术的兴起与岛上的自然资源息息相关。岛上缺乏优质大理石，但拥有茂密的森林。于是，心灵手巧的岛民将所有的艺术热情和家族荣耀，都倾注到了木材上。每一件陪嫁的衣柜、每一张婚床，都成为展示家族财富与品味的画布，雕刻上复杂的几何图案、花卉甚至叙事场景。这门技艺在封闭的环境中代代相传，避免了外界的同化，成为了斯基罗斯最独特的文化DNA。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "近代，随着希腊独立和航运技术的发展，岛屿逐渐与外界连接，但依然保持着强烈的个性。20世纪，它吸引了诗人、艺术家和寻求真谛的旅行者，他们被这里未被打扰的纯净所震撼。今天的霍拉，山顶的堡垒部分已然荒废，藤蔓缠绕着断壁残垣，但下方的白色城镇依然生机勃勃。古老与现代达成了一种默契的平衡：年轻人可能去了雅典工作，但老作坊里的刻刀声从未停止；游客带来了外界的气息，但傍晚时分，广场上聚集的依然是喝着希腊咖啡、玩着双陆棋的本地老人。历史在这里不是教科书的一页，而是一种仍然被使用的语言。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味斯基罗斯，你需要至少一整天的时间，并准备好你的双脚去征服那些陡峭的阶梯。建议在上午9点前抵达霍拉镇，这时阳光还比较柔和，旅游团尚未涌入。整个深度游览耗时约6-8小时，节奏宜慢不宜快，核心在于“浸泡”而非“打卡”。上午专注于探索山顶堡垒和镇子的垂直脉络，感受其防御布局的智慧；下午深入小巷，寻访手工艺作坊，并与当地的矮种马近距离接触；傍晚则留给绝美的日落和宁静的晚餐。这样的安排能让你体验到从历史沧桑到生活烟火，再到自然疗愈的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对防滑、支撑性好的徒步鞋，这里的石板路陡峭且光滑，尤其是在清晨的露水或雨后。
岛上许多木雕作坊和家庭式博物馆没有固定营业时间，看到门开着或有灯亮就大胆礼貌地询问是否可以参观，这是与当地人建立联系的最好方式。
夏季中午阳光极为暴烈，务必戴帽子、涂防晒霜，并在午后最热的时段（下午1-4点）安排室内活动或休息。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从镇子主广场的梧桐树荫下出发，沿着最显眼的主阶梯道向上，用手触摸冰凉的岩石墙壁，感受脚下坡度逐渐增加带来的心跳加速。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那道著名的、被称为“城门”的低矮石拱，瞬间从明亮的白色巷陌进入堡垒内部荒草蔓生、巨石散落的沧桑世界，仿佛跨过时空之门。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在堡垒最高点的残垣上，360度拥抱令人窒息的全景：一边是深蓝色的无垠爱琴海，另一边是岛屿内陆覆盖着松林与灌木的起伏丘陵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢下山，刻意避开主路，拐进一条仅容一人通过的侧巷，偶然发现一户人家敞着院门，院内怒放的九重葛瀑布般垂下，与白色墙壁构成绝美画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`根据时有时无的木质招牌指引，找到一家传承数代的木雕作坊，静静观看老师傅全神贯注地敲打凿刻，让松木的香气充满肺叶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午搭乘本地出租车前往岛屿北部的“矮种马之家”或相关牧场，在饲养员的陪伴下，用苹果轻轻接触那些温顺神奇的斯基罗斯矮种马柔软的鼻吻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前赶到莫洛斯湾的沙滩，找一家海滨小酒馆坐下，点一杯冰镇的乌佐酒，看着夕阳将白色小镇和山顶堡垒染成炽烈的金红色，直到星星浮现。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`堡垒东侧悬崖边`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，以荒废的威尼斯塔楼遗迹为前景框架，将镜头对准山下如积木般的白色房屋和远处波光粼粼的大海，捕捉暖色调的黄金时刻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`霍拉镇迷宫小巷的纵深`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条有强烈透视感的狭窄阶梯巷子，在正午阳光直射时拍摄，利用两侧高耸的白墙形成天然反光板，捕捉行走其中的当地人或一只慵懒的猫，营造出戏剧性的光影对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`木雕作坊的工匠肖像`}</h4>
                  <p className="text-sm text-gray-700">{`征得老师傅同意后，利用从窗户射入的侧光，聚焦于他握着刻刀的、布满岁月痕迹的双手和专注的脸庞，将木屑飞舞的瞬间定格，背景是满墙的工具和半成品。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`阿喀琉斯雕像与矮种马同框`}</h4>
                  <p className="text-sm text-gray-700">{`在岛屿的某个开阔地（如通往机场的路边），将那座现代设立的阿喀琉斯沉思雕像作为背景，前景是悠然吃草的矮种马群，用长焦镜头压缩空间，连接神话传说与现生动物的超现实感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从海上的视角拍摄霍拉全景`}</h4>
                  <p className="text-sm text-gray-700">{`如果有可能租到小船，在晴朗的早晨从海面向霍拉镇方向航行，用广角镜头拍下整座白色城镇从岩石中“生长”出来、头顶堡垒的全景，展现其惊人的地理防御姿态。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人和手工艺人时，务必先微笑并用手势征得同意，尊重他们的隐私和肖像权。`}</li>
                <li>• {`堡垒遗址区域风非常大，使用三脚架时务必注意配重，防止设备被吹倒，同时保护好镜头免受沙尘侵袭。`}</li>
                <li>• {`岛上的光线对比度极高，建议使用RAW格式拍摄，以便后期更好地恢复高光（如白色墙壁）和阴影（如深蓝门窗）的细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`藏在迷宫里的传统宅院`}</h4>
                  <p className="text-sm text-blue-800">{`预订一家由数百年历史石屋改造的精品民宿，房间拥有原始的拱形石顶和手工木雕家具，早晨被天窗洒下的阳光和远处教堂钟声唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术家之家的温馨客栈`}</h4>
                  <p className="text-sm text-green-800">{`选择一位长居岛上的画家或音乐家开设的家庭客栈，不仅住处充满个性装饰，主人还能带你探访普通游客找不到的隐秘角落和私人工作室。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`海滩边的悠闲度假屋`}</h4>
                  <p className="text-sm text-yellow-800">{`如果想兼顾探索古镇与海滩放松，可以住在莫洛斯湾或Magazia海滩附近的简约风格公寓，推窗即是大片沙滩和晶莹海水，夜晚听着浪声入眠。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居山林的生态农庄`}</h4>
                  <p className="text-sm text-purple-800">{`在岛屿内陆靠近松林的僻静处，有家庭经营的生态小农庄，提供自产食材的早餐，环境清幽，是观察鸟类和体验乡村慢生活的绝佳选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍拉镇内的住宿多为阶梯陡峭的老房子，携带大件行李会非常不便，预订时务必确认房东是否提供行李搬运协助。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）和复活节期间是绝对旺季，住宿紧张且价格高昂，建议至少提前3-4个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果追求绝对的宁静，请避免选择直接面向主广场的住宿，因为广场周边的咖啡馆和酒吧在夜晚可能会比较热闹。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开斯基罗斯岛许久之后，闭上眼，脑海里浮现的不是某一张具体的明信片风景，而是一种混合的感觉：是手指划过古老木雕纹路时的细腻触感，是矮种马湿润鼻子碰触手心时的轻柔呼吸，是站在堡垒废墟上，狂风试图带走你时脚下岩石传来的那种亘古不变的稳固。这座岛教会你的，不是关于某个遥远的历史日期，而是关于“延续”的真正含义。在这里，传统不是博物馆玻璃柜里的标本，而是老工匠手中正在成型的一把椅子扶手，是母亲教给女儿的一个刺绣针法，是社区在复活节前夜一起举着蜡烛攀登堡垒的集体记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、热衷贴标签的快节奏世界里，斯基罗斯像一座倔强的孤岛，它不试图迎合任何人。它用陡峭的阶梯考验你的诚意，用隐秘的作坊奖励你的好奇心，用旷野的风和温顺的马匹抚平你的焦虑。它告诉你，美可以如此坚韧地生长在岩石缝里，文化可以在孤独中绽放出极致芬芳。对于每一位渴望在旅行中触碰真实纹理、而不仅仅是消费风景的深度旅者而言，斯基罗斯不是一个目的地，它是一个启示。它邀请你慢下来，用双脚丈量历史，用双手感知温度，最终带走的，将是一小块沉淀在心底的、属于爱琴海古老灵魂的宁静与力量。这份礼物，足以让你在纷扰的日常中，无数次重返那片白色的山巅与湛蓝的海天之间。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mycenae-archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈锡尼考古遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Archaeological Site of Mycenae</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dodona-oracle-sanctuary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多多纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dodona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cave-of-the-apocalypse-patmoss" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拔摩岛《启示录》洞穴</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cave of the Apocalypse</p>
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
