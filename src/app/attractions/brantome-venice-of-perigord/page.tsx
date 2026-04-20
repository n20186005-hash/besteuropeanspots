import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩里戈尔的布朗托姆（法国威尼斯）Brantôme｜睡在文艺复兴画卷里的水乡，聆听岩洞中的千年钟声 - 最佳欧洲景点',
  description: '车子刚拐进布朗托姆的地界，我就把车窗全摇了下来。空气立刻变得不一样了，湿润、清甜，混合着河岸青苔、老石头和远处面包房飘来的黄油香。第一眼看到它，你会愣一下，怀疑自己是不是不小心开进了一幅被水浸润的文艺复兴油画里。德罗讷河在这里温柔地分叉，像一个环抱的臂弯，把整个小镇轻轻搂在怀里。那些用蜜色石灰岩砌成...',
}

export default function BrantomeVeniceOfPerigordPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '佩里戈尔的布朗托姆（法国威尼斯）', href: '/attractions/brantome-venice-of-perigord' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩里戈尔的布朗托姆（法国威尼斯）・Brantôme・法国・布朗托姆， 多尔多涅省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐进布朗托姆的地界，我就把车窗全摇了下来。空气立刻变得不一样了，湿润、清甜，混合着河岸青苔、老石头和远处面包房飘来的黄油香。第一眼看到它，你会愣一下，怀疑自己是不是不小心开进了一幅被水浸润的文艺复兴油画里。德罗讷河在这里温柔地分叉，像一个环抱的臂弯，把整个小镇轻轻搂在怀里。那些用蜜色石灰岩砌成的房子就倒映在墨绿的水中，随着水波微微晃动，房顶是温暖的陶土红。最妙的是那几座低矮的古桥，桥上站着懒洋洋的垂钓者，桥下，成群的野鸭和天鹅正排着队，从容不迫地划过水面，水声潺潺，是这里永恒的白噪音。
你很快会发现，这里的生活节奏是和流水同步的。当地人并不把这条河当成一个景点，而是他们客厅和厨房的延伸。我看到一位老太太从临河的厨房窗口，直接用篮子吊下一只瓶子，在河里汲水浇花；咖啡馆的露天座位几乎就支在水面上，人们喝着早晨的咖啡，脚边可能就挨着一只熟睡的肥猫。在这里，“威尼斯”的称号并非指它有纵横交错的运河，而是那种人与水亲密无间、建筑从水中生长出来的诗意。时间仿佛被这河水泡软了，拉长了，一切都慢得让人心安。
但布朗托姆的魔力不止于水面之上。当你走近镇子中心那座看似敦实的修道院建筑群，一种更古老、更神秘的气息会将你笼罩。那是从山体岩石本身散发出来的凉意和历史感。这座修道院的后身，竟直接嵌入了一座巨大的天然岩壁之下。你能隐约听到，在流水声和市集喧闹之下，有一种更深沉的寂静，从那些黑暗的岩洞入口处弥漫开来。水面上的小镇明媚如童话，而水面之下，岩体之中，却隐藏着信仰与时光雕刻的另一重世界。这种光明与幽暗、轻盈与厚重的极致对比，正是布朗托姆最打动人心的核心魅力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚拐进布朗托姆的地界，我就把车窗全摇了下来。空气立刻变得不一样了，湿润、清甜，混合着河岸青苔、老石头和远处面包房飘来的黄油香。第一眼看到它，你会愣一下，怀疑自己是不是不小心开进了一幅被水浸润的文艺复兴油画里。德罗讷河在这里温柔地分叉，像一个环抱的臂弯，把整个小镇轻轻搂在怀里。那些用蜜色石灰岩砌成的房子就倒映在墨绿的水中，随着水波微微晃动，房顶是温暖的陶土红。最妙的是那几座低矮的古桥，桥上站着懒洋洋的垂钓者，桥下，成群的野鸭和天鹅正排着队，从容不迫地划过水面，水声潺潺，是这里永恒的白噪音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这里的生活节奏是和流水同步的。当地人并不把这条河当成一个景点，而是他们客厅和厨房的延伸。我看到一位老太太从临河的厨房窗口，直接用篮子吊下一只瓶子，在河里汲水浇花；咖啡馆的露天座位几乎就支在水面上，人们喝着早晨的咖啡，脚边可能就挨着一只熟睡的肥猫。在这里，“威尼斯”的称号并非指它有纵横交错的运河，而是那种人与水亲密无间、建筑从水中生长出来的诗意。时间仿佛被这河水泡软了，拉长了，一切都慢得让人心安。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但布朗托姆的魔力不止于水面之上。当你走近镇子中心那座看似敦实的修道院建筑群，一种更古老、更神秘的气息会将你笼罩。那是从山体岩石本身散发出来的凉意和历史感。这座修道院的后身，竟直接嵌入了一座巨大的天然岩壁之下。你能隐约听到，在流水声和市集喧闹之下，有一种更深沉的寂静，从那些黑暗的岩洞入口处弥漫开来。水面上的小镇明媚如童话，而水面之下，岩体之中，却隐藏着信仰与时光雕刻的另一重世界。这种光明与幽暗、轻盈与厚重的极致对比，正是布朗托姆最打动人心的核心魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩里戈尔的布朗托姆（法国威尼斯）`} />
                <InfoRow label="英文名称" value={`Brantôme`} />
                <InfoRow label="正式名称" value={`Brantôme`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`布朗托姆， 多尔多涅省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座围绕本笃会岩洞修道院发展起来的中世纪珍宝，被誉为“佩里戈尔的威尼斯”，是法国最美乡村之一。`} />
                <InfoRow label="建筑特色" value={`建筑与自然岩洞完美融合，古老的石桥、水车坊与清澈的德罗讷河共同构成了一幅灵动的水城画卷。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴时期建筑为主体，融合了罗曼式根基与中世纪防御工事元素，呈现出独特的“水上石城”风貌。`} />
                <InfoRow label="文化价值" value={`它不仅是宗教建筑的奇观，更是佩里戈尔地区慢生活哲学与历史层理的鲜活见证，一种被流水声包裹的永恒宁静。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`布朗托姆镇本身全天开放。核心景点布朗托姆修道院及岩洞教堂的开放时间随季节变化：4月至9月一般为9:30-18:30；10月至3月一般为10:00-17:00。每周二闭馆（7月和8月除外）。具体时间建议出行前在其官网核实。镇上的市集每周五上午举行，是体验本地生活的最佳时段。`} />
              <InfoRow label="门票价格" value={`进入古镇免费。参观布朗托姆修道院博物馆、回廊及岩洞教堂需购票。全票价约8欧元，优惠票价（学生、团体等）约6欧元。12岁以下儿童免费。提供包含语音导览的套票。附近的多尔多涅河乘船游览项目需单独付费，约10-12欧元/人。`} />
              <InfoRow label="地址" value={`Abbaye de Brantôme, 24310 Brantôme, France`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是佩里格（Périgueux）。从巴黎蒙帕纳斯车站乘坐TGV高速列车至佩里格站，约3.5小时。从佩里格火车站外的公交枢纽，可乘坐Transpérigord公司的240路公交车前往布朗托姆，车程约45分钟，但班次有限，一天仅数班，务必提前查好时刻表。最灵活的方式是自驾，从佩里格沿D939公路向东北方向行驶约25公里即可到达，沿途是连绵的佩里戈尔绿色乡间，本身就是一种享受。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起布朗托姆的起源，得把时钟拨回公元769年那个战火纷飞的年代。当时的法兰克国王，也是后来被尊为查理曼大帝的查理，正在阿基坦地区进行一场巩固权力的战役。传说，他麾下的一位贵族在这片被德罗讷河环绕的隐秘之地获得了一场关键胜利。为了感恩，也可能是看中了这里易守难攻的地形与宁静灵修的氛围，查理曼大帝决定在这里奠基，建立一座本笃会修道院。最初的修士们并没有大兴土木，他们做出了一个极为聪明的选择：直接利用河岸上方那巨大的天然石灰岩洞穴。他们在岩洞中开辟出祈祷室、宿舍和储藏间，岩壁就是最坚固的墙壁和屋顶。这使布朗托姆修道院从诞生之初，就带有一种粗粝、原始且与大地紧密相连的神秘气质。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的几个世纪，修道院在和平与动荡中交替成长。到了文艺复兴时期，布朗托姆迎来了它的“黄金时代”。这要归功于一位关键人物——皮埃尔·德·布尔代耶。他不仅是修道院的院长，更是一位深具人文主义修养的学者、艺术赞助人和政治家。16世纪中叶，他主持了对修道院的大规模重建与美化。我们今天看到的修道院主体建筑，尤其是那座优雅的钟楼（被誉为“佩里戈尔最古老的钟楼”），以及装饰着精美雕刻的回廊，大多是在他的意志下完成的。风格从朴素的罗曼式转向了更轻盈、更富装饰性的文艺复兴风。皮埃尔院长还大力扩建了修道院的图书馆，收集了大量珍贵手稿，让这里一度成为地区文化中心。你可以想象，在那个年代，学者、艺术家与虔诚的修士们在这山水之间探讨学问、创作艺术的景象。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的浪潮总会带来冲刷。16世纪后期，席卷法国的宗教战争（胡格诺战争）也没有放过这个世外桃源。布朗托姆因其战略位置（水运和防御）而多次成为争夺的焦点，修道院建筑遭受了严重破坏，珍贵的藏书也大量散佚。战火过后，修道院虽然得以修复，但往昔的学术辉煌已难再现。更大的转折点发生在法国大革命期间。1790年，修道院被国有化，修士们被驱逐，庞大的建筑群被分割出售，变成了私人财产、仓库甚至工厂。曾经回荡着格里高利圣咏的岩洞教堂，一度沉寂，几乎被人遗忘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到19世纪，浪漫主义的风潮重新“发现”了法国乡村的历史价值。布朗托姆如画的风光、中世纪的桥梁和带有悲情历史色彩的修道院遗址，吸引了画家、诗人和早期的旅行者。人们开始用“佩里戈尔的威尼斯”来称呼它，它的美不再只属于修士和农民，而成为了整个民族文化遗产的一部分。20世纪后，当地政府和文化遗产保护机构开始系统地修复这些古老的建筑。岩洞教堂被重新清理开放，里面8世纪的摩崖石刻《最后审判》重见天日，震撼世人。修道院建筑的一部分成为了市政厅和博物馆。于是，这座小镇完成了它奇妙的身份叠合：它既是依然跳动着生活脉搏的鲜活水乡，又是一座露天的、可以触摸的中世纪与文艺复兴博物馆。它的历史，就这样一层层地沉淀在石头里、流淌在河水中，等待每一个到来的人静静倾听。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味布朗托姆，你需要至少一整天的时间，并且最好在这里住上一晚，感受它清晨与黄昏截然不同的魔力。建议在早上九点前抵达，这时旅游大巴还未涌入，小镇还沉浸在本地生活的节奏中。整体游览节奏应是“先外后内，先明后暗”：上午沿着河岸漫步，感受水乡的明媚生机，参观市集（如果是周五）；午后当阳光变得强烈时，正好进入凉爽的修道院和岩洞教堂进行深度探索；傍晚则留给一场平静的乘船游览或是在河边享用一顿漫长的晚餐。这样的安排能让你最全面地体验小镇的光影变化与动静之美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（7-8月）是旅游高峰，中午至下午人最多，尽量利用清晨和傍晚游览核心区域。小镇街道多为鹅卵石铺就，务必穿一双舒适防滑的鞋子。河边和岩洞附近湿度大、温度低，即使夏季也建议带一件薄外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清早先从老磨坊广场出发，沿着德罗讷河左岸漫步，看阳光如何一点点染红那些临水而建的蜜色石屋的墙面`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过古老的“修士桥”，在桥中央停下，感受脚下河水的流动，看两岸垂柳如何轻拂水面，仿佛为你勾勒一幅动态的风景画`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进河岸旁每周五才热闹非凡的露天市集，尝尝当地农妇篮子里还带着泥土芬芳的松露或草莓，感受最地道的佩里戈尔生活气息`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`来到修道院广场，别急着进去，先绕到建筑侧面，仰头看看那座从岩壁中“生长”出来的、挺拔的文艺复兴式钟楼`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入修道院建筑，在凉爽的回廊里静静走一圈，观察柱头上那些已被岁月模糊但依然生动的雕刻，想象修士们曾在此默想徘徊`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随指示进入幽暗的岩洞教堂，让眼睛适应黑暗后，寻找岩壁上那幅震撼的8世纪石刻《最后审判》，感受千年信仰的凿刻之力`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到河边，跳上一艘平底小船，让船夫带你从水中的视角重新欣赏小镇，看夕阳如何为整个布朗托姆镀上一层金黄`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐一定要选一家有临河露台的餐厅，点一份用本地核桃油调味的鸭胸沙拉，配上一杯贝尔热拉克葡萄酒，让味蕾也记住这个夜晚`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老磨坊水车坊侧后方`}</h4>
                  <p className="text-sm text-gray-700">{`下午四至六点的侧逆光，能将古老的水车、飞溅的水花和对岸的房屋一同纳入镜中，形成动静结合、光影斑驳的生动画面`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“修士桥”中段靠西侧栏杆`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时，阳光正好照亮对岸的修道院建筑群和钟楼，利用河面倒影可以拍出极具对称感和宁静氛围的经典明信片角度`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`修道院回廊的东北角拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，强烈的阳光穿过两层拱廊，会在石板地上投下深邃而富有韵律的光影长廊，在此等待一个路人走过，能拍出极具故事感的剪影`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`岩洞教堂入口向内拍`}</h4>
                  <p className="text-sm text-gray-700">{`使用三脚架长时间曝光，捕捉从洞口射入的一束天光与内部幽暗岩壁、古老石柱的强烈对比，营造神秘而神圣的宗教氛围`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`德罗讷河游船行至河湾处回望`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚“蓝色时刻”，从河上平视的角度拍摄小镇，所有建筑亮起暖黄色的灯光，与水面的冷蓝倒影交相辉映，色彩对比无比迷人`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除河面反光，让倒影更清澈、天空更蓝。在岩洞内拍摄严禁使用闪光灯，以免损坏珍贵的古代石刻，并打扰其他游客的静谧体验。航拍前务必了解当地法规，小镇中心及历史建筑上空通常禁飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔田园诗`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在德罗讷河岸边的老石头民宿，推开木窗就能垂钓，夜晚在潺潺水声中入眠，老板娘会为你准备装满本地特色的早餐篮`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`隐修院时光`}</h4>
                  <p className="text-sm text-green-800">{`由修道院附属古老建筑改造的精品酒店，房间有着厚重的石墙和原始的木材梁，部分房间还能看到岩壁景观，体验一把现代修士的宁静`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`葡萄园视角`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇外围一处缓坡上的家庭式庄园酒店，被自家的核桃树和葡萄园环绕，房间露台拥有俯瞰整个布朗托姆水乡全景的无敌视野`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感水岸`}</h4>
                  <p className="text-sm text-purple-800">{`镇上为数不多的现代设计风格酒店，将玻璃、钢铁与老石头巧妙结合，拥有一个延伸至河面上的悬空酒吧，是欣赏日落夜景的时髦选择`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布朗托姆非常小巧宁静，治安极好，任何位置的住宿都很安全。旺季（夏季和春秋假日）房源极其紧张，务必提前数月预订。选择住在镇外庄园虽然风景好，但若无车，晚间进出小镇觅食会不太方便。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布朗托姆好些天了，但耳边似乎总还萦绕着那潺潺的流水声。那声音不像大海般汹涌，也不像瀑布般激烈，它就是那样平和地、持续地存在着，像这个小镇的脉搏，也像这里千年历史的背景音。在这个一切都被加速的时代，布朗托姆提供了一种罕见的“减速力”。它让你不得不慢下来——慢到可以看清水草摇曳的方向，慢到可以分辨出石头墙壁上不同年代的风化痕迹，慢到可以在一杯咖啡的时间里，仅仅就是看着河水发呆，而内心却感到无比富足。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里教会我的，是一种“层叠式”的旅行美学。它不仅仅是一个风景如画的拍照背景板。当你徜徉在水边时，你看到的是文艺复兴的优雅倒影；当你触摸岩洞冰冷的石壁时，你连接的是查理曼大帝时代的粗犷信仰；当你品尝着用古法榨取的核桃油时，你体验的是几个世纪未曾改变的农耕智慧。历史、自然、艺术与日常生活在布朗托姆不是被分割陈列的，而是像它的建筑与岩洞一样，共生共存，层层叠叠，最终酝酿出那一口回味悠长的、名为“生活本身”的醇酒。所以，如果你也厌倦了走马观花，渴望一场能沉入时光深处的旅行，那么，请一定来布朗托姆住上几天。让德罗讷河的水流，也洗一洗你被都市喧嚣磨损的感官与心灵。你会发现，最美的风景，往往就藏在那些需要你静下心来，才能听见回响的地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/place-stanislas" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    南
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">南锡斯坦尼斯拉斯广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Stanislas</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fontenay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    丰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">丰特莱修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fontenay Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kaysersberg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯斯贝格小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kaysersberg</p>
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
