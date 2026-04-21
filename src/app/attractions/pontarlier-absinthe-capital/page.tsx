import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '蓬塔利耶 Pontarlier｜探访法国边境山城与神秘的绿仙子（苦艾酒）之都 - 最佳欧洲景点',
  description: '车子沿着侏罗山脉的公路盘旋，当空气中那股清冽的、混合着松针与高山草地味道的风开始变得具体，并隐约夹杂了一丝若有若无的、甜中带苦的药草香气时，你就知道，蓬塔利耶快到了。这座城镇不是一下子扑到你眼前的，它更像是从墨绿的山林褶皱里慢慢浮现出来。第一眼望去，是一片错落有致的灰蓝色屋顶，簇拥着一座高耸的钟楼，',
}

export default function PontarlierAbsintheCapitalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '蓬塔利耶', href: '/destinations/france' },
            { label: '蓬塔利耶', href: '/attractions/pontarlier-absinthe-capital' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`蓬塔利耶・Pontarlier・法国・蓬塔利耶`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着侏罗山脉的公路盘旋，当空气中那股清冽的、混合着松针与高山草地味道的风开始变得具体，并隐约夹杂了一丝若有若无的、甜中带苦的药草香气时，你就知道，蓬塔利耶快到了。这座城镇不是一下子扑到你眼前的，它更像是从墨绿的山林褶皱里慢慢浮现出来。第一眼望去，是一片错落有致的灰蓝色屋顶，簇拥着一座高耸的钟楼，背景是绵延不绝的、像巨兽脊背一样的山脉线条。把车停在老城区外，徒步走进那些被岁月打磨得光滑的石板路，你的感官会立刻被唤醒。耳边是法语和偶尔蹦出的瑞士德语口音混杂的闲聊声，从面包房里飘出热腾腾的可颂和黄油的香气，但最独特的那缕灵魂——是苦艾酒香，它从某些厚重的木门后、从古老的石墙缝隙里幽幽地钻出来，是一种复杂的、充满绿意的草本芬芳，带着一丝凉意，仿佛山林精灵的呼吸。
这座城在法国人，尤其是本地人心里，绝不仅仅是一个地图上的名字。它是边境的哨兵，是山民的集市，但更深层的，它是一种文化自豪感的源泉，甚至是一点点叛逆的象征。下午时分，你能看到老绅士们聚在广场边的咖啡馆，桌上可能就摆着一杯呈浑浊乳绿色的“绿仙子”，慢悠悠地讨论着天气和橄榄球。而到了晚上，一些藏着惊喜的小酒馆亮起温暖的灯，那里是艺术家、大学生和远方来客的聚集地，他们围绕着那盏标志性的、带穿孔勺子的苦艾酒具，看冰水一滴滴落下，引发一场奇妙的“卢希多”（louche）浑浊现象，仿佛在进行一场小小的化学仪式。这里的生活节奏，就像滴冰水的过程一样，缓慢，专注，充满了仪式感。
蓬塔利耶最打动人的，是它身上那种矛盾又和谐的统一。它身处法瑞边境，骨子里既有法国的浪漫不羁，又沾染了瑞士的精确与克制。它的历史充满了烈酒、走私（历史上这里也是烟草走私中心）和边境冒险的粗粝故事，但眼前的城镇却又如此宁静、整洁，甚至有些内向。这种张力，全部凝聚在了那杯碧绿、神秘、曾被梵高、王尔德等无数艺术家痴迷又最终被禁的酒液之中。来到这里，你不是简单地参观一个“酒乡”，而是踏入了一个活着的传说，一个关于创造力、狂热、禁令与重生的故事现场。这里的空气、建筑和人们的眼神里，都还飘荡着那个“美好时代”的魅影。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着侏罗山脉的公路盘旋，当空气中那股清冽的、混合着松针与高山草地味道的风开始变得具体，并隐约夹杂了一丝若有若无的、甜中带苦的药草香气时，你就知道，蓬塔利耶快到了。这座城镇不是一下子扑到你眼前的，它更像是从墨绿的山林褶皱里慢慢浮现出来。第一眼望去，是一片错落有致的灰蓝色屋顶，簇拥着一座高耸的钟楼，背景是绵延不绝的、像巨兽脊背一样的山脉线条。把车停在老城区外，徒步走进那些被岁月打磨得光滑的石板路，你的感官会立刻被唤醒。耳边是法语和偶尔蹦出的瑞士德语口音混杂的闲聊声，从面包房里飘出热腾腾的可颂和黄油的香气，但最独特的那缕灵魂——是苦艾酒香，它从某些厚重的木门后、从古老的石墙缝隙里幽幽地钻出来，是一种复杂的、充满绿意的草本芬芳，带着一丝凉意，仿佛山林精灵的呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座城在法国人，尤其是本地人心里，绝不仅仅是一个地图上的名字。它是边境的哨兵，是山民的集市，但更深层的，它是一种文化自豪感的源泉，甚至是一点点叛逆的象征。下午时分，你能看到老绅士们聚在广场边的咖啡馆，桌上可能就摆着一杯呈浑浊乳绿色的“绿仙子”，慢悠悠地讨论着天气和橄榄球。而到了晚上，一些藏着惊喜的小酒馆亮起温暖的灯，那里是艺术家、大学生和远方来客的聚集地，他们围绕着那盏标志性的、带穿孔勺子的苦艾酒具，看冰水一滴滴落下，引发一场奇妙的“卢希多”（louche）浑浊现象，仿佛在进行一场小小的化学仪式。这里的生活节奏，就像滴冰水的过程一样，缓慢，专注，充满了仪式感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "蓬塔利耶最打动人的，是它身上那种矛盾又和谐的统一。它身处法瑞边境，骨子里既有法国的浪漫不羁，又沾染了瑞士的精确与克制。它的历史充满了烈酒、走私（历史上这里也是烟草走私中心）和边境冒险的粗粝故事，但眼前的城镇却又如此宁静、整洁，甚至有些内向。这种张力，全部凝聚在了那杯碧绿、神秘、曾被梵高、王尔德等无数艺术家痴迷又最终被禁的酒液之中。来到这里，你不是简单地参观一个“酒乡”，而是踏入了一个活着的传说，一个关于创造力、狂热、禁令与重生的故事现场。这里的空气、建筑和人们的眼神里，都还飘荡着那个“美好时代”的魅影。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`蓬塔利耶`} />
                <InfoRow label="英文名称" value={`Pontarlier`} />
                <InfoRow label="正式名称" value={`Pontarlier`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`蓬塔利耶`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`十九世纪末至二十世纪初，这里曾是全球苦艾酒生产与贸易的绝对心脏，被誉为“绿仙子的世界首都”。`} />
                <InfoRow label="建筑特色" value={`典型的法国东部侏罗山区风格，建筑多采用浅色石材，街道起伏，中心矗立着醒目的圣伯纳铎钟楼。`} />
                <InfoRow label="建筑风格" value={`混合了中世纪遗留的防御工事痕迹、十七至十八世纪重建的古典主义城镇住宅，以及十九世纪工业繁荣时期留下的功能性酿酒厂房。`} />
                <InfoRow label="文化价值" value={`它不仅是法国边境贸易史上的重镇，更代表了一种曾被视为危险、充满艺术与波西米亚风情，如今已重新焕发生机的独特饮食文化。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城镇全天可自由漫步。主要博物馆（如苦艾酒之家）开放时间一般为周二至周日，夏季（4月-9月）10:00-18:00，冬季（10月-3月）10:00-17:00，周一闭馆。私人酒窖参观需预约。大部分本地餐馆午间营业至14:30，晚间19:30后开门。`} />
              <InfoRow label="门票价格" value={`进入蓬塔利耶城镇本身免费。核心景点苦艾酒之家（Maison de l‘Absinthe）门票约6欧元/人，学生及团体有优惠。部分当地酿酒厂（如Emile Pernot Distillery）的导览品尝体验价格在15-30欧元不等，包含讲解和数种酒品品尝。`} />
              <InfoRow label="地址" value={`Place d'Arçon, 25300 Pontarlier, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是瑞士日内瓦机场（Aéroport de Genève），驾车约1.5小时可达。从巴黎出发，可乘TGV高铁至贝桑松（Besançon）站，耗时约2.5小时，再转乘TER区域火车，约1小时抵达蓬塔利耶火车站。从日内瓦出发，可乘坐直达的区域火车，约2小时。自驾是最灵活的方式，沿A36/E60和N57公路行驶。小镇内所有景点步行可达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要说清楚蓬塔利耶的故事，就得从它脚下这片土地说起。侏罗山脉，石灰岩地质，涌出清冽甘甜的泉水，山林里长满了艾草、茴香、八角等各类药草。早在中世纪，这里的修道士就有用草药浸酒治疗疾病的传统。蓬塔利耶因其地处从法国勃艮第通往瑞士的盐路与商路要冲，早早地发展成了一个繁荣的边境集市城镇。高耸的钟楼和残留的城墙遗迹，诉说着它曾作为军事要塞的过往。但命运的转折点，发生在十八世纪末。一位名叫亨利·路易·佩诺的法国医生流亡到此，他利用当地优质的泉水和大自然的药草宝库，改进了一种以苦艾（Artemisia absinthium）为核心、混合多种香草的烈酒配方。最初的目的是制作疟疾药水，没想到，它独特的口感与香气迅速风靡。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "十九世纪，是蓬塔利耶的黄金时代。工业革命带来了蒸馏技术的革新和铁路的修建。当地的水质被证明是酿造顶级苦艾酒的绝佳伴侣。大大小小的酿酒厂如雨后春笋般在城里城外建立起来，烟囱林立，空气中常年弥漫着醉人的草本蒸汽。最鼎盛时期，城里有超过二十家大型酿酒厂，年产数百万升苦艾酒，通过铁路销往巴黎、乃至整个欧洲和美国。巴黎蒙马特高地的艺术家和诗人们，将这种能带来奇特灵感绿光的“绿仙子”奉为缪斯。蓬塔利耶的名字，与波西米亚生活方式、前卫艺术紧紧联系在一起。它从一座边境山城，一跃成为全球时尚文化的供给源头，财富滚滚而来，城镇也得以扩建，留下了许多精美的十九世纪建筑。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，极盛的背后暗藏危机。随着苦艾酒越来越流行，一些劣质、甚至含有有毒添加剂的仿冒品出现。加上保守势力和葡萄酒商的排挤，一场针对苦艾酒的“道德恐慌”在欧洲蔓延。它被指责为使人发疯、犯罪率上升的元凶（著名的“梵高割耳事件”也被归咎于它）。1915年，法国政府一纸禁令，将苦艾酒彻底打入冷宫。这对蓬塔利耶而言，不啻于一场毁灭性的地震。工厂倒闭，工人失业，整个城镇的经济命脉被斩断。那个绿意盎然的繁荣时代戛然而止，留下的只有空荡荡的厂房和一代人沉默的失落。此后几十年，蓬塔利耶只能依靠传统的奶酪（孔泰奶酪）生产和边境贸易勉强维持，那段辉煌的历史成了不愿多提的往事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但传奇并未真正死去。那些古老的配方和技艺，在一些家族中被秘密地、小规模地保存了下来。进入二十世纪末，随着历史研究的深入和人们观念的开放，关于苦艾酒的“污名”逐渐被洗清。欧盟在1988年解除了对“真正苦艾酒”的禁令，前提是必须遵守严格的生产标准。这对蓬塔利耶来说，如同一声春雷。本地酒厂的后人们重新打开尘封的账簿，擦亮祖传的铜制蒸馏器。他们不仅复兴了传统，更用现代工艺将其升华。今天，当你走进蓬塔利耶的酒厂，你能看到历史与当下的奇妙融合：古老的石砌酒窖里，摆放着闪亮的不锈钢发酵罐；年轻人用祖父的配方，实验着新的草本搭配。这座城镇没有简单地变回过去的工业中心，而是将自己重塑为一个追求精品、注重文化体验的“苦艾酒精神故乡”。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排至少一整天（最好能住一晚）来沉浸式体验蓬塔利耶。理想的抵达时间是上午十点前，此时山间的晨雾可能还未完全散去，城镇刚刚苏醒，光线柔和，适合拍照和初探。整个游览节奏宜慢不宜快，核心是“体验”而非“打卡”。上午主要进行文化预习，参观博物馆，了解背景知识；中午享用一顿融入本地特色的长午餐；下午进行深度探索，走访老城、可能的酒窖导览，并用一杯地道的苦艾酒作为一天的高潮。这样的安排能让你从理性认知到感性品味，层层递进地理解这座城镇的灵魂。如果时间充裕，第二天可以深入周边侏罗山脉自然公园徒步，从另一个角度感受这片孕育了传奇的土地。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前查看苦艾酒之家和心仪酿酒厂的官方网站，确认开放时间并预约导览，尤其是旺季和周末。穿着舒适的步行鞋至关重要，老城的石板路起伏且光滑，参观酒厂也可能需要站立较长时间。在酒吧点苦艾酒时，如果不确定自己的酒量，可以从酒精含量较低或搭配好的鸡尾酒开始尝试。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在市政厅附近免费的P停车场，然后沿着流淌的杜河漫步，让清凉的水声和渐渐浓郁的苦艾酒香引导你进入老城腹地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先推开苦艾酒之家的厚重木门，花上一个多小时沉浸在那个碧绿色的世界里，看看那些古老的广告画、精致的酒具和复现的蒸馏车间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，直接钻进旁边那家历史悠久的“绿精灵”酒馆，点一份用本地孔泰奶酪烹制的午餐，感受酒文化与饮食的完美结合。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后阳光正好，慢悠悠地爬上圣伯纳铎钟楼，在狭窄的旋转楼梯尽头，获得一个360度俯瞰红瓦屋顶、远处青山和若隐若现的瑞士边境的绝佳视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着老城墙的遗址散步，用手触摸那些冰凉的巨石，想象几个世纪前商队和走私客从这里经过的情景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`根据预约的时间，前往一家如Emile Pernot这样的传统酿酒厂，跟着蒸馏师走进充满蒸汽与异香的车间，听他讲述家族五代人的坚守与创新。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，选择一家有露台或温馨内室的苦艾酒专卖酒吧，在店主的指导下，亲手完成滴冰水的仪式，品尝一杯最正宗的蓬塔利耶“绿仙子”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐不必远求，老城内随意一家家庭餐馆都可能给你惊喜，尝尝侏罗山区的特色炖菜，让美食为这一天画上圆满句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣伯纳铎钟楼顶部的拱窗`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点的侧光时分，透过石窗框拍摄老城区层层叠叠的屋顶和远处的侏罗山，能形成极佳的框架构图和深远层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`杜河畔仰拍钟楼`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，站在杜河的小桥上，用河水作为前景倒映出钟楼和旁边色彩斑驳的老建筑，画面宁静而富有诗意。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`苦艾酒之家内部的老式柜台`}</h4>
                  <p className="text-sm text-gray-700">{`利用室内温暖的灯光，聚焦于那些琳琅满目的复古酒瓶、铜制蒸馏器和彩色玻璃器皿，营造出浓郁的“美好时代”怀旧氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某家传统酒馆的角落`}</h4>
                  <p className="text-sm text-gray-700">{`征得同意后，拍摄滴水过程中的苦艾酒杯特写，捕捉冰水与碧绿酒液接触时产生的乳白色浑浊纹理，那是“绿仙子”苏醒的魔幻瞬间。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城墙遗址的断壁残垣`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阴天或雨后的傍晚，拍摄苍苔遍布的古老石墙与现代街道的对比，沧桑感十足。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在博物馆和私人酒厂内拍摄前，务必询问并遵守相关规定，某些区域可能禁止摄影。拍摄当地人或在小型酒馆内，一个友好的微笑和事先示意能让你更受欢迎。尝试用微距镜头捕捉苦艾酒液中的草本悬浮物或酒具的精美细节，能拍出非常独特的作品。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心之家`}</h4>
                  <p className="text-sm text-blue-800">{`由一栋十九世纪苦艾酒商人宅邸改造的精品酒店，房间保留了原有的高挑天花板和装饰壁炉，下楼就是最热闹的广场，位置无敌。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`山景静谧公寓`}</h4>
                  <p className="text-sm text-green-800">{`位于城镇稍高处的安静住宅区，带厨房的小公寓拥有俯瞰整个蓬塔利耶盆地和远山的超大露台，适合家庭或追求宁静的旅行者。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`绿仙子主题客栈`}</h4>
                  <p className="text-sm text-yellow-800">{`一家小型但处处用心的B&B，每个房间以不同的苦艾酒品牌或历史人物命名，老板是本地通，能提供最地道的游览和品酒建议。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`复古设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`由旧工业建筑改造，设计感十足，将粗犷的砖墙与现代家具结合，酒店内的酒吧收藏了极为齐全的本地及全球苦艾酒，是爱好者的天堂。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季和冬季滑雪季是这里的旅游小高峰，建议至少提前一个月预订心仪的住宿。老城中心的酒店夜晚可能偶有酒吧传来的轻微声响，对睡眠极其敏感者可以选择靠近居民区或地势较高的住处。无论住在哪里，蓬塔利耶的治安都非常好，夜晚独自步行也很安全。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开蓬塔利耶时，我的背包里除了两瓶精心挑选的苦艾酒，还装满了那股独特的、清冽又复杂的香气，它似乎已经浸染了我的外套和记忆。回望那座渐渐隐入山影的钟楼，我忽然觉得，这座城市本身就像一杯精心调制的苦艾酒。它有历史的厚重与苦涩，有禁令时期的压抑与挣扎，有山城自然的清新与甘冽，更有重生后愈发醇厚的芬芳。它没有巴黎的炫目，没有普罗旺斯的喧嚣，它只是静静地待在边境线上，守护着一个关于狂热、艺术、毁灭与复兴的完整故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求快速消费和标准化体验的世界里，蓬塔利耶提供了一种截然不同的旅行价值。它要求你慢下来，动用所有的感官去“品尝”，而不仅仅是观看。它邀请你参与的，不是浮光掠影的打卡，而是一场关于某种文化现象的小型考古。在这里，你触碰到的不仅是冰冷的石块和玻璃瓶，更是一段活生生的、带着体温和酒香的人类欲望史与创造力史。对于任何一位渴望深度理解欧洲文化复杂面向的旅人来说，蓬塔利耶都不应被错过。它是一位低调的叙事者，当你准备好倾听，它会为你缓缓道来一个令你微醺、并长久回味的绿色传奇。这，便是旅行的深意所在。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cordes-sur-ciel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科尔德圣谢鲁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cordes-sur-Ciel</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/senlis-medieval-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    桑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">桑利斯中世纪老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Senlis</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/carcassonne-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔卡松城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Carcassonne Castle</p>
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
