import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃希特纳赫历史溯源｜跳着舞去朝圣的圣城前世今生与威尔布罗德传奇',
  description: '探秘卢森堡千年圣城埃希特纳赫。这里不仅是本笃会精神摇篮，更因“跳跃的朝圣”闻名。跟随圣人威尔布罗德的足迹，解码中世纪欧洲的心脏跳动。',
}

export default function AbbeyOfEchternachHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '卢森堡', href: '/destinations/europe' },
            { label: '埃希特纳赫', href: '/destinations/europe' },
            { label: '埃希特纳赫修道院', href: '/attractions/abbey-of-echternach-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃希特纳赫修道院・Abbey of Echternach・卢森堡・埃希特纳赫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢森堡东部与德国接壤的宁静山谷中，有一座被誉为“欧洲跳动心脏”的千年小镇。它的名字——埃希特纳赫——与一位盎格鲁-撒克逊圣人、一座主宰了西欧中世纪文化命脉的修道院，以及一场持续了1300年、举世无双的“跳跃游行”紧密相连。这里不是普通的旅游点，而是一部用石头、羊皮纸和集体舞步写就的欧洲精神史。抛开游玩攻略，走进埃希特纳赫的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃希特纳赫修道院`} />
                <InfoRow label="英文名称" value={`Abbey of Echternach`} />
                <InfoRow label="正式名称" value={`Abbey of Echternach`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`埃希特纳赫`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃希特纳赫的故事，始于苏尔河畔的一次慷慨赠予。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间锚点在 <strong>698年</strong>。当时，这片土地属于一位名叫 <strong>伊尔敏</strong> 的法兰克贵族女性。她做了一个影响深远的决定：将自己在罗马别墅遗址上的大片地产，赠予一位来自遥远不列颠的传教士——<strong>圣威尔布罗德</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尔布罗德是谁？他是一位盎格鲁-撒克逊僧侣，被称为“弗里斯兰的使徒”，肩负着罗马教廷赋予的、在低地地区传播基督教的重任。他需要一座稳固的根据地。伊尔敏的赠地，恰逢其时。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“埃希特纳赫”这个名字本身，就藏着它的前世。它源于拉丁语 “<strong>Epternacum</strong>”，意指“埃普特河（今苏尔河）畔的定居地”。早在罗马时代，这里就已存在庄园。威尔布罗德接收的，正是这样一处融合了罗马文明遗产与蛮族土地资源的宝地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>706年</strong>，在墨洛温王朝宫相 <strong>丕平二世</strong> 的进一步支持下，威尔布罗德在此正式建立了一座本笃会修道院。这座修道院，就是日后一切传奇的起点。它并非诞生于荒原，而是植根于古典文明的废墟之上，被法兰克权贵的政治投资所浇灌，由一位充满远见的圣人亲手培育。一座注定不凡的“知识堡垒”与“朝圣中心”，就此在边境山谷中悄然孕育。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座修道院的围墙，见证了欧洲从黑暗走向文艺复兴的多个关键时刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：知识的灯塔与加洛林文艺复兴</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尔布罗德去世后，他的修道院并未沉寂，反而在 <strong>8世纪</strong> 至 <strong>9世纪</strong> 的加洛林王朝时期达到了第一个巅峰。它成为了欧洲最重要的<strong>手稿抄写与艺术中心</strong>之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的<strong>缮写室</strong>里，灯火长明。技艺精湛的僧侣们在此复制、装饰并创作了无数精美的泥金手抄本。其中，被誉为“埃希特纳赫福音书”的作品，以其华丽的装饰字母和插画，代表了加洛林艺术的最高成就。这些手稿不仅是宗教典籍，更是哲学、科学和文学知识的载体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们像种子一样，从这座山谷被带往帝国各地的教堂与宫廷，直接滋养了所谓的“加洛林文艺复兴”。在查理曼大帝统一文化与思想的蓝图中，埃希特纳赫修道院是一座耀眼的知识发电站。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：从辉煌到废墟的千年轮回</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪盛期，修道院因供奉创始人威尔布罗德的圣龛，成为重要的<strong>朝圣地</strong>。财富与影响力与日俱增。然而，命运在<strong>1794年</strong>被粗暴打断。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "法国大革命军队席卷而来。作为旧秩序象征的修道院被洗劫、解散，其庞大的建筑群被公开拍卖，部分被拆毁，石材流散四方。千年文化圣地，瞬间沦为废墟与仓库。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不仅仅是埃希特纳赫的悲剧，更是整个欧洲传统修道院制度在近代遭遇的冰山一角。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记三：重生与现代身份</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在<strong>19世纪后期</strong>。随着浪漫主义与历史保护意识的兴起，人们重新审视这座废墟的价值。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一场漫长而精心的重建工程开始了。今天我们所见的修道院建筑，主要是<strong>1862年</strong>后以新罗马式风格重建的成果。它不再是严格意义上的宗教社区，而化身为<strong>市政厅、博物馆和学校</strong>，以新的方式服务于公众。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从宗教圣地到革命标的，再到文化遗产，埃希特纳赫修道院的建筑肌理，清晰地铭刻着欧洲大陆近代史的剧烈变迁。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市与一位圣人的名字永远绑定——<strong>圣威尔布罗德</strong>。他的故事，是埃希特纳赫的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 圣威尔布罗德：从北海滩涂到卢森堡圣山</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约 <strong>658年</strong>，威尔布罗德生于诺森布里亚王国。他在爱尔兰的修道院接受了严苛的教育，那里是当时欧洲学习的灯塔。<strong>690年</strong>，他与一群志同道合的僧侣扬帆南下，目标是将基督教传入尚未皈依的弗里斯兰（今荷兰北部）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传教事业获得了罗马教皇的正式授权，这使他成为教皇在北方蛮族中的直接代表，地位非凡。在经历早期挫折后，<strong>698年</strong>伊尔敏的赠地为他提供了梦寐以求的稳定基地。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位中世纪编年史家这样描述他的选择：“他（威尔布罗德）没有选择繁华的都市，而是看中了这片宁静的河谷。这里有肥沃的土地供养僧侣，有河流运输物资，更有一种与世隔绝的宁静，适于祈祷与研习。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃希特纳赫，他建立了遵循本笃会规的社区。修道院不仅是传教大本营，更迅速发展为农业、手工业和教育的模范中心。他于 <strong>739年5月7日</strong> 在此去世，并葬于修道院教堂内。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的葬礼日，成为了后世一切传奇的起点。<strong>威尔布罗德被尊为圣徒</strong>，他的墓地吸引了全欧洲的朝圣者。中世纪传说中，他拥有治愈癫痫和神经疾病的神力，这种疾病在当时被称为“圣威尔布罗德之病”。朝圣者们相信，来到他的圣龛前，疾病便能痊愈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 遗产：圣像、庆典与不朽的纪念</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尔布罗德的物质遗产，首推他亲自奠基的修道院建筑群。尽管原貌已改，但其精神地基从未动摇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是他留下的非物质遗产——<strong>跳跃游行</strong>。这项活动最早可追溯至他逝世后的纪念活动，逐渐演变为祈求治愈的独特朝圣仪式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，在中世纪艺术中，威尔布罗德的形象经常出现。他通常被描绘成一位主教，手持一座教堂模型（象征他建立的修道院），脚下有时会踩着一条蛇或龙（象征他战胜异教）。这些圣像画广泛流传于卢森堡、德国和荷兰，巩固了他作为地区主保圣人的地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时至今日，埃希特纳赫的纹章上依然包含圣威尔布罗德的主教权杖。他的名字刻在城市的每一段历史叙述中。他不是遥不可及的云端圣人，而是这座城市可触可感的奠基之父。每一位跳着舞穿过小镇街道的参与者，都在用身体重复着对他的记忆。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃希特纳赫最绚丽的人文奇观，莫过于每年圣灵降临节星期二举行的 <strong>“跳跃游行”</strong> 。这并非普通的节庆，而是一个植根于深厚传说的“治疗仪式”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于其起源，最流行的传说与一场<strong>中世纪的家庭悲剧</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事说，很久以前，埃希特纳赫一位农民家庭深受“舞蹈病”（可能指某种癫痫或歇斯底里症）的折磨。家人向圣威尔布罗德祈祷，并许愿：若得治愈，他们将每年以舞蹈形式朝圣以示感恩。奇迹发生，病患痊愈。于是，这家人开始信守承诺，跳着舞前往圣人墓地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的奇特行为吸引了邻里加入，逐渐形成了传统。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地民谣如此唱道：“跳一跳，病痛消；圣威尔布罗德，请听我们祈祷。我们用脚步丈量虔信，用舞姿驱散魔魇。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个更古老的版本，则将源头直接指向<strong>威尔布罗德的葬礼队伍</strong>。传说在送葬时，抬棺者因道路崎岖而步履颠簸，从远处看，队伍仿佛在跳跃前进。后世为纪念圣人，便模仿了这种“跳跃的步伐”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论如何，这种“跳跃”并非随意的舞蹈，而是一种严肃的、三步向前、两步向后的特定步伐。游行队伍由神职人员引领，参与者手牵白色手帕，在古老的街道上形成蜿蜒的人链，伴随缓慢而庄重的进行曲，最终抵达安葬圣威尔布罗德的圣墓教堂地窖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说及其衍生的仪式，超越了宗教，成为了社区凝聚力和文化认同的核心。它将个体的病痛叙事，升华为整个城镇年度性的集体记忆与心灵净化。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在今日宁静的埃希特纳赫，你脚下的每一步都踩着历史的层理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那座重建的修道院，不再是中世纪呼风唤雨的权力中枢，但它作为博物馆，守护着见证加洛林辉煌的珍宝手稿。市政机构在其廊院内办公，让古老建筑重获世俗的生机。这本身就是一种深刻的历史对话——关于破坏与重建，关于神圣与世俗的转换。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而每年春天的跳跃游行，则是活态历史的震撼呈现。它让你直观地感受到，历史并非书本上的死文字，而是一种可以<strong>用全身心去参与、去体验的集体记忆</strong>。在这里，你能读懂欧洲信仰的民间表达，理解圣地如何塑造城镇的肌理与节奏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃希特纳赫告诉我们，一个小镇之所以伟大，不在于其规模，而在于它能否在时间的洪流中，守护住一个独特的故事，并将它转化为年复一年的生命仪式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/differdange-industrial-heritage-and-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪弗当日</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Differdange</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/consdorf-kuelescheier" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔斯多夫（骑士裂缝）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Consdorf (Kuelscheier)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wasserbillig" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦瑟比利希</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wasserbillig</p>
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
