import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '泰尔斯海灵岛布兰达里斯灯塔 Brandaris｜荷兰现存最古老的灯塔，守护瓦登海千年航线 - 最佳欧洲景点',
  description: '说实话，在登上泰尔斯海灵岛之前，你很难想象一座灯塔能成为整个岛屿跳动的心脏。我的第一眼，是从渡轮摇晃的甲板上看到的——茫茫瓦登海的灰蓝色水雾尽头，一个红白相间、坚实得像块老姜糖的塔影，稳稳地扎在地平线上。下了船，跟着三三两两骑着自行车的岛民往镇子深处走，海风的味道复杂极了：咸腥的海水气、码头边炸鱼摊',
}

export default function BrandarisLighthousePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '布兰达里斯灯塔', href: '/attractions/brandaris-lighthouse' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`布兰达里斯灯塔・Brandaris Lighthouse・荷兰・泰尔斯海灵岛（Terschelling）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在登上泰尔斯海灵岛之前，你很难想象一座灯塔能成为整个岛屿跳动的心脏。我的第一眼，是从渡轮摇晃的甲板上看到的——茫茫瓦登海的灰蓝色水雾尽头，一个红白相间、坚实得像块老姜糖的塔影，稳稳地扎在地平线上。下了船，跟着三三两两骑着自行车的岛民往镇子深处走，海风的味道复杂极了：咸腥的海水气、码头边炸鱼摊飘来的油脂香，还有从沙丘那边吹过来的、带着野花和干草气息的清风。所有这些气息，最后都汇聚在那座灯塔脚下。
走近了，才发现它的“古老”不是破败，而是一种被时光浸润透了的沉稳。塔身的红漆有些斑驳，露出底下深色的砖石。四周安静得能听见风吹过塔顶风向标的细微吱呀声，还有远处海鸥像小孩哭喊一样的鸣叫。它不像那些被精心供奉起来的博物馆展品，它就活在这里。你会看见穿着雨靴的渔民推着自行车从它旁边经过，自然地抬头瞥一眼塔顶，仿佛在跟一个老邻居打招呼；孩子们在它基座周围的小广场上追逐嬉戏。这座灯塔，早已深深织入了岛民日常生活的肌理。
最打动人的，或许是它那份沉默的守护感。站在它投下的短短阴影里，向北望是浩瀚的北海，向南是被称为“世界花园”的瓦登海浅滩。千百年来，无数船只凭着它窗口那束稳定旋转的光，在变幻莫测的浅滩、沙洲和潮汐间找到安全航道。它不是一座冰冷的建筑，它是一个承诺，一个在黑暗和风暴中永不熄灭的“我在这里”的承诺。这种人类对抗自然无常的倔强与恒心，构成了它最核心的魅力。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`说实话，在登上泰尔斯海灵岛之前，你很难想象一座灯塔能成为整个岛屿跳动的心脏。我的第一眼，是从渡轮摇晃的甲板上看到的——茫茫瓦登海的灰蓝色水雾尽头，一个红白相间、坚实得像块老姜糖的塔影，稳稳地扎在地平线上。下了船，跟着三三两两骑着自行车的岛民往镇子深处走，海风的味道复杂极了：咸腥的海水气、码头边炸鱼摊飘来的油脂香，还有从沙丘那边吹过来的、带着野花和干草气息的清风。所有这些气息，最后都汇聚在那座灯塔脚下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，才发现它的“古老”不是破败，而是一种被时光浸润透了的沉稳。塔身的红漆有些斑驳，露出底下深色的砖石。四周安静得能听见风吹过塔顶风向标的细微吱呀声，还有远处海鸥像小孩哭喊一样的鸣叫。它不像那些被精心供奉起来的博物馆展品，它就活在这里。你会看见穿着雨靴的渔民推着自行车从它旁边经过，自然地抬头瞥一眼塔顶，仿佛在跟一个老邻居打招呼；孩子们在它基座周围的小广场上追逐嬉戏。这座灯塔，早已深深织入了岛民日常生活的肌理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是它那份沉默的守护感。站在它投下的短短阴影里，向北望是浩瀚的北海，向南是被称为“世界花园”的瓦登海浅滩。千百年来，无数船只凭着它窗口那束稳定旋转的光，在变幻莫测的浅滩、沙洲和潮汐间找到安全航道。它不是一座冰冷的建筑，它是一个承诺，一个在黑暗和风暴中永不熄灭的“我在这里”的承诺。这种人类对抗自然无常的倔强与恒心，构成了它最核心的魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`布兰达里斯灯塔`} />
                <InfoRow label="英文名称" value={`Brandaris Lighthouse`} />
                <InfoRow label="正式名称" value={`泰尔斯海灵岛布兰达里斯灯塔`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`泰尔斯海灵岛（Terschelling）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`荷兰现存最古老且仍在运作的灯塔，是瓦登海世界遗产区无可替代的导航灵魂。`} />
                <InfoRow label="建筑特色" value={`一座敦实的八角形砖石塔楼，塔身刷着标志性的白漆与红色横条，顶部是绿色的铜制穹顶和灯室。`} />
                <InfoRow label="建筑风格" value={`荷兰文艺复兴风格与实用主义航海建筑的结合。`} />
                <InfoRow label="文化价值" value={`它不仅是导航工具，更是数个世纪以来北海渔民、商船船员心中“家”的象征和精神图腾。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`灯塔内部仅限参加导览团参观，导览团通常在每年4月至10月的周二和周四下午1点至4点整点发团，每次参观约45分钟。具体日期和团队名额需提前在泰尔斯海灵岛旅游局官网（VVV）查询并预订。外部区域及灯塔基座广场全天24小时可免费自由参观。`} />
              <InfoRow label="门票价格" value={`成人票：5欧元。12岁以下儿童及持有博物馆卡者免费。门票费用包含灯塔守护人（或向导）的现场讲解，需在导览团开始前于集合点现场购买。`} />
              <InfoRow label="地址" value={`Brandaris, 8881 EG West-Terschelling, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发，乘坐火车（Sprinter或Intercity）前往吕瓦登（Leeuwarden）火车站，车程约2小时。在吕瓦站转乘前往哈灵根（Harlingen）港口的接驳巴士或火车，车程约30分钟。从哈灵根港口搭乘前往泰尔斯海灵岛西端（West-Terschelling）的渡轮（Rederij Doeksen公司运营），渡轮航程约45分钟至2小时（快慢船区别），班次密集，建议提前在线购票。抵达西端码头后，布兰达里斯灯塔是镇上最显眼的地标，步行约10分钟即可抵达其脚下。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`布兰达里斯的故事，要从大海的愤怒说起。早在它矗立之前，泰尔斯海灵岛所在的这片海域，就是出了名的“船只坟场”。复杂的潮汐、移动的沙洲和频繁的风暴，让从波罗的海前往北海的商船队吃尽苦头。于是，在1323年，岛上修建了第一座木结构的导航塔，人们以守护航海者的圣徒“圣布兰达里斯”为其命名。但这最初的守望非常短暂，一场无情的大火在不久后就将木塔吞噬。大海需要更坚固的守望者。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到1548年，人们用砖石重建了灯塔。这一次，它挺立得更久，见证了荷兰“海上马车夫”黄金时代的开启，无数满载香料、瓷器的东印度公司船只从它的光芒指引下安然通过。然而，北海的狂风巨浪和战争阴云从未远离。在1666年的英荷战争中，著名的“霍姆斯篝火”事件让岛上的村庄几乎毁于一旦，但这座砖石灯塔却奇迹般地幸存了下来，成为废墟中唯一的屹立者，继续履行它的职责。你可以想象，在那些黑暗的战后夜晚，那束光对幸存岛民来说意味着怎样的慰藉和希望。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`灯塔的形态也并非一成不变。如今的样貌定型于19世纪的一次重大改建。为了适应更强大的光源和更稳定的结构，塔身被加固，内部安装了更先进的旋转透镜装置，外部也刷上了如今标志性的红白横条，以便在白天也成为一个醒目的航标。一代又一代的灯塔守护人（起初常常是当地船长或他们的后代）居住在与塔楼相连的小屋里，每天日落前沿着那狭窄的螺旋石阶爬上爬下，为油灯添油、擦拭透镜、给发条装置上弦。他们的生活节奏完全由潮汐和天色决定，孤独而庄严。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入20世纪，电力取代了油灯，自动化系统取代了守塔人日复一日的攀爬。灯塔内部那精密的百年机械或许不再需要人力驱动，但“布兰达里斯”这个名字所承载的职责从未改变。它经历了两次世界大战的炮火，见证了从帆船到巨型货轮的航海技术革命，也亲历了它守护的这片瓦登海从繁忙航道转变为受保护的联合国世界自然遗产。它的角色，从一个纯粹的实用导航工具，悄然演变为一个跨越时间的文化符号，一个关于坚守、方向与归航的永恒寓言。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整体验布兰达里斯灯塔的灵魂，我强烈建议你安排一整天的时光在泰尔斯海灵岛上。上午乘坐早班渡轮抵达，趁着日光清澈、游客未至，先去亲近灯塔的外观和周边宁静的街道。下午参加导览团深入塔楼内部，聆听它机械的心跳和历史的故事。傍晚则留给沙丘和海滩，从自然的角度回望这位守护者。这样的节奏让你既能感受它作为地标的宏伟，又能体会它融入岛屿日常的平和，最后在壮丽的北海日落中，完成这次深度拜访。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`岛上天气说变就变，即使是夏天也务必带一件防风防雨的外套，塔顶的风力可能是地面的数倍。
灯塔内部导览团名额非常有限，强烈建议抵达前就在岛屿旅游局官网预订，旺季时现场基本没有空位。
攀登灯塔内部螺旋阶梯需要一定体力且空间逼仄，穿着舒适的平底鞋，有幽闭恐惧症或严重恐高症的游客需谨慎选择入内。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一大清早从西端码头下船，别急着找车，先沿着码头旁那条满是斑斓小木屋的安静小巷慢悠悠地朝红白塔影晃过去`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在灯塔脚下那片被磨得光滑的砖石广场上转一圈，用手掌触摸那些被海风侵蚀出孔洞的古老砖块，感受几个世纪的风雨痕迹`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参加下午的导览团，跟着守护人走进那扇厚重的木门，在幽暗与机油味中开始攀登那盘旋而上的狭窄石阶`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在塔顶灯室屏住呼吸，看阳光穿透巨大的菲涅尔透镜折射出彩虹般的光晕，并仔细听向导讲解那套百年黄铜机芯如何像钟表一样精准运行`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔顶的室外环绕平台探出身去，顶着呼啸的海风360度俯瞰整个岛屿、星罗棋布的瓦登海浅滩和远处如线的本土海岸`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后，去灯塔对面那家有着巨大玻璃窗的“Brandaris Café”坐坐，点一杯醇厚的荷兰咖啡和一块苹果派，看着灯塔的影子在桌上慢慢拉长`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`租一辆自行车向北骑行不到十分钟，穿过沙丘小径，把自己丢进宽阔无人的诺德海斯特兰海滩，面朝北海彻底放空`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时回到灯塔东侧的沙丘高处，找一个长椅坐下，看着夕阳把白色的塔身染成金黄，最后点燃塔顶那盏自动亮起的、穿越时空的灯光`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`灯塔脚下仰角特写`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的午后，站在塔基西南侧，用广角镜头贴近地面向上拍摄，将红白条纹的塔身与旋转的蓝天白云一同纳入构图，充满视觉张力`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`东侧沙丘全景框景`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，骑车到灯塔东面约500米的沙丘小径上，利用沙丘野草作为前景框架，拍摄灯塔矗立在传统瓦片屋顶小镇与广阔沙地之间的全景`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`西端老港口倒影`}</h4>
                  <p className="text-sm text-gray-700">{`无风的清晨或黄昏，退潮时在西端港口的木制栈桥附近，寻找静止的水洼，低机位拍摄灯塔及其周围色彩柔和的小屋在水中的完美倒影，画面宁静而富有诗意`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`塔顶俯瞰迷宫小镇`}</h4>
                  <p className="text-sm text-gray-700">{`参加导览登上塔顶室外平台后，将相机镜头从防护网孔中伸出，垂直向下或斜角拍摄，捕捉西端小镇红色屋顶犹如积木般排列的几何美感与远处海平面的交汇`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`夜间长曝光光轨`}</h4>
                  <p className="text-sm text-gray-700">{`在灯塔点亮后的深蓝色时刻（日落后约半小时），在广场南侧稳定三脚架，用小光圈进行长时间曝光（10-30秒），捕捉灯塔光束旋转扫过夜空的动态光弧与静态星点`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行在灯塔及小镇居民区上空受到严格限制，需提前查阅当地法规并远离人群，尊重岛民隐私。`}</li>
                <li>• {`瓦登海地区光线散射强，常伴有薄雾，拍摄时使用偏振镜（CPL）可以有效增强色彩饱和度和对比度，让红白塔身更突出。`}</li>
                <li>• {`拍摄当地人或在咖啡馆内取景前，一个友好的微笑和简单询问（用荷兰语说“Mag ik？”意为“我可以吗？”）会为你赢得更多善意和自然生动的画面。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`灯塔守护者隔壁`}</h4>
                  <p className="text-sm text-blue-800">{`预订那几家就在灯塔广场旁边、由昔日守塔人辅助用房改造的家庭旅馆，晚上枕着轻微的海浪声入眠，清晨在第一批海鸥的叫声中醒来`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`沙丘间的隐秘小屋`}</h4>
                  <p className="text-sm text-green-800">{`在岛屿中部靠近森林和沙丘的区域，租一间设施齐全的复古风格度假木屋，享受被自然包围的绝对宁静，每天骑车几分钟就能到达灯塔和海滩`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`港口边的设计师公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`在西端码头附近一栋翻新的老仓库里，找到拥有超大落地窗和工业风设计的精品公寓，白天看渔船进出港，晚上欣赏灯塔光束在窗棂上滑过的光影秀`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`真正的岛民生活`}</h4>
                  <p className="text-sm text-purple-800">{`通过本地租房平台预订小镇居民区里一栋典型弗里斯兰风格的花园小屋，在邻居自行车铃声中醒来，自己去街角面包店买新鲜出炉的克罗凯特，体验数日“临时岛民”的日常`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`泰尔斯海灵岛是荷兰人钟爱的夏季度假胜地，7-8月的住宿非常紧俏，价格也最高，务必提前至少3-4个月预订。春季（5-6月）和初秋（9月）游客较少，天气仍不错，是更舒适的选择。岛上治安极好，几乎可以夜不闭户，但绝大多数住宿不提供日常清洁服务，需自理。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开布兰达里斯灯塔好多天了，我眼前时常还会浮现那红白相间的塔身，不是明信片上那种鲜艳的影像，而是带着午后阳光温度和海风湿气的、活生生的存在。这座灯塔最奇妙的地方在于，它用一种近乎固执的恒常，对抗着时间的流动和自然的无常。世界在变，船从木帆变成了钢铁巨轮，导航从星辰变成了GPS，但它还在那里，每天黄昏亮起，清晨熄灭，像一个亘古不变的呼吸。在一切都追求效率、变化快得让人头晕的今天，这种“不变”反而成了一种巨大的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你也渴望在旅途中找到一种笃定，一种能让内心安静下来的坐标，那就来泰尔斯海灵岛看看布兰达里斯吧。它不仅仅是一个景点，更是一堂关于“守护”的无声之课。它守护航线，也守护着一种慢节奏的、与潮汐共舞的生活哲学。站在它面前，你会明白，有些东西值得用几个世纪去建造，去维护，去传递。那束旋转的光，照亮的不只是海上的夜路，或许也能照亮我们这些现代游子心中，那条关于归宿和方向的、有些模糊了的航程。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kampen-hanza-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    坎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">坎彭汉萨老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kampen Hanseatic Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/gouda-cheese-market" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    豪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">豪达奶酪小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gouda</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/harlingen-frisian-port-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈灵根</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Harlingen</p>
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
