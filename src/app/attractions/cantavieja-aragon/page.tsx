import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '坎塔维哈旅游攻略与自由行指南：悬崖上的骑士团要塞漫步',
  description: '探索西班牙阿拉贡的坎塔维哈（Cantavieja）深度游攻略。这座悬于马埃斯特拉斯戈之巅的中世纪古镇，曾是圣殿骑士团要塞。内含详细打卡路线、避坑指南与门票交通信息。',
}

export default function CantaviejaAragonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '阿拉贡，特鲁埃尔省', href: '/destinations/europe' },
            { label: '坎塔维哈', href: '/attractions/cantavieja-aragon' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`坎塔维哈・Cantavieja・西班牙・阿拉贡，特鲁埃尔省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了巴塞罗那和马德里的人潮，今天这份 **坎塔维哈私藏旅游攻略** ，就带你躲开人潮，去一个真正“悬在天边”的西班牙。坎塔维哈，这个名字你可能第一次听说，但它的模样你绝对忘不掉——整个小镇像一块巨大的、倔强的岩石，被上帝随手安插在阿拉贡的马埃斯特拉斯戈山区（Maestrazgo）最陡峭的山脊上，海拔超过1300米。这里不只是“风景好”，而是一种让你屏住呼吸的险峻之美。作为你的专属向导，这份 **坎塔维哈自由行指南** 请收好，我们不只去看石头房子，更要走进圣殿骑士的铁血岁月和卡洛斯派的最后悲歌，感受风声里藏着的整个西班牙近代史的回响。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你厌倦了巴塞罗那和马德里的人潮，今天这份 <strong>坎塔维哈私藏旅游攻略</strong> ，就带你躲开人潮，去一个真正“悬在天边”的西班牙。坎塔维哈，这个名字你可能第一次听说，但它的模样你绝对忘不掉——整个小镇像一块巨大的、倔强的岩石，被上帝随手安插在阿拉贡的马埃斯特拉斯戈山区（Maestrazgo）最陡峭的山脊上，海拔超过1300米。这里不只是“风景好”，而是一种让你屏住呼吸的险峻之美。作为你的专属向导，这份 <strong>坎塔维哈自由行指南</strong> 请收好，我们不只去看石头房子，更要走进圣殿骑士的铁血岁月和卡洛斯派的最后悲歌，感受风声里藏着的整个西班牙近代史的回响。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`坎塔维哈`} />
                <InfoRow label="英文名称" value={`Cantavieja`} />
                <InfoRow label="正式名称" value={`Cantavieja`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`阿拉贡，特鲁埃尔省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`坎塔维哈的历史，就是一部写在悬崖上的战争史诗。它的核心地位始于中世纪。12世纪，阿拉贡国王将这片战略要地赐予 **圣殿骑士团** ，他们看中的正是这鬼斧神工的天险。骑士们在此修建了坚不可摧的城堡与城墙，将坎塔维哈打造为统治整个马埃斯特拉斯戈地区的军事与行政中心，一个真正的“山巅王国”。圣殿骑士团解散后，它又先后归属于医院骑士团和西班牙王室，但它的军事基因从未褪色。到了19世纪，它成为了 **第一次卡洛斯战争（1833-1840）** 中， **卡洛斯派** 最顽固、最重要的堡垒之一。卡洛斯派将领拉蒙·卡布雷拉以此为大本营，与自由主义政府军进行了长达数年的惨烈拉锯。小镇因此被围困、被炮击，却始终未曾屈服，被誉为“卡洛斯派的摇篮”。这段历史给小镇烙印上了深刻的保守与传统印记，走在街上，你仿佛还能听到那场关于王位与信仰之争的遥远回声。`} />
                <InfoRow label="建筑特色" value={`坎塔维哈的建筑不是“建”出来的，更像是从山脊的岩石里“长”出来的。房屋主要采用当地的灰黄色砂岩，经过几个世纪的风吹日晒，颜色变得深沉而统一，与裸露的山岩几乎融为一体。整体布局完全服从于险峻的地形，街道陡峭、狭窄且曲折，许多房子的一楼可能是邻居的屋顶。最震撼的莫过于小镇边缘的那些房屋，它们的后墙直接就是 **垂直的悬崖绝壁** ，窗户就像鹰巢的瞭望孔，望出去是令人眩晕的深谷。主广场（Plaza Mayor）是建筑精华的集中营，广场由带有 **粗壮石柱拱廊** 的建筑围合，柱头简洁有力，拱廊下是阴凉的空间和古老的店铺门面，石材被打磨得光滑，反射着高原清澈的阳光。没有繁复的装饰，这里的一切建筑语言都围绕着 **厚重、防御与实用** ，充满了粗粝的力量感。`} />
                <InfoRow label="建筑风格" value={`坎塔维哈的建筑风格可以概括为 **“军事民用化的哥特-文艺复兴风格”** 。由于其主要建筑活动集中在15至17世纪，你既能看到晚期哥特式的结构痕迹，又能看到文艺复兴时期的平衡与秩序，但所有风格都经过了“军事化”过滤。例如，教堂（Iglesia de la Asunción）的外立面是相对朴素的文艺复兴风格，但其 **钟楼** 却明显被加高、加固，更像一座军事瞭望塔。民居的窗户通常很小，且装有厚重的木窗板，这是为了防御寒冷山风和潜在的袭击。那些带有拱廊的主广场建筑，其拱形是简化的 **罗马风半圆拱或哥特式尖拱的变体** ，但柱子异常粗壮，旨在支撑可能用于集结士兵或储存物资的上层空间。可以说，这里的建筑风格不是为了美学宣言，而是一种 **生存宣言** ，每一种线条和结构都在诉说着安全与戒备的需要，形成了独一无二的“马埃斯特拉斯戈防御风格”。`} />
                <InfoRow label="文化价值" value={`对于西班牙人，尤其是阿拉贡人而言，坎塔维哈是一座 **活的纪念碑** 。它不仅是风景明信片，更是坚韧、独立和传统价值的象征。小镇居民至今保持着一种因地理隔绝而形成的强烈社群认同感和保守的生活节奏。每年重要的节日和宗教仪式，依旧是全镇人生活的重心。它的文化价值还在于 **完整保存了一个历史时空的切片** ：从圣殿骑士的十字军理想，到卡洛斯派对传统君主制的悲情坚守，这些深刻塑造了西班牙民族性格的历史片段，在这里没有被博物馆化，而是沉淀在每一块街石、每一个老人的故事里。对现代游客而言，它提供了一个绝佳的视角，去理解西班牙复杂的内陆历史，而非仅仅沿海的度假印象。它提醒人们，这个国家的深处，藏着如此沉重而骄傲的山魂。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 坎塔维哈一日游打卡路线攻略：从日出悬崖到星空古巷`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行精华步行路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，咱们就按这条最顺、最出片的路线来走。**上午**：一定要早点出发，趁着晨光柔和。把车停在镇外的免费停车场，从 **“耶稣门”（Portal de Jesús）** 进入老城，这是感受“一夫当关”气势的最佳起点。沿着陡峭的主街Calle Mayor向上爬，别急着赶路，看看两旁厚重的石屋。直奔 **主广场（Plaza Mayor）** ，在拱廊下喝杯清晨咖啡，看阳光洒满广场。随后参观广场旁的 **圣米格尔教堂** 和 **市政厅** 。**中午**：从广场的另一个出口，前往 **瞭望台（Mirador）** ，这里是全程的视觉高潮，正午光线足，适合拍摄峡谷全景。之后在广场附近找一家老餐馆享用本地烤羊肉。**下午**：饭后散步去小镇另一头的 **城堡遗址**，虽然只剩残垣，但站在城堡地基上，你才能真正理解骑士们当年的视野与雄心。然后可以随意钻进那些像迷宫一样分支的小巷（如Calle de las Monjas），探索隐秘的角落和手工小店。**傍晚**：回到主广场或找一个西向的巷口，等待 **金色的日落** 将整个石质小镇染成蜂蜜色，这是坎塔维哈最美的魔法时刻。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>主广场的拱廊与光影</strong>：别只是穿过广场。找时间坐在拱廊的阴影里。观察粗粝的方形石柱如何在不同的时辰投下变化的影子。下午时分，阳光斜射，会将拱廊的几何形状清晰地烙在对面的墙壁上，形成一幅不断移动的光影素描。石柱上可能还有几个世纪以来无意留下的刻痕，摸摸它们，冰凉的触感直接连接着过去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>“耶稣门”的厚重感</strong>：这是老城的主要入口，也是一座小型防御塔楼。走近它，仰头看那厚重的拱顶和曾经安置吊门的沟槽。用手推一推那扇巨大的、包着铁皮的木门（如果开着的话），感受其难以置信的重量。穿过门洞的瞬间，光线骤暗，风声被隔绝在外，你立刻完成了从现代世界到中世纪堡垒的“穿越仪式”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>瞭望台（Mirador）的眩晕体验</strong>：一定要走到最边缘（注意安全！）。这里没有太多护栏，视野毫无遮挡。向下看，是近乎垂直的、植被稀疏的岩石峭壁，直插数百米深的谷底；向远望，是马埃斯特拉斯戈地区连绵起伏、荒凉而壮丽的群山，像一片凝固的怒海。山风毫无阻挡地呼啸而过，带着荒野的气息和鹰啸，你会瞬间明白“战略要地”四个字的全部含义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>某扇无名小巷的窗台</strong>：随意探索时，留意那些小巷深处民居的小窗台。它们往往由一整块石板凿成，上面可能摆着一盆正在盛开的、颜色鲜艳的天竺葵，与灰黄色的石墙形成强烈而温暖的生命对比。这小小的细节，正是坎塔维哈灵魂的缩影：在极端严酷的环境中，生活依然顽强而诗意地绽放。" }} />
            </div>
          </Section>

          <Section title={`5. 坎塔维哈自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，<strong>最佳游览时间</strong>是春末到初秋（5月-10月），此时气候温和，山路好走。冬季这里非常寒冷且常有大风，部分餐馆和民宿可能关门。<strong>穿着建议</strong>是重中之重：务必！务必！穿一双 <strong>防滑、支撑性好的徒步鞋</strong> ！这里的街道全是陡峭的斜坡和光滑的鹅卵石，高跟鞋或平板鞋简直是“自虐”。即便夏天，也带一件防风外套，山顶天气瞬息万变。<strong>如何避开人流</strong>：坎塔维哈本身还算小众，但尽量 <strong>避免西班牙长周末（puente）</strong> 前往。小镇非常小，几十个游客就能塞满主广场。最好 <strong>在工作日前往</strong>，享受几乎独享古镇的宁静。最后是 <strong>交通与安全</strong>：自驾是唯一方便的选择，上山公路多急弯，请小心驾驶。小镇治安极好，民风淳朴，无需担心偷骗，但要 <strong>注意看管好孩童</strong>，许多悬崖边没有防护栏。餐厅用餐时间很西班牙，下午1点半后才供应午餐，晚上8点半后供应晚餐，规划好你的“饭点”。" }} />
            </div>
          </Section>

          <Section title={`6. 坎塔维哈周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想在坎塔维哈沉浸式体验，强烈建议在镇上或周边村庄住一晚。小镇内有几家由古老石屋改造的 <strong>乡村民宿（Casa Rural）</strong> ，内部通常温暖舒适，充满乡土古董装饰，主人热情好客，是了解本地生活的窗口。推荐 <strong>“主广场之家”</strong> 这类位置的民宿，推窗即是史诗级景观。餐饮方面，必须尝试 <strong>阿拉贡特色烤羊肉（Ternasco de Aragón）</strong> ，用本地小羊羔炭火慢烤，外皮酥脆，内里多汁，是高原的馈赠。主广场上的 <strong>Mesón La Plaza</strong> 或 <strong>Restaurante Cantavieja</strong> 都能提供地道风味。别忘了点一份用当地蜂蜜和杏仁制作的 <strong>“杏仁挞（Almendrados）”</strong> 作为甜点。在这里吃饭，吃的不仅是味道，更是围坐在古老石拱下，就着烛光与故事的氛围。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>莫拉-德鲁比略斯（Mora de Rubielos）</strong>：驱车约40分钟，这座同样位于马埃斯特拉斯戈区的小镇拥有一个令人惊叹的、保存完好的 <strong>巨大哥特式城堡</strong>，如今是一座旅馆，你可以进去参观甚至喝一杯。它的风格与坎塔维哈的废墟形成有趣对比，展现了另一种规模的要塞生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>米拉姆贝尔（Mirambel）</strong>：另一个“最美乡村”成员，距离坎塔维哈不远。这里比坎塔维哈更精致、更宁静，拥有完整的城墙和无数鲜花装饰的美丽庭院。它的氛围更偏向于田园诗歌，可以缓和坎塔维哈带来的历史沉重感，让人看到这片严酷土地上温柔的一面。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "坎塔维哈的灵魂，是 <strong>风、石头与执念</strong> 的三重奏。它教会你的，不是轻松与享乐，而是一种关于坚守的震撼：人类如何能在如此绝境中扎根数个世纪，并将每一次围攻与风霜都刻进自己的骨血里，最终让险峻本身成为最美的勋章。这里留下的，是一个民族背影最倔强的部分。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ubeda" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌韦达古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Úbeda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/the-prado-museum-madrid" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普拉多大道上的沉默巨匠</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Prado Museum</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sagunto-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨贡托</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sagunto</p>
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
