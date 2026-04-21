import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣吉米尼亚诺历史溯源｜托斯卡纳百塔之城的前世今生与中世纪家族传奇',
  description: '探秘意大利圣吉米尼亚诺的时光胶囊。穿越中世纪权力游戏，解读石塔背后贵族家族的兴衰、但丁的足迹与圣徒传说，发现一座活着的石头史诗。',
}

export default function SanGimignanoTowersHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '圣吉米尼亚诺百塔之城', href: '/attractions/san-gimignano-towers-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣吉米尼亚诺百塔之城・San Gimignano・意大利・圣吉米尼亚诺`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在托斯卡纳起伏的金色丘陵中，它如同一座被时光赦免的“中世纪曼哈顿”。<strong>圣吉米尼亚诺</strong>，一个以<strong>72座石塔</strong>定义天际线的奇迹。这里没有文艺复兴的华丽铺陈，只有赤裸裸的、属于中世纪城邦的野心、信仰与家族荣光。每一座倔强屹立的塔楼，都是一份沉默的宣战书，讲述着关于权力、财富与骄傲的古老游戏。抛开游玩攻略，走进圣吉米尼亚诺的尘封往事，遇见属于它的铁血时光与石头传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣吉米尼亚诺百塔之城`} />
                <InfoRow label="英文名称" value={`San Gimignano`} />
                <InfoRow label="正式名称" value={`San Gimignano`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`圣吉米尼亚诺`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的故事始于幽远的神话与务实的贸易。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣吉米尼亚诺的根源可追溯到<strong>伊特鲁里亚时期</strong>，但使其真正成型的是罗马帝国崩溃后的混乱年代。传说，在公元10世纪，一位名叫<strong>吉米尼亚诺</strong>的摩德纳主教，在旅途中于此地奇迹般地击退了恶魔，庇护了当地的居民。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "为了纪念他，这片聚居地便以圣人之名冠之。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，这个名字背后更坚实的逻辑是地理。城市坐落在法兰奇格纳古道——这条连接罗马与北欧的朝圣与商贸大动脉——的一座关键山丘之上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的“出生证”上清晰地写着：<strong>战略要塞</strong>与<strong>贸易驿站</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初，它只是附近沃尔泰拉主教辖区的一个城堡。随着中世纪商业复兴，尤其是<strong>藏红花贸易</strong>的暴利，这座小山城迅速积累了惊人的财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "财富需要保卫，地位需要彰显。于是，一种独特的城市语法诞生了——不是宽阔的广场，而是向天空冲刺的、密密麻麻的家族塔楼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的名字，因此与它的地貌和功能牢牢绑定：一座为守护与展示而生的“山丘上的圣吉米尼亚诺”。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣吉米尼亚诺的历史，是一部用石头写就的权力编年史。它的核心叙事并非宏大的王朝更替，而是浓缩在三个关键词里：<strong>独立</strong>、<strong>繁荣</strong>与<strong>内耗</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一幕：自由城邦的崛起 (12-13世纪)</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "摆脱了主教领主的控制后，圣吉米尼亚诺在<strong>1199年</strong>获得了事实上的自治权，成为一个繁荣的<strong>自由城邦</strong>。藏红花、葡萄酒和羊毛贸易让它富甲一方。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "财富并未带来和平，反而点燃了内部的战火。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "城市分裂为两大派系：效忠教皇的<strong>圭尔夫党</strong>与效忠神圣罗马帝国皇帝的<strong>吉伯林党</strong>。但在这里，党派之争迅速演变为家族间的血腥械斗。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“在圣吉米尼亚诺，人们不为理念而战，只为家族的塔楼比邻居高出一肘尺而战。” —— 一位中世纪编年史家的讽刺。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二幕：石头的狂想曲与家族的虚荣</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，城市的天际线进入了一场疯狂的“军备竞赛”。建造高塔，最初是防御所需——塔楼是家族堡垒，仓库，也是财富与权力的可视化排行榜。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "鼎盛时期，多达<strong>72座</strong>石塔刺向托斯卡纳的天空，营造出今日无法想象的、令人窒息的垂直奇观。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>大塔</strong>与<strong>罗尼奥萨塔</strong>的对峙，就是阿尔丁盖利与萨卢奇两个顶级家族角力的直接体现。这些塔楼不是宫殿，而是战斗堡垒，窗户极小，内部狭窄陡峭。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们是中世纪意大利城市内部分裂与暴力的最极端物理象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三幕：黑死病与永恒的静止</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1348年</strong>，横扫欧洲的<strong>黑死病</strong>给了这座骄傲的城市致命一击。近半数人口死亡，经济崩溃，社会结构瓦解。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "脆弱的自治无法维持，圣吉米尼亚诺在<strong>1353年</strong>正式臣服于强大的佛罗伦萨共和国。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佛罗伦萨的统治者有意无意地做了一件事：他们禁止家族再建造新的塔楼，并压制了内部的争斗。城市的发展被按下了暂停键。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这一“停滞”，使得那<strong>14座</strong>历经战火与时光侥幸存留的中世纪塔楼，以及完好的城墙、广场与街巷，被奇迹般地封存下来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "繁荣使它伟大，而衰落，意外地使它永恒。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这座小城的编年史中，几位名人的身影虽短暂停留，却为它的传奇增添了决定性的注脚。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>但丁·阿利吉耶里：政治风暴中的流亡者</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1300年</strong>，伟大的诗人<strong>但丁</strong>正处于他人生与政治的十字路口。作为佛罗伦萨的执政官之一，他被派往圣吉米尼亚诺，肩负一项重要外交使命：劝说这个桀骜不驯的盟友加入托斯卡纳圭尔夫党联盟。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时的圣吉米尼亚诺，正处于党派斗争的漩涡中心。但丁站在市政宫（今市立博物馆）的议事厅里，面对当地的权贵发表演说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他雄辩的口才是否成功，历史记载模糊。但可以想象，这座塔楼林立、空气中弥漫着紧张气氛的城市，一定给他留下了深刻印象。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "不久之后，但丁便在佛罗伦萨的政治斗争中失败，开始了漫长的流亡生涯。或许，在圣吉米尼亚诺看到的城邦内斗与脆弱，加深了他对意大利分裂局面的痛心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他在《神曲》中构建的严密秩序，某种程度上，正是对现实世界如圣吉米尼亚诺般混乱的一种精神反抗。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“我曾在圣吉米尼亚诺为托斯卡纳联盟辩护。” —— 但丁在《论世界帝国》中简短提及了这次出使。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>洛伦佐·德·美第奇：终结一个时代的“保护者”</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一个关键人物，来自佛罗伦萨的无冕之王——<strong>“华丽者”洛伦佐·德·美第奇</strong>。他对圣吉米尼亚诺的影响并非亲临，而是通过强大的政治与文化辐射。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在圣吉米尼亚诺臣服佛罗伦萨后，洛伦佐的统治策略是怀柔与整合。他并未摧毁这座小城，反而在一定程度上认可了其历史价值。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更重要的是，洛伦佐所代表的<strong>文艺复兴思潮</strong>，如同一股清新的风，吹进了这座中世纪风格固化的石头城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "佛罗伦萨的艺术家被引入。<strong>主教堂 Collegiata</strong> 内那些辉煌的湿壁画，由<strong>多米尼科·基兰达约</strong>等大师绘制，描绘着《旧约》与《最后审判》的场景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些壁画风格完全是文艺复兴的，与建筑本身的罗马式风格形成有趣对话。它们是在美第奇家族影响下，文艺复兴艺术向中世纪堡垒的一次成功“植入”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "洛伦佐本人或许从未长久驻足于此，但他的时代精神，为圣吉米尼亚诺的中世纪画卷添上了最后一笔绚烂色彩，也预示着一个更注重艺术美感而非军事防御的新时代来临。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他无意中成了这座博物馆之城的“保护人”，因为他终结了它混乱的政治生命，却保全了它的物理躯壳。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "除了刀光剑影，圣吉米尼亚诺的灵魂深处，还住着一位纯洁的守护圣徒，她的故事为坚硬的石头之城注入了悲悯的温情。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她就是<strong>圣菲娜</strong>，又名“藏红花圣徒”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "菲娜生于<strong>1238年</strong>一个破落贵族家庭。少女时期，一场重病使她瘫痪，她被家人遗弃在一块粗糙的橡木板上，独自忍受了六年的痛苦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说，在她极度痛苦时，只有<strong>圣格里高利</strong>在幻象中安慰她，并预言她将在3月12日他 feast day 那天获得永生安息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "菲娜展现出了惊人的虔诚。她拒绝抱怨，并将她仅有的、别人施舍的一点藏红花（当时极其昂贵）赠予更穷苦的人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更神奇的传说是，每当她身下的木板被老鼠啃噬，天使会降临为她驱赶，并治愈她的褥疮。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“看啊，圣菲娜死了，所有塔楼的钟声都自动鸣响！” —— <strong>1300年3月12日</strong>她逝去时，全城无人敲击却钟声齐鸣的奇迹，至今仍在当地传说中流传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她死后，无数奇迹发生在她简陋的坟墓。人们发现，她躺了六年的木板，竟开出了白色的紫罗兰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如今，在以她命名的<strong>圣菲娜礼拜堂</strong>里，文艺复兴大师<strong>基兰达约</strong>描绘了她生平与葬礼的辉煌壁画。她身旁总有一罐藏红花、几只老鼠和白色的紫罗兰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每年3月，圣吉米尼亚诺会举行盛大的<strong>圣菲娜节</strong>。她的故事，是对这座以商业财富和家族傲慢闻名的城市，一种精神上的平衡与救赎。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "她让人们在仰望冰冷的石塔时，还记得俯身关怀苦难中的微光。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当游客们漫步在圣吉米尼亚诺的街头，惊叹于它如电影布景般完美的中世纪风貌时，他们所体验的，远不止是一座“保存完好”的古城。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们行走在一部立体的、关于人类野心的寓言里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一座幸存的高塔，都是解读中世纪意大利城邦政治、家族伦理与经济动力的密码本。这里没有后来文艺复兴的和谐理想，只有原始、粗糙、直接的力量展示。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "圣吉米尼亚诺的价值，恰恰在于它的“未完成”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它被时光冻结在向现代世界转型的前夜，让我们得以窥见文艺复兴光辉到来之前，欧洲精神世界的另一种真实面貌：躁动、虔诚、分裂而又充满蓬勃生命力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂圣吉米尼亚诺，便是读懂中世纪市民社会的灵魂核心——那种极致的骄傲、脆弱的美，以及在信仰与暴力间挣扎的复杂性。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不是一个田园诗般的托斯卡纳小镇，而是一首刻在石头上的、关于人类如何建造、争夺并最终被自身创造物所定义的宏伟史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/offida" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥菲达</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Offida</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castelmezzano-basilicata" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特尔梅扎诺</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelmezzano</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spoleto-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
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
