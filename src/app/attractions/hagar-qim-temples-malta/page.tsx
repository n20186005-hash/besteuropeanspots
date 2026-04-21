import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈加印神庙 Hagar Qim｜探访比金字塔更古老的地中海巨石文明 - 最佳欧洲景点',
  description: '车子沿着马耳他岛南部崎岖的海岸公路盘旋，当一片被阳光漂白成蜜糖色的巨大石块，毫无预警地撞入视野时，你的呼吸会不自觉地屏住。那不是残垣断壁，而是一座静默的、充满力量的雕塑群，以最原始的姿态，雄踞在俯瞰地中海的石灰岩海角之上。第一眼看见哈加印神庙，你感受到的是一种近乎蛮荒的壮美——巨石被五千多年的海风和...',
}

export default function HagarQimTemplesMaltaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '马耳他', href: '/destinations/malta' },
            { label: 'Qrendi（属马耳他南区）', href: '/destinations/malta' },
            { label: '哈加印神庙', href: '/attractions/hagar-qim-temples-malta' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈加印神庙・Hagar Qim・马耳他・Qrendi（属马耳他南区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着马耳他岛南部崎岖的海岸公路盘旋，当一片被阳光漂白成蜜糖色的巨大石块，毫无预警地撞入视野时，你的呼吸会不自觉地屏住。那不是残垣断壁，而是一座静默的、充满力量的雕塑群，以最原始的姿态，雄踞在俯瞰地中海的石灰岩海角之上。第一眼看见哈加印神庙，你感受到的是一种近乎蛮荒的壮美——巨石被五千多年的海风和烈日打磨得光滑而圆润，边缘泛着柔和的金色光泽，与脚下赭红色的土壤、身后蔚蓝到不真实的海面，构成一幅对比强烈又无比和谐的古老画卷。空气中弥漫着干燥的野草香气、咸腥的海风，以及一种只有古老石头才会散发出的、略带凉意的尘土味道。
走近它，宁静被放大。这里没有教堂的钟声，没有市集的喧嚣，只有风穿过巨石缝隙发出的低沉呜咽，以及远处海浪永恒不变的拍岸声。你会发现，这些石头并非杂乱无章。它们被精心地排列成房间、通道和神龛，那些门楣、祭坛石，甚至是石墙上雕刻的螺旋纹路，都在无言地诉说着一个高度发达的社会曾经存在。把手掌贴在一块被无数代人摩挲过的石面上，你能感到阳光留下的余温，以及石头内部传来的、穿越数十个世纪的冰凉。那一刻，时间不再是线性流淌的河水，而是一个凝固的、可触摸的实体。
最打动人的，或许是这种古老与现代日常的交织。在神庙遗址的下方，你能看到Qrendi村的红瓦屋顶在阳光下闪烁，农人的小拖拉机在梯田里缓缓移动。当地的老人们偶尔会散步到附近的观景台，望向这片他们称之为“Ħaġar Qim”（意为“崇拜之石”）的地方，眼神里是一种习以为常的敬畏。它不是被圈禁起来的“博物馆”，而是这片土地呼吸的一部分。它的核心魅力，就在于这种惊人的反差：用最简单、最笨重的材料，实现了最复杂、最精密的精神追求，并在沧海桑田之后，依然以其沉默的威严，让每一个到访的现代灵魂感到自身的渺小与时空的浩瀚。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着马耳他岛南部崎岖的海岸公路盘旋，当一片被阳光漂白成蜜糖色的巨大石块，毫无预警地撞入视野时，你的呼吸会不自觉地屏住。那不是残垣断壁，而是一座静默的、充满力量的雕塑群，以最原始的姿态，雄踞在俯瞰地中海的石灰岩海角之上。第一眼看见哈加印神庙，你感受到的是一种近乎蛮荒的壮美——巨石被五千多年的海风和烈日打磨得光滑而圆润，边缘泛着柔和的金色光泽，与脚下赭红色的土壤、身后蔚蓝到不真实的海面，构成一幅对比强烈又无比和谐的古老画卷。空气中弥漫着干燥的野草香气、咸腥的海风，以及一种只有古老石头才会散发出的、略带凉意的尘土味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近它，宁静被放大。这里没有教堂的钟声，没有市集的喧嚣，只有风穿过巨石缝隙发出的低沉呜咽，以及远处海浪永恒不变的拍岸声。你会发现，这些石头并非杂乱无章。它们被精心地排列成房间、通道和神龛，那些门楣、祭坛石，甚至是石墙上雕刻的螺旋纹路，都在无言地诉说着一个高度发达的社会曾经存在。把手掌贴在一块被无数代人摩挲过的石面上，你能感到阳光留下的余温，以及石头内部传来的、穿越数十个世纪的冰凉。那一刻，时间不再是线性流淌的河水，而是一个凝固的、可触摸的实体。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是这种古老与现代日常的交织。在神庙遗址的下方，你能看到Qrendi村的红瓦屋顶在阳光下闪烁，农人的小拖拉机在梯田里缓缓移动。当地的老人们偶尔会散步到附近的观景台，望向这片他们称之为“Ħaġar Qim”（意为“崇拜之石”）的地方，眼神里是一种习以为常的敬畏。它不是被圈禁起来的“博物馆”，而是这片土地呼吸的一部分。它的核心魅力，就在于这种惊人的反差：用最简单、最笨重的材料，实现了最复杂、最精密的精神追求，并在沧海桑田之后，依然以其沉默的威严，让每一个到访的现代灵魂感到自身的渺小与时空的浩瀚。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈加印神庙`} />
                <InfoRow label="英文名称" value={`Hagar Qim`} />
                <InfoRow label="正式名称" value={`Ħaġar Qim Temples`} />
                <InfoRow label="国家" value={`马耳他`} />
                <InfoRow label="城市" value={`Qrendi（属马耳他南区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这是地球上最古老、保存最完好的独立式巨石建筑群之一，其历史早于埃及吉萨金字塔和英国巨石阵，是马耳他史前辉煌文明的巅峰见证。`} />
                <InfoRow label="建筑特色" value={`由巨大的、未经雕凿的天然珊瑚石灰岩石块巧妙地堆叠、排列而成，最大的巨石超过20吨，展现了新石器时代人类卓越的工程智慧。`} />
                <InfoRow label="建筑风格" value={`独特的马耳他巨石庙宇风格，以多叶苜蓿（三叶形）平面布局、精致的石雕装饰和精确的天文指向性为特征。`} />
                <InfoRow label="文化价值" value={`联合国教科文组织世界遗产，是理解史前地中海人类社会组织、宗教信仰、艺术与天文知识的关键无字史书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月1日至9月30日）每日上午9:00至下午18:00，最晚入场时间为17:30。
冬季（10月1日至3月31日）每日上午9:00至下午17:00，最晚入场时间为16:30。
全年开放，除12月24日、25日、31日及1月1日外。注意马耳他午后阳光强烈，建议选择清晨或傍晚时段参观，体验更佳。`} />
              <InfoRow label="门票价格" value={`成人票10欧元；青少年（12-17岁）、学生及60岁以上长者7欧元；儿童（6-11岁）5.5欧元；5岁以下儿童免费。
强烈推荐购买“马耳他多景点通票”（Heritage Malta Multisite Pass），有效期30天，可游览包括哈加印神庙、姆纳德拉神庙、塔尔辛考古遗址等在内的多个主要历史遗迹，性价比极高。`} />
              <InfoRow label="地址" value={`Triq Hagar Qim, Qrendi, QRD 2501, Malta`} />
              <InfoRow label="交通方式" value={`从马耳他国际机场（MLA）出发是最便捷的选择。在机场外的公交枢纽站，乘坐74路或201路公交车，在“Hagar Qim”站下车即可，车程约25-30分钟，班次每小时1-2班。建议购买马耳他交通卡（Tallinja Card）或在司机处购买单程票。如果你住在瓦莱塔或斯利马等主要城镇，可先乘坐前往Qrendi方向的公交车（如82路），总耗时约1-1.5小时。自驾是最灵活的方式，遗址入口处设有免费停车场，跟着棕色旅游标志“Hagar Qim & Mnajdra”行驶即可。岛上道路狭窄，需小心驾驶。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从大约五千六百年前说起，那时古埃及的法老尚未建造金字塔，欧洲大陆还笼罩在浓密的史前迷雾之中。而在马耳他这个地中海的心脏小岛上，一群我们至今不知道确切称呼的人们，开始了一项堪称奇迹的工程。他们并非我们想象中的原始蛮族，而是一个拥有发达农业、稳定社会结构和深邃精神世界的群落。是什么驱动他们？或许是对丰饶土地的感恩，对海洋力量的敬畏，或是对生死轮回的探求。没有金属工具，他们就用更坚硬的燧石和兽骨，一点点地切割、雕琢那些巨大的珊瑚石灰岩。想象一下那个场景：号子声在空旷的海角回荡，绳索与木杠并用，依靠纯人力和智慧，将数十吨的巨石从附近的采石场拖运、竖起、精准定位。这不仅是体力的较量，更是精密数学、工程学和集体信仰的终极体现。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`哈加印并非孤立存在。它与紧邻的姆纳德拉神庙，以及岛上其他几座庙宇，共同构成了一个宏大的神圣地理网络。考古学家发现，这些庙宇的朝向并非随意。例如，哈加印主庙的入口，经过精心设计，在夏至日初升的太阳光会笔直地射入内殿，照亮最深处的祭坛石。而姆纳德拉神庙的布局，则与春秋分的天象完美对应。这意味着，这些巨石不仅是神庙，更是世界上最古老的天文观测台之一。建造者们是时间的记录者，他们用石头书写日历，将天体运行与祭祀仪式紧密相连，试图理解和取悦那掌控四季轮回、生命繁衍的至高力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，这个辉煌的文明大约在公元前2500年左右突然衰落、消失了，留下空无一人的宏伟庙宇和无数未解之谜。是气候变化导致资源枯竭？是外来入侵？还是社会内部崩溃？我们不得而知。在随后的三千年里，神庙被遗忘，逐渐被风沙和土壤掩埋，直到成为牧羊人偶尔歇脚的土丘。转机出现在1839年，当时马耳他的土地所有者为了清理农田，意外地让这些沉睡的巨石重见天日。最初的发掘是粗糙而充满猎奇色彩的，一些珍贵的考古信息因此遗失，但哈加印的惊人面貌得以公诸于世。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪以来，专业的考古工作逐步展开。人们在这里发现了大量无价的文物：被称为“马耳他维纳斯”的丰腴女性石雕，证明了母神崇拜的存在；精美的陶器、贝壳饰品和动物祭品的遗骸，勾勒出祭祀活动的场景。为了保护这些脆弱的遗址免受海风侵蚀，马耳他政府在二十一世纪初做出了一个大胆而必要的决定：为哈加印和姆纳德拉神庙搭建巨大的白色遮阳棚。这个现代钢结构建筑曾引发争议，但它确实像一把保护伞，让这些五千多岁的“老人”得以继续从容地面对未来的风雨。今天，当我们站在棚下，触摸着古老的石头，仰望现代的穹顶，仿佛置身于一条连接着新石器时代与当代的时间隧道之中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的哈加印之旅，是一场与阳光和历史的赛跑。强烈建议你在早上九点开门时就抵达，这不仅是为了避开稍后到来的旅游团大巴，更是为了捕捉地中海晨光洒在巨石上的金色魔法时刻。整个深度游览建议预留至少2.5至3小时。节奏宜慢不宜快，先在外围感受全景与氛围，再深入神庙内部探寻细节，最后沿着海岸步道前往姐妹遗址姆纳德拉神庙，并留足时间在观景台冥想和拍照。这样的安排能让你由远及近、由宏大到细微，层层剥开这个史前文明的神秘面纱，同时享受马耳他南部海岸线令人屏息的壮丽景色。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`马耳他夏季阳光极其猛烈且缺乏遮蔽，务必携带充足饮用水、太阳镜、帽子和高倍数防晒霜，穿一双舒适耐走的鞋子，因为遗址内外都是粗糙的石板路和土路。
保护棚内禁止触摸原始石雕（部分复制品可供触摸），也严禁攀爬任何巨石，这不仅是为了保护遗产，也是为了你的安全，有些石头结构并不如看起来那么稳固。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在游客中心领取语音导览器或简介册后，先别急着进入棚区，绕到遗址西侧的开阔地，让眼睛适应一下这巨石阵与蔚蓝地中海同框的史诗级画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓缓走入白色的保护棚下，立刻被那份阴凉与古老石头的气息包围，首先在主入口处观察那块被称作“神谕石”的巨型石板，试着想象祭司在此传达神谕的庄严场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`弯腰穿过低矮却厚重的石门楣，进入庙宇的核心区域，在“主祭坛室”驻足，触摸石壁上那些神秘的螺旋纹和植物浮雕，感受指尖传来的粗糙历史感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那个著名的“胖女人”雕像（复制品）所在的位置，端详她丰腴的体态，思考新石器时代人们对生命、繁衍与母性力量的崇拜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从哈加印神庙的后方出口离开保护棚，沿着清晰标识的、风景如画的海岸悬崖步道，轻松步行约10分钟，前往视野更加开阔的姆纳德拉神庙群。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在姆纳德拉神庙，特别留意其更加精密的布局，并走到最靠近海崖的边缘，那里有保存最完好的石桌祭坛，背景是湛蓝的海水与费尔弗拉岛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`游览结束后，一定要爬上连接两个遗址之间的观景台，坐下来，让目光在古老的石头、蔚蓝的海和广阔的天空之间自由游走，静静地消化这一切。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回程前，别忘了去现代化的游客中心看看，那里陈列着出土文物的精美复制品和详细的发掘过程介绍，能帮你把零碎的震撼串联成完整的认知。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`遗址西侧全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，站在保护棚西面约50米外的空地上，用广角镜头将巨大的白色保护棚、金色的哈加印巨石与背景中无限延伸的蓝色地中海一同纳入画面，构图时让天空占据三分之二，突出海天一色的辽阔感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主祭坛室内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择在正午前后阳光最盛时，站在内室门口向内拍摄，此时阳光会从保护棚的缝隙和神庙本身的开口斜射入内，在斑驳的石壁上形成戏剧性的明暗对比，完美勾勒出石室的深邃与神秘。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`海岸步道俯瞰机位`}</h4>
                  <p className="text-sm text-gray-700">{`从哈加印走向姆纳德拉的步道中途，有一处突出的岩石平台，下午顺光时分，从此处用长焦镜头拉近拍摄姆纳德拉神庙群，可以将层层叠叠的石室结构与悬崖下翡翠般的海水同框，画面充满层次感和历史临场感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`抽象细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`避开直射的硬光，在多云天气或棚内阴影处，贴近石壁拍摄那些螺旋纹、钻孔或历经风化的石面肌理，使用大光圈虚化背景，能得到充满质感、宛如抽象艺术作品的细节照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜（CPL）可以有效消除石灰岩表面的反光，让石头的色彩和纹理更加饱和、清晰，尤其在晴天拍摄时效果显著。`}</li>
                <li>• {`无人机飞行在遗址上空是严格禁止的，请尊重文化遗产保护规定，所有震撼的全景图都可以在官方观景台或推荐的机位用手持设备完成。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海边静谧之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在Qrendi或Zurrieq附近由传统马耳他石头农舍改造的精品民宿，推开窗就是宁静的乡村景色，步行或短途驾车即可到达神庙，享受与世隔绝的清晨时光。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`便利探索枢纽`}</h4>
                  <p className="text-sm text-green-800">{`选择位于中世纪古城姆迪纳附近的特色酒店，那里氛围静谧高雅，以此为据点可以轻松辐射前往哈加印、丁力悬崖以及岛上的其他主要历史景点。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端度假体验`}</h4>
                  <p className="text-sm text-yellow-800">{`入住马耳他南部海岸线如马尔萨斯卡拉区域的海景五星级酒店，拥有私人海滩和顶级水疗，在探索完古老的文明后，可以彻底放松，享受地中海的奢华假日。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`地道家庭氛围`}</h4>
                  <p className="text-sm text-purple-800">{`预订锡吉维一带的家庭式公寓，这里更具本地生活气息，房东往往会热情地给你指点附近不为人知的观景角落和地道餐馆，像当地人一样生活几天。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`马耳他主岛南部和西部住宿相对北部和东部旅游区更为安静、游客更少，能获得更地道的体验，但晚间餐饮选择可能有限，自驾会大大提升便利度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多由传统老屋改造的民宿房间可能较矮小并保留石头结构，隔音可能不如现代酒店，但这正是体验马耳他建筑特色的核心部分，建议提前与房东沟通确认。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开哈加印很久之后，那片巨石在金色阳光下的剪影，依然会时不时地在脑海中浮现。它带给我的触动，并非一般名胜古迹那种对人力或艺术的惊叹，而是一种更深层、更近乎本能的震撼。它似乎在质问每一个到访的现代人：在没有任何现代科技加持的原始条件下，是什么力量让一群人凝聚起来，花费数代人的时间，去完成这样一件看似“无用”的宏伟工程？答案或许就藏在那份对自然、对宇宙、对生命本源最质朴的敬畏与探索之中。在效率至上、追求即时满足的今天，哈加印像一个永恒的参照系，提醒着我们人类精神中曾有的那种漫长、专注而神圣的耐心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`因此，每一位热爱深度游的旅人，都应该把这里列入一生的清单。它不仅仅是一个景点，更是一堂生动的哲学课。在这里，你听不到任何语音讲解里具体的历史年份或国王名号，因为那时连文字都尚未发明。你面对的，是人类文明童年期最纯真的梦想与渴望，被凝固在了石头里。站在这些巨石之间，你会忘记手机的信号，忘记日程的焦虑，只感到自己与风、与海、与亘古的时光站在了一起。它让你重新思考“进步”的定义，并在一片沉默的巨石阵前，找回内心久违的宁静与谦卑。这，正是穿越五千年而来的，最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tarxien-temples" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔西安神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tarxien Temples</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cittadella-citadel-gozo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维多利亚城堡（戈佐岛城堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cittadella</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dingli-cliffs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    丁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">丁利悬崖</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dingli Cliffs</p>
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
