import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '利希滕施泰因城堡历史溯源｜悬崖童话城堡的前世今生与骑士传奇',
  description: '它并非官方城堡，而是一座19世纪私人建造的“骑士梦”。走进符腾堡森林深处，探寻悬崖之上童话城堡的真实历史、浪漫主义起源与威廉伯爵的骑士情结。',
}

export default function LichtensteinCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '德国', href: '/destinations/europe' },
            { label: '巴登-符腾堡州，霍瑙（近罗伊特林根）', href: '/destinations/europe' },
            { label: '利希滕施泰因城堡', href: '/attractions/lichtenstein-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`利希滕施泰因城堡・Lichtenstein Castle・德国・巴登-符腾堡州，霍瑙（近罗伊特林根）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在德国，与天鹅堡齐名的浪漫主义象征，并非官方工程，而是一座源于私人骑士梦想的“虚构古迹”。利希滕施泰因城堡，这座峭壁上的新哥特式杰作，其历史核心并非遥远的中世纪，而是19世纪一位符腾堡贵族对逝去骑士时代的一场盛大、精致的复古想象。它被誉为“符腾堡的童话城堡”，却比童话更真实地映照出一个时代的精神面貌与个人情怀。抛开游玩攻略，走进这座悬崖城堡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`利希滕施泰因城堡`} />
                <InfoRow label="英文名称" value={`Lichtenstein Castle`} />
                <InfoRow label="正式名称" value={`Lichtenstein Castle`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴登-符腾堡州，霍瑙（近罗伊特林根）`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "利希滕施泰因城堡的“诞生”，严格来说是一场19世纪的历史情景再现。其所在地的历史渊源，远比城堡石墙本身古老得多。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在12世纪中期，这片位于施瓦本侏罗山北缘、俯瞰埃夏茨河谷的险峻岩石上，便矗立着第一座<strong>利希滕施泰因城堡</strong>。“Lichtenstein”在德语中意为“发光的石头”，很可能指代当地出产的浅色石灰岩。这座中世纪堡垒属于<strong>利希滕施泰因家族</strong>，一个在施瓦本地区颇有声望的骑士家族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这座古堡的命运在<strong>1381年</strong>的施瓦本城市战争中被决定。它被当时强大的帝国自由市<strong>罗伊特林根</strong>的军队攻占并彻底摧毁，自此沦为废墟，沉默在森林之中数百年。家族也因此式微，领地旁落。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到19世纪初期，这片包含古堡废墟的土地，已归属<strong>符腾堡王国</strong>。<strong>1802年</strong>，国王<strong>弗里德里希一世</strong>将此地赐予了他的军事顾问<strong>冯·乌克斯库尔男爵</strong>。男爵在此修建了一座舒适的狩猎小屋，但并未试图重建那座中世纪城堡。真正的转折点，要等待一位怀揣浪漫主义骑士梦的贵族到来——<strong>威廉伯爵</strong>（Wilhelm Graf von Württemberg）。正是他，在狩猎小屋的基础上，于19世纪中叶发起并主导了那座我们今天所见的梦幻城堡的建造，让“利希滕施泰因”这个名字，在废墟之上获得了第二次，也是最辉煌的一次生命。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡的历史印记，清晰地分为两层：一层是深埋于地基之下的、真实而残酷的中世纪战争记忆；另一层则是覆盖其上的、精致而伤感的19世纪浪漫主义复兴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一层印记，是<strong>1381年的毁灭</strong>。那场摧毁旧堡的战争，是施瓦本地区权力博弈的缩影。崛起的城市联盟（如罗伊特林根）与试图维持封建特权的本地贵族（如利希滕施泰因家族）冲突不断。城堡的陷落，标志着一个旧骑士时代的武力手段，在组织严密的城市民兵面前已显颓势。残存的基岩和文献记载，是那段冰冷历史唯一的证人。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "地方编年史曾隐晦记载：“罗伊特林根人带着怒火与攻城锤而来，让骑士的巢穴归于尘土与寂静。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二层，也是最具视觉冲击力的印记，是<strong>1840-1842年的浪漫主义重建</strong>。这不是国家行为，而是纯粹的私人艺术表达。当时，浪漫主义思潮席卷德国，对中世纪“黄金时代”的追忆与美化成为文化风尚。历史小说家<strong>威廉·豪夫</strong>的畅销作品《利希滕施泰因》（1826年）更是直接将这座废墟城堡塑造成了浪漫的文学地标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "土地的所有者<strong>威廉伯爵</strong>，一位符腾堡公爵的私生子，深受此风潮影响。他是一位艺术家、收藏家，更是一位中世纪骑士文化的狂热崇拜者。他决心将文学想象变为石头现实。他聘请了建筑师<strong>卡尔·亚历山大·海德洛夫</strong>，后者并没有简单修复旧墟，而是以旧堡地基为舞台，全新创作了一座符合浪漫主义美学的<strong>新哥特式城堡</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的每一个细节——高耸的塔楼、雄堞、狭窄的窗棂、华丽的礼拜堂——都旨在唤起人们对骑士传奇的想象。它并非精确的历史复刻，而是一座“理想的”中世纪城堡，一个时代的情绪纪念碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三层印记，则是它在<strong>二战中的幸存</strong>。由于其地处偏远且知名度在当时相对有限，它奇迹般地躲过了盟军的猛烈轰炸。与许多被毁的德国城市和历史建筑相比，利希滕施泰因城堡近乎完整地保存了下来，使得这场19世纪的浪漫之梦得以在20世纪的动荡后，继续向世人诉说它的故事。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "利希滕施泰因城堡的灵魂，完全系于一人之上：它的建造者与第一任主人，<strong>威廉伯爵（Wilhelm Graf von Württemberg, 1810-1869）</strong>。理解他，是理解这座城堡为何存在的关键。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>威廉伯爵</strong>并非符腾堡王室的主支成员。他是<strong>腓特烈一世·威廉·卡尔公爵</strong>与一位平民女性的儿子，这一出身决定了他虽享有贵族头衔与财富，却始终游离在核心政治权力之外。这种边缘感，或许反而滋养了他内向、敏感且极具艺术天赋的性格。他从小接受良好的教育，热爱绘画、诗歌，并对中古历史，尤其是骑士制度，产生了近乎痴迷的热情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的人生，可视作一场对“失落骑士精神”的漫长追慕。他收集了大量中世纪铠甲、武器和艺术品。而建造利希滕施泰因城堡，是他这场个人追慕的最高潮，也是最实体化的成果。对他而言，这不仅仅是在盖一栋房子，而是在创造一件可以居住的“历史艺术品”，一个能让他完全沉浸其中的骑士梦剧场。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在城堡的奠基仪式上，威廉伯爵留下的话语揭示了他的心迹：“这里不应只是一处居所，而应成为一个时代的见证，一种精神的庇护所。石头会歌唱，唱出古老的歌谣。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与建筑师<strong>海德洛夫</strong>的合作是创造性的。伯爵本人深度参与了设计，他将自己对中世纪绘画（尤其是浪漫主义画家笔下的城堡）的理解，以及对家族历史的缅怀，全部倾注于蓝图之中。城堡内部犹如一座私人博物馆：大厅里挂满先祖（或他认定的先祖）的肖像，武器厅陈列着他的珍贵收藏，礼拜堂的彩绘玻璃描绘着骑士传奇。他甚至为城堡设计了复杂的“家族谱系”，将之与古老的中世纪利希滕施泰因家族血脉相连，尽管这种联系在历史上颇为牵强——这更进一步证明，城堡是他构建个人身份与历史传承的载体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位不得不提的名人，是<strong>威廉·豪夫</strong>。这位英年早逝的天才作家虽从未见过城堡重建后的模样，却是其精神上的“教父”。他的小说《利希滕施泰因》将城堡废墟设定为关键场景，讲述了16世纪一段围绕符腾堡公爵乌尔里希的浪漫爱情与冒险故事。这本书在德语世界引起了巨大轰动，让这座几乎被遗忘的废墟名声大噪，直接点燃了威廉伯爵的建造灵感。可以说，是豪夫的文学想象，为伯爵的石头之梦提供了最动人的剧本。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与许多古堡一样，利希滕施泰因城堡也萦绕着迷人的传说，这些传说往往混合了真实历史的碎片与民众的想象，为其浪漫形象增添了一抹神秘色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说是关于一位“<strong>白骑士</strong>”的幽灵。故事说，每当月圆之夜，或暴风雨来临前，一位身着闪亮白色盔甲的骑士幽灵会出现在城堡最高的塔楼窗前，或徘徊于连接城堡与悬崖的幽深小径上。相传，他就是<strong>1381年</strong>城堡陷落时，最后一位战死的利希滕施泰因家族骑士。他无法安息，始终守护着家族的古老领地，等待着复仇或救赎的时刻。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地的老伐木工曾信誓旦旦地说：“我见过他，他没有面孔，只有盔甲反射着冰冷的月光。他不伤害人，只是在那里，看着河谷，仿佛在等待永远不会回来的军队。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与城堡的<strong>宝藏</strong>有关。中世纪城堡被毁时，传说骑士们将家族的大量金银财宝藏匿于城堡地下错综复杂的秘道或一个天然岩洞中。随着城堡被毁，知晓秘密的人全部战死，宝藏便成了永恒的秘密。19世纪重建时，工人们确实发现了一些古老的地基结构和疑似通道的入口，但均未深挖。这给传说留下了空间，至今仍吸引着一些寻宝爱好者，相信威廉伯爵选择此地建堡，或许也听闻了这个诱人的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，城堡所在悬崖本身也被赋予了灵性。传说岩石中居住着一位古老的“<strong>山灵</strong>”，它决定了城堡的命运。当居住者心怀正义与荣耀时，城堡便稳固繁荣；当居住者堕落时，山灵便会制造落石或怪响以示警告。这些传说，无疑让这座本就建立在历史与文学想象之上的城堡，更具层次和魅力。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当游客们跋涉至施瓦本侏罗山的密林深处，仰望那座仿佛从童话书中直接剪切下来、粘贴在峭壁上的利希滕施泰因城堡时，他们所见的，远不止是一处风景明信片式的打卡地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一座“活态”的历史哲学样本。它向我们展示了，历史如何被后世记忆、诠释乃至重塑。它见证了中世纪骑士制度的血腥终结，也见证了19世纪浪漫主义对那个时代的温柔乡愁。它是一首用石头写成的诗，主题是“追忆”与“创造”。威廉伯爵并非在伪造历史，而是在用极高的艺术造诣，回应一个时代的集体情感需求，并完成一场极致的个人身份构建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂利希滕施泰因城堡，意味着理解欧洲历史中那股强大的“复古”与“重构”的文化脉动。它提醒我们，重要的历史地标有时并非源于王权的炫耀，而是源于个人深邃的热情与梦想。在这里，历史不是教科书上冰冷的时间线，而是一种可被感知、甚至可被居住的氛围。它承载的，是符腾堡地区乃至整个德意志浪漫主义时期的一片精神切片，脆弱、唯美，却又因石头的永恒而得以存续。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步其中，你仿佛能听到两个时代的回声：地下，是1381年战火与毁灭的沉闷呜咽；地上，是1840年铁凿雕刻梦想的清脆声响。这座悬崖上的城堡，最终成为连接真实与想象、过去与现在的一座绝无仅有的桥梁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、内部参观及周边徒步打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/orienburg-palace-gardens" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥拉宁堡宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oranienburg Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/celle-half-timbered-city-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    策
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">策勒（五百座木骨架房屋之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Celle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/burghausen-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博格豪森城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burghausen Castle</p>
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
