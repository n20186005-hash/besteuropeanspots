import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗里萨赫历史溯源｜奥地利最古老护城河小镇的前世今生与圣殿骑士传奇',
  description: '深入千年护城河小镇弗里萨赫。揭秘采邑主教与圣殿骑士的隐秘过往，探寻铸币厂与“鬼屋”传说。一段被时光封存的欧洲中世纪秘史。',
}

export default function FriesachHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '克恩顿州', href: '/destinations/europe' },
            { label: '弗里萨赫', href: '/attractions/friesach-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗里萨赫・Friesach・奥地利・克恩顿州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥地利克恩顿州的绿色腹地，一座拥有完整中世纪护城河的小镇仿佛被时光遗忘。它不是维也纳，也非萨尔茨堡，它的名字是<strong>弗里萨赫</strong>。这里的每一块城墙砖石，都镌刻着一段远比奥地利共和国更为古老的记忆——那是<strong>采邑主教</strong>的权柄、<strong>圣殿骑士</strong>的足迹与<strong>铸币</strong>的脆响共同谱写的篇章。抛开游玩攻略，走进弗里萨赫的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗里萨赫`} />
                <InfoRow label="英文名称" value={`Friesach`} />
                <InfoRow label="正式名称" value={`Friesach`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`克恩顿州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗里萨赫的诞生，与一条古老商道和一位远在<strong>萨尔茨堡</strong>的大主教紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间追溯到<strong>公元860年</strong>，一份拉丁文文献中首次出现了“Friesah”这个名字。语言学考证认为，它很可能源自古斯拉夫语，意为“桦树之地”。但这片桦树林的命运，在<strong>萨尔茨堡大主教</strong>的目光投来时彻底改变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它地处连接<strong>阿奎莱亚</strong>与<strong>多瑙河</strong>的古老“罗马之路”上，战略位置突显。于是，<strong>萨尔茨堡的大主教们</strong>决定在此建立一个坚固的东部前哨，用以巩固教权、征收商税、并抵御来自东方的势力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的定居点围绕着山丘上的<strong>圣殿山</strong>展开。<strong>1076年</strong>，文献中明确提及了这里的市场和铸币权——这是中世纪城镇获得合法地位与经济生命的关键标志。弗里萨赫并非由世俗君主建立，而是作为<strong>采邑主教领地</strong>，直接听命于萨尔茨堡，这种独特的出身，奠定了它独立而封闭的中世纪城邦气质。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗里萨赫的历史，是由高墙、硬币与骑士共同铸造的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是<strong>12世纪</strong>巍然耸立的<strong>城堡</strong>与完整的<strong>护城河系统</strong>。这是小镇最标志性的景观。当时的统治者，<strong>萨尔茨堡大主教康拉德一世</strong>，为了彰显权威与巩固防御，下令兴建了庞大的城防体系。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们必须用石头与河水，在这里筑起一道不可逾越的屏障，让主的权威与世俗的财富在此安然无恙。”——后世史学家对主教敕令的揣摩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这道至今保存完好的护城河，并非战争频繁的产物，更多是一种权力与自治的象征。它清晰地将主教治下的“城内”与外部世界分隔开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是<strong>采邑主教与萨尔茨堡的长期博弈</strong>。作为一块“飞地”，弗里萨赫的统治并非一帆风顺。<strong>13世纪</strong>，它卷入了<strong>萨尔茨堡大主教与克恩顿公爵</strong>的冲突中。<strong>1215年</strong>，大主教<strong>埃贝哈德二世</strong>授予弗里萨赫市场特权，进一步刺激了其经济繁荣，但也引来了邻居的觊觎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，是<strong>铸币厂</strong>与<strong>圣殿骑士团</strong>的入驻。得益于主教赐予的特权，弗里萨赫的<strong>铸币厂</strong>从<strong>12世纪</strong>一直运营到<strong>15世纪</strong>，其生产的“弗里萨赫芬尼”曾流通于整个中欧地区。经济的活跃吸引了特殊的“客人”——<strong>圣殿骑士团</strong>。他们在城内建立了据点，其教堂遗址至今可辨。骑士团的到来不仅带来了保护，更连接起了通往东方的金融与信息网络。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座小镇的星空中，有两颗星并非最耀眼，却最具神秘色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是<strong>莱奥波德·冯·维特尔斯基</strong>。他不是王侯将相，却在<strong>17世纪</strong>的弗里萨赫留下了浓墨重彩的传说。他是一名铸币厂长，也是一位炼金术士。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1630年</strong>左右，维特尔斯基掌管着弗里萨赫的皇家铸币厂。但人们对他的兴趣远不止于此。传说中，他痴迷于点石成金的奥秘，日夜在其宅邸（今称为“<strong>维特尔斯基之家</strong>”，俗称“鬼屋”）的地下室进行着危险的炼金实验。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“邻居们常在深夜听到地下室传来古怪的声响，看到奇异的闪光。有人说他与魔鬼签订了契约，以换取炼金的秘密。”——摘自当地19世纪民俗学者记录的口述史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更富戏剧性的是他的结局。传说他在一次实验爆炸中神秘失踪，只留下一屋狼藉和大量未解的手稿。他的宅邸因此被视为“鬼屋”，灵异传说流传数百年。维特尔斯基是弗里萨赫由盛转衰时期（三十年战争后铸币业凋零）的一个悲剧性缩影，他将小镇的实体经济（铸币）与虚幻的精神追求（炼金）荒诞地结合于一身，成为了一个徘徊在历史与传说之间的幽灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是<strong>弗里德里希·约瑟夫</strong>。这位<strong>19世纪</strong>的采矿工程师，为沉寂的弗里萨赫注入了新的活力。当时，小镇已褪去中世纪的光环，沦为宁静的乡村。约瑟夫在附近的山中发现了丰富的<strong>褐煤矿藏</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅引进了现代采矿技术，更致力于改善矿工的生活，修建住房与福利设施。他的努力，让弗里萨赫在工业时代找到了新的立足点，从一座依赖古老特权的中世纪城镇，平稳过渡为一个拥有现代产业的社区。约瑟夫代表了弗里萨赫务实、坚韧的另一面——在传奇落幕之后，脚踏实地地开创下一个篇章。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了炼金术士的鬼屋，弗里萨赫的血液里还流淌着更古老的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最动人的，是关于<strong>护城河上石桥</strong>的“<strong>守桥巨人</strong>”故事。相传在很久以前，每当深夜，就有一个身形巨大的幽灵徘徊在通往老城的主要石桥上。他并非恶灵，而是一位古代骑士的魂魄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位骑士生前曾发誓守护此桥与城镇的安全。在一场惨烈的保卫战后，他力战而亡。他的执念如此之深，以至于灵魂无法安息，继续履行着古老的誓言。据说，纯洁善良的人能在月圆之夜，看到他沉默巡视的威严身影。这个传说，巧妙地将小镇最核心的景观——护城河与桥，与骑士精神、守护承诺融为一体，赋予了冰冷的石头以温热的忠魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与<strong>圣彼得教堂</strong>地下的<strong>骷髅墓穴</strong>有关。里面整齐堆放着数百具中世纪遗骸。民间传言，这并非瘟疫所致，而是<strong>古代战士</strong>的安息之所。传说他们是在一场“没有黎明”的战斗中，为保护教堂圣物而全部阵亡。后人将他们收敛于此，视他们为神圣的集体殉道者。这些传说，共同构建了弗里萨赫超越现实的、带有悲壮与神圣色彩的精神图景。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步弗里萨赫，你漫步的并非一个单纯的“古镇景区”，而是一部依然在呼吸的<strong>中世纪城市法典</strong>。完整的护城河勾勒出权力的边界，沉默的城堡述说着主教的威严，狭长的石板街巷仍回荡着商贩与骑士的嘈杂。这里没有后来巴洛克的炫目修饰，它坦诚地保留着欧洲城镇<strong>前民族国家时代</strong>的原始肌理——一个由教会权柄、商贸特权与军事防御共同定义的微型世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂弗里萨赫，便是读懂了中世纪中欧一种独特的城镇生存模式。它的魅力不在于某个孤立的景点，而在于整个城镇作为一个<strong>完整历史标本</strong>的惊人留存。在这里，历史不是片段的展示，而是沉浸式的包围。它提醒我们，在欧洲的角落里，时光真的可以以“世纪”为单位安然沉淀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bregenz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布雷根茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bregenz</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hallstatt" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尔施塔特镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hallstatt</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/seefeld-in-tirol-mountain-village-lake-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞弗尔德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Seefeld in Tirol</p>
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
