import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '勒皮历史溯源｜法国朝圣奇观的前世今生与圣母传说',
  description: '登上法国火山之城勒皮，探寻欧洲最古老圣母朝圣地的千年传奇。从黑圣母到圣雅各之路起点，火山岩上镌刻的信仰史诗。',
}

export default function LePuyCathedralHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '勒皮', href: '/destinations/europe' },
            { label: '勒皮圣母大教堂', href: '/attractions/le-puy-cathedral-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`勒皮圣母大教堂・Le Puy Cathedral・法国・勒皮`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国中央高原的火山群间，一座城市如神迹般悬于巨岩之上。这里不是寻常的信仰之地，它是欧洲最古老的圣母朝圣地之一，更是通往西班牙圣地亚哥的“法国之路”起点。<strong>勒皮圣母大教堂</strong>，一座将火山、巨石与神学熔于一炉的建筑奇观，见证了千年来无数朝圣者蹒跚的脚步与炽热的虔诚。抛开游玩攻略，走进勒皮的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`勒皮圣母大教堂`} />
                <InfoRow label="英文名称" value={`Le Puy Cathedral`} />
                <InfoRow label="正式名称" value={`Le Puy Cathedral`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`勒皮`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "勒皮的起源，是一部地质奇迹与早期基督教传说交织的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间要追溯到公元3世纪。在中央高原这片古老的火山区，一座85米高的火山栓（<strong>Anis Rock</strong>）和一块82米高的火山颈（<strong>Corneille Rock</strong>）突兀而起，宛如大地指向天空的手指。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在这片土地被基督教化之前，它们已是德鲁伊教信徒心中的圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在公元3世纪，一位罹患重病的当地贵妇，在梦中得到圣母玛利亚的指示：前往那座巨大的火山岩上，她会得到治愈。妇人依言前往，在一块被异教祭祀使用的“热石”上躺下，竟奇迹般康复。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元430年左右，为了纪念这一神迹，当地主教在<strong>Anis Rock</strong>的顶端主持建造了第一座小型圣母礼拜堂。这被认为是法国境内最早的、明确供奉圣母玛利亚的圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的名字<strong>Le Puy</strong>（古法语为“Le Puy-en-Velay”）本身就源自拉丁语“Podium”，意为“高地”或“山丘”。它精准地描述了这座城市的灵魂——一座从火山岩浆中诞生，并一步步攀向信仰巅峰的“高丘之城”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的教堂，与其说是一座建筑，不如说是一个信仰的“锚点”。它牢牢地将基督教的圣母崇拜，钉在了这片古老的异教圣地上，完成了一次深刻的精神地理置换。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座教堂的历史，是由一次次坍塌、重建与升华写就的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>11-12世纪的辉煌与朝圣之路的起点</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们现在看到的大教堂主体，主要建于<strong>11至12世纪</strong>。它并非一气呵成，而是在原有小礼拜堂的基础上，历经多位主教的推动，依山就势，层层叠加而成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一个信仰狂热的时代。随着<strong>克吕尼修道院</strong>影响力的扩张，朝圣文化在欧洲达到顶峰。<strong>勒皮因其古老的圣母崇拜渊源，与圣地亚哥·德·孔波斯特拉、罗马和耶路撒冷并列为中世纪四大朝圣地。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了容纳潮水般涌来的朝圣者，建筑师们展现了惊人的智慧与勇气。他们在陡峭的岩坡上，用本地深色的火山岩建造了庞大的阶梯、回廊和一系列附属礼拜堂。教堂本身成为了朝圣旅程的一部分——攀登那漫长的阶梯，本身就是一种苦行与净化的仪式。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们终于看到了勒皮，它矗立在岩石上，仿佛一座天国要塞。攀登是疲惫的，但每一步都让我们更靠近圣母。”——一位12世纪朝圣者的手记片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣殿骑士团的守护与黑圣母传奇</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大教堂的珍宝中，最著名的是一尊<strong>黑圣母像</strong>。这尊木质雕像可追溯至<strong>17世纪</strong>，但其原型可能更加古老。她面容黝黑，庄严肃穆，怀抱圣婴，是无数奇迹传说的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中世纪，<strong>圣殿骑士团</strong>在勒皮拥有重要据点。传说他们深度参与了大教堂的安保与朝圣路线的维护。黑圣母的崇拜，也与骑士团带回的东方神秘主义色彩有着若有若无的联系。她的“黑色”，被诠释为古老、智慧与不朽的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>法国大革命的劫难与重生</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1789年法国大革命的风暴席卷全国，勒皮大教堂未能幸免。它被革命政权关闭，珍贵的财物被没收或毁坏。那尊著名的黑圣母像，被狂热分子拖出教堂，在公共广场上<strong>当众焚毁</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "整个19世纪，是一场缓慢而坚定的复兴。现在的黑圣母像是<strong>19世纪中期</strong>重制的。建筑师们展开了大规模修复，力图恢复它中世纪的荣光。也正是这一时期，勒皮作为<strong>“圣地亚哥朝圣之路法国段”的起点</strong>这一地位，被重新确认和强化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那始于教堂脚下的<strong>GR65步道</strong>，至今仍在引领着现代朝圣者，踏着古人的足迹，走向远方的圣地亚哥。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "勒皮的历史星空并非由帝王将相独占，而是被朝圣者、教皇与一位圣徒国王的光芒所照亮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>教皇圣玛尔定：从本地石匠到罗马主教</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市最传奇的儿子，莫过于<strong>教皇圣玛尔定一世</strong>。他出生于勒皮附近一个名为<strong>托迪</strong>的地方，据传家族从事石匠行业，这让他自幼便对岩石与建筑有着深刻的理解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛尔定在教会中稳步晋升，最终于<strong>649年7月5日</strong>被选为教皇。他的教皇任期短暂却充满风暴。当时，帝国皇帝康斯坦斯二世支持“基督一志论”异端，试图统一帝国思想。玛尔定一世在<strong>拉特兰大公会议</strong>上坚决驳斥了这一异端，捍卫了正统教义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一勇敢举动激怒了皇帝。<strong>653年</strong>，玛尔定在拉特兰教堂被捕，历经磨难被押送至君士坦丁堡，以叛国罪受审，最后被流放至克里米亚的赫尔松。<strong>655年9月16日</strong>，他在流放地因饥寒交迫与虐待而去世，被后世尊为殉道者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管他的人生终点远离故土，但勒皮从未忘记这位石匠出身的教皇。大教堂内保存有与他相关的圣物，他的坚毅与对信仰的忠诚，成为这座岩石之城精神内核的绝佳象征——如火山岩般坚硬，不畏强权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣路易九世：国王的朝圣与临终馈赠</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与勒皮紧密相连的名人，是法国历史上唯一的圣徒国王——<strong>路易九世</strong>。他不仅是一位虔诚的君主，更是朝圣活动的伟大推动者和实践者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1244年</strong>，路易九世在重病痊愈后，发誓要组织一次十字军东征。在出发前，他进行了一次全国性的虔诚巡礼，勒皮圣母大教堂无疑是关键一站。国王跪拜在黑圣母像前，祈求远征的护佑。这次朝圣，极大提升了勒皮圣地在整个王国的威望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更为深刻的羁绊，发生在他生命的终点。<strong>1270年</strong>，路易九世在第二次十字军东征中，于北非的突尼斯身患瘟疫，生命垂危。在弥留之际，他心中惦念的除了国家，还有他曾虔诚祈祷过的圣地。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“将我心脏的一部分，送往巴黎的圣堂…另一部分，则送往<strong>勒皮</strong>的圣母院。”——据中世纪编年史记载的圣路易临终遗愿片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这份遗愿是否被完全执行已不可考，但传说勒皮大教堂曾保存有这位圣徒国王的<strong>心脏遗骸</strong>。这份跨越千里的临终馈赠，将国王的虔诚与勒皮圣母永久绑定。它不再只是一座地方圣殿，而是承载了王国最高信仰的容器。路易九世用他的声望与传奇，为这座岩石教堂镀上了一层王家与圣徒的双重光辉。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在勒皮，岩石与神迹的传说，远比历史记载更为生动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最核心的传说，仍是那座教堂的奠基神话。除了贵妇治愈的故事，还有一个更古老的版本流传于民间：早在基督教传入之前，当地的异教徒就在<strong>Anis Rock</strong>顶祭祀一位掌管生育与健康的女神。当第一批基督徒到来时，他们发现岩顶总笼罩着一层奇异的“热雾”，岩石本身也温暖如生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位主教认为，这是大地深处圣洁能量的表征，是圣母玛利亚“预先占领”此地的标志。于是，他下令在“热石”之上直接建造祭坛。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这不是异教神的座位，而是我们的圣母早已为自己选定的宝座。看这岩石的温暖，便是她慈爱的余温。”——当地流传的主教训谕" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说关于教堂的建造本身。如此庞大的工程建于悬崖之上，在中世纪看来近乎不可能。于是民间传说，是<strong>天使们</strong>在夜间帮忙运送了最巨大的石料。人们指认教堂侧面一些看似不合常理的巨型石块，说那便是天使的手笔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而关于<strong>黑圣母像</strong>，则有她“自行归来”的传说。在大革命期间被焚毁后，信徒们悲痛万分。多年后，当新雕像完成并准备安放时，一个老樵夫声称，曾在黎明的薄雾中，看到一位黑衣妇人的身影，独自攀登着通往教堂的阶梯，最终消失在大门处。人们坚信，那是圣母的灵在引导她的新形象“回家”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说让冰冷的火山岩有了温度，让庄严的仪式充满了人性的想象。它们构成了勒皮信仰生活中最柔软、最鲜活的底层。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们站在这座依托巨岩、混合了罗曼、拜占庭与哥特风格的奇异教堂前，所感受到的远不止建筑之美。它是一本以岩石为纸、以信仰为墨写就的立体史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它见证了欧洲心灵地图的绘制：从异教圣地到基督教圣所，从一个地方奇迹到跨欧洲朝圣网络的枢纽。每一级被脚步磨光的台阶，都回响着中世纪无数平凡灵魂对超脱的渴望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它诠释了何谓“精神地理学”：人类如何将最险峻的自然造物，转化为最崇高的精神阶梯。火山的力量被驯服，指向了天国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "勒皮圣母大教堂的魅力，正在于这种极致的反差与融合——地质的野性与信仰的精致，物质的沉重与心灵的轻盈，历史的严酷与传说的温柔。它提醒我们，欧洲最深沉的风景，往往不在繁华都城，而正是在这些承载了千年集体凝视与跫音的“高丘”之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂勒皮，便是读懂一段关于坚持、转化与攀登的永恒寓言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ainhoa-basque-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    艾
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">艾诺阿</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ainhoa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-cheverny" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雪瓦尼城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Cheverny</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/labeaume-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉博姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Labeaume</p>
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
