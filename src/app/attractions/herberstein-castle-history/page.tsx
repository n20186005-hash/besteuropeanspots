import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施泰尔马克州历史溯源｜海尔贝施泰因城堡的前世今生与骑士家族传奇',
  description: '探秘奥地利施泰尔马克州深山峡谷中的“双面古堡”：七百年骑士家族权力史诗，与一座世界级动物园的诞生传奇。在历史与自然的交汇处，读懂欧洲。',
}

export default function HerbersteinCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '施泰尔马克州', href: '/destinations/europe' },
            { label: '海尔贝施泰因城堡', href: '/attractions/herberstein-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`海尔贝施泰因城堡・Herberstein Castle・奥地利・施泰尔马克州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥地利施泰尔马克州一条深邃而隐秘的峡谷边缘，一座城堡已然伫立了超过七个世纪。它并非孤立的石头建筑，而是一部仍在呼吸的家族编年史，一个由骑士、火器、文艺复兴与珍奇异兽共同写就的传奇。它的名字——海尔贝施泰因，既是坚不可摧的“赫里伯特的石头”，也是一扇通往中世纪权力游戏与近代自然探索的奇幻之门。在这里，冰冷的防御工事与生机勃勃的动物王国形成了奇妙的共生。抛开游玩攻略，走进海尔贝施泰因的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`海尔贝施泰因城堡`} />
                <InfoRow label="英文名称" value={`Herberstein Castle`} />
                <InfoRow label="正式名称" value={`Herberstein Castle`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`施泰尔马克州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡的起源，牢牢绑定在一个几乎与其同名的家族命运之上。时间回溯到<strong>13世纪初</strong>，具体而言是<strong>大约1220-1230年间</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，这片属于今日施泰尔马克州的土地，是神圣罗马帝国内部各方势力博弈的前沿。地方贵族通过建造堡垒，来宣示对土地、山谷与交通要道的控制权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“海尔贝施泰因”（Herberstein）这个名字本身，就是一段宣言。它源于古德语人名 <strong>“Heribert”</strong> （意为“军队-光辉”），与 <strong>“stein”</strong> （石头）的结合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直译为 <strong>“赫里伯特的石头城堡”</strong> 。这明确宣告了初代建造者的主权：一位名叫赫里伯特的骑士，在此垒石为堡，扎根于此。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地最古老的文献碎片中曾模糊提及：“在劳弗溪流切割出的岩石之上，赫里伯特家族的宅邸开始显现其轮廓。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡选址极具军事眼光。它矗立在<strong>劳弗峡谷</strong>边缘的玄武岩巨石之上，三面被天然的陡峭悬崖所保护，仅有一侧可通过桥梁与外部相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种“一夫当关，万夫莫开”的地势，使其从一开始就是一座功能纯粹的<strong>军事堡垒与家族权力中心</strong>，而非用于居住享受的宫殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从最初简单的木石结构，到后来逐步扩建的坚固石墙，海尔贝施泰因城堡的每一块基石，都浸透着中世纪领主对生存、防卫与扩张的最原始渴望。它的诞生，是乱世中一个家族为自己打造的“岩石巢穴”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：从堡垒到府邸的烈火洗礼 (17世纪初)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫长的中世纪，城堡历经了多次围攻与动荡，但其石质核心始终未倒，见证了海尔贝施泰因家族在当地地位的日益稳固。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在<strong>1617年</strong>。一场灾难性的大火席卷了城堡。这场火并非战争所致，却比战争更具毁灭性——它几乎吞噬了城堡内所有木制结构和几个世纪积累的室内财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这场大火也烧出了一个新时代。当时的城堡主人 <strong>“约翰·马克西米利安一世·冯·海尔贝施泰因”</strong> 并未在废墟前退缩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他决定进行大规模重建，而重建的指导思想，已不再是单纯的军事防御。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "家族档案记载了主人的决心：“我们不仅要重建墙壁，更要重建一个配得上家族荣耀与新时代品味的家园。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "重建工程引入了文艺复兴晚期及早期巴洛克风格。巨大的窗户取代了狭窄的射击孔，装饰华丽的厅堂代替了阴暗的兵营，精美的壁画开始出现在墙壁上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这次重建，标志着海尔贝施泰因城堡从一座阴郁的<strong>中世纪军事堡垒</strong>，正式转型为一座兼具防御功能与居住舒适性的<strong>文艺复兴贵族府邸</strong>。这场火的灰烬中，诞生了如今我们看到的那座融合了哥特式根基与文艺复兴外观的优雅建筑主体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：未被攻破的“铁壁”与家族权力的巅峰</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管经历火劫，城堡的防御能力并未被削弱，反而在历次冲突中证明了其价值。尤其在<strong>17世纪</strong>的动荡中，城堡的坚固成为了家族的定心丸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1619年</strong>，就在大火后不久，当地爆发了农民起义。起义军围攻了包括附近施泰因茨在内的多座城堡，许多贵族堡垒被攻陷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但海尔贝施泰因城堡凭借其天险和加强后的防御，<strong>始终未被攻破</strong>。这不仅是军事上的胜利，更是政治上的巨大资本。它向所有敌人和竞争者宣告：海尔贝施泰因家族在此地的统治，坚如磐石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种稳固，使得家族在<strong>18世纪</strong>迎来了真正的巅峰。他们不仅积累了巨大财富，更获得了神圣罗马帝国皇帝授予的 <strong>“帝国伯爵”</strong> 头衔，成为帝国直属的高级贵族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的不断扩建与装饰——如新增的巴洛克式礼拜堂、藏书丰富的图书馆、收藏家族肖像的画廊——都是这个家族步入最高权力与文化圈层的无声证明。城堡本身，就是一部用石头写就的家族崛起史。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：约翰·约瑟夫·冯·海尔贝施泰因 (1711-1789) - 启蒙时代的伯爵与“开明领主”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>18世纪</strong>这个启蒙思想席卷欧洲的时代，海尔贝施泰因家族出现了一位与时代精神共鸣的人物——<strong>约翰·约瑟夫二世伯爵</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅仅是世袭的统治者，更是一位深受启蒙运动影响的“开明专制”领主。他的治理理念，罕见地将家族利益与领地民众的福祉结合起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>经济</strong>上，他大力推动农业改良，引进新的作物和耕作技术，试图提高领地的生产力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>司法与行政</strong>上，他简化繁琐的程序，并试图建立更公正、高效的体系，这在其时代是极为进步的思想。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在一封写给友人的信中透露了自己的抱负：“真正的贵族荣耀，不在于压榨，而在于引领。让我的领地成为理性与繁荣的试验田。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最大的个人热情在于<strong>科学与文化</strong>。他将城堡的图书馆扩建成一个知识中心，收集了大量关于自然科学、哲学、历史和法律的书籍。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他甚至资助学者，并与当时欧洲的知识分子通信往来，使偏居峡谷的海尔贝施泰因城堡，意外地成为启蒙思想网络中的一个微小但活跃的节点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的统治，为这座古老的军事城堡注入了一丝“理性时代”的光芒。他留下的庞大藏书和档案，至今仍是研究18世纪奥地利地方贵族文化与启蒙思想传播的宝贵资料。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：约翰·冯·海尔贝施泰因 (1866-1934) - 从贵族到动物园创始人的跨界传奇</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间跳到<strong>19世纪末</strong>，海尔贝施泰因家族的又一位成员，为城堡书写了全新、甚至有些奇幻的篇章——他将这里变成了一个<strong>世界闻名的动物园</strong>的摇篮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位<strong>约翰伯爵</strong>（通常被称为“动物学约翰”）是一位典型的绅士自然学家。他对探索世界和收集奇珍异兽有着无尽的热情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1899年</strong>，一次前往非洲的探险后，他将一批活的异国动物（包括斑马、羚羊等）带回了海尔贝施泰因。最初，这些动物只是他个人兴趣的收藏，饲养在城堡庭院和附近的牧场里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，随着收藏不断扩大，一个划时代的想法诞生了：为何不将家族古老的猎苑和土地，向公众开放，建立一个独特的、与自然景观融为一体的动物园？" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据家族回忆录记载，他曾说：“这些生灵与我们的古老岩石一样，都是这个世界的神奇造物。城堡守护历史，而它们，应展示造物的鲜活。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>20世纪初</strong>，他系统地规划了动物园。他的理念远超当时常见的“笼养”模式，而是尽可能为动物创造接近原生环境的、开阔的放养场地，巧妙利用城堡所在的峡谷、森林与草场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1928年</strong>，海尔贝施泰因动物园正式对公众开放，这很可能是<strong>奥地利历史上第一个大型现代野生动物园</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约翰伯爵的远见卓识，彻底改变了城堡的属性。它从一个展示人类权力与历史的场所，转变为一个<strong>对话自然、展示生物多样性的圣地</strong>。这个决定，让海尔贝施泰因家族在20世纪找到了全新的、可持续发展的存在意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，这个动物园已是欧洲最受尊敬的野生动物园之一，参与众多国际保护项目。这一切，都始于一位贵族伯爵跨越时代与物种的浪漫情怀。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在劳弗峡谷的云雾与城堡的阴影中，除了记载于史册的故事，还流传着一些更为缥缈的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的，是关于 <strong>“城堡下的宝藏与幽灵骑士”</strong> 的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在很久以前，一位海尔贝施泰因家族的骑士，在前往圣地的远征前，将自己毕生积累的巨额财宝——包括来自东方的金币、珠宝和圣物——秘密藏匿在城堡地下最深处的一条密道或天然岩洞中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，骑士在远征中战死，宝藏的秘密也随之被埋葬。传说他的灵魂无法安息，化身为一个<strong>透明的骑士幽灵</strong>，每逢月圆之夜或暴风雨来临前夕，便会出现在城堡最高的塔楼或通往地下室的阶梯上，无声地徘徊，守护着那份无人知晓的家族遗产。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老一代的当地人会压低声音讲述：“如果你在午夜听见铠甲轻微的摩擦声，却又看不到任何人，不要害怕。那是古老的守护者，在他的职责得到履行之前，他不会打扰生者，也不会离去。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡的<strong>坚固</strong>有关。人们说，城堡之所以能历经数百年战火而不倒，是因为在奠基时，建造者向岩石中的精灵献上了祭品，并得到祝福：<strong>“只要劳弗溪水不断流，此岩上的石堡便永不倾颓。”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论关乎财富、忠诚还是神秘力量，都为这座坚硬的石头城堡增添了一层柔软的、属于民间想象的面纱。它们让历史不再是冰冷的纪年，而是变成了峡谷风中可被聆听的低语。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你站在劳弗峡谷边缘，眺望那座融合了哥特式、文艺复兴与巴洛克风格的古堡，耳边或许会同时响起铁甲骑兵的马蹄声与远方狮虎的低吼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这便是海尔贝施泰因独一无二的历史回响。它不再仅仅是一座<strong>城堡</strong>，也不仅仅是一个<strong>动物园</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一个鲜活的<strong>历史-自然共生体</strong>。古老的石墙诉说着家族权力的坚韧与转型，而漫步其间的珍稀动物，则延续着几个世纪后家族成员对世界的好奇与关怀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从<strong>13世纪</strong>的军事要塞，到<strong>17世纪</strong>的贵族府邸，再到<strong>20世纪</strong>的自然保护先驱，海尔贝施泰因的故事，是一部欧洲地方贵族如何适应时代巨变、不断重新定义自身价值的微观史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它告诉我们，真正的传承，不仅是守住祖产，更是为古老的空间注入符合新时代精神的生命力。在这里，你能读到一部石头写成的家族史，也能见证一个关于探索与保护的自然寓言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这便是小众目的地的深度所在——它提供的不只是风景，更是一个可以沉浸其中、细细品读的完整世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bregenz-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布雷根茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bregenz Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schloss-eggenberg-graz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃根贝格城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schloss Eggenberg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/innsbruck-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    因
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">因斯布鲁克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Innsbruck Old Town</p>
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
