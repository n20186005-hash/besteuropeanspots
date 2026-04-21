import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '加拉西迪 Galaxidi｜希腊的沉静航海之心，在科林斯湾画一幅蓝与白的梦 - 最佳欧洲景点',
  description: '车沿着海岸公路拐过最后一个弯，加拉西迪就像一枚被遗忘的贝壳，静静卧在科林斯湾深蓝色的臂弯里。第一眼看见的，不是圣托里尼那种铺天盖地的炫目白，而是一种被海风常年抚摸后，褪去锐气的、温柔的奶油色。空气里有一股独特的混合气息：咸腥的海风、码头边渔网上晾晒的淡淡海藻味，还有从某家后院飘来的，迷迭香和热橄榄油...',
}

export default function GalaxidiTraditionalSailingTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '中希腊大区（具体属地市为德尔斐）', href: '/destinations/greece' },
            { label: '加拉西迪', href: '/attractions/galaxidi-traditional-sailing-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`加拉西迪・Galaxidi・希腊・中希腊大区（具体属地市为德尔斐）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车沿着海岸公路拐过最后一个弯，加拉西迪就像一枚被遗忘的贝壳，静静卧在科林斯湾深蓝色的臂弯里。第一眼看见的，不是圣托里尼那种铺天盖地的炫目白，而是一种被海风常年抚摸后，褪去锐气的、温柔的奶油色。空气里有一股独特的混合气息：咸腥的海风、码头边渔网上晾晒的淡淡海藻味，还有从某家后院飘来的，迷迭香和热橄榄油的香气。耳边是极致宁静的协奏曲——海浪懒洋洋拍打防波堤的“哗哗”声，桅杆上金属零件随风轻叩的“叮当”声，以及不知从哪条窄巷传来的、老式收音机里断断续续的希腊民歌。
这里的时间流速是不同的。上午十点，你会在“阿吉奥斯·尼古拉奥斯”老教堂旁的咖啡馆，看到几位白发老人端着小小的希腊咖啡，一坐就是几个小时，话题从天气一直聊到孙子的学业。他们的父辈、祖父辈，或许正是驾驭帆船穿越地中海的船长。港口边，不再有万吨巨轮，取而代之的是随波轻摇的彩色小渔船和保养得锃亮的古典帆船。你会看到有人正耐心地给木船舷边上漆，那专注的神情，仿佛在进行一场神圣的仪式。小镇的灵魂不在某个地标，而在这种与海洋呼吸同步的日常脉搏里。
最打动人的，是那份未被游客潮冲淡的真实感。这里没有为了拍照而搭建的“布景”，每一座色彩斑驳的船主宅邸、每一扇漆成海蓝色的木门、每一幅脚下用黑白鹅卵石拼出的航海图案（锚、舵轮、海马），都仍然属于生活在此的人们。黄昏时分，当夕阳把整个港口染成蜜糖色，当地家庭会沿着海滨散步，孩子们骑着自行车追逐嬉戏。你瞬间就明白了，加拉西迪的魅力，不在于“观看”，而在于“潜入”——潜入一种以海为生、与风共舞的古老生活智慧与平静之中。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车沿着海岸公路拐过最后一个弯，加拉西迪就像一枚被遗忘的贝壳，静静卧在科林斯湾深蓝色的臂弯里。第一眼看见的，不是圣托里尼那种铺天盖地的炫目白，而是一种被海风常年抚摸后，褪去锐气的、温柔的奶油色。空气里有一股独特的混合气息：咸腥的海风、码头边渔网上晾晒的淡淡海藻味，还有从某家后院飘来的，迷迭香和热橄榄油的香气。耳边是极致宁静的协奏曲——海浪懒洋洋拍打防波堤的“哗哗”声，桅杆上金属零件随风轻叩的“叮当”声，以及不知从哪条窄巷传来的、老式收音机里断断续续的希腊民歌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的时间流速是不同的。上午十点，你会在“阿吉奥斯·尼古拉奥斯”老教堂旁的咖啡馆，看到几位白发老人端着小小的希腊咖啡，一坐就是几个小时，话题从天气一直聊到孙子的学业。他们的父辈、祖父辈，或许正是驾驭帆船穿越地中海的船长。港口边，不再有万吨巨轮，取而代之的是随波轻摇的彩色小渔船和保养得锃亮的古典帆船。你会看到有人正耐心地给木船舷边上漆，那专注的神情，仿佛在进行一场神圣的仪式。小镇的灵魂不在某个地标，而在这种与海洋呼吸同步的日常脉搏里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那份未被游客潮冲淡的真实感。这里没有为了拍照而搭建的“布景”，每一座色彩斑驳的船主宅邸、每一扇漆成海蓝色的木门、每一幅脚下用黑白鹅卵石拼出的航海图案（锚、舵轮、海马），都仍然属于生活在此的人们。黄昏时分，当夕阳把整个港口染成蜜糖色，当地家庭会沿着海滨散步，孩子们骑着自行车追逐嬉戏。你瞬间就明白了，加拉西迪的魅力，不在于“观看”，而在于“潜入”——潜入一种以海为生、与风共舞的古老生活智慧与平静之中。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`加拉西迪`} />
                <InfoRow label="英文名称" value={`Galaxidi`} />
                <InfoRow label="正式名称" value={`Galaxidi`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`中希腊大区（具体属地市为德尔斐）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`19世纪希腊航海业黄金时代的明珠，曾拥有仅次于雅典比雷埃夫斯的第二大商船队。`} />
                <InfoRow label="建筑特色" value={`新古典主义风格的船主豪宅与纯白简朴的海员石屋并存，街道铺满彩色的鹅卵石拼花图案。`} />
                <InfoRow label="建筑风格" value={`以19世纪新古典主义风格为主，融合了爱奥尼亚柱式、优雅的凉廊和彩绘玻璃等元素。`} />
                <InfoRow label="文化价值" value={`一个活着的航海文化博物馆，保存了从造船技艺、航海节庆到传统饮食的完整海洋生活图景。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇本身全天开放。主要参观点如航海博物馆、教堂等开放时间各异：航海博物馆开放时间为夏季（5月至10月）每日8:30-15:30，冬季开放时间缩短或仅周末开放，具体需查询当地公告。镇上的主要教堂白天通常开放。无季节性闭园，但冬季部分餐厅和民宿可能歇业。`} />
              <InfoRow label="门票价格" value={`进入小镇免费。航海博物馆门票约3欧元，学生及65岁以上老人有折扣。各教堂免费参观，但欢迎捐款。小镇周边海滩均为公共免费海滩。`} />
              <InfoRow label="地址" value={`Galaxidi 330 52, Greece`} />
              <InfoRow label="交通方式" value={`从雅典国际机场出发最方便。首先，乘坐地铁或X95巴士（约1小时，票价6欧元）前往雅典市中心的Liosion长途汽车站。从这里搭乘前往德尔斐的KTEL长途巴士（每日数班，车程约3小时，票价约20欧元）。在德尔斐巴士站换乘前往加拉西迪的当地巴士（车程约20分钟，班次较少，需提前查好时刻表）或直接乘坐出租车（约25欧元）。更灵活的方式是在雅典或德尔斐租车自驾，沿E75公路转48号公路，从德尔斐到加拉西迪约20公里，沿途山海风光绝美。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解加拉西迪的今天，你得先想象它两百年前的辉煌。时光倒回19世纪初，希腊挣脱奥斯曼帝国的枷锁，重获新生。而加拉西迪，这个拥有天然深水港的小镇，凭借其居民世代相传的无畏航海技艺，迅速抓住了时代的脉搏。镇上几乎每个家庭都与大海息息相关，男孩们十几岁就上船当学徒。他们驾驶着被称为“特雷哈德里”或“布佐”的木制商船，满载着葡萄干、橄榄油、皮革，勇敢地穿梭于地中海的惊涛骇浪之中，远航至黑海、埃及甚至大西洋彼岸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`财富随着商船的成功滚滚而来。从19世纪中叶到20世纪初，是小镇的“黄金时代”。那些在海上赚得盆满钵满的船主们，回到家乡，竞相建造起宏伟的宅邸。但他们没有选择炫耀式的巴洛克风格，而是钟情于当时象征着文明、理性与复兴的“新古典主义”。于是，一栋栋有着对称立面、三角形山花、优雅爱奥尼亚柱廊和精美彩绘玻璃窗的宅院，在面朝大海的坡地上拔地而起。室内铺设着从意大利运来的大理石地板，天花板上绘制着描绘海洋与神话的湿壁画。这些建筑不仅是家，更是航海事业成功的纪念碑。有趣的是，与这些豪宅比邻而居的，是普通水手们简朴的白色石屋，形成了和谐而独特的社区景观。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，大海给予的，大海也能收回。20世纪，钢铁巨轮逐渐取代了木帆船，两次世界大战更是重创了希腊航运业。加拉西迪不可避免地走向衰落，许多居民被迫远走他乡，去比雷埃夫斯或海外寻找机会。小镇仿佛陷入了一场漫长的午睡。转机发生在20世纪60年代。一桩悲伤的事件意外地改变了它的命运：一艘名为“爱奥尼亚”的客轮和另一艘名为“阿尔塔”的货轮先后在附近海域沉没。为了纪念遇难者，也为了重拾与海洋的联系，小镇居民在1963年自发恢复了古老的“净周一”（Clean Monday，东正教大斋首日）传统——“阿莱芙罗莫斯”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个传统堪称加拉西迪精神的浓缩。在狂欢节尾声的“净周一”早晨，全镇男女老少会涌上街头，用装满彩色粉末和面粉的袋子，展开一场无拘无束的“色彩大战”。瞬间，街道、房屋、每一个人都变成了流动的调色板。这并非单纯的嬉闹，其古老根源是水手们在漫长航行后清洗船只、用石灰粉刷船体的仪式，象征着涤旧迎新，祈求新一年的航海平安。这个充满生命力的独特节日，逐渐吸引了外界的目光，成为了加拉西迪文化复兴的起点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今的加拉西迪，不再依靠远洋贸易，而是以其静谧的历史风貌、深厚的航海文化和纯净的自然环境，吸引着那些渴望寻找“真正希腊”的旅行者。它从一个大航海时代的商业重镇，优雅地转型为一个生活博物馆和文化港湾。那些一度沉寂的船主豪宅，许多被精心修复，变成了迷人的民宿、咖啡馆或私人住宅，继续讲述着海浪与梦想的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间（最好能住上一晚），从清晨到日暮，全方位感受小镇的韵律。最佳抵达时间是上午九点左右，此时阳光正好，游客尚稀，店铺陆续开门，你能捕捉到小镇最清新的模样。整体游览节奏应极度放松，以“漫步”和“感受”为主，路线是一个从港口到高点，再深入街巷，最后回到海边的环形。上午聚焦于文化历史（港口、博物馆、教堂），中午享用漫长午餐，下午沿海边步道散步或发呆，傍晚则留给日落与晚餐。这样的安排能让你既看到风景，也读懂生活。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇很多小巷是安静的居民区，漫步时请放轻声音，尊重当地人的生活隐私。
夏季周末和“净周一”节日期间游客会增多，住宿需提前很久预订，平日则非常宁静。
穿一双绝对舒适的平底鞋，因为鹅卵石路面虽然美丽，但对高跟鞋极不友好。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主码头“Limani”开始，沿着防波堤走走，摸摸被晒得温热的古老系船柱，看渔民整理渔网。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身步入海滨大道，仔细辨认脚下鹅卵石铺成的精美航海图案，一路欣赏那些色彩柔和的船主宅邸立面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`去小镇制高点的“阿吉奥斯·尼古拉奥斯”教堂，推开厚重的木门，感受内部烛光摇曳的静谧和17世纪圣像屏的庄严。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观航海博物馆，在一艘艘精致的船模、发黄的航海图和古老的船首像前，遥想当年千帆竞发的盛景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着后街窄巷随意迷失，惊喜于转角突然出现的鲜花阳台、猫咪打盹的台阶和飘出烘焙香气的家庭面包坊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午的慵懒时光，步行至小镇西侧的“希洛斯”卵石海滩，跳进清澈见底的科林斯湾海水，或者只是在松树下读一本书。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前，一定要走到港口西侧的沿海步道，找一张长椅坐下，看夕阳如何为白色的房屋、蓝色的海面和远山依次镀上金边。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚上，选一家海边的 taverna，在星空下点一盘炸小鱼、一份章鱼沙拉，配上一杯冰镇的白葡萄酒，让海浪声成为晚餐的背景乐。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口东侧防波堤尽头回望小镇`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前黄金时段，可将彩色小船作为前景，连绵的白色屋宇和中部的教堂钟楼作为主体，构图饱满。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“阿吉奥斯·尼古拉奥斯”教堂前的小广场`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光斜射时，利用广场上高大的棕榈树和古典路灯作为框架，拍摄教堂钟楼与背后湛蓝海港的同框画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`任意一条鹅卵石小巷的纵深视角`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条有强烈光影对比的窄巷，蹲低机位，让色彩斑斓、图案精美的鹅卵石路面引导视线，延伸至远处的一扇蓝门或一盆红花。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`沿海步道（去往希洛斯海滩方向）的转弯处`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，从这里可以拍摄到小镇建筑群沿着两个海湾的自然弧度错落分布的全景，海湾里停泊的帆船会点亮灯光，氛围感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`某座船主宅邸花园的铁艺门廊`}</h4>
                  <p className="text-sm text-gray-700">{`透过装饰精美的黑色铁门向内拍摄，聚焦于院内茂盛的花草、古老的陶罐和建筑的一角，营造出一种“窥见历史”的叙事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民或他们的财产（如漂亮的房屋门前）前，最好先微笑致意，获得默许，这是基本的礼貌。`}</li>
                <li>• {`正午阳光强烈，不适合拍摄建筑和街景，此时不如找地方休息，或专注于室内和细节特写。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`航海世家民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋经过精心修复的19世纪船主宅邸，睡在有彩绘天花板的古老房间里，早晨房东会为你准备一壶新鲜香草茶和自家做的果酱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`海港阳台精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`房间拥有直面港口和无垠海景的私人阳台，你可以枕着海浪声入眠，清晨在阳台上就能看到渔船归来的第一幕。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐蔽花园别墅`}</h4>
                  <p className="text-sm text-yellow-800">{`位于小镇上层安静街区，带一个种满柠檬树和九重葛的隐秘花园，提供家庭式的温暖和绝佳的私密性，适合家庭或寻求静谧的旅人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感公寓`}</h4>
                  <p className="text-sm text-purple-800">{`由老仓库改造，保留了原始的石墙和木梁，但内部是极简的现代设计，巨大的窗户将海景框成一幅流动的画，风格独特。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6月至9月）是绝对旺季，务必提前数月预订，尤其是周末。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择住在港口边固然风景好，但晚上可能略热闹（餐馆音乐声）；追求绝对安静，可以选择位于小镇上部或西侧区域的住宿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多家庭式民宿不提供24小时前台，沟通清楚入住时间（通常下午3点后）非常重要。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开加拉西迪好些天了，但闭上眼，耳畔似乎还能听到那些桅杆轻柔的叮咚声。它给我的，不是视觉的震撼，而是一种全身心的“校准”。在这个以速度和效率为尊的世界里，这个小镇顽固地遵循着另一套时钟——潮汐的时钟、季节的时钟、世代传承的节日时钟。它告诉你，生活可以有另一种重心：不是向上攀登，而是向内探寻；不是占有更多，而是与周遭——海洋、社区、历史——建立更深的连接。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位渴望深度游的旅人，都应该来一次加拉西迪。不是为了收集又一个“景点”，而是为了体验一种即将消逝的“生活样本”。在这里，你会看到，辉煌可以平静地谢幕，转化为另一种持久的美。你会触摸到，历史不是玻璃后的展品，而是仍然在呼吸的墙壁、街道和人们的眼神。它像一个沉静而智慧的导航仪，提醒着我们：在人生的航程中，重要的或许不是船有多大、航速多快，而是你是否清楚地知道自己的港湾在哪里，并且懂得在风平浪静时，享受那份纯粹的、蓝与白的安宁。这里，是你暂时停泊、重新校准罗盘的心灵港湾。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mystras-archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    米
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">米斯特拉斯遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mystras</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kastoria-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯托里亚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kastoria Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/delphi" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    德
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">德尔斐阿波罗神庙</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Delphi</p>
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
