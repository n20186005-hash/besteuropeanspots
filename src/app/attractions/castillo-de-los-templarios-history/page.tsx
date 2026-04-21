import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蓬费拉达历史溯源｜圣殿骑士城堡的前世今生与朝圣传奇',
  description: '探秘西班牙朝圣之路上的隐秘堡垒：蓬费拉达。穿越八百年时光，揭开圣殿骑士团的金库、国王的权谋与一位戏剧之父的囚徒岁月。这不仅是石头，更是一部镌刻在莱昂土地上的信仰史诗。',
}

export default function CastilloDeLosTemplariosHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '蓬费拉达圣殿骑士城堡', href: '/attractions/castillo-de-los-templarios-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蓬费拉达圣殿骑士城堡・Castillo de los Templarios・西班牙・蓬费拉达`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在西班牙北部，莱昂省的山峦与平原交界处，有一座小镇，它的命运与两条伟大的脉络紧紧缠绕：一条是通往圣地亚哥的朝圣之路，另一条则是中世纪最强大也最神秘的军事修会——圣殿骑士团。这里不是马德里或巴塞罗那，这里是<strong>蓬费拉达</strong>。它的名字意为“铁桥”，而它的心脏，是一座由巨石与传奇砌成的庞大城堡。抛开游玩攻略，走进蓬费拉达的尘封往事，遇见属于它的权力、信仰与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蓬费拉达圣殿骑士城堡`} />
                <InfoRow label="英文名称" value={`Castillo de los Templarios`} />
                <InfoRow label="正式名称" value={`Castillo de los Templarios`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`蓬费拉达`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蓬费拉达的根源，深植于罗马时代的交通网络之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在公元1世纪，罗马人为了开采附近拉斯梅德拉斯山的黄金，修筑了贯穿伊比利亚半岛西北部的大道。其中一座跨越西尔河的石桥，成为了关键枢纽。这座桥，被拉丁语称为 <strong>“Pons Ferrata”</strong>，意即“铁桥”或“坚固的桥”。这便是“蓬费拉达”地名最直接的由来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，使其从地理坐标蜕变为战略要邑的，是中世纪席卷欧洲的宗教狂热——圣地亚哥朝圣之路。随着<strong>9世纪</strong>圣地亚哥使徒墓的发现，无数信徒从欧洲各地涌向西班牙西北角。蓬费拉达，恰好位于法国之路的一条重要分支上，成为了朝圣者翻越坎塔布连山脉前最后的补给与休整站之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的定居点围绕桥梁和教堂形成。但真正赋予它军事与政治分量的时刻，要等到<strong>12世纪</strong>。当时，莱昂王国为了巩固边疆、保护朝圣者免受袭扰，将这片土地赐予了正如日中天的<strong>圣殿骑士团</strong>。骑士们到来后，在原有防御工事的基础上，开始建造那座注定将定义这座城市命运的宏伟城堡。城市，因桥而生；它的灵魂，却由骑士铸就。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡的每一块岩石，都浸透着三个关键词：<strong>守护、财富与动荡</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣殿骑士的堡垒与金库（12-14世纪）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1178年</strong>，是一个决定性的年份。莱昂国王费尔南多二世将蓬费拉达及其周边广袤领地正式赠予圣殿骑士团，条件是他们必须保护通往圣地亚哥的朝圣者。骑士团在此建立了他们在伊比利亚半岛最重要的据点之一。城堡不仅是一座军事要塞，更是一个庞大的行政与经济中心。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "有编年史隐晦记载，朝圣者们传言，城堡地下深处藏着圣殿骑士从东方运回的“所罗门宝藏”的一部分，用以资助他们在伊比利亚的军事行动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "骑士团利用其横跨欧洲的金融网络，使蓬费拉达成为朝圣之路上的“银行”。朝圣者可以在此存放财物、兑换货币，甚至获得类似旅行支票的信用凭证。城堡巨大的城墙内，回荡着的不仅是兵器交击之声，还有金银币的脆响。这为它带来了无上繁荣，也埋下了嫉妒的种子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>权杖下的易主与衰落</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣殿骑士团的陨落，是欧洲历史上最富戏剧性的事件之一。<strong>1307年</strong>，法国国王腓力四世发起对骑士团的清洗。尽管在西班牙，骑士团的解散过程相对缓慢，但到了<strong>1312年</strong>，教廷正式下令解散后，蓬费拉达城堡的所有权便成了各方势力争夺的焦点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它先后落入莱昂王室、卡斯蒂利亚王室手中，并被封给不同的贵族家族，如<strong>卡斯特罗家族</strong>。城堡的功能也从国际修会的总部，转变为地方领主的府邸。每一次易主，都伴随着修建与改造，哥特式与文艺复兴式的窗户开在了原本只为射击设计的墙垛上，大厅被装饰得富丽堂皇。城堡的形态，成了权力更迭的立体年鉴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>拿破仑战争的创伤</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间的车轮滚到<strong>19世纪初</strong>，蓬费拉达城堡遭遇了它物质生命中最沉重的一次打击。在半岛战争期间，法国军队占领了这里。<strong>1811年</strong>，撤退的拿破仑军队为了防止城堡被西班牙游击队利用，对其进行了系统性破坏。他们点燃炸药，炸毁了塔楼、城墙和大部分主体建筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "昔日坚不可摧的堡垒，在硝烟中化为一片悲壮的废墟。此后近一个世纪，城堡都被遗弃在荒草与遗忘之中，只剩下残垣断壁，诉说着往日辉煌与战争残酷。这场破坏，反而意外地凝固了时间，让它以最原始、最沧桑的形态，等来了后世的重新审视。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座城堡厚重的阴影下，曾生活、被困、或受其滋养的灵魂，赋予了石头以温度。其中两位，尤其值得铭记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>胡安·德拉恩西纳：城堡囚徒与西班牙戏剧之父</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说城堡的建造者是圣殿骑士，那么为其注入不朽文学灵魂的，则是<strong>胡安·德拉恩西纳</strong>。今天，他被称为西班牙文艺复兴戏剧的先驱与“西班牙戏剧之父”。然而在<strong>1492年</strong>，他却是蓬费拉达城堡里一名痛苦的囚徒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "恩西纳本是萨拉曼卡的才子，一位杰出的诗人、音乐家和剧作家。他因与萨拉曼卡大学当局的激烈冲突和某些不明朗的指控，被流放至此，由当时的城堡主人——阿尔瓦伯爵监管。囚禁生涯对一位人文主义者而言是巨大的折磨，但蓬费拉达的孤寂时光，却意外地催生了他最重要的创作转型。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在他的私人信件中，曾这样描述这段岁月：“我被安置在这些巨大的、冰冷的石头之中……窗外是莱昂荒凉的原野，而我的内心却在与古代的先贤和意大利的新思想对话。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在这座城堡里，他深入研读古典拉丁戏剧，并融合意大利文艺复兴的新风，开始创作真正具有戏剧结构和舞台意识的对话体作品。他的代表作《克里斯蒂诺和费贝亚的牧歌》，虽然可能并非全部完成于囚禁期间，但其中对于命运、爱情与宗教的深刻探讨，必然烙有这段孤独沉思的印记。城堡对他而言，是牢笼，也是一所隔绝世俗的“大学”。最终，他获释前往罗马，并将成熟的戏剧形式带入西班牙。蓬费拉达，阴差阳错地成了西班牙戏剧一个重要流派的摇篮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>迭戈神父：传说中最后的守护者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了青史留名的文人，城堡的民间记忆里还住着一位影子般的人物——<strong>迭戈神父</strong>。在圣殿骑士团被解散后的混乱岁月里，传说有一位年迈的骑士团成员，拒绝承认教廷的命令，隐姓埋名留在了蓬费拉达。他脱下白袍，换上普通神父的黑衣，成为了当地一座小教堂的司铎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们称他为迭戈神父。传言他掌握着骑士团在城堡地下密道和密室的位置图，以及某些未被当局发现的秘密档案或圣物。在夜深人静时，他会独自进入城堡废墟，并非为了寻宝，而是为了进行只有他自己才懂的、属于旧日骑士团仪式的祷告。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "镇上最古老的酒馆里，流传着这样的故事：“我的祖父曾说，在一个暴风雨的夜晚，他看到城堡的主塔废墟上有微光。那绝不是闪电，而是稳定的、像烛火一样的光，从石头缝隙里透出来。除了迭戈神父，还有谁会去那里呢？”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他终生守口如瓶，将秘密带进了坟墓。他的存在，像一座活的桥梁，连接着官方历史记载的断裂处与民间对那个神秘骑士团无尽的想象。他是传说，也是蓬费拉达集体记忆对圣殿骑士时代一种固执的缅怀与延续。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在蓬费拉达，历史与传说的边界，常常消融在城堡地下的黑暗中。最脍炙人口的故事，莫过于 <strong>“月圆之夜的金门”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，圣殿骑士团并未真正将他们最珍贵的财富转移。在城堡最深的地窖之下，有一扇纯金打造的大门，唯有在<strong>每年圣约翰之夜（夏至）</strong>，当月光以特定角度穿过城堡瞭望塔某个菱形的射击孔，光斑恰好落在地窖某块毫无特色的石板上时，通往金门的密道才会显现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，守护这扇门的并非机关，而是一个古老的诅咒。任何为个人贪欲触碰金门的人，都将被永恒的时光囚禁在那瞬间，成为地底幽灵骑士的一员，永世守护宝藏。只有心灵纯粹、动机无私（例如为了拯救苍生或完成神圣誓言）的人，才能安全通过，并取用门后的东西——据说那并非金银，而是记载着失落智慧的古卷或具有神力的圣物。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位19世纪的本地诗人在作品中写道：“莱昂的风讲述着那个夜晚，一个弃绝了财产的朝圣者，跟随月光指引，进入了大地之心。他带回一片印有奇异符号的蜡板，次日便消失在通往圣地亚哥的路上。而城堡，依旧沉默。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说巧妙地融合了历史元素：圣殿骑士的财富、朝圣者的身影、城堡的建筑特征。它不再是一个单纯的寻宝故事，而是一个关于信仰、纯洁性与知识传承的隐喻，与蓬费拉达作为朝圣守护之城的本质遥相呼应。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你站在修复后的蓬费拉达圣殿骑士城堡脚下，所感受到的，远不止建筑的宏伟。你面对的，是一部用石头写就的欧洲微观史。它见证了信仰如何驱动人类跨越大陆（朝圣之路），见证了跨国军事-金融复合体的崛起与轰然倒塌（圣殿骑士团），见证了封建王权的纵横捭阖，也见证了现代民族国家诞生前的阵痛（拿破仑战争）。从罗马的桥到骑士的堡，从囚禁文人的牢到吸引游客的遗产，它的每一次角色转换，都是时代浪潮打下的烙印。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂蓬费拉达，便是读懂了一种复杂的欧洲性：宗教与世俗的交织，地方与全球的关联，破坏与重建的循环。它小众，因为它从未渴望成为舞台中央的主角；它深刻，因为它默默承载了所有这些宏大的历史叙事。这里的传奇不在恢弘的史诗里，而在每一道风化的石缝、每一个口耳相传的故事、以及每一位像恩西纳那样，在困顿中点亮文明星火的灵魂之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/rubielos-de-mora" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁维埃洛斯德莫拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rubielos de Mora</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/consuegra-windmills" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔苏埃格拉风车群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Consuegra Windmills</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/garrovillas-de-alconetar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加罗维利亚斯-德阿尔科内塔尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Garrovillas de Alconétar</p>
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
