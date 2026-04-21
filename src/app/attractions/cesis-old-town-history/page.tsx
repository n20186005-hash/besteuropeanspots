import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '采西斯历史溯源｜波罗的海“琥珀之心”的前世今生与骑士团传奇',
  description: '走进拉脱维亚的“中世纪琥珀”。探索采西斯古城800年尘封往事：从利沃尼亚骑士团要塞到北欧战争前线，聆听石头诉说的波罗的海秘史。',
}

export default function CesisOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '采西斯古城', href: '/attractions/cesis-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`采西斯古城・Cēsis Old Town・拉脱维亚・维泽梅`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在拉脱维亚茂密的维泽梅森林深处，采西斯像一颗被时光精心包裹的琥珀，封存着整个波罗的海地区最完整的中世纪记忆。这里不是游客摩肩接踵的打卡地，而是一座活着的石头编年史，它的每条鹅卵石街道、每块城堡废墟的砖石，都镌刻着<strong>条顿骑士团</strong>的野心、<strong>汉萨同盟</strong>商人的精明，以及拉脱维亚民族觉醒的无声呐喊。抛开游玩攻略，走进采西斯的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`采西斯古城`} />
                <InfoRow label="英文名称" value={`Cēsis Old Town`} />
                <InfoRow label="正式名称" value={`Cēsis Old Town`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`维泽梅`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采西斯的诞生，与一条闪耀的商路和一场持续百年的北方十字军东征紧密相连。时间锚定在<strong>13世纪初</strong>，当<strong>德意志的利沃尼亚宝剑骑士团</strong>沿加乌亚河北上扩张时，他们需要一处战略支点。于是，在<strong>1206年</strong>左右，骑士团在一条古老的<strong>“琥珀之路”</strong>旁，选中了这片由文登人（当地波罗的部落）定居的高地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“文登”之名，后来演变为德语中的“维登”（Wenden），并最终成为拉脱维亚语的“采西斯”。这个名字本身就揭示了它的双重血统：既是征服者的前哨，也是原住民的家园。最初，它仅仅是一座简陋的<strong>木制堡垒</strong>，用于控制贸易、征收税赋，并作为向北方未皈依土地进行军事与宗教征服的跳板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的石头地基打下后，商人和工匠随之而来。<strong>1213年</strong>，教廷正式授予其建城权，一座典型的<strong>中世纪城镇</strong>围绕着山顶城堡生长出来。它的格局清晰反映了权力秩序：山顶是骑士团城堡与教堂，山腰是德意志商人与贵族的石屋，山脚则是拉脱维亚原住民的木制社区。这种垂直的、族群分层的城市肌理，至今仍在老城的巷道起伏中清晰可辨。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采西斯最深刻的印记，莫过于那座<strong>始建于13世纪末、扩建于15世纪的采西斯城堡</strong>。它不仅是拉脱维亚保存最完好的中世纪城堡废墟之一，更是一本石头写就的战争史书。<strong>1577年</strong>，城堡经历了它命运中最惨烈的一页。当时，横扫利沃尼亚的沙皇<strong>伊凡雷帝</strong>的俄军兵临城下，围困了坚守其中的瑞典与波兰联军。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们宁愿在荣耀中化为灰烬，也绝不向野蛮的莫斯科人投降。” —— 据传出自当时守城将领的誓言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，当城堡即将陷落时，幸存的守军与平民选择引爆城堡主塔下的火药库。一声巨响，主塔崩塌，与入侵者同归于尽。这场悲壮的自我毁灭，赋予了城堡废墟一种永恒的英雄主义悲情。如今，游客手持蜡烛探访阴冷的地窖与塔楼废墟时，仍能感受到那股决绝的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡之下的老城广场，则见证了另一重历史印记：<strong>繁荣与自治</strong>。<strong>14至16世纪</strong>，采西斯凭借其在汉萨同盟贸易网络中的位置而富庶。广场周边的商人石屋，拥有华丽的<strong>荷兰文艺复兴式山墙</strong>，诉说着当时的财富与文化交融。<strong>1582年</strong>，波兰国王<strong>斯特凡·巴托里</strong>甚至在此签署了重要的城镇特权文件，赋予了采西斯高度自治权。然而，紧随其后的<strong>“大北方战争”</strong>（1700-1721年）与<strong>瘟疫</strong>，如同凛冬，彻底冻结了这座城市的黄金时代，使其陷入长达两个世纪的沉睡，却也意外地保存了其中世纪的原貌，未被后来的大规模工业化改造所破坏。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在采西斯漫长的历史星空中，<strong>戈多·弗里森</strong>（Godo Fricis）或许不是最耀眼的那颗，但却是最能代表这座城市精神韧性的本土灵魂。他出生于<strong>1820年</strong>的采西斯一个工匠家庭，彼时的城市仍在俄罗斯帝国统治下沉寂。然而，<strong>19世纪中叶</strong>席卷波罗的海地区的<strong>民族觉醒运动</strong>（拉脱维亚语：Tautas atmoda），如春雷般唤醒了这片土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "弗里森并非政治领袖，而是一位教师、记者与文化活动家。他毕生的心血，都倾注在了一件看似微小却意义非凡的事业上：<strong>用拉脱维亚语创作与出版</strong>。在当时，德语是贵族与行政语言，拉脱维亚语被视为“农民的语言”。弗里森在采西斯创办了小型印刷作坊，出版了第一批面向拉脱维亚普通民众的日历、民歌集和启蒙读物。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“真正的自由，始于用自己的母语思考和歌唱。” —— 戈多·弗里森日记中的片段。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的家，位于老城一条安静的街道上，成为了拉脱维亚民族文化活动的地下沙龙。年轻的诗人、学者在此聚集，讨论如何从历史与民间传统中重塑拉脱维亚的民族认同。他系统收集维泽梅地区的<strong>民间传说（Dainas）</strong>，这些短小精悍、充满自然崇拜与生活智慧的四行诗，后来成为拉脱维亚民族精神的基石。弗里森的工作，让采西斯这座以德意志骑士历史闻名的城堡之城，同样成为了拉脱维亚民族文化复兴的重要温床。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与采西斯结下不解之缘的名人，是来自德国的<strong>约翰·戈特弗里德·赫尔德</strong>。这位伟大的哲学家、文学评论家，在<strong>1764-1769年</strong>间，曾在里加（拉脱维亚首都）担任教师，并多次游历维泽梅地区，采西斯极有可能在他的行程之中。正是在这片土地上，他大量接触并深深着迷于拉脱维亚与立陶宛的民间诗歌。赫尔德在其著作中对这些民歌的赞美，首次将它们提升到“民族灵魂”的高度，直接启迪了后来包括弗里森在内的整个波罗的海民族觉醒运动。因此，采西斯的森林与城堡，间接地为欧洲浪漫主义与民族主义思潮提供了关键的原始养分。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采西斯的传说，与它的森林、城堡和巨石一样古老。其中最动人的故事，围绕着城堡废墟和一位名为<strong>“白衣夫人”</strong>的幽灵。传说她是一位中世纪骑士团长的女儿，与一位年轻的拉脱维亚弓箭手相爱。这段跨越阶层与族群的爱情自然不被允许。在战乱中，骑士团长命令弓箭手执行一项必死的任务，年轻人再未归来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "女儿得知噩耗，从城堡最高的塔楼一跃而下。从此，每当月圆之夜，或城堡面临威胁之时，人们会看到一个身着白衣的纤细身影在废墟间徘徊，似乎在无尽地等待她的爱人归来，又像是在默默守护着这座承载了她爱情与悲伤的城堡。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“不要害怕那位白衣夫人，她是城堡悲伤的灵魂，也是它温柔的守护者。” —— 当地老向导代代相传的口述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一则传说则与自然相连。采西斯周边是广袤的<strong>加乌亚国家公园</strong>，林中遍布巨砾。当地人相信，这些石头是古代巨人玩耍时留下的玩具。其中一块被称为“熊石”的巨砾，据说在夏至日（<strong>雅尼斯节</strong>）的夜晚会微微发光，并轻轻移动。人们认为，在这一夜触摸石头，能获得来自大地与森林的古老力量。这些传说，将采西斯刚硬的骑士历史，与拉脱维亚民族深层信仰中万物有灵的柔软内核，巧妙地编织在了一起。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步在采西斯，你踏过的不仅是鹅卵石，更是层层叠叠的时间。这里没有宏大的叙事奇观，只有缓慢流淌的细节：城堡废墟墙缝里倔强生长的野花，文艺复兴山墙上依稀可辨的商人徽记，老书店里静静摆放的拉脱维亚语诗集。这座城市教会旅人的，是一种“深读”历史的能力——在波罗的海风云变幻的夹缝中，看到军事征服与商业贸易如何塑造空间，更看到一种本土文化如何在重压之下，像森林里的橡树一样，从石缝中顽强地重生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采西斯，这座维泽梅森林中的“琥珀之心”，封存的不仅是骑士团的铁血往事，更是一个民族从沉寂到自我发现的精神史诗。它提醒我们，真正的历史深度，往往藏匿于主流视线之外的小城巷陌，等待有心的过客，去点燃一支蜡烛，照亮那些被遗忘的角落与名字。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/jelgava-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    叶
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">叶尔加瓦宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jelgava Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/turaida-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图雷达城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Turaida Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bauska-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    包
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">包斯卡城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bauska Castle</p>
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
