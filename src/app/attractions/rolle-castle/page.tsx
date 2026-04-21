import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '罗尔城堡深度旅游攻略：日内瓦湖畔的中世纪古堡与蔚蓝港湾漫步指南',
  description: '探索瑞士罗尔城堡Rolle Castle深度游攻略。这座13世纪三角形城堡坐落于沃州，拥有绝美回廊内院与人工避波堤（避风岛）。本文提供详细打卡路线、避坑指南及周边探索，带你领略湖畔中世纪风情。',
}

export default function RolleCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瑞士', href: '/destinations/switzerland' },
            { label: '沃州', href: '/destinations/switzerland' },
            { label: '罗尔城堡（罗尔镇）', href: '/attractions/rolle-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`罗尔城堡（罗尔镇）・Château de Rolle (Town of Rolle)・瑞士・沃州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，如果你正在规划一场避开卢塞恩和因特拉肯人潮的瑞士之旅，那今天这份罗尔城堡私藏旅游攻略，请你一定收好。它不在旅行团的热门名单上，却静静卧在日内瓦湖北岸，罗尔小镇的湖边。想象一下：一座有着锐利三角形轮廓的赭石色城堡，直接建在水边，它身后不是山，而是一个由巨大石块垒成的人工避风港，帆船的桅杆在它旁边轻轻摇晃。作为你的专属向导，这份自由行指南将带你深入城堡那宁静得能听见自己脚步声的内院，告诉你最佳拍照角度，以及如何像本地人一样，在避风岛的防波堤上等待一场玫瑰色的日落。这不仅仅是一个景点，更是一段关于湖水、石头与时间的中世纪叙事诗。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，如果你正在规划一场避开卢塞恩和因特拉肯人潮的瑞士之旅，那今天这份罗尔城堡私藏旅游攻略，请你一定收好。它不在旅行团的热门名单上，却静静卧在日内瓦湖北岸，罗尔小镇的湖边。想象一下：一座有着锐利三角形轮廓的赭石色城堡，直接建在水边，它身后不是山，而是一个由巨大石块垒成的人工避风港，帆船的桅杆在它旁边轻轻摇晃。作为你的专属向导，这份自由行指南将带你深入城堡那宁静得能听见自己脚步声的内院，告诉你最佳拍照角度，以及如何像本地人一样，在避风岛的防波堤上等待一场玫瑰色的日落。这不仅仅是一个景点，更是一段关于湖水、石头与时间的中世纪叙事诗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`罗尔城堡（罗尔镇）`} />
                <InfoRow label="英文名称" value={`Château de Rolle (Town of Rolle)`} />
                <InfoRow label="正式名称" value={`Château de Rolle (Town of Rolle)`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`沃州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`罗尔城堡的故事，始于13世纪下半叶，大约1260年至1280年间。下令建造它的，是当时势力强大的萨伏伊家族。你要知道，萨伏伊家族那时正沿着日内瓦湖两岸大力修建城堡群，以巩固其贸易路线和军事控制，罗尔城堡就是这条“湖畔项链”上至关重要的一颗宝石。它最初的定位非常明确：一个坚固的湖边要塞兼行政中心。三角形的设计绝非为了美观，而是纯粹的军事考量——这种形状能最大化地利用临湖的狭长地带，并减少受攻击的墙面面积。在萨伏伊家族统治时期，它见证了湖畔的权力博弈。到了1536年，伯尔尼人征服了沃州，城堡也随之易主，成为伯尔尼行政长官的官邸。这段时期，它从纯粹的军事堡垒，逐渐增添了行政管理的功能。法国大革命后，它几经转手，最终在19世纪被私人家族购得。正是这种从要塞到官邸，再到私宅的变迁，让它躲过了大规模改建，将其中世纪的核心结构和那份孤悬湖边的独特气质，近乎完整地保存至今，成为研究萨伏伊时期湖畔防御建筑的活化石。`} />
                <InfoRow label="建筑特色" value={`第一眼看到罗尔城堡，你一定会被它独特的三角形平面震撼。它不是我们想象中四四方方的城堡，而像一艘巨大的、石制的船头，倔强地楔入日内瓦湖的蓝波之中。建筑主体用的是当地的石灰华石，呈现出一种温暖的赭黄色，在阳光下显得格外柔和，与冰冷的湖水和湛蓝的天空形成绝妙的色彩对比。面向陆地的一侧，城墙高大厚实，开窗极小，透着防御的威严；而朝向湖面的那一侧，窗户则相对更大，仿佛城堡也在贪婪地欣赏湖景。最精彩的部分，是当你穿过低矮的门洞，进入内院的那一刻。你会瞬间置身于一个被三层楼高的回廊包围的静谧空间。回廊是简单的圆拱结构，柱头没有繁复的雕刻，只有岁月打磨的光滑痕迹。阳光从拱廊斜射进来，在古老的石板地上画出规律的光斑，空气里是石头和旧木料混合的、干燥而安宁的气味。抬头看，城堡的三角形尖顶框出一片完整的天空，偶尔有海鸥飞过，留下一声清鸣。这种从外部雄浑到内部宁静的强烈对比，是建筑给你的第一份礼物。`} />
                <InfoRow label="建筑风格" value={`罗尔城堡是萨伏伊军事建筑风格 与早期哥特式民用元素结合的典范。萨伏伊风格最显著的特点就是务实和防御性优先，这完美体现在它那标志性的三角形布局和厚重的墙体上。整个城堡的构造逻辑清晰得像一个数学公式：用最少的墙面围出最大的空间，并将最脆弱的角度对准湖中（因为来自湖面的攻击威胁较小）。然而，它并非一个冷酷的兵营。在内院回廊的设计上，你可以看到早期哥特式的轻盈身影。那些连续的圆拱廊，虽然简洁，但比例的优雅和序列的节奏感，已经透露出超越纯粹功能性的美学追求，为这个防御空间注入了居住的尊严和宁静感。同时，城堡后期（伯尔尼统治时期及以后）加建或改造的部分，如某些窗户的尺寸扩大，又悄然融入了些许文艺复兴时期注重采光和视野的理念。所以，它就像一本立体的建筑史书，不同时代的层理清晰可辨，但主导的基调始终是13世纪那种质朴、坚固、与地形紧密结合的萨伏伊风骨。`} />
                <InfoRow label="文化价值" value={`对于罗尔镇的居民来说，这座城堡早已不是昔日的权力象征，而是融入了日常生活的背景与骄傲。它是镇子的心脏和地标，是明信片上的绝对主角。城堡的私人所有权（它至今仍是私人住宅）为其增添了一份神秘感，而它向公众开放的部分（主要是内院和某些特定展览时段）又维系着它与社区的连接。它时刻提醒着人们这片土地曾属于强大的萨伏伊王朝，以及后来伯尔尼共和国的治理历史。更重要的是，城堡与那个人工避风港（当地人常称它为“避风岛”）共同构成了一个完美的湖畔文化景观。这里是小镇节庆活动的天然舞台，夏日的音乐会、圣诞市场都可能以此为背景。它定义了罗尔的天际线和精神气质——一种在瑞士法语区特有的、将历史的厚重与湖畔生活的闲适完美结合的气质。它告诉每一位来访者，瑞士不止有雪山和齿轮火车，还有这般波光粼粼、充满南欧风情的历史角落。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 罗尔城堡一日游打卡路线攻略：从古堡内院到避风岛日落`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行漫步路线推荐`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`听我的，把一整个白天留给罗尔，节奏慢下来才对味。上午（10点-12点）：坐火车到“Rolle”站，下车后别急着直奔城堡，先沿着小镇的主街慢悠悠逛过去，感受一下这个干净又安宁的湖边小镇。大约步行10分钟，城堡就会出现在你眼前。先去参观城堡内部（如果开放）或重点沉浸在那个绝美的内院，光影最好的时候就在上午。中午（12点-1点半）：千万别在景区旁将就！从城堡步行2分钟，到湖滨长廊，找一家有露天座位的餐厅，点一份日内瓦湖的鲜鱼（比如鲈鱼Filets de perche），对着湖光山色吃午餐，这才是正确打开方式。下午（1点半-5点）：饭后散步的重头戏——探索人工避风岛。沿着长长的防波堤走到尽头，从湖中央回望城堡，这个角度无敌。你可以在堤坝上坐着发呆，看天鹅和帆船。如果精力充沛，可以租条小船在港湾里划一划。然后绕到城堡背面和罗尔镇的老街区走走。傍晚（5点以后）：等待日落。避风岛的西侧是欣赏日内瓦湖日落黄金时刻的绝佳位置，看着城堡的轮廓逐渐变成剪影，天空染上粉紫色，这一天就圆满了。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  内院的光影游戏：一定要在晴天的上午走进内院。那时阳光以一个倾斜的角度穿过三层拱廊，在深灰色的石板地上投下明暗相间、极具几何美感的光带。找一根表面被磨得发亮的砂岩柱，用手触摸，你能感觉到数百年来无数人依靠留下的温润。静静地站一会儿，听脚步声在回廊间产生的轻微回声，混合着远处湖浪的拍岸声，那种穿越时空的宁静感会瞬间将你包裹。这是罗尔城堡深度游最核心的体验。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  避风岛的防波堤视角：走上那条用巨大块石砌成的长长防波堤（它构成了避风岛的外缘）。当你走到最外端，转过身来，你会看到整个罗尔城堡和小镇以最完美的构图展现在你面前：城堡在左，尖顶的教堂在右，色彩柔和的房屋层层叠叠向后延伸，背后是拉沃葡萄园梯田朦胧的远山。这个视角下，城堡与湖泊、人类工程与自然风光的关系被诠释得淋漓尽致，是打卡攻略里必须拥有的封面照。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  塔楼顶的湖光山色：如果城堡的主塔楼对外开放，务必登顶。攀登狭窄的螺旋石梯本身就是一种体验。登上顶端后，360度的全景扑面而来。向东，可以遥望洛桑和湖对岸的法国埃维昂莱班；向西，尼永和更远处的汝拉山脉清晰可见。俯瞰脚下，你会发现城堡的三角形结构与避风港的几何形状形成了一个巧妙的组合，宛如一个精心设计的沙盘模型。这里是理解城堡战略地理位置的最佳课堂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  港口边的“蓝调时刻”：日落之后，天完全黑透之前，有一段魔法般的“蓝调时刻”。这时，城堡和港口的灯光渐次亮起，倒映在漆黑如墨却平滑如镜的湖面上。港口的酒吧传来隐隐的欢谈声和酒杯碰撞的清脆响声。空气中带着夜晚的凉意和水汽。找个长椅坐下，你会看到归航的游艇静静驶入港湾，桅杆上的灯光像移动的星星。这一刻，中世纪堡垒的孤寂感完全消散，取而代之的是属于当下的人间烟火与诗意，这往往是旅行中最难忘的片段。`}</p>
            </div>
          </Section>

          <Section title={`5. 罗尔城堡自由行避坑指南与行前关键贴士`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  开放时间与“闭门羹”：这是最大的“坑”！罗尔城堡是私人住宅，内部（居住区域）并不常年对公众开放。通常，内院（Cour）可以自由进入参观，但主楼内部只在特定的文化遗产日（如欧洲遗产日，通常是9月的某个周末）或偶尔举办展览时才开放。行前务必在旅游局官网或当地信息牌确认，别白跑一趟。不过别灰心，仅那个内院和外部景观就绝对值得一来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与防晒：游览路线主要在户外，防波堤上毫无遮挡。日内瓦湖区的阳光非常强烈，加上湖面反射，务必戴上帽子、墨镜，涂抹高倍数防晒霜。同时，湖边的风可能比你想象的大，尤其下午在防波堤上，一件防风外套非常必要。鞋子一定要舒适，石板路和防波堤的石头路都不太好走。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与时间预留：从日内瓦坐火车到罗尔约30-40分钟，从洛桑过来约15-20分钟，非常方便。使用瑞士旅行通票（Swiss Travel Pass）完全覆盖。但要注意火车班次，尤其是返程的末班车时间。别为了赶火车而错过日落，提前查好时刻表。小镇不大，全程步行即可，无需其他交通工具。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  用餐与消费：湖边餐厅景色绝佳，但价格也相对较高。如果预算有限，可以考虑在主街上找家面包店买三明治，带到湖边公园野餐，同样享受湖景。小镇的商店和餐厅傍晚关门较早，周日许多店铺休息，请提前规划好购物和用餐。`}</p>
            </div>
          </Section>

          <Section title={`6. 罗尔城堡周边住宿与湖畔美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`虽然罗尔镇不大，但作为精致的湖畔小镇，不乏舒适的住宿选择。如果你想沉浸式体验，可以考虑镇上的Hôtel-Restaurant de la Prairie，它距离城堡和湖边都只有几分钟路程，房间风格温馨，有些房间还带有能看到湖景的小阳台，性价比很高。餐饮方面，湖边长廊上的Le Port餐厅是经典之选。坐在露台上，必点当地招牌的日内瓦湖鲈鱼片（Filets de perche），通常配以柠檬和杏仁片煎制，鱼肉鲜嫩无比。再配上一杯来自旁边拉沃葡萄园的沙斯拉白葡萄酒，湖风拂面，这就是最地道的沃州味道。如果想更随性一点，港口边的Le Pirate酒吧咖啡馆，是当地人喝一杯、看船来船往的热门地点，气氛轻松活泼。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`罗尔地处沃州“里维埃拉”黄金地段，周边宝藏小镇众多。我强烈推荐你乘火车（仅需5分钟）或沿着美丽的湖滨步道散步（约1小时）前往西边的拉科特（La Côte）地区的核心小镇尼永（Nyon）。尼永拥有另一座壮观的湖畔城堡——尼永城堡，现在是历史博物馆和瓷器博物馆，视野极佳。它的老城区布满喷泉和画廊，比罗尔更热闹一些。另一个方向，向东坐火车几分钟，就可以到达莫尔日（Morges），它以春天的郁金香节和优雅的湖畔公园闻名。这两个小镇与罗尔风格略有不同，将它们串联起来，你就能更全面地感受到日内瓦湖北岸这条历史文化与自然风光交织的迷人走廊的魅力。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`罗尔的灵魂，在于那道清晰的边界：一边是坚固、沉默、指向历史深处的三角形石堡，另一边是温柔、开阔、承载着当下所有闲情逸致的蔚蓝湖湾。它教会你，旅行的深度不在于打卡的数量，而在于像这样，找到一个地方，安静地坐下，看时光在石头上留下的痕迹，如何被永恒的湖水轻轻拍打，直至融为一体。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/abbey-of-saint-maurice-switzerland" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣莫里斯修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Abbey of Saint-Maurice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pontresina-traditional-sgraffito-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蓬
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蓬特雷西纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pontresina</p>
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
