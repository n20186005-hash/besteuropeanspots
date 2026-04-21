import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博乌佐夫城堡历史溯源｜条顿骑士团的隐秘堡垒与哈布斯堡大公的童话梦',
  description: '深入捷克秘境，探寻博乌佐夫城堡700年传奇。从条顿骑士团要塞到欧根大公的浪漫杰作，揭开这座完美童话堡垒背后的权力、信仰与个人痴迷。',
}

export default function BouzovCastleTeutonicRomanceHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '奥洛穆茨州', href: '/destinations/europe' },
            { label: '博乌佐夫城堡', href: '/attractions/bouzov-castle-teutonic-romance-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博乌佐夫城堡・Bouzov Castle・捷克・奥洛穆茨州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在捷克东部连绵的森林与丘陵中，藏着一座过于完美的城堡。尖塔、护城河、吊桥、雄堞——它满足世人关于中世纪堡垒的一切幻想，却诞生于20世纪的前夜。它的核心秘密，并非某位国王，而是一个以征伐与虔信书写历史的军事修会：<strong>条顿骑士团</strong>。而赋予它今日容颜的，则是一位身陷帝国黄昏与身份迷思的哈布斯堡大公。抛开游玩攻略，走进博乌佐夫城堡的尘封往事，遇见属于它的权力、信仰与童话。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博乌佐夫城堡`} />
                <InfoRow label="英文名称" value={`Bouzov Castle`} />
                <InfoRow label="正式名称" value={`Bouzov Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`奥洛穆茨州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博乌佐夫城堡的起源，深埋在14世纪的波希米亚边疆迷雾中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它最初的名字已不可考，但史料记载，在<strong>1317年</strong>，一位名叫“布泽克”（Buzek）的波希米亚贵族在此地建造了一座早期哥特式城堡。城堡的名字“Bouzov”，很可能就源于这位创始领主名字的变体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里地处摩拉维亚北部，历史上是商路与战路的交汇点，也是权力真空的缓冲地带。最初的城堡，其使命简单而粗暴：守护家族领地，震慑过往旅人，在动荡中攫取财富与安全。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非为王权而建，而是封建领主割据时代的典型产物。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地有古老民谣低唱：“岩石上长出铁棘，领主的目光比铁冷。过路人留下买路钱，或是永远留下。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在最初的百年里，它几经转手，在数个地方贵族家族间易主，如同棋盘上的一枚棋子。直到一场影响中欧格局的宗教与军事风暴，将它彻底卷入历史洪流，改变了它的所有基因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1696年</strong>，一个决定性的转折到来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时的所有者，负债累累的贵族将城堡及其广袤领地，出售给了一个极不寻常的买家——<strong>条顿骑士团</strong>。从此，这座世俗领主的堡垒，被烙上了神圣罗马帝国最强大军事修会的深刻印记，开启了它长达两百三十年的“骑士团时代”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：白袍骑士的北境堡垒</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "条顿骑士团的入驻，并非为了发动新的“北方十字军”，而是其战略收缩后的资产管理与精神象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此时，骑士团在普鲁士的世俗领土已不复存在，总部远在南方的维也纳。博乌佐夫成为了他们在波希米亚领地上的行政与经济中心。骑士团对城堡进行了实用主义改造，加固防御，扩建居住空间，使之成为管理庞大田产、森林和村庄的坚固据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的教堂被赋予了特殊地位，成为骑士团成员举行宗教仪式的场所。冰冷的石墙内，回荡着拉丁文的祷告，白底黑十字的旗帜在塔楼飘扬。这里虽无战事，却依旧弥漫着修会纪律严明、自给自足的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座安静的权力堡垒，提醒着世人这个曾与波兰-立陶宛联邦争霸的军事修会，依然存在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：一个人的浪漫主义史诗——欧根大公的“完美”梦</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的巨变，发生在<strong>1895年</strong>。时任条顿骑士团<strong>大团长</strong>的<strong>欧根·冯·哈布斯堡-洛林大公</strong>，决心将博乌佐夫打造成自己梦想中的“完美中世纪城堡”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位大公是奥皇弗朗茨·约瑟夫一世的堂弟，一位艺术家气质远多于政治家才干的贵族。他对哥特式与文艺复兴式建筑充满狂热。在他眼中，历经数百年修补、风格杂乱的博乌佐夫，配不上骑士团的辉煌历史，也配不上他自己的理想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一场耗时近二十年、极尽考究与奢华的“浪漫主义重建”工程启动了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "欧根大公聘请了顶尖的建筑师与艺术家，并非简单修复，而是基于严谨的“历史风格”研究，进行了一次彻底的、理想化的重建。他要求每一个细节——从巨大的<strong>骑士大厅</strong>、华丽的<strong>小礼拜堂</strong>，到马厩、厨房乃至门锁——都必须符合他心中13-16世纪鼎盛时期堡垒的样貌。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "大公在日记中写道：“这里不应有历史的偶然与残缺，它必须是凝结的史诗，是骑士精神的石质化身。每一块石头，都要诉说真理。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工程使用了当时最现代化的技术，包括钢筋混凝土和中央供暖系统，却巧妙地被中世纪外观完美隐藏。最终诞生的，是一座功能现代、外观却“比中世纪更中世纪”的建筑杰作。它成了欧根大公个人的纪念碑，也是欧洲历史主义建筑登峰造极的产物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记三：战火与象征的劫波</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的“完美”容颜，在20世纪屡遭冲击。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战期间，纳粹德国解散了条顿骑士团，并强占博乌佐夫城堡。<strong>希姆莱</strong>的党卫队一度觊觎此地，认为其德意志骑士团的历史背景，适合改造为“SS精英学校”或 Germanic cult 的中心。城堡内部部分装潢被更换，以迎合纳粹的审美与意识形态宣传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战后，它作为“德意志财产”被捷克斯洛伐克国家没收。在冷战时期，这座城堡因其与“德意志军事修会”及“哈布斯堡反动贵族”的关联，官方叙事一度复杂而谨慎。它作为博物馆开放，但其真正建造者的故事曾被刻意淡化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直至政权更迭后，关于<strong>欧根大公</strong>与条顿骑士团的完整历史，才得以被重新梳理和客观呈现。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：建造者欧根大公——末代骑士的乌托邦</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>欧根大公（1863-1954）</strong> 的一生，是与博乌佐夫城堡紧紧缠绕的一生。他是骑士团<strong>大团长</strong>，更是城堡的“再生之父”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他出身显赫，却无意于维也纳宫廷的政治漩涡。对艺术、历史和宗教的痴迷，引领他走上了另一条路。接任大团长一职，对他而言似乎是一种命运的安排，让他得以将自己的艺术理想，投射到一个拥有悠久历史的实体之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他对博乌佐夫的改造，绝非单纯的建筑项目，而是一场全身心的投入。他深度参与每一项设计决策，亲自挑选家具、盔甲、挂毯和艺术品。城堡内的<strong>图书馆</strong>收藏了他搜集的大量珍贵古籍，<strong>礼拜堂</strong>的祭坛装饰极尽繁复，体现了他虔诚的天主教信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这位大公内心充满矛盾。他致力于复兴一个中世纪军事修会的荣光，但他所生活的，却是民族主义兴起、帝国摇摇欲坠的现代世界。他将城堡打造成一个封闭的、完美的历史幻境，某种程度上，是他对纷乱现实的一种逃避。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位访客回忆：“大公殿下带领我们参观时，仿佛不是这里的主人，而是它最虔诚的管家。他抚摸石墙的样子，像在抚摸一段活着的历史。他说，‘在这里，时间听从我的安排。’”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的个人生活也颇具悲剧色彩。因身居神职（骑士团团长需保持独身），他无法拥有世俗家庭。城堡，成为了他情感与创造力的唯一寄托，是他的“石质妻子与孩子”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战及战后，他流亡海外，终老于德国，再也未能回到他倾注了毕生心血的作品身边。博乌佐夫是他永远回不去的乌托邦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：改革者约翰大公——被拒绝的现代灵魂</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在欧根大公之前，另一位哈布斯堡大公也曾与博乌佐夫紧密相连，那就是<strong>约翰·冯·哈布斯堡大公（1782-1859）</strong>，时任骑士团<strong>大团长</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与欧根不同，约翰大公是一位思想开明、颇具现代眼光的改革者。他深受启蒙思想影响，致力于将骑士团从一个保守的封建机构，转变为从事慈善、教育和社会福利的现代组织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>19世纪初期</strong>，他长驻博乌佐夫，将其作为推行改革的试验田。他引入先进的农业技术，改善佃农的生活条件，创办学校，并试图精简骑士团繁琐的宗教仪式，更专注于实际的公益事业。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的改革，在骑士团内部遭遇了强大保守势力的激烈反对。博乌佐夫这座古老堡垒，成了新旧思潮交锋的战场。最终，约翰大公的改革多数未能成功，他也在挫败中逐渐远离了权力中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他在当地民间留下了深远影响。他对农民的和善与帮助，被编成故事代代相传。在城堡的档案中，依然保存着他签署的改善农奴状况的法令草案。他是试图为这座中世纪堡垒注入现代灵魂的先驱，尽管生不逢时。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "两位大公，一位用石头凝固梦想，一位试图用思想改变现实。他们的影子，共同构成了博乌佐夫城堡复杂的精神内核。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博乌佐夫的传说，与其石墙一样冰冷而幽深。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的幽灵是“<strong>白色贵妇</strong>”。传说她是一位中世纪领主的女儿，因爱上一名敌对的骑士，被愤怒的父亲囚禁在城堡最高的塔楼中。在一个风雪之夜，她试图用床单结成绳索逃离，却不慎坠落殒命。此后，每逢风雪交加的夜晚，她的白色身影便会出现在塔楼窗口，无声地凝视远方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但更吸引宝藏猎人的，是关于<strong>条顿骑士团宝藏</strong>的传说。人们相信，骑士团在数百年的时间里，将部分财富——包括金器、圣物和文献——秘密藏匿在城堡复杂的地下迷宫或厚重的墙壁夹层中。纳粹和后来的许多探秘者都曾暗中搜寻，但无一所获。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一个古老守夜人的口诀在附近村庄流传：“骑士的黄金不说话，藏在石头的心跳下。当猫头鹰在圣诞夜第三次鸣叫，教堂铁十字的影子会指向它。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡<strong>水井</strong>的故事则更添神秘。这口井深达数十米，直通地下水源。传说建筑时，曾将一名不幸的工人封入井壁作为“奠基祭品”，以确保水源永不枯竭。因此，据说在夜深人静时，将耳朵贴近井口，仍能听到微弱的敲击声和叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论恐怖还是诱惑，都为这座极度“完美”、甚至略显刻意的城堡，注入了一丝不可控的、属于真正历史的野性与神秘。它们是人类对这座巨物敬畏与想象的产物，是石头史诗的情感注脚。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们凝视博乌佐夫城堡那无懈可击的轮廓，我们看到的远不止一座旅游明信片上的风景。它是一座<strong>建筑化石</strong>，封存了从封建割据、军事修会鼎盛到浪漫主义怀旧的时代层理。它更是一面<strong>镜子</strong>，映照出<strong>欧根大公</strong>这样一位末代贵族，在历史洪流中，试图用石头对抗时间消逝、重塑身份认同的磅礴努力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的“不真实感”，恰恰是其最真实的历史价值所在。它直言不讳地告诉我们：历史可以被解读、被崇拜，甚至被“完美地”再创造。它见证了权力的嬗变、信仰的转化，以及个人梦想如何能在一个宏大的实体上留下不可磨灭的刻痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂博乌佐夫，便是读懂欧洲中世纪理想在近代的回响，读懂哈布斯堡王朝黄昏的一曲复杂挽歌。它提醒每一位访客，最动人的风景，往往存在于真实与幻想、历史与创造之间那道深深的缝隙里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、内部厅室打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kokorin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科科日恩城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kokořín Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rakovnik-czech-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉科夫尼克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rakovník</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/jindrichuv-hradec-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    因
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">因德日赫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jindřichův Hradec</p>
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
