import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒙桑石村 Monsanto ｜ 一座“长”在巨石里的魔幻山村 - 最佳欧洲景点',
  description: '车子还在盘山公路上绕行，远远地，你就看到了它——那不像一个村庄，更像一座被巨人随意丢下的石头堡垒，几块房子大小的花岗岩诡异地堆叠在山巅，而人类的居所就像藤壶一样，顽固地附着在石缝之间。第一印象是强烈的不真实感，仿佛闯入了某个奇幻电影的布景。 停好车，双脚真正踏上那些被数百年脚步打磨得光滑温润的石板路...',
}

export default function MonsantoRockVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '蒙桑图巨石村', href: '/attractions/monsanto-rock-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒙桑图巨石村・Monsanto・葡萄牙・新伊达尼亚`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子还在盘山公路上绕行，远远地，你就看到了它——那不像一个村庄，更像一座被巨人随意丢下的石头堡垒，几块房子大小的花岗岩诡异地堆叠在山巅，而人类的居所就像藤壶一样，顽固地附着在石缝之间。第一印象是强烈的不真实感，仿佛闯入了某个奇幻电影的布景。
停好车，双脚真正踏上那些被数百年脚步打磨得光滑温润的石板路时，感官才被彻底激活。空气里有股干燥的、混合着野生百里香和古老岩石的尘土气息。四周安静得只剩下风声，它穿过石缝和窄巷，发出低沉的呜咽。阳光炽烈，在白色房屋的墙壁和巨大的灰色花岗岩上切割出无比锐利的光影界线。你会看到，一堵墙就是一块完整的巨石，一个屋顶被另一块倾斜的巨石覆盖，烟囱从石头的顶端滑稽又可爱地伸出来。这里没有“景观”，因为生活本身就是景观：老奶奶坐在自家由巨石构成的“前厅”里剥豆子，她的厨房天花板可能就是一块倾斜了千万年的岩壁。
蒙桑石最打动人心的，正是这种极致的“共生”。它不是把石头搬来建造房屋，而是把生活编织进了石头既有的、不可思议的形态里。在这里，自然不是背景板，而是房东、框架和牢不可破的邻居。你感受到的是一种沉默的、坚韧的智慧，一种在匮乏中诞生的、与天地谈判后达成的诗意妥协。行走其中，你每一步都踩在历史、地质学和人类生存意志的三重奏上。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子还在盘山公路上绕行，远远地，你就看到了它——那不像一个村庄，更像一座被巨人随意丢下的石头堡垒，几块房子大小的花岗岩诡异地堆叠在山巅，而人类的居所就像藤壶一样，顽固地附着在石缝之间。第一印象是强烈的不真实感，仿佛闯入了某个奇幻电影的布景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，双脚真正踏上那些被数百年脚步打磨得光滑温润的石板路时，感官才被彻底激活。空气里有股干燥的、混合着野生百里香和古老岩石的尘土气息。四周安静得只剩下风声，它穿过石缝和窄巷，发出低沉的呜咽。阳光炽烈，在白色房屋的墙壁和巨大的灰色花岗岩上切割出无比锐利的光影界线。你会看到，一堵墙就是一块完整的巨石，一个屋顶被另一块倾斜的巨石覆盖，烟囱从石头的顶端滑稽又可爱地伸出来。这里没有“景观”，因为生活本身就是景观：老奶奶坐在自家由巨石构成的“前厅”里剥豆子，她的厨房天花板可能就是一块倾斜了千万年的岩壁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`蒙桑石最打动人心的，正是这种极致的“共生”。它不是把石头搬来建造房屋，而是把生活编织进了石头既有的、不可思议的形态里。在这里，自然不是背景板，而是房东、框架和牢不可破的邻居。你感受到的是一种沉默的、坚韧的智慧，一种在匮乏中诞生的、与天地谈判后达成的诗意妥协。行走其中，你每一步都踩在历史、地质学和人类生存意志的三重奏上。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒙桑图巨石村`} />
                <InfoRow label="英文名称" value={`Monsanto`} />
                <InfoRow label="正式名称" value={`Monsanto`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`新伊达尼亚`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座自史前时代就有人居住，并被誉为“葡萄牙最葡萄牙的村庄”的传奇山城。`} />
                <InfoRow label="建筑特色" value={`人类建筑与巨型花岗岩浑然天成的共生奇迹，房屋、街道和墙壁直接从巨石中“生长”出来。`} />
                <InfoRow label="建筑风格" value={`原始粗犷的民间石砌建筑与自然巨石结合的独特风格，带有中世纪防御性村落的布局特点。`} />
                <InfoRow label="文化价值" value={`活生生的人类适应并敬畏自然的教科书，展现了葡萄牙腹地坚韧而充满智慧的乡土文化。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村落本身全天24小时开放。村内的历史遗迹如城堡遗址（Castelo de Monsanto）通常开放时间为每天上午9:00至日落前后（夏季约19:00，冬季约17:00）。小教堂和博物馆的开放时间较为灵活，建议在游客中心确认。请注意，恶劣天气（如强风）时，山顶城堡区域可能临时关闭。`} />
              <InfoRow label="门票价格" value={`进入蒙桑石村本身完全免费。参观山顶的城堡遗址通常也不收取门票。村内若有个别小型私人博物馆或展览可能会收取少量费用（约1-3欧元）。`} />
              <InfoRow label="地址" value={`Monsanto, 6060-091 Idanha-a-Nova, Portugal`} />
              <InfoRow label="交通方式" value={`蒙桑石村位置较为偏远，最适合自驾前往。从里斯本出发：沿A23高速向东北方向行驶，在“Fundão”或“Idanha-a-Nova”出口下高速，随后转入蜿蜒的乡间公路，全程约280公里，需3.5-4小时。从波尔图出发：距离更远，约400公里，车程接近4.5小时。最近的火车站是卡什特卢布兰库站，但从那里到村子仍需约1小时车程的出租车。公共交通极其不便，班次稀少，强烈不建议依赖。如果自驾，请租用适合乡间和坡路的车辆，并提前下载好离线地图，因为部分路段信号可能不稳定。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂蒙桑石的石头故事，你得把时间轴拉得无限长。早在遥远的史前时期，伊比利亚半岛的先民就发现了这座花岗岩山丘的战略价值。那些巨大的岩石提供了天然的洞穴和庇护所，山顶视野开阔，易守难攻。考古学家在这里发现了青铜时代的遗迹，那些最初的定居者，想必也是在同样的风声与星空下，依靠着这些冰冷的巨石获取安全感。石头，从一开始就是这片土地的守护神与沉默的见证者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到罗马时代。精于工程与秩序的罗马人来了，他们不仅在此建立定居点，还在岩石上刻下了铭文，并留下了一条通往山顶的道路遗迹。石头见证了帝国的兴衰。随后，摩尔人的足迹也抵达了这里，他们强化了山顶的防御，留下了属于他们的文化层。但真正赋予蒙桑石今天我们所见之雏形的，是中世纪的圣殿骑士团。十二世纪，葡萄牙的第一位国王阿方索·恩里克斯将这片土地授予圣殿骑士团，以巩固王国的东部边疆。骑士们在此修建了坚固的城堡，山腰的村落围绕着城堡发展起来，形成了那迷宫般的、用于防御的狭窄巷道。那个时代，每一块突起的岩石都是天然的城墙，每一道石缝都可能成为伏击点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`蒙桑石的命运与战争紧密相连。它的城堡在历史上经历过多次围攻，最著名的大概是十九世纪初拿破仑军队入侵时的抵抗。但比战争更传奇的，是一个关于“钟”的民间故事。传说在一次围城中，村民食物耗尽，只剩下一头小牛和一点谷物。一位聪明的农妇将谷物喂给小牛，然后将它从城墙推下。牛摔死后，敌人看到它胃里饱满的谷物，误以为守军粮草充足，便撤围而去。为了庆祝，村民们敲响了一口钟。后来，这口钟被制成了村里教堂的圣钟，成了坚韧与智慧的象征。这个故事如此生动地定义了蒙桑石的精神：在绝境中，用仅有的资源，演出最精彩的戏码。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入相对和平的现代，蒙桑石的独特性并没有被遗忘。1938年，在一次全国性的评选活动中，它被授予了“葡萄牙最葡萄牙的村庄”这一至高荣誉。这个称号并非仅仅因为它的古老或风景，更因为它凝聚了这个民族性格中深沉、坚韧、与土地紧密相连的那一部分。石头房子里的生活依然继续，虽然年轻人不断流向城市，但总有人留下，守护着这些与巨石共生的家园。今天的蒙桑石，不再需要防御外敌，它防御的是时间的同质化，它像一个活化石，静静地向每一个来访者诉说着：看，人类曾这样与地球紧密相拥地生活过。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览蒙桑石是一场缓慢的、需要全身心投入的徒步探索。建议你在清晨或傍晚抵达，以避开正午的酷热，并捕捉到最迷人的光线。整体游览至少需要预留4-5小时。路线本质上是环形的爬升与下降：从山脚下的主入口停车场开始，向上穿过迷宫般的村落核心区，最终抵达山顶的城堡废墟，然后从另一侧较平缓的小径下山。这样的安排能让你先沉浸于村落的生活肌理，最后以城堡的壮阔全景作为高潮和终点。节奏一定要慢，多停下来触摸石头，探看小巷，和坐在门口的村民微笑点头。这里不适合匆忙的打卡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对防滑、支撑性好的徒步鞋或运动鞋，村里的石阶常年被踩得光滑，且坡度陡峭，高跟鞋或平底凉鞋是“自杀”行为。夏季请携带充足的水和防晒用品，村落里遮阴处不多，且山路消耗很大。尊重当地居民的隐私，拍照时如果门窗敞开、内有居民，请先微笑示意或避免拍摄，这里首先是他们的家。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主广场“拉戈广场”出发，先别急着上山，去游客中心（如果开着）拿张简单的地图，听听工作人员用口音浓重的英语讲讲村里的趣事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着“Rua da Cadeia”开始向上走，让自己的眼睛适应那些屋顶压着巨石、墙壁嵌进石缝的房屋，找找那间著名的“只有一个屋顶瓦片”的房子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在蜿蜒攀升的石阶小巷里迷一小段路，故意拐进那些看似不通的窄缝，你可能会发现一个隐藏的小花园，或者一只在石头上晒太阳的猫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`朝着山顶城堡遗迹的方向持续攀登，中途在“圣米格尔小教堂”稍作休息，这个罗马风格的小教堂本身就像是从岩石中凿出来的一样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终抵达山顶的城堡废墟，环绕残破的城墙走一圈，在呼啸的山风中，让目光越过无尽的平原和远山，这是属于征服者的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡另一侧相对平缓的小径下山，这条路会带你经过一些被遗弃的、半塌的石屋，感受时间在这里留下的另一种静默。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后回到村落较低的区域，找一家家庭式小餐馆（通常就设在某人的家里），点一份用传统陶罐炖煮的“葡萄牙炖菜”，犒劳自己。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前，再次漫步到村子边缘的观景点，看着夕阳的金光如何将每一块巨石和白色小屋点燃，村落逐渐变成一幅温暖的剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡废墟最高处的城墙缺口`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，将镜头对准山下如积木般散落的村落和远处无垠的平原，利用城墙的石块作为前景框架，拍出苍凉与壮丽并存的史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从“Rua do Forno”小巷仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光刚照亮巷子时，蹲低身体，向上拍摄两侧房屋夹着一线天的陡峭石阶，石阶的尽头往往压着一块巨大的悬岩，构图极具压迫感和故事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`村子东南侧外围的土路上`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚的侧逆光下，从这里可以拍到整个村落依偎在巨大花岗岩山体上的全景，岩石的纹理和房屋的白色在暖光中层次分明，是明信片般的经典视角。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某户人家门口的石磨盘或陶罐旁`}</h4>
                  <p className="text-sm text-gray-700">{`利用这些充满生活气息的物件作为前景，焦点对准后方嵌在巨石中的蓝色门或窗，捕捉自然与人文结合的微小细节，照片会充满温度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`山顶城堡入口的拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光直射时，站在拱门内侧向外拍，可以拍出强烈的高反差剪影效果，人物的轮廓与门外明亮的天空、山景形成鲜明对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`巨石和白色房屋的反差较大，建议拍摄时注意曝光，可以略微欠曝以保留高光细节，后期再提亮阴影。航拍在这里能获得震撼效果，但务必注意山间的强风，并绝对尊重居民隐私，避免在住宅区上空低空悬停。多尝试黑白模式，能更好地突出岩石的质感和光影的戏剧性。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式首选`}</h4>
                  <p className="text-sm text-blue-800">{`住在村子里由百年石屋改造的客栈，房间的墙壁可能就是原始的岩壁，晚上能听到风声在石头间穿梭的细语，清晨被穿过木窗棂的阳光和远处教堂的钟声唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`乡野宁静之选`}</h4>
                  <p className="text-sm text-green-800">{`住在山脚下几分钟车程的农庄民宿，享受宽敞的田园空间，主人可能会带你参观他的橄榄园，晚上在院子里能看到毫无光污染的璀璨银河。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感体验`}</h4>
                  <p className="text-sm text-yellow-800">{`距离村子稍远一些（约15分钟车程）的现代设计酒店或精品乡村酒店，在体验了原始的石头村落一天后，回到充满设计感的舒适空间享受一个热水澡和一顿精致的晚餐，是完美的节奏转换。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端历史氛围`}</h4>
                  <p className="text-sm text-purple-800">{`若愿意驱车更远（约40分钟）至附近历史城镇如卡什特卢布兰库，那里有由古老修道院或宫殿改建的豪华酒店，提供顶级的服务和深厚的历史氛围。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`若选择住在村内，请做好心理准备，设施可能比较基础（但通常干净舒适），停车需要在村口，然后步行一小段石板路携带行李入住。村子夜晚非常安静，几乎没有夜生活，是真正“隐居”的体验。旺季（春、秋季的周末）村内住宿非常抢手，务必提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开蒙桑石很久以后，你脑子里挥之不去的，可能不是某一块具体的石头，而是一种感觉。那是一种巨大的“确定感”。那些花岗岩，历经数亿年而存在，人类来了，没有试图去粉碎或征服它，而是学习着依偎它，利用它，甚至在信仰中崇拜它。这种关系里有一种古老的谦卑和惊人的创造力。它让你思考，我们现代人所追求的“改造自然”，是否在某种程度上，让我们失去了这种与万物深刻联结的能力和智慧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求平滑、快速、高效的世界里，蒙桑石是一个刺眼而美好的“异物”。它不便利，不舒适，不符合现代生活的任何标准模板。但正是这种“不符合”，让它拥有了无可替代的价值。它是一面镜子，照见我们祖先如何在匮乏中开出诗意之花；它也是一座灯塔，提醒着在钢筋水泥森林中迷失的我们，还有一种更本质、更坚韧、更与大地呼吸同步的生活可能性。它不仅仅是一个旅游目的地，更是一次对“生存”本质的哲学叩问。每一位热爱深度游的旅人，都应该来感受一次这种被巨石拥抱的震撼，这趟旅程，最终会变成一次对你内心“地基”的探寻。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/batalha-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴塔利亚修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Batalha Monastery</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belem-tower-lisbon" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝伦塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belém Tower</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viseu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu</p>
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
