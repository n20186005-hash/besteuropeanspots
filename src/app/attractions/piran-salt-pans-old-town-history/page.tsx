import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮兰历史溯源｜亚得里亚海盐都，威尼斯魅影与塔蒂尼琴声交织的前世今生',
  description: '探寻斯洛文尼亚皮兰：一座被盐晶浸润千年的海边古城。从威尼斯共和国辉煌到“魔鬼的颤音”，跟随历史向导，解密盐田、城墙与小巷里的尘封传奇。',
}

export default function PiranSaltPansOldTownHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '皮兰盐田与老城', href: '/attractions/piran-salt-pans-old-town-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮兰盐田与老城・Piran・斯洛文尼亚・皮兰`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在斯洛文尼亚短短的海岸线上，皮兰是一座被时光遗忘的“微型威尼斯”。但它的底色，不是水城的浪漫，而是海盐的粗粝与坚韧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>盐，是这座小城流淌千年的白色血液，也是它所有故事的起点。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有圣马可广场的喧嚣，只有塔尔蒂尼广场的琴声悠扬。狭窄的石巷蜿蜒向上，最终通向圣乔治教堂的钟楼，那里悬挂着一口铸造于<strong>1477年</strong>的古老铜钟。站在钟楼下，目光所及是棋盘格般的古老盐田、红瓦屋顶与蔚蓝亚得里亚海构成的绝美画卷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进皮兰的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮兰盐田与老城`} />
                <InfoRow label="英文名称" value={`Piran`} />
                <InfoRow label="正式名称" value={`Piran`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`皮兰`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "皮兰的故事，始于海，成于盐。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字源头充满灼热感，很可能来自希腊语的 <strong>“pyr”</strong>，意为“火”。这并非指火山，而是指引航的灯塔之火。早在古罗马时代之前，伊斯特拉半岛的岬角上就已有点燃的烽火，为往来于的里雅斯特湾与威尼斯之间的船只指引方向。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>公元7世纪左右</strong>，斯拉夫人开始在此定居。但他们并非最早的开发者。盐，才是这片土地的真正“原住民”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "得益于浅海湾、强烈日照与干燥的布拉风，海水在这里自然蒸发结晶，形成了宝贵的盐。于是，围绕盐田，一个社区逐渐成型。最初的皮兰，更像一个功能性的盐业码头和渔村。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1278年</strong>，是皮兰命运的决定性年份。强大的威尼斯共和国，垂涎这里的盐业财富和战略位置，正式将皮兰纳入麾下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯人不仅带来了圣马可飞狮的旗帜，更将一整套成熟的城市治理模式、防御体系和建筑美学，“粘贴”到了这个半岛尖端。从那一刻起，皮兰的城市基因里，便深深烙下了<strong>威尼斯</strong>的印记。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不再只是一个产盐的据点，而成为了威尼斯共和国在伊斯特拉半岛北部最重要的前哨之一。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "威尼斯共和国长达<strong>425年</strong>的统治，是皮兰城市肌理与灵魂的铸造期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣乔治教堂的钟楼，几乎就是威尼斯圣马可钟楼的微缩翻版。市政厅墙面上的<strong>圣马可飞狮浮雕</strong>，至今爪下仍按着一本打开的书，象征着和平时期的统治。蜿蜒的街道布局、密集的连排房屋、带有哥特式窗户的宫殿，无一不诉说着那段“亚得里亚海女王”的往事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "盐，则是这段历史的经济基石。威尼斯将盐业垄断，皮兰的盐被运往内陆，换取粮食与货物，构成了一个稳固的经济循环。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“盐场的白色黄金，是我们城墙的根基，也是共和国国库的珍宝。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 摘自一份16世纪的威尼斯总督府文件" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的浪潮总是起伏不定。<strong>1797年</strong>，随着威尼斯共和国的崩溃，皮兰像一颗被抛出的棋子，先后经历了拿破仑帝国、奥匈帝国的统治。每一次政权更迭，都伴随着盐业管理权的易手。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正戏剧性的一幕，发生在<strong>1918年</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一次世界大战结束，奥匈帝国解体。意大利军队根据秘密条约，即将接管皮兰。就在这关键时刻，一群当地渔民与水手，在一名斯洛文尼亚军官的带领下，进行了一次大胆的“突袭”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们趁着夜色，划着小船，用渔网和绳索，偷偷将停泊在港口的奥匈帝国军舰“耶尔卡”号拖走，藏匿起来，并降下了奥匈旗帜，升起了南斯拉夫王国的旗帜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个充满民间智慧的事件，史称 <strong>“罗网事件”</strong>。它虽未根本改变战后条约的安排（皮兰最终仍被意大利控制），却成为了斯洛文尼亚民族意识觉醒的象征，为二战后皮兰最终归属斯洛文尼亚埋下了伏笔。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在皮兰，一位名人的身影无处不在。他的雕像矗立在城市中心的广场上，广场以他命名，他的故居被辟为博物馆。他就是<strong>朱塞佩·塔蒂尼</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1692年4月8日</strong>，塔蒂尼出生在皮兰一栋普通的住宅里。他的父亲来自佛罗伦萨，是盐务局的官员。盐务官之子，这个出身注定了他与这座盐城最初的纽带。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，塔蒂尼的人生剧本开头并不顺遂。他被送往神学院学习，父母希望他成为教士，但他热爱的却是击剑和小提琴。父亲去世后，他转而进入帕多瓦大学学习法律，并迅速以精湛的剑术闻名，生活放荡不羁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一场与枢机主教侄女的秘密婚姻，让他惹上了官司，被迫逃离帕多瓦，隐姓埋名躲在阿西西的一座修道院中。<strong>恰恰是这段逃亡岁月，成就了他的音乐。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在修道院的宁静中，他潜心研究音乐理论与小提琴技法。传说，他正是在这里梦见了魔鬼。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“一夜，我梦见将灵魂出卖给魔鬼。他立即接手了我的小提琴，以无与伦比的精湛技艺演奏了一首奏鸣曲。那音乐如此美妙绝伦，超乎我一切想象……醒来后，我立即抓起琴，试图记下脑中残留的乐思。这便是那首《魔鬼的颤音》，但它比梦中听到的，相差何止千里！”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 据塔蒂尼晚年对天文学家拉朗德的叙述" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这首《魔鬼的颤音》奏鸣曲，让他名声大噪。他成为当时最杰出的小提琴家、作曲家和教育家。但<strong>皮兰，始终是他精神上的故乡</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "成名后，他曾多次尝试返回皮兰，甚至希望在此建立一所音乐学校。虽未完全如愿，但他对故乡慷慨解囊。他曾出资为圣乔治教堂的钟楼安装避雷针，并为城市的慈善事业捐款。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1740年</strong>，当他唯一的孩子在襁褓中夭折，他选择将孩子送回皮兰安葬。这或许是他与故乡最深切、最悲伤的情感联结。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，在塔尔蒂尼广场（原圣弗兰西斯广场）上，他的青铜雕像面朝大海，仿佛仍在聆听风中的旋律。他的故居博物馆里，陈列着他曾使用过的小提琴和乐谱手稿。对于这座小城而言，塔蒂尼不仅是伟大的音乐家，更是一个出走、挣扎、最终在精神上归来游子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的琴声，与海风、盐粒一起，构成了皮兰永恒的背景音。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了名人的“魔鬼之梦”，皮兰的盐田本身，也孕育着更古老、更质朴的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在塞切涅盐场工作的，传统上多是女性盐工，她们被称为 <strong>“盐场女工”</strong>。她们的故事与汗水，渗入了每一粒盐晶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "有一个美丽的传说，解释了皮兰盐场特有的<strong>粉红色泽</strong>的由来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "很久以前，盐场里有一位名叫玛丽亚的年轻女工，她有着月光般的银发和晚霞似的红唇。她爱上了海对面的一位年轻渔夫。每晚，她都在盐田边的石头上，痴痴眺望大海，等待爱人的帆影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "不幸的消息传来，渔夫在一次风暴中葬身大海。玛丽亚悲痛欲绝，她的眼泪如断线的珍珠，日日夜夜流淌不尽。她的泪滴落入盐田的卤水池中，与正在结晶的盐融为一体。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，皮兰盐场产出的盐，便带上了一抹淡淡的、忧伤的粉红色。人们说，那是玛丽亚的眼泪与爱情，是思念的颜色。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们的盐是甜的，因为里面有女人的泪和望夫的心。”" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "—— 当地流传的古老盐工谚语" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说，赋予了这种珍贵海盐一层浪漫的人文滤镜。它不再是冰冷的商品，而是承载着情感与记忆的结晶。至今，当地一些老人仍相信，用这粉红色的盐烹饪食物，会带来温暖与慰藉。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的皮兰，是一座活的历史博物馆。它的每一层肌理——<strong>威尼斯的城市规划、奥匈的港口设施、斯拉夫的文化内核</strong>——都清晰可辨。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在石板路上，你触摸的是威尼斯商船卸货的码头石阶；你仰望的钟楼，曾为归航的盐船报时；你耳边掠过的风，曾吹过塔蒂尼练习小提琴的窗前。而远处那一片片几何形状的盐田，仍在阳光下闪烁着古老的微光，那是这座城市千年不变的心跳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂皮兰，便是读懂一部微缩的<strong>亚得里亚海边疆史</strong>。它关乎生存的智慧（制盐），关乎强权的博弈（威尼斯），关乎文化的交融（拉丁与斯拉夫），更关乎个体在历史洪流中的创造与眷恋（塔蒂尼）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里没有宏大的叙事，只有被盐渍浸透的、具体而微的生活史诗。它提醒我们，历史不仅存在于宫殿与战场，更存在于每一粒盐、每一块石头、每一段流传于巷尾的旋律与传说之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/novo-mesto-slovenia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺沃梅斯托</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Novo Mesto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/postojna-cave" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波斯托伊纳溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Postojna Cave</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/skocjan-caves" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    什
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">什科茨扬溶洞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Škocjan Caves</p>
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
