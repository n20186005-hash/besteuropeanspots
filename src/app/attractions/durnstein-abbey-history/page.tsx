import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '杜恩施泰因修道院历史溯源｜瓦豪河谷秘境、十字军东征与国王囚徒的前世今生',
  description: '抛开游客滤镜，深入瓦豪河谷之心。揭秘杜恩施泰因修道院蓝塔下的隐秘历史：狮心王理查的囚禁之谜、奥古斯丁修会的千年回响，与多瑙河畔的石之传奇。',
}

export default function DurnsteinAbbeyHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '杜恩施泰因修道院', href: '/attractions/durnstein-abbey-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`杜恩施泰因修道院・Dürnstein Abbey・奥地利・瓦豪河谷`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它静立于多瑙河畔嶙峋的岩壁上，如同一枚镶嵌在瓦豪河谷画卷中的蓝宝石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座修道院的故事，远远超越了宗教的范畴，与一场改变欧洲格局的十字军东征、一位传奇国王的囚徒岁月，以及一个家族的野心与虔诚紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的钟声，曾为一位国王而沉寂；它的蓝塔，守护着一个关于忠诚、背叛与巨额赎金的中世纪谜团。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进杜恩施坦因的尘封往事，遇见属于它的权力、信仰与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`杜恩施泰因修道院`} />
                <InfoRow label="英文名称" value={`Dürnstein Abbey`} />
                <InfoRow label="正式名称" value={`Dürnstein Abbey`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`瓦豪河谷`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“<strong>杜恩施泰因</strong>”（Dürnstein）这个名字本身，就是一段地理宣言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在德语中，“<strong>Dürr</strong>”意为干燥，“<strong>Stein</strong>”意为石头。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它直白地指向了这片土地的本质——一块<strong>干燥而坚固的岩石</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小镇的诞生，源于其<strong>不可替代的战略位置</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它盘踞在多瑙河一处陡峭的弯道之上，背靠险峻的山岩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在<strong>1130年</strong>之前，库恩林格家族的先辈们便在此修建了城堡，扼守河道，征收通行税。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "河运即是财富与权力的命脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而修道院的出现，则与这个家族的<strong>信仰与政治谋略</strong>息息相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1192年</strong>，就在那位著名的囚徒事件发生前后，城堡的主人——<strong>哈德玛一世·冯·库恩林格</strong>，决定在此资助修建一座修道院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一座<strong>奥古斯丁修会</strong>的修道院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择奥古斯丁修会，而非当时更主流的本笃会，或许暗含深意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥古斯丁修会强调社区生活与神学研究，其规章相对灵活。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "有学者推测，库恩林格家族选择此地建院，旨在将这片战略要地同时转化为一个精神中心，用上帝的权威，来巩固和“净化”家族通过世俗权力（包括可能不太光彩的赎金）获得的财富与地位。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，岩石上的堡垒旁，生长出了信仰的居所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“干燥之石”从此拥有了双重身份：军事的咽喉，与灵魂的港湾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座蓝白相间的建筑群，自此成为多瑙河历史最动荡篇章的<strong>核心见证者</strong>。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "杜恩施泰因修道院的墙壁，铭记着两次足以撼动其根基的“地震”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一次，直接塑造了它的国际名声；第二次，则险些让它归于永恒的寂静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一道印记，便是那桩举世闻名的 <strong>“国王囚禁”事件</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间锚定在<strong>1192年12月</strong>至<strong>1193年3月</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十字军东征归来的英格兰国王——<strong>狮心王理查一世</strong>，在维也纳附近被俘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的囚禁地，正是库恩林格家族控制的<strong>杜恩施坦因城堡</strong>（与修道院毗邻）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场囚禁绝非偶然。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是神圣罗马帝国皇帝<strong>亨利六世</strong>与奥地利公爵<strong>利奥波德五世</strong>精心策划的政治博弈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "理查在东方羞辱过利奥波德，而亨利六世则急需巨额资金和威望来巩固皇权。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "据中世纪编年史记载，国王被严密关押，但待遇尚可。传奇故事则描绘了他的忠实吟游诗人<strong>布隆德尔</strong>，沿着多瑙河一家家城堡吟唱他们之间的秘密歌曲，最终在杜恩施坦因听到了国王的和声，从而发现了囚禁地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，一笔相当于英格兰王室两年岁入的<strong>天价赎金</strong>被支付。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "理查获释。这笔赎金的一部分，流入了利奥波德和库恩林格家族的国库。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，正是用这笔资金，杜恩施坦因修道院得以更宏伟地兴建，而那标志性的<strong>蓝塔</strong>得以矗立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院因这笔“神圣的赎金”而繁荣，却也永远与一段关于背叛（违背十字军战士应受保护的惯例）与贪婪的争议历史绑定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二道深刻的历史印记，来自<strong>启蒙时代的无情风暴</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1787年</strong>，奉行激进改革的神圣罗马帝国皇帝<strong>约瑟夫二世</strong>，颁布了修道院解散令。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的目的是削减教会权力，将财富用于世俗教育和医疗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拥有近六百年历史的杜恩施泰因奥古斯丁修道院未能幸免。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修士被驱逐，财产被充公，建筑一度荒废。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那抹瓦豪河谷的蓝色，似乎随之黯淡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史在此转折。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1898年</strong>，<strong>圣母圣衣修女会</strong>的修女们入驻这片荒废的圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她们带来的不仅是祷告，还有精心的修复与持续的教育工作。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蓝塔被重新点亮，钟声再次响起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院从一场皇权导致的“死刑”中涅槃重生，其功能从纯粹的男性修院，转变为以女性修为主导的教育与灵修中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一转变本身，就是一部微缩的欧洲宗教社会变迁史。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "杜恩施泰因修道院的名人传奇，几乎被一个人的光芒所笼罩——<strong>狮心王理查</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，围绕他的故事，远比“英勇国王被囚”的简单叙事复杂得多。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>理查一世（1157-1199）</strong>，这位英格兰国王在位的十年，仅有六个月留在本国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是典型的“骑士国王”，毕生理想在于骑士征战与宗教征服。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的形象在杜恩施坦因被彻底“双重化”：既是高贵的囚徒，也是引发灾难的鲁莽者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在第三次十字军东征中，他与穆斯林领袖萨拉丁打得有来有回，赢得了勇猛的名声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但也正是在阿卡城下，他<strong>公然侮辱了奥地利公爵利奥波德五世</strong>，扯下并践踏了对方的旗帜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这为日后的囚禁埋下了仇恨的种子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1192年深秋</strong>，理查伪装成商人回国，却在维也纳附近被识破俘获。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随即，他被移送到利奥波德盟友——库恩林格家族的地盘：杜恩施坦因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的囚禁生活，是中世纪权力游戏的缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "理查并非关在地牢，而是城堡中相对舒适的房间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但他的“囚徒”身份，是欧洲政治棋盘上最值钱的筹码。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当时的一封信件描述道：“整个基督教世界都在关注着多瑙河畔那块岩石上的命运。英格兰的国库被掏空，银器被熔铸成马克，只为赎回他们的国王。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "理查在杜恩施坦因的具体心境已不可考。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但可以想象，这位习惯于驰骋沙场的国王，每日透过窄窗，望着脚下奔流的多瑙河与对岸的修道院（当时正在建设中），是何等的焦灼与屈辱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那抹逐渐建起的蓝塔，是否在他眼中，成了用自己自由赎买的“纪念碑”？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个与杜恩施坦因紧密相连的传奇人物，是他的寻找者——<strong>布隆德尔·德·内斯勒</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位历史上真实存在的法国行吟诗人，其生平与理查确有交集。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他沿多瑙河吟唱、凭借只有国王知晓的副歌找到理查的故事，最早见于13世纪的浪漫传奇中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说为何如此动人且持久？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因为它将冷冰冰的政治绑架，转化为了关于<strong>忠诚、智慧与艺术力量</strong>的温暖寓言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "布隆德尔代表了骑士精神中“忠诚”的一面，他用诗歌而非刀剑，完成了拯救国王的壮举。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "传说的一个版本这样描绘：“当布隆德尔在杜恩施坦因城堡下唱起他们共同创作的第一段歌谣，一个熟悉的、充满威严的声音从高塔的窗口接上了第二段。诗人知道，他漫长的寻找终于结束了。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然史学家普遍认为，理查被关押在杜恩施坦因在当时的上层政治圈并非绝对秘密，赎金谈判也早已通过官方渠道进行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但“布隆德尔寻找记”赋予了这段历史无可替代的浪漫色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它让杜恩施坦因不仅仅是地图上的一个坐标，更成为了欧洲文学与民间想象中的一个<strong>永恒符号</strong>——象征着绝境中的希望，与知音间的羁绊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "理查于1194年获释，五年后在法兰西的一场小规模围城战中因箭伤去世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他或许从未踏足过几步之遥的修道院，但他被困于此的岁月，却为这座建筑注入了不朽的传奇灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，每一个仰望蓝塔的人，看到的都不再仅仅是蓝塔。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了布隆德尔的诗歌，杜恩施泰因修道院本身，尤其是它那独一无二的<strong>钴蓝色钟塔</strong>，也孕育着当地的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这抹不同于奥地利寻常巴洛克风格的金色或白色的蓝色，其由来众说纷纭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最流行、也最富戏剧性的传说，自然与<strong>狮心王理查的赎金</strong>相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事说，库恩林格家族用得到的一部分巨额黄金，命令工匠烧制出最昂贵、最罕见的颜料，装饰修道院的钟塔。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这抹蓝色，因此成为<strong>财富与胜利的炫耀</strong>，也是对那段囚禁往事沉默而持久的宣告——看，这就是囚禁一位国王的代价与奖赏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个更贴近宗教精神的传说，则将蓝色与<strong>圣母玛利亚</strong>联系起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在基督教 iconography 中，蓝色常是圣母的象征，代表纯洁、天国与忠诚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在修道院筹建时，一位修士在梦中得到圣母启示，要求将钟塔涂成“天空与海洋之间的颜色”，以祈求她的庇护，让这座位于险峻岩石上的建筑，能如星空般永恒，如大海般深邃。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人口中还有一个更朴素的版本：瓦豪河谷多雾，尤其是清晨，多瑙河上升起的雾气常将山谷笼罩成一片灰白。当年的修道院长希望，无论天气如何，信徒和船夫从远处都能一眼望见这座信仰的灯塔。于是，他们选择了雾中最醒目、最穿透的蓝色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至于修道院下方的岩石山体，也有传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人们相信，山中隐藏着古老的通道和密室，不仅用于防御，或许还曾短暂地囚禁过那位国王。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "甚至有传言说，在极其安静的子夜，贴近岩石细听，或许能听到隐约的、带有异国口音的叹息声，或是金属铠甲摩擦石壁的微响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说真伪难辨，但它们共同构建了杜恩施坦因的<strong>神秘氛围</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们让历史不再是书本上的文字，而成了可被看见（蓝塔）、可被听见（传说故事）、可被感知（山中回响）的活生生的存在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在小镇的石板路上，你踩着的，或许就是一段传奇的韵脚。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客驻足于杜恩施泰因修道院前，他们看到的远不止一座精美的巴洛克建筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们面对的，是一本立体的、石质的中世纪编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里回荡着十字军东征的喧嚣与野心，铭刻着封建领主在神权与王权间游走的精明算计。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "空气中仿佛还残留着巨额赎金易手时的金属气味，以及一位骄傲国王被困时的无奈叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那抹独一无二的蓝，是历史投下的、无法复制的滤镜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂杜恩施泰因，便读懂了<strong>中世纪欧洲的复杂肌理</strong>：信仰如何与权力共谋，传奇如何与真实交织，个人的命运又如何被裹挟进时代的洪流，最终凝固成一幅河谷的风景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，欧洲的深邃，不仅存在于巴黎罗马的恢弘殿堂，更藏匿于这些河谷小镇的每一块“干燥的石头”背后，等待被倾听。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这里，历史不是过去，而是一种持续的低语，随着多瑙河的波涛，日夜不息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你理解了岩石上的囚牢与河畔的蓝塔之间的对话，瓦豪河谷的每一缕风，便都有了故事的重量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？如何抵达这座崖壁秘境、参观修道院教堂与地窖、漫步小镇探寻囚徒遗迹，以及瓦豪河谷的完整游览线路，请点击相关【杜恩施泰因游玩全攻略】游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/friesach-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里萨赫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Friesach</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schloss-ambras-innsbruck" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    安
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">安布拉斯城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schloss Ambras</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bregenz-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布雷根茨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bregenz Old Town</p>
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
