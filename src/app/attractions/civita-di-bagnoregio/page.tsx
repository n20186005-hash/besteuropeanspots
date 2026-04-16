import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '白露里治奥 天空之城 Civita di Bagnoregio｜悬浮在空中的中世纪幻梦，正在消失的奇迹 - 最佳欧洲景点',
  description: '你第一眼看到它的时候，会忍不住屏住呼吸。车子在托斯卡纳与拉齐奥交界的丘陵间蜿蜒，转过一个不起眼的路口，突然，那片广袤的“badlands”（恶土）峡谷就毫无征兆地铺展在眼前。然后，你看到了它——白露里治奥，或者，人们更爱叫它“天空之城”。它不像其他山城那样依山而建，而是像被一只巨手从完整的大地上生生...',
}

export default function CivitaDiBagnoregioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '白露里治奥（天空之城）', href: '/attractions/civita-di-bagnoregio' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">白露里治奥（天空之城）・Civita di Bagnoregio・意大利・维泰博省（拉齐奥大区）</h1>
          <p className="text-lg text-gray-600 mb-6">
            你第一眼看到它的时候，会忍不住屏住呼吸。车子在托斯卡纳与拉齐奥交界的丘陵间蜿蜒，转过一个不起眼的路口，突然，那片广袤的“badlands”（恶土）峡谷就毫无征兆地铺展在眼前。然后，你看到了它——白露里治奥，或者，人们更爱叫它“天空之城”。它不像其他山城那样依山而建，而是像被一只巨手从完整的大地上生生掰走了一块，只留下那座孤岛般的山丘，以及山丘顶上那片密密麻麻、泛着蜂蜜色与灰白色的石头房子。它们静静地悬浮在巨大的河谷凹坑之上，四周是陡峭的、寸草不生的侵蚀崖壁，只有一座细长到仿佛没有尽头的混凝土桥，像一道孤零零的笔画，连接着此岸与彼岸。那一刻，你听不到任何声音，只有山谷里永恒的风，穿过嶙峋的土柱和沟壑，发出低沉的呜咽。
