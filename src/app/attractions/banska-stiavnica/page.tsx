import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '班斯卡-什佳夫尼察 Banská Štiavnica｜深藏山间的“白银之城”，一座活着的露天采矿博物馆 - 最佳欧洲景点',
  description: '车子在斯洛伐克中部连绵的火山群间盘旋，当你觉得山路快要穷尽时，一个山谷突然在眼前敞开。那第一眼的震撼，不是来自某座孤立的伟大建筑，而是一整幅活生生的、从山谷底部一直堆叠到两侧山脊的立体画卷——这就是班斯卡-什佳夫尼察。你闻到的是森林、湿石头和一点点从老房子木头缝隙里透出来的旧时光气息，而不是游客区的...',
}

export default function BanskaStiavnicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '班斯卡-什佳夫尼察', href: '/attractions/banska-stiavnica' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`班斯卡-什佳夫尼察・Banská Štiavnica・斯洛伐克・班斯卡-什佳夫尼察`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在斯洛伐克中部连绵的火山群间盘旋，当你觉得山路快要穷尽时，一个山谷突然在眼前敞开。那第一眼的震撼，不是来自某座孤立的伟大建筑，而是一整幅活生生的、从山谷底部一直堆叠到两侧山脊的立体画卷——这就是班斯卡-什佳夫尼察。你闻到的是森林、湿石头和一点点从老房子木头缝隙里透出来的旧时光气息，而不是游客区的香水味。耳朵里最先捕捉到的，是教堂悠远的钟声，混合着山泉潺潺流过古老石槽的叮咚，以及某条陡峭鹅卵石小径上，当地人拉着购物小拖车发出的轱辘声。这座城不是舞台布景，它依然在呼吸。
它的心跳，深埋在地下。表面上看，这是一座被时光温柔凝固的美丽山城，色彩柔和的联排住宅、戴着“洋葱帽”的教堂塔楼、爬满藤蔓的古老城墙，在阳光下像一块巨大的蜂蜜蛋糕。但只要你稍微留意，就会发现无处不在的“矿工密码”：街道以“矿工”、“熔炼”命名，广场中央矗立着圣芭芭拉（矿工的守护神）的雕像，许多建筑的大门上镌刻着铁镐、车轮或象征矿石的纹章。咖啡馆里坐着的老爷爷，很可能就是最后一代矿工，他们的手纹里或许还藏着洗不净的矿物痕迹。这里的魅力，在于这种双重性：地上是宁静、甚至有些慵懒的中欧小镇生活；地下却是一个长达数个世纪、深达数百米的轰轰烈烈的工业史诗。
最打动人的，是那种极致的和谐。当年的人们为了从地球深处攫取财富，没有粗暴地破坏这片土地，而是以惊人的智慧与之共舞。他们修建了复杂的“塔贾”（tajchy）系统——一系列人工蓄水池，像项链一样环绕群山，为矿井提供水力动力。这些水池如今成了泛着绿松石光泽的天然湖泊，是当地人游泳、垂钓的后花园。城市建筑沿着等高线蜿蜒，广场和街道顺应地形自然起伏，没有一条路是笔直僵硬的。走在其中，你感觉不到人造景观与自然景观的对抗，只感到一种历经磨难后达成的深刻谅解与融合。这座城本身，就是人类智慧面对自然挑战所谱写的一首坚韧而优美的诗。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在斯洛伐克中部连绵的火山群间盘旋，当你觉得山路快要穷尽时，一个山谷突然在眼前敞开。那第一眼的震撼，不是来自某座孤立的伟大建筑，而是一整幅活生生的、从山谷底部一直堆叠到两侧山脊的立体画卷——这就是班斯卡-什佳夫尼察。你闻到的是森林、湿石头和一点点从老房子木头缝隙里透出来的旧时光气息，而不是游客区的香水味。耳朵里最先捕捉到的，是教堂悠远的钟声，混合着山泉潺潺流过古老石槽的叮咚，以及某条陡峭鹅卵石小径上，当地人拉着购物小拖车发出的轱辘声。这座城不是舞台布景，它依然在呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的心跳，深埋在地下。表面上看，这是一座被时光温柔凝固的美丽山城，色彩柔和的联排住宅、戴着“洋葱帽”的教堂塔楼、爬满藤蔓的古老城墙，在阳光下像一块巨大的蜂蜜蛋糕。但只要你稍微留意，就会发现无处不在的“矿工密码”：街道以“矿工”、“熔炼”命名，广场中央矗立着圣芭芭拉（矿工的守护神）的雕像，许多建筑的大门上镌刻着铁镐、车轮或象征矿石的纹章。咖啡馆里坐着的老爷爷，很可能就是最后一代矿工，他们的手纹里或许还藏着洗不净的矿物痕迹。这里的魅力，在于这种双重性：地上是宁静、甚至有些慵懒的中欧小镇生活；地下却是一个长达数个世纪、深达数百米的轰轰烈烈的工业史诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种极致的和谐。当年的人们为了从地球深处攫取财富，没有粗暴地破坏这片土地，而是以惊人的智慧与之共舞。他们修建了复杂的“塔贾”（tajchy）系统——一系列人工蓄水池，像项链一样环绕群山，为矿井提供水力动力。这些水池如今成了泛着绿松石光泽的天然湖泊，是当地人游泳、垂钓的后花园。城市建筑沿着等高线蜿蜒，广场和街道顺应地形自然起伏，没有一条路是笔直僵硬的。走在其中，你感觉不到人造景观与自然景观的对抗，只感到一种历经磨难后达成的深刻谅解与融合。这座城本身，就是人类智慧面对自然挑战所谱写的一首坚韧而优美的诗。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`班斯卡-什佳夫尼察`} />
                <InfoRow label="英文名称" value={`Banská Štiavnica`} />
                <InfoRow label="正式名称" value={`Banská Štiavnica`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`班斯卡-什佳夫尼察`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪欧洲最重要的金银开采中心之一，其先进的采矿和水管理系统曾深刻影响全球矿业发展。`} />
                <InfoRow label="建筑特色" value={`一座完美融入陡峭山谷地形的城市，建筑随山势起伏，由众多采矿遗产、防御工事、文艺复兴与巴洛克豪宅构成独特天际线。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴和巴洛克风格为主，混合了哥特式的基础与古典主义的细节，整体呈现出因矿业财富而生的坚实、华丽又实用的山地城镇风格。`} />
                <InfoRow label="文化价值" value={`1993年被列入联合国教科文组织世界遗产名录，是技术与城市完美结合的杰出典范，保存了从中世纪到近代完整的矿业社会生态与记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身全天开放。主要景点如旧城堡（Old Castle）、新城堡（New Castle）、卡默霍夫庭院（Kammerhof）和地下矿井的开放时间各有不同，通常夏季（5月至9月）为9:00-17:00或18:00，冬季会缩短。矿井参观（如Glanzenberg Adit）必须跟随导览团，每日场次有限，强烈建议提前查询并预约。大多数室内博物馆周一闭馆。`} />
              <InfoRow label="门票价格" value={`古城免费漫步。单个景点门票约3-6欧元。联票（如包含新旧城堡）约8-10欧元。地下矿井导览游价格较高，约10-15欧元，包含安全装备租赁。学生、儿童及家庭有优惠。`} />
              <InfoRow label="地址" value={`Banská Štiavnica, 969 01, Slovakia`} />
              <InfoRow label="交通方式" value={`从布拉迪斯拉发出发：在布拉迪斯拉发中央车站乘坐火车至兹沃伦（Zvolen），约2.5小时，再换乘区域性火车或巴士前往班斯卡-什佳夫尼察，约1小时。总耗时约4小时。巴士也可从布拉迪斯拉发直达，但班次较少，约3.5-4小时车程。从科希策出发：火车或巴士需在兹沃伦或班斯卡-比斯特里察换乘，总耗时约3-4小时。最灵活的方式是自驾，沿着蜿蜒的山路驶入这座山谷之城，沿途风景如画。城内街道狭窄陡峭，建议将车停在城郊停车场，步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从12世纪说起。当时，这片位于Štiavnica火山群中的土地，地表就闪烁着诱人的金属光泽。最早的定居者——很可能是来自德意志的矿工（萨克斯人）——开始在此挖掘，他们发现了异常丰富的银矿，以及伴随而来的金、铜、铅。财富如泉水般涌出，国王们立刻注意到了这里。13世纪，匈牙利国王贝拉四世授予此地皇家自由采矿城市的特权，这就像一张空白支票，吸引了全欧洲最顶尖的矿工、工程师、商人和学者蜂拥而至。一座在深山中凭借技术实力“白手起家”的乌托邦，开始萌芽。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`黄金时代在15至16世纪达到顶峰。班斯卡-什佳夫尼察成为了匈牙利王国乃至中欧的财富引擎，其白银产量一度占据全球三分之一。巨大的财富不仅建造了华丽的教堂和市政厅，更催生了思想的飞跃。这里在1735年成立了世界上第一所矿业学院（后来发展为著名的米库拉什矿业学院），堪称那个时代的“麻省理工”。教授们不仅研究如何挖得更深、炼得更纯，还开创性地研究矿井通风、排水和矿物学。学院的老楼至今屹立在特里尼塔广场旁，厚重的石墙里仿佛仍回荡着当年学生们关于矿石成分的激烈辩论。知识，与金银一样，成为了这座城出口的珍贵产品。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，地下的故事从不缺少黑暗的章节。矿难、水患、战争，如同幽灵般缠绕着这座财富之城。最可怕的敌人是地下水。随着矿井越挖越深，地下水成为致命的威胁。于是，16至18世纪间，一代代工程师发挥天才般的想象力，建造了那个传奇的“塔贾”系统——超过60个人工水库，通过总长超过100公里的水渠和管道相连，利用水车驱动巨大的泵链，将地下水从数百米深处抽出。这套系统不仅是工程奇迹，更彻底改变了地貌，创造了新的湖泊生态系统。为了保卫财富，城市也在山顶修建了巍峨的城堡（新旧城堡），它们见证了无数次抵御外敌（特别是奥斯曼土耳其人）的烽火。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`财富总有耗尽的一天。19世纪后期，随着优质矿脉逐渐枯竭和国际银价波动，这座城市的矿业开始衰退。20世纪的两次世界大战和其后的政治变革，更让这座深山古城一度被边缘化，几乎被世人遗忘。但或许正是这种“被遗忘”，让它免遭大规模现代化改造的破坏。1993年，联合国教科文组织将整座城市及其周边采矿地貌列入世界遗产，如同一道护身符，也像一次迟来的加冕。今天，轰鸣的泵机早已停息，但深入矿井的巷道变成了探险课堂，当年的机械车间变成了博物馆，矿业学院的教室则迎接着来自世界各地的遗产保护学者。它从一座生产贵金属的城，转型为一座生产历史、知识与记忆的城。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排完整一天进行深度探索。上午九点左右抵达最佳，此时阳光正好洒满古城东侧，光线柔和，游客稀少。整体游览节奏应是“先高后低，先外后内”：首先登上制高点建立空间感，俯瞰全城布局；然后下山沉浸式漫步老城街道，感受日常生活脉搏；最后在下午参与最核心的地下矿井导览游，深入这座城市的心脏。这样的安排符合光线变化，也能将最震撼的体验留在最后。记得穿一双绝对舒适、适合长时间行走和攀爬陡坡的鞋子，因为这里的路，本身就是旅程的一部分。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`矿井导览非常热门且每团人数有限，务必提前至少一天在官网或游客中心预订。老城街道很多是陡峭的鹅卵石坡道，务必穿防滑舒适的鞋子，雨天尤其要小心。城内餐馆多为本地家庭经营，晚上打烊较早，计划晚餐要趁早。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一站直奔新城堡的观景塔，在晨光中360度俯瞰被群山和如翡翠串珠般的“塔贾”湖泊环绕的古城全景，看清它的骨骼肌理。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着蜿蜒的下坡小路走进老城中心，用手触摸圣三一广场上那根为纪念瘟疫结束而建的圣柱，感受石头的冰凉与历史的温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开矿业学院厚重的大门，在它静谧的巴洛克庭院和矿物学展览廊里，想象几个世纪前这里作为世界矿业知识心脏的繁忙景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在旧城堡的防御城墙上来回走一走，从垛口望出去，视野里是层层叠叠的红色屋顶和教堂尖塔，与远方森林覆盖的火山锥构成完美构图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要报名参加Glanzenberg矿井的导览，戴上矿工帽，跟着向导走进阴凉潮湿的巷道，亲手触摸岩壁上闪着银光的矿脉痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从一个隐秘的阶梯小巷钻出来，偶然发现一家本地人聚集的小酒馆，点一盘传统的“羊奶酪面疙瘩”，和邻桌退休老矿工碰个杯。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前散步到卡利瓦里亚山，沿着布满巴洛克小礼拜堂的苦路缓缓上行，这里不仅是宗教圣地，更是欣赏古城在金色夕阳中苏醒的绝佳位置。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`新城堡观景塔顶层西侧窗口`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一小时，光线侧射，能拍到老城建筑群层次分明的立体感和被拉长的温柔阴影，教堂塔楼成为画面焦点。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从旧城堡通往圣三一广场的阶梯小巷`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光直射时，利用狭窄巷道的纵深感，捕捉光影在古老石墙和凹凸不平的路面上切割出的戏剧性画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`卡默霍夫庭院（Kammerhof）的中庭拱廊`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光从天井直射而下，站在拱廊阴影中拍摄被阳光照亮的中心庭院和文艺复兴风格的连廊，几何感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“塔贾”之湖——波瓦兹斯卡·玛莎（Počúvadlo）湖畔`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，以平静如镜的湖面为前景，拍摄对岸山坡上灯火初亮的古城倒影，静谧而神秘。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用广角镜头可以更好地捕捉山城建筑的堆叠感和狭窄街道的纵深感。拍摄当地居民尤其是老人时，请务必先微笑示意并获得同意，他们通常很友好。矿井内部禁止使用闪光灯。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸`}</h4>
                  <p className="text-sm text-blue-800">{`下榻在由16世纪矿商豪宅改造的精品酒店，房间保留了原始的石头墙壁和粗大的木梁，晚上能听到古老木地板轻微的吱呀声，故事感十足。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`湖畔静谧`}</h4>
                  <p className="text-sm text-green-800">{`选择住在城外某个“塔贾”湖边的传统木屋民宿，清晨在鸟鸣和湖水的气息中醒来，可以游泳或划船，以最自然的方式体验矿业遗产的另一面。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`家庭温情`}</h4>
                  <p className="text-sm text-yellow-800">{`老城中心一栋色彩明快的公寓，房东老太太会为你准备好自制的果酱和新鲜面包，阳台正对着错落的屋顶和教堂钟楼，像住在明信片里。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计格调`}</h4>
                  <p className="text-sm text-purple-800">{`由旧矿业办公楼改建的现代设计酒店，将工业风的粗犷与斯洛伐克当代艺术结合，住在其中能感受到这座城市从工业到文化设计的传承脉络。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和秋季（9月矿业节期间）住宿非常紧张，必须提前数月预订。老城内的住宿需要爬坡，携带大件行李会是个挑战，预订时请确认酒店是否提供搬运服务或有无电梯。住在城外湖区虽然安静，但晚上进入老城就餐需要短途驾车或打车。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开班斯卡-什佳夫尼察时，你带走的可能不是某件具体的纪念品，而是一种复杂的、沉甸甸的感觉。它不像那些只供仰望的宫殿或教堂，它更像一位历经沧桑、双手布满老茧却眼神依然清亮的智者。他曾经富可敌国，也曾跌落尘埃；他精通最艰深的工程技术，也懂得如何与山川湖泊温柔共处。他告诉你，真正的遗产不是冻结在玻璃柜里的金银，而是一整套人类如何利用智慧、付出汗水、承受苦难，并最终与自然环境达成某种持久平衡的生存哲学。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快餐式体验的世界里，这样一座城市显得如此不合时宜，却又如此珍贵。它要求你慢下来，用脚去丈量每一段陡坡，用心去想象脚下百米深处的黑暗与辉煌。它没有炫目的网红打卡点，它的震撼需要你在新旧城堡之间徒步的喘息中，在矿井深处戴着安全帽聆听滴水声的寂静里，在本地酒馆听着听不懂却充满韵律的斯洛伐克语聊天声中，自己去慢慢领悟。对于热爱深度游的旅人而言，班斯卡-什佳夫尼察是一次“反消费主义”的朝圣——它不售卖肤浅的快乐，只提供一次与一段坚韧、聪明、完整的人类文明史诗深度对话的机会。这趟旅程，足以重塑你对“财富”与“遗产”的定义。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/banska-bystrica-leaning-clock-tower-square" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    班
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">班斯卡-比斯特里察老城广场与倾斜钟塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Banská Bystrica Old Town Square & Leaning Clock Tower</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trnava-slovak-rome" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特尔纳瓦（斯洛伐克的小罗马）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trnava</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trencin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特伦钦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trenčín Castle</p>
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
