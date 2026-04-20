import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩永悬崖小镇 Peillon｜探秘没有车轮声的南法天空之城 - 最佳欧洲景点',
  description: '当你把车停在那个小小的、毫无修饰的露天停车场，抬头望向那座几乎垂直贴在赭色悬崖上的灰白色村庄时，第一个念头可能是：“真的有人住在上面吗？” 它不像山下的尼斯或摩纳哥那般明信片式的鲜艳，而是一种褪了色的、与山岩融为一体的苍劲。告别引擎的轰鸣，你踏上第一级被岁月打磨得无比光滑的石阶，耳边瞬间被一种深邃的...',
}

export default function PeillonMedievalCliffVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '佩永悬崖小镇', href: '/attractions/peillon-medieval-cliff-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩永悬崖小镇・Peillon・法国・佩永`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你把车停在那个小小的、毫无修饰的露天停车场，抬头望向那座几乎垂直贴在赭色悬崖上的灰白色村庄时，第一个念头可能是：“真的有人住在上面吗？” 它不像山下的尼斯或摩纳哥那般明信片式的鲜艳，而是一种褪了色的、与山岩融为一体的苍劲。告别引擎的轰鸣，你踏上第一级被岁月打磨得无比光滑的石阶，耳边瞬间被一种深邃的宁静包围——只有你自己的脚步声、风穿过狭窄巷弄的呜咽声，以及不知从哪户人家窗口飘出的、若有若无的法语广播声。
空气中弥漫着干燥的石粉味，混杂着从墙角陶盆里逸出的迷迭香和天竺葵的清新香气。阳光在这里被分割、折射，在陡峭的巷子里创造出戏剧性的明暗对比：你可能刚走过一段被高墙遮挡的阴凉石廊，转角就踏入一片被正午阳光炙烤得发亮的小广场，突如其来的光芒让你眯起眼睛。这里的居民似乎都成了这静谧画面的一部分：一位老妇人正慢条斯理地晾晒着雪白的床单，床单的影子在古老的石墙上摇曳；一只虎斑猫蜷在某个门廊下的阴影里，懒洋洋地打量着你这个闯入者。生活在这里，不是表演给游客看的，它依然按照自己的、近乎古老的节奏流淌着。
佩永最打动人心的，正是这种极致的“抽离感”。仅仅距离繁华的蔚蓝海岸十几公里，你却仿佛穿越了几个世纪。这里没有纪念品商店的喧嚣，没有咖啡馆外成排的座位，甚至没有一辆自行车。你的世界被简化为抬头可见的一线蓝天，脚下坚实的石板，和下一个转角可能出现的、令人屏息的峡谷全景。它逼迫你慢下来，用最原始的方式——双脚，去丈量、去探索。这份沉静，这份与现代社会格格不入的“不便”，恰恰是它最珍贵的魅力。你不是来“参观”一个景点，而是来短暂地“居住”在一段被遗忘的时间里。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你把车停在那个小小的、毫无修饰的露天停车场，抬头望向那座几乎垂直贴在赭色悬崖上的灰白色村庄时，第一个念头可能是：“真的有人住在上面吗？” 它不像山下的尼斯或摩纳哥那般明信片式的鲜艳，而是一种褪了色的、与山岩融为一体的苍劲。告别引擎的轰鸣，你踏上第一级被岁月打磨得无比光滑的石阶，耳边瞬间被一种深邃的宁静包围——只有你自己的脚步声、风穿过狭窄巷弄的呜咽声，以及不知从哪户人家窗口飘出的、若有若无的法语广播声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气中弥漫着干燥的石粉味，混杂着从墙角陶盆里逸出的迷迭香和天竺葵的清新香气。阳光在这里被分割、折射，在陡峭的巷子里创造出戏剧性的明暗对比：你可能刚走过一段被高墙遮挡的阴凉石廊，转角就踏入一片被正午阳光炙烤得发亮的小广场，突如其来的光芒让你眯起眼睛。这里的居民似乎都成了这静谧画面的一部分：一位老妇人正慢条斯理地晾晒着雪白的床单，床单的影子在古老的石墙上摇曳；一只虎斑猫蜷在某个门廊下的阴影里，懒洋洋地打量着你这个闯入者。生活在这里，不是表演给游客看的，它依然按照自己的、近乎古老的节奏流淌着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`佩永最打动人心的，正是这种极致的“抽离感”。仅仅距离繁华的蔚蓝海岸十几公里，你却仿佛穿越了几个世纪。这里没有纪念品商店的喧嚣，没有咖啡馆外成排的座位，甚至没有一辆自行车。你的世界被简化为抬头可见的一线蓝天，脚下坚实的石板，和下一个转角可能出现的、令人屏息的峡谷全景。它逼迫你慢下来，用最原始的方式——双脚，去丈量、去探索。这份沉静，这份与现代社会格格不入的“不便”，恰恰是它最珍贵的魅力。你不是来“参观”一个景点，而是来短暂地“居住”在一段被遗忘的时间里。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩永悬崖小镇`} />
                <InfoRow label="英文名称" value={`Peillon`} />
                <InfoRow label="正式名称" value={`Peillon`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`佩永`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是蔚蓝海岸地区唯一完全禁止汽车通行、且从未被现代化开发破坏的中世纪山顶村落，堪称一座凝固在石头里的时光胶囊。`} />
                <InfoRow label="建筑特色" value={`整个村庄如同一个巨大的、依着陡峭山体生长出来的灰白色蜂巢，房屋层层叠叠，由无数拱廊、窄巷和石阶垂直串联，屋顶几乎就是上一户人家的地基。`} />
                <InfoRow label="建筑风格" value={`典型的中世纪普罗旺斯防御性山村风格，采用本地石灰岩，建筑紧凑以御敌和抵御密史脱拉风，随处可见拱形门廊、带有小窗的厚重石墙以及用彩石装饰的墙面。`} />
                <InfoRow label="文化价值" value={`它不仅保存了完整的中世纪建筑肌理，更留存了一种与世隔绝的、以步行为尺度的生活节奏与社区氛围，是体验南法原始山地文化的活化石。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄公共区域全天开放。内部的主要景点圣索沃尔教堂开放时间较为灵活，通常为上午9点至下午6点，冬季可能提前至下午5点关闭，周日及宗教节日期间上午可能只对礼拜者开放。建议游览前查看当地旅游局官网或致电确认。`} />
              <InfoRow label="门票价格" value={`进入佩永村庄本身完全免费。参观圣索沃尔教堂免费，但欢迎自愿捐赠以支持教堂维护。村庄内无任何收费的博物馆或景点。`} />
              <InfoRow label="地址" value={`Place de la République, 06440 Peillon, France`} />
              <InfoRow label="交通方式" value={`从最近的国际机场尼斯蔚蓝海岸机场出发，最为便捷。首先，在机场乘坐公交或打车前往尼斯火车站。然后，在尼斯火车站乘坐开往文蒂米利亚方向的TER（区域快铁），在“Peille-Peillon”站下车，车程约30分钟，班次每小时1-2班。关键一步：出火车站后，你需要换乘前往山上的乡村巴士（Car）或提前预约出租车，因为火车站位于山谷，而村庄高悬在400米的山崖上。巴士班次稀少（工作日约每天4-5班，周日更少），车程约15分钟蜿蜒上山。强烈建议出发前在尼斯火车站或旅游局查询并记好精确的巴士时刻表，错过一班可能意味着漫长的等待。自驾是最灵活的方式，但车辆只能停在村庄入口外的免费停车场，然后步行进入这个禁止汽车通行的石头迷宫。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`佩永的故事，始于恐惧，也成于恐惧。公元10世纪，当北欧维京人的长船在地中海沿岸劫掠，萨拉森海盗的威胁无处不在时，沿海的居民开始向险峻的内陆山区撤退。佩永所在的这块巨大岩脊，三面都是令人眩晕的悬崖，仅有一条狭窄的脊背与山脉相连，天然就是一个易守难攻的堡垒。最早的文献记载出现在970年，它被描述为“Castrum Pillonis”——一个设防的城堡。最初，人们可能只是在山顶建造了瞭望塔和简陋的围墙，但渐渐地，为了安全和社群聚集，越来越多的石屋紧贴着岩壁和彼此，像藤蔓一样向下、向四周生长，形成了我们今天看到的、令人惊叹的垂直结构。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪盛期，佩永成为了附近佩耶（Peille）领主的属地。它的战略位置使其在地区纷争中扮演了重要角色。村庄唯一的入口处修建了高大的防御门和吊桥（如今已不见，但门洞犹存），狭窄曲折的巷子本身就是防御工事的一部分，入侵者即使攻入大门，也会在迷宫般的巷道中被分割、伏击。宗教战争时期，这里成为了新教徒和天主教徒争夺的据点，石墙上或许还残留着那个动荡年代的无声记忆。你可以想象，在那些没有电灯的夜晚，村民们依靠油灯和星光，在仅容一人通过的石阶上行走，风声鹤唳，每个人都警惕着来自黑暗山谷的任何异动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，随着大航海时代开启，海岸线的安全得到保障，经济重心重新向富饶的平原和海岸转移。从18世纪开始，像许多南法山村一样，佩永经历了缓慢但持续的人口外流。年轻人去往更繁华的尼斯、芒通寻找机会，许多石屋逐渐空置、荒芜。它仿佛被时间遗忘，静静地坐在山崖上，日渐衰老。这种“被遗忘”在某种程度上成了一种幸运。它错过了工业革命，错过了二十世纪的旅游开发热潮，也因此奇迹般地躲过了破坏性的现代化改造。它的衰败，保存了最原始的风貌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在20世纪中后期。一些厌倦都市的艺术家、作家和寻求宁静的避世者，偶然发现了这座几乎被遗弃的“天空之城”。他们被其原始的美感和绝对的宁静震撼，开始以极低的价格购买并小心翼翼地修复那些濒临倒塌的石屋。他们的修复工作有着近乎考古学家的严谨，使用传统材料和工艺，不安装刺眼的霓虹灯，不拓宽巷弄以通车。正是这群最早的“外来守护者”，确立了佩永禁止汽车通行的传统，保住了它灵魂般的静谧。如今，村子里常住居民不过百余人，他们中有的是回归的祖辈后代，有的是来自世界各地的隐士，共同守护着这份珍贵的遗产。当你走过那些门口放着精心打理盆栽的石头小屋时，你走过的不仅是一条路，更是一段从恐惧到庇护，从遗弃到被重新珍视的悠长史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味佩永，强烈建议你安排一整个下午加一个清晨的时间，最好能住上一晚。理想的抵达时间是下午三四点之后，这时一日游的游客大多已经离开，村庄重新回归宁静。整个游览没有所谓的“标准路线”，核心在于漫无目的的迷失。但可以从村庄唯一的入口“圣门”开始，像一个中世纪归家的村民一样拾级而上，依次探访老喷泉广场、核心的圣索沃尔教堂，然后放任自己在纵横交错的“ calades ”（鹅卵石铺就的窄巷）中穿行，不断向高处探索，每一个转角都可能是一个全新的景观画框。黄昏时分，务必找一个面西的高处，看夕阳将整个村庄和远方的大海染成金色。第二天清晨，在村民醒来之前，去感受被晨露打湿的石板路和空无一人的巷弄，那将是完全不同的体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、防滑的徒步鞋或运动鞋，这里的石阶陡峭且不规则，高跟鞋在这里毫无用武之地。
村庄内没有ATM机，仅有的小餐馆和可能遇到的工艺品摊主大多只接受现金（欧元），上山前务必在尼斯或火车站取好现金。
由于公共交通班次极少，如果计划一日游，请务必精确计算巴士往返时间，最稳妥的方式是自驾或预约出租车，并预留充足的步行探索时间。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从村庄入口的古老喷泉广场开始，用手触摸那从狮头石雕中汩汩流出的清凉山泉水，这是几个世纪以来村民生活的起点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主阶梯向上，在圣索沃尔教堂前的小平台驻足，转身回望，你会第一次看到山谷在你脚下铺展开的壮阔全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开教堂厚重的木门，让眼睛适应内部的昏暗，然后寻找那些15世纪的弗拉芒风格壁画，在静谧中想象昔日的宗教生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧面钻进一条看起来几乎不能通人的拱形小巷，任由狭窄的通道引领你向上，感受墙壁挤压出的凉意和脚下石板的光滑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在村庄的最高点附近，寻找那些被居民用鲜花和绿植精心装扮的私人门廊与小角落，这是现代生活美学与古老石屋的温柔对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`根据口碑寻找那家没有招牌的家庭式餐厅，在爬满葡萄藤的露台上享用一顿用本地食材烹制的晚餐，等待灯火在深谷中星星点点亮起。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果留宿，一定要在夜深人静时走出住所，在完全没有光污染的天空下，看银河是如何在这座石头城堡的剪影上缓缓移动。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄全景最佳观景台`}</h4>
                  <p className="text-sm text-gray-700">{`位于村庄最西侧、靠近古老墓地附近的一处天然岩石平台。建议在日落前黄金一小时抵达，光线柔和，能拍出村庄灰白色石头染上暖金、背后层峦叠嶂的史诗感全景，用长焦镜头可以压缩空间，突出建筑与山体的肌理。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`窄巷光影捕捉点`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条东西走向的狭窄“calade”，在上午或下午阳光能斜射入巷子时拍摄。站在巷子的一端，利用两侧高墙形成的天然画框，等待一位居民或猫咪走过，捕捉阳光勾勒出的身影和拉长的影子，故事感极强。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣索沃尔教堂门廊逆光人像`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光从教堂入口对面建筑的缝隙中射入，站在教堂厚重的木门内，向外拍摄站在门口光晕中的人物剪影，古老的石门洞成为完美的自然相框，充满宗教仪式感和岁月感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`星空与村庄夜景`}</h4>
                  <p className="text-sm text-gray-700">{`如果你在此留宿，深夜前往停车场附近的空地。使用三脚架，将镜头对准山崖上的村庄，以几盏昏黄的居民灯光为点缀，进行长时间曝光，可以拍出星空下村庄静谧沉睡的梦幻景象，感光度不宜过高以控制噪点。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`细节特写之彩石墙面`}</h4>
                  <p className="text-sm text-gray-700">{`在村庄中部的一些老建筑外墙上，寻找用彩色鹅卵石镶嵌出的几何图案或家族标志。利用侧光（清晨或傍晚），近距离拍摄这些历经风雨却依然清晰的石艺细节，它们诉说着古老的手工艺传统和家族历史。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民和他们的私有空间时，请务必保持尊重，先微笑示意或征得同意，避免长焦镜头窥探窗户和庭院，这里是他们的家而非影棚。`}</li>
                <li>• {`由于巷子极其狭窄，使用广角镜头可以拍出富有张力的透视效果，但要注意避免镜头畸变过度破坏建筑线条的庄严感。`}</li>
                <li>• {`夜间拍摄星空时，请保持绝对安静，关闭一切光源（包括手机屏幕），以免打扰已入睡的居民，这里的宁静比一张完美的照片更珍贵。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济型特色民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择村庄中心一栋由17世纪石屋改造的民宿“Le Nid de Peillon”，房间小巧但充满韵味，粗粝的石墙裸露着，女主人会在早晨为你端来自制的果酱和可颂，露台正对山谷，性价比极高。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中档精品体验`}</h4>
                  <p className="text-sm text-green-800">{`入住“L‘Auberge de la Madone”酒店，它由相连的几栋古老房屋组成，房间风格各异，有的带原始壁炉，有的有私人小阳台俯瞰深涧。酒店附属的餐厅是当地美食标杆，让你足不出户尽享南法风味。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端隐世之选`}</h4>
                  <p className="text-sm text-yellow-800">{`预订村庄边缘独栋修复的“Maison des Artists”整套房子，这里曾是某位画家的故居，拥有私密的多层露台和完整的厨房，仿佛拥有了一个临时的中世纪之家，特别适合家庭或寻求绝对宁静的伴侣。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山间疗愈居所`}</h4>
                  <p className="text-sm text-purple-800">{`如果不介意住在山下，距离停车场几分钟车程的“Domaine des Girelles”提供现代化的舒适套房和宽阔的泳池，在一片橄榄园中，你可以享受现代设施，同时随时步行上山探索古镇，结合了便利与宁静。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`村庄内的住宿数量极其有限，往往只有几家，在夏季（6-9月）和公共假期必须提前数月预订，临时寻找几乎不可能。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所有位于村庄内部的住宿都需要你提着行李步行一段石阶路，店家通常不提供搬运服务，因此行李务必从简，一个大号行李箱在这里会是一场噩梦。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`无论选择哪里，治安都完全不用担心，这里如同一个与世隔绝的大家庭，夜不闭户或许夸张，但绝对是欧洲最安全的地方之一。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开佩永，重新把车开上通往尼斯的高速公路，窗外的风景瞬间切换回那个车水马龙、色彩明快的现代世界。这种强烈的反差，让你恍惚觉得刚刚过去的十几个小时像一场清醒的梦。你会怀念那种耳朵里只有风声和自己的心跳声的寂静，怀念那种需要用身体去攀爬、去探索的专注，怀念那种在转角与一丛盛放的三角梅或一位微笑的老先生不期而遇的简单喜悦。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个万物皆可快速抵达、信息爆炸的时代，佩永的存在，像一颗固执的、拒绝被磨圆的石子。它提醒着我们，有一种价值叫做“缓慢”，有一种美源于“限制”。它不通汽车，所以保存了宁静；它难以抵达，所以筛选了旅人；它拒绝改变，所以留住了时间。来到这里，你不是为了收集又一个“打卡”地标，而是为了让自己从高速运转的轨道上暂时脱轨，体验一种以“步行”和“感知”为单位的、更本真的人类生活节奏。它或许不会给你视觉上的极度奢华震撼，但它赠与你的那份内心的宁静与对时间的重新感知，是任何奢华酒店都无法提供的。对于每一位厌倦了景点清单、渴望真正沉浸的旅人来说，佩永不是旅程中的一个点，它本身就是一趟完整的、通往内心平静的旅程。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
