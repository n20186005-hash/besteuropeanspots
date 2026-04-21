import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瑟米尔昂诺苏瓦 Semur-en-Auxois｜掉进童话里的中世纪宝石小镇 - 最佳欧洲景点',
  description: '车子沿着舒缓的丘陵公路盘旋，当一片浓密的绿林向两旁退去，瑟米尔昂诺苏瓦就那么毫无征兆地跳进了眼帘。那一瞬间，你会下意识地屏住呼吸——它太不真实了。阿尔芒松河宛如一条柔软的深蓝色绸带，在深深的河谷里画了一个饱满的弧线，而绸带怀抱着的，是一座从巨岩上生长出来的、通体泛着温暖粉色的石头城。四座巨大的圆形塔...',
}

export default function SemurEnAuxoisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '科多尔省', href: '/destinations/france' },
            { label: '瑟米尔昂诺苏瓦', href: '/attractions/semur-en-auxois' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瑟米尔昂诺苏瓦・Semur-en-Auxois・法国・科多尔省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着舒缓的丘陵公路盘旋，当一片浓密的绿林向两旁退去，瑟米尔昂诺苏瓦就那么毫无征兆地跳进了眼帘。那一瞬间，你会下意识地屏住呼吸——它太不真实了。阿尔芒松河宛如一条柔软的深蓝色绸带，在深深的河谷里画了一个饱满的弧线，而绸带怀抱着的，是一座从巨岩上生长出来的、通体泛着温暖粉色的石头城。四座巨大的圆形塔楼，像沉默的巨人，守卫着密集的红色屋顶和教堂的尖顶。清晨的阳光斜斜地打在岩石上，那种粉色不是娇嫩的，而是带着岁月包浆的、沉稳的玫瑰金，让整座小镇仿佛一块被时光精心打磨过的巨大琥珀。
把车停在河谷边的免费停车场，步行穿过那座古老的石桥，你就正式进入了中世纪。桥下河水潺潺的声音混着鸟鸣，空气里有潮湿的青苔和远处面包房传来的淡淡黄油香。脚下的石板路被几个世纪的行人磨得光滑如镜，在阳光下泛着微光。路极窄，两侧是动辄四五百年历史的木筋墙房子，有些倾斜得让你担心它们会不会突然靠在一起说悄悄话。这里没有巴黎的喧嚣，甚至没有第戎那种旅游城市的繁忙。你遇到的，可能是提着长棍面包慢悠悠回家的老奶奶，或是正在自家店铺门口擦拭铜器的店主。时间在这里不是被赶着的，而是像阿尔芒松河的河水一样，缓缓地、自顾自地流淌。
而小镇的灵魂，在于那种惊人的“完整感”。它不像某些修复过度的古镇像个精致的布景。在这里，13世纪的城墙残垣就坦然立在民居的后院，15世纪教堂的飞扶壁上野花自顾自地开着，16世纪贵族宅邸雕刻精美的门楣下，可能停着一辆现代自行车。历史不是被供奉起来的展品，而是呼吸着的日常生活背景。你穿行在这些街巷里，指尖划过冰凉的粉色花岗岩墙体，会真切地感觉到自己正触摸着一段从未真正中断的时光。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着舒缓的丘陵公路盘旋，当一片浓密的绿林向两旁退去，瑟米尔昂诺苏瓦就那么毫无征兆地跳进了眼帘。那一瞬间，你会下意识地屏住呼吸——它太不真实了。阿尔芒松河宛如一条柔软的深蓝色绸带，在深深的河谷里画了一个饱满的弧线，而绸带怀抱着的，是一座从巨岩上生长出来的、通体泛着温暖粉色的石头城。四座巨大的圆形塔楼，像沉默的巨人，守卫着密集的红色屋顶和教堂的尖顶。清晨的阳光斜斜地打在岩石上，那种粉色不是娇嫩的，而是带着岁月包浆的、沉稳的玫瑰金，让整座小镇仿佛一块被时光精心打磨过的巨大琥珀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在河谷边的免费停车场，步行穿过那座古老的石桥，你就正式进入了中世纪。桥下河水潺潺的声音混着鸟鸣，空气里有潮湿的青苔和远处面包房传来的淡淡黄油香。脚下的石板路被几个世纪的行人磨得光滑如镜，在阳光下泛着微光。路极窄，两侧是动辄四五百年历史的木筋墙房子，有些倾斜得让你担心它们会不会突然靠在一起说悄悄话。这里没有巴黎的喧嚣，甚至没有第戎那种旅游城市的繁忙。你遇到的，可能是提着长棍面包慢悠悠回家的老奶奶，或是正在自家店铺门口擦拭铜器的店主。时间在这里不是被赶着的，而是像阿尔芒松河的河水一样，缓缓地、自顾自地流淌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而小镇的灵魂，在于那种惊人的“完整感”。它不像某些修复过度的古镇像个精致的布景。在这里，13世纪的城墙残垣就坦然立在民居的后院，15世纪教堂的飞扶壁上野花自顾自地开着，16世纪贵族宅邸雕刻精美的门楣下，可能停着一辆现代自行车。历史不是被供奉起来的展品，而是呼吸着的日常生活背景。你穿行在这些街巷里，指尖划过冰凉的粉色花岗岩墙体，会真切地感觉到自己正触摸着一段从未真正中断的时光。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瑟米尔昂诺苏瓦`} />
                <InfoRow label="英文名称" value={`Semur-en-Auxois`} />
                <InfoRow label="正式名称" value={`Semur-en-Auxois`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`科多尔省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`勃艮第公国时代扼守要道的战略要塞与繁荣市镇，见证了中世纪法国的权力纷争与民间智慧。`} />
                <InfoRow label="建筑特色" value={`由独特的粉色花岗岩砌成，四座宏伟的圆塔与连绵的城墙勾勒出梦幻天际线，宛如从童话书中直接搬出的立体模型。`} />
                <InfoRow label="建筑风格" value={`以中世纪防御建筑为核心，混合了罗曼式的厚重与哥特式的纤巧，并点缀着文艺复兴时期的民居装饰。`} />
                <InfoRow label="文化价值" value={`一座活生生的中世纪建筑博物馆，完美保留了13-16世纪的城市肌理与生活氛围，是理解法国外省小镇历史脉络的绝佳样本。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇全天开放。核心景点如城堡塔楼、博物馆等开放时间各异：圣母院教堂通常每日8:00-19:00开放。小镇旅游局及部分博物馆冬季（11月至次年3月）可能缩短开放时间或周一闭馆，夏季（4月至10月）则延长。具体建议行前查阅当地旅游局官网确认最新时刻表。`} />
              <InfoRow label="门票价格" value={`进入古镇本身免费。攀登城堡塔楼（Tour de l‘Orle d’Or）或参观市立博物馆等景点需购票，成人票价约5-7欧元。通常有联票选项。26岁以下欧盟学生、青少年及特定团体享有优惠，具体以现场公示为准。`} />
              <InfoRow label="地址" value={`Place Gaveau, 21140 Semur-en-Auxois, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发：乘坐TGV高速列车约1.5小时抵达第戎（Dijon）火车站。从第戎火车站旁的巴士总站，换乘前往瑟米尔昂诺苏瓦的 regional bus（例如 MobiGo公司的线路），车程约1小时，班次有限，通常每天数班，周末大幅减少，务必提前在MobiGo官网或第戎车站查询时刻表并规划好时间。最灵活的方式是从第戎租车自驾，沿D980公路行驶约50分钟即可抵达，沿途是连绵的勃艮第田园风光。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起瑟米尔的故事，得从它脚下这块巨大的花岗岩山脊开始。千万年前的地质运动塑造了这处易守难攻的天险，早在新石器时代就有人类在此驻足。但真正让它登上历史舞台的，是罗马人。他们看中了这里的战略价值，可能在此设立过哨站。然而，让瑟米尔成型并得名的，是中世纪早期。传说中，一位名叫“Seymur”的巨人建立了最初的定居点，这当然只是浪漫的附会。更可信的是，它的名字源于拉丁语“Securo Murum”（坚固的城墙），这直白地揭示了它的天命——防御。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`公元9-10世纪，维京人沿着河流四处劫掠，欧洲大地城堡林立。瑟米尔的领主们开始在岩石顶端修建木制堡垒。真正的转折点发生在13世纪。随着勃艮第公国的崛起，位于公国西北门户的瑟米尔，其战略地位空前重要。于是，一场浩大的石造工程开始了。我们现在看到的、定义了小镇轮廓的四大塔楼（特别是著名的“金边塔”Tour de l‘Orle d’Or）和长达一公里的雄伟城墙，基本都是在13至14世纪建成的。使用的材料，就是本地开采的独特粉色花岗岩。这可不是为了美观，而是因为这种石头异常坚硬，足以抵御当时的攻城器械。瑟米尔成了插在勃艮第边境的一根坚硬钉子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`繁荣随之而来。受到公爵庇护的瑟米尔，成为了一个重要的行政与商业中心。城墙内挤满了工匠、商人和贵族。15世纪建造的圣母院教堂，其华丽的火焰哥特式立面和内部精美的雕塑，见证了那时的财力与信仰热情。小镇甚至拥有了自己的铸币权。然而，中世纪晚期的战火并未绕开它。在英法百年战争、以及勃艮第公国与法国王权的残酷冲突中，瑟米尔多次被围困、攻击。它的城墙经受住了考验，但城内的生活难免凋敝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`和平终于在路易十四时代降临，但讽刺的是，这对瑟米尔的防御核心却是“致命”的。随着火炮技术的进步，高耸的石头城墙不再不可逾越。17世纪后期，太阳王下令拆除法国境内许多城堡的防御工事，以削弱地方贵族的反抗能力。瑟米尔的部分城墙和塔楼被削低，城堡主体被逐渐拆毁，石材被居民拿去盖了房子。塞翁失马，焉知非福。正是这种“拆除”，反而让小镇从纯粹的军事堡垒，软化成了一个宜居的市镇。18、19世纪，富商们在旧城墙内建起了优雅的文艺复兴风格和古典主义风格的宅邸，它们与中世纪的遗迹和谐共存。幸运的是，小镇躲过了世界大战的严重破坏，也避开了战后大刀阔斧的城市改造，这才让我们今天能有幸看到一个仿佛被时光遗忘的、层次极其丰富的完整剖面。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览瑟米尔昂诺苏瓦，精髓在于“慢”和“错峰”。强烈建议安排一整天，并尽可能在工作日前来，以避开法国本土游客的周末潮。理想的抵达时间是早上九点前，这时晨雾可能还未完全散去，阳光柔和，小镇刚从沉睡中苏醒，街道安静，是拍照和感受静谧氛围的黄金时段。整体游览节奏宜松弛，以徒步探索小巷为主，穿插攀登高点和坐下来喝杯咖啡的时间。路线设计为一个大环线，从河谷进入，攀升至城镇中心，再绕行城墙遗迹，最后回到起点，确保你能从各个角度欣赏这座立体小镇的美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇很多小巷台阶湿滑且陡峭，务必穿一双绝对防滑舒适的徒步鞋，高跟鞋在这里是“灾难级”选择。
周二和周五上午通常在武器广场有露天市集，能体验到最地道的本地生活气息，但同期主广场周边会较为拥挤。
部分小博物馆可能午间有长达两小时的休息闭馆，计划参观前最好在旅游局拿一张最新的开放时间表。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在阿尔芒松河畔的免费停车场，首先别急着进城，沿着河岸向西走一段，从水边和桥上的视角好好端详一遍小镇依偎在巨岩上、塔楼林立的完整全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主桥“大桥”进入古城，立刻右转钻进那条名为“ rue des Vaux ”的陡峭小巷，让布满青苔的石阶带领你一路向上，感受脚步叩击百年石板路的回响与两旁古老房屋的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`豁然开朗处便是武器广场，先别管宏伟的圣母院，去广场东侧那家老咖啡馆“Café de la Paix”的露天座歇个脚，点一杯expresso，像当地人一样看着广场上稀疏的人来人往。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`带着咖啡因的振奋，推开圣母院教堂厚重的木门，让眼睛适应内部的昏暗，然后静静寻找那尊著名的“微笑的天使”雕塑和彩绘玻璃投下的宝石色光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂后方的小路绕到市政厅后方，这里藏着一片被遗忘的城墙废墟和一个小花园，是安静发呆和想象中世纪士兵在此巡逻的绝佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要鼓起勇气攀登金边塔，在狭窄的螺旋石阶中旋转而上，直到站上塔顶平台，让360度的勃艮第乡村全景风和整个小镇红色屋顶的海洋扑面而来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下塔后，沿着 rue Buffon 向东漫步，这条街满是文艺复兴风格的美丽宅邸，仔细看那些门楣上的雕刻，有贝壳、花环，藏着旧主人的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在夕阳西下前，再次穿过城市，回到阿尔芒松河边，找一处河岸草地坐下，看夕阳的金辉如何将整座粉色石头城点燃成绚烂的玫瑰金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡桥仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，站在连接停车场与古镇的主石桥（Pont Pinard）上，用广角镜头仰拍，将前景的桥拱、中景的阿尔芒松河与背景雄踞于岩山上的四座圆塔全部纳入画面，构图极具震撼力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`金边塔顶环形俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登上金边塔顶后，不要只拍远处田园，将相机或手机镜头稍微向下，以脚下层层叠叠的陶土红屋顶为前景，勾勒出小镇蜿蜒的街巷肌理与更远处的绿色丘陵，层次感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣母院后巷拍尖顶`}</h4>
                  <p className="text-sm text-gray-700">{`从圣母院东侧的小巷“Rue du Collège”回头看，狭窄的石板路与两侧高耸的老屋自然形成一个画框，将教堂精美的火焰哥特式尖顶恰好框在巷子尽头，尤其在下午侧光时，明暗对比富有戏剧性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`河边倒影与晨雾`}</h4>
                  <p className="text-sm text-gray-700">{`如果运气好遇到晨雾，一定要在日出前后赶到阿尔芒松河下游的步道，拍摄小镇建筑群和树木在平静河面上的完美倒影，雾气会赋予画面水墨画般的朦胧诗意。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`文艺复兴门楣特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光斜射在Rue Buffon的古老宅邸门廊时，走近拍摄那些石雕细节（如贝壳、葡萄藤），利用光影突出其精致的纹理与立体感，诉说沉默的历史。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄民居内部或居民特写前，请务必征得同意，一个微笑和手势就能沟通。使用无人机在法国小镇上空飞行有严格规定，通常需要提前申请且小镇核心区基本禁飞，切勿擅自起飞以免引来高额罚款。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻古城中心一栋15世纪木筋墙石头房子改造的民宿，楼梯吱呀作响，房间低矮温暖，推开窗户伸手几乎能碰到对面人家的墙壁，夜晚安静得能听到自己的心跳。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`庄园体验`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在小镇外围3公里处、被自家葡萄园和树林环绕的19世纪庄园酒店，房间宽敞优雅，自带一个超美的法式花园和泳池，提供地道的勃艮第早餐，是静谧与舒适的完美结合。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`河景视角`}</h4>
                  <p className="text-sm text-yellow-800">{`入住阿尔芒松河对岸现代风格的家庭旅馆，房间拥有整面的落地窗和私人小阳台，正对着古镇的雄伟侧面，无论是清晨的薄雾还是夜晚的灯光亮起，都是独享的明信片视图。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史宅邸`}</h4>
                  <p className="text-sm text-purple-800">{`尝试由一座17世纪贵族府邸改造的精品小酒店，保留了原始的壁画天花板、巨大的壁炉和古董家具，管家式的服务会让你感觉像做客于某个古老的法国家族。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的住宿停车位极其有限甚至没有，通常需要停到河谷边的公共停车场，拖大件行李爬坡会是个挑战，预订时务必确认停车方案。夏季和节假日期间，这座小众宝藏地也会一房难求，提前数月预订是明智之举。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开瑟米尔昂诺苏瓦许久，那个玫瑰金色的影像依然会不时浮现在脑海里。它带来的感动，不仅仅在于视觉上的惊艳。那是一种关于“尺度”与“延续”的深切体会。在这个一切都追求宏大、崭新和高效的时代，瑟米尔固执地守护着一种属于人类的、亲切的、缓慢的尺度。它的街道窄到只容得下交谈和微笑，它的建筑高度让你觉得可以触碰天空，它的节奏允许你听见水流声和自己的脚步声。这里没有需要排长队打卡的“必看景点”，它的全部魅力，就在于让自己沉浸在那由石头、光影和历史层层叠加而成的整体氛围之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被旅游大巴塞满的“明星”古镇，如果你想寻找一个还能听到时光缓缓流淌声音的地方，瑟米尔昂诺苏瓦值得你专程绕道而来。它或许不会用炫目的奇观冲击你，但它会用一种温柔而坚定的力量包裹你。当你坐在河岸边，看着夕阳为这座粉色石头城披上最后一道金纱，你会明白，有些地方存在的意义，就是为了提醒我们：真正不朽的，不是权力与财富，而是人类社群在一方土地上，用双手和智慧，一代代绵延构筑起来的生活本身。这份宁静而厚重的真实感，正是深度旅行的灵魂所在。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vezelay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦兹莱修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vézelay Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eguisheim-alsace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃吉赛姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eguisheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arles-amphitheatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔勒古罗马竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arles Amphitheatre</p>
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
