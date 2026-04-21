import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥尔韦尔特历史溯源｜无车荷兰古村的石板路与时光传奇',
  description: '穿越回没有汽车的旧日荷兰。探索奥尔韦尔特——德伦特省腹地一个被时间凝固的萨克森村落，它的前世今生、守护者的故事，与石板路下的千年回响。',
}

export default function OrvelteDrentheHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '荷兰', href: '/destinations/europe' },
            { label: '德伦特省', href: '/destinations/europe' },
            { label: '奥尔韦尔特（无车活体民俗村落）', href: '/attractions/orvelte-drenthe-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥尔韦尔特（无车活体民俗村落）・Orvelte・荷兰・德伦特省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在荷兰东北部广阔的荒野与沙丘之间，藏着一个拒绝现代车轮的村庄。这里，时间以马蹄和脚步丈量，木筋墙房屋讲述着萨克森农民的千年韧劲。<strong>奥尔韦尔特</strong>，一个活着的博物馆，它的历史并非陈列在玻璃柜中，而是在炊烟、马厩和打磨光滑的<strong>燧石路</strong>上继续呼吸。抛开游玩攻略，走进这座“无车村落”的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥尔韦尔特（无车活体民俗村落）`} />
                <InfoRow label="英文名称" value={`Orvelte`} />
                <InfoRow label="正式名称" value={`Orvelte`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`德伦特省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥尔韦尔特的根，深植于荷兰北部独特的<strong>德伦特高地</strong>。这是一片被冰河塑造、遍布石楠荒原与神秘<strong>hunebedden</strong>（史前石墓）的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与许多规划整齐的荷兰城市不同，奥尔韦尔特的诞生是自然与生存的合谋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字最早见于<strong>1328年</strong>的一份修道院档案，写作“Overlothe”。语言学家认为，这可能源自古萨克森语，与树木或林地有关，揭示了其农业聚落的本质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里并非交通要冲，也非战略重镇。它的存在，纯粹是为了服务在这片贫瘠沙土上顽强耕耘的自由农民——<strong>德伦特的埃瑟伦</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些农民世代拥有自己的土地，形成了强烈的独立社区。奥尔韦尔特便是这样一个典型的<strong>“埃瑟”村落</strong>，房屋和谷仓围绕着一片公共牧地松散分布。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的路径并非为马车设计，而是人与牲畜踏出的土路。直到19世纪，村民们从荒野中挖出巨量的<strong>燧石</strong>，才亲手铺就了那条如今成为村庄灵魂的、凹凸不平的浪漫石板路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这条路的铺设，不是为了迎向未来，而是那个时代社区协作最坚实的证明。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥尔韦尔特的历史并非由战争或王朝书写，它的印记镌刻在无声的经济变迁与一场关键的“拯救”之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一道印记：木材与铁路的短暂辉煌</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪末，德伦特省的荒野被大规模开垦，木材经济兴起。奥尔韦尔特恰好位于一片重要林区附近。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1885年</strong>，一条地方铁路支线修到了村边，旨在运输木材和泥炭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个小村庄意外地迎来了它的“工业时代”。锯木厂建立起来，蒸汽机的轰鸣短暂打破了乡村的宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "铁路带来了外界的商品，也带来了新的观念。但这段喧嚣并未持续太久。随着林业资源变化和主要交通线路的转移，铁路在<strong>1947年</strong>停止了客运服务，最终被完全废弃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二道印记：荒芜边缘与一个女人的愿景</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战后的经济复苏时期，是像奥尔韦尔特这样的传统村落最危险的年代。年轻人涌向城市，古老的萨克森农舍被废弃、倒塌，或被“现代化”改造得面目全非。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村庄的灵魂正在流失。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机源于一位本土历史教师的执着。<strong>扬·蒂默</strong>女士坚信这些建筑是不可再生的文化遗产。她发起了一场运动，呼吁将整个奥尔韦尔特作为“活体博物馆”保存下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的愿景并非建造一个迪士尼式的布景，而是保护一个仍在运作的社区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三道印记：“无车”法令与时光的封存</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1960年代</strong>，在蒂默等人的极力推动下，一项历史性的决定被做出：整个奥尔韦尔特村落被列为国家保护区域。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更关键的一步是，村庄的核心区域被永久划为<strong>无机动车区</strong>。车辆必须停放在村外停车场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这项法令在当时看来近乎偏执，却成为了拯救奥尔韦尔特灵魂的决定性一击。马蹄声重新成为主导的旋律，石板路不再因震动而损坏，空气里只剩下自然与历史的声音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不是倒退，而是一次深思熟虑的抉择：为了保存一段完整的生活图景，自愿与一部分现代便利告别。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥尔韦尔特的名人并非王侯将相，而是这片土地的记录者、观察者与塑造者。他们的传奇，与木屋和荒原紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>扬·卢肯斯：村庄的书记员与最后的传统代表</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要找一位灵魂人物，那便是<strong>扬·卢肯斯</strong>。他于<strong>1899年</strong>出生在奥尔韦尔特的一栋农舍里，一生几乎未曾离开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的身份多重：农民、乡村教师，但最重要的是，他是一位自觉的<strong>民俗记录者</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在快速变化的20世纪初，卢肯斯敏锐地感觉到古老的生活方式正在消逝。他拿起笔和相机，以人类学般的精确度，记录下村庄的日常：农耕技术、节日习俗、房屋结构、方言词汇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他出版了《德伦特农舍》等重要著作，为后世保存了无法估量的细节。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的父亲总是说，一块田地的价值不在它的大小，而在你知道每一寸土壤的脾气。我们的村庄也是如此，它的价值在于记忆，而记忆正在随着每一个老人的离去而崩塌。”—— <strong>扬·卢肯斯</strong> 在其笔记中的感慨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与奥尔韦尔特的羁绊深入骨髓。他毕生致力于研究并保护当地的建筑风格，他的家本身就是一个展示传统生活的样板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "甚至他的人生结局也颇具传奇色彩：<strong>1974年</strong>，75岁的卢肯斯在村庄附近的荒原上散步时失踪。大规模搜寻无果，数月后，他的遗体才在一处偏僻的灌木丛中被发现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的离奇死亡，为这位“村庄守护神”的一生蒙上了一层神秘色彩，也让当地人更加珍视他所捍卫的一切。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>阿尔贝特·艾克豪特：用画笔为德伦特留下史前肖像</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然艾克豪特并未久居奥尔韦尔特，但他的艺术却为理解这片土地的前世提供了至关重要的窗口。这位<strong>17世纪</strong>的荷兰黄金时代画家，以其对异域题材的精确描绘而闻名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1640年代</strong>，艾克豪特受德伦特省督的委托，创作了一系列描绘该省居民生活与风景的画作。那时，德伦特对大多数荷兰人来说，仍是遥远、原始且充满未知的边境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的画作《德伦特的农民》、《采掘泥炭的人》等，是欧洲艺术史上最早以人类学眼光描绘荷兰乡村生活的作品之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "画中人物穿着独特的地方服饰，在广袤荒凉的背景下劳作。这些图像告诉我们，在奥尔韦尔特村落成形后的数百年里，德伦特人的生活状态。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "艾克豪特用他的画笔证明，这片土地及其人民值得被认真观察和描绘，这种尊重，为后世如卢肯斯这样的人文关怀埋下了种子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过卢肯斯的记录和艾克豪特的凝视，奥尔韦尔特的故事不再是孤立的村史，它连接起了从17世纪的好奇观察，到20世纪的抢救性保护这一条完整的人文关怀脉络。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在德伦特的沙土与雾气中，自然与超自然的故事早已生根发芽。奥尔韦尔特虽小，却也浸润在这些古老的传说里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>“会走路的橡木梁”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地木匠间流传着一个古老的说法：建造木筋墙房屋的主梁，必须选用在特定月相下砍伐的橡木。并且，在立柱上梁的那天，绝不能有任何争吵或不敬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，如果违反了这些禁忌，那根橡木梁便会在深夜“自己走路”，发出吱呀的呻吟，在房子里轻微移动，直到房屋结构出现无法解释的倾斜。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老彼得常说：“你瞧村口那栋歪屋？不是地基不稳，是它的主梁在生下它的森林和困住它的房屋之间，永远在挣扎。” 这则传说，本质上是对自然材料的敬畏，将建筑的稳固与人的德行、对自然的尊重联系在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>教堂小矮人与燧石路</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥尔韦尔特没有宏伟的教堂，但传说中，这片土地曾受一种叫做“<strong>德伦特小矮人</strong>”的生物庇护。他们只有膝盖高，住在古老的<strong>hunebedden</strong>（史前石墓）里，性格羞怯但心地善良。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，村民们铺设那条著名的燧石路时，工程异常艰辛。每当夜幕降临，疲惫的村民回家后，这些小矮人便会从荒原中出来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们用小小的手，帮忙敲打、调整石板，让路面更加平整坚固。作为回报，村民会在石墓旁留下一点牛奶或黑麦面包。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，为那条凝聚了集体汗水的现实之路，披上了一层奇幻而温暖的光晕。它暗示着，这条路的成功，得益于人与古老土地神灵之间的默契与互惠。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你踏上奥尔韦尔特高低不平的燧石路，马蹄在身后哒哒作响，你触摸的不仅是19世纪的石板。你走着的，是一条从<strong>1328年</strong>延伸而来的生存之路；你呼吸的，是<strong>扬·卢肯斯</strong>拼死记录的、即将消散的旧日空气；你见证的，是<strong>扬·蒂默</strong>等先驱用远见战胜遗忘的奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座“无车村落”的历史价值，不在于某栋建筑的单体宏伟，而在于它作为一个<strong>有机生命系统</strong>的完整存续。它拒绝成为冰冷的标本，而是选择以缓慢的、呼吸着的方式活下去。在这里，历史不是“曾经发生”，而是“正在如此生活”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，是一种彻底的沉浸感。你被迫慢下来，用前工业时代的节奏去感知空间与社区。每一个花园、每一间开放工坊的马厩，都是历史对话的现场。读懂奥尔韦尔特，便是读懂一种关于“保存”的深刻哲学：真正的保护，有时不是添加，而是勇敢地<strong>舍弃</strong>——舍弃车轮的便利，以换取时光的完整。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这枚藏在德伦特荒原中的“时光琥珀”，封存的不只是荷兰的乡村记忆，更是所有现代人内心深处，对连续性、对根脉的那一丝乡愁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡点全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/delft-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    代
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">代尔夫特老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Delft</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monnickendam-historic-fishing-harbor" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙尼肯丹</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monnickendam</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/naarden-star-fort-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳尔登星形要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Naarden Star Fort</p>
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
