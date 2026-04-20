import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '贝伦塔 Belém Tower｜大航海时代的起航哨兵与曼努埃尔艺术的石造诗篇 - 最佳欧洲景点',
  description: '海风，永远是这里的第一位向导。还没看到塔身，咸湿的、带着自由气息的风就先扑面而来，混合着特茹河河水的味道。然后，它就在那里了——贝伦塔，洁白如玉，不像一个威严的防御工事，倒更像一个从童话里走出来的、略显任性的王子宫殿，优雅地立在河水与陆地的交界线上。午后的阳光打在石灰岩上，反射出温暖的金色光泽，那些...',
}

export default function BelemTowerLisbonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '贝伦塔', href: '/attractions/belem-tower-lisbon' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝伦塔・Belém Tower・葡萄牙・里斯本`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`海风，永远是这里的第一位向导。还没看到塔身，咸湿的、带着自由气息的风就先扑面而来，混合着特茹河河水的味道。然后，它就在那里了——贝伦塔，洁白如玉，不像一个威严的防御工事，倒更像一个从童话里走出来的、略显任性的王子宫殿，优雅地立在河水与陆地的交界线上。午后的阳光打在石灰岩上，反射出温暖的金色光泽，那些绳索、盾牌、浑天仪形状的石雕，在强光下呈现出戏剧性的阴影，仿佛在无声地流动。
走近了，你会听到河水轻轻拍打基石的声音，哗啦，哗啦，节奏永恒。海鸥在塔顶的露台盘旋，发出尖锐的鸣叫。如果时机正好，一艘巨大的红色货轮正缓缓从塔前驶过，驶向广阔的大西洋，这古今交汇的一幕充满了超现实感。你会发现塔的底座部分浸在水中，当初它是建在一个河中央的小岛上的，如今通过堤道与陆地相连。想象一下五百年前，涨潮时它便是一座孤悬的堡垒，守卫着里斯本的咽喉要道，那份孤傲与紧要，至今仍能体会。
但贝伦塔最迷人的，是它那种“矛盾的和谐”。它本是用于战争——厚实的墙体、垛口、曾经架设火炮的露台，都诉说着它的防御本职。然而，建筑师却用尽一切浪漫手法来装扮它。那些精致缠绕的石绳、栩栩如生的海兽（比如著名的犀牛雕像，那是国王收到的珍贵礼物）、雕刻着基督骑士团十字的盾牌……它们不是冰冷的军事符号，而是对探险、发现、财富和神佑的热情讴歌。它是一首用石头写成的、献给海洋的颂歌，锋利与柔美，力量与幻想，在这里达成了不可思议的平衡。
最深刻的体验，可能是沿着狭窄的螺旋石梯，手脚并用地爬上塔顶。楼梯仅供一人通过，石阶被几个世纪的足迹磨得中心凹陷、光亮照人。当你气喘吁吁地登上顶层露台，视野豁然开朗。一边是现代化的4月25日大桥与对岸的基督像，另一边是无垠的、闪闪发光的大西洋。风大到几乎站不稳，但你的心却异常平静。在这里，你瞬间理解了“起点”的含义。瓦斯科·达·伽马、佩德罗·阿尔瓦雷斯·卡布拉尔……那些改变世界地理认知的船队，正是从这片水域出发。这座塔，是他们告别故土的最后坐标，也是承载着无数梦想与恐惧的望乡之眼。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`海风，永远是这里的第一位向导。还没看到塔身，咸湿的、带着自由气息的风就先扑面而来，混合着特茹河河水的味道。然后，它就在那里了——贝伦塔，洁白如玉，不像一个威严的防御工事，倒更像一个从童话里走出来的、略显任性的王子宫殿，优雅地立在河水与陆地的交界线上。午后的阳光打在石灰岩上，反射出温暖的金色光泽，那些绳索、盾牌、浑天仪形状的石雕，在强光下呈现出戏剧性的阴影，仿佛在无声地流动。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会听到河水轻轻拍打基石的声音，哗啦，哗啦，节奏永恒。海鸥在塔顶的露台盘旋，发出尖锐的鸣叫。如果时机正好，一艘巨大的红色货轮正缓缓从塔前驶过，驶向广阔的大西洋，这古今交汇的一幕充满了超现实感。你会发现塔的底座部分浸在水中，当初它是建在一个河中央的小岛上的，如今通过堤道与陆地相连。想象一下五百年前，涨潮时它便是一座孤悬的堡垒，守卫着里斯本的咽喉要道，那份孤傲与紧要，至今仍能体会。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但贝伦塔最迷人的，是它那种“矛盾的和谐”。它本是用于战争——厚实的墙体、垛口、曾经架设火炮的露台，都诉说着它的防御本职。然而，建筑师却用尽一切浪漫手法来装扮它。那些精致缠绕的石绳、栩栩如生的海兽（比如著名的犀牛雕像，那是国王收到的珍贵礼物）、雕刻着基督骑士团十字的盾牌……它们不是冰冷的军事符号，而是对探险、发现、财富和神佑的热情讴歌。它是一首用石头写成的、献给海洋的颂歌，锋利与柔美，力量与幻想，在这里达成了不可思议的平衡。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最深刻的体验，可能是沿着狭窄的螺旋石梯，手脚并用地爬上塔顶。楼梯仅供一人通过，石阶被几个世纪的足迹磨得中心凹陷、光亮照人。当你气喘吁吁地登上顶层露台，视野豁然开朗。一边是现代化的4月25日大桥与对岸的基督像，另一边是无垠的、闪闪发光的大西洋。风大到几乎站不稳，但你的心却异常平静。在这里，你瞬间理解了“起点”的含义。瓦斯科·达·伽马、佩德罗·阿尔瓦雷斯·卡布拉尔……那些改变世界地理认知的船队，正是从这片水域出发。这座塔，是他们告别故土的最后坐标，也是承载着无数梦想与恐惧的望乡之眼。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝伦塔`} />
                <InfoRow label="英文名称" value={`Belém Tower`} />
                <InfoRow label="正式名称" value={`Tower of Saint Vincent`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`里斯本`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`始建于大航海时代黄金时期，既是守护里斯本门户的关键防御工事，也是无数探险家扬帆远航前看到的祖国最后一瞥，是葡萄牙海洋霸权的象征性起点。`} />
                <InfoRow label="建筑特色" value={`一座精致的、充满奇幻雕刻的白色石灰岩塔楼，巧妙地将中世纪碉楼的防御功能与文艺复兴时期的奢华装饰结合，宛如一艘停泊在岸边的石制航船。`} />
                <InfoRow label="建筑风格" value={`曼努埃尔式建筑的杰出典范，融合了哥特式结构、文艺复兴细节、以及大量来自航海元素的异国情调装饰。`} />
                <InfoRow label="文化价值" value={`它超越了单纯的军事建筑，是葡萄牙民族灵魂的化身，将国家的雄心、对海洋的征服、以及对未知世界的浪漫想象，全部凝固在石头之上。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（5月至9月）：周二至周日 10:00 - 18:30，最后入场18:00。冬季（10月至4月）：周二至周日 10:00 - 17:30，最后入场17:00。每周一、1月1日、复活节周日、5月1日、6月13日（里斯本节）、12月25日闭馆。注意：塔楼内部空间狭小，为控制人流，有时需在门口领取定时入场券排队等候。`} />
              <InfoRow label="门票价格" value={`普通票：8欧元。与不远处的热罗尼莫斯修道院联票为12欧元（非常推荐）。优惠票：4欧元（适用于65岁以上长者、15-25岁青年，需证件）。14岁以下儿童免费。每月第一个周日全天免费。`} />
              <InfoRow label="地址" value={`Av. Brasília, 1400-038 Lisboa, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本市中心出发最方便。在“Cais do Sodré”火车站或地铁站，乘坐开往“Cascais”方向的城际列车（约每20分钟一班），在“Belém”站下车，车程约8分钟。出站后沿主干道向河岸方向步行约10分钟即可抵达。也可乘坐15路或127路电车（经典的黄色电车），在“Belém”站下车，体验更复古。自驾车附近有收费停车场，但旺季车位紧张。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`时间回到15世纪末16世纪初。那是葡萄牙的巅峰时代，在恩里克王子开创的航海事业基础上，迪亚士绕过了好望角，达·伽马发现了通往印度的海路，来自东方的香料、丝绸和黄金如潮水般涌入里斯本。国王曼努埃尔一世沉浸在“幸运儿”的喜悦与财富中，他决定用艺术和建筑来歌颂这个属于葡萄牙的海洋纪元。于是，一种前所未有的建筑风格——“曼努埃尔式”应运而生。它极尽繁复、夸张，将船缆、锚链、珊瑚、海藻、异国动物等一切与航海相关的元素，都变成了建筑上的装饰语言。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`贝伦塔就是这个时代雄心最具体的产物。1514年，曼努埃尔一世下令在特茹河北岸、里斯本港口入口处的一个玄武岩小岛上，建造一座既能防御外敌（主要防范西班牙和海盗），又能彰显国威的塔楼。他委任的首席建筑师是弗朗西斯科·德·阿鲁达，一位曾驻守摩洛哥军事要塞、深谙防御工事设计的专家。然而，国王想要的不仅仅是一座堡垒。于是，另一位天才雕塑家迪奥戈·德·博伊塔卡（也是热罗尼莫斯修道院的主设计者）加入了团队，负责装饰部分。这就解释了贝伦塔为何如此独特：阿鲁达给了它坚实的内核和完美的比例（一个矩形主塔与一个多边形堡垒基座结合），而博伊塔卡则为它披上了那层如梦似幻的曼努埃尔式外衣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建造过程长达数年，直到1520年才竣工。塔楼很快成为里斯本最耀眼的地标。它不仅装备了重型火炮，底层甚至还设有地牢，用于关押囚犯。但它的主要功能，是作为海岸防御体系的一环和海关检查站。所有进出里斯本的商船，都要在此接受检查、缴纳关税。可以想象，当年那些满载香料归来的船只，水手们远远望见这座洁白的、装饰奇异的塔楼时，心中涌起的必定是自豪、思念与终于到家的复杂情绪。它是一道国门，更是一个强大的心理标志。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，历史的浪潮起伏不定。1580年，葡萄牙王位继承危机导致西班牙哈布斯堡王朝的腓力二世吞并葡萄牙，贝伦塔曾一度被西班牙军队控制。1755年，那场摧毁里斯本大部分城市的大地震，奇迹般地只对贝伦塔造成了轻微损坏，使其屹立不倒，更增添了其传奇色彩。随着航海时代的落幕和军事技术的变革，贝伦塔的防御价值逐渐丧失。它曾被用作电报站、灯塔，甚至疫情期间的隔离检疫站。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`直到20世纪，人们才重新认识到它无与伦比的文化意义。经过精心修复，它于1983年与热罗尼莫斯修道院一起被联合国教科文组织列为世界遗产。今天，它不再威慑敌人，而是温柔地迎接世界各地的游客，继续讲述着那个关于勇气、探索与海洋梦想的永恒故事。它的基石，早已从玄武岩小岛，深深地扎入了整个葡萄牙的民族记忆之中。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览贝伦塔的关键在于“结合”与“时机”。强烈建议将它和步行10分钟即可到达的热罗尼莫斯修道院安排在同一天，购买联票节省费用与时间。拜访贝伦塔的最佳时间是下午，此时光线从西面照射塔身，非常适合外部摄影，且游览完内部后，可以在附近等待一场特茹河畔的绝美日落。整体游览需预留1.5至2小时，其中外部观赏和拍照约30分钟，内部参观（包括排队登塔）约1小时。内部空间狭小陡峭，游览节奏必然较慢，请保持耐心，将排队时间也视为感受河畔氛围的一部分。遵循由外到内、由下至上的顺序，充分理解其作为防御体系的结构巧思。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`塔内螺旋楼梯极其狭窄陡峭，且是上下唯一通道，有幽闭恐惧症或行动不便的游客需慎重考虑登顶。内部参观有人数限制，旺季（夏季）排队时间可能长达一小时以上，建议尽早到场或购买里斯本卡预约时段。河畔风大，即使在夏季，也建议带一件防风外套，尤其是在塔顶露台。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从热罗尼莫斯修道院方向沿河漫步而来，第一眼从侧面和远处欣赏贝伦塔与特茹河、4月25日大桥构成的经典全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走近塔楼，先不要急于进入，而是环绕基座一周，仔细观察那些精美的曼努埃尔式石雕，特别是面向陆地的立面，找到那只著名的犀牛雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过堤道走向入口，仰望塔身与古老的垛口，想象当年火炮从这些窗口伸出的森严景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`进入多边形堡垒的底层，这里曾是弹药库和后来关押囚犯的地牢，感受空间本身的厚重与阴凉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`开始攀登狭窄的螺旋石梯，在昏暗的光线中触摸被岁月打磨得无比光滑的石壁，体验数百年来士兵与水手上上下下的感觉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`抵达国王大厅，欣赏美丽的文艺复兴式拱顶和壁炉，然后继续上行至小礼拜堂，这里曾有牧师为即将远航的水手做弥撒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终登上顶层露台，让大西洋的风尽情吹拂，360度环视里斯本河岸风光，这是整个游览的最高潮。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下塔后，在河堤边的长椅上坐下，点一杯“贝伦蛋挞”店的外带咖啡，静静地看着这座白塔从金色夕阳逐渐变为蓝调时刻的剪影。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河畔东南侧长焦全景`}</h4>
                  <p className="text-sm text-gray-700">{`站在塔楼东南方向的河畔步道上，用长焦镜头压缩空间，将洁白的贝伦塔与后方红色的4月25日大桥及对岸的基督像同框，构成葡萄牙历史的经典叠映。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`低角度仰拍防御平台`}</h4>
                  <p className="text-sm text-gray-700">{`在塔楼基座下方，贴近地面向上仰拍多边形堡垒的墙面和上方的矩形塔身，利用广角镜头夸张其雄伟感，并将天空纳入构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`特写曼努埃尔式装饰`}</h4>
                  <p className="text-sm text-gray-700">{`下午的阳光能凸显石雕的立体感，靠近拍摄绳索纹、浑天仪或犀牛雕刻的特写，聚焦于石材的质感和工匠惊人的细节处理。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`顶层露台框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`登上露台后，利用垛口或拱门作为天然画框，拍摄框外特茹河上往来的船只或对岸的风景，增加画面的层次感和故事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`蓝调时刻与灯光`}</h4>
                  <p className="text-sm text-gray-700">{`日落后天空呈深蓝色、但塔楼景观灯刚亮起的“蓝调时刻”，在河对岸或堤道上拍摄，塔身洁白温暖，背景深邃宁静，色彩对比极为迷人。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`塔楼内部光线非常昏暗，且禁止使用三脚架（空间也不允许），建议使用高感光度性能好的相机或手机夜景模式。拍摄附近纪念碑（如地理大发现纪念碑）上的历史人物雕像时，请保持庄重。无人机飞行在里斯本河岸区域有严格管制，特别是在机场航线附近，飞行前务必查清法规。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景阳台享受`}</h4>
                  <p className="text-sm text-blue-800">{`选择贝伦区面朝特茹河的高层公寓或设计酒店，在私人阳台上就能同时欣赏贝伦塔与4月25日大桥，早晚光线不同，景致变幻无穷。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史街区沉浸`}</h4>
                  <p className="text-sm text-green-800">{`入住贝伦区中心由老房子改造的精品客栈，周围遍布传统糕点店、老式酒馆和海事博物馆，出门散步即可感受本地社区生活，晚上格外安静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`都市便利之选`}</h4>
                  <p className="text-sm text-yellow-800">{`住在里斯本市中心“上城”或“奇亚多”区域，搭乘便利的电车或火车轻松往返贝伦，晚上则可享受市中心丰富的餐饮和夜生活，行程安排更灵活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特庄园体验`}</h4>
                  <p className="text-sm text-purple-800">{`位于里斯本西郊辛特拉-卡斯凯什自然公园边缘的复古庄园酒店，远离喧嚣，适合自驾者，可将贝伦塔、热罗尼莫斯修道院与西海岸壮丽的海滩风光结合游览。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`贝伦区相比里斯本市中心，夜晚更安静，餐饮选择相对较少但更本地化，著名的“贝伦蛋挞”店就在附近。该区治安良好，沿河散步非常惬意。如果计划深度游览贝伦的多个博物馆和纪念碑，住在此区可以节省大量交通时间。旺季时，拥有直接河景的住宿价格不菲且很快订满，需提前规划。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开贝伦塔时，我的手里仿佛不是空的，而是攥了一把大西洋的风，和一丝来自五百年前的、混合着渴望与乡愁的复杂心绪。它不像许多古迹那样只关乎过去，它清晰地指向一个方向——海洋，以及海洋所代表的无限可能与未知。站在那个小小的露台上，你几乎能听见历史在耳边呼啸：那是帆索的吱呀，是船长的号令，是启航前混杂着祈祷与欢呼的喧哗。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在今天这个地图上已没有空白区域、一切皆可谷歌地球一键抵达的时代，贝伦塔提醒着我们一种近乎原始的人类冲动：对地平线之外的好奇，以及为此甘冒一切风险的勇气。它既是坚固的堡垒，守护着已知世界的边界；又是精致的艺术品，放飞着超越边界的想象。这种二元性，正是葡萄牙黄金时代精神的精髓，或许也是所有伟大探索的共性：极致的务实与极致的浪漫，必须同时存在。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，来这里不仅仅是为了看一座漂亮的塔。是为了站在那个历史的“原点”，感受一种启动世界的能量。是为了明白，每一个伟大的时代，都需要一个像贝伦塔这样的实体，它将国家的梦想具象化，成为一代人共同仰望的灯塔。无论你的旅程从何处开始，在贝伦塔的河风中，你都能找回一点出发时的初心，那份对于广阔世界最纯粹、最动人的向往。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/convent-of-christ-tomar" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    托
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">托马尔骑士团修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Convent of Christ</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bom-jesus-do-monte-braga" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    布
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">布拉加仁慈耶稣朝圣所</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bom Jesus do Monte</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/evora-bone-chapel-historic-centre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃武拉人骨教堂与古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Evora Bone Chapel and Old Town</p>
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
