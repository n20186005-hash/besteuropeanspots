import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '欧特福尔城堡 Château de Hautefort｜从防御要塞到古典主义瑰宝的华丽蜕变 - 最佳欧洲景点',
  description: '嘿，朋友，想象一下，当你驾车在法国多尔多涅起伏的丘陵和茂密的橡树林间穿行，转过一个不起眼的弯道，突然间，它就像一场过于美好的海市蜃楼，撞进你的视野——欧特福尔城堡。它不是缓缓出现，而是带着一种近乎傲慢的优雅，完整地、戏剧性地矗立在一片高地上。第一眼，你几乎会忘记呼吸。那不是印象中带着尖塔和阴郁气息的...',
}

export default function ChateauDeHautefortPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '多尔多涅省，欧特福尔', href: '/destinations/france' },
            { label: '欧特福尔城堡', href: '/attractions/chateau-de-hautefort' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`欧特福尔城堡・Château de Hautefort・法国・多尔多涅省，欧特福尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下，当你驾车在法国多尔多涅起伏的丘陵和茂密的橡树林间穿行，转过一个不起眼的弯道，突然间，它就像一场过于美好的海市蜃楼，撞进你的视野——欧特福尔城堡。它不是缓缓出现，而是带着一种近乎傲慢的优雅，完整地、戏剧性地矗立在一片高地上。第一眼，你几乎会忘记呼吸。那不是印象中带着尖塔和阴郁气息的堡垒，而是一座浅色石料筑成的、比例完美的宫殿。阳光打在它优雅的弧形屋顶和对称的角楼上，散发着蜂蜜般温暖的光泽，四周是修剪得一丝不苟、如同绿色刺绣般的法式花园。整个场景宁静、有序，甚至有些梦幻，与你一路走来所见的粗犷自然和古老乡村形成了奇妙的对比。
把车停好，穿过两旁矗立着古老悬铃木的林荫道走近它。空气里有刚割过的青草甜香，混合着古老石墙在阳光下散发的、略带潮湿的矿物气息。除了远处花园里喷泉的潺潺水声和鸟鸣，这里安静得能听见自己的脚步声。你会看到当地人牵着狗在城堡外围的步道上散步，或者坐在长椅上静静看书。对他们而言，这不仅仅是一个景点，更像是社区的后花园，一个骄傲的地标，静静地讲述着这片土地几个世纪以来的高贵与沉浮。城堡倒映在前方的水塘里，随着微风泛起粼粼波光，那份从容不迫的美，瞬间就能抚平旅途的所有焦躁。
而它最打动人心的魅力，恰恰藏在这份完美的表象之下。当你再仔细看，会发现这古典主义杰作的基底，依然是中世纪顽石的冷峻线条。一些厚重的墙基、深嵌的窗户，隐约透露着它作为防御要塞的出身。这种反差构成了欧特福尔独一无二的故事感：它不是凭空诞生的艺术幻想，而是一场历经数百年的、充满野心与品味的“华丽变身”。你来到这里，不仅是参观一座美丽的城堡，更是要阅读一部用石头写就的传记，关于权力、艺术、毁灭与重生，关于一个家族如何将自己的梦想，一砖一瓦地刻进多尔多涅的天空线里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下，当你驾车在法国多尔多涅起伏的丘陵和茂密的橡树林间穿行，转过一个不起眼的弯道，突然间，它就像一场过于美好的海市蜃楼，撞进你的视野——欧特福尔城堡。它不是缓缓出现，而是带着一种近乎傲慢的优雅，完整地、戏剧性地矗立在一片高地上。第一眼，你几乎会忘记呼吸。那不是印象中带着尖塔和阴郁气息的堡垒，而是一座浅色石料筑成的、比例完美的宫殿。阳光打在它优雅的弧形屋顶和对称的角楼上，散发着蜂蜜般温暖的光泽，四周是修剪得一丝不苟、如同绿色刺绣般的法式花园。整个场景宁静、有序，甚至有些梦幻，与你一路走来所见的粗犷自然和古老乡村形成了奇妙的对比。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停好，穿过两旁矗立着古老悬铃木的林荫道走近它。空气里有刚割过的青草甜香，混合着古老石墙在阳光下散发的、略带潮湿的矿物气息。除了远处花园里喷泉的潺潺水声和鸟鸣，这里安静得能听见自己的脚步声。你会看到当地人牵着狗在城堡外围的步道上散步，或者坐在长椅上静静看书。对他们而言，这不仅仅是一个景点，更像是社区的后花园，一个骄傲的地标，静静地讲述着这片土地几个世纪以来的高贵与沉浮。城堡倒映在前方的水塘里，随着微风泛起粼粼波光，那份从容不迫的美，瞬间就能抚平旅途的所有焦躁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动人心的魅力，恰恰藏在这份完美的表象之下。当你再仔细看，会发现这古典主义杰作的基底，依然是中世纪顽石的冷峻线条。一些厚重的墙基、深嵌的窗户，隐约透露着它作为防御要塞的出身。这种反差构成了欧特福尔独一无二的故事感：它不是凭空诞生的艺术幻想，而是一场历经数百年的、充满野心与品味的“华丽变身”。你来到这里，不仅是参观一座美丽的城堡，更是要阅读一部用石头写就的传记，关于权力、艺术、毁灭与重生，关于一个家族如何将自己的梦想，一砖一瓦地刻进多尔多涅的天空线里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`欧特福尔城堡`} />
                <InfoRow label="英文名称" value={`Château de Hautefort`} />
                <InfoRow label="正式名称" value={`Château de Hautefort`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`多尔多涅省，欧特福尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从冷峻中世纪要塞完美蜕变为优雅古典主义宫殿的典范，见证了法国西南部领主权力从武力炫耀向文化艺术展示的根本性转变。`} />
                <InfoRow label="建筑特色" value={`严谨对称的法式庭院，环绕着优雅的圆顶主楼和装饰精致的角楼，被广阔的法式几何花园所拥抱，仿佛一件被精心放置在绿色天鹅绒上的建筑珠宝。`} />
                <InfoRow label="建筑风格" value={`法国古典主义风格，深受17世纪凡尔赛宫建筑理念的影响，兼具意大利文艺复兴的对称美感。`} />
                <InfoRow label="文化价值" value={`它不仅是建筑史的活化石，更体现了旧制度末期法国贵族试图通过建筑与园林艺术，在远离巴黎的乡间塑造一个理想化、文明化的“小朝廷”的雄心与梦想。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡与花园开放时间随季节变化：通常四月至六月及九月，开放时间为上午10点至下午6点；七月至八月旺季，延长开放至晚上7点；十月至次年三月仅周末及学校假日开放，时间为下午2点至6点。具体日期每年略有调整，冬季内部参观可能受限，行前务必查阅官网最新公告。`} />
              <InfoRow label="门票价格" value={`成人票13欧元，优惠票（学生、12-18岁青少年）10欧元，6-12岁儿童6欧元，6岁以下免费。另有家庭套票及包含附近其他景点的联票可选。花园单独参观票价为9欧元。支持在线购票以节省排队时间。`} />
              <InfoRow label="地址" value={`Château de Hautefort, 24390 Hautefort, France`} />
              <InfoRow label="交通方式" value={`最近的主要国际机场是波尔多-梅里尼亚克机场（BOD）。从机场可搭乘巴士或火车前往佩里格（Périgueux），车程约2小时。从佩里格火车站，乘坐前往Hautefort村的区域性公交车（Line 13），班次较少，每天约2-3班，车程约1小时，务必提前查好时刻表。最灵活的方式是在佩里格或布里夫（Brive）租车自驾，沿D704和D5号公路行驶，约45分钟至1小时即可抵达，沿途黑佩里戈尔的多尔多涅河谷风光绝美。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`欧特福尔的故事始于一片充满硝烟的土地。早在中世纪，这里就是佩里戈尔地区一个至关重要的战略据点。最初的城堡纯粹是为战争而建，高耸的城墙和深不见底的护城河（如今部分已被填平）守护着领主的权力。在英法百年战争那段混乱的岁月里，这片土地在英王和法王之间反复易手，城堡也几经争夺与修缮，每一块增补的石头上都可能浸染着鲜血与野心。那个时期的欧特福尔，和我们今天看到的优雅模样毫无关系，它更像一头盘踞在山岩上、随时准备撕咬的猛兽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点出现在17世纪，一个属于太阳王路易十四和绝对君权的时代。城堡的命运与一个家族紧密相连：侯爵夫人（Marquise）de Hautefort。不，她并非出身于此，而是通过婚姻成为了这里的女主人。这位品味不凡、与巴黎文艺圈交往甚密的贵族女性，看待这座祖传堡垒的眼光，与她的先祖截然不同。对她而言，阴森的中世纪石堆已经配不上新时代贵族的身份与情趣。她想要的，是一个能举办沙龙、能欣赏音乐、能展现法式优雅生活艺术的宫殿。于是，一场浩大的改造工程拉开了序幕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`她聘请了当时顶尖的建筑师，他们的灵感直接源自正在兴建的凡尔赛宫。目标明确：抹去军事痕迹，注入文明光彩。他们拆除了部分笨重的防御工事，用轻盈的角楼和优雅的弧形屋顶取而代之；他们设计了严格对称的立面和大片开窗，让阳光和景致涌入室内；他们在城堡前方开辟出广阔的平台，并开始规划同样讲究几何对称的法式花园。这项工程持续了数十年，耗费了惊人的财富。可以说，今天我们看到的欧特福尔，其灵魂正是这位侯爵夫人赋予的——那是一种将荒蛮之地“文明化”的坚定决心，是用建筑来宣言：真正的权力不再仅凭武力，更要靠文化与品味来彰显。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的洪流从不因个人的梦想而停止。法国大革命的风暴席卷而来，贵族特权被粉碎。欧特福尔城堡作为“旧时代的象征”被没收，内部珍贵的家具、藏书、艺术品被洗劫一空，建筑本身也遭到了不同程度的破坏。它先后被用作监狱、学校，甚至一度荒废，昔日的荣光蒙上了厚厚的尘埃。那个精致的梦，似乎就要在时间的侵蚀下彻底破碎了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在20世纪。一位名叫巴隆·亨利·德·巴斯蒂德（Baron Henry de Bastide）的远亲后裔，怀着对家族历史近乎执拗的热爱，决心赎回并拯救这座濒临毁灭的城堡。他和他的家人投入了巨大的心血和资金，开始了漫长而精细的修复工作。他们依据古老的图纸和文献，一点点找回它17世纪的容貌。不幸的是，1968年一场灾难性的大火吞噬了城堡的屋顶和大部分内部结构，多年的心血几乎化为乌有。但巴斯蒂德家族没有放弃，这场灾难反而激发了法国全社会的关注和支持。修复工作以更大的规模重新开始，几乎等于一次重建。今天，我们漫步在那些华丽的厅堂里，惊叹于精美的木雕、壁画和收藏品时，所感受到的不仅是17世纪的荣光，更有20世纪人们为保存共同文化遗产所付出的巨大勇气与挚爱。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略欧特福尔的精髓，建议预留出完整的一天时间，做一个悠闲的“城堡浸入者”。最佳抵达时间是上午9点半左右，赶在大型旅游巴士到达之前。整个游览节奏宜缓不宜急，遵循“由外至内，再由内至外”的原则。上午先花一个半小时探索外围花园和从不同角度欣赏城堡外观，这时光线柔和，最适合拍照。随后进入城堡内部进行约两小时的深度参观，感受空间与历史。中午可以在城堡内的橘园咖啡馆简单用餐，下午则完全留给广阔的法式花园和英式园林，在树荫下读书或发呆，体会当年贵族们试图营造的闲适生活意境。这样的安排能让你避开人流高峰，充分感受城堡在一天中不同光线下的魅力，并获得完整的体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部多为古老的石板或木地板，且楼梯较多，请务必穿一双舒适防滑的鞋子。
花园面积巨大且暴露在阳光下，夏季游览请准备好防晒霜、帽子和足够的饮用水。
如果时间有限，建议优先保证城堡内部和法式花园的参观，英式园林可以酌情快速浏览。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过城堡前方那两条笔直的、由百年悬铃木守护的林荫大道，让宏伟的正面全景如画卷般缓缓展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在城堡前的砾石广场上，好好仰视那对称的立面、优雅的圆顶和精雕细琢的角楼，品味古典主义的严谨与和谐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开厚重的大门进入大厅，立刻被高敞的空间和墙上的家族肖像凝视，耳边仿佛响起昔日沙龙里的低声絮语与音乐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着宏伟的中央楼梯拾级而上，参观那些装饰着华丽壁画、古董家具和珍贵挂毯的国事厅、卧室与小客厅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上主楼的圆顶之下，在这个城堡的制高点，360度环视整个黑佩里戈尔地区如波浪般起伏的壮丽乡野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访城堡内安静的小礼拜堂，感受光线透过彩绘玻璃洒在石凳上的静谧，这里存放着几个世纪以来家族成员的记忆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走出城堡，投入广阔的法式花园的怀抱，沿着中轴线漫步，欣赏精心修剪的绿篱、绚烂的花坛和远处的雕塑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，别忘了走到城堡侧翼的橘园，现在这里是一家可爱的咖啡馆，坐在拱廊下点一杯咖啡，看着花园景色完美收尾。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧池塘倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，阳光为城堡染上金边时，蹲在池塘边，利用平静的水面拍摄城堡及其完美倒影，对称构图极具震撼力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从法式花园仰拍圆顶`}</h4>
                  <p className="text-sm text-gray-700">{`走进花园的树篱迷宫中，寻找一个能框住城堡中央圆顶的绿色“画框”，以鲜绿的灌木为前景，突出建筑的精美轮廓。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`内部大厅螺旋楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`利用侧窗射入的自然光，从楼梯底部向上仰拍，捕捉螺旋曲线与石墙光影交织的几何美感，建议使用广角镜头。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`橘园长廊对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在橘园拱廊的中央，向前拍摄，让两侧的拱门形成强烈的纵深感，将尽头的花园景色纳入其中，画面宁静而富有秩序。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡西北侧远景`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，步行到城堡外围的小径上，从一个有起伏草坡和零星树木的角度拍摄，展现城堡与自然 landscape 融为一体的全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内拍摄严格禁用闪光灯和三脚架（除非获得特殊许可），以保护珍贵的古董家具和织物。`}</li>
                <li>• {`航拍无人机在城堡及花园上空是严格禁止的，请务必遵守规定，尊重隐私与安全。`}</li>
                <li>• {`最美的光线出现在日出后一小时和日落前一小时，此时城堡的石墙会呈现出最温暖柔和的色调。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`城堡脚下的童话民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在由古老城堡附属建筑改造的客房中，打开木窗就能看到花园，夜晚聆听绝对的寂静，清晨独占无人的庭院。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`欧特福尔村的家庭式旅馆`}</h4>
                  <p className="text-sm text-green-800">{`村子中心石头房子里的温馨旅馆，主人会为你准备丰盛的佩里戈尔早餐（包括鸭肝和核桃蛋糕），充满地道人情味。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`附近葡萄园中的精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车十分钟，住进一座19世纪的庄园，房间充满古董气息，露台正对连绵的葡萄园，晚上可以品尝庄园自酿的贝尔热拉克葡萄酒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`佩里格市中心的现代设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果你喜欢更丰富的夜生活与餐饮选择，可以住在半小时车程外的佩里格，那里有由老修道院改造的设计酒店，古今碰撞很有趣。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`乡村住宿非常安静，夜间几乎没有商业活动，喜欢夜生活的朋友建议选择佩里格。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是绝对旺季，无论是城堡旁的民宿还是村里旅馆，都必须提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`多尔多涅地区治安极好，民风淳朴，即使是独自旅行的女性也无需过多担心。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开欧特福尔的时候，我的脑子里回荡的不是某一段具体的历史，而是一种强烈的感觉：关于“塑造”的力量。我们见过太多在战火中固守原貌的城堡，也见过不少纯粹为享乐而建的宫殿。但欧特福尔不同，它清晰地展示了一个灵魂（以侯爵夫人为代表）如何凭借意志、财富与品味，强硬而巧妙地为一座建筑“重塑金身”，将防御的基因硬生生扭转为艺术的表达。这种跨越世纪的野心与坚持，本身就比任何单一风格都更震撼人心。它告诉我们，美有时并非天生，而是历经决心、磨难甚至毁灭后，依然被执着追寻的结果。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速消费、一切似乎都趋向同质化的世界里，欧特福尔提供了一种难得的“深度时光”。它要求你慢下来，去观察一块石头的纹理，去理解一种风格的由来，去感受一个家族与一座建筑生死相依的情感。它不只是法国乡村明信片上的一幅美景，更是一个关于传承、灾难与重生的寓言。每一位热爱深度游的旅人都应该来这里，不仅仅是为了看一座美丽的城堡，更是为了见证一个无比动人的事实：人类对美的追求，对自身历史的眷恋，可以拥有多么坚韧而强大的力量，足以让一座石头的传奇，在火焰与时光之后，继续巍然屹立，温柔地照耀着多尔多涅的群山。这，或许才是旅行能带给我们的，最深刻的慰藉与启示。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/uzes-duchy-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于泽斯公国古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Uzès</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pocitelj" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波契泰利城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Počitelj</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perouges" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩鲁日古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pérouges</p>
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
