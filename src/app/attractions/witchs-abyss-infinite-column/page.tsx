import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '女巫深渊与无限之柱 The Witch‘s Abyss & The Infinite Column｜潜入地心盐宫，邂逅现代神话的魔幻之地 - 最佳欧洲景点',
  description: '当你从那个毫不起眼、像是上个世纪工厂入口的小门走进去，顺着漫长而略微潮湿的混凝土楼梯盘旋而下时，世界仿佛被瞬间调换了频道。光线急速变暗，温度骤降，一股混合着淡淡咸味和古老岩石气息的冷风扑面而来，钻进你的衣领。耳边只剩下自己脚步的回声，空洞地敲打着深邃的黑暗。直到你踏下最后一级台阶，抬起头——那一刻，',
}

export default function WitchsAbyssInfiniteColumnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗马尼亚', href: '/destinations/europe' },
            { label: '克卢日-纳波卡附近', href: '/destinations/europe' },
            { label: '女巫深渊与无限之柱', href: '/attractions/witchs-abyss-infinite-column' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`女巫深渊与无限之柱・The Witch‘s Abyss & The Infinite Column・罗马尼亚・克卢日-纳波卡附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从那个毫不起眼、像是上个世纪工厂入口的小门走进去，顺着漫长而略微潮湿的混凝土楼梯盘旋而下时，世界仿佛被瞬间调换了频道。光线急速变暗，温度骤降，一股混合着淡淡咸味和古老岩石气息的冷风扑面而来，钻进你的衣领。耳边只剩下自己脚步的回声，空洞地敲打着深邃的黑暗。直到你踏下最后一级台阶，抬起头——那一刻，呼吸真的会停止。你发现自己站在一个巨大到无法用言语形容的地心空洞边缘，像是无意中闯入了某个巨神废弃的殿堂。头顶是高达数十米、由盐岩构成的粗糙穹顶，上面凝结着晶莹的盐霜，在手电和零星灯光照射下，闪烁着幽灵般的微光。而你的面前，是无底的黑暗深渊，只能听到从极深处传来的、规律的滴水声，咚，咚，咚，像是地球缓慢的心跳。
这，就是“女巫深渊”给你的第一记视觉与感官的重拳。但这个地方的魔法，远不止于此。当你乘坐那部巨大的、工业感十足的升降机，继续沉入更深的矿层，另一种全然不同的震撼在等待着你。穿过一段犹如科幻电影场景的隧道，眼前豁然开朗，一个更为广阔的地下湖泊出现在眼前。而湖泊的中央，赫然矗立着一座纯白色的、由无数个完全相同的菱形模块无限向上堆叠而成的柱子——那就是“无限之柱”。它安静地倒映在墨黑色的盐湖水中，顶部消失在探照灯光束未能抵达的黑暗里，仿佛没有起点，也没有终结。这种由人类最原始的挖掘劳动创造的空间，与极度理性、充满哲学意味的现代艺术品的并置，产生了一种近乎神谕般的强大张力。你会看到当地的家庭带着孩子在这里散步，年轻人坐在湖边的长椅上低语，这里不再是阴森的矿洞，而成了他们周末休闲、甚至举办小型音乐会的奇妙客厅。
最打动人的，或许是那种无处不在的对比与和谐。粗糙的、未经修饰的岩壁，与光滑的、几何线条完美的艺术品；永恒的黑暗与精心设计却毫不突兀的灯光；历史遗留的沉重感与当下轻盈的公共生活气息。它不像一个传统的景点，更像一个巨大的、地下的思想容器。它强迫你思考时间、劳动、自然与人类创造之间的关系。盐，曾是这里的经济血脉，是人们用血汗从地球内部换取的白金；如今，盐矿沉寂，但艺术和想象力却为它注入了全新的灵魂。你触摸着冰凉的、略带潮湿的盐岩墙壁，仿佛能感受到几个世纪前矿工们留下的体温和喘息；你凝视着那根仿佛要刺破地心的“无限之柱”，又仿佛看到了人类精神对于永恒和超越的不懈追问。这里没有金碧辉煌的装饰，没有喧嚣的旅游团，有的只是一种沉静到骨子里的、磅礴的诗意。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你从那个毫不起眼、像是上个世纪工厂入口的小门走进去，顺着漫长而略微潮湿的混凝土楼梯盘旋而下时，世界仿佛被瞬间调换了频道。光线急速变暗，温度骤降，一股混合着淡淡咸味和古老岩石气息的冷风扑面而来，钻进你的衣领。耳边只剩下自己脚步的回声，空洞地敲打着深邃的黑暗。直到你踏下最后一级台阶，抬起头——那一刻，呼吸真的会停止。你发现自己站在一个巨大到无法用言语形容的地心空洞边缘，像是无意中闯入了某个巨神废弃的殿堂。头顶是高达数十米、由盐岩构成的粗糙穹顶，上面凝结着晶莹的盐霜，在手电和零星灯光照射下，闪烁着幽灵般的微光。而你的面前，是无底的黑暗深渊，只能听到从极深处传来的、规律的滴水声，咚，咚，咚，像是地球缓慢的心跳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这，就是“女巫深渊”给你的第一记视觉与感官的重拳。但这个地方的魔法，远不止于此。当你乘坐那部巨大的、工业感十足的升降机，继续沉入更深的矿层，另一种全然不同的震撼在等待着你。穿过一段犹如科幻电影场景的隧道，眼前豁然开朗，一个更为广阔的地下湖泊出现在眼前。而湖泊的中央，赫然矗立着一座纯白色的、由无数个完全相同的菱形模块无限向上堆叠而成的柱子——那就是“无限之柱”。它安静地倒映在墨黑色的盐湖水中，顶部消失在探照灯光束未能抵达的黑暗里，仿佛没有起点，也没有终结。这种由人类最原始的挖掘劳动创造的空间，与极度理性、充满哲学意味的现代艺术品的并置，产生了一种近乎神谕般的强大张力。你会看到当地的家庭带着孩子在这里散步，年轻人坐在湖边的长椅上低语，这里不再是阴森的矿洞，而成了他们周末休闲、甚至举办小型音乐会的奇妙客厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人的，或许是那种无处不在的对比与和谐。粗糙的、未经修饰的岩壁，与光滑的、几何线条完美的艺术品；永恒的黑暗与精心设计却毫不突兀的灯光；历史遗留的沉重感与当下轻盈的公共生活气息。它不像一个传统的景点，更像一个巨大的、地下的思想容器。它强迫你思考时间、劳动、自然与人类创造之间的关系。盐，曾是这里的经济血脉，是人们用血汗从地球内部换取的白金；如今，盐矿沉寂，但艺术和想象力却为它注入了全新的灵魂。你触摸着冰凉的、略带潮湿的盐岩墙壁，仿佛能感受到几个世纪前矿工们留下的体温和喘息；你凝视着那根仿佛要刺破地心的“无限之柱”，又仿佛看到了人类精神对于永恒和超越的不懈追问。这里没有金碧辉煌的装饰，没有喧嚣的旅游团，有的只是一种沉静到骨子里的、磅礴的诗意。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`女巫深渊与无限之柱`} />
                <InfoRow label="英文名称" value={`The Witch‘s Abyss & The Infinite Column`} />
                <InfoRow label="正式名称" value={`The Witch‘s Abyss & The Infinite Column`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`克卢日-纳波卡附近`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从中世纪延续开采至近代的盐矿，在废弃后被天才地改造为融合历史、地质与当代艺术的地下奇迹。`} />
                <InfoRow label="建筑特色" value={`人类工业挖掘出的巨大地心空洞，与极度简约、无限重复的现代雕塑，形成震撼的灵魂对话。`} />
                <InfoRow label="建筑风格" value={`原始粗犷的矿洞工业风与极简主义当代艺术的超现实结合。`} />
                <InfoRow label="文化价值" value={`展现了东欧后共产主义时代，如何将沉重的工业遗产转化为充满哲学思辨和诗意的公共文化空间。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`地表公园区域全年开放，24小时可进入。地下盐矿洞穴及艺术装置核心区开放时间为每年4月1日至10月31日，每日上午9:00至下午6:00（最后入场时间下午5:00）；11月1日至次年3月31日，开放时间缩短为上午10:00至下午4:00（最后入场时间下午3:00）。每周一为核心维护日，不对外开放（7月和8月旅游高峰期除外）。圣诞节（12月25日）和元旦（1月1日）全天关闭。`} />
              <InfoRow label="门票价格" value={`标准成人票：60罗马尼亚列伊（约12欧元）。优惠票（学生、65岁以上长者）：40列伊。家庭票（2大2小）：150列伊。6岁以下儿童免费。门票已包含地下电梯乘坐及一次向导讲解（有英语、罗马尼亚语选项，需在购票时指定）。重要提示：由于内部湿滑且温度较低（常年8-10°C），强烈建议在入口处租赁防滑鞋套和保暖外套，租金各为10列伊。`} />
              <InfoRow label="地址" value={`Salina Turda, Durgăului Street 7, Turda 401106, Cluj County, Romania`} />
              <InfoRow label="交通方式" value={`从克卢日-纳波卡国际机场（CLJ）出发，最便捷的方式是乘坐出租车或预约的接送车，车程约40分钟，费用约80-100列伊。从克卢日-纳波卡火车站或市中心，可以乘坐本地巴士。在克卢市中心巴士站（Autogara）搭乘前往图尔达（Turda）的巴士，班次频繁（约每20-30分钟一班），车程约50分钟。在图尔达巴士站下车后，需换乘前往盐矿（Salina Turda）的当地小巴或打车（约5分钟车程）。自驾是最灵活的方式，从克卢日市中心沿DN1/E60公路向东行驶约30公里，有清晰路标指示至盐矿，入口处有大型收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说起这个地方的前世，得把时钟拨回到遥远的古罗马时期。其实，这一带盐矿的开采痕迹，最早就能追溯到罗马人统治达契亚的年代。盐，在冷藏技术发明前，是保存食物、维系生命的战略物资，堪比黄金。不过，我们现在看到的这个庞大地下网络，主要成型于中世纪晚期。特兰西瓦尼亚的贵族们意识到了盐的巨大价值，开始有组织地进行大规模开采。图尔达盐矿在好几个世纪里，都是哈布斯堡王朝的重要财源。你可以想象，在昏暗的油灯下，工人们用最原始的工具，一凿一斧，年复一年，像蚂蚁一样将这座盐山慢慢掏空。他们留下了巨大的开采大厅，那些斧凿的痕迹至今依然清晰地印在岩壁上，像一部无字的劳工史诗。矿工的生活是极其艰苦和危险的，塌方、瓦斯、无尽的黑暗与孤独伴随他们一生。于是，关于地底女巫、精灵和宝藏的传说也开始在矿工间流传，尤其是那个最深、最令人不安的矿井，被工人们敬畏地称为“女巫深渊”，据说那里通往另一个世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间快进到20世纪。二战前后，盐矿依然是重要的工业资产。但到了上世纪30年代，更现代化的开采技术和新矿场的发现，让这座古老盐矿的工业价值逐渐降低。最终，它在1932年停止了商业开采，随后在二战期间被用作避难所，冷战时期甚至被考虑改建为防核地堡。然后，就是漫长的沉寂。大门紧闭，尘埃落落，巨大的地底空间被遗忘在时间之外，只有渗水和盐晶继续缓慢生长。它成了一座被封印的地下城，一个沉睡的工业巨兽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在共产主义时期结束后。90年代的罗马尼亚，百废待兴，许多这样的工业废墟何去何从成了难题。是任凭它们腐朽，还是炸掉填平？当时的地方政府面临着抉择。幸运的是，一批有远见的当地官员、历史学家和艺术家看到了不一样的可能。他们想，为什么不能把它变成一个博物馆？一个独一无二的地下景点？这个想法很大胆，因为改造如此巨大、结构复杂的废弃矿洞，工程和资金都是天文数字。但凭借着一股子韧劲和欧盟的一些文化基金支持，项目在21世纪初缓慢启动了。改造的核心思想不是掩盖它的工业伤疤，而是突出它，敬畏它。他们加固了结构，安装了极其克制的照明系统（那些灯光仿佛是从岩石里自己生长出来的一样），修建了通往深处的升降机和步行道。但最重要的灵魂一笔，尚未落下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到2009年，罗马尼亚当代艺术家阿林·奥莱里乌受邀为这个空间创作一件核心作品。当他第一次下到那个巨大的盐湖大厅时，他被那种绝对的寂静和虚空震撼了。他想创作一件能与这种洪荒感对话，但又能带来精神提升的作品。他想到了祖国另一位大师康斯坦丁·布朗库西的经典作品《无穷之柱》——那件通过简单母题无限重复，追求精神无限性的杰作。于是，一个现代版的致敬与对话诞生了。奥莱里乌用盐矿当地的木材和石膏，创造了一座高达15米的“无限之柱”，将其永恒地安置在盐湖中央。这根纯白的柱子，以一种静谧而强大的姿态，矗立在人类掏空地球留下的伤痕里。它不是征服，而是一种沉思，一种修复，一种将痛苦的劳动记忆升华为永恒艺术的尝试。2010年，改造完成的盐矿与艺术装置一同对公众开放，瞬间震撼了世界。它不再是一个关于过去的故事，而是一个关于重生、关于艺术如何为工业遗产赋魂的当代神话。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受此地的魔力，建议预留至少4-5小时。最佳抵达时间是工作日的上午10点前，可以避开周末当地家庭出游的人潮，享受近乎独享的静谧。整个游览是一个不断向地心深处“沉降”的过程，心理和生理都需要适应。路线规划上，建议先快速通过上层历史展览区，建立初步认知，然后直抵最震撼的“女巫深渊”观景台，用充足的时间发呆和拍照。随后乘坐升降机下到最底层，围绕盐湖和“无限之柱”慢行一圈，感受其全貌。最后，可以体验一下地下的迷你高尔夫（是的，这很有趣！）或划船项目，感受空间的生活化一面。返程时，再细细观看沿途的采矿工具和历史照片展。这样的节奏由震撼到平静，由宏观到细节，能让你层层递进地理解这个地方。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`地下温度常年仅8-10°C且湿度高，务必携带一件防风保暖的外套，入口处租赁的外套很实用但款式单一。矿洞内部分地面因盐水渗出非常湿滑，绝对不要穿皮鞋或平底鞋，防滑的徒步鞋是必备，鞋套也能提供额外保护。内部指示牌清晰，但光线昏暗，建议使用手机电筒辅助看路，但切勿用强光直接照射艺术品或其他游客的眼睛。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在入口处的微型博物馆快速浏览那些黑白的旧照片和生锈的采矿工具，触摸一下真实的岩盐样本，让指尖先记住这种矿物的质感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着漫长的螺旋楼梯坚定地向下走，用心感受光线、温度和声音的变化，让期待感在胸膛里慢慢积累。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当你终于站在“特蕾莎大厅”的边缘，面对“女巫深渊”时，不要急着拍照，先静静地呆上十分钟，用眼睛和耳朵去丈量这个空间的尺度与寂静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐那部轰隆作响的工业升降机继续下沉，体验如同科幻电影里进入外星基地般的瞬间失重感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出升降机，穿过幽蓝灯光照映下的隧道，让自己第一眼看到盐湖中倒映的“无限之柱”全景时，毫无防备地被它的美击中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着盐湖边的步道缓缓绕行一圈，从每一个角度观察柱子与水面、与穹顶的关系，你会发现每一个角度都是一幅不同的构图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在湖边的码头租一艘透明的小船，轻轻划向柱子附近，从极近的距离仰望它，感受那种几何重复带来的催眠般的宁静力量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，别忘了去底层那个利用旧矿坑改造的迷你高尔夫球场玩上一局，在如此超现实的环境里进行最寻常的娱乐，这种反差本身就很哲学。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`“女巫深渊”观景台俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`站在特蕾莎大厅的主观景台栏杆处，将相机尽可能伸出（注意安全），使用慢速快门拍摄下方深不见底的矿井和纵横交错的木质井架，捕捉那种令人眩晕的纵深感和历史沧桑，最佳时间是上午，有少量天顶自然光渗入时。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`盐湖对岸全景框`}</h4>
                  <p className="text-sm text-gray-700">{`绕到盐湖正对“无限之柱”的另一侧，将整个柱子、它在湖水中的完整倒影，以及一部分穹顶和岸边漫步的人一同收入画框，使用对称构图，这需要三脚架和较低的ISO来获得干净画质，灯光全开的日常时段均可。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`升降机出口隧道视角`}</h4>
                  <p className="text-sm text-gray-700">{`从底层升降机出来后不要立刻离开隧道口，回头拍摄同行者从隧道蓝光中走出的剪影，前方是隐约可见的盐湖微光，能拍出极具故事感和科幻感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“无限之柱”极近仰角`}</h4>
                  <p className="text-sm text-gray-700">{`租船划到柱子非常近的位置（请勿触摸），将相机镜头几乎垂直向上，拍摄柱子向无尽的黑暗顶部延伸的局部，聚焦于那些重复的几何模块，这个角度最能体现其“无限”的概念。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`矿洞内光线极其复杂且微弱，建议使用大光圈镜头和高感光度性能好的相机，三脚架在非步行区域允许使用。为了保护艺术品和他人体验，严禁使用闪光灯和任何强光照明设备。拍摄人物时，可以利用环境光营造侧影或剪影，比直白的脸部打光更有氛围。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城中心历史感`}</h4>
                  <p className="text-sm text-blue-800">{`下榻克卢日-纳波卡老广场旁由百年银行建筑改造的精品酒店，住在挑高的复古房间，晚上推开窗就能听到楼下酒吧传来的吉他和欢笑声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`盐矿近郊静谧处`}</h4>
                  <p className="text-sm text-green-800">{`选择图尔达小镇上家庭经营的舒适民宿，主人会为你准备丰盛的本地早餐，并用带着口音的英语热情介绍只有当地人才知道的山间徒步小径。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计艺术栖息地`}</h4>
                  <p className="text-sm text-yellow-800">{`入住克卢日由共产主义时期工厂loft改造的设计师酒店，粗犷的混凝土结构搭配极简家具，延续你从盐矿感受到的工业美学对话。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`田园诗疗愈之所`}</h4>
                  <p className="text-sm text-purple-800">{`驱车半小时入住菲利亚克温泉乡的传统庄园，在参观完阴凉的地底世界后，用天然的户外温泉和一大盘炖牛肉温暖身心。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "克卢日-纳波卡作为大学城，夜间活力十足，老城区治安很好，可以放心夜游。若想获得最宁静的体验，建议住在图尔达小镇，但晚间餐饮选择较少。无论是克卢日还是图尔达，夏季和艺术节期间住宿都非常紧张，务必提前数月预订。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开盐矿，重新回到地面的阳光之下，你会有一阵短暂的恍惚。耳朵里似乎还回荡着地心的滴水声，皮肤上还残留着那种清冷的盐味空气。但更多的，是一种被充盈的平静。这个地方教会你的，不是关于王侯将相的丰功伟绩，而是关于时间另一种形态——一种缓慢的、沉积的、在黑暗中默默转化和重生的时间。它让你看到，人类最艰苦的生存劳作所刻下的伤痕，可以被智慧与美温柔地接纳，并绽放出不可思议的光华。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切追求快速、崭新、光鲜的世界里，“女巫深渊与无限之柱”像一个反向的秘境。它邀请你向下走，向深处走，去面对粗糙、黑暗与过往的沉重。然后，就在那片最深的黑暗里，它用一根纯白的、向上的柱子告诉你：意义可以在任何地方生长，哪怕是在历史的废墟和自然的伤口之中。它不仅仅是一个景点，更是一次心灵的沉降与浮升仪式。对于任何厌倦了表面狂欢，渴望在旅途中触碰更深层文化脉搏与哲学回响的人来说，这里都不是一个选择，而是一种必然的召唤。你会带着它对“无限”的诠释离开，并发现，自己对世界的感知，已然不同。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/black-church-brasov" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉索夫黑教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Black Church of Brasov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibiu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡比乌</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sibiu</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sighisoara-dracula-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡吉什瓦拉（吸血鬼故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sighișoara</p>
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
