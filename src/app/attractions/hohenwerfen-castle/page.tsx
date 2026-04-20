import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '霍亨维尔芬城堡 Hohenwerfen｜耸立在阿尔卑斯山谷的“飞鹰堡”，萨尔察赫河的守护者 - 最佳欧洲景点',
  description: '车子沿着萨尔察赫河谷蜿蜒前行，两旁的阿尔卑斯山壁如同巨大的绿色屏风。然后，毫无预兆地，它就在一个拐弯后闯入了你的视野——霍亨维尔芬城堡。它不像有些城堡那样精致或浪漫，而是带着一股不容置疑的威严，从一座近乎垂直的岩石山丘顶端“生长”出来，灰白色的墙体与背后的云杉林和湛蓝天空形成强烈对比。那一瞬间，你几...',
}

export default function HohenwerfenCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '霍亨维尔芬城堡（飞鹰堡）', href: '/attractions/hohenwerfen-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`霍亨维尔芬城堡（飞鹰堡）・Hohenwerfen Castle・奥地利・韦尔芬（Werfen），萨尔茨堡州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着萨尔察赫河谷蜿蜒前行，两旁的阿尔卑斯山壁如同巨大的绿色屏风。然后，毫无预兆地，它就在一个拐弯后闯入了你的视野——霍亨维尔芬城堡。它不像有些城堡那样精致或浪漫，而是带着一股不容置疑的威严，从一座近乎垂直的岩石山丘顶端“生长”出来，灰白色的墙体与背后的云杉林和湛蓝天空形成强烈对比。那一瞬间，你几乎能听到历史的回响，混合着山谷里呼啸而过的风声。它不像是在邀请，更像是在宣告：我在这里，已经九百年了。
把车停在山脚的小镇，坐上吱呀作响的旧式索道缓缓上升，城堡在视野里变得越来越大、越来越清晰。空气中是清冷的、带着松木和岩石气息的山风。走近了，你会发现它的美是粗粝而坚实的。巨大的城门，需要仰头才能望见的垛口，还有那条跨越深堑、令人心跳加速的木制吊桥。走进庭院，时间仿佛慢了下来。这里没有维也纳宫殿的脂粉气，只有石头的冰冷触感和阳光在古老墙面上移动的光影。你可以听到清晰的、靴子踩在鹅卵石上的声音，还有从远处钟楼传来的、缓慢而沉郁的报时钟声。最动人的是，你总能看见一两只鹰隼在城堡塔楼上空盘旋，它们是这里真正的主人，为这幅静止的中世纪画卷注入了野性的生命力。
这座城堡最独一无二的灵魂，无疑是它的“居民们”——那些骄傲的猎鹰、秃鹫和猫头鹰。每天定时的鹰猎表演不是简单的马戏，而是一场穿越时空的对话。当训鹰师吹响号角，巨大的金雕展开近两米的翅膀，从高高的城垛俯冲而下，掠过观众头顶，你能感受到一股原始的力量与风压。它们在空中划出的弧线，与九百年前大主教和他的贵客们在此看到的景象，别无二致。这种活着的传统，让石头城堡不再是冰冷的博物馆，而是一个依然呼吸着的文化器官。
站在最高的塔楼平台上，360度的视野会让你忘记呼吸。一边是韦尔芬小镇色彩明丽的屋顶，像玩具一样散落在谷底；另一边是雄浑的滕嫩山脉，山峰上还积着终年不化的白雪。萨尔察赫河像一条银色的丝带，静静地从城堡脚下流过。在这个高度，喧嚣彻底退去，只剩下风和你自己的心跳。你会突然明白，为什么历代大主教要在这里建造如此坚固的堡垒——它不仅是为了防御敌人，更是为了宣示一种对这片壮丽山河的绝对主宰权，一种与天地对话的孤独与骄傲。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着萨尔察赫河谷蜿蜒前行，两旁的阿尔卑斯山壁如同巨大的绿色屏风。然后，毫无预兆地，它就在一个拐弯后闯入了你的视野——霍亨维尔芬城堡。它不像有些城堡那样精致或浪漫，而是带着一股不容置疑的威严，从一座近乎垂直的岩石山丘顶端“生长”出来，灰白色的墙体与背后的云杉林和湛蓝天空形成强烈对比。那一瞬间，你几乎能听到历史的回响，混合着山谷里呼啸而过的风声。它不像是在邀请，更像是在宣告：我在这里，已经九百年了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在山脚的小镇，坐上吱呀作响的旧式索道缓缓上升，城堡在视野里变得越来越大、越来越清晰。空气中是清冷的、带着松木和岩石气息的山风。走近了，你会发现它的美是粗粝而坚实的。巨大的城门，需要仰头才能望见的垛口，还有那条跨越深堑、令人心跳加速的木制吊桥。走进庭院，时间仿佛慢了下来。这里没有维也纳宫殿的脂粉气，只有石头的冰冷触感和阳光在古老墙面上移动的光影。你可以听到清晰的、靴子踩在鹅卵石上的声音，还有从远处钟楼传来的、缓慢而沉郁的报时钟声。最动人的是，你总能看见一两只鹰隼在城堡塔楼上空盘旋，它们是这里真正的主人，为这幅静止的中世纪画卷注入了野性的生命力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城堡最独一无二的灵魂，无疑是它的“居民们”——那些骄傲的猎鹰、秃鹫和猫头鹰。每天定时的鹰猎表演不是简单的马戏，而是一场穿越时空的对话。当训鹰师吹响号角，巨大的金雕展开近两米的翅膀，从高高的城垛俯冲而下，掠过观众头顶，你能感受到一股原始的力量与风压。它们在空中划出的弧线，与九百年前大主教和他的贵客们在此看到的景象，别无二致。这种活着的传统，让石头城堡不再是冰冷的博物馆，而是一个依然呼吸着的文化器官。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`站在最高的塔楼平台上，360度的视野会让你忘记呼吸。一边是韦尔芬小镇色彩明丽的屋顶，像玩具一样散落在谷底；另一边是雄浑的滕嫩山脉，山峰上还积着终年不化的白雪。萨尔察赫河像一条银色的丝带，静静地从城堡脚下流过。在这个高度，喧嚣彻底退去，只剩下风和你自己的心跳。你会突然明白，为什么历代大主教要在这里建造如此坚固的堡垒——它不仅是为了防御敌人，更是为了宣示一种对这片壮丽山河的绝对主宰权，一种与天地对话的孤独与骄傲。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`霍亨维尔芬城堡（飞鹰堡）`} />
                <InfoRow label="英文名称" value={`Hohenwerfen Castle`} />
                <InfoRow label="正式名称" value={`Hohenwerfen Castle (Erlebnisburg Hohenwerfen)`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`韦尔芬（Werfen），萨尔茨堡州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`萨尔茨堡大主教国南部的关键防御堡垒和权力象征，守护着通往阿尔卑斯山口的战略要道。`} />
                <InfoRow label="建筑特色" value={`依托险峻山势而建的典型高山要塞，拥有厚重的城墙、多重庭院、高耸的主楼和一座令人印象深刻的钟楼。`} />
                <InfoRow label="建筑风格" value={`以罗马式起源，历经多次哥特式和文艺复兴式改建，呈现出一种坚固、实用与后期装饰艺术相融合的独特风貌。`} />
                <InfoRow label="文化价值" value={`不仅是一座军事建筑遗迹，更是中欧地区鹰猎文化的重要保存和展示中心，生动再现了中世纪贵族的生活方式与防御艺术。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`四月至六月，九月至十月：每日上午9:30至下午5:00（最后入场下午4:00）
七月至八月：每日上午9:00至下午6:00（最后入场下午5:00）
十一月至次年三月：仅周末及节假日开放，上午9:30至下午4:00（最后入场下午3:00），工作日关闭。具体日期每年微调，需参考官网。鹰猎表演通常每天举行2-3场（旺季），时间依当日公告而定。城堡在恶劣天气（如暴雪、强风）时可能临时关闭部分区域或整个城堡。`} />
              <InfoRow label="门票价格" value={`标准成人票：20欧元（含城堡参观、鹰猎中心、武器博物馆及索道往返）。
儿童票（6-15岁）：10欧元。
家庭票（2成人+最多3名儿童）：44欧元。
仅参观鹰猎中心（不进入城堡主体）门票：15欧元。
萨尔茨堡卡（Salzburg Card）持有者可免费进入。冬季票价可能略有下调。门票建议在线提前购买以避免旺季排队，现场购票接受现金和主要信用卡。`} />
              <InfoRow label="地址" value={`Burgstrasse 2, 5450 Werfen, Austria`} />
              <InfoRow label="交通方式" value={`从萨尔茨堡出发（约50分钟）：在萨尔茨堡中央火车站（Salzburg Hauptbahnhof）乘坐开往比绍夫斯霍芬（Bischofshofen）或菲拉赫（Villach）方向的区域火车（ÖBB或SLB），在“Werfen”站下车，车程约40分钟，每小时至少一班。出站后，步行约15分钟穿过小镇即可抵达山脚下的售票处和索道站。亦可从车站乘坐出租车，约5分钟。
自驾：从萨尔茨堡沿A10/E55高速公路向南行驶约35公里，从“Werfen”出口下高速，跟随棕色“Erlebnisburg Hohenwerfen”标志行驶约5分钟即可到达停车场（付费）。
从山脚到城堡需乘坐索道（票价已含），索道运行约3分钟，也可选择沿陡峭的步道徒步上山（约20-30分钟，体力要求高）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1077年说起。那时候，神圣罗马帝国的皇帝亨利四世和教皇格里高利七世正闹得不可开交，史称“叙任权斗争”。萨尔茨堡的大主教格布哈特一世坚定地站在了教皇一边。为了对抗支持皇帝的势力，也为了保卫萨尔茨堡南部的领土和通往意大利的重要商道，他下令在萨尔察赫河畔最险要的三处地点建造城堡。霍亨维尔芬，便是这“萨尔茨堡铁三角”的南翼支柱。最初的城堡非常简陋，就是木石结构的堡垒，但它占据的地形太要命了，一夫当关，万夫莫开。格布哈特大主教可能没想到，他为了政治斗争修建的工事，会在此后几个世纪里，成为整个地区命运的关键棋子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的两三百年，城堡不断被加固、扩建。它不仅仅是个军事据点，也逐渐成为大主教行使行政和司法权力的地方。关押重要囚犯的地牢被挖得更深，存放粮食和武器的仓库建得更大。然而，真正的转折点发生在16世纪。那是一个火药开始改变战争规则的时代，古老的石墙在炮火面前显得脆弱。幸运的是，当时的大主教们很有远见，也足够有钱。他们聘请了最好的军事工程师，给霍亨维尔芬来了次“文艺复兴式”的升级改造。堡垒的墙体被加厚，适应火炮射击的棱堡和炮台被修建起来，居住的宫殿部分也变得更为舒适，甚至有了精美的壁画和雕刻。尤其是大主教马克西米利安一世，他把这里变成了一个兼具强大防御和奢华招待功能的行宫，经常在此宴请宾客，并展示他心爱的鹰猎艺术。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的命运并非一帆风顺，它见证的不仅是盛宴，还有烽烟。1525年，席卷德语区的农民战争爆发，愤怒的农民军包围了霍亨维尔芬。尽管城堡凭借天险守住了，但周边的领地遭受了巨大破坏。此后的岁月里，它先后经历了“三十年战争”的阴影和拿破仑战争的洗礼。1800年，法国军队攻占了萨尔茨堡，霍亨维尔芬也被占领并遭到了严重的破坏和洗劫。最悲惨的是19世纪初，城堡一度被废弃，沦为采石场，当地的居民甚至跑来拆取它的石头去盖自家的房子。你能想象吗？这座曾经的权力象征，几乎要被人们从地图上抹去，变成一堆散落在民宅墙基里的碎石。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的重生，带着一点浪漫的偶然性。19世纪中叶，浪漫主义思潮席卷欧洲，人们开始重新欣赏中世纪的“废墟之美”。奥地利的皇室，特别是弗朗茨·约瑟夫一世皇帝，也热衷于修复历史建筑以增强民族认同感。从1876年开始，霍亨维尔芬城堡得到了一系列的修复，不过这次的修复带上了浓重的“浪漫化”色彩——建筑师们按照当时人们对中世纪城堡的想象，添加了一些原本没有的、更具戏剧性的元素，比如那个如今成为标志的高耸钟楼。1931年，一场灾难性的大火再次重创了主楼，但奥地利人再次选择了重建。二战后，城堡归属萨尔茨堡州政府，经过精心修缮，最终在1987年向公众开放。而鹰猎中心的设立，则是画龙点睛的一笔，将城堡最鲜活的传统重新带回了它的城墙之内。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要充分感受霍亨维尔芬的魔力，请务必预留一整天时间。建议早上从萨尔茨堡出发，争取在上午10点前抵达城堡山脚。这样你可以避开中午的旅游团高峰，并赶上通常在第一场（约11点）举行的鹰猎表演——这是全天的高潮，不容错过。整体游览节奏应是“先动后静”：上午观看充满活力的鹰猎表演并快速游览城堡主要厅堂，下午则可以沉浸式地探索博物馆、登上塔楼静静欣赏风景，并在庭院里悠闲地喝杯咖啡。这样的安排既能抓住文化的精髓，又能给你足够的空间去品味城堡孤独而壮美的氛围。别忘了，上下山的索道需要时间，最后的徒步下山（如果你选择的话）也需要体力，请合理规划。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在官网查询鹰猎表演的确切时间表并规划行程，因为这是城堡体验的灵魂，错过会非常遗憾。
穿着绝对舒适防滑的徒步鞋，城堡内外的石板路和台阶大多古老且不平整，部分路段非常陡峭。
从韦尔芬火车站步行到索道站是一段缓坡，拖着大行李箱会很不便，建议将大件行李寄存在萨尔茨堡的酒店。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨乘坐索道缓缓上升，在缆车车厢里感受自己正逐渐靠近那座悬浮在空中的巨石堡垒，准备好相机捕捉它最完整的第一印象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那扇厚重的大门和令人心跳加速的木制吊桥，进入第一个庭院，立刻被四周高耸的石墙和盘旋的鹰影所包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往鹰猎表演场，选一个中间偏后的位置坐下，等待身着传统皮革装的训鹰师吹响号角，看巨大的猛禽撕裂空气从你头顶呼啸而过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`表演结束后，跟随人流进入宫殿的主楼，探索光线幽暗的骑士厅、挂着历代大主教肖像的长廊以及那个拥有华丽文艺复兴式壁炉的宴会厅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的螺旋石阶一路向上攀登，直到站上城堡最高的塔楼观景台，让360度的阿尔卑斯山谷全景像巨浪一样冲刷你的所有感官。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下到中层的武器博物馆，细细观看那些陈列在古老石室中的铠甲、长剑、火绳枪和攻城器械，用手指（如果可以）感受钢铁的冰冷与历史的重量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在黄昏降临前，绕着外围的城墙走一圈，从不同的垛口眺望下方蜿蜒的河流和远处积雪的山峰，聆听风声和归巢鸟雀的鸣叫。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧公路拐弯处的经典全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`在驾车或乘坐巴士从萨尔茨堡方向接近韦尔芬时，会有一个明显的之字形弯道，提前准备好相机，在这里可以拍到城堡雄踞于整片山岩之上、背景是连绵群山的标准明信片角度，上午顺光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`鹰猎表演场后方的石墙下`}</h4>
                  <p className="text-sm text-gray-700">{`表演开始时，猛禽经常会降落在训鹰师身后的古老石墙或木桩上，用中长焦镜头可以捕捉到鹰隼锐利的眼神与厚重历史背景的强烈对比，充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主塔楼观景台的西北角`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光会温柔地洒向滕嫩山脉和韦尔芬小镇，从这个角度俯拍，可以将城堡自身的石墙作为前景，中景是色彩斑斓的村镇屋顶，远景是壮丽的阿尔卑斯山，层次极为丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`穿越吊桥时回头拍摄入口通道`}</h4>
                  <p className="text-sm text-gray-700">{`利用吊桥的木制栏杆和铁链作为引导线，构图聚焦在后方厚重的拱形门洞以及门洞外透出的山谷光线，能拍出极具纵深感和大片氛围的“穿越”照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`骑士厅的东侧窗边`}</h4>
                  <p className="text-sm text-gray-700">{`如果有一束阳光恰好透过古老的窗棂射入昏暗的大厅，抓紧时间拍摄光线中飞舞的尘埃，以及光线在石地板和古老家具上投下的几何形光斑，充满静谧的历史感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄鹰猎表演时请务必关闭闪光灯，强烈的闪光会惊吓并可能伤害这些敏感猛禽的眼睛，这是严格禁止的。`}</li>
                <li>• {`使用长焦镜头（70-200mm或更长）能让你在不干扰表演和动物的情况下，捕捉到训鹰师与鹰隼互动的精彩特写。`}</li>
                <li>• {`城堡塔楼和城墙边缘没有现代的玻璃护栏，只有低矮的垛口，拍摄时务必注意相机和人身安全，强风天气要格外小心。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`韦尔芬小镇上的家庭旅馆“Gasthof Zur Post”，就在火车站附近，由一对老夫妻经营，房间干净温馨，早餐有自家做的果酱和新鲜面包，晚上能听到山谷的溪流声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中档特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在隔壁历史小镇哈莱因（Hallein）的“Hotel Schloss Grub”，这是一座由古老建筑改造的酒店，风格古朴，距离城堡仅一站火车，周边环境更加宁静，仿佛住在童话里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`独一无二的城堡之夜`}</h4>
                  <p className="text-sm text-yellow-800">{`预订城堡山脚下唯一的“Hotel Burg Hohenwerfen”，部分房间的窗户正对着夜晚打光的城堡，在阳台上就能欣赏到夜幕下如同悬浮在空中的梦幻堡垒，体验绝无仅有。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端山景享受`}</h4>
                  <p className="text-sm text-purple-800">{`返回萨尔茨堡，入住萨尔察赫河畔的“Hotel Sacher Salzburg”或类似五星级酒店，在一天的城堡探险后，用极致的舒适和城市夜景来舒缓身心，并享受世界级的服务。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`韦尔芬小镇住宿非常有限，夏季和秋季旺季（鹰猎表演最佳季节）必须提前数月预订，尤其是周末。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在萨尔茨堡，虽然往返需要时间，但晚餐和夜生活的选择会丰富得多，适合对住宿和餐饮要求较高的旅行者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`自驾者可以选择河谷沿线更远的特色农庄或乡间别墅，体验会更深入，但务必确认好具体位置和通往酒店的山区路况。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开霍亨维尔芬时，我的背包里好像装进了一些别的东西，不是纪念品，而是一种感觉。那是一种由石头、风声和鹰啸共同淬炼出的“坚硬”感。在这个一切都追求柔软、便捷和瞬时满足的时代，这座城堡固执地提醒着我们一些古老的品质：坚守、耐心以及与自然力量的直接对话。它不曾是皇室宫廷，没有太多缠绵悱恻的爱情传说，它的故事是关于生存、防御和掌控的。但正是这种实用性，让它显得格外真实和有力。你不会觉得它遥不可及，反而会觉得，如果生在乱世，这样的地方或许才是心灵真正的庇护所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么要把霍亨维尔芬列入你的清单？不仅仅是为了看一座山上的城堡，也不仅仅是为了那场精彩的鹰猎表演。是为了去体验一种垂直的维度——从河谷的日常生活，沿着索道或步道，攀升到一个历史与自然共同铸就的孤傲顶点。是为了在一个阳光明媚的下午，站在城垛边，什么也不想，只是感受阿尔卑斯山的风穿透你的衣衫，看鹰的影子滑过下方的森林。这种体验，能悄悄校准我们在平原地带被琐事磨损的心绪。它告诉你，世界上还有一些地方，是以百年为单位存在着，不慌不忙，而这本身，就是一种巨大的安慰和力量。专门为它绕个路，绝对值得。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bad-ischl-imperial-spa-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴德伊舍</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Ischl</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kasteel-de-haar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克莱沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel de Haar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pocitelj" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波契泰利城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Počitelj</p>
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
