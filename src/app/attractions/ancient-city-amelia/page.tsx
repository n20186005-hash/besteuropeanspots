import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿梅利亚古城 The Ancient City of Amelia｜漫步在伊特鲁里亚与中世纪叠印的时光天梯 - 最佳欧洲景点',
  description: '当你的车绕过最后一道山弯，那座灰白色的城池如同从橄榄树林和葡萄园覆盖的翁布里亚丘陵中自然生长出来的巨大石雕，猝不及防地撞进视野。第一印象不是精致，而是浑厚，一种历经三千多年风吹雨打后沉淀下来的、沉默的坚硬。空气里有干草、暖石和被烈日烤过的泥土混合的香气，远处教堂的钟声懒洋洋地荡过来，又被厚厚的城墙吸...',
}

export default function AncientCityAmeliaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '阿梅利亚古城', href: '/attractions/ancient-city-amelia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿梅利亚古城・The Ancient City of Amelia・意大利・阿梅利亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你的车绕过最后一道山弯，那座灰白色的城池如同从橄榄树林和葡萄园覆盖的翁布里亚丘陵中自然生长出来的巨大石雕，猝不及防地撞进视野。第一印象不是精致，而是浑厚，一种历经三千多年风吹雨打后沉淀下来的、沉默的坚硬。空气里有干草、暖石和被烈日烤过的泥土混合的香气，远处教堂的钟声懒洋洋地荡过来，又被厚厚的城墙吸收了一半音量。
把车停在城门外，走上那条被无数脚步磨得中心凹陷的斜坡引桥，你才算真正开始接触阿梅利亚。指尖划过入口处那些巨大的、形状不规则的花岗岩巨石，这是伊特鲁里亚人公元前六世纪留下的“基座”。触感冰凉而粗粝，缝隙里长着顽强的青苔。穿过罗马时代的拱门，你便跌入了另一个时空。脚下是鹅卵石铺就的“主路”，其实窄得只容两人错身。光影是这里的主角：上午的阳光斜切进巷道，把古老的赭石色墙壁照得一片金黄，铁艺阳台上的天竺葵红得发亮；到了下午，阴影拉长，街道变成了一条条凉爽的、幽深的峡谷，只有头顶一线天光。
这里不是一个被博物馆化的空壳。阳台上晾晒的床单在微风里飘荡，拐角处传来老妇人用当地方言聊天的细碎声音，空气中偶尔飘来炖肉和新鲜罗勒的香味。你路过一个幽暗的门洞，瞥见里面庭院中停着一辆菲亚特500，紧挨着一口可能有千年历史的水井。这种奇妙的混杂感正是阿梅利亚最迷人的地方——历史不是被封存的标本，而是像老房子的墙皮，一层覆盖一层，至今仍在呼吸。当地人平静地生活在巨大的历史遗迹之中，这种日常的魔幻现实主义，比任何恢弘的宫殿都更打动人心。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你的车绕过最后一道山弯，那座灰白色的城池如同从橄榄树林和葡萄园覆盖的翁布里亚丘陵中自然生长出来的巨大石雕，猝不及防地撞进视野。第一印象不是精致，而是浑厚，一种历经三千多年风吹雨打后沉淀下来的、沉默的坚硬。空气里有干草、暖石和被烈日烤过的泥土混合的香气，远处教堂的钟声懒洋洋地荡过来，又被厚厚的城墙吸收了一半音量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在城门外，走上那条被无数脚步磨得中心凹陷的斜坡引桥，你才算真正开始接触阿梅利亚。指尖划过入口处那些巨大的、形状不规则的花岗岩巨石，这是伊特鲁里亚人公元前六世纪留下的“基座”。触感冰凉而粗粝，缝隙里长着顽强的青苔。穿过罗马时代的拱门，你便跌入了另一个时空。脚下是鹅卵石铺就的“主路”，其实窄得只容两人错身。光影是这里的主角：上午的阳光斜切进巷道，把古老的赭石色墙壁照得一片金黄，铁艺阳台上的天竺葵红得发亮；到了下午，阴影拉长，街道变成了一条条凉爽的、幽深的峡谷，只有头顶一线天光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是一个被博物馆化的空壳。阳台上晾晒的床单在微风里飘荡，拐角处传来老妇人用当地方言聊天的细碎声音，空气中偶尔飘来炖肉和新鲜罗勒的香味。你路过一个幽暗的门洞，瞥见里面庭院中停着一辆菲亚特500，紧挨着一口可能有千年历史的水井。这种奇妙的混杂感正是阿梅利亚最迷人的地方——历史不是被封存的标本，而是像老房子的墙皮，一层覆盖一层，至今仍在呼吸。当地人平静地生活在巨大的历史遗迹之中，这种日常的魔幻现实主义，比任何恢弘的宫殿都更打动人心。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿梅利亚古城`} />
                <InfoRow label="英文名称" value={`The Ancient City of Amelia`} />
                <InfoRow label="正式名称" value={`Città di Amelia`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`阿梅利亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座自公元前十世纪便屹立于此，历经伊特鲁里亚文明、罗马帝国、中世纪城邦风云，至今仍充满生活气息的活态历史丰碑。`} />
                <InfoRow label="建筑特色" value={`标志性的多边形巨石城墙奠定了古城的千年基座，其上是层层叠叠、由狭窄拱门、石阶与中世纪塔楼编织而成的立体迷宫。`} />
                <InfoRow label="建筑风格" value={`伊特鲁里亚文明的原始巨石工艺、罗马帝国时期的工程遗迹与中世纪罗马式、哥特式建筑不可思议地交融共生。`} />
                <InfoRow label="文化价值" value={`它是理解意大利中部“慢历史”演进的绝佳切片，展示了文明如何在不摧毁前朝遗产的基础上，像植物生长般自然叠加。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天开放，城墙及街道可自由漫步。主要历史景点如考古博物馆、大教堂、市政宫殿等开放时间一般为周二至周日，夏季（4月至10月）上午9:30至下午1:00，下午3:30至晚上7:00；冬季（11月至3月）开放时间可能缩短，通常下午至4:30或5:00。周一普遍闭馆。重要宗教节日（如圣诞节、复活节）及部分当地节日（如8月的Palio dei Colombi赛马节）期间开放时间会有变动，建议行前在市政官网二次确认。`} />
              <InfoRow label="门票价格" value={`进入古城区域免费。各独立景点收费不同：考古博物馆（Museo Archeologico）门票约5欧元；圣费尔米纳大教堂（Cattedrale di Santa Fermina）免费参观，但地下罗马蓄水池（Cisterne Romane）参观约3欧元；市政宫殿（Palazzo Comunale）部分展厅可能免费或收取少量捐赠费用。通常有针对学生、65岁以上老人及家庭的优惠票或套票。部分宗教节日期间所有教堂免费。`} />
              <InfoRow label="地址" value={`Piazza Matteotti, 05022 Amelia TR, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是罗马菲乌米奇诺机场（FCO）。从罗马Termini火车站乘坐区域火车前往奥尔泰（Orte）站，车程约45分钟至1小时，班次频繁。在奥尔泰站换乘前往阿梅利亚的Cotral巴士，车程约30分钟，但巴士班次有限，通常每小时或每两小时一班，务必提前查好时刻表。最灵活的方式是从罗马或奥尔泰租车自驾，沿SS205公路向北行驶，从古城山下有清晰路标指向历史中心，但古城内为ZTL限行区，需将车停放在城外的指定停车场（如Piazza XXI Settembre），然后步行进入。自驾全程约1.5小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂阿梅利亚的石头诉说的故事，你得把时间轴拉到公元前十世纪甚至更早。第一批在此定居的是翁布里亚人，但真正奠定这座城市不朽基业的是神秘的伊特鲁里亚人。这些技艺精湛的工程师和商人，选择了这座易守难攻的山丘，并用他们特有的巨型多边形石块，垒起了最初的城市围墙。今天你看到的那段最令人震撼的城墙基部，就是他们留下的“名片”。这些石头未经雕琢，却严丝合缝地咬合在一起，不用任何粘合剂，仅凭重力就抵御了三千多年的岁月。关于他们为何消失，依然是历史谜团，但石墙留了下来，成为后来所有文明的起点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马人的到来没有意味着摧毁。他们是务实的建设者和继承者。公元前三世纪，阿梅利亚成为罗马联盟城市。罗马人扩建了城市，修建了引水渠、广场（今天的马泰奥蒂广场雏形）、剧院和庞大的地下蓄水池系统。最令人惊叹的是这些蓄水池，它们利用天然岩洞修造，由一系列拱顶房间组成，像一座倒置的地下宫殿，至今仍可通过大教堂的地板入口进入。黑暗中，你能触摸到光滑的防水灰泥墙面，听到水滴从拱顶落入水面的空灵回响。想象一下，两千年前，这套系统滋养着整个山巅之城。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`蛮族入侵的浪潮和西罗马帝国的崩溃让阿梅利亚进入了动荡而坚韧的中世纪。它成了教皇国统治下的一个自治城邦，这段时期赋予了古城今天我们看到的大部分肌理。为了防御，城市向山顶收缩，街道变得更加狭窄曲折，一座座家族塔楼拔地而起，贵族们在有限的土地上竞相建造显示权势的宫殿。圣费尔米纳大教堂在几次地震和重建中，融入了罗马式和哥特式的元素。广场成为市民生活的中心。这个时期，阿梅利亚像一只缩进坚硬外壳的蜗牛，在外部的战乱中守护着内部蓬勃的社区生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十七世纪一场灾难性的地震几乎将城市夷为平地。但阿梅利亚人展现出了惊人的韧性。他们没有抛弃祖先的土地，而是用巴洛克的美学进行了重建和装饰。许多中世纪宫殿的外立面被加上华丽的门窗和浮雕，内部则装饰着湿壁画和灰泥雕塑。这次重建不是断裂，而是覆盖，就像给一件朴素的旧衣绣上了精美的花纹。随后的几个世纪相对平静，古城渐渐沉睡在翁布里亚的丘陵之中，躲过了大规模工业化改造，这才意外地将这份层次分明的历史“地层”完整地保存到了今天，等待有心的旅人来阅读这部石刻的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（至少8小时）来沉浸式体验阿梅利亚。最佳抵达时间是清晨9点前，这时旅游巴士还未到达，阳光温柔，本地居民刚开始一天的活动，古城最为宁静本真。游览节奏宜慢不宜快，因为这里的魅力在于细节和氛围，而非打卡点数。整体路线是一个螺旋上升的过程：从外围的古老城墙开始，逐步深入迷宫般的街巷，探访核心的公共空间，最后抵达城市的制高点，完成一次从历史基座到生活巅峰的完整穿越。中午可以在广场旁的餐馆慢享午餐，下午则留给自己迷路和发现惊喜的时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`古城内几乎所有街道都是凹凸不平的鹅卵石路面和陡峭台阶，务必穿一双绝对舒适防滑的步行鞋，高跟鞋在这里是“灾难性”选择。
