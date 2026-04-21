import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蒂沃利千泉宫 Villa d\'Este | 文艺复兴水剧场，百泉交响诗 - 最佳欧洲景点',
  description: '穿过那道看似平平无奇的入口门廊，整个世界瞬间被切换了频道。闷热的意大利夏日空气，在这里被撕开一道清凉的、带着水雾的口子。第一眼，并不是某个具体的喷泉，而是一片绿色的、向下层层跌落的剧场，耳边是轰然而至的白噪音——那不是一种声音，是上百种声音的混响：高处瀑布沉厚的轰鸣，中层水柱有力的喷射，低处溪流潺潺...',
}

export default function VillaDEstePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '拉齐奥大区蒂沃利镇', href: '/destinations/italy' },
            { label: '蒂沃利千泉宫', href: '/attractions/villa-d-este' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蒂沃利千泉宫・Villa d'Este・意大利・拉齐奥大区蒂沃利镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过那道看似平平无奇的入口门廊，整个世界瞬间被切换了频道。闷热的意大利夏日空气，在这里被撕开一道清凉的、带着水雾的口子。第一眼，并不是某个具体的喷泉，而是一片绿色的、向下层层跌落的剧场，耳边是轰然而至的白噪音——那不是一种声音，是上百种声音的混响：高处瀑布沉厚的轰鸣，中层水柱有力的喷射，低处溪流潺潺的絮语，还有水滴溅在千年石盘上那清亮细碎的叮咚。这声音像一层有质感的膜，把你从外面的世界温柔地包裹进来。
你沿着主轴线往下走，湿气附着在皮肤上，竟有点黏腻的甜，那是青苔、水生植物和古老石料被水浸润后散发的混合气息。阳光穿过高高的柏树和橡树，在水汽弥漫的空中变成一道道清晰可见的光柱，光斑在爬满藤蔓的墙壁和湿润的阶梯上跳跃。你会看到当地人——不那么多，但总有那么几个——他们不像游客一样急着打卡，而是找个荫凉的石凳坐下，一本书，或者干脆就闭着眼，听着这永恒的“水之交响曲”，一坐就是一下午。对他们而言，这里不是景点，是一座庞大的、会呼吸的、免费的疗愈空间。
最打动人心的，是那种极致的矛盾与和谐。文艺复兴的精英们用最精确的几何学和工程学，试图完全掌控自然、重塑天堂。笔直的轴线、严格对称的植坛、被水力机械精心操控的喷泉表演，无一不在炫耀着人类的理性与力量。但四百年过去了，自然悄悄拿回了主导权。树根拱起了平整的石板，水流在雕塑上留下了深色的、无法预测的痕迹，青苔为每一尊大理石神像披上了柔软的丝绒外衣。人工的宏伟与时间的侵蚀在这里达成了最美的共谋，让这座花园脱离了单纯的“建筑”范畴，变成了一首关于时间、权力与美的，仍在继续书写的动态史诗。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那道看似平平无奇的入口门廊，整个世界瞬间被切换了频道。闷热的意大利夏日空气，在这里被撕开一道清凉的、带着水雾的口子。第一眼，并不是某个具体的喷泉，而是一片绿色的、向下层层跌落的剧场，耳边是轰然而至的白噪音——那不是一种声音，是上百种声音的混响：高处瀑布沉厚的轰鸣，中层水柱有力的喷射，低处溪流潺潺的絮语，还有水滴溅在千年石盘上那清亮细碎的叮咚。这声音像一层有质感的膜，把你从外面的世界温柔地包裹进来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你沿着主轴线往下走，湿气附着在皮肤上，竟有点黏腻的甜，那是青苔、水生植物和古老石料被水浸润后散发的混合气息。阳光穿过高高的柏树和橡树，在水汽弥漫的空中变成一道道清晰可见的光柱，光斑在爬满藤蔓的墙壁和湿润的阶梯上跳跃。你会看到当地人——不那么多，但总有那么几个——他们不像游客一样急着打卡，而是找个荫凉的石凳坐下，一本书，或者干脆就闭着眼，听着这永恒的“水之交响曲”，一坐就是一下午。对他们而言，这里不是景点，是一座庞大的、会呼吸的、免费的疗愈空间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种极致的矛盾与和谐。文艺复兴的精英们用最精确的几何学和工程学，试图完全掌控自然、重塑天堂。笔直的轴线、严格对称的植坛、被水力机械精心操控的喷泉表演，无一不在炫耀着人类的理性与力量。但四百年过去了，自然悄悄拿回了主导权。树根拱起了平整的石板，水流在雕塑上留下了深色的、无法预测的痕迹，青苔为每一尊大理石神像披上了柔软的丝绒外衣。人工的宏伟与时间的侵蚀在这里达成了最美的共谋，让这座花园脱离了单纯的“建筑”范畴，变成了一首关于时间、权力与美的，仍在继续书写的动态史诗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蒂沃利千泉宫`} />
                <InfoRow label="英文名称" value={`Villa d'Este`} />
                <InfoRow label="正式名称" value={`Villa d'Este`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`拉齐奥大区蒂沃利镇`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`被联合国教科文组织列为世界遗产的16世纪花园杰作，代表了文艺复兴时期将自然、艺术与科技融合的巅峰理想。`} />
                <InfoRow label="建筑特色" value={`依山而建的层叠式花园，以极其复杂精密的水利系统驱动数百个雕塑喷泉、水池与水剧场，堪称一部用石头与水谱写的立体交响乐。`} />
                <InfoRow label="建筑风格" value={`文艺复兴风格为主，融合了古罗马灵感与手法主义（Mannerism）的戏剧性表现，强调透视、轴线、对称与对自然元素的绝对控制。`} />
                <InfoRow label="文化价值" value={`开启了欧洲园林设计以水为灵魂、以工程缔造诗意的先河，是巴洛克乃至后世众多皇家花园的灵感源泉。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`花园与宫殿：周二至周日，开放时间随季节变化极大。通常夏季（4月至10月）为8:30-19:45（最后入场18:45）；冬季（11月至3月）为8:30-17:00（最后入场16:00）。每周一、1月1日、5月1日、12月25日闭馆。具体时间每月都可能微调，强烈建议出行前在其官网确认。部分喷泉（如管风琴喷泉）仅在特定时段（通常为上午10:30起，每小时一次）进行“音乐”表演，这也是游览高潮。`} />
              <InfoRow label="门票价格" value={`全价票：13欧元。欧盟18-25岁公民优惠票：7欧元。18岁以下及欧盟特定身份人士（如艺术系学生）免费。每月第一个周日通常免费开放（但人流量巨大）。门票可在官网提前购买（强烈推荐，尤其在夏季和免费周日），也可在现场购买，但旺季排队时间长。`} />
              <InfoRow label="地址" value={`Villa d‘Este， Piazza Trento， 5， 00019 Tivoli RM， Italy`} />
              <InfoRow label="交通方式" value={`从罗马出发最为方便。在罗马特米尼火车站搭乘前往蒂沃利城的区域火车（Roma-Termini → Tivoli），车程约50分钟至1小时，班次频繁（约每小时一班）。抵达蒂沃利火车站后，出站沿标志步行约15-20分钟（上坡路）即可到达千泉宫入口。也可以从火车站门口乘坐当地的小型循环巴士（如CAT线），在“Piazza Garibaldi”或“Largo Nazioni Unite”站下车，再步行几分钟即到。自驾可将车停放在蒂沃利镇外围的收费停车场，然后步行进入历史中心区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从一位失意权贵讲起。1550年，红衣主教伊波利托二世·德斯特被任命为蒂沃利总督。这位老兄来头不小，是费拉拉公爵的儿子，母亲更是出自传奇的波吉亚家族。他本有着问鼎教皇宝座的野心，却在激烈的权力角逐中败下阵来。被“发配”到蒂沃利这个罗马郊外的小山城，对他而言无异于一种流放。但天才的郁闷，往往能催生最疯狂的艺术梦想。他看着蒂沃利崎岖的山坡，想起了古罗马皇帝哈德良那早已倾颓的别墅废墟（就在附近），一个念头如闪电般击中了他：他要在这里，建造一个让罗马教廷都为之咋舌的“水之梦”，来证明自己的价值，慰藉未竟的野心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`他请来了当时顶级的考古学家、建筑师兼画家皮罗·利戈里奥。利戈里奥是个妙人，他深谙古罗马水利工程，目光毒辣地盯上了那条古老的阿涅内河渠。他们没有像常人那样把宫殿建在平坦处，而是大胆地选择了陡峭的山坡。利戈里奥的设计如同一场豪赌：他利用惊人的35米自然落差，从远处的河流引水，不依赖任何水泵，仅凭重力就让水穿越地下迷宫般的管道，最终在各个平台喷涌而出，形成瀑布、喷泉和水池。这不仅仅是园艺，这是那个时代的“高科技”水利工程，其复杂程度堪称16世纪的迪士尼幻想工程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的二十年，这里变成了一个永不停歇的巨大工地。工匠们凿山开路，雕刻家们日夜赶工，从罗马运来无数古代雕塑残件进行再创作。伊波利托二世几乎倾尽所有，甚至不惜挪用教区税款来喂养这个日益膨胀的梦想。百泉路上一排排栩栩如生的小猫头鹰、老鹰、船只喷泉；象征着德斯特家族纹章（鹰）与教宗权柄（龙）的宏伟龙喷泉；还有那巧夺天工、利用水压驱动铜管真正奏出音乐的“管风琴喷泉”……每一处都是对来访者视觉与听觉的炫技式宣言：看，即便我不是教皇，我依然能创造神迹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，就像许多伟大的私人梦想一样，千泉宫在创始人去世后迅速陷入了沉寂。德斯特家族的后人无力维持这个“吞金兽”，宏伟的水道系统因缺乏维护而逐渐淤塞，花园一度荒芜。直到十九世纪浪漫主义时期，欧洲的诗人、画家和音乐家们（如李斯特曾长期居住于此并创作）重新“发现”了这座半沉睡的花园。他们着迷于这种人工奇迹与野生自然交织的颓废之美，将其推崇为艺术灵感的圣地。二十世纪，意大利政府接手并展开了漫长艰巨的修复，让大部分喷泉重焕生机。今天你听到的轰鸣与歌唱，是穿越了四个多世纪，一个失意主教的雄心与无数工匠智慧的回响。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的千泉宫之旅，是一场“逆流而上”的朝圣。强烈建议在开园后半小时内抵达（比如夏季9点前），这时晨光柔和，游客稀少，你能独享喷泉苏醒时最纯净的声音。整体游览需要至少4-5小时，节奏宜慢不宜快。我们的路线将从底层开始，逐步向上探索，这样能更好地体会水利系统从汇聚到源头的过程，并且在体力消耗最大的上坡路段安排在游览前期。最后，在下午光线斜射、色彩最为温暖饱满时，你会抵达顶层的宫殿和平台，在那里回望整个花园，成就感和震撼将达到顶点。记得留出至少一小时，什么也不做，只是静静地坐在某个喷泉边，让感官完全沉浸。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避开周末和意大利公共假期，周二到周四是相对理想的选择。园内台阶多且湿滑，务必穿一双绝对防滑、舒适的鞋子。喷泉表演时间可能临时调整，入园时务必在信息台再次确认当日时间表。花园内没有正式餐厅，只有一个小咖啡馆，建议在蒂沃利镇上饱餐一顿后再入园，或自带简单零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从底层入口进入后，先别急着上宫殿，直接右转沿着“百泉路”开始漫步，让两旁数百个造型各异的小喷泉用它们淅淅沥沥的合唱为你洗尘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在百泉路尽头的开阔地，寻找那组精美的“猫头鹰与鸟儿喷泉”，想象当年机械启动时，猫头鹰现身便会令群鸟鸣叫戛然而止的巧妙机关。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着中央轴线的大阶梯向上，在第一个大平台震撼于“龙喷泉”的磅礴气势，四只猛兽托起的家族纹章喷射出数米高的水柱，这是花园权力的第一个宣言。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续向上，在“管风琴喷泉”前预留至少半小时，等待整点或半点那激动人心的“演奏”，看水流如何驱动古老的铜管发出类似管风琴的庄严乐音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`绕过管风琴喷泉后方，探索相对安静的“罗梅塔喷泉”区，这里模仿古罗马遗迹，岩石嶙峋，水流从洞穴中奔涌而出，充满野趣和神秘感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀登至最顶层的宫殿建筑内部，不要错过那些保存完好的文艺复兴壁画，然后走到面向花园的露台上，将整个层叠花园、远山和蒂沃利老城尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在日落前返回中层的“椭圆形喷泉”或“金星喷泉”旁，找一个长椅坐下，看金色的阳光如何为每一个跳动的水珠镶上钻石般的光边。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`百泉路拱门长廊`}</h4>
                  <p className="text-sm text-gray-700">{`下午三到五点，阳光斜射穿过拱门，在绵延不断的喷泉水幕上形成戏剧性的光影走廊，蹲低用广角镜头能拍出极强的纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`管风琴喷泉正面全景`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至正午，阳光能照亮喷泉正面的雕塑细节，使用中焦段，等待喷泉“奏乐”时水流最饱满的瞬间，捕捉水雾中的彩虹。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从龙喷泉平台仰拍上层花园与宫殿`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，光线柔和且呈金色时，以龙喷泉激荡的水池为前景，将上层宏伟的阶梯、柏树和宫殿作为背景，构图饱满而富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`顶层宫殿露台俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，但晴日傍晚最佳，用长焦镜头压缩空间，聚焦花园中某个具体的喷泉（如椭圆形喷泉）与远处地平线上的山峦，形成微观与宏观的对话。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`喷泉水雾极大，镜头前务必加装UV镜或保护镜，并随时准备软布擦拭。拍摄动态水流时，尝试不同的快门速度：高速快门（如1/1000秒）能凝结水珠的瞬间，慢速快门（如1/15秒或更低）则能让水流如丝绸般柔滑，建议携带小型三脚架。尊重其他游客和花园规定，使用无人机通常是被严格禁止的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`蒂沃利火车站附近由家庭经营的温馨民宿，主人会热情地为你手绘小镇美食地图，早晨在开满天竺葵的小阳台上就能听到远处隐约的泉水声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`住在蒂沃利老城中心一栋16世纪的贵族宅邸改造的精品酒店里，石砌拱顶、古老的壁画与现代设计巧妙融合，推开木窗就是蜿蜒的中世纪街巷。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`选择坐落在俯瞰整个阿涅内河谷悬崖上的五星级酒店，拥有无边泳池和米其林推荐餐厅，在房间的私人露台上就能将千泉宫的建筑轮廓和远山落日一并收藏。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特体验`}</h4>
                  <p className="text-sm text-purple-800">{`入住由古老修道院静谧回廊改造的客房，夜晚当游客散尽，你能在绝对的宁静中，听到花园方向传来的、仿佛永远不会停歇的隐隐水流声，伴你入眠。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是旺季，住宿需提前数月预订，价格也最高。春秋两季气候宜人，是体验和住宿性价比最佳的时段。虽然从罗马当日往返完全可行，但在蒂沃利住上一晚，让你有机会在清晨开园前或傍晚闭园后，在老城寂静的街道上散步，感受截然不同的、属于本地人的生活节奏。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开千泉宫很久之后，那澎湃的、无处不在的水声，依然会在某些安静的瞬间，回响在你的耳蜗深处。它不像看过一幅名画或一座教堂那样，留下的是清晰的视觉记忆，而更像一种对身体感知的长期殖民。你会突然明白，这里最伟大的展品不是任何一尊雕塑，也不是哪一处喷泉，而是“系统”本身——是那个将重力、压力、流体力学的冰冷逻辑，最终转化为视觉的壮丽与听觉的诗意的、精妙绝伦的系统。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求即时快感和碎片体验的时代，千泉宫像一座逆向的纪念碑。它要求你慢下来，用整个下午去“听”一座花园，去追踪一条水流的旅程，去理解一个四百年前的失意者，如何将他的不甘与才华，浇筑进石头与水永恒的循环里。它告诉你，美可以不是静止的标本，而是流动的、轰鸣的、充满生命力的过程。人类用极致的理性去创造感性的奇迹，而时间又用温柔的侵蚀为这份理性披上了感性的外衣，这种永恒的对话，才是它真正不朽的魅力。如果你厌倦了在博物馆里隔着玻璃凝视过去，那么请来这里，站在飞溅的水雾中，感受一段依然在跳动、在歌唱、在阳光下闪闪发光的文艺复兴之心。这不仅仅是一次游览，这是一次关于永恒与瞬间、控制与自然、人类野心与时间力量的深度沉思。它值得你专程为它，来一趟意大利。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/alberobello-trulli" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔贝罗贝洛圆顶石屋</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alberobello</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spoleto-historic-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯波莱托古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spoleto</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alba-piedmont-italy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔巴</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alba</p>
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
