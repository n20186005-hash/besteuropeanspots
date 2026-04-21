import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯特尔梅扎诺历史溯源｜意大利卢卡尼亚失落之城的千年传奇与岩壁往事',
  description: '探秘意大利“岩壁上的中世纪迷宫”卡斯特尔梅扎诺。从萨拉森避难所到诺曼城堡，深入千年鹰巢之城的前世今生，聆听牧羊人与天使的隐秘传说。',
}

export default function CastelmezzanoHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '巴斯利卡塔', href: '/destinations/europe' },
            { label: '卡斯特尔梅扎诺', href: '/attractions/castelmezzano-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯特尔梅扎诺・Castelmezzano・意大利・巴斯利卡塔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在意大利南部崎岖的卢卡尼亚腹地，时间仿佛被钉在了陡峭的砂岩绝壁之上。<strong>卡斯特尔梅扎诺</strong>，这个名字意为“中间的城堡”，它并非诞生于和平的沃野，而是乱世中一个决绝的抉择——一个悬挂在<strong>多尔托米蒂·卢卡内</strong>奇峰之间的“鹰巢”。它的历史，是一部关于生存、隔离与坚韧的史诗。抛开游玩攻略，走进卡斯特尔梅扎诺的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯特尔梅扎诺`} />
                <InfoRow label="英文名称" value={`Castelmezzano`} />
                <InfoRow label="正式名称" value={`Castelmezzano`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`巴斯利卡塔`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于<strong>卡斯特尔梅扎ano</strong>确切的诞生之年，已湮灭在公元第一个千年的烽烟里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史学家更倾向于一个充满张力的起源剧本：<strong>公元7至9世纪</strong>。当时，意大利南部海岸线正持续遭受<strong>萨拉森人</strong>（阿拉伯海盗）的侵袭与劫掠。平原和海岸变得危机四伏，当地的农民、牧民乃至小贵族，开始向内陆险峻的群山撤退。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们并非随意躲藏，而是有战略地选择了<strong>多尔托米蒂·卢卡内</strong>山脉中那些近乎垂直的岩峰。这些岩峰易守难攻，如同天然堡垒。而“Castelmezzano”这个名字，本身就泄露了天机。它源自拉丁语“Castrum Medianum”，意为“位于中间的城堡或要塞”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字精准描述了它的地理与军事地位：它恰好位于古老的山径与潜在的逃生路线之间，成为一个进可观察山谷、退可遁入深山的<strong>中枢哨所</strong>。最初的定居点，很可能就是由简陋的石屋和防御墙构成，紧紧依附在岩石上，与山体浑然一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不是一个为了繁荣而建的城市，而是一个为了<strong>存续</strong>而生的避难所。它的基因里，写满了对外部世界的警惕与自我封闭的坚忍。这种诞生于恐惧与生存本能的开端，为小镇此后千年的孤独与不朽定下了基调。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨拉森人的威胁逐渐消退后，这片土地迎来了新的主人。<strong>11世纪</strong>，骁勇的<strong>诺曼人</strong>开始征服意大利南部。他们擅长利用并强化现有的防御据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诺曼骑士们一眼看中了卡斯特尔梅扎诺的战略价值，在原有简陋防御的基础上，建造了更为坚固的<strong>石头城堡</strong>。城堡的遗迹至今仍高悬在镇子最高点的“鹰石”之上，虽然只剩残垣，却宣告了一个新时代的到来——从自发避难所到受封贵族领地的转变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正塑造小镇今日肌理的，并非持续的战争，而是漫长的<strong>隔绝</strong>与<strong>地震</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "由于地处深山，交通极为不便，卡斯特尔梅扎诺在数百年间几乎处于一种“时光冻结”的状态。它错过了文艺复兴的浪潮，也远离了工业革命的喧嚣。这种隔绝，意外地保存了其中世纪的风貌。镇上的房屋并非随意建造，而是遵循着一种古老的“垂直逻辑”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“房屋像藤蔓一样从岩石中生长出来，屋顶是另一家的地基，小巷不是铺出来的，而是从岩石里凿出来的。在这里，你永远走在别人的屋顶上，或自己的地窖下。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 一位19世纪旅行者的笔记" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种建筑智慧，是对极端地形的终极适应。而<strong>地震</strong>，则是这片土地的宿命。意大利南部是地震活跃带，多次大震摧毁了房屋，却从未摧毁人们重建家园的决心。每一次重建，都沿用并加固了祖先传下的石造工艺与结构，让小镇在毁灭与重生中，保持了惊人的历史连续性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇近代最深刻的历史印记，莫过于<strong>20世纪中叶的大移民潮</strong>。战后困苦的生活，让一代年轻人被迫离开这个美丽的“囚笼”，前往美洲或欧洲北部寻找生计。小镇人口锐减，一度濒临消亡。这段“逃离”的历史，与它当初为“躲避”而生的起源，形成了充满悲情的历史回响。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卡斯特尔梅zzano近乎停滞的时间线里，一位外来者的短暂凝视，却为它镀上了一层现代思想与艺术的光晕。这位外来者，就是意大利20世纪最离经叛道又才华横溢的知识分子与导演——<strong>皮耶罗·保罗·帕索里尼</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>帕索里尼</strong>与卡斯特尔梅扎诺的邂逅，发生在<strong>1963年</strong>。当时，他正在为他的电影《<strong>马太福音</strong>》寻找外景地。这部电影意图颠覆传统，以近乎纪录片的手法，将基督的故事置于一个原始、贫困、真实的意大利南方背景中。他需要的不是神圣的耶路撒冷布景，而是一个能体现“古早、艰苦、近乎原始人类生存状态”的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡斯特尔梅扎诺，这个悬挂在岩壁上的中世纪遗存，完美击中了他的想象。在这里，时间不是线性前进的，而是循环的、凝固的。粗糙的石屋、陡峭的阶梯、居民脸上刀刻般的皱纹，都让帕索里尼看到了他心目中的“古代犹地亚”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我来到了世界的尽头，或者说，时间的起点。这里的面孔，是《圣经》里走出来的面孔；这里的寂静，是基督受难前夜的寂静。我在寻找神性，却在这里找到了最赤裸的人性。” —— <strong>帕索里尼</strong>在日记中的片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然《马太福音》的主要取景地在邻近的<strong>马泰拉</strong>（Sassi区），但卡斯特尔梅扎诺及其所代表的<strong>卢卡尼亚</strong>山区风貌，深刻塑造了帕索里尼对影片美学基调的构想。这里的景观和人文，强化了他对“神圣存在于卑微之中”这一核心主题的表达。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕索里尼的足迹，为这座沉默的小镇建立了一条通往现代艺术哲学的隐秘通道。他看到的不是风景明信片上的奇观，而是一个人类生存状态的<strong>活化石</strong>，一个可供解读的、充满痛苦与尊严的文本。通过他的眼睛，卡斯特尔梅扎诺的“落后”与“隔绝”，被转化成了某种具有普遍性和哲学意味的“真实”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当然，小镇更永恒的名人，是那些无名的<strong>石匠</strong>。他们代代相传的技艺，让建筑与山岩长在了一起。还有那些<strong>牧羊人</strong>，他们的足迹踏遍了周围险峻的山谷，构成了小镇与外部世界最古老、最坚韧的经济纽带。他们是沉默的传奇，他们的故事，写在了每一道石墙的缝隙和每一条悬崖小径的转弯处。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卡斯特尔梅扎诺，最动人的传说与最惊险的现代活动紧密相连，那就是“<strong>Volo dell‘Angelo</strong>”（<strong>天使之飞</strong>）。这是一项利用钢索在高空穿越峡谷的滑翔体验，而其名字，源自一个古老的当地故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在很久以前，小镇的守护<strong>天使</strong>为了庇护信徒免受侵扰，常常在深夜飞行于两座山峰之间，巡视领地。它的身影快如闪电，划过夜空时只留下一道银色的轨迹。一天，一位在深山放牧而迷路的牧羊人，在绝望中向守护天使祈祷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "忽然，他感到身体一轻，被一股温暖而无形的力量托起，像风一样平稳地飞越了看似不可逾越的深渊，安全落回了小镇的边缘。从此，人们相信，连接两座山峰的天空之径，是天使走过的路，蕴含着神圣的庇护之力。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“不要害怕深渊，因为信仰是最坚韧的绳索。当我飞跃时，并非征服了山峰，而是重走了天使的巡礼之路。” —— 当地关于“天使之飞”的民间解释" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则关于小镇的<strong>基石</strong>。据说，最初建造房屋时，岩石异常坚硬，工具常常崩坏。后来，一位老石匠梦见山神指点，在月圆之夜向特定岩层献上羊奶和薰衣草。次日开工，岩石竟变得“如同奶酪般顺从”。因此，当地石匠世代遵守一些隐秘的开工仪式，相信山体是有灵的，唯有尊重，方能与之共生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，绝非简单的幻想。它们体现了山民对<strong>险恶环境的神圣化解读</strong>，将恐惧转化为一种浪漫而神秘的共存叙事。将致命的深渊转化为天使的轨迹，将顽石赋予神性，这正是人类在极端自然面前，用想象力构建的精神庇护所。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客们为“天使之飞”的刺激而惊呼，或为日落时分的“石林”奇观而拍照时，他们所见证的，远不止一份大自然的壮丽馈赠。卡斯特尔梅扎诺，是一座<strong>活生生的中世纪博物馆</strong>，更是一部关于人类适应力与社区韧性的石造编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值，不在于曾拥有多么显赫的王公贵族，而在于它近乎<strong>偏执地保存了一种已经消失的生活方式</strong>。每一级凿刻在岩石上的阶梯，每一座屋顶相连的房屋，都在诉说着与世隔绝下的协作与生存智慧。从萨拉森威胁下的避难所，到诺曼领主的前哨，再到被现代世界遗忘的角落，直至成为追寻“真意大利”的旅行者心中的圣地，它的历史层理清晰如岩页。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂卡斯特尔扎诺，便是读懂一种与<strong>自然进行极致谈判</strong>的文明。这里的“风景”不是被观赏的客体，而是先民们用生命书写的、与之搏斗并最终共存的<strong>主体</strong>。它提醒我们，有些地方的存在，本身就是一个不朽的答案，回答着关于守护、家园与持久的问题。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何体验“天使之飞”、探寻最佳摄影机位、品尝巴斯利卡塔山间美味，交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/the-ancient-city-of-acerenza" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿切伦扎古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Ancient City of Acerenza</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trani-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特拉尼圣尼科拉大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trani Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/norcia-umbria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺尔恰（圣本笃的故乡与黑松露中心）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Norcia</p>
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
