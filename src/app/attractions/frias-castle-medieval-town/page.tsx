import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗里亚斯 Frías｜西班牙最小城市的悬崖城堡奇观，漫步中世纪时光胶囊 - 最佳欧洲景点',
  description: '车子在卡斯蒂利亚北部连绵的绿色丘陵间穿行，当你绕过最后一个弯道，弗里亚斯会毫无预兆地撞进你的视野。那一瞬间，你会下意识地屏住呼吸——这根本不是寻常意义上的“城镇”，而是一座从孤绝的悬崖上轰然崛起的、由岩石、砖瓦和岁月共同浇筑的巨型雕塑。城堡的塔楼如同鹰隼的利爪，死死抠进赭红色的山体，下方密密麻麻的棕...',
}

export default function FriasCastleMedievalTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '弗里亚斯', href: '/destinations/spain' },
            { label: '弗里亚斯', href: '/attractions/frias-castle-medieval-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗里亚斯・Frías・西班牙・弗里亚斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在卡斯蒂利亚北部连绵的绿色丘陵间穿行，当你绕过最后一个弯道，弗里亚斯会毫无预兆地撞进你的视野。那一瞬间，你会下意识地屏住呼吸——这根本不是寻常意义上的“城镇”，而是一座从孤绝的悬崖上轰然崛起的、由岩石、砖瓦和岁月共同浇筑的巨型雕塑。城堡的塔楼如同鹰隼的利爪，死死抠进赭红色的山体，下方密密麻麻的棕色房屋仿佛是从悬崖缝隙里长出来的蘑菇，层层叠叠，摇摇欲坠，却又奇迹般地紧紧抱在一起。风吹过埃布罗河峡谷，带来湿润的草木气息和远处牧场上隐约的牛铃声。
当你停好车，穿过那座颤巍巍的、横跨在深涧上的中世纪石桥——圣玛丽亚桥，就正式踏入了这个时间胶囊。脚下是千百年来被脚步磨得光滑圆润的石板路，窄得只能容一人通过，阳光只能从“一线天”似的屋檐缝隙中挤进来，在墙上投下锐利的光斑。空气里是清凉的石头味道，混合着某户人家飘出的炖豆子香气。这里静得出奇，除了你自己的脚步声和偶尔传来的、从某扇厚重木门后传出的电视新闻声。你会惊讶地发现，居民们依然生活在这个明信片般的场景里，晾晒的床单在古老的窗台前飘动，花盆里的天竺葵开得正艳。
爬到半山腰，回头一望，你会彻底理解这座城市的灵魂。它不是为了美而建造的，而是为了生存。每一栋房子的位置，每一条陡峭的阶梯，都是为了应对攻击、利用空间、获取光照。这种在极端地理条件下迸发出的建筑智慧，充满了粗粝而顽强的生命力。当地人见面时那声短促而有力的“Hola”，就像他们脚下的岩石一样直接。这里没有旅游区的喧嚣表演感，有的只是一种延续了八百年的、沉静而骄傲的日常。
最打动人心的，莫过于那份极致的反差与和谐：一边是令人腿软的垂直险峻，另一边却是窗台上细心呵护的鲜花；一边是冷硬如铁的军事堡垒遗迹，另一边却是从烟囱里升起的、带着饭香的温暖炊烟。弗里亚斯的美，是一种带着刺痛感的美，它提醒你，人类文明在最严苛的摇篮里，是如何开出坚韧之花的。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在卡斯蒂利亚北部连绵的绿色丘陵间穿行，当你绕过最后一个弯道，弗里亚斯会毫无预兆地撞进你的视野。那一瞬间，你会下意识地屏住呼吸——这根本不是寻常意义上的“城镇”，而是一座从孤绝的悬崖上轰然崛起的、由岩石、砖瓦和岁月共同浇筑的巨型雕塑。城堡的塔楼如同鹰隼的利爪，死死抠进赭红色的山体，下方密密麻麻的棕色房屋仿佛是从悬崖缝隙里长出来的蘑菇，层层叠叠，摇摇欲坠，却又奇迹般地紧紧抱在一起。风吹过埃布罗河峡谷，带来湿润的草木气息和远处牧场上隐约的牛铃声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你停好车，穿过那座颤巍巍的、横跨在深涧上的中世纪石桥——圣玛丽亚桥，就正式踏入了这个时间胶囊。脚下是千百年来被脚步磨得光滑圆润的石板路，窄得只能容一人通过，阳光只能从“一线天”似的屋檐缝隙中挤进来，在墙上投下锐利的光斑。空气里是清凉的石头味道，混合着某户人家飘出的炖豆子香气。这里静得出奇，除了你自己的脚步声和偶尔传来的、从某扇厚重木门后传出的电视新闻声。你会惊讶地发现，居民们依然生活在这个明信片般的场景里，晾晒的床单在古老的窗台前飘动，花盆里的天竺葵开得正艳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`爬到半山腰，回头一望，你会彻底理解这座城市的灵魂。它不是为了美而建造的，而是为了生存。每一栋房子的位置，每一条陡峭的阶梯，都是为了应对攻击、利用空间、获取光照。这种在极端地理条件下迸发出的建筑智慧，充满了粗粝而顽强的生命力。当地人见面时那声短促而有力的“Hola”，就像他们脚下的岩石一样直接。这里没有旅游区的喧嚣表演感，有的只是一种延续了八百年的、沉静而骄傲的日常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，莫过于那份极致的反差与和谐：一边是令人腿软的垂直险峻，另一边却是窗台上细心呵护的鲜花；一边是冷硬如铁的军事堡垒遗迹，另一边却是从烟囱里升起的、带着饭香的温暖炊烟。弗里亚斯的美，是一种带着刺痛感的美，它提醒你，人类文明在最严苛的摇篮里，是如何开出坚韧之花的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗里亚斯`} />
                <InfoRow label="英文名称" value={`Frías`} />
                <InfoRow label="正式名称" value={`Frías`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`弗里亚斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在岩石上生长出的战略要塞，见证了卡斯蒂利亚王国与纳瓦拉王国长达数世纪的边境拉锯战。`} />
                <InfoRow label="建筑特色" value={`城堡与山崖、民居浑然一体，仿佛直接从岩石中雕凿而出，构成了惊心动魄的垂直防御体系。`} />
                <InfoRow label="建筑风格" value={`罗马式与哥特式风格融合的军事建筑典范，并保留了中世纪城镇布局的纯粹样本。`} />
                <InfoRow label="文化价值" value={`它是西班牙“最小城市”称号的拥有者，是活生生的中世纪化石，展现了边境山民坚韧不拔的生活图景。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`悬崖城堡（Castillo de Frías）：通常在夏季（4月至9月）上午10点至下午2点，下午4点至晚上8点开放；冬季（10月至3月）开放时间缩短，通常为上午10点至下午2点，下午3点半至5点半。周一通常闭馆（除非是公共假日）。具体开放时间随季节和当地节庆微调，行前务必查看市政网站或致电确认。老城本身全天可自由漫步。`} />
              <InfoRow label="门票价格" value={`进入弗里亚斯城无需门票。参观悬崖城堡内部需购票，票价约3-4欧元。通常有学生、老年人和团体的优惠票价（约2-3欧元）。12岁以下儿童可能免费。购票处在城堡入口处，只接受现金（欧元）。`} />
              <InfoRow label="地址" value={`Plaza del Castillo, s/n, 09211 Frías, Burgos, España`} />
              <InfoRow label="交通方式" value={`最近的国际机场是毕尔巴鄂机场或布尔戈斯机场。从布尔戈斯市出发最为便捷：在布尔戈斯汽车站乘坐前往“Valle de Tobalina”方向的区域性巴士（ALSA公司运营），中途在Frías下车。车程约1小时15分钟，但班次非常有限，通常每天仅2-3班，周末更少，务必提前在ALSA官网或车站核对时刻表。自驾是最佳选择：从布尔戈斯沿N-232公路向北，转入BU-504公路，全程约70公里，路况良好，沿途是连绵的绿色丘陵，风景如画。城内街道狭窄陡峭，停车请遵循指示，建议停放在城外的指定免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要读懂弗里亚斯，就得把手放在它滚烫的岩石上，感受那段边境烽烟。时间回到公元9世纪，基督徒王国开始从北方向伊比利亚半岛内陆艰难地“再征服”。这片埃布罗河畔的险峻山崖，因其一夫当关、万夫莫开的地形，成了兵家必争的前哨。最初，这里可能只是一个简陋的瞭望点，几间石屋，驻守着几名警惕的士兵，日夜监视着摩尔人或敌对基督教邻邦的动向。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点出现在1202年。卡斯蒂利亚国王阿方索八世，一位雄才大略的君主，正式授予这片定居点“特许状”，不仅意味着自治权，更是一种战略上的加冕——他要把弗里亚斯锻造成一把抵在纳瓦拉王国喉间的利刃。城堡开始从岩石上生长起来，不再是简单的塔楼，而是与山崖本身的岩层咬合，凿出地下室，利用天然岩壁作为墙体的一部分。这时期的建筑，有着厚重的罗马式影子，门窗是朴素的半圆拱，线条粗犷，一切为防御服务。你可以想象，建筑工人在悬崖边敲打石头，脚下是万丈深渊，每一次凿击都伴随着回响在峡谷里的风声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个13到15世纪，弗里亚斯都在血腥的边境冲突中摇摆。它像一颗棋子，多次在卡斯蒂利亚王室与强大的拉拉家族等地方贵族之间易手。城堡的塔楼不止一次被围攻、损坏，又一次次被加固、加高。我们今天看到的、带有更多哥特式轻盈感的尖拱窗和装饰性元素，多半是后来相对和平时期添加的。战争间隙，生活还得继续。平民们依附在城堡的阴影下，沿着唯一可行的山坡，见缝插针地修建家园。他们发展出了独特的建筑样式：房屋共用山墙以节省材料，向悬崖外悬挑以争取几平方米的宝贵空间，形成了那些令人惊叹的“悬空楼”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1492年，格拉纳达陷落，西班牙完成统一，边境的军事意义骤然下降。弗里亚斯从剑拔弩张的前线，慢慢变成了一个安静的农业和贸易集镇。圣玛丽亚桥连接起了南北商路，峡谷里建起了水力磨坊。城堡不再有士兵驻守，逐渐荒芜，成了孩子们探险和鸽子筑巢的地方。正是这种被“遗忘”，反而奇迹般地保存了中世纪城镇的完整肌理，没有受到后续文艺复兴或巴洛克风格的大规模“改造”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到近代，当西班牙轰轰烈烈地进行城市化时，弗里亚斯因为地理条件的极端限制，再次被留在了历史的主赛道之外。年轻人外出寻找机会，人口不断减少。然而，正是这种“停滞”，在20世纪后期被重新发现其无与伦比的价值。它被宣布为历史艺术遗址，并获得了“西班牙最小城市”的称号（人口不足300却拥有城市地位）。今天的弗里亚斯，不再需要为生存而战，而是为守护这份独一无二的遗产而存在。每一块修补的石头，都是在续写一部刻在悬崖上的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点前抵达，这时游客尚未涌入，晨光斜射，为城堡和老城披上金色的纱衣，是摄影和静心感受的黄金时间。整体游览需要至少4-5小时，节奏宜慢不宜快。路线设计为逆时针环形，先从外围的震撼全景开始，再深入小巷肌理，最后攀登至城堡顶点，完成从宏观到微观、再从微观到极致俯瞰的完整体验。这样的安排能让你逐步沉浸，避免一开始就爬坡的劳累，也能在光线最佳的时刻捕捉到最经典的画面。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿绝对防滑的徒步鞋或运动鞋，那些古老的石板路在晨露或雨后如同冰面。城内几乎没有餐馆，建议在布尔戈斯或沿途镇上吃好早饭，或自带简单干粮和水。尊重当地居民隐私，拍照时尽量避免直接对准居民窗户或室内。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在城外的免费停车场，先别急着进城，沿着公路往北走一小段，找到那个能同时将圣玛丽亚古桥、悬崖城堡和层叠房屋尽收眼底的经典全景观景台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过回荡着水声的圣玛丽亚桥，抚摸桥墩上古老的石纹，在桥中央停留片刻，感受脚下深谷的穿堂风。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从桥头的小广场钻进那条最狭窄的主街“Calle del Mercado”，让手指划过两侧湿润冰凉的石头墙壁，抬头看那些几乎要碰到一起的“悬空楼”阳台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找街角那间拥有巨大木梁的“El Rincón de Frías”小酒馆，点一杯当地的里奥哈葡萄酒，就着一小碟伊比利亚火腿，和老板聊两句天气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着陡峭的、有时需要手脚并用的阶梯“Cuesta de la Daniela”向上攀爬，目标直指山顶那座仿佛悬浮在空中的圣维森特教堂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气登上城堡的主塔楼，紧紧抓住古老的石质扶手，在呼啸的山风中360度环视，看埃布罗河像一条银带切开翠绿的山谷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时换一条小巷，比如“Calle de la Cruz”，探访那些挂着铁艺招牌的古老手工作坊，或许能遇见正在雕刻木勺的老匠人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳西下前，回到古桥附近，坐在河岸边的草地上，看着暖黄色的光芒一点点为整个石头城镀上金边，直到灯火初上。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣玛丽亚桥北侧山坡观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，采用广角镜头，将古桥作为前景引导线，中景是密布的房屋，远景是耸立的城堡，构成完美的景深层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Calle del Mercado街道仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午当阳光直射入狭窄街巷时，站在低处向上拍摄，捕捉阳光照亮悬挂的盆栽和斑驳的彩色木窗，与深邃的阴影形成强烈对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡塔楼顶层俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光偏西时，将相机紧贴塔楼垛口稳定，俯拍老城层层叠叠的砖红色屋顶和蜿蜒如肠的小巷，利用长焦镜头压缩空间，展现迷宫般的肌理。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣维森特教堂门前回望`}</h4>
                  <p className="text-sm text-gray-700">{`清晨利用柔和侧光，以教堂古老的石门框为画框，拍摄远处山谷的薄雾和若隐若现的城堡塔尖，营造神秘而古老的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`峡谷风大，尤其在城堡顶端，使用长焦镜头时务必注意稳定，可借助垛口或使用高速快门。无人机飞行需极度谨慎，强烈侧风和老城密集的电磁信号干扰是巨大挑战，最好提前查询当地法规并在绝对空旷区域起降。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸体验`}</h4>
                  <p className="text-sm text-blue-800">{`老城内仅有的几家由百年石屋改造的乡村民宿，睡在厚重的石墙内，夜晚静得能听见自己的心跳，清晨被教堂钟声和咖啡香唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园牧歌`}</h4>
                  <p className="text-sm text-green-800">{`选择距离弗里亚斯车程10分钟内、埃布罗河畔的乡村小屋，拥有自己的小菜园和面向山谷的露台，享受绝对的静谧与星空。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷舒适`}</h4>
                  <p className="text-sm text-yellow-800">{`住在30分钟车程外的布尔戈斯市，选择丰富，从设计酒店到历史宫殿改建的住所应有尽有，白天探索弗里亚斯，晚上回归城市的便利与美食。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`特色庄园`}</h4>
                  <p className="text-sm text-purple-800">{`驱车45分钟，入住卡斯蒂利亚乡间由古老修道院或农庄改造的精品酒店，体验石头拱廊、庭院水井和用本地食材烹制的丰盛早餐。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内住宿极其有限且热门，必须提前数月预订。布尔戈斯作为省会城市是更灵活可靠的后勤基地。无论住在哪里，夜晚自驾返回时请注意山区公路照明稀少，谨慎驾驶。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开弗里亚斯很久之后，那片长在悬崖上的剪影，还会不时地浮现在脑海里。它带给我的，不仅仅是一次视觉的震撼，更是一种关于“存在”的深刻叩问。在这个追求更高、更快、更光鲜的时代，弗里亚斯固执地、甚至有些“笨拙”地扎根在最险峻、最不便的地方，向我们展示了一种截然不同的生命逻辑：不是扩张，而是凝聚；不是征服自然，而是依附并敬畏自然，从中淬炼出惊人的韧性。它的美，是棱角分明、毫不妥协的美。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个小小的石头世界里，时间仿佛拥有了不同的密度。走在那些巷子里，你能触摸到八九个世纪前工匠手温的余热，能想象出守夜人裹紧斗篷在城墙上踱步的孤独。它像一位沉默的守望者，提醒着我们，文明的辉煌不只存在于宏伟的大教堂和帝国的宫殿，也同样铭刻在这些为生存而战的、普通人的家园之上。弗里亚斯不仅仅是一个景点，它是一个活着的寓言。每一位热爱深度游的旅人都该来这里，不仅是为了拍一张惊艳朋友圈的照片，更是为了让自己站在那座悬崖上，感受一下来自历史深处的风，那股混合着石头冷冽、炊烟温暖和生命顽强不屈的、复杂而真实的风。它会让你在回到自己忙碌的世界后，心底多了一份沉静的力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cuenca-hanging-houses" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    昆
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">昆卡悬屋</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cuenca Hanging Houses</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/jaen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈恩古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jaén Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/jaen-historic-quarter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈恩古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Historic Quarter of Jaén</p>
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
