import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '恰赫季采城堡历史溯源｜“血腥伯爵夫人”前世今生与黑暗传说',
  description: '深入斯洛伐克荒山，探访恰赫季采城堡废墟。这里不仅是边境要塞，更是欧洲史上最骇人传说——“血腥伯爵夫人”伊丽莎白·巴托里的囚禁地与死亡地。揭开黑暗历史的面纱。',
}

export default function CachticeCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '恰赫季采城堡', href: '/attractions/cachtice-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`恰赫季采城堡・Čachtice Castle・斯洛伐克・恰赫季采镇， 特伦钦州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中欧的喀尔巴阡山麓，一座城堡的废墟永远与一个名字捆绑在一起：<strong>伊丽莎白·巴托里</strong>。她被誉为史上杀人数量最多的女性连环杀手，其传说比德古拉伯爵更令人毛骨悚然。恰赫季采城堡，这座曾俯瞰匈牙利王国边境的坚固堡垒，因此从一部军事史诗，扭曲成了一部哥特式的恐怖寓言。它的石墙不再诉说骑士的荣耀，只回荡着关于青春、鲜血与永恒生命的黑暗低语。抛开游玩攻略，走进恰赫季采的尘封往事，遇见属于它的时光、权谋与惊世传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`恰赫季采城堡`} />
                <InfoRow label="英文名称" value={`Čachtice Castle`} />
                <InfoRow label="正式名称" value={`Čachtice Castle`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`恰赫季采镇， 特伦钦州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "恰赫季采城堡的根源，深植于中世纪匈牙利王国动荡的边境线上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的建立可以追溯到 <strong>13世纪中期</strong>。<strong>1241-1242年</strong>，蒙古铁骑如风暴般席卷东欧，所到之处满目疮痍。王国北部的防御体系在战火中崩坏。为了重建秩序，巩固王权，国王<strong>贝拉四世</strong>颁布了一系列“城堡建设”特许状。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "恰赫季采，正是在这样的背景下诞生。它最初的主人，是来自意大利的贵族<strong>卡西家族</strong>。城堡选址极具战略眼光，雄踞于一座海拔375米的石灰岩山丘之上，俯瞰着下方的瓦赫河谷与通往摩拉维亚的古老商路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字“Čachtice”，很可能源于古老的斯拉夫语词汇，与“看守”、“瞭望”或“边界”相关，精准地定义了它的初始使命——一座守护王国西北门户的边防要塞。在接下来的几个世纪里，它就像一颗楔入边境的钉子，目睹了王朝更迭、贵族纷争与外部入侵，默默积累着自己的历史层次。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的历史并非只有黑暗一章。在成为恐怖代名词之前，它首先是一部砖石写就的边境史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>13-15世纪：边境堡垒的荣光</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的城堡结构相对简单，核心是坚固的罗马式塔楼。随着卡西家族及其后续所有者——包括强大的<strong>恰基家族</strong>——的不断扩建，它逐渐发展成为拥有上、下城堡区的复合防御体系。高耸的城墙、深邃的护城河、层层设防的城门，使其成为令敌人望而生畏的存在。它成功抵御了多次外部侵袭，包括<strong>15世纪胡斯派军队</strong>的猛烈进攻，证明了其卓越的军事价值。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪：对抗奥斯曼的烽火</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪</strong>是匈牙利王国最黑暗的时期之一。<strong>1526年莫哈奇战役</strong>后，王国分裂，中部被奥斯曼土耳其占领。恰赫季采所在的北部地区，成为了抵抗伊斯兰扩张的前线。城堡在此期间得到了进一步加强，适应火炮时代的防御工事被增建。它不仅是军事据点，也成为了周边地区贵族与平民在战乱时的避难所，其战略重要性达到了顶峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>18世纪：烈火与遗忘</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着奥斯曼威胁的消退与火药武器的革命性发展，这类高山城堡的军事意义急剧下降。<strong>1708年</strong>，在匈牙利反对哈布斯堡王朝的<strong>拉科齐独立战争</strong>期间，恰赫季采城堡遭到了致命一击。围攻的帝国军队最终用火炮和烈火将其攻克并付之一炬。自那以后，这座辉煌了四百多年的堡垒便被遗弃，任其风化崩塌，逐渐融入了山岩与荒草之中。它的军事篇章就此终结，而另一段更令人不寒而栗的“民间记忆”却开始发酵、蔓延。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“城堡的雄堞曾映照战旗，而今只余断壁残垣，在风中诉说被遗忘的守候。”" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "恰赫季采城堡之所以能突破历史的尘埃，在全球文化中留下印记，几乎完全归因于一位女性：<strong>伊丽莎白·巴托里</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 伊丽莎白·巴托里：血腥伯爵夫人</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>生平与羁绊</strong>：<strong>伊丽莎白·巴托里</strong>出生于<strong>1560年</strong>，来自匈牙利最显赫、最富有的家族之一。她嫁给了同样权势熏天的“匈牙利黑骑士”<strong>费伦茨·纳达斯迪</strong>。通过婚姻和继承，她成为了包括恰赫季采城堡在内广阔领地的女主人。她的丈夫常年领军在外对抗奥斯曼土耳其，伊丽莎白便独自管理着庞大的庄园与城堡网络。正是在丈夫去世（1604年）后，她长期居住的恰赫季采及周边城堡，成为了后来所有恐怖传说的中心舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>骇人传说与历史疑云</strong>：关于她的核心传说是：为了永葆青春美貌，她相信并实践用少女的鲜血沐浴。传说中，成百上千的年轻女仆、农家少女被诱骗至城堡地牢，遭受酷刑、放血而亡。这一形象如此深入人心，使她获得了“血腥伯爵夫人”、“恰赫季采女巫”等称号，其恐怖程度远超虚构的德古拉。然而，现代历史学家对此提出了质疑。很多学者认为，对她的指控可能是一场<strong>政治阴谋</strong>。当时，新即位的国王<strong>马蒂亚斯二世</strong> 财政拮据，而伊丽莎白拥有巨额财富且是寡妇。通过将她定罪，国王可以没收其财产，并打击势力过大的巴托里家族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>审判与囚禁</strong>：<strong>1610年</strong>，在搜集了超过300名“证人”的证词后（其中许多是在酷刑下获得），伊丽莎白的表亲、帕拉丁伯爵<strong>乔治·图尔佐</strong>率兵突袭了恰赫季采城堡。据称当场发现了濒死的少女。伊丽莎白本人并未被公开审判（或许是出于其高贵出身），而是由一个小型法庭迅速定罪。<strong>1611年</strong>，她被判处终身监禁。她被囚禁的地点，正是她曾经的权力中心——恰赫季采城堡。囚室是城堡塔楼上一个没有窗户、门被砖石封死的房间，仅留一个小洞递送食物。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据当时的记录描述：“她被关押在一个与世隔绝的房间里，直到生命的最后一刻，她都在那黑暗中反思自己的罪行。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>死亡与痕迹</strong>：<strong>1614年8月21日</strong>，卫兵通过送食口发现，时年54岁的伊丽莎白面朝下倒在冰冷的地板上，已经死去。由于她声名狼藉，家族最初只想将她悄悄埋葬在恰赫季采的教堂。但愤怒的民众阻止了此事。最终，她的遗体被转移并安葬在她出生的<strong>埃切德</strong>，但具体墓穴早已不可考。今天，城堡废墟中那间传说中的囚室，以及地下那些阴森的地牢空间，依然是游客寻找历史颤栗感的焦点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 费伦茨·纳达斯迪：被阴影笼罩的“黑骑士”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊丽莎白的丈夫<strong>费伦茨·纳达斯迪</strong>，本身是一位杰出的军事统帅。他因在与奥斯曼的战斗中勇猛无情而获得“黑骑士”的绰号。历史记载显示，他本人也以对待仆人和战俘残酷而闻名。有研究者认为，城堡内某些骇人听闻的酷刑装置（如著名的“铁处女”）可能最初与他有关，或是在他影响下形成的风气。当他于1604年死于战场后，失去制衡的伊丽莎白，其行为可能变得更加极端，也为后来的所有指控埋下了伏笔。他虽非传说的主角，却是造就那段黑暗历史不可或缺的背景板。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于恰赫季采的传说，早已超越了史书的记载，融入了斯洛伐克民间文化的血液，成为一种集体记忆中的恐怖象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最核心的传说自然是“鲜血浴”。故事被描绘得极具画面感：年老的伯爵夫人对镜自怜，偶然发现一位年轻女仆的鲜血溅到自己手上，皮肤竟显得格外娇嫩。从此，她便在城堡深处建造了专门的“浴池”，定期用掳掠来的少女的鲜血填满，以沐浴来“吸收”她们的青春与活力。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间歌谣这样唱道：“恰赫季采的高塔下，泉水不再清澈，被染成了红色；少女的哭泣在长廊回荡，只为换取伯爵夫人镜中一笑。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，还有许多衍生传说。有人说，在月圆之夜，城堡废墟上会浮现出伊丽莎白穿着染血白衣的幽灵，仍在寻找着她的“青春之源”。也有人说，被杀害的少女们的灵魂无法安息，化作了环绕城堡飞旋的乌鸦，发出凄厉的鸣叫。甚至城堡周边的森林和道路，也流传着“不要在天黑后独自经过恰赫季采”的古老告诫。这些传说，无论有多少虚构成分，都牢牢地将城堡与一种超自然的恐怖氛围绑定在一起，使其历史废墟的属性之外，更增添了一层民俗怪谈的神秘色彩。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的恰赫季采城堡，仅剩下一片被森林侵蚀的断壁残垣。攀登至废墟顶端，视野开阔，风景壮丽，但游客心中萦绕的，却很难只是对中世纪建筑的凭吊。它强迫我们思考：历史在何处终结，传说又从何处开始？权力、性别、恐惧与叙事如何交织，共同塑造了一个近乎神话的恶魔形象？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡是一座双重的纪念碑。它既是匈牙利王国边境防御体系的物理遗存，见证了真实的烽火与王朝的博弈；同时，它也是欧洲集体潜意识中一个黑暗角落的投射物，是“女性邪恶”原型与贵族堕落神话的终极载体。参观这里，不是一次轻松的郊游，而是一次直面历史复杂性与人性幽暗面的沉思之旅。在这里，石头的冰冷与传说的灼热形成了奇异对比，提醒我们，最令人战栗的恐怖，往往诞生于真实历史的褶皱之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何前往废墟、最佳徒步路线、开放时间与周边景点全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trencin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特伦钦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trenčín Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bardejov-old-town-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尔代约夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bardejov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dobinska-ice-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多布希纳冰洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dobšinská Ice Cave</p>
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
