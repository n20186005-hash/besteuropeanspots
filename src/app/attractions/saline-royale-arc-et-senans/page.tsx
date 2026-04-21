import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿尔克-埃-瑟南皇家盐场 Saline Royale d\'Arc-et-Senans｜启蒙时代的理想城实验，一座为盐与光明而建的乌托邦 - 最佳欧洲景点',
  description: '车子拐下主路，穿过一片安静的林地，当那片巨大的、浅黄色石头建筑群豁然出现在眼前时，我完全愣住了。这根本不像我想象中的任何“工厂”。没有高耸的烟囱，没有杂乱无章的棚屋，取而代之的是一个无比开阔的半圆形广场，十一座端庄而对称的建筑像展开的手臂，环抱着一片翠绿的草坪。午后的阳光斜斜地打在那些新古典主义的门...',
}

export default function SalineRoyaleArcEtSenansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '阿尔克-埃-瑟南', href: '/destinations/france' },
            { label: '阿尔克-埃-瑟南皇家盐场', href: '/attractions/saline-royale-arc-et-senans' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿尔克-埃-瑟南皇家盐场・Saline Royale d'Arc-et-Senans・法国・阿尔克-埃-瑟南`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下主路，穿过一片安静的林地，当那片巨大的、浅黄色石头建筑群豁然出现在眼前时，我完全愣住了。这根本不像我想象中的任何“工厂”。没有高耸的烟囱，没有杂乱无章的棚屋，取而代之的是一个无比开阔的半圆形广场，十一座端庄而对称的建筑像展开的手臂，环抱着一片翠绿的草坪。午后的阳光斜斜地打在那些新古典主义的门廊和整齐的窗户上，给冰冷的石头镀上了一层蜂蜜色的暖光。周围安静极了，只有风穿过广场中央老树的声音，和远处隐约的喷泉流水声。空气中飘着一丝淡淡的、干燥的石头和松木混合的气味，时间在这里仿佛被那个叫勒杜的建筑师用圆规和直尺精心测量过，然后凝固了。
你很快会发现，这座“盐场”在本地人心中，早已不是一个废弃的工业遗址。它是孩子们春游时奔跑的巨大迷宫，是情侣们在柱廊下散步的浪漫背景，是夏日露天音乐会和艺术展览的天然舞台。我看到一位老先生带着画板，坐在花园的长椅上，安静地描摹着盐场主管那座宏伟住宅的立面。他的笔触很慢，仿佛在跟两百多年前那位梦想家对话。这里的灵魂，不是关于盐的苦涩，而是关于一种近乎天真的、对“更好世界”的理性构想。你能感觉到，勒杜想建造的不是一个生产车间，而是一个自给自足的理想国，这里有住所、有花园、有教堂，工人在生产生活必需品的盐的同时，也能生活在阳光、秩序与美之中。
最打动我的，正是这种理想与现实之间巨大的、迷人的张力。你走在那些原本设计为制盐车间、如今是展览空间的高大厂房里，脚下是粗糙而坚实的老砖，抬头是裸露的、充满力量感的木结构屋顶。阳光从高高的窗户倾泻而下，照亮空气中飞舞的微尘。一边，墙上展示着复杂的盐水管道设计图，精密如解剖图；另一边，巨大的展厅里可能正在举办关于星空或现代设计的展览。它既是一个精确运转过的工业机器，又是一个从未完全实现的梦。站在这片完美的半圆形中央，你会恍惚觉得，自己正站在一个巨人的绘图板上，他用自己的方式，对抗着世界的混乱与不公，而这一切，始于最平凡不过的——盐。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子拐下主路，穿过一片安静的林地，当那片巨大的、浅黄色石头建筑群豁然出现在眼前时，我完全愣住了。这根本不像我想象中的任何“工厂”。没有高耸的烟囱，没有杂乱无章的棚屋，取而代之的是一个无比开阔的半圆形广场，十一座端庄而对称的建筑像展开的手臂，环抱着一片翠绿的草坪。午后的阳光斜斜地打在那些新古典主义的门廊和整齐的窗户上，给冰冷的石头镀上了一层蜂蜜色的暖光。周围安静极了，只有风穿过广场中央老树的声音，和远处隐约的喷泉流水声。空气中飘着一丝淡淡的、干燥的石头和松木混合的气味，时间在这里仿佛被那个叫勒杜的建筑师用圆规和直尺精心测量过，然后凝固了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这座“盐场”在本地人心中，早已不是一个废弃的工业遗址。它是孩子们春游时奔跑的巨大迷宫，是情侣们在柱廊下散步的浪漫背景，是夏日露天音乐会和艺术展览的天然舞台。我看到一位老先生带着画板，坐在花园的长椅上，安静地描摹着盐场主管那座宏伟住宅的立面。他的笔触很慢，仿佛在跟两百多年前那位梦想家对话。这里的灵魂，不是关于盐的苦涩，而是关于一种近乎天真的、对“更好世界”的理性构想。你能感觉到，勒杜想建造的不是一个生产车间，而是一个自给自足的理想国，这里有住所、有花园、有教堂，工人在生产生活必需品的盐的同时，也能生活在阳光、秩序与美之中。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动我的，正是这种理想与现实之间巨大的、迷人的张力。你走在那些原本设计为制盐车间、如今是展览空间的高大厂房里，脚下是粗糙而坚实的老砖，抬头是裸露的、充满力量感的木结构屋顶。阳光从高高的窗户倾泻而下，照亮空气中飞舞的微尘。一边，墙上展示着复杂的盐水管道设计图，精密如解剖图；另一边，巨大的展厅里可能正在举办关于星空或现代设计的展览。它既是一个精确运转过的工业机器，又是一个从未完全实现的梦。站在这片完美的半圆形中央，你会恍惚觉得，自己正站在一个巨人的绘图板上，他用自己的方式，对抗着世界的混乱与不公，而这一切，始于最平凡不过的——盐。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿尔克-埃-瑟南皇家盐场`} />
                <InfoRow label="英文名称" value={`Saline Royale d'Arc-et-Senans`} />
                <InfoRow label="正式名称" value={`Saline Royale d'Arc-et-Senans`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`阿尔克-埃-瑟南`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是启蒙运动在工业与城市规划领域最具雄心的实体宣言，标志着工业建筑首次被提升到与宫殿、教堂同等的哲学与美学高度进行设计。`} />
                <InfoRow label="建筑特色" value={`一个以盐场主管住宅为核心、生产车间呈完美半圆形环绕的宏大几何布局，用严谨的古典主义语言包裹着复杂的工业生产功能。`} />
                <InfoRow label="建筑风格" value={`新古典主义与启蒙理想结合的工业建筑风格，其简洁的线条、庄严的柱廊和和谐的几何构图，彻底颠覆了传统嘈杂、混乱的工厂形象。`} />
                <InfoRow label="文化价值" value={`它远不止是一座盐场，而是体现了启蒙思想家将工业、工人福利与社区生活和谐统一起来的早期社会主义理想，是一座“社会工厂”的乌托邦蓝图。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`盐场建筑群与博物馆全年开放，具体时间随季节调整。通常为：4月至9月，上午9点至下午6点；10月至次年3月，上午10点至下午5点。室内博物馆与展览区周一上午可能推迟开放或闭馆维护，行前务必在官网确认。花园与外部建筑区域在日落后关闭。每年冬季有短暂的年度休整期，通常在一月份，持续约两周。`} />
              <InfoRow label="门票价格" value={`标准成人门票为12欧元。优惠票价为9欧元（适用于学生、65岁以上长者及10人以上团体）。7至15岁青少年票价为7欧元，6岁及以下儿童免费。持有法国博物馆通票或当地旅游通行证可享折扣。门票通常包含永久展览、临时特展、建筑群及花园的参观。提供语音导览设备租赁，费用约为3欧元。`} />
              <InfoRow label="地址" value={`Place Saline Royale, 25610 Arc-et-Senans, France`} />
              <InfoRow label="交通方式" value={`从最近的国际机场（如日内瓦机场或里昂圣埃克絮佩里机场）出发，最便捷的方式是先乘火车抵达贝桑松-维奥特特火车站。从巴黎搭乘TGV高速列车至贝桑松约需2.5小时。抵达贝桑松后，在火车站前的公交枢纽换乘前往阿尔克-埃-瑟南的 regional bus（地区巴士），线路编号通常为“Doubs巴士67线”，车程约45分钟，工作日班次较为频繁（约每小时一班），周末班次减少，务必提前查询时刻表。若自驾，从贝桑松沿D673/D67公路行驶约30-40分钟即可到达，盐场入口处设有大型免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从18世纪中后期说起，那时法国的启蒙思想正如火如荼。国王路易十五有个头疼的问题：东部的弗朗什-孔泰地区产盐，但古老的盐井效率低下，且燃料（木材）运输成本高昂。一个大胆的想法被提了出来：为什么不把木材难以运输的盐水，通过管道引到森林旁边来加工呢？于是，任务落在了当时已颇具声名的建筑师克洛德-尼古拉·勒杜肩上。但勒杜，这位深受启蒙哲学影响的理想主义者，看到的远不止一个生产问题。他接过的是一个改变世界的契机。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`勒杜心里有一个恢弘的蓝图。他设想的是一个完整的、理想化的工业城市。我们今天看到的半圆形盐场，仅仅是他规划中的核心，是未来那个完整圆形城市的“市中心”。在他的构想里，这个半圆将继续扩展成一个完整的圆，外围将布满工人的住宅、市场、教堂、学校，形成一个自给自足、秩序井然的社区。盐场主管的住宅被置于半圆的圆心，象征着理性与管理的核心地位，所有的生产车间像臣民一样环绕着它，等级森严却又和谐统一。1775年，工程启动。他使用了当地开采的石灰岩，建筑风格极度简洁，摒弃了洛可可式的繁琐，只用严谨的几何形体、庄严的三角楣和粗壮的陶立克柱式，赋予这个生产空间一种近乎神圣的庙宇般的庄严感。他想证明，工业不仅可以是高效的，更可以是高尚的、美丽的。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，理想在现实面前总会打折。漫长的建设周期和巨额开销让王室开始失去耐心。那套庞大的、依靠木制管道从19公里外萨兰莱班输送盐水的系统，实际运作起来麻烦不断，泄漏和堵塞是家常便饭。更关键的是，勒杜那个完整圆形城市的梦想从未获得批准。盐场始终只是一个孤立的、过于超前的生产单元。它运转了大约一个世纪，生产着白色的“白金”，但随着更高效生产方式的出现和政局变迁，它不可避免地走向衰落。1856年，它停止了作为盐场的使命。之后的岁月里，它像一位落魄的贵族，被用作各种用途：陶瓷作坊、避难所，甚至在二战期间被德军占领过。建筑一度荒废，任凭风雨侵蚀。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的重生，要等到20世纪。人们重新发现了它独一无二的价值——它不再是失败的工业遗迹，而是人类思想史上一个璀璨的坐标。1970年代开始，大规模的修复工程启动。1982年，它被联合国教科文组织列入世界遗产名录，评价它“代表了启蒙时代进步思想的杰出典范”。从此，它的命运彻底改变。那些空旷的车间不再蒸煮盐水，而是开始容纳关于建筑、艺术、科学和音乐的展览与思考。勒杜未竟的“理想城”之梦，以另一种方式得以延续：这里成了一个关于未来、关于乌托邦、关于人类永不停歇的创造精神的对话场所。从生产盐到生产思想，这座建筑的旅程，本身就是一个迷人的启蒙寓言。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受盐场的时空层次，我强烈建议留出至少四到五个小时，并选择在一个工作日的上午抵达。这样既能避开周末的家庭人潮，又能享受晨光斜射建筑立面的最佳光影时刻。游览节奏宜慢不宜快，核心是理解“空间”与“理念”。建议的路线是先“知”后“行”：首先进入盐场主管住宅（现为博物馆），通过展览和影片建立历史与概念的认知框架；然后以放松的状态，步行探索半圆形建筑群的外部与内部，感受尺度和细节；最后沉浸于后方的花园与林地，在自然中消化之前的理性冲击。这样的安排由内而外，从历史到现场，从思想到体验，能让你层层深入地走进勒杜的世界。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`尽量避免在盛夏的午后最热时段进行纯户外参观，广场缺乏遮荫，提前准备好防晒用品和水。部分修复中的建筑内部地面可能不平整，参观时建议穿着舒适耐走的平底鞋。园区内的餐饮选择有限且价格较高，可以考虑自备一些简单的零食和水。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从宏伟的陶立克柱式主大门进入，立刻站在那片巨大的半圆形广场中央，原地旋转一周，让十一座对称的建筑同时涌入眼帘，建立最初的震撼尺度和空间感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进正对面那座最雄伟的盐场主管住宅，在一楼的博物馆里花些时间，看看那些发黄的建筑设计图和勒杜充满想象力的“理想城”剖面模型，理解眼前一切的源头。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选择从左侧或右侧的拱廊开始漫步，用手触摸那些被时光打磨得温润的石灰岩墙壁，透过高大的拱窗窥探如今被改造为展览空间的昔日制盐车间内部。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要绕到建筑群的背后，那里隐藏着勒杜设计的巨大弧形花园，沿着几何划分的小径走走，你会发现从另一个角度回望建筑轮廓的惊喜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找到那个被称为“万神殿”的圆形小建筑（或它的遗址），站在中心低声说句话，体验勒杜对声学与几何的巧妙运用，感受启蒙时代对理性与感官愉悦的共同追求。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`挑一个车间改造成的临时展览进去看看，无论是当代艺术还是科技主题，体会古老乌托邦容器与当今思想碰撞产生的奇妙化学反应。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在离开前，回到广场，坐在长椅上发会儿呆，看云影在严谨的立面上移动，试着想象如果那个完整的圆形城市被建成，今天的世界会不会有一点点不同。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`半圆形广场正中心，背对主管住宅拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，低角度的阳光会为两侧的弧形柱廊拉出长长的影子，形成强烈的纵深感和几何美感，使用广角镜头能囊括更多建筑。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`盐场主管住宅东侧柱廊之下`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光会以倾斜的角度穿透柱廊，在红色的地砖上形成规律的光影栅格，人物站在明暗交界处，能拍出极具戏剧性和叙事感的照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`建筑群后方花园的东北角小土坡上`}</h4>
                  <p className="text-sm text-gray-700">{`黄昏时分，从此处可以拍到整个盐场建筑群的弧形屋顶轮廓，与前景的花园几何图案和远处的地平线、天空构成一幅和谐的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某个车间内部，从门口向内拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`当阳光从对面高窗射入，照亮室内悬浮的微尘和简洁的结构线条时，对准内部纵深方向拍摄，能捕捉到那种“空荡的圣殿”般的静谧与神圣感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`万神殿圆形大厅的中心仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`如果有机会进入，将相机放在地面向上拍摄穹顶（或结构），能得到一个极具视觉冲击力的对称构图，完美体现勒杜的几何哲学。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内展览区域通常禁止使用闪光灯和三脚架（如需商业拍摄需特别许可），依赖自然光或高感光度拍摄是不错的选择。拍摄建筑外观时，偏振镜可以帮助减少石头表面的反光，让色彩更饱和、纹理更清晰。尊重隐私，避免直接拍摄在花园中写生或休息的陌生访客的特写镜头。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`盐场门口的简朴小旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`由盐场曾经的附属建筑改造，房间不大但干净温馨，最大的福利是能独占清晨开园前和夜晚闭园后的静谧时刻，独自拥有这片世界遗产。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`十五分钟车程外索恩河畔的乡村民宿`}</h4>
                  <p className="text-sm text-green-800">{`房东夫妇经营的家庭式民宿，早餐有自制的果酱和刚出炉的牛角包，傍晚可以散步到河边，看对岸灯光初上的盐场剪影，体验真正的法兰西田园诗意。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`贝桑松古城内的设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`适合不想频繁更换住处的旅行者，坐落在充满历史感的古老街道，现代舒适的内部设施与外部文艺复兴式建筑形成反差，白天可便捷乘车前往盐场，夜晚则沉浸于大学城的文艺氛围。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`三十公里外朱拉山区的森林木屋`}</h4>
                  <p className="text-sm text-purple-800">{`对于自驾者而言的完美选择，完全隐居在自然中，晚上可以看见璀璨的星空，白天前往盐场的山路本身也是一段风景绝佳的旅程，体验从自然到人文的穿越。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`盐场本身位于宁静的乡村，夜晚非常安静，几乎没有夜生活，喜欢热闹的旅客可能更适合住在贝桑松。如果选择盐场周边住宿，尤其是旺季，务必提前数月预订，因为房间非常有限。自驾旅客需注意，一些古老的乡村民宿可能没有宽敞的专属停车场，预订时最好确认停车安排。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开盐场很久之后，那片巨大的半圆形和那种独特的静谧感，还会时常在脑海里浮现。它给我的触动，不在于它多么华丽辉煌——事实上，它的美是克制甚至有些严肃的。它的力量在于那种“认真的疯狂”。勒杜和他的时代，真的相信可以用理性、几何和美，来规划一个更公平、更高效、更美好的世界，甚至从一座盐厂开始。今天看来，这蓝图或许天真，甚至带有某种不容置疑的专制色彩，但那种试图用创造对抗混乱、用秩序关怀人性的冲动，至今依然让我们心潮澎湃。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速迭代、功能至上的时代，阿尔克-埃-瑟南像一颗来自过去的时空胶囊，也像一面指向未来的镜子。它提醒我们，工作与生活、效率与尊严、产业与社区，这些我们仍在苦苦求索的平衡命题，早在两百多年前就有人以石头的语言郑重地提出过。每一位热爱深度游的旅人都该来此看看，不仅是为了一栋特别的建筑，更是为了亲身站立在那个“如果”的起点上。在这里，你触摸到的不仅是法国的石灰岩，更是人类历史上一个无比珍贵的时刻——那时，人们仰望星空，思考社会的运行原理，并坚信可以用双手将理想变为石头与花园的现实。这种勇气和浪漫，本身就像盐一样，是生活不可或缺的滋味。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/najac-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳雅克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Najac</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fontevraud-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    丰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">丰特夫罗修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fontevraud Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/senlis-medieval-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    桑
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">桑利斯中世纪老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Senlis</p>
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
