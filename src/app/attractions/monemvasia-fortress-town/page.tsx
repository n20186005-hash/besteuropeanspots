import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '莫奈姆瓦夏隐秘之城 Monemvasia｜探访爱琴海上的“希腊直布罗陀”，一座沉睡在巨岩中的中世纪迷宫 - 最佳欧洲景点',
  description: '穿过那条短短几百米、仿佛连接两个世界的堤道时，你才会真正明白“隐秘”二字的含义。眼前那块从爱琴海中陡然升起的巨大灰褐色岩石，像一头搁浅了千年的巨鲸，背脊上密密麻麻嵌满了赭石色屋顶与米白色墙壁。海风是这里永恒的背景音，带着咸味和一丝九重葛的淡香，拍打着你的脸。走近那道低矮而厚重的拱形主城门——你几乎要...',
}

export default function MonemvasiaFortressTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '莫奈姆瓦夏隐秘之城', href: '/attractions/monemvasia-fortress-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`莫奈姆瓦夏隐秘之城・Monemvasia・希腊・拉科尼亚地区， 莫奈姆瓦夏镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过那条短短几百米、仿佛连接两个世界的堤道时，你才会真正明白“隐秘”二字的含义。眼前那块从爱琴海中陡然升起的巨大灰褐色岩石，像一头搁浅了千年的巨鲸，背脊上密密麻麻嵌满了赭石色屋顶与米白色墙壁。海风是这里永恒的背景音，带着咸味和一丝九重葛的淡香，拍打着你的脸。走近那道低矮而厚重的拱形主城门——你几乎要低头才能进去——瞬间，所有的现代喧嚣被隔绝在外。里面是另一个时空。
你的第一脚踏在光滑得能照出人影的鹅卵石路上，这些石头被无数脚步、雨水和时间打磨得像黑色的镜子。巷子窄得夸张，有时仅容一人侧身通过，两旁是高达两三层楼的石墙，墙头探出怒放的三角梅，紫红色瀑布般倾泻下来。光线在这里成了魔术师，正午时分割裂出锐利的黑白光影，傍晚则化作蜂蜜色的柔光，涂抹在每一扇古老的木门和生锈的门环上。空气中混合着老石头微凉的气息、远处某家厨房飘出的炖肉香、以及海风永恒的咸湿感。你会听见自己的脚步声在迷宫般的小巷里回荡，偶尔与当地人擦肩而过——他们提着菜篮，或坐在自家门槛上晒太阳，对你报以平静的微笑，仿佛穿越而来的你才是这里的常景。
这里最打动人心的，是一种极致的反差与宁静。一面是巨岩脚下爱琴海无垠的湛蓝与波涛的汹涌，另一面是藏在岩石褶皱里、由小巷、拱门和庭院构成的、近乎凝固的静谧世界。它不是空壳博物馆，仍有近百位居民在此生活，窗户里晾着衣服，咖啡馆传出研磨咖啡豆的声音。你在探索一个完整保存的、仍在跳动的心脏。登上岩石顶部的废墟，俯瞰脚下如模型般的屋顶与远处的大海，那一刻，你触摸到的不仅是历史，更是一种人类在绝境中筑城、生活、并让文明延续千年的惊人韧性。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那条短短几百米、仿佛连接两个世界的堤道时，你才会真正明白“隐秘”二字的含义。眼前那块从爱琴海中陡然升起的巨大灰褐色岩石，像一头搁浅了千年的巨鲸，背脊上密密麻麻嵌满了赭石色屋顶与米白色墙壁。海风是这里永恒的背景音，带着咸味和一丝九重葛的淡香，拍打着你的脸。走近那道低矮而厚重的拱形主城门——你几乎要低头才能进去——瞬间，所有的现代喧嚣被隔绝在外。里面是另一个时空。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你的第一脚踏在光滑得能照出人影的鹅卵石路上，这些石头被无数脚步、雨水和时间打磨得像黑色的镜子。巷子窄得夸张，有时仅容一人侧身通过，两旁是高达两三层楼的石墙，墙头探出怒放的三角梅，紫红色瀑布般倾泻下来。光线在这里成了魔术师，正午时分割裂出锐利的黑白光影，傍晚则化作蜂蜜色的柔光，涂抹在每一扇古老的木门和生锈的门环上。空气中混合着老石头微凉的气息、远处某家厨房飘出的炖肉香、以及海风永恒的咸湿感。你会听见自己的脚步声在迷宫般的小巷里回荡，偶尔与当地人擦肩而过——他们提着菜篮，或坐在自家门槛上晒太阳，对你报以平静的微笑，仿佛穿越而来的你才是这里的常景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人心的，是一种极致的反差与宁静。一面是巨岩脚下爱琴海无垠的湛蓝与波涛的汹涌，另一面是藏在岩石褶皱里、由小巷、拱门和庭院构成的、近乎凝固的静谧世界。它不是空壳博物馆，仍有近百位居民在此生活，窗户里晾着衣服，咖啡馆传出研磨咖啡豆的声音。你在探索一个完整保存的、仍在跳动的心脏。登上岩石顶部的废墟，俯瞰脚下如模型般的屋顶与远处的大海，那一刻，你触摸到的不仅是历史，更是一种人类在绝境中筑城、生活、并让文明延续千年的惊人韧性。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`莫奈姆瓦夏隐秘之城`} />
                <InfoRow label="英文名称" value={`Monemvasia`} />
                <InfoRow label="正式名称" value={`The Fortress Town of Monemvasia`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`拉科尼亚地区， 莫奈姆瓦夏镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是拜占庭帝国在伯罗奔尼撒半岛最后沦陷的堡垒之一，被誉为“东方的直布罗陀”，是中世纪地中海重要的战略与贸易要塞。`} />
                <InfoRow label="建筑特色" value={`一座完全建在独立海蚀巨岩上的、通过一条狭窄堤道与大陆相连的、完整保存了中世纪格局与大量石砌建筑的“空中之城”。`} />
                <InfoRow label="建筑风格" value={`以拜占庭风格为基石，混杂了威尼斯哥特式的拱窗、奥斯曼时期的清真寺改建痕迹，以及近代希腊的传统民居元素，形成独特的层叠式建筑风貌。`} />
                <InfoRow label="文化价值" value={`它不仅仅是一个旅游景点，更是一个仍在呼吸的社区，是活生生的、层叠着拜占庭的荣光、威尼斯的精明、奥斯曼的印记以及现代希腊人坚韧生活的历史画卷。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天开放，自由进出。但城内主要博物馆（如基督普世救主教堂博物馆）和部分历史建筑开放时间为：夏季（4月-10月）每天上午8:30至晚上8:00；冬季（11月-3月）每天上午8:30至下午3:00。部分小型私人博物馆开放时间不定。建议避开希腊正教重要宗教节日（如复活节），当天部分场所可能关闭。`} />
              <InfoRow label="门票价格" value={`进入莫奈姆瓦夏古城本身无需门票。参观城内特定博物馆或历史建筑需要单独购票，联票价格约为8欧元，包含3-4个主要参观点。优惠票（学生、65岁以上老人）约为4欧元。6岁以下儿童免费。门票通常在第一个参观点入口处购买。`} />
              <InfoRow label="地址" value={`Monemvasia, 230 70, Lakonia, Greece`} />
              <InfoRow label="交通方式" value={`从雅典出发是最常见路线。从雅典国际机场（ATH）乘坐地铁或机场巴士前往雅典市内的基菲索斯（Kifissos）长途汽车总站，车程约1小时。从该汽车站乘坐KTEL长途巴士前往莫奈姆瓦夏，每天有2-3班车，车程约5-6小时，途经斯巴达。终点站是大陆上的新镇（Gefyra），下车后即可看到连接巨岩的短堤道，步行穿过堤道约10-15分钟即抵达古城主城门。自驾者从雅典出发，沿E94/E65高速公路向西南行驶至斯巴达附近，再转道向南，全程约320公里，需4-4.5小时。古城内禁止机动车通行，车辆需停放在堤道入口附近的付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`莫奈姆瓦夏的故事，始于一次惊天动地的自然分离。公元375年，一次猛烈的地震将这片海岸的岬角与大陆撕裂，留下了这座独立于海中的巨岩。但真正让它登上历史舞台的，是拜占庭帝国的恐惧与远见。到了6世纪，面对斯拉夫部落南下的威胁，拉科尼亚的希腊居民将目光投向了这座易守难攻的天然堡垒。他们迁上巨岩，开凿水窖，修筑城墙，建立了最初的避难所。“Monemvasia”这个名字本身就揭示了它的秘密：在希腊语中，“Moni Emvasi”意为“唯一的入口”，指的就是那条连接大陆的狭窄堤道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`从此，它成了地中海棋盘上一枚关键的棋子。拜占庭帝国将其打造成坚固的海军基地和行政中心。它的黄金时代在13世纪到来，随着第四次十字军东征攻陷君士坦丁堡，拜占庭帝国碎片化，莫奈姆瓦夏成为独立的“莫利亚专制国”的重要中心。这一时期，它不仅是军事堡垒，更是繁荣的贸易港口，来自东方的丝绸、香料与西方的货物在此交换，财富在岩石上的小巷里流淌。你能在今天看到的许多坚固的底层石屋和仓库，其根基就建于这个富庶的时期。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，财富总是引来觊觎者的目光。接下来的几个世纪，莫奈姆瓦夏的命运在列强的拉锯战中剧烈摇摆。它先是臣服于教皇，随后又重归拜占庭。1460年，在君士坦丁堡陷落七年后，它成为拜占庭帝国在希腊大陆最后一个陷落的堡垒。接着，威尼斯的狮旗在此飘扬了近一个世纪，商人的精明为城市留下了优雅的哥特式拱窗和更具规划性的建筑布局。1540年，奥斯曼土耳其的铁蹄最终踏上了这里，开始了长达数百年的统治。古老的教堂被改为清真寺，宣礼塔竖立起来，新的建筑层叠在旧的基底之上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在1821年希腊独立战争期间。经过四个月的激烈围城，希腊起义军终于从土耳其人手中夺回了这座象征性的堡垒，它成为最早获得自由的地区之一，极大地鼓舞了全国士气。但独立并未带来复兴。随着现代航运发展，它的港口地位衰落，居民逐渐迁往大陆更便利的新镇，岩石上的古城一度濒临废弃，只剩下风吹过空巷。直到20世纪后期，人们重新发现了它无可替代的历史与美学价值。废墟被小心修复，老宅变为精致的旅馆和咖啡馆，艺术家和寻梦者重新入住。它没有沦为纯粹的迪士尼式布景，而是在小心翼翼的平衡中，找回了自己作为“活着的历史小镇”的新生命，将千年的层叠故事，平静地展示给每一个穿越堤道而来的探访者。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味莫奈姆瓦夏，强烈建议你至少安排一整天的沉浸时间，并尽可能在古城内住上一晚。完美的行程始于清晨：赶在大量一日游游客抵达前（通常是上午10点后），穿过堤道进入古城。上午的柔和光线最适合探索迷宫般的中下部城镇，感受它的宁静与生活气息。中午在悬崖边的餐厅享用午餐，面对无敌海景。下午当阳光炽烈时，可以参观室内的博物馆或找家咖啡馆休息。傍晚时分，则是开始攀登至岩石顶部的“上城”废墟的黄金时间，既能避开正午酷热，又能追逐日落。夜晚留宿古城，当一日游的人潮散去，你才能独占月光下空无一人的神秘小巷，听到它最真实的呼吸与心跳。这样的节奏让你能体验到古城从晨光、烈日、黄昏到星夜截然不同的四种面貌。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适防滑的平底鞋，古城的鹅卵石路光滑且坡度多变，高跟鞋是灾难。夏季游览尽量安排在清晨和傍晚，中午小巷里非常闷热，且几乎没有遮阴处。攀登“上城”的步道是修缮良好的石阶，但全程无护栏且海风大，有恐高症或体力不佳者需量力而行，并注意脚下安全。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过那扇仿佛能吞噬时间的低矮主城门（Portello），正式踏入中世纪的迷宫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`任由自己被脚下光滑如黑镜的鹅卵石主街（穿过主城门后的那条）引导，不急于看地图，用迷路的方式感受两侧高墙带来的压迫感与惊喜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在道路交汇的中心广场（Plateia Dsami）停留，坐在古老的悬铃木下，观察广场边上的老教堂和闲坐的当地人，感受古城跳动的心脏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找并参观那座由奥斯曼时期清真寺改建的基督普世救主教堂（Christos Elkomenos），感受空间内奇妙的宗教层叠与混响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一条最窄的、墙上开满九重葛的小巷岔进去，用指尖触摸冰凉的石墙，抬头看一线天光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到一家悬崖边缘的咖啡馆或餐厅，点一杯希腊咖啡，什么都不做，只是凝视脚下蔚蓝的爱琴海与拍岸的浪花。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午晚些时候，开始沿着清晰标识的之字形步道，向上攀登至荒芜而壮丽的“上城”，那里有圣索菲亚教堂的废墟和拜占庭城堡的遗迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必在岩石顶部等待日落，看着夕阳将整个下部城镇的屋顶、远处的大海和天空染成金红，然后借着暮光或头灯的光缓缓下山。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`堤道中段全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时或傍晚日落前一小时，站在堤道中间靠大陆一侧，使用中长焦镜头压缩空间，能拍到巨岩全景与其在水中的倒影，气势恢宏。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主街光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，在主街的某段笔直巷道，利用两侧高墙形成的天然“光隧道”，拍摄人物走向光明的背影剪影或地面的几何光影图案。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`悬崖咖啡馆视角`}</h4>
                  <p className="text-sm text-gray-700">{`选择一家有露台的悬崖边咖啡馆，在下午顺光时分，以蓝色的海面和浪花为前景，拍摄古城石屋层层叠叠、错落有致的侧面轮廓。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`上城废墟俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，登上上城的圣索菲亚教堂废墟平台，使用广角镜头俯拍，将脚下密密麻麻的橙色屋顶、蜿蜒的城墙、湛蓝的大海和绚烂的天空一并收入镜中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`在任何时候，走进一条僻静小巷，聚焦于那些布满苔藓的石墙、色彩斑驳的木门、生锈的门环、或是从墙头瀑布般垂下的九重葛，捕捉古城的质感和生命细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用三脚架在公共巷道拍摄长时间曝光需非常谨慎，避免阻碍狭窄通道。航拍无人机在古城上空飞行有严格限制，需提前查询希腊当地法规，通常禁止在历史遗址和居民区上空飞行。拍摄当地居民或他们私宅的庭院内部时，请务必先微笑征得同意，尊重隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`古城入口附近由传统石屋改建的家庭式公寓，房间简单干净，带小厨房，主人会热情地给你指点最地道的早餐厅，醒来就在千年历史的包围中。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`经典体验`}</h4>
                  <p className="text-sm text-green-800">{`位于古城中心广场旁的精品酒店，由几栋连在一起的威尼斯时期贵族宅邸修复而成，房间保留了原始的拱形石顶和厚墙，现代舒适的设施隐秘地融入其中，在私密的阳台上就能俯瞰广场生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`悬崖浪漫`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在古城边缘、直接镶嵌在悬崖岩石里的奢华套房酒店，拥有令人屏息的私人海景露台或 Jacuzzi，夜晚伴着海浪声入眠，是蜜月或庆祝特殊日子的梦幻之选。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`上城隐居`}</h4>
                  <p className="text-sm text-purple-800">{`位于上城区域唯一的一家小型精品旅馆，需要爬一段山路才能抵达，但回报是无与伦比的宁静和全景视野，仿佛独占整个岩石王国，适合寻求极致静谧和灵感的创作者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内所有住宿都需要通过狭窄的巷道步行抵达，汽车无法进入，需要自己手提行李走一段路（部分高端酒店提供行李搬运服务）。夏季（6-9月）房源极其紧张，务必提前数月预订。住在古城内虽然氛围绝佳，但夜晚非常安静，娱乐活动限于散步、观星和享受宁静，喜欢夜生活热闹的游客可能更适合住在大陆的新镇。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开莫奈姆瓦夏，重新驾车驶上大陆的公路时，我总会忍不住一次次回望后视镜。那块巨岩在暮色中渐渐缩小，再次变回一个沉默的、孤独的地理奇观。但我知道，我已经把一部分自己留在了那里，留在了那些迷宫般的小巷里，留在了悬崖边凝望过的海风中。这个地方教会我的，远不止于历史知识或建筑美学。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它以一种近乎固执的方式，诠释了“坚韧”与“适应性”。一千年了，战争、贸易、政权更迭、地震、遗忘……所有的浪潮都拍打过这块岩石。然而，生活在这里的人们，就像岩石缝隙里长出的那些顽强的九重葛，一次次在废墟上重建家园，将不同文明的印记层叠在一起，不是覆盖，而是融合。今天的莫奈姆瓦夏，没有悲情博物馆的沉重感，反而有一种劫后余生的、从容的平静。老妇人在千年的广场上售卖手织蕾丝，年轻人在奥斯曼改造的教堂里举行婚礼，猫儿在威尼斯拱窗下打盹。历史不是教科书上的铅字，它就是门前的石板路，是窗台的鲜花，是厨房飘出的香味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个快得令人眩晕的时代，莫奈姆瓦夏是一个珍贵的“减速带”。它强迫你慢下来——因为巷子窄得跑不起来，因为每一步都需要你低头看路、抬头看景。它让你重新学习“探索”的乐趣，不是按图索骥，而是允许自己迷路，在下一个转角遇见一扇惊艳的门或一片豁然开朗的海。它提醒我们，真正的财富有时是寂静，是孤立，是与自然力量的持久对峙中所诞生出的、无与伦比的美丽与尊严。每一位热爱深度游的旅人，都应该来体验一次这种时空剥离感。这不仅是一次旅行，更是一次与自己内心宁静对话的朝圣。你会带走比照片多得多的东西：一种关于时间、生命和文明延续的，深沉而安定的力量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/arta" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔塔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arta</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ermoupoli-syros" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡罗斯岛埃尔穆波利</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ermoupoli, Syros</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chania-venetian-harbour" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尼亚威尼斯港</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chania Venetian Harbour</p>
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
