import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '苏比亚科圣本笃修道院 Sacro Speco｜悬崖上的信仰与湿壁画奇迹 - 最佳欧洲景点',
  description: '车子在亚平宁山脉的褶皱里不知拐了多少个弯，当苏比亚科小镇的红瓦屋顶终于出现在下方山谷时，我知道目的地近了。但真正让我屏住呼吸的，是转过最后一个山坳后看到的景象：一整面灰白色的、近乎垂直的巨大岩壁上，不可思议地“粘附”着一簇层层叠叠的建筑。那不是修建，更像是镶嵌——萨克罗罗科修道院就像一只巨大的蜂巢，',
}

export default function SacroSpecoSubiacoBenedictineMonasteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '苏比亚科圣本笃修道院（萨克罗罗科）', href: '/attractions/sacro-speco-subiaco-benedictine-monastery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`苏比亚科圣本笃修道院（萨克罗罗科）・Subiaco・意大利・苏比亚科`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在亚平宁山脉的褶皱里不知拐了多少个弯，当苏比亚科小镇的红瓦屋顶终于出现在下方山谷时，我知道目的地近了。但真正让我屏住呼吸的，是转过最后一个山坳后看到的景象：一整面灰白色的、近乎垂直的巨大岩壁上，不可思议地“粘附”着一簇层层叠叠的建筑。那不是修建，更像是镶嵌——萨克罗罗科修道院就像一只巨大的蜂巢，牢牢地筑在悬崖的怀抱里。通往它的小径隐没在浓郁的栗子树和橡木林中，空气里是清冷的岩石味、潮湿的苔藓味，还有远处隐约传来的、仿佛千年未变的溪流潺潺声。
走近了，那种震撼愈发具体。你几乎分不清哪里是天然岩壁，哪里是人工砌筑的石墙。粗糙的石灰岩表面被岁月磨出了光泽，窄小的窗户如同岩洞的眼睛，窥视着下方的幽谷。推开那扇厚重的木门，瞬间就从意大利明媚的阳光里，跌入了一个幽暗、凉爽、弥漫着古老蜡炬和石头气息的世界。耳朵里先是一片寂静，接着是远处某处隐约的拉丁文诵经声，还有水珠从岩缝滴落到石槽里那一声清脆而恒久的“叮咚”。这里没有梵蒂冈的辉煌金碧，有的只是一种近乎原始的、直抵人心的虔诚力量。
你会看到年迈的修士穿着棕色的长袍，安静地穿过低矮的拱廊，他们的身影在从岩窗透进来的那一束束“上帝之光”中时隐时现。这里不是一个冰冷的博物馆，而是一个仍然跳动着的信仰心脏。当地人来这里，不只是为了看壁画，更是为了在圣本笃曾经隐居的洞穴前点上一支蜡烛，静静坐一会儿。那种感觉，就像你触摸到的不是墙壁，而是时间本身粗糙的皮肤。
最摄人心魄的，当然是那些壁画。但它们的美，不在于技巧的完美，而在于那种笨拙又热烈的真诚。在摇曳的烛火光晕下，那些一千多年前的面孔从墙面上浮现出来，色彩依然鲜艳得惊人——圣母的长袍是深沉的群青，圣徒的面颊透着淡淡的朱红。你会突然意识到，你正站在一个艺术史的分水岭上：一边是古希腊罗马艺术最后的余晖，一边是即将到来的文艺复兴的熹微晨光。而这一切，都被完好地封存在这座悬崖的寂静里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在亚平宁山脉的褶皱里不知拐了多少个弯，当苏比亚科小镇的红瓦屋顶终于出现在下方山谷时，我知道目的地近了。但真正让我屏住呼吸的，是转过最后一个山坳后看到的景象：一整面灰白色的、近乎垂直的巨大岩壁上，不可思议地“粘附”着一簇层层叠叠的建筑。那不是修建，更像是镶嵌——萨克罗罗科修道院就像一只巨大的蜂巢，牢牢地筑在悬崖的怀抱里。通往它的小径隐没在浓郁的栗子树和橡木林中，空气里是清冷的岩石味、潮湿的苔藓味，还有远处隐约传来的、仿佛千年未变的溪流潺潺声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了，那种震撼愈发具体。你几乎分不清哪里是天然岩壁，哪里是人工砌筑的石墙。粗糙的石灰岩表面被岁月磨出了光泽，窄小的窗户如同岩洞的眼睛，窥视着下方的幽谷。推开那扇厚重的木门，瞬间就从意大利明媚的阳光里，跌入了一个幽暗、凉爽、弥漫着古老蜡炬和石头气息的世界。耳朵里先是一片寂静，接着是远处某处隐约的拉丁文诵经声，还有水珠从岩缝滴落到石槽里那一声清脆而恒久的“叮咚”。这里没有梵蒂冈的辉煌金碧，有的只是一种近乎原始的、直抵人心的虔诚力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你会看到年迈的修士穿着棕色的长袍，安静地穿过低矮的拱廊，他们的身影在从岩窗透进来的那一束束“上帝之光”中时隐时现。这里不是一个冰冷的博物馆，而是一个仍然跳动着的信仰心脏。当地人来这里，不只是为了看壁画，更是为了在圣本笃曾经隐居的洞穴前点上一支蜡烛，静静坐一会儿。那种感觉，就像你触摸到的不是墙壁，而是时间本身粗糙的皮肤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最摄人心魄的，当然是那些壁画。但它们的美，不在于技巧的完美，而在于那种笨拙又热烈的真诚。在摇曳的烛火光晕下，那些一千多年前的面孔从墙面上浮现出来，色彩依然鲜艳得惊人——圣母的长袍是深沉的群青，圣徒的面颊透着淡淡的朱红。你会突然意识到，你正站在一个艺术史的分水岭上：一边是古希腊罗马艺术最后的余晖，一边是即将到来的文艺复兴的熹微晨光。而这一切，都被完好地封存在这座悬崖的寂静里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`苏比亚科圣本笃修道院（萨克罗罗科）`} />
                <InfoRow label="英文名称" value={`Subiaco`} />
                <InfoRow label="正式名称" value={`Monastero di San Benedetto (Sacro Speco)`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`苏比亚科`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是西方隐修制度的摇篮，圣本笃在此创立了影响整个欧洲文明的本笃会会规。`} />
                <InfoRow label="建筑特色" value={`一座完全嵌入悬崖峭壁、与山岩浑然一体的多层建筑奇迹，仿佛从石头中生长出来。`} />
                <InfoRow label="建筑风格" value={`以朴素的罗马式风格为基底，部分后期添加了哥特式元素，整体呈现粗粝而神圣的原始美感。`} />
                <InfoRow label="文化价值" value={`保存了意大利中部最珍贵、最完整的一系列中世纪早期湿壁画，是连接古代与文艺复兴艺术的活化石。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`修道院全年开放，但开放时间随季节变化显著。夏季（4月至9月）通常为上午9:00至中午12:30，下午3:00至傍晚6:30。冬季（10月至3月）开放时间缩短，通常为上午9:30至中午12:30，下午3:00至傍晚5:00。每周一全天闭馆维护，重要宗教节日（如圣诞节、复活节）开放时间可能有特殊调整，建议行前务必查看官网或电话确认。`} />
              <InfoRow label="门票价格" value={`进入修道院本身免费，但接受自愿捐赠以支持维护工作。建议捐赠金额为每人3-5欧元。没有强制门票，但深度导览服务可能需要额外付费预约。`} />
              <InfoRow label="地址" value={`Via dei Monasteri, 28, 00028 Subiaco RM, Italy`} />
              <InfoRow label="交通方式" value={`从罗马出发是最佳选择。首先，从罗马蒂布蒂纳火车站（Tiburtina）乘坐区间火车前往蒂沃利（Tivoli），车程约40分钟，班次频繁。在蒂沃利换乘前往苏比亚科小镇的Cotral巴士，这段山路巴士行程约1小时，班次较少（通常每小时1-2班），需提前查好时刻表。抵达苏比亚科镇中心后，前往修道院有两种方式：体力好者可沿清晰指示的“圣本笃小径”步行上山，约需40分钟，是一段美妙的朝圣之旅；亦可乘坐当地稀少的出租车或提前联系民宿安排接送。自驾是最灵活的方式，从罗马出发约1.5小时，但最后一段是狭窄蜿蜒的山路，需谨慎驾驶。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从公元五世纪末讲起。那时罗马帝国已然崩塌，世界陷入动荡与蛮荒。一个名叫本笃的罗马贵族青年，对糜烂的城市生活感到彻底厌倦，他怀揣一颗寻求上帝与内心宁静的心，独自逃到了苏比亚科这片荒蛮的山野。传说中，他最初就栖身在一个狭窄的岩洞（也就是“圣洞”，Sacro Speco）里，一住就是三年。食物全靠山上另一位隐修弟兄用绳子吊下来。这段极端苦修的岁月，塑造了他对修行生活的核心理解：祈祷与劳作。今天你依然可以弯腰走进那个低矮的洞穴，触摸他当年依靠的冰冷岩石，想象一个年轻人如何在这里与内心的魔鬼搏斗，并最终找到了心灵的秩序。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "本笃的圣德之名逐渐传开，吸引了许多追随者。他索性就在这悬崖上下，陆续建立了十二座小型修道院，形成了一个隐修社区。但真正让此地名垂青史的，是他在此后移居卡西诺山后所写下的《本笃会规》。而苏比亚科，正是这部深刻塑造了欧洲中世纪社会、文化、乃至农业与科技发展的伟大会规的精神诞生地。可以说，欧洲修道院文明的星星之火，就是从这里这面粗糙的岩壁上点燃的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到公元八世纪以后。为了纪念这位伟大的圣人，信徒们开始围绕那个最初的圣洞，依附着悬崖，像燕子筑巢般一点点修建起祈祷所和小教堂。真正的艺术辉煌发生在十三世纪。不知名的修士画师们，或许来自东方，或许受拜占庭艺术影响，他们攀附在脚手架上，在潮湿的岩壁和新砌的墙面上，一笔一笔绘制出了那些震撼后世的湿壁画。他们画下了圣本笃的生平故事，画下了肃穆的圣母，画下了最后的审判。这些画作没有佛罗伦萨大师们的科学透视，却充满了直击灵魂的象征力量和浓烈情感。尤为珍贵的是，由于修道院位置极为偏僻，它在后来的岁月中免遭了许多战争与“现代化”改建的破坏，这些壁画就像被时光遗忘的宝石，奇迹般地保存了它们最初的样貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "后来的几个世纪里，修道院被不断扩建和修饰，增加了哥特式的拱窗、小巧的回廊和观景台。但它从未失去其原始的精神内核。拿破仑的军队曾掠过这里，两次世界大战的炮火也在远处的山谷轰鸣，但修道院始终如同暴风雨中的岩礁，岿然不动。修士们在这里抄写古籍，耕种山田，保持着“祈祷与劳作”的古老节奏。直到今天，它依然是一个活跃的本笃会修道院。当你行走其中，你走过的不仅是旅游的路线，更是一条延续了1500年的精神足迹。每一级被踩得凹陷的石阶，每一处被手掌摩挲得光滑的栏杆，都在无声地讲述着信仰与时间的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`这是一次需要虔诚与耐心的朝圣之旅，建议安排一整个上午或下午，至少预留3-4小时。最佳抵达时间是上午9点一开门，此时光线斜射入山谷，修道院外墙沐浴在金光中，且游客稀少，能独享那份千年寂静。整体节奏宜慢不宜快，先在外围感受建筑与环境的融合，再深入内部细细品味壁画与空间。游览顺序自然由下而上，从山脚小镇的仰望开始，到攀登圣径，最后沉浸于内部圣所，这是一个情绪逐步酝酿、最终抵达高潮的完美过程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着绝对舒适防滑的徒步鞋，因为内部石阶陡峭且光滑，部分通道非常低矮需要弯腰。
修道院内严禁喧哗，手机请调至静音，拍照时绝对禁止使用闪光灯，这是对圣地与古老壁画最基本的尊重。
内部没有餐饮设施且参观耗时较长，建议自备一小瓶水，但请在指定区域饮用。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从苏比亚科小镇中心的宁静广场出发，沿着有明确路标的“圣本笃小径”开始缓步上行，穿过一片沙沙作响的栗子树林。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在半山腰的第一个拐角处务必停下回头，那里是拍摄修道院全景与脚下绿色山谷交织画面的经典视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达修道院入口后先别急着进去，用手触摸一下那冰凉且凹凸不平的岩壁外墙，感受建筑与山体那种天衣无缝的融合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入后首先拜访最底层也是最核心的“圣洞”，在幽暗烛光中静立片刻，感受圣本笃曾在此苦修三年的那种极致孤寂与灵性力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄且盘旋上升的石梯，逐层探索各个小礼拜堂，让你的眼睛慢慢适应昏暗光线，去发现墙壁上逐渐浮现的古老壁画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在挂满还愿牌的小教堂里停留，读一读那些来自世界各地、用不同语言写下的祈祷与感谢，体会此地持续的生命力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那个突出于悬崖之上的小阳台，站在那里深呼吸，俯瞰脚下令人眩晕的深谷，听风声掠过岩壁的呼啸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，去修士们经营的小纪念品商店看看，那里出售他们自制的蜂蜜、草药茶和手抄经文复制品，是比任何明信片都好的纪念。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山脚小镇边缘仰望点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，站在通往修道院小径的起点附近，用长焦镜头压缩空间，捕捉修道院如同空中楼阁般悬于绝壁的震撼景象，此时侧光能完美勾勒出建筑的轮廓。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“玫瑰窗”小阳台`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光会恰好洒在这个突出悬崖的小石台上，以远处的群山和深谷为背景拍摄人物剪影或建筑局部，画面充满戏剧性与空间感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣弗朗西斯小堂内景`}</h4>
                  <p className="text-sm text-gray-700">{`利用从高处小窗射入的一束自然光作为唯一光源，对准绘制于13世纪的《圣弗朗西斯像》湿壁画，拍摄时光圈不宜过大，以保留周围环境的幽暗氛围，凸显神圣感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`底层回廊拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在回廊内侧，通过一个低矮的罗马式拱门作为画框，去拍摄对面另一个拱门及更远处若隐若现的山景，形成强烈的景深与结构美感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内壁画区域光线极其昏暗且复杂，建议使用大光圈定焦镜头和高感光度性能好的相机，三脚架通常不允许使用。`}</li>
                <li>• {`尊重宗教场所，拍摄修士或祈祷者时必须事先征得明确同意，切勿打扰他人的灵修时刻。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在苏比亚科镇中心家庭经营的“阳台民宿”，房间简朴但一尘不染，老板娘早餐会端来自制的樱桃酱和温热的牛奶，从窗户就能看见远处山崖上的修道院剪影。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择修道院附近由古老石屋改造的“隐修之居”农庄，晚上能听到远处修道院隐约的钟声，房东会带你认识各种山地草药，并享用用壁炉烤制的传统羊肉。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车半小时前往蒂沃利古镇，入住拥有文艺复兴花园的五星级别墅酒店，在奢华的浴缸里洗去徒步的疲惫后，在露台上一边品尝普罗塞克起泡酒，一边回味白日悬崖上的震撼。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`深度朝圣者之选`}</h4>
                  <p className="text-sm text-purple-800">{`提前数月申请修道院本身提供的极简朴招待所（ foresteria），房间只有一床一桌一椅，但你能与修士们共进简单的餐食，参与清晨的祈祷，获得超越普通游客的生命体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "苏比亚科小镇本身住宿选择非常有限且条件质朴，追求舒适便利的游客更建议以蒂沃利或罗马为基地进行一日游。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（春秋季）和宗教节日期间，镇上唯一几家好民宿会很快订满，务必提前规划。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "山区夜晚凉爽，即便夏季也建议准备一件薄外套。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开萨克罗罗科很久之后，我的脑海里反复出现的，不是某一幅具体壁画的模样，而是一种混合的感觉：岩石的冰凉、烛火的摇曳、滴水的清响，还有那种被巨大寂静包裹的安全感。在这个一切都被加速、被展示、被消费的时代，这个地方固执地保持着它的缓慢、幽暗与内向。它不讨好你，不试图让你惊叹于人类的巧夺天工，反而让你意识到自然的宏伟与时间的深邃。它提醒你，文明最坚韧的根系，可能就埋藏在这样不起眼的、与世隔绝的裂缝之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，每一位真正的深度旅行者，都应该来一次苏比亚科。你来，不是为了收集又一个世界遗产的头衔，而是为了完成一次“减速”与“回归”的仪式。站在那个悬崖上的小阳台，看着千年来未曾改变的山谷，你会明白，人类对精神深度的追求，对宁静的渴望，从未改变。这座从岩石中生长出来的修道院，就像一枚楔入现代性浮躁核心的定海神针，它静静地在那里，告诉你：有些东西，比砖石更持久，那就是信仰、美与沉默的力量。这是一次抵达地理边缘的旅行，更是一次潜入内心深处的航行。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cascia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡夏</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cascia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spello-flower-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯佩洛花城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spello</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sabbioneta-ideal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨比奥内塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sabbioneta</p>
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
