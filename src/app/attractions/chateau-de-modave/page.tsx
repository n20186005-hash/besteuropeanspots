import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫达夫城堡 Château de Modave｜耸立于岩石之巅的巴洛克珍宝与古代水利奇迹 - 最佳欧洲景点',
  description: '当你第一次驱车穿过阿登高地边缘那一片片墨绿的森林，一个拐弯后，莫达夫城堡就这样毫无预兆地撞进你的视野。它不是缓缓出现在地平线上，而是“耸立”——对，只能用这个词。一整块巨大的、灰白色的天然岩柱，像被巨人随意插在大地之上，而城堡那浅黄色的石灰岩墙体，就从这岩柱的顶端生长出来，与岩石本身浑然一体，仿佛已',
}

export default function ChateauDeModavePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '比利时', href: '/destinations/belgium' },
            { label: '莫达夫城堡', href: '/attractions/chateau-de-modave' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫达夫城堡・Château de Modave・比利时・列日省（确切位置在莫达夫镇）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一次驱车穿过阿登高地边缘那一片片墨绿的森林，一个拐弯后，莫达夫城堡就这样毫无预兆地撞进你的视野。它不是缓缓出现在地平线上，而是“耸立”——对，只能用这个词。一整块巨大的、灰白色的天然岩柱，像被巨人随意插在大地之上，而城堡那浅黄色的石灰岩墙体，就从这岩柱的顶端生长出来，与岩石本身浑然一体，仿佛已经在这片山谷中屹立了千万年。你甚至能听见脚下翁斯河哗哗的流水声，与风吹过森林的沙沙声交织在一起，空气里是潮湿的泥土和苔藓的清新气息。那种震撼，不是看到凡尔赛宫时的惊叹，而是一种近乎原始的、对自然与人力共同创造的敬畏。
停好车，走过古老的石桥，城堡的大门就在眼前。进入内部，光线骤然变得柔和。你立刻会被一种极度细腻、繁复而又不失优雅的装饰所包围。天花板上，墙壁上，到处都是雪白的、像凝固的奶油又像最精致蕾丝般的灰泥雕塑。天使、花环、藤蔓、神话人物……它们不是简单的浮雕，而是充满了立体感和动态，仿佛下一秒就要从墙上飞下来。阳光透过高高的窗户，在拼花木地板上投下明亮的光斑，光影在那些起伏的灰泥曲线上滑动，让整个空间都有了呼吸和生命。你能闻到淡淡的、属于古老木材和石头的清冷气味，偶尔混合着一丝历史尘埃的味道。导游会轻声告诉你，这里任何一个厅室的灰泥作品，都足以单独成为博物馆的镇馆之宝。
最奇妙的体验在于，这座看似纯粹的贵族艺术殿堂，地下却跳动着一颗工程学的机械心脏。在参观接近尾声时，你会被引向一个不那么起眼的区域，然后沿着狭窄的螺旋石阶一路向下，深入岩石的腹地。温度越来越低，水汽弥漫在空气中，你能听到隐约的、有节奏的机械运转声和流水声。然后，你会见到它——那套建于1668年的巨大水利提升装置。巨大的木制齿轮、传动杆和活塞，虽然已经静止，但依然保持着蓄势待发的姿态。想象一下，在三百多年前，正是这套巧妙的装置，将翁斯河的水垂直提升五十多米，输送到城堡顶部的蓄水池，为整个城堡提供自来水和喷泉水力。那一刻，艺术家的灵巧与工程师的智慧，在这座岩石城堡里完成了史诗般的相遇。它不仅是伯爵的宅邸，更是一座自给自足的、超越时代的微型城市。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你第一次驱车穿过阿登高地边缘那一片片墨绿的森林，一个拐弯后，莫达夫城堡就这样毫无预兆地撞进你的视野。它不是缓缓出现在地平线上，而是“耸立”——对，只能用这个词。一整块巨大的、灰白色的天然岩柱，像被巨人随意插在大地之上，而城堡那浅黄色的石灰岩墙体，就从这岩柱的顶端生长出来，与岩石本身浑然一体，仿佛已经在这片山谷中屹立了千万年。你甚至能听见脚下翁斯河哗哗的流水声，与风吹过森林的沙沙声交织在一起，空气里是潮湿的泥土和苔藓的清新气息。那种震撼，不是看到凡尔赛宫时的惊叹，而是一种近乎原始的、对自然与人力共同创造的敬畏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "停好车，走过古老的石桥，城堡的大门就在眼前。进入内部，光线骤然变得柔和。你立刻会被一种极度细腻、繁复而又不失优雅的装饰所包围。天花板上，墙壁上，到处都是雪白的、像凝固的奶油又像最精致蕾丝般的灰泥雕塑。天使、花环、藤蔓、神话人物……它们不是简单的浮雕，而是充满了立体感和动态，仿佛下一秒就要从墙上飞下来。阳光透过高高的窗户，在拼花木地板上投下明亮的光斑，光影在那些起伏的灰泥曲线上滑动，让整个空间都有了呼吸和生命。你能闻到淡淡的、属于古老木材和石头的清冷气味，偶尔混合着一丝历史尘埃的味道。导游会轻声告诉你，这里任何一个厅室的灰泥作品，都足以单独成为博物馆的镇馆之宝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最奇妙的体验在于，这座看似纯粹的贵族艺术殿堂，地下却跳动着一颗工程学的机械心脏。在参观接近尾声时，你会被引向一个不那么起眼的区域，然后沿着狭窄的螺旋石阶一路向下，深入岩石的腹地。温度越来越低，水汽弥漫在空气中，你能听到隐约的、有节奏的机械运转声和流水声。然后，你会见到它——那套建于1668年的巨大水利提升装置。巨大的木制齿轮、传动杆和活塞，虽然已经静止，但依然保持着蓄势待发的姿态。想象一下，在三百多年前，正是这套巧妙的装置，将翁斯河的水垂直提升五十多米，输送到城堡顶部的蓄水池，为整个城堡提供自来水和喷泉水力。那一刻，艺术家的灵巧与工程师的智慧，在这座岩石城堡里完成了史诗般的相遇。它不仅是伯爵的宅邸，更是一座自给自足的、超越时代的微型城市。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫达夫城堡`} />
                <InfoRow label="英文名称" value={`Château de Modave`} />
                <InfoRow label="正式名称" value={`Château de Modave`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`列日省（确切位置在莫达夫镇）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座历经八百年风雨，从军事堡垒演变为贵族私邸，最终因其划时代的17世纪水利工程而载入技术史册的非凡城堡。`} />
                <InfoRow label="建筑特色" value={`雄伟的石灰岩建筑群如鹰巢般牢牢嵌入巨大的天然岩石之上，内部则以大量精美绝伦的灰泥浮雕、壁画和木雕装饰而闻名。`} />
                <InfoRow label="建筑风格" value={`以17世纪巴洛克风格为核心，融合了中世纪要塞的坚实基底与文艺复兴时期的对称美学，内部装饰堪称南尼德兰巴洛克灰泥艺术的典范。`} />
                <InfoRow label="文化价值" value={`它不仅是建筑艺术的瑰宝，更是17世纪欧洲水利工程学与奢华生活美学结合的活化石，见证了哈布斯堡王朝统治下低地国家的技术雄心与艺术繁荣。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡内部仅限导览游，通常开放季节为四月至十月，每天开放但导览有固定场次（例如上午11点，下午2点、3点、4点），冬季（十一月至三月）仅周末和学校假期开放，且场次减少。花园和公园全年免费开放。具体日期和时间每年都可能微调，务必出发前在其官方网站核实最新时刻表，国定假日可能关闭。`} />
              <InfoRow label="门票价格" value={`标准成人导览游票价约为11欧元。65岁以上长者、学生及团体（15人以上）享有优惠价，约9欧元。6至18岁青少年票价约6欧元。6岁以下儿童免费。家庭套票（2大2小）价格约为28欧元。仅参观公园和花园免费。门票通常可在入口处直接购买，但旺季强烈建议在线预订以确保有导览名额。`} />
              <InfoRow label="地址" value={`Château de Modave, Rue du Parc 4, 4577 Modave, Belgium`} />
              <InfoRow label="交通方式" value={`从最近的列日-吉莱曼机场出发，驾车是最方便的选择，沿E42/E25高速公路向南，转入N63/N641公路，约40分钟车程即可抵达，城堡有免费停车场。若乘坐公共交通：从列日中央火车站乘坐开往于伊方向的火车，在“莫达夫站”下车（约30-40分钟车程），但请注意此站是小镇边缘的小站，下车后需转乘出租车（约5分钟）或步行约3公里（上坡路，需30-40分钟）才能到达城堡入口。班车服务稀少，强烈建议自驾或提前预约当地出租车。购票建议使用比利时铁路App（SNCB）购买火车票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫达夫的故事，始于岩石本身。早在罗马时代，这块俯瞰翁斯河的战略要地可能就有哨所。但城堡最早的文字记录出现在1233年，那时候它属于“莫达夫领主”，是一座典型的、注重防御的中世纪石制堡垒。在接下来的几个世纪里，它像一枚重要的棋子，在列日公国复杂的封建关系中易手。城堡伴随着战争的硝烟成长，墙壁在一次次的围攻与加固中变得越来越厚。你可以想象，在14或15世纪，身穿锁子甲的士兵在如今布满灰泥天使的厅堂里巡逻，窗外是戒备森严的吊桥和护城河。它最初的模样，是为了生存，而非享受。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机发生在17世纪。1642年，这座城堡迎来了它命运中最关键的主人之一：让·德·马奇伯爵。这位来自当时欧洲最富庶、艺术最前沿的南尼德兰地区（大致今天的比利时）的贵族，有着全新的眼光和雄厚的财力。他不再需要一个阴冷、昏暗的军事堡垒，他梦想的是一座配得上其地位和品味的、舒适而华丽的夏季行宫。于是，一场轰轰烈烈的改建开始了。中世纪沉重的塔楼和雉堞被更具美学感的对称立面所柔化，窗户被扩大以迎接更多的阳光。但真正让城堡脱胎换骨的，是内部的装饰。德·马奇伯爵请来了当时佛兰德斯地区最顶尖的灰泥雕塑师和画家团队。工匠们将石膏、大理石粉和水调和，如同魔法师般，在墙壁和天花板上直接“描绘”出立体的画卷。狩猎场景、古典寓言、繁花似锦的垂花饰……巴洛克艺术所追求的动态、戏剧性和奢华感，在这里被发挥到了极致。城堡从一个武夫，变成了一位风雅的诗人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，德·马奇伯爵的雄心不止于艺术。他是一位有着远见和科学素养的贵族。城堡建在岩石顶端，日常用水是个大问题。依赖人力或牲口从河边运水既费力又不体面。于是，一项在当时堪称奇迹的工程上马了。在城堡下方的岩石中，工程师们建造了一套复杂的水力系统。他们在翁斯河上筑坝，利用水流驱动一个巨大的水轮，水轮再通过一系列巧妙的木制齿轮、曲轴和连杆，将动力传送到岩石深处的一组活塞泵。这些活塞泵像巨人的心脏一样搏动，硬生生把河水垂直提升到五十多米高的城堡储水池中。这套1668年竣工的系统，不仅满足了城堡全部的饮用、烹饪和清洁需求，还驱动了花园里令人赞叹的喷泉。想想看，当巴黎的凡尔赛宫还在为供水问题头疼时，这座偏远的比利时城堡已经用上了“自来水”和自动喷泉。这是低地国家在水利工程和机械制造方面世界领先地位的明证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转，城堡在18、19世纪继续更换着主人，但核心的样貌得以保存。它躲过了法国大革命的剧烈动荡，也熬过了两次世界大战的炮火，不能不说是一个奇迹。20世纪中叶，城堡被一家水务公司收购——这简直是历史开的一个绝妙玩笑，仿佛这座因水利工程而辉煌的城堡，最终回到了“水”的怀抱。公司对其进行了精心的保护和修复，并向公众开放。今天，我们看到的不仅是伯爵的奢华宫殿，更是一个融合了军事史、艺术史和科技史的、层次极其丰富的时光胶囊。每一块石头，每一寸灰泥，每一根古老的木制齿轮，都在诉说着不同的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个游览安排为半天（约3-4小时）。最佳抵达时间是下午一点左右，这样你可以先悠闲地探索城堡外围的森林步道和花园，从各个角度欣赏城堡与岩石结合的雄姿，并享受翁斯河畔的宁静。然后，参加下午两点或三点的导览团进入城堡内部（导览约1小时），此时光线正好能照亮那些华丽的灰泥装饰。导览结束后，你可以有充足的时间在城堡咖啡馆休息，回味刚才的见闻，或者在礼品店逛逛。这样的节奏张弛有度，既能深度了解内部，又不错过外部的自然美景。切勿只赶着参观内部而忽略周边环境，城堡与自然环境的互动是其魅力不可或缺的一部分。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在官网查好当日导览的准确语言场次（通常有法语、荷兰语，英语场次较少，可能需预约），以免到了之后发现没有合适语言的讲解而错过精髓。参观内部必须跟随导览，无法自由行动。穿着舒适的平底鞋非常重要，因为城堡内有多处古老的楼梯和通往地下工程的不平坦石阶。预留足够的时间给花园和周边森林漫步，这是完整体验不可或缺的一环。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在免费的林间停车场，先别急着上去，沿着河边的小径走一段，从对岸仰望城堡与岩石合为一体的震撼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢走过那座跨越古老护城河（现已干涸）的石桥，感受脚下石块被岁月打磨的温润质感，想象吊桥升起时的戒备状态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览员穿过厚重的橡木大门，立刻让眼睛适应内部昏暗的光线，然后迎接你的是门厅天花板上那铺天盖地的华丽灰泥浮雕所带来的第一次视觉冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“骑士厅”驻足，仔细端详壁炉上方那组描绘狩猎场景的动态灰泥雕塑，观察光线如何赋予那些猎犬和号角生命。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入“中国厅”，欣赏17世纪欧洲贵族对东方风情的奇妙想象，那些灰泥塑造的“中式”亭台和人物充满了跨文化的趣味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的螺旋石阶，小心地深入城堡地下，去探访那套17世纪的巨大水利提升装置，触摸冰冷的古老木齿轮，倾听导游讲解其工作原理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后，不要错过城堡后方依山而建的巴洛克式法式花园，虽然规模不大，但几何图案的草坪和精心修剪的绿篱展现了古典的秩序之美。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在城堡附设的咖啡馆找一张能看到远景的户外桌子，点一杯比利时啤酒或咖啡，静静地看着夕阳将城堡的石灰岩外墙染成金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`翁斯河对岸的观景平台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，光线最为柔和温暖，用长焦镜头可以压缩空间，拍出城堡巍然耸立于岩石之上、倒影映在平静河面的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡主庭院中心仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的午间，站在庭院抬头，用广角镜头捕捉城堡主体建筑与蓝天构成的几何构图，同时能将岩石基底纳入画面，突出其险峻。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“大使楼梯”的底部向上拍`}</h4>
                  <p className="text-sm text-gray-700">{`利用这座装饰华丽的巴洛克楼梯本身的螺旋曲线作为引导线，构图时将顶部彩绘天花板的细节纳入，可以拍出极具纵深感和大片感的室内建筑照片。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`花园上层平台回望城堡`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，从花园的制高点回望，可以将城堡的建筑立面与前景中规整的法式花园图案一同收入镜头，展现人工与自然、建筑与景观的和谐。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`地下水利装置房内`}</h4>
                  <p className="text-sm text-gray-700">{`使用三脚架和慢速快门，在昏暗的光线下拍摄那些巨大木制齿轮和传动机件的局部特写，捕捉历史的机械美感与沧桑质感（需注意是否允许使用三脚架）。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部通常禁止使用闪光灯和三脚架（以防损坏珍贵灰泥和画作），请调高相机感光度或使用大光圈镜头。拍摄外景时，清晨和黄昏的“黄金时刻”光线最佳，能赋予石灰岩墙面迷人的色彩和质感。无人机飞行在城堡上空可能受到严格限制，务必事先查询当地法规并尊重隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村风情之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在翁斯河谷旁由19世纪农舍改建的精品民宿，早晨在开满鲜花的院子里享用家庭自制的果酱和新鲜面包，能听到远处森林的鸟鸣。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`驱车二十分钟可达的、位于附近小镇上的另一座小型古堡酒店，房间保留着石墙和木梁，让你彻底沉浸在阿登地区的古典氛围中。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代舒适据点`}</h4>
                  <p className="text-sm text-yellow-800">{`选择列日市中心一家设计感十足的精品酒店，白天去城堡探秘，晚上回到城市享受热闹的餐馆和酒吧，体验古今对比的乐趣。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端隐世享受`}</h4>
                  <p className="text-sm text-purple-800">{`预订阿登高地深处、被森林和溪流环绕的五星级度假庄园，在一天的城堡游览后，回到这里享受水疗和米其林星级美食，彻底放松身心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫达夫本身是个非常宁静的小镇，住宿选择有限且很快订满，尤其是夏季和周末，强烈建议提前数月规划预订。如果住在列日市，晚上活动丰富，但需每天往返，适合自驾游客。整个区域治安良好，但夜晚乡间道路照明较少，驾车需小心。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开莫达夫城堡很久以后，我的脑海里依然会清晰地浮现出两个画面交织的场景：一个是阳光下那些洁白、轻盈、仿佛在跳舞的灰泥天使；另一个是地下室里那些沉重、漆黑、沉默却曾力拔山河的木制齿轮。这座城堡教会我一件事：真正的深度，往往在于这种矛盾与统一的并存。它不像那些只有金碧辉煌的宫殿，也不像那些只剩断壁残垣的废墟。它既有上升到极致的艺术追求，让你看到人类对美与享乐所能企及的高度；又有沉入地底的工程智慧，让你看到人类为了解决生存的基本问题，能展现出多么惊人的创造力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个一切都追求快速、表面和即时满足的世界里，莫达夫像一位沉静的老者，提醒着我们“层次”的意义。它的历史是一层一层沉积下来的——中世纪的坚固、巴洛克的繁复、工业时代前的精巧技术。参观它，就像翻阅一本立体的、可以走进去的历史书，每一章都有不同的主题，却共同讲述着同一个关于人类适应、改造和美化自身环境的故事。它小众，因为它不张扬；它深刻，因为它丰富。对于厌倦了热门景点人潮、渴望一次能同时触动审美神经和好奇心的旅人来说，这座耸立在比利时岩石上的城堡，绝对是一个值得你专程前往、细细品味的梦中之地。在这里，你找到的不仅是风景，更是一种理解欧洲文明复杂性与韧性的独特视角。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/garrison-border-town-of-elvas" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃尔瓦什星形要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Garrison Border Town of Elvas</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/aigues-mortes-medieval-walled-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    艾
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">艾格莫尔特十字军古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aigues-Mortes</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/karlstejn-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔什特因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlštejn Castle</p>
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
