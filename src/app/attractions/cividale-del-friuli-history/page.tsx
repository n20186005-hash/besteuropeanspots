import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奇维达莱德尔弗留利历史溯源｜伦巴第三国的意大利小镇与卡洛林文艺复兴前哨',
  description: '穿越时空，探索意大利东北部秘境的千年传奇。从尤利乌斯·凯撒的堡垒到第一个伦巴第三国首都，传奇女王与“魔鬼之桥”在此沉睡。揭开尘封往事。',
}

export default function CividaleDelFriuliHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奇维达莱德尔弗留利', href: '/attractions/cividale-del-friuli-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奇维达莱德尔弗留利・Cividale del Friuli・意大利・弗留利-威尼斯朱利亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在意大利东北角，紧邻斯洛文尼亚的边界线上，藏着一座被严重低估的石头之城。它的历史厚度，足以让许多知名都市黯然失色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不仅是古罗马“尤利乌斯·凯撒的堡垒”，更是<strong>568年</strong>伦巴第人铁骑踏入意大利后建立的<strong>第一个首都</strong>，一个日耳曼王国在南欧的初啼。随后，它又成为卡洛林文艺复兴在阿尔卑斯山以南的关键火花。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进奇维达莱的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奇维达莱德尔弗留利`} />
                <InfoRow label="英文名称" value={`Cividale del Friuli`} />
                <InfoRow label="正式名称" value={`Cividale del Friuli`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`弗留利-威尼斯朱利亚`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奇维达莱的故事，始于一场伟大的罗马殖民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元前1世纪中期，<strong>尤利乌斯·凯撒</strong>看中了纳蒂索内河畔的这座战略要地。它扼守着通往诺里克行省（今奥地利）和潘诺尼亚行省（今匈牙利）的咽喉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一座名为 <strong>“朱利安卡尔尼克”</strong> 的要塞拔地而起。这个名字，直译便是“尤利乌斯在卡尔尼地区（当地凯尔特部落）的城镇”。城市的基因里，从一开始就刻下了<strong>军事、边界与融合</strong>的烙印。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国崩溃后，蛮族浪潮席卷。但这座城市并未消亡，它的名字在民间口语中悄然演变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从拉丁语的“Civitas” （城市）到通俗拉丁语的“Civitate”，最终简化成了今天的 <strong>“Cividale”</strong> 。而“del Friuli”（弗留利的）则是后来为区分意大利其他同名小镇所加。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一个名字的流变，就是一部微缩的通俗拉丁语到罗曼语的语言史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它见证了古典文明的余晖，也静静等待着下一个主角——伦巴第人，将它推向历史的前台。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：伦巴第三国的第一个首都 (568-774 AD)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元568年春天，一支来自潘诺尼亚的伦巴第大军，在首领阿尔博因的率领下翻越尤利安阿尔卑斯山。他们征服的第一个重要据点，就是这座坚固的罗马旧城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿尔博因敏锐地意识到其战略价值，当即在此设立了王座。<strong>奇维达莱，成了伦巴第三国在意大利的第一个首都</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管王国中心后来迁往帕维亚，但奇维达莱始终是弗留利公爵领地的首府，地位显赫。这段历史最震撼的遗存，是<strong>公爵宫遗址</strong>和<strong>伦巴第神庙</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“阿尔博因国王进入了弗留利，并在那里建立了他的第一个王室驻地……他任命他的侄子吉苏尔夫为弗留利的公爵。” —— 保罗执事，《伦巴第人史》" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：卡洛林文艺复兴的边区灯塔</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元774年，查理曼大帝灭亡伦巴第三国。奇维达莱并未没落，反而在加洛林王朝的“文艺复兴”中焕发新生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "查理曼的姻亲、弗留利侯爵在此建立了<strong>圣萨尔瓦托修道院</strong>。它迅速成为学术与艺术中心，吸引着整个阿尔卑斯山南北的学者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的<strong>地下圣堂</strong>至今保存着9世纪初的灰泥雕塑与壁画。这些作品罕见地融合了古典罗马、拜占庭与日耳曼艺术风格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "天使与圣徒的形象栩栩如生，其技艺之精湛，证明这里绝非文明的边缘，而是当时欧洲艺术创新最活跃的“实验场”之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记三：“魔鬼桥”与中世纪的坚韧</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪，连接城市两岸的，是一座令人望而生畏的石桥——<strong>魔鬼桥</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它建于15世纪，取代了更早被洪水冲毁的桥梁。单拱横跨深邃的纳蒂索内河峡谷，工程极为艰险。关于它的建造，当地流传着与魔鬼交易的神秘传说（下文详述）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座桥见证了城市的商业繁荣与军事脆弱。它一次次在战争与洪水中受损，又一次次被坚韧的市民重建，成为奇维达莱精神的最佳象征。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>名人一：圣保利努斯——从宫廷高官到边境圣徒</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市最著名的儿子，非<strong>圣保利努斯</strong>莫属。他的一生，完美诠释了奇维达莱作为“文化熔炉”的特质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "保利努斯出生于约726-730年，出身于伦巴第贵族家庭。他先是在伦巴第国王拉奇斯的宫廷中担任要职，精通政务与军事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，在妻子早逝后，他的人生发生巨变。他放弃了世俗权位，进入修道院，最终被任命为<strong>阿奎莱亚宗主教</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我，保利努斯，一个罪人，曾沉浸于世俗的虚荣……如今只渴望在祷告与静默中，服务我的上帝与子民。” —— 据信出自保利努斯的忏悔记录" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的主教区覆盖了从威尼斯腹地到阿尔卑斯山的广阔区域，而奇维达莱是他的重要驻跸地之一。这里是他调和各方矛盾的舞台：伦巴第贵族、罗马遗民、法兰克新主、以及斯拉夫邻居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "保利努斯的最大遗产，是在神学与艺术上。他积极推动“卡洛林文艺复兴”，赞助手稿抄写与教堂装饰。<strong>圣萨尔瓦托修道院地下圣堂</strong>的瑰宝，很可能就诞生于他的庇护之下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他去世后，被安葬在奇维达莱。他的墓穴很快成为朝圣地，奇维达莱也因此赢得了“圣保利努斯之城”的美誉，至今守护着他的遗骨与精神遗产。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>名人二：杜切斯女王——被历史迷雾笼罩的摄政者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在保利纳斯之前约一个世纪，一位传奇女性曾短暂统治过弗留利，并以奇维达莱为中心。她就是<strong>杜切斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史对她的记载极为稀少，主要来自保罗执事的零星记载。她是伦巴第国王佩克塔里特的妹妹，嫁给了弗留利公爵。公爵去世后，她展现出非凡的政治才能，在<strong>约660-670年间</strong>实际掌管公爵领地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在那个男性主导的蛮族王国，一位女性摄政者极为罕见。她需要平衡王国的中央权威、虎视眈眈的斯拉夫邻居、以及内部桀骜的贵族。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在弗留利，公爵去世后，他的遗孀杜切斯以智慧和勇气治理着那片土地，直到国王任命了新的公爵。” —— 保罗执事模糊的记述，为后世留下想象空间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然她没有留下宏伟的建筑，但她的存在本身，就是一段被主流历史叙事忽略的传奇。她统治的时期，正是奇维达莱从军事前哨向稳定的政治、文化中心转型的关键阶段。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想象她在公爵宫的庭院中发号施令，也许正是她的治理，为后来保利努斯时代的教育与艺术繁荣，铺垫了相对稳定的社会基础。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奇维达莱最著名的传说，与那座横跨在幽深峡谷上的<strong>魔鬼桥</strong>息息相关。这座本名“天使桥”的石桥，为何与魔鬼扯上了关系？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在15世纪，市民们亟需重建被洪水摧毁的老桥。但峡谷深邃湍急，工程屡屡失败。绝望的市长与一位神秘的建筑师签订契约，他承诺在一夜之间建成一座完美的石桥。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "代价是，桥建成后，第一个过桥的灵魂将归他所有。市长同意了，心想赶一只动物过桥即可。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奇迹发生了。一夜之间，一座单拱石桥巍然耸立。清晨，市民们聚集桥头欢呼。这时，市长才惊恐地想起契约。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那位建筑师现出原形——正是<strong>魔鬼本人</strong>。他狞笑着，准备收取第一个过桥者的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "千钧一发之际，一位机敏的老妇人将一只猫或一只狗（版本不同）扔过了桥。魔鬼发现自己被愚弄，愤怒地跺脚离去，据说在桥面上留下了一个永恒的“魔鬼脚印”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“那建筑师笑了，笑声如寒风刮过峡谷。‘桥已成，灵魂归我。’他说道。这时，一声犬吠打破了寂静……” —— 当地广为流传的传说版本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说代代相传，它既反映了中世纪人们对超凡工程技术的敬畏与恐惧，也暗含了市井智慧战胜邪恶力量的朴素价值观。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，当你站在魔鬼桥上，俯瞰脚下数十米深的纳蒂索内河峡谷时，仍能感受到那份混合着惊险与奇迹的古老颤栗。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在奇维达莱的鹅卵石街道上，你触碰的每一块石头，都浸染着层层叠叠的时间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从罗马军团的基石，到伦巴第公爵的宫殿地基；从卡洛林工匠雕刻的圣徒面容，到中世纪市民重建的魔鬼桥拱。这里不是单一文明的纪念碑，而是一部生动的、持续书写的<strong>欧洲边疆史诗</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，文明的生长从来不是孤立的。罗马的秩序、伦巴第的勇武、加洛林的复兴精神，乃至斯拉夫与日耳曼文化的细微渗透，在这里碰撞、交融、沉淀，最终形成了弗留利地区独特而坚韧的文化身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂奇维达莱，便是读懂欧洲历史中那些<strong>沉默而关键的十字路口</strong>。它们或许未曾主宰过帝国的命运，却以自身的包容与坚韧，守护并传递着文明的火种。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "下次当你计划前往意大利东北部，请务必为这座“沉睡的石头之城”留出半天。它不是威尼斯或佛罗伦萨的注脚，而是一本值得你亲自翻阅的、厚重的历史原著。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何抵达魔鬼桥、探访伦巴第神庙、品味本地弗留利葡萄酒，完整交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/cividale-del-friuli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奇
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奇维达莱德尔弗留利</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cividale del Friuli</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vicenza-olympic-theater" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维琴察奥林匹克剧院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Teatro Olimpico Vicenza</p>
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
