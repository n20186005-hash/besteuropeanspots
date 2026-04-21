import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥莫多斯旅游攻略：特罗多斯山脉深处的酿酒古村与圣十字架修道院深度游指南',
  description: '探索塞浦路斯奥莫多斯（Omodos）中世纪酿酒村庄，圣十字架修道院木雕神龛，深度游攻略包含路线、避坑指南及住宿推荐。',
}

export default function OmodosWineVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '塞浦路斯', href: '/destinations/cyprus' },
            { label: '利马索尔', href: '/destinations/cyprus' },
            { label: '奥莫多斯', href: '/attractions/omodos-wine-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥莫多斯・Omodos・塞浦路斯・利马索尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友！如果你厌倦了海滩人潮，想一头扎进塞浦路斯真正的灵魂深处，那今天这份 **奥莫多斯私藏旅游攻略** ，就是为你准备的。想象一下，车子在特罗多斯山脉蜿蜒上升，空气变得清凉，漫山遍野的葡萄梯田扑面而来，然后，一个由蜂蜜色石头垒成的古老村落，像被时光遗忘的珍宝，静静躺在山谷里——这里就是奥莫多斯。它不只是个风景如画的村庄，更是塞浦路斯千年酿酒传统的活化石，藏着一座拥有举世罕见木雕神龛的修道院。作为你的专属向导，这份 **奥莫多斯自由行指南** 会带你绕过旅游团，像当地人一样，品最地道的Commandaria甜酒，触摸最细腻的中世纪木雕，在石板广场的梧桐树下喝杯咖啡。准备好，我们来一场沉浸式的 **奥莫多斯深度游** 吧。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友！如果你厌倦了海滩人潮，想一头扎进塞浦路斯真正的灵魂深处，那今天这份 <strong>奥莫多斯私藏旅游攻略</strong> ，就是为你准备的。想象一下，车子在特罗多斯山脉蜿蜒上升，空气变得清凉，漫山遍野的葡萄梯田扑面而来，然后，一个由蜂蜜色石头垒成的古老村落，像被时光遗忘的珍宝，静静躺在山谷里——这里就是奥莫多斯。它不只是个风景如画的村庄，更是塞浦路斯千年酿酒传统的活化石，藏着一座拥有举世罕见木雕神龛的修道院。作为你的专属向导，这份 <strong>奥莫多斯自由行指南</strong> 会带你绕过旅游团，像当地人一样，品最地道的Commandaria甜酒，触摸最细腻的中世纪木雕，在石板广场的梧桐树下喝杯咖啡。准备好，我们来一场沉浸式的 <strong>奥莫多斯深度游</strong> 吧。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥莫多斯`} />
                <InfoRow label="英文名称" value={`Omodos`} />
                <InfoRow label="正式名称" value={`Omodos`} />
                <InfoRow label="国家" value={`塞浦路斯`} />
                <InfoRow label="城市" value={`利马索尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`奥莫多斯的历史，几乎与塞浦路斯的葡萄酒史同呼吸。早在拜占庭时期，这里就已因优质的葡萄种植而闻名。然而，让它真正登上历史舞台的，是那座传说中的圣十字架修道院（Holy Cross Monastery）。传说在公元327年，圣海伦（君士坦丁大帝的母亲）在前往圣地寻找真十字架途中，将一段圣十字架的碎片留在了此地，从而奠定了修道院的神圣基石。在中世纪，它不仅是重要的朝圣地，更成为区域的文化与学术中心。村庄围绕着修道院发展起来，其石屋布局和狭窄巷道，保留着鲜明的中世纪防御性村落特征。更重要的是，奥莫多斯是塞浦路斯国宝级甜酒——Commandaria的核心产区之一。这种被称为“王者之酒”的甜酒历史可追溯到十字军东征时期，甚至更早。因此，奥莫多斯可以说是塞浦路斯精神与物质文明的双重宝藏：一段神圣的宗教历史，与一门延续千年的甜蜜技艺，在此完美交融。`} />
                <InfoRow label="建筑特色" value={`漫步在奥莫多斯，你首先会被它整体的建筑色调所俘获：那是一种温暖的、介于蜜糖与夕阳之间的石灰石黄色。每一栋石屋都像是从山体中生长出来，墙壁由不规则的石块巧妙垒砌，厚重而坚实，表面粗糙的质感仿佛能摸到几个世纪的风霜。屋顶是传统的赤陶瓦片，经过日晒雨淋，呈现出深浅不一的红褐色。最迷人的是那些木制阳台和门廊，通常被漆成天空蓝或橄榄绿，与石墙的暖黄形成悦目的对比，阳台上总是垂挂着九重葛或天竺葵，泼洒出鲜艳的色彩。村庄的中心是巨大的石板广场，被巨大的法国梧桐树荫覆盖，树影婆娑。而广场一侧的 **圣十字架修道院** ，其外观相对朴素，但当你走进内部，才会发现它藏着一个何等华丽的秘密。`} />
                <InfoRow label="建筑风格" value={`奥莫多斯的民居建筑属于典型的塞浦路斯山地民居风格，注重实用与防御，形态厚重朴实。而 **圣十字架修道院** 的建筑则呈现出拜占庭风格与后期元素的混合体。它没有夸张的穹顶，但其长方形的巴西利卡式布局和厚实的石墙是早期基督教建筑的遗风。然而，其真正的艺术精华在于内部，尤其是那个举世无双的 **木雕神龛（Iconostasis）** 。这面将圣所与中殿分隔开的圣像屏，是复杂华丽的 **后拜占庭巴洛克风格** 的杰作。说人话就是，它继承了东正教圣像屏的传统结构（分层的圣像摆放），但雕刻技法却极其繁复、动态且充满装饰性，带有明显的巴洛克艺术追求戏剧性和奢华感的影子。你能看到螺旋状的柱身、栩栩如生的葡萄藤与花卉浮雕、层层叠叠的涡卷纹饰，每一寸木头都被工匠赋予了生命。它不是静止的屏风，而是一首用木头雕刻出的、歌颂神圣的澎湃交响曲。`} />
                <InfoRow label="文化价值" value={`对于奥莫多斯人而言，村庄的文化血脉由两条主线编织：信仰与葡萄酒。**圣十字架修道院** 至今仍是村民精神生活的核心，重要的节庆和洗礼婚礼都在此举行，它不仅是旅游景点，更是活着的社区心脏。而 **酿酒** ，则是流淌在血液里的生计与骄傲。几乎每个家庭都与葡萄园有着联系，古老的石砌酒窖（‘linos’）散布村中，有些仍在使用。这里生产的Commandaria甜酒，以其独特的日晒酿造法，成为塞浦路斯的文化名片。村庄的 **“拉齐”（Latzia）** 广场，不仅是地理中心，更是社交中心。老人们在这里下棋，妇女们售卖手工艺品（著名的“奥莫多斯花边”），咖啡馆里永远飘散着希腊咖啡的浓香和闲谈声。奥莫多斯完美诠释了何为“活着的文化遗产”：神圣的仪式、古老的技艺和日常的烟火气，在这里和谐共生，塑造了一种坚韧、宁静且自足的山地文化认同。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 奥莫多斯一日游打卡路线攻略：从酿酒石屋到圣十字架修道院`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好啦，跟着我的节奏，我们开始这趟完美的一日漫步。**上午（9:00-12:30）**：建议早点出发，避开暑热和人流。把车停在村口停车场，沿着标志走进村庄。第一站直奔 **圣十字架修道院** 。清晨的光线透过高窗，正好洒在金色的圣像和那座无与伦比的木雕神龛上，光影魔术让细节更震撼。静静地看，感受那份肃穆。出来后，就在旁边的 **修道院博物馆** 逛逛，看看保存的圣物和古籍。接着，在 **拉齐广场** 找棵梧桐树下的咖啡馆，来杯塞浦路斯咖啡，看村庄慢慢苏醒。**中午（12:30-14:30）**：午餐时间！广场周边有好几家传统小酒馆（Taverna），一定要点炖羊肉（‘kleftiko’）或烤肉拼盘，配上一杯本地产的干红葡萄酒。饭后别急着走，在广场周边的 **手工艺品店** 逛逛，看看精美的手织花边和银饰。**下午（14:30-17:30）**：开始我们的 **“酒香探秘”** 。从广场随意挑一条石板小巷往下走，你会经过许多古老的石屋门廊，有些门口就摆着自家酿的酒。一定要拜访一家传统的 **家族酒窖** （比如‘Linós’酒窖），看看古老的石制压榨槽，听主人讲讲酿酒故事，并品鉴包括Commandaria在内的各种葡萄酒。然后，顺着小路往村庄边缘走，你会邂逅开阔的 **葡萄园梯田** ，这里是拍照的绝佳地点，能俯瞰村庄全貌和远山。**傍晚（17:30以后）**：回到广场，夕阳会给整个村庄镀上金边。在酒馆享用一顿轻松的晚餐，或者简单喝点东西，感受夜晚凉风与宁静。这就是奥莫多斯完美的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>圣十字架修道院的木雕神龛</strong>：凑近看，屏风上雕刻的不是死板的图案。在第二层圣像的周围，你会发现缠绕的 <strong>葡萄藤与枝叶</strong> ，每一片叶子的脉络、每一颗微缩的葡萄都清晰可辨。这绝非偶然——在圣经意象中，葡萄藤代表信徒与基督的连接，而在这里，它更直接地指向奥莫多斯的生命线：葡萄酒。工匠将本地的生计融入了神圣艺术，让信仰带着土地的芬芳。阳光从侧面窗户射入时，木雕的凹凸处形成深邃的阴影，让那些葡萄仿佛要从藤上坠落下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>拉齐广场的梧桐树与鹅卵石</strong>：坐在咖啡馆外，低头看看脚下。巨大的、被岁月磨得光滑的 <strong>鹅卵石</strong> ，排列成优美的几何图案或同心圆。这些石头承载了无数代人的脚步——修士的虔行、农夫的劳作、节庆时村民的舞蹈。用手触摸，是温润的凉意。抬头， <strong>百年梧桐</strong> 的枝叶构成一个绿色的苍穹，阳光碎片在石板上跳跃，光影随时间缓慢移动，如同一个天然的日晷，丈量着奥莫多斯缓慢而永恒的节奏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>古老石屋的门楣与门环</strong>：随意漫步小巷，留意那些老房子的石质门楣。上面常常刻有 <strong>建造年份（如“1893”）和家族缩写或标志</strong> ，有时是一个十字架，有时是一把葡萄剪。这是屋主的“签名”，低调地宣示着传承。再看那厚重的木门，门环往往是 <strong>生铁铸成的精美造型</strong> ，可能是狮子头，也可能是缠绕的蛇。叩响门环的声音沉闷而厚重，仿佛能直接敲进历史的回音壁。这些细节诉说着每个家庭的个性与故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>传统酒窖（Linos）的压榨石槽</strong>：在一家开放参观的老酒窖里，你会发现地上嵌着一个巨大的、由整块石头挖成的 <strong>圆形凹槽（‘linos’）</strong> 。这就是古老的葡萄压榨池。想象一下丰收季节，村民们赤脚在槽中踩踏葡萄，深紫色的汁液顺着石槽边的小沟流出。石壁内侧已经被染成永恒的深紫色，那是无数个秋天狂欢的印记。空气中似乎还残留着当年发酵时浓郁醉人的甜香，这是最原始的、关于丰收与欢庆的感官记忆。" }} />
            </div>
          </Section>

          <Section title={`5. 奥莫多斯自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间就是一切</strong>：<strong>最佳游览时间</strong>是春季（4-5月）和秋季（9-10月）。此时天气凉爽，葡萄园或绿意盎然或一片金黄，风景绝美。夏季（7-8月）中午非常炎热，尽量安排在上午和傍晚活动。<strong>一定要避开周日中午和大型宗教节日</strong>（如8月15日圣母升天节），虽然节日氛围浓，但修道院可能不对游客开放，且村庄人满为患。平日清晨（9点前）到达，你能独享宁静的修道院和空旷的街巷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与行走</strong>：村庄建在斜坡上，全是 <strong>凹凸不平的鹅卵石和石板路</strong> 。请务必、务必、务必穿一双 <strong>舒适防滑的平底鞋</strong> ！高跟鞋或凉鞋会让你寸步难行且危险。进入 <strong>圣十字架修道院</strong> 有着严格的着装要求：<strong>肩膀和膝盖必须遮盖</strong>。男女都一样！建议随身带一条披肩或薄外套，短裤短裙是绝对不允许入内的，门口会有人检查，这是对信仰的基本尊重。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>交通与消费避坑</strong>：<strong>自驾</strong>是最佳方式，从利马索尔开车约40分钟。村口有免费停车场，别试图把车开进狭窄的小巷。如果乘坐公交，班次非常有限（一天可能只有几班），务必提前查好往返时刻表，否则可能被困在山里。在广场咖啡馆消费前， <strong>先看看菜单价格</strong>，虽然大部分公道，但坐在“黄金位置”的饮料可能略贵。购买Commandaria酒时，可以去村里的 <strong>合作社商店</strong> 或信誉好的家族酒窖，价格更实在，也能保证品质。" }} />
            </div>
          </Section>

          <Section title={`6. 奥莫多斯周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想真正融入奥莫多斯的夜晚，非常推荐在村里或附近住一晚。村里有几家由传统石屋改造的 <strong>精品客栈</strong>，例如“Omodos Village Houses”，完美保留石拱顶和厚墙壁，配备现代设施，晚上在私人小院看星星，静谧无比。如果追求更多酒店服务，可以住在特罗多斯山脉其他小镇如 <strong>卡科佩特里亚（Kakopetria）</strong> ，开车约半小时，选择更多。<strong>美食</strong>是重头戏！午餐强烈推荐广场边的 <strong>“To Patrikon”</strong> 或 <strong>“Stou Kir Yianni”</strong> 酒馆。必点菜：<strong>“Souvla”</strong> （大块炭烤猪肉或羊肉）、<strong>“Afelia”</strong> （红酒炖猪肉）、以及用当地奶酪制作的 <strong>“Halloumi”</strong> 煎烤奶酪。当然，要用一杯醇厚的本地干红佐餐。甜品可以尝试 <strong>“Palouzes”</strong> （葡萄汁凝糕）或直接点一杯琥珀色的 <strong>Commandaria</strong> 甜酒配坚果。在一家叫 <strong>“Linós Cafe”</strong> 的地方，你甚至可以在古老酒窖遗址里喝咖啡，氛围独特。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥莫多斯本身就是一个宝藏，但如果你还有余力，强烈推荐驱车15分钟前往另一个绝美山村——<strong>卡科佩特里亚（Kakopetria）</strong> 。这个村庄被两条溪流环绕，拥有塞浦路斯保存最完好的 <strong>旧村（Old Kakopetria）</strong> ，其石屋建筑群更为密集和壮观，许多被改造成迷人的民宿和画廊。在溪边的步道散步，听流水潺潺，是另一种清凉体验。或者，你可以继续深入特罗多斯山脉，探访被列入世界文化遗产的 <strong>彩绘教堂</strong>，如 <strong>圣尼古拉奥斯屋顶教堂（Church of St. Nicholas of the Roof）</strong> ，那里有精美的拜占庭壁画。从葡萄酒庄到山水画廊，再到中世纪壁画，这一小片区域浓缩了塞浦路斯山地文化的全部精华。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥莫多斯的灵魂，就藏在那蜂蜜色石头温暖的触感里，在Commandaria甜酒流过喉间带来的、穿越千年的阳光滋味里，更在那座修道院中，将神圣信仰与世俗生计（葡萄）雕刻进同一块木头的神奇融合里。它教会我们，真正深厚的文化，从来不是博物馆里冰冷的展品，而是依然在呼吸、在祈祷、在举杯的日常生活。来这里，不只是看一个景点，是让自己慢下来，成为这古老循环的一部分——哪怕只有一天。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tombs-of-the-kings-paphos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    国
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">国王陵墓</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tombs of the Kings</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/painted-churches-troodos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特罗多斯彩绘教堂群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Painted Churches of Troodos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/paphos-archaeological-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕福斯考古公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Paphos Archaeological Park</p>
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
