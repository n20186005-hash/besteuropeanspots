import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '别尔坦设防教堂 Biertan Fortified Church｜特兰西瓦尼亚的萨克森瑰宝，被三重城墙守护的时光胶囊 - 最佳欧洲景点',
  description: '车子在特兰西瓦尼亚墨绿色的丘陵间蜿蜒，当导航显示即将抵达时，我并没有期待会看到多么震撼的景象。然而，拐过一个弯道，它就这样毫无征兆地撞进了视野：一座巨大的、赭石色的教堂，带着它那童话里才有的尖顶和鳞次栉比的防御塔楼，雄踞在一座孤独的山丘之巅。它不是孤立在那里的，而是被整整三重、如同巨大同心圆般的石砌...',
}

export default function BiertanFortifiedChurchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '别尔坦设防教堂', href: '/attractions/biertan-fortified-church' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`别尔坦设防教堂・Biertan Fortified Church・罗马尼亚・锡比乌县别尔坦村`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在特兰西瓦尼亚墨绿色的丘陵间蜿蜒，当导航显示即将抵达时，我并没有期待会看到多么震撼的景象。然而，拐过一个弯道，它就这样毫无征兆地撞进了视野：一座巨大的、赭石色的教堂，带着它那童话里才有的尖顶和鳞次栉比的防御塔楼，雄踞在一座孤独的山丘之巅。它不是孤立在那里的，而是被整整三重、如同巨大同心圆般的石砌城墙牢牢地箍在山顶上，城墙厚重得仿佛是从山体里生长出来的。那一刻，你瞬间就明白了“设防”二字的全部重量——这并非一座温柔的祈祷之所，而是一个族群在数百年风雨飘摇中，紧握在手的最后堡垒与信仰灯塔。
沿着坡道向上走，空气中弥漫着古老砖石被正午阳光晒过后散发出的干燥气味，混合着远处田野里青草和野花的清香。耳边是绝对的宁静，只有你自己的脚步声，和偶尔从城墙垛口呼啸而过的风声。走近了，才发现那些城墙并非光秃秃的，墙体内侧镶嵌着一间间低矮的小屋，那是过去供村民在围困时避难和储存物资的仓房，如今木门紧闭，沉默地诉说着关于生存的紧迫记忆。穿过一道又一道厚重的拱形门洞，每过一道门，仿佛就向历史的更深处后退了一步，外界的现代声响被彻底过滤，时间在这里变得粘稠而缓慢。
终于站在了教堂本体的木门前。推开门的瞬间，光线骤然暗淡，一股混合了陈旧木头、蜡烛蜡和石壁凉意的气息扑面而来。眼睛需要几秒钟来适应。然后，你会被眼前纯净而庄严的空间攫住。与外部粗犷的防御姿态截然不同，内部是典型的晚期哥特式风格，线条优雅向上延伸。最令人屏息的是那座巨大的、装饰繁复的圣坛屏风，完成于1515年，上面雕刻着圣经故事的人物，虽然色彩在岁月中沉淀得古朴，但细节之生动，仿佛下一秒那些圣徒就会从木雕中走下来。阳光透过高高的、狭窄的彩色玻璃窗，在古老的长条木椅和石地板上投下几道静谧的光斑，尘埃在光柱中缓缓舞动。这里没有宏大的管风琴音乐，只有绝对的寂静，那种寂静深厚得能听见自己的心跳，以及数百年来在此回响过的无数祈祷。
这座教堂最打动人心的地方，就在于这种极致的矛盾与统一：它是防御的，也是神圣的；它是粗粝坚硬的，也是精雕细琢的；它讲述着关于恐惧、战争和生存的故事，却又守护着关于信仰、社区和爱的诺言。它不是一个冰冷的博物馆，直到今天，它依然是别尔坦村跳动的心脏，当地人的婚礼、洗礼和重要节日庆典仍在这里举行。当你触摸那些被无数手掌磨得光滑的木栏杆，你会感觉到，历史从未离开，它只是在这里睡着了，并且允许你轻轻走过它的梦境。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在特兰西瓦尼亚墨绿色的丘陵间蜿蜒，当导航显示即将抵达时，我并没有期待会看到多么震撼的景象。然而，拐过一个弯道，它就这样毫无征兆地撞进了视野：一座巨大的、赭石色的教堂，带着它那童话里才有的尖顶和鳞次栉比的防御塔楼，雄踞在一座孤独的山丘之巅。它不是孤立在那里的，而是被整整三重、如同巨大同心圆般的石砌城墙牢牢地箍在山顶上，城墙厚重得仿佛是从山体里生长出来的。那一刻，你瞬间就明白了“设防”二字的全部重量——这并非一座温柔的祈祷之所，而是一个族群在数百年风雨飘摇中，紧握在手的最后堡垒与信仰灯塔。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着坡道向上走，空气中弥漫着古老砖石被正午阳光晒过后散发出的干燥气味，混合着远处田野里青草和野花的清香。耳边是绝对的宁静，只有你自己的脚步声，和偶尔从城墙垛口呼啸而过的风声。走近了，才发现那些城墙并非光秃秃的，墙体内侧镶嵌着一间间低矮的小屋，那是过去供村民在围困时避难和储存物资的仓房，如今木门紧闭，沉默地诉说着关于生存的紧迫记忆。穿过一道又一道厚重的拱形门洞，每过一道门，仿佛就向历史的更深处后退了一步，外界的现代声响被彻底过滤，时间在这里变得粘稠而缓慢。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`终于站在了教堂本体的木门前。推开门的瞬间，光线骤然暗淡，一股混合了陈旧木头、蜡烛蜡和石壁凉意的气息扑面而来。眼睛需要几秒钟来适应。然后，你会被眼前纯净而庄严的空间攫住。与外部粗犷的防御姿态截然不同，内部是典型的晚期哥特式风格，线条优雅向上延伸。最令人屏息的是那座巨大的、装饰繁复的圣坛屏风，完成于1515年，上面雕刻着圣经故事的人物，虽然色彩在岁月中沉淀得古朴，但细节之生动，仿佛下一秒那些圣徒就会从木雕中走下来。阳光透过高高的、狭窄的彩色玻璃窗，在古老的长条木椅和石地板上投下几道静谧的光斑，尘埃在光柱中缓缓舞动。这里没有宏大的管风琴音乐，只有绝对的寂静，那种寂静深厚得能听见自己的心跳，以及数百年来在此回响过的无数祈祷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座教堂最打动人心的地方，就在于这种极致的矛盾与统一：它是防御的，也是神圣的；它是粗粝坚硬的，也是精雕细琢的；它讲述着关于恐惧、战争和生存的故事，却又守护着关于信仰、社区和爱的诺言。它不是一个冰冷的博物馆，直到今天，它依然是别尔坦村跳动的心脏，当地人的婚礼、洗礼和重要节日庆典仍在这里举行。当你触摸那些被无数手掌磨得光滑的木栏杆，你会感觉到，历史从未离开，它只是在这里睡着了，并且允许你轻轻走过它的梦境。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`别尔坦设防教堂`} />
                <InfoRow label="英文名称" value={`Biertan Fortified Church`} />
                <InfoRow label="正式名称" value={`Biertan Forted Church`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`锡比乌县别尔坦村`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲现存规模最大、保存最完好的特兰西瓦尼亚萨克森设防教堂之一，是萨克森人在此地区近千年生活与信仰的终极见证。`} />
                <InfoRow label="建筑特色" value={`一座将晚期哥特式教堂与强大的同心圆式防御工事完美融合的堡垒，拥有三重防御城墙、多座塔楼和一座罕见的“婚姻监狱”。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式宗教建筑为核心，融合了文艺复兴时期的防御工事元素与特兰西瓦尼亚本地的乡土建筑特点。`} />
                <InfoRow label="文化价值" value={`联合国教科文组织世界遗产，象征着特兰西瓦尼亚萨克森社区独特的历史、宗教自治传统及其在奥斯曼帝国威胁下坚韧的生存智慧。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂及博物馆开放时间：夏季（4月1日至10月31日）为周二至周日，上午10:00至下午1:00，下午2:00至5:00；冬季（11月1日至3月31日）开放时间缩短，通常为上午11:00至下午4:00，且周一、周二可能闭馆。请注意，教堂有时会举行宗教仪式，届时会临时关闭参观，出行前最好在官网或当地旅游信息中心核实。每年1月至2月可能有较长的维护性闭馆期。`} />
              <InfoRow label="门票价格" value={`成人票约15罗马尼亚列伊（约合3欧元）；学生及老人凭证件享有优惠票价约8列伊；7岁以下儿童免费。门票包含进入教堂内部、登上部分防御塔楼以及参观附属的萨克森民俗博物馆。接受当地货币现金，部分情况下可刷国际信用卡。`} />
              <InfoRow label="地址" value={`Piața Cetății 1, Biertan 557045, Sibiu, Romania`} />
              <InfoRow label="交通方式" value={`从最近的锡比乌国际机场（SBZ）出发，驾车是最便捷的方式。租车后沿E68/E81公路向北行驶约70公里，车程约1小时20分钟，沿途是特兰西瓦尼亚绵延的丘陵与田野风光。若搭乘公共交通，可从锡比乌市中心汽车站乘坐前往梅迪亚什（Mediaș）的班车（车次频繁，约30分钟一班），抵达梅迪亚什后再转乘前往别尔坦的当地班车（班次较少，每天约3-4班，需预留至少2小时总行程）。最灵活的方式是参加从锡比乌出发的一日游小团，通常包含交通和解说。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解别尔坦教堂为何被修成一座堡垒，你得把时钟拨回到近千年前。大约在12世纪中叶，匈牙利国王为了巩固边疆，从今天的德国卢森堡、法兰克尼亚等地，招募了一批后来被称为“特兰西瓦尼亚萨克森人”的日耳曼移民。这些勤劳、擅长手工艺和贸易的萨克森人被授予了土地和相当的自治权，他们在这片肥沃的土地上扎根，建立了一个个繁荣的社区，别尔坦就是其中最富庶的之一。到了14世纪，这里已经是一个重要的市镇，拥有自己的法庭和繁荣的葡萄种植业。最初的教堂是罗马式的，但很快，更大的野心和迫在眉睫的威胁，共同塑造了它的新面貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`威胁来自南方。奥斯曼帝国的阴影笼罩了整个巴尔干半岛，并不断向北渗透。特兰西瓦尼亚，这片富饶的土地，成了前线。萨克森村民们不仅面临土耳其军队的劫掠，还有本土的匪帮和动荡的政局。于是，一种独特的建筑形态应运而生：设防教堂。社区没有能力为整个村镇修建城堡，但他们可以强化自己的精神中心。从15世纪末开始，别尔坦的居民决心将他们的教堂变成一个坚不可摧的避难所。工程断断续续进行了近百年，这不仅是土木工程，更是一场全民参与的生存演习。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我们今天看到的宏伟结构，主要成形于16世纪初。他们围绕原有的哥特式教堂，修建了三道逐级升高的环形城墙。最外围的城墙最长，也相对最低，用于划定防御范围和阻滞第一波攻击。中间一道更高更厚，设有垛口和射击孔。最内一道则最为坚固，与教堂建筑本身以及几座关键的塔楼融为一体。他们一共修建了七座塔楼，每座都有特定功能：钟楼、哨塔、火药库、甚至还有一座专门用来关押不忠配偶的“婚姻监狱”——这个设计充满了黑色幽默与务实的社群治理智慧。城墙内建有上百间仓房，地窖里储存粮食和水，足以让全村数百人在里面固守数月。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`特别有趣的是，在修建和加固的过程中，特兰西瓦尼亚已经成为了一个独立公国，处于哈布斯堡帝国和奥斯曼帝国的夹缝中，保持着微妙的自治。这种多元文化交融也体现在了教堂建筑上。你既能看到典型的德意志哥特式尖拱和肋状拱顶，也能看到一些受到匈牙利和罗马尼亚本土影响的装饰元素。教堂内那幅惊人的圣坛屏风，就是由当地萨克森工匠大师完成的，它不仅是宗教艺术品，更是社区财富与凝聚力的展示。这座堡垒教堂，成功抵御了多次攻击，从未被武力攻破，成为了萨克森人自治、信仰和社区认同最坚实的物理象征。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的潮流无法阻挡。19世纪以后，随着奥斯曼威胁的消退，以及萨克森人因经济机会开始向大城市或海外迁移，这些设防教堂逐渐失去了军事功能。别尔坦也经历了衰落，许多仓房空置，教堂本身也一度年久失修。但它的传奇和美丽没有被遗忘。二战后，罗马尼亚政府开始重视其历史价值，进行了系统的修复。1993年，包括别尔坦在内的特兰西瓦尼亚七座设防教堂被列入联合国教科文组织世界遗产名录，这不仅是对其建筑价值的认可，更是对那个曾经充满活力、现已逐渐消散的萨克森文化的致敬与挽留。今天，它静静地矗立在山丘上，不再需要抵御刀剑，而是抵御着时间的侵蚀与遗忘。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`最佳的游览体验始于上午十点左右抵达。这个时候，旅行团大巴还未大批到来，清晨柔和的光线正好洒在教堂的东侧与南侧，适合拍照，气温也较为舒适。整体游览建议预留至少3到4小时，节奏宜慢不宜快。我们的路线将由外而内，由宏观到细节，先从远处和外围感受其堡垒的雄姿，再逐步深入它的心脏地带，最后登上制高点俯瞰全景。这样的安排能让你清晰地感知这座建筑从防御到信仰的功能层次，仿佛亲身经历一次从“城外逼近”到“城内避难”再到“获得精神慰藉”的完整历史体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`教堂内部地面为古老石砖，有些区域不平整，建议穿着舒适防滑的鞋子，女性避免细高跟鞋。参观内部时请务必保持肃静，尊重可能正在进行的祈祷活动。村内餐饮选择有限，最好自备少量饮用水和零食，或计划返回锡比乌再用正餐。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先把车停在村口停车场，步行穿过宁静的村落，从远处各个角度仰望山丘上那令人过目不忘的三重城墙与塔楼剪影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着古老的石阶坡道缓缓上行，亲手触摸第一道外围城墙粗糙而冰凉的巨石表面，感受其作为最初屏障的体量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过第一道拱门后，不要急着进入中心，先在中间的环形通道走走，观察那些嵌在墙体内的、门楣低矮的仓房，想象战时这里拥挤而紧张的生活气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从最具标志性的西门进入最内层庭院，站在庭院中央，原地旋转一周，让高耸的教堂主塔、防御塔楼和层层叠叠的屋顶将你环绕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入教堂内部，让你的眼睛在昏暗光线中适应，然后径直走向那座令人震撼的16世纪晚期哥特式圣坛屏风，仔细欣赏上面繁复的木雕叙事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`别忘了寻找教堂内那个著名的“婚姻监狱”——一个位于楼上的小房间，听听向导或介绍牌上关于它用于“调解”不和夫妻的奇特历史故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间在附属的萨克森民俗博物馆里流连，看看那些传统服饰、农具和家居用品，它们会瞬间让历史书上的“萨克森文化”变得鲜活可触。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，一定要登上钟楼或某座防御塔楼的顶层平台，这是 reward，你会获得360度无死角的特兰西瓦尼亚乡村全景画。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`山脚下村庄边缘的麦田或葡萄园旁`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，使用中长焦镜头压缩空间，将金黄的作物作为前景，拍下教堂巍然屹立于山丘顶端的经典全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`最内层庭院西侧角落`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至十一点，阳光能照亮教堂西门精美的石雕门框，此时站在庭院对角，可以拍下带有深邃门洞和内部光影的框架构图照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“婚姻监狱”的小窗台内`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，从小窗台向外拍摄，以古老的木窗框为画框，框住窗外庭院一角、石墙和远处的田园风光，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`登上钟楼顶层后`}</h4>
                  <p className="text-sm text-gray-700">{`任何晴朗的白天，环绕平台拍摄，可以拍下教堂屋顶鳞次栉比的瓦片、防御塔楼的垛口与远处绵延至天际线的特兰西瓦尼亚丘陵的三层全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内允许拍照，但严禁使用闪光灯，以免损害珍贵的木雕和壁画。使用大光圈镜头或提高ISO来捕捉内部微弱的光影之美。无人机飞行在村庄和教堂上空可能有严格限制，起飞前务必查询当地最新法规并尊重居民隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在锡比乌老城中心的家庭旅馆，清晨被石板路上的脚步声和咖啡馆的香气唤醒，乘坐早班车前来别尔坦进行一日探险，性价比极高。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择梅迪亚什小镇上由萨克森老宅改造的精品客栈，睡在厚重的木梁下，早餐品尝家庭自制的果酱和熏肉，沉浸在中欧小镇的夜间宁静里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`锡比乌郊外的乡村庄园酒店，房间拥有直面森林草地的落地窗，在一天的历史穿梭后，回到这里享受水疗和一顿用当地食材烹制的精致晚餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`深度沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`预订别尔坦村里极少的民宿（需提前很久锁定），当一日游的游客散去，你将独享教堂在星空下的神秘轮廓和村庄真正的夜晚寂静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`别尔坦村本身住宿极其有限，且设施简单，优先建议以锡比乌或梅迪亚什为基地。特兰西瓦尼亚乡村地区治安良好，人民友善。旅游旺季（7-8月）锡比乌住宿紧张，务必提前预订。如果想体验村庄宁静的清晨，住在梅迪亚什是折中好选择，车程仅20分钟。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开别尔坦的时候，已是傍晚。夕阳把三重城墙染成了温暖的蜜糖色，阴影被拉得很长，整座山丘堡垒像一块正在冷却的巨大琥珀。回望它，我忽然觉得，这不仅仅是一座建筑，更是一个关于“守护”的庞大隐喻。萨克森人用石头守护生命与财产，用信仰守护心灵与希望，而今天，我们这些后来者，则在用目光和记忆，守护着这段独一无二的历史切片。在这个全球化让一切趋向同质的时代，别尔坦以其近乎固执的独特性，提醒着我们地方文化的珍贵与脆弱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么它值得你专程而来？因为它提供了一种在普通大教堂或城堡里无法获得的、极其厚重的沉浸感。在这里，你走过的每一步，都能同时踩到军事史、艺术史、社会史和移民史的交织层理上。它不迎合游客，它只是存在在那里，沉默、坚实、充满故事。它会让你慢下来，让你思考社区的意义，信仰的力量，以及人类在不安世界中寻找安定的永恒努力。对于真正的深度旅行者而言，别尔坦设防教堂不是一个打卡点，而是一次与时间深度对话的机会，一次走进一本立体的、石砌的史诗中的机会。把它列入清单，不是去参观一个景点，而是去赴一个与坚韧灵魂的约会。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sibiu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡比乌老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sibiu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/craiova" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉约瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Craiova</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/corvin-castle-hunedoara" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡内多阿拉科尔文城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corvin Castle</p>
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
