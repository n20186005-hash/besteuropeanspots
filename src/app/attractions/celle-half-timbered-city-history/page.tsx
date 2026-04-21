import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '策勒历史溯源｜从韦尔夫王朝宫廷到木骨架童话的前世今生与贵族名人传奇',
  description: '探秘德国下萨克森的时光胶囊——策勒。不只是五百座彩色木骨架房屋，更是韦尔夫公爵的秘密住所、一位英国王后的成长故地与一部犹太家族的生存史诗。',
}

export default function CelleHalfTimberedCityHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '德国', href: '/destinations/europe' },
            { label: '策勒', href: '/destinations/europe' },
            { label: '策勒（五百座木骨架房屋之城）', href: '/attractions/celle-half-timbered-city-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`策勒（五百座木骨架房屋之城）・Celle・德国・策勒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在德国北部广袤的原野与森林边缘，有一座小镇，其天际线是近五百座彩绘木骨架房屋组成的、如童话书页般精致繁复的屋顶森林。然而，<strong>策勒</strong>的魅力远不止于这视觉的盛宴。它曾是雄霸一方的<strong>韦尔夫家族</strong>在吕讷堡荒原上的权力堡垒，是三十年战争中的宁静孤岛，更意外地成为了一座艺术与历史的“诺亚方舟”。抛开游玩攻略，走进策勒的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`策勒（五百座木骨架房屋之城）`} />
                <InfoRow label="英文名称" value={`Celle`} />
                <InfoRow label="正式名称" value={`Celle`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`策勒`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "策勒的故事，始于一片名为“Aller”的河流与沼泽交织的湿地。它的名字“Celle”，源自古萨克森语，意为“（沼泽或河流中的）定居地”，直白地揭示了先民们在此拓荒的艰辛与智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但这座城的正式诞生，与<strong>波尔德伯爵</strong>息息相关。1292年，伯爵获得在此建造一座城堡的许可，这成为策勒作为行政与军事据点的起点。然而，真正赋予城市灵魂的，是1325年。这一年，策勒的领主——<strong>不伦瑞克-吕讷堡公爵</strong>“长者威廉”，正式授予其“城市权利”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份古老的羊皮卷轴记载了这份特许状：“我们，威廉……授予我们忠诚的臣民，位于我们城堡策勒附近的居民，以城市法与权利。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一纸文书，不仅意味着城墙、市场和自治权的建立，更确立了一种独特的城市格局：坚固的<strong>策勒城堡</strong>（Schloss Celle）与毗邻的、棋盘格式展开的市民城区，自此相依相存了七百年。公爵的城堡俯瞰并保护着市民的房屋，而市民的繁荣也支撑着宫廷的运转。这种“宫城共生”的模式，是理解策勒一切历史与美学的第一把钥匙。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "策勒的第一个深刻印记，是它作为<strong>韦尔夫公爵领地</strong>长达三百年的宫廷岁月。1378年，策勒成为不伦瑞克-吕讷堡公国的新首府。城堡被大规模扩建，从军事堡垒转变为文艺复兴式的华丽宫殿。这座城市迎来了它的黄金时代，成为下萨克森地区重要的政治与文化中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，权力并非总是伴随着喧嚣。策勒的宫廷以其相对的内敛甚至“隐居”气质闻名。这在很大程度上要归功于<strong>公爵夫人埃莱奥诺雷</strong>。这位来自讷沙泰勒的公主在17世纪中期带来了一种精致的法国文化与虔诚的宗教氛围，使策勒在席卷欧洲的<strong>三十年战争</strong>（1618-1648）的腥风血雨中，奇迹般地保持了一片相对和平与繁荣的绿洲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "策勒的第二个历史转折，充满了戏剧性的意外。19世纪中叶，随着拿破仑战争后欧洲格局的重组，<strong>汉诺威王国</strong>被普鲁士吞并。王国崩溃，其首都汉诺威的<strong>皇家剧院</strong>面临关闭，大量珍贵的巴洛克与洛可可舞台布景、道具和服装无处安放，面临损毁的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这时，策勒伸出了援手。这些无价的艺术品被转移至策勒城堡的剧院大厅，静静地沉睡了近一个世纪。直到二战期间，汉诺威遭受猛烈轰炸，其城市剧院和大量文化遗产化为灰烬。策勒，这座因为军事价值不高而未被盟军列为重点目标的小城，连同它那五百座脆弱如纸的木骨架房屋，竟完好地保存了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，那些来自汉诺威的舞台珍宝，意外地在策勒找到了永久的归宿。它们不仅是艺术品，更成为一场历史浩劫中，文化得以幸存的有力象征。策勒因此不仅是自身历史的保存者，更成了一座文化的“方舟”。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在策勒漫长的宫廷史中，有一位女性虽未在此终老，却将这座城的教养与气质带向了欧洲权力的巅峰。她便是<strong>索菲·夏洛特</strong>，后来的英国及爱尔兰王后。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1668年</strong>，索菲·夏洛特出生在策勒城堡。她是策勒公爵<strong>乔治·威廉</strong>与法国贵族出身的母亲精心培育的明珠。她的童年与少女时代，浸润在策勒宫廷独特的氛围中：那里既有德意志北方的严肃勤勉，又深受她母亲带来的法国沙龙文化影响，充满了对哲学、艺术和时尚的追求。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "索菲·夏洛特在晚年给莱布尼茨的信中曾回忆：“在策勒的时光，是我思想最初的源泉。那里的图书馆和夜晚的谈话，让我知道世界远比宫廷礼仪更加广阔。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的聪慧与美丽闻名遐迩。1701年，她的兄长<strong>乔治·路易斯</strong>——即后来的英国国王<strong>乔治一世</strong>——邀请她前往伦敦。索菲·夏洛特很快成为英国宫廷的时尚与文化引领者。她对音乐（资助了作曲家亨德尔）、建筑（参与设计了汉诺威的赫尔恩豪森宫）和科学的赞助，极大地提升了汉诺威王朝在英国的文化形象。可以说，这位从策勒走出的公主，为后来“汉诺威-英国”的联合王国注入了第一缕启蒙时代的光辉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与策勒命运交织的名人，则来自截然不同的背景。<strong>埃米尔·帕里斯</strong>，一位19世纪末的犹太银行家与企业家。他是策勒经济现代化的重要推手，但他的传奇，凝固于他为自己家族建造的宅邸——<strong>帕里斯宫</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座建于19世纪90年代的新古典主义豪华别墅，是埃米尔·帕里斯财富与社会地位的象征。然而，随着纳粹上台，帕里斯家族像无数德国犹太家庭一样，遭遇了灭顶之灾。家族成员被迫流亡或遭迫害，这座宫殿也被“雅利安化”充公。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战后，帕里斯宫被归还，但家族已星散。如今，这座建筑是<strong>策勒镇法院</strong>所在地。每天，法律与正义在这里得到伸张，而建筑本身，就是一段关于繁华、掠夺、苦难与（部分）归还的无声证词。它矗立在市中心，提醒着人们策勒的历史并非只有童话般的木骨架，也包含着20世纪最黑暗的篇章与沉重的反思。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在策勒如迷宫般的卵石小巷，除了欣赏木骨架房屋上《圣经》故事或行会标志的雕刻，当地人还会向你低语几个神秘的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说围绕着<strong>策勒城堡</strong>的哥特式礼拜堂。据说，在礼拜堂的祭坛下方，隐藏着一个古老的石制“摇篮”。传说这是为一位在城堡中诞生的韦尔夫公爵继承人准备的。但民间故事赋予了它魔力：任何在摇篮中躺过的真正合法的继承人，都会在未来成为伟大公正的统治者；而心怀不轨的篡位者，则会遭遇不幸。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“那个石头摇篮冰冷坚硬，”一位老策勒人可能会这样说，“它测试的不是婴儿的舒适，而是血脉的真谛与命运的重量。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与无处不在的<strong>木骨架房屋</strong>有关。其中许多房屋的山墙上，雕刻着扭曲的、仿佛在挣扎的人形图案，被称为“狂野之人”。传说这些形象是为了驱赶中世纪时在周边吕讷堡荒原上游荡的强盗与恶灵，保护屋内的居民和珍贵的货物（策勒曾是亚麻贸易中心）。也有学者认为，这反映了人们对荒野、森林未知力量的原始恐惧，将其具象化后“钉”在墙上，以达到安抚或震慑的目的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论是关乎王权正统，还是百姓安危，都深深植根于这片土地的历史与地理环境之中，为精美的建筑增添了一层神秘的人文滤镜。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "策勒，因此远非一座单纯的露天建筑博物馆。它是一部以木与石写就的立体史书。从公爵的权杖到市民的刻刀，从庇护文化的“方舟”到承载伤痛的宫殿，它的每一片彩绘木板、每一块城堡砖石，都在诉说着权力与平民、繁荣与危机、包容与创伤的多重奏鸣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂策勒，便读懂了德意志北部历史的一种典型缩影：不是轰轰烈烈的帝国叙事，而是地方邦国的细致经营；不是毁于战火的断壁残垣，而是在时代风浪中幸存并承担起传承责任的坚韧。在这里，历史不是教科书上遥远的名词，而是你指尖触到的、已有七百年纹路的橡木梁，是转角处可能遇见一位王后童年足迹的寻常巷陌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇邀请每一位来访者进行的，是一场深度的时光对话。当你看过了它的前世今生，那些五彩的木骨架，才会在你眼中真正地鲜活起来，散发出历史温润而复杂的光芒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/industrial-forest-therapy-germany" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德国工业巨石的绿色心跳：从鲁尔矿场到黑森林的疗愈之旅</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Green Heartbeat of Germany‘s Industrial Giants: From Ruhr Mines to Black Forest Therapy</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/orienburg-palace-gardens" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥拉宁堡宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oranienburg Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/magdeburg-water-bridge" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马格德堡水桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Magdeburg Water Bridge</p>
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