当你踏上那座名为“生命之桥”的长桥时，感官才开始真正苏醒。脚下的混凝土桥面微微震颤，风毫无遮拦地吹过，鼓起你的衣衫。桥两侧是令人眩晕的深谷，谷底生长着顽强的灌木。越往前走，现代世界的声音——汽车的鸣笛、游客的喧哗——就越发遥远、模糊。取而代之的，是你自己的心跳和脚步声，以及越来越清晰的、古城本身的气息：一种混合了古老石头被太阳晒暖的粉尘味、雨后泥土的腥气，以及从某扇虚掩的木门后飘出的、淡淡的柴火烟熏味。这座桥仿佛不仅是空间的连接，更是时间的隧道，每一步，都在将21世纪的你，送往一个被遗忘的中世纪。
终于穿过高大的石砌城门，你便跌入了一个完全不同的时空。这里没有大街，只有一条主干道，从城门笔直通向中心的小广场，以及无数条像毛细血管一样分叉出去的狭窄小巷。脚下的石板路被千年来的脚步磨得光滑如镜，却又在石缝间顽强地冒出青苔和不知名的小草。四周安静得能听到自己的呼吸回声。偶尔，一扇褪色的绿色百叶窗“吱呀”一声被推开，一位老妇人探出头来，平静地看看你，又缩回去——她是这里仅存的十几位常住居民之一。他们的生活，就像城墙上蔓延的藤蔓，早已与这座正在死去的岩石融为一体。你这才明白，这里最动人的不是建筑的宏伟（实际上它们都很简朴），而是那种极致的、近乎悲壮的“寂静”与“孤立”。时间在这里不是流逝，而是沉积。
你会不由自主地放慢脚步，用手去触摸那些粗糙的凝灰岩墙壁。石头是温热的，带着阳光的余温，但你能清晰地感受到它的酥软，指尖能刮下细碎的沙粒。这就是它正在消失的原因——构成山体的脆弱凝灰岩和黏土，在雨水和风的侵蚀下，正以每年几厘米的速度崩塌。每一场暴雨过后，都可能有一小块悬崖、甚至一栋无人的小屋，永远地坠入深谷。这种“正在发生”的消逝感，赋予了天空之城一种别处罕有的、带着痛楚的诗意。你知道你看到的每一眼，都可能是它的“最后一面”。这种魅力，不是辉煌的胜利，而是一场缓慢的、静默的、与自然规律的漫长告别，美得让人心碎，又肃然起敬。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">你第一眼看到它的时候，会忍不住屏住呼吸。车子在托斯卡纳与拉齐奥交界的丘陵间蜿蜒，转过一个不起眼的路口，突然，那片广袤的“badlands”（恶土）峡谷就毫无征兆地铺展在眼前。然后，你看到了它——白露里治奥，或者，人们更爱叫它“天空之城”。它不像其他山城那样依山而建，而是像被一只巨手从完整的大地上生生掰走了一块，只留下那座孤岛般的山丘，以及山丘顶上那片密密麻麻、泛着蜂蜜色与灰白色的石头房子。它们静静地悬浮在巨大的河谷凹坑之上，四周是陡峭的、寸草不生的侵蚀崖壁，只有一座细长到仿佛没有尽头的混凝土桥，像一道孤零零的笔画，连接着此岸与彼岸。那一刻，你听不到任何声音，只有山谷里永恒的风，穿过嶙峋的土柱和沟壑，发出低沉的呜咽。</p>
              <p className="text-gray-700 leading-relaxed mb-4">当你踏上那座名为“生命之桥”的长桥时，感官才开始真正苏醒。脚下的混凝土桥面微微震颤，风毫无遮拦地吹过，鼓起你的衣衫。桥两侧是令人眩晕的深谷，谷底生长着顽强的灌木。越往前走，现代世界的声音——汽车的鸣笛、游客的喧哗——就越发遥远、模糊。取而代之的，是你自己的心跳和脚步声，以及越来越清晰的、古城本身的气息：一种混合了古老石头被太阳晒暖的粉尘味、雨后泥土的腥气，以及从某扇虚掩的木门后飘出的、淡淡的柴火烟熏味。这座桥仿佛不仅是空间的连接，更是时间的隧道，每一步，都在将21世纪的你，送往一个被遗忘的中世纪。</p>
              <p className="text-gray-700 leading-relaxed mb-4">终于穿过高大的石砌城门，你便跌入了一个完全不同的时空。这里没有大街，只有一条主干道，从城门笔直通向中心的小广场，以及无数条像毛细血管一样分叉出去的狭窄小巷。脚下的石板路被千年来的脚步磨得光滑如镜，却又在石缝间顽强地冒出青苔和不知名的小草。四周安静得能听到自己的呼吸回声。偶尔，一扇褪色的绿色百叶窗“吱呀”一声被推开，一位老妇人探出头来，平静地看看你，又缩回去——她是这里仅存的十几位常住居民之一。他们的生活，就像城墙上蔓延的藤蔓，早已与这座正在死去的岩石融为一体。你这才明白，这里最动人的不是建筑的宏伟（实际上它们都很简朴），而是那种极致的、近乎悲壮的“寂静”与“孤立”。时间在这里不是流逝，而是沉积。</p>
              <p className="text-gray-700 leading-relaxed mb-4">你会不由自主地放慢脚步，用手去触摸那些粗糙的凝灰岩墙壁。石头是温热的，带着阳光的余温，但你能清晰地感受到它的酥软，指尖能刮下细碎的沙粒。这就是它正在消失的原因——构成山体的脆弱凝灰岩和黏土，在雨水和风的侵蚀下，正以每年几厘米的速度崩塌。每一场暴雨过后，都可能有一小块悬崖、甚至一栋无人的小屋，永远地坠入深谷。这种“正在发生”的消逝感，赋予了天空之城一种别处罕有的、带着痛楚的诗意。你知道你看到的每一眼，都可能是它的“最后一面”。这种魅力，不是辉煌的胜利，而是一场缓慢的、静默的、与自然规律的漫长告别，美得让人心碎，又肃然起敬。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="白露里治奥（天空之城）" />
                <InfoRow label="英文名称" value="Civita di Bagnoregio" />
                <InfoRow label="正式名称" value="Civita di Bagnoregio" />
                <InfoRow label="国家" value="意大利" />
                <InfoRow label="城市" value="维泰博省（拉齐奥大区）" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="一座因地质侵蚀而濒临消失、却因与世隔绝而奇迹般保存了纯粹中世纪风貌的“垂死之城”。" />
                <InfoRow label="建筑特色" value="整座城市孤悬于一座不断崩塌的凝灰岩山丘之巅，仅靠一座现代修建的长桥与外界相连，其内部的建筑与街道布局千年未变。" />
                <InfoRow label="建筑风格" value="以中世纪罗马式建筑为主，混杂着文艺复兴及更早的伊特鲁里亚痕迹，材料完全取自当地的凝灰岩，与山体融为一体。" />
                <InfoRow label="文化价值" value="它是时间停滞的活化石，是人与自然力量（侵蚀与存续）持续对话的悲壮史诗，也是现代世界关于文明脆弱性与永恒性的哲学象征。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城本身全天可远观，但通过唯一的长桥步行进入古城内部，理论上全天开放。不过，长桥的入口处（位于Bagnoregio小镇一侧）没有严格的时间限制，但强烈建议在日出至日落后一小时内前往，以确保安全。冬季（11月至次年2月）山区多雾，能见度差，下午四点后便不宜进入。夏季是最佳游览季，光线充足。请注意，极端恶劣天气（如暴雨、强风）时，长桥可能会临时关闭以确保安全。城内的小型博物馆和教堂开放时间较为随意，通常为上午10点至下午1点，下午3点至6点，且冬季可能缩短。" />
              <InfoRow label="门票价格" value="进入古城本身不收取门票，但连接新城（Bagnoregio）与古城（Civita）的唯一长桥——“生命之桥”（Ponte per Civita）象征性收取维护费，约为5欧元。此费用通常在桥头的小亭子或自动售票机购买。优惠票（如学生、65岁以上老人）通常为3-4欧元，具体以现场公告为准。6岁以下儿童免费。城内圣多纳托教堂免费参观，但欢迎捐赠。私人博物馆或艺术空间可能有独立的小额门票（约2-3欧元）。" />
              <InfoRow label="地址" value="Piazza Cavour, 1, 01022 Bagnoregio VT, Italy" />
              <InfoRow label="交通方式" value="从罗马出发是最常见的选择。首先，从罗马特米尼火车站乘坐区域火车前往奥尔维耶托火车站，车程约1小时15分钟，班次频繁。抵达奥尔维耶托后，在火车站前的巴士站转乘Cotral巴士前往巴尼奥雷焦（Bagnoregio）小镇，车程约30-40分钟，但巴士班次稀少，每天大概只有4-5班，务必提前在Cotral官网查询最新时刻表，错过一班可能就要等上几个小时。自驾是最灵活的方式，从罗马出发沿A1高速公路向北，在奥尔维耶托出口下，随后跟着“Civita di Bagnoregio”路标行驶约25公里即可抵达巴尼奥雷焦小镇的停车场（停车场费用约每小时1-2欧元）。最后，无论哪种方式，都需要从巴尼奥雷焦小镇的停车场步行约10-15分钟，穿过“生命之桥”才能到达天空之城。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">让我们把时钟拨回将近三千年以前。早在罗马人奠定帝国基石之前，这片土地的主人是一群神秘而先进的民族——伊特鲁里亚人。他们看中了这座突兀的凝灰岩山丘，并非因为它的风景，而是出于最现实的战略考量：易守难攻。他们在山体内部开凿了复杂的地下通道、水窖和墓穴，这些工程如同大地的血管，至今仍在古城的地下若隐若现。你可以想象，早期的定居者在这里储存粮食、引取泉水，依靠天险抵御外敌，奠定了这座空中堡垒最初的雏形。山丘脚下，是两条河流交汇的肥沃谷地，提供着生计。那时，它还不是孤岛，而是与广袤高原连为一体的战略要塞。</p>
              <p className="text-gray-700 leading-relaxed mb-4">时间快进到罗马帝国时期，以及随后的中世纪早期，这座小镇有了它的名字“Civita”，意为“城市”。它真正迎来繁荣的时期是在中世纪。得益于连接罗马与佛罗伦萨的重要朝圣和商贸路线从附近经过，白露里治奥发展成为一座富庶的城镇。我们今天看到的城市格局，基本就是在那个时期定型的。石头房屋密密麻麻地建起，中心广场上矗立起重要的圣多纳托教堂，狭窄的街道规划得井然有序。它甚至拥有自己的市政机构和文化生活，诞生过著名的神秘主义哲学家圣文德。那时，山体虽然也受侵蚀，但进程缓慢，人们与脚下的土地是一种共生的关系，利用它，也加固它。小镇生机勃勃，钟声在山谷间回荡，绝非如今这般寂静。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，命运的转折点发生在1695年。一场灾难性的地震袭击了这片区域。这场地震不仅摧毁了许多建筑，更重要的是，它严重动摇了地质结构，加速了凝灰岩山丘与主体高原之间的分裂和崩塌过程。自那以后，侵蚀进入了快车道。悬崖开始大片大片地脱落，连接小镇与外界的天然“脖颈”越来越细。居民们惊恐地看着家园的边缘一点点消失，坠入深渊。随着文艺复兴后交通要道的改变，小镇的经济地位也一落千丈。双重打击下，大规模的撤离开始了。富裕家庭、年轻人纷纷迁往对面更安全、更平坦的巴尼奥雷焦（Bagnoregio）新城。到了19世纪，这里几乎成了一座被遗弃的鬼城，只剩下最贫困或最眷恋故土的人坚守。天空之城，成了一艘正在沉没的船。</p>
              <p className="text-gray-700 leading-relaxed mb-4">转机出现在20世纪。意大利统一后，开始有学者和艺术家“重新发现”这座被遗忘的奇迹。它的绝世独立和悲怆美感，吸引了画家、诗人和摄影师。尤其是日本动画大师宫崎骏的到访，据说《天空之城》拉普达的灵感便来源于此，这让它在东方世界获得了神话般的声誉。“天空之城”这个充满想象力的别名不胫而走，彻底改变了它的命运。为了保护这处濒危的遗产并迎接游客，当地政府在1965年修建了我们现在看到的这座钢筋混凝土“生命之桥”，取代了原先摇摇欲坠的古老石桥。旅游业，这剂现代的强心针，让古城获得了喘息之机。门票收入被用于持续的加固和维护工程，比如在裸露的崖壁上打入钢筋、铺设排水系统以减缓雨水侵蚀。一些古老的房屋被小心翼翼地修复，改造成了餐厅、小店和民宿。</p>
              <p className="text-gray-700 leading-relaxed mb-4">于是，我们今天看到的白露里治奥，就处于这样一个奇特的、动态的平衡之中。它既是一个活的中世纪博物馆，也是一处正在进行中的地质灾难现场。每一任市长最头疼的议题，就是如何筹措更多的资金来“拉住”这座不断下滑的城市。居民们依旧过着简朴的生活，种着窗台上的天竺葵，在广场上晒晒太阳，面对游客的镜头报以温和的微笑。他们知道自己生活在奇迹之上，也生活在倒计时之中。这种认知，让日常生活都带上了一种哲思的色彩。天空之城的故事，不再只是关于过去，更是关于现在和未来——关于人类如何用智慧和微薄的力量，去守护一份注定要失去的美丽，并在这一过程中，重新发现了它无与伦比的价值。这是一场注定失败的战斗，但战斗本身，就是意义所在。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  最佳的游览体验始于清晨。建议在早上八点半前抵达巴尼奥雷焦小镇的停车场，此时旅游团的大巴还未到达，山谷里晨雾未完全散去，光线柔和，是拍摄天空之城全景和漫步空灵古城的黄金时间。整体游览耗时约3-4小时，节奏务必放慢，以“沉浸”和“感受”为主，而非“打卡”。先从新城一侧的几个观景台远眺，建立整体印象，然后带着朝圣般的心情走过长桥。进入古城后，沿着主街走到头，再随心所欲地钻进任意一条小巷迷路。中午前离开是个好选择，可以避开午后人流高峰，回到新城找家餐馆享用一顿悠长的午餐，回味方才的所见所感。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>一定要穿一双绝对舒适、防滑的平底鞋，古城的石板路不平且光滑，小巷里常有陡峭的台阶。
