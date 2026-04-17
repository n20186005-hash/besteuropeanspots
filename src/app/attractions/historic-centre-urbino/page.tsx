import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '乌尔比诺历史中心 Historic Centre of Urbino｜完美文艺复兴山城与拉斐尔故乡的朝圣 - 最佳欧洲景点',
  description: '车子沿着蜿蜒的山路盘旋而上，当转过最后一个弯，眼前豁然开朗的瞬间，你会忘记呼吸。那不是一座平地而起的城市，而是一座从亚平宁山脉的翠绿褶皱中“生长”出来的、由蜜糖色砖石砌成的王冠。乌尔比诺就这样静静地矗立在两座山丘上，轮廓分明，在托斯卡纳式的柔和阳光下，泛着温暖而沉稳的光泽。空气中是干燥的泥土、古老石...',
}

export default function HistoricCentreUrbinoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '乌尔比诺历史中心', href: '/attractions/historic-centre-urbino' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`乌尔比诺历史中心・Historic Centre of Urbino・意大利・乌尔比诺`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着蜿蜒的山路盘旋而上，当转过最后一个弯，眼前豁然开朗的瞬间，你会忘记呼吸。那不是一座平地而起的城市，而是一座从亚平宁山脉的翠绿褶皱中“生长”出来的、由蜜糖色砖石砌成的王冠。乌尔比诺就这样静静地矗立在两座山丘上，轮廓分明，在托斯卡纳式的柔和阳光下，泛着温暖而沉稳的光泽。空气中是干燥的泥土、古老石墙和远处森林混合的气息，偶尔传来教堂钟声，悠远而清晰，瞬间将你拉离21世纪的喧嚣。
走进城墙下的波尔塔瓦莱城门，时间仿佛自动调慢了流速。脚下的石板路被几个世纪的行人磨得光滑如镜，带着微微的坡度，引领你深入这座“山城”的肌理。这里没有佛罗伦萨那样汹涌的人潮，街道上多半是背着书包、步履轻快的大学生（是的，乌尔比诺拥有欧洲最古老的大学之一），夹杂着本地老人提着菜篮的悠闲身影。城市的“心跳”声是细微的：咖啡馆里杯碟的轻碰、书店里翻动书页的沙沙声、以及从某个敞开的窗户里飘出的古典乐练习曲。你会发现，文艺复兴在这里不是博物馆里的标本，而是一种依然在呼吸的日常氛围。
而这一切气质的源头，都汇聚于那座庞然大物——公爵宫。它不像其他宫殿那样炫耀浮夸，更像一座巨大的、沉思的几何体，稳稳地坐在城市的最高处。走进其中庭，你会立刻被那种近乎神圣的宁静所笼罩。光线从高高的拱廊洒下，在淡粉色和白色相间的大理石地板上切割出规整的光影。那种极致的秩序感、比例与和谐，不是冷冰冰的，而是一种充满理性之美的温暖拥抱。你会突然明白，为什么拉斐尔笔下的圣母和人物总是带着那样一种平衡、典雅与内在的宁静，他的美学启蒙，就源于这座宫殿的墙壁之间。
最后，一定要去寻访拉斐尔故居。那是一座朴素的黄色三层小楼，藏在不远处一条安静的巷弄里。比起公爵宫的恢弘，这里显得格外亲切和平凡。站在他出生的房间，看着窗外依旧是几百年前的屋顶线与蓝天，你会有一种奇妙的连接感：那个将文艺复兴的和谐之美推向顶峰的天才，最初看见的世界，就是这片错落有致、光影婆娑的屋顶与远山。这种平凡与伟大之间的咫尺距离，或许是乌尔比诺最动人的秘密。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着蜿蜒的山路盘旋而上，当转过最后一个弯，眼前豁然开朗的瞬间，你会忘记呼吸。那不是一座平地而起的城市，而是一座从亚平宁山脉的翠绿褶皱中“生长”出来的、由蜜糖色砖石砌成的王冠。乌尔比诺就这样静静地矗立在两座山丘上，轮廓分明，在托斯卡纳式的柔和阳光下，泛着温暖而沉稳的光泽。空气中是干燥的泥土、古老石墙和远处森林混合的气息，偶尔传来教堂钟声，悠远而清晰，瞬间将你拉离21世纪的喧嚣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城墙下的波尔塔瓦莱城门，时间仿佛自动调慢了流速。脚下的石板路被几个世纪的行人磨得光滑如镜，带着微微的坡度，引领你深入这座“山城”的肌理。这里没有佛罗伦萨那样汹涌的人潮，街道上多半是背着书包、步履轻快的大学生（是的，乌尔比诺拥有欧洲最古老的大学之一），夹杂着本地老人提着菜篮的悠闲身影。城市的“心跳”声是细微的：咖啡馆里杯碟的轻碰、书店里翻动书页的沙沙声、以及从某个敞开的窗户里飘出的古典乐练习曲。你会发现，文艺复兴在这里不是博物馆里的标本，而是一种依然在呼吸的日常氛围。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切气质的源头，都汇聚于那座庞然大物——公爵宫。它不像其他宫殿那样炫耀浮夸，更像一座巨大的、沉思的几何体，稳稳地坐在城市的最高处。走进其中庭，你会立刻被那种近乎神圣的宁静所笼罩。光线从高高的拱廊洒下，在淡粉色和白色相间的大理石地板上切割出规整的光影。那种极致的秩序感、比例与和谐，不是冷冰冰的，而是一种充满理性之美的温暖拥抱。你会突然明白，为什么拉斐尔笔下的圣母和人物总是带着那样一种平衡、典雅与内在的宁静，他的美学启蒙，就源于这座宫殿的墙壁之间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最后，一定要去寻访拉斐尔故居。那是一座朴素的黄色三层小楼，藏在不远处一条安静的巷弄里。比起公爵宫的恢弘，这里显得格外亲切和平凡。站在他出生的房间，看着窗外依旧是几百年前的屋顶线与蓝天，你会有一种奇妙的连接感：那个将文艺复兴的和谐之美推向顶峰的天才，最初看见的世界，就是这片错落有致、光影婆娑的屋顶与远山。这种平凡与伟大之间的咫尺距离，或许是乌尔比诺最动人的秘密。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`乌尔比诺历史中心`} />
                <InfoRow label="英文名称" value={`Historic Centre of Urbino`} />
                <InfoRow label="正式名称" value={`Historic Centre of Urbino (UNESCO World Heritage Site)`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`乌尔比诺`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在15世纪短暂却辉煌地成为意大利文艺复兴思想与艺术灯塔的“理想城”。`} />
                <InfoRow label="建筑特色" value={`依山而建的蜜色砖石城池，以巨大的公爵宫为中心，其“双塔”立面是文艺复兴建筑冷静、均衡与力量的完美象征。`} />
                <InfoRow label="建筑风格" value={`文艺复兴风格，特别是费德里科公爵时期的人文主义建筑典范。`} />
                <InfoRow label="文化价值" value={`这里不仅是画家拉斐尔的诞生地，更是由一位“文艺复兴王子”费德里科·达·蒙特费尔特罗主导的，将艺术、学术与军事完美融合的“文人共和国”的实体化身。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`乌尔比诺历史中心为开放区域，全天可进入漫步。核心建筑公爵宫（Palazzo Ducale）的开放时间为周二至周日，上午8:30至晚上7:15（最后入场时间为6:15），每周一、1月1日、12月25日闭馆。请注意，意大利许多博物馆有午休习惯，但公爵宫目前无长时间午休。城内其他小型博物馆和教堂开放时间各异，建议提前查询。夏季（6-9月）部分景点可能延长开放时间，冬季（11-2月）可能略微缩短。`} />
              <InfoRow label="门票价格" value={`进入乌尔比诺古城本身免费。参观核心景点公爵宫（内含马尔凯国家美术馆）门票为全价10欧元，优惠票2欧元（适用于18-25岁欧盟公民）。购买乌尔比诺卡（Urbino Card）可包含公爵宫、拉斐尔故居、乌尔比诺大教堂博物馆等多个景点，一日卡约15欧元，性价比更高。每月第一个周日，公爵宫通常免费开放（旺季可能除外）。学生、老人及特定团体享有折扣，需出示有效证件。`} />
              <InfoRow label="地址" value={`Palazzo Ducale, Piazza Duca Federico, 61029 Urbino PU, Italy`} />
              <InfoRow label="交通方式" value={`最近的主要机场是里米尼的费德里科·费里尼国际机场（约60公里）或安科纳的拉斐尔·圣齐奥机场（约70公里）。从机场需先乘坐巴士或火车抵达附近城市佩萨罗或法诺。最经典的路线是：从罗马或博洛尼亚乘坐火车至佩萨罗火车站（约2.5-3小时），出站后在车站前广场换乘“拉斐尔”巴士公司（Bonelli或Raffaello）的班车前往乌尔比诺，车程约50分钟，班次每小时1-2班，建议提前在车站小卖部购票。自驾是最灵活的方式，从佩萨罗沿SP423公路盘山而上，沿途风景如画，但古城中心为ZTL交通限制区，需将车停放在城墙外的收费停车场（如Parcheggio Mercatale）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`乌尔比诺的故事，是一部关于野心、智慧与美的浓缩史诗，而它的高潮，几乎全部系于一个家族和一个人——蒙特费尔特罗家族，以及费德里科·达·蒙特费尔特罗公爵。在15世纪中叶之前，乌尔比诺只是一个不起眼的山区要塞。转折发生在1444年，年轻的费德里科通过一场不乏争议的政变成为统治者。他不仅是一位成功的雇佣兵队长（用打仗赚来的巨额财富建设城市），更是一位罕见的人文主义学者、艺术鉴赏家。他失明的右眼和被打塌的鼻梁（比武事故所致）并未妨碍他成为一位“文艺复兴王子”，他渴求的不仅是领土，更是知识与美。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一项空前绝后的“造城”计划开始了。费德里科聘请了当时最伟大的建筑师之一卢西亚诺·劳拉纳，以及后来的弗朗切斯科·迪·乔治·马丁尼，为他打造一座“理想之城”的宫殿——公爵宫。这不仅仅是他和廷臣的居所，更是一个融合了堡垒、宫殿、图书馆与“美之圣殿”的复合体。宫殿核心的“双塔”立面，以一种前所未有的威严与均衡，定义了文艺复兴宫廷建筑的范式。而宫内的小书房（Studiolo）更是奇迹中的奇迹：用细木镶嵌工艺创造的超现实空间，逼真得令人窒息的书籍、乐器、科学仪器，全部以透视法镶嵌在墙板上，象征着公爵包罗万象的学识世界。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`费德里科公爵的宫廷吸引了整个意大利的精英。画家皮耶罗·德拉·弗朗切斯卡在这里创作了那幅著名的侧面肖像《费德里科·达·蒙特费尔特罗公爵夫妇》；建筑师布拉曼特曾在此学习；诗人彼得拉克的著作被奉为经典。最重要的是，公爵建立了一座无与伦比的图书馆，藏书量据说一度超过梵蒂冈，手抄本工匠日夜不息地工作。乌尔比诺短暂地成为了一个“文人共和国”，一个由武士公爵统治的思想乌托邦，在这里，剑与笔、军事与艺术达成了神奇的和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，盛极而衰是历史的常情。费德里科的儿子圭多巴尔多虽竭力维持，却难复父亲时代的辉煌。1508年，无子嗣的圭多巴尔多将公国交给了他的侄子，来自德拉·罗韦雷家族的弗朗切斯科·玛丽亚，乌尔比诺的黄金时代缓缓落幕。更富戏剧性的是，公爵宫那珍贵的图书馆，在17世纪被运往罗马，成为了梵蒂冈图书馆的核心馆藏，乌尔比诺被“掏空”了思想的实体宝藏。此后数百年，城市逐渐沉睡，偏安一隅，却也因此奇迹般地躲过了大规模的战火与现代破坏，将15世纪的容颜近乎完整地封存起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪，随着艺术史研究的深入和旅游业的兴起，人们重新发现了这颗被遗忘的明珠。1998年，联合国教科文组织将其列为世界遗产，评语中写道：“乌尔比诺在15世纪吸引了整个欧洲的艺术家和学者，并形成了独特的文化影响……”它从一座现实中的“理想城”，变成了人类共同文化遗产中一个关于文艺复兴之梦的不朽范本。今天，当你漫步其中，你踩踏的每一块石板，仰望的每一扇窗户，都浸透着那个短暂却璀璨时代的精神遗泽。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议至少预留一整天（8-10小时）给乌尔比诺，才能不疾不徐地感受它的精髓。最佳抵达时间是上午9点前，此时旅游团尚未涌入，晨光柔和，是拍摄城市外观和安静漫步的黄金时段。整体节奏宜慢，这是一座适合用脚步丈量、用心品味细节的山城。游览核心思路是“由外而内，登高俯览”：上午先从城外远观全景，然后进入古城，重点深度参观公爵宫（至少预留2-3小时）；午后在迷宫里般的小巷随意探索，寻访拉斐尔故居和几个特色教堂；傍晚前务必登上城市至高点（如堡垒公园），等待日落将整片蜜色砖石染成金黄。这样的安排能让你从宏观到微观，再从历史沉思回到现实美景，完成一次完整的沉浸之旅。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿最舒适耐磨的步行鞋，这里的街道几乎全是坡道和石阶。许多小型博物馆和商店严格遵守意大利午休时间（大约下午1点至4点），安排行程时需留意，避免吃闭门羹。参观公爵宫若想避开人流，尽量选择工作日早晨或下午晚些时候入场，旺季强烈建议官网预约。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从城外的圣保罗教堂附近起步，远眺整个乌尔比诺古城在晨曦中苏醒的磅礴轮廓，那两座高塔是绝对的视觉焦点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从波尔塔瓦莱城门进入，立刻右转上坡，沿着宁静的Via Valerio小道走向制高点，你会避开主街人潮，看到本地民居最日常的生活景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将整个上午的精华时间留给公爵宫，先在一楼中庭感受空间的震撼，然后直奔二楼的国立美术馆，在皮耶罗·德拉·弗朗切斯卡、拉斐尔等大师的画作前长久驻足。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`千万别错过隐藏在公爵宫二楼角落的小书房，花十分钟静静坐在这个木镶嵌的幻象空间里，体会文艺复兴时期对知识与透视法的痴迷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从公爵宫出来，穿过主广场，拐进Via Raffaello大街，找到那栋朴素的黄色房子，在拉斐尔故居里想象天才少年最初的艺术启蒙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后沿着起伏的小巷随意迷失，偶然撞进某座安静的教堂，比如圣多梅尼科教堂，里面或许藏着意想不到的壁画或雕塑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午茶时间去大学区附近找一家老咖啡馆，点一杯浓咖啡，观察身边年轻学生们充满活力的交谈，感受古城跳动着的现代心脏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前一小时，前往堡垒公园或沿着城墙散步，找一张长椅坐下，看夕阳如何为这座“理想城”披上最壮丽的落幕演出。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城外贝尔韦代雷观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时最佳，位于城市西南方向，能捕捉到公爵宫双塔与连绵山丘及远处亚得里亚海（晴天可见）构成的经典全景，使用长焦镜头压缩空间感极佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`公爵宫中庭仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，站在中庭中心抬头拍摄环绕的多层拱廊与天空，对称的几何构图和强烈的明暗对比能拍出极具建筑感的震撼画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`拉斐尔故居窗外视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光洒进窗户时，拍摄窗框勾勒出的对面古老屋顶和远处塔楼的画面，仿佛复现了拉斐尔童年眼中的世界，充满故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Via Mazzini街道纵深`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚阳光斜射时，在这条陡峭的典型街道上从下往上拍，利用石板路自然的透视线条，将视线引向尽头的古老建筑，生动展现山城特色。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`堡垒公园城墙缺口`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，从城墙的古老垛口向外拍摄，将前景斑驳的石砖与背景被暮色笼罩的城市灯光一同纳入镜头，古今交融的氛围感十足。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人或市场商贩时，请务必先微笑并征得同意，一个友好的手势比直接举起相机更礼貌。利用雨后湿润的石板路反射天光和建筑倒影，能让照片色彩更加饱和、生动。古城很多小巷光线较暗，建议携带大光圈镜头或利用三脚架进行长曝光，以捕捉细腻的质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住由16世纪贵族宫殿改造的精品酒店，房间保留了原始的拱顶壁画和石壁炉，早餐在能看到公爵宫塔楼的露台上进行，彻底融入文艺复兴贵族生活。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`经济优选`}</h4>
                  <p className="text-sm text-green-800">{`位于古城中心几步之遥的舒适家庭旅馆，由一对热情的老夫妇经营，房间虽小但一尘不染，早晨能闻到房东在厨房烹煮传统意面酱料的浓郁香气。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`学者风范`}</h4>
                  <p className="text-sm text-yellow-800">{`大学附近的静谧公寓式住宿，书房风格的设计，书架摆满了艺术史书籍，推开窗就能看到大学生们在广场上讨论，体验一把“乌尔比诺学子”的生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`田园隐居`}</h4>
                  <p className="text-sm text-purple-800">{`选择古城外3公里内农庄改造的民宿，被橄榄树和葡萄园环绕，夜晚星空璀璨无比，白天主人会邀请你品尝自家酿的Verdicchio白葡萄酒。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿数量有限且非常抢手，尤其是在夏季艺术节和大学开学季，务必提前数月预订。选择住在ZTL限制区内的酒店，通常能获得停车许可，务必提前与酒店确认。住在城外虽然安静且风景好，但晚上进出古城需要开车或打车，略有不便。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开乌尔比诺时，你的行囊里可能没有多一件纪念品，但你的感知系统仿佛被重新校准过。你会发现，自己开始用一种更“均衡”的眼光看待事物——欣赏空白与实体之间的对话，留意光线塑造空间的方式，甚至在喧嚣中寻找那份内在的宁静。这座城市给予旅人的，不是短暂的视觉刺激，而是一种深植于内心的、关于“和谐”的模板。它告诉你，美可以是理性的、克制的，却依然充满人性的温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、崇拜新潮的世界里，乌尔比诺像一位永远从容的智者，静默地立于山巅。它提醒我们，人类历史上曾有过那样一个时刻，战争的统帅同时是美与知识的赞助人，坚固的堡垒内珍藏着最精妙的艺术，而一座偏僻的山城，可以成为照亮整个欧洲文明的思想灯塔。来这里，不仅仅是为了看拉斐尔出生的房子，或是皮耶罗的画作。更是为了亲身步入那个“理想城”的模型之中，去呼吸、去触摸、去验证一种可能性：一种将智慧、力量与美感完美融合的生活方式。这或许，才是它能馈赠给每一位深度旅人的，最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/luni-archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢尼古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Luni Archaeological Site</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perugia-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁贾老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Perugia Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mantua" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    曼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">曼托瓦古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mantua</p>
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
