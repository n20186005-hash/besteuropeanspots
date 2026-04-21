import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊比利亚古堡群历史溯源｜摩尔人遗迹的前世今生与收复失地运动的传奇史诗',
  description: '穿越西班牙与葡萄牙的边境线，探寻摩尔人宫殿的凋零与基督教城堡的崛起。这是一部写在山巅与荒漠上的，长达八百年的文明冲突与融合史。',
}

export default function MoorsAndCastlesHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '西班牙，葡萄牙', href: '/destinations/europe' },
            { label: '安达卢西亚，阿尔加维，埃斯特雷马杜拉等', href: '/destinations/europe' },
            { label: '摩尔人遗迹与伊比利亚古堡群', href: '/attractions/moors-and-castles-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`摩尔人遗迹与伊比利亚古堡群・The Lands of Moors and Castles・西班牙，葡萄牙・安达卢西亚，阿尔加维，埃斯特雷马杜拉等`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在伊比利亚半岛灼热的阳光下，岩石山巅的城堡与庭院深处的阿拉伯花纹，共同诉说着一段超越国界的独特历史。这里没有单一的城市，而是一片被共同记忆烙印的文化疆域——<strong>摩尔人的西班牙（Al-Andalus）</strong>与<strong>骑士的葡萄牙</strong>。近八个世纪的共存、战争与交融，让伊斯兰的精致艺术与基督教骑士的尚武精神，在这片土地上留下了世界上最密集、也最动人的城堡与宫殿群。抛开游玩攻略，走进这片土地的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`摩尔人遗迹与伊比利亚古堡群`} />
                <InfoRow label="英文名称" value={`The Lands of Moors and Castles`} />
                <InfoRow label="正式名称" value={`The Lands of Moors and Castles`} />
                <InfoRow label="国家" value={`西班牙，葡萄牙`} />
                <InfoRow label="城市" value={`安达卢西亚，阿尔加维，埃斯特雷马杜拉等`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片土地的故事，始于公元711年那场改变地中海的远征。柏柏尔人将领<strong>塔里克·伊本·齐亚德</strong>率领的摩尔大军，渡过海峡，登陆那座从此以他命名的岩石——<strong>直布罗陀（Jabal Tariq，意为“塔里克之山”）</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "西哥特王国在瓜达莱特战役中崩溃，一个崭新的伊斯兰政权<strong>安达卢斯（Al-Andalus）</strong>在半岛南部迅速建立。它并非铁板一块，但带来了当时欧洲最先进的农业技术、科学知识和城市文明。科尔多瓦、塞维利亚、格拉纳达崛起为闪耀的明珠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“收复失地运动（Reconquista）”的号角同时从北方的阿斯图里亚斯山区吹响。这是一场漫长、反复且残酷的拉锯战。作为前线堡垒和权力象征，城堡（Castillo, Castelo）如雨后春笋般矗立在每一条战略要道和每一座山巅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论是摩尔人用砖石与灰泥建造的防御性城堡（阿尔卡萨瓦），还是基督教王国用巨石垒砌的、充满军事威严的堡垒，它们共同绘制了半岛的政治与军事地图。地名本身就是历史的层积岩：以“Al-”开头的名字源自阿拉伯语，而以“Castillo”或“-堡”结尾的，则宣告着基督教力量的最终抵达。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个不可磨灭的印记，是<strong>摩尔人的黄金时代与凋零之泪</strong>。其顶峰是<strong>纳斯里德王朝</strong>在格拉纳达建造的<strong>阿尔罕布拉宫</strong>。它远非一座单纯的城堡，而是一座“红色之城”，是军事要塞、王宫与天堂花园的完美结合。狮子庭院的水渠低语，墙面上无尽的铭文“唯真主是胜者”，在极致美丽中透露出末世般的忧郁。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位古老的传说讲述，当天主教双王最终征服格拉纳达，末代苏丹<strong>博阿布迪尔</strong>在离开时，于山隘回首凝望这座失去的宫殿，不禁潸然泪下。他的母亲冷酷地说道：“你确实该像女人一样，为你未能像男人一样守护的王国而哭泣。”这个地方从此被称为“摩尔人的叹息”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，是<strong>骑士团与边疆领主的烙印</strong>。在漫长的收复运动中，军事修道会如<strong>圣地亚哥骑士团、卡拉特拉瓦骑士团</strong>成为中流砥柱。国王将广阔的前线土地赐予他们，以换取防御。于是，在荒凉的拉曼查或葡萄牙的阿连特茹，出现了如<strong>孔苏埃格拉</strong>的风车城堡群、或<strong>马尔旺</strong>那样孤悬于巨石之上的庞大要塞。这些城堡风格质朴、坚固如山，是纯粹战争美学的体现，与摩尔人的精巧形成鲜明对比。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，是<strong>文化融合的无声证词</strong>。最典型的代表是塞维利亚的<strong>希拉尔达塔</strong>。它原本是12世纪摩尔人清真寺的宣礼塔，楼顶装有巨大的青铜风信鸡（giraldillo）。光复后，塔身被保留，顶部加建了文艺复兴式的钟楼与基督教雕像。于是，伊斯兰的几何砖雕、文艺复兴的穹顶与象征信仰胜利的风信鸡，共同组成了一座奇妙的建筑共生体。在托莱多、科尔多瓦，这种<strong>穆德哈尔风格</strong>——由摩尔匠人在基督教统治下创造的，融合了阿拉伯装饰元素的基督教建筑——成为了这段复杂历史最美丽的和解。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>伊本·哈兹姆（Ibn Hazm，994-1064）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非手持利剑的苏丹，而是一位用笔解剖爱与信仰的科尔多瓦哲学家、神学家和诗人。他的一生，恰恰映照着安达卢斯从统一走向分裂的“诸王国时代”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>伊本·哈兹姆</strong>出身于科尔多瓦一个显赫的摩尔人家庭，青年时代在哈里发宫廷中度过，目睹了帝国的最后辉煌。随后，内战与柏柏尔人的入侵摧毁了科尔多瓦，他本人因政治立场多次入狱和流亡，足迹遍布半岛南部多个小王国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在漂泊与失意中，他完成了不朽之作《<strong>鸽子项圈</strong>》。这部书并非军事史诗，而是一部关于爱情本质、分类与现象的散文杰作。在书中，他以学者的严谨和诗人的敏感，分析了从精神之恋到肉体之欲的各种爱情，引用了大量当时的安达卢斯社会风情与个人轶事。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在书中写道：“爱的最初症状是凝视，然后是问候，继而交谈，继而握手，继而亲吻……如果亲吻之后阶段来临，那就是爱的极致，是疾病的巅峰，此刻医药无效，治疗无方。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这位爱情哲学家在神学领域却极度严厉。他的另一部重要著作《<strong>关于教派与异端的批判</strong>》展现了他作为逊尼派律法学家的另一面。他复杂的思想与人生，正是安达卢斯文化内在矛盾的缩影：既有着高度世俗化、精致优雅的生活艺术，又充满着虔诚的宗教热忱与教派冲突。他的墓地位于蒙蒂利亚附近的乡间，低调而朴素，如同他身后那个时代的背影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>阿方索十世（ Alfonso X，1221-1284）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位卡斯蒂利亚国王被称为“<strong>智者</strong>”，他的传奇不在于开疆拓土，而在于开启了一扇知识融合的大门。尽管他的政治生涯坎坷，最终被儿子篡位，但他留下的文化遗产照亮了后世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他即位时，收复失地运动已取得决定性进展，塞维利亚等重镇已被攻克。阿方索十世的宫廷成了基督教、伊斯兰教和犹太教学者共同工作的“翻译工坊”。他主持编译了庞大的《<strong>天文学知识集</strong>》，其基础主要来自阿拉伯语典籍。他甚至下令编撰以卡斯蒂利亚语（即早期西班牙语）写成的《<strong>历史通编</strong>》，打破了拉丁语对学术的垄断。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更为人称道的是，他亲自参与或指导了《<strong>圣母玛利亚之歌</strong>》的创作。这部诗集用加利西亚-葡萄牙语写成，收录了四百多首配有精美插图的诗歌（Cantigas），其中不仅有宗教颂歌，还有大量描绘圣母显灵医治百姓的奇迹故事。这些故事生动反映了13世纪伊比利亚各阶层，特别是穆斯林与基督徒混居的民间生活图景。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在一首《坎蒂加》中描述了一个奇迹：一个男孩不小心掉进井里，他的母亲向圣母祈祷。井水突然上涨，温柔地将孩子托出水面。插图中，人物的服饰与建筑细节，混合着罗马式与摩尔风格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的野心是建立一个多元、博学的帝国。虽然政治理想破灭，但他将托莱多、塞维利亚打造成了当时欧洲最重要的知识中心。漫步在塞维利亚王宫的“智者阿方索”大厅，那些繁复的穆德哈尔式石膏雕花，仿佛仍在诉说着这位梦想家国王对智慧之光的渴求。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这片骑士与摩尔人征战的土地上，传说往往与具体的历史人物和城堡紧紧缠绕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于<strong>葡萄牙辛特拉</strong>的<strong>佩纳宫</strong>，那座仿佛童话中跃出的浪漫主义城堡，当地流传着一个更古老的传说。在摩尔人统治时期，山巅的城堡遗址处，曾有一位美丽的摩尔人公主，爱上了一位平凡的基督教骑士。他们的恋情为世所不容。每当山间升起浓雾，便是公主在哭泣，她用魔法般的迷雾遮蔽山林，只为能与心上人短暂相会。后来，葡萄牙国王<strong>费尔南多二世</strong>在此建造佩纳宫，那缤纷的色彩与奇异的造型，据说正是为了致敬这段穿越宗教界限的、迷雾般的爱情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而在西班牙<strong>阿拉贡的洛阿雷城堡</strong>，这座被认为是西班牙最古老的罗马式城堡之一，传说则与圣迹有关。城堡内有一座精美的罗马式小教堂。相传，在摩尔人围攻城堡的艰难时刻，城堡内的圣母雕像曾多次显灵，她的光芒击退了敌军，甚至让枯井涌出清泉。直到今天，当地仍有信徒来此朝圣，这座坚固的城堡不仅是军事遗迹，更是一座信仰的灯塔。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在格拉纳达的阿尔罕布拉宫与塞哥维亚的阿尔卡萨城堡之间，你走过的不是简单的景点连线，而是一部立体、厚重且未曾真正完结的史诗。这里的每一块石头，都浸染着两种伟大文明的汗水、鲜血、祈祷与梦想。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们见证了战争的对峙，更见证了和平时期的交易、通婚与知识传递。穆德哈尔风格那些繁复的砖砌几何图案与石膏雕花，正是沉默的工匠们写下的融合宣言。这片土地的魅力，正在于这种极致的矛盾与和谐：阿尔罕布拉宫的柔美水庭与科卡城堡的冷峻塔楼，代表了两种不同的世界认知，却共同定义了伊比利亚的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂这段历史，你的旅行将超越视觉的惊叹。你会看见，山巅的城堡不仅是军事遗迹，更是理解欧洲与非洲、基督教与伊斯兰教千年对话的一把钥匙。这里没有绝对的征服与被征服，只有时光长河中，文明彼此塑造、难以分割的深厚印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何规划一条贯穿西葡的城堡之路、交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


        </div>
      </div>
    </div>
  )
}
