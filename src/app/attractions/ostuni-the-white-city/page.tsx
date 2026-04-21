import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥斯图尼 Ostuni｜闪耀在橄榄树平原上的普利亚“白城” - 最佳欧洲景点',
  description: '车子在无垠的橄榄树海中穿行，那些银绿色的树冠在阳光下翻滚，像是凝固的浪。然后，毫无预兆地，它就在地平线上出现了——一座从平坦大地上陡然升起的白色山丘，在亚得里亚海强烈的日光下，白得近乎虚幻，像一块巨大的、正在融化的奶油蛋糕，又像是一个只存在于童话里的云端城堡。这就是你对奥斯图尼的第一眼，那种震撼混合...',
}

export default function OstuniTheWhiteCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '奥斯图尼', href: '/destinations/italy' },
            { label: '奥斯图尼', href: '/attractions/ostuni-the-white-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥斯图尼・Ostuni・意大利・奥斯图尼`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在无垠的橄榄树海中穿行，那些银绿色的树冠在阳光下翻滚，像是凝固的浪。然后，毫无预兆地，它就在地平线上出现了——一座从平坦大地上陡然升起的白色山丘，在亚得里亚海强烈的日光下，白得近乎虚幻，像一块巨大的、正在融化的奶油蛋糕，又像是一个只存在于童话里的云端城堡。这就是你对奥斯图尼的第一眼，那种震撼混合着困惑，你会忍不住问：人们是如何，又是为何，要把一整座城市都刷成如此决绝的白色？
当你真的走进它，穿过古老的石拱门，双脚踩上被岁月打磨得光滑如玉的石灰石台阶时，所有的感官才真正被唤醒。视觉是被一种温柔又霸道的白色包裹，墙壁、台阶、拱门、甚至部分地面，都被一种粗糙的、带着颗粒感的石灰涂料覆盖。这白色并不冰冷，它在不同时间的光线下变幻着色彩：清晨是带着露珠的珍珠白，正午是灼目耀眼的亮白，到了黄昏，则被染上一层蜂蜜般温暖的金黄。嗅觉是复杂的交响乐：海风带来的微咸，墙角九重葛和天竺葵的甜香，从某扇虚掩的门后飘出的、浓郁得化不开的番茄酱和罗勒的香气，还有空气里永远弥漫着的那股淡淡的、干净的石灰粉尘味。声音则是被老城狭窄的巷道放大了又模糊了——楼上老太太用方言打电话的片段，隔壁院子里的狗吠，远处教堂钟声的嗡鸣，以及你自己脚步声在两面高墙间清脆的回响。
这里不仅仅是一个景点，它是近三万人真实生活的舞台。阳台上晾晒的彩色床单在风中猎猎作响，是生活最朴素的旗帜。狭窄的门口，老人们坐在藤椅上，像一尊尊静默的雕塑，目光平静地掠过每一个好奇的游客。主妇们提着装满新鲜“耳朵面”的篮子从小广场的市集归来。你会发现，那无处不在的白色，最初并非为了浪漫，而是一种极其务实的古老智慧——石灰具有消毒、反射阳光以保持室内凉爽、并防止潮湿的功能。在中世纪黑死病肆虐后，这成了关乎生存的法令。如今，它已内化为一种集体的审美和身份认同，每年春天，居民们都会自觉地重新粉刷自己的房屋，让这座城永远保持着崭新又古老的模样。
奥斯图尼最打动人心的，正是这种极致的反差与统一。它看起来如此纯净、出世、像一个梦境，内里却充满了烟火气、韧性和对生活的热烈拥抱。它雄踞山顶，俯瞰着橄榄园和远处蔚蓝的海岸线，带着一种古老的防御姿态，但当你走进那些蜿蜒的小巷，又会发现无数个充满惊喜的角落——一个种满柠檬树的小庭院，一扇雕刻着神秘符号的古老石门，一家从洞穴里挖出来的时髦酒吧。它既是堡垒，又是家园；既是历史的纪念碑，又是活着的、呼吸的有机体。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在无垠的橄榄树海中穿行，那些银绿色的树冠在阳光下翻滚，像是凝固的浪。然后，毫无预兆地，它就在地平线上出现了——一座从平坦大地上陡然升起的白色山丘，在亚得里亚海强烈的日光下，白得近乎虚幻，像一块巨大的、正在融化的奶油蛋糕，又像是一个只存在于童话里的云端城堡。这就是你对奥斯图尼的第一眼，那种震撼混合着困惑，你会忍不住问：人们是如何，又是为何，要把一整座城市都刷成如此决绝的白色？`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你真的走进它，穿过古老的石拱门，双脚踩上被岁月打磨得光滑如玉的石灰石台阶时，所有的感官才真正被唤醒。视觉是被一种温柔又霸道的白色包裹，墙壁、台阶、拱门、甚至部分地面，都被一种粗糙的、带着颗粒感的石灰涂料覆盖。这白色并不冰冷，它在不同时间的光线下变幻着色彩：清晨是带着露珠的珍珠白，正午是灼目耀眼的亮白，到了黄昏，则被染上一层蜂蜜般温暖的金黄。嗅觉是复杂的交响乐：海风带来的微咸，墙角九重葛和天竺葵的甜香，从某扇虚掩的门后飘出的、浓郁得化不开的番茄酱和罗勒的香气，还有空气里永远弥漫着的那股淡淡的、干净的石灰粉尘味。声音则是被老城狭窄的巷道放大了又模糊了——楼上老太太用方言打电话的片段，隔壁院子里的狗吠，远处教堂钟声的嗡鸣，以及你自己脚步声在两面高墙间清脆的回响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不仅仅是一个景点，它是近三万人真实生活的舞台。阳台上晾晒的彩色床单在风中猎猎作响，是生活最朴素的旗帜。狭窄的门口，老人们坐在藤椅上，像一尊尊静默的雕塑，目光平静地掠过每一个好奇的游客。主妇们提着装满新鲜“耳朵面”的篮子从小广场的市集归来。你会发现，那无处不在的白色，最初并非为了浪漫，而是一种极其务实的古老智慧——石灰具有消毒、反射阳光以保持室内凉爽、并防止潮湿的功能。在中世纪黑死病肆虐后，这成了关乎生存的法令。如今，它已内化为一种集体的审美和身份认同，每年春天，居民们都会自觉地重新粉刷自己的房屋，让这座城永远保持着崭新又古老的模样。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`奥斯图尼最打动人心的，正是这种极致的反差与统一。它看起来如此纯净、出世、像一个梦境，内里却充满了烟火气、韧性和对生活的热烈拥抱。它雄踞山顶，俯瞰着橄榄园和远处蔚蓝的海岸线，带着一种古老的防御姿态，但当你走进那些蜿蜒的小巷，又会发现无数个充满惊喜的角落——一个种满柠檬树的小庭院，一扇雕刻着神秘符号的古老石门，一家从洞穴里挖出来的时髦酒吧。它既是堡垒，又是家园；既是历史的纪念碑，又是活着的、呼吸的有机体。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥斯图尼`} />
                <InfoRow label="英文名称" value={`Ostuni`} />
                <InfoRow label="正式名称" value={`Ostuni`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`奥斯图尼`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`普利亚大区最具标志性的“白城”，是地中海沿岸防御性聚落与乡村景观完美融合的活化石。`} />
                <InfoRow label="建筑特色" value={`层层叠叠的白色房屋如瀑布般从山顶泻下，迷宫般的狭窄街巷被石灰粉刷得耀眼，形成独特的光影游戏。`} />
                <InfoRow label="建筑风格" value={`地中海 vernacular 建筑与阿拉伯、诺曼、西班牙等外来影响融合的独特风格，以实用性和适应性为主导。`} />
                <InfoRow label="文化价值" value={`生动体现了南意大利“慢生活”哲学，是社区身份认同、古老智慧与纯粹生活美学的三维宣言。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`奥斯图尼老城本身是开放的居民区，全天24小时可漫步其中。城内主要景点如奥斯图尼主教座堂的开放时间为周一至周六 10:00-13:00 & 15:30-19:00，周日 8:00-13:00 & 16:00-19:00（夏季会延长，冬季可能缩短，建议行前在其官网复核）。周边博物馆等开放时间各异，通常上午10点后开放。最佳游览时间是清晨或黄昏，既能避开酷热，也能捕捉最美光线。`} />
              <InfoRow label="门票价格" value={`漫步奥斯图尼老城街道本身免费。进入主教座堂免费，但参观其附属的博物馆或艺术展可能需要小额捐款（通常2-5欧元）。老城内一些私人拥有的历史建筑观景台或特色庭院可能收取少量费用（约3欧元），用于维护。`} />
              <InfoRow label="地址" value={`Piazza della Libertà, 72017 Ostuni BR, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是布林迪西机场（BDS），距离约35公里。从机场可乘坐预定的出租车或租车前往，车程约40分钟。火车：从布林迪西中央火车站（Brindisi Centrale）乘坐区域列车前往奥斯图尼站（Stazione di Ostuni），车程约25-35分钟，班次较为频繁（约每小时一班）。关键来了：奥斯图尼火车站位于新城，距离山顶老城约3公里。出站后，你可以选择乘坐本地的小型接驳巴士（班次有限，需留意时刻表），或者更推荐打车（车站前通常有等候的出租车，车费约10-15欧元），直达老城脚下的城门。自驾是最方便的方式，但老城内禁止外来车辆通行，需将车停在城墙外的付费停车场（如Parcheggio Via C. Rosalba），然后步行上山。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂奥斯图尼的石头诉说的故事，你得把时间轴拉得非常长。早在旧石器时代，这里就有人类活动的痕迹。但真正让这个地方进入历史叙事的，是公元前那个神秘的民族——梅萨皮人。他们不是希腊人，也不是罗马人，而是这片土地的原住民之一。你在老城边缘看到的那些巨大的干石墙遗迹，就是他们留下的“城墙”，沉默地诉说着远古的防御智慧。后来，希腊殖民者来了，他们带来了葡萄藤和橄榄树，也带来了更先进的城市规划理念。你可以想象，那时山丘上已经有了一个繁荣的定居点，眺望着地中海繁忙的贸易航线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马人的到来，将奥斯图尼纳入了更庞大的帝国体系。它成为一个重要的农业中心，为罗马军团提供着橄榄油和谷物。但真正塑造了奥斯图尼中世纪乃至今天面貌的，是那段动荡的、被不同文明轮番涂抹的历史。哥特人、伦巴第人来了又走，直到9世纪，阿拉伯人的帆影出现在海平面上。萨拉森人不仅带来了袭击和征服，也带来了深刻的文化印记——那种密集的、迷宫般的街巷布局，初衷是为了迷惑入侵者，进行巷战；而用石灰粉刷房屋的习惯，也可能在那时埋下了种子。这段历史并不遥远，在老城的地名和某些建筑细节中，你依然能嗅到一丝北非的气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接着，是诺曼人的时代。这些来自北方的征服者统一了南意大利，奥斯图尼成为王国的一部分，获得了修建防御工事的许可。山顶的大教堂开始奠基，它不仅仅是一座教堂，更是一个信号塔、一个避难所、一个权力的象征。随后，奥斯图尼像一件珍贵的遗产，在施瓦本（霍亨斯陶芬）、安茹、阿拉贡等家族间辗转。每一次易主，都意味着新的税收、新的法律、以及一点点新的建筑风格融入这座白色山城。特别是西班牙阿拉贡王朝的统治，给这里留下了深刻的印记，你在许多贵族宫殿的立面上看到的那些精致的文艺复兴或早期巴洛克装饰，就是那个黄金时代的余晖。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正将“白色”刻入奥斯图尼基因的，是一场席卷欧洲的黑色噩梦——14世纪中期的黑死病。瘟疫像野火一样吞噬了普利亚的许多城镇，传说奥斯图尼因为其居高临下的位置和严格的隔离措施（或许也包括了石灰的消毒作用），成为了少数幸存者聚集的避难岛。当时的领主，也可能是社区的集体决定，颁布法令：所有房屋必须用石灰粉刷，以净化空气，防止瘟疫复发。这一出于极度恐惧和求生本能的举动，无意间创造了一个永恒的传奇。白色，从此从卫生措施，演变为传统，再升华为美学和骄傲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近代以来，奥斯图尼经历了农业社会的繁荣与衰退，经历了战争与和平。直到20世纪后半叶，随着旅游业的兴起，这座沉睡的“白色之城”才再次以惊人的美貌进入世界视野。它没有被博物馆化，没有失去灵魂。居民们依然住在那里，粉刷着墙壁，在阳台上种植花草，在广场上闲聊。今天的奥斯图尼，是一部用石头、石灰和生命写就的层叠历史书，每一页都清晰可辨，古希腊的根基，中世纪的焦虑，文艺复兴的野心，以及普利亚农民千百年不变的、对家园的执着守护，全部融合在这片令人心醉的白色光芒之中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度感受奥斯图尼，我强烈建议你至少留出一整天的时间。理想的节奏是从清晨开始，那时旅游大巴尚未抵达，阳光温柔，本地居民开始他们一天的生活，城市苏醒的样子最为真实。上午先不要急于钻进小巷，而是在城外找一个制高点（比如南边的SP1公路转弯处），远观这座白色城池的全景，理解它与周围橄榄树海的壮阔关系。然后，大约九点左右，从一个城门（比如东边的圣维托门）进入，彻底让自己“迷失”在老城迷宫里。上午的光线适合探索东西走向的小巷，拍下阳光切割出的锐利光影。正午前后，抵达山顶的大教堂广场，这是城市的心脏，也是光线最饱满的时刻，适合欣赏建筑细节和观察广场上的日常戏剧。下午可以放慢脚步，逛逛手工艺品店，找个阴凉的庭院喝杯咖啡，或者参观一个小博物馆。黄昏时分，务必回到一个面向西方的观景台（比如教堂旁的平台或某家餐厅的露台），看落日将整座城市从白色染成金黄，再变成粉红，这是奥斯图尼每日最神圣的仪式。晚上，留下来吃一顿地道的普利亚晚餐，感受夜晚灯光下小巷与白天的迥异魅力。这样的安排兼顾了摄影光线、文化体验和生活节奏，能让你从外到内，从宏观到微观，完整地吸收这座城的灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避开盛夏（七八月）的正午在老城长时间暴走，狭窄的巷道会聚热，且几乎没有遮荫，很容易中暑。一定要穿一双绝对舒适、防滑的鞋子，因为老城的石板路陡峭且光滑，高跟鞋或硬底鞋会是一场灾难。在老城里步行时，注意偶尔穿梭而过的本地小摩托车，它们在小巷中异常灵活，请随时注意避让。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在城外停车场后，先别急着进城，沿着 SP1 公路往南走几百米，在第一个转弯处回望，你会看到整座白色山城在橄榄树海的簇拥下如海市蜃楼般浮现。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从圣维托城门 Porta San Vito 进入，立刻让自己迷失在第一条向上延伸的、窄得只能容一人通过的白色小巷里，用手触摸两旁被石灰刷得雪白、在正午阳光下微微发烫的粗糙墙壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到大教堂广场 Piazza Cattedrale，在正午时分站在广场边缘，看阳光毫无保留地倾泻在教堂那精美的玫瑰花窗和巴洛克式立面上，然后坐在台阶上看来来往往的居民和游客。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随便钻进一家没有招牌、门口只摆着两三张桌子的小餐馆，点一份当地主妇用新鲜西红柿和橄榄油做的“耳朵面”Orecchiette，配上一杯普利亚本地的普里米蒂沃红酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午四五点光线变得柔和时，登上主教宫 Palazzo Vescovile 旁的观景平台 Terrazza della Cattedrale，看着夕阳缓缓沉入远方的橄榄园，将整片白色屋顶染上蜂蜜色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`逛一逛大教堂后面那些售卖手工陶瓷、橄榄木制品和当地特级初榨橄榄油的小店，和店主用简单的英语或手势聊聊天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有精力，等到日落后华灯初上，再次漫步在老城的小巷中，看温暖的灯光从各家各户的门窗里溢出，将白色的墙壁映照出柔和的色调，此时的城市会呈现出与白天截然不同的神秘与温馨。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城外橄榄园全景位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，在 SP1 公路向南的第一个转弯处，用长焦镜头压缩空间，将白色的城市与墨绿的橄榄树、深蓝的天空一同纳入画面，可以等待一辆红色的小车驶过作为点睛之笔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大教堂立面细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，阳光直接照亮大教堂正立面时，聚焦于15世纪华丽的玫瑰花窗和其下方繁复的雕刻，使用偏振镜消除反光，让石材的质感和细节毕露无遗。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`小巷光影人像`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后，选择一条东西走向、有台阶的小巷，让模特站在明暗交界处，利用墙壁的纯白作为天然反光板，捕捉人物与光影、几何线条的互动，服装建议选择纯色、对比强烈的颜色。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`屋顶日落全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，登上“La Terra”餐厅或类似高度的露台，向西拍摄城市白色屋顶被金色夕阳笼罩、远处平原和地中海渐次暗淡的宏大场景，使用小光圈保证景深。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`夜晚蓝色时刻`}</h4>
                  <p className="text-sm text-gray-700">{`日落后半小时内，天空呈深蓝色时，在圣维托城门内，用三脚架长曝光拍摄点亮的街灯照亮蜿蜒向上的白色小巷，营造静谧而神秘的氛围，注意控制好天空与灯光的曝光平衡。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民或他们的私人空间（如庭院、阳台）前，请务必先微笑示意并获得同意，尊重隐私是第一原则。无人机飞行在历史中心上空通常是被禁止或严格限制的，放飞前务必查清当地法规并尊重居民的安宁。奥斯图尼的光线非常强烈且反差大，拍摄时注意使用RAW格式，并善用HDR或后期阴影/高光调整来平衡曝光。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`住在历史中心（特色体验）`}</h4>
                  <p className="text-sm text-blue-800">{`选择由百年老宅改造的“马斯里亚”风格洞穴公寓，睡在古老的拱形石顶下，清晨被邻居在阳台上浇花的声响和飘来的咖啡香轻轻唤醒，推开窗就是一幅明信片般的风景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`住在城外田园（高端享受/度假）`}</h4>
                  <p className="text-sm text-green-800">{`预订一座被古老橄榄树环绕的“特鲁利”石顶屋或乡村庄园酒店，拥有私人泳池和无边无际的田园景观，享受极致的宁静与私密，开车进城只需十分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`住在城门附近（便利折中之选）`}</h4>
                  <p className="text-sm text-yellow-800">{`入住城门旁经过现代化改造的家庭旅馆，既方便步行探索老城，又避免了拖着行李在陡峭石板路上挣扎的尴尬，通常主人还会提供美味的家常早餐和实用的游览建议。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`住在海滨与山城之间（多重体验）`}</h4>
                  <p className="text-sm text-purple-800">{`选择位于奥斯图尼与海滨小镇之间公路旁的特色农庄，既能方便驾车前往多个海滩，又能在每个夜晚回来享受山城的清凉与星空，体验真正的“山海双重奏”。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6月至9月）是绝对旺季，住宿价格高昂且一房难求，务必提前数月预订。选择老城内的住宿时，请确认是否有提供或协助安排停车，因为拖着行李上山非常辛苦。奥斯图尼及普利亚大区总体治安良好，但无论住在哪里，夜间在偏僻小巷独行仍需保持基本的警惕。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥斯图尼很久以后，闭上眼睛，那片灼目的白色依然会在记忆里闪光。但它留下的，远不止一张美丽的明信片。这座城市教会我的，是一种关于“韧性”与“纯净”的生活哲学。你看，那些石灰涂抹的墙壁，最初是为了抵抗瘟疫和酷暑，是生存的盾牌。但一代又一代的人，选择将这份实用主义，升华为一种集体的审美仪式。他们在年复一年的粉刷中，不仅维护着房屋，更是在重申一种身份：我们是奥斯图尼人，我们生活在一座光明的、清洁的、与众不同的山上之城。这份从苦难中生长出的骄傲与美，比任何一帆风顺的繁华都更打动人心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、复杂、眼球效应的世界里，奥斯图尼的存在就像一个宁静而有力的反问。它用极致的简单——一种颜色，一种材料，一种依山而建的古老智慧——构建了一个无比丰富、层次分明的宇宙。在这里，你能体会到“慢”不是懒惰，而是对光线、季节和社区节奏的深刻尊重。你会发现，美不需要繁复的装饰，只需要阳光恰到好处的角度，和一面被精心维护的白色墙壁。对于每一位渴望深度游的旅人来说，奥斯图尼不仅仅是一个目的地，它是一次心灵的“粉刷”。它邀请你暂时剥离那些多余的负担和杂念，像它的房子一样，回归一种更本质、更明亮的状态。然后，带着这份被白色光芒洗礼过的清澈，重新投入生活的橄榄树海。这，才是这趟旅程真正珍贵的纪念品。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/orvieto" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔维耶托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orvieto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ascoli-piceno-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿斯科利皮切诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ascoli Piceno</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/modica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫迪卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Modica</p>
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
