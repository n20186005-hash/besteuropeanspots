import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃斯塔瓦耶旅游攻略：玫瑰色中世纪古城与青蛙博物馆奇遇自由行指南',
  description: '瑞士埃斯塔瓦耶(Estavayer-le-Lac)深度游攻略。探索纳沙泰尔湖畔保存完好的玫瑰色中世纪古城、古老城堡，并揭秘全球独一份的搞怪“青蛙博物馆”。这份攻略包含一日游路线与避坑指南。',
}

export default function EstavayerLeLacPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '埃斯塔瓦耶', href: '/attractions/estavayer-le-lac' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃斯塔瓦耶・Estavayer-le-Lac・瑞士・弗里堡州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果我说在瑞士有一个地方，像一块被时光遗忘的蜜糖，同时又藏着一个能让你笑出声的“恶作剧”，你会不会心动？今天这份埃斯塔瓦耶私藏旅游攻略，就带你躲开因特拉肯和卢塞恩的人潮，钻进弗里堡州这个纳沙泰尔湖畔的宝藏小镇。想象一下：脚下是泛着玫瑰光泽的古老石板路，眼前是倒映着城堡与老屋的湛蓝湖面，空气里混合着湖水清新的湿气与咖啡馆飘出的烘焙香。而最大的彩蛋，是一座陈列着上百只、摆着人类姿势的……标本青蛙博物馆。作为你的专属向导，这份自由行指南请收好，我们将从如何抵达开始，带你完整探索这座将中世纪优雅与无厘头幽默完美融合的小城，绝对是一次颠覆你对瑞士印象的深度游。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果我说在瑞士有一个地方，像一块被时光遗忘的蜜糖，同时又藏着一个能让你笑出声的“恶作剧”，你会不会心动？今天这份埃斯塔瓦耶私藏旅游攻略，就带你躲开因特拉肯和卢塞恩的人潮，钻进弗里堡州这个纳沙泰尔湖畔的宝藏小镇。想象一下：脚下是泛着玫瑰光泽的古老石板路，眼前是倒映着城堡与老屋的湛蓝湖面，空气里混合着湖水清新的湿气与咖啡馆飘出的烘焙香。而最大的彩蛋，是一座陈列着上百只、摆着人类姿势的……标本青蛙博物馆。作为你的专属向导，这份自由行指南请收好，我们将从如何抵达开始，带你完整探索这座将中世纪优雅与无厘头幽默完美融合的小城，绝对是一次颠覆你对瑞士印象的深度游。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃斯塔瓦耶`} />
                <InfoRow label="英文名称" value={`Estavayer-le-Lac`} />
                <InfoRow label="正式名称" value={`Estavayer-le-Lac`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`弗里堡州`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`别看埃斯塔瓦耶现在一副与世无争的宁静模样，在中世纪，它可是个“狠角色”。它的历史地位，紧密联系着纳沙泰尔湖的水路与周边陆地的控制权。大约在13世纪，萨瓦公爵家族在此建立了坚固的城堡，埃斯塔瓦耶迅速成长为湖畔一个重要的设防城镇和贸易站。它的地理位置堪称战略咽喉——正好处于从日内瓦湖区通往伯尔尼高地的要道上，同时掌控着湖上航运。在13到15世纪间，它像一颗坚固的钉子，深深扎在萨瓦公国与伯尔尼势力范围的交界地带，见证了无数次的权力博弈与领土变更。直到1475年，它被伯尔尼和弗里堡的联军征服，自此命运与弗里堡州紧密相连。正因这段作为前沿要塞的历史，使得它的中世纪城市结构——包括城墙、城堡和规整的街道——被异常完好地保存了下来，没有被后来大规模的工业化改造所破坏，宛如一枚凝固了时间的琥珀。`} />
                <InfoRow label="建筑特色" value={`埃斯塔瓦耶的建筑会“说话”，用的是最温柔的颜色。整座老城的主旋律是一种迷人的“埃斯塔瓦耶玫瑰色”。这不是单一的粉，而是当地开采的砂岩在数百年风化后呈现出的温暖色谱：从清晨阳光下的蜜糖金，到午后浓郁的杏粉色，再到夕阳时分接近覆盆子果酱的深红。建筑材质统一而和谐，大多是用这种砂岩砌成，屋顶铺着厚重的暗红色瓦片。漫步其中，你会被细节征服：许多房屋的外墙装饰着精美的凸肚窗，窗棂是深色的木头，与暖色石墙形成对比；门楣上雕刻着家族徽章或建造年代（16XX年的字样随处可见）；街道狭窄而弯曲，两侧建筑的屋顶几乎要碰在一起，只在中间留下一线天光。而矗立在城镇高处的埃斯塔瓦耶城堡，则是另一种庄严的存在。它由厚重的灰黄色石块建成，方正的塔楼、陡峭的屋顶和狭小的射击孔，无声地诉说着它最初的防御使命，与山下那些玫瑰色的民居形成温柔与刚毅的对话。`} />
                <InfoRow label="建筑风格" value={`埃斯塔瓦耶老城是瑞士保存最完好的中世纪晚期城镇之一，其建筑风格可以精准地定义为 **“中世纪民用建筑”** 与 **“早期文艺复兴影响下的萨瓦式防御建筑”** 的混合体。通俗点说，就是“过日子”的风格和“保家园”的风格在这里和谐共处。民用建筑部分（那些玫瑰色的房子）体现了典型的中世纪城镇规划：布局紧凑以节约用地，房屋山墙面向街道，底层通常用作商铺或作坊，上层居住。你能看到陡峭的坡屋顶（为了快速排掉积雪）、实用的凸肚窗（既扩大室内空间，又便于观察街道）。而城堡则是更纯粹的防御建筑风格，属于萨瓦公爵时期的遗产。它不像后来法国那种奢华城堡，而是功能至上：厚达数米的城墙、用于倾倒滚木礌石的垛口、提升吊桥的机械结构（虽然现在已不存在），都是为战争服务。有趣的是，在后来相对和平的岁月里，一些民居的门窗装饰开始出现简单的文艺复兴线条，比如对称的图案和更规则的几何形状，为坚硬的中世纪底色添上了一丝人文主义的柔光。`} />
                <InfoRow label="文化价值" value={`埃斯塔瓦耶的文化价值在于它生动地保存了瑞士法语区一种独特的小镇生活样本，并且以一种令人忍俊不禁的方式，展现了当地人幽默、甚至有点“古怪”的内心世界。对当地人而言，这座古城不是博物馆里的标本，而是他们日常生活的背景板。每周六的市集在城堡广场举行，居民们在此交换新闻、购买本地农产品，中世纪的空间依然履行着社区的社交功能。而那个举世无双的“青蛙博物馆”（正式名称为“埃斯塔瓦耶博物馆-青蛙收藏”），则是文化价值最奇特的注脚。它源于19世纪一位名叫弗朗索瓦·佩里耶的市民的“恶趣味”收藏。他将108只青蛙标本拟人化，摆成各种人类生活场景：理发、打牌、上课、参军……这看似荒诞的行为，实则是对当时资产阶级社会生活幽默而略带讽刺的模仿。它打破了瑞士严谨、精确的刻板印象，告诉你这里的居民同样拥有天马行空的想象力和不惧展示“怪异”的坦然。这份独特的文化遗产，让埃斯塔瓦耶不仅是一座美丽的古城，更是一个有性格、有故事、能与人产生奇妙情感联结的地方。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 埃斯塔瓦耶一日游打卡路线攻略：从湖畔漫步到青蛙奇遇`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线（顺时针环形游览）`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`好了，我的旅行故事开始为你导航！这条路线设计成轻松的环形，让你不走回头路，完美覆盖所有精华。**上午（沉浸历史）：** 建议9点左右到达，把车停在老城外围的停车场（免费或收费便宜）。先从**湖滨长廊**开始，迎着晨光看看天鹅，远眺对岸的汝拉山，感受小镇苏醒的宁静。接着，沿着标志性的**Rue du Lac**路向上走，正式进入玫瑰色老城。第一个重头戏是**埃斯塔瓦耶城堡**（外观免费，博物馆需购票），花点时间绕着它走一圈，感受它的威严。**中午（光影与美食）：** 从城堡广场钻进迷宫般的小巷，比如**Rue du Château**或**Rue de la Fontaine**，正午的阳光透过狭窄的街巷，在玫瑰色墙面上切割出迷人的光影，是拍照的黄金时间。找一家有露天座位的传统餐馆解决午餐，尝尝湖鱼。**下午（奇遇与闲逛）：** 午餐后，直奔今天的“高潮”——**青蛙博物馆**（就在城堡广场旁市政厅建筑内）。预留至少一个小时，保证让你大开眼界、笑个不停。之后，可以逛逛老城里的各种精品小店、古董店，或者回到**湖畔码头**，如果季节合适，甚至可以坐一趟湖上游船。**傍晚（日落时分）：** 在湖边的长椅或咖啡馆露台上坐下，等待日落将整个小镇染成金红色，为这完美的一天画上句号。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>城堡塔楼的“守卫者”视角</strong>：一定要设法登上城堡主塔楼（如果开放）。当你从那些狭小的石窗望出去时，瞬间就理解了中世纪守卫的心情。眼前是整个纳沙泰尔湖像一块巨大的、波光粼粼的蓝绸缎铺开，老城的红屋顶如鱼鳞般整齐地排列在脚下，一直延伸到湖畔。远处是墨绿色的森林和绵延的汝拉山轮廓线。这个视野，是理解埃斯塔瓦耶地理战略地位最直观的方式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>老城拱廊下的光影剧场</strong>：在老城主要街道<strong>Rue du Lac</strong>的一段，有一段连续的石头拱廊。午后时分，阳光斜射进来，在古老的地板上投下清晰的、不断移动的拱形光斑。廊柱的阴影与明亮的光带交织，行人走过，影子被拉得很长，仿佛上演着一出静谧的光影默剧。站在这儿，你能听到脚步声在拱廊下产生的轻微回响，混合着隔壁面包店的香味，这是中世纪街道留给现代人的一份立体感官礼物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>湖滨步道与天鹅的晨间约定</strong>：清晨的纳沙泰尔湖畔步道是体验小镇灵魂的绝佳地点。湖水拍打着石岸，发出有节奏的“哗啦”声。几乎总能看到成群的天鹅和野鸭优雅地游弋。当地人常常会带着孩子来这里喂鸟。这时，空气格外清新，带着水藻和湿润石头的气息。对岸的莫拉山（Mont Vully）倒映在如镜的湖面上，城堡的尖顶在背景中勾勒出天际线，是一幅动态的、充满生机的瑞士田园诗画。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>青蛙博物馆的“教室”场景</strong>：在青蛙博物馆那108个荒诞场景中，最令人过目不忘的莫过于“青蛙学校”。十几只大小不一的青蛙标本被固定成坐姿，整齐地排列在微缩的木头课桌后，全都“目不转睛”地盯着前方讲台上那只戴着眼镜、拿着教鞭的“青蛙老师”。老师身后还有一块真正的微型黑板，上面用粉笔写着字。这个场景的细节惊人，每一只青蛙的表情（尽管是标本）似乎都透着一种专注或顽皮。它以一种极其怪诞又精准的方式，捕捉并凝固了19世纪课堂的瞬间，让人在发笑之余，不禁感慨创造者那复杂难言的幽默感和观察力。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间选择与人流规避</strong>：埃斯塔瓦耶周末和夏季午后（特别是7-8月）游客会稍多，但远谈不上拥挤。<strong>最佳游览时间是平日（周二至周五）的上午或春季（5-6月）、初秋（9月）。</strong> 青蛙博物馆空间很小，如果遇到旅游团可能会有点挤，建议一早或午饭后刚开门时去。<strong>注意</strong>：瑞士许多小博物馆周一闭馆，青蛙博物馆也不例外，行前务必在其官网或市政厅网站确认最新开放时间，避免吃闭门羹！" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿着与步行建议</strong>：老城里全是凹凸不平的石头路和缓坡，<strong>务必穿一双舒适、防滑的平底鞋</strong>，高跟鞋在这里是“自虐”。湖边步道和码头附近，早上露水重或雨后石板会很滑，走路要小心。即使是夏天，湖边风也可能微凉，备一件薄外套是明智之举。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>交通与门票贴士</strong>：<strong>自驾</strong>是最方便的方式，老城外围有多个标识清晰的停车场（如Place de la Gare附近）。<strong>公共交通</strong>可从纳沙泰尔（Neuchâtel）或弗里堡（Fribourg）乘火车到达Estavayer-le-Lac站，下车步行约10-15分钟进入老城。<strong>门票</strong>：城堡博物馆和青蛙博物馆通常有联票，比单独购买划算，在城堡或市政厅的售票处可询问。如果你有瑞士旅行通票（Swiss Travel Pass），很可能包含门票或享受折扣，别忘了出示。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>防盗与消费提醒</strong>：这里治安极好，但贵重物品仍建议随身保管。小镇消费属于典型瑞士水平，略高。湖边餐厅风景好但价格稍贵，老城内的小餐馆或咖啡馆性价比更高。如果想节约，可以去Coop或Migros超市（车站附近有）买熟食和水果，带到湖边野餐，是体验本地人生活且省钱的好方法。" }} />
            </div>
          </Section>

          <Section title={`6. 埃斯塔瓦耶周边住宿与美食攻略：住在玫瑰石屋，品尝湖鲜美味`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想真正沉浸在这玫瑰色的梦境里，不妨考虑住上一晚。老城内和湖边有几家迷人的<strong>家庭式旅馆（B&B）或小型精品酒店</strong>，它们通常由历史建筑改造，房间可能有着裸露的石墙、古老的木梁，推开窗就是爬满藤蔓的庭院或宁静的街巷，比如 <strong>“Hôtel de la Croix Blanche”</strong> 就坐落在老城中心，历史悠久。如果追求现代舒适，火车站附近也有标准的连锁酒店。<strong>餐饮</strong>方面，纳沙泰尔湖的恩赐是绝不能错过的。推荐尝试 <strong>“Filets de perche”</strong> （湖鲈鱼柳），通常是裹上轻薄面粉煎炸，配以柠檬角和薯条，鱼肉鲜嫩无比。可以去 <strong>“Le Vieux Manoir”</strong> 或 <strong>“Restaurant du Lac”</strong> 这类湖景餐厅享用。更接地气的选择是去老城广场上的 <strong>“Café du Marché”</strong>，点一份本地奶酪火锅（Fondue）或拉可雷特奶酪（Raclette），配上一杯弗里堡州产的葡萄酒。别忘了，瑞士巧克力店和面包房也是探索重点，买一块手工巧克力或一个新鲜出炉的“三王节面包”（Galette des Rois，如果在季节内），都是甜蜜的回忆。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>莫拉半岛与格朗迪卡里采自然保护区（Grande Caricaie）</strong>：从埃斯塔瓦耶沿着湖向东开车或骑行不到10分钟，就能到达莫拉半岛（Presqu‘île de Morat / Murten）。这里完全不同！它拥有广阔的芦苇荡、湿地和森林，是观鸟和自然爱好者的天堂。设有完善的步行和自行车道，你可以租一辆自行车，穿行在芦苇丛中的木栈道上，聆听各种鸟鸣，运气好还能看到河狸活动的痕迹。这是一个从人文历史切换到纯自然模式的完美调剂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>中世纪小镇莫拉（穆尔滕）与格鲁耶尔地区</strong>：如果时间充裕，强力推荐向北驱车约30分钟，前往另一个保存完好的湖畔中世纪小镇<strong>莫拉（Murten/Morat）</strong>，它的环形城墙可以全程走上去，风景绝佳。再远一点（车程约50分钟），就可以进入著名的<strong>格鲁耶尔（Gruyères）</strong> 地区，参观那座宛如童话的格鲁耶尔城堡，以及隔壁异想天开的HR吉格尔（异形设计师）博物馆，最后用一顿正宗奶酪大餐和奶油双拼（Double Crème）收尾，形成一次从古典到奇幻的“弗里堡州文化三角”深度探索。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "埃斯塔瓦耶的灵魂，是玫瑰色砂岩的温暖坚实与青蛙标本那荒诞幽默的奇妙共生。它告诉你，瑞士的美不止于雪山湖光的明信片风景，更在于这些小镇里，历史被小心地捧在掌心，而生活却可以自由地、带着笑意与之共舞。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chillon-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    西
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">西庸城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chillon Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/abbey-of-saint-gall-library" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣加仑修道院图书馆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Abbey of Saint Gall</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/morcote-lake-lugano-switzerland" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫尔科特</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Morcote</p>
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
