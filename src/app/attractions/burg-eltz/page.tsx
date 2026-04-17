import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃尔茨城堡 Burg Eltz｜深藏在密林谷底、从未被攻陷的千年骑士堡 - 最佳欧洲景点',
  description: '说实话，去埃尔茨城堡的路，本身就充满了仪式感。你不是开车“到达”一个景点门口，而是像一个中世纪的信使或朝圣者，用双脚走进一片深邃的、阳光斑驳的山毛榉与橡树林。林间的空气凉丝丝的，带着苔藓和腐殖土的湿润气息，偶尔有鸟鸣划破宁静。脚下的路是松软的，直到你转过一个弯，山谷陡然下沉，然后——它就出现了。不是...',
}

export default function BurgEltzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '埃尔茨城堡', href: '/attractions/burg-eltz' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃尔茨城堡・Burg Eltz・德国・摩泽尔河谷（近明斯特迈费尔德镇）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，去埃尔茨城堡的路，本身就充满了仪式感。你不是开车“到达”一个景点门口，而是像一个中世纪的信使或朝圣者，用双脚走进一片深邃的、阳光斑驳的山毛榉与橡树林。林间的空气凉丝丝的，带着苔藓和腐殖土的湿润气息，偶尔有鸟鸣划破宁静。脚下的路是松软的，直到你转过一个弯，山谷陡然下沉，然后——它就出现了。不是巍然耸立在山巅俯瞰众生，而是谦逊又骄傲地“窝”在深深的埃尔茨巴赫河谷的臂弯里，那些巧克力褐色的木筋墙、铅灰色的尖顶和爬满藤蔓的塔楼，密密麻麻地挤在一起，仿佛是从那块岩石上自然生长出来的巨大菌落。第一眼的震撼，是它那种与地形、森林完全融为一体的和谐感，没有丝毫突兀。
当你走下最后一段斜坡，穿过古老的石桥和吊门，真正站在城堡庭院里时，感官的体验会更加立体。这里听不到公路的噪音，只有风声穿过塔楼缝隙的呜咽，可能还有远处溪流的潺潺水声。空气里混合着潮湿的石头、古老的木头，或许还有从厨房烟囱里飘出的、若有似无的烟火气。庭院很小，石板地被岁月磨得光滑，抬头望去，四周是被各色窗户、凸肚窗、雕塑和徽章装饰得满满当当的墙面，你会感觉自己被历史紧紧拥抱，甚至有点喘不过气。它的核心魅力，就在于这种极致的“沉浸感”——你不是在看一个被玻璃罩起来的标本，而是踏入了一个时间流速明显变慢的、仍在呼吸的古老生命体。
最打动人的，或许是意识到这座城堡从未被战火彻底摧毁。它的墙壁上没有那些惨烈攻防留下的、后来修补的伤疤。这意味着你看到的一切——从宏伟的骑士大厅里那张巨大的橡木长桌，到家族小教堂中颜色依然鲜艳的十五世纪彩绘玻璃，再到厨房里那些黑漆漆的原始灶台和铜锅——都是原件，都是历经数十代人小心翼翼使用和保存下来的“传家宝”。这种连续性，让历史不再是书本上冰冷的知识，而成了一种可以触摸的、温暖的传承。你会感觉到，埃尔茨家族的后裔（他们至今仍拥有并部分居住于此）并非仅仅是管理者，更像是这份厚重遗产的当代守护者，而你也暂时成为了他们故事里的一个安静访客。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，去埃尔茨城堡的路，本身就充满了仪式感。你不是开车“到达”一个景点门口，而是像一个中世纪的信使或朝圣者，用双脚走进一片深邃的、阳光斑驳的山毛榉与橡树林。林间的空气凉丝丝的，带着苔藓和腐殖土的湿润气息，偶尔有鸟鸣划破宁静。脚下的路是松软的，直到你转过一个弯，山谷陡然下沉，然后——它就出现了。不是巍然耸立在山巅俯瞰众生，而是谦逊又骄傲地“窝”在深深的埃尔茨巴赫河谷的臂弯里，那些巧克力褐色的木筋墙、铅灰色的尖顶和爬满藤蔓的塔楼，密密麻麻地挤在一起，仿佛是从那块岩石上自然生长出来的巨大菌落。第一眼的震撼，是它那种与地形、森林完全融为一体的和谐感，没有丝毫突兀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你走下最后一段斜坡，穿过古老的石桥和吊门，真正站在城堡庭院里时，感官的体验会更加立体。这里听不到公路的噪音，只有风声穿过塔楼缝隙的呜咽，可能还有远处溪流的潺潺水声。空气里混合着潮湿的石头、古老的木头，或许还有从厨房烟囱里飘出的、若有似无的烟火气。庭院很小，石板地被岁月磨得光滑，抬头望去，四周是被各色窗户、凸肚窗、雕塑和徽章装饰得满满当当的墙面，你会感觉自己被历史紧紧拥抱，甚至有点喘不过气。它的核心魅力，就在于这种极致的“沉浸感”——你不是在看一个被玻璃罩起来的标本，而是踏入了一个时间流速明显变慢的、仍在呼吸的古老生命体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是意识到这座城堡从未被战火彻底摧毁。它的墙壁上没有那些惨烈攻防留下的、后来修补的伤疤。这意味着你看到的一切——从宏伟的骑士大厅里那张巨大的橡木长桌，到家族小教堂中颜色依然鲜艳的十五世纪彩绘玻璃，再到厨房里那些黑漆漆的原始灶台和铜锅——都是原件，都是历经数十代人小心翼翼使用和保存下来的“传家宝”。这种连续性，让历史不再是书本上冰冷的知识，而成了一种可以触摸的、温暖的传承。你会感觉到，埃尔茨家族的后裔（他们至今仍拥有并部分居住于此）并非仅仅是管理者，更像是这份厚重遗产的当代守护者，而你也暂时成为了他们故事里的一个安静访客。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃尔茨城堡`} />
                <InfoRow label="英文名称" value={`Burg Eltz`} />
                <InfoRow label="正式名称" value={`Burg Eltz`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`摩泽尔河谷（近明斯特迈费尔德镇）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座由同一家族传承超过800年、历经33代从未被摧毁或易主的传奇城堡，是中世纪骑士文化活生生的见证。`} />
                <InfoRow label="建筑特色" value={`宛如从童话中直接生长出来的建筑群，八座塔楼高低错落，木筋墙、尖顶与石基完美融合，紧密地簇拥在一块陡峭的岩石上。`} />
                <InfoRow label="建筑风格" value={`主要是罗马式与哥特式的混合体，后期加入了文艺复兴时期的装饰元素，展现了从十二世纪到十六世纪的渐进式演变。`} />
                <InfoRow label="文化价值" value={`它不仅是一座军事堡垒，更是一个持续运作的贵族家庭生活博物馆，生动保存了中世纪晚期到近代欧洲贵族的生活图景与审美情趣。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每年四月一日至十一月一日开放，具体时间为每天上午9:30至下午5:30。最后入场时间为下午5:00。城堡内部仅限导览游进入，导览团约每10-15分钟一组，以德语和英语进行。冬季（十一月至次年三月）城堡内部关闭，但外部庭院和周边森林步道依然可自由探访。请注意，节假日开放时间可能微调，出行前务必查阅官网最新公告。`} />
              <InfoRow label="门票价格" value={`城堡内部导览游（含珍宝馆）：成人票14欧元，学生及残障人士票7欧元。家庭票（2位成人+2位儿童）有优惠。仅参观外部庭院及周边是免费的。门票建议在线预订特定时间段，尤其在夏季旺季（7-8月）和周末，现场购票可能面临长时间排队或当日票售罄的情况。`} />
              <InfoRow label="地址" value={`Burg Eltz 1, 56294 Wierschem, Germany`} />
              <InfoRow label="交通方式" value={`最方便的枢纽城市是科布伦茨或科隆。从科布伦茨中央火车站出发，乘坐区域火车（RB）前往Moselkern站（约30分钟车程，班次频繁）。这是最经典的徒步起点：出站后沿着清晰的路标，穿过宁静的Moselkern小镇，开始约40-50分钟（单程）的森林徒步，最终抵达深谷中的城堡。这是一段体验不可或缺的部分。如果你不想徒步，可以从另一侧的停车场（有收费接驳小巴）进入，但会错过很多乐趣。自驾可将车停在指定停车场（收费），然后乘坐接驳小巴（约5分钟）或步行15-20分钟下到城堡。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于埃尔茨的故事，得从一块岩石和一条小溪说起。大约在十二世纪中叶，卡塞尔博恩的埃尔茨骑士选择在这个三面被埃尔茨小溪环绕的陡峭岩石上，建造一座简单的堡垒，用以守护连接摩泽尔河、艾菲尔高原与麦费尔德平原的重要贸易路线。最初的建筑只是我们今天看到的主楼“普拉特埃尔茨塔”的雏形。在那个诸侯割据、领主纷争不断的年代，这样一个易守难攻的位置，是生存的第一要义。有趣的是，城堡的名字“Eltz”可能源于这条小溪的古称“Elz”，意味着这个家族从一开始，就把自己的命运与这片土地的自然地理牢牢绑定。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡真正开始扩张和繁荣，是在十三世纪末。一次家族内部的遗产分割，戏剧性地塑造了它今天看起来像“好几栋房子挤在一起”的独特面貌。当时，埃尔茨家族的三兄弟——埃利亚斯、威廉和西奥德里克——决定共同继承这份产业。他们没有分家拆产，而是想出了一个绝妙的办法：在原有核心堡垒周围有限的岩石地盘上，各自为自己和家人建造独立的居住翼楼。于是，“罗登多夫之屋”、“克姆佩尼奇之屋”和“大罗登多夫之屋”这三座主要的居住塔楼相继拔地而起，它们共用防御城墙和庭院，内部却相对独立。这种“联盟式”建筑，在欧洲城堡中极其罕见，它本身就是一部关于家族凝聚力与中世纪继承法的立体教科书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而埃尔茨城堡能成为“从未被攻陷”的传奇，除了地利，更离不开精明的政治智慧。十四到十五世纪，它卷入了著名的“埃尔茨城堡争端”。当时，特里尔选帝侯兼大主教巴尔多因，为了扩张势力，在城堡对面的山脊上修建了“特鲁策茨”围城城堡，用投石机对埃尔茨城堡进行了长达数年的围攻。然而，坚固的岩石地基和卓越的防御设计让城堡岿然不动。最终，这场僵局以一份和约友好解决，埃尔茨家族承认选帝侯的宗主权，但保有了城堡的完整所有权和自治权。这场争端没有赢家，也没有输家，更像是一场精心计算的妥协，确保了城堡在接下来的几个世纪里免于更大的战祸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`和平带来的稳定，让家族得以将财富和精力从防御转向舒适与艺术。从十五世纪到十七世纪，是城堡内部装饰的黄金时代。骑士大厅被赋予了华丽的晚期哥特式拱顶，房间内装上了舒适的壁炉，墙壁覆上了精美的挂毯，窗户换上了描绘圣经故事和家族徽章的彩色玻璃。文艺复兴的风潮也吹进了这深山幽谷，精致的家具、油画和陶瓷被引入。特别值得一提的是下层大厅，那里保存着无与伦比的十五世纪彩绘天花板和墙壁装饰，金色的图案在昏暗的光线下依然闪烁，见证了那个时代人们对美与荣耀的追求，即使身处密林深处也未曾懈怠。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正的考验或许并非来自战争，而是来自时间的风化与时代的变迁。法国大革命和拿破仑战争时期，许多莱茵河畔的城堡被摧毁或没收，但埃尔茨家族再次凭借其远离主要战场的地理位置和一定的政治运气得以保全。十九世纪早期，当浪漫主义思潮席卷欧洲，人们开始怀念中世纪的“黄金时代”时，埃尔茨城堡的完好无损使它成为了艺术家和诗人眼中的珍宝。当时的城堡主人投入巨资，并非进行大刀阔斧的“现代化”改造，而是以严谨的历史考据态度，对城堡进行了大规模的修复和保护性修缮，去除了后来一些不协调的添加，力求恢复其中世纪晚期的原貌。正是这份跨越八个多世纪的、持续不断的珍视与守护，才让我们今天能有幸叩开这扇时光之门。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览从清晨开始。建议在上午9点前抵达山脚的徒步起点（如Moselkern），这样你能享受森林最宁静的晨光，并且赶上城堡开放后的第一批导览团，避开最大的人流。整体游览需要预留至少4-5小时：徒步往返约1.5-2小时，城堡导览游约40分钟，导览结束后你还可以自由地在庭院、城墙漫步，并参观独立的珍宝馆。节奏应该是舒缓而沉浸的，把徒步当作进入故事的前奏，把导览当作聆听家族秘辛的高潮，最后留出时间自己静静地品味和拍照。这样的安排能让你完整体验从“远观”到“深入”再到“回味”的全过程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、防滑的徒步鞋，无论是森林小路还是城堡内陡峭的石阶都非常需要。参加导览时紧跟自己的团队，城堡内部通道复杂，容易迷路。如果时间允许，强烈建议徒步进出，接驳小巴虽然省力，但会错过一半的体验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早从Moselkern小镇出发，让森林徒步的清新空气和渐强的期待感成为游览的完美序曲。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过吱呀作响的古老吊桥，触摸那冰凉厚重的橡木城门，完成从现代世界到中世纪堡垒的正式穿越。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`紧跟导览员的步伐，踏入阴凉的石质底层大厅，让眼睛适应昏暗光线后，惊叹于头顶那保存了五百多年的金色星空般的天花板彩绘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在骑士大厅里驻足，想象着长桌上曾举行的宴会，倾听导游讲述悬挂的铠甲和旗帜背后的家族征战与联盟故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`小心翼翼地爬上狭窄的螺旋石梯，探访家族小教堂，让透过古老彩绘玻璃的、被过滤成宝石色的阳光洒在脸上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导览终点——那间装饰着华丽壁毯和文艺复兴家具的卧室里，听导游揭秘代代相传的“懒人椅”和暖床炉等生活智慧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后，别急着离开，返回阳光下的主庭院，找个石凳坐下，从下往上细细观察每一座塔楼立面上千奇百怪的雕塑和纹章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，一定要去独立的珍宝馆，那里陈列的金器、珠宝、象牙雕刻和精美兵器，会让你对“富可敌国”的古老贵族生活有最直观的惊叹。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`森林徒步径最后一个大转弯处的远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前或下午四点后，阳光能较好地照亮城堡正面，用长焦镜头压缩空间，拍下城堡被密林环绕、深藏谷底的经典全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡主庭院中央仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入天井时，抬头拍摄四周高耸塔楼的向心构图，能完美展现其建筑群的紧凑与繁复，记得收小光圈让天空不过曝。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡后方通往溪流的小径回头望`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时分，从这个较低的角度可以拍到城堡建筑群与下方埃尔茨溪流、绿色植被的同框，画面充满生机与层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`骑士大厅内部细节`}</h4>
                  <p className="text-sm text-gray-700">{`利用室内昏暗光线，将相机稳定在栏杆上，拍摄彩色玻璃窗投射在古老石地板上的光影，或者对焦于某一件雕刻精美的橡木家具，营造故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部导览过程中严格禁止使用闪光灯和三脚架，以保护脆弱的历史文物和壁画。拍摄外部时，使用偏振镜可以有效减少树叶和湿润石头表面的反光，让色彩更饱和。清晨山谷中常有薄雾，是拍摄梦幻氛围照片的绝佳时机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`童话沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在Moselkern或周边村庄由百年半木结构农舍改造的家庭旅馆，清晨在花园里享用房东自制的果酱和新鲜面包，然后慢悠悠地徒步去城堡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`距离城堡车程约20分钟，位于摩泽尔河畔葡萄园山腰上的古堡酒店，房间拥有真正的石墙和古董家具，在露台上就能俯瞰蜿蜒的河流与夕阳。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端静谧之选`}</h4>
                  <p className="text-sm text-yellow-800">{`艾菲尔火山湖区域附近的五星级森林度假村，独栋木屋拥有全景落地窗和私人温泉池，在探索完中世纪城堡后享受极致的自然疗愈与现代舒适。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客社交之选`}</h4>
                  <p className="text-sm text-purple-800">{`科布伦茨或科隆市中心交通便利的国际青年旅舍，方便你以这两座城市为基地，灵活规划前往城堡及莱茵河其他景点的多日行程。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡周边纯正的乡村住宿数量有限，尤其在夏季和周末非常抢手，建议提前数月预订。如果选择住在稍远的城市如科布伦茨，务必查好火车和徒步接驳的末班车时间。当地治安普遍很好，但乡村地区夜间照明不足，自驾需注意狭窄的山路。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃尔茨城堡，重新走回森林的时候，脚步会不自觉地放慢。你会觉得心里被一种沉甸甸的、宁静的东西填满了。那不仅仅是看到了美丽风景的愉悦，更是一种深刻的慰藉。在这个一切都在飞速变化、计划总赶不上变化的世界里，埃尔茨像一颗被时光精心包裹起来的琥珀。它告诉你，有些东西是可以持续的，可以穿越战乱、政权的更迭、潮流的变迁，在同一个地方、由同一个家族，温柔而坚定地守护三十三代人。这种“持续性”本身，就是一种震撼人心的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，它绝不仅仅是一座“网红”城堡，一个拍照打卡的背景板。它是一堂关于耐心、关于传承、关于与自然和岁月和解的无声大师课。每一位热爱深度游的旅人，都应该来一次埃尔茨。来这里，不只是为了看塔楼和盔甲，更是为了让自己沉浸在一种不同的时间维度里。你会触摸到石头上的温度，听到风中的古老回响，然后带着这份来自深谷的、沉静的勇气，回到我们自己的生活中去。它提醒我们，最坚固的城堡，或许不是用石头砌成的，而是用一代又一代人的珍视与承诺守护而成的。这份感悟，才是旅途带给我们的、最珍贵的纪念品。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/danube-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多瑙沃特古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Danube Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/citadelle-de-namur" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadelle de Namur</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bourglinster-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔格林斯特城堡（隐秘的十二世纪贵族双堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourglinster Castle</p>
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
