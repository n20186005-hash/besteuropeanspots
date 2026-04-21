import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布劳恩费尔斯城堡历史溯源｜黑森童话的八百年家族史诗与骑士精神回响',
  description: '穿越八百年时光，探秘德国黑森州鲜为人知的“活城堡”。并非迪士尼幻影，而是一部由施托尔贝格家族书写的、仍在续写的石质史诗。了解骑士、战争与浪漫主义背后的真实童话。',
}

export default function BraunfelsCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '布劳恩费尔斯城堡', href: '/attractions/braunfels-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布劳恩费尔斯城堡・Braunfels Castle・德国・黑森州，布劳恩费尔斯镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在德国黑森州起伏的丘陵间，布劳恩费尔斯城堡宛如从童话绘本中直接剪下，贴在了现实的天际线上。然而，它的第一重神秘面纱正是：它并非凭空而起的童话布景。这座拥有童话般尖塔与山墙的城堡，最惊人的标签是——它是一座“活着的”家族城堡。自13世纪初奠基以来，<strong>施托尔贝格家族</strong>便在此生息、统治、建设、守护，从未断绝。城堡的每一块岩石，都浸透着同一个家族的汗水、荣耀与抉择。抛开游玩攻略，走进布劳恩费尔斯的尘封往事，遇见一部仍在呼吸的家族编年史与属于它的骑士传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布劳恩费尔斯城堡`} />
                <InfoRow label="英文名称" value={`Braunfels Castle`} />
                <InfoRow label="正式名称" value={`Braunfels Castle`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`黑森州，布劳恩费尔斯镇`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布劳恩费尔斯的故事，始于一片名为“棕色岩石”的山崖。它的名字 <strong>Braunfels</strong>，在德语中直译为“棕色的岩层”，直接点明了其赖以立足的地质基础。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间回到<strong>13世纪初</strong>，具体约在<strong>1246年</strong>左右。当时，神圣罗马帝国境内诸侯林立，贵族家族通过修建城堡来宣示领地、控制交通要道、并作为军事权力的支点。<strong>施托尔贝格家族</strong>的祖先，正是这片土地上的领主。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们选中了拉恩河谷旁这座突出的玄武岩山脊。这里地势险要，易守难攻，裸露的深色岩石（即“棕色岩石”）提供了天然的防御与地基。最初建立的，并非今天我们看到的浪漫主义宫殿，而是一个坚固的、功能性的<strong>军事据点</strong>，核心是坚固的<strong>主楼</strong>和防御城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的建立，标志着一个统治中心的诞生。渐渐地，在山脚下的缓坡上，吸引了工匠、农民和商人聚居，形成了服务于城堡的集镇。这座小镇也因此得名“布劳恩费尔斯”，其命运从此与山顶的城堡牢牢绑定。它不是一座为国王修建的宏伟行宫，而是一个地方贵族家族权力与生存的根本，这种“原生”与“持续”的特性，为其八百年的传奇奠定了基调。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的八百年并非平静的史诗，而是多次在毁灭边缘挣扎重生，其轮廓被两次巨大的历史浪潮深刻重塑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一次是<strong>三十年战争（1618-1648）</strong>的烽火。这场席卷欧洲的宗教与权力混战，将这座城堡卷入了漩涡。作为新教贵族，施托尔贝格家族站在了瑞典一方。然而，命运并未眷顾。<strong>1641年</strong>，效忠于神圣罗马帝国皇帝的军队包围并猛烈炮击布劳恩费尔斯城堡。坚固的城墙在近代火炮面前显得脆弱，城堡遭受了严重破坏。这段创伤记忆深深刻在了石头上，也刻在了家族基因里，提醒着后人权力的脆弱。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“城堡在猛烈的炮火下颤抖，塔楼倒塌，墙壁开裂。但我们家族的精神，如同地下的岩层，并未被击碎。”——后世家族编年史中的记述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战火平息后，家族开始了漫长的修复。但真正让城堡脱胎换骨的，是19世纪的<strong>浪漫主义与历史主义</strong>风潮。当时的城堡主人，<strong>格奥尔格伯爵</strong>，深受这股复兴中世纪精神、追求童话般景致潮流的影响。他觉得祖传的、经过多次修补的防御堡垒过于沉重和“过时”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，从<strong>19世纪30年代起</strong>，一场规模浩大、持续数十年的“童话化”改造工程启动了。建筑师们并未推倒重来，而是在旧有结构的“画布”上，增添了无数浪漫的笔触：他们增建了那些直指苍穹的<strong>尖顶塔楼</strong>，修饰了充满幻想的<strong>山墙和凸窗</strong>，用砂石赋予了外墙童话般的色泽。这次改造，本质上是一次深情的“历史再想象”，将一座防御工事，艺术性地升华为了人们如今看到的、浪漫主义的标志性形象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，命运再次考验。<strong>1863年</strong>，一场灾难性的大火席卷了城堡内部，无数珍贵的家族收藏和历史房间化为灰烬。但施托尔贝格家族再次展现了惊人的韧性。火灾后，他们立即着手重建，并且这次重建融合了当时最新的舒适性设计，同时小心翼翼地保留了中世纪和浪漫主义的外壳。这次“浴火重生”，让城堡的内部功能得以现代化，使其真正成为一座适于居住的、兼具博物馆功能的现代宅邸，而非一座冰冷的古迹。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布劳恩费尔斯城堡的灵魂，是由历代家族成员塑造的。其中两位人物，尤为关键地定义了城堡的今天。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位是<strong>卡尔伯爵（1840-1905）</strong>。他并非以开疆拓土闻名，而是城堡的“灵魂守护者”与“博物馆奠基人”。继承爵位时，他面对的是火灾后亟待修复的家园。卡尔伯爵是一位具有远见和深厚历史感的人。他主导了火灾后的科学重建与修复，更重要的是，他开启了一项宏伟的计划：将家族八百年积累的宝藏系统化地收藏、整理并向公众展示。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他游历欧洲，有意识地收购武器、盔甲、艺术品和历史文献，不是为了炫耀财富，而是为了构建一部“可视化的家族与地区史”。在他的努力下，城堡内建立了令人惊叹的<strong>武器库</strong>，收藏了超过1000套从中世纪到近代的盔甲和武器，其规模和质量在德国私人收藏中首屈一指。他还建立了丰富的画廊和古董室。正是卡尔伯爵，将城堡从纯粹的私人住宅，转变为一座承载着厚重历史的、活的家族博物馆。他的日常穿着也极具标志性——常常一身简单的灰色外套，与城堡中金光闪闪的盔甲形成鲜明对比，仿佛在说：他只是历史的谦卑管家。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这些物品并非我的财产，它们是时间的信使，是祖先留给未来的遗嘱。我的职责是保护它们，并将它们的故事传递下去。”——据信为卡尔伯爵的收藏理念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位关键人物，是他的孙子——<strong>奥古斯特伯爵（1893-1972）</strong>。他的一生，是20世纪德国动荡历史的缩影，充满了艺术家的敏感与战争年代的悲剧。年轻的奥古斯特热爱艺术，是一位颇有天赋的画家和诗人，梦想在宁静的城堡中追求创作。然而，两次世界大战击碎了他的艺术之梦。作为贵族和军官，他被迫卷入<strong>第一次世界大战</strong>，并在战场上被俘。这段经历给他留下了深深的心灵创伤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战后，他试图回归艺术与城堡管理。但<strong>第二次世界大战</strong>的阴影再次笼罩。纳粹政权对传统贵族阶层态度复杂，既想利用其声望，又试图削弱其独立性。奥古斯特伯爵面临着巨大的政治压力和道德困境。战争后期，城堡奇迹般地未遭战火严重破坏，但它不得不容纳难民，其地窖曾作为附近居民躲避空袭的避难所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战后，在德国重建的艰难岁月里，奥古斯特伯爵肩负起修复城堡和管理家族事务的重任。他晚年致力于整理家族档案，用文字和绘画记录即将消逝的传统世界。他的一生，是古老贵族价值在工业化和战争时代碰撞、挣扎与坚守的写照。他的艺术气质与战争创伤，为这座浪漫城堡的现代叙事，增添了一层深刻而忧郁的维度。他的故事提醒着游客，在这童话般的外观之下，是真实的人，承受着真实的历史之重。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如同所有古老的城堡，布劳恩费尔斯也萦绕着不散的传说，为坚硬的石头增添了一丝柔软的灵性。其中最著名的，是关于“<strong>绿衣女士</strong>”的幽灵故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在很久以前，城堡里住着一位年轻美丽的女伯爵。她爱上了一位地位悬殊的平民骑士。这段恋情为家族礼法所不容，被严厉禁止。然而，爱情的火花无法轻易熄灭。两人决定私奔。在一个月色朦胧的夜晚，女伯爵穿着一身绿色的华服，悄悄溜出房间，前往与恋人约定的地点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但命运弄人，或许是计划泄露，或许是不幸的意外，私奔失败了。绝望的女伯爵没有回到她的牢笼，而是从城堡的高处纵身跃下，香消玉殒。自那以后，城堡的居民和访客间便流传：在深夜的走廊，或在月光照耀的塔楼窗口，会瞥见一位身着绿裙的哀伤女子身影悄然飘过。她并不吓人，只是静静地徘徊，仿佛仍在等待那个未赴的约会，或是守护着她永远无法离开的家园。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老向导常低声讲述：“如果你在黄昏时分，独自走在东翼的‘叹息走廊’，或许能闻到一丝淡淡的、古老的香水味，那是‘绿衣女士’经过的痕迹。她是我们城堡记忆的一部分，是爱情被石刻历史所禁锢的永恒回音。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说与其他欧洲城堡的“白衣女士”故事类似，但它深深植根于布劳恩费尔斯特定的空间（如传说中的东翼走廊），并与贵族家族对婚姻、荣誉与个人情感的古老冲突主题相连。它让参观者在欣赏宏伟厅堂时，不禁去想，在那些厚重的墙壁背后，曾发生过多少不为人知的悲欢离合。传说，让历史有了温度，也让建筑有了人性。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "游览布劳恩费尔斯城堡，最终极的体验并非仅仅是拍摄一张明信片式的风景照。它的核心价值在于，你能亲手触摸一部<strong>仍在书写的编年史</strong>。这里没有将历史封存于玻璃柜后的疏离感。你脚下的石板，可能被三十代家族成员踏过；你看到的盔甲，曾真实地参与过改变欧洲的战争；你漫步的浪漫庭院，承载着一位伯爵的艺术梦想与战争创伤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一部关于<strong>延续</strong>的史诗。在分合合、王朝更迭频繁的欧洲，一个家族能在一个地方持续存在、建设、守护超过八百年，本身就是人文历史的奇迹。它展现了贵族阶层作为文化传承者、地方管理者在历史中的另一种角色。城堡的每一个演变阶段——从中世纪堡垒到浪漫主义象征，再到现代博物馆式宅邸——都精准反射了欧洲社会思潮与历史处境的变迁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，童话景象有了坚实的基石，浪漫幻想有了历史的重量。它不是迪士尼的虚构，而是一个家族用石头、意志与时间，在历史长河中建造出的、无比真实的“童话”。当你离开时，带走的不仅是对建筑之美的赞叹，更是对“传承”、“韧性”与“历史即生活”的深刻体悟。这是一座让你读懂时间厚度的活态丰碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/drosselgasse-rudesheim" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吕德斯海姆画眉鸟巷</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Drosselgasse</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lindau-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林道老城区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindau Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stolzenfels-castle-koblenz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施托尔岑费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stolzenfels Castle</p>
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