城内商业设施极少且价格较高，建议自带一瓶水，少量现金（欧元）用于支付桥票和在咖啡馆消费。
如果遇到雨天或大风天，请务必谨慎评估，长桥走起来会非常湿滑且令人不安，安全第一。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在进入长桥前，先到新城侧的观景台（Belvedere）驻足片刻，看着晨光为对面的孤岛涂上第一抹金色，看炊烟从几根烟囱里袅袅升起。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">怀着敬畏之心踏上那长达300米的“生命之桥”，感受自己的脚步是此刻连接两个世界的唯一声响，回头望，来路已在氤氲中模糊。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">穿过那座敦厚的、带有拱顶的12世纪石门（Porta Santa Maria），用手触摸门洞内被无数过客磨得光滑的石头，正式踏入被封印的时光。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着微微上坡的圣玛丽亚主街（Via Madonna della Maestà）往前走，两侧是紧闭的古老木门和鲜艳的盆栽，尽头便是城市心脏——圣多纳托广场。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在空无一人的广场中央，站在古老的井盖和铺路石上，360度环视包围你的蜂蜜色房屋、钟楼和教堂立面，听风声掠过屋顶。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">千万不要错过从广场分叉出去的、窄得仅容一人通过的小巷，比如Via della Pace，在阴影与阳光切割出的明暗交界线里，感受空间的压缩与历史的密度。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">寻找那些标有“Cantina”字样的小门，那是通往伊特鲁里亚时期地下世界的入口，低头钻进去，瞬间被阴凉和古老的土腥气息包围。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在古城东侧的边缘，找到那个小小的观景露台，扶栏下望，直面那些刀削斧劈般的侵蚀崖壁和深谷，直观地感受“消失”进行时的震撼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在返回前，去主街上那家由古老拱窖改造的咖啡馆，坐在石洞里的木桌旁，点一杯意式浓缩，让这混合着咖啡香和石头冷冽气味的瞬间成为记忆的锚点。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 新城主要观景台（Belvedere di Bagnoregio）</h4>
                  <p className="text-sm text-gray-700">日出时分或日落前半小时，使用长焦镜头压缩空间，将孤岛般的古城与前景的峡谷、远山一同纳入画面，捕捉“悬浮”的神奇效果。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 生命之桥中段</h4>
                  <p className="text-sm text-gray-700">清晨走上长桥约三分之一处，转身以新城和远山为背景拍摄桥的纵深感，此时光线侧射，桥体线条与人的剪影能构成极佳的故事性画面。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 圣玛丽亚城门拱洞下</h4>
                  <p className="text-sm text-gray-700">站在城门内侧向外拍，利用古老的石拱门作为天然画框，将细长的桥和对面新城的房屋框入其中，形成强烈的空间透视和古今对比。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 古城东侧悬崖观景台</h4>
                  <p className="text-sm text-gray-700">下午阳光照亮对面峡谷岩壁时，将相机贴近栏杆，以惊心动魄的侵蚀崖壁为前景虚化，聚焦于远处山谷的层次与光影，表现地质的肌理与力量。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 主街小巷光影交汇处</h4>
                  <p className="text-sm text-gray-700">正午时分，当阳光垂直射入窄巷，在石板路上投下强烈的明暗分界线时，等待一个当地居民或猫狗走过，捕捉那份凝固时光中的生动瞬间。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 早晚的侧逆光最能表现古城的质感和孤寂氛围，尽量避免正午顶光拍摄整体，光线太平。</li>
                <li>• 使用无人机拍摄需极度谨慎，甚至不被允许，因为强风乱流多，且可能干扰居民生活，务必事先了解当地法规并尊重隐私。</li>
                <li>• 拍摄当地居民时，请务必先微笑示意并获得同意，这里的居民不是景点背景，而是守护者。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">极致体验之选</h4>
                  <p className="text-sm text-blue-800">古城内仅有的几家民宿之一，住在有千年历史的石头房子里，夜晚当最后一批游客离去，整个古城和满天星辰都属于你，唯一的声音是风吟。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">便利舒适之选</h4>
                  <p className="text-sm text-green-800">巴尼奥雷焦新城（Bagnoregio）中心广场旁的家族经营酒店，房间阳台正对天空之城，清晨在私密阳台上就能看到峡谷晨雾与初升的阳光，位置无敌。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">田园诗意之选</h4>
                  <p className="text-sm text-yellow-800">距离古城3-4公里外、橄榄园环绕的农庄住宿（Agriturismo），享受绝对的宁静，品尝自家产的橄榄油、葡萄酒和意大利面，主人能讲述许多当地的故事。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">预算实用之选</h4>
                  <p className="text-sm text-purple-800">奥尔维耶托古城内的温馨宾馆，将天空之城与另一座伟大的山城奥尔维耶托串联游览，交通中转更方便，晚上还能体验奥尔维耶托精彩的夜生活。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">若想住古城内，必须提前数月预订，房间极少且极其抢手，但确是独一无二的人生体验。</p>
              <p className="text-gray-700 leading-relaxed mb-4">住在巴尼奥雷焦新城，晚上餐馆选择更多，也能感受更真实的意大利小镇日常氛围，治安非常好。</p>
              <p className="text-gray-700 leading-relaxed mb-4">夏季旺季（6-9月）整个地区的住宿都很紧张，早规划是王道；冬季很多民宿会歇业，出行前务必确认。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开的时候，我再次站在那座长桥的起点回望。天空之城在午后的逆光中，只剩下一个深色的、沉默的剪影，仿佛海市蜃楼，随时会融入靛蓝色的天际。走过一遭，你带不走它的一片砖瓦，但它却在你心里留下了某种沉重的、却又无比轻盈的东西。那份沉重，来自于你亲眼所见的侵蚀痕迹，来自于你知道这份美丽正处在一种优雅的、不可逆转的消逝之中。它不像庞贝那样被瞬间定格，而是让你眼睁睁地、陪着它进行一场漫长的谢幕。这种认知，会冲刷掉许多浮躁的念头。</p>
              <p className="text-gray-700 leading-relaxed mb-4">但正因如此，它又显得无比轻盈。在这里，你会忘记社交媒体上的点赞，忘记那些浮于表面的打卡清单。你只是作为一个纯粹的“存在”，行走在时间里。这座城用它极致的静默与脆弱，反而教会了我们关于“珍惜”最深刻的含义：不是占有，而是见证；不是永存，而是片刻的共鸣。在当今这个一切都被加速、被复制、被消费的时代，天空之城的存在本身就是一个倔强的反叛。它提醒我们，有些事物，其价值恰恰在于它的短暂与不可复制，在于它拒绝被轻易抵达和征服。每一位热爱深度游的旅人，都应该来感受一次这种“濒临消逝的美”。它不仅仅是一次旅行，更是一场心灵的沉淀。你会明白，最美的风景，有时不在山顶，而在那悬于生死之间、摇摇欲坠的孤崖之上。那一刻的颤栗与感动，足以照亮许多个寻常日子。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
