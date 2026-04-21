import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里格斯堡历史溯源｜火山岩要塞的钢铁玫瑰与防御传奇',
  description: '屹立于火山岩之巅的里格斯堡，是奥地利东南部一部石头写就的史诗。探索其千年防御史、传奇女伯爵的统治，与对抗奥斯曼帝国的钢铁意志。小众欧洲秘境的前世今生。',
}

export default function RiegersburgCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '施泰尔马克州', href: '/destinations/europe' },
            { label: '里格斯堡', href: '/attractions/riegersburg-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`里格斯堡・Riegersburg Castle・奥地利・施泰尔马克州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥地利施泰尔马克州起伏的田园与葡萄园之间，一座黑色玄武岩山锥拔地而起，顶端刺破天际线的，正是被誉为“施泰尔马克之盾”的<strong>里格斯堡</strong>。它并非童话中王子公主的浪漫宫殿，而是一座彻头彻尾、为战争而生的岩石要塞。近千年来，它冷峻地凝视着来自东方的威胁，其故事交织着地质的奇迹、家族的野心与一位女性统治者的钢铁手腕。抛开游玩攻略，走进里格斯堡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`里格斯堡`} />
                <InfoRow label="英文名称" value={`Riegersburg Castle`} />
                <InfoRow label="正式名称" value={`Riegersburg Castle`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`施泰尔马克州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "里格斯堡的起源，首先是一部地球的剧变史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座高达482米的死火山岩锥，是远古火山活动的遗迹。坚硬的玄武岩构成了天然的、几乎不可攀登的防御基座，早在史前时代就吸引了人类的注意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于城堡最早的文字记载，出现在<strong>1138年</strong>。当时，它的名字以“Ruotkerspurch”的形式出现。这个名字的来源颇有深意，一般认为它源于一位名为“Rüdiger”或“Rüdigerus”的贵族。在古高地德语中，“-burg”意为城堡或要塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，“里格斯堡”本质上就是“<strong>吕迪格的城堡</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生，与奥地利东南部动荡的边疆史紧密相连。这里地处<strong>神圣罗马帝国</strong>的东南前沿，长期以来是抵御来自东方——先是匈牙利人，后是<strong>奥斯曼帝国</strong>——侵袭的关键防线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的木质堡垒就建立在岩石顶端，唯一目的就是军事警戒与控制山谷通道。城堡下方的村落缓慢发展，完全依附于山顶的军事存在。这不是一座为贸易或文化诞生的城市，而是一个为生存与防御而存在的战略据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其冷峻的地理位置与诞生使命，为它此后数百年的命运定下了基调。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "里格斯堡的历史，是一部不断加固、等待战火洗礼的编年史。它的城墙与塔楼，记录着两个核心主题：对东方威胁的持久恐惧，以及一位女性统治者将其化为“不落要塞”的决心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个深刻印记，是<strong>15至17世纪</strong>持续不断的军事化改造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早期简陋的木石结构被逐步替换。随着火器的发展，城墙必须加厚，塔楼需要改建以适应炮位。最重要的工程发生在<strong>1648年</strong>之后，即欧洲惨烈的<strong>三十年战争</strong>结束之时。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "讽刺的是，和平的到来并未让里格斯堡放松警惕。相反，战争期间<strong>奥斯曼帝国</strong>对中欧的多次大规模入侵（如1529年围攻维也纳），让东南部的贵族们心有余悸。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们生活在巨兽的阴影下，东方的沙尘随时可能卷土重来。”——一位当地编年史家的记载。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种持续的恐惧感，催化了里格斯堡最重要的变身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个核心印记，是它作为“<strong>奥斯曼边境要塞</strong>”的巅峰状态。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在传奇女伯爵<strong>凯瑟琳·伊丽莎白·魏克斯勒（Katharina Elisabeth von Wechsler）</strong> 的主持下，城堡在17世纪中叶经历了史上最宏大的扩建。她为城堡增加了<strong>三道独立</strong>的、带有重重闸门与射击孔的城墙防线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们沿着唯一的上山路径螺旋式布置，构成致命的死亡通道。最终，城堡拥有了<strong>3座宏伟城门、7座吊桥和多达108个炮窗</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座要塞从未在实战中被奥斯曼军队正面攻击过，但它日夜警备的状态，正是整个中欧在“土耳其威胁”下焦虑情绪的实体化身。它是一把始终出鞘、指向东方的利剑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是其功能的和平转变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着<strong>1683年</strong>奥斯曼帝国最后一次围攻维也纳失败，真正的威胁逐渐消退。到了<strong>18世纪</strong>，里格斯堡的军事重要性下降，开始更多地扮演领主宫殿的角色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "内部被装饰得更为宜居，但外部森严的防御体系被完整保留，成为一段峥嵘岁月的无声纪念碑。它从一座活跃的战备要塞，凝固成了一座纪念恐惧与坚韧的<strong>战争博物馆</strong>。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "里格斯堡的灵魂，与一位女性的名字牢牢绑定——<strong>凯瑟琳·伊丽莎白·魏克斯勒女伯爵（Katharina Elisabeth von Wechsler, 1607-1651）</strong>，当地人更常称她为“<strong>里格斯堡的女主人</strong>”或“<strong>钢铁玫瑰</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的传奇，始于一个悲剧性的开局。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>凯瑟琳</strong>出生在一个富裕的商人家庭，嫁给了里格斯堡的领主。然而，在<strong>三十年战争</strong>的混乱中，她的丈夫早逝，留下她独自掌管这片庞大的领地与这座至关重要的边境要塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当时由男性主导的贵族社会与战争事务中，一位寡妇女领主面临的挑战可想而知。但她不仅站稳了脚跟，更以惊人的魄力与远见，完成了丈夫未竟的事业。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的核心成就：将里格斯堡打造为“不落要塞”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "丈夫去世后，<strong>凯瑟琳</strong>没有选择改嫁或退隐，而是亲自担任起城堡的“总工程师”和防御指挥官。她深知要塞的弱点，并决心根除它们。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从<strong>1642年</strong>到<strong>1651年</strong>她去世前，一场规模空前的加固工程持续了近十年。她亲自监督设计，投入巨额个人财富。传说她每天都会巡视工地，对细节苛求完美。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“每一块石头都必须咬合，每一道铁闸都必须顺滑。这里将是吞噬敌人的巨口，而不是华而不实的玩具。”——民间流传的凯瑟琳语录。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她增建的三道城墙防线，被称为“<strong>凯瑟琳之带</strong>”。其中最内层、最坚固的城墙高达15米，厚度惊人。她甚至改革了守军的组织和训练，确保要塞在任何时候都能迅速进入战斗状态。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的个性与轶事：果决、虔诚与争议并存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "记载中她性格果决，甚至有些专断，在领地管理上手腕强硬。但她同时也是一位虔诚的天主教徒，在城堡内修建了小教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于她最著名的传说，与建造资金有关。为了筹集巨额工程款，据说她曾与<strong>魔鬼</strong>订立契约：魔鬼提供资金，但必须在天亮前用沙粒编成一条足以环绕城堡的绳索。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "机智的<strong>凯瑟琳</strong>令人在城堡塔楼养了一只公鸡，在午夜时分掐它，使其提前打鸣。魔鬼误以为黎明将至，任务失败，只得留下黄金悻悻离去。这个传说固然是民间杜撰，却生动反映了她“智取”困难、为达目的不惜一切的形象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1651年</strong>，44岁的凯瑟琳因肺炎去世，被安葬在里格斯堡的教堂内。她未能活着看到奥斯曼帝国威胁的最终消退，但她留下的这座超级要塞，成为了她意志的永恒丰碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在她之后，再没有任何攻击者敢于认真考虑挑战里格斯堡。这位“钢铁玫瑰”，用石头和钢铁，为自己和领地赢得了最终的安宁与尊敬。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了女伯爵与魔鬼的契约，里格斯堡的岩石本身也滋生着古老的传说。最流传甚广的，是关于城堡山诞生之谜的“<strong>女妖与魔龙</strong>”的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在很久很久以前，这片土地平坦而肥沃。一位美丽但性格乖张的<strong>女妖</strong>居住于此，她拥有强大的魔力，却对追求她的巨人们不屑一顾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了摆脱最痴情的一位巨人的纠缠，女妖设下了一个几乎不可能完成的任务：她要求巨人从遥远的深山，为她取来最纯净的泉水，且必须在日出前送达。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巨人奋力完成，捧着盛满泉水的水晶碗在破晓前赶回。就在他看到女妖身影的瞬间，第一缕阳光刺破天际。魔法契约生效，奔跑中的巨人、他手中的泉水，以及脚下的土地，瞬间被石化。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说中这样描述：“他的身躯化为黑色的山岩，碗中溅出的水花变成了环绕的雾气，而他永恒的追逐姿态，凝固成了陡然拔地而起的险峻山峰。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，这座孤山矗立在此。而那位女妖，据说因内疚或受魔法反噬，将自己变成了山巅的第一块基石。后来的人们在她奠定的基石上，修筑了城堡，并传说在暴风雨之夜，能听到风中传来她与巨人的叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡的<strong>水井</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在如此高的岩石顶端取得水源是生存关键。相传，建造者始终找不到地下水脉。一位老囚犯提出，若给他自由，他能找到水源。获得承诺后，他放出一只饥饿的<strong>驴子</strong>，驴子本能地在一处地面反复刨地，工人在那里向下挖掘，果然发现了甘泉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这口深达近百米的古井至今存在。这些传说，无论神秘还是质朴，都为这座刚硬的军事要塞，增添了一层属于民间的、充满想象力的柔软肌理。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客沿着“凯瑟琳之带”的古老步道向上攀登，触摸那些冰冷厚重的城墙时，触摸的不仅是一段中世纪建筑史，更是一种曾经笼罩欧洲数百年的集体生存焦虑，以及人类面对这种焦虑时所迸发的、近乎偏执的坚韧意志。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "里格斯堡的价值，正在于它的“不浪漫”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它坦诚地展示了欧洲历史的另一面：不是宫廷舞会与艺术沙龙，而是边境的烽火、长期的恐惧，以及用巨额财富与工程智慧堆砌出的生存保障。那位<strong>凯瑟琳女伯爵</strong>的故事，则是在这幅粗粝画卷中，勾勒出的一笔极其醒目而复杂的女性力量与领导力的传奇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂里格斯堡，便是读懂了施泰尔马克乃至奥地利东南部的灵魂底色——一种根植于土地、基于防御、最终在和平年代化为沉稳与富饶的深层性格。它傲然独立的身影，不再是战备的警示，而化为了一个关于毅力、远见与和平来之不易的永恒纪念碑。" }} />
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
              <a href="/attractions/innsbruck-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    因
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">因斯布鲁克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Innsbruck Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/friesach-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里萨赫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Friesach</p>
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
