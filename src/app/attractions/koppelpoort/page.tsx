import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿默斯福特中世纪城门 Koppelpoort｜水陆双栖的防御杰作，聆听荷兰“护城河”的低语 - 最佳欧洲景点',
  description: '嘿，朋友，想象一下，你正漫步在阿默斯福特老城安静的石板路上，空气里有刚下过雨的湿润气息，混合着运河边青苔和古老砖石的味道。转过一个弯，没有任何预告，它就这么静静地出现在你眼前——Koppelpoort。第一眼，你可能会愣一下，因为它和你在画册里看过的那些华丽城堡城门太不一样了。它没有张扬的尖顶，也没...',
}

export default function KoppelpoortPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '阿默斯福特', href: '/destinations/netherlands' },
            { label: '阿默斯福特中世纪城门', href: '/attractions/koppelpoort' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿默斯福特中世纪城门・Koppelpoort・荷兰・阿默斯福特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下，你正漫步在阿默斯福特老城安静的石板路上，空气里有刚下过雨的湿润气息，混合着运河边青苔和古老砖石的味道。转过一个弯，没有任何预告，它就这么静静地出现在你眼前——Koppelpoort。第一眼，你可能会愣一下，因为它和你在画册里看过的那些华丽城堡城门太不一样了。它没有张扬的尖顶，也没有繁复的浮雕，就是由一块块厚重的、颜色深浅不一的红砖垒砌而成，敦实、沉稳，像一位穿着旧式铠甲的巨人，半身浸在墨绿色的运河水中，半身牢牢扎根在陆地。午后的阳光斜斜地打在砖墙上，几百年风雨冲刷出的斑驳痕迹清晰可见，墙缝里倔强地长着几簇野草。那种扑面而来的，不是惊艳，而是一种直击心底的、沉甸甸的时间质感。
走近了，你会听见声音。头顶是风穿过城墙垛口时发出的、低沉的呜呜声，像历史的叹息。脚下是运河水轻轻拍打着古老石基的哗啦声，节奏舒缓。偶尔有天鹅无声地滑过水面，或是载着游客的小船从它下方的水门拱洞中慢悠悠地穿过，船夫用带着口音的英语讲解着，声音在水面荡开。这时你才会真切地感受到，这座城门从未死去。它不再是战争工具，而是完全融入了这座城市的日常血脉。遛狗的老人从它身边的步道经过，骑自行车的学生叮铃铃地响着车铃从它面前飞驰而去，它就这样静静地看着，守护着这份现代生活的宁静。
最打动人的，莫过于它那种“双重身份”的巧妙。你站在陆地一侧，仰视那高耸的城墙和厚重的木门，能想象到冷兵器时代它一夫当关的威严。而当你踱步到运河对岸，从水上再看它，会发现它的基座直接没入水中，巨大的木制水闸门依然保存完好。它告诉你，荷兰人的智慧自古就与水息息相关——他们不仅用城墙防御敌人，更用闸门控制水位，保护城内的家园免受洪水侵袭。这种将防御与水利管理结合得天衣无缝的设计，是纯粹的荷兰式实用主义 genius，比任何华丽的装饰都更令人肃然起敬。它不动声色，却讲述着这片土地的人民如何与自然博弈、共存的古老故事。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下，你正漫步在阿默斯福特老城安静的石板路上，空气里有刚下过雨的湿润气息，混合着运河边青苔和古老砖石的味道。转过一个弯，没有任何预告，它就这么静静地出现在你眼前——Koppelpoort。第一眼，你可能会愣一下，因为它和你在画册里看过的那些华丽城堡城门太不一样了。它没有张扬的尖顶，也没有繁复的浮雕，就是由一块块厚重的、颜色深浅不一的红砖垒砌而成，敦实、沉稳，像一位穿着旧式铠甲的巨人，半身浸在墨绿色的运河水中，半身牢牢扎根在陆地。午后的阳光斜斜地打在砖墙上，几百年风雨冲刷出的斑驳痕迹清晰可见，墙缝里倔强地长着几簇野草。那种扑面而来的，不是惊艳，而是一种直击心底的、沉甸甸的时间质感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会听见声音。头顶是风穿过城墙垛口时发出的、低沉的呜呜声，像历史的叹息。脚下是运河水轻轻拍打着古老石基的哗啦声，节奏舒缓。偶尔有天鹅无声地滑过水面，或是载着游客的小船从它下方的水门拱洞中慢悠悠地穿过，船夫用带着口音的英语讲解着，声音在水面荡开。这时你才会真切地感受到，这座城门从未死去。它不再是战争工具，而是完全融入了这座城市的日常血脉。遛狗的老人从它身边的步道经过，骑自行车的学生叮铃铃地响着车铃从它面前飞驰而去，它就这样静静地看着，守护着这份现代生活的宁静。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，莫过于它那种“双重身份”的巧妙。你站在陆地一侧，仰视那高耸的城墙和厚重的木门，能想象到冷兵器时代它一夫当关的威严。而当你踱步到运河对岸，从水上再看它，会发现它的基座直接没入水中，巨大的木制水闸门依然保存完好。它告诉你，荷兰人的智慧自古就与水息息相关——他们不仅用城墙防御敌人，更用闸门控制水位，保护城内的家园免受洪水侵袭。这种将防御与水利管理结合得天衣无缝的设计，是纯粹的荷兰式实用主义 genius，比任何华丽的装饰都更令人肃然起敬。它不动声色，却讲述着这片土地的人民如何与自然博弈、共存的古老故事。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿默斯福特中世纪城门`} />
                <InfoRow label="英文名称" value={`Koppelpoort`} />
                <InfoRow label="正式名称" value={`Koppelpoort`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`阿默斯福特`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是欧洲中世纪晚期军事工程学与民用建筑智慧完美结合的罕见典范，也是阿默斯福特城市身份与独立精神的永恒象征。`} />
                <InfoRow label="建筑特色" value={`一座独一无二的“水陆双栖”城门，巧妙地将一座横跨护城河的陆上城门与一座可控制水闸的水上城门合二为一。`} />
                <InfoRow label="建筑风格" value={`晚期哥特式军事建筑，兼具实用主义的防御功能与那个时代特有的、略显粗犷而庄严的砖砌美学。`} />
                <InfoRow label="文化价值" value={`它不仅是一座防御建筑，更是解读荷兰“水管理”民族基因、中世纪城市自治生活以及战争与和平历史嬗变的立体教科书。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城门外部及周边运河区域全天24小时开放。内部参观及登塔体验仅在导游带领下进行，导游团通常在每年4月至10月的周二、周四、周六和周日下午2点开始，具体时间会随季节微调，冬季（11月至次年3月）团次大幅减少甚至取消。强烈建议出发前查看阿默斯福特旅游局官网的“古迹游览”页面，以获取最新时刻表。国家法定假日期间可能有特殊安排或闭馆。`} />
              <InfoRow label="门票价格" value={`从外部观赏及在周边漫步完全免费。参加官方的导游导览团进入城门内部和登上塔楼，成人票约为9欧元，65岁以上老人及持有有效学生证的学生约为7欧元，4至12岁儿童约为5欧元，4岁以下幼儿免费。门票通常在导游处现场购买，支持现金和主流信用卡。阿默斯福特城市卡可能包含此项目并提供折扣。`} />
              <InfoRow label="地址" value={`Koppelpoort 1, 3812 RG Amersfoort, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发最便捷。乘坐直达的Intercity列车前往阿默斯福特中心火车站，车程约35-40分钟，班次频繁（约每15-20分钟一班），在机场火车站售票机或NS（荷兰铁路）App上购票即可。从阿默斯福特中心火车站出发，步行是探索这座紧凑古城的最佳方式。出站后沿着清晰的“Historische Binnenstad”（历史中心）指示牌，穿过热闹的购物街，大约步行10-15分钟即可抵达矗立在老运河畔的Koppelpoort。如果行李较多，火车站前有出租车候客点，车程约5分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解Koppelpoort为何如此特别，我们得把时钟拨回14世纪末。那时的阿默斯福特，可不是今天这座宁静优雅的小城，它是一个凭借羊毛贸易迅速崛起的富裕城镇，财富惹人眼红。为了保护自己，城市开始建造第二道城墙，也就是我们今天看到的老城轮廓。而这座城门，始建于大约1380年，是这项庞大防御工程中最后、也是最关键的一环。它的名字“Koppelpoort”很有意思，“Koppel”在古荷兰语中有“连接”或“结合”之意，精准地预言了它未来的形态——起初，它只是一座独立的陆上城门。但设计师的脑子里，显然有着更宏大的蓝图。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让这座城门成型并载入史册的，是15世纪的一次彻底重建与升级。当时，城市的决策者们意识到，仅靠陆地防御是远远不够的。阿默斯福特位于两条河流的交汇处，水网密布，既是经济命脉，也是防御软肋。于是，一个大胆的想法诞生了：何不建造一座既能守陆、又能控水的超级城门？大约在1425年至1450年间，能工巧匠们将原有的陆门与新建的水门结构精巧地“嫁接”在一起，形成了我们今天看到的、独一无二的双体结构。你可以想象当时的场景：工匠们踩着脚手架，在泥泞的河岸边，用巨大的砖石和橡木，一点点垒砌起这座工程奇迹。它不仅仅是一道门，更是一个复杂的机械装置，塔楼内装有绞盘，可以升降沉重的木制闸门和吊桥。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，坚固的城墙并不意味着永久的和平。1567年，荷兰反抗西班牙统治的八十年战争烽火燃起，Koppelpoort经历了它建成后最严峻的考验。它成功地抵御了西班牙军队的多次围攻，成为了阿默斯福特人民抵抗精神和独立意志的堡垒。城门上的箭孔和炮位，并非装饰，它们是真的在烈焰与硝烟中咆哮过。战争结束后，随着火药武器的兴起，这种中世纪风格的城墙逐渐失去了军事价值。幸运的是，阿默斯福特人没有将它拆毁，而是任其自然地融入了城市景观。它变成了仓库、看守人住所，甚至一度有些荒废。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转折点发生在19世纪末。随着浪漫主义和民族历史意识的复兴，人们重新发现了这座中世纪瑰宝的价值。1885年至1886年，在著名建筑师皮埃尔·库伯斯的指导下，Koppelpoort进行了一次重要的修复，清除了后来添加的多余建筑，恢复了它原本的雄伟面貌。这次修复不是推倒重建，而是精心的“治疗”，让它重获新生。自那以后，它便从一座功能性的旧建筑，升华为阿默斯福特乃至整个荷兰的国家纪念碑。它静静矗立，见证了20世纪的纷扰，也迎接着21世纪来自全球的、好奇的目光。从防御工事到城市象征，它的故事，就是一部浓缩的荷兰城市发展史。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整体验Koppelpoort的魔力，我强烈建议你安排一个完整的下午。最佳抵达时间是午后两三点，这时阳光正好能照亮城门雄伟的砖砌立面，适合外部观赏和拍照。整体游览节奏应该是“由外到内，再由内回味”。首先花大约45分钟到1小时，沿着运河从不同角度欣赏它的外观，感受它与城市、水流的共生关系。如果恰好赶上（并提前预订了）下午的导游团，那就完美了，跟随导游进入内部探索约1小时，聆听那些砖石无法诉说的细节。游览结束后，不必急着离开，在城门旁的咖啡馆或运河边的长椅上坐下来，看着光影移动，直到金色的夕阳为这座中世纪巨人披上最后一件外衣。这样的安排，既能满足知识探索的深度，又能留下足够的时间进行情感上的沉浸。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`导游团非常热门且名额有限，务必提前在阿默斯福特旅游局（VVV）官网查看时间并预订，尤其是在夏季旺季。
城门周边石板路略有起伏且运河边无护栏，建议穿一双舒适防滑的鞋子，拍照和步行时注意脚下安全。
阿默斯福特老城非常紧凑，完全可以用步行串联Koppelpoort、高耸的Onze-Lieve-Vrouwetoren教堂主塔和惬意的hofjes（隐藏庭院），无需交通工具。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从阿默斯福特中心火车站轻松漫步，穿过布满时尚店铺与古老山墙房子的Lieve Vrouwestraat街，让现代与古典的交融感为你预热。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先抵达城门西侧的陆地广场，仰头细细打量那高耸的塔楼、厚重的木质门扉以及城墙上一排排漆黑的射击孔，想象吊桥升起时的肃杀气氛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后沿着运河（‘Binnenstadse Gracht’）北岸向东走，选择一个能同时看到陆地城门与水中倒影的完美角度，看天鹅在拱洞阴影下游弋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续前行，穿过小桥走到运河南岸，从这里回望，你能完整地欣赏到这座“双体”建筑的全貌，以及水面如何温柔地拥抱它坚固的石基。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时机正好，在导游的带领下穿过那扇吱呀作响的古老木门，进入阴凉而充满木头清香的城门内部，亲手触摸运作了几百年的绞盘机械。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着狭窄陡峭的旋转石梯爬上塔楼，从昔日弓箭手瞭望的窗口望出去，整个阿默斯福特老城的红色屋顶在眼前如波浪般铺展开来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼下来后，别忘了走到水门下方的拱洞处，触摸那被流水侵蚀得光滑的石壁，聆听每一艘小船穿过时回荡的空旷水声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`结束探索后，就在城门旁的老字号咖啡馆‘Café De Observant’户外座坐下，点一杯醇厚的荷兰咖啡，看着城门从午后明亮逐渐过渡到黄昏的暖金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`运河南岸的‘Kleine Spui’桥梁上`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，阳光从西侧为城门打上侧光，此时站在桥中央，可以将完整的城门、它在水中的倒影以及桥的曲线一同构入画面，画面宁静而富有几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`陆地广场侧的低角度仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`选择晴朗的上午，阳光能照亮城门正面时，蹲下或低机位拍摄，以巨大的木门和砖墙为前景，将塔楼和天空纳入，凸显其压迫性的宏伟气势。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从水门拱洞内部向外拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`如果有机会参加导览，在导游允许的情况下，站在拱洞内侧边缘，使用广角镜头对准洞外的运河、房屋和天空，能拍出极具纵深感和框架构图的“画中画”效果。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城门东侧沿河步道的长椅视角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或工作日人少时，坐在固定的长椅上，将城门作为背景，捕捉当地人骑车经过、遛狗或河边阅读的生活瞬间，让古迹充满生动的烟火气。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`荷兰天气多变，散射光（阴天）其实非常适合拍摄砖石建筑的质感细节，能避免强烈的阴影。使用无人机拍摄需格外谨慎，老城上空常有禁飞限制，且需尊重当地居民隐私。拍摄运河游船穿过拱洞的经典画面需要一点耐心，等待船体恰好位于拱洞中央时按下快门。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河景观之选`}</h4>
                  <p className="text-sm text-blue-800">{`距离城门步行仅三分钟的精品设计酒店，房间拥有直面Koppelpoort的私人阳台，清晨在潺潺水声中醒来，独享无人打扰的城门晨景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`藏身于老城中心一栋17世纪商人住宅内的小型奢华酒店，内部是极简现代设计，但保留了原始的砖墙和木梁，出门拐弯就是城门，古今只在一步之遥。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭经营`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城宁静街巷里的B&B，由一对热情的老夫妻打理，房间布置得像祖母的家一样温馨，早餐有自制的苹果派和地道的荷兰奶酪，能听到最本地的故事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`现代便捷基地`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在火车站附近的四星级酒店，房间宽敞明亮，对于自驾或搭乘火车的旅客极为方便，步行至城门也只需十分钟，是探索城市完美的舒适大本营。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿默斯福特老城中心区域非常安全且宁静，夜晚漫步极具情调。预订能看到城门或运河的房间时，尤其夏季和周末，务必提前数周甚至数月下手。许多特色酒店和B&B不设大型前台，采用自助入住或预约制，预订后仔细阅读酒店发送的入住指南邮件至关重要。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿默斯福特许多天后，我脑海里反复回放的，不是某一张具体的明信片角度，而是一种混合的感觉：指尖触碰那些凉而粗糙的砖石时的触感，运河水面那种特有的、略带腥甜的水汽味道，以及黄昏时分，城门巨大的影子慢慢拉长，将喧嚣滤去后，那份亘古的宁静。Koppelpoort教给我的，远不止中世纪建筑知识。它以一种沉默而强大的存在，讲述着关于“边界”与“连接”的哲学。它曾经是生与死、内与外的绝对边界；而今天，它却成了连接历史与当下、战争记忆与和平生活、实用工程与艺术之美的桥梁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求新奇与刺激的快节奏世界里，我们太需要这样一处地方。它不喧哗，不讨好，只是固执地、真实地站在那里，让你慢下来，去观察一块砖的纹理，去聆听一段水流的故事。它让我们明白，真正的深度旅行，不是打卡了多少地标，而是你是否有一个瞬间，与某个时空产生了共振。当你站在Koppelpoort下，你会感到自己是漫长历史中的一个小点，这种渺小感非但不会让人沮丧，反而带来一种奇特的释然与安宁。所以，如果你也厌倦了浮光掠影，渴望一次与历史结实实的拥抱，那么请一定要来阿默斯福特，来到这座水陆双栖的城门面前。它不会给你即刻的狂欢，但它馈赠的，是一段能沉淀在心底许久的、沉稳的时间。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kasteel-de-haar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克莱沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel de Haar</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zutphen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    聚
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">聚特芬古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zutphen Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/valkenburg-castle-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法尔肯堡废墟城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Valkenburg Castle</p>
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
