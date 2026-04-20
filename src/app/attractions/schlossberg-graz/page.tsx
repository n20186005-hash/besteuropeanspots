import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格拉茨城堡山 Schlossberg｜爬上“绿色心脏”，在钟楼与地下堡垒间读懂一座城的倔强 - 最佳欧洲景点',
  description: '朋友，如果你问我格拉茨的灵魂在哪里，我会毫不犹豫地拉着你，去爬那座在城市中央拔地而起的山——城堡山。初见它，是在一个秋天的傍晚，我从穆尔河畔一抬头，就被眼前的景象钉住了脚步：一整片墨绿色的山体，像一头巨兽温顺地卧在五彩斑斓的巴洛克屋顶之间，而山顶那座黑白分明的钟楼，就像巨兽安静注视城市的眼睛。空气中...',
}

export default function SchlossbergGrazPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '格拉茨城堡山', href: '/attractions/schlossberg-graz' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格拉茨城堡山・Schlossberg・奥地利・格拉茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，如果你问我格拉茨的灵魂在哪里，我会毫不犹豫地拉着你，去爬那座在城市中央拔地而起的山——城堡山。初见它，是在一个秋天的傍晚，我从穆尔河畔一抬头，就被眼前的景象钉住了脚步：一整片墨绿色的山体，像一头巨兽温顺地卧在五彩斑斓的巴洛克屋顶之间，而山顶那座黑白分明的钟楼，就像巨兽安静注视城市的眼睛。空气中飘着烤栗子的甜香和隐约的咖啡香，耳边是电车叮当作响的节奏，但所有的声音和气息，似乎都朝着那座山汇聚。
开始攀登吧。我选择了最古老的那条路——从剧院后面那条被绿荫完全覆盖的螺旋石阶“Kriegssteig”上去。石阶被无数双脚磨得中心发亮，湿润的空气里带着苔藓和泥土的味道。越往上走，城市的喧嚣就越像退潮般下沉，取而代之的是风穿过百年古树树冠的沙沙声，和偶尔几声清脆的鸟鸣。当你喘着气，转过最后一个弯，眼前豁然开朗，你发现自己并非抵达了一个孤零零的“景点”，而是闯入了一个巨大的、露天的城市客厅。本地人在这里慢跑、遛狗、推着婴儿车散步，情侣并肩坐在长椅上，分享一盒冰淇淋，眺望远方阿尔卑斯山的轮廓。这座山不是被供奉起来的遗迹，它活生生地长在城市的肌体里，是市民自家后院般的去处。
而最打动我的，是那股贯穿古今的“倔强”。山顶的“乌尔姆钟楼”是这份倔强最温柔的体现。它始建于13世纪，在1560年被改建成现在可爱的模样。大钟盘指示小时，小钟盘指示分钟，这种独特的“倒置”设计，据说是为了让山下城里的百姓能看得更清楚。几百年来，它俯瞰着城市的悲欢离合，其钟声曾为火灾、入侵而鸣响，如今只为报时和平安。然而，山的内部隐藏着更坚硬的故事——庞大如迷宫的地下隧道系统。这些隧道在二战时被用作防空洞，当你走进那幽深、凉爽、带着一点硝烟仿佛从未散尽的通道，触摸冰冷厚重的岩壁，你会瞬间明白，这座山不仅仅是风景，它曾是保护、是恐惧、是生存的最后壁垒。这种温柔与坚硬的并存，这种历史伤痕与日常生活的无缝交融，就是城堡山最核心的魅力。它告诉你，一座城市可以如何铭记自己的伤疤，又如何选择在伤疤上种满鲜花，供后人憩息。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，如果你问我格拉茨的灵魂在哪里，我会毫不犹豫地拉着你，去爬那座在城市中央拔地而起的山——城堡山。初见它，是在一个秋天的傍晚，我从穆尔河畔一抬头，就被眼前的景象钉住了脚步：一整片墨绿色的山体，像一头巨兽温顺地卧在五彩斑斓的巴洛克屋顶之间，而山顶那座黑白分明的钟楼，就像巨兽安静注视城市的眼睛。空气中飘着烤栗子的甜香和隐约的咖啡香，耳边是电车叮当作响的节奏，但所有的声音和气息，似乎都朝着那座山汇聚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`开始攀登吧。我选择了最古老的那条路——从剧院后面那条被绿荫完全覆盖的螺旋石阶“Kriegssteig”上去。石阶被无数双脚磨得中心发亮，湿润的空气里带着苔藓和泥土的味道。越往上走，城市的喧嚣就越像退潮般下沉，取而代之的是风穿过百年古树树冠的沙沙声，和偶尔几声清脆的鸟鸣。当你喘着气，转过最后一个弯，眼前豁然开朗，你发现自己并非抵达了一个孤零零的“景点”，而是闯入了一个巨大的、露天的城市客厅。本地人在这里慢跑、遛狗、推着婴儿车散步，情侣并肩坐在长椅上，分享一盒冰淇淋，眺望远方阿尔卑斯山的轮廓。这座山不是被供奉起来的遗迹，它活生生地长在城市的肌体里，是市民自家后院般的去处。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而最打动我的，是那股贯穿古今的“倔强”。山顶的“乌尔姆钟楼”是这份倔强最温柔的体现。它始建于13世纪，在1560年被改建成现在可爱的模样。大钟盘指示小时，小钟盘指示分钟，这种独特的“倒置”设计，据说是为了让山下城里的百姓能看得更清楚。几百年来，它俯瞰着城市的悲欢离合，其钟声曾为火灾、入侵而鸣响，如今只为报时和平安。然而，山的内部隐藏着更坚硬的故事——庞大如迷宫的地下隧道系统。这些隧道在二战时被用作防空洞，当你走进那幽深、凉爽、带着一点硝烟仿佛从未散尽的通道，触摸冰冷厚重的岩壁，你会瞬间明白，这座山不仅仅是风景，它曾是保护、是恐惧、是生存的最后壁垒。这种温柔与坚硬的并存，这种历史伤痕与日常生活的无缝交融，就是城堡山最核心的魅力。它告诉你，一座城市可以如何铭记自己的伤疤，又如何选择在伤疤上种满鲜花，供后人憩息。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格拉茨城堡山`} />
                <InfoRow label="英文名称" value={`Schlossberg`} />
                <InfoRow label="正式名称" value={`Schlossberg Graz`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`格拉茨`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座突兀于城市中心的473米高石灰岩山丘，是格拉茨千年历史的起源与见证，其上的防御工事曾被誉为“永不陷落的要塞”。`} />
                <InfoRow label="建筑特色" value={`并非单一建筑，而是一个融合了中世纪堡垒遗迹、巴洛克钟楼、19世纪园林艺术和现代工程（电梯、缆车）的综合性历史地标与市民休闲空间。`} />
                <InfoRow label="建筑风格" value={`以中世纪军事防御建筑为基础，混杂了后期的巴洛克、历史主义风格以及现代功能主义干预，形成独特的层叠景观。`} />
                <InfoRow label="文化价值" value={`它是格拉茨的“绿色心脏”和精神象征，体现了市民为守护自身历史身份而进行的非凡努力，以及将军事遗址转化为公共生活空间的成功典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡山公园全天24小时开放。山上的主要历史遗迹（如钟楼、炮台）及电梯、缆车的开放时间如下：钟楼内部参观通常为每年4月至10月，每日上午10点至下午5点（冬季仅周末开放或关闭，行前务必查询官网）。山脚直达山顶的“山堡电梯”和“城堡山缆车”运行时间一般为上午9点至午夜，但具体班次和冬季运营时间可能有调整。公园内的餐厅和咖啡馆有各自的营业时间。`} />
              <InfoRow label="门票价格" value={`进入城堡山公园本身完全免费。参观钟楼内部需支付小额门票，约5欧元。搭乘山堡电梯（直梯）单程约1.2欧元，往返2.2欧元；搭乘城堡山缆车（倾斜轨道车）价格类似。均提供家庭票和团体票优惠。`} />
              <InfoRow label="地址" value={`Schlossbergplatz, 8010 Graz, Austria`} />
              <InfoRow label="交通方式" value={`格拉茨拥有国际机场（GRZ），从机场乘坐巴士至市中心火车总站约20分钟。格拉茨火车总站是奥地利主要枢纽之一。从火车总站出发，前往城堡山极为便利：步行是最经典的方式，从老城中心任意角落都能看到它，向着钟楼方向步行15-20分钟即可抵达山脚下的“山堡电梯”或“缆车站”。亦可乘坐1、3、4、5、6、7路有轨电车至“Hauptplatz/Congress”站，下车后步行5分钟即到登山口。如果你行李不多，强烈建议从“Schlossbergplatz”广场旁那古老的螺旋石阶开始攀登，这才是最地道的体验。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲城堡山的故事，我们得把时钟拨回到更久远的时光。早在公元9世纪，斯拉夫人就在这座陡峭的石灰岩山丘上修建了第一座简易的堡垒，它的名字“Gradec”在斯拉夫语中就是“小城堡”的意思，这也成了后来“Graz”（格拉茨）城市名的由来。可以想象，在冷兵器时代，这样一座孤峰是天然的军事堡垒，易守难攻。但真正让它开始扮演关键角色的，是中世纪哈布斯堡王朝的统治者们。他们看中了格拉茨作为抵御东南方奥斯曼帝国入侵前沿阵地的重要性，于是从15世纪开始，斥巨资将山上的防御工事系统化、现代化。一代代的建筑师、工程师被召集于此，修建城墙、塔楼、兵营和巨大的蓄水池。到了16世纪，城堡山已经成为一个令人生畏的军事复合体，被誉为“中欧最坚固的堡垒之一”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`堡垒的修建与城市的命运紧密相连。当奥斯曼帝国的军队如潮水般涌向维也纳时，格拉茨及其城堡山就是一道坚实的屏障。传说中，成功的防御不仅靠城墙，也靠山体内部开凿的复杂隧道网。士兵和补给可以在山体内秘密移动，给予敌人出其不意的打击。然而，城堡山命运的最大转折点，并非来自东方的威胁，而是来自西方的“革命”。19世纪初，拿破仑的铁蹄横扫欧洲。在1809年，法国军队在经历了艰苦的战斗后，终于占领了格拉茨。根据战后屈辱的《舍恩布鲁恩条约》，胜利者拿破仑下令——必须彻底摧毁格拉茨城堡山上的所有防御工事。这对于视城堡山为城市灵魂与骄傲的格拉茨市民来说，无异于一道晴天霹雳。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来发生的事情，充满了戏剧性，也闪耀着市民精神的微光。法国工兵开始了系统的爆破和拆除，巨大的城墙在轰鸣声中坍塌。然而，就在这片废墟与绝望中，格拉茨的市民们站了出来。他们自发筹集了一笔在当时堪称巨款的2978个古尔登，派代表与法国人交涉。他们的请求不是保住整个堡垒，而是恳求留下两样东西：那座已经成为城市图腾的“乌尔姆钟楼”，以及紧邻钟楼的一座建于1588年的晚期哥特式钟塔（如今被称为“刑讯塔”或“罪犯塔”）。也许是市民的集体情感打动了征服者，也许法国人觉得这两座非核心军事建筑无伤大雅，这个请求竟然被答应了。于是，我们今天看到的钟楼，是市民用金钱和勇气“赎回”的城市记忆。而围绕它的大片区域，则在堡垒被毁后，逐渐被规划成了一座英式风格的景观公园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光继续流淌。进入20世纪，城堡山再次被卷入战争的阴影。二战期间，纳粹德国在其内部挖掘扩建了庞大的隧道系统，作为防空掩体和军工厂。战争结束后，这些阴冷的隧道一度被遗忘。直到近几十年，部分隧道经过加固和安全改造，重新对公众开放，成为那段黑暗历史沉默的讲述者。而当代最引人注目的“干预”，莫过于1990年代修建的“山堡电梯”和2000年重建的“城堡山缆车”。尤其是那个直接从山体内部凿出的百米垂直电梯井，以一种近乎科幻的方式，将古老的山丘与现代城市交通无缝连接。这就是城堡山，它的每一层岩壁都叠加着不同时代的印记：中世纪的防御、巴洛克的装饰、拿破仑时代的创伤、二战时的恐惧、战后的疗愈与当下的闲适。它没有被定格在某个辉煌或悲惨的瞬间，而是一直在生长、在变化、在与每一代格拉茨人对话。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要完整感受城堡山的双重性格——历史的厚重与生活的轻盈，我建议你留出至少3-4小时的完整时间。最佳抵达时间是清晨（9点前）或工作日的下午。清晨光线柔和，游客稀少，你能独享山林的宁静和最好的拍照光线；下午则能融入本地人的生活节奏，并在山顶欣赏夕阳将整个格拉茨老城染成金色的魔幻时刻。路线可以设计为一个环形：从西侧的传统步道上山，沉浸式感受攀登过程；在山顶平台和古迹间漫游探索；最后从东侧乘坐现代电梯或缆车下山，体验时空穿越的奇妙对比。这样的安排节奏张弛有度，既能消耗体力去“发现”，也能悠闲地“浸泡”在氛围里。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`山顶餐厅和咖啡馆价格略高于山下，但为景观和氛围付费是值得的，如果预算有限，可以自带一瓶水和简单零食在观景长椅上享用。
地下隧道内部潮湿阴冷，即使夏季也建议带一件薄外套，且部分路段较暗，注意脚下安全。
周末和节假日山上人流量会显著增加，如果想获得更宁静的体验，务必选择工作日前往。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从 Schlossbergplatz 广场找到那隐秘的螺旋石阶入口，深吸一口气，开始沿着被绿荫与历史包裹的古老台阶向上攀登，感受脚步与数百年来无数足迹的重叠。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上第一处平台后别急着去钟楼，先右转沿着林间小径走到“土耳其井”旁，俯身聆听这个34米深、为古老堡垒供水的井底传来的幽远回音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到主路，走向地标乌尔姆钟楼，不仅看它的正面，更要绕到背面，你会发现一个绝佳的观景框，将钟楼、老城红屋顶和远处的山脉收入同一画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在钟楼下的露天咖啡馆“Schlossberg-Café”点一杯“Verlängerter”（奥地利特色的加长黑咖啡），像本地人一样坐在长椅上，看着脚下的城市缓缓苏醒或步入黄昏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着山顶步道向东漫步，经过儿童游乐场和露天剧场，去触摸那几尊保存下来的古老巨炮“Bürgerbastei”，想象它们昔日守卫城市的威严。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到“地下隧道”的入口，勇敢地走进那灯光幽暗、气温骤降的二战防空洞，在绝对的安静中感受历史沉重的呼吸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从隧道另一端出来，你会到达山的另一侧，这里是搭乘“山堡电梯”的完美起点，乘坐这部从山体内部垂直穿行的电梯，一分钟内完成从历史到现代的穿越。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，别急着离开，走到穆尔河畔的“ Schlossbergplatz ”广场，再次抬头仰望你刚刚征服的山丘，此时你会对这座“城市巨石”产生完全不同的、充满连接感的理解。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`螺旋石阶中段仰拍钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`清晨8-9点，阳光从东侧斜射，站在石阶转弯处向上拍，利用两侧茂密的树叶形成自然画框，焦点对准被晨光照亮的黑白钟楼，构图极具纵深感与神圣感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`钟楼后方西北侧观景台`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前两小时，光线最为金黄柔和，在此可以拍摄到以钟楼为近景、层层叠叠格拉茨老城红色屋顶为中景、远方阿尔卑斯山余脉为远景的经典全景照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`城堡山电梯出口处的现代观景台`}</h4>
                  <p className="text-sm text-gray-700">{`华灯初上时（蓝调时刻），使用三脚架长曝光，可以拍出山体轮廓、历史钟楼与山下现代城市流动车轨、璀璨灯火古今交融的梦幻画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地下隧道出口的铁门处`}</h4>
                  <p className="text-sm text-gray-700">{`白天从隧道内向外拍，隧道口的拱形铁门会形成一个完美的取景框，框住外面绿意盎然的山坡和城市一角，明暗对比强烈，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`土耳其井旁的古老石墙`}</h4>
                  <p className="text-sm text-gray-700">{`利用墙体的粗糙质感作为前景，对焦于远处掩映在树林中的钟楼尖顶，营造出一种穿越时光、探索发现的氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用广角镜头可以更好地捕捉山顶开阔的全景和隧道内部的纵深感。拍摄当地人时请务必先微笑示意并获得同意，奥地利人注重隐私。无人机飞行在城堡山区域有严格限制，基本禁止，请勿随意起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心由16世纪联排屋改造的精品酒店，房间保留了原始的拱顶和木梁，推开窗就能直接与城堡山上的钟楼对视，夜晚在窗边小酌仿佛与历史共眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`选择山脚下由古老修道院部分建筑改建的典雅客房，庭院幽静，早餐是修女们传承配方的自制果酱和面包，从后门小径上城堡山只需五分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端景观之选`}</h4>
                  <p className="text-sm text-yellow-800">{`入住穆尔河畔的五星级设计酒店，拥有直面城堡山的全景落地窗房间和无边泳池，在私密的空间里独享日夜变幻的山景与城景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算友好之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于格拉茨火车站附近步行范围内的家庭式公寓或青年旅社，装修温馨干净，主人通常会热情地为你手绘一张独特的城堡山探索地图。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`格拉茨治安良好，老城区和城堡山周边尤为安全。旺季（夏季和圣诞市场期间）住宿紧张且价格上浮，建议至少提前一个月预订。如果想体验清晨无人的城堡山，住在步行5-10分钟可达山脚的区域是明智之选。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开格拉茨许久，我时常会想起城堡山。它不像许多地标那样，仅仅是一个需要“打卡”的静止符号。它是一座活着的、会呼吸的山。它的魅力不在于某一件无与伦比的艺术品，而在于一种复杂的、层层叠叠的“存在状态”。你在这里同时触摸到战争的冷酷与和平的馨香，感受到权力的威严与市民的温情，看到历史被摧毁的伤疤与生命重新绽放的顽强。它教会我，真正的坚韧，不是永不倒塌，而是在倒塌之后，人们依然有能力去选择记住什么、重建什么、以及如何带着伤疤继续美好地生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被玻璃罩精心保护起来的、仅供远观的“遗产”，那么你一定要来格拉茨，爬一爬这座城堡山。它邀请你用双脚去丈量，用呼吸去感受，用心跳去对话。当你站在山顶，风吹过发梢，钟声在整点悠然响起，你会感觉自己不仅仅是一个游客。你成了这座城市叙事的一部分，分享着它的记忆，也享受着它用伤痕换来的、无比珍贵的平静与绿意。在这个一切都在追求更快、更炫、更刺激的世界里，城堡山像一个沉稳的守护者，提醒着我们：最深的力量，往往就蕴藏在与历史的和解，以及对日常生活的热爱之中。这，或许就是深度旅行所能带给我们的，最宝贵的馈赠。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gmunden-lake-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格蒙登湖城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gmunden Lake City</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/feldkirch-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔德基希老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Feldkirch Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/innsbruck-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    因
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">因斯布鲁克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Innsbruck Old Town</p>
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
