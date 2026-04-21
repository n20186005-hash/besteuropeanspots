import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施韦比施哈尔历史溯源｜千年盐都的前世今生与《强盗》诞生地的文学传奇',
  description: '走进德国隐藏的千年盐都施韦比施哈尔。揭秘“白色黄金”如何铸造帝国自由市，追寻席勒在此创作《强盗》的灵感足迹，聆听老桥与火灾的悲欢传奇。',
}

export default function SchwaebischHallHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '施韦比施哈尔', href: '/attractions/schwaebisch-hall-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施韦比施哈尔・Schwäbisch Hall・德国・巴登-符腾堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在德国西南部，蜿蜒的科赫尔河拥抱着一座山城，它的名字直白地揭示了财富的源头：<strong>施韦比施哈尔</strong>——“施瓦本的盐泉”。这里没有新天鹅堡的童话喧嚣，却拥有一部用盐书写、被火焰淬炼、借文学升华的千年史诗。盐，这种“白色黄金”，是它跳动的心脏，也是它所有故事的开端。抛开游玩攻略，走进施韦比施哈尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施韦比施哈尔`} />
                <InfoRow label="英文名称" value={`Schwäbisch Hall`} />
                <InfoRow label="正式名称" value={`Schwäbisch Hall`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴登-符腾堡`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事始于一个简单的自然馈赠：盐泉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在<strong>公元5世纪</strong>左右，可能更早，人们就发现了科赫尔河畔涌出的咸水。最初，也许是猎人追踪动物足迹时，注意到了这处独特的泉水。定居随之而来，目的纯粹而原始：制盐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“哈尔”（Hall）这个地名，在整个德语区都与盐业定居点紧密相连。它源于古凯尔特语“<em>hal</em>”，意为“盐”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而“施瓦本”（Schwäbisch）这个前缀，则是为了与德国其他名为“哈尔”的城镇区分开来，彰显其属于施瓦本地区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>约1037年</strong>，一份珍贵的文献首次提到了“哈勒”（Halle）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份由<strong>国王海因里希三世</strong>颁发的证书，证实了当地的盐泉归属位于科姆堡的修道院。这份文件，被视为城市的“出生证明”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院修士们系统地开发盐泉，修建煮盐工坊，一个小型的工商业社区围绕着盐井蓬勃发展。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "盐，是中世纪的“白色黄金”，是保鲜的必需，是财富的代名词。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这地下的咸水，让这个偏僻的山谷聚落，拥有了走向繁荣和自治的资本。它从一开始，就注定不是一个普通的村庄。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "盐的财富，很快为这座城市赢得了至关重要的特权与地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1280年</strong>，神圣罗马帝国皇帝<strong>鲁道夫一世</strong>授予哈勒“帝国自由市”的称号。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这意味着它直接隶属于皇帝，而非任何地方领主，享有高度的自治权、司法权和市场权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "盐税收入源源不断地流入市议会的金库，筑起了坚固的城墙，兴建了宏伟的圣米迦勒教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的经济命脉——盐厂，坐落在科赫尔河中的岛屿上，被称为“盐岛”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到<strong>1925年</strong>，古老的锅灶煮盐法才在这里彻底停产。盐，统治了这座城市近千年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，财富与灾难往往相伴。施韦比施哈尔的历史，被三次巨大的火灾深深烙印。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1680年</strong>的大火尤为惨烈，几乎吞噬了整个木结构的老城。这场灾难反而成为城市面貌重塑的契机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "重建没有走向混乱，而是在市议会的规划下，以当时流行的巴洛克和半木结构风格进行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，我们看到了今天那些山墙上装饰着华丽浮雕、色彩柔和的市民住宅，它们紧密而有序地排列在陡峭的鹅卵石街道两侧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "火灾的灰烬中，诞生了如今被誉为德国最美老城之一的景观。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一处不可忽视的历史印记，是横跨科赫尔河的<strong>“上桥”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座建于<strong>15世纪</strong>的砂岩古桥，不仅是交通纽带，更是一座“神圣的桥梁”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "桥中央矗立着<strong>圣约翰·内波穆克</strong>的雕像，他是抵御洪水与溺亡的守护圣徒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "几个世纪以来，商队、朝圣者、市民从这里走过，桥下流水承载着运盐的船只。它静默地见证了盐都的每一次繁荣与伤痛。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的名人画卷，由一位本土的政治巨匠和一位旅居的文学天才共同绘就。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位是<strong>约翰·班贝格</strong>（约1380-1455）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非艺术家或学者，而是这座城市历史上最具权势的市长和政治家。他的时代，正值施韦比施哈尔作为帝国自由市的黄金时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "班贝格是一位精明的管理者，也是一位强硬的捍卫者。他领导城市度过了<strong>1415年</strong>与霍亨索伦伯爵的激烈冲突，成功维护了城市的独立地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最大的遗产是<strong>科姆堡修道院</strong>的改造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1438年</strong>，在他的主导下，这座位于城市对面山顶、日渐衰落的古老本笃会修道院，被改建为一座世俗的、招收贵族子弟的学院（Stift）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一举措极大地增强了城市的文化影响力和社会地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "班贝格本人最终也安息于他倾注心血的圣米迦勒教堂中。他的一生，与这座盐都的政治命运密不可分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，则是一颗短暂划过却留下永恒光芒的星辰：<strong>弗里德里希·席勒</strong>（1759-1805）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1782年</strong>，当时还是位身无分文、因擅自离开斯图加特军营而遭通缉的年轻军医，席勒逃到了施韦比施哈尔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他投奔了这里一位同学的母亲，亨丽埃特·冯·沃尔佐根夫人，住在了城外鲍尔巴赫的庄园里。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在施韦比施哈尔，我第一次呼吸到了自由的空气。” —— 后世引述的席勒感言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管只停留了数月，但这段时间对席勒而言是创作上的“鲍尔巴赫时期”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，他远离了符腾堡公国的压抑管制，能够安心修改和完善他的革命性剧作《强盗》。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这部剧作后来在曼海姆的首演轰动全德，开启了德国狂飙突进文学运动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，鲍尔巴赫的席勒故居已成为纪念馆。施韦比施哈尔的宁静山谷，庇护并滋养了一部改变德国文学史的杰作。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于盐泉的发现，一个动人的传说代代相传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事里没有贵族或修士，主角是一位普通的牧羊人。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "很久以前，一位牧羊人在科赫尔河畔放牧他的羊群。他注意到，自己的羊儿总是格外喜欢舔舐河畔某处岩石下的地面，甚至那里的草也长得不如别处茂盛。好奇之下，他尝了尝渗出的泉水，发现了咸味。他将这个秘密告诉了修道院的修士，于是，人们开始有意识地收集和蒸煮这咸水，珍贵的盐结晶出现了。为了纪念这位牧羊人，城市的徽章上至今都保留着一只金色的山羊形象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说将城市的起源归于一个偶然的、来自民间的发现，充满了朴素的生活智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而山羊，作为传说中的“功臣”，成为了城市永恒的象征，出现在城徽、雕塑和无数纪念品上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年夏天，在著名的“施韦比施哈尔露天剧场”举办的古典戏剧节上，那只金色的山羊标志也高高悬挂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "艺术与古老的传说，在这座山城奇妙地交融在一起。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在施韦比施哈尔，你踩踏的不仅仅是鹅卵石，而是凝固的时间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一级通向老市场的台阶，都曾被盐工沉重的脚步磨砺；每一座色彩斑斓的山墙背后，都可能藏着从火灾灰烬中重生的家族记忆；教堂的钟声里，混合着帝国自由市曾有的骄傲与独立精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的历史不是博物馆里僵硬的陈列，而是渗入街巷肌理的呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你能在盐厂博物馆里触摸粗糙的盐结晶，能在席勒故居感受到文学诞生时的悸动，更能站在古桥上，望见与数百年前并无二致的、由盐财富塑造的天际线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它小众，因为它从不喧哗，只是静静守护着自己由盐、火与诗篇淬炼出的独特灵魂。读懂施韦比施哈尔，便是读懂了一部关于资源、命运与人文精神的欧洲微观史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tittmoning-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒂特莫宁城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tittmoning Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/muehlhausen-thuringia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米尔豪森</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mühlhausen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stolberg-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施托尔贝格城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stolberg Castle</p>
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
