import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '格拉茨老城 Graz Old Town｜鲜活的奥地利文化遗产明珠，中世纪与现代完美交融的童话世界 - 最佳欧洲景点',
  description: '你第一眼看见格拉茨老城，可能不是从地面，而是从城堡山的顶端。当你乘着那截奇特的玻璃电梯缓缓升上山丘，脚下那片由无数暖红色屋顶拼成的海洋便毫无保留地铺展开来。那不是静止的油画，而是流动的生活——清晨的炊烟从烟囱懒散升起，有轨电车像玩具一样在蜿蜒的街道上叮当作响，远处穆尔河像一条银色的丝带，静静穿过城市...',
}

export default function GrazOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/austria' },
            { label: '格拉茨', href: '/destinations/austria' },
            { label: '格拉茨老城', href: '/attractions/graz-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`格拉茨老城・Graz Old Town・奥地利・格拉茨`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看见格拉茨老城，可能不是从地面，而是从城堡山的顶端。当你乘着那截奇特的玻璃电梯缓缓升上山丘，脚下那片由无数暖红色屋顶拼成的海洋便毫无保留地铺展开来。那不是静止的油画，而是流动的生活——清晨的炊烟从烟囱懒散升起，有轨电车像玩具一样在蜿蜒的街道上叮当作响，远处穆尔河像一条银色的丝带，静静穿过城市。空气里有新鲜烘焙面包的黄油香，混杂着从古老石墙缝隙里渗出的、潮湿的苔藓气息。这里的天际线由一座笨拙可爱的钟楼统治着，它的大指针指示小时，小指针指示分钟，像个喝醉了却依然尽职的守夜人，几百年来就这么温柔地俯瞰着它的城。
走下城堡山，真正踏入老城的脉络，你会立刻被一种温暖的尺度感包裹。街道不宽，刚好容得下阳光洒满半边路面，也容得下咖啡馆的桌椅蔓延到街边。当地人骑着自行车从你身边轻快地滑过，车篮里装着刚买的花束。这里的建筑立面像一本翻开的立体历史书：一栋房子可能有着哥特式的尖拱窗，旁边却装饰着文艺复兴时期繁复的壁画寓言，再往上的阁楼窗户又带着巴洛克的卷曲花纹。你时不时会撞见一些充满未来感的“闯入者”，比如那个蓝色的、像巨大海参一样趴在河上的穆尔岛，它与周围的百年老屋形成一种俏皮的对话，一点也不突兀，反而让人觉得，嗯，格拉茨就该是这样。
老城的心脏在主广场。这里没有令人窒息的庄严，反而像个巨大的露天客厅。市政厅沉稳地立在一旁，而广场中央的约翰大公喷泉下，总有人坐着晒太阳、吃冰淇淋、或者只是发呆。到了傍晚，广场周围的拱廊下亮起温暖的灯光，小酒馆里传出玻璃杯碰撞的清脆声和低语般的谈笑。你能尝到施泰尔马克州南瓜籽油特有的坚果香气，从一盘简单的沙拉里飘出来，这是最地道的当地味道。格拉茨老城最打动人心的，正是这种“活着的遗产”感——历史不是被封存在博物馆玻璃柜里的标本，而是人们每天散步其间的街道，是聚会喝咖啡的广场，是孩子嬉戏奔跑的背景。它优雅，但不傲慢；古老，却充满呼吸。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看见格拉茨老城，可能不是从地面，而是从城堡山的顶端。当你乘着那截奇特的玻璃电梯缓缓升上山丘，脚下那片由无数暖红色屋顶拼成的海洋便毫无保留地铺展开来。那不是静止的油画，而是流动的生活——清晨的炊烟从烟囱懒散升起，有轨电车像玩具一样在蜿蜒的街道上叮当作响，远处穆尔河像一条银色的丝带，静静穿过城市。空气里有新鲜烘焙面包的黄油香，混杂着从古老石墙缝隙里渗出的、潮湿的苔藓气息。这里的天际线由一座笨拙可爱的钟楼统治着，它的大指针指示小时，小指针指示分钟，像个喝醉了却依然尽职的守夜人，几百年来就这么温柔地俯瞰着它的城。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走下城堡山，真正踏入老城的脉络，你会立刻被一种温暖的尺度感包裹。街道不宽，刚好容得下阳光洒满半边路面，也容得下咖啡馆的桌椅蔓延到街边。当地人骑着自行车从你身边轻快地滑过，车篮里装着刚买的花束。这里的建筑立面像一本翻开的立体历史书：一栋房子可能有着哥特式的尖拱窗，旁边却装饰着文艺复兴时期繁复的壁画寓言，再往上的阁楼窗户又带着巴洛克的卷曲花纹。你时不时会撞见一些充满未来感的“闯入者”，比如那个蓝色的、像巨大海参一样趴在河上的穆尔岛，它与周围的百年老屋形成一种俏皮的对话，一点也不突兀，反而让人觉得，嗯，格拉茨就该是这样。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城的心脏在主广场。这里没有令人窒息的庄严，反而像个巨大的露天客厅。市政厅沉稳地立在一旁，而广场中央的约翰大公喷泉下，总有人坐着晒太阳、吃冰淇淋、或者只是发呆。到了傍晚，广场周围的拱廊下亮起温暖的灯光，小酒馆里传出玻璃杯碰撞的清脆声和低语般的谈笑。你能尝到施泰尔马克州南瓜籽油特有的坚果香气，从一盘简单的沙拉里飘出来，这是最地道的当地味道。格拉茨老城最打动人心的，正是这种“活着的遗产”感——历史不是被封存在博物馆玻璃柜里的标本，而是人们每天散步其间的街道，是聚会喝咖啡的广场，是孩子嬉戏奔跑的背景。它优雅，但不傲慢；古老，却充满呼吸。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`格拉茨老城`} />
                <InfoRow label="英文名称" value={`Graz Old Town`} />
                <InfoRow label="正式名称" value={`格拉茨历史中心`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`格拉茨`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`格拉茨老城是欧洲保存最完好的中世纪城市中心之一，见证了中欧近千年的政治与文化风云。`} />
                <InfoRow label="建筑特色" value={`红瓦屋顶的海洋与哥特、文艺复兴、巴洛克风格的建筑立面和谐共存，形成独特的天际线，城堡山与钟楼是其永恒的地标。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式建筑为基底，融汇了南德文艺复兴的华丽细节、哈布斯堡王朝的巴洛克辉煌以及令人惊艳的现代建筑点缀。`} />
                <InfoRow label="文化价值" value={`一座“活着”的文化遗产，不仅是历史的容器，更是当代艺术、设计与美食的活力舞台，完美诠释了传统与创新的共生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天24小时开放。城内各博物馆、宫殿等独立景点的开放时间各不相同，一般为周二至周日 10:00-17:00，周一多数闭馆。市政厅等办公建筑在工作时间可进入部分公共区域。夏季（5月-9月）夜间照明开启，氛围绝佳；冬季（12月）有迷人的圣诞市场，开放至晚间。建议出行前查询具体目标景点的最新时间表。`} />
              <InfoRow label="门票价格" value={`漫步老城本身免费。内部主要景点需单独购票：格拉茨艺术宫成人票约12欧元；军械馆成人票约10欧元；城堡山电梯单程约2欧元。联票（如“格拉茨卡”）可在旅游信息中心购买，24小时卡约27欧元，包含公共交通及大部分景点门票。学生、儿童、老年人和家庭享有相应折扣，请务必携带有效证件。`} />
              <InfoRow label="地址" value={`Graz Old Town, 8010 Graz, Austria`} />
              <InfoRow label="交通方式" value={`最近的机场是格拉茨机场（GRZ），距老城约10公里。从机场乘坐巴士S5线或出租车，20-30分钟即可抵达市中心火车站（Graz Hauptbahnhof）。从维也纳中央火车站乘坐火车直达格拉茨约2.5小时，班次频繁。从火车站出发，搭乘1、3、6、7路有轨电车在“Hauptplatz/Congress”或“Sackstraße”站下车，即步入老城核心区，车程仅5分钟。建议购买格拉茨日票或使用便捷的OBB App提前购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`格拉茨的故事，始于那座守护它的山——城堡山。早在公元9世纪，斯拉夫人就在这座陡峭的山丘上建立了一座小型堡垒，它的名字“Gradec”在斯拉夫语中就是“小城堡”的意思。这座山控制了穆尔河至关重要的渡口，也扼守着通往巴尔干和意大利的贸易路线。到了中世纪，它成了边境伯爵们的权力宝座，石头城墙开始从山上蔓延到山脚，一个城镇的雏形渐渐成型。但真正让格拉茨步入辉煌舞台的，是哈布斯堡王朝。15世纪，腓特烈三世皇帝将格拉茨定为内奥地利（包括今天的奥地利南部、斯洛文尼亚等地）的首府。从此，这座边陲小城一跃成为帝国的政治与文化中心，贵族、学者、艺术家和商人纷至沓来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，荣耀总是与威胁相伴。格拉茨的地理位置也让它成了抵御奥斯曼帝国西进的前沿堡垒。整个16世纪，土耳其人的威胁如同悬在头顶的利剑。也正是在这种紧张的氛围中，那座举世无双的军械库被建立起来。当时的统治者下令，必须储备足以武装近三万士兵的武器盔甲。于是，从长矛、火枪到华丽的全套骑士铠甲，数以万计的装备被精心制造和保存。令人惊叹的是，这些武器大多从未在实战中使用过，它们的存在本身就是一种强大的威慑。当你今天站在那个满是木架、堆满冰冷钢铁的大厅里，几乎能听到那个时代的沉重呼吸——那是一个在恐惧中准备，却最终迎来了和平的时代。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`17、18世纪，随着土耳其威胁的消退，格拉茨迎来了巴洛克艺术的盛宴。在埃根伯格公爵这样的艺术赞助人的推动下，意大利的建筑师和艺术家被请来，将许多中世纪建筑披上了华丽的新外衣。教堂的穹顶绘上了天堂的幻景，宫殿的立面装饰着繁复的石膏花环，庭院里建起了优雅的楼梯。但格拉茨并没有被单一的巴洛克风格淹没，它保留了更早时期的结构和肌理，形成了我们今天看到的、层次丰富的建筑交响乐。这种对不同时代的包容，或许源于它作为大学城的传统。格拉茨大学建于1585年，几个世纪以来，源源不断的年轻思想在这里激荡，让这座城市始终保持着开放和好奇的心态。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`格拉茨老城并非没有经历过危机。19世纪，工业革命带来了拆除旧城墙、拓宽街道的现代化压力。幸运的是，一种强烈的历史保护意识在市民中萌芽。他们选择性地进行改造，而非粗暴地推倒重来。二战期间，格拉茨奇迹般地只遭受了轻微破坏，大部分古老建筑得以幸存。战后的经济复苏期，人们再次面临发展的诱惑，但格拉茨选择了另一条路：谨慎的修复与有机的更新。这种智慧在1999年得到了最高认可，联合国教科文组织将格拉茨历史中心列入世界遗产名录，称赞它是“中欧城市建筑发展的杰出典范”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而进入21世纪，格拉茨做了一件更大胆的事：它主动邀请现代建筑进入这片古老的核心区。英国建筑师彼得·库克设计的“穆尔岛”，像一个蓝色的外星生物泊在穆尔河上； Kunsthaus艺术宫，被当地人亲切地称为“友善的外星人”，其生物形态的蓝色玻璃皮肤在夜晚发出梦幻的光。这并非对历史的背叛，而是一种自信的传承。格拉茨仿佛在说：我们的伟大不仅仅在于保存了过去，更在于有勇气继续创造，让每个时代都在这里留下自己独特的签名。从堡垒到皇都，从军械库到大学城，再到今天的“设计之都”，格拉茨老城的每一层历史都清晰可辨，共同编织成一部关于生存、繁荣与创新的鲜活史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味格拉茨老城，我强烈建议你至少留出完整的一天，甚至两个半天。最佳抵达时间是清晨九点前，这时旅行团大军还未涌入，阳光斜射，给古老的街道镀上金光，是拍照和享受宁静氛围的黄金时段。整体游览节奏应该是“慢悠悠的探索”，从城堡山的高空全景开始，建立整体印象，然后“坠落”到迷宫般的街道中，进行细节的发掘。中午可以在老市场附近享用午餐，下午专注于室内博物馆和特色小巷，傍晚时分再次回到高处或河畔，欣赏华灯初上的魔幻时刻。这样安排，你既能捕捉到老城在不同光线下的美，也能体验到从宏观到微观、从历史到当下的完整层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周六上午老城中心有热闹的农贸市场，充满生活气息，但人也最多，喜欢清静的朋友请错开这个时段。小心那些穿着历史服装“热情”与你合影的人，事后他们会索要高额小费。老城的石板路很美但不太平，请务必穿一双绝对舒适的步行鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨搭乘城堡山电梯或沿着绿树成荫的步道缓缓上山，在俯瞰全城的观景平台上静静等待整座老城在晨光中彻底苏醒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去摸摸那座著名钟楼下的“幸运锁”，然后从背面的蜿蜒小径下山，一路感受森林的清新气息与历史城墙的厚重交错。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主广场的约翰大公喷泉边发会儿呆，观察市政厅庄严的立面，然后随便选一条 radiating 的小巷钻进去，比如充满画廊和设计店的“Färbergasse”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`去探访那个像宝库一样的军械馆，在无数盔甲与长矛的冰冷森林里，想象它们未曾经历的战争，感受和平的珍贵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到穆尔河畔那个蓝色的“穆尔岛”，走上去喝杯咖啡，感受这座现代建筑随着水流微微晃动的奇妙触感，看它与古老屋顶形成的超现实构图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“Sporgasse”街漫步，这是老城最古老的街道之一，两侧的建筑立面藏着无数文艺复兴时期的壁画和有趣的小商店。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在“Landhaushof”文艺复兴式庭院里找个长椅坐下，这个被拱廊环绕的宁静绿洲是当地人最爱的午休地点，偶尔会有学生在此练习乐器。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，前往“Kunsthaus”艺术宫，不一定非要进去，而是在它脚下的咖啡馆坐坐，等待夜幕降临，看这个“蓝色外星人”发出梦幻的光芒。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡山北侧观景台（靠近钟楼处）`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，利用侧光拍摄老城连绵的红屋顶和远处清晰的阿尔卑斯山轮廓，将钟楼作为前景，构图饱满而富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`穆尔河“林荫桥”（Murinsel）东侧`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光洒向老城时，以波光粼粼的河面为前景，对焦于对岸色彩斑澜的巴洛克建筑立面，蓝色穆尔岛可置于画面一角形成趣味点缀。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“Sackstraße”与“Hofgasse”交叉口的小广场`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光穿过狭窄的街巷，在鹅卵石路面投下长长的光影，等待一个骑自行车的人或遛狗的居民走入光线中央，捕捉动态的生活瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“Landhaushof”庭院内部`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，当阳光直射入庭院，拍摄拱廊下形成的光影走廊，人物可以站在明暗交界处，营造强烈的戏剧感和空间纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“Kunsthaus”艺术宫对面的传统建筑屋顶平台`}</h4>
                  <p className="text-sm text-gray-700">{`蓝调时刻（日落后半小时），拍摄艺术宫亮起诡异蓝光与周围暖黄色灯光的中世纪建筑形成的色彩与时空的强烈碰撞。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`格拉茨市民注重隐私，拍摄民居窗户或庭院内部前请务必征得同意。利用清晨和傍晚的“黄金时刻”和“蓝调时刻”，老城的色彩和氛围会提升好几个档次。使用无人机在历史中心上空飞行有严格限制，需提前查询法规并申请许可。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`性价比之选`}</h4>
                  <p className="text-sm text-blue-800">{`藏在老城安静一隅的百年公寓改造民宿，房东老爷爷会给你手绘地图，并推荐连旅游书上都找不到的家庭餐馆，早晨在挂着常春藤的小阳台上享用早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由16世纪修道院修缮而成的设计酒店，房间挑高极高，保留了原始的石头墙壁和拱顶，但配备了最现代的设施，住在历史与当代的交汇点上。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在城堡山半山腰的豪华酒店，部分房间拥有俯瞰全城无敌景色的露台或落地窗，在私密的空间里独享格拉茨的日出与星河。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`文艺栖息地`}</h4>
                  <p className="text-sm text-purple-800">{`位于文化区“Stadtpark”附近的设计师酒店，由本地艺术家参与装饰，每个房间主题各异，下楼就是逛不完的独立书店和咖啡馆。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿非常紧俏，尤其是夏季和圣诞市场期间，务必提前数月预订。周末（周五、六）晚上，老城中心酒吧和餐厅周围可能会比较热闹，浅眠者建议选择靠近城墙边缘或山腰的更安静区域。住在老城内虽然价格稍高，但省去了交通时间，能让你体验到入夜后和清晨时分最为纯净的古城魅力，绝对物超所值。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开格拉茨很久以后，我记忆最深的不是某个具体的建筑，而是一种感觉。那是一种从容的、被时间充分浸泡过却依然轻盈的感觉。这座老城没有被供上神坛，它只是自然而然地活着。学生们在文艺复兴的庭院里讨论课题，主妇们在古老的拱廊下购买南瓜籽油，游客和本地人在同一个广场上分享着阳光。历史在这里不是沉重的负担，而是日常生活的背景板和灵感源。它证明了保护与发展并非水火不容，真正的智慧在于让过去与未来进行一场彬彬有礼、甚至充满趣味的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求快速、新奇、甚至有些浮躁的世界里，格拉茨老城像一位温和而坚定的智者。它告诉你，深厚的历史底蕴完全可以与先锋的创造力并肩同行；它告诉你，一座城市的魅力不仅在于它保存了什么，更在于它如何让这些保存下来的东西继续呼吸、生长，并滋养着当下的人们。每一位热爱深度游的旅人，都应该来格拉茨老城住上几天。不是为了打卡清单上又一个世界遗产，而是为了体验一种可能的生活方式——一种尊重根脉、拥抱变化、优雅而又充满烟火气的生活哲学。在这里，你会找到旅行的另一种意义：不仅仅是看见，更是感受一种时间流淌过的、完整而自洽的美好。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
