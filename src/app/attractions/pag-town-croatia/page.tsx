import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '帕格城终极自由行指南：探秘月球盐田与国宝蕾丝的克罗地亚宝藏岛',
  description: '探索克罗地亚帕格城深度游攻略！这座位于帕格岛上的小镇，拥有威尼斯人规划的壮观盐田、如月球般荒凉的景观，以及闻名遐迩的帕格蕾丝手工艺。获取最全的打卡路线与避坑指南。',
}

export default function PagTownCroatiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '克罗地亚', href: '/destinations/europe' },
            { label: '扎达尔县', href: '/destinations/europe' },
            { label: '帕格城', href: '/attractions/pag-town-croatia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`帕格城・Pag Town・克罗地亚・扎达尔县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你觉得克罗地亚只有杜布罗夫尼克的红屋顶和斯普利特的戴克里先宫，那今天这份**帕格城私藏旅游攻略**，可要让你大开眼界了。想象一下，驱车驶过一座桥，突然闯入一个仿佛被遗忘在世界尽头的岛屿：大地是裸露的、灰白色的石灰岩，植被稀疏，风吹过发出呜咽的声响，像极了月球表面。而就在这片惊人的荒凉之中，一座由威尼斯人用尺规精心“画”出来的小镇——帕格城，安然矗立。这里藏着两样国宝：阳光下如镜面棋盘般闪耀的古老盐田，和指尖翻飞、需要极大耐心才能完成的精美帕格蕾丝。这份**自由行指南**，就带你深入这个极致反差的小镇，躲开亚得里亚海沿岸的主流人潮，体验一次真正意义上的地质与人文探险。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你觉得克罗地亚只有杜布罗夫尼克的红屋顶和斯普利特的戴克里先宫，那今天这份<strong>帕格城私藏旅游攻略</strong>，可要让你大开眼界了。想象一下，驱车驶过一座桥，突然闯入一个仿佛被遗忘在世界尽头的岛屿：大地是裸露的、灰白色的石灰岩，植被稀疏，风吹过发出呜咽的声响，像极了月球表面。而就在这片惊人的荒凉之中，一座由威尼斯人用尺规精心“画”出来的小镇——帕格城，安然矗立。这里藏着两样国宝：阳光下如镜面棋盘般闪耀的古老盐田，和指尖翻飞、需要极大耐心才能完成的精美帕格蕾丝。这份<strong>自由行指南</strong>，就带你深入这个极致反差的小镇，躲开亚得里亚海沿岸的主流人潮，体验一次真正意义上的地质与人文探险。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`帕格城`} />
                <InfoRow label="英文名称" value={`Pag Town`} />
                <InfoRow label="正式名称" value={`Pag Town`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`扎达尔县`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`帕格城的历史，是一部关于“白色黄金”——盐的史诗。早在古罗马时期，这里优越的地理位置和自然条件就已被用于晒盐。但真正赋予它今天规整城市肌理的，是15世纪中叶的威尼斯共和国。当时，为了更高效地管理和开采这至关重要的战略资源（盐在中世纪等同于货币），威尼斯人决定放弃岛上更早的聚居点，在海湾旁从头开始，按照文艺复兴时期最理想的城市规划蓝图，建造一座全新的“公司镇”。你可以把它理解为中世纪最顶尖的“工业园区”兼生活区。街道横平竖直，如同棋盘，核心的圣玛利亚教堂和公爵宫（Knežev dvor）位于中心广场，一切设计都服务于盐业生产和威尼斯的统治权威。这份规划图纸如此成功，以至于小镇的基本布局五百多年来未曾改变。它不仅是威尼斯共和国海外殖民与资源掠夺的活化石，更是文艺复兴城市规划理论在达尔马提亚沿海的一次极其罕见且保存完好的实践，其历史地位独特而珍贵。`} />
                <InfoRow label="建筑特色" value={`走在小镇的街道上，第一个冲击你的绝对是色彩——或者说，是色彩的“缺席”。这里的建筑几乎全部由本地开采的乳白色石灰岩砌成，与背后荒凉的山岩浑然一体。房屋方正、低矮、坚固，没有过多花哨的装饰，直面着亚得里亚海狂暴的Bura风。石材的表面在百年风蚀下变得粗糙而温润，在正午的阳光下泛着象牙般的光泽，而在黄昏时分则被染成蜜糖的金色。盐田是另一重建筑奇观：那是一片巨大的、被石堤分割成无数矩形格子的几何王国。当盐田注满海水，它就像一块块铺在大地上的天空之镜，倒映着流云与飞鸟；当水分蒸发，留下结晶的盐层，它又变成一片耀眼夺目的纯白冰原，与深蓝的海水、灰白的大地构成一幅极高对比度的超现实画卷。这种人类理性（规整的几何规划）与自然伟力（荒凉的地貌、阳光与海风）共同塑造的景观，极具视觉张力。`} />
                <InfoRow label="建筑风格" value={`帕格城的建筑风格可以定义为 **“达尔马提亚文艺复兴风格”**，并带有强烈的威尼斯烙印，同时因实用需求而显得格外质朴克制。文艺复兴风格在这里的体现，并非繁复的浮雕或拱廊，而首先体现在那份至今清晰可辨的理性城市布局上——那是人文主义思想对秩序和美的追求在空间上的表达。具体的建筑上，最具代表性的就是位于主广场的**圣玛利亚教堂**和与之毗邻的**公爵宫**。教堂立面的简洁线条和玫瑰窗，公爵宫带有拱券的凉廊和规整的窗户排列，都体现了文艺复兴的均衡与和谐。然而，与威尼斯本土华丽的宫殿相比，这里的建筑明显“褪去了锦衣华服”。装饰极少，线条硬朗，墙体厚实，一切为了抵御强风和适应本地材料（石头）。这种风格是威尼斯美学在严酷海岛环境下的本土化适应，形成了一种独一无二的“盐田边的简朴文艺复兴”风貌，坚固、实用，且拥有一种穿越时光的永恒美感。`} />
                <InfoRow label="文化价值" value={`帕格城对克罗地亚人而言，是坚韧与精巧的双重象征。这片土地看似贫瘠，却孕育了两种需要极致耐心与专注的“白色艺术”：晒盐与编织蕾丝。**帕格蕾丝**更是被列为联合国教科文组织非物质文化遗产。它的图案极其繁复，以当地绵羊、植物和古老的象征符号为灵感，编织一条小桌巾可能需要数月时间。这项技艺几乎全由小镇的女性传承，在丈夫出海捕鱼或照料盐田的漫长时光里，她们用细针和亚麻线，将孤独、期盼与对美的理解，一针一线地编织进永恒的图案中。如今，蕾丝不仅是重要的家庭收入来源，更是帕格岛的身份徽章。小镇的文化价值，就嵌在这种强烈的反差里：在狂风呼啸、万物难生的“月球”地表上，人类不仅靠智慧（规划盐田）生存下来，更用最纤细的指尖，创造出了极致柔美、需要静心凝视的艺术品。它向现代人展示了一种在极限环境中寻找平衡、创造美好的生命哲学。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 帕格城一日游打卡路线攻略：从盐田日出到蕾丝工坊的完美一日`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线：沉浸式体验指南`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，咱们这样安排一天，才能把帕格城的精华和节奏都体验到。**上午（沉浸自然奇观）：** 一定要赶早！趁着晨光柔和，先去小镇北面的**帕格盐田**。这是最佳拍照时间，光线梦幻，人迹罕至。你可以沿着盐田旁的土路漫步，听海水轻柔灌入渠道的汩汩声，看早起的水鸟在“天空之镜”上划过。随后回到小镇，在主广场的咖啡馆喝一杯浓咖啡，看着小镇在阳光下慢慢苏醒。**中午（探寻历史核心）：** 开始探索棋盘格般的街道。主广场上的圣玛利亚教堂和公爵宫是必看，摸摸那些被海风打磨光滑的石墙。然后，直奔**帕格蕾丝展览馆**或**蕾丝女工合作社**，亲眼见证这项神奇技艺的诞生过程，和女工匠们聊聊天。**下午（闲逛与品味）：** 午餐后，沿着海滨长廊散步，看看停泊着彩色渔船的小港口。然后钻进那些小巷，寻找售卖蕾丝和本地特产（比如著名的帕格羊奶酪）的小店。傍晚时分，登上小镇附近的**小山坡**（或就在盐田边），等待日落。当夕阳把白色的盐山、石屋和整个海湾染成粉紫色，你会明白不虚此行。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>盐田的“镜面”与“雪原”</strong>：不要只是远观，一定要走近盐田的边缘。蹲下来，你会看到浅浅的海水下，洁白的盐结晶正在池底慢慢生长，像一层细腻的冰霜。当无风时，水面平静如真正的镜子，完整地倒映出天空和你弯下腰的身影，那种天地颠倒的错觉非常奇妙。而到了收获季，堆起的盐山在阳光下闪闪发光，空气中弥漫着淡淡的、干净的咸味，触手可及的颗粒感会彻底颠覆你对“盐”的认知。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>蕾丝女工的指尖芭蕾</strong>：在蕾丝工坊，请静静观察一位女工匠的工作。她的手指快得让人眼花缭乱，几十根别针固定着一个复杂图案的雏形，细如发丝的亚麻线在针尖缠绕、打结。最动人的是她的神情——全神贯注，仿佛周围的时间都慢了下来。你可以看到图案一点点从中心向外“生长”，那些象征着海浪、羊角、生命之树的古老符号逐渐显现。那种将全部心神凝聚于毫厘之间的静谧力量，比任何成品都更震撼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>广场石缝间的“地图”</strong>：主广场的石板地历经数百年踩踏，已变得光滑如卵石。晴天正午，阳光直射下来，建筑物在广场上投下边缘锐利的深蓝色阴影。这些阴影与亮白色的石板地形成了鲜明的棋盘格图案，这恰好是威尼斯人城市规划的空中俯视图的完美映照。站在阴影与光明的交界线上，你就像是站在历史规划的坐标轴原点，一步就能跨越一个街区，这种感觉非常超现实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>面对Bura风的建筑“表情”</strong>：仔细观察街道两侧房屋的墙角、窗台和门框。你会发现很多朝北的墙面，石材的风化痕迹更重，甚至有些微微向内倾斜。这是常年抵御狂暴的Bura风留下的“伤疤”与“姿态”。有些朝风的窗户做得特别小，或用厚重的木百叶窗加固。这些细节无声地诉说着小镇与自然力量数百年的对话与抗争，让冰冷的石头建筑充满了坚韧的生命感。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>防风！防风！防风！</strong>：最重要的贴士。帕格岛以强烈的Bura风闻名，尤其是秋冬和初春。它不像普通的海风，而是寒冷、干燥、力道极猛，能吹得人站不稳。<strong>最佳游览时间是5-6月及9月</strong>，此时风相对温和，天气晴好。无论何时来，务必带一件防风防水的冲锋衣或厚风衣，帽子最好有系绳。穿裙子拍照需谨慎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>交通与时间安排</strong>：岛上公共交通有限，<strong>最推荐自驾</strong>，过桥即达，方便探索全岛。若乘坐巴士，务必提前查好从扎达尔出发的班次，并预留足够时间，因为班次可能不频繁。计划<strong>一日游</strong>完全足够，但若想体验更宁静的清晨和黄昏，建议在镇上住一晚。盐田区域广阔，步行探索需穿着舒适的鞋子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>尊重与消费提示</strong>：在盐田是<strong>生产区域</strong>，请勿随意踏入盐池或干扰作业，沿指定道路参观。购买<strong>帕格蕾丝</strong>时请理解其真正价值，一件复杂作品凝聚了数百小时工时，价格不菲。市场上有机器仿制品，想支持真正手工艺，请去正规工坊或合作社购买，并索要证书。小镇餐饮以海鲜和帕格羊羔肉为特色，价格比热门旅游城市稍低，但旺季最好提前预订餐厅。" }} />
            </div>
          </Section>

          <Section title={`6. 帕格城周边住宿与美食全攻略：住在“月球”上的独特体验`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住宿方面，帕格城内有许多由传统石屋改造的<strong>公寓和民宿</strong>，这是最地道的体验。推荐选择一栋老房子，晚上坐在厚实的石墙内，听着窗外风声，感觉特别有安全感。如果追求更现代的设施，小镇外围和沿海也有几家不错的<strong>三星级酒店</strong>。餐饮绝对是亮点。一定要试试 <strong>“Paška janjetina”</strong>，即帕格岛烤羊羔。由于羊只食用岛上有少量草药覆盖的稀疏植被，肉质带着独特的草本芳香，用慢火烤制，外皮酥脆，内里多汁，是味觉盛宴。推荐去本地人常光顾的 <strong>“Konoba Bile”</strong> 或 <strong>“Restoran Na Tale”</strong>，它们通常有面朝海湾的露台。别忘了配上一杯本地产的“荨麻酒”（Travarica）。早餐或下午茶，可以去主广场的咖啡馆，尝尝夹着帕格羊奶酪的面包。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>Šimuni 渔村</strong>：从帕格城沿西海岸向北车程约15分钟。这里比帕格城更小巧宁静，有一个美丽的卵石海滩和长长的海滨步道。你可以看到更多传统的渔船和渔夫们整理渔网的日常景象。这里的氛围更加慵懒，是看亚得里亚海日落的上佳选择，餐厅的海鲜也极为新鲜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>帕格岛“月球”景观腹地</strong>：如果你自驾，强烈建议开往岛屿的腹地。离开海岸线后，景观变得更加原始和荒凉，巨大的灰白色石灰岩地表几乎没有任何植被，散布着古老的石墙遗迹。把车停在路边，在这片寂静的“外星世界”里徒步片刻，那种与世隔绝的孤寂感和地质奇观带来的震撼，是海岸边无法体会的。记得带足水和做好防晒。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕格城的灵魂，存在于那最极致的矛盾与和谐之中：威尼斯人的理性网格，被投掷在上帝创造的狂野荒原之上；人类生存必需的粗粝盐粒，与象征着无用以美的纤柔蕾丝，竟出自同一双岛民之手。它教会我们，在最严苛的环境中，秩序与诗意不仅可以并存，还能彼此滋养，生长出一种令人肃然起敬的、坚韧而精致的生活美学。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sibenik-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cavtat" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    察
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">察夫塔特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cavtat</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hum" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡姆城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hum</p>
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
