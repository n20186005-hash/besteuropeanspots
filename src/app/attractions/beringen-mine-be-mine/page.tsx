import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝灵恩煤矿 Be-MINE｜在巨大洗煤厂阴影下，触摸比利时“黑金时代”的工业脉搏 - 最佳欧洲景点',
  description: '当你把车停在空旷的停车场，一抬头，那景象会瞬间攫住你的呼吸。不是精致的教堂尖顶，也不是优雅的宫殿立面，而是两座巨大的、锈红色的混凝土巨塔，如同从大地深处长出的钢铁骨骼，沉默地矗立在低矮的佛兰德斯天空下。那是一种原始的、未经修饰的庞大，带着一种近乎悲怆的威严。风穿过锈蚀的钢架和空荡的传送带走廊，发出低...',
}

export default function BeringenMineBeMinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '贝灵恩煤矿遗址', href: '/attractions/beringen-mine-be-mine' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝灵恩煤矿遗址・Beringen Mine (Be-MINE)・比利时・贝灵恩， 林堡省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你把车停在空旷的停车场，一抬头，那景象会瞬间攫住你的呼吸。不是精致的教堂尖顶，也不是优雅的宫殿立面，而是两座巨大的、锈红色的混凝土巨塔，如同从大地深处长出的钢铁骨骼，沉默地矗立在低矮的佛兰德斯天空下。那是一种原始的、未经修饰的庞大，带着一种近乎悲怆的威严。风穿过锈蚀的钢架和空荡的传送带走廊，发出低沉的呜咽，空气中弥漫着淡淡的、混合了铁锈、湿泥土和远处青草的特殊气味。这里安静得惊人，却又仿佛充满了回声——那是半个世纪前，机器日夜轰鸣、火车吞吐不息、成千上万矿工带着满脸煤黑在这里换班时，所留下的声音的幽灵。
如今，这份沉重被巧妙地稀释在了日常的悠闲里。你会看到穿着legging的年轻母亲推着婴儿车，在巨大的工业管道改造的艺术装置旁散步；穿着鲜艳冲锋衣的徒步者，顺着曾经的运煤铁道改建的绿色小径走向远方；而那曾经用来筛选煤炭的、高达60米的巨大塔楼里，传来孩子们在攀岩墙上兴奋的尖叫。历史并未被抹去，而是被重新编织。最动人的莫过于在游客中心旁的咖啡馆，看到几位白发苍苍的老先生坐在一起，他们粗糙的手指摩挲着咖啡杯，静静望着窗外的洗煤厂。他们不说话，但你几乎能猜到，他们看的不是风景，是自己用汗水和青春填满又最终送别的整个时代。
它的核心魅力，正在于这种强烈的对比与和解。在这里，工业的粗粝与自然的柔软对话，历史的伤痛与未来的活力交织。你触摸到的每一块冰冷混凝土，都曾浸染过温热的汗水与希望。它不是一处被供奉起来的古迹，而是一个活着的、呼吸的器官，一个社区用它最独特的伤疤，创造出了全新的生命律动。走在其中，你感受到的不是怀旧的感伤，而是一种磅礴的、向前的生命力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你把车停在空旷的停车场，一抬头，那景象会瞬间攫住你的呼吸。不是精致的教堂尖顶，也不是优雅的宫殿立面，而是两座巨大的、锈红色的混凝土巨塔，如同从大地深处长出的钢铁骨骼，沉默地矗立在低矮的佛兰德斯天空下。那是一种原始的、未经修饰的庞大，带着一种近乎悲怆的威严。风穿过锈蚀的钢架和空荡的传送带走廊，发出低沉的呜咽，空气中弥漫着淡淡的、混合了铁锈、湿泥土和远处青草的特殊气味。这里安静得惊人，却又仿佛充满了回声——那是半个世纪前，机器日夜轰鸣、火车吞吐不息、成千上万矿工带着满脸煤黑在这里换班时，所留下的声音的幽灵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如今，这份沉重被巧妙地稀释在了日常的悠闲里。你会看到穿着legging的年轻母亲推着婴儿车，在巨大的工业管道改造的艺术装置旁散步；穿着鲜艳冲锋衣的徒步者，顺着曾经的运煤铁道改建的绿色小径走向远方；而那曾经用来筛选煤炭的、高达60米的巨大塔楼里，传来孩子们在攀岩墙上兴奋的尖叫。历史并未被抹去，而是被重新编织。最动人的莫过于在游客中心旁的咖啡馆，看到几位白发苍苍的老先生坐在一起，他们粗糙的手指摩挲着咖啡杯，静静望着窗外的洗煤厂。他们不说话，但你几乎能猜到，他们看的不是风景，是自己用汗水和青春填满又最终送别的整个时代。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，正在于这种强烈的对比与和解。在这里，工业的粗粝与自然的柔软对话，历史的伤痛与未来的活力交织。你触摸到的每一块冰冷混凝土，都曾浸染过温热的汗水与希望。它不是一处被供奉起来的古迹，而是一个活着的、呼吸的器官，一个社区用它最独特的伤疤，创造出了全新的生命律动。走在其中，你感受到的不是怀旧的感伤，而是一种磅礴的、向前的生命力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝灵恩煤矿遗址`} />
                <InfoRow label="英文名称" value={`Beringen Mine (Be-MINE)`} />
                <InfoRow label="正式名称" value={`Be-MINE`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`贝灵恩， 林堡省`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是比利时林堡煤矿区最大、最现代化的煤矿，是20世纪比利时工业化与煤炭经济的缩影与心脏。`} />
                <InfoRow label="建筑特色" value={`一组功能主义工业建筑群，以标志性的、如同大地艺术般庞大的双子洗煤厂（亦称“筛分塔”）为核心，构成震撼的后工业景观。`} />
                <InfoRow label="建筑风格" value={`以包豪斯和现代主义工业建筑风格为主导，融合了实用主义与粗野主义美学，部分后期改造区域注入了当代建筑设计。`} />
                <InfoRow label="文化价值" value={`欧洲工业遗产转型的典范，将一个代表沉重历史的工业伤疤，成功转化为集记忆、文化、休闲与教育于一体的社区活力中心。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`园区公共区域全天24小时开放。主要建筑（如游客中心、攀岩中心、博物馆）开放时间通常为周二至周日10:00-17:00，周一闭馆（节假日可能调整）。地下矿井游览和特定活动需提前预约并遵循导览时间。冬季（11月至次年2月）部分户外设施可能缩短开放时间，行前务必查阅官网最新公告。`} />
              <InfoRow label="门票价格" value={`进入整个Be-MINE遗址公园免费。攀岩中心、泳池、博物馆等独立设施单独收费。地下矿井导览游成人票约15欧元，学生及65岁以上长者约12欧元，7-18岁青少年约8欧元，7岁以下儿童免费。家庭套票（2大2小）约38欧元。建议购买“Be-MINE体验通票”，可涵盖多项主要活动，价格约25-30欧元。`} />
              <InfoRow label="地址" value={`Be-MINE, Koolmijnlaan 201, 3582 Beringen, Belgium`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔机场出发：最便捷方式是租车自驾，沿E314高速公路向东行驶约80公里，从“Beringen”出口下，有明显棕色景点标识引导，车程约1小时10分钟。乘坐公共交通：在机场火车站乘坐IC列车前往哈瑟尔特（Hasselt）中央车站（约1小时车程，每小时2班），在哈瑟尔特换乘开往贝灵恩的当地巴士（如45路，约25分钟车程）。从贝灵恩火车站或巴士站步行至遗址核心区约需15-20分钟。园区内面积巨大，内部有清晰的步行和骑行道标识。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从地下深处开始讲起，那里埋藏着被比利时人称为“黑金”的财富。20世纪初，林堡省地下发现了丰富的煤炭层，一场轰轰烈烈的工业化拓荒就此展开。1906年，贝灵恩煤矿公司成立，但直到第一次世界大战后的1922年，第一座矿井才开始出煤。那时的世界，对能源的渴望如同饕餮。设计师们没有采用传统煤矿杂乱无章的布局，而是以惊人的远见和魄力，规划了一个功能清晰、布局宏大的“理想工业城市”。中心便是那两组宛如大教堂般雄伟的洗煤厂和提升井架，四周则有序地分布着电站、工坊、仓库，以及为矿工建造的、整齐划一的“花园城市”住宅区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`整个20世纪中叶，是贝灵恩的黄金时代。高峰时期，这里有近9000名矿工工作，连同他们的家庭，构成了一个近乎自给自足的小社会。每天，升降机将工人们送入地下近千米的黑暗世界，再将满载“黑金”的罐笼提升上来，经过那巨大的洗煤厂筛选、洗净，通过铁路网输往全国。煤矿不仅仅是工作场所，它定义了这里的一切：有矿上的学校、医院、商店、乐队和体育俱乐部。矿工是一个受人尊敬、但也充满危险的职业。地下是瓦斯、塌方和尘肺病的威胁，地面上则弥漫着团结、坚韧，以及用血汗换来稳定生活的自豪感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，时代的浪潮无法抵挡。随着更廉价石油和天然气的使用，加上开采成本日益高昂，欧洲的煤炭业在20世纪60年代后迅速衰落。1992年，最后一个煤罐笼升上井口，贝灵恩煤矿正式关闭。巨大的机器停止了轰鸣，上万人的社区瞬间失去了经济支柱，那些曾经代表力量和进步的庞然大物，一夜间沦为刺眼的废墟和失业的象征。巨大的厂区被废弃，生锈、破败，像一个被遗弃在田野上的钢铁巨兽尸体，提醒着人们一个时代的终结和随之而来的创伤。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`废墟该何去何从？是拆毁，抹去这段艰难的记忆，还是封存，任其继续衰败？贝灵恩的选择充满了智慧和勇气。自2000年起，一项雄心勃勃的转型计划启动。它不是简单的美化，而是深刻的重塑。决策者、建筑师和社区居民共同参与，决定保留工业遗址最核心、最具震撼力的骨架——那庞大的洗煤厂、井架和部分厂房。然后，像施魔法一样，为这具钢铁骨架注入全新的血肉。于是，世界最大的室内攀岩中心之一在洗煤厂筒仓内诞生；矿工澡堂变成了引人深思的煤矿博物馆；巨大的储煤场被推平，成为拥有沙滩和滑道的 subtropical 水上乐园；铁轨变成了徒步和单车绿道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天你看到的Be-MINE，是这个转型故事的最新篇章。它坦然地展示着伤疤（生锈的钢铁、斑驳的混凝土），同时又骄傲地展示着新生（攀岩者的身影、戏水者的笑声）。它讲述的不再仅仅是煤炭的故事，而是关于一个社区如何直面工业宿命，如何从“生产能源”转向“生产体验”和“生产记忆”，如何将一段沉重的集体历史，转化为面向未来的共同资产。这个过程本身，就是一首关于韧性、创造与和解的现代史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（至少6-8小时）来充分体验Be-MINE的多元层次。最佳抵达时间是上午9点半左右，先在游客中心（位于旧工坊内）获取地图、了解当日活动并购买所需门票。上午光线好、体力充沛，适合进行核心的“历史沉浸”部分：先登上制高点俯瞰全局建立空间感，然后深入博物馆和标志性建筑内部。中午可以在园区的餐厅或自带野餐，在工业景观中的绿地上享用。下午则转向“活力体验”部分，根据兴趣选择攀岩、徒步或放松。这样安排，能让你从宏观到微观，从静默的历史到鲜活的生活，完整地感受这个地方的蜕变。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`园区占地极大，穿一双绝对舒适耐走的鞋子是首要铁律，部分区域是碎石路。如果想体验攀岩或泳池，务必提前查询开放时间并网上预订，尤其是周末非常紧俏。博物馆内的矿工故事录音多为荷兰语，记得在入口处租借英语导览机，否则会错过最动人的灵魂。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先走向那座最高的观景塔（由旧井架改造），乘坐电梯升至顶端，在轰鸣的风声中360度俯瞰整个如模型般铺陈开的庞大工业遗址与绿色林堡平原。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进“煤矿博物馆”（原矿工澡堂），在依旧保留着淋浴喷头和更衣柜编号的长廊里，通过老矿工的录音讲述触摸那段潮湿、黑暗又充满兄弟情谊的地下岁月。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`鼓起勇气踏入攀岩中心“Bevrijdingsmine”，仰头望向那从60米高筒仓内壁延伸出的五彩岩点，感受工业空间的尺度如何被人类的攀登精神重新定义。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那座安静矗立在草地上的“矿难纪念雕塑”，默念上面镌刻的每一个因事故逝去的名字和年龄，体会繁荣背后真实的生命重量。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着铺满碎石的旧铁轨步道“Mijnspoor”向远处的自然区散步，看生锈的铁轨逐渐被野花和灌木淹没，感受工业遗迹如何被时间与自然温柔回收。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果有孩子同行或自己童心未泯，一定要去“探险森林”和由储煤场改造的沙滩泳池区，看笑声如何在这些最“硬核”的工业基底上跳跃。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分回到双子洗煤厂脚下，看着夕阳的余晖将冰冷的混凝土染成温暖的金红色，这是专属于后工业景观的、宁静而壮丽的时刻。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`旧井架观景台顶层全景`}</h4>
                  <p className="text-sm text-gray-700">{`晴天的上午十点或下午四点，用广角镜头将前景的锈蚀钢铁结构与背景无垠的绿色平原、整齐的矿工住宅区一同纳入画面，形成强烈对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`攀岩中心内部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`任何时候进入，将相机置于地面向上垂直拍摄，捕捉攀岩者如同蚂蚁般在巨大筒仓内壁挑战的震撼透视，展现工业空间的惊人尺度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`洗煤厂东侧铁轨弯道处`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，蹲低机位，让生锈的铁轨作为引导线，延伸至被暖金色光线照亮的巨大洗煤厂建筑，营造出一种孤独而诗意的氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`博物馆澡堂更衣长廊`}</h4>
                  <p className="text-sm text-gray-700">{`利用对称构图，站在长廊正中，拍摄两排无尽的、编号清晰的更衣柜，营造强烈的纵深感与秩序感，这是最能引发历史遐想的肖像式场景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`连接双子洗煤厂的高空走廊下方向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`以巨大的混凝土支柱为画框，框住远处草地上玩耍的人们或骑行而过的单车，形成“沉重框架”与“轻盈生活”的趣味构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重仍是私人场地的矿工住宅区，避免对着居民窗户拍摄。使用无人机理论上在园区部分空旷区域是允许的，但必须先查询比利时最新的无人机法规并向园区管理方报备，最重要的是绝对避开攀岩中心和泳池等人员密集区。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`矿工之家体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在由当年矿工住宅“花园城市”改造的温馨B&B里，房东可能就是矿工后代，早晨能听到关于社区最地道的早餐桌故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计酒店隐居`}</h4>
                  <p className="text-sm text-green-800">{`选择遗址边缘由旧工业办公楼改造的精品设计酒店，房间保留了混凝土立柱和挑高空间，风格冷峻现代，与窗外的工业景观对话。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`自然怀抱露营`}</h4>
                  <p className="text-sm text-yellow-800">{`在Be-MINE毗邻的绿色森林公园内，有设施齐全的露营地，夜晚在帐篷里看巨大厂区的轮廓映在星空下，体验独特。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`中心城镇便捷`}</h4>
                  <p className="text-sm text-purple-800">{`若追求更多餐饮选择，可住回贝灵恩镇中心的历史酒店，搭乘当地的“矿区巴士”或骑行一小段即可抵达遗址，兼顾便利与氛围。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`矿工住宅区的B&B往往房间不多，预订需趁早，尤其是夏季。遗址周边夜晚非常安静，治安极佳，但照明偏暗，适合喜欢静谧的旅行者。如果计划体验攀岩或水上乐园，选择步行可达的住宿会大幅提升幸福感。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开贝灵恩时，我的背包里没有带走一块煤，但心里却装下了一整座山的重量。这重量不是压抑，而是一种踏实的、充满颗粒感的认知。它让我明白，真正的遗产，不仅仅是辉煌的宫殿和神圣的教堂，也可以是这些沾染着油污、汗水，甚至泪水的生锈机器和冰冷厂房。它们见证的不是王侯将相的丰功伟绩，而是成千上万普通人的生计、梦想与命运。在这里，历史不是教科书上扁平的文字，而是你可以用手触摸的粗糙混凝土，用耳朵聆听的风声与回响，用眼睛见证的疤痕与新芽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求光滑、快速、虚拟体验的时代，Be-MINE像一块坚硬的、未经打磨的原始矿石。它不讨好你，只是诚实地展示着自己的一切：它的力量，它的伤痛，它的沉寂，以及它涅槃后的勃勃生机。它教会我们，该如何与一段并不总是美好的过去相处——不是遗忘，不是粉饰，而是直面、接纳，并运用同样的创造力，去书写新的篇章。对于每一位热爱深度游的旅人而言，贝灵恩都是一次不可或缺的“在地球表面上的时间旅行”。它会拓宽你对“美”与“价值”的定义，让你在工业巨构的阴影下，听见历史的深沉呼吸，并看见人类社区那令人动容的韧性光芒。这不仅仅是一次游览，更是一场关于记忆、转型与希望的深刻对话。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/citadel-of-dinant" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadel of Dinant</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/arlon-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔隆古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arlon Roman Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alden-biesen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔登·比森城堡（条顿骑士团的宏大封地）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alden Biesen Castle</p>
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
