import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '沃尔令斯大瀑布 Vøringsfossen｜徒步穿越哈当厄尔高原，在悬空天桥上直面挪威最壮丽瀑布的咆哮 - 最佳欧洲景点',
  description: '车子还在沿着蜿蜒的RV7公路爬升，耳朵就先感受到了变化——一种低沉、持续、仿佛来自大地深处的轰鸣，混在车窗外的风声里，由远及近。当你推开车门，哈当厄尔高原清冽、带着苔原和松针气息的空气猛地灌入鼻腔，而那轰鸣声瞬间放大了无数倍，变成一种充满力量的、不间断的咆哮。你得走过一小段碎石路，声音牵引着你。然后',
}

export default function VoringsfossenWaterfallPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '挪威', href: '/destinations/norway' },
            { label: '沃尔令斯大瀑布', href: '/attractions/voringsfossen-waterfall' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`沃尔令斯大瀑布・Vøringsfossen・挪威・韦斯特兰郡（位于哈当厄尔高原，邻近埃德菲尤尔 Eidfjord）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子还在沿着蜿蜒的RV7公路爬升，耳朵就先感受到了变化——一种低沉、持续、仿佛来自大地深处的轰鸣，混在车窗外的风声里，由远及近。当你推开车门，哈当厄尔高原清冽、带着苔原和松针气息的空气猛地灌入鼻腔，而那轰鸣声瞬间放大了无数倍，变成一种充满力量的、不间断的咆哮。你得走过一小段碎石路，声音牵引着你。然后，毫无预兆地，世界在你脚下裂开了。
第一眼看到沃尔令斯大瀑布，你会短暂地失语。它不是涓涓细流，而是一整条名为“比亚尔河”的碧绿河水，在平坦的高原尽头毅然决然地纵身一跃，像一匹被扯碎的银色丝绸，在183米的下坠过程中被嶙峋的岩壁撕扯成数股，最终化为一片永不消散的水雾，轰然砸进底下深不见底的马克河谷。这不仅仅是“看”瀑布，你是用全身心在感受它：脸上飘来的细微水珠，脚下岩石传来的轻微震动，还有那充斥整个峡谷的、压倒一切的白噪音。它粗暴又美丽，让你瞬间理解为什么北欧神话里总有巨人和神灵住在这样的地方。
这里绝不仅仅是游客的打卡点。你会遇到穿着专业徒步鞋、背着大背包的挪威人，他们可能只是路过，停下来喝杯热咖啡，静静地看一会儿瀑布，眼神里有一种熟悉的、像看望老友般的平静。旁边的Fossli酒店咖啡馆，自1891年就在这儿了，木头房子被风雨刷成灰白色，里面飘出热华夫饼和咖啡的香气。本地人在这里聚会，游客在这里喘息，瀑布的轰鸣成了所有人共享的背景音乐。它早已是挪威人自然生活图景里不可或缺的一部分，不是被供起来的景点，而是一个强大的、活跃的邻居。
而它最打动人心的魅力，在于那种极致的矛盾与和谐。一边是历经千万年冰川切割而成的、粗粝野性的原始峡谷，另一边是人类用精巧的钢材和玻璃构建出的、未来感十足的悬空步道。当你战战兢兢地走上那些伸出悬崖的观景台，低头是令人晕眩的深渊和奔腾的白水，抬头是广阔无垠的高原苍穹，那一刻，你既感到人类智慧的勇敢，更感到在自然绝对力量面前的渺小。这种震撼，是印在骨子里的。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子还在沿着蜿蜒的RV7公路爬升，耳朵就先感受到了变化——一种低沉、持续、仿佛来自大地深处的轰鸣，混在车窗外的风声里，由远及近。当你推开车门，哈当厄尔高原清冽、带着苔原和松针气息的空气猛地灌入鼻腔，而那轰鸣声瞬间放大了无数倍，变成一种充满力量的、不间断的咆哮。你得走过一小段碎石路，声音牵引着你。然后，毫无预兆地，世界在你脚下裂开了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到沃尔令斯大瀑布，你会短暂地失语。它不是涓涓细流，而是一整条名为“比亚尔河”的碧绿河水，在平坦的高原尽头毅然决然地纵身一跃，像一匹被扯碎的银色丝绸，在183米的下坠过程中被嶙峋的岩壁撕扯成数股，最终化为一片永不消散的水雾，轰然砸进底下深不见底的马克河谷。这不仅仅是“看”瀑布，你是用全身心在感受它：脸上飘来的细微水珠，脚下岩石传来的轻微震动，还有那充斥整个峡谷的、压倒一切的白噪音。它粗暴又美丽，让你瞬间理解为什么北欧神话里总有巨人和神灵住在这样的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里绝不仅仅是游客的打卡点。你会遇到穿着专业徒步鞋、背着大背包的挪威人，他们可能只是路过，停下来喝杯热咖啡，静静地看一会儿瀑布，眼神里有一种熟悉的、像看望老友般的平静。旁边的Fossli酒店咖啡馆，自1891年就在这儿了，木头房子被风雨刷成灰白色，里面飘出热华夫饼和咖啡的香气。本地人在这里聚会，游客在这里喘息，瀑布的轰鸣成了所有人共享的背景音乐。它早已是挪威人自然生活图景里不可或缺的一部分，不是被供起来的景点，而是一个强大的、活跃的邻居。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动人心的魅力，在于那种极致的矛盾与和谐。一边是历经千万年冰川切割而成的、粗粝野性的原始峡谷，另一边是人类用精巧的钢材和玻璃构建出的、未来感十足的悬空步道。当你战战兢兢地走上那些伸出悬崖的观景台，低头是令人晕眩的深渊和奔腾的白水，抬头是广阔无垠的高原苍穹，那一刻，你既感到人类智慧的勇敢，更感到在自然绝对力量面前的渺小。这种震撼，是印在骨子里的。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`沃尔令斯大瀑布`} />
                <InfoRow label="英文名称" value={`Vøringsfossen`} />
                <InfoRow label="正式名称" value={`Vøringsfossen`} />
                <InfoRow label="国家" value={`挪威`} />
                <InfoRow label="城市" value={`韦斯特兰郡（位于哈当厄尔高原，邻近埃德菲尤尔 Eidfjord）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`挪威最具标志性和历史知名度的瀑布之一，是探索壮丽的哈当厄尔高原与深邃的马克河谷之间地理断裂带的震撼门户。`} />
                <InfoRow label="建筑特色" value={`瀑布本身是纯粹的自然造物，而近年新建的一系列悬空钢结构观景台和步道，以极简、现代且充满张力的设计，巧妙地嵌入古老峡谷，为游客提供了前所未有的惊险观瀑视角。`} />
                <InfoRow label="建筑风格" value={`自然景观（瀑布）与当代极简主义工程结构（观景台）的完美结合。`} />
                <InfoRow label="文化价值" value={`它象征着挪威人对荒野自然的永恒向往与敬畏，从19世纪的浪漫主义探险家到今天的普通徒步者，这里一直是体验挪威“国家浪漫”精神的核心地标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`瀑布及周边自然区域全年24小时开放。通往瀑布的主要观景平台、步道及 Fossli 酒店咖啡馆通常在五月下旬至九月底开放，具体时间视积雪融化情况而定，夏季（6-8月）一般为全天开放。新建的悬空观景台“Vøringsfossen Waterfall Platform”在旅游季节（约5月-10月）开放，建议行前查看当地旅游局官网确认最新信息。冬季部分步道可能因冰雪封闭。`} />
              <InfoRow label="门票价格" value={`进入瀑布区域本身免费。自驾游客需支付停车费，夏季约 150-200 挪威克朗/天。使用新建的悬空观景台无需额外门票，已包含在公共设施内。前往瀑布的徒步路线均免费。附近私人经营的 Fossli 酒店咖啡馆消费自理。`} />
              <InfoRow label="地址" value={`Vøringsfossen, 5784 Eidfjord, Norway`} />
              <InfoRow label="交通方式" value={`最便捷的抵达方式是自驾。从卑尔根（Bergen）出发，沿 E16 公路转 RV7 公路（哈当厄尔公路），车程约2.5-3小时。从奥斯陆（Osla）出发，沿 E16 公路经戈罗（Gol）转 RV7 公路，车程约4小时。RV7公路本身便是风景绝美的国家级旅游公路，沿途有清晰标识。使用公共交通工具较为周折：可从卑尔根或奥斯陆乘坐火车或巴士到达沃斯（Voss），再从沃斯换乘前往埃德菲尤尔（Eidfjord）的巴士，并在 Vøringsfossen 站下车，班次有限，尤其淡季，务必提前查询并规划好返程时间。全程建议预留充足时间应对可能的等待。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要说沃尔令斯大瀑布的故事，就得从看不见的巨力开始。那不是几十年几百年，而是数百万年的光阴。冰川期，巨大的冰盖像砂纸一样反复打磨着斯堪的纳维亚的土地。当气候转暖，冰川退缩，它留下的不仅是哈当厄尔高原这片开阔的台地，更用无法想象的重量，刻出了马克河谷这道深邃的伤疤。比亚尔河，这条温顺流淌在高原上的河流，突然来到了断层的边缘——于是，沃尔令斯大瀑布诞生了。在很长很长的时间里，它只存在于隆隆的水声中，陪伴它的只有盘旋的飞鸟、岩壁上的地衣和偶尔闯过的驯鹿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的“发现”，要等到欧洲浪漫主义浪潮席卷的19世纪。1821年，一位名叫“福格特”的教授首次对瀑布进行了“官方”测量和描述（尽管当地萨米人和农民早就知道它的存在）。但真正让它声名远扬的，是1893年那场豪赌。眼光独到的酒店经营者奥斯蒙·O·福斯利，坚信这片荒野的震撼力能吸引勇敢的旅行者。他在瀑布顶端的悬崖边，建起了福斯利酒店。想想看，在那个马车和徒步旅行的年代，把建材运到这荒原之上是多么疯狂的工程！酒店开业后，果然成了欧洲贵族和探险家们挑战自我的目的地。他们坐着颠簸的马车而来，只为在瀑布的轰鸣中共进晚餐，体验一种“文明的边缘”的刺激。酒店老旧的留言簿上，还能找到那些用花体字写下的、充满惊叹的感言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`20世纪，随着公路（就是现在的RV7）修通，越来越多的普通人得以目睹它的真容。它成了挪威自然风光明信片上的常客。但真正的故事转折发生在21世纪。人们不再满足于只是在远处安全地眺望。挪威人想用一种更极致、更尊重自然的方式去亲近它。于是，一场堪称艺术的基础设施改造开始了。建筑师和工程师们没有选择建一座笨重的观光塔，而是设计了一系列轻盈的钢结构步道和观景平台，像一条金属丝带，巧妙地贴合着悬崖的褶皱，一步步将人引向瀑布的正面甚至侧面。最惊险的那个平台，仿佛让你悬浮在瀑布水幕的旁边。这个工程本身，就成了一个现代寓言：不是征服自然，而是用谦卑又大胆的方式，为自己争取一个更好的观景座位，与远古的自然力量进行一场无声的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的瀑布，依然保持着它野性的内核。水流的大小随着高原的融雪和降雨而变化，春夏之际最为澎湃，秋冬则可能变得纤细秀丽，在岩壁上挂起冰凌。不变的是那永恒的轰鸣，和每一个站在它面前的人，那份从心底升起的、对于时间和规模的敬畏。从冰河世纪的创造，到浪漫主义探险家的驿站，再到当代设计与自然共舞的舞台，沃尔令斯大瀑布的故事，是一部关于地球力量、人类好奇心与永恒之美的三层叙事。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排至少3-4小时进行深度游览，最佳抵达时间是上午（9点后）至午后，此时光线最能照亮瀑布和峡谷，也避开了可能的高峰人流。整体节奏宜慢不宜快，这不是一个冲刺打卡点，而是一场调动所有感官的沉浸式自然体验。路线设计为一个小环线，从主要停车场出发，先以经典的俯视全景震撼开场，然后通过新建步道系统下探至峡谷中部，获得仰视和平视的惊人视角，最后沿着历史小径回到起点，完成从宏观到微观、再从微观回到宏观的完整认知。记得穿最防滑的鞋子，带上防风外套，水雾比想象中更 pervasive。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`瀑布边岩石常年湿滑，水雾弥漫，务必穿着具有优秀抓地力的徒步鞋或登山鞋，普通运动鞋非常危险。
高原天气瞬息万变，即使夏日也可能突然刮风下雨气温骤降，一件防风防水的外套是保命（和保持游览心情）的关键。
停车场自助缴费机可能只接受挪威当地信用卡或硬币，建议提前备好零钱或在附近便利店咨询购买停车卡。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场（Fossli Hotel附近）出发，沿着标识清晰的步道走向那个最经典、出现在无数明信片上的瀑布顶端俯视观景台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着令人惊叹的、现代感十足的“Vøringsfossen瀑布步道”系统开始向下探索，这些钢制栈道和平台会带你穿梭在岩壁之间，每一步都在转换视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到那个最大胆的悬挑观景平台，鼓起勇气站在它的最前端，感受瀑布的轰鸣从脚下深渊直冲而上，水雾轻轻扑在脸上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续沿着步道向下，到达一个相对平缓的中间平台，从这里可以平视瀑布中段的水流如何撞击岩壁，飞散成珠玉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`可以选择沿着历史更悠久的（也更陡峭原始的）“莫克斯特步道”的一部分向上折返，感受早期探险者所走过的路径，回头看看刚才站过的现代平台如同崖壁上的精致装饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`返回到瀑布顶端区域，拜访一下历史悠久的Fossli酒店咖啡馆，坐在窗边点一份热乎乎的华夫饼配棕色奶酪，让轰鸣声佐餐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间和体力允许，可以驾车或步行到峡谷另一侧的“马克河谷观景台”，从对岸回望瀑布全貌，那将是完全不同的、更为宏大的全景视野。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`瀑布底部仰拍视角（需部分徒步）`}</h4>
                  <p className="text-sm text-gray-700">{`从停车场下到河谷底的步道起点附近，找到一个能框住整个瀑布和部分峡谷的开阔地，使用广角镜头，最佳时间是正午前后阳光能照进谷底的时候，构图时纳入一些前景的岩石或植被增加层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`悬空观景台第一人称视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在最突出的悬挑平台边缘，将相机或手机放低，贴近钢格栅地面拍摄，可以同时捕捉到脚下令人眩晕的钢结构网格和奔流的瀑布，极具视觉冲击力，阴天更能突出冷峻的质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Fossli酒店经典远眺位`}</h4>
                  <p className="text-sm text-gray-700">{`在酒店旧址附近的传统观景台，使用长焦镜头压缩空间，将瀑布、层层叠叠的峡谷岩壁和远处的高原全部收纳进画面，下午侧光时岩石纹理和层次感最强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`马克河谷对岸全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`驾车至峡谷对面的观景台，这里是拍摄瀑布如白练坠入绿色深渊的标准全景照的最佳地点，适合清晨或傍晚的柔和光线，可以拍出更丰富的色彩和细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`水雾极大，镜头很快就会蒙上一层细密的水珠，拍摄间隙务必快速擦拭或使用防水罩。想要拍出瀑布水流如丝绢般的柔滑效果，必须使用三脚架和减光镜（ND滤镜），进行长时间曝光（1秒或更长）。尊重其他游客，在热门观景台拍照不要过久占用最佳位置。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`埃德菲尤尔镇上的家庭式客栈或露营地，镇上设施齐全，有超市和餐馆，晚上宁静到只能听到水流声，是深入体验挪威小镇风情的基础。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`哈当厄尔高原上的传统山间小木屋（Hytte），通常位于森林或湖边，需要自驾一段砂石路，拥有完全的私密性和绝美的星空视野，自己生火做饭，体验真正的挪威“弗里卢夫特sliv”（户外生活）。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`哈当厄尔峡湾畔的精品设计酒店，比如在乌尔维克或埃德菲尤尔附近，拥有全景落地窗，直面宁静的峡湾和水墨画般的山色，在极致舒适的现代空间里对比日间瀑布的狂野。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`瀑布旁的Fossli酒店本身就有少量客房，预订一间面向峡谷的房间，意味着你将整夜枕着瀑布的轰鸣入睡，清晨在第一缕阳光照亮水雾时醒来，这是独一无二的历史体验。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`挪威夏季（6-8月）是绝对旺季，所有住宿，尤其是特色小木屋和精品酒店，必须提前数月预订。高原和小镇上的住宿地点分散，除非住在瀑布旁的Fossli，否则没有车几乎寸步难行，自驾是住宿选择自由度的关键。即使是夏季，高原夜晚也可能很冷，预订小木屋时请确认供暖设施是否完备。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开沃尔令斯大瀑布好几个小时了，耳朵里似乎还残留着那种低低的嗡鸣，像是身体记住了一种新的频率。我一直在想，到底是什么让这个地方如此难忘？它当然有视觉上的绝对震撼，但更深的触动，来自于它提供的那种独特的“距离感”。现代步道让你无限接近危险的自然之力，近到水雾能打湿你的睫毛，但同时又用坚固的钢材明确地保护着你。这种“安全的亲近”，让你可以全心全意地去感受恐惧、敬畏和美感，而不必分神于真正的生存威胁。这是一种多么奢侈的体验啊。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都被加速、被平滑、被数字化过滤的时代，沃尔令斯大瀑布是一个顽固的“异数”。它拒绝被简化。它的声音无法被降噪，它的水雾无法被屏蔽，它的规模无法通过屏幕真正感知。它要求你亲自到场，付出体力，忍受天气，调动所有原始的感官去接收它铺天盖地的信息。也正是这种“费力”，让获得的感动如此扎实而持久。它不提供轻松的娱乐，它提供的是洗礼。对于每一位厌倦了浅尝辄止、渴望用双脚丈量世界厚度、用皮肤感受地球脉搏的旅人来说，这里不是又一个景点，而是一个必须前来“报到”的坐标。在这里，你会重新记起自然的重量，以及站在它面前时，自己那颗依然会猛烈跳动的心脏。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stavanger-old-town-gamle-stavanger" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯塔万格老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stavanger Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nusfjord-fishing-village-lofoten" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    努
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">努斯峡湾</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nusfjord</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roros-mining-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    勒
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">勒罗斯采矿镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Røros</p>
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
