import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '布尔诺老城 Brno Old Town｜哥特尖顶下的地下迷宫与不眠的钟声 - 最佳欧洲景点',
  description: '说实话，第一次走进布尔诺老城，我的感觉是“拧巴”的。这种拧巴不是难受，而是一种奇妙的错位感。你站在自由广场，四周是漂亮的巴洛克立面和老咖啡馆，叮叮当当的电车不紧不慢地穿行而过，空气里飘着烤香肠和新鲜咖啡的香气，一切都符合你对一座优雅中欧老城的想象。可当你一抬头，视线立刻被两座高耸入云的哥特式尖塔抓住...',
}

export default function BrnoOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '布尔诺老城', href: '/attractions/brno-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">布尔诺老城・Brno Old Town・捷克・布尔诺</h1>
          <p className="text-lg text-gray-600 mb-6">
            说实话，第一次走进布尔诺老城，我的感觉是“拧巴”的。这种拧巴不是难受，而是一种奇妙的错位感。你站在自由广场，四周是漂亮的巴洛克立面和老咖啡馆，叮叮当当的电车不紧不慢地穿行而过，空气里飘着烤香肠和新鲜咖啡的香气，一切都符合你对一座优雅中欧老城的想象。可当你一抬头，视线立刻被两座高耸入云的哥特式尖塔抓住——那是圣彼得与圣保罗大教堂，它们不像布拉格城堡那样雄踞山巅供人仰望，而是以一种近乎突兀的、倔强的姿态，从城市的肌理中破土而出，直插云霄。那一刻你就会明白，布尔诺不是任何城市的复制品，它有自己的脾气。
