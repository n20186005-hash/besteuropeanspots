import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞尔维亚拉什卡州历史溯源｜诺维帕扎尔与斯塔里拉斯的前世今生与圣地传说',
  description: '探秘塞尔维亚的摇篮。尘封的斯塔里拉斯古城、奥斯曼风情的诺维帕扎尔，交织成一部跨越千年的史诗，讲述王朝崛起、信仰传承与文明碰撞。',
}

export default function NoviPazarStariRasSerbiaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '塞尔维亚', href: '/destinations/europe' },
            { label: '拉什卡州', href: '/destinations/europe' },
            { label: '诺维帕扎尔与斯塔里拉斯', href: '/attractions/novi-pazar-stari-ras-serbia-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`诺维帕扎尔与斯塔里拉斯・Novi Pazar and Stari Ras・塞尔维亚・拉什卡州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在塞尔维亚西南部的山峦与河谷间，存在着一处被联合国教科文组织双重冠名的圣地。这里并非单一的城市，而是一幅跨越时空的历史拼图：<strong>斯塔里拉斯</strong>，塞尔维亚第一个王国的古老心脏；<strong>诺维帕扎尔</strong>，奥斯曼帝国在此烙下的东方印记。它们毗邻而居，诉说着截然不同却又血脉相连的传奇。抛开游玩攻略，走进拉什卡州的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`诺维帕扎尔与斯塔里拉斯`} />
                <InfoRow label="英文名称" value={`Novi Pazar and Stari Ras`} />
                <InfoRow label="正式名称" value={`Novi Pazar and Stari Ras`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`拉什卡州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事的起点，始于<strong>斯塔里拉斯</strong>。这个名字直译为“古老的拉什”，其历史可追溯到公元9世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非偶然诞生。这里地处<strong>拉什卡河</strong>谷地，是连接亚得里亚海岸与巴尔干内陆、拜占庭帝国与中欧世界的天然十字路口。险峻的群山提供了防御屏障，肥沃的河谷滋养了早期聚落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元8-9世纪，斯拉夫部落在此定居，并逐渐形成了拉什卡地区。它很快成为<strong>塞尔维亚早期国家</strong>的核心。第一个被历史清晰记载的塞尔维亚大公<strong>维谢斯拉夫</strong>，其统治中心便在此区域。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“拉什”这个名字本身，就成了早期塞尔维亚的代称。而斯塔里拉斯，正是这个摇篮的政权中心与精神图腾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "数百年后，另一座城市在几公里外拔地而起，这就是<strong>诺维帕扎尔</strong>。它的诞生，标志着一个全新时代的来临。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元1459年，塞尔维亚专制国彻底被<strong>奥斯曼帝国</strong>征服。为了巩固在这片新领土的统治，奥斯曼帝国指挥官<strong>伊萨-贝格·伊萨科维奇</strong>于1461年下令建立一座新城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他选择了拉什卡河畔一个重要的商路节点。城市被规划为典型的奥斯曼风格，拥有清真寺、集市、公共浴场和坚固的城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其名字<strong>“Novi Pazar”</strong> 在塞尔维亚语中意为“新市场”，直接宣告了它的经济与行政职能——一个帝国边疆的新兴贸易与权力中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，古老的塞尔维亚王权故地与新兴的奥斯曼帝国边城，在时空上重叠，构成了一幅无比深邃的历史图景。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道深刻的印记，是<strong>塞尔维亚国家的诞生与涅槃</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>斯特凡·尼曼雅一世</strong>，这位拉什卡的大公，于1166年从斯塔里拉斯起步。他在附近的<strong>圣彼得教堂</strong>（今彼得罗瓦教堂）加冕，开启了辉煌的<strong>尼曼雅王朝</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我，上帝谦卑的仆人尼曼雅，承蒙圣恩，成为拉什卡、特拉武尼亚、扎胡姆列等地的统治者……” —— 尼曼雅一世在《Studenica宪章》中的自称" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座简朴的石砌教堂，成为了塞尔维亚王权的摇篮。尼曼雅一世及其子孙以此为基础，不断扩张，使塞尔维亚在中世纪巴尔干强势崛起，最终在<strong>杜尚大帝</strong>时期达到巅峰，成为涵盖大半巴尔干的帝国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，斯塔里拉斯作为政治中心的时间并未持续太久。随着王国版图扩大，首都先后迁至<strong>斯图代尼察</strong>和<strong>普里兹伦</strong>。但这里，始终是王朝的龙兴之地与精神故乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是<strong>信仰的丰碑与艺术的巅峰</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "王朝的辉煌，不仅体现在版图上，更凝结于石头与壁画中。在斯塔里拉斯附近的<strong>索波查尼修道院</strong>，建于13世纪60年代，由<strong>斯特凡·乌罗什一世</strong>国王兴建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的<strong>《圣母安息》</strong> 湿壁画，被公认为拜占庭艺术最后的伟大杰作之一。壁画中的天使面容哀伤而宁静，衣褶如水般流畅，将神圣的悲悯与极致的美学和谐统一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座修道院是“拉什卡画派”的代表，其艺术影响辐射整个塞尔维亚。它象征着尼曼雅王朝鼎盛时期，将拜占庭正统、西欧罗马式建筑元素与本土灵魂完美融合的文明自信。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，是<strong>文明的碰撞与层叠</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "15世纪中叶，奥斯曼的铁骑终结了塞尔维亚的中世纪王国。斯塔里拉斯的光辉迅速黯淡，沦为一个不起眼的村庄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但历史并未在此断层。取而代之的，是几公里外兴起的<strong>诺维帕扎尔</strong>。奥斯曼统治者带来了全新的城市肌理与文化景观。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>阿尔特马雷姆清真寺</strong>（建于16世纪）、<strong>阿穆德帕夏集市</strong>、古老的<strong>汉</strong>（商队驿站）陆续建成。宣礼塔的轮廓取代了教堂的钟楼，巴扎（集市）的喧嚣回荡在街头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，征服并未完全抹去过去。许多塞尔维亚人改信伊斯兰教，成为了“波斯尼亚人”。基督教徒则退居山间，守护着如<strong>索波查尼</strong>这样的修道院。于是，这里形成了独特的文化层理：地下是塞尔维亚王国的基石，地上是奥斯曼帝国的市井生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种层叠，直至1878年<strong>柏林会议</strong>后，诺维帕扎尔地区仍由奥斯曼帝国管辖（直至1912年），而塞尔维亚已复国，使得此地的文化混杂状态持续了更久，成为了巴尔干复杂历史的微观缩影。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片土地孕育和吸引了决定塞尔维亚民族命运的灵魂。其中两位，犹如双子星，照亮了中世纪塞尔维亚的夜空。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位，是圣萨瓦——民族精神的铸就者。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣萨瓦</strong>，原名<strong>拉斯特科·尼曼尼奇</strong>，出生于1174年。他的身份无比尊贵：是开国君主<strong>尼曼雅一世</strong>的幼子，王位的潜在继承人。然而，他选择了一条截然不同的道路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "年轻的拉斯特科深受修行生活吸引，于1192年从斯塔里拉斯的宫廷悄然出走，远赴希腊<strong>阿索斯圣山</strong>修道，并取法名“萨瓦”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的出走并非逃避，而是为了获取更强大的力量。在阿索斯山，他建立了塞尔维亚人的修道院<strong>希利恩达尔</strong>，成为塞尔维亚海外精神与文化中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但萨瓦最伟大的功绩，在于回归。当他的兄弟<strong>斯特凡·尼曼尼奇</strong>在国内为王权与教会归属（罗马还是拜占庭）焦头烂额时，萨瓦于1206年返回故乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他带回的，是东正教的圣髑、经典的书籍，以及清晰的愿景。他说服父亲尼曼雅一世退位并一同修道，稳固了家族的神圣性。更关键的是，他凭借在君士坦丁堡的斡旋，于1219年为塞尔维亚争取到<strong>独立的东正教大主教区</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他本人成为首任大主教。从此，塞尔维亚在政治上和宗教上都获得了完全独立。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我为主教区和我的祖国劳心劳力，并非为了世俗的荣耀，而是为了灵魂的救赎和民族的巩固。” —— 圣萨瓦书信中的心声" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在<strong>斯塔里拉斯</strong>地区积极活动，设立教区，主持宗教会议，并编纂了第一部塞尔维亚教会法典与世俗法律《<strong>扎科尼克</strong>》，奠定了国家法治与道德的基础。斯塔里拉斯，可谓他宗教改革事业的行政中心之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨瓦将塞尔维亚从一个摇摆的边区公国，塑造为一个拥有独立教会、统一信仰和法典的成熟王国。他被尊为<strong>塞尔维亚东正教会的创始人、启蒙者和守护神</strong>。他的影响力穿透世纪，至今仍是塞尔维亚民族认同最核心的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二位，是斯特凡·尼曼雅一世——王朝的奠基人与圣徒。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说萨瓦铸造了民族的灵魂，那么他的父亲<strong>尼曼雅一世</strong>则锻造了国家的躯体。他的生涯与斯塔里拉斯紧紧绑定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在成为大公前，他是拉什卡地区的一位贵族。1166年，他在<strong>斯塔里拉斯的圣彼得教堂</strong>被加冕为“拉什卡、波斯尼亚和达尔马提亚的大公”。这座教堂，是他权力的起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的统治充满铁腕与智慧。通过一系列战争与外交，他统一了周边塞尔维亚部落，终结了拜占庭的宗主地位，确立了尼曼雅王朝的统治。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但他人生的转折点，同样在于放下。1196年，在<strong>斯塔里拉斯举行的贵族会议</strong>上，尼曼雅出人意料地宣布退位，将权力传给次子斯特凡，自己则与幼子萨瓦一同前往阿索斯山修道，取名“西美昂”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的退隐并非失败，而是将王权与神权结合的终极策略。他最终在阿索斯山去世，遗骸后被圣萨瓦运回塞尔维亚，安葬在<strong>斯图代尼察修道院</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尼曼雅一世因此被追封为<strong>圣西美昂</strong>。他从开国君主变为护国圣徒，完成了从“权力的奠基者”到“王朝神圣性源泉”的蜕变。斯塔里拉斯，见证了他作为统治者的开端，也见证了他作为父亲和修行者旅途的起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这两位父子圣徒，一位从斯塔里拉斯走向世界寻求精神之火，另一位从世界将火种带回斯塔里拉斯并使之燎原。他们的故事，在这片河谷中交织，赋予了斯塔里拉斯无可替代的“塞尔维亚摇篮”的神圣地位。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这片神圣与世俗交织的土地上，传说如同河底的卵石，被时光打磨得温润而神秘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最动人的传说，围绕着<strong>圣人石棺</strong>。在<strong>索波查尼修道院</strong>，除了精美的壁画，还保存着一些中世纪的石棺。当地人深信，其中一具属于一位无名的圣徒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在奥斯曼统治的黑暗时期，一位虔诚的基督徒在梦中得到启示：山间修道院中沉睡着一位圣人，其遗骨能庇护信徒。人们按梦寻去，发现了这具石棺。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“每当月圆之夜，石棺会泛起微光，生病的信徒若在旁虔诚祈祷，便能获得慰藉与力量。” —— 当地口述传说" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说代代相传，使得索波查尼即便在最艰难的岁月，也依然是附近塞尔维亚村民的精神寄托。它不再是王室修道院，却成为了民间信仰的灯塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说，则与<strong>诺维帕扎尔</strong>的建立者<strong>伊萨-贝格</strong>有关。相传他在选址建城时，曾站在如今城市所在的山坡上俯瞰拉什卡河谷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他看到脚下商旅不绝，但也感受到脚下大地深处，似乎回荡着古老的钟声与祈祷。他的谋士建议另择他处，以免冲撞“旧日的神灵”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但伊萨-贝格雄心勃勃，他下令将第一座清真寺的基石深深打入地下，并说道：“让新的宣礼塔，建立在古老的基石之上。唯有如此，统治才能稳固。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说巧妙地隐喻了诺维帕扎尔建立在斯塔里拉斯文明层之上的历史事实，也反映了征服者对被征服土地古老力量的复杂敬畏心理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有关于<strong>圣萨瓦的梦</strong>的传说。在他少年时期居住于斯塔里拉斯宫廷时，曾梦见自己用一只<strong>金色的杯子</strong>，从<strong>拉什卡河</strong>中取水，浇灌整个塞尔维亚的土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个梦被解读为他未来将用信仰（金杯）汲取本土的精神源泉（拉什卡河），滋养整个民族的预言。拉什卡河谷， thus，在传说中成了塞尔维亚精神命脉的发源地。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你站在<strong>彼得罗瓦教堂</strong>的残垣前，脚下是尼曼雅加冕的基石；当你漫步于<strong>诺维帕扎尔的巴扎</strong>，耳边是混着塞尔维亚语与土耳其语的叫卖声；当你凝视<strong>索波查尼</strong>壁画上天使哀戚的眼神——你并非在参观孤立的景点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你是在阅读一部<strong>活态的考古层</strong>。斯塔里拉斯代表着深埋的根，诺维帕扎尔象征着生长出的、混合的枝叶。从塞尔维亚王权的勃兴，到奥斯曼文明的浸染，再到现代民族国家的重构，所有的矛盾、融合、断裂与延续，都压缩在这片看似宁静的河谷之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有维也纳的恢弘，也没有巴黎的浪漫。它的魅力，在于那种<strong>原始的、未经雕琢的历史厚重感</strong>。你能触摸到国家诞生的阵痛，能感受到信仰穿越迫害的韧性，能体会到文明层叠的复杂与真实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂诺维帕扎尔与斯塔里拉斯，便是读懂了塞尔维亚乃至巴尔干半岛千年史诗的<strong>序章与核心矛盾</strong>。它是一座露天的、关于身份与记忆的博物馆。每一次造访，都是与塞尔维亚灵魂最古老回声的一次对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/novi-sad-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺维萨德要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Petrovaradin Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/golubac-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈卢巴茨要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Golubac Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/djavolja-varos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    魔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">魔鬼城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Đavolja Varoš</p>
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
