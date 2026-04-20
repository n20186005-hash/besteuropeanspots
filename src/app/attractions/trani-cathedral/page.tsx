import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '特拉尼圣尼科拉大教堂 Trani Cathedral｜矗立在海浪边的纯白史诗 - 最佳欧洲景点',
  description: '第一眼看到特拉尼大教堂时，你会忘记所有关于建筑的教科书定义。它不是什么矗立在广场中央的庄严雕塑，而是一头从蔚蓝亚得里亚海中直接醒来的、温柔的白色巨兽。你的鼻子会先于眼睛捕捉到它：海风裹挟着咸腥与阳光炙烤石头的干燥气味扑面而来，紧接着是海浪有节奏地拍打下方礁石的哗哗声，低沉而永恒。然后，那整座建筑才豁...',
}

export default function TraniCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '特拉尼圣尼科拉大教堂', href: '/attractions/trani-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`特拉尼圣尼科拉大教堂・Trani Cathedral・意大利・特拉尼`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到特拉尼大教堂时，你会忘记所有关于建筑的教科书定义。它不是什么矗立在广场中央的庄严雕塑，而是一头从蔚蓝亚得里亚海中直接醒来的、温柔的白色巨兽。你的鼻子会先于眼睛捕捉到它：海风裹挟着咸腥与阳光炙烤石头的干燥气味扑面而来，紧接着是海浪有节奏地拍打下方礁石的哗哗声，低沉而永恒。然后，那整座建筑才豁然展开——不是灰色，不是米黄，是一种带着暖意的、近乎于光的乳白色，在南意大利炽烈的天空下，干净得近乎圣洁。
走近了看，你会发现这座教堂活得有多么“接地气”。它的台阶下不是花园，而是防波堤；它的侧廊窗户仿佛一推开，就能钓到鱼。当地老人坐在海堤的矮墙上晒太阳，渔夫在小船里整理橙绿色的渔网，孩子们尖叫着从教堂投下的巨大阴影里跑进阳光中。它不像一个被供起来的博物馆，更像是社区里一位德高望重、看着一代代人长大的老爷爷，它的神圣感与日常的烟火气毫无冲突地交融在一起，这种生命力比任何辉煌的壁画都更打动人心。
最震撼的时刻，是当你走入它直接建造在海礁之上的地宫。空气瞬间变得阴凉潮湿，带着地下岩层特有的土腥味和一丝隐隐的、来自大海的潮气。昏暗的灯光下，粗粝的石柱仿佛从海底直接生长出来，你的脚下就是千百年来被海水侵蚀的天然岩石。那一刻你忽然明白，这座教堂的根基不是土地，而是海洋。它信仰的脉搏与潮汐的呼吸同步，这是一种何其原始而强大的联系。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到特拉尼大教堂时，你会忘记所有关于建筑的教科书定义。它不是什么矗立在广场中央的庄严雕塑，而是一头从蔚蓝亚得里亚海中直接醒来的、温柔的白色巨兽。你的鼻子会先于眼睛捕捉到它：海风裹挟着咸腥与阳光炙烤石头的干燥气味扑面而来，紧接着是海浪有节奏地拍打下方礁石的哗哗声，低沉而永恒。然后，那整座建筑才豁然展开——不是灰色，不是米黄，是一种带着暖意的、近乎于光的乳白色，在南意大利炽烈的天空下，干净得近乎圣洁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了看，你会发现这座教堂活得有多么“接地气”。它的台阶下不是花园，而是防波堤；它的侧廊窗户仿佛一推开，就能钓到鱼。当地老人坐在海堤的矮墙上晒太阳，渔夫在小船里整理橙绿色的渔网，孩子们尖叫着从教堂投下的巨大阴影里跑进阳光中。它不像一个被供起来的博物馆，更像是社区里一位德高望重、看着一代代人长大的老爷爷，它的神圣感与日常的烟火气毫无冲突地交融在一起，这种生命力比任何辉煌的壁画都更打动人心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最震撼的时刻，是当你走入它直接建造在海礁之上的地宫。空气瞬间变得阴凉潮湿，带着地下岩层特有的土腥味和一丝隐隐的、来自大海的潮气。昏暗的灯光下，粗粝的石柱仿佛从海底直接生长出来，你的脚下就是千百年来被海水侵蚀的天然岩石。那一刻你忽然明白，这座教堂的根基不是土地，而是海洋。它信仰的脉搏与潮汐的呼吸同步，这是一种何其原始而强大的联系。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`特拉尼圣尼科拉大教堂`} />
                <InfoRow label="英文名称" value={`Trani Cathedral`} />
                <InfoRow label="正式名称" value={`Concattedrale di San Nicola Pellegrino`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`特拉尼`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`普利亚大区罗曼式建筑的王冠明珠，也是意大利唯一几乎直接从海面升起的古老主教座堂。`} />
                <InfoRow label="建筑特色" value={`由当地特有的乳白色石灰华石建造，随着光线从珍珠白变为金黄，拥有直接建于海礁之上的高耸钟楼和面朝大海的宏伟立面。`} />
                <InfoRow label="建筑风格" value={`普利亚-罗曼式风格，深受诺曼人、拜占庭和本地阿拉伯建筑影响，风格纯粹而有力。`} />
                <InfoRow label="文化价值" value={`它是中世纪航海共和国财富与信仰的化身，见证了特拉尼作为“亚得里亚海女王”的黄金时代。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂主体及地宫通常每日上午8:30至下午1:00，下午4:00至晚7:00开放，夏季（6月至9月）傍晚关闭时间可能延后。钟楼登顶参观时间较为有限，通常为工作日的上午时段，并可能因天气或维护临时关闭。圣诞节、元旦及部分宗教节日上午可能不对外开放，建议行前在本地旅游官网二次确认。`} />
              <InfoRow label="门票价格" value={`进入教堂主体免费。参观地宫（Cripta）及登临钟楼（Campanile）通常需要支付小额门票（约3-5欧元），有时以“自愿捐赠”形式收取。学生、老年人和儿童常有折扣，12岁以下儿童在家人陪同下常免费。`} />
              <InfoRow label="地址" value={`Piazza Duomo, 76125 Trani BT, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是巴里卡罗尔·沃伊蒂瓦机场（BRI），驾车或乘出租车前往特拉尼约45分钟。最推荐的方式是乘坐火车：从巴里中央车站（Bari Centrale）出发，乘坐前往巴列塔/福贾方向的区域列车（Regionale），在“Trani”站下车，车程约30-40分钟，班次频繁几乎每小时都有。火车站步行至大教堂约10-15分钟，直接沿着向海的方向走就能看到它耸立在天际线上。如果自驾，可将车停在海港附近收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事始于一个神秘的少年。1067年，一位名叫尼科拉斯的希腊少年来到特拉尼，他沉默寡言，只是不断地重复着“Kyrie Eleison”（天主垂怜）。没有人知道他从哪里来，要到哪里去。不久后他在这里去世，却被当地人民奉为圣人。他的遗骸被认为具有神迹，吸引着越来越多的朝圣者。为了安放这位“朝圣者尼科拉斯”的圣髑，特拉尼的主教决定建造一座配得上他的宏伟教堂。这不仅仅是一座建筑，更是一个正在崛起的海洋共和国向世界宣告其财富与虔诚的宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选址本身就充满了象征意义。他们清空了海港边一座更古老的、供奉圣母玛利亚的小教堂（其遗迹仍在地宫下方），直接在面向大海的礁石上打下地基。从1099年左右开始，工程持续了超过一个世纪。建筑所用的石头来自几公里外著名的“特拉尼石矿”，这种石灰华石质地相对柔软易于雕刻，又在海风中会逐渐硬化，泛出独特的金色光泽。建造者们是那个大交流时代的产物：诺曼统治者提供了政治意愿和资源，本地工匠继承了伦巴第人的石工技艺，而通过繁荣的海上贸易，拜占庭的马赛克艺术和阿拉伯的装饰图案也悄悄融入了设计。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`教堂在12世纪末基本建成，并立刻成为了亚得里亚海航线上最重要的灯塔之一。远航归来的水手，看到那高达59米的钟楼，就知道家到了。它不仅是精神灯塔，也是实际的地理坐标。中世纪的特拉尼凭借其法典《特拉尼海事条例》成为海洋法权威，富商云集。教堂前的广场就是繁华的交易所，香料、织物、葡萄酒在此交易，不同语言和信仰的人在此交汇。教堂的墙壁，聆听过无数商人的契约誓言、水手的还愿祈祷和失散亲人的哭泣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，大海给予的，也可能被夺走。1343年，一场灾难性的地震严重损坏了教堂，尤其是华丽的玫瑰花窗和部分拱顶。随后的修复工程持续了很久，风格上也不可避免地融入了后来的哥特式元素。更致命的打击来自港口淤塞，特拉尼的贸易地位逐渐被巴里取代，财富流逝，教堂的维护也时断时续。它像一个过气的贵族，渐渐沉默，但风骨犹存。直到19世纪和20世纪，人们才重新认识到这座“海上教堂”无与伦比的价值，进行了细致的修复，清除了后来添加的巴洛克装饰，让它重新展现出罗曼式原初的、雕塑般的几何力量。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`最佳游览时间是清晨（8:30开门时）或傍晚（关门前两小时）。清晨光线柔和，教堂正面被朝阳染成金色，游客稀少，你能独占那份宁静。傍晚则能欣赏到“金色时刻”的阳光穿透侧窗，将室内染成蜂蜜色，并在日落时分看到建筑剪映在粉紫色晚霞中的绝景。整体游览建议留出至少2.5小时，节奏宜慢，因为这里的魅力一半在建筑内，一半在它与海洋、与小镇生活的互动中。先从外部环绕欣赏，再进入内部由下至上感受，最后在周围街区沉浸。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季正午阳光极其猛烈，教堂前广场毫无遮蔽，务必做好防晒并携带饮水。留意教堂门口的临时公告，钟楼开放时间极为任性，可能随时调整。尊重宗教场所，室内需穿着得体（避免无袖上衣和过短裤裙）。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从海堤的东侧开始漫步，仰视教堂与高耸钟楼构成的、仿佛即将启航的巨轮般的侧影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕到面朝大海的正面广场，静静观察阳光在那些精美雕刻的盲拱和玫瑰窗上移动的轨迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开厚重的木门进入中殿，让眼睛适应昏暗，感受从高处小窗倾泻而下、在石灰华石柱上舞蹈的光束。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着侧廊台阶下行，踏入阴凉幽静的地宫，触摸那些直接从海礁凿出的冰冷石柱，倾听隐约的海浪回声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找通往钟楼内部的入口（如果开放），攀爬狭窄的旋转石阶，体验空间与光线的奇妙变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上钟楼顶部的平台，让360度的全景震撼你：一边是红瓦老城如迷宫般蔓延，另一边是无垠的蔚蓝大海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下钟楼后，不要急着离开，坐在面朝大海的台阶上，看海鸥盘旋，直到身心都沉浸在这片风景里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后漫步进入教堂背后的老城区迷宫，在蜿蜒的小巷中偶然回首，再次捕捉钟楼从屋顶间探头的惊喜画面。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`海堤东侧远景机位`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，从防波堤东端用长焦镜头压缩空间，将教堂、钟楼与停泊的渔船一同纳入画面，营造生活与神圣的交融感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`正面广场低角度仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光为立面镀上金色，蹲低身体用广角镜头仰拍，将教堂入口的精致雕刻与恢弘的钟楼纳入同一构图，凸显其威严。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`中殿侧廊光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光透过南侧高窗形成强烈光柱，站在中殿中部，对准一排石柱，等待光斑移动至柱身中间，拍摄明暗交替的戏剧性走廊。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`钟楼顶部俯瞰抓拍`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后，将相机镜头透过石拱窗的缝隙，对准下方教堂的屋顶轮廓线和远处的海平面，形成天然画框，拍摄几何感强烈的对称构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`黄昏蓝调时刻剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落后二十分钟，在海堤上拍摄教堂与钟楼在深蓝色天幕下的黑色剪影，仅保留窗户内透出的温暖灯光，故事感十足。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内允许拍照，但禁用闪光灯和三脚架（除非获得特殊许可）。拍摄当地渔民和居民时，请先微笑示意并获得同意，这是一种基本的尊重。海风较大，在钟楼顶端拍摄时务必握紧相机和手机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海景民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在教堂广场旁一栋经过修复的13世纪贵族宫殿里，石头拱顶下是现代化的舒适，清晨打开木窗，海风与教堂钟声一同涌入房间。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计感公寓体验`}</h4>
                  <p className="text-sm text-green-800">{`老城中心由古老橄榄油作坊改造的LOFT公寓，保留了原始的岩壁和石碾，搭配简约设计家具，出门拐两个弯就是热闹的酒吧街。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端海滨酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城市西侧宁静海湾旁的五星级酒店，拥有私人沙滩和俯瞰亚得里亚海的泳池，在露台上享用早餐时，特拉尼大教堂就像一幅挂在海天之间的画。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`修道院隐居`}</h4>
                  <p className="text-sm text-purple-800">{`距离教堂步行15分钟的一座经过改造的宁静修道院客房，房间环绕着回廊花园，极度安静，适合寻求内心平和的旅人。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`特拉尼老城夜间非常安全宁静，但石板路拖行李箱困难，预定时可询问房东是否提供接送或协助。夏季（7-8月）是旺季，需提前数月预订。如果想体验本地节庆，可查询“圣尼科拉节”（每年7月底至8月初）期间的住宿，但需忍受热闹的人潮。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开特拉尼很久之后，那抹白色的影子还会时常浮现在脑海里。它让我思考，什么才是真正“活着的”文化遗产。它不是被栅栏围起来、需要你屏息凝视的标本，而是一个依然在呼吸、在倾听、在与周围一切生命互动的有机体。大教堂的墙壁吸收着海盐，它的台阶被世代渔民的脚步磨光，它的钟声既为弥撒而鸣，也为出海的渔船祈福。这种深植于日常的神圣，让它的美超越了单纯的艺术欣赏，成为一种关于“归属”的深刻体验。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求速度和刺激的世界里，特拉尼大教堂提供了一种截然不同的旅行价值。它不提供惊险的游乐设施或网红打卡的浮夸背景。它只提供一片亘古不变的海，一块被阳光和海风雕刻了千年的白石，以及一份巨大的、沉默的宁静。它教会我们，旅行的意义有时不是收集更多的景点，而是找到一个能让时间慢下来、让感官彻底打开的地方，然后只是“存在”于那里。当你坐在海堤上，背靠着这座千年巨石，看着夕阳将一切染红时，你会感到自己与某种永恒的东西连接在了一起。这，或许就是它值得你漂洋过海来探访的全部理由。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cividale-del-friuli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奇
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奇维达莱德尔弗留利</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cividale del Friuli</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/volterra-etruscan-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔泰拉伊特鲁里亚遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Volterra Etruscan Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ravenna-mosaics" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉文纳马赛克群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Early Christian Monuments of Ravenna</p>
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
