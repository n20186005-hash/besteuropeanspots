import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马尔莫雷瀑布 Cascata delle Marmore｜探访古罗马开凿的165米欧洲最高人造瀑布 - 最佳欧洲景点',
  description: '还没见到瀑布，你首先被一种低沉而持续的轰鸣声包裹。那声音不像纯粹的自然瀑布那样狂野，更像一台沉睡千年的古老机器被唤醒，发出有节奏的、大地肺腑深处的呼吸。空气里弥漫着一种奇特的清新，混合着被水流击碎的水汽、青苔的腥味和岩石被常年浸润后散发的微凉矿物气息。顺着蜿蜒的小径向上走，转过一个山坳，它便毫无预兆',
}

export default function CascataDelleMarmorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '马尔莫雷瀑布', href: '/attractions/cascata-delle-marmore' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马尔莫雷瀑布・Cascata delle Marmore・意大利・翁布里亚大区（靠近特尔尼市）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`还没见到瀑布，你首先被一种低沉而持续的轰鸣声包裹。那声音不像纯粹的自然瀑布那样狂野，更像一台沉睡千年的古老机器被唤醒，发出有节奏的、大地肺腑深处的呼吸。空气里弥漫着一种奇特的清新，混合着被水流击碎的水汽、青苔的腥味和岩石被常年浸润后散发的微凉矿物气息。顺着蜿蜒的小径向上走，转过一个山坳，它便毫无预兆地撞进你的视野——那不是“一条”瀑布，而是一整面被水雕刻、撕开的石灰岩悬崖。三道巨大的白色水幕，像天神抖落的绸缎，以近乎笔直的角度从165米的高处阶梯式地砸向深渊。水花飞溅成永恒的雾，在阳光下幻化出数道若隐若现的彩虹。最震撼的是，你知道这一切并非天成。
在特尔尼当地人眼里，马尔莫雷瀑布不仅是景点，更是一个古老的时间开关。他们会告诉你：“去看‘大水’（l’acqua grande）了吗？” 这里的日常生活节奏，某种程度上依然被古罗马人设定的“放水时间表”所标记。周末，一家人会来山脚下的草地野餐，等待那个激动人心的放水时刻；平日里，徒步者则更爱水流关闭时的宁静，去探索裸露的、布满古老开凿痕迹的岩石河床。它既是骄傲的工程壮举，也是他们后花园里最宏大的自然剧场。
它的核心魅力，就在于这种极致的矛盾与和谐。站在观景台上，水声震耳欲聋，水汽扑面而来，那种原始的自然力量让你心生敬畏。但低头看手里的导览图，上面清晰地标注着公元前271年开始的运河路线、中世纪的水闸、文艺复兴时期的加固工程……那一刻，你感受到的不是人类征服自然的傲慢，而是一种跨越时空的、持续了二十多个世纪的对话与协作。瀑布的水流，是古罗马执政官的意志，是中世纪修士的祈祷，是文艺复兴工程师的计算，也是今天为城市供电的能量。它是一首用石头、水和时间写成的史诗，每一滴水都承载着故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`还没见到瀑布，你首先被一种低沉而持续的轰鸣声包裹。那声音不像纯粹的自然瀑布那样狂野，更像一台沉睡千年的古老机器被唤醒，发出有节奏的、大地肺腑深处的呼吸。空气里弥漫着一种奇特的清新，混合着被水流击碎的水汽、青苔的腥味和岩石被常年浸润后散发的微凉矿物气息。顺着蜿蜒的小径向上走，转过一个山坳，它便毫无预兆地撞进你的视野——那不是“一条”瀑布，而是一整面被水雕刻、撕开的石灰岩悬崖。三道巨大的白色水幕，像天神抖落的绸缎，以近乎笔直的角度从165米的高处阶梯式地砸向深渊。水花飞溅成永恒的雾，在阳光下幻化出数道若隐若现的彩虹。最震撼的是，你知道这一切并非天成。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在特尔尼当地人眼里，马尔莫雷瀑布不仅是景点，更是一个古老的时间开关。他们会告诉你：“去看‘大水’（l’acqua grande）了吗？” 这里的日常生活节奏，某种程度上依然被古罗马人设定的“放水时间表”所标记。周末，一家人会来山脚下的草地野餐，等待那个激动人心的放水时刻；平日里，徒步者则更爱水流关闭时的宁静，去探索裸露的、布满古老开凿痕迹的岩石河床。它既是骄傲的工程壮举，也是他们后花园里最宏大的自然剧场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的矛盾与和谐。站在观景台上，水声震耳欲聋，水汽扑面而来，那种原始的自然力量让你心生敬畏。但低头看手里的导览图，上面清晰地标注着公元前271年开始的运河路线、中世纪的水闸、文艺复兴时期的加固工程……那一刻，你感受到的不是人类征服自然的傲慢，而是一种跨越时空的、持续了二十多个世纪的对话与协作。瀑布的水流，是古罗马执政官的意志，是中世纪修士的祈祷，是文艺复兴工程师的计算，也是今天为城市供电的能量。它是一首用石头、水和时间写成的史诗，每一滴水都承载着故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马尔莫雷瀑布`} />
                <InfoRow label="英文名称" value={`Cascata delle Marmore`} />
                <InfoRow label="正式名称" value={`Cascata delle Marmore`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`翁布里亚大区（靠近特尔尼市）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`古罗马人为了治理沼泽、利用水力而创造的一项持续使用了超过两千年的“活的”工程纪念碑。`} />
                <InfoRow label="建筑特色" value={`一座完全由人工开凿、利用自然地形和河流落差建造的巨型阶梯式瀑布，将工程智慧与自然景观戏剧性地融为一体。`} />
                <InfoRow label="建筑风格" value={`古典罗马实用主义工程与后来文艺复兴及巴洛克时期景观美学的融合。`} />
                <InfoRow label="文化价值" value={`见证了人类改造自然、适应自然并与自然最终和解的漫长历程，是技术史、环境史和艺术史的独特交汇点。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`瀑布区域全年开放，但核心的“瀑布放水”时间有严格规定以确保下游水力发电。通常为每天固定的几个时段（例如上午12:00-13:00，下午16:00-17:00），夏季（6月至9月）和周末会延长或增加场次，冬季可能减少。具体时间表需在出发前于官方网站或当地旅游局确认，因为会根据季节和水电需求调整。公园步道在放水时段前后也开放，供游客欣赏水流渐弱或完全干涸时的独特地貌。`} />
              <InfoRow label="门票价格" value={`成人票约10-12欧元。优惠票（65岁以上老人、6-14岁儿童）约8-10欧元。6岁以下儿童免费。门票通常包含进入瀑布公园和所有观景平台。有时会推出包含附近公园或导览游的联票。门票可以在入口处的售票处购买，旺季时建议提前在线预订以避免排队。`} />
              <InfoRow label="地址" value={`05100 Terni, Province of Terni, Italy`} />
              <InfoRow label="交通方式" value={`从罗马菲乌米奇诺机场出发，最便捷的方式是先乘坐火车。搭乘机场快线或区域列车到罗马特米尼火车站，转乘前往特尔尼的直达区域火车，车程约1-1.5小时，班次频繁。到达特尔尼火车站后，在车站外的公交站乘坐当地前往“Cascata delle Marmore”或“Marmore”的巴士（约4号或5号线），车程约20分钟，班次每小时1-2班，周末可能减少。也可以从特尔尼火车站乘坐出租车，约15分钟车程。自驾是最灵活的方式，从罗马沿A1高速公路向北，在 Orte 出口转SS Valnerina 或直接导航至瀑布停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从公元前三世纪讲起。那时的雷亚河在特尔尼附近的平原上肆意漫流，形成了一大片被称为“维里内”的广阔沼泽。瘴气弥漫，疟疾横行，严重威胁着罗马共和国通往北部的要道。公元前271年，一位名叫马尼乌斯·库里乌斯·登塔图斯的罗马执政官，做出了一个大胆得近乎疯狂的决定：不是去费力地填埋沼泽，而是为多余的河水开凿一条直接通往悬崖的泄洪道，利用巨大的天然落差将洪水“扔”下悬崖，排入下方的内拉河。这需要凿穿坚硬的石灰岩山体，是那个时代难以想象的巨型工程。数以千计的奴隶和工匠，用最原始的工具，花了可能数十年的时间，终于让河水第一次顺从人的意志，从悬崖顶端飞跃而下。沼泽干涸了，肥沃的农田出现了，而欧洲最高的人造瀑布，也从此诞生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，自然的脾气并非那么容易驯服。被强行改道的河水时多时少，水流控制不当会淹没下游的村庄，而干旱时瀑布又会消失。在随后的罗马帝国晚期和中世纪，运河系统年久失修，沼泽有卷土重来之势。真正的转折点出现在文艺复兴时期。1545年，教皇保罗三世决心彻底解决这个老大难问题。他委派了当时最顶尖的建筑师和工程师，包括大名鼎鼎的安东尼奥·达·桑加罗，来重新设计和加固整个水道系统。这一次，工程不仅关乎实用，更融入了那个时代对秩序、对称和美学的追求。他们修建了更精准的水闸和分流渠，甚至考虑到了瀑布的观赏性。马尔莫雷瀑布从一个单纯的排水工程，开始向一件“景观艺术品”演变。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十八世纪，瀑布迎来了它的“高光时刻”。大旅行时代，欧洲的贵族和文人墨客将这里列为必游之地。拜伦勋爵为之倾倒，在《哈罗尔德游记》中写下充满敬畏的诗句。歌德也曾到访，被其“崇高与恐怖”并存的美学所震撼。为了迎合这些挑剔的观众，当时的管理者甚至会特意在贵宾来访时开闸放水，上演一场宏大的“水之戏剧”。人们在山坡上修建了优雅的观景步道和带有巴洛克风格的小亭子，瀑布彻底成为了一个旅游胜地。浪漫主义画家们用画笔捕捉它磅礴的水汽与光影，它成了欧洲人心目中“如画风景”的典范之一。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到工业革命。十九世纪末，奔腾而下的瀑布所蕴含的巨大能量再次吸引了人们的目光。这一次，不是为了排水或观赏，而是为了电力。工程师们在瀑布底部建造了意大利最早的水力发电站之一。瀑布的水流被更精密地控制，成为了点亮城市、驱动工厂的能源。这个古老的工程，又被赋予了全新的、现代化的使命。它从一件被欣赏的艺术品，变成了默默工作的能源基石。在两次世界大战期间，它的电力对于地区工业更是至关重要。瀑布的“放水时间”开始严格服务于发电需求，这也形成了我们今天所看到的、分时段观赏的独特模式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，当你站在瀑布前，你所看到的每一道水帘，都叠加着所有这些历史的层次。最古老的岩壁上是罗马凿子的痕迹；中层的水闸带着文艺复兴的拱券线条；而隐藏在绿植后的管道和机房，则属于现代。它经历过废弃、重修、美化、利用，从公共卫生工程到旅游名片再到能源基地。它不是一个凝固在过去的遗迹，而是一个不断被重新定义、始终“活着”的文化景观。古罗马人或许从未想过，他们为解决一个具体问题而挖掘的水渠，会流淌两千多年，最终汇入人类对美、力量和可持续发展的永恒探索之河。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度感受马尔莫雷瀑布，建议预留至少4-5小时，并务必围绕官方公布的“放水时段”来规划行程。最完美的安排是在放水开始前约1.5小时抵达（例如，若下午4点放水，则在2:30左右到达）。这样你可以先沿着步道徒步，欣赏水流关闭时裸露的、充满历史沧桑感的古河道和岩层，静静地理解其工程本质。然后，在放水前20分钟，选择一个心仪的观景台（推荐中层的“恋人观景台”或顶部的“全景平台”）守候。目睹干涸的河床瞬间被奔腾的白浪充盈，是无可比拟的震撼体验。放水后，你可以顺着水汽弥漫的路径下行，从不同角度感受瀑布的磅礴。最后，在水流渐弱时，带着湿润的空气和轰鸣的余韵结束游览。这样的节奏既有知识的铺垫，又有感官的高潮，还能避开纯粹在放水时涌入的最大人流。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必在官网确认当天的确切放水时间，并提前至少半小时到达心仪观景台占位，尤其是周末和夏季。步道湿滑，特别是靠近瀑布的区域，一定要穿防滑性能好的徒步鞋或运动鞋，最好准备一件轻便的防水外套或雨披，否则你会全身湿透。公园内餐饮选择有限且价格较高，建议自备一些饮用水和零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下绿树成荫的主停车场出发，沿着指示清晰的“Sentiero 1”小径开始温和的上坡徒步，最先抵达能近距离感受第一级瀑布水雾的下层观景台，让皮肤先适应这份湿润的问候。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着沿山壁开凿的、有些湿滑的古老石阶向上攀登，到达被称为“Balcone degli Innamorati”（恋人阳台）的中层悬空平台，这里是感受瀑布中段雷霆万钧之力和扑满面庞水汽的核心位置。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上，穿过一个简短而有趣的、滴着水珠的天然溶洞隧道，它会将你引向瀑布的侧面和一个相对平静的河段，这里可以看到水流被引入人工渠道的入口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着山顶平缓的运河小径漫步，走到瀑布最顶端的边缘，站在安全围栏后俯视脚下165米的虚空，看平静的河水在此处决绝地跃入深渊，理解“开凿”这一行为的决定性瞬间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山顶的另一条环形步道下行，经过几个不同时代修建的水闸和调节池，观察那些控制着下方壮丽景象的、毫不浪漫的钢铁与水泥机关。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到中层区域，在放水时段结束后，找一个水声渐歇的长椅坐下，看着彩虹慢慢消散，岩石重新显露，完成一次从自然奇观到人文工程的完整认知循环。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`下层观景台仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`放水开始后约15分钟，站在最下方的观景台用广角镜头仰拍，可以捕捉到三级瀑布如天河倾泻的全貌，此时水流量最大，水雾与阳光形成的彩虹也最为完整，构图时将一部分绿色植被作为前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`恋人阳台侧面特写`}</h4>
                  <p className="text-sm text-gray-700">{`在中层“恋人阳台”上，使用中长焦镜头聚焦于第二级瀑布如白色帷幕般垂落的局部细节，高速快门凝固飞溅的水花，慢速快门则能拍出丝绸般的柔滑水流，这个位置光线复杂，注意防止镜头溅水。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`山顶俯瞰运河入口`}</h4>
                  <p className="text-sm text-gray-700">{`在瀑布放水前或刚结束放水时，于山顶的运河边缘拍摄，将平静的引水渠、古老的水闸机械与远处峡谷的广阔背景一同纳入画面，讲述人工与自然交织的故事，清晨或傍晚的侧光能为金属和石头增添质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`环形步道远眺峡谷`}</h4>
                  <p className="text-sm text-gray-700">{`从下山环形步道的几个拐角处，可以回望瀑布所在的整个V形峡谷，尤其在日落时分，金色的阳光洒在弥漫的水汽上，能拍出犹如仙境般的朦胧远景，适合拍摄风光大片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`水雾极其细密，是相机传感器的隐形杀手，务必为镜头加装UV镜保护，并随时用超细纤维布擦拭镜头前的水珠。拍摄瀑布动态时，三脚架和减光镜（ND滤镜）是拍出梦幻丝滑水流的关键装备。尊重安全围栏，切勿为追求角度翻越屏障，峡谷边缘湿滑且地质不稳定，非常危险。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`特尔尼火车站附近由家族经营的小型旅馆，房间干净温馨，老板能提供最地道的瀑布交通和餐饮指南，步行即可到达品尝翁布里亚特色菜的本地小馆。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`瀑布附近山丘上由古老农舍改造的“Agriturismo”（农家乐），石头外墙和木质横梁保留原貌，早晨在露台上享用自家生产的奶酪、蜂蜜和新鲜鸡蛋，抬眼就能望见远方山谷间升腾的水汽。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于斯波莱托与特尔尼之间、坐落在橄榄园与葡萄园环绕的丘陵上的五星级度假庄园，拥有无边际泳池和米其林推荐餐厅，在极致宁静中体验翁布里亚乡村的奢华，驱车前往瀑布仅需20分钟。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`选择入住特尔尼老城中心一栋经过精心修复的15世纪贵族宫殿改建的精品酒店，感受文艺复兴时期的拱廊与庭院，夜晚在老城石板街上散步，第二天再前往瀑布，完成从历史街区到自然奇观的穿越之旅。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果主要目标是瀑布，住在特尔尼市区最为方便，餐饮和交通选择多；若追求宁静的乡村体验，选择周边的“Agriturismo”则更有味道，但需有自驾车。翁布里亚地区治安良好，但老城街道夜间照明可能较暗。夏季（6-8月）和瀑布放水时间延长的周末是绝对旺季，住宿务必提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开马尔莫雷瀑布很久之后，那轰鸣声似乎还留在耳朵里，不是作为噪音，而是一种低沉的、稳定的背景音，让人莫名心安。我想，它之所以如此打动我，恰恰在于它打破了我们惯常的旅行分类。它不是一座仅供凭吊的废墟，也不是一片纯粹未经打扰的自然。它站在那个有趣的、甚至是哲学性的交叉点上：人类以巨大的野心和智慧干预自然，最终却创造出了一件比许多自然造物更震撼、更引人深思的作品。它提醒我们，文化与自然并非总是对立，它们可以以一种漫长的、动态的舞蹈方式共存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求“原生态”和“纯天然”的旅行时代，马尔莫雷瀑布像一位沉默的智者，诉说着另一个维度的深度。它告诉我们，深度游不仅仅是走进荒野，也可以是去读懂一片被人类故事深深浸透的风景。在这里，你看到的每一滴水，都流过罗马帝国的兴衰，映照过文艺复兴大师的草图，驱动过工业时代的齿轮，如今又愉悦着旅人的眼睛。它是一本立体的、流动的史书。对于任何一位不满足于打卡、而是渴望理解一个地方层层肌理的旅人来说，这里都是一个必赴的约会。赴一场与两千年前那位罗马执政官、与历代工程师、也与永恒不息的水流和岩石的，跨越时空的对话。在这里，你会感受到，时间本身，也可以如此磅礴。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ravenna-mosaics" className="block group">
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
              <a href="/attractions/volterra-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔泰拉古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Volterra</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ravenna-byzantine-mosaics" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉文纳拜占庭马赛克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ravenna Mosaics</p>
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
