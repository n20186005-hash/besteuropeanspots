import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博帕德 Boppard｜莱茵河最美大拐弯与沉睡千年的古罗马城墙 - 最佳欧洲景点',
  description: '当火车缓缓驶近博帕德，车窗外的景色会让你不由自主地屏住呼吸。莱茵河在这里做了一个近乎360度的华丽转身，形成那个著名的“博帕德大拐弯”。河水是厚重的墨绿色，像一块流动的翡翠，稳稳地托起两岸层叠的葡萄园、密林和红色屋顶的小镇。下车后，第一股涌进鼻腔的空气是清冽的，混杂着河水淡淡的腥气、湿润石头的味道，',
}

export default function BoppardRomanticRhineGermanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '莱茵兰-普法尔茨州，博帕德镇', href: '/destinations/europe' },
            { label: '博帕德', href: '/attractions/boppard-romantic-rhine-germany' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博帕德・Boppard・德国・莱茵兰-普法尔茨州，博帕德镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当火车缓缓驶近博帕德，车窗外的景色会让你不由自主地屏住呼吸。莱茵河在这里做了一个近乎360度的华丽转身，形成那个著名的“博帕德大拐弯”。河水是厚重的墨绿色，像一块流动的翡翠，稳稳地托起两岸层叠的葡萄园、密林和红色屋顶的小镇。下车后，第一股涌进鼻腔的空气是清冽的，混杂着河水淡淡的腥气、湿润石头的味道，还有从河边咖啡馆飘来的现磨咖啡香。
穿过几条安静的小巷，你突然就撞见了那堵墙。那不是普通的老墙，而是古罗马军团亲手垒砌的堡垒遗墙。灰色的凝灰岩巨石被时光打磨得温润，缝隙里钻出倔强的蕨类植物。把手掌贴上去，冰凉粗糙的触感瞬间打通了时空——仿佛能听到近两千年前，驻守在此的罗马士兵的皮靴声、拉丁语的交谈声，以及远处莱茵河永恒不变的流淌声。它就这么安静地矗立在居民的后花园旁、自行车道的边上，不是被圈起来的“景点”，而是小镇生活肌理的一部分。老奶奶推着购物车从墙边走过，孩子们在墙根下追逐，历史在这里不是教科书，是每天路过的邻居。
傍晚时分，一定要去坐一次缆车，上到“四湖观景台”。当缆车无声地爬升，脚下的小镇、河流、葡萄梯田次第展开，最终，那个完整而壮丽的河弯全景图扑面而来。阳光把河水切割成明暗交织的绸缎，几条游船划过，拖出长长的白线。此刻你才真正理解，为什么诗人和画家们会为这里疯狂。这不是一张明信片，这是一首由自然与时光共同谱写的、立体的史诗。博帕德的魅力，就在于这种极致的反差：山顶是令人心旷神怡的广阔自然，山下是沉睡千年的厚重历史，而中间，是飘着咖啡香和葡萄酒香的、活色生香的当下。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当火车缓缓驶近博帕德，车窗外的景色会让你不由自主地屏住呼吸。莱茵河在这里做了一个近乎360度的华丽转身，形成那个著名的“博帕德大拐弯”。河水是厚重的墨绿色，像一块流动的翡翠，稳稳地托起两岸层叠的葡萄园、密林和红色屋顶的小镇。下车后，第一股涌进鼻腔的空气是清冽的，混杂着河水淡淡的腥气、湿润石头的味道，还有从河边咖啡馆飘来的现磨咖啡香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过几条安静的小巷，你突然就撞见了那堵墙。那不是普通的老墙，而是古罗马军团亲手垒砌的堡垒遗墙。灰色的凝灰岩巨石被时光打磨得温润，缝隙里钻出倔强的蕨类植物。把手掌贴上去，冰凉粗糙的触感瞬间打通了时空——仿佛能听到近两千年前，驻守在此的罗马士兵的皮靴声、拉丁语的交谈声，以及远处莱茵河永恒不变的流淌声。它就这么安静地矗立在居民的后花园旁、自行车道的边上，不是被圈起来的“景点”，而是小镇生活肌理的一部分。老奶奶推着购物车从墙边走过，孩子们在墙根下追逐，历史在这里不是教科书，是每天路过的邻居。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "傍晚时分，一定要去坐一次缆车，上到“四湖观景台”。当缆车无声地爬升，脚下的小镇、河流、葡萄梯田次第展开，最终，那个完整而壮丽的河弯全景图扑面而来。阳光把河水切割成明暗交织的绸缎，几条游船划过，拖出长长的白线。此刻你才真正理解，为什么诗人和画家们会为这里疯狂。这不是一张明信片，这是一首由自然与时光共同谱写的、立体的史诗。博帕德的魅力，就在于这种极致的反差：山顶是令人心旷神怡的广阔自然，山下是沉睡千年的厚重历史，而中间，是飘着咖啡香和葡萄酒香的、活色生香的当下。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博帕德`} />
                <InfoRow label="英文名称" value={`Boppard`} />
                <InfoRow label="正式名称" value={`Boppard`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`莱茵兰-普法尔茨州，博帕德镇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是古罗马帝国在莱茵河前线最重要的军事堡垒之一，其后作为中世纪帝国自由城市繁荣，是莱茵河中段历史变迁的活化石。`} />
                <InfoRow label="建筑特色" value={`拥有欧洲阿尔卑斯山以北保存最完好的古罗马时期军事堡垒遗址墙体，与后期中世纪半木结构房屋、罗马式教堂和谐共存。`} />
                <InfoRow label="建筑风格" value={`以古罗马军事建筑为核心，融合了罗马式、哥特式及莱茵地区典型的半木结构（Fachwerk）民居风格。`} />
                <InfoRow label="文化价值" value={`见证了从罗马边陲到中世纪贸易枢纽，再到浪漫主义时代诗人画家灵感源泉的层层文化积淀，是解读莱茵河历史的关键地点。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城区域全天24小时开放。古罗马城墙遗址（Bopparder Römer-Kastell）可随时从外部参观，信息解说牌全年可见。镇上的博物馆开放时间较为灵活，通常为4月至10月的周二至周日，上午10点至下午5点；11月至3月则多为周末或预约开放，建议行前务必在官网或当地旅游信息中心（位于市场广场）确认最新时间。莱茵河游船运营时间为每年4月初至10月底，班次密集。`} />
              <InfoRow label="门票价格" value={`漫步古城和探访古罗马城墙遗址完全免费。如需进入博帕德地方博物馆（Museum Boppard），成人票约5欧元，学生及团体有优惠。莱茵河游船票价因线路长短而异，从博帕德到圣戈阿的经典航段单程约10-15欧元，推荐购买日票或往返票更划算。`} />
              <InfoRow label="地址" value={`Rheinallee, 56154 Boppard, Germany`} />
              <InfoRow label="交通方式" value={`从法兰克福机场（FRA）出发最便捷：在机场火车站乘坐开往科布伦茨（Koblenz）方向的区域快车（RE），约1小时20分钟抵达博帕德火车站。班次每小时至少1-2班，可在德国铁路（DB）官网或APP提前购票，选择“Boppard Hbf”即可。火车站出来，步行5分钟即可到达莱茵河畔和老城区。更有情调的方式是，从上下游的吕德斯海姆或科布伦茨乘坐莱茵河游船抵达，水上视角无与伦比，船程约1-2小时，班次随季节变化。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从公元前1世纪说起。那时的罗马帝国正如日中天，他们的北方边界以莱茵河为天然屏障。然而，河对岸的日耳曼部落虎视眈眈。大约在公元4世纪，罗马皇帝下令在此建造一座坚固的堡垒，名为“Baudobriga”。它可不是个小哨站，而是长达308米、宽154米，拥有38座塔楼的庞然大物，驻扎着至少500名士兵。这些士兵来自帝国的各个角落，他们用巨大的方形石块，砌起了这道保卫帝国荣耀与安全的城墙。想象一下，在近两千年前的冷兵器时代，这样一堵高大、笔直、工艺精湛的石墙矗立在荒野河畔，对任何来犯者都是何等震撼的宣言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国衰落后，堡垒逐渐被遗弃，石料被当地人拆去建造房屋和教堂。但它的地基和部分墙体太坚固了，就这样顽强地留存下来。时光流转到中世纪，博帕德迎来了第二次生命。它成了神圣罗马帝国皇帝直辖的“自由城市”，凭借莱茵河黄金水道的便利，发展成为繁荣的葡萄酒贸易中心。人们在那古老的罗马城墙之内和之外，建起了精美的半木结构房屋、雄伟的圣塞维林教堂。老城墙被巧妙地融入了新的城市格局，有些部分成了酒窖的外墙，有些成了庄园的边界。罗马的军事严谨，与中世纪市民经济的活力，在这里发生了奇妙的化学反应。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪初，当浪漫主义的浪潮席卷欧洲，莱茵河谷成了艺术家和诗人们的朝圣地。博帕德这个巨大的河弯，以其无与伦比的壮丽和静谧，俘获了无数人心。英国画家特纳用画笔捕捉这里变幻的光影，诗人们为它写下赞歌。旅游业悄然萌芽，那些曾经用于储酒的河畔建筑，被改造成了接待游客的旅馆。然而，平静再次被二战打破，博帕德在轰炸中受损，但幸运的是，那堵最古老的罗马墙和古镇的核心奇迹般地幸存了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战后的重建是审慎而充满敬意的。人们没有推倒重来，而是小心翼翼地修复每一栋有历史痕迹的建筑。更重要的是，上世纪六七十年代的考古发掘，让人们重新认识了那段被遗忘的罗马岁月。那些沉睡在花园和街道之下的地基被揭示出来，立起了详细的解说牌。博帕德不再仅仅是一个风景如画的小镇，它成了可以亲手触摸的、立体的历史教科书。今天的博帕德人，既是葡萄酒农、旅馆主人，也是他们脚下这座“露天博物馆”的守护者和解说员。每一瓶雷司令的标签上，仿佛都印着罗马军团的鹰徽和莱茵河的波光。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间，从容体验博帕德的山水人文三重奏。最好在上午9点前抵达，这时旅游团的大巴还未涌入，晨光中的古镇和莱茵河最为清净柔美。整体节奏宜慢不宜快：上午专注于古镇内部和罗马遗迹的探索，感受历史的脉搏；中午在河畔享用一顿悠闲的午餐；下午乘坐缆车上山，从上帝的视角俯瞰全景，然后可以选择徒步一段葡萄园小径下山，或者乘坐游船从水上回味这段旅程。这样的安排既能深入细节，又能把握宏大气象，不至于匆匆一瞥。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是游船团抵达的高峰期，主街会比较拥挤，建议把室内参观（如博物馆）安排在这个时段。小镇地面多为鹅卵石，务必穿一双舒适防滑的步行鞋。主动向当地餐馆主人或酒庄主人询问历史故事，他们往往能告诉你旅行指南上没有的生动细节。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博帕德火车站出来，别急着进镇，先右转沿着“莱茵长廊”漫步，让那个巨大的河弯全景给你一个充满仪式感的初见震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着河畔小路拐进老城，在“市场广场”停下，看看那口古老的喷泉和色彩斑斓的半木结构房屋，然后抬头寻找圣塞维林教堂那座独特的双塔楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场随意挑一条鹅卵石小巷钻进去，目标明确地寻找那些嵌在民居花园和墙壁间的深灰色巨石——那便是古罗马城墙遗址，记得用手触摸那些刻着岁月纹理的石块。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进“博帕德地方博物馆”，那里收藏着从罗马遗址出土的墓碑、陶器和武器，让墙基上的名字变得有血有肉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在河边找一家有露天座位的家族经营餐馆，点一份经典的“莱茵醋焖牛肉”配上一杯当地产的雷司令干白，看河上船只悠悠往来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后前往镇边的缆车站，乘坐老式的双人缆车缓缓升上“四湖观景台”，山顶的视野会让你觉得一切等待都值得。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力尚可，从观景台沿着标志清晰的“葡萄园文化小径”徒步下山，穿行在一排排整齐的葡萄藤间，从不同角度回望小镇和河弯。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，如果时间充裕，走到码头跳上一艘开往圣戈阿或吕德斯海姆的游船，用流动的视角将这一天山水画卷的回忆再重温一遍。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`四湖观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时光线最佳，使用广角镜头将莱茵河大拐弯、小镇和远山全部收入画中，构图时让S形的河流引导视线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`古罗马墙与民居的融合`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光能照亮石墙的质感，在“安格特小巷”附近，拍摄古老巨石墙作为背景，前景是盛开鲜花的民居窗户，形成强烈的时光对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`缆车俯瞰视角`}</h4>
                  <p className="text-sm text-gray-700">{`在缆车上升过程中，相机贴紧玻璃，拍摄脚下逐渐展开的葡萄梯田和红色屋顶的图案，建议使用高速快门凝固动态。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣塞维林教堂内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的中午，阳光会透过唱诗班席位后高大的哥特式窗户射入，在古老的石柱和地面上投下神圣的光束，适合拍摄极简的明暗对比构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`莱茵河畔的倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨无风时，在“老码头”附近，利用平静如镜的水面拍摄小镇建筑和山峦的完美倒影，对称构图宁静而富有诗意。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄民居和私人花园时请注意礼貌，尽量避免将镜头直接对准屋内居民。使用无人机在当地有严格限制，因属于自然保护区，务必事先查询并申请许可。阴雨天气其实更能拍出古墙的历史沧桑感和莱茵河的氤氲气氛，别忘了保护好相机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景宝藏`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在莱茵河畔的历史建筑酒店，房间带有一个小小的铸铁阳台，清晨推开窗就能看见河面的晨雾与第一班航行的白色游船。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园农庄`}</h4>
                  <p className="text-sm text-green-800">{`位于半山腰葡萄园中的家庭式公寓，主人自家酿酒，入住会赠送一小瓶品尝，夜晚异常安静，只有星空与虫鸣。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`古镇中心特色酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`由一栋16世纪的贵族宅邸改造，房间保留了古老的木梁和石墙，早餐在种满玫瑰的庭院里享用，位置优越到去任何地方都是步行几分钟。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近一家现代而干净的家庭旅馆，主人精通本地历史，乐于提供地图和徒步建议，是探索古镇绝佳的实惠大本营。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（5-9月及圣诞节市场期间）务必提前数月预订，尤其是河景房和特色酒店。古镇内多为老建筑，隔音可能不如现代酒店，但这份“历史的悉索声”正是体验的一部分。住在山上葡萄园的住宿可能需要乘坐出租车或一段小爬坡，但换来的静谧和视野绝对超值。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开博帕德的时候，我的手里似乎还残留着古罗马墙面的凉意，眼底还映着莱茵河那道翡翠般的弯弧。这个地方教给我的，是一种关于时间层次感的微妙体验。它不像那些被精心供奉在玻璃柜里的遗迹，遥远而冰冷。在这里，历史是你可以用后背倚靠的墙根，是孩子们踢球时不小心撞上的“老家伙”，是酒馆老板随口讲出的、关于地窖原来是罗马塔楼基座的故事。这种“活着的历史”，让跨越千年的对话变得如此自然、可亲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求即时刺激、一切高速迭代的世界里，博帕德提供了一种截然不同的价值。它告诉你，有些东西可以慢下来，沉下去，并且以一种优雅的方式与新时代共生。那道罗马墙经历了帝国兴衰、战争烽火，最终成为了社区景观的一部分；那条莱茵河见证了无数运输船、战船、游船，却依然每天倒映着新的云彩。来到这里，你会不自觉地调整自己的呼吸，去匹配河流与山脉的节奏，去聆听石头与葡萄藤的低语。它不仅仅是一个“景点”，更是一个让人重新思考永恒与变迁、人与自然、历史与当下该如何和谐共处的诗意课堂。这才是深度旅行最珍贵的礼物：不是一张照片，而是一种久久回荡在心间的、宁静而深厚的力量。每一位真正想触摸欧洲灵魂的旅人，都应该来博帕德，亲手感受一下这份力量。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/coburg-fortress-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科堡要塞（弗兰肯的王冠）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veste Coburg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/burg-vischering" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    菲
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">菲舍林城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burg Vischering</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/havelberg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈弗尔贝格</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Havelberg</p>
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
