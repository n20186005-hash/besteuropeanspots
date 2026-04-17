import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '坎彭汉萨老城 Kampen Hanseatic Old Town｜漫步于未被游客淹没的“活”中世纪贸易心脏 - 最佳欧洲景点',
  description: '走下坎彭火车站的站台，穿过那座横跨艾瑟尔河老支流的小桥，时间仿佛“咔嗒”一声被向后拨动了五百年。第一眼看到的不是宏大的广场，而是一条沉静宽阔的运河，水色是荷兰特有的那种带着灰绿调子的沉静。两岸是一排排用深红、暗棕砖块砌成的房子，它们不像阿姆斯特丹的运河屋那样细高拥挤，反而敦实、宽阔，山墙的轮廓如锯齿...',
}

export default function KampenHanzaOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '坎彭汉萨老城', href: '/attractions/kampen-hanza-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`坎彭汉萨老城・Kampen Hanseatic Old Town・荷兰・坎彭`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`走下坎彭火车站的站台，穿过那座横跨艾瑟尔河老支流的小桥，时间仿佛“咔嗒”一声被向后拨动了五百年。第一眼看到的不是宏大的广场，而是一条沉静宽阔的运河，水色是荷兰特有的那种带着灰绿调子的沉静。两岸是一排排用深红、暗棕砖块砌成的房子，它们不像阿姆斯特丹的运河屋那样细高拥挤，反而敦实、宽阔，山墙的轮廓如锯齿、如阶梯，沉默地倒映在水纹里。空气中有一股复杂的味道：湿润的河水气、从某扇门后飘出的现磨咖啡香，还有老砖石在雨后散发出的、略带凉意的泥土气息。
这里最打动人的，是一种“正在使用中的历史感”。那些山墙上伸出的古老木制吊钩，几个世纪前用来将货物直接吊进顶楼的仓库，如今可能正挂着一盆盛放的天竺葵。穿行在Oudestraat（老街）上，脚下是微微磨亮的鹅卵石，耳边是清脆的自行车铃声和咖啡馆露台上轻松的荷兰语交谈声。你会发现，那栋有着精美文艺复兴雕刻的山墙建筑，是一家卖有机食品的超市；而那座曾经商贾云集的“行会之家”，底层可能是一家飘着肉桂香的面包店。历史在这里不是被供奉在玻璃柜里，而是像河水一样，依然在城市的血脉中平静流淌。
坎彭的核心魅力在于它的“不张扬的富足”。它没有竭力炫耀自己汉萨同盟成员的过往，但那份由远洋贸易积累的坚实财富，刻在每一块精心烧制的砖上，刻在市政厅立面那些讲述着公正与智慧的石雕寓言里。走在街上，你仿佛能听见几个世纪前金币在橡木柜台上的叮当声，能看见商人们裹着厚斗篷，在酒馆里就着烛光查看货运单。但下一秒，一个骑着自行车、车篮里装着法棍的金发女孩从你身边轻快地掠过，把你拉回阳光明媚的当下。这种时空交织的恍惚感，就是坎彭最迷人的魔法。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`走下坎彭火车站的站台，穿过那座横跨艾瑟尔河老支流的小桥，时间仿佛“咔嗒”一声被向后拨动了五百年。第一眼看到的不是宏大的广场，而是一条沉静宽阔的运河，水色是荷兰特有的那种带着灰绿调子的沉静。两岸是一排排用深红、暗棕砖块砌成的房子，它们不像阿姆斯特丹的运河屋那样细高拥挤，反而敦实、宽阔，山墙的轮廓如锯齿、如阶梯，沉默地倒映在水纹里。空气中有一股复杂的味道：湿润的河水气、从某扇门后飘出的现磨咖啡香，还有老砖石在雨后散发出的、略带凉意的泥土气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最打动人的，是一种“正在使用中的历史感”。那些山墙上伸出的古老木制吊钩，几个世纪前用来将货物直接吊进顶楼的仓库，如今可能正挂着一盆盛放的天竺葵。穿行在Oudestraat（老街）上，脚下是微微磨亮的鹅卵石，耳边是清脆的自行车铃声和咖啡馆露台上轻松的荷兰语交谈声。你会发现，那栋有着精美文艺复兴雕刻的山墙建筑，是一家卖有机食品的超市；而那座曾经商贾云集的“行会之家”，底层可能是一家飘着肉桂香的面包店。历史在这里不是被供奉在玻璃柜里，而是像河水一样，依然在城市的血脉中平静流淌。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`坎彭的核心魅力在于它的“不张扬的富足”。它没有竭力炫耀自己汉萨同盟成员的过往，但那份由远洋贸易积累的坚实财富，刻在每一块精心烧制的砖上，刻在市政厅立面那些讲述着公正与智慧的石雕寓言里。走在街上，你仿佛能听见几个世纪前金币在橡木柜台上的叮当声，能看见商人们裹着厚斗篷，在酒馆里就着烛光查看货运单。但下一秒，一个骑着自行车、车篮里装着法棍的金发女孩从你身边轻快地掠过，把你拉回阳光明媚的当下。这种时空交织的恍惚感，就是坎彭最迷人的魔法。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`坎彭汉萨老城`} />
                <InfoRow label="英文名称" value={`Kampen Hanseatic Old Town`} />
                <InfoRow label="正式名称" value={`Kampen Hanseatic Old Town`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`坎彭`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪晚期汉萨同盟在荷兰境内最重要、最富有的港口城市之一，被誉为“艾瑟尔河上的女王”。`} />
                <InfoRow label="建筑特色" value={`密集保存完好的中世纪与文艺复兴时期砖砌山墙建筑群，充满阶梯式、钟形和颈部山墙，众多建筑山墙上仍装饰着古老的吊钩与滑轮。`} />
                <InfoRow label="建筑风格" value={`以荷兰哥特式和文艺复兴风格为主，砖砌结构是其最显著的视觉特征。`} />
                <InfoRow label="文化价值" value={`一个将辉煌的海洋贸易历史与宁静的当代荷兰小镇生活完美融合的活遗产，展示了商业资本如何塑造了城市的美学与文化。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区域全天24小时开放。核心历史建筑如圣尼古拉斯教堂（Sint-Nicolaaskerk）开放时间通常为周二至周六 11:00 - 17:00，周日 13:00 - 17:00（冬季可能缩短）。标志性的新钟楼（Nieuwe Toren）需通过旅游信息中心预约登顶。多数商店和咖啡馆营业时间为周一至周六 9:00 - 18:00（周四部分延长至21:00），周日 12:00 - 17:00。`} />
              <InfoRow label="门票价格" value={`进入老城街区本身免费。圣尼古拉斯教堂门票约为4欧元，学生及65岁以上老人有优惠。新钟楼登顶预约参观费用约为5欧元。部分小型博物馆联票约10欧元。旅游信息中心提供的 guided walking tour 价格约为12欧元/人，非常推荐。`} />
              <InfoRow label="地址" value={`Oudestraat 1, 8261 CK Kampen, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场（AMS）出发最便捷。在机场火车站乘坐开往兹沃勒（Zwolle）方向的火车，约1小时车程，在坎彭（Kampen）站下车，班次频繁，约每半小时一班。从阿姆斯特丹中央车站出发也同理。火车票可直接在NS（荷兰铁路）售票机或App购买。坎彭火车站小巧迷人，出站后步行过桥，仅需10分钟即可踏入老城中心。若自驾，可将车停在老城外围的停车场（如“Stadhuis”停车场），老城内多为步行区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从那条河说起——艾瑟尔河。在中世纪，这条河是连接北海与欧洲腹地的黄金水道。大约在12世纪，一些敢于冒险的商人在此定居，坎彭的故事开始了。它的地理位置得天独厚，正好处于内河航运与沿海贸易的转换点。起初，它靠的是北海鲱鱼贸易。你能想象吗？每年夏季，整个北海的鲱鱼潮涌来，坎彭的渔民和水手们驾船出海，然后用盐将捕获的鲱鱼腌制，装入木桶。这些“海上的白银”被运往波罗的海沿岸、挪威、甚至更远的地方，换回木材、毛皮、蜂蜜和粮食。财富，就这样随着咸腥的海风，滚滚流入这座河畔小镇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了14世纪，坎彭的财富和影响力达到了顶峰，并顺理成章地加入了强大的汉萨同盟——一个北欧城市的商业与政治联盟。这才是它真正的黄金时代。城里的商人们不再满足于简单的货栈，他们开始用赚来的钱建造最能彰显身份与实力的东西：房子。于是，我们今天看到的那些令人惊叹的砖砌山墙建筑群拔地而起。这些房子不仅是家，更是办公室、仓库和展示窗。宽阔的顶层用来囤积货物，山墙上的巨大木钩就是装卸系统的一部分。商人们竞相攀比，谁的山墙设计更独特、砖雕更精美，谁的家族徽章更醒目。坎彭成了艾瑟尔河上最璀璨的一颗明珠，赢得了“女王”的称号。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，河流既带来了财富，也带来了变迁。16世纪后，由于泥沙淤积和河道变化，艾瑟尔河的主航道逐渐远离坎彭，更大的港口城市如阿姆斯特丹崛起。坎彭的商船队慢慢萎缩，它从国际贸易的前线退了下来。但这并非一个悲剧的结尾，反而是一个奇妙的转折。巨大的财富已经沉淀为坚固的砖石，精明的坎彭商人将资本转向了土地投资、银行业和新兴工业。城市没有衰落，只是转换了赛道。它变成了一座安静、富庶的省级中心，那些曾经装满鲱鱼桶和东方香料的华丽仓库，被完好地保存下来，转化成了住宅、店铺和市政机构。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`正因如此，当我们今天漫步坎彭时，看到的不是一个被时间冻结的博物馆标本，而是一个经历了完整生命周期的有机体。它经历过海洋冒险家的热血时代，享受过顶级商业城市的无限风光，也安然度过了归于平静的后半生。战争（如二战）曾带来创伤，但幸运的是，老城核心区逃过了大规模破坏。如今，坎彭人依然住在这些祖先留下的房子里，在古老的市政厅里办理结婚手续，在曾经的商行里喝着啤酒。历史没有死去，它只是换了一种更温和、更日常的方式在呼吸。那份汉萨同盟的荣光，不再体现于远航的帆影，而沉淀在了街道的每一寸肌理和居民从容不迫的气质里。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受坎彭，建议安排一整天的时间，享受慢悠悠的探索节奏。最好的方式是上午早些时候（9点后）抵达，此时商店刚开门，游客稀少，光线柔和。游览的核心逻辑是“由外及内，再登高望远”。先从火车站过桥后沿着运河区（Buitenkade）开始，这里能让你建立对城市尺度和水岸风貌的第一印象。然后蜿蜒深入老城中心的主街（Oudestraat），细细浏览两侧的建筑和店铺。中午时分，可以登上新钟楼，在制高点将整个红色屋顶的迷宫尽收眼底。下午则用来探访主要的室内景点，如圣尼古拉斯教堂和市政厅，并在运河边的咖啡馆享受一个悠闲的午后。这样的节奏张弛有度，既能捕捉晨昏不同光线下的城市之美，又能充分融入当地的生活气息。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城街道多为鹅卵石铺就，务必穿一双非常舒适且鞋底厚实的步行鞋。
许多小型博物馆和教堂周一闭馆，规划行程时请务必提前查好最新开放时间。
旅游信息中心（VVV）就在市政厅旁边，可以免费获取精美的步行地图，工作人员能提供非常多关于建筑历史和隐秘角落的有趣信息。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站走过那座白色的艾瑟尔桥，沿着Buitenkade运河漫步，看古老的货仓建筑倒映在平静的水面，偶有天鹅悠然划过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转入Oudestraat主街，放慢脚步，抬头细细辨认每一栋山墙上的装饰、年份石和古老的贸易标志，想象它们曾经的主人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进恢宏的圣尼古拉斯教堂，让眼睛适应内部昏暗的光线，静静欣赏那架巨大的、装饰着天使奏乐图案的管风琴，以及彩绘玻璃投下的斑斓光影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`提前预约并攀爬新钟楼狭窄的旋转楼梯，到达顶层后，360度俯瞰整个坎彭老城如玩具积木般的红色屋顶、蜿蜒的运河和远处的广阔圩田。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在市政厅（Stadhuis）前，仰视它华丽的荷兰文艺复兴式立面，找找代表正义、智慧、和平与力量的那些人物雕像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城纵横的小巷里，比如Botermarkt附近，寻找那些山墙上依然保留着的镀金风向标，它们常常是古老的帆船造型，默默诉说着与海洋的羁绊。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到老港口（Oude Haven）区域，看看那些现已改成餐厅和公寓的老船坞，坐在长椅上观察那座仍在运作的古老船闸如何升降船只。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在市集广场（Koornmarkt）找一家户外咖啡馆坐下，点一杯咖啡或本地啤酒，看着广场上的行人、自行车和偶尔驶过的可爱小型汽车，做一会儿真正的坎彭人。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`艾瑟尔桥北侧岸边`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，以宽阔的运河水面为前景，拍摄对岸一字排开的中世纪山墙建筑群在水中的完整倒影，色彩和构图极具油画感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣尼古拉斯教堂南侧小巷`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光斜射时，站在巷子里，利用狭长的空间透视，将教堂巨大的砖砌墙体与远处典型山墙民居一同纳入镜头，展现建筑尺度的对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`新钟楼顶层西南角`}</h4>
                  <p className="text-sm text-gray-700">{`使用中长焦镜头，压缩景深，拍摄老城屋顶层层叠叠的红色瓦片、错综复杂的山墙轮廓线与远处教堂尖顶构成的几何交响曲。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`市政厅山墙正面特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午光线均匀时，靠近拍摄立面上精美的石雕细节，如狮头、寓言人物和花纹卷轴，展现文艺复兴石匠的精湛技艺。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`Botermarkt广场角落`}</h4>
                  <p className="text-sm text-gray-700">{`捕捉当地居民日常生活的场景，如坐在长椅上看报的老人、骑着复古自行车穿行而过的年轻人，以生动的街景赋予历史街区温度。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尝试用长焦镜头在远处捕捉街景，能获得更干净、压缩感更强的画面，避开不必要的现代元素。`}</li>
                <li>• {`拍摄私人住宅或庭院内部时务必保持尊重，如需拍摄居民正面，一个微笑和眼神交流征得同意是很好的习惯。`}</li>
                <li>• {`坎彭的阴天其实也别有风味，砖石的色彩在漫射光下更加饱和深沉，不要因为天气不佳就收起相机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`运河畔精品酒店`}</h4>
                  <p className="text-sm text-blue-800">{`由17世纪商人豪宅改造，房间拥有原始的横梁和壁炉，打开窗就是潺潺运河与对岸如画的山墙，枕水而眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心设计民宿`}</h4>
                  <p className="text-sm text-green-800">{`位于一栋经过巧妙现代改造的历史建筑顶层，拥有一个可以俯瞰大片红色屋顶的私人露台，内部是北欧风格的极简设计。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`由一对热情的本地夫妇经营，位于安静的后街，早晨能享用到用传统方法烹制的丰盛荷兰早餐，主人会分享许多关于坎彭的趣闻轶事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城外乡村庄园`}</h4>
                  <p className="text-sm text-purple-800">{`如果你有车，可以选择住在坎彭郊外圩田间的古老农庄改造的旅馆，体验绝对的宁静，夜晚星空璀璨，清晨在奶牛的低哞声中醒来。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`坎彭的旅游住宿规模不大，尤其在夏季周末和节假日非常紧俏，建议至少提前一个月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的酒店和民宿大多没有电梯，且楼梯往往陡峭狭窄，携带大件行李或行动不便者需提前确认。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`选择城外住宿时，请务必确认好前往老城的公共交通方式或停车便利性，享受田园宁静的同时也需考虑交通成本。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开坎彭许久后，我发现自己最常回忆起的，不是某栋具体的建筑，而是那种整体弥漫的氛围。那是一种坚实的、沉静的、充满生活底色的美好。它不像那些被游客挤爆的世界级景点，用震撼的奇观瞬间击中你，然后迅速消退。坎彭的好，是慢慢渗进心里的。它让你相信，历史不必总是悲情的废墟或肃穆的殿堂，它可以如此亲切地活在当下，成为人们每天买菜、喝咖啡、骑车回家的背景。这种延续感，在当今这个一切都在飞速迭代、断裂的世界里，显得尤为珍贵。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了在景点间疲于奔命的打卡式旅行，如果你渴望真正触摸到一段依然温热的历史脉搏，那么请一定来坎彭。在这里，你不需要急着去“看”什么，你只需要“在”。在古老的街道上随意走走，在运河边发发呆，在咖啡馆里观察本地人如何度过一个普通的周三下午。你会发现，汉萨同盟的精神遗产，或许并不是那些远航的商船，而正是这种将财富转化为美好、持久的生活场所的智慧，以及那份历经潮起潮落后，依然能安于当下、从容过好每一天的宁静力量。这是一座教人“生活”的城。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/craiova" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克拉约瓦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Craiova</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/haarlem-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈勒姆老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Haarlem Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/zadar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    扎
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">扎达尔老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zadar Old Town</p>
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
