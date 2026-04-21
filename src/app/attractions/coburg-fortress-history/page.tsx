import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科堡要塞历史溯源｜“弗兰肯的王冠”前世今生与马丁·路德传奇',
  description: '探索德国保存最完好的中世纪要塞之一。尘封着萨克森公爵的权杖、马丁·路德的墨迹与“弗兰肯王冠”的传奇。走进一部石砌的德意志史诗。',
}

export default function CoburgFortressHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '德国', href: '/destinations/europe' },
            { label: '巴伐利亚 科堡', href: '/destinations/europe' },
            { label: '科堡要塞（弗兰肯的王冠）', href: '/attractions/coburg-fortress-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科堡要塞（弗兰肯的王冠）・Veste Coburg・德国・巴伐利亚 科堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在巴伐利亚北部连绵的丘陵之上，一座庞大的砖石城堡如同巨人王冠，戴在科堡城的山巅。它并非童话中轻盈的幻影，而是一座历经九百年烽火与思想淬炼的坚实堡垒——<strong>科堡要塞</strong>，人称“<strong>弗兰肯的王冠</strong>”。这里曾是帝国边境的雄关，更在宗教改革的惊涛骇浪中，意外成为保护新教火种的“最安全城堡”，庇护了那位撼动欧洲的修士。它的城墙上镌刻的，不仅是公爵的纹章，更是半部浓缩的德意志历史。抛开游玩攻略，走进科堡的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科堡要塞（弗兰肯的王冠）`} />
                <InfoRow label="英文名称" value={`Veste Coburg`} />
                <InfoRow label="正式名称" value={`Veste Coburg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`巴伐利亚 科堡`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科堡要塞的起源，深埋在<strong>11世纪</strong>德意志王国向东扩张的尘土之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，法兰克尼亚地区东部广袤的森林与土地，仍是帝国需要巩固的边疆。统治此地的<strong>法兰克尼亚公爵</strong>，为了守护领土、控制贸易路线，开始在战略要地修筑城堡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "约在<strong>1056年</strong>的一份古老文献中，首次出现了“Coburg”这个名字。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的词源可能源自“Koho”，一个斯拉夫语的人名，加上德语的地名后缀“-burg”（城堡、要塞）。这暗示着，早在德意志领主到来之前，这里或许已有西斯拉夫部落的定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的城堡并非今日所见庞然大物，很可能只是一座简陋的<strong>木石结构瞭望塔</strong>，驻守着少量士兵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它俯瞰着重要的商道，这条道路连接着美因河与图林根森林，是盐、铁与木材运输的生命线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的存在，象征着秩序、税收与领主的权力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随着<strong>12世纪</strong>霍亨斯陶芬王朝的皇帝将此地赐予<strong>安达赫斯-梅拉尼亚公爵</strong>，城堡开始了第一次重要的扩建，从边境哨所向贵族居所演变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正让这座要塞脱胎换骨、获得“王冠”美誉的，是<strong>13世纪</strong>到来的<strong>韦廷家族</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个强大的萨克森王朝，将科堡作为其在弗兰肯地区统治的核心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们投入巨资，用坚硬的砂岩重建城墙与塔楼，将其打造为一座几乎<strong>不可攻克</strong>的环形防御体系。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡雄踞于海拔464米的山巅，三面是陡峭的悬崖，仅有一面可通过蜿蜒山路到达。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从那时起，这座巍峨的红色砂岩建筑群，便以其恢弘气势与绝对权威，被誉为“<strong>弗兰肯的王冠</strong>”，成为地区权力与荣耀的至高象征。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科堡要塞的城墙见证了无数决定性的时刻，其中最为闪耀的，当属<strong>宗教改革</strong>的烽火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1530年</strong>，当马丁·路德因拒绝收回其学说而被帝国通缉，处于极度危险之中时，他的保护者、萨克森选帝侯<strong>约翰</strong>将他秘密送往科堡要塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里远离政治风暴中心，固若金汤，是理想的避难所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "路德在此居住了近<strong>六个月</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并未停下工作，反而在这“最安全的城堡”里，将《圣经》从希伯来文和希腊文翻译成德文的工作推向高潮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他每天在城堡的房间里奋笔疾书，通过信件与在奥格斯堡帝国议会上为信仰辩护的盟友梅兰希顿保持紧密联系。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "路德在给朋友的信中写道：“我坐在这里，像个懒汉。但我和撒旦以及他的天使们进行着激烈的战斗……这座城堡的位置极佳，适合研习、祷告和写作。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段日子，是路德思想沉淀与输出的关键期，科堡要塞因此成为新教信仰的一个重要“避难所”与“思想工坊”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个深刻烙印在城堡砖石上的事件，是<strong>1632年</strong>的<strong>三十年战争</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，神圣罗马帝国皇帝的天主教军队与瑞典国王古斯塔夫二世的新教军队正在德意志大地惨烈厮杀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瑞典军队兵临科堡城下，意图夺取这座坚固的要塞。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "守军仅有不到400人，而围攻的瑞典军队超过4000人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，在指挥官<strong>格奥尔格·冯·恩克福特</strong>的领导下，守军凭借要塞近乎完美的防御体系和顽强的意志，竟然坚守了<strong>五个月</strong>之久。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，因为弹尽粮绝，城堡才在协议下被交出。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这次英勇的防守，极大地提升了科堡要塞“不可攻克”的传奇声誉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战争的创伤也显而易见，至今某些城墙上仍能看到当年炮火轰击留下的黑色灼痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入<strong>19世纪</strong>，科堡要塞与欧洲王室的命运紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "通过<strong>萨克森-科堡-哥达王朝</strong>的联姻网络，科堡的血脉流淌进了英国、比利时、葡萄牙、保加利亚等众多欧洲王室的血管中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡本身也从军事堡垒转变为<strong>王室收藏的宝库</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历代公爵，尤其是<strong>恩斯特一世</strong>和<strong>阿尔伯特亲王</strong>的父辈，热衷于收藏艺术珍品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们将无数绘画、雕刻、盔甲、武器和珍贵的历史文献汇聚于此，使科堡要塞成为一座无与伦比的<strong>艺术与历史博物馆</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其馆藏之丰，尤其在古代大师版画、绘画和武器甲胄方面，享誉世界。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要问谁的身影与科堡要塞的石头结合得最为紧密，答案无疑是<strong>马丁·路德</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这位奥古斯丁会的修士，在1530年春天抵达时，已是帝国公敌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而在要塞中，他找到了难得的宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他被安置在城堡东南角一座坚固的塔楼里，房间虽然简朴，但视野开阔，可以眺望整个科堡城和远方的山脉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "路德将这里称为他的“<strong>帕特莫斯</strong>”（《圣经》中使徒约翰流放并写下《启示录》的小岛）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每日清晨，他都会在城堡的<strong>小教堂</strong>里主持布道，听众是城堡内的士兵、仆役及其家属。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小教堂因此成为最早进行德语新教礼拜的场所之一，意义非凡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的书房，则是一个思想激荡的战场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了继续翻译《圣经》，他还撰写了大量论战文章、书信和教义问答，并通过信使网络源源不断地传播出去。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "他在信中甚至不乏幽默地描述城堡生活：“我们在这里吃得很好，喝得也很好。除了与魔鬼作战，我们几乎没有其他烦恼。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，游客可以踏入他当年的房间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "房间基本保持着原貌，一张书桌、一个火炉、一张简单的床。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最引人注目的是窗边的墙壁——据说路德曾用墨水笔愤怒地掷向墙上幻想的魔鬼，留下了一块著名的<strong>墨渍</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说真假难辨，却生动地传递了路德在此地与内心及外界压力抗争的形象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了路德，另一位与科堡息息相关的名人是<strong>约翰·塞巴斯蒂安·巴赫</strong>的家族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴赫的祖先<strong>维特·巴赫</strong>，据说在16世纪末因宗教迫害从匈牙利逃到德意志地区，最初就在科堡地区定居，以烘焙和演奏音乐为生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个音乐世家与图林根-萨克森地区，尤其是科堡附近的土壤，有着深厚的渊源。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "虽然巴赫本人未曾在此久居，但科堡的音乐传统无疑是他家族血脉中的背景音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，19世纪的<strong>萨克森-科堡-哥达公爵恩斯特二世</strong>，也是一位值得书写的人物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是英国阿尔伯特亲王的兄长，一位开明的统治者、艺术赞助人和作曲家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他本人创作了歌剧和交响乐，并大力支持瓦格纳等音乐家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在他的时代，科堡要塞的系统性修复和作为博物馆的规划得以展开。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他理解这座城堡的历史价值远超其军事用途，从而为其注入了<strong>人文主义</strong>的收藏灵魂，让那些战火纷飞的石头，最终成为了承载艺术与记忆的圣殿。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如同所有古老的城堡，科堡要塞也缠绕着无数传说与神秘故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最浪漫的传说，关乎它“<strong>弗兰肯的王冠</strong>”这个称号的由来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有人说，在晴空万里的日子，从遥远的地方望向城堡，阳光照射在连绵的红色屋顶与高耸的塔楼上，金光璀璨，其轮廓恰似一顶镶嵌着宝石的<strong>王者冠冕</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个版本则更富人情味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说一位远行归来的骑士，在历经磨难后终于回到故土。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当他翻过最后一座山丘，看到夕阳下巍然屹立的科堡要塞时，激动地脱口而出：“看啊！那是弗兰肯土地上一顶永恒的王冠！”从此，这个美名便流传开来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡的地下深处，据说密布着错综复杂的<strong>隧道与地牢</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "民间流传，其中有一条秘密通道可以一直通往山下的市政厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这或许并非空穴来风，中世纪城堡通常都有应急逃生密道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些幽暗的地下空间，自然也成为幽灵故事滋生的温床。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的“居民”是一位身穿白色长裙的<strong>贵妇幽灵</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说她是中世纪一位不幸的公爵夫人，因爱情悲剧被囚禁在塔楼中死去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "至今，仍有访客声称在黄昏时分，看到某个塔楼的窗口出现一个忧伤的白色身影，静静凝视着远方的森林。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人常讲：“要塞的石头记得所有的事。当你触摸那些冰冷的墙壁，如果你足够安静，或许能听到骑士的铠甲铮鸣，或是路德低声的祷告。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论是壮美的还是哀伤的，都为这座雄伟的石头城堡披上了一层柔和的、属于民间想象的面纱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不再仅仅是权力与战争的冰冷象征，更成为了本地人精神世界的一部分，一个承载着恐惧、希望与浪漫情怀的永恒地标。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你徒步登上通往要塞的蜿蜒坡道，每一步都踩在历史的回音之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科堡要塞早已卸下军事防御的重任，但它所承载的重量却有增无减。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一部<strong>石砌的三维史书</strong>：每一座塔楼都标记着一个王朝的野心，每一间厅堂都回荡着宗教改革的激辩，每一件藏品都闪烁着文艺复兴的人文之光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它完美诠释了德国历史中“<strong>城堡</strong>”的复杂内涵——既是割据与防御的堡垒，也是艺术与知识的庇护所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "理解科堡，便是理解德意志民族国家形成过程中，那种地方性与普世性、武力与思想交织的独特张力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座“弗兰肯的王冠”提醒我们，欧洲的历史并非仅由几个著名首都书写，更多深邃的篇章，潜藏在这些看似边缘、实则举足轻重的小城山巅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的传奇，等待着每一位愿意倾听石头述说的旅人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/goslar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈斯拉尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Goslar Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/muehlhausen-thuringia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米尔豪森</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mühlhausen</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/braubach-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布劳巴赫城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Braubach Castle</p>
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
