import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙帕齐耶 Monpazier｜法国保存最完美的中世纪“棋盘”小镇 - 最佳欧洲景点',
  description: '车子驶离主干道，钻入一条被高大橡树和低矮石墙夹拥的多尔多涅乡间小路。就在你以为即将迷失在无尽的田野与森林中时，一片密集的、由蜜糖色石灰岩构成的屋顶线突然从地平线上升起。那不是散乱的村庄，而是一个轮廓极其清晰、方方正正的整体，像有人用尺子在天鹅绒般的绿毯上精心画下了一个完美的矩形。这就是你对蒙帕齐耶的...',
}

export default function MonpazierBastidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '蒙帕齐耶', href: '/attractions/monpazier-bastide' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙帕齐耶・Monpazier・法国・多尔多涅省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离主干道，钻入一条被高大橡树和低矮石墙夹拥的多尔多涅乡间小路。就在你以为即将迷失在无尽的田野与森林中时，一片密集的、由蜜糖色石灰岩构成的屋顶线突然从地平线上升起。那不是散乱的村庄，而是一个轮廓极其清晰、方方正正的整体，像有人用尺子在天鹅绒般的绿毯上精心画下了一个完美的矩形。这就是你对蒙帕齐耶的第一眼——一种近乎超现实的秩序感。
把车停在城墙外的空地上，步行穿过那道低矮的、更像是象征意义的圣雅克门。一瞬间，世界安静了。时间的流速仿佛被调慢了。脚下是巨大而光滑的鹅卵石，被七个世纪的脚步磨得温润发亮，在午后的阳光下泛着金属般的光泽。空气里弥漫着干燥的石尘气味、远处人家窗口飘出的炖菜香，还有从广场方向隐约传来的咖啡机蒸汽声。笔直的街道在你面前展开，一眼就能望到尽头另一侧的城墙。每一个街块都大小相同，每一栋房屋的山墙都整齐地对齐着街道的红线。这种极致的规整，初看有些严肃，但很快，你会被其中蕴藏的和谐与宁静所安抚。
走到小镇的心脏——带拱廊的中央广场。这里是整个“棋盘”的“天元”。木筋墙的房屋被厚重的石柱廊连接起来，拱廊下投射出深深浅浅的光影长廊。本地老人坐在长椅上，用你听不懂的奥克语低声交谈，声音在石壁间轻轻回荡。周四的早上，这里会瞬间变身为喧嚣的集市，空气中充斥着奶酪、熟食、新鲜面包和皮革的混合气味，摊贩的叫卖声与邻居间的寒暄声充满了这方形的舞台。但此刻是平日的午后，只有风穿过拱廊的微响，和一只猫踱步走过的轻盈脚步。你忽然明白，这不是一个博物馆式的景点，而是一个仍然按照近八百年前设计初衷运转着的、活生生的社区。
蒙帕齐耶最打动人心的，正是这种“完美的生活机器”感。它没有宏伟的大教堂，也没有奢华的公爵府。它的魅力在于整体，在于每一个细节都服务于一个清晰的逻辑：防御、贸易、社区平等与高效生活。走在其中，你仿佛能触摸到13世纪城市规划师那颗理性、务实，甚至带点理想主义的大脑。这里的一砖一石，都在无声地讲述着一个关于秩序、庇护与日常生活的古老故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子驶离主干道，钻入一条被高大橡树和低矮石墙夹拥的多尔多涅乡间小路。就在你以为即将迷失在无尽的田野与森林中时，一片密集的、由蜜糖色石灰岩构成的屋顶线突然从地平线上升起。那不是散乱的村庄，而是一个轮廓极其清晰、方方正正的整体，像有人用尺子在天鹅绒般的绿毯上精心画下了一个完美的矩形。这就是你对蒙帕齐耶的第一眼——一种近乎超现实的秩序感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在城墙外的空地上，步行穿过那道低矮的、更像是象征意义的圣雅克门。一瞬间，世界安静了。时间的流速仿佛被调慢了。脚下是巨大而光滑的鹅卵石，被七个世纪的脚步磨得温润发亮，在午后的阳光下泛着金属般的光泽。空气里弥漫着干燥的石尘气味、远处人家窗口飘出的炖菜香，还有从广场方向隐约传来的咖啡机蒸汽声。笔直的街道在你面前展开，一眼就能望到尽头另一侧的城墙。每一个街块都大小相同，每一栋房屋的山墙都整齐地对齐着街道的红线。这种极致的规整，初看有些严肃，但很快，你会被其中蕴藏的和谐与宁静所安抚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到小镇的心脏——带拱廊的中央广场。这里是整个“棋盘”的“天元”。木筋墙的房屋被厚重的石柱廊连接起来，拱廊下投射出深深浅浅的光影长廊。本地老人坐在长椅上，用你听不懂的奥克语低声交谈，声音在石壁间轻轻回荡。周四的早上，这里会瞬间变身为喧嚣的集市，空气中充斥着奶酪、熟食、新鲜面包和皮革的混合气味，摊贩的叫卖声与邻居间的寒暄声充满了这方形的舞台。但此刻是平日的午后，只有风穿过拱廊的微响，和一只猫踱步走过的轻盈脚步。你忽然明白，这不是一个博物馆式的景点，而是一个仍然按照近八百年前设计初衷运转着的、活生生的社区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`蒙帕齐耶最打动人心的，正是这种“完美的生活机器”感。它没有宏伟的大教堂，也没有奢华的公爵府。它的魅力在于整体，在于每一个细节都服务于一个清晰的逻辑：防御、贸易、社区平等与高效生活。走在其中，你仿佛能触摸到13世纪城市规划师那颗理性、务实，甚至带点理想主义的大脑。这里的一砖一石，都在无声地讲述着一个关于秩序、庇护与日常生活的古老故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙帕齐耶`} />
                <InfoRow label="英文名称" value={`Monpazier`} />
                <InfoRow label="正式名称" value={`Monpazier`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`多尔多涅省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国西南部保存最为完整、最具代表性的13世纪“巴斯蒂德”（防御性新城）典范，被誉为“巴斯蒂德王后”。`} />
                <InfoRow label="建筑特色" value={`严格按照几何正交网格规划，以中央方形广场为核心，街道笔直相交，形成无比规整的“棋盘”格局。`} />
                <InfoRow label="建筑风格" value={`中世纪军事与民用建筑的结合体，体现哥特晚期向文艺复兴过渡时期的简约实用风格。`} />
                <InfoRow label="文化价值" value={`一座活生生的中世纪城市规划“化石”，凝固了英法王权争夺与地方自治起源的历史瞬间，展现了13世纪理想城市社区的乌托邦蓝图。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇广场、街道及公共区域全天24小时开放。镇内的小型博物馆（如“蒙帕齐耶之家”）开放时间通常为4月至10月，每日10:00-12:30，14:00-18:00；11月至3月仅周末开放或需预约。集市每周四上午在中央广场举行，是体验小镇灵魂的最佳时段。`} />
              <InfoRow label="门票价格" value={`进入蒙帕齐耶小镇本身免费。参观小型博物馆或历史展览的门票约为3-5欧元。广场上的带拱廊建筑可自由穿行探索。`} />
              <InfoRow label="地址" value={`Place des Cornières, 24540 Monpazier, France`} />
              <InfoRow label="交通方式" value={`蒙帕齐耶地处僻静，最适合自驾。从波尔多-梅里尼亚克机场出发，租车沿A62/A89高速公路向东，转入多尔多涅省道，约2小时车程。搭乘公共交通颇具挑战：先从波尔多圣让火车站乘TER区域火车至贝尔热拉克（约1.5小时，班次每日数班），再从贝尔热拉克汽车站换乘少量班次的省级巴士（线路可能为Trans Périgord），前往蒙帕齐耶（约1小时，班次稀疏，务必提前查询当日时刻表）。强烈建议下载当地交通App或直接预约出租车。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事始于1284年。那时的法国西南部，可不是今天这幅田园牧歌的景象。这里是金雀花王朝的英国领地阿基坦公国与法兰西卡佩王朝领土交错的“中间地带”，战乱频仍，权力真空。为了巩固统治、开拓财源并安置人口，一种新型的城镇模式应运而生，它就是“巴斯蒂德”。而蒙帕齐耶，是其中最耀眼的一颗星。它的建立是一份“合资协议”的产物：一方是英国国王爱德华一世（就是那位“长腿爱德华”，同时也是阿基坦公爵），他提供王权的许可和保护；另一方是当地一位有权势的贵族——佩里戈尔领主皮埃尔·德·贡东。他们共同规划，许诺给前来定居的居民土地、免税期和重要的自治权。这种模式像一张诱人的传单，吸引着渴望安定与机会的农民、手工业者和商人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在佩里戈尔这片高地上，工匠们拉起了准绳，打下了界桩。蒙帕齐耶从诞生之初就不是自然生长的村落，而是一件“作品”。整个城镇被设计成一个长约400米、宽约220米的长方形，外围挖有护城河并筑有城墙（如今部分已成为环城步道）。内部则被笔直的道路划分为规整的街块，每个街块又被细分成狭长的“地皮”分配给居民。中央那个巨大的方形广场，是所有公共生活的焦点：市场、集会、审判都在此进行。广场四周的建筑必须建有统一的石拱廊，为商业活动遮风挡雨，也赋予了小镇独特而统一的视觉标志。这种设计高效、公平，充满了乌托邦式的社会理想。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，中世纪的理想国注定要经历现实的淬炼。蒙帕齐耶身处英法百年战争（1337-1453）的漩涡中心，其战略位置使它成为双方反复争夺的棋子。城墙一次次被加固，居民们习惯了在警报声中躲进地窖。战争不仅带来了破坏，也深刻地改变了小镇的人口和忠诚。最终，随着法国人的胜利，蒙帕齐耶并入了法兰西王国。但和平并未持久，紧随其后的宗教战争（16世纪）又一次将这座小镇卷入血腥的冲突。胡格诺派教徒曾在此坚守，城墙见证了更多的围攻与苦难。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当战火的硝烟终于散去，进入相对平静的17、18世纪，蒙帕齐耶却因为偏离了新兴的主要贸易路线而逐渐被边缘化。它没有跟上工业化或大规模城市改造的步伐。讽刺的是，正是这种“被遗忘”，成了它最大的幸运。因为没有经济动力去拆旧建新，那些中世纪的街道肌理、广场拱廊、古老的房屋立面，都被奇迹般地保存了下来。它像一枚被时光琥珀完整包裹的昆虫，细节栩栩如生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到19世纪末，法国的历史文物学家们才重新“发现”了蒙帕齐耶，惊叹于它无与伦比的完整性。它被列为历史古迹，得到了精心的保护。今天，你看到的不仅仅是石头建筑，更是一部立体的、可以步入其中的中世纪城市法典。每一处规划，都诉说着关于安全、社区与商业的古老智慧。蒙帕齐耶不再是一个边境要塞，但它守护着一段更为珍贵的东西——人类对有序生活空间的最初梦想。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味蒙帕齐耶，建议你留出一整个白天，或者至少一个充足的下午。最佳抵达时间是上午十点后或午后，避开可能（但很少）的旅游小巴。游览的核心在于“漫步”与“发现”，节奏要慢。从小镇南侧的圣雅克门进入，仿佛穿越回13世纪的新移民，沿着主轴街道向北直抵心脏——中央广场。以此为中心，像棋盘上的“王”一样，向四个方向探索笔直的街道和隐藏的角落。最后绕行外围的城墙步道，从外部再次审视这座完美的几何体。整体耗时约3-4小时，这还不包括在广场咖啡馆发呆的时间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇地面全是鹅卵石，请务必穿一双舒适耐磨的平底鞋。
周四上午是集市日，最为热闹，如果想感受喧嚣的市井气可选此时到访；若追求极致的宁静，则避开周四上午。
这里几乎没有大型商业设施，餐馆和小店都很家庭式，请享受这份质朴，并准备好现金（有些小店可能不收信用卡）。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从南边的圣雅克门踏入小镇，让眼睛适应那骤然收窄却又无限延展的笔直街道透视。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走到带拱廊的中央广场，用手触摸那些支撑了七个世纪的冰凉石柱，感受拱廊下光影的缓慢移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一个拱廊下的咖啡馆坐下，点一杯浓缩咖啡，静静观察广场方寸之地里上演的平静日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`以广场为中心，随意选择一条辐射出去的小街探索，注意观察每家每户门前那些编号古老的排水石槽和门楣上的雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找“蒙帕齐耶之家”这个小博物馆，进去看看那些展现小镇建造契约、古老工具和居民生活的朴实展品。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去广场北侧看一看古老的公共面包烤炉和木质称量谷物用的“公社量具”，它们是中世纪社区集体生活的鲜活遗存。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着小镇东侧或西侧保存完好的城墙基址散步，从外部感受这座“矩形堡垒”的轮廓与尺度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，再次回到中央广场，看夕阳的金色如何为蜜糖色的石墙涂上最后一层温暖的釉彩。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`中央广场拱廊纵深`}</h4>
                  <p className="text-sm text-gray-700">{`站在广场任意一角，利用石柱廊形成的天然引导线构图，拍摄拱廊向远处汇聚的强烈透视，最佳光线是侧光充足的上午或下午。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣雅克门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`从城门内侧向外拍，用古老的石拱门作为画框，框住门外郁郁葱葱的田园风光，形成中世纪与自然的对话，清晨或黄昏的光线尤为柔和。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`无人机视角（如允许）`}</h4>
                  <p className="text-sm text-gray-700">{`在城外安全空地升空，垂直俯拍整个小镇，完美捕捉其令人惊叹的正交网格规划与矩形轮廓，晴朗无风的白天最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`街角光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`在一条东西向的小街上等待午后低角度的阳光，拍摄光线将房屋拉长的影子投射在对面墙壁上的几何图案，充满抽象美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`民居门楣细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`许多古老住宅的门楣或窗楣上有雕刻的日期、符号或工匠标记，用大光圈镜头贴近拍摄这些充满故事感的岁月痕迹。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是长者时，请务必先微笑示意并获得默许，尊重他们的隐私。`}</li>
                <li>• {`使用无人机前，请详细了解法国最新的无人机飞行法规，并确保不在人群上空飞行。`}</li>
                <li>• {`阴天时石头的色彩会显得暗淡，尽量选择晴朗天气拍摄，能让蜜糖色的石灰岩焕发光彩。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`广场拱廊旁的老式小旅馆，房间不大但干净温馨，晚上能听见石板路上最后的脚步声归于寂静，老板会给你手绘一张小镇秘密角落的地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由中世纪石屋改造的精品民宿，保留了原始的壁炉和木梁，浴室却现代舒适，女主人会用本地食材为你准备一顿地道的佩里戈尔早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟可达的佩里戈尔乡间贵族庄园酒店，房间俯瞰私密花园或葡萄园，提供米其林推荐的餐厅和露天泳池，是探索小镇后完美的奢华避世所。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`修道院改建`}</h4>
                  <p className="text-sm text-purple-800">{`位于邻近村庄的15世纪修道院改建的精品酒店，充满宁静的禅意，适合寻求彻底宁静与历史沉浸感的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇内的住宿数量非常有限，务必提前数月预订，尤其是在夏季旅游旺季和集市日。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`住在镇内才能真正体验入夜后和清晨游人未至时，那份只属于本地人的静谧魔力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`多尔多涅乡间夜间行车需小心野生动物，如果住在镇外，建议天黑前返回。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开蒙帕齐耶许久，我的脑海里依然清晰地浮现着那张由街道构成的、严整的棋盘。它带给我的震撼，不同于巴黎圣母院的雄伟或圣米歇尔山的奇幻，而是一种理性的、安宁的、深植于大地的力量。在这个追求效率、崇尚扩张、城市面貌日趋雷同的时代，蒙帕齐耶像一则来自过去的、沉静而坚定的寓言。它告诉我们，一座城市可以不必无序蔓延，生活可以存在于一种精心设计的、人性化的尺度之中。它的美，不在于单个建筑的惊世骇俗，而在于整体与部分之间那种无懈可击的和谐。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于每一位厌倦了浮光掠影、渴望触摸历史真实纹理的旅人来说，蒙帕齐耶是一个必须到来的地方。它不仅仅是一个“景点”，更是一次关于秩序、社区与持久性的沉思。在这里，你会慢下来，你会注意到阳光移动的轨迹，会听到自己脚步在石头上回响的声音。你会感受到，人类对于安居乐业、对于一个有庇护所、有邻里、有广场可以相聚的“家”的渴望，跨越了七个世纪，依然如此鲜活。这方完美的矩形，是动荡历史中一颗凝固的智慧结晶，提醒着我们：最好的保护，有时源于被遗忘；而最动人的存在，往往是那种安静地、持续地、一代又一代地，过着本真生活的地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/eus-pyrenees-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    厄
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">厄斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eus</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-dusse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于塞城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château d'Ussé</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rocamadour-cliff-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗卡马杜尔悬崖城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rocamadour</p>
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
