import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '哈恩古城 The Historic Quarter of Jaén｜橄榄油与古堡交织的安达卢西亚秘境 - 最佳欧洲景点',
  description: '第一眼看到哈恩，你可能会有点懵。它不像格拉纳达那样一上来就用阿尔罕布拉宫把你震住，也不像塞维利亚那样用弗拉门戈的热情将你包围。它静静地趴在山坡上，头顶是巨大而沉默的城堡，身下是一层层密密麻麻的白房子，像一块被随意丢在橄榄树海洋里的、晒得发白的古老贝壳。你需要走近它，爬上那些被无数代人鞋底磨得发亮的陡...',
}

export default function JaenHistoricQuarterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '哈恩', href: '/destinations/spain' },
            { label: '哈恩古城', href: '/attractions/jaen-historic-quarter' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`哈恩古城・The Historic Quarter of Jaén・西班牙・哈恩`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到哈恩，你可能会有点懵。它不像格拉纳达那样一上来就用阿尔罕布拉宫把你震住，也不像塞维利亚那样用弗拉门戈的热情将你包围。它静静地趴在山坡上，头顶是巨大而沉默的城堡，身下是一层层密密麻麻的白房子，像一块被随意丢在橄榄树海洋里的、晒得发白的古老贝壳。你需要走近它，爬上那些被无数代人鞋底磨得发亮的陡峭石阶，才能听到它的心跳。空气里永远浮动着一种复杂的香气——那是炙热石头的气味、某个庭院里飘出的浓郁炖菜香，以及无处不在的、清冽而新鲜的橄榄油味道。没错，这里是世界橄榄油之都，这液体黄金的气息，就是古城的呼吸。
钻进老城的巷子，你会立刻失去方向感，但请享受这种迷失。这里的白墙不是为了取悦游客而刷，而是安达卢西亚人对抗烈日的生活智慧。阳光砸在墙上，又被窄巷挤压成锋利的光刃，在地面投下深深的、清凉的蓝色阴影。你的耳边是交织的声音：某扇木窗后传来哗啦啦的洗碗声和电视里的足球解说，头顶晾衣绳上鸟儿的啁啾，以及远处隐约的教堂钟鸣。当地人擦肩而过时，会对你投来平静而略带好奇的一瞥，那眼神仿佛在说：“哦，你找到这里来了。”他们不是在表演生活，他们就是在生活，而你，是偶然闯入这片时空的旁观者。
最打动我的，是那种强烈的“层叠感”。伊斯兰统治时期留下的不规则街道肌理，上面叠加着基督教收复后建起的宏伟教堂和宫殿。你在一家挂着火腿的现代酒吧喝咖啡，抬头却发现天花板的木梁是五百年前的穆德哈尔式样，雕刻着繁复的星星与莲花。这种不经意的交融，让哈恩成了一本可以漫步翻阅的立体历史书。它的魅力不在喧嚣的景点，而在这些寂静的角落——一个布满鲜花的隐蔽庭院，一个可以看到城堡全景的破旧阳台，一家老板坚持用古法为你品尝橄榄油的小店。在这里，时间不是线性的，它沉淀在每一块石头、每一缕油香和每一个慢悠悠的午后里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到哈恩，你可能会有点懵。它不像格拉纳达那样一上来就用阿尔罕布拉宫把你震住，也不像塞维利亚那样用弗拉门戈的热情将你包围。它静静地趴在山坡上，头顶是巨大而沉默的城堡，身下是一层层密密麻麻的白房子，像一块被随意丢在橄榄树海洋里的、晒得发白的古老贝壳。你需要走近它，爬上那些被无数代人鞋底磨得发亮的陡峭石阶，才能听到它的心跳。空气里永远浮动着一种复杂的香气——那是炙热石头的气味、某个庭院里飘出的浓郁炖菜香，以及无处不在的、清冽而新鲜的橄榄油味道。没错，这里是世界橄榄油之都，这液体黄金的气息，就是古城的呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`钻进老城的巷子，你会立刻失去方向感，但请享受这种迷失。这里的白墙不是为了取悦游客而刷，而是安达卢西亚人对抗烈日的生活智慧。阳光砸在墙上，又被窄巷挤压成锋利的光刃，在地面投下深深的、清凉的蓝色阴影。你的耳边是交织的声音：某扇木窗后传来哗啦啦的洗碗声和电视里的足球解说，头顶晾衣绳上鸟儿的啁啾，以及远处隐约的教堂钟鸣。当地人擦肩而过时，会对你投来平静而略带好奇的一瞥，那眼神仿佛在说：“哦，你找到这里来了。”他们不是在表演生活，他们就是在生活，而你，是偶然闯入这片时空的旁观者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，是那种强烈的“层叠感”。伊斯兰统治时期留下的不规则街道肌理，上面叠加着基督教收复后建起的宏伟教堂和宫殿。你在一家挂着火腿的现代酒吧喝咖啡，抬头却发现天花板的木梁是五百年前的穆德哈尔式样，雕刻着繁复的星星与莲花。这种不经意的交融，让哈恩成了一本可以漫步翻阅的立体历史书。它的魅力不在喧嚣的景点，而在这些寂静的角落——一个布满鲜花的隐蔽庭院，一个可以看到城堡全景的破旧阳台，一家老板坚持用古法为你品尝橄榄油的小店。在这里，时间不是线性的，它沉淀在每一块石头、每一缕油香和每一个慢悠悠的午后里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`哈恩古城`} />
                <InfoRow label="英文名称" value={`The Historic Quarter of Jaén`} />
                <InfoRow label="正式名称" value={`The Historic Quarter of Jaén`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`哈恩`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`安达卢西亚内陆的千年门户，见证了伊比利亚半岛上基督教与伊斯兰文明的漫长博弈与交融。`} />
                <InfoRow label="建筑特色" value={`山顶雄踞着庞大的圣卡塔利娜城堡，山下是迷宫般蜿蜒的白色街巷，共同勾勒出独一无二的山城天际线。`} />
                <InfoRow label="建筑风格" value={`以穆德哈尔风格为核心，完美融合了伊斯兰的精细几何、哥特式的垂直精神与文艺复兴的均衡典雅。`} />
                <InfoRow label="文化价值" value={`它是安达卢西亚“深处西班牙”灵魂的活态样本，其橄榄油文化、圣周传统与建筑遗产同等重要。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。核心景点圣卡塔利娜城堡（Castillo de Santa Catalina）开放时间通常为周二至周日上午10:00至下午2:00，以及下午5:00至晚上8:00（夏季可能延长至晚9点）；冬季下午时段调整为4:00至7:00。每周一、1月1日、1月6日、5月1日及12月25日闭馆。哈恩主座教堂开放时间较为复杂，通常为工作日上午10:30-1:30 & 5:00-8:00，周末及弥撒时间会调整，建议行前在其官网再次确认。古城内许多小博物馆和教堂有各自独立的、时常变化的时间表。`} />
              <InfoRow label="门票价格" value={`漫步古城街巷本身完全免费。圣卡塔利娜城堡门票为5欧元，65岁以上长者、学生及儿童可享折扣价3欧元，周二下午对欧盟公民免费（可能需出示证件）。哈恩主座教堂参观免费，但进入其珍宝室、回廊或登塔需支付约4-6欧元的费用。联合通票（Bono Turístico）偶尔推出，涵盖城堡、教堂及省级博物馆，约10欧元，可在旅游信息中心查询购买。`} />
              <InfoRow label="地址" value={`Plaza de Santa María, s/n, 23002 Jaén, Spain`} />
              <InfoRow label="交通方式" value={`哈恩有自己的小型机场（Aeropuerto de Jaén），但航班极少。最实用的方式是飞往格拉纳达的费德里科·加西亚·洛尔卡机场（GRX），然后乘坐ALSA公司的大巴直达哈恩汽车站，车程约1小时45分钟，班次每天约6-8班。从马德里或塞维利亚出发，搭乘高速火车（AVE）至哈恩火车站（Estación de Jaén）是最舒适的选择，从马德里出发约3小时。火车站和汽车站距离古城约2.5公里，可搭乘L4、L5或U路公交车（约15分钟）至“Plaza de la Constitución”站下车即进入古城核心，车票约1.2欧元。更推荐直接打车，费用约6-8欧元，省时省力。自驾的话，古城外围有多个收费停车场，但老城内街道狭窄且多为单行线，强烈不建议驾车进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起哈恩的历史，就得从它那座无法忽视的城堡讲起。早在罗马时代，这座俯瞰广阔平原的山头就是兵家必争的瞭望塔。但真正赋予它灵魂的，是公元8世纪后北非而来的摩尔人。他们看中了这里无与伦比的战略位置，把它打造成了一个坚固的边境堡垒，叫做“Geen”或“Jayyān”，意为“商队之路”。那时的哈恩，是连接科尔多瓦哈里发国与格拉纳达王国的重要枢纽，城堡下的城区开始繁荣，清真寺、市场和水渠被建立起来。你能想象吗，如今教堂林立的土地上，曾回荡着宣礼的呼唤，空气中混合着香料、皮革和来自东方的商品气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在13世纪。随着基督教王国向南的“收复失地运动”推进，哈恩成了冲突最激烈的前线之一。城堡在基督徒和穆斯林之间反复易手，围城战成了家常便饭。最著名的一次是1225年，传奇的卡斯蒂利亚国王费尔南多三世率军围城，据说战斗异常惨烈。关于这场战役，流传着一个动人的传说：当基督徒军队久攻不下、士气低落时，夜幕中城堡上空突然出现了圣卡塔利娜（亚历山大的圣凯瑟琳）的幻影，她手持发光利剑，鼓舞了士气。尽管那次并未成功，但“圣卡塔利娜”的名字从此与这座城堡紧紧相连，并在1246年费尔南多三世最终征服哈恩后，正式成为城堡的名称。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`被纳入卡斯蒂利亚王国后，哈恩迎来了身份的重塑与融合。大量穆斯林工匠留了下来，在基督教国王的统治下继续工作，于是产生了独特的“穆德哈尔风格”——用伊斯兰的工艺为基督教建筑服务。你会在主座教堂、在圣伊尔德丰索教堂看到它：灰泥上精美的几何图案、错综复杂的木质天花板（artesonado），与哥特式的拱券和玫瑰窗奇妙地共存。这个时期，哈恩成为了一个繁荣的边境城市，贵族们修建宫殿，教会大兴土木。但它的军事属性并未消退，城堡被不断加固，始终警惕着南方的格拉纳达王国。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1492年格拉纳达陷落，西班牙统一，哈恩终于从持续的边境战争中解脱出来。和平带来了新的发展，但重心从军事转向了经济。环绕城市的无边无际的橄榄林，开始成为真正的财富来源。文艺复兴和巴洛克时期的富商与教会，将财富倾注在建筑上，留下了如今我们看到的主座教堂那令人惊叹的、被称为“安达卢西亚文艺复兴灯塔”的宏伟立面。然而，随着大航海时代中心转向沿海，哈恩这个内陆山城逐渐安静下来，从历史的聚光灯下退场，反而意外地保存了一种更为本真、缓慢的节奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了近现代，哈恩经历了西班牙内战的创伤，也经历了经济起伏的阵痛。但它始终守护着自己的根。那成百上千公顷的橄榄园，至今仍是城市的命脉。古城里的许多老宅，被精心修复，变成了文化中心、特色酒店或家庭旅舍。今天的哈恩人，会带着同样的自豪感向你讲述城堡围城的故事，以及他们橄榄油在国际上获得的奖项。历史在这里不是博物馆里的标本，而是流淌在日常中的血液——在老人聚在广场闲聊的往事里，在圣周游行中沉重的鼓声中，也在每一滴浇在面包上的、金黄透亮的初榨橄榄油里。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正领略哈恩的精髓，你需要一整天的时间，并准备好一双舒适的步行鞋。最佳的游览节奏是“从上到下，由远及近”。建议在早上9点前抵达圣卡塔利娜城堡，这时晨光柔和，游客稀少，你可以独占瞭望台，享受城堡与朝阳为伴的静谧时刻。在城堡逗留约2小时后，沿着历史悠久的蜿蜒步道“Cuesta de San Ildefonso”下山，这条路本身就是一道风景。下山后，正是午餐前的时间，可以深入老城迷宫般的小巷，感受当地人的生活气息。下午重点参观宏伟的主座教堂及其周边广场，然后在傍晚时分，找一家地道的橄榄油吧（Bar de Aceite）坐下来品味。这样安排既避开了正午时分攀登城堡的酷热，又能捕捉到一天中古城光影最动人的两个时刻——清新的早晨与温暖的黄昏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必避开西班牙下午2点到5点的极端炎热时段进行户外徒步，这段时间最适合在阴凉的教堂内部参观或享受漫长的午餐。穿一双绝对防滑的鞋子，古城的许多石板路因年代久远而被磨得光滑，尤其是在有坡度的巷子里。对街头过于热情、要给你系“幸运手绳”的人礼貌而坚决地摇头走开，这是常见的针对游客的小骗局。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨赶在第一缕阳光洒向橄榄园时登上圣卡塔利娜城堡，在空旷的堡垒废墟和瞭望台上独享360度无死角的震撼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`仔细探寻城堡内部的各个展厅，从地下蓄水池走到高高的塔楼，用手触摸那些留有弹痕和岁月刻痕的冰冷石壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着著名的圣伊尔德丰索坡道缓缓下山，让脚步带领你穿过一道道斑驳的石拱门，两旁是盛开着天竺葵的白色民居阳台。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进哈恩主座教堂那令人屏息的内部，仰头凝视高耸的拱顶和精美的唱诗班座椅，感受光线从彩窗倾泻而下的神圣静谧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在迷宫般的老城小巷里故意“迷路”，偶遇一个安静的内院广场，听喷泉潺潺，看老人在长椅上读报。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开一家本地人常去的橄榄油吧的木门，点一杯当地产的“皮库多”橄榄油和几片乡村面包，让老板教你如何像品酒一样品味不同风土的油脂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到圣玛丽亚广场，找一张露天咖啡座，看着教堂立面被夕阳染成金黄，等待广场上的街灯一盏盏亮起。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡最高观景台东北角`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，以广角镜头框入远处连绵的橄榄林海洋、山下的白色古城以及更远方朦胧的山脉，构成完美的景深层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣伊尔德丰索坡道中段石拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射入拱门，拍摄人物从光与影交界处走过的剪影或侧影，背景是深邃的巷弄。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`哈恩主座教堂回廊庭院`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光直射庭院中心，利用回廊的拱券形成天然画框，捕捉阳光在精致石雕上跳跃的光影游戏。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城任意一条陡峭小巷的仰角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，巷子两侧高耸的白墙将天空挤压成一道蓝色缝隙，捕捉居民在阳台浇花或收衣服的生动瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡夜景远眺点（从城外公路）`}</h4>
                  <p className="text-sm text-gray-700">{`日落后蓝调时刻，在通往格拉纳达的A-316公路某处弯道停车，用长焦镜头拍摄山顶城堡被灯光点亮、如悬浮于黑暗中的梦幻景象。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`安达卢西亚的阳光非常强烈且对比度高，建议携带一块小型反光板或利用建筑物的白墙进行自然补光，以提升人像照片的质感。拍摄当地居民，尤其是老人或店内场景时，请务必先微笑并用手势征得同意，他们通常很友善，但直接的镜头会被视为冒犯。使用无人机需要格外小心，城堡及周边空域可能有飞行限制，且老城密集的民居也不适合飞行。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`藏身于老城心脏地带由百年老宅改造的家庭旅馆，房间虽小却充满个性，早餐在天井里享用，主人会给你手绘一张只有本地人才知道的秘密角落地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住一座16世纪贵族宫殿修复而成的精品酒店，睡在带有原始木梁天花板的房间里，清晨被中庭花园的鸟鸣唤醒，仿佛成了穿越时空的贵族宾客。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`隐居在哈恩城外橄榄园环绕的乡村庄园酒店，拥有无边际泳池直面城堡 view，晚餐品尝以庄园自产顶级橄榄油烹调的米其林推荐菜肴，享受极致的宁静与奢华。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计风尚`}</h4>
                  <p className="text-sm text-purple-800">{`由旧修道院部分建筑巧妙改建的现代设计酒店，古典拱廊与现代极简家具碰撞，在古老的石墙下享受顶级的卫浴设施，体验一种独特的时空对话。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`若选择老城内的住宿，请务必确认酒店是否提供停车位或代客泊车服务，自驾游旅客否则会面临巨大的停车难题。旺季（春季和秋季节日期间）务必提前数月预订，尤其是那些特色精品酒店，房间数量非常有限。喜欢夜生活的游客请注意，老城中心区域夜晚非常安静，并非喧闹之地，追求热闹酒吧氛围可能需要住得离主广场更近或接受更晚的休息时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开哈恩许久，我发现自己最怀念的，不是某个具体的景点，而是那种整个城市弥漫的、缓慢而扎实的“在地感”。在这里，旅行不再是追逐一个又一个打卡清单，而是允许自己慢下来，让感官完全打开——去闻空气中不同的橄榄油香气，去触摸一堵被太阳晒得微温的白墙，去听广场上钟声敲响后久久回荡的余音。哈恩没有试图迎合谁，它只是坦然地向你展示它本来的样子：有辉煌的过往，也有平静的当下；有令人惊叹的建筑，也有琐碎真实的市井生活。这种不矫饰的真实，在如今过度旅游化的世界里，显得格外珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求“快”和“网红”的时代，哈恩像一位固执的老人，守护着另一种时间维度。它提醒着我们，旅行的意义或许不在于看到了多少风景，而在于我们是否真正地“抵达”了一个地方，是否愿意花时间去理解一片土地厚重的层叠记忆，以及生活其上的人们与之相处的方式。如果你也厌倦了浮光掠影，渴望一次能沉到文化肌理深处的旅行，那么，请来哈恩。让这座山城用它的橄榄油香、城堡剪影和蜿蜒小巷，为你讲述一个关于时间、融合与坚守的，悠长的安达卢西亚故事。它会安静地留在你心里，成为一种沉静的、带着金色光泽的回忆。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
