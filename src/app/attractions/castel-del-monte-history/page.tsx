import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯泰尔德尔蒙特历史溯源｜意大利八角城堡，腓特烈二世的神秘遗产与数字密码',
  description: '深入意大利普利亚的孤山，解开中世纪最神秘的几何城堡。跟随“世界惊奇”腓特烈二世的足迹，探寻八角形建筑背后的权力、科学与末日预言。',
}

export default function CastelDelMonteHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '普利亚', href: '/destinations/italy' },
            { label: '卡斯泰尔德尔蒙特', href: '/attractions/castel-del-monte-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯泰尔德尔蒙特・Castel del Monte・意大利・普利亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在南意大利灼热的阳光下，一座完美的八角形城堡孤悬于山顶，像一枚来自星辰的印章，烙在普利亚荒凉的土地上。它没有护城河，没有军事防御的常规布局，甚至没有明确的建造目的。<strong>卡斯泰尔德尔蒙特</strong>，这座由神圣罗马帝国皇帝<strong>腓特烈二世</strong>于13世纪下令建造的奇异建筑，七个多世纪以来，其纯粹的几何形态始终是一个无解的谜题。是宫殿，是堡垒，是猎苑，还是通往宇宙奥秘的巨石阵？抛开游玩攻略，走进卡斯泰尔德尔蒙特的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯泰尔德尔蒙特`} />
                <InfoRow label="英文名称" value={`Castel del Monte`} />
                <InfoRow label="正式名称" value={`Castel del Monte`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`普利亚`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡并非起源于一座城市，它本身就是一则宣言，孤立地诞生在意大利南部穆尔杰地区一座540米高的石灰岩山丘上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字直白而古老：<strong>Castel del Monte</strong>，意为“山上的城堡”。在更早的记录中，此地被称为“<strong>Castrum Sancta Maria de Monte</strong>”，见证了山上曾存在的一座小教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，一切传奇始于一个年份：<strong>1240年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，那位被称为“<strong>世界惊奇</strong>”的皇帝——<strong>腓特烈二世</strong>，正处在他权力与智慧的巅峰。他统治着从德国延伸到西西里的庞大帝国，精通六种语言，痴迷于数学、天文学、猎鹰术，并以其开明（在当时看来近乎异端）的宫廷，汇聚了基督教、伊斯兰教和犹太教的学者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在这一年，他签发了一道敕令，命令普利亚总督采购优质石材，“为我们在<strong>圣玛丽亚迪蒙特</strong>城堡的建造做准备”。这就是这座建筑工程的起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡并非建在战略要冲，也不靠近任何重要城镇。它突兀地耸立在荒原之上，仿佛皇帝一个任性的念头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一种观点认为，这里曾是诺曼人古老的防御工事遗址，腓特烈二世选择在此“加盖”自己的标志。另一种更浪漫的推测是，此处是他心爱的猎鹰的飞行路径上的一个站点，或是他巡回帝国时一个用于休憩与沉思的“驿站”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但无论如何，它的诞生与一位试图将理性秩序强加于世界的帝王意志紧密相连。名字中的“蒙特”（山），既指代地理，也隐喻着这位皇帝高踞于时代之上的孤独心智。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的建造史本身就是一个谜。始于1240年，但很可能在<strong>1250年腓特烈二世突然去世</strong>时仍未完全竣工。这给这座建筑蒙上了一层未完成的、悬置的宿命感。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“1250年12月13日，在弗奥伦蒂诺城堡，身着西多会修士袍的皇帝咽下了最后一口气。远在普利亚荒原上，他那座八角形的杰作，是否也感受到了这阵君权陨落的寒风？”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "腓特烈二世死后，帝国迅速分崩离析。城堡的命運急转直下。它从未扮演过预设的皇家居所角色，反而在接下来的几个世纪里，沦为权贵家族的私产、牧羊人的临时避难所，甚至一度成为<strong>土匪的巢穴</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>17世纪</strong>的一场雷击严重损毁了部分建筑，它进一步被遗弃，内部大理石装饰和家具被洗劫一空，沦为一座华丽的空壳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，正是这种“无用”与“遗弃”， paradoxically 保护了它。因为它未被改建成军事要塞或宫殿，其原始、纯粹的建筑结构得以惊人地保存下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的重生始于<strong>1876年</strong>，意大利王国政府以2.5万里拉的价格从当地贵族手中购得了这座废墟，开始了漫长的修复工作。人们开始重新审视它的价值，不再仅仅是石头堆砌的废墟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的转折点在<strong>1996年</strong>。<strong>联合国教科文组织</strong>将卡斯泰尔德尔蒙特列入世界遗产名录。评语精准地点明了其价值：“……是中世纪军事建筑中独一无二的杰作，它巧妙地结合了古典元素、伊斯兰东方风格和北欧哥特式西多会建筑。” 从此，它从一处地方古迹，跃升为全人类共享的、象征着人类智力追求与神秘主义的标志。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡的灵魂，唯一且绝对地属于其缔造者——<strong>腓特烈二世</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>腓特烈二世</strong>（1194-1250），霍亨斯陶芬王朝的神圣罗马帝国皇帝，耶路撒冷国王，西西里国王。他的绰号“<strong>世界惊奇</strong>”足以说明一切。他是在西西里多元文化熔炉中长大的孤儿，自幼便展现出对知识无休止的渴求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的宫廷更像一个国际性的科学院。他将亚里士多德的著作重新引入西方，亲自撰写了关于猎鹰术的科学论文《<strong>驯鹰的艺术</strong>》。他与穆斯林苏丹保持书信往来和礼物交换，甚至因此被教皇斥为“<strong>敌基督者</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>他与卡斯泰尔德尔蒙特的关系，是帝王心智在石头上的投影。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "没有证据表明他长期居住于此，但城堡的每一个细节都浸透着他的个人印记。建筑的八角形设计，被认为深深符合他的宇宙观。在基督教中，八是复活与再生的数字（耶稣在星期日复活，是一周的第一天，也是第八天）。在伊斯兰建筑中，八边形是方形（地）与圆形（天）之间的过渡形态，象征着天国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡内部的设计同样精妙。两层楼各八个完全相同的梯形房间，围绕着一个八角形中庭。光线通过窗户的设计，在<strong>春分</strong>和<strong>秋分</strong>等特定日子，会在室内产生精确的几何光影效果。这强烈暗示了建筑与天文学的关联——这是腓特烈二世深深着迷的领域。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "法国历史学家<strong>雅克·勒高夫</strong>曾评论：“腓特烈二世想要建造的，不是一座城堡，而是一顶石头皇冠，一具他权力的几何躯体。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他与城堡最著名的轶事，莫过于他的死亡预言。传说一位东方星象家曾预言，皇帝将“在<strong>铁门之城</strong>”死去。腓特烈二世因此终生避开所有名为“铁门”的地方。然而，他最终在弗奥伦蒂诺（意为“小花”）城堡去世。后来人们发现，他去世房间的大门，正是由<strong>铁梨木</strong>制成的。这个传说，为这位理性主义皇帝的一生，涂抹上了一层无法参透的命运色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡，或许就是他为自己建造的、最宏伟的一座“铁门”——一扇用数学和石头构筑的、通往未知之境的大门。他本人未能完全穿过，却留给后世无尽的叩问。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "由于缺乏官方历史记载，数个世纪以来，关于卡斯泰尔德尔蒙特的传说在普利亚的乡野间疯长，试图填补那些历史的空白。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最核心的传说，自然围绕着<strong>“八”这个数字</strong>。除了建筑显而易见的八角形，细数之下，处处是八：两层楼，每层八间房，中庭有八根柱子，甚至城堡各个角落的壁炉和石狮雕像，最初的数量也是八。在民间智慧中，这远非建筑美感所能解释。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一种传说认为，八边形是<strong>圆与方</strong>的调和，代表着天与地的和谐。城堡是腓特烈二世试图在地上建立的“人间天堂”的微观宇宙模型。另一种更神秘的传说则将它与<strong>圣杯</strong>联系起来。据说，城堡的平面图与耶路撒冷圣殿山的圆顶清真寺有几何上的呼应，而八边形正是守护圣杯的圣殿骑士团常用的建筑符号。传说腓特烈二世曾与圣殿骑士团交往甚密，城堡可能是为了秘密安置某件圣物而建。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人口中流传着这样的故事：“月圆之夜，当月光以特定角度穿过二楼东侧房间的窗户，会在地上投射出第八个看不见的房间的入口。那里藏着皇帝的珍宝，或者……他从未向人展示的另一本智慧之书。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有传说将城堡与<strong>猎鹰术</strong>相连。腓特烈二世酷爱猎鹰，而城堡的地理位置，据说正处于帝国猎鹰迁徙的路线上。城堡顶层的平台，被想象成皇帝放飞他最珍视的猛禽，并与之一起俯瞰帝国疆土的观景台。这些猛禽的锐利目光，与皇帝洞察世事的智慧，在传说中合二为一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说真伪难辨，但它们共同构建了城堡的“第二重生命”。当严谨的历史沉默时，正是这些充满想象力的叙事，让冰冷的石头持续散发着诱人的温热。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你驱车穿越普利亚的橄榄树林与葡萄园，突然在旷野尽头看到那座金色石灰岩城堡的剪影时，你看到的不是一座堡垒的遗迹，而是一个<strong>思想的纪念碑</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它纪念着一位试图用理性丈量神性、用科学统御信仰的帝王。在宗教战争与教权皇权激烈斗争的13世纪，卡斯泰尔德尔蒙特像一座孤岛，宣示着另一种可能：一种基于数学、天文与美学和谐的世界秩序。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值，不在于发生过多少重大历史事件（事实上几乎没有），而在于它作为一件“未完成品”所提出的永恒问题。它邀请每一位访客进行自己的解读：是宫殿，是神殿，是天文台，还是纯粹的美学实验？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂卡斯泰尔德尔蒙特，便是读懂中世纪欧洲那个短暂而耀眼的“理性黎明”，以及人类对秩序与终极奥秘永不疲倦的追寻。它孤悬于山巅，超越了实用主义的评判，最终成为一首刻在大地上的石头诗篇，冷静、精确，而又无比神秘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、最佳拍摄机位全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/camogli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡莫利</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Camogli</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/orvieto" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔维耶托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orvieto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/villa-farnese-caprarola" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡普拉罗拉法尔内塞别墅</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Villa Farnese (Palazzo Farnese)</p>
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
