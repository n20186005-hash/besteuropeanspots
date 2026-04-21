import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '佩拉斯特古镇 Perast｜亚得里亚海畔被遗忘的巴洛克珍珠，在时光静止的港湾看两座神秘岛屿 - 最佳欧洲景点',
  description: '想象一下，你正沿着科托尔湾那如蓝丝绒般深邃平静的水域行驶，两岸是陡然拔起的漆黑群山。然后，在一个几乎要错过的小小湾口，一片建筑像从山体滑入海中、又被时间之手温柔托住的模型，蓦然出现在眼前。这就是佩拉斯特。第一眼，它不是那种让你倒抽冷气的宏大，而是一种让你呼吸放缓的精致。那些用本地石灰岩砌成的房子，在...',
}

export default function PerastOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '黑山', href: '/destinations/montenegro' },
            { label: '科托尔湾地区', href: '/destinations/montenegro' },
            { label: '佩拉斯特古镇', href: '/attractions/perast-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`佩拉斯特古镇・Perast・黑山・科托尔湾地区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你正沿着科托尔湾那如蓝丝绒般深邃平静的水域行驶，两岸是陡然拔起的漆黑群山。然后，在一个几乎要错过的小小湾口，一片建筑像从山体滑入海中、又被时间之手温柔托住的模型，蓦然出现在眼前。这就是佩拉斯特。第一眼，它不是那种让你倒抽冷气的宏大，而是一种让你呼吸放缓的精致。那些用本地石灰岩砌成的房子，在亚得里亚海的阳光下泛着蜂蜜与象牙交织的温暖光泽，紧紧依偎在一起，沿着一条唯一的、不足一公里长的海滨大道一字排开。空气里有海盐的清新，混合着路边九重葛的淡香，以及从老石头墙缝里透出的、几个世纪以来阳光烘焙过的干燥气息。
最迷人的是这里的“声音景观”。没有汽车的轰鸣——小镇中心几乎不通车。你听到的是最原始的白噪音：海浪轻轻拍打岸边石阶的“哗啦”声，系泊小艇的缆绳摩擦木桩的“吱呀”声，远处教堂偶尔传来一声悠长的钟鸣，以及从某扇敞开的窗户里飘出的、极轻的古典音乐声。这里的居民，大多是几百年前那些著名船长家族的后代，他们依然过着一种缓慢的、与潮汐和日光同步的节奏。你会看到老人在海边的长椅上安静地读报，主妇在古老的公共水龙头下冲洗刚买的鲜鱼，猫咪在饱经风霜的威尼斯式石狮雕像下打盹。
而佩拉斯特的灵魂，一半在岸上，另一半则漂浮在海中——那两座近在咫尺却又遥不可及的小岛。正对着小镇的，是郁郁葱葱、有着柏树环绕的圣乔治岛，它像一座漂浮的森林，静谧而私密，不对公众开放。而在它旁边，则是完全由人工堆积石块、并在其上建造起一座小巧教堂的圣母岩岛，它洁白、对称，像一个精致的婚礼蛋糕落在海面上。这两座岛屿，一自然一人文，一绿一白，构成了佩拉斯特永恒的视觉焦点和精神坐标。这里的核心魅力，正是这种极致的宁静与一种曾经辉煌的海上历史所形成的微妙张力。它不曾被遗忘，却主动选择了静止，像一个阅尽千帆后决定归隐的老水手，把所有的故事都沉淀在了波澜不惊的碧波之下。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你正沿着科托尔湾那如蓝丝绒般深邃平静的水域行驶，两岸是陡然拔起的漆黑群山。然后，在一个几乎要错过的小小湾口，一片建筑像从山体滑入海中、又被时间之手温柔托住的模型，蓦然出现在眼前。这就是佩拉斯特。第一眼，它不是那种让你倒抽冷气的宏大，而是一种让你呼吸放缓的精致。那些用本地石灰岩砌成的房子，在亚得里亚海的阳光下泛着蜂蜜与象牙交织的温暖光泽，紧紧依偎在一起，沿着一条唯一的、不足一公里长的海滨大道一字排开。空气里有海盐的清新，混合着路边九重葛的淡香，以及从老石头墙缝里透出的、几个世纪以来阳光烘焙过的干燥气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最迷人的是这里的“声音景观”。没有汽车的轰鸣——小镇中心几乎不通车。你听到的是最原始的白噪音：海浪轻轻拍打岸边石阶的“哗啦”声，系泊小艇的缆绳摩擦木桩的“吱呀”声，远处教堂偶尔传来一声悠长的钟鸣，以及从某扇敞开的窗户里飘出的、极轻的古典音乐声。这里的居民，大多是几百年前那些著名船长家族的后代，他们依然过着一种缓慢的、与潮汐和日光同步的节奏。你会看到老人在海边的长椅上安静地读报，主妇在古老的公共水龙头下冲洗刚买的鲜鱼，猫咪在饱经风霜的威尼斯式石狮雕像下打盹。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而佩拉斯特的灵魂，一半在岸上，另一半则漂浮在海中——那两座近在咫尺却又遥不可及的小岛。正对着小镇的，是郁郁葱葱、有着柏树环绕的圣乔治岛，它像一座漂浮的森林，静谧而私密，不对公众开放。而在它旁边，则是完全由人工堆积石块、并在其上建造起一座小巧教堂的圣母岩岛，它洁白、对称，像一个精致的婚礼蛋糕落在海面上。这两座岛屿，一自然一人文，一绿一白，构成了佩拉斯特永恒的视觉焦点和精神坐标。这里的核心魅力，正是这种极致的宁静与一种曾经辉煌的海上历史所形成的微妙张力。它不曾被遗忘，却主动选择了静止，像一个阅尽千帆后决定归隐的老水手，把所有的故事都沉淀在了波澜不惊的碧波之下。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`佩拉斯特古镇`} />
                <InfoRow label="英文名称" value={`Perast`} />
                <InfoRow label="正式名称" value={`Perast Old Town`} />
                <InfoRow label="国家" value={`黑山`} />
                <InfoRow label="城市" value={`科托尔湾地区`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`亚得里亚海东岸保存最完好的巴洛克小镇之一，曾是以航海传统和强大水手家族闻名的微型海上共和国。`} />
                <InfoRow label="建筑特色" value={`一条主沿海大道串联起十六座精美的石制宫殿与十七座教堂，形成一道紧贴海岸线的、和谐而密集的巴洛克建筑立面。`} />
                <InfoRow label="建筑风格" value={`以威尼斯巴洛克风格为主，混合了哥特式晚期和文艺复兴元素，带有鲜明的海洋共和国气质。`} />
                <InfoRow label="文化价值" value={`活着的航海历史博物馆，其建筑、传说和年度“福欣纳”掷石仪式，共同守护着黑山沿海独特的海洋身份与文化记忆。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天24小时开放。主要博物馆（佩拉斯特地方博物馆）和教堂（如圣尼古拉斯教堂钟楼）的开放时间通常为夏季（4月至10月）上午9点至下午6点，冬季（11月至3月）开放时间缩短或需提前预约。前往两个岛屿（圣母岩岛、圣乔治岛）的船只运营时间视天气和海况而定，一般为日出至日落，下午5点后班次减少。`} />
              <InfoRow label="门票价格" value={`进入佩拉斯特古镇本身免费。登圣尼古拉斯教堂钟楼参观费用约2-3欧元。佩拉斯特地方博物馆门票约5欧元。前往圣母岩岛（Our Lady of the Rocks）的往返船票约5-10欧元/人（可拼船），私人包船价格更高。所有景点对儿童、学生和老人通常有优惠票价，建议现场确认。`} />
              <InfoRow label="地址" value={`Perast, Bay of Kotor, Montenegro 85336`} />
              <InfoRow label="交通方式" value={`从最近的蒂瓦特机场（Tivat Airport, TIV）出发，乘坐出租车是最便捷的方式，车程约20-30分钟，费用25-35欧元。从更大的波德戈里察机场（Podgorica Airport, TGD）出发，可先乘机场大巴或打车至波德戈里察火车站/汽车站，再转乘长途巴士前往科托尔（约2小时），然后从科托尔乘坐本地巴士（方向：新海尔采格或里桑）在佩拉斯特站下车，班次每小时1-2班，车程20分钟，车票约2欧元。最推荐的抵达方式是自驾，沿风景壮丽的E65/E80公路（即科托尔湾沿岸公路）行驶，沿途设有观景台和停车场（小镇入口有收费停车场，约每小时1欧元）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解佩拉斯特的今天，你必须回到它帆樯林立、号角声声的过去。它的故事，是一部以石头、海浪和家族荣誉写成的史诗。早在中世纪，这里就因其位于科托尔湾深处的战略位置而成为一个天然的避风港和定居点。但真正的黄金时代始于15世纪，当强大的威尼斯共和国将其触角伸向整个达尔马提亚海岸时，佩拉斯特成为了共和国最忠诚、也最受青睐的盟友之一。威尼斯人欣赏佩拉斯特水手无与伦比的勇气和航海技能，赐予它一系列惊人的特权：小镇可以拥有自己的舰队和军队，铸造自己的货币，甚至拥有一个独立于科托尔的“微型共和国”地位。作为回报，佩拉斯特的男儿们为威尼斯的海上霸权而战，他们的船只航行在地中海的每一个角落。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`财富随着每一次成功的航行滚滚而来。16到18世纪，佩拉斯特的航海家族——比如著名的布贾、斯莫奇卡、马季雷维奇家族——展开了无声的竞赛，但不是通过战争，而是通过建筑。他们在唯一的海滨大道上，竞相建造起越来越奢华的宫殿式大宅。这些建筑并非为了炫耀财富的粗俗堆砌，而是融合了当时最先进的威尼斯巴洛克美学。你仔细看那些宫殿的立面，精美的双联窗、雕刻着家族徽章（通常包含帆船、星星或圣像）的石头楣饰、优雅的阳台，无不诉说着主人远航的见识和品味。每一块石头，可能都来自遥远的采石场，由某次贸易的利润支付。小镇的十七座教堂，也大多由某个家族出资建造，作为对上帝庇佑其海上冒险归来的感恩。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，历史不只有荣光。佩拉斯特也时刻面临着来自内陆的奥斯曼帝国的威胁。那些坚固的塔楼和城墙遗迹，提醒着人们这里也曾是前线。而小镇最奇特、延续至今的传统“福欣纳”（Fasinada），据说就源于一次成功的防御。传说在1452年7月22日，佩拉斯特的渔民在一块礁石上发现了圣母圣像，此后小镇屡次得到神佑。于是，每年这一天，镇民们会驾着装满石头的船只，环绕圣母岩岛，并将石头投入海中，以加固这座人工岛屿的基础。这个仪式，既是信仰的体现，也是集体身份和海洋归属感的年度重申。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着风帆时代的落幕和拿破仑战争后威尼斯共和国的崩溃，佩拉斯特的航海荣光渐渐褪去。它从海上强人变成了一个安静的退休之所。19世纪的地震带来一些破坏，但奇迹般地，小镇的整体风貌被完整保存下来，仿佛被施了魔法。它没有像邻居科托尔那样发展成为繁忙的旅游中心，而是沉浸在一种自愿的、美丽的停滞中。今天的宁静，是历史慷慨的馈赠，让每一位到访者都能触摸到那个早已远去的海洋贵族时代的最后余温。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味佩拉斯特，请务必预留一整天时间，并抱着“无所事事”的心态。最佳抵达时间是上午9点前，此时一日游的大批游客尚未从科托尔涌入，晨光柔和，洒在面东的建筑立面上，整个小镇刚刚苏醒。建议的节奏是“慢-停-浮”。上午专注于岸上的探索，用脚步丈量这条海滨大道和它背后的窄巷，参观核心博物馆和教堂。中午在临海餐厅享用一顿漫长的海鲜午餐，看船只往来。下午的重点一定是乘船出海，登上圣母岩岛，并在返航时从海上回望佩拉斯特的全景。傍晚时分，当一日游客散去，小镇重归宁静，这时便是寻找一个角落静坐、看日落染红群山的黄金时刻。整体耗时约8-10小时，这不是一场观光冲刺，而是一次沉浸式的时空浸泡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避开大型游轮停靠科托尔的日子（可提前查询科托尔港日程），否则上午10点后小镇会变得非常拥挤。圣母岩岛教堂内部禁止拍照，请务必尊重这一规定。小镇路面多为光滑的卵石，请务必穿一双舒适防滑的鞋子。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场沿着卵石小径向下走，首先让整个海湾和小镇那如舞台布景般的全景映入眼帘，并拍下第一张定妆照。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`信步走上那条被称为“科索”的滨海大道，不用看地图，只需用手抚摸每一座宫殿外墙那些被海风侵蚀得光滑温润的石头，辨认上面模糊的航海徽章。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开圣尼古拉斯教堂那扇厚重的木门，花几欧元登上它的钟楼，在狭窄的旋转石梯攀登后，收获一个360度无死角的、将小镇、两岛和整个科托尔湾尽收眼底的鸟瞰视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进佩拉斯特地方博物馆（布贾宫），让那些发黄的船长肖像、古老的航海仪器、精致的家族银器，以及阳台上那无敌的海景，为你讲述具体的家族传奇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在海边任意一个石头码头，向船夫招招手，跳上一艘传统木制小船，让微咸的海风拂面，先绕行不允许登陆的、神秘如《盗梦空间》场景的圣乔治岛，再登上洁白的圣母岩岛。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在圣母岩岛的小教堂里静静坐一会儿，看当地妇女虔诚地点燃蜡烛，然后仔细欣赏教堂内那些珍贵的银质匾额和一幅由当地水手出资助、著名画家完成的“圣母升天”图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到岸上，选择一家阳台探出海面的餐厅，点一盘当天捕捞的炸小鱼或黑烩饭，配一杯本地白葡萄酒，就这样无所事事地看着光线如何一点点改变海湾的颜色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当夕阳西下，沿着滨海大道往北走到尽头，坐在废弃的圣十字教堂台阶上，看着对岸的灯光和圣母岩岛的轮廓一起倒映在漆黑如镜的水面上。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`北端公路俯瞰点`}</h4>
                  <p className="text-sm text-gray-700">{`从科托尔方向驶来的公路上，在进入小镇前的第一个大弯道处有一个观景台，这里是拍摄佩拉斯特全景连同两座岛屿的经典明信片角度，最佳光线在清晨或傍晚。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣尼古拉斯教堂钟楼顶端`}</h4>
                  <p className="text-sm text-gray-700">{`站在钟楼狭窄的环形露台上，使用广角镜头可以拍下滨海大道如同一根丝带串起所有宫殿的纵深画面，以及远处层峦叠嶂的山景，上午光线最佳。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从圣母岩岛回望小镇`}</h4>
                  <p className="text-sm text-gray-700">{`乘船登上圣母岩岛后，不要急着进教堂，先走到岛的边缘，用长焦镜头捕捉对岸佩拉斯特建筑群在水中的倒影和背后巍峨的山体，下午侧光时建筑立体感最强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`滨海大道尽头的古老石阶`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，坐在延伸入海的石阶上，将镜头对准水面上轻轻摇曳的小船和它们后方被灯火微微点亮的宫殿立面，可以拍出极具生活感和故事感的画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小巷深处的门洞与光影`}</h4>
                  <p className="text-sm text-gray-700">{`中午阳光直射时，可以钻入主路后方的小巷，寻找那些有着厚重木门和门洞的角落，利用强烈的明暗对比，拍摄光影切割古老石墙的抽象构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一个偏振镜（CPL），可以有效消除海面反光，让海水颜色更湛蓝，并增强石头建筑的质感。拍摄当地居民时请务必先微笑示意并获得同意，这里的人们友善但注重隐私。飞无人机理论上需要申请许可，且需特别注意海湾内频繁起降的观光小飞机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`极致海景体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在滨海大道上的精品酒店，由一座18世纪的宫殿精心修复而成，房间保留了原始的石头拱顶和木梁，推开窗就是海浪声，阳台正对圣母岩岛。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`隐居山腰设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇上方山腰处的现代风格酒店，需爬一小段台阶抵达，但换来的是一览无余的俯瞰海湾全景的露台和无边泳池，设计感与自然景观完美融合。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`船长老宅民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`由当地一个航海家族后代经营的民宿，隐藏在主路后面的安静巷弄里，房间不多但装饰着祖传的古地图和老照片，早餐是女主人亲手制作的黑山风味点心。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于小镇入口停车场附近的家庭式公寓，房间干净明亮，带小厨房，主人热情好客，会给你提供最地道的游玩建议，虽然没有直接海景，但性价比极高。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`佩拉斯特本身非常安全宁静，但大多数老宅酒店和民宿都没有电梯，且楼梯可能陡峭，携带大件行李或行动不便者需提前沟通。夏季住宿非常紧俏，务必提前数月预订。如果预订不到镇内，可以选择住在仅10分钟车程的、设施更丰富的科托尔或里桑，但会失去清晨与夜晚独占小镇的宝贵体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开佩拉斯特很久以后，我发现记忆最深的，不是某座具体的宫殿，也不是教堂里那幅名画，而是一种整体的“感觉”。那种感觉，是当你的脚步踏上那些被无数人磨得发亮的卵石路时，脚下传来的坚实与圆润；是当你坐在夕阳里，看着海鸥无声滑过粉色天空时，内心突然涌现的、巨大的平静。这个小镇像一个精妙的隐喻：它曾经雄心万丈，试图在浩瀚的历史海洋中留下自己的名字，而最终，它选择了一种更永恒的方式——成为一处风景，一个让人停顿、沉思的逗号。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都要“打卡”完毕的快节奏世界里，佩拉斯特的存在本身就是一种反抗。它告诉你，有些地方的价值不在于你“看到了”什么，而在于你“感受到了”什么。它不提供惊险的游乐设施，也没有喧嚣的夜生活，它只提供一样东西：完整的时间感。在这里，你可以清晰地触摸到时间的三个维度：过去，通过那些沉默的石墙和航海传说；现在，通过拍岸的潮汐和当地人不疾不徐的生活；未来，则凝固在那两座似乎永远不会改变的岛屿的轮廓中。它让你暂时从线性时间的追逐中抽离出来，进入一种循环的、与日月潮汐共鸣的永恒节奏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，每一位热爱深度游的旅人，都应该把佩拉斯特列入清单。不是为了收集另一个“去过”的地点，而是为了体验一次心灵的“潮汐浴”。来这里，不必忙着看，只需学着“在”。在这里度过的一天，会成为你旅行记忆里一个闪着柔光的、宁静的港湾。当你在未来生活的风浪中感到疲惫时，或许可以闭上眼睛，回想起亚得里亚海那一湾深蓝，以及蓝水边那排蜂蜜色的房子——那里，时间为你保存了一份永恒的宁静。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/cetinje" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采蒂涅老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cetinje</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kolain" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科拉欣</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kolašin</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/old-town-cetinje" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    采
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">采蒂涅老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town of Cetinje</p>
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
