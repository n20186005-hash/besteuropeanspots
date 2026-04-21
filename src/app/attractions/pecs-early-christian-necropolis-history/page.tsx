import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩奇历史溯源｜小众欧洲秘境的前世今生与名人传奇',
  description: '穿越两千年，从罗马边境索皮阿奈到匈牙利文化之都佩奇。探索地下墓室、聆听文艺复兴诗人的吟唱、追寻茜茜女王的足迹，揭开层层叠加的历史面纱。',
}

export default function PecsEarlyChristianNecropolisHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '佩奇早期基督教陵墓', href: '/attractions/pecs-early-christian-necropolis-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩奇早期基督教陵墓・Early Christian Necropolis of Pécs・匈牙利・佩奇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在匈牙利南部，阳光充沛的迈切克山脚下，藏着一位“沉睡的巨人”——<strong>佩奇</strong>。它的标签远不止于世界遗产“早期基督教陵墓”。这里的地基，由罗马军团亲手夯实；它的肌理，浸透了奥斯曼土耳其的东方香料味；它的灵魂，则被文艺复兴的诗篇与哈布斯堡皇室的叹息所唤醒。这并非一座从零开始的城市，而是一个被层层历史文明反复书写、覆盖又重现的羊皮卷。抛开游玩攻略，走进佩奇的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩奇早期基督教陵墓`} />
                <InfoRow label="英文名称" value={`Early Christian Necropolis of Pécs`} />
                <InfoRow label="正式名称" value={`Early Christian Necropolis of Pécs`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`佩奇`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要为佩奇寻根，我们必须将时钟拨回近两千年前。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那时，罗马帝国的边界<strong>潘诺尼亚行省</strong>在此延伸。约公元2世纪，一座名为<strong>索皮阿奈</strong>的城镇在此崛起。它并非偶然的聚落，而是帝国精密战略的产物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "索皮阿奈是罗马北境防线上的重要一环，一座守卫疆土、维持商路畅通的边境要塞与行政中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "军营、广场、公共浴场和别墅区相继建成，一个典型的罗马城镇轮廓清晰可见。来自地中海的葡萄酒、橄榄油和罗马文明的印记，沿着商路向北流淌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，“佩奇”这个名字的诞生，要等到罗马的荣光消散数百年之后。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元9世纪，斯拉夫部落在此定居，他们带来了新的语言与信仰。城市的名字“Pécs”便源于古斯拉夫语中的“<em>pět</em>”，意为“五”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字直指城市起源的核心传说：据说，早期这里有<strong>五座教堂</strong>或<strong>五座修道院</strong>，共同奠定了其作为区域宗教中心的基石。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一则古老的记述曾这样描绘：“在群山环绕的谷地中，五座神圣建筑的尖顶如同五指，指向天堂，守护着这片土地的灵魂。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从罗马的军事堡垒，到以“五”为名的信仰家园，佩奇的起点，就预示着它未来将承载多元、厚重且神圣的命运。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩奇的历史，是一部文明层叠与碰撞的史诗。其中几个关键的印记，至今仍深深烙印在城市的面容与肌理之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一个印记，来自地底：罗马的逝去与基督教的萌芽。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元4世纪，罗马帝国国教易帜，基督教迅速传播。索皮阿奈的居民开始在城市城墙外，沿主干道修建装饰华美的家族墓室。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这便是今日世界遗产“早期基督教陵墓”的源头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些地下墓室并非简单的坟茔，其墙壁上绘有《旧约》与《新约》场景，如亚当夏娃、但以理在狮子坑、圣母与圣婴。它们证明了早在蛮族大迁徙浪潮席卷之前，一个成熟、富足且虔诚的基督教社群已在此扎根。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些壁画是阿尔卑斯山以东早期基督教艺术罕见的珍宝，它们沉默地诉说着一个帝国黄昏时，人们对于永恒救赎的深切渴望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二个印记，刻在街道：1526年至1686年，土耳其新月下的160年。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "莫哈奇战役后，奥斯曼帝国占领了佩奇。这并非简单的政权更迭，而是一次深刻的文化植入。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "清真寺宣礼塔取代了教堂钟楼，土耳其浴场（如至今仍在使用的<strong>帕夏·加齐·卡西姆浴场</strong>）带来了东方的沐浴文化，集市上飘散着咖啡与香料的浓郁气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市中心的<strong>主广场清真寺</strong>是这段历史最直观的见证。这座由帕夏<strong>加齐·卡西姆</strong>在16世纪下令建造的宏伟建筑，拥有典型的奥斯曼穹顶与精致的伊斯兰装饰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "土耳其统治结束后，它被改造成天主教教堂，但其建筑骨架与内部浓郁的东方风情依然如故。<strong>十字架高悬于曾经的米哈拉布（礼拜龛）之上</strong>，这种强烈的视觉对比，正是佩奇历史“层叠性”最震撼的具象体现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三个印记，是浴火重生后的巴洛克荣光。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "17世纪末，哈布斯堡王朝收复佩奇后，城市进入了重建与繁荣的巴洛克时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥地利与德意志的移民涌入，带来了中欧的建筑风格与文化活力。今天的城市历史中心区，很大程度上保留了这一时期的风貌：优雅的宫殿、色彩柔和的联排别墅、繁复的铸铁阳台与宁静的庭院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一次文化上的“回归”与“融合”，将东方痕迹巧妙地编织进中欧的城市图谱之中。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩奇的传奇，不仅由宏大的历史事件书写，更被几位与之命运交织的非凡人物所点亮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>雅诺什·帕诺尼乌斯：从佩奇走出的文艺复兴巨匠</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要在匈牙利文艺复兴的天空中寻找一颗最亮的星，<strong>雅诺尼乌斯</strong>必定名列前茅。而他的人生，与佩奇有着无法割舍的羁绊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1434年，他出生在佩奇附近的一个贵族家庭。早慧的他，很早就被送往意大利求学，在佛罗伦萨、帕多瓦等地浸淫于古典文学与人文主义思潮。他精通拉丁语，诗才横溢，被同时代人誉为“匈牙利的奥维德”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的成就巅峰，是成为<strong>克罗地亚-斯拉沃尼亚主教</strong>，并担任匈牙利国王<strong>马加什一世</strong>的掌玺官与挚友。马加什国王在布达营建了辉煌的文艺复兴宫廷，而雅诺尼乌斯正是其中最重要的文化旗手之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，无论他走到多高的位置，佩奇始终是他精神的故乡与创作的源泉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他慷慨地资助佩奇的文化与教育事业，其人文主义思想深深影响了本地知识阶层。他的拉丁语诗歌，情感真挚，既有对古典神话的巧妙借用，也不乏对祖国山河与故乡风物的深情描绘。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在一首致友人的诗中，他如此回忆故乡的景致：“迈切克山丘的微风，总比别处更为甜美；那里溪流的声音，是我童年最初的乐章。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1472年，雅诺尼乌斯在远行中病逝，根据遗愿，他的心脏被送回佩奇，安葬于<strong>圣彼得圣保罗大教堂</strong>。这颗“文艺复兴之心”最终叶落归根，与他深爱的城市永眠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>伊丽莎白皇后（茜茜）：一位皇室过客的短暂驻足</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与土生土长的雅诺尼乌斯不同，<strong>茜茜公主</strong>与佩奇的交集如惊鸿一瞥，却因其传奇色彩而被世人铭记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位美丽而忧郁的奥地利皇后，一生都在逃离维也纳宫廷的繁文缛节，在旅行中寻求慰藉。19世纪下半叶，她对匈牙利情有独钟，不仅学会了流利的匈牙利语，更深深同情并支持匈牙利的政治诉求。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的足迹自然也踏足了这座南匈名城。虽然史料中关于她到访佩奇的具体细节并不浩繁，但她的影响力却真实地留在了这里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最直接的痕迹，是她对<strong>佩奇音乐学校</strong>的资助。这所学校后来发展成为重要的音乐教育机构，承载了她对匈牙利文化的欣赏与支持。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，城中至今流传着关于她的轶事。据说她曾下榻于主广场旁的某座贵族宅邸，清晨独自漫步在尚未完全苏醒的街道，或在集市上好奇地打量当地人的生活。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位老佩奇人的回忆录中写道：“皇后陛下并不像画像中那么遥不可及。她出现在广场时，衣着简单，速度很快，仿佛不想被人认出，只想做这座安静古城里一个普通的观察者。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对于佩奇而言，茜茜不是一个建设者，而是一位最具声望的“访客”。她的到来，为这座城市镀上了一层哈布斯堡王朝晚期浪漫、精致却又感伤的光晕，让它与欧洲最富盛名的皇室传奇产生了微妙的联系。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在佩奇，历史不仅记载于典籍，也流淌在街头巷尾的口耳相传之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说，关乎城市的命运与一眼清泉。据说，在土耳其人兵临城下、围攻佩奇之时，城市的命运系于一眼秘密的“<strong>命运之井</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这口井的水源，直接关系到守军和市民能否坚持下去。守城的将领下令严守井的秘密，并预言：“只要井水不涸，佩奇永不陷落。”然而，一名士兵因爱情背叛，向土耳其人泄露了井的位置。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说这样描述那一刻：“当异族的铁蹄找到那口被月桂树隐藏的井时，井水骤然变得浑浊，随后迅速干涸。城中教堂的钟声自发哀鸣，城市的命运就此注定。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说解释了佩奇最终被征服的原因，也将城市的沦陷归因于人性的弱点与命运的不可违抗，充满了悲剧的宿命感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，佩奇所在的地区盛产葡萄酒，民间自然少不了与酒相关的故事。当地著名的“公牛血”葡萄酒，便有传说称其浓郁的红色与强劲的口感，曾给予守城战士公牛般的力量和勇气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥斯曼统治时期，尽管伊斯兰教禁止饮酒，但许多被改造成清真寺的教堂地下，据说仍有虔诚的基督徒秘密守护着他们的酿酒桶，将信仰与传统的滋味一起深藏于地底。这些传说，为佩奇醇厚的酒香，增添了一抹反抗与坚守的底色。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在佩奇，你不是在参观一个静止的博物馆。你是在阅读一部<strong>立体的、可触摸的欧洲文明交汇史</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从罗马墓室壁画的静谧神圣，到清真寺穹顶下的东方余韵；从文艺复兴诗人雅诺尼乌斯拉丁韵文中的乡愁，到巴洛克立面上精致繁复的曲线；再到茜茜皇后匆匆身影留下的那一丝宫廷传奇气息……所有这一切，没有彼此覆盖，而是在这里达成了奇妙的共存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是佩奇无可替代的魅力。它不像布达佩斯那般恢弘磅礴，却以一种更为复杂、细腻且层层递进的方式，向你展现中欧历史的真实纹理——那不是非黑即白的替代，而是多种色彩交织、覆盖、融合后形成的独特斑驳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂佩奇，便是读懂欧洲腹地千年来的动荡、迁徙、信仰与重生。它教会我们，真正的文化遗产，往往不是单一的辉煌，而是这种跨越时空的对话与共生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/nyiregyhaza-zoo-thermal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    尼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">尼赖吉哈佐</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nyíregyháza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lillafured" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利拉菲赖德</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lillafüred</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/miskolc" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米什科尔茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Miskolc</p>
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
