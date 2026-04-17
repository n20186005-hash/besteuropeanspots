import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拜罗伊特边区歌剧院 Margravial Opera House｜欧洲现存最精美巴洛克木雕剧院，一座被时光凝固的黄金音乐盒 - 最佳欧洲景点',
  description: '朋友，想象一下，你推开一扇毫不起眼的、属于18世纪市政厅风格的大门，步入一个略显昏暗的门厅。空气里是那种老建筑特有的、混合了陈旧木头、抛光蜡和一点点灰尘的宁静气味。你跟着讲解员走过一段短廊，然后，她推开了另一扇厚重的门—— 就在那一瞬间，你被毫无防备地抛进了一个金色的梦境。是的，“抛进”这个词毫不夸...',
}

export default function MargravialOperaHouseBayreuthPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '拜罗伊特边区歌剧院', href: '/attractions/margravial-opera-house-bayreuth' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拜罗伊特边区歌剧院・Margravial Opera House・德国・拜罗伊特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你推开一扇毫不起眼的、属于18世纪市政厅风格的大门，步入一个略显昏暗的门厅。空气里是那种老建筑特有的、混合了陈旧木头、抛光蜡和一点点灰尘的宁静气味。你跟着讲解员走过一段短廊，然后，她推开了另一扇厚重的门——
就在那一瞬间，你被毫无防备地抛进了一个金色的梦境。是的，“抛进”这个词毫不夸张。所有的光线、色彩与细节像潮水般涌来，淹没了你的感官。你的眼睛需要好几秒钟才能适应这突如其来的富丽堂皇。首先抓住你的是那温暖到近乎炽烈的“拜罗伊特金”，它包裹着从地板到穹顶的每一寸空间。然后，你看到了那些栩栩如生的人物：天使在梁柱间嬉戏，希腊众神从弧形包厢的边缘凝视着你，繁复的茛苕叶纹饰如藤蔓般缠绕生长。最奇妙的是，这一切宏伟——高耸的四层包厢、巨大的舞台拱门、甚至那些看起来像大理石的柱子——全部，都是用木头雕刻而成的。你几乎能想象到当年工匠们如何在这木材上倾注生命，用刻刀将冰冷的木头变得如此柔软、充满动感与体温。
这里静极了。尽管参观者们压低了声音交谈，但那些窃窃私语仿佛被这金色的空间温柔地吸收、化解，只剩下一种庄严肃穆的寂静。你抬头仰望那绘有阿波罗与缪斯的天顶画，画中的蓝天白云与剧院内虚假的“天空”连成一片，巴洛克艺术最擅长的“视觉欺骗”在此登峰造极。它不是在模仿现实，而是在创造一个比现实更华丽、更有序、更符合君主理想的完美世界。站在正厅后排，你仿佛能听到历史的回声——丝绸裙摆的窸窣声、羽扇轻摇的风声、还有乐队奏响序曲前，那种充满期待的静默。这不是一座冰冷的博物馆，而是一个依然在呼吸的、等待下一场盛宴开幕的鲜活机体。
对于拜罗伊特人而言，这座剧院远不止是一个旅游景点。它是城市皇冠上的明珠，是身份的象征。尽管后来理查德·瓦格纳为了他宏大的音乐节在此地建造了另一个更宏大的节日剧院，但边区歌剧院始终保持着一种古典的、亲密的、属于18世纪的优雅气质。它不像瓦格纳剧院那样充满革新与哲学的重量，它纯粹是为了美、为了欢愉、为了展示权力与艺术结合的极致奢华而存在的。这种纯粹，在今日看来，反而具有一种穿越时空的、直击人心的魔力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你推开一扇毫不起眼的、属于18世纪市政厅风格的大门，步入一个略显昏暗的门厅。空气里是那种老建筑特有的、混合了陈旧木头、抛光蜡和一点点灰尘的宁静气味。你跟着讲解员走过一段短廊，然后，她推开了另一扇厚重的门——`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`就在那一瞬间，你被毫无防备地抛进了一个金色的梦境。是的，“抛进”这个词毫不夸张。所有的光线、色彩与细节像潮水般涌来，淹没了你的感官。你的眼睛需要好几秒钟才能适应这突如其来的富丽堂皇。首先抓住你的是那温暖到近乎炽烈的“拜罗伊特金”，它包裹着从地板到穹顶的每一寸空间。然后，你看到了那些栩栩如生的人物：天使在梁柱间嬉戏，希腊众神从弧形包厢的边缘凝视着你，繁复的茛苕叶纹饰如藤蔓般缠绕生长。最奇妙的是，这一切宏伟——高耸的四层包厢、巨大的舞台拱门、甚至那些看起来像大理石的柱子——全部，都是用木头雕刻而成的。你几乎能想象到当年工匠们如何在这木材上倾注生命，用刻刀将冰冷的木头变得如此柔软、充满动感与体温。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里静极了。尽管参观者们压低了声音交谈，但那些窃窃私语仿佛被这金色的空间温柔地吸收、化解，只剩下一种庄严肃穆的寂静。你抬头仰望那绘有阿波罗与缪斯的天顶画，画中的蓝天白云与剧院内虚假的“天空”连成一片，巴洛克艺术最擅长的“视觉欺骗”在此登峰造极。它不是在模仿现实，而是在创造一个比现实更华丽、更有序、更符合君主理想的完美世界。站在正厅后排，你仿佛能听到历史的回声——丝绸裙摆的窸窣声、羽扇轻摇的风声、还有乐队奏响序曲前，那种充满期待的静默。这不是一座冰冷的博物馆，而是一个依然在呼吸的、等待下一场盛宴开幕的鲜活机体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于拜罗伊特人而言，这座剧院远不止是一个旅游景点。它是城市皇冠上的明珠，是身份的象征。尽管后来理查德·瓦格纳为了他宏大的音乐节在此地建造了另一个更宏大的节日剧院，但边区歌剧院始终保持着一种古典的、亲密的、属于18世纪的优雅气质。它不像瓦格纳剧院那样充满革新与哲学的重量，它纯粹是为了美、为了欢愉、为了展示权力与艺术结合的极致奢华而存在的。这种纯粹，在今日看来，反而具有一种穿越时空的、直击人心的魔力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拜罗伊特边区歌剧院`} />
                <InfoRow label="英文名称" value={`Margravial Opera House`} />
                <InfoRow label="正式名称" value={`Margravial Opera House Bayreuth`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`拜罗伊特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为联合国教科文组织世界遗产，它是欧洲现存唯一完好保留了17-18世纪意大利式巴洛克剧院原始风貌的歌剧院，见证了绝对主义宫廷文化的巅峰。`} />
                <InfoRow label="建筑特色" value={`其内部是一个令人屏息的“黄金国”，几乎所有华丽装饰——从栩栩如生的雕像、繁复的浮雕到整个多层包厢结构——均由木材雕刻而成，并覆以金箔与彩绘，是巴洛克幻象艺术的终极体现。`} />
                <InfoRow label="建筑风格" value={`意大利式巴洛克剧院风格，由当时最负盛名的剧院建筑师家族成员设计，堪称“巴洛克剧院建筑的教科书”。`} />
                <InfoRow label="文化价值" value={`它不仅是一座建筑，更是一个沉浸式的“整体艺术作品”，将建筑、绘画、雕塑和舞台机械完美融合，旨在为观众创造从现实完全抽离、进入神话与权力叙事的梦幻体验。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`四月至九月：每日上午9点至下午6点；十月至三月：每日上午10点至下午4点。闭馆前30分钟停止入场。每年有临时闭馆进行维护或为特殊演出做准备，具体日期请务必提前在官网查询。注意，剧院内部参观仅限参加定时导览团，旺季时强烈建议提前在线预订。`} />
              <InfoRow label="门票价格" value={`成人票8欧元；优惠票（学生、残疾人等）7欧元；18岁以下青少年及儿童免费。家庭票（2位成人及子女）15欧元。提供语音导览设备，需额外支付2欧元。参加特殊主题导览或晚间导览价格可能上浮。`} />
              <InfoRow label="地址" value={`Opernstraße 14, 95444 Bayreuth, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是纽伦堡机场（NUE），距离拜罗伊特约70公里。从机场可搭乘机场巴士至纽伦堡中央火车站（约12分钟），再换乘区域火车（RE或RB）前往拜罗伊特主火车站，车程约1小时，班次频繁。从慕尼黑中央火车站出发，乘坐直达的RE火车约需2小时。抵达拜罗伊特火车站后，歌剧院位于老城中心，步行约15分钟即可到达，沿途风景优美。城内也有公交线路，但步行是最佳的探索方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一位心怀宏图却身困小城的女侯爵说起。18世纪中叶，拜罗伊特这片边疆伯爵领地（Margraviate）的统治者，是威廉明娜女侯爵。她是普鲁士国王腓特烈大帝的姐姐，一位才华横溢、热爱艺术却婚姻不幸的女性。被政治婚姻束缚在相对偏僻的拜罗伊特，她将所有的激情与抱负都倾注在了艺术与建筑上，决心将这个小城打造成一个能与维也纳、巴黎媲美的文化中心。建造一座配得上她宫廷的、无与伦比的歌剧院，便成了她宏伟蓝图中最核心的一笔。这不是一时兴起的奢侈，而是一个政治宣言：她要让欧洲看到，边疆之地，亦有文明之光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，她请来了当时欧洲剧院设计界的“摇滚巨星”——来自意大利博洛尼亚的朱塞佩·加利比比安纳。这个家族的名字就是巴洛克剧院的代名词。朱塞佩提交的设计图大胆而创新：他摒弃了当时宫廷剧院常用的马蹄形布局，采用了更古老的、源于古希腊的“U”形多层包厢设计。但这只是骨架。真正的灵魂在于，他决定几乎全部采用木材作为建造和装饰材料。这不仅是出于声学考虑（木材能产生更温暖圆润的音响效果），更是一项经济而充满野心的艺术抉择。木材让工匠能够实现石材难以企及的雕刻精度和繁复程度，也让建造速度大大加快。从1746年奠基到1750年落成，这座奇迹般的建筑只用了四年时间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你可以想象当时的盛况：能工巧匠从四面八方汇聚于此。木雕师们对着巨大的椴木和云杉，刻刀飞舞，将一块块朴素的木头变成卷曲的浪花、丰满的水果、带翼的天使和威严的君主肖像。画师们攀上高高的脚手架，在穹顶上绘制出开阔的天空幻象。金箔匠人用最细腻的手法，将那些雕刻的细节一点点贴上金箔，让整个剧场在烛光下熠熠生辉。开幕典礼上演的是当时流行的法国轻歌剧，舞台机关巧妙，布景华丽变幻，女侯爵坐在她专属的中央包厢里，看着台下盛装的贵族与社会名流。那一刻，剧院本身成为了最伟大的演出，它宣示着：在这里，艺术即权力，幻想即真实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的戏剧性在于，这座为歌剧而生的宫殿，在其后的岁月里却长时间沉寂。随着女侯爵去世和家族没落，拜罗伊特的光辉逐渐黯淡。剧院使用的机会越来越少，而这反而成了它最大的幸运。因为它没有被频繁改造以适应新的演出风格，没有安装刺眼的电气灯光，也没有被战争彻底摧毁。它就像被施了魔法，静静沉睡在时间胶囊里。尤其幸运的是，在第二次世界大战期间，尽管拜罗伊特老城遭受了严重的空袭，这座珍贵的歌剧院却奇迹般地仅受轻伤，主体结构和内部那无法复制的木雕装饰得以完好保存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最近十多年，它经历了一次漫长而精细到毫米级的修复。专家们像外科医生一样，用最传统的方法清理数百年的尘垢，修补破损的金箔，加固老化的木结构。修复的目的不是让它焕然一新，而是让那个1748年的金色梦境原汁原味地延续下去。2012年，它被列入联合国教科文组织世界遗产名录，这份认可正式宣告了它的价值——它不再仅仅是德国的宝藏，更是全人类共同关于美、技艺与梦想的记忆载体。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受这座剧院的魔力，建议安排至少3小时的深度游览。最佳抵达时间是工作日的上午开门时分，此时旅行团尚未涌入，你能享受到相对宁静的观赏氛围。整体节奏宜慢不宜快，因为细节之多，需要你时时驻足、细细品味。路线将遵循从外到内、从整体到局部、最后沉浸于想象的顺序：先从远处欣赏其朴素外表与华丽内在的戏剧性对比，然后在导览带领下系统性地解读内部空间与装饰奥秘，最后留出时间，独自坐在观众席上，让感官和想象力自由驰骋。这样的安排能让你逐步从一位旁观者，转变为进入那个巴洛克世界的“沉浸式体验者”。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前在官网预订导览门票，特别是旺季（5-9月），现场购票很可能需要等待数小时甚至售罄。室内温度常年较低，即便夏季也建议带一件薄外套。穿着舒适的平底鞋非常重要，因为内部不少楼梯狭窄且陡峭。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从Opernstraße街对面，仰头欣赏这座剧院看似朴素、甚至有些严肃的砂岩外墙，体会其“内敛外壳包裹惊人宝藏”的巴洛克式反差美学。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟着导览轻轻推开厚重的主入口门，在门厅稍作停留，感受光线与气氛从“日常”到“非凡”的骤然切换。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入正厅（Auditorium）的瞬间，不要急于向前，就站在原地，让你的眼睛和心灵去承受那第一波无比震撼的、金碧辉煌的视觉洪流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在导览的讲解下，近距离观察底层包厢护栏上那些精妙绝伦的木雕寓言人物，试着辨认象征音乐、诗歌、戏剧的不同形象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的弧形楼梯走上二层的中央包厢，这里曾是威廉明娜女侯爵的专属座位，从这个“权力之眼”的视角俯瞰整个剧场和舞台，感受君临天下的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细打量舞台上方那座巨大的、雕刻着边区伯爵纹章的华盖，以及两侧那些仿佛随时会动起来的、支撑着假阳台的动态人像柱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果导览允许且舞台开放，走到舞台前方，回头仰望观众席，你会理解建筑师如何通过层层内收的包厢设计，将所有人的视线焦点都牢牢锁定在舞台上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览尾声，争取在正厅的后排或一层包厢找一个位置静静坐下几分钟，关掉相机，只是用眼睛看、用耳朵听这片空间的“寂静之声”，想象烛火摇曳、裙裾生香的夜晚。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`从正厅最后方中央的位置拍摄全景`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头，将四层金色包厢、舞台拱门和华盖全部囊括进画面，最佳光线是上午室内的自然侧光，能完美展现木雕的立体质感与金箔的温暖光泽。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`二楼侧面包厢的角落`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光有时会透过高窗斜射进来，在这里可以拍摄到光线如舞台聚光灯般照亮部分金色装饰与红色包厢绒布的戏剧性特写，构图时可将部分包厢曲线作为前景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`仰拍穹顶壁画`}</h4>
                  <p className="text-sm text-gray-700">{`躺在正厅后排的长椅上（如果允许且人少时），用手机的超广角模式垂直向上拍摄，能将绘有阿波罗战车的壮丽穹顶与下方层层叠叠的包厢曲线一同收入，形成强烈的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`舞台视角拍观众席`}</h4>
                  <p className="text-sm text-gray-700">{`如果幸运地遇到舞台区域开放，一定要走到舞台中央指挥位，拍摄整个剧场观众席的对称全景，这个角度最能体现巴洛克剧院建筑设计的几何美感与威严气势。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内严禁使用闪光灯和三脚架，因为强光和金箔反射会严重影响他人游览，且可能对脆弱的历史颜料造成伤害。剧院内光线复杂，建议将相机ISO调高，依靠大光圈镜头捕捉细节。拍摄时请始终保持安静，尊重其他访客和这份珍贵的历史氛围。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于老城广场旁的“拜罗伊特酒店”，部分房间拥有直面古老市政厅的优美窗景，步行至歌剧院仅需5分钟，早晨在弥漫着咖啡香气的街角面包店开始一天。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沉浸式体验`}</h4>
                  <p className="text-sm text-green-800">{`由一栋18世纪贵族宅邸修复而成的“安妮女侯爵设计酒店”，设计典雅，坐落在宁静的花园中，从家具到氛围都延续着边伯爵时代的精致格调，让你在梦中也身处巴洛克时代。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代舒适型`}</h4>
                  <p className="text-sm text-yellow-800">{`距离火车站和市中心都仅几步之遥的“默克酒店”，提供宽敞明亮的现代房间和丰盛的巴伐利亚风味早餐，是探索城市后放松身心的完美基地，性价比极高。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`奢华度假风`}</h4>
                  <p className="text-sm text-purple-800">{`位于城市近郊丘陵上的“特雷斯维茨城堡酒店”，入住真正的19世纪城堡，房间奢华，拥有广阔的公园和远眺拜罗伊特老城的视野，适合想要彻底逃离、享受宁静与尊贵服务的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`拜罗伊特在每年七月下旬至八月底的“理查德·瓦格纳音乐节”期间住宿异常紧张且价格高昂，若非为音乐节而来，建议避开此时间段。老城区几乎所有地点都非常安全，夜晚漫步街道感受宁静氛围是一大享受。许多特色酒店规模不大，提前数月预订是明智之举。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开边区歌剧院很久之后，那种被金色温暖包裹的感觉依然留在记忆的皮肤上。它给我的触动，不仅仅是视觉上的震撼，更像是一种关于“短暂与永恒”的哲学沉思。想想看，这座剧院本质上是为了转瞬即逝的狂欢而建——一场演出不过几小时，幕布落下，灯光熄灭，繁华散尽。威廉明娜女侯爵和她的宾客们，那些盛装的身影、低声的谈笑、歌剧的华彩乐章，都早已随风而逝。然而，为承载这些短暂瞬间而创造的建筑、木雕、绘画，却顽强地抵抗了时间的侵蚀，凝固了下来，成为了永恒。这多么奇妙：最易朽的木材，被人类的技艺与热爱点化，反而比许多石头城堡更长久地守护住了那个时代的灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、崇尚极简、一切数字化的快节奏世界里，拜罗伊特边区歌剧院的存在，就像一个来自过去的、固执而美丽的“异类”。它毫无保留地赞美着繁复、奢华、人工的技艺与幻象的美。它不实用，不简约，但它充满人性温度。它提醒我们，人类的精神需要庆典，需要超越日常的仪式感，需要在一个被精心设计的美学空间中，共同经历情感的涤荡与升华。每一位热爱深度游的旅人都该来此，不仅仅是为了一张朋友圈的惊艳照片，更是为了亲身坐进那个金色的怀抱，去体会一种几乎失传的、关于“整体艺术”的梦想。在这里，你会明白，有些地方，本身就是最伟大的一场演出。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/braubach-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布劳巴赫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Braubach Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lorsch-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛尔施隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lorsch Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meissen-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈森大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meissen Cathedral</p>
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
