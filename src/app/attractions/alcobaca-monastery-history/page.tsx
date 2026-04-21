import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔科巴萨历史溯源｜修道院的前世今生与爱情传奇，葡萄牙隐秘心脏的王朝秘辛',
  description: '探索葡萄牙阿尔科巴萨修道院的隐秘历史，揭开中世纪爱情悲剧与建筑奇迹背后的故事。走进国王、圣徒与匠人的世界，聆听石头诉说的永恒回响。',
}

export default function AlcobacaMonasteryHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '阿尔科巴萨', href: '/destinations/europe' },
            { label: '阿尔科巴萨修道院', href: '/attractions/alcobaca-monastery-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔科巴萨修道院・Alcobaça Monastery・葡萄牙・阿尔科巴萨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在葡萄牙中部宁静的阿尔科巴萨小镇，一座恢弘的石灰岩建筑静默矗立了八个多世纪。它不仅是联合国教科文组织世界遗产，更是一座以石头写就的中世纪史诗，其核心镌刻着欧洲最著名的爱情悲剧之一。<strong>阿尔科巴萨修道院</strong>，这座西多会建筑的巅峰之作，远非单纯的宗教场所，它是葡萄牙建国雄心的见证，是王室权力与个人情感的角斗场。抛开游玩攻略，走进阿尔科巴萨的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔科巴萨修道院`} />
                <InfoRow label="英文名称" value={`Alcobaça Monastery`} />
                <InfoRow label="正式名称" value={`Alcobaça Monastery`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`阿尔科巴萨`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿尔科巴萨的故事，与葡萄牙王国的诞生紧密相连。小镇的缘起，几乎完全依赖于这座修道院的建立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间回到 <strong>1147年</strong>，葡萄牙第一位国王 <strong>阿方索·亨里克斯</strong> 从摩尔人手中夺回了圣地亚哥。为感谢神的恩典，他决定履行一个誓言：在征服的土地上修建一座宏伟的修道院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他选择了阿尔科河与巴萨河交汇处的肥沃谷地。“阿尔科巴萨”这个名字，便源于这两条河流。一种说法认为它来自阿拉伯语“Alcobaxa”，意为“堡垒”，另一种则指向拉丁语“Albogassa”，意义已湮没在历史中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1153年</strong>，国王将这片土地赠予了主张苦修、严谨简朴的<strong>西多会</strong>。修道院的建立，具有深刻的政治与宗教双重目的。它既是信仰的灯塔，也是巩固新王国边境、进行农业垦殖与文化教化的前哨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的修士们在此开垦荒地，引进先进农业技术，将山谷变为粮仓。修道院迅速成为葡萄牙乃至伊比利亚半岛西多会秩序的中心，其影响力辐射整个王国。可以说，是先有了修道院，才有了围绕它生长、服务的市镇阿尔科巴萨。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的石头，记录着王国命运的每一次脉动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>一、 王朝的基石与建筑的诞生</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的建设始于 <strong>1178年</strong>，但直到 <strong>1252年</strong> 才基本竣工。这近一个世纪的工程，诞生了葡萄牙第一座真正意义上的哥特式建筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其设计严格遵循西多会简朴、纯粹、追求光线与比例的美学。教堂的<strong>中殿</strong>高达20米，长度超过100米，在当时伊比利亚半岛无出其右。这种惊人的空旷与高度，并非为了炫耀，而是为了营造一种直达天听的崇高与冥想氛围。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "厨房里巨大的烟囱与引水渠，显示了修道院自给自足社区的规模。餐厅的静默管道，允许修士在用餐时也能聆听经文。每一处设计，都将信仰融入日常。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>二、 烈火、重建与 Manueline 风格的绽放</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>14世纪</strong>，一场大火严重损毁了修道院。随后的重建，为这座严谨的哥特式骨架注入了新的艺术生命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪初</strong>，在国王<strong>曼努埃尔一世</strong>的盛世下，著名的 <strong>Manueline</strong> 风格（葡萄牙晚期哥特式）被引入。这种风格以繁复的石雕、海洋元素（绳索、贝壳、锚）和对地理大发现的歌颂而著称。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们命令，用石头歌颂我们的海洋功绩，让后来者知晓，信仰与航船如何将世界带到葡萄牙门前。”——据信出自曼努埃尔一世对匠人的谕示" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院入口的<strong>西门</strong>、以及<strong>国王厅</strong>的精美回廊，都增添了华丽的曼努埃尔式窗饰与浮雕，与早期的简朴形成戏剧性对话，见证了葡萄牙从陆地王国向海洋帝国的转型。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>三、 拿破仑的创伤与国家的重生</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1810年</strong>，灾难再次降临。<strong>拿破仑</strong>的法国军队入侵葡萄牙，占领了阿尔科巴萨修道院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "军队将这里变为兵营和马厩。他们洗劫了珍贵的图书馆，数千份中世纪手稿或被焚毁，或被撕碎丢弃。许多墓葬遭到亵渎，雕塑被破坏。这场劫掠对葡萄牙文化遗产造成了不可估量的损失。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪中叶，随着宗教秩序的解散，修道院逐渐衰落。直到 <strong>20世纪</strong>，它才被列为国家古迹并开始系统性修复，最终在 <strong>1989年</strong> 被列入世界遗产名录，重获新生。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的灵魂，系于一对生死相恋的恋人——<strong>佩德罗一世</strong>与<strong>伊内斯·德·卡斯特罗</strong>。他们的故事，是葡萄牙文学与历史中永恒的悲剧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>佩德罗一世（1320-1367），“正义者”还是“残忍者”？</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩德罗是国王阿方索四世之子。<strong>1340年</strong>，他与西班牙公主康斯坦丝结婚，公主的侍女正是来自加利西亚贵族家庭的伊内斯·德·卡斯特罗。悲剧的序幕就此拉开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩德罗与伊内斯迅速坠入爱河。即便在康斯坦丝公主去世后，两人的关系仍为宫廷与国王所不容。伊内斯的外国身份，使其兄弟在卡斯蒂利亚王国对葡萄牙构成潜在威胁。<strong>1355年1月7日</strong>，在科英布拉，趁佩德罗外出，阿方索四世派出的三名贵族杀害了伊内斯。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我死得无辜，我的血将呼唤复仇。”——葡萄牙民间传说中伊内斯最后的遗言" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊内斯之死将佩德罗推向了疯狂的对立面。他起兵反抗自己的父亲，几乎引发内战。最终父子和解，但仇恨的种子已深种。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1360年</strong>，佩德罗继承王位后，做出一系列惊世骇俗的举动。他宣布自己曾与伊内斯秘密结婚（真实性至今存疑），追封她为葡萄牙王后。他命人将伊内斯的遗体从科英布拉挖掘出来，为其戴上后冠，盛装摆放在宝座上，要求所有朝臣依次上前，亲吻她已腐烂的手背，宣誓效忠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>伊内斯·德·卡斯特罗（1325-1355），死后的王后</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩德罗一世对伊内斯的终极致敬，就是在这座阿尔科巴萨修道院。他命令为她，也为自己，建造了全葡萄牙最精美、最动人的两座石棺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这两座<strong>14世纪哥特式陵墓</strong>相对而置，分列于教堂耳堂两侧。石棺以精美的浮雕叙述着他们的故事：伊内斯石棺描绘最后的审判与基督生平，佩德罗的石棺则雕刻狩猎场景和圣巴塞洛缪殉难图——他去世的日期正是这位圣徒的纪念日。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最令人动容的细节在于棺脚。两座石棺的脚端，都雕刻着<strong>天使</strong>，他们手持的卷轴上分别刻着 <strong>“直到世界尽头”</strong> 和 <strong>“前来相会”</strong>。民间坚信，在<strong>末日审判之日</strong>，两人将从棺中起身，第一眼便能看见彼此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佩德罗于 <strong>1367年</strong> 去世，与伊内斯同葬于此。他们的爱情超越了死亡，使这座本为宗教而建的修道院，成为了欧洲浪漫主义最悲怆、最具体的圣地。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间的尘埃为这段历史悲剧披上了神秘的面纱，衍生出无数动人传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的是关于 <strong>“泪之泉”</strong> 的故事。相传，伊内斯被囚禁在科英布拉时，她的泪水汇成了一道泉水。而另一种说法则指向阿尔科巴萨修道院花园中的一处泉眼，人们说那是伊内斯的泪水渗过大地，流至此地，泉水永远带着一丝咸涩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有传说称，在<strong>月圆之夜</strong>，能听见修道院回廊中有女子轻柔的哭泣声，或是看到两个朦胧的白色身影，在相对的石棺间静静凝视。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“不要为我的死亡而悲伤，我的爱。我们的石棺已被放置，当我们醒来面对造物主时，你的目光将第一个找到我。”——一首流传的“伊内斯致佩德罗”民间歌谣中的句子" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人也相信，在佩德罗下令让贵族亲吻伊内斯遗体的那天，一位贵族因恐惧和厌恶而晕倒。佩德罗并未处罚他，只是冷冷地说：“你拒绝向你的王后致敬，那么你的家族将永远不被王室信任。”这个诅咒般的预言，在几个世纪后的某个贵族家族没落时，仍被人们提起。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客步入阿尔科巴萨修道院那无比空旷、被时间磨光的教堂中殿时，感受到的远不止建筑的宏伟。脚下是历代修士、国王、骑士的墓碑，空气冰冷而肃穆。走到耳堂，那两座相对无言却诉尽千言万语的石棺，瞬间将人拉回那个爱恨交织、快意恩仇的中世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不仅是葡萄牙国家身份的奠基石，是建筑艺术从罗马式向哥特式、再向曼努埃尔式演进的全息画卷，更是一个关于人类情感永恒主题——爱情、权力、复仇与救赎——的具象化剧场。它小众，因为它深藏于内陆小镇，不为海滩阳光之旅的游客所熟知；它伟大，因为它以最极致的方式，将一段个人的悲剧，镌刻成了国家集体记忆与文化遗产的核心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂阿尔科巴萨，便是读懂了葡萄牙民族性格中深沉、浪漫甚至略带忧郁的一面。在这里，历史不是教科书上的名词，而是可以触摸的冰凉石棺，是穿越数百年的、依然令人心颤的凝望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chaves-roman-bridge-and-fortress-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙维什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chaves</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/capela-dos-ossos-faro" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法鲁人骨礼拜堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Capela dos Ossos (Faro)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Monastery</p>
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
