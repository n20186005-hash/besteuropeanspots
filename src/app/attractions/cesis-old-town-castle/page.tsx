import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '采西斯古城 Cēsis Old Town｜探秘拉脱维亚的“石头之心”，中世纪时光凝固的琥珀 - 最佳欧洲景点',
  description: '第一眼看到采西斯，你会怀疑自己是不是不小心拧动了某个怀表的发条，被瞬间抛回了五百年前。车子刚刚驶离现代公路，一片由暖黄色、浅粉色和薄荷绿外墙组成的低矮房屋群就毫无征兆地出现在眼前，屋顶是浓得化不开的砖红色，像秋天层林尽染的枫叶。空气里有种特别的清冽，混合着鹅卵石缝里青苔的潮湿气味、从老面包房飘出的焦...',
}

export default function CesisOldTownCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '采西斯古城', href: '/attractions/cesis-old-town-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`采西斯古城・Cēsis Old Town・拉脱维亚・采西斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到采西斯，你会怀疑自己是不是不小心拧动了某个怀表的发条，被瞬间抛回了五百年前。车子刚刚驶离现代公路，一片由暖黄色、浅粉色和薄荷绿外墙组成的低矮房屋群就毫无征兆地出现在眼前，屋顶是浓得化不开的砖红色，像秋天层林尽染的枫叶。空气里有种特别的清冽，混合着鹅卵石缝里青苔的潮湿气味、从老面包房飘出的焦香，还有远处森林送来的松针香。没有刺耳的喇叭声，只有你自己的脚步声在狭窄的、被岁月打磨得光滑如镜的石子路上发出清脆的回响，偶尔被某扇木门后传来的隐约钢琴声打断。
这座古城最打动人的，不是某个孤立的景点，而是一种完整而宁静的氛围。当地人骑着自行车叮铃铃地从你身边掠过，主妇们拎着藤篮在周三的露天市集上挑选着还带着泥土的胡萝卜，老人们坐在广场长椅上，就着一杯咖啡晒太阳，仿佛身后那堵爬满藤蔓、有着尖拱窗的13世纪城墙，只是他们日常生活的寻常背景板。这里的生活节奏缓慢得如同加乌亚河的水流，历史的层理就这么自然地裸露在每一天的日常生活里，毫不突兀。
而这一切宁静的制高点与背景音，永远是那座矗立在古城西侧的采西斯城堡。它不只是一座城堡，更像是从大地生长出来的、一个关于时间和力量的寓言。一部分是威严尚存的、有着铅灰色尖顶的“新城堡”（其实也建于16世纪），如今是博物馆；另一部分则是紧挨着的、巨大而苍凉的城堡废墟。那些破碎的、高耸的塔楼残垣，赤裸着砖石的内脏，任由天空和飞鸟穿过曾经的厅堂。这种“完存”与“残破”的并置，形成了一种极其强烈的戏剧张力，仿佛能看到时光的两副面孔：一副是试图挽留和记载的精致侧影，另一副则是自然与战争无情剥蚀后留下的、充满诗意的骨骼。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到采西斯，你会怀疑自己是不是不小心拧动了某个怀表的发条，被瞬间抛回了五百年前。车子刚刚驶离现代公路，一片由暖黄色、浅粉色和薄荷绿外墙组成的低矮房屋群就毫无征兆地出现在眼前，屋顶是浓得化不开的砖红色，像秋天层林尽染的枫叶。空气里有种特别的清冽，混合着鹅卵石缝里青苔的潮湿气味、从老面包房飘出的焦香，还有远处森林送来的松针香。没有刺耳的喇叭声，只有你自己的脚步声在狭窄的、被岁月打磨得光滑如镜的石子路上发出清脆的回响，偶尔被某扇木门后传来的隐约钢琴声打断。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座古城最打动人的，不是某个孤立的景点，而是一种完整而宁静的氛围。当地人骑着自行车叮铃铃地从你身边掠过，主妇们拎着藤篮在周三的露天市集上挑选着还带着泥土的胡萝卜，老人们坐在广场长椅上，就着一杯咖啡晒太阳，仿佛身后那堵爬满藤蔓、有着尖拱窗的13世纪城墙，只是他们日常生活的寻常背景板。这里的生活节奏缓慢得如同加乌亚河的水流，历史的层理就这么自然地裸露在每一天的日常生活里，毫不突兀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而这一切宁静的制高点与背景音，永远是那座矗立在古城西侧的采西斯城堡。它不只是一座城堡，更像是从大地生长出来的、一个关于时间和力量的寓言。一部分是威严尚存的、有着铅灰色尖顶的“新城堡”（其实也建于16世纪），如今是博物馆；另一部分则是紧挨着的、巨大而苍凉的城堡废墟。那些破碎的、高耸的塔楼残垣，赤裸着砖石的内脏，任由天空和飞鸟穿过曾经的厅堂。这种“完存”与“残破”的并置，形成了一种极其强烈的戏剧张力，仿佛能看到时光的两副面孔：一副是试图挽留和记载的精致侧影，另一副则是自然与战争无情剥蚀后留下的、充满诗意的骨骼。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`采西斯古城`} />
                <InfoRow label="英文名称" value={`Cēsis Old Town`} />
                <InfoRow label="正式名称" value={`Cēsis Old Town and Castle Complex`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`采西斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`波罗的海地区保存最完好的中世纪城镇典范之一，汉萨同盟的重要成员，见证了利沃尼亚骑士团的兴衰与拉脱维亚民族意识的觉醒。`} />
                <InfoRow label="建筑特色" value={`红瓦屋顶的古老木构与石砌房屋错落有致，中心矗立着气势恢宏的城堡废墟与保存完好的新城堡，形成了时光叠加的独特城市肌理。`} />
                <InfoRow label="建筑风格" value={`以中世纪哥特式与文艺复兴风格为核心，混杂了北欧木结构建筑特色与19世纪浪漫主义修复痕迹的混合体。`} />
                <InfoRow label="文化价值" value={`一座活着的露天历史博物馆，不仅是拉脱维亚的国家象征“石头城堡”意象的来源地，更是理解波罗的海德国贵族文化与拉脱维亚乡土文化交融与碰撞的关键钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。采西斯城堡及博物馆开放时间：5月至9月，每日10:00-18:00；10月至4月，周二至周日10:00-17:00，周一闭馆。请注意，具体塔楼和部分遗址的开放时间可能因天气和修复工程临时调整，冬季（11月至3月）部分室外区域可能受限。重大节日如圣诞节、元旦及拉脱维亚独立日（11月18日）开放时间特殊，建议出行前务必查询官网最新公告。`} />
              <InfoRow label="门票价格" value={`进入古城街区免费。采西斯城堡博物馆及遗址联票：成人8欧元，学生及长者5欧元。仅参观城堡公园免费。家庭票（2大2小）18欧元。每周三下午3点后博物馆门票对所有人半价。持有拉脱维亚国家文化遗产卡可免费进入博物馆。门票可在城堡入口处的游客中心购买，支持信用卡支付。`} />
              <InfoRow label="地址" value={`Pils laukums 9, Cēsis, LV-4101, Latvia`} />
              <InfoRow label="交通方式" value={`从拉脱维亚首都里加出发是最佳选择。从里加国际机场或里加中央汽车站，搭乘前往瓦尔米耶拉或瓦尔卡的地区巴士，几乎每小时一班，车程约1小时45分钟，在“Cēsis”站下车即达古城边缘。巴士舒适可靠，车上购票即可。若从里加火车站乘坐火车，每天约有4-5班区间车，车程约2小时，风景更优但班次较少，下车后需步行15分钟穿过宁静的居民区方能抵达古城，这段步行本身便是融入当地的前奏。自驾从里加沿A2/E77公路向北行驶约90公里，古城外围有多个免费或收费极低的停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`采西斯的故事，始于一块被森林和河流环绕的沃土。早在维京时代，这里就是一个重要的贸易点。但真正将它推上历史舞台的，是13世纪初那些身披白色斗篷、绣着黑色十字架的骑士——利沃尼亚骑士团。1209年，骑士团在这里用巨大的石灰岩和花岗岩，建造了第一座坚固的堡垒，它成了他们征服和统治利沃尼亚（今拉脱维亚和爱沙尼亚大部）的北方心脏。城堡不仅是军事要塞，更是行政中心和文化的象征。随后的几个世纪，采西斯在骑士团的统治下繁荣起来，并在14世纪加入了强大的汉萨同盟，来自日贝克和汉堡的商船将这里的木材、蜂蜡和毛皮运往整个波罗的海乃至西欧，也带来了财富、艺术和北欧的砖砌哥特式建筑风格。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的坚固石墙，见证了无数次的围攻与权谋。其中最著名的一段传奇，属于利沃尼亚的最后一位大师，戈特哈德·克特勒。在16世纪宗教改革与俄国沙皇伊凡雷帝的扩张阴影下，克特勒选择了与波兰-立陶宛联邦结盟，并将利沃尼亚世俗化，他自己则成为了库尔兰和瑟米利亚公国的第一位公爵。采西斯城堡成了他重要的行宫之一，文艺复兴的风潮也随之吹进了这些厚重的城墙，窗户变得更大，室内开始出现华丽的灰泥装饰。然而，历史的转折总是猝不及防。1577年，伊凡雷帝的军队兵临城下，惨烈的围城战持续了数周。传说，为了避免落入敌手遭受屈辱，城堡内的守军和贵族家眷在弹药库点燃了火药，进行了悲壮的自爆。那声巨响，不仅摧毁了城堡的大部分建筑，也象征着一个旧时代的终结。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`自那以后，城堡再也没有完全恢复昔日的军事荣耀。它逐渐荒废，变成了一个浪漫的废墟，藤蔓和树木在其间生根，给了诗人和画家无穷的灵感。而城镇的生活中心，则转移到了城堡脚下那些日益精美的商人住宅和市政厅周围。18-19世纪，这里成了波罗的海德国贵族阶层的乡间乐园，许多家族在古城里建造了典雅的新古典主义或折衷主义风格的别墅。直到20世纪初，拉脱维亚民族觉醒的浪潮涌动，采西斯作为重要的历史文化中心，其象征意义被重新发掘。那座未在自爆中损毁的、后来被称为“新城堡”的西翼，在20世纪30年代被精心修复，变成了地区博物馆，守护着这片土地的记忆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`二战和苏联时期给古城带来了创伤与沉寂，许多建筑失修。但正是拉脱维亚1991年重新独立后，采西斯迎来了缓慢而审慎的复苏。人们没有选择粗暴的推倒重建，而是像修复一件古老的刺绣，一针一线地依据原始图纸和照片，还原着街道的立面、屋顶的线条和广场的铺地。今天的采西斯，之所以能让你感到那种“活着的古老”，正是因为这份对历史的敬畏与耐心。它不是迪士尼式的布景，而是一代代人在同一片土地上，不断修补、延续的生活现场。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味采西斯，请务必预留完整的一天。最佳的抵达时间是清晨九点前，这时游客还未涌入，阳光斜射，古城刚刚苏醒，光线最适合拍照。整体游览节奏宜慢不宜快，上午聚焦城堡区的厚重历史，下午沉浸老城街巷的世俗烟火，傍晚则留给城堡公园的宁静沉思。建议先从外围感受废墟的震撼，再进入博物馆了解其内涵，最后在老城中迷失，这样的顺序能让你对这座古城的理解，从视觉冲击到历史认知，再到情感共鸣，层层递进。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`古城内几乎所有街道都是凹凸不平的鹅卵石路，务必穿一双舒适防滑的鞋子。周三和周六上午老城广场有露天集市，是体验当地生活和购买新鲜浆果、蜂蜜的好时机，但人也相对较多。夏季（6-8月）是旅游旺季，如果想获得宁静体验，尽量避开周末正午时段。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古城东侧的主入口“里加门”遗址进入，让自己立刻被鹅卵石道路和彩色木屋的温柔氛围包裹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向城堡山，不要急着进入建筑，先绕着巨大的废墟走一圈，从各个角度仰望那些沉默的、布满弹孔和植物根茎的砖石巨塔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入采西斯城堡博物馆，在昏暗而充满木头香气的展厅里，寻找那幅描绘1577年围城与自爆的古老油画，感受历史的沉重一瞬。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上博物馆所在的“新城堡”塔楼，在狭窄的旋转石阶尽头，收获一个将红瓦屋顶、教堂尖顶与远方无尽森林尽收眼底的360度全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后步入老城广场，在广场中央的罗兰雕像下稍坐，观察市政厅建筑立面上那些充满寓言色彩的浮雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着Rosēnu iela街漫步，寻找那几家隐藏在小院里的手工琥珀工作室和羊毛制品小店，和店主聊聊天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在加乌亚河畔的步道散步，从水面回望城堡山，看古老的倒影如何在流水中轻轻晃动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分，带上一点简单的食物，走进城堡山脚下的浪漫主义风格公园，找一个面对废墟的长椅，等待黄昏的金光为古老的石墙披上最后一件华服。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`废墟南侧仰拍角度`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的侧光时分，站在城堡废墟南侧的草地上，用广角镜头仰拍，能将残破的高塔、蔚蓝的天空以及攀附其上的绿藤一同纳入画面，充满力量与沧桑感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`老城广场街角透视`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光洒满广场时，站在市政厅斜对面的街角，利用鹅卵石道路形成的自然引导线，将色彩柔和的木屋、远处的圣约翰教堂尖顶和行走的路人一同构图，画面生活气息浓郁。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`加乌亚河对岸全景`}</h4>
                  <p className="text-sm text-gray-700">{`过河走到南岸的观景点，在日落前半小时架好三脚架，可以拍摄到城堡废墟、新城堡以及老城建筑群在温暖光线下的全景，水面倒影会让画面倍增宁静感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡公园林间框架`}</h4>
                  <p className="text-sm text-gray-700">{`在城堡公园靠近废墟的树林里，寻找一个天然的木制拱门或树叶形成的框架，透过它去拍摄废墟的局部，能创造出一种“窥视历史”的层次感和神秘氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机在古城及城堡上空飞行需要特别许可，且很可能因干扰居民和鸟类而被禁止，建议提前查询规定或完全避免。拍摄当地居民，尤其是老人和市场摊主时，请务必先微笑示意并征得同意，这是基本的尊重。冬季雪后是拍摄的绝佳时机，但需注意防寒保暖，并为相机做好防潮措施。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心民宿`}</h4>
                  <p className="text-sm text-blue-800">{`入住一栋18世纪商人住宅改造的精品民宿，房间有裸露的原始木梁和古老的瓷砖火炉，早晨在种满天竺葵的小庭院里享用女主人准备的家庭早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`公园旁设计师酒店`}</h4>
                  <p className="text-sm text-green-800">{`一家由苏联时期建筑巧妙改建的现代设计酒店，距离城堡公园仅一步之遥，拥有巨大的玻璃窗，让你在房间里就能看到森林与城堡的景色，体验古今对话。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`森林边缘疗愈小屋`}</h4>
                  <p className="text-sm text-yellow-800">{`位于古城外2公里处的宁静森林中，独栋小木屋配备桑拿房，夜晚可以听见猫头鹰的叫声，是彻底逃离喧嚣、亲近自然的完美选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`性价比青年旅舍`}</h4>
                  <p className="text-sm text-purple-800">{`由老城中心一栋可爱黄色木屋经营的温馨旅舍，提供干净的宿舍和私人房间，公共厨房设施齐全，是背包客和独自旅行者结识同路人的好地方。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`采西斯非常安全，夜间行走毫无压力。夏季和圣诞集市期间（12月）住宿相当紧俏，建议至少提前一个月预订。如果自驾，预订时务必确认住宿地点是否提供停车位，古城中心区域停车位有限且多为收费。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开采西斯许久，脑海里挥之不去的，不是某一张具体的明信片般的风景，而是一种混合的“感觉”——石头冰凉的触感、空气中清冽的松香、废墟巨大的沉默与街角面包房温暖的香气交织在一起的感觉。在这个一切都被加速、被扁平化的时代，采西斯固执地保留着一种“时间的厚度”。它没有试图隐藏自己的伤疤，那些坍塌的塔楼、墙上的弹痕，都被坦然呈现，仿佛在说：历史不仅是荣光，也是破碎与重生。这种诚实，赋予它一种深沉而平静的力量。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于我们这些来自拥挤喧嚣世界的旅人，采西斯更像一个精神的喘息之地。它教会我们的，或许是一种“缓慢的凝视”。在这里，你会自然而然地放慢脚步，去观察一扇门楣上雕刻的细节，去倾听风吹过废墟孔洞时发出的呜咽，去感受光线在一天之中如何缓缓移动，涂抹在不同的建筑立面。它提醒我们，真正的深度旅行，不是收集地名与打卡照，而是允许自己沉浸在一个地方独特的时空节奏里，让它的故事和气息，轻轻改写我们内心对于时间、历史和生活的刻度。这就是为什么，这个拉脱维亚的“石头之心”，值得被放入每一位寻求真实与宁静的旅人心中那串最珍贵的清单里。`}</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}
