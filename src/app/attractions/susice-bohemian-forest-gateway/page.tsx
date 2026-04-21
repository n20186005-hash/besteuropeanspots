import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '苏希采 Susice｜波西米亚森林的火柴传奇与山间广场 - 最佳欧洲景点',
  description: '你得先从那条缓缓上坡的老路走进来，才能明白苏希采为什么被叫作“门户”。空气的味道最先不一样了，一种清冽的、混合着松木和远处溪流湿气的味道，一下子就把城市里的浑浊给洗掉了。眼前豁然开朗，是一个巨大得有些出乎意料的广场——自由广场。它不是你在布拉格见过的那种精致鹅卵石广场，而是带着一种粗犷的、山野气息的',
}

export default function SusiceBohemianForestGatewayPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '苏希采', href: '/destinations/europe' },
            { label: '苏希采', href: '/attractions/susice-bohemian-forest-gateway' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`苏希采・Susice・捷克・苏希采`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你得先从那条缓缓上坡的老路走进来，才能明白苏希采为什么被叫作“门户”。空气的味道最先不一样了，一种清冽的、混合着松木和远处溪流湿气的味道，一下子就把城市里的浑浊给洗掉了。眼前豁然开朗，是一个巨大得有些出乎意料的广场——自由广场。它不是你在布拉格见过的那种精致鹅卵石广场，而是带着一种粗犷的、山野气息的开阔。四周环绕着的房子，墙面是杏黄、淡粉和薄荷绿，被岁月冲刷得有些斑驳，屋顶是深沉的砖红，在波西米亚特有的那种带着水汽的阳光下，像一块巨大而温暖的调色板。广场中央没有雕塑，空荡荡的，反而让远处的教堂尖塔和更远处墨绿色森林的轮廓，成了舞台最天然的背景。你立刻就会觉得，这不是一个仅供观赏的景点，这是小镇的客厅，是生活的中心。
耳边传来的是极生活化的声音。咖啡馆外椅腿摩擦石板路的刺啦声，自行车铃铛清脆的叮铃声，还有当地老人提着菜篮子慢悠悠走过时，用那种柔软而顿挫的捷克语互相打招呼的声音。如果你凑近广场边那些拱廊下的商店橱窗，会发现里面卖的不是旅游纪念品，而是五金、布料、新鲜面包。然后，你的鼻子会捕捉到一丝若有若无的、特别的香气，不是咖啡香，也不是面包香，而是一种干燥的、略带化学感的木头味。这气味是一把钥匙，它引着你看向广场一侧那座看起来像仓库的黄色建筑，那里就是整个小镇心跳的秘密——火柴博物馆。这股气味，是苏希采的灵魂，是它从一座普通山地小镇，变成世界闻名的“火柴城”所留下的、最固执的记忆。
最打动人心的，莫过于这种反差与融合。一边是静谧如画、时光仿佛停滞的山地广场风光，另一边是轰鸣已逝、但精神犹存的工业血脉。你可以坐在广场边的长椅上，看着孩子们追逐鸽子，背后墙壁上可能就嵌着一块纪念“1844年第一家火柴厂在此创立”的铭牌。这种宁静生活与宏大历史的无缝交织，让苏希采拥有了一种罕见的温度。它不是一座僵化的博物馆，而是一个把辉煌过去当作平常日子来过活的地方。当你触摸广场喷泉那冰凉的石沿，指腹感受到的不只是石材的粗糙，更像是触摸到了一段关于燃烧与熄灭、创新与传统、集体劳动与小镇温情的故事表皮。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你得先从那条缓缓上坡的老路走进来，才能明白苏希采为什么被叫作“门户”。空气的味道最先不一样了，一种清冽的、混合着松木和远处溪流湿气的味道，一下子就把城市里的浑浊给洗掉了。眼前豁然开朗，是一个巨大得有些出乎意料的广场——自由广场。它不是你在布拉格见过的那种精致鹅卵石广场，而是带着一种粗犷的、山野气息的开阔。四周环绕着的房子，墙面是杏黄、淡粉和薄荷绿，被岁月冲刷得有些斑驳，屋顶是深沉的砖红，在波西米亚特有的那种带着水汽的阳光下，像一块巨大而温暖的调色板。广场中央没有雕塑，空荡荡的，反而让远处的教堂尖塔和更远处墨绿色森林的轮廓，成了舞台最天然的背景。你立刻就会觉得，这不是一个仅供观赏的景点，这是小镇的客厅，是生活的中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "耳边传来的是极生活化的声音。咖啡馆外椅腿摩擦石板路的刺啦声，自行车铃铛清脆的叮铃声，还有当地老人提着菜篮子慢悠悠走过时，用那种柔软而顿挫的捷克语互相打招呼的声音。如果你凑近广场边那些拱廊下的商店橱窗，会发现里面卖的不是旅游纪念品，而是五金、布料、新鲜面包。然后，你的鼻子会捕捉到一丝若有若无的、特别的香气，不是咖啡香，也不是面包香，而是一种干燥的、略带化学感的木头味。这气味是一把钥匙，它引着你看向广场一侧那座看起来像仓库的黄色建筑，那里就是整个小镇心跳的秘密——火柴博物馆。这股气味，是苏希采的灵魂，是它从一座普通山地小镇，变成世界闻名的“火柴城”所留下的、最固执的记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，莫过于这种反差与融合。一边是静谧如画、时光仿佛停滞的山地广场风光，另一边是轰鸣已逝、但精神犹存的工业血脉。你可以坐在广场边的长椅上，看着孩子们追逐鸽子，背后墙壁上可能就嵌着一块纪念“1844年第一家火柴厂在此创立”的铭牌。这种宁静生活与宏大历史的无缝交织，让苏希采拥有了一种罕见的温度。它不是一座僵化的博物馆，而是一个把辉煌过去当作平常日子来过活的地方。当你触摸广场喷泉那冰凉的石沿，指腹感受到的不只是石材的粗糙，更像是触摸到了一段关于燃烧与熄灭、创新与传统、集体劳动与小镇温情的故事表皮。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`苏希采`} />
                <InfoRow label="英文名称" value={`Susice`} />
                <InfoRow label="正式名称" value={`Susice`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`苏希采`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`波西米亚森林地区最重要的工业历史重镇之一，19世纪至20世纪中欧最大的火柴生产中心，被誉为“捷克火柴之都”。`} />
                <InfoRow label="建筑特色" value={`以色彩柔和的巴洛克与古典主义立面建筑环绕的广阔山间广场为核心，融合了传统山地木结构与工业仓库建筑群。`} />
                <InfoRow label="建筑风格" value={`以巴洛克晚期和帝国古典主义风格为主，混杂新文艺复兴与功能主义工业建筑，形成独特的山地商业城镇风貌。`} />
                <InfoRow label="文化价值" value={`见证了从中世纪贸易小镇到近代工业化，再到后工业时代转型的完整历程，是活着的捷克手工业与社区记忆的博物馆。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。核心景点如火柴博物馆（Sirky Museum）开放时间为周二至周日 9:00-12:00 & 13:00-17:00，冬季（11月至3月）可能缩短开放时间或仅周末开放，建议行前在其官网或当地信息中心核实。镇广场上的教堂（St. Wenceslas Church）通常仅在宗教活动和夏季对游客开放内部参观，具体时间不定。小镇旅游局信息中心全年开放（除重大节假日），提供地图和导览服务。`} />
              <InfoRow label="门票价格" value={`火柴博物馆成人票约80捷克克朗（约3欧元），学生及老年人优惠票约40捷克克朗。教堂登塔（如开放）费用约50捷克克朗。小镇广场及大部分公共区域免费。部分季节性导览团费用另计，约150-200捷克克朗每人。`} />
              <InfoRow label="地址" value={`Náměstí Svobody 1, 342 01 Sušice, Czech Republic`} />
              <InfoRow label="交通方式" value={`从布拉格出发最便捷。从布拉格中央车站（Praha hl.n.）乘坐前往捷克布杰约维采或比尔森的火车，在赫拉尼采（Horažďovice předměstí）或克拉托维（Klatovy）换乘区域火车，最终抵达苏希采火车站。总车程约2.5-3小时，班次每天约10班，建议在捷克铁路（ČD）官网购买车票。从比尔森出发更近，有直达区域巴士或火车，约1小时车程。小镇火车站位于镇边缘，步行10-15分钟即可到达中心广场。自驾从布拉格沿E50/D5高速至比尔森，再转D22公路向东，全程约1小时40分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事得从更早的时候说起。苏希采躺在奥特拉河畔，背靠广袤的波西米亚森林，这条河和这片林，是它最初的命脉。中世纪时，这里是重要的黄金运输和贸易路线上的一个据点，河上漂着原木，路上走着驮马队，小镇因此积累了最初的财富。那些广场周围坚固而美丽的房子，很多就是在那段商贸岁月里建起来的。但真正改变小镇命运的，不是黄金，而是森林里取之不尽的木材，以及19世纪席卷欧洲的那场工业革命火花。一个名叫沃伊捷赫·艾斯纳的商人敏锐地看到了机会，1844年，他在这里建立了第一家火柴厂。你想想看，那时全世界点灯、点火都还依赖着麻烦的火镰和火绒，安全火柴还是个新鲜玩意儿。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "艾斯纳的成功像一颗火种，点燃了整个小镇。接下来的几十年里，苏希采变成了一个巨大的火柴实验场和制造车间。森林提供了优质的白杨木和松木，河水驱动着切割和研磨的机器，而小镇的居民，几乎家家户户都有人卷入这场“造火”的热潮。从木材切割、浸泡化学药液、蘸取火柴头，到装盒打包，形成了一条完整的生产线。到19世纪末，苏希采的火柴已经行销奥匈帝国全境，甚至远渡重洋。小镇上冒起了更多的烟囱，不是那种吓人的黑烟，而是混合着木材和磷粉气味的、标志性的白烟。广场上运货的马车变成了卡车，工人们穿着统一的工装，在汽笛声中上下班。火柴，让这个山地小镇一跃成为中欧工业版图上的一个亮点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，辉煌背后也有阴影。早期的火柴生产使用有毒的白磷，对工人的健康造成巨大损害，“磷毒性颌骨坏死”是可怕的职业病。苏希采的工厂主和工人们，自身也是推动技术革新的力量。后来，更安全的红磷火柴被推广开来，工厂条件逐渐改善。小镇的命运也和国家的命运紧紧捆绑，经历了两次世界大战的动荡，工厂时而国有化，时而停产。但火柴生产的核心技艺和那份集体认同，像一种倔强的基因留了下来。即使在共产主义时期，这里的国营火柴厂依然是重要的生产单位，那些印着“SUŠICE”字样的火柴盒，是整整几代捷克人的共同记忆。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点发生在1990年代。随着打火机的普及和东欧剧变后的经济转型，火柴的需求急剧萎缩。曾经的“火柴之都”面临着严峻的挑战：工厂陆续关闭，机器沉寂，那股熟悉的木头与化学剂混合的气味渐渐从空气中消散。小镇站在了一个十字路口：是让这段历史随风逝去，还是将它转化为新的养分？苏希采选择了后者。他们把旧厂房的一部分改造成为“火柴博物馆”，不是那种光鲜亮丽的展览，而是近乎原样保留了部分生产线，让你能走进那个充满巨大齿轮、传送带和木屑味道的空间，仿佛工人才刚刚下班。这是一种充满勇气的纪念，不回避工业的粗糙与艰辛，坦然展示自己作为“劳动者小镇”的本色。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天的苏希采，依然保留着那段历史的物理印记。除了博物馆，你走在一些僻静的街道，还能看到旧工厂的红砖墙和高大的窗户，它们有的变成了创意工作室，有的成了公寓。广场上的老人们，很多人的父辈、祖辈都在火柴厂工作过。那段集体劳动的岁月，塑造了小镇团结、务实、略带粗犷的性格。当你了解到这一切，再回到那个宁静的广场，你会发现，那不仅仅是一个美丽的空间，它更是一个舞台，上演过从骡马商队到工业齿轮，再到如今休闲旅游的漫长戏剧。每一块砖石，都浸透了汗水、烟火气和坚韧的生命力。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味苏希采，建议安排整整一天时间，最好是从上午十点左右抵达。这样既能避开可能的一日游小团（如果有的话），又能完整感受从清晨的宁静到午后的生动，再到黄昏的温柔。整体游览节奏应该是松弛的，以自由广场为圆心，向外缓慢辐射。上午精神饱满时，先去探索核心的历史与工业部分（博物馆和教堂）；中午在广场享用一顿地道的捷克午餐，感受当地的生活气息；下午则进行更轻松的漫步，探索河岸与小巷，或者深入了解一下当地的手工艺品。这样的安排张弛有度，让你有时间消化这个小镇厚重的历史，也能沉浸在它当下的日常之美中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇的餐厅在下午两点到五点之间厨房可能休息，规划午餐时间要趁早。当地的旅游信息中心工作人员英语通常不错，可以免费获取详细的地图和近期活动清单。春秋季节山区天气多变，即使白天晴朗也务必带上一件防风外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站拖着行李箱沿着绿树成荫的Na Bateriích街慢悠悠走上十分钟，让第一眼看到广阔自由广场的惊喜感充分发酵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向广场东南角那栋显眼的黄色建筑，推开火柴博物馆厚重的木门，让那股混合了陈年木材、微尘和淡淡化学试剂的独特气味将你包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花至少一个小时沉浸在博物馆里，亲手触摸那些冰冷的旧机器，看老照片上工人们专注的脸，在复原的作坊场景前想象昔日繁忙的声响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，穿过广场，登上圣温塞斯拉斯教堂的钟楼（如果开放），在微微摇晃的木楼梯尽头，俯瞰整个小镇像玩具模型般铺展在森林环抱之中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着教堂后方的小巷下坡，去寻找奥特拉河的身影，沿着河岸步道走一段，听听流水声，看看那些曾经可能为工厂提供动力的老水车遗迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到广场，在拱廊下找一家招牌古朴的餐厅，点一份烤猪肘或炖牛肉，配上一杯比尔森地区产的啤酒，像个当地人一样享受漫长的午餐时光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后在广场周边的特色小店逛逛，不要错过那些卖手工木制品、传统波西米亚玻璃或复古火柴盒的小铺子，与店主用简单的英语和手势聊聊天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果还有余力且天气晴好，可以向镇子边缘走走，找一条标记清晰的森林小径开端，真正体验一下“波西米亚森林门户”那扑面而来的自然气息。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`自由广场全景机位`}</h4>
                  <p className="text-sm text-gray-700">{`站在广场西北角的药店门口，用广角镜头将色彩斑斓的建筑立面、开阔的石板地面以及远处教堂的尖塔一同纳入画框，最佳时间是下午三四点，阳光为建筑勾勒出金色的轮廓。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`火柴博物馆内部光影`}</h4>
                  <p className="text-sm text-gray-700">{`在博物馆允许拍摄的区域，寻找阳光从高侧窗斜射入厂房车间的时刻，拍摄那些静止的机器、飞舞的尘埃光束与深邃的阴影，营造出时光凝固的工业美学。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`奥特拉河畔的倒影`}</h4>
                  <p className="text-sm text-gray-700">{`从教堂后方的小路下到河边，在平静无风的水面边，拍摄对岸老房子和树木的清晰倒影，清晨或傍晚光线柔和时效果最佳，画面宁静而富有诗意。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`森林门户视角`}</h4>
                  <p className="text-sm text-gray-700">{`从镇子南端通往森林的小路回望小镇，将墨绿色的森林作为前景，中景是红屋顶的建筑群，远景是教堂尖塔，构图层次丰富，尤其适合雨后天晴、空气通透时拍摄。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`拱廊下的生活场景`}</h4>
                  <p className="text-sm text-gray-700">{`在广场拱廊内，用长焦镜头捕捉当地人日常生活的瞬间，如老人读报、朋友咖啡闲聊、店主整理橱窗，注意利用拱廊的纵深感构图，避免直接拍摄人物正脸以示尊重。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在博物馆内拍摄前请务必确认是否允许使用闪光灯，通常为了保护展品是禁止的。拍摄当地居民时请尽量保持距离，以拍摄环境氛围为主，如需人物特写最好先微笑征得同意。小镇夜晚灯光较暗，如需拍摄夜景需准备稳固的三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择广场周边百年老建筑里的公寓民宿，房东老太太可能会送你一盒印着苏希采风景的复古火柴，晚上能听见广场上轻微的、令人安心的回声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色历史酒店`}</h4>
                  <p className="text-sm text-green-800">{`下榻由旧火柴厂行政楼改造的精品设计酒店，房间保留了原始的砖墙和高挑天花板，装饰着工业风的灯具和老照片，睡在历史的脉络里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`森林边缘度假屋`}</h4>
                  <p className="text-sm text-yellow-800">{`住在镇外步行可达的森林小屋，全木结构，早晨在鸟鸣和松香中醒来，露台上就能远眺晨雾笼罩的小镇全景，真正体验门户的自然静谧。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近干净简单的现代旅馆，价格亲民，对于自驾或只想短暂停留的旅行者非常方便，且通常提供免费的停车场。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季和周末（尤其是节假日）住宿相对紧张，建议提前一两周预订。小镇非常安全，夜间安静，但多数民宿没有电梯，如果携带大件行李预订时需留意。选择森林边的住宿意味着需要短途步行或驾车进入镇中心，但获得的宁静体验是超值的。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开苏希采的时候，我兜里揣着一盒在博物馆商店买的火柴。它很轻，但感觉又很重。轻的是它的物理重量，重的却是它所承载的那段关于光、热、劳动与生存的集体记忆。在这个数字时代，我们已经习惯了按动开关就获得光明，滑动屏幕就点燃虚拟的火焰。苏希采的存在，像是一个温和的提醒。它提醒我们，人类曾如何郑重地对待“点燃”这件事，如何依靠集体的智慧与汗水，从森林和矿石中，为自己争取一点珍贵的温暖与光亮。那段历史并不遥远，它就封存在这些斑驳的墙面、寂静的厂房和广场上老人平静的眼眸里。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这就是为什么，每一位热爱深度游的旅人都应该来这里看看。它不像布拉格那样华丽炫目，也不像CK小镇那样童话感十足。苏希采的美，是一种需要你静下来，用嗅觉去分辨空气中的松木味，用指尖去触摸粗糙的石砖，用心去倾听广场沉默之下那些历史回声的美。它展示了一种社区如何在时代巨变中，既不忘却自己轰轰烈烈的过去，又能安然地步入平淡而真实的现在。在这里，你感受到的不是疏离的景观，而是一种坚韧的、带着烟火气的生命力。当你划亮那根来自苏希采的火柴，那簇小小的、温暖的火焰，照亮的不只是瞬间的黑暗，或许还有我们对传统、对劳动、对一个地方如何定义自身价值的久远思考。这趟旅程，是一次对“何处是故乡，何以是故乡”的深情叩访。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/klatovy-catacombs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉托维耶稣会教堂与地下墓穴</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Klatovy Catacombs</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/dolni-vitkovice-industrial-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    下
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">下维特科维采工业遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dolní Vítkovice</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/pernstejn-castle-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩恩施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Pernštejn Castle</p>
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
