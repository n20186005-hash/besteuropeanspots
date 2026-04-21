import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塔罗卡 Tarouca｜探访葡萄牙最古老的西多会修道院与梦幻中世纪收费桥 - 最佳欧洲景点',
  description: '车子拐下主路，驶入塔罗卡山谷的那一刻，世界仿佛被调低了音量。空气中有一股清冽的味道，混合着河岸的水汽、古老的石头和远处森林里传来的松针香气。这里不像那些名声在外的旅游小镇，没有蜂拥而至的巴士，只有偶尔驶过的本地小卡车，和坐在自家门口阳光下眯着眼的老奶奶。时间在这里不是金钱，而是像蜿蜒的瓦罗萨河一样，',
}

export default function TaroucaPortugalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '塔罗卡', href: '/destinations/europe' },
            { label: '塔罗卡', href: '/attractions/tarouca-portugal' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塔罗卡・Tarouca・葡萄牙・塔罗卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下主路，驶入塔罗卡山谷的那一刻，世界仿佛被调低了音量。空气中有一股清冽的味道，混合着河岸的水汽、古老的石头和远处森林里传来的松针香气。这里不像那些名声在外的旅游小镇，没有蜂拥而至的巴士，只有偶尔驶过的本地小卡车，和坐在自家门口阳光下眯着眼的老奶奶。时间在这里不是金钱，而是像蜿蜒的瓦罗萨河一样，缓慢、平静地流淌。塔罗卡不是一张明信片，它是一本被轻轻翻开、书页微微卷起的古老故事书，等待着你用散步的节奏去阅读。
吸引我来到这里的，是两处看似分离却又灵魂相连的遗迹。首先闯入视野的，是乌卡尼亚桥。远远望去，那座敦实的石塔楼就那样蛮横又优雅地“坐”在桥中央，仿佛一个中世纪的巨人，看守着脚下的流水与过往的行人。水流声潺潺，阳光把桥拱和塔楼的影子拉得老长，投在清澈见底的河面上。当地的孩子在浅滩嬉戏，笑声撞在石壁上，发出清脆的回响。这不仅仅是一座桥，它曾经是一个关卡，一个税收站，一个村庄财富与安全的象征。你几乎能想象出，几个世纪前，驮着葡萄酒和橄榄的骡队经过这里，叮当作响的铜币被投入塔楼窗口的情景。
而驱车向山谷深处再行进几分钟，荒凉与庄严并存的萨勒泽达斯修道院遗址便赫然出现。相比于乌卡尼亚桥的生活气息，这里是彻底的静谧与沉思之地。巨大的教堂立面依然矗立，像一个沉默的巨人，但它的身后，修道院的回廊、食堂、宿舍大多只剩下地基和残墙，野草从石缝中顽强地探出头，紫色的野花在风中轻轻摇曳。当你独自站在那些高耸却空荡的窗洞下，风声穿过，仿佛能听到昔日修士们吟唱圣歌的余韵。那种美，是破碎的、伤感的，却又充满力量。它毫不掩饰时间的残酷，也坦然展示着曾经的精神高度。
这就是塔罗卡最打动人心的魅力——它把宏大的历史叙事，拆解成了触手可及的片段：一座仍在使用的古桥，一片供人凭吊的废墟，一个安详如常的葡式村庄。你在这里感受到的，不是被玻璃罩起来的“遗产”，而是一种历史的延续感与断裂感奇妙的共生。它让你思考，什么是永恒？是石头的坚固，还是河流不息的生命力？`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子拐下主路，驶入塔罗卡山谷的那一刻，世界仿佛被调低了音量。空气中有一股清冽的味道，混合着河岸的水汽、古老的石头和远处森林里传来的松针香气。这里不像那些名声在外的旅游小镇，没有蜂拥而至的巴士，只有偶尔驶过的本地小卡车，和坐在自家门口阳光下眯着眼的老奶奶。时间在这里不是金钱，而是像蜿蜒的瓦罗萨河一样，缓慢、平静地流淌。塔罗卡不是一张明信片，它是一本被轻轻翻开、书页微微卷起的古老故事书，等待着你用散步的节奏去阅读。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "吸引我来到这里的，是两处看似分离却又灵魂相连的遗迹。首先闯入视野的，是乌卡尼亚桥。远远望去，那座敦实的石塔楼就那样蛮横又优雅地“坐”在桥中央，仿佛一个中世纪的巨人，看守着脚下的流水与过往的行人。水流声潺潺，阳光把桥拱和塔楼的影子拉得老长，投在清澈见底的河面上。当地的孩子在浅滩嬉戏，笑声撞在石壁上，发出清脆的回响。这不仅仅是一座桥，它曾经是一个关卡，一个税收站，一个村庄财富与安全的象征。你几乎能想象出，几个世纪前，驮着葡萄酒和橄榄的骡队经过这里，叮当作响的铜币被投入塔楼窗口的情景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而驱车向山谷深处再行进几分钟，荒凉与庄严并存的萨勒泽达斯修道院遗址便赫然出现。相比于乌卡尼亚桥的生活气息，这里是彻底的静谧与沉思之地。巨大的教堂立面依然矗立，像一个沉默的巨人，但它的身后，修道院的回廊、食堂、宿舍大多只剩下地基和残墙，野草从石缝中顽强地探出头，紫色的野花在风中轻轻摇曳。当你独自站在那些高耸却空荡的窗洞下，风声穿过，仿佛能听到昔日修士们吟唱圣歌的余韵。那种美，是破碎的、伤感的，却又充满力量。它毫不掩饰时间的残酷，也坦然展示着曾经的精神高度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是塔罗卡最打动人心的魅力——它把宏大的历史叙事，拆解成了触手可及的片段：一座仍在使用的古桥，一片供人凭吊的废墟，一个安详如常的葡式村庄。你在这里感受到的，不是被玻璃罩起来的“遗产”，而是一种历史的延续感与断裂感奇妙的共生。它让你思考，什么是永恒？是石头的坚固，还是河流不息的生命力？" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塔罗卡`} />
                <InfoRow label="英文名称" value={`Tarouca`} />
                <InfoRow label="正式名称" value={`Tarouca`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`塔罗卡`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`见证了葡萄牙建国初期宗教与世俗权力交织、边疆开拓与信仰传播的活化石。`} />
                <InfoRow label="建筑特色" value={`萨勒泽达斯修道院是西多会简朴美学的典范，而乌卡尼亚桥则是罕见的将防御塔楼与桥梁融为一体的中世纪民用工程杰作。`} />
                <InfoRow label="建筑风格" value={`以罗马式为基础，向哥特式过渡，并带有葡萄牙曼努埃尔风格的装饰细节。`} />
                <InfoRow label="文化价值" value={`一个浓缩了修道院文化、中世纪交通税收体系与乡村日常生活的完整微型历史切片。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`萨勒泽达斯修道院遗址：夏季（4月至10月）上午9:00至下午6:00；冬季（11月至3月）上午9:00至下午5:00，每周一闭馆。乌卡尼亚桥及塔楼：全年24小时开放外部区域，塔楼内部参观需联系当地旅游信息中心预约（通常为每周三、六下午开放）。具体节假日安排常有变动，建议出行前查阅当地市政网站。`} />
              <InfoRow label="门票价格" value={`萨勒泽达斯修道院遗址：成人票5欧元，65岁以上老人及学生票2.5欧元，12岁以下儿童免费。家庭票（2大2小）12欧元。乌卡尼亚桥塔楼：参观免费，但需向当地旅游信息中心捐赠1-2欧元用于维护。两地联票（仅限修道院）暂无。`} />
              <InfoRow label="地址" value={`主要遗址位于城镇周边：Mosteiro de Salzedas, 3610-732 Salzedas, Portugal； Ponte Fortificada de Ucanha, 3610-909 Ucanha, Portugal`} />
              <InfoRow label="交通方式" value={`从波尔图弗朗西斯科·萨·卡内罗机场出发最方便。首先，在机场地铁站乘坐地铁E线（紫色线）直达波尔图坎帕汉火车站，约40分钟。在此乘坐葡萄牙铁路（CP）的区域火车前往雷古阿站，车程约1.5-2小时，班次每日约6-8班。抵达雷古阿后，需换乘当地巴士（Rodonorte公司运营）前往塔罗卡镇中心，车程约40分钟，但班次稀少，每日仅2-3班，务必提前查好时刻表。最灵活的方式是在雷古阿火车站租车自驾，沿N226公路行驶约30分钟即可到达塔罗卡，沿途杜罗河支流山谷风光绝美。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要听懂塔罗卡的低语，得把时钟拨回12世纪。那时，葡萄牙刚刚成为一个独立的王国，疆域还在与南方的摩尔人拉扯中不断变化。北部的杜罗河沿岸，既是前线，也是亟待开垦和教化的边疆。1138年，一位名叫特蕾莎的女士——她是葡萄牙开国国王阿方索·恩里克斯的母亲——做出了一个影响深远的决定：将瓦罗萨河谷的大片土地，赐予从法国勃艮第远道而来的西多会修士。这份慷慨的捐赠，并非纯粹出于虔诚。在“再征服运动”的时代背景下，邀请以纪律严明、善于垦荒著称的西多会修士前来，无异于派遣了一支高效的“精神与经济的先锋队”。萨勒泽达斯修道院，便在这样的政治与信仰合谋中奠基了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修士们来了，他们奉行“祈祷与劳动”的会规，带来了先进的农业技术。他们清理森林，开辟葡萄园和橄榄园，引水灌溉，将这片荒谷变成了富庶的庄园。修道院不仅是祈祷之所，更成了一个庞大的农业、手工业和经济中心。它的影响力日益增长，财富也随之积累。到了13世纪，修道院开始建造那座令人过目不忘的罗马-哥特式教堂，高耸的线条指向天堂，象征着神权在此地的稳固。可以想象，在鼎盛时期，这里钟声回荡，修士们白衣飘飘穿梭于回廊，依附于修道院的农民在田间劳作，俨然一个自给自足的“上帝之国”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的剧本从不只有繁荣这一章。就在修道院蓬勃发展的同时，王室和贵族的权力网络也在不断编织。乌卡尼亚桥的诞生，就与一位名叫费尔南多·科蒂尼奥的贵族有关。大约在14世纪末15世纪初，他获得了这片领地的管辖权。为了控制交通、征收通行费并展示权威，他下令建造了这座独特的桥塔一体的建筑。那座石塔楼，底层是收费口，上层是守卫的住所和瞭望台。想象一下，所有从河谷一侧前往另一侧，或运送货物前往修道院和市场的人们，都必须在此停下，缴纳费用。这座桥，成了世俗权力渗透并掌控地方经济命脉的物理象征。它与不远处的修道院，一个掌管灵魂与土地，一个控制道路与钱袋，形成了一副微妙的中世纪权力图景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "盛极而衰是历史的常态。16世纪后，随着葡萄牙海外帝国的兴起和商业中心的转移，内陆山区的重要性逐渐下降。更致命的打击来自19世纪。1834年，葡萄牙自由派政府颁布法令，解散了全国所有的修道院，没收其财产。这对萨勒泽达斯来说是灭顶之灾。修士被驱逐，珍贵的艺术品和文献流散，庞大的建筑群失去了维护者，在风吹雨打和人们的漠视中迅速荒废，变成了我们今天看到的悲壮遗址。而乌卡尼亚桥，因其仍有实用功能，幸运地被保留并维护下来，从收费关卡变成了村庄的图腾和入口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的宁静，掩盖了数百年的波澜。塔罗卡的故事，是葡萄牙国家形成初期的一个缩影：宗教热情与世俗野心交织，开疆拓土与精耕细作并存，最终又在时代的洪流中经历辉煌与沉寂。走在这些石头中间，你触摸到的每一道刻痕，都可能是某个无名石匠的手迹，或是几个世纪以来流水与风沙的日记。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一个完整而悠闲的白日来探索塔罗卡。最好的抵达时间是上午九点前，这时山谷晨雾未完全散去，光线柔和，村庄刚刚苏醒。整个游览节奏应如当地生活般舒缓，核心是“一桥一院一镇”。先从最具生活气息的乌卡尼亚桥开始，感受其晨间的活力；随后驱车前往萨勒泽达斯修道院，在正午前后探索遗址，那时阳光能照进废墟深处，光影戏剧感最强；下午返回塔罗卡镇中心，用步行的方式融入本地生活。全程耗时约6-8小时，自驾衔接最为顺畅。这样的安排顺应了光线变化，也避免了在废墟中最炎热时段暴晒。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双结实防滑的鞋，萨勒泽达斯修道院遗址地面不平，多有碎石和杂草。参观修道院遗址时请保持 respectful 的安静，这里虽为废墟，但仍是很多当地人心中重要的历史记忆载体。小镇及周边餐馆不多且营业时间随性，最好自备一些简单的饮用水和零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站就前往乌卡尼亚桥，把车停在河对岸的空地，慢慢步行过桥，用手触摸那些被无数行人磨得光滑的桥栏石头。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要钻进桥塔楼的门洞（如果开放），感受内部的阴凉与石壁的厚重，想象守卫从狭小的窗口望出去的世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从桥的另一端回头眺望，将完整的桥、塔、倒影以及后方红瓦屋顶的村庄一并收入眼底，这是它最经典的角度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`驱车前往萨勒泽达斯修道院，不要急着进入教堂，先绕着巨大的遗址外围走半圈，从各个角度感受这片建筑群的规模和荒芜的意境。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入那座依然完好的主教堂内部，让眼睛适应昏暗后，抬头仰望高耸的肋拱穹顶，寻找石柱上可能残留的极简雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去探索教堂侧后方的修道院回廊遗址，沿着残存的基础走一圈，想象修士们当年在此默想散步的场景，现在这里长满了野花和青草。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午回到塔罗卡镇中心，在主广场旁的露天咖啡馆找把椅子坐下，点一杯bica（葡式浓缩咖啡），什么都不做，就看小镇居民如何度过他们的午后。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间还有富余，可以向当地人打听去附近某个家庭酒窖的路，品尝一杯用本地葡萄酿造的、在杜罗河地区都少有人知的淳朴红酒。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`乌卡尼亚桥河岸下游侧`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，站在河流下游的卵石滩上，利用水面倒影拍摄桥与塔楼的完整对称构图，前景可以带入一些河边的绿色植物。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`萨勒泽达斯主教堂内部穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午阳光最强时进入教堂，将相机放在地面向上仰拍，可以捕捉到阳光从高侧窗射入，在古老的肋骨拱顶上形成强烈明暗对比的几何光影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`修道院回廊的残垣与自然`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的斜阳时分，寻找一处爬满藤蔓或开出野花的残墙，用长焦镜头压缩空间，将生机勃勃的植物与沧桑的石墙并置，讲述时间的故事。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔罗卡小镇至高点俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`向镇子边缘地势较高的民居区散步，找到一个可以同时看到远处山峦、红色屋顶和某处教堂钟楼的视角，用广角镜头拍下这幅宁静的乡村全景图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地居民非常友善但注重隐私，拍摄人物（尤其是老人和孩子）前请务必用微笑和手势征得同意。在修道院遗址内部，避免使用闪光灯，以免破坏那份古老幽暗的氛围。多利用不同时段的光线，这里的风景在晨昏时分金色阳光下与正午强光下会呈现出截然不同的性格。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村家庭民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在乌卡尼亚桥附近由百年石屋改造的民宿，主人可能会在傍晚带你去看桥灯初上的风景，并分享祖辈关于这座桥的故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史庄园体验`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在塔罗卡周边葡萄园中的一处古老农庄改建的客栈，房间宽敞充满乡村古董家具，早餐的蜂蜜和果酱都产自庄园。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-yellow-800">{`住在雷古阿市区，那里有更多现代酒店和餐饮选择，第二天清晨再开车半小时进入塔罗卡山谷，适合追求性价比和便利性的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`深度沉浸选择`}</h4>
                  <p className="text-sm text-purple-800">{`通过本地平台租下萨勒泽达斯村庄里一栋完整的传统石屋，体验几日真正的乡村生活，自己烹饪，夜晚在绝对的寂静中看星空。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塔罗卡镇内住宿数量极少且非常原始，预订前确认好是否有Wi-Fi和现代卫浴设施。若选择住在雷古阿，治安良好，且夜晚可在杜罗河畔散步，享受更丰富的夜生活。旺季（夏季和葡萄收获季）建议至少提前一个月预订，尤其是那些特色庄园住宿。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开塔罗卡的路上，我的手里好像还留着石头微凉的触感，耳边似乎还有流水与风声的二重奏。这个地方没有给我任何可以炫耀的打卡成就，它给予的，更像是一次心灵的沉淀。在萨勒泽达斯的废墟前，我感受到了时间的绝对力量——它能将最宏伟的信仰殿堂还原为地基上的野草；而在乌卡尼亚桥边，我又看到了时间的相对性——那座桥依然坚固，依然连接着两岸的生活，孩子们的嬉闹声与几个世纪前骡马的铃铛声，在某种意义上重叠了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求高效和刺激的时代，塔罗卡像一处精神的逆流。它邀请你慢下来，不是去消费风景，而是去阅读理解一片土地。它告诉你，历史不全是宫殿和战场的宏大叙事，更多是修道院农田里的汗水，是桥头缴纳的几个铜板，是一个村庄日复一日的晨昏。这里适合那些已经厌倦了浮光掠影，渴望在旅行中与自己安静对话的人。它不会用惊艳的景象冲击你，但当你静心聆听，它的每一块石头、每一道水流，都在诉说着关于坚持、变迁与循环的古老智慧。来塔罗卡吧，不是为了收集一个地名，而是为了让自己成为那个故事的一部分，哪怕只是一个下午的逗号。在这里，你会明白，真正的深度，不在于你去过多少地方，而在于你曾多么深刻地“在”过一个地方。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/convento-dos-capuchos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡普舒斯修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convento dos Capuchos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sao-vicente-cliff-fortress-red-brick-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣维森特悬崖堡垒与红砖老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sao Vicente Cliff Fortress & Red-Brick Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/piodao-portugal-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮奥当</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piódão</p>
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
