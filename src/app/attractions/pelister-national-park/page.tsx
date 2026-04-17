import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩利斯特国家公园 Pelister National Park｜探寻稀有马其顿松与神秘“高山之眼”冰川湖 - 最佳欧洲景点',
  description: '车子刚拐进上山的路，整个世界仿佛被按下了静音键，只剩下引擎低沉的轰鸣和窗外越来越浓的、带着针叶清甜的冷冽空气。第一眼看见佩利斯特，你会明白“国家公园”这个词在这里显得有些苍白。它不是被栅栏围起来的观赏区，而是一个完整、呼吸着的古老生态系统，带着一种沉默而庄严的压迫感，迎面扑来。 山路两旁，那些独特的',
}

export default function PelisterNationalParkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '佩利斯特国家公园', href: '/attractions/pelister-national-park' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩利斯特国家公园・Pelister National Park・北马其顿・比托拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐进上山的路，整个世界仿佛被按下了静音键，只剩下引擎低沉的轰鸣和窗外越来越浓的、带着针叶清甜的冷冽空气。第一眼看见佩利斯特，你会明白“国家公园”这个词在这里显得有些苍白。它不是被栅栏围起来的观赏区，而是一个完整、呼吸着的古老生态系统，带着一种沉默而庄严的压迫感，迎面扑来。
山路两旁，那些独特的马其顿松开始显现它们的身姿。它们不像普通松树那样笔直冲天，而是以一种近乎倔强的姿态盘踞在岩石上，树皮是深沉的铁锈红色，皴裂如龙鳞。摇下车窗，那股清冷又带着树脂芬芳的气味瞬间灌满车厢，这是地球上只有在这片海拔才能闻到的、穿越了数百万年的气息。当地朋友说，马其顿人管这叫“佩利斯特的呼吸”，是山神的叹息。
当你徒步深入，走到一片林间空地，忽然间，你会发现这里的“安静”是有层次的。远处是风掠过松涛的绵长海啸声，近处是脚踩在千万年腐殖质上松软的嘎吱声，偶尔夹杂着一两声尖锐的鸟鸣划破寂静。阳光被高耸的树冠切割成无数道晃动的光柱，灰尘在光里跳舞，时间在这里似乎失去了刻度。你不再是观光客，而是不小心闯入了一个远比人类文明更悠久的绿色圣殿的访客，不由得放轻了脚步，压低了呼吸。
而这一切的序章，都是为了引领你走向那个最终的秘境——“佩利斯特之眼”。当你气喘吁吁地翻过最后一个垭口，那片冰蓝色的湖水就这样毫无征兆地、平静地凝视着你。那一刻，所有跋涉的辛苦都消失了，只剩下一种近乎神圣的悸动。它不像其他高山湖那样明媚，它的蓝是一种冷峻的、深不可测的蓝，像一块被遗忘在时间之外的巨大蓝宝石，又像是山脉真正的心灵之窗。你坐在湖边，吃着简单的午餐，看着云影在水面快速掠过，会恍惚觉得，不是你在看风景，而是这片湖，这座山，正在静静地阅读着你。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚拐进上山的路，整个世界仿佛被按下了静音键，只剩下引擎低沉的轰鸣和窗外越来越浓的、带着针叶清甜的冷冽空气。第一眼看见佩利斯特，你会明白“国家公园”这个词在这里显得有些苍白。它不是被栅栏围起来的观赏区，而是一个完整、呼吸着的古老生态系统，带着一种沉默而庄严的压迫感，迎面扑来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`山路两旁，那些独特的马其顿松开始显现它们的身姿。它们不像普通松树那样笔直冲天，而是以一种近乎倔强的姿态盘踞在岩石上，树皮是深沉的铁锈红色，皴裂如龙鳞。摇下车窗，那股清冷又带着树脂芬芳的气味瞬间灌满车厢，这是地球上只有在这片海拔才能闻到的、穿越了数百万年的气息。当地朋友说，马其顿人管这叫“佩利斯特的呼吸”，是山神的叹息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你徒步深入，走到一片林间空地，忽然间，你会发现这里的“安静”是有层次的。远处是风掠过松涛的绵长海啸声，近处是脚踩在千万年腐殖质上松软的嘎吱声，偶尔夹杂着一两声尖锐的鸟鸣划破寂静。阳光被高耸的树冠切割成无数道晃动的光柱，灰尘在光里跳舞，时间在这里似乎失去了刻度。你不再是观光客，而是不小心闯入了一个远比人类文明更悠久的绿色圣殿的访客，不由得放轻了脚步，压低了呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切的序章，都是为了引领你走向那个最终的秘境——“佩利斯特之眼”。当你气喘吁吁地翻过最后一个垭口，那片冰蓝色的湖水就这样毫无征兆地、平静地凝视着你。那一刻，所有跋涉的辛苦都消失了，只剩下一种近乎神圣的悸动。它不像其他高山湖那样明媚，它的蓝是一种冷峻的、深不可测的蓝，像一块被遗忘在时间之外的巨大蓝宝石，又像是山脉真正的心灵之窗。你坐在湖边，吃着简单的午餐，看着云影在水面快速掠过，会恍惚觉得，不是你在看风景，而是这片湖，这座山，正在静静地阅读着你。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩利斯特国家公园`} />
                <InfoRow label="英文名称" value={`Pelister National Park`} />
                <InfoRow label="正式名称" value={`Pelister National Park`} />
                <InfoRow label="国家" value={`北马其顿`} />
                <InfoRow label="城市" value={`比托拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`巴尔干半岛最古老的国家公园之一，是北马其顿生态皇冠上最璀璨的绿宝石。`} />
                <InfoRow label="建筑特色" value={`这里没有人为的建筑奇观，大自然的鬼斧神工就是其最宏伟的特色——由古老冰川雕琢出的锯齿状山峰、如宝石般散落的高山湖泊，以及绵延无尽的稀有松林。`} />
                <InfoRow label="建筑风格" value={`纯粹的、未经修饰的自然主义“风格”，是第四纪冰川运动和数万年生物演化的杰作。`} />
                <InfoRow label="文化价值" value={`对于马其顿人而言，它不仅仅是一个公园，更是一个民族的精神高地，是神话、徒步传统和顽强生命力的自然象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公园本身全年24小时开放。位于公园主要入口处的游客信息中心开放时间通常为上午9:00至下午5:00，但季节变化较大，夏季（6月至9月）可能延长至下午6点，冬季（11月至3月）可能缩短至下午4点或仅在周末开放。进入公园内的某些特定小径或区域可能受天气和积雪影响，尤其在冬季，建议行前务必通过官网或致电游客中心确认最新情况。`} />
              <InfoRow label="门票价格" value={`进入佩利斯特国家公园本身不收取门票费用，享受大自然完全免费。但如果您自驾前往，在主要的入口停车场停车会收取少量象征性的管理费，约合2-3欧元/天。公园内由第三方运营的设施，如某些山地小屋、导览徒步服务或博物馆可能需要单独付费，价格一般在5-15欧元不等。`} />
              <InfoRow label="地址" value={`Pelister National Park, Bitola 7000, North Macedonia`} />
              <InfoRow label="交通方式" value={`从北马其顿首都斯科普里国际机场出发，最灵活的方式是租车自驾。取车后沿A3/E65高速公路向南行驶，车程约2小时即可抵达比托拉市。从比托拉市中心到公园的主要入口（靠近“Pelister”酒店）仅有约10公里，继续沿蜿蜒的山路行驶约20-30分钟即可深入公园腹地。公共交通方面，从比托拉市中心巴士站有不定期的本地巴士开往山脚下的村庄（如Magarevo），但从村庄仍需徒步或打车才能进入公园核心区，班次稀少且时间不固定，强烈建议自驾或预订从比托拉出发的当地一日游包车服务。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`佩利斯特的故事，不是刻在石碑上，而是写在地质层的褶皱里和松树的年轮中。它的前世，要追溯到遥远的冰川时期。当时，整个巴尔干半岛的高山都被厚厚的冰盖所覆盖，像一台冷酷而缓慢的雕刻机。我们今天看到的佩利斯特山脉那些尖锐如狼牙的山峰（最高峰“Pelister”海拔2601米），以及山坳里那些如泪滴般的湖泊，包括最著名的“大湖”和“小湖”（合称“佩利斯特之眼”），都是古冰川撤退时，用亿万年的时光一寸寸刨蚀、打磨出来的杰作。它们是地球冰河时代的遗产，是凝固的地质史诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当冰盖退去，生命开始在这片新生的、贫瘠的岩石上扎根。其中最有名的居民，便是马其顿松。这种树是自然的隐士和斗士，它是松树家族中一个极其古老而稀有的分支，全球几乎只集中生长在佩利斯特及周边有限的区域。科学家们认为，它是在最后一次冰期后，被困在这片高山“孤岛”上的活化石。它进化出了适应严酷高山环境的本领：扭曲的树干以减少风阻，深扎岩缝的根系，以及那标志性的红褐色树皮。每一棵存活至今的马其顿松，都是穿越数万年气候剧变的幸存者，它们本身就是一部活的自然史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`至于人类与这座山的故事，则充满了神话与现实的交织。在古老的斯拉夫和当地传说中，佩利斯特山是一位沉睡巨人的化身，那些湖泊是他的眼泪，松林是他的毛发。近代以来，这座山成为了比托拉乃至整个马其顿地区人民的精神后花园。20世纪初，随着民族意识的觉醒和阿尔卑斯式徒步文化的传入，这里的登山和徒步活动开始兴起。真正改变它命运的，是1948年。那一年，新成立的南斯拉夫政府正式将其宣布为国家公园，成为该国最早受到法律保护的自然区域之一。这不仅仅是一项环保政策，在当时的背景下，更是一种将民族自然遗产与国家认同紧密相连的象征性举动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在随后的几十年里，尽管外部世界政局变迁，佩利斯特始终保持着它的宁静与野性。它见证了登山者的探险，牧羊人的转场，也庇护了战时珍贵的动植物。南斯拉夫解体后，北马其顿独立，佩利斯特国家公园的旗帜被继承下来，其生态价值愈发受到国际重视。今天，它不仅是徒步者和自然爱好者的天堂，更是科学家研究生物多样性、气候变化和冰川遗迹的重要基地。从冰川的凿刻，到松树的坚守，再到人类的守护，佩利斯特的每一层历史，都叠加成了今天我们所见的、这座充满原始力量与静谧之美的圣山。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略佩利斯特的精髓，建议安排一整天的时间（至少8-10小时）。最佳方式是清晨7点左右从比托拉出发，避开日间的炎热和可能的人流（尽管这里从未拥挤）。上午的精力最为充沛，光线也最适合摄影，用于完成最具挑战性的徒步——前往“佩利斯特之眼”（高山湖）。午后下山，可以探索海拔较低的马其顿松林和溪流地带，感受截然不同的微气候与景致。这样的安排遵循了“先难后易”的原则，让你在体力最好的时候攻克核心景观，下午则可以悠闲地沉浸在大森林的怀抱中，慢慢回味。记得，在这里，节奏慢下来才是对的。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`山区天气瞬息万变，即使在夏季，山顶湖边也可能突然刮风降温，务必携带防风防雨外套和保暖层。徒步鞋是绝对必需品，小径多碎石和树根。除了游客中心，公园内几乎没有手机信号，也无商业设施，必须自带足量的水和食物，并带走所有垃圾。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口的“科涅沃”休息区出发，沿着清晰标记的红色徒步小径开始向“大湖”进发，最初的一段是在茂密的松林和山毛榉林中平缓穿行。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`大约一小时后小径开始变得陡峭，此时会经过一片壮观的巨石区，记得回头眺望，比托拉平原的景色在脚下缓缓展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上攀登，当空气中开始弥漫湿润的水汽，并听到隐约的溪流声时，你就离目标不远了，最终穿过一片低矮的灌木丛，“佩利斯特之眼”中的“大湖”便会如奇迹般映入眼帘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在湖边找一块平坦的岩石坐下，享用自带的三明治和热茶，静静观看光影在湖面和周围险峻山峰上的变幻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回程不必原路返回，可以选择另一条稍长但更平缓的环线，这条小路会带你经过“小湖”并穿越一片树干扭曲如艺术品的古老马其顿松纯林。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后如果还有余力，一定要去游客中心附近那条被称为“森林浴”的轻松环形步道走一走，用所有感官去沉浸式地触摸、聆听和呼吸这片古老的森林。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前驱车到公园东侧的“观景台”停车场，那里是欣赏佩利斯特主峰在金色夕阳下呈现“日照金山”奇观的绝佳位置。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`“大湖”东侧崖壁视角`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至中午时分，太阳位于东南方，光线能完全照亮湖对岸的峭壁和湖水，用广角镜头可以拍下湖泊像一只湛蓝眼睛凝望天空的经典全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`古老马其顿松林逆光拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`选择下午三四点阳光西斜时，深入“小湖”下方的松林，让阳光从树干缝隙间穿透，可以捕捉到空气中明显的丁达尔光束和松树剪影，充满神秘感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“石头河”地貌特写`}</h4>
                  <p className="text-sm text-gray-700">{`在前往湖泊途中的巨石区，利用侧光（上午或下午）拍摄那些被冰川搬运、布满苔藓的巨型花岗岩，着重刻画岩石的纹理和渺小的人类徒步者形成的尺度对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`佩利斯特主峰远眺`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，在公园东侧公路的任意一个开阔弯道停车，用长焦镜头压缩空间，捕捉最后一缕阳光将锯齿状的山峰染成炽烈金红色的震撼画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以极大消除湖面和水汽的反光，让湖水颜色更加深邃饱和。请绝对保持距离，不要为了拍照而攀爬湖边脆弱的岩壁或践踏湖岸敏感的湿地植被，用长焦镜头也能获得好作品。尊重自然永远是第一位的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山间木屋沉浸体验`}</h4>
                  <p className="text-sm text-blue-800">{`预订公园内唯一的“科涅沃”山地木屋，虽然设施简朴（共用卫生间），但能让你在星空下入睡，在松涛声中醒来，并获得清晨独享湖泊的绝佳机会。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`比托拉老城文化之宿`}</h4>
                  <p className="text-sm text-green-800">{`下山后回到比托拉，入住奥斯曼风格老宅改造的精品酒店，坐在充满东方情调的庭院里回味一天的登山之旅，并用一顿正宗的地方大餐犒劳自己。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园牧歌家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`选择公园山脚下Magarevo或Dihovo村庄的家庭民宿，主人通常会提供丰盛的家常早餐和自酿水果酒，让你深度体验马其顿乡村的温暖 hospitality。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`比托拉郊外静谧庄园`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求舒适与宁静，可以选择位于比托拉市郊、坐落在果园中的小型庄园酒店，享受现代化的设施和开阔的田园景观，同时方便次日继续探索。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`公园内的山地木屋床位非常有限，尤其在7-8月旺季，必须提前数月通过登山协会网站或电话预订。比托拉的住宿选择丰富，但老城区的酒店可能停车不便，建议预订时确认停车设施。山脚下村庄的民宿是体验当地风情的好选择，但可能需要一定的语言沟通能力或使用翻译软件。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开佩利斯特很久之后，那抹冷冽的松香和那片深蓝的湖影，还会在不经意间窜入脑海。我发现，它馈赠给我的，远不止几张照片和一段徒步记忆。它更像一个巨大的、活着的隐喻。那些在岩缝中顽强扭曲生长的马其顿松，仿佛在诉说生命的韧性——环境越是严苛，姿态越是独特美丽。而那一双沉静的“高山之眼”，则像一位永恒的观察者，倒映着流云、星空和偶尔经过的我们，提醒着人类在自然时间尺度下的短暂与渺小。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个被信息爆炸和快速消费旅游裹挟的时代，佩利斯特提供了一种稀缺的“深潜”体验。这里没有打卡栏杆，没有喧闹的纪念品商店，甚至没有稳定的手机信号。它迫使你关闭外界的噪音，重新打开最原始的感官：用脚去丈量土地的坡度，用皮肤去感受海拔带来的温度变化，用眼睛去追踪光影在森林里的舞蹈。它不讨好你，只是沉默地存在那里，而你所有的收获，都来自于你主动的走近与聆听。这正是深度旅行的真谛——不是收集地名，而是在某个地方，让风景反过来塑造你内心的地貌。如果你也渴望这样一场与古老自然和真实自我对话的旅程，那么，请把佩利斯特放进你的清单，它值得你专程前往，并为之付出汗水与时间。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/skopje-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯科普里老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Skopje Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tetovo-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    泰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">泰托沃老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tetovo Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/skopje-old-bazaar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯科普里老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Skopje Old Town</p>
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
