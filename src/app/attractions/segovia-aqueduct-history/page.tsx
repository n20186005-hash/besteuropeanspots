import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞哥维亚历史溯源｜罗马水道桥的千年传奇，女王加冕地与神秘主义之城',
  description: '探寻塞哥维亚的千年层叠史诗。从罗马帝国的工程奇迹，到天主教双王的权力中心，再到圣十字若望的精神故乡。一座被水道桥定义的石头之城。',
}

export default function SegoviaAqueductHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '塞哥维亚', href: '/destinations/europe' },
            { label: '塞哥维亚罗马水道桥', href: '/attractions/segovia-aqueduct-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塞哥维亚罗马水道桥・Segovia・西班牙・塞哥维亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在卡斯蒂利亚荒原的嶙峋岩石上，一座城市如战舰般昂首。它的脊梁，是<strong>两千年前</strong>罗马人用花岗岩砌成的空中水道；它的王冠，见证了<strong>伊莎贝拉一世</strong>加冕为卡斯提尔女王；它的灵魂，孕育了西班牙最深邃的神秘主义诗人。这里不是马德里，也不是巴塞罗那，它是塞哥维亚——一座将水利工程升华为文明图腾的史诗之城。抛开游玩攻略，走进塞哥维亚的尘封往事，遇见属于它的石头、王权与神思。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塞哥维亚罗马水道桥`} />
                <InfoRow label="英文名称" value={`Segovia`} />
                <InfoRow label="正式名称" value={`Segovia`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`塞哥维亚`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塞哥维亚的起源，深埋在伊比利亚半岛混血的土壤里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，一说源于凯尔特语“<strong>Segobriga</strong>”，意为“胜利之城”。另一说则与拉丁语“<strong>Secovia</strong>”有关，意指“干旱之地”。无论哪种，都精准预言了它的命运：一座在<strong>高耸岩石</strong>上建立、并最终以辉煌“胜利”征服时光的堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在史前时代，此处险峻的岩石山脊就吸引了先民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但城市的真正奠基，要归功于<strong>罗马人</strong>。约公元1世纪左右，罗马帝国为巩固对半岛中部的统治，在此建立军事据点。他们看中了这块<strong>海拔超1000米</strong>的天然平台，易守难攻，且控制着杜罗河流域的要道。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，岩石之上，最大的挑战是<strong>水源</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市的生命线远在十几公里外的富恩夫里亚山脉。于是，一项雄心勃勃的工程启动了。罗马工程师决定，不是将水引上来，而是让水“飞”过来。这就是传奇的<strong>罗马水道桥</strong>诞生的最现实、也最伟大的理由。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市，因一座桥而诞生，也因一座桥而不朽。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一道印记：罗马的脊梁（约公元1-2世纪）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座水道桥，是塞哥维亚不可撼动的第一道历史刻痕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它并非为观赏而建，而是纯粹的<strong>功能性杰作</strong>。全长<strong>728米</strong>，最高处<strong>28.5米</strong>，由<strong>167个拱门</strong>、超过<strong>2万块</strong>未经任何粘合剂的花岗岩石块砌成。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我们征服自然，不是用暴力，而是用几何与毅力。”——一位不知名的罗马工程师可能如此想过。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的建造，意味着罗马的秩序、技术与“文明生活”（包括公共浴场、喷泉）被强行注入了这片荒原。它让岩石上的军事堡垒，升格为一座<strong>自给自足的城市</strong>。更惊人的是，直到<strong>20世纪中期</strong>，它仍在为城市的部分区域输水。这不仅是建筑，这是一条流动了<strong>两千年的生命动脉</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二道印记：文明的层叠（8-15世纪）</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马之后，<strong>西哥特人</strong>的到来并未抹去它的痕迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元8世纪，<strong>摩尔人</strong>的北征浪潮席卷伊比利亚。塞哥维亚未能幸免，但征服者同样惊叹于这座罗马奇迹，并称其为“<strong>魔鬼之桥</strong>”（这个传说我们稍后详述）。摩尔人时期，城市增添了<strong>复杂的街巷体系</strong>和<strong>阿拉伯浴室</strong>的遗迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折在<strong>1085年</strong>，阿方索六世国王率军从摩尔人手中<strong>收复</strong>塞哥维亚。自此，它成为卡斯蒂利亚王国通往北方的战略重镇。<strong>天主教双王</strong>时代，这里迎来巅峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1474年12月13日</strong>，在塞哥维亚的主广场（今马约尔广场），一位女性在一众贵族注视下，于圣米盖尔教堂前加冕。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她就是<strong>伊莎贝拉一世</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的命运，从此与西班牙的统一和黄金时代的开启紧密相连。她的加冕地，至今仍是城市的心脏。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果说水道桥是塞哥维亚的<strong>骨骼</strong>，那么一位瘦弱的修士，则为它注入了深沉的<strong>灵魂</strong>。他就是<strong>圣十字若望</strong>（San Juan de la Cruz，1542-1591）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非生于斯，却在这里经历了精神的淬炼与囚禁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1. 神秘的囚徒与灵感的迸发</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1577年</strong>，当时的圣十字若望还叫<strong>胡安·德·耶佩斯</strong>。他是特蕾莎修女宗教改革的坚定支持者，这触怒了保守的加尔默罗会。12月的一个寒夜，他在阿维拉被绑架，押送至塞哥维亚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他被囚禁在<strong>加尔默罗修道院</strong>一个狭小、阴暗、污秽的地牢里，长达<strong>九个月</strong>。每周仅公开羞辱三次，饮食粗劣，备受折磨。然而，正是在这极度的黑暗中，他完成了部分不朽诗篇的创作，包括《灵歌》与《暗夜》。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在我深藏的暗夜，在我渴望的爱火中，哦，幸福的机遇！我悄然出走，我的屋舍已归于沉寂。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些诗句，被认为是西班牙神秘主义文学的巅峰。塞哥维亚的地牢，成了他灵魂“暗夜”的具象，也成了他遇见神性之光的密室。如今，这座修道院仍保留着那间囚室，供人默想那段在苦难中绽放的灵性史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>2. 与城市的最终羁绊</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1591年，在生命的最后阶段，他再次回到塞哥维亚，担任修道院的院长。同年12月14日，他在<strong>乌韦达</strong>去世。但根据他的遗愿，遗体被秘密运回塞哥维亚，安葬在<strong>他深爱的这座山城</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的墓穴，至今保存在塞哥维亚的<strong>圣十字若望修道院</strong>。这位“没有影子的诗人”，最终将他的影子，永远留在了水道桥投下的巨大光阴里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>另一位不得不提的“名人”，是一个传奇的家族悲剧：拉腊七公子。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这并非一人，而是一则贯穿中世纪的悲壮传说。故事围绕<strong>拉腊家族</strong>的几位年轻领主展开，其中最著名的是在<strong>14世纪</strong>与国王佩德罗一世对抗而惨遭灭门的七位公子。传说中，他们的母亲在塞哥维亚的城墙边日夜哭泣。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“哦，塞哥维亚的城墙，你们看到我的儿子们了吗？”——民歌中如此传唱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个传说被编成民谣，在西班牙广泛流传，成为了<strong>卡斯蒂利亚骑士精神与悲剧命运</strong>的象征。它赋予了塞哥维亚一种<strong>悲怆而崇高的底色</strong>，提醒人们这座石头之城不仅是权力的舞台，也是命运祭坛。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "宏伟的罗马水道桥，在民间想象中，其起源超越了凡人的能力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的传说是“<strong>魔鬼的交易</strong>”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事说，很久以前，一位塞哥维亚的少女，厌倦了每日下山去河边取水的艰辛。魔鬼出现，提出一个交易：他将在<strong>一夜之间</strong>建成一座将水引入城中的大桥，代价是<strong>在公鸡打鸣前，收取少女的灵魂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "少女答应了。魔鬼召集地下之力，巨石飞舞，拱门以惊人的速度拔地而起。就在大桥即将合拢、魔鬼伸手攫取少女灵魂的千钧一发之际，少女虔诚的祈祷惊动了圣母。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣母让一只公鸡<strong>提前打鸣</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "魔鬼误以为天明，交易失败，愤怒地弃桥而去。因此，传说水道桥最顶端（原计划安放魔鬼雕像处）永远留下了<strong>两个空洞</strong>，那是魔鬼功亏一篑的印记。这个传说，巧妙地将工程的非凡归于超自然力量，又用信仰的胜利做了符合天主教价值观的收尾。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则与<strong>拉腊七公子</strong>的悲剧相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "据说，七公子被处决后，他们的母亲<strong>多娜·布兰卡</strong>在塞哥维亚的“<strong>贵妇塔</strong>”上，夜夜点燃七支蜡烛，眺望远方，直至眼泪流干，心碎而亡。至今，有人说在特定夜晚，仍能看到塔楼上有微弱的烛光闪烁。这些传说，让塞哥维亚的石头不仅承载历史，也浸满了泪水与叹息。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行走在塞哥维亚，你并非走在一座普通的旅游城市。你行走在一部<strong>立体的石质编年史</strong>上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "脚下，是<strong>罗马帝国</strong>的工程意志与无上荣光；身旁，是<strong>摩尔人</strong>留下的迷宫街巷与浴室氤氲；眼前，是<strong>天主教双王</strong>时期哥特尖塔直指苍穹的信仰力量；而空气中，仿佛还回荡着<strong>圣十字若望</strong>在暗夜中吟诵的诗句。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城最深刻的隐喻，正是那座水道桥。它沉默、坚固、跨越巨大的虚空，将生命之源从遥远的山巅引至人间。这何尝不是文明本身的写照？在时光的荒原上，人类用智慧、信仰、权力乃至血泪，构建起沟通理想与现实、神圣与凡俗的“水道桥”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塞哥维亚告诉你，伟大的目的地从不只提供风景。它提供<strong>文明的断层样本</strong>，提供<strong>灵魂挣扎的现场</strong>，提供一种穿越千年、依然在汩汩流动的生命力。读懂它的历史，你看到的将不再只是一座惊人的建筑，而是一个民族记忆的脊梁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？水道桥最佳观景点、阿尔卡萨城堡秘径、烤乳猪百年老店，完整交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/la-alberca" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉阿尔韦卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">La Alberca</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/garrovillas-de-alconetar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    加
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">加罗维利亚斯-德阿尔科内塔尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Garrovillas de Alconétar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rupit-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁皮特（悬崖上的火山岩小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rupit</p>
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
