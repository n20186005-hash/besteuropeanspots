import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '戈尔德博里村 Village des Bories｜探访完全由干砌石头搭建的史前风格蜂窝石屋群 - 最佳欧洲景点',
  description: '车子拐上最后一段蜿蜒的山路，当那片灰白色的奇异群落毫无征兆地撞进视野时，我几乎忘了呼吸。那不是废墟，更像是一片从土地里自然生长出来的巨石骨骼，沉默而磅礴地匍匐在瓦克吕兹高原的苍茫荒野上。下午四点的阳光斜射过来，给每一块粗糙的石灰岩边缘镀上金边，投下长长的、棱角分明的影子。空气里是干燥的薰衣草残香、被...',
}

export default function VillageDesBoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '戈尔德博里村', href: '/attractions/village-des-bories' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`戈尔德博里村・Village des Bories・法国・近戈尔德及莱博镇，沃克吕兹省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐上最后一段蜿蜒的山路，当那片灰白色的奇异群落毫无征兆地撞进视野时，我几乎忘了呼吸。那不是废墟，更像是一片从土地里自然生长出来的巨石骨骼，沉默而磅礴地匍匐在瓦克吕兹高原的苍茫荒野上。下午四点的阳光斜射过来，给每一块粗糙的石灰岩边缘镀上金边，投下长长的、棱角分明的影子。空气里是干燥的薰衣草残香、被太阳烘烤的岩石气息，以及一种万古俱寂的宁静。风穿过石屋空荡的门洞，发出低沉悠长的鸣响，像是大地在轻轻叹息。
走近了，那种原始的震撼愈发强烈。你的指尖可以触摸到每一块石头——冰凉、粗砺，带着千百年来风雨雕刻的痕迹。它们并非杂乱无章，而是以一种令人惊叹的精确度相互咬合、倾斜、拱起，最终形成一个不需要任何水泥或木梁支撑的完美拱顶。站在一个“博里”石屋的门口向内窥探，内部是圆锥形的幽暗空间，仅由门口和墙隙透进几束光柱，光柱里尘埃浮动。你会瞬间明白，这不是神庙或宫殿，它的一切都为了最纯粹的生存：遮蔽风雨、储藏工具、圈养羊群。它的美，来自这种剔除一切冗余的、赤裸裸的功能性。
然而，这个看似被时间遗忘的角落，却并未从当地人的记忆中消失。在附近戈尔德镇的老咖啡馆里，你还能听到老人们用普罗旺斯语提及“Les Bories”，语气里没有游客的惊奇，而是一种对待老家旧物般的熟悉与平淡。它曾是牧羊人午休的荫凉地，是农夫存放犁具的仓库，是孩子们探险的秘密基地。它的灵魂从未离开过这片土地，只是安静地退入了背景，直到被现代人重新“发现”，并赋予其浪漫的史前想象。但它的核心魅力，恰恰在于这种跨越时空的实用性所带来的直接共鸣——在这里，你能触摸到人类面对自然时，最初也最根本的那份创造力与坚韧。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子拐上最后一段蜿蜒的山路，当那片灰白色的奇异群落毫无征兆地撞进视野时，我几乎忘了呼吸。那不是废墟，更像是一片从土地里自然生长出来的巨石骨骼，沉默而磅礴地匍匐在瓦克吕兹高原的苍茫荒野上。下午四点的阳光斜射过来，给每一块粗糙的石灰岩边缘镀上金边，投下长长的、棱角分明的影子。空气里是干燥的薰衣草残香、被太阳烘烤的岩石气息，以及一种万古俱寂的宁静。风穿过石屋空荡的门洞，发出低沉悠长的鸣响，像是大地在轻轻叹息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，那种原始的震撼愈发强烈。你的指尖可以触摸到每一块石头——冰凉、粗砺，带着千百年来风雨雕刻的痕迹。它们并非杂乱无章，而是以一种令人惊叹的精确度相互咬合、倾斜、拱起，最终形成一个不需要任何水泥或木梁支撑的完美拱顶。站在一个“博里”石屋的门口向内窥探，内部是圆锥形的幽暗空间，仅由门口和墙隙透进几束光柱，光柱里尘埃浮动。你会瞬间明白，这不是神庙或宫殿，它的一切都为了最纯粹的生存：遮蔽风雨、储藏工具、圈养羊群。它的美，来自这种剔除一切冗余的、赤裸裸的功能性。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，这个看似被时间遗忘的角落，却并未从当地人的记忆中消失。在附近戈尔德镇的老咖啡馆里，你还能听到老人们用普罗旺斯语提及“Les Bories”，语气里没有游客的惊奇，而是一种对待老家旧物般的熟悉与平淡。它曾是牧羊人午休的荫凉地，是农夫存放犁具的仓库，是孩子们探险的秘密基地。它的灵魂从未离开过这片土地，只是安静地退入了背景，直到被现代人重新“发现”，并赋予其浪漫的史前想象。但它的核心魅力，恰恰在于这种跨越时空的实用性所带来的直接共鸣——在这里，你能触摸到人类面对自然时，最初也最根本的那份创造力与坚韧。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`戈尔德博里村`} />
                <InfoRow label="英文名称" value={`Village des Bories`} />
                <InfoRow label="正式名称" value={`Village des Bories`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`近戈尔德及莱博镇，沃克吕兹省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲现存规模最大、保存最完好的干砌石建筑群，见证了人类运用最原始材料与自然共存的古老智慧。`} />
                <InfoRow label="建筑特色" value={`完全不用任何粘合剂，仅凭精心挑选和堆叠的石灰岩石板，构筑出蜂巢状拱顶和完美贴合地形的石屋与围墙。`} />
                <InfoRow label="建筑风格" value={`新石器时代晚期至铁器时代延续下来的原始实用主义建筑风格，极具功能性的几何形态。`} />
                <InfoRow label="文化价值" value={`是普罗旺斯乡村生活史的活化石，深刻反映了前罗马时期以来当地牧民和农民适应贫瘠石灰岩高原的生存策略与文化韧性。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每日开放，通常为日出至日落。具体时间随季节略有浮动，夏季（5月至9月）通常从上午9点开放至晚上7点；冬季（10月至次年4月）可能提前至下午5点关闭。无官方休息日，但极端天气（如强风）时可能临时关闭。`} />
              <InfoRow label="门票价格" value={`成人票6欧元。优惠票4欧元（适用于学生、12-17岁青少年及10人以上团体）。12岁以下儿童免费。门票包含一份简明的多语言导览图。现场仅接受现金（欧元）支付。`} />
              <InfoRow label="地址" value={`Village des Bories, Route de Gordes, 84220 Gordes, France`} />
              <InfoRow label="交通方式" value={`从马赛普罗旺斯机场出发，最便捷的方式是乘坐火车。首先搭乘机场巴士至马赛圣查尔斯火车站，车程约25分钟。然后乘坐前往阿维尼翁中央火车站的区域列车，车程约1小时，班次频繁。抵达阿维尼翁后，最佳选择是租车自驾（约40分钟车程），沿D2公路经戈尔德镇，按指示牌驶向莱博方向即可到达。若依赖公共交通，可从阿维尼翁乘坐公交Car TER Zou Line 15路前往卡瓦永，再换乘前往戈尔德的班车（班次稀少，每日仅2-3班，需仔细规划时间），下车后需步行约3公里上山路。强烈建议自驾或参加从阿维尼翁出发的半日游本地团。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`关于戈尔德博里村的起源，一直笼罩在时间的迷雾里，这也正是它最迷人的地方。最初，考古学家们被它那宛如新石器时代建筑的形态所震撼，曾大胆推测其历史可追溯到公元前3500年。那些蜂巢状的圆顶，与撒丁岛、爱尔兰甚至非洲发现的史前石屋如此相似，仿佛是人类某种集体无意识的建筑原型。然而，后续更细致的研究，包括对石屋内部发现的陶器碎片、工具残留物的分析，逐渐将聚落活跃的主要时期指向了更晚近的年代——大约是中世纪晚期到18世纪。但这并不意味着它的“身世”就变得简单，相反，这揭示了一段更复杂、更层叠的历史：建筑技术本身可能是远古智慧的遗存，而被后人反复利用、修缮、重建，直到近代。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下中世纪普罗旺斯高原上的生活。这里土壤贫瘠，满布石灰岩，森林稀少，木材是珍贵资源。但石头，取之不尽的石头，是大地慷慨的馈赠。于是，一群不知名的农夫或牧羊人，或许是父亲传给儿子，或许是一个小社区的集体劳作，开始了这项看似不可能的任务。他们不需要复杂的工具，只需一双善于观察的眼睛和一双灵巧的手。他们学习岩石的纹理，寻找天然裂缝，用铁撬棍和锤子剥离出厚薄适宜的石板。建造的秘诀在于“干砌”：每一块石头都经过精心挑选和微调，靠自身的重量和巧妙的倾斜角度相互锁定，形成稳定的合力。拱顶从底部一圈圈向内收拢，最后用一块顶石封住，坚固得足以抵御密史脱拉风的狂暴。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这些石屋并非一个规划整齐的村庄，而是在数百年间应需而生，慢慢“生长”出来的。核心的居住单元是家庭用的“大博里”，旁边会附有 smaller bories 作为厨房、作坊或畜栏。你还能看到面包烤炉的遗迹、蓄水槽、压榨橄榄的石台，以及绵延不断的矮石墙，将一片片小小的田地或牧场划分开来。这是一个自给自足的小世界。历史记载中很少直接提及它，因为它太普通、太寻常了，是普罗旺斯乡村背景里沉默的一部分。它的居民可能是在附近平原拥有土地的农民，在农忙季节上山暂住；也可能是纯粹的牧羊人，随着羊群的迁徙而在此停留。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在19世纪中叶。随着农业现代化和农村人口向城市流失，这种原始而艰苦的生活方式被逐渐抛弃。“博里”们一个接一个地空了，门洞杂草丛生，屋顶偶尔塌陷，慢慢被世人遗忘，归于荒野。直到20世纪60年代，一位名叫皮埃尔·维特的作家兼文化爱好者，像寻宝一样重新发现了这片被森林和灌木半掩的奇迹。他看到了其中超越实用价值的历史与美学意义，并倾尽家财和心血，开始了长达十年的艰苦修复工作。他遵循古老的干砌技艺，一块石头一块石头地将这些濒临湮灭的建筑从坍塌边缘挽救回来。1977年，修复后的戈尔德博里村正式向公众开放，从此，这些沉默的石屋才开始向现代世界讲述它们古老的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略博里村的灵魂，请务必安排一个下午的时光。建议在午后三点左右抵达，这时游览高峰已过，阳光的角度变得柔和，能赋予石墙最动人的光影质感。整体游览时间建议预留至少两小时，节奏一定要慢。这不是一个需要打卡盖章的景点，而是一个需要你用脚步丈量、用手触摸、用心想象的空间。从售票处拿到导览图后，不必严格按图索骥，允许自己在那迷宫般的小径中“迷失”。先在高处俯瞰全景，建立整体印象，然后像探险一样钻进每一个石屋组合，感受空间的转换。留出时间，在日落前坐在某段矮墙上，静静看着光影在金黄色的石头上移动，那是整个体验最精华的部分。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双结实防滑的鞋子，因为小径布满碎石和天然岩石，高跟鞋或凉鞋会非常痛苦且危险。普罗旺斯阳光强烈，即便春秋季也需戴帽子和涂抹防晒霜，村落内几乎没有遮阴处。请绝对不要试图攀爬石屋的墙壁或屋顶，干砌结构虽然稳固但非常脆弱，你的一个脚滑可能就会破坏数百年的平衡。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从入口处的观景平台开始，让自己的目光慢慢扫过整个石屋群错落有致的全景，感受它们与背后辽阔高原浑然一体的气势。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主步道向下，首先探索那几座规模最大、结构最完整的家庭居住单元，弯腰走进低矮的门洞，让眼睛适应内部的昏暗，想象壁炉生火时的烟火气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`像走迷宫一样穿梭在连接各石屋的、由高大石墙围成的狭窄通道里，用手抚摸两侧冰凉的岩壁，听自己的脚步声在其中回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那个带有明显面包烤炉穹顶遗迹的石屋组合，旁边通常还有蓄水池，这里是体会社区生活功能性的关键节点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着小径爬上村落西侧的一处天然石灰岩高地，从这里可以回望石屋群层层叠叠的屋顶，并眺望远方戈尔德村庄的壮观景色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过那些看似杂乱的石堆和倒塌一半的围墙，仔细观察石块的堆叠方式，你能从中解读出建筑技艺的原始逻辑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，绕到村落最边缘的田野处，看看那些将土地分割成小块的、绵延无尽的干砌石墙，这是整个生存系统的延伸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一块平整的石头坐下，就在那片最大的石屋阴影里，什么也不做，只是感受风声、虫鸣和石头在夕阳下慢慢积蓄的余温。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`全景框镜机位`}</h4>
                  <p className="text-sm text-gray-700">{`在入口观景台稍靠右的位置，利用前景的几块天然巨岩作为画框，将整个石屋群落框在中央，远处是高原远景，最佳拍摄时间是下午四点到日落前，侧光让石头纹理立体。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`石屋内部窥探`}</h4>
                  <p className="text-sm text-gray-700">{`选择一座门洞保存完好的大博里，从外部对准黑暗的门洞拍摄，让门口形成自然的暗框，焦点对准洞内深处被一束光照亮的石壁或地面，营造深邃神秘感，正午时分光线最能射入深处。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`几何与光影`}</h4>
                  <p className="text-sm text-gray-700">{`在石屋群密集的区域，寻找一面被夕阳完全照亮、另一面陷入深影的石墙，拍摄其局部特写，突出石头堆叠的几何图案和强烈的明暗对比，下午日落前一小时光影效果最戏剧化。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`生命之痕`}</h4>
                  <p className="text-sm text-gray-700">{`将镜头对准石屋墙缝中顽强生长的野花、地衣或多肉植物，用大光圈虚化背后粗糙的石墙背景，诉说时间与生命共存的诗意，柔和晨光或夕阳光下色彩最温润。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`人居尺度`}</h4>
                  <p className="text-sm text-gray-700">{`请同伴站在一个石屋的门洞内或矮墙边，人物比例要小，用以衬托建筑的原始感和与自然环境的融合，避免摆拍，捕捉其自然走动或凝视远方的瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`充分利用不同时段的侧光和顶光来表现石头表面的质感，阴天时色彩虽灰暗但能获得非常柔和的细节。建议携带一个广角镜头来捕捉建筑群的宏大场面，同时一个定焦镜头有助于捕捉细节和光影小品。注意，使用无人机拍摄在当地可能受到限制，需提前查询最新法规；此外，为保护遗址氛围，通常禁止使用三脚架进行长时间的商业或人像拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山居隐居之选`}</h4>
                  <p className="text-sm text-blue-800">{`戈尔德镇中心边缘一家由17世纪石屋改造的精品民宿，房间拥有原始的石头墙壁和木梁，早餐在种满橄榄树的小庭院进行，老板会给你手绘探索周边秘境的小地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`现代设计之风`}</h4>
                  <p className="text-sm text-green-800">{`位于戈尔德与博里村之间的现代风格设计酒店，拥有全景露台游泳池，直面吕贝隆山谷，在极简舒适的房间里回味古老的石屋印象，形成有趣的时空对话。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`葡萄园中的家`}</h4>
                  <p className="text-sm text-yellow-800">{`开车十分钟可达的塞南克修道院附近，一家家庭经营的葡萄园农庄，提供自酿的桃红葡萄酒和地道家常菜，夜晚安静得只能听到风吹过葡萄叶的沙沙声。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`传奇山庄体验`}</h4>
                  <p className="text-sm text-purple-800">{`直接入住戈尔德镇被誉为“空中之城”的五星级酒店，它本身就是一个建于文艺复兴时期的宏大山庄，在奢华的普罗旺斯风格房间内，俯瞰脚下如画卷般的山谷与远处的博里村遗址。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`戈尔德及周边地区治安良好，但夏季（七月八月）游客极多，住宿价格飙升且一房难求，强烈建议提前三个月以上预订。如果追求宁静，五月下旬、六月或九月初是最理想的时节。选择住宿时，注意是否提供停车位，因为许多古老村庄内的街道狭窄且停车位非常紧张。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开博里村的时候，我的手里仿佛还残留着石头的凉意，但那凉意之下，却有一种奇异的温暖。那不是来自阳光的物理温度，而是一种心理上的慰藉。在这个被智能科技和复杂系统包裹的时代，博里村像一块醒目的、粗砺的补丁，提醒着我们一些最本质的东西：人类曾如何用最少的资源，完成最艰难的生存；如何不依赖任何外在的“粘合剂”，仅凭对材料本性的理解和精妙的力学平衡，就建立起可以矗立数百年的家园。它让我们看到，奢华并非坚固的前提，复杂也非智慧的代名词。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人都应该来这里看看。不仅仅是为了看一片奇特的石头房子，更是为了完成一次心灵的校准。在这里，你会暂时忘记社交媒体上的精修图片和浮华叙事，重新感知重量、平衡、触感与光影这些最原始的信息。你会体会到一种“足够”的哲学——遮风避雨，一室足矣；融入环境，和谐足矣。当夕阳把最后一道金光从蜂巢屋顶上抽走，石屋群重新沉入深蓝色的暮霭，你会感到一种前所未有的平静。因为你知道，你触摸到的不仅是石头，更是时间本身那沉默而坚实的内核。这份触动，远比任何辉煌的宫殿或教堂都更为私人，也更为深远。它关乎起源，也关乎归宿。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/saint-jean-pied-de-port-camino-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣让皮耶德波尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Saint-Jean-Pied-de-Port</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pont-du-gard" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加尔桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pont du Gard</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arles-amphitheatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔勒古罗马竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arles Amphitheatre</p>
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
