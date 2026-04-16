import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '班斯卡什佳夫尼察 Banská Štiavnica｜沉睡在中欧群山间的银矿传奇，世界遗产教科书 - 最佳欧洲景点',
  description: '朋友，想象一下，你从盘山公路的一个转弯处，第一次瞥见它的样子。它不像那些张扬的大城市，而是像一个被时光小心收藏在山坳里的秘密珠宝盒，层层叠叠的屋顶是温暖的红褐色、鹅黄色和淡淡的薄荷绿，像被雨水冲刷过的油画颜料，温柔地铺展在翠绿的山丘之间。空气中有一股特别的清凉，混合着雨后石板路的潮湿气息、远处森林的...',
}

export default function BanskaStiavnicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '班斯卡什佳夫尼察', href: '/attractions/banska-stiavnica' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">班斯卡什佳夫尼察・Banská Štiavnica・斯洛伐克・班斯卡什佳夫尼察</h1>
          <p className="text-lg text-gray-600 mb-6">
            朋友，想象一下，你从盘山公路的一个转弯处，第一次瞥见它的样子。它不像那些张扬的大城市，而是像一个被时光小心收藏在山坳里的秘密珠宝盒，层层叠叠的屋顶是温暖的红褐色、鹅黄色和淡淡的薄荷绿，像被雨水冲刷过的油画颜料，温柔地铺展在翠绿的山丘之间。空气中有一股特别的清凉，混合着雨后石板路的潮湿气息、远处森林的松针香，还有一丝若有若无的、来自古老石头深处的金属矿味——那是这座城市与生俱来的 DNA。
