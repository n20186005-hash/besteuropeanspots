import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '穆尔滕老城及城墙 Murten Old Town and City Walls｜漫步瑞士保存最完好的中世纪古城墙，邂逅穆尔滕湖的梦幻晨光 - 最佳欧洲景点',
  description: '走近穆尔滕，你第一眼看到的不会是华丽的宫殿，而是一道坚固、绵长、带着温柔弧线的赭石色城墙。它像一位张开双臂的沉默巨人，将红瓦屋顶的老城紧紧拥在怀中。穿过古老的城门，时间仿佛被调慢了发条。脚下是被数百年脚步打磨得温润光滑的石板路，缝隙里长出茸茸的青苔。空气中飘散着新鲜烘焙的黄油面包和现磨咖啡的香气，混...',
}

export default function MurtenOldTownWallsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '穆尔滕老城及城墙', href: '/attractions/murten-old-town-walls' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`穆尔滕老城及城墙・Murten Old Town and City Walls・瑞士・穆尔滕`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`走近穆尔滕，你第一眼看到的不会是华丽的宫殿，而是一道坚固、绵长、带着温柔弧线的赭石色城墙。它像一位张开双臂的沉默巨人，将红瓦屋顶的老城紧紧拥在怀中。穿过古老的城门，时间仿佛被调慢了发条。脚下是被数百年脚步打磨得温润光滑的石板路，缝隙里长出茸茸的青苔。空气中飘散着新鲜烘焙的黄油面包和现磨咖啡的香气，混着从附近穆尔滕湖吹来的、带着水汽的微风。阳光穿过狭窄街道两侧五彩的遮阳篷，在墙壁上投下明明暗暗的光斑。你听到的不是喧闹的旅游广播，而是当地老太太提着菜篮用德语和法语混杂的问候声，自行车铃清脆的叮当声，以及从某个庭院深处传来的、若有若无的钢琴练习曲。
这座城的心脏，就在这蜿蜒的城墙之内。它不是博物馆里冰冷的模型，而是一个充满呼吸和心跳的社区。面包房的师傅清晨四点就开始劳作，花店老板娘在窗台摆上当季的郁金香，孩子们放学后背着书包在城墙上追逐嬉戏。最动人的是，当你沿着城墙顶部的木制廊道漫步，你会发现许多面向内侧的小窗和门洞——那是城墙内侧民居的后门。历史在这里不是被供起来的古董，而是人们家中的一堵墙、窗边的一盆花。这种将宏伟防御工事彻底融入日常生活的奇妙感，是穆尔滕无可替代的魅力。
而当你走到城墙的北段，视野豁然开朗。穆尔滕湖那一片浩瀚的、介于宝蓝与翡翠色之间的湖水毫无预警地铺展在你眼前。湖对岸是平缓的汝拉山丘，山坡上是整齐的葡萄园。在清晨或黄昏，湖面会蒸腾起一层薄薄的雾气，将远处的帆船和天鹅化作水墨画中的剪影。这一刻，你会明白，穆尔滕的完美，不仅在于它保存了中世纪的形式，更在于它坐拥了这片绝世的湖光山色。坚固与温柔，历史与自然，在这里达成了最美的平衡。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`走近穆尔滕，你第一眼看到的不会是华丽的宫殿，而是一道坚固、绵长、带着温柔弧线的赭石色城墙。它像一位张开双臂的沉默巨人，将红瓦屋顶的老城紧紧拥在怀中。穿过古老的城门，时间仿佛被调慢了发条。脚下是被数百年脚步打磨得温润光滑的石板路，缝隙里长出茸茸的青苔。空气中飘散着新鲜烘焙的黄油面包和现磨咖啡的香气，混着从附近穆尔滕湖吹来的、带着水汽的微风。阳光穿过狭窄街道两侧五彩的遮阳篷，在墙壁上投下明明暗暗的光斑。你听到的不是喧闹的旅游广播，而是当地老太太提着菜篮用德语和法语混杂的问候声，自行车铃清脆的叮当声，以及从某个庭院深处传来的、若有若无的钢琴练习曲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城的心脏，就在这蜿蜒的城墙之内。它不是博物馆里冰冷的模型，而是一个充满呼吸和心跳的社区。面包房的师傅清晨四点就开始劳作，花店老板娘在窗台摆上当季的郁金香，孩子们放学后背着书包在城墙上追逐嬉戏。最动人的是，当你沿着城墙顶部的木制廊道漫步，你会发现许多面向内侧的小窗和门洞——那是城墙内侧民居的后门。历史在这里不是被供起来的古董，而是人们家中的一堵墙、窗边的一盆花。这种将宏伟防御工事彻底融入日常生活的奇妙感，是穆尔滕无可替代的魅力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你走到城墙的北段，视野豁然开朗。穆尔滕湖那一片浩瀚的、介于宝蓝与翡翠色之间的湖水毫无预警地铺展在你眼前。湖对岸是平缓的汝拉山丘，山坡上是整齐的葡萄园。在清晨或黄昏，湖面会蒸腾起一层薄薄的雾气，将远处的帆船和天鹅化作水墨画中的剪影。这一刻，你会明白，穆尔滕的完美，不仅在于它保存了中世纪的形式，更在于它坐拥了这片绝世的湖光山色。坚固与温柔，历史与自然，在这里达成了最美的平衡。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`穆尔滕老城及城墙`} />
                <InfoRow label="英文名称" value={`Murten Old Town and City Walls`} />
                <InfoRow label="正式名称" value={`Murten Old Town and City Walls`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`穆尔滕`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`1476年穆尔滕战役的决胜之地，这场战役稳固了瑞士邦联的独立，也让这座小镇成为瑞士中世纪历史活生生的见证。`} />
                <InfoRow label="建筑特色" value={`环绕整个老城的、几乎完整的双层中世纪防御城墙，顶层是带木制屋顶的步行廊道，是瑞士现存最长、最完整的同类建筑。`} />
                <InfoRow label="建筑风格" value={`晚期哥特式与文艺复兴风格交融，体现在塔楼、拱门和民居的立面装饰上，整体呈现出典型的伯尔尼高地中世纪城镇风貌。`} />
                <InfoRow label="文化价值" value={`一个仍然“活着”的中世纪城镇典范，城墙不仅是景点，更是居民日常散步的公园，完美体现了历史遗产与现代生活的和谐共生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城及城墙全天开放，可自由漫步。城墙的步行道开放时间通常为日出至日落。部分塔楼和历史建筑（如穆尔滕博物馆、城堡）有独立开放时间：一般为4月至10月，周二至周日 10:00-17:00；11月至次年3月开放时间缩短或闭馆维护。建议行前在市政官网确认具体日期。`} />
              <InfoRow label="门票价格" value={`进入古城和登上城墙步行完全免费。穆尔滕博物馆门票约为8瑞士法郎，城堡参观可能需额外支付少量费用。持有瑞士旅行通票可享受折扣。`} />
              <InfoRow label="地址" value={`Stadtgraben, 3280 Murten, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世机场出发：乘坐火车前往伯尔尼（Bern），在伯尔尼转乘前往穆尔滕（Murten）的区域火车，全程约1小时45分钟至2小时，班次频繁。
从日内瓦机场出发：乘坐火车至弗赖堡（Fribourg），再转乘前往穆尔滕的列车，全程约2小时。
从伯尔尼火车站出发：有直达穆尔滕的列车，车程约35分钟，几乎每小时都有车。
抵达穆尔滕火车站后，老城和城墙就在步行5-10分钟的范围内，无需额外交通工具。建议使用瑞士联邦铁路（SBB）App购票和查询实时班次。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`穆尔滕的故事，始于一道简单的命令。大约在12世纪末，统治此地的策林根公爵看中了这个位于穆尔滕湖西岸、扼守交通要道的小渔村。他下令在此修筑城堡和最初的防御工事，一个城镇的雏形就此诞生。然而，真正赋予穆尔滕灵魂和骨架的，是后来接手它的领主们。13世纪，穆尔滕成为了萨伏伊伯爵的领地。这位雄心勃勃的伯爵清晰地认识到其战略价值，他投入巨资，在原有基础上大规模扩建了城墙和塔楼，初步形成了我们今天看到的环绕式防御体系。城墙不仅仅是石头堆砌的屏障，更是权力与财富的象征，它告诉每一个路过的人：这是一个重要且繁荣的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但石头城墙挡不住历史的洪流。15世纪，欧洲的权力游戏进入了血腥而混乱的章节。强大的勃艮第公爵“大胆查理”野心勃勃，意图建立一个从北海延伸到地中海的中世纪超级王国，而瑞士邦联那些“粗野的山民”是他必须铲除的障碍。1476年6月22日，决定性的战役在穆尔滕城下打响。伯尔尼等邦联军队以少胜多，以灵活的战术和惊人的士气，击溃了勃艮第公爵装备精良但指挥混乱的大军。传说，胜利的消息是通过点燃烽火和派信使跑步传递的，而一位名叫“Murtenläufer”（穆尔滕跑者）的传奇信使形象，至今仍是小镇的骄傲。这场战役不仅是军事上的胜利，更是瑞士民族意识和邦联凝聚力的关键转折点，穆尔滕的名字也因此永远铭刻在了瑞士建国神话之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战火平息后，穆尔滕进入了相对和平与繁荣的时期。城墙在16世纪得到了进一步加固和美化，增加了我们现在看到的、带有优雅木制屋顶的步行廊道。城墙内侧，富有的商人和手工业者建起了拥有漂亮凸窗和彩绘立面的三层、四层楼房。这些建筑融合了哥特式的垂直线条和文艺复兴式的装饰元素，色彩柔和而丰富——淡黄、浅粉、鹅蛋黄，像打翻了一盒马卡龙。城镇的格局基本定型：两条主街平行贯穿，中间点缀着几个小巧的广场，一切都被那道坚实的城墙妥帖地保护着。它不再需要时刻准备战斗，而是逐渐转变为区域性的市场和行政中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到现代，当许多欧洲古城为了交通拆毁了城墙，穆尔滕却做出了一个幸运而智慧的选择。它完整地保留了自己的“铠甲”。这或许是因为它偏安一隅，工业化浪潮并未在此掀起颠覆性的改造；也归功于当地居民对家园遗产根深蒂固的珍视。20世纪以来，系统的修复工程让古老的城墙和建筑焕发新生，但精髓未变。今天的穆尔滕，奇迹般地躲过了过度商业化的侵蚀。没有连锁快餐店，没有喧闹的纪念品集市，只有独立书店、手工巧克力作坊、家庭经营的餐厅和飘着咖啡香的小馆。那道城墙，从军事防御工事，变成了居民散步、遛狗、看夕阳的“空中公园”，成为了连接历史与当下最动人的纽带。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受穆尔滕的晨昏之美，建议安排一整天时间。最好前一晚抵达，第二天一早开始游览。上午八点左右是黄金时间，游客未至，阳光柔和，是漫步城墙和拍摄老城街巷的绝佳时机。整体游览节奏应放慢，以“走一圈、穿一次、望一眼”为核心：即环绕城墙走一圈，深入老城街巷穿行一次，最后到湖边静坐远望一眼。这样的安排能让你从宏观到微观，全方位沉浸在中世纪的氛围与湖光山色之中。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是游客高峰期，城墙步行道会略显拥挤，尽量错峰出行。老城内许多小巷坡度较陡且路面光滑，务必穿一双舒适防滑的鞋子。这里不是苏黎世或卢塞恩，大部分小店和餐厅可能只收现金或瑞士本地借记卡，建议备好适量瑞士法郎现金。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从伯尔尼门（Bern Tor）进入老城，立刻右转登上城墙，迎着东面洒来的晨光在空无一人的木质廊道上开始顺时针漫步`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到城墙东北角的“指挥官塔”停下，从这个制高点俯瞰红瓦屋顶的海洋和远处波光粼粼的穆尔滕湖，看天鹅在城墙根的水面滑行`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从“湖门”（Seetor）附近的阶梯走下城墙，钻进老城腹地，在主街（Hauptgasse）上找一家面包店，买一个刚出炉的“穆尔滕辫子面包”边走边啃`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政厅（Rathaus）前的小广场驻足，观察建筑立面上精美的文艺复兴晚期彩绘和记录历史的浮雕`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着小巷摸索到城堡（Schloss）脚下，虽然不一定要进去，但可以感受这座最古老建筑带来的威严气场`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后穿过“法国门”（Französentor），沿着一条林荫小径走到湖边码头，租一艘脚踏船或干脆在长椅上发呆，从水面上回望城墙的雄姿`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分再次登上西段的城墙，寻找一个面向湖泊的垛口，等待夕阳将整片湖水、城墙和远山染成金红色的魔法时刻`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`夜幕降临时回到主街，挑选一家有露天座位的传统餐厅，点一份湖区特色的梭鲈鱼（Felchen），在烛光中结束完美的一天`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城墙“指挥官塔”转角处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时，利用城墙的弧形走向作为引导线，将湖面、老城屋顶和塔楼一同收入镜框，构图饱满而富有层次`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主街（Hauptgasse）中段仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点左右的侧光能完美勾勒出两侧彩色房屋凸窗和招牌的细节，站在街道中央低角度向上拍，能捕捉到典型的瑞士中世纪街道的深邃感`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从穆尔滕湖对岸的“观景台”远眺`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，使用长焦镜头压缩空间，可以拍到城墙、塔楼、老城建筑与湖中倒影共同构成的、如古典油画般的全景`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙木制廊道的光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光透过廊道一侧的木格栅窗射入，会在另一侧墙壁和地板上形成迷人的明暗条纹，适合拍摄极简风格的人像或静物`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`法国门（Französentor）内侧拱门`}</h4>
                  <p className="text-sm text-gray-700">{`利用拱门作为天然画框，构图时将门洞外的绿树、湖泊或街道作为背景，拍出穿越时空的纵深感`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`航拍在这里是严格禁止的，因为会干扰居民隐私和湖区的鸟类，请务必遵守。拍摄当地居民，尤其是店内或私人庭院场景时，请先微笑示意并获得同意，瑞士人非常注重隐私。利用雨后湿润的石板路反光，能大大提升街道照片的氛围感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖景首选`}</h4>
                  <p className="text-sm text-blue-800">{`坐落在湖滨大道上的四星级历史酒店，部分房间拥有直面穆尔滕湖和古城的无敌阳台，清晨在阳台上就能拍到雾锁湖城的仙境画面`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城核心`}</h4>
                  <p className="text-sm text-green-800">{`由一栋16世纪商人宅邸改造的精品酒店，房间保留了原始的橡木横梁和石墙，位置极其隐秘安静，下楼就是最美的街巷`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城墙脚下的浪漫`}</h4>
                  <p className="text-sm text-yellow-800">{`一家家庭经营的舒适旅馆，房间小巧温馨，最大的亮点是从后院花园可以直接登上城墙的步行道，像拥有了私家花园`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济实用之选`}</h4>
                  <p className="text-sm text-purple-800">{`火车站附近干净现代的连锁酒店，步行到老城只需十分钟，适合预算有限但希望停留多日的背包客或家庭`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`穆尔滕非常小，旺季（6-9月及圣诞市场期间）住宿非常紧张，务必提前数月预订。老城内的酒店通常不设电梯，且隔音可能一般，但历史氛围无可比拟。选择湖滨住宿要注意，夏季可能会有轻微的湖藻气味，但开窗见景的体验绝对值得。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开穆尔滕许久，我脑海里最清晰的画面，不是某座具体的塔楼，也不是某顿美味的晚餐，而是黄昏时分，在城墙上遇见的那对老夫妇。他们并排坐在一个垛口下的长椅上，面前摊开着一本厚重的书，老先生的食指缓缓划过书页，老太太则望着湖面出神。夕阳把他们的白发染成金色，也把古老的石墙烘烤得温暖。那一刻，我突然懂了穆尔滕最珍贵的东西是什么。它不是一件被封存在玻璃柜里的展品，而是一个依然在使用的、活生生的“容器”。它容纳了历史的风云，容纳了湖山的秀色，更容纳了普通人平静而真实的日常生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个崇尚“新”和“快”的世界里，穆尔滕固执地、优雅地守护着一种“旧”的、“慢”的节奏。它的城墙隔绝了外界的喧嚣，却未曾隔绝生活的暖意。它让我们看到，历史遗产最好的归宿，不是被圈起来仅供瞻仰，而是被温柔地编织进每一天的晨光与暮色里，成为呼吸的一部分。来到这里，你不是一个旁观历史的游客，你会不自觉地放轻脚步，压低声音，生怕惊扰了这份持续了数百年的宁静与和谐。对于每一位渴望在旅途中找到片刻安宁，并触摸历史真实温度的深度旅行者来说，穆尔滕老城及城墙，都是一个能让你心跳慢下来、嘴角不自觉上扬的，必须抵达的答案。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/thun-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图恩城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Thun Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/castles-of-bellinzona" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝林佐纳三城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Castles of Bellinzona</p>
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
