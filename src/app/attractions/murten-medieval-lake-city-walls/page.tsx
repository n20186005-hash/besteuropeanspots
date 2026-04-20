import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '穆尔滕环湖古城墙 Murten (Morat) City Walls｜漫步瑞士保存最完好的中世纪环湖城墙，触摸伯尔尼战役的时光胶囊 - 最佳欧洲景点',
  description: '第一眼看到穆尔滕的城墙，你会觉得它不像一个冰冷的军事遗迹，反倒像一位慈祥的老者，张开双臂将一整座童话般的老城轻轻揽在怀里，而另一只手臂则慵懒地搭在穆尔滕湖湛蓝的臂弯上。从火车站走来的那条路，会先让你看到它宏伟的侧面：高大的石基沉稳厚重，上面是连绵的、有着深褐色木瓦屋顶的长廊，在阳光下散发着温暖干燥的...',
}

export default function MurtenMedievalLakeCityWallsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '穆尔滕环湖古城墙', href: '/attractions/murten-medieval-lake-city-walls' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`穆尔滕环湖古城墙・Murten (Morat) City Walls・瑞士・穆尔滕（莫拉）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到穆尔滕的城墙，你会觉得它不像一个冰冷的军事遗迹，反倒像一位慈祥的老者，张开双臂将一整座童话般的老城轻轻揽在怀里，而另一只手臂则慵懒地搭在穆尔滕湖湛蓝的臂弯上。从火车站走来的那条路，会先让你看到它宏伟的侧面：高大的石基沉稳厚重，上面是连绵的、有着深褐色木瓦屋顶的长廊，在阳光下散发着温暖干燥的木材气息。城墙脚下开满了天竺葵和矮牵牛，鲜红粉白，热闹得不像话，完全冲淡了石头带来的肃穆感。你几乎能想象，几个世纪以来，镇上的主妇们就是推开某扇廊下的后门，在这里晾晒衣物，闲话家常。
当你顺着斜坡走上那著名的有顶木制步道时，感官的体验便分成了奇妙的两层。脚下是厚实的木板，走起来发出令人安心的“咚咚”声，混合着从步道缝隙里透上来的、来自城墙石基的微凉潮气。你的左侧，是通过一连串窄长窗口框出的老城画卷：红瓦屋顶层层叠叠，像被细心熨烫过的波浪；教堂的尖塔稳稳地矗立其中；某个庭院里传来咖啡杯碟轻碰的脆响，和隐约的德语交谈声。而你的右侧，则是完全敞开的、令人心旷神怡的湖光山色。穆尔滕湖的水面在阳光下闪烁着细碎的银光，帆船像白色的剪纸静静滑过，远处是汝拉山脉绵延的柔和曲线。风从湖面吹来，带着水藻的清新和一丝凉意，穿过长廊，仿佛在为你这条独一无二的观光走廊调节着最舒适的温度。
你会发现，这道城墙从未真正“退休”。它融入了穆尔滕人生活的每一寸肌理。晨跑的人在你身边轻盈地超过；推着婴儿车的父母停在观景窗前，指着湖面的天鹅；放学后的孩子把这段步道当作最酷的探险通道。它不再是隔绝危险的屏障，而变成了连接家园与风景、历史与当下的最美阳台。这种“活着”的感觉，正是穆尔滕城墙最打动人心的地方——历史不是被封存的标本，而是每日生活的背景墙，坚实、可靠，且风景绝佳。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看到穆尔滕的城墙，你会觉得它不像一个冰冷的军事遗迹，反倒像一位慈祥的老者，张开双臂将一整座童话般的老城轻轻揽在怀里，而另一只手臂则慵懒地搭在穆尔滕湖湛蓝的臂弯上。从火车站走来的那条路，会先让你看到它宏伟的侧面：高大的石基沉稳厚重，上面是连绵的、有着深褐色木瓦屋顶的长廊，在阳光下散发着温暖干燥的木材气息。城墙脚下开满了天竺葵和矮牵牛，鲜红粉白，热闹得不像话，完全冲淡了石头带来的肃穆感。你几乎能想象，几个世纪以来，镇上的主妇们就是推开某扇廊下的后门，在这里晾晒衣物，闲话家常。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当你顺着斜坡走上那著名的有顶木制步道时，感官的体验便分成了奇妙的两层。脚下是厚实的木板，走起来发出令人安心的“咚咚”声，混合着从步道缝隙里透上来的、来自城墙石基的微凉潮气。你的左侧，是通过一连串窄长窗口框出的老城画卷：红瓦屋顶层层叠叠，像被细心熨烫过的波浪；教堂的尖塔稳稳地矗立其中；某个庭院里传来咖啡杯碟轻碰的脆响，和隐约的德语交谈声。而你的右侧，则是完全敞开的、令人心旷神怡的湖光山色。穆尔滕湖的水面在阳光下闪烁着细碎的银光，帆船像白色的剪纸静静滑过，远处是汝拉山脉绵延的柔和曲线。风从湖面吹来，带着水藻的清新和一丝凉意，穿过长廊，仿佛在为你这条独一无二的观光走廊调节着最舒适的温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这道城墙从未真正“退休”。它融入了穆尔滕人生活的每一寸肌理。晨跑的人在你身边轻盈地超过；推着婴儿车的父母停在观景窗前，指着湖面的天鹅；放学后的孩子把这段步道当作最酷的探险通道。它不再是隔绝危险的屏障，而变成了连接家园与风景、历史与当下的最美阳台。这种“活着”的感觉，正是穆尔滕城墙最打动人心的地方——历史不是被封存的标本，而是每日生活的背景墙，坚实、可靠，且风景绝佳。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`穆尔滕环湖古城墙`} />
                <InfoRow label="英文名称" value={`Murten (Morat) City Walls`} />
                <InfoRow label="正式名称" value={`The Medieval Ramparts of Murten`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`穆尔滕（莫拉）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这堵城墙是瑞士保存最完好、至今仍在履行部分原始职能的中世纪环湖城墙之一，更是1476年决定性的“穆尔滕战役”沉默而坚固的见证者。`} />
                <InfoRow label="建筑特色" value={`其最独特的标志是环绕整个老城、长达数公里、带有连绵不绝的木质屋顶走廊的防御工事，将实用性的军事防御与湖畔生活的诗意完美结合。`} />
                <InfoRow label="建筑风格" value={`中世纪晚期的防御工事建筑，融合了伯尔尼州典型的城市建筑元素，如阶梯式山墙屋顶和拱廊街道。`} />
                <InfoRow label="文化价值" value={`它不仅是一道物理屏障，更是一个仍在呼吸的“时光胶囊”，当地居民的日常生活与八百年的历史在此和谐共生，是了解瑞士联邦形成初期历史的活教材。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城墙的户外步道全年24小时免费开放。城墙上的有顶木制步道（Laubengang）开放时间通常为日出至日落（约上午8点至傍晚7点，随季节调整）。小镇内的博物馆和可登临的塔楼（如伯尔尼塔）开放时间一般为4月至10月，每天10:00-17:00；11月至次年3月可能仅在周末开放或需预约，建议行前在穆尔滕旅游局官网确认最新信息。`} />
              <InfoRow label="门票价格" value={`环绕城墙漫步本身完全免费。登上市政厅塔楼（Berntor）或参观穆尔滕博物馆（Murten Museum）需购票，成人约8-10瑞士法郎，学生及团体有优惠。持有瑞士旅行通票（Swiss Travel Pass）可能享有折扣。`} />
              <InfoRow label="地址" value={`Stadtmauer, 3280 Murten, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场（ZRH）出发：乘坐火车前往穆尔滕（Murten/Morat）站，通常需要在伯尔尼（Bern）或克尼茨（Kerzers）换乘一次，总车程约1小时45分钟至2小时，班次频繁。从日内瓦机场（GVA）出发：火车总行程约2小时，同样需在伯尔尼转车。从伯尔尼中央车站出发最为便捷，直达列车约30-35分钟即可抵达穆尔滕站。出火车站后，跟着“Altstadt”（老城）的指示牌，步行约10分钟即可到达古城墙脚下。瑞士铁路准点高效，建议使用SBB手机应用查询实时班次和购票。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`穆尔滕的故事，离不开水，也离不开战争。早在12世纪，这里就因为其位于伯尔尼、弗里堡和纽沙泰尔几个势力范围交界处的战略位置，以及富饶的湖畔土地而备受关注。1218年，当时统治此地的策林根家族灭亡后，穆尔滕的命运就像湖面上的小船，开始在不同领主间漂泊。直到13世纪中叶，萨伏伊伯爵们才真正在此建立了城镇，并构筑了最早的防御工事，想让这里成为他们领土北端一颗坚固的钉子。我们今天看到的城墙雏形，便始于那个时代。你可以想象，当时的工匠们从附近采石场运来巨大的石块，在湖畔的沼泽地上打下地基，心中怀揣的，是对未来冲突的隐隐预感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而历史的浪潮果然汹涌扑来。15世纪，迅速崛起的伯尔尼州对西部领土虎视眈眈，与强大的勃艮第公爵“大胆的查尔斯”产生了激烈冲突。穆尔滕，这座位于前线的小镇，成了风暴眼。1476年6月22日，决定性的穆尔滕战役在城外打响。伯尔尼及其瑞士联邦盟军的军队，与以勇猛和奢华著称的勃艮第大军在此对决。据说，当勃艮第军队开始围攻城墙时，一位穆尔滕的面包师正从烤炉中取出面包。情急之下，他抓起一个刚出炉、滚烫无比的面包，奋力扔向正在攀爬的敌军，烫得对方惨叫松手——这个带着麦香和热气的“武器”，后来成了小镇勇敢传说的一部分。尽管战役细节众说纷纭，但结果是清晰的：瑞士联军取得了辉煌胜利，大胆的查尔斯仓皇败走。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这场战役彻底改变了穆尔滕和瑞士的命运。它没有被胜利者伯尔尼大肆改造或扩建，反而因为战略重要性相对下降，其城墙免于被现代化防御体系替代的命运。在接下来的和平世纪里，它静静地待在湖边，逐渐从军事要塞转变为小镇的脊梁和象征。居民们修缮它，依赖它，也在它之上加建了那些如今成为标志的、带屋顶的木制步道，让巡逻的士兵不必风吹雨淋——这份实用主义中的体贴，充满了瑞士风情。19世纪，当欧洲许多城市拆毁城墙以拓展空间时，穆尔滕人选择了保护和修复。他们敏锐地意识到，这道环绕家园的古老臂膀，其历史与审美价值，远胜于多开辟几条街道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，我们今天才能漫步在这条独一无二的环城走廊上。每一块被脚步磨光的石板，每一根带着岁月包浆的木梁，都诉说着从战火到和平的变迁。它见证了瑞士从中世纪松散联盟走向现代联邦国家的关键一役，也亲历了小镇从防御据点变为宁静宜居湖畔明珠的整个过程。它沉默地站在那里，提醒着人们：最坚固的城墙，或许最终不是为了赢得战争，而是为了守护随之而来的、珍贵无比的和平日常生活。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要彻底领略穆尔滕城墙的魅力，建议安排一整天时间，享受慢悠悠的湖畔节奏。最好在清晨（9点前）抵达，这时旅行团尚未涌入，阳光柔和，是拍摄城墙和老城的最佳时机。整体游览可以遵循“先全景，后细节，再沉浸”的节奏：上午用2-3小时完整走完一圈城墙步道，从不同角度欣赏湖城相依的全景；中午深入老城街巷，在拱廊下享用午餐，感受本地生活气息；下午可以参观博物馆、登上塔楼，或在湖畔放松，直到日落时分再次走上城墙，看夕阳将湖面和老城染成金色。这样安排既能保证游览的深度和广度，又能体验到小镇从早到晚不同的风情。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双非常舒适耐走的平底鞋，城墙步道和古城内的石板路对高跟鞋极不友好。周末和夏季的午后可能是游客最多的时候，如果想享受宁静，尽量选择工作日清晨前往。请尊重当地居民的隐私，城墙步道的许多窗口正对着私人庭院和住宅，拍照时请保持礼貌，避免 intrusive。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从东侧的“伯尔尼门”开始你的城墙漫步，这是保存最完好的城门，先摸摸那厚重的木门和铁饰，感受历史的入口。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着有顶木廊向北缓行，让你的左侧始终是如积木般可爱的老城屋顶，右侧则是波光粼粼的湖面与远山构成的流动画卷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到西北角拐弯处，一定要停下来，这里是俯瞰穆尔滕湖和远处葡萄园梯田的绝佳观景台，想象1476年那场战役可能就在这片原野上展开。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续前行至西侧和南侧步道，这里的视野更为开阔，你会看到私人小码头和花园紧贴着城墙根，生活与古迹毫无隔阂地交织在一起。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从南侧的“低门”附近走下城墙，立刻钻进迷宫般的老城主街（Hauptgasse），让感官从辽阔变为亲切，欣赏那些装饰着华丽浮雕和鲜花的古老建筑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主街中段的拱廊下找一家传统的咖啡馆，点一份奶油满满的“莫拉蛋糕”，坐下来观察街头来来往往、步履悠闲的当地人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观市政厅和隔壁的穆尔滕博物馆，通过模型和历史文物，深入了解那场决定性的战役和小镇的日常变迁史。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在傍晚时分重新登上一段城墙，静静等待日落，看夕阳的余晖为石墙、木廊和红瓦屋顶披上温暖的蜜色光泽，结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城西拐角无顶步道处`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到日落前，光线从侧面打亮城墙和湖面，用长焦镜头压缩空间，可以拍出城墙蜿蜒、湖山层叠的史诗感全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`伯尔尼门内侧拱门`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光斜射入城门通道时，利用拱门形成天然画框，对准门洞尽头被照亮的老街建筑，能拍出极具纵深感和故事感的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`有顶步道的木质窗框后`}</h4>
                  <p className="text-sm text-gray-700">{`选择一扇正对老城红瓦屋顶的窗口，将相机贴近窗框，以深色的木材作为前景框架，聚焦远处色彩斑斓的屋顶和教堂尖塔，构图精巧如油画。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`湖南岸的长椅视角`}</h4>
                  <p className="text-sm text-gray-700">{`从湖对岸（可步行或骑车抵达）回望整个穆尔滕老城和城墙的全貌，尤其在晴朗无风的早晨，湖面如镜，能拍到城墙和房屋完美的倒影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`主街拱廊下的光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光透过拱廊的间隙，在古老的石板路上投下规律的光斑，等待一个行人或一辆自行车穿过光区，捕捉动静结合的生活瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`利用好瑞士清澈的空气和柔和的光线，清晨和傍晚的“黄金时刻”是出片的绝对保障。航拍器在瑞士使用有严格规定，尤其靠近民居和历史建筑，务必提前查询并遵守当地法规，避免干扰居民。尝试拍摄一些细节：木廊上的纹路、墙角的鲜花、窗户里的蕾丝窗帘，这些都能让你的照片更有“呼吸感”。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城心脏历史客栈`}</h4>
                  <p className="text-sm text-blue-800">{`直接住在城墙内的百年建筑里，房间有着裸露的原木横梁和复古家具，清晨推开窗，听到的只有教堂钟声和石板路上的隐约脚步声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`湖滨现代设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于城墙外几步之遥的湖边，拥有直面湖景的全景落地窗和私人阳台，在私密空间里同时享受现代舒适与无敌的自然风光。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静乡村家庭旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`选择步行或骑行距离内的周边村庄，住在典型的瑞士农舍中，享用主人自制的果酱和奶酪，夜晚在花园里仰望毫无光污染的璀璨星空。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城墙景观精品公寓`}</h4>
                  <p className="text-sm text-purple-800">{`租住一间位于城墙边上、自带小厨房的公寓，像当地人一样去市集采购食材，然后在能看到部分城墙和湖景的阳台上，为自己做一顿晚餐。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和秋季的周末非常紧俏，务必提前数月预订，尤其是老城内的特色住宿。住在老城内虽然氛围绝佳，但请注意，许多历史建筑没有电梯，且夜晚非常安静，需要轻手轻脚。穆尔滕治安极好，无论住在城内城外都无需担心，可以尽情享受夜晚散步的乐趣。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开穆尔滕许久，我脑海里最清晰的画面，不是某张明信片般的风景，而是在木制步道上遇到的一位老先生。他拄着拐杖，走得很慢，每经过一个熟悉的窗口，都会停下来，望一眼湖，再望一眼城里的屋顶，眼神平静得像脚下的湖水。那一刻我忽然明白了这道城墙最深的魔力：它给予生活一种庄严的“仪式感”和“稳定性”。无论外面的世界如何高速旋转，科技如何颠覆日常，这里的居民依然可以在傍晚，走上这条走了八百年的走廊，用同一个视角，看同一片湖山。时光在这里不是线性狂奔的，而是循环的、沉淀的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求“更快、更高、更强”的世界里，穆尔滕的城墙提供了一种截然不同的价值主张：慢下来，环抱起来，守护下去。它告诉我们，真正的力量未必在于不断扩张和征服，而在于知道自己的边界，并在边界内将生活经营得深厚、安宁、自足。它是一道物理的墙，却意外地成为了心灵的庇护所。对于每一位厌倦了浮光掠影、渴望在旅途中触摸历史脉搏并找到内心平静的旅人来说，穆尔滕都不只是一个景点，而是一次温暖的提醒：来，走上这条有顶的步道，看看生活本该有的、从容不迫的样子。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/gruyeres-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格吕耶尔中世纪小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Gruyères</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chur-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chur Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/appenzell-traditional-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿彭策尔传统村落</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Appenzell</p>
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
