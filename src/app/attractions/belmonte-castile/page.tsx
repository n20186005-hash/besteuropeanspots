import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝尔蒙特城堡 Belmonte Castle｜矗立在平原上的星形堡垒，哥特与穆德哈尔艺术的惊艳合璧 - 最佳欧洲景点',
  description: '想象一下，当你驱车穿越拉曼查那片广袤、被阳光烤得发烫的平原，地平线单调得只剩下橄榄树丛和风车的剪影。就在你快要被这种永恒的金黄色催眠时，它毫无预兆地出现了——贝尔蒙特城堡。它不像童话里的城堡那样轻盈梦幻，而是像一头用黄褐色石头雕成的巨兽，沉甸甸地、充满威严地匍匐在一座孤独的山丘上。那种视觉冲击是直接...',
}

export default function BelmonteCastilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '贝尔蒙特城堡', href: '/attractions/belmonte-castile' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝尔蒙特城堡・Belmonte Castle・西班牙・昆卡省贝尔蒙特镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，当你驱车穿越拉曼查那片广袤、被阳光烤得发烫的平原，地平线单调得只剩下橄榄树丛和风车的剪影。就在你快要被这种永恒的金黄色催眠时，它毫无预兆地出现了——贝尔蒙特城堡。它不像童话里的城堡那样轻盈梦幻，而是像一头用黄褐色石头雕成的巨兽，沉甸甸地、充满威严地匍匐在一座孤独的山丘上。那种视觉冲击是直接的，带着一种近乎蛮横的力量感，让你瞬间明白，为什么几个世纪前的旅人看到它，心中会涌起敬畏或恐惧。
停好车，沿着蜿蜒的坡道向上走，风变得大起来，呼呼地吹过耳边，带着干草和远处野花的淡淡气息。离得越近，城堡的细节才逐渐从整体坚硬的轮廓中剥离出来。你会首先被它奇特的形状吸引：那不是常见的方形或圆形，而是有着多个尖锐凸角的星形。阳光在那些陡峭的斜墙和塔楼上移动，切割出极其锋利的光影界限，明暗对比强烈得如同版画。城堡静默着，但它的每一个棱角仿佛都在诉说着关于防御、算计和力量的故事。走近高大的入口拱门，手触摸到被岁月打磨得光滑的石头，一股凉意沁入掌心，那是几个世纪积攒下来的阴凉。
而当你真正踏入城堡的内庭，感官会经历一次奇妙的转换。外部是军事堡垒的冷硬，内部却悄然展开了一幅截然不同的画卷。抬头看，环绕庭院的双层回廊精美得令人屏息。尖拱、华丽的石雕窗花、错综复杂的穆德哈尔式几何图案，如同蕾丝般覆盖在墙面和天花板上。阳光透过这些石雕的空隙洒下来，在地面投下不断变幻的光斑游戏。那一刻，你仿佛能听见历史的低语：一边是北欧传来的哥特式森严与垂直感，另一边是安达卢西亚匠人留下的、充满生命律动的伊斯兰装饰传统。它们在这里相遇、交融，没有丝毫违和，共同构成了西班牙独一份的、混血的美。这座城堡最动人的核心魅力，就在于这种外刚内柔、文明交融的惊人反差，它不是一个冰冷的军事遗址，而是一本用石头写就的、关于权力、美学与文化融合的立体史书。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，当你驱车穿越拉曼查那片广袤、被阳光烤得发烫的平原，地平线单调得只剩下橄榄树丛和风车的剪影。就在你快要被这种永恒的金黄色催眠时，它毫无预兆地出现了——贝尔蒙特城堡。它不像童话里的城堡那样轻盈梦幻，而是像一头用黄褐色石头雕成的巨兽，沉甸甸地、充满威严地匍匐在一座孤独的山丘上。那种视觉冲击是直接的，带着一种近乎蛮横的力量感，让你瞬间明白，为什么几个世纪前的旅人看到它，心中会涌起敬畏或恐惧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，沿着蜿蜒的坡道向上走，风变得大起来，呼呼地吹过耳边，带着干草和远处野花的淡淡气息。离得越近，城堡的细节才逐渐从整体坚硬的轮廓中剥离出来。你会首先被它奇特的形状吸引：那不是常见的方形或圆形，而是有着多个尖锐凸角的星形。阳光在那些陡峭的斜墙和塔楼上移动，切割出极其锋利的光影界限，明暗对比强烈得如同版画。城堡静默着，但它的每一个棱角仿佛都在诉说着关于防御、算计和力量的故事。走近高大的入口拱门，手触摸到被岁月打磨得光滑的石头，一股凉意沁入掌心，那是几个世纪积攒下来的阴凉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你真正踏入城堡的内庭，感官会经历一次奇妙的转换。外部是军事堡垒的冷硬，内部却悄然展开了一幅截然不同的画卷。抬头看，环绕庭院的双层回廊精美得令人屏息。尖拱、华丽的石雕窗花、错综复杂的穆德哈尔式几何图案，如同蕾丝般覆盖在墙面和天花板上。阳光透过这些石雕的空隙洒下来，在地面投下不断变幻的光斑游戏。那一刻，你仿佛能听见历史的低语：一边是北欧传来的哥特式森严与垂直感，另一边是安达卢西亚匠人留下的、充满生命律动的伊斯兰装饰传统。它们在这里相遇、交融，没有丝毫违和，共同构成了西班牙独一份的、混血的美。这座城堡最动人的核心魅力，就在于这种外刚内柔、文明交融的惊人反差，它不是一个冰冷的军事遗址，而是一本用石头写就的、关于权力、美学与文化融合的立体史书。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝尔蒙特城堡`} />
                <InfoRow label="英文名称" value={`Belmonte Castle`} />
                <InfoRow label="正式名称" value={`Castillo de Belmonte`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`昆卡省贝尔蒙特镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座15世纪的星形堡垒，是卡斯蒂利亚王国权贵为应对内部权力斗争而建造的防御与权力象征，是理解西班牙“收复失地运动”末期贵族心态的活化石。`} />
                <InfoRow label="建筑特色" value={`其最震撼之处在于完美的星形平面布局，以及将北欧哥特式的冷峻与西班牙穆德哈尔式（伊斯兰）的繁复装饰完美融合于一身。`} />
                <InfoRow label="建筑风格" value={`哥特式与穆德哈尔风格的精妙结合，被誉为西班牙晚期哥特式民用军事建筑的典范。`} />
                <InfoRow label="文化价值" value={`它见证了基督教西班牙对伊斯兰艺术遗产的吸收与转化，是两种文明在建筑上的一次无声而辉煌的对话。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常为每日上午10:00至傍晚18:00开放，夏季（7月至9月）会延长至晚上20:00。周一上午可能闭馆进行维护，具体安排需在行前查看官网。冬季（11月至次年2月）开放时间可能缩短，并可能在非节假日周一全天关闭。城堡内部偶尔因私人活动或影视拍摄临时关闭。`} />
              <InfoRow label="门票价格" value={`标准成人门票约为8欧元。优惠票（学生、65岁以上长者）约为6欧元。12岁以下儿童在成人陪同下可免费入场。家庭套票（2大2小）约20欧元。部分节假日或特殊文化日可能提供免费参观时段。门票通常包含语音导览器（含中文选项）的使用，现场购票即可。`} />
              <InfoRow label="地址" value={`Castillo de Belmonte, Calle Eugenia de Montijo, s/n, 16640 Belmonte, Cuenca, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发是最佳选择。先乘坐火车（Renfe）从马德里阿托查火车站前往昆卡市，车程约50分钟至1.5小时，班次频繁。抵达昆卡后，你需要租车自驾，这是前往贝尔蒙特镇最实际的方式。沿CM-310公路行驶，约40分钟（45公里）即可抵达贝尔蒙特镇，城堡在镇上地势最高处，非常显眼。若全程自驾从马德里出发，约需2小时（160公里）。镇上停车免费且方便。公共交通（巴士）班次极其稀少，不推荐。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一个雄心勃勃、却也备受争议的男人说起——唐璜·帕切科，第一代比列纳侯爵。时间回到15世纪中叶，西班牙的“收复失地运动”已近尾声，但卡斯蒂利亚王国的宫廷内部却暗流汹涌，贵族之间的权力倾轧比对抗摩尔人更加激烈。帕切科正是这个时代的弄潮儿，他不仅是国王胡安二世的宠臣，更是一位精于算计的政治家。建造贝尔蒙特城堡，与其说是为了防御外敌，不如说是为了在他广袤的领地上，树立一个无可争议的权力中心，一个向周边所有贵族、乃至向王室本身炫耀武力的宣言。选址在这片俯瞰拉曼查平原的制高点，战略眼光不言而喻。传说，他亲自参与了城堡的设计，那颗标志性的“星形”，或许正隐喻着他希望在政治的星图上占据一个耀眼而稳固的位置。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的建造大约始于1456年。帕切科不仅有钱，更有品味。他召来的建筑师，想必深谙当时最前沿的军事防御理念——来自意大利的“星形棱堡”雏形，这种设计能最大限度地消除射击死角，让防守方的火力覆盖无懈可击。于是，我们看到了这座拥有九個尖角、由深邃干壕沟环绕的先锋堡垒。然而，帕切科对美的追求同样炽烈。他很可能引入了来自托莱多或塞维利亚的、精通穆德哈尔工艺的摩尔匠人或皈依基督教的莫德哈尔人。这就解释了为什么在冷峻的哥特式骨架里，会生长出如此柔情似水的装饰：石膏墙上蔓藤花纹蜿蜒，木制天花板上布满星形和八角形的“阿塔利赫”雕花，马蹄形拱门隐约可见。这是一个基督教领主，坦然享受着被征服的伊斯兰文明留下的美学遗产，并将其化为己用。城堡，成了他复杂身份的最佳注解。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，城堡的辉煌并未持续太久。帕切科去世后，随着中央王权的加强和战争形态的改变，这类私人堡垒逐渐失去了军事价值。贝尔蒙特城堡在历史的尘埃中慢慢沉睡，一度沦为存储谷物的仓库，甚至被部分废弃。它巨大的身躯在平原上孤独地站立，见证着西班牙帝国的崛起与衰落，自己却斑驳褪色。转机出现在19世纪。一位与城堡命运紧密相连的女性出现了——欧亨尼娅·德·蒙蒂霍，也就是后来的法兰西第二帝国皇后欧珍妮。她出身于西班牙贵族，拥有贝尔蒙特城堡的所有权。这位富有艺术气息和怀旧情结的皇后，出资对城堡进行了一次大规模的、浪漫主义风格的修复。这次修复虽然未必完全符合学术考据，但无疑拯救了这座濒临倾颓的建筑，并赋予了它许多我们今天看到的内部新哥特式装饰和家具。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，城堡经历了更多的风雨，包括被用作监狱、甚至在内战时期遭受过炮火损伤。但它的基石足够坚固。近几十年来，西班牙政府和文化机构对其进行了更为科学、审慎的修复与维护。如今，它不仅是一个博物馆，更成为了一个充满生命力的文化场所。或许你会觉得有趣，这座中世纪堡垒因为其独特而保存完好的面貌，成了影视剧的宠儿，比如《万世英雄》（El Cid）等历史史诗大片都曾在此取景。从权贵的私产到皇后的旧梦，从被遗忘的废墟再到荧幕上的明星，贝尔蒙特城堡穿越了近六百年的时光，它的每一个角色转换，都像是西班牙历史的一个微小缩影，沉默，却充满了戏剧性的回声。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议你将整个下午留给贝尔蒙特城堡。计划在下午三点左右抵达小镇，这时西班牙午后的酷热开始消退，光线也逐渐变得金黄柔和，是游览的绝佳时机。整个深度游览建议预留3到4小时。节奏应该是“由外及内，由下至上，最后在日落时分定格”。先从远处和外围欣赏它震撼的星形全景和防御体系，再进入内部细细品味建筑与装饰的细节，最后登上城墙或塔楼，等待拉曼查平原的日落将城堡染成赤金色。这样的安排能让你充分感受城堡在不同光线和视角下的多重性格，从宏伟到精妙，从历史到风景，一次尽收眼底。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部部分楼梯陡峭且狭窄，务必穿着舒适防滑的鞋子，女士避免穿高跟鞋。夏季西班牙阳光极其猛烈，城墙和庭院毫无遮挡，请务必准备好帽子、太阳镜和充足饮水。尊重城堡内的指示，部分区域可能因保护原因不开放，请勿擅自闯入。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在山脚下停车场，先别急着上去，回头走到镇外的小坡上，好好端详一下这座星形巨兽盘踞山丘、与远处无尽平原和风车构成画面的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着古老的石坡道缓缓上行，用手感受城墙根那些巨大石块冰凉的体温，并抬头寻找城墙雉堞和射击孔那充满功能性的冷酷线条。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过深邃的门洞进入主庭院，立刻被那精美的双层回廊吸引，花至少二十分钟，细细观察每一扇石窗上哥特式尖拱与穆德哈尔式几何花纹的共生关系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着回廊内低调的楼梯上到二层，参观昔日领主大厅，这里陈列着欧珍妮皇后时期修复的古朴家具，想象一下权贵们在此密议或宴饮的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上主塔楼的螺旋石阶，在略显昏暗的光线中攀爬，直到突然踏入塔顶平台，让360度的旷野之风猛地拥抱你，视野瞬间开阔到地平线尽头。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着连接各个尖角的城墙步道漫步，从不同的凸角眺望，你会发现每个方向的景色和防御设计都略有不同，体会古代守卫者的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时，选定一个向西的城墙垛口，静静看着太阳像一颗熔金的球，缓缓沉入拉曼查平原，将整个城堡和你自己的影子拉得老长。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁天光尚存时下山，回到小镇主广场，找一家有露天座位的酒吧，点一杯当地产的红酒或一份小吃，回味刚才的旅程，看城堡在暮色中渐渐亮起灯光。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`小镇南侧农田边缘的小土坡`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，利用长焦镜头压缩空间，将城堡的星形轮廓与前景的橄榄树或麦田，以及背景的漫天晚霞一同纳入画面，构成层次丰富的史诗感场景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主庭院双层回廊的东南角`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后，阳光能斜射入回廊下层，站在庭院中央向回廊拍摄，可以捕捉到石柱、尖拱与地面光影形成的强烈纵深感与几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`西侧城墙的凸角垛口`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，以厚重的城墙石砖作为前景框架，将对焦放在远方正在沉落的夕阳和染成金红色的平原上，拍出带有历史沧桑感的壮丽剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从城堡高处俯拍小镇`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，从主塔楼或北侧城墙，向下拍摄贝尔蒙特小镇红瓦白墙的屋顶，线条蜿蜒指向中心的城堡，展现人类聚落与堡垒的共生关系。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前，务必确认当地法规和城堡管理方的规定，通常历史古迹上空是禁飞区。在室内拍摄时，禁用闪光灯以保护古老的彩绘和木制品。如果想要拍摄城堡工作人员或当地居民，请务必先微笑并征得对方同意，这是一种基本的尊重。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城石屋`}</h4>
                  <p className="text-sm text-blue-800">{`入住由16世纪石屋改造的家庭旅馆，房间有着裸露的原木梁和厚实的石墙，夜晚安静得只能听到远处教堂的钟声，早餐是房东太太自制的曼恰奶酪和蜂蜜。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`乡间庄园体验`}</h4>
                  <p className="text-sm text-green-800">{`选择距离城堡几公里外、坐落于橄榄园中的“卡萨庄园”，享受真正的乡村宁静，在泳池边就能遥望城堡的剪影，晚餐品尝庄园自产的有机食材。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-yellow-800">{`小镇上由古老修道院部分建筑改建的精品酒店，房间宽敞且保留了原始的拱顶结构，仿佛睡在历史里，酒店内部还有个迷人的回廊庭院。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代舒适基地`}</h4>
                  <p className="text-sm text-purple-800">{`如果你追求绝对的舒适与便利，可以住在40分钟车程外的昆卡古城，那里有设计型酒店或完善的连锁酒店，白天驱车来探索城堡，晚上享受古城的悬崖灯火与高级餐厅。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`贝尔蒙特小镇非常宁静安全，但夜间娱乐活动极少，适合追求静谧体验的旅行者。若选择住在小镇，请务必提前预订，尤其是旺季和周末，因为住宿选择非常有限。如果住在昆卡，虽然往返需要驾车，但能同时体验世界遗产“悬空屋”和当地活跃的夜生活，行程组合更加丰富。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开贝尔蒙特城堡许久，我的脑海里依然会反复出现那两个重叠的画面：外部那无情的、计算精准的星形棱角，和内部庭院里那些如植物般自由生长的、充满柔情的石雕花纹。这不仅仅是一座建筑的反差，它几乎是西班牙灵魂某个侧面的隐喻——一种在刚毅与柔情、征服与融合、排他与接纳之间取得的惊人平衡。在这里，你触摸到的石头，既有十字军东征般冷冽的温度，也有《一千零一夜》里那种繁复叙事的暖意。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个常常急于划清界限、强调纯粹的世界里，贝尔蒙特城堡静静地矗立着，诉说着另一种可能性。它告诉我们，美与力量可以来自交融，而非隔离；真正的强大，或许正在于有勇气将“他者”的精华，化为自己血肉的一部分。它不是一个用来匆匆打卡的背景板，而是一个需要你慢下来，用眼睛去看，用手去触摸，用心去品读的时空胶囊。对于每一位不满足于浮光掠影，渴望理解欧洲文化层理如何像地质构造一样复杂叠加的旅人来说，驶离主干道，来到这片拉曼查的平原，与这座星形堡垒独处一个下午，都将是一次触及历史深流与美学本质的、无可替代的旅程。它会沉淀在你的记忆里，成为一种关于“混血之美”的坚定启示。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/citadel-of-jaca" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈卡城塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadel of Jaca</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/thun-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图恩城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thun Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/girona-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    赫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">赫罗纳古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Girona Old Town</p>
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
