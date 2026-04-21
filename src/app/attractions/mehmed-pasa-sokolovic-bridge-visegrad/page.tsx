import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维舍格勒古桥 Mehmed Paša Sokolović Bridge｜诺贝尔奖小说里的生命之桥 - 最佳欧洲景点',
  description: '第一眼看到它，你会瞬间明白，为什么一座桥能成为一部伟大史诗的主角。它不像那些精雕细琢的宫殿教堂，带着拒人千里的威严。恰恰相反，这座灰白色的石桥，以一种父亲般宽厚沉默的姿态，横卧在翡翠色的德里纳河上。河水流经它那十一孔半月形桥洞时，会发出一种深沉而悦耳的哗哗声，像是永不停息的叹息与诉说。你走上桥面，脚...',
}

export default function MehmedPasaSokolovicBridgeVisegradPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '波斯尼亚和黑塞哥维那', href: '/destinations/bosnia-and-herzegovina' },
            { label: '维舍格勒', href: '/destinations/bosnia-and-herzegovina' },
            { label: '维舍格勒的穆罕默德·帕夏·索科洛维奇桥', href: '/attractions/mehmed-pasa-sokolovic-bridge-visegrad' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维舍格勒的穆罕默德·帕夏·索科洛维奇桥・Mehmed Paša Sokolović Bridge in Višegrad・波斯尼亚和黑塞哥维那・维舍格勒`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到它，你会瞬间明白，为什么一座桥能成为一部伟大史诗的主角。它不像那些精雕细琢的宫殿教堂，带着拒人千里的威严。恰恰相反，这座灰白色的石桥，以一种父亲般宽厚沉默的姿态，横卧在翡翠色的德里纳河上。河水流经它那十一孔半月形桥洞时，会发出一种深沉而悦耳的哗哗声，像是永不停息的叹息与诉说。你走上桥面，脚下是被几个世纪的人畜车马打磨得温润光滑的巨石板，缝隙里长出倔强的青草。空气中混合着河水湿润的腥气、石头被阳光晒过后散发的微暖矿物味，还有从岸边咖啡馆飘来的、浓郁的波斯尼亚咖啡香。
这座桥是活的，它从未退隐为单纯的景点。你会看到头戴小圆帽的老爷爷拄着拐杖，在桥中央的瞭望亭里一坐就是一下午，眼神望着河流下游，仿佛能看穿时光；穿着校服的孩子们放学后蹦跳着跑过，他们的笑声清脆地掉进河水的哗啦声里；傍晚时分，情侣们倚在粗壮的石栏杆上，看夕阳把桥拱和远山都染成蜂蜜金色。这里没有门票闸机，没有喧闹的旅游商店，它就是小镇生活的一条动脉，一根脊梁。当地人过桥去买面包，去拜访朋友，就像呼吸一样自然。
而它最打动人心的，恰恰是这种深植于日常的史诗感。你知道脚下每一块石头，都听过奥斯曼帝国军队行军的鼓点，见过奥匈帝国马车的轮毂，承受过两次世界大战的炮火，也见证了南斯拉夫时代的悲欢离合。它沉默地见证了所有的征服、贸易、爱情、离别与重生。它伤痕累累（仔细看，有些石头上还留有弹孔的痕迹），却依然坚固地站立着，连接着两岸，连接着过去与现在。站在这座桥上，你会感到自己触摸到的不是冰冷的石头，而是一段依然温热、依然在跳动的共同记忆。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到它，你会瞬间明白，为什么一座桥能成为一部伟大史诗的主角。它不像那些精雕细琢的宫殿教堂，带着拒人千里的威严。恰恰相反，这座灰白色的石桥，以一种父亲般宽厚沉默的姿态，横卧在翡翠色的德里纳河上。河水流经它那十一孔半月形桥洞时，会发出一种深沉而悦耳的哗哗声，像是永不停息的叹息与诉说。你走上桥面，脚下是被几个世纪的人畜车马打磨得温润光滑的巨石板，缝隙里长出倔强的青草。空气中混合着河水湿润的腥气、石头被阳光晒过后散发的微暖矿物味，还有从岸边咖啡馆飘来的、浓郁的波斯尼亚咖啡香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座桥是活的，它从未退隐为单纯的景点。你会看到头戴小圆帽的老爷爷拄着拐杖，在桥中央的瞭望亭里一坐就是一下午，眼神望着河流下游，仿佛能看穿时光；穿着校服的孩子们放学后蹦跳着跑过，他们的笑声清脆地掉进河水的哗啦声里；傍晚时分，情侣们倚在粗壮的石栏杆上，看夕阳把桥拱和远山都染成蜂蜜金色。这里没有门票闸机，没有喧闹的旅游商店，它就是小镇生活的一条动脉，一根脊梁。当地人过桥去买面包，去拜访朋友，就像呼吸一样自然。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动人心的，恰恰是这种深植于日常的史诗感。你知道脚下每一块石头，都听过奥斯曼帝国军队行军的鼓点，见过奥匈帝国马车的轮毂，承受过两次世界大战的炮火，也见证了南斯拉夫时代的悲欢离合。它沉默地见证了所有的征服、贸易、爱情、离别与重生。它伤痕累累（仔细看，有些石头上还留有弹孔的痕迹），却依然坚固地站立着，连接着两岸，连接着过去与现在。站在这座桥上，你会感到自己触摸到的不是冰冷的石头，而是一段依然温热、依然在跳动的共同记忆。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维舍格勒的穆罕默德·帕夏·索科洛维奇桥`} />
                <InfoRow label="英文名称" value={`Mehmed Paša Sokolović Bridge in Višegrad`} />
                <InfoRow label="正式名称" value={`穆罕默德·帕夏·索科洛维奇桥`} />
                <InfoRow label="国家" value={`波斯尼亚和黑塞哥维那`} />
                <InfoRow label="城市" value={`维舍格勒`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`奥斯曼帝国巅峰时期在巴尔干半岛建造的最宏伟、最杰出的石桥之一，是其帝国工程与美学成就的不朽象征。`} />
                <InfoRow label="建筑特色" value={`由十一座优雅的石灰岩拱券连接而成，横跨碧绿的德里纳河，以其完美的比例、坚固的结构和与自然景观的和谐统一而闻名。`} />
                <InfoRow label="建筑风格" value={`经典的奥斯曼帝国时期石桥建筑，融合了当时最先进的工程技术与简洁、庄严的伊斯兰美学。`} />
                <InfoRow label="文化价值" value={`它不仅仅是一座交通枢纽，更因诺贝尔文学奖得主伊沃·安德里奇的小说《德里纳河之桥》而成为承载数百年巴尔干地区历史、冲突与共存记忆的文化丰碑。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天24小时开放，可随时步行上桥参观。桥上没有照明设施，建议日间游览以确保安全。冬季（11月至次年3月）时，桥上可能有积雪或薄冰，需格外小心。周边的游客信息中心通常在夏季（5月至9月）的工作日（上午9点至下午5点）开放，提供有限的信息服务。`} />
              <InfoRow label="门票价格" value={`参观桥梁本身完全免费。若想参观桥头的“安德里奇之城”博物馆（主要展示诺贝尔奖作家伊沃·安德里奇的作品及相关文化），门票约为5波斯尼亚和黑塞哥维那马克（约2.5欧元），学生及儿童享有半价优惠。`} />
              <InfoRow label="地址" value={`Mehmed Paše Sokolovića bb, Višegrad 73240, Bosnia and Herzegovina`} />
              <InfoRow label="交通方式" value={`最近的国际机场是塞尔维亚贝尔格莱德的尼古拉·特斯拉机场（BEG）或波斯尼亚和黑塞哥维那萨拉热窝机场（SJJ）。从贝尔格莱德机场出发：可乘坐机场大巴至贝尔格莱德市中心巴士站，转乘前往维舍格勒的长途巴士，车程约4-5小时，班次每日3-4班。从萨拉热窝出发：从萨拉热窝东站（Istočno Sarajevo）有频繁的巴士开往维舍格勒，车程约2.5-3小时，班次较为密集（每天约6-8班）。抵达维舍格勒巴士站后，古桥就在德里纳河畔，步行约10-15分钟即可到达。当地没有火车服务。建议提前在线或直接在车站购买巴士票，夏季旺季时可能需提前一天预订。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这座桥的故事，始于一个人和一个帝国的雄心。1571年，奥斯曼帝国的大维齐尔（相当于首相）穆罕默德·帕夏·索科洛维奇做出了决定。他出生于波斯尼亚附近的村庄，一个在“血税”制度下被征召进帝国宫廷，最终凭借才华登上权力顶峰的斯拉夫人。功成名就后，他想为自己的故乡留下些什么。于是，他下令在湍急的德里纳河上建造一座“永恒之桥”，连接起帝国重要的贸易与军事通道。他聘请了帝国最负盛名的首席建筑师科查·米马尔·希南——没错，就是那位设计了苏莱曼尼耶清真寺等无数杰作的建筑巨匠。虽然希南本人可能并未亲临现场，但他的学派和设计精神深刻地烙印在这座桥上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建造过程本身就是传奇。据说，河神最初抗拒桥梁的建立，每到夜晚就摧毁白天的工程。后来，建筑师不得不在桥基中活埋一对双胞胎兄妹（民间传说中常有的“奠基牺牲”母题），才最终让桥梁稳固下来。这个黑暗的传说，从一开始就为这座桥的命运蒙上了一层悲剧与奉献的色彩。历经数年，耗费巨资，一座拥有十一孔巨大拱券、长达179.5米的宏伟石桥终于落成。它立刻成为巴尔干半岛的奇观，是帝国力量与工程技术美的宣言。在接下来的三个世纪里，它看着商队驮着东方的丝绸和香料经过，看着帝国的帕夏们骑马巡视，也看着河流两岸的东正教徒、天主教徒和穆斯林在它连接的市场上和平交易。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，平静的岁月在19世纪末开始破碎。巴尔干成了“欧洲的火药桶”。1914年，第一次世界大战的导火索在附近的萨拉热窝点燃，战火也波及到这里。第二次世界大战更是带来了毁灭性的打击。1943年，撤退的德军炸毁了桥中央最大的一孔拱券，试图阻隔追兵。那座横跨了将近四百年的完美弧线，轰然坠入德里纳河。你或许以为故事到此就结束了。但没有。战后，新成立的南斯拉夫联邦决定修复这座桥，不是作为奥斯曼的遗迹，而是作为全体南斯拉夫人民共同文化遗产的象征。修复工程异常精细，力求使用原始材料和技术，让大桥在1950年代重获新生。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让这座桥从一项工程奇迹升华为世界级文化符号的，是伊沃·安德里奇。这位在南斯拉夫文学界举足轻重的作家，花费数年心血，写出了长篇历史小说《德里纳河之桥》。小说没有聚焦于帝王将相，而是以这座桥为绝对主角，描绘了从16世纪建造之初到第一次世界大战期间，围绕它生活的各色小人物的命运——工匠、商人、情人、反抗者、官员……桥成了沉默的叙述者，见证了四个世纪的风云变幻与人间悲喜剧。1961年，安德里奇凭借这部作品荣获诺贝尔文学奖。从此，这座桥在物理存在之上，拥有了一个磅礴的文学灵魂。每一个前来拜访的人，都仿佛行走在一部活的、石头砌成的史诗之中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览需要一整天的时间来沉浸体验，建议从清晨开始。上午光线柔和，适合从外部多角度欣赏和拍摄桥梁的全貌与细节，感受它的宁静与宏伟。中午前后，可以走上桥面，慢悠悠地来回走几遍，触摸石头，观察桥上的生活气息，然后在桥头找家餐馆享用一顿地道的波斯尼亚午餐。下午的重点是文化和历史沉浸：参观安德里奇博物馆，然后在河边找一家咖啡馆阅读或发呆，让上午获得的视觉印象与文学、历史叙事慢慢融合。傍晚时分务必再次回到桥上，这是黄金时刻，夕阳会给石桥披上最动人的色彩，本地人也纷纷出来散步，你能感受到这座桥从历史遗迹切换回社区客厅的魔力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`桥上石阶和路面在雨天或冬季非常湿滑，务必穿一双防滑性能好的鞋子。小镇的旅游设施相对简单，最好自备一些瓶装水和零食。尊重当地人的生活习惯，拍摄桥上或附近的居民时，请先微笑示意并获得同意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨先从河南岸的河滨小路开始散步，从侧面完整欣赏十一孔桥洞在平静河面上划出的完美倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过小镇宁静的街道走到桥的北端，站在入口处抬头仰望那历经沧桑的巨大石砌桥头堡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`缓步走上桥面，在第一座桥拱下方的石凳上坐一会儿，听德里纳河永不停歇的水声与风声共鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到大桥正中央的凸出瞭望亭（ kapija ），这里是视野最佳处，想象几个世纪以来无数商旅、士兵和恋人曾在此驻足。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下桥后前往桥东侧的“安德里奇之城”文化中心，在展厅里安静地读一段《德里纳河之桥》的章节节选。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐选择桥头老磨坊改建的餐厅，点一份 ćevapi（波斯尼亚烤肉肠）和 somun（传统面包），面朝大桥享用。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午在河北岸的露天咖啡馆占一个位置，点一杯波斯尼亚咖啡，看着桥上来往的人和光线变化，直到日落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落后不必急着离开，等待桥上的旧式路灯亮起，看大桥在暮色与灯光中勾勒出的另一种剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`南岸河滩卵石堆`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，蹲低机位，用广角镜头将前景的卵石、中景的碧绿河水和背景大桥的完整倒影一同纳入构图，画面宁静而富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`北岸桥头堡拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`上午九十点阳光斜射时，站在拱门内侧向外拍摄，利用拱门形成天然画框，聚焦于桥上行走的人物或远方的山峦，营造深邃的叙事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`桥面瞭望亭内向西拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前约半小时，站在瞭望亭内，将相机对准西侧的一连串桥拱，捕捉金色阳光穿过桥洞，在河面投下长长光影的戏剧性时刻。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`河南岸高处民居旁的小路`}</h4>
                  <p className="text-sm text-gray-700">{`需要稍微探索，找到能俯瞰大桥全景的民居区小路，用长焦镜头压缩空间，将大桥、河流、小镇屋顶和远山压缩在一幅画面中，尤其适合雨后或有晨雾的天气。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`桥墩岩石基础特写`}</h4>
                  <p className="text-sm text-gray-700">{`在枯水期或水位较低时，走到河边近距离拍摄桥墩巨石的基础，捕捉石头上苔藓、水流侵蚀的痕迹甚至古老的弹孔，用特写讲述时间的故事。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`巴尔干地区的光线在夏季非常强烈，正午时分建议避免拍摄，光线过于生硬。尝试拍摄长曝光流水效果时，请务必使用稳固的三脚架，因为桥上偶尔经过的车辆会引起微弱震动。当地人普遍友好，但拍摄人物特写前，一个友好的手势和微笑是国际通行的语言。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景民宿`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落于德里纳河畔的家庭式公寓，推开窗就是大桥全景，夜晚在潺潺水声中入眠，主人会热情地为你准备 homemade 的果酱早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城客栈`}</h4>
                  <p className="text-sm text-green-800">{`位于维舍格拉德安静的老街区，由一座奥斯曼时期风格的石屋改造而成，房间低矮温馨，带有木梁天花板和传统地毯，体验最地道的居家感。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`安德里奇主题旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`毗邻文化中心，内部装饰充满文学气息，公共区域摆放着各种语言的《德里纳河之桥》，适合书迷沉浸式体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`桥畔精品酒店`}</h4>
                  <p className="text-sm text-purple-800">{`镇上最高标准的住宿选择，设计现代而舒适，部分房间带有可俯瞰大桥的阳台，并提供优质的当地美食和旅游咨询服务。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是旅游旺季，也是当地各种文化活动的举办期，住宿需提前数周预订。小镇非常安全，夜晚漫步河边或老城十分惬意。大多数民宿不提供24小时前台服务，建议提前与主人沟通好入住时间。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开维舍格勒很久以后，那座桥的形象反而在记忆里越发清晰。它不像许多世界奇观那样，用绝对的壮美或奢华让你瞬间屏息。它的力量是潜移默化的，是后知后觉的。当你回到自己繁忙的生活中，某个瞬间，你可能会突然想起走在那些光滑石板上的触感，想起河水那种不急不缓的流淌声，想起夕阳下桥拱勾勒出的金色线条。然后你会意识到，你触摸到的，是一种罕见的“延续性”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个充满断裂和遗忘的时代，这座桥固执地连接着一切。它连接空间的两岸，也连接时间的断层。它既是奥斯曼帝国的遗产，也是南斯拉夫的文化符号，更是今天波斯尼亚人日常生活中平凡的一部分。它身上叠加的层层历史——帝国的、战争的、文学的、日常的——没有互相抹杀，而是像桥墩上的沉积岩一样，共同构成了它现在的样貌。它告诉我们，历史不是非此即彼的单选题，而是一条深沉宽广的河流，所有支流最终都汇入其中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人都该来这里。不仅仅是为了看一座漂亮的古桥，更是为了体验一种“穿越时间”的实感，为了理解巴尔干这片土地复杂而坚韧的灵魂。站在德里纳河之桥上，你仿佛能听到历史的低语在石缝间穿梭，能看到文学的人物在光影中漫步。它会给你一种沉静的勇气，让你相信，无论经历多少冲突与破坏，有些连接是炸不断的，有些故事是值得被一遍又一遍传颂的。这，或许就是旅行的最高意义——去找到那些能锚定我们共同人性的坐标。维舍格勒的这座桥，就是这样一个坐标。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/jajce-falls-and-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    亚
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">亚伊采瀑布与城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jajce Waterfall and Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/stari-most-mostar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫斯塔尔老桥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stari Most</p>
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
