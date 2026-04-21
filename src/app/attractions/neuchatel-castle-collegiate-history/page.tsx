import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '纳沙泰尔历史溯源｜湖畔城堡大教堂的前世今生与普鲁士国王的秘密往事',
  description: '探秘瑞士法语区隐秘瑰宝。纳沙泰尔城堡与大教堂千年叠影：勃艮第公爵的雄心、普鲁士国王的遥控统治、卢梭的避难足迹。一段写在石头上的欧洲权力游戏。',
}

export default function NeuchatelCastleCollegiateHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '纳沙泰尔城堡与大教堂', href: '/attractions/neuchatel-castle-collegiate-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`纳沙泰尔城堡与大教堂・Château de Neuchâtel & Collegiale・瑞士・纳沙泰尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在瑞士宁静的法语区，纳沙泰尔湖的北岸，一座集城堡、教堂、宫殿与州政府于一身的巨石建筑群，已俯瞰湖光山色近千年。它并非单纯的旅游景点，而是一本以砂岩写就的立体史书，记录了从神圣罗马帝国边疆堡垒到普鲁士王国海外飞地的诡谲命运。这里没有熙攘的旅行团，只有石头诉说的权力更迭、信仰变迁与人文思潮。抛开游玩攻略，走进纳沙泰尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`纳沙泰尔城堡与大教堂`} />
                <InfoRow label="英文名称" value={`Château de Neuchâtel & Collegiale`} />
                <InfoRow label="正式名称" value={`Château de Neuchâtel & Collegiale`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`纳沙泰尔`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "纳沙泰尔的名字，直译过来就是“新城堡”。但这“新”字，已是千年前的旧事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的起源笼罩在传说与历史的薄雾中。有记载的第一个城堡建于<strong>10世纪初</strong>，大约在<strong>1011年</strong>，勃艮第的<strong>鲁道夫三世</strong>国王正式将这里赠予她的妻子伊尔明加德。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“新城堡”的命名，很可能源于当时为了巩固统治、抵御外敌而新建的军事要塞，用以区别于湖区更古老的定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡最初的核心使命，就是军事与控制。它扼守着汝拉山通往瑞士高原的战略通道，俯瞰着整个湖泊，是掌控这片区域绝对权力的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其地名“Neuchâtel”源于拉丁语“Novum Castrum”（新城堡），在漫长的语言演变中，经由法语固化下来，成为了这座城的永恒标签。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与许多欧洲大都市的恢弘起源不同，纳沙泰尔的起点是一个<strong>边疆伯爵的权力支点</strong>。它小众而独特，其发展始终与领主的命运紧密捆绑，而非自由城市的商业繁荣。这种“领主私产”的底色，为其后来跌宕的历史埋下了伏笔。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座复合建筑群最深刻的印记，莫过于其身上交织的<strong>世俗王权</strong>与<strong>神灵信仰</strong>。城堡与教堂比邻而建，甚至共用部分结构，这在欧洲极为罕见。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是<strong>12世纪罗马式大教堂</strong>的建立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大约在<strong>1185年</strong>，这座献给圣母的教堂开始兴建。它并非由教会主导，而是当时的领主<strong>乌尔里希二世伯爵</strong>的意志体现。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的编年史暗示，伯爵此举既为彰显虔诚，也为巩固统治，将信仰中心牢牢掌控在自己手中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教堂的建设持续了数十年，其宏伟的罗马式后殿和地下祭坛留存至今。它标志着纳沙泰尔从纯军事据点，向一个拥有精神中心的完整领地演变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个不可磨灭的印记，是<strong>1707年的继承危机与普鲁士的降临</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "纳沙泰尔伯爵家族于<strong>14世纪</strong>绝嗣，领地几经转手，最终在<strong>16世纪</strong>通过联姻归属法国奥尔良-隆格维尔家族。<strong>1707年</strong>，最后一位隆格维尔公爵去世，无直系继承人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一场欧洲瞩目的继承争端爆发。根据复杂的继承法，最有竞争力的两位宣称者是：" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "法国国王<strong>路易十四</strong>的孙子；" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "以及，来自德意志的<strong>普鲁士国王腓特烈一世</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，凭借精明的外交运作和法律主张，<strong>普鲁士赢了</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，纳沙泰尔成了一个奇特的存在：一个位于瑞士联邦境内、居民说法语、却由<strong>普鲁士国王</strong>远程统治的伯国。城堡成为了普鲁士总督的官邸。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地一份档案记录着市民的困惑：“我们的国王住在遥远的柏林，说着德语，而我们却要向他的雕像宣誓效忠。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种“身在瑞士，属普鲁士”的扭曲状态，持续了<strong>150多年</strong>。城堡的塔楼上曾飘扬着普鲁士的黑鹰旗，直至<strong>1848年</strong>共和革命将其降下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，写在建筑本身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>19世纪</strong>，城堡进行了大规模的新哥特式改造，尤其是东翼。这次改造抹去了许多中世纪痕迹，却赋予了它如今童话般的轮廓。它从封建堡垒，转变为<strong>纳沙泰尔州</strong>的政府所在地，至今仍是州议会的所在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "权力从伯爵到普鲁士国王，最终归于人民。每一块石头，都见证了这漫长的交接。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座湖边之城的历史星图中，有两位人物以其非凡的人生轨迹，与城堡和大教堂产生了深刻的交集。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是启蒙哲人<strong>让-雅克·卢梭</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1762年</strong>，因出版《爱弥儿》和《社会契约论》触怒当局，卢梭在法国和日内瓦同时遭到通缉，开始了长达数年的流亡生涯。<strong>1762年至1765年</strong>间，他曾在纳沙泰尔地区避难。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时纳沙泰尔的统治者，正是<strong>普鲁士的腓特烈大帝</strong>。这位“开明专制”君主，欣赏卢梭的才华，尽管并不完全认同其观点。他通过当地总督，为卢梭提供了庇护。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卢梭一度住在离城堡不远的莫蒂埃村。在这段相对平静的时光里，他继续写作，并深受当地自然风光的感染。纳沙泰尔湖区的宁静，与他内心的激荡形成了奇特对照。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "卢梭在《忏悔录》中提及这段时光：“在瑞士，在普鲁士国王的庇护下……我找到了一个暂时的避风港。那里的岩石与湖泊，与我孤独的命运相呼应。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然卢梭与城堡内的总督府并无太多直接互动，但他的存在，使得纳沙泰尔这座由保守普鲁士统治的小城，意外地卷入了欧洲启蒙思想最激进的风暴中心。他的足迹，为这里增添了一笔叛逆的思想者色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是本地出生的女改革家<strong>玛丽亚·特蕾莎·冯·韦尔内克</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她并非王公贵族，而是一位<strong>18世纪</strong>的贵族女性，却以非凡的勇气和智慧，在纳沙泰尔的历史上刻下了自己的名字。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的传奇与城堡地窖紧密相连。当时，城堡的地下监牢关押着许多因债务入狱的穷人，条件极其恶劣。<strong>冯·韦尔内克</strong>夫人被这种不公深深触动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她发起了一场静默而有效的改革运动。不仅自己出资改善囚犯的食物和医疗条件，更重要的是，她游说当时由普鲁士指派的<strong>总督</strong>，推动法律变革，试图从根本上废除因债务监禁的制度。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份当时的请愿书记载着她的主张：“剥夺一个穷人的自由，并不能偿还他的债务，只会摧毁他偿还债务的全部希望与能力。这是理性的失败，也是慈悲的缺失。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管完全成功的改革在她有生之年未能实现，但她的努力极大地改善了囚犯待遇，并播下了司法人道主义的种子。她的故事，展现了纳沙泰尔社会在专制统治下，依然孕育出的本土公民精神与改良力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她让人们看到，在这座象征权力的城堡阴影下，人性的光亮如何从最黑暗的地窖中挣扎显现。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这座城堡与大教堂的建造，当地流传着一个与魔鬼交易的经典传说，为冰冷的石头注入了奇幻的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事说，在中世纪兴建庞大的教堂时，工程浩大，进展缓慢。建筑师和工人们为此愁眉不展。一天夜里，<strong>魔鬼</strong>现身，提出一个交易：它愿意在一夜之间完成最困难的拱顶建造，但作为报酬，要取走第一个走进教堂的生物的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "迫于工期压力，领主或工匠（传说的版本不一）无奈答应了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "果然，一夜之间，魔法的力量让宏伟的拱顶拔地而起。然而，当黎明到来，魔鬼得意地守在门口准备收取“灵魂”报酬时，人们陷入了恐慌。谁该第一个进去？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这时，一位聪明的修士（或农夫）想出了一条妙计。他们没有派人进去，而是<strong>赶着一头驴子</strong>，在驴子头上系上一只<strong>饥饿的猫</strong>，猫的面前挂着一串香肠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "饥饿的猫为了追逐眼前的香肠，拼命向前扑，驱赶着驴子懵懵懂懂地走进了崭新的大门。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的民谣这样唱道：“魔鬼要的是灵魂，纯净或罪恶；我们给的是一头驴，和一只猫的饥饿。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "魔鬼发现自己被愚弄，愤怒至极。它猛地一击，在教堂某处的石柱上留下了一个深深的爪印——这个“魔鬼之爪”的痕迹，几个世纪以来，导游们都会指给好奇的访客看。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说不仅解释了建筑的“神速”完成，更深层的隐喻在于：人类的智慧（尽管带着狡黠）可以应对超自然的蛮力。它也反映了中世纪民众对宏伟建筑何以建成的朴素想象，以及深植于信仰中对“与魔鬼交易”的道德警示。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你漫步在纳沙泰尔城堡与大教堂的庭院，触摸那些被岁月打磨光滑的砂岩，你所站立的，远不止是一处风景优美的古迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你站在<strong>神圣罗马帝国</strong>边疆伯爵的瞭望台上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你站在<strong>普鲁士黑鹰旗</strong>曾经飘扬的异国飞地里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你站在庇护过欧洲最敏感思想家的避难所旁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你站在从封建囚牢中萌生人道关怀的沉默地窖之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座建筑群是一部浓缩的、多维的欧洲史。它小众，因为它从未成为广阔舞台的中央主角；它深刻，因为它几乎被动地经历了所有席卷欧洲的潮流：封建制、宗教改革、王朝继承、启蒙运动、民族革命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，正来自于这种<strong>复杂的层叠感</strong>。读懂纳沙泰尔，便是读懂欧洲权力结构的微妙边缘，读懂小城在大国博弈中的身不由己与韧性生存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是教科书上扁平的名词，而是可触、可感、可供人漫步其间的立体空间。每一道石缝，都可能藏着一段王朝的秘密；每一扇彩窗，都滤过了数百年的信仰之光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vals-therme" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瓦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瓦尔斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vals</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/thun-castle-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图恩城堡与老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thun Castle and Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/switzerland-birthplace-schwyz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施维茨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwyz</p>
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
