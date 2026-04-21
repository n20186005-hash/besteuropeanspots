import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '彭内 Penne｜探访意大利“砖之城”与钩针蕾丝的时光秘境 - 最佳欧洲景点',
  description: '车子在亚平宁山脉东麓的丘陵间盘旋，当你觉得眼前只是连绵不绝的橄榄园和葡萄田时，一个拐弯，它便猝不及防地撞进视野：彭内。那不是一座“建”在山上的城，而像是大地本身隆起了脊梁，然后用亿万块赭红色的砖，细心包裹、塑形而成的一道坚固誓言。第一眼，你就会被那几乎要燃烧起来的、统一的砖红色所震撼。那不是故宫宫墙',
}

export default function PenneBrickCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '彭内', href: '/destinations/italy' },
            { label: '彭内', href: '/attractions/penne-brick-city' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`彭内・Penne・意大利・彭内`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在亚平宁山脉东麓的丘陵间盘旋，当你觉得眼前只是连绵不绝的橄榄园和葡萄田时，一个拐弯，它便猝不及防地撞进视野：彭内。那不是一座“建”在山上的城，而像是大地本身隆起了脊梁，然后用亿万块赭红色的砖，细心包裹、塑形而成的一道坚固誓言。第一眼，你就会被那几乎要燃烧起来的、统一的砖红色所震撼。那不是故宫宫墙那般威严的正红，而是一种混合了土地、陶土与夕阳的暖调赭红，在亚得里亚海湛蓝天空的映衬下，像一块刚从窑里取出、尚带余温的巨大陶器，安详地卧在四座山丘之上。
走进古老的圣弗朗切斯科城门，光线骤然柔和。脚下是历经数百年被脚步打磨得光滑如镜的砖石路，两侧是同样砖红色、高耸而亲密的墙壁。空气里有种干燥的、好闻的石头味道，混合着从某户人家窗台飘出的罗勒香气。你的耳朵会自动过滤掉现代世界的嘈杂，捕捉到的是鞋跟叩击石板的清脆回响、远处广场上若有若无的闲聊声意大利语，以及，如果你仔细听，从某扇虚掩的木门后传来的、极有规律的、细密的“咔哒”声——那是钩针与线绳交织的节奏，是这座小镇跳动了几百年的心脏。
彭内最打动人心的，绝非冰冷的历史遗迹，而是那种稠密的、仍在延续的日常生活感。午后阳光斜射进狭窄的巷子“vicoli”，老先生们坐在自家门前的石阶上晒太阳，他们的妻子可能在屋内，手指翻飞，将洁白的棉线变成一片片雪花般精致的蕾丝。你会看到阳台上晾晒着鲜艳的床单，窗口探出怒放的天竺葵，拐角处的小酒吧飘出浓缩咖啡的醇香。这里的魅力在于，它坦然地以最本真的面貌生活着，历史不是被封存的展品，而是每天行走的街道、触摸的墙壁和手中传承的手艺。它让你相信，有些美好，真的可以穿越时光，固执而温柔地存留下来。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在亚平宁山脉东麓的丘陵间盘旋，当你觉得眼前只是连绵不绝的橄榄园和葡萄田时，一个拐弯，它便猝不及防地撞进视野：彭内。那不是一座“建”在山上的城，而像是大地本身隆起了脊梁，然后用亿万块赭红色的砖，细心包裹、塑形而成的一道坚固誓言。第一眼，你就会被那几乎要燃烧起来的、统一的砖红色所震撼。那不是故宫宫墙那般威严的正红，而是一种混合了土地、陶土与夕阳的暖调赭红，在亚得里亚海湛蓝天空的映衬下，像一块刚从窑里取出、尚带余温的巨大陶器，安详地卧在四座山丘之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进古老的圣弗朗切斯科城门，光线骤然柔和。脚下是历经数百年被脚步打磨得光滑如镜的砖石路，两侧是同样砖红色、高耸而亲密的墙壁。空气里有种干燥的、好闻的石头味道，混合着从某户人家窗台飘出的罗勒香气。你的耳朵会自动过滤掉现代世界的嘈杂，捕捉到的是鞋跟叩击石板的清脆回响、远处广场上若有若无的闲聊声意大利语，以及，如果你仔细听，从某扇虚掩的木门后传来的、极有规律的、细密的“咔哒”声——那是钩针与线绳交织的节奏，是这座小镇跳动了几百年的心脏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "彭内最打动人心的，绝非冰冷的历史遗迹，而是那种稠密的、仍在延续的日常生活感。午后阳光斜射进狭窄的巷子“vicoli”，老先生们坐在自家门前的石阶上晒太阳，他们的妻子可能在屋内，手指翻飞，将洁白的棉线变成一片片雪花般精致的蕾丝。你会看到阳台上晾晒着鲜艳的床单，窗口探出怒放的天竺葵，拐角处的小酒吧飘出浓缩咖啡的醇香。这里的魅力在于，它坦然地以最本真的面貌生活着，历史不是被封存的展品，而是每天行走的街道、触摸的墙壁和手中传承的手艺。它让你相信，有些美好，真的可以穿越时光，固执而温柔地存留下来。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`彭内`} />
                <InfoRow label="英文名称" value={`Penne`} />
                <InfoRow label="正式名称" value={`Penne`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`彭内`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座完美镶嵌在岩石山脊上的中世纪防御山城，是了解意大利南部阿布鲁佐地区历史与民间工艺的活态窗口。`} />
                <InfoRow label="建筑特色" value={`几乎所有建筑均由当地特有的、温暖而质朴的赭红色砖石砌成，建筑与基岩浑然一体，形成极具视觉冲击力的统一色调。`} />
                <InfoRow label="建筑风格" value={`以中世纪山城风格为主导，融合了罗马式、哥特式及后期巴洛克式的局部装饰，展现了基于本土材料的独特建筑语汇。`} />
                <InfoRow label="文化价值" value={`不仅保存了完整的古城肌理，更传承了珍贵的“钩针蕾丝”手工编织技艺，是一座仍在呼吸的生活博物馆。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要教堂（如圣母升天教堂）开放时间通常为上午8点至下午1点，下午3点至7点，冬季可能缩短。市立考古博物馆、主教博物馆等开放时间各异，一般为周二至周日上午10点至下午1点，下午4点至7点，周一闭馆。最佳游览季节为春季（4-6月）和秋季（9-10月），气候宜人，色彩丰富。夏季午后炎热，许多店铺会午休。重要宗教节日（如8月15日的圣母升天节）期间，小镇会举办盛大活动，但部分机构可能调整开放时间。`} />
              <InfoRow label="门票价格" value={`进入彭内古城本身免费。市立考古博物馆门票约3欧元，主教博物馆门票约2欧元。通常有联票选项，约4欧元可参观主要博物馆。65岁以上老人、18岁以下青少年及学生享有优惠票价。每月第一个周日，部分国立博物馆可能免费开放，具体需现场查询。参加当地的钩针蕾丝工作坊体验，费用大约在20-40欧元不等，取决于时长和内容。`} />
              <InfoRow label="地址" value={`Piazza Luca da Penne, 65017 Penne PE, Italy`} />
              <InfoRow label="交通方式" value={`最近的主要国际机场是佩斯卡拉的阿布鲁佐国际机场，距离彭内约50公里，车程50分钟。从机场可以乘坐出租车（费用较高，约80-100欧元）或提前预订接驳车前往。最经济的公共交通方式是：从机场乘坐巴士或火车到佩斯卡拉中央车站，然后在佩斯卡拉巴士站换乘ARPA公交公司的班车前往彭内。班车班次有限，平日大约每天4-5班，周日和节假日锐减，车程约1小时20分钟。强烈建议出发前在ARPA官网查询最新时刻表。自驾是最灵活的方式，从佩斯卡拉沿A14和SS151公路行驶，约50分钟可达。古城内街道狭窄陡峭且多为ZTL交通限制区，务必在城墙外寻找公共停车场（如Piazza San Domenico附近的停车场），然后步行游览。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲彭内的故事，得从它脚下的土地开始。这片山脊在史前时代就有人类活动的痕迹，但真正让它登上历史舞台的，是罗马人。Penne这个名字，很可能就源于拉丁语“Pinna”，意为“羽毛”、“山峰”或“城墙垛口”，形象地描述了它高踞山脊、易守难攻的地形。罗马人看中了它的战略位置，在此设防。但真正赋予它今天雏形的，是中世纪的动荡岁月。蛮族入侵、领主纷争，迫使人们寻找最安全的地方安居。于是，这几座相连的山丘，因其天然的防御优势，成为了理想的避难所和堡垒。诺曼人来了，他们在这里建造了坚固的城堡（今天只剩废墟），城市的轮廓在防御需求下被仔细规划：狭窄曲折的街道既能迷惑敌人，又能有效抵挡山风；房屋紧紧依偎，共用墙壁，节省材料也利于巷战；所有的建筑，都采用最容易从附近山谷获取的黏土烧制成的砖石。这不是美学选择，最初是生存的智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪是彭内的黄金时代。它成为了重要的行政和宗教中心，建立了主教座堂，迎来了不同的修道会，如方济各会和道明会，他们修建了宏伟的教堂和修道院。城市在四个山丘上发展出不同的街区，各有其教堂和广场，形成了多中心的独特格局。你可以想象，在那个时代，工匠、商人、修士、贵族在这迷宫般的砖红色巷道里穿梭，市场熙攘，钟声回荡。它的坚固也历经考验，在漫长的世纪里，多次抵挡了外来军队的围攻。然而，再坚固的砖石也敌不过大地的震颤。阿布鲁佐是地震频繁的区域，彭内在历史上遭受了多次严重地震的破坏，尤其是1703年和1915年的两次大地震，几乎将城市夷为平地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但彭内人的韧性就体现在这里：每一次倒塌，他们都用同样的赭红色砖石，在原址上重建家园。他们没有引入外来的大理石或新的建筑风格，而是固执地沿用祖先的材料和工艺，一遍又一遍地“复写”自己的城市记忆。这正是为什么今天我们看到的是一个风格如此统一的小镇——这种统一性，并非来自某个天才建筑师的一气呵成，而是来自一代代普通民众在灾难后，用共同的记忆和材料，进行的集体复建。每一块砖，都承载着“重生”的寓意。与此同时，一种更为精细的技艺在闺阁中悄然发展并传承下来：钩针蕾丝。据说起源于修道院，后来成为镇上女性必备的技艺。在漫长的冬日或夜晚，妇女们聚在一起，用一枚小小的钩针，将细线编织成无比繁复精美的图案，用于装饰服装、家居布艺。这门手艺，如同砌砖一样，需要极大的耐心和定力，它不仅是生计的补充，更是情感的表达和女性社区的纽带，成为了彭内另一张柔软却坚韧的文化名片。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间给彭内，才能真正感受它的节奏。最好在上午9点左右抵达，这时阳光正好将城墙染成金黄，游客稀少，本地人刚开始一天的生活。整体游览节奏宜慢不宜快，核心不是“打卡”，而是“沉浸”。上午用2-3小时，沿着古城外围的步道和主街行走，感受宏观布局和光影；中午在中心广场享用一顿漫长的午餐，观察市井生活；下午用2-3小时，深入探索小巷、参观博物馆或拜访蕾丝作坊；傍晚时分，一定要找一个制高点，等待日落将整座“砖之城”点燃。这样的安排能让你体验到小镇从苏醒到宁静的全过程，并避开最炎热的正午时段在户外暴走。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适防滑的步行鞋，这里的街道几乎全是凹凸不平的砖石路面和陡坡。许多小教堂和博物馆有漫长的午休时间（大约下午1点到4点），计划行程时务必查清。不要试图开车进入历史中心区，狭窄的街道和ZTL限行区会让你陷入麻烦，乖乖把车停在城外步行区边缘的免费或收费停车场。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从古老的 Porta San Francesco 城门进入，让眼睛慢慢适应那扑面而来的、笼罩一切的赭红色调与清凉的巷道微风。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街 Corso dei Cappuccini 缓步上行，不时探头看看两旁如峡谷裂缝般狭窄却生机勃勃的侧巷，那里晾晒着衣物，摆放着绿植。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`被潺潺水声引到 Piazza Luca da Penne 主广场，在环绕广场的拱廊下找一家咖啡馆坐下，点一杯“caffè macchiato”，看老人们聚在一起读报、聊天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观广场旁的圣母升天教堂，在略显昏暗的内部寻找那些幸存的巴洛克装饰，并触摸那冰冷却让人安心的巨大砖柱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着指示牌钻进小巷，找到市立考古博物馆，看看从这片古老土地上出土的罗马与前罗马时代文物，理解这座城市更深的地基。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后拜访一家当地蕾丝工艺协会或工作室，亲眼看着一位“大师”如何用一枚钩针和一根白线，仿佛变魔术般编织出花朵与几何图形。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着 Via del Castello 向上攀登，来到诺曼城堡的废墟，虽然只剩断壁残垣，但这里是俯瞰整个古城砖红色屋顶海洋与远处格拉诺山河谷全景的绝佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一小时，慢慢溜达到城镇另一侧的 Belvedere 观景台，找张长椅坐下，看着夕阳如何一点一点将每一块砖石从赭红染成金红，再变成深邃的紫红。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`小镇南侧外围公路的拐弯处`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，使用长焦镜头可以压缩空间，拍出彭内古城如同从山岩中生长出来的、极具几何美感的全景，赭红色建筑群在晨雾或夕阳光芒中层次分明。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`诺曼城堡废墟的城墙边缘`}</h4>
                  <p className="text-sm text-gray-700">{`下午时段，以残破的砖石拱门或窗框作为前景框架，将对焦放在远处层层叠叠的砖红色屋顶和更远处辽阔的亚平宁山谷上，形成历史沧桑与永恒自然的强烈对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`任意一条狭窄小巷“Vicolo”的中段`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，光线会像一道利刃劈入巷中，在两侧高墙上留下分明锐利的光影分割线，等待一个当地人（最好是穿着深色衣服的老者）走入光区按下快门，故事感瞬间拉满。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`主广场 Piazza Luca da Penne 的拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`阴天或清晨，利用拱廊形成的天然纵深线条，拍摄人物在廊柱间行走或坐在咖啡馆外的背影，焦点可以落在远处被拱廊框住的教堂立面上，营造电影感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`钩针蕾丝工作坊的室内特写`}</h4>
                  <p className="text-sm text-gray-700">{`请求许可后，近距离拍摄工匠布满岁月痕迹的双手持钩针工作的特写，以虚化的白色蕾丝半成品为背景，使用窗外的自然侧光，能拍出充满温度与细节的人文肖像。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地人的隐私，拍摄居民尤其是正在从事蕾丝编织的妇女前，请务必先微笑并用手势征求同意，一句简单的“Foto?（拍照？）”和善意的微笑能打开很多门。砖石的色彩在一天中变化极大，清晨冷冽，正午强烈，傍晚温暖，如果想获得最饱和温暖的“砖之城”色调，黄金日落时段是最佳选择。小巷中光影对比强烈，建议使用相机的HDR模式或RAW格式拍摄，以便后期保留高光和阴影的细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城中心的历史石屋`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由几个世纪老宅改造的公寓，厚重的砖墙让室内夏凉冬暖，推开木窗就是错落的红瓦屋顶和教堂钟楼，夜晚能听到石板路上的细微回响。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`郊外田园农庄住宿`}</h4>
                  <p className="text-sm text-green-800">{`选择古城外几公里处一个家庭经营的“Agriturismo”，住在简朴但舒适的房间里，早餐享用自家产的奶酪、蜂蜜和鸡蛋，晚上在星空下听田野的虫鸣，享受真正的阿布鲁佐乡村宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山间精品小型酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在能俯瞰彭内全景的山坡上的设计酒店，房间拥有巨大的落地窗和露台，现代简约的风格与窗外的古老景观形成奇妙对话，泡在浴缸里就能看落日沉入砖红色城邦。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`修道院改造的独特旅舍`}</h4>
                  <p className="text-sm text-purple-800">{`体验住在经过精心修复的古老修道院回廊建筑中的感觉，房间挑高极高，保留着原始的砖拱和石阶，庭院中绿意盎然，氛围宁静而灵性，适合寻求内省之旅的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "彭内非常安全，夜间独自在老城区行走也无须担心。但需要注意的是，许多老房子改造的住宿没有电梯，且位于陡峭的巷弄深处，携带大件行李箱会非常吃力，建议轻装并确认酒店是否提供搬运服务。夏季（7-8月）和重要宗教节日期间住宿紧张，务必提前数月预订；春秋季是理想时间，不仅气候舒适，也更容易找到心仪的住处。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开彭内许久，那一片铺天盖地的赭红色，依然会时不时在脑海中浮现。它不像那些令人屏息的伟大古迹，用绝对的尺度与华丽震慑你；它更像一位温和的长者，用布满老茧的手掌，握着你，带你触摸时间的另一种质地——那种循环的、坚韧的、日常的质地。在这里，你理解了“传承”二字最朴素的模样：不是博物馆玻璃后的精致展品，而是用同样的砖，反复修建家园；用同样的针法，一遍遍编织生活。地震来了，房子倒了，再砌起来；女孩长大了，从母亲那里学会钩针，为未来的家庭准备嫁妆。这种循环里，有一种动人的安全感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求日新月异的世界里，彭内固执地慢了下来，甚至可以说，它以一种近乎静止的姿态，守护着一种即将消逝的“人类节奏”。它提醒我们，文明不仅存在于恢弘的史诗中，也存在于一块砖的烧制、一线一针的穿梭里。来到这里，你会不自觉地放慢脚步，压低声音，你会开始注意到阳光在墙壁上移动的轨迹，会聆听巷子深处的种种生活细响。这是一次对感官的唤醒，更是一次对内心的抚慰。它告诉你，有些价值，比如耐心、社区、与土地的连接，从未过时。每一位热爱深度游的旅人，都该来彭内住上一晚，不只是为了看一座“砖之城”，更是为了体验一种时间流淌的方式，感受那种在柔软蕾丝与坚硬砖石之间达到奇妙平衡的生命哲学，然后，带着这份沉静的温暖，重新上路。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ravenna-mosaics-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉文纳马赛克群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Early Christian Monuments of Ravenna</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/marsala" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔萨拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Marsala</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viterbo-papal-palace-medieval-quarter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维泰博（教皇宫及中世纪区）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viterbo (Papal Palace and Medieval Quarter)</p>
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
