import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格兰纳旅游攻略：拐杖糖故乡的童话湖滨漫步指南',
  description: '探寻瑞典格兰纳(Gränna)深度游攻略：世界闻名的拐杖薄荷糖发源地，韦特恩湖畔的彩色木屋小镇与陡峭观景崖，一份详尽的自由行指南带你体验童话。',
}

export default function GrannaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞典', href: '/destinations/europe' },
            { label: '延雪平省', href: '/destinations/europe' },
            { label: '格兰纳', href: '/attractions/granna' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格兰纳・Gränna・瑞典・延雪平省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果让我推荐一个能瞬间治愈所有烦恼的瑞典小镇，格兰纳绝对排在首位。它就像一颗被上帝不小心掉落在韦特恩湖边的彩色糖果，甜蜜、明亮，又不失北欧的宁静。今天这份**格兰纳私藏旅游攻略**，就是你的专属向导。我们将避开那些千篇一律的旅行团路线，从斯德哥尔摩或哥德堡出发，搭乘火车或自驾，轻松抵达这个梦幻之地。在这里，你不仅能亲眼看到、亲手制作那风靡全球的红白拐杖薄荷糖，还能漫步在如乐高积木般错落有致的彩色木屋间，最后爬上令人腿软的观景崖，将整个瑞典第二大湖的壮丽尽收眼底。这份**自由行指南**，会带你深入这个甜蜜王国的每一个角落。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果让我推荐一个能瞬间治愈所有烦恼的瑞典小镇，格兰纳绝对排在首位。它就像一颗被上帝不小心掉落在韦特恩湖边的彩色糖果，甜蜜、明亮，又不失北欧的宁静。今天这份<strong>格兰纳私藏旅游攻略</strong>，就是你的专属向导。我们将避开那些千篇一律的旅行团路线，从斯德哥尔摩或哥德堡出发，搭乘火车或自驾，轻松抵达这个梦幻之地。在这里，你不仅能亲眼看到、亲手制作那风靡全球的红白拐杖薄荷糖，还能漫步在如乐高积木般错落有致的彩色木屋间，最后爬上令人腿软的观景崖，将整个瑞典第二大湖的壮丽尽收眼底。这份<strong>自由行指南</strong>，会带你深入这个甜蜜王国的每一个角落。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格兰纳`} />
                <InfoRow label="英文名称" value={`Gränna`} />
                <InfoRow label="正式名称" value={`Gränna`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`延雪平省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看格兰纳现在像个甜蜜的童话镇，它的历史地位可一点也不“甜腻”。它真正的全球声誉，始于19世纪中期一位名叫波尔·艾曼纽尔·林德的老爷爷。当时他只是想制作一些普通的薄荷糖来缓解孩子们的胃痛，却在无意中将糖浆做成了弯曲的拐杖形状，并赋予了它标志性的红白条纹。这个“美丽的意外”，让格兰纳一跃成为**“拐杖薄荷糖（Polkagrisar）”的诞生地**，一个美食传奇的源头。直到今天，小镇上依然有家族世代传承着最原始的手工制作技艺。除此之外，格兰纳还是瑞典著名热气球探险家萨洛蒙·奥古斯特·安德烈的故乡。1897年，他就是从这里驾驶着“鹰号”热气球飞向北极，虽然最终未能成功，但其探险精神深深烙印在小镇的灵魂里。因此，格兰纳不仅是甜蜜的代名词，也承载着瑞典人勇于探索、敢于创新的历史脉搏。`} />
                <InfoRow label="建筑特色" value={`格兰纳的建筑，是一场献给眼睛的甜蜜盛宴。小镇中心的主街和蜿蜒小巷两旁，矗立着一栋栋保存完好的18、19世纪传统木屋。它们的色彩大胆而和谐：明艳的瑞典黄（Falu red）、沉稳的赭石红、温柔的鹅蛋黄、清新的水蓝色，还有纯洁的雪白色。每一栋房子都像一块巨大的、被精心雕琢的糖块。走近看，木质外墙的纹理清晰可见，经过岁月的打磨，泛着温润的光泽。白色的窗框勾勒出方正的轮廓，窗台上必定点缀着盛开的鲜艳天竺葵或矮牵牛，在北欧清澈的阳光下，与房子的主色块形成活泼的对比。许多房屋的屋檐下还有精致的木雕装饰，图案简单而古朴。当你在小巷中穿行，阳光从陡峭的屋顶斜面切下，在这些高饱和度的墙面上投下清晰的光影分界线，空气中仿佛都漂浮着糖浆和木头混合的、温暖而香甜的气息。`} />
                <InfoRow label="建筑风格" value={`这里的建筑风格是经典的**瑞典乡村木构建筑**，属于北欧传统建筑的范畴。它最大的特点是实用、坚固，并与自然环境高度融合。为了抵御漫长严寒的冬季，房屋结构紧凑，墙壁厚实，窗户通常不大但数量多，以在短暂的夏日最大限度地引入阳光。鲜明的色彩并非仅仅为了美观，更有着实际用途：传统的“法鲁红”颜料来源于法鲁铜矿的副产品，含有矿物质，能很好地保护木材免受风雨侵蚀；而其他明亮的颜色，则是在物质相对匮乏的年代，人们用以点亮漫长灰暗冬季的精神慰藉。在格兰纳，这种风格被发挥到了极致。屋顶坡度很陡，便于积雪滑落。建筑线条简洁利落，几乎没有繁复的巴洛克或洛可可装饰，体现着北欧人崇尚的“Lagom”（恰如其分）生活哲学——足够美好，却不过度。走在其中，你能感受到一种直抵人心的、充满生活气息的质朴美感。`} />
                <InfoRow label="文化价值" value={`格兰纳的文化价值，早已深深嵌入瑞典乃至全球的日常生活。那颗小小的红白拐杖糖，不仅仅是圣诞节的象征，更成为一种跨越国界的甜蜜语言，代表着家的温暖、节日的喜悦和童年的回忆。小镇上的几家老字号糖果工坊（如 Gränna Polkagriskokeri），不仅是旅游景点，更是活态的文化博物馆。工匠们当着游客的面熬糖、拉糖、剪糖，这一过程本身就是一场引人入胜的文化表演，传承着超过150年的手工艺精神。对于当地人而言，这些彩色木屋和糖果产业是他们身份认同的核心。小镇的宁静与美丽，也诠释了瑞典人“亲近自然”（Allemansrätten）的生活理念——每个人都有权自由享受大自然。无论是湖边散步，还是崖顶眺望，这种与壮丽湖景的无障碍连接，是格兰纳馈赠给每一位访客的最珍贵的文化体验：学会在简单和美好中，找到幸福的真谛。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 格兰纳一日游完美打卡路线攻略：从甜蜜工坊到悬崖之巅`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行游览时间线与核心看点`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，咱们这样安排一天，保准充实又不赶路。**上午（10:00-12:30）**：把车停在小镇外围（镇中心路窄停车难），步行进入。第一站直奔**Brahegatan主街**，从著名的“格兰纳糖果厨房”开始你的甜蜜探索。看一场完整的手工制糖表演，记得买一根新鲜出炉、还是温热的拐杖糖，边舔边逛。顺着主街慢慢走，两旁的糖果店、工艺品店和咖啡馆都值得一瞥。**中午（12:30-14:00）**：找一家能看到湖景的咖啡馆或餐厅（比如湖畔的Hotel Gyllene Uttern餐厅）享用午餐，尝尝经典的瑞典肉丸或韦特恩湖鲜鱼。**下午（14:00-17:00）**：这是重点！饭后消食，开始向小镇后方的**观景崖（Utsiktsberget）** 进发。沿着清晰标识的步道徒步上山，路程约20-30分钟，有些路段较陡，请穿好走的鞋。登顶后的豁然开朗是对所有辛苦的最佳奖赏。在崖顶的长椅上坐一会儿，静静欣赏韦特恩湖的浩瀚。下山后，可以逛逛小镇的博物馆，如安德烈探险博物馆。**傍晚（17:00以后）**：在湖滨散步，等待一场可能出现的、粉紫色的北欧日落，为这童话般的一天画上句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>糖果工坊的“拉糖之舞”</strong>：一定要挤到糖果制作台的前排。看老师傅将一大团冒着热气的、晶莹的糖膏挂在钩子上，像对待最柔韧的面团一样反复拉伸、折叠、拧转。当糖条被拉成手臂粗细、红白条纹均匀如大理石纹理时，那种流畅的力量感近乎一场舞蹈。最后，“咔嚓”一声脆响，用大剪刀精准地剪成一根根拐杖糖的弧线，空气中瞬间爆开一股强烈的薄荷清凉和焦糖甜香，这感官记忆会跟随你很久。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>某条无名小巷的彩色墙壁</strong>：离开主街，随意拐进一条安静的上坡小巷。选一面被太阳晒得暖洋洋的明黄色山墙，静静看一会儿。你会发现墙上的木板纹理深浅不一，白色窗框的阴影投在上面，切割出几何图形。一只肥硕的蜜蜂可能正嗡嗡围着窗台上的红色天竺葵打转。这一刻，没有游客的嘈杂，只有木板轻微的咯吱声和远处湖鸥的鸣叫，你会感觉自己像闯进了一幅静止的、充满生命力的油画。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>观景崖顶的“上帝视角”</strong>：当你气喘吁吁爬完最后一段陡峭的石阶，站稳在悬崖边缘的观景台时，准备好接受震撼吧。正前方，韦特恩湖的蓝广阔无垠，像一块巨大的、微微起伏的绸缎，一直铺向天际线。阳光下，湖面闪烁着亿万片细碎的银麟。俯瞰脚下，整个格兰纳小镇如同一个被精心打开的玩具盒子：那些彩色的小木屋变成了一块块可爱的积木，红色屋顶像草莓糖，黄色墙面像柠檬糖，整齐地排列在墨绿色的森林边缘和蔚蓝的湖岸线之间。风声在耳边呼啸，却让眼前这幅宁静的画面更加磅礴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>老糖果店玻璃罐里的虹彩</strong>：走进任何一家老糖果店，不要只看柜台。留意那些摆在木架上、装满各式手工糖果的大玻璃罐。阳光透过橱窗照射进来，穿过玻璃罐和里面五颜六色的糖果（粉色的草莓味、浅绿的苹果味、棕色的巧克力味……），在深色的木地板上投下一片朦胧的、彩虹般的光斑。这光影游戏简单却梦幻，是小镇甜蜜内核最静态、也最迷人的视觉注解。" }} />
            </div>
          </Section>

          <Section title={`5. 格兰纳自由行避坑指南与行前须知：让甜蜜之旅零遗憾`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间选择与人流规避</strong>：夏季（6-8月）是旺季，尤其是周末，小镇会涌入大量瑞典本土度假者和一日游旅行团。<strong>最佳游览时间是5月、9月的平日</strong>，气候依旧舒适，色彩斑斓，且能享受宁静。如果想看夏季繁花，那就尽量<strong>早上10点前抵达</strong>，抢占停车场和糖果工坊的观看先机。旅行团大多在中午前后到达。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与装备</strong>：千万不要为了拍照好看穿不合适的鞋！<strong>攀登观景崖需要一双防滑、支撑好的徒步鞋或运动鞋</strong>，部分路段是碎石土路且坡度大。即使夏天，湖风也可能很大，崖顶更甚，带一件防风外套或薄羽绒背心是明智之举。瑞典天气多变，雨伞或防水冲锋衣常备无患。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>关于“甜蜜的负担”</strong>：糖果虽好，不宜多买。手工拐杖糖非常易碎，长途旅行携带不便。建议少量购买即时品尝，或选择一些密封包装的硬糖作为手信。镇上所有店铺和餐厅基本都接受信用卡，无需兑换大量现金。自驾请注意，小镇中心道路狭窄，多为单行道，请严格按标识行驶和停车，避免停入居民私人区域。" }} />
            </div>
          </Section>

          <Section title={`6. 格兰纳及韦特恩湖畔住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想真正融入这片湖光山色，建议在镇上或湖边住一晚。<strong>Hotel Gyllene Uttern</strong> 是地标性的选择，这座建于19世纪的童话城堡酒店坐落在湖畔，拥有绝佳的湖景和经典复古的室内装饰，仿佛住在故事里。如果追求更温馨的体验，小镇上有不少由彩色木屋改造的<strong>民宿（B&B）</strong>，能让你在嘎吱作响的木地板和蕾丝窗帘中醒来，感受最地道的瑞典居家氛围。餐饮方面，除了酒店餐厅，主街上的 <strong>“Gränna Gästgivargård”</strong> 提供经典的瑞典家常菜，环境 cozy。一定要尝尝用韦特恩湖鲜鱼（如鲑鱼、鳟鱼）烹制的菜肴，鲜美无比。下午茶时间，任何一家咖啡馆的<strong>自制苹果派</strong>配上一球香草冰淇淋，都是不容错过的享受。别忘了配一杯瑞典咖啡，慢慢消磨时光。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>维辛索岛（Visingsö）</strong>：从格兰纳的港口乘坐短途渡轮（约25分钟），即可到达韦特瑞恩湖中的这座狭长岛屿。这里是彻底的宁静之所，拥有中世纪城堡遗迹（Visingsborg）、古老的橡树林和田园牧歌般的风光。租一辆自行车环岛骑行，是逃离一切喧嚣的完美选择。这份探索绝对符合<strong>小众景点推荐</strong>的标准。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>格兰纳-布拉赫博物馆</strong>：如果你对小镇的历史和那位热气球探险家安德烈感兴趣，这个博物馆值得一看。它详细讲述了安德烈悲壮的北极探险故事，展出了许多当年的实物和照片，为甜蜜的小镇增添了一层勇敢而悲情的深度。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "格兰纳的灵魂，是舌尖那一缕直冲天灵盖的薄荷清凉，是眼中那片融化所有阴霾的湖水之蓝，更是脚踩在陡峭山径上、只为追寻一片开阔的简单执着。它告诉你，最深刻的甜蜜，往往来自于最纯粹的手工、最本真的色彩，和最无畏的攀登。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trosa-sweden" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特罗萨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trosa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kalmar-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔马城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kalmar Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vasteras" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦斯特罗斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vasteras</p>
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
