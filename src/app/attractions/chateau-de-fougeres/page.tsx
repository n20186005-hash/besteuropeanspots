import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '富热尔城堡 Château de Fougères｜探访欧洲最大中世纪要塞，走进石头史诗与布列塔尼的灵魂 - 最佳欧洲景点',
  description: '第一眼看到富热尔城堡，你可能会愣住，然后下意识地脱口而出：“这根本就是一座石头城市！”它不像那些精致秀美的湖畔城堡，而是以一种近乎蛮横的体量，盘踞在纳农河冲刷出的岩石峡谷之上。你的视线会不由自主地沿着那绵延超过两公里的巨大城墙游走，数着那一座座戴着头盔般圆锥顶的塔楼，它们沉默地刺向布列塔尼常有的铅灰...',
}

export default function ChateauDeFougeresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '富热尔（伊勒-维莱讷省）', href: '/destinations/france' },
            { label: '富热尔城堡', href: '/attractions/chateau-de-fougeres' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`富热尔城堡・Château de Fougères・法国・富热尔（伊勒-维莱讷省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到富热尔城堡，你可能会愣住，然后下意识地脱口而出：“这根本就是一座石头城市！”它不像那些精致秀美的湖畔城堡，而是以一种近乎蛮横的体量，盘踞在纳农河冲刷出的岩石峡谷之上。你的视线会不由自主地沿着那绵延超过两公里的巨大城墙游走，数着那一座座戴着头盔般圆锥顶的塔楼，它们沉默地刺向布列塔尼常有的铅灰色天空。空气中混合着青苔、潮湿岩石和远处面包店飘来的黄油香气——那是典型的布列塔尼味道。
走近它，你会听到两种声音的交响。一种是现代生活的背景音：城门下咖啡馆的杯碟轻碰，游客中心孩子们的法语嬉笑。另一种，则仿佛是从石头缝隙里渗出来的：风声穿过雄堞的呜咽，乌鸦在塔顶的啼叫，还有你想象中，铁匠铺里传来的打铁声和士兵沉重的脚步声。这座城堡从来不是远离人烟的孤傲存在，它的一侧紧挨着富热尔老城色彩柔和的中世纪木筋墙房屋，市民的日常生活就在它的臂弯里展开。当地人遛着狗从城墙根走过，就像经过一位再熟悉不过的沉默巨人。
而它最打动人心的魅力，在于那种无与伦比的“沉浸感”。当你穿过吊桥，步入第一道城门下的阴影时，时间仿佛瞬间被调慢了。脚下是几个世纪以来被马蹄和脚步打磨得光滑凹陷的石板路。你可以用手触摸那些巨大的燧石砌块，感受它们的冰冷与粗糙。站在内庭，被三面高耸入云的城墙合围，你才能真正体会到作为一个中世纪士兵或围城者的渺小与震撼。这里没有过多花哨的装饰，只有纯粹的功能、力量和生存的意志，每一块石头都在讲述着关于守卫、攻击和生存的故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到富热尔城堡，你可能会愣住，然后下意识地脱口而出：“这根本就是一座石头城市！”它不像那些精致秀美的湖畔城堡，而是以一种近乎蛮横的体量，盘踞在纳农河冲刷出的岩石峡谷之上。你的视线会不由自主地沿着那绵延超过两公里的巨大城墙游走，数着那一座座戴着头盔般圆锥顶的塔楼，它们沉默地刺向布列塔尼常有的铅灰色天空。空气中混合着青苔、潮湿岩石和远处面包店飘来的黄油香气——那是典型的布列塔尼味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近它，你会听到两种声音的交响。一种是现代生活的背景音：城门下咖啡馆的杯碟轻碰，游客中心孩子们的法语嬉笑。另一种，则仿佛是从石头缝隙里渗出来的：风声穿过雄堞的呜咽，乌鸦在塔顶的啼叫，还有你想象中，铁匠铺里传来的打铁声和士兵沉重的脚步声。这座城堡从来不是远离人烟的孤傲存在，它的一侧紧挨着富热尔老城色彩柔和的中世纪木筋墙房屋，市民的日常生活就在它的臂弯里展开。当地人遛着狗从城墙根走过，就像经过一位再熟悉不过的沉默巨人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动人心的魅力，在于那种无与伦比的“沉浸感”。当你穿过吊桥，步入第一道城门下的阴影时，时间仿佛瞬间被调慢了。脚下是几个世纪以来被马蹄和脚步打磨得光滑凹陷的石板路。你可以用手触摸那些巨大的燧石砌块，感受它们的冰冷与粗糙。站在内庭，被三面高耸入云的城墙合围，你才能真正体会到作为一个中世纪士兵或围城者的渺小与震撼。这里没有过多花哨的装饰，只有纯粹的功能、力量和生存的意志，每一块石头都在讲述着关于守卫、攻击和生存的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`富热尔城堡`} />
                <InfoRow label="英文名称" value={`Château de Fougères`} />
                <InfoRow label="正式名称" value={`Château de Fougères`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`富热尔（伊勒-维莱讷省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`布列塔尼公国边疆最重要的军事堡垒之一，也是欧洲现存规模最大、保存最完好的中世纪城堡之一，见证了英法百年战争和布列塔尼继承战争的烽火。`} />
                <InfoRow label="建筑特色" value={`一座由13座雄伟塔楼、3道巨大幕墙和深邃护城河构成的庞大防御体系，完美体现了中世纪军事建筑的顶峰智慧。`} />
                <InfoRow label="建筑风格" value={`以罗马式为基础，历经哥特式加固与改造的军事防御建筑典范。`} />
                <InfoRow label="文化价值" value={`它是活生生的中世纪战争教科书，也是布列塔尼地区独特身份与坚韧精神的石质象征。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`开放时间随季节变化。通常夏季（4月至9月）为9:30-19:00；冬季（10月至次年3月）开放时间缩短，大致为10:00-17:00。城堡内部博物馆和主塔的开放时间可能更短。请注意，每年1月会有数周闭馆进行年度维护。强烈建议出发前在其官方网站核实最新时刻表。`} />
              <InfoRow label="门票价格" value={`成人票约9欧元。优惠票（学生、10-17岁青少年）约7欧元。10岁以下儿童免费。家庭套票（2成人+2儿童）有优惠。提供包含语音导览器的门票选项（包含在基础票价内）。城堡庭院部分区域可免费进入。`} />
              <InfoRow label="地址" value={`Place Pierre Symon, 35300 Fougères, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是雷恩布列塔尼机场（Aéroport de Rennes Bretagne）。从机场驾车前往富热尔约需1小时。更便捷的方式是乘坐火车到达雷恩（Rennes）火车站（TGV高速列车可达），然后从雷恩火车站旁的公交总站（Gare Routière）乘坐TER地区巴士或Illenoo巴士公司的线路前往富热尔，车程约1小时15分钟，班次工作日较频繁，周末和节假日会减少，建议提前查询巴士时刻表并预留充足时间。若自驾，沿D177或D798公路可轻松抵达，城堡外有多个收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`富热尔城堡的故事，始于一片战略要地。早在11世纪，第一批领主就在这片俯瞰纳农河峡谷的岩石上，用木头建立了一个简易要塞，守护着布列塔尼公国与法国王国之间动荡的边境。它的命运第一次被彻底改写，是在1166年。当时统治英格兰和诺曼底的“短斗篷”亨利二世，为了惩罚反叛的布列塔尼男爵，挥师西进，将木制的城堡付之一炬。这次毁灭，却意外催生了它的新生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的主人，富热尔领主劳尔二世，从灰烬中站了起来，他决心建造一个再也不会被火焰吞噬的堡垒。于是，一座巨大的石头城堡开始拔地而起，最初的核心就是今天我们看到的那座敦实厚重的矩形主塔。接下来的一个世纪，是城堡疯狂“生长”的时期。布列塔尼的公爵们，尤其是皮埃尔·莫克莱尔公爵，意识到这里是抵御法国国王势力的关键盾牌。他们投入巨资，修建了第二道、第三道巍峨的城墙，挖深了护城河，增加了数座塔楼。城堡变成了一个俄罗斯套娃般的防御迷宫：进攻者即便突破了第一道城门，又会发现自己暴露在第二道城墙的箭雨之下，如此反复，绝望透顶。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正将城堡推向历史焦点的，是那场漫长的英法百年战争（1337-1453）。布列塔尼陷入了残酷的继承战争，英法双方都在这里角力。富热尔城堡因其坚不可摧的名声，成为了各方都想夺取的棋子。它数次易主，城墙在一次次的围攻中被加固、加高。你可以想象那个时代的场景：城墙外是投石机的轰鸣和攻城的呐喊，城墙内是士兵奔跑的嘈杂和铁匠日夜赶制箭簇的火光。城堡不仅是一座建筑，更是一个在战火中自我演化的生命体，每一块新增的石头都是对上一次攻击的回应。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争结束后，城堡的军事用途逐渐消退。它幸运地被拥有“法国最富凡人”之称的拉特雷穆瓦耶家族获得。这个家族没有将它拆毁，而是将其改造为一座更适宜居住的行政官邸。他们在城堡内增添了带有大窗户的文艺复兴风格厢房，引入了当时时尚的装饰元素。城堡从纯粹的战争机器，转变为了权力与财富的展示场。然而，当这个家族在18世纪衰落后，城堡再次被遗忘，一度沦为采石场和贫困居民的避难所，任其荒芜。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到19世纪，浪漫主义的风潮吹醒了人们对中世纪遗迹的热爱。富热尔城堡作为“废墟之美”的典范，吸引了画家和诗人的目光。在公众呼吁下，它于19世纪末被法国政府列为历史古迹，并开始了漫长而审慎的修复工程。今天的我们能够漫步在这座完整的史诗中，不仅要感谢那些建造它的公爵和领主，更要感谢那些在和平年代，小心翼翼地拂去它身上尘埃的修复者们。他们让这座石头的巨兽，得以继续讲述它跨越千年的传奇。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正领略这座庞大城堡的精髓，我强烈建议你留出至少4-5小时的完整时间。最佳的抵达时间是早上开门后不久，此时光线柔和，游客较少，你能独占那些最上镜的角落，静静感受城堡苏醒的氛围。游览节奏应该张弛有度：先从外部整体把握它的气势，再深入内部细节探索，最后登高望远，将一切收于眼底。这样的安排能让你如同阅读一本好书，从封面、序章逐步进入高潮，最终获得圆满的感悟。记得穿一双绝对舒适、适合走石头路的鞋子，因为你的每一步都在丈量历史。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`塔楼的螺旋石阶非常陡峭且狭窄，上下时务必抓紧扶手，雨天尤其湿滑要格外小心。城堡内部不少区域较为阴冷，即使夏季也建议带一件薄外套。语音导览器内容非常丰富，强烈建议租用，它能将沉默的石头变成会说话的故事书。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡东南侧的现代公园（Jardin Public）开始远观，那里是拍摄城堡全景与水中倒影的绝佳起点，看它如何雄踞于岩石之上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过老城蜿蜒的鹅卵石街道，来到城堡正门（Porte Notre-Dame）前，仰头感受那道需要费力抬首才能望到顶的巍峨城墙所带来的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过吱呀作响的木质吊桥（现代复原），进入第一重庭院（Basse Cour），立刻被开阔的空间和环绕四周的高墙所震撼，这里曾是驻扎军队和安置马厩的地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着指引登上第二道城墙的步道（Chemin de Ronde），沿着中世纪哨兵巡逻的路线行走，从射击孔和垛口窥视外面的世界，视角独特。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`深入城堡的核心——阴凉而坚固的矩形主塔（Le Donjon），在它的多层空间里了解中世纪城堡的生活、防御和酷刑展示。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观拉特雷穆瓦耶家族增建的文艺复兴风格厢房，感受从冷峻军事堡垒向奢华居所转变的历史痕迹，留意那些华丽的壁炉和窗户。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要攀上梅兰塔（Tour Mélusine）或拉埃塔（Tour Raoul）的螺旋石阶，在塔顶的观景台迎风而立，将富热尔老城的红色屋顶和远处布列塔尼的绿色田野尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到城堡脚下的老城区，找一家可丽饼店坐下，点一份带苹果酒的传统荞麦可丽饼，让味蕾也沉浸在这趟中世纪之旅的余韵中。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`公园池塘倒影点`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，位于城堡东南的公共公园池塘边，利用静止的水面拍摄城堡塔楼与城墙的完美对称倒影，构图时让水面占据一半。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`第一道城墙仰拍点`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，站在第一重庭院内，使用广角镜头仰拍高耸的Porte Notre-Dame门楼与天空，能极致展现城墙的压迫感和建筑的几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城墙步道框架构图点`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光西斜时，在第二道城墙的步行道上，透过一个狭长的射击孔或门洞框架式拍摄内庭、主塔或远处的老城房屋，增加照片的纵深感和故事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔楼顶俯瞰全景点`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗日子的任何时间，在梅兰塔的顶部，环绕拍摄360度的全景，将城堡错综复杂的内部结构、红色屋顶的老城与无垠的乡村风光一并收纳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在城堡上空通常是被严格禁止的，请务必遵守规定。室内展览区域一般不允许使用闪光灯和三脚架，以保护古老的展品。布列塔尼天气多变，善于利用戏剧性的云层和偶尔穿透的光柱，能为你的城堡照片增添史诗氛围。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城故事`}</h4>
                  <p className="text-sm text-blue-800">{`入住城墙脚下由16世纪老屋改造的精品酒店，木头横梁、石墙和复古浴缸俱全，晚上能听到从城堡方向传来的隐约风声，故事感满分。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`田园牧歌`}</h4>
                  <p className="text-sm text-green-800">{`选择位于城堡外围乡村的独立石头农庄民宿，主人会为你准备地道家常晚餐，在开满鲜花的院子里早餐，远眺城堡剪影，享受宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`尝试预订城堡附近一栋真正的中世纪贵族府邸改造的奢华套房，体验四柱床、古董家具和私人花园，将穿越进行到底。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`住在富热尔镇中心广场旁的现代舒适型酒店，步行至城堡仅需5分钟，周围餐馆商店林立，适合追求便利的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和节假日期间富热尔非常受欢迎，务必提前数月预订心仪的特色住宿。老城区的酒店虽有情调，但停车位可能紧张，预订时需确认停车安排。这里的夜晚安全宁静，饭后在静谧的古老街巷散步是极大的享受。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开富热尔城堡很久以后，我发现自己最常回味的，不是某座具体的塔楼，而是那种被巨大历史实体包裹的“感觉”。在这个一切都被加速、被数字化的时代，它像一块坚定不移的压舱石。当你站在它的阴影下，触摸着那些历经无数春夏秋冬、战争与和平的冰冷石块时，你会突然意识到人类的忧虑、忙碌在千年尺度下是何其短暂。它让你慢下来，不仅是用脚步，更是用心跳的节奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位自称热爱深度游的旅人，都应该来这里看看。它不仅仅是一个景点，更是一次对“坚韧”的实地教学。它告诉我们，美可以来自纯粹的力量，历史可以如此触手可及地沉重与真实。在富热尔，你读到的不是教科书上干巴巴的日期，而是一部用石头写就的、关于生存、权力、变迁与永恒的磅礴史诗。来到这里，你会带走满心的震撼，以及对布列塔尼那片土地更深沉的理解。这趟旅程，注定会烙印在你的记忆里，如同城堡的轮廓烙印在地平线上一样深刻。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cordes-sur-ciel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔德叙谢勒</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cordes-sur-Ciel</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/place-vendome" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺多姆广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Vendôme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-meung-sur-loire" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Meung-sur-L-Loire</p>
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
