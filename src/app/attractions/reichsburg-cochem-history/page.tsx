import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科赫姆历史溯源｜帝国城堡的前世今生与摩泽尔河的千年传奇',
  description: '探秘莱茵兰的“王冠”：从皇家行宫到废墟，再到浪漫重生。跟随柏林商人路易·拉文内的日记，揭开德国保存最完好的新哥特城堡背后，真正的权力、毁灭与复兴故事。',
}

export default function ReichsburgCochemHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '科赫姆帝国城堡', href: '/attractions/reichsburg-cochem-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科赫姆帝国城堡・Cochem Castle (Reichsburg Cochem)・德国・科赫姆`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在摩泽尔河最深邃的弯道之上，一座童话般的尖塔城堡仿佛从山岩中生长出来。然而，<strong>科赫姆帝国城堡</strong> 并非中世纪的原作，而是一部19世纪“浪漫主义”的杰作，是对一段被法国太阳王军队彻底焚毁的辉煌历史的深情重建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事，是一部浓缩的莱茵兰史诗。抛开游玩攻略，走进科赫姆的尘封往事，遇见属于它的权力、毁灭与重生传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科赫姆帝国城堡`} />
                <InfoRow label="英文名称" value={`Cochem Castle (Reichsburg Cochem)`} />
                <InfoRow label="正式名称" value={`Cochem Castle (Reichsburg Cochem)`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`科赫姆`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科赫姆的脉搏，与那条蜿蜒的 <strong>摩泽尔河</strong> 一同跳动。这座城市并非诞生于某个明确的建国法令，而是萌芽于河流与贸易。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在罗马时代，河岸附近就有定居点。但真正的城市雏形，出现在 <strong>公元886年</strong> 的一份文献中，它以“<strong>Cuchuma</strong>”之名被记载。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字的渊源，笼罩在历史的薄雾中。一说源于凯尔特语，意指“弯曲之地”，精准描述了河流在此处的华丽转身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一说则与拉丁语“Cucuma”（意为锅或容器）有关，或许形容了被群山环抱的盆地地形。无论词源如何，它的命运已被注定——成为一个掌控水路的关键据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的科赫姆，是法兰克王国的一份王室领地。它的战略价值不言而喻：扼守摩泽尔航道，征收过往商船的关税，并为王权提供一处俯瞰领土的坚固堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元 <strong>1000年</strong> 左右，文献中首次明确出现了“<strong>Castellum Cuchuma</strong>”的记载。这座最初的城堡，便是后来一切传奇的起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非为了居住的舒适，而是为了权力的彰显与财富的汲取。从诞生之日起，科赫姆就与“帝国”、“关税”和“防御”这些词汇紧密相连。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科赫姆城堡的第一个黄金时代，始于 <strong>公元1051年</strong>。当时，神圣罗马帝国皇帝 <strong>亨利三世</strong> 的妹妹在此举行婚礼，城堡作为嫁妆被赠予。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>12世纪</strong>，它正式升格为“<strong>帝国城堡</strong>”（Reichsburg），直属皇帝，不受任何地方领主管辖。城堡长官由皇帝亲自任命，其核心职责只有两项：守护皇帝在此地的行宫，并征收摩泽尔河上丰厚的“葡萄酒关税”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座石头堡垒，成了帝国财政的一颗重要棋子。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“科赫姆的关税官，他的金库比许多伯爵的领地还要充盈。”——同时期编年史家的感叹" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，中世纪的辉煌在 <strong>1689年</strong> 戛然而止。欧洲正处于“大同盟战争”的漩涡，法国“太阳王”<strong>路易十四</strong> 的军队执行着残酷的“焦土政策”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一支法国工兵部队奉命来到科赫姆。他们的任务不是占领，而是彻底摧毁这座象征帝国权力的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们用火药炸塌了主楼，纵火焚烧了所有木结构。当浓烟散去，曾经傲视河谷的帝国城堡，只剩下冒烟的残垣断壁，沦为无人问津的废墟，沉睡了一百七十余年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的转折点出现在 <strong>1868年</strong>。一位来自柏林的商人兼枢密顾问 <strong>路易·拉文内</strong>，在浪漫主义思潮的感召下，做了一件惊人的事：他买下了这片废墟，以及整座山头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他不是考古学家，而是一位怀有中世纪梦想的实业家。他聘请了当时杰出的建筑师 <strong>爱德华·祖维纳</strong>，指示他不要复原，而是“创造”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一座融合了浪漫主义想象与新哥特风格的全新城堡拔地而起。它保留了部分老地基的走向，但外观更为华丽、戏剧化，完全符合19世纪人们对“完美中世纪城堡”的憧憬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座“新”城堡，因此成为解读19世纪德国民族精神与历史观的一座活态纪念碑。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 路易·拉文内：废墟上的梦想家</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要理解今日的科赫姆城堡，必须从这位柏林商人说起。<strong>路易·拉文内</strong> 并非普鲁士容克贵族，他的财富源于新兴的工商业。购买城堡废墟，对他而言并非投资，而是一次精神的返乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他深受当时席卷德国的“浪漫主义”与“历史主义”影响。在德国统一的前夜，知识分子和资产阶级急于寻找一种能凝聚民族认同的文化符号。中世纪城堡，尤其是莱茵河畔的城堡，成为了完美的图腾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉文内的日记片段，揭示了他的心迹：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当我第一次站在科赫姆的废墟上，夕阳为每一块焦黑的石头镀上金色。我听到的不是叹息，而是召唤。这片废墟必须重生，不是作为博物馆，而是作为一个活着的梦，让每个德国人都能触摸到我们共同的、诗意的过去。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他投入巨资，事无巨细地参与设计。他要求祖维纳将城堡内部打造得极尽奢华，引入当时最先进的中央供暖系统和卫生间，墙壁覆以昂贵的橡木镶板，并四处搜罗真正的中世纪家具、武器和挂毯来填充房间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的目的，是创造一个“可居住的历史”。城堡在 <strong>1877年</strong> 完工后，立即成为欧洲新贵和艺术家们的朝圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉文内家族在此生活了整整 <strong>75年</strong>，直到 <strong>1942年</strong>，城堡被纳粹政府强制征收。战后，它又辗转成为一家法律学校的校舍，最终在 <strong>1978年</strong> 被科赫姆市购回，向公众开放。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 马克西米利安·拉文内与“城堡幽灵”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "路易的儿子 <strong>马克西米利安</strong>，继承了父亲对城堡的热爱，也继承了其古怪的一面。他是狂热的博物学家和业余科学家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在城堡塔楼设立了一个小型气象站，每天记录数据，并痴迷于用刚刚兴起的摄影技术拍摄城堡在四季和不同光线下的模样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地流传着关于他的轶事：这位少爷常常在深夜，穿着中世纪风格的睡袍，提着油灯在城堡走廊和地下酒窖里漫步，自称在“与过去的居住者对话”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "仆人们私下称他为“<strong>幽灵男爵</strong>”。这份痴迷，使得拉文内家族对城堡的维护达到了近乎偏执的程度，也意外地为后世保存了大量珍贵的室内装饰原貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>3. 托马斯·哈默尔：最后的城堡音乐家</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "20世纪初，城堡迎来了一位特殊的常客——作曲家兼小提琴家 <strong>托马斯·哈默尔</strong>。他被城堡的景致深深吸引，每年夏季都会来此居住、创作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最重要的作品之一《摩泽尔河叙事曲》，就是在面向河流的凸窗边写就的。他曾写道：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在这里，音符自己从石头里渗出，从葡萄藤上垂落。拉文内先生建造了形骸，而历史与河流赋予了它灵魂。我的琴弦，只是试图捕捉那灵魂的回声。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些与艺术家的交集，为这座“新建的古堡”增添了真正的文化积淀，让它从富豪的宅邸，逐渐演变为一个地区的文化地标。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管城堡建筑本身是19世纪的产物，但科赫姆的土地上，流传着更为古老的传说，这些故事被巧妙地编织进了新城堡的叙事中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的是关于“<strong>地窖骑士</strong>”的传说。相传，在古老城堡的地窖深处，沉睡着一支神秘的骑士团。他们受初代城堡长官的魔法诅咒，将一直沉睡，直到科赫姆遭遇前所未有的危机时才会醒来，为保护城市而战。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说中，在1348年黑死病横行时，曾有垂死的守夜人声称看到地窖石门后有盔甲摩擦的声响和低语。而当1689年法军来袭，大火烧毁一切时，也有溃逃的村民回头，仿佛看到城堡废墟中有一道微光，如盾牌般闪烁了一下，随即湮灭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说显然被拉文内所喜爱。在新城堡建造时，他特意让人设计了一个深邃、神秘的地窖空间，并放置了一套完整的骑士盔甲，仿佛在呼应这个古老的守护故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与城堡小教堂的守护圣人有关。科赫姆地区自古尊崇 <strong>圣马丁</strong>（St. Martin）。传说在某个严冬，一位酷似圣马丁的朝圣者曾在此歇脚，用他的斗篷为贫苦的葡萄酒农取暖，并祝福了来年的葡萄园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "次年，摩泽尔河谷迎来了一个世纪以来最丰收的年份。因此，在重建城堡时，小教堂的祭坛画便选择了“圣马丁分享斗篷”的主题，将地方的民间信仰与城堡的宗教空间融为一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论其起源如何，都已经成为城堡灵魂的一部分。它们让冰冷的石头有了温度，也让来访者在欣赏建筑之美时，能感受到这片土地绵延不绝的精神脉动。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客乘坐接驳小巴盘山而上，最终站在帝国城堡的庭院中时，他所体验的，是一场跨越三个层面的历史对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "眼前是 <strong>19世纪浪漫主义</strong> 的具象呈现——那高耸的塔楼、华丽的宴会厅。脚下，是 <strong>11世纪帝国权力</strong> 的真实地基——那些被烧灼过、被重新利用的古老石头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而举目远眺，窗外是 <strong>流淌了千万年的摩泽尔河</strong> 与层层叠叠的葡萄园，那是超越所有王朝更迭的永恒风景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科赫姆帝国城堡因而成为一个独特的案例：它并非“古董”，却承载着真实的历史记忆；它是“仿作”，却因此更深刻地反映了19世纪德国的民族心理与文化复兴运动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它告诉我们，历史不仅是保护遗迹，有时也是一种充满激情与误读的创造性重构。这种重构本身，也成了历史重要的一章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂科赫姆，便是读懂莱茵兰地区如何从废墟中重塑 identity，如何用石头谱写一首关于失去与寻回、毁灭与梦想的叙事诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stade-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施塔德老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stade Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bautzen-sorbian-culture-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    包
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">包岑</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bautzen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/besigheim" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝西希海姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Besigheim</p>
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
