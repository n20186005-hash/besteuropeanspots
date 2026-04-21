import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '奥尔南 Ornans｜悬崖与卢河环绕的“弗朗什-孔泰小威尼斯” - 最佳欧洲景点',
  description: '车从贝桑松驶出，钻进弗朗什-孔泰绵延的丘陵与森林，就在你觉得满眼都是重复的绿色时，一个急转弯，整座奥尔南就像从童话里“哗啦”一下倒了出来，稳稳地落进卢河凿出的峡谷里。我的第一反应是屏住了呼吸——不是因为它多宏伟，而是因为它太不真实了。那些鹅黄、淡粉、浅灰的房子，一栋挨着一栋，像被谁随意却又精心地叠放',
}

export default function OrnansFrancheComtePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '奥尔南', href: '/destinations/france' },
            { label: '奥尔南', href: '/attractions/ornans-franche-comte' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`奥尔南・Ornans・法国・奥尔南`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车从贝桑松驶出，钻进弗朗什-孔泰绵延的丘陵与森林，就在你觉得满眼都是重复的绿色时，一个急转弯，整座奥尔南就像从童话里“哗啦”一下倒了出来，稳稳地落进卢河凿出的峡谷里。我的第一反应是屏住了呼吸——不是因为它多宏伟，而是因为它太不真实了。那些鹅黄、淡粉、浅灰的房子，一栋挨着一栋，像被谁随意却又精心地叠放在一起，地基就直接扎在翡翠色的河水中。空气里有种凉丝丝的清甜，混合着河水奔流的哗啦声，还有远处面包房刚出炉的黄油酥皮的焦香。悬崖巨大的灰白色岩壁就悬在屋后，沉默而坚定，仿佛是这座小镇永恒的守护者，也是它无法逃离的背景板。
你很快会发现，河流才是这里真正的主街。卢河的水清澈得令人心颤，你能一眼望见水底圆润的卵石和摇曳的水草。十几座古桥——石桥、廊桥、小小的步行桥——像别针一样，把两岸的生活缝合在一起。当地人就倚在自家窗台上聊天，主妇在河边古老的石阶上浣洗，老先生提着一条面包慢悠悠地走过桥去。这里没有威尼斯那种戏剧性的喧闹，它的美是内敛的、生活的、带着泥土和木头气息的。你能感觉到，时间在这里不是被纪念的，而是被呼吸、被使用的。
最打动人心的，是那种极致的宁静与生动之间的平衡。悬崖带来了压迫感的壮美，河水提供了流动的韵律，而人类的生活痕迹——那些晾晒的衣物、窗台的花卉、咖啡馆外的小圆桌——则填满了所有的缝隙，让整幅画面活了过来。它不是博物馆里的标本，而是一个仍然在深深呼吸着的有机体。你坐在河边，听着永恒的流水声，看着光影在岩壁和屋顶上缓慢移动，会突然理解为什么库尔贝能从这里画出那些坚实、厚重、不带一丝虚饰的作品。这里的每一块石头、每一道波纹，都教人诚实地看待世界。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车从贝桑松驶出，钻进弗朗什-孔泰绵延的丘陵与森林，就在你觉得满眼都是重复的绿色时，一个急转弯，整座奥尔南就像从童话里“哗啦”一下倒了出来，稳稳地落进卢河凿出的峡谷里。我的第一反应是屏住了呼吸——不是因为它多宏伟，而是因为它太不真实了。那些鹅黄、淡粉、浅灰的房子，一栋挨着一栋，像被谁随意却又精心地叠放在一起，地基就直接扎在翡翠色的河水中。空气里有种凉丝丝的清甜，混合着河水奔流的哗啦声，还有远处面包房刚出炉的黄油酥皮的焦香。悬崖巨大的灰白色岩壁就悬在屋后，沉默而坚定，仿佛是这座小镇永恒的守护者，也是它无法逃离的背景板。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，河流才是这里真正的主街。卢河的水清澈得令人心颤，你能一眼望见水底圆润的卵石和摇曳的水草。十几座古桥——石桥、廊桥、小小的步行桥——像别针一样，把两岸的生活缝合在一起。当地人就倚在自家窗台上聊天，主妇在河边古老的石阶上浣洗，老先生提着一条面包慢悠悠地走过桥去。这里没有威尼斯那种戏剧性的喧闹，它的美是内敛的、生活的、带着泥土和木头气息的。你能感觉到，时间在这里不是被纪念的，而是被呼吸、被使用的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种极致的宁静与生动之间的平衡。悬崖带来了压迫感的壮美，河水提供了流动的韵律，而人类的生活痕迹——那些晾晒的衣物、窗台的花卉、咖啡馆外的小圆桌——则填满了所有的缝隙，让整幅画面活了过来。它不是博物馆里的标本，而是一个仍然在深深呼吸着的有机体。你坐在河边，听着永恒的流水声，看着光影在岩壁和屋顶上缓慢移动，会突然理解为什么库尔贝能从这里画出那些坚实、厚重、不带一丝虚饰的作品。这里的每一块石头、每一道波纹，都教人诚实地看待世界。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`奥尔南`} />
                <InfoRow label="英文名称" value={`Ornans`} />
                <InfoRow label="正式名称" value={`Ornans`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`奥尔南`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`因孕育了现实主义画派巨匠居斯塔夫·库尔贝而闻名于世，被誉为“画家之乡”。`} />
                <InfoRow label="建筑特色" value={`色彩斑斓的房屋从清澈的卢河两岸拔地而起，直接依托在巨大的石灰岩悬崖之下，形成建筑与自然奇观完美交融的独特景致。`} />
                <InfoRow label="建筑风格" value={`典型的中世纪晚期至文艺复兴时期的弗朗什-孔泰民居风格，多为陡峭的板岩屋顶和彩绘木筋墙结构。`} />
                <InfoRow label="文化价值" value={`这里是库尔贝艺术灵感的永恒源泉，其静谧的河谷风光与市井生活共同构成了法国现实主义艺术的地理与精神坐标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古镇公共区域全天开放。主要场馆如库尔贝博物馆开放时间：5月至10月，每日10:00-18:00；11月至次年4月，除周二闭馆外，每日10:00-12:00, 14:00-17:00。具体节假日安排请务必出行前在官网核对。`} />
              <InfoRow label="门票价格" value={`进入古镇免费。库尔贝博物馆门票：全价8欧元，优惠价6欧元（适用于学生、65岁以上老人等），18岁以下免费。有时与临时展览有联票。`} />
              <InfoRow label="地址" value={`25 Rue Pierre Vernier, 25290 Ornans, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发，最便捷的方式是乘坐TGV高速列车至贝桑松Viotte站（约2.5小时）。从贝桑松火车站旁的公交站，换乘蒙贝利亚尔方向的莫比公交（Mobigo）615号线，在“Ornans Centre”站下车（车程约40分钟，班次每日约10班，周末减少，务必提前查询时刻表并上车向司机购票）。自驾是最灵活的选择，从贝桑松沿D67号公路东行约30分钟即可抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起奥尔南的故事，就绕不开它脚下这条卢河。早在中世纪，湍急的卢河水流就催生了磨坊业，这座小镇因水而兴。工匠和商人们沿着河岸建起房屋和作坊，利用水流的力量来漂洗布匹、打磨谷物、锻造铁器。你可以想象，几百年前，这里充斥着水车的轰鸣、铁锤的敲击和工人们的吆喝，空气中弥漫着潮湿的木材和金属的味道。那些今天看起来如画般宁静的房屋，当年都是繁忙生产活动的前线。悬崖不仅提供了庇护，其开采出的优质石灰岩也成为了建造房屋、桥梁乃至更远处贝桑松堡垒的材料。小镇的命运，从一开始就与这水、这石紧密地捆绑在一起。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的转折点，毫无疑问，是1819年6月10日，居斯塔夫·库尔贝在此诞生。他的父亲是富裕的葡萄园主，家宅就坐落在卢河边。小库尔贝不是在画室里学画的，他是在河里游泳、在悬崖下探险、在集市上看农夫和渔夫劳作中长大的。奥尔南的山水人物，成了他血液里流淌的影像。当他后来前往巴黎，面对学院派那些神话和历史的“大题材”时，他叛逆的底气正来自于家乡这些坚实、具体、有温度的现实。于是，他画《奥尔南的葬礼》，画《碎石工》，画《筛麦妇》。他把家乡普通人的生老病死、辛勤劳动，以纪念碑式的巨大尺幅搬上巴黎的画展，震惊了整个艺术界。奥尔南，这个地图上的小点，就这样通过库尔贝的画笔，猛烈地撞入了艺术史的中心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇并非一直沐浴在艺术的荣光里。它同样经历了战争的创伤。在第二次世界大戰期间，弗朗什-孔泰是抵抗运动活跃的区域，奥尔南因其复杂的地形，也成为了庇护所和秘密通道。悬崖上的洞穴和森林，掩护过不少生命。战争的阴影过去后，奥尔南和法国许多乡村一样，面临过年轻人口外流、逐渐沉寂的危机。但或许正是库尔贝留下的遗产，赋予了它一种文化上的韧性与自觉。人们意识到，他们拥有的不是一片普通的风景，而是一幅活的“库尔贝画作”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，保护与传承成了关键词。小镇没有大拆大建，而是精心维护着中世纪的风貌。1971年，库尔贝的故居被改建为博物馆，后来更扩建为现代化的“库尔贝博物馆”，不仅收藏他本人的作品，也成为研究现实主义艺术的重镇。每年，来自世界各地的艺术朝圣者、徒步爱好者和寻找宁静的旅人，沿着库尔贝走过的路，来到卢河边，寻找他画中的视角。小镇的生活节奏依旧缓慢，但它的脉搏，因艺术而获得了永恒的跳动。从磨坊小镇到艺术圣地，奥尔南的故事，是一个关于地方如何孕育天才，而天才又如何反过来永恒定义地方的传奇。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午九点左右抵达奥尔南，这时晨雾刚刚从河面散去，阳光正开始温暖古老的墙壁，游客尚未涌入，你能独享小镇最清新的模样。整体游览可以安排一整天，上午专注于古镇核心区的漫步与库尔贝博物馆，下午则进行轻松的沿河散步或短途登山，用脚步丈量这幅“立体画作”。这样的节奏张弛有度，既能深入文化核心，又能从不同角度欣赏其自然与人文交融的极致之美。别忘了留出时间，什么都不做，只是坐在河边发一会儿呆。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和法国公共假日游客会明显增多，尽量安排工作日前往体验更佳。小镇道路多为鹅卵石铺就，务必穿一双绝对舒适防滑的步行鞋。当地人对自己的文化和库尔贝遗产极为自豪，聊天时不妨以画家或小镇历史为话题开场，你会收到更热情的微笑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇口的免费停车场，然后让自己毫无目的地迷失在那些通往河岸的、窄得只容一人通过的石板小巷里`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要推开库尔贝博物馆那扇厚重的门，站在那幅巨作《奥尔南的葬礼》真迹前，感受画中人物仿佛就要从墙上走下来的震撼力`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，直接走到它背后的卢河边，找到库尔贝当年画《鳟鱼》的精确位置，看看一个多世纪过去了，河水是否还一样碧绿湍急`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着rue de la République主街漫步，留意那些木筋墙房屋门楣上雕刻的古老日期和匠人记号，想象几个世纪前主人的生活`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走过中央的“古桥”，在桥中间停下，转过身面对小镇，你会看到明信片角度的完整画面——房屋、悬崖、教堂钟楼和倒影`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意走进一家河岸边的咖啡馆，点一杯“孔泰”奶酪配本地白葡萄酒，看着窗外鸭子列队游过，时间仿佛在这里失去了刻度`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果脚力尚可，顺着小镇南侧标记清晰的步道往悬崖上方走一段，回望时，整个奥尔南会像精致的模型一样铺陈在河谷中`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分再次回到河边，等待夕阳的金色光芒为悬崖的岩壁和教堂的尖顶披上最后一件，也是最温暖的外衣`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`库尔贝博物馆后方河岸平台`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，以低角度拍摄，将前景的卢河碧波与中景的色彩斑斓的房屋、背景的雄伟悬崖一同纳入镜头，构图饱满而有层次`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`古桥（Pont de Nahin）中央`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时左右，阳光刚好照亮东岸的房屋立面，此时拍摄可获得顺光下色彩最鲜艳、倒影最完整的经典全景`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`悬崖步道中途的观景台`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，太阳西斜，光线侧打在建筑群上，立体感极强，在此用长焦镜头可以压缩空间，拍出房屋层层叠叠直至悬崖脚下的密集感`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`卢河北岸的小巷口`}</h4>
                  <p className="text-sm text-gray-700">{`利用小巷作为天然画框，聚焦于巷子尽头的一座老桥或一栋特色房屋，最佳时间是正午阳光直射时，巷内阴影与尽头亮部形成强烈明暗对比`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`镇外D67公路的一处转弯`}</h4>
                  <p className="text-sm text-gray-700">{`驱车离开时，在镇子西侧的一个大转弯处停车，可以拍到奥尔南小镇静卧于宽阔河谷中的远景，适合在雨后天晴、空气通透时拍摄`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是河边浣洗或在自家窗口的老人，请务必先微笑示意并征得同意，尊重他们的隐私。无人机飞行在古镇上空有严格限制，起飞前务必查清当地法规，通常靠近民居和历史建筑区域是禁飞的。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河岸人家`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在卢河之上的老式水磨坊改造的民宿，夜晚枕着潺潺水声入眠，清晨打开窗就能看到河面升腾的薄雾`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`画家主题公寓`}</h4>
                  <p className="text-sm text-green-800">{`由当地艺术家经营的小型公寓，位于一栋17世纪的老宅内，装饰着库尔贝画作的复制品和本地艺术品，充满人文气息`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山居岁月`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在镇外山坡上的家庭式旅馆，房间宽敞明亮，拥有一个可以俯瞰整个奥尔南屋顶和河谷的绝美露台，早餐的果酱是自家熬制的`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`精品酒店体验`}</h4>
                  <p className="text-sm text-purple-800">{`位于古镇中心一座文艺复兴风格建筑内，仅有五间客房，每一间都保留了原始的木梁和石墙，配备现代舒适的设施，服务细致入微`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季和艺术展览期间住宿非常紧俏，务必提前数月预订。古镇中心区域夜晚极其安静，是真正远离喧嚣的所在，但娱乐设施较少，喜欢夜生活的旅人需知。选择河岸住宿时，低楼层在春季融雪或大雨后可能略有湿气。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开奥尔南好些天了，但闭上眼睛，耳边似乎还能听到卢河那不知疲倦的、哗啦啦的水流声。那声音不像大海一样充满征服感，也不像小溪一样细弱，它是一种平稳的、有力的背景音，像是这片土地沉着的心跳。我想，这就是奥尔南最珍贵的馈赠——它给予你一种关于“坚实”的体验。悬崖是坚实的，几百年来默默矗立；石头房子是坚实的，承载了一代又一代人的悲欢；库尔贝画笔下的现实主义精神是坚实的，它告诉我们要正视生活本身的样子。在这个滤镜美化一切、虚拟冲击现实的时代，这种“坚实感”成了一种稀缺的慰藉。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它或许没有巴黎的辉煌，没有蔚蓝海岸的炫目，但它拥有一种完成度极高的、自洽的美。自然、历史、艺术与日常生活在这里不是割裂的景点，而是交融成了同一首宁静而有力的田园诗。你会在这里学会慢下来，学会看一片云在悬崖顶端的停留，学会欣赏一扇木门上光阴留下的包浆。对于每一位渴望深度游的旅人而言，奥尔南不仅仅是一个目的地，它更像是一次心灵的校准。它提醒我们，最打动人心的风景，往往就生长在最质朴的土地上，等待着我们用一颗不浮躁的心，去看见，去感受，去成为画中人。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-peyrepertuse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩雷帕蒂斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Peyrepertuse</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-meung-sur-loire" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Meung-sur-L-Loire</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chartres-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙特尔大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chartres Cathedral</p>
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
