import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普列加马城堡历史溯源｜探秘斯洛文尼亚“悬崖石窟”城堡的离奇前世与骑士传奇',
  description: '它不是童话，是冷血现实。探秘欧洲最绝的防御工事——完全嵌于悬崖巨洞的普列加马城堡。强盗骑士、围城传奇、地下迷宫，它的故事比外观更震撼。',
}

export default function PredjamaCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '斯洛文尼亚', href: '/destinations/europe' },
            { label: '波斯托伊纳', href: '/destinations/europe' },
            { label: '普列加马城堡', href: '/attractions/predjama-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普列加马城堡・Predjama Castle・斯洛文尼亚・波斯托伊纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯洛文尼亚喀斯特地貌的心脏，一座城堡以最狂妄的姿态，向重力与常识发起挑战。它并非建于山巅，而是“生长”于一座高达123米的垂直悬崖的巨洞之中。<strong>普列加马</strong>，这个名字本身就意为“洞穴之前”。它被誉为世界上最大的洞穴城堡，是中世纪军事工程与自然奇观的一次惊人媾和。千百年来，它既是无法攻破的堡垒，也是传奇骑士的亡命巢穴。抛开游玩攻略，走进普列加马城堡的尘封往事，遇见属于它的暴力、荣耀与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普列加马城堡`} />
                <InfoRow label="英文名称" value={`Predjama Castle`} />
                <InfoRow label="正式名称" value={`Predjama Castle`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`波斯托伊纳`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于它最早的准确记录，始于<strong>1274年</strong>。那时，它被称作“Luegg”，属于阿奎莱亚牧首区的一位贵族。但历史学家相信，它的雏形出现得更早。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的“地基”，是数万年流水侵蚀形成的巨大天然洞穴。最初的建造者，只是在这悬崖洞口前，搭建起简陋的木制防御工事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正使其成为传奇的，是13世纪的重建。骑士们用厚重的石墙，巧妙地封闭了洞穴的入口，将人造建筑与天然岩窟融为一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>Predjama</strong> 这个名字，源自斯洛文尼亚语，直译便是“在洞穴前”。这个名字精准得近乎直白，宣告了它存在的全部逻辑：利用自然，征服自然。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选址于此的唯一目的，就是防御。它背靠无法攀爬的悬崖，俯瞰着连接维也纳与亚得里亚海的重要商路。控制这里，就意味着控制财富与权力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中世纪动荡的岁月里，这种近乎偏执的选址，是生存智慧的极致体现。城堡的起源，无关浪漫，只有冷峻的实用主义和对安全的绝对渴求。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡并非一直属于同一个家族。它的历史，是一部在贵族领主间不断易手的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1462年</strong>，第一次有记录的围攻发生了。但这并非外敌入侵，而是一场内部清洗。当时的领主涉嫌参与反对哈布斯堡皇帝<strong>腓特烈三世</strong>的密谋，帝国军队兵临城下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场围攻无功而返，也反向证明了城堡防御的恐怖。真正的传奇，将在二十多年后，由一位新领主亲手书写。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了<strong>16世纪</strong>，城堡迎来了又一次重大变迁。<strong>1570年</strong>，一场剧烈的地震严重损坏了城堡结构。当时的拥有者，哈布斯堡王朝的贵族<strong>奥博里特男爵</strong>，决定彻底重建。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们必须用新的、更坚固的方式，拥抱这座岩石。”——据传出自当时建筑师的笔记" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这次重建，赋予了城堡我们今天看到的文艺复兴式外观。陡峭的屋脊、精美的窗棂，这些优雅的细节，与背后粗犷野蛮的岩洞形成了戏剧性的对比。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从一个纯粹的军事堡垒，开始向带有居住功能的贵族庄园转变。然而，它的核心——那深不可测的洞穴系统，始终是它灵魂的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了<strong>18世纪末</strong>，城堡的军事价值已不复存在。它被哈布斯堡家族赠予了<strong>温迪施-格雷茨家族</strong>，最终在<strong>1846年</strong>被卖给了私人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它一度被用作猎舍和仓库，渐渐被时光尘封。直到二战后被收归国有，经过精心修复，才重新向世人揭开它神秘的面纱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一次易主，每一次重建，都在岩壁上留下了新的刻痕。这些印记共同诉说着一个真理：在普列加马，人类的历史始终在与地质的历史对话。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说城堡是舞台，那么<strong>伊拉斯谟·卢格尔</strong>，无疑是舞台上最耀眼、也最悲情的男主角。他是普列加马无法剥离的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他的确切生平已模糊不清，但传说将他塑造成了一位<strong>15世纪</strong>的斯洛文尼亚骑士。他并非天生的恶棍，故事的起点是一场私人恩怨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "流传最广的版本是，伊拉斯谟因杀死一位哈布斯堡王朝的高官——据说是侮辱了他的一位好友——而遭到帝国通缉。他被迫逃亡，最终选择了易守难攻的普列加马城堡作为藏身之所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "以此为基地，他成为了一个“罗宾汉”式的人物，劫掠富有的商队，尤其是那些支持哈布斯堡皇帝的商队，并将财富分给周围的穷人。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从维也纳来的葡萄酒，正好用来浇灌卡斯特的葡萄藤。”——民间流传的伊拉斯谟语录，意指他用劫掠的物资接济乡里" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的行为激怒了皇帝。<strong>1484年</strong>，一支由总督<strong>加斯帕·拉瓦巴尔</strong>率领的帝国军队，将普列加马城堡围得水泄不通。史上最著名、也最奇特的一次围城开始了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉瓦巴尔信心满满，认为断绝粮草和水源，便能困死城堡内的叛军。然而，他低估了这座城堡与自然的共生关系。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围城持续了整整一年，城堡守军不仅没有饥饿的迹象，反而时不时用新鲜樱桃等食物嘲弄城下的士兵。秘密何在？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "答案就在城堡背后。那个巨大的洞穴并非死胡同，而是一条<strong>秘密天然隧道系统</strong>的入口。这条隧道蜿蜒数公里，通往山后的安全地带。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊拉斯谟的人马可以通过这条密道，源源不断地从外界获得补给，甚至能溜出去继续他们的“劫富济贫”事业。城堡成了一座无法攻破的孤岛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，传奇的结局往往源于背叛，而非失败。据说，围城最终因一个卑鄙的诡计而终结。拉瓦巴尔收买了城堡内的一个仆人，得知了伊拉斯谟一个固定的生活习惯：他每天会在城堡内一个特定的、位于岩洞上方的厕所解手。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“骑士的荣耀终结于最不荣耀的地方。”——后世编年史家的叹息" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围军调整了炮位，瞄准了那个石制厕所。当仆人用白旗发出信号，表示伊拉斯谟正在那里时，一发石弹精准地击中了目标。这位传奇骑士，最终在他最无防备的时刻，被他所嘲弄的敌人击杀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊拉斯谟的故事，将普列加马城堡从一个冰冷建筑，升华成了一个关于反抗、机智与悲剧的永恒象征。他的鬼魂，据说至今仍在洞穴的幽暗中徘徊。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了伊拉斯谟的史诗，普列加马的岩石中还回荡着更古老的窃窃私语。这些民间传说，为城堡披上了一层神秘的面纱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于那条<strong>秘密隧道</strong>，就有无数版本的故事。有人说它是骑士们亲手开凿的奇迹，也有人相信，那是一条早已存在的、由地下精灵或古代巨人使用的通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最流行的传说称，隧道不仅用于运输物资，还连接着一个地下宝库。伊拉斯谟将他劫掠来的大部分财宝都藏在了洞穴迷宫的最深处，等待着有缘人去发现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个阴森的传说，则与城堡下方的<strong>波斯托伊纳溶洞</strong>系统有关。这片欧洲最大的溶洞网络，入口就在几公里外，但地下水系错综复杂，民间相信它们与普列加马的洞穴暗中相连。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当洞穴深处的暗河流淌得格外湍急时，那是被淹死的矿工冤魂在哭泣。他们的灵魂，会顺着水道，漂到城堡的基石之下。”——当地古老矿工间的传言" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，在城堡某些寂静的深夜，守夜人或访客偶尔会听到岩壁深处传来似有若无的水流声、呜咽声，被认为是这些迷失灵魂的哀歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而伊拉斯谟本人的传说也未被遗忘。许多当地人相信，在暴风雨之夜，他的幽灵会重新出现在城堡最高的塔楼上，巡视他曾经的领地，那雷鸣便是他愤怒的咆哮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论真假，都深深植根于这片独特的喀斯特地貌。它们将自然的神秘力量与人类的历史叙事编织在一起，让普列加马城堡的魅力，远远超出了砖石与灰泥的范畴。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当我们站在普列加马城堡脚下，仰望那镶嵌在巨岩中的巍峨身影，我们所看到的，远不止一座奇特的建筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是<strong>人类适应力与野心的纪念碑</strong>。在中世纪的工匠手中，自然界的最大障碍——一座垂直的悬崖和幽深的洞穴——被转化为了最强大的防御资产。这种“顺势而为”的智慧，充满了原始的魄力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它也是一面<strong>中世纪社会矛盾的镜子</strong>。一边是森严的帝国秩序（哈布斯堡），另一边是地方骑士的反抗与自治梦想（伊拉斯谟）。城堡的坚固，恰恰映照了那个时代权力的脆弱与紧张。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的，它是一个<strong>故事发生的完美容器</strong>。伊拉斯谟的传奇之所以如此脍炙人口，正是因为城堡独一无二的地理特征，为故事提供了合理的舞台（密道）和戏剧性的结局（厕所炮击）。建筑本身，参与了叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "游览普列加马，不仅是在参观一个景点，更是在阅读一部<strong>由岩石书写、由鲜血着墨的立体史书</strong>。它的每一块石头，都凝结着生存的挣扎、权力的游戏和民间想象的翅膀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史从未死去，它只是凝固在了石灰岩中，等待着每一位来访者，用自己的目光将其重新唤醒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、内部探秘全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/logar-valley-slovenia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛加尔山谷</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Logar Valley</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/izola-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊佐拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Izola</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/maribor-old-vine" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马里博尔老藤屋</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Maribor Old Vine</p>
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
