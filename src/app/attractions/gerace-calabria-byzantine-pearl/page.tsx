import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '杰拉切 Gerace｜悬崖上的拜占庭千年古城，意大利“靴尖”被遗忘的时光琥珀 - 最佳欧洲景点',
  description: '车子沿着之字形的山路盘旋而上，两旁的橄榄树银光闪闪，远处爱奥尼亚海像一块巨大的、静止的蓝宝石。就在你以为路要到尽头时，它突然出现了——杰拉切。不是那种带着欢迎横幅的景点，而像一头沉睡的石兽，盘踞在近500米高的石灰岩山脊上。第一眼，你会倒吸一口凉气：这整座城，就是悬崖本身。蜂蜜色的石头房屋层层叠叠，...',
}

export default function GeraceCalabriaByzantinePearlPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '杰拉切（位于卡拉布里亚大区雷焦卡拉布里亚省）', href: '/destinations/italy' },
            { label: '杰拉切', href: '/attractions/gerace-calabria-byzantine-pearl' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`杰拉切・Gerace・意大利・杰拉切（位于卡拉布里亚大区雷焦卡拉布里亚省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着之字形的山路盘旋而上，两旁的橄榄树银光闪闪，远处爱奥尼亚海像一块巨大的、静止的蓝宝石。就在你以为路要到尽头时，它突然出现了——杰拉切。不是那种带着欢迎横幅的景点，而像一头沉睡的石兽，盘踞在近500米高的石灰岩山脊上。第一眼，你会倒吸一口凉气：这整座城，就是悬崖本身。蜂蜜色的石头房屋层层叠叠，挤挤挨挨，仿佛不是建造出来，而是从山体里被时光之手雕刻而成。
停好车，穿过古老的“Porta del Sole”（太阳门），时间立刻慢了，不，是凝固了。脚下是无数脚步磨得发亮、光滑如镜的石灰岩石板路，窄得仅容两人错身的小巷（当地人叫它们“vineddi”）在眼前分叉，像毛细血管般延伸进阴影里。空气里有干燥的石头气息、从某户人家飘出的炖西红柿和罗勒的香味，还有无处不在的、淡淡的迷迭香和野茴香的味道。声音被石墙吸收，世界变得异常安静，只有你自己的脚步声、远处隐约的教堂钟声，以及不知从哪个庭院传来的、老太太用古老的希腊-卡拉布里亚方言聊天的絮语。你会发现，这里的居民，尤其是老人们，还保持着一种近乎仪式感的公共生活：下午，男人们聚集在“Piazza del Tocco”广场的酒吧外，玩着纸牌；女人们则坐在自家门口的矮石凳上，一边择菜，一边洞察着街巷里的一切。
它的核心魅力，就在于这种极致的“真实”。这里没有为了游客而存在的纪念品商店链，只有供应本地人日常所需的杂货铺、面包房和安静的工坊。你会看到晾晒在阳光下的红色床单，在风中猎猎作响；会看到古老的石砌水槽里，依然有清澈的山泉流淌。它最动人的，是一种顽强的、持续了千年的社区感。拜占庭的魂，诺曼的骨，西班牙的皮，都在这些石头的缝隙里呼吸。你不是来“参观”一个博物馆，你是小心翼翼地、心怀敬意地，走进一个依然活着的、缓慢跳动的心脏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着之字形的山路盘旋而上，两旁的橄榄树银光闪闪，远处爱奥尼亚海像一块巨大的、静止的蓝宝石。就在你以为路要到尽头时，它突然出现了——杰拉切。不是那种带着欢迎横幅的景点，而像一头沉睡的石兽，盘踞在近500米高的石灰岩山脊上。第一眼，你会倒吸一口凉气：这整座城，就是悬崖本身。蜂蜜色的石头房屋层层叠叠，挤挤挨挨，仿佛不是建造出来，而是从山体里被时光之手雕刻而成。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，穿过古老的“Porta del Sole”（太阳门），时间立刻慢了，不，是凝固了。脚下是无数脚步磨得发亮、光滑如镜的石灰岩石板路，窄得仅容两人错身的小巷（当地人叫它们“vineddi”）在眼前分叉，像毛细血管般延伸进阴影里。空气里有干燥的石头气息、从某户人家飘出的炖西红柿和罗勒的香味，还有无处不在的、淡淡的迷迭香和野茴香的味道。声音被石墙吸收，世界变得异常安静，只有你自己的脚步声、远处隐约的教堂钟声，以及不知从哪个庭院传来的、老太太用古老的希腊-卡拉布里亚方言聊天的絮语。你会发现，这里的居民，尤其是老人们，还保持着一种近乎仪式感的公共生活：下午，男人们聚集在“Piazza del Tocco”广场的酒吧外，玩着纸牌；女人们则坐在自家门口的矮石凳上，一边择菜，一边洞察着街巷里的一切。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的“真实”。这里没有为了游客而存在的纪念品商店链，只有供应本地人日常所需的杂货铺、面包房和安静的工坊。你会看到晾晒在阳光下的红色床单，在风中猎猎作响；会看到古老的石砌水槽里，依然有清澈的山泉流淌。它最动人的，是一种顽强的、持续了千年的社区感。拜占庭的魂，诺曼的骨，西班牙的皮，都在这些石头的缝隙里呼吸。你不是来“参观”一个博物馆，你是小心翼翼地、心怀敬意地，走进一个依然活着的、缓慢跳动的心脏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`杰拉切`} />
                <InfoRow label="英文名称" value={`Gerace`} />
                <InfoRow label="正式名称" value={`Gerace`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`杰拉切（位于卡拉布里亚大区雷焦卡拉布里亚省）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`拜占庭帝国在意大利南部漫长统治的最后堡垒之一，被誉为“卡拉布里亚的拜占庭明珠”，是理解中世纪南意大利权力与文明更迭的关键钥匙。`} />
                <InfoRow label="建筑特色" value={`一座从岩石中生长出来的“石头之城”，拥有迷宫般的狭窄巷道（“vineddi”）、隐秘的拱门、无数地下石窟（“ipogei”）和建立在悬崖边缘、俯瞰爱奥尼亚海的惊人位置。`} />
                <InfoRow label="建筑风格" value={`拜占庭地基与规划、诺曼建筑的雄浑力量、以及后期巴洛克装饰的罕见层叠，形成一种独特而和谐的南意大利“地中海罗马式”风格。`} />
                <InfoRow label="文化价值" value={`这里保存着一种近乎静止的、源自拜占庭时代的生活方式与社区精神，是慢旅行与深度文化沉浸的终极目的地，而非一个被包装的旅游产品。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城街道及公共区域全天开放。主要景点开放时间：杰拉切大教堂（Cattedrale di Gerace）通常为每日上午9:00至下午1:00，下午3:30至7:00（夏季可能延长），冬季下午会提前至5:30关闭；诺曼城堡废墟（Ruderi del Castello）外部可随时参观，内部庭院开放时间不定，建议抵达后查看门口告示或咨询旅游信息中心。小型博物馆开放时间较为随机。请注意，意大利南部午休时间（约13:00-16:00）许多场所会关闭，周日及宗教节日开放时间可能大幅缩短或完全关闭。`} />
              <InfoRow label="门票价格" value={`杰拉切大教堂：免费进入（欢迎自由捐献以支持维护）。诺曼城堡废墟：通常免费。城内可能偶有临时艺术展览的小型场馆会收取少量门票（约2-5欧元）。参加当地导游带领的深度徒步导览游费用约为15-25欧元/人。`} />
              <InfoRow label="地址" value={`Piazza del Tocco, 89040 Gerace RC, Italy`} />
              <InfoRow label="交通方式" value={`杰拉切位于一座孤独的山丘上，抵达本身就是一场探险。最近的机场是拉梅齐亚泰尔梅国际机场（SUF），距离约90公里。
从机场出发：最便捷的方式是租车自驾（强烈推荐），沿A2/E45高速公路驶向雷焦卡拉布里亚方向，在“Rosarno”或“Gioia Tauro”出口下，根据路标驶向洛克里（Locri），再从洛克里跟随清晰的棕色旅游标识“Gerace”上山。山路狭窄多弯，约需30-40分钟，但沿途橄榄园与爱奥尼亚海景交织，美不胜收。
无自驾选择：从机场或主要城市（如雷焦卡拉布里亚）搭乘火车至“Locri”火车站（车次频繁，约1-1.5小时）。从洛克里火车站前广场，有稀疏的当地巴士（AST公司）或可预约出租车（约20-25欧元）上山前往杰拉切，巴士班次很少（每天约2-4班），务必提前在酒吧或烟草店确认时刻表。下车点在古城外的停车场，需步行进入古城核心。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲杰拉切的故事，得从地图开始。你看意大利这只“靴子”的脚尖部分，面对狭窄的墨西拿海峡和对面的西西里，自古就是兵家必争、文明交融的十字路口。早在公元7世纪，为了躲避萨拉森海盗对沿海城镇的不断袭扰，洛克里（Locri）等地的居民开始向内陆、向易守难攻的山顶迁移。杰拉切，就在这个动荡的背景下诞生了。它的名字据说源自希腊语“Ierax”（ἱέραξ），意为“鹰”，形象地描绘了它如鹰巢般高悬险峻的地势。拜占庭帝国看中了这个天然堡垒，将其建设成他们在意大利南部“卡拉布里亚主题区”的一个重要行政和军事中心。那时的杰拉切，城墙坚固，街道依拜占庭城镇规划而建，充满了东方式的、内向的庭院和隐秘的通道，一座精神堡垒在乱世中悄然成形。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在11世纪。诺曼人，那群来自北方的冒险家骑士，像一股钢铁洪流席卷南意大利。1040年左右，诺曼领袖罗伯特·吉斯卡尔德和他的兄弟们将目光投向了这座坚固的山城。经过艰苦的围城，杰拉切最终投降。但诺曼人很聪明，他们不是单纯的破坏者。他们保留了城市的根基，甚至加固了它，并开始注入自己的印记。最宏伟的见证，就是始建于1085年左右的杰拉切大教堂。它建在一座更古老的拜占庭教堂遗址上，使用的很多圆柱和柱头，竟是从山脚下废弃的古希腊城市洛克里（Locri Epizefiri）直接运来的！想象一下那个场景：古罗马甚至希腊时代的巨大石柱，被艰难地运上险峻的山路，重新立起，支撑起一个新的、诺曼风格的圣殿。这本身就是一部石头写成的征服与继承史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的几个世纪，杰拉切在霍亨斯陶芬王朝、安茹王朝和阿拉贡王朝的统治下起伏。它继续扮演着地区重镇的角色，贵族们修建宫殿，修会建立教堂和修道院。16世纪西班牙统治时期，又为它增添了一些巴洛克式的装饰细节，比如某些教堂内部华丽的灰泥装饰。然而，地理优势在和平时代逐渐变成了发展的桎梏。山巅的孤绝，限制了商业和扩张。但正是这种“被遗忘”，意外地保护了它。当沿海地区大兴土木、改头换面时，杰拉切因为太难到达、太不“经济”，反而像被琥珀封印的昆虫，将中世纪和文艺复兴早期的风貌奇迹般地保存了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`近代的它，并非没有伤痛。1783年和1908年卡拉布里亚的两次毁灭性大地震，给古城留下了深刻的疤痕。许多建筑倒塌，大教堂的穹顶也未能幸免。你可以看到一些废墟被小心翼翼地用钢架支撑着，裸露的砖石诉说着自然的力量。二战后，意大利南部的“大迁徙”同样冲击了这里，年轻人纷纷前往北方或海外寻找机会，古城一度面临空心化的危机。但近年来，一股微弱却坚韧的回流正在发生。一些艺术家、工匠和厌倦都市快节奏生活的人，被这里的宁静与原始之美吸引，迁居于此，开设工作室，修复老屋。这座千年石城，正以一种缓慢而坚定的节奏，书写着它历史的新篇章——不再是堡垒或行政中心，而是一个关于抵抗时间、守护记忆的鲜活社区实验。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的杰拉切之旅是一整天的沉浸。建议早上10点前抵达，这时阳光正好洒满古城东侧，光线金黄柔和，游客稀少，本地居民开始一天的生活，是最好的观察时机。从位于高处的停车场（Porta del Sole附近）开始，一路向下漫步至低处的观景台，再轻松折返，整体节奏应如同意大利午餐般悠闲，预留至少5-6小时。这样安排能让你充分感受从诺曼城堡的荒芜威严，到教堂广场的市井生活，再到悬崖边震撼海景的层次变化。务必留出时间迷路——在那些无名小巷里的意外发现，往往是旅程最珍贵的记忆。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿绝对舒适、防滑的徒步鞋，那些光滑的石头路和陡峭的台阶在雨后尤其湿滑。
夏季中午阳光极其暴烈，尽量在11点前和下午4点后进行户外探索，正午时分可以安排参观凉爽的教堂内部或享受一个漫长的午餐。
尊重当地居民的隐私，探头探望私人庭院或拍照前，一个微笑和手势征询会换来友善的回应。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宏伟的“太阳门”进入，立刻右转钻进第一条狭窄小巷，让冰凉的石壁和头顶的一线天光带你进入中世纪迷宫的核心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主街“Corso Vittorio Emanuele”缓步下行，留意两侧那些有着精美石雕门楣的贵族宅邸，并随时被小岔路里一丛怒放的三角梅或一个摆满盆栽的隐秘庭院吸引。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“Piazza del Tocco”广场的长椅上坐一会儿，点一杯浓缩咖啡，看着本地老人们在温暖的阳光下进行他们日复一日的社交仪式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向下，穿过古老的拱门，去探访那座由岩石凿成的圣安纳教堂（Chiesa di San Anna），感受洞穴般的虔诚与清凉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`徒步登上古城最高点的诺曼城堡废墟，站在颓垣断壁间，让360度的全景狂风告诉你这里为何易守难攻，将无尽的橄榄园与湛蓝的爱奥尼亚海尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进杰拉切大教堂那略显昏暗却无比恢弘的内部，在寂静中寻找那些来自古希腊洛克里城的古老石柱，用手触摸冰凉的柱身，感受跨越两千年的温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从大教堂侧门出来，沿着“Belvedere”（观景台）的小径走到悬崖边缘，找一块平滑的石头坐下，什么也不做，只看云影在海面上移动，直到夕阳将整个石头城染成蜂蜜金色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在返回停车场的路上，随意走进一家没有英文菜单的家庭餐馆，用肢体语言点一份用当地‘nduja辣香肠调味的意大利面，完成味蕾上的最后朝圣。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`诺曼城堡废墟东侧边缘`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，以城堡残破的巨石墙垣为前景框架，将山下棋盘格般的橄榄园和远处泛着金光的大海作为背景，构图充满历史苍茫感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`杰拉切大教堂中殿后部`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光从高高的侧窗射入，在古老的红色地砖上拉出长长的光柱，抓拍一位本地老妇人独自坐在长椅上祈祷的剪影，故事感瞬间拉满。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从“Vico II”小巷仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，选择一条极其狭窄、两侧石墙高耸的巷道向上拍摄，捕捉一线蓝天与石墙顶部垂落的鲜艳九重葛形成的色彩与几何的强烈对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣朱塞佩教堂（Chiesa di San Giuseppe）前的台阶`}</h4>
                  <p className="text-sm text-gray-700">{`下午光线柔和时，坐在被岁月磨得圆润的石头台阶上，以对面蜂蜜色石头房屋的质朴门廊为背景，拍一张充满生活气息的肖像。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`古城东侧悬崖观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日出时刻，从这里可以拍到晨雾如纱般笼罩山下平原，而杰拉切的剪影在朝阳中逐渐苏醒的绝美全景，需要早起的毅力但绝对值得。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`许多小巷光线不足，建议使用大光圈镜头或提高ISO，避免使用闪光灯破坏氛围。`}</li>
                <li>• {`拍摄居民（尤其是老人）时，请务必保持距离并征得同意，他们不是布景的一部分，而是这里真正的主人。`}</li>
                <li>• {`尝试捕捉细节：一扇生锈的铁门上的花纹、石缝中顽强生长的小花、窗台上晒着的西红柿，这些特写比全景更能传递古城的灵魂。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在古城中心由古老石屋改造的家庭式B&B，房间虽小但干净温馨，早晨能享用到房东妈妈自制的佛卡夏和新鲜果酱，并获取最地道的探索建议。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择位于一栋16世纪贵族宫殿内的精品住宿，睡在有裸露石墙和拱顶的房间里，夜晚能听到古城绝对的寂静，仿佛与历史同眠。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住位于古城下方橄榄园中的独特“农庄住宿”（Agriturismo），在无边泳池边俯瞰山巅上的杰拉切全景，享受用自家庄园出产的橄榄油和蔬菜烹制的晚餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`返璞归真`}</h4>
                  <p className="text-sm text-purple-800">{`对于真正的冒险者，可以咨询当地旅游部门，租住一间经过现代化改造但保留了原始结构的“石窟”（ipogeo）住所，体验一把穴居人的酷感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`杰拉切夜间非常安静，几乎没有夜生活，适合追求宁静和星空的人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是当地节日旺季（如著名的“拜占庭节”），住宿紧张，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`几乎所有住宿都需要徒步一段台阶或坡路才能到达，行李务必轻便。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开杰拉切时，我的裤脚还沾着一点山路的尘土，鞋底磨损了，但心里却像被那些石头填满了，沉甸甸的，很踏实。这里教给我的，不是某个具体的历史知识点，而是一种关于“存在”的速度和重量。在这个一切都追求更快、更亮、更响的世界，杰拉切固执地慢着，沉默着，重着。它的魅力不在于奇观，而在于延续。在于那个用着智能手机的年轻人，依然会坐在祖辈坐过的石阶上；在于那扇吱呀作响的木门后，飘出的还是千年来一样的香料气味。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被精心策划的“古镇体验”，如果你想找一个地方，能真正触摸到欧洲文明层叠的岩层，能感受到时间并非一条向前奔涌的河，而是一个可以走进去、坐下来的回旋空间，那么，请来杰拉切。它不会讨好你，不会给你明信片般的完美角度，它甚至有点“不方便”。但正是这份笨拙的真实，会让你的旅途，从一场消费，变成一次珍贵的、关于我们究竟从何而来，又该如何生活的、沉默的对话。这颗卡拉布里亚的拜占庭明珠，或许光泽黯淡，却因此，映照出了更深邃的光。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/koice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科希策老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Košice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bucharest-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布加勒斯特老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bucharest Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sibenik-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    希
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">希贝尼克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Šibenik Old Town</p>
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
