import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '厄斯 Eus｜法国阳光最慷慨的阶梯小镇，悬崖上的加泰罗尼亚明珠 - 最佳欧洲景点',
  description: '车子在比利牛斯山麓的葡萄园与橄榄树丛间拐过一个弯，厄斯就那样毫无预警地撞进眼里。它不像平地上的小镇那样铺展开来，而是像被一只巨手捏拢了，然后一把撒在几乎垂直的、面向广阔平原的向阳坡上。所有的房子——那些用灰扑扑的片岩和阳光下泛着蜜糖色的花岗岩垒成的房子——紧紧挨着，一层压着一层，屋顶的加泰罗尼亚红瓦...',
}

export default function EusPyreneesVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '厄斯', href: '/attractions/eus-pyrenees-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`厄斯・Eus・法国・厄斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在比利牛斯山麓的葡萄园与橄榄树丛间拐过一个弯，厄斯就那样毫无预警地撞进眼里。它不像平地上的小镇那样铺展开来，而是像被一只巨手捏拢了，然后一把撒在几乎垂直的、面向广阔平原的向阳坡上。所有的房子——那些用灰扑扑的片岩和阳光下泛着蜜糖色的花岗岩垒成的房子——紧紧挨着，一层压着一层，屋顶的加泰罗尼亚红瓦连成一片倾斜的海洋，最终簇拥着顶端那座小小的、坚固的教堂。第一眼，你甚至会觉得它有点“倔”，倔强地攀在岩石上，背靠着深色的山林，面朝着地中海岸吹来的、饱含光与热的风。
停好车，沿着唯一的主路向上走，感官立刻被激活。脚下是历经数百年被脚步打磨得光滑圆润的鹅卵石，缝隙里钻出顽强的野草和苔藓。空气里有股特别好闻的混合气味：被烈日烘烤过的石头散发出的干燥暖香，从人家院落里逸出的迷迭香和薰衣草的清冽，还有远处山谷飘来的、若有若无的松树和成熟葡萄的甜郁。耳朵里安静极了，只有自己的脚步声、蜜蜂围着粉色天竺葵的嗡嗡声，以及不知从哪扇敞开的木窗里流泻出的、断断续续的收音机里的加泰罗尼亚语老歌。这里的时间流速似乎不同，缓慢、粘稠，浸泡在几乎永不枯竭的阳光里。
你会发现，这里的每一级台阶、每一个转角都是生活本身。老太太坐在自家门前的石凳上慢悠悠地择豆角，看见你会露出缺了牙的友善笑容；一只胖猫在矮墙的阴影里摊成一张毛毯；褪色的木门上钉着“画家工作室”或“陶艺家”的小牌子，推开便是另一个充满色彩的世界。这里没有为了游客而设的喧闹商店，只有生活在此地的人们，和偶尔闯入的、像我们一样的漫游者。它的核心魅力，正是这种极致的“在地性”——它不是博物馆里的标本，而是一颗仍在沉稳跳动的心脏，在21世纪的今天，依然以其古老而智慧的方式，呼吸着。
这座村庄最打动人心的，或许正是它与光和地形的那场持续了千年的对话。为了获取每一寸宝贵的平坦土地用于耕种，先民们选择向陡坡索取居住空间。为了抵御冬日山区凛冽的北风，同时又最大化地拥抱南方珍贵的阳光与温暖，他们设计了这种密集、向阳、阶梯式的格局。走在其中，你每一步都能感受到这种生存的智慧与美感。阳光在这里不是普照，而是被精心裁剪、分配：上午斜射东面的小巷，正午泼洒在中央的小广场，午后则把西面的石墙烤得发烫。这是一座为光而生的建筑杰作，朴素，却充满力量。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在比利牛斯山麓的葡萄园与橄榄树丛间拐过一个弯，厄斯就那样毫无预警地撞进眼里。它不像平地上的小镇那样铺展开来，而是像被一只巨手捏拢了，然后一把撒在几乎垂直的、面向广阔平原的向阳坡上。所有的房子——那些用灰扑扑的片岩和阳光下泛着蜜糖色的花岗岩垒成的房子——紧紧挨着，一层压着一层，屋顶的加泰罗尼亚红瓦连成一片倾斜的海洋，最终簇拥着顶端那座小小的、坚固的教堂。第一眼，你甚至会觉得它有点“倔”，倔强地攀在岩石上，背靠着深色的山林，面朝着地中海岸吹来的、饱含光与热的风。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`停好车，沿着唯一的主路向上走，感官立刻被激活。脚下是历经数百年被脚步打磨得光滑圆润的鹅卵石，缝隙里钻出顽强的野草和苔藓。空气里有股特别好闻的混合气味：被烈日烘烤过的石头散发出的干燥暖香，从人家院落里逸出的迷迭香和薰衣草的清冽，还有远处山谷飘来的、若有若无的松树和成熟葡萄的甜郁。耳朵里安静极了，只有自己的脚步声、蜜蜂围着粉色天竺葵的嗡嗡声，以及不知从哪扇敞开的木窗里流泻出的、断断续续的收音机里的加泰罗尼亚语老歌。这里的时间流速似乎不同，缓慢、粘稠，浸泡在几乎永不枯竭的阳光里。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这里的每一级台阶、每一个转角都是生活本身。老太太坐在自家门前的石凳上慢悠悠地择豆角，看见你会露出缺了牙的友善笑容；一只胖猫在矮墙的阴影里摊成一张毛毯；褪色的木门上钉着“画家工作室”或“陶艺家”的小牌子，推开便是另一个充满色彩的世界。这里没有为了游客而设的喧闹商店，只有生活在此地的人们，和偶尔闯入的、像我们一样的漫游者。它的核心魅力，正是这种极致的“在地性”——它不是博物馆里的标本，而是一颗仍在沉稳跳动的心脏，在21世纪的今天，依然以其古老而智慧的方式，呼吸着。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这座村庄最打动人心的，或许正是它与光和地形的那场持续了千年的对话。为了获取每一寸宝贵的平坦土地用于耕种，先民们选择向陡坡索取居住空间。为了抵御冬日山区凛冽的北风，同时又最大化地拥抱南方珍贵的阳光与温暖，他们设计了这种密集、向阳、阶梯式的格局。走在其中，你每一步都能感受到这种生存的智慧与美感。阳光在这里不是普照，而是被精心裁剪、分配：上午斜射东面的小巷，正午泼洒在中央的小广场，午后则把西面的石墙烤得发烫。这是一座为光而生的建筑杰作，朴素，却充满力量。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`厄斯`} />
                <InfoRow label="英文名称" value={`Eus`} />
                <InfoRow label="正式名称" value={`Eus`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`厄斯`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座自中世纪起便雄踞于陡峭山崖之上的防御性村庄，见证了法国南部鲁西永地区数百年来的宗教冲突与边境变迁。`} />
                <InfoRow label="建筑特色" value={`所有建筑依山势呈密集的阶梯状层叠而上，大量使用当地出产的灰色片岩和暖黄色花岗岩，屋顶是标志性的加泰罗尼亚风格瓦片。`} />
                <InfoRow label="建筑风格" value={`以中世纪防御村落结构为基础，融合了朴素的罗马式、后期加泰罗尼亚民用建筑及简单的巴洛克装饰元素。`} />
                <InfoRow label="文化价值" value={`是加泰罗尼亚文化在法国境内的鲜活载体，其布局、建材与生活方式完美体现了山民如何利用自然条件构筑家园与社群认同。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄全天开放。主要教堂（Église Saint-Vincent d’Eus）开放时间较为灵活，通常为每日上午10点至中午12点，下午2点至5点；冬季（11月至3月）可能缩短或仅在周末开放，夏季（6月至9月）时间会延长。建议行前查看当地旅游局官网或致电确认。`} />
              <InfoRow label="门票价格" value={`进入村庄免费。参观圣文森特教堂免费，但欢迎捐赠以支持维护。村内个别艺术家工作室或小型展览可能收取少量费用（通常2-5欧元）。`} />
              <InfoRow label="地址" value={`Place de la Mairie, 66500 Eus, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是佩皮尼昂-里韦萨尔特机场（Perpignan–Rivesaltes Airport），距离约40公里。从机场出发，最便捷的方式是租车自驾，沿D116公路向东行驶，约50分钟可抵达厄斯。若乘坐火车，可先抵达佩皮尼昂火车站（Gare de Perpignan），然后在站前广场乘坐前往Prades方向的260路巴士（Transports en Commun de la Région Perpignan Méditerranée），在“Eus”站下车，车程约1小时，班次较少（平日每天约4-6班，周末更少），务必提前查好时刻表。自驾是最推荐的方式，可以灵活探索周边山区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要理解厄斯为何以这样一种倔强的姿态存在，得把时钟拨回一千年前。大约在10世纪左右，比利牛斯山北麓的这片土地并不太平。来自海上的撒拉森人（阿拉伯海盗）的骚扰，以及地方领主之间无休止的摩擦，迫使散居在肥沃谷地的人们开始寻找易于防守的居所。这座陡峭的、可以俯瞰整个泰特河平原和鲁西永平原的石灰岩山丘，成了天然的选择。最初的定居者很可能是几户农民，他们用山上的石头垒起最简陋的庇护所，互相依偎，共同瞭望。厄斯这个名字，据说源于前罗马时期的伊比利亚语，与“高处”或“水源”相关，暗示着其历史的悠远。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`到了11至13世纪，随着封建制度的巩固，厄斯逐渐形成了我们今天看到的村落雏形。它成了鲁西永伯爵领地上一个重要的防御据点。村庄的布局就是一部活的防御手册：最外围的房子墙壁异常厚实，窗户窄小，构成了第一道防线；蜿蜒陡峭、且多为死胡同的街巷，能让入侵者晕头转向；而位于最高点的圣文森特教堂，则被加固为最后的堡垒和避难所。教堂那厚重的石墙和狭小的窗户，至今诉说着那段需要时刻警惕的岁月。村民们白天到山下平原耕种葡萄园和橄榄林，日落前便回到山上的“巢穴”。这种“垂直生活”模式，是安全与生计之间达成的微妙平衡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪晚期到文艺复兴时期，厄斯迎来了相对的繁荣。虽然地处偏远，但它位于通往西班牙和安道尔的山路附近，也分享着鲁西永地区葡萄酒贸易的收益。村庄向上、向更陡峭的地方“生长”，出现了更多石头房屋。建筑虽然依旧朴素，但开始有一些装饰性的细节，比如门楣上简单的雕刻，或者用不同颜色的石头拼出的几何图案。然而，17世纪中叶的法国-西班牙战争（特别是1640-1659年的加泰罗尼亚起义和随后签订的《比利牛斯条约》）彻底改变了这里的命运。鲁西永被正式划归法国，厄斯从边境前沿变成了法国内陆村庄。军事重要性下降了，但它作为山区社群中心的功能得以保留。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正严峻的考验在19世纪末和20世纪到来。工业化吸引了大量山区青年前往城市，厄斯和无数法国乡村一样，面临着人口锐减、老龄化甚至被遗弃的危机。许多房屋开始破败。转机出现在20世纪下半叶，一批来自法国北部甚至国外的艺术家、手工艺人和寻求另一种生活节奏的人，发现了这座被阳光宠爱的寂静村庄。他们被极低的房价（当时）和无敌的光线所吸引，开始购买并修复那些几乎成为废墟的石屋。他们的到来，为厄斯注入了新的活力——不是旅游化的喧嚣，而是沉静的创作能量。工作室、画廊悄然出现，古老的石墙内开始回荡着新的故事。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天的厄斯，是这两种力量和谐共生的结果：原住村民延续着祖辈的节奏，照看着山下的土地，在广场的梧桐树下玩着滚球游戏；而后来的“新村民”则用画笔、刻刀或写作，回应着这里的光与石。村委会明智地控制了过度开发，没有允许大型酒店或旅游巴士的涌入。于是，厄斯得以保全其灵魂——它既不是凝固的化石，也不是媚俗的布景，而是一个依然在缓慢呼吸、有机演变的生命体。它的历史，就写在那层层叠叠的石阶上，写在那被阳光晒得发白的墙壁里，写在每一个黄昏时分，从各家厨房飘出的、混合着蒜香与香草气的烟火味中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味厄斯，请务必预留一整天的时间，并抱着“漫游”而非“打卡”的心态。建议在上午九点左右抵达，这时晨光刚好把村庄东侧的小巷照得通透明亮，游客稀少，能邂逅最本地化的生活场景。整体游览节奏应该极其缓慢，核心是在纵横交错的小巷中“迷失”，上下探索。上午重点探索中下部区域，感受日常生活气息；正午前后登上教堂平台，俯瞰全景；下午在阴影渐长的西侧小巷和艺术工作室里悠闲度过。傍晚时分则一定要留下来，等待落日将整个村庄染成金红色，那才是厄斯一天中最辉煌的时刻。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`穿一双绝对舒适、防滑的鞋，这里的每一步都是真正的“爬”山，高跟鞋和光滑的鞋底是灾难。
夏季午后阳光极其猛烈，务必携带充足饮水、帽子和防晒霜，村庄内商店极少，且可能中午休息。
尊重居民隐私，拍照时尽量避免直接对准人家门窗内的生活场景，工作室参观前请先轻声询问。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在村庄入口处免费的公共停车场，先别急着上山，在停车场边缘的回望处好好端详一次厄斯全景，记住它清晨的模样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着主干道“卡雷拉大道”开始上行，随时钻进右手边任何一条吸引你的、狭窄且陡峭的石阶小巷，比如“卡普德街”，用指尖触摸那些冰凉而粗糙的古老石墙。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并穿过那道著名的“圣文森特门”，这是进入中世纪核心区的象征，感受门洞下的阴凉与门后豁然开朗的明亮形成的强烈对比。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`努力攀爬至最高点的圣文森特教堂前广场，喘着气转身，迎接那令人屏息的、从比利牛斯山麓一直延伸到地中海方向的180度无敌全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在教堂内部安静地坐一会儿，适应那里的昏暗与清凉，仔细观察祭坛后部那尊质朴而动人的13世纪圣母木雕像。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择另一条完全不同的路径，比如经过“老面包坊”遗址的小路，留意那些门牌上标注着“画家”、“雕塑家”或“陶艺家”的工作室，如果门开着，不妨大胆而礼貌地探头询问是否可以参观。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在村庄中部的“共和国广场”那棵巨大的梧桐树下歇歇脚，或许能碰上玩滚球游戏的老先生们，观察他们专注而悠闲的神态。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将最后一段时光留给村庄西侧的“太阳街”，下午的阳光会把这里变成一条金光隧道，找一处石阶坐下，静静地看光影在墙壁上移动，直到日落降临。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄下方葡萄园仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时或傍晚日落前一小时，从D116公路通往村庄的岔路口附近，利用前景的葡萄藤或橄榄树，拍摄村庄披着金色晨光或沐浴在温暖暮色中的阶梯式全景，使用长焦镜头压缩空间感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣文森特教堂钟楼视角`}</h4>
                  <p className="text-sm text-gray-700">{`登上教堂前广场，但不要只拍平原，将镜头对准脚下层层叠叠的屋顶瓦海，以某个精致的石砌烟囱或天线作为前景，拍摄屋顶波浪般起伏的线条与远方山峦的层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“光影巷”局部特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，在西侧的“太阳街”或类似小巷，等待阳光将一侧石墙照得金黄，而另一侧沉浸在深蓝阴影中时，拍摄巷道的纵深感，可以等待一个居民或猫狗走过，为画面增加生动故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`门与窗的细节`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，但柔和侧光时最佳，聚焦于那些古老木门上生锈的铁饰、斑驳的油漆、门环，或是窗台上盛放的天竺葵花盆，这些细节特写最能传达村庄的岁月质感与生活情趣。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从废墟窗口望教堂`}</h4>
                  <p className="text-sm text-gray-700">{`在村庄中部寻找一两处允许安全进入的、半废弃的石屋废墟（注意安全），透过没有玻璃的石窗框拍摄对面的圣文森特教堂钟楼，形成一种“框景”与古今对话的构图。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`厄斯的魅力在于材质和光影，多尝试用相机表现石头粗糙的纹理、瓦片整齐的排列以及强烈阳光造成的明暗对比。无人机飞行在此类密集居住的古老村庄可能受到严格限制甚至禁止，起飞前务必查询当地法规并尊重居民安宁。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`阳光石屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`由本地艺术家夫妇经营的百年石屋，房间不多但每一间都充满手作温度，早晨在种满多植物的小露台享用女主人自制的果酱和面包，阳光洒满餐桌。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`隐居者之舍`}</h4>
                  <p className="text-sm text-green-800">{`位于村庄相对安静的上区，由一处古老羊圈改造而成，保留了原始的拱形石顶，内饰极简而舒适，夜晚安静得只能听到风声，是彻底放空冥想的好去处。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`全景公寓`}</h4>
                  <p className="text-sm text-yellow-800">{`位于村庄“腹部”位置，拥有一个可以俯瞰整个平原的私人露台，厨房设备齐全，你可以像当地人一样去附近市集买来食材，做一顿饭，就着无敌夜景享用。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`山脚葡萄园酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果不执着于住在村里，可以选择开车五分钟可达的山脚下精品酒店，由古老的酒庄建筑改造，房间宽敞现代，带泳池，既能享受田园宁静，又方便探索周边多个特色村庄。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`村里住宿数量非常有限，且多为个性鲜明的民宿，务必提前数月预订，尤其是在夏季和春秋旺季。住在村里意味着要接受夜晚绝对的寂静和可能的步行不便（车通常只能停在外围），但这正是沉浸式体验的精髓。周边治安非常好，但山区夜间温度可能骤降，即使夏季也建议带件薄外套。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开厄斯的时候，我的脚步是慢的，心里却有种被充盈的踏实感。它没有令人瞠目结舌的世界奇观，也没有喧嚣热闹的夜生活。它给你的，是一种久违的“确定性”——石头的坚硬，阳光的轨迹，季节的流转，以及人们为了好好生活而展现出的那种专注与韧性。在这里，你会重新学会“感受”：感受一级台阶的高度，感受一面石墙在一天中温度的变化，感受寂静如何成为一种可以聆听的声音。这座村庄本身，就是一首用光和石写成的、缓慢而坚定的诗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都在追求更快、更亮、更刺激的时代，厄斯的存在像一种温柔的抵抗。它提醒我们，还有一种价值在于“持久”，在于与土地和自然节律的深刻联结。它告诉我们，美可以不必张扬，智慧藏于最简单的生存布局之中。每一位热爱深度游的旅人，都应该来厄斯住上一两天，不是为了收集又一个地名，而是为了让自己被这种古老而健康的节奏“校准”一次。当你坐在夕阳下的石阶上，看着最后一缕金光从教堂钟楼尖顶滑落，你会明白，有些地方，能照见的不仅是风景，更是内心深处对安宁与真实的渴望。厄斯，就是这样一个地方。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/provins-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗万中世纪古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Provins</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/fontenay-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    丰
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">丰特莱修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Fontenay Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/conques-abbey-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    孔
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">孔克小镇与修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Conques</p>
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
