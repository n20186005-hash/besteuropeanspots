import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特尔纳瓦历史溯源｜斯洛伐克小罗马的前世今生与教会传奇',
  description: '揭开“斯洛伐克小罗马”的神秘面纱。探索特尔纳瓦如何从王室城镇跃升为教会心脏，聆听大学钟声与巴洛克塔楼讲述的千年史诗。',
}

export default function TrnavaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '斯洛伐克', href: '/destinations/europe' },
            { label: '特尔纳瓦州', href: '/destinations/europe' },
            { label: '特尔纳瓦', href: '/attractions/trnava-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特尔纳瓦・Trnava・斯洛伐克・特尔纳瓦州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在多瑙河平原与喀尔巴阡山麓的交界，一座由天际线上十一座教堂塔楼勾勒轮廓的古城静卧着。它不是罗马，却被冠以“斯洛伐克小罗马”的称号；它没有帝国之都的显赫，却曾掌管着一个王国长达三个世纪的精神命脉。这里是<strong>特尔纳瓦</strong>，斯洛伐克最古老的城镇之一，一部以石头和信仰书写的厚重编年史。抛开游玩攻略，走进特尔纳瓦的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特尔纳瓦`} />
                <InfoRow label="英文名称" value={`Trnava`} />
                <InfoRow label="正式名称" value={`Trnava`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`特尔纳瓦州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特尔纳瓦的故事，始于欧洲中世纪城镇化的浪潮之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1271年</strong>，匈牙利国王<strong>贝拉四世</strong>授予这片河畔聚落皇家自由城镇的特许状。这不仅是一纸公文，更是一个时代的入场券。在蒙古铁骑蹂躏后的重建时期，国王急需可靠的经济与军事据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特尔纳瓦凭借其地处东西商路要冲的位置，迅速崛起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它成为连接匈牙利王国腹地与波兰、波西米亚贸易网络的关键节点。城镇的名字“Trnava”源自古斯拉夫语，意为“荆棘丛生之地”。这并非指荒芜，而恰恰描绘了它最初作为河畔防御性定居点的地理特征——茂密的植被是天然的屏障。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城墙很快竖立起来，其规模与坚固程度在当时的上匈牙利地区首屈一指。这些城墙不仅防御外敌，更划定了法律、税收和特权的边界，保护着城内蓬勃发展的手工业和商业行会。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从一片“荆棘之地”到享有特权的王室城镇，特尔纳瓦完成了它的首次华丽转身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的命运齿轮，即将被一场遥远的政治风暴拨向一个意想不到的方向。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "特尔纳瓦的历史并非平铺直叙，它被几个决定性时刻深刻重塑，每一次都在这座城的肌理上留下了不可磨灭的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个也是最重要的印记，刻于 <strong>1543年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那一年，奥斯曼帝国的军队兵临匈牙利都城布达城下。匈牙利的大主教与教会中枢，被迫从危在旦夕的都城仓皇北迁。他们的目的地，正是城墙坚固、相对安全的特尔纳瓦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，这座商贸城镇一夜之间跃升为<strong>匈牙利王国实际上的教会首都</strong>，这一地位持续了近<strong>280年</strong>，直至1820年。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们带着圣物与文献，穿越满是难民的道路，来到这座坚固的城镇。愿上帝保佑此地成为信仰的新堡垒。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "——一位随行教士的日记片段" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "教廷的入驻彻底改变了特尔纳瓦的城市基因。大量神职人员、学者、艺术家和工匠随之涌入。城市的天际线开始被一座座宏伟的宗教建筑重塑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "紧随其后的第二个印记，是 <strong>1635年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在反宗教改革的浪潮中，由大主教<strong>彼得·帕兹曼尼</strong>推动，特尔纳瓦大学正式成立。这是匈牙利王国境内第一所大学，也是当时哈布斯堡王朝以东最重要的知识中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它下设神学、哲学、法学、医学四个学院，吸引了来自中欧各地的学子。大学不仅传播知识，更是天主教对抗新教思想的前沿阵地。印刷所、图书馆、辩论厅让特尔纳瓦充满了学术气息，从“教会行政中心”升级为“教会文化心脏”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三个印记，则是<strong>巴洛克艺术的全面绽放</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "17-18世纪，在教会与大学的雄厚财力支持下，特尔纳瓦迎来了建筑黄金期。原有的哥特式教堂被赋予华丽的巴洛克内饰，崭新的修道院和宫殿拔地而起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尤其是一系列令人惊叹的教堂塔楼相继建成，它们高低错落，采用洋葱顶或螺旋尖顶，形成了独一无二的城市轮廓线。正是这密集而壮观的塔楼群，为特尔纳瓦赢得了 <strong>“斯洛伐克小罗马”</strong> 的浪漫别称。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一座塔楼，都不只是石构建筑，而是那个动荡又虔诚时代的精神丰碑。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在特尔纳瓦的辉煌史诗中，两位人物的身影尤为突出。他们一位是城市的塑造者，一位是城市的记录者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>彼得·帕兹曼尼（Péter Pázmány，1570-1637）——大主教、政治家与教育奠基人</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕兹曼尼并非特尔纳瓦土著，但他无疑是决定这座城市命运的最关键人物。这位出身新教贵族、后皈依天主教的耶稣会士，在<strong>1616年被任命为埃斯泰尔戈姆大主教</strong>，即匈牙利首席大主教。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他以非凡的政治智慧、雄辩的口才和坚定的信仰，成为哈布斯堡王朝在匈牙利进行反宗教改革的核心领导者。他的目光早早落在了作为大主教驻地的特尔纳瓦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕兹曼尼最大的遗产，便是创立了<strong>特尔纳瓦大学</strong>。他深知思想的力量远胜于武力。1635年，他说服皇帝斐迪南二世颁布特许状，并捐出个人巨额财富作为启动资金。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“愿这所学府成为照亮整个匈牙利王国，乃至所有邻国的火炬，驱散异端的黑暗。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "——彼得·帕兹曼尼" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这所大学迅速成为中欧天主教世界的学术灯塔。帕兹曼尼的愿景得以实现：特尔纳瓦从行政中心，蜕变为一个生产神学家、哲学家和统治精英的思想熔炉。他的影响力如此深远，以至于今天斯洛伐克的顶尖学府“夸美纽斯大学”，其源头便可追溯至他创办的这所特尔纳瓦大学。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>安东·施密特（Anton Schmidt，？-1755）——巴洛克建筑大师</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说帕兹曼尼为城市注入了灵魂，那么像安东·施密特这样的建筑师，则为它披上了华丽的外衣。施密特是18世纪活跃于上匈牙利地区的杰出建筑师兼建筑商。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是一位将巴洛克风格深深烙在特尔纳瓦的人。他的作品定义了这座城市鼎盛时期的视觉风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最著名的作品是<strong>圣约翰洗礼者大教堂</strong>。这座为耶稣会建造的教堂，是特尔纳瓦最大、最壮观的巴洛克建筑。施密特借鉴了罗马的杰苏教堂样式，设计了宏伟的立面与内部广阔的空间。教堂内部的壁画、雕塑和祭坛，共同营造出令人震撼的天国幻境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，城市中许多贵族宫殿、修道院改建项目也都出自他或他的作坊之手。施密特并非仅仅是外来风格的复制者；他在设计中巧妙融合了中欧的地方元素与材料，形成了独特的“特尔纳瓦巴洛克”风格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的一生就如同他所建造的塔楼——默默扎根于此，用石头谱写了一曲凝固的乐章，让后世人一抬头，便能望见那个时代的荣光与虔诚。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在庄严的教堂与厚重的史册之外，特尔纳瓦的街巷间也流淌着充满人间烟火气的传说。这些故事代代相传，为石墙与塔楼注入了灵动的生命。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说与城市的标志——<strong>塔楼</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们说，特尔纳瓦之所以拥有如此多的教堂塔楼，是因为与魔鬼的一次交易。相传，一位雄心勃勃的市长许诺魔鬼，若能在一夜之内为城市建造起最宏伟的塔楼，便将第一个经过塔楼的灵魂献给它。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "魔鬼欣然应允，施展魔力奋力工作。然而，市长的妻子智慧过人。在拂晓魔鬼即将完工之际，她将一只公鸡赶向塔楼。魔鬼以为交易达成，攫取了公鸡的灵魂后愤然离去，留下了一座未完全建成的塔尖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，特尔纳瓦的许多塔楼顶端都是奇特的“未完成”的洋葱形或扭曲形状，据说那就是魔鬼恼怒的印记。而城市也因这场智斗，幸运地拥有了众多塔楼，获得了“小罗马”的美名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说围绕<strong>圣尼古拉斯教堂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座最古老的教堂下，据说埋藏着一条通往远方修道院的秘密地道。在战乱年代，这条地道曾庇护了许多修士和珍贵圣物。民间流传，在万圣节之夜，细心的人还能听到从地下传来的微弱诵经声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "还有关于“<strong>哭泣的圣母</strong>”像的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在大学教堂内，一幅圣母玛利亚的画像备受尊崇。传说在十七世纪一场围城战的艰难时刻，信徒们看到画中的圣母流下了眼泪。这被视为神迹，极大地鼓舞了守城者的士气，最终城市得以保全。这个传说强化了特尔纳瓦作为“受庇佑的信仰之城”的民间形象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说或许无从考证，但它们如同藤蔓，缠绕在历史的砖石之上，构成了这座城市鲜活而温暖的人文肌理。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "漫步在今天的特尔纳瓦老城，你踏过的石板路，曾走过避难的枢机主教、求学的人文主义者、建造教堂的巴洛克大师。你目光所及的每一座塔楼，都不是孤立的风景，而是一个持续了近三个世纪的神权-学术时代的无言诉说者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的历史回响是多重而清晰的：它是中世纪自治城镇商业自由的余音，是奥斯曼阴影下“信仰避难所”的沉重喘息，是反宗教改革时期知识交锋的激烈回响，更是巴洛克艺术臻于极致的华丽乐章。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂特尔纳瓦，便是读懂了一个王国在危难之际如何保存其精神内核，读懂了一个边缘城镇如何因缘际会成为文明的中心，最终又将这一切荣光沉淀为从容不迫的日常。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史的戏剧未必只在恢弘的都城上演。在这座“斯洛伐克小罗马”，每一块砖石都封存着一部微缩的欧洲教会史与思想史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cachtice-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    恰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">恰赫季采城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Čachtice Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/koice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科希策老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Košice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zilina-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    日
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">日利纳老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zilina Old Town</p>
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
