import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '苏博蒂察新艺术建筑群 Subotica Art Nouveau｜探访塞尔维亚北部的梦幻色彩之城 - 最佳欧洲景点',
  description: '如果你对欧洲建筑的想象还停留在哥特的尖顶和巴洛克的繁复，那么苏博蒂察会像一盒突然打翻在潘诺尼亚平原阳光下的糖果，用甜美、俏皮又略带异想天开的色彩，瞬间重塑你的感官。我的第一印象并非来自某栋单一的建筑，而是一种弥漫在空气中的、轻盈的快乐。这里的街道宽阔，阳光似乎都比别处更慷慨，毫无保留地洒在一栋栋外墙...',
}

export default function SuboticaArtNouveauArchitecturePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '苏博蒂察新艺术建筑群', href: '/attractions/subotica-art-nouveau-architecture' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`苏博蒂察新艺术建筑群・Subotica Art Nouveau・塞尔维亚・苏博蒂察`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`如果你对欧洲建筑的想象还停留在哥特的尖顶和巴洛克的繁复，那么苏博蒂察会像一盒突然打翻在潘诺尼亚平原阳光下的糖果，用甜美、俏皮又略带异想天开的色彩，瞬间重塑你的感官。我的第一印象并非来自某栋单一的建筑，而是一种弥漫在空气中的、轻盈的快乐。这里的街道宽阔，阳光似乎都比别处更慷慨，毫无保留地洒在一栋栋外墙贴着鹅黄、薄荷绿、天蓝和淡粉色釉面瓷砖的建筑上。那些瓷砖在光线下闪烁着温润的釉光，仿佛建筑本身在呼吸。空气中飘着刚烘焙好的“ burek ”（肉馅饼）的黄油香，和从咖啡馆飘出的浓郁咖啡香混在一起，耳边是塞尔维亚语、匈牙利语甚至德语交织的轻柔对话。这里没有巍峨压人的历史沉重感，取而代之的是一种鲜活的、被精心呵护的市民自豪感。当地人坐在广场长椅上晒太阳，孩子们绕着装饰着铁铸向日葵的灯柱奔跑，那些一个世纪前建造的梦幻房子，就是他们日常生活最华丽的背景板。
苏博蒂察最打动人心的，正是这种“艺术融入生活”的毫不费力。新艺术运动在这里不是博物馆里冰冷的展品，而是邮局、市政厅、 synagogue、甚至普通公寓楼的皮肤。建筑师们仿佛拿着调色盘和画笔的城市诗人，把对花朵、藤蔓、孔雀羽毛和神话人物的热爱，统统烧制成瓷砖，锻造成铁花，绘制成壁画，镶嵌在城市的每一个转角。走在街上，你会不由自主地抬头，因为惊喜总在头顶：阳台的曲线像舒卷的浪花，窗棂的雕饰是绽放的向日葵，门楣上可能趴着一只陶瓷的猫头鹰，正用彩玻璃做的眼睛打量着你。这是一种充满了叙事性的建筑，每一栋房子都在向你低声诉说着一个关于自然、自由与民族之美的故事。
这座城市的核心魅力，在于它身处文化十字路口的混血美感。它属于塞尔维亚，却紧邻匈牙利，历史上深受奥匈帝国影响。于是，你看到的是匈牙利分离派大师厄登·莱切纳和马歇尔·科莫尔的杰作，它们大胆、华丽、充满象征意义；但同时，塞尔维亚的民间图案、东正教的色彩感觉，又悄悄地渗透在细节里，形成了一种独此一家的“苏博蒂察风格”。它不像巴黎或布鲁塞尔的新艺术那样强调工业时代的抽象线条，而是更温暖、更感性、更贴近土地与民间传说。在这里，艺术不是高高在上的宣言，而是一场全城参与的、持续了数十年的盛大节日，那份欢庆的余温，至今仍能触摸得到。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`如果你对欧洲建筑的想象还停留在哥特的尖顶和巴洛克的繁复，那么苏博蒂察会像一盒突然打翻在潘诺尼亚平原阳光下的糖果，用甜美、俏皮又略带异想天开的色彩，瞬间重塑你的感官。我的第一印象并非来自某栋单一的建筑，而是一种弥漫在空气中的、轻盈的快乐。这里的街道宽阔，阳光似乎都比别处更慷慨，毫无保留地洒在一栋栋外墙贴着鹅黄、薄荷绿、天蓝和淡粉色釉面瓷砖的建筑上。那些瓷砖在光线下闪烁着温润的釉光，仿佛建筑本身在呼吸。空气中飘着刚烘焙好的“ burek ”（肉馅饼）的黄油香，和从咖啡馆飘出的浓郁咖啡香混在一起，耳边是塞尔维亚语、匈牙利语甚至德语交织的轻柔对话。这里没有巍峨压人的历史沉重感，取而代之的是一种鲜活的、被精心呵护的市民自豪感。当地人坐在广场长椅上晒太阳，孩子们绕着装饰着铁铸向日葵的灯柱奔跑，那些一个世纪前建造的梦幻房子，就是他们日常生活最华丽的背景板。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`苏博蒂察最打动人心的，正是这种“艺术融入生活”的毫不费力。新艺术运动在这里不是博物馆里冰冷的展品，而是邮局、市政厅、 synagogue、甚至普通公寓楼的皮肤。建筑师们仿佛拿着调色盘和画笔的城市诗人，把对花朵、藤蔓、孔雀羽毛和神话人物的热爱，统统烧制成瓷砖，锻造成铁花，绘制成壁画，镶嵌在城市的每一个转角。走在街上，你会不由自主地抬头，因为惊喜总在头顶：阳台的曲线像舒卷的浪花，窗棂的雕饰是绽放的向日葵，门楣上可能趴着一只陶瓷的猫头鹰，正用彩玻璃做的眼睛打量着你。这是一种充满了叙事性的建筑，每一栋房子都在向你低声诉说着一个关于自然、自由与民族之美的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城市的核心魅力，在于它身处文化十字路口的混血美感。它属于塞尔维亚，却紧邻匈牙利，历史上深受奥匈帝国影响。于是，你看到的是匈牙利分离派大师厄登·莱切纳和马歇尔·科莫尔的杰作，它们大胆、华丽、充满象征意义；但同时，塞尔维亚的民间图案、东正教的色彩感觉，又悄悄地渗透在细节里，形成了一种独此一家的“苏博蒂察风格”。它不像巴黎或布鲁塞尔的新艺术那样强调工业时代的抽象线条，而是更温暖、更感性、更贴近土地与民间传说。在这里，艺术不是高高在上的宣言，而是一场全城参与的、持续了数十年的盛大节日，那份欢庆的余温，至今仍能触摸得到。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`苏博蒂察新艺术建筑群`} />
                <InfoRow label="英文名称" value={`Subotica Art Nouveau`} />
                <InfoRow label="正式名称" value={`Subotica Art Nouveau Architectural Ensemble`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`苏博蒂察`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`20世纪初奥匈帝国边境城市文化繁荣与民族认同觉醒的巅峰物质体现，是欧洲新艺术运动在巴尔干地区最集中、最绚烂的绽放。`} />
                <InfoRow label="建筑特色" value={`大量运用有机曲线、华丽釉面陶瓷装饰、彩色玻璃、锻造铁艺以及充满民族寓言与自然主题的壁画。`} />
                <InfoRow label="建筑风格" value={`以匈牙利分离派风格为主导，融合了塞尔维亚民间艺术元素与欧洲新艺术运动潮流的独特地方变体。`} />
                <InfoRow label="文化价值" value={`一座活着的建筑博物馆，见证了多瑙河流域多元文化共生、碰撞并最终凝结成独特地方美学的历史进程。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`建筑群为开放式街区，全天可游览外部。核心建筑内部开放时间各异：市政厅工作日上午9点至下午5点开放，周末及节假日开放时间缩短至上午10点至下午3点；莱切纳宫博物馆周二至周日上午10点至下午6点开放；犹太教堂通常需预约参观或参加定时导览团，具体时间随季节变动，夏季（5月至9月）开放更频繁。建议行前在苏博蒂察旅游信息中心官网确认最新时间。`} />
              <InfoRow label="门票价格" value={`街区漫步免费。进入单栋建筑需购票：市政厅门票约300第纳尔（约2.5欧元），含导览；莱切纳宫博物馆门票约200第纳尔；犹太教堂参观费用约500第纳尔，通常包含专业讲解。学生、儿童及老年人享有半价优惠。推荐购买“苏博蒂察艺术通票”，可在旅游信息中心购买，涵盖三处主要景点并有折扣。`} />
              <InfoRow label="地址" value={`Trg Slobode 1, 24000 Subotica, Serbia`} />
              <InfoRow label="交通方式" value={`从塞尔维亚首都贝尔格莱德的尼古拉·特斯拉国际机场出发，最便捷的方式是租车自驾，沿E75公路向北行驶约2.5小时可达苏博蒂察。公共交通：从贝尔格莱德中心火车站乘坐火车，班次频繁，车程约3-3.5小时，沿途可欣赏潘诺尼亚平原风光；或从贝尔格莱德汽车站乘坐大巴，车程约2.5-3小时，班次更多。苏博蒂察城市很小，所有新艺术建筑精华点均可轻松步行抵达。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解苏博蒂察为何会成为一座新艺术之城，得把时钟拨回20世纪初。那时的苏博蒂察，还是奥匈帝国统治下匈牙利王国的一部分，名为“塞格德-苏博蒂察”。得益于肥沃的潘诺尼亚平原和重要的铁路枢纽地位，这座城市在19世纪末迎来了经济的黄金时代。新兴的商人、银行家、犹太社群和塞尔维亚中产阶级积累了大量财富，他们渴望用最新的、最时髦的方式，来彰显自己的成功与文化品位。而当时席卷欧洲的“新艺术运动”，反对刻板的学院派历史主义，倡导回归自然、赞美曲线、追求整体艺术，正好击中了这座渴望表达自我、塑造崭新城市身份的边缘城市的心。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`1902年，一个决定性的项目拉开了这场建筑革命的序幕：建造新的市政厅。市议会没有选择保守的设计，而是大胆地委托了当时在布达佩斯风头正劲的匈牙利建筑师组合——马歇尔·科莫尔和德热·雅卡布。这两位是匈牙利分离派的旗手，他们的设计完全跳出了窠臼。当蓝图公布时，想必引起了哗然：这不像一个严肃的政府机构，更像一个巨大的、从童话里搬出来的陶瓷首饰盒！1908年奠基，1912年完工，这座市政厅成为了整座城市乃至整个地区的宣言。它通体覆盖着来自匈牙利著名陶瓷厂“乔尔瑙伊”的彩色釉砖，主塔楼高耸，立面布满了陶瓷的葡萄藤、向日葵和塞尔维亚民族服饰图案的浮雕。最惊艳的是内部，巨大的彩色玻璃穹顶让议事厅沐浴在变幻的光影中，壁画描绘着本地历史与神话，锻造铁艺的楼梯扶手蜿蜒如植物藤蔓。它宣告着：苏博蒂察是现代的、是艺术的、是自信的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`几乎与市政厅同时，另一位分离派大师厄登·莱切纳也为苏博蒂察留下了不朽的印记。他设计的莱切纳宫，原本是当地一位保险业大亨的私宅，如今是城市博物馆。如果说市政厅是华丽的公共乐章，莱切纳宫就是一首精致的室内诗。建筑外观相对内敛，但内部却是一个感官的宝藏。尤其是那间“蓝色沙龙”，四面墙和天花板完全被一幅巨大的、手绘的紫藤花壁画所覆盖，深浅不一的蓝色花朵从天花板垂落，让人仿佛置身于一个永不凋零的春日花园之下。莱切纳对光线和色彩的运用达到了极致，他深知如何让建筑本身成为一种沉浸式的体验。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`犹太教堂的建造，则是另一个关于社群、信仰与美的故事。20世纪初，苏博蒂察拥有一个繁荣且高度融合的犹太社区。他们决定建造一座能与欧洲任何大城市媲美的 synagogue。他们再次邀请了莱切纳和科莫尔，结果便诞生了这座被誉为“新艺术运动犹太教堂典范”的建筑。它大胆地将匈牙利民间艺术元素（如孔雀图案，象征不朽）与犹太象征符号（如大卫之星）融合，内部巨大的穹顶由金色和蓝色的玻璃拼接成抽象的星空与花卉图案，阳光穿过时，整个空间流光溢彩，肃穆而又充满生命的欢欣。它不仅是礼拜场所，更是犹太社群对这座城市文化繁荣所做贡献的永恒见证。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，美好的时代被两次世界大战和复杂的20世纪历史打断。苏博蒂察在战后划归南斯拉夫，许多建筑在动荡中失修，那些精致的陶瓷在风雨中剥落。幸运的是，当地人从未忘记这些建筑的价值。近二三十年来，特别是塞尔维亚独立后，一场缓慢而坚定的修复运动展开了。人们像修复一件件巨大的瓷器一样，小心翼翼地清洗、修补、重烧瓷砖，让那些鹅黄、粉蓝和草绿重新焕发光彩。今天的苏博蒂察，不仅是在展示历史，更是在持续进行一场与时间赛跑的文化复兴。每一块被重新贴上的瓷砖，都是对那个短暂却辉煌的、相信美可以改变生活的时代，最深情的致敬。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一个完整、悠闲的白天来沉浸式体验苏博蒂察的新艺术之美。最佳抵达时间是上午九点左右，这时柔和的晨光最适合为建筑外墙的彩色瓷砖镀上金边，而且游客尚未涌入。整体游览节奏宜慢不宜快，因为精髓在于细节的发现和氛围的品味。路线设计为从核心地标放射状散开，再回到中心，全程步行即可，总耗时约6-7小时，包含充足的咖啡馆休息和内部参观时间。这样安排能让你先建立宏观震撼，再深入微观惊喜，最后在黄昏的暖光中获得最圆满的视觉与心灵体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`市政厅和犹太教堂的内部导览团非常抢手，尤其是英语团，强烈建议提前在官网或旅游信息中心预订。参观犹太教堂时需衣着得体，男性通常会被要求戴上提供的小圆帽（Kippah），请保持安静肃穆。苏博蒂察夏季阳光强烈且广场遮蔽少，务必准备好防晒霜、帽子和充足的饮用水。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从自由广场的市政厅开始你的旅程，先别急着进去，绕着它走一圈，欣赏不同角度下那些陶瓷贴面在阳光下如何变幻色彩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开市政厅厚重的木门进入内部，径直抬头仰望那个令人屏息的彩色玻璃穹顶，然后沿着如植物藤蔓般的铁艺楼梯缓缓走上二楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在市政厅塔楼下的旅游信息中心获取一份地图，然后穿过广场，去街角那家有着精美彩绘立面的“Cafe Galleria”点一杯塞尔维亚式 espresso，像当地人一样站在柜台前快速喝完。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着马蒂察·斯尔普斯卡街漫步，目光不要离开两侧公寓楼的阳台和窗楣，你会发现铁铸的百合、陶瓷的蜜蜂和彩绘的寓言人物藏在各个角落。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进莱切纳宫博物馆，不要错过任何一个房间，尤其要在那间被紫藤花壁画完全包裹的“蓝色沙龙”里静静地坐上一会儿，感受被艺术吞噬的瞬间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找并拜访那座宛如巨大彩色珠宝盒的犹太教堂，如果赶上开放时间，一定要进去，看正午的阳光如何透过它的彩色玻璃穹顶，在内部洒下一地流动的星空。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在犹太教堂附近的“Salas 137”餐厅享用一顿融合了塞尔维亚与匈牙利风味的午餐，尝尝当地的鱼汤和烤肉，让味蕾也加入这场文化交融的盛宴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后悠闲地散步到稍远的邮政储蓄银行大楼和现代美术馆，看看新艺术风格如何被应用于不同的公共功能建筑，完成你对这座城市建筑美学的最后拼图。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 9 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分回到自由广场，坐在长椅上，看夕阳把市政厅的塔楼染成蜜糖般的金色，等待华灯初上，建筑立面的装饰线条在灯光下浮现出另一种魔幻轮廓。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市政厅东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的侧光能完美勾勒出主塔楼的立体感和陶瓷装饰的细腻纹理，将广场上的行人与绿植作为前景，构图更生动。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`莱切纳宫“蓝色沙龙”内部细节`}</h4>
                  <p className="text-sm text-gray-700">{`利用室内柔和的自然光，将手机或相机贴近壁画墙面，聚焦于一簇紫藤花或一个神话人物面部特写，捕捉笔触与色彩的魔力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`犹太教堂外部全景`}</h4>
                  <p className="text-sm text-gray-700">{`从教堂前的小花园向后退，用广角镜头将建筑主体与其在水池中的倒影一同纳入画面，最佳时间是晴朗的上午，天空的蓝色与建筑的色彩相映成趣。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`马蒂察·斯尔普斯卡街景纵深`}</h4>
                  <p className="text-sm text-gray-700">{`站在街道中段，利用两侧色彩柔和、装饰各异的新艺术风格公寓楼作为引导线，拍摄街道向远处延伸的透视感，等待一个骑自行车的人或穿红色衣服的行人进入画面作为点睛之笔。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`自由广场黄昏光影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后半小时，在广场西侧寻找角度，拍摄市政厅被金色余晖笼罩、而天空呈现蓝调时刻的对比色温照片，建筑的轮廓灯初亮，氛围感绝佳。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄建筑内部（尤其是犹太教堂和博物馆）前，务必确认是否允许拍照，部分区域可能禁止使用闪光灯或三脚架。尊重当地居民隐私，拍摄阳台或窗内景象时请保持距离。多利用反射，广场地面的水洼、咖啡馆的玻璃窗都是创造有趣构图的天然道具。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于市中心步行街旁的家庭式公寓“Art Nouveau Room”，房东是一位退休教师，会热情地给你指出附近连地图上都没标注的建筑细节，早晨能从窗户直接看到教堂的尖顶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`“Vila Park”酒店，本身就是一栋经过精心修复的新艺术风格别墅，房间挑高，保留着原始彩绘玻璃窗和浮雕天花板，花园里种满了玫瑰，仿佛住在景点里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`“Prezident Hotel”酒店，坐落在安静的老街区，由几栋相连的历史建筑改造而成，设计巧妙融合了现代舒适与复古元素，水疗中心设在一个古老的酒窖里，提供极致的放松。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特民宿`}</h4>
                  <p className="text-sm text-purple-800">{`城市边缘一个由传统“ salaš ”（潘诺尼亚平原农庄）改造的民宿，远离喧嚣，晚上可以看见银河，白天主人会教你制作传统的塞尔维亚烘焙食品。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`苏博蒂察非常安全，治安良好，但老城部分酒店可能没有电梯，预订时如有需要请提前确认。夏季（7-8月）和重大节日期间住宿紧张，务必提前预订。如果想体验更地道的氛围，可以选择住在离中心广场步行10-15分钟的街区，更能感受本地人的生活节奏。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开苏博蒂察许久，我脑海里萦绕不去的，不是某一张具体的照片，而是一种感觉——一种被色彩温柔拥抱、被曲线轻轻安抚的感觉。在这个常常被宏大历史叙事所定义的巴尔干地区，苏博蒂察像一首轻盈的间奏曲，提醒着我们：历史不止有战争的伤痕与帝国的重量，还有普通人对于美的不懈追求，以及一个社区通过建筑来表达欢乐与希望的集体冲动。那些陶瓷贴面、铁艺花朵，是动荡世纪来临前，人们对和平、繁荣与艺术融合生活最天真也最真诚的信仰。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求效率、设计日益同质化的快节奏世界里，苏博蒂察的存在，像是一个关于“地方性”与“人文温度”的珍贵寓言。它告诉我们，真正的魅力往往诞生于文化的边缘与交汇处，那里有最多元的养料，能开出最独特的花。它不需要庞大的规模，只需足够的爱与匠心，就能将一整座城市变成一件可以漫步其中的艺术品。对于每一位热爱深度游的旅人来说，苏博蒂察不仅仅是一个景点清单上的名字，它是一次心灵的色彩疗愈，是一场穿越到那个依然相信“美能拯救世界”的乐观时代的短暂旅程。在这里，你会找回那种单纯为了一片瓷砖的颜色、一朵铁铸玫瑰的曲线而怦然心动的能力，这或许才是旅行能带给我们的、最珍贵的礼物。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stari-ras-and-sopocani-serbian-cradle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺维帕扎尔与斯塔里拉斯（塞尔维亚的中世纪摇篮）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Novi Pazar and Stari Ras</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/novi-sad-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺维萨德要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Petrovaradin Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/smederevo-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯梅代雷沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Smederevo Fortress</p>
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
