import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拔摩岛《启示录》洞穴 Cave of the Apocalypse｜在世界尽头的孤岛石洞中，触摸《圣经》成书的源头 - 最佳欧洲景点',
  description: '船缓缓靠近拔摩岛时，你首先感受到的是一种与世界剥离的寂静。海水是那种沉静的、近乎墨色的蓝，环绕着一座由赭色岩石和零星白色房屋构成的小岛，荒凉中带着一种不容置疑的庄严。空气中弥漫着干燥的草本植物香气，混杂着海风咸涩的味道。这里没有其他爱琴海岛屿那种欢腾的度假气息，耳边只有风声、浪声，和偶尔传来的教堂钟',
}

export default function CaveOfTheApocalypsePatmossPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '拔摩岛（Patmos）', href: '/destinations/greece' },
            { label: '拔摩岛《启示录》洞穴', href: '/attractions/cave-of-the-apocalypse-patmoss' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拔摩岛《启示录》洞穴・Cave of the Apocalypse・希腊・拔摩岛（Patmos）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`船缓缓靠近拔摩岛时，你首先感受到的是一种与世界剥离的寂静。海水是那种沉静的、近乎墨色的蓝，环绕着一座由赭色岩石和零星白色房屋构成的小岛，荒凉中带着一种不容置疑的庄严。空气中弥漫着干燥的草本植物香气，混杂着海风咸涩的味道。这里没有其他爱琴海岛屿那种欢腾的度假气息，耳边只有风声、浪声，和偶尔传来的教堂钟声，缓慢而悠长，像是时间的节拍器被特意调慢了。
沿着从港口斯卡拉镇蜿蜒向上的山路步行，是打开拔摩岛的正确方式。路边的仙人掌和矮灌木顽强地生长，阳光毫无遮拦地倾泻下来，在白色的石阶上投下清晰的影子。当你气喘吁吁地走到半山腰，看到一个不起眼的、由白色矮墙围起的入口时，那份期待会瞬间化为一种屏息的肃穆。走进《启示录》洞穴，外界的光亮与炎热骤然被隔绝。一种潮湿的、带着岩石清冷的气息扑面而来，光线昏暗，只有几盏长明灯和从天然石缝中透进的微光，勾勒出洞穴崎岖的轮廓。
你的眼睛需要一点时间适应昏暗。然后，你会看到那个传说中的地方：一块略微凸起的平滑石板，据说就是圣约翰枕着头休息的地方；石壁上一个天然的三角形裂缝，被指认为“神圣三位一体”的启示通道；还有上方那个小小的、被熏黑的壁龛，他的弟子普罗霍罗斯曾在那里书写。最震撼的莫过于触摸那些被无数朝圣者抚摸得无比光滑的岩石表面，冰凉中仿佛能感受到千年来无数手掌的温度和祈祷时轻微的颤抖。这里没有宏伟的雕像，没有金碧辉煌的装饰，只有岩石、烛火、古老的壁画和几乎可触摸的寂静。这份极致的朴素，恰恰构成了它撼人心魄的力量。
对于岛上的居民和来自世界各地的朝圣者而言，这个洞穴远不止是一个旅游点。它是生活的轴心，是精神的锚地。你会看到穿着黑色长袍的修道士默默走过，看到年迈的妇人虔诚地亲吻洞壁，听到用各种语言低声念诵的祷文。这里的时间是凝滞的，又是流动的，它连接着公元一世纪的某个神圣瞬间，也安放着二十一世纪每一个寻找意义的灵魂的此刻。它的核心魅力，就在于这种跨越两千年的、直接而纯粹的精神对话，在一个最原始的自然容器中发生。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "船缓缓靠近拔摩岛时，你首先感受到的是一种与世界剥离的寂静。海水是那种沉静的、近乎墨色的蓝，环绕着一座由赭色岩石和零星白色房屋构成的小岛，荒凉中带着一种不容置疑的庄严。空气中弥漫着干燥的草本植物香气，混杂着海风咸涩的味道。这里没有其他爱琴海岛屿那种欢腾的度假气息，耳边只有风声、浪声，和偶尔传来的教堂钟声，缓慢而悠长，像是时间的节拍器被特意调慢了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沿着从港口斯卡拉镇蜿蜒向上的山路步行，是打开拔摩岛的正确方式。路边的仙人掌和矮灌木顽强地生长，阳光毫无遮拦地倾泻下来，在白色的石阶上投下清晰的影子。当你气喘吁吁地走到半山腰，看到一个不起眼的、由白色矮墙围起的入口时，那份期待会瞬间化为一种屏息的肃穆。走进《启示录》洞穴，外界的光亮与炎热骤然被隔绝。一种潮湿的、带着岩石清冷的气息扑面而来，光线昏暗，只有几盏长明灯和从天然石缝中透进的微光，勾勒出洞穴崎岖的轮廓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你的眼睛需要一点时间适应昏暗。然后，你会看到那个传说中的地方：一块略微凸起的平滑石板，据说就是圣约翰枕着头休息的地方；石壁上一个天然的三角形裂缝，被指认为“神圣三位一体”的启示通道；还有上方那个小小的、被熏黑的壁龛，他的弟子普罗霍罗斯曾在那里书写。最震撼的莫过于触摸那些被无数朝圣者抚摸得无比光滑的岩石表面，冰凉中仿佛能感受到千年来无数手掌的温度和祈祷时轻微的颤抖。这里没有宏伟的雕像，没有金碧辉煌的装饰，只有岩石、烛火、古老的壁画和几乎可触摸的寂静。这份极致的朴素，恰恰构成了它撼人心魄的力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对于岛上的居民和来自世界各地的朝圣者而言，这个洞穴远不止是一个旅游点。它是生活的轴心，是精神的锚地。你会看到穿着黑色长袍的修道士默默走过，看到年迈的妇人虔诚地亲吻洞壁，听到用各种语言低声念诵的祷文。这里的时间是凝滞的，又是流动的，它连接着公元一世纪的某个神圣瞬间，也安放着二十一世纪每一个寻找意义的灵魂的此刻。它的核心魅力，就在于这种跨越两千年的、直接而纯粹的精神对话，在一个最原始的自然容器中发生。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拔摩岛《启示录》洞穴`} />
                <InfoRow label="英文名称" value={`Cave of the Apocalypse`} />
                <InfoRow label="正式名称" value={`Cave of the Apocalypse`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`拔摩岛（Patmos）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是基督教世界最重要的圣地之一，相传是使徒约翰受神启并撰写《圣经·新约》最后一卷《启示录》的地点。`} />
                <InfoRow label="建筑特色" value={`一处天然形成的岩洞，内部被巧妙地改造并融入了拜占庭式的礼拜空间元素，石壁上古老的湿壁画与原始的岩石肌理交织。`} />
                <InfoRow label="建筑风格" value={`早期基督教与拜占庭风格在自然洞穴中的朴素融合。`} />
                <InfoRow label="文化价值" value={`作为信仰、文学与历史的交汇点，它不仅是东正教的朝圣核心，也是西方文明终极文本《启示录》的灵感发源地，具有无可替代的精神与文化象征意义。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（5月至10月）：每天上午8:00至下午1:30，下午4:00至晚上8:00。冬季（11月至次年4月）：每天上午8:00至下午1:00，下午3:00至下午5:00。周日和重大宗教节日（如复活节）的上午通常只对礼拜者开放，下午对游客开放。具体时间可能因修道院安排微调，建议行前在圣约翰修道院官网二次确认。`} />
              <InfoRow label="门票价格" value={`洞穴本身参观免费。但强烈建议进行“联合捐赠参观”：包含《启示录》洞穴和上方圣约翰修道院（Monastery of Saint John the Theologian）的捐赠门票约为10欧元。学生、65岁以上老人及团体有少量优惠。所有收入用于遗址维护。`} />
              <InfoRow label="地址" value={`Cave of the Apocalypse, Patmos 855 00, Greece`} />
              <InfoRow label="交通方式" value={`拔摩岛是爱琴海中的岛屿，无机场。最常用路线：从雅典乘飞机（约45分钟）或火车（约5小时）到萨摩斯岛（Samos）或科斯岛（Kos），再从这两岛乘渡轮前往拔摩岛斯卡拉港（Skala），航程约1-2.5小时（快船/慢船）。也可从雅典比雷埃夫斯港（Piraeus）直接坐夜班渡轮，耗时约7-9小时，夕发朝至。岛上交通：从斯卡拉港出发，有固定班次的公交车前往洞穴和修道院（约15分钟车程），班次稀疏请提前查时刻表；也可乘坐出租车（约10-15欧元）或租车；最推荐步行（约45分钟上坡路），是朝圣体验的一部分。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从公元一世纪九十年代罗马帝国的恐怖统治说起。当时，年迈的使徒约翰，耶稣最爱的门徒，因传播基督教而被罗马皇帝图密善流放。帝国的流放地众多，但图密善特意选择了拔摩岛——爱琴海东部一个偏僻、荒芜、岩石嶙峋的岛屿。这并非偶然，其意图是让这位影响力巨大的使徒在远离人群的孤寂中 physically and spiritually perish。罗马人没想到的是，这种极致的隔绝，却成了神圣启示的温床。约翰在这个岛上，没有教堂，没有同伴，只有海浪、岩石和无穷无尽的天空。正是在这种绝对的孤独与对神的全然依赖中，异象降临了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传统记载，每个主日，约翰都会来到这个离海岸不远的天然洞穴中祈祷和冥想。洞穴为他提供了基本的遮蔽，抵挡爱琴海强烈的阳光和偶尔肆虐的海风。在一个安息日，据信是在这里，他听到了身后“如同号筒”的巨大声音。他转身，看见了人子耶稣的异象，金光灿烂，手持七星，口吐利剑。此后一系列复杂而震撼的异象——七封印、四骑士、善恶最终之战、新耶路撒冷的降临——陆续向他展现。约翰将这些所见所闻口述给他的弟子兼 scribe，普罗霍罗斯。于是，在摇曳的油灯光下，在粗糙的岩石背景中，基督教的最后一部正典，也是整部《圣经》最富戏剧性和预言性的篇章《启示录》（希腊语“Apocalypse”，意为“揭示”），被一个字一个字地记录了下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后的几个世纪，洞穴本身基本保持着自然状态，但已成为早期基督徒秘密朝圣的地点。真正的转变发生在11世纪。一位名叫克里斯托杜洛斯的拜占庭修道士，同样因宗教迫害来到拔摩岛。他被圣约翰的故事深深打动，并获得了拜占庭皇帝阿历克塞一世的资助，于1088年在洞穴正上方的山巅，建立了宏伟的圣约翰修道院，形同一座捍卫信仰的堡垒。修道院的建立，正式将洞穴纳入了神圣建筑群体系。修道士们对洞穴进行了谨慎的修饰：在岩石表面绘制了描述《启示录》场景和圣约翰生平的湿壁画，设立了祭坛，用银质圣物标示出圣约翰枕首的石板和聆听神圣声音的裂缝所在。洞穴从一个自然遗迹，被提升为一个功能完整的礼拜堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在其后的岁月里，拔摩岛先后经历了拜占庭、威尼斯、奥斯曼土耳其的统治。无论政权如何更迭，圣约翰修道院因其强大的宗教权威和一定的自治权，始终保护着这片圣地。洞穴成为了东正教世界极其重要的朝圣目的地，尤其是在复活节期间。朝圣者们历经艰险渡海而来，沿着“神圣之路”（那条你步行上山的路径）攀爬，最终在昏暗的洞穴中跪拜、祈祷、亲吻石头，完成他们精神之旅的最高潮。这种虔敬的行为持续了千年，无意中也将洞穴内部的岩石表面打磨得如同玉石般光滑温润。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天你所看到的洞穴，正是这漫长历史层积的结果。原始的岩石诉说着地质的古老与使徒时代的艰辛；斑驳的11-17世纪拜占庭壁画（尽管部分已损毁）讲述着中世纪的虔信；银质的圣物装饰和长明的橄榄油灯，代表着持续不断的现代礼拜活动；而来自全球各地、不同肤色面孔的访客，则续写着这个圣地与当代世界对话的新篇章。它从未被重建或过度装修，所有的改动都是叠加而非抹除，这让它成为一部活着的、可以触摸的石头史书。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整体验拔摩岛的精神内核，建议安排一整天的时间，并秉持“朝圣而非观光”的心态。最佳方案是搭乘早班船抵达斯卡拉港（Skala），避开一日游团队的人潮。上午阳光尚不酷烈时，开启步行上山之旅，这是沉浸式体验不可或缺的前奏。整体游览节奏务必放慢，洞穴和修道院都不是匆匆一瞥便能领会的地方。建议先在洞穴沉浸约一小时，感受其静谧；随后上山参观宏伟的修道院及其中博物馆（约1.5-2小时）；最后在黄昏时分下山，于斯卡拉港享用晚餐，看夕阳染红海面，回味一整天的精神漫游。这样安排，从身体的行走到心灵的沉淀，形成一个完整而深刻的闭环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`进入洞穴和修道院教堂时，务必确保着装庄重：肩膀和膝盖必须遮盖，女性最好携带一条围巾或披肩，男性避免穿短裤和背心。岛上几乎没有欺诈行为，但请尊重宗教场所的严肃性，室内保持安静，不随意拍摄修道士或正在祈祷的信徒。最佳游览季节是春季（5-6月）和初秋（9-10月），气候宜人且避开了盛夏的酷热与人流高峰。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从斯卡拉港码头出发，背对蔚蓝的海湾，深吸一口带着咸味的空气，开始沿着有明显标识、两旁是白色小屋和九重葛的“神圣之路”缓步上行。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在半山腰找到那个朴素的白色拱形入口，在进入《启示录》洞穴前稍作停顿，调整呼吸，让心绪从尘世的喧嚣中沉淀下来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入洞穴内部，让眼睛适应昏暗，然后静静走到圣约翰枕首的石板旁，用手轻轻触碰那被无数祈祷磨光的冰凉表面，倾听可能只有自己心跳声的绝对寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抬头仔细辨认岩石壁龛和裂缝，以及那些历经数百年已然斑驳但依然动人的拜占庭湿壁画，尝试解读《启示录》中的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在洞穴角落的长椅上静坐片刻，关闭眼睛，仅用其他感官去感受这个地方独特的能量场——潮湿的岩石气味、橄榄油灯微弱的噼啪声、烛火摇曳的光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出洞穴，继续向上攀登最后一段陡峭的阶梯，抵达雄踞山巅、宛如城堡的圣约翰修道院，在高墙下感受其磅礴的守护气势。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观修道院主教堂内部金光灿灿的圣像屏和古老圣像，然后不要错过其珍宝博物馆，那里收藏着令人叹为观止的中世纪手稿、圣物和精美织物。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从修道院的防御城墙漫步至视野开阔的平台，在此眺望整个拔摩岛、湛蓝的爱琴海以及星罗棋布的邻岛，感受那种“世界尽头与启示开端”的壮丽与孤绝。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从斯卡拉港沿海道路远眺全景`}</h4>
                  <p className="text-sm text-gray-700">{`在日落前约一小时，走到港口北侧的海边公路上，用长焦镜头压缩空间，将山巅的修道院、半山的洞穴建筑群与前景的港口船只一同纳入画面，形成历史与当代生活的有趣对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`神圣之路中途的回望视角`}</h4>
                  <p className="text-sm text-gray-700">{`在步行上山的石阶路中途，找一个可以回望斯卡拉港和海湾的拐角，在上午侧光下拍摄，让蜿蜒的小路、白色的房屋和蓝宝石般的海面构成一幅充满层次感的阶梯式风景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`洞穴入口处的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在洞穴内部，以低矮的拱形石门为画框，对准门外洒满阳光的庭院和远处的爱琴海，拍下一张明暗对比强烈、寓意“黑暗中的光明”或“启示通往世界”的框架构图照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`洞穴内部原则上允许不开闪光的拍照，但务必以不干扰任何祈祷者为绝对前提，在人多或举行小型仪式时请主动收起相机。利用洞穴石缝透入的“神圣之光”进行创作，侧光能完美展现岩石纹理和壁画的质感。避免为了拍照而摆出任何不庄重的姿势，拍摄修道士必须事先获得明确许可。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`斯卡拉港经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`港口附近家庭经营的简朴公寓，房间一尘不染且带小阳台，老板会送你自家产的百里香蜂蜜，晚上伴着轻柔的海浪声入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色精神体验`}</h4>
                  <p className="text-sm text-green-800">{`由修道院运营或推荐的位于霍拉（Chora，山顶小镇）的传统客栈，石砌建筑充满历史感，推开窗就能看到修道院城墙，清晨在教堂钟声中醒来，完全融入岛上的宗教生活节奏。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端宁静享受`}</h4>
                  <p className="text-sm text-yellow-800">{`岛上为数不多的精品酒店，坐落在远离港口、拥有私人海湾的僻静处，设计简约而优雅，无边泳池仿佛与爱琴海融为一体，适合在深度精神之旅后寻求彻底放松与沉思的旅者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拔摩岛整体治安极好，民风淳朴。霍拉（山顶小镇）夜晚极其安静，氛围超凡脱俗，但餐厅和商店关门较早；斯卡拉港生活更便利，晚上有滨海餐厅营业。夏季（7-8月）住宿非常紧张，务必提前数月预订，春季和秋季则宽松许多。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开拔摩岛，乘船驶向茫茫大海时，你带走的可能不是几张惊艳的照片，而是一种难以言喻的内心平静，以及一堆需要慢慢消化的庞大问题。这个岛屿，尤其是那个朴素的洞穴，像一把钥匙，无意中打开了你心中某个被日常琐事尘封已久的房间。那里存放着关于生命意义、终结与开端、恐惧与希望的古老追问。在这个一切都被加速、被消费、被简化的时代，拔摩岛固执地保持着它的缓慢、它的孤寂、它的沉重。它不提供轻松的答案，只提供一处让你不得不面对那些终极问题的空间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是为什么每一个寻求深度旅行，而不只是地理位移的人，都应该来这里一次。它不仅仅是一个“景点”，它是一个“境点”——心灵的境地。在这里，你行走的每一步都是千年来无数朝圣者足迹的叠加，你触摸的岩石承接过使徒的头颅，你凝视的裂缝曾被认为透过来自彼岸的光芒。这种与人类最深层次精神历史直接相连的体验，在世界上已所剩无几。它提醒我们，在物质世界的尽头之外，总有一片属于灵魂的海洋需要航行。来拔摩岛，不是为了逃避世界，而是为了在一个更清晰的维度上，重新理解自己与这个世界的关系。这趟旅程，终将成为你个人启示录的序章。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/epidaurus-ancient-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃皮达鲁斯古剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Epidaurus Theatre</p>
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
              <a href="/attractions/mycenae" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈锡尼遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mycenae</p>
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
