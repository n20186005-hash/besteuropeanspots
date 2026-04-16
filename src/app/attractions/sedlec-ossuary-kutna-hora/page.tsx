import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '库特纳霍拉人骨教堂 Sedlec Ossuary｜当死亡成为艺术，在四万骨骸中凝视生命 - 最佳欧洲景点',
  description: '说实话，去之前我做了很久的心理建设。想象中，那该是个阴森恐怖、气味不佳的地方。但当我真正推开那扇不起眼的、位于塞德莱茨修道院墓园旁的小门时，扑面而来的第一感觉竟然是……肃穆的宁静。空气里没有想象中的腐朽气息，只有地下空间特有的、略带泥土味的凉意，混合着微弱的蜡烛蜡味。光线从高处的彩窗透下来，在空气中...',
}

export default function SedlecOssuaryKutnaHoraPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '库特纳霍拉（人骨教堂）', href: '/attractions/sedlec-ossuary-kutna-hora' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">库特纳霍拉（人骨教堂）・Sedlec Ossuary・捷克・库特纳霍拉</h1>
          <p className="text-lg text-gray-600 mb-6">
            说实话，去之前我做了很久的心理建设。想象中，那该是个阴森恐怖、气味不佳的地方。但当我真正推开那扇不起眼的、位于塞德莱茨修道院墓园旁的小门时，扑面而来的第一感觉竟然是……肃穆的宁静。空气里没有想象中的腐朽气息，只有地下空间特有的、略带泥土味的凉意，混合着微弱的蜡烛蜡味。光线从高处的彩窗透下来，在空气中形成几道朦胧的光柱，尘埃在里面缓缓舞动，仿佛时间在这里被按下了慢放键。耳边只有其他访客压得极低的惊叹声，和鞋底摩擦古老石砖的沙沙回响。
