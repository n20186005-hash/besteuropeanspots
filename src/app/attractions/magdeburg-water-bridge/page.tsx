import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '马格德堡水桥 Magdeburg Water Bridge｜工程史上的奇迹，跨越易北河的“航行之桥” - 最佳欧洲景点',
  description: '当你第一眼看到马格德堡水桥时，那种感觉不是震撼，而是一种温和的、确信的困惑。它就那样平静地横亘在易北河和陆地上空，巨大的灰色混凝土槽身像一条被凝固的河流，悬在半空。然后，你看到了一艘货船——不是从易北河里，而是从那“空中河流”里，不紧不慢地驶过。耳边是两种水流声的交响：脚下易北河波涛的哗哗声，和头顶',
}

export default function MagdeburgWaterBridgePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '马格德堡水桥', href: '/attractions/magdeburg-water-bridge' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`马格德堡水桥・Magdeburg Water Bridge・德国・马格德堡`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一眼看到马格德堡水桥时，那种感觉不是震撼，而是一种温和的、确信的困惑。它就那样平静地横亘在易北河和陆地上空，巨大的灰色混凝土槽身像一条被凝固的河流，悬在半空。然后，你看到了一艘货船——不是从易北河里，而是从那“空中河流”里，不紧不慢地驶过。耳边是两种水流声的交响：脚下易北河波涛的哗哗声，和头顶十几米处，渡槽里水流推动船只的、更为沉静浑厚的嗡鸣。空气里有水汽的清新，也夹杂着一丝淡淡的、来自钢铁与混凝土的工业气息。站在桥的人行道上，你会感觉自己站在了某个世界的交接点上，脚下是古老的自然河道，头顶是人类意志创造的平行水路。
这里并非一个纯粹的旅游景点，它首先是条忙碌的交通动脉。骑着专业自行车、身着紧身衣的骑手从你身边嗖地掠过；散步的居民牵着狗，对头顶驶过的巨大货轮习以为常，只是偶尔抬头瞟一眼；跑步的人耳里塞着耳机，步伐规律地敲打着桥面。它完美地融入了当地人的生活网络，是易北河自行车道上的一个日常节点，是周末散步路线中的一站。它的魅力不在于华丽的装饰，而在于那种“理所应当的奇迹”感——它如此庞大，却又如此平静地履行着它的职责。
最打动人的，或许正是这种“平静的非凡”。没有喧哗的解说，没有拥挤的游客，只有风和阳光，以及不时驶过的、承载着欧洲内陆经济脉搏的船舶。你可以趴在栏杆上，看着一艘载满汽车的货船缓缓“爬”上这座桥，它的倒影映在下面的易北河里，形成一种上下颠倒、虚实交错的超现实画面。这是一种属于现代人的浪漫：不是关于城堡与公主，而是关于连接、关于效率、关于如何用钢铁水泥谱写了一首关于流动的史诗。它提醒你，奇迹有时就穿着工装，平静地工作着。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你第一眼看到马格德堡水桥时，那种感觉不是震撼，而是一种温和的、确信的困惑。它就那样平静地横亘在易北河和陆地上空，巨大的灰色混凝土槽身像一条被凝固的河流，悬在半空。然后，你看到了一艘货船——不是从易北河里，而是从那“空中河流”里，不紧不慢地驶过。耳边是两种水流声的交响：脚下易北河波涛的哗哗声，和头顶十几米处，渡槽里水流推动船只的、更为沉静浑厚的嗡鸣。空气里有水汽的清新，也夹杂着一丝淡淡的、来自钢铁与混凝土的工业气息。站在桥的人行道上，你会感觉自己站在了某个世界的交接点上，脚下是古老的自然河道，头顶是人类意志创造的平行水路。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里并非一个纯粹的旅游景点，它首先是条忙碌的交通动脉。骑着专业自行车、身着紧身衣的骑手从你身边嗖地掠过；散步的居民牵着狗，对头顶驶过的巨大货轮习以为常，只是偶尔抬头瞟一眼；跑步的人耳里塞着耳机，步伐规律地敲打着桥面。它完美地融入了当地人的生活网络，是易北河自行车道上的一个日常节点，是周末散步路线中的一站。它的魅力不在于华丽的装饰，而在于那种“理所应当的奇迹”感——它如此庞大，却又如此平静地履行着它的职责。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许正是这种“平静的非凡”。没有喧哗的解说，没有拥挤的游客，只有风和阳光，以及不时驶过的、承载着欧洲内陆经济脉搏的船舶。你可以趴在栏杆上，看着一艘载满汽车的货船缓缓“爬”上这座桥，它的倒影映在下面的易北河里，形成一种上下颠倒、虚实交错的超现实画面。这是一种属于现代人的浪漫：不是关于城堡与公主，而是关于连接、关于效率、关于如何用钢铁水泥谱写了一首关于流动的史诗。它提醒你，奇迹有时就穿着工装，平静地工作着。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`马格德堡水桥`} />
                <InfoRow label="英文名称" value={`Magdeburg Water Bridge`} />
                <InfoRow label="正式名称" value={`Wasserstraßenkreuz Magdeburg`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`马格德堡`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座实现了欧洲内陆航运百年梦想、连接德国东西部重要水系的决定性工程。`} />
                <InfoRow label="建筑特色" value={`一座让船舶在“桥面”上航行、跨越另一条河流与陆地的巨型钢混结构通航渡槽。`} />
                <InfoRow label="建筑风格" value={`极致的功能主义与实用美学，展现了现代工程学精准、宏大而冷静的力量感。`} />
                <InfoRow label="文化价值" value={`它不仅是交通枢纽，更是两德统一后最具象征意义的实体连接，见证了分裂与融合，是人类将宏大构想化为现实的毅力纪念碑。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`水桥本身作为航道及人行/自行车道24小时免费开放。桥上的步行区域全天可通行。官方的“水桥信息中心”（Wasserstraßenkreuz-Info）开放时间通常为每年4月至10月，周二至周日的上午10点至下午5点，冬季（11月至3月）开放时间缩短或仅周末开放，具体需查询当年公告。易北河自行车道及周边公园无时间限制。`} />
              <InfoRow label="门票价格" value={`游览水桥本体、在桥上步行或骑行完全免费。若参观官方的“水桥信息中心”（若有展览），通常会收取少量费用，约3-5欧元，学生及儿童有优惠。自驾前来的游客需注意，东西两岸的停车场可能按小时收取停车费。`} />
              <InfoRow label="地址" value={`Wasserstraßenkreuz, 39126 Magdeburg, Germany`} />
              <InfoRow label="交通方式" value={`从最近的马格德堡中央火车站出发，是最方便的选择。在火车站前的公交枢纽，乘坐60路公交车（方向：Barleber See），在“Wasserstraßenkreuz”站下车，车程约25分钟，每小时约有1-2班车。更灵活的方式是乘坐出租车，从火车站出发约15分钟车程，费用约15-20欧元。如果自驾，从马格德堡市中心沿B189公路向北行驶，或从柏林方向沿A2高速公路过来，都有清晰的路标指向“Wasserstraßenkreuz”，东西两岸均设有停车场。强烈建议结合骑行体验，马格德堡火车站附近有自行车租赁点，沿着标志清晰的易北河自行车道骑行约40分钟即可抵达，这是融入当地氛围的最佳方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事得从一个地图上的断层说起。在德国中部，两条重要的水道——西边的米特尔兰运河和东边的易北河—哈弗尔河，近在咫尺，却被易北河河谷和一片高地无情隔开。船只往来于德国西部工业区和柏林之间，不得不绕一个长达12公里的“大弯”，先下到易北河，再费力地通过一组古老的水闸提升水位，耗时费力。早在1919年，德国工程师们就绘制了这座“水桥”的蓝图，让船只不必下河，直接“飞越”易北河。那是一个充满技术乐观主义的年代，人们相信工程能克服一切地理障碍。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，蓝图刚进入初步施工阶段，就被二战的无情炮火彻底打断。更深的隔阂随之而来——冷战开始了。马格德堡这座城市被划归东德，而米特尔兰运河在西德。那道地图上的虚线，变成了真实的铁幕。水桥的梦想，连同连接东西的渴望，一起被冻结在档案室里，一封就是四十多年。在这几十年里，易北河成为边界，航运绕行愈发不便，但那纸蓝图，成了两德工程师心中一个共同的、沉默的念想。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机随着柏林墙的倒塌而来。1990年两德统一，东西部的血管迫切需要重新连接。那个尘封的“水桥”方案，几乎是在第一时间被重新铺在了谈判桌上。它不再仅仅是一个经济工程，更是一个强大的政治象征：我们要用最实在的混凝土和钢铁，把分裂的土地物理性地、永久性地缝合起来。1997年，工程终于奠基。你想象一下当时的气氛：来自原东西德的工程师团队首次坐在一起，对着七十多年前的图纸进行现代化修改，使用的机械和技术来自刚刚融合的两个体系，这本身就是一个微型的国家重建工程。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建设过程本身就是一场现代工程学的壮举。他们先是在旱地上建造巨大的渡槽段落，每一段都重达数千吨。然后，像玩巨型积木一样，使用大型浮动起重机，将这些预制件精准地安放到数十米高的桥墩上。最关键的一步，是将这个长达918米的巨型水槽与两端的运河系统对接，并确保它滴水不漏。2003年10月，这个世纪工程终于竣工。当第一艘试航船平稳地驶过水桥，连接了莱茵河与奥得河水系，一个跨越了战争、冷战、分裂的百年梦想，终于在水流中变成了沉静的现实。今天，每艘经过的货船，航行的不只是一条水道，也是一段浓缩的德国历史。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在午后抵达，用3-4小时进行一场沉浸式的漫步。下午的光线最适合摄影，能勾勒出水桥钢铁结构的凌厉线条，并在易北河面投下金色波纹。安排从东岸开始，因为主要的停车场和信息中心（若开放）都在此。先了解背景，再亲自上桥体验，最后下到易北河岸从不同角度仰望，完成从认知到体验，再到欣赏的完美循环。傍晚时分，当夕阳西下，货运船舶亮起航灯缓缓驶过，是景色最具魔幻感的时刻。节奏要慢，多停留，感受船舶从头顶滑过时空气的微震和时间的流淌。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`桥上风通常很大，尤其是春秋季节，务必穿一件防风外套，戴好帽子。
人行道与自行车道共享，行走时请务必靠边，留意身后高速驶来的自行车，不要突然改变行走路线。
绝对不要为了拍照而攀爬或翻越护栏，桥面距离下方地面或河面很高，安全第一。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在东岸的停车场，或者从公交站慢慢走过来，第一眼就让它那巨大的灰色身躯充满你的视野。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进水桥信息中心（如果开放），看看当年的工程模型和老照片，听听那段关于等待与重建的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`踏上水桥两侧宽阔的人行兼自行车道，跟着本地骑手的节奏，向着桥的中心点漫步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`停在桥中央的最高点，趴在栏杆上，等待下一艘船——无论是巨大的货轮还是小巧的游艇——从你脚下十几米处的易北河，以及与你视线平齐的渡槽中，同时穿过。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从东侧引桥的楼梯或斜坡下到地面，走到易北河的河岸公园，换一个仰望的视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着易北河岸向南走一段，找到那个能同时将水桥桥墩、槽身船只和下方易北河纳入取景框的完美角度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步行至西岸，登上那个专为游客观景而设的小平台或土丘，回望水桥的全长。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在黄昏将至时，回到东岸或西岸的河畔，看落日余晖将灰色的混凝土染成暖金色，等待航灯初上，捕捉一日中最宁静的工程诗意。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`桥面人行道俯拍易北河`}</h4>
                  <p className="text-sm text-gray-700">{`站在水桥人行道南侧，使用中长焦镜头，压缩视角，将前景中渡槽内的船舶与背景里下方易北河上的船只同时纳入画面，形成极具戏剧性的“双层交通”效果。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`易北河东岸南侧全景位`}</h4>
                  <p className="text-sm text-gray-700">{`从水桥主体结构南侧下到易北河岸边，用广角镜头仰拍，将巨大的混凝土桥墩、笔直的渡槽以及远方马格德堡的城市轮廓一起收纳，凸显建筑的宏伟尺度与人类环境的对比。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`西岸观景平台经典机位`}</h4>
                  <p className="text-sm text-gray-700">{`在西岸专设的观景土坡上，日落前半小时，顺光拍摄水桥全长，阳光会为整个建筑镀上金边，河水泛着粼光，运气好能拍到一艘船行驶在金光大道之中。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`桥下拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`走到水桥某个大型桥墩下的易北河岸边，利用桥墩的拱形结构作为天然画框，拍摄框内流动的易北河和对岸的风景，增添照片的结构感和深度。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`黄昏逆光剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落后十分钟的蓝调时刻，在西岸，对着东方的天空拍摄水桥和驶过船舶的剪影，渡槽窗口透出的灯光会成为画面的点睛之笔，充满未来感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄水中行驶的船舶时，尝试稍慢的快门速度（如1/30秒或更慢），可以拍出水流动态模糊而船体相对清晰的动静对比效果。`}</li>
                <li>• {`若想拍摄清晰的船舶细节，需要耐心等待并预判船只位置，因为大型货船航速较慢，你有充足时间构图。`}</li>
                <li>• {`尊重他人隐私，避免用长焦镜头直接拍摄私人游艇或船上居民的生活场景。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`马格德堡中央火车站旁的现代宜必思酒店，交通枢纽的核心位置，房间简洁明亮，下楼就能跳上去水桥的公交车，对于行程紧凑的旅人来说高效又省心。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`易北河畔的“老海关客栈”，一座有百年历史的老建筑改建的家庭旅馆，房间不大但充满温情，老板会给你讲他小时候看着水桥建起来的故事，早晨在河景阳台上享用早餐，看船只往来。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`马格德堡市中心的“马里蒂姆酒店”，五星级配置，坐落于大教堂广场旁，拥有顶楼餐厅和俯瞰全城的视野，在水桥感受工程的震撼后，回到这里享受极致的古典优雅与现代舒适。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特体验`}</h4>
                  <p className="text-sm text-purple-800">{`柏林近郊或萨克森-安哈尔特州乡村的度假屋，如果你自驾，不妨将水桥作为一日游站点，晚上住在半小时车程外的宁静村庄里，体验从极致人工奇迹到纯粹自然田园的强烈对比与放松。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`马格德堡并非旅游热点城市，治安总体良好，酒店价格相对柏林、慕尼黑等大城市亲民很多，性价比极高。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果想体验易北河骑行，建议选择提供自行车租赁或靠近自行车道的住宿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`旅游旺季（5-9月）的周末最好提前预订，尤其是那些有特色的家庭旅馆。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开马格德堡水桥很久以后，脑海里挥之不去的，不是它的庞大，而是它的宁静。它没有古老教堂那种直击灵魂的神性，也没有宫殿那种奢华逼人的气势。它就是一种存在，一种坚实、可靠、默默运转的存在。它让我思考，旅行的意义除了追寻历史的辉煌与自然的壮丽，是否也应该包含对人类当下智慧的敬意？这座桥，是活着的历史，是仍在书写中的史诗。每一艘平稳驶过的货船，都是它跳动一次的脉搏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求快速、迷恋表象的时代，水桥提供了一种深度的、需要耐心理解的体验。它不讨好你，只是展示它自己——一种纯粹的功能之美，一种连接的力量。它告诉我们，最美的创造，有时诞生于最实际的需求；最动人的故事，往往藏在钢铁与水泥的缝隙里。对于真正热爱深度游的灵魂来说，这里是一个必到的朝圣地。它不仅连接了两条河流，更像一座隐喻的桥梁，连接了想象与现实，连接了分裂的过去与统一的现在，并最终，连接了作为过客的我们与人类那种永不停歇、渴望沟通与创造的伟大精神。站在桥上，你会感到自己正站在这种精神的肩膀上。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/meersburg-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅尔斯堡旧城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Meersburg Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wasserburg-am-inn" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    因
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">因河畔瓦瑟堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wasserburg am Inn</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/weimar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    魏
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">魏玛老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Weimar Old Town</p>
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
