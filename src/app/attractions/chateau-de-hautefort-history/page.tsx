import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '欧特福尔城堡历史溯源｜法国隐秘贵族的古典主义梦境与中世纪往事',
  description: '走进法国多尔多涅的秘密心脏。揭秘欧特福尔城堡：一座从中世纪堡垒蜕变为古典主义宫殿的传奇，其背后交织着女继承人的反抗、太阳王元帅的野心与烈火重生的故事。',
}

export default function ChateauDeHautefortHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '欧特福尔城堡', href: '/attractions/chateau-de-hautefort-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`欧特福尔城堡・Château de Hautefort・法国・多尔多涅省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国多尔多涅起伏的绿色丘陵间，<strong>欧特福尔城堡</strong>如同一艘巨大的石制航船，永恒地停泊在时光之岸。它的轮廓过于完美，以至于让人几乎忘记，这份对称与优雅之下，埋藏着一个长达千年的、关于权力、美学与毁灭的尖锐故事。这里曾是中世纪边陲的鹰巢，亦是旧制度末期最耀眼的沙龙之一，最终在一场吞噬一切的大火中化为灰烬，又奇迹般地从灰烬中站起。抛开游玩攻略，走进<strong>欧特福尔</strong>的尘封往事，遇见属于它的抉择、野心与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`欧特福尔城堡`} />
                <InfoRow label="英文名称" value={`Château de Hautefort`} />
                <InfoRow label="正式名称" value={`Château de Hautefort`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`多尔多涅省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的基石，深埋在法兰西混乱的中世纪早期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字 <strong>“Hautefort”</strong> 直白而有力，源自拉丁语 <strong>“alta fortis”</strong>，意为 <strong>“高而坚固”</strong>。这绝非文学修饰，而是对其最初使命的精准描述。历史学家推断，早在<strong>公元9世纪</strong>，诺曼人沿河入侵的阴影笼罩下，第一座木质瞭望塔就已在此矗立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里地势险要，俯瞰着佩里戈尔与利穆赞地区的古老边界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卡佩王朝初期，这片土地是无数小领主争夺的棋盘。<strong>12世纪</strong>，一个名为 <strong>“奥特福尔”</strong> 的家族在此扎根，用石材取代了木头，将据点固化为真正的要塞。城堡的起源，与法国王权向南方渗透、巩固边疆的宏大叙事紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它生来就是为了战斗与警戒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的城堡核心，是那座至今仍能辨识出的、厚重敦实的<strong>中世纪主塔</strong>的基底。它的每一个雉堞，都曾注视过下方山谷中军队的调动。<strong>“高而坚固”</strong>，这个名字从一开始，就刻入了它的基因——既是地理的，也是命运的。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的第一个历史转折点，充满血腥与背叛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>16世纪</strong>的法国，深陷宗教战争的泥潭。<strong>欧特福尔</strong>作为天主教派的重要堡垒，成为胡格诺派军队眼中必须拔除的钉子。<strong>1575年</strong>，城堡经历了史上最残酷的一次围攻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时的领主不在城中，指挥防御的是他的妻子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在弹尽粮绝之际，她做出了一个惊人的决定：向围城者假意投降，换取部队安全撤离的承诺。然而，承诺被轻易撕毁。当城堡大门打开，守军放下武器后，一场针对天主教徒的大屠杀随即发生。这段往事，为城堡优雅的外表下，注入了一丝悲怆与警觉的底色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间跳到<strong>17世纪</strong>，城堡迎来了决定性的塑形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "新主人是<strong>路易十四</strong>的宫廷要员。他深受凡尔赛宫新兴古典主义美学的影响，决心彻底改造这座过时的中世纪堡垒。于是，一场长达数十年的“换装手术”开始了。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我命令工匠，务必削平那些丑陋的塔楼，赋予它秩序与庄严的面貌。它不应再是恐吓乡野的兵器，而应成为照耀此地的理性之光。” —— 某位领主在改造工程日志中的记述（仿写）" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "高耸的防御塔被降低或拆除，对称的楼体、巨大的法式窗棂、规整的花园逐步取代了凹凸不平的城墙。这座建筑，从军事工具，蜕变成了彰显主人品味与权势的“宜居艺术品”。这一转变，是法国从封建割据走向绝对王权时代，最生动的建筑注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而它最深刻的印记，来自<strong>1968年</strong>那场灾难性的大火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "8月的一个夜晚，因电路故障，烈焰迅速吞噬了木质屋顶和内部数个世纪积累的珍宝。整整一夜，火光映红天际，几乎宣告了这座历史丰碑的终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，故事并未结束。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的所有者与当地民众发起了史诗般的重建。他们依靠历史图纸、旧照片，甚至居民的记忆，一砖一瓦地复原了内部。这场“凤凰涅槃”，让<strong>欧特福尔</strong>拥有了双重生命：它既是17世纪的古典杰作，也是20世纪文化遗产保护意志的纪念碑。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座城堡的长卷上，两位人物的名字闪烁着截然不同却同等耀眼的光芒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是<strong>玛丽·德·奥特福尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她是<strong>16世纪</strong>初这片土地的女继承人，其人生是一场关于自由意志的激烈抗争。当时，强大的邻邦伯爵觊觎她的领地和美貌，甚至法王<strong>弗朗索瓦一世</strong>也介入其中，试图将她许配给自己的宠臣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但玛丽以惊人的魄力拒绝了国王的安排。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她并非出于浪漫爱情，而是为了捍卫家族领地的独立与完整。她选择嫁给了自己挑选的、地位相对较低的丈夫，从而保住了“奥特福尔”之名与产业。在那个女性被视为政治联姻工具的时代，她的抉择不啻为一场静默的革命。她的存在，确保了城堡血脉的延续，也为这个古老姓氏注入了坚韧与自主的灵魂。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我生于此石之中，亦将守护这些石头的名姓，直至归于石土。” —— 后世传记中赋予玛丽的精神独白" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，则是将城堡推向艺术巅峰的<strong>雅克-弗朗索瓦·德·奥特福尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是<strong>路易十四</strong>麾下的元帅，一位典型的旧制度贵族。在凡尔赛的浮华世界里浸染多年后，他决心将首都的时尚与文明带回自己略显粗犷的祖地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的改造，是一次彻底的“文化殖民”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他聘请了参与过凡尔赛工程的设计师和园艺师。城堡内部，充满了那个时代的奢华：意大利油画、弗拉芒挂毯、鎏金家具。更重要的是，他使城堡成为了一个文化沙龙。哲学家、诗人、音乐家受邀前来，在崭新的厅堂里辩论、演奏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里回荡的不再是兵戈之声，而是莫里哀喜剧的台词与关于笛卡尔哲学的讨论。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位元帅并未在战场上留下不朽威名，却通过石头与花园，在故乡的土地上，成功复制并推广了“太阳王”所倡导的古典主义生活理想。他让<strong>欧特福尔</strong>从地方领主的堡垒，一跃进入了法兰西精英文化的视野。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当地古老的口述传统中，城堡的建立与一位神秘的“猎鹰骑士”息息相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在遥远的过去，这片山崖空无一物。一位年轻的领主在狩猎时，他的猎鹰反复飞向这座山顶，并在盘旋后，将一枚闪亮的金戒指丢在了领主脚下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "领主视此为神谕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他攀上山巅，看到一幅壮丽的景象：四周土地尽收眼底，河流如银带蜿蜒。他认为这是建立家族永恒基业的绝佳之地。于是，他下令在此修筑城堡，并将那枚戒指奠基在了第一块巨石之下。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当猎鹰指引方向，当戒指回归大地，奥特福尔的家徽将与此山同寿。” —— 佩里戈尔地区流传的民谣片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说巧妙地解释了城堡的选址逻辑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "同时，猎鹰也成为了家族纹章上的核心元素，象征着敏锐、高贵与征服。直到今天，游客仍能在城堡的铁艺、雕刻上，频繁地看到这只传说中的飞鸟形象。它连接着神话与历史，为冰冷的石墙增添了一抹来自民间的、灵动的生命色彩。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当人们驱车穿过田园，猛然望见<strong>欧特福尔城堡</strong>那近乎完美的几何形倒影映在护城河中时，所见证的并非一个静止的标本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而是一部层叠的史诗。它的一砖一石，都在诉说着变迁：从烽火边塞到文明殿堂，从私有王宫到公共遗产，从焚身烈焰到重生奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂欧特福尔，便是读懂一种“法兰西性”的缩影——那种对形式美的极致追求，足以覆盖甚至重塑暴力的过去；那种对文化遗产的珍视，能在最绝望的灰烬中唤起重生的集体力量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它静静地矗立，不再需要证明自己的“高”与“固”，因为它本身，已成为一段无法被撼动的时光。在这里，历史不是教科书上的章节，而是呼吸着的空气，是光线掠过石壁的角度，是花园中依旧被精心修剪的、属于十七世纪的秩序与梦想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/entrevaux-fortified-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    昂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">昂特勒沃</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Entrevaux</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/uzerche-limousin-pearl" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    于
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">于泽什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Uzerche</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/perouges-medieval-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩罗日中世纪村庄</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pérouges</p>
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
