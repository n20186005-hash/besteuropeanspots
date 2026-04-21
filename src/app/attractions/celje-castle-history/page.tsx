import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '采列城堡历史溯源｜从塞尔维亚爵到城市之母的前世今生',
  description: '穿越七百年，探秘斯洛文尼亚“城市之母”采列城堡。不仅是最大城堡遗址，更是权谋、联姻与帝国兴衰的见证者。一段尘封的欧洲贵族传奇，在此苏醒。',
}

export default function CeljeCastleHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '斯洛文尼亚', href: '/destinations/europe' },
            { label: '萨维尼亚大区', href: '/destinations/europe' },
            { label: '采列城堡', href: '/attractions/celje-castle-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`采列城堡・Celje Castle・斯洛文尼亚・萨维尼亚大区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在中欧起伏的绿色山丘上，<strong>采列城堡（Celje Castle）</strong> 的巍峨废墟，并非只是一处壮观的景点。它是这个国家名字的源头，一整个时代的代号，更是一部用石头写就的权力史诗。这里曾居住着叱咤风云的<strong>塞尔维亚爵（Counts of Cilli）</strong>，他们的血脉曾与哈布斯堡王朝纠缠，野心曾撼动神圣罗马帝国的棋局。如今，断壁残垣间回荡的不只是风声，更是帝国梦碎的回响。抛开游玩攻略，走进采列的尘封往事，遇见属于它的野心、爱情与时光传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`采列城堡`} />
                <InfoRow label="英文名称" value={`Celje Castle`} />
                <InfoRow label="正式名称" value={`Celje Castle`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`萨维尼亚大区`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采列城堡的雏形，深埋在12世纪的迷雾之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的建造者已不可考，但它的崛起，与一个地名紧紧相连：<strong>“采列（Celje）”</strong>。这个名字的渊源，比城堡本身更为古老。主流观点认为，它源自凯尔特语“<em>Kelea</em>”，意为“避难所”或“隐匿之地”。这精准地描述了它的地理——坐落在萨维尼亚河畔陡峭的山丘上，易守难攻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，城堡命运真正的转折点，发生在<strong>14世纪</strong>。当时，这片土地属于施潘海姆王朝的支系。<strong>1322年</strong>，采列被哈布斯堡王朝的奥地利公爵<strong>腓特烈一世</strong>提升为“市镇”，获得了重要的自治权与贸易特权。但这只是序曲。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的城市缔造者，是后来入主此地的<strong>塞尔维亚爵家族</strong>。他们并非本地土著，而是来自今天德国巴伐利亚地区的权贵。通过精明的联姻与政治投机，他们在14世纪中叶获得了采列及其周边广袤领地。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古老的文献记载，塞尔维亚爵们将这座原有的、相对简陋的堡垒，视为他们统治野心的“基石与冠冕”。他们开始不计成本地扩建、加固，将其从一个军事据点，改造为兼具奢华宫殿与强大防御功能的家族权力中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一座庞大的、由多个部分连绵组成的城堡建筑群，在山巅逐渐成型。它不再是简单的“避难所”，而成了一个王朝向外辐射影响力的心脏。这座城市，也因城堡主人的显赫，而被世人以“采列”之名铭记。城堡，成了城市的“母亲”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采列城堡的每一块砖石，都浸染着塞尔维亚爵家族极盛与骤衰的戏剧性历史。两大印记，定义了它的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记一：塞尔维亚爵的黄金时代与帝国野心</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "15世纪上半叶，是采列城堡最辉煌的时期。在伯爵<strong>赫尔曼二世</strong>的统治下，家族权势达到巅峰。他们拥有堪比王侯的财富，领地横跨今日斯洛文尼亚、克罗地亚、波斯尼亚的广阔区域。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "赫尔曼二世的野心远不止做一个地方诸侯。他通过一系列精妙的联姻，将家族血脉编织进欧洲最顶层的权力网络。其中最关键的一步，是将女儿<strong>芭芭拉</strong>嫁给了神圣罗马帝国皇帝<strong>西吉斯蒙德</strong>。塞尔维亚爵一跃成为皇帝的岳父，获封“帝国亲王”，甚至一度被考虑列为皇位继承人。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当时的编年史家写道：“采列的旗帜在帝国宫廷中飘扬，其伯爵的话语，在国王们的议会上举足轻重。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡在这一时期经历了最后一次，也是最宏伟的扩建。新增的哥特式宫殿极尽奢华，巨大的厅堂用于接待各国使节，高耸的塔楼宣示着无上权威。采列城堡，成了中欧政治版图上一个不可忽视的权力坐标。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>印记二：血脉断绝与“陨落的星辰”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "极盛之后，是戏剧性的崩塌。塞尔维亚爵家族的人丁意外地单薄，且深陷仇杀与阴谋。<strong>1456年</strong>，家族的末代男性继承人<strong>乌尔里希二世</strong>，在贝尔格莱德附近被刺杀。随着他的死亡，这个叱咤风云的家族男性血脉<strong>骤然断绝</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "根据之前的继承协议，庞大的遗产落入其表亲——强大的<strong>哈布斯堡家族</strong>手中。一夜之间，采列城堡失去了它的主人，它的灵魂。它从一方诸侯的都城，降格为哈布斯堡帝国一个普通行省的行政官邸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "失去政治意义的城堡在后续几个世纪里逐渐荒废。特别是在<strong>17世纪</strong>对抗奥斯曼帝国的战争中受损后，它被彻底废弃，石材被附近居民拆走用于建房。昔日辉煌的宫殿，最终沦为今日所见的浪漫主义废墟。它的衰败，如同一颗帝国的星辰骤然陨落，徒留遗迹供人凭吊。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在采列城堡的历史星图中，有两位人物如同双子星，光芒最为耀眼，命运也最为纠葛：父亲<strong>赫尔曼二世</strong>与女儿<strong>芭芭拉</strong>。他们的故事，是城堡权谋与悲剧最生动的注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>赫尔曼二世：精于算计的造王者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>赫尔曼二世</strong>并非一个典型的骑士贵族，他首先是一个冷酷、精明且耐心极佳的政治家。他于<strong>1385年</strong>成为塞尔维亚爵首领，并执政近半个世纪。他的核心战略只有两个字：<strong>联姻</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他如同下棋般安排子女的婚姻。长子与波兰王室联姻，次子娶了波斯尼亚公主。而最成功的一步棋，落在了小女儿<strong>芭芭拉</strong>身上。当时的神圣罗马皇帝<strong>西吉斯蒙德</strong>年长芭芭拉数十岁，且因胡斯战争焦头烂额，急需盟友和支持。赫尔曼二世抓住了这个机会。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "同时代的人评价赫尔曼：“他拥有狐狸的狡猾和狮子的野心。他用女儿的婚姻，为家族买下了一张通往帝国王座的、最昂贵的彩票。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这场婚姻在<strong>1408年</strong>达成。芭芭拉成为皇后，赫尔曼二世则获得了无与伦比的影响力。他甚至利用皇帝的宠信，清除了家族内部的政敌（包括自己的侄子），巩固了绝对权力。在赫尔曼的统治下，采列城堡不仅是家园，更是他运筹帷幄、构建帝国关系网的指挥中心。每一块新增的城砖，都凝结着他的野心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>芭芭拉：从囚徒到皇后，再到悲剧的祖母</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说赫尔曼是布局者，那么<strong>芭芭拉</strong>就是那颗被命运反复拨弄的棋子，最终却走出了令人唏嘘的轨迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的早年并不幸福。在嫁给西吉斯蒙德之前，她曾因家族政治斗争，被父亲囚禁在采列城堡的塔楼中数年之久。那段幽暗的岁月，在她性格中刻下了坚韧与隐忍。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "成为皇后之后，她并未获得幸福的婚姻生活。西吉斯蒙德常年奔波，且风流成性。芭芭拉的大部分时光，或许正是在采列城堡而非维也纳宫廷中度过的。她唯一的孩子——女儿<strong>伊丽莎白</strong>，成了她全部的希望与寄托。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她将伊丽莎白许配给了奥地利大公<strong>阿尔布雷希特五世</strong>（后来的德意志国王阿尔布雷希特二世）。这一次联姻再次成功了，伊丽莎白生下了<strong>拉迪斯劳斯</strong>，这个男孩身兼匈牙利、波希米亚王位，是哈布斯堡王朝的关键继承人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，悲剧接踵而至。阿尔布雷希特早逝，幼小的拉迪斯劳斯（人称“遗腹子”）需要监护人。芭芭拉挺身而出，为外孙的权位奋力斗争。但命运没有眷顾她。<strong>1451年</strong>，就在拉迪斯劳斯继承波希米亚王位后不久，<strong>芭芭拉在梅尔克修道院突然去世</strong>，死因可疑，传闻是被政敌毒杀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她没能看到家族的最终结局。仅仅五年后，她的兄弟乌尔里希二世遇刺，塞尔维亚爵家族绝嗣。芭芭拉一生，从城堡囚徒到帝国皇后，再到为外孙呕心沥血的守护者，其个人命运与家族、王朝的兴衰死死捆绑。她既是联姻策略的产物，也是其最关键的践行者与悲剧承受者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>另一位不可忽视的人物是弗里德里希二世</strong>，赫尔曼的次子。他是著名的“龙骑士团”成员，以勇武著称，在与奥斯曼帝国的战斗中战功赫赫。他的形象，为这个以权谋著称的家族，增添了一丝骑士精神的传奇色彩，他的铠甲与事迹，曾是城堡大厅里被传颂的故事。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宏伟的废墟，总是滋生传说的沃土。采列城堡也不例外，其中最著名、最凄美的，是关于<strong>“金发伯爵夫人”</strong> 的幽灵传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，在塞尔维亚爵时代，城堡里住着一位名叫<strong>薇罗妮卡</strong>的伯爵夫人。她不仅以惊人的美貌闻名，更拥有一头阳光般的璀璨金发。然而，她的命运与一笔隐秘的宝藏相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，城堡地下深处埋藏着一条丰富的<strong>金矿</strong>脉，这是家族财富的秘密来源之一。伯爵夫人是唯一知晓金矿具体入口和开采秘密的人。在战乱或家族危机时，敌人围困城堡，企图夺取黄金。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "民间故事这样讲述结局：“当敌人的火把照亮塔楼阶梯时，高傲的伯爵夫人没有选择屈服。她站在最高的城垛上，当着所有人的面，剪下了自己珍若生命的金色长发，将其抛入深渊。随后，她纵身一跃，与自己守护的秘密一同陨落。从此，金矿的入口再也无人找到。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，自此以后，每当月圆之夜，或是暴风雨来临前，城堡的废墟上就会出现一个身穿白衣、长发飘散的女子身影。她无声地徘徊在断壁残垣间，仿佛仍在守护着那个失落的秘密。游客们有时会说，在古老的水井边，能听到隐约的、金属碰撞的声响，那是幽灵伯爵夫人仍在清点她永不现世的黄金。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说将美丽、忠诚、悲剧与财富的神秘感融为一体，为冰冷的石头废墟注入了人性的温度与浪漫的哀愁，至今仍被当地人津津乐道。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们攀上采列山丘，漫步于这片斯洛文尼亚规模最大的城堡遗址群，触摸那些斑驳的罗马式地基、威严的哥特式窗棂残迹，我们所感知的，远不止建筑的美学。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一部立体而磅礴的<strong>石头编年史</strong>。它记录了从边疆堡垒到诸侯都城，再到帝国弃子的完整生命轨迹。它见证了<strong>塞尔维亚爵家族</strong>如何凭借惊人的政治智慧攀上权力之巅，又因命运的残酷玩笑而瞬间湮灭。在这里，我们能直观感受到中世纪欧洲的权力逻辑：联姻、继承、战争与突如其来的终结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采列城堡的独特魅力，正在于这种<strong>未完成的史诗感</strong>。它没有以完美修缮的宫殿面貌示人，而是以坦然的废墟姿态，将历史的断层与沧桑直接呈现在你面前。风穿过没有屋顶的大厅，仿佛能听到昔日的议政喧哗与宴饮笙歌；站在瞭望塔上俯瞰整个采列市，你会真切理解“城市之母”的含义——脚下的现代城市，正是从那颗早已停止跳动的权力心脏蔓延生长而来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂采列，便是读懂了中欧一小部波澜壮阔的贵族兴衰史。它提醒我们，在欧洲，许多看似宁静的小城，都曾拥有一个撼动时代的姓氏，和一段足以改写地图的往事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bovec-slovenia-alpine-adventure" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    博
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">博韦茨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bovec</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/celje-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采列城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Celje Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/logar-valley-slovenia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛加尔山谷</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Logar Valley</p>
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
