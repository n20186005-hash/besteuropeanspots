import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '卡斯特尔萨多Castelsardo｜地中海上最壮观的悬崖石头城，时间停滞的中世纪迷宫 - 最佳欧洲景点',
  description: '第一眼看到卡斯特尔萨多，你会以为自己不小心闯进了一幅过于强烈的梦境油画。它不像那些精致优雅的意大利小镇，而是带着一股原始的、倔强的生命力，从蔚蓝的第勒尼安海中陡然拔起一整块暗红色的凝灰岩悬崖，然后把整个城镇像藤壶一样，密密麻麻、毫无保留地“钉”在了悬崖的垂直面上。车子还在盘山公路上，你就能远远望见那...',
}

export default function CastelsardoFortressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '卡斯特尔萨多（悬崖上的海防要塞）', href: '/attractions/castelsardo-fortress' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`卡斯特尔萨多（悬崖上的海防要塞）・Castelsardo・意大利・撒丁岛北部卡斯特尔萨多镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到卡斯特尔萨多，你会以为自己不小心闯进了一幅过于强烈的梦境油画。它不像那些精致优雅的意大利小镇，而是带着一股原始的、倔强的生命力，从蔚蓝的第勒尼安海中陡然拔起一整块暗红色的凝灰岩悬崖，然后把整个城镇像藤壶一样，密密麻麻、毫无保留地“钉”在了悬崖的垂直面上。车子还在盘山公路上，你就能远远望见那片在烈日下泛着金棕色光芒的巨石群落，海风猎猎，仿佛能听到几百年前瞭望塔上水手吹响的号角。
把车停在山脚，沿着之字形的陡峭坡道开始向上步行，感官立刻被全方位打开。脚下是被无数代人脚步打磨得光滑甚至有些凹陷的火山岩石板路，缝隙里钻出顽强的野茴香，散发出辛辣又清新的香气。阳光毫无遮拦地倾泻下来，在石墙间切割出明暗锐利的边界，空气里混合着海水的微咸、远处厨房飘出的罗勒番茄酱香气，以及古老石头被晒热后特有的、类似于泥土般的干燥气味。你的耳朵会变得异常忙碌：左边传来某扇厚重木窗被推开时“吱呀”的悠长声响，右边小巷深处有老妇人用撒丁语哼唱的古老歌谣片段，而背景音永远是来自悬崖下方、永不疲倦的海浪拍打礁石的深沉轰鸣，那声音从脚底传来，让整个山体似乎都在微微共振。
这里不是一个冰冷的博物馆式景点，它就是当地人的日常。你会遇见提着装满新鲜面包篮子的老爷爷，侧身让你先过那段仅容一人通过的“针眼”小巷；转角阴影里，可能就坐着一位满脸皱纹的老奶奶，双手以令人眼花缭乱的速度编织着当地特有的“阿斯福得拉”芦苇篮，那技艺和姿势，与她一百年前的先祖毫无二致。悬崖的边缘就是人家的后院，晾晒的白色床单在碧海蓝天的映衬下飘扬，像一艘艘鼓满了风的帆。这种极致的险峻与极致的烟火气交融在一起，构成了卡斯特尔萨多最打动人心的核心魅力——它是一座为了生存和防御而生的堡垒，却在坚硬的石头心脏里，跳动着温热、缓慢而坚韧的生活脉搏。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到卡斯特尔萨多，你会以为自己不小心闯进了一幅过于强烈的梦境油画。它不像那些精致优雅的意大利小镇，而是带着一股原始的、倔强的生命力，从蔚蓝的第勒尼安海中陡然拔起一整块暗红色的凝灰岩悬崖，然后把整个城镇像藤壶一样，密密麻麻、毫无保留地“钉”在了悬崖的垂直面上。车子还在盘山公路上，你就能远远望见那片在烈日下泛着金棕色光芒的巨石群落，海风猎猎，仿佛能听到几百年前瞭望塔上水手吹响的号角。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`把车停在山脚，沿着之字形的陡峭坡道开始向上步行，感官立刻被全方位打开。脚下是被无数代人脚步打磨得光滑甚至有些凹陷的火山岩石板路，缝隙里钻出顽强的野茴香，散发出辛辣又清新的香气。阳光毫无遮拦地倾泻下来，在石墙间切割出明暗锐利的边界，空气里混合着海水的微咸、远处厨房飘出的罗勒番茄酱香气，以及古老石头被晒热后特有的、类似于泥土般的干燥气味。你的耳朵会变得异常忙碌：左边传来某扇厚重木窗被推开时“吱呀”的悠长声响，右边小巷深处有老妇人用撒丁语哼唱的古老歌谣片段，而背景音永远是来自悬崖下方、永不疲倦的海浪拍打礁石的深沉轰鸣，那声音从脚底传来，让整个山体似乎都在微微共振。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不是一个冰冷的博物馆式景点，它就是当地人的日常。你会遇见提着装满新鲜面包篮子的老爷爷，侧身让你先过那段仅容一人通过的“针眼”小巷；转角阴影里，可能就坐着一位满脸皱纹的老奶奶，双手以令人眼花缭乱的速度编织着当地特有的“阿斯福得拉”芦苇篮，那技艺和姿势，与她一百年前的先祖毫无二致。悬崖的边缘就是人家的后院，晾晒的白色床单在碧海蓝天的映衬下飘扬，像一艘艘鼓满了风的帆。这种极致的险峻与极致的烟火气交融在一起，构成了卡斯特尔萨多最打动人心的核心魅力——它是一座为了生存和防御而生的堡垒，却在坚硬的石头心脏里，跳动着温热、缓慢而坚韧的生活脉搏。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`卡斯特尔萨多（悬崖上的海防要塞）`} />
                <InfoRow label="英文名称" value={`Castelsardo`} />
                <InfoRow label="正式名称" value={`Castelsardo`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`撒丁岛北部卡斯特尔萨多镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`撒丁岛历史上最重要的热那亚海上共和国防御前哨之一，见证了地中海西部数个世纪的海权争夺。`} />
                <InfoRow label="建筑特色" value={`整个城镇本身就是一座巨大的、与嶙峋火山岩悬崖融为一体的垂直建筑杰作，房屋层层叠叠，以厚重的暗色石头垒成，街道实则是凿刻或搭建在岩石上的狭窄阶梯和隧道。`} />
                <InfoRow label="建筑风格" value={`以热那亚军事建筑风格为核心，融合了撒丁岛本土的“努拉吉”石造技艺与后期西班牙阿拉贡统治时期的装饰元素，形成独特的撒丁-地中海混合风格。`} />
                <InfoRow label="文化价值" value={`它是活着的撒丁岛文化标本，不仅保存了中世纪城镇的物理形态，更延续了古老的手工艺传统（如著名的“篮子编织”艺术）和浓烈的本土节庆习俗。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇街道及外部堡垒区域全年24小时开放。核心的历史博物馆（位于埃莱凡蒂娜城堡内）开放时间为夏季（4月-9月）9:00-20:00，冬季（10月-3月）9:00-17:00，每周一闭馆。部分小型教堂开放时间不定，建议在镇中心旅游信息处查询当日安排。`} />
              <InfoRow label="门票价格" value={`进入古镇本身免费。埃莱凡蒂娜城堡及内部博物馆门票为全价8欧元，65岁以上老人及18-25岁青年票5欧元，18岁以下及残障人士免费。提供包含语音导览的家庭套票（2大2小）20欧元。门票可在城堡入口处直接购买。`} />
              <InfoRow label="地址" value={`Piazza della Fortezza, 07031 Castelsardo SS, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是奥尔比亚机场（Olbia Costa Smeralda Airport，约50公里车程）和阿尔盖罗机场（Alghero-Fertilia Airport，约60公里车程）。从机场最便捷的方式是租车自驾，沿SS200公路向西北方向行驶，均有清晰路标指向卡斯特尔萨多，车程约1小时。若乘坐公共交通，可从奥尔比亚火车站乘火车至萨萨里（Sassari），再转乘ARST公司前往卡斯特尔萨多的巴士，总耗时约2.5小时，班次较为稀疏（尤其是下午和周末），务必提前在车站查询时刻表。自驾车辆只能停在山脚下的付费停车场，随后徒步上山，这是体验的一部分。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`卡斯特尔萨多的故事，始于地中海波涛间的权力博弈。时间回到12世纪末，强大的海洋共和国热那亚，为了控制撒丁岛北部富饶的珊瑚渔场和贸易路线，急需一个坚不可摧的支点。多利亚家族，这个在热那亚历史上举足轻重的贵族兼海军将门，目光锁定了这块伸入海中的巨型悬崖。1270年左右，他们在此奠基，最初称它为“卡斯泰尔真诺瓦”（Castel Genovese），意为“热那亚人的城堡”。这从一开始就是个纯粹的军事作品，选址精妙绝伦：三面环海，悬崖近乎垂直，唯有一条狭窄的陆路通道易守难攻。工匠们没有“建造”城镇，而是“雕刻”和“镶嵌”：他们依循岩石天然的走势，将城墙与悬崖融为一体，房屋的地基就是坚硬的岩体本身，街道是岩壁上开凿出的阶梯。想象一下第一批驻守在此的热那亚士兵和水手，在呼啸的海风中，用撬棍和汗水，硬生生从石头里“抠”出一个家园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，地中海的平静总是短暂。到了15世纪，亚平宁半岛的另一股势力——西班牙阿拉贡王国，将目光投向了撒丁岛。经过一番争夺，卡斯特尔萨多在1448年易主，落入了阿拉贡国王的手中。新主人赋予了它一个延续至今的名字“Castel Aragonese”（阿拉贡城堡），后来简化为“Castelsardo”。西班牙人带来的不只是名字，还有新的建筑细节和防御理念。他们加固了城墙，扩建了山顶的堡垒核心——埃莱凡蒂娜城堡，并引入了更具伊比利亚风格的拱门和装饰元素。但城镇的骨骼，那份热那亚式的、严谨而务实的军事布局，早已深入石髓，未曾改变。在此后的几个世纪里，它就像一枚沉默而坚固的棋子，目睹着海盗的劫掠、瘟疫的肆虐、以及周边领主们的纷争，始终屹立不倒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让卡斯特尔萨多从纯粹的要塞向有人情味的城镇转变的，是那些普通的居民。战争间歇的和平年代，士兵的后代成了渔民和农夫。他们发现悬崖下的海域富饶，便开始发展渔业；在悬崖缝隙和后方山坡开垦出梯田，种植葡萄和橄榄。手工艺，特别是利用当地沼泽芦苇编织篮子的技艺，逐渐成为家庭经济的支柱。城镇的功能悄悄演变：最高的地方依然是城堡和驻军，中间的“贵族区”住着官员和富商，而靠近港口和市场的较低区域，则挤满了工匠和渔民的小屋。教堂的钟声开始与港口的潮汐、集市的开闭共同谱写生活的节奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`进入现代，枪炮的威胁远去，卡斯特尔萨多的战略价值褪去，但它作为文化丰碑和家园的价值却日益璀璨。它没有被过度商业化，没有涌入连锁商店。相反，当地人以一种近乎虔诚的态度守护着这份遗产。古老的石屋被精心维护，但不是变成酒店，而是继续作为住所；狭窄的街道不通汽车，确保了中世纪的尺度感和宁静得以留存。今天，当你漫步其中，你触摸的不仅是12世纪的石头，更是一条从未断裂的生活河流。从热那亚的水手，到阿拉贡的士兵，再到今天编织篮子的老妇人，他们都共享着同一片震撼人心的海景，同一条被脚步磨亮的石阶，同一份对这座悬崖之家的深沉眷恋。它的历史不是教科书上死去的章节，而是依然在呼吸的、石头的记忆。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在清晨九点前抵达，这时旅行团的大巴还未涌入，阳光角度柔和，适合拍照，更能体验小镇苏醒的宁静。整体游览需要留出至少4-5小时，遵循“由外及内、自下而上、最后登顶俯瞰”的节奏。先从山脚下开始，仰望其全貌，感受压迫感；然后沉浸入迷宫般的街巷，享受迷失的乐趣；最后攻顶城堡，收获全景作为奖励。中午可以在镇上找家家庭餐馆用餐，下午若有余力，可以步行至山脚下的海礁区域，从另一个视角回望悬崖上的雄姿。节奏切忌匆忙，这里的美需要慢下来，用脚丈量，用心感受。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对防滑、支撑性好的步行鞋，这里的石阶常年被海风滋润，有些地方长有青苔，且坡度极陡。
镇上很多小店和餐馆下午1点到4点会关门午休，计划午餐要趁早，或者安排好时间。
对过于“热情”带你去看“特殊景观”或“私人博物馆”的当地人保持礼貌的警惕，正规景点都有明确标牌。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚主停车场出发，先别急着上山，绕到临海一侧的小径，花十分钟静静仰望这座从海浪中直接生长出来的、布满蜂窝般窗洞的巨石壁垒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择任意一条看起来最陡峭、最狭窄的上山阶梯钻进去，让自己彻底迷失在由高耸石墙夹峙、仅漏下一线天的幽深巷道迷宫里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用手触摸那些被海风侵蚀出蜂窝状孔洞的墙面，寻找嵌在墙上的古老家族徽章或西班牙统治时期留下的石雕纹样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到圣玛利亚大教堂，走进去感受那份与外部炙热阳光截然不同的、带有潮润石头气息的清凉幽暗，抬头看那尊著名的“哭泣的基督”木雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着指示牌一路向上，朝着山顶的埃莱凡蒂娜城堡攀登，最后的几段阶梯是在裸露的岩壁上直接开凿出来的，需要手脚并用。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上城堡的最高露台，找个角落坐下，让目光毫无阻挡地拥抱360度的全景：脚下是层层叠叠的红色屋顶，远方是宝石蓝的无尽大海和零星岛屿。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时换另一条完全不同的路线，尝试找到通往“编织妇之巷”的小道，那里常常有手工艺人当众展示古老的芦苇编织技艺。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在靠近城镇出口的某家不起眼的小酒吧坐下，点一杯当地产的“Vermentino”白葡萄酒，就着一碟橄榄，看夕阳将整个石头城染成蜂蜜般的金黄。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡顶端西北角露台的矮墙边`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，以锈色的古城墙垛口为前景框架，将镜头对准远方海面上被夕阳染成粉紫色的斯汀诺海角，捕捉海天一色的温柔渐变。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`“针眼”巷道的底部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，站在巷道最深处向上拍摄，两侧高耸的石墙将天空切割成一道锐利的蓝色线条，人物剪影走过顶端时能拍出极具戏剧张力的构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从海上礁石区回望`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，退潮时徒步至小镇西北侧的海边礁石区，用广角镜头拍摄整个城堡群落在悬崖上的倒影与赭石色的岩壁、碧蓝海水构成的壮丽全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`埃莱凡蒂娜城堡入口拱门内`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光斜射入城堡大门，站在门内的阴影处向外拍，拱门形成完美的画框，框住门外洒满阳光的古老街道和一角蔚蓝海面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，避免将镜头直接对准人家窗户或院内活动的居民，尤其是正在做手工艺的老人，拍摄前最好微笑示意取得同意。`}</li>
                <li>• {`海风和空气中的盐分对相机设备腐蚀性较强，建议每天游览结束后用柔软的微湿布清洁相机表面。`}</li>
                <li>• {`无人机飞行在历史中心上空有严格限制，起飞前务必查询当地最新法规，通常需要特殊许可。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`悬崖上的石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在古镇核心区由百年石屋改造的民宿里，房间可能小巧但充满韵味，夜晚能听到海浪的催眠曲，清晨在海鸥的叫声中醒来，主人可能会邀请你品尝家酿的 Mirto 香草利口酒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山腰花园旅馆`}</h4>
                  <p className="text-sm text-green-800">{`位于上山步道中途的隐蔽处，拥有一个种满仙人掌和多肉植物的地中海式花园露台，适合既想感受古镇氛围又希望住宿空间更宽敞安静的旅行者，早餐的蜂蜜来自旅馆自己养的蜜蜂。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代设计海景酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在山脚下港口附近，房间拥有巨大的落地窗和直面大海的阳台，现代舒适的设施与古老小镇形成有趣对比，适合追求住宿品质和便利性的游客。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`农庄体验住宿`}</h4>
                  <p className="text-sm text-purple-800">{`在距离小镇几公里外的内陆丘陵，选择一家传统的“农庄民宿”，住在古老的石头农舍里，参与橄榄油制作或奶酪品尝，体验撒丁岛真正的乡村生活，夜晚星空璀璨无比。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`预订古镇内的住宿时，务必确认是否有接送服务或详细的停车指引，因为你需要拖着行李步行一段相当陡峭的路程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（7-8月）是撒丁岛绝对旺季，卡斯特尔萨多的住宿很快会被订满，且价格高昂，强烈建议提前至少3-4个月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果选择住在镇外，虽然安静且停车方便，但会错过古镇在清晨和夜晚那份独有的、属于本地人的宁静魔力。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开卡斯特尔萨多很久以后，闭上眼睛，最先浮现的往往不是那片醉人的海景，而是指尖触碰那些风化石头时粗粝温热的触感，是巷道深处飘来的、分不清年代的食物香气。这个地方教给我们的，是一种关于“坚韧”的具象化体验。它不像那些仅供观赏的宫殿那样精致易碎，它的每一块石头都写着实用和生存，却在数百年的生存挣扎中，意外地锤炼出一种惊心动魄的美。这种美，不带丝毫讨好，充满了力量感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切皆可快速复制的时代，卡斯特尔萨多像一座固执的孤岛。它拒绝被“简化”，汽车开不进的阶梯就是它的态度；它拒绝被“装扮”，风化的、带着裂痕的墙面就是它的本色。它告诉我们，真正的深度，不在于你打卡了多少个景点，而在于你是否愿意走进一条不知名的小巷，去感受光线在石头上移动的缓慢速度，去聆听一场发生在方言里的日常对话。对于每一位热爱深度游的旅人来说，这里不是轻松惬意的度假村，而是一面镜子，照见历史层叠的厚重，也照见生活本真的模样。来一次，就是把一小段关于坚韧与时间的记忆，刻进自己的生命里。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/grado" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉多古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Grado</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fermo-historic-center" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费尔莫古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fermo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ferrara-renaissance-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    费
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">费拉拉文艺复兴城市</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ferrara</p>
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
