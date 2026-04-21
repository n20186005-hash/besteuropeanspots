import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莱罗斯岛 Leros｜探秘爱琴海上被遗忘的意大利现代派乌托邦 - 最佳欧洲景点',
  description: '如果你想象中的希腊岛屿是层层叠叠的白色立方体房子，一直堆到蔚蓝的海边，那么莱罗斯，尤其是它的拉基港，会给你一记温柔的“耳光”。我的第一印象是一种奇特的宁静的错位感。船缓缓靠岸，眼前展开的不是迷宫般的窄巷，而是一条异常宽阔、两旁种着棕榈树的主干道，路面干净得有些空旷。空气里有海风的咸味，但更强烈的是阳',
}

export default function LerosIslandLakkiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '拉基', href: '/destinations/europe' },
            { label: '莱罗斯岛', href: '/attractions/leros-island-lakki' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莱罗斯岛・Leros・希腊・拉基`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你想象中的希腊岛屿是层层叠叠的白色立方体房子，一直堆到蔚蓝的海边，那么莱罗斯，尤其是它的拉基港，会给你一记温柔的“耳光”。我的第一印象是一种奇特的宁静的错位感。船缓缓靠岸，眼前展开的不是迷宫般的窄巷，而是一条异常宽阔、两旁种着棕榈树的主干道，路面干净得有些空旷。空气里有海风的咸味，但更强烈的是阳光炙烤下混凝土和石膏粉刷墙面散发出的、略带干燥的“现代”气味。耳边没有通常港口集市的那种喧嚣，只有零星摩托车的回响和风吹过高大建筑立面时低低的呜咽。这里不像一个有几千年历史的爱琴海岛屿，倒像某个被按下了暂停键的、黑白老电影里的未来城市片段。
拉基港的居民就在这些线条硬朗、色调柔和（多为淡黄、浅粉或灰白色）的楼房里生活。你在港口咖啡馆看到的老人，可能就住在曾经意大利军官的公寓里，阳台上晾晒的彩色床单，为这些严肃的建筑注入了一丝鲜活的生活气息。当地人谈起这些建筑，态度很复杂，有疏离，也有一点点因为其独特性而产生的、悄然滋长的自豪。他们会告诉你哪栋楼是以前的电影院，哪片广场晚上会有孩子踢球。这些建筑不是供在神坛上的古董，而是他们日常的背景板，只是这个背景板过于奇特，以至于你总会忍不住多看几眼。
最打动人心的，正是这种强烈的反差与宁静的荒诞感。走在拉基笔直的街道上，阳光将那些带有弧形转角、水平长窗和简洁柱廊的建筑影子拉得老长。你会突然意识到，自己正漫步在一个未曾实现的“帝国梦”的遗骸中。它不是破败，而是一种凝固的、优雅的失落。爱琴海耀眼的阳光平等地洒在古希腊遗迹和这些现代派建筑上，赋予了后者一种意想不到的、近乎永恒的诗意。这里的魅力不是扑面而来的热情，而是一种需要你安静下来，用眼睛和想象力去慢慢解读的、低语般的故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你想象中的希腊岛屿是层层叠叠的白色立方体房子，一直堆到蔚蓝的海边，那么莱罗斯，尤其是它的拉基港，会给你一记温柔的“耳光”。我的第一印象是一种奇特的宁静的错位感。船缓缓靠岸，眼前展开的不是迷宫般的窄巷，而是一条异常宽阔、两旁种着棕榈树的主干道，路面干净得有些空旷。空气里有海风的咸味，但更强烈的是阳光炙烤下混凝土和石膏粉刷墙面散发出的、略带干燥的“现代”气味。耳边没有通常港口集市的那种喧嚣，只有零星摩托车的回响和风吹过高大建筑立面时低低的呜咽。这里不像一个有几千年历史的爱琴海岛屿，倒像某个被按下了暂停键的、黑白老电影里的未来城市片段。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉基港的居民就在这些线条硬朗、色调柔和（多为淡黄、浅粉或灰白色）的楼房里生活。你在港口咖啡馆看到的老人，可能就住在曾经意大利军官的公寓里，阳台上晾晒的彩色床单，为这些严肃的建筑注入了一丝鲜活的生活气息。当地人谈起这些建筑，态度很复杂，有疏离，也有一点点因为其独特性而产生的、悄然滋长的自豪。他们会告诉你哪栋楼是以前的电影院，哪片广场晚上会有孩子踢球。这些建筑不是供在神坛上的古董，而是他们日常的背景板，只是这个背景板过于奇特，以至于你总会忍不住多看几眼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，正是这种强烈的反差与宁静的荒诞感。走在拉基笔直的街道上，阳光将那些带有弧形转角、水平长窗和简洁柱廊的建筑影子拉得老长。你会突然意识到，自己正漫步在一个未曾实现的“帝国梦”的遗骸中。它不是破败，而是一种凝固的、优雅的失落。爱琴海耀眼的阳光平等地洒在古希腊遗迹和这些现代派建筑上，赋予了后者一种意想不到的、近乎永恒的诗意。这里的魅力不是扑面而来的热情，而是一种需要你安静下来，用眼睛和想象力去慢慢解读的、低语般的故事。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莱罗斯岛`} />
                <InfoRow label="英文名称" value={`Leros`} />
                <InfoRow label="正式名称" value={`Leros`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`拉基`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`南爱琴海上独一无二的、由意大利法西斯政权规划建造的完整现代主义城市实验样本。`} />
                <InfoRow label="建筑特色" value={`纯粹、简洁、充满几何感的理性主义建筑群，与典型的希腊白墙蓝顶风光形成戏剧性对比。`} />
                <InfoRow label="建筑风格" value={`20世纪30年代意大利理性主义建筑风格，融合了少许装饰艺术元素。`} />
                <InfoRow label="文化价值" value={`一座建筑“活化石”，凝固了地缘政治与乌托邦城市理想激烈碰撞却又被时光遗忘的瞬间。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`岛屿本身全天开放。拉基港的理性主义建筑群可从外部自由参观。部分公共建筑（如旧市政厅、前意大利军官俱乐部）的内部开放时间不定，通常仅在夏季或特殊文化活动中开放，建议行前查询当地旅游局网站或询问民宿房东。大部分教堂和小型博物馆的开放时间为上午9点至下午1点，下午5点至晚上8点。冬季（11月至次年3月）许多设施开放时间缩短或关闭。`} />
              <InfoRow label="门票价格" value={`进入岛屿及拉基镇免费。参观岛上城堡（Pandeli Castle）通常需要小额捐赠（约2-3欧元）。参观岛上的战争博物馆或小型海事博物馆门票约3-5欧元。租车、租船或参加导览游需额外费用。`} />
              <InfoRow label="地址" value={`Leros Island, 854 00, South Aegean, Greece`} />
              <InfoRow label="交通方式" value={`飞机：最近的机场是莱罗斯岛本国机场（LRS），主要连接雅典（约50分钟航程），航班不多，需提前预订。从机场到拉基港打车约10分钟。
渡轮：这是更常见的方式。从雅典比雷埃夫斯港出发，乘坐渡轮约8-10小时（有慢船和快船选择）。从邻近的科斯岛或卡利姆诺斯岛出发，快艇约1-1.5小时。渡轮抵达港口就是拉基港，一下船便置身于理性主义建筑群中。建议在希腊渡轮网站（如Ferryhopper）提前购票，夏季班次较多但票源紧张。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解拉基港为何如此“不合时宜”，得把时钟拨回到上世纪初。当时，多德卡尼斯群岛，包括莱罗斯，还在奥斯曼土耳其的控制下。1912年，意大利在一场短暂的战争中夺取了这些岛屿，开始了其“第四海岸”的殖民梦。莱罗斯因其深水良港和战略位置，被意大利人视为爱琴海上的军事要塞。起初，岛上只有零星兵营和简陋设施。真正的转折点发生在1923年，墨索里尼的法西斯政权上台，他们不仅想要军事占领，更渴望通过建筑和城市规划来宣扬一种新的、强大的、理性的国家意识形态。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在20世纪30年代中期，一个雄心勃勃的计划诞生了：在莱罗斯岛的拉基湾，从零开始，建造一座全新的、纯粹的意大利理性主义风格的城市。主导规划的是意大利工程师，他们的蓝图里没有希腊传统村庄的杂乱随性，只有严格的功能分区、宽阔的林荫大道、对称的广场和统一的建筑立面。他们要用直线、直角和流畅的曲线，在爱琴海的心脏地带，刻下一个“新罗马”的印记。这里规划了市政厅、教堂、学校、电影院、军官俱乐部、整齐的公寓楼，甚至还有一个当时极为先进的、带弧形玻璃立面的医院。建筑材料从意大利本土运来，整个工程像一台精密的机器，试图在这里制造一个现代主义的乌托邦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史给这个精美的蓝图开了残酷的玩笑。这座城市还未完全建成，第二次世界大战的阴云便已密布。莱罗斯成了轴心国重要的海军和空军基地。1943年意大利投降后，德军与盟军在此展开了血腥的“莱罗斯战役”，这座崭新的城市在战火中遭受重创。战后，群岛回归希腊。对于刚刚经历创伤的希腊人来说，拉基的这些意大利建筑，是占领者的遗留物，是痛苦的记忆符号，而非值得欣赏的艺术。它们被接收、被使用，但也被有意无意地忽略和遗忘。市政厅继续作为市政厅，电影院偶尔放映电影，公寓楼住进了希腊家庭，但没有人想去维护或凸显这些建筑的“意大利性”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "就这样，拉基港的理性主义建筑群在爱琴海的风吹日晒和时代的冷漠中，静静地伫立了几十年。直到近二三十年，随着人们对现代建筑遗产价值的重新认识，一些建筑师、历史学家和好奇心重的旅行者，才像发现宝藏一样，重新将目光投向这里。他们惊讶地发现，由于长期的忽视和有限的开发，拉基港的建筑群竟得以保持了其原始规划的完整性和纯净度，没有像世界上许多现代主义街区那样被后来杂乱无章的改造所破坏。它成了一处偶然保存下来的、关于野心、理想与历史无常的独特现场。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排完整的一天来沉浸式探索拉基港及其周边。最佳抵达时间是清晨，乘坐早班船或飞机到达，这时阳光角度低，光线柔和，适合拍摄建筑立面的几何光影，而且街道空旷，能充分感受那份宁静的异世感。整体游览节奏宜慢不宜快，核心是“漫步”与“观察”。上午专注探索拉基港理性主义建筑群的核心区，用脚步丈量那些宽阔的街道和广场。午后可以驱车或乘坐巴士上山，拜访中世纪的潘德利城堡和更传统的村庄，从历史和地理的双重视角回望拉基。傍晚时分回到港口，在夕阳下看建筑染上金色，结束这趟穿越时空的旅程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`岛上公共交通班次有限，特别是前往山上城堡和村庄的巴士，务必提前查好时刻表或考虑租一辆小型摩托车。探索拉基建筑群时，请尊重当地居民的隐私，很多建筑仍是私人住宅，避免过分窥探窗户或庭院。夏季岛上阳光非常强烈，穿梭于宽阔少荫的街道时，务必做好防晒，戴好帽子和墨镜。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从拉基港口下船，第一站就站在那个巨大的、带钟楼的弧形立面市政厅前，感受理性主义建筑的恢宏尺度与空旷广场带来的寂静冲击。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着棕榈树大道慢慢向西走，留意两侧建筑那些水平长窗、圆弧形转角以及装饰性的浮雕细节，想象它们八十年前簇新时的模样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进小巷，找到那座外表极为朴素、内部却拥有惊人现代主义彩绘玻璃的圣弗朗西斯教堂，坐在长椅上感受光线透过几何色块洒落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到曾经的意大利军官俱乐部（现为文化中心）前，观察其对称的结构和面向大海的宽阔台阶，这里最能体现规划中的“休闲与权力”结合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`中午在港口一家家庭经营的小酒馆吃顿新鲜炸小鱼，和老板聊聊天，听听本地人对这些“怪房子”的真实看法。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后租一辆车或搭乘本地巴士，盘山而上前往潘德利城堡，在古老的石墙废墟中俯瞰整个拉基湾，将那一片整齐的现代网格尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡下山，顺路逛一逛山腰上典型的希腊风格村庄普拉塔诺斯，在弯弯曲曲的白色小巷和鲜花阳台中，重新找回熟悉的爱琴海感觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前回到拉基港，找一家海滨咖啡馆坐下，看着夕阳将那些淡黄色的建筑染成蜜糖色，直到华灯初上，建筑轮廓在暮色中化作更神秘的剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口入口仰拍市政厅钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在港口防波堤附近，用广角镜头低角度拍摄，将钟楼的垂直线条与弧形主体纳入画面，背景是纯净的天空，突出其纪念碑式的气势。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“飞机楼”医院正面对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，阳光照亮医院标志性的弧形玻璃与混凝土立面，站在正前方中轴线，拍摄其完美的左右对称结构，捕捉玻璃反射的云影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`林荫大道纵深透视`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条两侧有典型理性主义公寓楼的笔直街道（如El. Venizelou街），在正午阳光直射时，站在路中央，利用道路线条和建筑立面形成强烈的透视与几何引导线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从潘德利城堡远眺拉基全景`}</h4>
                  <p className="text-sm text-gray-700">{`下午晚些时候，光线变得温暖，在城堡废墟找一个制高点，用长焦镜头压缩空间，将远处棋盘格般的拉基建筑群与眼前沧桑的古老石墙同时框入画面，形成跨越千年的对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`旧电影院内部结构（如果开放）`}</h4>
                  <p className="text-sm text-gray-700">{`若遇上建筑内部开放日，进入曾经的电影院，拍摄其挑高空间、弧形楼梯或遗弃的舞台，利用室内昏暗光线营造氛围感，注意寻找从破窗照射进来的戏剧性光束。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`理性主义建筑极其适合黑白摄影，可以突出其形状、线条和光影对比，剥离色彩后更能感受到其抽象和永恒的气质。拍摄居民生活与建筑结合的场景时，务必保持礼貌距离，最好使用长焦镜头捕捉自然瞬间，或先微笑征得同意。日落后的“蓝色时刻”，建筑群的灯光亮起，天空呈深蓝色，是拍摄建筑夜景氛围的绝佳时机，记得带上三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济首选`}</h4>
                  <p className="text-sm text-blue-800">{`拉基港口边一家由理性主义公寓楼改造的简单家庭旅馆，房间宽敞层高惊人，老板会给你手绘一张他小时候的拉基地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在普拉塔诺斯或潘德利传统村庄的石头老屋民宿，每天清晨在鸟鸣和教堂钟声中醒来，推开窗是蔚蓝的海湾和远处那一片“格格不入”的现代建筑群，视角独特。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计爱好者之选`}</h4>
                  <p className="text-sm text-yellow-800">{`岛上为数不多的、由旧建筑精心修复的精品酒店，位于拉基镇边缘，设计中巧妙融合了理性主义的简洁线条和希腊的舒适慵懒，带一个种满仙人掌的安静庭院。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华放松`}</h4>
                  <p className="text-sm text-purple-800">{`选择岛南端阿利恩达湾附近一家五星级度假村，拥有私人沙滩和全景泳池，将探索建筑历史的行程与纯粹的海岛放松完美结合，享受冰镇茴香酒的惬意。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉基港的住宿能让你最大限度地沉浸在现代主义建筑氛围中，但夜生活相对安静；选择山上传统村庄则更具希腊风情，但出行需要交通工具。夏季（7-8月）是旺季，需提前数月预订，春秋季（5-6月，9-10月）天气宜人且游客较少，是更舒适的选择。岛上治安非常好，民风淳朴，可以安心散步。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开莱罗斯很久以后，我脑海里反复出现的，不是某一张具体的明信片风景，而是那种站在拉基港宽阔街道中央，被一种巨大寂静所包裹的感觉。那种寂静里有历史失语的茫然，有梦想搁浅后的平静，也有时间最终抚平一切棱角的温柔。这个地方教会我的，是旅行中一种更复杂的审美。它不提供直白的、讨人喜欢的美丽，它提供的是思考、是诧异、是一段被完整封存在琥珀里的另类历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求 Instagram 同款蓝顶教堂的世界里，莱罗斯岛，尤其是拉基，是一个珍贵的异数。它提醒我们，欧洲的深度远不止于古老与浪漫的刻板印象。它是由层层叠叠、甚至相互冲突的历史断层所构成的。来这里，就像翻阅一本被遗忘的建筑学专著，或聆听一首未曾流行便已终结的现代主义交响曲。它适合那些已经看过了太多“必打卡”景点，开始渴望一些意外、一些沉默对话的旅人。在这里，你收获的将不是一个可以用来炫耀的定位，而是一个独属于自己的、关于时间、权力与美的宁静谜题。这或许就是深度游最极致的乐趣——不是到达，而是发现，并在发现中，重新认识这个复杂而有趣的世界。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dimitsana-gunpowder-mills" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪米察纳（伯罗奔尼撒的火药加工中心遗址）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dimitsana</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/melissani-cave-kefalonia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅利萨尼洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Melissani Cave</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hozoviotissa-monastery-amorgos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍佐维奥蒂萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monastery of Hozoviotissa</p>
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
