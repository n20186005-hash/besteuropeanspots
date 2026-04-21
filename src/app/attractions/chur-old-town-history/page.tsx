import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '库尔历史溯源｜瑞士最古老城市的5000年尘封往事与名人传奇',
  description: '深入阿尔卑斯山的心脏，探秘瑞士最古老城市——库尔。5000年历史叠层，从罗马要塞到宗教变革中心，与菲利克斯·雷加佐尼等名人同行，聆听石头诉说的故事。',
}

export default function ChurOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '格劳宾登州库尔', href: '/destinations/europe' },
            { label: '库尔老城', href: '/attractions/chur-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`库尔老城・Chur Old Town・瑞士・格劳宾登州库尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当人们谈论瑞士，脑海中浮现的往往是雪山、湖光与精准的钟表。然而，在莱茵河上游的阿尔卑斯山谷中，隐藏着一座被时光浸透的“活化石”——<strong>库尔</strong>。这里没有苏黎世的繁华，也无日内瓦的国际气息，它的名片上只印着一行沉甸甸的字：<strong>瑞士最古老的城市</strong>。考古证据将人类在此的定居史追溯到近5000年前，层层叠叠的历史沉积，让每一条鹅卵石小巷都成为通向过去的隧道。抛开游玩攻略，走进库尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`库尔老城`} />
                <InfoRow label="英文名称" value={`Chur Old Town`} />
                <InfoRow label="正式名称" value={`Chur Old Town`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`格劳宾登州库尔`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "库尔的诞生，远比“瑞士”这个国家概念要古老得多。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事始于新石器时代晚期，约<strong>公元前3900年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在今日大教堂所在的岩石山丘上，最早的一批定居者已在此建立聚落。这并非偶然，山丘俯瞰着肥沃的普拉苏尔河谷，控制着通往多个阿尔卑斯山口的要道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“库尔”这个名字本身，就是一部微缩的语言史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它最初源于凯尔特语的 <strong>“Curia”</strong> ，意为“部落”或“集会地”。当<strong>罗马帝国</strong>的版图向北扩张，这里被纳入<strong>雷蒂亚行省</strong>。精于行政与工程的罗马人，在此建立了名为 <strong>“Curia Raetorum”</strong> 的城镇，意为“雷蒂亚人的库尔”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字被正式载入史册，成为其罗马身份的证明。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马人看中的，正是其无可替代的战略位置。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "库尔坐落于<strong>莱茵河</strong>与<strong>普莱苏尔河</strong>交汇处，是翻越<strong>圣贝纳迪诺山口</strong>、<strong>朱利尔山口</strong>等关键通道的北部起点。这里从一个高山聚落，一跃成为帝国北方边境的军事与行政前哨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马大道在此交汇，兵员、货物与信息在此流转。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国衰落后，库尔并未沉寂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它先后被日耳曼部族占据，并于<strong>公元452年后</strong>，逐渐成为早期基督教在阿尔卑斯山区的传播中心。<strong>库尔主教区</strong>的建立，让这座山城在“黑暗时代”依然保有文明的火种与政治影响力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的起源，深植于岩石、河流与道路之中。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>罗马的边疆与基督的堡垒</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元15年，罗马帝国彻底征服雷蒂亚地区，<strong>Curia Raetorum</strong>被系统性地建设为一个典型的罗马城镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "网格状的街道布局、公共广场、神殿与浴场相继出现。至今，在老城的地下与一些建筑的墙体中，仍可发现罗马时期的石料与遗迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，库尔最深刻的罗马印记，在于其角色的转变。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在这群山环绕之地，我们建立了秩序与神祇的殿堂，以对抗北方的混沌与寒冷。” —— 一段假想的罗马军官日记" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着<strong>基督教</strong>在4世纪成为国教，库尔也经历了信仰的剧变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早期的基督教教堂很可能直接建在罗马神庙的遗址之上，象征着新信仰对旧秩序的覆盖。<strong>公元451年</strong>，库尔主教座堂的雏形可能已经出现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市从罗马的军事行政中心，平稳过渡为阿尔卑斯山区最早的基督教主教座堂城市之一，这一双重身份奠定了其后千年的根基。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>中世纪的贸易枢纽与“联邦城市”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入中世纪，库尔主教的权力日益增长，不仅掌控精神世界，也成为世俗领土的统治者。<strong>库尔主教国</strong>成为一个独特的神权政体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城山顶上的<strong>大教堂</strong>和<strong>主教宫殿</strong>，正是这种政教合一权力的物理体现。与此同时，得益于阿尔卑斯商路，库尔发展成为繁荣的贸易中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "羊毛、葡萄酒、盐和东方货物在此集散。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1514年</strong>的灾难性大火几乎将木结构的老城付之一炬。但这场灾难也带来了重生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "重建后的库尔，大量采用了坚固的石头与砖块，并形成了我们今天看到的、色彩柔和的<strong>晚期哥特式与文艺复兴风格</strong>建筑群。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "狭窄曲折的街道并非随意为之，而是为了抵御山风与规划防御。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1803年</strong>，拿破仑的《调解法案》终结了库尔主教国长达数百年的统治，库尔被纳入新成立的<strong>瑞士联邦格劳宾登州</strong>，并成为其首府。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从罗马前哨到主教国，再到现代联邦的州府，库尔的历史印记，是一部浓缩的阿尔卑斯山中央权力变迁史。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>菲利克斯·雷加佐尼：人文主义星火照深山</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在库尔大教堂的幽静回廊中，或在老城某座贵族府邸的古老藏书室里，你仿佛能遇见一位身着黑袍、神情专注的学者。他是<strong>菲利克斯·雷加佐尼</strong>，一位将文艺复兴人文主义思想带入阿尔卑斯深谷的先驱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>雷加佐尼于1445年出生在库尔一个富裕的家庭</strong>。他的生平，恰逢欧洲思想巨变的时代。在巴塞尔和巴黎大学深造期间，他沉浸在古典文学、哲学和新兴的人文主义思潮中。学成后，他没有留恋欧洲的大都市，而是选择回到故乡库尔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的归来，为这座山城带来了前所未有的知识新风。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅是一位神学家（后来担任大教堂教士会成员），更是一位杰出的<strong>翻译家、历史学家和出版家</strong>。他的毕生使命，是将古典智慧的清泉，引向他的同胞。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我愿做一道桥梁，让古罗马与希腊先贤的智慧，跨越阿尔卑斯山的险峻，流淌进我们雷蒂亚人的家园。” —— 菲利克斯·雷加佐尼" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最伟大的贡献之一，是将<strong>亚里士多德</strong>的《伦理学》等重要著作从希腊文翻译成拉丁文。在印刷术刚刚兴起的年代，他的译作通过新兴的印刷厂传播，影响了整个德语文化区的学术圈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，他还撰写了《雷蒂亚编年史》，试图用严谨的笔触梳理故乡混乱的早期历史，为这片土地寻找文明的根系。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更为人称道的是他的勇气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在宗教迷信依然盛行的年代，雷加佐尼公开撰文<strong>反对猎巫运动</strong>，呼吁理性与司法公正。他在库尔的生活与工作，证明了即使远离佛罗伦萨或罗马那样的文化中心，文艺复兴的理性与人文之光，依然可以穿透群山，在一个主教国的心脏地带顽强闪烁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他逝于1506年，安葬于库尔。他留下的精神遗产，让库尔在宗教改革风暴来临前，有了一片理性的土壤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>宗教改革中的本地回响：约翰·科米ander</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "16世纪，宗教改革的浪潮也冲击着库尔。其中，本地牧师<strong>约翰·科米ander</strong>扮演了关键角色。他原名<strong>约翰·奈瑟</strong>，因其出生地“迈恩费尔德”（意为“田野”）的拉丁化称呼而得名“科米ander”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科米ander在维滕贝格师从<strong>马丁·路德</strong>，深受新教思想影响。1524年，他回到格劳宾登地区，以库尔为主要舞台，积极传播路德宗思想。他的布道极具煽动力，直接挑战罗马教廷的权威。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "库尔，这个古老的主教座堂城市，陷入了激烈的神学争论与社会动荡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1526年，在科米ander等人的推动下，格劳宾登联盟（库尔所属的政治实体）举行了著名的<strong>伊兰茨宗教辩论</strong>。尽管辩论结果并未立刻确定新教的完全胜利，但它极大地动摇了天主教会的绝对权威。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "库尔最终逐渐接受了新教改革，大教堂也从天主教教堂转变为<strong>新教归正宗教堂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一转变过程充满了斗争与妥协，反映了阿尔卑斯山社区在面临巨大思想变革时的独特路径。科米ander的人生与库尔紧密相连，他是外部宏大历史叙事在本地投下的具体影子，他的行动直接改变了这座城市的信仰底色与每日钟声的意义。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在库尔，历史与传说的边界往往和山间的晨雾一样朦胧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "流传最广的故事，与老城的起源之谜有关，被称为 <strong>“马尔科马尼人的宝藏”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在罗马人到来之前，这里居住着属于<strong>日耳曼部族一支的马尔科马尼人</strong>。当罗马军团逼近的烽烟升起时，部落的酋长将所有的黄金、祭祀用的神器与部族最珍贵的圣物，藏匿于<strong>城堡山</strong>的某个秘密洞穴或地下深处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他施以古老的咒语，让宝藏唯有在“双头鹰的凝视下，当教堂的钟声沉默三次”时才会重现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说代代相传，刺激了无数寻宝者的幻想。有人将“双头鹰”解读为后来统治该地区的哈布斯堡家族徽记，也有人认为是指某种特定的天文现象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而“钟声沉默三次”，则被联想为圣诞午夜弥撒、耶稣受难日或某个特殊纪念日的寂静时刻。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地的老人会在冬夜里讲述：“宝藏的守护者不是恶龙，而是山本身的精灵。它只会在城市面临真正危难时，为命中注定的纯正之心指引道路。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说并非空穴来风。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它很可能源于人们对库尔史前时期与罗马征服初期历史的一种模糊记忆的浪漫化。考古学家确实在城堡山区域发现了早于罗马的铁器时代遗迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说将库尔的“古老”属性进一步神话，赋予冰冷的石头以守护的灵性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在老城，你会感到，每一堵厚墙之后，或许都封存着一段未被书写的故事。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂库尔，便是读懂一种“连续性”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿尔卑斯天险的环抱中，它奇迹般地保存了从新石器时代、罗马帝国、中世纪主教国到现代瑞士州府的近乎完整的历史断层。这并非一座露天博物馆，而是一个依然跳动着现代脉搏的“活体历史层”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的居民每日穿行于罗马人规划过的街道格局中，在由主教宫殿改建的政府建筑里工作，去历经五次重建的大教堂里祈祷或沉思。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，不在于某个地标建筑的惊世骇俗，而在于这种<strong>跨越五千年的时空叠压感</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种厚重感，需要你慢下来，用手触摸教堂地窖里粗糙的罗马石基，用目光解读贵族府邸立面浮雕上的家族兴衰，在市政厅广场想象当年集市与宗教辩论的喧嚣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到库尔，你是在与“瑞士”诞生之前的漫长岁月对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，在欧洲，国家的年轻与土地的古老常形成奇妙对照。这座瑞士最古老的城市，宛如阿尔卑斯文明的一颗核心，静默地诉说着关于生存、信仰、权力与交流的永恒故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/abbey-of-saint-gall-library" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣加仑修道院图书馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Abbey of Saint Gall</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/morges-castle-tulip-festival" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫尔日</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Morges</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rapperswil-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉珀斯维尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rapperswil Castle</p>
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
