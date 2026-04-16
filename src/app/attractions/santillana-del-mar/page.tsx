import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '桑蒂利亚纳代尔马尔 Santillana del Mar｜被时光遗忘的中世纪石头小镇与史前洞窟壁画 - 最佳欧洲景点',
  description: '说真的，桑蒂利亚纳代尔马尔这个名字，我第一次听到时以为是个海滨度假村。结果到了才发现，“del Mar”（属于海）只是个美丽的误会——它离海还有好几公里呢，坐落在坎塔布里亚葱郁的山谷里，被牧场和尤加利树环绕。但你很快就会忘记这个误会，因为从你把车停在镇外、双脚踩上那条主街道“Calle del Rí...',
}

export default function SantillanaDelMarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '桑蒂利亚纳代尔马尔', href: '/attractions/santillana-del-mar' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`桑蒂利亚纳代尔马尔・Santillana del Mar・西班牙・坎塔布里亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说真的，桑蒂利亚纳代尔马尔这个名字，我第一次听到时以为是个海滨度假村。结果到了才发现，“del Mar”（属于海）只是个美丽的误会——它离海还有好几公里呢，坐落在坎塔布里亚葱郁的山谷里，被牧场和尤加利树环绕。但你很快就会忘记这个误会，因为从你把车停在镇外、双脚踩上那条主街道“Calle del Río”的那一刻起，你就踏入了一个被时间胶囊封存的世界。
空气中弥漫着一种复杂的、好闻的味道。是湿润的青苔附着在古老石墙上的清冽，是沿街花箱里天竺葵的淡淡甜香，还混杂着从某扇虚掩的木门后飘出的、柴火在古老壁炉里燃烧的焦香。声音在这里被过滤了，汽车的喧嚣被彻底屏蔽在外，你能听到的只有自己踩在圆润鹅卵石上的“嗒嗒”声，远处广场上隐约的教堂钟鸣，以及某户人家窗口传出的、音量开得很低的西班牙语广播声。光线是这里的魔术师。清晨，阳光斜射，给每一座石屋的立面涂上温润的蜂蜜色；正午，狭窄的街道形成深深的阴影，明暗对比强烈得像一幅版画；到了黄昏，金色的光芒仿佛有了质感，流淌在每一个石雕纹章和铁艺窗棂上。
你会发现，这里不完全是个博物馆式的空壳。虽然游客不少，但本地人依然在这里生活。阳台上晾晒着雪白的床单，某个门口停着一辆半旧的自行车，小杂货店的老板正和熟客聊着天。这种“活着”的气息，让那些宏伟的贵族宫殿（像波托卡雷罗宫或维拉克里奥宫）不再冰冷。它们不只是景点，是某位老妇人祖辈的宅邸，是某个孩子曾玩耍的庭院。小镇的核心——圣胡利安娜修道院，那敦厚的罗马式塔楼，不仅是信仰的象征，更是几个世纪以来小镇日常生活的节奏器，它的钟声曾宣告劳作、祈祷与安息。
最打动人心的，或许是这种极致的反差与融合。在这个看起来纯粹中世纪的小镇脚下，仅仅两公里外，隐藏着人类艺术的起源之一：阿尔塔米拉洞窟。一边是12世纪修士们用石头对上帝的礼赞，另一边是史前一万八千年前的猎人们用赭石对野牛、对生命、对未知世界的敬畏与描绘。桑蒂利亚纳的魅力，正在于它同时守护着这两种截然不同却又一脉相承的“神圣”，邀请你在短短一天内，完成一场从人类童年的涂鸦到文明壮年建筑史诗的穿越之旅。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说真的，桑蒂利亚纳代尔马尔这个名字，我第一次听到时以为是个海滨度假村。结果到了才发现，“del Mar”（属于海）只是个美丽的误会——它离海还有好几公里呢，坐落在坎塔布里亚葱郁的山谷里，被牧场和尤加利树环绕。但你很快就会忘记这个误会，因为从你把车停在镇外、双脚踩上那条主街道“Calle del Río”的那一刻起，你就踏入了一个被时间胶囊封存的世界。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气中弥漫着一种复杂的、好闻的味道。是湿润的青苔附着在古老石墙上的清冽，是沿街花箱里天竺葵的淡淡甜香，还混杂着从某扇虚掩的木门后飘出的、柴火在古老壁炉里燃烧的焦香。声音在这里被过滤了，汽车的喧嚣被彻底屏蔽在外，你能听到的只有自己踩在圆润鹅卵石上的“嗒嗒”声，远处广场上隐约的教堂钟鸣，以及某户人家窗口传出的、音量开得很低的西班牙语广播声。光线是这里的魔术师。清晨，阳光斜射，给每一座石屋的立面涂上温润的蜂蜜色；正午，狭窄的街道形成深深的阴影，明暗对比强烈得像一幅版画；到了黄昏，金色的光芒仿佛有了质感，流淌在每一个石雕纹章和铁艺窗棂上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这里不完全是个博物馆式的空壳。虽然游客不少，但本地人依然在这里生活。阳台上晾晒着雪白的床单，某个门口停着一辆半旧的自行车，小杂货店的老板正和熟客聊着天。这种“活着”的气息，让那些宏伟的贵族宫殿（像波托卡雷罗宫或维拉克里奥宫）不再冰冷。它们不只是景点，是某位老妇人祖辈的宅邸，是某个孩子曾玩耍的庭院。小镇的核心——圣胡利安娜修道院，那敦厚的罗马式塔楼，不仅是信仰的象征，更是几个世纪以来小镇日常生活的节奏器，它的钟声曾宣告劳作、祈祷与安息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，或许是这种极致的反差与融合。在这个看起来纯粹中世纪的小镇脚下，仅仅两公里外，隐藏着人类艺术的起源之一：阿尔塔米拉洞窟。一边是12世纪修士们用石头对上帝的礼赞，另一边是史前一万八千年前的猎人们用赭石对野牛、对生命、对未知世界的敬畏与描绘。桑蒂利亚纳的魅力，正在于它同时守护着这两种截然不同却又一脉相承的“神圣”，邀请你在短短一天内，完成一场从人类童年的涂鸦到文明壮年建筑史诗的穿越之旅。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`桑蒂利亚纳代尔马尔`} />
                <InfoRow label="英文名称" value={`Santillana del Mar`} />
                <InfoRow label="正式名称" value={`Santillana del Mar`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`坎塔布里亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座完美保存了中世纪灵魂的古镇，同时因其毗邻人类艺术摇篮之一的阿尔塔米拉洞窟而具有无与伦比的史前文化地位。`} />
                <InfoRow label="建筑特色" value={`由蜂蜜色石材砌成的贵族宅邸、宫殿与教堂密布，布满纹章的盾徽、精致的铁艺阳台和被岁月打磨得光滑如镜的鹅卵石街道构成了统一而和谐的整体。`} />
                <InfoRow label="建筑风格" value={`以罗马式风格为核心（尤其体现在其修道院），混合了哥特式、文艺复兴时期以及典型的坎塔布里亚蒙塔涅萨（Montañesa）民间建筑风格。`} />
                <InfoRow label="文化价值" value={`这里是西班牙乃至欧洲“历史艺术综合体”的典范，将史前人类的艺术震撼与中世纪欧洲的虔诚生活，在同一个地理空间内呈现给世人。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要景点如圣胡利安娜修道院（Colegiata de Santillana del Mar）开放时间通常为上午10:00至下午1:30，下午4:00至7:30（夏季可能延长）；冬季下午开放时间可能缩短至5:30。阿尔塔米拉洞窟博物馆及复制品（Museo y Cueva de Altamira）开放时间为周二至周六上午9:30至晚上8:00（冬季至6:00），周日上午9:30至下午3:00。每周一、1月1日、6月20日、12月24、25、31日闭馆。具体时间随季节调整，强烈建议出行前在官网复核。`} />
              <InfoRow label="门票价格" value={`进入小镇本身免费。圣胡利安娜修道院门票约3欧元，有时包含在导游讲解费中。阿尔塔米拉国家博物馆及洞窟复制品（Neocueva）门票约3欧元，欧盟公民可凭证件免费，但需提前在线预订（尤其是夏季和周末，通常需要提前数周甚至数月）。临时展览可能额外收费。`} />
              <InfoRow label="地址" value={`Plaza de Ramón Pelayo, 13, 39330 Santillana del Mar, Cantabria, Spain`} />
              <InfoRow label="交通方式" value={`最近的机场是桑坦德机场（SDR），距离约30公里。从机场可搭乘出租车（约30-40分钟，车费较贵）或先乘坐巴士到桑坦德市中心巴士站。从桑坦德市中心巴士站（Estación de Autobuses），乘坐ALSA公司的巴士直达桑蒂利亚纳代尔马尔，车程约30-45分钟，班次在工作日较多（约每小时一班），周末减少，务必提前查好时刻表。自驾是最灵活的方式，从桑坦德沿A-67高速转CA-131公路，有清晰路标，镇外有大型停车场（镇内禁止非居民车辆驶入）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`桑蒂利亚纳的故事，得从它的“邻居”讲起。时间倒退回1879年，当地一位名叫马塞利诺·桑斯·德·绍图拉的业余考古学家，带着他小女儿玛丽亚，钻进了小镇附近一个不起眼的洞穴。正是这个小女孩，仰头惊呼：“爸爸，看，公牛！”人类历史上最惊人的艺术发现之一——阿尔塔米拉洞窟壁画，就这样重见天日。那些栩栩如生、充满动感的野牛、马匹和手印，将欧洲艺术史的开端猛然推前了一万多年。最初，学术界拒绝相信史前人类能有如此高超的艺术表现力，甚至指责绍图拉伪造。直到多年后类似洞窟相继发现，它才被确认为真。可以说，现代小镇的声名鹊起，与这个史前奇迹的发现密不可分。但小镇本身的历史，要古老得多。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`“桑蒂利亚纳”这个名字，源于一位罗马时期的少女殉道者——圣胡利安娜。传说她的遗骸在公元8世纪左右被带到这里，为了供奉她，人们建造了一座修道院。名字从“Sancta Iuliana”逐渐演变成“Santillana”。而“del Mar”（属于海）的后缀，虽然今天看来名不副实，但在中世纪，这片地区确实隶属于滨海修道院的管辖范围，标志着其宗教与行政上的归属。早期，这里只是一个围绕修道院发展起来的简单定居点，修士们在此耕作、祈祷，吸引了一些农民和手工艺人前来居住，形成了社区的雏形。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在中世纪盛期。随着圣地亚哥朝圣之路北线的繁荣，桑蒂利亚纳因其重要的地理位置（不在主路上，但作为一条受欢迎的支线目的地）迎来了发展。朝圣者们慕名前来瞻仰圣胡利安娜的遗骸，为小镇带来了财富、声望和流动的文化。修道院被扩建得更加宏伟，我们今天看到的罗马式主体教堂和回廊，主要建于12世纪。小镇也从单纯的宗教中心，逐渐发展成为坎塔布里亚地区一个重要的政治与经济枢纽。本地贵族家族开始崛起，他们积累财富（ often through cattle ranching and trade），并将财富转化为石头上的宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`从15到18世纪，是小镇的“黄金时代”。那些今天我们驻足惊叹的石头宫殿，大多建于这个时期。像拥有精美文艺复兴庭院的波托卡雷罗宫，或是立面布满复杂纹章雕刻的维拉克里奥宫，都是贵族们炫耀其权力与血统的产物。这些建筑风格上融合了晚期哥特式的繁复与文艺复兴的规整，形成了独特的“蒙塔涅萨”风格：坚固的石材、大型的盾徽、华丽的铁艺阳台和内部巨大的木梁屋顶。小镇的格局也基本定型，蜿蜒的街道连接着几个主要广场：教堂前的广场（Plaza de las Arenas）用于宗教集会，更大的拉蒙·佩拉约广场（Plaza de Ramón Pelayo）则是世俗生活的中心。这里不是战场，没有经历过毁灭性的战争，它的历史是一部缓慢积累、持续建设的和平编年史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，随着朝圣热潮的衰退和西班牙经济中心的转移，桑蒂利亚纳在19世纪逐渐陷入了沉睡，几乎被现代世界遗忘。正是这种“被遗忘”，奇迹般地保护了它。当工业化席卷欧洲大部分地区时，这里的石头街道没有让位给柏油路，古老的宫殿也没有被拆毁改建。它像一颗琥珀，完整保存了中世纪到文艺复兴时期的风貌。阿尔塔米拉洞窟的发现，如同一声惊雷，再次将世界的目光吸引至此。20世纪，它被整体宣布为国家历史艺术遗产，得到了精心的保护和修复。今天的桑蒂利亚纳，是一座“活着的博物馆”，它的每一块石头都在低声诉说着从史前信仰、中世纪虔诚到贵族荣耀的层叠故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的桑蒂利亚纳一日游，我强烈建议你上午早点到，赶在大批一日游旅行团涌入之前（通常是上午10点半之后），享受小镇清晨的宁静。整体游览可以分成两大块：上午（约3-4小时）沉浸在中世纪小镇的街巷与建筑细节中；下午（约2-3小时）留给阿尔塔米拉博物馆和洞窟复制品，进行一场史前艺术的精神朝圣。这样安排节奏张弛有度，上午用双脚和眼睛丈量历史，下午用心灵感受震撼。总耗时建议预留6-8小时，包括一顿悠闲的午餐。小镇不大，全程步行即可，但每一步都值得驻足。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`阿尔塔米拉洞窟（复制品）的门票非常紧俏，务必、务必、务必提前在官网预订，旺季时甚至需要提前数月计划。
