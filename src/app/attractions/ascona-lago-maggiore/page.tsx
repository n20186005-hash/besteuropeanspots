import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿斯科纳 Ascona｜马焦雷湖的彩色明信片与“甜蜜生活”哲学 - 最佳欧洲景点',
  description: '车子刚转过一个弯，马焦雷湖那一片惊人的、介于宝石蓝与孔雀绿之间的湖水，就毫无防备地撞进了眼里。而紧贴着这片炫目蓝色展开的，就是阿斯科纳。你的第一印象绝对是色彩——不是那种崭新刺目的油漆色，而是被湖光、岁月和无数个午后阳光亲吻过的，温润而又饱满的色彩。蜜糖色的墙壁，赭石红的屋顶，鹅卵石铺就的滨湖长廊“...',
}

export default function AsconaLagoMaggiorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿斯科纳', href: '/attractions/ascona-lago-maggiore' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿斯科纳・Ascona・瑞士・提契诺州，阿斯科纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚转过一个弯，马焦雷湖那一片惊人的、介于宝石蓝与孔雀绿之间的湖水，就毫无防备地撞进了眼里。而紧贴着这片炫目蓝色展开的，就是阿斯科纳。你的第一印象绝对是色彩——不是那种崭新刺目的油漆色，而是被湖光、岁月和无数个午后阳光亲吻过的，温润而又饱满的色彩。蜜糖色的墙壁，赭石红的屋顶，鹅卵石铺就的滨湖长廊“朗格码头”上，撑着阳伞的咖啡座几乎要漫到水里去。空气里有咖啡香，有水边特有的、带着一丝清甜的湿润气息，还有从身边经过的、衣着优雅的老人们轻声交谈的意大利语絮语。钟楼的影子慢慢划过广场，时间在这里，仿佛被湖水和暖阳泡得松软、拉长了。
这里最动人的，是那种毫不费力的“生活感”。阿斯科纳不是一座仅供观赏的博物馆。清晨，你会看到穿着笔挺的老先生骑着自行车，车篮里插着刚买的长棍面包；古董店的女主人不紧不慢地擦拭着橱窗；游艇俱乐部的成员们在讨论下午的帆船行程。它完美地平衡了度假胜地的闲适与古镇的日常脉搏。坐在湖边的长椅上，看天鹅悠然地划开一道水痕，背后是色彩斑斓的房屋和远处云雾缭绕的群山，你会瞬间理解为什么上世纪初，那么多艺术家、哲学家和“离经叛道者”会选择逃到这里来——这是一种对“另一种可能”的生活的集体向往。
它的核心魅力，就是一种感官与精神的双重沉浸。你的眼睛饱览着色彩与湖光山色，耳朵里灌满了轻柔的浪声、钟声和笑语，皮肤感受着阿尔卑斯南麓特有的、干爽又温暖的微风。而更深一层，你能感受到这个地方散发出的、历经百年积淀而成的独特气场：它悠闲，但不懒散；它美丽，但不炫耀；它充满国际化的游客，却牢牢守护着一种内在的、提契诺式的灵魂。在这里，“美好生活”不是一个抽象概念，而是弥漫在每一口呼吸、每一道光线里的具体存在。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚转过一个弯，马焦雷湖那一片惊人的、介于宝石蓝与孔雀绿之间的湖水，就毫无防备地撞进了眼里。而紧贴着这片炫目蓝色展开的，就是阿斯科纳。你的第一印象绝对是色彩——不是那种崭新刺目的油漆色，而是被湖光、岁月和无数个午后阳光亲吻过的，温润而又饱满的色彩。蜜糖色的墙壁，赭石红的屋顶，鹅卵石铺就的滨湖长廊“朗格码头”上，撑着阳伞的咖啡座几乎要漫到水里去。空气里有咖啡香，有水边特有的、带着一丝清甜的湿润气息，还有从身边经过的、衣着优雅的老人们轻声交谈的意大利语絮语。钟楼的影子慢慢划过广场，时间在这里，仿佛被湖水和暖阳泡得松软、拉长了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最动人的，是那种毫不费力的“生活感”。阿斯科纳不是一座仅供观赏的博物馆。清晨，你会看到穿着笔挺的老先生骑着自行车，车篮里插着刚买的长棍面包；古董店的女主人不紧不慢地擦拭着橱窗；游艇俱乐部的成员们在讨论下午的帆船行程。它完美地平衡了度假胜地的闲适与古镇的日常脉搏。坐在湖边的长椅上，看天鹅悠然地划开一道水痕，背后是色彩斑斓的房屋和远处云雾缭绕的群山，你会瞬间理解为什么上世纪初，那么多艺术家、哲学家和“离经叛道者”会选择逃到这里来——这是一种对“另一种可能”的生活的集体向往。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就是一种感官与精神的双重沉浸。你的眼睛饱览着色彩与湖光山色，耳朵里灌满了轻柔的浪声、钟声和笑语，皮肤感受着阿尔卑斯南麓特有的、干爽又温暖的微风。而更深一层，你能感受到这个地方散发出的、历经百年积淀而成的独特气场：它悠闲，但不懒散；它美丽，但不炫耀；它充满国际化的游客，却牢牢守护着一种内在的、提契诺式的灵魂。在这里，“美好生活”不是一个抽象概念，而是弥漫在每一口呼吸、每一道光线里的具体存在。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿斯科纳`} />
                <InfoRow label="英文名称" value={`Ascona`} />
                <InfoRow label="正式名称" value={`Ascona`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`提契诺州，阿斯科纳`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个从朴素渔村蜕变而成的20世纪欧洲重要文化与精神思潮的“乌托邦”实验场。`} />
                <InfoRow label="建筑特色" value={`沿着湛蓝湖岸铺展的、被阳光晒得暖洋洋的意大利伦巴第风格联排屋，外墙粉刷成明快的鹅黄、陶土粉、蜜橘色和奶油白。`} />
                <InfoRow label="建筑风格" value={`深受意大利影响的提契诺州本土风格，是阿尔卑斯的硬朗与地中海柔美的完美混血。`} />
                <InfoRow label="文化价值" value={`体现了欧洲人对“美好生活”的不懈追求与定义，是自然美景、艺术创作与哲学思考共同孕育出的“甜蜜生活”活样本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇街道与湖滨全年24小时开放。主要博物馆（如现代艺术博物馆）开放时间通常为周二至周日，上午10点至下午5点或6点，冬季时间可能缩短，周一闭馆。教堂开放时间各异，一般白天对游客开放。建议出行前查询具体场馆最新时间。`} />
              <InfoRow label="门票价格" value={`漫步古镇与湖滨长廊完全免费。参观博物馆需购票，例如阿斯科纳现代艺术博物馆票价约为12-15瑞士法郎，常有学生及老年人优惠。湖畔的游船活动需额外购票，票价因航线长短而异。`} />
              <InfoRow label="地址" value={`Via Borgo, 6612 Ascona, Switzerland`} />
              <InfoRow label="交通方式" value={`最近的国际机场是瑞士卢加诺机场（Lugano Airport， 代码：LUG），距离约15公里。从机场搭乘出租车至阿斯科纳约20分钟，车费昂贵。更经济的方式是乘坐机场巴士到卢加诺火车站（Lugano Stazione），然后换乘。从卢加诺火车站出发，乘坐521路公交车（方向：Locarno, Piazza Stazione），在“Ascona, Posta”或“Ascona, Cinema”站下车，车程约40分钟，班次频繁。另一种梦幻方式是夏季从卢加诺乘坐游船穿越马焦雷湖抵达阿斯科纳码头，航程约1.5-2小时，风景绝佳但班次较少，务必提前查询时刻表。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿斯科纳的故事，远不止于明信片上的美景。早在罗马时代，这里就因其战略位置和渔业资源而有人定居。但让它真正成型的是中世纪，那时它还是一个依附于更强盛的洛迦诺的 humble 渔村，石头房子挤在湖边，居民靠湖吃湖。你可以想象，几个世纪以来，这里的日子就是日出撒网，日落归航，教堂的钟声和海鸥的叫声是生活的背景音。它的颜色或许来自渔民们用湖边的泥土和矿物粉刷墙壁，朴素而实用。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的转折点出现在19世纪末20世纪初。当欧洲笼罩在工业化的喧嚣和世界大战的阴影下时，一批来自德国、俄罗斯等地的知识分子、艺术家、素食主义者、无政府主义者和生活改革家，如同候鸟一般，发现了这片阿尔卑斯山南麓的“世外桃源”。他们厌倦了现代文明的虚伪与束缚，渴望回归自然、简朴与真实。他们中的许多人定居在阿斯科纳背靠的蒙特·韦里塔（“真理之山”）上，形成了一个著名的乌托邦社区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这些人包括舞蹈家玛丽·维格曼、作家赫尔曼·黑塞的伴侣、心理学家卡尔·古斯塔夫·荣格的追随者等等。他们在山上建造简陋的木屋，实践着裸体主义、素食、自由恋爱和各种神秘主义思想。虽然这个社区本身因为内部理念冲突和外部压力并未长久持续，但它像一颗精神种子，深深植入了阿斯科纳的土地。它带来的自由、叛逆和对精神世界的探索气息，逐渐从山上流淌到山下的湖畔小镇，吸引了更多画家、作家和音乐家。阿斯科纳不再只是一个渔村，它成了一个符号，一个关于逃离、创造和寻找生命真谛的梦想之地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二战之后，随着欧洲经济的复苏和旅游业的兴起，阿斯科纳凭借其无与伦比的自然风光和已然形成的文化艺术声誉，迅速转变为高品质的度假胜地。聪明的当地人没有推倒老房子建高楼，而是精心维护那些彩色的古老建筑，将滨湖区域打造成充满情调的长廊。艺术家们留下的遗产变成了画廊和博物馆，比如那座收藏了众多现代艺术作品的博物馆。昔日哲学家们辩论的湖边，如今坐满了享受冰淇淋和 aperitivo（餐前酒）的游客，但那种追求“甜蜜生活”的精髓，却被完整地继承和商业化了——以一种非常优雅的方式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的阿斯科纳，是这段层层叠叠历史的最终呈现。渔村的根基给了它质朴的底色和与湖的亲密关系；乌托邦的插曲赋予了它独一无二的精神气质和国际化的基因；旅游业的繁荣则带来了精致的面貌和活力。走在这里，你脚踏的是中世纪的鹅卵石，眼观的是文艺复兴以来就流行的建筑色彩，呼吸的则是20世纪先锋思想者们所渴望的自由空气。它是一本立体的历史书，每一页都写着对“幸福”的不同定义。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一整天的时间，像品尝一道多层次的甜点一样，悠闲地品味阿斯科纳。最好的节奏是从清晨开始，趁大批一日游游客尚未从卢迦诺或米兰涌来时，独自拥有老城宁静的街巷。上午专注于探索迷宫般的老城内部和教堂，感受本地生活气息。午餐前后，将舞台交给湖畔长廊，这时阳光正好，湖水的颜色最是绚烂。下午可以参观一两个博物馆或画廊，让身体和心灵都得到满足。傍晚则什么都不做，彻底融入“甜蜜生活”的节奏，看日落，喝一杯，直到华灯初上。这样的安排张弛有度，既能深入内核，又能享受其最著名的湖畔风情。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午的集市非常热闹，是体验本地风情的好机会，但也会人潮拥挤，注意保管好随身物品。
夏季午后的湖边阳光非常强烈，务必准备好防晒霜、帽子和墨镜，否则很容易被晒伤。
许多小巷地面是凹凸不平的鹅卵石，为了行走舒适和安全，请务必穿一双鞋底柔软耐磨的平底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从老城中心标致的石门“Torretta”下穿过，让自己瞬间跌入一个由高窄房屋夹峙的、光影斑驳的迷宫小巷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在宁静的“ Piazza San Pietro”广场驻足，仰视罗马式的圣彼得和圣保罗教堂的粗犷石墙和古朴钟楼，听一听最早的钟声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`挤进本地人中间，逛逛市政厅前小广场上的每周市场（通常是周二和周六上午），摸摸新鲜果蔬，感受扑面而来的生活热浪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“Via Borgo”主街慢慢踱步，鼻子会被两旁面包店飘出的黄油香和熟食店悬挂的萨拉米香气频频打扰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在滨湖长廊“Lungolago”选一个正对湖水的露天座位，点一份提契诺风味的烩饭（Risotto）或湖鱼，让午餐时间被阳光和波光拉得无限长。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后走进阿斯科纳现代艺术博物馆，让那些曾受此地灵感滋养的艺术家作品，为你讲述这个小镇另一面的精神故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`租一艘脚踏船或 simply 找一张湖边的长椅，什么也不做，就看着雪山倒影在湖水中融化，帆船静静滑过，彻底实践“dolce far niente”（无所事事的甜蜜）的哲学。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分，随着人群再次汇聚到长廊，加入“passeggiata”（傍晚散步）的仪式，并在码头边一家浪漫的餐厅露台，用一杯当地梅洛葡萄酒为这一天镀上金边。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`清晨航拍或对岸长焦`}</h4>
                  <p className="text-sm text-gray-700">{`从湖对岸的Ronco sopra Ascona或Brissago方向，利用清晨柔和顺光，拍摄小镇彩色建筑群在碧蓝湖水和雪山背景下的全景，层次感极佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老城巷弄光影`}</h4>
                  <p className="text-sm text-gray-700">{`上午九十点，阳光斜射入“Via delle Cappelle”等窄巷，抓住光线照亮一侧暖色墙壁、另一侧留在阴影中的明暗对比瞬间，拍出富有质感的纵深照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`朗格码头色彩与倒影`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，在长廊中段找一个前景是咖啡馆鲜花的座位，以湖中停泊的古典木制“Gondole dei laghi”游船和远处群山为背景，等待湖水平静时拍下完美的对称倒影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`湖堤尽头剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，走到长廊尽头的湖堤上，背对夕阳，以波光粼粼的湖面为背景，拍摄行人、情侣或天鹅的优雅剪影，画面温馨浪漫。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`夜晚码头灯火`}</h4>
                  <p className="text-sm text-gray-700">{`夜幕完全降临后，华灯初上，在“Molo”码头附近，用三脚架长曝光，捕捉彩色房屋窗户透出的温暖灯光在深蓝色湖面上的摇曳倒影，营造静谧梦幻的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重居民隐私，尽量避免将镜头直接对准私人住宅的窗户或阳台上的居民。使用无人机前，务必了解瑞士及当地关于无人机飞行的严格规定，通常在人多的湖畔区域是禁止飞行的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖景阳台民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在老建筑三楼带小阳台的房间，推开木窗就是一片无遮挡的马焦雷湖蓝，早晨在鸟鸣和波浪声中醒来，晚上就着窗外的星光入睡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`由历史建筑改造，内部是极简现代风格，每间客房都摆放着当地艺术家的原作，住在其中就像住进了一个流动的画廊，品味十足。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`花园静谧旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`隐藏在老城一条安静小巷尽头，拥有一个种满柠檬树和橄榄树的秘密花园，早餐在花园里享用，仿佛拥有了一片私人绿洲。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华湖畔庄园`}</h4>
                  <p className="text-sm text-purple-800">{`位于小镇边缘的僻静处，坐拥大片私家公园和无敌湖景，提供顶级水疗和私人码头服务，是彻底逃离喧嚣、享受极致宁静的避世之选。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿斯科纳面积很小，住在老城或湖边任何位置都非常方便，步行即可抵达所有景点。夏季和重大节庆期间（如爵士音乐节）住宿非常紧俏，价格也最高，务必提前数月预订。冬季部分家庭式旅馆可能会歇业，选择相对较少但氛围宁静。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿斯科纳好些天了，但闭上眼，那片湖水的蓝和墙壁的暖黄，依然能立刻在脑海中清晰地浮现出来。它给我的触动，不仅仅在于视觉上的惊艳，更在于它提供了一种关于“如何生活”的、可触摸的范本。在这个我们总是被催促着更快、更高、更强的世界里，阿斯科纳的存在，就像一段悠长而坚定的降调。它告诉你，停下来，坐在湖边，看云卷云舒，让感官完全打开去接收自然与美的馈赠，这本身就不是虚度光阴，而是一种至关重要的能力，一种深刻的幸福。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该来一次阿斯科纳。它或许没有罗马的磅礴、巴黎的时尚，但它在方寸之间，凝聚了阿尔卑斯的壮丽、地中海的柔情、历史的层叠和一种经过百年沉淀的生活智慧。来这里，你不是为了打卡，而是为了上一堂关于“甜蜜生活”的沉浸式大师课。你会带着被湖水洗过的眼睛、被阳光熨帖过的心情，和一份对“美好”更具体、更温暖的记忆回家。这份记忆，足以在往后许多个疲惫的日常里，成为让你会心一笑的光源。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stein-am-rhein-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施泰因老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stein am Rhein Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rapperswil-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉珀斯维尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rapperswil Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chur" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔（瑞士最古老城市）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chur</p>
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
