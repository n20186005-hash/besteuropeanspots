import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡拉塞特 Calaceite｜探秘“阿拉贡的托斯卡纳”，迷失在文艺复兴石头府邸的时光迷宫 - 最佳欧洲景点',
  description: '当你第一次驾车穿过那片绵延起伏、点缀着橄榄树与杏仁林的赭红色土地，远远望见卡拉塞特时，它不像一个景点，更像一个从大地里生长出来的、关于石头与时光的坚实承诺。那些密密集集、顶着暖橘色瓦片的石屋，以一种近乎固执的姿态，盘踞在一座柔和的山丘上，在伊比利亚半岛干燥明亮的阳光下，散发着一种沉稳而内敛的金色光泽',
}

export default function CalaceitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '阿拉贡自治区，马塔拉尼亚地区（特鲁埃尔省）', href: '/destinations/europe' },
            { label: '卡拉塞特', href: '/attractions/calaceite' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡拉塞特・Calaceite・西班牙・阿拉贡自治区，马塔拉尼亚地区（特鲁埃尔省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一次驾车穿过那片绵延起伏、点缀着橄榄树与杏仁林的赭红色土地，远远望见卡拉塞特时，它不像一个景点，更像一个从大地里生长出来的、关于石头与时光的坚实承诺。那些密密集集、顶着暖橘色瓦片的石屋，以一种近乎固执的姿态，盘踞在一座柔和的山丘上，在伊比利亚半岛干燥明亮的阳光下，散发着一种沉稳而内敛的金色光泽。空气里有股好闻的味道，是晒热的石头、干燥的迷迭香灌木，还有从某户人家厨房飘出的、用本地橄榄油煎制食物的香气混合在一起的味道。
把车停在村子外围，步行穿过那道不起眼的拱门，你就一头扎进了一个由石头构筑的迷宫。脚下是磨得光滑的鹅卵石路，蜿蜒向上，两侧是高耸的、几乎没有缝隙的石墙。抬起头，视线被狭窄的天空切割成蓝色的条带，阳光只能斜斜地照进来，在墙壁上投下锋利的光影。你的脚步声在石壁间回荡，夹杂着远处隐约的教堂钟声，某扇木窗后传来的电视声，和西班牙语混着当地独特的“马塔拉尼亚语”的交谈片段。这里安静，但不是死寂，而是一种被日常生活填满的、嗡嗡作响的宁静。
然后，毫无预兆地，小巷引你豁然开朗——你来到了西班牙广场，村子的心脏。这里的感官体验瞬间从幽暗切换到明亮。广场不大，却被那座比例完美的文艺复兴市政厅镇住了气场。它的拱廊投下深邃的阴影，老人们坐在石凳上安静地晒太阳，时间在这里慢得像广场中央那口老井里的水。你会瞬间明白，这里最动人的魅力并非某个单体建筑，而是整个村镇那种浑然一体的和谐。它不是博物馆里冰冷的展品，而是人们依然在其中生活、相爱、争吵、庆祝的容器。每一块石头都浸透了几个世纪以来的炊烟、笑语和叹息。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你第一次驾车穿过那片绵延起伏、点缀着橄榄树与杏仁林的赭红色土地，远远望见卡拉塞特时，它不像一个景点，更像一个从大地里生长出来的、关于石头与时光的坚实承诺。那些密密集集、顶着暖橘色瓦片的石屋，以一种近乎固执的姿态，盘踞在一座柔和的山丘上，在伊比利亚半岛干燥明亮的阳光下，散发着一种沉稳而内敛的金色光泽。空气里有股好闻的味道，是晒热的石头、干燥的迷迭香灌木，还有从某户人家厨房飘出的、用本地橄榄油煎制食物的香气混合在一起的味道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "把车停在村子外围，步行穿过那道不起眼的拱门，你就一头扎进了一个由石头构筑的迷宫。脚下是磨得光滑的鹅卵石路，蜿蜒向上，两侧是高耸的、几乎没有缝隙的石墙。抬起头，视线被狭窄的天空切割成蓝色的条带，阳光只能斜斜地照进来，在墙壁上投下锋利的光影。你的脚步声在石壁间回荡，夹杂着远处隐约的教堂钟声，某扇木窗后传来的电视声，和西班牙语混着当地独特的“马塔拉尼亚语”的交谈片段。这里安静，但不是死寂，而是一种被日常生活填满的、嗡嗡作响的宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，毫无预兆地，小巷引你豁然开朗——你来到了西班牙广场，村子的心脏。这里的感官体验瞬间从幽暗切换到明亮。广场不大，却被那座比例完美的文艺复兴市政厅镇住了气场。它的拱廊投下深邃的阴影，老人们坐在石凳上安静地晒太阳，时间在这里慢得像广场中央那口老井里的水。你会瞬间明白，这里最动人的魅力并非某个单体建筑，而是整个村镇那种浑然一体的和谐。它不是博物馆里冰冷的展品，而是人们依然在其中生活、相爱、争吵、庆祝的容器。每一块石头都浸透了几个世纪以来的炊烟、笑语和叹息。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡拉塞特`} />
                <InfoRow label="英文名称" value={`Calaceite`} />
                <InfoRow label="正式名称" value={`Calaceite`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`阿拉贡自治区，马塔拉尼亚地区（特鲁埃尔省）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`马塔拉尼亚文化区的明珠，见证了从摩尔边界到文艺复兴商贸繁荣的完整历史图景。`} />
                <InfoRow label="建筑特色" value={`严谨优雅的文艺复兴风格市政厅与大量用当地蜂蜜色石块垒砌、带有精美窗棂和家族纹章的贵族宅邸和谐共生。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为核心，混搭了地中海民间建筑的实用性与阿拉贡地区的罗马风遗韵。`} />
                <InfoRow label="文化价值" value={`一个活态的、呼吸着的乡村社区样本，完美保存了加泰罗尼亚-阿拉贡文化圈的语言、习俗与建筑传统。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村镇公共区域全天开放。主要建筑如文艺复兴市政厅（Casa Consistorial）开放时间通常为工作日上午10点至下午2点，周末及节假日开放时间缩短或需预约，冬季（11月至3月）部分日期可能闭馆。圣安东尼教堂（Iglesia de San Antonio）弥撒时间外对游客开放，时间较为灵活，建议抵达后查看门口公告或询问当地旅游办公室。`} />
              <InfoRow label="门票价格" value={`进入卡拉塞特村镇免费。参观市政厅内部可能收取少量捐赠费用（约2-3欧元），用于维护。镇上小型地方博物馆（Museo de Calaceite）门票约3欧元。其他贵族府邸外观免费，内部多为私人住宅不对外开放。`} />
              <InfoRow label="地址" value={`Plaza de España, 1, 44610 Calaceite, Teruel, Spain`} />
              <InfoRow label="交通方式" value={`卡拉塞特位置较为隐秘，自驾是最推荐的方式。从巴塞罗那机场出发，沿AP-2/A-2公路向莱里达方向，转入A-231国道，最终经TE-V-3031等地方公路抵达，全程约2.5-3小时。若使用公共交通，可从巴塞罗那Sants火车站乘火车至莱里达（Lleida，约1小时），再从莱里达汽车站换乘前往阿尔卡尼斯（Alcañiz）或瓦尔德罗夫雷斯（Valderrobres）的班车，并在最近路口下车后打车前往卡拉塞特（班车班次稀疏，每天仅1-2班，车程约2小时，务必提前查询ALSA或Regional巴士时刻表并预留充足时间）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡拉塞特的故事，始于一片充满张力的边界之地。早在罗马时代，这里就因地处要道而有人迹。但真正塑造它雏形的，是中世纪基督徒与摩尔人拉锯的前线。当时，整个马塔拉尼亚地区都是动荡的边疆，城堡和防御性的村落星罗棋布。卡拉塞特这个名字的起源就有多种说法，一说源于阿拉伯语，见证了那段复杂交融的历史。直到12世纪，基督教王国彻底收复此地，才为后来的稳定与发展奠定了基础。村民们从山顶的防御据点，逐渐向下迁移到如今这片更适宜居住的坡地，用坚固的石头开始搭建他们永久的家园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间的指针拨到15至17世纪，卡拉塞特迎来了它的黄金时代。这里远离大型战场，土地肥沃，尤其适合橄榄、杏仁和葡萄的种植。随着地中海贸易的兴盛，本地出产的优质橄榄油、葡萄酒和纺织品沿着商路远销四方。财富如同春雨般滋润了这片土地，而新兴的商人贵族阶层，急切地需要用建筑来宣告他们的成功与品位。于是，一场轰轰烈烈的“石头宣言”开始了。他们不再满足于朴素的农居，而是聘请工匠，从意大利文艺复兴的蓝图中汲取灵感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是为什么你今天能看到如此精美、几乎与托斯卡纳小镇神似的市政厅。它建于1606年至1613年，那个年代，巴洛克的热浪尚未完全席卷西班牙，文艺复兴的理性与优雅在这里找到了最纯净的表达。三层拱廊，比例严谨的立面，精雕细琢的纹章，它既是为民所用的行政中心，更是整个村镇财富与文化的纪念碑。与此同时，围绕着广场，一栋栋贵族府邸（casonas）如雨后春笋般拔地而起。它们共用墙壁，形成密集的街区，但每栋都在门楣、窗框和巨大的木门上极尽雕琢之能事，展示着家族的徽章和实力。石头，这种最本地、最普通的材料，被匠人的手赋予了新的生命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，繁华总有尽头。19世纪末到20世纪，工业化与城市化的大潮席卷欧洲，像卡拉塞特这样偏远的乡村不可避免地经历了衰退与人口外流。许多华丽的宅邸大门紧闭，年轻人奔向巴塞罗那或更远的城市寻找机会。西班牙内战和其后的弗朗哥时期，这里也经历了创伤与沉寂，但它奇迹般地躲过了大规模破坏。时间的灰尘覆盖了街道，却也将一个完整的旧世界封存了起来。直到近二三十年，随着“慢生活”和深度旅游理念的兴起，一些艺术家、退休人士和渴望回归乡村的年轻人重新发现了这里。他们小心翼翼地修复老宅，开设工作室、精品民宿和餐馆，让古老的石头重新呼吸。今天的卡拉塞特，是一个奇妙的混合体：既有牵着狗散步、用古老方言打招呼的九旬老人，也有在笔记本电脑前工作的数字游民。它的历史不是写在书本里，而是砌在每一堵墙里，流淌在每一个平静的日常中。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的清晨抵达，预留整整一天的时间来慢品卡拉塞特。早晨的光线最适合拍照，且游人稀少，你能独享小镇苏醒时的宁静。整体游览节奏务必“慢”，这里不适合打卡，只适合漫无目的地迷失。从核心的西班牙广场出发，让那些看似随意延伸的小巷带领你，遵循“迷路了就是对了”的原则。中午回到广场，在拱廊下的餐厅享用漫长的午餐，体验西班牙式的午休（siesta）节奏。下午可以探索稍远一点的街区或驾车前往附近的山丘俯瞰全景。傍晚时分，当夕阳将整个小镇染成蜜糖色时，是最佳的感悟时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免在盛夏正午（下午1-5点）暴晒下长时间行走，小巷虽阴凉但广场无遮无挡，且很多商店餐馆会午休闭门。
穿着绝对舒适的平底鞋，那些美丽的鹅卵石路对高跟鞋和行李箱轮子是终极考验。
部分内部可参观的景点（如市政厅、博物馆）开放时间非常灵活，甚至“看心情”，最好提前一天或当天早上向旅游咨询处（通常在市政厅内）确认。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在西班牙广场文艺复兴市政厅的拱廊下静坐片刻，看阳光如何一寸寸移动，照亮那些雕刻了四百年的石柱纹章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`任由自己迷失在从广场辐射出去的、如同毛细血管般错综复杂的小巷里，用手指触摸那些被岁月打磨得温润的蜂蜜色石墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找并仰望圣安东尼教堂那座兼具防御功能的粗犷钟楼，想象它在中世纪作为瞭望塔与精神寄托的双重角色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`留意小巷两侧那些紧闭的厚重木门上方，辨认不同贵族家族各具特色的石雕纹章，每一枚都是一个家族的兴衰故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午回到广场，选一家拱廊下的老餐馆，点一份用本地马塔拉尼亚橄榄油烹饪的羊肉或时蔬，配上一杯当地产的歌海娜红酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观小镇的地方博物馆，那里陈列着从史前到近代的本地文物，是快速理解这片土地深厚层理的捷径。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行到小镇边缘的某个僻静角落，找一张长椅坐下，眼前是连绵到天际的橄榄园，身后是沉睡的石头小镇，享受绝对的孤独与安宁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果恰逢周末傍晚，混在当地人中间，点一杯苦艾酒（vermut），听他们用快节奏的加泰罗尼亚方言聊天，直到广场的灯亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`西班牙广场东侧小巷仰拍钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点，阳光从西侧打亮教堂钟楼的石壁，站在狭窄的小巷中向上仰拍，能获得极具张力的构图，将钟楼的雄伟与小巷的幽深结合。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市政厅拱廊光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，低角度的阳光斜射入拱廊，会形成一道道光柱和长长的阴影，站在拱廊一端向另一端拍摄，能捕捉到文艺复兴建筑严谨的透视与戏剧性的明暗对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Calvario观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`位于小镇西南侧小山坡上，步行约十分钟可达，日出或日落时分前往，可以拍到整个卡拉塞特石头建筑群在暖光中苏醒或沉睡的全景，前景是当地的柏树或橄榄树。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某条无名小巷的蜿蜒石阶`}</h4>
                  <p className="text-sm text-gray-700">{`找一条有明显坡度、两侧石墙高耸、路面是光滑鹅卵石的小巷，在正午阳光直射头顶时拍摄，此时巷子底部光线均匀，能拍出石头纹理的质感和道路蜿蜒的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`贵族府邸门楣特写`}</h4>
                  <p className="text-sm text-gray-700">{`选择一扇雕刻精美的文艺复兴风格大门，在侧光（上午或下午）时近距离拍摄其门楣上的家族纹章、花卉或怪兽雕刻，侧光能突出石雕的立体感和历经风雨的沧桑质地。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，避免将镜头直接对准住户的窗户或阳台内景，拍摄人物时最好先微笑示意获得同意。`}</li>
                <li>• {`马塔拉尼亚地区光线强烈且反差大，建议携带偏振镜以减少石头表面的反光，并善于利用RAW格式为后期保留更多高光阴影细节。`}</li>
                <li>• {`小镇猫狗很多且不怕人，它们常常是画面中绝佳的生趣点缀，可以耐心等待它们走入你的构图。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`镇口一家由传统石屋改造的家庭旅馆，房间简单干净，女主人会为你准备丰盛的阿拉贡式早餐，包括自制的果酱和蛋糕，晚上能听到广场传来的隐约钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住一栋16世纪贵族府邸改造的精品酒店，保留了原始的石头拱顶、木梁和厚达一米的墙壁，现代设计的家具与之碰撞，在古老的壁炉旁享用入住欢迎酒是独一无二的体验。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驾车十分钟可达的乡间庄园酒店，由一座19世纪的农舍扩建而成，独占一片橄榄园，拥有无边泳池和露天餐厅，夜晚星空璀璨如幕，是彻底逃离尘嚣的避世之所。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`长居之梦`}</h4>
                  <p className="text-sm text-purple-800">{`镇上常有整栋石屋短期出租，适合家庭或小团体，让你像本地人一样去广场面包店买早餐，在小厨房里用本地食材烹饪，真正过上几天“卡拉塞特人”的生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）和重要节假日（如圣周）务必提前数月预订，房源非常紧张。春秋季是最佳入住时间，气候宜人且相对宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇治安极好，夜晚安静得只能听到风声，但路灯较少，建议携带小手电以便晚归时照亮小巷的石阶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多老宅改造的住宿没有电梯，且房间格局可能不同寻常，预订时如有特殊需求（如行李沉重或需要无障碍设施）最好提前沟通。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开卡拉塞特的时候，我带回的不是某张明信片般的照片，而是一种关于“密度”的感知。时间的密度，生活的密度，石头的密度。在这个一切都追求轻、薄、快、转瞬即逝的时代，卡拉塞特像一个沉重的、美好的反义词。它不轻盈，它厚重地扎根于土地；它不薄情，每一块石头都浸满了故事；它不快速，它的心跳是以日晷的影子、四季的轮回和一代代人的更迭来计量的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里教会我的，或许正是一种“深度的奢侈”。它奢侈不在于金钱，而在于它依然允许你体验一种完整的、连贯的、人与环境深深缠绕的生活图景。从广场到小巷，从教堂到民居，从清晨的面包香到傍晚的钟声，所有元素构成一个不可分割的整体。它提醒我们，文明可以有另一种模样：不是向上疯长玻璃幕墙的森林，而是向下深耕，用本地材料，依本地气候，回应本地社群的需求，最终长成一个独一无二、无法复制的生命体。对于每一位厌倦了浅尝辄止、渴望在旅途中触碰历史真实肌理与生活温热内核的深度游者来说，卡拉塞特不仅仅是一个目的地，它是一堂课，一场冥想，一次对何为“家园”的深沉回望。专程奔赴它，是值得的。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/llanes" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利亚内斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Llanes</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/leon-old-town-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱昂老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">León Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/segovia-aqueduct" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞哥维亚罗马水道桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Segovia Aqueduct</p>
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
