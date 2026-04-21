import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡林诺斯岛 Kalymnos｜从千年海绵潜水到世界级攀岩悬崖 - 最佳欧洲景点',
  description: '飞机开始下降，舷窗外爱琴海是一片无止境的、让人心安的蓝。但当卡林诺斯岛的轮廓逐渐清晰时，那片蓝被一道粗暴的、近乎垂直的赭黄色巨墙猛然切断。那不是温柔的沙滩缓坡，而是像被天神用巨斧劈开，然后将岛屿的内脏——层层叠叠、沟壑纵横的石灰岩——直接暴露在阳光与海风之下。第一印象不是“美丽”，而是一种带着敬畏的',
}

export default function KalymnosIslandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卡林诺斯岛', href: '/attractions/kalymnos-island' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡林诺斯岛・Kalymnos・希腊・南爱琴大区（主要城镇为波萨）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`飞机开始下降，舷窗外爱琴海是一片无止境的、让人心安的蓝。但当卡林诺斯岛的轮廓逐渐清晰时，那片蓝被一道粗暴的、近乎垂直的赭黄色巨墙猛然切断。那不是温柔的沙滩缓坡，而是像被天神用巨斧劈开，然后将岛屿的内脏——层层叠叠、沟壑纵横的石灰岩——直接暴露在阳光与海风之下。第一印象不是“美丽”，而是一种带着敬畏的“震惊”。这就是卡林诺斯，它不向你献上甜蜜的糖霜，而是递出一把粗糙的岩塞。
踏上波萨港，空气里混合着海盐的腥咸、晒透的石头味道，和不知从哪家厨房飘出的烤章鱼与牛至叶的香气。港口边，彩色的渔船随着波浪轻轻摇晃，发出木头摩擦的咯吱声。但你的视线很快会被另一些“居民”吸引：他们皮肤晒成古铜色，肩膀宽阔，手指缠着胶布，脚上穿着五颜六色、小得滑稽的攀岩鞋。他们不谈论渔汛，而是在咖啡馆的遮阳伞下，用沾满镁粉的手指在手机屏幕上划着线路图，争论着某个岩点的“beta”（攀爬方法）。空气中弥漫着一种专注而兴奋的能量，与渔民们慢悠悠修补渔网的闲适形成了奇妙的二重奏。
深入岛屿内部，沿着蜿蜒的山路行驶，你会看到另一番景象。废弃的梯田爬满野生的刺山柑和百里香，空气中是干燥的草本植物香气。偶尔，一座小小的白色教堂孤零零地矗立在悬崖边，蓝色的圆顶仿佛是从岩石里生长出来的。而在那些最壮观的岩壁之下——比如著名的“大山谷”（Grande Grotta），一个巨大的、教堂般的拱形洞穴——你会看到攀岩者像缓慢移动的彩色昆虫，紧贴在令人眩晕的高处。唯一的声音是风穿过岩缝的呜咽，远处山羊的铃铛声，以及偶尔传来攀岩者找到着力点时那一声短促、满足的呼气。在这里，人类以最原始的方式，重新学习与岩石的对话。
卡林诺斯最打动人的，正是这种奇特的“双重灵魂”。它骨子里依然是一个希腊渔岛，生活节奏慢得能听见阳光移动的声音。但与此同时，它又是世界攀岩版图上最躁动、最前沿的圣地之一。这种反差不是割裂，而是融合。你会看到年迈的老人坐在广场上，看着年轻的攀岩者走过，眼神里没有不解，只有一种历经沧桑后的淡然理解——他们或许从这些挑战岩壁的年轻人身上，看到了自己父辈当年纵身跃入深海、挑战另一种“悬崖”的影子。危险与超越，以不同的形式，在这里代代相传。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "飞机开始下降，舷窗外爱琴海是一片无止境的、让人心安的蓝。但当卡林诺斯岛的轮廓逐渐清晰时，那片蓝被一道粗暴的、近乎垂直的赭黄色巨墙猛然切断。那不是温柔的沙滩缓坡，而是像被天神用巨斧劈开，然后将岛屿的内脏——层层叠叠、沟壑纵横的石灰岩——直接暴露在阳光与海风之下。第一印象不是“美丽”，而是一种带着敬畏的“震惊”。这就是卡林诺斯，它不向你献上甜蜜的糖霜，而是递出一把粗糙的岩塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "踏上波萨港，空气里混合着海盐的腥咸、晒透的石头味道，和不知从哪家厨房飘出的烤章鱼与牛至叶的香气。港口边，彩色的渔船随着波浪轻轻摇晃，发出木头摩擦的咯吱声。但你的视线很快会被另一些“居民”吸引：他们皮肤晒成古铜色，肩膀宽阔，手指缠着胶布，脚上穿着五颜六色、小得滑稽的攀岩鞋。他们不谈论渔汛，而是在咖啡馆的遮阳伞下，用沾满镁粉的手指在手机屏幕上划着线路图，争论着某个岩点的“beta”（攀爬方法）。空气中弥漫着一种专注而兴奋的能量，与渔民们慢悠悠修补渔网的闲适形成了奇妙的二重奏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "深入岛屿内部，沿着蜿蜒的山路行驶，你会看到另一番景象。废弃的梯田爬满野生的刺山柑和百里香，空气中是干燥的草本植物香气。偶尔，一座小小的白色教堂孤零零地矗立在悬崖边，蓝色的圆顶仿佛是从岩石里生长出来的。而在那些最壮观的岩壁之下——比如著名的“大山谷”（Grande Grotta），一个巨大的、教堂般的拱形洞穴——你会看到攀岩者像缓慢移动的彩色昆虫，紧贴在令人眩晕的高处。唯一的声音是风穿过岩缝的呜咽，远处山羊的铃铛声，以及偶尔传来攀岩者找到着力点时那一声短促、满足的呼气。在这里，人类以最原始的方式，重新学习与岩石的对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡林诺斯最打动人的，正是这种奇特的“双重灵魂”。它骨子里依然是一个希腊渔岛，生活节奏慢得能听见阳光移动的声音。但与此同时，它又是世界攀岩版图上最躁动、最前沿的圣地之一。这种反差不是割裂，而是融合。你会看到年迈的老人坐在广场上，看着年轻的攀岩者走过，眼神里没有不解，只有一种历经沧桑后的淡然理解——他们或许从这些挑战岩壁的年轻人身上，看到了自己父辈当年纵身跃入深海、挑战另一种“悬崖”的影子。危险与超越，以不同的形式，在这里代代相传。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡林诺斯岛`} />
                <InfoRow label="英文名称" value={`Kalymnos`} />
                <InfoRow label="正式名称" value={`Kalymnos Island`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`南爱琴大区（主要城镇为波萨）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座多德卡尼斯群岛的岛屿，曾是地中海海绵捕捞无可争议的中心，其潜水员的勇气与技艺塑造了数个世纪的地中海贸易史。`} />
                <InfoRow label="建筑特色" value={`岛上建筑是鲜明的爱琴海风格，彩色的房屋如糖果盒般从港口阶梯状向上蔓延，其间点缀着新古典主义的豪宅，它们见证了海绵贸易鼎盛时期的巨大财富。`} />
                <InfoRow label="建筑风格" value={`传统希腊岛屿风格（白色与彩色的立方体房屋）与19世纪末20世纪初繁荣时期留下的新古典主义及意大利风格建筑并存。`} />
                <InfoRow label="文化价值" value={`这里体现了人类如何将一种与死神共舞的古老生计（海绵潜水），转化为一种挑战自我、与自然对话的现代精神追求（攀岩），完成了危险与美的世代传承。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`岛屿本身全年开放，无限制。主要海滩、小镇及攀岩区域均为全天候开放。最佳游览季节为每年4月至6月，以及9月至10月，气候温和宜人且适合户外活动。7-8月为旅游旺季，日照强烈且拥挤；11月至次年3月部分旅游设施及餐馆可能歇业。各类攀岩学校、潜水中心及海绵潜水博物馆等具体场所的开放时间需单独查询。`} />
              <InfoRow label="门票价格" value={`进入卡林诺斯岛无需门票。岛上自然景观及公共区域免费开放。部分体验活动需付费，例如：专业攀岩向导服务（约50-80欧元/半天）、海绵潜水博物馆门票（约3欧元）、前往偏远海滩的船只租赁（约15欧元/人往返）。岛上交通如租用摩托车或汽车需每日租金。`} />
              <InfoRow label="地址" value={`Kalymnos 852 00, Greece`} />
              <InfoRow label="交通方式" value={`最近的国际机场是科斯岛国际机场（KGS）。从科斯机场乘坐出租车（约15分钟，20欧元）或公交前往科斯镇的马斯蒂哈里港口。从该港口搭乘渡轮前往卡林诺斯岛的主要港口波萨（Pothia），航程约50分钟至2小时（取决于渡轮类型，高速艇更快），每日有多个班次，夏季更频繁，单程票价约10-15欧元。也可从雅典乘国内航班直飞卡林诺斯岛国内机场（JKL），但班次较少。建议提前在Ferryhopper或当地船运公司网站查询并预订船票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解卡林诺斯，你必须先忘掉它如今炫酷的攀岩者形象，潜入那深不可测、幽暗寒冷的海底。几个世纪以来，甚至可能从古希腊时代开始，“海绵”就是这座岛屿的命运、财富与诅咒。岛上的男人，几乎从少年时期就开始学习这门残酷的手艺。他们不使用任何现代潜水设备，只靠一块沉重的“skandalopetra”（坠石）绑在脚上，将自己快速拉向40米甚至更深的黑暗海底。憋住一口气，在极限的几分钟内，用匕首或徒手从礁石上采集天然海绵。然后，挣扎着拉住连接水面船只的绳索，被同伴拼命拉回有光的世界。每一次下潜，都是一场与溺水和减压病（他们称之为“魔鬼的拥抱”）的赌博。无数人再也没有回来，海底沉睡着许多卡林诺斯人的骨骸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这种用生命换来的收获，在19世纪中叶将卡林诺斯推向了意想不到的繁荣巅峰。一位名叫约翰·米凯拉斯·库库拉基斯的岛民，冒险将海绵运往埃及的亚历山大港，发现了巨大的市场。消息传回，整个岛屿沸腾了。海绵变成了“软黄金”。岛上的船队迅速扩张，最辉煌时，拥有数百艘专门的海绵捕捞船，航迹遍及整个地中海，甚至远赴北非海岸。财富如潮水般涌回这个岩石嶙峋的家园。你在波萨港今天依然能看到那些气派的“海绵商人豪宅”，有着精美的浮雕、高大的门窗和意大利风格的外墙涂料。它们骄傲地诉说着那个“海绵王朝”的旧梦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，盛宴终有散场时。20世纪中期，人造海绵的出现给了传统产业致命一击。紧接着，一场神秘的海绵瘟疫席卷地中海，几乎灭绝了天然海绵种群。与此同时， safer 的现代潜水装备普及，反而让习惯了古老“自由潜”方式的卡林诺斯潜水员在更深的作业中遭遇了更频繁的减压病悲剧。经济支柱崩塌，岛屿陷入漫长的沉寂与衰退。年轻人纷纷离乡，前往澳大利亚、美国寻找生计。卡林诺斯仿佛成了一座被时光遗忘的、正在缓缓风化的石岛，只剩下老人、空屋，和关于深海荣光的 fading 记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机来得偶然又充满诗意。1996年，一位名叫安德里亚·迪·贝内代托的意大利攀岩者偶然到访。当他看到那些沐浴在爱琴海阳光下、质地完美、形态千变万化的石灰岩壁时，他惊呆了。对于攀岩者而言，这简直是上帝馈赠的乐园。次年，他带着一支开线团队回来，在岛上打下了第一批螺栓。消息在极小的攀岩圈子里像野火一样传开。接下来的十几年，来自世界各地的顶级开线者像朝圣般涌来，以惊人的速度和创造力，开发出了上千条从简单到人类极限的攀岩路线。几乎在一夜之间（以历史尺度看），卡林诺斯从“垂死的海绵之岛”变成了全球攀岩地图上最闪耀的名字。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，岛上的生活依然围绕着岩石，但意义已全然不同。当年的海绵潜水员的后代，有的开起了家庭旅馆，用祖辈的故事招待来自德国的攀岩者；有的转行成了攀岩向导，他们对岩石的熟悉仿佛是与生俱来的天赋。那些曾用于晾晒海绵的石头平台，现在铺上了垫子，成了瑜伽和放松拉伸的场地。危险从未远离——攀岩本身就是风险的运动——但那种将生命寄托于自然之力的孤注一掷，已经从迫于生计的悲壮，转化为了追寻自我极限的主动选择。卡林诺斯的历史，是一部关于人类如何与严酷自然环境博弈、共生，并最终在其中找到美与自由的故事。岩石未变，大海未变，变的是人与它们相处的方式，以及那永不熄灭的、向上的渴望。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`一场完美的卡林诺斯深度游，绝不是“打卡”几个岩壁那么简单，而是一场沉浸式的、调动所有感官的岛屿生活体验。建议安排至少4天3晚。第一天下午抵达波萨港，安顿下来，用漫步和一顿海鲜大餐感受岛屿的日常脉搏。第二天开始探索核心攀岩区域，但不要贪多，选择1-2个经典岩场，留出半天时间去海绵潜水博物馆，建立情感连接。第三天可以安排一次乘船之旅，从海上仰望那些令人腿软的绝壁，并探访一个宁静的传统渔村。最后一天，进行一次非攀岩的徒步，登上岛内的高处，俯瞰全景，静静回味。节奏要有张有弛，别忘了每天留出时间在港口咖啡馆发呆，观察那些有趣的“岩壁与渔网”共生的人群。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`攀岩区域在上午9点前和下午4点后光线最佳且相对凉爽，正午时分岩壁烫得像烤盘，建议休息或进行文化游览。租用摩托车是探索岛屿的最佳方式，但务必戴好头盔，许多山路狭窄崎岖。尊重当地文化，进入村庄和小教堂时着装得体，即使天气炎热也请避免过于暴露的泳装外穿。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一天下午在波萨港错综复杂的阶梯小巷里迷一次路，任由鼻尖带领你寻找那家传出最浓郁咖啡香和油炸面团甜香的老字号糕点铺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在傍晚的“滨海大道”找一张能看到落日和泊船的桌子，点一盘用当地刺山柑和西红柿炖得酥烂的章鱼，看天空从橙红褪成粉紫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天清晨跟着租赁的小摩托驶往“大山谷”，在全世界攀岩者都梦想朝圣的巨型拱壁下，哪怕不攀爬，只是仰头感受那份恢弘的寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后避开最晒的时辰，钻进那间由海绵商人故居改建的博物馆，用手指轻轻触摸那些早已干枯发硬的海绵，听老馆长用浓重口音的英语讲述“坠石”的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第三天跳上一条开往马斯蒂哈里小渔村的传统木船，在蔚蓝海面上回望卡林诺斯，那些岩壁呈现出只有在海上才能领略的、惊心动魄的垂直剖面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在渔村只有三张桌子的小酒馆里，尝一口刚从海里捞上来、只用柠檬和橄榄油调味的生蚝，体会最原始的海之味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第四天穿上结实的鞋子，沿着古老牧羊人小径徒步登上霍里奥城堡的遗址，在断壁残垣间坐下，让360度的爱琴海蓝和岛屿的嶙峋脊背将你包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前的最后一餐，去港口市场买新鲜水果和奶酪，带到你最喜欢的秘密小海湾，进行一次无声的、充满感激的野餐告别。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`波萨港北侧山坡的居民区`}</h4>
                  <p className="text-sm text-gray-700">{`在日落前半小时，爬上任意一条白色小巷的高处，回拍港口、彩色的船桅、以及远处层叠的房屋与岩山，温暖的金色光线会让一切充满油画质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大山谷岩场底部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`选择清晨光线刚刚射入洞内时，站在洞穴中央，使用广角镜头向上拍摄，将攀岩者渺小的身影与洞穴穹顶巨大的、如同教堂肋拱的岩石结构一同纳入，凸显自然与人的尺度对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`传统渔村马斯蒂哈里的码头`}</h4>
                  <p className="text-sm text-gray-700">{`在早晨八点左右，渔民作业基本结束时拍摄，聚焦那些颜色斑驳的木质渔船、堆叠的渔网浮标、以及挂在墙上的铜绿色海神像，捕捉宁静的、未被游客打扰的原始渔港生活。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`岛屿内部徒步径上的全景`}</h4>
                  <p className="text-sm text-gray-700">{`在徒步前往霍里奥城堡的中段，有一片开阔的岩石平台，在此处用中长焦镜头压缩空间，拍下远处蔚蓝海面上星罗棋布的小岛、眼前金黄色的干旱草甸、以及蜿蜒其间的白色小路，层次极为丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`隐秘小海湾的微观视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午当阳光能照入海湾时，趴在沙滩或岩石上，用微距镜头或手机人像模式，拍摄被海水打磨得光滑圆润的鹅卵石、清澈浅水下彩色的海胆、或是岩缝中顽强开放的紫色野花，记录岛屿温柔细腻的一面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄攀岩者时，务必先征得对方同意，不要用闪光灯或突然发出巨大声响，以免干扰他们需要高度专注的运动。许多小教堂内部禁止拍照，请留意门口标识。爱琴海的正午阳光极其强烈且反差大，尽量利用清晨和黄昏的“黄金时刻”拍摄，或寻找自然的阴影处以获得柔和光线。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济舒适之选`}</h4>
                  <p className="text-sm text-blue-800">{`波萨港后街由当地家庭经营的传统公寓，带有一个种满九重葛的小阳台，老板娘每天早晨会送来 homemade 的果酱和酸奶，让你像岛民一样醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`攀岩者大本营`}</h4>
                  <p className="text-sm text-green-800">{`位于大山谷和波塞冬尼亚岩场之间的专为攀岩者设计的民宿，配有专业的装备晾晒区、拉力训练架和线路图交流墙，晚上还能在公共厨房和世界各地的岩友交换故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端设计体验`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在岛屿西侧隐秘海湾旁的精品酒店，由一组传统的“船屋”改造而成，房间拥有私人露台和直接跳入爱琴海的阶梯，设计极简而优雅，是攀岩后放松肌肉的完美绿洲。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`特色洞穴屋`}</h4>
                  <p className="text-sm text-purple-800">{`在岛内山区的传统村庄里，租住一栋经过现代化改造的古老石屋，厚实的墙壁带来自然的清凉，夜晚在星空下的石阶天台喝一杯当地的希普拉岛葡萄酒，听风吹过橄榄树林的沙沙声。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（6-9月）的住宿，尤其是攀岩者青睐的民宿，需要提前数月预订。如果主要目的是攀岩，选择靠近岩场（如马斯蒂哈里、阿吉奥斯·尼古拉斯等区域）的住宿能节省大量通勤时间；若更偏重于文化和全景体验，波萨港或山上的村庄是更好选择。岛上治安良好，民风淳朴，但入住偏远石屋时仍需注意关好门窗。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开卡林诺斯好些天了，手指触碰过粗糙岩壁的触感，脚掌踩在炙热石头上的温度，却好像还留在身体里。这座城市不像那些让你惊叹于人类巧夺天工的宫殿教堂，它带来的是一种更原始、更个人化的震动。它让你直面自然最赤裸、最威严的一面——那些沉默的、高达百米的悬崖，本身就是时间的纪念碑。然后，它又让你看到，人类如何在这些纪念碑上，用身体和意志书写下属于自己的、微小而勇敢的注解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个被虚拟信息包裹、追求即时满足的快节奏世界里，卡林诺斯的存在像一种古老的回响。它提醒我们，真正的连接感和成就感，仍然来自于用尽全身力气去完成一个物理上的动作，来自于将指尖楔入一道岩缝时与地球脉搏的触碰，来自于精疲力尽后躺在阳光下，听海浪拍岸时那种无与伦比的平静。这里没有浮夸的表演，只有诚实的汗水、专注的呼吸，以及失败后再次尝试的朴实决心。每一位热爱深度游的旅人，都该来一次卡林诺斯。不是为了征服某条线路，而是为了体验这种“在场”的质感。你会带着被阳光和海风重塑过的皮肤，被岩石打磨过的心境离开。你会发现，旅行的意义，有时不在于看到了多么壮丽的风景，而在于你终于找到了一个地方，允许你以最笨拙也最真实的方式，重新认识自己的身体、勇气，以及我们与这颗星球之间，那份古老而直接的羁绊。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/temple-of-apollo-epicurius" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴赛阿波罗神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Temple of Apollo Epicurius</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mount-athos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿索斯山</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mount Athos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kavala" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡瓦拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kavala</p>
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
