import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱德尼采-瓦尔季采文化景观历史溯源｜欧洲最大人造景观的前世今生与贵族权力游戏',
  description: '这不是自然公园，而是一部用200平方公里土地写就的贵族史诗。揭开列支敦士登家族700年的园林野心，看他们如何将边境荒野打造成权力的完美剧场。',
}

export default function LedniceValticeCulturalLandscapeHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '南摩拉维亚州', href: '/destinations/europe' },
            { label: '莱德尼采-瓦尔季采文化景观', href: '/attractions/lednice-valtice-cultural-landscape-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱德尼采-瓦尔季采文化景观・Lednice–Valtice Cultural Landscape・捷克・南摩拉维亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在捷克与奥地利交界的柔软边境上，一片近200平方公里的土地并非大自然的鬼斧神工，而是一个家族持续七个世纪的野心总集。这里被称作“欧洲的花园”，但其本质远非园艺如此简单。它是列支敦士登家族用土地、建筑与景观语言，精心排演的一出关于权力、审美与永恒的王权戏剧。抛开游玩攻略，走进莱德尼采-瓦尔季采的尘封往事，遇见属于它的野心与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱德尼采-瓦尔季采文化景观`} />
                <InfoRow label="英文名称" value={`Lednice–Valtice Cultural Landscape`} />
                <InfoRow label="正式名称" value={`Lednice–Valtice Cultural Landscape`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南摩拉维亚州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片景观并非一座传统意义上的“城市”，它的起源与防御和领地宣告紧密相连。<strong>莱德尼采（Lednice）</strong> 与 <strong>瓦尔季采（Valtice）</strong> 最初是中世纪的两座要塞，矗立在摩拉维亚南部边境，监视着通往奥地利的重要通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>12世纪</strong>左右，它们首次出现在文献中。其名字本身便带有功能性：<strong>Lednice</strong>可能源于斯拉夫语“lednica”（冰冷的小河），指代其周围的湿地与水道；<strong>Valtice</strong>则可能来自一个古老的人名“Valta”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在 <strong>13世纪末</strong>。当时，来自下奥地利的 <strong>列支敦士登家族</strong> 开始通过精明的政治联姻与忠诚服务，从神圣罗马帝国皇帝手中获取这片土地。这不是一次简单的置业，而是一个战略性布局。家族将这里视为其在摩拉维亚的权力基石，一个远离维也纳宫廷，却能展示其独立性与财富的“国中之国”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，这片文化景观的“诞生”，并非某个具体的建城年份，而是一个漫长过程的起点：一个雄心勃勃的家族，将两座边境堡垒，以及其间广袤的森林、池塘与田野，全部纳入一个统一的、服务于家族荣耀的视觉规划之中。它的名字“文化景观”，恰如其分——这里的每一寸土地，都是被文化意志彻底改造过的作品。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片景观的演进，就是列支敦士登家族权力美学的编年史。数个核心历史时期，为其刻下了无法磨灭的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一个关键时期是文艺复兴与巴洛克时代。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>17世纪</strong>，尤其是在 <strong>卡尔·欧塞比乌斯·冯·列支敦士登</strong> 亲王的主导下，家族的梦想开始大规模落地。他们聘请了当时顶尖的意大利与奥地利建筑师，如 <strong>多梅尼科·马丁内利</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的防御城堡被彻底改造为奢华的宫殿。但更宏大的工程在于 <strong>景观的整体塑造</strong>。他们疏通河道，挖掘大型池塘，修建笔直的道路与星形放射的猎苑。这不仅仅是美化环境，而是用巴洛克的几何学语言，宣告人类理性（尤其是亲王意志）对自然的绝对统治。每一道视线、每一条轴线，都指向宫殿——权力的中心。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在这片土地上，自然必须学会遵守秩序，如同臣民服从君主。” —— 后世学者对列支敦士登家族景观哲学的解读。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二个深刻印记来自19世纪的浪漫主义浪潮。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时在位的 <strong>约翰一世·约瑟夫亲王</strong> 深受英式风景园林的影响。家族的野心随之“进化”。他们不再满足于巴洛克的绝对控制，转而追求一种“如画”的、充满诗意的自然。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在两大宫殿之间广阔的田野与森林里，一系列精美的 <strong>小型建筑</strong> 如珍珠般被散落布置起来：新哥特式的狩望楼、古典主义的祠堂、仿罗马式的水榭……它们被称为“萨拉曼”（salety）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些建筑没有实际居住功能，纯粹是为了“点缀风景”，创造漫步时的惊喜与哲学沉思。<strong>莱德尼采城堡</strong>也在此时被改建成令人惊叹的 <strong>新哥特式童话宫殿</strong>，宛如一场盛大的舞台布景。这个时期，家族的权力展示变得更加含蓄而高雅，通过文化的品味而非赤裸的威慑来表达。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三个印记，则是20世纪剧烈的政治变迁。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1918年</strong>，捷克斯洛伐克共和国成立，作为哈布斯堡王朝坚定支持者的列支敦士登家族，其庞大地产被新兴国家根据 <strong>土地改革法</strong> 没收。持续七百年的家族工程戛然而止。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1945年后</strong>，宫殿与园林被收归国有，一度面临荒废。讽刺的是，正是其“非实用性”的浪漫特质，使其在共产主义时期未被大规模工业化破坏，得以幸存。直到 <strong>1996年</strong>，它被联合国教科文组织列为世界遗产，其作为“人类创造性天才杰作”的价值才获得全球性确认，历史完成了它意想不到的轮回。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片景观的灵魂人物，无疑是 <strong>列支敦士登家族</strong> 的历代亲王。他们既是赞助人，也是总设计师。让我们聚焦两位将个人印记深深刻入土地的亲王。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位是卡尔·欧塞比乌斯·冯·列支敦士登（Karl Eusebius, 1611-1684）。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他继位时，家族因三十年战争而财力窘迫，领地也饱受摧残。但他却是一位具有远见卓识的“建设者”。他不仅重建财富，更撰写了一部 <strong>《建筑论》</strong> ，系统阐述了家族的营造哲学。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他主张建筑应追求“宏伟、坚固与愉悦”，并且必须与周围环境和谐统一。正是在他的蓝图之下，瓦尔季采才从一座堡垒转变为一座宏伟的巴洛克式宫殿与行政中心。他开启了将整个领地视为一件整体艺术品的宏大构想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的统治奠定了一个基调：列支敦士登的亲王，必须是艺术的庇护神与土地的诗人。他的遗产不是一座孤立的宫殿，而是一套将持续影响家族两百年的空间治理理念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>另一位关键人物是阿洛伊斯一世·冯·列支敦士登（Aloys I, 1759-1805），以及他的儿子兼继任者约翰一世·约瑟夫（Johann I Joseph, 1760-1836）。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "父子二人共同主导了景观从巴洛克向浪漫主义的惊人蜕变。阿洛伊斯一世是一位热爱自然科学与启蒙思想的开明统治者。他大幅扩建了莱德尼采的 <strong>温室</strong> ，引进了大量异域植物，包括最早的菠萝种植设施之一。他将园林视为知识与进步的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而 <strong>约翰一世·约瑟夫</strong> 亲王，则是浪漫主义景观的最终实现者。他本人是一位功勋卓著的元帅，经历过拿破仑战争的宏大与动荡。或许正是对现实政治复杂性的厌倦，促使他将全部热情倾注于建造一个理想化的、宁静的诗意世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他聘请了顶尖的景观建筑师 <strong>伯恩哈德·佩特里</strong> 等人，全面推行英式园林改造。他亲自参与选址和设计那些风景如画的小建筑。在他统治下，这片土地变成了一个可游、可居、可思的庞大“理想国”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在那些林间小径漫步，在祠堂前驻足，我感受到的并非帝国的荣耀，而是一种近乎哲学的宁静。这里是我的避世所，也是我留给后世的一首无声的诗。” —— 约翰一世·约瑟夫亲王在信件中流露的情感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "家族与这片土地的羁绊，还通过一位“外来者”得到强化——<strong>哈布斯堡王朝的皇帝们</strong>。作为帝国的亲密诸侯，列支敦士登家族常在此招待皇室成员。最著名的一次是 <strong>约瑟夫二世皇帝</strong> 的到访。为了这次访问，家族专门修建了从瓦尔季采通往边境的华丽大道，并在沿线设置方尖碑等纪念物，极尽尊崇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些交往不仅提升了家族地位，也使得这片景观成为帝国政治文化的一个微观缩影，一个上演忠诚与友谊戏剧的私人剧场。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这片被精心设计过的土地上，民间传说并未消失，反而与贵族叙事奇特地交织在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说是关于 <strong>“穆罕默德之井”（Muhammad's Well）</strong> 的。这其实是一个新摩尔式风格的水塔，建于19世纪。但民间很快为它编织了故事。传说一位来自东方的 <strong>穆罕默德王子</strong> 在旅行中路过此地，与一位列支敦士登的公主坠入爱河。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但因信仰与身份无法结合，悲痛的王子在离开前，下令挖掘了这口深井，以清凉的泉水象征他永恒不渝的爱。这显然是一个浪漫主义的杜撰，却巧妙地将异域风情的建筑与永恒的爱情主题结合，反映了当时社会对东方文化的浪漫想象，也为冷冰冰的建筑注入了人性温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说围绕着 <strong>“三 grace神庙”</strong> 。这座古典主义小庙供奉着三位希腊女神雕像。民间私下流传，这三位女神实际上隐喻着某位亲王生命中的三位重要女性：他的母亲、妻子和女儿。女神手中的器物被解读为家庭、爱与智慧的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说虽然缺乏史料证实，却展现了百姓试图用自己熟悉的情感逻辑，去理解贵族那些高深莫测的“艺术表达”，在宏大的景观叙事中，加入了亲切的家庭伦理注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，在广阔的林地中，关于 <strong>“迷宫”</strong> 的故事也代代相传。并非所有小径都出现在官方地图上。据说，家族曾设置一些隐秘的路径和聚会点，用于私密会晤或狩猎活动。这些地方后来成为护林人和当地人口中“精灵出没”或“藏着秘密宝藏”的地方。这些传说，为高度人工化的环境，披上了一层神秘的自然面纱。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当我们漫步在莱德尼采-瓦尔季采的林荫道与草坪之间，我们所体验的，远非单纯的视觉之美。我们行走在一部立体的家族自传里，阅读着一章用橡树林写就的权力诗篇，另一章用新月形池塘诉说的浪漫哀歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的每一座“无用”的亭台，都是贵族精神世界的一个坐标；每一条看似随意的视线，都经过精密的政治几何学计算。它告诉我们，景观可以是最高形式的权力修辞，也可以是最深切的心灵寄托。它见证了从绝对主义到浪漫主义的精神变迁，也亲历了从私有帝国到公共遗产的命运转折。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂这片景观，便是读懂欧洲贵族文化一个极其完整而生动的切片。它小众，因为它是一件极度个人化、家族化的宏大作品；它深刻，因为它浓缩了七百年欧洲历史中关于统治、审美与身份的核心命题。这里没有熙攘的游客，只有风穿过柱廊的低语，仍在诉说着一个家族试图通过塑造土地来超越时光的永恒野心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何漫步这条欧洲最浪漫的散步路线、交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bouzov-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博乌佐夫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bouzov Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/karlstejn-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔什特因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlštejn Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pernstejn-castle-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩恩施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pernštejn Castle</p>
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
