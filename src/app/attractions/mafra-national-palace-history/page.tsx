import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马夫拉宫历史溯源｜一座因国王誓言而生的巴洛克旷世奇观与修道院传奇',
  description: '探索葡萄牙马夫拉宫的尘封往事：从国王的一个誓言，到历时13年建成的宫殿-修道院综合体。揭秘黄金时代的野心、拿破仑入侵的伤痕，与石匠间的幽灵传说。',
}

export default function MafraNationalPalaceHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '里斯本大区马夫拉', href: '/destinations/europe' },
            { label: '马夫拉宫与修道院', href: '/attractions/mafra-national-palace-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马夫拉宫与修道院・Mafra National Palace・葡萄牙・里斯本大区马夫拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在里斯本以北的宁静小镇马夫拉，一座庞大的建筑群沉默地矗立着，它是<strong>巴洛克</strong>的杰作，更是<strong>一个王朝野心与虔诚的化石</strong>。这里不是单纯的宫殿，也非纯粹的修道院，而是一位国王用巨石写下的誓言、一个帝国黄金时代的缩影，以及一场波及欧洲的战争留下的独特伤疤。它的故事，始于一张关乎王室子嗣的“空白支票”。抛开游玩攻略，走进<strong>马夫拉</strong>的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马夫拉宫与修道院`} />
                <InfoRow label="英文名称" value={`Mafra National Palace`} />
                <InfoRow label="正式名称" value={`Mafra National Palace`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`里斯本大区马夫拉`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马夫拉镇的历史，远比那座举世闻名的宫殿要古老得多。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其名“Mafra”源自古阿拉伯语“<strong>Ma’fra</strong>”或“<strong>Mahfra</strong>”，意为“洞穴”或“采石场”，揭示了此地最初的地貌与功用——一个为周边地区提供建筑石料的源地。在摩尔人统治时期，它只是一个不起眼的小定居点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1217年，葡萄牙从摩尔人手中收复此地后，它逐渐发展。但真正让马夫拉从地图上“炸开”的，是十八世纪初的一个决定。<strong>1717年11月17日</strong>，国王<strong>若昂五世</strong>在此为一座新的修道院奠基。选择马夫拉，而非里斯本，原因颇具深意：这里靠近王室喜爱的狩猎森林，且相对偏远宁静，适合修士修行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这并非一次普通的宗教捐赠。这座建筑从诞生之初，就与一个王朝最核心的焦虑紧密相连：<strong>王位继承</strong>。年轻的若昂五世与奥地利公主玛丽亚·安娜结婚数年，始终未有子嗣。在巨大的压力下，国王向圣方济各会修士许下宏愿：若上帝赐予他后代，他将建造一座修道院。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我以国王的荣誉起誓，若王室血脉得以延续，我将在马夫拉为赤足圣方济各会修士建造一座修道院，其宏伟将匹配我无尽的感激。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1711年</strong>，长女芭芭拉公主诞生。国王视此为神恩，誓言启动。但若昂五世的野心，远不止一座修道院。他从一个“虔诚的报恩”开始，最终画下了一张帝国的“空白支票”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：从修道院到“石头之城”的膨胀（1717-1735）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的计划，只是一座容纳13位修士（纪念圣方济各的13位门徒）的小型修道院。但随着来自巴西殖民地的<strong>黄金和钻石</strong>源源不断运抵里斯本，若昂五世的财力与野心同步膨胀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工程启动后，设计方案被一再修改。最终，它演变成一个集<strong>皇家宫殿、方济各会修道院、宏伟教堂</strong>于一体的庞然大物。主体建筑长近220米，拥有超过1200个房间、156座楼梯、29个庭院与天井。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "建造过程本身就是一场史诗。每天动用约5万名工人（包括大量强征的农民），消耗了难以计数的石材与木材。建筑风格也从最初的朴素，融入了葡萄牙本土的<strong>巴洛克</strong>与来自罗马的<strong>意大利式</strong>奢华。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1730年10月22日</strong>，中心的主教堂堂落成祝圣，其双子钟楼高68米，成为当时葡萄牙最高的建筑。教堂内六架由<strong>53口钟</strong>组成的排钟，至今仍是世界上最大的历史排钟组之一，其鸣响可传至数十公里外。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“运送石材的牛车队伍络绎不绝，绵延数里，仿佛整个王国都在向马夫拉蠕动。尘土遮天蔽日，敲击声昼夜不息，这里成了一座为神与王服务的、喧嚣的‘石头地狱’。” —— 同时代旅行者笔记" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：拿破仑入侵与修道院的“世俗化”（1807-1834）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十九世纪初，拿破仑的铁蹄踏遍欧洲。<strong>1807年</strong>，法军在朱诺将军率领下入侵葡萄牙。王室仓皇逃亡巴西。马夫拉宫未能幸免。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它被法军占领，作为兵营和马厩。珍贵的藏书、家具遭到劫掠或破坏。更具转折性的事件发生在<strong>1834年</strong>，葡萄牙自由派政府颁布法令，解散所有修道院。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马夫拉修道院的修士们被迫离开。这座为宗教而生的宏伟建筑，其核心功能被彻底掏空。宫殿部分一度被闲置，庞大的建筑群陷入漫长的沉寂与衰败。它从一个活跃的宗教与权力中心，变成了一座冰冷、空洞的<strong>历史纪念碑</strong>，等待着被重新定义。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇一：“慷慨王”若昂五世（1689-1750）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若昂五世是马夫拉宫无可争议的“生父”。他的统治时期（1706-1750）被称为葡萄牙的<strong>“黄金时代”</strong>，巴西的矿藏让国库前所未有地充盈。他是一位复杂的人物：既是虔诚到近乎迷信的天主教徒，也是热爱艺术与奢华、意图媲美欧洲其他绝对君主的野心家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "马夫拉宫是他双重人格的完美体现。建造它，是为了履行对上帝的誓言，彰显虔诚。但同时，它的规模与奢华，旨在向国内外宣示：里斯本不再是欧洲的边缘，葡萄牙王国在<strong>若昂五世</strong>的带领下，拥有与凡尔赛宫、埃斯科里亚尔修道院的主人们平起平坐的实力与品味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与马夫拉宫的关系是持续的、痴迷的。他经常亲临工地视察，对细节提出要求。宫殿图书馆的建立，凝聚了他的另一面——<strong>文化庇护者</strong>。他斥巨资在欧洲搜罗珍贵典籍，最终建成了这座拥有超过三万六千卷藏书的洛可可风格图书馆，书架由珍贵的玫瑰木和橡木制成，据说还有一种特殊的<strong>蝙蝠种群</strong>世代栖息于此，负责吞噬蛀虫，成为天然的书籍守护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这座建筑也耗尽了他的精力与国财。晚年的若昂五世中风瘫痪，据说他躺在里斯本的王宫里，仍能听到从北方隐约传来的、关于马夫拉工程的汇报与争议。他于1750年去世，未能看到工程的全部收尾。马夫拉宫成为他留给王国最壮观、也最沉重的遗产。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>传奇二：一个文学的幽灵——萨拉马戈与《修道院纪事》</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到二十世纪末，马夫拉宫才被一位文学巨匠以魔幻的笔触重新推入世界视野。他就是葡萄牙<strong>诺贝尔文学奖</strong>得主<strong>若泽·萨拉马戈</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在1982年出版的小说<strong>《修道院纪事》</strong>中，萨拉马戈并未直接歌颂宫殿的宏伟，而是将镜头对准了那些<strong>被历史尘埃掩埋的无名者</strong>——成千上万的劳工、士兵、妇女。他用瑰丽而冷酷的想象力，描绘了在国王的意志下，普通人是如何被碾入这座巨石机器的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小说中充满了超现实的隐喻。其中最具代表性的人物是<strong>巴尔塔萨尔</strong>，一位在战争中失去左手的士兵，与一位拥有“视界”能力的女性<strong>布里蒙达</strong>相爱。他们与一位痴迷于飞行的神父一起，试图建造一架“大鸟”飞行器。而建造飞行器的场地，就在马夫拉宫巨大阴影的笼罩下。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“国王下令建造修道院。它将像一把匕首插在大地的胸膛上。需要石头，就去采石场切割；需要人力，就让整个王国怀孕，生出更多的手臂。” —— 若泽·萨拉马戈，《修道院纪事》" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨拉马戈的书写，完成了对马夫拉宫历史叙事的颠覆。他让这座沉默的巨石建筑“开口说话”，诉说的不是帝王的荣光，而是人民的血汗、梦想与代价。因为这部小说，全球的读者开始用另一种眼光审视马夫拉——它不仅是巴洛克艺术的宝藏，更是<strong>一部镌刻在石头上的社会史诗</strong>。萨拉马戈赋予了它现代的灵魂与批判的深度。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如此浩大而迅疾的工程，在民间自然滋生出无数传说，用以解释凡人难以理解的奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说关乎教堂前广场上那两根巨大的<strong>玫瑰色大理石柱</strong>。每根高11米，重达数十吨，它们来自遥远的<strong>佩洛皮达</strong>采石场。以当时的运输技术，将其完好无损地运抵马夫拉，被视为不可能的任务。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，民间智慧创造了“<strong>巨人</strong>”的故事。传说中，国王雇佣（或命令）了一对巨人兄弟，他们力大无穷，徒手将石柱从山上拔起，扛在肩上，一夜之间便从王国的一端走到了马夫拉。当他们轻轻将石柱立在预定位置时，地面甚至没有震动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与建筑本身的神奇有关。据说，在修道院修士们的食堂里，有一个设计精巧的<strong>“升降桌”</strong>系统，通过下层厨房的机械装置，可以将做好的饭菜直接升送到修士的长桌上，免去了仆人频繁出入的打扰。这在当时是惊人的创新。民间流传，这是国王得到了“神秘智慧”的帮助，甚至有“与魔鬼做交易”的隐秘版本在私下流传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而关于图书馆的蝙蝠，也有一个温馨的轶事。传说当初设计图书馆时，一位老修士建议在设计中为蝙蝠留出栖息的空间。他深知书籍最大的敌人是虫蛀，而蝙蝠是捕虫能手。这个看似不登大雅之堂的建议被采纳，于是，几个世纪以来，这群特殊的“图书管理员”每晚准时上岗，默默守护着人类的智慧，成为科学与传说交融的独特风景。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当你站在马夫拉宫空旷的广场上，仰望它巍峨却沉静的主立面时，你读到的是一部多声部的石头史书。它是<strong>绝对王权的自信宣言</strong>，是<strong>殖民财富流动的终点站</strong>，是<strong>虔诚与虚荣交织的纪念碑</strong>，也是<strong>无数无名者生命重量</strong>的承载者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它因一个极其私人的誓言而诞生，却长成了一个关乎国家命运的公器。它历经辉煌、劫掠与荒废，最终在文学的重述中获得了新生。参观马夫拉，不是看一堆华丽的房间（尽管它们确实华丽），而是去感知<strong>十八世纪葡萄牙的全部矛盾与梦想</strong>——它的虔诚、它的黄金、它的野心，以及那华丽袍子之下，沉重如巨石的代价。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "理解马夫拉，便能理解葡萄牙帝国夕阳中最炽烈的那抹余晖。这里的一石一木，都在低语着关于信仰、权力、艺术与生存的永恒故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/guimaraes-historical-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉马良斯历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Guimarães Historical Centre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/convent-of-christ-tomar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托马尔骑士团修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convent of Christ</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ponte-de-lima-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蓬
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蓬蒂-迪利马</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ponte de Lima</p>
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
