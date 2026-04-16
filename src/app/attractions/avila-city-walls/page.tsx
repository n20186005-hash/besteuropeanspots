import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿维拉古城墙 Ávila Walls｜行走在中世纪之巅，触摸西班牙最完整石环的永恒心跳 - 最佳欧洲景点',
  description: '当你的车缓缓驶近阿维拉，远远地，那道在卡斯提尔高原灼热阳光下泛着金灰色光芒的巨石轮廓，便像从大地深处生长出来的史前巨兽脊梁，横亘在地平线上。那种视觉冲击是压倒性的，不是精美，而是无与伦比的厚重与苍凉。走近了，车轮压过古城外的石板路，空气里弥漫着干爽的、混合了古老石头和高原蒿草的气息。你能听见风，永不...',
}

export default function AvilaCityWallsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿维拉古城墙', href: '/attractions/avila-city-walls' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿维拉古城墙・Ávila Walls・西班牙・阿维拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你的车缓缓驶近阿维拉，远远地，那道在卡斯提尔高原灼热阳光下泛着金灰色光芒的巨石轮廓，便像从大地深处生长出来的史前巨兽脊梁，横亘在地平线上。那种视觉冲击是压倒性的，不是精美，而是无与伦比的厚重与苍凉。走近了，车轮压过古城外的石板路，空气里弥漫着干爽的、混合了古老石头和高原蒿草的气息。你能听见风，永不停歇的风，呼啸着穿过碉楼的箭孔，发出低沉而悠长的呜咽，仿佛千年战事的回响还被困在石缝里。
穿过任何一座城门——比如那座威严的阿尔卡萨尔门——就像是完成了一场时空切换的仪式。门洞内阴凉彻骨，与门外的烈日形成强烈对比，你的脚步声在拱顶下激起清晰回音。瞬间，你从21世纪的游客，变成了一个步入中世纪堡垒的朝圣者。城墙之内，是另一个节奏的世界：窄巷幽深，教堂的钟声准时敲响，白发的老太太提着菜篮不紧不慢地走着，仿佛这道墙把外界的喧嚣与匆忙都彻底屏蔽了。在这里，城墙不是隔绝外界的冰冷屏障，而是居民生活的温暖依托，是他们庭院的一部分，是他们每日散步的背景墙。
这座城墙最打动人心的，恰恰是它的“可触摸性”与“生命力”。你不仅可以仰望它，更能亲自用双脚去丈量它。当你一级级登上陡峭的台阶，站在宽阔的城墙上漫步，指尖划过被无数代人、无数次风雨打磨得光滑或粗糙的石块，那一刻的感觉难以言喻。一边是城内红瓦屋顶的宁静小镇风光，圣特蕾莎修道院的穹顶近在咫尺；另一边是辽阔无垠、色调苍黄的高原，一直延伸到天际线。你站在历史与当下、战争与和平、守护与开放的真正边界线上。这种沉浸式的、身体力行的体验，让历史从书本里跳出来，变成了你脚下坚实的存在和耳边呼啸的风。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你的车缓缓驶近阿维拉，远远地，那道在卡斯提尔高原灼热阳光下泛着金灰色光芒的巨石轮廓，便像从大地深处生长出来的史前巨兽脊梁，横亘在地平线上。那种视觉冲击是压倒性的，不是精美，而是无与伦比的厚重与苍凉。走近了，车轮压过古城外的石板路，空气里弥漫着干爽的、混合了古老石头和高原蒿草的气息。你能听见风，永不停歇的风，呼啸着穿过碉楼的箭孔，发出低沉而悠长的呜咽，仿佛千年战事的回响还被困在石缝里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过任何一座城门——比如那座威严的阿尔卡萨尔门——就像是完成了一场时空切换的仪式。门洞内阴凉彻骨，与门外的烈日形成强烈对比，你的脚步声在拱顶下激起清晰回音。瞬间，你从21世纪的游客，变成了一个步入中世纪堡垒的朝圣者。城墙之内，是另一个节奏的世界：窄巷幽深，教堂的钟声准时敲响，白发的老太太提着菜篮不紧不慢地走着，仿佛这道墙把外界的喧嚣与匆忙都彻底屏蔽了。在这里，城墙不是隔绝外界的冰冷屏障，而是居民生活的温暖依托，是他们庭院的一部分，是他们每日散步的背景墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城墙最打动人心的，恰恰是它的“可触摸性”与“生命力”。你不仅可以仰望它，更能亲自用双脚去丈量它。当你一级级登上陡峭的台阶，站在宽阔的城墙上漫步，指尖划过被无数代人、无数次风雨打磨得光滑或粗糙的石块，那一刻的感觉难以言喻。一边是城内红瓦屋顶的宁静小镇风光，圣特蕾莎修道院的穹顶近在咫尺；另一边是辽阔无垠、色调苍黄的高原，一直延伸到天际线。你站在历史与当下、战争与和平、守护与开放的真正边界线上。这种沉浸式的、身体力行的体验，让历史从书本里跳出来，变成了你脚下坚实的存在和耳边呼啸的风。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿维拉古城墙`} />
                <InfoRow label="英文名称" value={`Ávila Walls`} />
                <InfoRow label="正式名称" value={`The Walls of Ávila`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`阿维拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`阿维拉城墙是欧洲保存最完整、规模最大的中世纪城墙之一，是西班牙“收复失地运动”的巅峰之作和基督教王国权力的永恒象征。`} />
                <InfoRow label="建筑特色" value={`由长达2.5公里的坚固花岗岩墙体、88座半圆形碉楼和9座宏伟城门构成，形成了一个近乎完美的矩形防御闭环。`} />
                <InfoRow label="建筑风格" value={`以11世纪罗马式军事建筑风格为基底，兼具早期哥特式特征，是军事防御工程与宗教象征意义结合的典范。`} />
                <InfoRow label="文化价值" value={`它不仅是军事堡垒，更是塑造阿维拉城市肌理与灵魂的骨架，并因其无与伦比的完整性和历史真实性，于1985年被联合国教科文组织列为世界文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城墙步道开放时间依季节调整：通常夏季（4月至9月）为周二至周日 10:00 - 20:00；冬季（10月至3月）为周二至周日 10:00 - 18:00；周一全天关闭进行维护。部分塔楼和城门入口有独立开放时段，建议出发前在官网二次确认。元旦、圣诞节及部分当地节日会闭馆。`} />
              <InfoRow label="门票价格" value={`完整城墙步道（Ronda de las Murallas）成人票价为5欧元。持学生证、65岁以上长者及7-14岁儿童享有3.5欧元的优惠票价。7岁以下儿童免费。提供与阿维拉大教堂的联票，价格为9欧元，更为划算。现场购票或通过官方旅游网站预订均可。`} />
              <InfoRow label="地址" value={`Av. de Madrid, 4, 05001 Ávila, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发最为便捷。马德里查马丁火车站乘坐Regional Express或Avant列车，约1小时20分钟即可抵达阿维拉火车站，班次密集，高峰时段每小时至少一班，建议提前在Renfe官网或APP购票以获优惠。从阿维拉火车站到古城墙，可乘坐本地1路或4路公交车，约15分钟车程；或直接打车，10分钟内可达。若自驾，从马德里沿A-6和AP-51高速公路约1.5小时车程，古城外围有多个付费停车场（如停车场Mercado Grande）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿维拉的故事，远比我们今天看到的石头要古老。在罗马人时代，这里就已经是一个战略据点。但真正让阿维拉脱胎换骨的，是那场持续了数个世纪、决定伊比利亚半岛命运的“收复失地运动”。公元8世纪，摩尔人的铁骑征服了半岛大片土地，包括阿维拉所在的区域。此后数百年，基督教王国与穆斯林政权在此拉锯。直到11世纪末，局势才发生决定性转变。在阿方索六世国王的领导下，基督教军队重新夺回了这片土地。但夺回只是第一步，如何守住这片暴露在边境前沿的土地，成了最紧迫的问题。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一个宏大的筑城计划在1088年启动了。负责这项史诗级工程的，是阿方索六世麾下的两位天才：一位是他的女婿，来自勃艮第的雷蒙德伯爵，他带来了欧洲先进的军事建筑理念；另一位，则是被称为“城墙之匠”的穆斯林建筑师卡斯帕拉。这个组合本身就充满了历史的戏剧性——在信仰战争的背景下，一个基督教领主与一个穆斯林工匠通力合作，只为建造一座抵御可能来自任何方向威胁的终极堡垒。他们招募了数千名工人，包括基督徒、穆斯林和犹太人，就地取材，用了惊人的短时间——大约九年，就将这座周长超过两公里半、平均高度12米、厚度达3米的巨石堡垒树立了起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城墙的建成，彻底改变了阿维拉的命运。它不再是一个脆弱的边境哨所，而成了一个坚不可摧的王国前哨、一个向南推进的跳板、一个安全的移民目的地。贵族、骑士、商人和农民蜂拥而至，在城墙的庇佑下安家落户。城墙的九座城门，各有其名和功能：阿尔卡萨尔门通向城堡，是权力的象征；圣维森特门是主要的礼仪通道；皮塞德拉门则与重要的朝圣之路相连。那些雄浑的半圆形碉楼，不仅是防御工事，也成了后来许多私人宅邸的基座，民用建筑与军事设施奇妙地融为一体，形成了今天我们看到的独特城市景观。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几个世纪里，城墙见证了无数的围城、谈判与和平。它抵御过攻击，也经历过扩建与修缮。随着火炮的出现，中世纪城墙的军事意义逐渐减弱，但阿维拉城墙却因其非凡的质量和城市的相对衰落而奇迹般地完整保存了下来。它没有像许多欧洲城墙那样被拆除以给城市扩张让路，而是静静地沉睡，成为了城市记忆本身。19世纪浪漫主义风潮兴起，这些古老的遗迹重新被人们以审美的眼光发现和欣赏。如今，它不再需要防御任何敌人，它防御的是遗忘，它巍然屹立，向每一个到来者无声地讲述着关于信仰、生存、融合与坚韧的漫长史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度感受阿维拉城墙的灵魂，我强烈建议你预留整整一个上午或一个下午，至少3-4小时的漫游时间。最好的抵达时间是清晨开门时，或下午三点后。清晨光线柔和，游客稀少，你能独占城墙，聆听最纯粹的风声与鸟鸣；下午则能捕捉到夕阳为巨石披上金红色外衣的魔幻时刻。节奏一定要慢，这不是打卡，而是徒步与沉思的结合。先从地面仰视开始，建立整体的敬畏感，然后登城漫步，最后回到老城小巷，从内部感受城墙的庇护。这样的安排能让你由远及近、由外向内，立体地理解这座石头史诗。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城墙步道没有遮荫，夏季高原紫外线极其强烈，务必携带帽子、墨镜并涂抹高倍数防晒霜。一定要穿一双绝对舒适防滑的步行鞋，城墙上的石阶陡峭且磨损严重。留意各个入口的关闭时间，管理员通常会在关门前半小时开始清场，计算好你的环行时间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从气势最磅礴的阿尔卡萨尔门开始，仰望那两座巨大塔楼拱卫的城门，想象当年骑士策马而出的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花些时间在城墙外的“四柱台”观景点，这里是拍摄城墙全景的经典位置，看晨光或夕阳勾勒出它完整的、如棋盘般规整的轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`购票从阿尔卡萨尔门旁的入口登上城墙步道，沿着宽阔的墙顶向西缓行，让卡斯提尔的烈风拂面，俯瞰城内橙瓦屋顶与城外苍茫高原的强烈对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到“忠诚碉楼”附近放缓脚步，仔细观察石墙上留下的古老刻痕和箭孔，亲手触摸那些被岁月打磨得温润的花岗岩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在接近大教堂的半圆形大碉楼处停留，这里是城墙与宗教建筑完美交融的点，能看到教堂的后殿仿佛是从城墙中生长出来一般。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从圣维森特门附近走下城墙，回头再看这座装饰最精美的城门，其罗马式雕像诉说着古老的圣徒传说。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着城墙根的小路“Ronda Vieja”散步，从另一个仰角感受城墙迫人的高度与压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，钻进城墙内的一条小巷，比如“生命与死亡之街”，在一家老酒馆点一杯当地产的红酒，就着火腿，回味刚才在天空与历史之间行走的滋味。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`四柱台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，太阳位于侧面，用长焦镜头压缩空间，能将绵延的城墙、碉楼与背景中的雪山（冬季）一同纳入画面，色彩层次最为丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城墙上拍摄大教堂`}</h4>
                  <p className="text-sm text-gray-700">{`从西段城墙向东行走，在能看到大教堂后殿与城墙结合的碉楼处，利用城墙的雉堞作为前景框架，构图拍摄教堂坚如磐石的雄姿。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`阿尔卡萨尔门拱洞光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，站在门洞内侧向外拍摄，可以拍出强烈的明暗对比，门洞成为天然画框，框出外面明亮的广场与天空。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“忠诚碉楼”局部特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午的侧光能突出花岗岩的粗粝质感，贴近拍摄碉楼石壁的细节、苔藓或古老的砌合痕迹，讲述石头本身的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尝试在蓝调时刻（日落后天空未全黑时）拍摄城墙的灯光亮起，冷暖色调对比极具氛围感。使用广角镜头在城墙上拍摄时，注意将地平线保持水平，以凸显城墙线条的恢弘几何感。无人机飞行在古城上空有严格限制，务必提前查询当地法规，通常禁止在文化遗产核心区起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-blue-800">{`藏在犹太区窄巷里的百年老宅客栈，石墙木梁，房间小巧温馨，老板会送你一张手绘的老城地图并圈出他最爱的小酒馆。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由一座15世纪宫殿改造的精品酒店，庭院里有古老的石井，房间保留了原始的哥特式拱顶，晚上在庭院里能听到清晰的城墙风声。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古城边缘一座经过彻底修复的贵族府邸，拥有直面部分城墙景观的露台客房，在私密露台上享用早餐，仿佛拥有整座中世纪堡垒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`修道院静修`}</h4>
                  <p className="text-sm text-purple-800">{`城墙内真正的圣特蕾莎修道院开设的招待所，环境极为清幽简朴，适合寻求精神宁静的旅者，夜晚的寂静深不可测。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内酒店多为历史建筑，隔音普遍一般，但夜晚本身极其安静。住在城内绝对物超所值，因为你能在游客散去后的清晨与黄昏，独享一座空灵的千年古城。旺季（夏季及圣周）务必提前数月预订，阿维拉住宿容量有限。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿维拉很久以后，那片巨石城墙的影像依然会不时闯入我的脑海。它不像那些装饰繁复的宫殿教堂，用奢华震撼你；它用的是另一种力量——一种基于生存的、原始的、近乎固执的“存在”的力量。在这个追求效率、一切皆可速成又速朽的时代，阿维拉城墙的存在本身，就是一剂强力的镇静剂。它告诉你，有些东西是可以历经千年战火、风雨和遗忘而几乎完好如初的；它告诉你，人类为了守护自己所珍视的信仰与家园，可以爆发出何等惊人的集体意志和工程智慧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城墙最终教会我的，是关于“边界”的重新思考。它曾经是血与铁的边界，划分信仰与疆土。但今天，当我在墙顶漫步，看城内居民晾晒衣被、孩子在墙根玩耍，这道边界早已软化、内化，变成了日常风景的一部分，变成了认同感的来源。它从物理的屏障，升华为了精神的图腾。对于每一位渴望深度游的旅人，阿维拉不仅仅是一个“景点”，它是一次难得的、可以亲手触摸中世纪脉搏的机会。在这里，你行走的每一步，都踩在历史的脊椎上，风声是它的呼吸，石头是它的语言。它让你暂时离开浮于表面的世界，去感受一种更厚重、更坚韧、更接近土地本源的永恒心跳。这，或许就是我们不断出发、不断寻找的旅行的终极意义之一。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
