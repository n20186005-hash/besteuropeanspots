import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '索拉诺 Sorano｜意大利的“凝灰岩天空之城”，一座活着的伊特鲁里亚中世纪迷宫 - 最佳欧洲景点',
  description: '朋友，想象一下，你不是在“走进”一个镇子，而是在被一块巨大、温暖、蜂蜜色的岩石缓缓“吞没”。这就是我对索拉诺的第一印象。车子还在盘山公路上绕行，它就像从遥远的梦境里浮现出来——一堆堆紧密叠放的立方体房子，以一种近乎不可能的角度，粘附在一面陡峭的凝灰岩山壁上，在托斯卡纳午后强烈的阳光下，泛着一种干燥而...',
}

export default function SoranoEtruscanTuffTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '索拉诺', href: '/attractions/sorano-etruscan-tuff-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`索拉诺・Sorano・意大利・索拉诺（托斯卡纳大区格罗塞托省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你不是在“走进”一个镇子，而是在被一块巨大、温暖、蜂蜜色的岩石缓缓“吞没”。这就是我对索拉诺的第一印象。车子还在盘山公路上绕行，它就像从遥远的梦境里浮现出来——一堆堆紧密叠放的立方体房子，以一种近乎不可能的角度，粘附在一面陡峭的凝灰岩山壁上，在托斯卡纳午后强烈的阳光下，泛着一种干燥而温柔的金色光芒。空气中没有平原上那种浓烈的松柏或葡萄藤香气，取而代之的是一种更原始、更矿物的味道：被太阳烤热的岩石粉尘，混合着从深谷里升腾上来的、带着青苔和湿气的凉风。
沿着唯一的主路把车停在镇外，你的双脚就踏上了历史。这里的街道不能称之为“街”，它们是岩石的裂缝，是时间用脚步和水流切割出的沟壑。路面是凹凸不平的原始岩层，被无数代人的鞋底磨得发亮，像黑色的镜子，倒映着两侧高耸石墙上摇曳的天竺葵的红色影子。你的手会不由自主地扶上墙壁，触感不是砖石的粗糙，而是一种奇异的、略带粉末感的温润，仿佛能触摸到大地深处的脉搏。耳边安静得能听见自己的心跳，还有远处某扇木门吱呀关上的声音，以及某个窗户里飘出的、用浓重托斯卡纳方言进行的日常对话，像低沉而古老的歌谣。
这里最打动人心的，是它那种“活着”的古老。索拉诺不是一个被抽空、仅供展示的博物馆。晾晒的床单在狭窄的“ Vicetto ”（小街道）上空飘扬，像彩色的旗帜；一只肥胖的虎斑猫在某个凿岩而成的门洞前打盹；老奶奶从半地下的厨房窗户探出头，朝巷子另一头的邻居喊话，声音在岩石间碰撞、回响。你随时可能闯入一个死胡同，路的尽头是一户人家的大门，门边放着几盆罗勒，生活的气息扑面而来。在这里，历史不是被封存的过去式，而是每日呼吸的空气，是脚下每一步的质感，是光影在岩壁上移动的节奏。它毫不费力地让你相信，这座从石头里长出来的迷宫，依然有一颗温热跳动的心脏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你不是在“走进”一个镇子，而是在被一块巨大、温暖、蜂蜜色的岩石缓缓“吞没”。这就是我对索拉诺的第一印象。车子还在盘山公路上绕行，它就像从遥远的梦境里浮现出来——一堆堆紧密叠放的立方体房子，以一种近乎不可能的角度，粘附在一面陡峭的凝灰岩山壁上，在托斯卡纳午后强烈的阳光下，泛着一种干燥而温柔的金色光芒。空气中没有平原上那种浓烈的松柏或葡萄藤香气，取而代之的是一种更原始、更矿物的味道：被太阳烤热的岩石粉尘，混合着从深谷里升腾上来的、带着青苔和湿气的凉风。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着唯一的主路把车停在镇外，你的双脚就踏上了历史。这里的街道不能称之为“街”，它们是岩石的裂缝，是时间用脚步和水流切割出的沟壑。路面是凹凸不平的原始岩层，被无数代人的鞋底磨得发亮，像黑色的镜子，倒映着两侧高耸石墙上摇曳的天竺葵的红色影子。你的手会不由自主地扶上墙壁，触感不是砖石的粗糙，而是一种奇异的、略带粉末感的温润，仿佛能触摸到大地深处的脉搏。耳边安静得能听见自己的心跳，还有远处某扇木门吱呀关上的声音，以及某个窗户里飘出的、用浓重托斯卡纳方言进行的日常对话，像低沉而古老的歌谣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人心的，是它那种“活着”的古老。索拉诺不是一个被抽空、仅供展示的博物馆。晾晒的床单在狭窄的“ Vicetto ”（小街道）上空飘扬，像彩色的旗帜；一只肥胖的虎斑猫在某个凿岩而成的门洞前打盹；老奶奶从半地下的厨房窗户探出头，朝巷子另一头的邻居喊话，声音在岩石间碰撞、回响。你随时可能闯入一个死胡同，路的尽头是一户人家的大门，门边放着几盆罗勒，生活的气息扑面而来。在这里，历史不是被封存的过去式，而是每日呼吸的空气，是脚下每一步的质感，是光影在岩壁上移动的节奏。它毫不费力地让你相信，这座从石头里长出来的迷宫，依然有一颗温热跳动的心脏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`索拉诺`} />
                <InfoRow label="英文名称" value={`Sorano`} />
                <InfoRow label="正式名称" value={`Sorano`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`索拉诺（托斯卡纳大区格罗塞托省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`伊特鲁里亚文明的古老源头之一，中世纪奥尔西尼家族的重要山地堡垒，被誉为“托斯卡纳的马泰拉”。`} />
                <InfoRow label="建筑特色" value={`所有建筑几乎完全从当地的凝灰岩中开凿、雕刻和建造而成，房屋、街道、楼梯与原生岩石浑然一体。`} />
                <InfoRow label="建筑风格" value={`以中世纪防御性建筑为主导，融合了伊特鲁里亚的古老根基和文艺复兴时期的加固元素。`} />
                <InfoRow label="文化价值" value={`一座仍在呼吸的“活化石”小镇，完美体现了人类如何顺应并塑造极端自然环境，形成独一无二的山地聚落文化。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇本身全天24小时开放。镇内主要景点如奥尔西尼城堡（Fortezza Orsini）和马索利尼宫（Palazzo Massaini）的开放时间通常为夏季（4月至10月）上午10:00至下午1:00，下午3:00至晚上7:00；冬季（11月至3月）开放时间缩短，常为上午10:00至下午1:00，下午2:30至5:00，且周一通常闭馆。具体时间可能微调，建议行前在当地旅游局官网确认。`} />
              <InfoRow label="门票价格" value={`进入古镇免费。参观奥尔西尼城堡（内设博物馆）需要门票，约5欧元。学生、老人及团体可能有小幅优惠。周边伊特鲁里亚墓穴景点（如维泰波省的索瓦纳）需单独购票。`} />
              <InfoRow label="地址" value={`58010 Sorano GR, Italy`} />
              <InfoRow label="交通方式" value={`索拉诺位置隐秘，公共交通需要耐心。最近的主要机场是罗马菲乌米奇诺机场（FCO）或佛罗伦萨机场（FLR）。从罗马乘火车至奥尔贝泰洛（Orbetello）火车站，约1.5小时；从佛罗伦萨乘火车至格罗塞托（Grosseto）火车站，约1.5小时。从这两个火车站都需要换乘本地巴士（Tiemme公司运营的20路或49路巴士）前往索拉诺，巴士班次稀少（每天可能仅3-5班），车程约1-1.5小时，务必提前查好时刻表。最灵活的方式是自驾，从锡耶纳或奥尔维耶托方向驶入SS2公路后转入蜿蜒的山区公路，跟着“Sorano”路标即可抵达，沿途风景绝美。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲索拉诺的故事，你得把时钟拨回到近三千年前。早在强大的罗马人崛起之前，这片崎岖的、遍布凝灰岩台地和深邃河谷的土地，属于一个神秘而先进的民族——伊特鲁里亚人。他们不是我们想象中的野蛮山民，而是精通水利、金属锻造和城市规划的大师。索拉诺所在的这片悬崖，对他们而言是天然的要塞。他们开凿岩石，建造最初的居所和墓穴，那些至今散落在周边山谷里的“维ie Cave”（岩凿之路）和坟墓，就是沉默的证词。伊特鲁里亚人相信大地充满神性，而索拉诺，就像是大地之神直接显露的骨骼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到中世纪，托斯卡纳成了教皇派和皇帝派军阀们角逐的棋盘。索拉诺因其易守难攻的天险，成了兵家必争的香饽饽。12世纪左右，强大的奥尔西尼家族——罗马最显赫的贵族之一——将目光投向了这里。他们可不是来欣赏风景的。奥尔西尼家族在岩石的顶端，建造了那座令人望而生畏的堡垒。但他们的野心不止于此。真正的魔法在于，他们动员工匠和居民，以堡垒为核心，将整个山体改造成了一个立体的、蜂窝状的防御系统。我们今天看到的迷宫般的街道，许多最初是为了迷惑和阻滞入侵者；那些房屋厚重的石墙，本身就是堡垒的延伸；地下则开凿了错综复杂的地道和水窖，用于秘密通行和长期围困下的生存。索拉诺不再仅仅是一个定居点，它变成了一件庞大的防御兵器。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`奥尔西尼家族统治了这里数个世纪，但命运的转折点出现在17世纪初。随着美第奇家族统一托斯卡纳大公国，索拉诺连同整个地区被并入公国版图。美第奇带来了相对和平的秩序，但也抽离了它作为边境堡垒的战略意义。小镇逐渐从军事前线褪色，回归宁静的农耕和手工业生活。然而，与世隔绝的地理位置和贫瘠的土地，也让它在随后的工业革命浪潮中被遗忘。人口不断外流，许多岩洞住宅被废弃，索拉诺陷入了长达数百年的沉睡，几乎被时间尘封。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的“重新发现”要等到20世纪中后期。当意大利人开始重新审视自己国土上那些被遗忘的瑰宝时，旅行者、学者和艺术家们如同寻宝者一样，沿着偏僻的公路找到了这里。他们被这种与岩石共生的极端建筑美学震撼，称它为“托斯卡纳的马泰拉”（马泰拉是意大利南另一著名的岩居城市）。政府的保护措施和缓慢的旅游开发随之而来。但幸运的是，这里的复苏是温和而有机的。没有成群的旅游大巴，没有喧嚣的纪念品商店，只有一些有远见的人回来修复祖宅，开起家庭餐馆和温馨的民宿。今天的索拉诺，仿佛刚刚从一个漫长的午睡中醒来，揉着眼睛，依然保持着那份来自岩石深处的、宁静而坚韧的本色。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味索拉诺，你必须把自己交给“迷路”的乐趣。我建议你在下午三四点后抵达，这时炙热的阳光开始变得斜长，在岩壁上投下戏剧性的阴影，是拍照和漫步的黄金时间。整体游览至少预留3-4小时，节奏一定要慢。路线无需严格规划，但可以把握一个大方向：从主城门进入，在低处迷宫般的老街区（“Sorano Vecchio”）随意穿行，感受生活的肌理；然后缓缓向上，经过老广场，最终抵达制高点的奥尔西尼城堡，在那里等待日落。这样由深入浅、由暗到明的过程，像极了解读这座小镇的隐喻——从岩石内部隐秘的生机，到豁然开朗的历史全景。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对防滑、支撑性好的步行鞋，那些被磨光的岩石路面在晨露或雨后堪比溜冰场。
小镇很多角落没有手机信号，提前下载好离线地图，但更有趣的是准备一份纸质手绘地图，享受按图索骥的复古探险感。
当地居民非常注重隐私，很多看似废弃的门廊或角落可能就是别人家的入口，拍照和探看时请保持尊重，不要随意闯入私人领域。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从巨大的中世纪石门“Porta dei Merli”下穿过，立刻把自己丢进第一条狭窄的、光线幽暗的岩石巷道，让清凉的空气包裹你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`任由直觉带领你在那些挂着生锈铁皮灯笼的岔路口左转右拐，尝试用指尖辨认不同岩石层粗糙或光滑的纹理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不经意间闯入被当地人称为“Il Procaccio”的老广场，停下来坐在古老的石阶上，听脚步声和低语声在四面岩壁间产生奇妙的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`摸寻着找到通往上层区域的隐蔽石阶，攀爬时抬头，会看到头顶的房屋阳台如同积木般层层叠叠，几乎遮住天空。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要探访一处向公众开放的岩洞住所（常标有“Casa Grotta”），弯腰进入低矮的门洞，亲身感受那种被岩石拥抱的、冬暖夏凉的居住智慧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳西下前抵达奥尔西尼城堡的城墙，绕着垛口走一圈，看金色的光芒如何为脚下整个凝灰岩迷宫、以及远处无垠的托斯卡纳丘陵镀上辉煌的轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，在完全天黑后再次步入镇子，此时只有零星的窗户透出暖光，脚步声被放大，你会体验到这座岩石之城最神秘、最接近中世纪原初气息的时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从对面圣罗科小教堂前的观景台远眺`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，阳光从侧面打亮整个山壁上的古镇，利用长焦镜头压缩空间，可以拍出房屋如蜂巢般密集、从岩石中蓬勃生长的震撼全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`在“Porta dei Merli”城门洞内向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，以深邃的门洞为天然画框，框住门外阳光照耀下的石板路和远处一抹绿意，形成强烈的明暗与纵深对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`于“Il Procaccio”老广场仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光垂直洒落时，站在广场最低处向上拍摄四周高耸的、参差不齐的岩石建筑立面，能获得极具压迫感和几何美感的构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`奥尔西尼城堡顶端向西的城墙`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，将城堡古老的石砌垛口作为前景，聚焦于远方被夕阳染成粉紫色、层峦叠嶂的托斯卡纳丘陵，讲述历史与自然的对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`寻找一条有完美弧度的石阶小巷`}</h4>
                  <p className="text-sm text-gray-700">{`利用下午斜射的光线，捕捉光影在弧形石阶上形成的渐变光影，等待一个当地居民（如提着菜篮的老者）走入画面的瞬间，让照片充满故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`凝灰岩的金黄色在阴天会显得灰暗，尽量选择晴朗天气的“黄金时刻”（日出后和日落前的一小时）拍摄，色彩和质感最佳。`}</li>
                <li>• {`广角镜头在这里非常有用，能捕捉狭窄空间的纵深感，但别忘了也用长焦镜头提取那些岩石上精美的雕刻细节和窗户里的一抹生机。`}</li>
                <li>• {`许多最美的角落位于居民家门口，拍摄前一个微笑和示意的手势能避免误会，如果对方婉拒请立刻尊重离开。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`岩洞沉浸体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住老镇中心由千年岩洞精心改造的民宿，夜晚能感受到岩石天然的恒温静谧，清晨在凿岩而成的窗边，看着第一缕阳光唤醒沉睡的巷弄。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家族经营的历史宅邸`}</h4>
                  <p className="text-sm text-green-800">{`选择一栋属于奥尔西尼时代贵族宫殿的附属建筑改造的精品客栈，房间保留着原始的石头拱顶和壁炉，老板娘会奉上家传的野猪酱意面配方作为欢迎礼。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`托斯卡纳乡间农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`住在距离小镇几分钟车程、被橄榄园环绕的古老农庄，享受开阔的田园风光和私人泳池，白天探索迷宫小镇，夜晚则在星空下品尝庄园自产的布鲁奈罗葡萄酒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`艺术家之家的阁楼`}</h4>
                  <p className="text-sm text-purple-800">{`租下镇里一位画家改造的顶楼公寓，巨大的斜屋顶窗户正对城堡，屋里摆满主人的画作和藏书，让你像本地创作者一样生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`索拉诺的住宿数量非常有限，且多为家庭经营，旺季（5-9月）务必提前数月预订，临时寻找几乎不可能。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇夜晚极其安静，几乎没有任何夜生活或深夜营业的商店，适合追求绝对宁静和深度放空的旅人，喜欢热闹的话可能会觉得“太静了”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多老房子由陡峭的石阶连通，通常不设电梯，预订时请确认行李搬运是否方便，或选择轻装简行。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开索拉诺许久，我的指尖似乎还残留着那种凝灰岩的粉末感。它不像佛罗伦萨那样用辉煌的艺术轰炸你，也不像五渔村用明信片般的色彩取悦你。索拉诺给你的，是一种更沉静、更原始的力量。它教会你一种不同的“观看”方式：历史不一定是博物馆里玻璃柜后的珍宝，它可以是你脚下踩着的、被磨得发亮的同一块石头，是某扇13世纪木门上今天依然使用的门环，是回荡在同样岩壁间的、从伊特鲁里亚时代到今天的母亲呼唤孩子回家的声音。这种连续性，这种深植于大地的坚韧，在当今这个一切都在飞速迭代、变得浮于表面的世界里，显得无比珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被精心包装、人潮涌动的经典路线，如果你渴望一次真正能触摸到时间质感的旅行，那么，请专程为索拉诺绕一次路。它不会给你便利的交通、丰富的娱乐和琳琅的购物。但它会给你一个下午的迷路，一场与岩石的对话，一次关于“家园”最本质的思考——人类如何用智慧和耐心，在坚硬的命运中开凿出温暖的生活。当你在城堡上看着夕阳沉入远山，灯火一点点在这个岩石迷宫的内部亮起，你会明白，你探访的不是一个景点，而是一个依然在缓慢呼吸的古老梦境。这份孤独而丰盛的体验，足以抵消所有旅途的周折，成为你记忆里一块坚固的、闪着金光的基石。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/spoleto-aqueduct-and-duomo-complex" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/modica-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫迪卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Modica Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ferrara-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费拉拉城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ferrara Castle</p>
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
