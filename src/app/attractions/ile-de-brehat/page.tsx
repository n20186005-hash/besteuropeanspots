import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布雷阿岛 Île de Bréhat｜英吉利海峡的隐秘花园，无车粉红花岗岩之岛 - 最佳欧洲景点',
  description: '当渡轮的马达声渐渐平息，船头轻轻撞上布雷阿岛码头的木桩，世界仿佛被调低了音量，然后换上了一套全新的色彩滤镜。你第一个闻到的是一种混合了海盐、羊粪肥和被正午阳光烘烤的野生金雀花的气味，咸腥中带着奇异的甜香。脚下的路不是柏油，而是被无数脚步和雨水磨得发亮的粉红色花岗岩石板，在阳光下泛着温暖的光泽，仿佛整',
}

export default function IleDeBrehatPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '布雷阿岛', href: '/attractions/ile-de-brehat' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布雷阿岛・Île de Bréhat・法国・阿摩尔滨海省（布列塔尼大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当渡轮的马达声渐渐平息，船头轻轻撞上布雷阿岛码头的木桩，世界仿佛被调低了音量，然后换上了一套全新的色彩滤镜。你第一个闻到的是一种混合了海盐、羊粪肥和被正午阳光烘烤的野生金雀花的气味，咸腥中带着奇异的甜香。脚下的路不是柏油，而是被无数脚步和雨水磨得发亮的粉红色花岗岩石板，在阳光下泛着温暖的光泽，仿佛整座岛是从一块巨大的草莓奶油蛋糕里雕刻出来的。
耳边最大的声响，是风。它穿过码头边歪斜的桤木林，发出持续的、舒缓的“沙沙”声，间或夹杂着几声清脆的自行车铃铛——那是岛上最主要的交通工具。没有引擎的轰鸣，没有喇叭的嘶叫，这种近乎原始的安静，起初会让你有些不习惯，仿佛耳朵突然被解除了武装。但很快，你会捕捉到更丰富的声音层次：远处草坡上绵羊的“咩咩”叫，某户人家后院母鸡的咕咕声，以及海浪永不停歇地、轻柔地拍打西岸嶙峋礁石的背景音。这些声音共同构成了一首属于布雷阿的、缓慢的田园交响曲。
岛上居民的生活节奏，是与潮汐和日光同步的。你会看到穿着防水围裙的老渔夫在退潮后的岩石水洼里捡拾贝类，挎着草篮的主妇在自家门前的小菜园里摘取晚餐要用的生菜。他们的房子低矮而坚固，墙壁是那种独一无二的、带着玫瑰金光泽的本地花岗岩，窗户漆成明快的蓝色或墨绿色，像镶嵌在粉色画布上的宝石。绣球花和天竺葵从每一个石缝、每一个窗台倾泻而下，那种旺盛的生命力，与岩石的永恒感形成奇妙对比。这里没有匆忙，只有顺应。生活本身，就是最核心的景点。
而最打动人心的，或许是那种无所不在的、被植物温柔侵略的感觉。人工种植的花园与荒野的奇花异草之间没有明确的界限。道路上空，南欧紫荆和粉色绣球交织成天然的拱廊；废弃石墙的缝隙里，肥硕的多肉植物和娇嫩的野花相依为命。你会恍惚觉得，不是人类在岛上建造了家园，而是这座岛慷慨地允许人类在她的怀抱中，开辟出一些小小的、美丽的角落。这是一种深植于土壤与岩石之中的和谐，是布雷阿真正的魔力所在。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当渡轮的马达声渐渐平息，船头轻轻撞上布雷阿岛码头的木桩，世界仿佛被调低了音量，然后换上了一套全新的色彩滤镜。你第一个闻到的是一种混合了海盐、羊粪肥和被正午阳光烘烤的野生金雀花的气味，咸腥中带着奇异的甜香。脚下的路不是柏油，而是被无数脚步和雨水磨得发亮的粉红色花岗岩石板，在阳光下泛着温暖的光泽，仿佛整座岛是从一块巨大的草莓奶油蛋糕里雕刻出来的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`耳边最大的声响，是风。它穿过码头边歪斜的桤木林，发出持续的、舒缓的“沙沙”声，间或夹杂着几声清脆的自行车铃铛——那是岛上最主要的交通工具。没有引擎的轰鸣，没有喇叭的嘶叫，这种近乎原始的安静，起初会让你有些不习惯，仿佛耳朵突然被解除了武装。但很快，你会捕捉到更丰富的声音层次：远处草坡上绵羊的“咩咩”叫，某户人家后院母鸡的咕咕声，以及海浪永不停歇地、轻柔地拍打西岸嶙峋礁石的背景音。这些声音共同构成了一首属于布雷阿的、缓慢的田园交响曲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`岛上居民的生活节奏，是与潮汐和日光同步的。你会看到穿着防水围裙的老渔夫在退潮后的岩石水洼里捡拾贝类，挎着草篮的主妇在自家门前的小菜园里摘取晚餐要用的生菜。他们的房子低矮而坚固，墙壁是那种独一无二的、带着玫瑰金光泽的本地花岗岩，窗户漆成明快的蓝色或墨绿色，像镶嵌在粉色画布上的宝石。绣球花和天竺葵从每一个石缝、每一个窗台倾泻而下，那种旺盛的生命力，与岩石的永恒感形成奇妙对比。这里没有匆忙，只有顺应。生活本身，就是最核心的景点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而最打动人心的，或许是那种无所不在的、被植物温柔侵略的感觉。人工种植的花园与荒野的奇花异草之间没有明确的界限。道路上空，南欧紫荆和粉色绣球交织成天然的拱廊；废弃石墙的缝隙里，肥硕的多肉植物和娇嫩的野花相依为命。你会恍惚觉得，不是人类在岛上建造了家园，而是这座岛慷慨地允许人类在她的怀抱中，开辟出一些小小的、美丽的角落。这是一种深植于土壤与岩石之中的和谐，是布雷阿真正的魔力所在。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布雷阿岛`} />
                <InfoRow label="英文名称" value={`Île de Bréhat`} />
                <InfoRow label="正式名称" value={`Île de Bréhat`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`阿摩尔滨海省（布列塔尼大区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在英吉利海峡的惊涛骇浪与和平生活中找到平衡，以独特方式保持了数百年自治传统的微型海岛社会。`} />
                <InfoRow label="建筑特色" value={`就地取材的粉红色花岗岩民居，低矮而厚实，窗框和门楣常被刷成鲜艳的布列塔尼蓝，与自然景观浑然一体。`} />
                <InfoRow label="建筑风格" value={`典型的布列塔尼海岛实用主义风格，兼具朴素的渔民小屋气质与维多利亚时代避暑别墅的些许装饰趣味。`} />
                <InfoRow label="文化价值" value={`布列塔尼“岛屿精神”的活态标本，展现了人类社区如何通过与自然协商而非对抗，创造出和谐可持续的生活方式。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`岛屿全年开放，但岛上部分服务设施（如游客中心、部分餐厅）及主要花园的开放时间随季节变化。通常旅游旺季为每年4月至10月，在此期间所有服务基本全开。连接大陆的渡轮运营时间也分夏冬两季：夏季（约5月至9月）班次密集，从早8点至晚7点，约每15-30分钟一班；冬季班次大幅减少，末班船通常在傍晚5点左右。出行前务必查询当年渡轮时刻表，天气恶劣时渡轮可能停航。`} />
              <InfoRow label="门票价格" value={`登岛本身免费。唯一费用是往返渡轮船票。成人往返票价约为10欧元，儿童、学生及团体有相应优惠。岛上主要付费景点为“潘波勒花园”（Jardin de Kerampont），门票约6欧元。租用自行车费用另计，大约每小时5欧元或全天15欧元。`} />
              <InfoRow label="地址" value={`Île de Bréhat, 22870, Côtes-d'Armor, France`} />
              <InfoRow label="交通方式" value={`首先抵达法国布列塔尼地区的圣布里厄火车站（Gare de Saint-Brieuc）或拉尼永机场（Lannion Aéroport）。从巴黎蒙帕纳斯火车站乘坐TGV高速列车约3小时可直达圣布里厄。之后，需转乘地区巴士或出租车前往渡轮码头所在地——波尔港（Port de la Paimpol），车程约40-50分钟。从波尔港的“Pointe de l’Arcouest”码头搭乘渡轮，航程仅10-15分钟即可抵达布雷阿岛。船票随到随买，无需预约，但旺季排队可能较长。强烈建议将车停放在码头附近的大型停车场（收费），因为岛上禁止任何私人汽车通行。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布雷阿岛的故事，要从远古的冰川与海浪说起。地理上，它其实是大陆山脉沉入海中的余脉，那些标志性的粉红色花岗岩，是地球深处熔岩在数亿年前缓慢冷却结晶的产物。漫长的冰河时代结束后，海平面上升，最终将它切割成今天我们看到的两大岛礁（北岛和南岛）及无数小礁石组成的 archipelago 模样。最早的定居者可能是新石器时代的渔民和猎人，他们在潮汐带采集贝类，在相对平缓的南岛开垦薄薄的土层。但直到中世纪，这座岛才在文字记录中拥有了清晰的名字——“布雷阿”，一个可能源于布列塔尼语词汇、意为“小山”或“高地”的名字。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在中世纪的欧洲权力图谱上，布雷阿岛因其地理位置而扮演了一个微妙而危险的角色。它孤悬海外，是躲避大陆战乱和苛政的天然避难所，但也因此成为了海盗、私掠船和走私者最钟爱的巢穴。英吉利海峡繁忙的商船航线近在咫尺，岛屿周围密布的暗礁和复杂的潮汐，对不熟悉水道的外来者是致命陷阱，对本地人却是绝佳的屏障和伏击场。有传说，岛民们曾与著名的“海狼”们达成某种默契，甚至分享战利品。这种亦渔亦盗的生存方式，塑造了岛民坚韧、独立且对外界保持警惕的性格。岛上的石屋建得如此低矮坚固，不仅是为了抵御狂风，或许也是为了在遭到报复袭击时，能更快地藏匿和防御。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在19世纪末。随着航海技术的发展和沿岸灯塔的建立，海盗时代落幕。而铁路的出现，将布列塔尼海岸与巴黎等大城市连接起来。富裕的资产阶级和艺术家们开始追寻“原始”和“浪漫”的度假地。布雷阿岛独特的粉红景观、温和气候（得益于北大西洋暖流，这里冬季极少结冰，甚至能生长棕榈树）以及完全与世隔绝的氛围，迅速吸引了他们。画家们（如亨利·卢梭的追随者们）来这里捕捉光影，作家们来这里寻找宁静。岛上开始出现一些稍显精致、带有装饰性木工和更大窗户的“别墅”，但它们依然谦卑地沿用本地石材，没有破坏整体的和谐。这座岛从一个危险的边缘之地，变成了一个时髦的避世桃源。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二十世纪的两次世界大战给布雷阿带来了新的伤痕与角色。二战期间，德军占领了该岛，并在制高点修建了碉堡和观测站，以监控英吉利海峡。岛民的生活受到严密控制，物资匮乏。然而，岛屿的地理特点再次发挥了作用——错综复杂的小港湾和礁石区，成为了抵抗运动成员和落盟军飞行员进行秘密转移的绝佳通道。今天，你仍能在北岛的荒原上看到那些混凝土碉堡的残骸，它们如同丑陋的伤疤，但已被地衣和野花部分覆盖，静静诉说着那段并不遥远的紧张岁月。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战后的布雷阿岛，面临着所有偏远社区共同的挑战：人口外流、老龄化。然而，也是从那时起，一种强烈的保护意识在留守岛民和热爱它的外来者心中生根发芽。他们意识到，岛屿最大的财富正是其脆弱性——无车的传统、有限的资源、独特的生态。1960年代，通过集体决议，布雷阿岛正式确立了禁止私人汽车的规章（仅有少数服务车辆例外），这在当时是极具远见的决定。他们主动选择了一种“不发展”的发展模式，将重心放在保护传统渔业、发展可持续的园艺和温和的旅游业上。今天的布雷阿，不是一座博物馆式的孤岛，而是一个活生生的实验室，实验着在全球化时代，一个小型社区如何有尊严地、可持续地守护自己的家园与生活方式。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的布雷阿岛深度游览需要一整天时间（约8-9小时），建议搭乘早上9点左右的渡轮上岛，以避开午后可能到来的更多一日游客流。整体节奏务必放慢，因为这里的魅力在于沉浸和感受，而非赶路打卡。游览主要依靠步行和自行车，南北两岛风格迥异，南岛平缓宜居，遍布花园村落；北岛荒凉野性，充满壮丽海景。建议路线为：抵达后先在南岛中心区域轻松漫步，感受生活气息并租好自行车；然后骑车向北探索，在北岛尽头徒步并野餐；下午返回南岛，参观精致花园并享受下午茶；最后在日落前返回码头区域，欣赏暮色中的港湾。请务必根据渡轮末班船时间提前规划返程。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`岛上几乎没有公共垃圾桶，请务必自带垃圾袋，将所有废弃物带离岛屿或投入码头区指定的垃圾桶，践行“无痕旅行”。
潮汐时间至关重要，尤其是徒步前往一些潮间带礁石或经过低洼道路时，务必事先在码头查看当日潮汐表，安全第一。
穿着绝对舒适的步行鞋，道路多为天然石板或沙土小径，高跟鞋或硬底鞋会是一场灾难，并准备一件防风外套，海边天气瞬息万变。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从码头走上岸，先别急着离开，在港口的咖啡店买一个刚出炉的可颂，边吃边看渡轮装卸货物和岛民寒暄的日常画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着码头的主路向西慢行五分钟，你会到达岛屿的“中心”十字路口，这里有小广场、邮局和几家小店，是观察岛上社会运转的最佳窗口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在广场附近租一辆状况良好的自行车，调整好座高，检查车铃和刹车，你的双腿即将获得解放，成为探索这片土地的最佳工具。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`骑上自行车，沿着清晰的路标向北岛进发，道路逐渐升高，两侧的石墙越来越矮，视野豁然开朗，粉红色的巨大礁石开始取代精致的花园成为主角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达连接南北两岛的“班桥”（Le Pont ar Prat），下车推车走过这座潮汐桥，感受脚下两侧海水的颜色因深浅和藻类而呈现出的翡翠与靛蓝交织的奇异画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将自行车锁在北岛指定的停车区，徒步走向最北端的“海龟石”和灯塔，任凭强劲的海风吹乱头发，看惊涛拍碎在形如史前巨兽的花岗岩群礁上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`返回南岛，将自行车还掉，步行探访“潘波勒花园”，迷失在由来自五大洲的珍奇植物构成的、色彩与香气都极其浓郁的微型生态系统中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午四五点钟，找一家面朝西边海面的花园茶馆，点一壶薄荷茶或一杯苹果酒，什么也不做，只是等待光线变得金黄柔和，看蜜蜂在薰衣草丛中结束一天的工作。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`北岛“海龟石”侧面机位`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时分，从西北方向拍摄，利用长焦镜头压缩空间，让巨大的粉红礁石与远处小小的灯塔形成戏剧性的大小对比，海浪拍打出白色泡沫作为前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`南岛“古磨坊”水道旁`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚柔和光线下，站在磨坊残骸对面的小径上，拍摄水道中完美的倒影，将粉色石屋、绿色植被和蓝天白云全部纳入镜中，构图力求对称宁静。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`潮汐桥“班桥”上空俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`需使用无人机（注意当地法规和隐私），在涨潮至半潮时拍摄，捕捉桥梁如丝带般连接两岛，两侧海水因深浅和底质不同而呈现的梦幻双色海奇观。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`隐秘花园角落`}</h4>
                  <p className="text-sm text-gray-700">{`利用大光圈镜头，在潘波勒花园或任何居民门前，聚焦于一丛沾着露水的绣球花或爬满石墙的紫藤，将背后的石屋虚化成柔和的粉红色块，营造浪漫朦胧的油画质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`码头落日与帆船剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，在码头东侧找一处礁石坐下，等待夕阳将天空染成橘粉渐变色，以归航的帆船或渡轮的黑色剪影作为视觉焦点，拍摄一张充满故事感的落幕照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重岛民隐私，拍摄民居和私人花园前，最好能微笑示意或获得默许，切勿将镜头直接对准在院内休息的居民。`}</li>
                <li>• {`岛上光线在正午时非常强烈且直射，容易造成生硬阴影，最佳拍摄光线是日出后两小时内和日落前两小时内，此时粉红岩石的色彩最为饱和温暖。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`岛民家中的秘密客房`}</h4>
                  <p className="text-sm text-blue-800">{`住在南岛中心一户老渔民改造的石头屋里，房间虽小但一尘不染，早晨女主人会为你准备装满自制果酱和黄油面包的野餐篮，让你像本地人一样开始一天。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`由旧灯塔看守人小屋改造的隐居之所`}</h4>
                  <p className="text-sm text-green-800">{`位于北岛僻静处，需提前预订并徒步一小段抵达，夜晚只有海浪和风声相伴，拥有无与伦比的星空视野，是真正与世隔绝的体验。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`南岸带花园的精品小旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`由一对从巴黎回归的夫妇经营，只有五间房，每间都以一种岛花命名，提供用当日捕捞的海鲜和花园香草烹制的精致晚餐，美学品味极高。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`大陆波尔港的传统港口酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果不想拖着行李上岛或订不到岛上住宿，这是完美备选，坐在房间窗口就能看着渡轮往返，体验港口晨昏的热闹与宁静交替，性价比出众。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`岛上住宿数量极其有限，且很多是家庭经营，务必提前数月（尤其是旺季）通过电话或邮件直接联系预订，在线平台选择很少。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`请注意，大多数岛上住所不提供电视和高速网络，这正是体验的一部分——享受真正的 disconnect（断开连接）。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择大陆住宿时，优先考虑码头步行可达的酒店，以便灵活赶早班船并避免停车烦恼。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布雷阿岛的渡轮上，你会不自觉地回头张望，看着那片粉红色的轮廓在暮霭中渐渐沉入海平线。你会发现，带走的不仅仅是相机里的照片，还有手掌心仿佛残留的花岗岩粗糙温暖的触感，鼻腔里萦绕的咸风与绣球花混合的复杂记忆，以及耳中那挥之不去的、由风声、车铃声和浪声构成的白噪音。这座岛像一个精心调制的感官容器，它没有试图用宏伟的叙事震撼你，而是用无数微小的、真实的细节包裹你，温柔地将你从现代生活的喧嚣与焦虑中剥离出来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、速度和无限扩张的世界里，布雷阿岛的存在本身就是一个温柔的“不”。它不追求通汽车，所以保留了宁静；它不追求大规模旅游，所以守护了社区；它不追求与自然割裂，所以成就了无与伦比的美丽。它向我们证明，另一种生活节奏不仅是可能的，而且是丰盈的、自足的、充满诗意的。每一位热爱深度游的旅人，都应该来这里住上一晚，不是为了打卡，而是为了体验一种可能已被我们遗忘的生活哲学：如何在一片有限的土地上，与自然共生，创造出无限的丰富与安宁。这不仅仅是一次旅行，更是一次对生活重心的轻声叩问。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-hautefort" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    欧
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">欧特福尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Hautefort</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/collioure-harbour-fauvist-painters" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科利尤尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Collioure</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gordes-stone-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    戈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">戈尔代（石头城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gordes</p>
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
