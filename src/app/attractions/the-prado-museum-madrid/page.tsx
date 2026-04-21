import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '普拉多大道上的沉默巨匠 The Prado Museum｜直面戈雅、委拉斯开兹灵魂画作的朝圣之地 - 最佳欧洲景点',
  description: '走进普拉多博物馆的那一刻，你首先感受到的是一种庄严的寂静，但这寂静是有重量和气味的。那不是图书馆式的安静，而是数百幅古老油画颜料、上光油、以及历经岁月沉淀的木制画框所共同散发出的、略带暖意的幽微气息，混合着中央供暖系统轻微的嘶嘶声。光线是精心设计过的，大多数展厅幽暗如洞穴，只有画作被精准的射灯点亮，',
}

export default function ThePradoMuseumMadridPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '普拉多大道上的沉默巨匠', href: '/attractions/the-prado-museum-madrid' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`普拉多大道上的沉默巨匠・The Prado Museum・西班牙・马德里`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`走进普拉多博物馆的那一刻，你首先感受到的是一种庄严的寂静，但这寂静是有重量和气味的。那不是图书馆式的安静，而是数百幅古老油画颜料、上光油、以及历经岁月沉淀的木制画框所共同散发出的、略带暖意的幽微气息，混合着中央供暖系统轻微的嘶嘶声。光线是精心设计过的，大多数展厅幽暗如洞穴，只有画作被精准的射灯点亮，仿佛它们是自己在黑暗中发光。你会听到脚步声在宽阔的大理石地面上回响，但很快，这些声音都会被眼前那些巨大画布上汹涌的情感所吞没。
这里不像卢浮宫那样是世界的百科全书，它更专注，也更深情。它的核心是西班牙的灵魂，尤其是戈雅和委拉斯开兹，这两位巨人如同两根支柱，撑起了整个博物馆的精神穹顶。在委拉斯开兹的《宫娥》前，你永远会看到最多的人长久驻足，人们试图解开那个镜子反射的谜题，画家本人正在画布后看着我们吗？这种互动感在17世纪是革命性的。而戈雅的展厅则像一场从光明到黑暗的剧烈旅行，从早期明快的挂毯草图，到晚年那批直接画在自己家墙上的“黑色绘画”，那股 raw 的、近乎疯狂的绝望力量，能瞬间攫住你的心脏。
你会注意到很多本地人，他们可能只是进来看看自己最爱的某一幅画，就像拜访一位老朋友。一个老绅士在戈雅的《1808年5月3日》前默默摘下帽子；一个艺术系的学生在临摹鲁本斯画中某片裙摆的光泽。在这里，艺术不是高悬的、仅供瞻仰的文物，它依然是流淌在马德里人血液里的东西，是他们在谈论历史、政治和人性时，可以随时调用的视觉词典。普拉多大道上车水马龙，而馆内的时间是缓慢流淌的琥珀。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进普拉多博物馆的那一刻，你首先感受到的是一种庄严的寂静，但这寂静是有重量和气味的。那不是图书馆式的安静，而是数百幅古老油画颜料、上光油、以及历经岁月沉淀的木制画框所共同散发出的、略带暖意的幽微气息，混合着中央供暖系统轻微的嘶嘶声。光线是精心设计过的，大多数展厅幽暗如洞穴，只有画作被精准的射灯点亮，仿佛它们是自己在黑暗中发光。你会听到脚步声在宽阔的大理石地面上回响，但很快，这些声音都会被眼前那些巨大画布上汹涌的情感所吞没。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不像卢浮宫那样是世界的百科全书，它更专注，也更深情。它的核心是西班牙的灵魂，尤其是戈雅和委拉斯开兹，这两位巨人如同两根支柱，撑起了整个博物馆的精神穹顶。在委拉斯开兹的《宫娥》前，你永远会看到最多的人长久驻足，人们试图解开那个镜子反射的谜题，画家本人正在画布后看着我们吗？这种互动感在17世纪是革命性的。而戈雅的展厅则像一场从光明到黑暗的剧烈旅行，从早期明快的挂毯草图，到晚年那批直接画在自己家墙上的“黑色绘画”，那股 raw 的、近乎疯狂的绝望力量，能瞬间攫住你的心脏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你会注意到很多本地人，他们可能只是进来看看自己最爱的某一幅画，就像拜访一位老朋友。一个老绅士在戈雅的《1808年5月3日》前默默摘下帽子；一个艺术系的学生在临摹鲁本斯画中某片裙摆的光泽。在这里，艺术不是高悬的、仅供瞻仰的文物，它依然是流淌在马德里人血液里的东西，是他们在谈论历史、政治和人性时，可以随时调用的视觉词典。普拉多大道上车水马龙，而馆内的时间是缓慢流淌的琥珀。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`普拉多大道上的沉默巨匠`} />
                <InfoRow label="英文名称" value={`The Prado Museum`} />
                <InfoRow label="正式名称" value={`Museo Nacional del Prado`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`马德里`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`西班牙无可争议的艺术圣殿，收藏了世界上最为完整和顶级的西班牙绘画珍品。`} />
                <InfoRow label="建筑特色" value={`新古典主义风格的宏伟立面和内部经过巧妙现代化改造的古典展厅空间，形成穿越时空的对话。`} />
                <InfoRow label="建筑风格" value={`主体建筑为新古典主义，由胡安·德·比利亚努埃瓦设计，后续扩建部分融合了现代简约风格。`} />
                <InfoRow label="文化价值" value={`它并非仅仅是画廊，而是理解西班牙民族性格、历史悲欢与精神深渊的一把视觉钥匙。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`周一至周六上午10:00至晚上8:00；周日及节假日上午10:00至晚上7:00。每年1月1日、5月1日、12月25日闭馆。特殊节日（如平安夜、新年前夜）提前至下午2:00闭馆。免费入场时段为周一至周六晚上6:00至8:00，以及周日和节假日下午5:00至7:00，但此时段人流极多。`} />
              <InfoRow label="门票价格" value={`全价票：15欧元。优惠票（65岁以上欧盟公民、青年卡持有者等）：7.5欧元。免费人群：18岁以下、18-25岁学生（需出示国际学生证）、残疾人士及一名陪同者。建议提前在官网购票并选择具体入场时段，可节省至少一小时排队时间。购票后两年内有效。`} />
              <InfoRow label="地址" value={`Calle de Ruiz de Alarcón, 23, 28014 Madrid, Spain`} />
              <InfoRow label="交通方式" value={`从马德里巴拉哈斯机场出发：乘坐地铁8号线（粉线）至“Nuevos Ministerios”站，换乘地铁10号线（蓝线）至“Banco de España”站，出站后步行约7分钟即可抵达。全程约45分钟。机场也有直达市区的Express巴士，在“Cibeles”站下车，步行10分钟。从马德里阿托查火车站出发：可乘坐地铁1号线（浅蓝线）坐1站至“Antón Martín”站，再步行约12分钟；或直接沿着普拉多大道悠闲步行20分钟，沿途风景极佳。地铁单程票约2欧元，10次票更划算。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普拉多的故事始于一位有品位的国王和一个野心勃勃的建筑计划。18世纪末，卡洛斯三世国王希望在马德里打造一个科学文化区，他委托建筑师胡安·德·比利亚努埃瓦设计一栋建筑，最初是想用作自然历史博物馆和科学院。建筑在拿破仑战争期间一度沦为骑兵军营，遭到了破坏，这个开局似乎预示了它未来将与西班牙的命运一样多舛。转机来自另一位国王——斐迪南七世，尤其是他那有着艺术慧眼的王后玛丽亚·伊莎贝尔·德·布拉甘萨。在她的推动下，这座建筑终于在1819年以“皇家绘画雕塑博物馆”的名义向公众开放，展品核心来自西班牙皇室的奢华收藏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些皇室收藏才是普拉多真正的根基。它的丰饶要感谢哈布斯堡和波旁王朝历代君主，特别是那位热爱艺术的“奥地利”的菲利普四世。他不仅是伟大的赞助人，更是委拉斯开兹的挚友和伯乐。正是他，将委拉斯开兹聘为宫廷画师，给予了这位天才无与伦比的创作自由和地位，才有了《宫娥》、《纺织女》等不朽杰作。可以说，没有菲利普四世，西班牙绘画的黄金时代将失去最璀璨的光芒。这些画作原本散落在各个王宫城堡，最终汇集于此，成为国家的宝藏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪的西班牙动荡不安，战争、革命、政权更迭如同走马灯。普拉多奇迹般地在这场混乱中幸存并壮大，这本身就是一个传奇。它经历了从皇家财产到国家博物馆的身份转变，并在“失窃”的危机中增添了戏剧性。比如，戈雅那幅迷人的《裸体的玛哈》曾一度被宗教裁判所收缴，差点永远消失。博物馆的收藏也在不断扩大，不仅通过购买，更通过“国家遗产”的征收，将许多从修道院解散后流落的宗教画纳入馆藏，这使得普拉多在中世纪和文艺复兴早期西班牙艺术方面的收藏变得无与伦比。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "20世纪的西班牙内战是对普拉多最严峻的考验。当马德里成为前线，炮弹可能落在任何地方时，共和政府做出了一个英勇的决定：疏散国宝。在馆长和工作人员的努力下，数百幅最珍贵的画作被小心翼翼地从画框上取下，卷起，装上卡车，开始了一场穿越战火的“艺术大迁徙”。它们先东躲西藏，最后被运送到日内瓦的国际联盟总部暂存。佛朗哥获胜后，这些画作又历尽艰辛重返马德里。这段历史为博物馆的每一幅画都镀上了一层悲壮的光辉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的普拉多，在保留其历史灵魂的同时，也勇敢地拥抱了现代。2007年，由著名建筑师拉斐尔·莫内奥设计的扩建部分竣工，巧妙地通过地下通道与主馆连接，解决了展览空间不足的问题，新增的餐厅和休息区也让参观体验更加人性化。它不再仅仅是一个保存过去的保险箱，而是一个持续进行研究和对话的活态机构。从比利亚努埃瓦的新古典主义蓝图，到战火中的颠沛流离，再到现代的从容扩展，普拉多的建筑与它的藏品一样，讲述着西班牙如何在与自身历史的复杂对话中，走向今天。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`普拉多是一座需要策略和体力的艺术迷宫，试图一天看完所有精华是mission impossible。理想的深度游览需要至少5-6小时。建议选择周二至周五的上午10点开门时即入场，此时光线好，人流相对较少。游览节奏应该是“重点突破，有所舍弃”。首先直冲顶层的西班牙大师核心展区（委拉斯开兹、戈雅），在精力最充沛时面对最重磅的作品。之后下楼，根据兴趣选择佛兰德大师（博斯、鲁本斯）或意大利画派（提香）。中午可在馆内咖啡厅稍作休息，下午再浏览一些特色展厅如雕塑馆。务必保留最后半小时，回到你最爱的一幅画前，安静地告别。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`免费时段人潮汹涌，体验大打折扣，如果预算允许强烈建议购买全天票在安静时段参观。馆内禁止使用闪光灯和三脚架，但普通拍照是允许的，请注意礼貌不要遮挡他人视线。穿一双绝对舒适的鞋子，馆内石质地面走起来很累，但休息长椅分布还算充足。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`开门后径直穿过底层大厅，从主楼梯直奔一楼，在人群聚集之前首先将自己浸入委拉斯开兹展厅那冷静而深邃的光影世界里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在《宫娥》面前找一个侧边的位置静静观察至少二十分钟，看画中人物的眼神如何与展厅里流动的参观者形成奇妙的空间游戏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰的指示牌走进戈雅的展厅，感受情绪从早期洛可可的轻快骤然跌入“黑色绘画”系列那令人屏息的、地狱般的心理景观。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从西班牙大师的震撼中暂时抽离，下到底层，在博斯那幅庞大诡异的《人间乐园》三联画前，细细辨认每一个充满奇思妙想和道德警示的超现实细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过连接主馆与新馆的明亮地下通道，在新馆的临时展览中或许会发现一个意想不到的、与古典大师对话的当代艺术项目。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到主楼，在提香、鲁本斯等大师为西班牙皇室创作的宏伟神话题作品前，体会哈布斯堡王朝的国际艺术品味与奢华。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，别忘了去一楼的雕塑庭院走走，那里有阳光从玻璃穹顶洒下，是让眼睛和思绪从油画浓烈色彩中得以喘息的最佳场所。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主立面全景`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前一小时，站在博物馆正对面的人行道上，用广角镜头捕捉新古典主义立面被金色夕阳温暖笼罩的对称之美，注意将前景的行道树稍作虚化以增加层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`委拉斯开兹展厅拱窗`}</h4>
                  <p className="text-sm text-gray-700">{`上午11点左右，阳光会透过高侧窗斜射进展厅，站在《纺织女》对面的位置，可以拍到光束如舞台追光般照亮画作与古典拱门的经典场景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`地下连接廊道`}</h4>
                  <p className="text-sm text-gray-700">{`这条由拉斐尔·莫内奥设计的通道本身是建筑杰作，利用其简洁的线条和纵深，在通道中段拍摄人物走向主馆的背影，能形成极具现代感的构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`戈雅黑色绘画展厅门口`}</h4>
                  <p className="text-sm text-gray-700">{`从这个较暗的展厅门口向内拍摄，捕捉参观者凝望《萨图恩吞噬其子》等画作时被画中绝望气息所感染的剪影轮廓，营造强烈的戏剧感和情感张力。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄画作时请务必关闭闪光灯，强光会对脆弱的古老颜料造成不可逆的损害。在拍摄以画作为背景的人物纪念照时，请尽量快速并保持安静，尊重其他沉浸其中的参观者。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`文化心脏之选`}</h4>
                  <p className="text-sm text-blue-800">{`普拉多大道旁一栋19世纪贵族公寓改造的精品酒店，房间窗户正对绿树成荫的大道，早晨在阳台上就能看见前往博物馆的人流，位置无可匹敌。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`艺术氛围民宿`}</h4>
                  <p className="text-sm text-green-800">{`位于拉斯莱特拉斯区的宁静公寓，房东是一位退休艺术教授，客厅里摆满了艺术书籍，他会给你手绘一张只有本地人才知道的博物馆“私藏作品”寻宝图。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端历史沉浸`}</h4>
                  <p className="text-sm text-yellow-800">{`萨拉曼卡区由古老宫殿改建的五星级酒店，距离博物馆步行15分钟，客房拥有极高的挑高和复古装饰，仿佛住在西班牙黄金时代的电影片场。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷驿站`}</h4>
                  <p className="text-sm text-purple-800">{`安东马丁市场附近的现代设计旅舍，步行到博物馆仅十分钟，顶楼露台是夜晚与各国背包客分享一天观展心得、眺望城市夜景的绝佳社交场所。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "普拉多大道和丽池公园周边区域非常安全且充满生活气息，夜晚散步极佳。马德里的酒店预订在周末和大型节日期间会非常紧张，尤其是博物馆周边，建议至少提前两个月规划。如果你追求绝对安静，请避免选择正对主要大街的低楼层房间。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开普拉多时，你的背包里没有多一件实物纪念品，但你的脑海里可能已经塞满了过多的图像、色彩和故事，多到需要好几天来消化。戈雅笔下那些在黑暗中睁大的眼睛，委拉斯开兹画面中空气的震颤，博斯世界里狂欢与审判并存的奇景……它们不会立刻给你答案，反而会抛给你更多关于生命、权力、信仰和疯狂的疑问。这或许就是伟大艺术的本质：它不是装饰，而是一次次沉重而必要的叩击。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切追求快速消费和碎片信息的时代，普拉多坚持着它的“深度”与“专注”。它不试图取悦所有人，而是执着地守护并深入挖掘一片土壤——西班牙的精神土壤。来这里，你不是在完成一项“打卡世界名画”的任务，而是在进行一场缓慢的、与自己内心恐惧和欲望对视的仪式。每一位真正的旅人，都应该至少经历一次这样的仪式，在马德里的阳光下，走进这座沉默的建筑，让几个世纪前的巨匠告诉你，人类的悲欢从未改变，而艺术，是我们穿越这悲欢时，所能持有的最诚实的光。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sos-del-rey-catolico" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    索
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">索斯-德尔雷伊卡托利科</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sos del Rey Católico</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ubeda" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌韦达古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Úbeda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/peniscola-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩尼斯科拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Peñíscola</p>
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
