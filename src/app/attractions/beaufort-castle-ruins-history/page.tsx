import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博福尔城堡遗址历史溯源｜卢森堡岩石山谷中，一座废墟见证的七百年权力、战争与家族传奇',
  description: '探秘卢森堡“美丽堡垒”的废墟。从11世纪要塞到30年战争炼狱，十字军名将、法国铁蹄与民间诅咒在此交织。一座被遗忘的中世纪城堡，一部浓缩的欧洲边疆史。',
}

export default function BeaufortCastleRuinsHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '卢森堡', href: '/destinations/europe' },
            { label: '博福尔', href: '/destinations/europe' },
            { label: '博福尔城堡遗址', href: '/attractions/beaufort-castle-ruins-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博福尔城堡遗址・Beaufort Castle・卢森堡・博福尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢森堡东部，茂密的“小瑞士”森林深处，博福尔城堡的残骸沉默地矗立在岩石之上。它的名字“Beaufort”意为“美丽的堡垒”，但这片遗址讲述的，远非美丽童话。七百年间，它历经四次大规模重建，从最初的军事瞭望塔，演变为坚固的伯爵府邸，最终在战争的炮火与时间的侵蚀下，化作了如今这般浪漫而忧伤的废墟。这里的一砖一石，都镌刻着欧洲边疆地带的权力更迭、家族兴衰与战争创伤。抛开游玩攻略，走进博福尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博福尔城堡遗址`} />
                <InfoRow label="英文名称" value={`Beaufort Castle`} />
                <InfoRow label="正式名称" value={`Beaufort Castle`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`博福尔`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博福尔的起源，深植于欧洲封建割据的混乱年代。大约在<strong>11世纪中叶</strong>，这片土地的第一块基石被悄然埋下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，卢森堡伯爵西格弗里德一世的庞大领地需要巩固。在偏远而多岩石的埃尔茨河河谷，建立前沿哨所至关重要。于是，一座简朴的<strong>石质瞭望塔</strong>应运而生。它的任务纯粹而直接：监控河谷，威慑潜在的入侵者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字“博福尔”（Beaufort）源自古法语，意为“美丽的堡垒”。这或许是一个寄托了美好期望的命名。但历史证明，它的命运与持续的“美丽”无关，而是与“堡垒”的防御本质紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的城堡规模极小，仅能满足最基本的驻军需求。它孤独地立在岩石山脊上，俯瞰着下方的森林与道路。这里并非繁荣的城镇中心，而是<strong>军事边疆的神经末梢</strong>。它的存在，标志着卢森堡伯爵领地向东扩张与控制力的延伸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在随后的两个世纪里，这座简陋的前哨，将在一代代领主的手中，逐步演变为一个象征权力与地位的坚固城堡。它的故事，是欧洲无数中小贵族家族兴衰史的典型缩影。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博福尔城堡的历史，是一部清晰的建筑断代史，也是一部被战争反复撕裂的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一座罗马式城堡在<strong>1348年</strong>迎来了剧变。那年，卢森堡的<strong>瓦朗吉安家族</strong>获得了这片领地。他们拆除了大部分旧建筑，在原址上建立起一座更为宏伟的<strong>哥特式方形城堡</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "高大的主塔、厚重的城墙和居住翼楼拔地而起。城堡从军事哨所，正式转变为贵族的<strong>常住府邸</strong>。这段时期，是博福尔相对平静与繁荣的“黄金时代”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，平静在<strong>17世纪</strong>被彻底粉碎。<strong>三十年战争（1618-1648）</strong> 的烽火席卷欧洲，作为战略要地的卢森堡未能幸免。博福尔城堡因其坚固，先后被西班牙、法国和帝国军队反复争夺、占领与破坏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一份<strong>1698年</strong>的详细清单，冰冷地记录了战争的创伤：城堡驻有60名士兵，装备有14门加农炮和大量火枪。这时的它，已完全退化为一个纯粹的军事据点，往日的贵族生活气息荡然无存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更大的毁灭来自一个世纪后。<strong>法国大革命（1789-1799）</strong> 的激进浪潮波及此地。<strong>1795年</strong>，法国军队占领了卢森堡。作为旧制度象征的贵族城堡，成为革命者眼中的敌人财产。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "城堡最后的主人，<strong>博瓦莱家族</strong>的后裔，在革命风暴来临前仓皇逃离。据说，他们只来得及带走少数贵重物品，留下了这座承载家族数百年记忆的堡垒，任其被没收、拍卖，并最终被<strong>拆解变卖建筑材料</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，博福尔城堡失去了屋顶、门窗和内部结构，暴露在风雨之中，逐渐沦为今天我们看到的浪漫废墟。它的衰败，是欧洲旧贵族时代终结的直观纪念碑。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在博福尔漫长的历史中，最为耀眼的名字，无疑是<strong>贝尔纳·德·博福尔</strong>。他的人生，如同一颗划过中世纪夜空的流星，短暂却极为璀璨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>贝尔纳</strong>出生于城堡的鼎盛时期，是<strong>瓦朗吉安家族</strong>的杰出子弟。他并非满足于在卢森堡边疆做一个安稳领主的人。血液中流淌着冒险与虔诚因子的他，响应了教廷的号召，投身于<strong>十字军东征</strong>的洪流。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他参加了<strong>1248-1254年的第七次十字军东征</strong>，由法国国王路易九世（圣路易）领导。在埃及艰苦卓绝的战事中，贝尔纳以其<strong>英勇与虔诚</strong>崭露头角，赢得了国王与同僚的尊重。东征失败后，他追随路易九世回到欧洲，但心中圣战的火焰并未熄灭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他人生最传奇的一章，发生在<strong>1268年</strong>。当时，教宗克雷芒四世逝世，枢机主教团在意大利维泰博陷入僵局，长期无法选出新教宗。这场“空位期”持续了近三年，严重动摇了教廷的权威。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据中世纪编年史记载，狂热的市民们最终忍无可忍。他们将枢机主教们锁在宫殿内，并<strong>掀掉了宫殿的屋顶</strong>，声称要“让圣灵之光直接照亮他们的抉择”。正是在这种极端压力下，枢机主教们匆忙选举出了一位新教宗——<strong>额我略十世</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这位额我略十世，正是从圣地归来的<strong>贝尔纳·德·博福尔</strong>。他从一名边疆领主、十字军战士，一跃成为<strong>天主教世界的最高精神领袖</strong>。这堪称中世纪最不可思议的晋升之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他与故乡博福尔的联系并未因此断绝。成为教皇后，他仍心系家族城堡。历史学者认为，正是额我略十世（贝尔纳）的权威与财富，资助了城堡在13世纪后期的一次重要扩建，使其防御体系更加完善。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与城堡命运紧密相连的，是<strong>约翰·巴蒂斯特·德·巴斯托格内</strong>。他于<strong>1639年</strong>购下了已成为废墟的城堡。他的身份很特殊——一位为<strong>西班牙军队</strong>效力的<strong>卢森堡本地贵族</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在三十年战争的乱世中，他不仅重建了部分城堡，更在附近着手建造一座全新的、更舒适宜居的<strong>文艺复兴风格宫殿</strong>（即今天仍屹立的新堡）。他的选择颇具象征意义：旧堡代表过去的战争与防御，新堡代表对和平与奢享生活的向往。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是从他开始，博福尔形成了今日所见“<strong>废墟旧堡</strong>”与“<strong>华丽新堡</strong>”并存的独特景观。他本人，则成为连接城堡战乱过去与重建未来的关键人物。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "环绕着博福尔废墟的，不仅有真实的历史硝烟，还有更古老、更缥缈的民间低语。其中最著名、也最令人唏嘘的，是关于<strong>卢森堡伯爵夫人“白女士”的诅咒</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在更早的年代，一位冷酷的卢森堡伯爵将他的夫人囚禁在博福尔城堡的塔楼之中。伯爵夫人郁郁而终，临死前发出了一个可怕的诅咒：<strong>博福尔的领主家族，每一代都将出现一个“疯狂”的后代</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说宛如幽灵，萦绕在城堡上空。当地人相信，几个世纪以来，<strong>瓦朗吉安</strong>和后来的<strong>博瓦莱家族</strong>中，确实不时出现行为怪异、精神失常的成员。人们将此归咎于那位悲伤“白女士”的复仇。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的民谣这样唱道：“当北风呼啸过博福尔的塔楼，听啊，那是白女士在哭泣。她的泪水化作埃尔茨河的迷雾，她的诅咒在血脉中生根发芽。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡下方的<strong>地牢</strong>有关。据说地牢深处有一条<strong>秘密隧道</strong>，可以一直通到几公里外的拉罗谢特城堡。这条隧道是领主们在危急时刻逃生用的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但传说里，隧道中也封印着不祥之物。有人说，曾有一个背叛领主的骑士被活埋在其中；也有人说，隧道里藏着一批从未被发现的<strong>圣殿骑士团宝藏</strong>。这些故事为冰冷的废墟增添了一层冒险与神秘色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每当夜幕降临，月光洒在残破的塔楼上，当地人有时会说，能听到隐约的<strong>少女歌声</strong>从废墟中飘出。那是被遗忘的灵魂，还是风声穿过石隙的回响？无人知晓。正是这些传说，让博福尔的石头拥有了超越历史书本的生命力。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当我们站在博福尔城堡的废墟上，抚摸那些被风雨侵蚀出孔洞的厚重石墙，所感受到的，远不止是“风景如画”。这是一本以岩石为纸、以战火为墨写就的立体史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它向我们展示了欧洲<strong>中世纪边疆贵族</strong>真实的生活与防御状态。它见证了<strong>宗教狂热（十字军）</strong>与<strong>政治剧变（教宗选举）</strong>如何改变个人与家族的命运。它更是<strong>三十年战争</strong>与<strong>法国大革命</strong>这两场重塑欧洲格局的重大冲突的<strong>直接承受者与伤痕标本</strong>。从崛起到加固，从破坏到遗弃，博福尔完整经历了封建堡垒的生命周期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "新堡与旧堡的对比，尤其发人深省。它们并立于同一片土地上，却代表了截然不同的时代追求：一个是防御与荣耀，一个是舒适与展示。这种并置，本身就是一段浓缩的欧洲建筑与社会思想变迁史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拜访博福尔，是一场与时间深度的对话。它小众、宁静，没有喧嚣的旅行团。在这里，你可以静静地聆听风声讲述关于权力、信仰、背叛与遗忘的故事。这座“美丽的堡垒”最终以最不“完美”的废墟形态，达成了永恒——它成了历史本身最诚实的代言人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bourglinster-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔格林斯特城堡（隐秘的十二世纪贵族双堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourglinster Castle</p>
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
              <a href="/attractions/abbey-of-echternach" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃希特纳赫修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Abbey of Echternach</p>
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
