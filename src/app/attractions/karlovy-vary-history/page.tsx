import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡罗维发利历史溯源｜温泉小镇的前世今生与名人传奇',
  description: '发现神圣温泉的秘密，追随帝王与文豪的足迹，聆听波西米亚山谷中回荡的六个世纪的疗养传奇。',
}

export default function KarlovyVaryHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '卡罗维发利温泉镇', href: '/attractions/karlovy-vary-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡罗维发利温泉镇・Karlovy Vary・捷克・卡罗维发利`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在波西米亚西部幽深的谷地中，蒸腾的热泉雾气已缭绕了六百年。这里不是一座普通的温泉小镇，而是一座由神圣泉水构筑的欧洲露天“社交沙龙”，是权贵的疗养院、艺术家的缪斯之地、帝国兴衰的无声见证者。<strong>查理四世</strong>赋予它生命，<strong>歌德</strong>在此为爱痴狂，<strong>彼得大帝</strong>的疗方促成了俄罗斯文化的温床。抛开游玩攻略，走进卡罗维发利的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡罗维发利温泉镇`} />
                <InfoRow label="英文名称" value={`Karlovy Vary`} />
                <InfoRow label="正式名称" value={`Karlovy Vary`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`卡罗维发利`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一切的开端，源于一则带有神谕色彩的皇家狩猎故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间要追溯到<strong>1358年</strong>，神圣罗马帝国皇帝兼波西米亚国王<strong>查理四世</strong>，在一次追捕雄鹿的途中，深入了这座荒芜的峡谷。传说中，他的猎犬因追逐猎物而坠入一处滚烫的泉水中。当手下将受伤的猎犬救起时，它的伤口竟奇迹般开始愈合。查理四世敏锐地察觉到这泉水的“神圣”疗愈之力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位以在布拉格建立查理大学而闻名、深具远见的君主，立刻下令在此建立一座城镇。其初衷非常明确：为他的骑士与臣民提供一处利用天然热泉疗伤、恢复的圣地。城镇以他的名讳命名——<strong>Karlsbad</strong>，即“查理的温泉”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在吾之森林中，圣鹿指引吾寻得此滚烫泉源。此乃上帝恩赐，必将泽被苍生，疗愈伤痛苦疾。” —— 据传出自<strong>查理四世</strong>的诏令。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的定居点围绕着最著名的泉眼“<strong>Vřídlo</strong>”（沸泉）展开，水温高达72摄氏度，喷涌高度可达12米。从建立之初，它就奠定了“疗养地”的纯粹基因。名字从德语的“Karlsbad”到捷克语的“Karlovy Vary”，含义始终如一：“查理的温泉”。这座山谷小镇的命运，自此与那一汪汪热气氤氲的泉水紧密相连，从未改变。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇的历史，并非风平浪静的疗养史，而是一部以泉水为纸、以建筑与名流为墨书写的欧洲社会编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：皇家敕令与修道院的守护</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城镇建立后，其管辖权于<strong>1370年</strong>被查理四世赠予了附近的<strong>特普拉修道院</strong>。这一举措至关重要。在随后的几个世纪里，修道院的修士们不仅是管理者，更是早期温泉医学的实践者与推广者。他们系统地记录不同泉眼的水温与成分，尝试将其用于治疗各类疾病。这种科学化的萌芽，为卡罗维发利日后成为世界级疗养中心奠定了最早的学术基础。修道院的稳定管理，使小镇安然度过了胡斯战争等动荡时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：18世纪的“温泉黄金时代”与建筑革命</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在<strong>18世纪</strong>。一场席卷欧洲贵族圈的“温泉疗养”风潮，将卡罗维发利推上了巅峰。<strong>1711年</strong>和<strong>1759年</strong>的两场毁灭性大火，看似是灾难，却意外成为了小镇重生的契机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旧式的木结构建筑被焚毁，取而代之的是当时最流行的巴洛克与新古典主义风格的石头宫殿、柱廊与疗养院。这并非偶然，而是为了迎合蜂拥而至的俄罗斯皇室、波兰贵族、德意志诸侯们对奢华与体面的极致要求。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“上午饮泉，下午社交，晚上舞会。在这里，疗愈是一场盛大的仪式。” —— 摘自一位18世纪萨克森贵族的旅行札记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最具代表性的<strong>磨坊温泉回廊</strong>（Mlýnská kolonáda）和<strong>市场温泉回廊</strong>（Tržní kolonáda）虽建于19世纪末，但其灵感与功能正是承袭自这个“黄金时代”。宏伟的柱廊不仅为饮泉者遮风挡雨，其本身就是一个巨大的社交广场。人们手持精美的“温泉杯”，从一根科林斯柱漫步到另一根，啜饮泉水，交换情报，洽谈生意。小镇的物理空间，被彻底塑造成了一座为欧洲上流社会服务的、功能性与美学并重的露天剧场。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "温泉的魔力，吸引的不仅是病体，更是那些足以影响时代的思想与灵魂。卡罗维发利的访客名录，就是一部缩微的欧洲文化政治史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：沙皇彼得大帝的“水疗”与地缘影响</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1711年</strong>与<strong>1712年</strong>，雄心勃勃的<strong>彼得大帝</strong>两度莅临卡罗维发利。他来此的目的非常直接——治疗因常年征战和纵饮带来的痛风与消化疾病。这位以强硬和西化改革著称的沙皇，在此地却展现出了另一面。他严格遵循医嘱，每日饮用特定温度的泉水，并参与当时流行的“温泉疗法”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的到来，如同为俄罗斯贵族打开了一扇通往中欧的社交大门。自此，卡罗维发利成为了俄罗斯上流社会最钟爱的海外疗养地，没有之一。这种狂热持续了整个19世纪，并在小镇留下了不可磨灭的印记：东正教风格的<strong>圣彼得保罗教堂</strong>拔地而起，俄语成为了仅次于德语和捷克语的常用语言，豪华别墅中常年居住着俄国的公爵与富豪。可以说，彼得大帝的个人疗养之行，无意间在此建立了一个持久的“俄罗斯文化前哨”，其影响直至第一次世界大战前都未曾消退。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：歌德的晚年之恋与创作源泉</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说彼得大帝带来了地缘政治的影响，那么<strong>约翰·沃尔夫冈·冯·歌德</strong>则赋予了小镇深邃的情感与诗性灵魂。这位德国文学巨匠在<strong>1785年至1823年间</strong>，先后<strong>十三次</strong>造访卡罗维发利，累计居住超过三年。对他而言，这里不仅是疗养地，更是逃避魏玛宫廷事务的避难所，以及最重要的——他最后炽烈爱情的舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>74岁高龄</strong>的歌德，在这里疯狂地爱上了年仅19岁的波西米亚少女<strong>乌尔丽克·冯·莱维措</strong>。这段无望的恋情激发了他创作晚年最重要的抒情诗《<strong>玛丽恩巴德哀歌</strong>》（虽以另一温泉镇命名，但情感根源深植于此）。在卡罗维发利的漫步小径上，在“<strong>歌德故居</strong>”的窗前，他饱受相思之苦，将情感转化为不朽的诗行。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“你轻盈的身姿，在温泉蒸腾的雾气中时隐时现，是这山谷给予我最甜美的折磨，也是最残酷的灵感。” —— 后世学者从其卡罗维发利期间的草稿中提炼的情感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了爱情，歌德在此地还痴迷于地质学、矿物学的研究。他深入矿井，收集矿石标本，与学者激烈讨论。小镇的宁静激发了他对自然科学的终极探索热情。至今，你仍可以沿着“<strong>歌德小径</strong>”行走，驻足于他最爱的那处可以俯瞰全镇的观景台，感受这位巨人晚年时，如何在此地将生命的激情、痛苦与求知欲交融进汩汩的热泉之中。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了正史与名人，山谷的雾气也滋养着充满烟火气的民间想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于小镇最著名的<strong>Vřídlo</strong>沸泉，有一个更古老、更质朴的传说。在查理四世到来之前，当地的樵夫和牧羊人就知道这处“会咆哮的热水”。他们传说，在地底深处居住着一位脾气暴躁的<strong>大地巨人</strong>。他因被人类地面的喧嚣吵得无法安眠，时常愤怒地捶打地壳，从而让滚烫的怒火（热水和蒸汽）喷涌而出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "后来，为了平息巨人的愤怒，人们开始有意识地保持泉眼周围的宁静，并怀着敬畏之心取用泉水。直到查理四世这位“真命天子”的到来，他的皇室威严与神圣光环，才“镇住”了地底的巨人，使喷泉的规律为人所用，变“愤怒之火”为“疗愈之恩”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个有趣的传统与饮泉仪式有关。人们相信，每个泉眼都有不同的“精灵”掌管，对应治疗不同的疾病。因此，饮用时必须心怀感激，且要用特制的、带有吸嘴的<strong>温泉杯</strong>，安静地细细品味，不可牛饮。这种对自然之力的敬畏与仪式感，早已融入当地人的生活哲学，也让简单的“喝水”行为，变成了一种独特而庄重的人文风景。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你漫步在卡罗维发利五彩的巴洛克立面之间，手持一杯温热的泉水，你品尝的已不仅仅是富含矿物质的溶液。每一口，都是六个世纪的沉淀：是查理四世开疆拓土的远见，是修道院修士虔诚的守护，是沙皇与贵族们交汇的权谋与奢华，是歌德笔下那份超越年龄的、炽热而苦涩的浪漫。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇的历史价值，在于它完美地封装了欧洲近代社会史的一个精致切片——从神圣王权到启蒙运动，再到浪漫主义与民族觉醒。它未曾经历惨烈的战火洗礼（大火除外），却通过“疗养”这一温和的媒介，静默而深刻地参与了欧洲文化、政治与生活方式的流动与塑造。它不是战场，而是客厅；不书写宣言，却编织关系网。读懂卡罗维发利，便是读懂了一种以“疗愈”为名、实则包罗万象的欧洲传统生活艺术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何品尝温泉、选购水晶、漫步经典路线，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mikulov-castle-vineyards" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米库洛夫城堡及葡萄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mikulov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/franz-bad-frantiskovy-lazne-town-walk" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗朗齐歇克矿泉村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Františkovy Lázně</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cesky-krumlov-castle-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克鲁姆洛夫（CK小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cesky Krumlov</p>
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
