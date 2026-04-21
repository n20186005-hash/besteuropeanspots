import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '帕福斯历史溯源｜从爱神诞生地到古罗马省府的传奇前世今生',
  description: '探秘塞浦路斯帕福斯，爱神阿佛洛狄忒的诞生地。穿越古罗马总督府的马赛克瑰宝，聆听圣保罗的传道回音，揭开一座地中海古城被层层掩埋的史诗。小众深度历史之旅。',
}

export default function PaphosArchaeologicalParkHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '帕福斯考古公园', href: '/attractions/paphos-archaeological-park-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`帕福斯考古公园・Paphos Archaeological Park・塞浦路斯・帕福斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在地中海的阳光下，塞浦路斯西南海岸的帕福斯，远不止是一座度假天堂。它的基石，浸染着希腊神话中最瑰丽的泡沫——这里是爱与美之神<strong>阿佛洛狄忒</strong>的诞生地。而脚下这片被列为世界遗产的广袤考古公园，则是一部镌刻在大地上的编年史，默默诉说着从希腊化王国到罗马帝国东方重镇的千年辉煌。抛开游玩攻略，走进帕福斯的尘封往事，遇见属于它的神话、权力与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`帕福斯考古公园`} />
                <InfoRow label="英文名称" value={`Paphos Archaeological Park`} />
                <InfoRow label="正式名称" value={`Paphos Archaeological Park`} />
                <InfoRow label="国家" value={`塞浦路斯`} />
                <InfoRow label="城市" value={`帕福斯`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天所见的帕福斯考古公园，其实是“新帕福斯”的遗迹。它的故事，始于一个王国落幕与另一个王朝兴起的交汇点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元前4世纪末，亚历山大大帝的帝国崩解，他的将领们瓜分了世界。塞浦路斯进入了动荡的“继业者战争”时期。岛上最后一个本土希腊人王国——帕福斯王国，在战火中衰亡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约在公元前320年，托勒密王朝，那位统治埃及的希腊化君主<strong>托勒密一世</strong>，为了巩固对塞浦路斯和东地中海的掌控，决定建造一座全新的港口城市。他选中了旧帕福斯西北约十英里处一个优良的海湾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市被命名为“新帕福斯”，其战略意图极为明确：成为一个坚不可摧的军事与行政中心，掌控通往埃及和小亚细亚的航线。它的规划是典型的希腊化棋盘式布局，坚固的城墙从海岸一直延伸到内陆的山丘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“帕福斯”这个名字本身更为古老，可能源自腓尼基语，意为“港口”。古老的“旧帕福斯”因是阿佛洛狄忒崇拜中心而神圣，而“新帕福斯”则从诞生之初，就携带着现实政治的基因。它迅速取代了旧城的地位，成为托勒密王朝在塞浦路斯最重要的堡垒。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古希腊地理学家<strong>斯特拉博</strong>曾记载：“新帕福斯拥有可以停靠船只的港口和供奉阿佛洛狄忒的宏伟神庙。”这座神庙，正是为了继承旧地的神圣血脉，将神话的合法性赋予这座崭新的权力之城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从第一块奠基石落下，新帕福斯就注定要见证地中海的风云际会。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕福斯的命运在罗马时代达到顶峰，而考古公园的每一处残垣，几乎都凝固着那个时代的缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>罗马行省的首府与“总督之城”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元前58年，塞浦路斯被并入罗马帝国。新帕福斯因其优越的港口和基础设施，被选为罗马塞浦路斯行省的首府。这意味着，这里成为了整个岛屿政治、经济和文化的绝对心脏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考古公园最震撼人心的遗迹群，属于罗马时期的总督府。它并非单一建筑，而是一个包含宫殿、行政大厅、神殿、浴场和私人别墅的庞大建筑群。其中，被称为“狄俄尼索斯之屋”、“忒修斯之屋”、“埃翁之屋”和“俄耳甫斯之屋”的几座别墅，以其无与伦比的<strong>马赛克地板</strong>闻名于世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些马赛克并非简单的装饰，而是罗马贵族权力与教养的宣言。它们以精巧的石片，描绘了希腊神话的恢弘场景：狄俄尼索斯的凯旋、忒修斯与米诺陶的搏斗、海洋之神埃翁的狂欢……" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "考古学家推测，铺设这些马赛克的工匠可能来自亚历山大港，展现了当时顶尖的艺术水准。它们被精心掩埋在泥土下上千年，才在20世纪60年代被一位农夫犁地时偶然发现，重见天日。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>早期基督教的回音与地震的终结</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕福斯的另一重深刻印记，与基督教紧密相连。公元45年，使徒<strong>保罗</strong>与<strong>巴拿巴</strong>乘坐船只来到帕福斯。在这里，他们与当时的罗马总督、一位名叫<strong>士求·保罗</strong>的智者相遇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "《圣经·使徒行传》记载，保罗在这里行了一个神迹，让一个行法术的假先知暂时失明，此举深深震撼了总督，使他皈依了基督教。这一事件，标志着基督教首次在欧洲一位罗马高级官员心中扎根，帕福斯因此成为基督教向外邦世界传播的关键一站。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这座城市的辉煌并未永续。公元4世纪，一系列毁灭性的地震重创了帕福斯。宏伟的建筑倒塌，港口逐渐淤塞。政治中心也北移至尼科西亚。帕福斯缓慢地衰落，许多罗马时期的华美建筑被废弃、掩埋，最终被时光遗忘，变成了牧羊人脚下不起眼的土丘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这种“突然的终结”与漫长的掩埋，奇迹般地保存了那些脆弱而精美的马赛克，为后世留下了一个时间胶囊。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在帕福斯的历史星空中，有两位人物格外耀眼，一位用石头与艺术彰显世俗权威，另一位则用信仰改变了精神世界的图景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>总督塞维鲁斯：别墅主人的奢华世界</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考古公园内“狄俄尼索斯之屋”等一系列豪华别墅的主人，虽已佚名，但历史学家将他们的巅峰时期指向公元2至4世纪。其中，一位可能的重要主人与<strong>塞维鲁斯</strong>家族有关。这个家族在罗马帝国后期权势熏天。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们不妨想象这样一位总督或超级富商的生活。他的别墅面向大海，拥有数十个房间。餐厅的地板是栩栩如生的狄俄尼索斯马赛克画，仿佛每次宴会，酒神都在脚下与宾客同乐。中庭环绕着优雅的柱廊，内厅则铺设着狩猎场景的马赛克，彰显主人的勇武。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的日子在公共事务与私人享乐间切换：上午在毗邻的行政大厅处理行省公务，下午在私人浴场享受罗马式的沐浴流程，傍晚则在宴会厅伴着海风，与往来于帝国东部各地的商人、学者谈天说地。他的别墅，就是微缩的罗马世界，是帝国边疆上文明与奢华的灯塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些马赛克，就是他审美的投射，也是他向到访者无声的炫耀——即使远在帝国偏远的岛屿，他依然享受着与罗马城同等精致、甚至更具异域风情的生活。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在一幅马赛克中，那喀索斯痴迷地望着水中自己的倒影。这或许不仅是神话场景，也隐喻了别墅主人对自身财富、地位与品味的深深沉醉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣保罗与士求·保罗：改变历史的相遇</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说总督们塑造了城市的形体，那么<strong>保罗</strong>与<strong>士求·保罗</strong>的相遇，则赋予了帕福斯不朽的精神维度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元45年，来自塞浦路斯的<strong>巴拿巴</strong>带着他的同伴<strong>保罗</strong>（当时还叫扫罗）回到故乡传播福音。在帕福斯，他们被引荐给<strong>士求·保罗</strong>。这位总督被描述为“是个通达人”，他饶有兴致地听取保罗宣讲神的道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，总督身边有一位行法术的犹太人假先知，名叫<strong>巴耶稣</strong>，他极力抵挡使徒，想要叫总督不信真道。面对这属灵的对峙，保罗做出了强有力的回应。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "《使徒行传》13章写道：“<strong>保罗</strong>被圣灵充满，定睛看他，说：‘你这充满各样诡诈奸恶，魔鬼的儿子，众善的仇敌，你混乱主的正道还不止住吗？现在主的手加在你身上，你要瞎眼，暂且不见日光。’”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "刹那间，巴耶稣眼睛昏蒙黑暗，四下里求人拉着手领他。这一神迹直接击垮了所有反对的声音。<strong>士求·保罗</strong>看见所作的事，大为惊叹，就信了主。这次皈依意义非凡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "士求·保罗是记载中第一位皈依基督教的罗马高级官员。他的信主，不仅为保罗之后的传道之旅打开了局面，更象征性地预示着基督教终将穿透罗马帝国的权力核心。帕福斯，这个阿佛洛狄忒的古老圣所，由此成为了基督教征服欧洲的第一个重要桥头堡。城市附近一座中世纪教堂的遗址，至今被传统认为标志着这次伟大相遇的地点。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕福斯的土地，连石头都浸染着传说。最动人的故事，自然围绕着它的守护神——阿佛洛狄忒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>爱神诞生的海浪与岩石</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在帕福斯以西的海岸边，几块巨大的岩石伫立于碧波之中，其中一块形似心脏。这里被称作“<strong>爱神岩</strong>”。传说，世界之初，天空之神乌拉诺斯被其子克罗诺斯割伤，他的精血滴入爱琴海。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "海水在神力作用下翻腾起圣洁的泡沫。在这片珍珠般的泡沫中，一位绝美的女神缓缓升起，她脚踏一枚贝壳，被西风之神轻柔地吹送着，最终在这片岩石海岸登陆。她就是<strong>阿佛洛狄忒</strong>，爱与美的化身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旧帕福斯因此成为她最重要的崇拜中心，古代世界的人们不远万里来她的神庙朝圣。传说，在特定的月圆之夜，海浪拍打爱神岩的声音，仍会幻化成女神轻柔的叹息。而年轻女子若在月下绕岩石游水三圈，便能得到女神赐福，获得永恒的爱情与美丽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>地下世界的回音</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在考古公园边缘，有一处被称为“<strong>国王陵墓</strong>”的宏大地下墓葬群。它们并非真为国王所建，而是公元前3世纪至公元3世纪帕福斯贵族与富豪的安息之地。这些凿刻在天然岩石中的墓穴，其柱廊与庭院仿照生者的宅邸，体现了“死如生”的观念。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地流传，这些迷宫般的墓穴在深夜会传出低语，那是古代灵魂在讨论哲学，或是为他们在马赛克画中描绘的神话故事争论不休。更有传说指出，其中一条隐秘的通道，曾通往古代阿佛洛狄忒神庙的地下圣所，守护着女神不为人知的秘密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论瑰丽还是神秘，都将冰冷的历史遗迹，转化为充满生命力的人文景观。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在帕福斯考古公园，你踩踏的不仅是废墟，更是层层叠压的文明断面。从希腊化时代的雄心，到罗马帝国的极致奢华，再到早期基督教撬动世界的支点，最后归于地震与尘土的静默——这一切，都浓缩在这片面朝地中海的土地上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不像罗马或雅典那样喧嚣地展示完整的历史叙事，而是以一种近乎考古现场的真实感，邀请你进行一场“发掘式”的旅行。你需要俯身，才能看清马赛克上赫拉克勒斯的肌肉线条；需要想象，才能还原总督府中往来的衣香鬓影；需要静听，才能在呼啸的海风中，捕捉到使徒辩论的回响与女神诞生的古老韵律。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂帕福斯，便是读懂地中海作为一个文明熔炉的缩影：神话如何为政治赋权，艺术如何服务生活，一种信仰如何跨越文化的壁垒，而一切辉煌，又如何最终谦卑地回归大地。在这里，历史不是教科书里的章节，而是你脚下触手可及的、带着阳光温度的石块与斑斓碎片。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/choirokoitia-neolithic-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乔伊鲁科蒂亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Choirokoitia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tombs-of-the-kings-paphos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    国
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">国王陵墓</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tombs of the Kings</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lefkara-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱夫卡拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lefkara</p>
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
