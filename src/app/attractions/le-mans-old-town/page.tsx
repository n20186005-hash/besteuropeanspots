import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '勒芒老城 Le Mans Old Town｜不止24小时赛车，穿越千年的金石灰岩童话城 - 最佳欧洲景点',
  description: '相信我，当你第一眼看到勒芒老城，关于这座城市只有“24小时耐力赛”的刻板印象会瞬间被击得粉碎。我的第一印象来自于一个秋日的午后，阳光正好有了角度，把空气都染成了琥珀色。我不是从正门“进入”老城的，而是一路向上，踩着被无数代人磨得光滑、中心微微凹陷的石板路，“爬”进了它的怀里。那一刻的感觉很奇妙，仿佛...',
}

export default function LeMansOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '勒芒老城', href: '/attractions/le-mans-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`勒芒老城・Le Mans Old Town・法国・勒芒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`相信我，当你第一眼看到勒芒老城，关于这座城市只有“24小时耐力赛”的刻板印象会瞬间被击得粉碎。我的第一印象来自于一个秋日的午后，阳光正好有了角度，把空气都染成了琥珀色。我不是从正门“进入”老城的，而是一路向上，踩着被无数代人磨得光滑、中心微微凹陷的石板路，“爬”进了它的怀里。那一刻的感觉很奇妙，仿佛不是我在走向历史，而是历史这座山，沉稳地向我倾斜而来。
空气里有种特别的味道，是干燥的古老石头被阳光烘烤后散发的、类似泥土与矿物质混合的温暖气息，其间又隐约夹杂着从某扇半开木窗里飘出的现磨咖啡香和刚出炉的黄油面包的甜腻。视线所及，是一种令人屏息的金色。那不是浮夸的金，而是一种厚重、温润、仿佛吸收了千年夕阳的蜂蜜色。巨大的圣朱利安大教堂就像一头用金色石灰岩雕成的史前巨兽，静静地盘踞在山丘之巅，它的飞扶壁像巨兽的肋骨，拱卫着中心。而环绕它的，是层层叠叠、挤挤挨挨的木筋墙房子，那些深色的木梁在淡色墙体上勾勒出菱形、十字形各种几何图案，窗台上盛开着鲜红的天空葵，如同给这座严肃的金色城池，绣上了活泼的蕾丝花边。
最打动我的，是这里无比真实的生活感。这里不是迪士尼布景，而是实实在在有人居住的社区。我在迷宫般的小巷里迷路时，差点撞见一位老太太正从三楼窗口用绳索吊下篮子，收取楼下面包师递上来的长棍面包。拐角处传来小学放学的铃声和孩子们奔跑的笑闹声，在古老的拱廊下回荡。理发店的旋转灯箱在昏暗的巷口缓缓转动，隔壁书店的老板正把新书搬到门外。历史在这里不是被供起来的标本，它就是今天脚下的石板，是耳边混合了教堂钟声和摩托车引擎的背景音，是空气里咖啡与石头交织的味道。这座老城最核心的魅力，就在于这种惊人的“延续性”——它从未死去，只是在以一种缓慢、优雅、充满尊严的节奏，继续活着。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`相信我，当你第一眼看到勒芒老城，关于这座城市只有“24小时耐力赛”的刻板印象会瞬间被击得粉碎。我的第一印象来自于一个秋日的午后，阳光正好有了角度，把空气都染成了琥珀色。我不是从正门“进入”老城的，而是一路向上，踩着被无数代人磨得光滑、中心微微凹陷的石板路，“爬”进了它的怀里。那一刻的感觉很奇妙，仿佛不是我在走向历史，而是历史这座山，沉稳地向我倾斜而来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气里有种特别的味道，是干燥的古老石头被阳光烘烤后散发的、类似泥土与矿物质混合的温暖气息，其间又隐约夹杂着从某扇半开木窗里飘出的现磨咖啡香和刚出炉的黄油面包的甜腻。视线所及，是一种令人屏息的金色。那不是浮夸的金，而是一种厚重、温润、仿佛吸收了千年夕阳的蜂蜜色。巨大的圣朱利安大教堂就像一头用金色石灰岩雕成的史前巨兽，静静地盘踞在山丘之巅，它的飞扶壁像巨兽的肋骨，拱卫着中心。而环绕它的，是层层叠叠、挤挤挨挨的木筋墙房子，那些深色的木梁在淡色墙体上勾勒出菱形、十字形各种几何图案，窗台上盛开着鲜红的天空葵，如同给这座严肃的金色城池，绣上了活泼的蕾丝花边。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是这里无比真实的生活感。这里不是迪士尼布景，而是实实在在有人居住的社区。我在迷宫般的小巷里迷路时，差点撞见一位老太太正从三楼窗口用绳索吊下篮子，收取楼下面包师递上来的长棍面包。拐角处传来小学放学的铃声和孩子们奔跑的笑闹声，在古老的拱廊下回荡。理发店的旋转灯箱在昏暗的巷口缓缓转动，隔壁书店的老板正把新书搬到门外。历史在这里不是被供起来的标本，它就是今天脚下的石板，是耳边混合了教堂钟声和摩托车引擎的背景音，是空气里咖啡与石头交织的味道。这座老城最核心的魅力，就在于这种惊人的“延续性”——它从未死去，只是在以一种缓慢、优雅、充满尊严的节奏，继续活着。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`勒芒老城`} />
                <InfoRow label="英文名称" value={`Le Mans Old Town`} />
                <InfoRow label="正式名称" value={`Le Mans Historic Centre (Cité Plantagenêt)`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`勒芒`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国乃至欧洲保存最完好的中世纪城镇之一，曾是安茹帝国（金雀花王朝）的摇篮与重要基石。`} />
                <InfoRow label="建筑特色" value={`金色石灰岩与彩色木筋墙房屋的完美交响，在蜿蜒陡峭的街巷中形成强烈的视觉与质感对比。`} />
                <InfoRow label="建筑风格" value={`以罗马式与火焰哥特式为主的宗教建筑，与文艺复兴时期繁复的木筋墙民居和谐共存。`} />
                <InfoRow label="文化价值" value={`一座仍在呼吸的“活态博物馆”，千年历史并非封存于玻璃柜中，而是当地居民日常生活的背景与舞台。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`勒芒老城为开放式街区，全天24小时可自由漫步。其核心景点圣朱利安大教堂开放时间通常为周一至周五 8:30-19:00，周六日 8:30-12:00 & 14:00-19:00（冬季可能提前至18:00关闭）。老房子博物馆等小型博物馆通常在周二闭馆，具体开放时间为10:00-18:00。建议出行前再次确认，部分节假日如圣诞节、元旦可能全天关闭。`} />
              <InfoRow label="门票价格" value={`进入勒芒老城街区完全免费。圣朱利安大教堂主体免费参观，但登塔楼或参观珍宝室可能需要支付少量费用（约3-5欧元）。老房子博物馆等独立景点门票约4-6欧元。持有勒芒城市通票可能享受折扣。`} />
              <InfoRow label="地址" value={`Le Vieux Mans, 72000 Le Mans, France`} />
              <InfoRow label="交通方式" value={`从巴黎蒙帕纳斯火车站乘坐TGV高速列车，约54分钟即可直达勒芒火车站。这是最便捷的方式，班次频繁，高峰时段每小时可达2-3班，建议提前在SNCF官网或APP购票以获得优惠票价。从勒芒火车站（Gare du Mans）到老城，步行是最佳选择，约需20-25分钟。出站后沿着清晰的“Cité Plantagenêt”或“Vieux Mans”指示牌，穿过共和国广场和市政厅，一路向上坡走即可抵达。亦可乘坐有轨电车T1线至“République”站，再步行约10分钟。自驾可将车停在老城山脚下的“Place des Jacobins”大型地下停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲勒芒老城的故事，我们得把时钟拨回到罗马人还没来的高卢时期。萨尔特河的这个拐弯处，地势险要，易守难攻，天生就是部落聚居的要塞。但真正让它在历史上留下浓墨重彩第一笔的，是公元三世纪那位传奇的圣朱利安。据说这位来自意大利的传教士，被派到当时还叫“苏因迪农”的勒芒担任第一任主教。关于他最著名的传说是“杀龙”——这“龙”很可能隐喻着当时顽固的异教信仰或某种自然灾害。他在萨尔特河上修建了第一座桥，连接了河两岸的社区，这座桥的遗址至今仍是老城结构的一部分。他去世后，人们为了纪念他，开始在他墓地周围修建一座小教堂，这就是后来那座庞然大物般的大教堂最初的、卑微的起点。圣朱利安成了勒芒的守护神，他的名字也最终赋予了城市核心的这座建筑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到中世纪鼎盛时期，勒芒迎来了它的黄金时代。这要归功于一门产业——纺织，特别是那种名为“勒芒粗布”的坚韧帆布。财富像萨尔特河的河水一样源源不断涌入，商人和行会们口袋满满，急于彰显自己的成功。于是，我们今天看到的那些令人眼花缭乱的木筋墙房子，就像雨后春笋一样在老城的陡坡上生长起来。每一栋房子都是一张名片：木材的粗细、雕刻的繁简、图案的寓意（比如象征丰饶的葡萄藤、代表忠诚的盐罐），无不显示着主人的财力和品位。老城变成了一个巨大、立体、生动的中世纪财富展览馆。然而，真正的戏剧性转折发生在12世纪，一个来自本地的家族登上了欧洲权力的巅峰舞台——金雀花王朝（安茹帝国）。勒芒伯爵杰弗里五世，因为喜欢在帽子上插一枝金雀花而得名，他娶了英格兰的女继承人玛蒂尔达。他们的儿子，就是那位叱咤风云的亨利二世，建立了横跨英格兰和半个法国的庞大“安茹帝国”。勒芒，作为这个帝国的摇篮和大陆领土的关键枢纽，其政治地位一时无两。虽然帝国的中心后来转移了，但“Plantagenêt”（金雀花）这个充满植物香气的名字，永远烙印在了老城的历史肌理上，成为它今天官方别名的由来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，千年的岁月不可能只有玫瑰。老城经历了无数次围城、战火和瘟疫的洗礼。尤其是英法百年战争期间，勒芒在英军和法军之间反复易手，城墙被摧毁又重建，居民在恐惧中求生。但奇妙的是，每一次创伤之后，它总能以一种“修补”而非“重建”的方式恢复生机。也许是因为石头太坚固，也许是因为生活本身的韧性。到了文艺复兴和古典主义时期，当巴黎和卢瓦尔河谷开始大兴土木建造规整的宫殿时，勒芒老城却像一位固执的老人，基本保持了中世纪的肌理和风貌。新的建筑只是小心翼翼地嵌入旧的骨架，没有进行那种伤筋动骨的城市改造。这种“停滞”，在后来看，反而成了它最大的幸运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入近现代，工业革命和两次世界大战似乎有意绕开了这个山丘。当勒芒新城在河对岸蓬勃发展，成为著名的工业与赛车之城时，老城仿佛被时光遗忘，逐渐褪色、破败。直到20世纪60年代，人们才惊觉这片珍宝濒临消亡。一场法国最早、也最成功的旧城保护运动在这里展开。但勒芒的模式非常智慧：它不是把居民迁走，把房子变成空壳博物馆，而是由政府资助，严格遵循古法进行修缮，同时改善内部的现代生活设施（比如偷偷埋入下水管道和电线），让老房子既能满足现代居住需求，又不损其历史外观。正是这种“以人为本”的保护理念，才让今天的我们，能看到一个依然在呼吸、在心跳的、活的勒芒老城。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的勒芒老城深度游，应该像品一瓶陈年的卢瓦尔河谷白诗南葡萄酒，需要时间，需要悠闲的心境，更需要顺着它本身的节奏。我强烈建议你在上午九点半之后抵达，这样既能避开本地居民清晨的上班通勤时段，又能享受到柔和的侧光照射在金色石灰岩上的美妙时刻。整体游览可以安排6-8个小时，不必赶路。路线本质上是一个环线，从至高点的大教堂开始，螺旋式向下深入迷宫般的街巷，最后沿着古老的城墙漫步，完成一次时空闭环。中午不妨在老城中心找家餐馆用餐，晚上则一定要等待华灯初上，那时木筋墙房子会被灯光打得如同童话屋。记住，在这里，迷路不是 bug，而是 feature。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、防滑的鞋子，老城的石板路陡峭且光滑，尤其是在雨后。许多小巷非常狭窄且安静，请保持低声交谈，尊重在此居住的居民的隐私和生活安宁。不要试图在主要纪念品商店购买所谓“赛车主题”的廉价商品，真正的纪念品藏在老街里独立工匠的店铺中，比如手工陶瓷或复古印刷品。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先从后方接近圣朱利安大教堂，仰望它那如火箭助推器般强有力的飞扶壁群，感受建筑作为防御工事的原始力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开厚重的橡木门进入大教堂中殿，让你的眼睛适应昏暗，然后寻找那幅著名的“升天图”彩绘玻璃，看蓝色如何在一千年前被演绎得如此深邃辉煌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大教堂南侧的小门走出，立刻置身于狭窄的“大教堂教士街”，用指尖触碰那些冰凉的金色墙砖，抬头看木筋墙房子的阳台几乎要在头顶相接。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒陡峭的“女伯爵街”下行，在“忏悔者台阶”处停下，想象中世纪妇女们提着裙摆在此上下，并留意脚下石板上可能被岁月磨出的凹痕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找挂有“老房子博物馆”标志的15世纪豪宅，走进去看看当年富商家庭的布局，厨房里巨大的壁炉会让你明白什么是真正的“炊烟”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在骑士广场的露天咖啡馆坐下，点一杯“西打”气泡苹果酒，什么都不做，就看广场上的人来人往，听喷泉的水声混着街边艺人的手风琴声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那面被称为“罗马墙”的遗迹，它是高卢罗马时期城墙的一部分，看看古代工匠如何将砖与石拼接出千年不倒的美丽图案。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前爬上“绿色长廊”，这是一段建在古城墙遗址上的散步道，从这里可以俯瞰萨尔特河、红色屋顶的新城，以及远处若隐若现的24小时赛道。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣朱利安大教堂东侧台阶仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，阳光从西面过来，照亮教堂金色的东端半圆形后殿，站在台阶下用广角镜头仰拍，能将宏伟的建筑与天空一同纳入，人物可作剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`木筋墙巷道框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`比如在“三鱼街”，利用两侧色彩最鲜艳的木筋墙房屋形成的天然“画框”，对准远处巷口的光亮或一个走过的行人拍摄，营造深邃的叙事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士广场对称倒影`}</h4>
                  <p className="text-sm text-gray-700">{`雨后清晨，利用广场石板上浅浅的积水，低角度拍摄广场周边文艺复兴式楼房的倒影，能得到一幅色彩斑斓、极具对称美的抽象画。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“绿色长廊”俯瞰全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，在老城西北角的城墙散步道上，用中长焦镜头压缩空间，将前景古老的石墙、中景层层叠叠的老城红瓦屋顶、背景现代的萨尔特河大桥和城市天际线全部收纳，讲述古今对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄尤其是教堂内，请务必关闭闪光灯，并尊重任何禁止拍摄的标志。拍摄居民或商户时，请先微笑并征得对方同意，这是基本的礼貌。想拍摄老城璀璨的夜景，一个轻便的三脚架是必需品，黄昏后蓝调时刻的灯光初亮时分最为梦幻。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`老城山脚下萨尔特河畔的“港口之家”B&B，由老船闸管理人的房子改建，房间虽小却充满航海元素，早晨能在河边听着水声享受女主人准备的超丰盛家庭早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`藏在“银街”深处一栋15世纪木筋墙房子里的“金雀花公馆”小型精品酒店，只有五间房，每间都保留了原始的橡木梁和石墙，床幔是厚重的天鹅绒，仿佛睡在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于新城与老城交界处、由19世纪贵族府邸改造的“皇家密涅瓦酒店”，古典法式花园与室内泳池兼备，在顶层的套房阳台可以直接平视圣朱利安大教堂的玫瑰窗。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特尝试`}</h4>
                  <p className="text-sm text-purple-800">{`老城边缘一栋17世纪联排屋中的设计师公寓，房东是本地艺术家，屋内混搭了复古家具和现代艺术作品，厨房设施齐全，让你能像本地人一样去市集买菜做饭。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量有限且极其抢手，尤其是旅游旺季（五月至九月）和勒芒24小时赛期间，务必提前至少三个月预订。住在老城内夜晚极其安静，但清晨可能会有教堂钟声或垃圾清运的细微声响，对睡眠极敏感者需考虑。老城治安很好，但夜间巷道灯光昏暗，建议结伴而行。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开勒芒老城好多天了，我脑海里反复回响的，不是赛车引擎的咆哮，而是我的鞋底摩擦过那些光滑石板路时发出的细微沙沙声。那声音里有一种奇妙的安抚力量。在这个追求速度、效率和崭新事物的世界里，勒芒老城的存在本身，就是一种温柔而坚定的反抗。它告诉我们，有些东西不必“快”，缓慢的沉淀、持续的使用、有尊严的衰老，反而能累积出一种任何新建仿古街都无法比拟的深度与温度。它不是一个被抽干了灵魂的景点，而是一个依然在用石头、木头和日常生活书写自己编年史的有机体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，这就是为什么每一个热爱深度游的人都该来这里看看。它不仅仅是为了看一座漂亮的中世纪小镇，更是为了体验一种“时间可以如何被居住”的可能性。在这里，你能同时触摸到罗马帝国的基石、聆听金雀花王朝的余韵、目睹中世纪商人的野心、感受现代勒芒人平凡而扎实的市井生活。所有这些层次，没有被清晰的分割，而是像油画颜料一样，一层覆盖一层，相互渗透，最终融合成今天我们所见的、这片独一无二的“金石灰岩色”。当你穿行其中，你也是在穿行于时间本身。你会发现，历史从来不是过去式，它就是我们脚下正在走的路，是我们呼吸的空气，是我们故事的一部分。勒芒老城，就是这份觉醒最好的礼物。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
