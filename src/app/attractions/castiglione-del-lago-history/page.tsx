import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯蒂廖内-德尔拉戈前世今生｜特拉西梅诺湖畔古堡的千年孤寂与波拿巴家族传奇',
  description: '迷失在翁布里亚的“湖中阳台”。探索伊特鲁里亚根源、中世纪城堡风云，以及拿破仑侄孙流亡于此的隐秘往事。一段被湖水环绕的历史。',
}

export default function CastiglioneDelLagoHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '意大利', href: '/destinations/europe' },
            { label: '翁布里亚', href: '/destinations/europe' },
            { label: '卡斯蒂廖内-德尔拉戈', href: '/attractions/castiglione-del-lago-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯蒂廖内-德尔拉戈・Castiglione del Lago・意大利・翁布里亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在意大利的心脏，翁布里亚的蔚蓝湖泊与托斯卡纳的金色丘陵之间，悬着一座被时光遗忘的“岛屿堡垒”——<strong>卡斯蒂廖内-德尔拉戈</strong>。它的名字意为“湖畔的城堡”，这不仅是地理描述，更是其千年命运的注脚。从伊特鲁里亚人的渡口，到中世纪教皇国与地方豪强争夺的前哨，再到文艺复兴领主华丽的府邸，湖水映照的始终是权力的倒影与孤寂的荣光。抛开游玩攻略，走进卡斯蒂廖内-德尔拉戈的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯蒂廖内-德尔拉戈`} />
                <InfoRow label="英文名称" value={`Castiglione del Lago`} />
                <InfoRow label="正式名称" value={`Castiglione del Lago`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`翁布里亚`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小城的诞生，与眼前这片意大利第四大湖——<strong>特拉西梅诺湖</strong>——息息相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其历史可追溯到公元前。湖中延伸出的石灰岩半岛，形成了天然的防御地形与交通节点。最早的定居者是<strong>伊特鲁里亚人</strong>，他们在此建立了一个名为“克拉西姆”（Clusium）的附属贸易站和渡口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“卡斯蒂廖内”一词源于拉丁语“Castellio”，意为“城堡之地”。而“德尔拉戈”（del Lago）则精准点明了其“湖中城堡”的独特位置。在中世纪早期，伦巴第人可能在此建立了第一个防御工事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正让半岛成为坚固据点的，是<strong>十三世纪</strong>的动荡。当时，这里是<strong>佩鲁贾</strong>与<strong>托斯卡纳</strong>势力（特别是锡耶纳和佛罗伦萨）反复争夺的边境要塞。其战略价值在于：谁控制了这里，谁就控制了湖区的交通与渔业。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份古老的契约记载：“此地乃湖上之钥，持有者可将波涛化为城墙。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一座坚实的城堡开始在半岛尖端拔地而起。它最初并非为了缔造一座城市，而是为了<strong>占有与防御</strong>。居民们逐渐聚集在城堡的庇护之下，形成了我们今天看到的、沿着山脊蜿蜒的迷人小镇格局。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的历史肌理，由两道深刻的印记镌刻而成：<strong>中世纪的军事铁腕</strong>与<strong>文艺复兴的贵族雅韵</strong>。两者共存于同一片天空下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是那座俯瞰全城的<strong>罗卡德尔莱奥内城堡</strong>（Rocca del Leone）。它始建于<strong>1247年</strong>，由当时统治佩鲁贾的 Oddi 家族下令修建。但它的赫赫威名，与一位天才军事建筑师紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他叫<strong>埃利亚·马伊亚尼</strong>，是锡耶纳派来的工程师。他设计了一座罕见的<strong>五边形堡垒</strong>，其中四个角矗立着高塔，而第五个角则借由一条狭窄的堤道与主城区相连，形成易守难攻的“狮子”之势（城堡因此得名）。在冷兵器时代，这是近乎完美的设计。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡见证了数不清的围攻与易主。它在佩鲁贾、教皇国、地方僭主乃至雇佣兵队长之间辗转。厚重的石墙沉默地诉说着<strong>中世纪意大利城邦间无尽的地方战争</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，则来自相对和平的<strong>十六世纪</strong>。<strong>教皇尤利乌斯三世</strong>将这片土地赐予了他的妹妹，随后又传给了他宠爱的外甥——<strong>阿斯卡尼奥·德拉·科尼亚</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿斯卡尼奥决心将这座军事要塞，变为配得上其地位的文艺复兴宫廷。于是，紧邻城堡，一座华丽的<strong>科尼亚宫</strong>（Palazzo della Corgna）开始修建。它内部的壁画，由著名的样式主义画家<strong>乔瓦尼·安东尼奥·潘多尔菲</strong>（又名“伊利·萨尔维亚”）绘制，充满神话寓言与战争场景，既歌颂了科尼亚家族的功绩，也展现了文艺复兴晚期艺术向华丽与复杂的转变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从城堡到宫殿，从小窗射孔到采光良好的画廊，这两座比邻的建筑，清晰地勾勒出小镇从战争前线到贵族采邑的身份变迁。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说城堡与宫殿构成了小镇的骨架，那么与它羁绊颇深的名人们，则为其注入了鲜活的灵魂。其中最为独特的，并非意大利本土的领主，而是一位来自法国的“皇帝后裔”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>路易·波拿巴</strong>，<strong>拿破仑一世的弟弟</strong>，曾短暂地被封为荷兰国王。他的儿子，<strong>夏尔-路易-拿破仑·波拿巴</strong>，未来将成为法兰西第二帝国的皇帝<strong>拿破仑三世</strong>。而我们故事的主角，是夏尔-路易的弟弟——<strong>拿破仑·路易·波拿巴</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在拿破仑帝国崩塌后，波拿巴家族流离失所。<strong>1831年</strong>，拿破仑·路易参与意大利烧炭党起义失败，在逃亡途中病逝。他的遗孀，<strong>夏洛特·波拿巴</strong>，一位意志坚强的女性，带着年幼的儿子们，选择隐居于卡斯蒂廖内-德尔拉戈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她为何选择这里？或许是因为这里的偏远与宁静能提供庇护，也或许是因为科尼亚宫的气派尚存，能满足一位落难王妃对尊严的些许坚持。她在湖边的宫殿里深居简出，抚养着波拿巴家族的血脉。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在一封私人信件中，她写道：“特拉西梅诺的湖水如此广阔，足以淹没所有往日的野心与喧嚣。我们在这里，只是湖畔的居民。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的儿子们，<strong>拿破仑·查理</strong>和<strong>拿破仑·维克多</strong>，在城堡的阴影和湖光山色中度过了童年。他们后来成为波拿巴家族复辟运动的积极倡导者。尤其是拿破仑·维克多，毕生致力于家族的政治事业。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想象一下，在十九世纪中叶，这个翁布里亚湖畔的宁静小镇里，回荡的不仅是意大利方言，还有法语的低声细语。孩子们玩耍的庭院，曾萦绕着关于巴黎、关于皇位、关于滑铁卢的遥远传说。<strong>卡斯蒂廖内，意外地成为了一页法兰西帝国余波的注脚</strong>，为这座意大利小镇增添了一抹国际化的、忧郁的浪漫色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而另一位不得不提的名人，是文艺复兴时期的建筑师与画家<strong>乔瓦尼·安东尼奥·潘多尔菲</strong>。他并非本地人，但他的艺术永久地留在了这里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在科尼亚宫留下的壁画周期，是其职业生涯的代表作之一。画面充满了动态的人物、复杂的透视和明亮甚至有些艳丽的色彩。其中一幅描绘<strong>特拉西梅诺湖战役</strong>（公元前217年，汉尼拔大败罗马军队）的壁画尤为有趣——画家将古代布匿战争的场景，与十六世纪的铠甲武器混合在一起，仿佛在暗示，这片土地自古便是命运的战场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是通过他的画笔，科尼亚家族的“现代”功绩与古老的历史传说交融，为宫殿的墙壁赋予了叙事的力量，也让今天的我们得以窥见那个时代的审美与政治诉求。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "湖水滋养土地，也孕育传说。关于特拉西梅诺湖，最古老、最悲壮的传说并非源于卡斯蒂廖内，但却在其视野之内发生——那便是<strong>汉尼拔的伏击战</strong>。当地老人会指著湖东岸的平原说，罗马军团的亡魂至今仍在薄雾中徘徊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而属于卡斯蒂廖内自己的传说，则更带有一丝神秘与凄美。其中一个故事与湖中的<strong>波利韦塞岛</strong>（Isola Polvese）有关，从小镇码头可以望见。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在中世纪，岛上曾有一位隐士。他拥有预知天气和渔汛的能力，时常驾着小舟来到卡斯蒂廖内，告诫渔民出湖的吉时。人们视他为湖神的使者。某年寒冬，湖面封冻，小镇饥荒，隐士神秘地指引村民在冰面某处凿冰，竟捕获了大量鲜鱼，拯救了一城人。此后，渔民出海前，仍会习惯性地望向岛屿，祈求平安与丰收。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则附着于城堡本身。据说，在城堡最深的地窖里，藏着一把<strong>金钥匙</strong>。它能打开一道隐秘的门，门后的密道直通湖底，那里沉睡着一位古代伊特鲁里亚酋长的宝藏与战船。但钥匙被诅咒了，只有心灵绝对纯净、毫无贪念的人才能找到并使用它，否则将惊动湖神，引发风暴。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "代代相传的谚语这样说：“湖底有黄金，不如水上晴。城堡藏钥匙，不扰万年宁。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，将自然景观（湖泊、岛屿、风暴）与人类社区（渔民、饥荒、宝藏）的命运紧密相连，赋予了这片风景超越肉眼可见的深度与灵性。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在卡斯蒂廖内-德尔拉戈狭窄的上坡街道，每一步都踩在历史的叠层之上。伊特鲁里亚的基石、中世纪的垛墙、文艺复兴的壁画、乃至十九世纪流亡贵族的叹息，都被压缩在这座伸向湖心的狭长半岛里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不像罗马那样喧嚣着帝国的回音，也不似佛罗伦萨那般充盈着艺术的宣言。它的魅力在于一种<strong>浓缩的孤寂感</strong>。这里的历史是地方性的、边缘的，却也因此更加真实和复杂。它曾是边境要塞，是采邑领地，是流亡之所，最终归于宁静的湖畔小镇。这种多重身份的叠加，正是许多欧洲小众古城的迷人内核。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂卡斯蒂廖内，便是读懂一片湖如何塑造一座城的命运，读懂权力与艺术在边缘地带的交织，读懂大历史洪流中，那些被遗忘的支流如何静静流淌。在这里，历史不是教科书上的章节，而是湖面的波光、墙石的质感、以及从城堡高处俯瞰时，那份穿越千年的、沉默的辽阔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、徒步环湖打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/loreto-aprutino-abruzzo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛雷托阿普鲁蒂诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Loreto Aprutino</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/modica-baroque-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫迪卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Modica</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/volterra-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔泰拉古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Volterra</p>
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
