import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '苏埃罗斯 Zuheros｜隐于科尔多瓦深山的白色奇迹与摩尔荒堡 - 最佳欧洲景点',
  description: '第一眼看到苏埃罗斯，你会倒吸一口凉气。它不像一个被建造出来的村镇，而像某种地质奇观——仿佛远古的巨神将一桶桶浓稠的白色颜料，任性又精准地泼洒在一片狰狞陡峭的石灰岩山体上。那些方方正正的小房子，就那样毫无惧色地贴在悬崖边，层层叠叠，一直堆砌到云雾缭绕的山巅。你开车从橄榄树海洋般的平原驶近，它就像海市蜃',
}

export default function ZuherosAndalusiaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '苏埃罗斯', href: '/destinations/europe' },
            { label: '苏埃罗斯', href: '/attractions/zuheros-andalusia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`苏埃罗斯・Zuheros・西班牙・苏埃罗斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到苏埃罗斯，你会倒吸一口凉气。它不像一个被建造出来的村镇，而像某种地质奇观——仿佛远古的巨神将一桶桶浓稠的白色颜料，任性又精准地泼洒在一片狰狞陡峭的石灰岩山体上。那些方方正正的小房子，就那样毫无惧色地贴在悬崖边，层层叠叠，一直堆砌到云雾缭绕的山巅。你开车从橄榄树海洋般的平原驶近，它就像海市蜃楼般突然浮现，纯净得不真实。空气里是干燥的岩石气息、远处隐约的羊铃声，还有从某户人家敞开的窗扉里飘出的，用橄榄油煎炸火腿的浓郁咸香。
停好车，走进那些窄得只容一人通过的巷子，世界瞬间安静下来。脚下是被无数代人的脚步打磨得温润光滑的石板路，墙面是每年都会被重新粉刷的、耀眼到刺目的雪白。偶尔一扇天蓝色的木门敞开，门后可能是一个种满天竺葵和柠檬树的小天井，一位老妇人正坐在阴影里安静地剥着杏仁。这里的时间流速是缓慢的，你能听见自己的脚步声在石壁间回荡，听见邻居隔着阳台用浓重的安达卢西亚口音拉家常。生活在此地，是一种垂直的、与岩石共生的艺术。
而这一切视觉与生活的序曲，最终都导向那个终极的句点：山顶的摩尔城堡废墟。当你气喘吁吁地沿着最后一段陡峭的步道爬上去，站在荒芜的城墙垛口，一切都有了答案。狂风呼啸而过，卷走所有尘世的喧嚣。眼前是令人腿软的峡谷深渊，身后是那片依偎着山体、仿佛随时会滑落的白色村落。这种荒凉与生机的并置，这种毁灭与坚守的对照，才是苏埃罗斯直击人心的核心魅力。它不是被观赏的盆景，而是一部用岩石、白灰和历史写就的、磅礴的生存史诗。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到苏埃罗斯，你会倒吸一口凉气。它不像一个被建造出来的村镇，而像某种地质奇观——仿佛远古的巨神将一桶桶浓稠的白色颜料，任性又精准地泼洒在一片狰狞陡峭的石灰岩山体上。那些方方正正的小房子，就那样毫无惧色地贴在悬崖边，层层叠叠，一直堆砌到云雾缭绕的山巅。你开车从橄榄树海洋般的平原驶近，它就像海市蜃楼般突然浮现，纯净得不真实。空气里是干燥的岩石气息、远处隐约的羊铃声，还有从某户人家敞开的窗扉里飘出的，用橄榄油煎炸火腿的浓郁咸香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "停好车，走进那些窄得只容一人通过的巷子，世界瞬间安静下来。脚下是被无数代人的脚步打磨得温润光滑的石板路，墙面是每年都会被重新粉刷的、耀眼到刺目的雪白。偶尔一扇天蓝色的木门敞开，门后可能是一个种满天竺葵和柠檬树的小天井，一位老妇人正坐在阴影里安静地剥着杏仁。这里的时间流速是缓慢的，你能听见自己的脚步声在石壁间回荡，听见邻居隔着阳台用浓重的安达卢西亚口音拉家常。生活在此地，是一种垂直的、与岩石共生的艺术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这一切视觉与生活的序曲，最终都导向那个终极的句点：山顶的摩尔城堡废墟。当你气喘吁吁地沿着最后一段陡峭的步道爬上去，站在荒芜的城墙垛口，一切都有了答案。狂风呼啸而过，卷走所有尘世的喧嚣。眼前是令人腿软的峡谷深渊，身后是那片依偎着山体、仿佛随时会滑落的白色村落。这种荒凉与生机的并置，这种毁灭与坚守的对照，才是苏埃罗斯直击人心的核心魅力。它不是被观赏的盆景，而是一部用岩石、白灰和历史写就的、磅礴的生存史诗。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`苏埃罗斯`} />
                <InfoRow label="英文名称" value={`Zuheros`} />
                <InfoRow label="正式名称" value={`Zuheros`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`苏埃罗斯`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了摩尔文明与基督教文明在安达卢西亚山地拉锯与融合的活化石村落。`} />
                <InfoRow label="建筑特色" value={`纯白的房屋如同融化的雪糕般层层“泼洒”在险峻的石灰岩山脊上，与裸露的灰色岩壁形成极致对比，山顶的城堡废墟是这一切的惊叹号。`} />
                <InfoRow label="建筑风格" value={`安达卢西亚山地民居风格与摩尔军事建筑的结合体，以纯白外墙、红瓦屋顶、狭窄巷道为特色。`} />
                <InfoRow label="文化价值" value={`保留了安达卢西亚深处最原始的山地生活节奏与农业传统，是理解西班牙“白色小镇”文化精髓与历史层理的绝佳样本。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。主要景点如摩尔城堡（Castillo de Zuheros）和洞穴（Cueva de los Murciélagos）有固定开放时间，通常为夏季（4月至9月）上午10:00至下午14:00，下午17:00至19:00；冬季（10月至3月）开放时间缩短，常为上午10:00至下午14:00，下午16:00至18:00。每周一通常闭馆，节假日安排可能有变，强烈建议出发前查阅当地旅游局最新公告。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。参观摩尔城堡和蝙蝠洞穴通常需购买联票，约5-8欧元。学生、65岁以上老人及团体可享折扣，具体价格以现场公告为准。小镇博物馆可能有小额捐赠建议。`} />
              <InfoRow label="地址" value={`Plaza de la Paz, 1, 14870 Zuheros, Córdoba, Spain`} />
              <InfoRow label="交通方式" value={`最便捷的方式是自驾。从科尔多瓦市中心出发，沿A-431公路向东南行驶约40公里，转入CO-6208乡道，一路蜿蜒上山，全程约1小时。沿途是连绵的橄榄园，风光极美。公共交通非常不便：可从科尔多瓦巴士站乘坐前往巴埃纳（Baena）方向的班车，班次稀少（每天约2-3班），在巴埃纳转乘出租车前往苏埃罗斯（约15分钟车程）。强烈建议租车，不仅能自由掌控时间，还能探索周边“白色小镇之路”的其他村落。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "苏埃罗斯的故事，始于岩石与防御。公元9世纪左右，摩尔人在这座几乎无法攀爬的石灰岩山脊上，建立了最初的军事前哨。它的名字“Zuheros”很可能源于阿拉伯语“Suhayr”，意为“小岩石”。在那个群雄割据的年代，这个位置堪称天才之选：三面皆是垂直的悬崖，俯瞰着通往科尔多瓦哈里发国腹地的要道，易守难攻。最初的定居者们，在岩石中开凿住所，用本地材料建造堡垒，不是为了舒适，而是为了生存。山巅的城堡，就是他们睥睨周遭世界的眼睛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "基督教收复失地运动的浪潮，在13世纪席卷至此。1240年，费尔南多三世国王的军队攻克了这座要塞。城堡易主，但它的战略价值丝毫未减。新来的基督教领主——通常是与王室关系密切的骑士家族——接管了这里。他们加固了城堡，并在其庇护下，山腰的村落逐渐扩张。摩尔时期的建筑技艺与生活智慧被保留下来，尤其是那粉刷白墙的传统（不仅为了美观，更能反射炽烈的阳光、保持室内凉爽），与基督教的文化符号悄然融合。你可以想象，那些狭窄巷道里，曾同时回响着阿拉伯语和卡斯蒂利亚语，弥漫着香料与熏火腿混合的奇异香气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后的几个世纪相对平静，苏埃罗斯成为了一座典型的安达卢西亚山地农业村镇。橄榄园和杏仁树是经济的支柱。城堡的军事功能逐渐褪去，在岁月和风雨中慢慢颓圮，但它始终是村镇的精神图腾。人们继续粉刷房屋，在悬崖边开辟出小小的菜园，生活艰苦却自给自足。这里远离主要的商业通道，也因此意外地躲过了大规模的“现代化”改造，将中世纪以来的城镇肌理和生活方式，像琥珀一样封存起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到20世纪的旅游热潮和“西班牙最美村庄”的评选，才将苏埃罗斯重新推向世人的视野。但令人欣慰的是，旅游业并未吞噬这里。没有成群的纪念品商店，没有喧闹的酒吧。年轻人或许向往城市，但仍有不少家族坚守于此。他们或许是那个最初建造城堡的摩尔士兵的后裔，或许是某个中世纪基督教骑士封臣的子孙，血液里早已混合了多种文化的记忆。如今，他们守护的不再是军事要塞，而是一种在全球化时代近乎奢侈的宁静、一种与自然地貌生死相依的古老智慧。苏埃罗斯的每一道石缝，都还在讲述着关于坚韧、融合与时间的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点前抵达，此时阳光柔和，能将白色建筑群照耀得晶莹剔透，且大批一日游游客尚未到来。整体游览需要大约4-5小时，节奏应是“先抑后扬”——先沉浸于小镇巷弄的静谧生活感，最后以攀登城堡的壮阔视野作为高潮。从主停车场（镇口）开始，先别急着上山，而是像水滴一样渗入迷宫般的巷子，感受清晨的市井气息。然后顺着明显的路标缓缓向城堡方向迂回上行，途中参观小广场和博物馆（如开放）。将体力最充沛的时候留给最后一段登顶之路。下山后，正好在镇中心广场找家餐厅享用迟来的午餐，看日光慢慢变得金黄。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适防滑的徒步鞋，登城堡的最后一段是原始的石阶和土路，高跟鞋或凉鞋是灾难。
小镇餐馆的午间营业时间通常很西班牙（下午1:30甚至2点才开门），规划好用餐时间，或者自备一些零食和水。
夏季午后阳光极其暴烈，攀登城堡务必安排在清晨或傍晚，并戴好帽子、涂抹高倍数防晒霜。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从镇口卵石铺就的主停车场出发，让自己迷失在那些散发着昨夜雨水和茉莉花清香、墙壁雪白到晃眼的寂静巷道里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“和平广场”稍作停留，看本地老人坐在长椅上晒太阳，或者走进街角那家面包房买一个刚出炉的、撒着粗盐的安达卢西亚传统面包圈。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着指示牌拜访小镇民俗博物馆，那里陈列着古老的农具和纺织机，瞬间把你拉回几十年前依靠橄榄与山羊为生的质朴岁月。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`开始沿着有明显坡度、两侧墙壁爬满九重葛的“城堡路”向上行走，不时回头，脚下白色房屋的屋顶如波浪般在你眼前层层展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达城堡山门前的观景平台，在这里做好心理和体力准备，深呼吸，俯瞰脚下令人眩晕的巴伊莱纳峡谷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀爬最后一段建于岩石之上的陡峭阶梯，亲手触摸那些饱经风霜、粗糙冰冷的摩尔时代巨石城墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站立在城堡主塔楼的废墟之巅，让地中海的烈风毫无阻挡地穿透你的身体，看鹰隼在脚下深渊般的峡谷中盘旋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后选择广场旁一家有遮阳棚的餐厅，点一份本地特色的“阿拉布拉羊肉”或“凉汤”，配上一杯蒙蒂利亚-莫利莱斯产区的淡酒，慢慢回味刚才的震撼。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`峡谷全景俯瞰点`}</h4>
                  <p className="text-sm text-gray-700">{`位于城堡山门下方的小平台，最佳时间是日出后一小时或日落前一小时，侧光能让白色村庄和峡谷的岩壁产生强烈的质感和层次感，用广角镜头将村庄、悬崖和远山一同纳入画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`白色巷弄光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条有强烈阳光直射和深邃阴影的窄巷（如Calle Alta附近），在上午十点或下午四点左右，等待一个当地人或一只猫走过，捕捉光影切割街道和人物形成的戏剧性瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡废墟框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`登上城堡后，寻找那些残存的石门或窗框，以它们为画框，聚焦框外无限延伸的橄榄树平原和远山，营造一种穿越时空的窥视感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`村庄侧面全景`}</h4>
                  <p className="text-sm text-gray-700">{`开车离开时，在通往巴埃纳的CO-6208公路某个转弯处会有一个野观景台，在此停车，用长焦镜头压缩空间，拍摄苏埃罗斯如同白色瀑布般从山顶倾泻而下的经典全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄门窗和天井前最好微笑示意或征得同意，许多老人不喜欢被直接拍摄正脸。`}</li>
                <li>• {`无人机飞行在此类受保护的历史村镇和自然公园上空可能有严格限制，起飞前务必查清当地法规，最好完全避免使用，以免打扰这份珍贵的宁静。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`岩石之家民宿`}</h4>
                  <p className="text-sm text-blue-800">{`由一座数百年的老石头房子改造而成，卧室的窗户直接开凿在岩壁里，夜晚能听到最纯粹的山风呼啸，主人会为你准备自家果园采摘的水果。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`悬崖边缘乡村旅馆`}</h4>
                  <p className="text-sm text-green-800">{`位置绝佳，几乎就在城堡脚下，部分房间带有一个小小的悬空露台，早餐是女主人亲手制作的当地糕点，配着峡谷吹来的晨风一起下咽。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`橄榄园农庄体验`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇下方宁静的橄榄园中，独立的小屋被百年橄榄树环绕，你可以参与清晨的采摘（季节性），夜晚在没有光污染的星空下，享受绝对的静谧。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`科尔多瓦城市落脚点`}</h4>
                  <p className="text-sm text-purple-800">{`如果偏爱城市便利，可以选择住在科尔多瓦历史中心，白天驾车来苏埃罗斯深度游览，晚上回归城市的餐厅与文化生活，这是一种灵活折中的方案。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "苏埃罗斯本身的住宿选择非常有限且极具特色，务必提前数月预订，尤其是旅游旺季（春、秋两季）和周末。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "住在村里才能真正感受它入夜后的魔力：当游客散去，星空璀璨，只有风声和偶尔的狗吠，那种被世界遗忘的孤独感是体验的一部分，但对有些人来说可能过于寂静。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开苏埃罗斯许久，那片贴在悬崖上的白色，和山顶废墟的荒凉轮廓，依然会在某个安静的午后，猛地撞进脑海。它带来的触动，不同于那些宏伟的大教堂或华丽的宫殿。那是一种关于“坚持”的纯粹力量。是人如何在最险峻、最贫瘠的土地上，扎根、粉刷、歌唱、相爱，一代又一代，将生活过成一种傲然的风景。城堡的废墟时刻提醒你一切繁华终将归于尘土，但山下那些每年刷新、生生不息的白色，又无言地诉说着生命本身的韧性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、一切都被快速消费和更新的时代，苏埃罗斯的存在，像一个固执的停顿键。它告诉你，有些美，生于险境，成于时间，无需讨好任何人。它不提供便利的设施或刺激的娱乐，它只提供一种视角——当你站在山巅，被旷古的长风吹拂，看着人类渺小的居所与亘古的自然以如此激烈的方式对话时，你会重新思考何为家园，何为永恒。对于每一位厌倦了表象、渴望触碰土地灵魂的深度旅人来说，苏埃罗斯不是一次轻松的观光，而是一场直抵内心的地质考古。你会在这里，挖到一些被现代生活掩埋已久的东西。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/albarracin-spain-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔瓦拉辛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Albarracín</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/olvera-white-hilltop-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔韦拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Olvera</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/patones-de-arriba" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕托内斯德阿里瓦（上帕托内斯村）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Patones de Arriba</p>
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
