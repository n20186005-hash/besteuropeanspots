import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉滕贝格 Rattenberg｜探访奥地利蒂罗尔州最小古镇，迷失在光影流转的玻璃艺术迷宫 - 最佳欧洲景点',
  description: '第一眼看见拉滕贝格，你可能会先怀疑自己的地图——它小得像个精致的模型，被巨大、嶙峋的城堡山岩壁以一种近乎庇护的姿态半搂在怀里，另一面则是静静流淌的、翡翠色的因河。走进那唯一的城门，时间仿佛被骤然压缩。脚下的石板路被几个世纪的脚步磨得温润发亮，两旁的房屋像彩色积木般紧密依偎，外墙是鹅黄、淡粉、浅薄荷绿...',
}

export default function RattenbergTirolPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '拉滕贝格', href: '/attractions/rattenberg-tirol' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉滕贝格・Rattenberg・奥地利・蒂罗尔州拉滕贝格镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看见拉滕贝格，你可能会先怀疑自己的地图——它小得像个精致的模型，被巨大、嶙峋的城堡山岩壁以一种近乎庇护的姿态半搂在怀里，另一面则是静静流淌的、翡翠色的因河。走进那唯一的城门，时间仿佛被骤然压缩。脚下的石板路被几个世纪的脚步磨得温润发亮，两旁的房屋像彩色积木般紧密依偎，外墙是鹅黄、淡粉、浅薄荷绿，窗台上永远盛开着天竺葵的鲜红。空气里有一种独特的混合气息：老木头晒过太阳的干燥香味，从咖啡馆飘出的新鲜苹果卷（Apfelstrudel）的甜香，还有一丝几乎难以察觉的、灼热的矿物气息——那是从某家玻璃工坊半掩的门后逸出的秘密。
这座小镇的脉搏，藏在那些看似不起眼的店铺深处。叮叮当当的清脆声响是这里的背景音乐。凑近一家工坊的橱窗，你会看到魔法正在发生：匠人手持一根长长的吹管，末端是一团炽热明亮、如同液态阳光的玻璃浆。他轻轻吹气，旋转，那团火球便仿佛有了生命，在钳子与模具的引导下，舒展成优雅的花瓶、灵动的小鹿，或是璀璨的吊灯部件。光在这里被赋予了形态和灵魂。当地人的生活与这玻璃艺术早已水乳交融，你可能看到一位穿着传统Dirndl连衣裙的老奶奶，正平静地擦拭着自家商店橱窗里价值连城的古董玻璃杯，神态就像在打理自家的厨房。
最打动人心的，或许是它那份“迷你”中蕴含的无限深度。因为太小，你无法匆匆走过。你会注意到门楣上雕刻的古老徽章，会驻足聆听从石头缝隙里渗出的历史回响，会与街角面包店的老板自然而然地攀谈。下午的阳光斜射进狭窄的巷道，在五彩的墙壁上切出锐利的光影，而各家店铺里陈列的玻璃制品，则将这光线再次分解、折射、散射，让整个小镇内部都弥漫着一种梦幻的、闪烁的光晕。它不像一个景点，更像一个被小心珍藏的琥珀，将中世纪的风貌、匠人的专注和阿尔卑斯山区的宁静，完美地封存其中。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看见拉滕贝格，你可能会先怀疑自己的地图——它小得像个精致的模型，被巨大、嶙峋的城堡山岩壁以一种近乎庇护的姿态半搂在怀里，另一面则是静静流淌的、翡翠色的因河。走进那唯一的城门，时间仿佛被骤然压缩。脚下的石板路被几个世纪的脚步磨得温润发亮，两旁的房屋像彩色积木般紧密依偎，外墙是鹅黄、淡粉、浅薄荷绿，窗台上永远盛开着天竺葵的鲜红。空气里有一种独特的混合气息：老木头晒过太阳的干燥香味，从咖啡馆飘出的新鲜苹果卷（Apfelstrudel）的甜香，还有一丝几乎难以察觉的、灼热的矿物气息——那是从某家玻璃工坊半掩的门后逸出的秘密。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座小镇的脉搏，藏在那些看似不起眼的店铺深处。叮叮当当的清脆声响是这里的背景音乐。凑近一家工坊的橱窗，你会看到魔法正在发生：匠人手持一根长长的吹管，末端是一团炽热明亮、如同液态阳光的玻璃浆。他轻轻吹气，旋转，那团火球便仿佛有了生命，在钳子与模具的引导下，舒展成优雅的花瓶、灵动的小鹿，或是璀璨的吊灯部件。光在这里被赋予了形态和灵魂。当地人的生活与这玻璃艺术早已水乳交融，你可能看到一位穿着传统Dirndl连衣裙的老奶奶，正平静地擦拭着自家商店橱窗里价值连城的古董玻璃杯，神态就像在打理自家的厨房。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，或许是它那份“迷你”中蕴含的无限深度。因为太小，你无法匆匆走过。你会注意到门楣上雕刻的古老徽章，会驻足聆听从石头缝隙里渗出的历史回响，会与街角面包店的老板自然而然地攀谈。下午的阳光斜射进狭窄的巷道，在五彩的墙壁上切出锐利的光影，而各家店铺里陈列的玻璃制品，则将这光线再次分解、折射、散射，让整个小镇内部都弥漫着一种梦幻的、闪烁的光晕。它不像一个景点，更像一个被小心珍藏的琥珀，将中世纪的风貌、匠人的专注和阿尔卑斯山区的宁静，完美地封存其中。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉滕贝格`} />
                <InfoRow label="英文名称" value={`Rattenberg`} />
                <InfoRow label="正式名称" value={`Rattenberg`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`蒂罗尔州拉滕贝格镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`蒂罗尔州面积最小、历史悠久的城镇，从中世纪起便是连通南北商路的重要隘口，如今是奥地利乃至欧洲闻名遐迩的玻璃手工艺之都。`} />
                <InfoRow label="建筑特色" value={`紧凑迷你的中世纪街巷网络与色彩斑斓的联排房屋，被宏伟的城堡山岩壁和波光粼粼的因河温柔环抱。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式和文艺复兴风格为主，混杂着巴洛克元素的后继装饰，形成了典型的阿尔卑斯山麓历史城镇风貌。`} />
                <InfoRow label="文化价值" value={`一座将千年军事要塞历史与数百年顶尖玻璃手工艺传统完美融合的活态博物馆，是阿尔卑斯山区商业、艺术与生活智慧的微观缩影。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇本身全天开放，散布其中的玻璃工坊、商店及博物馆开放时间各异，通常为周一至周六上午9点至下午6点，许多商店周日及冬季部分时段歇业。位于山上的拉滕贝格城堡遗址全年可自由探访，但无照明设施，建议白天前往。夏季（5月至9月）是游览旺季，几乎所有店铺和博物馆都会开放；冬季部分店铺可能缩短营业时间或为圣诞季做特别布置。`} />
              <InfoRow label="门票价格" value={`进入拉滕贝格古镇无需门票。参观玻璃工坊的吹制演示通常是免费的，但鼓励消费。小镇上的玻璃博物馆（Glasmuseum）门票约为成人8欧元，儿童优惠价4欧元。山顶城堡遗址免费参观。部分联合套票或工坊深度体验课程需额外付费，价格在30-150欧元不等。`} />
              <InfoRow label="地址" value={`Rattenberg, 6240, Tirol, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是因斯布鲁克机场（INN），距离约50公里。从机场乘坐出租车直达约45分钟，费用较高。更推荐乘坐公共交通：从因斯布鲁克火车站（Innsbruck Hauptbahnhof）搭乘区域火车（ÖBB或S-Bahn），前往沃格尔（Wörgl）或库夫施泰因（Kufstein）方向，在“拉滕贝格-基希贝格”（Rattenberg-Kirchbichl）站下车，车程约30-40分钟，班次频繁。出火车站后，步行穿过因河（Inn River）上的桥梁，大约5-10分钟即可进入古镇中心。小镇内完全步行，无需任何车辆。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`拉滕贝格的故事，始于那座威严的城堡山和它脚下湍急的因河。早在10世纪，巴伐利亚的贵族们就看中了这个扼守因河河谷、控制盐与商品运输通道的战略要地。城堡的兴建，为这个定居点赋予了名字（“Rat”可能与建议或议会有关，“Berg”是山），更赋予了它军事与经济的双重重要性。到了14世纪初，巴伐利亚公爵们正式授予它市场权和城市权，一座围墙环绕的小城在岩壁下迅速繁荣起来。商队驮着南方的货物和北方的盐，在这里交汇、歇脚，财富随之积聚，那些色彩鲜艳的商人宅邸便是明证。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，拉滕贝格的命运在15世纪迎来了一次意想不到的转折，这与其说是战争，不如说是一场信仰的迁徙。当时，波西米亚和西里西亚地区的新教徒遭受迫害，其中有许多是技艺高超的玻璃工匠。蒂罗尔的统治者，尤其是热衷于艺术与科学的马克西米利安一世大公，向他们张开了欢迎的臂膀。这些身怀绝技的难民，发现了拉滕贝格的完美条件：茂密的森林提供了烧制玻璃所需的丰富木柴，清澈的因河保障了水源，而坚固的城墙则提供了安全感。于是，玻璃制造的火焰第一次在这里点燃，并再也没有熄灭。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的数百年，拉滕贝格在战争的边缘摇摆。它曾数次易主，城墙在拿破仑战争期间甚至被部分拆除。但无论政治风云如何变幻，那玻璃窑炉里的火却越烧越旺。工匠们的技艺代代相传，从制造实用的器皿、窗户玻璃，发展到创作无比精美的艺术品、水晶饰品和奢华的吊灯。小镇的街巷里，敲打、切割、雕刻玻璃的声音逐渐成为了主旋律。那些从中世纪留存下来的厚重石屋，一层变成了作坊，二层是家庭居所，临街的窗户则成了展示晶莹剔透作品的舞台。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，特别是二战之后，当许多类似的历史小镇面临消亡时，拉滕贝格却找到了自己独特的生存之道。它欣然接受并强化了“奥地利玻璃小镇”的标签。家族经营的工坊不仅坚持手工制作，更开放过程让旅人参观，将制造的神秘化为可体验的魔力。古老的建筑被精心维护，但内部可能是一家世界上最现代化的玻璃艺术画廊。今天的拉滕贝格，是一座活着的纪念碑。它纪念的不仅是那段作为军事要塞的过往，更是人类双手的创造力如何将柔软的沙与炽热的火，转化为永恒之美的传奇。走在街上，你触摸到的不仅是中世纪的墙砖，更是延续了五百年的、依然温热的工匠精神。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览拉滕贝格的精髓在于“慢”与“细”。建议在上午9点左右抵达，这时旅游团尚未涌入，晨光恰好照亮城堡岩壁，小镇刚刚苏醒。整体游览需预留至少5-6小时，节奏宜舒缓。上午专注于探索街巷、参观玻璃工坊的现场制作；午后上山俯瞰全景并探访城堡遗址，最后在傍晚时分感受小镇灯光初上与玻璃制品交相辉映的魔幻时刻。这样的安排既能避开人流高峰，又能体验光影变化下小镇的不同面貌。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`中午12点到下午3点是小镇最拥挤的时段，尽量将工坊参观和博物馆行程安排在这之前或之后。参观工坊时切勿触摸未冷却的作品或干扰工匠，保持安静尊重。穿一双舒适耐磨的徒步鞋非常必要，上下城堡山的石头小路可能有些湿滑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从因河对岸的火车站慢慢走过古桥，第一件事是回头拍下城堡山与小城倒映在碧绿河水中的经典画面`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过唯一的古城门（Untertor），立刻右转钻进一条小巷，随意漫步，让好奇心引领你去发现外墙壁画和有趣的店铺门脸`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到一家正在工作的玻璃工坊（如“Glasmanufaktur”或“Kunstglaserei”），安静地站在一旁观看老师傅吹制一件作品的全过程，感受那份专注与灼热`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`前往小镇中心的玻璃博物馆，花上一小时细细了解从古埃及到当代的玻璃艺术史，特别是拉滕贝格本地大师的作品`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着标记清晰的步道开始攀登城堡山，途中在几个观景平台歇脚，俯瞰小镇彩色屋顶如乐高积木般铺展的迷人景象`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达山顶的城堡遗址，触摸残垣断壁，想象中世纪士兵在此守望河谷的情景，并享受360度的阿尔卑斯山全景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后，在主街找一家有露天座位的咖啡馆，点一份蒂罗尔蛋糕配奶油，看着街上的行人，消化一天的见闻`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分，再次漫步小巷，此时许多商店橱窗的灯光亮起，里面的玻璃艺术品变得璀璨夺目，与渐暗的天色形成绝美对比`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`因河对岸仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在连接火车站与古镇的桥梁中段，可以拍到城堡山、古镇建筑群及其完美水中倒影的对称构图`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`玻璃工坊内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`选择一家有临街大窗户的工坊，在下午阳光斜射时，从窗外向内拍摄工匠在金色炉火前工作的剪影，氛围感十足`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣维吉尔教堂旁的小广场`}</h4>
                  <p className="text-sm text-gray-700">{`站在广场边缘，以教堂的哥特式塔楼和彩色房屋为背景，等待一位当地人或马车经过，捕捉生动的生活场景`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡山半山腰观景台`}</h4>
                  <p className="text-sm text-gray-700">{`使用中长焦镜头，压缩空间感，拍摄古镇密集的屋顶、教堂尖顶与远处雪山同框的层次分明的画面`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`夜幕降临时的主街橱窗`}</h4>
                  <p className="text-sm text-gray-700">{`利用三脚架长曝光，拍摄灯光下琳琅满目的玻璃制品所折射出的迷离光斑与古老街巷的融合`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄商店橱窗内的玻璃艺术品前，最好征得店主同意，许多精品禁止拍照。使用偏振镜可以有效减少玻璃表面的反光，让作品色彩更纯净。在狭窄巷弄中，尝试将鲜艳的门窗与上方一线天的光影结合，能拍出很有故事感的照片。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济首选`}</h4>
                  <p className="text-sm text-blue-800">{`位于古镇入口处由古老农舍改造的家庭旅馆，房间简洁温馨，房东会热情地为你规划步行路线并推荐本地人最爱的小餐馆`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`下榻一家本身就在经营玻璃工坊的家族酒店，房间装饰着自家制作的玻璃艺术品，甚至可能包含一次私人定制的吹玻璃体验课`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`住在因河对岸基希贝格（Kirchbichl）地区的四星级湖畔酒店，拥有直面拉滕贝格城堡山的无敌全景阳台，享受宁静与奢华服务`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`冬季限定`}</h4>
                  <p className="text-sm text-purple-800">{`选择小镇附近山上的传统阿尔卑斯木屋民宿，白天滑雪或徒步，晚上回来在壁炉边烤火，体验真正的蒂罗尔山区生活`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`拉滕贝格镇内住宿选择非常有限且抢手，务必提前数月预订，尤其是夏季和圣诞市场期间。如果订不到，住在仅一河之隔、火车一站路的基希贝格或几公里外的库夫施泰因是完美替代方案，交通极其便利。小镇夜晚极为安全宁静，但大部分餐厅关门较早，建议安排好晚餐时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开拉滕贝格时，你的口袋里或许会多了一枚小小的、在掌心握得温热的玻璃镇纸，或是一对晶莹的耳环。但更珍贵的收获，是一种关于“尺度”与“密度”的全新感悟。在这个推崇宏大与快速的世界上，这座小镇骄傲地保持着它的“最小”，却将历史、艺术、自然美景和人间烟火，以难以置信的密度浓缩在方寸之间。它告诉你，深度从不取决于面积，而在于沉淀的厚度与专注的深度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的光是双重的——既有阿尔卑斯山脉慷慨赠予的、清澈明亮的自然天光，更有数百年来人类用智慧与汗水点燃的、将硅砂化为璀璨艺术的创造之光。拉滕贝格像一个隐喻：我们每个人的人生或许都有其局限的边界（就像那些城墙），但真正的广阔与闪耀，源于我们如何在自己的边界内专注燃烧，将最普通的材料点化成诗。它不是一个匆匆一瞥的“景点”，而是一个需要你停下脚步、调动所有感官去细细品读的童话。对于任何渴望在旅途中遇见历史质感、艺术灵魂与生活温度的人来说，拉滕贝格都是一次必须的、微小而震撼的抵达。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/hohenwerfen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍亨维尔芬城堡（飞鹰堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hohenwerfen Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/heiligenkreuz-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    海
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">海利根克罗伊茨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Heiligenkreuz Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/admont-abbey-library-ice-age-encounter" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿德蒙特修道院图书馆（与冰河世纪的相遇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Admont Abbey Library (Encounter with the Ice Age)</p>
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
