import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '库肯霍夫城堡 Kasteel Keukenhof｜郁金香王国对面的隐秘贵族庄园，漫步19世纪时光与宁静雕塑花园 - 最佳欧洲景点',
  description: '想象一下，当你从人声鼎沸、色彩爆炸的库肯霍夫郁金香花园走出来，耳朵里还回荡着各种语言的惊叹，眼睛被那些规整的花田晃得有些疲惫。这时，你只需穿过一条安静的马路，世界瞬间就切换了频道。喧嚣像潮水一样退去，取而代之的是一种深沉的、绿色的宁静。你面前是一条林荫大道，尽头是一座被宽阔的、镜子般的水面环绕的白色',
}

export default function KasteelKeukenhofPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '荷兰', href: '/destinations/europe' },
            { label: '利瑟', href: '/destinations/europe' },
            { label: '库肯霍夫城堡', href: '/attractions/kasteel-keukenhof' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`库肯霍夫城堡・Keukenhof Castle・荷兰・利瑟`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，当你从人声鼎沸、色彩爆炸的库肯霍夫郁金香花园走出来，耳朵里还回荡着各种语言的惊叹，眼睛被那些规整的花田晃得有些疲惫。这时，你只需穿过一条安静的马路，世界瞬间就切换了频道。喧嚣像潮水一样退去，取而代之的是一种深沉的、绿色的宁静。你面前是一条林荫大道，尽头是一座被宽阔的、镜子般的水面环绕的白色城堡，它不像那些险峻的山巅堡垒，而是优雅地“坐”在土地上，带着一种闲适的、属于庄园主人的气度。这就是库肯霍夫城堡给你的第一印象——一位藏在世界最著名花园背后的、矜持的贵族。
走近它，感官会先于理智被唤醒。空气变得湿润清冽，混合着刚修剪过的草坪、潮湿的泥土以及远处风铃草散发出的淡淡甜香。你能听见的声音变得极其单纯：风吹过高大橡树和山毛榉的沙沙声，护城河里野鸭划水的轻微涟漪声，还有自己踩在砂砾小径上的咯吱声。城堡的倒影完美地投在墨绿色的水面上，只有偶尔游过的天鹅会将它温柔地揉碎。那种宁静是有质量的，它包裹着你，让你不由自主地放轻脚步，压低声音，仿佛生怕惊扰了某个正在书房窗前阅读的古老灵魂。
当地人把这里视作一个逃离日常的“后花园”。你会看到推着婴儿车的母亲在雕塑公园的长椅上小憩，慢跑者沿着护城河边的步道规律地呼吸，老夫妇手挽手在玫瑰园里辨认品种。它不像对面那个季节性的狂欢节，而是一个四季流淌、始终如一的日常生活背景。它的核心魅力，恰恰在于这种“去景点化”的真实感。你来到这里，不是为了征服或打卡，而是被邀请进入一种已经延续了几个世纪的、舒缓的生活节奏里。城堡内部那些保存完好的房间，每一个细节——从墙纸的纹样到水晶吊坠的切面——都在低声诉说着一个关于品味、闲暇与家族记忆的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想象一下，当你从人声鼎沸、色彩爆炸的库肯霍夫郁金香花园走出来，耳朵里还回荡着各种语言的惊叹，眼睛被那些规整的花田晃得有些疲惫。这时，你只需穿过一条安静的马路，世界瞬间就切换了频道。喧嚣像潮水一样退去，取而代之的是一种深沉的、绿色的宁静。你面前是一条林荫大道，尽头是一座被宽阔的、镜子般的水面环绕的白色城堡，它不像那些险峻的山巅堡垒，而是优雅地“坐”在土地上，带着一种闲适的、属于庄园主人的气度。这就是库肯霍夫城堡给你的第一印象——一位藏在世界最著名花园背后的、矜持的贵族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近它，感官会先于理智被唤醒。空气变得湿润清冽，混合着刚修剪过的草坪、潮湿的泥土以及远处风铃草散发出的淡淡甜香。你能听见的声音变得极其单纯：风吹过高大橡树和山毛榉的沙沙声，护城河里野鸭划水的轻微涟漪声，还有自己踩在砂砾小径上的咯吱声。城堡的倒影完美地投在墨绿色的水面上，只有偶尔游过的天鹅会将它温柔地揉碎。那种宁静是有质量的，它包裹着你，让你不由自主地放轻脚步，压低声音，仿佛生怕惊扰了某个正在书房窗前阅读的古老灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人把这里视作一个逃离日常的“后花园”。你会看到推着婴儿车的母亲在雕塑公园的长椅上小憩，慢跑者沿着护城河边的步道规律地呼吸，老夫妇手挽手在玫瑰园里辨认品种。它不像对面那个季节性的狂欢节，而是一个四季流淌、始终如一的日常生活背景。它的核心魅力，恰恰在于这种“去景点化”的真实感。你来到这里，不是为了征服或打卡，而是被邀请进入一种已经延续了几个世纪的、舒缓的生活节奏里。城堡内部那些保存完好的房间，每一个细节——从墙纸的纹样到水晶吊坠的切面——都在低声诉说着一个关于品味、闲暇与家族记忆的故事。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`库肯霍夫城堡`} />
                <InfoRow label="英文名称" value={`Keukenhof Castle`} />
                <InfoRow label="正式名称" value={`Kasteel Keukenhof`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`利瑟`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座城堡是荷兰“黄金时代”后贵族庄园文化的优雅典范，见证了从军事防御要塞向奢华生活艺术中心转变的历程。`} />
                <InfoRow label="建筑特色" value={`一座被宽阔护城河环绕的白色新古典主义主体建筑，拥有标志性的阶梯山墙、对称的翼楼和宁静私密的英式景观花园。`} />
                <InfoRow label="建筑风格" value={`以19世纪重建后的新古典主义风格为主，融合了部分荷兰文艺复兴式的传统元素，内部装饰则体现了法国路易十六风格的深刻影响。`} />
                <InfoRow label="文化价值" value={`它不仅是一座建筑遗迹，更是一个鲜活的“时间胶囊”，保存了19世纪荷兰上层社会的生活方式、艺术品味以及与自然共处的哲学。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体及博物馆部分：每年4月初至10月底，每周二至周日开放，周一闭馆（但节假日可能调整）。具体时间为上午10:00至下午5:00，最后入场时间为下午4:30。雕塑公园与城堡花园：全年每日白天开放，冬季（11月至3月）开放时间可能缩短，建议行前在官网确认。请注意，城堡内部在冬季（通常11月至次年3月底）不对外开放，但外部公园仍可游览。特殊活动（如圣诞市场、古典音乐会）期间开放时间会延长。`} />
              <InfoRow label="门票价格" value={`城堡与公园联票：成人17.5欧元，65岁以上长者15欧元，4-12岁儿童10欧元，4岁以下免费。仅参观雕塑公园门票：成人8.5欧元，儿童5.5欧元。持有博物馆卡、ICOM卡等可享受免票或折扣。门票建议通过官方网站提前在线购买，可避免排队并确保入场时段。`} />
              <InfoRow label="地址" value={`Kasteel Keukenhof, Keukenhof 1, 2161 AN Lisse, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发：最便捷的方式是乘坐直达的“库肯霍夫快线”巴士（858路）。在机场到达大厅外的巴士站找到指示牌，车程约30-35分钟，终点站就是库肯霍夫花园入口，下车后过马路步行约5分钟即可抵达城堡大门。巴士班次在花季期间（3月底-5月中）非常频繁，约每10-15分钟一班。从阿姆斯特丹中央火车站出发：可先乘坐火车至莱顿中央车站（约35分钟），然后在车站前广场换乘854路巴士直达库肯霍夫区域（约25分钟）。自驾的话，从阿姆斯特丹市中心出发约40分钟，城堡附近有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从更早的时候说起，远在郁金香成为这里的名片之前。库肯霍夫（Keukenhof）这个名字直译过来是“厨房花园”，因为在15世纪早期，这片土地属于强大的荷兰女伯爵雅各芭·凡·贝耶伦。她是一位性格强悍、命运多舛的统治者，这片广袤的森林和荒野是她的狩猎场，而城堡现在所在的位置，正是她庄园里为厨房供应野味和野菜的地方。所以，这座城堡的基因里，最初写满的是实用主义与荒野气息，是贵族领地上一个繁忙的后勤角落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到17世纪荷兰的“黄金时代”，阿姆斯特丹的商人们富可敌国。1641年，一位名叫阿德里安·马腾斯·布洛克的富商兼市长买下了这片地产。他开始着手将这里从一个单纯的乡村产业，转变为匹配其财富和社会地位的乡村别墅。最初的城堡建筑大概就建于这个时期，它具备了经典的荷兰乡村庄园样式：对称的结构、砖砌的墙面，以及最重要的——用于排水和防御的护城河。不过，我们今天看到的优雅模样，还要等到下一个世纪的一场戏剧性转变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪是这座城堡命运的华丽篇章。它落入了一个富有且有极高艺术修养的家族——范帕拉斯（Van Pallandt）家族手中。特别是19世纪中叶的男爵夫人，她对这座略显老旧的庄园进行了大刀阔斧的改造。她聘请了著名的建筑师，将城堡的外观从略显沉闷的文艺复兴风格，改造成了当时最时髦的新古典主义风格，也就是我们现在看到的这座优雅的白色宫殿。更重要的是，她是一位狂热的园林爱好者。她没有修建当时法国流行的、充满几何强迫症的花园，而是拥抱了正在英国兴起的“如画式”风景园林理念。她引入蜿蜒的小径、精心布置的树丛、意外的景观视角，以及平静的湖泊，将城堡周围的土地变成了一幅可以漫步其中的立体风景画。我们今天漫步的雕塑公园和花园的骨架，正是她天才的馈赠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的剧本总喜欢加入一些惊险情节。在20世纪初，一场灾难性的大火席卷了城堡，内部精美的装饰和陈设几乎毁于一旦。但范帕拉斯家族没有放弃。他们进行了漫长而细致的重建，并依据家族传承的清单和画作，尽力复原了每个房间昔日的荣光。这次重建，更像是一次深情的致敬。如今我们看到的那些闪烁着丝绸光泽的墙布、绘有田园风光的天花板壁画、摆放着中国瓷器的鎏金边柜，都是在这次涅槃重生后，被小心翼翼请回来的“老住户”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "经历了二战的风雨，城堡最终在20世纪下半叶由一个基金会接管，并向公众开放。它不再是某个家族的私产，而成为了一个所有人都可以分享的历史与美的容器。它平静地坐在那里，对面是每年吸引百万游客的狂欢花海，而自己则守护着一份需要静下心来才能品味的、关于时间、传承与生活艺术的秘密。从女伯爵的厨房林地，到商人的乡间别墅，再到男爵夫人的美学实验场，库肯霍夫城堡的每一块砖石，都记录着荷兰社会变迁与阶层品味流转的生动篇章。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览应该从午后开始，避开上午郁金香花园带来的人流高峰。建议安排至少3到4小时的沉浸式时间。节奏应该是“由外向内，由动入静”。首先花费一个多小时在广阔的雕塑公园和花园里自由漫步，让自己的心境从外部的喧嚣中沉淀下来，充分感受庄园的自然氛围。然后，在下午三点左右进入城堡内部参观，此时室内光线柔和，游客相对较少，可以安静地欣赏那些精美的房间。这样的安排模仿了旧时庄园主人一天的生活节奏：午后在花园散步，傍晚回到沙龙休憩。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`每年四月到五月的郁金香花季，城堡公园区域在周末也可能较忙，尽量选择工作日午后前往。城堡内部空间相对精巧，大型背包需寄存，穿着舒适的鞋子至关重要，因为你会在花园里走很多路。内部展览禁止使用闪光灯，且部分房间有敏感的古董地板，请务必走在铺设的保护垫上。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡正门进入后，别急着走向建筑主体，先向右拐，让自己迷失在占地广阔的英式风景园林与雕塑公园中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的砂石小径前行，你会与数十件来自20世纪和当代艺术家的雕塑作品不期而遇，它们与古树、水塘的搭配充满哲思。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那个隐藏在树林深处的“音乐家凉亭”，坐在里面听风吹过树林的声音，感受19世纪贵族对“如画”意境的追求。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过园林后，从城堡的侧面接近，你会看到被护城河完美倒映的白色立面，这是拍照的绝佳时刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过古老的石桥进入城堡内院，抚摸一下门口那对石狮，感受它们被风雨打磨的质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随语音导览（有中文）的指引，依次穿越门厅、吸烟室、餐厅、沙龙和卧室，注意观察天花板壁画、丝绸墙饰和家具上的每一处细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过城堡地下的小型历史博物馆，那里用模型和文物讲述了从“厨房花园”到今日庄园的完整故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观结束后，到城堡咖啡馆的露天座位坐下，点一杯咖啡或苹果派，看着天鹅在护城河里巡游，为这场时光之旅画上完美的句点。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧护城河拐角处`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前一小时，阳光会为白色城堡染上金色，利用河岸边的鸢尾花丛作为前景，可以拍到建筑与完美倒影的对称构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`雕塑公园的“镜湖”旁`}</h4>
                  <p className="text-sm text-gray-700">{`找一尊线条简洁的现代雕塑放在画面一侧，另一侧留白给倒映着天空和树影的湖面以及远处的城堡尖顶，营造空灵的艺术感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡内主楼梯上方`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，自然光从天窗倾泻而下，站在楼梯中段仰拍，能捕捉到精美的铁艺栏杆、水晶吊灯与光影共同构成的几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`花园中的林荫隧道`}</h4>
                  <p className="text-sm text-gray-700">{`在一条长长的、由山毛榉树拱卫的小径尽头回望城堡，将观者的视线引向远处明亮的建筑，获得强烈的纵深感与静谧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡咖啡馆外的露台`}</h4>
                  <p className="text-sm text-gray-700">{`以一杯拉花精致的咖啡或一本翻开的书为前景，背景是波光粼粼的护城河与城堡侧影，营造悠闲的庄园生活氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除护城河反光，让城堡倒影更加清晰透彻。在拍摄室内细节时，尽量调高ISO并使用大光圈，避免使用三脚架（通常不允许）以保证拍摄的灵活性。尊重隐私，不要拍摄城堡内正在工作的员工或其他游客的特写。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`花园景观民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择利瑟小镇上那些由花农之家改造的B&B，推开窗就能闻到夜间湿润的泥土和植物气息，主人会给你讲许多关于花田和城堡的本地故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`运河边的设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`住在不到二十分钟车程的莱顿市，找一家沿古老运河而建的精品酒店，白天探访城堡，夜晚感受大学城的文艺活力，交通餐饮都极为便利。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`阿姆斯特丹的古典酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果你以阿姆斯特丹为基地，可以选择博物馆区附近一家充满古董陈设的精品酒店，乘坐直达巴士往返，兼顾都市便利与田园逃逸。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城堡周边的乡村套房`}</h4>
                  <p className="text-sm text-purple-800">{`在预订平台上搜索利瑟附近的独立度假屋，这些房子通常隐藏在花田或林地边缘，带有一个私人小花园，让你完全沉浸在南荷兰的乡村风情中。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "花季期间（尤其是四月周末）利瑟及周边的住宿非常紧俏，价格也最高，务必提前数月预订。如果追求性价比，可以考虑花季前后（三月或五月）前往，住宿选择更多，花园依然美丽，游客却少得多。利瑟小镇治安极好，夜晚非常宁静，可以放心散步。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开库肯霍夫城堡的时候，我的心里装满了一种奇特的平静。这种平静，与在对面郁金香花园里获得的、那种来自于视觉盛宴的亢奋感截然不同。它更像是一种“消化”，一种对美、对历史、对时间的深度吸收。这座城堡教会我，真正的奢华未必是耀眼的金子或巨大的规模，而是那份能够被保存下来的“从容”。是几代人愿意花费心血去维护一种生活方式的态度，是将自然、艺术与日常生活无缝编织在一起的耐心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求速效、迷恋爆款、一切都被流量驱动的时代，库肯霍夫城堡的存在，就像一个温柔的反对者。它提醒着我们，有些价值需要缓慢的步行才能抵达，有些美藏在喧嚣的背面，等待着那些愿意多走几步、多停留片刻的发现者。它不仅仅是一处景点，更是一个关于“深度”的隐喻。每一位热爱深度游的旅人，都应该来这里上一堂无声的课——学习如何从一片斑斓的花海中转身，走进一片深邃的绿荫，并在那里，听见自己内心的回响，以及历史在墙壁上留下的、悠长的呼吸。这里安放的，或许正是我们在这个快节奏世界里，最渴望却又最常遗失的东西：一片宁静，一段延续的叙事，和一个让心灵真正落脚的花园。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/appingedam-hidden-kitchens" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿平厄丹</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Appingedam</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/woudrichem-water-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃德里赫姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Woudrichem</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/enkhuizen-voc-legacy-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    恩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">恩克赫伊曾</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Enkhuizen</p>
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
