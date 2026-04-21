import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯特尔萨多历史溯源｜撒丁岛悬崖要塞的前世今生与热那亚传奇',
  description: '深入撒丁岛北部悬崖，探索卡斯特尔萨多千年海防史。从热那亚城堡到“活着的”中古城堡，聆听石墙诉说海盗、贵族与守护圣徒的故事。',
}

export default function CastelsardoSardiniaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '撒丁岛', href: '/destinations/europe' },
            { label: '卡斯特尔萨多', href: '/attractions/castelsardo-sardinia-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯特尔萨多・Castelsardo・意大利・撒丁岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在地中海的惊涛与撒丁岛的嶙峋岩石之间，卡斯特尔萨多如同一艘永不沉没的巨石战舰，锚定在历史的风口浪尖。它的故事，始于热那亚商人的野心，淬炼于海盗与王权的争夺，最终凝固成一座“活着的”中世纪城堡。这里没有沙滩度假的喧嚣，只有海风雕刻的岁月。抛开游玩攻略，走进卡斯特尔萨多的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯特尔萨多`} />
                <InfoRow label="英文名称" value={`Castelsardo`} />
                <InfoRow label="正式名称" value={`Castelsardo`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`撒丁岛`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡斯特尔萨多的生命，始于悬崖本身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在撒丁岛东北角的安格拉港上方，一块巨大的玄武岩突兀地伸向第勒尼安海。在公元前，努拉吉文明的先民或许曾在此眺望。但城市真正的奠基，要等到海洋贸易与争霸的时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>12世纪末</strong>，掌控着地中海贸易脉络的热那亚共和国，将目光投向了这座战略要冲。显赫的<strong>多利亚家族</strong>受命于此，他们需要的不是一座城市，而是一个坚不可摧的据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1270年</strong>，城堡的基石被牢牢嵌入悬崖之巅。它最初的名字直白而强势——<strong>Castel Genovese</strong>（热那亚城堡）。它的诞生纯粹出于军事与经济的计算：扼守航道，保护热那亚商船免受海盗侵扰，并作为控制撒丁岛内陆的跳板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Castelsardo”这个如今充满诗意的名字，是历史层叠的结果。当<strong>1448年</strong>阿拉贡的西班牙人夺取它后，它被更名为 <strong>Castel Aragonese</strong>。直到意大利统一后的<strong>18世纪</strong>，才最终简化为意为“撒丁岛城堡”的Castelsardo。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的起源，是热那亚实用主义在地中海棋盘上落下的一枚冰冷棋子。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光在这座石头城里留下了三道最深的刻痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道，属于建造者。<strong>多利亚家族</strong>的烙印至今清晰可见。他们规划的城堡是典型的“堡中有镇”——高耸的城墙内，街道狭窄蜿蜒如迷宫，所有房屋的屋顶都用石板铺设，既是风格，也为了在遭受围攻时能收集雨水。<strong>共和宫</strong>和<strong>主教宫</strong>的基石，诉说着最初统治阶层的权力结构。这座城堡在近两百年里，一直是热那亚在撒丁岛最北端的坚固前哨。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“热那亚人的旗帜在城堡最高处飘扬，下面是忙碌的港口和警惕的哨兵。对于水手来说，看到它就意味着安全。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 仿热那亚航海日志记载" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道刻痕，来自王权的更迭。<strong>1448年</strong>，经过漫长围困，阿拉贡的军队终于敲开了城堡的大门。热那亚的雄狮旗落下，卡斯蒂利亚的城堡旗升起。西班牙人带来的不仅是新名字，还有新的防御理念。现存城墙中那些更厚重、适应火炮时代的段落，大多是这个时期的加固之作。城堡也从纯粹的热那亚殖民地，逐渐融入撒丁岛的政治肌理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道，也是最富戏剧性的印记，源于二战后的没落与重生。上世纪中叶，随着现代生活方式的冲击，居民纷纷搬离山顶不便的老城，迁往山下的新城区。古老的石头城一度濒临成为空壳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，撒丁岛人的智慧让它重获新生。他们没有将其变成纯粹的博物馆，而是通过精心的修复与引导，让老手艺人和原住民回迁。于是，你今天看到的卡斯特尔萨多，是一个“活着的博物馆”：城堡里不仅有历史遗迹，还有编织<strong>地中海篮</strong>（一种独特的悬铃木纤维篮子）的老匠人在自家门口劳作，主妇在古老的石头水池边交谈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史没有在这里终止，它只是换了一种呼吸的方式。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "悬崖之城卡斯特尔萨多，孕育并庇护了两位传奇人物，他们的故事与这座要塞的命运紧紧缠绕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是撒丁岛本土抗争精神的象征——<strong>埃莱奥诺拉·阿尔博雷亚</strong>。她并非出生于此，但这座城市的关键时刻，总闪现着她的身影。<strong>14世纪</strong>，埃莱奥诺拉作为<strong>阿尔博雷亚法官</strong>（撒丁岛当时独立的审判领地统治者），是一位罕见的女性统治者，以颁布进步法典《卡泰罗法典》而名垂青史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她与卡斯特尔萨多的交集，充满刀光剑影。当时，她的丈夫<strong>布拉内</strong>正与阿拉贡势力争夺对撒丁岛的控制权。<strong>1353年</strong>，热那亚的多利亚家族（此时已与埃莱奥诺拉阵营结盟）正是以卡斯特尔萨多（当时的热那亚城堡）为基地，与阿拉贡舰队展开血战。尽管埃莱奥诺拉本人未曾长居于此，但这座城堡的归属，直接关系到她统一撒丁岛梦想的成败。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的传奇在于，在一个由男性主导战争与政治的年代，她以智慧和坚韧守护着自己的领地与文化。今天，在撒丁岛的许多地方都能看到她的雕像，她的精神是无形的遗产，也回荡在卡斯特尔萨多坚韧的城墙上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，则是一位将灵魂留在此地的圣徒——<strong>圣安蒂莫的安东尼</strong>。与埃莱奥诺拉的宏大叙事不同，他的故事更贴近尘埃与信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "安东尼出生于<strong>17世纪末</strong>卡斯特尔萨多一个贫穷的渔民家庭。年少时，他因被误控盗窃而遭受不公，这段经历反而促使他投身信仰。他加入了方济各会，以谦卑、苦行和对穷人的无私奉献闻名，据说能行神迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他一生都未曾远离故乡的悬崖与大海。他最常做的事，就是在城堡的窄巷中行走，看望病人，安慰困苦者。<strong>1742年</strong>，安东尼在附近的奇亚镇去世，但他的遗愿是魂归故里。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当送葬队伍抬着他的遗体返回卡斯特尔萨多时，据说海面平静无波，天空澄澈，仿佛整个自然都在向这位谦卑的渔夫之子致敬。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 当地方济各会档案记载" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，他的圣物箱被供奉在城堡内<strong>圣玛丽亚大教堂</strong>的侧殿中，他本人也于<strong>1905年</strong>被教廷封圣。对于当地人而言，他不是遥远的天国形象，而是“我们的安东尼”，一位从这些街巷中走出的守护者。每年十月，信徒们会抬着他的圣像游行，那是对本土圣徒最深情的纪念。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卡斯特尔萨多，坚硬的石头也包裹着柔软的信仰与神秘的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说，关乎城堡最高处的<strong>“大象岩”</strong>——一块天然风化、形似巨象的奇石。古人视其为神秘的守护者。传说在远古，一只巨大的石象从海中升起，用它庞大的身躯挡住了肆虐的海妖与风暴，从此化为岩石，永恒庇佑着下方的港湾与水手。直到今天，渔民出海前，仍习惯望一眼“大象岩”，祈求平安归来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与当地独特的<strong>“山羊角魔法”</strong>有关。撒丁岛自古有深厚的民间巫术传统。相传，卡斯特尔萨多的老妇人掌握着用野生山羊角制作护身符的秘密。她们会在特定的月相下，将写有古老咒语（一种混合拉丁语和撒丁语的秘文）的羊皮纸塞入中空的羊角，用以保护家园、驱逐“邪眼”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“以海盐之净，以岩石之坚，以圣埃菲西奥之名，令一切恶意在此角前折返。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 一段流传的护身符咒语（仿古语）" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说并非迷信，而是海岛先民面对莫测大海与艰难生活时，构建的心理防线与精神慰藉。它们与天主教的圣徒崇拜奇异地融合，形成了此地独特的人文层理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你听到老城深处传来低沉而悠扬的多声部合唱，那便是被联合国列为非物质文化遗产的撒丁岛民谣<strong>Canto a Tenore</strong>。那喉音与胸腔共鸣交织出的古老旋律，据说正是模仿了风声、羊叫和森林之声——这是另一部用声音记载的、关于土地的记忆传说。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步于卡斯特尔萨多，你踏过的每一块石板，都不只是通往一个观景台，而是通往一个时间切片。这里的历史价值，不在于发生过多么改变世界格局的事件，而在于它近乎完整地保存了地中海世界一种典型生存状态的样本——<strong>悬崖上的海防共同体</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从热那亚商人的精明算计，到西班牙总督的威严统治，再到普通渔民、编织匠的日常坚守，所有层次的历史都没有被清除，而是像岩石的纹理一样叠加在一起。它不是迪士尼式的布景，而是一座仍有炊烟、仍有手艺、仍有故事的“活化石”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂卡斯特尔萨多，便是读懂地中海文明的韧性：如何在有限的资源与无尽的外部威胁中，凭借石头、信仰与智慧，构筑一个可以世代延续的家园。它邀请你的，不是匆匆一瞥，而是一次深度的时空对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "下次当你站在城堡之巅，俯瞰翡翠般的海湾，耳边呼啸的或许不只是海风，还有热那亚水手的号令、西班牙火绳枪兵的脚步，以及安东尼修士轻声的祈祷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gaeta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加埃塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gaeta</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spoleto-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gerace-calabria-byzantine-pearl" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰拉切</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gerace</p>
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