然后，你的眼睛才真正开始“阅读”这个空间。起初是整体的震撼：天哪，从墙壁到拱顶，从吊灯到祭坛，目光所及之处，尽是森森白骨，数以万计。但恐怖感稍纵即逝，取而代之的是一种难以言喻的复杂情绪。因为你会发现，这些骨头并非杂乱堆放，而是被以一种近乎强迫症的精确和惊人的艺术美感排列、组合、搭建起来。巨大的枝形吊灯，据说包含了人体的每一块骨头；墙壁上镶嵌着由肩胛骨和盆骨拼成的“花纹”；四个角落垒起巨大的“骨骸金字塔”，顶端戴着金色的王冠。这里没有狰狞，只有一种冷静的、甚至称得上“华丽”的展示。
最触动我的，其实是教堂正中央那个用骨头拼成的施瓦岑贝格家族徽章。徽章下方，一个由骨头组成的天使，一手举着象征胜利的金色桂冠，另一只手却指着旁边一个用颚骨拼成的“沙漏”——这是拉丁语“Memento Mori”（记住你终将死亡）的视觉化体现。那一刻我忽然明白了，这里并非死亡的展览馆，而是一堂关于生命、时间与救赎的宏大布道。这些无名者的骨骸，在一位匠心独运的匠人手下，超越了腐烂与恐惧，成为了提醒生者谦卑、珍惜光阴、追求永恒的媒介。它不回避死亡的必然，却试图在必然中寻找一种神圣的秩序与美感。
离开时，我回头再看一眼那座朴素的白色小教堂。夕阳给它镀上了一层温柔的金边。墓园里绿草如茵，有当地的居民在遛狗，孩子在不远处玩耍。生与死，恐惧与宁静，艺术与遗骸，在这里以一种不可思议的方式达成了和解。人骨教堂不是终点，而是一面镜子，让你不得不直视自己内心对生命有限性的所有思考。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，去之前我做了很久的心理建设。想象中，那该是个阴森恐怖、气味不佳的地方。但当我真正推开那扇不起眼的、位于塞德莱茨修道院墓园旁的小门时，扑面而来的第一感觉竟然是……肃穆的宁静。空气里没有想象中的腐朽气息，只有地下空间特有的、略带泥土味的凉意，混合着微弱的蜡烛蜡味。光线从高处的彩窗透下来，在空气中形成几道朦胧的光柱，尘埃在里面缓缓舞动，仿佛时间在这里被按下了慢放键。耳边只有其他访客压得极低的惊叹声，和鞋底摩擦古老石砖的沙沙回响。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然后，你的眼睛才真正开始“阅读”这个空间。起初是整体的震撼：天哪，从墙壁到拱顶，从吊灯到祭坛，目光所及之处，尽是森森白骨，数以万计。但恐怖感稍纵即逝，取而代之的是一种难以言喻的复杂情绪。因为你会发现，这些骨头并非杂乱堆放，而是被以一种近乎强迫症的精确和惊人的艺术美感排列、组合、搭建起来。巨大的枝形吊灯，据说包含了人体的每一块骨头；墙壁上镶嵌着由肩胛骨和盆骨拼成的“花纹”；四个角落垒起巨大的“骨骸金字塔”，顶端戴着金色的王冠。这里没有狰狞，只有一种冷静的、甚至称得上“华丽”的展示。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最触动我的，其实是教堂正中央那个用骨头拼成的施瓦岑贝格家族徽章。徽章下方，一个由骨头组成的天使，一手举着象征胜利的金色桂冠，另一只手却指着旁边一个用颚骨拼成的“沙漏”——这是拉丁语“Memento Mori”（记住你终将死亡）的视觉化体现。那一刻我忽然明白了，这里并非死亡的展览馆，而是一堂关于生命、时间与救赎的宏大布道。这些无名者的骨骸，在一位匠心独运的匠人手下，超越了腐烂与恐惧，成为了提醒生者谦卑、珍惜光阴、追求永恒的媒介。它不回避死亡的必然，却试图在必然中寻找一种神圣的秩序与美感。</p>
              <p className="text-gray-700 leading-relaxed mb-4">离开时，我回头再看一眼那座朴素的白色小教堂。夕阳给它镀上了一层温柔的金边。墓园里绿草如茵，有当地的居民在遛狗，孩子在不远处玩耍。生与死，恐惧与宁静，艺术与遗骸，在这里以一种不可思议的方式达成了和解。人骨教堂不是终点，而是一面镜子，让你不得不直视自己内心对生命有限性的所有思考。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="库特纳霍拉（人骨教堂）" />
                <InfoRow label="英文名称" value="Sedlec Ossuary" />
                <InfoRow label="正式名称" value="Kostnice v Sedlci (Sedlec Ossuary)" />
                <InfoRow label="国家" value="捷克" />
                <InfoRow label="城市" value="库特纳霍拉" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="一座因中世纪瘟疫、战争与银矿繁荣而诞生，以四万具人骨进行装饰的独一无二的天主教堂藏骨堂。" />
                <InfoRow label="建筑特色" value="外部是一座不起眼的哥特式小教堂，内部则是巴洛克风格主导的、由人骨组成的惊人艺术圣殿。" />
                <InfoRow label="建筑风格" value="巴洛克-哥特式混合风格，内部装饰为骇人而神圣的“人骨艺术”风格。" />
                <InfoRow label="文化价值" value="它代表了欧洲中世纪晚期对死亡“记忆艺术”（Memento Mori）的极致物理化表达，是理解中欧历史、宗教观念与生死哲学的震撼课堂。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="通常开放时间为：四月至九月 上午9:00 - 下午18:00（17:00停止入场）；十月至三月 上午9:00 - 下午17:00（16:00停止入场）。每周日开放时间会推迟至上午10:00开始。请注意，开放时间可能因宗教仪式或特殊维护而临时变更，冬季偶尔会因天气提前关闭，建议行前在其官网或库特纳霍拉旅游信息中心再次确认。" />
              <InfoRow label="门票价格" value="成人票价为160捷克克朗（约合6-7欧元）。学生、65岁以上老人及6-15岁儿童享有优惠票价，通常为110捷克克朗。6岁以下儿童免费。家庭套票（2成人+最多4名儿童）价格约为420捷克克朗。门票通常在现场购买，支持现金（捷克克朗/欧元）和信用卡支付。" />
              <InfoRow label="地址" value="Zámecká 284 03, 284 03 Kutná Hora-Sedlec, Czechia" />
              <InfoRow label="交通方式" value="从捷克首都布拉格出发最为方便。在布拉格中央火车站（Praha hl.n.）搭乘前往库特纳霍拉主火车站（Kutná Hora hl.n.）的列车，车程约55分钟至1小时，班次频繁，每小时约有1-2班。抵达库特纳霍拉主火车站后，出站步行约15分钟即可到达塞德莱茨藏骨堂。或者，你可以从布拉格乘坐长途巴士，但火车是更舒适和可靠的选择。购买车票建议使用捷克铁路（ČD）的官方App或在火车站自动售票机操作。从库特纳霍拉主镇中心出发，也可以乘坐当地的公共汽车前往“Sedlec”站，车程约5分钟。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要理解这座教堂为何存在，你得先回到13世纪的库特纳霍拉。那时，这里因为发现了储量丰富的银矿，一夜之间成为中欧最富有的城市之一，地位堪比布拉格。塞德莱茨的熙笃会修道院也因此香火鼎盛，财力雄厚。1278年，修道院的一位院长从圣地耶路撒冷带回了一把“圣土”，撒在了修道院的墓地里。从此，这片土地被视为神圣的“福地”，整个中欧的贵族和富人都渴望死后能安葬于此，以求灵魂更接近天堂。你可以想象，几个世纪下来，这片墓地变得多么“拥挤”。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，真正的“积累”来自于两次巨大的死亡浪潮。第一次是14世纪中期的黑死病，它横扫欧洲，带走了近三分之一人口，库特纳霍拉也无法幸免，墓园不得不大规模扩建以容纳数以万计的新逝者。紧接着，15世纪初的胡斯战争爆发，这是一场残酷的宗教战争，又在墓地中增添了无数战死者的遗骸。到了15世纪末，为了给新建的哥特式教堂腾出空间，旧墓地被清理，大量的骸骨被暂时存放进了新建的教堂地下室——这就是最初“藏骨堂”的由来。这些骨头，是瘟疫、战争与财富交织的历史最沉默也最沉重的见证者。</p>
              <p className="text-gray-700 leading-relaxed mb-4">骨头就这样静静地躺了几个世纪，直到1870年。当时，这片土地和破败的教堂属于显赫的施瓦岑贝格家族。他们雇请了一位名叫弗朗蒂谢克·林特（František Rint）的木雕师，来整理和重新安置这堆积如山的遗骸。没人确切知道家族主人给了林特什么指示，但最终呈现的结果，超越了所有人的想象。林特没有选择简单地堆放或掩埋，而是决定用这些无名者的骨骸作为材料，进行一场前无古人的创作。他用漂白剂将所有骨头清洗、消毒，然后像对待木材或石材一样，开始进行雕刻、拼接和搭建。</p>
              <p className="text-gray-700 leading-relaxed mb-4">林特的作品充满了巴洛克式的繁复与象征意义。他制作了那个包含人体所有206块骨头的巨大枝形吊灯；用骨头拼出了施瓦岑贝格家族的盾形纹章（纹章上甚至有一个被乌鸦啄食的土耳其士兵眼睛的细节，寓意家族在对抗奥斯曼帝国战争中的功绩）；他用股骨垒成拱柱，用颅骨和胫骨装饰墙壁，甚至用盆骨做成了圣体盒的形状。他的工作既像是一位建筑师，又像是一位神学家，将“死亡”这个主题，用具象的骨骼语言，转化成了一整套关于信仰、纪念和荣耀的视觉系统。经过他的“设计”，这座藏骨堂从单纯的骸骨仓库，蜕变成了一件震撼灵魂的艺术品。</p>
              <p className="text-gray-700 leading-relaxed mb-4">1995年，库特纳霍拉历史城区连同塞德莱茨藏骨堂一起，被联合国教科文组织列入世界遗产名录。今天，它吸引着全球的游客，不再仅仅因为猎奇，更因为其所承载的深厚历史与独特的死亡文化。它强迫我们面对那个所有人都将抵达的终点，但以一种奇异的方式告诉我们：即使是在终极的虚无面前，人类依然试图创造意义、留下印记、建立秩序。这些无言的白骨，因此获得了第二次“生命”，作为历史的讲述者和哲学的沉思对象，继续在时间的长河中低语。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议将参观人骨教堂安排在下午稍晚的时候，比如三点后。一来可以避开从布拉格出发的一日游旅行团高峰（他们多集中在上午至中午），二来午后斜射的光线透过彩窗，会在教堂内投下更加戏剧性、更富层次的光影，非常适合拍照和静静感受。整体游览时间建议预留2-3小时，其中教堂内部沉浸式参观约需1-1.5小时，外部墓园和周边走走约0.5-1小时。游览节奏务必放慢，这里不适合匆匆打卡，需要时间让你的感官和思绪去消化所见的一切。参观结束后，可以步行至库特纳霍拉镇中心，用一顿温暖的晚餐来平复心情，那里的圣芭芭拉教堂也绝对值得一看，两者结合才能完整理解这座银矿之城的辉煌与沧桑。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>教堂内部温度常年较低，即便夏季也建议带一件薄外套。请务必保持肃穆和安静，这不仅是对逝者的尊重，也能让你获得更深刻的体验。如果可能，提前在网上了解一下“Memento Mori”艺术的历史背景，或者到达后租借一个语音导览（通常提供多国语言），你会从单纯的视觉震撼上升到更深的文化理解。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">先在教堂外朴素的墓园里走一圈，看看那些古老的墓碑和绿意，感受生与死比邻而居的日常平静。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">推开那扇低调的木门走下台阶，让眼睛在昏暗光线中适应几秒，准备迎接那个由四万具人骨构成的、超乎想象的内部空间。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">驻足于教堂中央，360度缓慢旋转身体，让整体的视觉冲击力先抵达顶点，看清骨骼是如何被用作“建筑材料”覆盖每一个表面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">仔细打量那座由人体所有类型骨头制成的巨大枝形吊灯，寻找其中隐藏的颅骨、股骨甚至细小的指骨。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走到用骨头拼成的施瓦岑贝格家族徽章前，解读那个被乌鸦啄食的土耳其士兵眼睛的战争寓意，以及旁边象征“勿忘终有一死”的沙漏骨雕。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在四个角落的“骨骸金字塔”前默立片刻，想象它们所代表的数以万计的无名者，他们曾经历的黑死病与战争岁月。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">不要错过祭坛后方相对简朴的侧厅，那里陈列着一些曾在此地发现的、有历史伤痕的颅骨，记录着更真实的暴力过往。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">离开前，在出口处的纪念簿上留下你的感想，或只是静静地坐在长椅上，与这片空间进行最后几分钟无声的对话。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 入口门框仰拍内部全景</h4>
                  <p className="text-sm text-gray-700">站在进入主厅的台阶最下方，用广角镜头向上仰拍，将巨大的枝形吊灯和布满骨饰的拱顶一并纳入画面，能最直观地展现空间的震撼尺度。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 祭坛十字架与骨墙对称构图</h4>
                  <p className="text-sm text-gray-700">站在主厅中轴线上，面向祭坛，将金色的十字架置于画面中央，两侧是由颅骨和股骨构成的对称骨墙作为引导线，营造庄严而诡异的仪式感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 主吊灯特写与彩色玻璃光斑</h4>
                  <p className="text-sm text-gray-700">下午时分，当阳光穿过西侧的彩色玻璃窗，会在吊灯和地面上投下斑斓的光影，此时聚焦于吊灯局部，让彩色的光斑作为背景虚化，画面极具艺术感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 施瓦岑贝格徽章细节刻画</h4>
                  <p className="text-sm text-gray-700">使用中长焦镜头，对准徽章上由骨骼拼出的复杂图案，特别是那只被乌鸦啄食的眼睛（由两块骨头巧妙拼接而成），捕捉这种将死亡、荣耀与艺术结合的诡异精致。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 从侧厅回望主厅空间</h4>
                  <p className="text-sm text-gray-700">参观完侧厅后，站在侧厅入口的拱门下回望主厅，这个框架式构图能将祭坛、吊灯和往来的人群定格成一幅仿佛古典油画般的场景。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 教堂内严格禁止使用闪光灯和三脚架，这是出于对文物保护和参观氛围的考虑，请务必遵守。拍摄时请怀有敬意，避免以轻佻或搞怪的姿态与骨骸装饰合影，当地人对此非常看重。将相机感光度（ISO）调高，利用现场自然光和烛光，反而能拍出更具氛围感和颗粒质感的好照片。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">经济型之选</h4>
                  <p className="text-sm text-blue-800">住在库特纳霍拉镇中心广场旁的家庭式客栈，房间小巧温馨，老板会给你手绘地图并推荐只有本地人才知道的安静小酒馆。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">特色体验之选</h4>
                  <p className="text-sm text-green-800">选择塞德莱茨区域由古老修道院建筑改造的精品酒店，石墙木梁氛围十足，清晨你能在几乎无游客的墓园和教堂外围独自散步，享受第一缕阳光。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">高端奢华之选</h4>
                  <p className="text-sm text-yellow-800">入住库特纳霍拉郊外一座文艺复兴风格的城堡庄园酒店，在奢华的历史氛围中放松身心，并为白天人骨教堂带来的震撼思考提供一个舒适而抽离的反思空间。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">便捷城市之选</h4>
                  <p className="text-sm text-purple-800">如果你计划以布拉格为基地进行一日游，那么选择布拉格老城或火车站附近的优质酒店是最方便灵活的，搭乘早班火车即可轻松抵达。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">若选择住在库特纳霍拉，晚上小镇非常宁静，餐馆关门较早，建议提前安排好晚餐。夏季和圣诞市场期间是旺季，住宿需提前数月预订。库特纳霍拉总体治安良好，但夜间墓园区域毕竟僻静，不建议单独深夜徘徊。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开人骨教堂很久之后，那些由骨骼组成的图案还会不时在脑海中浮现。它带来的不是噩梦，而是一种奇特的清醒。在这个我们习惯性回避死亡、用各种方式装饰和延长生命的时代，这里却把死亡最直接的证据，如此大规模、如此“优雅”地展示在你面前，逼迫你去正视。它拆解了我们对“恐怖”的简单定义，原来当死亡被秩序化、被赋予宗教和艺术意图后，竟然可以激发出一种超越恐惧的沉思。这或许就是中世纪“Memento Mori”传统的核心——不是恐吓，而是提醒：正因为生命有限，才显得无比珍贵；正因为终将化为白骨，当下的爱与善行才具有意义。</p>
              <p className="text-gray-700 leading-relaxed mb-4">所以，我绝不会把它推荐给单纯寻求刺激的人。相反，我会推荐给那些对历史抱有好奇、对生命本质存在追问的旅行者。这里不是鬼屋，而是一所关于存在的哲学圣殿。它用最尖锐的材料，探讨最柔软的命题。当你穿行于那片骨白的世界，你会不由自主地想起自己爱的人，未完成的梦想，以及该如何度过我们终将逝去的时光。这种直达心灵的触动，是任何风景明信片式的景点都无法给予的。专程拜访库特纳霍拉，赴这场与四万逝者的沉默对话，或许是你为自己安排的最深刻的一场生命教育课。在回程的火车上，看着窗外飞驰而过的绿色田野和鲜活村庄，你会比来时，更用力地感受到生的美好。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
