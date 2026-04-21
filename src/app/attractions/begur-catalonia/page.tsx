import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝古尔 Begur｜地中海悬崖上的加泰罗尼亚珍珠，藏着“古巴往事”的彩色小镇 - 最佳欧洲景点',
  description: '车子沿着布拉瓦海岸的盘山公路向上爬升，地中海从一片蔚蓝的平面，逐渐变成在脚下铺展的、点缀着白色浪花的巨大蓝丝绒。当空气里开始混杂着松树、迷迭香的干燥香气和海风特有的微咸时，贝古尔就到了。你的第一眼注定会献给山顶——那座仿佛从岩石里生长出来的城堡废墟，在炽烈的阳光下只剩下一圈沉默的剪影，像一位年老力衰',
}

export default function BegurCataloniaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/europe' },
            { label: '贝古尔镇', href: '/destinations/europe' },
            { label: '贝古尔', href: '/attractions/begur-catalonia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝古尔・Begur・西班牙・贝古尔镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着布拉瓦海岸的盘山公路向上爬升，地中海从一片蔚蓝的平面，逐渐变成在脚下铺展的、点缀着白色浪花的巨大蓝丝绒。当空气里开始混杂着松树、迷迭香的干燥香气和海风特有的微咸时，贝古尔就到了。你的第一眼注定会献给山顶——那座仿佛从岩石里生长出来的城堡废墟，在炽烈的阳光下只剩下一圈沉默的剪影，像一位年老力衰却依旧挺直脊背的骑士，守卫着脚下这片土地。但小镇的魔力，恰恰藏在这雄浑与温柔的反差里。
顺着被岁月打磨得光滑的石阶往下走，闯入眼帘的却是另一个世界。狭窄的巷子突然开阔，一幢幢你从未在地中海小镇见过的豪宅扑面而来。它们不是巴塞罗那那种高迪式的奇诡，也不是安达卢西亚纯白的简洁。它们是粉色的、鹅黄色的、淡绿色的，外墙细腻光滑，有着宽阔的拱形门廊，精美的铸铁阳台栏杆上缠绕着九重葛，庭院里高大的棕榈树探出墙头。空气中飘来邻居家炖菜的温暖香气，和着咖啡的醇厚。这些房子如此安详地坐落在中世纪的石板路旁，仿佛一位从哈瓦那归来、穿着丝绸长裙的女士，优雅地坐在一群穿着粗布衣服的老兵中间，讲述着遥远的热带故事。
这些就是“印第安人”的宅邸。所谓“印第安人”，指的并不是美洲原住民，而是19世纪那些远渡重洋到古巴等地闯荡、发财后荣归故里的加泰罗尼亚人。他们把财富、见识，以及对新世界的乡愁，都砌进了这些房子的每一块砖、每一片琉璃瓦里。在贝古尔，历史不是博物馆里冰冷的展品，它就是邻居家那扇彩绘玻璃窗后透出的灯光，是街角咖啡馆里老人们闲聊时偶尔蹦出的古巴词汇，是黄昏时分，海风穿过棕榈叶发出的、不同于本地橡树的沙沙声响。
最打动人心的，是那种层层叠叠的时空感。你站在城堡的残垣断壁间，能触摸到公元11世纪摩尔人统治的冰凉，和后来基督徒收复失地时的烽火。一转身，走下五分钟，你就被包裹在19世纪末的奢华与乡愁中。而此刻，你的耳边响着的是当下孩子们在广场上追逐的欢笑声，鼻尖嗅到的是路边餐馆正在烤制的当日海鱼。贝古尔就像一个从容的叙事者，把战争与和平、远行与归来、沧桑与繁华，不动声色地编织进了同一个午后阳光里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着布拉瓦海岸的盘山公路向上爬升，地中海从一片蔚蓝的平面，逐渐变成在脚下铺展的、点缀着白色浪花的巨大蓝丝绒。当空气里开始混杂着松树、迷迭香的干燥香气和海风特有的微咸时，贝古尔就到了。你的第一眼注定会献给山顶——那座仿佛从岩石里生长出来的城堡废墟，在炽烈的阳光下只剩下一圈沉默的剪影，像一位年老力衰却依旧挺直脊背的骑士，守卫着脚下这片土地。但小镇的魔力，恰恰藏在这雄浑与温柔的反差里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "顺着被岁月打磨得光滑的石阶往下走，闯入眼帘的却是另一个世界。狭窄的巷子突然开阔，一幢幢你从未在地中海小镇见过的豪宅扑面而来。它们不是巴塞罗那那种高迪式的奇诡，也不是安达卢西亚纯白的简洁。它们是粉色的、鹅黄色的、淡绿色的，外墙细腻光滑，有着宽阔的拱形门廊，精美的铸铁阳台栏杆上缠绕着九重葛，庭院里高大的棕榈树探出墙头。空气中飘来邻居家炖菜的温暖香气，和着咖啡的醇厚。这些房子如此安详地坐落在中世纪的石板路旁，仿佛一位从哈瓦那归来、穿着丝绸长裙的女士，优雅地坐在一群穿着粗布衣服的老兵中间，讲述着遥远的热带故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些就是“印第安人”的宅邸。所谓“印第安人”，指的并不是美洲原住民，而是19世纪那些远渡重洋到古巴等地闯荡、发财后荣归故里的加泰罗尼亚人。他们把财富、见识，以及对新世界的乡愁，都砌进了这些房子的每一块砖、每一片琉璃瓦里。在贝古尔，历史不是博物馆里冰冷的展品，它就是邻居家那扇彩绘玻璃窗后透出的灯光，是街角咖啡馆里老人们闲聊时偶尔蹦出的古巴词汇，是黄昏时分，海风穿过棕榈叶发出的、不同于本地橡树的沙沙声响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，是那种层层叠叠的时空感。你站在城堡的残垣断壁间，能触摸到公元11世纪摩尔人统治的冰凉，和后来基督徒收复失地时的烽火。一转身，走下五分钟，你就被包裹在19世纪末的奢华与乡愁中。而此刻，你的耳边响着的是当下孩子们在广场上追逐的欢笑声，鼻尖嗅到的是路边餐馆正在烤制的当日海鱼。贝古尔就像一个从容的叙事者，把战争与和平、远行与归来、沧桑与繁华，不动声色地编织进了同一个午后阳光里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝古尔`} />
                <InfoRow label="英文名称" value={`Begur`} />
                <InfoRow label="正式名称" value={`Begur`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`贝古尔镇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座见证了加泰罗尼亚地区从中世纪军事要塞到19世纪跨大西洋殖民贸易史变迁的活化石小镇。`} />
                <InfoRow label="建筑特色" value={`山顶是粗犷沧桑的中世纪城堡废墟，山下却错落着精致华丽、色彩柔和的古巴殖民风格“印第安人”豪宅，形成极具戏剧张力的视觉对比。`} />
                <InfoRow label="建筑风格" value={`以地中海加泰罗尼亚本土石屋为基础，深度融合了19世纪古巴殖民地的建筑元素，如拱廊、彩绘玻璃、热带花园和铸铁阳台。`} />
                <InfoRow label="文化价值" value={`它是加泰罗尼亚“印第安人”现象最集中、最生动的展示窗口，记录了一代人在新旧大陆之间寻找财富与身份认同的独特历史篇章。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇街道及城堡山遗址全天24小时开放。镇内部分印第安人豪宅为私人住宅，仅可外部参观；少数作为文化空间或酒店开放的豪宅，其内部开放时间各异，通常为上午10点至下午2点，下午5点至晚上8点。建议出行前查询具体场馆信息。小镇旅游局信息中心通常为工作日开放。`} />
              <InfoRow label="门票价格" value={`免费。游览古镇、攀登城堡山、观赏街道建筑均无需门票。若进入少数开放的私人宅邸（如卡萨·多明戈文化中心），可能会有小额捐赠或门票，价格通常在2-5欧元。`} />
              <InfoRow label="地址" value={`Plaça de l‘Ajuntament, 1, 17255 Begur, Girona, Spain`} />
              <InfoRow label="交通方式" value={`从最近的机场吉罗纳-布拉瓦海岸机场（GRO）出发：驾车是最便捷的方式，沿C-31和GI-653公路行驶约50分钟即可抵达贝古尔。公共交通稍复杂：先从机场乘巴士或出租车到吉罗纳巴士站，再换乘前往帕拉莫斯的巴士，最后在帕拉莫斯转乘前往贝古尔的区域性巴士（SARFA公司运营），总耗时约2.5-3小时，班次有限，需提前规划。从巴塞罗那机场（BCN）出发：驾车沿AP-7高速公路北上，在赫罗纳出口转GI公路，约1小时40分钟。火车加巴士：从机场坐火车到吉罗纳，再按上述巴士路线换乘，总耗时约3小时。强烈建议在布拉瓦海岸地区自驾，能最大程度享受沿海盘山公路的风景。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝古尔的故事，始于地中海永远不缺少的冲突与守望。早在青铜时代，就有人看中了这座海拔两百多米、三面环海的小山丘。但真正让它进入历史书页的，是公元9世纪北非摩尔人的到来。他们在山顶修筑了坚固的防御工事，贝古尔成了控制这段崎岖海岸线的一个重要据点。那时的空气中，弥漫着的是烽烟、橄榄油和异域香料混合的味道。山下的海湾，则是海盗与商船共同出没的模糊地带。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在11世纪，随着加泰罗尼亚伯爵们“收复失地运动”的推进，贝古尔被基督教军队夺回。城堡被加固、扩建，山下逐渐形成了受到保护的居民区。在随后的几百年里，它和布拉瓦海岸无数个小镇一样，在和平时期靠着渔业、橄榄和软木塞生产度日，一旦战火或海盗来袭，钟声敲响，全体居民便撤入山顶城堡的围墙之内。石头城墙上的每一道刮痕，都可能是某次抵御土耳其海盗或法国军队进攻时留下的印记。中世纪贝古尔的脉搏，是随着警钟的节奏而跳动的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，让贝古尔脱胎换骨的，不是刀剑，而是海洋带来的机遇与遥远的甘蔗田。19世纪，像许多加泰罗尼亚贫困地区一样，贝古尔的许多年轻人面临着一个残酷的选择：守着贫瘠的山地忍饥挨饿，或者冒险一搏。他们登上了驶往古巴的船只，目的地是蓬勃发展的蔗糖、烟草和咖啡种植园。这些人被称为“Indianos”（去往“印度”的人，当时对美洲殖民地的泛称）。旅途是九死一生的，热带疾病是比海浪更可怕的敌人。但那些幸存下来并抓住机遇的人，真的在古巴积累了惊人的财富。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，19世纪末到20世纪初，一场规模宏大的“荣归故里”开始了。这些“印第安人”带着成箱的金币、对热带潮湿气候的记忆、以及一种复杂的身份认同回到了贝古尔。他们迫切地想要向家乡证明自己的成功，方式就是建造宫殿般的住宅。但他们建造的，不是纯粹的加泰罗尼亚农舍，也不是巴塞罗那流行的现代主义风格。他们借鉴了哈瓦那、圣地亚哥等古巴城市的殖民地建筑：宽敞的布局以适应炎热气候，高大的窗户和拱廊促进通风，华丽的灰泥浮雕装饰外墙，引入色彩明快的涂料，在花园里种下从古巴带回来的棕榈树、木兰和蕨类植物。这些房子，是他们在新世界获得的地位勋章，也是安放那份再也回不去的“第二故乡”乡愁的容器。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的风向再次转变。古巴独立战争、后来的革命，切断了这些跨洋家族与殖民地的联系。许多“印第安人”家族衰落了，那些豪宅一度沉寂。然而，正是这份沉寂，意外地保存了这份独特的历史风貌。当20世纪后期旅游业的春风吹到布拉瓦海岸，人们重新发现了贝古尔——这个既有中世纪骑士传说，又有加勒比海风情的奇幻小镇。今天，一些豪宅被精心修复成精品酒店、餐厅或文化空间，古老的石头重新呼吸，继续向每一位来访者讲述着关于勇气、财富、乡愁与融合的，波澜壮阔的海洋史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的贝古尔之旅需要一整天，节奏宜张弛有度。建议上午抵达，先去攀登城堡山，此时光线最佳，气温也相对凉爽，更能体会城堡的苍凉与海景的开阔。游览耗时约1.5小时。下山后正值午前，可以悠闲地漫步进入“印第安人”豪宅集中的历史街区，此时柔和的光线打在那些彩色的外墙上，非常适合拍照和静静欣赏建筑细节。午餐后，可以深入小巷探索，参观个别开放的宅邸内部，或是在中央广场的咖啡馆发呆。傍晚时分，不妨驱车或步行下山（约20分钟），前往贝古尔下属的某个海滩（如萨·劳拉），在地中海的夕阳余晖中结束这一天。这样的安排顺应了地理从高到低的自然走势，也暗合了从古老战争史诗到近代海洋商贸传奇的时间脉络。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`攀登城堡山务必穿舒适防滑的鞋子，部分石阶较陡且无遮阴，请备好水和防晒用品。镇内街道多为石板路，同样不适合高跟鞋。大部分“印第安人”豪宅仍是私宅，请保持安静，尊重居民的隐私，切勿擅闯庭院或透过窗户窥探。夏季（7-8月）是旅游高峰，中午时段小镇和城堡会非常炎热拥挤，尽量早出晚归。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从镇中心广场出发，沿着清晰指示的“Camí al Castell”石阶小径向上攀登，在松林与岩石的陪伴下朝山顶城堡废墟进发`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在城堡废墟仅存的围墙和拱门下，360度转身俯瞰宛如宝石镶嵌般的布拉瓦海岸线，从玫瑰色的萨·劳拉海滩到远处的梅德群岛尽收眼底`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后径直走进以卡莱拉德尔印第奥街为核心的区域，放慢脚步，仰头细看每一栋“印第安人”豪宅门楣上的家族徽章、铸铁阳台的繁复花纹和热带植物装饰`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在建于16世纪的圣拉蒙礼拜堂前稍作停留，感受这座朴素石砌小教堂与周围华丽豪宅形成的安静对话`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到中央的宪法广场，在树荫下的长椅上坐一会儿，看当地老人读报、孩子们嬉戏，听一听小镇日常的生活脉搏`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访卡萨·多明戈等已向公众开放的部分豪宅内部，触摸那些从古巴运来的深色热带木材楼梯，想象当年家族聚会的场景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的小巷随意行走，不经意间邂逅一扇彩绘玻璃窗，或是一个爬满紫藤的隐秘庭院，享受迷路的乐趣`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，选一家能望见城堡山的露台餐厅，点一份用当天捕捞的鱼做的海鲜饭，让晚风把白天的历史故事慢慢吹进心里`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡山顶十字架旁`}</h4>
                  <p className="text-sm text-gray-700">{`日出或日落时分，以残破的石砌拱门为前景框架，拍摄远处沐浴在金色光芒中的地中海和星罗棋布的海湾，构图极具史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣拉蒙礼拜堂前的小平台`}</h4>
                  <p className="text-sm text-gray-700">{`上午阳光照亮“印第安人”豪宅立面时，以礼拜堂古朴的石墙为近景，色彩鲜艳的豪宅群为中景，远处的城堡山为背景，拍出历史层次的交融。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`卡莱拉德尔印第奥街中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光能将建筑立面分割出明暗效果的午后，低角度仰拍，将精致的铸铁阳台、棕榈树和蔚蓝的天空一同纳入镜头，充满热带殖民地风情。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某条狭窄巷道的转角`}</h4>
                  <p className="text-sm text-gray-700">{`利用巷道的纵深感，将地面光滑的石板路作为引导线，聚焦于一扇特别的彩绘玻璃门或是一盆怒放的鲜花，捕捉小镇的生活细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从贝古尔前往海边小路旁的观景台`}</h4>
                  <p className="text-sm text-gray-700">{`在晴朗的下午，使用长焦镜头，可以压缩空间，拍出小镇建筑层层叠叠、最终簇拥着山顶城堡的经典全景照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄私人住宅外观时请尽量迅速、低调，避免使用闪光灯或做出干扰性行为。当地人对此普遍友善，但持续的窥探或拍摄可能会引起不适。夏季正午顶光强烈，不利于表现建筑质感，建议将主要拍摄时间放在清晨和傍晚的“黄金小时”。无人机飞行在历史城镇上空可能有严格限制，起飞前务必查清当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`镇中心由古老石屋改造的家庭式旅馆，房间简单干净，老板会热情地为你手绘一张只有本地人才知道的秘密观景点和地道小餐馆地图。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`入住一栋经过精心修复的“印第安人”豪宅精品酒店，睡在四柱床上，早晨在曾经举行过家族舞会的、铺着古巴地砖的庭院里享用早餐，彻底沉浸在那个时代。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`位于贝古尔和海滩之间的悬崖之上，拥有无敌海景和私人泳池的五星级设计酒店，将历史的厚重与现代的奢华舒适完美结合。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计师心头好`}</h4>
                  <p className="text-sm text-purple-800">{`由建筑师将几栋传统房屋打通改造的现代风格酒店，保留了原始的石墙和木梁，内部却是极简设计，像一个隐藏在老灵魂里的时尚避难所。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季房源极其紧张，务必提前数月预订，尤其是那些由豪宅改造的精品酒店。如果想体验真正的宁静，建议选择周日到周四的时段入住，避开西班牙本地人的周末度假潮。住在镇上虽离海滩稍有距离，但能享受夜晚和清晨无人打扰的古巷氛围；选择海边酒店则更方便水上活动，但会失去一部分沉浸于历史街区的韵味。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开贝古尔许久后，闭上眼睛，脑海里浮现的不是某个单一的恢弘画面，而是一种混合的“感觉”。是粗糙城堡石头的冰冷触感，与彩色豪宅光滑灰泥墙的温润形成的反差；是山顶呼啸风声的苍凉，与庭院里棕榈叶沙沙声的慵懒交织成的和弦；是航海时代冒险家的野心，与衣锦还乡者对根的眷恋共同谱写的故事。这个地方教会我，历史从来不是一条单一的直线，它更像这片地中海的海水，不同的洋流在此交汇、碰撞、融合，最终沉淀出独一无二的层次。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、景观常常被简化为打卡背景板的时代，贝古尔是一种温和的反抗。它拒绝被快速消费。你需要用脚步去丈量从山顶到山下的海拔落差，才能真正理解空间如何塑造命运；你需要用心去看那些建筑上异域与本土交融的细节，才能读懂一部微缩的全球史。它不张扬，却充满力量。每一位热爱深度游的旅人都该来这里，不仅仅是为了一张明信片般的照片，更是为了体验一种“在地的穿越”——在一个下午的时间里，同时触摸到中世纪欧洲的边疆、大航海时代的全球网络，以及当下地中海小镇充满烟火气的日常生活。这种奇妙的时空叠合感，会让你的内心变得更加辽阔和深邃。贝古尔，这颗布拉瓦海岸的珍珠，光泽正来自它复杂而美丽的层理。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mogarraz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莫
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莫加拉斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mogarraz</p>
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
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Girona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/albarracin-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔瓦拉辛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Albarracín</p>
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
