import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '施泰尔历史溯源｜奥地利钢铁心脏的前世今生与铁器传奇',
  description: '探秘多瑙河畔的千年工坊小镇施泰尔。从铁器堡垒到文艺复兴瑰宝，跟随钢铁大亨与神秘传说，走进被时光凝固的中欧故事。',
}

export default function SteyrOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '施泰尔老城', href: '/attractions/steyr-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`施泰尔老城・Steyr Old Town・奥地利・上奥地利州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥地利静谧的上奥地利州，恩河与施泰尔河交汇之处，藏着一座被水流与火光定义的城市——施泰尔。它的故事，并非始于皇室宫殿或主教座堂，而是源于地底深处的铁矿与河中不息的动力。近千年来，这里锤声不断，火星四溅，将冰冷的金属锻造成财富与艺术，滋养出一片独特的“铁器文艺复兴”天地。<strong>钢铁</strong>，是它的血脉；<strong>河流</strong>，是它的韵律。抛开游玩攻略，走进施泰尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`施泰尔老城`} />
                <InfoRow label="英文名称" value={`Steyr Old Town`} />
                <InfoRow label="正式名称" value={`Steyr Old Town`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`上奥地利州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施泰尔的名字，源于穿城而过的施泰尔河。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这条河流不仅带来了风景，更带来了塑造其命运的宝藏：丰富的铁矿石与驱动水车的水力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的起源可追溯至一座城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在<strong>980年</strong>的一份捐赠文件中，就首次提到了“Stirapurhc”——施泰尔城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座建立在岩石山丘上的堡垒，最初用于控制恩河与施泰尔河交汇处这一战略要地，并保护附近的铁矿开采与冶铁活动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Steyr”这个名字本身，可能源于古凯尔特语，与“流动”或“湍急”有关，生动描述了这条河流的特性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从中世纪早期开始，这里便因地利而繁荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它位于重要的盐铁贸易路线上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来自阿尔卑斯山的盐，与本地冶炼的铁在此交换，骑士与商人穿梭于此，一个定居点围绕着城堡与河流逐渐形成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了12世纪，施泰尔已发展成为重要的市场和冶铁中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴本堡王朝的统治者们意识到了这里的价值，授予其市场权，城市雏形正式奠定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "水流推动巨锤，锻造着刀剑与盔甲，也为这座城市锻造了坚韧、务实且富足的基因。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施泰尔的历史，是一部由火、铁与流水书写的工业史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "几个关键印记，深深烙在了它的城市肌理与灵魂之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个不可磨灭的印记，是<strong>1720年</strong>成立的<strong>皇家施泰尔兵器厂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这并非偶然，而是数百年冶铁技艺的巅峰结晶。早在中世纪，施泰尔的铁匠就以锻造优质武器而闻名遐迩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当哈布斯堡王朝需要为其军队寻找可靠的精良装备供应商时，目光自然投向了这里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "兵工厂的建立，将施泰尔推向了欧洲军事工业的核心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它生产的步枪、手枪和大炮，装备了奥匈帝国的军队，其精湛工艺甚至赢得了国际声誉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座工厂不仅是经济支柱，更塑造了城市的社会结构，一代又一代的工程师、设计师和工匠在此生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到1987年才完全停止武器生产，但其建筑群至今仍是城市景观的一部分，诉说着钢铁年代的辉煌与沉重。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是它保存近乎完好的文艺复兴与巴洛克风格老城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这得益于17世纪后铁器贸易带来的巨大财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "富商们竞相建造华丽的城市宫殿，将利润转化为石头上的艺术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在市政厅广场，你会被色彩柔和的联排建筑立面所包围。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些建筑的山墙、凸窗和壁画细节，无不显示出主人的品味与财力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的当属<strong>伯默宅邸</strong>，其精美的文艺复兴式庭院和镌刻着行星符号的立面，被誉为“阿尔卑斯山以北最美丽的民用文艺复兴建筑”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一段古老的施泰尔谚语这样说道：“我们的财富来自地底，我们的力量来自流水，而我们的美丽，则来自智慧与双手。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个深刻的历史印记，是<strong>1934年的“施泰尔之秋”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥地利第一共和国动荡的末期，社会民主党人与政府军及保守武装力量在此发生了激烈冲突。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施泰尔的工人聚居区成为了主战场之一。这场内战虽然短暂，却异常残酷，给城市留下了深深的社会裂痕与集体记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它像一道阴影，提醒着人们工业化在带来繁荣的同时，也可能孕育尖锐的矛盾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，老城里一些建筑的墙面上，细心观察仍可能发现当年的弹痕，它们是沉默而沉重的历史见证者。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在施泰尔，财富与文化的顶峰，往往由那些精通金属与市场的巨擘所定义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中，<strong>卡尔·伯默</strong>的一生，便是这座城市黄金时代最鲜活的注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>卡尔·伯默</strong>并非贵族出身，而是凭借超凡的商业头脑，在铁器贸易中建立起庞大的帝国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他生活在16世纪，那正是施泰尔因上奥地利地区“铁器垄断”而富甲一方的时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伯默的生意网络横跨欧洲，他将施泰尔优质的铁制品——从钉子到火炮——运往威尼斯、纽伦堡甚至更远的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巨额财富使他成为当时中欧最富有的人之一，人称“铁器之王”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他留给施泰尔最宝贵的遗产，并非仅仅是金钱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1573年至1577年</strong>，他出资建造了那座以其命名的<strong>伯默宅邸</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这并非一座炫耀财富的冰冷宫殿，而是一件融合了文艺复兴人文精神的建筑杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "建筑立面上精美的湿壁画、雕刻繁复的凸窗，尤其是庭院中优雅的拱廊，都体现了意大利文艺复兴风格的影响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更值得一提的是，伯默曾担任施泰尔的市长，并以其财富慷慨支持城市建设和慈善事业。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的宅邸不仅是个居所，更是一个文化沙龙，吸引了当时许多学者与艺术家。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在一份保存下来的城市档案中，记载着伯默的捐赠：“为使本市学童及贫困者受益，特设立永久基金……” 他的影响力，深深渗透于城市的公共生活之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与施泰尔紧密相连的名人，是<strong>约翰·迈因拉特·卢伊格</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位17世纪的雕塑家，虽然名气不及伯默显赫，却用双手塑造了这座城市巴洛克式的面容。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卢伊格是土生土长的施泰尔人，他的工作室就设在这里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的作品遍布奥地利许多教堂，但在故乡的印记最为集中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城内数座精美的<strong>瘟疫柱</strong>和<strong>许愿柱</strong>，都出自他和他的作坊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些宗教纪念柱通常位于广场中央，雕刻着繁复的圣像，旨在感谢上帝在瘟疫流行后拯救了城市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的是位于市政厅广场的<strong>圣三位一体纪念柱</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卢伊格的艺术，将信仰、社区的感恩与巴洛克艺术的戏剧性表达融为一体，为这座务实工业城增添了神圣与灵性的维度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过伯默的资本与卢伊格的艺术，施泰尔向我们展示了文艺复兴与巴洛克时代，一个工商业城市如何孕育出独特的、植根于市民文化的璀璨文明。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在锤声与流水之间，施泰尔人也编织着充满想象力的传说，为坚硬的现实披上一层奇幻的面纱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说与城市徽章上的<strong>白色独角兽</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在遥远的过去，施泰尔的领主在森林中狩猎时，遇到了一头纯洁而罕见的白色独角兽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这头神兽没有逃跑，反而温顺地引领领主走出密林，来到一处风景优美、资源丰饶之地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "领主将此视为神圣的启示，决定在此建立家园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，白色独角兽便成为施泰尔守护与吉祥的象征，被镌刻在城市的徽章上，凝视着河流与街巷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说柔化了城市刚硬的工业形象，注入了一丝神秘与优雅的灵性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更贴近市井生活，与施泰尔河上的一座老磨坊有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，从前有一位贪婪的磨坊主，总是克扣顾客的面粉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "河神为了惩罚他，让磨盘在半夜自行转动，发出轰隆巨响，却磨不出半点面粉，直到磨坊主悔改并做出补偿为止。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个故事代代相传，提醒着人们诚信经商的古老准则。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至于那些深夜仍在老城巷道里回响的、似有似无的脚步声？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老人们会说，那或许是昔日铁匠的英灵，依旧惦念着他们未完成的活计，在月光下巡视着他们深爱的作坊与城市。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的施泰尔老城，安静得出奇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锤击声已逝，兵工厂沉寂，只留下恩河与施泰尔河永恒的潺潺水声，以及一片被时光精心封存起来的建筑瑰宝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在卵石街道上，你触摸到的每一块墙砖，可能都浸透着铁矿的微粒；仰望的每一扇凸窗，都反射着昔日铁器贸易的鎏金岁月。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的历史不是教科书上宏大的叙事，而是一部关于<strong>技艺、商业、社区信仰与动荡</strong>的微观史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它告诉你，欧洲的文艺复兴不只发生在佛罗伦萨的宫廷，也发生在这座阿尔卑斯山下的工业城镇，由富商和工匠共同书写。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它让你看到，工业革命的血与火之前，手工业时代曾达到怎样一种技术与艺术、财富与文化的精致平衡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂施泰尔，便是读懂了欧洲心脏地带另一种深沉而有力的脉搏——一种源自大地、经由双手创造、最终凝结为生活之美的力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小众之城，是一座活化石，珍藏着一个关于铁与火、水与石、人与其创造的永恒故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tratzberg-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特拉茨堡城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tratzberg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hardegg-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈德格城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hardegg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/volkermarkt-drava-valley-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔克马克特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Völkermarkt</p>
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