小镇的鹅卵石街道对高跟鞋和行李箱轮极不友好，请务必穿上最舒适防滑的步行鞋，并尽量轻装简行。
注意西班牙的午休时间（大约下午2点到5点），一些小型博物馆或店铺可能会关门，合理安排参观和午餐时间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇外的大型停车场，然后像几个世纪前的朝圣者一样，沿着Calle del Río那条被磨得发亮的鹅卵石主街缓缓步行进入小镇的腹地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在拉蒙·佩拉约广场中央的石头十字架下站一会儿，环视四周那些带着巨大盾形纹章的古老宫殿，想象贵族马车曾经在这里驶过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入圣胡利安娜修道院，先在中殿感受罗马式建筑的厚重与简朴，然后一定要去回廊，用手指触摸那些柱头上被岁月模糊了的雕刻，静静坐几分钟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从修道院出来，别走大路，随意拐进一条名为“Calle de las Lindas”或“Calle de los Hornos”的狭窄侧巷，感受两旁石墙几乎要碰到一起的亲密感，抬头看一线天的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`前往阿尔塔米拉博物馆，在进入震撼的“新洞窟”复制品前，先花时间在博物馆展厅了解那些壁画发现的故事、史前人类的生活以及令人惊叹的绘画技术。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆返回小镇，选择一家开在古老石屋里的餐厅，比如在Plaza de Gandara附近，点一份坎塔布里亚特色的炖菜（Cocido Montañés）或新鲜的海鲜，坐在户外的阳光下享用。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后消食，可以去逛逛那些对公众开放的贵族宅邸内部，比如波托卡雷罗宫，看看文艺复兴风格的庭院和保存完好的古老家具。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，如果还有精力，可以散步走到小镇边缘的牧场小径，回望整个桑蒂利亚纳，看夕阳为那片蜂蜜色的屋顶群镀上最后的金边。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`拉蒙·佩拉约广场东侧拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午的光线能穿过拱廊，在广场石板上投下长长的、富有韵律感的阴影，以广场十字架和对面宫殿为背景，能拍出极具纵深感和历史感的构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣胡利安娜修道院回廊中心`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光充足的上午，站在回廊一边的中央，拍摄对面的拱廊和柱头，利用回廊的几何框架，捕捉阳光在古老石柱上移动的光影游戏。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Calle del Río街道尽头仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在街道较低的一端，用广角镜头向上拍摄，让蜿蜒上升的鹅卵石路、两侧的石屋和尽头的教堂塔楼共同构成一幅经典的引导线构图画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`波托卡雷罗宫二楼窗户视角`}</h4>
                  <p className="text-sm text-gray-700">{`如果宫殿开放，找到面向主广场的窗户，从内向外拍摄，以古老的石窗框为画框，捕捉窗外广场上流动的人群和生活场景，画面会充满故事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`前往阿尔塔米拉博物馆的乡间小径`}</h4>
                  <p className="text-sm text-gray-700">{`步行去博物馆的路上，有一段路可以回望小镇全景。在晴朗的下午，顺光条件下，可以拍到小镇簇拥着修道院塔楼、安卧在绿色山谷中的全景明信片角度。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`带上一个广角镜头（用于拍摄狭窄街道和建筑全景）和一个定焦大光圈镜头（用于在室内或光线不佳时捕捉建筑细节和人像），三脚架在博物馆内和夜间小镇可能受限使用。`}</li>
                <li>• {`最好的光线出现在日出后一小时和日落前一小时，此时阳光角度低，能为石雕和街道带来温暖的金色色调和长长的、富有戏剧性的阴影。`}</li>
                <li>• {`拍摄当地居民或他们家的细节（如门环、阳台）时，请务必保持尊重，先微笑示意，如果对方显得不便，请勿强行拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻在一座由15世纪贵族宅邸改造的精品酒店，睡在古老的石墙和厚重的木梁之下，清晨在私人的内部庭院里享用早餐，完全融入中世纪氛围。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园风光之选`}</h4>
                  <p className="text-sm text-green-800">{`选择小镇外围或附近乡间的乡村酒店（Casa Rural），房间宽敞，拥有巨大的窗户直面坎塔布里亚的绿色群山和牧场，享受绝对的宁静，夜晚能看到璀璨星空。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计美学之选`}</h4>
                  <p className="text-sm text-yellow-800">{`小镇里有将古老石屋与现代极简设计巧妙融合的精品客栈，在保留原始石材墙壁和拱门的同时，提供舒适的现代设施和主人精心挑选的艺术品，体验古今对话。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`史前主题之选`}</h4>
                  <p className="text-sm text-purple-800">{`如果想深度体验阿尔塔米拉，可以选择博物馆附近为数不多的、以史前文化为主题的特色住宿，房间装饰可能融入岩画元素，并提供相关的主题书籍和导览。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇内的住宿数量有限且非常受欢迎，尤其是在夏季和节假日，必须提前数月预订才能有心仪的选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在镇内意味着可以在游客散去后的夜晚和清晨，独享空无一人的魔法街道，这种体验远超白天，值得为之投资。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果自驾，预订时务必确认住宿地点是否提供停车位，或者与公共停车场的距离，拖着行李在鹅卵石路上走很远会是不小的挑战。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开桑蒂利亚纳几天后，我闭上眼睛，脑海里浮现的不是某一张具体的照片，而是一种混合的感觉：脚底鹅卵石那种独特的、凹凸不平的触感，鼻腔里清冷的石苔气味，还有那种被厚重历史轻轻包裹着的安全感。这个地方有一种魔力，它能让你自然而然地慢下来，呼吸变得深长，说话不由自主地压低声音，好像怕惊扰了那些在石墙里沉睡了几百年的梦。在这个追求效率和新鲜感的时代，桑蒂利亚纳提供的恰恰相反——它提供一种“不变”的慰藉，一种与更漫长、更缓慢的时间尺度连接的可能性。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么它值得你专程而来？不仅仅是为了看那些教科书级别的罗马式教堂或华丽的盾徽。更是为了体验一种完整的时空层叠。在这里，你可以在一个下午，完成从人类在黑暗洞穴中画出第一头野牛时的敬畏与渴望，到中世纪工匠为上帝凿刻最后一朵石花时的虔诚与技艺，这中间跨越了上万年的精神旅程。桑蒂利亚纳和阿尔塔米拉在一起，就像一个完整的寓言，讲述着人类如何从自然洞穴走向精神庙宇，如何将生存的恐惧与对美的追求，永恒地镌刻在岩石之上。对于任何想要超越表面观光、触摸欧洲文明深层脉动的旅人来说，这里不是一站，而是一次心灵的溯源。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
