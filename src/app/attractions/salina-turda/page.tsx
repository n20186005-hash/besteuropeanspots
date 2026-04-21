import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图尔达盐矿 Salina Turda｜深入地心200米的赛博朋克盐矿游乐园 - 最佳欧洲景点',
  description: '朋友，想象一下，你在罗马尼亚特兰西瓦尼亚的阳光小镇上走着，路边是刷着鹅黄色油漆的普通房子。然后你按照导航拐进一条小路，面前出现一个毫不起眼的、像是上世纪工厂入口的低矮建筑。你买票，推开一扇厚重的门，走进一部老式电梯。当电梯门关上，开始以稳定的速度下降时，一种奇妙的剥离感开始了。光线变暗，温度骤降，空...',
}

export default function SalinaTurdaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '罗马尼亚', href: '/destinations/romania' },
            { label: '克卢日县，图尔达市', href: '/destinations/romania' },
            { label: '图尔达盐矿', href: '/attractions/salina-turda' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`图尔达盐矿・Salina Turda・罗马尼亚・克卢日县，图尔达市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，你在罗马尼亚特兰西瓦尼亚的阳光小镇上走着，路边是刷着鹅黄色油漆的普通房子。然后你按照导航拐进一条小路，面前出现一个毫不起眼的、像是上世纪工厂入口的低矮建筑。你买票，推开一扇厚重的门，走进一部老式电梯。当电梯门关上，开始以稳定的速度下降时，一种奇妙的剥离感开始了。光线变暗，温度骤降，空气中开始弥漫着一股洁净、微咸、带着矿物质感的气息——那是沉睡在地底千万年的盐的味道。电梯下降了足足120米，相当于40层楼。门再次打开时，你愣住了。
你仿佛一脚踏进了一部科幻电影的片场。眼前是一个巨大到让人失语的地下空洞，被精心设计的彩色灯光照得通明。暖黄的光勾勒出粗糙的、闪烁着晶体光芒的盐岩壁，冷蓝和紫色的光带则像血管一样，沿着现代感的步行廊桥和钢结构蔓延。你听到的不再是地上的车马喧哗，而是从深处传来的、空灵的回声——孩子们的嬉笑声、远处迷你高尔夫球撞壁的轻响、还有不知从哪个角落飘来的电子音乐低音。最超现实的景象在下方：在一个被称为“鲁道夫大厅”的巨型盐湖中央，人们正划着明黄色的小船，灯光在水面和盐壁上投下晃动迷离的倒影。这里不是冰冷的矿井，而是一个充满生气的、属于地心居民的“城市广场”。
当地人把这里当作一个绝妙的周末去处。你会在保龄球道边看到庆祝生日的一家人，在盐疗室里看到闭目养神的老人，在咖啡吧旁看到对着笔记本电脑工作的年轻人。这座古老的盐矿，早已超越了它最初的功能。它不再是劳动者挥洒汗水的黑暗之地，而成了一个庇护所，一个游乐场，一个能让任何人暂时逃离地表纷扰，在充满了盐分、负离子和奇幻光影的异度空间里，深深呼吸的奇迹之地。它的核心魅力，就在于这种极致的反差——古老的地质构造与先锋的未来想象，工业的粗粝骨骼与人文的温柔填充，共同谱写出一曲献给地心的狂想诗。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`朋友，想象一下，你在罗马尼亚特兰西瓦尼亚的阳光小镇上走着，路边是刷着鹅黄色油漆的普通房子。然后你按照导航拐进一条小路，面前出现一个毫不起眼的、像是上世纪工厂入口的低矮建筑。你买票，推开一扇厚重的门，走进一部老式电梯。当电梯门关上，开始以稳定的速度下降时，一种奇妙的剥离感开始了。光线变暗，温度骤降，空气中开始弥漫着一股洁净、微咸、带着矿物质感的气息——那是沉睡在地底千万年的盐的味道。电梯下降了足足120米，相当于40层楼。门再次打开时，你愣住了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你仿佛一脚踏进了一部科幻电影的片场。眼前是一个巨大到让人失语的地下空洞，被精心设计的彩色灯光照得通明。暖黄的光勾勒出粗糙的、闪烁着晶体光芒的盐岩壁，冷蓝和紫色的光带则像血管一样，沿着现代感的步行廊桥和钢结构蔓延。你听到的不再是地上的车马喧哗，而是从深处传来的、空灵的回声——孩子们的嬉笑声、远处迷你高尔夫球撞壁的轻响、还有不知从哪个角落飘来的电子音乐低音。最超现实的景象在下方：在一个被称为“鲁道夫大厅”的巨型盐湖中央，人们正划着明黄色的小船，灯光在水面和盐壁上投下晃动迷离的倒影。这里不是冰冷的矿井，而是一个充满生气的、属于地心居民的“城市广场”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人把这里当作一个绝妙的周末去处。你会在保龄球道边看到庆祝生日的一家人，在盐疗室里看到闭目养神的老人，在咖啡吧旁看到对着笔记本电脑工作的年轻人。这座古老的盐矿，早已超越了它最初的功能。它不再是劳动者挥洒汗水的黑暗之地，而成了一个庇护所，一个游乐场，一个能让任何人暂时逃离地表纷扰，在充满了盐分、负离子和奇幻光影的异度空间里，深深呼吸的奇迹之地。它的核心魅力，就在于这种极致的反差——古老的地质构造与先锋的未来想象，工业的粗粝骨骼与人文的温柔填充，共同谱写出一曲献给地心的狂想诗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`图尔达盐矿`} />
                <InfoRow label="英文名称" value={`Salina Turda`} />
                <InfoRow label="正式名称" value={`Salina Turda`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`克卢日县，图尔达市`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座拥有两千多年开采史的古老盐矿，从古罗马时期的“白色黄金”产地，演变为当今世界上独一无二、极具未来感的地下娱乐与文化中心。`} />
                <InfoRow label="建筑特色" value={`在巨大、深邃的古老盐矿洞穴中，巧妙嵌入了摩天轮、码头、迷你高尔夫、保龄球馆等现代娱乐设施，形成震撼的视觉反差。`} />
                <InfoRow label="建筑风格" value={`工业遗产与超现实主义未来风格的惊人融合。`} />
                <InfoRow label="文化价值" value={`见证了人类从单纯索取自然资源，到将工业遗迹创造性转化为公共艺术与疗愈空间的观念飞跃，是后工业时代遗产活化的典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，夏季（4月1日-9月30日）开放时间为上午9:00至晚上19:00，最后入场时间18:00；冬季（10月1日-3月31日）开放时间为上午9:00至下午16:00，最后入场时间15:00。每周一上午开放时间可能延后至10:00进行维护，重大节日如圣诞节、元旦可能缩短营业时间或闭馆，建议行前在官网核实。`} />
              <InfoRow label="门票价格" value={`标准成人票约为50罗马尼亚列伊（约合10欧元）。学生、老年人凭有效证件享有折扣票（约25-35列伊）。6岁以下儿童免费。家庭套票（2大2小）有优惠。门票包含所有地下区域的游览及部分娱乐设施（如划船）。额外的盐疗（Halotherapy）课程需单独付费预约。`} />
              <InfoRow label="地址" value={`Aleea Durgăului 7, Turda 401106, România`} />
              <InfoRow label="交通方式" value={`最近的国际机场是克卢日-纳波卡国际机场（CLJ）。从机场出发：最便捷的方式是乘坐出租车或网约车（Bolt/Uber），车程约45分钟，费用约80-100列伊。公共交通：从克卢日-纳波卡市中心火车站（Gara Cluj-Napoca）附近的公交站，乘坐频繁发车的区域性小巴（Autobuz）前往图尔达市，车程约30-40分钟。在图尔达市中心下车后，可转乘当地的2路公交车直达盐矿入口（“Salina Turda”站），或步行约20分钟上山。自驾前往有大型停车场，导航地址准确。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要说清楚图尔达盐矿的故事，我们得把时钟拨回两千多年前。那时候，这片土地属于达契亚人，他们早就知道脚下藏着宝贝。等到罗马帝国的军团征服这里，建立达契亚行省后，盐的开采就进入了快车道。古罗马人可是识货的，盐不仅是调味品，更是保存食物、支付军饷的硬通货，被誉为“白色黄金”。你可以想象，最初的矿工们是用最原始的工具，一点点敲下这些晶莹的块体，然后通过黑暗的通道运上地面。中世纪的文献里开始正式出现“图尔达盐矿”的记录，它成了匈牙利王国（当时特兰西瓦尼亚的统治者）的重要财源，矿井的结构也变得更加复杂，像一棵倒长入地底的巨树，分出许多枝杈。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到近代，盐矿的命运与地上的世界紧密相连。第二次世界大战期间，这些深邃、坚固的地下空间扮演了一个意想不到的角色——防空洞。当地居民为了躲避空袭，携家带口藏身于此，盐矿成了保护生命的避难所。冷战时期，它甚至被考虑用作潜在的物资储存基地。然而，随着现代工业化采盐技术的普及，这种古老的人工开采方式在1992年走到了尽头。矿井被封存，巨大的空洞重归寂静与黑暗，只有渗水慢慢积聚，形成了地下盐湖。它仿佛一个被遗忘的巨人，沉睡着，等待着下一个时代的召唤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在新世纪。当地政府没有选择让这个巨大的工业遗迹彻底荒废，或者仅仅作为一个枯燥的博物馆存在。他们做出了一个大胆得近乎疯狂的决定：将它改造成一个向公众开放的、多功能的地下乐园。这个想法本身就充满了想象力。设计师们面对的，是几个世纪矿工们一镐一锹挖出来的、形态不规则、遍布着开采痕迹的巨洞。如何在不破坏其原始地质风貌的前提下，植入现代功能？挑战巨大。据说，当第一批工程师和设计师带着图纸深入地下时，都被那种原始的尺度感和压迫感震撼了。但他们看到了另一种美——一种粗野的、混沌的、等待被点亮的潜能。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，一场精妙的手术开始了。他们没有试图去“装修”盐壁，而是用轻质的、可逆的钢结构，像搭积木一样在洞穴中构建出平台、楼梯和桥梁。他们把最先进的灯光系统引入，但不是用白炽灯把一切都照得惨白，而是用RGB智能灯光，根据不同区域的气质打光——温暖的琥珀色突出盐壁的纹理，冷静的蓝色勾勒建筑的轮廓，梦幻的紫色和粉色则营造游乐场的氛围。那个最出圈的、直径约20米的摩天轮，被小心翼翼地吊装进一个叫“弗朗茨·约瑟夫大厅”的竖井里，当它第一次在百米地下的盐晶体光芒中缓缓转动时，所有人都知道，奇迹诞生了。2010年，改造完成的图尔达盐矿向公众开放，瞬间引爆了人们的热情。它不再是一个关于“过去”的纪念碑，而成了一个关于“未来”的宣言，展示着人类如何用创意，让一段沉重的历史轻盈起舞。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要给图尔达盐矿一次完整的深度体验，我强烈建议你留出至少3到4个小时，并且尽量选择工作日的上午抵达。这样你能避开周末罗马尼亚本地家庭游的高峰，获得更宁静、更能沉浸其中的体验。整个路线是一个由浅入深、从历史到奇幻的渐进过程。先从最上层了解盐矿的“前世”，然后乘坐电梯垂直降落到核心游乐区，感受它的“今生”。节奏上，建议先快速通过历史展览区，把主要时间留给中层的“弗朗茨·约瑟夫大厅”和底层的“鲁道夫大厅”去探索、玩耍和发呆。最后，别忘了在特雷扎矿井的盐疗区安静地坐上一会儿，让富含矿物质和负离子的空气洗洗肺。这样的安排能让你逐步适应地下环境，情绪也被一步步带到最高点。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`地下常年恒温约10-12摄氏度，且湿度较高，务必带一件保暖外套，穿防滑舒适的鞋子，因为部分盐壁地面可能潮湿。
尽管灯光绚丽，但地下某些连接通道和楼梯照明较暗，注意脚下安全，看好小孩。
矿内大部分区域手机信号很弱甚至没有，请提前和同伴约定好碰面地点，享受这段难得的“离线”时光。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从地面入口穿过简短的采矿历史展览长廊，看看那些锈迹斑斑的老工具和发黄的照片，快速建立起对这里“前世”的初步印象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫不犹豫地走向那部老式工业电梯，感受它稳稳地将你带入地下120米深处时，耳膜因气压变化产生的轻微压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`电梯门打开后先别急着乱跑，站在“特雷扎矿井”的观景平台上凭栏远眺，让眼睛适应这宏大的尺度和迷幻的光影，拍下你的第一张震撼全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着蜿蜒的现代钢结构楼梯下行，去往“弗朗茨·约瑟夫大厅”，亲手摸一摸那冰凉湿润、闪烁着微小晶体光芒的盐岩壁，感受真实的质地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去坐一坐那个安置在巨大盐井中的摩天轮，在升至最高点时静静俯瞰下方如蚂蚁般微小的人和闪烁的码头灯光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向下走到最底层的“鲁道夫大厅”，在盐湖边的柜台租一艘亮色的小船，划到湖心，关掉桨，在绝对的静谧中仰望高达80米的盐穹顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`玩累了就去“特雷扎矿井”侧面的盐疗区，找一张舒适的躺椅坐下，深呼吸那带着微咸味的洁净空气，闭上眼睛听听地下世界独有的滴水回音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前记得去地下咖啡馆喝一杯热饮，暖暖身子，顺便回味一下刚才那趟宛如地心穿越的旅程。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`特雷扎矿井观景平台俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`刚出电梯的位置，用广角镜头可以囊括下方纵横交错的步行桥、盐湖码头以及远处发光的摩天轮，构成层次丰富的超现实画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`鲁道夫大厅盐湖对岸拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`划船到盐湖的另一侧，从低角度向上拍摄，可以将颜色鲜艳的小船作为前景，背后是高耸、纹理粗糙的盐壁和蜿蜒的空中廊桥，形成强烈对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`弗朗茨·约瑟夫大厅摩天轮仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`站在摩天轮正下方，将镜头垂直向上，可以拍出摩天轮钢结构与天然形成的巨大盐矿井筒完美结合的震撼几何构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`盐岩壁特写捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`寻找一处被暖黄色侧光照亮的盐壁，近距离拍摄那些晶莹的盐晶体纹理和岁月留下的开凿痕迹，质感非常迷人。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`连接通道的科幻感长廊`}</h4>
                  <p className="text-sm text-gray-700">{`在连接不同大厅的、灯光为冷色调的金属步行桥中央，采用对称构图拍摄，能获得极具未来隧道感的照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`由于是人工混合光环境，自动白平衡可能不准，建议使用RAW格式拍摄以便后期调整色温，还原那种冷暖光交织的独特氛围。`}</li>
                <li>• {`为了不干扰其他游客的体验和保护敏感的地下环境，请务必关闭闪光灯，并谨慎使用三脚架（尤其在狭窄通道）。`}</li>
                <li>• {`拍摄人物时，可以利用环境光营造戏剧性的剪影效果，比如在明亮的摩天轮或码头背景前。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`图尔达市中心干净舒适的连锁酒店或家庭旅馆，价格亲民，早上可以悠闲地吃个当地早餐再步行或乘公交前往盐矿。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`深度体验之选`}</h4>
                  <p className="text-sm text-green-800">{`克卢日-纳波卡老城里的设计酒店或历史公寓，白天探索特兰西瓦尼亚的文化之都，晚上享受繁华的咖啡馆和餐厅，去盐矿只是半小时车程的短途探险。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色隐居之选`}</h4>
                  <p className="text-sm text-yellow-800">{`特兰西瓦尼亚乡村的民宿或农庄，住在被森林和丘陵环绕的木屋里，体验真正的田园宁静，驱车前往盐矿的沿途风景本身就是一场视觉享受。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端奢华之选`}</h4>
                  <p className="text-sm text-purple-800">{`克卢日-纳波卡市郊的五星级酒店或水疗度假村，享受顶级的设施和服务，将盐矿之旅与舒适的放松完美结合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果主要目标是盐矿，住图尔达市最为方便，但夜生活相对安静；若想体验更多元的文化生活，建议以克卢日-纳波卡为基地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`特兰西瓦尼亚乡村地区住宿需要自驾，且夜间道路照明有限，预订时请确认交通方式。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和圣诞假期是旅游旺季，建议提前预订住宿，尤其是特色民宿非常抢手。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`从盐矿回到地面，重新被阳光和夏季的热浪拥抱时，我有一种恍如隔世的感觉。耳朵里似乎还回荡着地下的空灵回音，皮肤上还残留着那种清凉的盐润感。图尔达盐矿带给我的，远不止一场视觉奇观。它是一次关于时间和空间认知的温柔颠覆。在这里，历史不是被封在玻璃柜里供人远远瞻仰的，而是你可以用手触摸、用身体感知的活生生的存在。那些矿工们留下的痕迹，与当代设计师的奇思妙想无缝衔接，共同讲述着一个关于人类适应、改造并最终与自然遗产共舞的漫长故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个越来越同质化的世界里，图尔达盐矿是一个倔强而浪漫的异数。它没有选择最容易的路径——要么做成一个严肃枯燥的博物馆，要么彻底商业化成俗气的游乐场。它找到了一条艰难的、却无比动人的中间道路。它提醒我们，文化遗产的活化，想象力比资金更重要，尊重比改造更关键。它不仅仅是一个“景点”，更是一个地下的乌托邦，一个让我们暂时放下地上的烦恼，在深邃与宁静中重新思考人类与地球关系的冥想空间。对于任何一位厌倦了打卡式旅游，渴望真正沉浸式体验的旅人来说，图尔达盐矿都值得你专程奔赴。它不仅仅是你旅途中的一个站点，更可能会成为你记忆里一个发光的地下星球，永远提醒着你：世界的可能性，远比我们想象的，要深邃和绚烂得多。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/wooden-churches-maramures" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马拉穆列什木教堂群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wooden Churches of Maramureș</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bucharest-old-town-historical-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布加勒斯特老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bucharest Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sighisoara-citadel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡吉什瓦拉历史中心</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sighișoara Citadel</p>
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
