import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '纳夫帕克托斯历史溯源｜勒班陀战役前世今生，地中海咽喉的时光与传奇',
  description: '探秘希腊隐秘海港纳夫帕克托斯。1571年，改变欧洲命运的勒班陀海战在此爆发。走进塞万提斯战斗过的威尼斯堡垒，聆听科林斯湾的千年波涛。',
}

export default function NafpaktosVenetianPortLepantoHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '纳夫帕克托斯（勒班陀战役发生地威尼斯港）', href: '/attractions/nafpaktos-venetian-port-lepanto-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`纳夫帕克托斯（勒班陀战役发生地威尼斯港）・Nafpaktos・希腊・西希腊大区纳夫帕克托斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在希腊大陆与伯罗奔尼撒半岛夹峙的科林斯湾入口，有一座被双层威尼斯城墙温柔环抱的小城。它的名字 <strong>纳夫帕克托斯</strong>，在近代以前有一个更响亮的称谓——<strong>勒班陀（Lepanto）</strong>。<strong>1571年10月7日</strong>，一场集结了欧洲基督教世界最后力量的大海战在此处的海面爆发，永久地改写了地中海的力量天平，也无意中拯救了西方文学的星辰。抛开游玩攻略，走进纳夫帕克托斯的尘封往事，遇见属于它的时光、海风与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`纳夫帕克托斯（勒班陀战役发生地威尼斯港）`} />
                <InfoRow label="英文名称" value={`Nafpaktos`} />
                <InfoRow label="正式名称" value={`Nafpaktos`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`西希腊大区纳夫帕克托斯`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“纳夫帕克托斯”这个名字，本身就是一个关于海洋的古老承诺。它源于希腊语“ναύς”（naus，意为船只）和“πήγνυμι”（pēgnymi，意为建造或修理）。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直译过来，就是“造船之地”或“船坞”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市的命运，从一开始就与海洋紧密相连。早在公元前5世纪的伯罗奔尼撒战争时期，它作为一个重要的海军基地就已被历史学家修昔底德记载。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "雅典人曾在此建立据点，用以控制科林斯湾，封锁他们的世敌斯巴达。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，让它真正步入历史舞台中心的，是其独一无二的地理位置。它扼守科林斯湾最狭窄的入口，如同地中海咽喉处的一把锁。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "谁控制了这里，谁就掌控了希腊西部海域的命脉。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "古代地理学家斯特拉博曾描述：“这是一个有着双重港湾的非凡之地，内港可由铁链封锁，是天然的庇佑所。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从拜占庭帝国到奥斯曼帝国，无数统治者都看中了它的战略价值。而它最辉煌与最悲怆的篇章，则由<strong>威尼斯共和国</strong>和一场惊天动地的海战书写。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的意大利名“勒班陀”，正是从威尼斯统治时期开始，响彻整个欧洲。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一个印记：威尼斯人的“锁与钥”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "14世纪末，锐意扩张的<strong>威尼斯共和国</strong>从软弱的那不勒斯王国手中夺取了此地。威尼斯人深知其价值，他们不满足于仅作为一个港口。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们启动了一项宏伟的军事工程：建造欧洲最坚固的海港防御体系之一。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天我们看到的纳夫帕克托斯迷人风貌，基本源于此时。他们修建了<strong>双层巨型石墙</strong>，将整个城镇和港口严密地包裹起来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "内墙沿着海港蜿蜒，外墙则爬上山坡，与山顶的巍峨城堡相连。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "港口的入口处，设计了两座坚固的塔楼，中间曾悬挂巨大的铁链。一旦危机来临，铁链升起，便能将整个港口完全封闭，固若金汤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城，成了威尼斯在东地中海的“锁与钥”，守护着通往亚得里亚海母邦的财富航线近一个世纪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二个印记：1571，勒班陀的风暴</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，最深的印记来自于一场战役。16世纪，奥斯曼帝国的海军如黑色浪潮，席卷地中海，威胁着整个南欧。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1571年</strong>，在教皇庇护五世的奔走下，<strong>西班牙王国</strong>、<strong>威尼斯共和国</strong>和<strong>教皇国</strong>组成了“神圣同盟”，集结了一支史无前例的联合舰队。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "舰队的目标，就是收复被奥斯曼人占据的塞浦路斯，并挑战其海上霸权。命运的齿轮转动，将决战地点指向了勒班陀港外的海面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1571年10月7日</strong>，星期日清晨。超过400艘战舰、15万士兵与水手，在这片相对狭窄的海域列阵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "基督教联军的主帅是<strong>奥地利的唐·胡安</strong>，一位年仅24岁的西班牙国王私生子弟弟。对面的奥斯曼舰队，则由<strong>阿里·帕夏</strong>指挥。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战役从上午持续到傍晚。这不仅是风帆与桨帆船的碰撞，更是火炮与弓箭、信仰与野心的对决。战况极其惨烈，海水被染成红色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最终，联军凭借更猛烈的炮火和更坚韧的步兵白刃战，取得了决定性胜利。奥斯曼舰队几乎全军覆没，不可战胜的神话被打破。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "联军统帅唐·胡安在战报中写道：“我们找到了土耳其舰队，攻击了，焚烧了，摧毁了它……这是上帝所愿。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "勒班陀战役被后世视为保卫了欧洲文明的关键一战。它虽然未能立即扭转地中海的整体局势，但彻底粉碎了奥斯曼海军西进的锐气，奠定了此后数十年的海上均势。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而战役的余波，还意外地塑造了一位文豪的命运。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城市最意想不到的传奇，与一位西班牙老兵紧紧相连，他的名字叫<strong>米格尔·德·塞万提斯·萨维德拉</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时，24岁的塞万提斯只是联军中一名普通的西班牙步兵，服役于“马基纳”号战舰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在勒班陀战役那血腥的下午，他正发着高烧。战友们劝他留在舱内休息，但他毅然拒绝：“我宁愿为上帝和国王战死，也不愿像懦夫一样躲在甲板下。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他坚持冲到战斗最激烈的船艏。在激烈的接舷战中，奥斯曼人的火绳枪子弹击中了他的<strong>左胸和左臂</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这颗子弹永久地损坏了他左臂的神经，导致这只手终生瘫痪。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塞万提斯后来幽默地称其为“勒班陀的纪念”，并自豪地说：“这是世界上最美丽的手臂，因为它是在最值得纪念的时刻获得的。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "战役结束后，他拖着伤残之躯继续军旅生涯。但在1575年返回西班牙的途中，他的船只被海盗劫掠，他被俘至阿尔及尔，度过了五年暗无天日的奴隶生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这段经历，成为他日后文学创作中无数囚禁、苦难与对自由渴望情节的源泉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>勒班陀的创伤与阿尔及尔的囚禁，共同淬炼了塞万提斯的灵魂。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "多年后，当他提笔创作《堂吉诃德》时，那场战役的影子依然清晰。他借主人公之口，设计了一场模仿勒班陀的“风车大战”，将宏伟历史化为荒诞寓言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更直接的是，他在《堂吉诃德》上卷的序言中深情写道：" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“失去了左手，是为了让右手更加光荣……如果我能够选择，我宁愿要参与那场惊天动地的战役所获得的荣誉，也不愿因逃避它而身体健全。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，在纳夫帕克托斯海港边的步道上，立着一尊<strong>塞万提斯的青铜雕像</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他并非眺望海洋，而是面朝内陆，深邃的目光仿佛穿越时空，回望那片改变了他和欧洲命运的海域。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的脚下刻着简单的字样：“米格尔·德·塞万提斯，勒班陀战役的英雄和受害者。”对于这座小城而言，他或许是到此一游的最伟大的灵魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他让勒班陀不止于历史课本上的一个名词，而成为镶嵌在西方文学王冠上的一颗带着伤疤的宝石。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了正史的磅礴，海风也吹来了许多幽微的传说，缠绕在古城的石缝与浪花间。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一个流传甚广的故事与港口那座古老的<strong>石桥</strong>有关。传说在奥斯曼统治时期，一位美丽的希腊少女与一位威尼斯青年水手相爱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的秘密恋情被少女的土耳其总督父亲发现。盛怒之下，总督将水手囚禁在海港的塔楼中，并命令女儿嫁给一位奥斯曼贵族。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "婚礼前夜，少女偷偷来到塔楼下。两人隔窗相望，绝望中决定殉情。他们一同跃入漆黑的海水。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人讲述：“据说，在他们跳下的地方，海水变得异常平静清澈。月圆之夜，有时能看到一对年轻情侣的倒影，手牵着手，漫步在海底。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "自此，那座石桥被称为“<strong>情人之跃</strong>”。尽管史料无考，但这个凄美的故事却赋予了冰冷的战争遗迹一抹人性的柔光。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个传说则关于山顶城堡的一块“<strong>哭泣的石头</strong>”。据说在勒班陀战役结束后，一位失去了所有儿子的母亲，每天坐在城堡最高处，眺望大海哭泣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她的泪水浸透了一块岩石，至今在潮湿的天气里，那块石头摸上去总是比其他地方更加冰凉湿润，仿佛泪痕未干。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，如同历史的毛细血管，将宏大的战争叙事与普通人的悲欢悄然连接，让这座堡垒之城，也有了心跳与温度。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日的纳夫帕克托斯，宁静得令人恍惚。双层威尼斯城墙内，是彩色的房屋、悠闲的咖啡馆和停满小渔船的半月形海港。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "游客们坐在塞万提斯雕像旁，享受着爱琴海的阳光，几乎难以想象450年前，这里曾是决定文明走向的沸腾熔炉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史从未真正远去。当你用手触摸那些被海风侵蚀的威尼斯墙砖，当你站在城堡俯瞰那片湛蓝却曾燃烧的海域，当你走过悬挂铁链的塔楼门洞……" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时空仿佛层层叠加。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不仅是“一座美丽的希腊海边小镇”，它曾是古代雅典的船坞，威尼斯共和国的钢铁前哨，基督教世界力挽狂澜的战场，更是一位文学巨匠的浴火重生之地。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的每一块石头，都在诉说着关于权力、信仰、牺牲与文明存续的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂纳夫帕克托斯，便读懂了地中海历史的某种浓缩：冲突与交融，毁灭与创造，以及在巨浪过后，生活如何像藤蔓一样，再次顽强地爬满古老的城墙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的魅力，正藏在这极致的反差与深厚的层理之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、徒步路线与海港咖啡馆全指南，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/symi-island-greece" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡米岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Symi</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sanctuary-of-the-great-gods-samothrace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨莫色雷斯岛伟大神明圣域</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sanctuary of the Great Gods (Samothrace)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/the-street-of-the-knights-rhodes" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    骑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">骑士街</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Street of the Knights</p>
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
