import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦利基塔博尔城堡 Veliki Tabor Castle｜隐藏在山丘中的暗黑童话巨堡 - 最佳欧洲景点',
  description: '车子在克罗地亚北部的扎戈列丘陵地带蜿蜒前行，窗外是油画般铺开的绿色田野、零星的红色农舍和成片的橡树林。就在你觉得这田园风光将无穷无尽时，一个庞然大物毫无征兆地撞入视野——它不像新天鹅堡那样轻盈梦幻，而是像一块被时间巨手猛然摁在山丘顶端的、深灰色的巨型几何体。韦利基塔博尔，它的名字意为“伟大的营地”，',
}

export default function VelikiTaborCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '克罗地亚', href: '/destinations/croatia' },
            { label: '韦利基塔博尔城堡', href: '/attractions/veliki-tabor-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`韦利基塔博尔城堡・Veliki Tabor Castle・克罗地亚・德希尼采（Desinić）附近， 属克拉皮纳-扎戈列县`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在克罗地亚北部的扎戈列丘陵地带蜿蜒前行，窗外是油画般铺开的绿色田野、零星的红色农舍和成片的橡树林。就在你觉得这田园风光将无穷无尽时，一个庞然大物毫无征兆地撞入视野——它不像新天鹅堡那样轻盈梦幻，而是像一块被时间巨手猛然摁在山丘顶端的、深灰色的巨型几何体。韦利基塔博尔，它的名字意为“伟大的营地”，而初见那一刻，你感觉到的是一种沉默的、带着重量感的威严。它不招摇，甚至有些孤僻地矗立在那里，仿佛一个守护了秘密太久而变得缄默的巨人。
走近城堡，绕过最后一片小树林，那股属于中世纪石头的凛冽气息扑面而来。空气里混合着青草、湿润的泥土和岩石缝隙间苔藓的微腥味。城堡由五座巨大的圆柱形塔楼组成，被高耸的城墙紧密地连接成一个近乎完美的多边形。石头的颜色是深沉的灰褐色，历经数百年风雨洗礼，表面斑驳粗糙，爬满了深色的雨渍。你仰头看那些塔楼，顶部是圆锥形的铅灰色屋顶，像一顶顶威严的骑士头盔。整个建筑群没有任何多余的装饰，线条刚硬、冷峻，在克罗地亚明亮的蓝天下，投射出清晰而坚定的阴影。这是一种毫不妥协的美，纯粹为防御和存在而建的美。
然而，这种冷峻之下，却涌动着当地人炽热的情感与传说。在克罗地亚人心中，韦利基塔博尔不仅仅是一座石头城堡，它是一首凝固的叙事诗。最著名的传说关乎一位美丽的贵族少女薇罗妮卡，她因一场不被祝福的爱情而被囚禁于此，她的幽灵据说至今仍在塔楼间徘徊。当你踏入庭院，看到当地一家老少在周末来此漫步，父母低声给孩子讲述着薇罗妮卡的故事时，你会明白，这座堡垒的坚硬外壳里，包裹着一颗柔软而悲剧性的心脏。它既是坚不可摧的军事象征，也是容纳了无尽爱恨情仇的容器。
置身于城堡宽阔的内院，四周被高墙和塔楼环抱，你会感受到一种奇特的静谧。风声穿过垛口发出低沉的呜咽，远处丘陵间偶尔传来牛羊的铃铛声。这里的时间流速似乎不同，现代世界的喧嚣被厚重的石墙彻底隔绝。你可以触摸那些冰凉的、被打磨得光滑的石块，想象五百年前，骑士的盔甲在这里铿锵作响，火把在墙壁上投下晃动的光影。它的核心魅力，就在于这种极致的反差：外表的绝对理性、坚固与内部流传的绝对感性、凄美的传说，共同编织出一个充满张力的、暗黑童话般的空间。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在克罗地亚北部的扎戈列丘陵地带蜿蜒前行，窗外是油画般铺开的绿色田野、零星的红色农舍和成片的橡树林。就在你觉得这田园风光将无穷无尽时，一个庞然大物毫无征兆地撞入视野——它不像新天鹅堡那样轻盈梦幻，而是像一块被时间巨手猛然摁在山丘顶端的、深灰色的巨型几何体。韦利基塔博尔，它的名字意为“伟大的营地”，而初见那一刻，你感觉到的是一种沉默的、带着重量感的威严。它不招摇，甚至有些孤僻地矗立在那里，仿佛一个守护了秘密太久而变得缄默的巨人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近城堡，绕过最后一片小树林，那股属于中世纪石头的凛冽气息扑面而来。空气里混合着青草、湿润的泥土和岩石缝隙间苔藓的微腥味。城堡由五座巨大的圆柱形塔楼组成，被高耸的城墙紧密地连接成一个近乎完美的多边形。石头的颜色是深沉的灰褐色，历经数百年风雨洗礼，表面斑驳粗糙，爬满了深色的雨渍。你仰头看那些塔楼，顶部是圆锥形的铅灰色屋顶，像一顶顶威严的骑士头盔。整个建筑群没有任何多余的装饰，线条刚硬、冷峻，在克罗地亚明亮的蓝天下，投射出清晰而坚定的阴影。这是一种毫不妥协的美，纯粹为防御和存在而建的美。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，这种冷峻之下，却涌动着当地人炽热的情感与传说。在克罗地亚人心中，韦利基塔博尔不仅仅是一座石头城堡，它是一首凝固的叙事诗。最著名的传说关乎一位美丽的贵族少女薇罗妮卡，她因一场不被祝福的爱情而被囚禁于此，她的幽灵据说至今仍在塔楼间徘徊。当你踏入庭院，看到当地一家老少在周末来此漫步，父母低声给孩子讲述着薇罗妮卡的故事时，你会明白，这座堡垒的坚硬外壳里，包裹着一颗柔软而悲剧性的心脏。它既是坚不可摧的军事象征，也是容纳了无尽爱恨情仇的容器。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`置身于城堡宽阔的内院，四周被高墙和塔楼环抱，你会感受到一种奇特的静谧。风声穿过垛口发出低沉的呜咽，远处丘陵间偶尔传来牛羊的铃铛声。这里的时间流速似乎不同，现代世界的喧嚣被厚重的石墙彻底隔绝。你可以触摸那些冰凉的、被打磨得光滑的石块，想象五百年前，骑士的盔甲在这里铿锵作响，火把在墙壁上投下晃动的光影。它的核心魅力，就在于这种极致的反差：外表的绝对理性、坚固与内部流传的绝对感性、凄美的传说，共同编织出一个充满张力的、暗黑童话般的空间。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`韦利基塔博尔城堡`} />
                <InfoRow label="英文名称" value={`Veliki Tabor Castle`} />
                <InfoRow label="正式名称" value={`Veliki Tabor Castle`} />
                <InfoRow label="国家" value={`克罗地亚`} />
                <InfoRow label="城市" value={`德希尼采（Desinić）附近， 属克拉皮纳-扎戈列县`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`克罗地亚内陆保存最完好的中世纪晚期城堡之一，是扎戈列地区封建权力与军事建筑艺术的巅峰象征。`} />
                <InfoRow label="建筑特色" value={`由五个宏伟的圆形塔楼通过厚重城墙连接成一个近乎完美的多边形堡垒，整体呈现出一种冷峻而均衡的几何美感。`} />
                <InfoRow label="建筑风格" value={`晚期哥特式风格，带有鲜明的文艺复兴初期过渡特征与强大的军事防御功能设计。`} />
                <InfoRow label="文化价值" value={`不仅是建筑瑰宝，更是克罗地亚民族浪漫主义传说与历史叙事的核心载体，其故事深深融入当地的文化身份认同。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`四月至十月：每日上午9:00至下午7:00（最晚入场下午6:00）。 十一月至三月：开放时间大幅缩短，通常为周五至周日上午10:00至下午4:00，且部分内部展厅可能关闭。具体开放时间在冬季强烈建议出行前在其官方网站或当地旅游信息中心核实。每年一月至二月可能进行维护性闭馆。`} />
              <InfoRow label="门票价格" value={`成人票约40克罗地亚库纳（约合5.3欧元）。学生、青少年及老年人享有折扣票，约30库纳。6岁以下儿童免费。门票包含城堡庭院、防御工事、小教堂、常设历史展览及临时展览的参观。导览游需额外付费并建议提前预约。`} />
              <InfoRow label="地址" value={`Veliki Tabor 1， 49216 Desinić， Croatia`} />
              <InfoRow label="交通方式" value={`城堡位于扎戈列乡村腹地，公共交通极少。最便捷的方式是自驾。从首都萨格勒布出发，沿A2高速公路向西北方向行驶至克拉皮纳出口，随后转入地方公路前往德希尼采方向，全程约60公里，耗时1-1.5小时。沿途路标清晰。若乘坐火车，可先抵达克拉皮纳火车站，但从火车站到城堡仍有约15公里路程，需换乘极为不便的本地巴士或出租车，强烈不建议。从萨格勒布机场直接租车前往是最佳选择。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`韦利基塔博尔城堡的故事，始于克罗地亚贵族权力的巩固期。虽然地基可能更早，但我们现在看到的这座宏伟石堡，主要建于15世纪末到16世纪。那个时代的扎戈列地区，是克罗地亚贵族与不断扩张的奥斯曼帝国威胁之间的前线缓冲地带。城堡的建造者，主要是强大的拉特科维奇家族和其后裔。这不是为了享乐的宫殿，而是一项至关重要的军事投资。每一块沉重的石头，都在诉说着对来自南方入侵的深深忧虑。它的五塔设计，构成了无死角的火力覆盖，厚重的城墙足以抵挡当时的炮火。可以说，它诞生于恐惧，却成长为了力量的宣言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的命运与几个关键家族紧密相连。其中最具传奇色彩的，莫过于据说是城堡主人的弗里德里克二世伯爵，以及传说中他的女儿薇罗妮卡。历史与传说在这里交织得难分难解。广为流传的悲剧故事说，伯爵发现女儿与一个普通士兵相爱，盛怒之下将士兵处死，并将薇罗妮卡囚禁在城堡的一座塔楼中，直至她郁郁而终。这个罗密欧与朱丽叶式的故事，虽然缺乏确凿史实支撑，却赋予了城堡灵魂。它让冰冷的石头有了温度，让每一个来访者都会不由自主地去寻找“薇罗妮卡的塔楼”，并在这寻找中与过去的情感产生共鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的几个世纪，城堡几经易手，经历了 Habsburg 王朝的统治，其军事重要性随着奥斯曼威胁的消退而逐渐降低。它一度被改造为庄园管理中心和监狱，那份最初的荣耀渐渐蒙尘。到了19世纪，当浪漫主义思潮席卷欧洲时，韦利基塔博尔作为“被遗忘的巨人”和“悲剧爱情舞台”的双重身份，重新激发了克罗地亚艺术家、诗人和作家的想象力。它被描绘、被歌颂，从一个军事堡垒转型为一个民族文化与情感的象征。正是这个时期，奠定了它在克罗地亚人心目中不可动摇的浪漫主义地标地位。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，20世纪带给它的则是实实在在的创伤。二战期间，城堡遭到了严重破坏。战后，它一度被荒废，任由风雨侵蚀，几乎沦为废墟。转机出现在上世纪九十年代，克罗地亚独立后，国家开始了对重要文化遗产的系统性修复。韦利基塔博尔被列为最高优先级的项目之一。一场漫长而精细的修复工程展开了，工匠们小心翼翼地清理、加固每一面墙，复原屋顶和内部结构。这并非要将它变成崭新的仿制品，而是旨在稳定其生命，让时光的痕迹依然可见。修复完成后，城堡于2011年重新对公众开放，不仅作为博物馆，也成为了举办古典音乐会、戏剧演出和历史重现活动的独特场所。它从战争的创伤中涅槃重生，从一个单纯的防御工事，演变为一个承载历史、艺术与社区生活的多功能文化中心。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受韦利基塔博尔的灵魂，建议预留至少3-4小时。最好在上午10点前抵达，这时晨雾可能还未完全散去，阳光角度较低，能为城堡披上一层金色的轮廓光，拍照绝佳，且旅游团尚未涌入，你能享受片刻孤独。游览节奏宜慢不宜快，先从外部环绕一圈，感受其磅礴的体量与防御设计，再进入内部，让眼睛适应昏暗的光线，慢慢品味细节。先参观常设的历史与考古展览，建立背景知识，再自由探索塔楼和庭院，最后在咖啡馆露台小坐，回味所见所闻。这样的顺序能让你从宏观到微观，从历史到传说，层层深入地理解这座堡垒。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部许多通道和螺旋楼梯非常狭窄陡峭且光线不足，务必穿着绝对防滑的平底鞋，上下楼梯时请格外小心。夏季午后人流较多，且塔楼内部闷热，尽量将核心参观安排在上午。自驾前往时，使用离线地图，因为部分乡村道路手机信号可能不稳定。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡前方开阔的草坪开始，缓缓绕行一周，仰视那五座如同巨人手指般指向天空的圆形塔楼与连接它们的雄壮城墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过古老的石拱门进入内庭院，立刻被高耸的石壁环绕，静立片刻，倾听风声与鸟鸣在这天然音场中的回响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观位于主楼内的常设展览，透过出土的武器、盔甲碎片和日常生活器具，触摸中世纪扎戈列贵族与士兵的真实脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着狭窄而幽暗的螺旋石阶攀登至一座塔楼的顶部，在喘息中抵达观景台，猝然面对360度环绕的、如绿色波浪般起伏的扎戈列全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找那座被标记为“薇罗妮卡塔楼”的房间，站在小小的石窗前，望向窗外不变的丘陵，任那个悲伤的传说在心中弥漫开来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入城堡内的小教堂，在极简的圣坛和古老的壁画残迹前，感受昔日守卫者们在此寻求心灵慰藉的虔诚瞬间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡庭院一角的石头露台咖啡馆坐下，点一杯本地草药茶或咖啡，看着阳光在古老的石墙上缓慢移动。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡南侧山坡的葡萄园边缘`}</h4>
                  <p className="text-sm text-gray-700">{`日落前约一小时，阳光从侧面将城堡染成暖金色，用葡萄藤做前景，能拍出兼具历史感与生命力的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`内庭院中心仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射入庭院时，站在中心点向上拍摄，能获得极具几何张力的构图，将五座塔楼与一圈蓝天尽收镜中。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“骑士大厅”的拱形窗边`}</h4>
                  <p className="text-sm text-gray-700">{`下午光线柔和时，利用石窗作为天然画框，拍摄窗外连绵的丘陵风景，营造一种“从中世纪眺望永恒”的穿越感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡东面护城河（干涸）边缘的低角度`}</h4>
                  <p className="text-sm text-gray-700">{`清晨利用晨雾或雨后湿润的空气，低机位向上拍摄，能让城堡看起来更加巍峨孤高，充满戏剧性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`通往城堡主门的古老橡树小道`}</h4>
                  <p className="text-sm text-gray-700">{`站在小道起点，用两侧的橡树形成引导线，将视线引向远方山丘上的城堡，适合拍摄富有叙事感的行进式画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用广角镜头捕捉城堡的整体气势，但别忘了用长焦镜头刻画石墙的质感、塔楼的细节和窗棂的轮廓。无人机飞行在此区域有严格限制，务必事先查清当地法规，通常未经许可是禁止飞行的。尊重其他游客和场所的宁静氛围，避免使用闪光灯干扰他人。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村风情民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在城堡视野范围内的传统扎戈列农舍改造的民宿，清晨在鸡鸣声中醒来，推开窗就能看到薄雾中的城堡剪影。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色庄园酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择附近一座19世纪贵族庄园修复而成的精品酒店，体验复古的家具、壁炉和精心打理的花园，享受宁静的乡村贵族生活。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`克拉皮纳小镇舒适旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`若希望有更多餐饮选择，可住在约15分钟车程外的克拉皮纳镇中心，那里有干净舒适的旅馆，便于探索这个宁静的古镇。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`萨格勒布市区酒店`}</h4>
                  <p className="text-sm text-purple-800">{`对于只想一日游的旅客，住在首都萨格勒布是最方便的选择，白天租车前来探索，晚上回到城市享受丰富的夜生活和文化活动。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`扎戈列地区的乡村住宿非常安静，夜晚几乎没有任何光污染，是观星的绝佳地点，但相应的，晚餐选择很少，很多民宿提供半膳服务（含早晚餐）是明智之选。提前预订非常重要，尤其是夏季和周末，本地人也很喜欢来此度假。该区域治安极好，民风淳朴。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开韦利基塔博尔城堡，回望它逐渐消失在丘陵后的身影，那种复杂的感受依然萦绕心头。它不像许多被精心打磨、只为取悦游客的景点；它固执地保留着自己的棱角、自己的沉默，甚至是自己的伤痕。这种“不完美”的真实感，恰恰是它最打动人的地方。在这里，你触摸到的历史是粗粝的，你听到的传说是哀婉的，你感受到的是一种未经太多粉饰的、关于生存、权力、爱与失去的原始叙事。它让我们记起，历史不仅是王侯将相的丰功伟绩，更是每一个在高墙内生活、相爱、恐惧与希冀的普通人所共同书写的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求快速消费、平滑体验的世界里，韦利基塔博尔提供了一种珍贵的“减速”力量。它要求你跋涉一段乡村道路，它用陡峭的楼梯考验你的体力，它用昏暗的光线邀请你调动想象力。它不提供简单的答案，只呈现厚重的存在。对于每一位渴望深度游的旅人而言，这座隐藏在克罗地亚绿色心脏地带的暗黑童话城堡，是一堂关于坚韧与记忆的生动课程。它告诉你，有些美，生于忧患，成于时间，并因那些代代相传的故事而获得了不朽的生命。这不仅仅是一次观光，更是一次走进一幅活的、呼吸着的历史画卷的深刻体验。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/citadelle-de-namur" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadelle de Namur</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/schlossberg-graz" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    格
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">格拉茨城堡山</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Schlossberg</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trakai-island-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特拉凯海岛城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trakai Island Castle</p>
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
