import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨拉曼卡大学城 Salamanca｜漫步千年知识殿堂，寻找墙上的幸运青蛙 - 最佳欧洲景点',
  description: '你第一眼看到萨拉曼卡，会被一种温暖的金色击中。那不是刺眼的光，而是傍晚时分，夕阳为每一栋建筑、每一条石板路镀上的一层蜂蜜色柔光。空气里有种特别的味道，混合着古老石头的微凉气息、从街边咖啡馆飘出的浓缩咖啡香，还有书店里陈旧纸张的油墨味。整个老城区就像一个用巨大沙岩块搭成的迷宫，但你绝不会迷路，因为总能...',
}

export default function SalamancaOldUniversityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '萨拉曼卡大学城', href: '/attractions/salamanca-old-university' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨拉曼卡大学城・Salamanca・西班牙・萨拉曼卡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到萨拉曼卡，会被一种温暖的金色击中。那不是刺眼的光，而是傍晚时分，夕阳为每一栋建筑、每一条石板路镀上的一层蜂蜜色柔光。空气里有种特别的味道，混合着古老石头的微凉气息、从街边咖啡馆飘出的浓缩咖啡香，还有书店里陈旧纸张的油墨味。整个老城区就像一个用巨大沙岩块搭成的迷宫，但你绝不会迷路，因为总能看到三五成群、背着书包、语速飞快讨论着什么的年轻人。他们让这座近八百岁的古城，脉搏依然强劲而年轻。
走在通往大学的主街上，你的指尖会不自觉地去触碰那些被无数代学生和学者摩挲得无比光滑的墙壁。那种触感，凉凉的，但又似乎带着几个世纪积累下来的体温。突然间，你理解了为什么人们说萨拉曼卡是一座“石头上刻写的图书馆”。那些建筑立面本身就是一本打开的书，上面布满了复杂的雕刻：神话人物、王室纹章、宗教场景，还有那句著名的拉丁文铭文——“美德照亮一切”。知识在这里不是藏在象牙塔里的抽象概念，它就刻在城市的皮肤上，弥漫在空气里。
最神奇的是这里的声景。在庄严的萨拉曼卡大教堂旁，你能听到钟声浑厚的回响；拐进一条窄巷，立刻被小酒馆里传出的弗拉明戈吉他节奏和热烈的谈话声淹没；而在大学古老的中庭里，可能瞬间又陷入一片只有喷泉潺潺声和翻书声的宁静。这种交响乐，是纯正的萨拉曼卡旋律。它最打动人心的核心魅力，正在于这种毫不费力的融合——神圣与世俗、古老与青春、深奥的哲学与简单的快乐，全都在这片金色的石头世界里，安然共处，闪闪发光。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到萨拉曼卡，会被一种温暖的金色击中。那不是刺眼的光，而是傍晚时分，夕阳为每一栋建筑、每一条石板路镀上的一层蜂蜜色柔光。空气里有种特别的味道，混合着古老石头的微凉气息、从街边咖啡馆飘出的浓缩咖啡香，还有书店里陈旧纸张的油墨味。整个老城区就像一个用巨大沙岩块搭成的迷宫，但你绝不会迷路，因为总能看到三五成群、背着书包、语速飞快讨论着什么的年轻人。他们让这座近八百岁的古城，脉搏依然强劲而年轻。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在通往大学的主街上，你的指尖会不自觉地去触碰那些被无数代学生和学者摩挲得无比光滑的墙壁。那种触感，凉凉的，但又似乎带着几个世纪积累下来的体温。突然间，你理解了为什么人们说萨拉曼卡是一座“石头上刻写的图书馆”。那些建筑立面本身就是一本打开的书，上面布满了复杂的雕刻：神话人物、王室纹章、宗教场景，还有那句著名的拉丁文铭文——“美德照亮一切”。知识在这里不是藏在象牙塔里的抽象概念，它就刻在城市的皮肤上，弥漫在空气里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最神奇的是这里的声景。在庄严的萨拉曼卡大教堂旁，你能听到钟声浑厚的回响；拐进一条窄巷，立刻被小酒馆里传出的弗拉明戈吉他节奏和热烈的谈话声淹没；而在大学古老的中庭里，可能瞬间又陷入一片只有喷泉潺潺声和翻书声的宁静。这种交响乐，是纯正的萨拉曼卡旋律。它最打动人心的核心魅力，正在于这种毫不费力的融合——神圣与世俗、古老与青春、深奥的哲学与简单的快乐，全都在这片金色的石头世界里，安然共处，闪闪发光。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨拉曼卡大学城`} />
                <InfoRow label="英文名称" value={`Salamanca`} />
                <InfoRow label="正式名称" value={`萨拉曼卡古城与大学历史区`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`萨拉曼卡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是西班牙最古老、欧洲第四古老的大学——萨拉曼卡大学的心脏，也是文艺复兴时期西班牙学术与思想的绝对中心，被誉为“拉丁区的灵魂”。`} />
                <InfoRow label="建筑特色" value={`整座城市由一种独特的金黄色维利亚马约尔砂岩建造，在阳光下仿佛流动的蜂蜜与黄金，被誉为“黄金之城”。`} />
                <InfoRow label="建筑风格" value={`哥特式、银匠式（西班牙文艺复兴时期一种极尽繁复的装饰风格）和巴洛克风格的完美交融与叠加。`} />
                <InfoRow label="文化价值" value={`一个活着的学术圣地，在这里，严肃的学院派历史与充满烟火气的学生生活、古老的拉丁文铭刻与寻找青蛙的现代游戏，达成了奇妙而动人的和谐。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`萨拉曼卡大学历史建筑（如大学正门、古老图书馆、阶梯教室）通常开放时间为周一至周六上午10:00至晚上19:00，周日上午10:00至下午14:00。7月和8月夏季及节假日开放时间可能缩短，建议行前查询官网。城市本身（广场、街道、教堂外部）全天24小时开放。萨拉曼卡大教堂的塔楼和博物馆有独立开放时间，一般为10:00-20:00。`} />
              <InfoRow label="门票价格" value={`进入萨拉曼卡大学历史区（包括正立面、古老教室、图书馆等核心部分）成人票约10欧元，学生及65岁以上老人享有折扣约8欧元。大学正门（“青蛙立面”）外部参观免费。萨拉曼卡新旧大教堂联票约6欧元。贝壳之家博物馆门票约5欧元。主广场（马约尔广场）免费。许多修道院庭院可免费进入。`} />
              <InfoRow label="地址" value={`Plaza Mayor, s/n, 37002 Salamanca, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发最为便捷。乘坐高铁（AVE）从马德里查马丁火车站直达萨拉曼卡站，车程约1小时40分钟，班次频繁，建议提前在Renfe官网购票以获优惠。长途巴士也是一种经济选择，从马德里南站出发，车程约2.5-3小时。萨拉曼卡市内景点高度集中，从火车站或巴士站搭乘公交车至市中心（如Plaza Mayor站）约15分钟，之后所有景点均可轻松步行抵达。城市非常平坦，步行是最佳的探索方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1218年说起。那时的西班牙，正处于基督教王国从南部的穆斯林手中收复失地的“光复运动”高潮。莱昂国王阿方索九世，一位充满远见的君主，决定在萨拉曼卡创办一所“总学堂”。他的初衷很实际：为王国培养懂得法律、医学和神学的管理者与教师，以巩固收复的疆土。但这颗种子播下后，却长出了一棵谁也没预料到的参天大树。1254年，阿方索十世“智者”国王赋予了它“大学”的正式地位和广泛特权，并制定了详细的章程。从此，萨拉曼卡的命运被彻底改变了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个文艺复兴时期，是萨拉曼卡的黄金时代。随着西班牙成为全球帝国，源源不断的财富从美洲流入，国王和教皇都慷慨资助这所大学。它吸引了全欧洲最顶尖的头脑。在这里，神学家们辩论着良知与权威；法学家们探讨着“美洲印第安人是否拥有灵魂”这一关乎帝国伦理的根本问题；哥伦布在开启第二次远航前，曾专门来到这里的学者面前阐述他的地理理论。大学的声望如此之高，以至于西班牙语里诞生了一句谚语：“Lo que dice Salamanca, eso es la verdad.”（萨拉曼卡所言，即是真理。）那段时期建造的建筑，尤其是大学正门那座令人眼花缭乱的“青蛙立面”，就是这种知识自信与财富荣耀的石头宣言，它将银匠式风格的繁复雕刻推向了极致。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史总有起伏。18世纪，随着西班牙帝国的衰落和中央集权的加强，萨拉曼卡大学的重要性逐渐被马德里的新学术机构取代。它像一个步入暮年的贵族，依然保持着尊严，但已远离权力中心。建筑上留下了时代的印记：雄伟的巴洛克风格的新主教座堂紧挨着古老的罗曼式旧教堂修建，形成一种奇特的“双教堂”景观，仿佛凝固的时间断层。拿破仑战争期间，法国军队曾将大学图书馆用作马厩，许多珍贵手稿毁于一旦，这是城市心中一道永恒的伤疤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但知识的火种从未熄灭。19和20世纪，它更多地作为一所重要的地区性大学存在。直到今天，你依然能感受到它强劲的学术血脉。令人感动的是，城市并未将自己完全博物馆化。那些古老的学院建筑里，依然有教授在授课，有学生在自习。最古老的图书馆，书架上仍塞满了数百年前的羊皮卷和古籍，学生们可以在特定时间预约进去，在同样的长条木桌和鲸油灯（现在是电灯）下学习。这种连续性，让历史不再是橱窗里的展品，而是可以触摸、可以参与的现实。萨拉曼卡的石头不仅是金色的，更是有温度的，因为它一直被一代又一代年轻生命的呼吸所温暖。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你安排整整一天的时间来沉浸式体验萨拉曼卡。最好在一个晴朗的清晨（9点左右）抵达，这时游客尚未涌入，阳光斜射，金色砂岩的色彩最为柔和浓郁。从城市的灵魂——马约尔广场开始，让身心慢慢适应这座“黄金之城”的节奏。上午重点探索大学历史区的核心，需要专注和一点寻找的趣味。午后节奏可以放缓，参观宏伟的大教堂，并在老街巷中迷失，感受学生生活的气息。傍晚时分，一定要回到马约尔广场或罗马桥附近，见证落日将整座城市点燃成熔金的魔法时刻。这样的安排张弛有度，既能深入核心历史，又能捕捉到城市在不同光线下的多变表情。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免在学期开始的十月或考试季（五月至六月）的周末前往，那时学生人流巨大，住宿紧张。进入教堂和部分学院建筑，穿着需得体，避免过于暴露的背心或短裤。在广场附近用餐时，仔细核对账单，避开那些过分热情的“拉客”餐厅。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨的第一站留给被誉为“西班牙最美客厅”的马约尔广场，坐在拱廊下的咖啡馆，看阳光如何一寸寸点亮那些精雕细琢的立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后带着一丝寻宝的心情，走向大学正门，在眼花缭乱的银匠式浮雕中努力寻找那只传说中能带来好运和考试通过的小小青蛙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入大学历史建筑内部，在被誉为“天堂阶梯”的古老楼梯前驻足，想象几个世纪以来，多少伟大的思想家曾拾级而上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要踏入古老的大学图书馆，在幽静、充满陈旧书卷气的高大木书架间屏住呼吸，感受时间在此凝固的重量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从学术的静谧中走出，转身投入萨拉曼卡新旧大教堂的宏伟怀抱，尤其不要错过登上“伊埃罗塔”塔楼，将整片金色屋顶的海洋尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后随意钻进大学区周边迷宫般的窄巷，留意那些布满学生社团涂鸦的墙壁和热闹平价的小吃吧，点一杯咖啡融入当地的生活流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着托尔梅斯河散步，走到古老的罗马桥，从对岸回望夕阳下如同黄金雕塑群般的天际线，那是萨拉曼卡最经典的明信片视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`华灯初上时再次回到马约尔广场，看它如何从白日的庄严剧场转变为夜晚充满欢声笑语、流光溢彩的市民大沙龙。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大学正门（青蛙立面）的黄昏时刻`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，西斜的阳光会以极低的角度掠过立面，让每一个复杂的雕刻都产生长长的戏剧性阴影，金黄的砂岩会散发出火焰般的内蕴光芒，使用长焦镜头可以捕捉雕刻细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从罗马桥南岸远眺城市全景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后或日落前一小时，河面可能起薄雾，将相机置于三脚架上，使用广角镜头框住古老的石桥作为前景，对岸密布的金色教堂塔楼和宫殿屋顶作为中景，能拍出层次感极强的史诗画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`马约尔广场拱廊下的框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`白天任意时间，走进广场的任意一个拱廊通道，将相机对准通道出口，以外面的广场建筑和人群为画框中心的焦点，能拍出极具纵深感和故事感的对称构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`贝壳之家门廊的细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光能照亮门廊时，聚焦于这座奇特建筑立面上数以百计的贝壳浮雕，利用光影突出其独特的纹理和三维感，这是萨拉曼卡银匠式风格最直观的微观体现。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`新旧大教堂结合部的仰望视角`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光能照到教堂结合部时，躺在石地上（或用超广角镜头）向上拍摄，将旧教堂的罗曼式简朴拱顶与新教堂哥特式的华丽穹窿同时纳入镜头，形成震撼的时空对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`砂岩在正午的强光下容易反白失去细节质感，因此黄金时刻（日出后和日落前）是拍摄建筑外景的生命线。拍摄学生生活或市场场景时，请先微笑示意，尊重被摄对象，许多当地人很友好但也不喜欢被突兀地镜头对准。使用偏光镜可以有效增强蓝天与金色建筑的色彩对比。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在马约尔广场附近小巷里由古老宅邸改建的家庭旅馆，晚上听着广场隐约的乐声入睡，清晨被附近面包店的香气唤醒，老板会热情地给你手绘地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住一所前身是小型修道院的精品酒店，房间围绕宁静的罗马式回廊而建，保留了石拱和木梁，早餐在绿意盎然的内庭享用，寂静得能听到历史的心跳。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻托尔梅斯河畔一座18世纪的贵族宫殿改造的五星级酒店，房间天花板是珍贵的原始壁画，从私人露台可以无遮挡地欣赏到大教堂的尖顶和罗马桥的全景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`学生气息`}</h4>
                  <p className="text-sm text-purple-800">{`尝试大学区周边的现代化公寓式住宿，完全融入本地的社区，下楼就是热闹的学生酒吧和书店，体验一把“萨拉曼卡大学生”的日常。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季和重要节日）务必提前数月预订，尤其是广场周边的特色住宿。老城区大部分区域夜晚都很安全热闹，但选择极僻静小巷深处的住宿时，晚归需稍加留意。许多历史建筑的酒店房间格局可能不规则且楼梯陡峭，预订时如有特殊需求需提前沟通。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开萨拉曼卡许久后，那种独特的金色依然会不时在眼前晃动。但比颜色更持久的，是一种感觉。那是一种被深厚时间温柔包裹，却又不感到丝毫沉重的感觉。在这里，历史不是压在肩上的包袱，也不是仅供瞻仰的墓碑。它是教室窗外的风景，是咖啡馆里辩论的背景音，是年轻人在上面刻下新涂鸦的古老墙壁。萨拉曼卡让你相信，传统与活力、敬畏与亲近，完全可以共存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、知识越来越像快餐产品的时代，萨拉曼卡像一座永恒的灯塔。它提醒我们，真正的学问需要时间的沉淀，需要与美的环境共生，需要在日复一日的漫步、交谈甚至无所事事中孕育。它不仅仅是一个旅游目的地，更是一种生活态度的展示：如何优雅地承载辉煌的过去，又如何热情地拥抱每一个崭新的当下。每一位热爱深度游的旅人，都应该来感受一次这种“金色的平衡”。你会带走的不只是一张找到青蛙的照片，更是一份关于时间、知识与生命如何和谐共鸣的，宁静而有力的答案。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
