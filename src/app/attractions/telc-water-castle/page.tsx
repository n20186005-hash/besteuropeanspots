import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泰尔奇水上城堡 Telč Water Castle｜被彩虹色外墙和湖水倒影包围的童话世界 - 最佳欧洲景点',
  description: '第一眼看到泰尔奇水上城堡，你会以为自己不小心跌进了一本被水浸湿的古老童话书的扉页。它不是那种矗立在嶙峋山崖上、气势逼人的堡垒，而是温柔地、几乎带着些羞怯地，将自己彩色的倒影浸在环绕的池水里。走近它，最先闻到的不是石头的气息，而是水汽混合着岸边草坪修剪后的清甜，还有从城堡花园飘来的、若有若无的玫瑰香。...',
}

export default function TelcWaterCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '泰尔奇水上城堡', href: '/attractions/telc-water-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`泰尔奇水上城堡・Telč Water Castle・捷克・泰尔奇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到泰尔奇水上城堡，你会以为自己不小心跌进了一本被水浸湿的古老童话书的扉页。它不是那种矗立在嶙峋山崖上、气势逼人的堡垒，而是温柔地、几乎带着些羞怯地，将自己彩色的倒影浸在环绕的池水里。走近它，最先闻到的不是石头的气息，而是水汽混合着岸边草坪修剪后的清甜，还有从城堡花园飘来的、若有若无的玫瑰香。环绕的池水像一面静止的墨绿色镜子，把城堡那些粉红、鹅黄、天蓝的立面，连同天空的云絮，都一丝不苟地复制下来，世界仿佛在此处对折，分不清哪边才是真实。
走到城堡正面的大广场上，时间的声音变了。马车驶过鹅卵石路面的“嘚嘚”声消失了，游客的交谈也变成了背景里的嗡嗡低语，主导这里的，是风穿过庭院拱廊时发出的、如同叹息般的低鸣，还有城堡尖顶上的风向标偶尔转动发出的轻微“吱呀”声。光影在这里是主角。清晨，东侧的面墙被染成蜂蜜般的金色；午后，阳光穿过拱廊，在铺着菱形图案的地板上投下长长的、规律的光影栅栏；而到了傍晚，西斜的太阳会把整个建筑变成一块巨大的、正在熔化的彩色奶油蛋糕。
对于泰尔奇人来说，这座城堡从来不是遥不可及的博物馆。它是生活的背景板。你会看到推着婴儿车的妈妈在花园长椅上小憩，放学后的孩子背着书包从它的大门跑过，周末的傍晚，当地人沿着池塘散步，城堡的灯火一盏盏亮起，倒映在水中，像为这片水域戴上了一串温暖的项链。它的魅力不在于展示权力与威严，而在于展示一种和谐到极致的生活美学——建筑与水、人与自然、历史与当下，在这里达成了完美的和解。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到泰尔奇水上城堡，你会以为自己不小心跌进了一本被水浸湿的古老童话书的扉页。它不是那种矗立在嶙峋山崖上、气势逼人的堡垒，而是温柔地、几乎带着些羞怯地，将自己彩色的倒影浸在环绕的池水里。走近它，最先闻到的不是石头的气息，而是水汽混合着岸边草坪修剪后的清甜，还有从城堡花园飘来的、若有若无的玫瑰香。环绕的池水像一面静止的墨绿色镜子，把城堡那些粉红、鹅黄、天蓝的立面，连同天空的云絮，都一丝不苟地复制下来，世界仿佛在此处对折，分不清哪边才是真实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到城堡正面的大广场上，时间的声音变了。马车驶过鹅卵石路面的“嘚嘚”声消失了，游客的交谈也变成了背景里的嗡嗡低语，主导这里的，是风穿过庭院拱廊时发出的、如同叹息般的低鸣，还有城堡尖顶上的风向标偶尔转动发出的轻微“吱呀”声。光影在这里是主角。清晨，东侧的面墙被染成蜂蜜般的金色；午后，阳光穿过拱廊，在铺着菱形图案的地板上投下长长的、规律的光影栅栏；而到了傍晚，西斜的太阳会把整个建筑变成一块巨大的、正在熔化的彩色奶油蛋糕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于泰尔奇人来说，这座城堡从来不是遥不可及的博物馆。它是生活的背景板。你会看到推着婴儿车的妈妈在花园长椅上小憩，放学后的孩子背着书包从它的大门跑过，周末的傍晚，当地人沿着池塘散步，城堡的灯火一盏盏亮起，倒映在水中，像为这片水域戴上了一串温暖的项链。它的魅力不在于展示权力与威严，而在于展示一种和谐到极致的生活美学——建筑与水、人与自然、历史与当下，在这里达成了完美的和解。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`泰尔奇水上城堡`} />
                <InfoRow label="英文名称" value={`Telč Water Castle`} />
                <InfoRow label="正式名称" value={`State Castle and Chateau Telč`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`泰尔奇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座城堡是捷克保存最完好的文艺复兴与巴洛克风格水上城堡，也是联合国教科文组织世界遗产泰尔奇历史中心的核心地标。`} />
                <InfoRow label="建筑特色" value={`一座优雅地矗立在人工湖与池塘环绕之中的三翼式宫殿，以其彩虹般的粉彩立面、高耸的塔楼和浪漫的拱廊庭院而闻名。`} />
                <InfoRow label="建筑风格" value={`最初为哥特式堡垒，在16世纪被彻底改建为意大利文艺复兴风格，后续又增添了巴洛克与洛可可式的内部装饰细节。`} />
                <InfoRow label="文化价值" value={`它见证了波希米亚南部贵族文化的巅峰，是意大利文艺复兴艺术在北欧地区传播与本土化融合的杰出典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡全年开放，但内部参观分为夏季季（4月至10月）和冬季季（11月至3月）。夏季季（4月-10月）：周二至周日 9:00-17:00，周一闭馆（若遇公共节假日则开放）。冬季季（11月-3月）：内部参观仅限预约团队，但城堡花园及外部庭院全年可免费参观。请注意，每年1月1日及12月24-26日不开放。导览团每小时整点出发，最后一批通常在闭馆前一小时。`} />
              <InfoRow label="门票价格" value={`城堡参观必须参加导览团。共有两条主题线路可供选择：
路线一（文艺复兴生活）：成人350捷克克朗，优惠票（6-18岁学生、65岁以上老人、持有效学生证者）250捷克克朗，家庭票（2成人+最多3名儿童）950捷克克朗。
路线二（城堡主人居室）：成人300捷克克朗，优惠票210捷克克朗，家庭票800捷克克朗。
6岁以下儿童免费。花园和庭院免费参观。建议提前在官网预订，旺季（7-8月）现场购票可能需要排队等候。`} />
              <InfoRow label="地址" value={`náměstí Zachariáše z Hradce 1, 588 56 Telč, Czech Republic`} />
              <InfoRow label="交通方式" value={`从布拉格出发最为方便。火车：从布拉格 hlavní nádraží（中央火车站）乘坐直达列车前往泰尔奇，车程约2小时15分钟至2小时45分钟，每天有5-6班车。下车后，步行穿过小镇，大约15分钟即可抵达城堡。大巴：从布拉格 Florenc 汽车站乘坐 Student Agency 或 RegioJet 大巴，车程约2小时30分钟，班次比火车更频繁。自驾：从布拉格沿D1高速公路向南，在Exit 112转向Jihlava方向，再沿E59公路前往泰尔奇，全程约160公里，耗时约2小时。小镇中心区域为步行区，可将车停在城镇边缘的免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`泰尔奇的故事，始于一滩沼泽与一个雄心勃勃的家族。13世纪中叶，这片波希米亚南部边境的土地还是一片难以通行的湿地。当时的国王奥塔卡尔二世在这里建立了一座坚固的哥特式堡垒，用高高的城墙和塔楼来守卫通往摩拉维亚的商路。最初的城堡是灰暗、冷峻、充满防御功能的，它矗立在水边，更多是出于军事的考量。接下来的两百年里，它在不同贵族家族手中流转，见证了胡斯战争的硝烟，但始终保持着它中世纪的、棱角分明的面貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`命运的转折点，发生在一位名叫扎哈利·亚什·赫拉德茨（Zachariáš z Hradce）的年轻领主身上。那是16世纪中叶，文艺复兴的春风已经从意大利吹过了阿尔卑斯山。扎哈利是一位受过顶级教育、游历广泛的贵族，他对沉闷的哥特式堡垒深感厌倦。于是，在1550年左右，他做了一个大胆的决定：拆除旧堡垒，在其基础上，建造一座全新的、符合他审美理想的宫殿。他重金聘请了来自意大利和本土的建筑大师，其核心理念，就是要“让光、空气和美住进来”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一座梦幻般的宫殿从旧堡垒的基石上生长起来。高耸的防御塔被保留，但连接它们的不再是冰冷的城墙，而是轻盈优雅的三层拱廊。外立面被涂上了当时最时髦的“刮画”技术创造的彩色图案，灰扑扑的石墙变成了粉红、赭石和白色的交响曲。城堡内部，则用神话壁画、雕刻精美的天花板和来自威尼斯的华丽吊灯填满。最天才的一笔，是扎哈利没有排干城堡周围的沼泽，反而将它们改造成为一连串风景如画的人工池塘和湖泊。城堡不再是与环境对抗的堡垒，而是成为这片水域的王冠。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`扎哈利去世后，城堡几经易手。17世纪，它迎来了另一个重要家族——里希滕斯坦家族。他们为城堡注入了华丽的巴洛克与洛可可气息，建造了壮观的宴会厅，用炫目的镀金装饰和繁复的壁画覆盖了许多文艺复兴房间。幸运的是，后来的主人更多地是维护而非彻底改造。20世纪，城堡被收归国有，并开始了长达数十年的细致修复。1992年，连同整个泰尔奇历史中心，它被列入联合国教科文组织世界遗产名录。今天，当我们漫步其中，就像在阅读一部立体的建筑史书，每一层装饰都诉说着一个时代对“美”的不同定义，而这一切，都始于五百年前那位领主一个浪漫的梦想。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受泰尔奇水上城堡的魔力，你需要预留一整天的时间，并将节奏放得极慢。建议在上午9点半左右抵达，此时旅游团尚未涌入，晨光正温柔地洒在彩色的立面上，池塘水面平静如镜，是拍照和感受宁静氛围的黄金时间。整个深度游览建议分为三个部分：上午专注于城堡内部的两个核心导览路线（约3小时），中午在城堡花园或广场餐厅享用午餐并放松（1小时），下午则留给外部庭院、花园和环绕池塘的漫步，从各个角度欣赏城堡与水的对话（约2-2.5小时）。这样的安排能让你由内及外，逐步沉浸到这座建筑的生命节奏中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在官网预订导览票，特别是夏季的英语团非常抢手，现场很可能只能买到数小时后的场次甚至售罄。
两条导览路线各有侧重，路线一更全面展示文艺复兴生活，路线二聚焦后期贵族居室，若时间只够选一条，推荐路线一。
城堡内部地面多为光滑的木地板或石板，且楼梯陡峭，请务必穿着舒适防滑的鞋子，高跟鞋在这里会是一场灾难。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先在城堡前的小桥上停留片刻，看完整的城堡倒影在墨绿色的池水中轻轻晃动，调整好进入童话的心境。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随身穿复古服饰的向导走进金色大厅，让眼睛适应那满墙炫目的神话壁画和从高窗倾泻而下的阳光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在二楼的骑士厅里，抬头凝视那令人震撼的、由数十根原木雕刻而成的格状天花板，仿佛置身于巨人的玩具屋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开文艺复兴书房厚重的木门，想象领主扎哈利曾在这里，就着烛光阅读从意大利寄来的建筑图纸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过连接主楼与塔楼的空中拱廊，从高处偷窥下方绿意盎然的庭院，感受微风拂过脸庞的惬意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进巴洛克风格的宴会厅，被那无处不在的金色装饰和天花板上描绘天堂场景的恢宏壁画瞬间夺走呼吸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡后方的英式花园里迷失，沿着蜿蜒的小径寻找那尊被藤蔓半遮的少女雕塑，听蜜蜂在花丛中嗡嗡作响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从花园的侧门走出，沿着池塘边的小路绕行，看着城堡的侧影随着你的步伐变幻出完全不同的轮廓。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡北侧池塘对岸的草坪`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时内或日落前黄金一小时，将相机贴近水面，可以拍出城堡主体与其完美倒影的对称构图，清晨常有薄雾，氛围绝佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡内庭院二层拱廊的东南角`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至十一点间，阳光斜射入拱廊，在墙壁上形成美妙的光影图案，以拱门为画框，拍摄下方庭院中走动的人物剪影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`通往城堡主入口的石桥正中央`}</h4>
                  <p className="text-sm text-gray-700">{`利用广角镜头，将前景的石桥栏杆、中景的城堡彩墙与大门、以及背景的蓝天和高塔一同纳入，画面充满纵深感和故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡后方花园的玫瑰拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，背对花园深处的绿色树林，以拱门为前景框架，拍摄远处城堡塔楼的局部，营造出“窥见童话一角”的隐秘感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇广场萨赫蛋糕店（Cukrárna Šachy）的二楼窗口`}</h4>
                  <p className="text-sm text-gray-700">{`点一份著名的捷克萨赫蛋糕，坐在靠窗位置，可以拍到一个独特的、将广场彩色房子与远方城堡尖顶同框的经典视角。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以极大消除池塘水面的反光，让城堡的倒影更加清晰纯净，这是拍出梦幻倒影照的关键。`}</li>
                <li>• {`无人机飞行在泰尔奇历史中心上空有严格限制，如需飞行必须提前向当地管理部门申请，未经允许擅自飞行可能会面临高额罚款。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`童话沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住广场上一栋拥有500年历史的彩绘房屋顶层公寓，古老的木梁就在头顶，推开窗，城堡的塔楼仿佛触手可及，每晚都被广场的温柔灯光和静谧包围。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`文艺复兴体验`}</h4>
                  <p className="text-sm text-green-800">{`下榻由城堡附属建筑改造的小型精品酒店，房间保留了原始的石头墙壁和拱形天花板，早餐在能看到花园的玻璃阳光房里享用，管家会讲述不为人知的城堡轶事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`湖畔静谧居所`}</h4>
                  <p className="text-sm text-yellow-800">{`选择位于城堡背面池塘另一侧的家庭旅馆，房间窗户正对城堡水岸全景，清晨在私人阳台上，就能独享薄雾从水面升起、笼罩城堡的魔幻时刻。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷现代之选`}</h4>
                  <p className="text-sm text-purple-800">{`住在小镇边缘新式的四星级酒店，设施现代完备，提供免费停车场和自行车租赁，只需轻松步行十分钟即可抵达城堡，是自驾游客的完美基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇中心（城堡周边）的住宿非常有限且抢手，尤其是暑期和周末，务必提前至少2-3个月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`泰尔奇是极其安全宁静的小镇，夜晚漫步毫无压力，但几乎所有历史建筑的隔音效果都一般，建议携带一副耳塞以确保睡眠质量。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开泰尔奇很久以后，脑海里挥之不去的，不是某一件具体的文物或某一幅壁画，而是一种整体的、氤氲的氛围。那是一种被水、色彩和历史共同浸泡过的温柔。在这个追求宏大、刺激与效率的时代，泰尔奇水上城堡像一个温柔的“反叛者”。它不试图用规模震撼你，而是用比例和倒影来抚慰你；它不讲述血腥的战争史诗，而是娓娓道来一个关于美、生活与和谐的理想。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它让我们看到，历史并非总是沉重的负担，也可以是轻盈的灵感源泉。一位领主可以将军事堡垒变成诗意的居所，一片沼泽可以化作映照美丽的镜面。这或许就是它对于今天每一个旅人最珍贵的馈赠：一种可能性。一种将生活过成艺术的可能性，一种与环境温柔共处的可能性。当你沿着池塘走完最后一圈，看着灯火点亮的城堡再次温柔地沉入水中的夜晚，你会带走一份平静的确信——美，从来不是遥远的陈列品，它可以是生活本身的样子。这就是为什么，这个隐藏在南波希米亚的小镇和它的水上城堡，值得你穿越千里，来赴一场与童话和宁静的约会。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
