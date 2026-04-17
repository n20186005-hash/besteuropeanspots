import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '图尔库城堡 Turku Castle｜北欧时光的活态史诗，穿越七百年王权与囚徒的回声 - 最佳欧洲景点',
  description: '第一次走近图尔库城堡，是在一个典型的芬兰夏日傍晚，天空是那种永远不肯彻底暗下去的、温柔的灰蓝色。奥拉河的水汽混着青草与古老石墙的气息扑面而来，眼前那座庞然大物安静地匍匐在河岸，没有想象中的童话尖顶，而是由大块大块未经雕琢的灰色花岗岩垒成，敦实、粗粝，像一头沉睡了几百年的巨兽。它的影子长长地投在草地上...',
}

export default function TurkuCastleSwedenFinlandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '图尔库城堡', href: '/attractions/turku-castle-sweden-finland' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`图尔库城堡・Turku Castle・芬兰・图尔库`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次走近图尔库城堡，是在一个典型的芬兰夏日傍晚，天空是那种永远不肯彻底暗下去的、温柔的灰蓝色。奥拉河的水汽混着青草与古老石墙的气息扑面而来，眼前那座庞然大物安静地匍匐在河岸，没有想象中的童话尖顶，而是由大块大块未经雕琢的灰色花岗岩垒成，敦实、粗粝，像一头沉睡了几百年的巨兽。它的影子长长地投在草地上，那种沉默的重量感，瞬间让你从北欧设计精致的现代都市中抽离，一脚踏进了时间的隧道。
穿过护城河上的石桥，触摸那扇厚重木门上冰凉的铁饰，吱呀一声推门进入中心庭院。声音在这里变得奇妙——外面的世界车流人声瞬间被高墙隔绝，只剩下你自己的脚步声在石地上清脆地回响，偶尔夹杂着不知从哪个塔楼窗口传来的、若有似无的海鸥鸣叫。庭院里风很大，呼呼地穿过拱廊，仿佛在诉说无数个同样凛冽的冬日。这里没有过分精致的修复痕迹，墙面的斑驳、石阶的磨损都原样保留着，你能真切地感受到，这不是一个精心打扮的舞台，而是一个真正被时光反复捶打过的空间。
走进城堡内部，光线陡然变暗，空气里弥漫着一股旧木头、陈年织物和一丝丝极淡的、属于地下室的潮凉气味。巨大的骑士厅里，高高的拱顶下空空荡荡，但当你仰头，仿佛能听到幽灵般的刀剑碰撞声和宴会上的喧嚣。与之形成鲜明对比的，是那些复原的文艺复兴时期房间，彩绘的天花板、巨大的壁炉，甚至一张铺着厚重织物的婚床，都在努力重现着某个短暂辉煌时代的体温。最触动我的，是那些深藏在地下的牢房。低矮、狭小、没有窗户，石壁上只有囚徒刻下的绝望痕迹。指尖划过那些刻痕，一股寒意顺着脊柱爬上来。这座城堡的魅力，恰恰在于这种极端的并置：辉煌与苦难，王权与囚禁，庆典与孤独，全部被压缩在同一片石头围墙里。
对于图尔库人来说，这座城堡不仅仅是游客地图上的一个图标。它是城市地理与精神的坐标原点。孩子们在这里上历史课，新人在附近的教堂办完仪式会来庭院拍照，夏天的露天剧场会上演戏剧，圣诞前夕，整个城堡会被温暖的灯光点亮，变成一座巨大的“圣诞日历”。它早已从权力的堡垒，演变成了市民记忆与公共生活的一部分，冰冷石头里，渐渐生出了属于当代人的温度。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次走近图尔库城堡，是在一个典型的芬兰夏日傍晚，天空是那种永远不肯彻底暗下去的、温柔的灰蓝色。奥拉河的水汽混着青草与古老石墙的气息扑面而来，眼前那座庞然大物安静地匍匐在河岸，没有想象中的童话尖顶，而是由大块大块未经雕琢的灰色花岗岩垒成，敦实、粗粝，像一头沉睡了几百年的巨兽。它的影子长长地投在草地上，那种沉默的重量感，瞬间让你从北欧设计精致的现代都市中抽离，一脚踏进了时间的隧道。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过护城河上的石桥，触摸那扇厚重木门上冰凉的铁饰，吱呀一声推门进入中心庭院。声音在这里变得奇妙——外面的世界车流人声瞬间被高墙隔绝，只剩下你自己的脚步声在石地上清脆地回响，偶尔夹杂着不知从哪个塔楼窗口传来的、若有似无的海鸥鸣叫。庭院里风很大，呼呼地穿过拱廊，仿佛在诉说无数个同样凛冽的冬日。这里没有过分精致的修复痕迹，墙面的斑驳、石阶的磨损都原样保留着，你能真切地感受到，这不是一个精心打扮的舞台，而是一个真正被时光反复捶打过的空间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进城堡内部，光线陡然变暗，空气里弥漫着一股旧木头、陈年织物和一丝丝极淡的、属于地下室的潮凉气味。巨大的骑士厅里，高高的拱顶下空空荡荡，但当你仰头，仿佛能听到幽灵般的刀剑碰撞声和宴会上的喧嚣。与之形成鲜明对比的，是那些复原的文艺复兴时期房间，彩绘的天花板、巨大的壁炉，甚至一张铺着厚重织物的婚床，都在努力重现着某个短暂辉煌时代的体温。最触动我的，是那些深藏在地下的牢房。低矮、狭小、没有窗户，石壁上只有囚徒刻下的绝望痕迹。指尖划过那些刻痕，一股寒意顺着脊柱爬上来。这座城堡的魅力，恰恰在于这种极端的并置：辉煌与苦难，王权与囚禁，庆典与孤独，全部被压缩在同一片石头围墙里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`对于图尔库人来说，这座城堡不仅仅是游客地图上的一个图标。它是城市地理与精神的坐标原点。孩子们在这里上历史课，新人在附近的教堂办完仪式会来庭院拍照，夏天的露天剧场会上演戏剧，圣诞前夕，整个城堡会被温暖的灯光点亮，变成一座巨大的“圣诞日历”。它早已从权力的堡垒，演变成了市民记忆与公共生活的一部分，冰冷石头里，渐渐生出了属于当代人的温度。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`图尔库城堡`} />
                <InfoRow label="英文名称" value={`Turku Castle`} />
                <InfoRow label="正式名称" value={`Turku Castle (Turun linna)`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`图尔库`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`芬兰现存最宏伟的中世纪城堡，也是整个国家历史最悠久的建筑之一，见证了瑞典王国统治、芬兰作为大公国以及最终独立的近七百年风云。`} />
                <InfoRow label="建筑特色" value={`一座由灰色花岗岩砌成的庞大 fortress，经历多次扩建，融合了从中世纪军事堡垒到文艺复兴宫殿的多种建筑形态，中心庭院被高低错落的翼楼和塔楼环绕。`} />
                <InfoRow label="建筑风格" value={`以北欧中世纪防御建筑为基底，后期扩建部分明显受到文艺复兴风格影响，整体呈现朴素、坚固而实用的斯堪的纳维亚特色。`} />
                <InfoRow label="文化价值" value={`它不仅是芬兰历史的“石制编年史”，更是一个承载了王室荣耀、战争伤痛、监狱黑暗与城市复兴记忆的复杂文化符号，是理解芬兰民族身份形成的关键地点。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`博物馆部分：周二至周日 10:00-18:00，周一闭馆（7月全天开放）。城堡庭院及部分外区域全年白天开放。请注意，冬季（通常10月至次年4月）开放时间可能缩短，部分修复中的区域会临时关闭。特殊节假日（如仲夏节、圣诞节）开放时间变动较大，出行前务必在官网核实。`} />
              <InfoRow label="门票价格" value={`成人票：12欧元。优惠票（学生、65岁以上长者、团体）：7欧元。18岁以下儿童免费。家庭票（2大+2-4小）：28欧元。门票包含永久展览和临时特展。每年有数天“博物馆免费开放日”，详情需查询官网公告。`} />
              <InfoRow label="地址" value={`Linnankatu 80, 20100 Turku, Finland`} />
              <InfoRow label="交通方式" value={`从赫尔辛基-万塔机场出发：最便捷的方式是搭乘芬兰航空或VR国铁的接驳巴士至图尔库市中心巴士总站，车程约2小时，班次频繁。从图尔库市中心（如市场广场）前往城堡：步行约15-20分钟，沿着奥拉河岸西行，风景极佳；亦可乘坐公交车（线路1、61等）在“Linnankatu”站下车，再步行3分钟。从图尔库港口（往返斯德哥尔摩）或图尔库机场打车至城堡均在10-15分钟内可达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从1280年左右说起。那时，芬兰这片土地还是瑞典王国不断向东扩张的前沿。瑞典国王觉得，需要在奥拉河口这个战略要地，建立一个坚固的据点，来巩固统治、征收税款，并威慑潜在的敌人。于是，最初的城堡诞生了，它可能只是一个简单的、由木头和土石构筑的堡垒，驻扎着国王的士兵和行政官。在那个维京余韵尚未散尽、基督教刚刚扎根的时代，这座堡垒就是瑞典王权在这片“东方土地”上最直接的象征，是文明与秩序（至少是瑞典版本的）试图在此立足的宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了14、15世纪，随着瑞典王国实力的增强和与汉萨同盟贸易的繁荣，这座城堡进入了第一次“青春期”。它被不断加固和扩建，木结构逐渐被更永久的石材取代。城堡的中心塔楼被加高，防御工事变得更复杂，从一个简陋的前哨站，变成了一座功能齐全的中世纪城堡。它成了瑞典派驻芬兰的总督官邸，成了整个芬兰地区的行政和军事中心。你可以想象，穿着锁子甲的骑士在这里进进出出，仓库里堆满了来自波罗的海对岸的货物，小教堂里回荡着拉丁文的祷词。城堡的每一次石头堆砌，都对应着瑞典对芬兰控制力的一次加强。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的转型发生在16世纪，一位传奇人物登场：瑞典国王古斯塔夫·瓦萨的儿子，约翰公爵。1562年，约翰公爵与他钟爱的波兰公主凯瑟琳·雅盖隆在这座城堡举行了盛大婚礼。为了迎接这位新娘，也为了彰显自己的权势（他后来成为了约翰三世国王），约翰对城堡进行了大规模的文艺复兴式改造。冰冷阴暗的军事堡垒，第一次被注入了宫廷生活的奢华与艺术气息。华丽的大厅被建造起来，墙壁上绘上彩绘，窗户扩大以引入更多光线，舒适的私人套房取代了部分军营。城堡的“文艺复兴翼楼”就是在这一时期诞生的。这里一度笙歌燕舞，成为北欧重要的文化政治沙龙。然而，这段辉煌如流星般短暂。随着约翰三世去世，王国中心北移，城堡逐渐失去了其宫廷地位。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随之而来的是漫长的、作为战略要塞的动荡岁月。17世纪的大北方战争期间，城堡遭受了严重炮击和破坏。更戏剧性的是，在漫长的和平年代里，它找到了一个令人唏嘘的新用途：监狱。从18世纪到19世纪，城堡阴暗潮湿的地牢和部分房间被改造成关押犯人的牢房。曾经的宴会厅回荡的不再是音乐，而是镣铐的声响；曾经的总督套房，可能关押着等待审判的囚徒。这座目睹过王室婚礼的城堡，开始承载最底层的痛苦与绝望。直到1881年，一场灾难性的大火席卷了城堡，几乎将其化为废墟，这段作为监狱的黑暗篇章才被迫结束。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`大火之后，城堡沦为一片令人心碎的废墟，在奥拉河畔沉默了近半个世纪。转机出现在20世纪30年代，独立的芬兰开始认真审视自己的历史遗产。一项雄心勃勃的修复工程启动了，目标不是将它恢复到某个特定时期的样貌，而是将它作为一个跨越七个世纪的“历史层积岩”整体保存和展示。工匠们小心翼翼地清理火灾痕迹，加固结构，并基于严谨的历史研究，复原了部分重要房间。修复工程本身也经历了二战的中断，直到1961年，城堡才作为历史博物馆正式向公众开放。今天的我们能看到的中世纪大厅、文艺复兴套房、阴森地牢以及战争伤疤，都是这场漫长、谨慎且充满敬意的修复工作的结果。它不再是一座“完美”的城堡，而是一部用石头写就的、诚实而复杂的芬兰史书。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的游览应该从午后开始，避开上午可能的学校团体游客。建议预留至少3-4小时进行深度探索。整体节奏宜先外后内，先宏观后微观。先从城堡外围的护城河与河岸步道开始，感受其宏伟的体量和与城市、河流的关系。然后进入城堡庭院，适应其氛围。室内参观应按照历史脉络，从中世纪部分开始，逐步走向文艺复兴翼楼，最后探访地下监狱，形成从“建立”到“辉煌”再到“沉沦”的情感曲线。这样的安排能让你清晰地感知时间在这座建筑身上流淌过的痕迹，体验也更富层次感。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部分楼梯非常陡峭且狭窄，务必穿着舒适防滑的鞋子，参观时注意脚下安全。
强烈建议租借语音导览（提供多国语言），里面的历史故事和细节解说能让眼前的石头真正“开口说话”。
夏季是旅游旺季，如果想获得更宁静的体验，尽量选择工作日午后或临近闭馆时间前往。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从南侧的奥拉河岸步道开始，远眺城堡在水中的倒影，感受它作为河海要塞的原始地理意义。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过石桥跨越干涸的护城河，亲手推开那扇厚重的橡木大门，正式踏入中心庭院，听风声在四面高墙间呼啸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先钻进最古老的中世纪部分，在低矮的石室和陡峭的螺旋楼梯间，想象13世纪士兵在此戍守的森严与孤寂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着历史的脉络走进文艺复兴翼楼，让眼睛在约翰公爵大厅彩绘的天花板和巨大的石砌壁炉上多停留一会儿，捕捉那短暂的宫廷华彩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过那些复原的16-17世纪生活房间，从华丽的婚床到精致的餐具，细节里藏着当时北欧贵族的生活品位。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着指示牌下到阴冷的地下室，蹲下来仔细辨认那些由数百年前囚徒刻在墙上的十字架、名字和日期。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`爬上西南角的塔楼（如果开放），尽管台阶狭窄，但登顶后整个图尔库老城和奥拉河蜿蜒入海的景致是对所有攀登的最好奖赏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到庭院的长椅上坐下，看着夕阳把花岗岩墙面染成金黄，慢慢消化刚才穿越的七百年厚重信息。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河东南角倒影拍摄点`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗无风的清晨或日落前一小时，蹲低角度，利用平静的水面拍摄城堡与天空的完美对称倒影，构图时纳入一些河岸绿植作为前景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中心庭院拱廊光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射入庭院时，站在一侧拱廊下，拍摄光线将拱门和石柱拉出长长影子的纵深感画面，等待一个游客走入光柱的瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`骑士厅高拱顶仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`使用超广角镜头，站在大厅中央垂直向上拍摄，将那些巨大的石拱和粗犷的木梁结构全部收入画面，展现中世纪空间的震撼尺度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`文艺复兴套房彩绘窗旁`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，阳光透过复原的菱形玻璃窗，在古老的木地板上投下斑斓光影，可以拍摄窗格特写或利用光影作为人物肖像的天然背景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`西南塔楼顶层俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`使用中焦段镜头，从塔楼垛口向外拍摄，将近处城堡的红色瓦顶、中景的奥拉河桥梁与远景的图尔库大教堂塔楼一同构图，形成历史与城市的天际线全景。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部光照普遍较暗，建议使用大光圈镜头或提高ISO，尽量依靠自然光拍摄，避免使用闪光灯（通常也禁止使用），以保持历史氛围的真实感。`}</li>
                <li>• {`拍摄地牢等敏感区域时请保持肃穆，避免摆拍搞怪姿势，这是对历史苦难的基本尊重。`}</li>
                <li>• {`无人机飞行在城堡上空受到严格管制，未经许可请勿起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河岸历史感公寓`}</h4>
                  <p className="text-sm text-blue-800">{`住在奥拉河对岸老仓库改造的精品公寓里，超大的落地窗正对城堡全景，夜晚当游客散尽，你独享一盏灯与沉默的巨兽隔河对望。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`市中心设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择图尔库市中心由老银行建筑改造的设计酒店，体验北欧极致简约风格，步行至城堡仅十五分钟，且周边餐厅、咖啡馆云集，夜生活便捷。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`静谧家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`入住城堡附近住宅区由教授家庭经营的温馨民宿，房间布满藏书和芬兰老物件，早晨能吃到女主人自制的越橘酱配薄饼，像本地人一样生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`庄园酒店逃离`}</h4>
                  <p className="text-sm text-purple-800">{`若想极致放松，可以驱车半小时入住周边乡村的百年木质庄园酒店，在桑拿房里蒸得通红后跳进湖中，彻底洗去历史带来的沉重感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6月至8月）是图尔库的旺季，住宿非常紧俏，务必提前数月预订，尤其是周末。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`可以考虑购买“图尔库城市卡”，不仅包含城堡门票，还能无限次乘坐公共交通，对于计划多日深度探索的旅人非常划算。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`图尔库治安极好，城堡周边区域即使在夜晚也非常安全，可以放心散步。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开图尔库城堡好几天，手指触碰那些冰冷石壁的触感，和地牢里那种混合着潮湿与绝望的气息，依然会在某个不经意的时刻闪回。它给我的震撼，不同于那些金碧辉煌、美得令人窒息的宫殿。它是一种沉甸甸的、近乎粗粝的真实。这里没有试图掩饰任何东西——王室的虚荣、战争的创伤、制度的残酷与时间的无情，都一层层码放在那里，像一本拒绝被美化的历史教科书。它让你明白，历史不仅是冠冕和庆典，更是镣铐、火光和在石头上刻下的一笔一划的求生欲望。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个我们习惯于快速消费、热衷打卡完美照片的时代，图尔库城堡像一位沉默而严肃的历史法官。它不提供轻松的愉悦，却给予你深刻的清醒。它告诉我们，一个民族的身份是如何在漫长的征服、适应、苦难与复兴中一点点锻造出来的。站在塔楼上，看着现代化的图尔库城在眼前铺开，你会真切地感到，今天这份宁静、自由、充满设计感的北欧生活，其根基就深埋在这座灰色巨石的复杂记忆之中。所以，如果你期待的不仅仅是一张明信片风景，而是一次能够触摸时间质地、与真实历史对话的旅行，那么，请一定来图尔库城堡。让这里的风声、石头的温度和你自己的脚步声，带你完成一场穿越七百年的、沉重而必要的时光跋涉。这趟旅程结束后，你眼中的芬兰，乃至整个北欧，将不再只是简约设计与自然风光的单薄印象，而会拥有历史的深度与重量。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/olavinlinna-savonlinna" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    萨
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">萨翁林纳奥拉维城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Olavinlinna</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/porvoo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    波
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">波尔沃古镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Porvoo Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lenzkirch" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伦茨基尔希城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lenzkirch Castle</p>
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
