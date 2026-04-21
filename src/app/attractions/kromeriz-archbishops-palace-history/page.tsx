import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克罗梅日什历史溯源｜“摩拉维亚的雅典”前世今生，从主教避难所到帝国议政厅的传奇',
  description: '探索被联合国教科文组织珍藏的捷克秘境。揭秘克罗梅日什总主教宫如何从战争废墟中重生，成为艺术圣殿与改变历史的舞台。倾听哈布斯堡王朝的余音。',
}

export default function KromerizArchbishopsPalaceHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '克罗梅日什', href: '/destinations/europe' },
            { label: '克罗梅日什总主教宫', href: '/attractions/kromeriz-archbishops-palace-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克罗梅日什总主教宫・Kroměříž Archbishop’s Palace・捷克・克罗梅日什`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在摩拉维亚富饶的平原上，<strong>克罗梅日什</strong>镇常被匆匆路过。然而，少有人知，这座宁静小城的心脏——<strong>总主教宫</strong>与它的花园，是一枚被时光精心封装的文化琥珀。它并非诞生于王权，而是源于主教们的智慧、审美与一场迫不得已的“逃亡”。这里既是巴洛克艺术的巅峰橱窗，也曾意外成为撼动<strong>哈布斯堡王朝</strong>根基的历史议场。抛开游玩攻略，走进克罗梅日什的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克罗梅日什总主教宫`} />
                <InfoRow label="英文名称" value={`Kroměříž Archbishop’s Palace`} />
                <InfoRow label="正式名称" value={`Kroměříž Archbishop’s Palace`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`克罗梅日什`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克罗梅日什的名字，在斯拉夫古语中与“蜿蜒的河流”或“边境集市”相关。它的崛起，始终与宗教权力紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1260年</strong>，波希米亚国王<strong>奥塔卡二世</strong>将这片土地赠予刚刚成立的<strong>奥洛穆茨主教区</strong>。主教的到来，并非为了建造一座世俗都城，而是为了经营一个远离政治漩涡、能够自给自足且易于防守的庄园与避难所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，它只是一个带有城堡的庄园中心。但历代主教的经营，让它逐渐超越了农业据点的功能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至关重要的转折发生在<strong>1497年</strong>。当时的主教<strong>斯坦尼斯拉斯·图尔佐</strong>成功说服国王，将克罗梅日什提升为“城镇”。这一身份的转变，赋予了它举办市集、发展经济的法律基石，城市雏形由此奠定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正决定其命运与风貌的，是它作为“<strong>副主教座堂所在地</strong>”的独特身份。奥洛穆茨虽是主教座堂所在，但主教们更偏爱将克罗梅日什作为实际的居住和行政中心。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份古老的教会文件曾如此描述其选址：“此地肥沃，河流环绕，易于筑防，于乱世中可保圣座安宁。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种“退居后方”的策略，使得主教们能将大量财富与精力投入这座“后花园”的建设，而非前线的是非之地。一座为宁静、审美与庇护而生的城市，就此埋下了最初的种子。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克罗梅日什的历史并非直线上升的赞歌，而是一曲毁灭与重生交织的史诗。它的身体上镌刻着三枚最深的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一枚印记是 <strong>“毁灭与巴洛克重生”</strong> 。十七世纪的<strong>三十年战争</strong>席卷欧洲，克罗梅日什未能幸免。<strong>1643年</strong>，瑞典军队占领并彻底摧毁了古老的中世纪城堡与大半城镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "浩劫之后，时任奥洛穆茨主教的<strong>卡雷尔·利希滕斯坦-卡斯泰尔科尔恩</strong>做出了一个决定命运的选择：不在废墟上哀悼，而在废墟上创造一个新的时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他聘请了帝国顶尖的建筑师<strong>F. M. 卢凯斯</strong>与<strong>G. P. 滕卡拉</strong>，于<strong>1666年</strong>开始重建。这不是简单的修复，而是一场彻底的巴洛克革新。一座宏伟的、用于彰显教会荣耀与审美品味的宫殿拔地而起，其规模与奢华程度，完全超越了旧日城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二枚印记，是 <strong>“1848年的意外舞台”</strong> 。这一年，欧洲革命风起云涌。维也纳爆发起义，哈布斯堡王朝的<strong>斐迪南一世</strong>皇帝与朝廷仓皇出逃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们选择的避难所，正是远离风暴中心、设施完备且忠诚可靠的克罗梅日什总主教宫。宫殿瞬间变成了帝国的临时首都。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位宫廷侍从在日记中写道：“陛下和整个内阁都挤在主教大人的房间里。花园里布满了岗哨，电报线一直拉到维也纳，这里平静得令人不安，仿佛暴风雨的中心。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更关键的是，旨在解决帝国民族与宪法问题的<strong>奥地利帝国议会</strong>，在此紧急召开。来自各民族的代表在这座巴洛克殿堂里激烈辩论，起草宪法。克罗梅日什，意外成为了奥地利宪政史上第一个（尽管最终流产的）议会所在地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三枚印记，则是 <strong>“二战尾声的浩劫”</strong> 。1945年，撤退的德军焚毁了宫殿主楼，无数艺术珍品毁于一旦。战后的重建工程持续了数十年，堪称又一次“凤凰涅槃”。正是这份历经磨难却始终被精心守护的价值，最终让它在<strong>1998年</strong>荣登<strong>联合国教科文组织</strong>世界遗产名录。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克罗梅日什的魂魄，由两位相隔两百年的关键人物塑造。他们一位是建造者，一位是描绘者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位，是重建之父：卡雷尔·利希滕斯坦-卡斯泰尔科尔恩主教（1664-1695年在位）。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅是这座巴洛克宫殿的缔造者，更是一位具有超前眼光的“文化总监”。在宫殿重建之初，他便系统性地开启了艺术收藏。他深知，伟大的建筑需要伟大的灵魂（艺术品）来填充。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的采购清单遍布欧洲。从意大利采购油画与雕塑，从佛兰德斯订购挂毯，从德国邀请最好的工匠制作家具。他建立的画廊，是当时中欧最卓越的私人收藏之一，核心是<strong>提香</strong>、<strong>委罗内塞</strong>、<strong>丢勒</strong>等大师的杰作。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一幅画作的购买记录显示，主教曾为了一幅心仪的意大利作品，不惜用数桶上好的摩拉维亚葡萄酒进行“物物交换”，其执着与风雅可见一斑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，他对花园的规划。他建造的“花园宫殿”下方的“迷宫花园”，不仅是休闲之地，更是一个融合了建筑、雕塑、水利工程的哲学与艺术综合体，体现了巴洛克时代“驾驭自然”的理想。可以说，没有利希滕斯坦主教的品味与魄力，就没有今天我们所见的克罗梅日什。他将个人的灾难（城堡被毁），变成了留给世界的一份永久礼物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二位，是花园诗人：马克斯·什瓦宾斯基（1873-1962）。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位捷克新艺术运动与象征主义的伟大画家，并非克罗梅日什的过客，而是它灵感的汲取者与馈赠者。他的童年与青年时期在此度过，宫殿花园成为了他终生的艺术缪斯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "花园里光影变幻的树丛、静谧的池塘、古典的柱廊，反复出现在他的油画、版画与素描中。他笔下的花园，不是简单的风景写生，而是充满神秘生命力和音乐感的诗意空间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克罗梅日什也深深铭记着这位儿子。宫殿内收藏了他大量的作品。最动人的联系，在于那座著名的“花园宫殿”中，有一间以他命名的厅室，展示着他以花园为主题创作的系列壁画与设计。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与利希滕斯坦主教形成了一种跨越时空的对话：一位用砖石、水系和几何图案建造了实体花园；另一位则用线条、色彩与情感，为这座花园赋予了永恒的灵魂与梦境。一位创造了舞台，另一位则为舞台书写了不朽的剧本。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在克罗梅日什，历史与传说在花园的迷宫中交织。最令人遐想的，是关于<strong>“迷宫与骷髅”</strong> 的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在建造巴洛克花园下的<strong>迷宫</strong>时，工人们在地下发现了一具完整的古代骑士遗骸，身边还有一柄锈蚀的剑。主教得知后，并未让人移走，而是下令在原处上方修建了迷宫中最复杂的一个节点——一间石室。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人会说：“那不是迷宫的终点，而是守护灵的居所。迷路时若能静心，或许能听到古老的盔甲回响，他会指引诚实的人找到出路，而让心怀不轨者永远打转。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说为理性的巴洛克几何花园，增添了一抹中世纪的幽暗与神秘色彩，仿佛在提醒人们，脚下的土地层叠着比宫殿更古老的时间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，小城还流传着关于<strong>圣莫里斯</strong>的守护传说。作为奥洛穆茨主教区的主保圣人，他的形象（一位持剑的罗马军官）遍布城镇。传说在三十年战争的瑞典军队攻城时，曾有士兵在夜雾中看到城墙上有发光的人影持剑而立，吓得不敢前进，为守军赢得了宝贵的撤离时间。自此，圣莫里斯也被视为克罗梅日什的隐形守护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，让冰冷的石头建筑与精致的花园，染上了当地人的情感温度与集体记忆。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步于克罗梅日什，你行走的绝非一个单纯的旅游景点。你脚下是主教为躲避尘世纷扰而选的净土，是浴火重生的巴洛克杰作，是近代欧洲宪政史上一个短暂却深刻的注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值，正在于这种<strong>多重身份的叠加</strong>：宗教的、艺术的、政治的。它没有布拉格的喧哗，却有着同样厚重的历史层次；它的美不是外放的张扬，而是内敛的、需要细细品读的百科全书式存在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂克罗梅日什，便是读懂了一种欧洲历史的典型范式——权力如何通过艺术进行表达，灾难如何催生不朽的创造，而那些看似偏僻的角落，又如何意外地连接了时代的宏大叙事。这里封存的，是一部用石头、油画和花园写就的“摩拉维亚之魂”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lednice-valtice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱德尼采–瓦尔季采庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lednice–Valtice Cultural Landscape</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/svojanov-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯沃亚诺夫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Svojanov Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vranov-castle-baroque-perch" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗拉诺夫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vranov Castle</p>
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
