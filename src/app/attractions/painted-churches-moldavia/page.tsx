import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '苏恰瓦彩绘修道院群 Painted Churches of Moldavia｜探访世界遗产，走进东欧露天圣经画廊 - 最佳欧洲景点',
  description: '车子在喀尔巴阡山东麓的丘陵间缓缓行驶，当你转过一个不起眼的弯道，沃罗内茨修道院那著名的“沃罗内茨蓝”便毫无预兆地撞进眼帘。那是一种混合了天青石与矢车菊，仿佛被天空浸透后又沉淀了数百年的蓝色，它包裹着整个教堂的后殿，在夏日午后的阳光下，沉静而辉煌。走近了，空气中飘散着淡淡的焚香、蜡油和古老木材混合的气...',
}

export default function PaintedChurchesMoldaviaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗马尼亚', href: '/destinations/romania' },
            { label: '苏恰瓦县及周边地区（主要分布于沃罗内茨、摩尔多维察、苏切维察等地）', href: '/destinations/romania' },
            { label: '苏恰瓦彩绘修道院群', href: '/attractions/painted-churches-moldavia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`苏恰瓦彩绘修道院群・Painted Churches of Moldavia・罗马尼亚・苏恰瓦县及周边地区（主要分布于沃罗内茨、摩尔多维察、苏切维察等地）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在喀尔巴阡山东麓的丘陵间缓缓行驶，当你转过一个不起眼的弯道，沃罗内茨修道院那著名的“沃罗内茨蓝”便毫无预兆地撞进眼帘。那是一种混合了天青石与矢车菊，仿佛被天空浸透后又沉淀了数百年的蓝色，它包裹着整个教堂的后殿，在夏日午后的阳光下，沉静而辉煌。走近了，空气中飘散着淡淡的焚香、蜡油和古老木材混合的气味，远处传来缓慢而沉郁的钟声，一声，又一声，敲在时间的褶皱里。
这不仅仅是一座建筑，它是一个被色彩封印的宇宙。你的视线会立刻被外墙那些巨大、密集的壁画所吸附。从《创世纪》到《最后的审判》，圣经故事不再是书本里枯燥的条文，而是化作了墙上鲜活的戏剧。圣徒的眼神穿透数个世纪与你对视，天使的衣袂仿佛在风中飘动，恶魔在地狱之火中扭曲。最奇妙的是光影的游戏：清晨，柔和的阳光为“善良的牧羊人”画像镀上金边；正午，炽烈的光线让“最后的审判”中天堂与地狱的对比更具冲击力；而到了黄昏，斜阳将壁画的色彩燃烧成一种温暖的琥珀色，每一道颜料龟裂的纹路都清晰可见，那是时间亲自留下的笔触。
在当地人生活中，这些修道院远非冰冷的博物馆。你会看到裹着头巾的老妇人，颤巍巍地走进教堂，在烛光闪烁的圣像前长久地亲吻、低声祷告；看到年轻的修士安静地穿过回廊，黑袍扫过被无数脚步磨亮的石板。它们是一个个鲜活的精神心脏，持续不断地为这片土地输送着宁静与力量。每逢重大宗教节日，周边村镇的居民会举家前来，教堂前的空地瞬间变成充满生命力的市集，空气中弥漫着烤饼和蜂蜜酒的甜香。
它的核心魅力，就在于这种极致的矛盾与和谐：外表是如此绚烂夺目、倾其所有地向每一个路人讲述故事；内里却保持着深邃的宁静与虔诚的隐秘。它不隐藏，也不炫耀，只是静静地、完整地在那里，像一个用石头和色彩写就的誓言，告诉你信仰可以如此具象，美丽可以如此永恒，而一个民族的精神，竟能通过画师的手笔，在墙壁上风雨无阻地屹立五百年。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在喀尔巴阡山东麓的丘陵间缓缓行驶，当你转过一个不起眼的弯道，沃罗内茨修道院那著名的“沃罗内茨蓝”便毫无预兆地撞进眼帘。那是一种混合了天青石与矢车菊，仿佛被天空浸透后又沉淀了数百年的蓝色，它包裹着整个教堂的后殿，在夏日午后的阳光下，沉静而辉煌。走近了，空气中飘散着淡淡的焚香、蜡油和古老木材混合的气味，远处传来缓慢而沉郁的钟声，一声，又一声，敲在时间的褶皱里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这不仅仅是一座建筑，它是一个被色彩封印的宇宙。你的视线会立刻被外墙那些巨大、密集的壁画所吸附。从《创世纪》到《最后的审判》，圣经故事不再是书本里枯燥的条文，而是化作了墙上鲜活的戏剧。圣徒的眼神穿透数个世纪与你对视，天使的衣袂仿佛在风中飘动，恶魔在地狱之火中扭曲。最奇妙的是光影的游戏：清晨，柔和的阳光为“善良的牧羊人”画像镀上金边；正午，炽烈的光线让“最后的审判”中天堂与地狱的对比更具冲击力；而到了黄昏，斜阳将壁画的色彩燃烧成一种温暖的琥珀色，每一道颜料龟裂的纹路都清晰可见，那是时间亲自留下的笔触。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人生活中，这些修道院远非冰冷的博物馆。你会看到裹着头巾的老妇人，颤巍巍地走进教堂，在烛光闪烁的圣像前长久地亲吻、低声祷告；看到年轻的修士安静地穿过回廊，黑袍扫过被无数脚步磨亮的石板。它们是一个个鲜活的精神心脏，持续不断地为这片土地输送着宁静与力量。每逢重大宗教节日，周边村镇的居民会举家前来，教堂前的空地瞬间变成充满生命力的市集，空气中弥漫着烤饼和蜂蜜酒的甜香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的矛盾与和谐：外表是如此绚烂夺目、倾其所有地向每一个路人讲述故事；内里却保持着深邃的宁静与虔诚的隐秘。它不隐藏，也不炫耀，只是静静地、完整地在那里，像一个用石头和色彩写就的誓言，告诉你信仰可以如此具象，美丽可以如此永恒，而一个民族的精神，竟能通过画师的手笔，在墙壁上风雨无阻地屹立五百年。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`苏恰瓦彩绘修道院群`} />
                <InfoRow label="英文名称" value={`Painted Churches of Moldavia`} />
                <InfoRow label="正式名称" value={`Painted Churches of Moldavia`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`苏恰瓦县及周边地区（主要分布于沃罗内茨、摩尔多维察、苏切维察等地）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`15-16世纪摩尔达维亚公国鼎盛时期的艺术与信仰丰碑，是东正教世界保存最完整、规模最大的外部壁画群，被誉为“露天圣经”。`} />
                <InfoRow label="建筑特色" value={`厚重的石砌墙体上覆盖着巨大的人字形木瓦屋顶，教堂后殿通常设计成高耸的塔楼，但最震撼的特色是外墙从底部到屋檐下几乎无一处留白，全部绘满色彩鲜艳的叙事性湿壁画。`} />
                <InfoRow label="建筑风格" value={`以拜占庭建筑为基底，融合了摩尔达维亚本地哥特式元素，形成了独特的“摩尔达维亚风格”。`} />
                <InfoRow label="文化价值" value={`其壁画不仅是宗教艺术的巅峰，更是中世纪摩尔达维亚公国在奥斯曼帝国压力下，用以捍卫民族身份、传承历史与语言的视觉史诗。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`大多数修道院对外开放时间为每天上午9点至下午6点，冬季（11月至次年3月）可能会提前至下午4点关闭。请注意，修道院首先是活跃的宗教场所，在举行宗教仪式（通常是周日早晨及重大宗教节日）期间，游客参观可能会受到限制或需要保持静默。建议出发前查看罗马尼亚文化部或当地旅游信息网站的具体日程。`} />
              <InfoRow label="门票价格" value={`进入修道院建筑群本身通常免费或收取极低捐赠（约5-10罗马尼亚列伊）。若要进入教堂内部参观或登上钟楼，部分修道院会收取小额门票，约10-20列伊（约合2-4欧元）。学生、老人及团体通常有优惠。摄影许可可能需要额外支付少量费用（约15-30列伊）。`} />
              <InfoRow label="地址" value={`以沃罗内茨修道院为例：Strada Mănăstirii 166, Voroneț 725301, Romania`} />
              <InfoRow label="交通方式" value={`最近的国际机场是位于苏恰瓦县的苏恰瓦机场（SCV），但航班较少。更便捷的方式是飞往首都布加勒斯特（OTP）或克卢日-纳波卡（CLJ），然后转乘火车或长途汽车。从布加勒斯特搭乘火车前往苏恰瓦市约需6-7小时。抵达苏恰瓦市后，前往各个修道院的最佳方式是租车自驾，灵活性最高。若依赖公共交通，可乘坐本地巴士前往各个村镇（如戈尔日、沃罗内茨），但班次稀疏，一天可能只有2-3班，需提前在车站确认时刻表，整个区域探索建议预留至少2-3天。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从15世纪中叶说起，那时的摩尔达维亚公国，正处在一位传奇大公——斯特凡三世（后世尊称为“斯特凡大帝”）的统治之下。他是一位在强敌环伺中（北有波兰王国和匈牙利王国，南有庞大的奥斯曼帝国）竭力捍卫国土与信仰的君王。赢得一场关键战役后，斯特凡大公为感恩上帝，于1488年下令建造了第一座“彩绘”的杰作——沃罗内茨修道院。这不仅仅是一座感恩教堂，更是一个宏大的文化宣言：他要让这座建筑本身成为一座纪念碑，一部所有子民，无论识字与否，都能阅读的“石头圣经”。于是，最优秀的画师被召集而来，他们使用天然矿物颜料，在潮湿的石灰墙面上作画，让色彩渗入墙体，成就了近乎永恒的壁画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`为什么偏偏要把精美的画作暴露在风吹雨打的外墙？这背后藏着深沉的智慧与无奈。斯特凡大帝和他的继任者们，尤其是彼得·拉雷什大公（他建造了苏切维察修道院），深谙图像的力量。在那个文盲率极高的时代，教堂是社区的绝对中心。当农民、士兵、商旅经过，无需踏入室内，只需仰望外墙，就能看到《最后的审判》中善恶有报的警示，看到《天使长米迦勒引领义人入天国》带来的慰藉。这些壁画是公共教育，是道德律令，更是凝聚民族认同的视觉纽带。与此同时，将神圣叙事展示于外，也是在对南方虎视眈眈的奥斯曼帝国做出一种无声而骄傲的宣告：我们的信仰，就在这里，光明正大，不可摧毁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`艺术的高峰在16世纪中叶彼得·拉雷什统治时期达到顶峰。摩尔多维察修道院的壁画被认为是整个系列中艺术成就最高的。画师们（其中许多可能来自君士坦丁堡或受其训练）的技艺已臻化境。他们笔下的人物更具人性化的情感，构图更加恢弘复杂，色彩搭配达到了交响乐般的和谐。尤其是对“围攻君士坦丁堡”等历史事件的描绘，将其与圣经故事并置，隐晦地记录了东正教世界中心陷落的创伤，以及摩尔达维亚作为“信仰前哨”的自豪与悲怆。这些壁画融合了拜占庭的庄严、哥特式的叙事热情，甚至隐约可见文艺复兴对透视和人体探索的影响，成为东西方艺术思潮在此交汇的独特见证。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，荣耀之后便是漫长的沉寂与坚守。随着摩尔达维亚公国逐渐沦为奥斯曼的附庸，国力衰退，再无力兴建如此辉煌的建筑。这些修道院在接下来的几个世纪里，主要依靠修士和周边信众的微薄奉献艰难维护。壁画暴露在严酷的自然环境中——喀尔巴阡山区的冬雪、夏雨、秋风无情地侵蚀着它们。许多细节逐渐模糊，色彩变得暗淡，但它们的主体奇迹般地留存了下来。某种程度上，正是偏远的地理位置，让它们在近代的战火与动荡中得以幸存，像被时间遗忘的珍宝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪，它们的价值才被重新发现。1993年，七座最具代表性的彩绘修道院（沃罗内茨、摩尔多维察、苏切维察、沃罗内茨等）被联合国教科文组织列为世界文化遗产。如今，持续的保护与修复工作在进行，专家们小心翼翼地清除 centuries of grime，让那些“沃罗内茨蓝”、“摩尔多维察红”重新焕发光彩。它们不再只是一个地区的信仰中心，更成为了全人类共同的艺术遗产，静静地诉说着一个小国在大国夹缝中，如何用最美的方式，捍卫自己灵魂的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略彩绘修道院群的精髓，切忌走马观花。建议安排至少完整两天时间。第一天上午从苏恰瓦市出发，顺时针游览北线，聚焦于最负盛名的沃罗内茨和摩尔多维察，感受艺术巅峰的冲击。第二天探索南线的苏切维察等，体会其不同的建筑布局与壁画主题。每天最好在修道院刚开门（9点）时抵达第一站，这时光线柔和，游客稀少，你能独享与壁画对话的宁静时刻。每个修道院的深度参观至少预留1.5-2小时，包括环绕建筑细细观赏外墙每一面壁画、进入内部感受昏暗烛光下的圣像屏、在庭院长椅上静坐体会氛围。自驾是最佳方式，沿途喀尔巴阡山麓的田园风光本身就是旅程的享受。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着覆盖肩膀和膝盖的得体服装进入教堂内部，女性最好准备一条头巾。夏季请携带充足的饮用水和防晒用品，修道院之间驾车路程虽不远，但户外参观时间长，日照强烈。尽量避免在周日早晨的重大礼拜时段前往，以免打扰宗教活动。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一缕阳光洒下时站在沃罗内茨修道院前，屏息凝望那举世无双的“沃罗内茨蓝”后殿，看壁画上的《最后的审判》在金光中缓缓苏醒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进教堂内部，让眼睛适应昏暗的光线，在摇曳的烛火与浓郁的焚香气味中，仰望金色圣像屏上那些严肃而慈悲的圣容。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`驱车穿过宁静的村庄和茂密的山林，在摩尔多维察修道院红色外墙的震撼下，花半小时仅仅欣赏其西立面《天使长米迦勒》与《耶稣谱系树》的精妙构图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在修道院简朴的咖啡馆点一杯本地草药茶，坐在核桃树的荫凉下，看着黑衣修士静静走过，耳边只有风声、鸟鸣和远处隐约的诵经声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天在苏切维察修道院堡垒般的高墙下，寻找外墙底部那些描绘古希腊哲学家与先知的独特壁画，思考东西方思想的在此地意外的交汇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一座不那么知名的修道院（如帕特罗乌蒂），享受彻底的宁静，坐在古老墓园的石碑旁，听风吹过橡树林的沙沙声，读一本关于斯特凡大帝的历史小书。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前赶到一处能远眺修道院群的山坡，看暖黄色的夕阳为这些石头与色彩的瑰宝披上最后一道神圣的光辉，结束这场视觉与心灵的朝圣。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`沃罗内茨蓝特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后，阳光西斜，站在教堂东南侧的草地上，用长焦镜头捕捉后殿顶部“沃罗内茨蓝”与精美壁画细节，此时光线均匀，色彩饱和度极高。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`摩尔多维察全景与倒影`}</h4>
                  <p className="text-sm text-gray-700">{`清晨无风时，前往修道院前方的小池塘边，蹲低机位，可以拍摄到红色外墙的修道院及其尖塔完美倒映在水中的对称画面，天空的云彩也会增添意境。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`苏切维察 fortress 视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在修道院厚重围墙的入口拱门下向外拍摄，将前景的拱门石框作为画框，框住远处喀尔巴阡山起伏的绿色山峦，展现其作为精神堡垒的地理位置。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`内部光影氛围`}</h4>
                  <p className="text-sm text-gray-700">{`在阳光充沛的上午，进入任何一座修道室内部，关闭闪光灯，提高ISO，捕捉一束从狭窄窗户射入的光线，照亮空气中飞舞的微尘与一位正在祈祷的信徒的剪影，极具神圣感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少壁画表面的反光，让色彩更加纯粹。未经明确许可，切勿使用三脚架或闪光灯拍摄内部圣像屏及正在进行的宗教仪式，这是极大的不敬。拍摄修士或当地信徒前，请务必先用眼神或手势征得对方默许。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山居疗愈`}</h4>
                  <p className="text-sm text-blue-800">{`入住沃罗内茨村附近的家庭式民宿“喀尔巴阡山之光”，主人会为你准备用自家花园香草烹调的晚餐，夜晚在露台上能看见毫无光污染的璀璨银河。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-green-800">{`选择苏恰瓦市由19世纪老宅改造的精品酒店“大公庭院”，房间保留了古老的砖墙和木梁，早餐能尝到传统的“马马利加”玉米糊，仿佛住在历史里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园牧歌`}</h4>
                  <p className="text-sm text-yellow-800">{`在连接几座修道院的乡间道路旁，寻找由农庄改造的客栈“绿色丘陵”，醒来推开窗便是漫山遍野的向日葵或麦田，伴随着牛羊的叮当铃声。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`简约实用`}</h4>
                  <p className="text-sm text-purple-800">{`对于纯粹追求便利的旅人，苏恰瓦市中心有几家干净的国际连锁酒店，作为探索周边地区的可靠基地，且容易找到租车服务和餐厅。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`乡村民宿预订需提前沟通确认晚餐安排，因为周边餐馆稀少。夏季是旅游旺季，特别是7-8月，务必提前数月预订心仪的住宿。整个区域治安良好，民风淳朴，但乡村地区夜间照明不足，自驾需谨慎驾驶。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开苏恰瓦山区很久之后，闭上眼，那片浓郁的“沃罗内茨蓝”依然会清晰地浮现。它不再仅仅是一种颜色，而成了一种感觉的代号——一种关于坚守、关于将内心最深处的信念以最灿烂的形式公之于众的勇气。在这个追求瞬时快感、图像泛滥的数字时代，这些沉默地站在田野与山丘间的修道院，给予我们一种截然不同的震撼。它们的“信息”不是碎片化的，而是完整的、系统的、需要你驻足仰望良久才能慢慢读懂的故事体系。这是一种慢到极致的沟通，却直抵心灵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么要来？不仅仅是为了看“世界遗产”的标签，更是为了接受一次关于“深度”与“永恒”的再教育。在这里，你会发现美可以如此朴素又如此奢华——朴素的石头，奢华的灵魂。你会发现一个民族最坚韧的力量，不是保存在武器库中，而是保存在画师调色盘上的颜料里，保存在每一笔描绘天堂与地狱的线条中。对于每一位厌倦了浅尝辄止的旅行者，苏恰瓦彩绘修道院群就像一座灯塔，它提醒我们，真正的旅程，是去往那些能让时间慢下来、让色彩说话、让古老的故事再次敲击心脏的地方。它值得你穿越千山万水，只为站在那里，做一次安静的、漫长的凝视。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sibiu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡比乌老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sibiu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alba-carolina-citadel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔巴尤利亚七芒星卡罗莱纳城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alba Carolina Citadel</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brasov-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉索夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brașov Old Town</p>
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
