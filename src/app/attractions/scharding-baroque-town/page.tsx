import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '谢尔丁 Schärding｜沉醉在因河畔的巴洛克调色盘里 - 最佳欧洲景点',
  description: '你第一眼看到谢尔丁，绝不会相信这是真的。它像从一本童话书的插页里直接蹦出来的，整个老城的主广场——“ Stadtplatz”，就是一长排连绵不绝的七彩房子。不是那种刻意做旧的色调，而是薄荷绿、鹅蛋黄、草莓粉、天空蓝……这些明媚又温柔的颜色，被妥帖地涂在有着精致涡卷和雕塑装饰的巴洛克山墙上。午后的阳光...',
}

export default function SchardingBaroqueTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '谢尔丁', href: '/destinations/austria' },
            { label: '谢尔丁', href: '/attractions/scharding-baroque-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`谢尔丁・Schärding・奥地利・谢尔丁`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到谢尔丁，绝不会相信这是真的。它像从一本童话书的插页里直接蹦出来的，整个老城的主广场——“ Stadtplatz”，就是一长排连绵不绝的七彩房子。不是那种刻意做旧的色调，而是薄荷绿、鹅蛋黄、草莓粉、天空蓝……这些明媚又温柔的颜色，被妥帖地涂在有着精致涡卷和雕塑装饰的巴洛克山墙上。午后的阳光斜斜地打在立面上，每一种颜色都仿佛在发光，空气里飘着咖啡香和刚出炉的“林茨蛋糕”的甜腻气味。因河就在几步之遥，你能听到它潺潺的水声，看到天鹅不急不慢地游过，河水映着对岸巴伐利亚的丘陵和那些彩色房子的倒影，晃晃悠悠的，让现实和幻境的边界也变得模糊起来。
当地人似乎早已习惯了生活在一幅画里。老太太们会慢悠悠地穿过广场去肉铺，老先生们在栗子树下的长椅上读报，他们的日常对话声和自行车铃铛声，是这幅静物画里唯一的动态注解。你很快会发现，这里没有大型旅游团的喧嚣，时间流速都变得不同。你可以随便推开一扇厚重的木门，后面可能是一家家族经营了四代人的香料店，满屋子异域香气；也可能是一个静谧的内院，古老的井栏上爬满了紫藤。这座小镇的核心魅力，就在于它将极致的美学凝固在了街道尺度上，并且，它依然在呼吸，依然是一个有温度的家园，而非仅供参观的标本。
当夜幕降临，路灯亮起，暖黄的光晕笼罩着那些彩色墙面，又是另一番魔力。白天喧闹的游客渐渐散去，你坐在河边的小酒馆，点一杯本地的白啤酒。河风带来湿润的水汽，对岸的灯火星星点点。酒馆里传来手风琴的调音声，和着人们的谈笑，那声音混着酒香，飘散在古老的石板路上。这一刻，你仿佛触摸到了中欧小镇灵魂里最柔软、最日常的部分——一种历经繁华与战火后，沉淀下来的、安稳的、对生活本身的热爱与享受。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到谢尔丁，绝不会相信这是真的。它像从一本童话书的插页里直接蹦出来的，整个老城的主广场——“ Stadtplatz”，就是一长排连绵不绝的七彩房子。不是那种刻意做旧的色调，而是薄荷绿、鹅蛋黄、草莓粉、天空蓝……这些明媚又温柔的颜色，被妥帖地涂在有着精致涡卷和雕塑装饰的巴洛克山墙上。午后的阳光斜斜地打在立面上，每一种颜色都仿佛在发光，空气里飘着咖啡香和刚出炉的“林茨蛋糕”的甜腻气味。因河就在几步之遥，你能听到它潺潺的水声，看到天鹅不急不慢地游过，河水映着对岸巴伐利亚的丘陵和那些彩色房子的倒影，晃晃悠悠的，让现实和幻境的边界也变得模糊起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人似乎早已习惯了生活在一幅画里。老太太们会慢悠悠地穿过广场去肉铺，老先生们在栗子树下的长椅上读报，他们的日常对话声和自行车铃铛声，是这幅静物画里唯一的动态注解。你很快会发现，这里没有大型旅游团的喧嚣，时间流速都变得不同。你可以随便推开一扇厚重的木门，后面可能是一家家族经营了四代人的香料店，满屋子异域香气；也可能是一个静谧的内院，古老的井栏上爬满了紫藤。这座小镇的核心魅力，就在于它将极致的美学凝固在了街道尺度上，并且，它依然在呼吸，依然是一个有温度的家园，而非仅供参观的标本。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当夜幕降临，路灯亮起，暖黄的光晕笼罩着那些彩色墙面，又是另一番魔力。白天喧闹的游客渐渐散去，你坐在河边的小酒馆，点一杯本地的白啤酒。河风带来湿润的水汽，对岸的灯火星星点点。酒馆里传来手风琴的调音声，和着人们的谈笑，那声音混着酒香，飘散在古老的石板路上。这一刻，你仿佛触摸到了中欧小镇灵魂里最柔软、最日常的部分——一种历经繁华与战火后，沉淀下来的、安稳的、对生活本身的热爱与享受。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`谢尔丁`} />
                <InfoRow label="英文名称" value={`Schärding`} />
                <InfoRow label="正式名称" value={`Schärding`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`谢尔丁`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是连接巴伐利亚与奥地利的“盐路”上的关键要塞与繁荣商埠。`} />
                <InfoRow label="建筑特色" value={`拥有连续不断、色彩如糖果般明快的巴洛克式山墙立面，构成欧洲最迷人的街道景观之一。`} />
                <InfoRow label="建筑风格" value={`以巴伐利亚-奥地利巴洛克风格为主，夹杂着晚期哥特式与文艺复兴式的遗风。`} />
                <InfoRow label="文化价值" value={`一座活生生的露天建筑博物馆，完美保留了中世纪城市规划与十八世纪鼎盛时期审美趣味的和谐统一。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全年全天开放。镇上的博物馆（如城市博物馆）和主要教堂开放时间一般为周二至周日 10:00-17:00，冬季（11月至次年3月）可能缩短开放时间或仅周末开放。每周一及公共节假日部分室内景点可能闭馆，建议行前查阅官网。`} />
              <InfoRow label="门票价格" value={`进入古镇和漫步街道完全免费。参观市政厅历史大厅、城市博物馆或登上教堂塔楼等特定景点需要购买门票，联票价格约10欧元。学生、儿童及团体有优惠。夏季乘船游览因河费用另计。`} />
              <InfoRow label="地址" value={`Stadtplatz 1, 4780 Schärding, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是德国慕尼黑机场（MUC），距离约140公里。从慕尼黑机场乘坐火车前往，通常需在慕尼黑主火或帕绍（Passau）换乘一次，总耗时约2.5-3小时。从奥地利国内出发，可乘火车至临近的交通枢纽帕绍（德国边境城市，仅8公里远），然后换乘区域巴士或出租车，10-15分钟即可抵达谢尔丁。帕绍至谢尔丁的巴士班次频繁，约每小时一班。自驾是最灵活的方式，沿因河公路行驶风景极佳。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`谢尔丁的故事，和一条河、一条路紧密相连。因河是它的血脉，而那条从中世纪早期就存在的“盐路”，则是它财富与命运的牵引线。盐，那个时代的白色黄金，从阿尔卑斯山的盐矿被运出，通过因河船只和陆上马车，源源不断地送往巴伐利亚和更远的波希米亚。谢尔丁，恰恰坐落在因河的一个河湾处，地势险要，自然成了设卡征税、保卫商队的最佳据点。早在13世纪，巴伐利亚的维特尔斯巴赫公爵就在这里修筑了坚固的城堡，小镇的雏形围绕着城堡和河港发展起来。你可以想象那时的码头是何等繁忙：扛着盐袋的脚夫、吆喝的商人、修补船只的工匠，各种语言和口音在这里交汇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点，是一场灾难后的重生。17世纪末，一场毁灭性的大火几乎吞噬了整个木质结构的老镇。然而，塞翁失马，焉知非福。当时的统治者，巴伐利亚选帝侯马克西米利安二世·埃马努埃尔，决心按照当时最时髦的巴洛克风格，彻底重建他的这座边境明珠。他请来了顶尖的建筑师和规划师，他们为谢尔丁设计了一条前所未有的、统一而宏大的主广场。规矩是严格的：所有临街的建筑立面必须采用石料或砖石，必须拥有装饰性的巴洛克式山墙，并且在高度和进深上遵循统一的比例。于是，我们今天看到的这条色彩长廊，其骨骼正是在那个雄心勃勃的时代奠定的。每一栋房子都成了展示主人财富与品位的画布。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`18世纪是谢尔丁的“黄金时代”。它不仅是盐路枢纽，更是上奥地利地区重要的谷物和木材贸易中心。富商巨贾们争相在这里建造最华丽的住宅，但他们并没有破坏整体的和谐，而是在统一的框架内竞赛着窗棂的雕工、大门的气势和灰泥装饰的繁复程度。那时，广场上定期举办盛大的集市，来自威尼斯、纽伦堡、维也纳的货物琳琅满目。小镇的繁荣甚至吸引了许多意大利的灰泥粉刷匠和画家前来工作，为那些建筑内部带来了南欧的艺术风情。这座小镇，成了巴洛克生活方式在北欧边境的一个精致样板。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的浪潮从不平静。拿破仑战争席卷欧洲，谢尔丁的命运也随之颠簸。1810年，它被短暂地划归巴伐利亚王国，1816年，又根据《慕尼黑条约》重归奥地利。这种政权更迭带来了身份认同的微妙变化，但也让它融合了两种文化的特质——既有巴伐利亚的质朴与粗犷，又有奥地利的优雅与精细。两次世界大战，它都幸运地免于严重的物理破坏，那些彩色的立面得以幸存。战后，当许多历史城市忙于用现代建筑填补空白时，谢尔丁的居民却选择了一条不同的路：他们小心翼翼地修复每一栋老房子，保留了统一的色彩规划，甚至成立了一个专门的“色彩委员会”来审核每一处外墙的涂刷方案。正是这种跨越几个世纪的、集体的审美坚持与家园守护意识，才让这座“巴洛克珍珠”完好无损地递到了我们面前。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味谢尔丁，请至少留出一整个白天。建议在上午十点前抵达，这时旅行团还未涌入，晨光柔和，最适合拍照和感受小镇苏醒的宁静。整体游览节奏宜慢不宜快，核心是漫步、观察与沉浸。路线将从标志性的主广场开始，深入其色彩漩涡，然后沿着因河岸感受水边风情，最后探访制高点与宁静街巷，完成一个完美的循环。傍晚时分，一定要留在河边，欣赏日落与华灯初上的魔幻时刻。这样的安排能让你由表及里，从视觉震撼逐步深入到对小镇历史与生活脉搏的理解。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是小镇最繁忙的时候，如果想拍无人的街道照片，务必赶早或待到傍晚后。进入教堂和内院等非商业区域时，请保持安静，尊重当地居民的隐私。小镇几乎全部是石板路，请务必穿一双舒适耐磨的平底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主广场西端的“下城门”开始你的漫步，仰头细看城门拱顶上的古老纹章和壁画，仿佛穿过一道时间帷幕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着被七彩巴洛克立面夹道的石板路向东缓缓行走，留意每一栋房子山墙上各不相同的灰泥装饰，猜猜那些贝壳、葡萄藤、天使面孔背后的主人故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在广场中段右转钻进一条狭窄的巷子，去探寻隐蔽的“内院世界”，那里有安静的喷泉、爬满墙壁的蔷薇和居民们精心打理的小花园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到广场东端，登上圣乔治教区教堂的塔楼（如果开放），在微微摇晃的木楼梯尽头，收获一个俯瞰整个七彩屋顶森林与蜿蜒因河的全景画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂出来径直走向因河岸，沿着绿树成荫的河滨步道散步，看天鹅、野鸭和缓缓驶过的观光船，从水面上回望小镇倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`过桥走到对岸的巴伐利亚一侧，回头拍摄谢尔丁童话天际线的标准明信片视角，然后在河边的啤酒花园找张桌子坐下休息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`重新过桥回到镇上，去探访“Silberzeile”（银器街）那些曾经聚集了无数银匠和手艺人的小巷，现在这里开着些有趣的古董店和工作室。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，回到主广场，随便选一家咖啡馆坐在室外，点一份经典的苹果卷，看金色的夕阳如何将那些彩色墙面点燃，变成一块流动的蜜糖。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主广场中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出巴洛克山墙的立体轮廓与雕塑细节，将相机贴近地面向上拍，能获得极具视觉冲击力的构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`因河对岸全景点`}</h4>
                  <p className="text-sm text-gray-700">{`从巴伐利亚一侧的河边小径，在晴朗的傍晚利用日落前的“黄金一小时”拍摄，水面会映出晚霞和灯光初亮的房屋，色彩饱和度达到巅峰。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Silberzeile街角拱门`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光刚好能穿过狭窄的巷子，站在拱门下向外拍，能形成天然的画框，将远处彩色的房屋和行人定格成生动一景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`圣乔治教堂塔楼内部`}</h4>
                  <p className="text-sm text-gray-700">{`如果塔楼开放，记得在攀登时从塔楼的小窗向外拍，窗框本身与窗外鳞次栉比的屋顶构成绝妙的几何构图，充满故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`河边啤酒花园长椅`}</h4>
                  <p className="text-sm text-gray-700">{`以木桌上的半杯啤酒或咖啡杯做前景，将对岸的七彩房屋和教堂尖塔作为背景虚化，营造悠闲浪漫的度假氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民和他们的私人空间（如内院）前，请务必先微笑征得同意，这是基本的礼貌。使用无人机在奥地利城镇上空飞行有严格规定，通常需要提前申请许可，请勿随意起飞。阴天时光线柔和均匀，其实是拍摄建筑色彩细节的好时机，不必执着于阳光。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`色彩梦境中心`}</h4>
                  <p className="text-sm text-blue-800">{`直接下榻在主广场一栋经过精心修复的18世纪商人宅邸里，早上推开木格窗，楼下就是苏醒中的七彩街道，仿佛拥有了整座舞台。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`因河畔浪漫居所`}</h4>
                  <p className="text-sm text-green-800">{`选择一家带私人阳台的河边精品酒店，夜晚在潺潺水声与对岸灯火中入眠，清晨在阳台享受被天鹅问候的早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园诗家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`住在小镇边缘一户热情好客的当地家庭农场里，房间宽敞朴实，早餐的鸡蛋、蜂蜜和果酱都来自自家的园子，体验真正的奥地利乡村 hospitality。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计感历史酒店`}</h4>
                  <p className="text-sm text-purple-800">{`由一座古老的修道院改建而成，完美融合了粗粝的石墙、现代简约设计和 monastic 的宁静氛围，花园里还保留着中世纪的草药圃。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`主广场的住宿周末和旺季非常紧俏，至少提前两个月预订为宜。河边住宿夏季蚊虫可能稍多，记得关好纱窗。选择小镇外的住宿虽然更静谧，但晚上散步回程需注意，公共交通在晚间班次较少。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开谢尔丁好多天了，闭上眼，那一片温柔的彩色波浪还是会立刻在脑海中浮现。它给我的触动，远不止于“漂亮”这么简单。在这个崇尚颠覆、追求眼球效应的时代，谢尔丁的存在像一首固执的、优美的回文诗。它告诉我们，美可以有另一种定义：不是惊世骇俗的奇观，而是在一个共识的框架内，将和谐、秩序与色彩发挥到极致；不是封存于玻璃罩中的古董，而是渗入每日面包香气与邻里问候声中的活生生的传统。这座小镇的居民，用几百年时间，共同守护并不断润色着一件巨大的集体艺术品——他们自己的家园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，为什么它值得每一位深度旅行者前来？因为它提供了一种稀缺的体验：关于时间可触摸的质感，关于社区可看见的凝聚力，关于一种不疾不徐、与自身历史和平共处的生活哲学。站在因河边，看着对岸那排明媚安静的房子，你会突然理解，所谓“诗意的栖居”，或许并非遥不可及的理想，而是像谢尔丁人这样，一代一代，认真地为自己的房子挑选一种颜色，并相信这颜色会和邻居的、和河流的、和天空的颜色，一起汇成一首永不褪色的歌。来这里，不只是看风景，更是聆听这首关于色彩与日常的古老歌谣，让它为你快节奏的灵魂，进行一次温柔而深刻的调频。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/innsbruck-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    因
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">因斯布鲁克老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Innsbruck Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/votive-church" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃蒂夫教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Votive Church</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bad-ischl-imperial-spa-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴德伊舍</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Ischl</p>
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
