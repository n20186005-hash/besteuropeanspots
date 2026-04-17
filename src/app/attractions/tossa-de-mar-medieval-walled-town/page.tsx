import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '滨海托萨 Tossa de Mar | 布拉瓦海岸唯一完整城墙环绕的碧海中世纪梦 - 最佳欧洲景点',
  description: '朋友，想象一下这个画面：你从蜿蜒的滨海公路一个转弯，猝不及防地，它就撞进了你的视野——一座完整的、奶油色的中世纪石头城堡，不是孤零零的塔楼，而是一整片带着锯齿城墙的城镇，就那样直接从湛蓝的地中海里生长出来，背后是绵延的绿色山丘。第一眼，你会倒吸一口凉气，不是因为它多么宏伟，而是因为它太不真实了，像一...',
}

export default function TossaDeMarMedievalWalledTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '滨海托萨', href: '/attractions/tossa-de-mar-medieval-walled-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`滨海托萨・Tossa de Mar・西班牙・赫罗纳省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下这个画面：你从蜿蜒的滨海公路一个转弯，猝不及防地，它就撞进了你的视野——一座完整的、奶油色的中世纪石头城堡，不是孤零零的塔楼，而是一整片带着锯齿城墙的城镇，就那样直接从湛蓝的地中海里生长出来，背后是绵延的绿色山丘。第一眼，你会倒吸一口凉气，不是因为它多么宏伟，而是因为它太不真实了，像一艘搁浅在时光海滩上的巨轮，或者一个被小心翼翼从童话书里剪下来、贴在现实里的立体插画。
走近它，感官便一层层被打开。早上九点，空气里是干净的、带着海盐颗粒的清新气味，混杂着从城墙内老面包店飘出的焦黄麦香。你的脚下是光滑的鹅卵石，被几个世纪的脚步磨得温润发光。海浪声是永恒的、低沉的白噪音背景，但更清晰的是海鸥的鸣叫，和从城墙高处传来的、慢悠悠的教堂钟声。阳光正努力爬过东面的城墙垛口，把金色的光斑投在狭窄巷道的墙面上，那些墙面是各种层次的米白、赭石和淡黄，缝隙里长着倔强的蕨类植物。
穿过厚实的拱形城门洞，仿佛穿过一道时间的帘幕。里面是另一个世界。这里没有车马的喧嚣，只有脚步声和低语声在曲折的巷弄里回荡。当地人提着菜篮不紧不慢地走过，阳台上的天竺葵开得泼辣，湿衣服在细细的晾衣绳上滴水。你会发现，这座被当作“遗址”保护的地方，至今依然是鲜活的、有呼吸的社区。老太太坐在门口晒太阳，猫咪在窗台上打盹，厨房里传出炖菜的香气。历史在这里不是标本，而是日常生活的背景墙。
而它最核心的魅力，就在于这种不可思议的“叠加态”。你可以在同一刻，感受到作为防御工事的森严（摸着冰凉厚重的墙砖，想象弩箭从箭孔射出），和作为家园的温馨（闻到某扇窗后飘出的咖啡香）；你可以上一秒还沉浸在千年历史的沉思中，下一秒走下几步台阶，就把脚趾浸入冰凉清澈的海水里。它是堡垒，也是渔村；是遥远的过去，也是生动的当下。这种矛盾而和谐的统一，让滨海托萨不仅仅是一个“景点”，而是一个能让人瞬间安静下来，与时间和自然对话的奇妙容器。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下这个画面：你从蜿蜒的滨海公路一个转弯，猝不及防地，它就撞进了你的视野——一座完整的、奶油色的中世纪石头城堡，不是孤零零的塔楼，而是一整片带着锯齿城墙的城镇，就那样直接从湛蓝的地中海里生长出来，背后是绵延的绿色山丘。第一眼，你会倒吸一口凉气，不是因为它多么宏伟，而是因为它太不真实了，像一艘搁浅在时光海滩上的巨轮，或者一个被小心翼翼从童话书里剪下来、贴在现实里的立体插画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近它，感官便一层层被打开。早上九点，空气里是干净的、带着海盐颗粒的清新气味，混杂着从城墙内老面包店飘出的焦黄麦香。你的脚下是光滑的鹅卵石，被几个世纪的脚步磨得温润发光。海浪声是永恒的、低沉的白噪音背景，但更清晰的是海鸥的鸣叫，和从城墙高处传来的、慢悠悠的教堂钟声。阳光正努力爬过东面的城墙垛口，把金色的光斑投在狭窄巷道的墙面上，那些墙面是各种层次的米白、赭石和淡黄，缝隙里长着倔强的蕨类植物。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过厚实的拱形城门洞，仿佛穿过一道时间的帘幕。里面是另一个世界。这里没有车马的喧嚣，只有脚步声和低语声在曲折的巷弄里回荡。当地人提着菜篮不紧不慢地走过，阳台上的天竺葵开得泼辣，湿衣服在细细的晾衣绳上滴水。你会发现，这座被当作“遗址”保护的地方，至今依然是鲜活的、有呼吸的社区。老太太坐在门口晒太阳，猫咪在窗台上打盹，厨房里传出炖菜的香气。历史在这里不是标本，而是日常生活的背景墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最核心的魅力，就在于这种不可思议的“叠加态”。你可以在同一刻，感受到作为防御工事的森严（摸着冰凉厚重的墙砖，想象弩箭从箭孔射出），和作为家园的温馨（闻到某扇窗后飘出的咖啡香）；你可以上一秒还沉浸在千年历史的沉思中，下一秒走下几步台阶，就把脚趾浸入冰凉清澈的海水里。它是堡垒，也是渔村；是遥远的过去，也是生动的当下。这种矛盾而和谐的统一，让滨海托萨不仅仅是一个“景点”，而是一个能让人瞬间安静下来，与时间和自然对话的奇妙容器。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`滨海托萨`} />
                <InfoRow label="英文名称" value={`Tossa de Mar`} />
                <InfoRow label="正式名称" value={`Tossa de Mar`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`赫罗纳省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是整个布拉瓦海岸线上唯一完整保留了中世纪城墙与城堡的古镇，被誉为“蓝色海岸的珍宝”。`} />
                <InfoRow label="建筑特色" value={`一座从海平面拔地而起、被锯齿状城墙严密包裹的石头迷宫，完美融合了军事防御功能与地中海生活气息。`} />
                <InfoRow label="建筑风格" value={`以加泰罗尼亚地区典型的中世纪军事与民用建筑为主，混杂着罗马时期遗迹和二十世纪初现代主义风格的零星点缀。`} />
                <InfoRow label="文化价值" value={`它不仅是历史的活化石，更是上世纪中叶“美好时代”欧洲艺术家与知识分子的灵感天堂，承载着从罗马、中世纪到现代的多重文化记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城墙遗址区域全天24小时开放。Vila Vella（老城）内的街道和部分公共区域可自由漫步。镇内的Tossa de Mar城堡（现为市政博物馆）开放时间通常为夏季（4月至9月）10:00-20:00，冬季（10月至3月）10:00-18:00，周一闭馆。具体时间可能因季节和节日微调，建议出行前查看官网。`} />
              <InfoRow label="门票价格" value={`进入古镇及城墙区域完全免费。仅Tossa de Mar城堡博物馆收取门票，常规票价约4欧元，65岁以上长者、学生及团体有优惠，12岁以下儿童免费。偶尔的特展可能需要额外购票。`} />
              <InfoRow label="地址" value={`Carrer de la Guàrdia, s/n, 17320 Tossa de Mar, Girona, Spain`} />
              <InfoRow label="交通方式" value={`从巴塞罗那出发最便捷：在巴塞罗那Estació del Nord汽车站乘坐SARFA公司的大巴，直达Tossa de Mar，车程约1小时30分钟，班次频繁（夏季几乎每小时一班，冬季减少）。从赫罗纳市出发：在赫罗纳汽车站乘坐前往Tossa de Mar的巴士，车程约1小时。自驾是最灵活的方式，沿GI-682海岸公路行驶风景绝美，但夏季停车位紧张，建议尽早抵达或使用镇外停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲托萨的故事，我们得把时钟拨回到罗马时代。早在公元一世纪，精明的罗马人就看中了这个拥有天然良港和淡水河流的湾角，他们在这里建立了一个叫“图尔萨”（Turissa）的定居点，主要经营鱼露加工和陶器贸易。如今在老城边缘的“罗马别墅”遗址里，你还能看到精美绝伦的马赛克地板，上面描绘着海洋生物和神话场景，无声地诉说着当年这里的富庶与品味。罗马帝国式微后，这里一度沉寂，直到中世纪早期，来自山区的居民为了躲避海盗侵袭，才重新聚集到这片海滨。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点出现在12世纪。面对日益猖獗的北非巴巴里海盗的劫掠，居住在这里的人们决定不再被动逃跑。他们以惊人的决心和力量，从山丘顶端开始，用巨大的石块垒砌起一道坚不可摧的防线。我们今天看到的Vila Vella（老城）的雏形和主体城墙，就是在12至14世纪间逐渐成型的。这不是国王下令建造的宏伟工程，而是一群普通渔民、农民和手艺人为了保卫自己的家园、船只和亲人，一砖一石亲手筑起的生命线。城墙沿着山脊的自然走势蜿蜒，七座雄浑的圆形塔楼像坚实的臂膀，将教堂、民宅和领主的小城堡紧紧搂在怀中。你可以想象，每当瞭望塔燃起烽烟，沉重的城门轰然关闭，整个社区便同呼吸、共命运。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的几个世纪，城墙见证了无数次惊心动魄的攻防。海盗的桨帆船像鲨鱼一样在近海游弋，试图寻找防线的弱点。但托萨的城墙一次次经受住了考验。有趣的是，和平时期，城墙内的发展也充满了生活智慧。空间如此珍贵，于是房子只能向上生长，巷子窄得只容两人侧身而过，形成了我们今天看到的迷宫般的格局。领主城堡（如今博物馆所在地）不仅是军事指挥中心，也象征着世俗权力，而与它隔空相望的圣维森特教堂，则安抚着人们的灵魂。这种世俗与精神权力的并置，也是中世纪城镇规划的典型缩影。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着大航海时代开启和火炮的应用，中世纪城墙的军事意义逐渐褪色。托萨回归了它宁静的渔村本质。城墙没有像许多地方那样被拆除扩建，反而因为其偏远和经济的停滞，被奇迹般地完整保存下来，像一个被遗忘的时光胶囊。真正的复兴要到20世纪初。当时，欧洲的艺术家和知识分子开始逃离都市，寻找未被工业文明玷污的“世外桃源”。滨海托萨以其原始的中世纪风貌和令人窒息的地中海美景，迅速吸引了包括马克·夏加尔、安德烈·马松等一批前卫画家。夏加尔甚至称它为“蓝色天堂”，他的画作让托萨蒙上了一层超现实的梦幻色彩。从此，它从一个单纯的渔港，变成了一个艺术与灵感的代名词。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`上世纪50年代，好莱坞也发现了这块宝地。1950年，电影《潘多拉和飞翔的荷兰人》在此取景，女主角艾娃·加德纳在托萨的海滩和巷弄中留下了永恒的身影。这部电影让滨海托萨首次大规模进入全球视野，开启了它的旅游业。但难能可贵的是，即便游客纷至沓来，当地社区和政府对老城的保护有着近乎偏执的坚持。没有大型酒店被允许建在城墙内，车辆严禁入内，商业活动被严格限定。正是这种克制，才让我们在今天，依然能体验到那个近乎原汁原味的中世纪之梦，而不只是一个布满纪念品商店的布景板。托萨的历史，是一部从求生到生活，从遗忘到被重新发现，并在喧嚣现代世界中成功守护自身灵魂的动人史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完美感受托萨，我强烈建议安排一整天，并且在前一天下午或傍晚就抵达小镇住下。完美的深度游从次日清晨开始：早上8点左右，当大批一日游游客还未从巴塞罗那出发时，你就应该已经站在城墙下。用2-3个小时沉浸式探索城墙环绕的Vila Vella老城内部，这是光线最柔和、氛围最宁静的黄金时段。之后下山，花1个小时逛逛城墙外“扩建区”的生活街区，感受当地市井气。中午在海滨找家餐厅享用漫长的海鲜午餐。下午的时光留给海滩、游泳，或者沿着海岸小径徒步去往更隐秘的海湾。傍晚时分，务必再次登上城墙，等待日落将城堡、大海和整个小镇染成金红。这样的节奏张弛有度，既能领略历史遗迹的厚重，也能融入地中海的度假氛围，看到托萨从晨光到星夜的不同面孔。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季（7-8月）的中午12点到下午4点，老城和主要海滩会挤满一日游的游客和灼热阳光，此时最好避开，去阴凉的博物馆或找家餐厅休息。
一定要穿一双绝对舒适、防滑的鞋，老城内的坡道和鹅卵石路对高跟鞋和薄底鞋极不友好，这是用血泪换来的经验。
警惕老城内个别餐馆门口过于热情招揽客人的服务员，通常地道又实惠的餐馆都藏在不太起眼的巷子里，或者直接去“扩建区”当地人光顾的地方。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那扇厚重的、被称为“Vila Vella城门”的拱门，让自己彻底没入由高耸石墙夹出的、凉爽而静谧的巷弄迷宫里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主巷缓缓上行，让你的手触摸那些被海风侵蚀出孔洞的墙石，留意脚下每一块被磨得发亮的鹅卵石的不同纹路。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上城墙的步行道，从制高点上的“城堡灯塔”开始，顺着锯齿状的墙垛慢慢走一圈，让目光在不同角度拥抱碧海、橙瓦与远山。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进那座由古老城堡改建的市政博物馆，别只为看展品，更要站在露台上，想象自己就是中世纪瞭望的水手，俯瞰着曾经需要警惕的海平面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城墙西北侧的“皮隆门”下山，沿着之字形坡道走向“主海滩”（Platja Gran），感受从中世纪堡垒到度假海滩场景切换的奇妙瞬间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“扩建区”（El Raval）那些非游客聚集的小街道里随意穿梭，听听菜市场的喧闹，看看文具店或五金店，品尝一个当地糕点铺的“ensaimada”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，沿着海边岩石上开凿出的“卡梅小道”向东徒步，去往更小巧宁静的“马洛海滩”或“波罗海滩”，那里海水更剔透，像个私人珍藏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚前，带上一瓶水或一杯咖啡，重新找一个城墙上的角落坐下，什么都不做，只是看光线如何一点点变暖，游艇如何归港，灯火如何次第亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`北侧城墙全景位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时，站在城外通往“卡梅小道”的岩石平台上，用长焦镜头压缩空间，将完整的锯齿城墙、城堡塔楼与前景的湛蓝海湾一同收入镜中，光线清澈且为侧顺光。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡灯塔俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前两小时，登上城堡顶端的灯塔平台，向下俯拍Vila Vella老城错综复杂的屋顶、天井和巷道，橙色瓦片与白色墙面形成强烈几何图案，光影对比迷人。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Platja Gran海滩框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，退到海滩西端的礁石上，利用天然岩石拱门或缝隙作为前景框架，拍摄亮起灯火的城堡城墙倒映在平静海面上的梦幻场景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`皮隆门之字路`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线洒满坡道时，站在皮隆门下方的之字形路上仰拍，捕捉行人沿着古老石阶上下、背景是厚重城门与天空的生动画面，富有叙事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城巷弄光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时别怕，反而适合在老城最窄的巷子里寻找“一线天”效果，让强烈的顶光在两侧高墙投下深邃阴影，营造出戏剧性的明暗对比和纵深感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`早晚的“黄金时刻”和“蓝调时刻”是拍摄城墙与大海风光的灵魂，中午的硬光更适合表现建筑的结构与纹理。老城内居民阳台上晾晒的衣物、窗台上的花草都是极佳的生活化前景，但拍摄时请务必快速、低调，尊重居民隐私。海边紫外线强，记得给镜头装上UV镜或偏振镜，能有效减少反光、提升海水和天空的饱和度。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`城墙内的浪漫蜗居`}</h4>
                  <p className="text-sm text-blue-800">{`预订一间由老石头房子改造的公寓，面积可能很小，楼梯可能陡峭，但推开木窗就能触摸到历史的墙面，夜晚能听到海浪拍打城墙基座的催眠曲。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`主海滩边的家庭酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择一栋正面朝着Platja Gran沙滩的三星级家庭经营酒店，阳台就是观赏城堡全景的私人包厢，下楼就能跳进海里，适合喜欢便利与海景的旅行者。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐秘山腰的设计别墅`}</h4>
                  <p className="text-sm text-yellow-800">{`在镇子后方的宁静住宅区，寻找一栋带私人泳池和无敌海景露台的现代风格别墅，远离游客喧嚣，拥有绝对的私密和放松，适合家庭或小团体。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济实用的城区客栈`}</h4>
                  <p className="text-sm text-purple-800">{`住在“扩建区”边缘的舒适客栈，这里价格亲民，走几步就能融入本地人的生活圈，清晨去面包房不用排队，体验真正托萨人的日常节奏。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季房源极其紧张，务必提前至少2-3个月预订，尤其是城墙内的特色住宿。选择住在老城内，意味着你需要拖着行李走一段上坡石板路，但换来的体验绝对值得。托萨整体治安良好，但无论住在哪里，晚上在偏僻小巷独行仍需保持一般的旅行警惕。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开托萨好几天了，但我闭上眼，指尖仿佛还能摸到那些城墙石头的粗糙质感，鼻腔里还能回想起那股混合了海盐、石藓和烤面包的独特气息。这个地方给我最深的触动，不是它有多美——虽然它确实美得像明信片——而是它那种坚韧又温柔的生命力。那些石头见证了恐惧（海盗的烽火）、艰辛（渔民的劳作），也承载了安宁（午后的阳光）、欢愉（夏日的海浴）和灵感（艺术家的画笔）。它没有被历史压成一本枯燥的教科书，反而把历史消化成了自己呼吸的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快、新、炫的世界里，托萨固执地慢着、旧着、静着。它提醒我们，真正的奢侈不是拥有多少，而是能守护什么。守护一道千年的城墙，守护一片清澈的海湾，守护一种不慌不忙的生活步调。对于每一位厌倦了打卡式旅游、渴望深度连接的旅人来说，托萨是一剂良药。它让你放下手机，用脚步去丈量石头的温度，用眼睛去捕捉光影的游戏，用心去聆听海浪与历史的合奏。它不是一个你“去过”的地方，而是一个你“感受过”的、关于时间与存在的寓言。一生必去？是的，因为它能让你记得，我们究竟从何处而来，又该如何诗意地栖居于这片大地与海洋之间。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
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
              <a href="/attractions/bishop-palace-of-astorga" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿斯托加主教宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bishop's Palace of Astorga</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tarragona-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔拉戈纳古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarragona Roman Ruins</p>
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
