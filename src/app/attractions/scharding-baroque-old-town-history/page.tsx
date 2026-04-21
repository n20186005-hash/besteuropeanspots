import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '谢尔丁历史溯源｜因河畔巴洛克小城的七彩前世与商贸传奇',
  description: '被遗忘的彩色巴洛克宝藏。深入盐路往事，揭秘“七色城”谢尔丁如何从防御要塞到商业明珠，再到拿破仑战争的见证者。一段关于商人、皇后与不朽建筑的故事。',
}

export default function SchardingBaroqueOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '上奥地利州', href: '/destinations/europe' },
            { label: '谢尔丁', href: '/attractions/scharding-baroque-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`谢尔丁・Schärding・奥地利・上奥地利州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥地利与德国的边境，因河（Inn）温柔地拐了一道弯，将一座小镇揽入怀中。远远望去，一片由鹅黄、赭石、粉橘、草绿构成的七彩山墙，如童话般倒映在水面。这不是迪士尼的布景，而是 <strong>谢尔丁</strong>，一座将巴洛克美学烙印在骨子里的水畔小城。它的历史标签，是 <strong>“盐路守卫”</strong> 与 <strong>“巴洛克瑰宝”</strong>。抛开游玩攻略，走进谢尔丁的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`谢尔丁`} />
                <InfoRow label="英文名称" value={`Schärding`} />
                <InfoRow label="正式名称" value={`Schärding`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`上奥地利州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "谢尔丁的故事，始于一条流淌的“白金”之路——<strong>萨尔茨堡盐路</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间拨回 <strong>11世纪</strong>。来自阿尔卑斯山的珍贵盐巴，需要一条可靠的水陆通道，运往富庶的巴伐利亚和更远的地区。位于因河渡口的谢尔丁，因其天然的地理位置，成为了这条贸易命脉上至关重要的中转站与关税征收点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，<strong>“Schärding”</strong>，便深深植根于这段起源。学者认为，它源自古高地德语的 <strong>“Scarda”</strong> 或拉丁语的 <strong>“Scardinga”</strong>，意为“用栅栏围起来的地方”或“圈地”。这精准地描述了它最初的功能：一个受保护的、用于货物装卸和储存的河边贸易据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1160年，一份历史文献中首次明确提到了 <strong>“斯卡丁根（Scardingen）”</strong> 。此时，控制这里的是巴伐利亚的冯·法尔肯施泰因伯爵。但真正塑造小城早期命运的，是 <strong>13世纪</strong> 的 <strong>巴伐利亚公爵</strong>。他们在河畔高地上修筑了坚固的城堡，并将整个定居点用城墙环绕起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这道城墙，不仅防御外敌，更守卫着滚滚而来的盐商财富。谢尔丁，从此不再是一个简单的渡口，它成为了一枚嵌入帝国商贸棋盘上的关键棋子，一个 <strong>“因河之钥”</strong> 。它的诞生与繁荣，与河流的脉搏、商队的驼铃、以及盐袋的重量，从一开始就密不可分。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "谢尔丁的历史肌理上，镌刻着三枚无法磨灭的印记：<strong>盐路遗产、巴洛克重生与帝国斜阳</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：盐路之富与城墙之固</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪鼎盛时期，谢尔丁因盐税而富甲一方。这笔财富最直观的体现，便是那保存近乎完好的 <strong>中世纪城镇规划</strong> 与 <strong>部分古城墙</strong>。漫步在老城，你会发现自己置身于一个以 <strong>集市广场（Stadtplatz）</strong> 为核心的椭圆型空间内，这正是典型的中世纪贸易城镇布局。厚重的 <strong>“林茨门（Linzer Tor）”</strong> 至今矗立，它是当年陆路盐商进入城市的必经关卡，门楼上的纹章诉说着历代统治者的变迁。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从帕绍来的船队在此卸货，骡马队挤满了广场。空气里是盐粒、皮革和湿木头的味道。卫兵检查着关税文书，金银的叮当声在石巷里回响。” —— 一位16世纪旅行者的笔记片段。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：大火与巴洛克的重生</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1679年</strong> 的一场灾难性大火，几乎将这座木结构为主的中世纪城镇化为灰烬。然而，灾难也带来了涅槃。当时谢尔丁属于 <strong>巴伐利亚选帝侯国</strong>，执政者抓住了重建的机会。他们聘请建筑师，以当时最流行的 <strong>巴洛克风格</strong> 为蓝本，统一规划重建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这次重建，赋予了谢尔丁今日无与伦比的视觉名片——<strong>“七彩立面（Farbfassaden）”</strong>。市政厅规定，沿街的房屋山墙必须采用不同的鲜艳色彩进行区分。这不仅是美学追求，更是一种巧妙的地址编号系统。于是，奶油黄、玫瑰粉、天空蓝、薄荷绿……一座座色彩明丽的市民住宅拔地而起，形成了连贯而和谐的巴洛克建筑群，谢尔丁因此被誉为 <strong>“巴洛克珍珠”</strong> 或 <strong>“七色城”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记三：拿破仑的棋局与边境的沉寂</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>18世纪末</strong>，拿破仑的铁蹄改写了欧洲地图。<strong>1779年</strong>，根据《泰申和约》，谢尔丁连同整个 <strong>因菲尔特尔（Innviertel）</strong> 地区，从巴伐利亚划归 <strong>奥地利哈布斯堡王朝</strong>。这道因河，从此从帝国内部商路变成了奥德之间的国界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小城的战略地位骤然改变。随着盐路贸易的衰落和边境的封闭，谢尔丁逐渐褪去了昔日的喧嚣，凝固在了巴洛克的时代里。正因这种“被遗忘”，它的历史风貌才得以在两次世界大战中惊人地完整保存，成为一座活着的建筑博物馆。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "谢尔丁的传奇，不只在于砖石色彩，也流淌在与它命运交织的人物血脉中。这里要讲述的，是一位曾短暂驻跸于此的皇后，和一位用技艺妆点故乡的雕塑家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：塞西莉亚·雷纳塔皇后——哈布斯堡的悲情过客</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1636年，谢尔丁迎来了一位身份极其尊贵的客人——<strong>波兰国王瓦迪斯瓦夫四世·瓦萨</strong> 的新娘， <strong>奥地利公主塞西莉亚·雷纳塔（Cecilia Renata of Austria）</strong>。这位哈布斯堡公主的婚礼，是当时欧洲外交的重大事件。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她从维也纳出发，前往克拉科夫完婚。漫长的旅途需要在沿途重镇休整，谢尔丁的城堡便是其中一站。可以想象，当年小城为迎接这位皇室成员是如何倾尽全城之力：街道洒扫一新，城堡张灯结彩，贵族与市民夹道欢迎。年仅23岁的皇后在此停留虽短，却为谢尔丁的历史增添了浓墨重彩的宫廷一页。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，塞西莉亚·雷纳塔的命运却是一场悲剧。她在波兰并不快乐，婚姻政治色彩浓厚，且她于 <strong>1644年</strong> 因难产早逝，年仅28岁。她在谢尔丁的短暂驻足，如同流星划过，照亮了小镇，也留下了一丝遥远的、属于哈布斯堡王朝的悲情记忆。老城堡的墙壁，或许曾听过这位年轻皇后对故乡的低声叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：保罗·哈根——雕刻在石头上的乡土之魂</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说皇后是过客，那么 <strong>保罗·哈根（Paul Hagen，1915-1996）</strong> 则是谢尔丁土地孕育出的艺术之子。他是一位才华横溢的雕塑家，一生绝大部分创作都深深植根于他的故乡——上奥地利州，尤其是谢尔丁地区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈根的艺术风格深受传统民间艺术和基督教象征主义影响，但又带有现代的表现力。他的作品材质多样，木雕、石雕、青铜皆有涉猎，主题往往围绕乡村生活、宗教信仰和本地历史传说。在谢尔丁及周边教堂、公共建筑甚至私人庭院里，你都能发现他留下的痕迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最著名的公共作品之一，是位于谢尔丁附近 <strong>恩格尔哈姆斯采尔（Engelhartszell）</strong> 特拉普ist修道院前的 <strong>《圣三位一体柱》</strong>。更为谢尔丁人所熟知的，是他为本地许多家族制作的墓碑和礼拜堂雕塑，这些作品充满了细腻的情感和地域特色，将个人的哀思与乡土的艺术语言完美结合。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的灵感来自这里的风景、这里的人和他们脸上被风雨刻下的皱纹。每一道纹路都是一个故事。” —— 保罗·哈根谈自己的创作源泉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哈根并非享誉国际的巨匠，但他是一位真正的“乡土艺术家”。他的存在证明，谢尔丁的历史叙事不只关乎公爵与商贾，也同样由这些用双手塑造本地精神面貌的艺术家所书写。他的作品，让谢尔丁的巴洛克之美，在20世纪有了更为深沉和人性化的延续。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在谢尔丁，历史不仅写在档案里，也流传在老人的故事中。最著名的一则传说，关乎 <strong>圣乔治教堂（St. Georgs-Kirche）</strong> 那缺失的钟声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在中世纪某次教堂铸钟时，工匠们无论如何也无法让钟声变得洪亮悦耳。绝望之际，魔鬼出现了。他提出一个交易：他可以赋予新钟世界上最美的声音，但条件是，要取走第一个听到这钟声的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "牧师与市民们既渴望完美的钟声，又恐惧魔鬼的契约。这时，一位聪明的老农夫想出了办法。新钟挂上钟楼，即将第一次鸣响的黎明，农夫赶着一头饿了好几天的野狼经过教堂门口。就在魔鬼得意洋洋准备收割灵魂时，钟声敲响——那第一个“聆听”并对此作出反应的，是饥饿的野狼，它被突如其来的巨响吓得嗷嗷直叫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "魔鬼意识到自己被愚弄，勃然大怒，却无法违背契约的规则。盛怒之下，他猛力一击，将教堂最高、最纤细的那座尖塔（被称为“Helblingturm”）打歪了。从此，圣乔治教堂的塔楼看起来微微倾斜，而那座拥有绝世美声的钟，则永远为谢尔丁人鸣响，保佑着这座城市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说融合了民间智慧、基督教信仰与对本地地标建筑的奇幻解释，代代相传，为谢尔丁的巴洛克天际线增添了一层神秘而顽皮的色彩。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你站在因河畔，凝视对岸的德国城镇，再看回手中这片被时光厚待的七彩乐园时，你会读懂谢尔丁的独特价值。它是一部 <strong>立体化的历史教科书</strong>：中世纪的贸易骨骼、巴洛克的美学皮肤、拿破仑时代遗留的边境静默，三者层层叠加，毫无突兀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力不在于惊心动魄的史诗，而在于一种 <strong>“凝固的富足”与“静好的完整”</strong>。这里没有遭受过度旅游化的侵蚀，历史是生活的一部分——色彩斑驳的墙面里是寻常人家的窗台鲜花，古老的拱廊下开着面包店和咖啡馆。每一扇色彩不同的门后，可能都延续着祖辈盐商或工匠的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拜访谢尔丁，便是在阅读一座 <strong>活态的历史样本</strong>。它告诉你，一座城市可以如何在历史的转折中优雅地转身，将曾经的财富与伤痛，都沉淀为从容不迫的美丽。它的回响，是轻柔的钟声，是河水的潺潺，是色彩在阳光下无声的叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dachstein-giant-ice-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    达
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">达赫施泰因大冰洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dachstein Caves</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/riegersburg-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里格斯堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Riegersburg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/eisriesenwelt-ice-cave-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维尔芬冰洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Eisriesenwelt</p>
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
