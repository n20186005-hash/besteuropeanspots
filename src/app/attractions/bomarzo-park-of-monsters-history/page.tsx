import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博马尔佐历史溯源｜怪兽公园的前世今生与奥尔西尼家族传奇',
  description: '探秘意大利文艺复兴的暗面：奥尔西尼公爵为何在博马尔佐山谷中，建造这片充满忧郁巨兽的石雕圣林？揭开一段被遗忘的私人哀歌。',
}

export default function BomarzoParkOfMonstersHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '拉齐奥', href: '/destinations/italy' },
            { label: '博马尔佐怪兽公园', href: '/attractions/bomarzo-park-of-monsters-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博马尔佐怪兽公园・Bomarzo (Park of the Monsters)・意大利・拉齐奥`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在罗马以北的隐秘山谷中，时间被巨石怪兽定格。这里没有文艺复兴花园的对称与优雅，只有近三十尊从岩石中嘶吼而出的魔幻造物。它们并非神祇，而是<strong>皮耶尔·弗朗切斯科·奥尔西尼</strong>公爵内心世界的具象——一个关于战争创伤、爱情悼念与哲学沉思的石头寓言。这里是<strong>神圣森林</strong>，一座诞生于16世纪，却超前数个世纪的“心灵地景”。抛开游玩攻略，走进博马尔佐的尘封往事，遇见属于它的忧郁、奇想与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博马尔佐怪兽公园`} />
                <InfoRow label="英文名称" value={`Bomarzo (Park of the Monsters)`} />
                <InfoRow label="正式名称" value={`Bomarzo (Park of the Monsters)`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`拉齐奥`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博马尔佐小镇本身的历史，远比其著名的“怪兽公园”更为古老。它的名字源于古罗马时期，可能来自拉丁语“<em>Bomartium</em>”，意为“马尔斯的战场”，暗示着其作为战略要地的过往。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇坐落在拉齐奥大区的维泰博省，占据着亚平宁山脉一座小山的山顶。其历史可追溯到更久远的<strong>伊特鲁里亚文明</strong>时期，这片土地曾是伊特鲁里亚人领地的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元9世纪左右，博马尔佐作为一座防御性城堡出现，控制着连接罗马与托斯卡纳的重要商路。在中世纪权力更迭中，它先后被多个贵族家族掌控，直至<strong>15世纪</strong>，强势的<strong>奥尔西尼家族</strong>将其纳入稳固的统治之下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小山城的存在，为后来山谷中惊世骇俗的公园埋下了伏笔。奥尔西尼家族不仅是军事贵族，更是文艺复兴艺术的重要赞助人。他们将博马尔佐作为自己的封地之一，并在此建造宫殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而公园所在的谷地，在当时被称为“圣林”，是一片天然岩石嶙峋、林木丛生的荒芜之地。它并非为了公众享乐而规划，最初，它只是家族领地中一片未被驯服的自然边疆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1547年</strong>，当<strong>维琴佐·奥尔西尼</strong>继承爵位并决定在此施展他的奇异构想时，这片土地沉睡的岩石，便被赋予了超现实的灵魂。城市的古老与山谷的原始，共同构成了这场石雕戏剧的绝佳舞台。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "怪兽公园的诞生，绝非一时奇想，而是交织着个人命运与时代思潮的复杂产物。其核心历史印记，深深镌刻在三位一体的创造过程中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是<strong>主人维琴佐·奥尔西尼的战争与哀悼</strong>。维琴佐并非纯粹的艺术家，他首先是一位军人，曾为教皇和神圣罗马帝国皇帝查理五世作战。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在一封书信中苦涩地写道：“我征战四方，只为在和平中寻找一处可以安置我‘疯狂思想’的角落。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1547年</strong>，他在一次战役中被俘，经历了数月的囚禁。这段创伤性经历，彻底改变了他。获释后，他远离政治军事中心，退隐到博马尔佐。不久，他深爱的妻子<strong>朱莉娅·法尔内塞</strong>去世，悲痛给了他创造的最后推力。公园成为他宣泄内心风暴、纪念爱妻的私人圣殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是<strong>建筑师与诗人的无界合作</strong>。公园的设计常归功于著名建筑师<strong>皮尔·里乔·达·维泰博</strong>，他曾是拉斐尔的助手。然而，现代学者认为，这更可能是一场集体创作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维琴佐本人提供了核心哲学与意象，皮尔·里乔负责将其转化为可行的建筑与雕塑方案，而诗人<strong>安尼巴尔·卡罗</strong>则用文字为这些雕塑注入文学灵魂。卡罗可能是许多拉丁文铭文的作者，这些谜语般的句子散布园中，引导观者思考。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，是<strong>被遗忘与重生</strong>。公园在维琴佐公爵去世后（<strong>1585年</strong>），迅速被家族遗忘，湮没在疯长的林木中长达三个多世纪。它太私人、太怪异，不符合后世巴洛克或新古典主义的审美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到<strong>20世纪50年代</strong>，艺术家<strong>萨尔瓦多·达利</strong>偶然到访，被其超现实主义特质震撼，大力宣扬。随后，<strong>乔瓦尼·贝蒂尼</strong>家族购下公园，进行了艰难而精细的修复。<strong>1954年</strong>，这座“神圣森林”才重新向世界敞开大门。它的沉睡与苏醒，本身就是一部浓缩的另类艺术接受史。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>维琴佐·奥尔西尼</strong>，这位怪兽公园的创造者，是一位典型的文艺复兴晚期人物——集军人、学者、哀悼者与艺术梦想家于一身。他的人生，是理解这片石林唯一且最重要的钥匙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他出生于<strong>1523年</strong>，来自势力庞大的罗马贵族奥尔西尼家族。与许多贵族子弟一样，他早年生涯在军事与教会服务中度过。但一场悲剧性的战争，改变了一切。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1547年</strong>的囚禁生涯，不仅是身体的拘束，更是精神的炼狱。获释后，他获得了“退伍军人”的深刻视角，对荣誉、战争与生命的无常产生了幻灭感。他选择退隐到相对偏僻的博马尔佐，并非完全放弃世俗，而是转向一种内向的、哲学性的生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的挚爱，妻子朱莉娅·法尔内塞（来自另一个显赫家族）的早逝，是他人生的第二次重击。悲痛没有击垮他，反而催生了一种极致的纪念方式。公园中许多温柔的形象，如“斜屋”（可能象征失去平衡的世界）、沉睡的宁芙，都被认为是对朱莉娅的致敬。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "诗人安尼巴尔·卡罗在描述公爵时写道：“他将悲伤刻在石头上，让岩石替他哭泣和思考。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，维琴佐绝非一个单纯的伤感者。他是一个博学之人，深受当时流行的赫尔墨斯主义、炼金术符号以及古典神话的影响。公园并非混乱的堆砌：<strong>龙与狮子的搏斗</strong>可能象征善恶冲突；<strong>巨型石像“战争之神”</strong> 是对他军事生涯的讽刺性回顾；而著名的<strong>“地狱之口”</strong>（一张巨型恶魔脸庞，内部是石室），则可能隐喻着穿越痛苦、获得新知的炼金术旅程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他创造的不是供人游乐的花园，而是一个需要“阅读”和“体验”的三维哲学文本。每一尊怪兽，每一句铭文，都是他与来访者（必须是受邀的学者、诗人朋友）进行精神对话的起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公园中一处铭文直白地揭示了他的态度：“<strong>你们，穿行于此世界的人们，请自省</strong>。” 这几乎是他的人生宣言。在美第奇家族塑造的理性、和谐、公共的文艺复兴主流之外，维琴佐·奥尔西尼开辟了一条私密的、怪诞的、直面人性幽暗与宇宙神秘的小径。他本人，就是这条小径上最孤独、最深刻的向导。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在长达数个世纪的荒废岁月里，怪兽公园逐渐从贵族的私人领域，滑入民间传说的迷雾之中。当地居民不敢轻易踏入那片“有魔法的山谷”，关于那些巨石的离奇故事代代相传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说围绕着那座<strong>“斜屋”</strong>。这座小石屋地基故意被建成倾斜，人站在屋内会感到强烈的失衡与眩晕。民间流传，这是<strong>奥尔西尼公爵</strong>为了报复一位不忠的妻子或情人而建，意在让她永远无法站稳，体会他内心的动荡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有一种说法，这些雕塑并非由人工雕刻，而是在一个雷雨交加之夜，从地狱涌出的恶魔被清晨的阳光化为石头，永久地留在了山谷里。那头张着大口的<strong>“地狱之口”</strong>，尤其被描绘成通往地下世界的真实入口，据说在仲夏夜能听到其中传来的微弱呻吟。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老一代的博马尔佐人曾告诫孩子：“日落之后不要靠近圣林，石头里的灵魂会醒来活动。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，关于<strong>龙与狮子战斗组雕</strong>，也有一个忠贞爱情故事的版本：巨龙代表邪恶势力，试图夺走一位少女（象征公爵夫人朱莉娅），而雄狮（代表公爵本人）誓死守护，最终将其击败。这个传说将公爵的私人哀伤，转化为了民间易懂的英雄叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说虽然与历史考据有所出入，但它们赋予了公园第二重生命。它们证明了这些石雕强大、原始的视觉冲击力，足以跨越时代，激发最朴素的集体想象。直到今天，当地一些老人依然对这些巨石怀有某种敬畏，认为它们守护着山谷的秘密。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们漫步在博马尔佐怪兽公园，踩过四百多年的落叶与光影，我们踏入的不仅仅是一座雕塑公园。我们踏入的，是<strong>文艺复兴一个被忽视的剖面</strong>，是一颗贵族心灵在战火与丧痛后的完整投射。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有佛罗伦萨或罗马那种宏大叙事的压迫感。这里的巨石沉默地言说着个体的困惑、爱情的永恒、命运的嘲讽以及对宇宙奥秘的谦卑探问。它是<strong>矫饰主义</strong>艺术在园林领域的极致体现——追求惊奇、动荡与情感张力，而非古典的静穆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的存在提醒我们，历史并非单一线索。在达·芬奇、米开朗基罗的光芒之下，还有像维琴佐·奥尔西尼这样的人物，用更为隐晦、更为个人的方式，参与着时代的思考与创造。他的“圣林”超前地触及了表现主义、超现实主义的领域，成为连接文艺复兴与现代艺术的一座孤绝桥梁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂博马尔佐，便是读懂了一种用石头书写日记的勇气，读懂了一种在创伤中开出的奇异之花。它小众，因为它极度私密；它伟大，也正因为这份毫不妥协的私密，最终触及了人类共通的关于生命、死亡与意义的永恒诘问。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/craco-ghost-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉科鬼城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Craco</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/volterra-monte-baldi-tuscany" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔泰拉与巴尔迪山</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Volterra and Monte Baldi</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dozza-mural-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多扎壁画村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dozza</p>
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
