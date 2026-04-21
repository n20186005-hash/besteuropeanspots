import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '里昂历史中心 Historic Centre of Lyon｜漫步两千年“口袋”之城，在丝绸与光影中沉醉 - 最佳欧洲景点',
  description: '嘿，朋友，想象一下，你从索恩河畔一抬头，就看到一整片依山而建的、蜜糖色的老房子，在午后的阳光下泛着温暖的光。那里就是里昂的历史心脏——老里昂。你穿过圣让广场，第一个撞进你感官的，不是景象，而是一种混合的气味：刚烤好的布里欧修面包的黄油香，从百年面包店门缝里飘出来；混杂着一丝老石头被太阳晒过后散发的、...',
}

export default function HistoricCentreOfLyonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '里昂历史中心', href: '/attractions/historic-centre-of-lyon' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`里昂历史中心・Historic Centre of Lyon・法国・里昂`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下，你从索恩河畔一抬头，就看到一整片依山而建的、蜜糖色的老房子，在午后的阳光下泛着温暖的光。那里就是里昂的历史心脏——老里昂。你穿过圣让广场，第一个撞进你感官的，不是景象，而是一种混合的气味：刚烤好的布里欧修面包的黄油香，从百年面包店门缝里飘出来；混杂着一丝老石头被太阳晒过后散发的、略带潮湿的矿物气息；偶尔，一阵咖啡的醇厚会猛地抓住你。这就是老里昂，它不是一座冰冷的古迹，而是一个仍然在呼吸、在生活的古老社区。
你漫无目的地钻进那些狭窄如峡谷的街道——圣让街、牛街、勃艮第街。脚下是光滑的圆石，被几个世纪的脚步磨得发亮。抬头看，建筑的外立面会讲故事：赭石色、玫瑰色、淡黄色的墙壁上，雕刻着精致繁复的窗棂、滑稽的怪兽排水口、还有那些带有螺旋花纹的“橱窗”，那是文艺复兴时期富商们用来展示丝绸的凸窗。阳光很难直射到街面，只在楼宇的缝隙间投下长长的、明暗交错的光影，空气微凉，耳边是模糊的法语交谈声、餐馆后厨的叮当声，以及远处教堂隐约的钟鸣。你会感觉，时间在这里不是一条直线，而是层层叠叠的。
最迷人的，是你会发现一些不起眼的门洞，挂着小小的铜牌，上面写着“Traboule”。推开那扇厚重却通常未锁的木门，就像打开了魔法世界的入口。里面是一个豁然开朗的、被高楼围起来的静谧庭院，中央或许有一口爬满青苔的古井。穿过庭院，又是一段有穹顶的昏暗走廊，走廊尽头有螺旋的石梯通往楼上住户。这些迷宫般的通道，原本是丝绸工人搬运货物、躲避风雨的实用设施，如今成了探险的乐园。你永远不知道下一扇门后，是一个摆满鲜花的安静天井，还是另一条通往平行街道的捷径。这种公共与私密、光明与幽暗的不断转换，是里昂老城独一无二的节奏。
在这里，你能真切地感受到什么叫“活着的遗产”。古董商在橱窗后擦拭银器，主妇在 traboule 里低声闲聊，游客举着地图一脸好奇地张望。它不像某些博物馆式的老城，这里的生活从未中断。它的核心魅力，就在于这种厚重的历史感与鲜活的市井气完美交融的状态，你不仅是观光，更是潜入了一座城市两千年的记忆与日常之中，用自己的脚步去翻阅它一页页立体而生动的故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下，你从索恩河畔一抬头，就看到一整片依山而建的、蜜糖色的老房子，在午后的阳光下泛着温暖的光。那里就是里昂的历史心脏——老里昂。你穿过圣让广场，第一个撞进你感官的，不是景象，而是一种混合的气味：刚烤好的布里欧修面包的黄油香，从百年面包店门缝里飘出来；混杂着一丝老石头被太阳晒过后散发的、略带潮湿的矿物气息；偶尔，一阵咖啡的醇厚会猛地抓住你。这就是老里昂，它不是一座冰冷的古迹，而是一个仍然在呼吸、在生活的古老社区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你漫无目的地钻进那些狭窄如峡谷的街道——圣让街、牛街、勃艮第街。脚下是光滑的圆石，被几个世纪的脚步磨得发亮。抬头看，建筑的外立面会讲故事：赭石色、玫瑰色、淡黄色的墙壁上，雕刻着精致繁复的窗棂、滑稽的怪兽排水口、还有那些带有螺旋花纹的“橱窗”，那是文艺复兴时期富商们用来展示丝绸的凸窗。阳光很难直射到街面，只在楼宇的缝隙间投下长长的、明暗交错的光影，空气微凉，耳边是模糊的法语交谈声、餐馆后厨的叮当声，以及远处教堂隐约的钟鸣。你会感觉，时间在这里不是一条直线，而是层层叠叠的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最迷人的，是你会发现一些不起眼的门洞，挂着小小的铜牌，上面写着“Traboule”。推开那扇厚重却通常未锁的木门，就像打开了魔法世界的入口。里面是一个豁然开朗的、被高楼围起来的静谧庭院，中央或许有一口爬满青苔的古井。穿过庭院，又是一段有穹顶的昏暗走廊，走廊尽头有螺旋的石梯通往楼上住户。这些迷宫般的通道，原本是丝绸工人搬运货物、躲避风雨的实用设施，如今成了探险的乐园。你永远不知道下一扇门后，是一个摆满鲜花的安静天井，还是另一条通往平行街道的捷径。这种公共与私密、光明与幽暗的不断转换，是里昂老城独一无二的节奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这里，你能真切地感受到什么叫“活着的遗产”。古董商在橱窗后擦拭银器，主妇在 traboule 里低声闲聊，游客举着地图一脸好奇地张望。它不像某些博物馆式的老城，这里的生活从未中断。它的核心魅力，就在于这种厚重的历史感与鲜活的市井气完美交融的状态，你不仅是观光，更是潜入了一座城市两千年的记忆与日常之中，用自己的脚步去翻阅它一页页立体而生动的故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`里昂历史中心`} />
                <InfoRow label="英文名称" value={`Historic Centre of Lyon`} />
                <InfoRow label="正式名称" value={`Historic Centre of Lyon`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`里昂`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`法国保存最完好的文艺复兴街区之一，见证了从罗马时代到丝绸贸易鼎盛时期两千年不间断的城市发展史。`} />
                <InfoRow label="建筑特色" value={`拥有欧洲最大面积的文艺复兴建筑群，其精髓在于隐藏在建筑内部、连接街道的数百条被称为“traboules”的秘密通道和庭院。`} />
                <InfoRow label="建筑风格" value={`以意大利文艺复兴风格为主导，融合了本土的高卢-罗马遗风和中世纪哥特式元素，形成独特的里昂样貌。`} />
                <InfoRow label="文化价值" value={`不仅是建筑博物馆，更是活生生的城市肌理，丝绸工人的抗争、木偶剧的文化、隐秘的抵抗运动历史都层叠于此，是欧洲城市生活的鲜活剖面。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天开放。内部景点（如博物馆、 traboules 通道）开放时间各异：大多数博物馆开放时间为周二至周日 10:00-18:00，周一闭馆。关键 traboules（秘密通道）的开放时间较为灵活，部分由居民管理，通常建议在白天（9:00-17:00）安静探访，夜间关闭。节假日（如圣诞节、元旦）大部分室内景点关闭。`} />
              <InfoRow label="门票价格" value={`探索历史中心街区本身免费。内部各景点单独收费：里昂高卢-罗马博物馆门票约8欧元；里昂微型电影博物馆门票约9欧元；里昂木偶博物馆门票约8欧元。有各种城市通票（Lyon City Card）可选择，涵盖交通和多数博物馆，24小时约28欧元。学生、青少年及特定群体有优惠。`} />
              <InfoRow label="地址" value={`Vieux Lyon, 69005 Lyon, France`} />
              <InfoRow label="交通方式" value={`从里昂圣埃克絮佩里机场（LYS）出发：最便捷方式是乘坐机场快线电车（Rhônexpress），约30分钟直达市中心的里昂帕尔迪厄火车站（Gare de Lyon-Part-Dieu），单程约16.3欧元。从帕尔迪厄火车站，换乘地铁D线，坐两站到“美丽广场”（Bellecour）站，出站即到历史中心边缘，全程约45分钟。从法国其他城市乘火车抵达里昂帕尔迪厄站或里昂佩拉什站（Gare de Lyon-Perrache）后，地铁网络（A、D线）均可轻松抵达历史中心（Vieux Lyon站或 Bellecour站），车程10-15分钟。建议购买次票或日票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲里昂的故事，得从一座山开始——富维耶山。早在公元前43年，罗马人就在这里建立了“卢格杜努姆”，它很快成为高卢地区最重要的城市。山顶那座气势恢宏的剧场，就是那个时代荣光的证明。罗马帝国衰落后，城市的重心逐渐从山上转移到山脚下，靠近索恩河畔，也就是今天老里昂的雏形。中世纪的里昂，围绕着圣让大主教教堂慢慢生长，教堂那融合了罗马式和哥特式的建筑，就像一本石头史书，记录了这段信仰为纲的岁月。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但真正让里昂脱胎换骨、穿上今天这件华丽文艺复兴外衣的，是15世纪末开始的丝绸贸易。当时，法国国王路易十一决心打破意大利对丝绸的垄断，将丝绸工业中心定在了里昂。财富，像洪水一样涌来。意大利的银行家、商人、工匠纷纷北上，他们不仅带来了丝绸技术和资本，更带来了佛罗伦萨和热那亚的建筑品味。于是，在16世纪，老里昂进行了一场空前的大改造。本地富商和意大利新贵们竞相修建豪宅，他们要求建筑有开阔的内部庭院供丝绸晾晒，有华丽的旋梯和雕刻精美的窗框来彰显地位。最重要的是，为了在雨天也能方便地运输珍贵的丝绸卷，他们借鉴并极大地扩展了中世纪已有的通道系统，建成了那个复杂如迷宫般的“traboules”网络。这些通道，成了里昂丝绸经济的血管。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`丝绸带来了繁荣，也孕育了血泪。被称为“canuts”的丝绸工人，住在拥挤的克罗瓦-鲁斯坡地上，终日辛劳却生活困苦。1831年和1834年，这里爆发了欧洲早期著名的工人起义。工人们修筑街垒，那些熟悉的 traboules 成了他们神出鬼没、传递信息和躲避镇压的阵地。你能在今天的红十字区墙壁上，看到纪念那段抗争历史的壁画。丝绸业的黄金时代最终逝去，但老里昂的物理框架被奇迹般地保存了下来。它没有在19世纪奥斯曼式的大改造中被推平，某种程度上是因为当时它已经显得“过时”和“拥挤”，反而因祸得福。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了二战时期，这些隐秘的通道再次扮演了关键角色。里昂是法国抵抗运动的重要中心。抵抗战士们利用他们对 traboules 迷宫般结构的熟悉，与纳粹盖世太保周旋，传递情报，转移人员。今天，当你安静地穿过某条寂静的通道时，或许脚下正是当年某个紧张的心跳加速的夜晚，一位信使匆匆跑过的路径。从罗马行政中心，到文艺复兴的商贸明珠，再到工人运动的舞台和抵抗运动的庇护所，里昂历史中心的每一块石头，都浸染了不止一层的记忆。它不是静止的，它是一部用石头、砖瓦和人类活动写成的、关于欧洲城市命运的动态史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味里昂历史中心，建议安排整整一天时间，并采取“由高到低，由外至内”的节奏。最佳抵达时间是早上9点左右，先从富维耶山俯瞰全景建立空间概念，然后下山沉浸于老城街巷，午后探索神秘的通道，傍晚感受河岸的松弛。这样安排既能避开山顶拥挤的人流，又能享受老城晨间的清净，并在光线最柔和的时候捕捉 traboules 庭院的美。整体耗时约8-9小时，节奏宜张弛有度，多留时间给偶然的发现。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`探访 traboules 时请务必保持安静，尊重这是居民楼的内部空间，不要喧哗或擅闯标有“私人”的区域。
里昂老城街道起伏且多为石板路，一定要穿一双绝对舒适耐走的鞋子，高跟鞋在这里是“灾难”。
许多小餐馆午餐时段很拥挤，建议要么早于12点要么晚于13点半去，或者提前一天预订。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨乘富维耶缆车登上山顶，在罗马剧场遗址的古老石阶上坐下，俯瞰整个里昂在晨光中苏醒，索恩河与罗讷河像两条银带将城市分割`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后从圣让广场开始漫游，首先钻进圣让首席大教堂感受其内部幽深的光线与天文钟的古老嘀嗒声`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着铺满圆石板的圣让街慢慢逛，用鼻子寻找那家百年老店“里昂妈妈”传来的浓郁巧克力与糖渍栗子甜香`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随机选择一条标有“Traboule”的入口，勇敢推门进去，在迷宫般的庭院与廊桥间来一场不设定目标的探险`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在牛街找一家传统的“里昂小酒馆”享用午餐，必点一道“里昂沙拉”和本地手工香肠，体验正宗里昂工薪阶层的美食`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后穿过索恩河上的行人大桥，爬到红十字区陡峭的坡道上，寻找那些描绘丝绸工人历史的巨大壁画`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前回到索恩河畔，在码头边的旧书摊随意翻捡，看夕阳为对岸老房子的墙面镀上最后一层浓郁的金色`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后重回老城，此时游客散去，本地人出来散步，在昏暗的街灯下感受 traboules 通道更显神秘幽静的另一面`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`富维耶山圣母院侧后方平台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，利用长焦镜头压缩空间，将金色的圣母院穹顶、老城区的红色屋顶与远方平原一同纳入画框，层次感极佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣让街中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前后，阳光能斜射入狭窄街道，站在路中央仰拍两侧文艺复兴建筑的立面与招牌，捕捉光线在精致雕花上跳跃的细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`Traboule 庭院内部`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分当阳光直射入天井时，寻找有绿色植物或彩色门窗的庭院，让明媚的光影与古老的石墙形成质感对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`索恩河对岸（红十字区一侧）`}</h4>
                  <p className="text-sm text-gray-700">{`蓝调时刻（日落后半小时），面对亮起灯火的老城建筑群进行长曝光拍摄，河水中的倒影会让画面充满梦幻色彩。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`红十字区壁画墙前`}</h4>
                  <p className="text-sm text-gray-700">{`利用壁画本身强烈的故事性和视觉冲击力，将路过的人物作为动态前景，营造历史与当下对话的瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在 traboules 内拍照尽量使用静音快门，避免使用闪光灯，以免打扰居民。`}</li>
                <li>• {`里昂的天气变化较快，清晨常有平流雾从两河升起，这是拍摄朦胧梦幻之城景的绝佳时机，需提前查好天气并早起。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`穿越之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城一栋15世纪商贾宅邸改造的精品酒店里，睡在古老的木梁下，清晨推开窗就是教堂的钟声与石板路的声音。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`文艺栖居`}</h4>
                  <p className="text-sm text-green-800">{`选择索恩河左岸（红十字区）的设计师民宿，由旧丝绸作坊改造，空间开阔，拥有俯瞰老城全景的露台，沉浸在工业复古与艺术氛围中。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷之选`}</h4>
                  <p className="text-sm text-yellow-800">{`住在“美丽广场”附近的现代酒店，这是城市的正中心，步行到老城仅五分钟，兼顾了探索古迹的便利与舒适安静的睡眠环境。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`本地体验`}</h4>
                  <p className="text-sm text-purple-800">{`租住老城深处一间带小庭院的老公寓，自己去街角面包店买早餐，像真正的里昂人一样在 traboules 间穿梭回家。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿通常房间较小且隔音可能一般（因为都是老建筑），但胜在氛围无敌；追求空间和安静可考虑河对岸的红十字区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（尤其是每年12月的灯光节期间）住宿非常紧张且价格飞涨，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城夜晚治安良好，但一如所有欧洲旅游区，需保管好随身物品。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开里昂很久以后，我发现自己最常回味的，不是某个具体的景点，而是一种感觉——那种被温暖厚重的历史紧紧包裹，同时又与生动鲜活的当下仅一墙之隔的奇妙触感。这座“口袋之城”（因为 traboules 像衣服口袋一样藏在建筑内部）教会我，真正的深度不在于看遍了所有地标，而在于你是否有耐心去推开一扇扇看似平常的门，去聆听石缝间渗出的低语。它让我明白，历史不是教科书上孤立的章节，而是像里昂的丝绸一样，经纬交织，层层覆盖，最终成为我们脚下可触摸、可穿行的现实。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都趋向扁平化和快餐式的时代，里昂历史中心的存在，像一种温柔的抵抗。它坚持着街巷的曲折、空间的隐秘、时间的层叠。它邀请你迷路，奖励你的好奇心，告诉你一座伟大城市的记忆就藏在那些需要弯腰通过的拱门背后、需要轻声细语的庭院之中。每一位热爱深度游的旅人，都应该来这里住上几天，不仅仅是为了看一场灯光节或是吃一顿米其林，更是为了让自己沉浸在这种“层叠式”的生活体验里。当你用自己的脚步，将罗马的基石、文艺复兴的浮雕、丝绸工人的汗渍、抵抗者的足迹一一连接起来时，你收获的将是一份关于欧洲、关于城市、关于人类文明的，无比丰厚而立体的理解。这，正是旅行能带给我们的，最深刻的礼物。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
