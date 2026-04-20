import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '胡姆城旅游攻略：探访世界最小城镇的中世纪时光胶囊',
  description: '探访克罗地亚胡姆城Hum，吉尼斯认证世界最小城镇。这份深度游攻略带你走进仅30人的石头小镇，体验纯粹中世纪生活。',
}

export default function HumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '胡姆城', href: '/attractions/hum' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`胡姆城・Hum・克罗地亚・伊斯特拉县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了人山人海的“著名”景点，想找个地方真正地“躲进”历史里喘口气，那今天这份胡姆城私藏旅游攻略，可能就是为你准备的。在地图上，你得把眼睛凑得很近才能发现它的存在——位于克罗地亚伊斯特拉半岛的内陆山区，Hum（胡姆）被吉尼斯世界纪录官方认证为“世界上最小的城镇”。这不是一个比喻，它真的只有一条主街，两排石屋，常住居民二三十人，几分钟就能从“城东”走到“城西”。但正是这种极致的“小”，让它保留了令人惊叹的纯粹。作为你的专属向导，这份自由行指南将带你穿越那扇古老的城门，去触碰被时光打磨光滑的石头，聆听一个微型社区如何用几个世纪的时间，守护着一份关于宁静与完整的古老契约。相信我，这绝对是你伊斯特拉半岛深度游中，最意想不到的宝石。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了人山人海的“著名”景点，想找个地方真正地“躲进”历史里喘口气，那今天这份胡姆城私藏旅游攻略，可能就是为你准备的。在地图上，你得把眼睛凑得很近才能发现它的存在——位于克罗地亚伊斯特拉半岛的内陆山区，Hum（胡姆）被吉尼斯世界纪录官方认证为“世界上最小的城镇”。这不是一个比喻，它真的只有一条主街，两排石屋，常住居民二三十人，几分钟就能从“城东”走到“城西”。但正是这种极致的“小”，让它保留了令人惊叹的纯粹。作为你的专属向导，这份自由行指南将带你穿越那扇古老的城门，去触碰被时光打磨光滑的石头，聆听一个微型社区如何用几个世纪的时间，守护着一份关于宁静与完整的古老契约。相信我，这绝对是你伊斯特拉半岛深度游中，最意想不到的宝石。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`胡姆城`} />
                <InfoRow label="英文名称" value={`Hum`} />
                <InfoRow label="正式名称" value={`Hum`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`伊斯特拉县`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`胡姆城的历史，是一部关于“微小但坚韧”的生存史诗。它并非凭空出现，而是中世纪伊斯特拉半岛复杂政治与军事格局下的独特产物。大约在11世纪，作为附近更大城堡格罗日尼扬（Grožnjan）的前哨防御点而建立。在战乱频仍的中世纪，这种微型但坚固的“城堡城镇”是领主们控制领土、保护税收和贸易路线的重要棋子。胡姆的独特之处在于，它完美地扮演了这个角色，并奇迹般地“存活”了下来，没有像许多类似的小型定居点那样被废弃或吞并。它的历史地位不在于发生过什么改变世界的战役，而在于它本身就是一个活生生的历史样本——一个几乎完整保留了中世纪晚期社会结构、防御理念和生活空间形态的“时间胶囊”。在威尼斯共和国、哈布斯堡王朝等大国势力你方唱罢我登场的伊斯特拉历史长卷中，胡姆就像一颗固执的钉子，牢牢地钉在山丘上，以其微小的体量，见证并承载了宏观历史变迁下，一个微观社区的连续性与韧性。`} />
                <InfoRow label="建筑特色" value={`走近胡姆，视觉上首先被征服的，是一种浑然天成的“石之美学”。整座城镇就像是从这片灰白色石灰岩山地里生长出来的一样。环绕的城墙不是装饰，是真正的、厚实而粗粝的防御工事，石头表面布满风化的痕迹和深色苔藓。那扇唯一的、低矮的主城门是点睛之笔，由厚重的木材和铁件制成，当你弯腰穿过它时，瞬间有种踏入另一个时空的仪式感。城内的房屋全部由石头砌成，外墙几乎不加粉刷，呈现出岩石最本真的灰白、淡黄和赭石色调。屋顶是厚重的石板瓦，层层叠压，在亚得里亚海的阳光下泛着银灰色的光泽。脚下的主街（其实更像一条小巷）铺着被无数脚步磨得温润光滑的卵石，缝隙间长出细嫩的青草。所有的线条都是简单、直接、实用的，没有多余的曲线或雕刻。光线在这里玩着奇妙的游戏：正午时分，阳光垂直洒下，将石屋的棱角切割出锋利的光影；而到了傍晚，斜阳为每一块石头镀上温暖的金边，整座小城仿佛在散发着内部的光芒。空气里弥漫着石头吸热后散发的干燥尘土味，混杂着附近森林传来的松脂清香。`} />
                <InfoRow label="建筑风格" value={`胡姆的建筑风格很难用单一的“哥特式”或“罗马式”来界定，它是一种非常质朴、功能至上的中世纪本地石建传统与罗马风（Romanesque） 的混合体，我们可以称之为“伊斯特拉乡土罗马风”。罗马风的影响体现在其整体的厚重、稳固与简洁上。最典型的代表是城内的圣哲罗姆教堂，它拥有罗马风建筑典型的厚墙、小窗和朴素的立面，旨在营造一种内向、肃穆和受庇护的空间感，这与小镇的防御性质一脉相承。建筑大量使用圆拱元素，不仅在教堂的门窗上，在一些老屋的入口和地窖也能看到。但更重要的是它的“乡土性”：建筑完全采用本地石材，工艺粗犷而实用，一切形式服从于防御（厚墙、高窗）、耐久（石结构）和本地气候（石板屋顶防风耐雨）。没有飞扶壁，没有繁复的玫瑰窗，这里的“风格”就是生存本身。走在其中，你感受到的不是建筑师的艺术宣言，而是一代代居民用最直接的材料和智慧，应对自然与历史挑战所沉淀下的生命痕迹。这种风格，让胡姆不像一座建筑博物馆，而像一个依然在呼吸的古老生命体。`} />
                <InfoRow label="文化价值" value={`在当今这个追求“更大、更快、更多”的世界里，胡姆的存在本身就是一种强有力的文化宣言。它的核心文化价值在于证明了“小”的完整性、自足性与珍贵性。对于仅存的二三十位居民来说，胡姆不是一个旅游噱头，而是他们生活的全部世界，一个血脉、记忆与日常紧密交织的共同体。他们维护着祖传的石屋，在教堂举行仪式，管理着微型市政机构（是的，它有市长！），经营着一两家家庭餐馆和手工艺店。这种微型社区的持续运作，是现代社会中关于“地方认同”和“可持续生活”的宝贵案例。胡姆也像一块文化的“压舱石”，保存着濒临消失的本地传统，比如古老的格拉哥里字母（Glagolitic，一种古老的斯拉夫字母）传统。小镇入口处著名的“格拉哥里字母大道”和相关的文化展示，将这座微观小镇与克罗地亚更宏大的民族文化叙事连接起来。它提醒着我们，文化的活力不仅存在于大都市的潮流中，也深深扎根于这些拒绝被时间洪流卷走的、宁静而坚定的角落。对游客而言，拜访胡姆是一次“精神减法”，让人反思生活的本质与规模。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 胡姆城一日游打卡路线攻略：漫步世界最小城`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线（精华半日/一日）`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我设计的这条胡姆城一日游路线，精髓在于“慢”和“沉浸”。它不需要狂奔，只需要你放下焦虑，让感官完全打开。上午（建议10点前抵达，避开可能的午后迷你人流），我们把车停在城外的小停车场，首先别急着进城！请先沿着小路走到城镇对面的小山坡上，那里是拍摄胡姆全景的绝佳位置——晨曦中，整个石头小镇宛如一座精致的模型。然后，带着这份整体印象，走向那扇著名的主城门，弯腰进入，正式开始时光漫步。进城后右转，沿着唯一的主街慢慢走，触碰墙壁，感受石头的温度。很快你会看到圣哲罗姆教堂，进去感受一下那份静谧。中午，就在小镇里解决午餐，选择一家家庭餐馆的露天座位。饭后别急着走，去逛逛石匠博物馆或小店，和店主聊聊天（他们可能英语有限，但笑容是世界通用的）。下午，可以沿着城墙根散步，或者就坐在广场的长椅上发呆，看光线的移动，听风声穿过石缝。如果意犹未尽，可以驱车前往仅几公里外的姐妹小镇格罗日尼扬（Grožnjan），那里是艺术家聚集地，氛围不同，但同样迷人。这样的一天，不是填满行程，而是让心灵被宁静充满。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  圣哲罗姆教堂内的壁画眼神：走进昏暗的圣哲罗姆教堂，让你的眼睛适应光线。然后，请仔细观看祭坛侧方那些中世纪湿壁画的残片。尽管色彩斑驳，但其中圣哲罗姆或圣徒的面容依然可辨。重点看他们的眼睛——那不是文艺复兴时期那种充满人性光辉的眼神，而是一种更古老、更抽象、更内向的凝视。笔法简单甚至有些生硬，却传递出一种直达灵魂的虔诚与专注。一束微光从小窗射入，恰好拂过壁画的脸庞，那一刻，你会感觉到中世纪信徒那种纯粹而强烈的精神世界，穿越数百年，与你瞬间相通。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  主城门与吊桥的“进入仪式”：胡姆的入口绝非普通门洞。仔细观察那两扇厚重的木门，上面巨大的铁制门钉和加固条诉说着防御的过往。更精彩的是门前那座短小的木制吊桥（如今已固定）。想象一下，中世纪时，入夜或遇敌情，这座桥会被升起，切断与外界的一切联系。当你今天走过这座吱呀作响的小桥，弯腰穿过低矮的门洞时，请刻意放慢脚步。这个动作是一个强烈的心理暗示，仿佛穿过一道结界，将车马喧嚣的现代世界彻底关在门外，准备迎接一个由石头、寂静和历史构成的微观宇宙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  石匠博物馆里的工具与触感：在名为“Casa di Pietra”（石头之家）的小博物馆里，别只看，请尝试去“感受”。展出的老式石匠工具——凿子、锤子、水准仪，手柄都被磨得油亮，那是无数工匠手掌汗水与力量的浸润。伸手（如果可以的话）轻轻触摸一旁展示的本地石材样本，感受它们的粗糙质地与冰凉温度。正是用这些简单的工具，对付这些坚硬的石头，一代代人搭建起了整个胡姆。这个细节将抽象的建筑变成可触摸的劳动史诗，让你对眼前每一块墙石的敬意油然而生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  小镇制高点的风声与视野：找到主街尽头一个不起眼的石阶，登上城墙的一小段步行道（这是允许的）。这里是胡姆的制高点。站稳后，先闭上眼睛，听——风声在这里被放大了，它呼啸着掠过城墙雉堞，穿过石板屋顶的缝隙，发出类似古老号角或长笛的呜咽声，那是小镇永恒的背景音乐。然后睁开眼，向外望去，眼前是延绵起伏的伊斯特拉绿色丘陵，点缀着柏树、橄榄园和葡萄园，一片宁静的世外桃源。向内看，小镇的红色瓦顶、石板路和迷你广场尽收眼底。这个位置让你同时拥有了胡姆的“内”与“外”，理解了它既是遗世独立的堡垒，又是这片丰饶土地温柔的一部分。`}</p>
            </div>
          </Section>

          <Section title={`5. 胡姆城自由行避坑指南与行前须知`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间就是一切，避开“人群”：胡姆太小了，一辆旅游大巴就能瞬间塞满主街。最佳游览时间是平日上午（10点前）或傍晚（日落前1-2小时）。尽量避开周末下午。这里没有真正的“门票”，但极致宁静的体验本身就是最珍贵的门票，选对时间才能获得它。小镇官方“景点”如教堂、博物馆开放时间可能很随意，建议抱着“随缘”的心态，遇到开放就是惊喜。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  穿着与装备：舒适为王：务必穿一双绝对舒适、防滑的平底鞋！石板路古老不平，高跟鞋或硬底鞋会是一场灾难。小镇完全户外，夏季阳光强烈，帽子、太阳镜、防晒霜必备。春秋季山区温差大，带一件防风外套。由于地方极小，不需要带大量徒步装备，轻装上阵即可。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  交通与心态调整：胡姆位于山区，自驾是最方便的方式，公路风景优美但多弯道，请小心驾驶。公共交通极不便利，几乎可以忽略。停车场地非常有限，早点到有位置。最重要的是调整预期：这里没有刺激的娱乐项目，没有豪华餐厅，甚至厕所都可能只有一两个公共的。你来是为了体验“微小”、“寂静”和“古老”。带上耐心和一颗愿意慢下来的心，这才是打开胡姆的正确方式。`}</p>
            </div>
          </Section>

          <Section title={`6. 胡姆城周边住宿与美食攻略：住在中世纪旁`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`胡姆城本身太小，没有真正的酒店住宿，但这恰恰是乐趣所在——你可以住在附近更具生活气息的古镇，把胡姆当作一个宁静的日间探险目的地。推荐住在几公里外的科特利（Buzet）或格罗日尼扬（Grožnjan）。科特利被称为“松露之城”，酒店和公寓选择更多，性价比高。格罗日尼扬则是艺术家小镇，有许多由石屋改造的特色民宿（B&B），住在这里更能体验伊斯特拉山城的文艺氛围，推开窗就是无限田园风光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`至于美食，胡姆城内有一两家家庭经营的传统餐馆（Konoba），千万不要错过。一定要在爬满葡萄藤的露天石桌边坐下。必点菜式包括：伊斯特拉风干火腿（Pršut） 配本地橄榄；用野生松露（Tartufi） 调味的意面或煎蛋（秋冬季节尤其鲜美）；炖得酥烂的牛肉或野味（Goulash） 配手工面疙瘩（Žlikrofi）；最后用一杯本地产的玛尔维萨（Malvazija）白葡萄酒或特拉米纳（Teran）红葡萄酒佐餐。食物朴实但风味浓郁，吃的是这片土地最本真的味道。老板可能就是厨师兼服务员，那种家庭式的温暖服务，是大型餐厅无法比拟的体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  格罗日尼扬（Grožnjan）：距离胡姆仅约7公里，自驾十几分钟。如果说胡姆是“静止的中世纪战士”，那么格罗日尼扬就是“复活的艺术精灵”。这座同样位于山顶的石头小镇在20世纪60年代后被艺术家们“占领”，如今画廊、工作室、音乐学校遍布。小巷里随处可闻钢琴或小提琴声，墙壁上装饰着现代艺术装置，与古老石墙形成有趣对话。在这里喝杯咖啡，逛逛画廊，感受艺术如何为古老躯壳注入新的灵魂。两个小镇连起来玩，是完美的“历史与艺术”主题一日游。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  “伊斯特拉长城”之路（Road of the Istrian Giants）：这是一条连接伊斯特拉半岛多个山顶古镇的风景路线，胡姆和格罗日尼扬都是其中的明珠。如果你自驾，强烈建议沿着这条路的标识继续探索。你会经过莫特文（Motovun）（另一座宏伟的松露古镇），欣赏到更加壮阔的河谷与葡萄园景观。这条路线本身就是一场穿越中世纪山城与伊斯特拉田园风光的视觉盛宴，让你理解胡姆并不是一个孤立的奇观，而是这片土地上一种独特聚居形态的极致体现。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`胡姆城的灵魂，就藏在它的“小”里。它用极致的微小，捍卫了一种生活的完整性与精神的富足。在这里，你学到的不是宏大的历史日期，而是一种态度：如何用有限的材料（石头），在有限的空间里，构筑一个足以抵御时间侵蚀的、宁静而自足的世界。离开时，你带走的不是纪念品，而是一份关于“尺度”与“意义”的宁静回响。它提醒你，有时候，世界需要的不是更多，而是更深刻；不是更广阔，而是更完整。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/korcula" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔丘拉岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Korčula</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibenik-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pula-arena" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普拉竞技场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pula Arena</p>
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
