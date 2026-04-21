import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科特赖克历史溯源｜布罗尔双塔的前世今生与中世纪传奇',
  description: '穿越比利时“金马刺之城”科特赖克，揭秘利斯河畔双塔七百年沧桑。一座是海关，一座是监狱，见证战争、繁荣与纺织王朝。聆听石头诉说的往事。',
}

export default function BroelTowersKortrijkHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '西佛兰德省科特赖克', href: '/destinations/europe' },
            { label: '科特赖克布罗尔双塔', href: '/attractions/broel-towers-kortrijk-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科特赖克布罗尔双塔・Broel Towers・比利时・西佛兰德省科特赖克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在比利时西佛兰德平坦的田野与缓缓流淌的利斯河之间，矗立着一座被战争与编织定义的城市——<strong>科特赖克</strong>。它的历史标签，是“战争与编织”。这里曾爆发布尔戈尼亚枪骑兵与佛兰德民兵之间、法国太阳王与欧洲联军之间决定性的战役；这里也曾是欧洲中世纪最繁荣的亚麻纺织中心之一，柔软的布料与坚硬的刀剑，共同编织了它的命运。而这一切历史的交汇点与沉默的见证者，正是横跨利斯河的那对孪生石塔——<strong>布罗尔双塔</strong>。抛开游玩攻略，走进科特赖克的尘封往事，遇见属于它的时光、战争与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科特赖克布罗尔双塔`} />
                <InfoRow label="英文名称" value={`Broel Towers`} />
                <InfoRow label="正式名称" value={`Broel Towers`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`西佛兰德省科特赖克`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科特赖克的故事，始于一条河与一份虔诚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>利斯河</strong>，这条发源于法国、流经比利时最终注入北海的宁静水道，是中世纪弗兰德斯地区的经济命脉。早在<strong>7世纪</strong>，一位名叫<strong>埃卢提乌斯</strong>的传教士，就在河畔一处名为“科尔特”的高地上，建立了一座修道院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座修道院，便是科特赖克最初的种子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“科特赖克”这个名字本身，就揭示了它的起源。它源于拉丁语“Cortem”，意为“庄园”或“领地”，后缀“-rijk”在荷兰语中表示“领域”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "合起来，便是“修道院庄园的领地”。从一片宗教领地，逐渐发展为河畔的聚居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "河流带来了贸易与生机。到了<strong>10世纪</strong>，佛兰德伯爵们意识到了此地的战略价值。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们在此修建了城堡，并授予其城市特许状。一道坚固的城墙环绕而起，利斯河被纳入城内，成为天然的护城河与运输通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科特赖克，正式登上了中世纪欧洲城镇的舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的地理位置决定了其命运：既是连接弗兰德斯内陆与法国的重要商埠，也是兵家必争的前沿堡垒。城市最初的繁荣，与羊毛和后来的亚麻纺织紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但和平的纺织梭，总与战争的矛戟交替出现。这座河畔小城的基石下，早已埋下了冲突的伏笔。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科特赖克的历史，由两场决定性的战役深深镌刻。而布罗尔双塔，正是这段铁血岁月最直观的遗存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，来自<strong>1302年</strong>。那是一场手工业者对抗封建贵族的逆袭，史称“<strong>金马刺战役</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，富庶的弗兰德斯城市在法国国王的扶持下，由亲法的城市贵族统治，对底层工匠课以重税。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "积怨最终在布鲁日演变为针对法国驻军的“晨祷”屠杀，并蔓延至科特赖克。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "法国国王派遣了一支由精锐骑士组成的军队前来镇压。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "7月11日，在科特赖克城外的格罗宁根田野上，装备简陋但士气高昂的佛兰德民兵，面对身披重甲的法国骑士，创造了奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们利用沟渠与沼泽地形，让骑兵陷入泥泞，然后用长矛和一种名为“goedendag”的粗重棍棒，将落马的骑士逐一解决。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“佛兰德人用他们粗野的武器，专门攻击骑士的面甲缝隙和马匹。田野上回荡着金属的撞击声、马匹的嘶鸣，以及垂死者的哀嚎。胜利后，他们从敌人尸体上剥下了超过500对黄金马刺，悬挂在科特赖克的主教堂顶。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 摘自14世纪佛兰德编年史" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场战役，是步兵首次大规模击败重装骑士，震动了整个欧洲封建体系。科特赖克因此赢得了“金马刺之城”的永恒荣名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，城市的徽章上仍有一对金马刺，每年的7月11日也成为弗兰德斯社区的纪念日。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，则在<strong>1566年</strong>的宗教风暴中留下。那是席卷低地国家的“<strong>圣像破坏运动</strong>”的浪潮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "狂热的加尔文派信徒冲进天主教教堂，砸毁圣像、彩绘玻璃和祭坛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科特赖克也未能幸免，包括圣马丁教堂在内的许多宗教遗产遭到严重破坏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场运动是荷兰独立战争（八十年战争）的序曲。随后的战争将科特赖克反复置于西班牙军队与联省共和国的争夺之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市几度易手，城墙被加固又被摧毁。正是在这个动荡的世纪，作为城市防御体系关键一环的布罗尔双塔，其功能发生了根本性的转变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯皮尔塔楼继续履行它的<strong>海关</strong>职责，对经由利斯河运入城内的货物征税。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而它的兄弟博甘塔楼，则被改造为一座坚固的<strong>监狱</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从保卫城市的矛，变成了禁锢犯人的笼。这一转变，恰是科特赖克从纯粹军事要塞，向拥有复杂行政与司法功能的成熟城市演变的缩影。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市不仅孕育战士与商人，也滋养诗人与艺术家。他们的故事，为科特赖克刚毅的历史轮廓，增添了几笔柔和的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先是一位本土的“爱情书记官”：<strong>罗吉尔·德莱尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他生于<strong>14世纪中期</strong>的科特赖克，具体生平已模糊，但他留下的一部作品却让他名垂青史——<strong>《爱情花园》</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不是一部普通的骑士爱情诗，而是一部用中古荷兰语写就的、系统探讨“爱情”的寓言与教谕作品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在书中，他将爱情描绘成一个需要精心照料的花园，涉及追求、忠诚、嫉妒、背叛等所有主题。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德莱尔很可能是一位为城市法庭或贵族服务的文书，这让他既通晓法律文书的正规，又浸润于市民文化的活力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的写作，标志着佛兰德城市文学正在摆脱法国宫廷文学的直接影响，形成自己独特的市民化、伦理化风格。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我，科特赖克的罗吉尔，在此写下这些关于高贵爱情的词句，并非因为我已精通此道，而是因为我所见所闻，促使我思考。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 《爱情花园》序言摘录" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与科特赖克的羁绊深入日常。学者们推测，他笔下那个需要“用忠诚围篱、用善意浇灌”的爱情花园，其灵感或许就来自科特赖克城内沿河的那些真实的私人花园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在布罗尔塔楼下的利斯河畔，中世纪富商的宅邸后往往建有精致的小花园。诗人的灵感，便源于这市井生活中的一隅诗意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与科特赖克结缘的名人，是巴洛克巨匠<strong>彼得·保罗·鲁本斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁本斯并非科特赖克人，他活跃于安特卫普。但在<strong>17世纪20年代</strong>，科特赖克的圣马丁教堂在圣像破坏运动后急需重建其祭坛装饰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们委托了当时最负盛名的鲁本斯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁本斯为教堂创作了宏伟的祭坛画《<strong>圣马丁施舍</strong>》与《<strong>圣马丁的弥撒</strong>》。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "画作中强烈的动态、饱满的色彩与充满力量的圣徒形象，为这座历经创伤的教堂注入了巴洛克时代的激情与信心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这份艺术馈赠的命运多舛。法国大革命时期，占领此地的法国军队将这些杰作作为战利品掠走，运回巴黎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然后来部分归还，但《圣马丁的弥撒》至今仍悬挂在巴黎的里昂美术馆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科特赖克教堂里悬挂的，是后世画家的摹本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲁本斯的真迹如同一个短暂的过客，照亮了科特赖克一段时间，而后远去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但这桩公案本身，却成了科特赖克历史层叠性的又一注脚：从宗教冲突到战争掠夺，大师的画作也与这座城市一同，承受着时代的颠沛流离。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "石头筑就的历史，总是包裹着血肉丰满的传说。关于科特赖克的起源，当地人更愿意讲述一个关于巨人的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在古老的时代，现今科特赖克所在的地区，住着一位来自<strong>比利牛斯山</strong>的巨人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他名叫 <strong>“科尔特”</strong>，力大无穷，却性情温和。他爱上了利斯河清澈的河水和两岸肥沃的土地，决定在此定居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但当地的居民起初非常恐惧这个庞然大物。为了赢得信任，科尔特运用他的神力，帮助人们疏通河道、搬运巨石修建屋舍。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他用脚踩出的深坑，形成了湖泊；他搬运石料时洒落的碎屑，变成了田野间的砾石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最神奇的是，他用自己的大手，在利斯河最适宜筑城和设闸的地方，垒起了最初的两座石墩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这两座石墩，便是后来<strong>布罗尔双塔</strong>的基石。人们感念他的恩德，便将这片领地以他的名字命名——“科尔特的领地”，即科特赖克。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，关于那座曾作为监狱的<strong>博甘塔楼</strong>，也有阴森的故事流传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，曾有一位被冤枉的骑士被囚禁在塔顶。在行刑前夜，他诅咒所有使这座塔蒙受不义之血的人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后，每当月圆之夜，塔楼的石墙内便会传出低沉的呜咽与铁链拖曳之声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有人说，塔楼里住着一只古老的“<strong>塔中猫灵</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非真正的猫，而是城市守护精灵的化身。当它安静蜷伏时，科特赖克便风调雨顺，纺织机声不断；倘若它弓背嘶叫，则预示着战争或瘟疫的来临。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，让冰冷的巨石有了温度与灵魂，代代相传，融入了城市的人文肌理。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你站在利斯河畔，仰望那一模一样却命运各异的<strong>布罗尔双塔</strong>，你看到的不仅仅是两座中世纪建筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你看到的是一部立体的城市传记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯皮尔塔是<strong>经济的脉搏</strong>，它见证了亚麻布匹、羊毛与葡萄酒如何在这里集散，财富如何沿河流动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博甘塔是<strong>权力的重量</strong>，它从防御的堡垒变为律法的囚笼，诉说着秩序与镇压、公正与冤屈的一体两面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而将它们连接在一起的石桥与河水，则是<strong>时间的隐喻</strong>，承载着一切，流淌不息，从金马刺战役的喧嚣，流向今日的宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科特赖克或许没有布鲁日那般完美的中世纪童话外观，也没有根特那样宏大的建筑群。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但它的魅力，恰恰在于这份<strong>未经彻底修饰的历史真实感</strong>。战争的伤疤、宗教的冲突、经济的兴衰、艺术的来去，都清晰可辨地写在了城市的布局与建筑之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座需要“阅读”而非仅仅“观看”的城市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂科特赖克，便是读懂了弗兰德斯地区乃至低地国家历史的一个核心矛盾：在强大的邻国势力与顽强的地方自治传统之间，在商业文明的开放性与军事冲突的破坏性之间，一座小城如何挣扎、生存并塑造自己的身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布罗尔双塔，就是这篇恢弘史诗最简洁、最有力的书名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/fort-eben-emael-belgium" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃本-埃马尔要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fort Eben-Emael</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zimmertoren-begijnhof-lier" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利尔钟楼（齐默尔塔）与贝居安会院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zimmertoren and Begijnhof of Lier</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zoutleeuw-medieval-town-belgium" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佐
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佐特莱乌</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zoutleeuw</p>
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
