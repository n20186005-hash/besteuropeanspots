import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯特卢乔迪诺尔恰深度旅游攻略：邂逅意大利高山碎花海秘境',
  description: '探索Castelluccio di Norcia的碎花海奇观！这份翁布里亚小众深度游攻略带你避开人潮，领略欧洲最美高山平原的季节魔法。',
}

export default function CastelluccioDiNorciaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卡斯特卢乔迪诺尔恰', href: '/attractions/castelluccio-di-norcia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯特卢乔迪诺尔恰・Castelluccio di Norcia・意大利・翁布里亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果让我给你推荐一个能让人忘记呼吸的意大利秘境，那一定是卡斯特卢乔迪诺尔恰。它不像罗马或佛罗伦萨那样挤满游客，而是安静地躺在西比利尼山脉的怀抱中，被一片广阔的、月球表面般的喀斯特高山平原——著名的“平塔平原”所环绕。今天这份**卡斯特卢乔迪诺尔恰私藏旅游攻略**，就带你躲开千篇一律的行程，去邂逅那个只在春夏之交上演的奇迹：无边无际的野生碎花海。作为你的专属向导，这份**自由行指南**请收好，我们会聊透怎么去、何时去、看什么，以及如何真正沉浸在这片被时间遗忘的壮丽之中。准备好了吗？我们出发去“世界的屋脊”看看。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果让我给你推荐一个能让人忘记呼吸的意大利秘境，那一定是卡斯特卢乔迪诺尔恰。它不像罗马或佛罗伦萨那样挤满游客，而是安静地躺在西比利尼山脉的怀抱中，被一片广阔的、月球表面般的喀斯特高山平原——著名的“平塔平原”所环绕。今天这份<strong>卡斯特卢乔迪诺尔恰私藏旅游攻略</strong>，就带你躲开千篇一律的行程，去邂逅那个只在春夏之交上演的奇迹：无边无际的野生碎花海。作为你的专属向导，这份<strong>自由行指南</strong>请收好，我们会聊透怎么去、何时去、看什么，以及如何真正沉浸在这片被时间遗忘的壮丽之中。准备好了吗？我们出发去“世界的屋脊”看看。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯特卢乔迪诺尔恰`} />
                <InfoRow label="英文名称" value={`Castelluccio di Norcia`} />
                <InfoRow label="正式名称" value={`Castelluccio di Norcia`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`翁布里亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看卡斯特卢乔现在像个与世无争的隐士小镇，它的历史可是深深扎根在亚平宁山脉的脊梁里。它起源于中世纪，是连接翁布里亚和马尔凯地区的古老牧道和盐路的重要节点。几个世纪以来，这里的居民生活节奏完全由高山平原的韵律决定——春季播种小扁豆（这里出产举世闻名的诺尔恰小扁豆），夏季放牧羊群，秋季收获。小镇本身在2016年经历了一场严重地震，部分损毁，但坚韧的社区精神让它正在缓慢而坚定地复苏。它的历史，不是写在宏伟宫殿的墙面上，而是刻在这片广袤土地的每一道犁沟里，藏在每年如约而至的花海种子中。它代表了意大利山区一种古老而可持续的生活智慧，一种与严酷自然和谐共存的生存史诗。`} />
                <InfoRow label="建筑特色" value={`严格来说，卡斯特卢乔最震撼的“建筑”是大地本身——那片海拔近1500米、面积惊人的平塔平原。但小镇的建筑也别有风味。整个村落以柔和的蜂蜜色和浅褐色石材建成，低矮而敦实，紧紧依偎在山坡上，仿佛是从岩石中生长出来，以抵御高山强烈的风和严寒的冬季。屋顶是深红色的陶瓦，在阳光下显得温暖。地震后的痕迹依然可见，一些建筑用支架加固，诉说着伤痛与韧性。小镇中心的圣玛丽亚阿松塔教堂的钟楼是标志，它孤傲地矗立着，俯瞰着脚下变幻莫测的平原，砖石结构在晨光或暮色中呈现出丰富的金色和玫瑰色色调，与远方青灰色的山峦形成宁静的对话。`} />
                <InfoRow label="建筑风格" value={`这里的建筑风格可以概括为“亚平宁高山实用主义”，深受罗马式建筑的影响，但一切形式都让位于功能。房屋墙体厚实，窗户较小，这是为了保温防风。线条简洁，几乎没有多余的装饰，体现了一种在艰苦环境中求生存的朴素美学。结构上强调坚固和稳定，许多建筑都有厚重的拱门和粗粝的石材表面。这种风格与托斯卡纳或翁布里亚低地那些优雅的文艺复兴城镇截然不同，它不追求美观，却因这份纯粹的功能性而散发出一种 raw（粗犷）、真实的力量感，与周围野性、开阔的自然景观完美融合，共同构建了一种极具冲击力的视觉统一体。`} />
                <InfoRow label="文化价值" value={`卡斯特卢乔的文化价值，是土地、季节和社区庆典的三重奏。它对当地人而言，是生计，是家园，更是一种年度性的自然宗教。每年五月底到七月初的“菲奥里塔”（小花海）现象，不仅是旅游奇观，更是生态健康的标志和古老农业周期的华丽顶点。小镇每年七月会庆祝“小扁豆节”，感恩土地的馈赠。这里出产的扁豆具有原产地保护标志，是当地文化的核心符号。在现代社会，它提醒着我们与自然最原始的联系：生命的绚烂与脆弱，时间的循环与承诺。它不仅仅是一个景点，更是一个活生生的教室，教导人们关于韧性、 patience（耐心）以及对微小事物之美的欣赏。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 卡斯特卢乔迪诺尔恰一日游打卡路线攻略：从日出花海到星空小镇`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`经典自由行路线规划`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，跟着我这位“一日导游”来规划你的完美一天吧！**这条一日游路线**会带你领略精华。**早晨（6:00-10:00）**：一定要早起！驱车或从诺尔恰坐早班车前往。目标直接锁定平塔平原的观景台（比如通往小镇公路边的“贝尔维德雷”）。在清冷的晨光中，看薄雾如牛奶般在平原上流淌，日出金光为远山镶边，此时的花海色彩最是柔和静谧。**上午（10:00-13:00）**：沿着指定的小径（务必尊重农田，走规定路线）慢慢走进花海。近距离观察红色罂粟、蓝色矢车菊、黄色油菜花交织的“彩色地毯”，听听蜜蜂的嗡嗡声，闻着混合了青草与花香的空气。随后上山进入**卡斯特卢乔迪诺尔恰小镇**本身，在废墟与重建的房屋间静静走一圈，感受那份寂静与坚韧。**中午（13:00-15:00）**：在小镇唯一的广场找家餐馆，必须尝尝用当地扁豆做的汤或意面，配上翁布里亚火腿，味道质朴却直达灵魂。**下午（15:00-日落）**：你可以选择从另一个角度徒步（比如前往“蒙特维托雷”方向），看光影在平原上移动，绘制出不断变化的巨幅油画。或者，就坐在小镇边缘的矮墙上，什么也不做，看着云影掠过大地，直到夕阳把整个平原染成金红色。晚上如果不住下，就带着满眼缤纷和满心宁静返回。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>“调色板”般的色彩分层</strong>：不要只是远观。走进花海（在允许的区域），你会发现大自然的“笔触”极其精妙。靠近看，花朵并非均匀混杂。经常是一片亮黄色的毛茛或油菜花作为基底，上面“点缀”着一簇簇如火焰般的红色虞美人，其间又穿插着冷静的蓝色矢车菊或婆婆纳。这种色彩的层次感和随机构图，是任何画家都难以模仿的生机勃勃。蹲下身，你还能看到更多微小的野花，像紫色的地丁、白色的雏菊，共同编织着这张细腻到极致的地毯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>平原上的“孤树”与光影戏剧</strong>：在广袤无垠的平原上，偶尔会孤立着一两棵树，通常是一棵弯曲的、历经风霜的山毛榉或橡树。在午后，当低角度的阳光斜射过来，这棵孤树的影子会被拉得极长，像一道黑色的指针划过五彩的花田。这个景象充满了孤独的诗意和哲学意味，是摄影师最爱的瞬间，也让人不禁思考生命在宏大时空中的位置。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>小镇钟楼的守望视角</strong>：一定要爬上小镇教堂钟楼附近（如果开放）或其周围的至高点。从这里回望平原，视角完全不同。你会看到花海并非平坦，而是有着极其微妙起伏的“地形”，像凝固的绿色与彩色波涛。你可以清晰地看到农田的几何划分，以及远处地平线上西比利尼山脉锯齿状的山脊线。风穿过耳边，带着高空特有的清冽，混合着下方飘来的淡淡花香，这一刻的感官体验是全方位的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>清晨的露珠与蛛网</strong>：如果你能在日出时分抵达花海边缘的草地，请留心草叶和花朵上缀满的晶莹露珠。阳光初现，每一颗露珠都像一个小棱镜，折射出七彩光芒。更神奇的是，在低矮的植物间，无数蜘蛛织就的蛛网上也挂满了露珠，变成了一张张镶满钻石的绝美纱网。这个微观世界转瞬即逝，太阳升高后便消失无踪，是早起者独享的、脆弱而珍贵的宝石。" }} />
            </div>
          </Section>

          <Section title={`5. 卡斯特卢乔自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间就是一切，错过等一年</strong>：最大的“坑”就是来错时间。碎花海奇观通常只在<strong>5月下旬到7月上旬</strong>出现，具体爆发时间和持续时间完全取决于冬季降水和春季气温，每年略有不同。出行前务必在旅游论坛或当地网站查看最新花期报告。旺季的周末（6月）人会非常多，尽量选择<strong>工作日前往</strong>，能获得更宁静的体验。一日游的话，清晨和傍晚光线最美，也相对人少。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与准备：你不是在城市公园</strong>：这里是高海拔山区，天气瞬息万变。即使夏日，早晨也可能很冷，中午又暴晒。<strong>必须</strong>采用洋葱式穿法：防风外套、保暖中层、T恤。一双<strong>结实防滑的徒步鞋</strong>至关重要，因为你要在可能有露水、不平的草地上行走。防晒霜、帽子和墨镜是标配。另外，平原上几乎没有遮阴处，请带足饮用水和少量零食。<strong>最重要的一点</strong>：严格走在指定的路径上，不要为了拍照踩踏花田，这是对自然和农民劳动的基本尊重。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>交通与设施现实帖</strong>：卡斯特卢乔<strong>没有火车站</strong>。常见方式是先到斯波莱托或诺尔恰，再驾驶或乘坐少数班次的巴士（班次稀少，务必提前查好时刻表）。自驾是最方便的，但旺季停车场紧张，且山路蜿蜒需小心驾驶。小镇基础设施有限，餐馆和厕所不多，旺季可能排队。建议在诺尔恰吃早饭或备好午餐材料。手机信号在平原某些区域可能很弱，提前下载好离线地图。" }} />
            </div>
          </Section>

          <Section title={`6. 卡斯特卢乔周边住宿与美食全攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>住宿</strong>：如果想拥有星空下的极致体验，可以考虑住在<strong>卡斯特卢乔迪诺尔恰小镇</strong>本身为数不多的B&B或农庄住宿里。这些住所通常由家庭经营，石头房子，房间简单但干净温暖，能让你在游客散去后，独享高山夜晚的绝对寂静和璀璨银河。更主流且选择更多的住宿地在山下的<strong>诺尔恰</strong>，这座以猪肉制品闻名的“美食之城”有更多酒店、餐厅和商店，开车上山约半小时，生活便利性高很多。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>餐饮</strong>：在小镇广场上，找一家有户外座位的餐馆。<strong>必点美食</strong>首推<strong>扁豆汤</strong>（Zuppa di Lenticchie），用当地特产小扁豆慢炖而成，浓郁暖心，是土地的味道。搭配<strong>诺尔恰火腿</strong>（Prosciutto di Norcia）和<strong>羊奶酪</strong>（Pecorino）拼盘。主菜可以试试手工意面配野蘑菇或肉酱。别忘了点一杯本地的萨格兰蒂诺红葡萄酒。食物风格粗犷、实在，分量足，完美补充徒步消耗的体力。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>诺尔恰</strong>：既然来了，怎能错过“意大利的屠夫之城”？从卡斯特卢乔开车下去很快。诺尔恰古城墙环绕，中心是圣本笃广场。这里遍地都是卖猪肉制品的商店，空气中弥漫着香料和熟肉的香气。你可以参观地下的古老屠宰场遗迹，品尝各种萨拉米、熏肉，买点特产带走。它的热闹与山上的寂寥形成有趣对比。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>西比利尼山国家公园徒步</strong>：如果你多留一天，且体力充沛，强烈推荐深入探索<strong>西比利尼山国家公园</strong>。从卡斯特卢乔出发，有众多徒步路线，前往如<strong>皮亚诺格兰德</strong>的其他观景台，或探索<strong>沃托内峡谷</strong>等。你会发现高山草甸、冰川湖（如皮拉图湖）和更多样的野花与野生动物（包括羚羊、金雕）。这是从“看”花海到“融入”高山生态系统的深度升级。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡斯特卢乔的灵魂，在于那种极致的对比与和谐：无边无际的、近乎荒凉的平原，却在某个短暂的季节里，迸发出宇宙间最温柔、最绚烂的生命力；一个经历过地动山摇伤痕的小镇，却依然沉默而坚定地守望着这片年年重生的花海。它教会你的，不是历史年表，而是一种关于时间、耐心与轮回的，无声却震耳欲聋的哲学。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/monteriggioni-walled-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙特里焦尼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monteriggioni</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/park-of-the-monsters-bomarzo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博马尔佐怪兽公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bomarzo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/villa-d-este" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒂沃利千泉宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Villa d'Este</p>
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
