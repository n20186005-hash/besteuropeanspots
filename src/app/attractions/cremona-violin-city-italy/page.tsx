import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '克雷莫纳 Cremona ｜ 斯特拉迪瓦里的故乡，空气中飘荡着松香与音符的小提琴圣城 - 最佳欧洲景点',
  description: '当你的双脚第一次踏上克雷莫纳市政广场那些温热的、被岁月磨出光泽的粉红色大理石路面时，最先袭击你的可能不是视觉，而是声音。那不是普通的城市白噪音，而是一阵突如其来的、清亮如泉的小提琴旋律，从一个敞着门的古老建筑二楼窗口流淌下来，与广场另一侧咖啡馆的杯碟轻碰声、鸽子扑翅声混在一起。你愣住，随即深呼吸，空',
}

export default function CremonaViolinCityItalyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '克雷莫纳', href: '/attractions/cremona-violin-city-italy' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`克雷莫纳・Cremona・意大利・克雷莫纳`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你的双脚第一次踏上克雷莫纳市政广场那些温热的、被岁月磨出光泽的粉红色大理石路面时，最先袭击你的可能不是视觉，而是声音。那不是普通的城市白噪音，而是一阵突如其来的、清亮如泉的小提琴旋律，从一个敞着门的古老建筑二楼窗口流淌下来，与广场另一侧咖啡馆的杯碟轻碰声、鸽子扑翅声混在一起。你愣住，随即深呼吸，空气中有一股独特的、令人安神的香气——那是陈年木材、清漆和松香混合的味道，像一座看不见的森林，温柔地包裹着整座城市。
抬眼望去，广场就像一场建筑艺术的露天交响乐。敦实雄伟的罗马式大教堂带着它那大理石浮雕立面占据C位，旁边矗立着仿佛要刺破伦巴第平原蓝天的托拉佐钟楼，那是全欧洲最高的中世纪砖砌钟楼之一。但克雷莫纳的魅力远不止于此。它的核心藏在那些不起眼的、有着高大窗户的临街店铺里。走近看，橱窗后总有一盏明亮的灯，灯下总有一位神情专注的匠人，弓着背，手持刻刀，正在一块枫木或云杉木上施展魔法。这里没有流水线，只有此起彼伏的、细碎的打磨声。你会发现，药店、面包店和小提琴作坊并列开在一条街上，买一把新鲜出炉的面包和订购一把等待三年的小提琴，在这里是同等日常的事情。
这座城市的心跳，与琴箱的共鸣频率同步。走在拱廊下，你随时可能与一位背着琴盒、行色匆匆的年轻学生擦肩而过；在街角餐厅，邻桌的老先生可能会从身旁的琴盒里取出他珍爱的“老伙计”，即兴拉上一段维瓦尔第的《四季》，不为讨钱，只为助兴。克雷莫纳不是一座关于过去遗产的冰冷博物馆，它是一个仍在旺盛生长、不断吞吐着音乐与木材的生命体。来到这里，你不是在“参观”小提琴，而是浸入了一个被小提琴塑造了呼吸节奏的生活本身。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你的双脚第一次踏上克雷莫纳市政广场那些温热的、被岁月磨出光泽的粉红色大理石路面时，最先袭击你的可能不是视觉，而是声音。那不是普通的城市白噪音，而是一阵突如其来的、清亮如泉的小提琴旋律，从一个敞着门的古老建筑二楼窗口流淌下来，与广场另一侧咖啡馆的杯碟轻碰声、鸽子扑翅声混在一起。你愣住，随即深呼吸，空气中有一股独特的、令人安神的香气——那是陈年木材、清漆和松香混合的味道，像一座看不见的森林，温柔地包裹着整座城市。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`抬眼望去，广场就像一场建筑艺术的露天交响乐。敦实雄伟的罗马式大教堂带着它那大理石浮雕立面占据C位，旁边矗立着仿佛要刺破伦巴第平原蓝天的托拉佐钟楼，那是全欧洲最高的中世纪砖砌钟楼之一。但克雷莫纳的魅力远不止于此。它的核心藏在那些不起眼的、有着高大窗户的临街店铺里。走近看，橱窗后总有一盏明亮的灯，灯下总有一位神情专注的匠人，弓着背，手持刻刀，正在一块枫木或云杉木上施展魔法。这里没有流水线，只有此起彼伏的、细碎的打磨声。你会发现，药店、面包店和小提琴作坊并列开在一条街上，买一把新鲜出炉的面包和订购一把等待三年的小提琴，在这里是同等日常的事情。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座城市的心跳，与琴箱的共鸣频率同步。走在拱廊下，你随时可能与一位背着琴盒、行色匆匆的年轻学生擦肩而过；在街角餐厅，邻桌的老先生可能会从身旁的琴盒里取出他珍爱的“老伙计”，即兴拉上一段维瓦尔第的《四季》，不为讨钱，只为助兴。克雷莫纳不是一座关于过去遗产的冰冷博物馆，它是一个仍在旺盛生长、不断吞吐着音乐与木材的生命体。来到这里，你不是在“参观”小提琴，而是浸入了一个被小提琴塑造了呼吸节奏的生活本身。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`克雷莫纳`} />
                <InfoRow label="英文名称" value={`Cremona`} />
                <InfoRow label="正式名称" value={`Cremona`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`克雷莫纳`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是文艺复兴以来世界顶级小提琴制作艺术的发源地与永恒心脏，直接定义了现代提琴的音色与形制。`} />
                <InfoRow label="建筑特色" value={`宏伟的罗马式与哥特式建筑群环绕着意大利北部最美的市政广场之一，高达112米的托拉佐钟楼是城市的视觉与听觉地标。`} />
                <InfoRow label="建筑风格" value={`以伦巴第罗马式为主体，混搭着后期精巧的哥特式装饰与文艺复兴时期的优雅细节。`} />
                <InfoRow label="文化价值" value={`一个将极致手工艺、不朽音乐与每日生活完美融合的活态文化标本，几百年来，木头、漆料与旋律在这里共同呼吸。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`整座古城全天可漫步，但核心室内景点有时间限制。大教堂及洗礼堂开放时间为每日上午7:30至12:00，下午3:30至7:00；市政博物馆与斯特拉迪瓦里博物馆通常为周二至周日开放，时间为上午10:00至下午6:00（冬季可能缩短至5:00）。众多私人制琴作坊需要提前预约参观。大部分商店和作坊在周日及意大利传统节日（如8月15日圣母升天节）会闭门休息，但广场上的街头音乐家们永不缺席。`} />
              <InfoRow label="门票价格" value={`古城区域免费。大教堂免费进入。市政博物馆（包含小提琴展厅）门票约12欧元。斯特拉迪瓦里博物馆门票约10欧元。通常有联票出售，约15欧元可参观多个博物馆。学生、65岁以上老人及团体享有折扣，具体请在各售票点查询。聆听一场在历史宫殿内举办的音乐会票价从25欧元到80欧元不等，物超所值。`} />
              <InfoRow label="地址" value={`Piazza del Comune, 26100 Cremona CR, Italy`} />
              <InfoRow label="交通方式" value={`最近的国际机场是米兰的马尔彭萨机场或利纳特机场。从米兰中央火车站乘坐区域火车前往克雷莫纳是最佳选择，车程约1小时至1.5小时，班次频繁，每小时至少有1-2班，可在意铁官网或车站自动售票机购票，建议购买当日往返票更灵活。从克雷莫纳火车站步行至市中心的市政广场仅需15分钟，沿途就会开始经过一些制琴工作室的橱窗。如果自驾，古城周边有收费停车场，但老城区ZTL限行，不建议开车进入。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从十六世纪中叶讲起。当时，克雷莫纳是米兰公国下一个富裕的城镇，繁荣的贸易和农业滋养了这里的艺术。但谁能想到，一种乐器的诞生，将让它的名字响彻世界。这一切始于一个叫安德烈亚·阿玛蒂的年轻人，他被认为是克雷莫纳小提琴学派的创始人。在十六世纪中期，他借鉴了中世纪的维埃尔琴和里拉琴，创造出了更符合人体工学、音色更优美洪亮的小提琴雏形。他的工作室订单不断，客户甚至包括法国国王。阿玛蒂家族就像播下了一颗伟大的种子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然后，黄金时代到来了。十七世纪，阿玛蒂的学徒中出了两位光耀千古的巨人：安东尼奥·斯特拉迪瓦里和安德烈亚·瓜奈利。斯特拉迪瓦里，这个名字后来成为了顶级小提琴的代名词。他并非横空出世的天才，而是一位精益求精的革新者。他活了九十多岁，制作了超过一千件乐器，其中约六百五十件留存至今。他做了什么？他延长了琴身，改进了弧度，调整了F孔的造型，并发明了他那神秘莫测的“斯特拉迪瓦里漆”。传说他的漆料配方里有蜂蜜、蛋清甚至火山灰。这些改动看似细微，却共同造就了那种无可比拟的、兼具力量与甜美、既能穿透庞大交响乐团又能细腻耳语的“黄金之音”。与他同时代的瓜奈利则走了另一条路，他的琴（特别是其孙子“耶稣·瓜奈利”所制）外观更为粗犷不羁，但音色却狂野、深沉，充满爆发力，像一位戏剧性的男中音，帕格尼尼最爱用它来炫技。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`十八世纪中叶，随着斯特拉迪瓦里和瓜奈利家族的衰落，克雷莫纳的制琴业一度沉寂，光芒似乎转移到了其他欧洲城市。拿破仑的战争也给这里带来了动荡。整个十九世纪，克雷莫纳更像一个沉睡的巨人，守着无价的遗产，却少了创造的活力。那些伟大的古琴散落世界各地的收藏家和演奏家手中，成为传奇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，根脉从未断绝。真正的复兴发生在二十世纪。1937年，一座以斯特拉迪瓦里命名的学校成立了，这不是一所普通的学校，它是一个宣言，旨在系统性地复兴克雷莫纳的制琴传统。大师们重新开始研究古代大师的图纸、弧度和漆料。更重要的是，一种“工作室-学徒”的传统模式被重新激活。如今，城里几百家作坊里工作的，很多都是这所学校的毕业生。他们不仅复制斯特拉迪瓦里，更在理解其精髓的基础上，探索自己的声音。每年，国际制琴大赛在这里举行，新一代的“斯特拉迪瓦里”正在诞生。历史在这里不是一个闭环，而是一个螺旋上升的阶梯。从阿玛蒂到斯特拉迪瓦里，从沉寂到复兴，克雷莫纳的故事讲述的是：当一门手艺融入一座城市的血液，它便能穿越任何时代的寒冬，在下一个春天，发出更悠扬的回响。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天时间，从清晨到夜晚，完整感受克雷莫纳的日与夜。最好在上午9点前抵达市政广场，这时游客未至，阳光正好斜照在大教堂立面上，光影绝美，且能听到制琴作坊陆续开门的声音。整体游览节奏宜慢不宜快，核心是“沉浸”而非“打卡”。上午聚焦广场建筑群和博物馆，获取历史与知识的全景；下午深入街巷，预约参观作坊，与匠人交流，触摸工艺的温度；傍晚享受美食后，务必安排一场音乐会，让听觉完成最后的朝圣。这样一天下来，你将从历史、技艺、生活与艺术四个维度，真正读懂这座小提琴之城。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必提前至少一两周通过邮件或电话预约你想参观的制琴作坊，热门大师的日程非常满，临时拜访很可能吃闭门羹。穿着舒适的鞋子，老城全是石板路，且你需要长时间站立欣赏作坊内的工作。警惕广场上过于热情、要带你“快速参观秘密作坊”的陌生人，正规作坊都需要预约且通常低调。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔奇迹广场，用手触摸大教堂那冰凉而布满故事浮雕的玫瑰色大理石墙面，静静等待整点时分托拉佐钟楼上洪亮的钟声洒遍全城。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身走进市政宫，在略显昏暗但庄严的提琴博物馆里屏住呼吸，近距离凝视斯特拉迪瓦里和瓜奈利真迹那迷人的弧度与岁月留下的漆色裂纹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，沿着 via Platina 街慢慢逛，把脸贴近那些作坊的橱窗，看匠人如何将一块粗粝的木料在刨刀下渐渐变得光滑优雅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`提前预约一家制琴作坊进行简短拜访，亲耳听听师傅讲解面板厚度差0.1毫米对音色产生的神奇影响，并闻一闻那弥漫在工作间的松木与清漆的芬芳。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午餐后探访斯特拉迪瓦里博物馆，在他故居的房间里想象大师当年在此画下图稿、调配漆料，并完成一把又一把传奇名琴的日日夜夜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前登上托拉佐钟楼之巅，让晚风拂面，俯瞰整个克雷莫纳老城红色的屋顶和远处波河平原的暮色，寻找那些隐藏在小巷中的作坊屋顶天窗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家本地人推荐的 trattoria 享用一顿以南瓜馄饨或奶油炖饭为特色的晚餐，和同桌的食客聊聊他们是否认识某位制琴师。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当晚的重头戏是去一所历史建筑改建的音乐厅，在星空般的穹顶下闭上眼睛，聆听由本地音乐家用可能产自同一条街的现代提琴奏出的古典乐章。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`市政广场东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒出大教堂、钟楼与洗礼堂三座建筑叠加的宏伟轮廓，使用广角镜头并将前景的行人作为动态点缀。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`托拉佐钟楼顶部环拍`}</h4>
                  <p className="text-sm text-gray-700">{`登顶后在每个方向都能拍到红瓦老城的脉络，最好用长焦镜头拉近那些作坊标志性的高窗和阳台，捕捉城市的工作肌理。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`制琴作坊内部特写`}</h4>
                  <p className="text-sm text-gray-700">{`征得同意后，聚焦匠人布满木屑的双手与正在雕刻的琴头，利用窗口自然光，大光圈虚化背景杂乱工具，讲述一个专注的故事。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`斯特拉迪瓦里博物馆的窗边`}</h4>
                  <p className="text-sm text-gray-700">{`将展柜中古老的制琴工具与窗外现代的城市屋顶同框，形成跨越时空的对话，建议使用框架式构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`波河河堤远眺`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏时分走到城市东侧的波河岸边，用中焦镜头拍摄对岸老城全景，特别是被夕照染成金色的托拉佐钟楼剪影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在作坊内拍摄务必事先征得明确同意，且绝对不要使用闪光灯，强光会对木材和漆面造成影响。拍摄匠人工作时请保持安静和尊重，最好用静音快门。许多博物馆内部禁止拍照，室外建筑则百无禁忌。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心精品酒店`}</h4>
                  <p className="text-sm text-blue-800">{`由一栋十六世纪贵族宫殿改造而成，房间挑高极高，保留着原始壁画，早晨在庭院里吃早餐时可能听到其他房客在房间试琴的隐约旋律。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`温馨家庭式民宿`}</h4>
                  <p className="text-sm text-green-800">{`位于一条安静的作坊街，房东本人就是一位退休的音乐教师，她会为你准备地道的早餐，并乐意分享城里最值得一听的小型音乐会信息。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在大教堂广场的拱廊之上，拥有一个可以俯瞰整个广场的私人露台，夜晚听着钟声和隐约的琴声入睡，是电影般的体验。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外田园农庄`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以选择城外波河畔的乡村农庄，享受完全宁静的夜晚，清晨在鸟鸣和草香中醒来，再驱车十分钟进入音乐的圣殿。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`住在老城内虽然价格稍高，但能获得无与伦比的沉浸感，尤其是夜晚和清晨，整个古城仿佛专属于你。克雷莫纳治安极好，但老建筑隔音可能一般，介意者可选不临主街的房间。如果遇到国际制琴大赛或音乐节期间，务必提前数月预订。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开克雷莫纳许久后，那混合着木头、清漆和咖啡的空气，那忽远忽近的琴音，依然会不时萦绕在记忆的某个角落。这座城市给我的最深触动，并非仅仅是它拥有多么辉煌的历史，而在于它将一种极致的美学，如此朴素、如此扎实地融进了每一天的烟火气里。在这里，艺术不是高悬在殿堂仅供仰望的图腾，它就是邻居家飘出的声音，是面包师聊起的他儿子正在学习的乐器，是咖啡馆里一位老人随性而起的演奏。这种“艺以日用”的状态，让它拥有了一种温暖而坚韧的生命力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求速成、崇尚流量的快节奏世界里，克雷莫纳像一座固执的孤岛，依然信奉着时间的力量。一把好琴需要两年、三年甚至更久，一位制琴师需要数十年的修炼。这里的人们用一生做好一件事，并相信这份专注能产生跨越几个世纪的共鸣。来到这里，你会不自觉地慢下来，开始用耳朵去“看”，用呼吸去“听”。你会明白，有些声音之所以能永恒，是因为它从一颗宁静而专注的心里生长出来。对于任何一位热爱深度游的旅人而言，克雷莫纳都不只是一个目的地，它是一次对感官的重新校准，一场关于“何谓不朽”的沉思。它提醒我们，最动人的旅程，是去往那些依然被手艺、热情与慢时光精心守护的地方。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/trani-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特拉尼圣尼科拉大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trani Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/otranto-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥特朗托老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Otranto Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/anagni-papal-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿纳尼（教皇的故乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Anagni</p>
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
