import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '博福尔历史溯源｜城堡遗址的前世今生与领主传奇',
  description: '探索卢森堡博福尔双重城堡的千年层叠史诗。从骑士传说、炼金秘闻到战争伤痕，一段被巨石封印的边疆史。',
}

export default function BeaufortCastlesHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '博福尔城堡遗址', href: '/attractions/beaufort-castles-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`博福尔城堡遗址・Beaufort Castles・卢森堡・博福尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卢森堡东部绵延的穆勒塔尔山谷深处，一片庞然的废墟静卧于林间。它并非一座城堡，而是两座——中世纪的军事要塞与文艺复兴的贵族宫殿，在相同的地基上前后叠加，宛如一部以石头写就的“地层史书”。这里的故事，远比其残缺的外观更为完整。<strong>博福尔</strong>，这个名字意为“美丽的堡垒”，但其千年历程交织着铁血、野心、炼金术的迷雾与最终的寂灭。抛开游玩攻略，走进博福尔的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`博福尔城堡遗址`} />
                <InfoRow label="英文名称" value={`Beaufort Castles`} />
                <InfoRow label="正式名称" value={`Beaufort Castles`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`博福尔`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "博福尔的起源，紧密绑定在这座城堡的基石之上。大约在<strong>1150年</strong>左右，第一块基石被埋下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那时，卢森堡地区处于神圣罗马帝国的边缘，诸侯林立。城堡最初的建造者已湮没无名，但其目的清晰无比：军事控制。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它扼守着一条连接阿尔泽特河与绍尔河的古商道，这片被称为“卢森堡小瑞士”的险峻峡谷地带，是天然的防御阵地与权力支点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“博福尔”这个名字本身，就揭示了它的本质。它源自古法语，由“beau”（美丽）和“fort”（坚固、堡垒）复合而成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种命名方式在当时极为典型，既彰显了领主对领地的自豪，也直白宣告了其军事属性——一座坚固而令人瞩目的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的城堡极其朴素，甚至粗糙。核心是一座高大的方形主塔（塔楼），辅以坚固的围墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的一切设计都服务于瞭望、警戒和抵御小型武装冲突。这里没有舒适可言，只有生存与威慑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在接下来的一个世纪里，随着领主家族的更迭与巩固，城堡逐步扩建，增加了居住空间与小教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但它的底色始终未变：一座矗立于边疆地带、用以宣告主权与收取过路费的军事哨所。它的“美丽”，在于其不可征服的态势。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转，石头上镌刻下决定性的印记。第一个重大转折发生在<strong>1348年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那一年，城堡的领主<strong>瓦勒朗·德·博福尔</strong>做出了一项关键决定。他将家族遗产分割，把博福尔城堡授予了他的弟弟<strong>亨利</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一分家行为，正式确立了“博福尔领主”这一独立支系。城堡从此不再仅仅是某个大贵族家族的边缘财产。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它成为了一个独立政治实体的核心。博福尔家族以此为根基，开始了长达数百年对周边领土的统治，其影响力渗透到司法、经济与日常生活的方方面面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，则来自毁灭性的<strong>三十年战争（1618-1648）</strong>。这场席卷欧洲的宗教与权力混战，将偏远的博福尔也卷入其中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1635年</strong>，城堡遭到了法国元帅<strong>德·费基埃</strong>率领的部队的围攻。此时的城堡虽经加固，但面对正规军的火炮，中世纪的高墙已显脆弱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这场围城，一个流传甚广的说法是，城堡的陷落并非完全因为武力。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "有民间故事讲述，守军的指挥官因为个人恩怨，故意向法国人透露了一条通往城堡厨房的隐秘水道，导致了最终的失守。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论真相如何，城堡被攻占并遭到了系统性的破坏。塔楼被炸塌，部分墙体被推倒，以确保其无法再被用作军事据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场战争是博福尔作为军事堡垒功能的终结。它被遗弃，逐渐沦为采石场，当地居民搬走其石材用于建造房舍。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到<strong>十九世纪</strong>，浪漫主义思潮兴起，人们才开始用新的眼光审视这片废墟，视其为承载历史与诗歌的纪念地，而非无用的破石头堆。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在博福尔漫长的领主名单中，<strong>让·德·贝克（约1470-1539）</strong> 的身影格外突出。他并非生来就是博福尔的主人，而是通过婚姻，在<strong>1509年</strong>成为了这里的领主。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的上任，标志着一个新时代的开启。让·德·贝克是一位典型的文艺复兴时期的贵族——富有、有教养、追求舒适与美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他对那座阴冷、粗糙的中世纪堡垒感到不满。于是，他做了一件大胆的事：他没有拆掉旧堡，而是在其旁边，紧贴着老墙，开始建造一座全新的、时尚的宫殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是如今我们看到的新堡（文艺复兴堡）的由来。新堡拥有宽阔的、光线充足的窗户，优雅的弧形门廊，以及装饰性的山墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "内部设计有宽敞的大厅、精美的壁炉和相对私密的居住空间。这一切与旁边那座仅有狭小箭窗的方形主塔形成了鲜明对比。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让·德·贝克不仅建造宫殿，他还热衷于一项更神秘的事业：炼金术。城堡的地下室，至今保留着据说是他使用的炼金术士作坊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "那里有巨大的砖砌炉灶、通风管道和石质工作台。在那个年代，炼金术并非纯粹的迷信，它处于原始化学、哲学探索和对财富权势渴望的交汇点。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一份十六世纪的记录曾隐晦地提及：“博福尔的领主在城堡深处进行伟大的工作，寻求物质的转化与灵魂的提炼。”这无疑为让·德·贝克和这座城堡笼罩上了一层神秘面纱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的野心最终超出了他的财力。庞大的建筑工程耗尽了资源，据说他甚至抵押了部分领地。但他留下的新堡，成为了博福尔从纯粹军事据点向贵族生活中心转型的永恒见证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位不得不提的人物，是更早的<strong>贝特朗·德·博福尔</strong>。关于他的记载更偏向传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他生活在<strong>十二世纪末</strong>，是一位虔诚而好战的骑士。史料称，他变卖了大量家产，追随第三次十字军东征，前往圣地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他于<strong>1190年</strong>离开，从此再也没有回来。他的命运成了一个谜——是战死沙场，是病故异乡，还是遭遇了其他不测？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的失踪对博福尔家族是一个沉重打击，导致了短暂的继承危机。但他的故事化为了传奇，成为城堡骑士精神与悲剧色彩的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地传说中，他是一位被承诺将荣归故里的英雄，而他的幽灵，或许仍在守护着这片他未能再见的家园。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了领主与骑士的史实，博福尔的石头间还回荡着更缥缈的传说。最著名的故事，关乎那位一去不返的十字军骑士，<strong>贝特朗·德·博福尔</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说在他出发前，曾有一位神秘的隐士预言：他将会在圣地取得巨大荣耀，但博福尔家族的血脉也将因他的离去而面临断绝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在他失踪多年后，一个风雨交加的夜晚，城堡的守卫声称看到了一个身披破旧十字军罩袍的幽灵，在废墟的城墙上徘徊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它既不说话，也不攻击人，只是凝视着东方日出的方向。人们相信，那是贝特朗无法安息的灵魂，仍在等待完成誓言，或者是在警示后人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与城堡下的地牢有关。那里被称为“遗忘之坑”，是一个深邃的天然岩洞改造的监狱。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "老居民们会压低声音说：“千万不要在满月时靠近废墟，特别是那个深坑。你会听到里面传来不是风声的呜咽，那是几个世纪以来被遗忘的囚徒，还在祈求一口水，一缕光。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，与炼金术士的秘闻交织在一起，构成了博福尔独特的民间叙事。它不再只是一座权力的纪念碑，更是一个充满了未解之谜、等待与赎罪故事的地方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年特定的时日，当地还会有老人讲述关于城堡“金母鸡”的故事——据说在城堡最辉煌的时期，地底藏着一只金母鸡和小鸡，守护着家族的财富，而在城堡没落后，它们便遁入山体深处，等待真正的有德之人将其发现。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当访客站在博福尔的双重废墟前，所见的是一部立体而破碎的编年史。旧堡的蛮石诉说着边疆的残酷与生存的必须；新堡的残窗断垣，则低吟着文艺复兴时代对美与舒适的向往，以及随之而来的人性贪婪与财政深渊。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有单一的故事线，只有层层叠加的命运：军事的、政治的、个人的、神秘的。每一块崩落的楣石，每一处熏黑的壁炉，都是某个决定性瞬间的沉默证词。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂博福尔，便是读懂欧洲封建缩影的完整周期——从崛起到鼎盛，从转型到猝然的崩塌，最终在时间的尘埃中化为供人凭吊的诗篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史并非光滑的叙事，而是充满了个人选择、意外转折与未竟梦想的复杂构造。这片废墟的价值，正在于它保留了所有这些矛盾的层次，拒绝被简单地定义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ansembourg-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    安
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">安森堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ansembourg Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/hollenfels-castle-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍伦费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hollenfels Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/consdorf-kuelescheier" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔斯多夫（骑士裂缝）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Consdorf (Kuelscheier)</p>
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
