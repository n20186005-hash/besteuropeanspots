import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '霍亨维尔芬城堡历史溯源 | “飞鹰堡”的前世今生、囚徒传说与鹰之传奇',
  description: '探秘萨尔茨堡的“飞鹰堡”——霍亨维尔芬。不止是《音乐之声》取景地，更是900年的权力囚笼、猎鹰传说与大主教秘史。点击揭开阿尔卑斯山脊上的尘封往事。',
}

export default function HohenwerfenCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '萨尔茨堡州', href: '/destinations/europe' },
            { label: '霍亨维尔芬城堡', href: '/attractions/hohenwerfen-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`霍亨维尔芬城堡・Hohenwerfen Castle・奥地利・萨尔茨堡州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在萨尔茨堡以南的巍峨山脊上，霍亨维尔芬城堡如一头石化的雄鹰，已凝视了山谷九个多世纪。它并非童话里的浪漫宫殿，而是一座真正的“权力之笼”与“防御之牙”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从<strong>萨尔茨堡大主教</strong>的坚固堡垒，到关押贵族囚徒的冰冷监狱，再到如今回荡着猎鹰呼啸的传奇博物馆，它的每一块岩石都浸透着阿尔卑斯山区的残酷政治与生存史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进“飞鹰堡”的尘封往事，遇见属于它的权力、囚禁与翱翔的时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`霍亨维尔芬城堡`} />
                <InfoRow label="英文名称" value={`Hohenwerfen Castle`} />
                <InfoRow label="正式名称" value={`Hohenwerfen Castle`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`萨尔茨堡州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍亨维尔芬的诞生，与一个名字紧密相连：<strong>大主教格布哈德</strong>。公元<strong>1077年</strong>，神圣罗马帝国皇帝亨利四世与教皇格里高利七世之间的“主教叙任权之争”席卷欧洲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为教皇的坚定支持者，格布哈德大主教需要为他所在的萨尔茨堡教区寻找一个绝对安全的避难所与防御支点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并没有选择平坦之地。目光投向萨尔茨河畔一块陡然拔高<strong>155米</strong>的岩石山嘴。这里易守难攻，足以监控通往南方的重要商道与隘口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的名字“Werfen”源自古高地德语，意为“投掷”或“屏障”，精准地描述了它的功能——一座被“投掷”或“设置”在险要之处的屏障。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的建筑是简陋的木石结构，但意图昭然若揭：它并非为了居住的舒适，而是为了统治的彰显与生存的保障。从建成的第一天起，霍亨维尔芬就注定与“防御”、“囚禁”和“权力”这些冰冷的词汇捆绑在一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它与山北的<strong>霍亨萨尔茨堡城堡</strong>遥相呼应，共同构成了大主教国不可撼动的权力双塔，守护着这个教会诸侯国的世俗与精神疆域。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡的历史，是一部不断被围攻、焚毁又重生的坚韧史诗。第一个重大印记刻在<strong>1525年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那一年，席卷神圣罗马帝国的<strong>德国农民战争</strong>蔓延至此。饱受压榨的农民和矿工组成了大军，将矛头对准了教会领主的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍亨维尔芬城堡被愤怒的起义者包围并最终攻占。整座城堡被付之一炬，内部设施几乎完全摧毁。然而，石头基座仍在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大主教的权威很快反扑。城堡在随后的几十年里被系统地重建，且变得更加坚固。这次劫难反而促使它从一座中世纪堡垒，向一座更适应火炮时代的文艺复兴式要塞演变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记来自<strong>十七世纪</strong>的<strong>三十年战争</strong>。这座城堡再次扮演了关键角色。它不仅作为抵御外来军队（尤其是瑞典军队）的防御要塞，更成为了萨尔茨堡大主教国的“临时金库”和档案馆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "珍贵的圣物、财富和文件被从萨尔茨堡转移至此，藏于厚重的城墙之后。战争期间，它成功抵御了多次威胁，确保了教国财富的安全。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们将珍宝转移至维尔芬，那里是群山之中最安全的心脏。”—— 一份当时的教会文件记载。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入<strong>19世纪</strong>，拿破仑战争改写了欧洲地图。<strong>1800年</strong>，法国军队兵临城下。这一次，城堡没有经历惨烈的战斗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时的管理者评估了无法坚守的现实，做出了一个 pragmatic（务实）却让许多后人唏嘘的决定：投降。城堡连同其中的大量装备，未作抵抗便交给了法军。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此举让它免于毁灭，却也标志着它作为军事要塞的永恒使命，走到了终点。此后，它历经火灾、修复，角色从兵营变为监狱，最终在20世纪找到了作为博物馆和历史遗迹的新生。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "霍亨维尔芬的传奇，不只在于高墙，更在于墙内曾经鲜活或凋零的生命。其中最具悲剧色彩的名字，莫过于<strong>沃尔夫·迪特里希·冯·莱特瑙</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位在<strong>1587年至1612年</strong>间统治萨尔茨堡的大主教，本身就是一部传奇。他雄心勃勃，热爱意大利文艺复兴艺术，是今天萨尔茨堡巴洛克城市风貌的奠基者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他扩建并美化了霍亨维尔芬，为其增添了文艺复兴风格的内部装饰，试图让这座冰冷的堡垒变得更适宜居住。然而，命运与他开了一个残酷的玩笑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "由于与巴伐利亚公爵马克西米利安一世的长期政治斗争失败，以及私生活（他与情人育有十五个孩子）成为政敌的把柄，<strong>沃尔夫·迪特里希</strong>最终众叛亲离。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1612年</strong>，他被自己的侄子兼继任者<strong>马库斯·西蒂库斯</strong>大主教推翻，并成为了霍亨维尔芬城堡最著名的囚徒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位曾经的主人，被关押在自己修缮过的城堡塔楼里，长达五年之久，直到<strong>1617年</strong>去世。从权力的巅峰坠入自己打造的囚笼，他的故事为城堡的石头增添了无尽的戏剧性与悲凉。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从我的窗口，我能望见萨尔茨堡，那曾是我的城市。如今，群山是唯一的陪伴，寂静是唯一的乐章。”—— 后世根据沃尔夫·迪特里希境遇演绎的独白。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与城堡囚室相关的著名人物是<strong>格里高利五世</strong>。这位出生高贵的<strong>匈牙利</strong>国王之子，因卷入家族与王位斗争，被他的叔叔——奥地利公爵阿尔布雷希特一世——作为政治人质关押在霍亨维尔芬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在这里度过了数年时光。这段囚禁经历并非个例，它揭示了城堡另一个重要功能：一所关押高级别政治犯和“问题贵族”的“贵宾监狱”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些身份显赫的囚徒，生活条件或许优于地牢中的普通犯人，但他们失去的自由同样彻底。他们的存在，让霍亨维尔芬不仅仅是地理上的屏障，更成为了一个权力博弈的沉默见证者与执行者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些名人的足迹与叹息，让参观者在穿越宏伟的骑士厅、登上防御塔楼时，感受到的不只是历史的宏伟，更是具体人生在历史洪流中的无奈与沧桑。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在霍亨维尔芬，最鲜活、最激昂的传说不属于人，而属于鹰。这就是它“飞鹰堡”之名的现代灵魂所在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地流传着一个古老的猎鹰人故事。传说在城堡最艰难的围城时期，粮食耗尽，守军濒临绝望。一位年轻的猎鹰饲养员放飞了他最好的苍鹰“山风”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "雄鹰穿越敌军封锁线，飞到南方友好的领地，爪子上绑着的求救信为城堡带来了援军的信息。最终围困得解，雄鹰成为英雄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说赋予了猎鹰忠诚、智慧与信使的象征意义。虽然难以考证，但它深深植根于阿尔卑斯山民对猛禽的崇拜传统中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是基于这种悠久的人与鹰隼共生文化，今天的霍亨维尔芬城堡设立了世界顶级的<strong>鹰类狩猎表演中心</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每天，训练有素的猎鹰、兀鹫和猫头鹰在城堡脚下的草地上展翅翱翔，在训鹰师的口令下进行精准的飞行表演。它们掠过观众头顶，锋利的爪子和呼啸的风声，将中世纪骑士与贵族最珍视的狩猎场景鲜活再现。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“看那鹰，它是山峦之子，是风与自由的君王。古人相信，能驾驭鹰的人，便能触摸到神灵的意志。”—— 一位当地训鹰老人的口述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场表演已不仅是一场旅游秀，更是对城堡历史角色的生动诠释：它曾是这片领地的守护之眼，而鹰，正是这锐利目光在自然界最完美的化身。传说与现代传承在此交汇，让冰冷的历史拥有了跃动的生命。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "游览霍亨维尔芬，便是在阅读一部以石头写就的欧洲中世纪教会诸侯国兴衰史。它没有维也纳美泉宫的奢华浪漫，其魅力在于一种粗粝的、未经粉饰的真实力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你能触摸到权力斗争的冰冷温度，感受到囚徒望窗外群山的无尽孤寂，也能在猎鹰划破长空的啸叫中，听到曾经回荡在此的、关于生存与征服的原始呐喊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，欧洲的历史不仅是沙龙里的艺术与哲学，更是山脉隘口处的堡垒、囚笼与永不松懈的警惕。这座“飞鹰堡”最终并未被时光遗忘，而是在新的世纪里，以承载历史记忆与延续古老技艺的方式，获得了永恒的重生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/graz-schlossberg-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉茨城堡山</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schlossberg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/st-wolfgang-white-horse-inn-pilgrimage-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣沃尔夫冈（白马酒店与绝美朝圣教堂）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">St. Wolfgang im Salzkammergut</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tratzberg-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特拉茨堡城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tratzberg Castle</p>
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
