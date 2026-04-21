import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦沃城堡历史溯源｜阿登高地沉睡的骑士血脉与童话尖顶的建筑传奇',
  description: '探秘比利时“睡美人城堡”。沉睡阿登高地七百年，历经战火与重建，博福特家族的骑士血脉在此流淌。走进尖顶之下的真实中世纪。',
}

export default function CastleOfVevesCellesHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '比利时', href: '/destinations/europe' },
            { label: '那慕尔省', href: '/destinations/europe' },
            { label: '韦沃城堡', href: '/attractions/castle-of-veves-celles-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`韦沃城堡・Castle of Vêves (Celles)・比利时・那慕尔省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在比利时瓦隆阿登高地的密林深处，韦沃城堡如同一枚从童话书中跌落的印章，其标志性的尖顶塔楼与严密防御，勾勒出中世纪军事与居住功能的完美范本。然而，比其哈利波特场景般的外观更迷人的，是自<strong>1427年</strong>起便与此地血脉相连的<strong>博福特家族</strong>。他们世代守护，让石头不仅记录战争，也铭刻下家族的荣耀、毁灭与重生。抛开游玩攻略，走进<strong>韦沃城堡</strong>的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`韦沃城堡`} />
                <InfoRow label="英文名称" value={`Castle of Vêves (Celles)`} />
                <InfoRow label="正式名称" value={`Castle of Vêves (Celles)`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`那慕尔省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡所在的瑟勒村，其历史可追溯到更久远的墨洛温时代。传说早在<strong>7世纪</strong>，爱尔兰传教士<strong>圣徒哈德良</strong>曾在此隐居。地名“Celles”便源于拉丁语“cellae”，意为“隐修的小室”或“僧侣的居所”，暗示着这里最初的宗教静谧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而城堡的基石，则深深扎在封建割据的土壤里。最初的要塞可能建于<strong>12世纪</strong>，由当地领主用木材和粗糙石块垒筑，扼守着一条穿越阿登森林的重要路径。它的诞生无关风雅，纯粹为了生存与控制。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“Vêves”这个名字的来源充满神秘。一种主流观点认为，它与古法语词“<em>veve</em>”或“<em>veuve</em>”（意为寡妇）有关。这可能指向某位继承并守护此地的贵族遗孀。另一种推测则联系到附近的河流或地形特征。名字本身，就是一个等待解读的历史密码。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与那些几经易主、身份模糊的古堡不同，韦沃从<strong>15世纪</strong>起，其命运就与一个家族紧密捆绑——<strong>博福特家族</strong>。他们并非凭空降临，而是通过精明的联姻与继承，将这座战略堡垒变成了家族权力的核心象征。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡经历的第一次重大命运转折，发生在<strong>1427年</strong>。那一年，让娜·德·博福特征服了这座城堡，正式将其纳入家族版图。这不是一次简单的房产过户，而是一个延续至今的传奇的开端。博福特家族的血脉从此注入城堡的石墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，中世纪的宁静总是短暂。城堡所处的战略位置，使其在<strong>17世纪</strong>的欧洲战火中无法幸免。<strong>1690年</strong>，法国国王<strong>路易十四</strong>的军队横扫南尼德兰（今比利时），著名的“拉罗什战役”在这一带打响。战火蔓延至韦沃。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位当时的目击者可能在日记中哀叹：“那些法国兵像蝗虫一样涌来。我们引以为傲的塔楼，在炮火中呻吟。领主大厅的彩窗碎裂，珍贵的挂毯被夺走或焚毁。浓烟遮蔽了尖顶，仿佛天空都在为这座古老的房子哭泣。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡在战役中严重受损。但家族的韧性远超想象。毁灭带来了重生的契机。进入相对和平的<strong>18世纪</strong>，城堡迎来了它历史上最华丽的一次蜕变。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "主导这次重建的，是<strong>玛丽·德·拉马克伯爵夫人</strong>。她深受当时法国洛可可风格的影响，决定在古老的中世纪骨架之上，注入优雅与舒适的时代气息。高耸的尖顶塔楼被保留并加固，那是家族威严与军事传统的宣言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而在内部，阴暗的骑士大厅变得明亮，精美的灰泥装饰、大理石壁炉和大型玻璃窗被引入。城堡从一个冷峻的防御工事，转变为一个适宜居住的贵族府邸。这次重建，是旧世界与新世界的精彩对话，石头记录了从“战斗”到“生活”的侧重点转移。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要理解韦沃城堡的灵魂，必须认识两位与之生死相依的家族成员。他们不是欧洲史教科书上的常客，却是这座城堡真正的“造梦者”与“守夜人”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一位，是前文提到的<strong>18世纪重建者——玛丽·德·拉马克伯爵夫人</strong>。她并非博福特家族的直系，而是通过婚姻成为城堡的女主人。在那个女性权力受限的时代，她展现出了非凡的决断力与艺术品味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛丽夫人主持的重建工程，不仅仅是修复，更是一次大胆的现代化改造。她保留了城堡标志性的中世纪外观——那些令人生畏的塔楼和垛口，以此宣示家族悠久的历史与地位。同时，她在内部创造了截然不同的世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她聘请工匠，用轻盈的曲线、金色的点缀、柔和的色彩，覆盖了原先石头的冰冷。巨大的窗户被打开，将阿登高地的绿意引入室内。她的沙龙成为当地文化与思想交流的微型中心。更重要的是，她系统地整理和保存了家族档案与文物，为后世留下了珍贵的历史拼图。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "玛丽夫人让韦沃城堡完成了关键的进化：从一个可能被战火遗弃的军事遗迹，转变为一个承载着生活艺术、家族记忆与社交功能的传世之家。她为城堡注入了“家”的温度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二位关键人物，出现在<strong>19世纪末</strong>。他是<strong>埃德蒙·德·拉马克伯爵</strong>。如果说玛丽夫人让城堡“活”了下来，那么埃德蒙伯爵则让它“醒”了过来，并找到了面向未来的存在方式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃德蒙伯爵是一位典型的浪漫主义时代贵族，对历史、谱系学和艺术品收藏充满热情。他敏锐地意识到，工业革命时代，许多类似的古堡正在迅速衰败或消失。他决心将韦沃城堡打造为家族历史的圣殿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他投入巨资进行了一次大规模、考究的修复。这次修复并非凭空想象，而是基于严谨的历史研究。他仔细修复了中世纪部分的建筑细节，加固了结构，并开始系统地收集与家族、地区历史相关的古董家具、武器、挂毯和绘画。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "埃德蒙伯爵曾在信件中写道：“每一件盔甲都曾护佑过一位祖先，每一幅肖像都沉默地讲述着一个时代。我的责任，就是让这些声音不被尘土掩埋，让来访者能听见石头与橡木的低语。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的收藏奠定了今日城堡内部博物馆般的陈设基础。更前瞻性的是，他或许已经朦胧地意识到，这样的遗产未来将具有公共价值。在他和后续继承者的努力下，韦沃城堡没有沦为私人宅邸或废墟，而是逐渐向公众敞开大门，成为一座“活着的”历史博物馆。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如同所有古老的城堡，韦沃的墙壁间也萦绕着口耳相传的传说，为其真实历史披上一层神秘的面纱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说与城堡的起源相关。故事说，最初在这里定居的领主，曾得到一位名叫<strong>巴扬</strong>的巨人铁匠的帮助。这位巨人拥有超凡的力量，能搬运巨大的石块，城堡最初的地基就是在他的神力下快速完成的。作为回报，领主赐予了他森林中的一片土地。这个传说无疑是对古代建设者艰难劳作的一种神话式致敬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个流传的故事则关于城堡的地窖。据说，那里囚禁着一位古老骑士的幽灵。他因背叛誓言而被诅咒，永远守卫着城堡地下的一条秘密通道。这条通道据说通往数公里外的另一座修道院，曾在战乱时期用于秘密转移人员或珍宝。虽然从未被现代勘探证实，但这个传说为城堡的防御功能增添了奇幻色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地村民还相信，在每年仲夏夜（圣约翰之夜），城堡最高的尖顶上会闪烁奇异的光芒。有人说那是古代守护精灵在巡视领地，也有人认为那是被埋葬的宝藏所发出的光。这些传说，无论是巨人、幽灵还是宝藏，都使得韦沃城堡不仅是历史的载体，也成为了集体想象和民间故事的容器，让它在人们心中超越了砖石本身，成为一种文化符号。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们驻足于韦沃城堡童话般的尖塔下，所看到的远不止一处拍照打卡的背景。它是欧洲封建史的一个微观切片，是军事建筑向居住艺术演变的鲜活标本。更难得的是，它是一部由<strong>同一个家族书写并守护了六个世纪</strong>的连续编年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里的每一块石头，都经历了<strong>1427年</strong>的继承、<strong>1690年</strong>的战火、<strong>18世纪</strong>的优雅重建与<strong>19世纪</strong>的浪漫复兴。它没有被革命彻底摧毁，也未在世界大战中化为齑粉，更未被商业过度侵蚀。它以一种近乎奇迹的连续性，将中世纪的血脉悄然延续至今。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "游览韦沃，便是在阅读一部“活态”的家族史诗。你触碰的扶手，可能被<strong>玛丽伯爵夫人</strong>轻抚过；你仰望的盔甲，曾是<strong>埃德蒙伯爵</strong>精心擦拭的收藏。这种跨越时空的直接连接，是在那些更大、更著名但已机构化的博物馆式城堡里难以体验的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史并非总是轰轰烈烈的王朝更替，也体现在一个家族对一处家园世代不移的承诺里。这或许，正是这座阿登高地“睡美人”最深沉、最动人的人文魅力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/binche-belgium-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班什</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Binche</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kasteel-de-viron-dilbeek" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪尔贝克维龙城堡（如同童话插画般的都铎风格佛兰德斯庄园）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel De Viron</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/veves-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    韦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">韦沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castle of Vêves</p>
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
