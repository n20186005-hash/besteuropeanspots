import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣萨维尼安 Saint-Savinien｜夏朗德河上的“白石之魂”，法国隐秘的教堂石料故乡 - 最佳欧洲景点',
  description: '第一眼看到圣萨维尼安，你会恍惚觉得它是一幅被河水浸湿又晒干了的淡彩画。一切都是柔和的米白与浅金色，从河边层层叠叠爬上坡去的屋顶，到脚下被岁月磨得温润发亮的石板路。空气里有种特别的、干净的气味——那是夏朗德河带着水藻的湿润气息，混合着老石头在阳光下散发出的、类似粉笔或干燥泥土的矿物味道。耳边很静，只有',
}

export default function SaintSavinienCharenteMaritimePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '滨海夏朗德省，圣萨维尼安镇', href: '/destinations/france' },
            { label: '圣萨维尼安', href: '/attractions/saint-savinien-charente-maritime' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣萨维尼安・Saint-Savinien・法国・滨海夏朗德省，圣萨维尼安镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到圣萨维尼安，你会恍惚觉得它是一幅被河水浸湿又晒干了的淡彩画。一切都是柔和的米白与浅金色，从河边层层叠叠爬上坡去的屋顶，到脚下被岁月磨得温润发亮的石板路。空气里有种特别的、干净的气味——那是夏朗德河带着水藻的湿润气息，混合着老石头在阳光下散发出的、类似粉笔或干燥泥土的矿物味道。耳边很静，只有河水缓缓流过码头木桩的轻响，偶尔混杂着远处咖啡馆里杯碟碰撞的清脆声音，和本地老人带着浓重夏朗德口音的、慢吞吞的交谈。
这里不像那些被游客挤满的明信片小镇。圣萨维尼安的灵魂是沉静的，带着一种劳动者的实在。那些漂亮的石灰岩房子，并非为了取悦外人而建，它们本身就是故事的结晶。你触摸到的每一块墙砖，可能都来自镇子后方那片如今已沉寂的采石场。午后，阳光把房子的影子拉得长长的，投在窄巷里，你会看到石头上细致的凿痕，那是几百年前石匠留下的签名。本地人会在河边慢跑，在码头边垂钓，或者在广场边的栗子树下玩滚球游戏。这座小镇的美，不在于某个惊世骇俗的地标，而在于整个生活肌理都与这片土地的石与水深深交融。
最打动人心的是那种“源头”的感觉。当你得知，眼前这些朴素而坚固的白石，曾沿着夏朗德河运往四面八方，最终垒成了拉罗谢尔、桑特甚至更远方那些高耸入云的教堂尖顶时，再看这些房子和街道，感觉就完全不同了。它们不是终点，而是伟大旅程的起点。这里沉淀的是一种原始的、创造性的力量。走在安静的巷弄里，你仿佛能听到历史的回声——不是帝王将相的喧哗，而是铁凿敲击岩石的叮当声、船工号子、以及巨石被装上平底船时沉闷的滚动声。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到圣萨维尼安，你会恍惚觉得它是一幅被河水浸湿又晒干了的淡彩画。一切都是柔和的米白与浅金色，从河边层层叠叠爬上坡去的屋顶，到脚下被岁月磨得温润发亮的石板路。空气里有种特别的、干净的气味——那是夏朗德河带着水藻的湿润气息，混合着老石头在阳光下散发出的、类似粉笔或干燥泥土的矿物味道。耳边很静，只有河水缓缓流过码头木桩的轻响，偶尔混杂着远处咖啡馆里杯碟碰撞的清脆声音，和本地老人带着浓重夏朗德口音的、慢吞吞的交谈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不像那些被游客挤满的明信片小镇。圣萨维尼安的灵魂是沉静的，带着一种劳动者的实在。那些漂亮的石灰岩房子，并非为了取悦外人而建，它们本身就是故事的结晶。你触摸到的每一块墙砖，可能都来自镇子后方那片如今已沉寂的采石场。午后，阳光把房子的影子拉得长长的，投在窄巷里，你会看到石头上细致的凿痕，那是几百年前石匠留下的签名。本地人会在河边慢跑，在码头边垂钓，或者在广场边的栗子树下玩滚球游戏。这座小镇的美，不在于某个惊世骇俗的地标，而在于整个生活肌理都与这片土地的石与水深深交融。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的是那种“源头”的感觉。当你得知，眼前这些朴素而坚固的白石，曾沿着夏朗德河运往四面八方，最终垒成了拉罗谢尔、桑特甚至更远方那些高耸入云的教堂尖顶时，再看这些房子和街道，感觉就完全不同了。它们不是终点，而是伟大旅程的起点。这里沉淀的是一种原始的、创造性的力量。走在安静的巷弄里，你仿佛能听到历史的回声——不是帝王将相的喧哗，而是铁凿敲击岩石的叮当声、船工号子、以及巨石被装上平底船时沉闷的滚动声。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣萨维尼安`} />
                <InfoRow label="英文名称" value={`Saint-Savinien`} />
                <InfoRow label="正式名称" value={`Saint-Savinien`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`滨海夏朗德省，圣萨维尼安镇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座小镇是法国西部重要的历史石灰岩（“白石”）采石中心，其出产的石材奠定了该地区乃至法国众多哥特式教堂的基石。`} />
                <InfoRow label="建筑特色" value={`房屋、台阶、码头与教堂浑然一体，均采用本地开采的乳白色石灰岩建造，与蜿蜒的夏朗德河共同构成一幅和谐的水岸画卷。`} />
                <InfoRow label="建筑风格" value={`以中世纪和文艺复兴时期的民用建筑为主体，材料上高度统一，形成独特的“采石场小镇”风貌，建筑装饰相对朴实，凸显石材本身的美感。`} />
                <InfoRow label="文化价值" value={`它是一部关于石头、河流与匠人精神的活态史书，见证了从地底岩层到神圣殿堂的物质与文化变迁。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。核心历史建筑（如圣萨维尼安教堂）通常开放时间为：夏季（4月至9月）上午9点至下午7点；冬季（10月至3月）上午10点至下午5点。具体室内参观可能受弥撒等活动影响，建议行前查阅当地旅游局官网。小镇旅游局办公室工作时间为周一至周六，夏季周日也可能开放。`} />
              <InfoRow label="门票价格" value={`进入小镇及在街道、河岸漫步完全免费。参观圣萨维尼安教堂内部免费，但欢迎捐赠以支持维护。若有特别的导览团或进入某些私人历史庭院，可能会有5-10欧元的费用。`} />
              <InfoRow label="地址" value={`Place de la Mairie, 17350 Saint-Savinien, France`} />
              <InfoRow label="交通方式" value={`最近的机场是拉罗谢尔-雷岛机场（LRH），距离约70公里。从机场可乘坐出租车（约60分钟，费用较高）或先乘坐机场巴士到拉罗谢尔火车站。最推荐的方式是火车：从巴黎蒙帕纳斯火车站乘坐TGV高速列车至圣特斯（Saintes），约3小时。在圣特斯换乘TER区域列车，约25分钟即可抵达圣萨维尼安火车站。TER班次大约每小时一班，周末会减少。小镇火车站步行至老城区中心仅需10分钟。建议使用法国国家铁路公司（SNCF）的APP提前购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣萨维尼安的故事，始于石头，也成就于石头。早在罗马时代，人们就发现了这里河岸岩层中埋藏的宝藏——一种质地均匀、色泽乳白、易于开采和雕刻的优质石灰岩。夏朗德河成了天然的高速公路。但真正让小镇命运发生转折的，是中世纪席卷法国的“教堂建造热”。从12世纪开始，随着宗教热情高涨和城市财富积累，整个法国，特别是西部，掀起了修建大教堂的狂潮。圣萨维尼安的石材，因其坚固、美观且易于运输，一下子成了抢手货。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采石场从那时起便日夜不息。你可以想象当时的景象：镇后的山丘被开凿出巨大的断面，石匠们根据建筑师的要求，在现场就将巨石粗切成型。工地上回荡着锤凿的交响乐。最精彩的环节在河边：那些重达数吨的石块，如何运走？智慧的当地人发明了一套精妙的系统。他们利用冬季或春季河水上涨时，将石块直接推入或滑入河边的“石料港口”。等到水位合适，这些石头就被装上一种特制的平底船——“ gabarres”。这种船没有龙骨，吃水浅，特别适合在夏朗德河这样蜿蜒和缓的河道上航行。满载着“圣萨维尼安白石”的船队，就这样静静地启航，它们的旅程是反向的——从内陆的小镇驶向大西洋边的拉罗谢尔港，或是沿支流去往各个建筑工地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇因此繁荣了起来。财富不仅来自卖石头，也来自运输业和相关手艺。石匠、船匠、绳索匠、码头工人构成了小镇的社会中坚。15到17世纪，富裕的船主和石料商人们建起了我们今天看到的大部分漂亮房子。它们不像贵族城堡那样雕梁画栋，但用料扎实，格局宽敞，有着精美的石雕窗框和内部华丽的木构楼梯，透着一股因实用技艺而获得成功的自豪感。小镇的守护神圣萨维尼安教堂也得以用本地最好的石材重建和扩建，成为社区信仰与产业骄傲的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，任何产业都难以永恒。19世纪末，随着铁路的兴起和混凝土等新材料的出现，水路石材运输逐渐衰落。采石场的响声慢慢平息，巨大的岩壁留下了如戏剧舞台布景般壮观的断面，然后被自然重新接管，藤蔓和树木开始在其上生长。小镇经历了沉寂的几十年，从欧洲建筑的“供应商”变回一个安静的河边定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但历史总是循环的。到了20世纪后期，人们重新发现了它的价值。这次不是经济价值，而是历史与文化遗产的价值。那些古老的采石场遗址，因其地质奇观和工业考古意义被保护起来。小镇本身，作为法国“石头与建筑”历史的活化石，其整体风貌受到了高度重视。今天，当你漫步于此，你感受到的是一种完整的叙事：从地底的矿源，到匠人的手艺，到河流的运输，最后升华为永恒的艺术。这是一个关于物质如何转化为精神，平凡劳作如何支撑起神圣崇高的、无比动人的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味圣萨维尼安，你需要预留整整一天，并把自己调频到“慢速”模式。建议在上午九点左右抵达，这时阳光正好照亮面向东方的河岸与教堂立面，光线柔和，游客稀少。整体游览节奏宜慢不宜快，核心是“漫步”与“想象”。路线设计为一个大环线，从水边开始，深入老城街巷，探访采石场遗址，最后回归水岸，完成从“成品”回溯到“源头”，再理解“运输”过程的完整循环。这样的安排能让你逐步解锁小镇的各个层次，最终在夕阳下获得最融会贯通的体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、防滑的步行鞋，因为老城街道多是石板坡路，采石场遗址的地面也可能崎岖不平。
小镇餐馆不多且可能提前打烊，如果计划用午餐，最好在中午一点前进入心仪的餐厅，或者提前在面包店买好美味的法棍三明治野餐。
夏季蚊虫可能较多，尤其是在近水和采石场植被茂密处，建议携带驱蚊液。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇外停车场，沿着路标步行走向码头，让夏朗德河那幅宽阔宁静、倒映着白色房屋的画面作为你旅程的开幕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在码头广场（Place de l‘Ecluse）的古老悬铃木下驻足，看清澈河水下的旧时系缆石，感受水流的速度和方向，想象巨石如何从这里启航。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着码头边那条最迷人的主街（Rue du Port）向上走，用手指触摸沿街房屋墙体上那些带有明显凿痕的温暖白石。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开圣萨维尼安教堂厚重的木门，走入略显昏暗的内部，寻找建筑材料信息牌，静静坐在长椅上感受由本地石材构筑的肃穆空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂后方的小径向上，前往“老采石场”（Les Anciennes Carrières）遗址，站在那巨大的、犹如露天剧场的岩壁前，被自然的侵蚀与人工的痕迹所震撼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着采石场边缘的森林小径漫步到“Belvédère”观景台，从这里俯瞰整个小镇的屋顶、蜿蜒的河流以及远方无际的田野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后穿过迷宫般的宁静后街小巷，留意那些门楣上的船锚或工具石雕，那是屋主职业的古老徽章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在傍晚时分回到河边，找一家码头边的咖啡馆坐下，点一杯当地的皮诺葡萄汁或松露酒，看着夕阳将所有的白石染成蜜糖般的金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河对岸远眺全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前两小时，从镇子对岸的D119公路旁寻找缺口，可以用长焦镜头压缩空间，拍下白色小镇依偎在河湾、教堂钟楼作为视觉焦点的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老采石场岩壁人像`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，采石场岩壁纹理最为清晰，让人站在岩壁底部，用广角镜头仰拍，能拍出人在历史与自然巨力面前的渺小与震撼感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`码头船只与倒影`}</h4>
                  <p className="text-sm text-gray-700">{`无风的清晨，河水如镜面，将岸边色彩柔和的小船、系缆桩和房屋完美倒映，构图时让实景与倒影对称，画面宁静而富有诗意。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`教堂彩色玻璃光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，进入圣萨维尼安教堂，找到有彩色玻璃的窗户，等待光斑投射在古老的石柱或长椅上，捕捉那一刻神圣而斑斓的光影细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷阶梯纵深感`}</h4>
                  <p className="text-sm text-gray-700">{`在rue de la Prée或类似的有陡峭石阶的小巷，站在低处向上拍，利用两侧的石墙形成自然的引导线，将观者视线引向巷子尽头的光亮处或一个行走的身影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民尤其是老人的正面特写前，请务必先微笑并征得对方同意，这里不是旅游表演区，尊重隐私至关重要。`}</li>
                <li>• {`使用无人机拍摄前，请务必查询法国最新的无人机飞行法规，小镇靠近河流和私人住宅区，可能有严格的飞行限制。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河岸老宅民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住码头边一栋16世纪船商宅邸改造的民宿，房间保留了原有的石墙和木梁，清晨推开木窗就能看到河面升腾的薄雾和第一批划过水面的小船。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`宁静田园短租屋`}</h4>
                  <p className="text-sm text-green-800">{`选择镇子边缘一处带花园的独立石屋，房东可能就曾是石匠后代，院子里还摆着几块未完成的雕刻，夜晚能听到纯粹的田野风声和虫鸣。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色水上酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`体验停泊在圣萨维尼安码头、由传统“gabarre”平底船改造的浮动酒店房间，随着河水轻微摇晃入睡，彻底融入这条古老运输血脉的节奏中。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感精品小酒店`}</h4>
                  <p className="text-sm text-purple-800">{`下榻老城中心一座将现代极简设计与古老石结构完美融合的小型酒店，在屋顶露台享用早餐，360度环视这片由石头构成的温柔棋盘。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇住宿数量非常有限，尤其在夏季和周末，务必提前数月预订，临时找房几乎不可能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大部分老宅民宿不设电梯，且位于坡道旁，携带大型笨重行李箱会是个挑战，建议轻装简行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的夜晚极其安静祥和，治安良好，你可以放心地在星空下沿着河岸散步。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开圣萨维尼安时，我的背包里没有多出什么纪念品，但心里却仿佛被填入了一些更坚实、更沉重的东西——那是关于“根基”的重量。在这个崇尚浮光掠影的时代，我们习惯了欣赏建成后的伟大，惊叹于巴黎圣母院的飞扶壁或是圣米歇尔山修道院的孤绝，却很少去追问，这一切宏伟从何而来？那些石头从哪里开采？由谁的双手凿刻？又经由怎样的路径抵达？圣萨维尼安，就是所有这些问题的答案，一个朴素而伟大的起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它教会我一种新的观看历史的方式：不是向上仰望尖顶，而是向下触摸岩层；不是崇拜最终的神性，而是尊敬最初的劳动。这座小镇的魅力，正在于它完整保留了这个转化的链条。它让我们看到，人类最辉煌的文明成就，并非凭空而来，它们深深植根于具体的地理、物质的禀赋和无数无名者的技艺与汗水。在这里，神圣与世俗、艺术与劳作、终点与起点，通过一条河流和一种石头，和谐地串联在了一起。对于每一位渴望深度理解欧洲，而不只是打卡地标的旅人来说，圣萨维尼安是一堂不可或缺的启蒙课。它无声地提醒我们，真正的旅程，是去发现连接万物的脉络，而最美的风景，往往藏在故事的源头。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/najac-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳雅克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Najac</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/amiens-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    亚
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">亚眠大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Amiens Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-malbrouck" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Malbrouck</p>
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
