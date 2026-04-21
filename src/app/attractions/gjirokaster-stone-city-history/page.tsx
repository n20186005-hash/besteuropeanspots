import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '吉诺卡斯特历史溯源｜“千阶之城”的前世今生，从奥斯曼堡垒到霍查故乡的传奇故事',
  description: '探索阿尔巴尼亚南部被遗忘的“石头之城”。走进**恩维尔·霍查**的故乡，聆听奥斯曼贵族宅邸的低语，揭开这座世界遗产迷宫街巷中封存的拜占庭、奥斯曼与冷战历史层。',
}

export default function GjirokasterStoneCityHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '阿尔巴尼亚', href: '/destinations/europe' },
            { label: '吉诺卡斯特', href: '/destinations/europe' },
            { label: '吉诺卡斯特（千阶之城）', href: '/attractions/gjirokaster-stone-city-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`吉诺卡斯特（千阶之城）・Gjirokastër・阿尔巴尼亚・吉诺卡斯特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在阿尔巴尼亚南部险峻的山峦褶皱里，藏着一座用灰白色石灰岩“生长”出来的城市。它不是典型的欧洲童话小镇，而是一座冷峻、坚硬、布满阶梯的堡垒。这里是<strong>吉诺卡斯特</strong>，人称“千阶之城”或“石头之城”。它的历史，就像其脚下陡峭的坡地一样，充满了剧烈的转折与沉重的沉积。从拜占庭的边陲要塞，到奥斯曼帝国的繁华中心，再到二十世纪共产主义强人的故乡与“样板”，每一块石板都压着一段沉默的往事。抛开游玩攻略，走进<strong>吉诺卡斯特</strong>的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`吉诺卡斯特（千阶之城）`} />
                <InfoRow label="英文名称" value={`Gjirokastër`} />
                <InfoRow label="正式名称" value={`Gjirokastër`} />
                <InfoRow label="国家" value={`阿尔巴尼亚`} />
                <InfoRow label="城市" value={`吉诺卡斯特`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>吉诺卡斯特</strong>的起源深埋在传说与断壁残垣之中。城市的雏形大约在公元<strong>六世纪</strong>开始显现，当时它只是拜占庭帝国边境一座不起眼的据点，俯瞰着德里纳河谷。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字 <strong>Gjirokastër</strong> 本身就是一个历史谜题。最广为接受的解释，源于希腊语 <strong>“Argyro kastron”</strong>，意为“<strong>银堡</strong>”。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地传说讲述，一位名叫<strong>阿金</strong>（Argjiro）的公主，在城堡被敌人攻破时，宁愿抱着孩子从高墙跃下，也不愿受辱。城市便以她的名字命名，作为不屈的象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论传说真假，这个名字精准地概括了它的两大特质：<strong>“银”</strong>可能指代附近山区的矿产资源，或是冬日阳光下灰白色石板屋顶泛出的冷冽光泽；<strong>“堡”</strong>则定义了它的本质——一座为防御而生的山巅堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的城市肌理，是在<strong>奥斯曼帝国</strong>统治时期（约1417年起）被塑造的。帝国看中了其易守难攻的战略位置，将之发展为重要的行政与军事中心。山丘顶部的城堡被大规模扩建，而贵族、军官和富商们则在陡峭的山坡上，依照严格的奥斯曼城镇规划，修建起一座又一座独具特色的宅邸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些宅邸，被称为 <strong>“Kullë”</strong>（塔楼式房屋）。它们用巨大的石块垒砌，底层用作仓库和马厩，上层是生活空间，拥有坚固的围墙和细小的射击孔，既是家园，也是微型堡垒。正是这些层层叠叠、共用墙壁的石头建筑，构成了吉诺卡斯特迷宫般的街巷和无数陡峭的石阶，赋予了它“千阶之城”的物理形态与灵魂。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "吉诺卡斯特的历史并非线性叙事，而是一场在帝国夹缝与时代剧变中的艰难生存。几大印记，深深镌刻在它的石墙之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个核心印记，是<strong>奥斯曼帝国近五百年的统治</strong>。这并非一段黯淡岁月，反而塑造了城市的文化巅峰。吉诺卡斯特成为了一片肥沃的土壤，诞生了独特的<strong>阿尔巴尼亚“贝伊”阶层</strong>（地方贵族）。这些权贵家族，如<strong>泽卡泰家族</strong>、<strong>安杰利纳家族</strong>，在城市中建造了宏大的宅邸（如今天的<strong>泽卡泰之家</strong>、<strong>安杰利纳之家</strong>）。建筑融合了奥斯曼的恢宏与阿尔巴尼亚山地的防御需求，内部装饰着精美的壁画和华丽的木雕天花板，见证了阿尔巴尼亚民族意识在帝国框架内的萌芽与繁荣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个决定性的印记，是<strong>二十世纪的战争与政权更迭</strong>。<strong>1912年</strong>，阿尔巴尼亚宣布独立，吉诺卡斯特首次成为现代国家的一部分，经历了短暂的希望。然而，真正的动荡接踵而至。<strong>第一次世界大战</strong>期间，它被希腊军队占领。<strong>第二次世界大战</strong>时，又先后落入意大利和德国之手。城市的山顶<strong>城堡</strong>，其角色几经转换：从中世纪堡垒，到奥斯曼兵营，再到<strong>二战期间</strong>被意大利和德国用作监狱，最后在<strong>共产主义时期</strong>被改建为<strong>国家武器博物馆</strong>。这座城堡本身，就是一部浓缩的、多功能的政治军事史。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "在城堡阴冷的地下室，曾关押过无数政治犯。有囚犯在墙壁上刻下：“石头记得，即使人们选择遗忘。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最具戏剧性的历史印记，莫过于它成为<strong>共产主义阿尔巴尼亚的“模范城市”</strong>。这源于它与一位人物的深刻绑定——<strong>恩维尔·霍查</strong>。作为霍查的故乡，吉诺卡斯特在战后被刻意地“博物馆化”和“圣化”。1961年，它被宣布为“<strong>博物馆之城</strong>”，大量奥斯曼时期宅邸被收归国有、修复，但同时也被抽离了原有的生活气息，变成展示“民族遗产”和“革命历史”的冰冷布景。城市的历史被精心裁剪，只为服务于唯一的主流叙事。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "吉诺卡斯特的名人谱系复杂而矛盾，其中最无法回避的，是那位定义了这个国家二十世纪下半叶的人物——<strong>恩维尔·霍查</strong>。而他与故乡的关系，堪称一部充满悖论的戏剧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>恩维尔·霍查（1908-1985）</strong>，这位统治阿尔巴尼亚近四十年、缔造了欧洲最孤立斯大林主义政权的强人，于<strong>1908年10月16日</strong>出生在吉诺卡斯特一座典型的“Kullë”石头宅邸中（即今天的<strong>恩维尔·霍查故居博物馆</strong>）。他的家庭属于中产阶级，父亲是游走各地的布商。少年霍查在这座迷宫般的石头城里穿行，在城堡的阴影下玩耍，或许也感受到了这座边境城市特有的警惕与封闭气质。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这位“最著名的儿子”对故乡的感情与改造，却极为复杂。掌权后，霍查的政权将吉诺卡斯特塑造为“<strong>革命圣地</strong>”。他的出生地被精心修复并开放为博物馆，成为全国意识形态教育的朝圣点。城市被彻底“清洁”，所有与奥斯曼或宗教相关的“落后”痕迹被系统地抹去或重新解释。教堂被关闭，清真寺的尖塔被拆除，而历史宅邸则被赋予“人民建筑遗产”的新标签。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "一位吉诺卡斯特的老居民回忆：“他们（政府人员）告诉我们，要为我们伟大的儿子感到骄傲。但他们修葺房屋外墙时，却禁止我们按照传统习俗在屋内生活。房子成了展品，我们成了里面的幽灵。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更具讽刺意味的是，霍查政权推行的极端孤立政策——“<strong>堡垒阿尔巴尼亚</strong>”——其精神内核，竟与吉诺卡斯特这座物理上的堡垒城市如此相似：对外界深深的不信任，对自给自足的偏执追求，以及将自身置于险峻高处的防御心态。故乡的地理特征，似乎隐喻了他治国哲学的雏形。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除却霍查，另一位值得书写的名人是<strong>卡齐姆·科利希（1844-1917）</strong>。他是阿尔巴尼亚<strong>民族复兴运动</strong>的关键人物，一位作家、记者和政治活动家。科利希出生于吉诺卡斯特一个富裕家庭，一生致力于阿尔巴尼亚的语言统一和文化独立运动，反抗奥斯曼的统治以及希腊的领土主张。他在伊斯坦布尔创办了重要的阿尔巴尼亚语报纸，为现代阿尔巴尼亚语的标准化奠定了基础。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与霍查不同，科利希代表着吉诺卡斯特的另一种传统：不是封闭与恐惧，而是开放与启蒙。他试图用笔和思想，为阿尔巴尼亚寻找一条融入现代世界而非与之隔绝的道路。他的故居如今也得到保留，与霍查的故居相距不远，仿佛这座城市精神内部两种截然不同力量的无声对话：一种是内向的、防御性的堡垒心态；另一种是外向的、寻求对话与表达的复兴精神。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在坚硬的石板和沉重的历史之下，吉诺卡斯特的血肉是由无数民间传说编织的。这些故事在炉火边、在井台旁代代相传，为石头注入了温度与灵性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最著名的传说，围绕着城市的建立者——<strong>公主阿金</strong>（Argjiro）。故事说，在奥斯曼帝国征服者的军队兵临城下时，城堡的守卫者全部战死，只剩下了公主和她的婴孩。面对必然的屈辱，她做出了惊人之举。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我的身体和灵魂，都将属于这片我祖先的土地，而不是征服者的帐篷。” 传说中她如此说道。随后，她身着盛装，怀抱幼儿，从城堡最高的塔楼纵身跃下。据说，在她坠落的地方，山石崩裂，涌出了泉水。人们为了纪念她的贞烈与骄傲，将这座城市命名为<strong>阿金的城堡</strong>（Argyro kastron），即吉诺卡斯特。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个悲剧英雄式的传说，深刻反映了阿尔巴尼亚民族性格中核心的准则——<strong>“Besa”</strong>（信诺、荣誉）与宁死不屈的气节。它让这座堡垒的每一块石头，都仿佛沾染了悲壮的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则更贴近日常生活，解释了吉诺卡斯特建筑的一个独特细节：许多老宅的窗户上，都有向外突出的、带格栅的木质悬窗。当地人称之为 <strong>“Xham e qarë”</strong>，意为 <strong>“哭泣之窗”</strong> 或 <strong>“悲伤之窗”</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "相传，在奥斯曼时期，深居简出的妇女们生活受限。她们不能随意走上街头，只能透过这种悬窗的格栅，窥探外部世界。她们在这里目送丈夫远行，在这里守望儿子归来，也在这里默默流泪，将自己的孤独与哀愁，注入木纹之中。因此，每当风吹过这些窗格，发出的呜咽声，便被人们说成是古时女子的低泣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无论是壮烈的还是哀婉的，都构成了吉诺卡斯特人文底蕴中不可或缺的部分。它们让参观者在触摸冰冷石墙时，能“听”到数百年的低语与叹息。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的吉诺卡斯特，在2005年以“罕见的奥斯曼时期山城典范”之名被列入<strong>世界文化遗产</strong>名录后，正试图在历史的重负与旅游的开发间寻找新的平衡。行走在它的千级石阶上，你踏过的不仅是路面，更是层层叠压的时间：拜占庭的基岩、奥斯曼的繁华、战争的创伤、冷战铁幕的冰冷，以及后共产主义时代探寻身份的努力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂吉诺卡斯特，意味着理解一种 <strong>“在地的坚韧”</strong>。它的历史不是宫殿与教堂的辉煌史诗，而是关于<strong>生存、适应与记忆</strong>的故事。这座城市本身就是一座<strong>露天的历史档案馆</strong>，档案的材质是石头，索引是纵横的阶梯，而内容则是阿尔巴尼亚这个国家近代所有矛盾与挣扎的微观宇宙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史从未真正过去。它被砌进墙里，刻在台阶上，回荡在“悲伤之窗”的风声中。在这里，旅行不再是轻松的风景消费，而成了一次深刻的<strong>地质学式的时间勘探</strong>。每一座沉默的“Kullë”，都是等待被解读的密码本，诉说着荣耀、苦难、封闭与对自由从未熄灭的、复杂的渴望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/shkoder-rozafa-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯库台</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Shkodër</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/berat-thousand-windows" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    培
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">培拉特（千窗之城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Berat</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/theth-albania" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    泰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">泰斯隐修村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Theth</p>
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
