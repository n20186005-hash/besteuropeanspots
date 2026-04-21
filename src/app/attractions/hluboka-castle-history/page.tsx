import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '赫卢博卡城堡历史溯源｜捷克温莎的纯白宫殿、两大家族传奇与爱情故事',
  description: '走进捷克最浪漫的纯白城堡——赫卢博卡。它并非一蹴而就的童话，而是施瓦岑贝格家族百年野望与悲欢的结晶，藏着一部中欧权力更迭的秘史。',
}

export default function HlubokaCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '南波希米亚州', href: '/destinations/europe' },
            { label: '赫卢博卡城堡', href: '/attractions/hluboka-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`赫卢博卡城堡・Hluboká Castle・捷克・南波希米亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在捷克南波希米亚起伏的森林与池塘之间，一座纯白色的梦幻城堡如同天鹅般栖息在山丘上。它被世人誉为“捷克的温莎”，是Instagram上令人屏息的风景。然而，这身浪漫的“新哥特式”华服，仅仅是它生命最后且最华丽的一章。它的基石之下，沉积着近八个世纪的权力尘埃——从波希米亚国王的边境堡垒，到哈布斯堡权贵的狩猎行宫，最终成为<strong>施瓦岑贝格</strong>家族攀爬至权力顶峰的终极宣言。白色石膏之下，是灰色的权力博弈与一个家族长达两百年的悲欢离合。抛开游玩攻略，走进赫卢博卡的尘封往事，遇见属于它的野心、爱情与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`赫卢博卡城堡`} />
                <InfoRow label="英文名称" value={`Hluboká Castle`} />
                <InfoRow label="正式名称" value={`Hluboká Castle`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南波希米亚州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "赫卢博卡并非一座城市，而是一座与领地同名的城堡。它的故事始于中世纪波希米亚王国扩张的锋刃之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>13世纪中叶</strong>，波希米亚国王<strong>瓦茨拉夫一世</strong>或其子<strong>普热米斯尔·奥托卡二世</strong>，决定在此建造一座坚固的皇家城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选址极具战略眼光。它矗立在伏尔塔瓦河畔陡峭山崖上，俯瞰着南下的重要商路，成为王国南部边境的一道壁垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡最初的名称并非“Hluboká”（意为“深的”）。它被称为“Froburg”或“Frauenberg”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于现名的由来，最主流的说法指向其地理特征。城堡建于<strong>深邃（Hluboká）的河谷</strong>之上，或附近有<strong>深邃的森林</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一种更富政治隐喻的说法则认为，“深”可能暗示其作为王室领地的<strong>深厚根基</strong>与难以撼动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在漫长的岁月里，这座城堡的用途远超军事。它很快成为管理周边广袤森林、池塘与村庄的行政中心，一个微型权力枢纽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的石质堡垒是典型的哥特风格，阴郁而坚实，与今日的纯白浪漫毫无关联。它是一枚钉在领土上的铁钉，而非一件艺术品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生，本身就是一部边疆开拓史的冰冷注脚，是王国力量向自然与潜在对手“深”处延伸的触角。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "赫卢博卡的第一枚深刻印记，来自哈布斯堡王朝的权杖。<strong>16世纪</strong>，它被赠予贵族<strong>威廉·冯·罗森伯格</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位显贵将其改造为舒适的文艺复兴式宫殿，阴郁的堡垒初次透出人文主义的光亮。然而，家族的男性血脉在此断绝。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间流传着“罗森伯格五瓣玫瑰”最终凋零的哀歌。据说最后一位领主<strong>彼得·沃克·冯·罗森伯格</strong>去世前，曾梦见家族纹章上的玫瑰一瓣瓣飘落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正将城堡命运彻底扭转的事件，发生在<strong>1661年</strong>。来自巴伐利亚的豪门——<strong>施瓦岑贝格家族</strong>，购得了这片产业。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "购入赫卢博卡，是这个家族在波希米亚站稳脚跟、跻身顶级权贵的关键一步。城堡成为了他们庞大的地产网络中的明珠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但让它脱胎换骨的，是<strong>19世纪</strong>的浪漫主义浪潮与一次英国之旅。<strong>约翰·阿道夫二世公爵</strong>与夫人<strong>埃莉诺</strong>在1830年代访问了英国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "温莎城堡的恢弘哥特复兴风格，深深震撼了公爵夫妇。他们决心要拥有一个“捷克的温莎”，作为家族无上荣耀与品味的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自<strong>1840年起</strong>，一场持续数十年的浩大改建工程开始了。著名的维也纳建筑师<strong>弗朗茨·比尔</strong>被委以重任。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪与文艺复兴的结构被彻底包裹、改造。外观被统一为纯净的英式<strong>都铎哥特风格</strong>，无数尖塔、雉堞与浮雕使其宛如童话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "内部则极尽奢华，拥有超过140个房间。橡木镶板、珍贵挂毯、威尼斯玻璃枝形吊灯，以及当时最先进的<strong>中央供暖、抽水马桶和燃气照明系统</strong>，使其成为中欧最现代的宫殿之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，最后一个历史印记充满了转折。<strong>1947年</strong>，根据战后特殊的《财产转移法》，城堡被捷克斯洛伐克国家没收。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施瓦岑贝格家族超过两百年的经营戛然而止。城堡作为国家文化遗产向公众开放，其私人传奇凝固为公共的历史记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从皇家堡垒到贵族私邸，从浪漫主义杰作到国家博物馆，赫卢博卡的每一次易主与改建，都是一页中欧政治与美学史的缩影。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "赫卢博卡最动人的灵魂，不属于某位征战沙场的将军，而属于一位女性——<strong>埃莉诺·施瓦岑贝格公爵夫人</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她原名<strong>埃莉诺·冯·列支敦士登</strong>，出生于1812年，来自欧洲最古老的贵族家庭之一。1841年，她嫁给了<strong>约翰·阿道夫二世·冯·施瓦岑贝格</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场婚姻是顶级贵族间的强强联合。但埃莉诺带来的，远不止血统与嫁妆。她是一位极具艺术天赋、情感丰沛且意志坚定的女性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是她，而非她的丈夫，被后世学者认为是赫卢博卡城堡浪漫转型的<strong>真正艺术灵魂与核心推动者</strong>。她深厚的艺术修养，主导了内部装饰的审美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她亲自参与设计，从墙布的花纹到家具的雕饰，都浸润着她的品味。城堡内令人叹为观止的<strong>木雕楼梯</strong>和图书馆，被认为是她艺术愿景的直接体现。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在她的日记中，曾如此写道：“我想创造的不是一座冰冷的纪念丰碑，而是一个有温度的家。每一处雕花，都应诉说着美与安宁。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这位在艺术上取得巨大成功的女性，个人生活却充满了悲剧色彩。她与丈夫约翰·阿道夫二世的婚姻，更多是基于责任而非爱情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她将全部的情感倾注于子女，尤其是她的长女<strong>保琳</strong>。保琳美丽聪慧，是母亲的骄傲与慰藉，母女关系极为亲密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但命运给予了最残酷的打击。1856年，年仅15岁的保琳因肺炎突然病逝，就死在赫卢博卡城堡的房间里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一击彻底摧毁了埃莉诺。她陷入无尽的悲伤，健康迅速恶化。仅仅三年后，<strong>1859年</strong>，年仅47岁的埃莉诺便在赫卢博卡香消玉殒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，她去世的房间窗口，正对着城堡庭院中她最心爱的一棵古树。她的离世，仿佛也带走了城堡改造工程中最鲜活的灵气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的丈夫约翰·阿道夫二世，虽然在政治上更加活跃（曾担任波希米亚议会议长），但在城堡的故事中，他更像是妻子艺术蓝图的执行者与资助人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他完成了改建，并在城堡中陈列其丰富的狩猎战利品和武器收藏，展现了家族尚武与掌控自然的一面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这对夫妇共同塑造了赫卢博卡：埃莉诺赋予其内在的<strong>艺术之魂与情感深度</strong>，而约翰·阿道夫则彰显了家族外在的<strong>权力与财富</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，游客在惊叹于城堡的奢华时，或许会在某个精致的闺房或面对一幅家族肖像时，依稀感受到那位才华横溢却命运多舛的公爵夫人，无声的存在与叹息。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在赫卢博卡，最深入人心的并非幽灵故事，而是关于施瓦岑贝格家族<strong>纹章</strong>的勇武传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "家族的纹章上，绘有一只<strong>乌鸦正在啄食一名土耳其士兵的眼睛</strong>。这个看似凶暴的图案，源于一次真实的战役。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事发生在<strong>1599年</strong>的匈牙利战场。当时施瓦岑贝格家族的祖先<strong>阿道夫·冯·施瓦岑贝格</strong>，正率军与奥斯曼土耳其军队作战。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在激烈的拉布河战役中，阿道夫英勇作战，成功夺取了土耳其人固守的<strong>劳堡</strong>。这场胜利为他赢得了巨大的荣誉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了永久纪念这次胜利，神圣罗马帝国皇帝<strong>鲁道夫二世</strong>在<strong>1599年7月</strong>特别授予施瓦岑贝格家族新的纹章权利。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "授勋诏书中写道：“……为彰其卓著功勋，特准在其原有纹章之上，增绘一黑色乌鸦，正啄食一倒地突厥士兵之首级，因其攻占之堡垒名为‘劳堡’（‘Raben’在德语中意为乌鸦）。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在战斗中，一只乌鸦神奇地出现，啄瞎了正欲偷袭阿道夫的土耳其士兵的眼睛，从而救了他的性命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“乌鸦啄眼”的图案从此成为家族勇猛、忠诚与受上天眷顾的象征。这个纹章被骄傲地展示在赫卢博卡城堡的各个角落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你可以在外立面的浮雕、铁艺大门、室内挂毯甚至餐具上，反复看到这只乌鸦的身影。它不再是恐怖的景象，而成了守护的图腾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说将家族的赫赫战功与城堡的装饰艺术紧密相连。每一只石雕乌鸦，都在无声地讲述着家族先祖的武勋与荣耀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它也让游客明白，这座看似柔美的白色宫殿，其根基依然深深扎在中欧基督教世界与奥斯曼帝国漫长冲突的历史土壤之中。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们漫步于赫卢博卡光洁的大理石走廊，惊叹于水晶吊灯的光芒时，我们阅读的是一部以石头、木材与石膏写就的编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它见证了波希米亚王国从独立到并入哈布斯堡版图的沧桑，见证了旧贵族在工业革命新时代下，如何用建筑来重申自己的文化领导权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "施瓦岑贝格家族通过这座城堡，完成了一次从军事-土地贵族向文化-政治贵族的精彩转型宣言。它不止是家宅，更是权力的文化剧场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，它也从私人家族史诗，转变为整个民族的共同文化遗产。从“施瓦岑贝格的赫卢博卡”到“捷克的赫卢博卡”，其归属的变迁本身，就是20世纪中欧历史剧变的缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂赫卢博卡，便是读懂了一种复杂的中欧性：它是德意志的文化浪漫、捷克的土地根基与欧洲贵族普世品味的奇妙融合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，拜访这里，远不止是打卡一张明信片风景。它是与一段未远去的旧世界进行一次深度对话。在纯白的外表下，触摸历史的厚重肌理与人性温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "下次当你举起相机，不妨先放下。想一想那位倾注心血的埃莉诺夫人，想一想纹章上那只乌鸦的古老传说。你会发现，眼前的城堡，瞬间有了生命与呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/karlovy-vary-colonnades" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡罗维发利温泉回廊</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Karlovy Vrum Colonnades</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/znojmo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹诺伊莫古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Znojmo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/holasovice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍拉肖维采古罗马村落</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Holašovice</p>
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
