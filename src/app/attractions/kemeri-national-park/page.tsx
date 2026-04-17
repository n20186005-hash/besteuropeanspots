import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '凯梅里国家公园 Ķemeri National Park｜漫步欧洲最后荒野秘境，探秘古老沼泽木栈道与疗愈硫磺泉 - 最佳欧洲景点',
  description: '朋友，如果你对欧洲的想象还停留在精巧的广场和华丽的宫殿，那凯梅里会给你一次彻底的“认知重置”。车子刚驶离里加不久，窗外的风景就像被一块巨大的、潮湿的橡皮擦抹去了城市的痕迹。取而代之的，是无边无际的、低饱和度的绿与棕。空气的味道最先发生变化——一股清新又略带腥甜的泥土与腐殖质气味，混合着松针的清香，从',
}

export default function KemeriNationalParkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '凯梅里国家公园', href: '/attractions/kemeri-national-park' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`凯梅里国家公园・Ķemeri National Park・拉脱维亚・尤尔马拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，如果你对欧洲的想象还停留在精巧的广场和华丽的宫殿，那凯梅里会给你一次彻底的“认知重置”。车子刚驶离里加不久，窗外的风景就像被一块巨大的、潮湿的橡皮擦抹去了城市的痕迹。取而代之的，是无边无际的、低饱和度的绿与棕。空气的味道最先发生变化——一股清新又略带腥甜的泥土与腐殖质气味，混合着松针的清香，从车窗缝隙里钻进来。这不是修剪整齐的公园，这是一种原始、沉默，却又充满了隐秘生命力的巨大存在。
当你真正踏上那条著名的木板栈道，感官的洗礼才正式开始。脚下是厚实木板发出的空旷回响，“咚咚”声在无边的寂静中被放大。目光所及，是苔藓织就的厚厚地毯，覆盖着一切：沉睡的树干、隆起的地面，它们绿得如此柔软，仿佛能吸走所有的喧嚣。水洼像一块块破碎的镜子，倒映着快速流动的云和笔直如铅笔的枯松。偶尔，一声尖锐而悠远的鸟鸣划破长空，那是潜藏在芦苇荡中的某只涉禽在宣告领地。在这里，时间是黏稠的，缓慢流动的。你会看到当地人手握望远镜，安静地伫立数小时；也会遇到穿着简朴的家庭，带着孩子来辨认野莓。凯梅里不是“景点”，它是拉脱维亚人精神的后花园，一个用来呼吸、沉淀和与古老自然对话的场所。
而它最奇妙的魅力，在于两种极致体验的并存。一边是荒野沼泽的苍凉与孤寂，另一边，却是由此孕育出的、令人惊奇的疗愈力量。在公园的边缘，你能找到那股著名的硫磺泉。泉水呈现出一种浓郁的、不透明的乳蓝色，像被打翻的矿物质颜料。靠近时，那股独特的、类似臭鸡蛋却又不让人生厌的硫磺气味扑面而来。从冰河时期留存下来的地下水，在这里涌出地表，被当地人奉为具有神奇疗效的圣水。这种从荒蛮中生长出的温柔关怀，正是凯梅里最动人的矛盾与统一。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，如果你对欧洲的想象还停留在精巧的广场和华丽的宫殿，那凯梅里会给你一次彻底的“认知重置”。车子刚驶离里加不久，窗外的风景就像被一块巨大的、潮湿的橡皮擦抹去了城市的痕迹。取而代之的，是无边无际的、低饱和度的绿与棕。空气的味道最先发生变化——一股清新又略带腥甜的泥土与腐殖质气味，混合着松针的清香，从车窗缝隙里钻进来。这不是修剪整齐的公园，这是一种原始、沉默，却又充满了隐秘生命力的巨大存在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你真正踏上那条著名的木板栈道，感官的洗礼才正式开始。脚下是厚实木板发出的空旷回响，“咚咚”声在无边的寂静中被放大。目光所及，是苔藓织就的厚厚地毯，覆盖着一切：沉睡的树干、隆起的地面，它们绿得如此柔软，仿佛能吸走所有的喧嚣。水洼像一块块破碎的镜子，倒映着快速流动的云和笔直如铅笔的枯松。偶尔，一声尖锐而悠远的鸟鸣划破长空，那是潜藏在芦苇荡中的某只涉禽在宣告领地。在这里，时间是黏稠的，缓慢流动的。你会看到当地人手握望远镜，安静地伫立数小时；也会遇到穿着简朴的家庭，带着孩子来辨认野莓。凯梅里不是“景点”，它是拉脱维亚人精神的后花园，一个用来呼吸、沉淀和与古老自然对话的场所。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最奇妙的魅力，在于两种极致体验的并存。一边是荒野沼泽的苍凉与孤寂，另一边，却是由此孕育出的、令人惊奇的疗愈力量。在公园的边缘，你能找到那股著名的硫磺泉。泉水呈现出一种浓郁的、不透明的乳蓝色，像被打翻的矿物质颜料。靠近时，那股独特的、类似臭鸡蛋却又不让人生厌的硫磺气味扑面而来。从冰河时期留存下来的地下水，在这里涌出地表，被当地人奉为具有神奇疗效的圣水。这种从荒蛮中生长出的温柔关怀，正是凯梅里最动人的矛盾与统一。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`凯梅里国家公园`} />
                <InfoRow label="英文名称" value={`Ķemeri National Park`} />
                <InfoRow label="正式名称" value={`Ķemeri National Park`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`尤尔马拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是波罗的海地区最重要、最广袤的湿地生态系统之一，是欧洲保护完好的自然遗产地。`} />
                <InfoRow label="建筑特色" value={`人类活动痕迹以绵长蜿蜒、深入沼泽腹地的木质栈道网络为核心，与苏联时代遗留的宏大疗养院建筑形成有趣对话。`} />
                <InfoRow label="建筑风格" value={`自然景观为主，人造设施呈现简洁实用的功能主义风格，与自然环境谦逊融合。`} />
                <InfoRow label="文化价值" value={`体现了拉脱维亚民族对森林、沼泽的深厚依赖与敬畏，以及将自然资源转化为独特疗愈文化的智慧。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公园自然区域全年全天24小时开放。信息中心、大沼泽（Lielais Ķemeru tīrelis）木板栈道入口及部分室内展览的开放时间一般为5月至9月 9:00-19:00，10月至次年4月 10:00-17:00，周一可能闭馆。具体设施时间随季节调整，冬季部分较长栈道可能因冰雪暂时关闭，出行前务必查看官网最新通知。`} />
              <InfoRow label="门票价格" value={`进入国家公园本身免费。但进入大沼泽核心区的著名木栈道区域需购买门票，成人约5欧元，学生及老人享有优惠价约3欧元。公园内部分指定停车场会收取小额停车费（约2-3欧元/天）。参与由公园官方组织的导览徒步团需额外付费，价格在10-20欧元不等。`} />
              <InfoRow label="地址" value={`Ķemeru nacionālais parks, Jurmala, LV-2012, Latvia`} />
              <InfoRow label="交通方式" value={`最便捷的方式是从拉脱维亚首都里加出发。从里加中央汽车站（Autoosta）乘坐前往尤尔马拉（Jurmala）方向（如Kemeri或Sloka）的巴士，在“Ķemeru nacionālais parks”或“Ķemeri”站下车，车程约40-50分钟，班次频繁。也可以从里加乘坐火车至Ķemeri站，但车站距离公园核心区仍有约2公里步行距离，适合喜欢徒步的游客。建议购买一张拉脱维亚公共交通电子卡或使用手机应用购买巴士票，非常方便。自驾则沿A10公路前往尤尔马拉方向，按路标驶入公园停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`凯梅里的故事，得从一万多年前的那次大撤退讲起。当最后一个冰期的巨大冰川不情愿地向北缩回，它在波罗的海沿岸留下了无数凹陷的土地、砂石和融水。这些坑洼之地，逐渐被雨水、地下水填满，形成了星罗棋布的湖泊。而时间这位最有耐心的造物主，开始了它缓慢的“填充”工作。水生植物一代代生长、死亡、堆积，湖面被一点点侵占，最终演变成了今天我们看到的、浩瀚无垠的沼泽与湿地。这是一片被时光浸泡的土地，每一层泥炭都像书页一样，记录着数千年的气候变迁与生态密码。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`人类很晚才真正踏入这片看似“无用”的险地。早期的居民——库尔兰人，只敢在边缘的森林和高地活动，他们将沼泽视为神秘之境，是神灵与亡魂的居所。直到中世纪，这里也只是猎人和采蜜人偶尔涉足的偏远地带。真正的转折点出现在18世纪末。一位来自库尔兰公爵宫廷的医生，偶然发现了这里涌出的泉水与众不同——它散发着怪味，却能缓解皮肤和关节的病症。消息不胫而走，凯梅里泉水“能治病”的传说开始流传。但这片土地的命运，终究与更大的历史浪潮紧密相连。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`19世纪，当整个欧洲的贵族和中产阶层兴起“温泉疗养”的风尚时，偏远的凯梅里终于等到了它的黄金时代。沙皇俄国时期的贵族们，纷纷来此建造别墅，享受这荒野中的独特疗愈。一条铁路专线从里加修到了这里，泥泞的沼泽边缘，陡然矗立起豪华的酒店、音乐厅和舞厅。你能想象那样的画面吗？淑女绅士们穿着华服，在悠扬的乐曲中翩翩起舞，而窗外几步之遥，就是寂静无声、暗藏危险的万年沼泽。这种极致的文明与野性的对峙，充满了戏剧性。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，最深刻地塑造了今日凯梅里物理面貌的，是苏联时代。上世纪30年代，苏联政府看中了这里的疗养价值，决定将其打造成一个规模宏大的“劳动人民疗养圣地”。他们以惊人的效率和力量，排干部分沼泽，修建起规模庞大的“凯梅里疗养院”建筑群。那是一座宛如巨大战舰的白色功能主义建筑，宏伟、冰冷、极具统治感，与柔和的自然环境格格不入。更重要的是，为了让人能安全地深入沼泽腹地，工程师们设计并铺设了总长数十公里、纵横交错的木质栈道网络。这些栈道，像一道谦卑而坚固的桥梁，首次让普通人得以安全地走进沼泽的心脏，去亲眼目睹那原本只存在于传说中的景观。苏联的计划经济留下了深刻的烙印，但客观上，这些栈道也成了后来保护与观赏这片自然瑰宝的基础。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`拉脱维亚独立后，这片饱经沧桑的土地迎来了新的身份。1997年，Ķemeri国家公园正式成立。人们不再试图排干或“征服”沼泽，而是开始学习聆听它、保护它。那座庞大的苏联疗养院虽已破败，却作为一段凝固的历史被保留下来，与欣欣向荣的自然生态形成了一种后现代式的对话。今天，当我们行走在那些被无数脚步磨得光滑的木栈道上时，我们踩着的不仅是一万年的地质历史，也是一部浓缩的人类欲望、野心与最终回归敬畏的编年史。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受凯梅里的双重灵魂，建议预留至少大半天时间（5-6小时）。最佳抵达时间是清晨（9点左右），这时光线柔和，鸟群活跃，游客稀少，你能独享沼泽的宁静。游览节奏宜慢不宜快，这不是打卡，而是沉浸式漫步。建议先从大沼泽木板栈道开始，用2-3小时深入荒野核心，感受自然的原始力量；午后返回信息中心附近，探访硫磺泉和旧疗养院建筑区，体验人文历史的层叠；最后，如果还有精力，可以选一条较短的森林小径结束旅程。这样的安排既能捕捉到沼泽最美的晨光，又能避开午后可能出现的较多游客，并让体验由自然到人文，层次分明。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双防滑、不怕泥水且舒适的运动鞋或徒步鞋，木板道在潮湿天气和苔藓覆盖处非常滑。夏季沼泽蚊虫（蠓虫）极其凶猛，必须提前喷洒强效防蚊液并穿着长袖衣裤。公园内几乎没有商业设施，信息中心可能有简单饮品，请自备充足的饮用水和高能量零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从公园主信息中心出发，先踏上那条宛如通往世界尽头的“大沼泽木板路”，在万籁俱寂中倾听自己脚步的回响与远方天鹅的鸣叫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到第一个大型观景平台时，一定要停下，花十分钟什么也不做，只是看着眼前那片由苔藓、水泊与枯树构成的、仿佛时间停滞的广阔画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的栈道继续深入，在沿途的标识牌帮助下，尝试辨认泥炭藓、茅膏菜和那些姿态奇诡、被当地人称为“沼泽鬼影”的枯松。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在栈道最深入处的观鸟塔楼爬上顶层，用望远镜寻找在芦苇丛中筑巢的灰鹭、白尾海雕或是一群正在梳理羽毛的绿头鸭。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`返程后前往“旧凯梅里”区域，找到那口被小亭子保护起来的乳蓝色硫磺泉，鼓起勇气用手感受一下富含矿物质的水的滑腻，并吸入那股独特的“生命气息”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步到苏联时代遗留的宏伟疗养院主楼前，仰望它巨大的体量和简洁的线条，感受历史在自然与建筑上留下的截然不同的印记。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果季节合适（夏秋），在离开前可以去公园边缘的森林小径，采摘一小把野生蓝莓或蔓越莓，作为这片慷慨土地送你的甜蜜伴手礼。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大沼泽栈道入口后的第一个长直道`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，低角度的阳光会将长长的栈道影子拉得极富几何美感，采用中心对称构图，能拍出通往秘境深处的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`观鸟塔楼顶层向西眺望`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，这里是拍摄“沼泽落日”的绝佳位置，将枯树的剪影作为前景，对准被晚霞染成金红和紫色的广阔苔原与水面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`硫磺泉水池的近景特写`}</h4>
                  <p className="text-sm text-gray-700">{`选择阳光直射的午后，聚焦于池底不断涌出的气泡和那乳蓝泛白的独特水质，可以拍出极具质感、如同抽象画般的细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从森林边缘仰拍苏联疗养院主楼`}</h4>
                  <p className="text-sm text-gray-700">{`利用四周高大的松树作为画框，拍摄这座庞大混凝土建筑的全貌，阴天时更能突出其冷峻、孤寂的“巨人遗骸”氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除沼泽水面的反光，让水下植物和倒影更清晰。广角镜头适合拍摄沼泽的辽阔，长焦镜头则是捕捉远处鸟类和建筑细节的必备。请务必保持在栈道上拍摄，为了一个机位踏入沼泽是极度危险且破坏生态的行为。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`森林小屋体验`}</h4>
                  <p className="text-sm text-blue-800">{`预订公园官方运营或附近居民经营的森林小木屋，夜晚在松涛声中入眠，清晨在鸟鸣中醒来，有机会邂逅窗外的狍子或野兔。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史住宿`}</h4>
                  <p className="text-sm text-green-800">{`选择尤尔马拉海滨小镇上由老别墅改造的精品民宿，既能享受舒适的设施和波罗的海的海风，又能便捷地乘车往返国家公园。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端疗愈享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住里加或尤尔马拉附近提供全套水疗服务的豪华酒店，将凯梅里硫磺泉的疗愈理念延续，在一天的徒步后彻底放松身心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`极简野趣之选`}</h4>
                  <p className="text-sm text-purple-800">{`公园指定区域允许露营，资深户外爱好者可以在此扎营，收获一场与星空和沼泽呼吸同频的、终生难忘的夜晚。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`公园内的住宿数量非常有限且极受欢迎，尤其是森林小木屋，务必提前数月预订。如果住在尤尔马拉，建议选择靠近火车站或巴士站的位置，便于出行。夏季是旺季，价格较高，春秋两季前来性价比更高，且能欣赏到沼泽不同的色彩（金秋的苔原无比绚烂）。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开凯梅里许久，我的鞋底似乎还残留着木板栈道那独特的轻微弹性，鼻腔里也仿佛萦绕着那股混合了硫磺、湿土与松脂的复杂气味。它带给我的震撼，不同于任何一座伟大的建筑或博物馆。那是一种关于“尺度”和“寂静”的教育。在人类文明精心丈量、装饰一切的今天，这里依然存在着一种原始的、不受控的庞大秩序。它让你意识到自己的渺小，但这种渺小并不令人沮丧，反而是一种解脱——在这里，你无需扮演任何社会角色，你只是一双会行走的眼睛，一对会倾听的耳朵，一个重归自然的生命体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是为什么每一个热爱深度游的旅人，都应该来凯梅里看看。它不仅仅是一个国家公园，它是一面镜子，照见我们与土地最原始的关系。在快节奏的、被数字信息淹没的世界里，凯梅里提供了一种珍贵的“神经阻尼器”。行走在万年形成的沼泽之上，你会明白什么是真正的“缓慢”与“持久”。它教会我们敬畏，那种不是出于恐惧，而是出于理解的敬畏。它告诉我们，最美的风景，有时并非奇观，而是一种允许万物按照自己节奏呼吸的、磅礴的耐心。来这里，不是收集一个景点，而是给自己的内心，做一次深度的、自然的疗愈。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/turaida-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图雷达城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Turaida Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sigulda-medieval-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡古尔达中世纪城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigulda Medieval Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cesis-old-town-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采西斯古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cēsis Old Town</p>
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
