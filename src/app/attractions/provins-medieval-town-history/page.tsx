import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普罗万历史溯源｜香槟集市下的中世纪古城前世今生与财富传奇',
  description: '穿越至未被现代打扰的中世纪！探索世界遗产普罗万，聆听石头诉说的香槟集市传奇、骑士诗歌与地下秘道往事。一座活着的13世纪丰碑。',
}

export default function ProvinsMedievalTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '普罗万中世纪古城', href: '/attractions/provins-medieval-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普罗万中世纪古城・Provins・法国・普罗万`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在巴黎东南方向不到百公里的宁静田园间，时间仿佛被施了魔法，凝固在13世纪。这里不是电影布景，而是一座真正从欧洲中世纪商业黄金时代走来的“活化石”城市——<strong>普罗万</strong>。它并非因战争或王权而声名鹊起，它的故事，是由来自全欧洲的商人、货币、香料与呢绒编织而成的，关于财富、智慧与交流的史诗。那些巍然屹立的城墙、幽深的地下长廊、以及空旷的集市广场，至今仍在低语着“香槟集市”的鼎盛与喧嚣。抛开游玩攻略，走进普罗万的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普罗万中世纪古城`} />
                <InfoRow label="英文名称" value={`Provins`} />
                <InfoRow label="正式名称" value={`Provins`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`普罗万`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普罗万的起源，深埋在法兰西岛早期的历史迷雾中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其名“Provins”很可能源于拉丁语“Provino”，意为“边境”或“前沿”。这精准地定位了它最初的角色：位于香槟伯爵领地与法兰西王室领地交界处的一个战略据点。早在罗马时代，这里就已存在定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正赋予普罗万灵魂的，是地理与时代的交汇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它坐落于几条重要古商道的十字路口，土地肥沃，盛产一种名为“waldines”的优质羊毛织物。这些条件，为它日后腾飞埋下了种子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>公元9世纪</strong>左右，一座坚固的城堡（今天的凯撒塔所在地）开始在山丘上兴建，守护着下方的河谷与居民。围绕城堡，城镇逐渐成形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，普罗万命运的转折点，始于<strong>11世纪</strong>。随着欧洲经济复苏、十字军东征打开东西方贸易通道，香槟地区的伯爵们以其开明和智慧，开始系统性地扶持和规范大型国际集市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普罗万，凭借其得天独厚的位置、安全的保障以及伯爵的特许状，脱颖而出，成为鼎鼎大名的“香槟集市”六城循环中，最为重要和繁荣的站点之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的城市肌理，从那时起，便为商业而规划，为财富而建造。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普罗万的辉煌，镌刻在每一块历经风霜的石头上。它的历史，是两部交织的史诗：无与伦比的商业繁荣与固若金汤的军事防御。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>香槟集市：中世纪的世界贸易中心</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年，当特定的钟声敲响，普罗万便会从宁静中醒来，变身为一个微缩的“全球化”舞台。从<strong>11世纪到13世纪</strong>，这里举行的香槟集市，是欧洲乃至当时已知世界最重要的商业盛会。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ">" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“来自伦巴第的绸缎、佛兰德斯的呢绒、德国的金属器皿、东方的香料和皮革……在此汇聚。货币兑换商的桌子排成长列，不同语言的讨价还价声此起彼伏。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "意大利、佛兰德斯、德国、英格兰、北欧的商人车队络绎不绝。集市不仅交易货物，更是金融、信息与文化碰撞的熔炉。它催生了现代汇票、商业法等雏形，将普罗万推向了财富与声望的顶峰。今天，巨大的圣阿伊乌广场（Place du Chatel）那空旷的辽阔，依然能让人想象当年帐篷林立、人声鼎沸的盛景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>凯撒塔与地下长廊：智慧与坚韧的丰碑</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伴随财富而来的，是守护财富的需求。普罗万的防御体系，是其历史另一面冷酷而精妙的注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市制高点上矗立的<strong>凯撒塔</strong>，建于<strong>12世纪</strong>。它并非国王宫殿，而是一座纯粹的军事瞭望塔和最后避难所。其独特的八角形设计、3米厚的墙壁和复杂的防御工事，展示了中世纪军事建筑的巅峰智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更令人惊叹的是地下世界。普罗万地下密布着总长近<strong>10公里</strong>的隧道网络，即“地下长廊”。这并非自然洞穴，而是<strong>11至13世纪</strong>间人工开凿的杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，人们是为了开采一种用于建筑和染布的珍贵白色粘土。但随着城市发展，这些纵横交错的地下空间被赋予了新的使命：储存易腐商品（保持恒温恒湿）、作为秘密通道、甚至在某些危难时刻庇护居民。行走其中，仿佛能听见历史在岩壁间的沉重呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>王权的庇护与衰落</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普罗万的崛起，离不开香槟伯爵的庇护。历代伯爵，如<strong>蒂博四世</strong>（诗人伯爵），不仅提供安全保护，还颁布法令确保公平交易。然而，<strong>13世纪末</strong>，随着香槟领地并入法兰西王室，以及海上贸易路线的兴起，陆上商道的重要性逐渐下降。香槟集市的光芒不可挽回地黯淡了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普罗万从此沉睡，却也因祸得福，其完整的中世纪城市风貌得以奇迹般地保存，未被后来的大规模工业化建设所破坏。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在普罗万的中世纪星空下，闪耀的不只是金币的光芒，还有诗与远方的灵魂。这座城市与两位风格迥异的诗人结下了不解之缘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>吕特伯夫：流浪诗人的叹息与荣耀</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位是<strong>吕特伯夫</strong>，13世纪法国最早、也是最著名的市民诗人之一。关于他确切的生平已湮没无闻，但他留下了大量诗作，其中明确提到了普罗万。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非养尊处优的宫廷诗人，而是一个生活潦倒、游走于市井的“流浪歌者”。他的诗歌充满了对贫困的自嘲、对世态炎凉的讽刺，也歌颂纯真的爱情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普罗万，这座充满活力的商业都市，很可能曾是他重要的旅居地或灵感来源。在熙熙攘攘的集市上，他目睹人生百态：富商的傲慢、平民的艰辛、教士的伪善。这些都成为他笔尖鲜活的素材。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ">" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我乃吕特伯夫，此言非虚，" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "贫苦常伴我，快乐却远离。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "命运与机遇，皆与我为敌，" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "自离娘胎起，直至裹尸衣。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 吕特伯夫《怨歌行》节选" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的存在，为金光闪闪的普罗万增添了一抹深沉的人文底色。在他笔下，我们看到了繁华背后的另一面：一个更真实、更复杂、充满烟火气的中世纪社会。普罗万不仅记住了财富，也记住了诗歌的叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>弗朗索瓦·维庸：叛逆灵魂的短暂驻足</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一个多世纪后，另一位更富争议性的诗坛巨擘——<strong>弗朗索瓦·维庸</strong>，也与普罗万产生了交集。这位才华横溢又劣迹斑斑的诗人，一生在犯罪、逃亡与创作中度过。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1461年</strong>，因卷入一桩盗窃案，维庸被关押在奥尔良附近的监狱，等待可能的死刑。同年夏天，刚刚加冕的路易十一国王途经该地，下令大赦囚犯。获释后，维庸踏上了前往巴黎的归途。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史学家普遍认为，他的旅程很可能会经过当时仍是重要区域城市的普罗万。我们可以想象，身心俱疲、劫后余生的诗人，走在普罗万高大的城墙下，穿过它幽暗的城门。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "集市或许已不复当年盛况，但城市的巨石建筑、沧桑气息，必定触动了他敏感而沧桑的心弦。这段经历，可能融入了他对命运无常、世事变迁的深刻感悟之中，尽管未在诗作中直接点名，却成为他人生颠沛流离的一个注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这两位诗人，一位是普罗万繁荣时代的亲历者与记录者，另一位则是其衰落时期的匆匆过客。他们的身影，一实一虚，共同构成了这座城市文化记忆中不可或缺的篇章，让石头之城，拥有了血肉与灵魂的回声。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在普罗万，历史与传说在石缝间交织，最迷人的故事，往往发生在地表之下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围绕着那庞大的<strong>地下长廊</strong>，数个世纪以来流传着无数传说。其中最著名的一则，与城市守护神圣阿伊乌有关，并试图解释这些迷宫般隧道的“神圣起源”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在非常古老的年代，普罗万饱受蛮族侵袭和内部纷争之苦。居民们向上帝祈祷庇护。一天，一位名叫<strong>阿伊乌</strong>的虔诚修士（后来被尊为圣人）得到神谕，指示他带领市民挖掘地下避难所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在天使的指引下，工程以惊人的速度推进。更神奇的是，据说地下深处涌出了一股清泉，不仅解决了饮水问题，其泉水还具有疗愈伤痛的神奇功效。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ">" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“跟随圣人的烛火，我们在黑暗的土壤中挖掘，不是为了宝藏，而是为了生存的希望。石头变得柔软，道路自行显现，直至我们拥有了一座地下的城池。” —— 据称源于古老的普罗万民间叙事诗" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些隧道在多次危难中保护了普罗万人，圣阿伊乌也因此被深深尊崇。城市的主保圣人节至今仍是他纪念日。而地下那股“圣泉”，虽然今天的科学解释是丰富的地下水位，但在传说中，它永远是神圣庇护的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个较晚近但充满浪漫色彩的传说，则关于“玫瑰”。相传，<strong>13世纪</strong>，香槟伯爵<strong>蒂博四世</strong>从十字军东征归来时，带回了一种异常艳丽、香气馥郁的大马士革玫瑰。这种玫瑰在普罗万的土壤中茁壮成长，其形象后来被刻在城市纹章上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说这玫瑰不仅美丽，其花瓣制成的糖果（至今仍是普罗万名产）还能带来甜蜜的爱情。于是，普罗万又有了“中世纪玫瑰之城”的别称，刚毅的军事堡垒形象之外，平添了一抹柔和的芬芳。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在普罗万的街巷，你踏过的不是普通的石板路，而是欧洲商品经济勃兴的“源代码”，是跨国贸易最早的“服务器机房”。这里的价值，远不止于“拍照好看”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座保存完好的露天博物馆，但更是一部依然“活着”的史书。它见证了欧洲如何从封建割据走向商业联通，见证了法律、金融、跨文化信任如何在一片曾经混乱的大陆上萌芽。当你在空旷的集市广场中央驻足，耳边仿佛能听到十几个世纪以来，无数种语言汇成的交易交响曲；当你触摸凯撒塔冰冷的巨石，能感受到一个时代对安全与秩序的极致追求；当你走入地下长廊的寂静黑暗，便能体会人类为生存与繁荣，如何向大地深处寻求智慧与庇护。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普罗万的故事，是关于连接、关于信任、关于在动荡中创造繁荣的永恒故事。它提醒我们，伟大的文明节点，不仅诞生于宫殿与战场，也诞生于商队扬起的尘土和钱币清脆的叮当声中。读懂普罗万，便是读懂了中世纪欧洲跳动的经济心脏，读懂了现代世界一个遥远而清晰的序章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ornans-franche-comte" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔南</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ornans</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-meillant" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅扬城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Meillant</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bergerac-dordogne-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝热拉克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bergerac</p>
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
