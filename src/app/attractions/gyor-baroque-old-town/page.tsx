import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '杰尔巴洛克老城 Győr Baroque Old Town｜漫步于时光凝固的奶油色调色盘 - 最佳欧洲景点',
  description: '想象一下，你拐过一个不起眼的街角，突然闯入一个被时光温柔浸泡过的世界。眼前的街道不是灰色的，而是铺着一层淡淡的、温暖的奶油色。阳光斜斜地打在那些三四层高的房子上，蜜糖黄、象牙白、淡杏粉的墙壁，被岁月打磨出一种温润的光泽，像一块巨大的、可口的千层蛋糕。这就是杰尔巴洛克老城给你的第一眼印象——它不是宫殿...',
}

export default function GyorBaroqueOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '杰尔巴洛克老城', href: '/attractions/gyor-baroque-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`杰尔巴洛克老城・Baroque Old Town of Győr・匈牙利・杰尔 (Győr)`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你拐过一个不起眼的街角，突然闯入一个被时光温柔浸泡过的世界。眼前的街道不是灰色的，而是铺着一层淡淡的、温暖的奶油色。阳光斜斜地打在那些三四层高的房子上，蜜糖黄、象牙白、淡杏粉的墙壁，被岁月打磨出一种温润的光泽，像一块巨大的、可口的千层蛋糕。这就是杰尔巴洛克老城给你的第一眼印象——它不是宫殿，不是城堡，而是一整片活着的、可以呼吸的街区。空气中飘着好闻的味道，是街角面包房刚出炉的肉桂卷的甜香，混合着远处咖啡馆飘来的浓郁咖啡香，还有从拉鲍河上吹来的、带着一丝水汽的微风。
你脚下的石板路被几个世纪的行人走得光滑发亮，缝隙里长着点点青苔。街道很窄，两边的阳台几乎要碰到一起，那些精美的锻铁栏杆上，挂着盛开的天竺葵，红色的花朵像一簇簇小火焰，在奶油色的背景上跳跃。你不需要地图，只管信步走去。耳边是各种生活的声音：楼上传来的钢琴练习曲断断续续，隔壁小店门铃叮咚一响，几个老爷爷坐在广场长椅上用匈牙利语慢悠悠地聊着天，语调和这座老城的节奏一样舒缓。在这里，辉煌的巴洛克不是博物馆里的标本，它就是人们每天回家的路，是孩子玩耍的巷子，是情侣约会时背景里那道最美的墙。
最打动人的，是那种无处不在的“生活的艺术感”。每一扇门楣上都有精致的灰泥雕塑，可能是缠绕的葡萄藤，也可能是微笑的小天使，但它们不是为了炫耀，只是当初建造者觉得生活就应该被美包围。窗户的形状各异，有圆拱的，有方形的，装着木质的百叶窗。光影就在这些立面上作画，随着时间移动，上演一场无声而盛大的戏剧。你会觉得，这座城市不是被设计出来的，而是像一棵树一样，从历史的土壤里自然生长出来，每一道纹理都记录着阳光、雨水和人们的呼吸。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你拐过一个不起眼的街角，突然闯入一个被时光温柔浸泡过的世界。眼前的街道不是灰色的，而是铺着一层淡淡的、温暖的奶油色。阳光斜斜地打在那些三四层高的房子上，蜜糖黄、象牙白、淡杏粉的墙壁，被岁月打磨出一种温润的光泽，像一块巨大的、可口的千层蛋糕。这就是杰尔巴洛克老城给你的第一眼印象——它不是宫殿，不是城堡，而是一整片活着的、可以呼吸的街区。空气中飘着好闻的味道，是街角面包房刚出炉的肉桂卷的甜香，混合着远处咖啡馆飘来的浓郁咖啡香，还有从拉鲍河上吹来的、带着一丝水汽的微风。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你脚下的石板路被几个世纪的行人走得光滑发亮，缝隙里长着点点青苔。街道很窄，两边的阳台几乎要碰到一起，那些精美的锻铁栏杆上，挂着盛开的天竺葵，红色的花朵像一簇簇小火焰，在奶油色的背景上跳跃。你不需要地图，只管信步走去。耳边是各种生活的声音：楼上传来的钢琴练习曲断断续续，隔壁小店门铃叮咚一响，几个老爷爷坐在广场长椅上用匈牙利语慢悠悠地聊着天，语调和这座老城的节奏一样舒缓。在这里，辉煌的巴洛克不是博物馆里的标本，它就是人们每天回家的路，是孩子玩耍的巷子，是情侣约会时背景里那道最美的墙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种无处不在的“生活的艺术感”。每一扇门楣上都有精致的灰泥雕塑，可能是缠绕的葡萄藤，也可能是微笑的小天使，但它们不是为了炫耀，只是当初建造者觉得生活就应该被美包围。窗户的形状各异，有圆拱的，有方形的，装着木质的百叶窗。光影就在这些立面上作画，随着时间移动，上演一场无声而盛大的戏剧。你会觉得，这座城市不是被设计出来的，而是像一棵树一样，从历史的土壤里自然生长出来，每一道纹理都记录着阳光、雨水和人们的呼吸。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`杰尔巴洛克老城`} />
                <InfoRow label="英文名称" value={`Baroque Old Town of Győr`} />
                <InfoRow label="正式名称" value={`Baroque Old Town of Győr`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`杰尔 (Győr)`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`匈牙利西部最重要的历史名城之一，是多瑙河支流交汇处的一颗明珠，被誉为“河流之城”，其巴洛克面貌是18世纪城市从奥斯曼帝国破坏后浴火重生的见证。`} />
                <InfoRow label="建筑特色" value={`以柔和的奶油色、蜜糖色和淡粉色外墙为主，点缀着精美的灰泥装饰、锻铁阳台和红瓦屋顶，形成和谐统一的视觉乐章。`} />
                <InfoRow label="建筑风格" value={`以18世纪鼎盛时期的巴洛克风格为主导，混杂了部分晚期文艺复兴和古典主义元素，整体呈现出典型的奥地利哈布斯堡王朝影响下的中欧城镇风貌。`} />
                <InfoRow label="文化价值" value={`这里是匈牙利巴洛克城市规划和市民生活的活标本，不仅展示了建筑美学，更保存了中世纪街道肌理与巴洛克建筑完美融合的独特城市格局。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`整个老城区公共区域全天24小时开放，可自由漫步。区域内各博物馆、教堂等独立建筑的开放时间各异，通常为周二至周日10:00-18:00，周一闭馆。主教城堡内部的展览和科苏特广场周边的咖啡馆、商店营业时间通常为9:00-17:00。圣诞节及元旦等重大节日，室内景点可能关闭，但街道依旧可游览。`} />
              <InfoRow label="门票价格" value={`漫步老城街区及参观外部建筑免费。进入内部景点需单独购票：主教城堡博物馆成人票约1500福林（约4欧元）；圣伊格纳茨教堂免费参观，登塔楼约800福林；阿帕查·奇塞·亚诺什博物馆成人票约1200福林。学生、老年人和团体通常有折扣，家庭套票更优惠。建议购买“杰尔卡”（Győr Card），可在多家博物馆和交通上使用。`} />
              <InfoRow label="地址" value={`Győr, Széchenyi tér 1, 9021 Hungary`} />
              <InfoRow label="交通方式" value={`从布达佩斯出发最便捷：在布达佩斯火车东站或西站乘坐火车，前往杰尔（Győr）火车站，车程约1小时15分钟，每小时有2-3班列车，可通过匈牙利国铁（MÁV）官网或App提前购票，有折扣。从维也纳出发，火车车程约1.5小时。杰尔火车站位于老城边缘，步行10分钟即可到达科苏特广场（Kossuth tér）——巴洛克老城的入口。市内公交系统发达，但老城核心区是步行天堂，不建议开车进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解这片奶油色街区的灵魂，得把时钟拨回到几个世纪以前。杰尔坐落于多瑙河、拉鲍河和拉布卡河的交汇处，这个得天独厚的位置，注定了它的命运多舛与坚韧不拔。早在古罗马时期，这里就有一个叫“阿拉克·拉博里亚”的定居点。中世纪，它已成为一个繁荣的皇家城镇，拥有坚固的城墙。但真正的转折点，是16世纪奥斯曼土耳其帝国的铁蹄席卷匈牙利。杰尔成了前线堡垒，在长达一个半世纪的对抗中饱受战火摧残，许多中世纪的建筑化为废墟。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当奥斯曼的势力终于在17世纪末被逐出，杰尔几乎成了一片空白石板。而这时，城市的命运迎来了它的“建筑师”——不是一个人，而是一股力量：哈布斯堡王朝的统治和反宗教改革的天主教会。18世纪初，随着政局稳定，一场雄心勃勃的城市重建运动开始了。来自奥地利、意大利的建筑师和工匠们涌入这里，他们带来了当时欧洲最流行的巴洛克风格。但杰尔的重建并非完全推倒重来，聪明的规划者巧妙地利用了幸存下来的中世纪街道网络，就像在一幅古老的素描上，用巴洛克的笔触重新上色、勾勒细节。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，你看到了今天我们漫步的奇迹：中世纪的曲折小巷得以保留，但两旁的建筑全部披上了巴洛克的新衣。主教城堡得到了加固和美化，新的教堂如圣伊格纳茨教堂拔地而起，富商和贵族们竞相建造精美的宅邸，他们用柔和的色彩和繁复的灰泥装饰来展示财富与信仰。这个时期，杰尔成为了主教教区所在地，宗教与世俗权力共同塑造了城市的面貌。那些墙上的圣徒雕塑、屋顶的十字架，不仅是为了美观，更是宣告着天主教在这片重新征服的土地上的胜利。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的风暴从未停歇。19世纪的工业革命带来了铁路，杰尔再次繁荣，但二战和1956年匈牙利革命又给了它沉重的打击。许多建筑被损坏。值得庆幸的是，在二十世纪中后期，人们意识到了这片老城的无价。一场细致而漫长的修复工程开始了。工匠们没有采用“焕然一新”的方式，而是小心翼翼地清洗墙壁，修复灰泥装饰，补上脱落的砖瓦，目标是让老城“优雅地老去”。他们成功了。今天你触摸到的墙壁，有些颜色可能来自二十年前的修复，但那份历经沧桑的质感，那份融合了中世纪根基、巴洛克辉煌与现代守护的层次感，正是杰尔老城独一无二、直击人心的力量所在。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受杰尔巴洛克老城的韵律，建议安排至少大半天的时间。最好的抵达时间是清晨九点左右，这时阳光柔和，游客稀少，本地生活刚刚苏醒，街道笼罩在一种宁静而本真的氛围中。整体游览耗时约4-5小时，节奏宜慢不宜快，核心是“迷失”在巷弄中。路线从老城的历史与交通门户——科苏特广场开始，顺时针绕行，依次探访主教城堡、教堂广场、蜿蜒的住宅街区，最后抵达河岸，以拉鲍河畔的宁静视野收尾。这样安排既能把握主要地标，又能留出充足的时间进行无目的的探索，捕捉那些计划外的美好瞬间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`中午12点到下午2点，主广场和塞切尼街上的旅行团较多，建议这个时段钻进旁边更安静的小巷探索或找家咖啡馆休息。穿着绝对要舒适，石板路凹凸不平，高跟鞋是噩梦。老城小偷不多，但基本的安全意识要有，随身包最好放在身前。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从开阔的科苏特广场出发，首先仰望那尊象征城市自由精神的雕像，感受现代杰尔与古老街区的过渡`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的拱门走进塞切尼街，让眼睛慢慢适应两侧骤然升起的、装饰着精美灰塑的奶油色建筑立面`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主教城堡的庭院里转个圈，抚摸粗糙的石墙，想象这里曾是防御土耳其人的坚固堡垒`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入静谧的教堂广场，让圣伊格纳茨教堂双塔的阴影落在身上，听一听从厚重木门内隐约传出的管风琴声`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拐进那条著名的“杏仁糖小巷”，看阳光如何把那些粉色和黄色的小房子照得如同童话里的糖果屋`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到“铆钉屋”，盯着它外墙上一排排凸起的金属钉琢磨一会儿，这是匈牙利独一无二的建筑奇观`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄的“修道院小巷”慢慢下行，感受两边高墙带来的压迫感与历史感，仿佛能听到修女们轻轻的脚步声`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终来到拉鲍河畔，靠在栏杆上，看河水倒映着对岸巴洛克建筑的倩影，天鹅缓缓游过，彻底放松脚步`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`杏仁糖小巷中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光最为理想，能让人物站在巷子中间，两侧色彩柔和的巴洛克山墙和蜿蜒的街道形成天然的引导线，画面充满故事感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主教城堡塔楼下的拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，利用拱门作为天然画框，拍摄框内远处的圣伊格纳茨教堂塔楼，创造深邃的景深和明暗对比`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`拉鲍河对岸的视角`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，走到河对岸的步行道，可以拍到整个巴洛克老城建筑群在水中的完整倒影，暖黄色的灯光陆续亮起，天空是蓝调时刻，色彩层次极佳`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“铆钉屋”特写与街景结合`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，虽然不适合拍人，但能清晰拍出铆钉屋墙上那数百颗黑色铆钉的独特质感，构图时可带入一点旁边的街道和行人，交代环境`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人对于拍摄他们的住宅或商店外部通常很友善，但若想拍摄私人庭院内部或橱窗特写，最好先微笑示意征求同意。使用无人机在历史城区上空飞行有严格限制，务必提前查询当地法规，通常需要特别许可。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`住在历史的心脏里`}</h4>
                  <p className="text-sm text-blue-800">{`选择教堂广场附近由18世纪贵族宅邸改造的精品酒店，房间有挑高的彩绘天花板和古老的木地板，晚上能独享空无一人的浪漫广场`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计师的复古梦境`}</h4>
                  <p className="text-sm text-green-800">{`藏在某条安静小巷中的小型设计酒店，将巴洛克元素与现代简约风完美融合，露台早餐直接面对一片红色的瓦屋顶海洋`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨的家庭公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`在老城边缘一栋鹅黄色建筑里，房东太太会为你准备自制的果酱和咖啡，从窗户望出去就是典型的杰尔街景，像住在本地朋友家`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`河畔景观之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于拉鲍河对岸的现代四星级酒店，虽然不在老城内，但拥有俯瞰整个巴洛克老城天际线的绝佳视野，尤其是夜景无敌`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿大多位于历史建筑中，可能没有电梯，预订时需留意。夏季和圣诞市场期间是旺季，务必提前数月预订。街区非常安全，夜晚散步点亮灯光的老城别有风味。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开杰尔许久，那片奶油色的光影还会时常在脑海里浮现。它不像巴黎或罗马那样有着压倒性的、令人惊叹的雄伟，它的魅力是渗透式的，像一杯温度刚好的蜂蜜茶，慢慢暖到心里去。在这个追求速度和刺激的时代，杰尔巴洛克老城提供了一种截然不同的旅行价值：它教你慢下来，去观察一堵墙上光影的移动，去聆听一条小巷自己的回响，去品味一种将日常生活过成艺术的可能。在这里，历史不是教科书上冰冷的章节，它就活在你指尖触摸的墙壁纹理里，活在阳台那盆盛开的鲜花里，活在咖啡馆老人平静的眼眸里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`我想，这就是深度旅行的意义吧。我们跨越千山万水，不仅仅是为了打卡地标，更是为了寻找那些能与我们内心节奏产生共鸣的角落。杰尔老城就是这样一个角落。它提醒我们，美可以不必张扬，辉煌能够与生活和解。它是一首用石头、色彩和时光写成的温柔诗篇，等待每一个愿意放慢脚步、用心阅读的行人。如果你也渴望一场能治愈浮躁、找回生活质感的旅行，那么，请一定把这片多瑙河畔的奶油色梦境，列入你的清单。它或许不会让你热血沸腾，但一定会让你念念不忘。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
