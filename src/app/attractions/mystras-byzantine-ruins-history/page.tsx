import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米斯特拉斯历史溯源｜拜占庭帝国最后堡垒的前世今生与摩里亚君王传奇',
  description: '探秘希腊“被遗忘的都城”米斯特拉斯。漫步康斯坦丁十一世加冕地，聆听末代哲学家与陷落帝国的挽歌，发现伯罗奔尼撒心脏的拜占庭史诗。',
}

export default function MystrasByzantineRuinsHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '斯巴达附近', href: '/destinations/europe' },
            { label: '米斯特拉斯拜占庭遗址', href: '/attractions/mystras-byzantine-ruins-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米斯特拉斯拜占庭遗址・Mystras・希腊・斯巴达附近`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯巴达的橄榄树丛背后，一座石头山城沉默地矗立，它不是古希腊的遗产，而是一段中古史诗的封存地。这里是<strong>米斯特拉斯</strong>，拜占庭帝国在希腊大陆上最后的政治与文化心脏，也是末代皇帝<strong>康斯坦丁十一世</strong>的加冕之所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当君士坦丁堡于1453年陷落时，米斯特拉斯又独自坚守了七年，成为罗马帝国千年荣光在欧陆最后的余烬。抛开游玩攻略，走进这座“摩里亚的奇迹”的尘封往事，遇见属于它的时光、陷落与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米斯特拉斯拜占庭遗址`} />
                <InfoRow label="英文名称" value={`Mystras`} />
                <InfoRow label="正式名称" value={`Mystras`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`斯巴达附近`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1249年，一位法兰克十字军贵族，<strong>维拉杜安的威廉二世</strong>，在斯巴达以西的泰格图斯山脉支脉上，下令建造了一座城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的目的很实际：俯瞰拉科尼亚平原，巩固第四次十字军东征后建立的<strong>亚该亚亲王国</strong>的统治。这座城堡最初只是法兰克人军事棋盘上的一颗棋子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的转折往往出人意料。十年后，拜占庭军队重新夺回了这片区域。城堡下的山坡，因军事驻防和天然地势的庇护，开始自发地聚集起居民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一座城市围绕着城堡生长起来。它的名字“Mystras”来源成谜，可能与当地一种名为“myzethras”的奶酪有关，更增添了几分山城的乡土气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正改变它命运的，是1262年。拜占庭皇帝<strong>米海尔八世·帕拉伊奥洛格斯</strong>将它定为新收复的<strong>摩里亚（即伯罗奔尼撒半岛）专制国</strong>的首府。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，一座为战争而生的城堡，戏剧性地转型为一个繁荣自治邦国的政治与文化中心。命运的齿轮开始转动。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米斯特拉斯的黄金时代，属于<strong>帕拉伊奥洛格斯王朝</strong>。作为帝国的次中心，它远离君士坦丁堡的政治漩涡，却享有惊人的自治与繁荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的统治者通常是皇帝的儿子或兄弟。他们不仅是行政官，更是艺术与学术的赞助人。城市依山而建，分为上城、下城和庞大的郊区。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位14世纪的旅行者曾写道：“米斯特拉斯的辉煌，不在于其宏大，而在于其密集。教堂的圆顶与修道院的钟楼层层叠叠，从平原仰望，宛如悬在天际的圣山。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1449年1月6日</strong>，一个决定帝国命运的事件在这里发生。在米斯特拉斯的圣狄奥多尔修道院（或圣索菲亚教堂），<strong>君士坦丁·帕拉伊奥洛格斯</strong>被加冕为拜占庭皇帝，即<strong>康斯坦丁十一世</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的加冕礼没有君士坦丁堡的盛大奢华，却充满了悲壮的使命感。他接过的是一个疆域几乎只剩首都和这座山城的帝国。加冕后，他北赴君士坦丁堡，走向了1453年那场注定的决战与殉难。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而米斯特拉斯，继续作为摩里亚专制国的中心存续。直到<strong>1460年</strong>，在君士坦丁堡陷落七年后，末代专制君主<strong>德米特里奥斯·帕拉伊奥洛格斯</strong>才向奥斯曼苏丹<strong>穆罕默德二世</strong>投降。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市并未被摧毁，但在奥斯曼统治下逐渐褪色。<strong>1834年</strong>，新成立的希腊王国决定重建古斯巴达的荣光，将居民迁往山下新建的斯巴达市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米斯特拉斯，这座辉煌了六个世纪的山城，最终被时间封存，成为我们今天看到的、凝固在15世纪的庞大遗址群。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米斯特拉斯的灵魂，不仅在于王公贵族，更在于它为那个黑暗时代保留的思想火种。这里最耀眼的名人，当属哲学家<strong>格弥斯托士·卜列东</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>格弥斯托士·卜列东</strong>（约1355-1452）是新柏拉图主义哲学在拜占庭末期复兴的核心人物。他长期在米斯特拉斯居住、教学，将这里变成了一个吸引整个希腊世界学者的学术中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的思想激进而宏大。他不仅研究古典哲学，更公开主张回归古希腊的“ Hellenic”诸神与价值观，某种程度上将柏拉图置于基督教之上。这对正统的东正教社会而言，不啻为一种思想地震。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在他的著作《法律》中，他大胆设想了一个以斯巴达为模型、由哲学家-祭司统治的乌托邦国家。他写道：“我们的祖国并非我们偶然出生的城市，而是我们灵魂选择追随的、充满美与智慧的生活之地。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的影响力远远超出了米斯特拉斯的城墙。1438年，他作为拜占庭代表团成员参加佛罗伦萨大公会议，旨在统一东西方教会。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然会议本身成果有限，但卜列东在佛罗伦萨的演讲和教学，却像一颗火种，点燃了意大利人文主义者的激情。他对柏拉图著作的阐释，直接影响了<strong>马尔西利奥·费奇诺</strong>和文艺复兴时期的柏拉图学院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "晚年的卜列东回到米斯特拉斯，在此终老。他葬于这座城市，但他的思想遗产却西渡亚得里亚海，为文艺复兴的曙光增添了关键的东方亮色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与米斯特拉斯陷落紧紧捆绑的人物，是最后一位大主教<strong>吉米斯特斯·普莱桑</strong>。在1460年奥斯曼军队兵临城下时，他代表末代君主德米特里奥斯，进行了投降谈判。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，他将城市的神圣宝物（包括圣狄奥多西的遗物）藏匿起来，以保全它们不被玷污。他的命运，象征着拜占庭教会与国家在陷落后的臣服与延续。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在米斯特拉斯的断壁残垣间，流传着一个凄美而神秘的传说，关乎这座城市为何被遗弃。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人常说，米斯特拉斯是一座被“精灵”或“古老神灵”庇护的“永恒之城”。只要城市中心的<strong>圣索菲亚教堂</strong>大钟每日被敲响，守护精灵就会让泉水奔涌，让城墙坚固。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，当奥斯曼征服者到来后，他们禁止了钟声。守护精灵陷入了沉睡。泉水逐渐干涸，居民的健康与运气也随之流逝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更广为流传的一个版本是，在19世纪希腊人决定迁往斯巴达时，一位最后离开的老妇人，在暮色中回头望向山城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她看到教堂的圆顶在夕阳下发出金光，仿佛整个城市在向她做最后的告别。她听见风中传来若有若无的圣歌，那是无数个世纪以来，在此祈祷的修士与居民灵魂的合唱。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "后来，考古学家<strong>亚瑟·埃文斯</strong>（以发掘克诺索斯闻名）在19世纪末探访后，在笔记中记述了当地农夫的说法：“夜晚不要靠近废墟，那里不是死城。当月亮照在圣狄奥多尔教堂上时，你能看见穿金袍的皇帝幽灵，仍在巡视他丢失的都城。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，与其说是神话，不如说是当地人对这座宏伟遗址之衰落的一种诗意解释。它们将历史的重量，转化为可以感知的精灵、钟声与幽灵，让石头拥有了记忆的温度。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，漫步在米斯特拉斯无人的石阶与教堂之间，你触摸到的，远不止拜占庭的艺术精华。你行走的，是一部帝国晚期的浓缩编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "上城的宫殿废墟，诉说着世俗权力的终结；下城密集的教堂与修道院，其内保存的精美壁画——尤其是<strong>佩里布莱普托斯修道院</strong>那震撼的《万物主宰》基督像——则展示了帕拉伊奥洛格斯文艺复兴在宗教艺术上的巅峰成就。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不是雅典，没有古典时代的纯粹光辉；这里也不是塞萨洛尼基，缺乏早期基督教的恢弘气象。米斯特拉斯的独特价值，恰恰在于它的“晚期”与“边缘”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它展示了当一个伟大文明步入黄昏时，在其一个相对安宁的角落，所能迸发出的最后创造力与精神韧性。它是君士坦丁堡的微缩镜像，也是希腊古典传统、东正教信仰与欧洲文艺复兴思潮之间，一个鲜为人知的关键交汇点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂米斯特拉斯，便是读懂一种文明的谢幕姿态：在必然的陷落面前，依然坚持对美、哲学与信仰的执着追求。这座山城，本身就是一曲用石头写成的、壮丽而哀婉的拜占庭挽歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、徒步路线与壁画打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ano-syros" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡罗斯岛阿诺锡罗斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ano Syros</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lindos-acropolis" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林多斯卫城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindos Acropolis</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/xanthi-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克桑西古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Xanthi Old Town</p>
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
