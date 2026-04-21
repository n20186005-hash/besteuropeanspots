import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '兰达佐 Randazzo｜火山熔岩雕刻的黑色宝石，聆听埃特纳的心跳 - 最佳欧洲景点',
  description: '车子缓缓驶进兰达佐，第一眼的感觉不是惊艳，而是一种沉静的震撼。仿佛闯入了一部老电影的黑白片场，但眼前的黑，是有温度和质感的。阳光在这里变得很克制，它洒在那些由巨大黑色石块砌成的墙壁上，不是反射，而是被温柔地吸收，让石头表面泛出一种介于深灰与墨绿之间的幽光。空气里有种很特别的味道——一丝淡淡的、干燥的',
}

export default function RandazzoSicilyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '西西里岛兰达佐镇', href: '/destinations/italy' },
            { label: '兰达佐', href: '/attractions/randazzo-sicily' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`兰达佐・Randazzo・意大利・西西里岛兰达佐镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子缓缓驶进兰达佐，第一眼的感觉不是惊艳，而是一种沉静的震撼。仿佛闯入了一部老电影的黑白片场，但眼前的黑，是有温度和质感的。阳光在这里变得很克制，它洒在那些由巨大黑色石块砌成的墙壁上，不是反射，而是被温柔地吸收，让石头表面泛出一种介于深灰与墨绿之间的幽光。空气里有种很特别的味道——一丝淡淡的、干燥的火山尘土的气息，混杂着从老面包店飘出来的烤杏仁饼的甜香，还有某个院落里柠檬树和迷迭香交织的清新。耳朵里最先捕捉到的是马蹄声，“哒哒哒”地回荡在狭窄的巷弄里，原来镇上还有人用马车代步，那声音衬着远处埃特纳火山若有若无的轰鸣背景音，瞬间就把你拉进了另一个时空维度。
这里不像那些被游客宠坏的西西里海边小镇，它很安静，甚至有些内向。它的美是内向的，需要你慢下脚步，俯下身去触摸。你会看到穿着黑色毛衣的老奶奶，就坐在自家门前的黑色熔岩台阶上，慢悠悠地择着豆子，她的银发和黑色的背景形成一幅永恒的肖像。街道的名字都很有趣，“黑石街”、“熔岩巷”，直白得可爱。你用手指划过墙壁，那种粗糙、多孔、冰冷的触感，会直接告诉你：这些石头，来自地下炽热的深处，曾在岩浆河中奔腾，如今却安静地守护着寻常人家的炊烟。这就是兰达佐最打动人心的魅力——它把一场场灾难的遗产，化作了日常生活的基石，把毁灭性的力量，变成了庇护所的材料。在这里，恐惧被转化成了美，一种深沉、厚重、带着故事感的暗色之美。
走在主街“Corso Umberto I”上，两旁的黑色宫殿沉默矗立，阳台上却怒放着鲜红的天竺葵，这种色彩的冲撞充满了生命力。当地人打招呼的声音短促而温暖，他们习惯了生活在世界上最活跃的火山脚下，脸上有一种你在大城市里罕见的、与命运和解后的平静与豁达。你会发现，火山不仅是背景，它就是生活本身。咖啡馆的闲聊里会自然地带出“上次喷发时……”，地图上会标记出不同年份的熔岩流边界。这里的核心魅力，就是一种“与龙共眠”的哲学，以及在这种哲学下孕育出的、无比扎实且独具一格的生活艺术与建筑诗篇。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子缓缓驶进兰达佐，第一眼的感觉不是惊艳，而是一种沉静的震撼。仿佛闯入了一部老电影的黑白片场，但眼前的黑，是有温度和质感的。阳光在这里变得很克制，它洒在那些由巨大黑色石块砌成的墙壁上，不是反射，而是被温柔地吸收，让石头表面泛出一种介于深灰与墨绿之间的幽光。空气里有种很特别的味道——一丝淡淡的、干燥的火山尘土的气息，混杂着从老面包店飘出来的烤杏仁饼的甜香，还有某个院落里柠檬树和迷迭香交织的清新。耳朵里最先捕捉到的是马蹄声，“哒哒哒”地回荡在狭窄的巷弄里，原来镇上还有人用马车代步，那声音衬着远处埃特纳火山若有若无的轰鸣背景音，瞬间就把你拉进了另一个时空维度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里不像那些被游客宠坏的西西里海边小镇，它很安静，甚至有些内向。它的美是内向的，需要你慢下脚步，俯下身去触摸。你会看到穿着黑色毛衣的老奶奶，就坐在自家门前的黑色熔岩台阶上，慢悠悠地择着豆子，她的银发和黑色的背景形成一幅永恒的肖像。街道的名字都很有趣，“黑石街”、“熔岩巷”，直白得可爱。你用手指划过墙壁，那种粗糙、多孔、冰冷的触感，会直接告诉你：这些石头，来自地下炽热的深处，曾在岩浆河中奔腾，如今却安静地守护着寻常人家的炊烟。这就是兰达佐最打动人心的魅力——它把一场场灾难的遗产，化作了日常生活的基石，把毁灭性的力量，变成了庇护所的材料。在这里，恐惧被转化成了美，一种深沉、厚重、带着故事感的暗色之美。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在主街“Corso Umberto I”上，两旁的黑色宫殿沉默矗立，阳台上却怒放着鲜红的天竺葵，这种色彩的冲撞充满了生命力。当地人打招呼的声音短促而温暖，他们习惯了生活在世界上最活跃的火山脚下，脸上有一种你在大城市里罕见的、与命运和解后的平静与豁达。你会发现，火山不仅是背景，它就是生活本身。咖啡馆的闲聊里会自然地带出“上次喷发时……”，地图上会标记出不同年份的熔岩流边界。这里的核心魅力，就是一种“与龙共眠”的哲学，以及在这种哲学下孕育出的、无比扎实且独具一格的生活艺术与建筑诗篇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`兰达佐`} />
                <InfoRow label="英文名称" value={`Randazzo`} />
                <InfoRow label="正式名称" value={`Randazzo`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`西西里岛兰达佐镇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座直接生长在埃特纳火山熔岩之上的千年古镇，被誉为“埃特纳火山黑色女儿”，是见证人类与自然力量共存与抗争的活化石。`} />
                <InfoRow label="建筑特色" value={`几乎整个老城区的街道、教堂、宫殿和民居，均由本地开采的黑色玄武岩（火山熔岩石）切割垒砌而成，形成独一无二的暗色建筑肌理。`} />
                <InfoRow label="建筑风格" value={`诺曼-哥特式与加泰罗尼亚-哥特式建筑风格为主导，并因全部采用黑色火山岩建材，呈现出一种肃穆、坚毅且极具地域辨识度的混搭风貌。`} />
                <InfoRow label="文化价值" value={`展现了西西里岛内陆山区的灵魂，是火山文化、中世纪城市布局和顽强社区精神的完美载体，其存在本身就是一首关于敬畏与坚韧的史诗。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。主要教堂（圣玛丽亚、圣尼古拉、圣马丁）开放时间一般为上午9:00至下午1:00，下午4:00至晚上7:00，但各教堂时间略有浮动，夏季可能延长。市立博物馆开放时间为周二至周日上午9:00至下午1:00，下午3:00至6:00。周一多数室内景点闭馆。重要宗教节日（如复活节）期间，教堂有特殊仪式和开放安排。`} />
              <InfoRow label="门票价格" value={`漫步中世纪老城区免费。进入各主要教堂免费，但欢迎捐赠以支持维护。市立“加埃塔诺-萨拉扎罗”考古与火山学博物馆门票约3欧元。某些特殊展览或教堂珍宝室可能额外收费约2欧元。65岁以上长者及18岁以下青少年通常有折扣。`} />
              <InfoRow label="地址" value={`Piazza Municipio, 1, 95036 Randazzo CT, Italy`} />
              <InfoRow label="交通方式" value={`最近的主要机场是卡塔尼亚-丰塔纳罗萨机场。从机场出发，最便捷的方式是先乘坐Alibus机场巴士或出租车到卡塔尼亚中央火车站，车程约20分钟。在卡塔尼亚火车站，乘坐前往里帕斯托或陶尔米纳方向的环埃特纳铁路。前往兰达佐的火车班次不算密集，每天大约5-6班，车程约1小时40分钟。建议提前在Trenitalia官网或车站查询确切时刻表并购票。另一种选择是从卡塔尼亚乘坐SAIS巴士，但班次更少。自驾是最灵活的方式，沿A18高速公路往墨西拿方向，在“Fiumefreddo”出口下，再沿SS120公路行驶约30分钟即可抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲兰达佐的故事，你就得从埃特纳火山开始讲起。这片土地的历史，就是一部不断被火山灰掩埋，又不断从火山灰里重生的循环史诗。早在古希腊和罗马时期，这里就有人类聚落，但真正让兰达佐登上历史舞台的，是在公元9世纪以后。阿拉伯人统治西西里时，看中了这个位于火山北坡、阿尔坎塔拉河与萨拉索河交汇处的战略位置，它像一个天然的堡垒。后来诺曼人来了，他们驱逐了阿拉伯人，并在11-12世纪开始有规划地建设这座城镇，赋予了它最初的中世纪城市格局。那些巨大的黑色石头，就从附近的古熔岩流上开采，既坚固又方便获取，成了上天赐予的免费建材。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "兰达佐的黄金时代是在中世纪晚期。因为它远离海岸，不易受海盗袭击，又坐拥肥沃的火山土壤（一旦冷却，火山灰是极好的肥料），农业和商贸都很繁荣。更重要的是，它成了西西里岛上阿拉贡王室和后来的西班牙统治者的心头好，甚至一度被考虑作为岛上的首都。你可以想象，在十四、十五世纪，这座黑色的城镇里，汇集了来自西班牙的贵族、本地的拉丁裔居民、希腊正教社区以及少量的犹太社区，不同文化的交融在宗教建筑上留下了深刻的烙印。城里最重要的三座教堂——献给圣玛丽亚、圣尼古拉和圣马丁——分别代表了当时城镇内三个主要教区和社会分区，它们像三颗黑色的钻石，镶嵌在城市的不同角落，至今仍主导着天际线。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，火山的阴影从未远离。兰达佐的历史档案里，充满了关于地震和火山喷发的记录。最致命的一次打击发生在1669年，那次埃特纳有史以来最猛烈的喷发之一，炽热的熔岩流如同一条愤怒的火龙，一路向南吞噬了数十个村庄，直逼卡塔尼亚。虽然兰达佐这次奇迹般地逃过一劫（熔岩流在城郊分叉了），但遮天蔽日的火山灰和持续的地震，让城市元气大伤。居民们没有逃离，他们清理废墟，用新的、更黑更坚硬的熔岩石，把房子盖得更加牢固。每一次灾难，都像是给这座城市又淬火一次，让它变得更加坚韧。黑色的石头，从一种实用选择，逐渐演变成了一种身份象征和精神图腾：我们来自火山，我们由火山构成，我们与火山共存。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "近代以来，兰达佐经历了战争的创伤（二战期间这里是重要的德军防线，遭受了猛烈轰炸），也经历了乡村人口流失的阵痛。但它骨子里的韧性再次发挥了作用。当世界开始迷恋埃特纳火山作为旅游目的地时，兰达佐没有盲目地把自己包装成一个观光小镇。它反而更加珍视自己那份粗粝、真实和沉默的黑色气质。它成了火山学家、地质爱好者和寻找authentic西西里文化的旅行者的秘密基地。今天的兰达佐，依然保持着中世纪的城市脉络，那些黑色的墙壁里，开着时髦的品酒屋（用火山土种植的葡萄酿的酒别有风味）、家庭经营的传统陶瓷店（图案里少不了火山），以及用古老食谱制作点心的甜品店。它的历史，从未被书写在光鲜的纸页上，而是被一锤一凿地，刻进了每一块黑色的火山石里。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天给兰达佐，才能真正体会它的节奏。最好在上午九点左右抵达，这时阳光正好能把黑色建筑照亮，小镇刚刚苏醒，氛围最为宁静。游览节奏一定要慢，这不是一个打卡景点清单的地方，而是一个需要你用脚步丈量、用手触摸、用心感受的城镇。建议先从位于市政广场的旅游信息中心开始，拿一份地图，然后以广场为起点，按照一个顺时针的环形路线，依次探访三座主教堂和它们所代表的街区，中间穿插漫步那些迷人的小巷。中午留出时间享受一顿漫长的午餐。下午可以参观博物馆，并沿着部分保存完好的中世纪城墙漫步，最后在傍晚时分，找一个可以眺望埃特纳火山的观景点，结束这充满质感的一天。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适的平底鞋，这里的石板路古老而凹凸不平，高跟鞋会是灾难。注意教堂中午有较长的午休闭门时间（约下午1点到4点），规划参观时要避开这个时段。尊重当地居民的生活空间，拍照时尽量避开正面拍摄在门口休息的老人，一个微笑和问候能打开更多友善之门。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从市政广场的“黑色狮子”喷泉出发，感受小镇中心的生活气息，看当地人聚集闲聊`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着用巨大黑色石板铺就的翁贝托一世大道向北缓行，让你的目光流连于两旁那些装饰着精美石雕窗的贵族宫殿`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进一条安静得能听见自己脚步声的熔岩小巷，伸手触摸两边房屋那冰凉、多孔且凹凸不平的黑色墙壁`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏入圣玛丽亚教堂那略显低矮的黑色大门，瞬间被内部华丽的木制天花板和金色圣像画所带来的温暖与辉煌所包围`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`坐在圣尼古拉教堂外的台阶上，什么都不做，只是看着对面阳台上鲜艳的花朵与漆黑的石墙进行一场生动的对话`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那家飘着杏仁香气的百年老糕点店“Sciara”，买一块用火山地区特有杏仁制作的“Pasta Reale”杏仁糖糕`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上古镇西北角残存的阿拉贡城墙段，从这里可以清晰地看到不同年代、色泽各异的熔岩流像黑色的河流般凝固在远处的山坡上`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前驱车或步行前往城外的“Belvedere”观景台，看着夕阳的金光为巨大的埃特纳火山锥披上红衣，而脚下的兰达佐则渐渐沉入一片宁静的深蓝墨色之中`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣玛丽亚教堂广场侧方仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出教堂黑色玄武岩钟楼凌厉的线条，将前景的本地老人或自行车纳入构图，能增添故事感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“熔岩巷”光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入狭窄巷弄时，捕捉光线在两侧黑石墙上切割出的明暗对比几何图案，人物可作为一个剪影走在光带中`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`阿拉贡城墙遗址远眺`}</h4>
                  <p className="text-sm text-gray-700">{`使用长焦镜头，从城墙的垛口框架式构图，聚焦远处埃特纳火山的山顶烟云，而前景模糊的黑色石头能强调出空间感和距离感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`古镇屋顶全景`}</h4>
                  <p className="text-sm text-gray-700">{`尝试联系广场周边一些有露台的咖啡馆或餐厅（如“Il Gattopardo”），从高处俯拍，捕捉一片由黑色瓦顶、教堂钟楼和远处火山构成的层次丰富的全景`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`本地生活静物特写`}</h4>
                  <p className="text-sm text-gray-700">{`在老作坊的窗前，拍摄那些摆放在黑色窗台上的彩色陶瓷（主题常是火山或圣徒）、一盆红色天竺葵或晾晒的番茄，色彩与黑色背景的对比极具张力`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尝试用黑白模式拍摄，能极致地突出兰达佐建筑的纹理、质感和光影戏剧。清晨和傍晚的“黄金时刻”光线柔和，能缓解黑色建筑在正午强光下的沉重感，拍出更丰富的细节。拍摄居民前，请务必先微笑示意并征得同意，这里不是露天影棚，他们是生活的主人。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`熔岩之家民宿`}</h4>
                  <p className="text-sm text-blue-800">{`一座由17世纪黑色熔岩宫殿改造的民宿，主人会带你去看古老的地下酒窖，早餐在种满柠檬树的内庭享用，能听到教堂的晨钟`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`埃特纳观景农庄`}</h4>
                  <p className="text-sm text-green-800">{`位于城镇外围山坡上的家庭式农庄，房间宽敞朴素，每个窗户都是一幅活的埃特纳火山油画，晚上可以品尝农家自制的ricotta奶酪和红酒`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`历史中心精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`由一栋中世纪贵族宅邸修复而成，完美保留了原始的黑色石拱门和木梁，现代设计的家具与古老石墙形成有趣对话，位置极其核心`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`隐居修道院酒店`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在稍远一点宁静乡村的前修道院建筑内，拥有一个绝美的回廊花园，氛围静谧至极，是彻底放松和冥想的好去处，开车进城仅需5分钟`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（七月、八月及复活节期间）务必提前数周甚至数月预订，选择很少。住在老城中心固然方便，但可能需要拖着行李走一段石板路，且有教堂钟声；选择城外住宿则更静谧，视野开阔，但需依赖交通工具。无论住在哪里，夜晚散步回住处时，抬头看看星空，你会理解为何古人会对这座火山又敬又畏。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开兰达佐的时候，我的手上似乎还残留着那些黑色石头的凉意，鼻腔里也仿佛还有那种混合了火山尘与烤杏仁的复杂气味。这个地方教给我的，远不止于建筑之美或历史之深。它教会我一种关于“脆弱与坚韧”的辩证法。人类文明何其脆弱，一场火山的怒火就足以将其掩埋；但人类的精神又何其坚韧，他们可以用灾难的余烬，一砖一瓦地重建家园，并且建得更具特色，更富尊严。兰达佐的黑色，不是绝望的颜色，而是沉淀的颜色，是吸收了所有恐惧、汗水、祈祷与希望之后，凝结出的一种大地之色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求光鲜亮丽、滤镜美颜的世界里，兰达佐的存在像一句低沉而坚定的提醒。它不讨好，不喧哗，只是静静地伫立在火山脚下，用它全部的黑色身躯，诉说着一个关于根源、关于共存、关于在无常中寻找恒常的故事。每一位热爱深度游的旅人，都应该来一次兰达佐。不是为了收集又一个景点，而是为了来上一堂生动的地理历史哲学课，来触摸一种截然不同的生活质地。当你把额头贴在那冰凉的火山岩墙壁上时，你或许能听见，地球的心跳，和人类世代传承的脉搏，在这片黑色的土地上，达成了某种深沉的和解与共鸣。这，就是兰达佐独一无二、直击心灵的力量。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/aragon-castle-ischia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊斯基亚阿拉贡城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aragonese Castle of Ischia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castelsardo-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡斯特尔萨多（悬崖上的海防要塞）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castelsardo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/paestum-temples" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕埃斯图姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Paestum</p>
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
