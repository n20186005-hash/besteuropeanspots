import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯泰尔莫拉旅游攻略：探秘陶尔米纳之巅的鹰巢村落与火山观景台',
  description: '探索意大利西西里卡斯泰尔莫拉(Castelmola)深度游攻略。悬于陶尔米纳之上的中世纪村落，拥有俯瞰埃特纳火山的无敌视角，更有独特文化体验。包含一日游路线与避坑指南。',
}

export default function CastelmolaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '卡斯泰尔莫拉', href: '/attractions/castelmola' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯泰尔莫拉・Castelmola・意大利・西西里岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你觉得陶尔米纳已经美得令人窒息，那我必须拽着你的衣角，往更高的地方再走一步——去卡斯泰尔莫拉。这个仿佛被巨人随手安放在山顶岩石上的小村子，才是真正意义上的“天空之城”。今天这份**卡斯泰尔莫拉旅游攻略**，就是你的专属**自由行指南**。它不仅仅是陶尔米纳的一个观景台，更是一个拥有自己心跳和脾气的独立世界。在这里，你会遭遇全西西里乃至全意大利最壮丽的火山海景二重奏，也会在一家“臭名昭著”的酒吧前目瞪口呆。跟着我这份**深度游**笔记，我们一起躲开人潮，读懂这座鹰巢村落的傲慢与温柔。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你觉得陶尔米纳已经美得令人窒息，那我必须拽着你的衣角，往更高的地方再走一步——去卡斯泰尔莫拉。这个仿佛被巨人随手安放在山顶岩石上的小村子，才是真正意义上的“天空之城”。今天这份<strong>卡斯泰尔莫拉旅游攻略</strong>，就是你的专属<strong>自由行指南</strong>。它不仅仅是陶尔米纳的一个观景台，更是一个拥有自己心跳和脾气的独立世界。在这里，你会遭遇全西西里乃至全意大利最壮丽的火山海景二重奏，也会在一家“臭名昭著”的酒吧前目瞪口呆。跟着我这份<strong>深度游</strong>笔记，我们一起躲开人潮，读懂这座鹰巢村落的傲慢与温柔。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯泰尔莫拉`} />
                <InfoRow label="英文名称" value={`Castelmola`} />
                <InfoRow label="正式名称" value={`Castelmola`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`西西里岛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`卡斯泰尔莫拉的历史，是一部写在悬崖上的生存史诗。它的名字“Castelmola”源自拉丁语“Mola”（磨石），形象地描述了其城堡所在巨岩的形状。但早在古希腊时期，这里就是重要的战略据点和祭祀场所，遗迹证明当时已有居民在此崇拜神话中的双子神。真正让它声名鹊起是在中世纪，作为陶尔米纳的“头顶的利剑”，它是一座几乎无法被攻克的天然要塞。诺曼人、阿拉伯人、西班牙人都曾争夺此地，山顶的城堡废墟见证了无数次围城与坚守。它不像巴勒莫或锡拉库萨那样是舞台中心的王者，而是扮演着一位沉默而关键的守护者，居高临下，扼守着通往陶尔米纳和东部海岸的咽喉。这种“看守者”的身份，塑造了它孤高、自卫且略带疏离的气质，这种气质，至今仍流淌在村落狭窄的石巷与居民的眼神中。`} />
                <InfoRow label="建筑特色" value={`这里的建筑，是大地生长出来的。整个村子就是一块巨大的石灰岩，房屋仿佛是直接从岩石上雕刻、涂抹而成。墙面不是平整的，而是带着岩石粗粝的肌理，被刷成各种温柔的**暖色调**：蜜糖色、杏仁白、陈旧的三文鱼粉。材料极其简单：本地石材、灰泥、瓦片。几乎没有直线，街道随着山势疯狂地旋转、攀升、突然坠入一个豁然开朗的**广场**。阳台是铁艺的，缠绕着九重葛和天竺葵，红得耀眼。屋顶的瓦片历经风雨，呈现出深沉的陶土红。最妙的是，你几乎在任何一个角落，一抬头，视线都能毫无阻拦地穿透门廊、越过阳台，直接拥抱那片无垠的**碧海蓝天**，以及海天之间那沉默的巨人——埃特纳火山。建筑在这里不是主角，而是谦卑的框架，为了框住那幅世界上最昂贵的“动态壁画”。`} />
                <InfoRow label="建筑风格" value={`卡斯泰尔莫拉没有单一的建筑风格，它是一锅西西里风情的“大杂烩”，但炖煮得异常和谐。你可以看到**诺曼式**的厚重与简朴，体现在城堡残存敦实的塔楼基座上。**阿拉伯**影响无处不在，尤其是那些错综复杂、宛如迷宫、为了遮阳和防御而设计的狭窄巷弄（“Vicoli”）。更多的是一种朴素的**地中海民间巴洛克**风格在民居上体现：教堂（如圣尼古拉教堂）的外立面有着内敛的装饰线条，门口的石阶被岁月磨得光滑如玉。但这种“巴洛克”是克制的、去除了所有浮夸的，因为任何过度的装饰，在这压倒性的自然景观面前都会显得可笑。所以，这里的风格精髓是“实用主义的浪漫”：一切为了生存、为了防御、为了获取那一片观景视野而服务，却在无意中造就了极致的美学。`} />
                <InfoRow label="文化价值" value={`对于当地人而言，卡斯泰尔莫拉是身份认同的灯塔。他们自豪于“我们比陶尔米纳更高”的地理和心理位置，保持着一种略带戏谑的优越感。这里的文化生活节奏缓慢，围绕**主广场**（Piazza San Antonio）展开，咖啡馆里永远有老人在玩牌，时间仿佛黏稠的蜂蜜。而它对现代社会的最大冲击波，无疑是那家名为“巴罗·图里西”（Bar Turrisi）的**争议酒吧**。内部装饰满是与生殖器相关的木雕、绘画和器具，看似粗俗，实则源自古老的狄俄尼索斯（酒神）崇拜和生殖崇拜传统，是生命力与丰收的古老隐喻。它像一个恶作剧，粗暴地撕开了文明优雅的表象，直指人类最原始的本源。这种直白与山巅的圣洁景观形成疯狂对冲，恰恰是西西里性格最极致的体现：在神圣与世俗、美丽与荒诞、克制与奔放之间，不存在边界。它挑战游客的认知，也成为了一个文化现象，让这个小镇不再仅仅是一个观景台。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 卡斯泰尔莫拉一日游打卡路线攻略：从日出火山到星空酒吧`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行经典步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，咱们这么玩最舒服。**上午**别睡懒觉，趁大巴团还没上来，最早一班公交或自驾抵达。别急着进村，先在村外停车场附近的观景台，迎接第一缕阳光洒在埃特纳雪顶上的时刻。然后从**主城门**（Porta di Messina）进村，沿着唯一的主街Corso Umberto I慢慢逛，两旁的工艺品店值得细看。**中午**前务必抵达**圣尼古拉教堂**旁的观景平台，这是日照最佳时段，海水蓝得像宝石，拍人像最美。午餐就在广场找家露天餐馆，尝尝当地特色“Pasta alla Norma”和杏仁酒（Moscato di Castelmola）。**下午**的精华是探索城堡废墟（Castello di Castelmola），沿着指示牌走，那段路视野愈发壮阔，在废墟上你能真正体会“鹰巢”的含义。下山后，去**巴罗·图里西酒吧**喝杯咖啡或杏仁酒，感受那份文化冲击。**傍晚**是最佳摄影魔法时刻，整个村子沐浴在金色光辉中，埃特纳火山轮廓清晰。如果还有体力，可以步行沿着古老步道“Via Crucis”往下朝陶尔米纳方向走一段，回望点灯的城堡，如梦似幻。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>城堡废墟的“风之门”</strong>：在城堡废墟的最高处，有一堵残墙，中间恰好形成一个自然的门洞。穿过它，猛烈的山风会瞬间灌满你的衣衫，而眼前是毫无遮挡的270度全景：左边是蜿蜒的海岸线和陶尔米纳的希腊剧院剪影，正前方是深邃的伊奥尼亚海，右边则是庞大、安静、偶尔冒出缕缕白烟的埃特纳火山。这个天然画框，是大自然和人类遗迹共同完成的杰作，站在那里，你能听见历史在风中的呼啸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>圣尼古拉教堂的拼花大理石地面</strong>：走进略显昏暗的教堂，别只顾着看祭坛。低头看看脚下，这里保存着精美的<strong>诺曼-阿拉伯风格</strong>拼花大理石地面。几何图案繁复而神秘，在从侧面高窗射入的一束阳光下，不同颜色的大理石——奶白、深灰、暗红——会散发出温润如玉的光泽。这些石头可能来自西西里岛的不同地方，甚至更远，它们沉默地诉说着这座岛屿作为文化十字路口的往昔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>巴罗·图里西酒吧的木质天花板</strong>：就算你对里面的主题感到尴尬，也请抬头看看天花板。那里雕满了精美的<strong>葡萄藤</strong>、<strong>花朵</strong>和<strong>农业工具</strong>的图案，工艺精湛。这提醒着我们，在一切看似直白的装饰之下，核心是西西里最传统的两项生命之源：<strong>酿酒</strong>与<strong>农耕</strong>。粗犷的外表下，是匠人对生活的细腻歌颂，这种反差本身就是一个深刻的文化注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>清晨巷弄里的光影切片</strong>：请在清晨游人未至时，随意拐进一条侧巷。阳光以极低的角度切过两侧高墙，在石板路上投下锐利而明亮的<strong>光带</strong>，与深蓝色的阴影形成强烈对比。墙角的<strong>仙人掌</strong>、门边褪色的<strong>蓝漆圣母像</strong>、晾晒的<strong>白色床单</strong>，都在这一刻的光影中被赋予了戏剧性的舞台感。空气清冷，弥漫着石头和植物的气味，这是卡斯泰尔莫拉最宁静、最本真的模样。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>交通与时间选择</strong>：最大的坑是<strong>停车</strong>和<strong>大巴团</strong>。村内停车位极少且贵，推荐停在村口的大型收费停车场。最<strong>佳游览时间</strong>是4-6月、9-10月的平日，气候宜人。<strong>绝对避开</strong>7-8月周末午后，狭窄的主街会被大巴团游客淹没，体验骤降。从陶尔米纳上来可坐约半小时一班的Interbus公交车，性价比高，但注意末班车时间（通常傍晚六七点），错过就要打车下山了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与步行</strong>：务必，务必穿<strong>绝对防滑舒适的徒步鞋</strong>！这里的路全是凹凸不平的石头台阶和斜坡，穿凉鞋或皮鞋简直是自讨苦吃。同时，即使是夏季，山巅风大，傍晚也会凉，带一件防风外套或披肩。防晒霜和墨镜是必需品，高海拔加上海面反射，紫外线极其强烈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>消费与“防坑”</strong>：广场上的咖啡馆和餐厅风景好，但价格明显高于侧巷小店。如果预算有限，可以在主街中段找一家有露台的，景色差异不大。那家争议酒吧，进去点杯最便宜的咖啡或本地杏仁酒（通常送小点心）体验即可，不必消费正餐。购买纪念品时，注意那些声称是“手工制作”的陶器，很多是批量生产的，真正的本地手工品多在不起眼的小工作室里。" }} />
            </div>
          </Section>

          <Section title={`6. 卡斯泰尔莫拉周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住在卡斯泰尔莫拉本身是极致体验，但选择很少。强烈推荐一家名为“<strong>B&B Castelmola</strong>”的家庭旅馆，房间朴素但一尘不染，关键是某些房间的阳台，仿佛悬空在埃特纳火山之上，在阳台吃早餐的经历终身难忘。更实际的选择是住在山下的<strong>陶尔米纳</strong>，选择多，夜生活丰富，上下山也方便。美食方面，在卡斯泰尔莫拉必须做两件事：一是喝<strong>Moscato di Castelmola</strong>，一种甜美的麝香葡萄酒，冰镇后配杏仁饼干绝佳；二是在广场旁的“<strong>Ristorante da Cristina</strong>”或类似家庭餐馆，点一份用本地羊奶酪（Ricotta Salata）和茄子做的<strong>Pasta alla Norma</strong>，味道醇厚。别忘了试试“<strong>Granita di Mandorla</strong>”（杏仁冰沙），是炎夏的救赎。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>陶尔米纳希腊剧院</strong>：从卡斯泰尔莫拉坐车下山十分钟即到。这不仅是保存完好的古希腊遗迹，更是与卡斯泰尔莫拉形成“对视”的绝佳地点。你可以在剧院的古老石阶上，<strong>回头仰望</strong>刚才所在的鹰巢村落，感受古希腊人同样欣赏过的这幅立体全景画，完成一次跨越时空的对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>萨拉森人城堡徒步径</strong>：对于喜欢徒步的探险者，可以从卡斯泰尔莫拉城堡后方，找到一条标记清晰的古老步道，向下通往更早的<strong>萨拉森人城堡</strong>遗址。这条路更野，游客罕至，沿途是地中海灌木丛和震撼的悬崖视角，能让你用脚步丈量这片土地作为防御要塞的纵深，感受最原始的西西里山地气息。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡斯泰尔莫拉的灵魂，在于那种危险的平衡感——它在天堂与尘世、神圣与亵渎、绝美的宁静与荒诞的喧闹之间，走着一根令人屏息的钢丝。它教会你的，不是单纯的欣赏风景，而是接受世界的复杂与真实，并为之会心一笑。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/noto-baroque-town-sicily" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺托巴洛克古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Noto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cagliari-castello" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡利亚里城堡区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cagliari (Castello)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gaeta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加埃塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gaeta</p>
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
