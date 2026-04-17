import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '黑森公园 Hessenpark｜穿越时空的村庄：拯救百栋德国半木屋的露天博物馆 - 最佳欧洲景点',
  description: '第一眼看到黑森公园，你绝不会想到这是一座“博物馆”。它没有冰冷恢弘的入口大厅，也没有检票闸机带来的疏离感。你更像是偶然闯进了一个被时光遗忘的山谷村庄。脚下是碎石和泥土压实的小路，路旁歪歪扭扭的木栅栏上，野蔷薇开得正好。空气里有股好闻的混合气味——刚切割下来的木屑的清香，从某户人家烟囱里飘出的、烧苹果',
}

export default function HessenparkOpenAirMuseumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '黑森公园', href: '/attractions/hessenpark-open-air-museum' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`黑森公园・Hessenpark Open Air Museum・德国・新乌尔姆`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到黑森公园，你绝不会想到这是一座“博物馆”。它没有冰冷恢弘的入口大厅，也没有检票闸机带来的疏离感。你更像是偶然闯进了一个被时光遗忘的山谷村庄。脚下是碎石和泥土压实的小路，路旁歪歪扭扭的木栅栏上，野蔷薇开得正好。空气里有股好闻的混合气味——刚切割下来的木屑的清香，从某户人家烟囱里飘出的、烧苹果木的微甜烟味，还有远处马厩传来的一点点干草和牲口的气息。这味道，瞬间就让你从21世纪抽离了出来。
沿着主路往里走，那些半木结构的房子就一栋接一栋地出现在你眼前。它们太生动了。黑色的、饱经风霜的木梁在白色或淡黄色的泥灰墙上勾勒出千变万化的几何图案，菱形、十字形、人字形，每一栋都像是主人当年随性又骄傲的签名。有的房子倾斜得厉害，仿佛一个喝多了苹果酒的老汉，憨态可掬地靠在邻居肩上打盹。窗户小小的，窗台上却挤满了天竺葵和秋海棠，开得泼辣又热闹。你听得到声音——不是导游的喇叭声，而是真正的村庄协奏曲：铁匠铺里传来有节奏的叮当敲击，风车磨坊的巨大木轮在溪水推动下发出缓慢而沉重的吱呀声，还有某个院子里，一位穿着传统围裙的老奶奶正摇着古老的纺车，木梭飞转的嗡嗡声像一首催眠曲。
最打动人的，是这里的“活气”。这不是一个摆放古董的橱窗。面包房真的在用老式砖石烤炉烤制酸面包，那股焦香能把你勾引进屋；陶艺作坊里，匠人满手泥巴，正在拉坯，你可以坐在长凳上看着，直到一个陶罐慢慢成形；学校教室里，黑板上的花体字德文课文还清晰可见，木头长桌被无数孩子的手肘磨得发亮。你会忽然明白，这个公园保存的，远不止是房子。它保存的是一个完整的、有呼吸、有温度的生活现场。在这里，历史不是教科书上遥远的章节，而是你指尖能触摸到的粗糙木纹，是你鼻尖萦绕的烟火气，是你耳边回荡的、几个世纪未曾断绝的劳作声响。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到黑森公园，你绝不会想到这是一座“博物馆”。它没有冰冷恢弘的入口大厅，也没有检票闸机带来的疏离感。你更像是偶然闯进了一个被时光遗忘的山谷村庄。脚下是碎石和泥土压实的小路，路旁歪歪扭扭的木栅栏上，野蔷薇开得正好。空气里有股好闻的混合气味——刚切割下来的木屑的清香，从某户人家烟囱里飘出的、烧苹果木的微甜烟味，还有远处马厩传来的一点点干草和牲口的气息。这味道，瞬间就让你从21世纪抽离了出来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`沿着主路往里走，那些半木结构的房子就一栋接一栋地出现在你眼前。它们太生动了。黑色的、饱经风霜的木梁在白色或淡黄色的泥灰墙上勾勒出千变万化的几何图案，菱形、十字形、人字形，每一栋都像是主人当年随性又骄傲的签名。有的房子倾斜得厉害，仿佛一个喝多了苹果酒的老汉，憨态可掬地靠在邻居肩上打盹。窗户小小的，窗台上却挤满了天竺葵和秋海棠，开得泼辣又热闹。你听得到声音——不是导游的喇叭声，而是真正的村庄协奏曲：铁匠铺里传来有节奏的叮当敲击，风车磨坊的巨大木轮在溪水推动下发出缓慢而沉重的吱呀声，还有某个院子里，一位穿着传统围裙的老奶奶正摇着古老的纺车，木梭飞转的嗡嗡声像一首催眠曲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是这里的“活气”。这不是一个摆放古董的橱窗。面包房真的在用老式砖石烤炉烤制酸面包，那股焦香能把你勾引进屋；陶艺作坊里，匠人满手泥巴，正在拉坯，你可以坐在长凳上看着，直到一个陶罐慢慢成形；学校教室里，黑板上的花体字德文课文还清晰可见，木头长桌被无数孩子的手肘磨得发亮。你会忽然明白，这个公园保存的，远不止是房子。它保存的是一个完整的、有呼吸、有温度的生活现场。在这里，历史不是教科书上遥远的章节，而是你指尖能触摸到的粗糙木纹，是你鼻尖萦绕的烟火气，是你耳边回荡的、几个世纪未曾断绝的劳作声响。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`黑森公园`} />
                <InfoRow label="英文名称" value={`Hessenpark Open Air Museum`} />
                <InfoRow label="正式名称" value={`Hessenpark Open Air Museum`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`新乌尔姆`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座为抢救和保存黑森州乡村建筑遗产而生的“建筑方舟”。`} />
                <InfoRow label="建筑特色" value={`汇集了超过100栋从黑森州各地原样搬迁、精心重建的古老半木结构房屋，构成一个功能完整的活态历史村落。`} />
                <InfoRow label="建筑风格" value={`以德国中部典型的半木结构（Fachwerk）建筑为主，涵盖了从17世纪到20世纪初的多种乡村与小镇建筑风格。`} />
                <InfoRow label="文化价值" value={`它不仅是一座建筑博物馆，更是一个保存了传统手工艺、农业生活和社群记忆的立体文化基因库。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`博物馆全年开放，但开放时间随季节变化。主要区域（露天部分与历史建筑）通常在3月至10月，每天上午9:00至下午6:00开放；11月至次年2月，开放时间缩短为上午10:00至下午5:00，且部分外围建筑和体验工坊可能仅在周末或预约后开放。请注意，每年的12月24日、12月25日和12月31日闭馆。建议行前务必在其官网核对最新时间表。`} />
              <InfoRow label="门票价格" value={`成人票价为10欧元。优惠票（学生、残疾人、团体等）价格为8欧元。家庭套票（2位成人+最多4名18岁以下儿童）为25欧元。6岁以下儿童免费。每年有数个博物馆开放日可免费入场，详情见官网公告。门票包含园区地图和大部分常规展览与讲解，部分特殊工作坊或体验活动需额外付费。`} />
              <InfoRow label="地址" value={`Hessenpark, Laubweg 5, 61267 Neu-Anspach, Germany`} />
              <InfoRow label="交通方式" value={`从法兰克福出发最为方便。从法兰克福中央火车站（Hauptbahnhof）搭乘区域快车（RB）或区域列车（RE）前往“Bad Homburg”站，车程约20分钟，班次频繁。抵达Bad Homburg后，在火车站外的公交枢纽换乘“57”路公交车（方向：Usingen Bahnhof），在“Hessenpark”站下车，公交行程约25分钟。全程算上换乘等待，约需1-1.5小时。自驾是最灵活的选择，从法兰克福市中心出发，沿A5高速公路北行，从“Friedberg / Ober-Mörlen”出口驶出，按路标指示行驶约15分钟即可到达，公园设有大型收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`黑森公园的故事，始于一个迫在眉睫的“失去”。时光倒回上世纪六七十年代的德国，那是一个经济奇迹（Wirtschaftswunder）如火如荼的年代。整个国家像一台开足马力的推土机，疯狂地奔向现代化。高速公路不断延伸，新城拔地而起，工业区迅速扩张。而在广大的乡村，古老的半木结构房屋被许多人视为落后、不便、不符合现代生活的“破房子”。它们成片地被推倒，为崭新的混凝土住宅和商业中心让路。那些雕着精美花纹的门楣、被几代人脚步磨出凹槽的门槛、冬暖夏凉的厚重墙壁，连同里面承载的家庭记忆和社群故事，眼看着就要化为瓦砾，彻底消失。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`就在这时，一位名叫约瑟夫·勒纳特的博士站了出来。他是一位充满远见和热忱的民俗学家和博物馆馆长。看着这些不可再生的文化遗产像沙滩上的城堡一样被潮水吞噬，他心痛不已。他意识到，仅仅拍照存档是远远不够的，必须采取一种更激进、也更彻底的方式——整体搬迁。一个大胆的构想在他脑中成形：能不能找到一个地方，像诺亚方舟一样，把这些即将被拆除的珍贵建筑“拯救”出来，集中重建，形成一个活生生的、可以供后世参观和研究的露天博物馆？这个想法得到了黑森州政府的支持。1974年，在陶努斯山脚下的一片广阔林地上，黑森公园的蓝图正式绘就。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的工程，无异于一场浩大而精细的外科手术。每一栋被选中的建筑，都先由专家进行详细的测绘和编号，然后像拆解一个巨型的积木模型一样，小心翼翼地将其分解：每一根主梁、每一块墙板、甚至每一片屋顶的瓦，都被标记好位置。然后，这些珍贵的“零件”被装上卡车，穿越黑森州的田野和森林，运送到新乌尔姆的这片新家园。重建的过程更是对技艺和耐心的极致考验。工匠们必须严格按照原貌，使用传统的工艺和材料，将这些离散的部件重新组装起来。墙面的泥灰要用手混合稻草来涂抹，木梁的榫卯要严丝合缝。这不仅仅是重建房屋，更是在复活一段凝固的时光。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`经过多年的建设和填充，这个曾经空旷的山谷，逐渐生长出了一个五脏俱全的村庄。这里有来自韦特劳的富农家宅，有来自奥登瓦尔德的山地磨坊，有来自莱茵高的小镇药房，也有来自北黑森草原的牧羊人小屋。它们按照地理来源和功能，被分成了不同的区域，仿佛一张微缩的黑森州文化地图。公园于1978年正式向公众开放。但它的故事并未结束，搬迁和重建工作一直持续至今，不断有新的“移民”建筑加入这个大家庭。如今，漫步其中，你看到的不仅是百栋老房子，更是一段关于抢救、关于珍视、关于在飞速变化的时代里如何锚定自身文化根脉的、充满温度与决心的历史。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略黑森公园的精髓，请务必安排一整天的时间（至少5-6小时）。建议在开园后半小时内抵达（比如夏季9：30），这时光线柔和，游客稀少，整个村庄仿佛刚从晨雾中苏醒，静谧而真实。游览节奏宜慢不宜快，这不是打卡景点，而是沉浸式体验。路线可以大致按顺时针进行，从游客中心获取地图后，先深入“老村”核心区感受生活气息，再向周边主题区域扩散，最后在傍晚时分回到中心地带，这时工坊可能歇业，但落日余晖下的村庄会呈现出另一番油画般的质感。这样的安排能让你由内而外，由细节到全景，完整地感受这个“活博物馆”的脉动。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免周末和德国公共假日前往，那时本地家庭游客众多，体验的静谧感会大打折扣。园内道路多为砂石和泥土路，请务必穿着舒适耐脏的步行鞋。部分工坊内的匠人非常乐于交流，但英语水平可能有限，一个微笑和简单的手势就能开启一段有趣的互动。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在游客中心拿一份德英双语地图，然后别急着往里冲，先在门口那栋被鲜花淹没的古老村舍前静静站一会儿，听一听屋檐下的风铃和远处隐约的鸡鸣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着主街的缓坡上行，让你的鼻子当向导，径直走进那间冒着炊烟的面包房，买一个刚出炉、还烫手的“黑森林面包”，边啃边看面包师用长木铲将新的面团送入砖窑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少半小时泡在铁匠铺和车轮匠作坊里，看火星如何在黝黑的铁砧上迸溅，闻着烧红的铁浸入冷水时升起的独特白烟，和老师傅用简单的德语单词加比划聊上几句。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进那条叫做“工匠巷”的小路，依次探访陶艺、纺织、木工和玩具制作工坊，不一定要消费，但一定要摸摸那些粗糙的陶土、光滑的纺锤和带着松木香的刨花。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在模拟的乡村学校教室里坐下，试着辨认黑板上的古体字母，然后去隔壁的乡村教堂，坐在朴素的木头长椅上，感受从彩色玻璃透进来的、静谧而神圣的光线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走向村庄边缘的农业区，看看那些古老的苹果品种果园和被精心维护的菜畦，如果运气好，还能碰上工作人员驾驶着复古的拖拉机进行演示。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上公园内的小山丘，那里有一座完整搬迁来的风车磨坊，不仅可以进入内部了解机械原理，更是俯瞰整个“村庄”全景、看红瓦屋顶在绿野中绵延的最佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到中心的村广场，找一张野餐长椅坐下，看着光影慢慢拉长，房屋的木框架在金色阳光下投下深邃的阴影，等待村庄渐渐归于平静。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄入口的拱形木门框`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，以门框为画框，拍摄内部蜿蜒的碎石小路和两侧色彩缤纷的木屋，营造强烈的纵深感与故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`风车磨坊前的斜坡草地`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，以巨大的风车叶片为前景，拍摄其背后沐浴在晨光或夕照中的整个村庄建筑群，构图宏大，富有层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`铁匠铺内部的工作瞬间`}</h4>
                  <p className="text-sm text-gray-700">{`利用从窗户射入的束状光线，聚焦于铁匠挥舞锤子的手臂和飞溅的火星，使用较慢的快门速度（注意防抖）可以拍出动态的轨迹，极具人文冲击力。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某栋半木屋转角处的特写`}</h4>
                  <p className="text-sm text-gray-700">{`寻找一面木梁图案特别精美、墙面斑驳有致的墙壁，在正午阳光直射时拍摄，强烈的明暗对比能极致凸显木材的纹理和历史沧桑感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`村广场的水井旁`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，以古老的水井和木桶为焦点，拍摄暖黄色灯光从周围小屋窗户透出的温馨场景，捕捉日夜交替时分的宁静与生活气息。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重隐私，拍摄工坊内匠人或扮演历史角色的工作人员时，最好先微笑示意并获得默许。室内光线通常较暗，建议使用大光圈镜头，并放心提高ISO，适当的噪点反而能增添复古质感。无人机飞行在公园区域是严格禁止的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨民宿之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在公园附近车程10分钟内的传统农庄改造的民宿，主人可能就曾是公园的志愿者，晚上能听他们讲述更多建筑背后的真实家族故事，早餐是自家农场的新鲜食材。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史体验`}</h4>
                  <p className="text-sm text-green-800">{`选择公园官方合作、由一栋18世纪搬迁来的牧师住宅改造的“历史客房”，家具陈设尽力还原旧貌，夜晚闭园后，你将独享一个静谧无比的百年时空。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代舒适酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在巴特洪堡（Bad Homburg）镇上的四星级设计酒店，享受现代化的便利与温泉疗愈，白天深入历史村庄，晚上回归优雅小镇生活，形成奇妙对比。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`法兰克福都市基地方案`}</h4>
                  <p className="text-sm text-purple-800">{`如果行程紧张，可选择住在法兰克福中央车站附近，搭乘城铁往返，虽然牺牲了一些沉浸感，但能最大化利用时间游览多元化的目的地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`公园周边纯属乡村环境，晚间非常安静，娱乐设施少，适合追求宁静和深度体验的旅者。治安极好。如果计划体验公园内的历史客房或参加特殊主题活动（如圣诞集市、丰收节），务必提前数月预订，这些独特体验极为抢手。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开黑森公园时，我的背包里没有多一件纪念品，但心里却好像被装得满满当当。那种感觉，不是看完一场盛大演出的兴奋，而更像是在一位睿智老人的家里待了一整天，听他慢慢讲完家族的老故事，心里充满了平静的温暖与感激。在这个一切都追求“新”和“快”的时代，这里固执地、却又无比温柔地为我们保留了一片“旧”与“慢”的净土。它告诉我们，真正的进步，不是粗暴地抹去过去，而是懂得如何与过去对话，如何从先人的智慧和生活的痕迹中，汲取继续前行的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些被精心包装的、千篇一律的旅游景点，如果你想知道在德国的钢铁、汽车和现代哲学之外，那片土地深处更朴实、更坚韧的心跳是什么样子，那么，请一定要来黑森公园。它不像科隆大教堂那样震撼苍穹，也不像新天鹅堡那样梦幻童话。它只是静静地把一百多个家的故事，摊开在阳光和风雨里，等你来读。在这里，你会触摸到德国精神的另一面——那种严谨到极致的守护，那种对家园和手艺的深情，以及那种相信“过去”值得被如此郑重搬迁、重建和传承的朴素信念。这不仅仅是一次游览，更像是一次对生活本质的温柔回归。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stolzenfels-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施托尔岑费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stolzenfels Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bamberg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班贝格老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bamberg Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/naumburg-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    瑙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">瑙姆堡大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Naumburg Cathedral</p>
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