很多小型教堂和私人宫殿外观朴素甚至门扉紧闭，但试着轻轻推动厚重的木门，里面往往藏着一个布满壁画的中庭或一座精美的小礼拜堂，保持礼貌的探索精神会有惊喜。
不要完全依赖手机地图，小巷错综复杂且信号可能不佳，享受迷路的乐趣是体验的一部分，大不了多问路，当地人通常非常友善。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从气势恢宏的伊特鲁里亚多边形巨石城墙开始你的朝圣，亲手触摸那些冰凉的、超过两千五百岁的巨大石块，感受最原始的防御力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过罗马时代的城门拱洞，立刻让自己迷失在由“Costa”和“Via”命名的、挂满藤蔓与鲜花的幽深中世纪小巷里，不设目的地，只用感官去探索。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在铺着鹅卵石的马泰奥蒂广场停下来，坐在露天咖啡馆的椅子上，看市政宫殿的钟楼投下移动的影子，观察当地老人如何度过一个闲适的上午。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进略显昏暗的圣费尔米纳大教堂，让眼睛适应光线后去寻找那些珍贵的艺术品，然后沿着狭窄的阶梯下降到令人屏息的古罗马地下蓄水池，体验地心深处的寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访位于前圣弗朗切斯科教堂内的考古博物馆，那里陈列着从青铜时代到罗马时期的珍宝，尤其是那尊举世闻名的青铜雕像“战神”，近距离感受古人的精湛技艺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的上坡路向城市的最高点进发，穿过古老的街区，最终抵达城市边缘的观景平台，将整个翁布里亚连绵起伏的绿色丘陵尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前选择一条与上山时完全不同的小径往回走，你会发现下午的光线为每面墙壁都涂上了蜂蜜般的色泽，而一些白天关闭的优雅庭院大门此刻可能正虚掩着。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐前再次路过主广场，此时的氛围已从午后的慵懒转变为黄昏前的社交热闹，不妨加入当地人的“散步仪式”（Passeggiata），感受古城真正的心跳。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`伊特鲁里亚城墙仰角`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出巨型石块的纹理和厚重体量，站在城墙根下向上仰拍，将一部分天空和墙头的绿植纳入构图，展现其亘古的威严。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从市政宫殿拱门看广场`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，阳光以低角度穿过拱门，在广场鹅卵石上拉出长长的光影，以此为框架拍摄广场上的人物剪影和钟楼，故事感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`小巷光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光垂直洒入最窄的巷道，寻找那些被光线完全照亮的一小段路面或一面墙，而周围处于深暗阴影中，形成强烈的明暗对比构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`古城至高点全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时抵达城市西侧的观景平台，使用广角镜头，将前景的古老屋顶、中景的教堂钟楼和远景无限延伸的翁布里亚丘陵一同收纳，色彩层次最为丰富。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`地下蓄水池的神秘倒影`}</h4>
                  <p className="text-sm text-gray-700">{`参观罗马蓄水池时，如果有积水，将相机贴近水面拍摄拱顶石柱的倒影，利用手机或手电筒补光制造幽暗的光晕，营造神秘的地下世界氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，拍摄阳台或门窗内的景象前最好征得同意，许多庭院是私人住宅。使用无人机在意大利历史中心区通常受到严格管制甚至禁止，放飞前务必查清当地法规。室内博物馆和教堂内通常禁止使用闪光灯和三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋由中世纪石屋改造的公寓，厚重的墙壁带来夏日的清凉，早晨会被隔壁面包房飘来的香味和教堂的晨钟叫醒，仿佛成为古城暂时的居民。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`乡村农庄慢生活`}</h4>
                  <p className="text-sm text-green-800">{`选择距离古城几分钟车程、坐落在橄榄园中的家庭式农庄（Agriturismo），享受由自家食材烹制的晚餐，在星空下的泳池边回味白天的探险，体验真正的托斯卡纳-翁布里亚乡村风情。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`精品酒店艺术居所`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻由十六世纪贵族宫殿修复而成的精品酒店，房间保留了原始的壁画天花板和石砌壁炉，在酒店的露台花园享用早餐时，能俯瞰一片红色的屋顶和远方的山谷。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感现代休憩站`}</h4>
                  <p className="text-sm text-purple-800">{`对于追求现代舒适度的旅行者，古城入口处有设计简约的现代酒店，空间明亮开阔，是探索一天后完美的放松基地，且停车方便，免去拖行李爬坡的烦恼。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`预订历史中心内的住宿时，务必确认酒店是否提供停车许可或代客停车服务，因为自己开车进入ZTL限行区会面临高额罚款。古城夜晚非常安全宁静，但街道照明较暗，建议随身带个小手电。旺季（5-6月，9-10月）住宿紧张，至少提前两个月预订为宜。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿梅利亚的时候，你带走的可能不是某件具体纪念品的图像，而是一种关于时间质感的体验。这座城市教会你的，是历史并非线性前进的单行道，而是一座可以居住的、立体的迷宫。伊特鲁里亚的石头、罗马的地下水宫、中世纪的塔楼、巴洛克的装饰，它们没有互相取代，而是彼此支撑、相互依存，共同构成了今天这个活生生的社区。这种文明的“增生”方式，温柔而坚定，充满了生命的智慧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在一切都追求崭新和效率的当下，阿梅利亚像一位沉静的长者，它不慌张，不炫耀，只是安然地坐在山丘上，日复一日。它提醒我们，真正的永恒不在于固守原状，而在于一种包容变化的韧性。每一位热爱深度游的旅人，都应该来此住上几日，不是为了收集又一个“世界遗产”的图章，而是为了让自己的脚步慢下来，亲手触摸一下时间的“地层”，感受那种在古老石头上晒太阳的、简单的幸福。在这里，你会明白，有些地方，存在的意义就是为了让我们重新学会如何“生活”，而不仅仅是“经过”。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
