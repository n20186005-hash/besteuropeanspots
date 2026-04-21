import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '托迪历史溯源｜中世纪“完美之城”的前世今生与圣人传奇',
  description: '探索意大利隐秘心脏托迪。不止是中世纪风貌，更是伊特鲁里亚源头、自由公社荣光与神秘主义诗人雅各布内的精神故乡。一座活着的“完美之城”。',
}

export default function TodiMedievalTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '托迪中世纪古城', href: '/attractions/todi-medieval-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`托迪中世纪古城・Todi・意大利・托迪`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在翁布里亚连绵的绿色丘陵之巅，托迪静默矗立，被誉为“世界最适宜居住的城市”，更是一座保存完好的中世纪城市标本。它的魅力，远不止于鹅卵石街道与古老城墙。从伊特鲁里亚的山巅堡垒，到中世纪倔强的自由城邦，再到文艺复兴时期思想家心中的“理想城市”蓝图，层层历史在此叠加。抛开游玩攻略，走进托迪的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`托迪中世纪古城`} />
                <InfoRow label="英文名称" value={`Todi`} />
                <InfoRow label="正式名称" value={`Todi`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`托迪`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "托迪的起源，深埋在意大利文明最初的曙光里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在公元前8至7世纪，神秘的 <strong>伊特鲁里亚人</strong> 就选中了这座海拔400米的山头。他们在此建立定居点，称其为“Tutere”。这个名字的词源已不可考，或许与边界或守护神有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择这里，是冷兵器时代典型的防御思维。三面被山谷与河流环绕，易守难攻，是监控整个台伯河谷上游的战略要地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>罗马人</strong> 在公元前3世纪征服此地，将其拉丁化为“Tuder”。罗马时期，托迪开始扩张，获得了市政地位，修建了神庙、广场和输水道。老普林尼在其著作中曾提及托迪的繁荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，<strong>“托迪”（Todi）</strong> 这个名字最终在中世纪定型，并沿用至今。它像一枚时间胶囊，封存了从古意大利语到现代意大利语的语音流变痕迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与许多依托贸易要道崛起的城市不同，托迪的诞生源于最原始的生存与防御需求。这份“与世隔绝”的基因，恰恰是它后来能在中世纪风云中保持独特个性的底色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非突然出现，而是从山岩与历史中缓慢生长而出。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "托迪的历史并非线性前进，而是被几个浓墨重彩的瞬间深刻镌刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个印记，是 <strong>1260年</strong> 的“共和国理想”。那时，托迪是一个独立的城邦公社，公民自豪感达到顶峰。他们决心建造一座配得上城市地位的宏大教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是今天的 <strong>托迪主教座堂</strong>。它始建于此时，虽然后续工程跨越数个世纪。教堂正立面的巨大玫瑰窗与宏伟台阶，宣示着市民的财富与虔诚。更关键的是，广场对面的<strong>人民宫</strong>与<strong>长官宫</strong>也同期兴建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这三座建筑围合成的<strong>人民广场</strong>，成为中世纪城市自治权力的完美象征：宗教、行政与司法权力，在此达成微妙的平衡与对视。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，关乎背叛与诅咒，刻在一扇门上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1395年</strong>，托迪的统治家族——阿蒂家族，与势力庞大的<strong>圣殿骑士团</strong>发生冲突。在阴谋与血泊中，阿蒂家族诱杀了当地的圣殿骑士首领。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，这场谋杀就发生在骑士团据点的一扇小门前。此后，这扇门被永久封闭，并被当地人称为 <strong>“忘恩负义之门”</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“那扇门再也没有打开。石头记住了背叛，而城市背负着与强大教团为敌的代价。”——当地编年史残篇" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一事件标志着托迪中世纪黄金时代的尾声。外部强权开始更多地干涉其内政，独立的城邦之梦逐渐黯淡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这些印记从未被抹去。走在广场上，你脚下踩着的，是自治市民的雄心；指尖触碰的斑驳石墙，可能还浸透着中世纪政治的残酷与寒意。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "托迪的天空，曾被一位极端虔诚又才华横溢的灵魂照亮。他不是王公将相，而是一位神秘的诗人与圣人——<strong>雅各布内·达·托迪</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他生于<strong>1230年</strong>左右，出身当地显赫的托迪（或 Benedetti）家族。青年时代放浪形骸，是一名律师甚至军人。一场生死危机后，他的人生彻底转向。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约<strong>1268年</strong>，他卖掉了所有财产，赤脚走进了<strong>圣福尔图纳托教堂</strong>的方济各会修道院，成为了一名卑微的修士。从此，托迪的街巷间多了一个疯狂苦修的身影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的狂热甚至引起了教会的疑虑。传说，为了证明自己的虔诚，他曾在公众面前吞食从麻风病人伤口上剥下的疮痂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的吊诡在于，将他推上灵性巅峰的，却是一段牢狱之灾。因卷入方济各会内部关于“清贫”的激烈论战，雅各布内被对立派系囚禁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在暗无天日的牢房里，他完成了毕生最重要的作品：<strong>《赞美诗》</strong>。这不是普通的圣诗，而是用翁布里亚方言写成的、充满炽烈情感的神学与爱情诗篇。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“爱，你为何将我俘虏？为何击垮我，又将我治愈？…我寻找和平，却寻得战争；我向外看，却在内里找到你。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 雅各布内·达·托迪 《赞美诗》节选" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他将对上帝的爱，描绘为一种折磨人、燃烧人的世俗爱情。这种用本地俗语书写神圣主题的方式，深刻影响了后来的意大利文学，包括但丁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1306年</strong>，雅各布内在故乡托迪去世。他最终长眠于自己曾苦修的<strong>圣福尔图纳托教堂</strong>地下墓穴。他的石棺简单朴素，上方教堂的湿壁画描绘着他生平的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，在托迪静谧的街道上，你几乎仍能感受到这位“上帝的歌者”留下的精神痕迹。他不追求建筑的丰碑，却在语言的殿堂里，为托迪铸就了一座不朽的丰碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与托迪紧密相连的名人，并非生于斯，却将其推向了理论的神坛——文艺复兴时期的建筑师和思想家 <strong>弗朗切斯科·迪·乔尔乔·马尔蒂尼</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在其著作中，将托迪作为“理想城市”的范本进行测绘和分析。托迪同心圆式的城市布局、层次分明的防御体系、以及核心广场的公共空间，被他视为功能与美学的完美结合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，托迪意外地从一座实体城市，升华为一个哲学与城市规划的概念，影响了后世无数“理想城”的蓝图。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了圣殿骑士门的血腥传说，托迪还有一个更轻盈、却同样深入人心的传说，关乎城市的钥匙与忠诚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>人民宫</strong>的墙壁上，嵌着一把巨大的古代铁钥匙。当地传说，这是城市金库或某座重要城门的钥匙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事说，中世纪时，负责保管这把钥匙的市政官以绝对的诚实和忠诚闻名。即便面对巨额贿赂或死亡威胁，他也从未背叛职责，始终守护着城市的财富与秘密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在他临终时，他将钥匙郑重交还给市民议会。为了纪念这份无价的忠诚，议会决定将这把钥匙永久封存在市政厅最显眼的外墙上。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“钥匙是铁的，会生锈；但忠诚是金子做的，在托迪人民的记忆里永远闪光。”—— 导游代代相传的讲述" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，这把钥匙不再是实用工具，而化为一个象征。它提醒着每一位执政官和市民：守护托迪的，不仅是石头城墙，更是如钢铁般坚韧、如黄金般纯粹的公共美德。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，为这座以防御和自治闻名的城市，注入了温暖的道德内核。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的托迪，之所以被旅人称为“完美之城”，并非因其拥有最宏伟的单一建筑，而在于它整体的、呼吸着的<strong>历史肌理</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从伊特鲁里亚的基岩，到罗马的骨架，再到中世纪丰满的血肉与文艺复兴的灵魂，每一层都清晰可辨，未曾被后来粗暴的“现代化”所撕裂。它是一座可以步行阅读的、关于意大利中部千年变迁的立体史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂托迪，便是读懂一种小而完整的城市文明形态。它告诉你，一个社区如何凭借地理、信仰、法律与公民精神，在漫长的世纪中维系自身的认同与尊严。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是博物馆的陈列品，而是窗台上的一盆花，是巷子转角的一缕阳光，是广场上咖啡馆里飘来的本地咖啡香气。雅各布内诗句中的神圣之爱，与马尔蒂尼笔下的理性蓝图，在此和谐共存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它邀请每一位来访者，做一次时间的沉浸者，而非匆匆的打卡客。当你站在这座山顶之城，俯瞰翁布里亚无垠的绿色波浪时，你俯瞰的也是一部沉静而壮阔的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、步行路线全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ragusa-ibla-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉古萨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ragusa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/grottaglie-ceramics-district" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格罗塔列陶瓷峡谷</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grottaglie (The Ceramics District)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stilo-byzantine-church-calabria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯蒂洛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stilo</p>
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
