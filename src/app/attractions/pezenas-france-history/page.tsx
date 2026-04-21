import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩泽纳斯历史溯源｜莫里哀之城的前世今生与喜剧传奇',
  description: '探寻莫里哀钟爱的十七世纪喜剧之城——法国佩泽纳斯。它不只是南法阳光下的慵懒小镇，更是一座凝固了古典戏剧黄金时代的时光琥珀。走进它的街巷，遇见演员侯爵与鞋匠会馆的传说。',
}

export default function PezenasFranceHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '埃罗省', href: '/destinations/europe' },
            { label: '佩泽纳斯', href: '/attractions/pezenas-france-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩泽纳斯・Pézenas・法国・埃罗省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在朗格多克耀眼的阳光与密斯托拉风中，佩泽纳斯如同一枚被岁月精心盘玩的温润琥珀。它的核心，并非寻常南法小镇的葡萄园或海滩，而是一段流动的、充满笑声与台词的历史。这里被铭刻为“莫里哀之城”，这位喜剧大师曾在此流连，他的剧团在此磨砺剧本，笑声从这里传向凡尔赛。抛开游玩攻略，走进佩泽纳斯的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩泽纳斯`} />
                <InfoRow label="英文名称" value={`Pézenas`} />
                <InfoRow label="正式名称" value={`Pézenas`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`埃罗省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩泽纳斯的源头，深埋在地中海文明的交错之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在古罗马时代，这里可能就存在一个名为“<strong>Piscenae</strong>”的定居点，名字源自拉丁语“鱼池”，暗示着与水源的亲密关系。然而，更浪漫且被当地传颂的起源，则指向了神秘的腓尼基人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，这些古代航海家在此发现了一眼异常清澈丰沛的泉水。泉水涌出的声音，在他们听来如同“<strong>Pedes Sinus</strong>”（意为“海湾之足”或“宁静之港”），这个名字在口耳相传中逐渐演变成了今天的“Pézenas”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪时，它凭借地理优势悄然生长。但真正的命运转折，发生在<strong>十七世纪</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非因要塞或港口而显赫，而是因其恰好位于连接<strong>蒙彼利埃</strong>与<strong>贝济耶</strong>的干道之上，成了重要的驿站城镇。南来北往的贵族、官员、商人再次歇脚，带来了财富、信息与迥异的文化需求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一座为“停留”而生的城，注定将迎来精彩的过客与流动的盛宴。这为它日后成为戏剧与艺术的温床，埋下了最初的伏笔。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩泽纳斯的黄金时代，与波旁王朝的太阳王<strong>路易十四</strong>的权术紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1660年</strong>，国王为加强对遥远而富庶的朗格多克省的控制，下令将<strong>朗格多克三级会议</strong>的常设会址设在佩泽纳斯。这项决定，犹如向平静湖面投下一块巨石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年，全省的贵族、教士和第三等级代表汇聚于此，商议税收、陈情请愿。庞大的官僚机构随之入驻，与之配套的律师、文书、仆役蜂拥而至。更重要的是，那些来自图卢兹或蒙彼利埃的地方显贵，为了在会议期间彰显地位与品位，竞相在此建造或租用华丽的城市宅邸（Hôtels particuliers）。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“整个城市变成了一座巨大的沙龙，也是权力的前厅。每个人都想被看见，被谈论，用最新的巴黎时尚或最机智的谈吐。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在短短几十年内，佩泽纳斯涌现出近百座风格各异的私人府邸。从哥特式晚期的幽暗到文艺复兴的均衡，再到路易十三风格的砖石交错与路易十四时代的巴洛克气派，一部活生生的法国建筑简史在此浓缩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些建筑并非冰冷的石头，它们是舞台背景。而真正的戏剧，发生在室内。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贵族们需要娱乐来打发冗长会议外的时光。戏剧、舞会、音乐会成为刚需。一个成熟的“文化消费市场”在此形成。这正是莫里哀和他的“光耀剧团”在<strong>1650年</strong>前后多次到访并长期驻留的根本原因——这里有最挑剔、也最慷慨的观众。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，<strong>十八世纪末</strong>的法国大革命风暴席卷了一切。朗格多克省制被废除，三级会议灰飞烟灭。佩泽纳斯如同突然被抽走了磁力的磁石，迅速沉寂。资本与精英流向更大的城市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份突如其来的衰落，从历史角度看，却成了一种另类的“保护”。它没有资金进行大规模现代化改造，那些精美的府邸、蜿蜒的中世纪街巷得以原样封存，仿佛一台盛大戏剧落幕後，道具与布景被完好地留在台上，等待下一个时代的灯光亮起。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "毫无疑问，佩泽纳斯的灵魂人物是<strong>让-巴蒂斯特·波克兰</strong>，世人更熟悉他的笔名——<strong>莫里哀</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 莫里哀：小镇成就大师，大师定义小镇</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1640年代</strong>，年轻的莫里哀与他的“光耀剧团”在巴黎经营失败，负债累累，只得踏上长达十余年的外省巡演之路。朗格多克，尤其是佩泽纳斯，成为了他们的福地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，佩泽纳斯是朗格多克总督、孔蒂亲王<strong>阿曼德·德·波旁</strong>的驻跸之地。这位亲王是艺术的热心赞助者。<strong>1653年至1657年</strong>间，莫里哀的剧团深受亲王庇护，几乎成为他的“御用剧团”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们不仅为亲王及其宫廷演出，也为三级会议的议员和本地市民表演。佩泽纳斯，成了莫里哀新剧的试演场和经典剧目的磨刀石。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "莫里哀在给朋友的信中曾调侃：“在这里，我们既是演员，也是外交家。一句台词能让议员发笑，或许就能为我们的剧团争取到多一枚金路易的赞助。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，此地的所见所闻，极大地丰富了他的创作素材。他观察那些来自不同城市、操着不同口音、为税收争吵不休的三级会议代表；他混迹于集市，聆听商贩与市民鲜活生动的口语；他在贵族沙龙里，精准捕捉到外省贵族模仿巴黎风尚时难免的笨拙与虚荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些鲜活的人物与细节，后来都融入了他的笔尖。《<strong>可笑的女才子</strong>》中对外省附庸风雅的讽刺，《<strong>贵人迷</strong>》里资产阶级跻身贵族的渴望，其灵感源泉或许就包括在佩泽纳斯沙龙里的所见所闻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了纪念这段渊源，佩泽纳斯老城中心建立了<strong>莫里哀博物馆</strong>（Musée de Vulliod-Saint-Germain），收藏有与他相关的珍贵文献。每年夏季，这里还会举办盛大的“<strong>莫里哀之季</strong>”戏剧节，来自各地的剧团在庭院、广场和历史建筑中上演莫里哀及其他古典戏剧，让古城的每一个角落都重新变成舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 约瑟夫·弗拉泰：被遗忘的发明狂人</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了莫里哀，佩泽纳斯还曾庇护过另一位奇才——<strong>约瑟夫·弗拉泰</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位出生在法国大革命动荡年代的本地人，是一位充满奇思妙想的发明家、工程师兼作家。他最为人所知的贡献，是大力推广并改进了<strong>甜菜制糖技术</strong>。在拿破仑大陆封锁政策导致蔗糖短缺的时期，他的工作具有战略意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他真正的热情在于一些“不切实际”的宏大构想。他痴迷于“<strong>征服空气</strong>”，设计了许多今天看来仍十分前卫的飞行器蓝图，包括带有螺旋桨和方向舵的飞艇模型。他还撰写了一部充满科幻色彩的著作《<strong>佩泽纳斯，2250年</strong>》，畅想了未来城市交通、能源和社会的形态，其中“以风能为动力的公共马车”等设想令人惊叹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在故乡完成了大量研究和写作，最终于<strong>1853年</strong>在佩泽纳斯去世。如今，在市政厅或一些本地历史展览中，你或许能偶然发现这位“佩泽纳斯的达芬奇”的蛛丝马迹。他代表了这座城市另一种气质：在厚重的历史帷幕下，始终涌动着一股面向未来的、大胆的想象力。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在佩泽纳斯，历史与传说在鹅卵石街道上并肩而行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说与城市徽章上的<strong>蹄铁</strong>有关。相传，路易八世（或说圣路易）的坐骑在经过佩泽纳斯时丢失了一只蹄铁。忠诚的市民们全力寻找并奉还。为表感谢，国王特许该城将金色蹄铁绘于城徽之上。这则传说赋予了佩泽纳斯“忠诚”与“幸运”的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而更鲜活、也更具戏剧色彩的传说，则围绕着老城里的“<strong>鞋匠会馆</strong>”展开。这座美丽的文艺复兴风格建筑，外墙上雕刻着圣克莱门特（鞋匠的主保圣人）的浮雕。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说，莫里哀在佩泽纳斯期间，经常来到这里的鞋匠作坊。他并非为了修鞋，而是来“窃听”生活。鞋匠们一边敲打着皮革，一边毫无顾忌地谈论市井新闻、家庭纠纷、邻里八卦，语言粗粝却充满生机与幽默。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ">" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "这些来自最底层的真实声音和鲜活词汇，被大师悄悄记下，融入他的喜剧，成为刺痛虚伪、歌颂生命力的经典台词。因此，当地人会说：“莫里哀喜剧的灵魂，有一部分是在鞋匠的敲打声中锤炼出来的。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说的主角，是<strong>朗格多克总督的侏儒弄臣</strong>。这位名叫“<strong>科科</strong>”的弄臣，以其惊人的机智和毒舌闻名。他的妙语连珠甚至能令权贵在尴尬中发笑。相传，他的幽灵至今仍出没于他曾居住的古老府邸，继续以他特有的方式，“评判”着过往游客的智慧与幽默感。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步佩泽纳斯，你不是在参观一座博物馆，而是在步入一部依然在低语的三幕剧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一幕，是权力与行政，体现在那些森严而华丽的三级会议相关的府邸中。第二幕，是艺术与狂欢，由莫里哀和他的同行们上演，笑声从庭院飘向街头。第三幕，是市井与日常，在鞋匠的敲打声、集市叫卖声和传说中侏儒弄臣的机锋里延续。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有宏大的征服叙事，却精致地封装了一个特定时代的“生态系统”：权力如何催生文化需求，文化如何反哺城市面貌，而市井生活又如何为一切提供最肥沃的土壤。它的美，在于这种完整的、层层相扣的“小历史”肌理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂佩泽纳斯，便能读懂法兰西文化中，外省与巴黎之间那种永恒的张力与滋养关系。这里封存的，不仅是莫里哀的足迹，更是伟大艺术赖以诞生的、那个喧闹、真实、充满欲望与灵感的黄金时代本身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/village-des-bories" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈尔德博里村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Village des Bories</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-fougeres-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    富
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">富热尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Fougères</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/uzes-duchy-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于泽斯公国古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Uzès</p>
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
