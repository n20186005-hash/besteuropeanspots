import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科尔托纳历史溯源｜托斯卡纳隐秘山城的伊特鲁里亚密码与圣人传奇',
  description: '探秘意大利托斯卡纳的“第一座山城”。从伊特鲁里亚古城墙到文艺复兴圣迹，揭开科尔托纳三千年的尘封往事、圣玛格丽特的传奇人生与美第奇家族的隐秘统治。',
}

export default function CortonaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '科尔托纳', href: '/attractions/cortona-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科尔托纳・Cortona・意大利・托斯卡纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在托斯卡纳明信片般的田园风光之上，有一座被时间遗忘的“空中之城”——科尔托纳。它不仅是《托斯卡纳艳阳下》的浪漫背景，更是意大利半岛文明的古老原点之一，一段从伊特鲁里亚文明直接通往文艺复兴的活态史书。与那些游人如织的托斯卡纳名城不同，这里的每一块火山岩，都镌刻着被主流历史叙事忽略的密码。抛开游玩攻略，走进科尔托纳的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科尔托纳`} />
                <InfoRow label="英文名称" value={`Cortona`} />
                <InfoRow label="正式名称" value={`Cortona`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`托斯卡纳`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔托纳的诞生，远比罗马更为古老。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "根据罗马史学家<strong>李维</strong>的记载，早在特洛伊战争之前，这里就已存在聚落。现代考古证实，<strong>伊特鲁里亚人</strong>在公元前8至7世纪，便在此建立了强盛的城邦。它的名字 <strong>“Cortona”</strong>，很可能源自古伊特鲁里亚语，意为“堡垒”或“有围墙的地方”，精准地描述了其雄踞海拔600米山脊、易守难攻的地形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市并非自然生长，而是被精心“选址”的杰作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "伊特鲁里亚人从亚平宁山脉与<strong>特拉西梅诺湖</strong>之间的战略要道上，选中了这座陡峭的山丘。它控制着南北商路，俯瞰着广阔的瓦尔迪基亚纳河谷。最初的科尔托纳，是一个强大的<strong>“十二城联盟”</strong>成员，是伊特鲁里亚文明向北方扩张的前哨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的建立，不是为了田园牧歌，而是为了权力与控制。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的传说认为，科尔托纳由<strong>诺亚的曾孙——库瑞特</strong>建立。这个将城市起源与《圣经》人物相连的神话，在中世纪被教会大力宣扬，旨在赋予这座异教古城神圣的“正统”血统。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当罗马在台伯河边还是村庄时，科尔托纳的贵族们，已经在山巅享用着来自希腊的陶器与东方的珍宝。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>伊特鲁里亚的“巨石阵”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今环绕科尔托纳老城的，是令人震撼的<strong>伊特鲁里亚城墙遗址</strong>。这些由巨型石块干砌而成的城墙，历经两千五百年风雨，部分段落依然坚固如初。它们并非一气呵成，而是从公元前6世纪开始，历经数代人修筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的<strong>“慈悲门”</strong> 与 <strong>“圣玛格丽特门”</strong> 下方，仍可见原始的伊特鲁里亚拱门基石。这些石头沉默无言，却见证了一个文明的鼎盛与消亡。公元前310年，科尔托纳在连绵战事后，最终与罗马结盟。但这并非终结，伊特鲁里亚的贵族文化、宗教仪式和工程技术，深深渗入了罗马的肌理。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>中世纪的“自由公社”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入中世纪，科尔托纳成为独立的<strong>“自由公社”</strong>。这段时期（11-14世纪）是城市建设的第二个高峰。今天老城迷宫般的街巷格局、高耸的塔楼（如<strong>卡萨里塔</strong>）和宏伟的市政厅（<strong>普廖里宫</strong>），都诞生于那个动荡而富有创造力的年代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "各大家族在狭窄的街道间竞相修建高塔，以彰显武力与财富。<strong>主座教堂</strong>也在此时于一座古老的异教神庙地基上拔地而起，象征着神权对古城空间的重新定义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>美第奇的“温柔枷锁”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1409年，一场关键的围城之后，科尔托纳将自己的命运交给了佛罗伦萨的豪门——<strong>美第奇家族</strong>。在美第奇统治下，科尔托纳失去了政治独立，却迎来了文化与艺术的“静好岁月”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>亚历山德罗</strong>与<strong>科西莫一世·德·美第奇</strong>大公，并未将这里遗忘。他们加固了城防，修建了坚实的<strong>美第奇堡垒</strong>（现为考古公园），并鼓励艺术发展。这一时期的科尔托纳，褪去了军事前哨的凌厉，逐渐沉淀为一座宁静的省城、一个文艺复兴艺术悄然绽放的舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "强权带来的并非只有压迫，有时也是一种得以偏安一隅、保存自身的庇护。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣玛格丽特：从“迷失羔羊”到城市守护神</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在科尔托纳，一位女性的光芒盖过了所有王公贵族。她便是<strong>圣玛格丽特（1247-1297）</strong>。她的故事，不是一出天生的圣徒剧，而是一段充满人性挣扎的深刻救赎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她并非科尔托纳本地人，却成为了这里永恒的灵魂象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛格丽特出生于拉齐奥的一个农家，因美貌被一位贵族青年诱拐，成为其情妇并育有一子。数年后，情人在一次冲突中被谋杀。这场悲剧成为她人生的转折点。悲痛欲绝、备受谴责的玛格丽特，带着儿子辗转流浪，最终在<strong>1247年</strong>来到了科尔托纳。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据其《传记》记载，初到科尔托纳时，她身无分文，只能与儿子乞讨为生。一次，她在圣方济各教堂祈祷时，仿佛听到一个声音：“玛格丽特，起来，跟随我。”这决定性地将她引向了<strong>方济各第三会</strong>，开始了彻底的苦修与奉献。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的传奇，在于其极致的转变与扎根于社区的慈善。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛格丽特将贵族情人留下的财富全部变卖，分给穷人。她创立了致力于照顾病患与穷人的 <strong>“慈悲姊妹会”</strong>，这被认为是现代医院护理制度的早期雏形之一。她最重要的遗产，是力促并见证了<strong>仁慈医院</strong>的建立。这座医院持续运营了数个世纪，直至上世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她在科尔托纳城外山腰的隐修小屋里度过余生，进行严厉的苦修，但却始终与城市的贫苦大众保持着最紧密的联系。人们称她为 <strong>“玛格丽塔妈妈”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1297年</strong>玛格丽特逝世后，关于她奇迹的传说迅速流传。<strong>1515年</strong>，她被教宗利奥十世封圣。今天，她的<strong>木乃伊遗骸</strong>安奉在以其命名的圣玛格丽特巴西利卡教堂主祭坛上方，面容宁静，仿佛仍在守护着她选择的这座城市。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的故事之所以动人，恰恰在于那不完美的起点。科尔托纳接纳了她的过去，而她则用整个后半生回报了这份接纳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>卢卡·西诺雷利：文艺复兴的“暴力美学”大师</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与科尔托纳紧密相连的名人，是文艺复兴画家<strong>卢卡·西诺雷利（约1445-1523）</strong>。他是<strong>皮耶罗·德拉·弗朗切斯卡</strong>的学生，以其对人体解剖学精准、充满动态与力量感的描绘而闻名，尤其擅长表现肌肉暴起的男性形体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "西诺雷利虽在佛罗伦萨、罗马、奥尔维耶托等地创作，但他始终是科尔托纳的公民，并在此担任市政官员，积极参与公共事务。他将文艺复兴的前沿艺术思潮带回了这座山城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的代表作——科尔托纳<strong>主座教堂</strong>内的《<strong>基督受洗</strong>》祭坛画，以及保存在<strong>迪奥塞萨诺博物馆</strong>的《<strong>受胎告知</strong>》，都是理解其艺术风格的关键。他笔下强悍有力的人物，影响了后来包括<strong>米开朗基罗</strong>在内的多位大师。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "艺术史学家瓦萨里在《艺苑名人传》中记述了一个悲伤的故事：西诺雷利心爱的儿子不幸早夭，当仆人慌张地告知他时，这位父亲强忍悲痛，平静地走进画室，为儿子的遗体描绘了一幅精准的肖像，以作纪念。这个故事揭示了他艺术追求背后，理性与情感的巨大张力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他晚年回归科尔托纳，在此终老。他的故居虽已不存，但他的艺术精神，尤其是那种源自伊特鲁里亚文明的、对生命力量与死亡宿命的深刻表现，已融入这座古城的血脉。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在科尔托纳的巷陌间，流传着一个比官方历史更为古老和神秘的故事——<strong>“科尔托纳之狮”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，在伊特鲁里亚时代，一只巨大而神秘的雄狮曾在此地出没。它并非残暴的野兽，而是城市的守护灵。每当外敌入侵或巨大灾难降临前夕，人们就会听到从山岩深处传来的低沉狮吼。这吼声是一种警告，也是一次集结的号令，让科尔托纳人得以提前戒备，度过危机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着基督教时代的到来，这个异教传说被巧妙地“洗礼”和转化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "狮子被附会为《圣经》中的象征——<strong>圣马尔谷（圣马可）</strong>的坐骑。于是，这只传说中的守护狮，变成了基督教圣徒庇佑的隐喻。直到今天，你依然能在科尔托纳的城徽、古老建筑的浮雕上，找到狮子的形象。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人有时会说，在万籁俱寂的深冬夜晚，当特拉西梅诺湖面升起浓雾时，若屏息静听，或许还能听见那一声穿越千年的、低沉而悠远的叹息——不是吼叫，而是叹息。仿佛那只守护了城市无数个世纪的巨兽，终于疲惫，化作了山体本身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说解释了科尔托纳人性格中那种坚韧、独立且略带孤傲的特质。他们相信自己被一种古老而强大的力量所庇护，即便在历史洪流中屡经浮沉，内核始终未曾被征服。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在科尔托纳，你踩踏的不仅是石板路，更是层层叠叠的时间地质层：伊特鲁里亚的基石、罗马的道路、中世纪的塔楼、文艺复兴的宫殿与圣徒的足迹。它没有佛罗伦萨的炫目、锡耶纳的壮丽，却有一种<strong>浓缩的、未经过度修饰的完整</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂科尔托纳，便是读懂一种文明的韧性。它从辉煌的起点“跌落”为安静的山城，却在每一次历史转折中，以独特的方式吸收、转化并保存了精华。伊特鲁里亚的技艺融入了罗马的工程；中世纪的自由于美第奇时代转化为艺术庇护；一个“罪人”在此成为万人敬仰的圣徒与慈善先驱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市本身就是一座<strong>垂直的露天博物馆</strong>，从山脚的伊特鲁里亚墓葬，到山腰的圣玛格丽特教堂，再到山顶的市政广场与堡垒，每一步都是向上的历史穿越。它邀请你的，不是匆忙的打卡，而是沉浸式的“阅读”与“解码”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史的回响不是博物馆里玻璃后的解说词，而是掠过城墙缝隙的山风，是夕阳将古城染成蜜糖色的那一刻，仿佛三千年的时光同时静止、同时发声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/paestum-temples" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕埃斯图姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Paestum</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gerace-calabria-byzantine-pearl" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    杰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">杰拉切</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gerace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tharros-sardinia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塔罗斯古城遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tharros</p>
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
