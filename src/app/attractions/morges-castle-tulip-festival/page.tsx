import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫尔日 Morges｜日内瓦湖畔的郁金香与赫本长眠地 - 低调浪漫的瑞士明珠',
  description: '想象一下，当你从略显喧嚣的日内瓦坐上火车，不到半小时，窗外的风景就切换成了一片温柔的蓝。那就是莱芒湖，或者我们更习惯叫她日内瓦湖。火车缓缓停下，走出莫尔日站台，第一口呼吸到的空气是清冽的，带着湖水特有的、微甜的湿润气息，以及从远处山坡葡萄园飘来的、若有似无的植物清香。这里没有大城市的迫切感，时间仿佛',
}

export default function MorgesCastleTulipFestivalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '莫尔日', href: '/attractions/morges-castle-tulip-festival' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫尔日・Morges・瑞士・莫尔日`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，当你从略显喧嚣的日内瓦坐上火车，不到半小时，窗外的风景就切换成了一片温柔的蓝。那就是莱芒湖，或者我们更习惯叫她日内瓦湖。火车缓缓停下，走出莫尔日站台，第一口呼吸到的空气是清冽的，带着湖水特有的、微甜的湿润气息，以及从远处山坡葡萄园飘来的、若有似无的植物清香。这里没有大城市的迫切感，时间仿佛被湖面的风吹得慢了下来。
穿过几条安静整洁的街道，那座有着深灰色石墙和红色瓦顶的方形城堡，就这么静静地矗立在湖畔。它不像新天鹅堡那样梦幻张扬，也不像西庸城堡那样险峻孤傲，它敦实、谦和，仿佛生来就是这湖畔风景的一部分。你会发现，城堡前的长椅上总坐着看报的老人，岸边栈桥上停满了随着水波轻轻摇晃的私人小游艇，天鹅和野鸭毫不怕人地游弋。这里不是纯粹的旅游景点，而是当地人生活的延伸——一个巨大的、美丽的后花园。
而莫尔日的灵魂，有两重最动人的色彩。一重是每年四月到五月初，在独立公园绽放的、超过300个品种30万株郁金香汇成的浩瀚花海。那不仅仅是一场视觉的爆炸，当你走入其中，斑斓的色彩几乎要淹没你，空气里是混合着泥土与花蜜的馥郁芬芳，耳边是蜜蜂的嗡嗡声和孩子们惊喜的欢叫。另一重色彩，则是永恒的优雅与宁静。在距小镇几分钟车程的托洛什纳兹村，奥黛丽·赫本长眠在一片普通的、开满鲜花的墓园里。这里没有夸张的纪念，只有慕名而来的旅人放下的一支白色玫瑰，和永恒的湖光山色相伴。这种低调的深情，正是莫尔日的气质。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想象一下，当你从略显喧嚣的日内瓦坐上火车，不到半小时，窗外的风景就切换成了一片温柔的蓝。那就是莱芒湖，或者我们更习惯叫她日内瓦湖。火车缓缓停下，走出莫尔日站台，第一口呼吸到的空气是清冽的，带着湖水特有的、微甜的湿润气息，以及从远处山坡葡萄园飘来的、若有似无的植物清香。这里没有大城市的迫切感，时间仿佛被湖面的风吹得慢了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过几条安静整洁的街道，那座有着深灰色石墙和红色瓦顶的方形城堡，就这么静静地矗立在湖畔。它不像新天鹅堡那样梦幻张扬，也不像西庸城堡那样险峻孤傲，它敦实、谦和，仿佛生来就是这湖畔风景的一部分。你会发现，城堡前的长椅上总坐着看报的老人，岸边栈桥上停满了随着水波轻轻摇晃的私人小游艇，天鹅和野鸭毫不怕人地游弋。这里不是纯粹的旅游景点，而是当地人生活的延伸——一个巨大的、美丽的后花园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而莫尔日的灵魂，有两重最动人的色彩。一重是每年四月到五月初，在独立公园绽放的、超过300个品种30万株郁金香汇成的浩瀚花海。那不仅仅是一场视觉的爆炸，当你走入其中，斑斓的色彩几乎要淹没你，空气里是混合着泥土与花蜜的馥郁芬芳，耳边是蜜蜂的嗡嗡声和孩子们惊喜的欢叫。另一重色彩，则是永恒的优雅与宁静。在距小镇几分钟车程的托洛什纳兹村，奥黛丽·赫本长眠在一片普通的、开满鲜花的墓园里。这里没有夸张的纪念，只有慕名而来的旅人放下的一支白色玫瑰，和永恒的湖光山色相伴。这种低调的深情，正是莫尔日的气质。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫尔日`} />
                <InfoRow label="英文名称" value={`Morges`} />
                <InfoRow label="正式名称" value={`Morges`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`莫尔日`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座始建于13世纪的湖畔要塞城堡，历经从军事堡垒到地区权力中心，再到如今融合了四个军事博物馆的文化地标的华丽转身，见证了沃州从萨伏伊统治到伯尔尼治下，再到融入现代瑞士联邦的完整历史脉络。`} />
                <InfoRow label="建筑特色" value={`一座典型的方形布局中世纪湖畔城堡，拥有厚实的城墙、四个角塔和一个中央庭院，外观庄严质朴，内部空间现已被改造为充满历史感的博物馆群。`} />
                <InfoRow label="建筑风格" value={`以中世纪军事防御建筑风格为基底，融合了后续多个时期的修缮与改造元素，整体呈现出古朴、坚固的萨伏伊时期城堡特征。`} />
                <InfoRow label="文化价值" value={`它不仅是瑞士保存完好的中世纪军事建筑范本，更因其每年春季举世闻名的郁金香节，以及作为一代银幕传奇奥黛丽·赫本长眠之地的宁静氛围，成为了融合历史、自然美学与人文追忆的独特文化符号。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`莫尔日城堡博物馆开放时间通常为周二至周日，上午10:00至下午5:00，周一闭馆（节假日除外）。城堡公园全年24小时开放。每年的郁金香节（四月至五月初）期间，独立公园全天开放。具体开放时间可能随季节调整，冬季（11月至次年3月）部分设施的开放时间可能缩短，建议出行前查询官网最新公告。`} />
              <InfoRow label="门票价格" value={`莫尔日城堡博物馆门票约为成人10瑞士法郎，学生及老年人8瑞士法郎，16岁以下儿童免费。持有瑞士旅行通票（Swiss Travel Pass）可享受免费或折扣入园。郁金香节期间进入独立公园（Parc de l’Indépendance）免费。小镇本身无需门票，可自由漫步。`} />
              <InfoRow label="地址" value={`Château de Morges, Rue du Château 2, 1110 Morges, Switzerland`} />
              <InfoRow label="交通方式" value={`从日内瓦国际机场出发最为便捷。在机场火车站（Genève-Aéroport）乘坐开往洛桑方向的火车（SBB），约25-30分钟即可直达莫尔日火车站（Gare de Morges），班次非常频繁，通常每10-20分钟一班。从火车站步行至湖畔和城堡区仅需8-10分钟。小镇内所有景点均可轻松步行到达，租一辆自行车环湖游览也是绝佳选择。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫尔日的故事，是从一片战略要地和一纸建筑许可开始的。时间倒回1286年，当时的莫尔日地区统治者，来自萨伏伊家族的路易斯一世伯爵，看中了莱芒湖这片突出的岬角。这里既能控制湖上航道，又能扼守陆路交通，是个设立要塞的绝佳位置。他大笔一挥，批准在此修建一座城堡。于是，工人们运来了当地的石材，按照当时最经典的军事防御理念，建起了一座方方正正、带有四个坚固角塔的堡垒。最初的莫尔日城堡，纯粹是为了驻军和威慑，厚实的墙壁上开的是狭小的箭窗，它面向湖水和陆地的一面，都带着冷峻的审视目光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在接下来的几个世纪里，这座城堡就像一块磁石，吸引着权力的更迭与战争的洗礼。它先是作为萨伏伊家族在沃州地区的重要据点，后来在1536年，随着伯尔尼人征服沃州，城堡顶上的旗帜换成了伯尔尼的熊旗。新主人赋予了它更多行政和司法功能，城堡内部的厅堂被改造得更适合居住和办公，但它军事堡垒的底色从未褪去。18世纪末，法国大革命的风暴也席卷了这里，城堡一度被用作军火库和监狱，那些厚重的石墙曾回荡过不同的呐喊与寂静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正让它卸下铠甲、换上文化新装的，是和平的现代时光。进入20世纪，城堡不再需要肩负防御职责。一个充满远见的决定改变了它的命运：将它改造为博物馆。而且不是一个，是四个独具特色的军事博物馆！瑞士联邦博物馆、炮兵博物馆、步兵博物馆和宪兵博物馆相继入驻。走进那些曾经是储藏室或兵营的房间，你会看到从中世纪的铠甲、火绳枪，到近代精美的军服、勋章，历史以另一种充满细节的方式被陈列和诉说。城堡的庭院里甚至摆放着几门古老的青铜火炮，它们不再指向敌人，而是对着蓝天白云，成为孩子们好奇触摸的对象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与城堡的“硬历史”并行不悖的，是小镇孕育出的“软传统”——郁金香节。这个传统的起源颇为浪漫。上世纪60年代，一位本地园丁出于对郁金香的热爱，开始在独立公园大量种植。年复一年，绚烂的花海吸引了越来越多的人，最终演变成今天欧洲最重要的郁金香盛会之一。每年春天，全球的郁金香爱好者汇聚于此，这座曾经只听得到军队脚步声的城堡，被数百万朵鲜花的色彩与香气温柔包围。从战争到鲜花，从权力到美，莫尔日完成了它最诗意、也最深刻的历史叙事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间来沉浸式体验莫尔日。最好在上午九点左右抵达，这时晨雾初散，湖光清澈，游人尚少。整体节奏应放得非常缓慢，以湖畔漫步和感受小镇生活气息为主，穿插城堡的历史探索与春季的花海沉醉。上午先探索城堡及周边，下午沉浸在公园花海或进行一次宁静的追忆之旅，傍晚则在湖边享用晚餐，看日落染红湖面和远处的雪山峰顶。这样的安排能让你充分领略这座小镇从晨至昏的不同魅力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`郁金香节期间（尤其是四月下旬的周末）人会非常多，建议尽可能平日前往，清晨或傍晚是拍摄花海和人像的最佳时段，光线柔和且游客较少。参观赫本墓地时请务必保持肃静和尊重，这是一个宁静的居民墓地，不要大声喧哗或长时间停留影响他人。小镇路面多为石板路，建议穿一双舒适好走的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一站径直走向湖畔的莫尔日城堡，用手触摸那被湖水湿气浸润了数百年的冰凉石墙，感受从军事要塞到博物馆的时空交错。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进城堡内部依次参观四个军事博物馆，尤其留意那些展示着精致徽章和古老火器的玻璃柜，想象它们曾经的主人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡侧门出来，沿着被古老梧桐树遮蔽的湖滨步道缓缓散步，看天鹅在湛蓝的湖水中划出优雅的涟漪，对面法国境内的阿尔卑斯山轮廓清晰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果正值春季，毫不犹豫地步入独立公园那无边无际的郁金香花田，让自己迷失在按照色彩精心排列的、如彩虹绸缎般的花垄之间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻访小镇老城区那些用拉沃地区石材建造的优雅拱廊街道，在面包店买一个刚出炉的黄油牛角包，体验最地道的瑞士小镇晨间滋味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`安排一小段时间，乘坐81路巴士前往宁静的托洛什纳兹村庄，在简单朴素的墓园中寻找那块刻着“Audrey Hepburn”的白色十字墓碑，安静地献上一份敬意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分回到莫尔日码头，找一家湖畔餐厅的露天座位，点一份新鲜捕捞的湖鱼（Féra），配上一杯本地产的沙斯拉白葡萄酒，等待夕阳上演每日的辉煌谢幕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`若有余力且天色尚佳，租一艘划艇或脚踏船，从水上的角度回望城堡和小镇星星点点的灯火，感受日内瓦湖最为宁静私密的一面。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡湖畔侧全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`站在城堡东南侧的湖畔步道上，以广阔的湖面和远处的雪山为背景拍摄城堡全景，最佳光线在日出后一小时或日落前一小时，金色阳光会为石墙镀上温暖色泽。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`郁金香花海俯拍角度`}</h4>
                  <p className="text-sm text-gray-700">{`在独立公园内寻找那个微微隆起的小山坡，站在坡顶向下拍摄，可以将如织锦般不同色块的郁金香花田与后方蔚蓝的日内瓦湖一同纳入画面，最佳时间是光线均匀的上午十点前。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城拱廊街景深`}</h4>
                  <p className="text-sm text-gray-700">{`钻进Rue Louis-de-Savoie这条主要的拱廊商业街，利用街道自然的透视和拱廊形成的框架，拍摄远处尽头透出亮光的场景，阴天时光线柔和，更能拍出石材质感和历史氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`赫本墓碑静物特写`}</h4>
                  <p className="text-sm text-gray-700">{`在托洛什纳兹墓园，聚焦于朴素的白色十字墓碑和前来吊唁的人们放置的鲜花，采用大光圈虚化背景的绿树，营造出安静、私密而充满敬意的氛围，请勿使用闪光灯。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`码头游艇与落日`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分在莫尔日游艇码头，以桅杆林立的游艇作为前景，拍摄湖面上正在沉入阿尔卑斯山后的巨大火红落日，湖面会变成金色的道路。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`瑞士人对隐私非常看重，拍摄当地居民（尤其是特写）前最好先微笑示意并获得同意。使用无人机拍摄前，务必查清当地法规，居民区、墓园和节庆人群上空通常禁飞。春季多雨，为相机准备好防水设备，潮湿的湖边空气可能对器材有影响。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔精品之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落于莫尔日码头旁的精品酒店，房间配有面向湖泊的落地窗或私人阳台，清晨在枕边就能看见天鹅游过，晚上听着轻柔的波浪声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史中心民宿`}</h4>
                  <p className="text-sm text-green-800">{`由一栋18世纪老房子改造的家庭式民宿，位于宁静的老城街道，女主人会为你准备丰盛的本地早餐，包括自制果酱和新鲜烘焙的面包，充满家的温暖。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`葡萄园山居体验`}</h4>
                  <p className="text-sm text-yellow-800">{`位于莫尔日后方拉科特山坡上的乡村旅馆，被郁郁葱葱的葡萄园环绕，每个房间都拥有俯瞰整个湖泊和阿尔卑斯山的无敌视野，是享受静谧与美景的绝佳选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`火车站旁便捷酒店`}</h4>
                  <p className="text-sm text-purple-800">{`对于需要赶早班火车或预算有限的旅行者，车站对面就有现代而舒适的连锁酒店，交通极其便利，设施齐全，是高效的出行基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（尤其是郁金香节期间和夏季）务必提前数月预订，湖畔和中心区的住宿非常抢手。选择山坡上的住宿意味着需要乘坐一小段巴士或出租车上下，但换来的视野绝对超值。莫尔日治安极好，但无论住在哪里，夜晚湖边散步都请带上一件薄外套，湖风会凉。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开莫尔日的时候，我口袋里装了几颗从湖畔捡来的光滑鹅卵石，指尖似乎还残留着城堡石墙的微凉触感，脑海里是郁金香色彩的漩涡和赫本墓碑前那束白玫瑰的清晰影像。这个地方教会我的，是一种“深水静流”般的生活美学。它不争不抢，不把自己厚重的历史挂在嘴边炫耀，也不因名人的青睐而变得喧闹。它只是在那里，春天准时绽放花海，每日按时映照湖光，用最从容的姿态接纳着过往与当下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率和刺激的世界里，莫尔日像一处心灵的减速带。它让我们记起，旅行的意义有时不在于收集了多少地标，而在于你是否曾真正地“停留”过——停留到足以看清一朵郁金香花瓣上的露珠，停留到能分辨出湖面在不同时辰光线下变幻的蓝色，停留到内心足以升起对一段优雅人生、或对一个时代变迁的静静思索。为什么赫本会选择长眠于此？我想，答案就藏在湖边散步的老人安详的面容里，藏在集市上摊主不紧不慢摆放水果的动作里，藏在那种被湖山环抱的、确凿无疑的宁静之中。对于每一位渴望在旅程中遇见宁静、美好与深邃时光的旅人来说，莫尔日不是一个站点，它是一个值得你交付一整天、甚至更多时间，去细细品味的句点。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/solothurn" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    索
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">索洛图恩</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Solothurn</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/soglio" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    索
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">索格里奥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Soglio</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rolle-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗尔城堡（罗尔镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Rolle (Town of Rolle)</p>
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
