import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科英布拉历史溯源｜葡萄牙知识熔炉的前世今生与大学传奇',
  description: '穿越七百年时光，走进葡萄牙最古老大学城。探寻国王与诗人的足迹，聆听黑斗篷下的爱情悲歌与午夜钟声。这里的故事，比任何教科书都动人。',
}

export default function CoimbraUniversityCityHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '科英布拉大学城', href: '/attractions/coimbra-university-city-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科英布拉大学城・Coimbra・葡萄牙・科英布拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果里斯本讲述着大航海时代的雄心，波尔图吟唱着酒窖里的醇香，那么<strong>科英布拉</strong>，则是一座用羊皮纸、拉丁文与学术长袍编织而成的<strong>活态知识圣殿</strong>。这座城市的心跳，与<strong>欧洲最古老的大学之一</strong>同步搏动了七个多世纪。它的故事，是葡萄牙王国定鼎之初的权谋，是文艺复兴思潮的暗流，更是无数青年用激情与叛逆书写的青春史诗。抛开游玩攻略，走进科英布拉的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科英布拉大学城`} />
                <InfoRow label="英文名称" value={`Coimbra`} />
                <InfoRow label="正式名称" value={`Coimbra`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`科英布拉`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科英布拉的故事，远比“大学城”这个标签古老得多。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字源于拉丁语“<strong>Conimbriga</strong>”，那是一座在罗马帝国时期繁荣兴旺的城池。然而，蛮族入侵的烽火与摩尔人北进的铁蹄，迫使居民向北迁徙，在蒙德古河畔一座易守难攻的山丘上，重建家园。这座新的定居点，被称为“<strong>科英布里加·诺瓦</strong>”（新的科英布里加），这便是科英布拉的雏形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1139年</strong>，一个决定性的时刻到来。葡萄牙首位国王<strong>阿方索·恩里克斯</strong>从摩尔人手中收复了这座城市。在王国草创，疆域未稳的年代，科英布拉因其战略位置——处于北方基督教势力与南方穆斯林领土的交界前沿，被选为葡萄牙的<strong>第一个首都</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“此地山峦环绕，河流为屏，乃上天赐予吾王国之基石。” —— 中世纪编年史对科英布拉地理优势的描述" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首都的地位持续了逾一个世纪，直到<strong>1255年</strong>，王国重心南移，里斯本取而代之。然而，这段“王城岁月”为科英布拉注入了最初的庄严基因：城堡被加固，宫殿被兴建，它从一个边境要塞，蜕变为一个具备行政与宗教功能的中心城市。当王冠离去，另一顶更为永恒的冠冕——知识的冠冕，正在为它加冕。这座城市命运的齿轮，已然悄然转向。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科英布拉的历史肌理，由三个决定性的印记深刻镌刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个印记，是<strong>1290年</strong>。国王<strong>迪尼斯一世</strong>在里斯本创立了葡萄牙的第一所大学。但它的命运多舛，在里斯本与科英布拉之间几经迁回。直到<strong>1537年</strong>，国王<strong>若昂三世</strong>做出了一个塑造城市灵魂的决定：将大学<strong>永久迁至科英布拉</strong>，安置在昔日阿尔卡索瓦王宫之内。从此，大学与城市彻底融合。山巅的宫殿变成了教室，皇室大厅成为了图书馆，整座山丘化作一个宏大的校园。大学不仅是学术机构，更成为了城市绝对的经济与文化主宰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是伴随大学而来的<strong>宗教与思想管制</strong>。若昂三世是一位虔诚乃至保守的君主，他将大学迁至科英布拉，部分原因是为了更好地控制这所思想策源地。随之而来的，是<strong>宗教裁判所</strong>的阴影。大学的教学被严格纳入经院哲学的框架，<strong>耶稣会</strong>一度接管了大部分学院的管理。这段时期，科英布拉的知识之光在正统教义的灯罩下摇曳，既有辉煌的学术产出，也弥漫着不容异说的压抑。直到<strong>18世纪</strong>，在首相<strong>庞巴尔侯爵</strong>的铁腕改革下，耶稣会势力被驱逐，大学才迎来了一场现代化的启蒙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，写在城市的建筑上。<strong>1755年</strong>那场摧毁里斯本的大地震，也波及了科英布拉。灾后重建的主导思想，便是庞巴尔侯爵推崇的<strong>庞巴林式风格</strong>。这种风格讲求理性、坚固与实用。我们在科英布拉大学看到的许多学院建筑，如气势恢宏的<strong>大学柱廊</strong>与新<strong>圣米迦勒礼拜堂</strong>，都带有鲜明的庞巴林式烙印——庄严的立柱，简洁的线条，它们仿佛是启蒙理性在石头上的宣言，与山下老城区曼努埃尔式的繁复雕饰，形成了有趣的时空对话。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在科英布拉，历史不是抽象的年表，而是具体的人，以及他们炽烈如蒙德古河般的人生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 佩德罗与伊内斯：王冠下的爱情悲歌</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "14世纪的葡萄牙宫廷，一段禁忌之恋成为永恒传说。王子<strong>佩德罗</strong>（后来的<strong>佩德罗一世</strong>）奉父王之命娶了西班牙公主，却深深爱上了她的陪嫁女官，<strong>伊内斯·德·卡斯特罗</strong>。这段恋情为宫廷所不容，尤其是威胁到了王子的政治联姻价值。当佩德罗的父亲<strong>阿方索四世</strong>国王外出时，朝中权臣于<strong>1355年</strong>，在科英布拉的<strong>泪水庄园</strong>，残忍地处决了伊内斯。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“即便死神将我们分离，我的爱也将穿越坟墓，令你加冕。” —— 后世诗歌中佩德罗的誓言" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "悲剧并未结束。数年后，佩德罗继位。他做的第一件惊世骇俗之事，便是追捕并处死了杀害伊内斯的凶手，并挖出他们的心脏。更传奇的是，他下令将伊内斯的遗体从科英布拉的坟墓中掘出，为其穿上王后的华服，戴上了后冠，要求所有宫廷贵族逐一上前，亲吻这位“死去的王后”已经腐烂的手背，完成加冕仪式。这段“死后加冕”的故事，将科英布拉的宫廷秘史染上了哥特式的浓烈色彩。今天，你可以在<strong>圣克拉拉-维利亚修道院</strong>寻觅伊内斯最初的安息之地，她的石棺上精美的雕像，仿佛仍在无声诉说这段哀歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 安东尼奥·德·阿尔梅达：从科英布拉走出的音乐巨匠</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "并非所有传奇都来自中世纪。<strong>安东尼奥·德·阿尔梅达</strong>，这位20世纪杰出的葡萄牙指挥家，他的艺术生涯就始于科英布拉大学城。然而，他的道路并非一帆风顺。出生于1928年，他早年学习的是<strong>工程学</strong>——一项在科英布拉备受尊崇的“严肃学科”。但音乐是他无法压抑的激情。大学里严谨的学术训练，或许反而塑造了他日后指挥中精确、清晰、忠于原谱的独特风格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇在于其“世界主义者”的视野。在冷战铁幕最严密的时期，他凭借非凡的勇气与艺术声望，成为少数能自由往来于东西方阵营的指挥家。他深入苏联，将肖斯塔科维奇等人的作品引向西方；他也将西方经典带入东欧。科英布拉赋予他理性的基石，而他则用这份理性，去搭建沟通分裂世界的音乐桥梁。他的故事，是科英布拉“知识无国界”精神的现代表达。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了正史记载的宏大叙事，科英布拉的街巷与古老墙壁间，还飘荡着更为私密、顽皮甚至略带惊悚的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的莫过于<strong>黑斗篷传奇</strong>。科英布拉大学学生的标志性服饰——那件厚重的黑色斗篷，据说最初并非为了庄严，而是出于实用与叛逆。传说在某个物资匮乏、纪律严苛的年代，学生们晚上偷偷溜出宿舍去小酒馆或与情人约会。为了御寒，也为了在夜色中隐藏身份，他们裹上了能找到的最深色的布料。久而久之，这违禁的“夜行衣”竟演变成了正式礼服，成为了反叛精神的荣耀勋章。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当午夜钟声响起，图书馆的古老书页会自行翻动，吸收月光。若此时有纯真的灵魂在此苦读，书灵便会低语，授予他未被写下的智慧。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说，围绕着<strong>若安娜图书馆</strong>那座精美的<strong>洛可可式钟楼</strong>。它被称为“<strong>午夜的钟声</strong>”。传说，在图书馆修建时，一位工匠爱上了项目经理的女儿。他们的恋情被禁止，工匠在绝望中将一封情书和爱人的一缕头发封存在了钟楼的机械之中。自此，每当午夜钟声敲响，音色会格外幽深绵长，老人们说，那是困在时间里的叹息，在提醒世人，科英布拉的砖石里，凝固的不仅是知识，还有无数未说出口的爱恋与遗憾。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客沿着陡峭的阶梯登上大学，惊叹于若安娜图书馆的金碧辉煌，或是在“法多之家”聆听那特有的、充满学术忧郁的“科英布拉法多”时，他们触摸的，是一座层层叠叠的“时间之城”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科英布拉的价值，远不止于一座古老学府。它是葡萄牙民族国家诞生期的“子宫”，是王权与神权博弈的“棋盘”，是启蒙思想刺破中世纪阴霾的“灯塔”。在这里，严肃的学术传统与青春的浪漫反叛奇特地共生；石头的永恒与生命的短暂（如伊内斯）形成残酷而诗意的对照。读懂科英布拉，便是读懂一种欧洲文明成长的典型样本：从军事堡垒到政治中心，最终升华为精神与知识的殿堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市本身，就是一本永远在续写的活态史书。每一届新生，都在为它添加新的注脚。而古老的墙壁、河水的流波与午夜的钟声，则负责保管所有过往的篇章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/arouca-516-suspension-bridge" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿罗卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arouca</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belmonte-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔蒙特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belmonte</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vila-vicosa" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维拉维索萨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vila Viçosa</p>
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
