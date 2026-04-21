import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '珀劳 Pöllau｜翠绿苹果园中震撼的巴洛克明珠 - 最佳欧洲景点',
  description: '朋友，想象一下，当你开车缓缓驶入一个被柔和丘陵环抱的奥地利山谷，两旁是整齐的、绿得发亮的苹果园和农庄。然后，你的视线毫无防备地被前方一座巨大的、有着明黄色外墙和深色穹顶的建筑群牢牢抓住。它不是孤零零地矗立在山巅，而是如此从容、如此稳固地坐落在谷地中央，被红瓦屋顶的民居谦逊地围绕着，仿佛一颗从大地生长',
}

export default function PoellauBaroqueAbbeyStyriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '奥地利', href: '/destinations/europe' },
            { label: '施泰尔马克州，珀劳镇', href: '/destinations/europe' },
            { label: '珀劳', href: '/attractions/poellau-baroque-abbey-styria' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`珀劳・Pöllau・奥地利・施泰尔马克州，珀劳镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当你开车缓缓驶入一个被柔和丘陵环抱的奥地利山谷，两旁是整齐的、绿得发亮的苹果园和农庄。然后，你的视线毫无防备地被前方一座巨大的、有着明黄色外墙和深色穹顶的建筑群牢牢抓住。它不是孤零零地矗立在山巅，而是如此从容、如此稳固地坐落在谷地中央，被红瓦屋顶的民居谦逊地围绕着，仿佛一颗从大地生长出来的、温润而辉煌的珍珠。这就是珀劳给你的第一视觉冲击——一种近乎不可能的和谐，人间杰作与田园牧歌的完美共生。
停好车，走近它。首先迎接你的不是肃穆，而是活泼的生机。建筑群前方宽阔的广场上，有一座精美的巴洛克喷泉，水流潺潺的声音是此刻的白噪音。空气中飘散着青草、湿润泥土的芬芳，如果赶上春季，还会夹杂着苹果花那清甜微酸的气息。当地人骑着自行车叮铃铃地经过，提着购物袋的老太太会微笑着对你点头说“Grüß Gott”。这座“圣彼得大教堂”并非远在天边的圣地，它就是小镇日常生活韵律的一部分，是街坊们散步遛狗的终点站，是周末弥撒时全家汇聚的社区客厅。
但当你推开那扇厚重的木门，步入教堂内部的瞬间，所有的日常感骤然升华。光线陡然变得幽暗而神圣，随即又被无尽的金色、粉色大理石和炫目的湿壁画点燃。你的呼吸会为之一滞。抬头，是令人目眩神迷的穹顶壁画，圣徒和天使在云端飞舞；四周，是繁复到极致的灰泥装饰，每一寸都诉说着巴洛克时代对“神圣荣耀”的狂热表达。空气微凉，带着石头和古老蜡烛的特有气味，寂静中你能听到自己的心跳，以及远处某个角落隐约传来的、练习管风琴的断续音符。这种从外部田园宁静到内部天堂狂欢的剧烈转换，正是珀劳最核心的、直击人心的魔力。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下，当你开车缓缓驶入一个被柔和丘陵环抱的奥地利山谷，两旁是整齐的、绿得发亮的苹果园和农庄。然后，你的视线毫无防备地被前方一座巨大的、有着明黄色外墙和深色穹顶的建筑群牢牢抓住。它不是孤零零地矗立在山巅，而是如此从容、如此稳固地坐落在谷地中央，被红瓦屋顶的民居谦逊地围绕着，仿佛一颗从大地生长出来的、温润而辉煌的珍珠。这就是珀劳给你的第一视觉冲击——一种近乎不可能的和谐，人间杰作与田园牧歌的完美共生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "停好车，走近它。首先迎接你的不是肃穆，而是活泼的生机。建筑群前方宽阔的广场上，有一座精美的巴洛克喷泉，水流潺潺的声音是此刻的白噪音。空气中飘散着青草、湿润泥土的芬芳，如果赶上春季，还会夹杂着苹果花那清甜微酸的气息。当地人骑着自行车叮铃铃地经过，提着购物袋的老太太会微笑着对你点头说“Grüß Gott”。这座“圣彼得大教堂”并非远在天边的圣地，它就是小镇日常生活韵律的一部分，是街坊们散步遛狗的终点站，是周末弥撒时全家汇聚的社区客厅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但当你推开那扇厚重的木门，步入教堂内部的瞬间，所有的日常感骤然升华。光线陡然变得幽暗而神圣，随即又被无尽的金色、粉色大理石和炫目的湿壁画点燃。你的呼吸会为之一滞。抬头，是令人目眩神迷的穹顶壁画，圣徒和天使在云端飞舞；四周，是繁复到极致的灰泥装饰，每一寸都诉说着巴洛克时代对“神圣荣耀”的狂热表达。空气微凉，带着石头和古老蜡烛的特有气味，寂静中你能听到自己的心跳，以及远处某个角落隐约传来的、练习管风琴的断续音符。这种从外部田园宁静到内部天堂狂欢的剧烈转换，正是珀劳最核心的、直击人心的魔力。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`珀劳`} />
                <InfoRow label="英文名称" value={`Pöllau`} />
                <InfoRow label="正式名称" value={`前修道院教堂与宫殿建筑群，又称“施泰尔马克的圣彼得大教堂”`} />
                <InfoRow label="国家" value={`奥地利`} />
                <InfoRow label="城市" value={`施泰尔马克州，珀劳镇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座宏伟的建筑曾是奥地利施泰尔马克地区最重要的奥古斯丁修道院之一，是当地宗教、文化和经济生活的绝对中心。`} />
                <InfoRow label="建筑特色" value={`一座将巍峨的巴洛克教堂、规整的修道院回廊与一座宛如宫殿的庞大建筑完美融合于一体的惊人综合体，和谐地嵌入田园诗般的自然环境中。`} />
                <InfoRow label="建筑风格" value={`以成熟、辉煌的南德-奥地利巴洛克风格为主导，内部装饰极尽华丽，是“施泰尔马克巴洛克”的典范之作。`} />
                <InfoRow label="文化价值" value={`它不仅仅是一座宗教建筑，更是理解施泰尔马克地区乡土认同、历史变迁以及巴洛克艺术如何深刻塑造中欧乡村景观的活课本。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂内部通常每日上午9点至下午6点开放，但请注意周日及宗教节日期间上午主要用于弥撒，建议下午参观。前修道院宫殿部分（现为市政厅及文化场所）的公共区域在工作日办公时间可自由进入庭院及部分走廊。具体房间或博物馆展览的开放时间常有变动，建议行前在当地旅游局官网查询最新信息。冬季（11月至3月）开放时间可能略微缩短。`} />
              <InfoRow label="门票价格" value={`进入教堂区域免费。若想参加有组织的塔楼登顶导览或参观特定的历史房间（如曾经的修道院图书馆），需支付小额费用，约5-8欧元。学生、儿童及团体享有优惠。当地旅游局提供的综合导览游价格约为12-15欧元，包含多个景点讲解。`} />
              <InfoRow label="地址" value={`Hauptplatz 1, 8225 Pöllau, Austria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是格拉茨机场（GRZ），约60公里车程，驾车沿B54和B65公路前往约需50分钟。从格拉茨中央火车站出发，可乘坐Regional-Express（REX）或S-Bahn前往哈特贝格（Hartberg），车程约50分钟，班次每小时1-2班。从哈特伯格火车站换乘前往珀劳的邮政巴士（Postbus），约20分钟车程，巴士班次相对较疏，建议提前在ÖBB（奥地利联邦铁路）App上查询并购买联票。最灵活的方式是在格拉茨或哈特贝格租车自驾，沿途穿越施泰尔马克的绿色丘陵风光本身就是享受。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个故事得从近九百年前讲起。早在12世纪，珀劳这个地方就已经是施泰尔马克边疆伯爵领地中的一个重要据点。但让它命运发生转折的，是15世纪初的一位关键人物——哈特内格的西格蒙德爵士。这位地方贵族在1428年左右，将一片土地和一座小教堂赠予了奥古斯丁修会。他的初衷或许是为了灵魂的救赎，或许是为了巩固地方的宗教影响力，但这粒种子，就此埋下。最初的修道院低调而朴素，修士们在这里过着清规戒律的生活，管理着周围的农田和葡萄园，成为地区知识和灵性的守护者。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间的河流平静地流淌了近两百年，直到17世纪那场席卷全欧的“巴洛克风暴”也刮进了这个阿尔卑斯山脚下的山谷。当时的天主教会，为了对抗宗教改革，掀起了一场用艺术征服感官、重申信仰权威的宏伟运动。珀劳修道院当时的院长们，无疑是这股潮流的敏锐追随者和有力推动者。从17世纪末到18世纪中叶，一场持续数十年、耗资巨大的改建工程开始了。他们请来了当时最炙手可热的艺术家：建筑师约瑟夫·胡伯纳、画家约翰·万·德·海登、灰泥雕塑家约瑟夫·罗塔迈尔……这些名字或许不那么如雷贯耳，但他们的才华，却在此地毫无保留地绽放。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你可以想象当时的场景：脚手架林立，敲击声、雕刻声不绝于耳，空气中弥漫着石膏粉和新鲜颜料的味道。原本中世纪哥特式的影子被彻底抹去，取而代之的是曲线、拱券、金色的漩涡和无限延伸的透视幻觉。他们不仅仅是在装修一座教堂，而是在建造一个“人间天堂”的模型。穹顶壁画描绘了圣奥古斯丁的凯旋，光影被精确计算，让观者产生直通云霄的眩晕感。这不仅仅是艺术，更是一场精心策划的“神学戏剧”，每一位走进来的农民或贵族，都会在瞬间被这压倒性的美与权威所震慑，从而强化对信仰的皈依。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，盛极必衰是历史的常态。1803年，拿破仑战争的余波席卷了神圣罗马帝国，帝国议会通过了《帝国代表重要决议》，开始了大规模的“世俗化”运动。像珀劳这样富庶的修道院，成为了首要目标。修士们被遣散，积累了数百年的土地、财产被国家没收。那辉煌的巴洛克殿堂，瞬间失去了它原本的灵魂。万幸的是，建筑本身没有被毁。它先后被用作学校、仓库，甚至一部分成了地方行政官的住所。教堂被保留为教区教堂，继续服务于当地信众，而庞大的修道院建筑则演变成了今天小镇的行政和文化中心（市政厅、博物馆、活动大厅都设在里面）。这种从宗教核心到世俗公共空间的转变，本身就是一部生动的欧洲近代史。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味珀劳，我强烈建议你留出至少三个小时的悠闲时光，最好选择一个工作日的下午。这样既能避开周日早晨密集的弥撒人群，又能享受到相对静谧的内部空间，并且有充足的光线欣赏建筑细节。游览节奏宜慢不宜快，核心在于“由外至内，由宏大到细微”的沉浸式体验。先从外部环境和整体格局感受它的气场，再深入内部接受艺术的洗礼，最后登高或漫步回廊，将震撼沉淀为回味。这样的安排能让你层层递进地理解这座建筑复合体的多重身份。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`进入教堂内部请务必保持安静，关闭手机铃声，尊重正在祈祷的信徒。女性夏季穿着避免过于暴露的背心和短裤，以示对宗教场所的尊重。小镇餐馆关门较早，若计划晚餐，建议提前在镇中心找好地方或返回更大城镇。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇边缘的免费停车场，沿着被鲜花装点的安静小巷慢慢步行接近，让那座巨大的黄色穹顶在民居屋顶间时隐时现，逐步累积期待感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先环绕建筑群走一小圈，从侧面和后方欣赏它如何与后方苍翠的丘陵及旁边的果园无缝衔接，体会巴洛克建筑“操控景观”的野心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在正门前方的巴洛克喷泉（圣三位一体柱）边驻足片刻，听水声，观察精美雕塑，这里是拍摄建筑全景的经典前景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开教堂沉重的木门，先在门廊处让眼睛适应光线的变化，然后一步踏入中殿，什么也别做，就站在原地仰头凝视那令人屏息的穹顶壁画至少一分钟。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着侧廊缓缓行走，仔细寻找那些藏在华丽灰泥装饰中的可爱小天使、奇异的花草纹样，以及用彩色大理石拼贴出的逼真“织毯”效果。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果有开放，一定要走进连接教堂的修道院回廊，这里氛围陡然沉静，阳光透过拱廊在地上画出几何光影，是感受昔日修士生活节奏的最佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过回廊可以进入前修道院宫殿的庭院和部分向公众开放的大厅（如今是市政厅），看看昔日院长和贵宾的楼梯与厅堂如何为现代小镇的日常政务服务。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，绕到建筑后方的小坡上，回望整个综合体在夕阳下的全景，金色的十字架在墨绿色山丘衬托下熠熠生辉，为旅程画上圆满句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`教堂正前方喷泉处`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒建筑立体的灰泥装饰和穹顶曲线，将喷泉雕塑作为前景，能增加照片的层次感和叙事性。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`教堂内部中殿中央`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头（如果允许且不影响他人），对准主祭坛和穹顶，等待一束阳光从高侧窗射入照亮尘雾的瞬间，能拍出极其神圣的光影效果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`修道院回廊的东南角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚的低角度阳光会斜射入拱廊，在古老石砖地上拉出长长的、富有韵律感的阴影，拍摄对称构图或人物剪影极佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`镇外东南方向的小丘陵上`}</h4>
                  <p className="text-sm text-gray-700">{`沿着徒步小径走上十分钟，可以找到一个开阔的视角，将巴洛克教堂、小镇红屋顶与背后绵延的苹果园和森林一同纳入画面，最能体现其环境之和谐。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`教堂侧门旁的古老石阶`}</h4>
                  <p className="text-sm text-gray-700">{`以石阶的纵深感引导视线至精美的巴洛克门廊细节，适合拍摄有故事感的局部特写。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部通常允许不使用闪光灯和三脚架的摄影，但务必遵守规定，弥撒期间绝对禁止拍摄。飞无人机需要提前申请特别许可，小镇空域管理严格。多利用自然光影，巴洛克内饰的金色反光在柔和的侧光下质感最佳。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`田园民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在镇外步行可达的家族经营农庄，房间窗户正对着苹果园和远处的教堂穹顶，早晨在牛铃和鸟鸣中醒来，品尝主人自制的果酱和新鲜牛奶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史客房`}</h4>
                  <p className="text-sm text-green-800">{`镇中心一栋18世纪商人住宅改造的小型精品酒店，木梁天花板和复古家具韵味十足，下楼就是集市广场，体验最地道的奥地利小镇夜之静谧。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于邻近村庄的一座19世纪庄园改建酒店，拥有美丽的花园和室内泳池，提供施泰尔马克州特色的蜂蜜和南瓜籽油SPA，是放松身心的完美基地。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`度假公寓`}</h4>
                  <p className="text-sm text-purple-800">{`适合家庭或小团体，在珀劳老城租一套带小厨房的公寓，像当地人一样去街角面包房买早餐，享受自己“在家”探索小镇的悠闲感。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季和秋季（苹果收获季）是旺季，住宿需提前数周预订。小镇治安极好，夜晚非常宁静。选择住在镇内可以彻底享受无车的悠闲，但停车位可能紧张，预订时需确认停车安排。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开珀劳很久以后，闭上眼，我脑海里浮现的并不是那金光灿灿的穹顶壁画，而是一种奇妙的“完整感”。这里没有将超凡脱俗与人间烟火粗暴地割裂。神性的辉煌与泥土的芬芳，修士的虔修与农夫的劳作，巴洛克大师的狂想与小镇居民平实的日子，所有这些看似对立的面相，竟然被如此精巧、如此不动声色地编织在了一起，织成了一幅厚重而温暖的挂毯。它告诉我们，伟大的文明，其最健康的形态，或许正是这样深深扎根于具体的地理与日常的生活之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个人人追逐网红打卡点、旅行变成碎片化拼图的时代，珀劳像一位沉静的长者，邀请你进行一场“反向旅行”。它不提供瞬间的刺激，而是提供深度的沉浸。它要求你慢下来，用脚丈量，用眼睛细看，用心去感受一层层历史如何在此叠加、转化。当你站在那个山坡上，看着夕阳为这座“苹果园中的大教堂”镀上金边，你会明白，有些美，不是为了被消费，而是为了被见证和传承。它或许永远不会出现在最热门的目的地榜单上，但正是这份低调与真实，让它成为我们这些渴望在旅途中触碰历史纹理、寻找心灵安宁的漫游者，必须私藏于心的一处宝藏。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/burg-kreuzenstein" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克罗伊岑施泰因城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burg Kreuzenstein</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/watch-valley-ice-lakes-austria-switzerland" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥地利·瑞士（制表名谷与冰碛湖泊）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Watch Valley & Glacial Lakes: Austria to Switzerland</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/retz-windmill-wine-cellars" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    雷
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">雷茨</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Retz</p>
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
