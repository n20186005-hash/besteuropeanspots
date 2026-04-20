import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '乌尔比诺历史中心 Urbino｜文艺复兴活化石与理想城之梦 - 最佳欧洲景点',
  description: '车子在马尔凯大区的绿色丘陵间盘旋，一个转弯，它就像海市蜃楼般出现在前方山巅。那不是一座突兀的城堡，而是一整片蜜糖色的砖石城池，屋顶连绵，塔楼错落，在亚平宁的阳光下泛着温暖而古老的光泽。这就是乌尔比诺给你的第一眼震撼——它不是被参观的“景点”，而是一个自给自足的、活着的文艺复兴之梦。当你把车停在巨大堡...',
}

export default function UrbinoHistoricCentrePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '乌尔比诺历史中心', href: '/attractions/urbino-historic-centre' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`乌尔比诺历史中心・Urbino・意大利・乌尔比诺`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在马尔凯大区的绿色丘陵间盘旋，一个转弯，它就像海市蜃楼般出现在前方山巅。那不是一座突兀的城堡，而是一整片蜜糖色的砖石城池，屋顶连绵，塔楼错落，在亚平宁的阳光下泛着温暖而古老的光泽。这就是乌尔比诺给你的第一眼震撼——它不是被参观的“景点”，而是一个自给自足的、活着的文艺复兴之梦。当你把车停在巨大堡垒下方的停车场，乘坐那部嵌入古老岩壁的透明电梯缓缓上升，仿佛正在穿越时空的甬道。
电梯门打开，你便跌入了另一个时代。脚下是光滑的石板路，两侧是高耸的砖墙，头顶是一线蓝天。空气里有种独特的味道，是陈年石头被阳光晒暖的气息，混合着从某扇敞开的门里飘出的咖啡香和旧纸本的味道。声音在这里变得奇妙：你的脚步声有了回声，远处广场上的人声如同隔着一层水幕传来，偶尔有 Vespa 摩托车的引擎声从窄巷里由远及近又迅速消失。这里的居民——主要是大学生和从容的老人——与你擦肩而过，他们走在拉斐尔可能走过的同一条路上，去市场买菜，去酒吧喝一杯早酒，生活与历史在这里没有界限。
乌尔比诺最打动人心的，是一种深邃的和谐与平衡。它不像佛罗伦萨那样充满戏剧性的华丽，也不像锡耶纳那样有着哥特式的峻急。这里的一切都是缓坡、拱门、比例完美的广场和令人心安的砖红色调。这座城是蒙特费尔特罗公爵的“大脑”，是他将人文主义的抽象理想，变成了可以居住、思考和创造的具体空间。走在其中，你能感受到那种被精心设计过的美感：视线总能在巷陌的尽头被引向一座优雅的宫殿立面，或是一幅远山如黛的自然画框。它安静、内敛、充满智性，仿佛一本立体的哲学书，邀请你放慢脚步，细细阅读每一页砖石。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在马尔凯大区的绿色丘陵间盘旋，一个转弯，它就像海市蜃楼般出现在前方山巅。那不是一座突兀的城堡，而是一整片蜜糖色的砖石城池，屋顶连绵，塔楼错落，在亚平宁的阳光下泛着温暖而古老的光泽。这就是乌尔比诺给你的第一眼震撼——它不是被参观的“景点”，而是一个自给自足的、活着的文艺复兴之梦。当你把车停在巨大堡垒下方的停车场，乘坐那部嵌入古老岩壁的透明电梯缓缓上升，仿佛正在穿越时空的甬道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`电梯门打开，你便跌入了另一个时代。脚下是光滑的石板路，两侧是高耸的砖墙，头顶是一线蓝天。空气里有种独特的味道，是陈年石头被阳光晒暖的气息，混合着从某扇敞开的门里飘出的咖啡香和旧纸本的味道。声音在这里变得奇妙：你的脚步声有了回声，远处广场上的人声如同隔着一层水幕传来，偶尔有 Vespa 摩托车的引擎声从窄巷里由远及近又迅速消失。这里的居民——主要是大学生和从容的老人——与你擦肩而过，他们走在拉斐尔可能走过的同一条路上，去市场买菜，去酒吧喝一杯早酒，生活与历史在这里没有界限。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`乌尔比诺最打动人心的，是一种深邃的和谐与平衡。它不像佛罗伦萨那样充满戏剧性的华丽，也不像锡耶纳那样有着哥特式的峻急。这里的一切都是缓坡、拱门、比例完美的广场和令人心安的砖红色调。这座城是蒙特费尔特罗公爵的“大脑”，是他将人文主义的抽象理想，变成了可以居住、思考和创造的具体空间。走在其中，你能感受到那种被精心设计过的美感：视线总能在巷陌的尽头被引向一座优雅的宫殿立面，或是一幅远山如黛的自然画框。它安静、内敛、充满智性，仿佛一本立体的哲学书，邀请你放慢脚步，细细阅读每一页砖石。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`乌尔比诺历史中心`} />
                <InfoRow label="英文名称" value={`Urbino`} />
                <InfoRow label="正式名称" value={`Urbino`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`乌尔比诺`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`文艺复兴时期最杰出的“理想城市”典范，一座由人文主义思想浇筑而成的山顶乌托邦。`} />
                <InfoRow label="建筑特色" value={`一座浑然天成的山巅砖石迷宫，其和谐的城市天际线被誉为“用建筑写成的诗篇”。`} />
                <InfoRow label="建筑风格" value={`文艺复兴城市规划与中世纪肌理的完美融合，砖石结构的温暖与几何比例的理性在此交汇。`} />
                <InfoRow label="文化价值" value={`15世纪欧洲最重要的学术与艺术中心之一，孕育了拉斐尔，并以其公爵宫廷的光辉照亮了整个西方文明史。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。核心景点公爵宫（Palazzo Ducale）的开放时间通常为周二至周日 8:30-19:15，周一闭馆；具体时间随季节微调，圣诞节、元旦及个别节假日不开放，建议行前在其官网二次确认。拉斐尔故居（Casa Natale di Raffaello）等小型博物馆开放时间较为灵活，冬季可能缩短。`} />
              <InfoRow label="门票价格" value={`漫步古城街道与广场完全免费。参观内部景点需购票：公爵宫门票约15欧元，含国立马尔凯美术馆；拉斐尔故居门票约7欧元。欧盟18-25岁公民及教师有优惠票，18岁以下及65岁以上欧盟公民常免票，具体政策以现场为准。购买乌尔比诺卡（Urbino Card）可能划算，可通行多个主要景点。`} />
              <InfoRow label="地址" value={`Piazza Rinascimento, 13, 61029 Urbino PU, Italy`} />
              <InfoRow label="交通方式" value={`乌尔比诺深藏在马尔凯的群山之中，最近的国际机场是安科纳的马尔凯机场（约70公里）或里米尼的费德里科·费里尼机场（约60公里）。最经典的路线是从博洛尼亚或安科纳乘坐火车至佩萨罗（Pesaro），然后转乘公交。从佩萨罗火车站前的公交站，搭乘“拉吉”公司（Linea Raggi）的公交车，约50分钟蜿蜒上山直达乌尔比诺山城脚下的巴士总站，班次每小时1-2班，车票可在火车站烟草店或车上购买。自驾是最灵活的方式，但古城中心为ZTL限行区，必须将车停在城外的付费停车场（如“Parcheggio Mercatale”），然后步行或乘电梯上山进城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一个名叫费代里科·达·蒙特费尔特罗的男人说起。15世纪中叶，这位并非出身最显赫的公爵，却凭借卓越的军事才能和 shrewd 的政治手腕，积累起了惊人的财富与声望。但他留给世界最珍贵的遗产，不是赢得的战役，而是他倾注心血建造的这座“理想城”。费代里科是个传奇人物，他既是冷酷的雇佣军统帅，又是最痴迷学问与艺术的人文主义君主。传说他在一次战斗中失去了右眼，为了不影响阅读时的视野，他特意命令建筑师将他的书房设计成奇特的“斜面房间”。这位公爵的梦想，是把乌尔比诺变成知识世界的首都。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，黄金时代开始了。费代里科将巨大的财富投入建设。他请来了当时最顶尖的建筑师、艺术家和学者。核心便是那座令人叹为观止的公爵宫，它不像一座炫耀武力的堡垒，而更像一个为沉思和雅集设计的巨大居所。宫殿里藏着当时欧洲最伟大的私人图书馆之一，手抄本数量堪比梵蒂冈。他的宫廷成了全欧知识分子趋之若鹜的圣地，画家皮耶罗·德拉·弗朗切斯卡在这里留下了他那冷静而充满几何秩序的壁画，数学家、天文学家、诗人在此辩论交流。这座山城，变成了一个高速运转的思想引擎。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1474年，一个男孩在这里诞生，他的父亲是公爵宫廷里的画家。男孩在公爵宫的艺术珍宝和整座城市的几何之美中长大，呼吸着自由的空气。后来，他去了佛罗伦萨和罗马，成为了不朽的巨匠。他就是拉斐尔·圣齐奥。乌尔比诺的和谐、平衡与典雅，深深融入了他的血液，最终流淌进《雅典学院》那样的传世杰作中。可以说，没有乌尔比诺的人文主义环境，就不会有拉斐尔笔下那种理想化的完美与宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`盛极必衰，是历史的常态。费代里科公爵去世后，他的儿子圭多巴尔多尽力维持了宫廷的辉煌，但光芒已渐渐黯淡。再后来，教皇国接管了这里，乌尔比诺褪去了先锋思想中心的锐气，变成了一座安静、略带保守的教省城镇。拿破仑的军队来过，搬走了一些珍宝；统一的意大利时代，它则偏安一隅，几乎被世人遗忘。然而，正是这种“被遗忘”，奇迹般地保护了它。没有经历大规模工业化改造，没有遭受二战战火的严重摧残，那座15世纪的理想城市模型，几乎原封不动地凝固在了时间里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到今天，当你漫步乌尔比诺，你依然能触摸到那个黄金时代的脉搏。它不再依靠权力和财富，而是将那股精神传承给了成立于1506年的乌尔比诺大学。数万名年轻学子的涌入，让这座古城没有沦为单纯的博物馆，而是保持着学术的活力与朝气。古老的宫殿里传来现代课堂的讨论声，中世纪的地下室变成了热闹的学生酒吧。历史在这里不是标本，而是仍在书写的篇章。乌尔比诺的故事，是一个关于智慧如何超越武力，美如何定义权力的漫长寓言。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的乌尔比诺之旅，需要一整天（6-8小时）和一双舒适的步行鞋。强烈建议在古城内住一晚，以享受清晨和黄昏无人时分的神圣宁静。游览节奏宜慢不宜快，核心是“迷失”在巷弄中。建议清晨（9点前）抵达，从主城门开始，沿着主街感受古城苏醒的烟火气。上午重点攻克公爵宫及其美术馆，需要至少2.5小时沉浸其中。午后是随意探索的时间，根据拉斐尔故居的开放时间灵活安排，然后尽情钻进那些如毛细血管般的小巷，累了就在广场喝杯咖啡。傍晚时分，一定要步行至城墙外的要塞看台，等待日落将整个砖石城池染成金红色。这样安排，既能深入核心艺术宝藏，又能充分体验古城的生活节奏与光影变幻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`古城内几乎所有街道都是斜坡或台阶，请务必放弃行李箱和难走的鞋子，选择双肩包和运动鞋。
许多小餐馆午市后休息，晚上七八点才开门，规划用餐时间很重要，避免下午饿肚子。
警惕那些在主要广场上过于热情招揽客人的餐馆，味道往往不如深巷里本地人光顾的小店。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从罗马门进入，立刻右转爬上那段陡峭的“圣多纳托斜坡”，在喘息中回望，你会看到晨光中童话般的城门与远处层叠的屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着共和国大街缓缓上行，让两侧古老的宫殿立面、书店和飘着刚出炉“新月面包”香气的糕点店为你拉开一天的序幕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在拉斐尔故居那栋朴素的房屋前停留，想象那个天才少年从这扇门走出，穿过同样的小巷去公爵宫看画的日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将整个上午交给公爵宫，不仅要看皮耶罗的《鞭刑》和那些布满镶嵌细工的书房，更要在那些空旷的庭院和长廊里静静坐着，感受空间的呼吸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上公爵宫的高塔或附近大教堂的圆顶，让360度的视野将你包围，看红色的屋顶如波浪般涌向青色的远山。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在午后的慵懒中，钻进市场广场旁那些只容一人通过的窄巷“Vicolo di Valbona”，触摸冰凉湿润的墙壁，聆听头顶居民晒衣服的声响和意大利语的闲聊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着古城西侧的“Passaggio dei Bolognesi”城墙步道散步，这里是本地人饭后遛狗的秘密通道，可以俯瞰整个山谷的田园风光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前走下城门，沿着城墙外的“巴尔达西尼散步道”走到圣保罗要塞下方的看台，看夕阳如何为这座“理想城”披上最后也是最辉煌的礼服。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣保罗要塞下方的“巴尔达西尼散步道”观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，使用长焦镜头压缩空间，将公爵宫的双塔、大教堂圆顶和层层叠叠的房屋收于同一画框，暖色调的光线会让砖石呈现蜂蜜般的质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`公爵宫内的“公爵书房”门口向内拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`避开正午强光，在上午柔和的侧光下，利用门框形成自然画框，捕捉书房内精致绝伦的镶嵌细工墙面和那扇著名的“视野窗”，营造窥见智慧核心的深邃感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“瓦尔多纳小巷”的中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的上午十点左右，阳光能斜射入窄巷，站在巷中仰拍一线天和两侧高耸的砖墙晾衣绳，捕捉光影切割出的明暗对比和极具生活感的意大利市井画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`市场广场的东北角拍摄广场全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，阳光会温柔地洒在广场西侧的连廊上，此时蹲低机位，利用地面的石板作为引导线，将钟楼、宫殿立面与悠闲的人群一同构图，展现公共空间的几何美感与活力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从“罗马门”外的停车场区域远眺古城`}</h4>
                  <p className="text-sm text-gray-700">{`清晨有薄雾或雨过天晴时最佳，用中焦段拍摄，将前景的绿色山坡、中景的古老城墙与远景朦胧的城池轮廓结合起来，营造它如空中楼阁般从自然中生长的梦幻感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`乌尔比诺的美丽在于整体氛围而非某个单一地标，多尝试拍摄街角光影、门窗细节和人物与环境的互动，比单纯拍建筑更有故事感。`}</li>
                <li>• {`使用无人机需要极度谨慎，古城中心区域严格禁飞，且山地气流复杂，最好在城外开阔地且远离人群处起飞。`}</li>
                <li>• {`尊重居民隐私，拍摄阳台上或窗内的情景前，最好微笑示意或直接放弃，意大利人热情但也注重私人空间。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`城墙内的古老石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择一间由15世纪贵族宅邸改造的公寓，拥有原始的砖拱顶和厚实的墙壁，早晨推开木窗，直接看到邻居家屋顶的瓦片和在不远处钟楼盘旋的燕子。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`由修道院静谧回廊改建的精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`入住真正拥有历史骨骼的建筑，房间挑高惊人，保持着绝对的宁静，早餐在曾经修士们沉思的庭院里享用，仿佛能听见几个世纪前的默祷声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城外丘陵上的农庄住宿`}</h4>
                  <p className="text-sm text-yellow-800">{`开车十分钟，住进被橄榄树和葡萄园环绕的农家，享受开阔的田园视野、主人自酿的葡萄酒和地道家宴，夜晚的星空和古城的点点灯光遥相呼应。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`大学区附近的学生公寓式B&B`}</h4>
                  <p className="text-sm text-purple-800">{`体验真正的乌尔比诺日常，房东可能就是大学教授或艺术家，会给你最地道的吃喝建议，夜晚伴着楼下酒吧里年轻人轻柔的谈笑声入睡，充满活力。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旅游旺季（夏季和重要节日）住宿紧俏，务必提前数月预订，尤其是城内极具特色的房源。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择城外住宿需考虑晚间进出古城的交通，公交车班次夜间稀少，自驾则需牢记ZTL限行区范围。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多古老建筑的民宿没有电梯，携带大件行李会非常痛苦，预订时请务必确认。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开乌尔比诺时，我的背包里没有多一件纪念品，但心里却好像被装满了一些沉甸甸又轻盈的东西。沉甸甸的，是它所承载的那段人类如此执着于追求智慧、美与和谐的历史重量；轻盈的，是整座城市弥漫的那种从容不迫的生活节奏，它温柔地提醒你：生活可以不必慌张。在这个被效率与噪音淹没的时代，乌尔比诺像一个屹立于山巅的宁静避世所。它告诉你，理想不是虚无缥缈的幻想，它可以被烧制成砖，被垒砌成墙，被规划成一条引导目光的街道，最终成为一个可以触摸、可以居住的现实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都该来一次乌尔比诺。不仅仅是为了看拉斐尔的出生地，或是瞻仰公爵宫的珍宝。更是为了亲身体验一种“可能性的示范”——关于人类如何曾试图按照心中最美好的蓝图去建造家园。在这里，你会慢下来，你会观察光影如何在砖石上移动，你会聆听脚步声在小巷里的回响。你会明白，最深度的旅行，不是收集地名，而是让某个地方独特的精神频率，与你内心的某个部分产生共鸣。乌尔比诺就是这样一个地方，它不喧嚣，不炫耀，只是静静地在山上发光，等待那些愿意绕点远路、爬一段坡的人，前来认领一份关于“理想”的古老慰藉。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
