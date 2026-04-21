import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮耶什佳尼 Piestany｜闯入新艺术运动宫殿，泡一场医疗级泥浆浴 - 最佳欧洲景点',
  description: '当火车缓缓驶近皮耶什佳尼站台，你首先注意到的可能不是城镇的建筑，而是一片宽阔河面上，由一座造型奇特的桥连接着的、绿意葱茏的岛屿。空气里开始飘来一丝微妙的、类似熟鸡蛋的气味——那是硫化氢的味道，是大自然发出的最直接的邀请函：欢迎来到温泉的国度。走过那座著名的“断桥”（你会立刻明白它为什么叫这个名字），',
}

export default function PiestanyThermalIslandSpaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛伐克', href: '/destinations/europe' },
            { label: '皮耶什佳尼', href: '/destinations/europe' },
            { label: '皮耶什佳尼', href: '/attractions/piestany-thermal-island-spa' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮耶什佳尼・Pieštany・斯洛伐克・皮耶什佳尼`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当火车缓缓驶近皮耶什佳尼站台，你首先注意到的可能不是城镇的建筑，而是一片宽阔河面上，由一座造型奇特的桥连接着的、绿意葱茏的岛屿。空气里开始飘来一丝微妙的、类似熟鸡蛋的气味——那是硫化氢的味道，是大自然发出的最直接的邀请函：欢迎来到温泉的国度。走过那座著名的“断桥”（你会立刻明白它为什么叫这个名字），你就正式踏上了温泉岛。脚下的触感瞬间变得柔软，是精心修剪的草坪和沙砾小径。耳边是瓦赫河舒缓的流水声，混杂着远处公园里现场乐队演奏的轻柔爵士乐，以及人们拖鞋踩在石板上的窸窣声响。
这里不像一个景点，更像一个自成一体、节奏缓慢的微型国度。穿着舒适浴袍、裹着头巾的疗养者三三两两地散步，脸上带着放松后的红晕。你的目光很快就会被四周的建筑攫取：那绝不是普通的医院或澡堂。它们是一座座用奶油色石膏、流畅铸铁花纹、彩色马赛克和巨幅壁画装饰的宫殿。巨大的弧形窗像张开的蚌壳，阳台上缠绕着葡萄藤蔓般的铁艺，屋顶轮廓线起伏如波浪。阳光透过茂密的七叶树树叶，在那些精致的立面上投下晃动的光斑，让整个岛屿仿佛一个沉睡在旧日时光里的、关于健康与美丽的梦境。
最打动人心的是这里的氛围，一种将严肃的医疗与极致的优雅相结合的奇特魅力。人们来这里是为了治疗风湿、关节疼痛，或是从都市疲惫中恢复元气。但整个过程被包裹在艺术与自然之中。你可以看到有人刚从一栋华丽的建筑里做完泥浆浴出来，浑身裹着毯子，坐在长椅上静静阅读；也可以看到当地家庭推着婴儿车，在玫瑰园里享受午后阳光。温泉岛是斯洛伐克人生活记忆中温暖的一部分，是几代人共享的“健康充电站”。它的核心魅力，就在于这种将功能性升华至仪式感，把疗愈变成一场感官与心灵双重享受的古老智慧。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当火车缓缓驶近皮耶什佳尼站台，你首先注意到的可能不是城镇的建筑，而是一片宽阔河面上，由一座造型奇特的桥连接着的、绿意葱茏的岛屿。空气里开始飘来一丝微妙的、类似熟鸡蛋的气味——那是硫化氢的味道，是大自然发出的最直接的邀请函：欢迎来到温泉的国度。走过那座著名的“断桥”（你会立刻明白它为什么叫这个名字），你就正式踏上了温泉岛。脚下的触感瞬间变得柔软，是精心修剪的草坪和沙砾小径。耳边是瓦赫河舒缓的流水声，混杂着远处公园里现场乐队演奏的轻柔爵士乐，以及人们拖鞋踩在石板上的窸窣声响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不像一个景点，更像一个自成一体、节奏缓慢的微型国度。穿着舒适浴袍、裹着头巾的疗养者三三两两地散步，脸上带着放松后的红晕。你的目光很快就会被四周的建筑攫取：那绝不是普通的医院或澡堂。它们是一座座用奶油色石膏、流畅铸铁花纹、彩色马赛克和巨幅壁画装饰的宫殿。巨大的弧形窗像张开的蚌壳，阳台上缠绕着葡萄藤蔓般的铁艺，屋顶轮廓线起伏如波浪。阳光透过茂密的七叶树树叶，在那些精致的立面上投下晃动的光斑，让整个岛屿仿佛一个沉睡在旧日时光里的、关于健康与美丽的梦境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的是这里的氛围，一种将严肃的医疗与极致的优雅相结合的奇特魅力。人们来这里是为了治疗风湿、关节疼痛，或是从都市疲惫中恢复元气。但整个过程被包裹在艺术与自然之中。你可以看到有人刚从一栋华丽的建筑里做完泥浆浴出来，浑身裹着毯子，坐在长椅上静静阅读；也可以看到当地家庭推着婴儿车，在玫瑰园里享受午后阳光。温泉岛是斯洛伐克人生活记忆中温暖的一部分，是几代人共享的“健康充电站”。它的核心魅力，就在于这种将功能性升华至仪式感，把疗愈变成一场感官与心灵双重享受的古老智慧。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮耶什佳尼`} />
                <InfoRow label="英文名称" value={`Pieštany`} />
                <InfoRow label="正式名称" value={`Pieštany`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`皮耶什佳尼`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中欧最负盛名、历史最悠久的温泉疗养中心之一，被誉为“斯洛伐克的温泉女王”。`} />
                <InfoRow label="建筑特色" value={`集中于瓦赫河河心岛上、规模宏大的新艺术运动风格建筑群，将疗愈功能与极致美学完美融合。`} />
                <InfoRow label="建筑风格" value={`以新艺术运动（Jugendstil）风格为主，混搭新古典主义及功能主义元素。`} />
                <InfoRow label="文化价值" value={`是欧洲“温泉疗养文化黄金时代”的活化石，见证了从奥匈帝国贵族到现代民众对健康与休闲生活方式的永恒追求。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`温泉岛（Kúpeľný ostrov）公园区域全天24小时开放。岛上的主要水疗浴场及疗养院（如拿破仑温泉、伊琳娜温泉、普罗帕特利亚等）内部参观及治疗服务时间一般为上午7:00至下午7:00，但各建筑具体开放时间不同，且接受预定的疗养课程客人优先。大多数历史建筑的外观可随时欣赏。建议出行前在皮耶什佳尼温泉官网查询最新时间表，冬季部分户外设施或减少运营。`} />
              <InfoRow label="门票价格" value={`进入温泉岛公园免费。参观历史建筑内部通常需要购买导览游门票，价格约8-12欧元。体验真正的温泉浴或泥浆浴需购买疗养套餐，单次泥浆浴体验价格约25-40欧元起，经典的“三日疗养套餐”包含多种治疗，价格从150欧元起。斯洛伐克公民及欧盟学生通常享有优惠，具体折扣需现场核实。`} />
              <InfoRow label="地址" value={`Kúpeľný ostrov, 921 01 Pieštany, Slovakia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是布拉迪斯拉发机场（BTS），距离约85公里。从机场搭乘出租车直达约1小时，费用较高（约80-100欧元）。更经济的方案是：在机场乘坐巴士到布拉迪斯拉发中央火车站（Hlavná stanica），换乘火车前往皮耶什佳尼站（Pieštany），火车班次频繁，车程约1小时10分钟。从皮耶什佳尼火车站步行至温泉岛约20分钟，也可乘坐本地巴士（如1、2路）至“Kúpele”站下车。火车票建议通过斯洛伐克铁路（ZSSK）官网或App提前购买，有折扣。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "皮耶什佳尼的温泉故事，始于脚下汩汩涌出的、温度高达67摄氏度的泉水。早在罗马时期，人们就发现了这里具有疗愈能力的矿泉和泥浆。但真正让这个小渔村蜕变为欧洲上流社会焦点的，是17世纪一位名叫Ján（或Johann） Andreas的医生的“发现”。他系统性地分析了泉水的成分，并记录其治疗功效，将其誉为“风湿病的克星”。消息不胫而走，首先吸引了附近的贵族和地主。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，命运的转折点与一位著名的女士紧密相连：拿破仑·波拿巴的妹妹，卡罗琳·波拿巴。19世纪初，她因健康问题到此疗养，并取得了显著效果。这位皇室成员的背书，如同为皮耶什佳尼盖上了一枚金光闪闪的印章。整个奥匈帝国的 aristocracy 蜂拥而至，夏天“去皮耶什佳尼泡温泉”成了身份和品味的象征。为了满足这些挑剔的客人，最初简陋的木制浴棚被迅速取代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的建筑奇迹发生在19世纪末至20世纪初，也就是欧洲新艺术运动风起云涌的时代。1889年，一场大火意外地烧毁了岛上许多旧建筑，这反而为一场宏大的重建提供了画布。投资者和建筑师们决定，要建造一个配得上其国际声誉的、前所未有的疗养圣地。于是，我们今天看到的宏大蓝图被付诸实施：将整个河心岛规划成一个统一的疗养公园，并聘请当时顶尖的建筑师，如匈牙利的 Ármin Hegedűs 等，设计一系列风格协调又各具特色的宫殿式浴场。拿破仑温泉、伊琳娜温泉、特赫拉温泉等建筑拔地而起，它们曲线曼妙，装饰着神话主题的雕塑和壁画，内部铺设大理石，配备当时最先进的水疗设备。皮耶什佳尼一跃成为中欧新艺术运动建筑最密集、最纯粹的地区之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "两次世界大战暂时中断了这里的歌舞升平，建筑也遭到一定损坏。但在社会主义时期，它被国有化，成为了面向广大劳动者和东欧集团人民的疗养院。虽然贵族气息淡去，但其医疗功能被强化和科学化，继续服务着数以万计的人。1990年后，皮耶什佳尼经历了一场优雅的复兴。历史建筑被精心修复，现代化的医疗设备被悄然引入古老的墙壁之后。它不再是特权阶层的专属，却依然保持着那份黄金时代的庄严与美丽，迎接着来自世界各地，寻求身心 rejuvenation 的现代旅人。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点前抵达温泉岛，这时晨雾将散未散，阳光柔和，疗养客还未大批出现，你能独享建筑与公园的宁静。整体游览需要一整天（6-8小时）才能深度体验。上午侧重建筑外观探索与公园漫步，下午安排一项核心疗养体验（如泥浆浴）并参观建筑内部。节奏务必放慢，这里的真谛不在于“走完”，而在于“沉浸”。穿着绝对要舒适，带一双好走的鞋和一双拖鞋（用于浴场），别忘了泳衣。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`预订泥浆浴或任何理疗服务务必提前数天在官网或通过酒店完成，walk-in机会很少。岛上餐饮选择有限且价格较高，可考虑自带简单零食和水。尊重疗养客的隐私和安静氛围，在疗养建筑内部参观时避免喧哗。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从标志性的“断桥”（Krúpkový most）上岛，亲手触摸那座传说中能带来健康和爱情回归的“瘸腿男人”铜像的膝盖。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着中央林荫大道缓步前行，让目光依次滑过右侧宏伟的拿破仑温泉（Napoleonovo kúpele）那奶油色的弧形立面和左侧繁花盛开的玫瑰园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕到伊琳娜温泉（Irina kúpele）背后，欣赏其最具代表性的新艺术运动圆顶和彩绘玻璃，倾听建筑内部隐约传来的水流回声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在温泉博物馆或普罗帕特利亚（Pro Patria）建筑前的露天咖啡馆坐下，点一杯本地草药茶，观察往来人们的悠闲姿态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`预约并体验一次经典的医疗泥浆浴，感受温热厚重的泥浆包裹全身，在二十分钟的静躺中体会古老的疗愈力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后穿过小桥抵达安静的“小岛”（Malý ostrov），这里是观察主岛建筑群全景和鸟类的最佳位置。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分回到主岛的柱廊（Kolonádový most）附近，等待建筑灯光渐次亮起，倒映在瓦赫河平静的水面上。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`断桥与铜像仰角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在桥下河岸石滩上，低角度仰拍桥身与桥上“瘸腿男人”铜像的剪影，背景是拿破仑温泉的建筑轮廓。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`伊琳娜温泉圆顶特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，站在其南侧花园，利用长焦镜头压缩空间，聚焦那绿色圆顶与精致的彩绘玻璃窗，捕捉铁艺装饰的细腻阴影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`柱廊长廊对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗日子的正午，站在柱廊中央，利用建筑本身的强烈透视引导线，拍出空旷而富有纵深感的对称画面，黑白效果尤佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小岛全景视角`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，从小岛最东端向西看，将瓦赫河、连接桥、以及岛上成排的新艺术建筑全部纳入镜头，等待天空出现粉紫色晚霞。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`泥浆浴后休息厅`}</h4>
                  <p className="text-sm text-gray-700">{`如果体验泥浆浴，可在结束后征得同意，拍摄休息厅内景，古典的躺椅、格子毛毯和透过高窗的光线，充满故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机需格外谨慎，最好事先查询当地法规，并避开疗养区域上空以尊重隐私。室内拍摄尤其是治疗区域，务必先询问工作人员，未经许可不要拍摄其他客人。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经典疗养体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接下榻温泉岛上的百年酒店如“温泉酒店（Hotel Thermia Palace）”，醒来推开窗就是公园，穿着浴袍就能下楼做理疗，完全沉浸于旧世界氛围。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计师精品之选`}</h4>
                  <p className="text-sm text-green-800">{`位于老城区由新艺术风格别墅改造的精品酒店，内部是极简现代设计，与历史外壳形成有趣对话，步行至温泉岛仅十分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`住在瓦赫河对岸的安静住宅区，房东太太会为你准备丰盛的斯洛伐克早餐，并分享她小时候来泡温泉的趣事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端全包疗养`}</h4>
                  <p className="text-sm text-purple-800">{`选择岛上的专业疗养院套餐，入住设施现代化的房间，享受私人定制的从饮食到理疗的全套健康疗程，彻底放松身心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6-8月）和疗养旺季（春秋两季）务必提前数月预订，尤其是岛上的酒店。老城区夜晚非常安全宁静，但娱乐活动相对较少，喜欢夜生活的旅客需知。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开皮耶什佳尼时，你带走的可能不仅是放松的关节和柔软的皮肤，更是一种关于“如何照顾自己”的古老启示。在这个推崇快速、便捷、即时满足的时代，这里固执地保留着一套缓慢的、仪式化的、将身体与心灵置于同等重要地位的疗愈哲学。它告诉你，健康不是一种可以速成的产品，而是一种需要时间、环境甚至美来滋养的状态。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个地方之所以特别，是因为它超越了单纯的视觉奇观。它是一场全身心的浸润。你用自己的身体去感受那温热奇特的泥浆，用鼻子去记忆那淡淡的硫磺气息，用耳朵去收集流水与音乐的合奏，最后，所有这些感官记忆会沉淀为一种深层的宁静。它提醒我们，旅行有时不是为了收集更多的风景，而是为了找到一个可以安心“停下来”，与自己好好相处的地方。对于任何一位厌倦了打卡、渴望在旅程中获得真正修复与灵感的人来说，皮耶什佳尼的温泉岛，无疑是一份来自旧欧洲的、奢华而体贴的礼物。它值得你专程而来，慢下来，把自己交给时间，交给艺术，交给大地深处涌出的温暖力量。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trencin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特伦钦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trenčín Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/koice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科希策老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Košice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trnava-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔纳瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trnava</p>
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
