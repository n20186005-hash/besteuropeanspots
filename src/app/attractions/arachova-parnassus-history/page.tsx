import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '希腊悬崖小镇｜阿拉霍瓦的前世今生与帕尔纳索斯的山神传说',
  description: '德尔斐的朝圣驿站，独立战争的血色传奇，牧羊人山城阿拉霍瓦的千年回响。一个被神谕、英雄与暴风雪雕刻的希腊秘境。',
}

export default function ArachovaParnassusHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '阿拉霍瓦', href: '/attractions/arachova-parnassus-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿拉霍瓦・Arachova・希腊・中希腊大区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不是寻常的希腊蓝白小镇。当世人涌向爱琴海岛，这座高悬于<strong>帕尔纳索斯</strong>山腰、俯瞰橄榄谷地的石城，始终是通往神谕之地德尔斐的尘世前哨。它的历史，是浸透了松脂香气的牧羊人史诗，是<strong>1826年</strong>冬夜以寡敌众的英雄血战，更是千百年来朝圣者们仰望神山时，脚下那块坚实而沉默的歇脚石。风雪塑造了它的筋骨，传说浸润了它的石墙。抛开游玩攻略，走进阿拉霍瓦的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿拉霍瓦`} />
                <InfoRow label="英文名称" value={`Arachova`} />
                <InfoRow label="正式名称" value={`Arachova`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`中希腊大区`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉霍瓦的起源，深藏在帕尔纳索斯山的云雾与神话里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "没有确切的建城年份镌刻在石头上。学者认为，它最早作为分散的牧羊人定居点存在，可能追溯到拜占庭中期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，是解开其身份的第一把钥匙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一种流传甚广的传说指向了神话时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，这里曾是一位名叫<strong>阿拉霍斯</strong>的牧羊人的领地。他美丽的女儿被一位神祇（一说为阿波罗）掳走，悲痛的父亲在此守望，小镇便得名于他。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一种更语言学的解释，认为“阿拉霍瓦”源自古希腊语中“核桃树”一词的斯拉夫语变体，暗示了中世纪斯拉夫部落在此地的迁徙与融合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论起源如何，地理决定了它的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它雄踞在海拔950米的陡峭山坡上，恰好位于两条古老路线的交汇点：一条从底比斯平原蜿蜒而上，另一条从科林斯湾内陆深入群山。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个位置，注定它不是一个与世隔绝的村庄，而是一个<strong>战略关卡</strong>和<strong>贸易驿站</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最重要的是，它扼守着通往<strong>德尔斐</strong>——古希腊世界的“宇宙脐点”——的朝圣之路的最后一段险峻山路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当虔诚的朝圣者历经长途跋涉，望见巍峨的帕尔纳索斯双峰时，阿拉霍瓦便是他们补充给养、祈求庇护、最后整理仪容的“人间最后一站”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "神域的序幕，在此拉开。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉霍瓦的历史，是一部在险峻自然与宏大历史夹缝中求存的坚韧史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "两个关键事件，如刀斧般塑造了它的骨骼与灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，是 <strong>1826年</strong>那个血腥的冬天，希腊独立战争中最悲壮的战事之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，奥斯曼帝国将领<strong>库尔提迪斯</strong>率精锐部队横扫希腊中部，意图扑灭起义火焰。他的军队逼近阿拉霍瓦，这座山城成了关键据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "希腊起义军指挥官<strong>乔治·卡拉伊斯卡基斯</strong>——一位传奇游击战领袖——在此设伏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战斗并非在平原展开，而是在阿拉霍瓦迷宫般的陡峭街巷和石屋之间。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“每一座房屋都是一座堡垒，每一个屋顶都是一个射击点。土耳其人像掉进石缝里的洪水，无处着力。”——后世当地史家的描述。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "起义军凭借对地形的熟悉，展开了残酷的巷战。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最激烈的战斗围绕镇中心的<strong>钟楼</strong>展开，这座石制高塔成了起义军的指挥所和最后防线。最终，库尔提迪斯的军队遭受重创，被迫撤退。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场胜利极大地鼓舞了独立军的士气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，胜利的代价是惨重的。小镇几乎被炮火摧毁，石墙上弹孔密布。这种“废墟上的胜利”，成了阿拉霍瓦人集体记忆中永恒的骄傲与伤疤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日镇上那座古老的钟楼，墙上依然可见当年的弹痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道更绵长的印记，则是它作为<strong>德尔斐朝圣之路守护者</strong>的身份。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "数千年来，从王公贵族到平民百姓，前往德尔斐祈求阿波罗神谕的人们，必在此歇脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉霍瓦的客栈、酒馆和羊毛集市因此繁荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它见证了古希腊的鼎盛、罗马的征服、拜占庭的祷告、十字军的过境，直到近代旅游业的兴起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的建筑风格——厚重的石墙、狭小的窗户、陡峭的瓦片屋顶——不仅是为了抵御帕尔纳索斯山严酷的寒冬风雪，也源于一种防御性的聚居传统。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些层层叠叠、宛如长在悬崖上的房子，本身就是一部无声的、关于生存与守望的编年史。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉霍瓦的传奇，与两位人物的名字紧紧缠绕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位是本土的战斗英雄，另一位是异国的浪漫诗魂。他们的故事，一实一虚，共同编织了小镇的精神经纬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>乔治·卡拉伊斯卡基斯</strong>，并非阿拉霍瓦本土人，但他的命运与此地生死相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他原是阿尔巴尼亚裔的奥斯曼帝国士兵，后毅然投身希腊独立事业，以其狡黠的游击战术和冷酷的决断力闻名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1826年</strong>深秋，在阿拉霍瓦战役前，他的军队处境艰难，内部也有分歧。选择在阿拉霍瓦迎战兵力占优的敌军，是一次巨大的军事冒险。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们将在这里战斗，像山上的岩石一样。要么自由，要么死亡。”——据传卡拉伊斯卡基斯在战前动员中的话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他充分利用了山城的地形，将主力化整为零，埋伏在石屋和隘口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战斗胜利了，但传奇并未在此结束。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "仅仅数月后，<strong>1827年</strong>，在邻近的法勒隆的一场战斗中，卡拉伊斯卡基斯身受重伤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他被抬回他熟悉的、刚经历过战火洗礼的阿拉霍瓦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在镇上的一所房子里（位置已不可精确考据），这位叱咤风云的将军因伤势过重去世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的遗体最初被安葬在阿拉霍瓦，后来才迁往雅典。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，小镇中心广场以他的名字命名，他的雕像屹立于此，永远凝视着脚下他曾浴血保卫的山谷。对阿拉霍瓦而言，他是一位“ adopted son”，一位用鲜血赋予小镇不朽英雄注脚的外人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与阿拉霍瓦产生深刻精神联结的，是英国诗人<strong>拜伦勋爵</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拜伦并未真正踏足阿拉霍瓦，但他的人生轨迹与精神追寻，却与这片土地息息相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1809年</strong>，拜伦首次游历希腊，他心中充满对古希腊文明的狂热向往。他探访了德尔斐遗址，站在神庙废墟上写下诗篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而阿拉霍瓦，是通往那片废墟的必经之路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在拜伦的史诗《<strong>恰尔德·哈罗尔德游记</strong>》中，他描绘了帕尔纳索斯山的壮丽与德尔斐的神圣。可以想象，当年年轻的诗人骑着马或骡子，沿着崎岖山路攀爬时，必定曾在阿拉霍瓦这样的驿站停留、休憩、眺望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，拜伦后来毅然投身希腊独立战争，并病逝于米索隆吉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他成为了希腊独立精神的国际象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，在阿拉霍瓦人的集体记忆和后世旅行者的想象中，拜伦的“身影”仿佛与小镇同在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那些十九世纪早期前往希腊“壮游”的欧洲文人绅士，很多都是追随着拜伦的足迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当他们夜宿阿拉霍瓦简陋的客栈，听着松涛，准备翌日前往德尔斐时，心中激荡的，正是拜伦所点燃的那份对古典荣光与自由理想的浪漫激情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "阿拉霍瓦，于是不仅是一个地理驿站，也成了一个<strong>精神上的中转站</strong>——从现代的纷扰，通往古代的辉煌与为自由而战的理想。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿拉霍瓦，历史与神话的边界，被山间的雾气氤氲得模糊。这里流传的故事，往往带着帕尔纳索斯山特有的灵气与牧羊人的质朴想象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最独特的传说，关乎小镇的守护精灵与一种小动物：<strong>变色龙</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老人们说，阿拉霍瓦的奠基者们在建造第一批石屋时，总遇到怪事：白天砌好的墙，夜晚会微微移动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们向一位隐居山中的智者求助。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "智者告诉他们，这片陡峭的山坡由一位古老的山灵守护，它不喜欢过于规整、冒犯自然秩序的建筑。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“去找一只生活在古老橡树上的变色龙，将它请入你们新建房屋的基石之下。它的颜色变幻能取悦山灵，它的沉稳能稳固地基。”——传说中的智者建言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "牧羊人们照做了。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，变色龙在阿拉霍瓦文化中成了吉祥与稳固的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，在一些老屋的门楣或壁炉上，你偶尔还能发现石刻的变色龙图案。当地人开玩笑说，这就是阿拉霍瓦的房子能历经数个世纪地震风雪，依然紧紧“粘”在悬崖上的秘密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与<strong>牧羊人</strong>和<strong>阿波罗</strong>有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕尔纳索斯山是阿波罗和文艺女神的圣地。传说在远古时代，一位阿拉霍瓦的牧羊人在高山牧场上丢失了最好的头羊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他焦急地寻找了三天三夜，最后精疲力竭，在一处泉水边睡着。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "梦中，阿波罗（以阳光美少年的形象）指引他，在泉眼旁的岩缝里找到了安然无恙的头羊，旁边还生长着一株从未见过的、散发着奇异清香的药草。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "牧羊人醒来，果然如梦中所见。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他将药草带回村庄，发现它能治愈一种当时的怪病。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，阿拉霍瓦的牧羊人每年在特定时节，都会向那处“阿波罗之泉”敬献羊毛，感谢神的庇佑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，将阿拉霍瓦最根本的牧羊生计，与山顶上那座光辉的神谕所，诗意地连接了起来。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客们涌入阿拉霍瓦，为其如画的雪景、热闹的滑雪场和美味的 Formaela 奶酪而来时，脚下踩着的，是一层又一层被压实的历史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一级陡峭的石阶，曾踏过祈求神谕者的忐忑脚步；每一面厚实的石墙，曾聆听过独立战士粗重的喘息与拜伦追随者们浪漫的吟诵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂阿拉霍瓦，便是读懂一种<strong>山民的韧性</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不曾拥有卫城那般举世瞩目的辉煌，却以驿站和关隘的身份，参与了宏大的历史叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它用羊毛和石块，在神与人的边界上，构建了自己稳固而充满故事的世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，不在博物馆的橱窗里，而在街巷的坡度中，在钟楼的弹痕里，在老人们讲述变色龙故事时闪烁的眼神里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的历史从未远去，它只是化作了冬季壁炉里的松木噼啪声，化作了春日牧羊人挥鞭的空谷回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "来到阿拉霍瓦，不妨慢下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "用手触摸那些冰凉的石头，想象它们所见证的千年风雪与热血。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你会发现，这座看似服务于德尔斐和滑雪者的小镇，本身就是一个深邃的、充满英雄气与烟火气的史诗现场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mycenae" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈锡尼遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mycenae</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/achilleion-corfu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科孚岛阿喀琉斯宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Achilleion</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/epidaurus-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃皮达鲁斯古剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Epidaurus Theatre</p>
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
