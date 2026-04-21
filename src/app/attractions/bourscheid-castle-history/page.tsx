import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卢森堡城堡溯源｜布尔沙伊德城堡的前世今生与秘密王朝传奇',
  description: '雄踞苏尔河畔千年，卢森堡最壮观的城堡废墟。揭开冯·布尔沙伊德家族的权力史诗，聆听石墙中尘封的骑士、鬼魂与最后领主的叹息。',
}

export default function BourscheidCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '卢森堡', href: '/destinations/europe' },
            { label: '布尔沙伊德', href: '/destinations/europe' },
            { label: '布尔沙伊德城堡', href: '/attractions/bourscheid-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布尔沙伊德城堡・Bourscheid Castle・卢森堡・布尔沙伊德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢森堡“小瑞士”的密林与深谷之上，<strong>布尔沙伊德城堡</strong>以一片气势恢宏的废墟姿态，俯瞰着苏尔河的蜿蜒碧波。它不是童话中的完美宫殿，而是一部以岩石写就的边境史诗。从<strong>罗马瞭望哨</strong>的隐约血脉，到中世纪<strong>冯·布尔沙伊德家族</strong>的权力中枢，再到在战火与时光中沉寂的浪漫遗迹，这里的每一块苔痕斑驳的砖石，都在低语着防御、野心与最终的退场。抛开游玩攻略，走进布尔沙伊德城堡的尘封往事，遇见属于它的铁血、荣耀与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布尔沙伊德城堡`} />
                <InfoRow label="英文名称" value={`Bourscheid Castle`} />
                <InfoRow label="正式名称" value={`Bourscheid Castle`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`布尔沙伊德`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布尔沙伊德城堡的起源，深埋在卢森堡早期建国史的迷雾之中。现代考古发现暗示，其山巅早在<strong>罗马帝国时期</strong>（公元1-4世纪）可能就设有瞭望点，监视着苏尔河谷这条天然通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，城堡的真正诞生，要待到卢森堡边境动荡的<strong>中世纪早期</strong>。普遍认为，第一座坚实的石质堡垒建于<strong>约公元1000年</strong>左右。这正是<strong>神圣罗马帝国</strong>奥托王朝统治末期，地方领主纷纷筑堡自固、划地而治的时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的名字“Bourscheid”本身，就是一则地理宣言。它很可能源于古高地德语词汇 “<em>burg-scheide</em>”，意为 <strong>“堡垒之界”</strong> 或 <strong>“城堡的分界”</strong>。这精准地定义了它的天命：它坐落于艾菲尔高原与古特兰高原的交接处，俯瞰苏尔河，天然成为<strong>卢森堡北部边境</strong>的军事锁钥与权力象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，它并非王室财产，而是一个地方豪强家族的私产与军事基地。这个家族，因其领地与堡垒，将自己的姓氏与这座岩石融为一体，从此被称为——<strong>冯·布尔沙伊德家族</strong>。城堡的诞生，标志着一个地方王朝传奇的开端。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡最深刻的印记，并非单一战役，而是其作为<strong>家族权力容器</strong>不断膨胀与最终凝固的过程。其建筑史清晰地镌刻了家族的兴衰曲线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记是<strong>14至16世纪的扩建黄金期</strong>。在冯·布尔沙伊德家族的权力巅峰，城堡从一座简陋的军事据点，被系统地改造、扩建成一个功能齐全的<strong>贵族自治领中心</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份1384年的财产清单记载了城堡内的丰富储备：“24套盔甲、大量弩箭、4桶鲱鱼、成堆的谷物……” 这描绘了一幅不仅能自持，更能长期固守的领地中枢图景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一时期，标志性的<strong>住宅塔楼</strong>拔地而起，其内部出现了宏伟的<strong>骑士大厅</strong>、装饰性的凸窗和相对舒适的居住空间。同时，强大的<strong>外围防御墙</strong>被修筑，形成了今天我们所见的、拥有十一个塔楼的巨大贝壳状轮廓。这次扩建，宣告城堡从“堡垒”向“堡垒宫殿”的华丽转身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个决定性的历史印记，是<strong>1603年之后的骤然衰落与沉寂</strong>。随着最后一位直系领主<strong>让·德·贝克</strong>的离世，城堡因复杂的继承关系被分割、易主。它不再是某个家族倾注心血与荣耀的“家”，而沦为一份疏于管理的遥远资产。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>三十年战争</strong>（1618-1648）的烽火席卷欧洲，卢森堡未能幸免。城堡的防御在新型火炮面前已然过时，在战乱中遭到严重破坏。更重要的是，时代变了。贵族们更倾向于居住在河谷中舒适宽敞的庄园，而非阴冷潮湿的山顶巨石之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的维护被彻底忽视，开始了不可避免的<strong>废墟化</strong>进程。到18世纪，它已被完全废弃，成为当地牧羊人的歇脚处和浪漫主义画家笔下苍凉的背景。从权力之巅到被时光遗忘，这巨大的落差本身，就是最震撼的历史印记。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布尔沙伊德城堡的故事，本质上就是<strong>冯·布尔沙伊德家族</strong>的故事。这个家族并非欧洲历史舞台上的顶级玩家，却正是这种“中坚力量”的沉浮，最能折射出中世纪领主政治的微观面貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "家族的耀眼时刻，凝聚在<strong>西格弗里德二世·冯·布尔沙伊德</strong>身上。他活跃于14世纪上半叶，是一位典型的封建时代精英。通过精明的军事服务、政治联姻和土地交易，他极大地扩展了家族领地与影响力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史记录显示，他不仅是卢森堡领主的忠实封臣，更将其忠诚与武力服务于遥远的<strong>波西米亚国王</strong>。这种跨地区的效忠，为他带来了丰厚的赏赐与威望。正是在他及其继任者的时代，城堡经历了前述那场雄心勃勃的扩建。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "有编年史隐约提及，西格弗里德二世以“宴席丰盛、待客慷慨”闻名。我们可以想象，在新建的骑士大厅里，他如何用美酒与野味款待盟友，在火光摇曳中巩固权力网络。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，家族命运的转折点，以一位悲剧人物的登场为标志——<strong>让·德·贝克</strong>。他并非布尔沙伊德家族直系，而是通过婚姻成为末代领主。他的统治期（16世纪末至1603年）充满了财务困境与不幸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让·德·贝克卷入了昂贵的法律诉讼，并被迫承担沉重的债务。为了筹款，他甚至不得不抵押部分领地。更致命的是，他与妻子<strong>玛格丽特·冯·埃尔茨</strong>的婚姻没有留下存活的后代。当他于<strong>1603年</strong>去世时，布尔沙伊德家族直系血脉就此断绝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的死亡，不仅是一个人的终结，更是一个地方王朝与它的权力象征之间，血脉纽带的彻底断裂。城堡的灵魂仿佛也随之而去，迅速滑向衰亡的轨道。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间记忆将他描绘成一个被厄运缠绕的忧郁领主。传说在他去世后，人们清理城堡时，发现了他留下的巨额债单和空旷的储藏室，与一个世纪前的富足清单形成了令人唏嘘的对比。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如同所有古老的城堡，布尔沙伊德的石头也滋生了属于它的幽灵与秘闻。最著名的传说是关于 <strong>“白夫人”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，在城堡废弃后的某个风雨之夜，当地村民总能看到一个身着白色长裙的幽影，在最高的塔楼窗边徘徊，或沿着残破的城墙漫步。她从不说话，只是静静凝视着下方的苏尔河谷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有人说，她是某位因爱情悲剧而早逝的领主女儿，灵魂被困在了父亲的家堡之中。另一种更广为流传的说法则认为，她就是<strong>玛格丽特·冯·埃尔茨</strong>，那位没有子嗣的末代领主夫人。她的幽灵，象征着家族血脉断绝的永恒哀伤，也守护着这片已无继承人的故土。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与城堡的<strong>小教堂遗址</strong>有关。据说在月圆之夜，若细心倾听风声穿过废墟的呜咽，能隐约辨出古老的格里高利圣咏。老人们说，这是昔日城堡牧师在为布尔沙伊德家族历代亡魂祈祷，他们的灵性依恋，比石头更为持久。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡脚下，还有关于 <strong>“城堡矮人”</strong> 的趣谈。这些善良的小精灵曾居住在城堡的地基岩缝中，会在夜晚帮助诚实的仆役完成工作，或指引在森林中迷路的城堡孩童回家。传说他们随着最后一批仆人的离开而消失了，只留下一个空空的、关于守护与忠诚的念想。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们攀上布尔沙伊德城堡的山径，所见的不仅是卢森堡境内占地最广的城堡废墟。我们站立的，是一部<strong>微观的中世纪史诗的终章</strong>。它清晰地展示了一个地方权力从勃兴（筑堡）、到鼎盛（扩建）、再到因血脉断绝与时代变迁而湮灭（废弃）的全过程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有王室婚姻的宏大叙事，只有冯·布尔沙伊德家族这样的“历史中坚”最真实的生存轨迹：他们的野心、投资、家族策略以及无法对抗的历史潮流。城堡的废墟状态，恰恰是其历史价值最完整的呈现——它不是被修复成某个凝固时光的博物馆，而是一具依然在呼吸的<strong>时光切片</strong>。风霜雨雪继续雕刻着它，让衰落本身成为一种动态的、可被感知的历史延续。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂布尔沙伊德，便是读懂卢森堡乃至整个欧洲封建体系下，无数个类似家族与堡垒的共同命运。在它的沉默与残缺之中，回荡着钢铁交击的余音、宴会散场的寂静，以及自然力量最终收回一切时的、庄严的叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dudelange-old-steelworks-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪德朗日老钢铁厂遗址公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dudelange Old Steelworks Park</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vianden-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    菲
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">菲安登城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vianden Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/berdorf" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔多夫（米勒塔尔“小瑞士”的中心）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Berdorf</p>
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
