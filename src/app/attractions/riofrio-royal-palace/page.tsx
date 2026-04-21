import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里奥弗里奥 Riofrío｜探秘粉红皇家宫殿与野生鹿群共舞的森林秘境 - 最佳欧洲景点',
  description: '车子驶离塞哥维亚那标志性的罗马水道桥， 拐进一条被高大松树和橡树夹道的安静公路。空气骤然变得清冽， 带着松针和泥土的芬芳， 城市的喧嚣像被一层无形的滤网隔开。开了大概二十分钟， 就在你以为自己彻底迷失在这片卡斯蒂利亚的密林中时， 一个转弯， 它猝不及防地出现在眼前——一座巨大的、温柔得像清晨第一缕霞',
}

export default function RiofrioRoyalPalacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '纳瓦拉塞拉（塞哥维亚省）', href: '/destinations/europe' },
            { label: '里奥弗里奥', href: '/attractions/riofrio-royal-palace' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`里奥弗里奥・Riofrío・西班牙・纳瓦拉塞拉（塞哥维亚省）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离塞哥维亚那标志性的罗马水道桥， 拐进一条被高大松树和橡树夹道的安静公路。空气骤然变得清冽， 带着松针和泥土的芬芳， 城市的喧嚣像被一层无形的滤网隔开。开了大概二十分钟， 就在你以为自己彻底迷失在这片卡斯蒂利亚的密林中时， 一个转弯， 它猝不及防地出现在眼前——一座巨大的、温柔得像清晨第一缕霞光的粉红色宫殿， 就那样安安静静地坐在一片开阔的草地尽头。没有围墙， 没有喧嚣的游客大巴， 只有无边无际的森林像忠诚的卫兵一样环绕着它。那一刻的感觉很奇怪， 不是震撼， 而是一种被时光温柔包裹的宁静。
你停好车， 脚踩在沙沙作响的松针地上走近它。最先打破这片静谧的， 往往是几声清脆的鸟鸣， 或是风穿过古老树冠的沙沙声。然后， 你会看到它们——不是一两只， 而是一群。成群的马鹿和梅花鹿， 有的在宫殿正前方的草坪上闲适地踱步、低头吃草， 有的则从森林边缘探出脑袋， 用那双湿漉漉的、无比沉静的大眼睛好奇地打量着你。它们才是这里真正的主人， 而那座华丽的宫殿， 倒像是一个误入森林的、略显羞涩的客人。阳光透过树叶， 在粉红色的石墙和鹿群光滑的皮毛上投下斑驳晃动的光点， 空气里混合着草叶的清香和动物身上淡淡的、野性的气息。这里没有“景点”的疏离感， 一切浑然天成。
对于今天的西班牙人来说， 里奥弗里奥更像是一个巨大的、呼吸着的自然博物馆。宫殿内部作为博物馆开放， 展示着狩猎主题的艺术品和皇室生活痕迹， 但它的灵魂显然在墙外。周末， 你会看到本地家庭带着孩子来森林里徒步， 情侣在池塘边野餐， 摄影师们扛着长焦镜头耐心守候鹿群的踪迹。它不再是遥不可及的皇家禁地， 而是一个全民共享的生态绿肺， 一个让人暂时忘掉手机信号和日程表的“逃逸空间”。它的核心魅力， 就在于这种极致的反差与和谐：极尽人工雕琢之美的宫殿， 与充满原始生命力的野生森林和鹿群， 竟然可以如此毫无芥蒂地共存， 共同谱写着一首关于宁静与共生的田园诗。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离塞哥维亚那标志性的罗马水道桥， 拐进一条被高大松树和橡树夹道的安静公路。空气骤然变得清冽， 带着松针和泥土的芬芳， 城市的喧嚣像被一层无形的滤网隔开。开了大概二十分钟， 就在你以为自己彻底迷失在这片卡斯蒂利亚的密林中时， 一个转弯， 它猝不及防地出现在眼前——一座巨大的、温柔得像清晨第一缕霞光的粉红色宫殿， 就那样安安静静地坐在一片开阔的草地尽头。没有围墙， 没有喧嚣的游客大巴， 只有无边无际的森林像忠诚的卫兵一样环绕着它。那一刻的感觉很奇怪， 不是震撼， 而是一种被时光温柔包裹的宁静。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你停好车， 脚踩在沙沙作响的松针地上走近它。最先打破这片静谧的， 往往是几声清脆的鸟鸣， 或是风穿过古老树冠的沙沙声。然后， 你会看到它们——不是一两只， 而是一群。成群的马鹿和梅花鹿， 有的在宫殿正前方的草坪上闲适地踱步、低头吃草， 有的则从森林边缘探出脑袋， 用那双湿漉漉的、无比沉静的大眼睛好奇地打量着你。它们才是这里真正的主人， 而那座华丽的宫殿， 倒像是一个误入森林的、略显羞涩的客人。阳光透过树叶， 在粉红色的石墙和鹿群光滑的皮毛上投下斑驳晃动的光点， 空气里混合着草叶的清香和动物身上淡淡的、野性的气息。这里没有“景点”的疏离感， 一切浑然天成。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对于今天的西班牙人来说， 里奥弗里奥更像是一个巨大的、呼吸着的自然博物馆。宫殿内部作为博物馆开放， 展示着狩猎主题的艺术品和皇室生活痕迹， 但它的灵魂显然在墙外。周末， 你会看到本地家庭带着孩子来森林里徒步， 情侣在池塘边野餐， 摄影师们扛着长焦镜头耐心守候鹿群的踪迹。它不再是遥不可及的皇家禁地， 而是一个全民共享的生态绿肺， 一个让人暂时忘掉手机信号和日程表的“逃逸空间”。它的核心魅力， 就在于这种极致的反差与和谐：极尽人工雕琢之美的宫殿， 与充满原始生命力的野生森林和鹿群， 竟然可以如此毫无芥蒂地共存， 共同谱写着一首关于宁静与共生的田园诗。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`里奥弗里奥`} />
                <InfoRow label="英文名称" value={`Riofrío`} />
                <InfoRow label="正式名称" value={`Royal Palace of Riofrío`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`纳瓦拉塞拉（塞哥维亚省）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`西班牙波旁王朝最隐秘的狩猎行宫， 一座见证了王室悲欢与时代变迁的“备用王宫”。`} />
                <InfoRow label="建筑特色" value={`一座庞大而优雅的方形粉红色宫殿， 矗立在广袤的橡树与松林中央， 以其完美的对称性和与自然的和谐共生而著称。`} />
                <InfoRow label="建筑风格" value={`意大利新古典主义风格， 深受18世纪中叶欧洲宫廷建筑潮流影响， 但规模更为内敛和私密。`} />
                <InfoRow label="文化价值" value={`它不仅是一座建筑杰作， 更是理解西班牙王室“狩猎文化”及其与自然关系的鲜活窗口， 体现了从绝对王权到现代自然保护理念的转变。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`宫殿内部开放时间：每年4月至9月， 周一关闭。
宫殿开放时间： 冬季（10月至3月） 10:00-17:00， 夏季（4月至9月） 10:00-19:00， 具体开放时间随季节微调， 建议出行前查阅官网。
周围森林保护区全年全天开放， 但建议在日间游览以确保安全。`} />
              <InfoRow label="门票价格" value={`宫殿参观票价约为6欧元（全票）， 优惠票价约为3欧元（适用于5-16岁儿童、学生及65岁以上老人）， 5岁以下儿童免费。
每月特定日期（通常为每月第一个周六下午及周日）对欧盟公民免费开放。
请注意， 进入广阔的森林保护区是免费的。`} />
              <InfoRow label="地址" value={`Palacio Real de Riofrío, 40109 Navas de Riofrío, Segovia, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发是最佳选择：你可以从马德里查马丁火车站乘坐区域火车（Cercanías C8线）前往塞哥维亚， 车程约30分钟， 但请注意火车站在塞哥维亚城外。更推荐从马德里Moncloa巴士站乘坐频繁的La Sepulvedana公司大巴， 约1小时15分钟直达塞哥维亚市中心汽车站。从塞哥维亚到里奥弗里奥没有直达公共交通， 最佳方式是自驾（约20-25分钟车程， 沿SG-721公路行驶， 有清晰路标）或预订当地出租车/包车服务。自驾的话， 宫殿外有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个故事， 始于一位伤心欲绝的国王和一个未竟的梦。18世纪中叶， 西班牙国王费尔南多六世和他的妻子——葡萄牙的芭芭拉公主， 感情极为深厚。他们原本在马德里郊外的圣伊尔德丰索宫过着与世无争的宁静生活， 那座宫殿是他们共同的艺术与精神乐园。然而， 天不假年， 芭芭拉王后于1758年因病去世。深爱妻子的费尔南多六世悲痛欲绝， 从此一蹶不振， 仅仅一年后也随她而去。他们没有子嗣， 王位传给了费尔南多的同父异母兄弟卡洛斯三世。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而里奥弗里奥的诞生， 就与这位新国王卡洛斯三世密切相关。据说， 他的妻子——萨克森的玛丽亚·阿马利亚王后， 非常不喜欢圣伊尔德丰索宫， 因为那里处处都是前任国王夫妇恩爱生活的痕迹， 让她感到压抑和不快。为了寻找一个全新的、属于自己的王室居所， 卡洛斯三世看中了里奥弗里奥这片富饶的狩猎林地。这里自古就是皇家猎场， 鹿群繁盛。他的构想非常宏大：要建造一座能与马德里皇宫或圣伊尔德丰索宫媲美的宏伟宫殿， 作为波旁王朝的又一权力象征和休闲中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "工程于1752年启动， 由意大利建筑师维鲁蒂主持设计， 风格上追随当时欧洲最时髦的新古典主义， 端庄、对称、用色雅致。为了获取那种独特的、温暖的粉红色石材， 工匠们费尽心思。宫殿的蓝图极其庞大， 计划中的规模远比今天我们看到的大得多。然而， 命运再次开了一个玩笑。就在宫殿地基刚刚打好， 墙体开始缓缓上升之时， 1759年， 卡洛斯三世意外地继承了那不勒斯和西西里的王位， 随后又因兄长费尔南多六世去世而匆匆返回西班牙继承大统。政治重心的转移， 加上建造马德里皇宫的巨大开销， 使得里奥弗里奥的工程资金很快捉襟见肘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是， 这座宫殿就像被施了魔法， 永远地停留在了“未完成”的状态。它拥有了华丽的外壳、精美的内部庭院和一部分装饰好的房间， 但最初规划的许多侧翼、教堂和附属建筑都只存在于图纸上。此后的波旁国王们， 主要将它用作一个舒适的狩猎行宫。他们在这里享受追逐鹿群的快感， 举办亲密的狩猎派对， 墙壁上挂满了描绘狩猎场景的挂毯和油画。它见证了王室成员的欢笑与秘密， 也经历了拿破仑入侵时期的动荡与荒芜。直到20世纪， 随着君主制的衰落和现代自然保护意识的兴起， 它的角色才发生了根本性的转变。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受里奥弗里奥的魂灵， 你需要准备几乎一整天的时间， 并将节奏放得极其缓慢。建议在上午10点左右抵达， 此时阳光正好， 鹿群活跃， 游客稀少。整个游览应分为清晰的两部分：上午专注于宫殿内部的人文艺术世界， 下午则完全沉浸于外围的自然生态王国。整体耗时约6-8小时， 这是一个适合深呼吸、漫步和等待惊喜的行程。这样的安排让你既能领略波旁王朝的精致美学， 又能享受与野生自然不期而遇的纯粹快乐， 深刻体会这座宫殿“一半是历史， 一半是自然”的独特哲学。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着舒适耐走的鞋子， 因为森林小径多为土路和沙石路， 且需要长时间步行。
保持安静是遇见鹿群的关键， 大声喧哗或快速跑动会立刻吓跑这些敏感的森林居民。
宫殿内部禁止拍照， 请尊重规定， 将拍摄的激情完全留给窗外和户外的无限风光。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在森林边缘的免费停车场， 先别急着奔向宫殿， 静静听一会儿风吹过700公顷森林的涛声， 调整呼吸`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着那条笔直穿过松林的沙石小径步行约十分钟， 让粉红色的宫殿轮廓在枝叶缝隙间由远及近， 完成一场充满仪式感的接近`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入宫殿内部， 重点观赏中央气派的意大利式大理石楼梯和挂满狩猎主题佛兰德斯挂毯的皇家套房， 想象昔日贵族在此聚会的场景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去位于宫殿二楼的小型自然博物馆， 那里陈列的鹿角和野生动物标本会让你对即将探索的森林有更深入的了解`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宫殿侧门出来， 在露台咖啡馆点一杯咖啡， 坐在阳光下， 面对无垠的森林， 观察草坪上第一批出来觅食的鹿群`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`深入宫殿后方的森林步道， 选择一条小径随意漫步， 留意地面上的动物足迹和林间的细微动静`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果运气够好， 在黄昏时分安静的池塘边， 你会看到大群马鹿前来饮水， 那是森林一天中最富生命力的时刻`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到宫殿正面开阔的草地， 躺下看夕阳将粉红色的宫殿和天边的云彩一同点燃`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`宫殿正面林荫道尽头`}</h4>
                  <p className="text-sm text-gray-700">{`站在沙石小径的终点， 用长焦镜头压缩空间， 将粉红色的宫殿置于两排高大松树形成的天然画框中央， 最佳光线是侧光充足的上午十点前`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`与鹿群同框的宫殿前景`}</h4>
                  <p className="text-sm text-gray-700">{`在宫殿前的大草坪边缘耐心蹲守， 等到鹿群悠闲步入画面， 以宫殿为背景， 捕捉动物与建筑共存的宁静瞬间， 清晨或黄昏的柔和光线最为梦幻`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`森林池塘的倒影奇迹`}</h4>
                  <p className="text-sm text-gray-700">{`在日落前半小时抵达宫殿西南侧的池塘， 将相机贴近水面， 拍摄宫殿和森林在水中的完美倒影， 常有鹿群前来饮水点缀画面`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`从宫殿露台俯瞰森林`}</h4>
                  <p className="text-sm text-gray-700">{`利用二楼露台的栏杆作为前景， 拍摄下方绵延至天际线的无尽森林树冠， 雨季过后常有平流雾， 能拍出仙境般的层次感`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`内部庭院的光影几何`}</h4>
                  <p className="text-sm text-gray-700">{`虽然室内不能拍照， 但中庭是允许的， 正午时分阳光直射入方形庭院， 在明黄色墙面上形成强烈的光影分割线， 是极佳的极简构图场景`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一支70-200mm或更长的长焦镜头， 以便在不打扰动物的情况下捕捉鹿群的生动神态和细节。`}</li>
                <li>• {`尊重野生动物， 保持安全距离， 切勿为了拍照而追逐或惊吓鹿群， 尤其注意春季带崽的母鹿具有攻击性。`}</li>
                <li>• {`森林中光线复杂， 建议使用偏振镜以减少树叶和水面的反光， 让绿色和天空的色彩更加饱和纯净。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`塞哥维亚古城内由百年石屋改造的精品酒店， 晚上可以漫步在空无一人的古老街巷， 白天轻松往返里奥弗里奥`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`自然拥抱之选`}</h4>
                  <p className="text-sm text-green-800">{`森林保护区边缘由当地家庭经营的乡村民宿（Casa Rural）， 早晨在露台吃早餐时就能看见野鹿从花园外经过`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园奢华之选`}</h4>
                  <p className="text-sm text-yellow-800">{`塞哥维亚附近经过精心修复的18世纪贵族庄园酒店， 体验完整的卡斯蒂利亚乡村贵族生活， 享受私人花园和泳池`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`简约便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`塞哥维亚城外高速公路旁设计现代的连锁酒店， 性价比高， 适合自驾旅者， 拥有绝佳的古城远景和免费停车场`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果主要目标是深度体验里奥弗里奥的自然氛围， 强烈建议选择森林周边的乡村民宿， 但需提前数月预订， 尤其旺季十分紧俏。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "塞哥维亚古城内的住宿周末价格较高且停车困难， 自驾游客最好选择提供停车场的酒店或住在城外。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卡斯蒂利亚-莱昂地区夜晚凉爽， 即使夏季， 预订民宿时也最好确认是否有暖气或温暖的毯子。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开里奥弗里奥很久以后， 记忆里最清晰的不是宫殿内部那些华丽的挂毯和楼梯， 而是一种混合着松脂香气的宁静， 和与鹿群四目相对时， 心里那种微微颤动的感觉。在这个被过度开发的世界里， 能找到一处地方， 让数百年前的皇家建筑与最野性的自然生命如此平等、如此和睦地共享同一片土地， 这本身就像一个温柔的奇迹。它不像其他皇宫那样热衷于诉说权力与征服， 它更像一个巨大的、开放的怀抱， 告诉每一个来访者：慢下来， 听听风的声音， 看看鹿如何走路。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个快得让人眩晕的时代， 里奥弗里奥提供了一种近乎奢侈的体验：无所事事的价值。这里没有必须打卡的清单， 没有拥挤的人潮催促你向前。它的魅力在于等待， 在于偶然， 在于让你重新找回对自然最原始的感知力。每一位热爱深度游的旅人都该来一次里奥弗里奥， 不是为了收集另一个“世界遗产”的图章， 而是为了体验一种不同的时间维度——在这里， 时间是以鹿群的步伐、树影的移动和宫殿墙面颜色随日光变幻来计算的。它会轻轻拂去你身上的浮躁， 在你心里种下一小片宁静的森林。这， 或许才是旅行能带给我们的、最宝贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cudillero-spain" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库迪列罗</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cudillero</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/plasencia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普拉森西亚</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Plasencia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ubeda-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    乌
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">乌韦达古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Úbeda</p>
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
