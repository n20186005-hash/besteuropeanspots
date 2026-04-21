import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃克斯施泰因历史溯源｜德国条顿森林秘境，千年圣石的异教谜题与基督教烙印',
  description: '深入德国“巨石阵”埃克斯施泰因的尘封史诗。探秘日耳曼异教圣地、解读中世纪神秘浮雕、追寻浪漫主义者的狂热。这是一部刻在岩石上的德国精神变迁史。',
}

export default function ExternsteineRockFormationsHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '德国', href: '/destinations/europe' },
            { label: '北莱茵-威斯特法伦州（靠近代特莫尔德市）', href: '/destinations/europe' },
            { label: '埃克斯施泰因岩层', href: '/attractions/externsteine-rock-formations-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃克斯施泰因岩层・Externsteine・德国・北莱茵-威斯特法伦州（靠近代特莫尔德市）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在德国北莱茵-威斯特法伦州茂密的条顿森林深处，五根参天砂岩巨柱拔地而起，犹如被巨人遗忘的琴键。这里不是一座城，却承载着比任何城市都更悠远、更矛盾的灵魂。它被奉为日耳曼民族的异教心脏，又被镌刻上最深刻的基督教印记；它是浪漫主义者的精神图腾，也是考古学家永恒的谜题。抛开游玩攻略，走进埃克斯施泰因的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃克斯施泰因岩层`} />
                <InfoRow label="英文名称" value={`Externsteine`} />
                <InfoRow label="正式名称" value={`Externsteine`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`北莱茵-威斯特法伦州（靠近代特莫尔德市）`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃克斯施泰因并非传统意义上的“城市”，而是一处拥有万年历史的自然奇观与人文遗迹复合体。它的故事，始于地质，兴于信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约七千万年前的白垩纪晚期，这片区域还是一片浅海。沙粒沉积、压实，形成了坚硬的砂岩。随后的大规模地质运动将其推出海面，风霜雨雪历经百万年的侵蚀，最终雕琢出了这组高达<strong>40米</strong>、长达数百米的奇异岩柱群。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人类何时首次仰望这些巨岩？考古发现将时间定格在<strong>旧石器时代晚期</strong>。岩壁下发现的燧石工具表明，早在公元前一万年左右，这里已是狩猎采集者的临时营地或庇护所。真正的“起源”时刻，属于公元前<strong>2000年至公元初</strong>的漫长岁月。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那段被历史浓雾笼罩的时期，正是日耳曼各部落在中欧繁衍生息的时代。这些直插云霄的巨岩，对崇拜自然与天象的原始宗教而言，具有无可比拟的神圣性。其名称“Externsteine”的词源也指向古老的神秘。“Extern”很可能源于古萨克森语“<strong>Agistersten</strong>”，意为“阿格斯蒂之石”。“阿格斯蒂”是谁？一位被遗忘的部落神祇？一位传奇酋长？名字本身，已是第一个失落的传说。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的第三层印记，则带着一丝荒诞与警示。<strong>1933年</strong>，纳粹掌权后，迅速劫持了关于埃克斯施泰因的神话。党卫军首领<strong>海因里希·希姆莱</strong>对此地极为痴迷，他领导的“<strong>祖先遗产学会</strong>”在此进行了大规模（但极不科学）的考古发掘，企图找到雅利安人至高无上的“物证”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们甚至计划将这里改造为党卫军的“圣殿”。这段黑暗插曲，为岩石的光辉历史蒙上了一层阴影，也深刻地揭示了历史叙述如何能被政治力量扭曲和利用，服务于截然不同的目的。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，则是<strong>考古学家威廉·蒂尔</strong>。他与前者的宏大叙事形成了微妙对照。在<strong>20世纪30年代</strong>纳粹狂热利用此地时，蒂尔是少数保持冷静学术头脑的学者。他于<strong>1934-1935年</strong>主持了对埃克斯施泰因首次系统性的科学考古发掘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的工作小心翼翼，层位清晰。尽管压力巨大，他仍坚持公布了一些“不受欢迎”的发现：没有找到确凿证据证明此处是<strong>伊尔明苏尔</strong>，早期人类活动遗迹也远比浪漫主义者想象的更朴素、更断续。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“岩石本身是永恒的剧场，但登台的演员和剧本，却随着时代的灯光不断变换。我们的职责是辨认每一层褪色的油彩，而不是为某一出戏喝彩。” —— 威廉·蒂尔工作手记中的片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的严谨触怒了试图制造神话的当权者。随后，更“听话”的考古学家接手了工作。蒂尔的经历，成了那个时代知识分子困境的缩影：在民族神话与历史真相之间，在岩石的永恒与时代的喧嚣之间，他选择了后者，也因此被前者淹没。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "围绕着这些沉默的巨岩，民间口耳相传的故事充满了原始的自然力与神秘色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最古老的传说称，这里是<strong>德鲁伊祭司</strong>举行秘仪的中心。月圆之夜，他们会在岩顶与星辰对话，在石室中保存永恒之火。据说，其中一根岩柱顶部的方形凹槽，并非自然风化，而是德鲁伊用于观测<strong>夏至日出</strong>的精准仪器。当第一缕阳光穿透特定岩隙，恰好照亮祭坛，神圣之年便宣告开始。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个流传甚广的故事关于“<strong>太阳之门</strong>”。在主岩群的一道天然狭窄缝隙中，传说在每年<strong>夏至</strong>的清晨，初升的太阳会射入一道完美的光束，如同开启一扇通往另一世界的大门。穿过这道光之门的人，将获得预见未来的能力，或与祖先的灵魂对话。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“老祖母常说，岩石里住着古老的精灵，不是魔鬼，也不是天使，是比基督教更早的存在。它们在山风呼啸时歌唱，在闪电劈中岩顶时苏醒。所以樵夫都不敢在夜里靠近那里。” —— 收录于19世纪的地方民俗志" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有一则略带惊悚的传说，关于岩壁上一个人工开凿的“<strong>石椅</strong>”。它被称为“<strong>女巫之椅</strong>”或“<strong>审判之座</strong>”。中世纪时，被指控为女巫的人会被迫坐上去，如果她能保持平衡不掉落，则证明清白（或证明有魔鬼相助）；若跌落，则定罪。岩石脚下，仿佛总能听到历史的低语与叹息。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客站在埃克斯施泰因面前，他们看到的不仅仅是奇特的自然景观。他们看到的，是一本打开的、厚重的石头史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一处凿痕，都是一次信仰的征服；每一次“发现”，都是一代人的精神投射。从异教圣坛到基督教礼拜所，从浪漫主义图腾到民族主义符号，再到被误读与劫持的悲剧章节——埃克斯施泰因如同一面永恒的棱镜，折射出德意志乃至欧洲精神史中所有核心的冲突与追寻：自然与恩典、神话与历史、民族与普世、狂热与理性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂埃克斯施泰因，便是读懂了一种文明如何不断追问“我从哪里来”，并不断在自己的起源故事上写下新的注脚。它的魅力，正在于这种永恒的对话性与未完成性。它不提供答案，只静静矗立，邀请每一代人提出自己的问题。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、最佳拍摄机位与徒步路线全攻略，请点击[埃克斯施泰因游玩完全指南]。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              <a href="/attractions/schmalkalden-city-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施马尔卡尔登</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schmalkalden</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hartenfels-castle-torgau-spiral-staircase" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈滕费尔斯城堡（绝美螺旋阶梯）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hartenfels Castle (Torgau)</p>
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
