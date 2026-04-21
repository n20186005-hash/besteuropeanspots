import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨扎瓦河畔日贾尔历史溯源｜绿星传奇、圣徒传说与建筑奇观的前世今生',
  description: '探秘捷克“绿星”传说：一座因神迹而生的教堂，一位神秘建筑师，与一段在战火中重生的历史。走进波西米亚深处的信仰与象征迷宫。',
}

export default function ZelenHoraChurchHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '维索基纳州', href: '/destinations/europe' },
            { label: '萨扎瓦河畔日贾尔（绿山圣约翰朝圣教堂）', href: '/attractions/zelen--hora-church-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨扎瓦河畔日贾尔（绿山圣约翰朝圣教堂）・Žďár nad Sázavou (Pilgrimage Church of Saint John of Nepomuk at Zelená Hora)・捷克・维索基纳州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在捷克波西米亚与摩拉维亚交界的苍翠山林中，藏着一座被联合国列为世界遗产的“星形”圣地。它的存在，远非一句“巴洛克-哥特式建筑”所能概括。这里是信仰、政治、建筑天才与民间传说激烈碰撞的结晶，其轮廓本身就是一则庞大的神秘学隐喻。抛开游玩攻略，走进萨扎瓦河畔日贾尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨扎瓦河畔日贾尔（绿山圣约翰朝圣教堂）`} />
                <InfoRow label="英文名称" value={`Žďár nad Sázavou (Pilgrimage Church of Saint John of Nepomuk at Zelená Hora)`} />
                <InfoRow label="正式名称" value={`Žďár nad Sázavou (Pilgrimage Church of Saint John of Nepomuk at Zelená Hora)`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`维索基纳州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨扎瓦河畔日贾尔的命运，始于 <strong>13世纪</strong> 的荒野与信仰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1197年</strong>，一支西多会修士的队伍来到了萨扎瓦河上游的密林深处。他们受波西米亚贵族邀请，在此建立了修道院。修道院的名字“<strong>日贾尔</strong>”（Žďár）源自古老的斯拉夫语“žďárit”，意为“焚烧”或“清理林地”——形象地记录了修士们刀耕火种，在原始森林中开辟出一方精神净土的艰辛过程。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座修道院成为了区域开发的核心。它不仅是祈祷之所，更是先进农业、渔业和文化的中心。修士们经营着广阔的池塘系统与农田，吸引了第一批世俗居民在周边定居，一个聚落悄然萌芽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "数个世纪里，修道院随着波西米亚王国的命运起伏。但真正让这片土地名垂青史的契机，要等到 <strong>18世纪初</strong>，一个关于圣徒的神秘传说，与一位建筑师的惊世才华在此相遇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那时，此地仍只是修道院统领下的宁静属地，直到一颗“绿星”从天而降，将它永远刻在了人类艺术史的地图上。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的核心印记，全部凝聚于那座俯瞰山谷的奇异教堂。它的诞生与发展，就是一部微缩的波西米亚史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是 <strong>1719年</strong> 的“神圣发现”。当时，布拉格圣维特大主教座堂在检查 <strong>圣约翰·内波穆克</strong> 的遗骸时，宣称在其头骨中发现“<strong>舌头未曾腐烂</strong>”。这被视为他因坚守告解秘密而殉道的神迹确证。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“当银质圣物匣被打开时，在场所有人见证了奇迹：那经历了三百多年岁月的舌头，竟依然鲜活如生。”——摘自当时修道院的记录文书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一事件引发了全国对这位捷克本土圣徒的崇拜热潮。时任<strong>绿山修道院</strong>的院长<strong>瓦茨拉夫·韦廖米尔</strong> 看准时机，决定在传说中圣约翰童年曾到访过的山丘上，建造一座宏伟的朝圣教堂，以巩固修道院的声望与影响力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道深刻印记，便是建筑奇迹本身。院长邀请了当时已名震波西米亚的建筑鬼才——<strong>扬·布拉热伊·圣蒂尼-艾希尔</strong> 主持设计。<strong>1721年</strong>，工程启动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣蒂尼将他对数字象征主义与神秘几何的痴迷发挥到极致。教堂平面是一个完美的<strong>五芒星形</strong>。在基督教象征中，五代表<strong>圣约翰·内波穆克</strong>（其光环上有五颗星），也象征耶稣的五处圣伤。建筑外围的星形回廊与内部祭坛的复杂错位，营造出超凡脱俗的流动空间感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，第三道印记是<strong>1784年</strong>的劫难。皇帝<strong>约瑟夫二世</strong>推行宗教改革，下令关闭了这座修道院。教堂遭废弃，建筑在风吹雨打中迅速衰败，几近沦为废墟。这场“启蒙”的寒风，几乎吹熄了这颗“绿星”的光芒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的重生，要等到20世纪。经过漫长而精细的修复，<strong>1994年</strong>，这座象征着信仰、艺术与历史韧性的建筑，终于以“绿山圣约翰朝圣教堂”之名，荣登联合国世界遗产名录。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的灵魂，由两位关键人物塑造：一位是它为之献祭的圣徒，另一位是赋予它形体的建筑师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>圣约翰·内波穆克：从王室冲突到星辰象征</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>约1345年</strong>，他出生于内波穆克镇，原名<strong>扬</strong>。他学习神学，成为一位博学的神父，最终晋升为布拉格总主教区的<strong>总司铎</strong>，深得<strong>瓦茨拉夫四世</strong>国王的信任。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他的命运在<strong>1393年</strong>急转直下。当时，国王与总主教在任命一座修道院院长的问题上激烈冲突。国王怀疑王后向约翰做了告解并透露了秘密，企图逼迫约翰说出内容。约翰坚决捍卫“告解神圣不可侵犯”的教律，因此触怒国王。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的良心只属于上帝，国王无权窥探。”——民间流传的约翰遗言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "盛怒的瓦茨拉夫四世下令将约翰刑讯后，从布拉格的查理大桥上抛入伏尔塔瓦河溺毙。他的殉道使他迅速被民间奉为圣人，成为<strong>抵御诽谤、守护秘密</strong>的庇护神，更是<strong>桥梁与水手</strong>的守护者。其标志便是头顶带有五颗星的光环。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>扬·布拉热伊·圣蒂尼-艾希尔：跛足的建筑诗人</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说圣约翰是教堂的精神内核，那么圣蒂尼就是那位将精神翻译成石头的“密码学家”。<strong>1677年</strong>，他出生于布拉格一个建筑世家，但童年一场重病使他终身<strong>跛足</strong>。身体的局限反而让他更专注于精神与思想的漫游。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非传统的意大利巴洛克学徒，其风格独树一帜，被称为“<strong>巴洛克-哥特式</strong>”。他迷恋哥特建筑的垂直精神性，却用巴洛克的曲线与光影来重新诠释。绿山教堂是他晚期最成熟、最大胆的作品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，他将数字象征玩转到极致。五芒星结构、三个出入口、十个小礼拜堂环绕……一切数字都与圣约翰的故事和基督教义紧密相连。他不仅仅在建一座教堂，更是在构筑一个<strong>三维的祈祷文</strong>，一个能与上天对话的几何仪器。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更为传奇的是他名字中的“艾希尔”。<strong>1705年</strong>，他因卓越贡献被贵族<strong>艾希尔家族</strong>收养，得以在名字后加上“艾希尔”。但终其一生，这位身体残缺的大师都保持着近乎修士般的简朴与虔诚。绿山教堂竣工后不久，他便于<strong>1723年</strong>去世。这座矗立于绿丘之上的星辰，成为他献给世界最后的、也是最璀璨的谜题。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这座教堂与圣约翰，当地流传着比官方记载更富诗意的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最动人的传说并非关于他殉道，而是关于他的<strong>童年</strong>。相传，年幼的约翰曾随母亲来到萨扎瓦河畔日贾尔地区的这座山丘（即现在的绿山）附近。他在途中感到口渴，母亲便祈祷，结果一处清泉立刻从岩石中涌出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小约翰饮下泉水后，竟在朦胧中看到一位被星辰环绕的圣人身影。母亲告诉他，这预示着他未来将因坚守神圣誓言而蒙受荣耀。因此，这座山丘很久以前就被视为一块福地，圣蒂尼在设计教堂时，特意将这座传说中的<strong>泉眼</strong>纳入建筑下方的地下室，使其成为朝圣者祈求健康的神圣站点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与教堂的<strong>五角星形状</strong>直接相关。人们说，圣约翰被从桥上抛下时，伏尔塔瓦河面上瞬间出现了<strong>五颗璀璨的星辰</strong>，照亮了他的殉道之路。因此，当修道院院长决定建造教堂时，天空中仿佛有一颗“绿色的星”指引着地点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而建筑师圣蒂尼在梦中受到这五角星光的启示，才画出了那份惊世骇俗的图纸。在当地人心中，这座建筑不是人造的，而是<strong>自天而降的星辰印记</strong>，被圣蒂尼这位通灵者，捕捉并固定在了大地之上。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“星星落在绿山上，变成了石头做的祈祷。”——当地古老的谚语如是说。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当旅行者跋涉至这座远离主流旅游线的宁静山丘，所见的不仅仅是一座造型奇特的教堂。它是一座<strong>石质的历史档案馆</strong>，封存着哈布斯堡王朝的宗教狂热、约瑟夫二世改革的冷酷理性、以及捷克民族在苦难中对自身圣徒文化的坚韧持守。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它更是一件<strong>凝固的哲学论文</strong>。圣蒂尼用砖石探讨着有限与无限、秩序与神秘、人体缺陷与精神完美的永恒命题。在这里，数学与神学握手，苦难化为璀璨星辰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂萨扎瓦河畔日贾尔，便是读懂波西米亚灵魂中那抹深沉的、兼具理性与神秘的色彩。它小众，因为它不提供浅薄的愉悦；它深邃，因为它要求访客带着思索前来，方能解锁那星辰轮廓下的百年回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/jicin-baroque-square-wallenstein" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊钦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jičín</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sedlec-ossuary-kutna-hora-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库特纳霍拉（人骨教堂及老城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kutná Hora (Sedlec Ossuary & Old Town)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brno-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布尔诺老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brno Old Town</p>
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
