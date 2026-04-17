import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维塞乌古城 Viseu Old Town｜探秘葡萄牙山巅被时光遗忘的宝石 - 最佳欧洲景点',
  description: '车子还在盘山公路上绕行，一片连绵的红色屋顶就像突然从绿色的山峦毯子上冒出来似的，簇拥着山顶那座灰白色、宛如王冠般的大教堂。这就是你对维塞乌古城的初印象——一座被时光精心收藏在山顶的模型之城，安静、完整，带着一丝拒人千里的骄傲。但当你的脚步真正踏上那些被几个世纪的人流磨得温润发亮的花岗岩地砖时，那种距...',
}

export default function ViseuOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '维塞乌古城', href: '/attractions/viseu-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维塞乌古城・Viseu Old Town・葡萄牙・维塞乌`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子还在盘山公路上绕行，一片连绵的红色屋顶就像突然从绿色的山峦毯子上冒出来似的，簇拥着山顶那座灰白色、宛如王冠般的大教堂。这就是你对维塞乌古城的初印象——一座被时光精心收藏在山顶的模型之城，安静、完整，带着一丝拒人千里的骄傲。但当你的脚步真正踏上那些被几个世纪的人流磨得温润发亮的花岗岩地砖时，那种距离感瞬间就消失了。空气里有股好闻的混合气息：清晨面包店飘出的黄油焦香，从老房子石缝里渗出的淡淡潮土味，还有不知哪户人家窗台上天竺葵的植物清气。
钻进那些窄得只容两人侧身而过的小巷（他们叫它“Ruas”），高耸的石墙把天空切割成一条蓝色的溪流。你的耳边变得异常丰富：头顶某扇百叶窗被推开时木头发出的“吱呀”声，远处广场上隐约传来的咖啡杯碟碰撞的清脆响动，还有你自己的脚步声在石壁间产生的轻微回音。这里不像那些被游客塞满的古城，它首先是一座“活着”的家园。你会看见系着围裙的老太太从三楼窗口用绳子吊下篮子，向街角杂货店买面包；留着络腮胡的店主不紧不慢地擦着他的黄铜门把手；放学的小孩们追逐着足球，皮球在凹凸不平的路面上弹跳的声音格外响亮。生活的纹理，就这样毫无防备地展现在你面前。
而古城的灵魂，毫无疑问是那座圣玛丽亚马特里斯大教堂（Sé de Viseu）。走近它，你才会发现它并非单一的灰白，外墙是一种温暖的米黄色，在午后阳光下像一块巨大的蜂蜜蛋糕。最震撼的是走进内部的刹那，光线仿佛有了形状和重量。高耸的网状拱顶（曼努埃尔风格的杰作）如同石头编织的蕾丝，将你的视线引向天际。当阳光穿过彩绘玻璃窗，会在古老的长椅和石柱上投下斑斓的、缓慢移动的光斑，空气中飞舞的微尘都在发光。那一刻，你能清晰地听到一种巨大的“寂静”，那是几个世纪的祈祷与沉思沉淀下来的声音。
黄昏时分，一定要去阿莫雷拉斯门（Porta do Soar）附近的观景台。夕阳把整个古城染成金红色，远方的平原和更远处的山脉层层叠叠，呈现出梦幻的蓝紫色。你会看到本地情侣依偎在矮墙上轻声细语，老人牵着狗静静眺望。这里没有喧闹的旅行团，只有风声、晚钟，和逐渐亮起的、如繁星般温暖的万家灯火。维塞乌的魅力，就在于这种磅礴历史与细腻日常的水乳交融——它是一座你可以真正“走进”，而不仅仅是“观看”的纪念碑。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子还在盘山公路上绕行，一片连绵的红色屋顶就像突然从绿色的山峦毯子上冒出来似的，簇拥着山顶那座灰白色、宛如王冠般的大教堂。这就是你对维塞乌古城的初印象——一座被时光精心收藏在山顶的模型之城，安静、完整，带着一丝拒人千里的骄傲。但当你的脚步真正踏上那些被几个世纪的人流磨得温润发亮的花岗岩地砖时，那种距离感瞬间就消失了。空气里有股好闻的混合气息：清晨面包店飘出的黄油焦香，从老房子石缝里渗出的淡淡潮土味，还有不知哪户人家窗台上天竺葵的植物清气。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`钻进那些窄得只容两人侧身而过的小巷（他们叫它“Ruas”），高耸的石墙把天空切割成一条蓝色的溪流。你的耳边变得异常丰富：头顶某扇百叶窗被推开时木头发出的“吱呀”声，远处广场上隐约传来的咖啡杯碟碰撞的清脆响动，还有你自己的脚步声在石壁间产生的轻微回音。这里不像那些被游客塞满的古城，它首先是一座“活着”的家园。你会看见系着围裙的老太太从三楼窗口用绳子吊下篮子，向街角杂货店买面包；留着络腮胡的店主不紧不慢地擦着他的黄铜门把手；放学的小孩们追逐着足球，皮球在凹凸不平的路面上弹跳的声音格外响亮。生活的纹理，就这样毫无防备地展现在你面前。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而古城的灵魂，毫无疑问是那座圣玛丽亚马特里斯大教堂（Sé de Viseu）。走近它，你才会发现它并非单一的灰白，外墙是一种温暖的米黄色，在午后阳光下像一块巨大的蜂蜜蛋糕。最震撼的是走进内部的刹那，光线仿佛有了形状和重量。高耸的网状拱顶（曼努埃尔风格的杰作）如同石头编织的蕾丝，将你的视线引向天际。当阳光穿过彩绘玻璃窗，会在古老的长椅和石柱上投下斑斓的、缓慢移动的光斑，空气中飞舞的微尘都在发光。那一刻，你能清晰地听到一种巨大的“寂静”，那是几个世纪的祈祷与沉思沉淀下来的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`黄昏时分，一定要去阿莫雷拉斯门（Porta do Soar）附近的观景台。夕阳把整个古城染成金红色，远方的平原和更远处的山脉层层叠叠，呈现出梦幻的蓝紫色。你会看到本地情侣依偎在矮墙上轻声细语，老人牵着狗静静眺望。这里没有喧闹的旅行团，只有风声、晚钟，和逐渐亮起的、如繁星般温暖的万家灯火。维塞乌的魅力，就在于这种磅礴历史与细腻日常的水乳交融——它是一座你可以真正“走进”，而不仅仅是“观看”的纪念碑。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维塞乌古城`} />
                <InfoRow label="英文名称" value={`Viseu Old Town`} />
                <InfoRow label="正式名称" value={`Historic Centre of Viseu`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`维塞乌`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座高踞山巅的古城，是葡萄牙内陆贝拉地区历史上最重要的军事、政治与文化十字路口。`} />
                <InfoRow label="建筑特色" value={`曼努埃尔风格与文艺复兴风格的精妙融合，通过宏伟的大教堂、蜿蜒的城墙遗迹和充满生活气息的古老广场展现得淋漓尽致。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式（曼努埃尔式）和文艺复兴式为主导，混杂了罗马风的基础和巴洛克式的内部装饰细节。`} />
                <InfoRow label="文化价值" value={`一个仍在呼吸的“活着的博物馆”，完美保存了从中世纪到文艺复兴时期葡萄牙内陆贵族与平民生活的完整剖面。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天24小时开放。但内部主要景点（如大教堂、格拉·瓦斯科博物馆等）开放时间各不相同：大教堂一般为每日上午9点至下午6点；博物馆通常为周二至周日上午10点至下午6点。部分小型教堂中午有午休关闭时段（约下午1点至3点）。冬季（11月至次年2月）部分景点可能提前至下午5点关闭。法定节假日（如圣诞节、元旦）大部分室内景点关闭。`} />
              <InfoRow label="门票价格" value={`进入古城本身免费。大教堂主体免费，但参观其珍宝馆（Tesouro-Museu）需约3欧元。格拉·瓦斯科博物馆（Museu Grão Vasco）门票约5欧元，每月第一个周日免费。学生、65岁以上老人及持有青年卡者享半价优惠。12岁以下儿童免费。部分联票（如博物馆+大教堂珍宝馆）约6欧元，性价比更高。`} />
              <InfoRow label="地址" value={`Centro Histórico de Viseu, 3500-001 Viseu, Portugal`} />
              <InfoRow label="交通方式" value={`从最近的主要机场——波尔图机场（OPO）出发，最便捷的方式是租车自驾。取车后沿A24/E80高速公路向东南方向行驶，约1小时15分钟即可抵达维塞乌，沿途是绵延的杜罗河山谷风光，驾驶体验极佳。若乘坐公共交通，可在波尔图Campanhã火车站乘坐直达维塞乌的Rede Expressos长途巴士，车程约1.5-2小时，班次频繁（约每小时一班），可在网上提前购票。维塞乌本地没有火车站，古城核心区为步行区，可将车停在城外的免费或收费停车场（如Praça da República周边），然后步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解维塞乌，你得先想象一张伊比利亚半岛的古地图。这里地处杜罗河与蒙德古河之间的山脊，自古以来就是南北通衢的要冲。早在罗马人到来之前，凯尔特部落就已经在此建立了定居点。罗马人看中了它的战略价值，将其建设为一个重要的军营和交通节点，你今天在古城地下和博物馆里还能看到那些沉默的罗马界碑和马赛克碎片，诉说着帝国大道上往来的喧嚣。罗马帝国衰落后，这里相继被西哥特人和摩尔人占据，那段历史留下的痕迹像风一样模糊，主要存在于地名和某些建筑的基础中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点发生在中世纪基督教收复失地运动时期。维塞乌在12世纪被葡萄牙第一位国王阿方索·恩里克斯从摩尔人手中夺回，并被迅速提升为城市的地位，筑起了坚固的城墙。这道城墙，就像给这座山城戴上了一个坚实的戒指，定义了它未来几百年的轮廓。整个中世纪，它都是贝拉地区对抗来自东方（卡斯蒂利亚）威胁的盾牌与堡垒。你可以想象，卫兵曾在如今你散步的城墙上巡逻，眺望着可能来袭的敌情。也正是在这段相对稳定但暗流涌动的时期，城市的宗教心脏——大教堂开始奠基。最初的罗马风式样简单而坚固，反映了那个时代的务实与虔诚。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间来到15世纪末到16世纪，这是维塞乌的“黄金时代”。葡萄牙的航海大发现带来了无尽的财富与眼界，一种被称为“曼努埃尔”的独特艺术风格如海潮般席卷全国，维塞乌也赶上了这趟辉煌的列车。当时的主教，同时也是国王曼努埃尔一世的兄弟，决定将原本简朴的大教堂改建成配得上王国荣耀的丰碑。于是，你看到了那些令人惊叹的变革：教堂中殿被拔高，复杂如植物根系般蔓延的拱顶被建造起来，窗饰和门户上雕刻着航海绳索、贝壳和异域植物的图案——这些都是大发现时代的象征。更幸运的是，一位名叫格拉·瓦斯科的天才画家被召到这里，他用画笔为教堂和修道院绘制了一系列震撼的祭坛画。这些画作色彩浓烈，人物情感饱满，充满了人文主义的光芒，让这座内陆山城一下子站到了文艺复兴艺术的前沿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，黄金时代并未永恒。随着葡萄牙帝国重心转向沿海，内陆城市逐渐沉默。维塞乌在17、18世纪经历了巴洛克风格的内部装饰热潮（你今天在大教堂内部看到的镀金木雕大部分来自这个时期），但整体上，它变成了一座安静、优雅的省府城市。城墙失去了军事意义，部分被拆除或融入了民居的建筑中。拿破仑入侵的战争也曾波及这里，但幸运的是，破坏相对有限。正是这种“被边缘化”，反而意外地保护了古城。它没有经历大规模工业化改造的冲击，中世纪的街道肌理、文艺复兴的宫殿、巴洛克的教堂内饰，都像琥珀里的昆虫一样，被完好地保存下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的维塞乌古城，不是一个僵化的博物馆。它是一层又一层历史书页的叠加，每一代人都在前人的笔迹旁留下了自己的注解。罗马的根基、中世纪的城墙、曼努埃尔的荣耀、巴洛克的虔敬，以及数百年寻常百姓的烟火生活，共同编织成了这块独一无二的文化织锦。走在这里，你不是在阅读一本历史教科书，你是在用双脚丈量一部立体的、依旧在呼吸的史诗。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完美体验维塞乌，我强烈建议你留出一整个白天，从清晨开始。最佳抵达时间是上午9点左右，这时阳光正好温柔地洒在古城东侧，游客尚未涌入，本地店铺刚刚开门，充满了清新的朝气。整体游览大约需要6-8小时，节奏应是慢悠悠的“漫步发现式”。路线设计上，我从西侧主要入口（阿莫雷拉斯门）开始，逆时针方向环绕山丘，最后抵达山顶的大教堂广场并俯瞰全城。这样安排既能避开从大教堂开始的主流人流，也能让景观随着脚步的攀升而逐步展开，最终以壮丽的俯瞰全景作为高潮收尾。记得中间一定要在广场边的咖啡馆坐下，像当地人一样喝杯咖啡，发会儿呆。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量在上午参观大教堂和博物馆，下午旅行团会增多。古城很多小巷坡度很大且路面不平，务必穿一双绝对舒适防滑的鞋子。对主动上前提供“导游”服务的人保持礼貌但谨慎的态度，古城不大，自己探索乐趣更多。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从西侧的阿莫雷拉斯门进入古城，立刻让自己迷失在由高大石墙夹峙的、如迷宫般蜿蜒的“Rua Direita”直街中，感受脚下鹅卵石的起伏和两旁文艺复兴贵族府邸门楣上精致的家族徽章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不知不觉间来到古城跳动的心脏——老城广场（Adro da Sé），先在广场边缘的长凳上坐一会儿，看鸽子在喷泉边嬉戏，观察当地老人如何在阳光下把一份报纸读上一个上午。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开大教堂沉重而光滑的木门，让眼睛适应内部昏暗的光线，然后径直抬头仰望那令人屏息的曼努埃尔式网状拱顶，寻找阳光透过彩绘玻璃在古老石柱上描绘出的变幻光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完大教堂后，一定要走进紧邻的格拉·瓦斯科博物馆，在一楼大厅静静站在那幅巨大的《 Calvário 》祭坛画前，感受画家笔下人物近乎痛苦的、充满戏剧张力的神圣情感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆后门溜出来，拐进一条小巷去寻找格拉·瓦斯科的故居（Casa de Gasco Vasco），看看这位天才画家生活和工作过的朴素环境，想象他如何在这宁静山城构思出那些绚丽的画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“Rua do Senhor da Pobreza”小路下山，探访隐藏在民居之间的圣弗朗西斯科修道院（Igreja dos Terceiros de São Francisco），惊叹于其内部几乎令人眩晕的、覆盖每一寸空间的镀金巴洛克雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐时间回到市中心更热闹的“Praça da República”共和国广场周边，找一家有露天座位的餐厅，点一份当地特色的“Vitela à Lafões”（炖小牛肉），配上一杯杜罗产区的红酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从大教堂广场的北侧，沿着“Rua de Santa Maria”慢慢往下走，这条路是拍摄古城层层叠叠屋顶与大教堂塔楼同框的绝佳走廊，一路下行又可回到起点附近。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`阿莫雷拉斯门广场的逆光剪影`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚日落前半小时，站在门洞内向古城内拍摄，将行人的剪影、古老的拱门与远处灯火初亮的大教堂塔楼一同纳入画面，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大教堂回廊的几何光影`}</h4>
                  <p className="text-sm text-gray-700">{`晴天的正午前后，阳光直射进大教堂的回廊，抓住光柱投射在石拱和蓝白瓷砖墙上的那一刻，利用拱门形成自然的画框，拍摄极简而富有禅意的构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从圣玛丽亚街（Rua de Santa Maria）中段俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，在这条斜坡街的中段找一个没有车辆阻挡的缺口，用中焦段镜头拍摄，前景是蜿蜒的古老街道和行人，中景是层层叠叠的红瓦屋顶，远景是大教堂的宏伟主体，层次无比丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`格拉·瓦斯科故居的窗口框景`}</h4>
                  <p className="text-sm text-gray-700">{`参观画家故居时，留意那些古老的石制窗框，以窗口为画框，拍摄窗外对面墙壁上斑驳的光影、攀缘的植物或一角邻居的屋顶，营造“画中有画”的意境。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`米塞里科迪亚教堂（Misericórdia）门前的台阶`}</h4>
                  <p className="text-sm text-gray-700">{`清晨，利用教堂前宽阔的台阶形成的引导线，将观众的视线引向台阶尽头色彩鲜艳的巴洛克风格教堂立面，对称构图显得庄严而宁静。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`阴天其实是拍摄古城街道和建筑细节的好时机，光线柔和均匀，没有浓重的阴影。进入教堂内部拍摄前，务必确认是否允许拍照（通常允许但禁用闪光灯和三脚架），并始终保持肃静。拍摄当地居民，尤其是老人和儿童时，一个微笑和事先的手势征询是基本的礼貌。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城墙内的石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在由16世纪贵族宅邸改建的民宿里，房间有裸露的原始石墙和木梁，清晨会被附近修道院的钟声和面包房的香味温柔唤醒，老板娘会为你准备丰盛的自制果酱早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`文艺复兴宫殿精品酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于直街（Rua Direita）上一座经过精心修复的文艺复兴时期宫殿内，公共区域保留着古老的拱顶和壁画，房间设施却极尽现代奢华，在酒店顶楼的小露台就能独享古城屋顶景观。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城外葡萄园中的设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`如果你驾车，不妨选择距离古城仅5分钟车程、坐落在自家葡萄园中的现代设计酒店，房间拥有全景落地窗和私人阳台，白天探索历史，晚上回归静谧，还能品尝酒店自产的优质葡萄酒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`火车站附近的实用公寓`}</h4>
                  <p className="text-sm text-purple-800">{`对于预算有限或乘坐巴士前来的旅行者，共和国广场附近有一些由老房子改造的公寓，性价比高，生活便利，步行5分钟即可进入古城核心区，晚上感受本地人夜生活的氛围。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（夏季和圣诞期间）建议提前至少一个月预订，尤其是古城内的特色住宿非常抢手。老城内的酒店大多由历史建筑改造，可能没有电梯，预订时最好确认。住在古城内，夜晚和清晨的体验是无价的，整个古城仿佛是你的私家花园。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开维塞乌许久，我脑海里最清晰的不是某个具体的建筑细节，而是一种整体的“感觉”。那是一种罕见的、未被过度打扰的宁静与完整。在这个一切都被加速、被商品化的时代，维塞乌像一位从容的长者，它不急着向你证明什么，也不屑于扮演一个符合所有旅游手册期待的“景点”。它只是在那里，过着自己的日子，而这份真实的、延续了千年的日常生活，恰恰成了它最动人的风景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了那些充斥着相同纪念品商店和喧嚣咖啡馆的“古镇”，如果你渴望的不仅是用眼睛看，更是用脚步去丈量时间的分量，用皮肤去感受石头的温度，用心灵去倾听一座城市缓慢而有力的心跳，那么，请来维塞乌。它不会用惊世骇俗的奇观轰炸你，但它会像一泓清泉，慢慢浸润你。它教会我们，真正的深度旅行，有时就是放下相机，在一张广场的长椅上坐很久，看光线的移动，看云影掠过教堂的尖顶，直到你也成为这幅千年画卷中，一个宁静的、幸福的注脚。这枚葡萄牙山巅的宝石，值得你为它专程绕一段路，它回馈给你的，将远不止几张照片，而是一种关于时间、历史与生活的，深沉而温暖的共鸣。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/mantua-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    曼
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">曼托瓦</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mantua</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ribe-denmark-oldest-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    里
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">里伯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ribe</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/spoleto" className="block group">
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
