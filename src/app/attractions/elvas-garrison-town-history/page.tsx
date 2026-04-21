import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃尔瓦什历史溯源｜星形要塞的前世今生与边境传奇',
  description: '深入葡萄牙“铁边城”埃尔瓦什。揭秘世界最大星形堡垒的建造秘辛、血与火的围城史诗，以及改变欧洲军事史的荷兰工程师传奇。',
}

export default function ElvasGarrisonTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '埃尔瓦什', href: '/destinations/europe' },
            { label: '埃尔瓦什星形要塞', href: '/attractions/elvas-garrison-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃尔瓦什星形要塞・Garrison Border Town of Elvas・葡萄牙・埃尔瓦什`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙与西班牙犬牙交错的边境线上，<strong>埃尔瓦什</strong>如同一枚被遗忘的钢铁铆钉，死死楔入大地。它不是一座普通的城镇，而是一台为战争而生的精密机器，一个将几何学、水利学与军事野心浇筑成实体的庞大工程。其<strong>星形堡垒群</strong>的规模冠绝全球，沉默的城墙下，埋葬着数百年伊比利亚半岛的权力博弈。抛开游玩攻略，走进埃尔瓦什的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃尔瓦什星形要塞`} />
                <InfoRow label="英文名称" value={`Garrison Border Town of Elvas`} />
                <InfoRow label="正式名称" value={`Garrison Border Town of Elvas`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`埃尔瓦什`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃尔瓦什的故事，始于公元8世纪<strong>摩尔人</strong>的铁蹄。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当北非的穆斯林大军渡过直布罗陀海峡，席卷伊比利亚半岛时，这片俯瞰瓜迪亚纳河谷的战略高地，被敏锐的军事家一眼相中。他们在此建立了一座名为 <strong>“Yalbas”</strong> 的城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字，正是今天“Elvas”的语源。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的用途纯粹是军事哨站，用于监控河谷，拱卫后方更重要的城市。<strong>1229年</strong>，在葡萄牙建国国王<strong>阿方索一世</strong>及其继任者持续南征的“再征服运动”中，埃尔瓦什终于被基督教军队从摩尔人手中夺取。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，它的命运彻底改变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从一座伊斯兰前沿据点，转变为<strong>基督教王国对抗邻国卡斯蒂利亚（西班牙前身）的边境铁闸</strong>。它的名字被拉丁化，但其军事DNA从未改变。地理决定命运，埃尔瓦什因边界而生，也因边界而成为传奇。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：从中世纪城堡到几何堡垒的革命 (17世纪)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫长的中世纪，埃尔瓦什依靠的是摩尔人留下的城堡和不断加高的城墙。然而，<strong>火药与大炮</strong>的普及，让垂直高墙变得不堪一击。1640年葡萄牙恢复独立后，面对虎视眈眈的西班牙，加固埃尔瓦什成为国之急务。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "国王若昂四世请来了当时欧洲最顶尖的军事工程师——<strong>荷兰人若昂·帕斯卡西奥·科斯芒德</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他带来的，是荷兰学派先进的<strong>星形棱堡防御体系</strong>。这种体系将城墙设计成锯齿状的三角形棱堡，形成无死角的交叉火力网，并能有效抵消炮弹的冲击。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "科斯芒德在报告中写道：“城墙不应畏惧炮弹，而应拥抱它、引导它、消耗它的力量。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一场持续数十年的“外科手术”开始了。古老的城墙被包裹、重塑，城外挖掘出深邃的护城河与<strong>气势恢宏的“阿莫雷拉水道桥”</strong>（为被围困的城池提供永不干涸的水源）。埃尔瓦什从一座城堡，蜕变为一件令人望而生畏的<strong>几何战争艺术品</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：决定国运的三次围城战</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座堡垒的价值，在战火中得到终极检验。其中最惨烈的是<strong>1659年的埃尔瓦什围城战</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，西班牙名将<strong>唐·路易斯·德·哈罗</strong>率领一万七千精兵，携重炮兵临城下，意图拔掉这颗钉子，直捣里斯本。守城的是<strong>圣伊格纳西奥伯爵</strong>，兵力仅有不足九千。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围城持续了<strong>两个月</strong>。炮火将外围工事犁了一遍又一遍，但星形棱堡的韧性超乎想象。每一次看似成功的突破，都会陷入侧面棱堡交叉火力的屠杀区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，葡萄牙援军抵达，在<strong>蒙特克拉鲁战役</strong>中内外夹击，大败西班牙军队。此役彻底粉碎了西班牙收复葡萄牙的企图，被视为葡萄牙独立的定鼎之战。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后的1712年、1801年，埃尔瓦什又经历了两次重大围城，均固若金汤。它用石头与泥土，一次次捍卫了一个小国的独立与尊严。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>若昂·帕斯卡西奥·科斯芒德：改变葡萄牙边境的荷兰大师</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃尔瓦什，你几乎找不到一栋与他无关的标志性防御建筑。<strong>科斯芒德</strong>，这位原名<strong>Jan (João) Paschasis Cohen</strong>的荷兰犹太人，是串联起这座城市所有传奇的工程师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的生平充满漂泊色彩。作为一名新教徒和军事工程天才，他在三十年代战争期间服务于荷兰共和国。1640年后，被急需人才的葡萄牙重金聘请。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的任务清晰而艰巨：<strong>将整个东部边境，从埃尔瓦什到埃斯特雷莫兹，打造成一条不可逾越的“钢铁防线”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃尔瓦什，他倾注了毕生心血。他不仅设计了核心的<strong>圣母格拉萨堡垒</strong>（Forte de Nossa Senhora da Graça）——这座被誉为“棱堡防御艺术皇冠明珠”的杰作，还全面改造了旧城防御体系，并主持修建了长达8公里、拥有843拱的<strong>阿莫雷拉水道桥</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在他的工程日志里，充满了对细节的偏执：“第七棱堡的斜坡角度必须再减少半度，否则冬季雨水冲刷会暴露基底。”“水渠的砂浆中必须加入本地特定的粘土，我知道它在哪里。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，天才往往与悲剧相伴。由于工程耗资巨大、进度严格，他与管理市政的贵族及教会关系紧张。<strong>1678年</strong>，在视察工地时，他被一群蒙面人袭击并杀害。凶手从未被正式追查，但普遍认为与他触及的地方利益有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>路易斯·德·卡蒙斯之影：被流放的爱国诗魂</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然民族诗人<strong>路易斯·德·卡蒙斯</strong>最著名的流放地是澳门，但历史学者认为，他坎坷的一生中，可能因卷入宫廷争斗，在1550年代初期曾被短暂流放至<strong>埃尔瓦什</strong>边境驻军。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座荒凉、紧张、充满大兵与尘土的边境要塞，与里斯本的绮丽繁华形成惨烈对比。这段经历虽无确切文献记载，却为理解他的史诗《卢济塔尼亚人之歌》提供了另一种注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诗中洋溢的对祖国深沉的忧虑与捍卫之志，或许正是他在埃尔瓦什的城墙上，眺望敌国土地时，酝酿出的最真实情感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他后来在诗中写道：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“啊！我的祖国，卢济塔尼亚！" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "你是否知道，你的儿女为你承受了多少……？”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃尔瓦什，可能就是这声叹息最早响起的地方之一。这座城市不仅是物理的屏障，也成为了葡萄牙民族精神的一个淬火之地。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在埃尔瓦什坚硬如铁的外表下，流传着一个充满柔情与象征的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人相信，城市<strong>星形的布局</strong>，并非完全出于军事计算。相传，在古老的摩尔时代，一位名叫<strong>埃莉莎</strong>的基督教女俘被囚禁在城堡中。她夜夜眺望北方故乡的星空，泪珠滴落在地上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的虔诚感动了天使。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一夜，天使降临，指引她看到天空中的<strong>七颗星辰</strong>排列成独特的盾形。天使说：“依此形状筑城，将获神佑，永不可摧。”埃莉莎将图案秘密传递给前来营救她的基督徒骑士。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "后来，基督教王国收复此地，建筑师们在规划新城时，偶然发现了埃莉莎留下的石刻星图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们惊异地发现，这种多角星形布局，在军事上能完美化解各方向的攻击。于是，“神授星形”的传说与“科学堡垒”的现实合二为一，成为埃尔瓦什人深信不疑的起源。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，在老城的某些古老石墙上，游客仍被指引去寻找那传说中的<strong>七颗星星的原始刻痕</strong>。它代表了这座城的双重灵魂：既是信仰的馈赠，也是人类智慧的结晶。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在埃尔瓦什，你行走的并非街道，而是一道道<strong>弹道轨迹</strong>与<strong>火力计划线</strong>。每一处棱堡的转角，都是一次冷静的计算；每一寸厚墙，都吸收过历史的怒吼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有慵懒的南欧风情，只有一种绷紧的、理性的、为生存而战的庄严之美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座将“防御”二字书写到极致的城市丰碑。读懂埃尔瓦什，就是读懂小国在大国夹缝中，如何用最极致的智慧与坚韧，捍卫自身存在的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它冷峻、沉默，却震耳欲聋。当你站在格拉萨堡垒的制高点，俯瞰这由几何图形主宰的苍茫大地，你看到的不仅是风景，更是一部立体摊开的<strong>欧洲军事工程史与地缘政治史</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/foz-do-arello" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    福
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">福斯-杜阿雷柳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Foz do Arelho</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castelo-de-vide-judaica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特卢-迪维迪（阿连特茹的犹太遗风小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelo de Vide</p>
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
