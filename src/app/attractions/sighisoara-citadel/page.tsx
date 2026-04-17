import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡吉什瓦拉历史中心 Sighișoara Citadel｜走进现实版童话镇与吸血鬼德古拉故乡 - 最佳欧洲景点',
  description: '嘿，想象一下，你穿过一个低矮的拱形城门，脚下的石板路突然变成了被几个世纪的人来人往磨得发亮、光滑而凹凸不平的鹅卵石小路。就在这一瞬间，空气仿佛都变了——汽车引擎的噪音被隔绝在外，取而代之的是你自己的脚步声，还有不知从哪扇敞开的窗户里飘出的古典音乐声，混合着附近咖啡馆烘烤苹果馅饼的甜蜜香气。你抬起头，...',
}

export default function SighisoaraCitadelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '锡吉什瓦拉历史中心', href: '/attractions/sighisoara-citadel' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡吉什瓦拉历史中心・Sighișoara Citadel・罗马尼亚・锡吉什瓦拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，想象一下，你穿过一个低矮的拱形城门，脚下的石板路突然变成了被几个世纪的人来人往磨得发亮、光滑而凹凸不平的鹅卵石小路。就在这一瞬间，空气仿佛都变了——汽车引擎的噪音被隔绝在外，取而代之的是你自己的脚步声，还有不知从哪扇敞开的窗户里飘出的古典音乐声，混合着附近咖啡馆烘烤苹果馅饼的甜蜜香气。你抬起头，愣住了。眼前不是一个冷冰冰的“景点”，而是一个活着的、呼吸着的童话世界。一栋栋房子像害羞又爱炫耀的孩子，紧紧挨在一起，漆成柠檬黄、芥末黄、赭石红、薄荷绿，在午后阳光下温柔地闪烁着。晾衣绳在安静的庭院上空飘扬，花盆从木头窗台探出头来。这里不是迪士尼，这里的人们真的住在这些有四五百年历史、带着歪斜屋顶和厚重木门的房子里。
顺着陡峭的、覆盖着屋顶的木制“学者阶梯”向上爬，你的呼吸会因为坡度而变得急促，但每一次回头，视野都像展开一幅新的油画。城堡的制高点是那座有着彩色鳞片状瓦片尖顶的山顶教堂，它安静地俯视着这一切，钟声在整点悠悠响起，声音浑厚而苍凉，能穿越几个世纪，直接敲在你的心上。你会看到本地老太太挎着菜篮慢悠悠地走过，猫在阳光斑驳的石阶上打盹，铁匠铺里传来隐约的叮当声。这里最打动人心的，正是这种不可思议的“生活的延续性”。它不是博物馆里被玻璃罩起来的标本，而是一个社区，数百年来，人们在这里出生、相爱、祈祷、劳作、死亡，并将这个故事一代代涂抹上新的色彩，但从未中断。
而当你走到那座有着繁复雕刻、镶嵌着彩色瓷盘钟面的钟楼脚下时，一种混合着历史寒意与奇诡传说感的东西会悄然爬上你的脊背。因为就在不远处，一栋芥末黄色的三层小楼上，挂着一块不起眼的牌子，上面写着：“弗拉德·德古拉（穿刺公）出生于此，1431年。” 现实与传说，明丽的童话与暗黑的哥特故事，就在这里，以一种奇异而和谐的方式共存，构成了锡吉什瓦拉独一无二、令人着迷的双重灵魂。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，想象一下，你穿过一个低矮的拱形城门，脚下的石板路突然变成了被几个世纪的人来人往磨得发亮、光滑而凹凸不平的鹅卵石小路。就在这一瞬间，空气仿佛都变了——汽车引擎的噪音被隔绝在外，取而代之的是你自己的脚步声，还有不知从哪扇敞开的窗户里飘出的古典音乐声，混合着附近咖啡馆烘烤苹果馅饼的甜蜜香气。你抬起头，愣住了。眼前不是一个冷冰冰的“景点”，而是一个活着的、呼吸着的童话世界。一栋栋房子像害羞又爱炫耀的孩子，紧紧挨在一起，漆成柠檬黄、芥末黄、赭石红、薄荷绿，在午后阳光下温柔地闪烁着。晾衣绳在安静的庭院上空飘扬，花盆从木头窗台探出头来。这里不是迪士尼，这里的人们真的住在这些有四五百年历史、带着歪斜屋顶和厚重木门的房子里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`顺着陡峭的、覆盖着屋顶的木制“学者阶梯”向上爬，你的呼吸会因为坡度而变得急促，但每一次回头，视野都像展开一幅新的油画。城堡的制高点是那座有着彩色鳞片状瓦片尖顶的山顶教堂，它安静地俯视着这一切，钟声在整点悠悠响起，声音浑厚而苍凉，能穿越几个世纪，直接敲在你的心上。你会看到本地老太太挎着菜篮慢悠悠地走过，猫在阳光斑驳的石阶上打盹，铁匠铺里传来隐约的叮当声。这里最打动人心的，正是这种不可思议的“生活的延续性”。它不是博物馆里被玻璃罩起来的标本，而是一个社区，数百年来，人们在这里出生、相爱、祈祷、劳作、死亡，并将这个故事一代代涂抹上新的色彩，但从未中断。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你走到那座有着繁复雕刻、镶嵌着彩色瓷盘钟面的钟楼脚下时，一种混合着历史寒意与奇诡传说感的东西会悄然爬上你的脊背。因为就在不远处，一栋芥末黄色的三层小楼上，挂着一块不起眼的牌子，上面写着：“弗拉德·德古拉（穿刺公）出生于此，1431年。” 现实与传说，明丽的童话与暗黑的哥特故事，就在这里，以一种奇异而和谐的方式共存，构成了锡吉什瓦拉独一无二、令人着迷的双重灵魂。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡吉什瓦拉历史中心`} />
                <InfoRow label="英文名称" value={`Sighișoara Citadel`} />
                <InfoRow label="正式名称" value={`Sighișoara Citadel`} />
                <InfoRow label="国家" value={`罗马尼亚`} />
                <InfoRow label="城市" value={`锡吉什瓦拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`欧洲保存最完好的中世纪居住城堡之一，也是传说中吸血鬼德古拉原型——弗拉德三世（穿刺公）的出生地。`} />
                <InfoRow label="建筑特色" value={`一座高踞山丘、被完整城墙与塔楼环绕的彩色中世纪城堡小镇，宛如从童话书中直接搬进现实。`} />
                <InfoRow label="建筑风格" value={`特兰西瓦尼亚萨克森风格的中世纪防御性建筑，融合了哥特式、文艺复兴及巴洛克元素。`} />
                <InfoRow label="文化价值" value={`联合国教科文组织世界遗产，生动展示了特兰西瓦尼亚地区萨克森人七个世纪的历史、文化与社区生活图景。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡区域全天开放，但主要历史建筑（如钟楼博物馆、山顶教堂）开放时间通常为夏季（5月至9月）上午9点至下午6点30分，冬季（10月至次年4月）上午10点至下午3点30分，周一普遍闭馆。具体景点开放时间可能微调，建议出行前查阅官网。圣诞集市期间（12月）会有特别延长开放。`} />
              <InfoRow label="门票价格" value={`进入城堡区免费。参观主要景点需单独购票：钟楼博物馆成人约20罗马尼亚列伊，学生及老人有优惠；山顶教堂门票约10列伊。可购买包含多个景点的联票，约35列伊。具体价格可能有季节性浮动。`} />
              <InfoRow label="地址" value={`Cetatea Sighișoara, Sighișoara 545400, Romania`} />
              <InfoRow label="交通方式" value={`从罗马尼亚首都布加勒斯特出发，最便捷的方式是乘坐火车，直达列车约需5.5-6小时，班次每日多趟，建议提前在罗马尼亚铁路CFR官网购票选择靠窗座位欣赏喀尔巴阡山风光。若从锡比乌出发，火车或大巴均约2小时，班次频繁。最近的机场是锡比乌国际机场，从机场可乘坐出租车或预订接驳车前往锡吉什瓦拉，车程约1.5小时。自驾是最灵活的方式，可将车停在山脚下的停车场，然后步行进入禁止车辆通行的城堡区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要听懂锡吉什瓦拉的石头诉说的故事，我们得把时钟拨回12世纪。那时的匈牙利国王，为了守卫特兰西瓦尼亚的东部边境，抵御来自东方的侵扰，做了一件很聪明的事：他邀请了一批技艺精湛的萨克森工匠和商人从德国莱茵兰地区迁徙过来。这些萨克森人不仅是手艺人，更是建设者和战士。他们选中了这座山丘，用石头和智慧，一砖一瓦地建造起了自己的家园和堡垒。他们建立的不是一个单纯的军事据点，而是一个高度自治、繁荣的商业城镇。到14世纪，坚固的城墙已经立起，九座防御塔楼由镇上的不同行会负责守卫和修缮——这是中世纪“市民社会”一个非常生动的体现，比如皮匠塔、锡匠塔、裁缝塔，名字至今还在述说着当年的分工。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而让这座小镇永远与黑暗传奇绑在一起的那个男人，就出生在15世纪。弗拉德三世，后来以“穿刺公”的恐怖外号闻名，是瓦拉几亚公国（今罗马尼亚南部）的大公。他的父亲弗拉德二世是神圣罗马帝国龙骑士团的成员，因此得名“德古拉”（意为“龙之子”或“恶魔之子”）。1431年，老弗拉德正被流放于此，小弗拉德就出生在城堡里那栋黄色的房子里。他的童年在这里度过，但后来的故事却充满了血腥与残酷。他在与奥斯曼帝国的战争中以残忍的穿刺刑罚闻名，成为了令敌人闻风丧胆的统治者。几个世纪后，爱尔兰作家布莱姆·斯托克从这位历史人物身上汲取灵感，创作出了文学史上最著名的吸血鬼——德古拉伯爵。于是，历史人物的暴政与文学虚构的永生噩梦，共同为锡吉什瓦拉笼罩上了一层神秘而哥特的面纱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`锡吉什瓦拉在随后的几个世纪里经历了繁荣与磨难。它抵挡过奥斯曼帝国的围攻，经历了大火与瘟疫，也见证了特兰西瓦尼亚在匈牙利、奥斯曼和哈布斯堡帝国之间辗转的历史。那些高耸的塔楼和厚实的城墙成功地保护了城内的居民。18世纪后，随着军事威胁减弱，富裕的市民开始将他们的房子装饰得更加华丽，外墙涂上鲜艳的颜色，内部加入巴洛克风格的装饰元素，于是形成了我们今天看到的这种层次丰富、色彩明快的建筑面貌。萨克森社区在这里一直生活到20世纪，二战和共产主义时期导致大量人口离去，但小镇的物理骨架和灵魂却被奇迹般地完整保存了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1999年，联合国教科文组织将锡吉什瓦拉历史中心列入世界遗产名录，确认了它作为“欧洲东南部中世纪小型防御城市的杰出典范”的价值。如今的它，像一个时间胶囊，不仅封存了中世纪的城市规划与建筑，更封存了一种已经消逝的社区生活方式。每年夏天，盛大的中世纪节会让整个城堡“回到过去”，骑士、手工艺人、街头艺人填满街道，而在冬天，广场上的圣诞集市又让它变成了一个闪烁着温暖光晕的童话雪球。它静静地矗立在特兰西瓦尼亚的绿色山丘之间，既是历史书厚重的一页，也是传说中永生不死的吸血鬼在地球上留下的、最富有人间烟火气的故乡印记。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受锡吉什瓦拉的日与夜，建议你至少留出一整天的时光。最佳抵达时间是清晨九点前，这时旅游大巴还未涌入，阳光斜射，城堡刚刚苏醒，是拍照和感受宁静氛围的黄金时段。整体游览节奏宜慢不宜快，核心是“漫步”与“沉浸”。上午重点探索城堡上城区的标志性建筑与博物馆，中午在广场边享用一顿悠闲的午餐，下午则可以逛逛小巷里的手工艺店铺，或者找个咖啡馆露台发呆，傍晚时分等待钟楼的木偶报时，入夜后感受灯笼点亮的魔幻气氛。这样的安排能让你从历史、传说、生活三个维度，层层深入地读懂这座小镇。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿着绝对舒适的平底鞋，城堡内的所有道路都是凹凸不平的古老鹅卵石和陡峭阶梯，高跟鞋会是一场灾难。
夏季中午时段广场上可能拥挤且暴晒，建议利用这个时间去凉爽的博物馆内部参观，或者找家有荫蔽的庭院咖啡馆休息。
对德古拉传说保持开放但理性的心态，当地更以其中世纪遗产为荣，过度热衷于吸血鬼话题可能让一些店主感到些许无奈。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从山脚下著名的钟楼城门进入，立刻让眼睛适应那如万花筒般层层叠叠的彩色房屋外墙与光影交错的狭窄街道`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要急着登顶，先在主广场（城堡广场）转一圈，仰头细看钟楼顶部代表日月时间的复杂雕塑和彩瓷钟面`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着有顶棚的古老“学者阶梯”吱呀吱呀地向上攀登，在阶梯中段的平台停下来喘口气，并回望下城区逐渐展开的红色屋顶全景`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达山顶教堂及毗邻的墓园，这里安息着数代萨克森居民，墓碑上的德文铭刻与宁静氛围诉说着一段接近终结的社区史`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后去寻找那栋挂着“弗拉德·德古拉出生地”牌子的黄色建筑，如今它是一家餐厅，你可以坐在传说发生地的阴影下点一杯本地葡萄酒`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫无目的地迷失在从主广场辐射出去的数条小巷里，比如铁匠街，听听是否还有锤打金属的声音从某个庭院传出`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前回到钟楼，买票登顶，等待整点时分观看侧面小门里转出的代表正义、和平、战争与死亡的七尊木质雕像`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`入夜后再次穿过广场，看煤气灯或灯笼将鹅卵石路面和房屋立面染上温暖的金色，与白天的明媚形成截然不同的梦幻感`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`钟楼城门内侧仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出门洞的拱形轮廓和后方彩色房屋的层次感，等待一两个行人走过能增加生动性`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`学者阶梯中段平台`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚利用柔和的光线拍摄，以阶梯的木质框架和屋顶作为前景，焦点对准下方蔓延开的城镇屋顶与远山`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`山顶教堂墓园围墙边`}</h4>
                  <p className="text-sm text-gray-700">{`这里是拍摄城堡全景的至高秘点，将古老墓碑作为前景，中景是层层叠叠的彩色屋顶和塔楼，远景是特兰西瓦尼亚的连绵山丘`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`铁匠街小巷深处`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，狭窄巷子两壁的高亮色彩会形成强烈的视觉冲击，捕捉一扇有雕花的木门或一个悬挂的花盆作为焦点`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡城墙步行道某段`}</h4>
                  <p className="text-sm text-gray-700">{`从城墙的垛口向外拍摄，将冰冷的石墙与垛口作为画框，框住外面下城区现代生活的烟火气，形成古今对比`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人将这里视为家园，拍照时请尊重隐私，避免将镜头直接对准居民家的窗户或正在庭院里休息的人。`}</li>
                <li>• {`无人机飞行在历史中心上空可能有严格限制，为保护遗产和隐私，起飞前务必查明并遵守当地法规。`}</li>
                <li>• {`雨天或雾气天气不要沮丧，湿漉漉的鹅卵石反射着灯光，雾气缭绕塔楼，反而能拍出最具中世纪神秘感和电影感的画面。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在城堡城墙内的百年老屋家庭旅馆，木头楼梯吱呀作响，推开窗就是钟楼 view，晚上能听见巡夜人的隐约脚步声`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由16世纪萨克森商人宅邸改造的精品酒店，房间保留原始的石头墙壁和木梁，早餐在种满天竺葵的内庭花园享用`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在附近山腰上的四星级酒店，拥有俯瞰整个城堡制高点的无敌全景露台，在星空下泡着按摩浴缸看古城灯光闪烁`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-purple-800">{`下城区温馨舒适的民宿，主人会热情地为你手绘游览地图并分享只有本地人才知道的面包店，步行上山仅需十分钟`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`预订城墙内住宿时，请务必确认酒店是否提供停车位或详细的停车指引，因为几乎所有城堡区街道都禁止车辆进入，拖着行李在鹅卵石路上找路很辛苦。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季的中世纪节和圣诞季是绝对旺季，需提前数月预订；而春秋季的平日前往，不仅能享受更宁静的体验，房价也更具吸引力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`特兰西瓦尼亚的夜晚即使夏季也可能凉爽，尤其住在古老石墙建筑内，建议备一件薄外套。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开锡吉什瓦拉许久后，闭上眼睛，脑海里浮现的往往不是某个具体的建筑，而是一种混合的感觉：是鹅卵石透过鞋底传来的坚实触感，是木窗推开时那一声悠长的“吱呀”，是午后阳光烘烤着彩色灰泥墙散发出的、类似旧书页的温暖气味。它有一种罕见的“完整性”。这种完整，不只是物理上城墙与塔楼的完好无损，更是一种历史叙事的完整、社区肌理的完整、生活气息的完整。它没有变成一座仅供瞻仰的空壳，也没有被过度商业化吞噬本色。它让你相信，时光在某些地方确实可以走得慢一些，温柔一些。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、一切都被加速和扁平化的世界里，锡吉什瓦拉的存在本身就像一种温柔的抵抗。它提醒我们，人类曾经用多么漫长的时间，精雕细琢自己的家园；社区的力量如何凝聚成高耸的塔楼，共同抵御外敌与时间的风霜；甚至，连最黑暗的传说，也能最终融入日常，成为窗台上的一盆天竺葵旁，一个引人遐思的注脚。它不是巴黎或罗马那种令人屏息的宏伟，它的魔力在于一种“可亲近的奇迹”。每一位热爱深度游的旅人都该来此，不仅仅是为了一张明信片般的照片，更是为了体验一次“生活在别处”——那个“别处”，是色彩斑斓的童话书，是泛黄的历史卷宗，也是炉火噼啪作响的、活生生的家。在这里走一圈，你带走的会是一段被重新校准的时间感，和一颗被中世纪灯火温暖过的心。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bucharest-old-town" className="block group">
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
              <a href="/attractions/sibiu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡比乌老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sibiu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/black-church-brasov" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉索夫黑教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Black Church of Brasov</p>
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
