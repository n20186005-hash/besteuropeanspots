import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '艾恩萨历史溯源｜比利牛斯山脚下“黄石之城”的前世今生与国王传说',
  description: '探索西班牙艾恩萨千年传奇。从十字架神迹到皇家特许，从摩尔战役到黄金时代，走进这座被时光定格的比利牛斯山石头要塞。',
}

export default function AinsaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '韦斯卡', href: '/destinations/europe' },
            { label: '艾恩萨', href: '/attractions/ainsa-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`艾恩萨・Ainsa・西班牙・韦斯卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在西班牙韦斯卡省北部，比利牛斯山脉南麓，隐藏着一座时间的琥珀——艾恩萨。它并非由钢筋水泥铸就，而是从山体本身生长出来，一座用温暖蜂蜜色砂岩砌成的完整中世纪城镇。它的轮廓，自11世纪以来就未曾改变过。这里的故事，始于一次神迹般的胜利，盛于一个王国崛起的雄心。抛开游玩攻略，走进艾恩萨的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`艾恩萨`} />
                <InfoRow label="英文名称" value={`Ainsa`} />
                <InfoRow label="正式名称" value={`Ainsa`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`韦斯卡`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "艾恩萨的起点，深植于基督徒与穆斯林在伊比利亚半岛长达数个世纪的角力之中。它的诞生，充满了军事防御的紧迫性与神圣信仰的传奇色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其名“Ainsa”的渊源，常被认为源自拉丁语“<em>Ad Insulam</em>”（在岛屿旁）或前罗马时期的巴斯克语，意为“山脚下的泉水”，精准描述了其背靠山峰、面朝辛卡河与阿拉河交汇处的险要地势。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但关于其建城的核心传说，则指向了公元<strong>724年</strong>。据《<strong>索布拉贝编年史</strong>》记载，时任阿拉贡伯爵的<strong>加西亚·希梅内斯</strong>，为从摩尔人手中收复失地，在此地附近的山林中集结了一支基督徒军队。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "编年史中写道：“……当伯爵的军队在山谷中陷入困境时，他向上帝祈祷。霎时间，一道火红的十字架出现在一棵冬青树上空，光芒照亮了全军。士兵们士气大振，高呼‘为了基督！’，最终奇迹般地击败了敌人。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场被称为“<strong>埃尔·索布拉贝战役</strong>”的胜利，被视为基督徒在比利牛斯山南麓重建势力的关键一役。为了纪念神迹，加西亚·希梅内斯伯爵下令在显现十字架的地方建立一座小教堂，这被视为艾恩萨最早的宗教与精神基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后数百年，围绕这座神圣据点，一个具备强大防御功能的居民点逐渐形成。它扼守着通往法国和阿拉贡内陆的山谷要道，从最初的军事前哨，演变为一个具有战略意义的城镇。那最初的十字架神迹，化作了城镇徽章上永恒的印记。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "艾恩萨的历史，是一部写在石头上的编年史。它的每一条街巷、每一座建筑，都镌刻着从军事要塞到王国重镇的深刻转型。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个无法绕开的印记，便是其<strong>1135年</strong>获得的<strong>皇家特许状</strong>。颁发者是阿拉贡与纳瓦拉之王<strong>拉米罗二世</strong>。这份文件意义非凡，它正式赋予了艾恩萨作为“自由镇”的地位，享有广泛的自治权、市场特权及法律豁免。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份特许状并非凭空恩赐。此时的艾恩萨，已是<strong>索布拉贝伯爵领</strong>的首府，是阿拉贡王国向南方（穆斯林控制区）进行“再征服运动”的重要前进基地与行政中心。授予特权，是为了巩固边境，激励民众在此定居繁衍，将这片土地牢牢刻上基督教的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一政治地位的提升，直接催化了城镇的物理形态。我们今天所见的艾恩萨老城，其主体规划与核心建筑，几乎都定型于<strong>11至13世纪</strong>。巨大的<strong>主广场（Plaza Mayor）</strong>，并非用于悠闲的市集，其最初的设计充满了军事与集会功能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "广场呈巨大的梯形，三面被带有拱廊的石质建筑包围，这些建筑底层是马厩、仓库，上层是民居。一旦外敌入侵，广场可迅速转变为军队的集结地与市民的避难所。它是一座“广场要塞”，体现了边境城镇时刻备战的生活状态。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个核心印记，是矗立在老城最高处的<strong>圣玛利亚教堂</strong>。这座罗马式建筑始建于<strong>11世纪末</strong>，但它的故事远不止于宗教。其厚重的墙体、窄小的窗户，以及坚固的钟楼（兼作瞭望塔），无不昭示着其作为最后防御堡垒的使命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教堂的半圆形后殿外壁，装饰着精致的罗马式浮雕，描绘了《圣经》场景与神话生物。其中，一个抓着人头的狮子浮雕尤为引人注目。有学者认为，这或许隐喻着基督徒战胜异教徒（摩尔人），是将军事胜利与宗教信仰熔于一石的艺术表达。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从特许状到广场，再到教堂，艾恩萨的石头见证了它从神迹之地，成长为阿拉贡王国一把锋利的边防之剑，最终在和平年代，凝固成一座无与伦比的中世纪建筑博物馆。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在艾恩萨的传奇叙事中，有两位人物的身影格外突出。一位是这座城的“精神之父”，另一位则是将其推向繁荣顶峰的“荣耀之王”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，是传奇的奠基者——<strong>加西亚·希梅内斯伯爵</strong>。关于他的确切史料与传说交织，但他无疑是艾恩萨乃至早期阿拉贡历史的核心象征。他并非一开始就是强大的君主，而是一位在山区坚持抵抗的基督徒贵族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在摩尔人势力北侵的阴影下，<strong>加西亚·希梅内斯</strong>的势力范围被压缩在比利牛斯山崎岖的<strong>索布拉贝</strong>地区。他的故事，是典型的边疆领主故事：资源匮乏，但信仰坚定。<strong>724年</strong>的十字架神迹与战役胜利，不仅是一场军事转折，更是为他提供了至关重要的“君权神授”合法性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后，他将统治中心定于艾恩萨。在这里，他不仅管理领土，更成为了抵抗运动的旗帜。他去世后，其子<strong>加林多·加塞斯</strong>继续经营，最终通过与潘普洛纳（纳瓦拉）王室的联姻，将索布拉贝伯爵领融入了正在形成的阿拉贡王国体系。可以说，没有<strong>加西亚·希梅内斯</strong>在艾恩萨奠定的基业，后来统一的阿拉贡王国版图或将改写。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "数百年后，另一位国王深刻地影响了艾恩萨的命运，他就是<strong>佩德罗四世</strong>（<strong>1319-1387</strong>），被称为“<strong>礼仪之王</strong>”。他在位期间，阿拉贡王国在地中海扩张势力，国力鼎盛。<strong>1384年</strong>，<strong>佩德罗四世</strong>亲临艾恩萨，并确认并扩展了该城自古享有的特权。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在皇家文书中，他如此描述艾恩萨：“……我们王国的一面古老而忠诚的盾牌，坐落于边境，历来以其居民的勇气与忠诚而著称。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份认可绝非客套。<strong>佩德罗四世</strong>统治时期，艾恩萨虽已不再是军事前线，但其作为历史起源地的象征意义被空前拔高。他将艾恩萨视为王国古老荣耀与正统性的活化石。在他的支持下，艾恩萨的城市自治机构更加完善，经济也因贸易特权而持续繁荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "民间流传着许多关于<strong>佩德罗四世</strong>访问的轶事。传说他非常喜爱主广场的宏伟，曾在那里举行盛大的骑士比武。也有故事说，他因为欣赏当地居民的忠诚，特别恩准艾恩萨在徽章上使用阿拉贡王室的纹章元素。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这两位人物，一位赋予了艾恩萨诞生的“神性”与最初的使命；另一位则在数百年后，为其加冕了历史的“王权”与永恒的荣耀。他们一始一盛，共同编织了艾恩萨作为“王国摇篮”的传奇身份。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间在艾恩萨的石墙上沉淀，不仅留下了历史，也滋生了无数充满神秘色彩的口传故事。这些传说，让冰冷的石头有了温度与灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最盛大的传说，已然演变为一年一度的庆典——<strong>拉·莫拉莱达节</strong>。每年九月的第一个周末，整个城镇会穿越回中世纪，重演<strong>724年</strong>那场决定命运的战役。当地居民穿上中世纪服饰，扮演基督徒军队与摩尔士兵，在当年的古战场（现已淹没在水库下）象征性地重演战斗。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "高潮是“十字架神迹”的再现：一名骑士高举十字架，从城堡疾驰至主广场，向人群宣告胜利。这个仪式自<strong>1678年</strong>有文献记载以来从未间断，它不再是宗教战争，而是成为社区凝聚与文化记忆的活态传承。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于<strong>圣玛利亚教堂</strong>，也有一个隐秘的传说。据说在教堂厚重的石墙内，隐藏着一间不为人知的圣殿或密室。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老辈人低声讲述：教堂钟楼之下，有一道暗门，通往一个小房间。里面存放着<strong>加西亚·希梅内斯</strong>在<strong>724年</strong>战役中挥舞的原始十字架，以及历代索布拉贝伯爵的宝藏。只有心地最纯洁的人，在特定的月光下，才能找到入口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，环绕城镇的比利牛斯山本身，就是传说的源泉。山间的风被称为“<strong>布斯卡尔多</strong>”（寻找者），传说那是古代寻找金矿的矿工亡灵在游荡。而附近的<strong>奥尔迪萨峡谷</strong>，则流传着关于巴斯克神话中精灵“<strong>金塔玛</strong>”的故事，它们守护着山林，会惩罚砍伐神圣树木的人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论是庄严的历史重演，还是神秘的宝藏密室，或是山间的精灵低语，都构成了艾恩萨人文肌理中不可或缺的部分。它们让历史变得可触可感，让自然山水充满了灵性。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你漫步在艾恩萨空灵的主广场，抚摸那些被阳光晒得温润的黄色砂岩，你触摸的不仅是一座保存完好的中世纪城镇，更是一部立体的、可居住的阿拉贡王国创业史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有后来巴洛克式的繁复叠加，没有文艺复兴的喧哗改造。艾恩萨的美，在于它历史的“纯净度”与“完整性”。它像一枚被突然封存于<strong>14世纪</strong>的时间胶囊，将军事要塞的肃穆、边境重镇的活力、宗教虔诚的庄严，完美地冻结在了石头里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂艾恩萨，意味着读懂一种边疆的生存智慧——如何将防御融入生活，将信仰刻入石雕。意味着理解一个民族起源的神话，如何演变为国家认同的基石。它小众，因为它拒绝融入后来的时尚潮流；它深刻，因为它本身就是源头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到这里，最好的旅行方式便是放任自己迷失在蜿蜒的街巷中，聆听风声穿过拱廊的低语，想象八百年前马蹄石上回响的声音。每一块石头都在讲述，关于生存，关于信仰，关于荣耀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在沉浸于这段凝固的时光之后，你或许会想了解如何更具体地探索它。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、周边徒步路线与美食打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lugo-roman-walls-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢戈古罗马城墙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Walls of Lugo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/buitrago-del-lozoya" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布伊特拉戈德尔洛索亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Buitrago del Lozoya</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tossa-de-mar-medieval-walled-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    滨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">滨海托萨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tossa de Mar</p>
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
