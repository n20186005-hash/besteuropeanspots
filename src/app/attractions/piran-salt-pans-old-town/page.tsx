import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '皮兰盐田与老城 Piran Salt Pans & Old Town｜亚得里亚海畔的“白色黄金”与红瓦童话 - 最佳欧洲景点',
  description: '第一眼看见皮兰，你会误以为闯进了一幅被海水浸湿的威尼斯画派作品。车子还没停稳，那一抹铺天盖地的、带着金属质感的亚得里亚海蓝，就和老城里密密匝匝、被夕阳烤成焦糖色的红瓦屋顶一起，蛮横地占据了所有视线。海风的味道是复杂的，咸腥里混着岸边餐厅飘来的煎鱼香气，还有一丝隐隐的、干净的矿物质气息——那便是从城市...',
}

export default function PiranSaltPansOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '皮兰盐田与老城', href: '/attractions/piran-salt-pans-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`皮兰盐田与老城・Piran Salt Pans & Old Town・斯洛文尼亚・皮兰`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看见皮兰，你会误以为闯进了一幅被海水浸湿的威尼斯画派作品。车子还没停稳，那一抹铺天盖地的、带着金属质感的亚得里亚海蓝，就和老城里密密匝匝、被夕阳烤成焦糖色的红瓦屋顶一起，蛮横地占据了所有视线。海风的味道是复杂的，咸腥里混着岸边餐厅飘来的煎鱼香气，还有一丝隐隐的、干净的矿物质气息——那便是从城市边缘那片广阔的盐田飘来的、属于这片土地最原始的记忆。老城没有车马的喧嚣，只有石板路上回荡的脚步声、咖啡馆杯碟的轻碰、和远处海鸥拖长了调的鸣叫。当地人拎着篮子不紧不慢地走着，仿佛时间在这里被海盐腌制过，流淌得格外缓慢。
走进那迷宫般的巷子，房子挨得极近，几乎能在二楼和对面阳台的邻居握手。晾晒的衣物在狭窄的天井上空像彩旗般飘荡，窗台上总有盛放的天竺葵。每一个转角都可能撞见一片微缩的广场，或者一扇雕刻着狮子的石门——那是威尼斯统治留下的“飞狮”标记，提醒着你这里曾是一座海上帝国的重要前哨。生活的烟火气与厚重的历史在这里没有界限，你看到的不只是一个旅游景点，而是一个仍然在盐的韵律中呼吸的鲜活社区。
而当你走到城市西南的边缘，景象陡然开阔。一片近乎超现实的景观在你眼前展开：那是塞切夫列盐田。它不像你想象中的任何工业区，反而像一块巨大的、被精心划分的调色板。赭石色的泥土堤坝将水面切割成无数个矩形镜面，映照着流云和天空。浅水区是淡淡的粉绿，深水区则是沉静的蔚蓝，而在结晶池的边缘，已经开始堆积起雪白的盐山。这里安静得只能听到风声、水鸟的扑翅声和偶尔的虫鸣。与热闹的老城相比，这里是另一种神圣的寂静，一种关于等待、结晶和收获的沉默仪式。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一眼看见皮兰，你会误以为闯进了一幅被海水浸湿的威尼斯画派作品。车子还没停稳，那一抹铺天盖地的、带着金属质感的亚得里亚海蓝，就和老城里密密匝匝、被夕阳烤成焦糖色的红瓦屋顶一起，蛮横地占据了所有视线。海风的味道是复杂的，咸腥里混着岸边餐厅飘来的煎鱼香气，还有一丝隐隐的、干净的矿物质气息——那便是从城市边缘那片广阔的盐田飘来的、属于这片土地最原始的记忆。老城没有车马的喧嚣，只有石板路上回荡的脚步声、咖啡馆杯碟的轻碰、和远处海鸥拖长了调的鸣叫。当地人拎着篮子不紧不慢地走着，仿佛时间在这里被海盐腌制过，流淌得格外缓慢。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进那迷宫般的巷子，房子挨得极近，几乎能在二楼和对面阳台的邻居握手。晾晒的衣物在狭窄的天井上空像彩旗般飘荡，窗台上总有盛放的天竺葵。每一个转角都可能撞见一片微缩的广场，或者一扇雕刻着狮子的石门——那是威尼斯统治留下的“飞狮”标记，提醒着你这里曾是一座海上帝国的重要前哨。生活的烟火气与厚重的历史在这里没有界限，你看到的不只是一个旅游景点，而是一个仍然在盐的韵律中呼吸的鲜活社区。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而当你走到城市西南的边缘，景象陡然开阔。一片近乎超现实的景观在你眼前展开：那是塞切夫列盐田。它不像你想象中的任何工业区，反而像一块巨大的、被精心划分的调色板。赭石色的泥土堤坝将水面切割成无数个矩形镜面，映照着流云和天空。浅水区是淡淡的粉绿，深水区则是沉静的蔚蓝，而在结晶池的边缘，已经开始堆积起雪白的盐山。这里安静得只能听到风声、水鸟的扑翅声和偶尔的虫鸣。与热闹的老城相比，这里是另一种神圣的寂静，一种关于等待、结晶和收获的沉默仪式。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`皮兰盐田与老城`} />
                <InfoRow label="英文名称" value={`Piran Salt Pans & Old Town`} />
                <InfoRow label="正式名称" value={`皮兰盐田与皮兰历史中心`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`皮兰`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是亚得里亚海北岸保存最完好的中世纪盐业城镇之一，其盐田七百余年的持续生产见证了“白色黄金”如何塑造了整个伊斯特拉半岛的政治、经济与文化格局。`} />
                <InfoRow label="建筑特色" value={`老城是威尼斯哥特式建筑的露天博物馆，紧凑的街道、高耸的钟楼与红瓦屋顶层层叠叠拥向大海；而盐田则是一片由阳光、海水、泥土和古老水渠构成的巨大几何抽象画。`} />
                <InfoRow label="建筑风格" value={`皮兰老城：威尼斯共和国时期哥特式与文艺复兴风格为主导。盐田设施：古朴实用的功能性产业景观。`} />
                <InfoRow label="文化价值" value={`它不仅是风景明信片，更是一部活着的盐业史诗，将自然馈赠、手工技艺、社区传统与可持续生态观完美融合，定义了斯洛文尼亚人与海洋的独特联结。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`盐田户外区域（塞切夫列盐田自然公园）全天24小时开放，游客中心和导览体验的开放时间为每年4月至10月，每日上午9点至下午6点；11月至次年3月周末及节假日开放，时间为上午10点至下午4点，工作日需提前预约。皮兰老城街道与城墙全天可自由漫步，但主要建筑如圣乔治教堂、皮兰城墙塔楼的开放时间一般为夏季（5-9月）9:00-20:00，冬季（10-4月）10:00-17:00，周一可能闭馆或缩短时间。`} />
              <InfoRow label="门票价格" value={`进入皮兰老城及在海滨漫步免费。皮兰城墙塔楼门票约3欧元。圣乔治教堂免费进入，登塔楼约2欧元。塞切夫列盐田自然公园游客中心门票（含小型展览）约5欧元，专业导览游（含盐田步行与制盐工艺讲解）约15-25欧元/人。有家庭套票及学生、老年优惠票。`} />
              <InfoRow label="地址" value={`Secovlje Salina Nature Park, Seča 115, 6320 Portorož, Slovenia (盐田)
以及 Piran Old Town, 6330 Piran, Slovenia (老城)`} />
              <InfoRow label="交通方式" value={`最近的国际机场是意大利的里雅斯特机场或克罗地亚的普拉机场，但最方便的是从斯洛文尼亚首都卢布尔雅那出发。从卢布尔雅那汽车站乘坐长途巴士直达皮兰，车程约2.5小时，班次频繁（每小时至少一班），是性价比最高的选择。如果自驾，沿A1高速公路向科佩尔方向，再转地方公路至皮兰，老城内停车极其困难且昂贵，强烈建议将车停在城外的“Forange”大型停车场，然后步行10分钟进城或搭乘接驳小巴。从皮兰中心步行至盐田约需40-50分钟，也可在皮兰码头附近乘坐季节性运营的前往盐田公园的观光小火车或租用自行车。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`皮兰的故事，几乎就是一部用盐写成的编年史。早在古罗马时期，人们就知晓这片浅海湾出产优质海盐。但真正的传奇始于公元13世纪，当威尼斯共和国的目光投向这个战略要地。他们不仅带来了坚固的城墙和圣乔治教堂的雏形，更系统地开发了盐田。对于威尼斯这个海洋商业帝国来说，盐远不止是调味品，它是保存食物、进行远洋贸易、甚至支付军饷的“白色黄金”，是权力的基石。皮兰的盐，通过威尼斯的商船，运往整个地中海乃至更远的内陆。那段时期，皮兰的城市布局被深深打上了威尼斯的烙印，狭长的房屋为了争取更多阳光和空间而向上生长，形成了如今我们看到的天际线。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`盐田的运作，依赖一套传承了数个世纪的智慧体系。工人们，被称为“萨尔内尔”，他们家族世代以此为生。他们懂得如何引导海水，利用阳光和风进行自然蒸发，在不同的池子间移动卤水，直至盐的晶体在最后一个池中如雪花般析出。这是一门需要耐心和精准观察自然节奏的艺术。盐田不仅仅是一个生产场所，它更是一个独立的、自给自足的生态系统。堤坝上生长着特殊的耐盐植物，水池中栖息着各种鱼类和水鸟，其中不乏珍稀品种。盐工们与这片土地和其中的生物形成了一种默契的共生关系。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的风浪从未停歇。随着威尼斯共和国的衰落，皮兰及其盐田先后被奥匈帝国、意大利等国统治。上世纪南斯拉夫时期，大规模的工业化盐业生产曾一度威胁到古老的盐田生态。幸运的是，当地人的记忆和坚持没有让传统彻底消失。1990年斯洛文尼亚独立后，人们做出了一个充满远见的决定：将塞切夫列盐田的一部分划为自然公园，并恢复了传统的手工制盐方法。这不仅保护了独特的湿地生态和鸟类栖息地，也让“萨尔内尔”的技艺得以重生。如今，这里产出的“皮兰海盐”成为了顶级厨师和美食家追捧的珍贵特产，它的味道里，有阳光，有海风，更有时间的厚度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天漫步在皮兰，你会感受到这种历史的层层叠加。老城广场上塔尔蒂尼的雕像（这位巴洛克音乐大师出生于此）诉说着艺术的传承，而海风中永恒的咸味，则连接着从古罗马、威尼斯商人到现代盐工的所有故事。皮兰没有将它的历史封存在博物馆里，而是让它继续在阳光下、在海水中、在每一粒结晶的盐里，静静地呼吸和生长。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一整天的时间，以“从自然到人文，从宁静到繁华”的节奏深度体验皮兰。最佳安排是清晨（8点前）先从盐田开始，这时光线柔和，游客罕至，能听到最纯粹的自然之声，观看晨光在盐池上的魔术。在盐田游览约2-3小时后，沿着海滨步道缓缓步行返回皮兰老城（约中午时分），正好赶上老城的苏醒和午餐时间。下午专注探索迷宫般的老城巷陌、广场和登上制高点。傍晚则留给城墙或海滨，欣赏亚得里亚海的日落将一切染成金色。这样的路线避开了盐田最晒的时候，也完美衔接了老城从午间活力到黄昏浪漫的不同面貌。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季中午阳光非常强烈，盐田地区几乎无遮荫，务必准备足量饮水、防晒霜和遮阳帽。老城石板路多坡道和台阶，请务必穿一双绝对舒适防滑的鞋子。在餐厅点餐时，如果看到菜单上有用“皮兰盐”调味的菜肴或本地橄榄油，一定要尝试，那是风土的精华。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着清晨的薄雾尚未散尽，从皮兰步行或骑车前往塞切夫列盐田自然公园的入口，让旷野的宁静和鸟鸣成为今天的第一声问候。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随公园的木栈道深入盐田腹地，仔细观察水色的微妙变化，寻找在结晶池边缘那些如同初雪般堆积的洁白石盐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在盐田博物馆小屋听听老盐工讲述如何仅凭手指尝水来判断盐度，感受那份传承了几个世纪的、与自然对话的直觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着风景如画的海岸小径漫步回皮兰，看蔚蓝的海水逐渐与老城的红瓦轮廓线融为一体。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进皮兰老城犹如毛细血管般的一人巷，任由自己迷失，用指尖触碰那些被海风侵蚀得温润的石墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在塔尔蒂尼广场的露天咖啡馆坐下，点一杯浓咖啡，看着孩子们追着鸽子，仿佛自己也成了这个舞台剧的临时演员。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀上圣乔治教堂的钟楼，让自己沐浴在亚得里亚海的猎猎风声中，360度环视脚下如积木般的屋顶、蜿蜒的海岸线和远方无际的深蓝。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前一定要走到皮兰城墙的北段，找一块古老的石头坐下，看夕阳把整个盐田、老城和海面浇铸成一块流动的、温暖的琥珀。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`皮兰城墙顶端向北拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`日落前半小时，以绵延的盐田几何图形为前景，远方层叠的老城建筑和钟楼为中景，亚得里亚海的深邃蓝色为背景，构图极具层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣乔治教堂钟楼俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或午后，利用钟楼的拱形窗框作为天然画框，捕捉下方塔尔蒂尼广场上如蚂蚁般微小的人和色彩鲜艳的阳伞，营造故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`盐田木栈道特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午九十点侧光最佳，蹲下身子，贴近水面拍摄盐池中完美的天空倒影与结晶盐的细腻纹理，形成虚实结合的抽象画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`穆贾拉纳角的海岸转角`}</h4>
                  <p className="text-sm text-gray-700">{`从皮兰老城走向盐田的半途，有一处突出的海岬，在此可以长焦镜头压缩空间，拍出红瓦房屋层层叠叠、紧紧拥抱海岸线的经典明信片角度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城巷弄的光影游戏`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，寻找那些极窄的巷子，捕捉阳光在两侧高墙之间劈下的一道锐利光柱，以及被照亮的一小片斑驳石板路面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在盐田自然公园内拍摄时，请务必留在指定的木栈道上，不要为了取景踏入盐池或堤坝，以免破坏脆弱的生态环境和古老的作业系统。使用无人机前，务必查清当地法规，老城和自然保护区常有飞行限制。尊重当地人隐私，避免直接拍摄居民在自家阳台或窗口的生活场景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城心脏位置`}</h4>
                  <p className="text-sm text-blue-800">{`选择一间由古老石屋改造的精品公寓，屋顶露台就正对着圣乔治教堂的钟楼，夜晚枕着海浪声入睡，清晨在教堂钟声和海鸥的合唱中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`港口边的设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于皮兰城门附近，拥有直面港湾的落地窗，你可以看着五彩的渔船随着波浪轻轻摇摆，享受现代舒适与古老港口的无缝衔接。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐秘的盐田边缘民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`住在盐田自然公园附近的宁静村庄，独享推窗即是广阔盐田与满天星斗的私密体验，主人常会奉上用自家采收的盐和香草准备的传统早餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`波尔多罗什的舒适度假村`}</h4>
                  <p className="text-sm text-purple-800">{`如果追求更多休闲设施（如泳池、SPA），可以选择毗邻皮兰的波尔多罗什镇，这里酒店选择更多，乘坐频繁的本地巴士只需10分钟便可抵达皮兰老城。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`皮兰老城内的住宿房间通常不大，且可能没有电梯，但胜在位置无与伦比和独特的历史氛围。夏季（7-8月）务必提前数月预订。如果想要夜生活相对丰富和就餐选择更多，住在波尔多罗什是更实用的选择，但会少一些中世纪古城沉浸感。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开皮兰许久后，我发现自己最怀念的，不是某一张惊艳的照片，也不是某一道美味的海鲜，而是一种整体的“感觉”。那是一种由盐的洁净、海的辽阔、石的坚实和历史的沉淀混合而成的、令人心安的踏实感。在这个一切都被加速、被数字化的时代，皮兰和它的盐田依然固执地遵循着古老的节律：阳光蒸发海水，时间结晶出盐。这是一种慢到极致的生产力，却生产出了最纯粹的滋味和最持久的生命力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它教会旅人的，或许正是一种“深度”的视角。来到这里，你不仅仅是在看风景，你是在阅读一部关于人类如何与自然协作、如何依靠耐心和智慧生存的活态教科书。每一粒皮兰盐，都是一个微缩的宇宙，包含了阳光、海风、时间和人的故事。所以，当你在世界的某个角落，再次尝到一丝海盐的咸味时，你可能会恍惚想起亚得里亚海那个红瓦的小城，想起那片天地之间巨大的镜子，想起有一种生活，可以如盐般结晶，简单，却蕴含了整个海洋。这，正是深度旅行所能馈赠的最珍贵的礼物——一种与大地、与过往、与自己内心重新连接的可能。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
