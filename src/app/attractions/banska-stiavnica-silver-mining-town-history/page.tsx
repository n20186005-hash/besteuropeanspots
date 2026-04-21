import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯洛伐克银矿古城前世今生｜班斯卡什佳夫尼察矿业传奇与名人往事深度溯源',
  description: '深入中欧“白银宝库”心脏。揭秘班斯卡什佳夫尼察千年采矿史、世界最古老矿业学院传奇，以及改变欧洲技术的天才工程师们。一段被火山与财富塑造的史诗。',
}

export default function BanskaStiavnicaSilverMiningTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '班斯卡什佳夫尼察', href: '/attractions/banska-stiavnica-silver-mining-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`班斯卡什佳夫尼察・Banská Štiavnica・斯洛伐克・班斯卡什佳夫尼察`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它深藏在斯洛伐克火山群环绕的盆地中，地表之上是童话般的巴洛克小镇，地表之下则是一座掏空了整座山脉的、深达数十公里的迷宫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的财富曾支撑起<strong>匈牙利王国</strong>的王冠，这里的智慧孕育了<strong>中欧第一所矿业高校</strong>，这里的工程师用天才般的水力系统，驱动了整整一个时代的工业脉搏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不是一个简单的观光地，而是一部镌刻在岩石与时光里的技术文明史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进<strong>班斯卡什佳夫尼察</strong>的尘封往事，遇见属于它的白银、烈火与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`班斯卡什佳夫尼察`} />
                <InfoRow label="英文名称" value={`Banská Štiavnica`} />
                <InfoRow label="正式名称" value={`Banská Štiavnica`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`班斯卡什佳夫尼察`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "班斯卡什佳夫尼察的故事，始于大地深处的一次炽热邂逅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约在<strong>一千多年前</strong>，早期的斯拉夫定居者在此发现了矿石露头。但真正的转折点发生在<strong>12世纪</strong>，当来自德国西部和北部的“萨克森矿工”受邀而来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们拥有当时欧洲最先进的采矿与冶炼技术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Banská”在斯洛伐克语中意为“矿业的”，而“Štiavnica”则源于流经此地的一条小河。这个名字直白地宣告了它的天命——一座因矿而生的城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的 settlement（定居点）围绕着富银矿脉生长。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1238年</strong>，它被正式授予“皇家自由采矿城镇”的特许状。这意味着它直接效忠于匈牙利国王，享有高度的自治权、免税权和独立的司法权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "财富如地下的泉水般喷涌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了<strong>13世纪末</strong>，这里已成为<strong>匈牙利王国</strong>乃至整个中欧最重要、最富有的白银和黄金来源地。其产量一度占全球白银总产量的三分之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市并非自然生长，而是被财富与特权精心催化的产物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它诞生于国王对贵金属的渴望，建立在萨克森矿工的技艺之上，并迅速在喀尔巴阡山的环抱中，长成了一颗璀璨而坚硬的“岩石心脏”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的命运，与地下矿脉的每一次呼吸紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是知识的制度化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "面对日益复杂的深井开采、排水和冶炼难题，经验口传心授已不够。<strong>1762年</strong>，在<strong>玛丽亚·特蕾莎</strong>女皇的支持下，<strong>塞姆尼茨矿业学院</strong>在此成立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是世界上<strong>第一所专门的高等矿业教育机构</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的建立，标志着采矿从一门手艺向一门科学转变。学院汇集了当时最顶尖的学者，研究领域从矿物学、化学延伸到冶金学、机械学。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里毕业的工程师，被派往哈布斯堡帝国的各个角落，乃至全世界。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“为了帝国的繁荣，必须让最深的地底智慧，照耀在最明亮的学府之中。” —— 摘自女王特许状精神" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是外患塑造的坚毅身躯。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16-17世纪</strong>，奥斯曼土耳其帝国的势力向北扩张，屡屡威胁中欧。位于矿业富区的班斯卡什佳夫尼察成为重点目标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "作为回应，市民们没有选择弃城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们耗巨资，以惊人的速度在城镇四周的山丘上，修建起一套庞大而互通的<strong>防御工事系统</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中包括两座核心城堡——<strong>旧城堡</strong>与<strong>新城堡</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中新城堡形如一个巨大的葡萄酒桶，专为抵御炮击设计，成为俯瞰与守卫全城的象征。这座城市用采矿积累的财富，为自己铸造了一副盔甲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是帝国女皇的亲临。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1744年</strong>与<strong>1751年</strong>，<strong>玛丽亚·特蕾莎</strong>女皇两次到访。这不仅是莫大荣耀，更是对这座城市经济与战略地位的绝对肯定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的到访加速了矿业学院的成立，也推动了城市巴洛克风貌的更新。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "市政厅、圣凯瑟琳教堂等标志建筑，都在那个时期重建或修饰，奠定了今天小镇优雅而规整的巴洛克基调。战火与皇权，共同雕刻了它的轮廓。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市是工程师与科学家的圣殿，其中两位天才的光芒尤为耀眼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位，是 Samuel Mikovíni（1700-1750）。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位数学家、工程师、制图师和天文学家，堪称“斯洛伐克达芬奇”。他与这座城的羁绊，始于创立之初的矿业学院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>Mikovíni</strong> 被任命为首任<strong>实践几何学与采矿制图学教授</strong>。他不仅仅是教书，更彻底革新了矿业测量与地图绘制。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他设计了精确的测量仪器，并带领学生绘制了第一套科学、准确的矿山地下巷道系统图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这如同为盲目的掘金者装上了眼睛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的才华远不止于此。他还为匈牙利王国绘制了有史以来最精确的地图集，并参与了多处天文台的建造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在班斯卡什佳夫尼察，他的痕迹无处不在：学院的教学体系、档案馆中珍贵的古老矿图，乃至城市早期的规划中，都有他理性的笔触。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的一生，是将抽象数学应用于大地与工程的典范。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二位，是 Jozef Karol Hell（1713-1789）。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是真正的“井下救星”。随着矿井越挖越深，地下水成为最大梦魇。传统的马力或人力抽水机效率低下，成本高昂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>Hell</strong> 这位帝国宫廷机械师，在此地完成了他的杰作——<strong>“Hell 机器”</strong>，即一种革命性的<strong>水力抽水系统</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的天才之处在于“就地取材，以水治水”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他设计了一套复杂精巧的管道与水渠系统（许多至今可见），将山区汇聚的地表水引至高位，利用巨大落差产生的动能，驱动地下数百米深处的活塞水泵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这套系统就像一个用流水织成的、永不停歇的机械心脏。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我看到瀑布的力量，便想，为何不用这自然之力，去征服地下的洪水？” —— 民间流传的 Hell 之语" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1749-1768</strong>年间，他成功为多个最深的矿井安装了这种机器，其中一台甚至能提升<strong>212米</strong>的水柱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这不仅是技术奇迹，更拯救了整个矿业的经济命脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>Hell</strong> 的机器在此运行了超过一个世纪，他的工坊遗址仍是技术朝圣之地。他并非理论巨匠，却是用双手与巧思直接改写产业历史的实践之神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的故事证明，这座城的灵魂，不仅是白银，更是那照亮幽深之地的人类智慧之光。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "矿工的生活与死亡相伴，因此这里滋生的传说，也充满了地底的幽暗与希冀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说关于“<strong>白夫人</strong>”（Biela pani）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她并非恐怖的幽灵，而是一位仁慈的守护精灵。传说她是一位古代矿工的女儿，因爱情悲剧而死去，灵魂便与矿脉融为一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "矿工们相信，当她以一身白衣、手持矿灯的形象出现在巷道中时，并非噩兆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相反，她是来<strong>指引迷途的矿工</strong>，或<strong>警示即将发生的塌方与危险</strong>。她的出现，意味着守护与生机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说深刻反映了矿工社群的心理：在极度不可测的自然力量面前，他们需要将恐惧转化为一个具象的、善良的超自然庇护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“白夫人”是黑暗中的一丝慰藉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与城市的象征——“<strong>滑翔的乌龟</strong>”有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这听起来颇为奇幻。传说在很久以前，矿工们在圣母升天教堂的塔楼上，放置了一只镀金的乌龟风标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "某次巨大的地下爆炸撼动了全镇，强烈的冲击波竟将这只沉重的金属乌龟从塔顶震飞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它没有坠落，而是不可思议地“滑翔”了一段距离，最终落在城镇的另一端。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "居民视此为神迹，意味着这座城市即使在灾难中也能“平稳过渡”，受到上天庇佑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说后来演变为一个独特的民间节日，象征着韧性重生。传说为这座技术之城，披上了一层神秘而温情的面纱。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在班斯卡什佳夫尼察，你走过的每一步，都可能踩在某条古老巷道的正上方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的宁静山色，曾回响着井下斧凿的轰鸣；这里的优雅广场，曾沸腾着金属交易的热潮；这里的古老校舍，曾孕育着改变世界工业图景的思想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不是一个凝固的博物馆，而是一幅<strong>立体、生动的欧洲技术文明演进长卷</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从中世纪矿工的汗水，到文艺复兴时期工程师的蓝图，再到启蒙运动时代学者的理论，层层叠叠，清晰可辨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1993年</strong>，它与整个矿山系统被列入世界遗产，评语精准：“一个杰出的、保存完好的、历史悠久的采矿中心。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其价值远不止风景。它见证了人类如何以勇气、协作与智慧，向地球深处索取资源，并在此过程中催生了城市治理、科学技术与高等教育。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂它，便是读懂了哈布斯堡王朝的经济基石，读懂了工业革命前夜那激动人心的技术飞跃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是书页，是你可以呼吸到的、混合着森林气息与古老岩石味道的空气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何探访古老矿坑、打卡绝美俯瞰点、规划完美一日行程，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cicmany-village-slovakia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奇
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奇奇马尼</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Čičmany</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dobinska-ice-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多布希纳冰洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dobšinská Ice Cave</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cerveny-kamen-castle-slovakia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    红
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">红石古堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Červený Kameň Castle</p>
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
