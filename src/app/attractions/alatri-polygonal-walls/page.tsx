import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿拉特里 Alatri｜探秘史前“独眼巨人”巨石古城墙 - 最佳欧洲景点',
  description: '车子在拉齐奥丘陵温柔的曲线间盘旋，直到一个轮廓硬朗的山顶城堡剪影闯入视野。那就是阿拉特里。第一眼看去，它不像托斯卡纳那些明信片式的浪漫小镇，而更像一头匍匐了千万年的巨石怪兽，沉默而固执地盘踞在山巅。当你穿过现代城镇，一步步走近那面传说中的城墙时，一种近乎原始的震撼会攥住你。那石头是温热的，带着阳光晒...',
}

export default function AlatriPolygonalWallsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '阿拉特里', href: '/attractions/alatri-polygonal-walls' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿拉特里・Alatri・意大利・阿拉特里`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在拉齐奥丘陵温柔的曲线间盘旋，直到一个轮廓硬朗的山顶城堡剪影闯入视野。那就是阿拉特里。第一眼看去，它不像托斯卡纳那些明信片式的浪漫小镇，而更像一头匍匐了千万年的巨石怪兽，沉默而固执地盘踞在山巅。当你穿过现代城镇，一步步走近那面传说中的城墙时，一种近乎原始的震撼会攥住你。那石头是温热的，带着阳光晒过的尘土气息，巨大的石块每一块都比你想象中更大、更重，它们以一种不规则的多边形姿态紧紧咬合在一起，缝隙严密得连刀片都难以插入。你忍不住用手掌去触摸，触感粗糙而冰凉，岁月在上面留下了风化的痕迹和深绿色的苔藓。
耳边安静极了，只有风吹过墙头荒草的声音，和远处隐约传来的教堂钟鸣。你抬起头，顺着城墙的斜面向上看，它的高度和倾斜度让你瞬间感到自己的渺小。这不是为了美学而建的，它纯粹是为了生存和防御，带着一种冷峻的、令人敬畏的力量感。然而，就在这史前的蛮荒力量之上，却生长出一个活生生的意大利中世纪老城。城墙的拱门下，穿着随意的当地人提着购物袋匆匆走过，老太太在阳台上晾晒床单，生活的烟火气与巨石的古旧感交织在一起，毫无违和。这里不是博物馆里的标本，而是当地人每天回家的路，是孩子们捉迷藏的角落。
最打动人的，正是这种奇异的层次感。你脚下踩着可能是公元前五六世纪赫尔尼基人垒砌的基石，眼前是罗马人改建的城门，抬头望见中世纪塔楼，而转角咖啡馆里飘出的却是浓缩咖啡的浓香。时间在这里不是线性的，而是像那些石头一样，一层层堆积、交融。它不讨好游客，它只是存在于此，以一种沉默而骄傲的姿态，向你展示着什么是真正的“永恒”。在这里，你能触摸到的不是某个单一王朝的辉煌，而是人类在漫长岁月里，不断在同一个地点上建立家园、祈求庇护、延续生命的那股坚韧本能。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在拉齐奥丘陵温柔的曲线间盘旋，直到一个轮廓硬朗的山顶城堡剪影闯入视野。那就是阿拉特里。第一眼看去，它不像托斯卡纳那些明信片式的浪漫小镇，而更像一头匍匐了千万年的巨石怪兽，沉默而固执地盘踞在山巅。当你穿过现代城镇，一步步走近那面传说中的城墙时，一种近乎原始的震撼会攥住你。那石头是温热的，带着阳光晒过的尘土气息，巨大的石块每一块都比你想象中更大、更重，它们以一种不规则的多边形姿态紧紧咬合在一起，缝隙严密得连刀片都难以插入。你忍不住用手掌去触摸，触感粗糙而冰凉，岁月在上面留下了风化的痕迹和深绿色的苔藓。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`耳边安静极了，只有风吹过墙头荒草的声音，和远处隐约传来的教堂钟鸣。你抬起头，顺着城墙的斜面向上看，它的高度和倾斜度让你瞬间感到自己的渺小。这不是为了美学而建的，它纯粹是为了生存和防御，带着一种冷峻的、令人敬畏的力量感。然而，就在这史前的蛮荒力量之上，却生长出一个活生生的意大利中世纪老城。城墙的拱门下，穿着随意的当地人提着购物袋匆匆走过，老太太在阳台上晾晒床单，生活的烟火气与巨石的古旧感交织在一起，毫无违和。这里不是博物馆里的标本，而是当地人每天回家的路，是孩子们捉迷藏的角落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，正是这种奇异的层次感。你脚下踩着可能是公元前五六世纪赫尔尼基人垒砌的基石，眼前是罗马人改建的城门，抬头望见中世纪塔楼，而转角咖啡馆里飘出的却是浓缩咖啡的浓香。时间在这里不是线性的，而是像那些石头一样，一层层堆积、交融。它不讨好游客，它只是存在于此，以一种沉默而骄傲的姿态，向你展示着什么是真正的“永恒”。在这里，你能触摸到的不是某个单一王朝的辉煌，而是人类在漫长岁月里，不断在同一个地点上建立家园、祈求庇护、延续生命的那股坚韧本能。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿拉特里`} />
                <InfoRow label="英文名称" value={`Alatri`} />
                <InfoRow label="正式名称" value={`Alatri`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`阿拉特里`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座自史前时代便屹立不倒的山顶堡垒，其巨石城墙被誉为意大利乃至地中海地区最完整、最神秘的远古工程奇迹之一。`} />
                <InfoRow label="建筑特色" value={`由无数未经粘合的巨大石灰岩块，以精密的“多边形砌石”技术严丝合缝地堆叠而成，气势磅礴，挑战着现代人对远古文明的想象。`} />
                <InfoRow label="建筑风格" value={`史前多边形巨石建筑风格（即所谓的“独眼巨人式砌墙”），其上叠加了罗马、中世纪及文艺复兴时期的层层历史印记。`} />
                <InfoRow label="文化价值" value={`是理解意大利中部前罗马时期赫尔尼基人文明、以及古代巨石建筑技术传播的活化石，见证了从原始信仰到基督教的漫长精神旅程。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城墙区域全天24小时开放，可自由漫步。核心的阿拉特里大教堂（Cattedrale di San Paolo）开放时间为每日上午8:00至中午12:30，下午3:30至7:00；冬季下午关闭时间可能会提前至5:30。市政博物馆（Museo Civico）通常为周二至周日开放，时间为上午10:00至下午1:00，下午3:00至6:00，周一闭馆。建议出发前在拉齐奥大区旅游官网上确认最新时间。`} />
              <InfoRow label="门票价格" value={`漫步古城墙及在历史中心游览完全免费。进入阿拉特里大教堂免费，但欢迎为维护捐赠。市政博物馆门票约5欧元，学生及65岁以上老人享有折扣价约3欧元。`} />
              <InfoRow label="地址" value={`Piazza Santa Maria Maggiore, 03011 Alatri FR, Italy`} />
              <InfoRow label="交通方式" value={`从罗马菲乌米奇诺机场（FCO）出发，最便捷的方式是先乘火车或机场巴士到罗马特米尼火车站（Roma Termini）。在特米尼火车站乘坐前往卡西诺（Cassino）方向的区域火车，在弗罗西诺内站（Frosinone）下车，车程约1小时，班次频繁。在弗罗西诺内火车站外的公交站，换乘前往阿拉特里（Alatri）的COTRAL巴士，车程约30分钟，班次约为每小时一班。建议购买罗马大区交通通票或提前在COTRAL官网查询时刻表，意大利小镇的公交时刻可能会变动。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿拉特里的故事，始于一片迷雾。早在罗马人奠定他们永恒之城之前，这片山丘就已经被一个叫做赫尔尼基的意大利古老民族选中。他们看中了这里易守难攻的地理位置，以及山体本身优质的石灰岩。大约在公元前六到七世纪，这些能工巧匠（或者，按照后来希腊人的传说，是神话中的独眼巨人）开始了一项不可思议的工程。没有现代机械，甚至可能没有金属工具，他们是如何开采、运输、并雕琢这些动辄数吨、甚至数十吨的巨石的？更神奇的是那种“多边形砌石法”：每一块石头都被打磨成不规则的多边形，像一块块巨大的拼图，凭借自身精确的重量和角度紧密嵌合，完全不需要灰泥粘合。这面城墙不仅是一道屏障，更是一个巨大的谜题，让后世的考古学家和游客着迷不已。它究竟是为了防御谁？是北方的伊特鲁里亚人，还是其他部落？我们不得而知，只知道它坚不可摧地立了起来，默默守护着山巅的圣地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转，强大的罗马共和国将目光投向了这里。公元前四世纪末，罗马人征服了阿拉特里。实用主义的罗马人没有推倒这令人惊叹的城墙，而是欣然接纳并加固了它。他们在巨大的史前城墙上，开凿出了今天我们看到的两个主要城门：坚固的“法里纳门”和更具仪式感的“圣玛利亚门”。罗马人将自己的城市规划植入其中，修建了广场、神庙和水道。阿拉特里从一个独立的部落中心，变成了罗马通往南方的战略要塞和繁华市镇。你可以想象，罗马士兵在古老的赫尔尼基石墙上巡逻，而山下，通往卡普阿的阿皮亚古道上有商旅络绎不绝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马帝国崩塌后，阿拉特里在黑暗时代中再次凸显了其堡垒的价值。它成为教皇国抵御伦巴第人、萨拉森人入侵的前沿阵地。中世纪早期，城内的罗马神庙遗址上，矗立起了最初的基督教教堂。到了十二、三世纪，阿拉特里进入了最风云激荡的时期。当地的贵族家族，尤其是康蒂家族，在这里修建了高大的城堡和塔楼，争夺着这座城的控制权。这些中世纪石砌建筑，直接“生长”在史前的巨石基座上，形成了今天我们看到的那种戏剧性的垂直景观。教皇与皇帝、圭尔夫派与吉伯林派的政治斗争，也在这里的街巷中留下回响。据说，圣殿骑士团也曾在此活动，为这座古城又增添了一层神秘色彩。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随后的几个世纪，阿拉特里相对平静，成为了拉齐奥地区一个重要的农业和宗教中心。文艺复兴和巴洛克的春风也吹到了这里，但只是轻柔地为其装扮：在坚实的中世纪宫殿外墙上添上优雅的窗框，在古老的教堂内部装饰上华丽的灰泥雕塑和壁画。它没有经历翻天覆地的改造，更像是在一件早已无比坚固的古老外套上，绣上几朵新的花纹。这种“层累”正是阿拉特里最迷人的历史叙事——它不是推倒重来，而是不断地适应、添加、共存。十九世纪意大利统一后，它作为一个充满历史价值的古镇被重新“发现”，考古学家开始系统地研究它的起源，那些沉默的巨石才开始向世界讲述它们史前的故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议安排一整天的时间给阿拉特里，它值得你慢慢品味。最佳抵达时间是上午九点左右，这时阳光正好照亮巨大的城墙正面，游客稀少。整体游览节奏应该是“由外向内，自下而上”。先从城外远观和触摸震撼的史前城墙开始，带着敬畏之心进入古城，在迷宫般的中世纪街巷中感受生活气息，最后登顶至大教堂广场，俯瞰整个奇迹般的全景。这样的路线既符合历史层累的顺序，也让你在体力消耗最大的登高部分放在后半段，并在最高点获得视觉和心灵上的终极奖赏。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双绝对舒适、防滑的徒步鞋，这里的街道几乎全是陡峭的上下坡和光滑的古老石阶。小镇中午一点到四点不少小店和餐馆会关门午休，规划好午餐时间，或者自备一些零食和水。当地人非常友善，但英语普及度不高，学会一句“Buongiorno”（你好）和“Grazie”（谢谢）会让他们笑容满面。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“法里纳门”开始你的朝圣，用手掌感受那冰冷巨石令人难以置信的严密接缝和巨大体量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过门洞，立刻右转沿着城墙根的小路走一段，仰头看那些从中世纪塔楼窗口垂下的绿植和晾晒的衣物，感受古老防御工事如何融入日常。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进一条陡峭狭窄的中世纪小巷“Salita dei Gracchi”，留意脚下被磨得光滑如镜的石阶和两旁颜色斑驳的古老屋墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城中心迷路一会儿，在偶然遇见的某个小广场上，听本地老人聊天，看猫咪在阳光下发呆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到并走进阿拉特里大教堂，让眼睛适应内部的昏暗，寻找地面玻璃下露出的赫尔尼基和罗马时期的地基遗迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上教堂旁的市政厅塔楼或城堡区域，努力爬完最后一段台阶，让360度的壮丽全景作为对你所有探索的回报。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从另一侧的“圣玛利亚门”走出古城，在城门外的观景平台回望，你会看到完整的古城镶嵌在山顶的绝美画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后若有余力，可以去山脚下的“宝血圣母教堂”看看，那里保存着据称是耶稣受难时的圣物，连接着中世纪虔诚的传说。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`法里纳门仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚时分，站在城门正前方稍远处，用广角镜头低角度仰拍，将巨大的多边形石门洞和上方巍峨的中世纪建筑一同纳入，凸显历史的层叠与压迫感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城墙根光影巷`}</h4>
                  <p className="text-sm text-gray-700">{`下午阳光斜射时，在法里纳门内右侧的城墙小路，捕捉阳光在巨石凹凸表面形成的强烈明暗对比，以及小巷尽头的生活场景，故事感十足。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`大教堂广场俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登上城堡或塔楼后，用长焦镜头拉近拍摄山下拉齐奥乡村的田园曲线与远处山峦，将古城作为前景，展现其作为山顶堡垒的孤立与威严。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣玛利亚门框景`}</h4>
                  <p className="text-sm text-gray-700">{`站在圣玛利亚门内，以门洞作为天然画框，拍摄门外远眺的丘陵、橄榄树和零星房屋，创造一幅深邃的“景中之景”。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老街门洞与阶梯`}</h4>
                  <p className="text-sm text-gray-700">{`在老巷中寻找那些有着古老木门和陡峭石阶的角落，等待一个当地人走过时按下快门，记录下千年街巷中生生不息的瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`巨石城墙的质感在侧光下最为突出，尽量避免在正午顶光时拍摄墙体细节。尊重当地居民隐私，拍摄阳台或窗内场景前最好微笑示意或直接避开。无人机飞行在意大利历史中心区通常有严格限制，起飞前务必查询当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在山脚下现代城镇的家庭式旅馆，房间干净简洁，主人会热情地为你手绘一张老城探索地图，并推荐只有本地人才知道的传统小馆子。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`老城内由文艺复兴时期宫殿改造的精品酒店，睡在古老的石墙房间里，清晨被远处教堂的钟声和面包房的香味唤醒，真正住在历史中。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车前往附近 Ciociaria 乡间的农庄度假酒店，住在由古老石屋改建的套房，享受无边泳池、自产有机美食和一览无余的田园风光，将古城作为远眺的背景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`修道院静修`}</h4>
                  <p className="text-sm text-purple-800">{`尝试预订古城附近仍在运营的古老修道院提供的简易客房，体验极致的宁静，夜晚只有星穹与山风为伴，是洗涤心灵的独特选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量非常有限且抢手，务必提前数月预订。如果你选择住在城外，请确认是否有便利的公共交通或准备好自驾，因为晚间上山的路灯可能稀疏。拉齐奥的乡村治安良好，但无论住在哪里，享受那种慢节奏的、近乎与世隔绝的宁静，是阿拉特里之旅的重要部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿拉特里时，你的指尖可能还残留着巨石粗糙的触感，脑海里盘旋着那些严丝合缝的多边形谜题。但比视觉震撼更持久的，是一种奇异的安心感。在这个追求新奇、一切速朽的时代，阿拉特里像一位沉默的远古智者，它不言不语，却用自身的存在讲述着最朴素也最坚韧的真理：真正的力量，源于对家园最本能的守护；而真正的永恒，不在于永不改变，而在于容纳一切变迁，并将它们化为自己生命年轮的一部分。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它或许没有佛罗伦萨的炫目艺术，没有威尼斯的潋滟水光，但它提供了一种更为稀缺的旅行体验——与时间的深度对话。在这里，你不仅仅是观看一个景点，而是在徒步穿越一部立体的、可触摸的史诗。从史前到现代，每一层历史都没有消失，它们相互支撑，共同构成了今天这个活生生的小镇。这提醒着我们，文明从来不是断裂的跳跃，而是一次次在原有基石上的重建与延续。对于每一位渴望在旅行中寻找真实、触摸根源、而不仅仅是收集打卡照的深度旅人来说，阿拉特里不是清单上一个可选项，它是一个必赴的约定，一次与人类共同古老记忆的重逢。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/fermo-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔莫古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fermo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/anagni-papal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿纳尼（教皇的故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Anagni</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cortona-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔托纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cortona</p>
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
