import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯拉沃尼采历史溯源｜被遗忘的文艺复兴壁画之城的前世今生与奥德边境传奇',
  description: '探秘捷克边陲小镇斯拉沃尼采，一座被时光冻结的文艺复兴露天博物馆。跟随历史向导，揭开数百幅精美外墙壁画背后的市民荣耀、贸易秘辛与铁幕往事。',
}

export default function SlavoniceRenaissanceFrescoesHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '斯拉沃尼采', href: '/attractions/slavonice-renaissance-frescoes-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯拉沃尼采・Slavonice・捷克・南波希米亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在捷克与奥地利的边境森林深处，藏着一本用石头与颜料写就的“童话书”。它不是布拉格，没有如织的游人；也不是克鲁姆洛夫，缺少那份刻意的精致。<strong>斯拉沃尼采</strong>，这座人口仅两千的微型城镇，却拥有中欧保存最完整、最生动的文艺复兴时期市民建筑群，尤其是那些覆盖在外墙上的、色彩斑斓的<strong>湿壁画</strong>。它们不是教堂天顶的神谕，而是普通富商宅邸的宣言，讲述着关于财富、品位、信仰与日常生活的鲜活故事。抛开游玩攻略，走进斯拉沃尼采的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯拉沃尼采`} />
                <InfoRow label="英文名称" value={`Slavonice`} />
                <InfoRow label="正式名称" value={`Slavonice`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南波希米亚州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯拉沃尼采的脉搏，最初由一条看不见的商路所唤醒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在<strong>13世纪中叶</strong>，波希米亚王国为了巩固边疆并开发土地，鼓励移民在此建立定居点。这里恰好位于一条连接奥地利与波希米亚腹地的古老贸易路径上。最初，它只是一个为过往商旅提供歇脚的驿站，名叫“<strong>茨拉塔·科林纳</strong>”，意为“黄金山丘”，或许暗指此地贸易带来的财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1277年</strong>，在波希米亚国王<strong>奥托卡二世</strong>的庇护下，这里被正式授予城市权利，并更名为我们今天所知的“Slavonice”。关于这个名字的起源，学界有两种浪漫的推测：一说它源于古老的斯拉夫部落“<strong>斯拉夫人</strong>”（Slované），彰显其民族根源；另一说则与捷克语中“<strong>光荣</strong>”（sláva）一词相关，寄托了建城者对未来的期许。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从诞生之初，这座城市就刻下了“<strong>边境</strong>”与“<strong>通道</strong>”的双重基因。它像一颗被精心放置在国境线上的棋子，既要防御，也负责沟通。这种双重性，深刻地影响了它数百年的命运与气质——既非纯粹的内陆城，也非纯粹的要塞，而是一个在夹缝中寻求繁荣与自我表达的独特存在。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯拉沃尼采的黄金时代，在<strong>16世纪</strong>伴随着文艺复兴的北风姗姗而来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，来自意大利的艺术与人文思潮席卷中欧。而斯拉沃尼恰好处在南北商路的交汇点，本地富裕的布匹商人和地主们，敏锐地捕捉到了这股新风尚。他们没有将巨大的财富用于修建宏伟的城堡或教堂，而是选择了一种更“市民化”、更“个人化”的方式来表达成功——装饰自己的家。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们用色彩和故事覆盖石墙，不是为了取悦领主，而是为了告诉世界，我们是谁，我们相信什么。”——一位匿名商人的信件残篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一场静默的建筑革命在两座主广场——<strong>上广场</strong>与<strong>下广场</strong>——上展开。工匠们将《圣经》故事、古希腊罗马神话、道德寓言，乃至狩猎、家族徽章等日常生活场景，以<strong>湿壁画</strong>技法直接绘制在房屋的外立面上。<strong>“天使之家”</strong>立面上飞舞的小天使，<strong>“绿色巨龙之家”</strong>外墙上的神话怪兽，无不栩栩如生。这些壁画并非贵族专属，而是市民阶级自信与审美觉醒的集体宣言，这在当时的中欧极为罕见。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的转折总是猝不及防。<strong>17世纪</strong>的“三十年战争”重创了中欧经济，商路转移，斯拉沃尼采的光芒逐渐黯淡，反而因此侥幸逃过了大规模巴洛克化改造，那些脆弱的文艺复兴壁画得以在时光中沉睡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更大的创伤发生在<strong>20世纪</strong>。二战结束后，这里处于严密的<strong>铁幕</strong>之下，毗邻奥地利边境的整片区域被划为军事禁区，居民被迫迁离，城镇几乎沦为“鬼城”。这种冻结般的停滞，在另一种意义上，再次保护了这些古老建筑免受现代化开发的破坏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1989年</strong>天鹅绒革命后，边境重新开放。人们才重新发现，这座几乎被遗忘的小镇，竟如此完整地封存着一个时代的风貌。它的历史印记，是一曲由商业繁荣奏响的华彩乐章，也是一段被地缘政治冰封的漫长休止符。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯拉沃尼采，名人并非远方的星辰，而是曾在此生活、呼吸，并将印记留在墙壁上的邻人。其中，最具代表性的是一位富商兼市长——<strong>扬·塔斯</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于<strong>扬·塔斯</strong>的确切生平，官方记载并不多，这正是小镇历史的典型特点：辉煌由无数个“普通人”共同书写，细节隐于市井。我们只知道，在16世纪中叶，他是斯拉沃尼采最显赫的市民之一，不仅财富雄厚，还曾担任市长。他最重要的贡献，是出资建造并装饰了位于下广场的<strong>塔斯宅邸</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这栋建筑堪称斯拉沃尼采文艺复兴艺术的巅峰之作。其山形墙立面上，布满了极其精细的<strong>湿壁画</strong>。画面采用了当时最先进的“<strong>错视画</strong>”技法，描绘了立柱、壁龛、雕塑等三维建筑元素，栩栩如生，令人难辨真假。壁画主题涵盖古典神话与圣经故事，显示出主人广博的学识和人文主义倾向。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我，扬·塔斯，愿以此屋之美，见证吾城之智，吾民之荣。过往旅人见之，当知此地虽处边陲，心向文明。”——据传刻于宅邸奠基石上的铭文（已失）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塔斯并非孤例。他代表了一个新兴的市民阶级：他们通过贸易积累财富，通过艺术提升品味，通过担任公职参与城市治理。他的宅邸外墙，就是一份公开的“市民宣言”，宣告着与贵族城堡文化分庭抗礼的自信。在斯拉沃尼采，艺术从神圣的教堂走向世俗的街道，从服务神权变为表达人权，<strong>扬·塔斯</strong>们正是这静默革命的主导者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个与小镇擦肩而过的文化巨人，是<strong>弗兰茨·卡夫卡</strong>。<strong>1905年</strong>和<strong>1906年</strong>，当时还是保险公司职员的卡夫卡，因疗养和探望驻扎在此地边防部队的妹夫，曾两度短暂造访斯拉沃尼采。这座边境小城安静、偏僻、略带忧郁的氛围，与作家内心的景观不谋而合。他在给朋友的信件中提到了这里，虽然着墨不多，但这座“被世界遗忘的角落”的气质，或许曾悄然渗入他那些关于孤独、疏离与迷宫般官僚世界的想象之中。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯拉沃尼采，石头会说话，泉水则藏着古老的秘密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇最著名的传说，围绕着一处名为“<strong>兹拉特·斯托德涅</strong>”的泉眼展开，意为“黄金泉”。相传在很久以前，一位善良的穷苦农妇在森林中遇到一位哭泣的圣母玛利亚。圣母告诉她，小镇的人们因贪婪和争吵而心灵蒙尘。她给予农妇三颗金色的鹅卵石，嘱咐她将石头投入城中三处不同的泉眼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "农妇照做了。当第三颗石头沉入泉底时，三处泉眼涌出的泉水奇迹般地汇成一股，水质变得清澈无比，甘甜如饴。更神奇的是，所有饮用了此水的人，心中的怨恨与贪婪都被洗涤，变得平和友爱。小镇因此迎来了长久的和谐与繁荣。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“第一泉洗去傲慢之眼，第二泉冷却愤怒之心，第三泉溶解贪婪之手。三泉合一，便是治愈社区的良药。”——斯拉沃尼采古老谚语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了纪念这个传说，人们将主要泉眼装饰起来，并赋予了它“黄金泉”的美名。直到今天，这处泉眼依然是城镇历史中心的一个静谧地标。传说固然是虚构的，但它巧妙地隐喻了社群团结、资源共享的重要性——这对于一个依靠贸易与协作在边境生存的小镇而言，是至关重要的生存哲学。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与建筑有关。据说，在绘制那些精美外墙壁画时，技艺最高的那位匿名画师，在<strong>“天使之家”</strong>的某位小天使眼中，隐藏了一个极小的、只有心怀纯净之人才能看到的自己的倒影。这是他留给后世的一个小小游戏，一个跨越时间的问候。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步在斯拉沃尼采静悄悄的广场上，你触摸的不仅是冰冷古老的石墙，更是一段活态的历史肌理。它没有宏大的战争叙事，没有帝国皇室的恩怨，有的只是一个<strong>欧洲边境小镇</strong>如何凭借市民的智慧、商人的远见和工匠的匠心，在历史的夹缝中创造出独一无二的文化瑰宝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值，恰恰在于它的“不典型”。在这里，你可以读到文艺复兴的另一面：不是佛罗伦萨美第奇家族的恢弘赞助，而是中产市民用壁画装点家园的朴素骄傲；可以感受到地缘政治的冰冷重量：从繁荣的商埠到铁幕下的禁区，命运随边境线的开合而起伏。每一幅斑驳的壁画，都是一个等待解读的密码；每一条蜿蜒的小巷，都通往一段沉寂的往事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯拉沃尼采像一本被重新发现的、羊皮纸装订的古老手抄本。它要求读者放慢脚步，细细品读那些由颜料和故事写就的章节。它告诉我们，历史的回响，有时不在喧闹的都城，而就在这样寂静的边城，在每一片幸存的墙壁上，低声吟唱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/pernstejn-castle-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩恩施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pernštejn Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/helfstyn-castle-moravia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波尔卡斯特城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Helfštýn Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/telc-square" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔奇广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Telč Square</p>
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
