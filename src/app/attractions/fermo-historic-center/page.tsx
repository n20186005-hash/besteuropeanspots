import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '费尔莫古城 Fermo｜亚得里亚海的明珠，被时光遗忘的意大利山城秘境 - 最佳欧洲景点',
  description: '嘿，朋友，如果你厌倦了佛罗伦萨和罗马的人潮，想找一个“真正”的意大利，那么请跟我来费尔莫。我的第一印象不是看，而是“听”。当巴士吭哧吭哧爬上山坡，把你丢在人民广场时，最先迎接你的是一种深邃的宁静，混杂着远处隐约的教堂钟声、咖啡馆银勺碰杯的清脆声响，以及石板路上一位老先生皮鞋踏出的缓慢回音。空气里有股...',
}

export default function FermoHistoricCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '费尔莫古城', href: '/attractions/fermo-historic-center' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`费尔莫古城・Fermo・意大利・费尔莫`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你厌倦了佛罗伦萨和罗马的人潮，想找一个“真正”的意大利，那么请跟我来费尔莫。我的第一印象不是看，而是“听”。当巴士吭哧吭哧爬上山坡，把你丢在人民广场时，最先迎接你的是一种深邃的宁静，混杂着远处隐约的教堂钟声、咖啡馆银勺碰杯的清脆声响，以及石板路上一位老先生皮鞋踏出的缓慢回音。空气里有股特别的咸味，那是二十公里外亚得里亚海的风，翻过丘陵，带来了海洋的气息，又混合着老建筑石缝里苔藓的湿润和某家后院飘出的迷迭香味道。
这里不像个景点，更像一个巨大的、依然在呼吸的客厅。人民广场是它的中心，四周环绕着优雅的拱廊，下午的阳光斜射进来，把赭石色的墙壁染成蜂蜜色。本地人管这叫“Il Salotto di Fermo”（费尔莫的客厅）。你会看到夹着公文包的男人在拱廊下匆匆走过，老太太们坐在长椅上用当地方言热烈交谈，孩子们追着鸽子。那座宏伟的市政宫（Palazzo dei Priori）静静矗立，它的大门仿佛随时会走出一位身着文艺复兴长袍的官员。这份庄严与日常生活的烟火气毫无冲突地交织在一起，是费尔莫最动人的底色。
而费尔莫最核心的魅力，在于它的“层次感”。你脚下踩着的是21世纪的石板路，眼睛看着的是18世纪的巴洛克教堂立面，手触摸的可能是15世纪雕刻的门环，而这座城市的地基，是公元前一世纪古罗马人奠定的。这种感觉在爬上大教堂所在的山顶时达到顶峰。当你转过身，从165米高的山脊望出去，眼前是如波浪般起伏的绿色丘陵、红色屋顶的村落，一直延伸到天际线处那一抹闪亮的钴蓝色——那就是亚得里亚海。这一刻你会明白，为何古罗马人、中世纪领主、文艺复兴商人，都拼命想要占据这座山头。它既是堡垒，也是瞭望塔，更是一种精神上的制高点。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，如果你厌倦了佛罗伦萨和罗马的人潮，想找一个“真正”的意大利，那么请跟我来费尔莫。我的第一印象不是看，而是“听”。当巴士吭哧吭哧爬上山坡，把你丢在人民广场时，最先迎接你的是一种深邃的宁静，混杂着远处隐约的教堂钟声、咖啡馆银勺碰杯的清脆声响，以及石板路上一位老先生皮鞋踏出的缓慢回音。空气里有股特别的咸味，那是二十公里外亚得里亚海的风，翻过丘陵，带来了海洋的气息，又混合着老建筑石缝里苔藓的湿润和某家后院飘出的迷迭香味道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里不像个景点，更像一个巨大的、依然在呼吸的客厅。人民广场是它的中心，四周环绕着优雅的拱廊，下午的阳光斜射进来，把赭石色的墙壁染成蜂蜜色。本地人管这叫“Il Salotto di Fermo”（费尔莫的客厅）。你会看到夹着公文包的男人在拱廊下匆匆走过，老太太们坐在长椅上用当地方言热烈交谈，孩子们追着鸽子。那座宏伟的市政宫（Palazzo dei Priori）静静矗立，它的大门仿佛随时会走出一位身着文艺复兴长袍的官员。这份庄严与日常生活的烟火气毫无冲突地交织在一起，是费尔莫最动人的底色。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而费尔莫最核心的魅力，在于它的“层次感”。你脚下踩着的是21世纪的石板路，眼睛看着的是18世纪的巴洛克教堂立面，手触摸的可能是15世纪雕刻的门环，而这座城市的地基，是公元前一世纪古罗马人奠定的。这种感觉在爬上大教堂所在的山顶时达到顶峰。当你转过身，从165米高的山脊望出去，眼前是如波浪般起伏的绿色丘陵、红色屋顶的村落，一直延伸到天际线处那一抹闪亮的钴蓝色——那就是亚得里亚海。这一刻你会明白，为何古罗马人、中世纪领主、文艺复兴商人，都拼命想要占据这座山头。它既是堡垒，也是瞭望塔，更是一种精神上的制高点。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`费尔莫古城`} />
                <InfoRow label="英文名称" value={`Fermo`} />
                <InfoRow label="正式名称" value={`Fermo Historic Center`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`费尔莫`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`古罗马重要殖民地，中世纪繁荣的城邦，见证了亚得里亚海沿岸的权力更迭与文化交融。`} />
                <InfoRow label="建筑特色" value={`建在山脊上的城市，拥有从古罗马时期到文艺复兴时期层层叠加的建筑遗产，俯瞰亚得里亚海的壮丽景色。`} />
                <InfoRow label="建筑风格" value={`融合了古罗马的坚实、中世纪的紧凑与文艺复兴的优雅，形成独特的山城风貌。`} />
                <InfoRow label="文化价值" value={`活生生的历史层理博物馆，展现了意大利小镇如何将古老的辉煌与宁静的当代生活完美融合。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。内部主要景点如大教堂（Cattedrale di Santa Maria Assunta）开放时间一般为夏季（4月-9月）8:30-12:30, 15:30-19:30；冬季（10月-3月）8:30-12:30, 15:00-18:00。罗马蓄水池（Cisterne Romane）通常为周二至周日10:00-13:00, 15:00-18:00开放，周一闭馆。市政剧院（Teatro dell‘Aquila）仅在演出或有导览时开放。建议出行前再次核对官网，许多小教堂和博物馆在午休时间（13:00-15:30）会关闭。`} />
              <InfoRow label="门票价格" value={`漫步古城本身免费。进入大教堂免费，但登顶钟楼或参观地下考古区需小额捐赠（约2-3欧元）。罗马蓄水池门票约5欧元，持学生证或团体票有优惠。市政剧院导览游约6欧元。购买一张“Fermo Card”（约10-12欧元）可涵盖多个主要博物馆和景点，非常划算。`} />
              <InfoRow label="地址" value={`Piazza del Popolo, 1, 63900 Fermo FM, Italy`} />
              <InfoRow label="交通方式" value={`最近的主要国际机场是安科纳的马尔凯机场（AOI），距离约65公里。从机场可搭乘火车前往费尔莫站（Fermo Station），车程约1.5小时，需在安科纳中央火车站换乘一次。从罗马或博洛尼亚乘火车直达费尔莫更为方便，班次频繁。关键的“魔法时刻”是下火车之后：费尔莫火车站位于山下新城，而古城雄踞在山脊上。你需要搭乘从火车站前出发的本地巴士（1路或2路，约15分钟一班，车程10分钟）直达山顶的人民广场（Piazza del Popolo），这是探索古城的完美起点。自驾的话，古城周边有付费停车场，但狭窄的中世纪街道禁止外来车辆驶入，停车后步行探索是唯一方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`费尔莫的故事，得从一群精明的罗马人说起。公元前264年，罗马共和国为了巩固对亚得里亚海的控制，在这里建立了一个重要的殖民地，就叫“Firmum”（意为“坚固之地”）。他们看中的正是这易守难攻的山脊和俯瞰海岸线的战略位置。今天你在地下看到的那些令人惊叹的罗马蓄水池，就是那个时代的工程奇迹。30个房间，2200平方米，能储存一万五千立方米的水，由红砖砌成完美的拱顶。想象一下，两千多年前，罗马工程师就在这里精确计算着水流和承重，为整座城市提供生命之源。这些蓄水池在漫长的世纪里被遗忘，直到上世纪才重见天日，走进去那股凉意和回声，瞬间把你拉回帝国时代。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`罗马帝国崩溃后，费尔莫像所有意大利城市一样，经历了蛮族入侵的动荡。但它顽强的生命力在黑暗中世纪迸发出来。公元10世纪后，它成为了一个独立的城邦共和国，围绕着人民广场，建起了权力中心。那时，羊毛贸易和皮革加工让费尔莫富得流油，商人们的钱袋鼓起来，就开始竞相修建更漂亮的宫殿和教堂，争抢着请最好的艺术家。这就是为什么你在那些不起眼的小巷里，能突然撞见一扇雕刻无比精美的哥特式窗户，或者一幅褪了色但依然动人的湿壁画。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城市的命运总与大人物的抉择纠缠。13世纪，费尔莫在教皇党与皇帝党的血腥斗争中选边站队，城墙一次次被攻打、修复。到了15世纪，一位强权人物——弗朗切斯科·斯福尔扎（后来成为米兰公爵的雇佣兵首领）一度统治这里，留下了军事建筑的印记。但真正让费尔莫穿上文艺复兴华服的，是16世纪的教皇保罗三世。这位出身法尔内塞家族的教皇，将费尔莫封给了自己的侄子。于是，大量艺术家和建筑师被邀请而来，给城市进行了一次“文艺复兴式升级”。人民广场的拱廊被统一规划，市政宫被重新装饰，那种和谐、均衡、追求人文之美的新风尚，从此烙印在费尔莫的城市肌理上。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的剧本总有跌宕。18世纪一场大地震严重摧毁了许多建筑，紧接着拿破仑的军队来了又走。费尔莫渐渐从政治经济的舞台上悄然退场，归于宁静。但这未尝不是一种幸运。正是因为后来的工业化浪潮和旅游热潮主要光顾了海岸线，这座山巅古城才得以像一颗被包裹在琥珀里的昆虫，完好地保存了它层层叠叠的历史记忆。它没有变成博物馆式的空壳，人们依然住在那些几百年的老房子里，在古老的广场上举办集市，在罗马人挖掘的水池上方建造现代学校。这种连续性，才是费尔莫历史最鲜活的部分。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要给费尔莫一天时间，而且要给它一个慵懒的早晨。建议早上九点左右抵达人民广场，这时阳光正好温柔，咖啡馆刚摆出户外座椅，本地人刚开始一天的生活。整体游览需要5-6小时，节奏应该是“走走停停”。费尔莫的魅力在于细节和氛围，而不是打卡点数。路线设计是从城市中心的客厅（人民广场）出发，向上攀登至精神的顶点（大教堂），再向下探索历史的深处（罗马蓄水池），最后在蜿蜒的中世纪小巷里随意迷失，用感官去收集那些不期而遇的美好。中午过后，许多小景点会午休关门，所以把核心室内参观安排在上午，下午留给漫步和俯瞰全景。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双绝对舒适、鞋底有纹路的步行鞋，古城的鹅卵石路面美丽但湿滑，且全程都是上下坡。很多小型博物馆和教堂有严格的午休时间（大约13:00至15:30），计划参观时一定要避开这个时段，或者提前查好当天开放时间。这里几乎没有针对游客的消费陷阱，但记住在非常小的咖啡馆里，如果你选择坐下服务而不是站在柜台喝，咖啡价格可能会翻倍，入乡随俗站着喝才是地道体验。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在人民广场的拱廊下找家咖啡馆，点一杯意式浓缩，像当地人一样站着快速喝完，让咖啡因和广场的苏醒氛围一起唤醒你的感官。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进广场上的市政宫，直奔二楼的“地图大厅”（Sala del Mappamondo），屏住呼吸仰望那个建于1713年的巨大地球仪和收藏了数千册古书的图书馆，感受知识被虔诚供奉的肃穆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Via Mazzini向上漫步，让坡度带领你的脚步，在每一个岔路口随心选择一条更窄、更陡、铺着光滑鹅卵石的小巷钻进去，探索墙壁上突然出现的壁龛圣母像或爬满藤蔓的古老庭院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达城市制高点的大教堂广场，先别急着进教堂，绕着教堂走一圈，从各个角度欣赏它罗马式与哥特式混合的斑驳立面，并站在悬崖边的矮墙前，让亚得里亚海的辽阔画卷在你眼前彻底展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入大教堂内部，让你的眼睛适应昏暗的光线后，去寻找祭坛左侧那幅无价的“圣母加冕”三联画，并下到地下室，触摸古罗马时代和伦巴第人时期的原始地基。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂侧面的小路下山，去探访深藏地下的罗马蓄水池，在手电筒的光束中沿着两千年前的引水渠漫步，聆听水滴落下的回音，想象罗马工程师的智慧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到地面，在古城西侧安静的住宅区穿梭，找到那些没有名字的小广场，比如Piazzale San Giacomo，坐在长椅上看来往的居民，直到夕阳把整个城市染成金红色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏时分回到人民广场的拱廊下，选择一家有当地特色菜的餐厅，点一份用马尔凯大区特产的橄榄油和黑松露烹制的“橄榄阿斯科拉纳”或海鲜意面，为这一天画上完美的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`大教堂后方观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，站在大教堂后方的矮墙边，使用广角镜头，将斑驳的教堂石墙作为前景，中景是层层叠叠的红色屋顶和钟楼，远景是绵延至蓝色海洋的丘陵，温暖的光线会让层次感无比丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`罗马蓄水池内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`参观蓄水池时，请导游或管理员用手电筒从侧面照射砖砌拱顶和水池，关闭闪光灯，提高ISO，拍摄拱门与水面的对称倒影，那种穿越千年的幽暗与宁静感极为强烈。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`人民广场拱廊下的动态生活`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点或下午四点左右，在广场拱廊的柱子之间寻找框架构图，捕捉当地人骑车经过、朋友相聚喝咖啡、老人读报的动态瞬间，让生动的日常与宏伟的建筑背景形成故事性对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`Via dell‘Università小巷的纵深`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，走进这条陡峭狭窄的小巷，仰拍两侧高耸的古老石墙夹着一线蓝天的画面，强烈的明暗对比能拍出极具戏剧性的几何构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从Lungomare路远眺山城`}</h4>
                  <p className="text-sm text-gray-700">{`如果你有车或愿意步行一段下山路，黄昏时分开到通往海岸的SS16公路（Lungomare路段），从西北方向回望，可以拍到费尔莫古城整个雄踞在山脊上的剪影，背后是绚烂的晚霞。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是老人和小孩时，请务必先微笑并用手势询问，获得对方默许后再拍，尊重他们的隐私。教堂内部通常允许拍照，但严禁使用闪光灯和三脚架，以免破坏珍贵的艺术品和干扰其他参观者。费尔莫的光线在清晨和黄昏最为迷人，柔和且带有金色调，中午光线生硬，更适合探索室内或拍摄建筑细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`古城墙内由家族经营的小型旅馆，房间也许不大，但阳台正对着内部庭院，早晨能闻到房东太太在楼下厨房准备早餐传来的咖啡和自制果酱的香气。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由一座16世纪修道院部分建筑改造的精品酒店，保留了原始的拱顶石廊和静谧的回廊花园，房间宽敞古朴，夜晚安静得能听到自己的心跳，是真正的避世之所。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在古城边缘一座经过全面修复的19世纪贵族别墅里，房间拥有挑高的天花板和古董家具，巨大的露台花园可以无遮挡地俯瞰整个丘陵蔓延至大海的壮丽全景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`秘密据点`}</h4>
                  <p className="text-sm text-purple-800">{`古城山下新城区的现代设计公寓，空间开阔设施齐全，价格实惠，搭乘频繁的巴士10分钟即可上山，完美兼顾了探索古城的便利与入住舒适度的需求。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`预订古城内的住宿时，请务必确认是否有电梯，许多历史建筑只有楼梯，搬运大件行李会非常困难。费尔莫整体治安极好，夜晚独自在古城小巷行走也很安全，但依然建议避开完全无人且照明不足的小径。夏季（7-8月）是沿海地区的旺季，但费尔莫相对清净，提前一两周预订即可；春秋季是体验的最佳时节，住宿选择更多且价格更优。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开费尔莫时，我的背包里没有多出什么纪念品，但心里却好像被填进了一些沉甸甸的、安静的东西。这份触动，不是来自某个惊世骇俗的单一景观，而是来自一种完整的、缓慢流淌的生活韵律。在这里，历史不是被封存在玻璃罩子里的标本，而是晾晒在阳光下的被单，是菜市场里小贩的吆喝，是傍晚时分从家家户户窗口飘出的晚餐气息。它让你相信，一座城市可以既古老又鲜活，既庄严又亲切。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求“网红打卡”和效率至上的快节奏世界里，费尔莫的存在就像一个温柔的提醒。它告诉我们，旅行的意义有时不在于看到了多少清单上的东西，而在于你是否允许自己慢下来，去听一段石头讲述的故事，去和一位坐在门口晒太阳的老奶奶交换一个微笑，去感受时光如何像溪水一样，在这山脊上冲刷出深刻的、美丽的痕迹。如果你渴望一次真正深入的、与欧洲灵魂对话的旅行，那么请务必来费尔莫。它不会用喧嚣取悦你，但会用它全部的宁静与层次，为你提供一处可以安放疲惫、并找回生活质感的山巅秘境。这是一生中必须为自己预留的一次“沉浸式时光旅行”。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