车子停下，你双脚真正踏上被几个世纪的行人磨得发亮的鹅卵石街道。坡度不小，走起来微微喘气，但这正是感受它的最佳方式。耳边没有喧嚣的车流，只有自己的脚步声、远处教堂悠扬的钟声，以及阳台上传来的人们用斯洛伐克语聊天的细碎声响。你会看到老太太在窗台给天竺葵浇水，木匠在他的小作坊里传出刨木头的沙沙声，咖啡馆的露天座位上，人们只是安静地对着面前的咖啡和城堡山发呆。这里不是一个被抽空的博物馆，而是一个活生生的、缓慢呼吸的家园，历史就沉淀在他们的日常生活里，不刻意展示，却无处不在。
最打动人心的，是那种巨大的反差与和谐。在精致如明信片般的街角，转过弯，你可能会突然与一个庞大、沉默、爬满藤蔓的工业废墟相遇——那是废弃的矿厂烟囱或水塔。它们不再喷吐烟雾，却以雕塑般的姿态，成为风景的一部分。这种美，不是单一的、被修饰过的，而是复杂的、充满故事的。它告诉你，这里的辉煌从来不是凭空而来的诗意，而是源于大地深处的黑暗、汗水与智慧。你走在其中，仿佛能听到地下深处隐约的回响，那是几个世纪以来，镐头敲击矿脉的韵律，也是让这座“银城”心跳不息的声音。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">朋友，想象一下，你从盘山公路的一个转弯处，第一次瞥见它的样子。它不像那些张扬的大城市，而是像一个被时光小心收藏在山坳里的秘密珠宝盒，层层叠叠的屋顶是温暖的红褐色、鹅黄色和淡淡的薄荷绿，像被雨水冲刷过的油画颜料，温柔地铺展在翠绿的山丘之间。空气中有一股特别的清凉，混合着雨后石板路的潮湿气息、远处森林的松针香，还有一丝若有若无的、来自古老石头深处的金属矿味——那是这座城市与生俱来的 DNA。</p>
              <p className="text-gray-700 leading-relaxed mb-4">车子停下，你双脚真正踏上被几个世纪的行人磨得发亮的鹅卵石街道。坡度不小，走起来微微喘气，但这正是感受它的最佳方式。耳边没有喧嚣的车流，只有自己的脚步声、远处教堂悠扬的钟声，以及阳台上传来的人们用斯洛伐克语聊天的细碎声响。你会看到老太太在窗台给天竺葵浇水，木匠在他的小作坊里传出刨木头的沙沙声，咖啡馆的露天座位上，人们只是安静地对着面前的咖啡和城堡山发呆。这里不是一个被抽空的博物馆，而是一个活生生的、缓慢呼吸的家园，历史就沉淀在他们的日常生活里，不刻意展示，却无处不在。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最打动人心的，是那种巨大的反差与和谐。在精致如明信片般的街角，转过弯，你可能会突然与一个庞大、沉默、爬满藤蔓的工业废墟相遇——那是废弃的矿厂烟囱或水塔。它们不再喷吐烟雾，却以雕塑般的姿态，成为风景的一部分。这种美，不是单一的、被修饰过的，而是复杂的、充满故事的。它告诉你，这里的辉煌从来不是凭空而来的诗意，而是源于大地深处的黑暗、汗水与智慧。你走在其中，仿佛能听到地下深处隐约的回响，那是几个世纪以来，镐头敲击矿脉的韵律，也是让这座“银城”心跳不息的声音。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="班斯卡什佳夫尼察" />
                <InfoRow label="英文名称" value="Banská Štiavnica" />
                <InfoRow label="正式名称" value="Banská Štiavnica" />
                <InfoRow label="国家" value="斯洛伐克" />
                <InfoRow label="城市" value="班斯卡什佳夫尼察" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="它是中世纪以来中欧乃至世界采矿与冶金技术的活化石，其财富与智慧直接塑造了斯洛伐克的历史，并深刻影响了整个哈布斯堡帝国的经济命脉。" />
                <InfoRow label="建筑特色" value="一座依山而建、色彩柔和的“露天博物馆”，完美融合了防御工事的坚固、市民建筑的优雅与庞大工业遗迹的粗犷，形成独特的山地城镇肌理。" />
                <InfoRow label="建筑风格" value="以哥特式为基础，历经文艺复兴的繁荣，并大量融合了巴洛克与古典主义元素，形成了独具一格的“矿业文艺复兴”风格。" />
                <InfoRow label="文化价值" value="它不仅是一个被联合国教科文组织认证的遗址，更是一个持续呼吸的社区，其保存完好的城市结构、技术遗产和民间传统，共同诉说着人类与地下宝藏共生的史诗。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城区街道及主要广场全天开放。核心室内景点（如老城堡、新城堡、矿业博物馆、卡梅尔矿井）开放时间因季节而异：通常夏季（5月至9月）为9:00-17:00，冬季（10月至4月）开放时间缩短或部分场馆仅在周末开放。所有博物馆类景点周一通常闭馆。圣诞节、元旦及复活节期间有特殊安排，出行前务必查阅最新官网信息。" />
              <InfoRow label="门票价格" value="进入古镇免费。各景点单独售票。老城堡+新城堡联票约10欧元。卡梅尔矿井及矿业博物馆地下游览体验门票约15欧元，包含导游讲解和装备租用。学生、儿童及老年人享有约50%折扣优惠。推荐购买“Banská Štiavnica Card”一卡通，可在游客中心购买，覆盖主要景点，性价比高。" />
              <InfoRow label="地址" value="Námestie sv. Trojice 1, 969 01 Banská Štiavnica, Slovakia" />
              <InfoRow label="交通方式" value="从首都布拉迪斯拉发出发：乘坐火车或巴士前往兹沃伦（Zvolen），车程约2.5-3小时，班次频繁。在兹沃伦换乘前往班斯卡什佳夫尼察的当地巴士，车程约45分钟，每小时1-2班。从科希策出发：乘坐火车至兹沃伦或直接乘坐长途巴士，总耗时约3小时。自驾是最灵活的方式，从布拉迪斯拉发沿E77公路向东北行驶约180公里，山路弯多，注意车速。镇内停车位有限，建议将车停在镇外指定停车场后步行进入老城。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">故事要从很久以前说起。大概12世纪的时候，有人在这片看似平常的山里，发现了闪闪发光的银矿脉。消息像野火一样传开，于是，德意志的矿工、意大利的工程师、匈牙利的商贾，还有各路冒险家，像潮水般涌入这个山谷。他们不仅仅是来挖矿，更是来建立一个崭新的世界。到了13世纪，这里已经从一个简陋的采矿营地，蜕变成一座享有皇家特权的自由采矿城，名字就叫“班斯卡”，在斯拉夫语里就是“矿”的意思。财富像泉水一样从地底涌出，但危险也如影随形。奥斯曼土耳其帝国的铁蹄曾数次威胁到这片富庶之地，于是，聪明的市民们开始把房子建得又高又坚固，并且围绕着城镇，建起了令人惊叹的防御系统——不止有城墙，还有两座遥相呼应的城堡：老城堡和新城堡，像两个忠诚的巨人，守卫着山坳里的珍宝。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，真正的传奇不是挖出了多少银子，而是他们如何与自然博弈，解决了采矿最大的敌人——地下水。挖得越深，地下水涌入得就越凶猛。到了16、17世纪，这几乎成了制约矿山生命的瓶颈。于是，一代又一代的天才工程师出现了。他们没有选择硬扛，而是想出了一个堪称宏伟的解决方案：在周围的山上，利用自然地势，修建一个庞大而精密的“水库”系统。他们开凿水渠，建造了几十个大大小小的人工湖，收集雨水和山泉水。然后，在需要的时候，通过复杂的水槽和水闸系统，将湖水释放，驱动巨大的水轮，再由水轮带动一系列泵机，将矿井深处的水抽上来。这个系统是如此高效和超前，它让矿坑得以向地心深处延伸，也让班斯卡什佳夫尼察在18世纪成为了世界上最重要的矿业中心之一。这里的矿山学院，是世界上最古老的同类院校，为整个帝国培养矿业精英。</p>
              <p className="text-gray-700 leading-relaxed mb-4">财富带来了文化的极致繁荣。你能在每一栋精美的市民住宅上看到那个黄金时代的烙印。富有的矿主和商人们请来最好的工匠，修建带有华丽拱廊的宅邸，在山墙上装饰复杂的湿壁画，在广场上竖起神圣的瘟疫纪念柱。巴洛克式的教堂里，装饰着用本地白银打造的圣器。这里的建筑风格，因此被学者们称为“矿业文艺复兴”，它既有文艺复兴的理性与人文气息，又带着矿业城市特有的务实与坚固。但是，就像所有依赖单一资源的城市一样，当矿脉逐渐枯竭，白银的光芒开始黯淡。19世纪后期，随着更廉价的美洲白银涌入市场，这座城市的辉煌时代缓缓落幕。</p>
              <p className="text-gray-700 leading-relaxed mb-4">轰鸣的水轮逐渐停转，矿井一个一个关闭，年轻人开始奔向更大的城市。时间在这里，仿佛调慢了速度。但也正因如此，它奇迹般地躲过了20世纪大规模的城市改造和战火的彻底摧毁。那些精美的房子、沉默的城堡、纵横交错的矿道和星罗棋布的水库，都原封不动地保留了下来。1993年，它与周边的技术遗迹一起，被列入联合国教科文组织世界遗产名录，不是作为一件死去的文物，而是作为一部完整的、关于人类工业文明与自然环境互动的史诗。今天，当你走在它的街道上，你走过的是银子的历史，是水的智慧，是一个文明从巅峰到静默，最终在宁静中找到永恒价值的完整旅程。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要完整感受这座山城的灵魂，建议至少预留一整天时间。最好的节奏是“上午登高望远，下午深入历史”。早上九点左右抵达最好，这时晨雾初散，光线柔和，游客尚少。先从山顶的城堡区开始，自上而下地俯瞰和了解城镇的全貌与防御体系。下午则深入老城核心，漫步广场与街巷，并一定要参加一次地下矿井的导览，那是理解这座城市根基的钥匙。傍晚时分，留给一个水库边安静的散步，看夕阳为整个山谷镀上金边。这样的安排由宏观到微观，由光明到幽深，能让你对这座矿业之城的理解层层递进。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>务必穿一双绝对舒适耐磨的徒步鞋，这里的街道几乎全是坡道和凹凸不平的鹅卵石。几乎所有室内博物馆周一都不开放，务必避开这天安排核心参观。不要害怕在小巷子里迷路，最美的角落往往藏在没有地图标记的转弯处。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">清早在镇口的老橡树下喝一杯浓咖啡，看着晨光依次点亮远处新城堡的塔尖和层层叠叠的屋顶</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着蜿蜒陡峭的“城堡小径”徒步向上，途中在观景平台回望，看整个老城如同一个精致的模型在你脚下展开</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">花一个小时沉浸在老城堡里，抚摸那些冰冷厚重的城墙，在阴凉的庭院里想象中世纪卫兵巡逻的脚步声</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从城堡山下来，直接钻进圣凯瑟琳教堂，让眼睛适应昏暗的光线，静静欣赏那精美绝伦的木质巴洛克祭坛</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在中心广场的文艺复兴拱廊下找一家传统餐馆，点一份名为“Bryndzové Halušky”的羊奶酪土豆面团，这是矿工们补充体力的古老食物</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">下午准时前往卡梅尔矿井入口，穿上矿工外套，戴好头盔，跟着向导深入冰凉潮湿的地底，亲手触摸那闪着微光的原始矿脉</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从矿井重返地面后，慢慢散步到城镇边缘的特洛伊水库，坐在长椅上，看野鸭划破如镜的水面，远处是静默的矿渣堆和森林</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">赶在日落前登上新城堡的观景塔，看夕阳的余晖如何将整个城镇、水库群和环绕的Štiavnica山脉染成一片温暖的琥珀色</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 新城堡观景塔顶层</h4>
                  <p className="text-sm text-gray-700">日落前半小时，使用长焦镜头压缩空间，可以将老城堡、圣三一广场的瘟疫柱和远山层层叠叠的景色框入同一画面，层次感极佳。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 特洛伊水库东岸</h4>
                  <p className="text-sm text-gray-700">清晨无风时，水面平静如镜，可以完美拍出新城堡和老城建筑的倒影，对称构图显得宁静而富有诗意。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 从“灾难之门”拱门内向老城广场方向拍摄</h4>
                  <p className="text-sm text-gray-700">下午侧光时分，阳光穿过拱门，在石板路上拉出长长的影子，能拍出强烈的纵深感与历史穿越感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 圣凯瑟琳教堂内部细节</h4>
                  <p className="text-sm text-gray-700">利用高ISO和大光圈，在不使用闪光灯的前提下，捕捉巴洛克祭坛上复杂雕刻的光影细节，金色装饰在烛光下会散发温暖的光泽。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 老城堡通往瞭望台的狭窄石阶</h4>
                  <p className="text-sm text-gray-700">从下往上仰拍，将螺旋形的石阶、石壁和一小片天空纳入镜头，形成强烈的引导线和明暗对比，充满故事性。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄当地居民，尤其是老人或在劳作的手艺人，务必先微笑并征求同意，一个简单的手势和友善的眼神就能避免冒犯。矿井内部严禁使用闪光灯，高感光度拍摄是不错的选择。多利用雨后湿润的石板路反光，能为街景照片增加意想不到的质感。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">市中心灵魂之选</h4>
                  <p className="text-sm text-blue-800">住在经过修复的16世纪矿商宅邸里，天花板是手绘的古典花纹，窗户推开就是钟楼风景，每晚都能听到整点的钟声在石壁间回荡。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">山林隐居体验</h4>
                  <p className="text-sm text-green-800">选择坐落在Štiavnica山半腰的木质小屋民宿，被云杉林环绕，早晨在露台上就能看到薄雾从山谷中升起，仿佛住在童话里。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">设计感精品酒店</h4>
                  <p className="text-sm text-yellow-800">由老印刷厂改造的现代风格酒店，保留了原始的砖墙和工业元素，却配备了最舒适的设施，是历史与现代交融的完美诠释。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">经济实用之宿</h4>
                  <p className="text-sm text-purple-800">老城边缘的家庭式公寓，主人会热情地为你手绘一张私房美食地图，并端上自家酿制的李子白兰地欢迎你。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">夏季（7-8月）是旺季，尤其是周末，住宿非常紧张，务必提前数月预订。冬季前来体验雪中古镇的静谧，但需确认预订的民宿是否提供充足的暖气。大部分优质住宿都集中在步行可达的老城区内，无需担心交通问题。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开班斯卡什佳夫尼察好多天了，我耳边似乎还回荡着矿井深处那滴水的声音，眼前还是那片被夕阳点燃的、温柔的山谷。这个地方给我最大的触动，不是它曾经有多富裕，而是它在繁华落尽之后，所展现出的那种从容的尊严与寂静的力量。它没有试图掩盖自己工业的伤疤，那些巨大的水塔、荒废的轨道、沉默的矿渣堆，就坦然地站在教堂和花园旁边。这恰恰构成了它最真实、最动人的风景——一种完整的生命历程。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求崭新和高效的世界里，班斯卡什佳夫尼察像一个沉稳的智者，它提醒我们，真正的价值往往需要时间的沉淀来显现。它告诉我们，文明不仅是创造巅峰，更是如何面对与接纳寂静，并将历史的每一层纹理都转化为滋养当下的土壤。每一位热爱深度游的旅人，都应该来感受一下这种“完整的风景”。来这里，不只是看一个世界遗产的标签，而是来聆听一场大地与人类、汗水与智慧、喧嚣与宁静的漫长对话。你会发现，最震撼人心的，往往不是纯粹的自然或纯粹的艺术，而是人类故事与自然背景交织出的、那复杂而深沉的和谐。这里，就是这样一个地方。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
