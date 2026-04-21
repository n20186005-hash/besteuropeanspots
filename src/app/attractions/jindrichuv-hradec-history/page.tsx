import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '因德日赫城堡历史溯源｜南波希米亚水上宫殿的前世今生与名人传奇',
  description: '潜入捷克的“波西米亚凡尔赛”。揭秘因德日赫城堡的贵族传奇、第三庭院的水镜之谜，以及从未远去的白衣夫人幽灵传说。',
}

export default function JindrichuvHradecHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '南波希米亚州', href: '/destinations/europe' },
            { label: '因德日赫城堡', href: '/attractions/jindrichuv-hradec-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`因德日赫城堡・Jindřichův Hradec・捷克・南波希米亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在捷克南部密林与湖泊的环抱中，一座被水道贯穿的宫殿静静矗立了八个世纪。它不是布拉格的喧闹城堡，而是被誉为“波西米亚凡尔赛”的因德日赫城堡。这里，水面倒映的不是单纯的建筑，而是<strong>赫拉德茨家族</strong>四百年兴衰的史诗，一部在文艺复兴琴弦上奏响的波西米亚往事。抛开游玩攻略，走进<strong>南波希米亚州</strong>这座隐秘水城的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`因德日赫城堡`} />
                <InfoRow label="英文名称" value={`Jindřichův Hradec`} />
                <InfoRow label="正式名称" value={`Jindřichův Hradec`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南波希米亚州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡与城镇的诞生，始于<strong>13世纪初</strong>。那时，波西米亚王国正处在普热米斯尔王朝的扩张期，贵族们受命在边境和战略要地建立据点，巩固王权。一位名叫<strong>因德日赫</strong>（Jindřich）的贵族，看中了内扎尔卡河与哈姆尔溪流交汇处的这片沼泽林地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "河流是天堑，也是屏障。他于此建造了一座坚固的<strong>罗马式城堡</strong>，其核心是一座高大的塔楼，用以监视通往奥地利与摩拉维亚的古老商路。城堡的名字<strong>Jindřichův Hradec</strong>，直译便是“因德日赫的城堡”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从一开始，水就定义了它的命运。最初的建筑矗立在巨大的砂岩岩石上，而环绕的沼泽与河流被巧妙改造，成为天然的护城河。这并非一座孤立的军事堡垒，它迅速吸引了工匠、商人前来依附，在城堡脚下形成了繁荣的集镇。城堡、水系、市镇，三位一体，构成了这座城池最初的基因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的历史，远比其声名更为厚重。当游客涌向克鲁姆洛夫时，因德日赫城堡保持着一种学者般的静默，守护着波西米亚南部最古老、最连续的一段贵族世家史。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光的刻刀在这里留下了三道最深的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道，是<strong>从要塞到宫殿的蜕变</strong>。城堡最初的<strong>哥特式</strong>风貌在<strong>16世纪</strong>被彻底重塑。当时统治这里的<strong>赫拉德茨家族</strong>正处于权力与财富的巅峰。他们聘请意大利建筑师，进行了一场规模浩大的<strong>文艺复兴</strong>改造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡不再是阴森的军事堡垒，而成为展示人文主义精神与艺术品味的生活殿堂。优雅的拱廊、绘满壁画的外墙、精心设计的花园相继出现。最具标志性的，是被称为 <strong>“第三庭院”</strong> 的惊世之作。建筑师将内扎尔卡河水直接引入庭院，形成一面巨大的<strong>静态水池</strong>，如同一面完美的水镜，将整个华丽的宫殿立面倒映其中。这一设计，让城堡获得了“水上宫殿”的永恒美誉。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从我的窗户望下去，宫殿仿佛漂浮在水云之间。这不是建筑，这是一首用石头和水写成的诗。” —— 一位16世纪访客的日记片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是那座沉默的<strong>黑塔</strong>。它是城堡最古老的部分，始建于<strong>13世纪</strong>。其名“黑”，不仅源于深色石材，更源于其作为监狱与最后防御工事的沉重历史。塔身厚达数米，在无数次战乱与围城中岿然不动。它见证了赫拉德茨家族的每一次权力更迭，是城堡军事灵魂的具象化存在，与后来奢华的文艺复兴宫殿形成戏剧性对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道，是<strong>1618年的转折点</strong>。那一年，城堡内一座塔楼中的<strong>火药桶意外爆炸</strong>，引发大火，摧毁了包括古老宫殿在内的大片建筑。这场灾难恰逢欧洲历史的剧变——<strong>三十年战争</strong>即将拉开血腥序幕。爆炸像一则残酷的寓言，预示了旧世界的崩解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，赫拉德茨家族在废墟上开始了重建，新建了宏伟的<strong>大回廊</strong>。但战争最终还是终结了这个家族的直系血脉。<strong>1693年</strong>，最后一位赫拉德茨男爵去世，城堡在辉煌两个世纪后，迎来了新的主人与时代。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡的历史，与两个名字紧密缠绕，一位是让它绽放的女性，另一位是赋予它灵魂的“王子”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，是<strong>安娜·雷德尼奇科娃·冯·舒莱恩</strong>。她并非生而为赫拉德茨人，却成为城堡文艺复兴之美的总设计师。<strong>16世纪中叶</strong>，她嫁给当时的领主。安娜是一位受过极好教育、拥有非凡艺术鉴赏力的女性，对意大利文艺复兴新风潮充满热情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "丈夫常年忙于政务与外交，安娜便全身心投入到城堡的改造工程中。她不仅是赞助人，更是真正的艺术总监。从意大利聘请建筑师和艺术家团队，亲自参与设计讨论。城堡内部那些精美的<strong>壁画</strong>、优雅的<strong>拱廊庭院</strong>，尤其是将哥特式大厅转变为充满古典神话场景的华丽宴会厅，都深深烙下了她的品味印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她更在城堡中建立了一个活跃的<strong>文化沙龙</strong>，诗人、音乐家、学者是这里的常客。其中，与诗人<strong>兹德涅克·沃克·雷德尼奇科娃</strong>的交往最富浪漫色彩。传说他们之间存在着超越友谊的深厚精神联结，兹德涅克为她写下了许多诗篇。安娜让冰冷的石堡变成了波希米亚南部的一个文艺灯塔。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“夫人（安娜）的头脑如男子般睿智，心灵却比泉水更清澈。在她的厅堂里，谈论的是星象、诗歌与建筑的和谐，而非阴谋与赋税。” —— 同时代编年史家记载" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位传奇人物，是<strong>18世纪</strong>的城堡主人——<strong>弗朗茨·安东·冯·施波克伯爵</strong>。他是一位典型的开明贵族，兴趣广泛，精力充沛。他最为人称道的贡献在音乐领域。施波克伯爵本人是优秀的小提琴家，他在城堡内组建了一支高水平的私人乐团，其规模和演出质量在奥匈帝国闻名遐迩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不仅邀请音乐家驻留创作，更在城堡所在的城镇大力推广音乐教育，创立了音乐学校。传说，作曲家<strong>克里斯托夫·维利巴尔德·格鲁克</strong>年轻时曾在此受聘，这段经历可能影响了他后来的歌剧改革。施波克伯爵让音乐成为城堡日常生活的一部分，悠扬的旋律取代了昔日的刀剑铿锵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，他还热衷于科学与慈善。他改革了领地的农业，引进新作物，并建立了当地最早的医院之一。在施波克伯爵统治时期，城堡虽已不再是权力中心，却成为了一个充满活力、注重文化与福祉的“理想国”模型。他被领民亲切地称为“我们的音乐王子”，其影响深深渗透进当地的民风之中。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如同所有古老的城堡，水面之下，砖石之中，流传着不散的魂灵。因德日赫城堡最著名的传说，是关于<strong>“白衣夫人”</strong> 的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位幽灵通常被描绘成一位身着白色长裙、面容忧伤的贵族女子。传说她是中世纪某位城堡女主人的化身，因犯下过错而被诅咒，永远在此徘徊。她并非邪恶的幽灵，而更像一个悲伤的守护灵。当地人说，她的出现往往是一种预兆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果她在走廊中缓步而行，面露微笑，则预示着城堡或家族将有好运或喜事降临，比如新生命的诞生。然而，如果她被人看见在深夜哭泣，或是在城墙边焦急地搓手，则是不祥之兆，可能预示火灾、死亡或其他灾难。<strong>1618年</strong>那场毁灭性的火药爆炸发生前，就有不止一个仆役声称看到了哭泣的白衣夫人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更具体的传说将她与城堡一处真实的建筑特征联系起来——一面被称为 <strong>“魔镜”</strong> 的古老凸面镜。相传，这面镜子拥有魔力，白衣夫人有时会从中浮现。也有说法称，只有纯洁之人才能从镜中看到幻象，预见未来。这个传说与城堡厚重的水汽、摇曳的烛光结合在一起，为华美的文艺复兴宫殿平添了一层神秘、幽深的底色，提醒着访客：最辉煌的历史，也总是与失落和哀愁相伴。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们漫步在因德日赫城堡静谧的庭院，看天鹅划过第三庭院如镜的水面，触摸黑塔冰冷粗糙的墙砖，我们所经历的，远非一次简单的景点打卡。这是一次穿越<strong>波希米亚贵族政治史</strong>、<strong>文艺复兴艺术传播史</strong>和<strong>中欧民间精神史</strong>的层叠旅程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有布拉格城堡的至高权力象征，却完整保留了一个地方贵族世家从崛起到鼎盛，直至融入历史长河的完整闭环。这里的每一面湿壁画，每一扇石窗，每一段关于白衣夫人的低语，都是解读捷克乃至中欧历史的一个独特密码。它是一座活态的博物馆，展示着权力如何转变为对美的追求，建筑如何与自然（水）达成终极和谐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂这座水城的故事，你便读懂了一种在边缘地带生生不息、自成一体的文明韧性。它的传奇，静静流淌在内扎尔卡河中，等待有心人的聆听。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/zelen--hora-pilgrimage-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    绿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">绿山圣约翰朝圣教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Pilgrimage Church of St. John of Nepomuk at Zelená hora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lednice-valtice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱德尼采–瓦尔季采庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lednice–Valtice Cultural Landscape</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nove-hrady-czech" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺韦赫拉迪</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nové Hrady</p>
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
