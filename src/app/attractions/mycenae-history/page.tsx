import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迈锡尼历史溯源｜青铜时代的权力中心与荷马史诗的传奇真相',
  description: '深入希腊伯罗奔尼撒，探索荷马史诗中阿伽门农的王国。揭秘迈锡尼文明兴衰、狮子门秘密与史诗背后的真实历史。小众深度历史之旅。',
}

export default function MycenaeHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '伯罗奔尼撒', href: '/destinations/europe' },
            { label: '迈锡尼', href: '/attractions/mycenae-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迈锡尼・Mycenae・希腊・伯罗奔尼撒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在希腊伯罗奔尼撒半岛起伏的山峦间，有一片荒芜的山丘，它的名字叫迈锡尼。对于世界而言，它不只是几处断壁残垣，更是一个文明时代的代名词——<strong>迈锡尼文明</strong>。这里是<strong>荷马史诗</strong>中“多金的”迈锡尼，是远征特洛伊的希腊联军统帅<strong>阿伽门农</strong>的故乡。当十九世纪的考古镐敲开这片沉睡的土层，一段被诗篇包裹的青铜霸权史，才逐渐褪去神话外衣，露出惊人真容。抛开游玩攻略，走进迈锡尼的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迈锡尼`} />
                <InfoRow label="英文名称" value={`Mycenae`} />
                <InfoRow label="正式名称" value={`Mycenae`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`伯罗奔尼撒`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迈锡尼并非凭空诞生。根据现代考古学推断，这片山丘在<strong>新石器时代</strong>（约公元前6000年）就已有人类活动的痕迹。但真正让“迈锡尼”之名响彻地中海的，是大约在<strong>公元前1600年</strong>，一群操原始希腊语的印欧部落在此建立的强大王国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的选址极具战略眼光。它坐落在两座陡峭山峰之间的山脊上，居高临下，控制着连接阿尔戈斯湾与科林斯地峡的交通要道。这种易守难攻的位置，是它日后成为军事与权力中心的地理基石。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古希腊旅行家<strong>保萨尼亚斯</strong>在公元二世纪游历至此，他记载了一个传说：英雄<strong>珀耳修斯</strong>，杀死美杜莎后，在旅途中丢失了剑鞘（mykes）上的蘑菇状（mykes在希腊语中亦有“蘑菇”之意）饰扣。当他在这里找到时，认为这是神谕，于是建立了城市，并命名为“迈锡尼”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于其名，除了这个浪漫的传说，更可能与希腊语中的“mykes”（蘑菇，也指山峰）有关，形象地描绘了它所在的锥形山丘。在<strong>线形文字B</strong>（迈锡尼希腊语使用的文字）的泥板文书中，它被称为“<strong>Mukānai</strong>”。从一个小小的山顶聚落，到控制整个伯罗奔尼撒乃至爱琴海大片区域的权力中枢，迈锡尼的崛起，标志着一个以武力、贸易和宏伟建筑为特征的青铜时代晚期的来临。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迈锡尼的历史印记，深深刻在它巨大的石头里。这里没有轻巧的柱廊，只有彰显着原始力量和永恒野心的巨石建筑，无声地诉说着一个“巨人时代”的辉煌与陨落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是<strong>狮子门</strong>的建造（约公元前1250年）。这不仅是城堡的主入口，更是一个强大的政治宣言。重达20吨的门楣巨石之上，是欧洲现存最古老的纪念性雕塑：两只对称的母狮（一说雌狮）护卫着一根象征宫殿权力的米诺安式圆柱。它们肌肉紧绷，姿态威严，空洞的眼眶曾可能镶嵌着宝石。这道门的落成，标志着迈锡尼王国在<strong>公元前13世纪</strong>达到了权力的顶峰。它不是为了美学，而是为了震慑——震慑敌人，也震慑臣民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过狮子门，沿着宽阔的斜坡向上，便是<strong>王宫</strong>的遗址。这里曾是权力的心脏，拥有着被称为“<strong>麦加伦</strong>”的中央大厅，国王在此设宴、议事、接受贡品。宫殿的墙壁曾装饰着绚丽的壁画，描绘着战争、狩猎与神祇。然而，这宏伟的景象在<strong>约公元前1200年</strong>突然中断。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "考古学家在宫殿遗址发现了大量被焚毁的痕迹，以及散落的珍贵物品。这指向了一场突如其来的暴力毁灭。究竟是内部的叛乱，外部的“海上民族”入侵，还是系统性的社会崩溃？这至今仍是青铜时代晚期文明“大崩溃”的最大谜团之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道深刻的印记，是城外山坡上壮观的<strong>圆形墓冢A</strong>。其中包括著名的“<strong>阿特柔斯宝库</strong>”（又称阿伽门农之墓）。这座建于<strong>公元前1300年左右</strong>的蜂巢状穹顶墓，其建筑技艺令人匪夷所思。巨大的石块被精密切割，层层叠涩，形成一个高达13.5米、直径14.5米的完美拱顶，在之后的一千多年里都无人能够超越。它并非隐蔽的陵寝，而是一座在地表彰显无上王权的纪念碑。它的建造，宣告了迈锡尼的国王已将自己视为与神祇平起平坐的统治者。然而，当这座墓在建成后不久便被洗劫一空，其辉煌与随后的空虚，恰恰成了迈锡尼文明骤然衰落的隐喻。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "提到迈锡尼，无法绕开两位名人：一位是神话中的国王，另一位则是将他“发掘”出来的现代考古狂人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>海因里希·施里曼</strong>，这位德国商人和业余考古学家，是让神话照进现实的关键人物。他并非科班出身，却对《荷马史诗》有着近乎偏执的信仰。他坚信特洛伊和迈锡尼不是诗人的虚构，而是真实的历史。在成功发掘特洛伊之后，他于<strong>1876年</strong>将目光投向了迈锡尼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施里曼的考古方法以今天的标准来看堪称粗暴。他雇用了上百名工人，在山顶大规模开挖壕沟，目标是直接找到史诗中描述的王宫核心。然而，命运给了他更惊人的馈赠。在狮子门内不远处，他发现了<strong>圆形墓冢A</strong>——一个由竖立的石板围成的圆圈，圈内有六座竖井墓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当他打开这些墓穴时，眼前的景象让世界震惊。墓中堆满了令人瞠目的金银财宝：打造精美的青铜剑、镶满黄金与宝石的匕首、数百枚黄金打造的玫瑰形饰板、以及一系列惊世骇俗的<strong>黄金葬礼面具</strong>。最著名的，莫过于那副被施里曼称为“<strong>阿伽门农面具</strong>”的黄金面罩。虽然现代考古证实，这副面具的年代比特洛伊战争传说中的阿伽门农要早三四百年，但它所代表的无上王权与奢华，完美印证了荷马对“多金的迈锡尼”的描述。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "施里曼在给希腊国王的电报中激动地写道：“我凝视着阿伽门农的脸庞！”尽管年代有误，但这一发现无疑确立了迈锡尼作为青铜时代高级文明的中心地位。施里曼的发现，极大地挑战了当时学术界认为希腊历史始于古典时代的观点，将希腊文明的源头向前推进了整整一千年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与迈锡尼紧密相连的“名人”，正是史诗中的<strong>阿伽门农</strong>。在《伊利亚特》中，他是“人民的国王”，率领着来自希腊各城邦的庞大舰队远征特洛伊，只为夺回被帕里斯拐走的弟媳海伦。他性格复杂，既有王者的威严与果决，也有自私与傲慢，甚至因为争夺女俘而与大英雄阿喀琉斯爆发激烈冲突，几乎导致联军内讧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，阿伽门农的传奇在胜利归来时达到了悲剧的高潮。根据后来希腊悲剧诗人的演绎，他带着特洛伊的公主卡珊德拉回到迈锡尼，却死在了妻子<strong>克吕泰涅斯特拉</strong>和其情夫<strong>埃癸斯托斯</strong>设下的阴谋中——在沐浴时被网罩住，惨遭杀害。这个关于背叛、复仇与家族诅咒的故事，经由<strong>埃斯库罗斯</strong>的悲剧《阿伽门农》而流传千古，让迈锡尼这个名字永远笼罩在一种英雄式的悲剧氛围之中。施里曼的发掘，在某种意义上，是为这位悲剧英雄找到了一个“真实”的舞台。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在考古学家到来之前，迈锡尼的传说早已在民间流传了数千年。这些传说将冰冷的历史巨石，染上了浓烈的情感与神秘色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最核心的传说自然是<strong>阿伽门农的诅咒</strong>。故事追溯到阿伽门农的祖先<strong>坦塔罗斯</strong>和<strong>珀罗普斯</strong>，他们因亵渎神祇而招致灾祸。诅咒在阿伽门农的父亲<strong>阿特柔斯</strong>这一代达到高潮：为报复弟弟提厄斯忒斯勾引妻子，阿特柔斯烹煮了弟弟的儿子们并设宴让他吃下。这骇人听闻的罪行，让诅咒深入骨髓。因此，阿伽门农的悲剧被杀，以及其后子女<strong>俄瑞斯忒斯</strong>和<strong>厄勒克特拉</strong>为父报仇弑母的连锁悲剧，都被视为这个家族无法摆脱的血腥宿命。当地老人会指着荒废的宫殿遗址说，在风大的夜晚，仿佛还能听到阿伽门农临死前的怒吼，或是克吕泰涅斯特拉悔恨的哭泣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与巨大的<strong>“阿特柔斯宝库”</strong> 有关。在奥斯曼帝国统治时期，这座宏伟的建筑被当地人称为“<strong>阿伽门农的宫殿</strong>”或“魔鬼的谷仓”。流传着一个故事：古代有一位巨人国王，他将无尽的财宝藏于这座石山之中，并设下了强大的咒语保护。任何试图闯入窃取宝藏的人，都会在触碰到宝藏的瞬间变成石头，永远守护在此。这个传说巧妙地解释了为何如此显眼的建筑内部却空空如也，也为其增添了一层神秘的守护色彩。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "十九世纪初，一位英国旅行家记录下他与当地牧羊人的对话。牧羊人指着狮子门对他说：“看那两只没有头的狮子，它们是古老的国王派来的守卫。它们的头不是丢了，而是在月光下的某些夜晚，会转过来，用燃烧的眼睛巡视这片土地，防止古老的诅咒被再次唤醒。”" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的迈锡尼，烈日灼烤着泛白的巨石，荒草在城墙缝隙中摇曳。站在这片寂静的废墟上，你感受到的并非破败，而是一种磅礴的历史回响。这里每一块经过万斤巨力垒砌的石头，都在诉说着人类早期对权力、永恒与不朽的极致追求。它连接着神话与历史，英雄史诗与考古实证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂迈锡尼，意味着你触碰到了欧洲文明的第一个高峰。它不仅是希腊古典时代的序幕，更是整个西方文明记忆深处的一个厚重原点。阿伽门农的传说或许掺杂了文学的渲染，但狮子门的雄姿、蜂巢墓的鬼斧神工、以及那些精美绝伦的金器，无不真实地揭示了一个曾经高度组织化、技术精湛且崇尚武力的复杂社会。当你穿行其间，便是在进行一场时空对话，与三千多年前的王者、工匠、战士乃至诗人荷马的想象相遇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有雅典卫城的优雅和谐，却有一种更原始、更直击心灵的力量感。它提醒我们，在哲学与民主诞生之前，这片土地上曾上演过关于野心、荣耀与毁灭的青铜史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stone-labyrinth-ghost-bay" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巨石迷宫与幽灵海湾</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Stone Labyrinth & Ghost Bay</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chania-old-town-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尼亚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chania Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/oracles-spring-prehistoric-cliff-settlement" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣谕之泉与远古崖居</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oracle's Spring and Prehistoric Cliff Settlement</p>
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
