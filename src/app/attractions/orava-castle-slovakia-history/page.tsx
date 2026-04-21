import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥拉瓦城堡历史溯源｜吸血鬼电影取景地的前世今生与匈牙利贵族传奇',
  description: '抛开电影滤镜，探秘斯洛伐克奥拉瓦城堡的真实史诗：700年防御传奇、匈牙利贵族兴衰、以及“吸血鬼德古拉”首次登场的幕后故事。',
}

export default function OravaCastleSlovakiaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥拉瓦城堡', href: '/attractions/orava-castle-slovakia-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥拉瓦城堡・Orava Castle・斯洛伐克・奥拉瓦河畔城堡镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它高悬于悬崖之上，俯瞰着蜿蜒的奥拉瓦河，被誉为斯洛伐克最雄伟的堡垒。对世人而言，它是1922年经典默片《诺斯费拉图》中那座阴森恐怖的伯爵城堡，是吸血鬼银幕形象的起源地。然而，电影的光影只是它漫长生命中的一瞬。它的基石浸透了中世纪的血与火，见证了匈牙利贵族家族的权力博弈与文艺复兴的荣光。抛开游玩攻略，走进奥拉瓦城堡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥拉瓦城堡`} />
                <InfoRow label="英文名称" value={`Orava Castle`} />
                <InfoRow label="正式名称" value={`Orava Castle`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`奥拉瓦河畔城堡镇`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡的诞生，源于恐惧与防御。时间回到<strong>1241年</strong>，蒙古铁骑的西征如风暴般席卷了匈牙利王国（今斯洛伐克大部分地区当时属匈牙利）。这场灾难暴露了王国北部防御的脆弱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在蒙古人退去后的几十年里，一道沿着奥拉瓦河、瓦赫河构建的城堡防御链被紧急提上日程。奥拉瓦城堡，正是这条锁链上最关键的环节之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字“奥拉瓦”（Orava）源自古斯拉夫语，意为“在河流之间”或“多河之地”，精准描述了它所在的奥拉瓦河与米哈洛夫卡溪流交汇处的险要地势。最初的木质堡垒建造时间已不可考，但有记录的<strong>石质城堡</strong>始建于<strong>13世纪下半叶</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的建造者很可能是匈牙利国王<strong>贝拉四世</strong>，作为王室财产，用以巩固边疆、征收贸易关税，并控制通往波兰的重要商路。随着日耳曼移民被引入这片“新区”，城堡也成为了区域行政与司法中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非诞生于和平的繁荣，而是乱世中王权伸向北方的一只铁腕，从此开启了它七百年的要塞生涯。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的历史并非线性叙事，而是由几个强大家族的野心与命运共同书写。第一次重大转折发生在<strong>13世纪末</strong>，国王将城堡赐予了地方领主。此后的两个世纪，它像一枚珍贵的棋子，在数个贵族家族间易手、扩建，哥特式的防御体系逐渐成形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正将个人传奇与城堡命运绑定的，是<strong>15世纪的“强盗骑士”约翰·亚诺希克</strong>。他并非贵族，而是斯洛伐克民间传说中劫富济贫的“罗宾汉”式英雄。据说他曾被囚禁在奥拉瓦城堡阴湿的地牢中。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说亚诺希克在牢房中听到狱卒抱怨领主不公，他大笑道：“你们的锁链困不住渴望自由的心。正义会像塔特拉山的风，穿过最厚的石墙。” 后来他戏剧性越狱，继续他的森林冒险。这故事虽无法证实，却让城堡在民间叙事中多了几分叛逆色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的黄金时代，属于<strong>图尔佐家族</strong>。这个匈牙利显赫世家在<strong>16世纪</strong>获得了城堡。面对日益逼近的奥斯曼土耳其帝国威胁，他们将奥拉瓦打造成坚不可摧的军事堡垒。但更重要的是，他们带来了文艺复兴的春风。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>17世纪</strong>，尤其是<strong>约翰内斯七世·图尔佐</strong>时期，城堡进行了大规模改建。冰冷的军事要塞内部，诞生了华丽的小教堂、藏有珍贵古籍的图书馆、以及装饰着壁画与华丽家具的宫殿房间。城堡从上到下，被清晰地划分为<strong>上、中、下</strong>三个部分，分别承担防御、居住与后勤功能，这一布局完美体现了从战争到生活的过渡。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在家族账簿中，记录着从意大利聘请画师、从荷兰购买彩色玻璃、从威尼斯运来水晶吊灯的巨额开支。约翰内斯七世在信中写道：“我要让北方的严寒之地，也能呼吸到佛罗伦萨的空气。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "可惜盛世难续。<strong>1800年</strong>，一场毁灭性的大火吞噬了下城堡的大部分木质建筑，图尔佐家族也因财务拮据无力全面修复。城堡逐渐荒废，直到<strong>20世纪50年代</strong>，才被作为博物馆系统性修复与保护。这些印记——从哥特地牢到文艺复兴壁画，再到火灾后的残迹——层层叠叠，构成了它沉默的史诗。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若论与奥拉瓦城堡羁绊最深的“名人”，并非王侯将相，而是一位来自银幕的“吸血鬼”——更准确地说，是塑造了他的那位演员：<strong>贝拉·卢戈西</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>贝拉·卢戈西</strong>，原名贝拉·费伦茨·德热·布朗考，<strong>1882年</strong>出生于奥匈帝国的卢戈什（今属罗马尼亚）。他早年在匈牙利戏剧舞台成名，因参与左翼革命活动，在<strong>1919年</strong>被迫流亡。他先是到了维也纳，最后辗转至德国。彼时，德国表现主义电影方兴未艾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1921年</strong>，导演<strong>F·W·茂瑙</strong>正在为他的新片《诺斯费拉图》寻找外景地。他需要一座看起来古老、神秘、孤悬世外的城堡，来作为吸血鬼伯爵奥洛克阴森巢穴的化身。奥拉瓦城堡那耸立于百米峭壁之上的震撼造型，瞬间击中了他。尽管当时的城堡已显破败，但这反而增添了其所需的沧桑与诡谲气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在<strong>1921年秋</strong>，一个电影剧组来到了这个偏远的斯洛伐克小镇。主演贝拉·卢戈西此时尚未因德古拉一角闻名世界（他那部经典的《德古拉》要等到1931年），但诺斯费拉图伯爵——这个没有台词、全靠形体和眼神传递恐怖的吸血鬼始祖——已成为他演员生涯的转折点。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "茂瑙在拍摄手记中写道：“奥拉瓦的悬崖是天然的舞台。当晨雾从河面升起，笼罩城堡时，我感到那不是雾，是几个世纪以来盘踞于此的幽灵在呼吸。” 卢戈西则曾对友人回忆：“穿着那身僵硬的戏服，站在城堡的露台上，看着底下深邃的河谷，我真的感觉到自己不属于人间。那不是表演，是被那个地方施加了咒语。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "电影上映后震撼世界，奥拉瓦城堡也因此被永远铭刻在恐怖电影的历史丰碑上。但颇具悲剧色彩的是，卢戈西本人晚年陷入困顿，沉迷药物，最终在<strong>1956年</strong>因心脏病去世，被葬于他生前要求的德古拉斗篷戏服之下。城堡与他，一段相互成就的传奇，却都沾染了辉煌与落寞交织的复杂底色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位不得不提的名人是<strong>安托尼亚·图尔佐</strong>，<strong>约翰内斯七世·图尔佐</strong>的妻子。在丈夫早逝后，这位坚强的女性在<strong>17世纪80年代</strong>独立主持了城堡内部的大量修缮与装饰工程。她特别注重家族小教堂的布置，并确保了城堡图书馆的藏品得到妥善维护。在男性主导的贵族社会中，她留下了属于自己的文化印记，让城堡的文艺复兴气息得以延续。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了国际闻名的吸血鬼故事，城堡的石墙内还封存着许多本土的、更古老的幽灵传说。其中最著名的，是关于“白衣夫人”的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在<strong>16世纪</strong>，城堡的一位领主<strong>帕尔菲伯爵</strong>性格残暴。他怀疑自己美丽的妻子不忠，盛怒之下，竟在城堡的庭院中亲手将她杀害。妻子的冤魂从此无法安息，每当月圆之夜，便会化身为一名身着白裙的女子，在城堡的走廊和塔楼间无声徘徊，哀泣不已。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "游客和工作人员常声称在黄昏时瞥见过一个快速的白色身影，或听到莫名的叹息声。这个传说为城堡本就森严的氛围，增添了一抹凄婉的悲剧色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，关于城堡地下秘道与宝藏的传说也流传甚广。据说，有一条秘密通道可以从城堡地牢直通数公里外的森林，是古代领主为应对围困而修建的逃生通道。更有传言说，图尔佐家族在衰落前，将巨额财宝藏于秘道或某个隐蔽的墓穴中。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人口中流传着这样的警示：“不要试图寻找图尔佐的黄金。它们被咒语守护，由那些在修建密道时被灭口的工匠灵魂看管。贪心的人，只会迷失在永恒的黑暗中。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论悲情或惊悚，都是民间想象力对这座庞然巨石建筑的“再创造”。它们将冰冷的历史，转化为了有温度、有恐惧、有期盼的集体记忆，让城堡在人们口中获得了超越砖石的生命力。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客为《诺斯费拉图》的取景地慕名而来时，他们看到的远不止一个电影片场。奥拉瓦城堡是一部立体的石头史书。它每一层不同的建筑风格，都是匈牙利王国北部边疆数百年来政治、军事与文化变迁的忠实记录者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从防御蒙古人的前哨，到抵御土耳其人的要塞；从贵族权力的象征，到文艺复兴艺术在北欧的落脚点；再从辉煌后的衰败，到因一部电影而意外获得的现代文化符号身份——它的多重身份，正是中欧历史复杂性的缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂奥拉瓦，便是读懂了这片土地如何在战争与和平、强权与文明、本土与外来影响的拉扯中，塑造出自己的独特面容。站在城堡之巅，俯瞰苍翠河谷，你感受到的不仅是视觉的震撼，更是时间层叠的重量。它提醒我们，最迷人的传奇，往往深藏在最厚重的真实历史之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、内部打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kosice-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科希策老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kosice Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/old-town-presov" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普雷绍夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town of Prešov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/european-courtyard-komarno" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科马尔诺欧洲庭院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">European Courtyard, Komárno</p>
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
