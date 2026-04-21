import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦讷历史溯源｜中世纪老城的前世今生与布列塔尼公爵传奇',
  description: '穿越回15世纪的布列塔尼公国！探索瓦讷老城保存完好的中世纪街巷、聆听公爵与女继承人的传奇，揭秘石雕鬼脸的秘密。一段活生生的历史等你发现。',
}

export default function VannesOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '瓦讷老城', href: '/attractions/vannes-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦讷老城・Vannes Old Town・法国・瓦讷`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国布列塔尼半岛的南岸，有一座被时光格外厚待的小城。它不是巴黎，没有香榭丽舍的喧嚣；也非圣马洛，缺少海盗城的粗犷野性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦讷老城，更像一个精心封存了五百年的“时间胶囊”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的城墙与木筋屋，几乎原封不动地停留在布列塔尼公国最鼎盛的<strong>15世纪</strong>，诉说着一段作为独立王国最后首都的辉煌与哀愁。这里的一砖一石，都镌刻着一位传奇女公爵——<strong>安妮</strong>——的命运纹路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进瓦讷的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦讷老城`} />
                <InfoRow label="英文名称" value={`Vannes Old Town`} />
                <InfoRow label="正式名称" value={`Vannes Old Town`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`瓦讷`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦讷的故事，始于罗马军团的铁蹄与高卢部落的坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元前1世纪，罗马大将<strong>凯撒</strong>征服了此地强悍的航海民族——<strong>威内蒂人</strong>。为巩固统治，罗马人于<strong>约公元前56年</strong>在此建立了一座坚固的军事要塞，名为<strong>达里奥里图姆</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座要塞，便是瓦讷最早的胚胎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国崩塌后，蛮族入侵的浪潮席卷西欧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在漫长的黑暗时代里，这座城镇凭借其战略位置幸存下来，并迎来了新的身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>6世纪</strong>，来自威尔士的基督教传教士<strong>圣帕泰恩</strong>抵达此处。他不仅带来了信仰，更以自己的名字为这座重生之城命名——“<strong>Gwened</strong>”（布列塔尼语），后逐渐演化为今天的“Vannes”（瓦讷）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它从一个军事据点，转型为布列塔尼地区重要的宗教与文化中心。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的布列塔尼语民谣这样传唱：“当圣帕泰恩的船靠岸，龙骨犁开了荒芜的海岸，他种下的不是葡萄，而是一座城的十字架与名讳。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了<strong>9世纪</strong>，布列塔尼王国在此正式确立。瓦讷，因其地处公国南北要冲，且拥有天然良港，重要性日益凸显。它不再是边陲哨站，而逐渐成长为王国腹地一颗不可或缺的心脏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城的基因里，从一开始就混杂着征服者的冷峻、传教士的虔诚，以及海洋子民对独立的永恒渴望。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若历史有形状，瓦讷老城的形状便是那一道绵延近两公里的<strong>石墙</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天看到的壮观城墙体系，主要烙刻着两个时代的印记：幸存与鼎盛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是<strong>百年战争</strong>（1337-1453）的恐惧与坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，布列塔尼公国在英法两大巨头间艰难周旋。瓦讷虽身处后方，亦能感受到战争阴云的迫近。<strong>1342年</strong>，瓦讷一度被英军围攻。这场危机促使公国统治者痛下决心，将原本简单的防御工事，大规模扩建、加固为一座真正的“堡垒城市”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天漫步其上的雄浑墙垛与塔楼，其基础正是奠基于那个充满不确定性的时代。城墙，是瓦讷在乱世中求存的盔甲。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "城防官的日记碎片记载：“<strong>1342年秋，英格兰人的号角在摩尔莱斯森林方向响起。我们征发了所有能拿起工具的男人，女人和孩子搬运石头。我们必须让城墙高到让死神却步。”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道，也是最重要的印记，是<strong>布列塔尼公国的黄金时代</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>15世纪</strong>，尤其在<strong>法兰西斯二世公爵</strong>及其女儿<strong>安妮女公爵</strong>统治时期，瓦讷迎来了它的高光时刻。公国实力达到顶峰，而瓦讷，因其易守难攻且位置适中，成为公爵们青睐的行政与居住地之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>法兰西斯二世公爵</strong>将原本的伯爵城堡扩建为宏伟的<strong>公爵宫殿</strong>（今法院所在地）。坚固的城墙内，华丽的哥特式府邸、繁华的市集与工匠作坊如雨后春笋般涌现。瓦讷，事实上成为布列塔尼公国末期的<strong>政治心脏</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，鼎盛往往预示着转折。<strong>安妮女公爵</strong>为维系公国独立而进行的政治婚姻，最终未能阻挡历史洪流。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1532年</strong>，随着《联合法令》的颁布，布列塔尼公国正式并入法兰西王国。瓦讷作为“首都”的政治使命骤然终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这道印记，如同一曲辉煌的终章，繁华凝固，时光在此放缓了脚步，反而意外地将一座完整的中世纪古城馈赠给了后世。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在瓦讷，乃至整个布列塔尼的历史星空中，最耀眼、最令人扼腕的一颗星，无疑是<strong>安妮女公爵</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她不仅是这座城的守护者，更是布列塔尼独立精神最后的化身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>安妮</strong>于<strong>1477年</strong>出生在南特的公爵城堡。作为<strong>法兰西斯二世公爵</strong>的独女，她自出生起就背负着整个公国的未来。<strong>1488年</strong>，父亲在战败的屈辱中去世，年仅11岁的安妮继位，成为布列塔尼的女公爵。而她继承的，是一个被强邻法兰西王国虎视眈眈的危局。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了保护公国不被吞并，她的婚姻成为欧洲最重大的政治筹码。年轻的安妮展现了惊人的早熟与坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她首先被迫嫁给了法王<strong>查理八世</strong>。这段婚姻条约中冷酷地写明：若查理八世先于她去世且无子嗣，她必须嫁给下一任法王。命运果然如此残酷。<strong>1498年</strong>，查理八世意外身亡，安妮短暂收回自治权，但很快又被迫嫁给了新任法王<strong>路易十二</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "安妮在一封私人信函中流露出深深的疲惫与决绝：“<strong>我的身体或许属于法国王室，但我的灵魂与布列塔尼同在。我签署的每一项法令，都必须为我的子民争取呼吸的空间。</strong>”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管个人命运如同风中飘萍，安妮却从未忘记作为布列塔尼统治者的责任。在她统治期间，瓦讷作为重要驻地备受青睐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她很可能多次驻跸于瓦讷的公爵宫殿，在这里处理政务，接见使者。更重要的是，她是一位文艺复兴式的君主，大力资助艺术、文学与建筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦讷老城内许多精美的<strong>文艺复兴式窗棂</strong>和<strong>雕花木筋墙</strong>，其风尚的引入与兴盛，正得益于安妮宫廷带来的文化新风。她将意大利的艺术气息，吹进了布列塔尼的石板小巷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1514年</strong>，安妮在布卢埃去世，长眠于南特的圣彼得与圣保罗大教堂。随着她的离去，布列塔尼独立的梦想也彻底熄滅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但在瓦讷，她的身影从未远去。她是老城灵魂的一部分，她的故事被一代代讲述，她的坚毅化为这座石城沉默的气质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与瓦讷紧密相连的人物，是本土历史学家<strong>让·德·马莱斯特</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非王公贵族，却用笔为故乡留下了不可磨灭的记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马莱斯特生于瓦讷一个富裕家庭，活跃于<strong>16世纪末至17世纪初</strong>。他最重要的贡献，是撰写了详尽的《<strong>瓦讷市编年史与古迹志</strong>》。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在那个没有照相机的年代，他以学者的严谨和乡土的深情，事无巨细地记录了老城的建筑、街道、重大事件与日常生活。我们今天能如此清晰地了解文艺复兴时期瓦讷的社会风貌，大半要归功于他。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "马莱斯特在书中动情地写道：“<strong>我描绘这些房屋、广场与教堂，并非因为它们宏伟，而是因为它们寻常。正是这些寻常的街景，构成了我们瓦讷人共同的记忆家园。或许有一天，它们会改变，但至少在这书页中，它们得以永恒。</strong>”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是通过他的眼睛，我们得以穿越时空，看到安妮时代之后，瓦讷如何从一个政治中心，逐渐沉淀为一座宁静、富足且文化底蕴深厚的省城。他是瓦讷集体记忆最早的守护者。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在瓦讷老城，尤其是环绕<strong>圣文森特大教堂</strong>的狭窄巷弄时，请务必抬头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你可能会与几百张<strong>石雕鬼脸</strong>不期而遇。这些镶嵌在古老建筑转角处的怪诞人像或兽面，名为“<strong>滴水嘴兽</strong>”，本是用于导流雨水的建筑构件。但在瓦讷，它们被赋予了格外生动，甚至有些惊悚的想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中流传最广的传说，与一对商人夫妇有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事发生在中世纪鼎盛时期。丈夫是一位经常出海远航的富商，妻子则留在家中。因丈夫离家日久，妻子与当地一位年轻的军官产生了私情。此事最终传到了丈夫耳中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "商人归来后，并未立即发作，而是酝酿了一个冷酷的报复计划。他委托当时最好的石匠，以妻子和情夫为原型，雕刻了两个极度丑陋、痛苦扭曲的鬼脸石像，并将它们安装在自己豪宅最显眼的拐角处。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，每一个路过的人都能看到这对“罪人”被永恒地钉在耻辱柱上，日晒雨淋，口中吐出的不再是情话，而是冰冷的雨水。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说中，妻子在认出石像后羞愧发疯，而整个城市都在这场无声的审判中窃窃私语。工匠们竞相模仿，使得雕刻夸张、富有道德训诫意味的鬼脸，一时成为瓦讷建筑的风尚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说真假已不可考，但它深刻地反映了中世纪市民社会的道德观与舆论力量。建筑不再是无生命的石头，而是社会新闻、道德评判的载体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些沉默的“鬼脸”，仿佛中世纪版的“八卦小报”，用最坚硬的材质，讲述着最人性化的欲望、背叛与惩罚。它们让瓦讷的老墙，充满了故事性与戏剧张力，远非冷冰冰的古迹所能比拟。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的瓦讷老城，之所以被誉为“法国保存最完好的中世纪古城之一”，并非因为它从未改变，而是因为它将历史的层理如此清晰地展示给世人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马的基石、中世纪的城墙、文艺复兴的木筋屋、安妮公爵的宫廷余韵……它们没有彼此覆盖，而是和谐共存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂瓦讷，就是读懂一部微缩的<strong>布列塔尼命运史诗</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从凯撒征服到圣徒传教，从百年战争的烽烟到公国独立的最后荣光，再到归于法兰西后的宁静沉淀。每一步转折，都在这片小小的城墙内留下了刻度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有宏大叙事常见的废墟感，而是一种“生活继续”的厚重。咖啡馆开在15世纪的宅邸里，鲜花装点着花岗岩的窗台，历史是背景，而非标本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你用手触摸那些被岁月打磨光滑的城墙石，走过的不仅是景点，更是一座“活着的”历史书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它告诉你，真正的传奇，未必是开疆拓土，可能是一个女孩为守护家园穷尽一生的挣扎；永恒的魅力，也不仅是建筑的宏伟，更是寻常巷陌中，一代代人生活、爱与恨所沉淀出的温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/locronan-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛克罗南</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Locronan</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/place-vendome" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    旺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">旺多姆广场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Place Vendôme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vezelay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦兹莱隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vézelay Abbey</p>
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
