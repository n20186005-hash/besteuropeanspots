import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米拉韦特 Miravet｜峭壁上的时光琥珀，探秘圣殿骑士团的河畔要塞 - 最佳欧洲景点',
  description: '你第一眼看到米拉韦特，多半会是在蜿蜒的公路某个拐角。猝不及防地，那座庞大的赭石色城堡，连同它脚下像瀑布一样倾泻而下的密集房屋，就撞进了你的视野。它不像很多欧洲城堡那样孤傲地矗立在平地上，而是死死地“咬”在一面近乎垂直的悬崖上，仿佛已经和岩石生长了千年。埃布罗河在这里画出一个饱满的“Ω”形大拐弯，河水',
}

export default function MiravetVillageCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '加泰罗尼亚地区，埃布罗河畔', href: '/destinations/europe' },
            { label: '米拉韦特', href: '/attractions/miravet-village-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米拉韦特・Miravet・西班牙・加泰罗尼亚地区，埃布罗河畔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到米拉韦特，多半会是在蜿蜒的公路某个拐角。猝不及防地，那座庞大的赭石色城堡，连同它脚下像瀑布一样倾泻而下的密集房屋，就撞进了你的视野。它不像很多欧洲城堡那样孤傲地矗立在平地上，而是死死地“咬”在一面近乎垂直的悬崖上，仿佛已经和岩石生长了千年。埃布罗河在这里画出一个饱满的“Ω”形大拐弯，河水在正午的阳光下泛着慵懒的银光，不急不徐地环绕着这座山丘，像一条温柔的巨蟒守护着它的宝藏。那种视觉冲击是压倒性的，你瞬间就理解了为什么古代的战略家会选中这里——它本身就是一道天然的命令，俯瞰并掌控着整片河谷的生命线。
把车停在河对岸，坐上那艘仅能容纳几辆车的老式摆渡船过河，是进入米拉韦特最具有仪式感的方式。柴油发动机发出突突的声响，河风带着湿润的水汽和淡淡的鱼腥味拂过脸颊。随着船缓缓靠近，村庄的细节开始在眼前放大：层层叠叠的陶土瓦屋顶，被阳光晒得发白的石头墙壁，窗户上鲜艳的天竺葵在微风中摇曳。上岸后，穿过一道小小的石拱门，你就正式进入了时间的褶皱。脚下的石板路被几个世纪的人来人往磨得光滑如镜，缝隙里长出茸茸的青苔。空气瞬间变得幽静而凉爽，混合着老房子里飘出的炖菜香味、晾晒衣物的肥皂味，还有不知从哪户人家窗台飘来的咖啡香。
这里的生活节奏，是跟着阳光和阴影的移动来计算的。当地的老人会搬着小椅子坐在自家窄窄的门洞前，用加泰罗尼亚语低声闲聊，目光温和地掠过每一个好奇的游客。猫咪在阳光下伸着懒腰，尾巴轻轻扫过冰凉的石阶。你沿着陡峭的、仅容一人通过的“之”字形小巷向上攀爬，手不时会触碰到旁边房屋粗糙而温暖的墙壁。抬头看，天空被两侧的屋檐切割成一条窄窄的、流动的蓝色缎带。你不是在参观一个景点，你是在走入一个仍然在呼吸、在心跳的古老机体，它的每一块石头都浸润着日常生活的烟火气。
而当你终于气喘吁吁地爬到顶端，穿过城堡那道威严的拱门，所有的市井喧嚣骤然被隔绝在身后。城堡内部是另一个世界——巨大、空旷、充满了石头与风的声音。站在城墙边缘，整个世界在你脚下铺开。埃布罗河如同一条闪亮的丝带，将翠绿的农田、远处的群山和更渺小的村庄温柔地串联起来。那一刻，你才能完全体会“要塞”二字的全部重量。它不仅仅是防御工事，它是一种视角，一种绝对的控制与孤独。风在这里毫无阻拦地呼啸而过，带来了远方松林的气息和历史的回响，仿佛能听见圣殿骑士们的铠甲摩擦声，和摩尔士兵远眺故乡的叹息。这份震撼，是任何照片都无法传递的，它需要你亲自用双脚去丈量，用呼吸去感受。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你第一眼看到米拉韦特，多半会是在蜿蜒的公路某个拐角。猝不及防地，那座庞大的赭石色城堡，连同它脚下像瀑布一样倾泻而下的密集房屋，就撞进了你的视野。它不像很多欧洲城堡那样孤傲地矗立在平地上，而是死死地“咬”在一面近乎垂直的悬崖上，仿佛已经和岩石生长了千年。埃布罗河在这里画出一个饱满的“Ω”形大拐弯，河水在正午的阳光下泛着慵懒的银光，不急不徐地环绕着这座山丘，像一条温柔的巨蟒守护着它的宝藏。那种视觉冲击是压倒性的，你瞬间就理解了为什么古代的战略家会选中这里——它本身就是一道天然的命令，俯瞰并掌控着整片河谷的生命线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在河对岸，坐上那艘仅能容纳几辆车的老式摆渡船过河，是进入米拉韦特最具有仪式感的方式。柴油发动机发出突突的声响，河风带着湿润的水汽和淡淡的鱼腥味拂过脸颊。随着船缓缓靠近，村庄的细节开始在眼前放大：层层叠叠的陶土瓦屋顶，被阳光晒得发白的石头墙壁，窗户上鲜艳的天竺葵在微风中摇曳。上岸后，穿过一道小小的石拱门，你就正式进入了时间的褶皱。脚下的石板路被几个世纪的人来人往磨得光滑如镜，缝隙里长出茸茸的青苔。空气瞬间变得幽静而凉爽，混合着老房子里飘出的炖菜香味、晾晒衣物的肥皂味，还有不知从哪户人家窗台飘来的咖啡香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的生活节奏，是跟着阳光和阴影的移动来计算的。当地的老人会搬着小椅子坐在自家窄窄的门洞前，用加泰罗尼亚语低声闲聊，目光温和地掠过每一个好奇的游客。猫咪在阳光下伸着懒腰，尾巴轻轻扫过冰凉的石阶。你沿着陡峭的、仅容一人通过的“之”字形小巷向上攀爬，手不时会触碰到旁边房屋粗糙而温暖的墙壁。抬头看，天空被两侧的屋檐切割成一条窄窄的、流动的蓝色缎带。你不是在参观一个景点，你是在走入一个仍然在呼吸、在心跳的古老机体，它的每一块石头都浸润着日常生活的烟火气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你终于气喘吁吁地爬到顶端，穿过城堡那道威严的拱门，所有的市井喧嚣骤然被隔绝在身后。城堡内部是另一个世界——巨大、空旷、充满了石头与风的声音。站在城墙边缘，整个世界在你脚下铺开。埃布罗河如同一条闪亮的丝带，将翠绿的农田、远处的群山和更渺小的村庄温柔地串联起来。那一刻，你才能完全体会“要塞”二字的全部重量。它不仅仅是防御工事，它是一种视角，一种绝对的控制与孤独。风在这里毫无阻拦地呼啸而过，带来了远方松林的气息和历史的回响，仿佛能听见圣殿骑士们的铠甲摩擦声，和摩尔士兵远眺故乡的叹息。这份震撼，是任何照片都无法传递的，它需要你亲自用双脚去丈量，用呼吸去感受。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米拉韦特`} />
                <InfoRow label="英文名称" value={`Miravet`} />
                <InfoRow label="正式名称" value={`Miravet`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`加泰罗尼亚地区，埃布罗河畔`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在西班牙收复失地运动中扮演关键角色的战略要塞，先后由摩尔人和圣殿骑士团掌控，是伊比利亚半岛上基督教与伊斯兰文明数个世纪碰撞与交融的鲜活见证。`} />
                <InfoRow label="建筑特色" value={`一座与陡峭悬崖和下方奔腾的埃布罗河完全融为一体的巨型城堡，其防御工事仿佛是直接从赭色岩石中生长出来的，气势磅礴。`} />
                <InfoRow label="建筑风格" value={`以坚固厚重的罗马式军事建筑为主体，融合了后期哥特式的部分修缮元素，体现了从伊斯兰防御工事到基督教城堡的过渡风格。`} />
                <InfoRow label="文化价值" value={`它不仅是军事遗迹，更是加泰罗尼亚乡村生活与历史层叠的活化石，展现了人类在极端地理环境中建造与生存的惊人智慧。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡开放时间随季节变化：通常夏季（4月至9月）为周一闭馆，周二至周日 10:00 - 20:00；冬季（10月至3月）为周一闭馆，周二至周日 10:00 - 17:30。具体日期可能因节假日调整，建议出发前在加泰罗尼亚政府文化遗址官网复核。村庄本身全天可自由漫步。`} />
              <InfoRow label="门票价格" value={`城堡参观门票：全票5欧元；优惠票（学生、65岁以上长者）3欧元；12岁以下儿童免费。提供加泰罗尼亚语、西班牙语和英语的导览手册。通常无需预约，但旺季（夏季周末）可能排队，现场购票即可。暂无官方在线预订系统。`} />
              <InfoRow label="地址" value={`Camí del Castell, s/n, 43747 Miravet, Tarragona, Spain`} />
              <InfoRow label="交通方式" value={`从巴塞罗那出发最为常见：在巴塞罗那桑兹火车站（Barcelona Sants）乘坐R14或R15等区域火车前往莫拉-拉诺瓦（Móra la Nova）站，车程约1小时45分钟，班次每小时约1-2班，建议使用Renfe官网或App购票。抵达后，火车站外有出租车等候（车程约15分钟直达村庄），或可步行至河边搭乘历史悠久的摆渡船（季节性运营，约10分钟船程）渡过埃布罗河抵达米拉韦特村脚下。自驾是最灵活的方式，从巴塞罗那沿AP-7和C-12公路前往，约2小时车程，村庄入口处有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米拉韦特的故事，是一部用石头、鲜血和信仰写成的史诗，而它的开篇，远比基督教骑士的到来要早得多。早在公元8世纪，当摩尔人的军队如潮水般涌过直布罗陀海峡，征服了伊比利亚半岛的大片土地时，他们敏锐的目光就锁定了埃布罗河上这个天造地设的拐点。最初，他们在这里修建的可能只是一个瞭望塔或小型堡垒，用于控制这条黄金水道，并向北震慑那些尚未臣服的基督教王国。可以想象，第一批驻守在这里的北非士兵，望着脚下奔流的大河和北方未知的山峦，心中交织着征服者的豪情与思乡的愁绪。在伊斯兰统治的数百年里，这个据点被不断加固，慢慢成形，它脚下的村庄也开始孕育，穆斯林农民在肥沃的河谷里耕种，唤礼声曾一度在这片悬崖上回荡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的转折点发生在12世纪。随着基督教王国势力的南推，收复失地运动进入了白热化阶段。1153年，一个决定米拉韦特命运的名字出现了——圣殿骑士团。这个当时欧洲最富有、最强大的军事修会，从巴塞罗那伯爵拉蒙·贝伦格尔四世手中接过了这座刚刚从摩尔人手中夺取的要塞。对于骑士团来说，这简直是天赐的礼物。它位于基督教王国与穆斯林领地的前沿，易守难攻，既能作为进攻的跳板，又是绝佳的防守堡垒。更重要的是，它控制了埃布罗河的航运，这意味着也控制了巨大的经济利益。圣殿骑士们不是简单的占领者，他们是天才的改造者。他们投入巨资，以令人惊叹的工程学智慧，在原有穆斯林堡垒的基础上，建造了我们今天看到的这座庞大而复杂的罗马式城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "接下来的一个多世纪，是米拉韦特作为圣殿骑士团要塞的黄金时代。骑士们将这里建设成了一个几乎自给自足的微型王国。城堡内部有宏伟的骑士大厅、储存粮食的巨大筒仓、精心设计的蓄水池、以及守卫森严的教堂。他们不仅管理着城堡，还统治着山脚下整个村庄和广阔的农田，将这里打造成一个强大的封建领地。来自欧洲各地的朝圣者和商人沿着埃布罗河往来，米拉韦特是他们旅途中的重要一站，也为骑士团带来了丰厚的收入和情报。城堡里回荡着拉丁语的祈祷声、武器的锻造声，以及来自法兰西、英格兰、阿拉贡不同口音骑士的交谈声，它成了一个文化交汇的奇特岛屿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，盛极而衰是历史的铁律。14世纪初，法国国王腓力四世出于政治和财务上的贪婪，对圣殿骑士团发动了残酷的清洗。1307年，远在巴黎的噩耗也传到了这片偏远的悬崖。加泰罗尼亚的圣殿骑士们或许比他们在法国的兄弟多坚持了一段时间，但终究无法抵挡历史的洪流。骑士团的财产被没收，米拉韦特城堡也被转交给了另一个军事修会——医院骑士团。虽然易主，但城堡的军事功能依然延续。它又经历了数不清的围城与战火，包括1640年的加泰罗尼亚起义和19世纪初惨烈的半岛战争。每一次战争都在它的石墙上留下新的伤疤，也一次次证明着它无可替代的战略价值。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当火炮的射程最终超越了城墙的高度，米拉韦特作为军事要塞的使命才真正走向终结。它逐渐被遗忘，在风吹雨打中慢慢荒芜，成为了牧羊人避雨和孩子们探险的废墟。直到20世纪，人们才开始重新认识到它的历史与文化价值，开始了缓慢而谨慎的修复工作。今天，当我们触摸那些冰凉的墙砖时，指尖划过的是摩尔工匠的刻痕、圣殿骑士的标记、以及近代战争留下的弹孔。它不再发出战争的咆哮，而是以一种沉静而雄浑的语调，向每一个来访者讲述着关于权力、信仰、生存与时光的，漫长而复杂的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受米拉韦特的灵魂，强烈建议你留出一整天的时间，并抱着“沉浸”而非“打卡”的心态。最佳抵达时间是上午九点前，此时旅行团尚未涌入，阳光正好温柔地照亮河对岸的城堡立面，是拍照和体验宁静村庄的黄金时刻。整体的节奏应该是“由外至内，由下至上”。先从河对岸的宏观视角开始，乘摆渡船过河，让自己慢慢“进入”画中。然后花上两到三个小时，放任自己在迷宫般的村庄小巷里迷路，感受它的日常生活。将正午最热的时候留给城堡的室内参观，那里阴凉通风。最后，在傍晚时分登上城堡最高处，等待日落将埃布罗河染成金色，为这一天画上最壮丽的句号。这样的安排，让你既能捕捉到最美的光线，又能避开人流高峰，更重要的是，你的身体和情绪能有一个从平缓到震撼的完整过渡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`村庄里的许多小巷台阶非常陡峭且光滑，务必穿一双抓地力强的舒适徒步鞋或运动鞋，高跟鞋在这里寸步难行。
夏季西班牙正午阳光极其炽烈，城堡顶端毫无遮挡，务必携带充足饮用水、防晒霜和帽子，参观城堡室内部分是最佳的避暑时段。
村庄内餐馆不多且关门较早（西班牙晚餐时间很晚，但这里不是大城市），如果计划傍晚离开，最好提前在村里的餐厅解决午餐或确认晚餐供应。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一早从河对岸的停车场出发，搭乘那艘充满怀旧气息的木质摆渡船，在发动机的突突声中缓缓渡河，让城堡的全景像一幅徐徐展开的画卷向你逼近。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从码头沿着清晰的指示牌，穿过低矮的城门，立刻右拐钻进第一条狭窄的上坡小巷，让自己瞬间淹没在由石头房屋构成的静谧迷宫里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不用看地图，任凭感觉带领你在交错的小巷中穿行，时不时停下来摸摸阳光晒暖的墙壁，或者从某扇敞开的门里窥见一个摆满盆栽的温馨庭院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`努力寻找并登上村庄主广场，那里有几家小小的咖啡馆和餐厅，挑一个露天座位，点一杯浓咖啡和地道的加泰罗尼亚番茄面包，静静观察当地人的晨间社交。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`补充能量后，沿着从广场后方清晰上行的“Camí del Castell”路标，开始最后也是最具挑战性的一段攀登，脚下是粗糙的原始石阶，两侧是愈发荒凉的山岩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达城堡入口的售票处，买票后不要急于进入，先在门外的平台上回望，你会看到整个村庄像一幅精心拼贴的马赛克，严丝合缝地铺展在悬崖之上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入城堡后，先别直奔最高点，而是按照导览图的顺序，细细探索骑士大厅、拱顶仓库、蓄水池和圣玛丽亚小教堂，用手电筒（或手机闪光灯）照亮那些幽暗角落的古老石刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，沿着狭窄的螺旋楼梯爬上城堡的屋顶露台或主塔楼，找一个面向埃布罗河大拐弯的角落坐下，什么也不做，只是感受风，看云影在广阔的山谷间移动，等待日落时分。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河对岸公路观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，光线最为柔和，使用长焦镜头可以压缩空间，将城堡、村庄、河流与远山完美压缩在同一画面中，构图时让河流的弧线引导视线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`村庄内部“明信片角度”`}</h4>
                  <p className="text-sm text-gray-700">{`从位于半山腰的圣马丁教堂附近，有一条小巷的拐角能框住远处高耸的城堡主塔，用两侧古朴的石屋作为自然画框，午后侧光能让石头的质感淋漓尽致。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡入口拱门剪影`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光从西侧射入城堡入口通道，让人物站在拱门外侧形成剪影，以门洞内幽深的庭院和远处的河谷风光为背景，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡屋顶西南角`}</h4>
                  <p className="text-sm text-gray-700">{`日落黄金时刻，这里是拍摄埃布罗河“Ω”形大拐弯的绝佳位置，将蜿蜒的河流作为视觉中心，前景可以利用古老的雉堞或石墙增加层次和年代感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`村庄底层河畔回望`}</h4>
                  <p className="text-sm text-gray-700">{`清晨乘船离开前，站在码头上回拍被晨雾或炊烟笼罩的村庄全景，此时光线清冷，能拍出如同中世纪水彩画般的朦胧与宁静之美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在城堡内部拍摄时，许多厅室光线非常暗，建议使用大光圈镜头或提高ISO，利用三脚架长时间曝光时需注意是否被允许，并绝对避免使用闪光灯破坏古迹氛围。`}</li>
                <li>• {`拍摄当地居民和他们的私人空间（如庭院）时，务必先微笑示意并征得同意，加泰罗尼亚人通常友好，但未经允许的近距离拍摄被视为不礼貌。`}</li>
                <li>• {`无人机飞行在城堡和村庄上空有严格限制，很可能完全禁止，放飞前务必查阅当地最新法规并尊重居民隐私，切勿擅飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔老宅改造民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择一间位于村庄底层、由古老石屋改造的民宿，主人可能是一位老奶奶，她会为你准备自家果园的橘子，晚上枕着埃布罗河轻柔的水流声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`半山腰设计师公寓`}</h4>
                  <p className="text-sm text-green-800">{`租住一套位于村庄中段、拥有私人露台的现代公寓，露台上通常配有舒适的躺椅，白天可以俯瞰红色屋顶的波浪，夜晚则独享一片毫无光污染的璀璨星空。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城堡脚下的历史小旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`入住村里唯一那家由历史建筑改建的小旅馆，房间保留了原始的石墙和木梁，早餐是地道的乡村风味，出门拐个弯就直接开始攀登城堡的征程。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`对岸田园农庄体验`}</h4>
                  <p className="text-sm text-purple-800">{`如果不介意每日乘船进出，河对岸有被橄榄树和杏树环绕的乡村农庄，提供宽敞的房间和家庭式晚餐，享受绝对的宁静，同时拥有拍摄城堡全景的最佳视野。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米拉韦特的住宿选择非常有限，总共可能只有十几间客房，因此在旅游旺季（春、秋及夏季周末）必须提前数月预订，临时寻找几乎不可能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住在村庄里意味着要提着行李爬陡峭的台阶，预订时务必确认酒店或民宿的具体位置，并做好相应的心理和体力准备，许多地方车辆无法直达门口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的夜晚极其安静，除了偶尔的狗吠和风声，几乎没有其他噪音，是真正远离喧嚣的所在，但也意味着夜间几乎没有娱乐活动，请享受这份珍贵的静谧。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开米拉韦特许久之后，那个景象还会不时在脑海中浮现：不是城堡多么雄伟，而是在某个不知名的小巷拐角，看到一位白发老妪，正颤巍巍地踮起脚，为她窗台上的天竺葵浇水。鲜红的花朵、粗糙的石墙、她布满皱纹却无比专注的侧脸，与头顶上方巨大城堡的阴影，共同构成了一幅无比和谐的画面。那一刻我突然明白，米拉韦特最动人的，不是它的战略地位或建筑奇迹，而是这种极致反差下的生命韧性。一边是象征着绝对权力、冲突与宏观历史的庞然巨物，一边是日复一日、具体而微的平凡生活。它们竟能如此紧密地依存了上千年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、一切都被加速和扁平化的时代，米拉韦特像一个固执的“减速带”。它强迫你慢下来，用双脚去攀登，用喘息去体验高度，用时间去等待一趟慢船。这里没有便捷的缆车，没有喧闹的纪念品商店，甚至没有一块过分显眼的指示牌。它给你的，只有石头、河流、阳光和历史沉默的重量。正是在这种“不便利”中，旅行恢复了它原本的意义——不是消费一个景观，而是与一个地方进行一场深度的、身体力行的对话。你会记得攀爬时膝盖的酸胀，记得指尖触摸千年墙体的冰凉触感，记得登顶后那股混合着成就与渺小的复杂情绪。这些感受，是任何便捷的观光都无法赋予的。所以，如果你厌倦了浮光掠影，渴望一次真正能沉入历史肌理、触摸时光质感的旅程，那么，请来米拉韦特。它不会取悦你，但会深刻地改变你观看世界的方式。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/caceres-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡塞雷斯老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cáceres Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/santillana-del-mar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    桑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">桑蒂利亚纳德尔马尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Santillana del Mar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/montblanc-medieval-walled-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙特布兰克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Montblanc</p>
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
