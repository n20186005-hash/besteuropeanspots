import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗里亚斯历史溯源｜西班牙最小城市与悬崖城堡的前世今生与领主传奇',
  description: '探秘西班牙官方认证的“最小城市”弗里亚斯。攀登悬崖城堡，穿越中世纪桥头堡的烽火、权谋与自治传奇。一段被岩石与埃布罗河封存的卡斯蒂利亚往事。',
}

export default function FriasCastileHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '布尔戈斯', href: '/destinations/europe' },
            { label: '弗里亚斯', href: '/attractions/frias-castile-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗里亚斯・Frías・西班牙・布尔戈斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在西班牙北部卡斯蒂利亚苍茫的土地上，<strong>弗里亚斯</strong> 的定义充满矛盾：它是一座“城市”，却只有不到300名常住居民；它小如村落，却曾手握撼动王权的力量。这份悖论般的荣光，源于山巅那座与岩石融为一体的城堡，和脚下那座横跨埃布罗河、征收了数百年“过路费”的古桥。它的故事，是石头写成的权力史诗。抛开游玩攻略，走进弗里亚斯的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗里亚斯`} />
                <InfoRow label="英文名称" value={`Frías`} />
                <InfoRow label="正式名称" value={`Frías`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`布尔戈斯`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“弗里亚斯”这个名字，其根源很可能来自拉丁语，意为“寒冷之地”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这并非文学修饰，而是对其地理现实的精准描述。它雄踞在埃布罗河深邃峡谷上方一块陡然隆起的石灰岩巨石上，北风毫无遮拦地扫过这片海拔近800米的高地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的雏形可追溯到 <strong>公元867年</strong> 左右。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，基督教王国阿斯图里亚斯的君主们正艰难地向南推进“收复失地运动”。弗里亚斯所处的这片区域，是杜罗河与埃布罗河之间充满危险的边界地带。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它最初并非为宁静生活而建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这块天然易守难攻的巨岩，首要使命是<strong>军事哨所</strong>。它俯瞰着埃布罗河这一天然交通走廊，监视着来自南方穆斯林势力的动向，保护着后方逐渐复苏的基督教定居点。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "早期编年史中模糊地提到，这里曾有“城堡与居民”，是通往卡斯蒂利亚腹地“门户”的一部分。它的诞生，与战争和边界紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从最初散落的防御工事和几户军士人家，到形成有组织的社区，弗里亚斯在战火的缝隙中扎根。它的存在本身，就是卡斯蒂利亚边疆不断南移的活地图。地名中的“寒冷”，不仅指气候，更隐喻着那段剑拔弩张的边疆岁月。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗里亚斯的历史，镌刻在两处无法撼动的巨石之上：山顶的城堡，与河上的桥梁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一枚印记，是 <strong>1202年</strong> 的皇家赠礼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡斯蒂利亚国王 <strong>阿方索八世</strong> 授予弗里亚斯“城市”地位。这绝非荣誉头衔，而是一份极具战略眼光的政治投资。此时，收复失地的战线已大幅南推，弗里亚斯从“前线堡垒”转型为“战略后方枢纽”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "授予城市特权，意味着赋予其<strong>市场权、司法权</strong>和更高的自治度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "目的很明确：要繁荣这个扼守埃布罗河贸易通道的节点，让它成为王国北部坚实的经济与军事支柱。正是这道法令，奠定了它今日作为“西班牙最小城市”的法定基石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二枚印记，是中世纪自治与领主权力的激烈博弈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>14世纪</strong>，弗里亚斯被纳入强大的<strong>拉腊家族</strong>领地。但这里的市民并非温顺的臣民。他们凭借古老的王室特许状和顽强的性格，与领主进行了长达数个世纪的抗争。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最激烈的冲突围绕那座<strong>罗马与中世纪风格混建的桥梁</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "领主声称对过桥者享有征税权，而市民则援引旧特权激烈反对。这场关于“过路费”的拉锯战，是欧洲中世纪晚期市民阶层与封建领主矛盾的经典缩影。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“弗里亚斯的人们，犹如他们栖居的岩石一般顽固。”——后世历史学家如此评价。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三枚印记，写在一份 <strong>1435年</strong> 的珍贵文件上：<strong>《弗里亚斯市政宪章》</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是市民与领主（当时是<strong>唐·佩德罗·费尔南德斯·德·贝拉斯科</strong>）妥协与斗争的结晶。宪章详细规定了市民的权利、义务、税赋及自治范围。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它甚至细致到对磨坊、烤炉、酒馆经营权的划分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份写在羊皮纸上的法律，让弗里亚斯在领主权下仍保留了相当大的自我管理空间，使其社会结构得以在动荡的中世纪末期保持独特稳定。这份宪章的原件，至今仍是市政档案的瑰宝。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗里亚斯的历史天空，并非由国王将相独占，而是被一个家族的漫长阴影与一位铁腕主教的强光所塑造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 拉腊家族：岩石上的领主与“坏蛋”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉腊家族是卡斯蒂利亚历史上最显赫、最好战的贵族家族之一。他们与弗里亚斯的羁绊，深刻改变了城市的命运与面貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>唐·胡安·努涅斯·德·拉腊</strong> 是关键人物。在 <strong>14世纪</strong> 中叶，他是弗里亚斯及其周边广阔领地的领主。但他更著名的身份，是卡斯蒂利亚王国内部动荡的核心玩家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非忠诚的臣子，而是精于算计的权谋家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在国王<strong>阿方索十一世</strong>去世后，他周旋于王位争夺者之间，时而支持佩德罗一世（绰号“残酷者”），时而倒向他的异母兄弟恩里克二世，一切只为扩大自己的权力与封地。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "同时代的编年史家洛佩斯·德·阿亚拉这样描绘他：“他更擅长在叛乱中获利，而非在忠诚中服务。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗里亚斯的城堡，在他的时代得到了大规模加固。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不是为了抵御外敌，更像是一个<strong>权力提款机</strong>和<strong>叛乱基地</strong>。从这座易守难攻的堡垒中，他能够控制埃布罗河谷的贸易，征收税款，并在王国内战中为自己攫取筹码。市民对他的感受复杂：他带来了投资与保护，也带来了沉重的税负与战乱的风险。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的后代延续了这种风格。<strong>15世纪</strong>的 <strong>唐·佩德罗·德·拉腊</strong>，更是以桀骜不驯闻名。他甚至曾绑架国王的税务官，公然对抗王室权威。拉腊家族统治下的弗里亚斯，始终弥漫着一种粗粝、独立、甚至有些无法无天的边疆气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 阿方索·德·卡斯蒂利亚：“石雕主教”的遗产</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说拉腊家族代表了世俗权力的霸道，那么<strong>阿方索·德·卡斯蒂利亚</strong>则代表了一种试图将秩序与神圣刻入石头的努力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非本地人，而是卡斯蒂利亚王室旁支，一位王子出身的教士。<strong>15世纪末</strong>，他成为布尔戈斯主教，而弗里亚斯正在他的教区之内。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位杰出的管理者与建筑家，但性格以<strong>严厉、固执</strong>著称。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他对弗里亚斯最重要的贡献，是下令并资助建造了<strong>圣维森特教堂</strong>令人惊叹的<strong>门廊</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不仅仅是一项艺术工程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在宗教裁判所阴影初现的时代，这位主教希望通过宏伟、正统的宗教艺术，来强化信仰，规训人心。他选择弗里亚斯，或许正是看中了这座边疆城市桀骜不驯的气质，想要用石头的神圣来“驯服”它。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他的传记作者写道：“他将财富视为建造永恒之物的工具，而非享乐的手段。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他亲自监督工程，对雕刻的圣经场景细节要求极为严苛。今天，当游客仰望门廊上精美的“最后审判”等浮雕时，看到的不仅是哥特式艺术，更是一位铁腕主教试图用石头布道的意志。他本人最终也安葬于此，永远守护着自己的作品。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在弗里亚斯坚硬的岩石外表下，流淌着由想象与信仰编织的柔软传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说与城市起源有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们说，弗里亚斯之所以建在这块陡峭得不合常理的巨石上，是因为<strong>天使的指引</strong>。当初的建造者们不知该在何处安家，一位天使从天而降，将一块石头扔向埃布罗河峡谷，指示他们在石头落点之上兴建家园。这解释了它险峻到极致的选址——那是神圣的选择。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一则传说则围绕着<strong>圣维森特教堂</strong>的罗马式门廊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地流传，门廊上某些雕刻的奇异面孔和纹样，并非普通的装饰，而是用来<strong>震慑恶灵与女巫</strong>的符咒。在中世纪人们的信念里，教堂不仅是祈祷之所，更是对抗黑暗力量的堡垒，每一块石头都负有神圣使命。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老一代人还会低声讲述“犹太之石”的故事：在城堡下方的某块岩石上，有一个模糊的刻痕，据说是当年居住于此的犹太学者留下的智慧铭文，触摸它便能获得短暂的启迪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年一月的<strong>圣维森特节</strong>，是传说与现实的交汇点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们会抬着圣像游行，其中包含一个古老的仪式：向空中抛洒核桃。这个看似古怪的举动，源于一个感恩传说——在一次大饥荒中，正是野生核桃拯救了弗里亚斯的先民。核桃象征着坚韧的生命与社区的存续。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，如同蔓藤般缠绕着弗里亚斯的石墙。它们将自然险峻神化，将历史痕迹人格化，让这座冰冷的石头要塞，拥有了温热的脉搏和可以讲述的灵魂。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的弗里亚斯，是一座活着的<strong>中世纪化石</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值远不止于“最小城市”的噱头或悬崖城堡的明信片景观。行走在它的鹅卵石街道上，你踩踏的是<strong>卡斯蒂利亚边疆史诗的实体章节</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一阵掠过峡谷的风，都曾传递过摩尔骑兵的马蹄声与基督教骑士冲锋的号角。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的每道裂缝，都见证过领主与国王的权力博弈、市民为自治权的呐喊。桥梁的每块桥墩，都计算过商业的繁荣与封建义务的重量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有恢弘的都城叙事，只有边疆生存的浓缩精华：<strong>坚韧、独立、务实，以及在巨石与激流间开辟家园的惊人意志</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的小，恰恰反衬出它在历史天平上曾有过的、与体积极不相称的分量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂弗里亚斯，便是读懂了西班牙民族形成中一段粗粝而关键的地缘密码。它提醒我们，历史不仅由伟大的征服书写，更由这些扼守要冲、在夹缝中定义自我的“小巨人”所塑造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/royal-palace-of-olite-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥利特王宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Royal Palace of Olite</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alquezar-huesca-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔克萨尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alquézar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/university-of-salamanca-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨拉曼卡大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">University of Salamanca</p>
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
