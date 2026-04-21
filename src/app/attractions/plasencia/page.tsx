import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普拉森西亚深度旅游攻略：探秘双子大教堂与千年城墙的自由行指南',
  description: '探索西班牙普拉森西亚(Plasencia)，一份包含双子大教堂、壮丽城墙的深度游攻略。涵盖一日游路线、小众打卡点与避坑指南，开启你的埃斯特雷马杜拉古城之旅。',
}

export default function PlasenciaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '埃斯特雷马杜拉', href: '/destinations/europe' },
            { label: '普拉森西亚', href: '/attractions/plasencia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普拉森西亚・Plasencia・西班牙・埃斯特雷马杜拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友！如果你已经看腻了西班牙那些游客摩肩接踵的大城市，今天这份**普拉森西亚私藏旅游攻略**，就是为你准备的。它像一颗被时光轻轻包裹的琥珀，藏在埃斯特雷马杜拉北部的山谷里。这里没有马德里的喧嚣，也没有巴塞罗那的时髦，但它拥有一件全欧洲都罕见的“双生宝物”——两座紧紧依偎、却风格迥异的“双子大教堂”，以及一圈让你瞬间穿越到中世纪的、保存完好的巨石防御城墙。作为你的专属向导，这份**自由行指南**将带你走进这座冷门却震撼的古城，告诉你如何避开无谓的弯路，用一天时间，捕捉到它最精髓的灵魂。准备好了吗？我们的时光漫步，就从那扇古老的城门开始。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友！如果你已经看腻了西班牙那些游客摩肩接踵的大城市，今天这份<strong>普拉森西亚私藏旅游攻略</strong>，就是为你准备的。它像一颗被时光轻轻包裹的琥珀，藏在埃斯特雷马杜拉北部的山谷里。这里没有马德里的喧嚣，也没有巴塞罗那的时髦，但它拥有一件全欧洲都罕见的“双生宝物”——两座紧紧依偎、却风格迥异的“双子大教堂”，以及一圈让你瞬间穿越到中世纪的、保存完好的巨石防御城墙。作为你的专属向导，这份<strong>自由行指南</strong>将带你走进这座冷门却震撼的古城，告诉你如何避开无谓的弯路，用一天时间，捕捉到它最精髓的灵魂。准备好了吗？我们的时光漫步，就从那扇古老的城门开始。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普拉森西亚`} />
                <InfoRow label="英文名称" value={`Plasencia`} />
                <InfoRow label="正式名称" value={`Plasencia`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`埃斯特雷马杜拉`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`普拉森西亚的故事，是一部写在石头上的边境史诗。公元1186年，为了巩固基督教王国对抗南方摩尔人政权的防线，国王阿方索八世亲自下令在此建城，“为了神的和平与人类的安宁”——城市的格言至今诉说着它的出身。它从一开始就是一座“矛尖上的城市”，一个至关重要的军事与宗教前哨。这种双重身份，深刻地烙印在它的肌理中。宏伟的城墙不仅是防御工事，更是权力与秩序的象征。而城市的核心——大教堂的建设，更是一场跨越几个世纪的信仰接力赛。最初建于13世纪的罗曼式教堂，到了16世纪，随着财富与自信的增长，人们决定在旁边兴建一座更宏伟、更华丽的哥特式新堂。然而，资金中断、时代变迁，新堂未能完全取代旧堂，于是形成了两座教堂奇迹般地**长在一起**的奇观。这种“未完成”的状态，恰恰成为了普拉森西亚独一无二的历史勋章，生动记录了从收复失地运动的严峻到文艺复兴时期繁荣的完整历程。`} />
                <InfoRow label="建筑特色" value={`走近普拉森西亚的大教堂，你会经历一场时空折叠般的视觉震撼。它的西立面是两种力量、两种美学的直接对话。左侧，是**旧教堂（Catedral Vieja）** 的罗曼式立面，敦实、厚重，由暖黄色的砂岩砌成，线条简洁而有力，像一个沉默寡言、历经风霜的老兵。它的玫瑰窗不大，却深邃。而紧挨着它的右侧，是**新教堂（Catedral Nueva）** 的哥特式立面，瞬间将你拉入一个繁复瑰丽的梦境。银灰色花岗岩雕刻的屏风墙（Plateresque风格，西班牙特有的银匠式）精美得令人窒息——层层叠叠的壁龛里立着圣徒雕像，细致的蔓藤花纹爬满柱头，中央门楣上的浮雕讲述着圣经故事。阳光照射下，两种石材反射出截然不同的光泽：黄砂岩温暖柔和，灰花岗岩冷峻闪耀。最奇妙的是，它们并非独立建筑，而是共用墙体、共享空间，你甚至可以从一座教堂的内部，直接走进另一座的殿宇，这种毫无过渡的拼接，本身就是建筑史上最大胆、最浪漫的宣言。`} />
                <InfoRow label="建筑风格" value={`在这里，你可以一堂课学懂两种欧洲核心建筑风格。**罗曼式（Románico）** 体现在旧教堂：走进内部，你会看到典型的简拱和十字拱顶，由粗壮的低矮圆柱支撑。窗户小而高，光线幽暗，营造出一种内省、坚固、近乎堡垒般的安全感，这完全符合它建于边境战争年代的气质——信仰首先是需要被保护的要塞。而**哥特式（Gótico）** 在新教堂得到了华丽绽放。高高的肋状拱顶如石制树枝般在头顶伸展，试图触碰天国。巨大的彩色玻璃窗（尽管部分未完成）一旦有阳光透入，便会在地上投下斑斓光影。尤其是唱诗班席位（Coro），那些胡桃木雕刻的座位堪称鬼斧神工，充满了动态的人物和故事场景，是西班牙晚期哥特式木雕的巅峰之作。这种风格的并置，不是博物馆里的标本对照，而是活生生的、长在一体的生长痕迹。旧堂的敦实是新堂飞扬的基石，新堂的华美是旧堂朴素愿景的升华，它们共同完成了对“神圣空间”的完整叙述。`} />
                <InfoRow label="文化价值" value={`对于普拉森西亚人来说，双子大教堂不是景点，而是他们生活的广场、精神的基石和身份的源头。周日早晨，弥撒的钟声依旧从这两座合一的钟楼里响起，回荡在狭窄的街巷。当地的孩子们在城墙边的空地上踢球，老人们坐在阳光下的长椅上，背靠的便是近千年的巨石。这座城市没有将历史“供奉”起来，而是让它呼吸、让它磨损、让它成为日常的一部分。每年盛大的“中世纪市集”，全城居民会穿上古装，在城墙和教堂广场前重现旧日时光，那不是表演给游客看的，而是一场集体的记忆狂欢。更深刻的是，这种“双重性”（军事与宗教、朴素与华丽、过去与现在）塑造了当地人的性格——既坚韧务实（像罗曼式城墙），又热情奔放，懂得享受生活（像哥特式雕花）。大教堂的“未完成”，在哲学层面上也成为一种隐喻：历史从未终结，文化始终在生长和对话之中。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 普拉森西亚古城一日游路线打卡攻略：从城墙到大教堂的完美动线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`小众深度游经典路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我建议你把一天中最柔和的晨光留给城墙。**上午**，从标志性的 **“太阳门”（Puerta del Sol）** 进入古城，立刻右转上城墙步道（Adarve）。这是一段近乎完整的环形漫步，你可以触摸冰凉的巨石，从垛口俯瞰红瓦屋顶的海洋和远方的群山。沿着城墙走到**“墨水瓶塔”（Torre del Tinte）**，从这里下来，顺势钻进迷宫般的老城区，目标是**主广场（Plaza Mayor）**。广场上的文艺复兴风格市政厅很漂亮，在这里的露天咖啡馆喝杯咖啡，看着当地人的生活缓缓铺开。**中午**，从广场步行3分钟，抵达今日重头戏——**普拉森西亚大教堂**。至少预留2小时，先绕外部一圈，感受双子立面的震撼对比，再从新教堂的正门进入，慢慢欣赏。记得一定要去看旧教堂的回廊（Claustro），那里有幽静的古井和罗马式拱廊，是闹市中的一片净土。**下午**，从教堂后门溜达出来，探索**犹太区（Judería）** 的安静小巷，寻找那些隐蔽的古老门廊。然后，可以朝着**“河流之门”（Puerta de la Rivera）** 方向散步，那里有座古老的石桥，是拍摄城墙全景的绝佳位置。**傍晚**，回到城墙之上，在“忠诚之门”（Puerta de la Lealtad）附近，等待夕阳为整座石头古城镀上金边，为这一天画上史诗般的句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>大教堂西立面雕像的“对视”</strong>：站在广场上仰望新教堂的哥特式立面，不要只看整体。仔细看中央壁龛里那些圣人雕像。他们的面容并非千篇一律的肃穆，雕刻家赋予了他们近乎人性的表情。特别是圣母玛利亚像下方的一位先知，他的眼神微微侧向，仿佛正与旁边旧教堂罗曼式墙面上某个简朴的几何装饰进行着一场跨越三百年的沉默对话。一繁一简，一灵动一沉静，在这咫尺之间，你能读到一部浓缩的欧洲艺术史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>旧教堂回廊的“井与光”</strong>：走进旧教堂的回廊，时间仿佛慢了下来。这是一个四方形的封闭空间，中央有一口古老的石井。正午时分，阳光从二层精致的哥特式连廊窗户斜射进来，在砂岩石板地上拉出长长的、明暗交替的光栅。光柱中尘埃飞舞，寂静中只能听到隐约的滴水声（来自那口井）和远处新教堂飘来的管风琴试音。这个角落是整座喧嚣大教堂的“冥想室”，光影在罗马式敦实的柱子上移动，让你瞬间理解何为“沉思的建筑”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>城墙“墨水瓶塔”的触感</strong>：当你漫步在城墙顶部的步道（Adarve）时，走到“墨水瓶塔”附近，一定要停下来，用手掌贴一下内侧的墙壁。这些石头并非光滑的，上面布满了细微的凿痕、风化的孔洞，甚至可能有一小块褪色的彩绘痕迹。数百年前，士兵就在这里巡逻，或许某个无聊的守卫用匕首刻下过什么。冰冷的触感下，是无数个日夜的温度积累。从垛口望出去，视野一边是城内层层叠叠的陶瓦屋顶和教堂尖顶，另一边是城外绿色的河谷与远山——这就是守卫者眼中的世界，防御与生活，紧张与宁静，在这一瞥中合二为一。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>最佳时间与“温度陷阱”</strong>：埃斯特雷马杜拉是西班牙内陆，<strong>夏季（7-8月）非常炎热</strong>，白天古城石板地反射的热浪会让你游览兴致大减。强烈推荐<strong>春秋两季（4-6月，9-10月）</strong>，天气晴朗温暖，光影极美。冬天虽然冷，但游客极少，更有苍凉的古意。大教堂内部比较阴凉，但中午城墙暴晒无遮挡，请务必根据季节做好防晒或保暖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与行走建议</strong>：古城内几乎全是<strong>鹅卵石街道和上下坡</strong>！请务必、务必穿一双舒适防滑的平底鞋，高跟鞋在这里是“刑具”。参观大教堂内部时，穿着需得体（避免过于暴露的背心、短裤），虽然不一定严格拦截，但这是基本的尊重。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>避开人流与门票攻略</strong>：普拉森西亚本身不算大众，但<strong>周末和节假日</strong>本地游客会增多。大教堂<strong>最清净的时段是工作日的上午一开门或中午稍晚</strong>。教堂参观通常需要购买门票（包含旧教堂回廊、博物馆等联票），但部分区域在弥撒时间（通常是周日早晨）不对外开放。建议行前查看官网最新开放时间。<strong>城墙步道是免费开放的</strong>，这是一个巨大优势，可以随时上去走走。" }} />
            </div>
          </Section>

          <Section title={`6. 普拉森西亚周边住宿与美食攻略：住在古城里的温馨推荐`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想获得最沉浸的体验，建议<strong>住在古城墙内的老城区</strong>。这里有几家由古老宅邸改建的精品酒店（Parador）或家庭旅馆，石头墙壁、木梁屋顶，设施却现代舒适，晚上听着寂静的古城入睡，感觉非凡。如果预算有限，城墙外也有不少性价比高的现代酒店，步行进城也就10分钟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "餐饮是另一大享受。埃斯特雷马杜拉是西班牙顶级<strong>伊比利亚火腿（Jamón Ibérico）</strong> 的产地，找一家本地人多的酒吧，点一盘现切的火腿，配一杯当地产的<strong>红葡萄酒</strong>，就是天堂滋味。一定要试试 <strong>“Migas Extremeñas”</strong>（用面包屑、猪肉、辣椒等炒制的农家菜，香气扑鼻）和 <strong>“Torta del Casar”</strong>（一种流心的绵羊奶酪，用勺子舀着吃，浓郁到上头）。推荐去主广场附近的小巷里寻找餐厅，比如 <strong>“Restaurante El Fogón de la Monja”</strong>，尝尝他们的传统炖菜和创新Tapas。简单一顿的话，任何酒吧的“今日菜单”（Menú del Día）都物超所值。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果时间充裕，强烈推荐你花半天时间去<strong>蒙弗拉格国家公园（Parque Nacional de Monfragüe）</strong>。它距离普拉森西亚只有约30分钟车程，是欧洲最重要的猛禽观测地之一。这里与石头古城是截然不同的世界：开阔的地中海丛林、巨大的石英岩山崖、蜿蜒的塔霍河。你可以看到成群的黑鹫、西班牙帝雕在天空盘旋。站在“盐城城堡”（Castillo de Monfragüe）的遗迹上，眼前是原始狂野的自然，回头是来时路上的人文堡垒，这种强烈的对比会让你对埃斯特雷马杜拉这片土地的理解更加完整和深刻。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普拉森西亚的灵魂，就藏在“双子”的隐喻里——它是岩石的坚韧与雕刻的柔美共生，是战争的记忆与和平的日常交融，是未完成的遗憾与已永恒的壮丽并存。这座城市教会你的，不是单一的历史片段，而是一种容纳矛盾、让时光层层沉淀的生长哲学。当你最终离开，回望那在夕阳下连成一体的两座教堂尖顶和沉默的城墙，你会明白，有些地方，它的伟大不在于完美，而在于那份真实、复杂而动人的“未完成”。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/san-lorenzo-de-el-escorial-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣洛伦索-德埃尔埃斯科里亚尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">San Lorenzo de El Escorial</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monastery-of-ucles" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌克莱斯修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monastery of Uclés</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/villanueva-de-los-infantes" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    比
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">比利亚努埃瓦-德洛斯因凡特斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Villanueva de los Infantes</p>
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
