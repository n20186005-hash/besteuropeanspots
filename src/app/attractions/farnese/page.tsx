import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '法尔内塞旅游攻略：意大利凝灰岩悬崖上的隐秘迷宫与失落古城探秘指南',
  description: '探索意大利法尔内塞（Farnese）深度游攻略，揭秘这座凝灰岩悬崖上的迷宫小镇与荒凉古城卡斯特罗遗址，一份关于隐秘、历史与徒步的完整指南。',
}

export default function FarnesePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法尔内塞', href: '/attractions/farnese' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`法尔内塞・Farnese・意大利・拉齐奥`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你已经厌倦了罗马和佛罗伦萨的人潮，渴望一点真正“荒野求生”般的意大利体验，那么，今天这份法尔内塞私藏旅游攻略，可能就是为你准备的。车子在拉齐奥大区北部连绵的丘陵间穿行，直到你看见一片巨大的、蜂窝状的凝灰岩悬崖拔地而起，而一座仿佛从中生长出来的石头小镇，正沉默地攀附其上——那就是法尔内塞。它不是什么世界遗产（至少现在还不是），名气远不如那个显赫的“法尔内塞家族”，但正是这份隐秘，让它保留了中世纪时间胶囊般的纯粹。作为你的专属向导，这份自由行指南不仅会带你走进这座三维立体的石头迷宫，更会指向悬崖深处，那片被遗忘、堪称“意大利版马丘比丘”的卡斯特罗遗址。准备好了吗？我们出发。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你已经厌倦了罗马和佛罗伦萨的人潮，渴望一点真正“荒野求生”般的意大利体验，那么，今天这份法尔内塞私藏旅游攻略，可能就是为你准备的。车子在拉齐奥大区北部连绵的丘陵间穿行，直到你看见一片巨大的、蜂窝状的凝灰岩悬崖拔地而起，而一座仿佛从中生长出来的石头小镇，正沉默地攀附其上——那就是法尔内塞。它不是什么世界遗产（至少现在还不是），名气远不如那个显赫的“法尔内塞家族”，但正是这份隐秘，让它保留了中世纪时间胶囊般的纯粹。作为你的专属向导，这份自由行指南不仅会带你走进这座三维立体的石头迷宫，更会指向悬崖深处，那片被遗忘、堪称“意大利版马丘比丘”的卡斯特罗遗址。准备好了吗？我们出发。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`法尔内塞`} />
                <InfoRow label="英文名称" value={`Farnese`} />
                <InfoRow label="正式名称" value={`Farnese`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`拉齐奥`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法尔内塞的历史，是一段关于防御、贵族与隐退的叙事。它的名字与文艺复兴时期那个权倾一时的法尔内塞家族紧密相连（著名的法尔内塞宫就在罗马），这个家族在16世纪取得了这里的统治权，并赋予了小镇名字和最后的辉煌印记。但小镇的根源远早于此。早在中世纪早期，甚至更古远的时代，人们就发现了这片凝灰岩绝壁的天然防御价值。他们在松软的岩石上开凿洞穴、建造壁垒，形成了一个易守难攻的据点。在漫长的中世纪，它一直是教宗国边境上一个重要的战略前哨，在地方豪强的争夺中数次易手。其历史地位的特殊性在于，它并非一个通常意义上的“繁荣古城”，而是一个功能性的、为生存而建的“堡垒聚落”。它的存在，生动诠释了亚平宁半岛中部在教权与世俗权力拉锯战中，那些星罗棋布的防御性社区是如何运作和生活的。当和平年代来临，它的战略意义褪去，便逐渐沉静下来，成为时光遗忘的角落，这份“被遗忘”，恰恰是它最珍贵的历史遗产。`} />
                <InfoRow label="建筑特色" value={`法尔内塞的建筑，与其说是“建造”，不如说是“雕刻”和“生长”。整个小镇就是凝灰岩悬崖的一部分。建筑外墙是那种粗糙的、带着无数气孔的暖黄色岩石本色，几乎没有额外的粉刷，因此你能清晰地看到岩石的肌理。房屋层层叠叠，下一家的屋顶往往是上一家的庭院或小径，构成了一个垂直的、令人晕眩的立体迷宫。巷子窄得惊人，有时仅容一人侧身通过，两侧是高耸的石墙，抬头是“一线天”般的狭窄天空，光线在这里被切割成明暗交替的戏剧性条形。门廊和窗户的框架多是简单的石拱，没有任何多余的装饰。许多建筑直接利用岩壁作为后墙，甚至有些房间就是古老的洞穴改造而成。走在其中，你会不断触摸到冰凉、粗糙的岩壁，空气中弥漫着一种类似潮湿泥土和古老石头混合的、沉静的气味。这里的色彩是单色系的——各种层次的黄、赭石、灰白，只有在阳台上偶尔出现的一盆天竺葵或晾晒的彩色衣物，才会迸发出一点生命的亮色。`} />
                <InfoRow label="建筑风格" value={`你很难用标准的“哥特式”或“巴洛克式”来界定法尔内塞的建筑风格。这里主导的是一种原始的、功能至上的“民间防御建筑”风格，或者说，是“凝灰岩洞穴建筑”的进化体。它的核心逻辑是“适应”与“利用”。建筑完全顺应悬崖的自然形态和凝灰岩易于开凿的特性，因此布局毫无规则，充满有机的随机性。结构上追求坚固和节省空间，所以你看到厚重的石墙、狭小的窗户（为了防御和保温）、以及利用拱券来分散压力。它没有大教堂的飞扶壁，也没有宫殿的华丽立面，它的美在于一种野蛮生长的力量感和与大地融为一体的和谐。如果说文艺复兴建筑是关于比例、人文与展示，那么法尔内塞的建筑则是关于生存、隐匿与实用。这种风格在这里体现得淋漓尽致：街道是防御体系的一部分，房屋是堡垒的延伸，整个聚落本身就是一个巨大的、浑然天成的防御工事。它展示了在资源有限和危机四伏的环境中，人类智慧如何与自然地质条件达成最朴素也最惊人的合作。`} />
                <InfoRow label="文化价值" value={`对于今天不到200人的小镇居民来说，法尔内塞不是博物馆，而是家园。它的文化价值在于一种近乎顽固的“延续性”。时间在这里仿佛被凝灰岩吸收，流速变得极其缓慢。你依然能看到老太太坐在自家门槛上缝补，听到铁匠铺里传来叮叮当当的敲打声（如果幸运的话），闻到从某扇门后飘出的、用古老方法烤制面包的香气。小镇没有为了旅游而进行过度装扮，它坦然接受自己的“落伍”与“偏僻”。这种生活状态本身，就是对全球化、快餐式旅行的一种无声抵抗。对于外来者，法尔内塞和卡斯特罗遗址共同构成了一面镜子，照见文明的脆弱与坚韧。辉煌如罗马也会衰落，一个曾经重要的据点终将荒芜成爬满藤蔓的石头。但同时，人类对家园的眷恋又如此深沉，总有人在祖先的废墟旁，继续点起炊烟。它教会我们以谦卑之心看待历史，并珍惜当下每一刻平凡而坚实的日常生活。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 法尔内塞一日游打卡路线攻略：从迷宫小镇到失落废墟`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`咱们的探索就从清晨开始，赶在日光变得灼热前投入石头的清凉。把车停在小镇入口外的免费停车场（这是第一个贴士！），步行穿过古老的石门“Porta Nuova”。别急着找地图，让自己迷失在蜘蛛网般的小巷里半小时，这是融入法尔内塞的最佳方式。大约十点，目标是小镇最高处的法尔内塞宫（Palazzo Farnese）遗迹和圣天使教堂（Chiesa di Sant‘Angelo）。这里视野开阔，可以俯瞰整个小镇屋顶的波浪和远方无垠的丘陵。中午，回到主广场Piazza Umberto I，在唯一的酒吧兼餐馆喝杯咖啡，尝尝简单但地道的意面。下午是重头戏：徒步前往卡斯特罗（Castro）遗址。从小镇西南角沿着指示牌走下悬崖，这是一条约40分钟、穿梭在林间与荒草中的小径，充满野趣。你将独自面对那座庞大的、被自然吞噬的古城废墟，震撼无以言表。傍晚，循原路返回，在法尔内塞的城墙上找一处地方，静静等待金色的夕阳为这座石头迷宫和远方的废墟披上最后的光辉。这才是完整的一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>凝灰岩迷宫小巷的“瞬间”：</strong> 找一个阳光强烈的午后，拐进一条东西向的窄巷。这时，阳光会像一把金色的刀，斜斜地切入巷子，在粗糙的岩壁上雕刻出锐利的光影分界线。你站在明暗交界处，一半身体温暖，一半身体阴凉。伸手触摸被晒得微热的石头和另一侧冰凉的阴影，能同时感受到时间的两种温度。墙壁上凝灰岩的气孔在侧光下格外清晰，仿佛岩石的呼吸孔，瞬间让你理解这座小镇的生命来源。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>法尔内塞宫残墙上的纹章：</strong> 在高处的宫殿废墟，仔细寻找那些残留的石墙。你会看到虽然风化但依然可辨的法尔内塞家族纹章—— fleur-de-lis（百合花）图案。用手指轻轻拂过那些斑驳的刻痕，想象五百年前，象征着权力与荣耀的标记被高高镌刻于此，俯瞰着家族的领地。如今，荣耀褪去，石墙荒颓，只有纹章和脚下生生不息的野草依旧，这种对比充满了历史的诗意与苍凉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>圣天使教堂内的“寂静”：</strong> 这座小巧的教堂内部出乎意料地简朴，几乎没有任何华丽装饰。但请留意从高处小窗射入的一束光。灰尘在光柱中缓慢飞舞，光线落在古老的石板地上，形成一个晃动的光斑。这里安静得能听到自己的心跳和远处隐约的鸟鸣。这种极致的“空”与“静”，本身具有一种强大的精神力量，让人不由自主地沉静下来，与小镇千百年的祈祷者产生某种联结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>从城墙俯瞰“瓦迪亚诺”山谷：</strong> 一定要走到小镇边缘的城墙处。眼前豁然开朗，脚下是陡峭的悬崖，延伸出去是被称为“Valdiano”的广阔山谷，沟壑纵横，植被茂密，几乎没有现代建筑的痕迹。风毫无阻挡地吹过，带着野草和远方森林的气息。这个视野让你瞬间明白古人选择在此建城的全部理由——绝对的掌控感与孤独感并存。你会感觉自己正站在世界的边缘，守望着一片被时光封存的绿色海洋。" }} />
            </div>
          </Section>

          <Section title={`5. 法尔内塞自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>最佳时间与交通警告：</strong> 绝对避免盛夏正午徒步去卡斯特罗遗址，毫无遮阴，易中暑。最佳游览季节是春（4-5月）秋（9-10月），气候宜人，野花盛开或秋色绚烂。小镇不通火车，<strong>必须自驾</strong>。从维泰博（Viterbo）或格拉多利（Gradoli）方向过来的山路弯多路窄，驾驶需谨慎。GPS信号在山区可能不稳定，建议提前下载离线地图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与装备是成败关键：</strong> 忘记时尚的皮鞋或凉鞋！<strong>必须穿防滑、支撑性好的徒步鞋或运动鞋</strong>。小镇石板路常年潮湿光滑，前往卡斯特罗的下山小径布满碎石和浮土，极易滑倒。衣服选择便于活动的长裤，防止刮伤。<strong>务必带上充足的饮用水、少量能量零食、防晒霜、帽子和一支小手电筒</strong>（探索卡斯特罗废墟的某些洞穴或室内空间时有用）。手机充电宝也请备好。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>避开“人流”与安全须知：</strong> 这里永远不会有罗马那样的人流，但周末下午可能偶有零星游客。想获得最孤独的体验，建议工作日前往，并在上午较早或下午较晚时分开车到达。小镇居民非常友好，但卡斯特罗遗址完全荒芜，<strong>强烈建议结伴前往，并告知餐馆或酒吧老板你的徒步计划</strong>。废墟结构不稳定，切勿攀爬高墙或进入看起来危险的洞穴。贵重物品随身带好，不过在这种地方，你更需要防备的是崎岖的地形，而不是小偷。" }} />
            </div>
          </Section>

          <Section title={`6. 法尔内塞周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想在法尔内塞过夜，需要放下对豪华酒店的期待，拥抱真正的乡村民宿体验。小镇内有几家由老房子改造的“Affittacamere”（家庭旅馆），比如“La Casa sul Tufo”（凝灰岩之家），房间简单干净，推开窗就是悬崖景观，主人可能会请你喝杯自酿的家酿酒。更推荐住在车程15分钟内的周边小镇，如<strong>格拉多利（Gradoli）</strong> 或 <strong> Latera</strong>，选择稍多，性价比高，且同样宁静迷人。餐饮方面，法尔内塞广场上的酒吧餐馆是唯一的选择，但千万别小看它。一定要试试当地的“<strong>Pasta al Sugo di Cinghiale</strong>”（野猪肉酱意面），肉酱浓郁粗犷，带着野性的香气。如果菜单上有，<strong>Funghi Porcini</strong>（牛肝菌）相关的任何菜肴也是秋季不容错过的时令美味。搭配本地产的“<strong>Est! Est!! Est!!! di Montefiascone</strong>”白葡萄酒，清爽解腻。简单一餐，坐在广场上看着寥寥几个本地人聊天，便是最地道的意大利乡村生活图景。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>博尔塞纳湖（Lago di Bolsena）：</strong> 从法尔内塞驾车约25分钟，欧洲最大的火山湖突然映入眼帘，湖水湛蓝清澈得像宝石。湖畔小镇<strong>博尔塞纳（Bolsena）</strong> 本身就很美，可以在湖边散步、游泳（夏季），参观中世纪城堡和圣克里斯蒂娜大教堂。与凝灰岩的粗粝荒凉形成鲜明对比，这里是水润柔和的。在湖边吃一顿以湖鱼（如白斑狗鱼）为主菜的午餐，是为法尔内塞探险画上的完美休止符。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>死亡之城（Civita di Bagnoregio）：</strong> 如果你被法尔内塞的悬崖小镇景观震撼，那么不妨驱车一小时左右，去看看更著名（但也更多人）的“天空之城”。虽然旅游气息浓很多，但那座通过长桥与世隔绝、正在不断消亡的古城，能让你从另一个角度理解凝灰岩地貌上人类聚落的命运，与法尔内塞形成有趣的互文。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "法尔内塞的灵魂，不在于某座辉煌的建筑，而在于一种整体的“场域”——那是凝灰岩的呼吸，是迷宫小巷里光与影的追逐游戏，是废墟上呼啸而过的风所讲述的、关于崛起与湮灭的永恒故事。它提醒我们，有些地方的存在，不是为了被瞻仰，而是为了被感受；有些旅程的终点，不是获取知识，而是收获一片寂静与苍茫，足以安放现代生活中所有无处安放的喧嚣与疲惫。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/brisighella-hilltown" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布里西盖拉（驴子巷与三座山峰）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brisighella</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/martina-franca" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马丁纳弗兰卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Martina Franca</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monte-isola-lake-iseo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙特伊索拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monte Isola</p>
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
