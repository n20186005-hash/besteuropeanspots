import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃施河畔绍尔 Esch-sur-Sûre｜藏在卢森堡山谷里的童话小镇与中世纪城堡秘境 - 最佳欧洲景点',
  description: '车子在蜿蜒的森林道路中穿行，就在你以为要永远迷失在这片浓得化不开的绿意中时，一个急转弯，它毫无预兆地出现在眼前。那种感觉，不像看见，更像是一场屏住呼吸的邂逅。埃施河畔绍尔就那么静静地卧在山谷的掌心，绍尔河像一条闪着碎光的银蓝色缎带，以近乎完美的圆弧形将整个小镇温柔地揽入怀中。河水是那种带着冷冽清透的...',
}

export default function EschSurSurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '卢森堡', href: '/destinations/luxembourg' },
            { label: '埃施河畔绍尔', href: '/attractions/esch-sur-sure' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃施河畔绍尔・Esch-sur-Sûre・卢森堡・埃施河畔绍尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在蜿蜒的森林道路中穿行，就在你以为要永远迷失在这片浓得化不开的绿意中时，一个急转弯，它毫无预兆地出现在眼前。那种感觉，不像看见，更像是一场屏住呼吸的邂逅。埃施河畔绍尔就那么静静地卧在山谷的掌心，绍尔河像一条闪着碎光的银蓝色缎带，以近乎完美的圆弧形将整个小镇温柔地揽入怀中。河水是那种带着冷冽清透的蓝绿色，安静得几乎听不见流动的声音，只将两岸五彩的屋舍、墨绿的森林和山顶上那堆沉默的灰色石头，一一倒映成双。
我把车停在河对岸的观景台，推开车门，第一个涌上来的是气味。那是森林、苔藓和冰凉河水混合的、极其干净的味道，带着清晨未散的湿润，一下子就把肺腑洗了一遍。走过横跨河面的小石桥，脚下是被岁月磨得温润的石板，桥下河水潺潺的声音这才清晰起来，像背景音乐一样轻柔。小镇小得惊人，主街只有一条，沿着河道弯曲延伸。两旁的房子多是厚重的石砌结构，墙面刷着鹅黄、浅粉或奶油色，窗台上无一例外地盛开着天竺葵或矮牵牛，红红粉粉，在石头质朴的基调上迸发出活泼的生命力。时间在这里慢得仿佛有了黏性，你能听到的唯一“噪音”，可能是某扇木窗被推开的吱呀声，或是咖啡馆里杯碟轻微的碰撞声。
这里的核心魅力，绝不仅仅是“漂亮”。它是一种被全然包裹的安宁感。你被河流环绕，被群山凝视，被历史轻柔地触碰。当地人过着一种与这地貌浑然天成的生活。你会看到老先生提着刚买的面包不紧不慢地踱步回家，老太太在屋后临河的小菜园里摘几颗番茄。他们向你点头微笑，眼神里没有景区居民的疲惫或算计，只有一种“欢迎来到我家后院”的坦然。这份日常的、未被游客洪流冲散的宁静，才是它最打动人的地方。山顶的城堡废墟是这一切的注脚，它残破的轮廓倒映在平静的河面上，提醒你这份安宁并非天生，而是历经沧桑后的奖赏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在蜿蜒的森林道路中穿行，就在你以为要永远迷失在这片浓得化不开的绿意中时，一个急转弯，它毫无预兆地出现在眼前。那种感觉，不像看见，更像是一场屏住呼吸的邂逅。埃施河畔绍尔就那么静静地卧在山谷的掌心，绍尔河像一条闪着碎光的银蓝色缎带，以近乎完美的圆弧形将整个小镇温柔地揽入怀中。河水是那种带着冷冽清透的蓝绿色，安静得几乎听不见流动的声音，只将两岸五彩的屋舍、墨绿的森林和山顶上那堆沉默的灰色石头，一一倒映成双。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我把车停在河对岸的观景台，推开车门，第一个涌上来的是气味。那是森林、苔藓和冰凉河水混合的、极其干净的味道，带着清晨未散的湿润，一下子就把肺腑洗了一遍。走过横跨河面的小石桥，脚下是被岁月磨得温润的石板，桥下河水潺潺的声音这才清晰起来，像背景音乐一样轻柔。小镇小得惊人，主街只有一条，沿着河道弯曲延伸。两旁的房子多是厚重的石砌结构，墙面刷着鹅黄、浅粉或奶油色，窗台上无一例外地盛开着天竺葵或矮牵牛，红红粉粉，在石头质朴的基调上迸发出活泼的生命力。时间在这里慢得仿佛有了黏性，你能听到的唯一“噪音”，可能是某扇木窗被推开的吱呀声，或是咖啡馆里杯碟轻微的碰撞声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的核心魅力，绝不仅仅是“漂亮”。它是一种被全然包裹的安宁感。你被河流环绕，被群山凝视，被历史轻柔地触碰。当地人过着一种与这地貌浑然天成的生活。你会看到老先生提着刚买的面包不紧不慢地踱步回家，老太太在屋后临河的小菜园里摘几颗番茄。他们向你点头微笑，眼神里没有景区居民的疲惫或算计，只有一种“欢迎来到我家后院”的坦然。这份日常的、未被游客洪流冲散的宁静，才是它最打动人的地方。山顶的城堡废墟是这一切的注脚，它残破的轮廓倒映在平静的河面上，提醒你这份安宁并非天生，而是历经沧桑后的奖赏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃施河畔绍尔`} />
                <InfoRow label="英文名称" value={`Esch-sur-Sûre`} />
                <InfoRow label="正式名称" value={`Esch-sur-Sûre`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`埃施河畔绍尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了卢森堡伯爵领地兴衰、在两次世界大战中奇迹般幸存的中世纪防御小镇。`} />
                <InfoRow label="建筑特色" value={`整个小镇宛如一枚戒指，被绍尔河的碧蓝河道紧紧环抱，山顶的城堡废墟是这枚戒指上最沧桑的宝石。`} />
                <InfoRow label="建筑风格" value={`以中世纪防御性民居建筑为基础，融合了后来的洛林风格石屋与战后简朴修复的乡村风格。`} />
                <InfoRow label="文化价值" value={`它是卢森堡“小瑞士”地区宁静、坚韧精神的缩影，完美诠释了人与自然、历史与当下的和谐共生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放，自由漫步。城堡废墟（Castle Ruins）区域通常24小时开放，但夜间照明有限，建议白天游览。小镇的游客信息中心（通常在市政厅内）开放时间为每年4月至10月，工作日上午9:30至中午12:00，下午1:30至5:00；周末时间可能缩短或关闭。11月至次年3月仅在工作日部分时段开放。具体节日（如圣诞节、元旦）会关闭。`} />
              <InfoRow label="门票价格" value={`进入小镇、漫步河岸及参观城堡废墟外围均完全免费。若想进入城堡主塔楼（如有临时展览或特别通道开放时），可能会有少量捐赠建议或象征性门票，通常不超过5欧元。小镇的博物馆（如当地历史博物馆）门票约3-5欧元。`} />
              <InfoRow label="地址" value={`Rue du Château, 9650 Esch-sur-Sûre, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡市出发是最佳选择。在卢森堡市的中央火车站（Gare Centrale）或Hamilius公交枢纽，乘坐前往“Ettelbruck”方向的火车（约25分钟），在Ettelbruck火车站下车。随后，在车站旁的公交站换乘525路公共汽车，方向“Esch-sur-Sûre, Centre”（车程约30分钟）。525路班次有限，平日大约每小时一班，周末和节假日班次更少，务必提前在Mobiliteit.lu官网或APP查询精确时刻表。卢森堡全国公共交通（火车、公交）自2020年起已全部免费，无需购票。自驾是最灵活的方式，从卢森堡市驾车约40分钟，小镇入口处有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起这座小镇的故事，得把时钟拨回到一千多年前。大约在公元927年，第一位有记载的领主在这里建起了一座木质的堡垒，控制着绍尔河这条重要的水路。但真正让这里登上历史舞台的，是“强者”西格弗里德伯爵的后代。你可能听说过，西格弗里德伯爵用他的岩石城堡换来了卢森堡的雏形。而他的子孙们，则把目光投向了这片河谷。他们认为这个被河水天然环绕的山头，简直是上帝赐予的防御宝地。于是，在11到13世纪，坚固的石头城堡取代了木堡，围绕着城堡，工匠、商人和农民们的石屋也顺着山势蔓延下来，形成了我们今天看到的古镇雏形。小镇的名字“Esch”源于古老的词汇，意为“肥沃的河边土地”，而“Sûre”就是绍尔河，名字本身就写满了它的命运与地理的绑定。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡和它庇佑的小镇，在接下来几百年里见证了无数权力游戏。它属于过卢森堡伯爵，也随着联姻和战争，辗转落入勃艮第人、哈布斯堡王朝手中。每一次易主，城墙都可能被加固，塔楼被加高。最戏剧性的时刻出现在1794年，法国大革命军队的铁蹄踏来。为了不让城堡落入敌手成为据点，守卫这里的士兵们自己点燃了火药库。轰然巨响中，这座屹立了数百年的堡垒从内部被炸毁，只留下我们今天看到的、悲壮而残缺的骨架。大火甚至蔓延到山下，吞噬了不少民宅。你可以想象那个夜晚，河谷里一定充满了火焰、哭喊和石头崩塌的巨响，与今日的宁静形成了多么残酷的对比。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，小镇的生命力顽强得惊人。石头房子可以再建，生活总要继续。19世纪，它成了一个安静的农业和纺织小社区。转机出现在20世纪50年代，卢森堡政府决定在上游修建一座水坝（Esch-sur-Sûre Lake），用于发电和供水。起初，人们担心整个山谷会被淹没，小镇命运未卜。但最终，水坝建成，水位抬升，却意外地让绍尔河环绕小镇的弧度变得更加完美、河水更加丰沛平静，反而创造出了如今这幅“水中古镇”的绝景。湖水没有吞噬它，反而成就了它。1960年代，随着欧洲旅游业的萌芽，人们突然发现了这颗被遗忘的明珠，它开始以“卢森堡小瑞士的宝石”之名，吸引着第一批寻找静谧之地的旅行者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的平静，也曾被战火短暂打破。二战期间，这个战略要地同样未能幸免。1944年秋天，巴顿将军麾下的美军第5步兵师为强渡绍尔河、攻入德国本土，在这里与德军展开了激烈的拉锯战。石桥被炸，街道上子弹横飞，一些古老的墙壁上至今可能还嵌着当年的弹痕。幸运的是，核心的建筑群奇迹般地在大规模轰炸中幸存下来。战后，小镇的人们再次默默地修复家园。他们没有将这里大肆商业化，而是小心翼翼地维持着那份祖辈传下来的宁静气质，让城堡的废墟继续作为一座无言的纪念碑，矗立在山顶，凝视着下方生生不息的生活。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览从清晨开始，预留至少5-6小时来沉浸式体验。建议上午9点左右抵达，这时旅行团大巴尚未涌入，阳光正好洒满河面和对岸的屋舍。整个节奏应该是慵懒的散步式，而非打卡赶路。首先在河对岸的观景台获取全景，然后过桥进入小镇，沿着主街缓缓上行至城堡废墟，这是情绪上的“攀登与追溯”。下山后，沿着河岸步道完成一个完整的环镇漫步，这是“沉浸与回味”。最后在河边找张长椅坐下，或者乘小船游河（季节性），从水面视角再次仰望小镇。这样的安排顺应了地理和历史的脉络，由远及近，由高到低，由外至内，全方位感受它的层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后（尤其是7-8月）可能会有较多一日游游客，若想享受绝对宁静，工作日清晨是最好的礼物。小镇路面多为古老石板和斜坡，请务必穿一双舒适防滑的鞋子。这里没有大型商业设施，纪念品店也极少且朴实，请准备好现金（欧元），部分小咖啡馆可能不支持信用卡。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇外主停车场，先别急着过桥，走到河对岸标有“Panorama”的木制观景台，让整个被碧水环抱的小镇像一幅立体油画一样撞进你的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踩着古老的石桥进入小镇，留意脚下石板的光滑和桥墩上斑驳的苔痕，右手边第一家面包房飘出的黄油香气会立刻勾住你的脚步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着唯一的“主干道”Rue du Château缓步上行，两侧糖果色的小屋像积木一样挤在一起，记得抬头看那些有趣的门牌号和窗台上的小花。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`道路的尽头豁然开朗，穿过一个古老的石拱门，你就站在了城堡废墟的脚下，抚摸那些被爆炸和风雨侵蚀得粗糙无比的巨石基座。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着清晰的路径攀上废墟的最高处，站在仅存的塔楼墙垣边，让360度的风包裹你，俯瞰脚下如模型般的屋顶、缎带般的河流和无尽的森林海洋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡另一侧的小径下山，这条路人更少，更贴近中世纪城墙的遗迹，感受一种从历史尘埃中缓缓走回现世的过渡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后一定要沿着河边标识清晰的环形步道（Promenade）走一圈，从每一个角度欣赏小镇在水中的倒影，寻找属于你自己的最佳镜头。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在步道中途的河岸长椅上坐下，什么都不做，只是看野鸭划过水面，听风吹过树林的沙沙声，让小镇的宁静真正沉入心底。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河对岸Panorama观景台`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，但以清晨日出后一小时内和傍晚日落前金色光线最为梦幻，使用广角镜头可以完美捕捉小镇被河流环绕的经典全景构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡废墟最高点俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后阳光能较好照亮山下屋舍，用中焦段镜头压缩空间，将蜿蜒的街道、彩色屋顶和背景的森林一同纳入画面，展现层次感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`环形步道中段的一个小码头附近`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，顺光拍摄河水对岸成排的石头房屋及其在水中的清晰倒影，对称构图能带来宁静致远的氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇石桥的桥头，以城堡废墟为背景`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏蓝调时刻（日落后的半小时），华灯初上，城堡轮廓灯亮起，利用石桥作为前景框架，拍出富有故事感的夜景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从上游水坝方向远眺小镇`}</h4>
                  <p className="text-sm text-gray-700">{`需要短途驾车或徒步一段，这个角度可以看到小镇静谧地躺在山谷最深处，适合用长焦镜头捕捉它遗世独立的整体风貌。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用三脚架拍摄夜景或水流慢门时，请务必注意避让行人通道，保持安静。航拍器（无人机）在卢森堡受到严格管制，在人口稠密区、自然保护区和历史遗迹上空飞行基本被禁止，在此地放飞前务必查阅最新法规并申请许可。拍摄当地居民或他们的私人财产（如美丽的花园）时，请先微笑致意并获得默许，尊重他们的隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河岸静谧小屋`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在环形步道旁的老石屋民宿，推窗就是潺潺河水与对岸的如画房屋，夜晚在潺潺水声和满天繁星中入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山顶历史老屋`}</h4>
                  <p className="text-sm text-green-800">{`由一栋17世纪猎人小屋改造的家庭旅馆，位置就在通往城堡的小径旁，拥有一个可以俯瞰全镇屋顶的私人露台，主人会为你讲述家族传承的河谷故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园风情农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`位于镇外山坡上的温馨农庄，房间宽敞充满木质温暖，早晨能吃到用自家鸡蛋和果酱准备的丰盛早餐，并享受与绵羊和马儿为伴的田园清晨。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华避世庄园`}</h4>
                  <p className="text-sm text-purple-800">{`开车约10分钟可达的五星级森林庄园酒店，坐拥私人湖泊和高尔夫球场，提供顶级水疗，适合在深度探索古镇后，回归极致的舒适与静谧。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇内的住宿数量非常有限，通常只有十来家小型民宿和旅馆，在夏季和秋季旺季（尤其周末）务必提前数月预订。住在镇外的农庄或庄园虽然需要代步工具，但能体验到更地道的卢森堡乡村生活，夜晚也更加静谧。无论住在哪里，都请做好享受“真正夜晚”的准备——没有光污染，没有喧闹，只有自然界最原始的声音。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃施河畔绍尔很久之后，那片沉静的蓝绿色河水，依然会在某些喧嚣的都市时刻，不经意地漫上心头。它给我的触动，并非那种看到伟大建筑时的震撼，而更像是一声悠长的叹息，一种被妥善安放的温柔。在这个凡事追求“更多”、“更快”、“更响”的世界里，这里固执地保持着“更少”、“更慢”、“更轻”的韵律。它证明了，最美的防御不是高墙与刀剑，而是河流的拥抱与内心的安宁。城堡的废墟没有试图被修复成虚假的完整，它就以残破的、真实的模样站在那里，坦然展示着历史的伤口与时间的重量，这份诚实反而赋予了它比任何崭新宫殿更强大的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被明信片和人群定义的热门景点，如果你渴望的旅行不是收集打卡照，而是寻找一处能让呼吸变深、让思绪沉淀的港湾，那么请把埃施河畔绍尔列入你的清单。它不仅仅是一个地点，更是一种状态。来这里，走一圈环河小路，摸一摸城堡的残垣，在长椅上发一会儿呆。你会带走的不只是照片，还有一种确信：无论外面的世界如何奔腾翻滚，总有一些角落，时间愿意以河流的形态缓缓流淌，守护着一份不被打扰的、完整的宁静。这份宁静，足以疗愈一颗在都市中奔波疲惫的心。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/esch-sur-sure-luxembourg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃施叙尔叙尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esch-sur-Sûre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bourscheid-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔沙伊德城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bourscheid Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vianden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维安登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vianden Castle</p>
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
