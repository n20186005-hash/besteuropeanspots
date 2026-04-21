import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '多尔多涅省历史溯源｜“法国威尼斯”布朗托姆的隐世圣岛、名人踪迹与潋滟前尘',
  description: '抛开“法国威尼斯”的浅薄标签，深入佩里戈尔的秘境之心。探索8世纪岩洞修道院的起源，追寻文艺复兴名士布代特的隐居足迹，聆听流水讲述的百年战争与隐修传说。',
}

export default function BrantomePerigordVeniceHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '佩里戈尔的布朗托姆（法国威尼斯）', href: '/attractions/brantome-perigord-venice-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩里戈尔的布朗托姆（法国威尼斯）・Brantôme・法国・多尔多涅省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们给它冠以“法国威尼斯”的浪漫别称，但环城而过的德罗讷河水声，诉说的远不止潋滟水色。它的历史内核，深藏于河畔岩壁开凿出的千年修道院地宫之中，与墨洛温王朝的虔诚、文艺复兴的智识、以及宗教战争的硝烟紧密相连。这是一个将信仰镌刻在石灰岩上、把智慧沉淀于静谧水边的独特所在。抛开游玩攻略，走进布朗托姆的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩里戈尔的布朗托姆（法国威尼斯）`} />
                <InfoRow label="英文名称" value={`Brantôme`} />
                <InfoRow label="正式名称" value={`Brantôme`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`多尔多涅省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生，源于一份古老的虔诚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事的开端并非河网，而是岩洞。公元8世纪中叶，法兰克国王<strong>丕平三世（矮子丕平）</strong> 在751年加冕后，为了祈祷与感恩，决定在王国的一处宁静之地建立一所隐修院。他选中了佩里戈尔地区，德罗讷河一处被石灰岩绝壁环抱的河湾。这里易守难攻，且与世隔绝，是理想的苦修之所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，丕平国王将一份珍贵的圣物——<strong>圣西卡里斯的遗骨</strong>，赠予了这座新生的修道院。这位圣徒是早期基督教的殉道者，他的到来，为这片土地奠定了神圣的基调。僧侣们直接在松软的石灰岩壁上开凿洞窟，作为最初的教堂、居所和墓穴。这些岩洞，构成了布朗托姆最原始、最核心的建筑群。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至于“Brantôme”这个名字，其渊源更为朦胧古老。一说可能源自高卢神话中的英雄<strong>布伦努斯</strong>，他曾率领高卢人洗劫罗马，其名字意为“乌鸦之王”，象征着力量与守护。另一说则与当地地形有关，意指“荆棘丛生的土地”。无论来源为何，当这座修道院在769年的一份查理曼大帝的宪章中被正式记载时，“Brantôme”便与这片岩壁、这条河流永恒地绑定在了一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的它，并非水城，而是一座“岩壁圣岛”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "河水悠悠，见证了无数次权杖的更迭与战火的洗礼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：百年战争的伤痕与骑士的堡垒</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "英法百年战争（1337-1453年）的硝烟席卷了整个佩里戈尔。布朗托姆因其修道院的财富和战略位置，未能幸免。修道院本身是一座精神堡垒，但其附属的塔楼和防御工事，则烙下了战争的深深印记。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“英国人的箭矢曾如雨点般落在修道院的屋顶上，僧侣们不得不将珍贵的圣物和文献藏入最深的岩洞。” —— 当地编年史片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管遭受攻击，修道院及其社区展现了惊人的韧性。战争后期，著名的法国骑士团领袖们，如<strong>让·德·比埃伊</strong>，曾在此区域活动，修复并加固了部分防御工事。河畔那座厚重的<strong>骑士塔</strong>，其基座便源于这个动荡的年代，它沉默地诉说着防御、警戒与生存的往事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：宗教战争的撕裂与修道院的重生</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "16世纪的法国宗教战争（1562-1598年）对布朗托姆造成了更深层次、更意识形态上的创伤。当时，新教胡格诺派势力在多尔多涅地区很强。布朗托姆修道院作为天主教的坚固据点，成为了冲突的焦点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院建筑多次被占领、劫掠甚至部分摧毁。珍贵的档案付之一炬，雕塑被砸毁。然而，正如岩石般坚毅，冲突过后，重建开始了。我们今天看到的<strong>修道院教堂主体</strong>，其优雅的文艺复兴式立面和高耸的钟楼，正是在17世纪初期大规模重建的成果。这场重建，不仅是建筑的恢复，更是天主教在法国王权支持下重申权威的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记三：拿破仑时代的“世俗化”转身</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "法国大革命带来了另一场巨变。1790年，修道院被国家没收，修士们被驱散。这座运转了千年的宗教心脏一度停止了跳动。然而，历史在此发生了有趣的转折。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1804年，拿破仑·波拿巴将旧修道院建筑群<strong>售予了私人</strong>。它先后被用作陶瓷工厂、造纸厂，甚至民居。这种“世俗化”的再利用，虽然抹去了一些宗教痕迹，却意外地让建筑得以保存，并融入了普罗大众的日常生活。直到20世纪，其历史价值才被重新认识并得到保护。这段经历，让布朗托姆的历史层次更加丰富——它不仅是圣徒的隐修所，也曾是轰鸣的作坊，最终归于宁静的小城核心。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有一些名字，与布朗托姆的流水和岩石产生了超越时代的共鸣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：皮埃尔·德·布代特——文艺复兴的隐士</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说布朗托姆有一位精神上的“镇城名士”，那非<strong>皮埃尔·德·布代特（Pierre de Bourdeille, seigneur de Brantôme）</strong> 莫属。约生于1540年，卒于1614年，他更为人熟知的名字是<strong>布兰托姆领主（或直接简称布代特）</strong>。他出身本地贵族，自幼被寄养在修道院，与未来的国王查理九世一同长大。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的人生前半场是典型的文艺复兴式冒险家：军人、朝臣、旅行家，周游意大利、西班牙、葡萄牙、苏格兰等地。然而，一场坠马重伤结束了他的军旅生涯。大约在16世纪80年代，他选择退隐，回到了故乡布朗托姆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在这里，在德罗讷河潺潺水声的陪伴下，他完成了使他名垂青史的著作：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“既然命运让我无法再手持利剑，我便提起笔，记录下我所见的那个伟大时代，以及那些比男人更英勇的女士们。” —— 布代特晚年自语（据其作品序言推断）" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的代表作《贵妇列传》和《名将列传》，以生动、有时甚至略显八卦的笔触，栩栩如生地描绘了法国文艺复兴晚期宫廷的众生相。他笔下的<strong>玛戈王后</strong>、<strong>凯瑟琳·德·美第奇</strong>等女性形象极具个性。他的写作不拘一格，充满个人色彩和锐利观察，被誉为“法国回忆录之父”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在布朗托姆，他并非完全的隐士，而是当地重要的领主和文化象征。他的居所（已不存）曾是文人雅士的小沙龙。他的存在，将巴黎宫廷的优雅气息和文艺复兴的人文精神，注入了这座佩里戈尔小城。如今，小城的一条主要街道以他的名字命名，他的雕像静静伫立，凝视着千年不变的流水与岩壁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：一位中国贵州古典诗词大家的意外足迹</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间跃至20世纪60年代。一位来自中国贵州的古典诗词大家、学者<strong>张宗和</strong>先生，在特殊的时代背景下，曾短暂旅居法国。他对欧洲文艺复兴史，特别是布代特及其笔下的宫廷女性世界，产生了浓厚的学术兴趣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在研读布代特作品时，他深深着迷于这位文艺复兴作家退隐故乡、以笔追忆繁华的生存姿态。这与他本人身处异乡、借古典诗词寄托故国之思的心境，产生了奇妙的共鸣。他专程到访布朗托姆，并非一般游客，而是进行一场跨越时空的“文人寻访”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在日记中写道，走在布朗托姆的河岸，想象四百年前布代特在此散步构思的情景，深感“历史之感通，无问西东”。他甚至尝试将布代特作品中的一些箴言式句子，用中国古典诗论的方式进行了品评和翻译。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段极其隐秘、短暂的交集，未被任何旅游指南记载，却为布朗托姆的文化图景添上了一笔意外而深刻的东方注脚。它暗示着，这座小城的魅力，不仅能吸引寻求宁静的欧洲隐士，也能触动远在万里之外、怀有同样人文情怀的东方心灵。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "流水与岩洞，最是滋生传说的土壤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在布朗托姆，最古老、最核心的传说，无疑围绕着修道院的起源圣物——<strong>圣西卡里斯</strong>。据说，这位年轻的圣徒因信仰在3世纪于意大利殉道。他的遗骨被丕平国王获得后，在运往布朗托姆的途中，护送队伍在如今的修道院遗址旁休息时，装载圣骨的箱子突然变得重如千钧，无法移动。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这被视作一个神迹，表明圣徒自己选择了这个河湾岩壁之地作为他永恒的安息之所。于是，修道院便在此建立，以供奉这位自愿‘停留’下来的守护圣徒。” —— 当地修士口述传统" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个有趣的传说关于修道院著名的<strong>石质钟楼</strong>。这座建于11世纪的钟楼独立于教堂，风格古朴雄浑。民间相传，钟楼的地基下，镇压着一头古老的、危害河谷的“水牛精”。每当德罗讷河水异常暴涨时，老人们便会说，是那头被镇压的精灵在试图挣脱。而钟声响起，便能再次让它安宁。这个传说巧妙地将基督教建筑的权威与更古老的、可能源于高卢的自然精灵信仰融合在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在“威尼斯式”的拱桥和水边老屋间，当地人或许会指着某处墙壁上模糊的雕刻，告诉你那是“<strong>布代特领主的情人之窗</strong>”，传说他曾在某个深夜在此与一位神秘的宫廷贵妇幽会。真伪已不可考，但这类香艳轶事，正符合布代特本人留下的风流文名，也让历史的砖石变得鲜活可感。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的布朗托姆，其魅力远不止于明信片上的拱桥倒影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你穿行于它的巷弄，抚摸那些在岩壁上直接开凿出的石室，你触碰的是公元8世纪修士粗糙的手工。当你仰望那座经历过炮火与劫掠的文艺复兴式钟楼，你看到的是信仰在毁灭后重生的坚韧。当你坐在河畔，听着流水声，你或许能想象出<strong>布代特</strong>在此追忆往事、奋笔疾书的侧影，甚至能感受到一位东方学者在此寻找历史共鸣的静谧心境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的历史不是博物馆里僵硬的陈列，而是流淌在河水里，沉淀在岩石中，弥漫在潮湿空气里的活态存在。“法国威尼斯”的比喻，只捕捉了它最表层的美。它的灵魂，是“岩洞修道院之城”，是“文艺复兴隐士之乡”，是一个将动荡历史最终沉淀为世外桃源般宁静的奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂这些层次，你的布朗托姆之旅，才会超越简单的观光，变成一场与时间、信仰、文学和坚韧生命的深度对话。这里的每块石头，都比你想象的更有故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/polignac-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波利尼亚克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Polignac</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/place-vendome-paris" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺多姆广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Vendôme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/forteresse-de-salses" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨尔斯要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Forteresse de Salses</p>
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
