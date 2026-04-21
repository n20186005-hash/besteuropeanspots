import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克拉尼 Kranj｜建在峡谷砾石上的隐秘古城与庞大的二战地下迷宫 - 最佳欧洲景点',
  description: '第一眼看到克拉尼，你可能会觉得它只是阿尔卑斯山脚下一个宁静普通的小镇。但当你从主干道一拐弯，真正踏入它的老城时，脚下的触感会瞬间告诉你一些不同寻常的事情。那些石板路，并不是平整地铺在土地上，而是以一种近乎任性又无比稳固的方式，嵌入一个巨大、倾斜的天然砾石坡上。你走在上面，能感觉到历史的厚重和地貌的险',
}

export default function KranjHistoricTownUndergroundTunnelsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '克拉尼', href: '/attractions/kranj-historic-town-underground-tunnels' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克拉尼・Kranj・斯洛文尼亚・克拉尼`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到克拉尼，你可能会觉得它只是阿尔卑斯山脚下一个宁静普通的小镇。但当你从主干道一拐弯，真正踏入它的老城时，脚下的触感会瞬间告诉你一些不同寻常的事情。那些石板路，并不是平整地铺在土地上，而是以一种近乎任性又无比稳固的方式，嵌入一个巨大、倾斜的天然砾石坡上。你走在上面，能感觉到历史的厚重和地貌的险奇同时从脚底传来。街道两旁是蜜糖色的房屋，阳台探出盛开的天空葵，然而你的视线总会被不经意出现的、陡然向下延伸的窄巷吸引，它们像裂缝一样，暗示着脚下世界的深不可测。
空气中混合着好闻的味道——从古老面包房飘出的焦香，咖啡馆里浓郁的咖啡气息，还有从萨瓦河峡谷升腾上来的、带着水汽与青苔的清凉之风。耳朵里是慵懒的：教堂整点的钟声浑厚而悠远，本地老人坐在广场长椅上用斯洛文尼亚语低声交谈的絮语，还有你自己的脚步声，在石壁间产生轻微的回响。这里的生活节奏是缓慢而扎实的，仿佛时间的流逝在这里被那些坚固的砾石缓冲了。当地人穿过这些陡峭的巷道去买菜、喝咖啡，就像走在自家后院一样平常，这座建在悬崖上的家园，是他们世代相传的、与大地共舞的秘密。
但克拉尼最摄人心魄的魅力，是它的“双重生命”。地上是色彩、阳光与日常的宁静；地下，则是一个完全不同的、属于阴影、策略与生存的史诗世界。当你通过一个不起眼的入口，走下那段通往二战秘密地道网络的阶梯时，气温骤降，光线瞬间被吞噬，一种混合着潮湿岩石、旧金属和岁月尘埃的气味包裹了你。手电的光柱划破黑暗，照出巨大无比的混凝土洞穴、错综复杂的岔路、锈迹斑斑的通风管道和老旧的发电机。这一刻，地上那个明媚的小镇仿佛成了一个精巧的盖子，而你现在正置身于它真实、庞大而沉默的基座之中。这种极致的反差，正是克拉尼给予旅人最深刻、最独特的礼物。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到克拉尼，你可能会觉得它只是阿尔卑斯山脚下一个宁静普通的小镇。但当你从主干道一拐弯，真正踏入它的老城时，脚下的触感会瞬间告诉你一些不同寻常的事情。那些石板路，并不是平整地铺在土地上，而是以一种近乎任性又无比稳固的方式，嵌入一个巨大、倾斜的天然砾石坡上。你走在上面，能感觉到历史的厚重和地貌的险奇同时从脚底传来。街道两旁是蜜糖色的房屋，阳台探出盛开的天空葵，然而你的视线总会被不经意出现的、陡然向下延伸的窄巷吸引，它们像裂缝一样，暗示着脚下世界的深不可测。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "空气中混合着好闻的味道——从古老面包房飘出的焦香，咖啡馆里浓郁的咖啡气息，还有从萨瓦河峡谷升腾上来的、带着水汽与青苔的清凉之风。耳朵里是慵懒的：教堂整点的钟声浑厚而悠远，本地老人坐在广场长椅上用斯洛文尼亚语低声交谈的絮语，还有你自己的脚步声，在石壁间产生轻微的回响。这里的生活节奏是缓慢而扎实的，仿佛时间的流逝在这里被那些坚固的砾石缓冲了。当地人穿过这些陡峭的巷道去买菜、喝咖啡，就像走在自家后院一样平常，这座建在悬崖上的家园，是他们世代相传的、与大地共舞的秘密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但克拉尼最摄人心魄的魅力，是它的“双重生命”。地上是色彩、阳光与日常的宁静；地下，则是一个完全不同的、属于阴影、策略与生存的史诗世界。当你通过一个不起眼的入口，走下那段通往二战秘密地道网络的阶梯时，气温骤降，光线瞬间被吞噬，一种混合着潮湿岩石、旧金属和岁月尘埃的气味包裹了你。手电的光柱划破黑暗，照出巨大无比的混凝土洞穴、错综复杂的岔路、锈迹斑斑的通风管道和老旧的发电机。这一刻，地上那个明媚的小镇仿佛成了一个精巧的盖子，而你现在正置身于它真实、庞大而沉默的基座之中。这种极致的反差，正是克拉尼给予旅人最深刻、最独特的礼物。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克拉尼`} />
                <InfoRow label="英文名称" value={`Kranj`} />
                <InfoRow label="正式名称" value={`Kranj`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`克拉尼`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从古罗马驿站演变而来，在中世纪繁荣，并在二战中因其隐秘的庞大地下工事而扮演了关键角色的战略要冲。`} />
                <InfoRow label="建筑特色" value={`老城建筑极其罕见地直接建造在由萨瓦河雕刻出的陡峭峡谷的天然砾石巨堆之上，下方隐藏着长达数公里、如迷宫般的秘密隧道系统。`} />
                <InfoRow label="建筑风格" value={`融合了哥特式、文艺复兴和巴洛克风格的斯洛文尼亚本土城镇建筑，呈现出自中世纪延续至今的有机生长形态。`} />
                <InfoRow label="文化价值" value={`是上卡尼奥拉地区历史文化的心脏，其地面与地下双重空间共同铭刻了从贸易、信仰到战争与生存的完整民族记忆。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`地面老城区域全天开放。核心景点如圣坎西安教堂开放时间一般为夏季（4月至10月）每日 9:00-18:00，冬季（11月至3月）时间缩短，通常为10:00-16:00，周一可能闭馆。至关重要的“克拉尼地下秘密地道”参观必须通过旅游信息中心预约导览团，英语团通常在每日下午2点，冬季班次减少，强烈建议提前至少一天查询并预订。`} />
              <InfoRow label="门票价格" value={`探索老城地面区域免费。圣坎西亚诺教堂门票约3欧元。地下秘密地道导览游是关键体验，成人票价约12欧元，学生及老人优惠价约10欧元，家庭套票约30欧元。部分联票可能包含当地博物馆。`} />
              <InfoRow label="地址" value={`Glavni trg 2, 4000 Kranj, Slovenia`} />
              <InfoRow label="交通方式" value={`从卢布尔雅那约热·普奇尼克机场出发是最佳选择，机场距离克拉尼仅约25公里。最便捷的方式是乘坐出租车或预约接驳车，车程约30分钟。如果从卢布尔雅那市中心火车站或巴士站出发，可以乘坐频繁的本地巴士（如LPP或Arriva公司），前往克拉尼的巴士每20-30分钟一班，车程约40-50分钟，车票可直接向司机购买。自驾则沿A2/E61高速公路向北，从“Kranj”出口下，约20分钟即达老城区边缘，但老城内停车位紧张，建议使用外围停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克拉尼的故事，始于大地本身的一次任性塑造。数千年前，萨瓦河用无尽的耐心，在石灰岩山脉中切割出深邃的峡谷，并在拐弯处遗留下一个由巨大砾石堆积而成的天然高台。最初的人类被这易守难攻的地形吸引，但真正让这里成为历史舞台焦点的，是古罗马人。他们锐利的战略眼光发现了这个砾石堆的价值，在此设立了名为“卡尼奥拉”的驿站，它成为连接亚得里亚海与多瑙河地区贸易与军事路线上的重要一环。罗马人的道路和秩序，为这片粗犷的土地播下了最初文明的种子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间来到中世纪，这颗种子开始繁茂生长。凭借其控制峡谷交通咽喉的位置，克拉尼迅速发展成为上卡尼奥拉地区的行政与贸易中心。商人、工匠和贵族们开始在这陡峭的砾石坡上建造家园，他们顺应地形，一层一层，如同燕子筑巢般，用石头和木材搭建起广场、教堂和房屋。圣坎西安教堂的塔楼拔地而起，成为信仰与权力的象征；市政厅装饰着精美的壁画，诉说着城市的自豪。这座城镇不是被“规划”出来的，而是从岩石中“生长”出来的，每一条弯曲的街道，每一级不规则的台阶，都是居民与这片奇特地形数百年对话与妥协的结果。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正的命运转折发生在二十世纪最黑暗的时期——第二次世界大战。当战火席卷欧洲，克拉尼因其隐蔽的地理位置和坚固的地下岩层，被纳粹德国占领军选中，成为了一个绝密的军事工程所在地。从1943年开始，成千上万的强迫劳工，在极端恶劣的条件下，用双手和简易工具，向坚硬的砾石山体深处掘进。他们的目标，是建造一个庞大到不可思议的地下工厂网络，用于生产战斗机零部件，以躲避盟军的空袭。这不是几条隧道，而是一个规模堪比小型地下城市的迷宫，拥有总长度超过数公里的主巷道、巨大的生产车间、发电站、仓库、兵营和指挥所。这座地下的“黑暗之城”，是战争机器冷酷效率的证明，也承载着无数无名者的血泪与痛苦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争结束后，这些深邃的地道一度被遗忘和封存，成为了冷战时期当地孩童口中带着恐怖色彩的探险传说。直到近几十年，它们的历史价值才被重新评估和小心地清理开放。今天的克拉尼，早已从战争的创伤中愈合，地上老城明媚而充满活力，被精心维护的历史建筑里开着时髦的咖啡馆和设计师小店。但地下的隧道网络，则被转化为一座独一无二的露天历史博物馆和纪念地。导游会用手电照亮那些斑驳的墙壁，讲述当年发生在这里的故事，不是为了宣扬战争，而是为了铭记在极端环境下人类的坚韧、牺牲与对和平的渴望。从罗马驿站到中世纪明珠，再到二战密窟，最终蜕变为一个承载着完整记忆的活态历史地标，克拉尼的每一层岩石，都压实了一页厚重的欧洲史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要充分感受克拉尼地上与地下的双重魅力，建议安排一整天的深度探索。最佳抵达时间是上午九点左右，这时阳光刚好洒满老城东侧的街道，游客尚少，本地生活刚刚苏醒。整个游览耗时约6-8小时，节奏应是地上轻松漫步与地下沉浸体验相结合。上午先用2-3小时徜徉在日光下的老城，感受其建筑与地形之美；中午在广场享用一顿悠闲的本地午餐；下午的核心则是预留2小时参加地道的导览团，这是理解克拉尼灵魂的关键，地下的阴凉与静谧与上午的明媚形成强烈对比，会带来极大的心灵震撼。之后可以留出一些时间在城墙步道上走走，从高处回味这一整天的见闻。这样的安排能让你的体验层次分明，逐步深入。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在线或抵达后第一时间预订地下隧道导览，当日票非常抢手，尤其是英语团
穿一双绝对舒适防滑的鞋，无论是应对地上陡峭的石板路还是地下可能潮湿不平的地面都至关重要
地道内常年温度只有12度左右，即使盛夏前往也一定要带一件外套`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先去旅游信息中心确认并购买下午地下隧道的导览票，确保你不会错过这趟核心旅程`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主广场开始，用手触摸市政厅外墙上那些被岁月打磨得光滑温润的文艺复兴时期浅浮雕`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣坎西安教堂，让眼睛适应内部的昏暗，然后抬头凝视那座令人屏息的、华丽繁复的晚期哥特式网状拱顶`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一条最陡峭的小巷往下走，比如“Šutnja”巷，用手扶着旁边的石墙，感受整个老城建在倾斜砾石堆上的奇特触感`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在萨瓦河边悬崖上的观景平台停留，俯瞰脚下碧绿湍急的河水如何千万年来雕刻出这座城镇的基座`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导游踏入那扇厚重的铁门，沿着陡峭的阶梯下行，进入温度骤降、回声空旷的二战秘密地道网络心脏`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在地道游览结束后，沿着保存完好的中世纪城墙遗迹散步，从高处回望你刚刚探索过的、屋顶连绵的整个老城区域`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，找一家能看到峡谷景色的小酒馆露台，点一杯本地的“茨维切克”桃红葡萄酒，慢慢消化这一天的地上与地下见闻`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Šutnja小巷仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，站在巷子底部向上拍摄，能完美捕捉到巷子两侧彩墙的鲜艳与石阶的陡峭险峻，构图极具张力`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣坎西安教堂拱顶细节`}</h4>
                  <p className="text-sm text-gray-700">{`利用教堂内部柔和的光线，将相机对准主祭坛上方的网状拱顶，使用慢速快门和三脚架，能拍出石头蕾丝般的神圣与精巧`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`萨瓦河峡谷观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，站在老城南部城墙外的观景台，用广角镜头将红色的屋顶、教堂塔楼与下方深邃碧绿的峡谷河流一同纳入画面`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地下隧道入口光影`}</h4>
                  <p className="text-sm text-gray-700">{`参加导览时，在刚从明亮室外进入黑暗地道的入口阶梯处，捕捉同行者被手电光照亮的剪影与深邃门洞的对比，故事感十足`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城屋顶线与远山`}</h4>
                  <p className="text-sm text-gray-700">{`从城墙步道的某个缺口望出去，以前景的古老瓦片屋顶为引导线，将视线引向远方云雾缭绕的卡姆尼克-萨维尼亚阿尔卑斯山`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在地下隧道内拍摄时，务必关闭闪光灯，一方面保护敏感的历史环境，另一方面依靠自然感光度或稳定手持捕捉现场光，更能还原其真实氛围。`}</li>
                <li>• {`尊重当地居民隐私，拍摄阳台或窗内景象时需格外谨慎，拍摄人物最好先微笑示意获得同意。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住老城广场一栋16世纪商人宅邸改造的精品酒店，房间里有裸露的原始石墙和木梁，晚上能听到广场喷泉的潺潺水声`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`峡谷景观首选`}</h4>
                  <p className="text-sm text-green-800">{`萨瓦河悬崖边一家现代设计的旅馆，拥有直面峡谷森林的落地窗和阳台，清晨在鸟鸣和河水声中醒来，仿佛住在树屋里`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城安静一隅的家庭式公寓，由一对热情的老夫妇经营，客厅书架摆满本地历史书籍，早餐能吃到家酿的果酱和新鲜奶酪`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计爱好者据点`}</h4>
                  <p className="text-sm text-purple-800">{`由旧工业建筑改造的设计酒店，位于老城边缘，风格简约先锋，与古城形成有趣对话，屋顶酒吧是欣赏日落和城市夜景的绝佳地点`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城内的住宿往往需要步行一小段石阶路才能抵达，预订时请确认自己对携带行李行走陡坡的承受能力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季和圣诞集市期间是旺季，务必提前数月预订，平日则选择余地大很多，性价比更高。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开克拉尼很久之后，我脑海里最常浮现的，不是某一张具体的明信片般的风景，而是一种感觉——那种脚踩在坚实与虚空边界上的微妙触感。这座城市教会我，历史不仅仅是书本上平面的记述，它可以是垂直的、分层的，甚至是对立的。地上是生活、艺术与延续了千年的日常之美；地下是生存、创伤与为了活下去而创造的黑暗奇迹。克拉尼没有试图隐藏或美化任何一层，它坦然地将这完整的剖面展示给你看，让你自己去感受其中的重量与温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求高效、向往“网红”打卡点的快节奏旅行时代，克拉尼这样的地方显得尤为珍贵。它不喧嚣，不张扬，甚至需要你付出一点体力去攀爬，一点耐心去聆听，才能读懂它沉默的石头语言。但正是这个过程，让旅行回归了探索与思考的本质。当你从那个庞大的地下世界重新回到阳光之下，看着广场上喝咖啡的老人、追逐鸽子的孩子，你会对“和平”、“家园”这些词汇产生前所未有的、具体而深刻的共鸣。克拉尼不仅是一个景点，它是一个关于人类韧性、记忆与和解的立体寓言。每一位渴望真正理解欧洲复杂肌理的旅人，都应该来此，亲身走一趟这趟从地表到地心、从光明到阴影再回归光明的震撼旅程。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/skofja-loka-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    什
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">什科菲亚洛卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Škofja Loka</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/piran-salt-pans-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮兰盐田与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piran Salt Pans & Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/idrija-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊德里亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Idrija</p>
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
