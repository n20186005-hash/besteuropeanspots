import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '波黑历史溯源｜石头阶梯古村的前世今生与奥斯曼传奇',
  description: '悬崖上的奥斯曼帝国前哨，波奇泰利。一座用石头写成的史诗，历经战火与遗忘，如今时间在此凝固。深入探寻它的防御密码、诗人轶事与不朽传说。',
}

export default function PoIteljHistorijaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '波黑', href: '/destinations/europe' },
            { label: '黑塞哥维那-内雷特瓦州', href: '/destinations/europe' },
            { label: '波奇泰利', href: '/attractions/po-itelj-historija-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`波奇泰利・Počitelj・波黑・黑塞哥维那-内雷特瓦州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你的车沿着内雷特瓦河谷蜿蜒前行，一片从悬崖上“生长”出来的石砌阶梯聚落，会以一种近乎突兀的戏剧性姿态闯入眼帘。这并非自然奇观，而是一座精心设计的“防御机器”——<strong>波奇泰利</strong>。从15世纪奥斯曼帝国的边境堡垒，到威尼斯火炮下的废墟，再到南斯拉夫时期艺术家的乌托邦，它的每一级石阶都镌刻着帝国的野心、战争的创伤与文明交融的印记。抛开游玩攻略，走进波奇泰利的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`波奇泰利`} />
                <InfoRow label="英文名称" value={`Počitelj`} />
                <InfoRow label="正式名称" value={`Počitelj`} />
                <InfoRow label="国家" value={`波黑`} />
                <InfoRow label="城市" value={`黑塞哥维那-内雷特瓦州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波奇泰利的故事，始于一片险峻的石灰岩悬崖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于它的最早确切记载，与<strong>奥斯曼帝国</strong>在巴尔干半岛的凌厉西进密不可分。尽管遗迹表明罗马人曾在此驻足，但真正赋予其灵魂与形态的，是<strong>1463年</strong>奥斯曼苏丹<strong>征服波斯尼亚</strong>之后。帝国需要坚固的前哨，来扼守内雷特瓦河这条深入黑塞哥维那腹地的战略通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，工程师们看中了这座近乎垂直的悬崖。它的选址堪称军事地理学的杰作：背靠山峦，三面陡峭，俯瞰河谷与通往海岸的道路。村庄并非自然形成，而是自上而下、层层构筑的<strong>立体防御体系</strong>。最高处是卫城与瞭望塔，中间是清真寺与公共建筑，最下方是民居与商队驿站。所有建筑都采用当地采掘的米色石头，与山体融为一体。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“其名‘Počitelj’，或许源于斯拉夫古语‘<em>pčela</em>’（蜜蜂），形容其民居如蜂巢般紧密；亦或来自‘<em>počivati</em>’（休息），意为商旅的歇脚之地。我更愿相信前者，因为这座城从未真正‘休息’过。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字本身，就像一把钥匙，开启了它作为军事要塞与贸易枢纽的双重身份。它不是一座随性发展的村庄，而是一件为战争与统治而生的、冰冷的石制工具。它的“诞生”就带着明确的使命：镇守边疆，彰显帝国权威。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波奇泰利的石墙，是一部缩写的巴尔干边疆史。几个关键转折点，彻底塑造了它的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个印记，是<strong>奥斯曼鼎盛时期的辉煌</strong>。在征服后的一个世纪里，波奇泰利从单纯的堡垒，发展为繁荣的行政与商业中心。<strong>1562-63年</strong>，地方长官下令建造了核心建筑——<strong>哈吉-阿利清真寺</strong>。这座带有优雅尖塔的清真寺，不仅服务于驻军与村民，更象征着伊斯兰文明在此地的扎根与繁荣。与之配套的<strong>伊斯兰学校</strong>、<strong>公共浴室</strong>和<strong>钟楼</strong>相继建成，一个功能完备的奥斯曼小镇在悬崖上成型。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，第二个印记是<strong>1685年的炮火与创伤</strong>。随着奥斯曼与威尼斯争夺亚得里亚海沿岸控制权，战火烧到了内雷特瓦河。威尼斯名将<strong>弗朗切斯科·莫罗西尼</strong>率领大军围攻波奇泰利。持续数周的炮击，几乎将这座石城化为废墟。瞭望塔被毁，城墙坍塌，清真寺受损。这次围城是致命的，它终结了波奇泰利作为边境重镇的黄金时代，人口锐减，繁华不再。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位威尼斯军官在战地日记中写道：“我们的大炮对着那座悬崖上的巢穴怒吼了十八天。石头在燃烧，灰尘遮天蔽日。当我们最终登上废墟时，只剩寂静与死亡。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是<strong>20世纪的沉浮与“新生”</strong>。二战后，南斯拉夫政府将其列为国家级文化遗产，启动了缓慢的修复。但真正有趣的篇章发生在<strong>1960至1970年代</strong>。一群来自萨拉热窝和贝尔格莱德的画家、雕塑家被这里与世隔绝的沧桑之美吸引，自发前来居住创作。他们修复老屋作为画室，将波奇泰利变成了一个非官方的<strong>艺术家殖民地</strong>。战争废墟，意外成为了前卫艺术的温床。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "可惜，<strong>1992-1995年的波黑战争</strong>再次重创此地。波奇泰利处于前线，遭到炮击，包括清真寺在内的许多建筑严重受损。战后的国际援助项目小心翼翼地复原了它。今天你看到的，是一个在废墟上重建的“原版”，伤痕依旧可见，却更显厚重。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波奇泰利的风骨，不仅在于石头，更在于与石头共呼吸的人。其中两位，一位用笔，一位用砖，定义了这座城的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>诗人与战士：伊利亚斯·哈吉-穆罕默多维奇</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在波黑文学史上，<strong>伊利亚斯·哈吉-穆罕默多维奇</strong>并非最闪耀的名字，但他的生命与波奇泰利交织之深，无人能及。他生于<strong>17世纪早期</strong>的波奇泰利，成长于奥斯曼文化的熏陶下，精通波斯语、阿拉伯语与土耳其语，是一名出色的诗人，用细腻的笔触描绘故乡的自然与信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，时代的巨变将他推向了另一条路。当威尼斯军队兵临城下，这位文人毅然拿起了武器。<strong>1685年</strong>，他作为本地守军的指挥官之一，亲身经历了那场惨烈的围城。城破之后，他被俘并被押往威尼斯。关于他的结局，一说他在狱中逝世，另一说他最终被赎回，在颠沛流离中度过余生，再未回到已成废墟的故乡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的诗作大多散佚，但留存下的片段，充满了对波奇泰利深沉的眷恋与一种悲剧性的预感。他笔下的故乡，是“鹰巢”，是“石头的祈祷”。他本人，则成了这座城<strong>文武双全却又悲剧性命运</strong>的化身——一个文化的创造者，最终被自己时代的战争机器所吞噬。如今，波奇泰利的一条小径以他的名字命名，游客踩过的石阶，或许正是这位诗人兼战士曾经守卫过的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>建造者：哈吉-阿利</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说伊利亚斯代表了城的“魂”，那么<strong>哈吉-阿利</strong>则塑造了城的“形”。关于他的历史记录极少，我们只知道他是一位来自波斯尼亚的奥斯曼贵族或富商。在<strong>16世纪60年代</strong>，他出资并主持建造了波奇泰利的地标——那座以其名字命名的清真寺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在奥斯曼传统中，建造清真寺、学校、浴室等公共设施是极大的善举，能为自己赢得声誉与后世福报。哈吉-阿利的选择极具战略眼光：他将清真寺建在村庄的中心阶梯旁，使其成为视觉与精神的双重焦点。清晨的唤拜声从尖塔传出，回荡在河谷，这不仅是一种宗教仪式，更是帝国在此地存在与权威的每日宣示。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间流传，哈吉-阿利在选择清真寺地基时，故意没有选择最平坦的地方，而是让建筑的一部分依托陡坡。他说：“让祈祷之所也如这座城一样，根基牢固，直面深渊。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座建筑超越了宗教本身，它是社区的心脏，是旅行者辨认方向的灯塔，更是波奇泰利作为奥斯曼城镇的<strong>核心身份证</strong>。哈吉-阿利虽无名姓详史，但他留下的这栋石构建筑，历经炮火、战争与修复，至今依然矗立，默默讲述着一位建造者如何用石头参与了一座城的历史。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在波奇泰利，历史与传说在石缝间缠绕生长。最动人的故事，关乎一座塔与一个永恒的守护。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那是最高的<strong>瞭望塔</strong>，名为“<em>Gavrakapetan</em> 之塔”。传说在威尼斯军队围城的最艰难时刻，守军指挥官<strong>加夫拉卡皮坦</strong>孤身在此塔顶端死战。弹药耗尽，敌人涌上，他誓死不降。最后时刻，他纵身从塔顶跃入内雷特瓦河。人们说他并未死去，而是被河水带走了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，一个传说诞生了：<strong>加夫拉卡皮坦成为了波奇泰利的守护神</strong>。每当月圆之夜，或村庄面临危机之时，他的灵魂会回到塔楼，巡视这片他誓死守卫的土地。当地老人会说，偶尔能听到塔顶传来沉重的脚步声，或是看到塔窗内有模糊的身影一闪而过，那不是幽灵，而是守护者依然在履行诺言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说深深嵌入当地的人文情感。它解释了为何这座塔在多次毁坏后，人们总执着地将其修复——不仅仅是为了历史原貌，更是为了给守护神一个“家”。它也将一次惨烈的军事失败，转化为一种关于忠诚、牺牲与永恒守护的精神胜利。在波奇泰利，石头是冰冷的，但附着其上的传说，却让每一阵风吹过塔楼的声音，都有了温度与故事。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当你气喘吁吁地攀爬那些无尽的石阶时，你踏过的，远不止是一段坡路。你走过的是奥斯曼工程师的计算，是威尼斯炮火的弹道，是南斯拉夫艺术家的调色板，也是战后修复者小心翼翼的图纸。波奇泰利不是一个“博物馆式”的遗址，它是一个<strong>活生生的历史层</strong>，一次文明碰撞的<strong>实体切片</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的价值，不在于拥有多么宏伟的单体建筑，而在于其<strong>整体布局的叙事性</strong>。从山顶的军事堡垒，到山腰的宗教核心，再到山脚的世俗生活，这种垂直结构本身就是一篇关于权力、信仰与社区关系的立体论文。读懂它，你就读懂了边境要塞的生存逻辑，读懂了帝国文明的传播方式，也读懂了巴尔干半岛那复杂层叠的历史质感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，旅行不再是简单的风景消费，而是一场<strong>沉浸式的历史解码</strong>。每一处墙体的修补痕迹，都在诉说一次创伤与重生。波奇泰利教会我们，最深刻的美，往往与伤痕并存；最坚固的传奇，是用最普通的石头写就。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/blagaj-tekke" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉加伊特基亚修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Blagaj Tekke</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/jajce-waterfall-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    亚
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">亚伊采</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jajce</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/banja-luka-kastel-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴尼亚卢卡卡斯特尔要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kastel Fortress</p>
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
