import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科英布里加历史溯源｜葡萄牙最大罗马遗迹的前世今生与马赛克传奇',
  description: '探索科英布里加，葡萄牙保存最完好的罗马边城。穿越2000年，在马赛克地砖与颓垣断壁间，解码帝国兴衰、蛮族入侵与一个文明的无声告别。',
}

export default function ConimbrigaRomanRuinsHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '科英布拉区', href: '/destinations/europe' },
            { label: '科英布里加罗马遗迹', href: '/attractions/conimbriga-roman-ruins-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科英布里加罗马遗迹・Conímbriga・葡萄牙・科英布拉区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙中部，距离大学城科英布拉仅十几公里处，埋藏着一座被时光遗忘的“时间胶囊”——<strong>科英布里加</strong>。它并非教科书里常见的罗马庞贝，却以惊人完整的马赛克地板、高耸的城墙与精巧的引水渠，诉说着罗马帝国在最西陲省份 <strong>卢西塔尼亚</strong> 的辉煌与仓皇。这里没有游客如织的喧嚣，只有风穿过石拱门的呜咽，和脚下斑斓碎石拼贴出的盛世浮华。抛开游玩攻略，走进科英布里加的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科英布里加罗马遗迹`} />
                <InfoRow label="英文名称" value={`Conímbriga`} />
                <InfoRow label="正式名称" value={`Conímbriga`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`科英布拉区`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科英布里加的故事，始于铁器时代伊比利亚半岛的凯尔特部落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在罗马军团踏足之前，一支凯尔特人部落已在此处的山脊上建立聚落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Conímbriga”这个名字本身，就源自凯尔特语。学界普遍认为，“Conim”可能意为“高处”或“要塞”，而“briga”则是凯尔特语中常见的后缀，意为“设防的山丘”或“城堡”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的地理位置极具战略意义：坐落在一条连接内陆与海岸的古商道上，易守难攻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元前<strong>139年</strong>，罗马共和国执政官 <strong>德西穆斯·朱尼乌斯·布鲁图斯</strong> 率军征服了这片区域。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人看中了它的军事与交通价值，开始将其纳入帝国版图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的罗马化是缓慢的。本地凯尔特文化与罗马习俗逐渐交融。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到<strong>奥古斯都大帝</strong>时代（公元前27年-公元14年），科英布里加才迎来了第一次飞跃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它被正式授予 <strong>“自治市”</strong> 地位，这意味着居民获得了罗马公民权，城市可以按照罗马法典自治。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一座标准的罗马城市，由此在伊比利亚的阳光下铺陈开来。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科英布里加的黄金时代，贯穿了公元<strong>1世纪至3世纪</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帝国带来的和平与繁荣，让本地精英竞相投资，将城市装扮成罗马文明的微缩样板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一个深刻印记，是水。</strong> 罗马文明是亲水的文明。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约在公元<strong>1世纪</strong>，一项宏大的水利工程被实施——修建了一条长达<strong>3.5公里</strong>的引水渠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它将清泉从远处山间引至城市最高点的蓄水池，再通过铅管网络输送到富人家的宅邸、公共喷泉和浴场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "引水渠的遗迹至今矗立，它是城市跳动的动脉，象征着罗马的工程技术与秩序。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“水，不仅是清洁与享乐之源，更是罗马性的体现。拥有持续活水供应，是文明与蛮荒的分界线。”——一位罗马工程师的笔记残篇" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二个印记，是马赛克艺术登峰造极。</strong> 科英布里加被誉为“马赛克之城”，绝非虚名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元<strong>2世纪</strong>，城中富豪掀起了装饰竞赛。最好的工匠被聘请，用来自帝国各地的小彩色石片（tesserae）铺设地板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“坎塔伯里亚斯之家”的马赛克，描绘了狩猎野牛的惊险场景，肌肉线条与动感呼之欲出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“海王星之家”则拥有超过<strong>500平方米</strong>的连续马赛克，海神、海兽与几何图案交织，堪称杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些艺术不仅是财富的炫耀，更是房主文化素养、宗教虔诚与美学品味的集中展示。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三个印记，是突如其来的战火与仓促修筑的城墙。</strong> 公元<strong>3世纪后期</strong>，罗马帝国陷入危机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蛮族部落跨越莱茵河，帝国边疆处处烽烟。尽管远在伊比利亚西端，科英布里加也感到了刺骨寒意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大约在<strong>公元260-270年间</strong>，市民做出了一个重大决定：放弃帝国早期开放城市的理念，修筑一道坚固的防御城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这道墙粗暴地穿越了城市原有的肌理，甚至将一些精美的别墅区割裂在墙外。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它标志着和平时代的终结，与深植于心的恐惧。然而，这道墙并未能最终挽救城市。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科英布里加的兴衰，与一位皇帝的方略和一位地方总督的命运紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位关键人物，是皇帝韦斯帕芗。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>韦斯帕芗</strong>在结束“四帝之年”的内战后，于公元<strong>69年</strong>登基。他面临的是一个国库空虚、行省动荡的帝国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了巩固统治、增加税收，他在帝国范围内大力推行 <strong>“拉丁权”</strong> 政策，加速行省罗马化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科英布里加很可能正是在他的政策红利下，获得了更大的发展机遇，城市基础设施得到帝国层面的支持。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城中出土的铭文，提到了韦斯帕芗时代的公共建设项目。这位务实的皇帝，虽未亲临这片边陲，但他的政策却为科英布里加的繁荣添了最后一把火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二位，则是一位名叫弗拉维乌斯·瓦莱里乌斯的地方精英。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非帝国闻名的大人物，却是在科英布里加遗址中“发声”最清晰的居民之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过出土的墓葬铭文和马赛克题字，我们得以拼凑出他的生平。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗拉维乌斯·瓦莱里乌斯生于公元<strong>3世纪中叶</strong>，出身于一个已经高度罗马化的本地贵族家庭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他接受了良好的罗马式教育，精通拉丁文与修辞，很可能在地方议会担任过职务。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的宅邸（被称为“瓦莱里乌斯之家”）是城中最大、装饰最豪华的别墅之一。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“献给弗拉维乌斯·瓦莱里乌斯，可敬的人，他的妻子波米娜，以及他的孩子们。愿神灵庇佑这个家。”——宅邸入口处铭文" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最传奇的举动，发生在蛮族威胁日益迫近的时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当城市决定修建防御城墙时，这道墙恰好要经过他的部分产业。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "根据考古发现，瓦莱里乌斯没有阻止这项市政工程，而是做出了惊人妥协：他允许城墙穿过自家花园，甚至可能资助了这段城墙的建造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为交换，他的宅邸被完整地包裹在新的城墙之内，并修建了一座私人塔楼，直通城墙防御体系。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个决定，生动体现了当时地方精英的矛盾心理：一方面，他们必须与社群共命运，出资保卫城市；另一方面，他们竭尽全力在乱世中保全自己的家族与财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元<strong>465-468年</strong>间，苏维汇王国最终攻陷了科英布里加。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们不知道瓦莱里乌斯家族的后裔命运如何。但他们的宅邸和马赛克被遗弃，在泥土下封存了千余年，直到现代考古学家让它们重见天日。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不是一个改变历史的英雄，但他的选择、他的宅邸，成了解读罗马帝国末期边疆社会心态最珍贵的标本。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人离开了，但关于这座“石头城”的记忆，却化入民间传说，在科英布拉地区的乡野口耳相传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人长久以来称这片废墟为 <strong>“老城”</strong> 或 <strong>“摩尔人城”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中世纪，人们无法理解如此宏伟的工程属于罗马，便将其归功于传说中拥有神秘力量的摩尔人（阿拉伯人）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中一个流传甚广的传说，与 <strong>“美杜莎马赛克”</strong> 有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在“海王星之家”的一处马赛克上，镶嵌着蛇发女妖美杜莎的头像。在罗马神话中，直视她眼睛的人会变成石头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地农民发现它后，产生了奇妙的联想。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老辈人说，那不是普通的画。那是摩尔人巫师设置的“石化之眼”，用来守护地下埋藏的宝藏。曾有人夜晚想来挖宝，月光照在马赛克上，美杜莎的眼睛仿佛活了，吓得他魂飞魄散，从此再无人敢在夜里靠近那片区域。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说围绕着巨大的 <strong>“公共浴场”</strong> 废墟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马浴场复杂的地下热水系统（hypocaust）在坍塌后，形成了幽深的坑道和空洞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "民间传说这里变成了 <strong>“摩尔公主的浴室”</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据说，在夏至的满月之夜，如果屏息静听，能从废墟深处听到隐约的水流声和女子的叹息。那是一位美丽的摩尔人公主，她的王国沦陷后，灵魂仍徘徊在她最爱的奢华浴室里，一遍遍洗去不存在的尘埃与哀愁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说虽非史实，却为冰冷的石头注入了生命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们代表了后世人们对这片宏伟废墟最朴素、最诗意的历史解释，也是科英布里加从历史现场融入地方文化记忆的独特痕迹。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在科英布里加的断壁残垣间，你踏过的不是一堆“古老的石头”，而是一部层次分明的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最下层，是凯尔特部落夯土的痕迹，那是欧洲原生的根脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其上，是严整的罗马街道网格、广场、神庙地基，诉说着帝国无远弗届的秩序与文明输出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "再往上，是晚期仓促垒起的高墙，铭刻着帝国衰亡时的恐慌与挣扎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最灿烂的，是那些被精心保护在博物馆和原地的大片马赛克。它们冻结了罗马人关于美、神话与日常生活的所有想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科英布里加没有经历庞贝式的瞬间毁灭，而是在蛮族入侵、水源断绝后，被逐渐废弃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种“缓慢的死亡”，反而让它的历史层次更为清晰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它让我们看到，一个文明如何在这里生根、绽放，又如何因帝国躯体的枯萎而渐渐凋零。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最后一批罗马居民东迁至更易防守的科英布拉（Aeminium），并将旧名“Conímbriga”赠予了新家，这便是今天“Coimbra”（科英布拉）城名的由来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科英布里加，于是成为了一座“母城”的遗骸，一座被时间封存的琥珀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来这里，不是为了打卡，而是进行一场时空考古。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在精妙绝伦的马赛克与苍凉的城墙废墟对比中，读懂繁华与脆弱，永恒与变迁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/valenca-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦伦萨要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Valença Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mafra-national-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马夫拉宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mafra National Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/coimbra-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra Old Town</p>
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
