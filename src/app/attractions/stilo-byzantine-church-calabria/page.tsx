import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯蒂洛 Stilo｜探访意大利“靴尖”上俯瞰爱奥尼亚海的十世纪拜占庭红砖珍宝 - 最佳欧洲景点',
  description: '车子在卡拉布里亚连绵的绿色山丘间盘旋，空气里开始混杂着野生茴香、晒热的石头和远处爱奥尼亚海飘来的那一丝若有若无的咸腥。当斯蒂洛那一片蜜糖色的房子像从山体里自然生长出来一样，突然出现在眼前时，你会瞬间明白，什么叫作“屹立”。它不是建立在山上，它就是山的一部分。而你的目光，会不由自主地被更高处一个更小的',
}

export default function StiloByzantineChurchCalabriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '斯蒂洛（卡拉布里亚大区）', href: '/destinations/europe' },
            { label: '斯蒂洛', href: '/attractions/stilo-byzantine-church-calabria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯蒂洛・Stilo・意大利・斯蒂洛（卡拉布里亚大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在卡拉布里亚连绵的绿色山丘间盘旋，空气里开始混杂着野生茴香、晒热的石头和远处爱奥尼亚海飘来的那一丝若有若无的咸腥。当斯蒂洛那一片蜜糖色的房子像从山体里自然生长出来一样，突然出现在眼前时，你会瞬间明白，什么叫作“屹立”。它不是建立在山上，它就是山的一部分。而你的目光，会不由自主地被更高处一个更小的、赤红色的点所牵引——那就是卡托利卡，那座十世纪的小教堂，像一枚古老的印章，盖在这片土地的最高处。
停好车，你得开始用双脚丈量。通往老城的路是光滑的石头台阶，被几个世纪的脚步磨出了温润的光泽。两旁是紧闭的彩色木门，阳台上垂挂着怒放的天空葵，一只猫在阴影里打盹。耳边是绝对的宁静，只有你自己的呼吸声、风声，以及不知从哪扇窗里飘出的极微弱的歌剧咏叹调。这里没有游客的喧嚣，只有当地老人坐在门口，用你听不懂的当地方言缓缓交谈，朝你投来平静而好奇的一瞥。生活的节奏，在这里慢得像山涧渗出的水滴。
然后，你需要一点小小的跋涉，沿着一条更陡峭、更原始的小径向上，去赴那个与卡托利卡的约会。攀登的过程是一种剥离，远离了下面的生活气息，周围只剩下岩石、低矮的灌木和开阔得惊人的视野。当你喘着气，终于站在那五座红砖圆顶之下时，第一个感觉不是壮观，而是一种奇异的亲密。它那么小，那么朴实，没有大理石的华丽，只有烧制过的粘土在阳光下泛着温暖的红棕色。但当你用手触摸那些砖块粗糙的纹理，感受到千年阳光留在上面的温度，你会觉得，自己触碰到的不是建筑，而是一段凝固的、沉默的、却无比坚韧的时间。
推开那扇厚重的木门，光线骤然暗下，一股凉意夹杂着古老的尘土和蜡烛熄灭后的淡淡蜡油味将你包围。眼睛需要时间适应。然后，你会看到墙壁上斑驳的、几乎难以辨认的壁画残影，那是圣人的面孔，在昏暗的光线中若隐若现。圆顶的内部结构简单而有力。这里没有管风琴的轰鸣，没有彩窗的绚烂，只有近乎原始的寂静。你唯一能清晰听到的，是自己心跳的声音，以及穿过门洞传来的、来自下方整个爱奥尼亚海的、永恒不息的波涛声。在这一刻，建筑、信仰、自然和历史，达成了完美的和解。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在卡拉布里亚连绵的绿色山丘间盘旋，空气里开始混杂着野生茴香、晒热的石头和远处爱奥尼亚海飘来的那一丝若有若无的咸腥。当斯蒂洛那一片蜜糖色的房子像从山体里自然生长出来一样，突然出现在眼前时，你会瞬间明白，什么叫作“屹立”。它不是建立在山上，它就是山的一部分。而你的目光，会不由自主地被更高处一个更小的、赤红色的点所牵引——那就是卡托利卡，那座十世纪的小教堂，像一枚古老的印章，盖在这片土地的最高处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "停好车，你得开始用双脚丈量。通往老城的路是光滑的石头台阶，被几个世纪的脚步磨出了温润的光泽。两旁是紧闭的彩色木门，阳台上垂挂着怒放的天空葵，一只猫在阴影里打盹。耳边是绝对的宁静，只有你自己的呼吸声、风声，以及不知从哪扇窗里飘出的极微弱的歌剧咏叹调。这里没有游客的喧嚣，只有当地老人坐在门口，用你听不懂的当地方言缓缓交谈，朝你投来平静而好奇的一瞥。生活的节奏，在这里慢得像山涧渗出的水滴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，你需要一点小小的跋涉，沿着一条更陡峭、更原始的小径向上，去赴那个与卡托利卡的约会。攀登的过程是一种剥离，远离了下面的生活气息，周围只剩下岩石、低矮的灌木和开阔得惊人的视野。当你喘着气，终于站在那五座红砖圆顶之下时，第一个感觉不是壮观，而是一种奇异的亲密。它那么小，那么朴实，没有大理石的华丽，只有烧制过的粘土在阳光下泛着温暖的红棕色。但当你用手触摸那些砖块粗糙的纹理，感受到千年阳光留在上面的温度，你会觉得，自己触碰到的不是建筑，而是一段凝固的、沉默的、却无比坚韧的时间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "推开那扇厚重的木门，光线骤然暗下，一股凉意夹杂着古老的尘土和蜡烛熄灭后的淡淡蜡油味将你包围。眼睛需要时间适应。然后，你会看到墙壁上斑驳的、几乎难以辨认的壁画残影，那是圣人的面孔，在昏暗的光线中若隐若现。圆顶的内部结构简单而有力。这里没有管风琴的轰鸣，没有彩窗的绚烂，只有近乎原始的寂静。你唯一能清晰听到的，是自己心跳的声音，以及穿过门洞传来的、来自下方整个爱奥尼亚海的、永恒不息的波涛声。在这一刻，建筑、信仰、自然和历史，达成了完美的和解。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯蒂洛`} />
                <InfoRow label="英文名称" value={`Stilo`} />
                <InfoRow label="正式名称" value={`Stilo`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`斯蒂洛（卡拉布里亚大区）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`意大利南部保存最完好的拜占庭建筑典范之一，见证了拜占庭帝国在亚平宁半岛最后的辉煌与隐退。`} />
                <InfoRow label="建筑特色" value={`由红砖砌成的方形主体上矗立着五个醒目的圆顶，形如一组精巧的烛台，完美融入多石的半山腰景观。`} />
                <InfoRow label="建筑风格" value={`典型的拜占庭式十字方厅建筑，带有深刻的东方基督教艺术烙印。`} />
                <InfoRow label="文化价值" value={`一座活生生的建筑化石，浓缩了卡拉布里亚地区在希腊、拜占庭、诺曼等多种文明交织下的复杂历史层次。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`卡托利卡教堂内部开放时间较为灵活，通常为每日上午9:00至下午1:00，下午3:00至日落前（约晚上7:00，夏季会延长）。冬季（11月至3月）下午开放时间可能缩短或仅周末开放。老城区本身全天可自由漫步。强烈建议出行前查看当地旅游办公室的临时通知，或尝试联系教堂的看管人（常住在附近的居民）。`} />
              <InfoRow label="门票价格" value={`参观卡托利卡教堂通常免费，但欢迎自愿捐赠以支持维护。教堂门口有时会有看管人，可以给予几欧元的小费以示感谢，并能获得简单的讲解。`} />
              <InfoRow label="地址" value={`La Cattolica, 89049 Stilo RC, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是兰加机场（SUF），距离约120公里。从机场可租车自驾（最推荐，约1小时45分钟车程），沿A2/E45高速公路行驶，在“罗萨尔诺-斯蒂洛”出口下，随后驶入蜿蜒的山路SP1。最近的火车站是“Stilo Stazione”，位于山脚下，但班次稀少。从火车站到山上老城可搭乘稀少的本地巴士或预约出租车（约15分钟车程）。自驾是最佳选择，可以将车停在山城入口的免费停车场，然后步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解卡托利卡为何在此，得把时钟拨回一千多年前。那时的意大利南部，远非罗马的天下，而是一片文化交锋的“边疆”。公元九到十世纪，拜占庭帝国，也就是东罗马帝国，为了抵御撒拉森人（阿拉伯人）从西西里和北非不断发起的侵袭，重新巩固了在卡拉布里亚的统治。斯蒂洛这个易守难攻的山顶位置，自然成为了一个重要的军事和宗教前哨。卡托利卡教堂，很可能就是在这一时期，由来自东方的僧侣或工匠，也可能是当地的希腊裔社区，为了服务于驻军和居民的精神需求而建造的。它那鲜明的红砖圆顶造型，与君士坦丁堡或希腊的风格一脉相承，在这片地中海的山巅，竖起了一面拜占庭文化的旗帜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "接下来的几个世纪，故事变得复杂而动荡。十一世纪，诺曼人来了。这些来自北方的征服者像一阵风暴席卷了南意大利，他们击败了拜占庭人和阿拉伯人，建立了自己的王国。但有趣的是，诺曼人虽然是征服者，却常常是文化的吸收者。他们在西西里和南意留下了许多融合了诺曼、拜占庭和阿拉伯风格的惊世建筑。然而，偏居山巅的卡托利卡似乎躲过了大规模改造的命运。它可能被诺曼领主接纳，继续作为当地希腊礼天主教堂使用，在权力的更迭中保持着宗教功能的连续性。墙壁上那些模糊的壁画，或许就跨越了这两个时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正让它陷入漫长沉睡的，是命运的变迁和社区的萎缩。随着海岸线城镇的兴起和山城经济的衰落，斯蒂洛的人口逐渐减少。更大的主教座堂在更低处建成，这座山顶的小教堂便慢慢被边缘化，甚至一度被遗弃。它成了牧羊人避雨的地方，墙壁被烟火熏黑，精美的壁画在潮湿中剥落。几个世纪的风雨毫无遮挡地侵蚀着它的红砖。然而，正是这种“被遗忘”，某种程度上也保护了它。没有经历巴洛克时代的浮夸改建，没有在近代被过度“修复”，它就像一个被时间胶囊封存的样本，以最原始、最破损却也最真实的状态，等来了后世的目光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机发生在十九世纪末和二十世纪。随着考古学和历史保护意识的兴起，学者们重新发现了这颗蒙尘的明珠。人们开始意识到，这座其貌不扬的小教堂，是研究拜占庭建筑在西传播不可多得的活化石。它的平面是典型的希腊十字式，五个圆顶分别位于十字的中心和四臂，这种布局在意大利极其罕见。缓慢的修复工作开始了，目的是“稳住”它的现状，而不是将它焕然一新。清除 lateriz（砖块）上的寄生植物，加固结构，保护残余的壁画碎片。它不再是一个活跃的日常教堂，而是变成了一座纪念碑，一个象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当你站在卡托利卡面前，你看到的不仅仅是一座教堂。你看到的是拜占庭帝国在西欧最后的余光，是诺曼征服背景下文化的幸存，是山民社区信仰的古老载体，也是现代意大利对自身复杂历史层理的一份尊重。它没有米兰大教堂的雄伟，没有圣彼得大教堂的权势，但它有一种在时光碾压下幸存下来的、谦卑而骄傲的韧性。它见证了帝国的兴衰，听懂了祈祷与战吼，最终在与山海的对望中，找到了永恒的平静。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在清晨或傍晚进行这次探访，以避开正午的灼热阳光，并捕捉最柔和的光线。整体游览需要至少3-4小时，节奏务必放慢，因为攀登和感受是这里体验的核心。上午抵达可以享受老城的苏醒，下午晚些时候则能收获壮丽的日落和海景。路线将从山脚下的停车场开始，先浸润于老城的日常生活气息，然后进行一段轻徒步抵达教堂，最后在最高点沉浸于历史与风景，再悠然下山。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、防滑的徒步鞋或运动鞋，因为老城台阶和上山小径的石头非常光滑且不平整。
夏季一定要携带充足的水和防晒用品，山顶毫无遮挡，日照强烈，教堂附近也没有商店。
教堂的看管人可能不在，如果门锁着，可以稍等片刻或在附近转转，他可能就在不远处照料菜园，主动友好的问候是打开门锁的钥匙。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场出发，沿着Via Giuseppe Mazzini这条主街慢慢向上溜达，让两旁褪色的巴洛克门廊和晾晒着衣物的阳台带你进入山城的日常脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进那些看似死胡同的狭窄巷弄“vicoli”，抬头看看在两侧房屋间露出一线的蓝天，感受一下中世纪街道的原始尺度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城中心的小广场Piazza San Giovanni找个台阶坐下，看老人们玩牌，听他们用卡拉布里亚方言争论，仿佛时间在这里从未流逝。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场寻着指示牌，开始踏上通往卡托利卡教堂的最后一段原始山径，脚下的路会从石板变成泥土和碎石，准备好一场小小的探险。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在教堂前并不高大的围墙外，先别急着进去，转过身来，让整个爱奥尼亚海的蔚蓝画卷在你眼前磅礴展开，从西边的斯库拉角到东边的海湾尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开教堂那扇斑驳的木门，让眼睛在昏暗光线中适应几分钟，试着辨认后殿墙上那些几乎与岩石融为一体的千年壁画碎片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出教堂，坐在门外的岩石上，什么也不做，只是听着风声和海浪的白噪音，想象十世纪的僧侣也曾在此眺望，寻找来自东方的船只或烽烟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择另一条小径，或许会经过一片古老的橄榄树林，夕阳的金光穿过扭曲的枝干，为这次拜访画上一个宁静的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂东南侧远景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨太阳刚从海面升起时，从下山小径的一个拐弯处回望，可以拍到红色教堂笼罩在金色晨光中、背靠深蓝色大海与天空的经典全景，使用长焦压缩空间感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`红砖圆顶特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光从西侧较低角度照射，走到教堂北面仰拍，能突出五个圆顶的几何立体感和红砖温暖的质感，以天空为纯净背景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`门洞取景框`}</h4>
                  <p className="text-sm text-gray-700">{`站在教堂内部，透过低矮的罗马式门洞向外拍摄，将门洞作为画框，框住门外那片无垠的蔚蓝大海，形成强烈的明暗和色彩对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城蜿蜒巷弄`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，走进老城最窄的巷子，向上拍摄两侧房屋和一线天的光影对比，晾晒的衣物和窗台鲜花能增添生活气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`人与场景融合`}</h4>
                  <p className="text-sm text-gray-700">{`请同伴坐在教堂外墙的岩石上，背影面向大海，采用广角镜头拍摄，以渺小的人物衬托建筑的孤寂与山海的开阔，故事感极强。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部原则上允许拍照，但严禁使用闪光灯，微弱的光线本身就是历史氛围的一部分，请使用大光圈镜头或提高ISO。`}</li>
                <li>• {`尊重当地居民隐私，拍摄老人或居民生活场景前，最好先微笑示意并取得同意，他们通常很友善。`}</li>
                <li>• {`无人机飞行在历史遗迹上空可能有严格限制，起飞前务必查清当地法规，最好的风景其实用眼睛和心记录得更深刻。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山城石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在斯蒂洛老城由古老石屋改造的民宿里，夜晚能独占整个星空下的寂静山城，清晨在公鸡啼鸣和教堂钟声中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`海滨放松之选`}</h4>
                  <p className="text-sm text-green-800">{`住在山脚下约15分钟车程的滨海小镇如Pizzo或Monasterace，享受沙滩和海鲜大餐，白天再上山探索，体验山海双重的度假节奏。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`农庄体验`}</h4>
                  <p className="text-sm text-yellow-800">{`选择斯蒂洛周边丘陵间的“Agriturismo”（农家乐），住在家族经营的橄榄园或柑橘园里，品尝家酿葡萄酒和自制的卡拉布里亚辣酱，感受真正的乡村热情。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`省会城市便利`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求更多餐饮和夜生活选择，可以住在大区首府雷焦卡拉布里亚，沿壮观的海岸公路驾车约1小时抵达斯蒂洛，将探访融入一次更全面的卡拉布里亚西海岸之旅。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城民宿设施可能比较基础（但干净有特色），且需要爬不少台阶才能到达，预订前请确认自己对“原始感”的接受程度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）是卡拉布里亚的旅游旺季，滨海住宿紧俏且价高，而山城住宿相对清净，提前数月预订是明智之举。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多优质的农庄住宿需要自驾才能抵达，且路标可能不明显，提前与主人沟通好具体路线和抵达时间至关重要。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开斯蒂洛许久，我脑海里最清晰的，不是某张具体的照片，而是一种混合的感觉：掌心下红砖的粗糙温度，鼻腔里炽热岩石与百里香的气味，还有那片笼罩一切的、深邃的、流动的蓝。卡托利卡教堂没有试图告诉你任何宏大的道理，它只是在那里，静静地展示了“存在”本身可以多么有力量。在一个追求宏大、崭新和效率的世界里，它代表了一种相反的价值观：古老、微小、残缺，却因与土地和时间的深刻连接而不可动摇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我想，这就是深度旅行最珍贵的礼物吧。它带你去的，不只是一个地理坐标，而是一个时间的断层。在这里，你能同时触摸到十世纪僧侣的虔诚、中世纪山民的坚韧，和当下意大利南部那份慵懒而真实的生活哲学。斯蒂洛提醒我们，欧洲的底蕴远远超出那些闻名遐迩的大都市，在这些“靴尖”或“角落”里，藏着文明更原始、更本真的脉搏。它不是终点，而是一把钥匙，为你打开一扇门，通往一个更缓慢、更深刻、更值得细细品味的南意大利。如果你厌倦了人潮，渴望一次与历史、自然和自我的真实对话，那么，请专程来这个山巅，听这座小红砖教堂，对你诉说千年的沉默。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tarquinia-etruscan-necropolis" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔尔奎尼亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarquinia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cagliari-castello" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡利亚里城堡区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cagliari (Castello)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bergamo-citta-alta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔加莫上城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bergamo Città Alta</p>
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
