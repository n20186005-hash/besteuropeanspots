import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '德尔斐历史溯源｜阿波罗神庙的前世今生与神谕传奇',
  description: '探寻古希腊世界的“肚脐”。走进德尔斐阿波罗神庙的废墟，揭开皮提亚神谕的千年迷雾，聆听石头诉说的文明兴衰与人性抉择。',
}

export default function TempleOfApolloDelphiHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '德尔斐', href: '/destinations/europe' },
            { label: '德尔斐阿波罗神庙', href: '/attractions/temple-of-apollo-delphi-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`德尔斐阿波罗神庙・Temple of Apollo at Delphi・希腊・德尔斐`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果古希腊世界有一个灵魂的坐标，那一定是德尔斐。它并非繁华的城邦，却以一座献给光明与预言之神阿波罗的圣殿，成为了整个地中海文明的信仰中心与命运仲裁所。这里回荡着阿波罗斩杀巨蟒的古老神话，弥漫着从地缝中升腾的“神息”，决定着城邦的征伐、殖民者的航向，乃至个人的生死荣辱。抛开游玩攻略，走进德尔斐的尘封往事，遇见属于它的神谕、疯狂与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`德尔斐阿波罗神庙`} />
                <InfoRow label="英文名称" value={`Temple of Apollo at Delphi`} />
                <InfoRow label="正式名称" value={`Temple of Apollo at Delphi`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`德尔斐`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德尔斐的起源，深埋在神话与现实的交界处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字“Delphi”，可能源自古希腊词“delphus”（子宫），暗喻其作为大地女神盖亚圣所的初始身份。在阿波罗信仰到来之前，这里崇拜的是盖亚及其女儿忒弥斯（正义女神），并由一条名叫<strong>皮同</strong>的巨蟒守护。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，太阳神<strong>阿波罗</strong>为了建立自己的神谕所，自遥远的德洛斯岛一路追寻至此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他用金色的弓箭射杀了皮同，占据了这片圣地。这场神界的“权力更迭”，象征了光明、秩序与理性（阿波罗）对古老、混沌与大地本能（皮同/盖亚）的征服。阿波罗在此建立了他的神庙，德尔斐由此成为“皮提亚的阿波罗”的圣城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考古发现将人类活动的痕迹追溯到<strong>公元前二千年</strong>的迈锡尼时代，但圣所的辉煌真正始于<strong>公元前8世纪</strong>。它坐落于帕尔纳索斯山麓的陡坡上，仿佛悬于天地之间，脚下是科林斯湾的粼粼波光。这种非凡的地理位置，本身就强化了其作为“神人中介”的崇高与神秘。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的颂歌这样传唱：“阿波罗，你为何流连于此？是为寻找牧牛的港湾，还是为建立凡人的神谕所？…这里山崖陡峭，并非盛产骏马与平原之地，但它将为你带来来自四海之人的献祭。”" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德尔斐的历史，是由神谕、献礼与战火共同镌刻的。其核心印记，莫过于神庙本身与那套决定了无数命运的神谕体系。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>神谕的殿堂：屡毁屡建的神庙</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天看到的<strong>阿波罗神庙</strong>废墟，主要是公元前4世纪重建后的遗存。但它已是第六代建筑。最早的神庙传说由蜂蜡与羽毛所筑，第二座由青铜建成，皆毁于神秘火灾或地震。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一座石质神庙建于<strong>公元前7世纪</strong>，由传奇建筑师<strong>特罗弗尼乌斯</strong>和<strong>阿伽墨得斯</strong>兄弟建造，却在公元前548年焚毁。随后，在<strong>阿尔克迈翁家族</strong>的主持下，一座更为宏伟的多利安式神庙拔地而起。然而，公元前373年的大地震再次将其摧毁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "现存的遗址，便是震后由全希腊城邦捐款重建的结晶。它见证了圣所坚韧的生命力——无论天灾还是人祸，希腊世界总愿倾其所有，让这盏“文明明灯”永不熄灭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>命运的迷雾：皮提亚神谕的仪式</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "神谕发布的过程，本身就是一场精心编排的戏剧。每月仅第七天（阿波罗的生日）进行预言。女祭司<strong>皮提亚</strong>，一位普通的当地中年妇女，需进行严格的净仪式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她走入神庙内殿（阿迪顿），坐在一个三脚架上，脚下便是传说中升起致幻气体的地缝。在吸入“神息”、咀嚼月桂叶、手握一碗圣泉之水后，她进入恍惚状态。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "公元2世纪的作家<strong>普鲁塔克</strong>（他曾是德尔斐的祭司）描述道：“她时而低吟，时而尖叫，声音粗粝而破碎…她的整个身体剧烈颤抖。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她口中发出的模糊呓语，由守在一旁的男祭司“翻译”成晦涩难解、充满双关的六步格诗，交付给求问者。从斯巴达的法律、雅典的政制，到殖民者远航前的卜问，整个希腊世界的重大决策，都绕不开这道“神旨”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>全希腊的盛会：皮提亚运动会</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了神谕，德尔斐另一大盛事是<strong>皮提亚运动会</strong>。最初为纪念阿波罗斩杀皮同，每四年举行一次，规模仅次于奥林匹克运动会。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "竞赛项目包括体育、音乐与诗歌。获胜者的奖赏不是桂冠，而是神圣的<strong>月桂枝冠</strong>。运动会期间，全希腊遵守“神圣休战”，各城邦使节云集，它不仅是竞技场，更是政治、文化交流的核心论坛，强化了德尔斐作为泛希腊精神首都的地位。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德尔斐的传奇，由无数被神谕触碰命运的名人所书写。他们的故事，揭示了神谕如何与人性、野心和悲剧交织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>克罗伊索斯：误解神谕的国王</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "吕底亚国王<strong>克罗伊索斯</strong>，以巨富闻名。公元前6世纪中期，为应对波斯的威胁，他派使者前往德尔斐求问。神谕回应：“若克罗伊索斯攻打波斯，他将毁灭一个伟大的帝国。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克罗伊索斯大喜，认为预言指向波斯的覆灭，遂发动战争。结果一败涂地，他本人被俘，他所统治的吕底亚帝国就此灭亡。被绑在柴堆上即将处死时，他哀叹德尔斐神谕骗了他。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波斯国王居鲁士好奇，派人前往德尔斐质问。祭司的回答堪称诡辩经典：“神谕从未撒谎。克罗伊索斯确实毁灭了一个伟大的帝国——就是他自己的帝国。” 这个故事成为希腊思想中关于命运反讽与人类理解局限性的经典寓言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>俄狄浦斯：弑父娶母的悲剧</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然俄狄浦斯的故事属于神话范畴，但它与德尔斐神谕的绑定如此之深，已成为西方文化中“命运”的代名词。底比斯国王<strong>拉伊俄斯</strong>因罪孽被德尔斐神谕警告：他将死于亲生儿子之手。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是他将新生儿<strong>俄狄浦斯</strong>的脚踝刺穿丢弃。大难不死的俄狄浦斯长大后，也在德尔斐得知了自己“将弑父娶母”的可怕命运。为逃避这诅咒，他远离自认为的家乡，却在三岔路口与一位陌生老者争执并将其杀死——那正是他的生父拉伊俄斯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后，他因解开斯芬克斯之谜成为底比斯国王，并娶了前王的遗孀——他的亲生母亲伊俄卡斯忒。神谕一字不差地应验了，尽管当事人竭尽全力逃避。德尔斐在这里扮演了冷酷的命运宣示者，揭示了人类在既定轨迹前的渺小与挣扎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>苏格拉底：哲学视野的“神谕”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德尔斐甚至间接催生了西方哲学。雅典的苏格拉底曾听闻，他的朋友凯勒丰去德尔斐求问：“世上是否有比苏格拉底更有智慧的人？” 皮提亚的回答是：“没有。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "苏格拉底大惑不解，自知并无特殊智慧。于是他开始四处寻访那些以智慧闻名的人——政治家、诗人、工匠，与他们辩论。最终他发现，这些人的“智慧”在于自以为知，实则不知；而他的智慧，恰恰在于“自知其无知”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "苏格拉底由此领悟：“神谕的真正含义是：<strong>‘凡人啊，像苏格拉底那样认识到自己的智慧毫无价值的人，才是最有智慧的。’</strong>”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这条神谕成了苏格拉底哲学使命的起点：通过不断追问与省察，破除虚妄，认识真理与自己。德尔斐的箴言“认识你自己”，在此获得了最深刻的哲学实践。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德尔斐的传说，赋予了冰冷石头以灵性与温度，其中最核心的莫过于“世界的中心”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>“世界的肚脐”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，宙斯想确定大地的中心，便从世界两端放出两只神鹰，相向而飞。它们交汇的地点，正是德尔斐。宙斯在此投下一块圣石作为标记，这便是<strong>欧姆法洛斯</strong>，意为“肚脐”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在古代游记中，这块石头被描述为：“一块看似普通的白色石头，但被华丽的网状织物包裹，两端有两只黄金神鹰守护。它是万物起始之点，神力汇聚之所。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿波罗神庙遗址旁，今天仍能看到一块罗马时期的欧姆法洛斯石复制品。它不仅是地理中心，更是精神与宇宙秩序的中心，连接着神界、人界与冥界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣泉与月桂</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "神庙旁的<strong>卡斯塔利亚圣泉</strong>，是每位求问者和朝圣者净身之处。传说泉水由阿波罗的情人、宁芙卡斯塔利亚为逃避他的追求而化身。饮此泉水，能获得诗歌的灵感。拜伦等后世诗人均慕名前来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "神庙周围遍植月桂树，因其与阿波罗的初恋<strong>达芙妮</strong>有关。达芙妮为逃避阿波罗，化身月桂树。阿波罗悲痛欲绝，折其枝叶编成冠冕，宣布月桂为他的圣树。从此，月桂冠成为胜利、荣誉与诗歌的永恒象征，从皮提亚竞技会的胜者，到罗马皇帝的额前，再到后世诗人的桂冠，其意象皆源于德尔斐的山坡。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在德尔斐的废墟间，你触摸的不仅是断柱与基石，更是古希腊人认知世界的范式。这里曾是他们向未知发问的麦克风，是城邦博弈的仲裁庭，是文化认同的粘合剂，也是个体直面命运惨淡与荣耀的镜厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "神谕的模糊性，恰恰反映了古人对于命运既敬畏又试图把握的矛盾心理。它不提供确切的答案，而是抛出需要智慧与勇气去解读的谜题。德尔斐的衰落，伴随着理性哲学的兴起与基督教的确立，象征着一个依赖神秘启示的时代终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，它的回响从未断绝。“认识你自己”、“凡事勿过度”等镌刻在神庙上的箴言，穿越时空，仍是人类永恒的功课。这片山坡提醒我们，文明不仅建立在权力与财富之上，更建立在对于生命意义、伦理界限与宇宙秩序的深沉思索之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，神话是历史，石头会说话，而风声里，仿佛还夹杂着皮提亚含混的谶语，等待着下一个时代的解读。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mystras-byzantine-ruins-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米斯特拉斯拜占庭遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mystras</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/corfu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科孚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corfu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kastoria-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯托里亚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kastoria Old Town</p>
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
