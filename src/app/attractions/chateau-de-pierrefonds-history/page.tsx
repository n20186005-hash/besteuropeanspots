import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮埃尔丰城堡历史溯源｜从废墟到童话，一座城堡的前世今生与建筑传奇',
  description: '皮埃尔丰城堡：一座被黎塞留摧毁、由拿破仑三世复活的中世纪堡垒。深入其从军事要塞到皇家寓所，再到影视传奇的戏剧性命运，揭开建筑大师维奥莱-勒-杜克的修复史诗。',
}

export default function ChateauDePierrefondsHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '皮埃尔丰城堡', href: '/attractions/chateau-de-pierrefonds-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮埃尔丰城堡・Château de Pierrefonds・法国・瓦兹省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在巴黎东北方静谧的贡比涅森林边缘，矗立着一座仿佛从童话书中直接走出的梦幻城堡。锯齿状的高塔、华丽的雕塑、以及倒映在湖中的完美倒影，让它成为无数电影与幻想的取景地。然而，这份近乎“不真实”的完美之下，隐藏着一段更为曲折的真实历史——摧毁、遗忘、以及一场充满争议的“创造性修复”。抛开游玩攻略，走进皮埃尔丰城堡的尘封往事，遇见属于它的毁灭、重生与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮埃尔丰城堡`} />
                <InfoRow label="英文名称" value={`Château de Pierrefonds`} />
                <InfoRow label="正式名称" value={`Château de Pierrefonds`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`瓦兹省`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "皮埃尔丰的根源，深植于法兰西王权与贵族纠葛的土壤中。这片土地最初吸引人建造防御工事的原因，是其俯瞰拉尼翁山谷与古老罗马道路交汇处的战略位置。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最早的堡垒记录出现在<strong>12世纪</strong>，属于皮埃尔丰领主。但真正改变其命运的，是<strong>1392年</strong>的一场王室交易。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，法王<strong>查理六世</strong>将这片领地赐予了他的弟弟——<strong>路易·德·奥尔良</strong>。这位有权势的公爵，急需一个能彰显其地位、并震慑潜在对手的坚固据点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，在<strong>1396年至1400年间</strong>，一座全新的、具有当时最先进防御理念的城堡拔地而起。它的名字“Pierrefonds”（意为“石头地基”或“石泉”），很可能源于当地裸露的巨岩或水源。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城堡最初的用途绝非浪漫。它是奥尔良家族在北方的重要军事堡垒和政治筹码，厚重的墙体与深邃的壕沟，诉说着百年战争阴影下的不安与野心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的诞生，标志着一个强大公国在此地的具象化，也为其未来数个世纪的动荡命运，埋下了伏笔。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "皮埃尔丰城堡的历史，并非一部连续的辉煌史诗，而是一段被漫长沉寂割裂的“断代史”。其核心印记，铭刻于两次截然相反的皇家意志。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个关键转折点，发生在<strong>17世纪</strong>。此时，城堡已归波旁王朝的孔代亲王所有。然而，在<strong>路易十三</strong>的铁腕首相<strong>黎塞留枢机主教</strong>眼中，它成了一个巨大的威胁。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“必须摧毁国内所有大贵族的堡垒，他们只需保留通向城门大道的入口作为装饰，以此剥夺他们反叛国王和危害国家的手段。” —— 黎塞留的政治理念" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1617年</strong>，在镇压贵族叛乱后，黎塞留下令系统性地拆除这座强大的堡垒。工程持续了数月，城墙被炸开，主塔被掏空，屋顶坍塌。城堡没有完全被抹去，但被精心地“去功能化”，沦为一片庞大而悲壮的废墟，在森林中沉睡了超过两百年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的第二次生命，源于一个帝国皇帝的怀旧梦。<strong>19世纪中叶</strong>，<strong>拿破仑三世</strong>迷恋中世纪历史，尤其钟情于贡比涅森林作为皇家狩猎场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1857年</strong>，皇帝偶然造访这片浪漫的废墟，立刻被其规模和气势吸引。他萌生了一个宏大想法：不仅修复它，更要将其打造成一个兼具皇家寓所与博物馆功能的“中世纪帝国住所”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，他委托了当时最具才华也最具争议的建筑师——<strong>欧仁·维奥莱-勒-杜克</strong>。这项工程，成为了维奥莱-勒-杜克建筑哲学最极致的实践场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天看到的皮埃尔丰，绝大部分是这次浩大“修复”（实为重建）的成果。它并非精确还原14世纪的原始面貌，而是一位19世纪天才建筑师，基于废墟遗址和中世纪原则，所创造的一个“理想中世纪”的完美典范。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "若要理解今日皮埃尔丰城堡的灵魂，一位人物的名字必须被深刻铭记：<strong>欧仁·维奥莱-勒-杜克</strong>。他并非城堡的建造者，却是其命运的“再造之神”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>维奥莱-勒-杜克</strong>生于<strong>1814年</strong>，是法国哥特复兴运动的旗手，也是一位杰出的理论家。他的核心理念是“风格统一”与“理性修复”。他认为，修复一座古建筑不是机械地修补，而是理解其最初建造者的逻辑与时代精神，并让建筑以“完整”的状态存续下去。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1858年</strong>，接手皮埃尔丰项目后，他面临的是一个史诗级的挑战：黎塞留留下的，是近乎地基的残骸。皇帝拿破仑三世给他的指示也极为模糊：建造一座“帝国居所”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维奥莱-勒-杜克的回应是大胆的。他没有拘泥于考古学的精确，而是将废墟视为创作的画布。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他保留了原始布局和主要塔楼的位置，但用自己天才的想象力，填充了所有缺失的部分。他设计了那个令人过目不忘的、布满人物雕塑的雄伟主立面。他创造了内部那些融合了中世纪形式与19世纪铸铁新技术的华丽大厅。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这座建筑应该呈现出它从未有过的样子：既是一座要塞，又是一座皇家宫殿……我们不是在修复一座旧城堡，我们是在创造一件艺术品。” —— 维奥莱-勒-杜克的工作笔记折射出的理念" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城堡内部，处处可见他的“签名”。骑士厅的拱顶、帝王画廊的彩窗、乃至每个壁炉上的雕刻细节，都体现了他对中世纪装饰体系的精深研究和重新演绎。他甚至为拿破仑三世设计了一个充满奇思妙想的“宝座厅”，将帝国的象征（如蜜蜂）与中世纪元素巧妙结合。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，他的工作也引来了巨大争议。纯粹主义者批评他“发明历史”，创造了一个“虚假的”中世纪。但无可否认，他赋予了皮埃尔丰第二次生命，并将其提升到了建筑象征的高度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他与城堡的羁绊持续了约<strong>25年</strong>，直到<strong>1879年</strong>他去世，工程仍未彻底完结。皮埃尔丰，成了他一生理论的终极丰碑，一个19世纪关于中世纪最盛大、最华丽的梦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位与城堡有短暂交集的名人，是<strong>拿破仑三世</strong>的皇后<strong>欧仁妮</strong>。她积极参与了城堡内部装饰的讨论，尤其偏爱新文艺复兴风格的舒适与奢华。城堡内一些更显温馨的客厅与卧房，反映了她与皇帝丈夫在“中世纪幻梦”中对现代生活品质的坚持。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在维奥莱-勒-杜克用起重机与图纸“唤醒”它之前，皮埃尔丰城堡的废墟在民间传说中，早已是一个充满生命力的存在。它不再是奥尔良公爵的堡垒，而是化为了自然与神秘的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地最著名的传说，将其形容为一个“沉睡的石头巨人”。故事说，城堡并非被摧毁，而是被一位魔法师施以咒语，陷入了深沉的睡眠。高塔是他的角，城墙是他蜷缩的身躯，破损的窗户是他闭合的眼睛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说中，当月光洒在特定的塔楼上，或是森林中响起某种古老的旋律时，石头会微微颤动，巨人会在梦中低语。他要等待一个“真命之王”的到来，才能彻底破除咒语，让城堡连同里面的珍宝与骑士一起复活。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“老人们常说，在万圣节的夜晚，你能听到废墟里传来金属的摩擦声和遥远的号角声，那是被石化骑士们的幽灵，仍在进行着永恒的巡逻。” —— 摘自当地民俗收集记录" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个“沉睡巨人”的传说，与城堡后来被拿破仑三世“发现”并“复活”的历史，产生了惊人的巧合与互文。在民众的叙事里，拿破仑三世仿佛正是那个传说中的“真命之王”，而维奥莱-勒-杜克则是那位执行复活术的“现代魔法师”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此外，关于城堡地下秘道的传说也经久不衰。相传有多条密道从城堡地窖通往森林深处甚至远处的村庄，这既是战争中逃生与突袭的实用设计，也在传说中成为了精灵、盗匪或秘密恋人穿梭往来的神秘通道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，为冰冷的石头注入了地方的集体想象力，也让后来那场声势浩大的修复工程，在民众心中多了一层“命中注定”的神话色彩。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当我们站在皮埃尔丰城堡的护城河边，仰望它那无懈可击的童话天际线时，我们读到的，远不止一座中世纪堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是一份关于“如何对待历史”的19世纪宣言书。它见证了从考古式保存到创造性修复的观念演变，也承载了那个时代对中世纪浪漫主义的全部憧憬与想象。它的价值，恰恰在于它的“不纯粹”——它既是14世纪的遗骸，也是19世纪的创作，是两段辉煌历史在时空中的一次大胆对话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "同时，它也是一座建筑哲学的丰碑。维奥莱-勒-杜克在这里实践的，不仅是技术，更是一种让古老形式在现代重获生命力的思考。皮埃尔丰因此超越了单纯的旅游景点，成为建筑史与文化遗产保护领域一个永恒的案例。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从《梅林传奇》的中世纪魔法王国，到《游客》的惊险场景，它在影视作品中的频繁现身，恰恰证明了这种“理想的、戏剧性的中世纪”形象，如何精准地击中了现代人的集体潜意识。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂皮埃尔丰，便是读懂历史层累的复杂性，欣赏人类在面对废墟时，那种不甘于遗忘、试图与往昔对话并赋予其新生的永恒冲动。它提醒我们，最动人的传奇，往往诞生于毁灭与重生之间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、内部打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tournemire-auvergne-volcano-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图尔讷米尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tournemire</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-chalon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙托沙隆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château-Chalon</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bergheim-alsace-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝尔盖姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bergheim</p>
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