这种脾气，在你拐进那些狭窄的、用凹凸不平的石头铺就的小巷时，会变得更清晰。阳光被高大的建筑切割成一条条光带，斜斜地打在斑驳的墙面上。你可能会听见从某个半地下室的酒馆里传出的欢快民乐声，夹杂着捷克语低沉的交谈和酒杯碰撞的脆响。气味也变得复杂起来：石头的潮湿气、某家面包店刚出炉的“trdelník”（烟囱卷）的甜腻焦香、还有从蔬菜市场方向飘来的新鲜香草和泥土的味道。当地人提着帆布袋匆匆走过，他们不会对游客投以过多好奇的目光，这座老城首先是他们生活、购物、约会、发呆的场所，其次才是景点。
最打动我的，是它那种“藏起来”的个性。布拉格的美是铺陈开来的，而布尔诺的美需要你俯身去寻找。它的精华有一部分埋在地下。那些中世纪留下的地下通道网络，曾经是酒窖、仓库和避难所，如今成了探索城市另一面的入口。当你从喧闹的广场顺着狭窄的台阶走下去，气温骤降，光线昏暗，只剩下导游手中灯笼的微光和墙壁渗出的水汽味道。在绝对的安静中，触摸着冰冷湿滑的石壁，你会瞬间与几百年前的酿酒师、躲避战火的市民产生连接。这种地上与地下的双重奏，让布尔诺老城的魅力变得极其立体和深刻。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，第一次走进布尔诺老城，我的感觉是“拧巴”的。这种拧巴不是难受，而是一种奇妙的错位感。你站在自由广场，四周是漂亮的巴洛克立面和老咖啡馆，叮叮当当的电车不紧不慢地穿行而过，空气里飘着烤香肠和新鲜咖啡的香气，一切都符合你对一座优雅中欧老城的想象。可当你一抬头，视线立刻被两座高耸入云的哥特式尖塔抓住——那是圣彼得与圣保罗大教堂，它们不像布拉格城堡那样雄踞山巅供人仰望，而是以一种近乎突兀的、倔强的姿态，从城市的肌理中破土而出，直插云霄。那一刻你就会明白，布尔诺不是任何城市的复制品，它有自己的脾气。</p>
              <p className="text-gray-700 leading-relaxed mb-4">这种脾气，在你拐进那些狭窄的、用凹凸不平的石头铺就的小巷时，会变得更清晰。阳光被高大的建筑切割成一条条光带，斜斜地打在斑驳的墙面上。你可能会听见从某个半地下室的酒馆里传出的欢快民乐声，夹杂着捷克语低沉的交谈和酒杯碰撞的脆响。气味也变得复杂起来：石头的潮湿气、某家面包店刚出炉的“trdelník”（烟囱卷）的甜腻焦香、还有从蔬菜市场方向飘来的新鲜香草和泥土的味道。当地人提着帆布袋匆匆走过，他们不会对游客投以过多好奇的目光，这座老城首先是他们生活、购物、约会、发呆的场所，其次才是景点。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最打动我的，是它那种“藏起来”的个性。布拉格的美是铺陈开来的，而布尔诺的美需要你俯身去寻找。它的精华有一部分埋在地下。那些中世纪留下的地下通道网络，曾经是酒窖、仓库和避难所，如今成了探索城市另一面的入口。当你从喧闹的广场顺着狭窄的台阶走下去，气温骤降，光线昏暗，只剩下导游手中灯笼的微光和墙壁渗出的水汽味道。在绝对的安静中，触摸着冰冷湿滑的石壁，你会瞬间与几百年前的酿酒师、躲避战火的市民产生连接。这种地上与地下的双重奏，让布尔诺老城的魅力变得极其立体和深刻。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="布尔诺老城" />
                <InfoRow label="英文名称" value="Brno Old Town" />
                <InfoRow label="正式名称" value="Brno Old Town" />
                <InfoRow label="国家" value="捷克" />
                <InfoRow label="城市" value="布尔诺" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="布尔诺，这座摩拉维亚的心脏，其老城是捷克除布拉格外最富历史层次感的城市中心，见证了从大摩拉维亚帝国到奥匈帝国，再到现代捷克共和国的千年沧桑。" />
                <InfoRow label="建筑特色" value="哥特式的尖顶与巴洛克的圆顶在空中交织，而地下则隐藏着长达数公里的酒窖、地牢和迷宫般的通道，形成上下呼应的奇幻世界。" />
                <InfoRow label="建筑风格" value="一场跨越数个世纪的建筑博览会，哥特式的坚毅、文艺复兴的规整、巴洛克的繁盛与20世纪功能主义的简洁在此奇妙层叠。" />
                <InfoRow label="文化价值" value="这里是捷克“不事声张的智慧”与坚韧精神的鲜活体现，没有布拉格的游人如织，却有着更贴近本地生活的、真实而灵动的中欧都市脉搏。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="整个老城区为公共区域，全天24小时开放。但区域内各独立景点（如教堂、地下迷宫、博物馆）开放时间各异，通常为上午9点至下午5点或6点，周一许多室内景点闭馆。圣诞市场期间（11月底至12月底）广场区域会持续活跃至深夜。" />
              <InfoRow label="门票价格" value="漫步老城街道和广场免费。进入特定景点需单独购票，例如：圣彼得与圣保罗大教堂塔楼登顶约80克朗，布尔诺地下迷宫导游导览约200克朗，Špilberk城堡部分展览约180克朗。建议购买“布尔诺卡”（Brno City Card），可在指定时间内无限次乘坐公共交通并免费或优惠进入多数主要景点。" />
              <InfoRow label="地址" value="Brno Historic Centre, 602 00 Brno, Czechia （核心区域大致以自由广场、绿色广场和蔬菜市场为中心）" />
              <InfoRow label="交通方式" value="从布尔诺图拉尼机场（Brno-Tuřany Airport, BRQ）出发，搭乘76路公交车至“Hlavní nádraží”（中央火车站），车程约20分钟，每30分钟一班。从布拉格或维也纳乘火车抵达布尔诺中央火车站（Brno hl.n.）后，出站即可见老城区。步行是最佳方式，从火车站穿过公园，约10-15分钟即可抵达自由广场（Náměstí Svobody）核心区。市内电车网络发达，购买单次票（30分钟内有效）或日票非常方便，上车前需在站台黄色机器上打卡激活。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">布尔诺的故事，得从它那不好惹的“城墙”说起。早在13世纪获得城市特权后，布尔诺就因其位于东西欧商路十字路口的战略位置，开始了漫长的自我武装。坚固的城墙被建造起来，而城内则围绕着三个主要广场——粮食市场（今天的自由广场）、蔬菜市场和牲畜市场（今天的卡普钦广场）——发展出了拥挤而富有生机的街巷。到了14世纪，它已经成为摩拉维亚的无可争议的首府，那座标志性的圣彼得与圣保罗大教堂就是在此时开始以哥特式风格重建的，仿佛要向世界宣告这座城市的雄心与信仰。值得一提的是，老城中心的“老市政厅”门廊上那条著名的悬龙（其实是鳄鱼）和歪斜的中柱，就源于一个关于建筑师因未收到报酬而故意捣乱的市井传说，为城市增添了一丝幽默的底色。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，真正的淬炼来自战争。15世纪的胡斯战争期间，布尔诺坚定地站在天主教会一边，顶住了胡斯派军队的多次围攻，这奠定了它“忠诚与坚韧”的城市性格。但更具传奇色彩的是三十年战争期间的1645年。当时瑞典军队兵临城下，统帅托斯顿森扬言如果在中午之前无法攻破城墙就撤军。聪明的布尔诺守城指挥官想出了一条妙计：他下令在上午11点就敲响圣彼得与圣保罗大教堂的午钟。瑞典人听到钟声，误以为已到正午，便依诺开始撤退。这个“提前的钟声”拯救了城市，也从此留下了一个延续至今的传统——每天上午11点，大教堂的钟声都会准时敲响，纪念这场智慧的胜利。这个故事没有轰轰烈烈的厮杀，却充满了捷克民族特有的、那种用机巧化解危机的生存智慧。</p>
              <p className="text-gray-700 leading-relaxed mb-4">战火平息后，布尔诺迎来了巴洛克艺术的黄金时代。奥匈帝国的贵族和富有的修道院开始用华丽的巴洛克风格重塑城市面貌。许多朴素的哥特式建筑被加上了曲线优美的山墙、繁复的灰泥装饰和宁静的庭院。耶稣会士们修建了宏伟的圣托马斯教堂和大学，卡普钦修道院则以其阴森却吸引人的“木乃伊地穴”而闻名。这个时期的老城，在伤痕上开出了繁复而庄重的花朵，空气中仿佛都弥漫着一种从动荡中复苏过来的、对美与虔诚的加倍渴望。你可以从那些如今是咖啡馆或精品店的建筑立面上，清晰地读到这段富足而虔诚的岁月。</p>
              <p className="text-gray-700 leading-relaxed mb-4">时间的车轮滚到19世纪末20世纪初，布尔诺又摇身一变，成了中欧现代主义的先锋。“功能主义”建筑的浪潮席卷这里，为老城注入了全新的基因。你不能错过图根哈特别墅（虽然稍离老城核心，但影响深远），它是密斯·凡德罗的杰作，简洁的线条与智能的家居设计令人惊叹。即使在老城区内，你也能发现一些线条利落、大玻璃窗的公寓楼，它们毫不怯场地矗立在巴洛克邻居旁边，形成了有趣的对话。二战期间，布尔诺遭受了轰炸，但相比许多被夷为平地的欧洲城市，它的老城核心幸运地保留了下来。战后的修复是谨慎的，人们没有试图把它变成迪士尼般的布景，而是允许新旧痕迹并存。一些广场上还能看到战后初期建造的、略带社会主义现实主义风格的建筑，它们同样是城市记忆的一部分，讲述着另一段复杂的历史。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  要真正品味布尔诺老城的层层滋味，建议你在一个非周末的上午9点左右开始。这个时候，游客还未大批涌入，本地人刚刚开始一天的生活，市场鲜活，光线柔和。整个深度游览大概需要6-8小时，节奏宜张弛有度。我们的路线将从“绿色广场”这个生活气息最浓的起点开始，唤醒感官；然后深入地下，触摸城市冰冷的骨骼；再回到地面，攀登至高点，获取上帝视角；最后用一场傍晚的漫步或城堡日落来收尾。这样的安排，如同阅读一本好书，有平实的序章、悬疑的发展、高潮的揭示和宁静的尾声，让你从不同的维度和高度，彻底读懂这座城。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>穿一双绝对舒适的步行鞋，老城的石板路美丽但凹凸不平，且探索地下迷宫时需要长时间站立和行走。
