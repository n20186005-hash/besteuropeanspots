import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡格马林根城堡历史溯源｜多瑙河畔霍亨索伦家族的前世今生与战时秘闻',
  description: '探秘霍亨索伦家族另一座宫殿：从千年军事堡垒到法国维希政权最后巢穴。深入锡格马林根城堡，看尽权力更迭、家族兴衰与一段被遗忘的二战离奇史。',
}

export default function SigmaringenCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '德国', href: '/destinations/europe' },
            { label: '锡格马林根', href: '/destinations/europe' },
            { label: '锡格马林根城堡', href: '/attractions/sigmaringen-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡格马林根城堡・Sigmaringen Castle・德国・锡格马林根`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在德国西南部，多瑙河上游的嶙峋山岩上，锡格马林根城堡以其雄浑的塔楼和宫墙，定义了整座小城的天际线。它常被其声名显赫的“兄弟”——霍亨索伦城堡的光芒所掩盖，却藏着更为复杂幽微的传奇。这里不仅是霍亨索伦-锡格马林根支系长达六个世纪的权力中心，更在二战尾声，戏剧性地成为法国维希政权流亡政府的“幽灵首都”。抛开游玩攻略，走进锡格马林根城堡的尘封往事，遇见属于它的权谋、荣耀与荒诞。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡格马林根城堡`} />
                <InfoRow label="英文名称" value={`Sigmaringen Castle`} />
                <InfoRow label="正式名称" value={`Sigmaringen Castle`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`锡格马林根`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡格马林根的名字与这座城堡的命运紧密相连，甚至可以说，是先有了堡垒，才逐渐衍生出山脚下的城镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其起源可追溯至<strong>1077年</strong>，一个欧洲皇权与教权激烈碰撞的年份。神圣罗马帝国皇帝<strong>亨利四世</strong>正在进行他著名的“卡诺莎之行”，向教宗忏悔。而在帝国的西南边陲，为了巩固皇权、抵御地方诸侯，一座早期的堡垒在陡峭的多瑙河岩石上被建立起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Sigmaringen”这个名字，首次出现在文献中已是<strong>1077年</strong>。语言学家认为，它很可能源于一个古老的人名“Sigmar”，意为“著名的胜利者”，后缀“-ingen”则是阿勒曼尼语族中典型的“属于……人之地”。这暗示着，早在这座石制城堡建立之前，一位名叫西格玛的部族首领或贵族，或许已在此定居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的城堡并非为了居住的奢华，而是纯粹的战略要塞。它扼守着多瑙河上游的重要水道与通往瑞士的陆路商道，其险要地势“一夫当关，万夫莫开”。在接下来的几个世纪里，它像一颗坚韧的棋子，在施陶芬家族、符腾堡伯爵、哈布斯堡王朝等各方势力的棋盘上易手，其石墙一次次被加固、摧毁又重建，默默记录着上施瓦本地区的权力博弈。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡的历史，是一部浓缩的欧洲贵族生存史。它并非总是胜利者，却总能在灰烬中重生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个深刻印记是<strong>1348年</strong>的黑死病与大饥荒。这场席卷欧洲的浩劫严重削弱了当时城堡领主——哈布斯堡王朝的直属控制力。财政拮据的哈布斯堡<strong>阿尔布雷希特二世公爵</strong>，于<strong>1399年</strong>做出一个影响深远的决定：将锡格马林根领地抵押给<strong>霍亨索伦伯爵</strong>。从此，这个后来孕育了普鲁士国王和德意志皇帝的显赫家族，其一支血脉在此扎根，开启了长达六个世纪的统治。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个关键转折在<strong>1632年</strong>，残酷的三十年战争期间。代表新教势力的<strong>瑞典国王古斯塔夫二世·阿道夫</strong>的军队横扫德意志，锡格马林根城堡未能幸免。瑞典军队围攻并最终占领了城堡，其内部遭到了严重破坏与掠夺。战后的重建是缓慢而艰巨的，但霍亨索伦-锡格马林根家族借此机会，将原本的中世纪要塞逐步改建为更具居住性的文艺复兴风格宫殿，奠定了今日城堡外观的基础。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们看到城堡在燃烧，浓烟从塔楼升起。但伯爵大人发誓，石头会再次站起来。” —— 十七世纪当地编年史的模糊记载" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记来自<strong>拿破仑时代</strong>。<strong>1806年</strong>，在拿破仑的主导下，神圣罗马帝国解体，莱茵邦联成立。作为法国的盟友，霍亨索伦-锡格马林根家族不仅保住了领地，更被提升为拥有主权的<strong>亲王</strong>。城堡也随之进行了一次大规模的“现代化”改造，从防御工事彻底转变为彰显地位与财富的亲王官邸。这一时期修建的新哥特式厅堂和富丽堂皇的房间，至今仍是城堡游览的精华。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说霍亨索伦城堡见证了普鲁士的铁血崛起，那么锡格马林根城堡则孕育了一位在德意志统一进程中充满矛盾与悲剧色彩的亲王——<strong>卡尔·安东</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>卡尔·安东亲王</strong>出生于<strong>1811年</strong>，成长于城堡之内。他是一位受过良好教育、思想开明的统治者，痴迷于历史与艺术，城堡内庞大的武器库和艺术收藏多得益于他的搜集。然而，他身处的时代是德意志统一的前夜，夹在奥地利与普鲁士两大强国之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的政治生涯充满尴尬的平衡术。他曾担任普鲁士首相，内心却更认同“大德意志”方案，即包含奥地利在内的德意志联邦。<strong>1866年</strong>的普奥战争中，他的领地锡格马林根虽小，却被迫站队。最终，他无奈地支持了普鲁士。战争以普鲁士的完胜告终，他的儿子甚至在这场兄弟阋墙的战争中为普鲁士而战。战后，锡格马林根亲王国被并入普鲁士，卡尔·安东失去了统治权，只保留城堡作为家族私产。晚年的他退回城堡，在满屋的收藏与书籍中，凝视着一个旧时代的终结。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的立场如同一只站在两支交战军队之间的鹿。无论哪边射出的子弹，都可能击中我。” —— <strong>卡尔·安东</strong>亲王在私人信件中的感慨" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，城堡最离奇的名人篇章发生在二十世纪。<strong>1944年9月</strong>，随着盟军在诺曼底登陆后快速推进，法国的纳粹傀儡政权——维希政府濒临崩溃。在希特勒的命令下，维希政府首脑<strong>贝当元帅</strong>及其政府成员、家属、仆从乃至整个法国法西斯民兵组织，总计近<strong>6000人</strong>，被整体“搬迁”至锡格马林根城堡及小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一夜之间，这座多瑙河畔的德国小城，变成了一个流亡的“法国政府”所在地。城堡成了贝当及其总理<strong>皮埃尔·赖伐尔</strong>的官邸。小镇的旅馆、学校、民宅被腾空，塞满了法国难民。他们在此建立了一个畸形的“流亡社区”，甚至有法国的报纸、电台和行政机构在此运转，直到<strong>1945年4月</strong>被法国军队解放。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这其中，还有一位特殊的“访客”——<strong>莫里斯·库夫·德姆维尔</strong>。他表面是维希政府外交部的年轻官员，实则是戴高乐“自由法国”派来的秘密情报员。他潜伏在城堡这个“敌营心脏”，将流亡政府的动态源源不断传回伦敦。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“锡格马林根成了一个可悲的舞台剧布景。贝当像个幽灵，在挂满霍亨索伦家族肖像的走廊里徘徊。我们都在等待终场的帷幕落下。” —— <strong>莫里斯·库夫·德姆维尔</strong> 后来的回忆" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如同所有古老的城堡，锡格马林根的石头也浸染着传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的是关于“白女士”的幽灵。传说她是一位中世纪领主的女儿，与一位地位低微的骑士相爱，遭到父亲强烈反对。盛怒的领主将骑士派往一场必死的征战，并将女儿囚禁在城堡最高的塔楼。得知爱人战死后，少女从塔楼纵身跃入多瑙河。自此，每逢月圆之夜或家族遭遇变故前，一个身着白裙的幽影便会出现在城堡的走廊或塔楼窗口，无声地徘徊，被当地人视为守护家族但也预示不幸的灵体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则关于城堡地下纵横交错的秘密通道。这些确实存在的通道，一部分用于战时转移和补给，但在民间想象中，它们被赋予了更多神秘色彩。有故事说，其中一条最隐秘的通道直接通往数公里外的修道院，不仅用于军事，也曾是家族成员私下前往祷告或幽会的路径。还有传言称，在拿破仑战争时期，城堡的宝藏通过这些通道被秘密转移，至今仍有部分未被发现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，为城堡冷硬的石墙增添了人性的温度与神秘的雾气，也让参观者在仰望其宏伟时，多了一份倾听低语的耐心。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客乘船沿多瑙河而来，或从火车站步行而上，仰望那座仿佛从岩石中生长出来的庞大建筑群时，他们看到的不仅仅是一座美丽的宫殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一本立体的史书，书页由砂岩砌成。从神圣罗马帝国的边疆哨卡，到霍亨索伦家族旁支经营六个世纪的权力基地；从拿破仑时代抬升的亲王国中心，到二战末期那场荒诞政治闹剧的核心舞台——锡格马林根城堡见证了欧洲权力结构的每一次细微颤抖与剧烈地震。它不像新天鹅堡那样童话，也不像霍亨索伦城堡那样充满军国主义的威严，它的魅力正在于这种复杂的“层叠感”：每一代主人都在前人的基础上添加自己的印记，每一场历史风暴都在这里留下了或深或浅的刻痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂锡格马林根，便是读懂欧洲中小贵族在历史洪流中如何生存、适应、最终汇入民族国家浪潮的故事；也是读懂历史如何时而严肃、时而讽刺地将截然不同的篇章，强行装订进同一座建筑里。在这里，历史不是遥远的回声，而是依然盘踞在塔楼尖顶与地下室阴影中的存在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、内部展厅打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ehrenbreitstein-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科布伦茨埃伦布赖特施泰因要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ehrenbreitstein Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/saalfelder-feengrotten" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨尔费尔德仙女石窟</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Saalfelder Feengrotten</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lichtenstein-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利希滕施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lichtenstein Castle</p>
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
