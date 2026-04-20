import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科普里夫什蒂察 Koprivshtitsa｜穿越进保加利亚民族复兴的彩绘明信片，聆听石头诉说的起义故事 - 最佳欧洲景点',
  description: '车子刚驶离主路，拐进通往科普里夫什蒂察的山道，窗外的世界仿佛就自动调慢了帧率。空气骤然变得清冽，混合着松木、湿润泥土和远处草甸的甜香。当第一抹色彩跳进视线——那是鹅卵石小径尽头一栋房子外墙上一大块饱满的“保加利亚红”——你知道，你踏入的不是一个普通小镇，而是一本立体摊开的、鲜活的历史绘本。这里没有刺...',
}

export default function KoprivshtitsaBulgariaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '科普里夫什蒂察（保加利亚民族复兴时期的彩绘起义小镇）', href: '/attractions/koprivshtitsa-bulgaria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科普里夫什蒂察（保加利亚民族复兴时期的彩绘起义小镇）・Koprivshtitsa・保加利亚・科普里夫什蒂察镇（索菲亚州）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚驶离主路，拐进通往科普里夫什蒂察的山道，窗外的世界仿佛就自动调慢了帧率。空气骤然变得清冽，混合着松木、湿润泥土和远处草甸的甜香。当第一抹色彩跳进视线——那是鹅卵石小径尽头一栋房子外墙上一大块饱满的“保加利亚红”——你知道，你踏入的不是一个普通小镇，而是一本立体摊开的、鲜活的历史绘本。这里没有刺耳的汽车鸣笛，只有溪流潺潺、木门吱呀，以及自己踩在泛着水光的圆滑石子路上那清脆的脚步声，一声声，叩响着时光的回音。
漫步其中，最大的感官享受来自色彩。那些房子绝不是羞涩的。明艳的赭石黄、深邃的靛蓝、沉稳的橄榄绿，被大胆地涂抹在高大的墙壁上，通常以白色勾勒出优雅的边框。每一栋房子都像一位盛装出席百年舞会的贵族，静静矗立。但你仔细看，墙面上除了色彩，还有秘密：繁复的几何图形、葡萄藤蔓的浮雕、太阳的符号，这些都不是单纯的装饰，而是彼时工匠们无声的宣言，是民族意识在美学上的苏醒。阳光好的时候，光线穿过核桃树和枫树的枝叶，在这些彩墙上投下晃动的光斑，整个小镇仿佛在呼吸，在低语。
你会遇到当地人，他们的节奏和这里的溪水一样从容。老奶奶坐在彩绘的门廊下剥豆子，对你的镜头报以腼腆而真诚的微笑；杂货店老板不急着推销，反而先问你从哪里来，然后自豪地指向街角：“托多尔·卡布莱夫斯基，我们的英雄，就住那里。”在这里，历史不是博物馆玻璃后的标本，它就是邻居家祖传的房子，是孩子们奔跑而过的桥梁，是空气中那股混合了木柴烟囱和烤制巴尼察（奶酪馅饼）的、令人安心的香气。小镇的心脏，随着生活的脉动而跳动。
最打动人心的，莫过于那股宁静中蕴含的力量感。你看着这些精美如艺术品的住宅，下一秒就会想起，它们的主人曾在这里密谋，在这里告别家人，在这里为自由献出生命。精致与粗粝，美学与抗争，在此达成了不可思议的平衡。这种平衡，让科普里夫什蒂察的美，不仅仅停留在视网膜上，更重重地落在心坎里，成为一种沉甸甸的、关于家园与尊严的感动。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚驶离主路，拐进通往科普里夫什蒂察的山道，窗外的世界仿佛就自动调慢了帧率。空气骤然变得清冽，混合着松木、湿润泥土和远处草甸的甜香。当第一抹色彩跳进视线——那是鹅卵石小径尽头一栋房子外墙上一大块饱满的“保加利亚红”——你知道，你踏入的不是一个普通小镇，而是一本立体摊开的、鲜活的历史绘本。这里没有刺耳的汽车鸣笛，只有溪流潺潺、木门吱呀，以及自己踩在泛着水光的圆滑石子路上那清脆的脚步声，一声声，叩响着时光的回音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`漫步其中，最大的感官享受来自色彩。那些房子绝不是羞涩的。明艳的赭石黄、深邃的靛蓝、沉稳的橄榄绿，被大胆地涂抹在高大的墙壁上，通常以白色勾勒出优雅的边框。每一栋房子都像一位盛装出席百年舞会的贵族，静静矗立。但你仔细看，墙面上除了色彩，还有秘密：繁复的几何图形、葡萄藤蔓的浮雕、太阳的符号，这些都不是单纯的装饰，而是彼时工匠们无声的宣言，是民族意识在美学上的苏醒。阳光好的时候，光线穿过核桃树和枫树的枝叶，在这些彩墙上投下晃动的光斑，整个小镇仿佛在呼吸，在低语。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会遇到当地人，他们的节奏和这里的溪水一样从容。老奶奶坐在彩绘的门廊下剥豆子，对你的镜头报以腼腆而真诚的微笑；杂货店老板不急着推销，反而先问你从哪里来，然后自豪地指向街角：“托多尔·卡布莱夫斯基，我们的英雄，就住那里。”在这里，历史不是博物馆玻璃后的标本，它就是邻居家祖传的房子，是孩子们奔跑而过的桥梁，是空气中那股混合了木柴烟囱和烤制巴尼察（奶酪馅饼）的、令人安心的香气。小镇的心脏，随着生活的脉动而跳动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，莫过于那股宁静中蕴含的力量感。你看着这些精美如艺术品的住宅，下一秒就会想起，它们的主人曾在这里密谋，在这里告别家人，在这里为自由献出生命。精致与粗粝，美学与抗争，在此达成了不可思议的平衡。这种平衡，让科普里夫什蒂察的美，不仅仅停留在视网膜上，更重重地落在心坎里，成为一种沉甸甸的、关于家园与尊严的感动。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科普里夫什蒂察（保加利亚民族复兴时期的彩绘起义小镇）`} />
                <InfoRow label="英文名称" value={`Koprivshtitsa`} />
                <InfoRow label="正式名称" value={`The Architectural and Historical Reserve of Koprivshtitsa`} />
                <InfoRow label="国家" value={`保加利亚`} />
                <InfoRow label="城市" value={`科普里夫什蒂察镇（索菲亚州）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`1876年保加利亚四月起义的第一枪在这里打响，是保加利亚民族复兴的精神象征与露天博物馆。`} />
                <InfoRow label="建筑特色" value={`色彩斑斓的民族复兴风格住宅，拥有突出的悬挑二楼、精致的木雕阳台和布满几何与花卉图案的华丽外墙。`} />
                <InfoRow label="建筑风格" value={`保加利亚民族复兴风格（Bulgarian National Revival style），融合了本地传统与奥斯曼帝国时期的部分东方元素。`} />
                <InfoRow label="文化价值" value={`完整保存了19世纪保加利亚城镇的生活风貌与抗争历史，是理解保加利亚民族身份形成与独立历程的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身为开放式街区，全天可自由漫步。核心的博物馆和历史住宅（如奥斯莱科夫宅、卡拉维洛夫宅等）开放时间为每年4月至10月，每天上午9:00至下午17:30；11月至次年3月，开放时间缩短，通常为上午9:00至下午16:30，且部分较小的博物馆可能仅在周末开放或需提前预约。每周一为大部分博物馆的统一闭馆日。国家法定节假日开放时间可能临时调整。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。参观单个历史住宅博物馆的门票约为6保加利亚列弗（约3欧元）。推荐购买“综合通票”，价格约为15列弗（约7.5欧元），可进入小镇所有6-8个主要博物馆。学生、65岁以上长者及团体享有约50%的折扣优惠。6岁以下儿童免费。`} />
              <InfoRow label="地址" value={`Koprivshtitsa, 2077, Sofia Province, Bulgaria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是索菲亚机场（SOF）。从索菲亚市中心出发，最便捷的方式是自驾，沿A1/E80高速公路向东，在“Pirdop”出口驶出，随后沿山路指示牌行驶，全程约110公里，耗时约1小时45分钟，路况良好但部分山路较蜿蜒。若无自驾，可从索菲亚中央巴士站（Avtogara Serdika）乘坐直达巴士，每天约有4-5班，车程约2小时，班次在夏季会略微增加，建议提前一天购票以确保座位。小镇内完全步行游览，车辆需停放在指定的外围停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要读懂科普里夫什蒂察，你得先想象19世纪的巴尔干半岛。那时，保加利亚已在奥斯曼帝国的铁蹄下度过了近五个世纪。但压迫的土壤里，往往会开出最顽强的复兴之花。远离主要道路、藏身于斯特拉山脉怀抱中的科普里夫什蒂察，因羊毛贸易和精明能干的商人而积累了惊人的财富。这些富有的商人走南闯北，从君士坦丁堡、维也纳、布达佩斯带回了新的思想、书籍和对自由的渴望。他们做的第一件事，就是把财富变成石头和木头上的诗篇——建造起宏伟的住宅。这些房子不仅是家，更是身份与地位的彰显，是告诉世界“我们保加利亚人拥有不逊于任何民族的文明与品味”的无声宣言。于是，一座座色彩绚丽、雕刻精美的宅邸拔地而起，小镇成了一个繁华而骄傲的“山中之国”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`财富滋养了文化，文化催生了觉醒。在这些彩绘大宅里，秘密学校如雨后春笋般出现。奥斯曼统治者禁止教授保加利亚语和历史，但深宅大院的地下室或阁楼里，烛光下，孩子们低声学习着母语的字母和祖先的荣光。小镇孕育了整整一代知识分子和革命家，比如作家兼革命领袖柳宾·卡拉维洛夫。他的宅子，如今是一座博物馆，你走进去，还能感受到那种密谋时紧张的空气。书桌上仿佛还摊着未写完的檄文，壁炉旁似乎还回荡着压低嗓音的激烈讨论。这里不是沙龙，而是战争的指挥部，只不过武器是笔、思想和无法熄灭的信念。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的转折点发生在1876年4月20日。那声划破小镇宁静晨空的枪响，并非精心策划的总攻信号，而是一次意外的暴露。当地革命委员会的信使在过桥时遭遇奥斯曼警察盘查，情急之下开枪，起又提前爆发。这声仓促的枪响，点燃了保加利亚乃至整个巴尔干反抗的烈焰。小镇居民，无论是富商、工匠还是农民，几乎全员拿起能找到的任何武器，依托熟悉的街巷和房屋，与强大的奥斯曼军队展开了悲壮而绝望的抵抗。战斗是惨烈的，许多精美的宅邸在炮火中受损，鲜血染红了彩绘的墙壁和清澈的溪流。起义最终被镇压，小镇付出了沉重代价，但这“四月起义”的烈火，却彻底照亮了国际社会，直接催生了两年后的俄土战争和保加利亚的最终解放。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战火平息后，幸存者们回来了。他们抚摸着墙上焦黑的弹孔，修补着破损的雕花阳台。但他们没有推倒重建，去追逐所谓“现代”的风格。而是选择用同样的色彩、同样的工艺，去修复这些伤痕累累的房子。这是一种刻意的铭记。每一道修复的痕迹，都在诉说：“我们曾在这里战斗，我们在这里重生。”此后百余年的风云变幻中，无论是战争还是社会主义时期，小镇奇迹般地避免了大规模现代化改造，那些彩绘的住宅、弯曲的石板路、古老的桥梁都被原样保留。它成了保加利亚人共同的精神祠堂，一个活着的纪念碑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，你行走其中，每一步都踩在历史的断层上。脚下是奥斯曼时期的石子路，眼前是民族复兴时期的华美建筑，耳边听到的却是现代保加利亚语的谈笑。时光在这里不是线性流逝的，而是层层叠叠、交融在一起的。那些房子不再是某个家族的私产，它们属于整个民族的故事。当你推开一扇厚重的木门，门轴发出的悠长声响，仿佛是在替你向里面的旧时光，道一声问候。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（至少6-8小时）来沉浸式体验科普里夫什蒂察。最佳抵达时间是上午九点左右，此时旅游团尚未涌入，晨光柔和，小镇刚刚苏醒，你能独享那份静谧与清新。游览节奏宜慢不宜快，核心在于“漫步”与“代入”。路线设计为一个大环线，从信息中心开始，顺溪流而上，参观最重要的几座历史宅邸博物馆，深入理解其历史背景，再穿行于迷人的住宅区小巷，最后登上小镇边缘的缓坡，从高处回望全景，在夕阳的余晖中结束旅程。这样安排能让你先建立历史认知，再尽情享受视觉之美，最后获得情感升华。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇石板路湿滑且不平，务必穿一双绝对舒适防滑的步行鞋。正午时分旅游巴士最多，主要街道和博物馆会比较拥挤，建议利用这段时间去安静小巷探索或找地方午餐。几乎所有博物馆内部都禁止拍照（外部随意），请务必尊重规定。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先去小镇中心的旅游信息中心拿一份地图，并听听工作人员用带着口音的英语热情讲解小镇的布局和必看之处。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清澈见底的托波尔卡河漫步，走过那座著名的“第一声枪响”木桥，在桥上停留片刻，想象1876年那个改变命运的清晨。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访装饰最为奢华、宛如宫殿的奥斯莱科夫宅，仰头细看天花板上令人眼花缭乱的木雕玫瑰和彩色玻璃，感受商人巨贾的财富与审美。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进相对简朴却意义深远的柳宾·卡拉维洛夫宅，坐在他写作的小房间里，感受革命文豪在油灯下奋笔疾书时那份沉重而炽热的心境。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迪米特尔·乔治夫故居博物馆里，寻找那些隐藏在家具和墙壁上的革命密道与夹层，体验一把起义前夜的紧张刺激。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家挂着传统绣花窗帘的家庭餐馆，点一份用陶罐慢炖的烤肉或炖菜，就着新鲜烤制的面包，尝尝最地道的山区风味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后钻进那些没有博物馆标牌、却色彩最为和谐优美的居民小巷，比如“Vazrazhdane”街，看阳光如何为每面彩墙涂抹上不同的金色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，沿着小路爬到小镇西侧的山坡观景台，看着夕阳将整个谷地里的彩绘屋顶染成温暖的蜜糖色，聆听晚钟从圣尼古拉斯教堂的钟楼传来。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`“第一声枪响”木桥侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在河岸边，以古老的木桥为前景，背景是彩色的奥斯莱科夫宅和葱郁的山峦，构图充满故事层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`奥斯莱科夫宅外墙特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右的侧光，能完美凸显外墙彩绘的纹理和浮雕的立体感，聚焦于一扇蓝色的窗框和周围繁复的白色几何花纹。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`小巷纵深感构图`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条两侧都是高耸彩绘房屋的狭窄巷子（如靠近圣尼古拉斯教堂的后巷），站在巷子中央低角度仰拍，让线条向天空汇聚，极具视觉冲击力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`山坡全景日落`}</h4>
                  <p className="text-sm text-gray-700">{`在观景台使用中长焦镜头，捕捉夕阳下小镇屋顶鳞次栉比的韵律感，以及炊烟袅袅升起融入暮色的生活气息。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`窗台与花卉细节`}</h4>
                  <p className="text-sm text-gray-700">{`寻找那些装饰着精美木雕阳台、窗台上摆满红色天竺葵的民居，在柔和的光线下拍摄特写，展现小镇宁静浪漫的日常之美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效消除彩绘墙壁上的反光，让颜色更加饱和纯粹。拍摄居民和他们的房屋时，请务必先微笑示意并获得默许，尊重隐私是第一原则。秋日的清晨常有薄雾笼罩山谷，是拍摄梦幻全景的绝佳时机，但需要足够的耐心和运气。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋经过精心修复的19世纪传统住宅，主人会为你点燃古老的壁炉，在彩绘的木制天花板下享用家酿的拉基亚水果白兰地和手工果酱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色精品体验`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇静僻一隅的精品酒店，由几栋相连的民族复兴风格建筑改造而成，房间保留了原始的木材和石墙，并拥有一个可以俯瞰花园的私人阳台。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端隐居享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇外围山坡上的豪华水疗酒店，拥有全景露台和无边泳池，在泡澡时就能将整个彩绘小镇的全貌和远山尽收眼底，享受极致的静谧。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史沉浸首选`}</h4>
                  <p className="text-sm text-purple-800">{`直接入住一座本身就是受保护文物的历史宅邸客房，睡在古董家具旁，清晨被庭院里的泉水和鸟鸣唤醒，彻底融入百年前的氛围。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇住宿数量有限，尤其在夏季和九月的传统民俗节期间，必须提前数月预订。住在镇中心固然方便，但夜间极其安静，喜欢夜生活的人可能会觉得“太静了”。所有住宿都能提供地道的家庭烹饪早餐，这是体验当地风情的重要部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科普里夫什蒂察很久之后，闭上眼，脑海里浮现的不是某一张具体的照片，而是一种整体的、温暖的色调，和一种石头般沉静的力量感。它教会我，美从来不是脆弱的。真正的美，可以与苦难共生，甚至从抗争中汲取养分，淬炼出更加坚韧、不可摧毁的形态。那些鲜艳的色彩，是对灰暗年代最勇敢的反叛；那些精致的雕刻，是在镣铐下依然昂首歌唱的灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、热衷制造“网红瞬间”的世界里，科普里夫什蒂茨亚像一位固执的老人，它不追赶潮流，只是静静地、完整地守护着自己沉重的过去与平静的当下。它存在的意义，就是提醒每一个到访的旅人：民族的身份、文化的根脉，就藏在祖宅墙面的彩绘里，藏在祖母讲述的故事里，藏在一条溪流、一座木桥的记忆里。来这里，不是为了打卡，而是为了完成一次心灵的校准。你会带着它赠予的那份宁静与坚定离开，并在未来某个喧嚣的时刻，突然想起那座山间小镇的色彩，然后，深吸一口气，仿佛又闻到了那里清冽而自由的空气。这，或许就是深度旅行能给予我们的、最宝贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tsarevets-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    查
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">查雷韦茨要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tsarevets Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/roman-theatre-plovdiv" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗夫迪夫罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Theatre of Plovdiv</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veliko-tarnovo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    大
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">大特尔诺沃（沙皇之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Veliko Tarnovo</p>
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