计划参观地下迷宫、木乃伊地穴等室内景点时，务必提前在其官网上确认当天的开放时间和语言导览场次，这些地方空间有限，临时很可能无法入场。
对过于热情、用英语提供“超值”私人导游服务的人保持礼貌的警惕，官方旅游信息中心（通常在老市政厅内）能提供所有可靠的地图和帮助。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一早先钻进绿色广场边上的蔬菜市场，让鼻子被新鲜蔬果、当地奶酪和烤面包的混合香气叫醒，看摊主们用带着摩拉维亚口音的捷克语熟练地交易。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">跟着向导深入布尔诺地下迷宫的人口，在昏暗摇曳的灯光下弯腰穿过中世纪酒窖和秘密通道，听脚下积水的声音在石壁间回荡。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从地底重回光明后，径直走向自由广场，站在那个造型前卫的黑色天文钟下，等到上午11点，听它响起并掉落一颗玻璃弹珠，重温城市“智退敌军”的传奇瞬间。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着石板坡道缓缓走向圣彼得与圣保罗大教堂，推开厚重的木门，让管风琴的乐音和蜡烛的暖意包裹你，然后鼓起勇气攀登那狭窄的螺旋楼梯，直到塔顶狂风呼啸。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从教堂后的公园小径悠闲地漫步至Špilberk城堡的山脚下，找一张长椅坐下，远远打量这座曾经的“暴君监狱”，想象它几个世纪来的故事。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">拐进卡普钦修道院不起眼的小门，走下阴冷的地穴，在沉默中与那些因特殊土壤条件而自然形成的、身披教袍的修士木乃伊面对面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在黄昏时分回到自由广场附近，随意挑一家有百年历史的传统酒馆，点一杯本地酿造的比尔森啤酒或摩拉维亚白葡萄酒，就着一盘烤猪肘，融入下班后嘈杂而温暖的本地人潮中。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. Špilberk城堡北侧露台</h4>
                  <p className="text-sm text-gray-700">日落前约一小时，将城堡本身的砖石城墙作为前景框架，远眺老城区层层叠叠的红屋顶和教堂尖塔，温暖的夕阳光线会给整个画面镀上金边。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣彼得与圣保罗大教堂台阶底部</h4>
                  <p className="text-sm text-gray-700">使用广角镜头仰拍，将教堂两座标志性的高耸哥特式塔楼完整纳入画面，等待一辆复古的淡黄色电车恰好从教堂前方驶过，形成动静与古今的绝妙对比。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 自由广场黑色天文钟旁</h4>
                  <p className="text-sm text-gray-700">找到一个较高的台阶或利用路边咖啡馆的露天座位，以天文钟独特的抽象造型为视觉焦点，捕捉行人匆匆走过或驻足观看的瞬间，展现城市日常与地标的互动。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 绿色广场拱廊之下</h4>
                  <p className="text-sm text-gray-700">清晨市场刚开始时，避开正面，从侧面拱廊的柱子和阴影中向外拍摄，框架构图让色彩斑斓的水果蔬菜摊和忙碌的摊主成为一幅生动的静物画，光影层次感极强。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 卡普钦广场望向圣詹姆斯教堂</h4>
                  <p className="text-sm text-gray-700">夜晚蓝调时刻（日落后半小时内），教堂的灯光刚刚亮起，天空呈深蓝色，使用三脚架长曝光，拍下教堂巴洛克式立面在静谧夜色中的庄严轮廓，常能捕捉到飞鸟掠过的轨迹。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 在教堂内部和木乃伊地穴内，请务必遵守禁止使用闪光灯的规定，不仅为了保护文物，也能捕捉到更真实、更具氛围感的低光照场景。</li>
                <li>• 拍摄当地人或市场摊主时，一个微笑和眼神征询比举起相机就拍更礼貌，他们通常不介意，甚至会展示他们的商品。</li>
                <li>• 尝试用黑白模式拍摄地下迷宫和老城小巷，能极大地强化石头的质感、光影的对比和历史沉淀的沧桑氛围。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">特色精品之选</h4>
                  <p className="text-sm text-blue-800">由一座16世纪文艺复兴宫殿改造的酒店，隐藏在一条安静的铺石小巷里，房间有裸露的原始石墙和拱顶，早餐在带壁画的小庭院享用，仿佛住在博物馆里。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">高端设计体验</h4>
                  <p className="text-sm text-green-800">坐落于自由广场边缘一栋经过彻底翻新的功能主义建筑内，房间拥有俯瞰广场全景的落地窗，内饰是极简的北欧风与捷克本土设计的完美融合，楼顶酒吧是城中最热门的秘密据点。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">怀旧历史情怀</h4>
                  <p className="text-sm text-yellow-800">老市政厅对面一栋百年建筑里的家庭式公寓，房东老奶奶会为你准备传统的摩拉维亚早餐，家具多是祖传的老物件，晚上能听到远处教堂隐约的钟声，价格却十分亲切。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">经济型社交之选</h4>
                  <p className="text-sm text-purple-800">位于老城边缘一栋现代建筑内的设计师青年旅舍，不仅有整洁的宿舍，还提供极具私密性的单人胶囊舱，公共厨房和客厅经常举办本地的品酒或电影之夜，是结交旅伴的好地方。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城核心区夜晚非常安全，但周末清晨可能因有酒吧和俱乐部而略显喧闹，选择住宿时若对安静有极高要求，可留意评价中关于隔音和夜间街道噪音的部分。</p>
              <p className="text-gray-700 leading-relaxed mb-4">旺季（夏季和圣诞市场期间）住宿非常紧俏，至少提前两个月预订是明智之举，许多特色公寓通过本地平台预订比国际连锁网站更有价格优势。</p>
              <p className="text-gray-700 leading-relaxed mb-4">布尔诺老城不大，即使住在稍微靠外的区域，步行或乘坐几站电车也能轻松抵达，有时性价比更高，还能体验更纯粹的居民区氛围。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开布尔诺很久以后，我脑海里反复回放的，不是某个具体的建筑画面，而是一种感觉。那是一种由石头的凉意、咖啡的温热、地下迷宫的幽静和广场钟声的清脆混合而成的、扎实的生活感。这座城市没有试图用惊艳的“第一眼”征服你，它更像一本装帧朴素却内容深刻的书，需要你静下心来，一页页仔细翻阅。它坦然地展示着自己的每一道皱纹和伤疤——战争的、革命的、时代变迁的——却不沉溺于悲情，反而在这些痕迹之上，生长出咖啡馆、设计商店、热闹的市集和年轻人欢笑的声音。这种强大的生命力，比任何完美无瑕的布景都更打动人心。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求瞬时刺激和网红打卡的快节奏世界里，布尔诺老城的存在像一种温柔的提醒。它告诉我们，深度旅行不是收集地名，而是去体验一种不同的时间流速，去理解一个地方如何与它的历史和解，并坚定地走向未来。在这里，你能触摸到捷克灵魂中那务实、幽默、坚韧的部分，一种被称作“不事声张的智慧”的品质。对于每一位厌倦了浮光掠影、渴望真正“进入”一个地方的旅人来说，布尔诺老城绝不是布拉格的替代品，它是一个必达的目的地。它会用其复杂、深沉而亲切的拥抱，给你上一堂关于历史、生活和低调之美的，无声却震撼的课。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
