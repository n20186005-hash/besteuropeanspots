import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '乌韦达古城 Úbeda｜被时光封存的西班牙文艺复兴琥珀 - 最佳欧洲景点',
  description: '你从一条平淡无奇的现代街道拐弯，忽然就像掉进了一个蜂蜜色的梦境。第一眼看到的永远是那个令人屏息的瓦斯克斯·德·莫利纳广场。午后炽烈的阳光砸在广场中央的石板地上，又被周围那一圈气势恢宏的建筑立面温柔地反弹回来，空气里弥漫着一种温暖的、石头被晒过的干燥气味，混合着远处飘来的淡淡橙花香。广场空旷而安静，只...',
}

export default function UbedaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '乌韦达古城', href: '/attractions/ubeda-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`乌韦达古城・Úbeda・西班牙・乌韦达`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你从一条平淡无奇的现代街道拐弯，忽然就像掉进了一个蜂蜜色的梦境。第一眼看到的永远是那个令人屏息的瓦斯克斯·德·莫利纳广场。午后炽烈的阳光砸在广场中央的石板地上，又被周围那一圈气势恢宏的建筑立面温柔地反弹回来，空气里弥漫着一种温暖的、石头被晒过的干燥气味，混合着远处飘来的淡淡橙花香。广场空旷而安静，只有喷泉潺潺的水声和你的脚步声在回响。那种感觉太奇特了，仿佛闯进了一个精心布置却无人使用的巨大舞台，而你，是此刻唯一的观众。
但乌韦达的魅力远不止这份凝固的庄严。你需要钻进那些从广场辐射出去的、狭窄些的街道。这里的石头变成了更深的金色，墙壁高耸，投下清凉的阴影。头顶的蓝天被切割成细长的带子。突然，某扇厚重的木门吱呀一声打开，一位老妇人拎着菜篮子走出来，门缝里瞬间飘出西班牙家常菜——可能是鹰嘴豆炖肉的浓郁香气。这提醒你，这不是一座博物馆，而是一个活着的社区。洗衣店、小酒馆、手艺人的作坊，就藏在这些庄严的宫殿底下。穿着校服的孩子们嬉笑着从教堂的阴影里跑过，给这座“理想城市”的图纸注入了最鲜活的血液。
最打动人的时刻，或许是黄昏。当游客巴士纷纷离去，广场上的光从炽白变成金红，最后融化成温柔的紫灰色。本地人开始出来了，他们三三两两坐在广场台阶上，或挤在街角那些挂着火腿的小酒吧里。酒杯碰撞的清脆声、热烈的交谈声、弗拉门戈吉他的试音声渐渐升起。这时你才明白，乌韦达的精华，在于这种强烈的对比与和谐：白天，它是献给神祇与国王的纪念碑，理性、完美、不容置疑；夜晚，它则把空间还给了橄榄油、雪利酒和普通人喧闹的呼吸。那种穿越了五个世纪的规划感，最终服务的，仍是当下这一刻鲜活的生活热度。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你从一条平淡无奇的现代街道拐弯，忽然就像掉进了一个蜂蜜色的梦境。第一眼看到的永远是那个令人屏息的瓦斯克斯·德·莫利纳广场。午后炽烈的阳光砸在广场中央的石板地上，又被周围那一圈气势恢宏的建筑立面温柔地反弹回来，空气里弥漫着一种温暖的、石头被晒过的干燥气味，混合着远处飘来的淡淡橙花香。广场空旷而安静，只有喷泉潺潺的水声和你的脚步声在回响。那种感觉太奇特了，仿佛闯进了一个精心布置却无人使用的巨大舞台，而你，是此刻唯一的观众。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但乌韦达的魅力远不止这份凝固的庄严。你需要钻进那些从广场辐射出去的、狭窄些的街道。这里的石头变成了更深的金色，墙壁高耸，投下清凉的阴影。头顶的蓝天被切割成细长的带子。突然，某扇厚重的木门吱呀一声打开，一位老妇人拎着菜篮子走出来，门缝里瞬间飘出西班牙家常菜——可能是鹰嘴豆炖肉的浓郁香气。这提醒你，这不是一座博物馆，而是一个活着的社区。洗衣店、小酒馆、手艺人的作坊，就藏在这些庄严的宫殿底下。穿着校服的孩子们嬉笑着从教堂的阴影里跑过，给这座“理想城市”的图纸注入了最鲜活的血液。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的时刻，或许是黄昏。当游客巴士纷纷离去，广场上的光从炽白变成金红，最后融化成温柔的紫灰色。本地人开始出来了，他们三三两两坐在广场台阶上，或挤在街角那些挂着火腿的小酒吧里。酒杯碰撞的清脆声、热烈的交谈声、弗拉门戈吉他的试音声渐渐升起。这时你才明白，乌韦达的精华，在于这种强烈的对比与和谐：白天，它是献给神祇与国王的纪念碑，理性、完美、不容置疑；夜晚，它则把空间还给了橄榄油、雪利酒和普通人喧闹的呼吸。那种穿越了五个世纪的规划感，最终服务的，仍是当下这一刻鲜活的生活热度。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`乌韦达古城`} />
                <InfoRow label="英文名称" value={`Úbeda`} />
                <InfoRow label="正式名称" value={`Historic Centre of Úbeda`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`乌韦达`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在16世纪西班牙黄金时代，由帝国权贵与天才建筑师共同规划建造的“理想城市”典范，与姐妹城巴埃萨一同被列为世界文化遗产。`} />
                <InfoRow label="建筑特色" value={`极致规整与和谐的城市肌理，以宏伟的广场为中心，四周环绕着用当地金色砂岩建造、装饰华丽的文艺复兴风格宫殿与教堂，形成一组组庄严的建筑交响乐。`} />
                <InfoRow label="建筑风格" value={`以纯粹的西班牙文艺复兴风格为主，深受意大利建筑思想影响，并巧妙融合了本土的穆德哈尔元素，被誉为“安达卢西亚的文艺复兴首都”。`} />
                <InfoRow label="文化价值" value={`它并非自然生长的中世纪迷宫，而是欧洲城市规划思想史上一个罕见的、完整实现的“纸上蓝图”，生动展示了权力、艺术与信仰如何共同塑造一个城市的灵魂。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`历史城区街道及主要广场全天24小时开放。城内各重要宫殿、教堂及博物馆开放时间不一，通常为周一至周六上午10:00至下午2:00，下午5:00至8:00；周日及节假日仅在上午开放。部分小型博物馆冬季会缩短开放时间或仅接受预约参观。建议出行前在官网具体查询，重大宗教节日（如圣周）期间开放时间变动极大，但街头庆典活动丰富。`} />
              <InfoRow label="门票价格" value={`漫步历史城区本身完全免费。进入核心地标如圣玛丽亚广场上的萨尔瓦多教堂（Sacra Capilla del Salvador）门票约5欧元；圣巴勃罗教堂（Iglesia de San Pablo）免费进入，但其珍宝室需小额捐赠。购买联票（约10-12欧元）可参观包括市政厅（Palacio de las Cadenas）、老医院（Hospital de Santiago）在内的3-4个主要景点，性价比高。学生、65岁以上老人及儿童享有折扣。`} />
              <InfoRow label="地址" value={`Plaza Vázquez de Molina, s/n, 23400 Úbeda, Jaén, Spain`} />
              <InfoRow label="交通方式" value={`最近的主要机场是格拉纳达机场（GRX）或哈恩机场（后者航班极少）。从马德里或塞维利亚乘坐西班牙国铁（Renfe）高速或普通列车抵达哈恩（Jaén）火车站最为便捷，车程从塞维利亚出发约2.5小时。从哈恩火车站出口旁的汽车站，换乘Alsina Graells公司运营的定期巴士，约1小时即可直达乌韦达汽车站，班次频繁（约每小时一班）。从汽车站步行10-15分钟即可进入古城核心区。自驾是最灵活的方式，古城外围有多个收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解乌韦达为何如此“整齐划一”，得像剥洋葱一样，回到它层层叠叠的过去。最里层是摩尔人的遗产，公元9世纪，他们在此建立要塞，城市蜿蜒的街巷底子还在某些区域隐约可循。基督教王国收复这里后，它成了边境堡垒，混乱而粗犷。真正的转折点，出现在16世纪，那是个西班牙从新大陆滚滚涌入黄金、野心膨胀到极致的时代。而乌韦达，幸运地（或者说注定地）成为了两位大人物的“试验田”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`一位是权力顶峰的人物：弗朗西斯科·德·洛斯·科沃斯，皇帝查理五世那位权势滔天的秘书。他不仅是帝国的官僚，更是一位具有非凡品味和野心的艺术赞助人。功成名就后，他决心将自己的故乡乌韦达，建设成一个配得上帝国荣耀的纪念品。另一位，则是天才的艺术家：安德烈斯·德·范德尔维拉。这位建筑师深谙来自意大利的文艺复兴新风，追求比例、对称与古典的和谐。当科沃斯的金钱与权力，遇上范德尔维拉的美学蓝图，一场轰轰烈烈的“造城运动”便拉开了序幕。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`他们几乎是从零开始，在古城东部规划了一个全新的区域，核心就是今天的瓦斯克斯·德·莫利纳广场。这不像是在建房子，更像是在下一盘以石头为子的棋。萨尔瓦多教堂是献给科沃斯家族的礼拜堂，极尽奢华之能事，立面上的雕刻繁复如精致的蕾丝；对面的市政厅（当时是宫殿）则庄重恢宏，彰显世俗权威。医院、监狱、贵族宅邸……一系列公共和私人建筑被有序地安置在广场周围，形成了一个完整、自洽、充满象征意义的建筑群。这不仅仅是建造，这是一种宣言，向世界宣告：西班牙帝国不仅能用武力征服，也能用最先进、最文明的艺术来塑造秩序。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，帝国的黄金时代如流星般短暂。随着财富枯竭、政治中心转移，乌韦达的疯狂建设戛然而止。它就像一只突然被树脂包裹的昆虫，凝固在了自己最辉煌的瞬间。此后数百年，它陷入了漫长的沉睡与停滞。经济衰退反而成了一种另类的保护，因为没有钱去“改造”或“现代化”，这些文艺复兴的珍宝得以原封不动地保存下来，甚至蒙上了时间的包浆。直到20世纪，人们才恍然惊觉，在安达卢西亚的阳光下，竟藏着一座如此完整的文艺复兴城市标本。2003年，它与毗邻的巴埃萨一同入选世界遗产，并非因为某栋单体建筑，而是因为那个几乎被完美实现的、关于“理想城市”的古老梦想。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在下午三点左右抵达并开始游览。此时，酷热稍褪，阳光角度开始变得倾斜，是欣赏那些金色砂岩建筑立体感和温暖色调的最佳时刻。整体游览耗时约4-5小时，正好能从日光充沛的午后，经历迷人的黄昏，一直待到华灯初上、小城生活气息最浓的夜晚。节奏宜慢不宜快，核心是感受空间与光影的变化，而非打卡景点。从最具冲击力的中心广场开始，逐渐向外围漫步，最后在迷宫般的老区小巷中结束，这样的路线能让你对这座城市的规划逻辑和生活内核有一个由表及里的深刻理解。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着绝对舒适的平底鞋，古城街道几乎全是石头铺就，高跟鞋是“刑具”。夏季午后阳光极其猛烈，帽子、墨镜和防晒霜是保命必需品，尽量寻找阴影行走。古城内餐厅针对游客的价格可能偏高，多走两步钻进非主广场的小巷，往往能找到味道更地道、价格更实在的家庭式小馆。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从震撼的瓦斯克斯·德·莫利纳广场开始，静静地绕场一周，用手触摸不同建筑立面上被阳光烤得微热的砂岩，感受雕刻的细微起伏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开萨尔瓦多教堂那扇厚重的大门，让眼睛适应内部的幽暗，然后仰头凝视那个令人眩晕的、布满金色装饰的圆顶，听脚步声在空旷中回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步到毗邻的圣玛丽亚广场，在教堂阴影下的长椅上坐一会儿，看鸽子在喷泉边踱步，观察本地老人如何慢悠悠地消磨整个下午。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着指引找到圣殿骑士团教堂（Iglesia de San Pablo）那融合了哥特与穆德哈尔风格的混血立面，想象不同时代信仰在此留下的层叠印记。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走进老医院（Hospital de Santiago），穿过它简朴优雅的庭院，登上露台，在那里收获一个俯瞰全城红色瓦顶与远方无边橄榄园的无敌视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当暮色四合时，钻进广场北面那些狭窄如峡谷的小巷，比如Calle Real，让嗅觉引导你找到一家挂着“Taberna”招牌的老酒馆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在酒馆里点一杯当地产的“皮斯科”白葡萄酒，配上几片淋着顶级乌韦达橄榄油的面包，耳朵里灌满周围西班牙语快速而热烈的交谈声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后，再次漫步回已亮起昏黄灯光的瓦斯克斯·德·莫利纳广场，此时的建筑在灯光勾勒下呈现出与白日截然不同的神秘与温柔轮廓。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`瓦斯克斯·德·莫利纳广场东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，阳光为萨尔瓦多教堂的立面镀上浓郁的金红色，站在广场对角线位置用广角镜头拍摄，能将教堂的宏伟与广场的空间感一并纳入，构图极具张力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老医院（Hospital de Santiago）顶层露台全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚光线柔和时，在此可以拍摄到古城密集的赭石色屋顶与远处绵延至天际的橄榄园组成的经典安达卢西亚风景，使用长焦镜头可以压缩空间，突出层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣殿骑士团教堂（San Pablo）侧面小巷`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光垂直射入狭窄的巷子，会在古老的墙壁上形成强烈的明暗分割线，拍摄行人走过光影交界处的剪影或背影，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`卡萨·德·拉斯·托雷亚斯（Casa de las Torres）庭院内部`}</h4>
                  <p className="text-sm text-gray-700">{`这是一座不显眼的贵族宅邸，其文艺复兴式庭院安静少人，下午阳光透过回廊立柱形成规律的光影走廊，利用立柱作为前景框架，拍摄庭院中心或对面回廊，能拍出极具几何美感和纵深感的大片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人和儿童时，请务必先微笑示意并取得同意，尊重他们的隐私。无人机飞行在历史城区上空有严格限制，起飞前务必查询当地最新法规。许多建筑内部禁止使用闪光灯和三脚架，请遵守规定，依赖高感光度和自然光创作。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心宫殿体验`}</h4>
                  <p className="text-sm text-blue-800">{`入住由16世纪贵族宫殿直接改造的精品酒店，睡在有着高耸彩绘木梁的天花板下，清晨在私密的内部罗马式中庭里用早餐，仿佛成为这座建筑历史的一部分。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`家庭式百年老宅`}</h4>
                  <p className="text-sm text-green-800">{`选择老城区深处一栋传承数代的家庭旅馆，房间不大但充满人情味，老板娘会为你准备 homemade 的早餐，并热情地用肢体语言混合简单英语告诉你只有本地人才知道的故事。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`橄榄园景观酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`住在古城边缘一座现代设计的舒适酒店，房间拥有全景落地窗和私人阳台，直面一望无际的橄榄树林，在日出的薄雾和日落的光辉中，品尝酒店自产的顶级初榨橄榄油。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`简约艺术民宿`}</h4>
                  <p className="text-sm text-purple-800">{`由当地艺术家经营的迷你公寓，空间设计感强，充满现代与古典的碰撞，位置极佳却隐藏在安静小巷中，适合喜欢自主探索、自己动手做饭的深度旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古城内的酒店多为历史建筑，隔音可能相对一般，但换来的氛围感无与伦比。夏季（尤其是周末）和圣周期间住宿非常紧张，务必提前数月预订。如果自驾，请务必确认酒店是否提供停车位或有合作的停车场，古城内停车位是稀缺资源。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开乌韦达许久后，闭上眼睛，脑海里浮现的不是某个具体的雕像或门廊，而是一种整体的、浓稠的“金色”印象。那种金，是阳光，是砂岩，是沉淀的时间，也是一种属于文艺复兴鼎盛期的、充满理性自信的辉煌光泽。这座城市教会我一件事：美，可以是一种规划的结果。它不是野花般杂乱无章地生长，而是像一首严谨的赋格曲，每个声部都经过精心设计，最终汇聚成和谐磅礴的乐章。行走其中，你能清晰地触摸到16世纪那些缔造者的雄心——他们不仅要建造房屋，更要建造一个关于秩序、信仰与文明的乌托邦。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个崇尚快速迭代、碎片化表达的世界里，乌韦达像一颗来自旧世界的“时间胶囊”。它邀请你慢下来，用脚步丈量它的规整，用心感受那种经过深思熟虑的、近乎固执的和谐。它让你相信，人类曾经如此认真地梦想过“完美城市”的模样，并真的将其付诸实践。尽管帝国的荣耀早已烟消云散，但那份对美的执着追求，却通过这些沉默的石头，铿锵有力地传递至今。对于每一位厌倦了浮光掠影的旅人而言，乌韦达不是一道快餐，而是一杯需要醒很久的醇酒。它不提供即时的感官刺激，却馈赠一种更深沉的、关于秩序与永恒的心灵震撼。来这里，不是为了收集景点，而是为了完成一次与那个雄心勃勃的黄金时代的、沉默而庄严的对话。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
