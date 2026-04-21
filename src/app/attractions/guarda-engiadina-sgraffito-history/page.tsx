import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓜尔达历史溯源｜瑞士山谷刮画村的前世今生与罗曼什语名人传奇',
  description: '时光在刮画中停驻。深入瑞士恩嘎丁山谷，探寻讲罗曼什语的童话村瓜尔达。从防御哨所到艺术宝库，从战争伤疤到语言复兴，遇见阿尔卑斯最坚韧的人文诗篇。',
}

export default function GuardaEngiadinaSgraffitoHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '瑞士', href: '/destinations/europe' },
            { label: '格劳宾登州', href: '/destinations/europe' },
            { label: '瓜尔达（恩嘎丁山谷的苏斯罗曼什语刮画村）', href: '/attractions/guarda-engiadina-sgraffito-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓜尔达（恩嘎丁山谷的苏斯罗曼什语刮画村）・Guarda・瑞士・格劳宾登州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在瑞士阿尔卑斯山的褶皱深处，恩嘎丁山谷拥有一枚被时间刻意遗忘的宝石：<strong>瓜尔达</strong>。它的名字意为“瞭望者”，数百年来守护着欧洲最后的罗曼什语孤岛。而满村斑斓的<strong>刮画外墙</strong>，并非单纯的装饰，是一部镌刻在石膏与颜料上的民族史诗。抛开游玩攻略，走进瓜尔达的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓜尔达（恩嘎丁山谷的苏斯罗曼什语刮画村）`} />
                <InfoRow label="英文名称" value={`Guarda`} />
                <InfoRow label="正式名称" value={`Guarda`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`格劳宾登州`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓜尔达并非诞生于田园牧歌，它的第一声心跳源于刀剑与警惕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村庄的雏形可追溯至 <strong>1253年</strong>。那时，它不叫Guarda，文献中记录的名字是 <strong>“warda”</strong>。这个词源自古高地德语，直白地意为“瞭望台”或“守卫处”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生，与贯穿恩嘎丁的<strong>上恩嘎丁通道</strong>息息相关。这条连接南北欧的古老商路，既是财富之路，也是危险之源。当地的领主需要在此设立一个前哨，监视山谷动静，保护往来商旅，并向通行者征税。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“从施库奥尔方向来的旅人，在绕过那个山角后，第一眼就会看到山脊上的房屋。那里有眼睛始终望着道路。” —— 当地古老谚语" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，这里只有几间为士兵和税吏搭建的石屋。渐渐地，为商队提供补给的服务业出现，农民和牧人也在此定居，一个社区围绕“守卫”的职能生长出来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的罗曼什语名 <strong>“Guarda”</strong> ，正是对德语“warda”的直接音译与继承。这个名字，从一开始就将这座村庄的命运与“坚守”和“视野”牢牢绑定。它瞭望的不仅是山谷的敌情，在之后的数百年里，更成为了一种文化与语言存亡的哨所。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓜尔达的历史并非线性发展，几个关键转折，将它从军事哨所塑造成了今日的艺术丰碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个深刻烙印，是 <strong>17世纪的三十年战争</strong>。这场席卷欧洲的宗教与权力混战，并未直接波及瑞士腹地，却以另一种方式重创了恩嘎丁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1621年至1639年间</strong>，来自奥地利蒂罗尔的军队多次入侵这片富裕的山谷。瓜尔达作为要道上的据点，难以幸免。村庄被掠夺，房屋被焚毁，人口锐减。战争留下的不仅是废墟，更是一种深刻的不安全感与创伤记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这份创伤，催生了瓜尔达最标志性的文化表达。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“战争带走了我们的亲人和财富，但带不走我们对美的记忆。我们要把花朵和寓言画在墙上，让每个路过的人都知道，这里住着热爱生活的人。” —— 据传为战后一位老工匠所言" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "劫后余生的村民在重建家园时，发展并极致化了 <strong>“刮画”艺术</strong>。他们在房屋外墙涂抹多层不同颜色的灰泥，趁未干时刮去表层，露出底层对比鲜明的色彩，形成精美繁复的图案。这不仅是装饰，更是一种宣言：用最坚韧、最不易摧毁的方式，将美好与信仰永久镌刻在家园之上，抵御一切无常。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个关键节点在 <strong>18世纪中叶</strong>。随着山谷趋于和平，经济复苏，刮画艺术迎来黄金时代。富有的家族竞相聘请工匠，将几何纹样、圣经故事、寓言图案和美丽花卉刮满外墙。<strong>1743年</strong>，村庄中心的 <strong>“普拉茨广场”</strong> 周围建筑基本定型，形成了今天我们看到的、宛如露天画廊的和谐建筑群。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，现代性的冲击随之而来。<strong>19世纪末到20世纪初</strong>，追求“崭新”的风潮席卷欧洲，许多古老的刮画被石灰水覆盖。瓜尔达也未能免俗，部分杰作被白白掩盖。直到 <strong>20世纪30年代</strong>，在“家乡保护”运动的推动下，人们才重新认识到这些刮画无与伦比的价值，开始了漫长的修复工作。每一幅重见天日的刮画，都是对一段险些被遗忘的历史的拯救。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓜尔达的传奇，与两位为罗曼什语血脉奔走呼号的儿子紧密相连。他们的故事，是这个小村最响亮的文化心跳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是语言学家与编纂者 <strong>“佩德尔·兰塞尔”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他于 <strong>1785年</strong> 出生在瓜尔达一个普通家庭。彼时，罗曼什语作为拉丁语在阿尔卑斯的“活化石”，正受到德语和意大利语的双重挤压，面临消亡危机。兰塞尔敏锐地意识到了这一点。他的一生，成了一场与时间赛跑的文化抢救。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的里程碑式巨著，是编纂并于 <strong>1835年</strong> 出版了 <strong>《罗曼什语词典与语法》</strong> 。这不仅仅是第一本系统性的罗曼什语（苏斯罗曼什方言）工具书，更是一面旗帜。它向世界宣告：这门山谷语言拥有完整的体系，值得被书写、被研究、被传承。他将瓜尔达及周边村庄的方言作为标准语的基础，极大地提升了这种口语的地位。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的工作并非创造，而是收集。将散落在老人口中、在炉火旁的故事里、在山歌里的珍珠串起来，以免它们永远消失在泥土中。” —— 佩德尔·兰塞尔" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他行走于恩嘎丁的各个村落，记录词汇、谚语和民间故事。瓜尔达的刮画上那些寓言场景，或许也曾给予他灵感。晚年，他回到故乡，在熟悉的刮画建筑间继续笔耕，最终于 <strong>1855年</strong> 在此长眠。他的故居至今仍存，是这座村庄作为“语言堡垒”的活见证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位，是诗人与教育家 <strong>“吉安·丰塔纳”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他是兰塞尔精神的直接继承者，出生于 <strong>1857年</strong>，同样是瓜尔达的儿子。如果说兰塞尔是奠基者，丰塔纳就是播种者与传火人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的毕生心血，倾注于罗曼什语的教育与文学化。他创作了大量诗歌、散文和学校教材，让罗曼什语不再只是市井交谈的工具，更成为能够承载细腻情感与深刻思想的文学语言。他笔下的阿尔卑斯风光、村民的悲欢，都充满了浓厚的乡土情怀与人文主义光辉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更为关键的是，他积极推动将罗曼什语纳入瑞士的国民教育体系。他的努力，为这门古老语言在20世纪获得瑞士官方语言地位（<strong>1938年</strong>）铺平了道路。他让瓜尔达的孩子们，能够堂堂正正地用母语朗读课文、书写诗歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1915年</strong>，吉安·丰塔纳在瓜尔达去世。今天，村中仍有以他命名的路径和纪念牌。行走在瓜尔达，你目光所及的每一幅刮画，耳畔仿佛响起的古老罗曼什语，都浸透着这两位先贤毕生的守望。他们让这座“瞭望之村”，真正望见了民族文化存续的未来。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓜尔达的墙壁会说话，而流传于村民口中的故事，则为这些沉默的图案注入了灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说，关乎<strong>刮画艺术的起源</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传在很久以前，村里来了一位神秘的流浪画匠。他衣衫褴褛，疲惫不堪，村民好心收留了他。为表感谢，画匠提出为收留他的那户人家装饰外墙。他没有用笔，而是用木片和钉子，在未干的灰泥上刮擦、勾勒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奇迹发生了。他刮出的图案在阳光下熠熠生辉，花朵似乎能引来蝴蝶，圣兽仿佛随时会从墙中走出。更神奇的是，自此之后，这户人家事事顺遂，家宅平安。村民们相信，这种独特的技法被山神祝福，能够驱邪避祸，带来好运。于是，刮画技艺在瓜尔达代代相传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说，与村中一座刮画上的<strong>“三只黑羊”</strong>图案有关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事说，一位贫穷的牧羊人仅有的三只黑羊在暴风雪中走失。他焦急地寻找了三天三夜，几乎绝望时，却在山坡上看到一个发光的洞穴，三只黑羊安然无恙地待在洞里，身边还有一只守护它们的白色神兽。牧羊人认为这是山灵的恩赐。回家后，他请人将这一幕刮在了自家墙上，以感恩神佑。此后，黑羊图案便成了守护与奇迹的象征，出现在许多瓜尔达的刮画中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说真假难辨，但它们深刻反映了山民的世界观：对自然恩威的敬畏，对互助美德的珍视，以及对“家”的极致守护。每一个图案都不是随意的装饰，而是承载着祝福、记忆与信仰的护身符。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当游客漫步在瓜尔达静谧的街巷，惊叹于“瑞士最美村庄”的如画景色时，所见的远非一个精致的旅游标本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你看到的，是一个民族在战火后的<strong>美学抗争</strong>，是欧洲语言活化石在崖壁上的<strong>最后倔强</strong>，是两位先贤用一生书写的<strong>文化遗嘱</strong>。每一幅斑驳的刮画，都是历史的一页；每一句依然回响在街角的罗曼什语问候，都是穿越时间的古老回声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓜尔达的珍贵，在于它从未真正“沉睡”。它始终清醒地扮演着“守护者”的角色，守护着一种即将消逝的语言，一种濒临失传的技艺，一种与阿尔卑斯山共呼吸的生活方式。它让你相信，在全球化洪流中，仍有一些地方，固执地用自己古老的韵律，吟唱着独特的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂瓜尔达，便是读懂一种深沉而坚韧的“地方精神”。它不张扬，却足以撼动人心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/appenzell-traditional-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿彭策尔传统村落</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Appenzell</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fribourg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗里堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fribourg Old Town</p>
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
