import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '库尔提乌斯博物馆 Grand Curtius｜列日心脏的红砖传奇，一座军火商豪宅里的千年艺术史诗 - 最佳欧洲景点',
  description: '当你从列日老城蜿蜒的鹅卵石街道拐进费龙街，第一眼看到“大库尔提乌斯”时，一定会被那堵巨大的、近乎赭红色的砖墙镇住。它不是那种精致脆弱的宫殿，而像一头蹲伏在默兹河畔的巨兽，厚重、沉稳，砖石在午后阳光下泛着蜂蜜与铁锈混合的暖光。最抢眼的是中央那个被岁月染成翠绿色的铜制圆顶，像一顶古老的王冠，静静俯瞰着流...',
}

export default function GrandCurtiusPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '库尔提乌斯博物馆', href: '/attractions/grand-curtius' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`库尔提乌斯博物馆・Grand Curtius・比利时・列日`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从列日老城蜿蜒的鹅卵石街道拐进费龙街，第一眼看到“大库尔提乌斯”时，一定会被那堵巨大的、近乎赭红色的砖墙镇住。它不是那种精致脆弱的宫殿，而像一头蹲伏在默兹河畔的巨兽，厚重、沉稳，砖石在午后阳光下泛着蜂蜜与铁锈混合的暖光。最抢眼的是中央那个被岁月染成翠绿色的铜制圆顶，像一顶古老的王冠，静静俯瞰着流淌的河水。空气中飘来淡淡的河水气息，混杂着老建筑石材特有的、微凉的尘土味。你会发现，当地人对这座建筑的感情很特别，他们不会像游客一样仰头惊叹，而是很自然地穿过它的拱门，去里面的咖啡馆喝一杯，或者只是在中庭的长椅上晒会儿太阳——它早已是城市肌理里一块活着的、呼吸着的骨骼。
推开那扇沉重的木门，室内的光线瞬间暗了下来，时光仿佛在这里被调慢了流速。你的耳朵首先捕捉到的是一种深沉的寂静，偶尔被远处某个展厅传来的轻微脚步声或低语打破。但很快，你的眼睛就适应了。阳光透过高高的、铅条镶嵌的玻璃窗，被切割成一道道柔软的光柱，斜斜地打在深色的橡木地板上，光柱里无数尘埃在缓慢舞蹈。空气中飘着一丝若有若无的木头蜡和金属保养油的味道，那是老博物馆特有的、令人安心的气味。这里的空间感非常奇妙，它不像现代博物馆那样开阔明亮，而是由一连串大小不一的房间、隐秘的回廊和突然出现的旋转楼梯组成，像一座迷人的迷宫。每一个转角都可能遇见惊喜：可能是一套光芒夺目的文艺复兴时期金匠作品，也可能是一整面墙的、寒光凛冽的中世纪长剑。
这就是库尔提乌斯最核心的魅力——它本身就是最珍贵的展品。你不仅仅是在“参观”博物馆，你是在“步入”一位16世纪军火大亨的私宅，同时又在穿越一条跨越千年的历史长廊。那种质感是叠加的：指尖划过冰凉的石砌窗台，那是豪宅主人曾经凭栏远眺的位置；眼前陈列的公元7世纪墨洛温骑士的镀金马刺，又把你拽入更古老的传说。在这里，历史不是教科书上扁平的文字，而是可触摸的砖石、可凝视的刀刃、可感受的、从古老壁炉仿佛仍能传来的暖意。它讲述的不仅仅是艺术，更是列日这座城市如何用火与铁，锻造出自己的性格与命运。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从列日老城蜿蜒的鹅卵石街道拐进费龙街，第一眼看到“大库尔提乌斯”时，一定会被那堵巨大的、近乎赭红色的砖墙镇住。它不是那种精致脆弱的宫殿，而像一头蹲伏在默兹河畔的巨兽，厚重、沉稳，砖石在午后阳光下泛着蜂蜜与铁锈混合的暖光。最抢眼的是中央那个被岁月染成翠绿色的铜制圆顶，像一顶古老的王冠，静静俯瞰着流淌的河水。空气中飘来淡淡的河水气息，混杂着老建筑石材特有的、微凉的尘土味。你会发现，当地人对这座建筑的感情很特别，他们不会像游客一样仰头惊叹，而是很自然地穿过它的拱门，去里面的咖啡馆喝一杯，或者只是在中庭的长椅上晒会儿太阳——它早已是城市肌理里一块活着的、呼吸着的骨骼。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇沉重的木门，室内的光线瞬间暗了下来，时光仿佛在这里被调慢了流速。你的耳朵首先捕捉到的是一种深沉的寂静，偶尔被远处某个展厅传来的轻微脚步声或低语打破。但很快，你的眼睛就适应了。阳光透过高高的、铅条镶嵌的玻璃窗，被切割成一道道柔软的光柱，斜斜地打在深色的橡木地板上，光柱里无数尘埃在缓慢舞蹈。空气中飘着一丝若有若无的木头蜡和金属保养油的味道，那是老博物馆特有的、令人安心的气味。这里的空间感非常奇妙，它不像现代博物馆那样开阔明亮，而是由一连串大小不一的房间、隐秘的回廊和突然出现的旋转楼梯组成，像一座迷人的迷宫。每一个转角都可能遇见惊喜：可能是一套光芒夺目的文艺复兴时期金匠作品，也可能是一整面墙的、寒光凛冽的中世纪长剑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这就是库尔提乌斯最核心的魅力——它本身就是最珍贵的展品。你不仅仅是在“参观”博物馆，你是在“步入”一位16世纪军火大亨的私宅，同时又在穿越一条跨越千年的历史长廊。那种质感是叠加的：指尖划过冰凉的石砌窗台，那是豪宅主人曾经凭栏远眺的位置；眼前陈列的公元7世纪墨洛温骑士的镀金马刺，又把你拽入更古老的传说。在这里，历史不是教科书上扁平的文字，而是可触摸的砖石、可凝视的刀刃、可感受的、从古老壁炉仿佛仍能传来的暖意。它讲述的不仅仅是艺术，更是列日这座城市如何用火与铁，锻造出自己的性格与命运。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`库尔提乌斯博物馆`} />
                <InfoRow label="英文名称" value={`Grand Curtius`} />
                <InfoRow label="正式名称" value={`Grand Curtius`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`列日`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座建筑本身是列日作为欧洲军火与冶金之都黄金时代最辉煌的私人宅邸，其收藏则串联起了从墨洛温王朝到文艺复兴的完整地方史。`} />
                <InfoRow label="建筑特色" value={`一座宏伟的四翼红砖建筑群，完美融合了文艺复兴式的优雅装饰与坚固如堡垒般的防御性结构，中央的铜绿圆顶是其标志。`} />
                <InfoRow label="建筑风格" value={`以本地鲜明的“摩斯风格”（Mosane）为主，巧妙融入了文艺复兴与路易十三时期的建筑元素。`} />
                <InfoRow label="文化价值" value={`它不仅是一座博物馆，更是列日千年灵魂的实体容器，从考古文物、装饰艺术到武器制造，全景式展现了这座“炽烈之城”的创造力与韧性。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每周二至周日，上午10:00至下午6:00开放。周一闭馆（除特定节假日外）。每年1月1日、5月1日、11月1日及12月25日闭馆。特别展览期间开放时间可能延长，建议行前在官网确认最新信息。`} />
              <InfoRow label="门票价格" value={`成人票12欧元；65岁以上长者、学生及13-18岁青少年票8欧元；12岁及以下儿童免费。持有列日城市通卡（Liège City Card）可免费入场。每月第一个周日对所有访客免费开放。提供语音导览租赁服务，费用为3欧元。`} />
              <InfoRow label="地址" value={`Feronstrée 136, 4000 Liège, Belgium`} />
              <InfoRow label="交通方式" value={`从列日-吉耶曼火车站（Liège-Guillemins）出发最为便捷。出站后步行至对面的公交枢纽，乘坐1路、4路或6路有轨电车（Tram），往“市中心/Centre”方向，在“Opéra”站下车，沿Feronstrée街道向默兹河方向步行约5分钟即达红色建筑群，全程约15-20分钟。从布鲁塞尔乘火车至列日火车站约1小时，班次密集，建议购买比利时铁路套票更划算。若从列日机场抵达，可先乘巴士至火车站再换乘。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`这个故事得从一个叫让·德·库尔提乌斯的人讲起。时间回到16世纪末，列日地区正处于它历史上最风光的时期。靠着默兹河便利的水运和地下丰富的煤炭资源，这里成了欧洲闻名的武器制造中心和冶金重镇，刀剑、火枪、盔甲从这里源源不断地运往各方战场。让·德·库尔提乌斯就是这波浪潮中涌现的顶级军火商兼实业家，富可敌国。大约在1597年到1600年间，他决定为自己建造一座配得上其财富与地位的宅邸。他选在了默兹河畔，紧邻列日 Prince-Bishops（亲王主教）城堡的脚下，这个位置本身就充满了象征意义——既靠近权力中心，又俯瞰着城市的经济命脉河流。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，这座宏伟的宅邸拔地而起。库尔提乌斯没有选择当时贵族钟爱的石灰岩，而是大量使用了本地烧制的红砖，这让建筑从一开始就带上了浓烈的地方烙印。但红砖不等于粗糙，建筑师在细节上极尽奢华：华丽的雕刻窗框、优雅的弧形山墙、还有那个在当时堪称技术奇迹的庞大铜制圆顶。最有趣的是它的双重性格：面向城市的一侧，立面是文艺复兴式的优雅与开放，展示了主人的艺术品味和社会地位；而面向河流的一侧，墙体则异常厚重，窗户窄小，更像一个戒备森严的堡垒或仓库。这完美反映了主人的双重身份：既是附庸风雅的大商人，也是需要严密守护其珍贵“商品”——武器的务实主义者。这里不仅是家，很可能也是他庞大的武器展示厅和秘密仓库。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`库尔提乌斯家族在此居住了一个多世纪，直到18世纪初家族没落，豪宅被分割、转售，做过办公场所，也一度荒废。它的转机出现在20世纪初。1905年，列日市政府买下了这栋濒临损毁的建筑，并启动了一项雄心勃勃的修复与扩建计划。他们不仅想拯救这座建筑，更想把它变成一座真正的城市博物馆。修复工作小心翼翼地保留了原有结构，并将周边几座不同历史时期的重要建筑——包括中世纪的“兵器库”和一座18世纪的宅邸——通过巧妙的内部通道连接起来，形成了一个庞大的博物馆建筑群。2009年，经过长达数年的精心翻新，“大库尔提乌斯”以全新面貌开放，它不再是几座孤立的老房子，而成了一个内部浑然一体、讲述完整列日故事的文化殿堂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`漫步其中，你能清晰地读到这些层叠的历史。在原本的武器库大厅里，高耸的拱顶下陈列着闪着寒光的十字弩和全身板甲，仿佛能听到铁匠铺的敲打声。而在文艺复兴风格的沙龙里，精美的弗兰德挂毯和细腻的肖像画，又诉说着主人对精致生活的追求。二战时期，珍贵的藏品被紧急转移，建筑本身也遭受了炮火的擦伤，那些后来修补的砖石，是它沉默的伤疤。今天，它收藏了超过50万件藏品，从史前燧石到新艺术玻璃，但所有这些珍宝，都因为承载它们的这个“容器”——库尔提乌斯宅邸本身——而拥有了更厚重、更动人的叙事力量。它是一本用砖石写成的自传，记录了个人野心、城市兴衰与时代变迁。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味库尔提乌斯，我强烈建议你预留至少三小时，并选择在平日的上午十点刚开门时抵达。这时人流最少，你能独享那些静谧展厅里魔法般的光影。游览节奏应该是“慢浸入”式的：先从外部整体感受建筑的宏伟，再进入内部，按从古至今的时间线穿梭。整体路线设计为由远及近，由外至内，最后登高望远。你会先被古老的器物震撼，再一步步理解它们所在的这栋房子，最终在屋顶将城市全景与历史感悟融为一体。这样的安排能让你对“列日”的理解，从一件件孤立的文物，升华到一整幅流动的史诗画卷。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末下午人流较多，会影响在狭窄展厅和旋转楼梯的体验，尽量避开。部分展厅地面为古老木板或石砖，穿一双舒适防滑的鞋子非常必要。博物馆内部结构像迷宫，但标识清晰，不用担心走丢，反而鼓励你适当“迷路”，去发现计划外的惊喜角落。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从河对岸的恩哈格公园开始远眺，用全景视角将红砖建筑群与默兹河、山丘上的城堡一起收入眼底，建立最初的时空坐标。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的石桥，沿着费龙街走近，仰头细细品味正立面上那些繁复的文艺复兴雕刻和已经氧化成翡翠绿的中央大圆顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口进入，先别急着看展品，在中庭停留片刻，感受阳光从玻璃穹顶洒下，照亮四层楼高的红砖回廊所带来的震撼空间感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接上到二楼，首先踏入“考古与装饰艺术”展区，让那些墨洛温时期的黄金珠宝和罗马玻璃器皿带你瞬间坠入千年之前的默兹河谷。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后沿着连贯的通道进入原“兵器库”大厅，在高耸的哥特式拱顶下，面对一整面墙的中世纪长剑、战斧和盔甲，想象它们被锻造和挥舞时的声响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`转身步入16-17世纪的核心区域，在库尔提乌斯家族原始的沙龙与卧室里，欣赏精致的橡木壁板、弗兰德挂毯和家族肖像，触摸那个时代的奢华温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`千万别错过顶层的“玻璃艺术”展厅，那里陈列着从古罗马到新艺术运动的玻璃杰作，当阳光穿过它们时，整个房间会变成一场流动的色彩交响乐。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，如果开放，找到通往建筑侧面露台的小门，在那里获得一个俯瞰博物馆庭院与远处列日老城屋顶的独家视角，为游览画上一个圆满的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`默兹河对岸的恩哈格公园草坪上`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏时分，用长焦镜头压缩空间，将博物馆的红砖立面、圆顶与河中的倒影一同构图，能拍出最具叙事感的标志性全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中庭仰拍回廊与穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点至正午，阳光直射玻璃顶棚时，站在中庭中央向上仰拍，能捕捉到光线在层层红砖拱廊上制造出的强烈明暗对比与几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`原兵器库大厅的对称构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在大厅入口的中轴线上，利用两侧高大的石柱和陈列的盔甲作为引导线，拍摄通往深处拱门的画面，营造深邃的历史纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`顶层玻璃展厅的特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午的侧光透过彩色玻璃窗时，靠近拍摄一件新艺术风格的玻璃器皿，焦点对准器物本身，让背景斑斓的光斑自然虚化，得到充满灵感的艺术细节。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`室内大部分区域允许拍照，但严禁使用闪光灯和三脚架，这是为了保护娇弱的古代织物和绘画。拍摄文物时，请将相机感光度调高，利用现场光，反而能获得更具氛围感的低光照作品。在狭窄的楼梯和通道拍照时，务必注意避让其他游客。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔历史之选`}</h4>
                  <p className="text-sm text-blue-800">{`紧邻博物馆的“默兹河畔酒店”，由一座19世纪建筑改造，部分房间拥有直面库尔提乌斯红砖墙和河景的小阳台，清晨在潺潺水声中醒来。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心民宿`}</h4>
                  <p className="text-sm text-green-800">{`藏在主教宫后方小巷里的“天鹅庭院”民宿，由一对艺术家夫妇经营，房间充满复古气息，步行到博物馆仅需8分钟，像住在本地朋友家。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计感精品酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`位于列日火车站附近的“G”酒店，现代设计与工业风碰撞，提供别样的舒适体验，搭乘有轨电车去博物馆非常方便，适合追求时尚设施的年轻人。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静庄园体验`}</h4>
                  <p className="text-sm text-purple-800">{`位于城市近郊山丘上的“拉维瑞城堡酒店”，一座18世纪的庄园，拥有大片花园，适合自驾者，在一天的博物馆历史沉浸后，回归绝对的静谧与奢华。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`列日老城中心区域夜晚非常安全，且充满活力，咖啡馆和酒吧会营业到很晚，住在市中心能更好地体验当地夜生活。如果想预订河景房或特色民宿，尤其是旺季（春末至初秋），建议至少提前一个月预订。周末列日经常有文化活动或集市，酒店价格会小幅上扬。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开库尔提乌斯博物馆很久之后，我脑子里反复回味的，不是某一件具体的金杯或宝剑，而是一种混合的感觉：红砖的温暖、金属的冰凉、幽暗长廊里的木香，以及从古老窗框望出去那一角流动的、现代的默兹河。这地方有种奇特的魔力，它没有试图把历史打扮得光滑完美呈给你看，而是坦率地展示着所有的层次与接缝——16世纪的奢华与20世纪的修补痕迹并存，冷兵器时代的杀伐之气与玻璃艺术的灵动之光共处一室。它让你明白，历史从来不是单一的叙事，而是一层层覆盖、碰撞、融合的复杂产物。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求瞬时刺激的快节奏世界里，库尔提乌斯提供了一种截然相反的旅行价值：深度沉浸与缓慢连接。它要求你慢下来，用脚步去丈量那些高低错落的房间，用眼睛去适应昏暗光线下的精美细节，用心去想象每一件器物背后活生生的人与故事。来这里，你不是一个被动的观光客，而像一位受邀进入时间密室的探索者。每一位热爱深度游的旅人都该来一次列日，走进这座红砖巨宅，因为它教会你的，是如何通过一栋建筑、一座城市的切片，去理解整个欧洲文明的韧性、创造力与那份厚重如砖石般的美。这趟旅程结束后，你带走的将不仅是照片，而是一段被实体化、可触摸的记忆，和一颗被历史真实质感稍稍填满的心。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/leuven-university-town-hall" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁汶大学城与市政厅</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Leuven University Town & Town Hall</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/durbuy-smallest-city-belgium" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪尔比</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Durbuy</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/huy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    胡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">胡伊古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Huy</p>
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
