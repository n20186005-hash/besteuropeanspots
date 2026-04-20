import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '诺奇古城 Norcia｜圣本笃的诞生地与美食天堂，感受意大利山城的坚韧与香气 - 最佳欧洲景点',
  description: '车子在锡比利尼国家公园蜿蜒的山路上行驶，当一片被巨大城墙严密包裹的粉色城镇突然出现在翠绿山谷的怀抱中时，你瞬间就明白了什么叫“遗世独立”。诺奇不是那种明信片式的娇柔意大利小镇，它有一种沉默的、岩石般的威严。穿过厚重的圣门进入城内，第一个拥抱你的不是视觉，而是气味——空气中弥漫着一种复杂而浓郁的香气，...',
}

export default function NorciaAncientTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '诺奇古城', href: '/attractions/norcia-ancient-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`诺奇古城・Norcia・意大利・诺奇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在锡比利尼国家公园蜿蜒的山路上行驶，当一片被巨大城墙严密包裹的粉色城镇突然出现在翠绿山谷的怀抱中时，你瞬间就明白了什么叫“遗世独立”。诺奇不是那种明信片式的娇柔意大利小镇，它有一种沉默的、岩石般的威严。穿过厚重的圣门进入城内，第一个拥抱你的不是视觉，而是气味——空气中弥漫着一种复杂而浓郁的香气，是陈年橡木桶、风干火腿、野生香料和石缝间青苔混合的味道，踏实又诱人。
这里的中心是圣本笃广场，它不像佛罗伦萨的广场那样充斥着艺术的呐喊，更像一个巨大的、露天的家庭客厅。阳光把广场上粉色石材照得发亮，当地人慢悠悠地踩着自行车经过，穿着围裙的肉店老板站在店门口和邻居聊天，他们的谈话声、笑声在四面建筑的回音壁里轻轻碰撞，显得格外清晰而温暖。广场一侧的圣本笃大教堂有着略显严肃的立面，但当你走近，会发现墙角的石凳上总是坐着几位晒太阳的老人，他们平静的目光掠过游客，仿佛在守护着这座城市自公元五世纪起就未曾中断的日常节奏。
最打动人心的，是那种深入骨髓的“手工艺”精神。诺奇是意大利“Norcineria”（猪肉屠宰与腌制技艺）的心脏。随便走进一家熟食店，你的目光都会被天花板上悬挂的、如宝石般深红的陈年火腿、萨拉米香肠所捕获。店主会自豪地用长刀削下一片薄如纸的“Culatello”火腿让你品尝，咸香在舌尖化开的瞬间，你品尝到的不仅是肉，更是山风、时间与一代代人手艺的传承。这种对土地产出的极致尊重与转化，构成了诺奇魅力的基石——它不炫耀，只提供本质的、丰沛的滋养。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在锡比利尼国家公园蜿蜒的山路上行驶，当一片被巨大城墙严密包裹的粉色城镇突然出现在翠绿山谷的怀抱中时，你瞬间就明白了什么叫“遗世独立”。诺奇不是那种明信片式的娇柔意大利小镇，它有一种沉默的、岩石般的威严。穿过厚重的圣门进入城内，第一个拥抱你的不是视觉，而是气味——空气中弥漫着一种复杂而浓郁的香气，是陈年橡木桶、风干火腿、野生香料和石缝间青苔混合的味道，踏实又诱人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的中心是圣本笃广场，它不像佛罗伦萨的广场那样充斥着艺术的呐喊，更像一个巨大的、露天的家庭客厅。阳光把广场上粉色石材照得发亮，当地人慢悠悠地踩着自行车经过，穿着围裙的肉店老板站在店门口和邻居聊天，他们的谈话声、笑声在四面建筑的回音壁里轻轻碰撞，显得格外清晰而温暖。广场一侧的圣本笃大教堂有着略显严肃的立面，但当你走近，会发现墙角的石凳上总是坐着几位晒太阳的老人，他们平静的目光掠过游客，仿佛在守护着这座城市自公元五世纪起就未曾中断的日常节奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种深入骨髓的“手工艺”精神。诺奇是意大利“Norcineria”（猪肉屠宰与腌制技艺）的心脏。随便走进一家熟食店，你的目光都会被天花板上悬挂的、如宝石般深红的陈年火腿、萨拉米香肠所捕获。店主会自豪地用长刀削下一片薄如纸的“Culatello”火腿让你品尝，咸香在舌尖化开的瞬间，你品尝到的不仅是肉，更是山风、时间与一代代人手艺的传承。这种对土地产出的极致尊重与转化，构成了诺奇魅力的基石——它不炫耀，只提供本质的、丰沛的滋养。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`诺奇古城`} />
                <InfoRow label="英文名称" value={`Norcia`} />
                <InfoRow label="正式名称" value={`Norcia`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`诺奇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座被雄伟山峦环抱的中世纪古城，是西方修道院制度之父圣本笃的诞生地，也是意大利顶级黑松露与腌制肉品的代名词。`} />
                <InfoRow label="建筑特色" value={`以独特的“粉色石材”砌成的完整中世纪城墙与堡垒，环抱着一个由广场、教堂和朴素宫殿构成的和谐整体，展现出一种历经地震仍巍然屹立的粗犷力量感。`} />
                <InfoRow label="建筑风格" value={`主要以中世纪防御建筑和文艺复兴时期的民用、宗教建筑为主，融合了罗马式的基础与后哥特式的简约装饰。`} />
                <InfoRow label="文化价值" value={`它是精神信仰（本笃会根源）与世俗生活（卓越的美食手工艺）完美结合的活态样本，体现了意大利乡村社区深厚的传统与坚韧的生命力。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城全天开放。城内主要历史建筑（如圣本笃大教堂、市政宫）的开放时间通常为上午9:00至下午1:00，下午3:30至7:00（夏季会延长）。部分博物馆周一闭馆。重要节日（如松露节）期间，整个城镇会持续活跃至深夜。冬季（11月至3月）部分次要景点可能缩短开放时间或需预约。`} />
              <InfoRow label="门票价格" value={`进入诺奇古城本身免费。参观圣本笃大教堂免费。市政宫内的博物馆、美术馆等单个景点门票约3-5欧元。联票（可参观多处古迹）约8-12欧元。65岁以上老人、学生及18岁以下青少年通常享有折扣，具体以现场公告为准。`} />
              <InfoRow label="地址" value={`Piazza San Benedetto, 06046 Norcia PG, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是罗马菲乌米奇诺机场（FCO）或佩鲁贾圣弗朗西斯德阿西西机场（PEG）。从罗马Termini火车站乘坐火车前往斯波莱托（Spoleto），车程约1.5小时，班次频繁。抵达斯波莱托后，需换乘Sulga或Spoletina公司的长途巴士前往诺奇，巴士车程约50分钟，每天约有4-6班车，周末班次减少，建议提前在巴士公司官网查询时刻表并预留充足换乘时间。自驾是最方便的方式，从斯波莱托沿SS685公路向东南行驶约40公里即可抵达，沿途锡比利尼山脉风光绝佳。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`诺奇的故事，始于一个名叫本笃的男孩。公元480年，他出生在这里的一个罗马贵族家庭。那时的诺奇已是翁布里亚地区一个重要的定居点，坐落在连接亚得里亚海与台伯河谷的古盐道上。本笃后来离开家乡前往罗马求学，最终因厌倦城市的堕落而遁入苏比亚科的山洞隐居，并创立了影响整个西方文明的本笃会修道院制度，其会规“祈祷与工作”至今回响。尽管圣本笃一生的事业在别处展开，但他的出生地诺奇，从此被赋予了神圣的光环，成为中世纪重要的朝圣中心之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了中世纪，诺奇因其战略位置而繁荣，也因其位置而饱经磨难。它处于教宗国与周围强大领主势力争夺的夹缝中。为了保护自己和珍贵的盐路贸易，诺奇人从13世纪开始，用当地开采的粉色石灰华岩石，建造了那套令人叹为观止的防御体系——高达数米的完整城墙、23座塔楼和强大的城堡（La Castellina）。这座城堡并非贵族居所，而是教宗国总督的官邸与兵营，象征着教廷对此地的直接控制。正是这套坚固的“石头腰带”，让诺奇在数个世纪的动荡中得以存续，并发展出繁荣的手工业和农业。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，诺奇真正的敌人并非军队，而是大地。它坐落在活跃的地震带上。最大的劫难发生在1979年，一场里氏5.9级的地震几乎将这座古城夷为平地。圣本笃大教堂的立面整个坍塌，无数中世纪建筑化为瓦砾。照片里那个满目疮痍的广场，令人心碎。但诺奇人没有离开。他们用了几十年的时间，一块石头一块石头地，按照原样重建了自己的家园。你如今看到的“古老”城墙和教堂，许多都是这次精心“缝合”后的作品。这种重建不是迪士尼式的仿古，而是带着创伤记忆的、对身份执拗的挽留。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`地震重塑了诺奇的物理空间，也微妙地影响了它的经济与文化。或许是对无常的深刻认知，强化了诺奇人对脚下土地出产的执着。他们更加专注地培育着古老的技艺：在橡木和山毛榉林中寻找珍贵的黑松露，用传统方法腌制出享誉世界的火腿和香肠。美食，成了他们与自然和解、并向外人展示生命力的名片。今天的诺奇，是一座活生生的“韧性”纪念碑。它不再仅仅是圣人的故乡，更是普通人用日常劳作对抗命运无常的见证。走在它的街道上，你踩着的每一块粉色石头，都既有中世纪的凉意，也有现代重生的温度。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（至少8小时）给诺奇，才能体会它的晨昏之美与生活节奏。最好在上午九点前抵达，这时旅游巴士还未涌入，阳光斜射在城墙上，古城刚刚苏醒，是拍照和感受宁静氛围的黄金时间。整体游览节奏宜慢，以圣本笃广场为核心放射状探索小巷，中午务必留给一场漫长的午餐，品尝地道风味。下午可以参观博物馆和深入手工作坊，傍晚时分登上城墙或走到城外田野，回望古城在夕照中的剪影。这样的安排能让你从历史、美食、生活多个维度，沉浸式地理解这座山城。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`许多小商店和餐馆在下午1点至3点半之间会关门午休，规划购物和用餐时间时请务必避开这个时段。
古城内街道多为石板路，请务必穿着舒适耐走的平底鞋，高跟鞋在这里将是灾难。
秋季松露节期间游客极多，住宿需提前数月预订，且自驾车可能无法驶入古城中心区域。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从气势恢宏的圣门（Porta Ascolana）进入，用手触摸那冰凉而粗糙的千年石壁，感受城门拱顶下的幽暗与前方广场泄入的光明形成的强烈对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向心脏地带圣本笃广场，先在露天咖啡座点一杯意式浓缩咖啡，像本地人一样站着快速饮尽，让咖啡因和逐渐热闹起来的广场声响唤醒感官。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`怀着敬意参观广场西侧的圣本笃大教堂，目光聚焦于那个描绘圣人生平的华丽玫瑰窗下方，那里正是传说中圣本笃故居的遗址所在。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要钻进广场拱廊下任何一家飘出醇厚肉香的熟食店（Norcineria），让老板为你切一盘包含不同陈年月份的火腿和萨拉米拼盘，配上一片简单的面包。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访市政宫（Palazzo Comunale）及其内部的博物馆，不仅看藏品，更要站在它二楼的窗口，俯瞰整个广场那如剧场般完美的布局与流动的人群。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场随意选择一条狭窄的石板小巷向内探索，比如Via Anicia，留意那些石墙上各种形状的古老门环、窗台上盛开的天竺葵和门洞里隐约传来的厨房声响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午晚些时候，沿着北侧的城墙散步，从外部仰视这座堡垒城市的雄姿，并一路走到附近的田野边，回头捕捉古城背倚苍茫锡比利尼山脉的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果适逢秋季（10月至11月），一定要去城外的森林和市场感受一下白松露季的狂热，那是一种混合了泥土、雨水和极致奢侈的独特气息。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣本笃广场东南角拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出广场建筑立面的几何线条与石材纹理，将漫步的行人或自行车纳入前景，画面充满生活故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从城墙外的Via Salaria道路向北回望`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，金色的阳光会为整个粉色城墙和塔楼镀上温暖光泽，以远处深绿色的山峦为背景，构图恢弘。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`熟食店（Norcineria）内部`}</h4>
                  <p className="text-sm text-gray-700">{`征得店主同意后，用大光圈镜头仰拍天花板上悬挂的、密如森林的深红色火腿与香肠，暖黄色的灯光下，它们仿佛散发着油润的光芒，极具质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小巷光影交错处`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入狭窄的巷道，在古老的石墙上投下明亮的几何光斑与深沉的阴影，寻找一个门洞或转角，捕捉明暗对比强烈的抽象构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡（La Castellina）前方的空地上`}</h4>
                  <p className="text-sm text-gray-700">{`利用广场地面的水洼（雨后）拍摄城堡建筑的倒影，能获得对称而富有戏剧性的画面，尤其当天空有云时效果更佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人对拍照总体友好，但拍摄商铺内部或人物特写前，请务必先用微笑和手势征得同意，这是基本的尊重。`}</li>
                <li>• {`利用好“黄金小时”（日出后和日落前一小时），诺奇粉色石材的暖色调在这时会得到极致展现，色彩饱和度惊人。`}</li>
                <li>• {`不要只拍建筑，多捕捉一些细节：门上的铁艺、橱窗里的奶酪、老人手中的编织篮，这些才是诺奇生活的真实切片。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择一间由古老石屋改造的民宿，房间可能有裸露的原始石墙和木梁，夜晚能听到远处教堂悠扬的钟声，清晨在房东自制的果酱和蛋糕香气中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`郊外农庄体验`}</h4>
                  <p className="text-sm text-green-800">{`住在距离古城几分钟车程的“Agriturismo”（农家乐），被橄榄园和果园包围，晚餐品尝全部用自家农场出产食材烹制的家常盛宴，体验真正的田园诗意。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`松露猎人之家`}</h4>
                  <p className="text-sm text-yellow-800">{`秋季来访的深度体验之选，入住松露猎人的家庭旅馆，听主人讲述寻找“地下钻石”的趣闻轶事，甚至有机会在清晨跟随猎犬一起进入神秘的森林。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端舒适酒店`}</h4>
                  <p className="text-sm text-purple-800">{`古城内由历史建筑精心修复的精品酒店，提供现代化的舒适与设计感，同时保留古老建筑的灵魂，在屋顶露台享用早餐时，视野可越过屋顶直达远山。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`诺奇古城非常小巧，住在城墙内任何位置步行到中心广场都只需几分钟，但停车可能是个挑战，预订时务必确认住宿是否提供停车位。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和秋季松露节是绝对旺季，价格飙升且一房难求，务必提前至少三个月规划预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果想获得更静谧的体验，选择城墙外步行可达的住宿是不错的折衷方案，既能享受宁静，又方便进城探索。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开诺奇很久以后，我发现自己最怀念的，不是某一张漂亮的照片，也不是某一片火腿的滋味，而是那种整体性的、沉甸甸的“实在感”。这座城市就像一个历经沧桑却依旧脊梁笔直的老人，它不向你诉说抽象的哲学，而是通过坚固的城墙、虔诚的教堂、屋檐下成排的火腿和市场上带着泥土的松露，具体而微地展示着什么是“生存”，什么是“生活”。它告诉你，信仰可以诞生于最质朴的石屋，美味来源于对时间与自然的深刻理解，而美丽，可以在一次又一次的废墟上，凭借记忆与双手顽强重生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求浮光掠影、热衷打卡“网红点”的时代，诺奇提供了一种截然相反的旅行价值。它要求你慢下来，用脚丈量它的每一条小巷，用鼻子分辨空气中复杂的气味层次，用心去理解“重建”二字背后一个社区的集体情感与意志。来到这里，你不是一个旁观者，而是被邀请进入一种延续了千年的生活韵律之中。它或许没有令人眩目的艺术杰作，但它给予你的，是一种更基础、更恒久的东西——关于坚韧，关于传承，关于如何在大地的波动与岁月的侵蚀中，守护住自己认定的美好。这，正是深度旅行的意义所在：去往那些不仅是风景，更是启示的地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/volterra-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔泰拉古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Volterra</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/otranto-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥特朗托老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Otranto Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/the-ancient-city-of-acerenza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿切伦扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Ancient City of Acerenza</p>
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
