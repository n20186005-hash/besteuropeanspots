import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯波莱托旅游攻略：悬崖上的中世纪小镇，一份避开人潮的深度自由行指南',
  description: '探索意大利翁布里亚的隐秘瑰宝斯波莱托(Spoleto)。本攻略涵盖深度游路线、古罗马剧场与城堡打卡、交通门票及避坑指南，带你发现托斯卡纳之外的宁静之美。',
}

export default function SpoletoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯波莱托', href: '/attractions/spoleto' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯波莱托・Spoleto・意大利・斯波莱托`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，如果你觉得托斯卡纳已经过于热闹，想找一个同样充满中世纪魔力、却依旧保持着从容本地节奏的山城，那么，今天这份斯波莱托私藏旅游攻略，就是为你准备的。它不在常规的罗马-佛罗伦萨-威尼斯主线上，却像一颗被时光仔细包裹的琥珀，悬在翁布里亚绿色的山丘之间。盘旋而上的山路尽头，石头房子层层叠叠，直到一座恢弘的城堡（罗卡城堡）矗立在悬崖之巅，用目光守护着整个山谷。这里不仅有震撼的古罗马剧场、藏着艺术珍宝的大教堂，更有一种让人瞬间慢下来的生活气。作为你的专属向导，这份自由行指南将带你躲开旅行团的人潮，像当地人一样，在石板小巷里迷路，在广场上喝一杯Espresso，真正触摸到“意大利的绿色心脏”的灵魂。准备好，我们要深入这座悬崖上的舞台了。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "嘿，朋友，如果你觉得托斯卡纳已经过于热闹，想找一个同样充满中世纪魔力、却依旧保持着从容本地节奏的山城，那么，今天这份斯波莱托私藏旅游攻略，就是为你准备的。它不在常规的罗马-佛罗伦萨-威尼斯主线上，却像一颗被时光仔细包裹的琥珀，悬在翁布里亚绿色的山丘之间。盘旋而上的山路尽头，石头房子层层叠叠，直到一座恢弘的城堡（罗卡城堡）矗立在悬崖之巅，用目光守护着整个山谷。这里不仅有震撼的古罗马剧场、藏着艺术珍宝的大教堂，更有一种让人瞬间慢下来的生活气。作为你的专属向导，这份自由行指南将带你躲开旅行团的人潮，像当地人一样，在石板小巷里迷路，在广场上喝一杯Espresso，真正触摸到“意大利的绿色心脏”的灵魂。准备好，我们要深入这座悬崖上的舞台了。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯波莱托`} />
                <InfoRow label="英文名称" value={`Spoleto`} />
                <InfoRow label="正式名称" value={`Spoleto`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`斯波莱托`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯波莱托的历史分量，远比你第一眼看到的宁静小镇要沉重得多。早在公元前3世纪，它就是古罗马重要的战略前哨，那条著名的弗拉米尼亚大道就从附近穿过。想象一下，汉尼拔率领的迦太基大军所向披靡，却在斯波莱托城下被顽强阻挡，未能北上——这座山城，曾是改变欧洲历史进程的一个微小却关键的阻力点。进入中世纪，它的地位不降反升，成为了强大的“斯波莱托公爵领地”的首府，这个公国曾统治着意大利中部大片土地，是伦巴第人势力在半岛上的重要支点。即便是后来归入教皇国，它依然是教皇们青睐的坚固堡垒和夏宫所在地。可以说，斯波莱托的每一块石头，都浸染着从罗马帝国、伦巴第王国到教皇国的权力更迭印记，它不是什么边陲小镇，而是曾站在历史聚光灯下的中心舞台之一。这份厚重的过往，正是它与那些单纯“风景优美”的小镇最本质的区别。`} />
                <InfoRow label="建筑特色" value={`斯波莱托的建筑是一场从山脚到山顶的、用石头写成的视觉史诗。最夺目的莫过于雄踞山顶的**罗卡城堡**。它并非精致宫殿，而是座充满雄浑力量的庞然大物。巨大的砖石墙体呈不规则的多边形，随着山势起伏，颜色是经历了数百年风雨后的、温暖而沉静的赭石色与灰褐色。那座标志性的八角形主塔楼，像一柄石剑直插天空，墙体厚实得仿佛能抵御任何世纪的炮火。从山下仰望，它威严、冷峻，充满压迫感。但当你穿过吊桥进入内部，庭院和房间却有着出乎意料的匀称比例与文艺复兴式的优雅拱廊，这种外刚内柔的对比极具戏剧性。与之呼应的是山腰的**斯波莱托大教堂**，它的立面是另一种美学：乳白色的大理石在阳光下近乎发光，中央巨大的玫瑰窗像一轮瑰丽的太阳，下方门楣上的拜占庭风格马赛克镶嵌画（《基督为圣母加冕》）则以金色和深蓝色闪烁着一丝神秘东方的余韵。粗粝的城堡与精美的大教堂，共同勾勒出斯波莱托刚柔并济的天际线。`} />
                <InfoRow label="建筑风格" value={`在这里，你看到的是建筑风格的“层叠蛋糕”。最底层是**古罗马式**的实用与坚固，**古罗马剧场**的弧形观众席由巨大的石灰华石块砌成，不用一丝灰泥，完全依靠精准的切割和重力垒叠，历经两千年依然稳固，这种力量感是罗马工程的灵魂。往上走，**罗曼式（罗马式）** 风格开始展现，比如大教堂最初的结构和城内一些教堂，特点是厚重的墙体、小窗和半圆拱，给人一种沉稳、受庇护的感觉。而大教堂的立面与内部，则华丽地转向了**哥特式**的轻灵——看那高耸的、带有尖拱的侧廊，以及那些试图引向天堂的垂直线条。但意大利的哥特式总是比北方的更克制，装饰更为优雅，与本地罗曼式传统融合。至于**文艺复兴**与后来的修饰，则体现在城堡内部庭院规整的拱廊、以及一些宫殿立面的对称设计上。斯波莱托的建筑风格不是单一的教科书范例，而是一部活生生的、从公元前的罗马到中世纪再到文艺复兴的“建筑史现场教学”，各种风格和谐共存，共同抵御着时间的风蚀。`} />
                <InfoRow label="文化价值" value={`对于现代意大利乃至世界，斯波莱托的文化价值有一个响亮的名字：“**斯波莱托音乐节**”（Festival dei Due Mondi）。自1958年由作曲家吉安·卡洛·梅诺蒂创立以来，这个每年夏季举办的国际艺术节彻底改变了小镇的命运与气质。它最初旨在连接欧洲（旧世界）与美洲（新世界）的艺术，如今已成为歌剧、戏剧、舞蹈、音乐和视觉艺术的顶级盛会。音乐节期间，古老的罗马剧场、教堂庭院、广场都变身为舞台，古典艺术在最厚重的历史布景中焕发新生。这意味着，斯波莱托不仅是“历史的容器”，更是“活着的艺术现场”。平日里，它的文化价值则沉淀在日常生活中：本地人依然坚守着午休（riposo）传统，店铺下午会关门数小时；家族经营的餐馆数十年如一日地做着传统的翁布里亚菜；老人们坐在广场长椅上聊天，时光仿佛被山峦挽留。它向世界证明，深厚的历史底蕴与充满活力的当代艺术创作可以完美共生，而一种不紧不慢、注重生活品质与社区联系的生活方式，才是对抗全球同质化最宝贵的文化遗产。`} />
              </div>
            </div>
            
          </Section>

          <Section title={`3. 斯波莱托经典一日游路线与深度打卡攻略`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`从古罗马到中世纪：步行串联核心景点路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的向导，我设计的这条路线，能让你在一天内高效且深入地感受斯波莱托的精华，而且巧妙地利用地势，大部分时间是下坡路，省力又顺心。**上午**，我们从山脚的**古罗马剧场**开始，这时阳光正好照亮整个观众席，想象当年戏剧上演的热闹。接着，沿着古老的石板路“Via dell‘Arringo”缓缓上行，很快就会到达核心——**斯波莱托大教堂广场**。先在广场边的咖啡馆坐下，喝杯咖啡，看看当地人，然后静静参观教堂内部，别忘了抬头看菲利波·利皮的湿壁画穹顶。**中午**，就在教堂广场附近找一家餐厅，品尝翁布里亚特色菜，比如配黑松露的意面。**下午**，重头戏来了：前往附近的**庞塔尼拱门**（一座令人惊叹的罗马高架引水桥），然后乘坐**缆车**上山（这是必体验！轻松省力且风景绝佳）。出缆车站就是**罗卡城堡**，花时间探索这座庞然大物，并一定要走到城堡后面的露台，那里有俯瞰整个翁布里亚山谷的、令人屏息的270度全景。最后，沿着宁静的**古城墙步道**慢慢散步下山，在柔和的黄昏光线中结束完美的一天。这条路线串联了历史、艺术、工程奇迹和无敌景观，是自由行探索斯波莱托的黄金动线。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>大教堂广场的晨光与雨声</strong>：清晨，当游客还未涌入，独自站在大教堂广场上。阳光从东侧洒过来，将教堂那面乳白色镶嵌着玫瑰窗的立面染成蜂蜜色。此时格外安静，只能听到广场边老式石头喷泉的潺潺水声，以及不知哪扇窗后传来的细微咖啡机蒸汽声。转过身，看看广场另一侧建于14世纪的市政厅，它的凉廊下空无一人，光影在石柱间切割出几何形状。这个瞬间，你会感觉整个中世纪小镇刚刚苏醒，只为你一人展示它最宁静、最本真的模样。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>庞塔尼拱门的“巨人步伐”</strong>：走近这座罗马时代的巨型高架引水桥，你会被它的尺度震撼。高达80米的桥体由粗糙的石灰华巨石垒成，巨大的拱门一个接一个，像是神话中巨人留下的足迹。站在最下方的拱门内抬头望，石壁斑驳，缝隙里长出了顽强的野草和小树。最奇妙的是，如今桥顶是一条步道，当你走上去，两侧是空旷的山谷风，脚下是2000年前罗马工程师的杰作，那种跨越时空的眩晕感无比强烈。这里是拍摄城堡与小镇全景的绝佳角度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>城堡塔楼的无敌视野</strong>：进入罗卡城堡，一定要登上那座八角形的主塔楼。旋转的石阶狭窄而昏暗，但到达顶端的一刻，豁然开朗。360度的全景像巨幅画卷展开：近处是错落的红瓦屋顶和教堂钟楼，中间是如绿色天鹅绒般铺开的翁布里亚丘陵，田野被树篱和道路分割成不规则的拼图，远处亚平宁山脉的轮廓在淡蓝色的雾气中若隐若现。你可以清晰地辨认出上午去过的古罗马剧场、大教堂，以及那条蜿蜒的缆车线。风很大，吹走了所有杂音，只剩下天地与你，这是斯波莱托给你的、最具统治感的礼物。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "4.  <strong>圣彼得罗教堂门外的神秘浮雕</strong>：在通往城堡的小路旁，不要错过略显隐秘的<strong>圣彼得罗教堂</strong>。它的外墙本身就是一座露天博物馆，布满了11-12世纪罗曼式风格的浮雕。仔细看那些已磨损却依然生动的形象：有神话中的野兽、圣经场景、日常生活片段。最吸引人的是它们原始而略带笨拙的雕刻手法，充满中世纪工匠天马行空的想象力，与后来文艺复兴的精准写实截然不同。触摸这些冰凉的、被岁月打磨光滑的石刻，仿佛能直接与近千年前的艺术心灵对话。" }} />
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1.  <strong>时间选择是王道</strong>：首要避坑点就是时间。<strong>务必避开六月底至七月中下旬的斯波莱托音乐节期间</strong>！这段时间酒店价格飞涨且一房难求，小镇挤满来自全球的游客和艺术家，完全失去了平日的宁静。最佳游览时间是<strong>春季（4-5月）和秋季（9-10月）</strong>，天气宜人，山色翠绿或金黄。夏季白天较热，但早晚凉爽。很多小型博物馆和教堂周一闭馆，出发前务必确认。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "2.  <strong>穿对鞋子，善用缆车</strong>：斯波莱托是山城，全程都是上上下下的石板路和台阶。<strong>一双舒适、防滑的步行鞋是最高优先级</strong>，高跟鞋或硬底鞋会让你痛苦不堪。虽然我推荐的路线是下坡为主，但如果你从城堡步行下山，对膝盖有一定压力。<strong>缆车是你的好朋友</strong>！单程票不贵，连接了市中心（Piazza della Libertà）和城堡区（Rocca），不仅能节省大量体力，还能在空中欣赏风景，强烈建议至少乘坐一次。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "3.  <strong>应对“意大利节奏”</strong>：翁布里亚的生活节奏很慢。大多数商店、甚至一些小型景点，在下午<strong>1:30至4:00之间会关门午休</strong>。规划行程时，请将午餐和休息安排在这个时间段。晚餐通常<strong>晚上7:30甚至8点才开始</strong>，去早了餐馆可能还没准备好。随身带一瓶水，因为寻找一直在营业的便利店可能不如在大城市方便。保持耐心，融入这种缓慢的节奏，本身就是体验的一部分。" }} />
            </div>
          </Section>

          <Section title={`6. 斯波莱托住宿与美食全攻略：住在风景里，吃在故事中`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "想在斯波莱托获得沉浸式体验，我强烈推荐住在<strong>古城内的历史建筑改造的酒店或民宿</strong>。比如位于大教堂广场附近的“Hotel Charleston”，由古老的修道院改建，房间保留着石拱顶，部分房间开窗就是大教堂的侧影，地理位置绝佳。如果追求更独特的体验，可以寻找城堡附近的住处，醒来就能独享山谷晨曦。餐饮方面，翁布里亚是“黑松露之乡”和优质橄榄油、葡萄酒产区。<strong>餐厅推荐</strong>：“Apollinare”餐厅，位于一座古老的教堂内，氛围独特，提供精致的现代翁布里亚菜。“Il Tartufo”则是品尝各种松露菜肴（如松露意面、炒蛋）的绝佳选择，味道浓郁正宗。不必追求米其林，很多家庭经营的小馆子（Trattoria）如“La Barcaccia”，提供朴实无华却充满家传风味的烤乳猪（Porchetta）、野猪肉酱意面（Pappardelle al Cinghiale）和扁豆炖肠（Lenticchie con salsicce）。记得点一杯本地的萨格兰蒂诺（Sagrantino）红葡萄酒，它醇厚有力，是翁布里亚的骄傲。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果你有多一天时间，斯波莱托是探索翁布里亚“绿色心脏”的完美基地。强烈推荐两个方向：<strong>一是“美食圣地”诺尔恰</strong>（Norcia，车程约1小时）。这座被群山环绕的小镇是意大利猪肉制品和黑松露的顶级产区，整条街都是售卖火腿、香肠、奶酪的店铺（Norcineria），空气中都弥漫着诱人的香气，简直是肉食爱好者的天堂。<strong>二是“翁布里亚的明珠”托迪</strong>（Todi，车程约40分钟）。这座位于另一座山巅的小镇，以其完美对称的主广场、令人惊叹的文艺复兴教堂圣母安康教堂而闻名，风景壮丽且游客相对较少，艺术气息浓厚。两者都与斯波莱托风格迥异，却能让你更深刻地理解翁布里亚大区丰富多元的历史与风土。" }} />
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "斯波莱托的灵魂，在于那种“悬崖上的从容”。它曾手握权柄，见证烽烟，如今却安然于群山怀抱，将磅礴的历史化作每日钟声里的日常，在艺术节的华彩与寻常巷陌的咖啡香之间，找到了最自在的平衡。这里没有取悦游客的喧嚣，只有时光本身厚重而温暖的质感。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/volterra-etruscan-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔泰拉伊特鲁里亚遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Volterra Etruscan Ruins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/caltagirone-ceramic-stairs" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡尔塔吉罗内</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Caltagirone</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cascata-delle-marmore" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔莫雷瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cascata delle Marmore</p>
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
