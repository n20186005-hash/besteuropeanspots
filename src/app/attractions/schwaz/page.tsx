import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施瓦茨旅游攻略：中世纪的“银都”与地下世界深度探索指南',
  description: '深度游览奥地利小镇Schwaz（施瓦茨），探秘中世纪欧洲的银矿之都。这份详尽攻略带你走进矿山与大教堂，体验独特的“银色文艺复兴”。',
}

export default function SchwazPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '蒂罗尔州', href: '/destinations/austria' },
            { label: '施瓦茨', href: '/attractions/schwaz' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施瓦茨・Schwaz・奥地利・蒂罗尔州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下：清晨的阳光还没完全照亮阿尔卑斯山的雪顶，却先给一栋栋有着七彩壁画的老房子镶上了金边。这里不是童话书，而是奥地利的施瓦茨。你可能没听过它的名字，但它有个响亮的外号——“欧洲的银库”。今天这份施瓦茨私藏旅游攻略，就带你躲开因斯布鲁克的拥挤人潮，钻进这个连时间都仿佛被白银凝固的中世纪小镇。我们不仅要仰望那座独一无二的哥特式大教堂，更要戴上矿工帽，深入数百米的地下矿井，亲手触摸让哈布斯堡王朝富甲天下的“白色黄金”。作为你的专属向导，这份自由行指南请收好，我们马上出发，去揭开一段埋藏在地下的辉煌史诗。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下：清晨的阳光还没完全照亮阿尔卑斯山的雪顶，却先给一栋栋有着七彩壁画的老房子镶上了金边。这里不是童话书，而是奥地利的施瓦茨。你可能没听过它的名字，但它有个响亮的外号——“欧洲的银库”。今天这份施瓦茨私藏旅游攻略，就带你躲开因斯布鲁克的拥挤人潮，钻进这个连时间都仿佛被白银凝固的中世纪小镇。我们不仅要仰望那座独一无二的哥特式大教堂，更要戴上矿工帽，深入数百米的地下矿井，亲手触摸让哈布斯堡王朝富甲天下的“白色黄金”。作为你的专属向导，这份自由行指南请收好，我们马上出发，去揭开一段埋藏在地下的辉煌史诗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施瓦茨`} />
                <InfoRow label="英文名称" value={`Schwaz`} />
                <InfoRow label="正式名称" value={`Schwaz`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`蒂罗尔州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`在15-16世纪，施瓦茨可不是什么安静的山间小镇，它是那个时代的“硅谷”，是驱动欧洲经济的强劲心脏。这里的银矿产量曾占据全球产量的85%，是当时已知世界最大的银矿。你可以说，这里的矿脉，直接流淌进了神圣罗马帝国的国库，为马克西米利安一世皇帝的雄心壮志提供了最坚实的资金保障。它产出的白银，不仅铸成了流通欧洲的货币，更通过贸易网络远销海外，实实在在地影响了全球早期的经济体系。施瓦茨的财富，资助了因斯布鲁克霍夫堡皇宫的黄金屋顶，滋养了整个蒂罗尔地区的文艺复兴艺术。它的崛起与衰落，就是一部微缩的欧洲近代经济史。因此，来到施瓦茨，你不是在看一个景点，而是在阅读一本关于财富、权力与文明进程的立体史书。`} />
                <InfoRow label="建筑特色" value={`小镇的心脏——圣方济各教堂，绝对会颠覆你对哥特式教堂的所有想象。远看，它不像科隆大教堂那样刺破苍穹，反而敦实、宽阔，用一种稳如泰山的姿态坐镇在城镇中心。它的外墙不是冰冷的灰白，而是在数百年风雨沁润下，呈现出一种温暖的、类似晚霞的赭石红色。最引人注目的是它侧面那排列密集、高耸入云的飞扶壁，像巨人的肋骨，紧紧箍住庞大的建筑主体，仿佛在镇压着地底躁动的财富。教堂的钟楼顶部，覆盖着色彩鲜明的菱形釉面砖，黑、白、绿三色交织，在阿尔卑斯湛蓝的天空下显得格外醒目俏皮。整个建筑群没有追求极致的纤细，而是用巨大的体量和复杂的结构线，无声地宣告着：建造我所需的惊人财力，就来自你们脚下的土地。`} />
                <InfoRow label="建筑风格" value={`施瓦茨的圣方济各教堂，是晚期哥特式风格在阿尔卑斯地区一个极其特殊的变奏，专业术语叫“双通道四中殿大厅式教堂”。别被名词吓到，我用人话给你解释：走进教堂内部，你不会看到一根中央主柱把你引向遥远的圣坛，取而代之的，是一种无比开阔、近乎“民主”的空间感。四排高度几乎一致的拱顶并排延伸，由两排纤细的束柱支撑，感觉像走进了一个由石头编织而成的神圣森林。阳光从高大的侧窗射入，均匀地洒在每一个角落，让信众无论站在哪里，都与圣坛有着几乎平等的视觉和心灵联系。这种风格非常罕见，它反映了施瓦茨当时新兴的富裕市民阶层（矿主和商人）的自信——他们不需要通过深邃、压抑的空间来感受神性，他们建造的殿堂，光明、平等、恢弘，正是他们用财富创造的新世界在建筑上的直接映射。`} />
                <InfoRow label="文化价值" value={`银矿给施瓦茨留下的，远不止博物馆里的矿石标本。它深刻地塑造了这里的市民精神和文化基因。你会发现，小镇的徽章、街头的雕塑、甚至面包店的招牌上，都频繁出现着“矿工”和“银锭”的元素。这不是旅游噱头，而是深入骨髓的身份认同。这里的居民以他们的先辈是“征服地底世界的人”而自豪，这种自豪感衍生出一种务实、坚韧且略带骄傲的气质。银矿带来的财富没有只流向贵族，而是催生了一个强大的市民阶层，他们投资教育、赞助艺术，使得这个小城在文艺复兴时期拥有了不逊于大城市的图书馆和音乐生活。直到今天，一年一度的矿工节，全镇人都会穿上传统服饰游行，那不仅仅是一场表演，而是一次集体的历史记忆唤醒。施瓦茨告诉你，真正的文化价值，是财富如何转化为一个社区的持久精神与集体性格。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 施瓦茨一日游完美路线与打卡攻略`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`银都经典探索路线（自由行推荐）`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`嘿，朋友，跟着我走，保证你把施瓦茨的精华一天内“榨干”。咱们的打卡攻略从上午开始：第一站，直捣黄龙——施瓦茨银矿。请务必在网上提前订好票（这是最重要的避坑指南之一），选择最早的一场导览。戴上矿工帽，乘坐小火车“轰隆隆”钻进山里，在幽深、潮湿、只有滴水声的巷道里，听向导讲述矿工们用烛火和汗水开采财富的故事，亲手摸摸冰冷的矿脉。出来后，在矿井出口的咖啡馆喝杯热咖啡回回神。下午，我们将目光转向地上：第二站，圣方济各教堂。好好端详它独特的外形，然后走进那个震撼的四中殿大厅，让眼睛适应从黑暗到光明的转换。接着，以教堂为中心，在老城区随意漫步，那些壁画房屋（比如“金银匠之家”）就像一本打开的彩色故事书。傍晚时分，沿着茵河散步，看夕阳把山峦和小镇染成和教堂外墙一样的金红色，为这一天画上完美句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  矿井深处的“矿工坡道”：在银矿地下参观的中段，你会走过一段非常原始、仅容一人通行的狭窄木质坡道。请停下脚步，触摸那被无数双手磨得发亮、甚至凹陷的木头扶手。你的手掌贴着的，可能就是五百年前某位矿工在结束12小时艰苦劳作后，支撑身体回家的同一块木头。昏暗的灯光下，木头纹理里似乎还嵌着当年的煤灰和汗渍，那种跨越时空的触感，比任何金银都更让人心颤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  教堂内的“石材山景图”：抬头仔细看教堂拱顶的肋架。你会发现，那些石材并非光滑统一，而是带着天然的、粗犷的纹理和颜色变化，深灰、浅褐、乳白交织。这绝非偷工减料，当时的建造者特意选择了这种来自附近采石场的石头，未加过多打磨。当阿尔卑斯山的阳光透过彩窗照射下来，这些拱顶就像一幅微缩的、倒悬的蒂罗尔山景画，将大自然的力量与神圣空间完美融合。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  讲坛上的“红色大理石”：教堂内那个华丽的晚期哥特式讲坛，是用产自瑞士的红色大理石制成的。请注意它温润如血的色泽和细腻的光泽。在遍地是木材和普通砂岩的阿尔卑斯地区，这种需要远途运输的昂贵石材出现在这里，本身就是一则无声的宣言。它仿佛在说：“看，我们施瓦茨的教区，富有到足以用最稀缺的材料来雕琢上帝的训谕之言。”`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  骑士墓上的“真实盔甲”：在教堂一侧，有一座精美的文艺复兴时期骑士墓。最迷人的细节是，墓上雕刻的骑士所穿的盔甲，不是程式化的装饰，而是当时真实盔甲的高度写实复制品，关节、纹饰、乃至甲片的连接方式都一丝不苟。你可以清晰地“读”出16世纪蒂罗尔地区铠甲锻造的工艺水平。这位安息的骑士，或许就是一位用银矿财富装备自己，保卫这片土地的贵族。`}</p>
            </div>
          </Section>

          <Section title={`5. 施瓦茨自由行避坑指南与关键行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`首先，时间就是金钱：银矿导览非常热门，且每场人数有限。务必、一定、必须在官网提前预订门票并选择好时间段，这是最大的避坑点。现场买票很可能要等好几小时，甚至白跑一趟。其次，装备要对路：下矿井常年只有8-10度，湿度高，即使夏天也请务必带一件外套。鞋子必须防滑、舒适，井内部分通道湿滑且有坡度。别为了拍照好看穿不实用的鞋，安全第一。最后，警惕“关门时间”陷阱：小镇的博物馆、商店甚至一些餐厅，下午关门较早（尤其是淡季和非旅游旺季），且周日很多不营业。规划行程时最好上午进行主要参观（如矿井），下午安排弹性较大的老城漫步和咖啡时间。另外，老城区石板路多，拖着大行李箱会非常痛苦，建议将大件行李存在火车站或酒店。`}</p>
            </div>
          </Section>

          <Section title={`6. 施瓦茨住宿与美食全攻略：住在银都的心脏`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`想在施瓦茨获得沉浸式体验，我强烈推荐住在老城区内的家庭式旅馆或历史酒店。比如那些由古老商驿改建的住处，木梁天花板、厚实的石墙，晚上安静得能听到茵河的流水声，推窗就是壁画建筑。早餐往往能吃到本地特色的“灰色奶酪”和现烤的黑麦面包。餐饮方面，你必须去体验一家叫 “Bergkeller”（山窖） 或 “Zur Silberpfennig”（白银币） 的传统餐厅。推开厚重的木门，就像走进了矿工的酒窖。一定要点蒂罗尔招牌菜“Gröstl”——用土豆、洋葱和腌肉或香肠煎炒而成，热量十足，当年就是矿工们补充体力的“硬菜”。再配上一杯本地酿造的“Zillertal”啤酒，这就是地道的“矿工盛宴”。在老城广场边找家咖啡馆，点一份“Apfelstrudel”（苹果卷），看着教堂钟楼发呆，才是完美的下午。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`从施瓦茨老城中心散步约15分钟，就能到达一个被本地人私藏的秘境——“蓝泉”公园。这里曾是银矿的排水系统之一，泉水呈现出一种不可思议的、介于松石绿和宝石蓝之间的颜色，清澈见底，周围森林环抱，静谧无比。另一个不容错过的是乘坐公交或自驾一小段路，前往山上的特伦德尔堡垒。这座堡垒曾守卫着银矿运输通道。现在登顶俯瞰，整个茵河谷地和施瓦茨红屋顶小镇如画卷般铺展在眼前。你会瞬间明白，为何当年的统治者要在此建立要塞——眼前的一切，就是他们必须守护的、流淌着的财富之源。这种从地下到地上，再到上帝视角的完整体验，是施瓦茨之旅的绝妙尾声。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`施瓦茨的灵魂，是深埋于地下的坚韧与照耀在地上的荣光，两种力量共同浇筑的。它不像那些纯粹的皇城或艺术之都，它的每一分美丽与独特，都带着泥土的湿润和金属的冷感。在这里，你触摸到的历史，是具体到一镐一斧的艰辛，具体到一块石头如何被垒起成为殿堂。它告诉你，欧洲的文艺复兴不仅有佛罗伦萨的美第奇，也有蒂罗尔深山里的矿工；文明的光辉，既来自思想与艺术的迸发，也来自大地深处最原始力量的馈赠。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/schlossberg-graz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉茨城堡山</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schlossberg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hohenems-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍恩埃姆斯宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hohenems Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/durnstein-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杜
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杜恩施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dürnstein Castle</p>
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
