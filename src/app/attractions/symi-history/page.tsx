import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡米岛历史溯源｜海绵、沉船与拜占庭圣像，爱琴海隐秘小岛的前世今生',
  description: '探寻锡米岛不为人知的千年历史：从古希腊神话到中世纪沉船宝藏，从拜占庭圣像画师到奥斯曼海绵贸易，一座爱琴海小岛的完整人文拼图。',
}

export default function SymiHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '锡米岛（市镇）', href: '/destinations/europe' },
            { label: '锡米岛', href: '/attractions/symi-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡米岛・Symi・希腊・锡米岛（市镇）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在爱琴海东南部，罗德岛附近，有一座小岛，它的历史并非由大理石神庙谱写，而是浸泡在海水的咸涩与颜料的芬芳里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里曾是拜占庭帝国最神圣的圣像画中心之一，画笔点染过天堂的轮廓。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里也曾是奥斯曼帝国海绵贸易的“白金”心脏，潜水员的命运与深渊紧密相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事，交织着神性、财富与大海无情的叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "抛开游玩攻略，走进锡米岛的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡米岛`} />
                <InfoRow label="英文名称" value={`Symi`} />
                <InfoRow label="正式名称" value={`Symi`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`锡米岛（市镇）`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡米岛的名字，轻盈如神话。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一种说法认为它源于海洋女神<strong>忒提斯</strong>的女儿，一位名为<strong>绪弥</strong>的仙女。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更被广泛接受的观点是，其名源自希腊语词根 <strong>“Sym-”</strong> ，意为“一起”、“共同”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这巧妙地描绘了它那被群山环抱、宛如“汇聚”在一起的天然良港——<strong>锡米港</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "早在荷马史诗《伊利亚特》中，锡米岛就已现身。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它被列为特洛伊战争中，跟随罗德岛之王参战的岛屿之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "考古证据则将人类活动的踪迹推得更远。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但在信史中，多利亚人是这里最早的明确建设者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元前<strong>5世纪</strong>左右，他们在岛上建立了<strong>阿纳夫洛斯</strong>、<strong>克霍里奥</strong>和<strong>佩迪</strong>三座古城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“锡米”这个名字第一次被镌刻下来，是在一块公元前<strong>4世纪</strong>的罗德岛法令石碑上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座小城最初的命运，与强大的邻居罗德岛紧密绑定。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它长期作为罗德岛的附属城邦存在，为其提供熟练的水手与勇敢的士兵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这种从属关系，既是一种保护，也悄然奠定了它未来作为航海与贸易节点的基因。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "港口，从最初就是它生命的源泉。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡米岛的历史高光，出现在两个截然不同的领域：精神艺术与海洋经济。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一个印记，是<strong>拜占庭圣像画派的摇篮</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "公元<strong>7世纪</strong>后，随着阿拉伯势力扩张，地中海东部动荡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡米岛因相对偏远，成为许多虔诚信徒与修行者的避世之所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院如雨后春笋般在山间建立。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其中最重要的，是献给天使长<strong>米迦勒</strong>的<strong>大天使米迦勒修道院</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是在这些静谧的修道院工坊里，一种独特的圣像绘画技艺臻于成熟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拜占庭帝国毁坏圣像运动（<strong>726-843年</strong>）结束后，圣像艺术复兴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡米岛的画师们，以其细腻的笔触、深邃的情感表达和对金色背景的卓越运用而闻名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们被称为 <strong>“画师西米奥斯”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其作品不仅供奉于本地教堂，更通过爱琴海贸易网络，远播至克里特、塞浦路斯乃至巴尔干半岛。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "岛上的<strong>塔克西阿赫斯修道院</strong>至今珍藏的圣像，便是那段“流动的信仰艺术”时代的无声见证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第二个深刻印记，是<strong>奥斯曼时代的“海绵黄金”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>19世纪</strong>至<strong>20世纪初</strong>，锡米岛迎来了它物质财富的巅峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "岛民掌握了当时最先进的海绵自由潜水技术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年夏季，船队扬帆，前往北非沿岸的海绵渔场。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡米潜水员以无畏闻名，他们不借助任何现代设备，仅凭一口气潜入<strong>40米</strong>甚至更深的海底。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "采摘回来的海绵，经过复杂处理，成为欧洲上流社会沐浴与清洁的奢侈品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贸易为锡米带来了巨额财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今港口周边那些令人惊艳的<strong>新古典主义风格豪宅</strong>，色彩明丽，立面装饰精美，正是那个“白金时代”的遗产。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们由海绵商贾斥巨资修建，仿佛将整个威尼斯或热那亚的华丽立面搬到了爱琴海悬崖上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，财富的背后是生命的代价。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无数潜水员死于减压病（当时被称为“潜水员的麻痹”）或海难。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1900年</strong>左右，一场神秘的流行病更夺去了许多潜水员的视力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大海的馈赠与残酷，共同塑造了锡米的城市肌理与集体性格。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在锡米岛的名人星图中，最璀璨的一颗并非帝王将相，而是一位将灵魂注入颜料的画师。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他叫<strong>“画师西米奥斯”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这并非一个人的名字，而是一个流派，一个品牌，一个时代品质的保证。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但在众多画师中，<strong>伊奥尼斯·科尔纳罗斯</strong>的身影最为清晰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他生活在<strong>17世纪</strong>的锡米岛，正值岛上圣像画艺术传承的关键时期。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于他的生平记录稀少，但他的作品是他存在的丰碑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "科尔纳罗斯擅长创作大型圣像屏，他的画风严格遵循拜占庭传统，却又在人物的面部表情中注入了一丝人性的悲悯与温暖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他最著名的作品保存在罗德岛和塞浦路斯的教堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，在锡米岛本土，他的精神无处不在。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "相传，他曾在<strong>大天使米迦勒修道院</strong>的峭壁洞穴中独居修行，日夜面对大海祈祷，认为波涛的韵律即是神的语言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的调色盘上的蓝色，被当地人称为“锡米海蓝”，据说灵感正来自岛屿周围变幻莫测的海水。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ">" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“真正的圣像，不是画出来的，是祈祷出来的。每一笔都是忏悔，每一抹金都是对光的渴望。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "—— 后世根据“画师西米奥斯”传统训诫演绎的话语。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位传奇，则是一个群体——<strong>海绵贸易大王</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的名字大多湮没无闻，但他们的故事镌刻在每一栋豪宅的台阶上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "比如<strong>“船主斯特拉蒂斯”</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在<strong>19世纪80年代</strong>拥有岛上最大的海绵船队。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说他每次出海前，都会独自前往潘诺米蒂斯修道院，将一枚古银币奉献给圣母像，祈求船员平安。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的宅邸（现多为私人所有）有着全港最复杂的铁艺阳台，据说是为了让他足不出户就能眺望每一艘归航的船只。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一位匿名商人，则以他的“固执”闻名。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在所有人都用蒸汽船运输海绵时，他坚持使用老式帆船，认为“风是海神免费的馈赠，机器则是对大海的冒犯”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的生意最后衰落了，但他代表了旧时代海员与大海那份近乎神圣的契约关系。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些商贾的传奇不仅关于财富积累。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们也是最早将欧洲大陆的建筑风尚、生活方式乃至启蒙思想书籍带回岛屿的人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们修建了学校，赞助了教堂，在某种程度上，是他们用海绵换来的“白金”，塑造了近代锡米开放、精致又略带忧郁的独特气质。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "锡米岛的传说，总弥漫着海雾与叹息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最著名的莫过于 <strong>“卡洛利梅诺斯沉船”</strong> 的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在岛屿北部的卡洛利梅诺斯湾，水下深处躺着一艘古代沉船。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人传说，这并非普通的商船，而是一艘在<strong>拜占庭帝国晚期</strong>，运送圣像与教会珍宝前往君士坦丁堡的御用舰只。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它在风暴中迷失，被锡米岛的光芒（或许是灯塔）误导而触礁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: ">" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“圣像不愿离开诞生之地。是画中的天使亲手掀起了风暴，将船留在了锡米的海底。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "—— 岛上老渔民的口述传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "因此，潜水者有时会说在清澈的水下看到“金色的微光”，那便是沉睡的圣像在散发光辉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说与海绵潜水员紧密相关。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在潜水员聚居的<strong>霍里奥</strong>山区，有一种独特的习俗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "妻子们会在丈夫出海季节，在窗台放置一盏小小的<strong>油灯</strong>，灯油中混合了少许海水和从教堂得来的圣灰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这盏灯被称为“潜水员之星”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说它的光芒能穿透深海黑暗，为丈夫指引回家的方向，并驱散“深海恶灵”的纠缠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些恶灵，在传说中是古代海难者的怨魂，会故意缠住潜水员的脚踝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而灯中来自家乡教堂的圣物，是庇护他们的唯一法宝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到今天，在一些老房子的窗台，你依然能看到放置油灯的凹槽。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们沉默地诉说着一个个提心吊胆的夏日，以及海风中也吹不散的守望。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的锡米岛，安静、优雅，带着些许褪色的荣光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "新古典主义的豪宅外墙需要不断维护，修道院的钟声依旧按时响起，港口停泊的不再是海绵船队，而是载满游客的游艇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，当你走过<strong>锡米港</strong>的阶梯，触摸那些豪宅冰凉的大理石；当你仰望<strong>潘诺米蒂斯修道院</strong>那幅著名的《圣母安眠》圣像；当你凝视老咖啡馆里那些皮肤黝黑、眼神仿佛能望穿深海的老人的面孔时——历史的层次感便扑面而来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你看到的是一个将信仰化为艺术、将勇气化为财富、将大海的残酷与恩赐同时刻入骨髓的社区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的历史，是一部微缩的南爱琴海史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "没有波澜壮阔的帝国征战，却有关乎生存、信仰与匠心的持久回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂锡米，便是读懂爱琴海文明中，那份除了阳光古迹之外，更为深邃、坚韧与诗意的部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它提醒我们，历史不仅是王座的更迭，更是普通人用技艺、勇气与虔诚写就的生存诗篇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/aegina-island" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    艾
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">艾伊纳岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aegina</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/papigo-villages-zagori" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕皮戈（扎戈里山区传统石屋村落）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Papigo (Zagori Stone Villages)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/delos-island" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    提
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">提洛岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Delos</p>
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
