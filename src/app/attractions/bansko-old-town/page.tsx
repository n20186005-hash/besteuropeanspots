import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '班斯科老城 Bansko Old Town｜滑雪胜地背后的时间胶囊，探秘19世纪保加利亚民族复兴的石木堡垒 - 最佳欧洲景点',
  description: '如果你因为滑雪慕名而来，在滑完一天雪后，脱下笨重的雪靴，换上一双舒服的步行鞋，往小镇中心那片不起眼的石板路深处走几步，你会瞬间怀疑自己是不是走进了另一个时空。震耳的音乐、穿着鲜艳滑雪服的游客、冒着热气的红酒摊……所有这些现代滑雪胜地的喧嚣，在转过某个街角后，突然被一堵高大、沉默、泛着青灰色光泽的石头',
}

export default function BanskoOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '保加利亚', href: '/destinations/europe' },
            { label: '班斯科', href: '/destinations/europe' },
            { label: '班斯科老城', href: '/attractions/bansko-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`班斯科老城・Bansko Old Town・保加利亚・班斯科`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你因为滑雪慕名而来，在滑完一天雪后，脱下笨重的雪靴，换上一双舒服的步行鞋，往小镇中心那片不起眼的石板路深处走几步，你会瞬间怀疑自己是不是走进了另一个时空。震耳的音乐、穿着鲜艳滑雪服的游客、冒着热气的红酒摊……所有这些现代滑雪胜地的喧嚣，在转过某个街角后，突然被一堵高大、沉默、泛着青灰色光泽的石头墙给吞没了。空气突然安静下来，耳边只剩下你自己踩在湿漉漉石板上的回声，还有远处不知谁家烟囱飘出的、混合了松木燃烧和炖菜香气的味道。这就是班斯科老城给你的第一个下马威——它不张扬，甚至有些害羞地躲在主街的背后，但只要你靠近，它就用一种沉重的历史质感将你包裹。
走进这些狭窄的、仿佛由巨人随意堆砌的石头巷弄，你会感觉自己变得很小。两边是高耸的院墙，几乎看不到窗户，只有厚重的、包着铁皮的大门，门上巨大的铆钉和复杂的锁具仿佛还在低声讲述着戒备森严的往事。阳光在这里是奢侈品，只在正午时分才能勉强挤进巷子，在凹凸不平的石板路上切出一道锐利的光痕。但如果你抬头，会看到那些从石墙上方小心翼翼探出来的、轻盈的木制阳台，精美的雕花在逆光中勾勒出蕾丝般的剪影。这种“下重上轻”、“外刚内柔”的对比，正是老城建筑最迷人的哲学：底层是抵御外界威胁的坚固堡垒，而上层，则是留给家人和生活的诗意与温柔。
当地人似乎早已习惯了这种时空的交错。你可能看到一位裹着头巾的老奶奶，颤巍巍地推开一扇至少有二百年历史的木门，走进她的现代世界；而隔壁，一座被精心修复的大宅里，年轻的艺术家正开着天窗，对着皮林山脉的雪峰画着油画。老城不是博物馆里死去的标本，它依然是小镇跳动的心脏的一部分，只是它的节奏比外面的滑雪道慢了太多太多。这里最动听的声音，可能不是教堂的钟声，而是从某扇虚掩的门后传来的、刀在砧板上切新鲜蔬菜的规律声响，混合着收音机里若有似无的保加利亚传统民歌。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你因为滑雪慕名而来，在滑完一天雪后，脱下笨重的雪靴，换上一双舒服的步行鞋，往小镇中心那片不起眼的石板路深处走几步，你会瞬间怀疑自己是不是走进了另一个时空。震耳的音乐、穿着鲜艳滑雪服的游客、冒着热气的红酒摊……所有这些现代滑雪胜地的喧嚣，在转过某个街角后，突然被一堵高大、沉默、泛着青灰色光泽的石头墙给吞没了。空气突然安静下来，耳边只剩下你自己踩在湿漉漉石板上的回声，还有远处不知谁家烟囱飘出的、混合了松木燃烧和炖菜香气的味道。这就是班斯科老城给你的第一个下马威——它不张扬，甚至有些害羞地躲在主街的背后，但只要你靠近，它就用一种沉重的历史质感将你包裹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进这些狭窄的、仿佛由巨人随意堆砌的石头巷弄，你会感觉自己变得很小。两边是高耸的院墙，几乎看不到窗户，只有厚重的、包着铁皮的大门，门上巨大的铆钉和复杂的锁具仿佛还在低声讲述着戒备森严的往事。阳光在这里是奢侈品，只在正午时分才能勉强挤进巷子，在凹凸不平的石板路上切出一道锐利的光痕。但如果你抬头，会看到那些从石墙上方小心翼翼探出来的、轻盈的木制阳台，精美的雕花在逆光中勾勒出蕾丝般的剪影。这种“下重上轻”、“外刚内柔”的对比，正是老城建筑最迷人的哲学：底层是抵御外界威胁的坚固堡垒，而上层，则是留给家人和生活的诗意与温柔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人似乎早已习惯了这种时空的交错。你可能看到一位裹着头巾的老奶奶，颤巍巍地推开一扇至少有二百年历史的木门，走进她的现代世界；而隔壁，一座被精心修复的大宅里，年轻的艺术家正开着天窗，对着皮林山脉的雪峰画着油画。老城不是博物馆里死去的标本，它依然是小镇跳动的心脏的一部分，只是它的节奏比外面的滑雪道慢了太多太多。这里最动听的声音，可能不是教堂的钟声，而是从某扇虚掩的门后传来的、刀在砧板上切新鲜蔬菜的规律声响，混合着收音机里若有似无的保加利亚传统民歌。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`班斯科老城`} />
                <InfoRow label="英文名称" value={`Bansko Old Town`} />
                <InfoRow label="正式名称" value={`Bansko Old Town`} />
                <InfoRow label="国家" value={`保加利亚`} />
                <InfoRow label="城市" value={`班斯科`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`皮林山区在19世纪奥斯曼统治下，顽强保存并迸发保加利亚民族精神与文化火种的中心堡垒之一。`} />
                <InfoRow label="建筑特色" value={`以厚重的石砌高墙、坚固的木制大门、内敛封闭的庭院以及精致雕刻的木阳台为标志的防御性民居建筑群。`} />
                <InfoRow label="建筑风格" value={`保加利亚民族复兴时期风格，融合了本地山区防御需求和文艺复兴、巴洛克装饰元素的独特山地变体。`} />
                <InfoRow label="文化价值" value={`一座活态的“石头档案馆”，记录了保加利亚近代民族意识觉醒时期，一个山区小镇如何通过建筑、教育和商业实现文化自决。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区的街道、广场及外部建筑全天24小时开放。内部的重要宅邸博物馆（如维利亚诺夫宅邸、托普洛夫宅邸）的开放时间通常为夏季（5月至9月）上午9点至下午6点，冬季（10月至4月）上午10点至下午5点，周一普遍闭馆。小型博物馆和教堂的开放时间可能更短，且冬季受山区天气影响可能临时调整，建议出行前在本地旅游局网站二次确认。`} />
              <InfoRow label="门票价格" value={`漫步老城街区本身完全免费。进入单个宅邸博物馆或历史建筑的门票价格约为5-8保加利亚列弗（约2.5-4欧元）。常有联票出售，参观三处主要宅邸约15列弗。学生、儿童及65岁以上老人享有半价优惠。部分小型教堂可能收取少量捐赠费用（1-2列弗）用于维护。`} />
              <InfoRow label="地址" value={`Old Town Bansko, 2770 Bansko, Blagoevgrad Province, Bulgaria`} />
              <InfoRow label="交通方式" value={`最近的机场是索非亚机场。从索非亚机场出发，最佳方式是乘坐提前预订的机场穿梭小巴或私人接送，直接抵达班斯科镇中心，车程约2小时。也可以从机场乘坐出租车到索非亚中央汽车站，再转乘定时发往班斯科的大巴，全程约2.5-3小时，大巴班次在旅游旺季（冬夏）较为密集，约每小时一班，淡季可能减少。从索非亚火车站出发，可搭乘火车至布拉戈耶夫格勒市，再转乘当地巴士前往班斯科，总耗时约3小时以上，适合时间充裕且想体验本地交通的旅行者。自驾是最灵活的方式，从索非亚沿E79高速公路南下，路况良好，风景壮丽。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解这些沉默的石头为何如此坚硬，你得把时钟拨回更早的年代。在奥斯曼帝国长达五个世纪的统治下，巴尔干半岛的基督徒社区常常处于不确定和压迫之中。而像班斯科这样偏远的山区小镇，反而因为地形复杂、易守难攻，成为了保加利亚民族文化和东正教信仰得以秘密存续的“避难所”。早期的房子就真的只是简陋的石头棚屋，人们聚族而居，高墙不是为了美观，而是实实在在的生存所需——防备土匪、不期而至的奥斯曼税吏，以及山间严酷的寒冬。那时候，每一块石头都浸透着警惕和坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在18世纪末到19世纪，也就是所谓的“保加利亚民族复兴时期”。班斯科意外地因为……贸易和手工业富了起来。这里的牧羊人生产优质的羊毛和皮革，工匠们打造的铜器、铁器远近闻名。商队驮着这些货物，穿过险峻的山口，一直卖到爱琴海沿岸甚至更远。财富的积累并没有让班斯科人仅仅追求享乐，反而点燃了他们深藏心中的文化渴望。一种强烈的意识觉醒了：我们要用石头和木头，为我们民族的尊严和信仰，建造一座不朽的纪念碑。于是，你看到的这些大宅，不仅仅是家，更是一个个微型的文化堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个时期涌现的关键人物，不是国王或将军，而是一群富有的商人和手工业行会首领。比如尼科拉·维利亚诺夫，他从一个普通的牧羊人成长为成功的羊毛商人，走遍了欧洲。他带回来的不仅仅是金钱，还有他在维也纳、威尼斯看到的文艺复兴和巴洛克的建筑理念。他请来最好的本地工匠，说：“给我建一座配得上我们民族未来的房子。”于是，维利亚诺夫宅邸诞生了。它保留了防御性的石砌底层和厚重的大门，但二楼的客厅（hayet）却拥有华丽的彩绘木雕天花板、高大的玻璃窗和壁画，专门用于招待客人、举行文学沙龙和社区集会。在这里，商人们讨论生意，教师们秘密教授保加利亚语和历史，诗人们朗诵反抗压迫的作品。每一座这样的大宅，都是一个文化传播的细胞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "建筑的繁荣也伴随着精神的独立。几乎在同一时期，小镇东端，一座宏伟的“圣三位一体”教堂在奥斯曼当局的种种限制下（法律禁止基督教教堂高于清真寺），被巧妙地建在了地下半层。从外面看，它其貌不扬，但内部却是一个令人震撼的艺术世界。来自萨莫科夫和班斯科本地的画派艺术家们，用绚烂的壁画覆盖了每一寸墙壁和穹顶，圣经故事与保加利亚圣徒的形象交织，在昏暗的烛光中散发着信仰的力量。教堂与世俗大宅，一精神一世俗，共同构成了班斯科人完整的精神世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "步入20世纪，战争的硝烟和之后的共产主义集体化时期，让许多大宅失去了原有的家族功能，一度破败。但奇妙的是，正是其坚固如堡垒的结构，让它们得以在风雨和政治变迁中幸存下来。近二三十年，随着滑雪旅游的兴起和保加利亚人对文化遗产的重新珍视，这些老宅终于等来了新生。它们有的被小心翼翼地修复成博物馆，有的被改造为拥有独特氛围的家庭旅馆或餐厅。当年的防御之门，如今向全世界好奇的旅人敞开，讲述着一个山地小镇如何用石头书写了一部属于自己的、波澜壮阔的民族史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午10点左右，当滑雪人群已经上山、晨雾完全散尽时开始你的老城探索。整体耗时大约需要3-4小时，节奏宜慢不宜快。这样的安排能让你充分享受老城清晨的宁静光影，有足够的时间细细品味两到三座核心宅邸博物馆的内部细节，并在正午阳光最灿烂时，捕捉到那些木雕阳台和石板路最美的瞬间。游览结束后，正好可以在老城区找一家传统餐馆（Mehana）享用一顿悠长的午餐，沉浸式体验保加利亚的山地美食文化。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观宅邸博物馆内部时，尊重“请穿鞋套”的规定（通常入口会提供），以保护珍贵的木地板和老地毯。很多小巷的路面是鹅卵石，且冬季可能有黑冰，务必穿一双防滑且舒适的鞋子。如果想进入仍在营业的私人庭院或工作室拍照，一个友好的微笑和简单的手势征询会非常管用。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主街“皮林街”拐入“圣三位一体街”，立刻让自己沉浸在那条被高大石墙夹峙、地面泛着水光的静谧主巷里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`伸手触摸维利亚诺夫宅邸大门上冰凉的铁质铆钉和复杂锁具，然后推开它，踏入那个被精美木雕天花板和古老织毯覆盖的华丽客厅，想象这里曾举办过的秘密沙龙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在拉达诺夫宅邸小巧的庭院里驻足，抬头看阳光如何透过葡萄藤的缝隙，在古老的石井栏上投下摇曳的光斑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那家隐藏在小巷深处的“铁匠铺博物馆”，听留守的老匠人用锤子敲打红铁，发出几个世纪未曾改变的叮当声响，空气中弥漫着碳火的味道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着缓坡走向小镇东端的“圣三位一体”教堂，低头走下那几级台阶，进入那个被埋藏半截、却充满惊人壁画的地下神圣空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂出来，沿着外侧的老城墙漫步，选择一个能同时看到远处皮林山脉雪峰和近处老城石头屋顶的视角，静静地站一会儿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在返回主街前，别忘了探访“复兴时期学校博物馆”，在那间古老教室的木桌前坐一坐，感受当年学童们在此学习民族语言和历史的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，任由自己在迷宫般的小巷中“迷失”片刻，每条岔路都可能引向一个布满鲜花的秘密庭院或一扇雕刻着奇异符号的古老门楣。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`维利亚诺夫宅邸的木雕阳台特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午两点至四点，阳光西斜时，从对面小巷用长焦镜头捕捉阳台精细的雕花与阴影形成的强烈质感对比，可将部分石墙作为前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“圣三位一体”教堂入口的穹顶壁画`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，教堂天窗的光线会直射照亮部分壁画，站在入口内侧，用广角镜头仰拍，将昏暗的前景与被神圣光束点亮的穹顶壁画一同纳入画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城小巷的纵深视角`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条有弧度的窄巷（如靠近托普洛夫宅邸的巷子），清晨九点前或雨后，利用湿漉漉石板的反光增加画面层次，从巷口向内拍摄，引导视线消失在石墙交汇的尽头。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`皮林雪山与老城屋顶的同框`}</h4>
                  <p className="text-sm text-gray-700">{`位于老城西北侧略高的坡地上，晴朗的上午，用中焦段镜头，将一片富有质感的褐色石板屋顶作为前景，远处清晰锐利的皮林山脉雪峰作为背景，构成自然与人文的壮丽对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`山区天气多变，善用不同的光线条件：阴天适合拍摄石头和木材的细腻纹理与饱和色彩，晴天则适合捕捉戏剧性的光影对比。拍摄当地居民，尤其是长者，务必事先征得明确同意，一个温暖的微笑是最好的沟通语言。使用无人机在老城上空拍摄前，务必查清当地法规，并绝对避开人群和私人庭院。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`穿越之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由19世纪复兴时期大宅原貌修复的精品酒店，睡在厚重的石墙之内，清晨在雕花木阳台边，就着壁炉的余温喝一杯热乎乎的接骨木花茶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山景民宿`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在老城边缘山坡上的家庭式民宿，房间窗户正对皮林山脉，老板会为你准备丰盛的本地早餐，并分享那些导游书上没有的老城家族故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计师隐居`}</h4>
                  <p className="text-sm text-yellow-800">{`由传统石屋改造的现代设计公寓，完美融合了原始的石头墙壁、木梁与斯堪的纳维亚风格的简洁内饰，适合追求独特美学和私密空间的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`滑雪者之家`}</h4>
                  <p className="text-sm text-purple-800">{`位于老城入口处的舒适旅馆，既能轻松步行探索古老巷陌，又方便携带雪具往返滑雪场，地下室通常配有温暖的公共桑拿房，供滑完雪后放松。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "冬季（滑雪旺季）务必提前数月预订，尤其是特色宅邸酒店。夏季房源充足，是体验宁静老城的最佳时节。老城内部巷道夜间照明有限，选择住在深处的住宿，建议备一个小手电。几乎所有本地住宿都提供超乎想象的慷慨 homemade 早餐，这是体验保加利亚家庭热情的重要部分，不要错过。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开班斯科老城的时候，我的背包里没有多出什么纪念品，但心里却好像被那些石头的重量填满了。这种重量不是负担，而是一种奇特的踏实感。在这个一切都在追求更快、更亮、更刺激的时代，老城固执地用它的沉默和厚重，为你按下了一个暂停键。它告诉你，有些美丽和力量，不需要喧嚣的宣告，就藏在层层叠叠的石头后面，藏在日复一日的炊烟里，藏在一代代人用双手雕刻的木纹之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们总在寻找“独特”的旅行体验，而班斯科老城给出的答案如此朴实又深刻：真正的独特，源于一个社区在逆境中对自己身份毫不妥协的坚守。它不仅仅是一处“景点”，更是一种生活态度的证明。无论外面的世界是奥斯曼的铁骑，还是全球化滑雪游客的浪潮，这些石头房子里的生活，始终按照自己的心跳在继续。所以，每一位热爱深度游的旅人，都应该来这里走一走。不是为了打卡，而是为了来感受这份沉静的力量，来触摸这段用石头写成的、触手可及的历史。当你从寒冷的雪场归来，让这些温暖的石头拥抱你时，你会明白，这才是旅行的意义——找到那些能让时间变慢，让心灵扎根的地方。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ivanovo-rock-hewn-churches" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊万诺沃岩凿教堂群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ivanovo Rock-Hewn Churches</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bozhentsi-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博仁齐</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bozhentsi</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sozopol-old-town-black-sea" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    索
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">索佐波尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sozopol</p>
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
