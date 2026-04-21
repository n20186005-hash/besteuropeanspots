import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '切尔塔尔多历史溯源｜薄伽丘故乡的红砖山城前世今生与中世纪传奇',
  description: '登上托斯卡纳的时光缆车，探访《十日谈》作者薄伽丘的永恒故乡。一座红砖砌成的空中山城，封存着黑死病的记忆、美第奇的权杖与文艺复兴的微光。',
}

export default function CertaldoBoccaccioHillTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '托斯卡纳', href: '/destinations/italy' },
            { label: '切尔塔尔多', href: '/attractions/certaldo-boccaccio-hill-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`切尔塔尔多・Certaldo・意大利・托斯卡纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在托斯卡纳起伏的丘陵间，有一座城，它的命运与一位文豪的名字紧密交织——<strong>乔万尼·薄伽丘</strong>。这里不是佛罗伦萨那样的艺术殿堂，而是一座凭借古老缆车才能抵达的“空中之城”，通体由温暖的赭红色砖石砌成。它安静地矗立在埃尔萨河谷之上，仿佛一本合上的中世纪手抄本，书页间弥漫着葡萄酒、橄榄油与古老传说的气息。抛开游玩攻略，走进<strong>切尔塔尔多</strong>的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`切尔塔尔多`} />
                <InfoRow label="英文名称" value={`Certaldo`} />
                <InfoRow label="正式名称" value={`Certaldo`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`托斯卡纳`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "切尔塔尔多的名字，如同一把钥匙，开启了它的身世之谜。其词源很可能源于拉丁语“<em>Cerrus Altus</em>”，意为“高处的橡树林”，精准描绘了它最初的模样——一座建立在长满橡树的山丘上的定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，另一些历史语言学家则听到了更古老的回响。他们认为“Certaldo”可能源自哥特语或伦巴第语，与“围墙”、“封闭之地”相关，暗示了它作为军事据点的原始功能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇的雏形至少可以追溯到<strong>罗马时代</strong>，但真正使其轮廓清晰的，是<strong>中世纪早期</strong>。在混乱的“黑暗时代”，人们为寻求安全，纷纷迁往易守难攻的高地。切尔塔尔多山顶的堡垒与围墙，便是在这样的背景下逐渐成型。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，它属于强大的<strong>阿尔伯蒂伯爵</strong>家族。到了<strong>12世纪</strong>，随着通往罗马的<strong>弗朗西珍纳古道</strong>在附近经过，这座山城的战略与经济地位陡然提升。它不再仅仅是一个堡垒，更成为了控制交通要道、征收关税的咽喉。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份12世纪的古老地契首次明确提到了“<em>Certaldum</em>”这个名字，将其标注为一座拥有城堡和司法权的“堡镇”。从此，它正式登上了托斯卡纳的历史舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "红砖，成为了这座城最鲜明的胎记。并非出于美学选择，而是就地取材的结果——山下河谷中丰富的粘土，被烧制成砖，一块块垒起了教堂、宫殿与民居，也赋予了切尔塔尔多那独一无二、温暖而统一的赭红色调。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "切尔塔尔多的历史，是一部浓缩的托斯卡纳地方政治史。<strong>14世纪</strong>，它落入佛罗伦萨共和国手中，成为其对抗锡耶纳共和国的前哨站。城墙被加固，统治官邸被建立，一切都服务于战争与统治。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正刻入城市肌理与集体记忆的，是<strong>1348年</strong>那场席卷欧洲的<strong>黑死病</strong>。这场浩劫夺走了镇上近半数人口，荒芜的街道与废弃的屋舍成为常态。正是这场瘟疫，为薄伽丘《十日谈》提供了最残酷也最真实的背景。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "薄伽丘在《十日谈》序言中写道：“这场可怕的瘟疫……通过接触在健康人之间传播，仿佛干柴靠近烈火……城市的辉煌化为废墟，仿佛无人之境。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瘟疫过后，城市缓慢恢复。<strong>15世纪</strong>，随着<strong>美第奇家族</strong>在佛罗伦萨的崛起，切尔塔尔多也被纳入其彀中。美第奇统治者不仅修缮了古老的<strong>普雷托里奥宫</strong>（Palazzo Pretorio），更将其 facade 装饰上了他们家族及其盟友的彩绘纹章盾牌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些密密麻麻、色彩斑斓的盾牌，至今仍布满宫殿外墙，宛如一部石头与灰泥制成的“纹章教科书”，无声诉说着权贵间的联姻、忠诚与权力博弈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转至<strong>第二次世界大战</strong>。<strong>1944年</strong>，撤退的德军为阻止盟军推进，炸毁了连接山下新城与山上古城的唯一道路通道。这场破坏，意外地“冻结”了古城的时间。战后的重建并非复原道路，而是别出心裁地修建了一条<strong>缆索铁路</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这个不得已的工程，造就了今日游客独特的登城体验——乘坐缓慢的红色缆车，悠悠攀升，仿佛一趟脱离现世、驶往中世纪的时空之旅。战争的创伤，最终化为了守护古城韵味的契机。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>乔万尼·薄伽丘（Giovanni Boccaccio，1313-1375）</strong>，这位文艺复兴的巨擘、但丁的追随者、彼特拉克的挚友，是切尔塔尔多无法绕过的灵魂。尽管他可能生于佛罗伦萨或巴黎（其身世仍有争议），但他始终将自己视为“<strong>切尔塔尔多公民</strong>”，并将这里选为自己人生的终点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "薄伽丘的一生，与这座山城有着深刻的羁绊。他的父亲是佛罗伦萨的商人，但家族在切尔塔尔多拥有房产与土地。年轻的薄伽丘曾在此居住，山谷的宁静与市井的鲜活，或许最早滋养了他的观察力与叙事才华。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的不朽之作《<strong>十日谈</strong>》虽以佛罗伦萨瘟疫为背景，但字里行间那种对世俗生活的热爱、对人性百态的刻画，无不带有托斯卡纳乡间浓郁、质朴的生命力。书中那些机智的市民、勇敢的妇女、狡黠的僧侣，其原型或许就来自切尔塔尔多的广场与街巷。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在《十日谈》的第六天故事中，他甚至直接让一位人物说道：“我来自切尔塔尔多，一个你们可能都知道的小地方。” 这近乎是一种对故乡的深情告白。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "薄伽丘晚年潜心研究古典学术，但生活困顿。<strong>1373年</strong>，他被佛罗伦萨共和国任命为“但丁《神曲》公开讲座教授”，这是史上第一次以俗语讲解经典。然而，健康很快恶化。他选择回到切尔塔尔多，在家族的旧宅中度过了最后时光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1375年12月21日</strong>，薄伽丘于此逝世。他的葬礼简朴而特别。根据他的遗愿或当地古老习俗，他的遗体被安放在一座“<strong>诗人之椅</strong>”上——那是一把巨大的石椅，位于他故居附近的小广场。人们抬着坐在椅中的他，缓缓穿过他熟悉的街道，完成最后的巡礼，而后才下葬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，这座石椅的复制品仍静置在城中，而他的真实故居（Casa di Boccaccio）已成为一座纪念馆。馆内藏有大量《十日谈》的古本，墙壁上描绘着他生平事迹的壁画。最动人的是，从故居的窗户望出去，正是那片他深爱过的、起伏的托斯卡纳丘陵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与切尔塔尔多紧密相连的人物是<strong>圣多纳托</strong>。这位<strong>4世纪</strong>的殉道者，是小镇的守护神。每年八月，盛大的 <strong>“圣多纳托节”</strong> 都会上演一场名为“<strong>Bravio delle Botti</strong>”的独特赛事。这不是赛马，而是<strong>滚酒桶比赛</strong>！" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "各街区派出的壮汉，推着重达数百公斤的木质葡萄酒桶，在古城陡峭的砖石街道上狂奔竞速。这项充满力量与欢乐的民俗，其起源已不可考，但它将切尔塔尔多的两大灵魂——中世纪的虔诚与托斯卡纳的葡萄酒文化——完美地融合在了一起，年复一年，活力不息。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在切尔塔尔多，历史与传说如藤蔓般交织。关于城市的奠基，有一个充满神话色彩的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在遥远的过去，一位名叫 <strong>“Certa”</strong> 的贵族女子，为了躲避战乱或家族的迫害，率领她的追随者逃到了这座易守难攻的山丘。她以其智慧与勇气，在此建立了第一个社区，并用她的名字为这个地方命名——“Certa”的“高地”（aldo）。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人有时会低声讲述：“看那些最古老的墙基，石头里还留着Certa夫人的指纹。当月光照在钟楼上，你或许能看见她巡视城墙的白色影子。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说，则与<strong>圣托马索教堂</strong>的钟声有关。教堂内曾有一口声音特别清越的钟，据说是在一场大旱时，由虔诚的居民捐出家中最后的银器熔铸而成。铸钟那夜，电闪雷鸣，人们看到一条银色的龙从天而降，盘绕在钟楼之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "钟铸成后，只要它一响，乌云便会聚集，甘霖随之降临。人们相信，那是银龙化为钟魂，永远守护着这片土地的风调雨顺。虽然后来古钟在战乱中损毁，但关于“银龙之钟”的故事，依然在夏夜的星空下代代相传。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "切尔塔尔多，是一座可以用所有感官阅读的“历史之城”。指尖划过的是粗糙温暖的红砖，耳畔回荡的是薄伽丘笔下故事的回声，鼻尖萦绕的是地窖陈酿的醇香。它没有文艺复兴巅峰的炫目杰作，却保有生活本身绵延不断的纹路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值，在于这种<strong>完整的沉浸感</strong>。缆车切断了现代交通的喧嚣，将你送入一个时间流速不同的空间。在这里，历史不是博物馆里冰冷的展品，而是窗前的一盆天竺葵，是巷道里追逐的孩童，是广场上永远坐着几位老人的石阶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂切尔塔尔多，便是读懂一种欧洲小镇的典型命运：从军事堡垒到宁静乡城，被大历史裹挟，又因祸得福地保存了自我。它提醒我们，伟大文明的星光，不仅闪耀于大都市的穹顶，也同样沉淀在这些沉默山城的每一块砖石之中，等待着有心人的聆听。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sant-agata-de-goti" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣阿加塔德戈蒂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sant‘Agata de’ Goti</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/narni-medieval-hill-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳尔尼古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Narni</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/volterra-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔泰拉古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Volterra</p>
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
