import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '米尔滕贝格历史溯源｜美因河畔的“珍珠”小城，它的税关、美酒与木筋房前世今生',
  description: '深藏于美因河大拐弯的千年古镇，非典型巴伐利亚风情。追溯其从罗马界墙到帝国税关，从主教堡垒到酒商天堂的层层历史，遇见真实的德国商路传奇。',
}

export default function MiltenbergMainPearlHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '德国', href: '/destinations/europe' },
            { label: '巴伐利亚州，米尔滕贝格', href: '/destinations/europe' },
            { label: '米尔滕贝格（美因河畔的“珍珠”）', href: '/attractions/miltenberg-main-pearl-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`米尔滕贝格（美因河畔的“珍珠”）・Miltenberg・德国・巴伐利亚州，米尔滕贝格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在巴伐利亚的旅游地图上，它常被新天鹅堡的光环遮蔽。但若将时光倒流七百年，这座嵌于美因河巨大弯道中的小镇，才是真正的权力与财富枢纽。它并非诞生于童话，而是发轫于一道冰冷的罗马石墙，成长于主教诸侯锱铢必较的税关之下，最终在商旅的葡萄酒香中，淬炼成一颗温润的“美因河珍珠”。抛开游玩攻略，走进米尔滕贝格的尘封往事，遇见属于它的铁血、铜臭与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`米尔滕贝格（美因河畔的“珍珠”）`} />
                <InfoRow label="英文名称" value={`Miltenberg`} />
                <InfoRow label="正式名称" value={`Miltenberg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴伐利亚州，米尔滕贝格`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米尔滕贝格的起点，并非田园诗，而是一道帝国的边界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约在公元100-150年，罗马人为了抵御北方的日耳曼部落，修建了著名的<strong>上日耳曼-雷蒂安界墙</strong>。这段土木工程穿越今天的黑森州与巴伐利亚州，而米尔滕贝格所处的战略要冲——美因河陡峭的板岩山崖之下，便矗立着一座关键的罗马城堡与瞭望塔。帝国的军团在此巡逻，凝视着界墙外被称为“蛮族之地”的广袤森林。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马秩序崩塌后，这片土地被法兰克王国纳入版图。但它真正获得名字与城市胚胎，要到<strong>1237年</strong>。一份由<strong>美因茨大主教西格弗里德三世</strong>颁发的特许状，首次明确提到了“<strong>Mildenberc</strong>”。这个名字源自古高地德语的“<strong>Mittelburg</strong>”（中间的城堡），精准描述了它的地理：位于美因茨大主教区与维尔茨堡主教区两大势力范围的交界处，一座“中间的堡垒”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大主教在此建城，意图赤裸而精准。美因河是当时连接美因茨、法兰克福与南德的黄金水道。这个近乎90度的大河湾，水流湍急，船只必经且必须减速。在这里设卡征税，堪称天才的“商业设计”。因此，米尔滕贝格从诞生之日起，其基因里就刻着双重密码：<strong>军事的扼守，与商业的盘剥</strong>。它是一座为收税而生的要塞城市，这奠定了其后数百年激烈争斗与惊人财富的基调。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的印记，深深刻在砂岩城墙与累累税单之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是<strong>主教的铁腕与商人的金币</strong>。自建城起，米尔滕贝格就是<strong>美因茨选帝侯</strong>（兼大主教）的禁脔。他在临河的板岩山上修建了恢宏的<strong>米尔滕贝格城堡</strong>，虎视眈眈俯瞰河道。任何南来北往的货船，运载着葡萄酒、布料、香料，都必须在此停靠，接受检查，并缴纳昂贵的通行税。这座城堡不是国王的宫殿，而是财富的抽水机。到了14世纪，随着神圣罗马帝国境内贸易空前繁荣，米尔滕贝格的重要性与日俱增。它成为<strong>莱茵-美因-多瑙河商路</strong>上的关键锁钥，财富如美因河水般源源涌入。城市规模迅速扩大，我们今天看到的、拥有超过100栋木筋房屋的壮观老城，其核心骨架正是在这段黄金时期形成。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从米尔滕贝格驶往法兰克福的船上，必须装载至少10桶葡萄酒……否则将面临罚金。”——摘自14世纪美因茨选帝侯的关税条例。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个不可磨灭的印记，是<strong>三十年战争（1618-1648）</strong> 的惨烈创伤。这场席卷欧洲的宗教与权力战争，将这座富裕的税关城市变成了血腥的战场。由于其战略位置，它被瑞典帝国军、神圣罗马帝国军反复争夺、占领与洗劫。最悲惨的一幕发生在<strong>1631年</strong>，信奉新教的瑞典国王<strong>古斯塔夫二世·阿道夫</strong>的军队攻陷城池，并对信奉天主教的城市居民进行了报复性掠夺与破坏。人口锐减，经济凋敝，昔日繁忙的码头一度沉寂。战争留下的不仅是废墟，还有深重的宗教与社会裂痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，则关乎帝国的法律与秩序。战争结束后，米尔滕贝格在选帝侯的统治下缓慢复苏。值得一提的是，从1698年至1803年，这座小镇曾设有<strong>帝国宫廷法庭</strong>的下属机构。这意味着，此地曾审理过来自帝国各地的法律纠纷。虽然不如经济角色显赫，但这为其增添了一层超越地方的、帝国层面的司法权威色彩，吸引了不少法律学者与文书官在此定居， subtly提升了城市的文化格调。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与这座城共生的名人，并非叱咤风云的帝王，而是精于计算的实干家与沉静抒情的诗人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是<strong>约翰内斯·洛伊希滕贝格</strong>。这个名字对大众或许陌生，但在军事工程史上，他是一位里程碑式的人物。他于<strong>大约1600年</strong>出生在米尔滕贝格一个石匠家庭。在当时，石匠行会往往掌握着最先进的几何学与力学知识。洛伊希滕贝格的天赋得到了黑森-达姆施塔特伯爵的赏识，被培养成为了一名卓越的军事工程师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇与米尔滕贝格的家乡背景息息相关。这座城市本身就是防御工事的典范：依山而建的城堡、顺应地形蜿蜒的城墙、易守难攻的河湾。成长于这样的环境，洛伊希滕贝格对防御体系有着天生的洞察力。他职业生涯的巅峰，是参与了<strong>1630年代曼海姆要塞</strong>的现代化扩建设计。这座要塞是当时欧洲最先进的棱堡防御体系之一。他的设计严谨、科学，充分体现了从家乡险要地形中获得的灵感——如何利用角度交叉火力，如何构建无法被直接炮击的死角。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他的命运也如同故乡一样，被三十年战争裹挟。他先后为 Protestant Union（新教联盟）和神圣罗马帝国皇帝效力，这种“跳槽”在当时的技术官僚中并不罕见，但也反映出个人在时代洪流中的无奈。最终，他在<strong>1670年</strong>于维尔茨堡去世。米尔滕贝格如今以他为荣，因为他的故事证明，这座小城不仅能产生收税官和酒商，也能孕育出影响欧洲军事格局的精密头脑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是诗人<strong>瓦伦丁·福伊特</strong>。他代表了这座城市的另一面：市井的、温暖的、充满生活情趣的人文精神。福伊特生于<strong>1844年</strong>的米尔滕贝格，终其一生都未曾远离故乡。他的职业是法院文书，这份严谨的工作之余，他用笔为家乡的日常注入了不朽的诗意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "福伊特最伟大的贡献，是用当地方言（南法兰克方言）创作了大量诗歌、故事与戏剧。他的作品不是宏大的史诗，而是精准捕捉了19世纪末、20世纪初米尔滕贝格的市民生活、风俗习惯与内心情感。他描写老酒馆里的喧闹，集市上的讨价还价，美因河上的船工号子，以及四季轮回中小城的静谧之美。他被誉为“<strong>米尔滕贝格的故乡诗人</strong>”，因为他的文字，就是这座小镇的灵魂录音。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在‘珍珠’的屋檐下，时间缓缓流淌，每一块古老的木板，都在诉说衷肠。”——瓦伦丁·福伊特诗句摘选" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过福伊特的眼睛，我们看到的不是一个冰冷的历史标本或税关账簿，而是一个活生生的、有烟火气的家园。他的故居至今保存在老城中，他的诗歌仍被当地人在节庆中朗诵。他让米尔滕贝格的历史，从王侯将相的叙事，回归到每一个普通人的悲欢离合之中。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在石板路与木筋墙之间，流传着比历史更古老的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说围绕<strong>市场广场上的“会哭泣的圣母”雕像</strong>。这尊建于16世纪的砂岩圣母像，位于老市政厅的拐角。传说在三十年战争期间，瑞典军队破城前夕，雕像的眼中竟然流出了真实的泪水。这被视为神迹与凶兆，警示着即将降临的灾难。尽管城市最终未能免于劫难，但这个传说深深安慰了战乱中惶恐的市民，坚定了他们的信仰。至今，当地人仍对这尊雕像怀有特殊的敬畏，认为她是城市的守护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与一座特殊的建筑相关，那就是老城里最古老的旅店“<strong> Zum Riesen </strong>”（意为“巨人居”）。这家旅店的历史可追溯至<strong>1158年</strong>，接待过无数帝王贵族。传说，在建造之初，曾有一位神秘的巨人石匠帮忙搬运了最重的梁木。而旅店地窖里，据说有一条秘密通道直通山上的城堡，供选帝侯在紧急时使用，或用于秘密运输珍贵的货物（或许是免税的？）。这些传说为这座古老的酒馆蒙上了浪漫与冒险的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，城市纹章上的“<strong>米尔滕贝格轮</strong>”——一个带有弯曲辐条的红色车轮，也有其民间解释。一种说法是，它代表了美因河在此处的急转弯；另一种更富想象力的说法是，它源自一位古代车轮匠人的神奇作品，这个车轮能自己滚动上山，为建造城堡运输石料。这些代代相传的故事，将冷硬的历史与地理特征，转化为了充满人性温度的神奇叙事，构成了城市独特的集体记忆。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日漫步米尔滕贝格，你踩着的每一块卵石，拂过的每一面木筋墙，都浸透着层累的时光。从罗马界墙的边防哨所，到选帝侯锱铢必较的税关堡垒；从三十年战争的烽火伤痕，到商旅云集的葡萄酒香；从军事工程师的精密蓝图，到故乡诗人笔下的烟火日常——这座“美因河珍珠”并非单一维度的明信片小镇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，恰恰在于这种复杂的历史分层与真实的生活质感。它向你展示的，不是被净化后的童话，而是一部微缩的、生动的中欧发展史：关于权力如何塑造地理，商业如何驱动文明，战争如何摧毁又如何重建，以及普通人如何在历史的缝隙中，构筑属于自己的诗意家园。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂米尔滕贝格，便是读懂了莱茵-美因地区乃至神圣罗马帝国那纷繁交错的历史经络中，一个坚韧而璀璨的节点。它的往事，比它的风景更耐人寻味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/xanten-archaeological-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克桑滕古罗马考古公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Xanten Archaeological Park</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/halberstadt-organ-project-rebuilt-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尔伯施塔特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Halberstadt</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/goslar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈斯拉尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Goslar Old Town</p>
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
