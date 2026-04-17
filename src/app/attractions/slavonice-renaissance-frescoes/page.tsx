import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '斯拉沃尼采 Slavonice｜被时光遗忘的壁画宝石城 - 最佳欧洲景点',
  description: '嘿，朋友，想象一下：你坐了几个小时的火车，穿过波希米亚南部起伏的绿色丘陵，在一个安静得只听得到风声的小站下车。沿着一条小路走上山坡，突然，一道古老的城门洞出现在眼前。穿过它，就像穿过了一道时间的帷幕，外面的世界瞬间退去。你站住了，几乎要屏住呼吸。 眼前的景象太不真实了。不是那种宏大、威严的震撼，而是...',
}

export default function SlavoniceRenaissanceFrescoesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '斯拉沃尼采', href: '/attractions/slavonice-renaissance-frescoes' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`斯拉沃尼采・Slavonice・捷克・斯拉沃尼采`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下：你坐了几个小时的火车，穿过波希米亚南部起伏的绿色丘陵，在一个安静得只听得到风声的小站下车。沿着一条小路走上山坡，突然，一道古老的城门洞出现在眼前。穿过它，就像穿过了一道时间的帷幕，外面的世界瞬间退去。你站住了，几乎要屏住呼吸。
眼前的景象太不真实了。不是那种宏大、威严的震撼，而是一种细密的、精致的、扑面而来的美。两条主街交汇成一个三角形的宁静广场，广场四周，是一栋接一栋色彩柔和的房屋。但这些房子绝非普通——它们的外墙，几乎每一面，都被无比精美、繁复的图案覆盖。那不是简单的涂抹，而是像雕刻进墙里的立体画卷。深红色的底子上，刻出象牙白的藤蔓、寓言人物、奇异的怪兽和几何花纹；有些整面山墙就是一个巨大的圣经故事场景。阳光斜斜地打在墙上，那些图案便有了生动的光影，仿佛随时会从墙壁上走下来。空气中是青石板被晒暖后微微尘土的气息，混合着远处咖啡馆飘来的咖啡香。广场中心的喷泉汩汩作响，声音空灵地回荡着。这里几乎没有游客，只有一两个本地老人坐在长椅上，一只猫在墙根下打盹。时间在这里，不是流逝，而是沉淀。
这就是斯拉沃尼采给你的第一眼。它不像CK小镇那样被游客塞满，也不像布拉格那般辉煌壮丽。它是一个“幸存者”，一个被历史偶然遗忘在角落的珍宝盒。它的核心魅力，不在于某座单独的宫殿或教堂（虽然它的教堂也很美），而在于整个城镇肌理的统一与和谐。每一栋房子都是一个艺术品，它们组合在一起，形成了一个完整的、活生生的文艺复兴世界。走在这里，你不是在“参观”景点，而是在“步入”一幅16世纪的城镇画卷，触摸那个时代市民的财富、信仰与审美。
你会感受到一种强烈的宁静与完满。这种完满来自于建筑与环境的极度和谐，来自于艺术与日常生活的无缝交融。那些壁画不是高高在上的神谕，而是人们每天出门回家都会看到的自家墙壁。这种艺术的生命力，扎根在最普通的生活里，历经数百年风雨，依然在向每一个驻足的路人，轻声诉说着往日的繁华与骄傲。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下：你坐了几个小时的火车，穿过波希米亚南部起伏的绿色丘陵，在一个安静得只听得到风声的小站下车。沿着一条小路走上山坡，突然，一道古老的城门洞出现在眼前。穿过它，就像穿过了一道时间的帷幕，外面的世界瞬间退去。你站住了，几乎要屏住呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`眼前的景象太不真实了。不是那种宏大、威严的震撼，而是一种细密的、精致的、扑面而来的美。两条主街交汇成一个三角形的宁静广场，广场四周，是一栋接一栋色彩柔和的房屋。但这些房子绝非普通——它们的外墙，几乎每一面，都被无比精美、繁复的图案覆盖。那不是简单的涂抹，而是像雕刻进墙里的立体画卷。深红色的底子上，刻出象牙白的藤蔓、寓言人物、奇异的怪兽和几何花纹；有些整面山墙就是一个巨大的圣经故事场景。阳光斜斜地打在墙上，那些图案便有了生动的光影，仿佛随时会从墙壁上走下来。空气中是青石板被晒暖后微微尘土的气息，混合着远处咖啡馆飘来的咖啡香。广场中心的喷泉汩汩作响，声音空灵地回荡着。这里几乎没有游客，只有一两个本地老人坐在长椅上，一只猫在墙根下打盹。时间在这里，不是流逝，而是沉淀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是斯拉沃尼采给你的第一眼。它不像CK小镇那样被游客塞满，也不像布拉格那般辉煌壮丽。它是一个“幸存者”，一个被历史偶然遗忘在角落的珍宝盒。它的核心魅力，不在于某座单独的宫殿或教堂（虽然它的教堂也很美），而在于整个城镇肌理的统一与和谐。每一栋房子都是一个艺术品，它们组合在一起，形成了一个完整的、活生生的文艺复兴世界。走在这里，你不是在“参观”景点，而是在“步入”一幅16世纪的城镇画卷，触摸那个时代市民的财富、信仰与审美。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会感受到一种强烈的宁静与完满。这种完满来自于建筑与环境的极度和谐，来自于艺术与日常生活的无缝交融。那些壁画不是高高在上的神谕，而是人们每天出门回家都会看到的自家墙壁。这种艺术的生命力，扎根在最普通的生活里，历经数百年风雨，依然在向每一个驻足的路人，轻声诉说着往日的繁华与骄傲。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`斯拉沃尼采`} />
                <InfoRow label="英文名称" value={`Slavonice`} />
                <InfoRow label="正式名称" value={`Slavonice`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`斯拉沃尼采`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座因银矿贸易而繁盛、又因政治边界封锁而被“冰冻”在16世纪的文艺复兴古镇，堪称中欧保存最完好的民间文艺复兴建筑露天博物馆。`} />
                <InfoRow label="建筑特色" value={`其灵魂在于大量民宅外立面上精美绝伦的“刮画”壁画，这是一种在湿石膏上用两种颜色涂层雕刻出的立体浮雕式图案，内容从圣经故事到繁复的几何花纹，令人目不暇接。`} />
                <InfoRow label="建筑风格" value={`以晚期哥特式为基础，深受意大利和德国南部影响的波希米亚文艺复兴风格，尤其是其独特的“刮画”外墙装饰。`} />
                <InfoRow label="文化价值" value={`它不仅展示了文艺复兴艺术如何从贵族宫殿“下沉”到富庶市民的住宅，更凝固了一段因冷战铁幕而意外保存下来的、未被现代化侵蚀的欧洲小镇生活图景。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要历史建筑（如市政厅塔楼、部分对公众开放的壁画房屋内部）开放时间通常为每年4月至10月，每天上午10点至下午5点，周一可能关闭。11月至次年3月为淡季，开放时间大幅缩短或仅周末开放，且部分建筑内部关闭。建议出行前务必查看小镇官方旅游信息网站确认最新安排。`} />
              <InfoRow label="门票价格" value={`进入小镇本身免费。参观市政厅塔楼门票约80捷克克朗。进入少数几座对公众开放的、拥有珍贵内部壁画的民宅（如No. 480, 517号房屋），门票约50-100捷克克朗。通常有学生及老年人优惠票。小镇游客中心出售联票，性价比更高。`} />
              <InfoRow label="地址" value={`Náměstí Míru 480, 378 81 Slavonice, Czechia`} />
              <InfoRow label="交通方式" value={`从布拉格出发：最佳方式是乘坐火车，从布拉格主火车站（Praha hl.n.）出发，通常需要在Veselí nad Lužnicí或Jindřichův Hradec换乘一次，总车程约3.5-4小时。班次不算密集，一天约4-5班，务必提前在捷克铁路（ČD）官网查好时刻表并预留充足时间。从维也纳出发：更近，自驾约1.5小时。公共交通也可行，乘火车到捷克边境小镇Gmünd，再换乘当地巴士前往斯拉沃尼采，总耗时约2.5小时，需注意换乘衔接。小镇内全靠步行。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解斯拉沃尼采为何是今天这个样子，我们得回到它命运的转折点。但首先，得看看它是如何发迹的。它的故事始于13世纪，作为连接波希米亚、奥地利和摩拉维亚贸易路线上的一个重要驿站。真正的黄金时代在16世纪到来，地下丰富的银矿资源让小镇的商人和矿主们富得流油。有钱了怎么办？当然是要把家修得漂漂亮亮，彰显身份。当时正是文艺复兴思潮从意大利向北蔓延的时期。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，小镇的富户们争相聘请来自奥地利和北意大利的工匠，不是修建庞大的城堡，而是精心装饰自己的市民住宅。一种名为“Sgraffito”（刮画）的技术在这里大放异彩。工匠们先在墙上涂上深色（通常是红褐或黑色）的底灰，再覆上一层浅色（白色或米色）的表灰，在表灰未干时，用工具刮掉部分，露出底层的深色，从而形成永久性的双色浮雕图案。这比绘制壁画更耐久，能抵御当地的风霜雨雪。一时间，圣经场景、古典神话、纹章图案、复杂的阿拉伯式花纹爬满了镇上的每一座像样的房子。市政厅建起了高高的塔楼，教堂得以扩建，斯拉沃尼采成了地区内一颗耀眼的文化与商业明珠。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，命运的第一个拐点在17世纪到来。三十年战争的烽火席卷中欧，小镇未能幸免，遭受重创。更致命的是，银矿逐渐枯竭。财富的源泉断了，发展的动力也随之消失。小镇的扩建停止了，新建的豪华住宅再也没有出现。但这恰恰成了它保存完好的第一个原因——因为穷，所以没有钱去拆掉老房子，改建时髦的巴洛克或古典主义风格。那些文艺复兴的外衣，就这么原封不动地留了下来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正让斯拉沃尼采陷入长达几个世纪“沉睡”的，是20世纪的地缘政治。二战结束后，欧洲被铁幕一分为二。斯拉沃尼采不幸地处紧贴奥地利边境的“纵深禁区”内。在冷战紧张年代，边境被严密封锁，小镇与外界的联系几乎被切断，经济发展完全停滞，人口不断外流。它成了一座被遗忘的“边境幽灵镇”。讽刺的是，这种孤立与遗忘，成了它最强大的保护罩。没有工业化，没有大规模的旅游开发，没有战后的重建浪潮去破坏古貌。小镇的建筑群就像被施了魔法，凝固在了16世纪的荣光与20世纪的落寞交织的那个瞬间。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到1989年天鹅绒革命后，铁幕倒下，边境重新开放，外界才像发现新大陆一样，“重新发现”了斯拉沃尼采。人们惊讶于在这样一个偏僻角落，竟完好保存着一座如此完整的文艺复兴城镇。它迅速被列为国家文化遗产保护区。今天的斯拉沃尼采，小心而缓慢地苏醒着。居民们精心修复着那些无价的壁画外墙，开设家庭旅馆和咖啡馆，但依旧保持着那份与世无争的宁静。它的历史，是一部从繁荣到沉寂，再因沉寂而得以保存，最终在当代被珍视的传奇。每一幅墙上的刮画，都是这部传奇的一个章节。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览斯拉沃尼采，精髓在于“慢”和“细”。建议安排一整天，最好能在小镇住上一晚，感受它清晨与黄昏截然不同的静谧之美。上午十点左右抵达最为理想，此时阳光正好洒满主广场（和平广场），是欣赏和拍摄壁画外墙光影的黄金时间。整体游览节奏应当非常悠闲，以和平广场为核心，沿着两条主街（Horní náměstí 和 Dolní náměstí）放射状探索小巷。重点不是赶路打卡，而是抬头仔细端详每一幅壁画的故事，低头感受石板路的凹凸。下午可以登上市政厅塔楼俯瞰全镇红屋顶与壁画山墙组成的棋盘格图案，日落时分则适合在城墙遗迹或小镇边缘的草地上回望这座在暖光中如模型般精致的小镇。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇地面多为古老石板路，穿一双舒适耐走的平底鞋至关重要。很多精美壁画位于私人住宅外墙，请保持安静，勿擅闯私人院落或过度贴近墙壁。小镇餐馆不多且关门较早，最好提前规划好午餐和晚餐地点，或自备一些零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从布拉格门进入，让那座布满刮画装饰的城门塔楼为你揭开整个小镇艺术盛宴的序幕`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`径直走向三角形和平广场的中心，先在古老的喷泉边坐下，环顾四周，让那些密集而华丽的壁画山墙第一次全方位冲击你的视觉`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择Horní街开始漫步，在517号房屋前长久驻足，解读其山墙上巨幅的“参孙撕裂狮子”刮画场景的每一个细节`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拐进一条静谧的小巷，寻找那些民宅侧面不那么起眼却同样精美的装饰，比如一个优雅的文艺复兴式凸窗或一个布满几何花纹的墙角`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣约翰教堂，在相对朴素的内殿休息片刻，然后攀登其塔楼，从制高点将小镇如织锦般的屋顶和广场格局尽收眼底`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午回到广场，在“白狮”酒店的历史拱廊下点一杯本地啤酒，观察光影如何在壁画墙上缓慢移动，变幻出不同的表情`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着残留的古城墙散步走到小镇南侧的草坪，从这里回望，看整座小镇安详地卧在绿色丘陵的怀抱中，像一枚镶嵌在大地上的古老徽章`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分，等待小镇的路灯逐一亮起，昏黄的光线让墙上的刮画图案产生一种神秘的浮雕感，仿佛它们只在夜间苏醒`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`和平广场东南角仰拍市政厅塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至正午，阳光从侧面照亮塔楼精美的刮画装饰，以蓝天和色彩斑斓的山墙屋顶为背景，构图饱满`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`517号“参孙”房屋正对面`}</h4>
                  <p className="text-sm text-gray-700">{`利用街道的纵深感，将巨幅壁画作为视觉焦点，等待一位本地居民或骑自行车的人经过，为静止的历史画面增添生活气息`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从圣约翰教堂塔楼俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的下午，阳光西斜时，用长焦镜头捕捉广场周围房屋山墙上各不相同的刮画图案，形成有趣的拼图式构图`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇北侧城墙遗址的土坡上`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，逆光拍摄小镇轮廓，温暖的夕阳为房屋镶上金边，壁画细节虽隐入阴影，但整体氛围感无与伦比`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`寻找小巷中光影交错的角落`}</h4>
                  <p className="text-sm text-gray-700">{`正午前后，狭窄巷弄里阳光与阴影在壁画墙上切割出明暗对比强烈的几何图形，适合拍摄抽象而有质感的细节`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄刮画壁画时，侧光能最好地展现其浮雕般的立体感，避免在正午顶光或完全阴天时拍摄大片墙面。请务必使用无人机前查询当地法规，小镇中心及周边可能属于禁飞区。尊重居民隐私，避免将镜头直接对准私人住宅的窗户。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸式历史之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住和平广场上一栋16世纪的刮画壁画房屋内部改造的民宿，躺在古老的木梁下，清晨被广场喷泉的水声和阳光在壁画上移动的光影唤醒`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`宁静花园之选`}</h4>
                  <p className="text-sm text-green-800">{`小镇边缘一座带大片英式花园的家庭旅馆，房间明亮现代，晚上享受绝对静谧，白天步行五分钟即可进入古镇核心，兼得便利与安宁`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计师隐居之选`}</h4>
                  <p className="text-sm text-yellow-800">{`由历史建筑改造的极简风格小型精品酒店，在保留原始石墙和拱顶的同时，融入现代设计家具，提供一种穿越时空的融合居住体验`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客社交之选`}</h4>
                  <p className="text-sm text-purple-800">{`小镇唯一的青年旅舍，由一栋老房子打理得温馨干净，公共厨房和客厅是结识来自世界各地的独行旅者、交换小众旅行故事的绝佳场所`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇住宿数量非常有限，尤其在夏季周末和节假日，务必提前数周甚至数月预订。住在广场上虽然景观无敌，但周五周六晚上如果广场边酒吧有活动，可能稍显嘈杂。选择小镇边缘的住宿，则能享受近乎乡村级别的宁静夜晚。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开斯拉沃尼采许久后，那些墙上的画面依然会清晰地浮现在脑海里。它给我的触动，不仅仅是对精美艺术的赞叹，更是一种关于“保存”的深刻慰藉。在这个世界上，多少辉煌的城市被战火夷平，被现代化改造得面目全非？而斯拉沃尼采，却因为一系列的“不幸”——战争的破坏、资源的枯竭、政治的封锁——阴差阳错地躲过了时间的侵蚀，成了一位“完美的幸存者”。它告诉我们，有时，被遗忘也是一种仁慈的庇护。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、渴望眼球、一切都在快速迭代的时代，斯拉沃尼采的存在，像一个固执而温柔的提醒。它提醒我们，美可以不必宏大喧嚣，而是细水长流地浸润在日常的墙壁与屋檐上；价值不总在于不断的增长与扩张，而可能在于深沉的静止与完整的存续。漫步在这里，你能真切地触摸到“历史”并非教科书上冰冷的名词，而是脚下每一块被磨光的石板，是墙上每一道被风雨模糊却依然生动的刻痕，是整个社区在数百年变迁中共同守护下来的一份集体记忆。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，如果你厌倦了人潮汹涌的热门景点，渴望一次真正能与历史对话、能让内心沉静下来的旅行，请务必把斯拉沃尼采列入你的清单。它不仅仅是一个目的地，更是一次通往时光深处的冥想。在这里，你会找回对细节的感知力，对缓慢的耐受力，并最终理解，有些最珍贵的东西，恰恰藏在世界那些安静的角落里，等待着不期而遇的发现，与心有灵犀的珍惜。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lednice-valtice" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱德尼采–瓦尔季采庄园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lednice–Valtice Cultural Landscape</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/znojmo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹诺伊莫古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Znojmo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rochefort-en-terre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗什福尔昂泰尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rochefort-en-Terre</p>
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
