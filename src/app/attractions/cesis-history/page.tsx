import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '采西斯历史溯源｜琥珀之路上的北境玫瑰，条顿骑士团与自由的千年传奇',
  description: '探秘波罗的海被遗忘的骑士之都。从条顿骑士团要塞到拉脱维亚精神摇篮，走进采西斯古堡的石墙，聆听石头诉说的征服、辉煌与宁死不屈的自由史诗。',
}

export default function CesisHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '拉脱维亚', href: '/destinations/europe' },
            { label: '采西斯', href: '/destinations/europe' },
            { label: '采西斯古城', href: '/attractions/cesis-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`采西斯古城・Cēsis・拉脱维亚・采西斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在拉脱维亚茂密的森林深处，有一座城市，它的历史是用琥珀、钢铁与火焰写成的。这里不是游人如织的热门景点，而是波罗的海历史真正的十字路口。<strong>采西斯</strong>，这个名字在拉脱维亚语中意为“高地”，而它的命运，却始终与地下涌动的力量与外来征服者的长剑紧密相连。它曾是<strong>条顿骑士团</strong>在利沃尼亚的坚固心脏，也曾是拉脱维亚民族觉醒的早期摇篮。抛开游玩攻略，走进采西斯的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`采西斯古城`} />
                <InfoRow label="英文名称" value={`Cēsis`} />
                <InfoRow label="正式名称" value={`Cēsis`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`采西斯`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采西斯的诞生，始于征服与信仰的锋刃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事并非源于某个温馨的部落聚居地，而直接来自一场宏大的、血腥的军事殖民。时间锚定在<strong>1206年</strong>。一支来自西方的军队——<strong>文德十字军</strong>，在主教阿尔伯特的率领下，沿着高亚河深入这片被森林覆盖的异教土地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的目标，是征服并基督教化当地的利沃尼亚人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了巩固征服成果，骑士们选择了一处战略要地：一片被河流与沼泽环绕的石灰岩高地。在这里，他们用木材建起了第一座堡垒。这座堡垒最初的名称已湮没无闻，但它注定将成为一座庞大军事修道会的前哨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1213年</strong>，一个更强大的力量接管了这里——<strong>宝剑骑士团</strong>。他们拆毁木堡，开始用厚重的波罗的海原野石建造一座真正的石质城堡。这座城堡，就是今天采西斯古堡废墟的核心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那么，“采西斯”这个名字从何而来？它并非德语，而是源于当地。主流观点认为，它来自古老利沃尼亚语中的“<em>Kesisi</em>”或“<em>Cēsis</em>”，意指此地的原住民部落或这片高地的地理特征。征服者沿用了被征服者的地名，这在这片土地上并不常见，也让这个名字从一开始就带有一种倔强的本土印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，这座以石头和信仰筑成的堡垒，在森林与河流的环抱中悄然生长，即将迎来它波澜壮阔的数百年。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "石墙沉默，却镌刻着最惊心动魄的时光。采西斯的历史，是由几个决定性瞬间雕刻而成的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一个印记，是骑士团的鼎盛与城堡的“加冕”。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>宝剑骑士团</strong>与<strong>条顿骑士团</strong>合并后，采西斯城堡成为了利沃尼亚分支最重要的指挥中心之一。城堡在<strong>14世纪</strong>不断扩建，达到了军事与建筑艺术的巅峰。其中最辉煌的一笔，是<strong>1367年</strong>城堡西侧主塔楼（圣约翰骑士大厅）的巨大拱顶落成。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这座大厅的拱顶，不需要任何中间立柱的支撑，其跨度在整个波罗的海地区无与伦比。当火炬点燃，骑士们的铠甲与旗帜反射着光芒，这里就是北方世界的权力殿堂。”——后世建筑史学家的描述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座大厅不仅是宴会场所，更是骑士团议会召开之地，决定着整个利沃尼亚地区的命运。石头穹顶象征着骑士团不可动摇的权威与神授的使命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二个，也是最惨烈的印记，是1577年的火焰与尊严。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时代来到<strong>16世纪</strong>，骑士团衰败，利沃尼亚战争的风暴席卷而来。<strong>1577年</strong>，俄国沙皇<strong>伊凡雷帝</strong>的大军兵临城下，意图吞并这片土地。守卫采西斯城堡的，已不再是骑士，而是当地的拉脱维亚与德意志民兵，以及避难于此的妇女儿童。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围城惨烈。当城墙最终被轰破，抵抗无望时，守军做出了一个震惊世人的决定：宁死不为奴。他们点燃了城堡地下室储量巨大的火药。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "编年史以冰冷的笔触记录：“为了避免落入敌手遭受羞辱，守卫者们选择了与城堡、与敌人同归于尽。巨大的爆炸将城堡主塔撕成两半，碎石与躯体一同飞向天空。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这次自爆摧毁了城堡的核心部分，也铸就了拉脱维亚民族精神中关于宁死不屈的原始神话。如今，古堡废墟那狰狞的断裂面，正是这悲壮时刻永恒的纪念碑。战争结束后，城堡并未重建，新的采西斯宫殿在一旁建起，而废墟则被刻意保留，成为一部露天的、触目惊心的历史教科书。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采西斯的传奇，不止于宏大的历史叙事，更与几位在此留下深刻印记的人物血脉相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位，是神秘的守护者：雨果·谢林。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在条顿骑士团统治后期，<strong>雨果·谢林</strong>的名字与采西斯紧密相连。他并非出身显赫的大团长，但作为采西斯城堡的指挥官，他在<strong>15世纪末</strong>至<strong>16世纪初</strong>的动荡岁月里，留下了独特的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "谢林是一位复杂的人物，既是虔诚的修士骑士，也是务实的统治者和建筑家。他主持了对城堡的最后一轮大规模加固，特别是加强了防御火炮的工事，让采西斯成为当时最现代化的要塞之一。然而，他的真正传奇在于其神秘性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在城堡的废墟中，考古学家发现了属于他个人居所的痕迹。在那里，除了武器和宗教物品，还找到了一些与严格修道院生活相悖的物件：精美的饮酒器皿、带有世俗图案的装饰品。这暗示着，在宗教改革的思潮悄然渗透时，这位高级骑士的内心世界可能已发生了微妙的变化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更引人遐想的是他的结局。随着骑士团世俗化，谢林放弃了骑士身份，转型为当地的世俗领主，并似乎融入了当地生活。他从历史的聚光灯下悄然隐退，关于他晚年的一切都笼罩在迷雾中。他就像采西斯城堡本身，从骑士团的钢铁堡垒，最终化为了这片土地沉默的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二位，是拉脱维亚的民族诗魂：瓦尔德马·鲍尔。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光跃迁到<strong>19世纪</strong>。此时的采西斯，已是沙俄帝国统治下一个宁静的省城。<strong>1850年</strong>，一个男孩在这里出生，他就是<strong>瓦尔德马·鲍尔</strong>。他的家庭是典型的拉脱维亚农民家庭，而采西斯周边的森林、湖泊、古堡废墟，构成了他全部童年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管他后来离家求学，并最终在里加等地创作出奠定其“拉脱维亚民族诗歌之父”地位的作品，但采西斯的滋养至关重要。他的诗歌根植于拉脱维亚的乡村生活、民间传说与自然景观，而这些审美与情感的源头，正是在采西斯塑造的。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我最早的记忆，是采西斯古堡那巨大的、阴影斑驳的墙。它对我而言不是废墟，而是一个沉睡的巨人，肚子里装着几百年的故事。还有高亚河的水声，那是我们古老语言的节奏。”——后人整理的鲍尔回忆片段。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鲍尔的诗歌唤起了拉脱维亚人的民族自觉。而在采西斯，这份自觉有着具体的历史依托——那座象征着压迫（骑士团）与反抗（1577年自爆）的城堡。可以说，鲍尔用语言复活了拉脱维亚的精神，而采西斯，则为这种精神提供了最厚重、最悲怆的历史注脚。今天，在采西斯的公园里，你能看到诗人的雕像，他深邃的目光，仿佛仍在凝视着故乡的古堡与森林。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了史书，采西斯的故事还活在人们的口耳相传中，化为了幽灵与琥珀的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说，莫过于“<strong>幽灵骑士</strong>”。据说，在1577年大爆炸的周年纪念日前后，或是月圆之夜，在古堡的废墟上，会出现一位身穿破碎黑甲、没有面孔的骑士幽灵。他 silent 地巡视着断壁残垣，尤其是在城堡那口深井旁徘徊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们相信，这就是当年决定引爆炸药的指挥官之魂。他无法安息，并非因为战败，而是为了守护一个秘密：在爆炸前，他和战友们将骑士团的宝藏——包括圣物、黄金和古老的文献——藏在了城堡地下某个密室或井下的密道中。他的幽灵，永恒地守护着这个秘密，也在等待一个真正理解这段历史、而非贪图财宝的人出现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与波罗的海的“黄金”——琥珀有关。采西斯位于古代“琥珀之路”的支线上。传说，在城堡附近森林里的某些古老橡树下，在特定的雨后，能找到一种特别清澈的“<strong>泪滴琥珀</strong>”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们讲：“那不是树的眼泪，是古代利沃尼亚祭司的泪。骑士团摧毁了我们的神圣森林和祭坛，祭司的悲伤化入了树脂，被大地珍藏。捡到它的人，如果能听懂石头里的风声，就能瞥见这片土地被遗忘的、骑士团到来之前的面貌。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，将历史的创伤、失落的本土信仰以及对土地深深的情感，包裹在了神秘的故事里，代代相传。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在采西斯，你不是在参观一个“景点”，而是在阅读一部立体的、由石头、传说与名字构成的史诗。这里的一砖一瓦，都串联起从北欧十字军东征到民族国家觉醒的壮阔历程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它见证了军事修会这种奇特的中世纪力量如何塑造边疆；它亲历了帝国碰撞的惨烈，并用最决绝的方式定义了尊严；它又在宁静岁月里，默默孕育出唤醒一个民族灵魂的声音。采西斯的故事，是波罗的海历史复杂性、层次性与韧性的微观缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的古堡废墟，不是被精心修复的童话布景，而是历史本身赤裸的伤口与勋章。它不讨好游客，只等待愿意倾听的旅人。当你触摸那些被爆炸灼烧过的石块，当你站在瓦尔德马·鲍尔凝视过的窗前，你会明白，有些地方的存在，就是为了提醒我们：历史从未远去，它就沉淀在土地的脉搏里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？古堡探秘、新城漫步、交通门票与秘境打卡全攻略，请点击我们的【采西斯游玩指南】。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kemeri-national-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯梅里国家公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ķemeri National Park</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sigulda-medieval-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡古尔达中世纪城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sigulda Medieval Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cesis-old-town-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采西斯古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cēsis Old Town</p>
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
