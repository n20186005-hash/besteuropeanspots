import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '帕绍历史溯源｜三河交汇之城的前世今生与千年传说',
  description: '探索德国隐秘的“三河之城”帕绍。不止于巴洛克美景，穿越罗马堡垒、中世纪盐路与主教权力中心的尘封往事，邂逅莫扎特之父与圣徒头骨的传奇。',
}

export default function PassauHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '德国', href: '/destinations/europe' },
            { label: '巴伐利亚', href: '/destinations/europe' },
            { label: '帕绍', href: '/attractions/passau-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`帕绍・Passau・德国・巴伐利亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在德国东南角，多瑙河、因河和伊尔茨河以三种截然不同的色彩在此相拥，造就了独一无二的“三河之城”——帕绍。然而，河流赋予它的，远不止一幅明信片般的风景。自罗马军团在此扎下第一座堡垒起，湍急的河水便裹挟着盐、权力与思想，将这座边城冲刷成欧洲历史上一枚不可忽视的楔子。它是千年盐路的心脏，是中世纪最富有的主教采邑之一，也是一场毁灭性大火后涅槃重生的巴洛克明珠。抛开游玩攻略，走进帕绍的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`帕绍`} />
                <InfoRow label="英文名称" value={`Passau`} />
                <InfoRow label="正式名称" value={`Passau`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴伐利亚`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕绍的故事，始于河流，成于边境。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>公元前一世纪</strong>，罗马帝国向北扩张的脚步在此稍作停顿。高耸的波希米亚森林与蜿蜒的河流构成了天然防线。罗马人看中了多瑙河北岸一座陡峭的山岬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约<strong>公元80年</strong>，他们在此建立了名为“<strong>巴塔维斯</strong>”的堡垒，驻守第九“西班牙”军团。这不仅是军事前哨，更是罗马文明向“蛮族之地”延伸的触角。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Passau”这个名字，便直接源于拉丁语“Batavis”。堡垒的建立，为这座城市的命运定下了永恒的基调：它永远是一座边界之城，一个文明交汇的节点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国衰落后，这里并未沉寂。<strong>739年</strong>，传教士<strong>圣博尼法斯</strong>在此建立了教区，帕绍由此成为基督教向巴伐利亚及以东地区传播的桥头堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1217年</strong>，一个关键转折点到来。帕绍主教被神圣罗马帝国皇帝<strong>腓特烈二世</strong>擢升为帝国诸侯。从此，帕绍的主教不仅是精神领袖，更成为世俗统治者，手握重权。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市，在神权与王权的双重加持下，开启了它最为辉煌的中世纪篇章。它的起源，深埋在罗马的基石与主教的权杖之下，静静等待着被盐与火重新锻造。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕绍的历史，被两项重要的贸易与一次毁灭性的灾难深刻塑造。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是 <strong>“白色黄金”——盐</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从中世纪早期开始，帕绍便掌控着从萨尔茨堡至波希米亚的“<strong>黄金盐路</strong>”的关键节点。盐从阿尔卑斯山的矿洞中被运出，在帕绍装上平底船，经多瑙河向东输送。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在帕绍的码头，空气中弥漫着咸涩的气息。成捆的盐袋堆积如山，它们将是匈牙利平原和更远方土地上保存食物、维系生命的珍宝。硬币的叮当声，是这座城市最悦耳的脉搏。”——摘自16世纪商人手札" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "盐税为帕绍主教带来了难以置信的财富，使之成为神圣罗马帝国最富有的教区之一。今日老城那些华美的市民建筑与坚固的城墙，其基石皆由盐铸就。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道印记，是 <strong>1662年的大火</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>5月2日</strong>，一场灾难降临。一场起因于面包房炉火的事故，在狂风助长下演变成吞没全城的烈焰。短短数小时内，哥特式的帕绍化为一片焦土。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "超过1500栋房屋，包括主教宫殿、教堂和市政厅，尽数被毁。这是城市史上最黑暗的一天。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，灰烬中诞生了奇迹。雄心勃勃的主教请来了当时顶级的意大利巴洛克建筑师，如<strong>卡尔洛·卢拉戈</strong>，主持重建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一座全新的、统一风格的巴洛克之城从废墟中拔地而起。线条柔美的立面、华丽的灰泥装饰、宏伟的广场，取代了昔日狭窄的街巷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣史蒂芬主教堂那巨大的<strong>绿色洋葱顶圆穹</strong>，成为城市的新天际线。这场大火，意外地赋予了帕绍如今我们所见到的、和谐如艺术品的巴洛克风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第三道印记，是 <strong>“世界第一大管风琴”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "重建后的圣史蒂芬主教堂，主教决定用一件乐器来彰显上帝的荣光与城市的复兴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1928年</strong>，经过漫长建造，拥有<strong>17974根音管、233个音栓</strong>的管风琴最终落成。它不仅是乐器，更是工程学与声学的丰碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每日中午的管风琴演奏会，低沉音符如多瑙河水般震动古老的石壁，这声音不仅是音乐，更是历史本身的回响，诉说着从毁灭到新生的完整轮回。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座小城的名人谱系中，一位音乐巨匠的父亲和一位圣徒的遗骸，构成了最奇特的组合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "首先，是<strong>利奥波德·莫扎特</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1719年11月14日</strong>，利奥波德·莫扎特出生于帕绍一个富裕的装订商家庭。今天，在老城一座不起眼的建筑外墙上，一块铭牌标记着他的诞生地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "世人皆知他是<strong>沃尔夫冈·阿马德乌斯·莫扎特</strong>严苛而精明的父亲与导师。但在此之前，他本人就是一位杰出的音乐家、作曲家和小提琴教育家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的生涯始于帕绍主教教堂的唱诗班。这座城市的早期音乐熏陶，为他打下了坚实基础。后来他前往萨尔茨堡服务，并写下了影响深远的小提琴教程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "尽管他最终的光芒被儿子的天才所掩盖，但帕绍始终视他为骄傲。他象征着这座城市在艺术教育上的传统与底蕴。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的一切规矩与对音乐的严谨态度，皆源于我早年在帕绍教堂所受的训练。那里对完美的追求，刻入了我的骨髓。”——利奥波德·莫扎特在一封家书中回忆道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与帕绍紧密相连的名人，并非生于斯，却永恒地栖居于斯——他是<strong>圣瓦伦丁</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对，就是那位情人节的主角。关于他的遗骸如何来到帕绍，有一个曲折的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，早期的基督教圣徒<strong>圣瓦伦丁</strong>在罗马殉道后，其遗骸在早期中世纪被转移至安全地带。<strong>公元8世纪</strong>，一部分遗骨（主要是头骨）被带到帕绍，安置在一座以他命名的小教堂内。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕绍的<strong>圣瓦伦丁头骨</strong>成为了中世纪重要的朝圣对象。它被精心安置在一个华丽的水晶圣髑盒中，头骨前额镶嵌着宝石，静静陈列于圣史蒂芬主教堂的侧礼拜堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年情人节，仍有恋人前来瞻仰。这位爱与殉道的守护圣徒，其最具象的存在竟留在了这座德国边城，而非罗马。这使得帕绍的“圣瓦伦丁”具有了一种独一无二的真实感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位是音乐教育之父，一位是爱情的主保圣人。他们的存在，让帕绍的历史叙事，在权力与财富之外，平添了艺术的律动与温情的神性。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "河流是帕绍的灵魂，自然也孕育了最生动的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的莫过于 <strong>“三河姐妹”的传说</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，多瑙河、因河和伊尔茨河是三位性格迥异的姐妹。大姐多瑙河<strong>强大、沉稳而略显忧郁</strong>，水流湍急，呈深棕色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二姐因河来自阿尔卑斯山，<strong>清澈、冰冷而活泼</strong>，泛着绿松石般的光泽。小妹伊尔茨河则最短小，<strong>神秘而幽深</strong>，从黑暗的森林中流出，颜色近乎墨绿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "三姐妹约定在帕绍相会，却谁也不愿改变自己的颜色。于是她们并行而不相融，形成了长达数百米的“三色河”奇观。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“看呐，那是多瑙河夫人的深色绸裙，因河少女的翡翠腰带，还有伊尔茨河小姑娘的玄色绶带。她们在此拥抱，却永不改变自己。”——帕绍老船夫代代相传的故事" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与城市纹章上的 <strong>“帕绍之狼”</strong> 有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪时，据说一只巨狼经常在冬季渡过多瑙河，到城里袭击家畜，引发恐慌。一位勇敢的主教（一说是一位铁匠）最终制服了猛兽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了纪念这次英勇行为，狼被纳入了城市的徽章。这个传说或许隐喻着这座城市驯服荒野、在文明边界站稳脚跟的艰难历程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，你仍能在古老的建筑浮雕和市井招牌上，看到这只昂首阔步的狼。它不再是恐怖的象征，而是化为了帕绍人坚韧与守护精神的图腾。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客站在<strong>豪斯山</strong>顶，或漫步于<strong>旧市政厅</strong>的壁画长廊时，所见的不仅是风景。那三色交汇的河水，是地理的奇观，更是历史层理的直观隐喻——罗马的棕黄、中世纪的墨绿、巴洛克的碧蓝，在此交融，却界限分明。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕绍的魅力，在于它是一部“可阅读”的城市传记。每一块被洪水打磨光滑的卵石，每一面被夕阳染红的巴洛克山墙，都在低语。它告诉你边界如何塑造身份，灾难如何催生艺术，贸易如何编织文明网络，而信仰与传说又如何为坚硬的现实赋予柔和的诗意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有宏大叙事的压迫感，只有一段段被河水精心保管的、完整而自洽的往事。读懂帕绍，便是读懂一座欧洲小城如何以自身的韧性，在时间的洪流中锚定位置，并让每一道伤痕都开出艺术之花。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/schnoor-quarter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    不
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">不来梅施诺尔区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schnoor Quarter</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ochsenhausen-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥森豪森</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ochsenhausen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/meissen-porcelain-albrechtsburg-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈森（欧洲瓷器之都及阿尔布莱希特城堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meissen (Albrechtsburg Castle)</p>
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
