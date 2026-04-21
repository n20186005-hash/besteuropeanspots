import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯韦特温切纳特旅游攻略：探秘伊斯特拉半岛袖珍村的庞大文艺复兴城堡',
  description: '本份Svetvinčenat深度游攻略，带你走进克罗地亚伊斯特拉的心脏，解锁那座与袖珍村落形成奇幻对比的莫罗西尼-格里马尼城堡，提供一站式自由行指南。',
}

export default function SvetinjPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '克罗地亚', href: '/destinations/europe' },
            { label: '伊斯特拉县', href: '/destinations/europe' },
            { label: '斯韦特温切纳特', href: '/attractions/svetinj' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯韦特温切纳特・Svetvinčenat・克罗地亚・伊斯特拉县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下：你开车穿梭在克罗地亚伊斯特拉半岛连绵的丘陵、葡萄园和松林之间，导航提示你即将到达目的地。你放缓车速，心里嘀咕着这又是一个宁静的小村庄。但当一个完美的方形轮廓，带着文艺复兴时期特有的那种庄严与和谐，毫无征兆地、巨大地占满你的整个视野时，你一定会像我一样，忍不住“哇”出声来。这就是斯韦特温切纳特给你的第一个，也是最震撼的礼物——一个袖珍到几分钟就能走完的村落，却拥抱着一座庞大、完整、如模型般规整的文艺复兴城堡。这份私藏旅游攻略，就是带你躲开人潮，沉浸在这极致反差带来的魔幻感里。我会是你的专属向导，告诉你如何用一天时间，读懂这座城堡的每一个石头故事，并享受广场上那份被时光遗忘的宁静。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，想象一下：你开车穿梭在克罗地亚伊斯特拉半岛连绵的丘陵、葡萄园和松林之间，导航提示你即将到达目的地。你放缓车速，心里嘀咕着这又是一个宁静的小村庄。但当一个完美的方形轮廓，带着文艺复兴时期特有的那种庄严与和谐，毫无征兆地、巨大地占满你的整个视野时，你一定会像我一样，忍不住“哇”出声来。这就是斯韦特温切纳特给你的第一个，也是最震撼的礼物——一个袖珍到几分钟就能走完的村落，却拥抱着一座庞大、完整、如模型般规整的文艺复兴城堡。这份私藏旅游攻略，就是带你躲开人潮，沉浸在这极致反差带来的魔幻感里。我会是你的专属向导，告诉你如何用一天时间，读懂这座城堡的每一个石头故事，并享受广场上那份被时光遗忘的宁静。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯韦特温切纳特`} />
                <InfoRow label="英文名称" value={`Svetvinčenat`} />
                <InfoRow label="正式名称" value={`Svetvinčenat`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`伊斯特拉县`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯韦特温切纳特的历史，是一部浓缩的伊斯特拉半岛权力争夺史。我们现在看到的这座宏伟城堡，它的名字——莫罗西尼-格里马尼城堡，就揭示了两段关键时期。城堡最初的核心建于中世纪，但它的“高光时刻”属于威尼斯共和国统治伊斯特拉的时期。16世纪，威尼斯最显赫的家族之一，莫罗西尼家族（对，就是那个出过好几位威尼斯总督的家族）获得了这片领地。他们不仅仅满足于拥有一个防御工事，而是决心建造一个彰显其财富、权力和文艺复兴审美的行政与生活中心。后来，城堡又转入了另一个威尼斯望族格里马尼家族手中。因此，这座城堡远非单纯的军事堡垒，它是威尼斯共和国在亚得里亚海腹地展示统治力与文化优越性的“名片”。它见证着威尼斯贵族如何将亚平宁半岛最前沿的建筑思潮与生活方式，植入这片斯拉夫文化深厚的土地，是地中海两大文明交汇的一个精致而坚固的结晶。`} />
                <InfoRow label="建筑特色" value={`让我们走近些，好好端详这座建筑。它的“完美方形”是第一冲击力。城堡主体是一个巨大的、封闭的四方形建筑体，四角耸立着更加粗壮的圆柱形塔楼，像是四个忠诚的巨人，牢牢钉住土地的四个角。墙体是温暖的石头原色，混合着历经风雨后泛出的浅黄与赭石色调，在伊斯特拉清澈的阳光下，像一块巨大的蜂蜜蛋糕。仔细看墙面，你能发现不同大小、切割工整的石块，那是文艺复兴时期对秩序追求的体现。城堡正面最为庄严，通过一座石桥跨越曾经的护城河（如今已干涸）进入主门。门楣之上，你或许还能找到贵族家族的纹章雕刻，虽然时光磨损了细节，但那份威严犹在。最迷人的是城堡内部围合出的方形庭院，四面是优雅的双层拱廊，红砖砌成的拱门连续排列，形成一种舒缓的视觉节奏。当你站在庭院中央抬头看，天空被这规整的几何线条框成一幅活的画，光影在红砖与石墙上游走，每一步都踩在历史的回音上。`} />
                <InfoRow label="建筑风格" value={`斯韦特温切纳特城堡是文艺复兴风格在防御性建筑上的一个教科书级范例，尤其是“城堡宫殿”这一类型。这与之前中世纪哥特式城堡的阴森、高耸、注重垂直感完全不同。文艺复兴的核心思想是“和谐”、“比例”与“人文”，这些理念被完美地浇筑在了这座方形城堡里。它的对称性达到了极致——无论是整体布局，还是庭院的拱廊，都严格遵循中轴线对称，给人以稳定、平衡、理性的美感，这反映了文艺复兴时期人们对古典秩序和宇宙和谐观念的追寻。同时，它的防御功能被巧妙地“包装”了起来。角楼是用于瞭望和射击的，但它们的圆柱形造型（相较于中世纪常见的方形塔楼）更为优雅，线条流畅。厚重的墙体是为了防御，但其规整的砌法和朴素的墙面，又显示出一种克制的美。更重要的是，内部庭院拱廊的设计，引入了光线和空气，创造了适合居住、漫步和社交的优雅空间，这体现了从纯粹军事堡垒向兼具居住舒适性的贵族府邸的转变，是“人文精神”在建筑上的直接体现。`} />
                <InfoRow label="文化价值" value={`对于今天的斯韦特温切纳特村民而言，这座城堡早已不是贵族领主的禁脔，而是他们生活广场上最宏伟的“邻居”和社区活动的灵魂舞台。它巨大的身影，日复一日地投射在广场的鹅卵石地面上，像一枚巨大的时光印章。城堡前的广场，是村子绝对的中心。夏日傍晚，孩子们在这里追逐，老人坐在长椅上闲聊，空气里飘着附近咖啡馆的咖啡香。城堡内部经过修缮，如今经常举办艺术展览、古典音乐会、葡萄酒品鉴会甚至本地婚礼。当莫扎特的乐曲从古老的拱廊庭院中飘出，回荡在广场上时，历史仿佛活了过来。它不再是冰冷的石头史书，而是一个持续为社区注入文化活力的“心脏”。对于外来者，它是一扇了解伊斯特拉复杂历史的窗口；对于本地人，它是集体记忆的基石，是让他们在全球化时代依然能清晰定义“吾乡何处”的地标。这份平静的、将巨大遗产融入日常生活的态度，或许才是它最动人的文化价值。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 斯韦特温切纳特一日游深度打卡路线攻略`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`从城堡探秘到广场漫步的完美自由行指南`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`听我的，把一整天交给这个神奇的小村绝对值得。我们不走马观花，而是像侦探一样，慢慢揭开它的层次。**上午（10点-12点30分）：沉浸城堡内部。** 别急着在广场拍照，第一时间去买票进入莫罗西尼-格里马尼城堡。上午的光线正好斜射进庭院，拱廊的光影分割线最为迷人。跟着讲解或信息板，花一个多小时细细探索城堡的各层展厅、角楼和防御工事，想象威尼斯贵族在此生活的场景。**中午（12点30分-14点）：在“广场心脏”午餐。** 走出城堡，就在广场上选一家咖啡馆或小餐馆（比如Konoba Bastija）露天坐下。点一份伊斯特拉特色的“曼斯特拉”浓菜汤或新鲜意面，配上一杯本地玛尔维萨白葡萄酒。你的餐桌对面就是城堡全景，这简直是至尊VIP观景位。**下午（14点-16点）：教堂与街巷漫步。** 午餐后，去探访广场另一侧的圣温琴佐教堂，内部朴实但宁静。然后，以城堡为圆心，随意钻进那些只有两三户人家宽的静谧小巷。这里没有景点，只有晾晒的床单、窗台的鲜花和偶尔传来的电视声，是体验村落真实肌理的最佳时刻。**傍晚（16点以后）：等待金色时刻。** 回到广场，找张长椅坐下。看夕阳如何将城堡的石头从蜂蜜色染成金黄，再变成瑰丽的粉红。当灯光在拱廊窗户里亮起，你会觉得，这一天的时光，被这个方形的庞然大物温柔地包裹、收藏了。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>庭院拱廊的光影游戏：</strong> 千万不要匆匆穿过庭院。选一个位置站定，静静观察。阳光穿过双层拱廊，在粗糙的石板地上投下规律而深邃的阴影，随着时间推移，这些明暗的“格子”像时钟的指针一样缓缓移动。尤其当下午的阳光以低角度射入时，红砖拱门边缘会被勾勒出一道耀眼的金边，而拱洞深处却幽暗如谜。抬头看，二楼的拱廊在蓝天的背景下形成完美的剪影，几何的美感在这里达到了极致。试着从不同角度拍摄，你会得到无数幅构图各异的“框中之画”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>角楼内部的“声音穹顶”：</strong> 一定要登上一个角楼的内部。这里没有华丽的装饰，只有裸露的石头和狭小的射击孔。但如果你站在圆形空间的中心，轻轻说话或哼唱，会听到清晰的回音。这种特殊的声学效果，是中世纪和文艺复兴时期建筑无意中创造的。闭上眼睛，想象守卫士兵在此值守时，听到的或许也是同样被墙壁折射过的风声、远方的声音。这是一种通过听觉与过去建立的隐秘连接。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>广场鹅卵石的“海浪纹”：</strong> 逛完城堡，低头看看脚下的广场地面。这里的鹅卵石铺砌并非随意，而是形成了优美的弧形波浪纹路，从城堡大门前向外一圈圈荡漾开去。这种铺法在伊斯特拉地区很常见，被称为“科莱”或“鱼骨纹”，但在这个极其规整的方形空间里，柔和的波浪纹与刚硬的城堡直线形成了美妙的视觉对话。它仿佛在提醒你，虽然建筑是权力和秩序的象征，但生活的本质，依旧如海浪般流动、绵延。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>城门上的纹章遗痕：</strong> 在通过石桥走向城堡主门时，仔细查看门楣上方。虽然风化严重，但你依然可以辨认出石头上雕刻的盾形纹章痕迹。那是莫罗西尼或格里马尼家族的标志，是他们对这块土地所有权和荣耀的宣告。试着辨认狮子的轮廓、或是某种花卉的图案，你的指尖触碰的，是几个世纪前石匠一锤一凿留下的签名，是打开城堡身世的第一把钥匙。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想让你的探访体验最大化？这几个小贴士收好：1. <strong>时机就是一切：</strong> 避开七八月的正午！伊斯特拉的夏日阳光非常炽烈，毫无遮挡的广场会变成“烤炉”。最佳游览时间是<strong>春季（5-6月）或初秋（9-10月）</strong>，气候宜人，光线柔和。一日游的话，尽量在上午10点前或下午3点后抵达，完美躲开阳光直射和最可能出现的零星旅游团。2. <strong>穿着与行装：</strong> 村庄虽小，但<strong>必须穿一双绝对舒适、防滑的平底鞋</strong>！从停车场到广场有一段缓坡，而城堡内外的地面全是古老的石板或鹅卵石，高跟鞋或薄底鞋会让你寸步难行。同时，即便夏天也带一件轻便外套，城堡内部和角楼里比较阴凉。3. <strong>管理预期与节奏：</strong> 这里不是杜布罗夫尼克，没有喧闹的商店和拥挤的人流。它的美在于宁静和反差。<strong>请放缓脚步，甚至做好“发呆”的准备</strong>。城堡的参观可能一两小时就结束，但真正的享受在于坐在广场上，看光影变化，感受时间停滞。如果期待不间断的刺激景点，这里可能会让你觉得“单调”；但若想寻找一处放空心灵的奇境，这里便是天堂。" }} />
            </div>
          </Section>

          <Section title={`6. 斯韦特温切纳特周边住宿与美食全攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯韦特温切纳特本身住宿选择极少，但这恰恰是它的魅力——你几乎能独占夜晚静谧的城堡。村里或周边农庄有一些非常精致的<strong>石头屋民宿</strong>，比如“Rooms B&B Castellier”，由传统石屋改造，主人热情好客，早上可能会用自制的果酱招待你。住在里面，晚上等游客散尽，你就能独享被灯光微微照亮的城堡广场，那种时空穿越感无与伦比。餐饮方面，<strong>广场上的Konoba Bastija餐厅</strong>是首选。坐在露台上，城堡就是你的背景墙。一定要尝试伊斯特拉美食的精华：前菜来一盘顶级<strong>伊斯特拉生火腿（Pršut）和羊奶酪</strong>，主菜可以是炖煮得酥烂的<strong>牛肉配野蘑菇酱汁</strong>，或者海鲜意面。当然，灵魂伴侣是本地葡萄酒，白葡萄酒推荐清爽的玛尔维萨，红葡萄酒则要点醇厚的泰然。如果时间充裕，开车十分钟范围内，还有许多藏在葡萄园间的顶级“Konoba”（家庭式小餐馆），能吃到更地道的农家风味。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你被伊斯特拉的宁静乡村气息迷住了，完全可以以此为中心继续探索。强烈推荐两个车程在15分钟内、风格迥异的小村庄：1. <strong>格拉迪尼（Gračišće）：</strong> 另一个山顶中世纪村落，比斯韦特温切纳特更“原生态”，没有大型标志性建筑，但迷宫般的石头小巷、古老的教堂和遍布的鲜花让它像童话世界。这里游客更少，是拍照和迷路的绝佳之地。2. <strong>武尔格利（Vrgli）：</strong> 这个村庄以一座精美的晚期哥特式<strong>圣玛丽教堂</strong>而闻名，教堂内保存着珍贵的15世纪湿壁画。它与斯韦特温切纳特的文艺复兴风格形成有趣的对比，让你在短时间内领略到伊斯特拉建筑艺术的演变。这两个地方都没有门票，只需带着一颗悠闲的心去漫步。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯韦特温切纳特的灵魂，就在于那份极致的、近乎超现实的<strong>反差与平衡</strong>——渺小与宏大、村落与宫殿、日常与永恒，被不可思议地压缩并和谐共存在一个方形的视野里。它教会旅人的，或许是如何在巨大的历史存在面前，依然保持平静生活的能力。当城堡的阴影随着日落拉长，最终与小巷的黑暗融为一体，你会明白，最动人的风景，有时不是征服眼球的地标，而是这种让人心神安宁的、时空错位的魔幻。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cavtat" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    察
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">察夫塔特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cavtat</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/primosten-dalmatia-travel-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普里莫什滕</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Primošten</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/omis-croatia-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥米什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Omiš</p>
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
