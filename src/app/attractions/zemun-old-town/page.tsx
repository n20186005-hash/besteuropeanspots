import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泽蒙老城避坑指南｜穷游预算友好！登塔12元俯瞰整片红瓦全景 - 最佳欧洲景点',
  description: '泽蒙老城是贝尔格莱德最具烟火气的历史片区，依偎在多瑙河畔，红瓦屋顶错落成片，千年塔楼静静矗立。这里没有过度商业化的喧嚣，保留着南斯拉夫时期的慵懒氛围。',
}

export default function ZemunOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '泽蒙老城', href: '/attractions/zemun-old-town' },
          ]}
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">泽蒙老城</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">🇷🇸 塞尔维亚 · 贝尔格莱德</span>
            <span className="mr-4">•</span>
            <span>古城</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-800 leading-relaxed">
              泽蒙老城是贝尔格莱德最具烟火气的历史片区，依偎在多瑙河畔，红瓦屋顶错落成片，千年塔楼静静矗立。这里没有过度商业化的喧嚣，保留着南斯拉夫时期的慵懒氛围，更藏着古罗马、奥匈帝国与塞尔维亚本土文化交融的痕迹，漫步街巷仿佛闯入时光慢放的老欧洲小镇，与贝尔格莱德主城区的厚重历史截然不同，是探访塞尔维亚原生风貌的绝佳去处。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">基本信息</h2>
              <p className="text-gray-700 mb-4">
                泽蒙老城隶属于塞尔维亚首都贝尔格莱德，地处城市北部多瑙河畔，是贝尔格莱德现存历史最悠久的区域之一，也是塞尔维亚少数保留完整中世纪风貌的老城之一。整座老城依地势而建，核心区域以千年塔（Gardos Tower）为中心向外延伸，街巷蜿蜒曲折，两侧遍布复古民居、本地咖啡馆、手作小店与传统餐厅，墙面偶尔可见南斯拉夫时期的涂鸦，藏着一代人的集体记忆。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">开放时间</h2>
              <p className="text-gray-700 mb-4">
                泽蒙老城属于开放式街区，整体无统一开放时间，全天均可自由进入。核心地标千年塔Gardos Tower开放时间为每日9:00-19:00，冬季会根据日落时间提前半小时关闭，我冬天去的时候大概18点半就开始清场，想登塔的别卡着点去。部分小型博物馆、手作店铺营业时间多为10:00-20:00，周日部分店铺会缩短营业时间甚至休息，亲测周日下午有些特色小店直接关门，想要逛店购物的尽量安排在周一至周六。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">门票</h2>
              <p className="text-gray-700 mb-4">
                老城街区完全免费开放，无需购买任何门票即可随意游览，这也是泽蒙的一大特色——不刻意圈地收费，保留着最纯粹的游览体验。千年塔登塔门票为200第纳尔，折合人民币约12元，学生凭有效证件可半价，价格十分亲民，登塔后能俯瞰整片老城风貌，性价比很高。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">地址</h2>
              <p className="text-gray-700 mb-4">
                Zemun, 11000 Beograd, Serbia，直接导航输入Zemun Old Town或Gardos Tower即可精准定位。老城范围不算特别大，核心区域集中在千年塔周边，导航出现偏差时，跟着多瑙河方向走基本不会出错，我当时导航偶尔飘移，问了本地路人都很热情地指路，甚至有人主动带我走了一段，不用太担心迷路。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">交通</h2>
              <p className="text-gray-700 mb-4">
                从贝尔格莱德市中心前往泽蒙交通十分便捷，公交可乘坐15、83、85路，在Zemun Centar站下车，车程约25-35分钟，单程票价约150第纳尔，上车直接向司机购票即可，司机大多会简单英语，不用担心沟通问题。也可以选择乘坐有轨电车7路，直达老城边缘，步行10分钟就能抵达千年塔，有轨电车沿途能欣赏到贝尔格莱德的城市风貌，比公交更有氛围感。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">最佳游览季节</h2>
              <p className="text-gray-700 mb-4">
                春季4-6月与秋季9-10月是游览泽蒙老城的最佳时节。春季气温舒适，平均气温15-25℃，街巷两旁的月季、天竺葵竞相盛开，多瑙河畔微风和煦，柳树依依，适合长时间漫步，偶尔还能遇到本地人的春日市集，摆满了手工饰品和新鲜蔬果；秋季天空澄澈，气温适宜，红瓦屋顶搭配金黄落叶，拍照出片率极高。
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">建议游览时长</h2>
            <p className="text-gray-700 mb-4">
              轻松游览时长建议3-4小时，若想深度逛遍街巷、体验本地咖啡馆文化、感受居民日常，可安排半天时间。时间紧张的游客，2小时也能走完核心景点，不用追求面面俱到。我实际走的时候，从千年塔下来后觉得有些疲惫，直接拐进小巷找了家咖啡馆歇了20分钟，点了一杯本地的塞尔维亚咖啡，口感醇厚，老板还热情地给我介绍泽蒙的历史，跳过了小众琥珀博物馆，反而偶遇一家本地人常去的手作饰品店，老板是位老奶奶，手工制作的银饰很有特色，还会讲饰品背后的故事，逛起来比按攻略走有趣得多。
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">注意事项</h2>
            <p className="text-gray-700 mb-4">
              <strong>注意老城内街巷多为石板路，路面高低不平，还有不少陡坡，行走起来很废脚。</strong> 建议穿舒适的步行鞋，别为了拍照硬扛。另外，泽蒙老城内有很多本地居民居住，游览时请保持安静，尊重当地人的生活习惯。拍照时如果想拍摄本地居民，最好提前征得同意，尊重他们的隐私。
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">历史背景</h2>
            <p className="text-gray-700 mb-4">
              逛泽蒙的时候，我总忍不住感慨，这片小小的老城，藏着比贝尔格莱德主城区更丰富的故事。它的历史能一直追溯到古罗马时期，最早的时候，这里只是多瑙河畔一个不起眼的贸易村落，却因为地理位置特殊，成了古罗马帝国多瑙河防线的重要节点，主要负责盐运和货物中转，相当于当时的"物流中转站"。现在走在老城区的街巷里，还能偶尔发现一些古罗马时期的石砌遗迹，它们就藏在现代民居中间，不仔细看，很容易就错过了，那种古今交融的感觉，特别奇妙。
            </p>
            <p className="text-gray-700 mb-4">
              到了中世纪，泽蒙的命运就更曲折了，先后被拜占庭、奥匈帝国统治过，不同的文明在这里交融碰撞，也留下了满满的痕迹。最明显的就是建筑，奥匈帝国时期的巴洛克式建筑，线条精致、装饰华丽，而塞尔维亚本土的拜占庭式建筑，风格庄重、色彩浓郁，两种风格的建筑交相辉映，走在老街上，一边是欧式的精致门窗，一边是斯拉夫民族的粗犷雕花，这种独一无二的多元融合风格，大概就是泽蒙区别于其他欧洲老城的核心魅力吧，我每走一步，都忍不住停下来多看两眼。
            </p>
            <p className="text-gray-700 mb-4">
              19世纪之后，泽蒙逐渐发展为重要的河畔城镇，凭借多瑙河的航运优势，成为塞尔维亚重要的盐运与贸易中心，"泽蒙"在塞尔维亚语中有着"水边聚居地"的含义，这也印证了它与多瑙河的深厚渊源。直到20世纪中期，泽蒙正式并入贝尔格莱德，成为首都的一部分，但它始终保持着自己的独特气质，没有被主城区的繁华同化。
            </p>
            <p className="text-gray-700 mb-4">
              这里没有波澜壮阔的战争史诗，也没有极尽奢华的皇室建筑，更多的是普通居民世代生活留下的烟火气息，是塞尔维亚"慢生活"的缩影。不同于贝尔格莱德主城区承载的政治、战争历史，泽蒙的历史更偏向于民生与贸易，是普通人的生活史——老面包店传承了上百年，手工匠人坚守着传统技艺，居民们延续着南斯拉夫时期的生活习惯，傍晚在河畔散步、周末在集市采购，这种平淡而温暖的日常，正是泽蒙历史最动人的地方。
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">游览路线</h2>
            <p className="text-gray-700 mb-4">
              推荐从Zemun Centar公交站出发，先沿着主街向上步行，途经本地集市，这里是泽蒙人文气息最浓厚的地方，摆满了新鲜的果蔬、手工点心、传统香肠和本地红酒，摊主大多是本地人，热情好客，虽然语言不通，但会主动给你试吃，我当时试吃了本地的李子酱，酸甜可口，忍不住买了一瓶。随后抵达千年塔，登塔俯瞰全城红瓦与多瑙河全景，感受老城的整体风貌。
            </p>
            <p className="text-gray-700 mb-4">
              从塔楼下来后，钻进两侧蜿蜒小巷，探访复古民居与特色小店，这里的小店大多是家庭经营，没有商业化的浮躁，手作饰品、传统织物、本地画作应有尽有，店主大多会耐心给你介绍每件商品的故事。随意挑选一家咖啡馆坐下，点一杯塞尔维亚咖啡，搭配一块本地特色的果仁蛋糕，体验本地慢生活，看着窗外往来的居民，感受这份独有的慵懒。之后步行至多瑙河畔，沿着河岸散步，欣赏河景与远处的桥梁，偶尔能看到本地人在河畔钓鱼、遛狗，画面十分惬意。
            </p>
            <p className="text-gray-700 mb-4">
              我当时没有严格按照路线走，逛完塔楼后随机拐进小巷，反而发现了很多隐藏的好看角落——一条爬满绿植的小巷、一面布满涂鸦的墙面、一家藏在深处的老书店，这些地方没有游客，只有本地居民的日常，反而更有泽蒙的味道。如果大家时间有限，不想行程赶得匆忙又疲惫，可以试试直接跳过那些小众博物馆，当然如果你喜欢历史或者带的小盆友家庭旅行我还是建议去转转的。
            </p>
            <p className="text-gray-700 mb-4">
              其实泽蒙不用赶景点，重点就三个：千年塔、老街、多瑙河边。慢慢晃悠就行，路都平坦，走起来不累。塔顶视野是真绝，全景随便拍都出片。
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">拍照机位</h2>
            <p className="text-gray-700 mb-4">
              如果你喜欢拍照千年塔顶层有个观景台，绝对是泽蒙取景地当之无愧的绝佳机位，没有之一！站在上面俯瞰全城，风景真的美到麦狗的，随手一拍都是大片。我登到顶层的时候，一下子就被眼前的景色惊艳到了——整片泽蒙老城的红瓦屋顶密密麻麻，铺展开来，旁边的多瑙河波光粼粼，远处贝尔格莱德主城区的轮廓隐约可见，构图简洁又大气，不用懂什么复杂的拍照技巧，随手一拍就是大片既视感。
            </p>
            <p className="text-gray-700 mb-4">
              不过我也踩了个小坑，本来特意查好攻略，想卡17点的黄金时段拍摄夕阳下的红瓦，结果当天是多云天气，光线来得特别晚，我在顶层等了一个多小时，直到18点半，光线才刚好，才拍出了满意的照片。所以想拍夕阳红瓦的朋友，别死卡时间，到了当地先看看当天的云层情况，再决定什么时候登塔。另外偷偷说一句，阴天拍出来的画面更有复古氛围感，色调柔和，而晴天拍出来的画面更明亮通透，各有各的美感，不用因为天气不好而遗憾。
            </p>
            <p className="text-gray-700 mb-4">
              多瑙河畔靠近老码头的位置，以老城红瓦屋顶为背景拍摄人像，画面层次感极强，傍晚逆光拍摄，发丝发光，氛围感拉满，我当时在这里拍了很多照片，每一张都很出片，还偶遇了一对本地情侣，他们热情地帮我拍照，还教我摆姿势。老城内狭窄街巷的转角处，搭配复古门窗与绿植，很适合拍欧式街景，我在一条无名小巷里随手拍的照片，墙面斑驳，门口摆着盆栽，阳光透过树叶洒下来，反而比刻意找的打卡点更有味道。
            </p>
            <p className="text-gray-700 mb-4">
              另外，老城高处的斜坡路段，能同时拍到塔楼与成片红瓦，视角独特，适合拍全景，这里很少有游客，不用担心拍照被打扰。还有，本地集市的摊位也是很好的拍照机位，色彩鲜艳的果蔬、手工制品，搭配摊主的笑容，能拍出充满烟火气的人文照片。提醒大家登塔拍照时注意手机相机防摔，楼梯狭窄，转身时容易磕碰；拍摄本地居民时，最好提前征得同意，尊重他们的隐私；另外，避免在正午阳光直射时拍照，光线过强，拍出来的照片容易过曝，下午3-5点或傍晚是最佳拍摄时间。
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">附近景点</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">多瑙河游船码头</h3>
                <p className="text-gray-700 text-sm">
                  距离泽蒙老城不远的多瑙河游船码头，可乘坐短途游船观赏河景，航程约30分钟，票价约300第纳尔，能从水上视角欣赏老城风貌，亲测吹着河风十分惬意，游船沿途还会经过泽蒙的盐运旧址，能隐约看到当年盐运的痕迹，听船长介绍泽蒙的盐运历史，比单纯逛景点更有收获。
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Gardoš公园</h3>
                <p className="text-gray-700 text-sm">
                  就在千年塔下方，绿植茂密，是本地人休闲散步的地方，园内有很多复古长椅，还有小型雕塑，都是南斯拉夫时期留下的，天气好的时候坐在草坪上歇脚，看着本地老人下棋、小孩玩耍，感受本地生活氛围很舒服，这里不同于其他城市的公园，没有过多的修饰，保留着最自然的模样。
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">泽蒙市政公园</h3>
                <p className="text-gray-700 text-sm">
                  距离核心区步行15分钟，环境清幽，园内有湖泊、喷泉，还有很多本地植被，适合逛累了之后放松，我当时逛完老城，在这里歇了半小时，看着湖面的水鸟，十分治愈。
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">泽蒙集市</h3>
                <p className="text-gray-700 text-sm">
                  这里是本地人的生活聚集地，不仅能买到新鲜的果蔬、手工制品，还能品尝到本地特色小吃，比如cevapi（塞尔维亚烤肉串）、burek（巴尔干肉派），价格比旅游区实惠很多，我当时在集市上吃了一份burek，外皮酥脆，内馅饱满，搭配本地酸奶，味道十分地道，摊主还告诉我，这是泽蒙人从小吃到大的美食。
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">小型艺术画廊</h3>
                <p className="text-gray-700 text-sm">
                  周边还有小型艺术画廊，虽然规模不大，但展示的都是本地艺术家的作品，大多以泽蒙的风景、居民日常为主题，能感受到本地的艺术氛围，感兴趣的可以顺路逛逛。不同于哈尔施塔特的精致、巴德伊舍的皇家气质，泽蒙周边的景点更接地气，充满了生活气息，适合喜欢慢旅行、感受人文的游客。
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">住宿小贴士</h2>
            <p className="text-gray-700 mb-4">
              泽蒙老城内住宿以民宿与小型酒店为主，大多位于复古建筑内，风格温馨有特色，与老城的人文氛围完美融合，这也是泽蒙住宿的一大特色——没有连锁酒店的标准化，每一家都有自己的风格，能感受到本地人的生活气息。我住的三楼民宿没有电梯，扛着28寸行李箱上楼十分费劲，老板看到都忍不住笑，还主动过来帮忙，后来发现同条街就有带电梯的小酒店，价格相差不大，行李多的游客千万别逞强，预订时一定要问清楚是否有电梯。
            </p>
            <p className="text-gray-700 mb-4">
              预订时优先选择靠近千年塔或多瑙河畔的房源，出行方便，夜景视野更好，不用每天走太多路，早上还能沿着河畔散步，感受老城的清晨氛围。老城区住宿价格整体低于贝尔格莱德市中心，性价比很高，淡季（11月至次年3月）提前1-2周预订即可，旺季（4-10月）可适当提早，避免出现无房或价格上涨的情况。尽量选择带窗户的房间，部分老建筑地下室房间通风较差，居住体感不佳，我当时隔壁房间就是地下室，游客反映住着很闷，还有异味。
            </p>
            <p className="text-gray-700 mb-4">
              另外，本地民宿大多不提供一次性洗漱用品，建议自行携带牙刷、牙膏、拖鞋；部分民宿没有空调，夏季住宿会有些闷热，预订时可以咨询清楚。入住后可以向房东询问本地隐藏小店，他们推荐的餐馆和咖啡馆远比网红榜单更地道，亲测跟着本地人推荐吃准没错，我当时房东推荐了一家隐藏在小巷里的餐馆，主打本地家常菜，味道正宗，价格实惠，还能和本地居民一起用餐，感受他们的饮食文化。还有，老城区夜间非常安静，入住后注意保持安静，避免影响他人休息，部分民宿有严格的作息规定，预订时可以留意一下。
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              本文由旅行作者 Winter Grady 实地走访整理，专注欧洲小众景点深度攻略，持续分享真实游览体验。
            </p>
            <p className="text-xs text-gray-500 text-center mt-2">
              本站内容仅供旅行参考使用，商务合作与转载事宜请通过联系页脚提交申请。
            </p>
            <p className="text-xs text-gray-500 text-center">
              管理团队保留所有内容版权，未经许可禁止搬运、摘抄或商用。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}