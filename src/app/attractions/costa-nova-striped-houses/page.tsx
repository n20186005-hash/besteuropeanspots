import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科斯塔诺瓦 Costa Nova｜闯入大西洋畔的童话糖果条纹木屋渔村 - 最佳欧洲景点',
  description: '说实话，第一眼看到科斯塔诺瓦的时候，我愣了好几秒，以为自己不小心闯进了一盒被海浪打翻的巨大彩色积木里。眼前不是那种经过精心设计的迪士尼布景，而是一种带着海盐粗糙质感的、活生生的童话。大西洋的风，那股混合着咸腥、远方海藻和淡淡沙滩暖意的风，是这里永恒的背景气味。它推着你，沿着一条笔直的道路往前走，左边...',
}

export default function CostaNovaStripedHousesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/portugal' },
            { label: '阿威罗', href: '/destinations/portugal' },
            { label: '科斯塔诺瓦', href: '/attractions/costa-nova-striped-houses' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科斯塔诺瓦・Costa Nova・葡萄牙・阿威罗`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，第一眼看到科斯塔诺瓦的时候，我愣了好几秒，以为自己不小心闯进了一盒被海浪打翻的巨大彩色积木里。眼前不是那种经过精心设计的迪士尼布景，而是一种带着海盐粗糙质感的、活生生的童话。大西洋的风，那股混合着咸腥、远方海藻和淡淡沙滩暖意的风，是这里永恒的背景气味。它推着你，沿着一条笔直的道路往前走，左边是宁静的、倒映着天空的潟湖水道，停泊着彩色的旧渔船；右边，就是那片让你屏住呼吸的景象——一排排、一列列，紧密挨着的木屋。它们不是简单的彩色，而是被刷成了一道道饱满的、对比强烈的竖条纹：樱桃红配雪白，亮黄配海蓝，薄荷绿配巧克力棕。在葡萄牙明亮的阳光下，这些色彩鲜艳得几乎要发出嗡鸣声。
走近了看，你会发现这些“palheiros”（当地人这么称呼这些木屋）的生命力。木板因常年经受海风洗礼而纹理深刻，有些油漆也在边缘处微微剥落，露出底下木材的原本色泽。这非但不显破败，反而像一幅被时光温柔抚摸过的油画。许多木屋的窗台上，种满了天竺葵或矮牵牛，那喷涌而出的绯红或紫色，与墙壁的条纹玩着俏皮的色彩游戏。耳边是永不停歇的三重奏：近处海浪轻柔拍打沙岸的“哗哗”声，远处更具力量感的、拍打外海防波堤的“隆隆”轰鸣，以及头顶上海鸥清亮又略带凄凉的鸣叫。当地的老人们会坐在自家条纹屋前的藤椅上，看着潟湖里帆船缓缓滑过，他们的生活节奏，似乎也随着潮汐而涨落。
这里最打动人心的，是一种奇妙的二元和谐。它既是一个活着的渔村，渔民清晨依然从这里的港口出发；又是一个充满欢乐的度假地，孩子们抱着冲浪板奔向海浪，情侣们骑着双人自行车叮铃铃地掠过。那些条纹木屋，最初只是为了存放渔网和船只的实用空间，如今却成了家庭夏日记忆的容器、艺术家灵感的源泉。它不像一些被完全博物馆化的地方，而是将历史的功能与当下的愉悦，用一种极度鲜明、近乎天真烂漫的视觉语言，缝合在了一起。在这里，美不是被供奉起来的，而是日常生活里随手可及的一部分，是晾在彩色阳台上的床单，是停在条纹墙边的老旧自行车。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，第一眼看到科斯塔诺瓦的时候，我愣了好几秒，以为自己不小心闯进了一盒被海浪打翻的巨大彩色积木里。眼前不是那种经过精心设计的迪士尼布景，而是一种带着海盐粗糙质感的、活生生的童话。大西洋的风，那股混合着咸腥、远方海藻和淡淡沙滩暖意的风，是这里永恒的背景气味。它推着你，沿着一条笔直的道路往前走，左边是宁静的、倒映着天空的潟湖水道，停泊着彩色的旧渔船；右边，就是那片让你屏住呼吸的景象——一排排、一列列，紧密挨着的木屋。它们不是简单的彩色，而是被刷成了一道道饱满的、对比强烈的竖条纹：樱桃红配雪白，亮黄配海蓝，薄荷绿配巧克力棕。在葡萄牙明亮的阳光下，这些色彩鲜艳得几乎要发出嗡鸣声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了看，你会发现这些“palheiros”（当地人这么称呼这些木屋）的生命力。木板因常年经受海风洗礼而纹理深刻，有些油漆也在边缘处微微剥落，露出底下木材的原本色泽。这非但不显破败，反而像一幅被时光温柔抚摸过的油画。许多木屋的窗台上，种满了天竺葵或矮牵牛，那喷涌而出的绯红或紫色，与墙壁的条纹玩着俏皮的色彩游戏。耳边是永不停歇的三重奏：近处海浪轻柔拍打沙岸的“哗哗”声，远处更具力量感的、拍打外海防波堤的“隆隆”轰鸣，以及头顶上海鸥清亮又略带凄凉的鸣叫。当地的老人们会坐在自家条纹屋前的藤椅上，看着潟湖里帆船缓缓滑过，他们的生活节奏，似乎也随着潮汐而涨落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人心的，是一种奇妙的二元和谐。它既是一个活着的渔村，渔民清晨依然从这里的港口出发；又是一个充满欢乐的度假地，孩子们抱着冲浪板奔向海浪，情侣们骑着双人自行车叮铃铃地掠过。那些条纹木屋，最初只是为了存放渔网和船只的实用空间，如今却成了家庭夏日记忆的容器、艺术家灵感的源泉。它不像一些被完全博物馆化的地方，而是将历史的功能与当下的愉悦，用一种极度鲜明、近乎天真烂漫的视觉语言，缝合在了一起。在这里，美不是被供奉起来的，而是日常生活里随手可及的一部分，是晾在彩色阳台上的床单，是停在条纹墙边的老旧自行车。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科斯塔诺瓦`} />
                <InfoRow label="英文名称" value={`Costa Nova`} />
                <InfoRow label="正式名称" value={`Costa Nova do Prado`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`阿威罗`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个从简陋渔具仓库华丽变身为葡萄牙最具特色和视觉冲击力的海滨度假胜地的传奇社区。`} />
                <InfoRow label="建筑特色" value={`沿着沙丘与潟湖之间狭长地带排列的、如同彩色铅笔或糖果般的垂直条纹木质房屋。`} />
                <InfoRow label="建筑风格" value={`源自19世纪的民间实用主义建筑，后期融入了鲜明的装饰性色彩美学，形成了独一无二的“科斯塔诺瓦风格”。`} />
                <InfoRow label="文化价值" value={`见证了葡萄牙海岸社区从纯粹的渔业经济向旅游业与文化遗产保育成功融合的生动典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`木屋区域及沙滩全天24小时开放。部分小型私人博物馆、餐厅和商店的开放时间不一，通常餐厅在中午12点至下午3点，晚上7点至11点营业；商店多在上午10点至下午1点，下午3点至7点营业。最佳游览季节为每年5月至9月，此时气候温暖，所有设施基本全开。冬季（11月至次年2月）部分家庭经营的餐馆和民宿可能会歇业，但海景苍茫，别有一番风味。`} />
              <InfoRow label="门票价格" value={`进入科斯塔诺瓦渔村和海滩完全免费。若参观小型私人博物馆（如“帕拉佩德拉之家”博物馆），门票约2-3欧元。乘坐传统的“摩力赛罗”平底船在潟湖游览，费用约为每人10-15欧元，时长45分钟至1小时。`} />
              <InfoRow label="地址" value={`Costa Nova, 3830-453 Gafanha da Encarnação, Portugal`} />
              <InfoRow label="交通方式" value={`从波尔图机场（OPO）出发最为便捷。驾车：沿A29高速公路向北，再接A25高速公路，转向N327公路，全程约75公里，用时1小时至1小时15分钟。公共交通：先从机场搭乘地铁或巴士到波尔图坎帕哈火车站，乘坐火车前往阿威罗火车站（约1小时，班次频繁）。抵达阿威罗后，在火车站外的公交枢纽换乘前往“Costa Nova”或“Barra”的公交车（例如第5、6路或37路），车程约25-30分钟，班次约每30-60分钟一班，末班车通常在晚上8点左右，周末班次会减少，务必提前查好时刻表。更灵活的方式是在阿威罗火车站直接搭乘出租车，前往科斯塔诺瓦车费约15-20欧元。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲科斯塔诺瓦的故事，我们得把时钟拨回到19世纪初，甚至更早。那时候，眼前这片狭长的沙地几乎一无所有，只有风、沙和狂暴的大西洋。阿威罗的渔民们为了在附近丰饶的潟湖和海域捕鱼，需要有个地方临时存放他们笨重的渔网、帆具和小船。于是，他们用最简单的材料——从附近松林砍来的木材，搭建起了一些简陋至极的棚屋。这些棚屋狭长、低矮，屋顶倾斜以便排水，它们唯一的使命就是实用。木头被刷上焦油或剩下的船用油漆，主要是为了防腐，没人关心它是什么颜色。这就是“palheiros”的起源，意思是“稻草屋”或“棚屋”，名字里就带着 humble（卑微）的出身。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在19世纪的中后期。那时，阿威罗因为海盐和海绵贸易变得富裕起来，城里的资产阶级和知识分子开始追求时髦的“海滨疗法”。他们发现了这片拥有细腻沙滩和相对平静潟湖的宝地。首先是一些艺术家和作家，被这里独特的海天光影和渔村风情吸引而来。他们租下或买下渔民废弃的旧木屋，稍作修整，用作夏日画室或写作静修之所。你可以想象，当第一位画家也许是为了让昏暗的小屋亮堂些，也许只是一时兴起，用白色和一种鲜艳的颜色刷出了竖条纹时，那惊鸿一瞥的效果。它不仅让小屋在视觉上变高了、变亮了，更是在灰蓝的海天背景中，投下了一抹令人愉悦的惊叹号。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`很快，这成了一种风尚。富裕的阿威罗家庭竞相在这里建造或改造自己的度假屋。条纹不再随意，而是有了精心的配色方案。家庭之间仿佛在进行一场无声而愉快的竞赛，看谁的“糖果屋”更醒目、更优雅。到了20世纪初，一种近乎仪式感的传统形成了：每年春天，在夏季来临前，家家户户都会重新粉刷自己的木屋，让那些条纹永远保持鲜亮。这个时期，木屋的结构也进化了，出现了我们今天看到的更精致的两层楼形式，有了装饰性的门廊、铁艺阳台和白色的窗框。它们从渔具仓库，彻底变成了中产阶级的“夏日别墅”，一个逃离城市喧嚣、享受海风与亲情的甜蜜空间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，故事并非一帆风顺。20世纪中后期，全球化的旅游浪潮和现代建筑材料的兴起，曾一度威胁到这些脆弱木质遗产的存在。有人想用更“方便耐用”的水泥房子取代它们。幸运的是，当地人，尤其是那些世代在此度过夏天的家庭，产生了强烈的保护意识。他们意识到，这些条纹木屋不仅是房子，更是家族的记忆、社区的身份证，是科斯塔诺瓦的灵魂。在民间力量和后来文化遗产政策的共同努力下，这片区域被划定为保护街区。新的建筑必须遵循传统的比例、材料和色彩规则。于是，传统非但没有消失，反而在保育中获得了新生。今天，你看到的许多木屋，内部可能已经现代化，配备了齐全的厨房和网络，但它们的灵魂——那些指向天空的、欢快的彩色条纹，依然在向过往的渔夫和今天的旅人，讲述着一个关于蜕变与坚守的、甜蜜而坚韧的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味科斯塔诺瓦，我强烈建议你留出一整天的时间，并在这里住上一晚。完美的路线始于清晨（8点左右），这时旅行团还未抵达，阳光柔和，是拍照和感受本地生活气息的黄金时间。上午用2-3小时悠闲地探索核心木屋区（Rua da Barca 和 Avenida José Estêvão周边）和潟湖畔，细细欣赏建筑细节。中午在本地海鲜餐厅享用漫长的午餐。下午的节奏可以放得更慢，或选择骑自行车探索更远的沙丘和宁静街区，或在沙滩上放松、甚至尝试冲浪。傍晚时分则留给壮丽的大西洋日落。这样的安排既深入核心，又松弛有度，让你能体验到从清晨宁静到午后欢愉，再到黄昏浪漫的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末（特别是七八月）这里会非常拥挤，尽量选择工作日来访，体验感会好十倍。大西洋的风即使在夏天也可能很凉，尤其在傍晚，务必带一件防风外套。尊重当地居民的隐私，这些木屋大多是私人住宅，拍照时避免窥探窗户或庭院内部。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从潟湖侧的“Rua da Barca”路起步，逆着光看对岸糖果条纹木屋群在水面投下颤动的、被拉长的梦幻倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进木屋之间窄窄的小巷，用手指触摸那些被海风打磨得光滑或粗糙的木板纹理，辨认每家每户独一无二的条纹配色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到那间被改成小型博物馆的“Casa da Palheira”，推门进去看看一个世纪前渔民家庭是如何在这些狭长空间里生活的。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街“Avenida José Estêvão”漫步，在那些有着蓝色或红色条纹的咖啡馆外坐下，点一杯 bica（浓缩咖啡）和一份 pastel de nata，看行人来往。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午一定要钻进一家挂着“Peixe Fresco”招牌的家庭餐馆，让老板为你推荐当天早上刚捕到的烤鱼或海鲜炖锅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`租一辆自行车，顺着沙丘后方安静的住宅区小道一直骑到“Ponte da Barra”大桥附近，从另一个角度回望这片彩色王国。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午四五点的时候，穿过沙丘走到面朝外海的主沙滩，找一块地方坐下，看着大西洋的浪涛从深蓝逐渐被夕阳染成金红。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落后别急着走，在渐渐亮起的暖黄色街灯下，再走一遍清晨走过的路，此时的木屋在暮色中像一排排安静的、守护着黑夜的彩色蜡烛。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`沙丘顶部俯拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`从面向大海的沙丘顶端（靠近主要沙滩入口处），用中长焦镜头压缩空间，可以拍到层层叠叠、色彩各异的木屋屋顶与远处潟湖、帆船构成的极具韵律感的画面，最佳光线在日出后一小时或日落前一小时。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`经典“明信片角度”`}</h4>
                  <p className="text-sm text-gray-700">{`站在潟湖边的步行道上，以水面为前景，拍摄对岸那排最密集、色彩最鲜艳的木屋群，晴朗天气的上午顺光拍摄，色彩饱和度最高。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`木屋小巷纵深感`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条两侧都是高挑条纹木屋的狭窄小巷（如Rua do Farol附近），站在巷口，利用建筑的线条形成强烈的视觉引导线，拍摄走向大海或走向巷子深处的人物剪影，氛围感十足。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`细节与倒影组合`}</h4>
                  <p className="text-sm text-gray-700">{`在潟湖平静无风的清晨，寻找单独一栋造型别致的木屋，同时拍摄它的实体和在水中的完美倒影，构图可以非常简洁而富有艺术感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`栈桥尽头日落剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落后十分钟的“蓝色时刻”，走到伸向潟湖的木质栈桥上，回望亮起灯光的海岸线，木屋的彩色条纹融入深蓝暮色，只有窗户透出点点暖光，拍下这静谧的一幕。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一枚变焦镜头（如24-70mm），方便在广阔全景和建筑细节之间切换。利用好不同时间的色温，清晨的冷蓝调和傍晚的暖金调能为照片赋予截然不同的情绪。航拍在这里能获得震撼效果，但务必遵守当地法规，远离人群，并尊重居民隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式木屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接预订一栋经过现代化改造的经典条纹木屋，晚上听着隐约的海浪声入眠，清晨在属于自己的彩色阳台上享用早餐，这是最地道的科斯塔诺瓦体验。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`潟湖景观设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择一间位于潟湖岸边的现代设计酒店，房间拥有整面的落地窗，将波光粼粼的水面和对岸的彩色木屋画卷直接引入你的私人空间。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭经营海边客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`藏在主街后方的温馨客栈，由本地家庭经营，老板娘会为你准备丰盛的 homemade 早餐，并告诉你只有当地人才知道的最佳日落观赏点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端静谧度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`位于木屋区更北端安静地带的一整栋度假屋，拥有私人花园和屋顶露台，既能享受绝对的宁静，步行片刻又能融入主街的热闹。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科斯塔诺瓦的住宿（尤其是特色木屋）在夏季非常抢手，务必提前数月预订。住在潟湖侧更宁静，住在沙丘/大海侧则能更方便地去海滩。这里的夜晚安全而祥和，可以放心在饭后散步。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科斯塔诺瓦好多天了，我闭上眼，脑海里不是某个具体的画面，而是一种感觉——一种被那种纯粹、坦率的色彩抚慰过的感觉。在这个世界常常倾向于莫兰迪灰和极简白的时候，这里的人们却世代执着于用最饱满的樱桃红、最明亮的鸡蛋黄、最清新的薄荷绿来装饰他们的家，面对浩瀚而时常灰蒙的大西洋。这不仅仅是一种审美，更像一种生命哲学：用最大的热情去拥抱生活，哪怕环境艰苦，也要活得鲜艳，活得有趣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个地方之所以值得你千里迢迢来看一眼，是因为它提供了一种稀缺的治愈力。它告诉你，传统不必是沉重古旧的，它可以很轻盈、很快乐；它告诉你，社区的记忆可以通过最直观的方式——色彩，传承下去，并被不断赋予新的活力。在这里，你不需要多么深刻的历史知识去解读，你的眼睛和心灵会直接接收到那份快乐。对于每一位厌倦了标准化旅行、渴望在旅途中找到一份简单而真挚的惊喜的深度游者来说，科斯塔诺瓦就像一个藏在葡萄牙海岸线上的彩色秘密。它不大，但足够独特；它不古老，但充满故事。它会让你相信，世界上的某个角落，真的存在着童话，而且，那个童话里还飘着烤沙丁鱼的香味。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/coimbra" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viana-do-castelo-santa-luzia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维亚纳堡（俯瞰大西洋与利马河的圣卢西亚圣殿之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viana do Castelo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monsaraz-castle-village-alqueva" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙萨拉什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monsaraz</p>
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
