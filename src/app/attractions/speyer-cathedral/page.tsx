import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施派尔大教堂 Speyer Cathedral｜神圣罗马帝国的红砖史诗与帝王长眠之地 - 最佳欧洲景点',
  description: '说实话，第一眼看到施派尔大教堂，你可能会觉得它有点“严肃”，甚至“笨重”。它不是科隆大教堂那种直插云霄的尖塔森林，也不是米兰大教堂那般繁复精致的蕾丝雕刻。它稳稳地坐在莱茵河畔的施派尔老城中心，像一块巨大无比的、被时光熏成暗红色的砖石方碑，沉默，厚重，带着不容置疑的权威感。走近了，那种压迫感会更具体：',
}

export default function SpeyerCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '德国', href: '/destinations/germany' },
            { label: '施派尔大教堂', href: '/attractions/speyer-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施派尔大教堂・Speyer Cathedral・德国・施派尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，第一眼看到施派尔大教堂，你可能会觉得它有点“严肃”，甚至“笨重”。它不是科隆大教堂那种直插云霄的尖塔森林，也不是米兰大教堂那般繁复精致的蕾丝雕刻。它稳稳地坐在莱茵河畔的施派尔老城中心，像一块巨大无比的、被时光熏成暗红色的砖石方碑，沉默，厚重，带着不容置疑的权威感。走近了，那种压迫感会更具体：你需要极力仰头，才能看到它高耸的、如同城堡般敦实的西立面塔楼，阳光在粗糙的砂岩表面投下深深浅浅的阴影，每一道纹理都像刻着千年的秘密。
推开那扇厚重的橡木门，世界瞬间切换。外面的喧嚣被彻底隔绝，一股混合着古老石头、蜡烛泪和旧木头的气息扑面而来，凉丝丝的，带着历史的湿度。然后，你的呼吸会为之一滞——眼前是一条似乎看不到尽头的恢弘长廊，这就是被誉为罗马式建筑巅峰的中殿。巨大的交叉拱顶在你头顶无尽延伸，由一排排粗壮得惊人的方形墩柱支撑着。光线是这里的主角，它从高侧窗温柔地渗入，在墩柱和拱廊上切割出分明而庄严的几何光影。偶尔有管风琴的低沉吟诵或游客压低的脚步声在空旷中回荡，更显得这里静谧到神圣。你会立刻明白，这不是为取悦凡人而建的教堂，它是为了彰显上帝与皇帝共治人间的无上权威，那种宏伟是直接作用于心灵的震慑。
有趣的是，这座看似威严到有些疏离的建筑，却深深嵌入施派尔人的日常脉搏。教堂前的广场（Domplatz）是城市的客厅。你会看到推着婴儿车的母亲在长椅上小憩， skateboard少年从古老的石板地上滑过，周末集市时，空气中飘着烤香肠和热红酒的香气，摊贩的棚子就搭在帝王安眠之地的窗外。这种奇妙的 juxtaposition（并置）正是欧洲许多古老城市的魅力所在——伟大的历史并非封存在玻璃罩里，而是人们生活背景里一道永恒而亲切的风景线。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，第一眼看到施派尔大教堂，你可能会觉得它有点“严肃”，甚至“笨重”。它不是科隆大教堂那种直插云霄的尖塔森林，也不是米兰大教堂那般繁复精致的蕾丝雕刻。它稳稳地坐在莱茵河畔的施派尔老城中心，像一块巨大无比的、被时光熏成暗红色的砖石方碑，沉默，厚重，带着不容置疑的权威感。走近了，那种压迫感会更具体：你需要极力仰头，才能看到它高耸的、如同城堡般敦实的西立面塔楼，阳光在粗糙的砂岩表面投下深深浅浅的阴影，每一道纹理都像刻着千年的秘密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "推开那扇厚重的橡木门，世界瞬间切换。外面的喧嚣被彻底隔绝，一股混合着古老石头、蜡烛泪和旧木头的气息扑面而来，凉丝丝的，带着历史的湿度。然后，你的呼吸会为之一滞——眼前是一条似乎看不到尽头的恢弘长廊，这就是被誉为罗马式建筑巅峰的中殿。巨大的交叉拱顶在你头顶无尽延伸，由一排排粗壮得惊人的方形墩柱支撑着。光线是这里的主角，它从高侧窗温柔地渗入，在墩柱和拱廊上切割出分明而庄严的几何光影。偶尔有管风琴的低沉吟诵或游客压低的脚步声在空旷中回荡，更显得这里静谧到神圣。你会立刻明白，这不是为取悦凡人而建的教堂，它是为了彰显上帝与皇帝共治人间的无上权威，那种宏伟是直接作用于心灵的震慑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有趣的是，这座看似威严到有些疏离的建筑，却深深嵌入施派尔人的日常脉搏。教堂前的广场（Domplatz）是城市的客厅。你会看到推着婴儿车的母亲在长椅上小憩， skateboard少年从古老的石板地上滑过，周末集市时，空气中飘着烤香肠和热红酒的香气，摊贩的棚子就搭在帝王安眠之地的窗外。这种奇妙的 juxtaposition（并置）正是欧洲许多古老城市的魅力所在——伟大的历史并非封存在玻璃罩里，而是人们生活背景里一道永恒而亲切的风景线。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施派尔大教堂`} />
                <InfoRow label="英文名称" value={`Speyer Cathedral`} />
                <InfoRow label="正式名称" value={`Imperial Cathedral Basilica of the Assumption and St Stephen`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`施派尔`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是神圣罗马帝国鼎盛时期皇权与神权结合的终极象征，是德国境内最大、最宏伟的罗马式教堂建筑，也是中世纪欧洲最重要的帝王安息之地。`} />
                <InfoRow label="建筑特色" value={`标志性的森红色砂岩墙体，巨大的十字交叉部立方体塔楼，以及拥有震撼人心的连续拱廊和粗壮墩柱的宏阔中殿。`} />
                <InfoRow label="建筑风格" value={`罗马式建筑风格的典范，以其严谨的对称性、厚重的体量和清晰的几何结构著称，对莱茵河流域的教堂建筑产生了长达数个世纪的影响。`} />
                <InfoRow label="文化价值" value={`作为联合国教科文组织世界遗产，它不仅是建筑杰作，更是一部用石头书写的德意志民族神圣罗马帝国政治与宗教史诗。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`大教堂内部通常每日开放，时间为上午9:00至下午7:00（4月至10月），上午9:00至下午5:00（11月至3月）。地下室（帝王陵墓）开放时间较短，通常为上午10:00至下午6:00（夏季）及上午10:00至下午4:00（冬季），且每周一关闭。塔楼攀登仅在特定时段开放，并受天气影响。重要宗教节日（如圣诞节、复活节）期间开放时间会大幅缩短或完全关闭，举行弥撒时游客游览受限。建议出发前务必在官网二次确认。`} />
              <InfoRow label="门票价格" value={`进入大教堂主殿免费。参观核心景点“帝王地下室”需购票，成人票约7欧元。塔楼攀登票约6欧元。有联票提供。优惠票适用于学生、儿童及团体。每周日地下室门票有时会包含在自愿捐赠中。每月第一个周日可能全天免费开放。导览游（德语/英语）需额外付费且需提前预约。`} />
              <InfoRow label="地址" value={`Domplatz, 67346 Speyer, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是法兰克福机场（FRA）。从法兰克福机场直接乘坐城际快车（ICE）至曼海姆主火车站（Mannheim Hbf），耗时约30分钟。在曼海姆换乘前往施派尔的区域列车（S-Bahn或RE），车程约20-25分钟，班次非常频繁，约每15-20分钟一班。从施派尔火车站出来，大教堂的塔楼便是最醒目的地标，步行约10-15分钟即可直达教堂广场。购买“莱茵兰-普法尔茨州票”对于区域旅行非常划算。如果自驾，施派尔老城周边有多个停车场，但周末和节假日车位紧张。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从一位雄心勃勃的皇帝说起。公元1024年，康拉德二世当选为德意志国王，他来自萨利安家族，决心建立强大的王朝权威。他想建造一座前所未有的教堂，不仅作为信仰的中心，更要作为萨利安王朝乃至整个神圣罗马帝国的纪念丰碑和家族陵寝。大约在1030年，工程在莱茵河畔的施派尔启动了。康拉德二世的目标非常明确：要超越之前所有的教堂，包括著名的克吕尼修道院。最初的建筑规模已经大得惊人，但它的命运几经转折。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的孙子，亨利四世皇帝，是另一位与这座教堂命运紧密相连的关键人物。你可能听说过“卡诺莎之辱”，这位皇帝曾为了与教皇争夺主教任命权（叙任权斗争）而遭受巨大屈辱。或许是为了重振皇权威严，或许是出于虔诚的忏悔，亨利四世在11世纪末发起了一场大规模的扩建和重修。他将东侧部分完全重建，增加了更宏伟的唱经楼和十字交叉部，并加盖了标志性的立方体塔楼，还为中殿加盖了当时技术难度极高的平顶天花。这次重建，让大教堂达到了我们今天看到的罗马式主体的基本格局，也奠定了它作为帝国象征的至尊地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，施派尔大教堂成为了神圣罗马帝国最重要的仪式舞台。至少有八位德意志国王和皇帝在此加冕，他们的荣耀与教堂的拱顶一同被铭记。更重要的是，它成为了皇室专属的陵寝。从创始人康拉德二世，到他的儿子亨利三世、孙子亨利四世，以及后来的多位帝王和后妃，都选择长眠于教堂下方的“帝王地下室”中。这个地下室是现存最大的罗马式柱厅之一，冰冷、幽暗，但立柱粗壮有力，仿佛能支撑起整个帝国的重量。石棺静静陈列，这里安息着一个帝国的黄金时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，永恒的荣耀并不存在。1689年，法国国王路易十四的军队在争夺莱茵河地区的战争中，将炮火对准了施派尔。大教堂遭受了严重的破坏，内部华丽的装饰、珍贵的档案和部分结构毁于一旦。接下来的法国大革命时期，它再次被亵渎，甚至一度被用作仓库和马厩。红砂岩在战火与硝烟中变得愈发暗淡，帝国的梦想似乎早已破碎不堪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪，伴随着德意志民族意识的觉醒和浪漫主义思潮对中世纪的追忆，施派尔大教堂迎来了命运的转折点。它不再仅仅是一座破败的旧教堂，而被视为“德意志民族神圣罗马帝国”伟大历史的物质见证。一场大规模的、带有浪漫主义色彩的修复工程展开了。我们今天看到的许多内部壁画、装饰，包括那令人印象深刻的彩绘拱顶，其实都是这个时期的作品。修复者们试图“恢复”他们想象中的中世纪荣光。这场修复，本质上是一次民族精神的再造。最终，在1981年，这座饱经沧桑、承载了建造、荣耀、毁灭与重生全部叙事的大教堂，被列入联合国教科文组织世界遗产名录，获得了属于全人类的认可。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个工作日的上午，最好是9点刚过就抵达。这时旅行团大军尚未涌入，晨光正好柔和地照亮教堂西立面，是拍照和静静感受的黄金时间。整体游览建议预留至少3-4小时，节奏宜慢不宜快。首先从外部环绕一圈，感受其建筑的体量感，然后进入主殿，让心灵适应那巨大的空间，接着深入核心——帝王地下室，最后若有体力和胆量，可以攀登塔楼，将施派尔老城和莱茵河尽收眼底。这样的顺序由外至内、由下至上，能让你对这座建筑的理解层层递进。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日和天主教重要节日上午常有弥撒，此时游览会受限，且需保持绝对安静，最好提前查好时间避开。攀登塔楼的楼梯极为狭窄陡峭且盘旋，有幽闭恐惧症或体力不佳者请慎重考虑。教堂内禁止使用闪光灯和三脚架，手机请调至静音，这是对祈祷者和历史遗迹的基本尊重。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从西侧广场开始，后退几十米，完整仰视那对雄伟的双塔和巨大山墙，体会“帝国教堂”给人的第一重威严印象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着教堂南侧的外墙慢慢走，用手触摸那粗糙温暖的红砂岩，观察墙上那些古老的、意义不明的石刻符号和修复痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从南侧门步入中殿，立刻在最近的长椅上坐下几分钟，什么也不做，只是抬头看那无尽的拱廊和从高窗洒下的光柱，听空间里的声音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着中殿缓步走向东端的唱经楼，仔细看脚下铺设的历代主教和捐助者的纪念铭板，仿佛走在时间的纪念碑上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从唱经楼附近楼梯下行，进入阴凉而肃穆的帝王地下室，在幽暗的灯光下逐一辨认那些简朴而巨大的石棺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`返回主殿后，寻找通往南塔楼攀登的入口（通常在礼品店附近），鼓起勇气攀爬那盘旋狭窄的数百级石阶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上塔楼观景台，迎着风，俯瞰整个施派尔老城规整的红屋顶、远处的莱茵河以及更广袤的普法尔茨森林。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼下来后，不要急着离开，在教堂外的绿地上找张长椅坐下，看鸽子在广场上起落，回味刚才跨越千年的旅程。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`西立面全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前两小时，站在教堂广场西侧边缘，用广角镜头将双塔、山墙及前景的石板地面一同纳入，红砂岩在侧光下会呈现出无比丰富的质感与色彩层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中殿纵深构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在中殿入口附近，利用地面引导线和两侧巨大的墩柱，拍摄拱顶长廊向唱经楼延伸的深邃透视画面，最佳光线在正午前后，室内光线最充足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`帝王地下室柱廊`}</h4>
                  <p className="text-sm text-gray-700">{`在地下室入口处以低角度仰拍，将粗壮的罗马式立柱和低矮的拱顶一同构入画面，营造出沉重、神秘而有力的氛围，需使用高感光度或三脚架（若允许）。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`南侧外景与光影`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射教堂南立面，走到侧面的花园，拍摄红砖墙、拱形窗以及在地上投下的长长影子，捕捉建筑几何结构与光影的游戏。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`塔楼俯瞰老城`}</h4>
                  <p className="text-sm text-gray-700">{`登上南塔楼后，将相机镜头从防护网孔中伸出，拍摄以教堂塔楼尖顶为前景、施派尔老城红色屋瓦海洋为背景的经典全景照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内摄影务必关闭闪光灯，这不仅规定，更是为了保护那些千年之久的壁画和石材表面。拍摄宗教仪式或专注祈祷的信徒属于不礼貌行为，应绝对避免。若想拍摄人像与建筑的结合，外部广场和侧花园是更轻松合适的选择。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城故事`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在教堂广场旁一家由百年老宅改造的家庭旅馆，推开木窗就能看见大教堂的塔楼，夜晚听着钟声入眠，清晨在无人的广场独占美景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河畔宁静`}</h4>
                  <p className="text-sm text-green-800">{`选择莱茵河畔步行约15分钟可达的现代设计酒店，房间拥有俯瞰河流与远处教堂轮廓的阳台，在动与静、古老与现代之间找到平衡。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`葡萄酒乡体验`}</h4>
                  <p className="text-sm text-yellow-800">{`住在施派尔周边普法尔茨葡萄酒产区里的田园民宿，每天被葡萄园的清香唤醒，租辆自行车悠闲地骑向大教堂，将文化探索与自然度假完美结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`下榻于由一座19世纪历史建筑精心修复的精品酒店，内部是优雅的复古装潢，位于僻静小巷却离大教堂仅几步之遥，享受私密而充满格调的落脚点。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施派尔老城区非常安全且紧凑，几乎所有景点均可步行到达，因此选择住在老城内是最方便的选择。如果是在夏季的周末或著名的“施派尔圣诞市场”期间来访，务必提前数月预订，否则一房难求。喜欢夜生活的游客需要注意，施派尔是一座宁静的小城，夜晚娱乐活动较少，这份安静正是其魅力的一部分。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开施派尔大教堂很久以后，记忆里最深刻的，可能不是某个具体的建筑细节，而是那种整体的、沉甸甸的感觉。它不像有些景点那样急着用浮华的装饰讨好你，它只是沉默地存在那里，让你自己去感受、去解读、去敬畏。这种“不讨好”，恰恰源于它深厚的底气——它见过帝国的兴衰，承受过战火的洗礼，也从民族的集体记忆中获得了重生。它不需要喧嚣，因为它本身就是一个完整的世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求快速消费、打卡即走的时代，施派尔大教堂像一位固执的守望者，提醒着我们“深度”与“分量”的价值。它告诉我们，真正的震撼，有时来自于简洁有力的几何形体，来自于穿越千年未曾消散的肃穆气息，来自于知道脚下的土地安息着曾搅动欧洲风云的灵魂。它不仅仅是一座教堂，更是一个理解中世纪欧洲皇权与神权、德意志历史与身份的钥匙。对于任何想要超越表面观光，去触摸欧洲历史厚重脊梁的旅人来说，专程来到这座莱茵河畔的红砖巨人身旁，静静地待上半天，是一场绝对值得，且会在心中回响许久的朝圣。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kaufbeuren-travel-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    考
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">考夫博伊伦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kaufbeuren</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schwaebisch-hall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施瓦本哈尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schwäbisch Hall Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/marburg-old-town-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔堡老城与伯爵城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Marburg Old Town and Landgrave‘s Castle</p>
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
