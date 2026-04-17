import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '洛科罗通多 Locorotondo｜伊特里亚谷的白色圆形迷宫小镇 - 最佳欧洲景点',
  description: '想象一下，你从一片被阳光烤得暖洋洋的橄榄树林中钻出来，抬头望去，远处山坡上静静地卧着一个巨大的、发光的白色圆环。那不是海市蜃楼，那就是洛科罗通多，它的名字直译过来就是“圆形的地方”。你的第一印象会是纯粹得令人屏息的白色——不是冰冷刺眼的白，而是在南意大利烈日照耀下，泛着温暖奶油光泽的白色。空气里有干...',
}

export default function LocorotondoTrulliValleyItalyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '洛科罗通多', href: '/attractions/locorotondo-trulli-valley-italy' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`洛科罗通多・Locorotondo・意大利・普利亚大区，巴里省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你从一片被阳光烤得暖洋洋的橄榄树林中钻出来，抬头望去，远处山坡上静静地卧着一个巨大的、发光的白色圆环。那不是海市蜃楼，那就是洛科罗通多，它的名字直译过来就是“圆形的地方”。你的第一印象会是纯粹得令人屏息的白色——不是冰冷刺眼的白，而是在南意大利烈日照耀下，泛着温暖奶油光泽的白色。空气里有干燥的石头气味，混合着远处飘来的迷迭香和九层塔的清新。四周安静极了，只有你自己的脚步声在狭窄巷弄里回荡，还有不知从哪家院落里传来的、老妇人用当地方言聊天的细碎声响。
走近了，你会发现这个“圆”不是冰冷的几何图形。它是由无数个家、无数条生命轨迹温柔地编织而成的。沿着主环道“Via Nardelli”漫步，你的左边是绵延的、点缀着鲜花的白色民居拱廊，右边则是突然打开的、令人惊叹的广阔视野——整个伊特里亚谷的葡萄园和橄榄林像一幅巨大的绿色织毯，一直铺展到天际线。这里没有高高在上的纪念碑，生活的核心就是这些蜿蜒的街道本身。你会看到老婆婆坐在自家刷得雪白的门洞里剥豆子，她的门牌可能就是一块手绘的陶瓷；你会听到地下室传来酿造葡萄酒的轻微动静；傍晚时分，男人们聚集在镇中心的小广场上，喝着Espresso，谈论着今天的收成。这座小镇不是一个被观看的景点，它是一部仍在书写的、关于阳光、石头与社群的诗篇。
最打动人心的，是那种被温柔包裹的迷失感。你很快会放弃地图，任由自己迷失在那些仅容一人通过的、被称为“cummerse”的拱顶小巷里。阳光被切割成锐利的光与影，打在脚下被无数代人磨得光滑如鹅卵的石板路上。每一次转弯都可能是一个惊喜：一扇钴蓝色的门，一个挂满红辣椒的庭院，或者一段突然出现的、可以俯瞰红色瓦片屋顶海洋的阶梯。这里的建筑没有多余的装饰，所有的美都来自比例、光线和那层每年都会被居民重新粉刷一次的、象征纯洁与反射烈日的石灰浆。在这里，建筑就是生活本身最朴素、最坚定的外壳。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你从一片被阳光烤得暖洋洋的橄榄树林中钻出来，抬头望去，远处山坡上静静地卧着一个巨大的、发光的白色圆环。那不是海市蜃楼，那就是洛科罗通多，它的名字直译过来就是“圆形的地方”。你的第一印象会是纯粹得令人屏息的白色——不是冰冷刺眼的白，而是在南意大利烈日照耀下，泛着温暖奶油光泽的白色。空气里有干燥的石头气味，混合着远处飘来的迷迭香和九层塔的清新。四周安静极了，只有你自己的脚步声在狭窄巷弄里回荡，还有不知从哪家院落里传来的、老妇人用当地方言聊天的细碎声响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会发现这个“圆”不是冰冷的几何图形。它是由无数个家、无数条生命轨迹温柔地编织而成的。沿着主环道“Via Nardelli”漫步，你的左边是绵延的、点缀着鲜花的白色民居拱廊，右边则是突然打开的、令人惊叹的广阔视野——整个伊特里亚谷的葡萄园和橄榄林像一幅巨大的绿色织毯，一直铺展到天际线。这里没有高高在上的纪念碑，生活的核心就是这些蜿蜒的街道本身。你会看到老婆婆坐在自家刷得雪白的门洞里剥豆子，她的门牌可能就是一块手绘的陶瓷；你会听到地下室传来酿造葡萄酒的轻微动静；傍晚时分，男人们聚集在镇中心的小广场上，喝着Espresso，谈论着今天的收成。这座小镇不是一个被观看的景点，它是一部仍在书写的、关于阳光、石头与社群的诗篇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种被温柔包裹的迷失感。你很快会放弃地图，任由自己迷失在那些仅容一人通过的、被称为“cummerse”的拱顶小巷里。阳光被切割成锐利的光与影，打在脚下被无数代人磨得光滑如鹅卵的石板路上。每一次转弯都可能是一个惊喜：一扇钴蓝色的门，一个挂满红辣椒的庭院，或者一段突然出现的、可以俯瞰红色瓦片屋顶海洋的阶梯。这里的建筑没有多余的装饰，所有的美都来自比例、光线和那层每年都会被居民重新粉刷一次的、象征纯洁与反射烈日的石灰浆。在这里，建筑就是生活本身最朴素、最坚定的外壳。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`洛科罗通多`} />
                <InfoRow label="英文名称" value={`Locorotondo`} />
                <InfoRow label="正式名称" value={`Locorotondo`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`普利亚大区，巴里省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`伊特里亚谷“白色小镇”中最具几何美学和规划智慧的典范，一个为防御与社区生活而生的圆形杰作。`} />
                <InfoRow label="建筑特色" value={`以同心圆布局的白色石灰石建筑群为核心，狭窄曲折的巷道像迷宫般环绕着中心，家家户户的窗台和拱廊点缀着盛开的鲜花。`} />
                <InfoRow label="建筑风格" value={`普利亚乡土建筑的极致体现，融合了中世纪防御性城镇规划与简洁实用的“特鲁利”石屋风格。`} />
                <InfoRow label="文化价值" value={`一个活着的社区博物馆，完美保留了南意大利乡村的生活方式、社群结构和古老的农业传统。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇全天24小时开放，公共区域可自由漫步。主要的游客信息中心、特色博物馆和部分历史建筑通常在上午9:30至下午1:00，以及下午4:00至晚上7:00开放（夏季时间可能延长）。许多小型手工艺商店和餐厅有午休习惯，大约在下午1点至4点关门。请注意，周日和意大利的公共假期（如8月15日），大部分商店和服务中心会关闭。`} />
              <InfoRow label="门票价格" value={`进入洛科罗通多古镇本身是免费的。若想参观镇内一些特定的历史建筑、博物馆或参加有组织的导览游，则需要购票。例如，参观当地的葡萄酒博物馆（Museo del Vino）门票约5欧元。镇上常有“洛科罗通多之心”主题导览，价格约15-25欧元/人，包含几个特色民居的入内参观和品酒体验。对欧盟学生和65岁以上老人通常有折扣。`} />
              <InfoRow label="地址" value={`Piazza Vittorio Emanuele II, 70010 Locorotondo BA, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是巴里机场（BRI），距离约70公里。从巴里机场出发：最便捷的方式是租车自驾，沿SS16和SS172公路行驶，约1小时即可抵达，这是探索整个伊特里亚谷的推荐方式。若乘坐公共交通：从机场乘坐机场巴士到巴里中央火车站（Bari Centrale），然后在火车站乘坐区域火车（Ferrovie Sud-Est线路）前往“Locorotondo”站，车程约1.5小时，班次不密集，建议提前查好时刻表。火车站位于古镇下方，需步行约15分钟上坡路才能到达历史中心。也可以从巴里火车站前乘坐长途巴士，但班次更少，耗时相近。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解洛科罗通多为何是圆的，得把时钟拨回一千年前。大约在10世纪左右，这片肥沃的伊特里亚谷地并不太平，拜占庭帝国、伦巴第人、萨拉森海盗的势力在此交汇碰撞。当地的农民和牧民为了生存，开始寻找易于防守的地形聚居。他们看中了这个平缓的山丘顶部——视野开阔，足以预警来袭的敌人。最初的定居点很可能只是一圈简陋的石头围墙，里面挤着一些棚屋，大家共享中间的空地作为市场和集会场所。这不是某个贵族或主教的城市规划，而是平民百姓为了活下去而共同做出的、充满智慧的本能选择。圆的形状能用最短的围墙包围最大的面积，并且没有防守死角。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了中世纪，随着诺曼人征服了南意大利，相对稳定的秩序得以建立，但这个圆形聚落的形式却被保留并强化了。它从防御堡垒演变成了一个功能齐全的封建庄园小镇。圆心处的空地变成了领主广场（现在的加富尔广场），教堂建立起来， concentric的街道一圈圈向外扩张，像树木的年轮。每一圈街道上的房子都背对着外围，窗户开向内院和更中心的巷道，这种向心性构建了极强的社区凝聚力。你家后院就是我家前院，我们共享墙壁，共享水源，也共享安全。这种建筑语言，是在用一种沉默的石头的语言诉说着：“我们是一个整体。”`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，小镇的命运也与脚下的土地紧紧捆绑。伊特里亚谷特有的石灰质土壤，催生了两种独特的建筑形式：一种是举世闻名的圆锥顶“特鲁利”石屋（在附近的阿尔贝罗贝罗达到顶峰），另一种就是洛科罗通多这些有倾斜屋顶的“卡塞多尔”式房屋。早期的房子很多直接采用“干砌”技术，不用灰浆，仅靠石头间的巧妙咬合，这种技艺至今仍能在一些老墙上看到。而每年用当地石灰石烧制的石灰水粉刷墙壁，最初是为了消毒、防潮和反射夏日酷热，后来逐渐演变成一种维护社区整洁与美丽的集体仪式。白色，成了这里与生俱来的肤色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转，洛科罗通多躲过了大规模工业化的冲击，也幸运地避开了二战战火的严重摧毁。它的经济一直围绕着葡萄与橄榄。19世纪，这里因出产品质卓越的“洛科罗通多DOC”白葡萄酒而名声鹊起。那些你看到的、延伸到天际线的整齐石墙围起来的葡萄园，种植着 Verdeca 和 Bianco d‘Alessano 葡萄品种，它们支撑着小镇数百个家庭酒窖。农业的节奏决定了生活的节奏：春天修剪枝条，夏日夜晚在广场纳凉聊天，秋季全家出动采收葡萄，冬季则在温暖的石头房子里休养生息。现代旅游业的触角伸到这里时，它已经是一个成熟、自信、知道自己是谁的社区了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的洛科罗通多，居民们依然住在那些祖先建造的白色房子里，依然在照料着他们的葡萄园。旅游业带来了咖啡馆、礼品店和精品民宿，但生活的内核未曾改变。你会发现，重新粉刷房屋外墙不仅仅是政府的规定，更是深植于居民心中的骄傲。每年的宗教节庆，圣像依然会沿着那圆环形的街道被抬着巡游，完成一场空间的、也是时间的闭环。这座小镇的故事，是一部没有主角的史诗，主角就是每一个普通的家庭，和他们在时间与石头上留下的、循环往复的印记。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`最佳的游览时间是春季的上午或秋季的傍晚，避开夏季正午的酷热和人流。建议至少预留大半天时间（4-5小时），节奏一定要慢。理想动线是：先从外围感受其“圆形”的震撼，然后由外向内，像剥洋葱一样层层深入迷宫般的巷道，最后在中心广场沉浸于本地生活氛围。上午光线柔和，适合拍照和漫步；午后可以找个阴凉的拱廊发呆或参观小博物馆；傍晚则一定要留给广场的“晚霞剧场”和一顿悠长的晚餐。这样安排能让你体验到小镇从苏醒到静谧的全天光景变化。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、防滑的平底鞋，那些古老的石灰岩石板路在晨露或雨后非常滑。尊重当地居民的隐私，拍照时尽量避免直接对准屋内或居民的正脸，很多美丽的门廊是私人住宅的一部分。小镇很多餐馆晚上8点后才供应晚餐，安排时间时要有“意大利节奏”的耐心。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从镇外公路边的观景台开始你的旅程，那里能完整看到洛科罗通多如一枚白色戒指镶嵌在翠绿山谷中的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主环道Via Nardelli由东向西漫步，左手抚过连续的白色拱廊，右手不断收获俯瞰整个伊特里亚谷葡萄园的壮丽画框。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意拐进一条向内收缩的狭窄小巷，比如Via R. Margherita，让自己彻底迷失在阳光与阴影交替演奏的光影乐章里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那些被鲜花和陶瓷装饰得格外用心的私人门廊，礼貌地窥探一眼门后宁静的庭院生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到圆心位置的加富尔广场，在 Bar 吧台点一杯冰咖啡，坐在树荫下观察广场上本地老人缓慢而充满仪式感的社会活动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观广场旁的圣母希腊教堂，看看这座融合了不同时期风格的建筑内部那令人意外的简朴与宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着另一条放射状的小路，比如Via G. Battista，向镇边缘探索，感受建筑密度和生活气息的微妙变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，找一家拥有露台或拱窗的餐厅，点上一瓶本地的洛科罗通多DOC白葡萄酒，看着夕阳将白色的墙壁染成蜜糖金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`镇外公路上“Belvedere”官方观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时光线最佳，用长焦镜头压缩空间，捕捉白色圆环小镇被晨雾或暮霭环绕的梦幻全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Via Nardelli环道中段的某个拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射入拱廊，形成强烈的明暗对比，等待一个当地人骑车或步行的身影进入光影交界处，构成故事性画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`任何一条狭窄小巷的尽头`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，巷子两边的白墙会将阳光反射并柔和化，形成天然柔光箱，拍摄空巷的纵深感，焦点对准远处的一点亮光或一盆鲜花。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`加富尔广场的钟楼角度`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，从广场角落仰拍钟楼衬着深蓝色天空的轮廓，同时将广场上咖啡馆温暖的灯光和隐约的人影纳入前景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某户人家装饰精美的楼梯与门洞`}</h4>
                  <p className="text-sm text-gray-700">{`利用门洞作为天然画框，构图时将内部精致的瓷砖楼梯、鲜花与门外另一条小巷的景深一同收纳，层次感立现。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`石灰墙的反光很强，建议适当降低曝光补偿，以保留墙壁的细节和质感。尝试拍摄一些细节特写，如门环、手工瓷砖、窗台的陶罐，它们比全景更能诉说小镇的性格。使用无人机需要格外小心并确认当地法规，密集的民居和不时起降的私人直升机可能带来风险。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住由古老“卡塞多尔”房屋改造的民宿，睡在厚重的拱形石顶下，清晨被天井洒下的阳光和房东送来的自制早餐果酱的香气唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择位于主环道上的设计师酒店，在保留原始石墙和拱顶的同时，融入了现代极简设计，在私密露台上就能独享无价的谷地全景。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`乡间度假农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`住在古镇外步行可达的宁静农庄里，被橄榄树和葡萄园包围，可以参与农庄主的日常劳作，晚上在星空下品尝他们自酿的葡萄酒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`家庭经营旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`体验最地道的家庭 hospitality，旅馆主人可能就是世代居住于此的家族，能给你讲述地图上找不到的传说，并推荐只有本地人才知道的餐馆。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`历史中心内的住宿通常需要步行一小段台阶或斜坡才能抵达，携带大件行李会略有不便，但换来的便利和体验绝对超值。夏季（7-8月）是旺季，务必提前数月预订。小镇治安非常好，夜晚独自在巷弄中漫步也很安全，但基本的警惕心仍需保持。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开洛科罗通多许久后，闭上眼，脑海里浮现的不是某个具体的建筑，而是一种感觉——一种被温柔包裹的、安心的圆满感。在这个一切都追求线性增长、不断扩张的世界里，它固执地保持着一个完美的闭环。这个圆，保护过它的子民，凝聚过社区的温情，如今，它更像一个隐喻，提醒着我们：最美好的生活，或许不在于无止境地向外探索，而在于向内深耕，在于与你周围的人和土地，建立一种深刻、持久、循环往复的联系。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些充斥着打卡点的喧嚣景点，如果你渴望一次真正能让自己慢下来、甚至“迷失”其中的旅行，请来洛科罗通多。它不会用惊世骇俗的奇观冲击你，但它会用每一道弯曲的白墙，每一片反光的石板，每一扇敞开着、飘出饭菜香气的蓝色木门，静静地、持续地抚慰你。在这里，旅行不再是收集地标，而是学习一种古老的、圆融的生活智慧。它值得我们穿过半个地球，只为在一个平凡的黄昏，坐在它的圆形广场上，看光如何一点点褪去，而生活，如何在灯光亮起时，继续它那简单、温暖、从未中断的循环。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/narni-sotterranea" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳尔尼古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Narni Sotterranea</p>
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
