import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希农城堡历史溯源｜法国王权堡垒的前世今生，圣女贞德与金雀花王朝的传奇现场',
  description: '探秘卢瓦尔河谷被低估的权力中心。从金雀花宫廷到圣女贞德辨王，走进决定英法百年战争走向的石头史诗。一段被浓缩的法国史。',
}

export default function FortressOfChinonHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '安德尔-卢瓦尔省，希农镇', href: '/destinations/europe' },
            { label: '希农城堡', href: '/attractions/fortress-of-chinon-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`希农城堡・Fortress of Chinon・法国・安德尔-卢瓦尔省，希农镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢瓦尔河谷星罗棋布的城堡中，<strong>希农城堡</strong>绝非最美，却可能是最“重”的一座。它的重量，并非来自其盘踞山巅的巨型岩石地基，而是源于其承载的、足以撬动整个西欧历史的决定性瞬间。这里是<strong>安茹帝国</strong>的心脏，是<strong>圣殿骑士团</strong>领袖的牢笼，更是<strong>圣女贞德</strong>与未来法王<strong>查理七世</strong>历史性会面、从而扭转百年战争国运的终极舞台。抛开游玩攻略，走进希农的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`希农城堡`} />
                <InfoRow label="英文名称" value={`Fortress of Chinon`} />
                <InfoRow label="正式名称" value={`Fortress of Chinon`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`安德尔-卢瓦尔省，希农镇`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“希农”（Chinon）之名，源于古老的高卢部落。这片土地俯瞰维埃纳河与卢瓦尔河交汇的险要之处，人类活动的痕迹可追溯至史前时代。但真正赋予其战略灵魂的，是罗马人。他们在此建立要塞，控制水路要道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，城堡的传奇始于中世纪。公元<strong>5世纪</strong>左右，早期防御工事于此萌芽。到<strong>10世纪</strong>，<strong>布卢瓦伯爵</strong>在此修建了第一座坚实的石质城堡，控扼安茹与普瓦图之间的门户。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地有句古老的谚语：“石头长在希农，权力长在城堡。” 形象地道出了这座堡垒与生俱来的地理权威。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其地理位置，注定它不会默默无闻。它位于法兰西“法语区”与“奥克语区”的文化交界，更是英法两大王国势力反复拉扯的前沿。城堡所在的岩石山脊，如同楔入土地的一把石剑，天然划分了疆域与权力。这座城堡从诞生之初，就不是为了闲适的宫廷生活，而是为了对峙、谈判与统治。它的名字，在历史的回音壁上，注定要与王冠、阴谋和战争紧密相连。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：金雀花帝国的“欧洲首都”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "12世纪，希农迎来了它的第一位“明星”主人——<strong>亨利二世</strong>。这位同时身为英格兰国王、诺曼底公爵、安茹伯爵和阿基坦公爵的君主，建立了一个横跨英吉利海峡的庞大“安茹帝国”。希农，因其地处帝国大陆领土的中心位置，成为了他最喜爱的居住地和行政中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1189年7月6日</strong>，就在这座城堡的一个阴冷房间里，亨利二世在背叛与绝望中悲愤离世。背叛他的，正是他的儿子——后来的“狮心王”<strong>理查一世</strong>。城堡的墙壁见证了一个帝国的鼎盛，也目睹了其家族裂痕的残忍开端。如今，城堡内修复的“钟楼”主体部分，正是金雀花王朝时期宏伟宫殿的遗留，沉默诉说着那段跨越海峡的霸权旧梦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：圣殿骑士团的最后堡垒</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1307年，法国国王<strong>美男子腓力四世</strong>为了夺取圣殿骑士团的巨额财富，下令在全法范围内逮捕骑士团成员。骑士团大团长<strong>雅克·德·莫莱</strong>，当时正驻守在希农城堡附近的领地。他并非在此被捕，但被捕后，他与骑士团的其他高层领袖，被秘密关押在希农城堡<strong>长达数年</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "根据零散的囚徒记录，德·莫莱被关押在城堡深处的“库德雷塔楼”中。那里潮湿、阴暗，是进行秘密审讯与施加心理压力的绝佳场所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在希农的囚禁期间，他们在酷刑下被迫作出了许多虚假供词，这些供词后来成为教皇解散骑士团、并火刑处死德·莫莱的关键“罪证”。希农城堡的塔楼， thus 成了这个史上最富有、最神秘军事修会悲剧终章的重要见证地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记三：百年战争的“命运转折点”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是希农城堡被历史永恒铭记的高光时刻。<strong>1429年3月</strong>，法国在百年战争中节节败退，半壁江山沦于英格兰及其勃艮第盟友之手。未来的法王<strong>查理七世</strong>，彼时只是被嘲弄为“布尔日之王”的落魄王储，退守希农，宫廷简陋，前途未卜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此时，一位来自洛林的农村少女<strong>贞德</strong>，历经11天跋涉，声称受神启示要来拯救法国。她穿越敌占区，抵达希农，要求面见王储。在<strong>3月6日晚</strong>，于城堡的“皇家主楼”大厅（今称“贞德大厅”），查理七世安排了一场精心的测试——他藏身于数百名衣着华贵的廷臣之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，贞德径直穿过人群，精准无误地跪在了这位伪装者面前，道出了只有他和忏悔神父才知道的、一个关于祈祷的秘密。这一“辨王”神迹，彻底震撼了查理。这次会面，成为了法国命运的心理转折点。获得信任的贞德，随后带领法军解了<strong>奥尔良之围</strong>，开启了反攻的序幕。希农，就此从一个避难所，升华为法兰西民族精神重燃的圣坛。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：圣女贞德 —— 在此被历史选中</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贞德在希农的时光虽然短暂，却浓缩了她传奇的核心。抵达时，她年仅<strong>17岁</strong>，身穿男装，风尘仆仆。城堡守卫最初甚至不愿放行。她的坚定，最终为她赢得了觐见的机会。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据当时的编年史记载，贞德对王储说：“高贵的主公，我是‘少女’，上帝派我来告诉你，你将在兰斯加冕，成为法兰西的真正国王。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在成功“辨王”后，她并未立即获得军权。查理七世依然谨慎，命令普瓦捷的神学家们对她进行了为期<strong>三周</strong>的严格审查，以验证其信仰是否正统、使命是否神圣。审查就在希农附近进行。贞德以其朴素的智慧和无懈可击的虔诚通过了考验。在离开希农前往奥尔良之前，城堡的铁匠为她量身打造了盔甲。我们可以想象，一位少女在这座充满男性政治与战争气息的古老堡垒中，等待、抗辩、最终赢得使命的画面——强烈的对比，塑造了永恒的英雄叙事。希农，是她从“农家女”转变为“民族使者”的炼金炉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：查理七世 —— 在此从“弃子”到“国王”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在贞德到来之前，查理七世是欧洲最悲观的君主之一。他的父亲<strong>查理六世</strong>是疯子，母亲<strong>伊莎贝拉</strong>公开质疑他的合法性，并与英格兰结盟。他在<strong>1418年</strong>巴黎暴动后仓皇南逃，最终将希农作为行宫。这里与其说是宫廷，不如说是一个大型的军事指挥部和流亡政府。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的绰号“布尔日之王”充满了讽刺，因为他实际控制的地盘支离破碎，财政濒临崩溃，威望荡然无存。他性格多疑、犹豫，身处绝望的深渊。贞德的到来，与其说是给他带来了军队，不如说是给他带来了<strong>合法性</strong>和<strong>信心</strong>。那个在希农大厅里发生的奇迹，首先治愈的是查理内心的溃败。他抓住了这根“神圣的稻草”，不仅改变了战争进程，也重塑了自己。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管他后来在贞德被俘时未能全力营救，但希农始终是他命运的福地。正是在贞德奠定的基础上，他最终驱逐英军，完成法兰西的统一与复兴，赢得了“胜利者查理”的称号。城堡里那条通往他私人礼拜堂的幽暗通道，仿佛是他前半生颠沛与内心挣扎的隐喻；而宏伟的“国事大厅”，则是他后半生重掌权柄的象征。希农城堡，完整见证了他从谷底到巅峰的人生弧光。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "希农的传说，与它的岩石地基一样坚硬而神秘。最著名的传说关乎城堡的地下世界。相传，城堡下方有一条秘密隧道网络，不仅连接着城堡的不同塔楼，甚至能一直通到数公里外的<strong>丰特夫罗修道院</strong>——那是金雀花王朝的家族陵墓。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们常说，在万圣节之夜，你能听到隧道里传来铠甲摩擦的声响和低语，那是<strong>亨利二世</strong>的幽魂，仍在为他儿子的背叛而愤怒徘徊，寻找着通往家族安息之地的路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与圣女贞德相关。城堡脚下，维埃纳河畔有一处名为“圣女石”的岩层。据说贞德在等待召见时，曾在此处跪地祈祷，岩石上留下了她膝盖的印记。虽为附会，却表达了当地人对这位“奥尔良少女”最朴素的情感寄托。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，城堡的“磨坊塔”也有故事。传说一位磨坊主的女儿与一位年轻的骑士相爱，遭到领主反对。骑士战死沙场，女儿终日以泪洗面，最终她的泪水与磨坊的水流混合，其悲伤使得经过此处的河水，在特定光线下会泛起银光。这些传说，将冰冷的历史巨石，染上了人性与奇幻的温度，代代相传。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当你站在希农城堡的废墟之上，眺望缓缓流淌的维埃纳河与红瓦连绵的小镇，你看到的不仅是一座军事堡垒的遗迹。你站在一个<strong>历史的十字路口</strong>。脚下是金雀花王朝统治半个西欧的野心，墙内是圣殿骑士团陨落的冤屈与秘密，空气中仿佛还回荡着1429年那个春天，一位少女坚定的话语如何点燃了一个民族的希望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有香波堡的浪漫夸张，也没有舍农索的水上倒影。希农的<strong>美是沉重而叙事性的</strong>。它的每一块风化崩裂的石头，都是一页被打开的历史书。它告诉你，历史有时并非在最繁华的都城被书写，而是在像希农这样看似边缘、实则关键的堡垒里，被几个关键人物的相遇所骤然改变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂希农，便是读懂了法兰西从中世纪封建割据走向民族国家雏形的阵痛与转折。它提醒我们，有些地方存在的意义，远超视觉的观赏，而在于对时光深处那些决定性瞬间的<strong>朝圣</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/domme-bastide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多姆（俯瞰多尔多涅河谷的防御巴斯蒂德）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Domme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perouges" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁日古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pérouges</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/palais-de-lisle-annecy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿讷西小岛宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Palais de l'Isle</p>
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
