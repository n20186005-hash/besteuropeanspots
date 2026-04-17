import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '科英布拉老城 Coimbra Old Town｜大学与法多的千年回响 - 最佳欧洲景点',
  description: '第一眼看见科英布拉老城，你会觉得它像一本立体的、被岁月浸染成蜜糖色的古籍，层层叠叠地垒在一座小山上。从蒙德古河对岸望去，最抢眼的是大学那方正的钟楼塔尖，它像个严肃的指挥官，统领着脚下那片由红瓦屋顶、教堂尖顶和蜿蜒石阶组成的迷宫。但别被这宁静的远景骗了，真正的科英布拉，需要你用双脚去丈量，去“爬”进去...',
}

export default function CoimbraOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '科英布拉老城', href: '/attractions/coimbra-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`科英布拉老城・Coimbra Old Town・葡萄牙・科英布拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看见科英布拉老城，你会觉得它像一本立体的、被岁月浸染成蜜糖色的古籍，层层叠叠地垒在一座小山上。从蒙德古河对岸望去，最抢眼的是大学那方正的钟楼塔尖，它像个严肃的指挥官，统领着脚下那片由红瓦屋顶、教堂尖顶和蜿蜒石阶组成的迷宫。但别被这宁静的远景骗了，真正的科英布拉，需要你用双脚去丈量，去“爬”进去体会。拖着行李开始攀爬那些被无数代学生鞋底打磨得光滑如鹅卵石的陡峭小巷（Ruas）时，你的呼吸会变得急促，但耳边已经开始响起各种声音：某扇高窗飘出的钢琴练习曲、咖啡馆里急促的葡萄牙语交谈声，以及，如果你运气好，从某个古老拱门下传来的、若有若无的吉他前奏和深沉的男声吟唱——那是科英布拉法多，这座城市的灵魂之声。
当你终于喘着气，站到大学广场（Paço das Escolas）时，感官会瞬间被另一种恢弘所接管。脚下是巨大的黑白石子铺成的海洋图案，抬头是湛蓝天空下装饰着精美雕像的灰色石质立面，风从回廊间穿过，带来一股旧书、石材和远方松树混合的清凉气味。这里的学生依然穿着传统的黑色西装外套，披着黑袍匆匆走过，袍子在身后翻飞，像极了穿越时空的年轻巫师。你会恍惚觉得，时间在这里不是直线前进的，而是像墨水一样，一层层渗透在这些墙壁里。学术的庄严与青春的躁动，以一种奇妙的方式共生着。午后，在“巴西利亚咖啡厅”点一杯bica（浓缩咖啡），看着身边的学生们激烈地辩论、温书，或者仅仅是在阳光下发呆，你会明白，大学不是这里的景点，而是它跳动的心脏和呼吸的肺。
日落时分，一定要去老城的至高点。穿过后街那些贴满乐队海报和学术通知的墙壁，找到圣塞巴斯蒂昂拱门。从这里俯瞰，整个蒙德古河谷沐浴在金色的光辉中，河流像一条柔软的银带。随着夜幕降临，山下新城灯火渐起，而山上的老城则被一种深邃的蓝色笼罩。这时，法多之家（Casas de Fado）的灯光亮了，门帘掀开，传出正式的邀请。进去吧，点一杯波特酒，在狭小的空间里，听身穿黑衣的学子用低沉而富有学识的嗓音，唱出关于离别、爱情和命运的歌谣。那声音里没有里斯本法多的市井悲怆，而是一种更内省、更富哲学意味的哀愁。那一刻，你会觉得，你听到的不是音乐，而是这座千年古城和它无数代过客，在石头与书本间沉淀下的全部叹息与渴望。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看见科英布拉老城，你会觉得它像一本立体的、被岁月浸染成蜜糖色的古籍，层层叠叠地垒在一座小山上。从蒙德古河对岸望去，最抢眼的是大学那方正的钟楼塔尖，它像个严肃的指挥官，统领着脚下那片由红瓦屋顶、教堂尖顶和蜿蜒石阶组成的迷宫。但别被这宁静的远景骗了，真正的科英布拉，需要你用双脚去丈量，去“爬”进去体会。拖着行李开始攀爬那些被无数代学生鞋底打磨得光滑如鹅卵石的陡峭小巷（Ruas）时，你的呼吸会变得急促，但耳边已经开始响起各种声音：某扇高窗飘出的钢琴练习曲、咖啡馆里急促的葡萄牙语交谈声，以及，如果你运气好，从某个古老拱门下传来的、若有若无的吉他前奏和深沉的男声吟唱——那是科英布拉法多，这座城市的灵魂之声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你终于喘着气，站到大学广场（Paço das Escolas）时，感官会瞬间被另一种恢弘所接管。脚下是巨大的黑白石子铺成的海洋图案，抬头是湛蓝天空下装饰着精美雕像的灰色石质立面，风从回廊间穿过，带来一股旧书、石材和远方松树混合的清凉气味。这里的学生依然穿着传统的黑色西装外套，披着黑袍匆匆走过，袍子在身后翻飞，像极了穿越时空的年轻巫师。你会恍惚觉得，时间在这里不是直线前进的，而是像墨水一样，一层层渗透在这些墙壁里。学术的庄严与青春的躁动，以一种奇妙的方式共生着。午后，在“巴西利亚咖啡厅”点一杯bica（浓缩咖啡），看着身边的学生们激烈地辩论、温书，或者仅仅是在阳光下发呆，你会明白，大学不是这里的景点，而是它跳动的心脏和呼吸的肺。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`日落时分，一定要去老城的至高点。穿过后街那些贴满乐队海报和学术通知的墙壁，找到圣塞巴斯蒂昂拱门。从这里俯瞰，整个蒙德古河谷沐浴在金色的光辉中，河流像一条柔软的银带。随着夜幕降临，山下新城灯火渐起，而山上的老城则被一种深邃的蓝色笼罩。这时，法多之家（Casas de Fado）的灯光亮了，门帘掀开，传出正式的邀请。进去吧，点一杯波特酒，在狭小的空间里，听身穿黑衣的学子用低沉而富有学识的嗓音，唱出关于离别、爱情和命运的歌谣。那声音里没有里斯本法多的市井悲怆，而是一种更内省、更富哲学意味的哀愁。那一刻，你会觉得，你听到的不是音乐，而是这座千年古城和它无数代过客，在石头与书本间沉淀下的全部叹息与渴望。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`科英布拉老城`} />
                <InfoRow label="英文名称" value={`Coimbra Old Town`} />
                <InfoRow label="正式名称" value={`Coimbra Old Town (Universidade de Coimbra - Alta e Sofia)`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`科英布拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`葡萄牙最古老的大学城，曾作为葡萄牙王国首都长达一个多世纪，是葡萄牙语世界知识与文化的摇篮。`} />
                <InfoRow label="建筑特色" value={`一座雄踞于蒙德古河畔山丘上的“垂直城市”，狭窄的阶梯小巷连接着宏伟的大学建筑、罗马式与曼努埃尔式教堂，以及沧桑的中世纪石墙。`} />
                <InfoRow label="建筑风格" value={`以罗曼式、哥特式、曼努埃尔式及华丽的巴洛克风格混搭为特色，尤其以科英布拉大学若安尼纳图书馆的洛可可式极致奢华闻名于世。`} />
                <InfoRow label="文化价值" value={`这里不仅是学术圣地，更是葡萄牙“法多”（Fado）音乐的重要发源地之一——独特的“科英布拉法多”，由身穿黑衣的男学生吟唱，充满了学术的忧伤与青春的诗意。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城街道与广场全天开放。核心景点如科英布拉大学（尤其是若安尼纳图书馆）、圣十字教堂等有固定开放时间，通常为夏季（4月至10月）上午9:00至晚上7:00；冬季（11月至3月）上午9:30至下午5:00。大学部分学院周末开放时间可能缩短，重要节假日（如圣诞节、元旦）可能关闭。建议行前在官网确认。`} />
              <InfoRow label="门票价格" value={`进入老城街道免费。参观科英布拉大学历史区（包含若安尼纳图书馆、皇家礼拜堂、大学塔等）有联票，约13.5欧元。学生、青年及65岁以上老人有折扣。圣十字教堂门票约2.5欧元。部分博物馆有单独收费。购买“科英布拉卡”可能包含交通和多个景点折扣。`} />
              <InfoRow label="地址" value={`Largo da Portagem, 3000-337 Coimbra, Portugal`} />
              <InfoRow label="交通方式" value={`从波尔图（Porto）国际机场出发最便捷：乘坐地铁至Campanhã火车站（约30分钟），转乘葡萄牙铁路（CP）的“区域/城际列车”前往科英布拉-B站（Coimbra-B），车程约1.5小时，班次频繁（每小时1-2班）。从里斯本出发：在里斯本东方站（Oriente）或Santa Apolónia站乘坐火车，直达科英布拉-B站约1小时45分钟。抵达科英布拉-B站后，换乘本地“市郊列车”或打车（约10分钟）/公交车（约15分钟）前往市中心的科英布拉-A站（Coimbra-A）或老城山脚下的Largo da Portagem广场。自驾可将车停在山下停车场，步行探索老城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`科英布拉的故事，比葡萄牙这个国家本身还要古老。早在罗马时代，这里就是一个重要的河流渡口和聚居地，被称为“Aeminium”。然而，改变它命运的第一个转折点，是邻近的罗马城市科宁布里加（Conimbriga）在蛮族入侵中衰落，居民和主教迁居至此，并将城市名与之结合，从此有了“科英布里加”（Coimbriga），最终演化为“科英布拉”。你可以把这座城市想象成一个文化的避难所，这个基因从一开始就埋下了。到了摩尔人统治伊比利亚半岛时期，科英布拉成了一座繁荣的边境城堡，基督教与伊斯兰文明在此碰撞、交融，至今在老城的肌理中还能隐约感受到那种迷宫般的布局。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但真正让科英布拉戴上王冠的，是12世纪。在葡萄牙从莱昂王国独立出来的建国浪潮中，科英布拉因其易守难攻的山丘地形和中心位置，被开国君主阿方索·恩里克斯选为首都。从1139年到1255年，超过一个世纪的时间里，这里都是葡萄牙王国的政治心脏。王宫就坐落在如今大学主楼的位置，国王们在这里发号施令，贵族们在此建造宅邸和教堂。圣十字教堂（Mosteiro de Santa Cruz）就是在这个时期由开国元勋们兴建，并成为早期国王的安息之地，被誉为“葡萄牙的万神殿”。这段首都岁月，为科英布拉注入了最初的皇家气度与政治分量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，首都的光环随着王国向南扩张而转移到了里斯本。科英布拉似乎要重归省城的宁静。但历史给了它另一项更恒久的使命——知识。1290年，国王迪尼斯一世在里斯本创立了葡萄牙第一所大学，但它在两地间几经搬迁，最终在1537年，国王若昂三世做出了一个决定性的选择：将大学永久迁至科英布拉，并安置在旧王宫的宫殿里。从此，宫殿变成了学堂，权杖让位于书本。这一迁址绝非偶然，它让大学远离了首都的商业与政治喧嚣，得以在相对宁静的环境中潜心学术，同时也将王室的尊贵与学术的崇高完美地结合在了一起。随后的几个世纪，大学不断扩建，尤其是18世纪初，国王若昂五世投入巨资，打造了若安尼纳图书馆这座巴洛克与洛可可艺术的瑰宝，用黄金、异国木材和无数珍本，彰显了“知识即权力”的奢华宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`大学的存在，塑造了科英布拉独一无二的文化生态。学生们组成了自己的“共和国”（Repúblicas）——一种独特的集体宿舍和兄弟会组织，发展出强烈的身份认同和悠久的恶作剧传统。而源自里斯本街头的情感之歌——法多，被学生们带到这里，褪去了市井气息，填入了拉丁文诗歌的典故、对故乡的思念以及对学术生涯的忧思，演变为深沉、内敛、充满书生气的“科英布拉法多”。学生的黑袍（Capa e Batina）从19世纪穿到现在，成为活着的传统。无论是抵抗拿破仑入侵时的学生军团，还是20世纪反对独裁统治的学生运动，科英布拉大学始终是葡萄牙自由与进步思想的堡垒。今天，当你走在这些街道上，你走过的不仅是中世纪的石头，更是七八个世纪以来，无数年轻头脑的思想火花、青春激情与忧郁灵魂所共同铺就的精神之路。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味科英布拉，建议安排一整天时间，并做好“登山”的心理和体力准备。最佳节奏是“早上探秘学术殿堂，下午漫游历史街巷，晚上沉浸法多之夜”。建议清晨9点左右抵达山脚下的Largo da Portagem广场，从这里开始向上攀登，可以避开稍后到来的旅行团人流，也能享受晨光中老城最宁静的模样。整体游览耗时约8-10小时，是一个从身体到心灵的完整攀登与沉浸过程。路线设计为由外至内、由高至低，先聚焦大学核心区的宏大叙事，再深入背后街巷的市井生活，最后在夜色中感受其音乐灵魂。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适、防滑的平底鞋是老城之旅的头等大事，高跟鞋在这里等同于“刑具”。想听正宗的科英布拉法多，最好提前一天向住宿处或游客中心询问当晚哪家“法多之家”有学生协会的正式演出，并预约位置，临时找往往客满。许多小巷里的家庭式餐馆性价比远超主街，找那些门口菜单手写、里面坐满当地人的准没错。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下Portagem广场出发，沿着标志性的“黑石阶梯”Rua de São Pedro开始缓缓上行，感受脚下被磨得发亮的石板和两旁黄墙上的斑驳树影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先抵达大学广场，在黑白石子铺成的巨大徽章图案上驻足，仰视若昂尼纳图书馆的华丽立面，听钟楼整点的悠扬钟声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`购买门票后进入若昂尼纳图书馆，在近乎神圣的昏暗光线中屏息凝神，看金色木雕与数千古籍在从高窗透入的光束下如何讲述“知识即权力”的古老箴言。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着探索皇家礼拜堂和圣米迦勒礼拜堂，对比其曼努埃尔式航海主题装饰与华丽巴洛克风管风琴的巧妙融合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大学建筑群西侧的小门走出，拐进迷宫般的“学生共和国”街区，寻找那些门口涂鸦着古怪标志的古老学生宿舍，感受几个世纪以来青春不羁的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着斜坡走到宏伟的圣十字教堂，在阴凉的回廊里休息片刻，瞻仰葡萄牙最初两位国王的精美石棺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山途中绕道前往科英布拉新大教堂（Sé Nova）和更古老的罗马式科英布拉旧大教堂（Sé Velha），体会从厚重罗马风到华丽巴洛克的建筑风格变迁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分回到大学塔楼下的观景平台，看着夕阳将整个蒙德古河染成金色，等待老城灯火次第点亮。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大学塔楼脚下观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，以大学塔楼为前景，将蒙德古河与对岸的新城区纳入镜头，能拍出历史与当代交融的经典全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`若昂尼纳图书馆三楼金色大厅的门口（内部禁止拍照）`}</h4>
                  <p className="text-sm text-gray-700">{`但可以从门外向内拍摄，利用门框形成天然画框，捕捉到大厅尽头华丽书桌和通天书架的纵深感，上午侧光时效果最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣塞巴斯蒂昂拱门`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光刚好穿过拱门，站在门洞内向外拍摄蜿蜒下行的石阶小巷，光影对比强烈，能拍出富有戏剧感的“时光隧道”效果。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣十字教堂回廊的二层走廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光斜射进回廊，站在角落拍摄连续的拱券和柱子投下的长长影子，几何美感与宁静氛围并存。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`蒙德古河北岸的“葡萄牙小径”`}</h4>
                  <p className="text-sm text-gray-700">{`过河后步行约十分钟，有一片开阔地，是拍摄老城山丘全景的绝佳地点，尤其适合在蓝调时刻（日落前后）拍摄城市灯光初上的梦幻景象。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`若昂尼纳图书馆内部严格禁止拍照，这是出于对古籍保护的绝对要求，请务必遵守。拍摄身穿黑袍的学生时，尽量保持尊重和距离，最好先微笑示意，他们通常很友好。科英布拉多雾，尤其是清晨和秋冬季节，不要抱怨，雾气缭绕的老城山顶反而是出氛围感大片的好时机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在大学广场附近由古老石屋改造的精品酒店，推开木窗就能听到钟楼的报时声，夜晚仿佛独占整个空灵的学术圣地。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验之选`}</h4>
                  <p className="text-sm text-green-800">{`下城区河岸旁的“共和国”风格客栈，由旧学生宿舍改造，装饰着复古海报和书籍，让你完全融入学生的生活氛围。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受之选`}</h4>
                  <p className="text-sm text-yellow-800">{`蒙德古河对岸山坡上的设计酒店，拥有俯瞰整个老城山丘的无边泳池和露台，将古城全景作为你私人房间的壁画。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算温馨之选`}</h4>
                  <p className="text-sm text-purple-800">{`藏在阿尔法玛区（老城东部）小巷里的家庭旅馆，主人会为你准备地道的早餐，并热情分享只有本地人才知道的城市秘径。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城山上的住宿多有数百年历史，隔音可能一般，但换取的是无与伦比的位置和氛围；追求绝对安静可选择山下河畔区域。科英布拉治安很好，但深夜独自在偏僻小巷行走仍需保持一般旅行警觉。旺季（五月毕业季和九月开学季）住宿紧张且价格上扬，务必提前预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开科英布拉好些天了，耳朵里似乎还回荡着那些低沉的法多歌声，脚底还能记起石板阶梯的触感。这座城市给我的，不是一种观光完毕的“打卡”成就感，而更像是一种缓慢的浸润。它让我思考，什么才是一座城市的永恒？是王权吗？它曾贵为首都，但政治中心早已南移。是财富吗？它从未以商业巨埠闻名。科英布拉给出的答案是：思想与记忆。当宫殿变为学堂，当国王的敕令被学生的辩论和诗歌取代，这座城市找到了它超越时空的锚点。它成了一座活的博物馆，不仅收藏着建筑和书籍，更收藏着一代又一代年轻人最宝贵的青春、怀疑、爱情与梦想。那些黑袍，既是学术传统的制服，也是青春一致的色彩，它奇妙地消弭了时间的隔阂，让13世纪的学者和21世纪的学生，在同一个空间里产生了共鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率和速成的时代，科英布拉老城像一个固执的提醒者。它提醒我们，有些事物需要攀登才能抵达，有些知识需要沉淀才能闪光，有些情感需要特定的旋律和夜晚才能妥帖安放。它不讨好你，只是在那里，保持着它的陡峭、它的严肃、它夜晚的忧伤。但正是这份不讨好，构成了它最深沉的魅力。每一个热爱深度游的人，都应该来科英布拉做一次“学生”，不是学习具体的知识，而是学习一种状态——如何与历史共处，如何让传统活在当下，如何在一条千年的阶梯上，走出自己此刻的、独特的步伐。当你下山时，你带走的不会是几张照片，而是一种混合着书香、乐声与石阶凉意的、关于时间本身的复杂滋味。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/viseu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bom-jesus-do-monte-braga" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉加仁慈耶稣朝圣所</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bom Jesus do Monte</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/guimaraes-historical-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    吉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">吉马良斯历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Guimarães Historical Centre</p>
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
