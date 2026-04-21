import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '巴莱 Bale｜探秘恐龙脚印与千年石屋的时光重叠之旅 - 最佳欧洲景点',
  description: '想象一下，你正走在一片被阳光晒得发烫的白色石灰岩山丘上，空气里弥漫着野生鼠尾草和松针的干燥香气。脚下的岩石看起来平平无奇，直到你蹲下身，拂去表面的浮尘——一个清晰的、三趾的凹痕赫然出现在眼前，巨大得超乎想象。那一刻，时间“嗡”地一声坍缩了。你不是在博物馆里隔着玻璃看化石，你是实实在在地站在一只庞然大...',
}

export default function BaleIstriaDinosaurFossilStoneTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '克罗地亚', href: '/destinations/croatia' },
            { label: '巴莱（伊斯特拉半岛的恐龙化石与石屋小镇）', href: '/attractions/bale-istria-dinosaur-fossil-stone-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`巴莱（伊斯特拉半岛的恐龙化石与石屋小镇）・Bale / Valle・克罗地亚・巴莱（伊斯特拉县）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你正走在一片被阳光晒得发烫的白色石灰岩山丘上，空气里弥漫着野生鼠尾草和松针的干燥香气。脚下的岩石看起来平平无奇，直到你蹲下身，拂去表面的浮尘——一个清晰的、三趾的凹痕赫然出现在眼前，巨大得超乎想象。那一刻，时间“嗡”地一声坍缩了。你不是在博物馆里隔着玻璃看化石，你是实实在在地站在一只庞然大物曾经走过的地方，指尖触碰的是它一亿多年前留下的、未曾移动的“瞬间”。这就是巴莱给你的第一个震撼：一场与恐龙的不期而遇，就在克罗地亚伊斯特拉乡野的静谧之中。
带着这份来自史前的悸动，你转身向北步行不过二十分钟，眼前的风景就从荒野切换到了人间烟火。巴莱小镇像一颗被时光仔细包裹的蜜糖，静静地卧在山丘上。走进镇子，最先迎接你的是石头。到处都是石头：淡蜂蜜色的石墙、被岁月打磨得光滑圆润的石阶、石砌的拱门、石铺的狭窄街道（他们叫它“卡莱”）。阳光在这里被切割成明暗交错的几何图形，在墙壁上缓慢移动。你能听到的，是远处咖啡馆里银勺碰杯的清脆声响，是某扇木窗被推开时“吱呀”的老旧声，是意大利语和克罗地亚语混杂的、慵懒的聊天声。这里的生活节奏，慢得像在橄榄油里浸润过。
这个小镇最打动人心的，正是这种不可思议的“时光重叠”。你的脚下，是白垩纪海底的淤泥，凝固着恐龙沉重的步伐；而你的身边，是中世纪工匠用同一种岩石建造的家园，承载着人类数百年的悲欢。自然史与人文史在这里不是上下册，而是交织在同一页纸上的两种笔迹。当地人也早已习惯了这种“共生”。他们会指着镇外说“那边有龙（他们对恐龙脚印的古老称呼）的脚印”，语气平常得像在说邻居家的葡萄熟了。这种平常心，让巴莱的魔力不是高高在上的景点感，而是一种深邃的、接地气的宁静。在这里，你既能感受地球脉搏的远古跳动，又能触摸到人类社区温暖而坚韧的纹理。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你正走在一片被阳光晒得发烫的白色石灰岩山丘上，空气里弥漫着野生鼠尾草和松针的干燥香气。脚下的岩石看起来平平无奇，直到你蹲下身，拂去表面的浮尘——一个清晰的、三趾的凹痕赫然出现在眼前，巨大得超乎想象。那一刻，时间“嗡”地一声坍缩了。你不是在博物馆里隔着玻璃看化石，你是实实在在地站在一只庞然大物曾经走过的地方，指尖触碰的是它一亿多年前留下的、未曾移动的“瞬间”。这就是巴莱给你的第一个震撼：一场与恐龙的不期而遇，就在克罗地亚伊斯特拉乡野的静谧之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`带着这份来自史前的悸动，你转身向北步行不过二十分钟，眼前的风景就从荒野切换到了人间烟火。巴莱小镇像一颗被时光仔细包裹的蜜糖，静静地卧在山丘上。走进镇子，最先迎接你的是石头。到处都是石头：淡蜂蜜色的石墙、被岁月打磨得光滑圆润的石阶、石砌的拱门、石铺的狭窄街道（他们叫它“卡莱”）。阳光在这里被切割成明暗交错的几何图形，在墙壁上缓慢移动。你能听到的，是远处咖啡馆里银勺碰杯的清脆声响，是某扇木窗被推开时“吱呀”的老旧声，是意大利语和克罗地亚语混杂的、慵懒的聊天声。这里的生活节奏，慢得像在橄榄油里浸润过。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这个小镇最打动人心的，正是这种不可思议的“时光重叠”。你的脚下，是白垩纪海底的淤泥，凝固着恐龙沉重的步伐；而你的身边，是中世纪工匠用同一种岩石建造的家园，承载着人类数百年的悲欢。自然史与人文史在这里不是上下册，而是交织在同一页纸上的两种笔迹。当地人也早已习惯了这种“共生”。他们会指着镇外说“那边有龙（他们对恐龙脚印的古老称呼）的脚印”，语气平常得像在说邻居家的葡萄熟了。这种平常心，让巴莱的魔力不是高高在上的景点感，而是一种深邃的、接地气的宁静。在这里，你既能感受地球脉搏的远古跳动，又能触摸到人类社区温暖而坚韧的纹理。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`巴莱（伊斯特拉半岛的恐龙化石与石屋小镇）`} />
                <InfoRow label="英文名称" value={`Bale / Valle`} />
                <InfoRow label="正式名称" value={`Bale`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`巴莱（伊斯特拉县）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个将千万年前的恐龙足迹与千年人类居住史奇妙交织在一起的独特地点。`} />
                <InfoRow label="建筑特色" value={`以伊斯特拉半岛特有的乳白色石灰岩（“卡索”）垒砌而成的石屋群，与脚下岩层中封存的史前生命印记形成建筑与地质的对话。`} />
                <InfoRow label="建筑风格" value={`古镇整体呈现典型的伊斯特拉中世纪风格，混杂了罗马式、哥特式以及后来的威尼斯共和国时期的影响，朴实而坚固。`} />
                <InfoRow label="文化价值" value={`展现了亚得里亚海沿岸地区从远古自然史到中世纪城邦社会，再到现代生活的连续文化地层。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`恐龙化石遗址（Bale Dinosaur Site）全天开放，但最佳参观时间为白天。遗址无人看管，自由参观。巴莱古镇本身作为居住区，随时可漫步，但小镇信息中心和部分历史建筑（如城堡）的开放时间较为灵活，通常在夏季旅游季（5月至9月）的上午10点至下午4点有志愿者或管理员值守，其他季节需提前致电当地旅游局询问。建议出行前查阅伊斯特拉县旅游局官网获取最新信息。`} />
              <InfoRow label="门票价格" value={`恐龙化石遗址完全免费。进入巴莱古镇免费，但若想进入小镇核心的博斯卡雷吉-马丁嫩戈城堡（Bembo-Martinengo Castle）内庭或塔楼参观，可能需要支付少量捐赠费用（约20-30库纳，约合3-4欧元），用于古迹维护，费用不固定，视当时的管理情况而定。`} />
              <InfoRow label="地址" value={`恐龙化石遗址：Bale Dinosaur Footprints Site, 附近无具体门牌号，位于Bale镇郊外通往Fazana方向的旧采石场区域，邮编52111。
巴莱古镇中心：Trg Slobode 1, 52111, Bale, Croatia。`} />
              <InfoRow label="交通方式" value={`最近的国际机场是普拉机场（PUY），距离巴莱约15公里。从机场出发，最方便的方式是租车自驾，沿E751/E61公路向东北方向行驶约20分钟即可抵达巴莱，路况良好。若乘坐公共交通，可从普拉机场先打车或乘巴士到普拉中央巴士站（Pula Bus Station），然后换乘前往罗维尼（Rovinj）或波雷奇（Poreč）方向的区域性巴士，在“Bale”站下车，班次在夏季较为频繁（每小时1-2班），冬季会减少，全程从普拉算起约需40分钟。古镇内所有景点步行可达，但前往郊外的恐龙化石遗址需步行约30分钟或开车5分钟，遗址附近有简易停车处。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`巴莱的故事得从一片古老的海说起。大约一亿年前的白垩纪中期，如今的伊斯特拉半岛还是一片温暖的浅海，遍布潟湖和泥滩。各种恐龙，包括巨大的蜥脚类恐龙和凶猛的兽脚类恐龙，沿着潮湿的海岸线漫步、觅食、追逐。它们的体重在柔软的碳酸盐泥浆上留下了深深的足迹。随后，沧海桑田，海水退去，这些脚印被新的沉积物迅速覆盖、掩埋。在数百万年的巨大压力下，泥浆变成了坚固的石灰岩，脚印则成了完美的天然模具，被封存在时间胶囊里，静静等待。直到现代，当地的采石工人在开采这种优质建筑石料——“卡索”时，才偶然将这些史前印记重新暴露在天光之下。这一发现震惊了古生物学界，也让巴莱这个名字首次与遥远的恐龙时代联系在了一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`人类来到这片土地，则要晚得多，但历史同样厚重。罗马人最早在此留下了痕迹，巴莱附近曾是其乡村庄园的一部分。而小镇真正的雏形始于中世纪早期，斯拉夫部落在此定居。它的战略位置——坐落于连接普拉和波雷奇的内陆山脊上——使其成为兵家必争之地。从10世纪到12世纪，巴莱是克罗地亚王国的一部分。然而，深刻塑造其命运和面貌的，是威尼斯共和国长达数个世纪的统治（从13世纪中期断续持续到18世纪末）。威尼斯人不仅带来了防御性建筑技术，更带来了亚得里亚海对岸的文明气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`威尼斯统治的遗产，最直观地体现在小镇的建筑和氛围上。坚固的城墙、塔楼和那座标志性的博斯卡雷吉-马丁嫩戈城堡，都是为了防御奥斯曼土耳其的侵袭而修建。漫步小巷，你会发现许多建筑的细节透露着威尼斯的优雅：哥特式的双联窗、雕刻着家族徽章的石门楣。更微妙的是那种“意式”的生活情调：广场上咖啡馆的布局、人们交谈时的手势、空气中飘散的意式浓缩咖啡的香气。巴莱的克罗地亚语名和意大利语名“Valle”至今并用，本身就诉说着一段文化交融的历史。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十九世纪，随着威尼斯共和国的衰落和奥匈帝国的接管，巴莱回归了宁静的农业小镇身份。二十世纪的动荡也在这里留下了伤痕，但小镇坚韧的石头躯体保护了它的核心。而恐龙脚印的正式科学发现和研究，则是二十世纪末才开始的。这为小镇注入了全新的生命维度。如今，当地社区充满智慧地守护着这两份遗产：他们既小心保护着脆弱的化石遗址，避免过度开发；也悉心维护着古老的石屋，让现代生活在中世纪的肌理中和谐延续。巴莱不再仅仅是一个“活着的中世纪博物馆”，更是一座“地球记忆与人类记忆的双重档案馆”。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在清晨八点左右抵达，先探访恐龙化石遗址。此时阳光斜射，能最清晰地看到岩石上的脚印凹凸阴影，且天气凉爽，游客稀少，能让你独自享受与史前巨兽“对话”的震撼。在此沉浸约一个半小时后，驱车或缓步（约30分钟步行）返回小镇。此时接近上午十点，小镇刚刚苏醒，店铺开门，阳光正好洒满主广场。用接下来的三到四个小时，以迷路般的心态深入探索石头迷宫般的老城区，包括城堡、教堂和小巷，并在当地小餐馆用午餐。这样的安排遵循了从自然奇观到人文古镇、从旷野到街巷的节奏，让体验层次递进，并完美避开午后可能抵达的旅行团和最炎热的日晒。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观恐龙脚印遗址时请务必保持绝对尊重，不要试图踩踏、涂抹或拓印脚印，这些化石极其珍贵且脆弱。夏季中午阳光暴晒，遗址毫无遮荫，务必携带充足饮用水、防晒帽和舒适的徒步鞋。小镇石板路多起伏且光滑，尤其雨后，建议穿防滑性能好的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一站直奔镇外旧采石场的恐龙脚印遗址，在绝对的安静中寻找那些嵌入岩石地面的巨大三趾印记，试着想象脚下大地曾是一片恐龙漫步的泥泞海岸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到小镇，从圣灵教堂旁的古老石门“Gate of San Rocco”进入古镇核心，立刻感觉自己被高耸的蜂蜜色石墙包裹，踏入另一个时间维度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去探访博斯卡雷吉-马丁嫩戈城堡，用手触摸那些粗糙而坚实的防御墙，并登上塔楼（如果开放）俯瞰一片红瓦石屋与远处湛蓝亚得里亚海交织的经典伊斯特拉全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主广场“Trg Slobode”边的露天咖啡馆坐下来，点一杯本地产的玛尔维萨白葡萄酒或浓咖啡，什么都不做，就看小镇居民如何悠然地进行他们的日常社交。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`放任自己在那些仅容一人通过的“卡莱”小巷里迷路，留意那些石门上雕刻的威尼斯风格徽章、哥特式窗棂，以及从阳台垂落下来的鲜艳天竺葵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家用“科诺芭”石板做招牌的家庭小馆“Konoba”享用午餐，必点伊斯特拉特色黑松露意面或新鲜海鱼，让味蕾也加入这场时光旅行。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，参观一下小镇的小型本地博物馆或文化信息中心，听管理员用带着口音的英语讲述恐龙发现的故事和古镇的传奇，收获书本上没有的细节。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`恐龙脚印特写镜头`}</h4>
                  <p className="text-sm text-gray-700">{`选择清晨或傍晚的低角度侧光，将相机贴近地面，让阳光从脚印凹槽的一侧照射进来，突出其深邃的立体感和历史的沧桑质感，可以放入一只手或一只脚作为比例参照。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从城堡塔楼或城墙高处俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`在晴朗日落的“金色时刻”，将古镇连绵的红瓦屋顶、石墙迷宫作为前景，远处依稀可见的亚得里亚海波光作为背景，构图饱满，色彩温暖。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣灵教堂附近的窄巷光影`}</h4>
                  <p className="text-sm text-gray-700">{`午后三四点，阳光会斜射入最窄的那些小巷，在石墙上拉出长长的、锐利的明暗分界线，此时站在光影交界处拍人像或空景，极具戏剧性和几何美感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`古镇石门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`以“San Rocco”门或其他古老石拱门作为画框，从门洞内向外拍摄，将门外的广场生活、教堂钟楼或绿植巧妙地框入其中，增加照片的层次和故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用偏振镜可以有效减少石灰岩表面的反光，让恐龙脚印的纹理更清晰。在小镇内拍摄居民时，请务必先微笑示意并获得对方同意，这里的人们友好但注重隐私。无人机飞行在古镇上空可能有严格限制，起飞前务必确认当地法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`石头家园民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在古镇中心一栋经过精心修复的16世纪石屋里，房东老太太会送你自家酿的橄榄油，夜晚能听到石头墙壁呼吸般的静谧，体验真正的本地生活。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`橄榄园农庄`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇外缓坡上的家庭农庄，房间宽敞简约，带木质阳台，眼前是无尽的橄榄树林，清晨在鸟鸣和橄榄叶的沙沙声中醒来，享受田园诗的宁静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`精品设计酒店（由历史建筑改造）`}</h4>
                  <p className="text-sm text-yellow-800">{`将一座老贵族宅邸与现代设计完美融合，保留原始石墙和拱顶，搭配极简家具和艺术藏品，提供高品质的早餐和贴心的本地旅行建议。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`海滨度假公寓`}</h4>
                  <p className="text-sm text-purple-800">{`如果你无法舍弃大海，可以选择驾车10分钟可达的海滨小镇法扎纳（Fažana）的公寓，白天探索巴莱的历史，晚上回到海边享受亚得里亚海的落日与晚餐。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`古镇内的住宿数量有限，尤其在夏季（7-8月）非常抢手，务必提前至少两三个月预订。住在老建筑里虽然风情十足，但可能遇到网络信号较弱、楼梯陡峭等情况，适合追求特色多于绝对便利的旅行者。周边乡村住宿通常提供免费停车，而古镇中心停车位紧张且多为付费区域。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开巴莱许久，我脑子里反复回响的，不是某个具体的画面，而是一种感觉：一种时间的厚重感变得可触、可感、甚至可以赤脚踩上去的奇妙体验。在这个追求速度和新鲜感的时代，巴莱教我们的是“深度”和“重叠”的价值。它告诉我们，一片土地的故事可以如此层次丰富——从恐龙震动的足音，到罗马人的犁铧，再到威尼斯商人的驼铃与石匠的凿击，最后到今日咖啡馆里那杯冒着热气的咖啡。所有这些时间层，没有彼此覆盖，而是温和地并存着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是为什么每个热爱深度游的人都该来一次巴莱。它不仅仅是一个“有恐龙脚印的小镇”那么简单。它是一个温柔的提醒：我们人类的历史，不过是地球漫长传记中的一个章节。行走在巴莱，你同时行走在两种伟大的时间尺度上——地质的，和文明的。这种双重行走，会让你对“存在”本身产生一种既渺小又连结的深刻感悟。当你抚摸着恐龙足迹的冰凉岩石，又抬头看见石屋窗台上盛开的天竺葵时，你会明白，生命与记忆，无论跨度多么巨大，都以最美丽的方式，在这片伊斯特拉的星光下，找到了共鸣。来这里，是进行一场心灵的时差调整，重新学会用岩石的耐心和历史的眼光，看待我们自己的足迹。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/korcula-old-town-marco-polo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔丘拉岛（马可波罗故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Korčula</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trogir-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特罗吉尔古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trogir Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rijeka-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里耶卡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rijeka Old Town</p>
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
