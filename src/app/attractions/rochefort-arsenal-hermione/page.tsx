import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '罗什福尔兵工厂与赫敏号 Arsenal de Rochefort (L\'Hermione)｜走进太阳王的海军梦，亲手触摸18世纪的风帆传奇 - 最佳欧洲景点',
  description: '第一眼看到它，你可能会愣一下。这里没有想象中的金碧辉煌，取而代之的是一种巨大、沉默而精确的力量感。夏朗德河在这里拐了一个温柔的弯，河水是浑浊的土黄色，带着大西洋的气息。空气里弥漫着一股奇特的味道——干燥的木材、陈年的焦油，还有一点点旧绳索和海盐混合的气味。你的左边，是绵延的、用浅色石头砌成的长长拱廊',
}

export default function RochefortArsenalHermionePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '滨海夏朗德省罗什福尔', href: '/destinations/france' },
            { label: '罗什福尔兵工厂与赫敏号', href: '/attractions/rochefort-arsenal-hermione' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`罗什福尔兵工厂与赫敏号・Arsenal de Rochefort (L'Hermione)・法国・滨海夏朗德省罗什福尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到它，你可能会愣一下。这里没有想象中的金碧辉煌，取而代之的是一种巨大、沉默而精确的力量感。夏朗德河在这里拐了一个温柔的弯，河水是浑浊的土黄色，带着大西洋的气息。空气里弥漫着一股奇特的味道——干燥的木材、陈年的焦油，还有一点点旧绳索和海盐混合的气味。你的左边，是绵延的、用浅色石头砌成的长长拱廊和仓库，线条严肃而整齐，像一排永远立正的士兵。而你的右边，河面上，赫然停泊着一艘巨大的三桅帆船，那深色的船体、层层叠叠的帆缆和直刺天空的桅杆，在阴郁的法国西部天空下，构成了一幅极具冲击力的时空错位画面。这就是罗什福尔，一个为战争与远航而生的地方。
在本地人眼里，这里远不止是个旅游景点。它是整个城市的“父亲”。傍晚时分，你会看到老夫妇沿着河岸散步，指着赫敏号对孙辈说：“看，我们造的。”话语里满是自豪。咖啡馆的老板可能曾祖辈就是这里的捻缝工。当你触摸兵工厂那些被无数双手磨得发亮的橡木大门时，你触摸的是一个社区持续了三个多世纪的集体记忆。这里的核心魅力，不在于观看，而在于“沉浸”。你不再是隔着玻璃橱窗看历史，而是站在曾经倾倒滚烫沥青的干船坞底，走在摇晃的甲板上，听着帆缆在风中的呜咽。历史在这里是有温度、有气味、有触感的。
最打动人心的，或许是那种极致的“复刻”所代表的执念。赫敏号不是迪士尼式的布景，它是一艘真正能远航的战舰。为了重建它，人们寻找相同的木材，使用相同的工具，学习早已失传的技艺。在这里，你能深刻体会到，所谓“传统”并非死物，而是一种可以被重新唤醒、并再次赋予生命的巨大热情。当你知道眼前这艘庞然大物的每一颗钉子，都像227年前一样被手工敲入，你会对“制造”这个词产生全新的敬意。它讲述的不是一个关于征服的故事，而是一个关于如何耐心地、一凿一斧地，将梦想变为可触摸现实的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到它，你可能会愣一下。这里没有想象中的金碧辉煌，取而代之的是一种巨大、沉默而精确的力量感。夏朗德河在这里拐了一个温柔的弯，河水是浑浊的土黄色，带着大西洋的气息。空气里弥漫着一股奇特的味道——干燥的木材、陈年的焦油，还有一点点旧绳索和海盐混合的气味。你的左边，是绵延的、用浅色石头砌成的长长拱廊和仓库，线条严肃而整齐，像一排永远立正的士兵。而你的右边，河面上，赫然停泊着一艘巨大的三桅帆船，那深色的船体、层层叠叠的帆缆和直刺天空的桅杆，在阴郁的法国西部天空下，构成了一幅极具冲击力的时空错位画面。这就是罗什福尔，一个为战争与远航而生的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在本地人眼里，这里远不止是个旅游景点。它是整个城市的“父亲”。傍晚时分，你会看到老夫妇沿着河岸散步，指着赫敏号对孙辈说：“看，我们造的。”话语里满是自豪。咖啡馆的老板可能曾祖辈就是这里的捻缝工。当你触摸兵工厂那些被无数双手磨得发亮的橡木大门时，你触摸的是一个社区持续了三个多世纪的集体记忆。这里的核心魅力，不在于观看，而在于“沉浸”。你不再是隔着玻璃橱窗看历史，而是站在曾经倾倒滚烫沥青的干船坞底，走在摇晃的甲板上，听着帆缆在风中的呜咽。历史在这里是有温度、有气味、有触感的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，或许是那种极致的“复刻”所代表的执念。赫敏号不是迪士尼式的布景，它是一艘真正能远航的战舰。为了重建它，人们寻找相同的木材，使用相同的工具，学习早已失传的技艺。在这里，你能深刻体会到，所谓“传统”并非死物，而是一种可以被重新唤醒、并再次赋予生命的巨大热情。当你知道眼前这艘庞然大物的每一颗钉子，都像227年前一样被手工敲入，你会对“制造”这个词产生全新的敬意。它讲述的不是一个关于征服的故事，而是一个关于如何耐心地、一凿一斧地，将梦想变为可触摸现实的故事。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`罗什福尔兵工厂与赫敏号`} />
                <InfoRow label="英文名称" value={`Arsenal de Rochefort (L'Hermione)`} />
                <InfoRow label="正式名称" value={`罗什福尔皇家兵工厂与赫敏号复刻舰`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`滨海夏朗德省罗什福尔`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是法兰西帝国海军雄心的摇篮，也是连接新大陆的自由象征。`} />
                <InfoRow label="建筑特色" value={`太阳王时代留存至今的完整海军工业集群与一艘严格按照18世纪工艺重建的传奇风帆战舰。`} />
                <InfoRow label="建筑风格" value={`古典主义与实用主义结合的法式军工建筑，辅以18世纪晚期风帆战舰的典型制式。`} />
                <InfoRow label="文化价值" value={`它是一本关于航海文明、帝国野心与工匠精神的立体百科全书。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`兵工厂建筑群及博物馆全年开放，夏季（4月至9月）通常为9:30-19:00，冬季（10月至3月）为10:00-18:00，每周二闭馆（7、8月除外）。赫敏号复刻舰的参观时间取决于其停泊状态（常在春季至秋季），具体日期与时间表需提前在官网查询，因其可能出海航行或进行维护。节假日开放时间会有调整。`} />
              <InfoRow label="门票价格" value={`提供多种票务选择：单兵工厂区域门票约12欧元；赫敏号参观票约11欧元；最推荐的是“通行证”联票（包含兵工厂、赫敏号及缆绳工坊），约18欧元。优惠适用于学生、青少年及团体。6岁以下儿童免费。网上购票通常可享受小幅折扣并避免排队。`} />
              <InfoRow label="地址" value={`Place de la Galissonnière, 17300 Rochefort, France`} />
              <InfoRow label="交通方式" value={`最近的主要交通枢纽是拉罗谢尔。从拉罗谢尔火车站（Gare de La Rochelle）乘坐TER区域火车前往罗什福尔火车站（Gare de Rochefort），车程约25-30分钟，班次频繁。从拉罗谢尔机场出发，可先乘出租车或公交至火车站再转火车。自驾从拉罗谢尔沿D733公路向东南行驶约30公里即达。在罗什福尔城内，景点集中于夏朗德河畔，从火车站步行约15-20分钟即可抵达，沿途标志清晰。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从一个雄心勃勃的男人和一位更雄心勃勃的国王说起。1666年，路易十四的财政大臣柯尔贝尔，正为打造一支能与英国、荷兰抗衡的强大海军而焦头烂额。布列斯特等主要军港太远，太容易受到攻击。他的目光落在了夏朗德河畔这片宁静的沼泽地。这里深入内陆，易于防守，且通过河道能迅速连接大西洋。于是，一声令下，一座完全为海军服务的“理想城”——罗什福尔，从零开始拔地而起。在太阳王无尽的黄金支持下，兵工厂迅速成为欧洲最先进、最庞大的海军工业复合体。巅峰时期，这里有一万五千名工人在此劳作，从铸造大炮到编织缆绳，从雕刻船艏像到缝制巨帆，形成了一个几乎完全自给自足的微缩王国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而赫敏号，就是从这个王国驶出的最著名的使者之一。1779年，一艘装备了26门火炮的轻型护卫舰在这里的干船坞下水。它本身并非舰队中最大最强的战舰，但命运为它选择了非凡的乘客——年轻的拉法耶特侯爵。1780年，赫敏号载着这位怀揣自由理想的法国贵族，冲破英国海军的封锁，横渡大西洋，将法国正式参战并给予支援的消息，送到了正在为独立苦战的华盛顿手中。这次航行，不仅改变了美国独立战争的局势，更将“自由、平等、博爱”的精神种子，通过一艘战舰，悄然埋下。然而，传奇的结局往往唏嘘。仅仅十几年后，1793年，赫敏号在法国大革命的混乱中，因导航失误，悲惨地触礁沉没于克罗瓦西克附近的海域。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后的两个世纪，罗什福尔兵工厂随着帝国的兴衰而浮沉。拿破仑时代它曾短暂复兴，但铁甲舰时代的到来，无情地宣判了风帆战舰与这座传统造船厂的死刑。1927年，最后一艘船从这里驶出，巨大的船坞被泥土填平，宏伟的车间沦为仓库，整个区域陷入漫长的沉睡，几乎被世人遗忘。直到1997年，一个近乎疯狂的梦想被点燃：何不重建赫敏号？这不是为了拍电影，而是要造一艘能真正下海航行的、一模一样的船。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一场长达17年的史诗级工程开始了。工匠们查阅数以万计的原始图纸，寻访古老的橡木林，重新点亮锻造炉，甚至复兴了已经消失的“缆绳工坊”——那栋长达374米的超长建筑，曾经每天能生产出够绕地球半圈的绳索。2014年，当全新的赫敏号沿着夏朗德河缓缓驶向大西洋时，整个法国都在屏息观看。它不仅是一艘船的复活，更是一座城市的复兴，一段历史的招魂。今天，你站在这里，看到的正是这两个伟大时代的重叠：柯尔贝尔规划的理性帝国，与当代人用双手复活的浪漫传奇。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正领略此地的精髓，请务必预留出完整的一天（至少5-6小时）。建议早上9点半左右抵达，这时光线柔和，旅游团尚未涌入。游览节奏宜采取“先宏观看背景，再微观亲体验”的顺序：上午专注于地面上的兵工厂建筑群，了解其恢弘的工业体系；下午则将时间交给赫敏号，沉浸式体验船上生活。中午可以在兵工厂咖啡馆或河畔餐厅简单用餐。这样的安排能让你在头脑中先构建起历史框架，再带着理解和想象去登上战舰，感受会加倍深刻。如果运气好碰上赫敏号扬帆出港或归航，那将是全天的高潮，记得提前在官网查询日程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避开周末的下午，那时本地家庭游客众多，登舰可能需要排长队。穿一双绝对舒适的平底鞋，因为你要在古老的石头路、钢铁楼梯和摇晃的甲板上行走数小时。如果对航海史特别感兴趣，可以提前预订由老水手或历史学家带领的导览团，他们会讲述图纸上看不到的生动细节。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那道标志性的、横跨干船坞的金属吊桥，让自己瞬间置身于这个巨大海军帝国的几何中心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“皇家锻造坊”里停留片刻，触摸那些冰冷巨大的历史铁砧，想象曾经响彻云霄的打铁声与四溅的火星。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进那座长得不可思议的“缆绳工坊”，从一端走到另一端，感受为了制造一根完美缆绳所展现的、近乎偏执的工业美学。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上赫敏号的甲板，第一件事不是拍照，而是闭上眼睛，感受脚下木板的轻微晃动，听风掠过桅杆和缆绳发出的各种细微声响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`小心翼翼地沿着狭窄的楼梯下到火炮甲板，在昏暗的油灯光线下，试着想象八十名水手曾如何在这低矮拥挤的空间里吃饭、睡觉、战斗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在军官舱里寻找拉法耶特侯爵可能用过的写字台复制品，体会那次决定性的航行中，那份混合着冒险、理想与不确定性的复杂心境。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`别忘了参观船尾的舵轮，亲手扶一下，尽管它已被固定，但依然能传递出操控这样一艘巨兽所需的力量与责任感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，去河对岸的散步道回望整个兵工厂全景，看石头建筑与木制战舰在夕阳下如何融为一体，完成最后的时空定格。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`干船坞底部仰拍吊桥与建筑轮廓`}</h4>
                  <p className="text-sm text-gray-700">{`选择晴天的上午十点或下午四点，阳光能勾勒出钢铁结构的凌厉线条与石墙的质感，站在船坞底部中心点用广角镜头拍摄，构图极具压迫力与几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`缆绳工坊的无限纵深长廊`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光从侧面高窗射入，会在古老地板上拉出长长的光柱与工坊工具的剪影，站在长廊三分之一处向另一端拍摄，能获得极具视觉引导和光影层次的对称构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`赫敏号船头斜侧方全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏的“黄金时刻”，从码头栈桥上，以船头精雕细刻的艏饰像为前景，将巍峨的桅杆和帆缆作为主体，背景带入一部分兵工厂建筑，画面充满故事性与力量感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`火炮甲板的幽暗氛围`}</h4>
                  <p className="text-sm text-gray-700">{`利用甲板舱口落下的自然光束作为唯一光源，将相机调至高感光度或使用三脚架长曝光，捕捉炮管、木质结构在昏暗中若隐若现的细节，还原水手生活的真实质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从河对岸用长焦镜头压缩空间`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后，在夏朗德河北岸的堤坝上，用长焦镜头将赫敏号的桅杆与兵工厂的钟楼、屋顶压缩在同一画面中，呈现历史与工业建筑的对话，色调尤为温暖。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在赫敏号内部拍摄时请务必关闭闪光灯，强烈的闪光会伤害那些历经辛苦保养的古老木材与织物。尊重船上标识的禁止拍摄区域，通常涉及一些敏感的操作部位或船员私人空间。尝试用镜头捕捉一些细节：一只磨损的滑轮、一段打着水手结的绳索、一块手工雕刻的装饰，它们往往比全景更能诉说故事。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在罗什福尔老城中心由老房子改建的小旅馆，房间虽小但充满 charm，晚上可以溜达到中央市场广场，和当地人在小酒馆外边喝啤酒边看赫敏号的桅杆灯光。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择河边那些由旧船员宿舍改造的精品客栈，房间有着低矮的木梁和厚实的墙壁，早晨推开窗就能闻到河水的味道，直接看到赫敏号的帆缆在晨雾中显现。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车前往附近乡村一座18世纪的贵族庄园改造的酒店，沉浸在绝对的宁静与法式古典奢华之中，在花园里享用晚餐时，你会觉得白天的航海冒险像一场遥远的、精彩的梦。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`水手主题`}</h4>
                  <p className="text-sm text-purple-800">{`预订一间直接面对兵工厂入口的现代设计酒店，它的内部装饰大量运用了缆绳、航海地图和铜质配件元素，阳台是观赏赫敏号日出或夜间灯光秀的绝佳私人包厢。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗什福尔是个非常安全宁静的小城，夜晚独自在河边散步毫无压力。如果想获得最完整的体验，建议至少住两晚，这样有一天可以专门用来探索罗什福尔城内其他柯尔贝尔时代的遗产，比如那间著名的“海军医学学校”。夏季和赫敏号重大活动期间住宿非常紧俏，务必提前数月预订。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开罗什福尔的时候，你的手上可能还留着触摸老旧橡木的粗糙感，鼻腔里还萦绕着焦油与绳索的气味。但比这些感官记忆更深刻的，是一种奇妙的慰藉。在这个追求效率、一切皆可快速数字化复制的时代，竟然还有这样一个地方，愿意用十七年的时间，仅仅为了“重现”一艘两个半世纪前的船。他们不是在怀旧，而是在进行一场庄严的、近乎笨拙的对话——与历史对话，与失传的技艺对话，更与人类双手所能创造的极致之美对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，它值得每一个热爱深度游的旅人前来。不仅仅是为了看一艘漂亮的大船，或是参观一个古老的工厂。而是为了来见证“执念”所能达到的浪漫高度。在这里，你会明白，历史不是教科书上冰冷的知识点，它是可以呼吸、可以航行、可以被无数普通人用热情再次点燃的活生生的存在。赫敏号静静地停泊在那里，它不再是为了运送士兵或传达密信，它成了一座关于耐心、匠心与梦想的纪念碑。它提醒着我们，有些旅程的价值不在于抵达，而在于那耗费心血、一寸一寸前行的过程本身。这，或许是我们这个快节奏世界里，最稀缺也最珍贵的一课。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/beze" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝兹</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bèze</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-villandry" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维朗德里城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Villandry</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cordes-sur-ciel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔德圣谢鲁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cordes-sur-Ciel</p>
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
