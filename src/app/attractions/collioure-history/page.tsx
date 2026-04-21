import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科利尤尔历史溯源｜野兽派诞生地的渔港前世，与马蒂斯、德兰的色彩革命传奇',
  description: '深入法国南部隐秘渔港科利尤尔。这里不止有阳光海岸，更是野兽派绘画的摇篮。跟随马蒂斯与德兰的足迹，解码色彩如何在此挣脱枷锁，聆听城堡与教堂承载的千年边防史。',
}

export default function CollioureHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '法国', href: '/destinations/europe' },
            { label: '东比利牛斯省', href: '/destinations/europe' },
            { label: '科利尤尔', href: '/attractions/collioure-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科利尤尔・Collioure・法国・东比利牛斯省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在法国与西班牙交界的蔚蓝海岸，隐藏着一座被阳光与赭石色房屋点亮的渔港——科利尤尔。它的名字，很少出现在大众旅行团的清单上，却永恒镌刻在现代艺术史的扉页。<strong>1905年</strong>，亨利·马蒂斯与安德烈·德兰于此引爆了一场名为“野兽派”的色彩革命，让这座小城成为了现代艺术的“应许之地”。然而，艺术的绚烂只是它最外层的光泽。 beneath the surface, lies a history as dramatic as its light and shadow – it has been a strategic military fortress for the Templars, a pawn in the power struggles between kings, and a bustling port for wine and anchovy trade. 抛开游玩攻略，走进科利尤尔的尘封往事，遇见属于它的时光、色彩与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科利尤尔`} />
                <InfoRow label="英文名称" value={`Collioure`} />
                <InfoRow label="正式名称" value={`Collioure`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`东比利牛斯省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科利尤尔的起源，深埋在比利牛斯山麓与地中海交织的古老边界线上。其历史可追溯至古希腊时期，但作为一个具象的定居点，它大约在<strong>公元673年</strong>的文献中首次被明确提及，名为“Caucoliberis”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个名字本身，就是一层历史的化石。“Collioure”源于拉丁语“Collis”（山丘）与“Lapis”（石头）的结合，生动描述了它背靠岩石山丘、面朝海湾的地貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它绝非一个自然生长的宁静渔村。从一开始，它的命运就与“战略”二字紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在罗马帝国时期，这里可能已是一个观察海况的据点。真正使其轮廓清晰起来的，是中世纪的军事与宗教力量。<strong>12世纪</strong>，圣殿骑士团看中了这个易守难攻的天然良港，在此建立了最初的防御工事和港口设施。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地有一句古老的谚语流传：“科利尤尔有三宝：风、岩石和士兵的眼睛。” 这精准概括了它作为边防要塞的原始身份——依靠地利与警戒而存在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "13世纪，随着圣殿骑士团的衰落，控制权落入阿拉贡王国（后来的西班牙）手中。他们强化了这里的军事地位，修建了坚实的城堡核心。此后数百年，科利尤尔便成了法兰西与西班牙两大王国在比利牛斯山边界拉锯战中最前沿的棋子之一，其归属权如同潮水般反复易手。这种“边界基因”，深深烙印在了它的建筑、文化与人们的性情之中。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科利尤尔的历史，是一部用石头、海浪与条约写成的边境编年史。它最深刻的印记，并非来自和平发展，而是源于冲突与争夺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是<strong>1659年</strong>的《比利牛斯条约》。这份条约结束了法西之间漫长的战争，并做了一个决定性的划分：鲁西永地区（包括科利尤尔）正式割让给法兰西国王路易十四。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，条约的墨水未干，军事建设的尘埃便已扬起。太阳王的首席军事工程师，大名鼎鼎的<strong>塞巴斯蒂安·勒·普雷斯特雷·德·沃邦</strong>，亲自接手了科利尤尔的防务。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沃邦没有摧毁旧有的阿拉贡城堡，而是以一种天才的方式将其“吞噬”。他在原有的<strong>皇家城堡</strong>外围，构筑了更为宏大、符合当时火炮战争需求的星形堡垒与厚重城墙。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "沃邦在考察报告中写道：“此地的价值在于其港口，而危险亦在于此。必须让城堡成为锁，城墙成为链，将海湾牢牢锁在法兰西手中。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，我们今天看到的城堡，实则是嵌套式建筑——内部是中世纪阿拉贡王权的遗迹，外部是17世纪法兰西绝对君权的钢铁臂膀。渔民的房屋，则被这道新的城墙严严实实地与城堡隔开，仿佛在提醒：军事优先于民生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个印记，则隐藏在平静的港湾之下。科利尤尔有一座看似平常的教堂——<strong>圣文森教堂</strong>。它的独特之处在于，那座屹立于海浪中的独立钟楼，原本是一座建于<strong>14世纪</strong>的灯塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座灯塔最初为往来商船指引方向，守护着凤尾鱼捕捞和葡萄酒贸易的航道。随着城市防御重心转移，它被改造并纳入了教堂建筑群，成为了钟楼。从指引经济生命的灯塔，变为召集信徒的钟楼，其功能的变迁，默默诉说着这座城市从“贸易据点”向“边防堡垒”再向“平民聚落”演化的复杂历程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡与灯塔教堂，一武一文，一君权一民生，共同构成了科利尤尔历史的骨架，也塑造了它那份混杂着坚毅与诗意的独特气质。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科利尤尔在20世纪初迎来的两位“闯入者”，永远改变了它的命运，也将自己的名字与这座小城熔铸在一起。他们是<strong>亨利·马蒂斯</strong>与<strong>安德烈·德兰</strong>，野兽派运动的双子星。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1905年夏天</strong>，马蒂斯首先来到科利尤尔。他被这里“几乎不真实”的光线所震撼。地中海炽烈的阳光，消除了阴影的灰度，让一切色彩都变得纯粹、强烈、仿佛在尖叫。蓝色的海不是一种蓝，而是钴蓝、群青、蔚蓝的交响；粉色的墙不是粉饰，而是土地与阳光孕育出的原生暖调。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马蒂斯立即写信给比他年轻的德兰，用一种近乎召唤的口吻说：“我找到了我们的天堂！这里的色彩不需要调和，它们本身就活着。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德兰应邀前来。接下来的那个夏季，两人进行了一场前所未有的艺术实验。他们抛弃了传统的透视与明暗法则，将颜料直接从锡管中挤到画布上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>马蒂斯</strong>住在老城一家简朴的旅馆里。他的画室，就是港口、街道和房间的窗户。他的代表作《科利尤尔的开窗》诞生于此——窗框内外，风景与室内融为一体，色彩如同爆炸般自由流淌。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "马蒂斯在给朋友的信中兴奋地描述：“我终于找到了‘我的光’。在巴黎，我们画光；在这里，我们就是‘在光里面’画画。色彩不再是自然的仆人，它自己就是主题，就是情感。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他笔下的科利尤尔，船只、教堂、城堡都被简化为色块与线条，世界变成了一个由纯粹色彩构成的和谐图案。当地渔民起初对这些“扭曲”了他们家园的画作感到困惑，但马蒂斯用他的温和与坚持赢得了尊重。他甚至会付钱请渔民把船停在特定的位置，只为获得完美的构图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而<strong>安德烈·德兰</strong>，则展现了野兽派狂野的另一面。他的色彩比马蒂斯更为厚重、灼热，笔触也更具表现力。他痴迷于刻画科利尤尔的港口与山丘，在他的画布上，土地是炽热的朱红与橙黄，海水是浓稠的翡翠绿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "德兰更深入地走进了当地生活。他常在港口写生，与修补渔网的老人交谈，去小酒馆喝本地的葡萄酒。他的画作《科利尤尔的山》中，那燃烧般的色彩，不仅是对自然的反应，更是对这片土地所蕴藏的、历经冲突的原始能量的释放。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1905年秋季</strong>，当他们在巴黎的“秋季沙龙”展出这些作品时，震惊了艺术界。一位评论家惊呼这些画家是“野兽”（Fauves），流派由此得名。科利尤尔，这个在地图上微不足道的小点，由此被标注为现代艺术一个重要流派的发源地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "两位大师在此结下的友谊与竞争，催生了艺术史上最富成果的合作之一。他们离开后，科利尤尔并未回归寂静。毕加索、杜菲等无数艺术家循着他们的足迹而来，寻找那道“野兽派之光”。小城的色彩，因他们而被看见，也被他们永久地改变——如今游客看到的那些明黄色、玫瑰粉的墙壁，据说部分灵感正是来源于画家们的建议，他们希望让现实更贴近他们画中的梦幻。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在科利尤尔，历史与传说如海雾般交织。除了骑士与国王的史诗，渔民的口中流传着更贴近海洋与生命的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最动人的传说，围绕海边那条通往<strong>圣文森教堂</strong>的小径，以及沿途散落的数座白色小礼拜堂。它们被称为“苦难之路”的站点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，很早以前，科利尤尔的渔民在一次最猛烈的风暴中出海，全部失踪。他们的妻子母亲日夜跪在海边岩石上祈祷，泪水汇入大海。她们的虔诚感动了守护神<strong>圣文森</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一夜，一位老渔妇梦见圣文森对她说：“用你们的双手，在每一块你们哭泣过的岩石上，建起一座小小的圣所。当第七座建成时，海会归还你们的亲人。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，女人们开始用捡来的石头和贝壳，混合着石灰，在险峻的海岸线上一点点修筑小礼拜堂。工程缓慢而艰辛，但希望支撑着她们。当第七座，也是最大的一座（即现在的圣文森教堂钟楼原址）即将完工时，奇迹发生了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在一个晴朗的清晨，海平面上升起帆影。那些失踪的渔船，竟一艘接一艘地平安归来。渔民们说自己被一股神秘的风和一道光指引，穿越了迷雾与暗礁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，这七座礼拜堂成了科利尤尔的守护符号。渔民出海前会来此祈祷平安，归航后会来此感恩。它们不像城堡那样雄伟，却承载着这个社区最深沉的情感与韧性——对不可测海洋的敬畏，以及对生命归来的最朴素信仰。传说赋予了建筑灵魂，让冰冷的石头有了温暖的脉搏。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的科利尤尔，依然保持着那份混杂的气质：沃邦城堡的厚重石墙，凝视着港湾里如马蒂斯画中般鲜艳的舟船；中世纪街巷的幽深，下一秒就通往一片令人目眩的、野兽派风格的光之广场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂科利尤尔，意味着看懂这种反差与融合。它是一座“边界之城”，不仅在政治地理上，更在文化与感知的边界上。这里，中世纪的军事严谨与现代艺术的色彩狂放并肩而立；天主教的苦难之路与地中海的异教式欢愉光影交织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旅行的意义，在于触摸这些历史的纹理。当你站在港口，你同时站在了圣殿骑士的瞭望台、沃邦的防御工事和马蒂斯的画架前。你所见的每一抹“科利尤尔蓝”，都沉淀着千年的海盐、战争的硝烟与艺术家的狂喜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市本身就是一件层次丰富的作品。它教会我们，历史从未真正过去，它只是换了一种形式活着——在石头的缝隙里，在色彩的反光中，在海风的低语间。来到科利尤尔，你不是在参观一个景点，而是在步入一幅仍在缓慢绘制的、名为“时光”的巨画。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-hautefort-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    欧
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">欧特福尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Hautefort</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ville-close-de-concarneau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔卡尔诺封闭之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ville Close de Concarneau</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bonifacio-citadel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博尼法乔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bonifacio</p>
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
