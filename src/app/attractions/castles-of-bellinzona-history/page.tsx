import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝林佐纳历史溯源｜瑞士国门要塞的前世今生与米兰公爵传奇',
  description: '穿越阿尔卑斯南北咽喉！探寻瑞士唯一世界遗产城堡群——贝林佐纳三城堡的千年硝烟。从罗马前哨到米兰堡垒，解码中世纪权力游戏的终极棋盘。',
}

export default function CastlesOfBellinzonaHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '贝林佐纳三城堡', href: '/attractions/castles-of-bellinzona-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝林佐纳三城堡・Castles of Bellinzona・瑞士・贝林佐纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在瑞士提契诺州阳光明媚的谷地中，贝林佐纳并非一座温柔的小城。它的心跳，与铁与血同频。这里不是风景明信片，而是一把插入阿尔卑斯山脊的古老钥匙，一座被三座庞大城堡镇守的“国门”。数百年来，谁掌握了贝林佐纳，谁就扼住了从意大利通往中欧的咽喉要道。今天，联合国教科文组织的认证让它闻名于世，但石墙深处的回响，远比勋章更为沉重。抛开游玩攻略，走进贝林佐纳的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝林佐纳三城堡`} />
                <InfoRow label="英文名称" value={`Castles of Bellinzona`} />
                <InfoRow label="正式名称" value={`Castles of Bellinzona`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`贝林佐纳`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝林佐纳的故事，始于一个无法回避的地理事实。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它蜷缩在提契诺河畔，身后是巍峨的圣哥达山口、圣贝纳迪诺山口和卢克马尼尔山口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这三条阿尔卑斯最重要的商路与兵道，在此汇聚成唯一出口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如此命脉，注定无法平静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其名“Bellinzona”的起源笼罩在迷雾中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一说源于凯尔特语，意为“设防之地”，直白得惊人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更广为接受的词源是拉丁语“<em>Bilitio</em>”或“<em>Bilinzone</em>”，与一位罗马将领或早期定居者有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论名字从何而来，它的命运从诞生之初就被写定——军事要塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元一世纪，罗马人便在此建立前哨，监控这条通往帝国北境的战略走廊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马帝国崩塌后，这片土地成为各方势力拉锯的战场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "哥特人、伦巴第人、法兰克人的足迹相继踏过。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但直到中世纪，它的角色才被推向极致。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1242年</strong>，米兰的执政官首次在文献中提到了此地的城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这标志着贝林佐纳正式登上了意大利城邦与北方帝国争夺欧洲控制权的中心舞台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不再仅仅是一个地点，而成了一件决定胜负的战略武器。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝林佐纳的历史，是城墙不断加高、城堡不断增建的历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其核心印记，镌刻在三座堡垒的兴衰与两次伟大的征服之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>米兰的巅峰：维斯孔蒂家族的堡垒化</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十四至十五世纪，米兰公国在强大的<strong>维斯孔蒂家族</strong>统治下达到鼎盛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们将贝林佐纳视为“北意大利之盾”，启动了史上最宏大的防御工事建设。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>大城堡（Castelgrande）</strong> 这座城市的基石被彻底重建和强化。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>蒙特贝罗城堡（Castello di Montebello）</strong> 被扩建并用以拱卫侧翼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最令人惊叹的是，他们在更高的山脊上新建了<strong>萨索·科尔巴洛城堡（Castello di Sasso Corbaro）</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位当时的编年史家写道：“公爵的命令是，让这三座堡垒如铁拳般紧握，任何来自北方的敌人都将在这拳缝中粉身碎骨。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这三座城堡并非独立存在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们与一道绵延数公里、连接山脊与河谷的宏伟城墙——“穆拉塔”融为一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "构成了一个立体、纵深、几乎不可能被正面攻破的防御系统。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝林佐纳，由此成为全欧洲最坚固的山地要塞之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1500年：瑞士邦联的雷霆一击</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，最坚固的堡垒，往往从内部被觊觎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十五世纪末，米兰政局动荡，法国国王路易十二对米兰公国虎视眈眈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瑞士邦联的诸州，早已对控制这条南方商路垂涎三尺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1500年</strong>，一个寒冷的四月，机会来了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一支约6000人的瑞士军队翻越阿尔卑斯山，兵临城下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们并未进行漫长的围城，而是以瑞士长矛兵闻名天下的强悍战力，发动了决定性的突袭。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据传说，一位熟悉地形的本地牧羊人，指引瑞士士兵穿过一条隐秘的小径，绕到了守军防御最薄弱的后方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战斗短暂而激烈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "米兰守军在震惊中溃败。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1503年</strong>，随着《阿尔卑斯山南麓条约》的签订，贝林佐纳及其所在的提契诺河谷，正式成为瑞士邦联的属地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一天，彻底改变了瑞士的版图与历史走向。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡顶上的米兰蛇徽被取下，换上了瑞士各州的旗帜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要塞的功能，也从对外防御，逐渐转变为对内统治的象征与州府所在地。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座以军事为主导的城市史中，两位人物的影子深深烙印在城堡的巨石之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位是它的塑造者，另一位是它的“囚徒”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>菲利波·马里亚·维斯孔蒂：最后的筑城者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>菲利波·马里亚·维斯孔蒂</strong>，米兰的最后一位维斯孔蒂公爵，一位性格复杂多疑的统治者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在位期间（1412-1447年），米兰公国外患不断，内部宫廷阴谋层出不穷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种强烈的不安全感，促使他将贝林佐纳的防御工事推向了艺术的巅峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非一个常驻前线的武夫，而是一位深居宫廷的战略家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过信件与工程师、指挥官的密集往来，他远程操控着贝林佐纳堡垒化的每一个细节。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>萨索·科尔巴洛城堡</strong>，这座位置最高、最孤立的城堡，堪称他个人意志的纪念碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它建于<strong>1479年</strong>，工期仅用惊人的七个月，完全遵循当时最先进的军事建筑理论。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其目的是提供一个绝对可靠、不受下方任何城堡失守影响的最后指挥所和火力点。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "历史学家分析，这座城堡的设计反映了菲利波·马里亚本人的心态：居高临下，掌控一切，不与任何人分享权力，也不完全信任任何人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他可能从未踏足过萨索·科尔巴洛城堡的塔楼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但他对绝对控制的渴望，化作了这座俯瞰全镇的冰冷石堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在他死后，米兰陷入混乱，而他耗尽心力加固的“国门”，却在数十年后易主。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这仿佛一个巨大的历史隐喻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>卢多维科·斯福尔扎：铁窗后的“摩尔人”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与贝林佐纳产生残酷联系的名人，是菲利波·马里亚的继任者之一——<strong>卢多维科·斯福尔扎</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位绰号“摩尔人”的米兰公爵，是文艺复兴时期著名的艺术赞助人，达·芬奇曾为他工作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，在政治与军事上，他最终一败涂地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在与法国国王路易十二的战争中，卢多维科众叛亲离，于<strong>1500年</strong>被俘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他人生最后的八年，是在法国境内的监狱中度过的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但鲜为人知的是，在被押往法国之前，他曾短暂地被关押在何处？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诸多证据指向了刚刚被瑞士人攻克的<strong>贝林佐纳大城堡</strong>的地牢。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位瑞士士兵在信中含糊地提到：“我们得到了一个‘大人物’，他被严密看管在塔楼之下。他的叹息和我们庆祝胜利的歌声一样多。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想象一下这幅画面：" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位曾经显赫一时、掌控米兰乃至意大利命运的公爵，成为了他自己家族曾经苦心经营的、最坚固要塞的囚徒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝林佐纳的城墙，曾是他的先辈用来抵御北方威胁的盾牌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此刻，却成了禁锢他自由的铁栅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的嘲讽，莫过于此。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡见证了他家族的崛起与守护，也目睹了这个王朝最后血脉的陨落。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在刀剑与政治的宏大叙事之外，贝林佐纳的血脉里也流淌着神秘的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们为坚硬的石头，注入了一丝灵性的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说与<strong>蒙特贝罗城堡</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当地古老的口述传统中，这座城堡的庭院深处，隐藏着一口被封印的“许愿井”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，这并非普通水井，而是一条通往地下精灵王国的秘道入口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在特定的月圆之夜，或是圣约翰节（夏至）的黎明，井口会隐隐发出微光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若有纯真之心之人向井中投下一枚银币并默默许愿，井底的精灵可能会实现他的一个愿望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但代价是，许愿者永远不能说出愿望的内容，否则魔法便会逆转。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更为悲情，与城市的守护圣人<strong>圣乔治</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然圣乔治屠龙的故事广为流传，但贝林佐纳的版本有其独特的地缘色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，那头恶龙并未盘踞在遥远的利比亚，而是蛰伏在贝林佐纳北方的圣哥达山口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它喷吐的寒冰与迷雾，常常阻断商路，吞噬旅人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣乔治一路北上，最终在此地的山隘中与恶龙展开决战。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的长矛刺穿龙鳞的瞬间，龙血洒落，化作了提契诺河谷中富含铁矿的红色土壤。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老人们会说：“为什么我们的城堡如此坚固？因为它们建造在浸透了龙血的土地上，继承了龙鳞的坚硬。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，屠龙的圣乔治自然成了这座要塞之城的守护神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的形象出现在教堂的壁画、家族的纹章上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说巧妙地将基督教的圣徒故事与本地地理、历史（对商路安全的渴望）结合，成为了贝林佐纳集体记忆的一部分。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，漫步在贝林佐纳，阳光和煦，游人如织。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "三座城堡静立于山丘，更像是宏伟的观景台。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但当你触摸大城堡那被岁月打磨光滑的墙砖，当你站在萨索·科尔巴洛城堡的垛口感受凛冽的山风，当你俯瞰脚下那条依旧繁忙的铁路与公路时，历史便呼啸而至。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你看到的不是三座孤立的博物馆，而是一个完整、精密、充满威慑力的军事机器遗骸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它让你直观地理解，中世纪和文艺复兴时期的权力，是如何具体化为石头与地形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝林佐纳的价值，正在于这种极致的“功能性”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它因战略而生，为战争而建，它的每一处设计都在冷静地计算着生死与胜负。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂贝林佐纳，便是读懂了半部阿尔卑斯山南北的争霸史，读懂了地缘政治那冰冷而永恒的法则。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，旅行不再是简单的风景消费，而成了一场跨越时空的地理解码。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你知晓每一块石头背后的渴望与恐惧，眼前的风景便拥有了截然不同的重量与深度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/convent-of-saint-john-in-mustair" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米施泰尔圣约翰修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convent of Saint John in Müstair</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bosco-gurin" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博斯科古林</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bosco/Gurin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lunigo-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢尼古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Ruins of Lunnigo</p>
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
