import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '库尔迪加 Kuldīga｜欧洲最宽瀑布与童话砖桥老城 - 最佳欧洲景点',
  description: '相信我，库尔迪加给你的第一印象绝对不是“哇”，而是一声长长的、放松的叹息。车子刚转进老城边缘，那种喧嚣世界被突然按下了静音键的感觉就扑面而来。最先捕捉到你感官的，是一种低沉而持续的白噪音——那不是别的，正是文塔河瀑布的水声，它像一层柔软的声学背景，覆盖了整个小镇。空气里有一股好闻的、清冽的湿气，混合...',
}

export default function KuldigaOldTownWaterfallPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '库尔迪加', href: '/attractions/kuldiga-old-town-waterfall' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`库尔迪加・Kuldīga・拉脱维亚・库尔迪加`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`相信我，库尔迪加给你的第一印象绝对不是“哇”，而是一声长长的、放松的叹息。车子刚转进老城边缘，那种喧嚣世界被突然按下了静音键的感觉就扑面而来。最先捕捉到你感官的，是一种低沉而持续的白噪音——那不是别的，正是文塔河瀑布的水声，它像一层柔软的声学背景，覆盖了整个小镇。空气里有一股好闻的、清冽的湿气，混合着河边老椴树的花香和从百年面包房里飘出来的、带着点焦糖味的甜香。
然后，色彩才缓缓映入眼帘。这里没有刺目的鲜亮，只有一层被时光温柔抚摸过的调色盘：鹅卵石街道是深灰色的，被无数双脚磨得发亮；两旁的小屋穿着淡鹅黄、薄荷绿、浅鲑鱼粉的“外衣”，屋顶是浓重的砖红或深褐；木窗框漆成白色，窗台上无一例外地摆着天竺葵或矮牵牛，开得热烈又安静。你很快会发现，这里的主角不是游客，而是本地人。老奶奶们提着藤编篮子从市场慢悠悠地走回家，自行车叮铃铃地从你身边滑过，桥头长椅上，老爷子们可能一下午都在那里，看着不变的河水与流云。
而那个传说中的“主角”——文塔瀑布，就以一种近乎谦逊的姿态躺在镇子中心。它不像别的瀑布那样追求落差与咆哮，而是以249米的宽度静静铺开，如同一匹巨大的、泛起泡沫的浅金色绸缎，平缓地从一层层玄武岩上滑落。它的美不在震撼，而在一种辽阔的、治愈的平静。你可以就坐在岸边的石头上，看水雾在阳光下画出小小的彩虹，看鲑鱼在逆流中跳跃，时间在这里失去了它紧迫的刻度。库尔迪加最打动人的，正是这种将壮丽自然与娴静人文生活无缝缝合在一起的能力，它不像一个景点，更像一个你偶然闯入的、运转良好的旧梦。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`相信我，库尔迪加给你的第一印象绝对不是“哇”，而是一声长长的、放松的叹息。车子刚转进老城边缘，那种喧嚣世界被突然按下了静音键的感觉就扑面而来。最先捕捉到你感官的，是一种低沉而持续的白噪音——那不是别的，正是文塔河瀑布的水声，它像一层柔软的声学背景，覆盖了整个小镇。空气里有一股好闻的、清冽的湿气，混合着河边老椴树的花香和从百年面包房里飘出来的、带着点焦糖味的甜香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，色彩才缓缓映入眼帘。这里没有刺目的鲜亮，只有一层被时光温柔抚摸过的调色盘：鹅卵石街道是深灰色的，被无数双脚磨得发亮；两旁的小屋穿着淡鹅黄、薄荷绿、浅鲑鱼粉的“外衣”，屋顶是浓重的砖红或深褐；木窗框漆成白色，窗台上无一例外地摆着天竺葵或矮牵牛，开得热烈又安静。你很快会发现，这里的主角不是游客，而是本地人。老奶奶们提着藤编篮子从市场慢悠悠地走回家，自行车叮铃铃地从你身边滑过，桥头长椅上，老爷子们可能一下午都在那里，看着不变的河水与流云。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而那个传说中的“主角”——文塔瀑布，就以一种近乎谦逊的姿态躺在镇子中心。它不像别的瀑布那样追求落差与咆哮，而是以249米的宽度静静铺开，如同一匹巨大的、泛起泡沫的浅金色绸缎，平缓地从一层层玄武岩上滑落。它的美不在震撼，而在一种辽阔的、治愈的平静。你可以就坐在岸边的石头上，看水雾在阳光下画出小小的彩虹，看鲑鱼在逆流中跳跃，时间在这里失去了它紧迫的刻度。库尔迪加最打动人的，正是这种将壮丽自然与娴静人文生活无缝缝合在一起的能力，它不像一个景点，更像一个你偶然闯入的、运转良好的旧梦。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`库尔迪加`} />
                <InfoRow label="英文名称" value={`Kuldīga`} />
                <InfoRow label="正式名称" value={`Kuldīga`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`库尔迪加`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是汉萨同盟的重要成员，利沃尼亚地区繁荣的商业与文化中心，被誉为“库尔泽梅的明珠”。`} />
                <InfoRow label="建筑特色" value={`拥有欧洲最宽的砖砌拱桥之一，以及密集保存完好的18-19世纪木质与砖石结构房屋，色彩柔和，格局紧凑。`} />
                <InfoRow label="建筑风格" value={`以北欧巴洛克与古典主义风格为主，混合了本地传统的木建筑技艺，形成独特的波罗的海小镇风貌。`} />
                <InfoRow label="文化价值" value={`是一个活生生的露天博物馆，完美展现了拉脱维亚在小规模、可持续状态下发展的城镇生活哲学与历史层积。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`瀑布及老城公共区域全天24小时开放。库尔迪加历史与艺术博物馆开放时间为周二至周六 10:00-17:00，周日 10:00-15:00，周一闭馆。游客信息中心夏季（5月至9月）通常为9:00-18:00，冬季时间缩短。请注意，部分小型手工艺作坊和私人画廊的开放时间较为随意，建议提前查询。`} />
              <InfoRow label="门票价格" value={`探索瀑布、砖桥及老城街区完全免费。库尔迪加历史与艺术博物馆门票约3-5欧元，学生及老年人有优惠。当地导览步行团约10-15欧元/人，需提前在游客中心预约。`} />
              <InfoRow label="地址" value={`Baznīcas iela 5, Kuldīga, LV-3301, 拉脱维亚`} />
              <InfoRow label="交通方式" value={`从拉脱维亚首都里加国际机场出发，最佳方式是租车自驾，沿A9公路向西行驶，约2小时车程即可抵达，沿途是典型的库尔泽梅乡村风光。乘坐公共交通的话，先从里加中央汽车站搭乘前往文茨皮尔斯或利耶帕亚方向的长途巴士，告诉司机在库尔迪加下车，车程约2.5小时，班次每天约4-6班，周末可能减少。火车并非最佳选择，因车站离老城较远。小镇内部完全适合步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲库尔迪加的故事，我们得把时钟拨回到13世纪。那时，条顿骑士团的剑已经指向了波罗的海东岸。1242年，骑士团在文塔河畔的山丘上建立了一座城堡，命名为“戈丁根”，这便是库尔迪加的雏形。河流提供了天然的防御与交通命脉，小镇迅速在十字军东征的混乱格局中扎根。但真正让库尔迪加腾飞的，是一张叫作“汉萨同盟”的商业网络。到了14世纪，它已经成为同盟在利沃尼亚地区举足轻重的成员。想象一下当时的码头：拉脱维亚的木材、蜂蜡、亚麻，与来自西欧的布料、食盐、鲱鱼在这里交换，商贾云集，不同语言在此交汇，财富随着河水滚滚而来。那座著名的砖桥虽然要等到1874年才建成，但它的前身——一座木桥，早已是连接东西商路的咽喉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，波罗的海地区从来都是大国博弈的棋盘。十六、十七世纪，战争的阴云反复笼罩。波兰-立陶宛联邦、瑞典、沙俄轮番占领此地，城堡在战火中屡遭损毁又重建。最惨痛的一击来自1701年的大北方战争，瑞典国王查理十二世在撤退时，下令焚毁了包括城堡在内的大部分军事设施。大火之后，库尔迪加的军事地位一落千丈，但它作为区域行政与商业中心的生命力却异常顽强。人们用石头和木头，在废墟之上重新建起了家园，形成了我们今天看到的、主要源于18-19世纪的老城肌理。那些色彩柔和的外墙、高耸的山墙和静谧的庭院，并非诞生于太平盛世的精心规划，而是劫后余生的平民智慧与对宁静生活的执着渴望。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十九世纪，随着铁路时代的到来，主要的交通干线绕开了库尔迪加，它仿佛被时代有意无意地“遗忘”了。但这恰恰成了它最大的幸运。当里加、塔林等大城市在工业化浪潮中改头换面时，库尔迪加的发展近乎停滞，从而意外地将几个世纪前的风貌近乎完整地“冻结”保存了下来。没有大规模拆除重建，没有突兀的现代建筑插入，时间在这里流淌得格外缓慢。二十世纪的两次世界大战同样带来了创伤，但小镇紧凑的格局和深厚的社区纽带，让它一次次愈合。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的库尔迪加，其灵魂不仅仅在于古老的砖石。它被誉为拉脱维亚的“鲑鱼之城”，文塔瀑布旁的“鲑鱼台阶”是欧洲最古老的鱼类洄游通道之一，自17世纪起就一直帮助鲑鱼回到上游产卵。这个细节深刻地隐喻了库尔迪加自身：无论外部世界如何变迁，它始终保持着一种内在的、循环往复的生命力。它不是博物馆里冰冷的标本，而是一个依然在呼吸的有机体，历史是它呼吸的韵律，瀑布的水声是它永恒的心跳。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受库尔迪加的晨昏之美，建议至少预留一整天。最好的方式是前一天傍晚抵达，住上一晚，第二天清晨在老城苏醒时便开始探索。早上7-9点是黄金时间，阳光柔和，瀑布上空常有一层薄雾，游客尚未涌入，整个小镇如同专属于你。上午的重点是瀑布区和砖桥，感受自然之力与人文杰作的交响。中午前后，当阳光变得强烈，正是钻进小巷探索建筑细节和迷你博物馆的好时机。下午则可以放慢节奏，在河边找张长椅发呆，或者尝试在指定区域体验一下瀑布漂流（夏季限定）。傍晚时分，再次回到砖桥，看夕阳将一切染成金色，等待灯光逐一亮起。这样的节奏张弛有度，让你既能捕捉到光影的魔术，也能沉浸在小镇日常的脉搏里。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是拉脱维亚本地游客的高峰期，砖桥上可能会比较拥挤，尽量错开这个时间段以获得更宁静的体验。小镇石板路和河岸石头较多，一双舒适防滑的步行鞋至关重要。博物馆和小型展览馆周一普遍休息，规划行程时请务必注意。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔瀑布东侧的观景台，看晨雾如轻纱般从宽阔如缎的水面上升起，倾听一天中最初的水声交响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着文塔河岸北侧的小径慢慢散步，寻找那个17世纪用石头巧妙垒砌的“鲑鱼台阶”，观察清澈河水里生命的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要走过那座宏伟的红色砖桥，站在桥中央感受它的弧度与厚重，同时眺望两侧迥异的风景——一边是澎湃瀑布，一边是宁静老城屋顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进砖桥北端的小巷，让自己迷失在由鹅卵石铺就的静谧迷宫之中，抬头留意每栋房子山墙上各不相同的风信鸡、日晷和雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访小巧精致的库尔迪加历史与艺术博物馆，那里收藏的不仅是文物，更是小镇几个世纪以来平凡生活的温暖切片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政厅广场周边的某家家庭咖啡馆坐下，点一杯拉脱维亚传统的薄荷茶或黑麦面包汽水，看广场上的鸽子与人来人往。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前回到河边，坐在瀑布下游的巨大卵石上，让冰凉的水汽轻拂脸颊，等待夕阳把瀑布的水花变成跳跃的金色碎钻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果正值夏季，不妨沿着被称作“情人小径”的河岸林荫道一直走到老城边缘，那里有最本地化的野餐与垂钓场景。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`瀑布全景最佳点在东岸（老城对岸）的官方观景台，日出后一小时光线最佳，可使用广角镜头横向构图，将宽阔的水面、对岸的老房子和天空一同纳入。`}</h4>
                  <p className="text-sm text-gray-700">{`瀑布全景最佳点在东岸（老城对岸）的官方观景台，日出后一小时光线最佳，可使用广角镜头横向构图，将宽阔的水面、对岸的老房子和天空一同纳入。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`砖桥经典倒影机位在桥北侧下游的河岸石阶处，晴朗无风的清晨或傍晚，水面如镜，可以拍到桥洞、倒影与远处房屋构成的完美对称画面。`}</h4>
                  <p className="text-sm text-gray-700">{`砖桥经典倒影机位在桥北侧下游的河岸石阶处，晴朗无风的清晨或傍晚，水面如镜，可以拍到桥洞、倒影与远处房屋构成的完美对称画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`老城小巷光影捕捉在“Alejas iela”这条街，下午三四点的阳光斜射进狭窄的街道，会在鹅卵石路面和彩色墙面上留下迷人的光影图案，适合拍摄氛围感街景。`}</h4>
                  <p className="text-sm text-gray-700">{`老城小巷光影捕捉在“Alejas iela”这条街，下午三四点的阳光斜射进狭窄的街道，会在鹅卵石路面和彩色墙面上留下迷人的光影图案，适合拍摄氛围感街景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`红色屋顶俯瞰视角需要登上圣凯瑟琳教堂的钟楼（如果开放），从这里可以拍下老城连绵起伏的砖红色屋顶与蜿蜒的文塔河同框的经典明信片角度。`}</h4>
                  <p className="text-sm text-gray-700">{`红色屋顶俯瞰视角需要登上圣凯瑟琳教堂的钟楼（如果开放），从这里可以拍下老城连绵起伏的砖红色屋顶与蜿蜒的文塔河同框的经典明信片角度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`瀑布边缘人像与慢门位于瀑布上游靠近水边的安全岩石区，日落时分利用减光镜拍摄慢门，将奔腾的水流雾化，与静止的人物形成动静对比。`}</h4>
                  <p className="text-sm text-gray-700">{`瀑布边缘人像与慢门位于瀑布上游靠近水边的安全岩石区，日落时分利用减光镜拍摄慢门，将奔腾的水流雾化，与静止的人物形成动静对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄瀑布若想得到丝绸般的水流效果，务必带上三脚架和减光镜（ND滤镜）。尊重当地居民隐私，拍摄民居内部或居民特写前请务必微笑示意并征得同意。夏季的晨雾和秋季的金色树叶是提升照片氛围的天然礼物，出行前可关注季节特点。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在老城中心一栋18世纪修复的木质联排别墅里，楼梯吱呀作响，窗户正对着宁静的内院，房东会为你准备好当地特色的奶酪和黑面包早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河岸浪漫体验`}</h4>
                  <p className="text-sm text-green-800">{`选择瀑布上游附近由古老水磨坊改造的精品客栈，枕着滔滔水声入眠，清晨在私人阳台就能看到瀑布升起的第一缕水雾。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计师小众住所`}</h4>
                  <p className="text-sm text-yellow-800">{`镇外不远处由当代拉脱维亚设计师经营的田园民宿，极简风格与乡村景观完美结合，拥有开阔的视野和宁静到极致的夜晚。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端庄园享受`}</h4>
                  <p className="text-sm text-purple-800">{`驱车约15分钟可达坐落在库尔泽梅森林与湖泊间的传统庄园酒店，享受桑拿、湖景晚餐，体验拉脱维亚贵族式的田园诗生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的住宿数量有限且极具特色，夏季旺季（6-8月）务必提前数月预订。小镇治安极好，夜晚非常安静，适合追求深度放松的旅行者。如果选择镇外住宿，建议租车，否则晚间进出会不太方便。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开库尔迪加很久以后，我发现记忆最深的，不是某个具体的画面，而是一种整体的“感觉”。那是一种身心被彻底熨帖过的平静。在这个追求“最”和“第一”的世界里，它拥有着“欧洲最宽瀑布”的名号，却丝毫没有炫耀的意味，只是坦然地将这份自然的馈赠融入日常，成为背景音，成为洗衣妇们曾经捶打衣物的场所，成为孩子们夏季嬉戏的乐园。这种谦卑而真诚的人地关系，在今天显得如此珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`库尔迪加教会我的，是一种“深度”的另一种定义。深度游不一定意味着要挖掘多么复杂的历史谜团或攀登险峻的高峰。深度，可以是在一个宽度249米的瀑布前，安静地坐上一小时，看清每一道水流的纹理；可以是花一个下午，弄明白小巷里每一只风信鸡不同的造型寓意；可以是和面包店老板用简单的英语和手势聊上几句，然后被塞给一块刚出炉的、烫手的姜饼。它是一座活生生的小镇，一个依然在时间之河中从容流淌的生命体。来这里，你不是为了收集一个景点，而是为了让自己浸入一种迥异的生活节奏和存在状态，让自己相信，世界某些角落，美好的旧时光并未远去，它只是换了一种方式，在瀑布的水声里，在砖桥的倒影中，静静地延续着。这，或许才是旅行的终极意义。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cesis-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采西斯古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cēsis Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bauska-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    包
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">包斯卡城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bauska Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/jelgava-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    叶
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">叶尔加瓦宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Jelgava Palace</p>
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
