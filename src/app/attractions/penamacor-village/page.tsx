import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩纳马科尔 Penamacor｜边境山巅的失落石堡与猞猁走廊 - 最佳欧洲景点',
  description: '车子在几乎看不到尽头的平原公路上行驶，突然，远方地平线上冒出一个墨绿色的、顶部覆盖着深灰色影子的山丘。开得越近，那影子便愈发清晰，逐渐显露出锯齿般的城墙轮廓和一座孤零零的方塔——那就是佩纳马科尔了。它不像那些明信片上的童话城堡，而是更像一块被岁月遗忘、直接从山岩里生长出来的巨大骨骸，带着一种沉默而倔',
}

export default function PenamacorVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '佩纳马科尔', href: '/destinations/europe' },
            { label: '佩纳马科尔', href: '/attractions/penamacor-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩纳马科尔・Penamacor・葡萄牙・佩纳马科尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在几乎看不到尽头的平原公路上行驶，突然，远方地平线上冒出一个墨绿色的、顶部覆盖着深灰色影子的山丘。开得越近，那影子便愈发清晰，逐渐显露出锯齿般的城墙轮廓和一座孤零零的方塔——那就是佩纳马科尔了。它不像那些明信片上的童话城堡，而是更像一块被岁月遗忘、直接从山岩里生长出来的巨大骨骸，带着一种沉默而倔强的威严。空气中有一种边境地带特有的空旷感，风毫无阻拦地刮过橄榄树林和裸露的岩石，带来干燥的泥土和野生迷迭香的气息。
把车停在山脚下，沿着古老的石板步道开始向上攀登。脚底的石块被几个世纪的脚步和雨水打磨得中心微微凹陷，光滑而温润。路边是当地人的菜园，用更多的石块垒成矮墙，里面种着卷心菜和洋葱。偶尔有老人坐在自家门槛上，对你点头，用含糊的葡萄牙语说一句“下午好”，他们的脸庞如同脚下的花岗岩一样，布满深刻的纹路，眼神平静而疏离。这里的时间流速仿佛和山下那个高速运转的世界完全不同，你能听到的唯一响亮的声音，是风穿过城堡废墟窗洞时发出的、如同吹过瓶口般的呜咽。
当你终于站在城堡荒芜的庭院中央，那种震撼是无声却全方位的。脚下是破碎的石板缝隙里钻出的顽强野花；抬头是那座依然挺拔的钟楼（Torre de Menagem），它的石块颜色深浅不一，诉说着不同年代的修补故事；而当你转身凭栏——哇，整个世界在你脚下豁然开朗。无垠的平原像一幅巨大的、黄绿交织的地毯一直铺到天际线，远处的山峦是淡淡的青灰色。几个世纪前的哨兵，就是日复一日地看着这片同样的风景，警惕着可能从地平线出现的烟尘。如今，威胁不再是军队，而是寂静本身。但这种寂静富含生命力，你知道，在那片广袤的灌木丛林（蒙太多）里，欧洲最濒危的猫科动物——伊比利亚猞猁，正在悄然走过曾经的边境线。这里从军事边疆变成了生命走廊，这份隐喻让每一块冰冷的石头，都透出了一丝温暖的希望。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在几乎看不到尽头的平原公路上行驶，突然，远方地平线上冒出一个墨绿色的、顶部覆盖着深灰色影子的山丘。开得越近，那影子便愈发清晰，逐渐显露出锯齿般的城墙轮廓和一座孤零零的方塔——那就是佩纳马科尔了。它不像那些明信片上的童话城堡，而是更像一块被岁月遗忘、直接从山岩里生长出来的巨大骨骸，带着一种沉默而倔强的威严。空气中有一种边境地带特有的空旷感，风毫无阻拦地刮过橄榄树林和裸露的岩石，带来干燥的泥土和野生迷迭香的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在山脚下，沿着古老的石板步道开始向上攀登。脚底的石块被几个世纪的脚步和雨水打磨得中心微微凹陷，光滑而温润。路边是当地人的菜园，用更多的石块垒成矮墙，里面种着卷心菜和洋葱。偶尔有老人坐在自家门槛上，对你点头，用含糊的葡萄牙语说一句“下午好”，他们的脸庞如同脚下的花岗岩一样，布满深刻的纹路，眼神平静而疏离。这里的时间流速仿佛和山下那个高速运转的世界完全不同，你能听到的唯一响亮的声音，是风穿过城堡废墟窗洞时发出的、如同吹过瓶口般的呜咽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你终于站在城堡荒芜的庭院中央，那种震撼是无声却全方位的。脚下是破碎的石板缝隙里钻出的顽强野花；抬头是那座依然挺拔的钟楼（Torre de Menagem），它的石块颜色深浅不一，诉说着不同年代的修补故事；而当你转身凭栏——哇，整个世界在你脚下豁然开朗。无垠的平原像一幅巨大的、黄绿交织的地毯一直铺到天际线，远处的山峦是淡淡的青灰色。几个世纪前的哨兵，就是日复一日地看着这片同样的风景，警惕着可能从地平线出现的烟尘。如今，威胁不再是军队，而是寂静本身。但这种寂静富含生命力，你知道，在那片广袤的灌木丛林（蒙太多）里，欧洲最濒危的猫科动物——伊比利亚猞猁，正在悄然走过曾经的边境线。这里从军事边疆变成了生命走廊，这份隐喻让每一块冰冷的石头，都透出了一丝温暖的希望。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩纳马科尔`} />
                <InfoRow label="英文名称" value={`Penamacor`} />
                <InfoRow label="正式名称" value={`Penamacor`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`佩纳马科尔`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙东部边境“被遗忘的防线”上最关键的山巅哨所，数个世纪以来默默守护着王国与西班牙的陆地疆界。`} />
                <InfoRow label="建筑特色" value={`粗糙的花岗岩城堡废墟与山下红色瓦顶的朴素民居和谐共生，形成一道从山顶蔓延至谷地的阶梯式立体景观。`} />
                <InfoRow label="建筑风格" value={`简朴而坚固的曼努埃尔晚期军事建筑风格，融合了当地民间石材工艺，几乎没有多余的装饰。`} />
                <InfoRow label="文化价值" value={`一个边境社群坚韧生命力的活态见证，从军事对峙的前沿转变为伊比利亚珍稀生态系统保护的门户，体现了从“分隔”到“联通”的深刻文化变迁。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡遗迹区域全天开放（外部参观）。城堡主塔楼及博物馆的开放时间通常为夏季（4月至9月）上午9:30至下午1:00，下午2:30至6:00；冬季（10月至3月）时间可能缩短，建议出行前查询当地旅游局最新公告。周一及主要节假日可能闭馆。`} />
              <InfoRow label="门票价格" value={`进入村镇及城堡外围区域免费。进入城堡主塔楼或小型地方博物馆可能需要支付小额门票，约2-3欧元，学生及老人有优惠。具体价格可能随季节调整。`} />
              <InfoRow label="地址" value={`Largo do Castelo, 6090-543 Penamacor, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本出发是最常见的选择。首先在里斯本的东方火车站（Gare do Oriente）搭乘长途大巴或火车前往卡斯特洛布兰科（Castelo Branco），车程约2.5-3小时，班次每天约4-5趟。抵达卡斯特洛布兰科后，需要换乘区域性小巴前往佩纳马科尔，这段车程约1小时，但班次极为稀疏，通常每天只有1-2班，且周末大幅减少。最灵活的方式是在卡斯特洛布兰科租车自驾，沿IP2/N233公路向东北方向行驶约50公里即可到达，沿途是开阔的平原和丘陵风光，驾驶体验极佳。务必提前查好巴士时刻表或预留租车预算。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解佩纳马科尔的石头为何如此沉默而坚韧，你得把手指放在地图上，顺着那条看不见的线滑动——那是葡萄牙和西班牙之间漫长而曲折的边界。早在罗马人时代，这座山丘的战略价值就被发现了，但真正让它穿上石质盔甲的，是中世纪那动荡的几百年。基督教王国从北向南进行“再征服运动”，而摩尔人的势力时进时退，这片土地就像拉锯战中的绳索中心，反复易手。12世纪末，葡萄牙第一位国王阿方索·恩里克斯的军队终于稳固了这里，一座简陋的木石堡垒被建立起来，它的任务很简单：瞭望、预警、死守。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡真正开始拥有今天我们所见的雏形，要归功于13世纪的国王迪尼斯一世。这位被称为“农夫国王”的统治者，不仅鼓励农业，更深知边境稳固的重要性。他大力推行“边境村镇”政策，授予佩纳马科尔特许状，鼓励人们来此定居，并投入资源将城堡扩建为更坚固的石结构。城墙被加厚，塔楼被增高，一座简朴但结实的主堡矗立在了山巅。你可以想象，当时的镇长或骑士指挥官，每天清晨沿着城墙巡视，目光扫过东面的每一寸土地，他的肩膀上扛着整个王国边境的安全。定居于此的农民和手工业者，则在山坡上建造起他们的石头房子，一旦烽火燃起，他们便带着牲畜逃入城堡。城堡不只是军事设施，它是整个社群在乱世中生存下去的唯一保证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫长的岁月里，战争与和平像季节一样交替。1385年，决定葡萄牙独立的阿尔朱巴罗塔战役爆发，边境气氛紧张到极点，佩纳马科尔的守军可能彻夜难眠。到了15世纪末16世纪初，随着葡萄牙航海发现带来的黄金时代，国家的重心转向海洋，内陆边境的紧张感稍稍缓解。城堡在曼努埃尔一世时期进行了一些修缮和现代化改造，比如增加了更适应火器时代的防御设计，但那种海洋时代的奢华风格，几乎没有在这里留下任何痕迹。这里的石匠们只会建造实用的、坚固的、能抵御炮弹和风雨的东西。城堡的质朴，恰恰是它始终忠于其原始使命的证明。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在1640年葡萄牙恢复独立战争之后。随着现代国家边界条约的逐步签订，固定的国界取代了模糊的边疆地带，像佩纳马科尔这样的边境堡垒，其军事价值急剧下降。驻军减少了，维修经费停止了，石头建筑开始了它缓慢而不可逆的“自然化”过程。风霜雨雪侵蚀着灰缝，植物在墙缝中扎根，部分城墙因无人照料而坍塌。它从一个国家的盾牌，变成了一个地方性的地标，一个牧羊人避雨的地方，一个孩子们玩耍的冒险乐园。时间在这里仿佛睡着了，小镇的发展也近乎停滞，许多年轻人离开，前往沿海的城市或更远的国度寻找机会。佩纳马科尔成了一首关于“失去”与“坚韧”的物化诗篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，到了20世纪末21世纪初，一个全新的叙事悄然为这片土地注入了灵魂。生物学家们发现，葡萄牙东部与西班牙接壤的这片广阔荒地（蒙太多生态系统），是极度濒危的伊比利亚猞猁最后也是最重要的栖息地之一。曾经用于军事防御的荒芜边境地带，因其人类活动稀少，反而成了野生动物穿越国境的完美走廊。佩纳马科尔，这个昔日的军事前哨，发现自己突然站在了一项宏伟的生态保护工程的门槛上。人们不再用警惕的目光审视边境线那头，而是开始用望远镜和红外相机，寻找猞猁那神秘的身影。城堡废墟依然矗立，但它所守护的东西，已经从王国的疆土，悄然变成了整个物种存续的希望。这个转变，或许是这些古老石头所能听到的，最美丽的现代传奇。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间沉浸于此。最佳方式是前一晚抵达并住下，第二天清晨开始探索。上午光线柔和，适合探访城堡废墟并俯瞰全景，此时游客稀少，你能独享那份苍茫的宁静。中午下山，在小镇广场找家餐馆享用漫长的午餐，感受当地生活节奏。下午深入蜿蜒的古老街巷，探访那些被遗忘的角落和小型博物馆。如果体力允许，可以在日落前驾车前往附近自然保护区指定的观察点附近（严禁擅自进入核心区），感受边境荒野的黄昏气息。这样的安排张弛有度，既能领略历史厚重感，又能捕捉到小镇日常生活的脉搏，并感受到其作为生态门户的独特角色。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着坚固防滑的徒步鞋，城堡遗迹的石阶和山路布满碎石且不平整。小镇餐饮选择有限且午休时间很长（约下午1点至3点），计划好用餐时间，或提前在住宿地安排。切勿试图擅自进入猞猁自然保护区的核心封闭区域，这不仅危险且违法，应在游客中心咨询合法的观察路线或导游陪同项目。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一缕阳光洒上钟楼塔尖时，从小镇主广场旁的“Rua do Castelo”石阶路开始向上攀登，感受冰凉的石块在脚下逐渐被晒暖的过程。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在城堡主塔楼的残垣断壁间，向东极目远眺，试着辨认远处那片属于西班牙的领土和近处葡萄牙的平原，想象哨兵的目光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用手触摸主城门（Porta da Vila）旁一块颜色迥异的修复石料，听向导或信息牌讲述它在某次围攻或雷击后重生的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙的步行小径慢慢走到南侧的圣器室小教堂遗迹，在残存的拱门下静坐片刻，听风声与远处偶尔传来的教堂钟声交织。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后绕到城堡山体的背面，探访那条被称为“犹太区”的狭窄隐蔽巷弄“Rua da Judiaria”，触摸墙面上可能存在的古老符号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在镇中心的共和国广场（Praça da República）榕树下找家老咖啡馆，点一杯 bica（浓缩咖啡），看退休的老人们玩牌、聊天，时间在这里慢得可以凝固。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访小镇的地方博物馆（Museu Municipal），里面不起眼的展品会告诉你关于边境生活、农业工具和可能发现的猞猁足迹的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落时分驱车前往镇外几公里处的一个官方推荐的瞭望点（如 Portela de São Simão），用望远镜扫视辽阔的蒙太多灌木丛，怀抱一份看到珍稀野生命的期待。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡钟楼剪影与晨雾`}</h4>
                  <p className="text-sm text-gray-700">{`日出后半小时内，从小镇西侧入口的公路弯道处远眺，晨雾常萦绕山腰，能拍出城堡如悬浮仙境的梦幻全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主城门的光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`上午九十点阳光斜射入城门甬道时，站在门内向外拍摄，拱门形成完美的画框，框住山下红瓦屋顶与远方的平原，光影对比强烈。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“犹太区”巷弄的质感特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点阳光为狭窄巷道投下长长的阴影时，贴近石墙拍摄墙面的苔藓、修补痕迹和岁月的纹理，建议使用侧光强调质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`共和国广场的日常生活`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚“黄金小时”，坐在广场咖啡馆外侧，用长焦镜头捕捉当地居民交谈、孩童奔跑的生动瞬间，以古老市政厅建筑为背景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`边境荒野日落全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前驱车至 São Simão 观景台，用广角镜头捕捉如熔金般的夕阳将无边的蒙太多灌木丛和蜿蜒的边境公路染成温暖的色调。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄人物时尽量征得同意或采用远景、背影。在自然保护区内拍摄时保持安静，避免使用闪光灯惊扰野生动物。这里的魅力在于苍凉质朴的质感，后期调色可偏向于突出石头的灰褐、土地的赭黄和天空的湛蓝，避免过度修饰的艳丽风格。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山居石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在城堡山腰由百年石屋改造的民宿里，晚上能听到最纯粹的风声，清晨打开窗就是盘旋的鹰隼和全景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`边境生态旅馆`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇边缘靠近自然保护区的家庭式旅馆，主人可能是自然爱好者，能提供最新的野生动物观察资讯和自制农家晚餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史中心客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`由共和国广场一栋老建筑改造的小型客栈，下楼就是咖啡馆和面包店，能最便捷地融入小镇日常生活的韵律。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`庄园隐居之所`}</h4>
                  <p className="text-sm text-purple-800">{`需要开车一段距离，位于附近丘陵中的一座古老农庄，提供与世隔绝的宁静，夜晚的星空璀璨无比，附带小型泳池缓解夏日暑热。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩纳马科尔的住宿数量非常有限，且多为家庭经营，强烈建议提前数周甚至数月预订，尤其是在夏季和周末。小镇治安极好，夜晚安静得只有自然之声，但街灯较少，自备一个小手电筒会很有用。选择住宿时，确认是否有暖气或空调，因为这里冬冷夏热，气温较为极端。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开佩纳马科尔许久后，脑海里挥之不去的，不是某一张具体的明信片画面，而是一种混合的感觉：花岗岩的粗砺触感、荒野风声的凛冽、迷迭香的清冽气息，以及那种无边无际的、承载着历史的寂静。这个地方有一种魔力，它轻轻卸下了你从都市带来的所有焦虑和匆忙。在这里，重要的不再是效率、消费或社交网络上的展示，而是单纯的“存在”——存在于这片天空下，存在于这段漫长的时光里，存在于石头与荒野、人类与猞猁共同谱写的边界故事中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个全球化时代，边界的概念常常被讨论为阻隔与分歧。但佩纳马科尔给出了另一个答案。它曾是用石头和警惕定义的军事边界，如今却演变为用生态和保护定义的生命边界。它告诉我们，分界线可以是温柔的，可以不是隔绝的墙，而是一条需要被共同呵护的、脆弱的缝合线。每一位置身于城堡废墟，眺望那片猞猁可能漫步的平原的旅人，收获的不仅是一段历史知识或几张照片，更是一种视角的转换：从人类中心的纷争史，切换到万物共存的生态观。这正是深度旅行最珍贵的礼物——它让你看到的，远多于你目光所及的。所以，如果你渴望一场真正能沉淀心灵的旅程，请来佩纳马科尔，听听风在废墟间讲述的，关于守护与转变的、古老而崭新的故事。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/capela-dos-ossos-faro" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法鲁人骨礼拜堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Capela dos Ossos (Faro)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monsaraz-portugal-history" className="block group">
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
              <a href="/attractions/quinta-da-regaleira-sintra" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷加莱拉庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Quinta da Regaleira</p>
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
