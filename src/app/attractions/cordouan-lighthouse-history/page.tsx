import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔多昂灯塔历史溯源｜灯塔之王的传奇身世与法国建筑艺术见证',
  description: '矗立大西洋四百年，见证法国王朝更迭的“海上凡尔赛”。探秘灯塔之王科尔多昂的建造秘辛、守护者传奇与不朽艺术之光。欧洲最孤独的灯塔有何故事？',
}

export default function CordouanLighthouseHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '科尔多昂灯塔', href: '/attractions/cordouan-lighthouse-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科尔多昂灯塔・Cordouan Lighthouse・法国・吉伦特省（波尔多外海）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国波尔多外海，吉伦特河口的惊涛之中，一座灯塔如同海上的孤傲王座，已凝视了四个多世纪的风暴与繁华。它并非普通的导航灯塔，而是一座被赋予“海上凡尔赛”之名的建筑奇迹，一部镌刻在石头上的法国近代史。从波旁王朝的雄心到启蒙运动的理性之光，再到无数守塔人孤独的岁月，它的光芒照亮了航道，也映照出时代的灵魂。抛开游玩攻略，走进科尔多昂灯塔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科尔多昂灯塔`} />
                <InfoRow label="英文名称" value={`Cordouan Lighthouse`} />
                <InfoRow label="正式名称" value={`Cordouan Lighthouse`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`吉伦特省（波尔多外海）`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "严格来说，科尔多昂并非一座“城市”，而是一座建立在孤寂岩礁上的传奇建筑。它的故事，始于那片名为“Cordouan”的险恶礁盘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里自古就是航海者的噩梦。罗马人可能曾在此设立简陋的烽火，而最早的明确记载始于中世纪。为了引导船只安全进入波尔多这座繁华的酒港，14世纪中叶，<strong>英格兰的黑太子爱德华</strong>下令，在礁石上建造了一座简陋的石塔，顶上燃烧木炭火焰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这可以被视为科尔多昂的史前篇章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正让这座灯塔脱胎换骨的，是文艺复兴的雄心。16世纪末，随着大西洋贸易的兴盛，旧塔早已倾颓。<strong>1584年</strong>，时任吉耶讷总督的<strong>路易·德·福瓦</strong>伯爵萌生了一个宏伟的构想：建造一座配得上法兰西王国荣耀的灯塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的雄心得到了国王<strong>亨利三世</strong>的支持。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份当时的皇家诏书写道：“在科尔多安礁上，应建立一座灯塔、一座堡垒和一座教堂，以彰显朕的仁慈，并庇护所有海上子民。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字“Cordouan”的由来充满迷雾。一说源于拉丁语“Corduban”，与西班牙科尔多瓦有关，或许暗示了早期罗马或摩尔水手的活动。另一说则指向凯尔特语，意为“瞭望之石”。无论词源如何，这片岩礁注定要承载一个不朽的传奇。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔多昂灯塔的建设本身就是一部跌宕起伏的史诗。工程始于<strong>1584年</strong>，由建筑师<strong>路易·德·福瓦</strong>（与总督同名）主持。然而，宗教战争和资金短缺让工程举步维艰，直到<strong>亨利四世</strong>继位后才重获支持。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道深刻的历史印记，是<strong>路易十四</strong>时代的改造。17世纪末，“太阳王”的荣耀需要投射到海洋尽头。<strong>路易十四</strong>钦点其军事工程师<strong>路易-尼古拉·德·克莱维尔</strong>，对灯塔进行大规模扩建与艺术升华。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德·克莱维尔将灯塔的基座加固为坚实的堡垒，并将塔身拔高。他最为人称道的设计，是在塔内创造了一系列奢华厅堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>国王厅</strong>的大理石柱、拱顶和石雕华美绝伦；<strong>小教堂</strong>的彩绘玻璃窗让神圣的光辉穿透海雾。这座灯塔不再是单纯的导航工具，而成为了王国威望的象征，一个矗立在海中央的微型宫殿，因此赢得了“海上凡尔赛”的美誉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是科学与理性的镌刻。进入19世纪，灯塔的光学技术迎来革命。<strong>1823年</strong>，天才工程师<strong>奥古斯丁·菲涅尔</strong>将其发明的革命性阶梯透镜首次应用于科尔多昂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这组由数百块棱镜组成的庞大装置，将光源的利用率提升至前所未有的高度，光芒可射出40公里以上。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当时的记录形容：“当透镜首次旋转起来时，那道稳定、纯净而强大的光束，仿佛撕开了亘古的黑暗，让整个吉伦特河口为之震撼。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一事件，标志着科尔多昂从一座“艺术纪念碑”正式进化为“科学杰作”，成为现代灯塔技术的奠基石之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，则是战争与和平的见证。二战期间，占领波尔多的德军曾企图炸毁灯塔，以阻碍盟军航线。据说，是当地守塔人机智的周旋与隐瞒，加之德军也被这座建筑的艺术价值所震慑，才使它奇迹般幸存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一道疤痕，每一次技术改造，都如同年轮，记录着它从王权象征到科学丰碑，再到国家遗产的完整轨迹。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔多昂的历史，是由石头、光芒和“人”共同写就的。除了下令建造的国王与工程师，那些在塔中度过漫长孤寂岁月的守护者，才是它灵魂的真正载体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中，<strong>斐迪南·舍维尔</strong>是一个传奇。他并非声名显赫的贵族，却在19世纪末至20世纪初，将自己的大半生献给了这座灯塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "舍维尔于<strong>1892年</strong>首次登上科尔多昂，当时他是一名年轻的助理看守。那时的生活条件极为艰苦。淡水需由小船运来，食物储备时常因风暴中断，冬季的巨浪会直接拍打到底层入口，将塔身完全孤立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他经历了从油灯到乙炔灯，再到电力照明的技术变迁。在一本珍贵的私人日记里，他描绘了与世隔绝的生活细节：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“暴风雨持续了八天八夜。海浪如山，我们感觉整座塔都在颤抖。除了祈祷和维护透镜的旋转，无事可做。夜晚，当我们的光束倔强地刺穿雨幕时，我坚信，那些在颠簸船舱里的水手，一定能看见希望。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "舍维尔最著名的一次壮举，发生在<strong>1917年</strong>严冬。一场罕见的冰风暴导致输送给养的船只无法靠近，塔内燃料即将耗尽。在通信断绝的情况下，他和同伴利用仅存的燃料，精准计算燃烧时间，每隔一段时间才点亮灯光，以最节约的方式，奇迹般地维持了关键航道数周的基本指引，直到救援到来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他退休后写下的回忆录，成为了解灯塔守护者真实生活的宝贵史料。他笔下不仅有孤独与危险，更有对这片海域每一处暗流、每一种天气征兆的如数家珍，以及看到船只循着自己引导的灯光安全驶过时，那份深沉的慰藉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与灯塔命运紧密相连的名人，是工程师<strong>莱昂斯·雷诺</strong>。在<strong>菲涅尔透镜</strong>安装约半个世纪后，<strong>雷诺</strong>于<strong>1854年</strong>主持了对科尔多昂灯塔的一次彻底现代化改造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他设计并安装了更高效、更稳定的旋转机械装置，并改进了居住舱室的条件。他的工作，确保了这座古老灯塔在工业时代依然能保持其核心功能的顶尖水准。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "雷诺对科尔多昂的感情，更像是一位严谨的医生对待一位尊贵的老人。他的改造方案最大限度保留了的原始建筑结构，所有的技术升级都“藏”在经典的外表之下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他曾写道：“我的任务不是改变它的容貌，而是为这颗古老的心脏注入新的活力，让它的目光（指灯光）更加明亮、可靠。” 正是这种对历史遗产的敬畏与技术创新结合的精神，让科尔多昂得以“长生不老”。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与所有古老的航海地标一样，科尔多昂也笼罩在层层传说之中。最古老的传说将它的诞生归于神迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，早在罗马时代之前，一位名叫<strong>圣克莱芒</strong>的圣徒为拯救附近遇难的船只，以祈祷之力让一块礁石发出耀眼光芒，为水手指引了方向。后来的灯塔，便被视作对这一神迹的永恒纪念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个流传甚广的传说，则与“黑公爵”的宝藏有关。中世纪统治阿基坦的<strong>英格兰黑太子爱德华</strong>，以其财富和残酷闻名。民间相信，他将征战掠夺来的大量黄金珠宝，秘密埋藏在了科尔多昂礁石之下，并诅咒任何企图盗宝之人将葬身鱼腹。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老水手们常信誓旦旦地说：“月圆之夜，当灯塔的光束扫过特定角度的礁石时，能看到水下有隐约的金色反光。那是黑公爵的守卫在清点他的财宝。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "灯塔内部的小教堂，也衍生出自己的守护传说。守塔人们深信，守护神<strong>圣费尔米娜</strong>（一位与水手有关的圣女）的雕像庇佑着他们。在多次毁灭性的风暴中，尽管塔身剧烈摇晃，但这尊雕像始终安然无恙，被视为灯塔不倒的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "甚至那日夜不息的光芒本身，也成了传说的一部分。有人说，在特定的浓雾天，光束中会显现出古代沉船水手的幽灵，他们并非可怖，而是安静地循着这束光，寻找回家的路。这些传说，为这座理性的科学建筑，披上了一层浪漫而神秘的海雾面纱。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当人们乘船穿越波涛，靠近这座海上孤塔时，看到的不仅仅是一座仍在服役的灯塔。它是一块<strong>活的</strong>历史界碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它见证了法国从封建王国走向中央集权的<strong>波旁王朝</strong>，烙印着“太阳王”的绝对君权理想。它经历了<strong>启蒙运动</strong>与工业革命的洗礼，其透镜的每一次升级，都是人类理性征服自然黑暗的宣言。它熬过了战争的炮火与岁月的侵蚀，成为了坚韧与守护的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂科尔多昂，便读懂了航海文明中，人类对光明、对秩序、对超越自身局限的不懈追求。它孤独，却从未与世隔绝；它古老，却永远闪烁着最新的科技之光。它提醒我们，最伟大的人文遗产，往往是那些将实用功能推向极致，进而升华为艺术与精神的造物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这片无垠的大西洋入口，科尔多昂灯塔始终是那座最初的“王座”，沉默地讲述着关于权力、科学、孤独与奉献的，石头的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何预约乘船、登塔参观细节、最佳拍摄机位全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/oppede-le-vieux" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥皮内德（吕贝隆）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oppède le Vieux</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bergheim-alsace-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔盖姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bergheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/historic-centre-of-lyon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里昂历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Historic Centre of Lyon</p>
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
