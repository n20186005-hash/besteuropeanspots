import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙特法尔科 Montefalco｜翁布里亚的阳台，品味萨格兰蒂诺红酒与文艺复兴壁画的天堂 - 最佳欧洲景点',
  description: '车子沿着翁布里亚起伏的绿色丘陵盘旋而上，远处是亚平宁山脉温柔的轮廓。然后，它就这样毫无预兆地出现在你眼前：一圈完整的、蜜糖色的石头城墙，像一顶王冠，稳稳地戴在一座圆锥形山丘的顶上。这就是蒙特法尔科，人们叫它“翁布里亚的阳台”。穿过古老的圣阿戈斯蒂诺城门，时间的流速立刻改变了。车轮声被石板路上清脆的脚',
}

export default function MontefalcoUmbriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '蒙特法尔科', href: '/attractions/montefalco-umbria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙特法尔科・Montefalco・意大利・蒙特法尔科`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着翁布里亚起伏的绿色丘陵盘旋而上，远处是亚平宁山脉温柔的轮廓。然后，它就这样毫无预兆地出现在你眼前：一圈完整的、蜜糖色的石头城墙，像一顶王冠，稳稳地戴在一座圆锥形山丘的顶上。这就是蒙特法尔科，人们叫它“翁布里亚的阳台”。穿过古老的圣阿戈斯蒂诺城门，时间的流速立刻改变了。车轮声被石板路上清脆的脚步声取代，空气里混合着古老石墙的清凉、某户人家窗口飘出的炖肉香、以及无处不在的，从地窖门缝里钻出来的，那种深邃的、带着橡木桶和成熟浆果气息的酒香。
小镇的心脏是十一世纪广场（Piazza del Comune）。这里没有令人窒息的游客潮，只有当地人生活的韵律。上午，老先生们坐在广场边的咖啡馆外，看着寥寥无几的游客，也看着彼此，一杯咖啡能喝上一个世纪。阳光慢慢爬过广场上文艺复兴风格的市政厅（Palazzo Comunale）的立面，把每一块石头的纹理都照得清清楚楚。你突然明白，这个“阳台”的称谓，不仅指它物理上的高度，更是指一种生活态度——一种抽离于平原的繁忙，在阳光下静静观望世界变迁的从容。
而蒙特法尔科最震撼人心的宝藏，藏在两处看似谦逊的建筑里。一个是圣方济各教堂博物馆，那里珍藏着文艺复兴大师贝诺佐·戈佐利的壁画《圣方济各的故事》。当你推开那扇厚重的木门，昏暗瞬间被金色的光环取代。十五世纪的色彩在墙上流动，圣徒的故事栩栩如生，你会不由自主地屏住呼吸，仿佛能听到画笔在湿壁画上涂抹的细微声响。另一个宝藏是萨格兰蒂诺葡萄酒，这种仅产于蒙特法尔科周边山坡的深色、浓郁、单宁强劲的红酒，是小镇流淌的血液。随便走进一家不起眼的“地窖酒馆”（enoteca），主人都会热情地为你倒上一杯，讲述风土与年份的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着翁布里亚起伏的绿色丘陵盘旋而上，远处是亚平宁山脉温柔的轮廓。然后，它就这样毫无预兆地出现在你眼前：一圈完整的、蜜糖色的石头城墙，像一顶王冠，稳稳地戴在一座圆锥形山丘的顶上。这就是蒙特法尔科，人们叫它“翁布里亚的阳台”。穿过古老的圣阿戈斯蒂诺城门，时间的流速立刻改变了。车轮声被石板路上清脆的脚步声取代，空气里混合着古老石墙的清凉、某户人家窗口飘出的炖肉香、以及无处不在的，从地窖门缝里钻出来的，那种深邃的、带着橡木桶和成熟浆果气息的酒香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇的心脏是十一世纪广场（Piazza del Comune）。这里没有令人窒息的游客潮，只有当地人生活的韵律。上午，老先生们坐在广场边的咖啡馆外，看着寥寥无几的游客，也看着彼此，一杯咖啡能喝上一个世纪。阳光慢慢爬过广场上文艺复兴风格的市政厅（Palazzo Comunale）的立面，把每一块石头的纹理都照得清清楚楚。你突然明白，这个“阳台”的称谓，不仅指它物理上的高度，更是指一种生活态度——一种抽离于平原的繁忙，在阳光下静静观望世界变迁的从容。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而蒙特法尔科最震撼人心的宝藏，藏在两处看似谦逊的建筑里。一个是圣方济各教堂博物馆，那里珍藏着文艺复兴大师贝诺佐·戈佐利的壁画《圣方济各的故事》。当你推开那扇厚重的木门，昏暗瞬间被金色的光环取代。十五世纪的色彩在墙上流动，圣徒的故事栩栩如生，你会不由自主地屏住呼吸，仿佛能听到画笔在湿壁画上涂抹的细微声响。另一个宝藏是萨格兰蒂诺葡萄酒，这种仅产于蒙特法尔科周边山坡的深色、浓郁、单宁强劲的红酒，是小镇流淌的血液。随便走进一家不起眼的“地窖酒馆”（enoteca），主人都会热情地为你倒上一杯，讲述风土与年份的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙特法尔科`} />
                <InfoRow label="英文名称" value={`Montefalco`} />
                <InfoRow label="正式名称" value={`Montefalco`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`蒙特法尔科`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座曾被称为“翁布里亚的阳台”、在中世纪和文艺复兴时期因战略位置与艺术繁荣而备受瞩目的山巅小镇。`} />
                <InfoRow label="建筑特色" value={`完整的中世纪环形城墙包裹着迷宫般的石板小巷，城市布局以山顶的主广场为核心，向外辐射。`} />
                <InfoRow label="建筑风格" value={`以中世纪罗马式建筑为基底，融合了诸多精美的文艺复兴时期建筑与装饰细节。`} />
                <InfoRow label="文化价值" value={`这里是深度体验翁布里亚“慢生活”哲学、萨格兰蒂诺葡萄酒文化以及文艺复兴艺术（尤其是贝诺佐·戈佐利壁画）的绝佳交汇点。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。主要博物馆和教堂开放时间通常为：夏季（4月至10月）上午10:00至下午1:00，下午2:30至晚上7:00；冬季（11月至3月）时间缩短，通常下午4:30关闭。大部分景点周一闭馆。具体开放时间建议在前往前查看当地旅游局官网，小型酒窖参观需提前预约。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。主要景点如圣方济各教堂博物馆（Museo di San Francesco）门票约为8欧元，包含壁画厅和考古展区。部分教堂免费，但点亮灯光欣赏壁画可能需要投入1-2欧元硬币。许多酒窖的品酒体验从15欧元到50欧元不等，包含导览和多种葡萄酒品尝。`} />
              <InfoRow label="地址" value={`06036 Montefalco PG, Italia`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是佩鲁贾（约45公里）和斯波莱托（约15公里）。从罗马菲乌米奇诺机场或米兰马尔彭萨机场，可乘火车至福利尼奥（Foligno）火车站，这是距离蒙特法尔科最近的火车站（约12公里）。从福利尼奥火车站前，可换乘APM巴士（Linea 5或Linea 9）前往蒙特法尔科，车程约25-30分钟，班次较为稀疏，每天约6-8班，务必提前在车站或烟草店（Tabacchi）购买车票。最灵活的方式是在福利尼奥或佩鲁贾租车自驾，沿SS316公路行驶，沿途是连绵的翁布里亚丘陵风光，约20分钟车程即可抵达山脚下的停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`蒙特法尔科的故事，始于它的名字和它的位置。早在古罗马时期，这里就因绝佳的视野被用作瞭望哨。但真正让它登上历史舞台的，是中世纪那纷乱的城邦争斗。它最初的名字是“Coccorone”，直到十三世纪，神圣罗马帝国皇帝腓特烈二世在一次猎鹰时，被从这里俯瞰的广阔景色所震撼，感叹这简直是“猎鹰之山”（Mons Faliscus），小镇由此得名“蒙特法尔科”（Montefalco，意为猎鹰山）。这个名字，也预示了它将在周边佩鲁贾、斯波莱托、福利尼奥等大城的夹缝中，如猎鹰般敏锐求存的命运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个十四到十五世纪，蒙特法尔科都是一块令人垂涎的肥肉。它在吉伯林派（皇帝派）和圭尔夫派（教皇派）之间反复易手，城墙一次次被加固，塔楼一次次竖起。我们今天看到的近乎完美的环形城墙，大多就修建于这个动荡的时期。它像一套坚硬的铠甲，保护着山巅的居民。也正是在这段相对稳定的后期，艺术开始了萌芽。本笃会、方济各会的修士们在此定居，带来了知识和虔诚的信仰，也为艺术创作提供了土壤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点出现在十五世纪中叶。当时，佛罗伦萨的美第奇家族权势滔天，而一位名叫贝诺佐·戈佐利的画家，正是美第奇家族的御用画师之一。不知是因政治流亡还是受委托，戈佐利来到了相对偏远的蒙特法尔科。1450年至1452年间，他在小镇的圣方济各教堂后殿，创作了宏伟的壁画系列《圣方济各的故事》。这组作品如同一声惊雷，将最前沿的佛罗伦萨文艺复兴风格——精准的透视、生动的叙事、丰富的人物表情和奢华细节——带入了翁布里亚的腹地。蒙特法尔科因此从一个单纯的军事要塞，一跃成为艺术朝圣地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`艺术的繁荣与葡萄的种植，在随后的几个世纪里并行不悖。萨格兰蒂诺葡萄，这个可能由方济各会修士从东方带来的古老品种，在蒙特法尔科独特的石灰质粘土中找到了天堂。它酿出的酒色深如墨，强劲有力，成为了小镇除艺术之外的另一张名片。尽管经历了战争、瘟疫和经济起伏，蒙特法尔科始终固守在山巅。它的城墙从未被大规模破坏，它的历史中心完好如初，这使得我们今天漫步其中时，几乎能与五百年前的先人踏在同一个石阶上，望着同一片被葡萄园覆盖的、如波浪般起伏的翁布里亚原野。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午九点半左右抵达，这时旅游巴士尚未到来，阳光正好温柔地洒满石板路。整体游览需要留足一整天的时间，节奏宜慢不宜快。上午专注于文化和艺术，参观核心的博物馆与教堂；中午在广场享用漫长的午餐，品尝当地特色；下午则留给葡萄酒和闲适的漫步，穿梭于小巷，探访家庭酒窖。傍晚时分，一定要走到城墙的观景台，那是“阳台”名号的最佳印证，看夕阳为整个翁布里亚山谷镀上金红色。这样的安排既能避开人流高峰，又能充分体验小镇从宁静到温馨的一日生活循环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`许多小型酒窖和家庭作坊不设固定开放时间，最好提前一天通过酒店或旅游信息中心预约参观和品酒。小镇内街道多为陡峭的坡道和台阶，务必穿一双绝对舒适耐走的鞋子。周一是大多数博物馆的闭馆日，但小镇本身和部分餐厅、酒窖仍开放，请根据你的兴趣调整到访日期。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从古老的圣阿戈斯蒂诺城门进入，让第一缕阳光引领你沿着被岁月打磨得光滑发亮的石板主路（Via Ringhiera Umbra）向山顶漫步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直前往十一世纪广场，在广场边的咖啡馆外坐下，点一杯意式浓缩咖啡，像当地人一样看着小镇在晨光中缓缓苏醒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观圣方济各教堂博物馆，花至少一小时沉浸在那间布满贝诺佐·戈佐利壁画的圣器室（原教堂后殿）里，让十五世纪的色彩和故事将你包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，拐进旁边的小巷，寻找圣基亚拉教堂，那里有更多鲜为人知但同样动人的中世纪及文艺复兴壁画，环境更为静谧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午回到主广场，选择一家有露天座位的餐厅，务必点上一盘用萨格兰蒂诺葡萄酒烹制的“斯特拉蒂（Stringozzi）粗面条”，并配上一杯年轻的萨格兰蒂诺葡萄酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后拜访一家家族经营的小酒窖，深入阴凉的石窟，听主人讲述酿酒哲学，品尝陈年的萨格兰蒂诺红葡萄酒和珍贵的“萨格兰蒂诺帕赛托”甜酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`带着微醺的酒意，毫无目的地迷失在那些以拱门、鲜花和突然出现的庭院为特征的小巷里，比如浪漫的Via della Rocca。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时，沿着指示牌走到“观景台”（Belvedere），通常是城墙的西北角，看夕阳将斯波莱托山谷、特雷维和远处亚平宁山脉的轮廓染成一片温暖的蜜色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城墙外侧的环城路（Strada di Circonvallazione）上`}</h4>
                  <p className="text-sm text-gray-700">{`尤其是西侧和北侧路段，在下午的侧光下，可以拍摄到蒙特法尔科完整的、戴着“王冠”的山丘轮廓与前景的葡萄园或橄榄树同框的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`十一世纪广场的东南角`}</h4>
                  <p className="text-sm text-gray-700">{`利用广场的斜坡，以文艺复兴风格的市政厅 Palazzo Comunale 及其钟楼为背景，捕捉当地人骑行穿过或坐在咖啡馆前的生动生活场景，最佳光线在上午。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣方济各教堂博物馆壁画厅内`}</h4>
                  <p className="text-sm text-gray-700">{`使用高感光度和大光圈，在不使用闪光灯（绝对禁止）的前提下，尝试捕捉壁画局部细节与自然光从高侧窗洒下的神圣光影，室内光线全天都较为恒定但柔和。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从“观景台”（Belvedere）向东眺望`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，将城墙作为前景框架，拍摄远方被金色夕阳笼罩的斯波莱托山谷、特雷维小镇以及更远处的群山，形成一幅层次分深的全景画卷。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂和博物馆内部严格禁止使用闪光灯和三脚架（除非有特殊许可），这是为了保护珍贵的壁画。拍摄当地人或店主时，一个微笑和简单的手势征得同意，会带来更友善的回应。尝试拍摄一些细节：门环、窗台的鲜花、酒窖里落满灰尘的酒瓶、光影切割的石墙，这些更能传达小镇的灵魂。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在城墙外步行五分钟内的宁静农庄（Agriturismo），房间简单干净，带有巨大的花园和泳池，早晨能在公鸡打鸣和鸟语花香中醒来，并品尝主人自制的果酱和蛋糕。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由中世纪修道院改建的精品酒店，石头拱顶客房保留了原始的宁静氛围，庭院里有一口古老的井，晚上在星空下享受一顿地道的翁布里亚晚餐，仿佛住在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇中心一座十六世纪贵族宫殿内的奢华酒店，客房天花板是精美的壁画或古老的木梁，部分房间带有可以俯瞰整个翁布里亚山谷的私人露台，服务细致入微。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`浪漫隐居`}</h4>
                  <p className="text-sm text-purple-800">{`小镇某条静谧小巷尽头由石头小屋改造的独立公寓，拥有设备齐全的小厨房和一个被九重葛花覆盖的私人小阳台，让你像本地人一样买菜做饭，彻底融入山城生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇内的住宿数量非常有限，尤其是在夏季葡萄酒节期间，务必提前数月预订。住在城墙内虽然景观可能受限，但能体验入夜后和清晨游客散去时那份独有的宁静。如果自驾，务必确认住宿地点是否提供停车位，小镇内的历史中心区域通常禁止非居民车辆驶入，停车多在城墙外的免费或付费停车场。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开蒙特法尔科许久，那股混合着石壁清凉、酒香醇厚和壁画上金色光芒的气息，依然会在某些平凡的时刻突然唤醒记忆。它不像那些声名显赫的大都市，用磅礴的气势瞬间将你征服。相反，它用一种缓慢的、渗透的方式，将一种关于“完整”和“自洽”的生活图景，悄悄植入你的心里。在这里，艺术不是被锁在玻璃柜里的标本，而是教堂墙壁上依然在呼吸的故事；美酒不是商品化的标签，而是连接着土地、季节与家族情感的液体诗歌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率与速成的时代，蒙特法尔科固执地站在它的山巅，像一个温和的提醒者。它告诉我们，有些价值需要城墙来守护——无论是石头垒砌的，还是内心坚守的。它告诉我们，深度从来不是匆匆一瞥所能获得，它需要你坐在广场上无所事事地消磨一个上午，需要你鼓起勇气走进一家昏暗的地窖酒馆，需要你等待夕阳一寸寸染红整个山谷。每一位热爱深度游的旅人，都应该来一次蒙特法尔科，不仅仅是来看一幅画、品一杯酒，更是来体验一种时间沉淀出的密度，来登上这座“阳台”，眺望一下我们内心或许已经遗忘的、那片宁静而丰饶的风景。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/venzone-rebuilt-lavender-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    文
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">文佐内</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Venzone</p>
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
              <a href="/attractions/martina-franca" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马丁纳弗兰卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Martina Franca</p>
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
