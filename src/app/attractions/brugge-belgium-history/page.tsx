import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布鲁日历史溯源｜中世纪水城的前世今生与法兰德斯传奇',
  description: '抛开滤镜，深入布鲁日的千年运河与卵石巷。解密“北方威尼斯”如何从羊毛贸易心脏走向沉睡，又在时光中优雅苏醒。遇见凡·艾克与梅姆林的画中世界。',
}

export default function BruggeBelgiumHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '布鲁日', href: '/destinations/europe' },
            { label: '布鲁日', href: '/attractions/brugge-belgium-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布鲁日・Bruges・比利时・布鲁日`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若欧洲有一处地方，能将中世纪的光阴完好地封存在琥珀之中，那必然是布鲁日。这里不是威尼斯，却因运河而灵动；这里不是巴黎，却因艺术而永恒。它的故事，是一部法兰德斯地区的史诗，交织着商人、公爵、画家与行会工匠的雄心与叹息。从<strong>9世纪</strong>的堡垒小镇，到<strong>14世纪</strong>欧洲最富庶的商贸之都，再到<strong>19世纪</strong>被遗忘的“沉睡美人”，布鲁日的历史轨迹如同一幅层次分明的油画，每一笔都藏着决定命运的秘密。抛开游玩攻略，走进布鲁日的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布鲁日`} />
                <InfoRow label="英文名称" value={`Bruges`} />
                <InfoRow label="正式名称" value={`Bruges`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`布鲁日`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布鲁日的起点，藏在一个与水有关的名字里。其弗拉芒语名 <strong>“Brugge”</strong>，意为“桥梁”。这个名字精准地揭示了它的诞生逻辑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大约在<strong>9世纪</strong>前后，法兰克国王“秃头查理”为抵御凶悍的维京人沿河劫掠，命令伯爵<strong>鲍德温一世</strong>在此地修建一座堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座最初的城堡，就建在一条名为“雷耶”的小河湾旁。河流意味着天然的防御与交通。堡垒周围逐渐聚集了渔民、手工艺人和商人，一个定居点悄然形成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正让这颗种子破土而出的，是北海的一次任性改道。在<strong>11世纪</strong>左右，一场巨大的风暴潮重塑了海岸线，一条名为“辛讷”的天然水道被冲刷得又深又宽，直接连通了内陆的布鲁日与浩瀚的北海。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一夜之间，布鲁日从河边小镇变成了深水良港。这道“天赐之门”，为它敲开了通往世界财富的大门。城市的雏形，就在桥梁、堡垒与港口的三角关系中，奠定了坚固的基石。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布鲁日的历史并非线性繁荣，它的辉煌与落寞，都与两次至关重要的“潮水”息息相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一次是经济的潮水。借助<strong>辛讷水道</strong>，布鲁日迅速成为北海-波罗的海贸易网与南方香槟集市之间的枢纽。这里堆积着英格兰的羊毛、北欧的毛皮、俄罗斯的蜂蜡，以及东方的香料。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "财富催生了欧洲最早、最强大的市民阶层之一。代表各大商帮的<strong>“外国商人会馆”</strong>沿运河林立，砖砌的阶梯山墙彰显着实力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行会势力空前强大，他们甚至在与法国王权的斗争中，于<strong>1302</strong>年的“金马刺战役”中取得了惊人的胜利。这场由工匠和市民组成的军队击败法国骑士的战役，被视为弗拉芒人民族意识的觉醒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，第二次是无情的自然潮水。从<strong>15世纪末</strong>开始，<strong>辛讷水道</strong>开始惊人地淤塞。无论商人如何疏浚，大海终究收回了它的礼物。大型商船无法再驶入港口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与此同时，安特卫普凭借更优越的斯海尔德河条件强势崛起。财富、商人与活力，像退潮般从布鲁日流走。这座曾经车水马龙的国际大都会，陷入了长达<strong>四个世纪</strong>的漫长沉睡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这场沉睡，意外地保护了它。因为贫困，人们无力拆旧建新。那些华丽的哥特式市政厅、静谧的修道院、蜿蜒的运河与砖桥，就这样被时光原封不动地保存了下来，直到<strong>19世纪</strong>的浪漫主义者重新“发现”了这颗蒙尘的明珠。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布鲁日的寂静，孕育了惊人的艺术回响。这里不仅是商人的宝库，更是两位画坛巨匠的最终归宿与灵感源泉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>扬·凡·艾克</strong>，这位被誉为“油画之父”的尼德兰大师，虽非布鲁日本地人，却将人生最后的辉煌与长眠留在了这里。作为<strong>勃艮第公爵“好人菲利普”</strong>的宫廷画家与密使，他享有极高的声望与自由。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他革新了油画技法，让画面拥有宝石般的光泽与难以置信的细节。他的杰作《<strong>根特祭坛画</strong>》虽在根特，但他定居布鲁日后创作的《<strong>阿尔诺芬尼夫妇像</strong>》更是一部“视觉的契约”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "画中意大利商人乔凡尼·阿尔诺芬尼与妻子在布鲁日的家中携手，镜中反射出整个房间与两位见证人，其中一个可能就是凡·艾克本人。这幅画超越了肖像，成为一份婚姻的法律公证、一份财富的宣誓，更是布鲁日国际商贸地位的微观缩影。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“于此，扬·凡·艾克曾在此。1434年。” —— 画中镜子上方墙壁的拉丁文题记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他于<strong>1441年</strong>在布鲁日去世，安葬在市中心的圣多纳廷教堂。他的画室传统，直接滋养了下一代的布鲁日画派。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而<strong>汉斯·梅姆林</strong>，则是“布鲁日画派”宁静与虔诚之美的化身。这位可能来自德意志的画家，在布鲁日找到了艺术的终极表达。他的作品没有凡·艾克的宏大与智性，却充满内省的温柔与和谐的秩序。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他为布鲁日的医院、教堂和富商创作了大量祭坛画与肖像。他的《<strong>圣乌尔苏拉圣物匣</strong>》如同一本微缩的彩绘手抄本，将传奇故事描绘在狭小的空间里，精美绝伦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，他的画作精准捕捉了<strong>15世纪末</strong>布鲁日的社会风貌与精神世界——在商业经济开始下滑时，市民将更多财富与情感投向宗教与来世，追求一种静谧而确切的救赎感。梅姆林的画，就是这种社会心态最完美的视觉载体。他于<strong>1494年</strong>去世，长眠于布鲁日，他的宅邸至今仍可寻访。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在布鲁日，最高的建筑不是教堂的主塔，而是<strong>市集广场上的钟楼</strong>。这座<strong>83米</strong>高的中世纪杰作，守护着城市的金库与档案，也承载着一个悲怆的本地传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事发生在钟楼即将竣工的<strong>13世纪</strong>。一位名叫<strong>扬·范·德·米恩</strong>的年轻建筑师，倾尽才华与心血完成了这项不朽工程。当人们为塔楼的壮丽欢呼时，市政官员却出于吝啬或嫉妒，拒绝支付他全部的酬金。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "悲愤交加的建筑师请求至少让他登上塔顶，最后一次眺望自己的作品。获准后，他登上塔楼，从最高的窗口纵身跃下，将自己生命最后的弧线，永远印刻在了布鲁日的天空。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，他坠落的地点，生长出了一簇簇小小的<strong>金叶女贞</strong>。更有人说，在特定的风向里，钟楼的风向标——那只金色的<strong>圣乔治屠龙像</strong>——会发出呜咽般的声响，那是建筑师不朽的灵魂仍在守护着他的 masterpiece。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“他飞了起来，但不是以他梦想的方式。石头留住了他的身体，但钟声带走了他的故事，讲给每一个倾听的旅人。” —— 布鲁日民间叙事诗片段。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们漫步在布鲁日，脚下每一块被岁月磨光的卵石，运河边每一座山墙的倒影，都不是单纯的风景。它们是历史的神经元，触动着一段关于全球贸易起源、市民力量崛起、艺术登峰造极，以及命运无常的完整记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市本身，就是一座巨大的<strong>露天中世纪博物馆</strong>，但比任何博物馆都更具生命感。它教会我们的，并非仅仅是“过去很辉煌”，而是一种深刻的启示：历史的价值，有时恰恰在于它的“中断”与“沉睡”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那四百年的寂静，不是空白，而是一种保护性的封印。让布鲁日得以避开工业革命的剧烈改造，以近乎凝固的形态，将法兰德斯黄金时代的荣光与忧伤，直接呈递给现代世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂布鲁日，便是读懂了一种欧洲文明形成的毛细血管网络，读懂艺术如何在最世俗的财富中开出最精神性的花朵。它提醒我们，真正的遗产，不是重建的幻影，而是时光层累的、有呼吸的实存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是教科书的一章，而是空气的味道、流水的声响、和砖石的温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/orval-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥尔瓦勒修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Orval Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/namur-citadel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Namur Citadel</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alden-biesen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔登·比森城堡（条顿骑士团的宏大封地）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alden Biesen Castle</p>
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
