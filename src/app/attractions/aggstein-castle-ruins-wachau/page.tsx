import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿格施泰因城堡 Aggstein Castle｜瓦豪河谷悬崖上的幽灵强盗堡垒 - 最佳欧洲景点',
  description: '当你第一眼从多瑙河的游船上，或是从对岸蜿蜒的公路边望见它时，那种冲击是难以言喻的。它不是一座优雅的宫殿，而是一头匍匐在近300米高悬崖上的石兽遗骸。在蓝天与翠绿的葡萄园山坡之间，那一片灰褐色的残破墙体显得格外突兀，又异常和谐，仿佛那座嶙峋的山头天生就该顶着这样一顶荆棘王冠。靠近它，你需要穿过一片沙沙',
}

export default function AggsteinCastleRuinsWachauPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '下奥地利州', href: '/destinations/europe' },
            { label: '阿格施泰因城堡', href: '/attractions/aggstein-castle-ruins-wachau' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿格施泰因城堡・Aggstein Castle・奥地利・下奥地利州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一眼从多瑙河的游船上，或是从对岸蜿蜒的公路边望见它时，那种冲击是难以言喻的。它不是一座优雅的宫殿，而是一头匍匐在近300米高悬崖上的石兽遗骸。在蓝天与翠绿的葡萄园山坡之间，那一片灰褐色的残破墙体显得格外突兀，又异常和谐，仿佛那座嶙峋的山头天生就该顶着这样一顶荆棘王冠。靠近它，你需要穿过一片沙沙作响的山毛榉林，空气渐渐变得清冷，混合着苔藓、湿土和远处松针的淡淡气味。攀上最后一段石阶，风声忽然变得具体起来，那是从多瑙河谷口长驱直入的风，呼啸着穿过每一个空洞的窗框和坍塌的拱门，发出低沉又尖锐的呜咽，像是这座石头巨兽沉睡中不均匀的鼻息。
走进废墟内部，你才会真切感受到什么叫“险绝”。城堡的主庭筑在一条狭长的岩石山脊上，最宽处不过几十米，两侧都是令人目眩的垂直悬崖。脚下是粗糙不平、被无数脚印磨得微微发亮的石板路。阳光穿过高高的断壁，在墙上投下清晰锐利的光影分界线，明处炽热，暗处沁凉。你很难想象，在近千年前，这里是怎样一番喧嚣又残酷的景象——绝非童话，而是铁与血的生意场。如今，这里成了当地人散步怀古、孩子们探险的郊野公园。你会遇见银发的老人，靠着古老的城墙，静静俯瞰脚下如玉带般蜿蜒的多瑙河和星罗棋布的葡萄园村庄，那眼神里有种看尽沧桑的平静。
而它最打动人心的，正是这种极致的反差与融合。一边是瓦豪河谷被联合国教科文组织盖章认证的、如诗如画的田园风光，是甜美的雷司令葡萄和悠久的修道院文化；另一边，则是这座堡垒所代表的黑暗历史——贪婪、劫掠与暴力。它不像许多修复如新的城堡那样仅仅展示华美，而是毫不掩饰地袒露着时间的伤口和历史的复杂性。站在最高的塔楼废墟上，你会同时感到人类的渺小（面对自然天险与无情岁月）与狂妄（竟敢在此筑巢并试图统治河流）。这种矛盾带来的沉思，远比欣赏一座完美的宫殿要深刻得多。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你第一眼从多瑙河的游船上，或是从对岸蜿蜒的公路边望见它时，那种冲击是难以言喻的。它不是一座优雅的宫殿，而是一头匍匐在近300米高悬崖上的石兽遗骸。在蓝天与翠绿的葡萄园山坡之间，那一片灰褐色的残破墙体显得格外突兀，又异常和谐，仿佛那座嶙峋的山头天生就该顶着这样一顶荆棘王冠。靠近它，你需要穿过一片沙沙作响的山毛榉林，空气渐渐变得清冷，混合着苔藓、湿土和远处松针的淡淡气味。攀上最后一段石阶，风声忽然变得具体起来，那是从多瑙河谷口长驱直入的风，呼啸着穿过每一个空洞的窗框和坍塌的拱门，发出低沉又尖锐的呜咽，像是这座石头巨兽沉睡中不均匀的鼻息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进废墟内部，你才会真切感受到什么叫“险绝”。城堡的主庭筑在一条狭长的岩石山脊上，最宽处不过几十米，两侧都是令人目眩的垂直悬崖。脚下是粗糙不平、被无数脚印磨得微微发亮的石板路。阳光穿过高高的断壁，在墙上投下清晰锐利的光影分界线，明处炽热，暗处沁凉。你很难想象，在近千年前，这里是怎样一番喧嚣又残酷的景象——绝非童话，而是铁与血的生意场。如今，这里成了当地人散步怀古、孩子们探险的郊野公园。你会遇见银发的老人，靠着古老的城墙，静静俯瞰脚下如玉带般蜿蜒的多瑙河和星罗棋布的葡萄园村庄，那眼神里有种看尽沧桑的平静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而它最打动人心的，正是这种极致的反差与融合。一边是瓦豪河谷被联合国教科文组织盖章认证的、如诗如画的田园风光，是甜美的雷司令葡萄和悠久的修道院文化；另一边，则是这座堡垒所代表的黑暗历史——贪婪、劫掠与暴力。它不像许多修复如新的城堡那样仅仅展示华美，而是毫不掩饰地袒露着时间的伤口和历史的复杂性。站在最高的塔楼废墟上，你会同时感到人类的渺小（面对自然天险与无情岁月）与狂妄（竟敢在此筑巢并试图统治河流）。这种矛盾带来的沉思，远比欣赏一座完美的宫殿要深刻得多。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿格施泰因城堡`} />
                <InfoRow label="英文名称" value={`Aggstein Castle`} />
                <InfoRow label="正式名称" value={`Burgruine Aggstein`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`下奥地利州`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座矗立于瓦豪河谷心脏地带的岩石堡垒，是奥地利中世纪强盗骑士权力与暴行的最著名象征，也是多瑙河航运史上无法绕过的恐怖地标。`} />
                <InfoRow label="建筑特色" value={`一座与险峻悬崖完全融为一体的防御工事，其废墟的轮廓线仿佛是山脊本身生长出的嶙峋骨骼。`} />
                <InfoRow label="建筑风格" value={`以12世纪罗马式为基础，后经多次扩建融合了哥特式元素，现存的残垣断壁主要体现晚期哥特军事建筑的粗犷风格。`} />
                <InfoRow label="文化价值" value={`它是瓦豪河谷世界文化遗产画卷中一道充满戏剧性的阴影，将浪漫的葡萄酒乡传说与残酷的历史现实并置，提供了一个反思中世纪权力与暴力本质的独特空间。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常从四月初开放至十月底，每日上午9:00至下午17:00（最后入场时间16:30）。七月和八月旺季可能延长至18:00闭园。冬季（十一月至次年三月）原则上关闭维护，但偶尔会在周末提供有导游带领的特殊游览，行前务必在其官网或当地旅游信息中心确认最新安排。主要节假日如复活节、圣诞节期间开放时间常有变动。`} />
              <InfoRow label="门票价格" value={`标准成人票为12欧元。6至15岁青少年票6欧元，家庭票（2成人+最多3名儿童）30欧元。持有“下奥地利州城堡卡”或“瓦豪河谷卡”可享受约20%折扣。门票包含进入废墟核心区和露天博物馆的语音导览（含中文选项）。请注意，此门票为纯参观门票，若想参加特定主题的“幽灵之夜”或“中世纪宴会”活动，需额外付费预订。`} />
              <InfoRow label="地址" value={`Burgruine Aggsbach-Dorf, 3641 Aggsbach-Dorf, Austria`} />
              <InfoRow label="交通方式" value={`从维也纳出发最方便。首先，在维也纳的Wien Hauptbahnhof（中央火车站）或Franz-Josefs-Bahnhof车站搭乘开往克雷姆斯（Krems）的区域火车（ÖBB），车程约1小时，班次频繁（每小时至少1-2班）。抵达克雷姆斯后，在火车站前的公交枢纽换乘邮政巴士（Postbus）WL1线，方向为“Aggsbach-Dorf Ort”。告诉司机在“Burgruine Aggstein”站下车，车程约30分钟。巴士班次较少，旺季约每2小时一班，淡季可能一天仅3-4班，务必提前在ÖBB或Postbus App上查好时刻表。更灵活的方式是自驾，从克雷姆斯沿B3号多瑙河公路向西行驶约20分钟即可看到山上城堡的指示牌，山下有收费停车场（约3欧元/天），之后需要步行一段约15-20分钟的森林登山小径才能抵达城堡入口。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事得从12世纪初讲起。那时，巴本堡王朝的利奥波德伯爵们为了巩固对瓦豪河谷——这条连接东西欧的黄金水道——的控制，开始在战略要地修筑城堡。阿格施泰因所在的这块巨岩，俯瞰着多瑙河一个近乎90度的急弯，任何上行或下行的船只都逃不过它的眼睛，简直是天赐的收费站，或者说，天赐的强盗窝。最初，它只是简单的木石结构哨站，属于巴本堡家族的封臣。然而，随着中央权力的波动，这座天高皇帝远的堡垒，渐渐滋生了它自己野性的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡命运的转折点，紧紧系在“强盗骑士”这个充满传奇与恶名的群体身上。其中最“臭名昭著”的，要数15世纪初的城堡领主，汉斯（约克）·冯·马奇。这位老兄可不是什么遵纪守法的贵族。他干的营生，堪称中世纪版的“河道霸王”。他会从城堡垂下长长的铁链，横锁在多瑙河最狭窄的航道上，物理拦截过往商船。想象一下，辛辛苦苦满载货物的商人，看到横亘河面的铁索和悬崖上森然的箭垛，该是何等绝望。交不出足够“过路费”的船只会被扣押，船员甚至可能被扔进城堡著名的“玫瑰花园”——那可不是种花的地方，而是岩石边缘一块凸出的狭小平台，三面悬空，囚犯只能等待饿死或一跃解千愁。这些暴行为冯·马奇积累了巨额财富，也让他成为了周边城镇和哈布斯堡王朝统治者的眼中钉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，嚣张总是要付出代价的。城堡在历史上多次被围攻、占领又夺回。最严重的一次破坏发生在15世纪下半叶的兄弟纷争中，以及17世纪“三十年战争”期间，瑞典军队给了它沉重一击，最终使其丧失了军事功能，逐渐沦为被遗弃的废墟。石头被附近的村民搬去盖房子，木材在岁月中腐朽，只留下最坚硬的骨架，在风雨中慢慢被苔藓和野花覆盖。曾经令人闻风丧胆的强盗巢穴，变成了牧羊人歇脚和浪漫主义者凭吊的场所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到20世纪，人们才开始重新认识它的价值。不是作为军事要塞，而是作为历史见证和风景奇观。30年代开始有了初步的保护措施，70年代后进行了系统的考古发掘和结构加固，确保游客安全的同时，最大限度保留了其废墟的原始沧桑感。今天，你触摸到的每一块冰冷石头，都可能听过囚徒的哀嚎、骑士的狂笑、围攻时的喊杀，以及几百年来风的叹息。它不再属于某个残暴的领主，而属于每一位前来倾听这段粗粝历史的旅人。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你安排至少3到4个小时来充分体验这里。最佳抵达时间是上午10点前，那时阳光刚好从东边照亮城堡的正面，光影效果绝佳，旅游团大部队也尚未到达，你能享受片刻的宁静。整体的游览节奏应该是“慢浸入式”：先在外围感受它的气势，再深入废墟内部触摸细节，最后在制高点长时间停留，消化所有的感官与历史信息。路线设计上，遵循由外而内、自下而上的逻辑，让你逐步揭开这座幽灵堡垒的层层面纱， climax自然是站在“玫瑰花园”旁的观景台，那种俯瞰一切的眩晕与震撼，将是全程的高光时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双鞋底防滑、支撑性好的徒步鞋，城堡内的石阶被岁月打磨得光滑，且常有沙土，穿普通平底鞋很容易滑倒。夏季游览务必带足饮用水，山上几乎没有遮阴处，阳光直射下体力消耗很快。如果遇到雨天或雨后，最好取消行程，湿滑的岩石路面会变得非常危险。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场出来，别急着上山，先在森林小径的入口处回望，透过树梢缝隙捕捉城堡在悬崖顶端的第一个惊鸿一瞥。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的上山路慢慢走，用心听风声和鸟鸣，感受温度逐渐降低，让身体和情绪都做好进入另一个时空的准备。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过厚重的拱形入口门楼，仿佛跨过一道时间门槛，瞬间置身于由高大残墙围合的主庭院，立刻被空旷与历史的重量感包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去探索地下层的储物窖和古老的蓄水池，那里阴凉寂静，能最直观地感受到城堡自给自足的生存系统和与世隔绝的封闭感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的螺旋石梯攀上保存相对完好的帕拉斯特塔楼，这是城堡的制高点，360度的视野会让你瞬间明白此处为何被称为战略咽喉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`移步到著名的“玫瑰花园”悬崖平台，即使有安全栏杆，站在边缘向下望一眼深邃的河谷，也足够让你心跳加速，体会当年囚徒的绝望。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主城堡区的露天历史信息板前驻足，结合语音导览，把刚刚看到的残垣断壁与具体的人物故事、建筑功能一一对应起来，让废墟真正“活”过来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，不妨在庭院里简单的露天咖啡馆坐下，点一杯本地苹果汁或奥地利咖啡，就着这无与伦比的风景，静静回味刚才穿越近千年的旅程。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`多瑙河对岸的“Aggstein Viewpoint”公路观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时最佳，金色的夕阳会把整个城堡废墟染成温暖的蜜色，与蓝色的多瑙河、绿色的葡萄园构成层次极其丰富的画面，用长焦镜头可以压缩空间，突出城堡的险峻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡入口拱门的内侧框架`}</h4>
                  <p className="text-sm text-gray-700">{`上午太阳升高后，阳光斜射入拱门，在内部通道投下长长的光影，站在门内向外拍，可以用拱门做天然画框，框住远处河谷的风景，形成强烈的明暗和空间对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`帕拉斯特塔楼顶的西侧垛口`}</h4>
                  <p className="text-sm text-gray-700">{`下午时段，从此处向西拍摄，可以捕捉到城堡其他部分的废墟轮廓线以多瑙河为背景的延伸感，构图时让残破的石墙占据大部分前景，河流作为引线，画面充满叙事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“玫瑰花园”平台的安全栏杆边缘（务必握紧相机）`}</h4>
                  <p className="text-sm text-gray-700">{`将相机镜头稍微探出栏杆向下垂直拍摄，可以拍到令人眩晕的、近乎垂直的悬崖岩壁直接插入河谷森林的震撼视角，极具视觉冲击力（有恐高症者慎试）。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡北侧外墙根部的仰角`}</h4>
                  <p className="text-sm text-gray-700">{`利用广角镜头贴近依然高耸的残墙基部向上拍摄，能最大化地展现石墙的宏伟与压迫感，同时将天空纳入画面，衬托废墟的苍凉。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一个轻便的广角镜头（如16-35mm）来捕捉废墟的整体气势和狭窄空间，同时一个中长焦镜头（如70-200mm）对于从对岸或城堡内捕捉细节、压缩场景至关重要。无人机飞行在此类受保护的历史遗址上空通常被严格禁止，请务必遵守规定。拍摄时请尊重其他游客，特别是在狭窄的通道和观景台上，不要长时间独占最佳位置。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济型选择`}</h4>
                  <p className="text-sm text-blue-800">{`住在山脚小镇Aggsbach-Dorf的家庭式“Gasthof”（客栈），房间干净温馨，晚上可以在挂着鹿角的传统餐厅里品尝炸猪排和本地葡萄酒，听老板讲讲城堡的民间鬼故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`驱车20分钟到中世纪小镇杜伦施坦（Dürnstein），入住由古老修道院改建的精品酒店，推窗就是蓝色的教堂塔楼和葡萄园，晚上在静谧的石巷散步，对比强盗城堡的粗犷与修道院的宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`预订瓦豪河谷腹地一家拥有数百年历史的葡萄酒庄园酒店，在私人露台上享用由庄园自产葡萄酿造的顶级雷司令，眺望远方山脊上阿格施泰因城堡的剪影，将历史、自然与奢华完美融合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`返回克雷姆斯（Krems）住宿，这座迷人的河边大学城有更多现代化的酒店和餐饮选择，交通便利，适合作为探索整个瓦豪河谷地区的大本营。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "河谷地区的特色住宿（尤其是葡萄酒庄和精品酒店）非常抢手，尤其在葡萄收获季（秋季）和圣诞市场期间，务必提前数月预订。如果你没有自驾，选择住宿时一定要确认其公共交通的可达性，很多美丽的庄园酒店位于偏僻的葡萄园中，没有车会寸步难行。住在小镇上，夜晚异常安静，只有虫鸣和教堂钟声，是彻底逃离城市喧嚣的绝佳机会。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开阿格施泰因城堡很久之后，那幅画面依然会在我脑海里闪现：一边是温柔流淌的蓝色多瑙河，两岸是整齐得如同绿丝绒般的葡萄园，小而精致的村庄教堂尖顶在阳光下闪烁；而就在这片明信片般的风景之上，却牢牢楔着一片狰狞、黑暗、桀骜不驯的石头废墟。这种强烈的反差，恰恰是欧洲历史最迷人的地方——它从来不是单色调的。它不只有维也纳金色大厅的旋律和美泉宫的奢华，也有这些盘踞在悬崖上，诉说着贪婪、生存与暴力的阴影角落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都被精心修饰、体验被高度程序化的时代，阿格施泰因提供了一种“未完成”的、粗粝的真实。它没有试图讨好你，没有华丽的内饰让你拍照打卡。它只是沉默地站在那里，坦然展示着时间的破坏力和人性的复杂光谱。站在它的废墟上，你感受到的不仅仅是怀古的幽情，更是一种释然：看，历史就是这样，有光就有影，有创造就有毁灭，有秩序就有野蛮的突破。而所有这些，最终都会被时间磨平棱角，风化成供后人攀登、思索的风景。这大概就是为什么，每一个厌倦了表面观光、渴望触摸历史真实纹理的旅人，都应该来一次这里。它不是一次轻松的愉悦之旅，而是一场深刻的对话，与山石、与河流、与人类永不安分的灵魂。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/herberstein-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    海
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">海尔贝施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Herberstein Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/forchtenstein-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    福
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">福尔希滕施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Forchtenstein Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/durnstein-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杜恩施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dürnstein Castle</p>
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
