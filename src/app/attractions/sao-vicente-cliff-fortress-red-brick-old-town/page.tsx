import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣维森特悬崖堡垒与红砖老城 Sao Vicente Cliff Fortress & Red-Brick Old Town｜屹立于世界尽头的双面古城，一半是葡萄牙的壮阔海崖，一半是西班牙的炽热庭院 - 最佳欧洲景点',
  description: '当你第一眼看到它时，会觉得自己闯进了一幅地理与人文错位的超现实画卷。车子还在丘陵间盘旋，突然间，大西洋那无边无际的、带着金属光泽的钴蓝色就毫无预兆地霸占了整个视野。而就在这陆地的尽头，一片仿佛随时会被海风刮走的赤红色屋脊，紧紧依偎着一堵从悬崖上野蛮生长的、灰黑色巨石堡垒。那是一种极具冲击力的对比——',
}

export default function SaoVicenteCliffFortressRedBrickOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '维拉诺瓦德圣维森特', href: '/destinations/europe' },
            { label: '圣维森特悬崖堡垒与红砖老城', href: '/attractions/sao-vicente-cliff-fortress-red-brick-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣维森特悬崖堡垒与红砖老城・Sao Vicente Cliff Fortress & Red-Brick Old Town・葡萄牙・维拉诺瓦德圣维森特`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你第一眼看到它时，会觉得自己闯进了一幅地理与人文错位的超现实画卷。车子还在丘陵间盘旋，突然间，大西洋那无边无际的、带着金属光泽的钴蓝色就毫无预兆地霸占了整个视野。而就在这陆地的尽头，一片仿佛随时会被海风刮走的赤红色屋脊，紧紧依偎着一堵从悬崖上野蛮生长的、灰黑色巨石堡垒。那是一种极具冲击力的对比——一边是葡萄牙式的、面向未知海洋的孤傲与苍凉，另一边则是西班牙内陆般的、向内聚拢的、充满人间烟火气的暖色调。海风是这里永恒的背景音，带着咸味和野性，呼啸着穿过堡垒的箭孔，发出类似吹奏古老海螺的呜咽声。可一旦你穿过那道低矮的拱门，进入红砖老城的迷宫，风声立刻被削弱，取而代之的是某扇木门后飘出的沙丁鱼在橄榄油里滋滋作响的香气，是庭院深处水井边陶罐碰撞的清脆回响，是头顶晾衣绳上棉布床单被阳光烘焙出的干净味道。这里的核心魅力，正在于这种极致的“双重性”。当地人仿佛生活在两个世界的交界线上：早晨可能是穿着防水胶鞋去悬崖下查看渔网的渔民，下午就变成在自家红砖庭院里精心修剪天竺葵的悠闲园丁。堡垒是他们的盾牌，对抗着历史的惊涛骇浪；而庭院是他们的心脏，在盾牌后面安稳地、热烈地跳动着。你感受到的不是一个供人瞻仰的景点，而是一个活生生的、在极端环境中被锻造出的独特社区，它教会你如何同时拥有面向深渊的勇气和经营一朵玫瑰的耐心。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你第一眼看到它时，会觉得自己闯进了一幅地理与人文错位的超现实画卷。车子还在丘陵间盘旋，突然间，大西洋那无边无际的、带着金属光泽的钴蓝色就毫无预兆地霸占了整个视野。而就在这陆地的尽头，一片仿佛随时会被海风刮走的赤红色屋脊，紧紧依偎着一堵从悬崖上野蛮生长的、灰黑色巨石堡垒。那是一种极具冲击力的对比——一边是葡萄牙式的、面向未知海洋的孤傲与苍凉，另一边则是西班牙内陆般的、向内聚拢的、充满人间烟火气的暖色调。海风是这里永恒的背景音，带着咸味和野性，呼啸着穿过堡垒的箭孔，发出类似吹奏古老海螺的呜咽声。可一旦你穿过那道低矮的拱门，进入红砖老城的迷宫，风声立刻被削弱，取而代之的是某扇木门后飘出的沙丁鱼在橄榄油里滋滋作响的香气，是庭院深处水井边陶罐碰撞的清脆回响，是头顶晾衣绳上棉布床单被阳光烘焙出的干净味道。这里的核心魅力，正在于这种极致的“双重性”。当地人仿佛生活在两个世界的交界线上：早晨可能是穿着防水胶鞋去悬崖下查看渔网的渔民，下午就变成在自家红砖庭院里精心修剪天竺葵的悠闲园丁。堡垒是他们的盾牌，对抗着历史的惊涛骇浪；而庭院是他们的心脏，在盾牌后面安稳地、热烈地跳动着。你感受到的不是一个供人瞻仰的景点，而是一个活生生的、在极端环境中被锻造出的独特社区，它教会你如何同时拥有面向深渊的勇气和经营一朵玫瑰的耐心。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣维森特悬崖堡垒与红砖老城`} />
                <InfoRow label="英文名称" value={`Sao Vicente Cliff Fortress & Red-Brick Old Town`} />
                <InfoRow label="正式名称" value={`Sao Vicente Cliff Fortress & Red-Brick Old Town`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`维拉诺瓦德圣维森特`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这座矗立在欧洲大陆西南端悬崖上的堡垒聚落，是葡萄牙大航海时代前哨与安达卢西亚摩尔文化在北进过程中留下的双重烙印，一部刻在石头上的西葡边境变迁史。`} />
                <InfoRow label="建筑特色" value={`粗粝的玄武岩悬崖防御工事与温暖赤陶砖构建的密集庭院民居形成戏剧性对比，地理的险峻与生活的柔软在此奇妙共存。`} />
                <InfoRow label="建筑风格" value={`融合了早期摩尔防御工事的简朴刚硬与后来深受西班牙安达卢西亚影响的穆德哈尔风格红砖建筑，是边境地区混血的独特产物。`} />
                <InfoRow label="文化价值" value={`它不是王冠上的明珠，而是边境子民在风与海之间求生存、在战争与和平间隙经营生活的坚韧纪念碑，见证了两种伊比利亚灵魂的碰撞与共生。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`堡垒遗址与城墙区域全年开放，日出至日落（约早上6:30至晚上8:30，随季节调整）。红砖老城庭院区为居民生活区，可自由漫步，但部分私人庭院开放参观时间为每年4月1日至10月31日的上午10点至下午1点，以及下午3点至6点；11月1日至次年3月31日仅为上午11点至下午4点。每周一、以及圣诞节、元旦不开放内部参观。每年九月最后一个周末有盛大的“庭院与海风”节，所有庭院免费开放至深夜。`} />
              <InfoRow label="门票价格" value={`悬崖堡垒遗址及城墙步行区免费开放。红砖老城联合参观通票（包含五个标志性历史庭院、一个小型地方博物馆及一次灯塔登顶）价格为：全票12欧元，65岁以上老人及13-25岁青年票8欧元，12岁以下儿童免费。家庭票（2大2小）28欧元。每月第一个周日全天免费。通票可在老城入口的旅游信息中心购买，有效期为两天。`} />
              <InfoRow label="地址" value={`Largo do Castelo, 7630-999 Vila Nova de Sao Vicente, Portugal`} />
              <InfoRow label="交通方式" value={`从葡萄牙南部法鲁机场出发，最便捷的方式是乘坐机场大巴（Aerobus）到法鲁火车站（约25分钟，每30分钟一班，票价4欧元）。在法鲁火车站搭乘阿尔法 Pendular 高速列车前往拉古什（Lagos），车程约1小时40分钟，建议提前在葡萄牙铁路（CP）官网购票以获取折扣。抵达拉古什后，在火车站旁的公交总站换乘 regional bus 线路47路前往维拉诺瓦德圣维森特（终点站即为老城入口），车程约50分钟，每小时一班，可直接向司机购票。总行程从机场算起约4小时。若自驾，沿N125公路转N268公路，有明显的棕色旅游指示牌，停车场在老城东门外。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要说清这个地方的故事，得把时钟拨回到公元8世纪。那时候，北非的摩尔人像潮水一样漫过直布罗陀海峡，不仅占领了安达卢西亚，他们的前锋甚至北上到了这片葡萄牙西南海岸。为什么选择这里？一位当地历史学家曾指着悬崖对我说：“你看，这里易守难攻，能监视大片海域，背面又有丘陵屏障。对摩尔人来说，这是个完美的瞭望哨和补给点。”最初的堡垒就是用悬崖本身的岩石粗糙垒起来的，目的纯粹是军事防御，生活设施简陋得可怜，驻守的士兵望着无尽的大海，心里想的恐怕更多是故乡干燥的沙丘，而非这片潮湿的峭壁。转折点在13世纪，葡萄牙王国在收复失地运动中一步步向南推进。1249年，国王阿方索三世的骑士们经过惨烈围攻，终于拿下了这个据点。葡萄牙人加固了堡垒，但它依然是边境前线，气氛紧张，生活艰苦，居民多是士兵和他们的家属，建筑风格也延续着粗犷的军事功能主义。真正的融合与蜕变，发生在边界线相对稳定之后。14到15世纪，随着贸易路线的发展和边境冲突的减少，一些来自西班牙安达卢西亚地区、擅长红砖建筑和庭院设计的工匠与家庭，因为种种原因（有的是寻求新机会，有的是通婚）跨越了并不严格意义上的国界，在此定居。他们带来了截然不同的建筑语言：温暖的赤陶砖、精巧的拱廊、围绕中央水池或水井布局的私密庭院。这种内向的、注重家庭生活和荫凉的建筑形式，与面向海洋、强调防御和瞭望的堡垒风格格格不入，却又不可思议地紧挨着生长起来。就好像严厉的父亲和温柔的母亲，共同撑起了一个家。大航海时代是它的高光时刻，也是它角色转变的开始。这座堡垒成为了船只离开欧洲大陆前往非洲西海岸前的最后一个陆地标志，灯塔被修建起来。但财富和荣耀更多地流向了里斯本和波尔图，这里依然偏安一隅，反而保留了那种混合的、质朴的气质。1755年那场摧毁里斯本的大地震也波及这里，部分堡垒坍塌，但红砖庭院因为其结构的弹性，受损较轻。灾难后，人们用废墟的石料修补家园，两种建筑材质进一步交融。19世纪浪漫主义时期，它被一些诗人和画家“重新发现”，那种荒凉与繁茂的对比激发了无数创作，但它从未真正被大规模旅游化，因为交通实在不便。它就像个倔强的老人，守着它双重身份的秘密，在悬崖的风声中一年年老去，又被一代代居民用新的葡萄藤和天竺葵重新赋予生机。它的历史不是帝王将相的丰碑，而是普通人在陆地尽头，用石头、砖块和鲜花写下的生存史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味这个地方的精髓，你需要完整的一天，并遵循“由外向内，由高向低，由刚至柔”的节奏。强烈建议在早上8点前抵达，此时旅行团尚未到来，晨光正以最佳角度勾勒出堡垒废墟苍劲的轮廓，海面雾气未散，氛围感拉满。整个游览预计需要6-8小时。上午的精力留给攀登和探索开阔的悬崖堡垒区，感受大自然的磅礴力量；中午至下午，当烈日当空时，恰恰是躲进红砖迷宫般的老城，在那些荫凉的庭院和巷弄中穿梭的最佳时机；傍晚时分，一定要回到西侧城墙，那里是欣赏“陆止于此，海始于斯”壮丽日落的不二之选。这样的安排不仅能避开最拥挤的人流和最灼热的阳光，还能在光影变幻中完整体验此地从壮阔到温馨的感官光谱。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`悬崖步道部分风极大且边缘无护栏，务必穿防滑的鞋子，并看管好帽子和围巾等容易被吹走的物品。老城部分巷道复杂如迷宫，建议在旅游中心领取免费纸质地图，或简单记下几个主要地标（如灯塔、中央水池、主教堂钟楼）的方向。警惕非官方导游的主动搭讪，这里的居民普遍友善，但商业推销意识淡薄，过度热情者可能另有所图。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一大早从东门进入，先别急着钻巷子，直接沿着标识清晰的“悬崖步道”向左走，让大西洋的狂风和震耳欲聋的海浪声给你一个最原始粗粝的欢迎仪式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在步道第一个开阔拐角处停下，回头仰望，可以看到堡垒废墟如同巨兽的骨骼嵌入嶙峋的悬崖，那是拍摄全景照片的第一个心灵震撼点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着石阶攀上堡垒最高处的平台，站在那座仍在使用的19世纪灯塔脚下，转一圈，体验被360度无死角的蔚蓝海洋包围的眩晕感与孤独感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从堡垒北侧的小门钻出来，沿着一条陡然下降的、被紫红色九重葛淹没了头顶的狭窄砖石台阶，仿佛穿越一条时光隧道，瞬间跌入红砖老城静谧的怀抱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在老城中心那个有着阿拉伯式八角形水池的“中央庭院”边坐下，观察当地老人如何不紧不慢地打水、浇花、和邻居隔着阳台聊天，生活的声音轻柔地盖过了海风的咆哮。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随便选一条岔路迷失在巷弄里，用鼻子寻找线索——哪条巷子飘出新鲜烤杏仁的焦糖香，哪扇虚掩的门后传来弗拉门戈吉他练习曲的片段，就朝着那里去。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到那个被誉为“隐藏宝石”的“柑橘庭院”，它不在通票地图上，需要向旅游中心的工作人员礼貌询问今日是否开放，那里有一棵覆盖了整个天井的百年橙树，香气醉人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前半小时，买一份裹着海盐的烤栗子，回到西侧那段保存最完好的古城墙上，找块石头坐下，看着太阳像一颗巨大的熔金火球，缓缓沉入墨水般的海平线，结束完美的一天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`堡垒东侧悬崖仰角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨七点到八点之间，太阳从侧后方照亮堡垒的石壁，站在下方步道用广角镜头仰拍，能将堡垒的雄伟与悬崖的险峻一同收纳，构图时带入一角怒放的野花或一丛多肉植物作为前景，增加生机感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`红砖迷宫制高点`}</h4>
                  <p className="text-sm text-gray-700">{`位于老城西北角一个废弃的旧磨坊屋顶平台（对公众开放），下午四点后的侧光最适合，可以拍下连绵起伏的赤陶瓦屋顶如波浪般涌向灰色堡垒的经典画面，使用长焦镜头压缩空间感，效果更震撼。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`中央庭院拱门框架`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，庭院内部反而光线均匀，站在入口拱门向内拍摄，以拱门为画框，将中心水池、周围廊柱和墙上悬挂的彩陶盘一同构成一幅充满几何美感和生活气息的静物画。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`柑橘庭院的仰望视角`}</h4>
                  <p className="text-sm text-gray-700">{`若幸运进入，躺（或大幅仰拍）在庭院地面的葡萄牙蓝瓷砖上，向上拍摄被金色果实和墨绿枝叶填满的方形天空，这是一种极度沉浸式的、充满喜悦感的构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`西侧城墙日落剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后二十分钟，以城墙垛口为前景框架，拍摄人物或孤独的灯塔剪影 against 燃烧的天空和深蓝的海面，这是情感张力最强的时刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`海边紫外线强且多水汽，建议为镜头配备UV镜和偏振镜（CPL），能有效提升色彩饱和度和消除反光。拍摄当地居民和他们的庭院前，请务必先微笑并做出询问手势，获得明确同意后再举起相机，这里不是动物园，尊重隐私是底线。黄金时刻（日出后日落前一小时内）的光线在这里魔法般短暂，提前踩点并设置好相机参数，才能抓住转瞬即逝的完美光影。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`“老城墙之家”客栈，由一对老夫妇经营，就在红砖老城入口的第一条巷子里，房间简单干净，早餐是老太太自制的橙子果酱和蛋挞，晚上能听到海浪催眠的白噪音，价格亲民得像住在亲戚家。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`“灯塔守望者”石屋民宿，位于堡垒区内一栋经过现代化改造的古老石屋，拥有一个私密的面向大海的露台，夜晚可以独享整片星空与灯塔旋转的光束，体验真正“世界尽头”的寂静与浪漫。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`“圣维森特庄园酒店”，坐落在老城后方能俯瞰全景的山丘上，由一座17世纪庄园改建，房间宽敞奢华，拥有一个无边泳池仿佛与远处的大西洋相连，并提供用当地食材烹制的米其林推荐 tasting menu。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特隐居`}</h4>
                  <p className="text-sm text-purple-800">{`“隐修院回廊”设计师公寓，位于老城中心一个极其隐秘的、由小型修道院回廊改造的建筑内，仅有三间公寓，保留了原始的拱廊和庭院，内部是极简现代风格，适合寻求绝对静谧与空间美学的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6月至9月）和九月庭院节期间住宿非常紧张，价格可能翻倍，务必提前至少两个月预订。老城内的住宿多为历史建筑，楼梯陡峭且可能没有电梯，拖大件行李箱会非常困难，建议轻装或用背包。住在堡垒区或老城内，夜晚极为安静，只有风声和海浪声，喜欢热闹夜生活的人可能会觉得过于沉寂，但这正是此地疗愈价值的一部分。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开圣维森特很多天后，我的脑海里依然会交替回放两个画面：一个是站在悬崖边，衣角被狂风扯得笔直，脚下百米处海浪炸成一片碎银的震撼；另一个是蹲在红砖庭院里，看一只蜜蜂慢悠悠钻进一朵天竺葵花心的宁静。这个地方最深的触动，或许就在于它把这两种截然相反的生命状态，如此真实、如此紧密地缝合在了一起。它没有试图去美化任何一种，既不对抗自然的严酷，也不放弃生活的精致。它告诉你，勇气与温柔从来不是单选题，瞭望深渊与打理庭院可以是同一个人、同一个社区日常的AB面。在当今这个常常非此即彼、追求单一标签的快节奏世界里，圣维森特像一位沉默的智者，展示着一种更完整、更坚韧的存在哲学——真正的力量，或许正是既能经得起悬崖上的风吹雨打，也能在自家一方小小的泥土里，种出整个春天的芬芳。所以，如果你厌倦了那些被精心包装、只有单一维度的景点，如果你渴望一场能同时冲刷感官与沉淀心灵的旅行，请一定要来这片陆地的尽头看看。它不是最华丽的，但一定是最诚恳的；它不是最便利的，但每一步跋涉都能换来加倍的感悟。在这里，你会找到旅行的初心：不是收集打卡，而是去见证，人类文明在自然的画布上，所能描绘出的最复杂、最动人、也最充满希望的那一笔。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/coimbra-university-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/convento-dos-capuchos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卡普舒斯修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convento dos Capuchos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viseu" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu</p>
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
