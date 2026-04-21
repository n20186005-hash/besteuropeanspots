import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨比奥内塔历史溯源｜“理想城”的前世今生与韦斯帕夏诺公爵的文艺复兴梦',
  description: '一座16世纪凭空而建的“理想城市”，一位痴迷古籍与星空的贵族公爵。欢迎走进萨比奥内塔尘封的文艺复兴理想。',
}

export default function SabbionetaRenaissanceIdealCityHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '伦巴第大区', href: '/destinations/europe' },
            { label: '萨比奥内塔', href: '/attractions/sabbioneta-renaissance-ideal-city-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨比奥内塔・Sabbioneta・意大利・伦巴第大区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在波河平原的晨雾中，有一座城，仿佛是从文艺复兴的图纸上直接降临于大地。它不是历经千年演变的古老市镇，而是一个人在短短三十年间，用无尽的财富与偏执的梦想，浇筑出的“理想城市”标本。它的创造者，<strong>韦斯帕夏诺·贡扎加</strong>公爵，一位被遗忘的军事家、收藏家与星相学家，将他对古典世界的全部想象，凝固在了这座名为“萨比奥内塔”的方寸之城。抛开游玩攻略，走进萨比奥内塔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨比奥内塔`} />
                <InfoRow label="英文名称" value={`Sabbioneta`} />
                <InfoRow label="正式名称" value={`Sabbioneta`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`伦巴第大区`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事开始于一片近乎空白的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间锚定在 <strong>1556年</strong>。地点是曼托瓦公国西南边境，一片名为“萨比奥内塔”（意为“沙地”）的贫瘠盐碱沼泽。这里没有罗马基石，没有中世纪塔楼，只有零星村落和一条古老的罗马道路遗迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而它的缔造者，<strong>韦斯帕夏诺·贡扎加</strong>，当时已是一位颇具声望的雇佣兵统帅。他出身于统治曼托瓦的贡扎加家族旁支，常年效力于西班牙国王，积累了大量财富与见识。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为何要在此地建城？这并非一时兴起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，是军事与政治的考量。这片封地位于公国边境，直面潜在的威胁。一座规划良好的要塞城市，本身就是最强大的防御宣言和权力支点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更深层的，是文艺复兴思潮在一位贵族灵魂中激起的巨浪。游历过罗马、那不勒斯的韦斯帕夏诺，深深痴迷于古罗马作家维特鲁威的《建筑十书》，以及当代建筑师塞尔利奥、帕拉第奥关于“理想城市”的论述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“理想城市”不仅仅是美学，更是一种哲学。它追求几何的完美、功能的明晰、与社会秩序的和谐。韦斯帕夏诺决心，要亲手将这本理论书籍，变成可以行走其中的现实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在<strong>1556年</strong>，他正式奠基。萨比奥内塔，这座“沙地之城”，从诞生的第一刻起，就承载了一个超越时代的、乌托邦式的野心。它不是自然生长的有机体，而是一件精心计算的艺术品。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城的肌理，就是一部浓缩的文艺复兴建筑教科书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是<strong>星形城墙与棋盘式布局</strong>。韦斯帕夏诺聘请了军事工程师<strong>吉罗拉莫·卡塔内奥</strong>。他们放弃了中世纪混乱的街道网络，采用了严格的网格系统。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市呈不太规则的六边形，外围是低矮但坚实的星形棱堡城墙。街道笔直宽阔，相交成完美的直角。一切从中心开始规划，象征着理性对自然的绝对征服。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种布局并非独创，却是在如此小尺度上（城内步行穿越仅需十分钟）被彻底贯彻的罕见案例。行走其间，你能清晰感受到创造者那种掌控一切的秩序感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个不可磨灭的印记，是<strong>宫廷剧院</strong>。建于 <strong>1588年</strong> 的“奥林匹克剧院”，是欧洲最古老的封闭式剧院之一，比帕拉第奥设计的维琴察奥林匹克剧院还早两年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生，直接源于韦斯帕夏诺对古典文化的狂热。公爵本人组建了一个“奥林匹克学院”，汇聚文人学者，旨在复兴古希腊戏剧。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "学院章程中写道：“成员应致力于诗歌、辩论与戏剧，以优雅的娱乐滋养灵魂，追忆古希腊荣光。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "剧院内部是纯粹的罗马风格，仿造露天剧场，有陡峭的阶梯座席和永恒的彩绘天空背景幕。它不仅是娱乐场所，更是公爵展示其文化领袖地位的舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是<strong>公爵宫的“画廊”</strong>。这座长廊长达96米，贯穿整个宫殿。但它并非用于漫步，而是公爵的私人“博物馆”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "长廊两侧挂满了韦斯帕夏诺收藏的罗马皇帝、哲人、英雄的肖像。他试图通过这条肖像走廊，构建一个跨越时空的“伟人祠”，将自己与古罗马的辉煌直接相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些建筑共同诉说着一个事件：一个微型但完整的“都城”的急速诞生与凝固。<strong>1587年</strong>，韦斯帕夏诺获封公爵，萨比奥内塔正式成为公国首都，达到其荣耀的顶峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史转折来得很快。<strong>1591年</strong>，公爵猝然离世。由于没有合法子嗣，城市迅速被曼托瓦主支吞并，发展戛然而止。这意外的停滞，却使它如同琥珀中的昆虫，完好保存了<strong>16世纪</strong>末“理想城市”的原始风貌。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨比奥内塔的灵魂，毫无疑问是<strong>韦斯帕夏诺·贡扎加</strong>。他不是一个普通的贵族，而是一个复杂的文艺复兴人“综合体”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他首先是一名卓越的<strong>军事工程师与统帅</strong>。多年为西班牙王室服务，他参与了法兰德斯和北非的战役。这解释了萨比奥内塔防御体系的专业与前瞻性。城墙的每一个棱堡角度，都经过精确计算。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但铠甲之下，包裹着一颗人文主义者的心。他是贪婪的<strong>收藏家</strong>。不仅收藏艺术品，更痴迷于古代钱币、浮雕宝石和天文仪器。他的图书馆藏书超过一千卷，包括许多珍贵古籍。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些收藏并非炫耀，而是他理解世界的方式。他甚至根据古罗马统帅<strong>西庇阿·阿非利加努斯</strong>的形象来塑造自己的公众人格，命人铸造印有自己侧影与西庇阿名字的勋章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与艺术家的关系，也颇具意味。他最重要的合作者是建筑师<strong>文森佐·斯卡莫齐</strong>。斯卡莫齐后来完成了帕拉第奥的许多项目，并将萨比奥内塔的经验写进了自己的建筑学著作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但公爵并非被动的赞助人。所有证据表明，他深度参与了城市设计的每一个细节。萨比奥内塔是他的“自画像”，建筑是他的画笔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他的轶事，往往与他的双重性格有关。一方面，他严肃、虔诚、崇尚纪律，为城市制定了严格的法律甚至道德规范。另一方面，他又极度迷信星相学。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他的私人星相学家曾记录：“公爵每日必观星象，重大决策，从建筑开工到出兵日期，无不征询星辰之意。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种理性规划与神秘信仰的奇特结合，正是文艺复兴晚期时代精神的缩影。他试图用人类的理性（几何、建筑）和神秘的天意（星象）共同构建一个完美的世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他晚年孤独。挚爱的妻子早逝，唯一的儿子夭折。他将所有情感与野心，都倾注到了这座石头之城。当他于<strong>1591年</strong>在萨比奥内塔去世时，几乎可以视为人与城完成了一次悲怆的合体——梦想家逝去，他的梦境却以最坚实的形式留存于世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个与城息息相关的名人，是音乐家<strong>蒙特威尔第</strong>。虽然他不是常住居民，但作为曼托瓦贡扎加宫廷的乐长，他极有可能在这座“理想城”的剧院中指挥或演出过他的早期作品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨比奥内塔的舞台，或许曾回荡着文艺复兴音乐向巴洛克歌剧转变的先声。这为这座视觉艺术的圣殿，增添了一层听觉的想象。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在萨比奥内塔精确的几何线条之下，也流淌着口耳相传的秘闻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说，关于公爵与他的“幽灵观众”。据说，在奥林匹克剧院落成后，韦斯帕夏诺公爵对首演无比重视。他要求一切必须完美，以匹配这座古典圣殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但排练时，演员们总感觉在空荡的剧场里无法投入。于是，公爵想出了一个奇特的办法。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人会压低声音讲述：“首演那晚，观众席座无虚席。但仔细看，那些‘观众’都一动不动，身着华服，面容模糊。演出结束后，他们又悄无声息地消失了。人们都说，那是公爵用蜡像填满了剧场，只为营造出完美的古典演出氛围。甚至有人说，有些蜡像里，藏着真人……”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说固然离奇，却精准地隐喻了公爵的性格：对形式完美的追求，近乎于偏执。他将生活也当作了一场需要精心布置场景的戏剧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与“画廊”有关。长廊尽头，有一幅特别的肖像，画的是一位无名古罗马将军。传说在月圆之夜，这幅画像中人物的眼睛会跟随观者移动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们私下说，那是公爵为自己选择的“永恒灵魂载体”。他无法在现实中成为罗马人，便将自己的精神寄托于这幅古老的画像之中，永远守护着他建造的这座“新罗马”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，为这座过于理性、甚至有些冷峻的城市，注入了人性的温度与神秘的阴影。它们提醒着来访者，再宏伟的蓝图，也由血肉之躯绘制，也逃不脱凡人对于永恒与神秘的渴望。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步萨比奥内塔，你遇到的不是庞贝那样的废墟，也不是佛罗伦萨那样的层叠史诗。你遇到的，是一个完整的、凝固的“时刻”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是文艺复兴城市理念的<strong>罕见标本</strong>。与同时代其他“理想城市”项目（如帕尔马诺瓦）多为军事要塞不同，萨比奥内塔是宫殿、剧院、教堂、广场、民居的完整组合，是一个微缩的、可供生活的“宇宙模型”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂萨比奥内塔，便是读懂一个时代精英的终极梦想：用人的理性与美学，在尘世建造天国。尽管这个梦随着公爵的逝世而破碎，但这座城本身，已成为一座无与伦比的“梦想纪念碑”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值，在<strong>2008年</strong>与曼托瓦一同被列入世界遗产名录时得到了最高认可。评语写道：“代表了文艺复兴时期城市建设的最高成就，体现了启蒙时代关于理想城市的宣传。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有摩肩接踵的游客，只有安静的街道、精确的投影和那个无处不在的公爵幽灵。它邀请你进行的，不是打卡，而是一场与历史野心的沉思对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/anagni-papal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿纳尼（教皇的故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Anagni</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pitigliano" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮蒂利亚诺（凝灰岩之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pitigliano</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bobbio-piacenza-italy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博比奥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bobbio</p>
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
