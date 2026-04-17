import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒂罗尔的哈尔 Hall in Tirol｜沉睡在阿尔卑斯山脚的古老铸币王国 - 最佳欧洲景点',
  description: '当我第一次从因斯布鲁克坐上那趟只有两节车厢的慢火车，仅仅八分钟后，就在一个截然不同的世界下了车。穿过横跨在翠绿色萨尔河上的古朴石桥，哈尔就像一颗被时间小心翼翼包裹起来的琥珀，突然完整地摊开在阿尔卑斯山巨大的、戴着雪冠的山体之下。那种冲击感很奇妙，不是震撼，而是一种沉静的邀请。走进老城，首先包裹你的不...',
}

export default function HallInTirolMintTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '蒂罗尔的哈尔（古老的铸币城）', href: '/attractions/hall-in-tirol-mint-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒂罗尔的哈尔（古老的铸币城）・Hall in Tirol・奥地利・蒂罗尔州，因斯布鲁克附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当我第一次从因斯布鲁克坐上那趟只有两节车厢的慢火车，仅仅八分钟后，就在一个截然不同的世界下了车。穿过横跨在翠绿色萨尔河上的古朴石桥，哈尔就像一颗被时间小心翼翼包裹起来的琥珀，突然完整地摊开在阿尔卑斯山巨大的、戴着雪冠的山体之下。那种冲击感很奇妙，不是震撼，而是一种沉静的邀请。走进老城，首先包裹你的不是景象，而是声音和气味——马蹄铁偶尔敲击在凹凸不平的卵石路上发出清脆的回响，从某扇厚重的木门后飘出新烤好的“Kaiserschmarrn”（皇帝煎饼）的甜香，还有远处市政厅塔楼传来的、沉稳到仿佛能让时间变慢的钟鸣。
这里没有因斯布鲁克那般汹涌的游客潮，街道上走着的，大多是拎着布袋子去买菜的老人，或者踩着单车铃声叮叮当当穿过的学生。阳光透过拱廊，在淡黄色、粉红色、薄荷绿的外墙上切割出明明暗暗的几何图形，你可以用手触摸那些因为数百年风吹雨打而变得温润的壁画痕迹。小镇的核心—— Oberer Stadtplatz 上广场，被一圈带有精美山墙和凸窗的商人豪宅环绕，它们沉默地诉说着这里曾经流淌的不是溪水，而是白银。你会发现，哈尔的美，是一种“富庶的谦逊”，它的一切繁华都内敛在建筑的细节里，在庭院深处，需要你慢下来，凑近了去看。
而这座小镇最打动人的心跳，藏在地下。那便是它的别称“铸币城”的由来。当你在老城里随意漫步，脚下可能正踩在曾经堆满银锭的仓库，或者通往古老铸币厂的地道入口。这种将惊天动地的全球金融史，温柔地编织进日常面包店香气和咖啡馆叮当声里的能力，是哈尔独一无二的魔力。它不是博物馆里的标本，而是一座依然在平稳呼吸、只是把辉煌故事轻声讲给有心人听的老者。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我第一次从因斯布鲁克坐上那趟只有两节车厢的慢火车，仅仅八分钟后，就在一个截然不同的世界下了车。穿过横跨在翠绿色萨尔河上的古朴石桥，哈尔就像一颗被时间小心翼翼包裹起来的琥珀，突然完整地摊开在阿尔卑斯山巨大的、戴着雪冠的山体之下。那种冲击感很奇妙，不是震撼，而是一种沉静的邀请。走进老城，首先包裹你的不是景象，而是声音和气味——马蹄铁偶尔敲击在凹凸不平的卵石路上发出清脆的回响，从某扇厚重的木门后飘出新烤好的“Kaiserschmarrn”（皇帝煎饼）的甜香，还有远处市政厅塔楼传来的、沉稳到仿佛能让时间变慢的钟鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里没有因斯布鲁克那般汹涌的游客潮，街道上走着的，大多是拎着布袋子去买菜的老人，或者踩着单车铃声叮叮当当穿过的学生。阳光透过拱廊，在淡黄色、粉红色、薄荷绿的外墙上切割出明明暗暗的几何图形，你可以用手触摸那些因为数百年风吹雨打而变得温润的壁画痕迹。小镇的核心—— Oberer Stadtplatz 上广场，被一圈带有精美山墙和凸窗的商人豪宅环绕，它们沉默地诉说着这里曾经流淌的不是溪水，而是白银。你会发现，哈尔的美，是一种“富庶的谦逊”，它的一切繁华都内敛在建筑的细节里，在庭院深处，需要你慢下来，凑近了去看。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这座小镇最打动人的心跳，藏在地下。那便是它的别称“铸币城”的由来。当你在老城里随意漫步，脚下可能正踩在曾经堆满银锭的仓库，或者通往古老铸币厂的地道入口。这种将惊天动地的全球金融史，温柔地编织进日常面包店香气和咖啡馆叮当声里的能力，是哈尔独一无二的魔力。它不是博物馆里的标本，而是一座依然在平稳呼吸、只是把辉煌故事轻声讲给有心人听的老者。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒂罗尔的哈尔（古老的铸币城）`} />
                <InfoRow label="英文名称" value={`Hall in Tirol`} />
                <InfoRow label="正式名称" value={`Hall in Tirol`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`蒂罗尔州，因斯布鲁克附近`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪晚期至文艺复兴时期中欧最重要的铸币中心之一，这里铸造的“泰勒”银币是现代美元名称的鼻祖，深刻影响了全球货币史。`} />
                <InfoRow label="建筑特色" value={`完美保存了中世纪晚期的城市肌理，密集的哥特式联排商人屋、宏伟的带拱廊广场与高耸的塔楼，与环绕的阿尔卑斯山景形成戏剧性对比。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式民用建筑为主，混杂着文艺复兴的华丽装饰与巴洛克的局部点缀，形成和谐统一的中世纪小镇风貌。`} />
                <InfoRow label="文化价值" value={`一座活着的“中世纪经济化石”，生动展示了盐业与铸币业如何塑造一个城市的财富、建筑与日常生活。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。核心景点如铸币博物馆（Münze Hall）、市政厅塔楼等开放时间各异：铸币博物馆通常为周二至周日 10:00-17:00，冬季（11月至3月）可能缩短为下午开放或仅周末开放，具体需查询官网。市政厅塔楼一般在夏季（5月至9月）的指定工作日和周末下午开放登顶。元旦、圣诞节及部分宗教节日闭馆。`} />
              <InfoRow label="门票价格" value={`铸币博物馆成人票约10欧元，学生及优惠票约8欧元。市政厅塔楼登顶约5欧元。常有包含多个景点的“哈尔历史文化联票”，约15欧元，有效期两天。6岁以下儿童免费。建议官网查询最新票价。`} />
              <InfoRow label="地址" value={`Oberer Stadtplatz 1, 6060 Hall in Tirol, Austria`} />
              <InfoRow label="交通方式" value={`从最近的因斯布鲁克机场（INN）出发，乘坐F路巴士直达哈尔老城中央车站（Hall Zentrum），车程约25分钟，每小时2-3班。从因斯布鲁克中央火车站（Innsbruck Hauptbahnhof）出发更为便捷，乘坐城郊火车（S-Bahn）S4线，仅需8分钟即可抵达“Hall in Tirol”站，班次密集（约每15-20分钟一班）。出站后步行穿过萨尔河上的老桥，约10分钟即可进入古城核心。建议购买蒂罗尔交通卡，区域内火车巴士通用。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`哈尔的故事，始于一个“白色黄金”的奇迹。早在13世纪，这里并不是因为风景而被选中，而是因为地下丰富的盐矿。“Hall”这个名字本身，在古语里就与盐业开采息息相关。萨尔河为运输提供了便利，盐，这种中世纪最珍贵的商品之一，让哈尔迅速积累了第一桶金。到了15世纪，它已经是蒂罗尔地区富甲一方的盐都，高大的城墙和繁荣的市场就是证明。但命运的齿轮在1477年发生了关键性的转动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这一年，大公西吉斯蒙德，一位挥金如土但也颇有远见的统治者，决定将蒂罗尔的铸币厂从混乱的因斯布鲁克迁至更为稳固、安保森严的哈尔。他看中了这里的财富、坚固的城防和相对封闭的环境。于是，在哈尔老城中心，一座配备着当时最先进机械的铸币厂拔地而起。这才是哈尔传奇的真正开始。这里开始大规模铸造“古尔登”和“泰勒”银币。尤其是“泰勒”，因其成色足、信誉好，迅速成为中欧贸易的硬通货，它的名字漂洋过海，最终演变成了后来的“美元”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下16世纪的哈尔街道：空气中弥漫的不只是烟火气，还有熔炼白银的独特气味；穿着天鹅绒外套的意大利银行家、带着账本的德国商人、押运银锭的武装护卫穿梭在拱廊之下。铸币业吸引了整个欧洲的工匠、艺术家和金融家，小镇的建筑上开始出现文艺复兴风格的彩绘外墙和精致的石雕窗棂，那是财富最直白的烙印。当时的哈尔，就像今天的华尔街，是一个左右着欧洲经济脉搏的金融心脏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，繁荣总是伴随着阴影。战争、王朝更迭、银矿的枯竭，都曾一次次挑战这座小镇。17世纪，铸币厂经历了火灾和重建。19世纪初，拿破仑的军队铁蹄也曾踏过这里。随着现代工业化和国家铸币体系的集中，哈尔的地方铸币在1809年画上了句号。小镇仿佛一下子从世界的聚光灯下退场，陷入了漫长的沉睡。但塞翁失马，焉知非福。正是这种“被遗忘”，让它奇迹般地躲过了二十世纪大规模的城市改造和战争破坏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`那些为盐商和钱庄主建造的华丽宅邸，没有被推倒，只是悄悄地变成了公寓、诊所和咖啡馆。古老的铸币厂建筑被精心修复，改造成了世界上独一无二的铸币博物馆。哈尔没有拼命追逐现代旅游业的光鲜，而是选择温柔地守护自己的皱纹和白发。它从一颗喧嚣跳动的心脏，变成了一本可以慢慢翻阅的立体历史书。今天，当你触摸市政厅墙上那幅描绘当年铸币场景的古老壁画时，你触摸的不仅仅是一段过往，更是一个小镇如何与世界对话，又在风云变幻后找到自己宁静位置的智慧。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览哈尔，切忌匆忙。建议安排一整天时间，最好在上午九点前抵达，这时晨光正好洒在古城东侧的建筑上，街道安静，店铺陆续开门，充满生活气息。整体的节奏应该是“由外向内，由高到低，再深入核心”。先从外围感受小镇与阿尔卑斯山的环境关系，然后登高俯瞰全城脉络，接着深入街道细品建筑细节，最后钻进地下，探访它最核心的铸币秘密。这样的安排能让你像剥洋葱一样，层层揭开哈尔的历史与魅力，中午可以在广场上的传统餐厅享用一顿蒂罗尔午餐，作为行程中的惬意中场休息。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇石板路凹凸不平且常有坡度，务必穿一双绝对舒适防滑的鞋子。许多小店和博物馆中午有至少一小时的休息时间（约12:00-13:00），规划行程时需避开。这里民风淳朴，几乎没有旅游骗局，但餐馆菜单上若未标明价格，最好在点单前询问确认。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从古老的“因斯布鲁克门”进入老城，让第一缕阳光带你走过静谧的、挂着鲜花篮的护城河小径。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走到上广场，在几乎没有游客的时辰，静静仰望市政厅那座戴着洋葱顶帽子的塔楼，看阳光如何一点点点亮墙面上的古老壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`必须钻进“铸币博物馆”，亲手触摸复原的古董压币机，感受一下当年工匠如何将一块银锭变成影响世界的钱币。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的“锻匠巷”缓缓下行，两侧是歪歪扭扭、颜色各异的百年老屋，留心寻找门楣上那些代表不同行会的铁质标志。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`奋力爬上伯格弗里德塔的旋转楼梯，在那一刻，整个哈尔红屋顶的海洋和远方锯齿状的阿尔卑斯雪峰会同时涌入你的眼眶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下广场的拱廊下找一家老字号咖啡馆，点一杯“米朗琪”咖啡，像本地人一样看着广场上的鸽子和小喷泉发呆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访略显低调的宫堡教堂，它的内部藏着令人屏息的晚期哥特式网状肋拱穹顶，如石质的花朵在头顶绽放。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分，慢慢溜达到萨尔河畔，回望被夕照染成金黄色的古城轮廓，听流水声为这一天画上句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`伯格弗里德塔顶西望机位`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，站在塔楼西侧垛口，利用长焦镜头压缩空间，将前景古老的红色瓦屋顶、中景市政厅塔楼与背景清晰的阿尔卑斯山雪线一同纳入画面，层次感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`铸币博物馆内金色光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个晴朗的上午，在博物馆展示巨型古钱币复制的展厅，等待阳光透过高窗，形成一道光柱打在金色钱币模型上，拍摄特写，质感与历史感并存。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`锻匠巷纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时进入这条窄巷，站在巷子一端，利用两侧色彩斑斓、富有肌理的墙壁作为引导线，拍摄巷子纵深感和尽头的光亮，人物可作点缀。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`萨尔河畔倒影拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`风平浪静的清晨或黄昏，站在老桥下游的河岸东侧，可以拍摄到古城建筑群、桥梁与远处山峰在水中的完美倒影，画面宁静而完整。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机在哈尔老城上空拍摄需要特别许可，因属于受保护的历史城区，务必提前查询当地法规。拍摄当地居民尤其是老人时，请务必先微笑示意并征得同意，他们通常很友善。室内博物馆大多允许拍照，但禁用闪光灯和三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住上广场旁一栋15世纪商人宅邸改造的精品酒店，房间保留了原始的木质天花板和石墙，晚上能听到市政厅塔楼传来的报时钟声，仿佛睡在历史里。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭温馨之选`}</h4>
                  <p className="text-sm text-green-800">{`位于老城边缘一栋鹅黄色百年公寓楼里的家庭式旅馆，老板娘会为你准备丰盛的农家早餐，并提供详细的本地散步地图，像回家一样温暖。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计美学之选`}</h4>
                  <p className="text-sm text-yellow-800">{`由老城一座旧仓库改造的现代设计酒店，将粗犷的木梁、砖墙与极简家具巧妙融合，屋顶露台是私享山景与古城夜景的绝密地点。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山水度假之选`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在哈尔周边山坡上的四星级健康酒店，拥有直面阿尔卑斯山的无敌视野和温泉泳池，适合自驾者，享受动静结合的完美假日。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿房间数量通常很少，且非常抢手，尤其是夏季和圣诞市场期间，务必提前数月预订。住在老城内虽然价格略高，但能获得清晨和夜晚古城完全属于你的绝妙体验，物超所值。周边居民区安静安全，步行到老城也就10-15分钟。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开哈尔的时候，我的口袋里没有多出一枚古银币，但心里却好像被某种更厚重的东西填满了。那不是游览著名景点后的打卡满足感，而是一种难得的、平静的充盈。在这个一切都追求速度、规模和尖叫值的时代，哈尔提供了一种相反的价值观：它告诉你，深刻的传奇可以静默地躺在一条寻常小巷的下方，伟大的历史可以与今天的面包房比邻而居。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座小镇教会我一种新的“看”法——不是仰视令人脖子酸痛的宏伟，而是平视，是触摸，是聆听时光在石缝里低语的耐心。它曾经手握定义财富的权柄，却选择在退场后，安然地成为一个美丽的“普通”小镇。这种自知与从容，比任何辉煌的遗迹都更有力量。所以，如果你厌倦了那些被过度讲述的地标，渴望一次真正走进历史纹理深处的旅行，那么，请来蒂罗尔的哈尔。它不会用喧嚣迎接你，但当你离开时，你的记忆里会永远存着一片阿尔卑斯山下的红屋顶，以及一段关于白银如何变成故事，故事又如何融入生活的、安静的诗篇。这是一生必去的清单上，为数不多的、能让内心真正慢下来的地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bad-ischl" className="block group">
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
              <a href="/attractions/duernstein-wachau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杜伦斯泰因</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dürnstein</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/feldkirch-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔德基希老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Feldkirch Old Town</p>
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
