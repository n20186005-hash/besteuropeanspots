import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Civita di Bagnoregio历史溯源｜天空之城的千年孤寂、伊特鲁里亚根源与圣人传奇',
  description: '深入意大利“天空之城”Civita di Bagnoregio的尘封历史。从伊特鲁里亚基石到中世纪传奇，探索这座悬崖小镇如何对抗时间，成为永恒孤岛。',
}

export default function CivitaDiBagnoregioHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '白露里治奥（天空之城）', href: '/attractions/civita-di-bagnoregio-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`白露里治奥（天空之城）・Civita di Bagnoregio・意大利・维泰博`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在意大利拉齐奥大区的台伯河谷，一座石桥连接着现代与一个正在缓慢消失的古老世界。Civita di Bagnoregio，更广为人知的名字是“天空之城”，它并非漂浮空中，而是被时光与地质运动雕刻成的孤独岩岛。它的标签，是一座“活的地质博物馆”，也是一块封存了伊特鲁里亚文明、中世纪信仰与文艺复兴印记的“时间的琥珀”。抛开游玩攻略，走进白露里治奥的尘封往事，遇见属于它的孤寂、坚韧与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`白露里治奥（天空之城）`} />
                <InfoRow label="英文名称" value={`Civita di Bagnoregio`} />
                <InfoRow label="正式名称" value={`Civita di Bagnoregio`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`维泰博`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲述白露里治奥的起源，必须将时钟拨回近三千年前。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片土地的第一批居民，并非罗马人，而是更古老神秘的<strong>伊特鲁里亚人</strong>。大约在<strong>公元前7世纪</strong>，他们看中了这座由凝灰岩构成的天然山丘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其战略位置无可比拟：三面被深谷环绕，易守难攻，同时又俯瞰着重要的贸易路线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊特鲁里亚人在此建立了定居点，很可能是一个重要的祭祀中心或要塞。他们开凿岩石，修建墓穴和水渠，最初的文明基石深深嵌入这脆弱的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国时期，这里继续被沿用。而它的名字“Bagnoregio”，据信源自拉丁语 <strong>“Balneum Regis”</strong>，意为“国王的浴场”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地流传，一位患有严重皮肤病的伦巴第国王，在此沐浴温泉后奇迹痊愈，因而得名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一种考据则认为，“Regis”指的是这片土地曾属于皇室财产。无论起源如何，这个名字本身就带有皇权与神迹的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫长的中世纪早期，在蛮族入侵的动荡中，幸存的人们退守到这座天然堡垒之上，将其作为避难所。城市雏形，在恐惧与求生中逐渐凝聚。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城的命运，始终与脚下的大地紧密相连，甚至可说是进行着一场注定失败的悲壮抗争。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是<strong>无休止的地质“蚕食”</strong>。构成山体的凝灰岩和粘土层非常脆弱，在雨水侵蚀和地震作用下不断崩塌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1695年</strong>的大地震是致命一击。它不仅摧毁了大量建筑，更剧烈加速了山体滑坡的进程。整座城市的地理完整性开始崩解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自那以后，悬崖每年都在后退，建筑连同记忆不断坠入深渊。这不是瞬间的灾难，而是一场持续数百年的、缓慢的葬礼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是<strong>中世纪教权与皇权的角力</strong>。尽管孤悬一隅，白露里治奥却从未远离历史的漩涡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1296年</strong>，城市的主教堂得以重建（原建筑更古老），这不仅是信仰的象征，更是教皇权威在此地扎根的宣告。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在教宗与神圣罗马帝国皇帝漫长的争斗中，这座战略要塞数次易主。它的石头城墙见证过军队的旗帜变换，聆听过不同语言的祈祷与咒骂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "文艺复兴的微风也曾吹过这里。<strong>16世纪</strong>，城市中心广场得以重建，一些贵族宅邸的门廊上出现了优雅的纹章和石雕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，地理的孤绝终究限制了它的繁荣。当周边平原城市因商业而兴起时，白露里治奥却因交通不便而逐渐被遗忘，时间在这里仿佛凝固。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通往世界的唯一桥梁在<strong>20世纪中叶</strong>因滑坡彻底垮塌，成了压垮骆驼的最后一根稻草。居民大规模撤离，它变成了一座近乎被遗弃的“鬼城”，直至旅游业重新发现其惊世之美。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市最著名的儿子，是一位将神秘主义与经院哲学完美融合的圣人——<strong>圣博纳文图拉</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1221年</strong>，他出生于此，原名乔瓦尼·费丹扎。他的出生就笼罩在传奇色彩中。据其早期传记记载，他幼年时罹患重病，母亲向方济各会创始人<strong>圣方济各</strong>祈祷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣方济各当时恰好在附近，他预言这个孩子将拥有“美好的未来”，并亲自为其祝福。孩子奇迹般康复，从此改名为“博纳文图拉”（Bonaventura，意为“好运”）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在家乡度过童年，凝灰岩的孤寂与教堂的钟声塑造了他早熟而深邃的精神世界。之后，他前往巴黎大学求学，成为与<strong>托马斯·阿奎那</strong>齐名的神学巨星。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管一生大多在巴黎和罗马度过，但他始终自称是“白露里治奥的博纳文图拉”。他的神学思想强调心灵通过爱通往上帝之路，这种充满热忱的思辨，或许正源于他那个高悬于尘世之上的故乡所赋予的独特视角。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在自己的著作中曾隐晦地写道：“真正的知识不在喧嚣的集市，而在宁静的内心与对造物之工的凝视中。”这几乎是对故乡地理环境的诗意注解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1273年</strong>，他被任命为枢机主教，并受托筹备第二次里昂大公会议。他的逝世也充满戏剧性：<strong>1274年</strong>，在会议期间突然离世，传说他是被毒死的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的遗体从未归葬故里，但白露里治奥的主教堂内设有供奉他的小堂。更深刻的是，他将家乡那种与世隔绝、直面永恒的精神气质，融入了整个方济各会的灵修传统。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位不得不提的“访客”，是文艺复兴巨匠<strong>米开朗基罗</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1492年</strong>，年仅17岁的米开朗基罗在游览这座小镇时，据说被其险峻的地势和悲怆的美学深深震撼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，他正在研究古罗马和伊特鲁里亚的遗迹。白露里治奥悬崖上风化斑驳的肌理、建筑与岩石浑然一体的状态，很可能影响了他日后雕塑中那种“人物从石头中挣扎解放”的强烈风格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然无直接文献记载，但艺术史学家相信，这种关于“存在与消亡”、“坚固与流变”的视觉冲击，一定在这位天才少年的心中播下了种子。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这座“垂死之城”的顽强生命，当地有一个更为古老而神秘的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在伊特鲁里亚时代，这里是一位强大女先知居住的地方。她能通过地底的泉水与神明沟通，预知未来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她预言，这座城市将像一只凤凰，永远不会真正死亡。每当一部分土地塌陷，消亡的废墟中就会升起新的精神力量，守护着剩余的子民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说解释了为何在无数次灾难后，总有人坚守于此。人们相信，城市的心脏——主教堂所在的岩体，受到这位古代先知的永恒祝福，是最坚固、不会崩塌的部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说直接关联<strong>圣博纳文图拉</strong>的出生地。人们指认城中一个狭窄的石窟，说那是他母亲受孕前虔诚祈祷的密室。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在那个洞穴里，她听到了天使的低语，告诉她将孕育一个照亮世界的灵魂。因此，博纳文图拉的智慧，是岩石与上天共同赐予的礼物。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年他的诞辰纪念日，仍有虔诚的信徒来到这个石窟前静默祈祷，仿佛能触摸到那股跨越七个世纪的精神源流。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说并非迷信，而是居民在应对无常地理灾难时，构建的心理支柱。它们将恐惧转化为一种神圣的宿命感，让孤寂的坚守有了浪漫而悲壮的理由。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客穿过那<strong>200米长的混凝土步桥</strong>走向它时，踏上的不仅仅是一座地理的桥梁，更是一条时间的隧道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "白露里治奥的价值，远远超出一张 Instagram 上的明信片风景。它是人类文明与自然力量角力的悲怆史诗，是地理决定论的绝佳注解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是书本上枯燥的年份，而是脚下仍在簌簌落土的悬崖，是墙面上深刻的侵蚀痕迹，是午后阳光下空巷里回响的千年寂静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它教会我们一种不同的“阅读”方式：阅读地貌的变迁，阅读石头的记忆，阅读一种在缓慢消亡中绽放的极致之美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城最终会消失吗？地质学家给出了肯定的答案。但正因如此，此刻的每一次造访，都成了一次与倒计时赛跑的珍贵邂逅，一次对“存在”本身的深刻反思。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂它的孤寂与坚韧，你便读懂了一种意大利精神中不为常人所见的、静默而顽强的内核。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bagno-vignoni" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尼奥-维尼奥尼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bagno Vignoni</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/palmanova-star-fortress-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕尔马诺瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Palmanova</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/campobasso-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    坎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">坎波巴索老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Campobasso Old Town</p>
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
