import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦讷老城 Vannes Old Town｜探访布列塔尼保存最完好的中世纪童话镇 - 最佳欧洲景点',
  description: '穿过圣文森特那座厚重石门的一刹那，时间就慢了下来，或者说，仿佛被留在了门外。脚下是泛着湿润光泽的深灰色石板路，不是那种工整切割的，而是被五六百年来无数鞋底打磨得中间微凹、边角圆润的老石头。空气里有股特别的味道，是清晨刚洒过水的石板蒸腾出的微腥土气，混杂着从街角面包房（Boulangerie）门缝里钻...',
}

export default function VannesOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '瓦讷老城', href: '/attractions/vannes-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦讷老城・Vannes Old Town・法国・瓦讷`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过圣文森特那座厚重石门的一刹那，时间就慢了下来，或者说，仿佛被留在了门外。脚下是泛着湿润光泽的深灰色石板路，不是那种工整切割的，而是被五六百年来无数鞋底打磨得中间微凹、边角圆润的老石头。空气里有股特别的味道，是清晨刚洒过水的石板蒸腾出的微腥土气，混杂着从街角面包房（Boulangerie）门缝里钻出来的、热烘烘的黄油羊角包香气，再仔细闻，或许还能捕捉到一丝来自不远处港口区的、淡淡的咸腥海风。
你的眼睛会第一时间被那些房子夺走。它们不是规规矩矩站着的，而是像一群喝醉了酒、彼此搀扶着的彩色积木，争先恐后地向窄窄的街心探出身子。这就是瓦讷最著名的“木筋墙”房屋了。黑色的粗木梁在粉刷成奶油黄、淡粉、天蓝或薄荷绿的墙面上，勾勒出菱形、十字形、人字形等各种几何图案，像极了巨大的、甜蜜的姜饼屋。许多房子二楼的窗户下，还悬挂着盛开的红色天竺葵花箱，泼辣地泼洒出一片浓艳。阳光很难直射到巷子底部，于是光影就在这些凹凸的墙面上玩起了游戏，明明暗暗，把每一道木纹和石痕都照得深邃动人。你几乎能听到这些房子在低声絮语，讲述着几个世纪前，富商们如何竞相建造最华美的立面来彰显财富。
这里绝不是一个冷冰冰的旅游标本。早上九点，穿着围裙的老板娘会推开厚重的木门，把“今日特选”的粉笔牌子挂出来；留着白色长胡子的老爷爷坐在广场长椅上，用你听不懂的布列塔尼语和邻居闲聊，手里拿着棍子面包；孩子踩着滑板车从斜坡上欢叫着冲下来。老城的心脏——圣文森特广场和亨利四世广场——永远流动着生活的气息。咖啡馆的露天座椅永远有人，一杯咖啡配一份《法兰西西部报》，就能消磨半个上午。这里最打动人心的，正是这种毫不刻意的“活着的古老”。历史不是锁在玻璃柜里的，它就晒在阳台上，长在花箱里，流淌在市场的喧闹声中。
当你最终穿过另一道城门，走到护城河（如今是迷人的公共花园）边回望，那一整排倚着城墙而建、仿佛童话插画般的木筋墙房屋倒映在水面上时，你会彻底明白瓦讷的魅力。它不是巴黎的宏大，也不是圣米歇尔山的神圣，而是一种被精心呵护的、温暖可亲的旧日时光。它像一个巨大的拥抱，让你心甘情愿地迷路在其纵横交错的巷弄里，做一个关于中世纪的、色彩斑斓的梦。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过圣文森特那座厚重石门的一刹那，时间就慢了下来，或者说，仿佛被留在了门外。脚下是泛着湿润光泽的深灰色石板路，不是那种工整切割的，而是被五六百年来无数鞋底打磨得中间微凹、边角圆润的老石头。空气里有股特别的味道，是清晨刚洒过水的石板蒸腾出的微腥土气，混杂着从街角面包房（Boulangerie）门缝里钻出来的、热烘烘的黄油羊角包香气，再仔细闻，或许还能捕捉到一丝来自不远处港口区的、淡淡的咸腥海风。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的眼睛会第一时间被那些房子夺走。它们不是规规矩矩站着的，而是像一群喝醉了酒、彼此搀扶着的彩色积木，争先恐后地向窄窄的街心探出身子。这就是瓦讷最著名的“木筋墙”房屋了。黑色的粗木梁在粉刷成奶油黄、淡粉、天蓝或薄荷绿的墙面上，勾勒出菱形、十字形、人字形等各种几何图案，像极了巨大的、甜蜜的姜饼屋。许多房子二楼的窗户下，还悬挂着盛开的红色天竺葵花箱，泼辣地泼洒出一片浓艳。阳光很难直射到巷子底部，于是光影就在这些凹凸的墙面上玩起了游戏，明明暗暗，把每一道木纹和石痕都照得深邃动人。你几乎能听到这些房子在低声絮语，讲述着几个世纪前，富商们如何竞相建造最华美的立面来彰显财富。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝不是一个冷冰冰的旅游标本。早上九点，穿着围裙的老板娘会推开厚重的木门，把“今日特选”的粉笔牌子挂出来；留着白色长胡子的老爷爷坐在广场长椅上，用你听不懂的布列塔尼语和邻居闲聊，手里拿着棍子面包；孩子踩着滑板车从斜坡上欢叫着冲下来。老城的心脏——圣文森特广场和亨利四世广场——永远流动着生活的气息。咖啡馆的露天座椅永远有人，一杯咖啡配一份《法兰西西部报》，就能消磨半个上午。这里最打动人心的，正是这种毫不刻意的“活着的古老”。历史不是锁在玻璃柜里的，它就晒在阳台上，长在花箱里，流淌在市场的喧闹声中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你最终穿过另一道城门，走到护城河（如今是迷人的公共花园）边回望，那一整排倚着城墙而建、仿佛童话插画般的木筋墙房屋倒映在水面上时，你会彻底明白瓦讷的魅力。它不是巴黎的宏大，也不是圣米歇尔山的神圣，而是一种被精心呵护的、温暖可亲的旧日时光。它像一个巨大的拥抱，让你心甘情愿地迷路在其纵横交错的巷弄里，做一个关于中世纪的、色彩斑斓的梦。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦讷老城`} />
                <InfoRow label="英文名称" value={`Vannes Old Town`} />
                <InfoRow label="正式名称" value={`Vannes Old Town`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`瓦讷`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是布列塔尼公国的重要政治与文化中心，见证了公国独立、并入法国及数百年海洋贸易的兴衰。`} />
                <InfoRow label="建筑特色" value={`拥有近乎完整的古城墙防御体系，以及大量色彩缤纷、向外倾斜的16-17世纪木筋墙房屋。`} />
                <InfoRow label="建筑风格" value={`中世纪防御工事与文艺复兴时期民用建筑的完美结合，呈现出典型的布列塔尼港口古城风貌。`} />
                <InfoRow label="文化价值" value={`一座活态的中世纪城市博物馆，布列塔尼语言与文化在此得以顽强保存和生动展示。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区域为开放式街区，全天24小时可进入漫步。城内各独立景点（如圣彼得大教堂、城墙博物馆等）开放时间不一，通常为上午9:30至下午6:00。大部分商店和餐厅的营业时间约为周一至周六 10:00-19:00，周日部分歇业。建议避开法国节假日（如8月15日圣母升天节）前往，许多本地商户会关门休息。`} />
              <InfoRow label="门票价格" value={`漫步老城本身完全免费。进入部分历史建筑内部需购票，例如：登上城墙部分塔楼（约3欧元），参观查特美术馆（约6欧元，学生及特定人群有优惠）。建议在老城入口处的旅游局购买“瓦讷护照”通票（约10欧元），可进入多个收费景点，性价比高。`} />
              <InfoRow label="地址" value={`Place de la République, 56000 Vannes, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最便捷：从巴黎蒙帕纳斯火车站（Gare Montparnasse）搭乘法国高铁（TGV），约3小时直达瓦讷火车站（Gare de Vannes）。班次频繁，高峰时段每小时至少一班，建议提前在SNCF官网或APP购票以获得优惠价。从瓦讷火车站出站后，步行约10-15分钟即可抵达老城入口圣文森特门（Porte Saint-Vincent）。若自驾，可将车停在老城周边的“Les Lices”或“Porte Poterne”大型地下停车场，步行进入老城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`瓦讷的故事，得从罗马人讲起。公元前1世纪左右，罗马人征服了这片属于威尼蒂人的土地，并在此建立了一个名为“达里奥里图姆”的设防营地。不过，真正让瓦讷在历史舞台上站稳脚跟的，是中世纪早期。公元5世纪，随着罗马帝国崩溃，来自不列颠岛的布列塔尼人跨越英吉利海峡迁徙至此，带来了他们的语言、文化和基督教信仰，“瓦讷”这个地名也由此诞生（源于布列塔尼人中的一个部落名）。它很快成为布列塔尼地区一个重要的主教区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`命运的转折点发生在9世纪。当时，面对北欧维京海盗的频繁袭击，布列塔尼的统治者意识到需要一座更坚固的城池。他们选择了瓦讷，不仅因为其地理位置，更因为这里有首位布列塔尼人圣徒——圣帕特朗的墓地，具有无与伦比的精神号召力。于是，城墙被一圈圈垒起，瓦讷逐渐成为布列塔尼公国的南部重镇。到了14世纪，随着布列塔尼公国与法兰西王国关系紧张，瓦讷的战略地位空前提升。我们今天看到的宏伟石砌城墙，大部分就始建于这个战云密布的年代。城墙、塔楼、壕沟……一套完整的防御体系将老城紧紧包裹，也塑造了它未来几个世纪的基本轮廓。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果说城墙给了瓦讷骨骼，那么15-17世纪的繁荣则赋予了它血肉与华服。布列塔尼公国在几位雄才大略的公爵统治下达到鼎盛，尤其是最后一位独立的布列塔尼女公爵——安娜女公爵。瓦讷虽非首府，却是公国议会经常召开的地方，是政治生活的核心舞台之一。更为关键的是，作为莫尔比昂湾的天然良港，瓦讷的贸易极其发达。盐、葡萄酒、布料从这里运往不列颠和北欧，财富源源不断地涌入。正是那些发了财的船主、盐商和贵族们，竞相在城内建造豪华宅邸。由于城内空间有限，他们便争奇斗艳地在房屋立面上做文章，于是，我们看到了一栋栋向外倾斜（为了扩大上层居住面积）、装饰着精美木雕和彩绘玻璃的木筋墙房屋拔地而起。这种建筑风格不仅是财富的展示，也体现了布列塔尼地区深受北欧影响的建筑传统。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静与繁荣并非永恒。1532年，布列塔尼公国正式并入法兰西王国，瓦讷的政治地位有所下降。1675年，一场针对路易十四新税的“印花税暴动”席卷布列塔尼，瓦讷也卷入其中并遭到王室军队的严厉镇压，城市一度萧条。18、19世纪，港口贸易因淤泥淤积和南特等港口的竞争而逐渐衰落。但塞翁失马，焉知非福。正是因为经济的相对停滞，瓦讷老城才没有被大规模的城市化改造所吞噬。那些木筋墙房子虽然破旧了，但大部分得以幸存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的拯救行动始于20世纪。两次世界大战中，瓦讷幸运地未被严重破坏。战后，法国人开始珍视自己的历史遗产。瓦讷人没有选择将老城居民迁出，将其彻底博物馆化，而是发起了一场“修复而不驱逐”的温和运动。政府提供补贴，帮助居民按照古法修复他们祖传的老屋，但前提是必须继续居住于此。这项充满智慧的政策，让瓦讷老城不仅保留了历史的躯壳，更保留了灵魂——持续不断的生活气息。如今，漫步其中，你看到的不仅是景点，更是一个仍然在呼吸、有炊烟、有笑声的千年社区。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味瓦讷老城的精髓，建议至少预留一整个白天，最佳安排是在此住上一晚，感受它清晨的宁静与傍晚的华灯初上。理想的游览从下午晚些时候开始，这时一日游的游客开始散去，光线也变得柔和。先不急着钻小巷，而是沿着城墙外围走一走，从整体上感受这座“石头蕾丝”环绕的城池。傍晚时分进入老城，在广场找家餐馆享用一顿布列塔尼晚餐（可丽饼和苹果酒是必须的）。第二天上午，趁大批游客还未涌入，开始你的深度探索，按照由外到内、由高到低的节奏，系统地走访核心区域。下午则可以留给自己随意迷路，或者在港口区放松。这样的节奏既能拍到好照片，又能沉浸式体验当地生活。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适的平底鞋，老城的石板路虽然美丽但对高跟鞋极不友好，而且常有缓坡和台阶。
七月和八月是法国度假旺季，老城会非常拥挤，如果想获得更宁静的体验，五月、六月或九月是更好的选择。
许多小巷非常狭窄安静，是私人住宅区，游览时请保持低声，尊重当地居民的生活隐私。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午先从外围的“法国最美花园”之一的瓦讷城墙花园开始，沿着古老的护城河道悠闲散步，从各个角度欣赏倒映在水中的木筋墙房屋群。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过圣文森特门正式进入老城，立刻右转爬上那段保存完好的中世纪城墙步道，从制高点俯瞰红瓦屋顶的海洋和远处莫尔比昂湾的点点帆影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着城墙走到“囚徒塔”附近，然后钻进迷宫般的巷子，目标明确地寻找那对著名的“瓦讷恋人”雕塑——它们是从一栋老房子外墙上雕刻出来的一对正在微笑对话的商人夫妇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`让“恋人”指引你走到老城的核心——圣文森特广场和亨利四世广场，在露天咖啡座观察来往行人，听市政厅的钟声敲响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观广场边上那座混合了罗马式、哥特式和巴洛克式风格的圣彼得大教堂，别忘了在昏暗的光线下寻找那尊神秘的“圣彼得牙痛”雕像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大教堂后面钻进更窄的集市小街，如果赶上周二或周六上午，这里就是充满活力的传统市场，可以尝尝当地的奶酪、香肠和新鲜生蚝。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着下坡路一直走到老港口区，看看那些如今停满游艇的码头，想象几个世纪前满载货物的帆船在此装卸的繁忙景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后从港口区绕回，经过“洗衣妇广场”，看看古老的公共洗衣池，然后从波特尔纳门离开，完成一个完美的回环。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`拉法耶特街转角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光刚好洒在拉法耶特街与圣文森特街交汇处那排色彩最鲜艳的木筋墙房屋上，用广角镜头仰拍，能捕捉到房屋倾斜挤压向蓝天、充满戏剧张力的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`花园台地全景`}</h4>
                  <p className="text-sm text-gray-700">{`从城墙外的“花园台地”靠近水边的位置，下午日落前一小时，利用平静的水面拍摄老城城墙和房屋群的完美倒影，对称构图极为震撼。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣文森特门内望`}</h4>
                  <p className="text-sm text-gray-700">{`站在圣文森特门内侧的拱门下，利用门洞作为天然画框，构图将视线引向门内蜿蜒上升的石板路和两旁的老屋，最佳时间是晴天的正午，门洞内的阴暗与门外的明亮形成强烈对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`港口区回望`}</h4>
                  <p className="text-sm text-gray-700">{`在老港口区的步行桥上，傍晚华灯初上时，回望老城在暮色中亮起星星点点暖黄色灯光的轮廓，与深蓝色的天空和水中倒影构成宁静的夜景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“瓦讷恋人”特写`}</h4>
                  <p className="text-sm text-gray-700">{`找到那对著名的雕刻商人夫妇后，等待一缕阳光穿过狭窄的街巷刚好照亮他们微笑的脸庞时拍摄特写，建议使用大光圈虚化杂乱的背景，突出雕塑的质感与故事性。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`老城内部光线复杂，明暗对比强烈，建议使用RAW格式拍摄以便后期调整阴影和高光细节。`}</li>
                <li>• {`拍摄居民或商户时，请务必先微笑示意并征得同意，法国人重视隐私，不经允许的近距离拍摄可能引起不快。`}</li>
                <li>• {`飞无人机在历史保护城区通常是严格禁止的，请勿尝试，以免面临高额罚款。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`住在城墙边`}</h4>
                  <p className="text-sm text-blue-800">{`选择一家由16世纪贵族宅邸改造的精品酒店，房间有裸露的原始石墙和木梁，推开窗户就能伸手触摸到古老的城墙砖石。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`藏身巷弄深处`}</h4>
                  <p className="text-sm text-green-800">{`预订一间老城中心家庭经营的小旅馆，房间不大但充满人情味，早餐是女主人自制的果酱和可丽饼，她会热情地给你手绘一张只有本地人才知道的秘密角落地图。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`港口景观房`}</h4>
                  <p className="text-sm text-yellow-800">{`入住港口区现代设计酒店的高层房间，享受一面看古老城郭、一面看千帆停泊的独特视角，尤其是夜晚，两岸灯光璀璨，如梦似幻。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外田园风`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以选择老城周边三公里内的一座19世纪庄园改造成的民宿，住在带四柱床的大房间里，清晨在鸟鸣中醒来，享受绝对的宁静，开车几分钟即可抵达老城。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿多为历史建筑，可能没有电梯，隔音也相对现代酒店稍差，但这正是沉浸式体验的一部分，预订时请知悉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`瓦讷治安非常好，老城夜晚灯火通明，餐馆酒吧营业至较晚，独自夜归也很安全。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和节假日住宿非常紧俏，务必提前数月预订，尤其是那些口碑极佳的特色小旅馆。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开瓦讷好些天了，可闭上眼，那蜂蜜色的木筋墙、湿漉漉的石板路、还有海风混合咖啡香的味道，总会不期而至。它不像那些举世瞩目的地标，用磅礴的气势瞬间征服你；它更像一坛温好的苹果酒，初尝清新，而后劲里满是醇厚的生活滋味。在这里，我最大的感触是“延续”的力量。历史不是一段截然而止的过去式，而是一条缓缓流淌至今的河。你看那修复如旧的房子窗口，晾晒着今人的衣衫；中世纪商人洽谈生意的广场上，坐着刷手机的青年。这种无缝的衔接，让人莫名安心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求“新”、追求“快”的时代，瓦讷老城固执地、优雅地维持着自己的“旧”与“慢”。它提醒我们，城市的灵魂不在于摩天大楼的高度，而在于记忆的厚度和生活的温度。它告诉我们，保护遗产最高明的方式，不是把它供起来，而是让它继续活在人们的日常里，呼吸、生长。对于每一位厌倦了打卡式旅游、渴望真正“走进”一个地方的旅人来说，瓦讷就是一味解药。它不需要你匆忙赶路，只邀请你漫无目的地游荡，在某个不起眼的拐角，与一段沉默的砖石、一扇繁花掩映的窗，或者一个友善的微笑不期而遇。这或许就是旅行的另一种意义——不是去征服多少景点，而是找到一个能让内心安静下来的角落，然后，带着那份被时光熨帖过的平和，继续前行。瓦讷，就是这样一个值得你专程前往，并永远留在记忆里的角落。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
