import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布里西盖拉历史溯源｜悬崖上三座古堡的千年传奇与文艺复兴哨塔的前世今生',
  description: '探索意大利隐秘悬崖小镇布里西盖拉。揭秘曼弗雷迪家族堡垒、拿破仑足迹与诗人阿尔贝蒂尼的故事，走入一段镌刻在泥灰岩上的千年史诗。',
}

export default function BrisighellaItalyHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '布里西盖拉', href: '/attractions/brisighella-italy-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布里西盖拉・Brisighella・意大利・艾米利亚-罗马涅`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在亚平宁山脉与波河平原交界的褶皱里，有一座小镇，它的轮廓被三座山峰精准地定义。这不是寻常的意大利山村，而是一处绵延七百年的战略浮雕——一座为了“注视”与“被注视”而生的要塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>钟楼</strong>、<strong>曼弗雷迪城堡</strong> 与 <strong>蒙特基奥礼拜堂</strong>，如同三枚楔入历史的铆钉，将小镇的命运牢牢固定在险峻的悬崖之上。抛开游玩攻略，走进布里西盖拉的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布里西盖拉`} />
                <InfoRow label="英文名称" value={`Brisighella`} />
                <InfoRow label="正式名称" value={`Brisighella`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`艾米利亚-罗马涅`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布里西盖拉的故事，始于一场充满戒心的凝视。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间回到 <strong>1300年</strong>。掌控此地的 <strong>乌戈林·曼弗雷迪</strong> 老爷，下令在嶙峋的泥灰岩山脊上，建造一座高大的钟楼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这并非为了召集信徒，而是一座纯粹的军事哨塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的目光，如鹰隼般掠过脚下的拉莫内河谷，死死盯住北方那些蠢蠢欲动的城市——特别是强大的 <strong>佛罗伦萨共和国</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Brisighella”这个名字，本身就透露着此地的性格。语言学溯源认为，它可能源于拉丁语词汇 <strong>“brisca”</strong>（多石之地）与 <strong>“gella”</strong>（寒冷）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“多石的寒冷之地”，精准描绘了它最初的地理与战略表情：一个坚固、冷峻、难以逾越的边境前哨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "曼弗雷迪家族在此筑城，根本目的是守卫他们在罗马涅地区的领土与利益。小镇的肌理，从第一块基石开始，就被编织进了 <strong>军事防御</strong> 与 <strong>领地控制</strong> 的冰冷逻辑中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非自然生长的村落，而是一件被精心放置的武器，一个凝视边境的瞳孔。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座悬崖要塞的命运，始终与权力的更迭紧密缠绕。第一枚深刻的印记，来自家族的陨落与堡垒的陷落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1500年</strong>，切萨雷·博吉亚——那位传奇的“毒药公爵”——率领教宗军横扫罗马涅。布里西盖拉顽强抵抗，但最终沦陷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正的毁灭性转折发生在 <strong>1506年</strong>。当时的领主 <strong>卡洛·曼弗雷迪</strong> 愚蠢地背叛了强大的威尼斯共和国。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据地方编年史隐晦记载，卡洛·曼弗雷迪“因贪婪而蒙蔽了双眼”，在收受佛罗伦萨的贿赂后，突然对过往的威尼斯商队发动袭击。这一行为，被视作对海上共和国威严的赤裸挑衅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "盛怒的威尼斯派出一支精锐部队，将曼弗雷迪城堡团团围住。经过短暂而激烈的围攻，城堡被攻破并<strong>彻底拆毁</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，我们只能从山巅的废墟地基，遥想它昔日的森严。家族的统治于此终结，但小镇的生命却在废墟旁延续。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二枚印记，来自一个更宏大的名字：<strong>拿破仑</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1796-1797年</strong>，拿破仑的意大利军团如旋风般席卷亚平宁。布里西盖拉因其战略位置，被法军迅速占领并实施改革。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "古老的封建特权被废除，代之以现代化的行政与法律体系。小镇短暂地成为了一个 <strong>“ canton ”</strong>（县）的首府。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段疾风骤雨般的占领，虽短暂，却像一剂猛药，加速了中世纪社会结构的解体。拿破仑的影子，为小镇注入了第一缕现代性的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而第三枚印记，则镌刻在一条独特的街道上：<strong>“驴子巷”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这条位于老城区中心、被古老的 <strong>威尼斯风格柱廊</strong> 所覆盖的街道，其实是一场社区自救的奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>18世纪</strong> 的市政记录显示，原先这里的建筑杂乱无章，且有坍塌风险。市民们自发组织起来，协商、筹资，共同建造了这条长达百余米的优雅拱廊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非出自某位大师之手，而是集体意志与实用美学的结晶。它让公众得以风雨无阻地通行、社交、贸易。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这条巷子，至今仍是小镇跳动的心脏，它诉说着一种不同于王公将相的历史：<strong>市民社会</strong> 的成长与社区的韧性。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说堡垒与街道构成了小镇的骨骼，那么与之共鸣的灵魂，则来自一位忧郁的诗人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>阿尔贝托·阿尔贝蒂尼</strong>，这位 <strong>19世纪</strong> 的诗人与学者，是布里西盖拉土地孕育出的最细腻的儿子。他的一生，如同一首与故乡互文的抒情诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1856年</strong>，阿尔贝蒂尼出生于此。故乡险峻而美丽的风景——尤其是那座标志性的钟楼与泥灰岩悬崖——成了他诗歌中永恒的意象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的诗句里，充满对拉莫内河谷的雾气、古老石壁的纹理以及小镇寂静时光的深情描摹。然而，他的才华与敏感，也带来了毕生的痛苦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因家庭变故与情感挫折，阿尔贝蒂尼长期被严重的抑郁症所折磨。他选择隐居，几乎足不出户，在故乡的屋顶下与自己的心魔搏斗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的书房，成为他全部的世界。正是在那里，他翻译了大量 <strong>德国浪漫主义</strong> 诗歌，并将那种深邃的忧郁与对自然的崇拜，注入自己的创作。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在一封给友人的信中写道：“我的窗外就是钟楼，它像一根插入天空的灰色手指，日复一日为我指示着寂静的刻度。我所有的诗，都是写给它的情书，或是从它身上剥落的碎屑。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1913年</strong>，阿尔贝蒂尼在几乎完全默默无闻的状态下于故乡去世。他的作品，如同被埋藏的宝藏，在很长一段时间里只被少数同好所知。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，正是这种与喧嚣世界保持距离的、纯粹的在地性，让他的诗歌在今天散发出更迷人的光芒。他不是一个泛泛歌颂意大利的诗人，他是<strong>专属布里西盖拉的诗人</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇没有忘记他。如今，一条街道以他的名字命名，当地学校致力于研究他的作品。他证明了，一片土地可以多么深刻地塑造一个灵魂，而一个灵魂又可以如何用自己的方式，永恒地回报这片土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与小镇有深刻羁绊的名人，是意大利共和国前总统 <strong>乔治·纳波利塔诺</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然出生于那不勒斯，但他的母亲阿德莱德·纳波利塔诺（婚前的马切西家族）却来自布里西盖拉一个显赫的地主家庭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "纳波利塔诺的童年和青年时期，有大量时光是在母亲家族位于小镇附近的庄园中度过的。这里的乡村景观与平和生活，是他紧张政治生涯中时常回溯的精神原乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2011年</strong>，在意大利陷入债务危机最严峻的时刻，已是总统的纳波利塔诺在国会发表了那场著名的、呼吁国家团结与责任的演讲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多评论家注意到，他的措辞与沉稳中，带着一种来自 <strong>“外省”</strong> 的、土地般的坚实感。这或许，正是布里西盖拉这片土地，通过家族记忆，赋予这位现代政治家的隐秘底蕴。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在布里西盖拉，最生动的传说不属于骑士或贵族，而是属于一头倔强的骡子，以及一条因此而生的巷子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这便是 <strong>“驴子巷”</strong> 又名 <strong>“运酒巷”</strong> 的由来。故事发生在中世纪，当时这条陡峭的小路是连接上下城区的主要通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位农妇需要将自家酿造的葡萄酒用骡子驮运下山去集市售卖。然而，那头骡子性格极其执拗，走到巷子中间时，无论如何也不肯再挪动一步。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鞭打、拉扯、哄骗皆无用处。骡子就那样立在坡道中央，阻塞了整条通道。焦急的农妇灵机一动，想出了一个办法。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她卸下酒桶，在骡子身后的巷子两侧，用找到的旧木板和石块，搭建起一个简易的、有顶棚的遮蔽物。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "坊间流传的说法是，农妇对着骡子嘀咕：“既然你非要在这里看风景，那至少得让我们这些凡人有个地方躲太阳、避风雨，等着你老爷心情好转吧！”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个临时建筑得到了其他居民的赞赏。久而久之，大家决定合力将其改建为一条永久性的带顶拱廊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，因一头驴的任性，而催生了一条充满智慧与幽默感的公共建筑。这个传说褪去了神话色彩，洋溢着市井的烟火气与解决问题的务实精神，这正是布里西盖拉民间性格的可爱写照。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在布里西盖拉，你漫步的并非一条寻常的意大利古镇街道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你脚下是 <strong>曼弗雷迪家族</strong> 权欲的基石，身旁是 <strong>威尼斯共和国</strong> 怒火的余温，头顶是 <strong>拿破仑法典</strong> 拂过的微风。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你在 <strong>阿尔贝蒂尼</strong> 凝视过的钟楼下驻足，穿过因一头骡子而诞生的拱廊。这座小镇将宏大的历史叙事与细微的个体生命，完美地浇筑在了同一片泥灰岩悬崖之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值，在于提供了一种 <strong>“切片式”</strong> 的历史体验。从中世纪要塞到文艺复兴战场，从拿破仑改革到现代诗人乡愁，层层叠叠，清晰可辨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它告诉你，历史不仅是王侯的功绩，也是一条社区共建的巷子，一首在抑郁中写就的田园诗，一头改变了街道命运的倔强骡子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂布里西盖拉，便是读懂一段在动荡中始终保持韧性、在险峻中生生不息的亚平宁传奇。它的美，不仅在于明信片般的风景，更在于时间在这里沉淀出的、可供触摸的厚重肌理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/dolceacqua" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多尔切阿夸</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dolceacqua</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castelmola" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯泰尔莫拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelmola</p>
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
