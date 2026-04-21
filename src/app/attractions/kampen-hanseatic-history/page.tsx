import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '坎彭历史溯源｜汉萨商人的金羊毛与反叛贵族的前世今生',
  description: '探索荷兰坎彭：一座被遗忘的汉萨同盟重镇。这里不仅有堆积如山的盐与鲱鱼财富，更有印刷术先驱与贵族叛乱的尘封往事等待揭开。',
}

export default function KampenHanseaticHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '坎彭汉萨老城', href: '/attractions/kampen-hanseatic-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`坎彭汉萨老城・Kampen・荷兰・坎彭`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "提起荷兰的黄金时代，人们总会想到阿姆斯特丹的运河与帆船。但在北方，另一座城市曾以更早的“白银时代”奠定了尼德兰的商业基因。它就是<strong>坎彭</strong>——汉萨同盟在低地国家最富有、最强大的成员之一。这里不仅是鲱鱼与盐巴堆砌出的贸易圣殿，更是欧洲印刷术萌芽的隐秘摇篮，以及一场撼动贵族秩序的叛乱策源地。抛开游玩攻略，走进坎彭的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`坎彭汉萨老城`} />
                <InfoRow label="英文名称" value={`Kampen`} />
                <InfoRow label="正式名称" value={`Kampen`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`坎彭`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "坎彭的脉搏，最初由<strong>莱茵河</strong>的一条古老支流——<strong>艾瑟尔河</strong>——所赋予。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大约在 <strong>1227年</strong>，这片位于河湾处的沼泽地获得了城市特许状。它的名字“Kampen”源自古德语，意为“战场”或“围场”，暗示着这片土地在成为定居点前，可能经历过部落间的争夺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但河流才是它真正的母亲。艾瑟尔河连接着内陆的德意志与广阔的<strong>须德海</strong>（今艾瑟尔湖），最终通向北海。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "坎彭的崛起，完美诠释了“地利”。它抓住了中世纪欧洲两大“白色黄金”的贸易命脉：<strong>北海鲱鱼</strong>与<strong>吕讷堡的盐</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的谚语说：“没有吕讷堡的盐，北海的鲱鱼就无法保存；没有坎彭的船，盐与鱼就无法相遇。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "商人们在此将咸鱼运往内陆，又将谷物、啤酒、布匹和木材输往北方。财富如河水般源源不断涌入。到了 <strong>14世纪</strong>，坎彭顺理成章地加入了强大的北欧商业联盟——<strong>汉萨同盟</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非普通成员。凭借庞大的商船队（鼎盛时超过300艘）和精明的商人议会，坎彭迅速成为同盟在低地地区最重要的商站之一，与吕贝克、汉堡等巨头平起平坐。它的城市纹章——三朵百合与一座塔楼——开始出现在从挪威到葡萄牙的贸易契约上。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个印记，无疑是<strong>汉萨同盟的黄金时代</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在老城，那些建于 <strong>14至16世纪</strong> 的宏伟砖石建筑，无一不在低语着昔日的富庶。<strong>旧市政厅</strong> 那哥特式的华丽立面，并非为了宗教，而是为了彰显市民自治的财富与权力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最引人注目的是三座巨大的<strong>城门</strong>：<strong>科伦霍夫门</strong>、<strong>布罗德斯门</strong>和<strong>新门</strong>。它们不是防御要塞，而是关税站与货栈。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位16世纪的旅行者记载：“驶近坎彭，最先看到的是河面上如森林般的桅杆，以及城门下堆积如山的盐包。空气里弥漫着咸鱼、沥青和远方香料混合的复杂气味。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，财富也引来了觊觎。<strong>1572年</strong>，西班牙军队在<strong>八十年代战争</strong>中围攻坎彭。尽管城市最终投降，但这场围城战标志着其商业霸权衰落的开始。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着荷兰共和国重心南移，以及须德海逐渐淤塞，坎彭的港口优势不再。昔日的“汉萨女王”渐渐沉寂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，是一场<strong>技术的悄然革命</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "就在汉萨商业如日中天的 <strong>15世纪中叶</strong>，坎彭的一位市政官员<strong>劳伦斯·科斯特</strong>，据说在散步时灵光一现。关于他的故事，我们稍后详述。但可以肯定的是，坎彭成为了欧洲早期印刷活动异常活跃的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里出土的现存最古老的印刷品残片之一，以及早期雕版和活字印刷品的流通，都指向一个事实：在古腾堡于美因茨完善他的技术的同时或稍早，坎彭的工匠们也在独立探索着文字复制的奥秘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座商业都市对信息传播的天然需求，催生了技术的萌芽。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市最值得书写的名人，并非王公将相，而是一位身份成谜的市政官——<strong>劳伦斯·扬松·科斯特</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他的生平记载极少，只知他大约生于 <strong>1370年</strong>，卒于 <strong>1440年</strong>，曾担任坎彭的市政司库和节庆活动组织者。然而，在荷兰乃至部分欧洲的传说中，他拥有一个不朽的身份：<strong>印刷术的发明者</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说始于一个冬日。科斯特在附近的哈勒姆森林散步，为了逗弄孙儿，他用小刀在树皮上刻了几个字母。回家后，他无意中将刻有字母的树皮按在软蜡上，获得了清晰的印痕。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "荷兰历史学家阿德里安·尤尼乌斯在 <strong>1568年</strong> 的记载中绘声绘色：“这个偶然的发现点亮了这位天才的心智。他开始用铅制作字母，后来又用锡……他印出了一本小书，《道德的镜子》。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说与德国的古腾堡之争持续了数百年。现代学术界普遍认为古腾堡是西方活字印刷术的集大成与推广者。但值得注意的是，坎彭地区确实发现了极早的印刷品，包括著名的 <strong>《坎彭残片》</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论真相如何，科斯特传说本身已成为坎彭文化DNA的一部分。它反映了这座务实商业城市对“创新”与“实用知识”的内在推崇。市民们更愿意相信，改变世界的力量，源于一位自家邻居在平凡生活中的灵光一闪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与坎彭紧密相连的，是叛逆的贵族<strong>“锤子”扬</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>扬三世</strong>，<strong>1597年</strong>出生于坎彭一个显赫家族。他是荷兰共和国时期的军事将领，但更以他的绰号“<strong>锤子</strong>”和一场惊天叛乱闻名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为欧弗斯蒂尔省的最高长官，他同情当地加尔文宗中较保守的派别，并与中央的海牙当局矛盾日益激化。<strong>1665年</strong>，在英荷战争的国家危难时刻，扬竟然率领军队试图占领自己的城市坎彭，以此对抗共和国议会。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场短暂而激烈的内部冲突，史称“<strong>锤子之乱</strong>”。它虽以扬的失败告终，却深刻揭示了荷兰共和国光鲜联邦制外表下的地方权力博弈。坎彭，这座习惯于商业自治的城市，再次被卷入了政治风暴的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“锤子”扬最终被剥夺头衔，在流放中去世。但他的城堡遗址仍在坎彭附近，提醒着人们这座城市历史上不仅产富商，也出狂徒。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了科斯特的印刷术传说，坎彭最生动的民间故事，镌刻在它的地标——<strong>圣尼古拉斯教堂</strong> 的塔楼上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座建于 <strong>14-15世纪</strong> 的教堂拥有独特的双塔楼设计。民间传说将其归功于一位<strong>建筑师与魔鬼的交易</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事说，建筑师为如何完成这座宏伟建筑而发愁。魔鬼出现，承诺在一夜之间建好教堂的两座塔楼，代价是取走第一个进入教堂的生物的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "建筑师同意了。魔鬼果然魔力无边，砖石自动飞起，塔楼眼看着就要封顶。黎明前，建筑师惊觉：明天将是礼拜日，第一个进入教堂的很可能是一位无辜的教徒或其孩子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "悔恨中，他灵机一动。当天亮魔鬼索要报酬时，建筑师将一只<strong>公鸡</strong>扔进了教堂大门。魔鬼勃然大怒，但契约已履行。愤怒的魔鬼狠狠踢了西塔楼一脚，导致它至今仍略微倾斜。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们说，如果你在风中仔细聆听，仍能听到魔鬼的咆哮和建筑师那声如释重负的叹息。而那声救赎的鸡鸣，则被永远铭记在城市的记忆里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说混合了中世纪对建筑奇迹的敬畏、对魔鬼契约的常见叙事，以及一丝荷兰式的务实与狡黠。它让冰冷的砖石有了温度，也让坎彭的天空线，多了一份来自地狱的幽默感。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的坎彭，宁静地卧在艾瑟尔河畔，时光仿佛在它厚重的砖墙上放缓了流速。行走其中，你触摸到的不是一段单一的历史，而是一个<strong>立体的、充满张力的中世纪世界</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是<strong>汉萨同盟</strong>实用主义与集体精神的见证，砖楼与仓库诉说着远程贸易的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是<strong>技术萌芽</strong>的潜在温床，科斯特的传说代表了民间智慧对知识平权的渴望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它也是<strong>地方自治精神</strong>与中央权威冲突的舞台，“锤子”扬的叛乱是共和国复杂政体的一个激烈注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂坎彭，便是读懂荷兰乃至北欧历史中，商业、技术与政治权力那复杂而迷人的交织。它不像阿姆斯特丹那样将历史包装成明信片，而是将往事原原本本地砌在墙里，等你在某个转角，与一段真实的传奇不期而遇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有泛泛的游客喧嚣，只有深流静水般的历史回响。它是一座活生生的、小众的<strong>中世纪商业都市博物馆</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何探访三大古城门、登上教堂塔楼俯瞰全城、体验百年老店？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sluis-zeeuws-vlaanderen" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯勒伊斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sluis</p>
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
              <a href="/attractions/roermond-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁尔蒙德老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roermond Old Town</p>
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
