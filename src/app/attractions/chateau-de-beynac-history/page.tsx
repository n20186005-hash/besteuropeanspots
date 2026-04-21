import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝纳克城堡历史溯源｜法国多尔多涅河鹰巢的战争史诗、贵族传奇与石头记忆',
  description: '探秘法国“最美乡村”的守卫者。聆听多尔多涅河上方鹰巢里，交织着英法百年战争、狮心王传说与中世纪领主恩怨的石头史诗。不止于风景。',
}

export default function ChateauDeBeynacHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '多尔多涅省', href: '/destinations/europe' },
            { label: '贝纳克城堡', href: '/attractions/chateau-de-beynac-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝纳克城堡・Château de Beynac・法国・多尔多涅省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说多尔多涅河谷是法兰西最柔美的画卷，那么<strong>贝纳克城堡</strong>便是钉在这幅画卷最险峻处的一枚铁血勋章。它并非童话中的宫殿，而是一座真正的、为战争而生的“鹰巢”。近千年来，它冷峻的岩石肌理，记录着金雀花王朝与卡佩王朝的对抗、领主间的权谋，以及一个边境地区在血火中锤炼出的独特灵魂。抛开游玩攻略，走进这座悬崖要塞的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝纳克城堡`} />
                <InfoRow label="英文名称" value={`Château de Beynac`} />
                <InfoRow label="正式名称" value={`Château de Beynac`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`多尔多涅省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝纳克的起源，深埋在<strong>公元12世纪</strong>的迷雾与战略需求之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的建造者已不可考，但城堡出现的逻辑清晰如岩壁本身：此处有一块近乎垂直的石灰岩巨崖，俯瞰多尔多涅河一个关键的弯道。在陆路交通受限的中世纪，河道就是天然的高速公路。谁控制了这个制高点，谁就扼住了上下游的咽喉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字“Beynac”，最早的文字记录可追溯到<strong>1115年</strong>。主流观点认为，它源于当时领主的家族名。最早的领主之一，<strong>阿代马·德·贝纳克</strong>，是一位典型的边境男爵。他的“国家”并非广袤的法兰西，而是脚下这片能够征税、驻军、彰显权威的悬崖与河谷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡最初的形态远比今天朴素。核心是那座至今屹立的<strong>主塔</strong>。它并非为了舒适，而是为了瞭望与最后的顽抗。岩石本身就是城墙，节省了无数建材。城堡的建立，标志着对这片土地系统化控制的开始，一个以军事威慑为核心的微型权力中心就此诞生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里从不是繁华市镇，它生来就是堡垒、是前哨、是权力的獠牙。它的“冷门”，恰恰因为它从未褪去那身中世纪戎装，固执地以最初的姿态，讲述着边境领主的故事。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝纳克城堡的岩石，是镌刻英法百年战争史诗的石板书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>12世纪末</strong>，这片地区因婚姻继承，卷入了更大的政治漩涡。阿基坦女公爵<strong>埃莉诺</strong>先嫁法王，后嫁英王亨利二世，使包括贝纳克在内的大片西南法领土成为英王领地。城堡自此成了<strong>金雀花王朝</strong>在法国腹地的一颗尖钉。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“国王（理查一世）高度重视多尔多涅河沿岸的堡垒，尤其是贝纳克。它像一把匕首，抵在法兰西国王的喉间。” —— 后世编年史家评述" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的烈火试炼在<strong>1337-1453年</strong>的百年战争期间到来。贝纳克所在的佩里戈尔地区，成了双方反复拉锯的战场。城堡因其易守难攻，被英军长期占据。而河对岸不到两公里的<strong>卡斯特尔诺城堡</strong>，则牢牢控制在法军手中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "两岸对峙，近在咫尺。这创造了战争史上一幕奇观：两个敌国的哨兵，可以清晰看见对方城堡炊烟；两边的领主，在同一个市场采购货物，却又在战场上兵戎相见。贝纳克成为了漫长冲突中最具象征意义的边境线之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>14世纪</strong>，法王查理五世麾下的名将<strong>贝特朗·杜·盖克兰</strong>曾试图收复此地，但面对天险也束手无策。城堡的陷落，并非源于强攻，而是随着战争全局的扭转，在<strong>15世纪</strong>才最终回到法兰西王权之下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个深刻印记，则来自更早的<strong>13世纪</strong>。当时的领主<strong>阿代马·德·贝纳克</strong>，是一位狂热的十字军战士。为筹集东征的巨额资金，他授予山脚下村庄以“自由特许状”，赋予了市民更多权利以换取税收。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一举动，意外地促进了贝纳克村的萌芽与发展。军事堡垒的脚下，第一次因领主的“金融操作”而生长出和平的聚落。战争与生存，在这片悬崖上下，以如此现实的方式交织在一起。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝纳克的传奇，与两位中世纪巨擘的命运紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位是<strong>“狮心王”理查一世</strong>。这位以勇武著称的英格兰国王，同时也是阿基坦公爵。在成为英王前后，他花费大量时间经营其在法国的领地，尤其是像贝纳克这样的边境要塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1189年</strong>，理查的兄弟<strong>无地王约翰</strong>曾联合法王腓力二世，阴谋夺取他的领地。叛乱的中心之一就在佩里戈尔。有充分间接证据表明，贝纳克城堡在这场王室内部斗争中扮演了关键角色。理查在平叛后，必然加固和依赖这些堡垒，以防范来自巴黎的威胁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "理查对贝纳克的重视，源于其深刻的战略眼光。他深知，在欧陆的统治，不取决于伦敦的议会，而取决于像贝纳克这样扼守要冲的石堡。他本人或许曾驻跸于此，在如今已湮灭的木制回廊中，谋划着下一次征战。城堡的森严与险峻，与“狮心王”的个人气质无比契合。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“他（理查）珍视坚固的堡垒胜过繁华的城市。在那里，他感到安全，并能将意志如投石机射出的石块般，投向远方。” —— 中世纪传记片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位无法绕开的显赫人物，是<strong>阿基坦的埃莉诺</strong>。虽然她本人可能从未踏入贝纳克城堡，但她的两次婚姻，从根本上决定了城堡此后三百年的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为阿基坦女公爵，她是贝纳克领主名义上的最高封君。当她将阿基坦作为嫁妆带入英王室时，贝纳克便自动成为了英王在法的采邑。埃莉诺漫长、波澜壮阔的一生——从法国王后到英国王后，再到辅佐儿子理查的太后——其政治余波持续震荡着这座边塞城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的孙子，英王<strong>亨利三世</strong>，在<strong>13世纪中叶</strong>进一步确认了贝纳克领主的特权。这份由遥远英格兰国王签署的羊皮纸文件，保障了领主对河谷的统治权。一位从未到访的女公爵，通过她的血脉与婚约，为一座悬崖城堡注入了跨越海峡的纷争基因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，城堡本身也孕育了自己的强势领主。<strong>16世纪</strong>的领主<strong>波尔多·德·贝纳克</strong>，是法国文艺复兴时期的一位重要军事人物和艺术赞助人。他主持了城堡从纯粹军事要塞向更具居住舒适性的文艺复兴风格宅邸的转变，增加了那些大型的哥特式窗户。是他，在战争的铁砧上，轻轻敲入了一丝人文时代的气息。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "坚硬的岩石，包裹着柔软的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说关乎城堡的<strong>“白夫人”</strong>。据说，一位贝纳克家族的小姐，与河对岸卡斯特尔诺城堡的年轻领主相爱。这对恋人，恰好身处百年战争敌对的两方。家族的世仇与国家的战争，将他们无情隔绝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无法相见的情人，只能每日在城堡最高的塔楼窗前，遥望对方城堡的灯火，以慰相思。最终，在绝望与忧伤中，贝纳克的小姐香消玉殒。她的灵魂化为一位身着白衣的幽灵，至今仍会在夜深人静时，出现在塔楼的窗边，凝望着永远无法跨越的河流与敌意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，为两岸城堡的残酷对峙，增添了一抹凄美的人文底色。它将宏大的历史叙事，浓缩为一对普通男女的爱情悲剧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡小礼拜堂内的<strong>黑圣母像</strong>有关。这尊木雕的圣母像因年代久远而被熏染成深色。当地流传，这尊圣母像具有保护之力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中世纪一场惨烈的围城战中，守军粮尽援绝。虔诚的领主夫人向黑圣母祈祷。当夜，敌营中爆发不明原因的瘟疫，围困被迫解除。从此，黑圣母被尊为城堡的守护神。这一传说反映了中世纪人们将信仰与生存紧密结合的心理，在绝境中寻找精神支柱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "悬崖之下，多尔多涅河也有自己的水妖传说。农夫们相信，在晨雾弥漫河面时，需对河流保持敬畏。这些代代相传的口头故事，让贝纳克刚毅的历史线条，变得丰满而生动，充满了人间烟火的气息。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客气喘吁吁地攀上最后一级台阶，站在贝纳克城堡的庭院中，他所站立的，远不止是一个“观景平台”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他脚下是历代领主夯实的地基，眼前窗户是文艺复兴领主对光明的渴望，而对面悬崖上的卡斯特尔诺城堡，则是一个持续了百年的战争对视。这里的每一块石头，都不是静物；它们是在低语的金戈铁马，是凝固的边境紧张，是贵族家族的野心与哀愁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂贝纳克，就是读懂中世纪欧洲权力博弈的微观样本。它没有凡尔赛的奢华，没有香波堡的奇想，它只有真实的、粗粝的、关于生存与控制的故事。它的魅力，正在于这份未经修饰的诚实。它让你触摸到的，不是一段被美化的宫廷罗曼史，而是一部用岩石写就的、关于边境、忠诚、背叛与坚韧的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史从未褪色，它只是随着多尔多涅河的雾气，每日清晨再次降临在这座鹰巢之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-vitre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维特雷城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Vitré</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/conques-abbey-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔克修道院与小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Conques Abbey and Village</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/monpazier-bastide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒙帕齐耶</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Monpazier</p>
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
