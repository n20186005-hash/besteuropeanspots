import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '若瑟兰城堡历史溯源｜布列塔尼石中传奇，罗昂家族七百年权力风云录',
  description: '探秘法国布列塔尼腹地的中世纪堡垒。穿越九座塔楼到文艺复兴立面的时光断层，解锁罗昂公爵家族的野心、信仰与毁灭，聆听欧石河畔的战争与诗歌。',
}

export default function ChateauDeJosselinHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '莫尔比昂省', href: '/destinations/europe' },
            { label: '若瑟兰城堡', href: '/attractions/chateau-de-josselin-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`若瑟兰城堡・Château de Josselin・法国・莫尔比昂省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国布列塔尼茂密的森林与静谧的欧石河湾深处，<strong>若瑟兰城堡</strong>如同一艘巨大的石船，已停泊了超过一千年。它并非仅供观赏的华丽宫殿，而是一部以花岗岩写就的、关于边境、权力与家族存续的残酷史诗。从诺曼底边陲要塞到煊赫公爵府邸，再到宗教战争中被刻意“斩首”的悲剧象征，它的每一道墙缝都渗着历史的重量。抛开游玩攻略，走进<strong>若瑟兰</strong>的尘封往事，遇见属于它的忠诚、背叛与不朽传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`若瑟兰城堡`} />
                <InfoRow label="英文名称" value={`Château de Josselin`} />
                <InfoRow label="正式名称" value={`Château de Josselin`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`莫尔比昂省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元1008年。一个名为<strong>戈兹林</strong>的布列塔尼贵族，在欧石河一处突兀的岩石岬角上，打下了第一根木桩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里地势险要，三面环水，是控制内陆水道与陆路交通的咽喉。他的目的非常直接：建造一座堡垒，抵御来自诺曼底方向的频繁侵扰。这座最初的<strong>木制城堡</strong>，名字便源于其建造者——<strong>“戈兹林之地”</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的布列塔尼语编年史模糊记载：“<strong>Glozelin</strong>在此岩石上立誓，他的后代将如石上橡树般扎根。”这或许是最初的地名灵感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，让这个名字真正流传并神圣化的，是一位传奇的隐修圣人。据说在同年，一位名叫<strong>若瑟林</strong>的康沃尔修士，渡海来到布列塔尼传教。他被此地的宁静与险峻吸引，在城堡附近的森林中搭建茅屋隐修。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的虔诚感动了领主戈兹林，后者慷慨捐赠土地，支持他建立修道院。圣人<strong>若瑟林</strong>的名望日益高涨，最终超越了最初的建造者。久而久之，城堡、小镇乃至这片土地，都被人们以圣人之名呼唤——<strong>“若瑟兰”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，这座军事堡垒从诞生之初，就与神圣的信仰紧密纠缠。权力与虔诚，如同城堡脚下欧石河与它的支流，在此交汇。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的木堡早已灰飞烟灭。<strong>12世纪</strong>，城堡被重建为坚固的<strong>石质要塞</strong>，拥有令人生畏的九座塔楼和高耸的城墙。它成为<strong>蓬蒂耶夫尔家族</strong>的核心堡垒，该家族是布列塔尼公国内最具权势的贵族之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，城堡迎来的第一次真正考验，源于一场决定布列塔尼命运的战争。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1341年，布列塔尼继承战争</strong>爆发。若瑟兰的女主人<strong>让娜·德·蓬蒂耶夫尔</strong>，声称拥有公国继承权。她的丈夫<strong>查理·德·布卢瓦</strong>率军支持她的 claim。城堡成为<strong>勃艮第派</strong>（支持让娜）的重要堡垒，与对手<strong>蒙福尔派</strong>展开长达二十余年的拉锯战。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位随军编年史家写道：“若瑟兰的塔楼在雾气中若隐若现，如同巨人的手指，扼守着通往布列塔尼心脏的道路。夺取它，就如同抓住了公国的咽喉。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争最终以蒙福尔派的胜利告终。但若瑟兰凭借其天险与坚固，历经多次围攻而未陷落，证明了其无可替代的战略价值。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到<strong>15世纪末</strong>。通过联姻，城堡转入<strong>罗昂家族</strong>手中。这个家族即将在城堡史上刻下最深的烙印。<strong>16世纪初期</strong>，时任领主<strong>让二世·德·罗昂</strong>，是一位深受意大利文艺复兴影响的亲王。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他没有拆除阴森的中世纪堡垒，而是做了一件极具象征意义的事：在面向城镇和欧石河的内侧，建造了一座令人惊叹的<strong>石灰岩文艺复兴立面</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>三层楼高的立面</strong>上，布满了精美的浮雕、优雅的拱窗、以及无数雕塑。家族徽章、象征美德的图案、还有滑稽的滴水兽，共同奏响了一曲石头的交响乐。这道立面，是罗昂家族向世界宣告其财富、权力与文化品味的宣言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一面是战争机器般冷峻的中世纪塔楼，一面是洋溢着人文之美的文艺复兴画廊——若瑟兰城堡本身，就此成为一个凝固的<strong>历史断层</strong>，见证了欧洲从黑暗征战走向文明曙光的剧烈转折。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若瑟兰的灵魂，与<strong>罗昂家族</strong>紧紧捆绑。这个家族出过元帅、亲王、公爵，更出过一位足以影响欧洲宗教格局的强人——<strong>红衣主教黎塞留的宿敌</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 亨利二世·德·罗昂：胡格诺派的“王公”与战士</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1579年</strong>，亨利出生在若瑟兰城堡。他是<strong>罗昂公爵</strong>，更是法国<strong>胡格诺派（新教）</strong> 在十七世纪初最杰出的军事与政治领袖，被信徒尊称为“<strong>王公</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的童年在此度过，城堡厚重的墙壁保护他免受宗教战争的直接冲击，也塑造了他坚韧的性格。成年后，他继承了父亲对新教事业的狂热忠诚。当法王路易十三的首相、<strong>红衣主教黎塞留</strong>决心压制胡格诺派的军事与政治特权时，亨利成为了抵抗的核心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位天才的战术家，在拉罗谢尔等战役中屡次让王室军队受挫。他的战场不在远处，就在他的家乡布列塔尼乃至整个法国西南部。若瑟兰城堡，曾是他策划军事行动、储存物资、乃至短暂休整的重要后方基地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他面对的黎塞留是一位无情的政治大师。1629年，孤立无援的亨利被迫签署《阿莱斯和约》，胡格诺派失去了所有的政治堡垒和军事权利，仅保留信仰自由。这位“王公”的雄心壮志宣告终结。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "亨利的回忆录中流露出一丝悲凉：“我战斗，并非为了一己之权，而是为了共同体（指胡格诺派）的生存之约。如今，契约已被撕毁，唯余信仰存于心中。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他晚年流亡海外，最终在瑞士为一场与他无关的战役而战死。他再也没能回到若瑟兰。但他的人生轨迹，深深地刻画了城堡在法国宗教冲突大时代中的角色——一个不屈的、最终失落的抵抗象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 安娜·德·罗昂-沙博：城堡的“拯救者”与沙龙女王</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说亨利二世代表了城堡刚烈的一面，那么<strong>十三世罗昂公爵夫人安娜</strong>（1648-1709），则赋予了城堡优雅与重生的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她嫁给罗昂家族时，城堡正因为其家族在<strong>投石党运动</strong>中站错队，而被王室下令“拆除”。不是完全摧毁，而是一种极具羞辱性的惩罚：<strong>削平所有塔楼，将其高度降到屋顶以下</strong>。城堡的九座塔楼被“斩首”，军事功能被彻底废除。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "安娜面对的是一个<strong>伤残的巨人</strong>。她没有放弃。她将余生精力投入到修复与美化城堡内部。她聘请艺术家装饰房间，建造了宏伟的<strong>马蹄形楼梯</strong>，将生活区域改造得舒适宜人。更重要的是，她以其智慧与魅力，在巴黎和若瑟兰经营着著名的文艺沙龙，重新为家族赢得了声誉与王室的谅解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她是一位真正的文化赞助人。在她的主持下，若瑟兰从一座濒临废弃的军事废墟，转变为一个充满艺术气息的贵族宅邸。城堡内至今珍藏的许多<strong>16世纪挂毯</strong>、家具和绘画，都得益于她的搜集与保护。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位拜访过她的文人写道：“在若瑟兰，公爵夫人让石头歌唱，让花园低语。她治愈了城堡的伤口，用的不是灰泥，而是诗歌、音乐与智慧。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "安娜的故事告诉我们，历史的摧毁力固然可怕，但人的坚韧与文化的力量，能够重新点燃废墟中的火焰。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在布列塔尼，没有传说的地方是不完整的。若瑟兰城堡的传说，与它的珍宝和一位女性守护者有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡内珍藏着一套无价的<strong>文艺复兴时期挂毯</strong>，描绘狩猎、田园等精美场景。其中最为人称道的一组，名为《<strong>独角兽与贵妇人</strong>》。民间传言，这些挂毯并非普通织物，它们被施予了古老的魔法。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，在宗教战争最黑暗的时期，城堡面临洗劫。时任女主人（人们常将她与安娜夫人形象重叠）为保护这些艺术珍品，在月圆之夜向布列塔尼的古老精灵祈祷。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "流传的民谣这样唱道：“<strong>欧石河的水，森林的风，请将色彩与线索藏入梦中。非以血统之后人之手，珍宝将永世不露真容。</strong>”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "精灵将挂毯的“本质”抽离，藏入了城堡地基的岩石与流经的河水中。而那些实物则变得看似普通，逃过了劫掠者的眼睛。传说，只有罗昂家族的直系后裔，才能真正“看见”并唤醒挂毯全部的光彩与魔力。外人只能欣赏其精美，却无法触及它内蕴的“灵”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，巧妙地解释了为何这些脆弱织物能历经战乱完好保存至今，也将家族的命运与遗产的神秘性紧紧相连。它让冰冷的石头与丝线，沾染了布列塔尼土地特有的、混合着凯尔特神秘的灵气。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客站在欧石河对岸，眺望那座<strong>塔楼低伏却身躯巍然</strong>、<strong>一面粗砺一面精美</strong>的若瑟兰城堡时，看到的不仅仅是一座美丽的建筑。它是一部立体的史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它见证了<strong>封建割据</strong>的刀光剑影，经历了<strong>文艺复兴</strong>的人文洗礼，承受了<strong>宗教战争</strong>的残酷撕裂，也沐浴过<strong>沙龙文化</strong>的优雅之光。从戈兹林的木桩到罗昂家族的画廊，从九塔峥嵘到“斩首”之辱，它的每一道疤痕都是一段故事，每一次修复都是一种坚持。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有凡尔赛的极致奢华，却有比凡尔赛更深厚的<strong>家族记忆沉淀</strong>。它小众，因为它真正的价值不在打卡清单上，而在耐心解读之中。读懂若瑟兰，便是读懂了布列塔尼贵族政治的纠葛、法国宗教改革的阵痛，以及文明如何在毁灭与重生间艰难传承。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它依然属于罗昂家族的后人，依然“活着”。这使它不同于博物馆里的标本，而是一段仍在呼吸的、绵延千年的家族与国家史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-dusse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于塞城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château d'Ussé</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/autoire-lot-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    欧
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">欧图瓦尔（奥图瓦尔峡谷与村庄）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Autoire (Cirque d'Autoire)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-pierrefonds" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮埃尔丰城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Pierrefonds</p>
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
