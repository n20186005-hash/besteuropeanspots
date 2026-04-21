import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '德哈尔城堡历史溯源｜荷兰最大童话堡的重建传奇与罗斯柴尔德家族的隐秘往事',
  description: '德哈尔城堡并非中世纪原物，而是一场19世纪末的奢华幻梦。走进荷兰最宏大城堡，揭开范·祖伦家族与罗斯柴尔德联姻背后的权力游戏、建筑师皮埃尔·库伯斯的执念，以及一段与魔鬼交易的古老传说。',
}

export default function KasteelDeHaarHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '荷兰', href: '/destinations/europe' },
            { label: '乌得勒支省', href: '/destinations/europe' },
            { label: '德哈尔城堡', href: '/attractions/kasteel-de-haar-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`德哈尔城堡・Kasteel de Haar・荷兰・乌得勒支省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在荷兰平坦的绿野上，德哈尔城堡的尖塔与护城河勾勒出一幅不属于这个国度的、近乎迪士尼童话的天际线。然而，它的真相远比童话复杂：这是一座在1892年被“彻底重建”的“新”古董，一场由巨额财富、贵族执念与建筑天才共同缔造的19世纪终极幻梦。它的故事，关乎一个濒临灭绝的古老家族，一次震惊欧洲的金融联姻，以及一位建筑师将毕生理念灌注于一砖一瓦的偏执。抛开游玩攻略，走进德哈尔城堡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`德哈尔城堡`} />
                <InfoRow label="英文名称" value={`Kasteel de Haar`} />
                <InfoRow label="正式名称" value={`Kasteel de Haar`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`乌得勒支省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德哈尔城堡的根源，深植于中世纪荷兰领主政治的泥土中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字“De Haar”源于流经此地的<strong>哈尔河</strong>。最早的文字记载可追溯到 <strong>1391年</strong>，当时它是一座简单的、带有护城河的强化住宅，属于<strong>范·德·哈尔家族</strong>。这座建筑最初的使命并非浪漫，而是纯粹的军事防御与领地管辖，是领主权威在乌得勒支乡村地带的实体象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>范·祖伦家族</strong>，这个后来与城堡命运紧密捆绑的姓氏，在1440年通过婚姻获得了它。此后的数个世纪，城堡在继承、战乱（特别是1482年遭乌得勒支市民摧毁）与重建中缓慢演变。但真正决定它今日面貌的，并非这些中世纪的纷争，而是一场发生在19世纪末的、戏剧性的“复活”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份古老的家族契约中记载：“这片土地与石头房子，连同其附属权利，将永远归属于范·祖伦的血脉。”这或许预示了后人那种不惜一切代价要“复兴”家族象征的执念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "名字中的“Kasteel”在荷兰语中明确指代“城堡”，而“Haar”在古荷兰语中与“沙脊”或“高地”相关，精准描述了它最初所处的微隆地形。当您今日站在它那如镜面般的护城河前，所见的并非时间的自然积淀，而是一个关于“起源”被精心设计与重新诠释的故事。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的历史并非线性传承，而是被两道深刻的“断裂”与“重建”所标记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一次断裂在<strong>1482年</strong>。乌得勒支城市军与主教军队的内战（“乌得勒支主教战争”）席卷至此，城堡被彻底烧毁，沦为废墟。近四百年里，范·祖伦家族仅在其废墟一角修建了一座小型庄园屋，昔日的荣光几乎被野草掩埋。直到<strong>19世纪末</strong>，城堡迎来了它命运中第二道，也是最决定性的一次“印记”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1892年</strong>，家族的末代直系继承人<strong>埃蒂安·范·祖伦·范·内耶费尔特男爵</strong>，迎娶了来自法国银行业巨擘家族的<strong>埃伦娜·罗斯柴尔德</strong>。这场婚姻不仅仅是爱情的结合，更是资本与贵族头衔的史诗级联姻。罗斯柴尔德家族的雄厚财力，为男爵一个疯狂的梦想注入了生命：完全重建德哈尔城堡，恢复其想象中的中世纪宏伟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他雇佣了当时荷兰著名的建筑师<strong>皮埃尔·库伯斯</strong>。库伯斯没有选择修复，而是决定<strong>推倒重来</strong>。他保留了部分古老的地基和城墙碎片作为“灵感”，但本质上，他创造了一座全新的、规模空前的新哥特式城堡。工程浩大，甚至为此重建了附近的哈尔村，为工人和设施腾出空间。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "库伯斯在日记中写道：“我不是在修复一座城堡，我是在为一个家族，为一个即将消逝的时代，铸造一个永恒的图腾。每一块石头都必须讲述故事。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一道沉重的印记来自<strong>20世纪的战火</strong>。二战期间，德军征用了城堡，其内部珍贵的收藏被匆忙转移或藏匿。幸运的是，建筑本身在战火中奇迹般地完好无损。战后，城堡不仅是家族的居所，更逐渐转型为向公众开放的文化遗产，并成为顶级时装秀与电影拍摄地。这两次“印记”——一次是主动的、奢华的重生，一次是被动的、险峻的幸存——共同镌刻了德哈尔城堡复杂而迷人的双重身份。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德哈尔城堡的传奇，离不开两位将其从废墟中唤醒的核心人物：拥有它的男爵，与塑造它的建筑师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>男爵夫人埃伦娜·德·罗斯柴尔德</strong>，无疑是城堡灵魂中那抹最璀璨也最现代的色彩。作为法国罗斯柴尔德银行的继承人，她带来的不仅是重建所需的<strong>600万荷兰盾</strong>巨资（相当于今日的数十亿欧元），更是一种融合了国际视野、顶级艺术品味与惊人执行力的生活方式。她并非中世纪贵妇的仿制品，而是一位真正的“镀金时代”名媛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在城堡内部，她的影响无处不在。她亲自监督了内部装饰，从里昂的丝绸墙布到法国古董家具，从珍贵的日本瓷器到中国壁画，将这座“中世纪”外壳填充成一座世界艺术与奢华的私人博物馆。她热衷于举办极尽奢华的周末派对，宾客名单堪称“欧洲名人录”，从皇室成员到好莱坞明星（如卓别林），从工业大亨到文艺巨匠。城堡的厨房为此常年配备数十名员工，酒窖存有上万瓶佳酿。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位曾受邀的客人回忆：“在德哈尔，你仿佛穿越到了另一个世纪，但一切的舒适与精致又是最顶级的现代标准。埃伦娜夫人是这一切的女王，她沉默寡言，但每一个细节都透露着她的意志。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而将男爵夫妇（尤其是男爵）的梦想变为石质现实的，是建筑师<strong>皮埃尔·库伯斯</strong>。对他而言，德哈尔项目是他“总体艺术”理念的终极实践。他不仅设计建筑，还包揽了内部装饰、家具、甚至花园和村庄的规划。他痴迷于中世纪哥特风格，但并非简单复制，而是将其与19世纪的工艺、现代的生活需求（如中央供暖、电灯）相结合，创造出一种浪漫化、理想化的“历史主义”风格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "库伯斯与男爵之间是一种充满张力又相互成就的合作。男爵提供了无限制的预算和绝对的信任，而库伯斯则投入了近乎偏执的热情。他亲自 sourcing 最好的石材、木材，监督最精湛的工匠。传说他为了花园里一棵树的定位，会与男爵争执良久。德哈尔城堡是他职业生涯的顶峰之作，也是他个人美学世界的完整呈现。他与男爵夫人一样，都将自己的灵魂注入了这座建筑，使其超越了一件财产，成为一件有生命的艺术品。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座“崭新”的古堡里，依然流传着源自土地深处的古老幽灵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说与城堡庭院中一棵巨大的<strong>橡树</strong>有关。故事说，在最初建造城堡时，领主与<strong>魔鬼</strong>达成了协议：魔鬼将在一夜之间帮助建成城堡，而报酬将是第一个穿过城堡大门活物的灵魂。狡猾的领主在城堡建成后，将一只狗赶过了大门。被欺骗的魔鬼勃然大怒，在离去前狠狠踹了庭院里的一棵橡树一脚，从此那棵树的树干上留下了一个巨大的、扭曲的凹痕。尽管今天的城堡是19世纪重建的，但导游仍会指向某棵古老的橡树，讲述这个关于契约与欺骗的经典中世纪寓言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个更“真实”的传说则围绕城堡的<strong>宴会厅</strong>。据说，在男爵夫人埃伦娜举办盛大舞会的夜晚，如果你独自穿过长长的走廊，偶尔能听到微弱的、来自上个世纪的华尔兹乐曲声和银器碰撞的叮咚回响。仆人的通道里，则流传着关于“灰衣夫人”的轶闻——那或许是某位范·祖伦家族先祖的幽灵，依然在默默巡视着她后代的产业。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人口中流传：“罗斯柴尔德夫人的黄金不仅砌起了城墙，也买下了时间。所以那些欢笑的幽灵，被永远留在了那里的夜晚。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论多么离奇，都成为了城堡人文肌理的一部分。它们弥补了建筑本身因“重建”而可能缺失的历史厚重感，用想象的脉络将现代访客与这片土地上悠远的集体记忆连接起来。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客惊叹于德哈尔城堡童话般的外表与博物馆级的内部收藏时，他们看到的实则是一面19世纪末欧洲社会变迁的多棱镜。它映照出旧贵族在工业化时代，如何借助新兴金融资本的力量，试图用砖石挽留或重塑一种即将逝去的荣光；它也是一座关于“创造传统”的纪念碑，证明了历史感有时并非来自时间的自然流逝，而是来自一个时代对另一个时代强烈的浪漫想象与精湛的技术复现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂德哈尔，便是读懂一段浓缩的欧洲近代史：<strong>资本的魔力、艺术的野心、身份的焦虑与永恒的怀旧</strong>。它不是一个“假古董”，而是一个时代精神最真诚、最奢华的物质表达。在这里，每一块仿古的石头都在诉说真实的欲望，每一条仿造的护城河都倒映着真实的权力与梦想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/enkhuizen-voc-legacy-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    恩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">恩克赫伊曾</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Enkhuizen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schokland-island" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯霍克兰</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schokland</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/giethoorn" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    羊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">羊角村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Giethoorn</p>
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
