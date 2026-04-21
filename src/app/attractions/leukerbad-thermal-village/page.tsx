import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '洛伊克巴德 Leukerbad｜直面阿尔卑斯心脏的绝壁温泉秘境 - 最佳欧洲景点',
  description: '车子驶出洛伊克镇，一头扎进达拉峡谷的那一刻，你就知道这将不是一段平凡的旅程。两侧陡峭的石灰岩壁几乎触手可及，道路在幽暗的峡谷腹地蜿蜒，光线忽明忽暗，只有车轮摩擦路面和引擎的低鸣在岩壁间回荡，带着一种进入秘境前特有的、略带压迫的寂静。你心里会开始嘀咕：路的尽头，真的会有一个村庄吗？ 然后，豁然开朗。这',
}

export default function LeukerbadThermalVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '洛伊克巴德（瓦莱州）', href: '/destinations/europe' },
            { label: '洛伊克巴德', href: '/attractions/leukerbad-thermal-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`洛伊克巴德・Leukerbad・瑞士・洛伊克巴德（瓦莱州）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶出洛伊克镇，一头扎进达拉峡谷的那一刻，你就知道这将不是一段平凡的旅程。两侧陡峭的石灰岩壁几乎触手可及，道路在幽暗的峡谷腹地蜿蜒，光线忽明忽暗，只有车轮摩擦路面和引擎的低鸣在岩壁间回荡，带着一种进入秘境前特有的、略带压迫的寂静。你心里会开始嘀咕：路的尽头，真的会有一个村庄吗？
然后，豁然开朗。这个词用在这里毫不夸张。仿佛巨神用斧头劈开了山体，眼前是一个近乎完美的、高耸入云的岩石马蹄形剧场，而洛伊克巴德，就像一颗被精心安放在舞台中央的微缩模型。第一眼是震撼，紧接着是一种奇特的安心感。那些棕黑色的木屋和酒店，层层叠叠地镶嵌在谷底和缓坡上，被高达千米的绝壁从三面紧紧拥抱。你感到自己既渺小，又被深深保护着。空气清冽，带着高山植物和淡淡硫磺的混合气息——那是地下温泉的签名。
这里的核心魅力，就在于这种极致的矛盾与统一。你可以在最现代舒适的露天温泉池里，让50度的热流包裹全身，同时抬头直视阿尔卑斯山体最原始、粗粝的岩层纹理，看积雪如何在嶙峋的峰顶勾勒出光的形状。水汽氤氲而上，与山间飘荡的云雾融为一体。你一边享受着人类文明带来的疗愈，一边与地球沉默而强大的地质力量赤裸相对。这不是装饰性的山景，这是一种直面。
而这个村庄并非只为游客存在。清晨，你会看到穿着传统背带裤的老人提着牛奶桶走过，面包店飘出刚出炉的“黑麦面包”的焦香。温泉对于当地人，就像广场对于意大利人，是生活的一部分。他们在这里缓解耕作和登山的劳顿，交换新闻，度过漫长的冬季。这种将自然恩赐彻底融入日常的坦然，让洛伊克巴德超越了一个单纯的旅游目的地，成为了一个真正“活着的”阿尔卑斯山传奇。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶出洛伊克镇，一头扎进达拉峡谷的那一刻，你就知道这将不是一段平凡的旅程。两侧陡峭的石灰岩壁几乎触手可及，道路在幽暗的峡谷腹地蜿蜒，光线忽明忽暗，只有车轮摩擦路面和引擎的低鸣在岩壁间回荡，带着一种进入秘境前特有的、略带压迫的寂静。你心里会开始嘀咕：路的尽头，真的会有一个村庄吗？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，豁然开朗。这个词用在这里毫不夸张。仿佛巨神用斧头劈开了山体，眼前是一个近乎完美的、高耸入云的岩石马蹄形剧场，而洛伊克巴德，就像一颗被精心安放在舞台中央的微缩模型。第一眼是震撼，紧接着是一种奇特的安心感。那些棕黑色的木屋和酒店，层层叠叠地镶嵌在谷底和缓坡上，被高达千米的绝壁从三面紧紧拥抱。你感到自己既渺小，又被深深保护着。空气清冽，带着高山植物和淡淡硫磺的混合气息——那是地下温泉的签名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的核心魅力，就在于这种极致的矛盾与统一。你可以在最现代舒适的露天温泉池里，让50度的热流包裹全身，同时抬头直视阿尔卑斯山体最原始、粗粝的岩层纹理，看积雪如何在嶙峋的峰顶勾勒出光的形状。水汽氤氲而上，与山间飘荡的云雾融为一体。你一边享受着人类文明带来的疗愈，一边与地球沉默而强大的地质力量赤裸相对。这不是装饰性的山景，这是一种直面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这个村庄并非只为游客存在。清晨，你会看到穿着传统背带裤的老人提着牛奶桶走过，面包店飘出刚出炉的“黑麦面包”的焦香。温泉对于当地人，就像广场对于意大利人，是生活的一部分。他们在这里缓解耕作和登山的劳顿，交换新闻，度过漫长的冬季。这种将自然恩赐彻底融入日常的坦然，让洛伊克巴德超越了一个单纯的旅游目的地，成为了一个真正“活着的”阿尔卑斯山传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`洛伊克巴德`} />
                <InfoRow label="英文名称" value={`Leukerbad`} />
                <InfoRow label="正式名称" value={`Leukerbad`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`洛伊克巴德（瓦莱州）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`数百年来，它一直是阿尔卑斯山南北通道上的重要疗养圣地，见证了从罗马士兵到现代旅人的沐浴传统。`} />
                <InfoRow label="建筑特色" value={`村庄建筑紧密依偎，巧妙地嵌入垂直岩壁形成的天然“圆形剧场”底部，木质阳台与石砌墙垣直面令人屏息的绝景。`} />
                <InfoRow label="建筑风格" value={`典型的瓦莱州阿尔卑斯山村风格，混合了传统的“ Walser ”木屋结构与现代疗养建筑的简洁线条。`} />
                <InfoRow label="文化价值" value={`这里是自然崇拜与疗愈文化的活态体现，展现了人类如何在极端自然环境中寻求共存与慰藉的古老智慧。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共温泉设施（如Burgerbad、Alpentherme）通常全年开放，每日上午9点至晚上10点（部分池区开放至晚11点）。户外温泉池在冬季雪季照常开放，体验极佳。山区缆车（通往Gemmi山口）运营时间约为每年6月初至10月中旬，以及12月中旬至4月中旬（视雪况而定），每日约8:30-16:30运行。具体时间随季节略有调整，出行前务必查询官网最新时刻表。`} />
              <InfoRow label="门票价格" value={`主要温泉浴场单日通行证：成人约60-70瑞士法郎，儿童/青少年有优惠价。多家酒店为其住客提供免费或折扣温泉通行证。Gemmi缆车往返票价：成人约45瑞士法郎。有多种包含温泉、缆车和交通的联票及多日通票可供选择，性价比更高。`} />
              <InfoRow label="地址" value={`Dorfplatz, 3954 Leukerbad, Switzerland`} />
              <InfoRow label="交通方式" value={`最近的国际机场是日内瓦机场或苏黎世机场。最经典的路线是从日内瓦机场乘坐瑞士国铁（SBB）至洛伊克（Leuk）火车站，车程约2.5小时，沿途湖光山色。抵达洛伊克后，换乘邮政巴士（PostBus）511路，这是一段约30分钟、极其壮观的盘山公路之旅，巴士会驶入狭窄的达拉峡谷（Dala Gorge），最终抵达被岩壁环绕的洛伊克巴德村中心。巴士班次密集，通常每小时1-2班，使用瑞士旅行通票（Swiss Travel Pass）可免费乘坐。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "洛伊克巴德的故事，始于大地深处奔涌的热流。关于这些温泉的第一个传说，可以追溯到罗马军团。据说疲惫的士兵在翻越险峻的盖米山口（Gemmi Pass）后，在这里发现了能治愈伤口、舒缓筋骨的“神水”。虽然缺乏确凿的考古证据，但这个传说为它的疗愈名声定下了古老的基调。中世纪时，它的名声已经沿着阿尔卑斯山道传播开来。盖米山口是连接伯尔尼高原和瓦莱州的重要商路与朝圣之路，旅途艰险无比。风尘仆仆的商旅和朝圣者在经历“盖米天梯”——那段令人腿软的木梯栈道——的考验后，能在山脚下的洛伊克巴德泡去一身疲惫，无疑是天堂般的赏赐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在16世纪。当时的一位著名医生帕拉塞尔苏斯（Paracelsus）曾到访此地，并盛赞其温泉的疗效。这份“名人推荐”让洛伊克巴德在贵族和富商阶层中声名鹊起。17、18世纪，它迎来了第一个黄金时代，兴建了第一批像样的浴场和客栈。然而，通往这里的路始终是最大的挑战。在公路开通前，人们只能骑骡子或徒步穿越险峻的峡谷，这反而增添了它的神秘与 exclusivity。来访者名单上包括歌德、大仲马等文化名流，他们不辞辛劳而来，既为疗养，也为寻求灵感，在游记中留下了对这片绝世风景的赞叹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪，随着阿尔卑斯旅游业的兴起和现代医学对水疗的认可，洛伊克巴德开始系统性地发展。更舒适的酒店拔地而起，浴场设施得到改善。但它的“出世”气质并未改变，因为地形决定了它无法大规模扩张。两次世界大战期间，这里因其隐蔽的位置和疗养资源，曾一度被用作伤兵康复中心。战后，随着隧道和公路的最终贯通（尤其是1964年达拉峡谷公路的建成），它才真正向普通旅行者敞开大门。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，洛伊克巴德人深知，他们的根脉与温泉和山岩紧密相连。20世纪末至今的发展，充满了一种谨慎的智慧。他们没有盲目建造巨型酒店，而是专注于提升体验的质量和可持续性。投资建设了世界级的地热供暖系统，为整个村庄供暖，这本身就是现代版的“与自然合作”。今天的浴场，如阿尔彭温泉（Alpentherme），设计上依然强调与环境的对话，巨大的玻璃幕墙将山景引入室内。历史在这里不是标本，而是一股持续流动的、温暖的力量，从罗马时代流传至今，依旧在每一个池子里冒着泡，温暖着每一个沉浸其中的人的关节与心灵。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排至少一整天的时间，充分感受从高山到温泉的完整韵律。最佳抵达时间是前一晚入住，这样你能享受宁静的清晨。早晨应先上山，搭乘Gemmi缆车，在游客大军尚未抵达时，独享高山湖景与历史的寂静。中午前后返回村庄，在阳光最好的时候探索老村巷弄，找一家地道餐厅享用瓦莱州午餐。下午则是沉浸式的温泉时光，建议从视野最开阔的户外池开始，随着日影西斜，轮流体验不同主题的浴场，直到星空浮现。这样的节奏张弛有度，完美融合了自然探险与身心疗愈。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`温泉浴场通常禁止穿着泳衣进入桑拿区，这是当地习俗，请尊重并提前准备大浴巾。高山天气变化极快，即使夏日上山也务必携带防风外套和防水衣物。村里物价秉承瑞士水准，建议在酒店用早餐，并考虑在coop超市购买水果零食作为补充。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一班缆车直上Gemmi山口，站在悬崖边缘眺望深邃的达拉峡谷和脚下如玩具模型般的村庄，感受风的力度与历史的苍茫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Gemmi高原平缓的步道散步至翡翠色的Schwarzsee湖，在绝对的宁静中倾听山峦的呼吸与自己的心跳。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后漫步穿过村庄中心的石板路，路过圣劳伦茨教堂，仔细看那些老屋外墙上用颜料绘制的传统图案与年代铭文。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家有阳光露台的餐厅，点一份瓦莱州拼盘（Raclette或Fondue），就着冰镇的白葡萄酒，看缆车如银线般在绝壁上下穿梭。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后沉浸在Burgerbad或Alpentherme的户外温泉池，让滚烫的泉水与清冷的山风同时作用于你的皮肤，仰望雄鹰在岩壁的纹理间盘旋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在温泉区之间移动时，故意绕进小巷，你会发现一些不对游客开放、只供村民使用的小型公共温泉井，冒着腾腾热气，充满生活气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分，再次选择一个面西的温泉池，看最后一道金色的阳光如何为巨大的岩壁“点燃”，从赭石色变成炽烈的金红再归于沉静的灰蓝。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`入夜后如果精力允许，可以裹紧外套在村庄边缘散步，在没有光污染的山谷里，星空仿佛是从那马蹄形岩壁的缺口倾泻而下的钻石瀑布。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`达拉峡谷入口仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一两小时，站在峡谷公路刚进入开阔地带的路边，用长焦镜头压缩空间，拍出村庄被巨大岩壁怀抱的全景，此时光线温暖，岩壁细节丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Gemmi缆车中段视角`}</h4>
                  <p className="text-sm text-gray-700">{`在缆车上升过程中段，车厢与对面岩壁平行时，迅速抓拍村庄全景镶嵌在谷底、背景是层叠远山的壮丽画面，建议使用高速快门。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老村小巷与岩壁同框`}</h4>
                  <p className="text-sm text-gray-700">{`在村庄上部的小径，寻找那些木质阳台挂满鲜花的传统老屋作为前景，以压倒性的深色岩壁为背景，构成强烈的大小与质感对比，阴天时光线更柔和。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`户外温泉池剪影`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚华灯初上、天空呈宝蓝色时，在邻近的酒店露台或较高处（请确保是公共区域且尊重他人隐私），拍摄温泉池中人们享受的剪影，蒸腾的水汽在灯光下形成梦幻光晕，背景是星空初现的山脊线。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机前务必查询当地法规，村庄及周边许多区域因隐私和安全原因禁飞。在温泉浴场内绝对禁止使用相机或手机拍照，这是对他人隐私的基本尊重。拍摄当地人尤其是农夫或长者时，请先微笑示意并获得同意，他们是风景的一部分，而非道具。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山景阳台民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择村庄边缘靠近山脚的一家家庭式民宿，房间的木质阳台正对绝壁，早晨在鸟鸣中醒来，伸手仿佛能触及岩壁的纹理，主人会为你准备好野餐篮。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感温泉酒店`}</h4>
                  <p className="text-sm text-green-800">{`入住如Hotel Lindner或类似的设计酒店，房间拥有整面落地窗直面山景，室内是温暖的橡木与粗粝石材的对话，并且直通专属的静谧温泉露台。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史疗养酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻一家拥有百年历史、曾接待过文人墨客的老牌疗养酒店，房间挑高很高，可能有古老的瓷砖壁炉，走廊里挂着泛黄的历史照片，体验穿越时光的雍容。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高山小屋风格公寓`}</h4>
                  <p className="text-sm text-purple-800">{`对于家庭或小团体，租住一间带厨房的阿尔卑斯风格木屋公寓，晚上在客厅燃起壁炉，自己烹饪当地食材，体验“成为村民”一日的生活感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（冬季滑雪季和盛夏）务必提前数月预订，尤其是周末。许多酒店提供包含温泉通行证和半膳的套餐，非常超值。村庄非常安全，但部分老酒店可能没有空调，夏季夜间凉爽通常不需要，但怕热的客人可以提前咨询。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开洛伊克巴德许久后，那种独特的感官记忆依然清晰：皮肤上温泉水滑过的触感，与抬头时岩壁冰冷的视觉冲击所形成的奇异反差。这里教会你的，并非如何征服自然，而是如何与之共存，甚至从中获得最深层的抚慰。在那些被天地之力紧紧拥抱的时刻，日常生活中的焦虑与琐碎显得微不足道，你被迫回到一种更本质的状态——只是一个感受着温暖与壮丽的存在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个快节奏的、崇尚“更快更高更强”的世界里，洛伊克巴德提供了一种珍贵的逆反价值。它邀请你停下来，不仅是身体的停驻，更是心灵的沉降。它不提供喧嚣的娱乐，只提供群山永恒的沉默与泉水不息的热度。这是一次向内的旅行，一次与自己、也与地球古老脉搏的对谈。每一位寻求深度游的旅人，都该来此体验一次：在阿尔卑斯最威严的注视下，把自己浸入一片温暖的、来自地心深处的宽容里，从而记住，我们既是渺小的，也是被自然深深眷顾着的。这或许就是它超越所有风景明信片的、真正的魔力。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/castles-of-bellinzona" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝林佐纳三城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castles of Bellinzona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/locarno-piazza-grande-madonna-del-sasso" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛迦诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Locarno</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chur-old-town-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chur Old Town</p>
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
