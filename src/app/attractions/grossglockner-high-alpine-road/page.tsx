import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '大格洛克纳高山公路 Grossglockner High Alpine Road｜在冰川与土拨鼠之间穿梭的欧洲最美高山自驾公路 - 最佳欧洲景点',
  description: '朋友，想象一下，你手里的方向盘不再是普通的交通工具，而是一支画笔，眼前延展的柏油路就是你的画布，你要画的，是阿尔卑斯山最波澜壮阔的立体长卷。这就是驶上大格洛克纳高山公路最初几秒钟的感觉。引擎低吼着，车子开始盘旋上升，窗外的空气瞬间变得清冽透明，带着松针、融雪和远处冰川特有的、那种凛冽又纯净的气味。收...',
}

export default function GrossglocknerHighAlpineRoadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '大格洛克纳高山公路', href: '/attractions/grossglockner-high-alpine-road' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`大格洛克纳高山公路・Grossglockner High Alpine Road・奥地利・海尔布隆（主要入口）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你手里的方向盘不再是普通的交通工具，而是一支画笔，眼前延展的柏油路就是你的画布，你要画的，是阿尔卑斯山最波澜壮阔的立体长卷。这就是驶上大格洛克纳高山公路最初几秒钟的感觉。引擎低吼着，车子开始盘旋上升，窗外的空气瞬间变得清冽透明，带着松针、融雪和远处冰川特有的、那种凛冽又纯净的气味。收音机里的流行乐早就被关掉了，取而代之的是轮胎碾过崭新路面的沙沙声、掠过车顶的山风声，还有你自己因为兴奋而略微加重的呼吸声。
这条路根本不像是在“行驶”，更像是在“翻阅”。一转弯，是一页墨绿色的云杉林，厚实得像天鹅绒地毯；再一转弯，就翻到了草甸那一章，柔和的黄绿山坡上，点缀着像小绒球一样的阿尔卑斯野花，在阳光下闪着细微的光。然后，海拔越来越高，树木逐渐退场，舞台完全交给了岩石和冰雪。巨大的、泛着幽蓝色光泽的帕斯特泽冰川毫无征兆地闯入视野，它那么静，又那么有压迫感，像一头沉睡的远古巨兽。而路的另一边，可能正有几只憨态可掬的土拨鼠（当地人叫它们“Murmeltier”）直立着身子，好奇地打量着你这个移动的铁盒子，它们嘹亮的口哨声是这片高山乐园最生动的背景音。
对于奥地利人来说，这条公路绝不仅仅是一条观光路线。它是祖父辈勇气与智慧的纪念碑，是全家夏日出游的经典目的地，也是向世界展示阿尔卑斯山心脏地带尊严的窗口。你会看到头发花白的老夫妇，开着经典的老爷车，在每个观景台停下，静静地凝望，那眼神里装的不仅是风景，还有他们一生的记忆。它的核心魅力，就在于这种极致的对比与融合：人类工程学的精巧与大自然原始蛮力的对峙，最终却达成了一种动人心魄的和解。你不是在征服高山，而是在它的允许下，进行一场盛大的巡礼。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你手里的方向盘不再是普通的交通工具，而是一支画笔，眼前延展的柏油路就是你的画布，你要画的，是阿尔卑斯山最波澜壮阔的立体长卷。这就是驶上大格洛克纳高山公路最初几秒钟的感觉。引擎低吼着，车子开始盘旋上升，窗外的空气瞬间变得清冽透明，带着松针、融雪和远处冰川特有的、那种凛冽又纯净的气味。收音机里的流行乐早就被关掉了，取而代之的是轮胎碾过崭新路面的沙沙声、掠过车顶的山风声，还有你自己因为兴奋而略微加重的呼吸声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这条路根本不像是在“行驶”，更像是在“翻阅”。一转弯，是一页墨绿色的云杉林，厚实得像天鹅绒地毯；再一转弯，就翻到了草甸那一章，柔和的黄绿山坡上，点缀着像小绒球一样的阿尔卑斯野花，在阳光下闪着细微的光。然后，海拔越来越高，树木逐渐退场，舞台完全交给了岩石和冰雪。巨大的、泛着幽蓝色光泽的帕斯特泽冰川毫无征兆地闯入视野，它那么静，又那么有压迫感，像一头沉睡的远古巨兽。而路的另一边，可能正有几只憨态可掬的土拨鼠（当地人叫它们“Murmeltier”）直立着身子，好奇地打量着你这个移动的铁盒子，它们嘹亮的口哨声是这片高山乐园最生动的背景音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于奥地利人来说，这条公路绝不仅仅是一条观光路线。它是祖父辈勇气与智慧的纪念碑，是全家夏日出游的经典目的地，也是向世界展示阿尔卑斯山心脏地带尊严的窗口。你会看到头发花白的老夫妇，开着经典的老爷车，在每个观景台停下，静静地凝望，那眼神里装的不仅是风景，还有他们一生的记忆。它的核心魅力，就在于这种极致的对比与融合：人类工程学的精巧与大自然原始蛮力的对峙，最终却达成了一种动人心魄的和解。你不是在征服高山，而是在它的允许下，进行一场盛大的巡礼。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`大格洛克纳高山公路`} />
                <InfoRow label="英文名称" value={`Grossglockner High Alpine Road`} />
                <InfoRow label="正式名称" value={`Grossglockner High Alpine Road`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`海尔布隆（主要入口）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是阿尔卑斯山脉最伟大的工程壮举之一，也是奥地利第一共和国时期的国家形象工程，将此前只有登山者才能触及的高山秘境向普通人敞开。`} />
                <InfoRow label="建筑特色" value={`一条如丝带般精心编织在嶙峋山脊与深邃山谷之间的柏油公路，拥有36个惊心动魄的发夹弯，最高点海拔超过2500米。`} />
                <InfoRow label="建筑风格" value={`纯粹的功能主义与壮丽的自然地貌相结合，形成了极具震撼力的阿尔卑斯山工程美学。`} />
                <InfoRow label="文化价值" value={`不仅是一条路，更是一部移动的奥地利高山文化教科书，体现了人类对自然的敬畏、挑战与和谐共存的复杂情感。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公路为季节性开放，通常开放时间为每年五月初至十月底，具体日期视当年积雪融化情况而定，每年会有微调。每日开放时间通常为黎明至黄昏（约早上5:00至晚上20:00），但允许进入的时间可能提前结束以确保游客在天黑前安全下山。强烈建议出行前在其官方网站查询确切的年度开放日程。冬季大雪后公路完全关闭，变身滑雪和雪地徒步的乐园。`} />
              <InfoRow label="门票价格" value={`门票按车辆收费，非单次通行证，有效期为当天（可多次进出）。标准小汽车（含最多9座）票价约为40欧元（一日通票）。摩托车票价约为28欧元。摩托车带边车、房车及巴士票价更高。自行车及摩托车队有团体优惠。购买多日通票（如30天通票）会有小幅折扣。门票可在两个主要入口（海尔布隆或费尔伯-多恩）的收费站以现金或信用卡现场购买，也支持在线预订。持有奥地利某些州（如萨尔茨堡、克恩顿、蒂罗尔）的旅游卡可能享有小额折扣。`} />
              <InfoRow label="地址" value={`Grossglockner Hochalpenstraßen AG, Rainerstraße 2, 5020 Salzburg, Austria`} />
              <InfoRow label="交通方式" value={`这条公路的核心体验是自驾。最近的国际机场是萨尔茨堡机场（SZG）和克拉根福机场（KLU）。建议在机场或城市（如萨尔茨堡、菲拉赫）租车前往。从萨尔茨堡出发：沿A10高速公路向南，在“Bischofshofen”或“St. Michael”出口转入B311公路，再根据路标前往“Heiligenblut”或“Fusch”，抵达北入口（海尔布隆收费站），车程约1.5-2小时。从克拉根福出发：沿B107公路向西北方向行驶，经“Lienz”后沿B107继续前行至南入口（费尔伯-多恩收费站），车程约2小时。公路本身全长约48公里，但加上盘山和停留时间，建议预留至少半天。没有可靠的全程公共交通，但夏季有从周边城镇出发的观光巴士一日游。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从将近一百年前说起。那时候，奥地利第一共和国刚刚从奥匈帝国的废墟中站起来，又迎面撞上了全球性的经济大萧条。国家需要一剂强心针，一个能凝聚民心、创造就业、并向世界展示新奥地利形象的伟大工程。于是，一个近乎疯狂的构想被提了出来：在雄伟的格洛克纳山群（奥地利最高峰所在）的怀抱中，修建一条跨越阿尔卑斯山主脉的高等级公路。在此之前，只有最勇敢的登山者和驮货的骡子小道能穿越这片区域。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`牵头的是工程师弗朗茨·瓦拉奇，一个有着钢铁般意志的梦想家。从1930年8月动工，到1935年8月通车，整整五年，超过三千名工人在极其恶劣的条件下工作。没有现代重型机械，大部分依靠炸药、镐、铲和双手。他们在海拔两三千米的悬崖上开凿，冬天忍受着零下二三十度的严寒和雪崩的威胁，夏天顶着强烈的紫外线。这是一场人与自然的直接肉搏。令人惊叹的是，尽管条件艰苦，工程却体现了当时最先进的理念：路线设计最大限度地顺应了地形，减少了对自然景观的破坏，沿途还精心规划了观景台和休息站。它生来就不仅仅是为了通行，更是为了“体验”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`公路的通车在当时是轰动欧洲的大事。它立刻成为了上流社会和新中产阶级的时尚目的地。人们开着最新的汽车，来这里感受“阿尔卑斯山的浪漫与力量”。然而，好景不长。二战爆发后，这条战略公路被纳粹德国军方接管，成为了运输物资的通道，也留下了战争的创伤。战后，它重新回到奥地利手中，并进行了大规模的修复和现代化改造。上世纪七八十年代，随着全球旅游业的兴起，它真正成为了一个国际性的旅游图标。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但奥地利人没有躺在功劳簿上。近几十年来，管理的重点从单纯的观光转向了可持续的生态旅游。他们严格限制车流量，设立了自然保护区，并投入大量资金研究气候变化对冰川和脆弱高山生态的影响。今天的公路管理局，更像是一个高山生态的守护者。这条公路的历史，就像一部微缩的奥地利现代史：从建国初的奋发图强，到战火的洗礼，再到战后的经济奇迹与如今的生态反思。它脚下的柏油，浸润着汗水、荣耀、伤痛与智慧。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的格洛克纳之旅需要一整天的时间，切忌匆忙。建议在清晨（8点前）从北入口（海尔布隆侧）进入，此时光线柔和，车流稀少，动物活动频繁。整体耗时约6-8小时，这包括了驾驶、频繁停车观景、徒步短径和午餐时间。节奏应该是松弛而充满期待的，遵循“开一段，停一阵”的原则，因为最美的风景永远在下一个弯道和观景台。这样安排不仅能避开中午上山的旅游巴士高峰，还能让你在傍晚时分，在山顶附近守候阿尔卑斯山最壮丽的日落金光洒在格洛克纳峰顶的瞬间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`即使夏季，高海拔处也可能非常寒冷且天气瞬息万变，务必携带防风外套、帽子甚至手套。
全程几乎没有加油站，务必在进入公路前加满油，并检查车况。
公路限速严格，且常有野生动物（土拨鼠、羱羊）窜上路面，请务必谨慎慢行。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从绿意盎然的海尔布隆山谷入口开始爬升，摇下车窗感受气温逐秒下降和森林气息的变化`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个大型观景台“豪斯阿尔卑斯之眼”停下，回望来路，看公路如细线般缠绕在谷底`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达“弗朗茨·约瑟夫皇帝高地”游客中心，从这里换乘短途巴士或徒步走近帕斯特泽冰川那泛着蓝光的冰舌`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在海拔最高的“爱德华-赛斯尼克”观景台（2571米）停留，感受稀薄清凉的空气和360度无死角的峰峦环绕`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着山路下行前往南侧，在“土拨鼠乐园”附近慢行或停车，寻找这些可爱哨兵的身影并聆听它们独特的叫声`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在南端的“费尔伯-多恩”出口附近，找一家传统的阿尔卑斯山屋享用一顿以当地奶酪和野味为主的迟来午餐`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，不要立刻离开，选择一条标注清晰的短途徒步小径，比如去“马格利特湖”，让自己完全沉浸在高山寂静中`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前折返至山中段的某处开阔地，看着夕阳将雪峰依次染成金黄、玫红直至沉入暗蓝的仪式`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`弗朗茨·约瑟夫皇帝高地眺望台`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时，以冰川巨大的冰裂隙和褶皱为前景，将远处金字塔形的格洛克纳主峰作为背景，构成立体感极强的画面`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`公路经典发夹弯航拍`}</h4>
                  <p className="text-sm text-gray-700">{`使用无人机（在法规允许区域）从高处俯拍，捕捉公路如缎带般缠绕山体、形成完美几何曲线的震撼视角，最佳光线在上午或傍晚`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`土拨鼠特写镜头`}</h4>
                  <p className="text-sm text-gray-700">{`在“土拨鼠乐园”附近，使用长焦镜头静卧等待，捕捉土拨鼠站立警戒或啃食野花的生动瞬间，背景是模糊的高山草甸`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“豪斯阿尔卑斯之眼”观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨利用顺光，用广角镜头拍摄山谷中晨雾缭绕、公路蜿蜒其间的梦幻开场画面`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`南侧盘山路俯拍格洛克纳峰`}</h4>
                  <p className="text-sm text-gray-700">{`从南段往北行驶的途中，有几个回头弯能拍到公路引导线直指格洛克纳峰的经典画面，傍晚的逆光能勾勒出山峰的硬朗轮廓`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`高山紫外线强烈且光线反差大，建议使用偏振镜来提升蓝天和冰川的质感，并平衡光比。`}</li>
                <li>• {`许多最佳观景点就在路边，但绝对不要随意在弯道或禁止停车处停车拍照，非常危险且会受重罚。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山间木屋沉浸体验`}</h4>
                  <p className="text-sm text-blue-800">{`预订公路中段如“Wallackhaus”这样的历史山屋酒店，夜晚推门即是璀璨银河，清晨在土拨鼠的叫声中醒来`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`北入口古典小镇之家`}</h4>
                  <p className="text-sm text-green-800">{`住在童话般的海尔布隆镇，选择一家能看到教堂尖顶的家庭旅馆，深入体验阿尔卑斯山村落的宁静夜晚`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`南侧田园牧歌民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`落脚在费尔伯河谷的农庄民宿，清晨挤牛奶的叮当声和新鲜农家奶酪的早餐，是公路狂想曲后最温暖的休止符`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感高山 Retreat`}</h4>
                  <p className="text-sm text-purple-800">{`追求现代舒适的话，可以选择周边山谷里由著名建筑师设计的高端精品酒店，在极简主义空间里回味白日的极致壮丽`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`公路沿线的山屋酒店数量极少且极其热门，务必提前数月预订，尤其是在七八月的旺季。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果对海拔敏感，建议选择住在海拔较低（1000米以下）的入口城镇，以免因高山住宿影响睡眠和体力。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`当我最终把车停在山脚下，回头望去，那条细线已经隐入暮色苍茫的山体之中，仿佛一场盛大歌剧刚刚落下帷幕。但我知道，有些东西已经不一样了。这条公路给予我的，远不止那些存储在相机里的、令人屏息的画面。它更像是一次对“速度”与“距离”的重新定义。在这个高铁和飞机模糊了地理感的时代，它固执地用48公里的长度，让你一寸一寸地、用身体感知海拔的攀升、气温的骤降、植被的更迭。它让你慢下来，不是被动的等待，而是充满惊喜的、主动的探索。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个崇尚“直达”和“效率”的世界里，大格洛克纳高山公路是一个优美的“异数”。它证明，最美的往往不是终点，而是过程本身；最深刻的连接，不是瞬间的抵达，而是充满曲折的抵达之路。它教会每一位旅人谦卑——在冰川永恒的流动面前，在土拨鼠简单纯粹的生存面前，人类那些引以为傲的创造，不过是这宏大叙事中的一段插曲。所以，如果你厌倦了景点打卡，渴望一场能调动所有感官、并与大地深度对话的旅行，请务必来这里。这不是一次简单的自驾，这是一次驶向阿尔卑斯山灵魂深处的朝圣，一次让你在往后无数个平凡日子里，只要闭上眼睛，就能立刻召回那份辽阔与自由的心灵备份。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bad-ischl" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴德伊舍</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Ischl</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gmunden-lake-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登湖城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Lake City</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gmuend-in-kaernten" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格明德（隐秘在国家公园旁的艺术家之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmünd in Kärnten</p>
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
