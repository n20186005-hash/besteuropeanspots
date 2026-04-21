import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布里乌德 Brioude｜朝圣路上的多彩宝石，探访奥弗涅最大罗马式教堂的秘密纹路 - 最佳欧洲景点',
  description: '第一次站在圣朱利安大教堂前，你可能不会立刻被它的规模震慑——它不像巴黎圣母院那样直冲云霄，而是敦实地、温暖地匍匐在布里乌德老城的中心，用一种赭石色与暗粉色交织的温柔色调拥抱着你。但当你推开那扇厚重的木门，所有预先的想象都会被瞬间击碎。一股混合着古老石头凉意、隐约蜡烛蜂蜡香气和岁月尘埃的空气扑面而来，',
}

export default function BrioudeBasilicaStJulienPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '布里乌德', href: '/attractions/brioude-basilica-st-julien' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布里乌德・Brioude・法国・布里乌德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次站在圣朱利安大教堂前，你可能不会立刻被它的规模震慑——它不像巴黎圣母院那样直冲云霄，而是敦实地、温暖地匍匐在布里乌德老城的中心，用一种赭石色与暗粉色交织的温柔色调拥抱着你。但当你推开那扇厚重的木门，所有预先的想象都会被瞬间击碎。一股混合着古老石头凉意、隐约蜡烛蜂蜡香气和岁月尘埃的空气扑面而来，而最夺目的是眼前的光影与色彩：中殿两侧的墙壁，完全不是寻常教堂肃穆的灰白，而是由成千上万块切割精细的砂岩、火山凝灰岩和玄武岩拼贴而成，赭红、鹅黄、灰绿、淡紫……这些来自奥弗涅大地的天然色彩，被编织成巨大的菱形网格、十字花纹和螺旋图案，从地面一直蔓延到高高的拱廊。午后的阳光透过高窗斜射进来，仿佛给这面巨幅的“石头挂毯”打上了一层生动的侧光，每一种颜色都在呼吸，在低语。
这里的声音是包裹性的。你的脚步声在石地板上发出空旷的回响，与远处某个角落游客压低了的惊叹声交织。偶尔，管风琴试音的某个低沉音符会不知从何处升起，在拱顶下嗡嗡地共振片刻，然后又归于寂静。你会发现总有几位老人，静静地坐在长椅上，他们不是游客，而是这里的“常客”。对于布里乌德人来说，这座教堂从来不是冰冷的纪念碑，它是生活的背景音，是每周集市日路过时的一个点头致意，是婚礼钟声响起的地方，也是内心烦闷时可以走进来独自坐一会儿的、有颜色的宁静。
它的核心魅力，恰恰在于这种“神圣的日常感”与“极致的艺术性”不可思议的结合。那些绚烂的石头图案，并非为了炫技，而是中世纪工匠一种深刻的虔诚表达——他们将采自附近山丘、河床的石头，视为上帝创造的、本身就蕴含光与美的材料，通过最虔诚的劳作将其重新组合，献给殉道者圣朱利安。在这里，信仰不是通过恐怖的最终审判图来震慑你，而是通过一种和谐、有序、充满生命力的美来抚慰和提升你。你会觉得，这座教堂本身就是大地开出的一朵最坚韧、最斑斓的花。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一次站在圣朱利安大教堂前，你可能不会立刻被它的规模震慑——它不像巴黎圣母院那样直冲云霄，而是敦实地、温暖地匍匐在布里乌德老城的中心，用一种赭石色与暗粉色交织的温柔色调拥抱着你。但当你推开那扇厚重的木门，所有预先的想象都会被瞬间击碎。一股混合着古老石头凉意、隐约蜡烛蜂蜡香气和岁月尘埃的空气扑面而来，而最夺目的是眼前的光影与色彩：中殿两侧的墙壁，完全不是寻常教堂肃穆的灰白，而是由成千上万块切割精细的砂岩、火山凝灰岩和玄武岩拼贴而成，赭红、鹅黄、灰绿、淡紫……这些来自奥弗涅大地的天然色彩，被编织成巨大的菱形网格、十字花纹和螺旋图案，从地面一直蔓延到高高的拱廊。午后的阳光透过高窗斜射进来，仿佛给这面巨幅的“石头挂毯”打上了一层生动的侧光，每一种颜色都在呼吸，在低语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的声音是包裹性的。你的脚步声在石地板上发出空旷的回响，与远处某个角落游客压低了的惊叹声交织。偶尔，管风琴试音的某个低沉音符会不知从何处升起，在拱顶下嗡嗡地共振片刻，然后又归于寂静。你会发现总有几位老人，静静地坐在长椅上，他们不是游客，而是这里的“常客”。对于布里乌德人来说，这座教堂从来不是冰冷的纪念碑，它是生活的背景音，是每周集市日路过时的一个点头致意，是婚礼钟声响起的地方，也是内心烦闷时可以走进来独自坐一会儿的、有颜色的宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的核心魅力，恰恰在于这种“神圣的日常感”与“极致的艺术性”不可思议的结合。那些绚烂的石头图案，并非为了炫技，而是中世纪工匠一种深刻的虔诚表达——他们将采自附近山丘、河床的石头，视为上帝创造的、本身就蕴含光与美的材料，通过最虔诚的劳作将其重新组合，献给殉道者圣朱利安。在这里，信仰不是通过恐怖的最终审判图来震慑你，而是通过一种和谐、有序、充满生命力的美来抚慰和提升你。你会觉得，这座教堂本身就是大地开出的一朵最坚韧、最斑斓的花。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布里乌德`} />
                <InfoRow label="英文名称" value={`Brioude`} />
                <InfoRow label="正式名称" value={`圣朱利安大教堂，布里乌德`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`布里乌德`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`奥弗涅地区最大、最重要的罗马式教堂，曾是中世纪通往圣地亚哥·德孔波斯特拉朝圣之路上的关键驿站。`} />
                <InfoRow label="建筑特色" value={`以其内部令人惊叹的彩色石材砌筑而闻名，利用当地火山岩的自然色差，构筑出如织物般细腻生动的几何与花卉图案。`} />
                <InfoRow label="建筑风格" value={`奥弗涅罗马式建筑的杰出典范，兼具早期基督教巴西利卡布局的庄重与本地独特的装饰热情。`} />
                <InfoRow label="文化价值" value={`一座用石头谱写的彩色史诗，见证了中世纪工匠的虔诚、技艺与对光与色彩的神学理解。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂全年每日开放，内部参观时间通常为夏季（4月至9月）上午9点至晚上7点，冬季（10月至3月）上午9点至下午6点。请注意，弥撒期间（通常是周日早上及平日特定时段）谢绝游客参观，具体时间表会张贴在入口处。节假日开放时间可能缩短，建议行前在官网或当地旅游局确认。`} />
              <InfoRow label="门票价格" value={`进入教堂主体免费，欢迎自愿捐赠以支持维护。有时会提供付费的导览手册或语音导览（约3-5欧元）。地下考古藏馆和珍宝室仅在特定日期开放，或有少量门票费用（约2-4欧元）。`} />
              <InfoRow label="地址" value={`Place Saint-Julien, 43100 Brioude, France`} />
              <InfoRow label="交通方式" value={`从最近的国际机场克莱蒙-费朗奥弗涅机场（CFE）出发，驾车沿A75高速公路向南行驶约70公里，车程50分钟。乘坐公共交通：先从机场乘巴士或出租车至克莱蒙费朗火车站，然后转乘TER（区域快铁）列车前往布里乌德站，车程约1小时15分钟，班次每天约5-8趟，可在SNCF官网或车站购票。从里昂或巴黎出发，搭乘TGV高速火车至克莱蒙费朗站后再转TER是更常见的选择。布里乌德火车站步行至教堂仅需10分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲圣朱利安大教堂的故事，得从一个有点血腥的传说开始。大约在公元三世纪，一位名叫朱利安的罗马士兵，因为皈依了基督教，据说在此地被斩首殉道。他的鲜血渗入土地，奇迹开始流传，一处小小的纪念祠便在此建立。到了五世纪，一位主教决定将朱利安的遗骸迁葬于此，小小的布里乌德就此与这位圣徒的命运紧紧绑定，成为了早期的一个朝圣点。但真正改变它命运的，是那股席卷中世纪欧洲的狂热——通往西班牙圣地亚哥·德孔波斯特拉的朝圣之路。布里乌德恰好位于勒皮之路这条重要支线上，成千上万的朝圣者拖着疲惫的身躯，从法国中部南下，急需一个重要的站点来获得精神慰藉和肉体休整。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在十一世纪末到十二世纪中叶，当地的主教和贵族们决心建造一座配得上这位圣徒和汹涌人潮的宏伟教堂。他们没有从远方运来昂贵的白色石材，而是将目光投向了脚下的土地。奥弗涅是一片火山之地，大自然馈赠了丰富的彩色石材：来自Volvic的深灰色玄武岩，来自Brassac的赭红色砂岩，来自附近河床的鹅黄色石灰华。工匠们，这些无名的艺术家，像制作最精美的马赛克或编织挂毯一样，将这些石头切割成规整的小块，根据颜色精心排列，砌成了我们今天看到的墙壁。这不仅仅是为了美观，更是一种神学象征：不同颜色的石头团结在一起，象征着在基督里合而为一的教会。教堂的平面设计是经典的拉丁十字，拥有宽阔的中殿和回廊，足以容纳大量朝圣者环绕圣坛，瞻仰安放圣朱利安遗骸的圣龛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它躲过了宗教战争的严重破坏，却在法国大革命时期经历了身份危机。教堂被改为“理性神殿”，圣朱利安的遗骸被匆忙藏匿以免被毁。十九世纪，它迎来了著名的“修复者”维奥莱-勒-杜克的门徒们。他们怀着对中世纪“纯粹性”的执着，做了一些今天我们看来颇有争议的改动：比如他们认为中世纪教堂内部原本就是色彩斑斓的（他们是对的），但却用当时的新颜料重新绘制了某些部分，这种“修复”反而在一定程度上覆盖了原始石材的微妙色泽。幸运的是，石头本身的拼贴图案太强大，依然穿透了时光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入二十世纪，当人们开始用更科学的眼光审视遗产时，圣朱利安大教堂真正的价值才被重新“发现”。艺术史家们惊叹于它色彩运用的前卫与和谐，将其誉为“罗马式的彩色交响乐”。近年来精心的清洁和维护，逐步去除了后世添加的厚重涂料，让那些沉睡已久的石头原色——那些来自火山、河流与泥土的本色——重新焕发光彩。它不再仅仅是朝圣路上的一站，而是成为所有寻找美、宁静与历史深度的人们的目的地本身。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的上午，大约九点半左右抵达布里乌德。这样既能避开可能的人流（虽然这里从来不会拥挤），又能看到晨光逐渐照亮教堂东侧多彩立面的过程。整个深度游览需要预留至少3到4小时，节奏一定要慢，因为这里的美在于细节和氛围，需要你停下来，让眼睛适应光线的变化，用手指（在允许的情况下）轻轻触摸那些冰凉的、纹理各异的石头。游览的核心逻辑是从外到内，从整体到细节，最后融入老城的环境。先环绕教堂外部，感受它的体量与环境关系，然后进入内部，让色彩的第一波冲击过去后，开始细细“阅读”墙壁、柱头和光影。最后，走出教堂，在宁静的老城街道散步，从日常生活的角度回望这座奇迹。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日早上通常有多场弥撒，此时游览内部会受到限制且需保持绝对安静，计划行程时最好避开这个时段。教堂内部石地可能因天气潮湿而略显湿滑，建议穿着防滑舒适的鞋子。虽然免费进入，但入口处通常设有捐赠箱，准备一些零钱欧元是表达尊重和支持维护的好方式。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从老城石板路漫步而来，先别急着进去，绕到教堂东侧的半圆形后殿，仰头看看那些层层叠叠的拱券装饰和彩色石材如何与蓝天构成一幅生动的几何画。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开北侧那扇有着古老铁艺的门扉，踏入中殿，第一时间不要看任何说明，只是静静站在入口处，让那面巨大的、斑斓的彩色石墙像温暖的潮水一样充满你的整个视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着中殿缓步向前，在接近唱诗班席的位置停下来，转身回望你来时的大门，感受这个纵向空间的深邃与尽头玫瑰窗投下的光束如何引导你的视线与思绪。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`凑近南侧廊的墙壁，仔细辨认那些彩色石块拼出的图案，你会发现除了菱形网格，还有隐藏的十字、花朵甚至可能的小动物轮廓，每一寸都是匠心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走下台阶，去探访那幽暗而庄严的地下圣堂，这里保存着教堂最古老的部分，空气更凉，氛围也更加神秘静谧，是沉淀心情的好地方。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找中殿那些雕刻着古怪人脸、野兽和圣经故事的柱头，试着解读这些千年以前石匠留下的幽默、恐惧与教诲，它们是与墙上彩色图案不同的另一种叙事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂南门出来，坐在广场边的长椅上，点一杯咖啡，看鸽子在圣朱利安雕像周围起落，观察本地人如何自然而然地穿过这座伟大的建筑，去往集市或回家。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，沿着教堂西侧的小巷随意走走，从不同的角度和距离回望教堂的钟楼与屋顶，你会发现它已经完全融入了小镇的红瓦屋顶之中，成为生活的一部分。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`中殿仰拍拱顶与高窗`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光明媚的上午10点至下午2点之间，站在中殿中央偏后位置，将相机贴近地面向上仰拍，能捕捉到彩色石墙向上延伸、汇入深邃拱顶的壮观纵深感，阳光从高窗射入形成的光柱是点睛之笔。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`南侧耳堂彩石墙特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光会恰好洒在南侧耳堂的墙壁上，这时靠近拍摄石材接缝的细节，暖色调的光线会让赭红色和黄色的石块散发出如蜂蜜与红酒般醇厚的光泽，建议使用大光圈虚化背景，突出纹理。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`北门廊浮雕与光影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚的斜射光会为北门廊上那些常常被忽略的罗马式浮雕（如圣徒像、葡萄藤雕刻）带来戏剧性的阴影效果，适合拍摄有故事感的局部特写，构图时可以带入一部分地面石板。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从老城街道远眺教堂后殿`}</h4>
                  <p className="text-sm text-gray-700">{`从Rue du Palais这条小街向东望去，可以看到教堂后殿完美的半圆形轮廓叠在层层民居的红瓦屋顶之上，下午的光线最佳，能勾勒出建筑的立体感，拍摄时等待一两个行人或一只猫经过画面会增加生动感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`地下圣堂的幽暗氛围`}</h4>
                  <p className="text-sm text-gray-700">{`地下圣堂光线昏暗，需要调高ISO或使用三脚架（若允许），对准那些被微弱射灯照亮的古老石柱基座或拱券，能拍出充满历史厚重感和神秘感的画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用三脚架在教堂内部通常是被允许的，但务必确保不会阻碍通道或其他游客，弥撒期间绝对禁止。室内拍摄请务必关闭闪光灯，以免破坏氛围并对珍贵的古迹造成潜在损害。最好的拍摄光线在晴天上午十点后到下午四点前，此时阳光角度能让彩色石材的魅力最大化。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔静谧民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在阿列河畔一栋由老石屋改造的民宿里，清晨推开窗就能看到水面雾气和对岸教堂钟楼的倒影，主人会为你准备好用本地蜂蜜和核桃制作的传统早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`藏身于教堂仅一街之隔的十六世纪联排别墅内，房间保留了原始的木梁和石墙，现代设计的家具与之巧妙融合，夜晚能听到隐约的教堂钟声，安全感十足。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`郊外田园风情客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`如果你自驾，可以选择距离小镇三公里外的一处家庭农场客栈，住在充满干草香味的阁楼房间，晚上在院子里就能看到璀璨的星空，体验真正的奥弗涅乡村宁静。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`朝圣者旅舍风格青旅`}</h4>
                  <p className="text-sm text-purple-800">{`对于独自旅行或预算有限的游客，教堂附近就有提供简单床位的招待所，虽然设施朴素，但能遇到世界各地的步行或骑行朝圣者，交换故事的氛围独一无二。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布里乌德是个非常安全宁静的小镇，夜间漫步毫无压力。夏季（尤其是七、八月朝圣旺季）和周末的住宿相对紧俏，建议提前一两周预订。如果你想体验每周六上午热闹的市集，选择住在老城中心步行范围内会非常方便，市集的奶酪、香肠和新鲜果蔬本身就是一场感官盛宴。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开布里乌德很久以后，我发现自己最常回味的，不是某张惊艳的照片，而是那种浑身被一种温和的、彩色的宁静所包裹的感觉。在这个追求感官刺激和网红效应的时代，圣朱利安大教堂提供了一种截然相反的体验：它不试图用巨大或辉煌来压倒你，而是邀请你走进来，慢下来，用眼睛去抚摸每一块石头的颜色和温度。它告诉你，神圣可以不是苍白和冰冷的，它可以是大地的颜色，是工匠手掌的温度，是历经千年依然鲜活的、有序的美丽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个地方之所以应该被列入每一位深度旅行者的清单，正是因为它教会我们一种“深度观看”的能力。在这里，你会发现真正的奢侈不是金碧辉煌，而是时间与匠心共同完成的、不可复制的和谐。它让我们想起，人类曾经用多么朴素又多么充满智慧的方式，去表达对生命、对信仰、对美的理解。当你穿行在那些由火山石和河床石构成的色彩之间，你仿佛能触摸到中世纪那个更慢、更专注的世界的心跳。在布里乌德，你带走的不仅仅是对一座教堂的记忆，更是一种关于如何发现平凡材料中非凡之美的目光，一种在任何风景中都能找到内在秩序与宁静的心态。这，或许才是旅行能带给我们的、最持久的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-peyrepertuse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩雷帕蒂斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Peyrepertuse</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cordes-sur-ciel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔德圣谢鲁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cordes-sur-Ciel</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/semur-en-auxois" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瑟
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瑟米尔昂诺苏瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Semur-en-Auxois</p>
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
