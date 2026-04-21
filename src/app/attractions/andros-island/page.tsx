import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '安德罗斯岛 Andros｜颠覆你对希腊海岛所有想象的绿色水世界与奢华遗产 - 最佳欧洲景点',
  description: '当你从渡轮上第一眼看到安德罗斯时，一定会怀疑自己是不是走错了片场。这里没有印象中爱琴海小岛那种灼人的炽白与干渴，取而代之的是一种丰腴的、油润的绿色。山峦线条柔和，覆盖着茂密的橄榄树、松柏和无花果树，空气里海风不是咸腥的，而是混合着青草、湿润泥土和某种淡淡花香。这就是安德罗斯给你的第一个颠覆：它是一座',
}

export default function AndrosIslandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '安德罗斯岛', href: '/attractions/andros-island' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`安德罗斯岛・Andros・希腊・霍拉 (Chora)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从渡轮上第一眼看到安德罗斯时，一定会怀疑自己是不是走错了片场。这里没有印象中爱琴海小岛那种灼人的炽白与干渴，取而代之的是一种丰腴的、油润的绿色。山峦线条柔和，覆盖着茂密的橄榄树、松柏和无花果树，空气里海风不是咸腥的，而是混合着青草、湿润泥土和某种淡淡花香。这就是安德罗斯给你的第一个颠覆：它是一座会“呼吸”、充满了水脉的岛屿。地下泉水在这里不是稀缺资源，而是慷慨流淌的生命线。
沿着任何一条向内陆延伸的峡谷小路走，你很快就会与它的第二种颠覆相遇。潺潺水声会引导你发现那些隐藏在绿荫中的巨大石砌建筑废墟——古老的水磨坊。它们可不是一两座点缀，而是成群结队，像沉睡的石头巨人，盘踞在溪流之上。粗粝的墙壁爬满青苔，巨大的水轮早已静止，但水流依旧从石槽中欢快奔涌。站在这里，你能触摸到一种截然不同的海岛生存逻辑：不是向贫瘠的大海和烈日妥协，而是凭借智慧驯服了地下的甘泉，建立起一套自给自足、甚至能输出财富的“水经济”体系。
然而，当你来到首府霍拉，画风又会经历第三次，也是最华丽的一次转变。狭窄的基克拉泽斯式小巷突然引向开阔的、用大理石铺就的步行广场“凯里广场”。广场一侧，爱琴海以无与伦比的湛蓝作为舞台背景，另一侧，则矗立着一排排犹如雅典学院般庄重典雅的新古典主义豪宅。这些建筑有着高大的罗马柱、精美的浮雕、宽敞的阳台和气派的大门。它们不是王宫，而是19世纪至20世纪安德罗斯船东们的宅邸。在这里，你能感受到财富带来的不是浮夸，而是一种对知识与美的崇高敬意，因为许多豪宅如今已被捐作博物馆和图书馆。
这就是安德罗斯最打动人心的魅力：它层次太丰富了。一天之内，你可以在峡谷里触摸千年农耕文明的遗迹，在霍拉的豪宅画廊里欣赏毕加索的原作，然后在某个只有海浪声的卵石海湾独自游泳。它安静、自信，毫不费力地将自然之灵、历史之重与现代之雅编织在一起，完全颠覆你对一个希腊海岛的所有预设。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你从渡轮上第一眼看到安德罗斯时，一定会怀疑自己是不是走错了片场。这里没有印象中爱琴海小岛那种灼人的炽白与干渴，取而代之的是一种丰腴的、油润的绿色。山峦线条柔和，覆盖着茂密的橄榄树、松柏和无花果树，空气里海风不是咸腥的，而是混合着青草、湿润泥土和某种淡淡花香。这就是安德罗斯给你的第一个颠覆：它是一座会“呼吸”、充满了水脉的岛屿。地下泉水在这里不是稀缺资源，而是慷慨流淌的生命线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沿着任何一条向内陆延伸的峡谷小路走，你很快就会与它的第二种颠覆相遇。潺潺水声会引导你发现那些隐藏在绿荫中的巨大石砌建筑废墟——古老的水磨坊。它们可不是一两座点缀，而是成群结队，像沉睡的石头巨人，盘踞在溪流之上。粗粝的墙壁爬满青苔，巨大的水轮早已静止，但水流依旧从石槽中欢快奔涌。站在这里，你能触摸到一种截然不同的海岛生存逻辑：不是向贫瘠的大海和烈日妥协，而是凭借智慧驯服了地下的甘泉，建立起一套自给自足、甚至能输出财富的“水经济”体系。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，当你来到首府霍拉，画风又会经历第三次，也是最华丽的一次转变。狭窄的基克拉泽斯式小巷突然引向开阔的、用大理石铺就的步行广场“凯里广场”。广场一侧，爱琴海以无与伦比的湛蓝作为舞台背景，另一侧，则矗立着一排排犹如雅典学院般庄重典雅的新古典主义豪宅。这些建筑有着高大的罗马柱、精美的浮雕、宽敞的阳台和气派的大门。它们不是王宫，而是19世纪至20世纪安德罗斯船东们的宅邸。在这里，你能感受到财富带来的不是浮夸，而是一种对知识与美的崇高敬意，因为许多豪宅如今已被捐作博物馆和图书馆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是安德罗斯最打动人心的魅力：它层次太丰富了。一天之内，你可以在峡谷里触摸千年农耕文明的遗迹，在霍拉的豪宅画廊里欣赏毕加索的原作，然后在某个只有海浪声的卵石海湾独自游泳。它安静、自信，毫不费力地将自然之灵、历史之重与现代之雅编织在一起，完全颠覆你对一个希腊海岛的所有预设。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`安德罗斯岛`} />
                <InfoRow label="英文名称" value={`Andros`} />
                <InfoRow label="正式名称" value={`Andros`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`霍拉 (Chora)`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`基克拉泽斯群岛中一个颠覆性的“异类”，凭借丰沛的泉水成为爱琴海重要的航运与文化中心，其近代船东财富塑造了独一无二的海岛奢华面貌。`} />
                <InfoRow label="建筑特色" value={`两种极致对比的共存：遍布内陆峡谷、以粗糙石材垒砌的古老水磨坊工业废墟群，与沿海城镇中精致典雅、气势恢宏的新古典主义船东豪宅。`} />
                <InfoRow label="建筑风格" value={`核心建筑语言是简约的基克拉泽斯风与庄严的新古典主义的奇妙融合，并点缀着威尼斯统治时期的防御元素。`} />
                <InfoRow label="文化价值" value={`一部“水”书写的岛屿史诗，从古老的生存智慧到近代的海洋商业传奇，再到当代的艺术慈善，展现了希腊文明中坚韧、智慧与慷慨的多重维度。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`岛屿本身全天开放。主要景点如当代艺术博物馆、考古博物馆等开放时间通常为夏季（5月至10月）上午9:00至下午4:00，冬季时间缩短或需提前预约。许多水磨坊遗址散落乡间，可自由探访，但部分私人豪宅内部仅在特定文化节或提前申请下开放。`} />
              <InfoRow label="门票价格" value={`岛屿无门票。主要博物馆门票约3-6欧元。进入大多数自然区域和探访外部建筑遗迹免费。部分由古兰德里斯基金会运营的文化场所可能收取象征性费用或有捐赠建议。`} />
              <InfoRow label="地址" value={`Andros Island, 845 00, South Aegean, Greece （参考点：霍拉中心广场）`} />
              <InfoRow label="交通方式" value={`从雅典出发是主流选择。从雅典国际机场（ATH）打车或地铁至拉菲娜港（Rafina），车程约40分钟。从拉菲娜港搭乘渡轮前往安德罗斯岛的主要港口加夫里翁（Gavrio）。快船约2小时，普通渡轮约2.5-3.5小时，夏季班次密集，每天多班，冬季减少，务必提前在Ferryhopper或船公司官网查询并订票。抵达加夫里翁后，可租车（最推荐，岛上探索必备）、乘坐当地巴士或预约出租车前往霍拉等地，车程约30-40分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解安德罗斯的今天，必须从它的“水”说起。在绝大多数基克拉泽斯兄弟都在为淡水发愁时，安德罗斯却因为特殊的地质构造，拥有源源不断的地下泉水。这在古代，简直是天选之地。早在古典时期，这里就因富饶而闻名。但真正让它命运发生第一次转折的，是拜占庭帝国中期。当时，帝国的精英和学者为了躲避战乱，看中了这个易守难攻、又能自给自足的绿色岛屿。他们带来了资金、知识和东正教虔诚的信仰，修建修道院，开垦梯田，并系统地开发水利工程，那些最古老的水磨坊体系或许就在此时奠定了基础。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯人在13世纪的到来，为岛屿披上了一层军事铠甲。他们在霍拉的岬角上建造了坚固的城堡（如今只剩遗址），并将岛屿纳入其海洋商业帝国网络。安德罗斯的水和农产品成为商品，开始更频繁地驶向爱琴海各地。然而，财富也引来了觊觎。接下来的奥斯曼统治时期相对漫长，岛民们转入一种内向的、以村庄和家族为单位的自治生活。那些藏在深谷中的水磨坊，成了他们维持生计、保持独立性的秘密武器。你可以想象，在漫长的夏日，山谷里回荡着几十架水轮同步运转的轰鸣，磨碎麦粒，榨取橄榄油，那是一种多么生机勃勃而又隐秘的景象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的黄金时代，随着19世纪希腊独立和全球航运业的勃兴而到来。安德罗斯人自古就是优秀的水手，当机会来临，他们毫不犹豫地投身大海。凭借无畏、精明和家族协作，一代又一代的安德罗斯船东建立了庞大的商船队，财富从伦敦、纽约、黑海沿岸滚滚而来。但他们没有在异乡挥霍，而是选择荣归故里，用财富浇灌这片生养他们的土地。于是，在19世纪末20世纪初，霍拉和另一个主要城镇巴特西的面貌被彻底改变了。船东们请来最好的建筑师，将当时欧洲大陆最时髦的新古典主义风格搬到了爱琴海的悬崖边上。这些豪宅不仅是居住空间，更是身份、教养和对欧洲文明认同的宣言。它们通常设有私人图书馆、收藏室和音乐厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，安德罗斯的传奇并未止步于财富的堆砌。20世纪，最具影响力的航运家族之一——古兰德里斯家族，将这种财富升华为了文化慈善。他们出资修建学校、医院，更重要的是，建立了举世闻名的“古兰德里斯基金会”及其旗下的船舶博物馆、当代艺术博物馆等。尤其是当代艺术博物馆，定期展出包括毕加索、马蒂斯、米罗等大师真迹在内的顶级展览，这在全球任何一个海岛上都是难以想象的奇迹。从依赖泉水生存，到驾驭海水致富，再到用财富滋养艺术与思想，安德罗斯用它的历史，完美诠释了一种生生不息、向上向善的文明循环。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议至少安排两天一夜，才能真正领略安德罗斯的层次。第一天聚焦“水与石的史诗”，深入内陆峡谷探访水磨坊废墟，下午抵达霍拉感受新古典主义的奢华，傍晚享受海滨时光。第二天进行“艺术与山海漫步”，上午参观顶级博物馆，下午选择一条经典的徒步路线或自驾探索隐秘海滩。这样的安排节奏张弛有度，既能深入历史腹地，又能享受文化盛宴和自然之美。强烈建议租车，因为最美的风景都散落在公共交通不易抵达的山谷与海岸线之间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`岛上公交车班次有限且主要连接大镇，去峡谷和偏远海滩几乎必须租车，手动挡车型更多且便宜，但山路多弯需谨慎驾驶。
夏季（7-8月）是旺季，霍拉会很热闹但不到拥挤程度，如果想获得更静谧的峡谷徒步体验，最好选择五月、六月或九月。
探访水磨坊废墟时请穿着防滑结实的鞋子，因为石阶常年被水汽浸润很滑，并且绝对不要尝试攀爬或进入结构明显不稳的废墟内部。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从加夫里翁港取车后，不要直奔霍拉，而是拐向内陆，沿着指向Pithara瀑布或Menites村庄的蜿蜒山路开去。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在Menites村著名的狮子头喷泉旁接一瓶冰冷彻骨的天然泉水，感受那股清甜如何瞬间激活你的所有感官。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一条标记清晰的徒步小径，比如从Apoikia村出发，沿着古老的石阶和水渠一路下行，去探访那隐于茂密植被中的“萨拉基尼水磨坊”群落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午在某个山间村庄的家族小馆吃一顿用本地山羊奶酪、新鲜草药和山泉灌溉的蔬菜做的家常菜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午驱车前往霍拉，把车停在镇外，然后步行穿过迷宫般的白色小巷，在某个转角突然迎接凯里广场和那片无边际的蔚蓝大海带来的视觉冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花一个小时坐在广场边缘的咖啡馆，什么都不做，就看海浪拍打脚下独特的石砌防洪堤“波罗斯”，观察当地老人如何悠闲地走过那些宏伟的豪宅门前。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前，走进古兰德里基金会当代艺术博物馆，让那些国际顶级艺术大师的作品与窗外爱琴海的落日余晖在你脑海中产生奇妙的化学反应。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天用一次从霍拉到 Stenies 村庄的沿海步道徒步来清醒头脑，一路欣赏碧海、白屋和点缀其间的昔日船长大宅。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`Pithara瀑布下方仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`在春季或雨后水量充沛时，站在瀑布池下方，用广角镜头捕捉水流从长满青苔的古老石砌水渠中奔泻而下、汇入层层叠叠石潭的动态场景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`萨拉基尼水磨坊群全景`}</h4>
                  <p className="text-sm text-gray-700">{`从峡谷对面的小径上寻找一个视野开阔的点，在上午十点左右的侧光下，能拍出水磨坊废墟的厚重质感与周围盎然绿意的强烈对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`霍拉克里广场与波罗斯堤`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，站在广场西侧，将前景的大理石广场、中景三三两两的行人、背景的新古典主义建筑立面以及被金色阳光染红的海面与波罗斯堤全部纳入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Stenies 村庄的船东豪宅巷弄`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射进狭窄的巷子，拍摄那些有着精美雕花大门和彩色玻璃窗的豪宅入口，捕捉门廊上悬挂的古老船灯细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从霍拉城堡遗址俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，爬上霍拉岬角的城堡废墟，用长焦镜头压缩空间，拍出白色城镇、深蓝大海与远方连绵青山的三重奏画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`峡谷内光线复杂，明暗对比强，建议携带小型反光板或使用HDR模式拍摄建筑废墟细节。`}</li>
                <li>• {`拍摄私人豪宅时务必尊重隐私，只从公共街道取景，避免将镜头对准敞开的窗户或阳台上的居民。`}</li>
                <li>• {`爱琴海的阳光在正午过于强烈刺眼，拍摄海景和建筑的最佳光线是日出后两小时内和日落前两小时内。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济型体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在加夫里翁港或巴特西镇的家庭式公寓，拥有简单的厨房和小阳台，能体验更本地化的港口生活，省下的预算正好用来租车。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中档特色之选`}</h4>
                  <p className="text-sm text-green-800">{`霍拉镇边缘由传统石屋改造的精品旅馆，房间可能不大，但带一个能瞥见海景的露台，步行两分钟就能融入小镇的核心脉搏。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`奢华遗产沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`入住Stenies或霍拉经过精心修复的船东豪宅的一部分改造的精品酒店，睡在高挑的彩绘天花板下，触摸 original 的大理石壁炉，享受管家式的贴心服务。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`自然爱好者天堂`}</h4>
                  <p className="text-sm text-purple-800">{`隐居在内陆某个宁静村庄（如梅尼特斯）的乡村民宿，被橄榄园环绕，夜晚只有泉水和虫鸣，清晨在露台上享用房东自制的果酱和新鲜羊奶。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（尤其是八月）的住宿非常紧俏，务必提前数月预订，如果能避开七八月，选择会多很多且价格更优。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果想同时方便探索自然和享受小镇文化夜生活，选择霍拉是最平衡的；如果追求绝对宁静和深度自然体验，则推荐内陆村庄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "岛上许多特色住宿规模很小，可能没有24小时前台，通过邮件或电话与主人提前确认入住细节是关键。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开安德罗斯许久后，记忆最深的可能不是某一座具体的建筑或风景，而是一种感觉——一种丰盈与宁静交织的感觉。在这个我们习惯于将海岛与“逃离”、“放空”简单挂钩的时代，安德罗斯提供了一种更深层次的慰藉。它告诉你，人类社区可以与自然达成如此美妙的共生：泉水被珍惜、引导，滋养出绿色的山谷和古老的产业；而从海洋获得的财富，没有被用来破坏景观，反而浇筑出承载着知识与美感的建筑遗产。这是一种充满尊严的、可持续的生存智慧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它颠覆的，又何止是人们对希腊海岛的刻板印象？它更像一个隐喻，提醒着我们，真正的富有不在于掠夺和展示，而在于循环与馈赠。从地下泉水，到海上航道，再到艺术殿堂，这里的一切都在流动、转化和升华。所以，每一位热爱深度游的旅人都该来安德罗斯岛看看。它不仅会用它的绿色、它的水声、它的石头废墟和华丽豪宅惊艳你，更会在你心里种下一颗种子：关于如何与脚下的土地、与浩瀚的世界，建立一种更深刻、更有创造力的连接。这趟旅程，是一场对感官的犒赏，更是一次对心灵的启迪。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/portara-naxos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳克索斯波尔塔拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Naxos Portara</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kavala-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡瓦拉老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kavala Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/melissani-cave-kefalonia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅利萨尼洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Melissani Cave</p>
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
