import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '比尔拉 Burlats｜探秘阿古河畔的千年诗篇，沉醉在12世纪凉亭的光影里 - 最佳欧洲景点',
  description: '车子拐下主路，沿着阿古河行驶不久，比尔拉就像一首被遗忘在时光褶皱里的古老歌谣，缓缓地在你眼前展开。第一眼看见的，永远是那座横跨在翠绿色河水上的古老石桥，和后面层层叠叠、依山而建的赭石色屋顶。把车停在河边，推开车门的那一刻，世界突然安静了，只剩下潺潺的水声、风吹过梧桐树叶的沙沙声，还有远处不知谁家窗台',
}

export default function BurlatsOccitaniePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '阿古河畔比尔拉', href: '/destinations/france' },
            { label: '比尔拉', href: '/attractions/burlats-occitanie' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`比尔拉・Burlats・法国・阿古河畔比尔拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下主路，沿着阿古河行驶不久，比尔拉就像一首被遗忘在时光褶皱里的古老歌谣，缓缓地在你眼前展开。第一眼看见的，永远是那座横跨在翠绿色河水上的古老石桥，和后面层层叠叠、依山而建的赭石色屋顶。把车停在河边，推开车门的那一刻，世界突然安静了，只剩下潺潺的水声、风吹过梧桐树叶的沙沙声，还有远处不知谁家窗台飘来的咖啡香。空气里有河水的湿润气息，混合着古老石头房子在阳光下散发出的、那种被岁月烘烤过的温暖味道。这里没有景点的喧嚣，只有当地人提着长棍面包不紧不慢走过的身影，仿佛你闯入的不是一个旅游地，而是一个依然活着的、呼吸着的千年旧梦。
顺着唯一的主路向上走，脚下的石板被几个世纪的脚步打磨得光滑如镜，在午后的阳光下泛着温润的光泽。路窄得只容两人并肩，两侧是动辄有四五百年历史的石头房子，木筋墙的纹理清晰可见，有些窗台上怒放着天竺葵，鲜艳的红色和朴素的石灰色撞在一起，有种倔强又生动的美。你能感觉到，生活在这里并没有被供奉起来，它依然在继续——面包店传来的黄油香，小广场上老人们玩着滚球游戏的清脆撞击声，都让这座“博物馆”充满了鲜活的血肉。
而当你转过一个弯，那座传说中的阿德莱德凉亭毫无征兆地出现在一堵高墙之后时，时间真的仿佛凝固了。它不是一座恢弘的大教堂，而是一座精巧、优雅得令人屏息的两层小楼。蜂蜜色的石材在阳光下呈现出奶油般的光泽，二楼那排纤细的双联柱拱廊，优雅地支撑起倾斜的屋顶，每一个拱券都像是一个完美的微笑。那一刻你忽然明白了，为什么行吟诗人会聚集于此。这种美不是征服性的，而是邀请性的，它邀请你驻足，邀请你凝视，邀请你在它的光影里，做一场关于骑士、淑女与诗歌的梦。这就是比尔拉最核心的魅力：它把中世纪一个关于“精致生活”和“精神之爱”的理想，如此完整、如此私密地保存了下来，等待着懂它的人来轻轻叩响。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子拐下主路，沿着阿古河行驶不久，比尔拉就像一首被遗忘在时光褶皱里的古老歌谣，缓缓地在你眼前展开。第一眼看见的，永远是那座横跨在翠绿色河水上的古老石桥，和后面层层叠叠、依山而建的赭石色屋顶。把车停在河边，推开车门的那一刻，世界突然安静了，只剩下潺潺的水声、风吹过梧桐树叶的沙沙声，还有远处不知谁家窗台飘来的咖啡香。空气里有河水的湿润气息，混合着古老石头房子在阳光下散发出的、那种被岁月烘烤过的温暖味道。这里没有景点的喧嚣，只有当地人提着长棍面包不紧不慢走过的身影，仿佛你闯入的不是一个旅游地，而是一个依然活着的、呼吸着的千年旧梦。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "顺着唯一的主路向上走，脚下的石板被几个世纪的脚步打磨得光滑如镜，在午后的阳光下泛着温润的光泽。路窄得只容两人并肩，两侧是动辄有四五百年历史的石头房子，木筋墙的纹理清晰可见，有些窗台上怒放着天竺葵，鲜艳的红色和朴素的石灰色撞在一起，有种倔强又生动的美。你能感觉到，生活在这里并没有被供奉起来，它依然在继续——面包店传来的黄油香，小广场上老人们玩着滚球游戏的清脆撞击声，都让这座“博物馆”充满了鲜活的血肉。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而当你转过一个弯，那座传说中的阿德莱德凉亭毫无征兆地出现在一堵高墙之后时，时间真的仿佛凝固了。它不是一座恢弘的大教堂，而是一座精巧、优雅得令人屏息的两层小楼。蜂蜜色的石材在阳光下呈现出奶油般的光泽，二楼那排纤细的双联柱拱廊，优雅地支撑起倾斜的屋顶，每一个拱券都像是一个完美的微笑。那一刻你忽然明白了，为什么行吟诗人会聚集于此。这种美不是征服性的，而是邀请性的，它邀请你驻足，邀请你凝视，邀请你在它的光影里，做一场关于骑士、淑女与诗歌的梦。这就是比尔拉最核心的魅力：它把中世纪一个关于“精致生活”和“精神之爱”的理想，如此完整、如此私密地保存了下来，等待着懂它的人来轻轻叩响。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`比尔拉`} />
                <InfoRow label="英文名称" value={`Burlats`} />
                <InfoRow label="正式名称" value={`Burlats`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`阿古河畔比尔拉`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`中世纪奥克西坦尼亚行吟诗人文化与宫廷爱情的重要中心，被誉为“玫瑰与诗歌之城”。`} />
                <InfoRow label="建筑特色" value={`完美保存了中世纪山城肌理，其瑰宝是欧洲罕见、保存极其完好的12世纪罗曼式世俗建筑——阿德莱德凉亭。`} />
                <InfoRow label="建筑风格" value={`以厚重的罗曼风格为基石，部分建筑细节已透露出早期哥特式的轻盈渴望。`} />
                <InfoRow label="文化价值" value={`是理解法国南部奥克语文化、行吟诗人传统以及中世纪世俗生活与艺术交融的活化石。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。阿德莱德凉亭（Adelaide's Pavilion）及部分历史建筑内部参观通常依赖于当地旅游局组织的导览团，一般在每年4月至10月的周二、周四和周六下午开放（具体为14:00-17:00），冬季开放时间大幅缩短或仅接受预约。强烈建议出行前访问塔恩省旅游局官网核实最新安排，并留意法国法定节假日可能闭馆。`} />
              <InfoRow label="门票价格" value={`进入比尔拉小镇本身免费。参观阿德莱德凉亭及参加导览游通常收取少量费用，约5-8欧元（含解说），学生及10岁以下儿童享有优惠。部分季节性文化活动或音乐会需单独购票。`} />
              <InfoRow label="地址" value={`Place de la Mairie, 81100 Burlats, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是图卢兹-布拉尼亚克机场（TLS）。从机场租车自驾是最佳选择，沿A68和D612公路向东北方向行驶，约1小时15分钟可达比尔拉，沿途是优美的法国田园风光。若依赖公共交通：先从机场乘摆渡车到图卢兹马塔比奥火车站，换乘区域火车（TER）至阿尔比城站（约1小时车程，班次频繁），再从阿尔比城火车站前乘坐前往卡斯泰尔诺达里的巴士，在“Burlats - Centre”站下车（巴士班次较少，每天约3-4班，车程约30分钟，务必提前在阿尔比城旅游局索取时刻表）。小镇内部全靠步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲比尔拉的故事，就离不开两个词：“奥克西坦尼亚”和“行吟诗人”。在11-13世纪，法国南部这片阳光灿烂、语言（奥克语）与文化自成一体土地，发展出了与北方截然不同的、更为自由和优雅的宫廷文化。而比尔拉，正是这片文化星图上最璀璨的星辰之一。这里最早是维斯哥特人的据点，但真正让它名垂青史的，是它成为了特朗卡维尔家族——这位阿比尔派十字军战争前后朗格多克地区最有权势的领主之一——的夏季行宫所在地。想象一下，当图卢兹或卡尔卡松的城堡里充满政治筹谋时，特朗卡维尔家族的贵胄们便来到风景如画的比尔拉，享受阿古河畔的清凉，而跟随他们而来的，是那些才华横溢的行吟诗人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "行吟诗人可不是简单的游唱歌手。他们是诗人、作曲家、音乐家，更是宫廷礼仪、骑士精神与“典雅爱情”哲学的阐释者与传播者。他们用优美的奥克语歌唱着对领主夫人的、一种高度仪式化和精神化的爱慕（通常这位夫人是高贵而不可企及的），这种爱情被视为骑士最高尚的美德与精神升华的动力。而比尔拉，以其与世无争的优美环境，成为了举行这种诗歌比赛、音乐晚会和哲学沙龙的完美舞台。凉亭下，河岸边，到处回荡着维埃尔琴（中世纪的弦乐器）的乐声和吟诵诗歌的悦耳嗓音。阿德莱德凉亭，据说就是以一位特朗卡维尔家族的女领主阿德莱德命名的，它很可能就是这些高雅文化活动的中心舞台，是诗歌与音乐萦绕的“爱情法庭”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的骤雨很快袭来。13世纪初，教皇英诺森三世为了铲除被视为异端的卡特里派（又称阿比尔派），发动了长达二十年的阿尔比十字军战争。北方的法兰西骑士铁蹄南下，不仅摧毁了卡特里派的堡垒，也永久地改变了南法的文化生态。特朗卡维尔家族最终屈服，南法的独立性与奥克语文化遭受重创。比尔拉虽然幸运地未在战火中被彻底摧毁，但其作为文化中心的黄金时代也随之落幕。行吟诗人的歌声渐渐飘散，凉亭在随后几个世纪里被用作仓库、民居，甚至监狱，昔日的优雅被尘埃覆盖。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到19世纪，浪漫主义的风潮重新唤起了人们对中世纪遗产的兴趣。一批历史学家和文物工作者像寻宝一样重新发现了比尔拉，尤其是阿德莱德凉亭那被掩盖的惊人价值。经过精心的考证与修复，这座几乎被遗忘的宝石终于被从时间的废墟中打捞出来，重新绽放出12世纪罗曼艺术的光彩。它不再有诗歌绕梁，但每一块石头都仿佛还在诉说着那个崇尚美、爱情与精神的遥远时代的秘密。今天，当我们站在凉亭前，我们不仅是在看一座建筑，更是在聆听一段几乎被宏大叙事淹没的、关于南方精神的低声吟唱。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午10点左右抵达比尔拉，此时阳光正好洒满阿古河面，晨雾散去，小镇刚刚苏醒，游人稀少。整体游览时间可安排3-4小时，节奏务必放慢，因为比尔拉的魅力在于“沉浸”而非“打卡”。路线设计为一条环线：从河畔开始，逐步深入小镇心脏，探访核心古迹，最后登高望远，再悠闲地回到起点。这样的安排能让你由远及近、由表及里地感受小镇的空间层次和历史脉搏，并在体力消耗最大的爬坡段放在中间，最后以轻松的俯瞰和下行结束，体验完美。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇部分坡道和石板路较陡且光滑，建议穿一双绝对舒适防滑的步行鞋。导览游是理解凉亭历史深度的唯一途径，如果时间吻合强烈建议参加，否则只能欣赏其外部。小镇几乎没有商业化的餐厅，午餐可选择面包店的三明治野餐，或驱车10分钟前往更大的拉巴斯蒂德镇用餐。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在免费的河边停车场，先别急着进镇，在古老的圣彼得桥上停留片刻，看阿古河的碧水如何温柔地环抱着小镇的倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着“共和街”那被岁月打磨得发亮的石板主路缓缓上行，任由两侧中世纪木筋墙房屋的阴影和面包店飘出的香味引领你的脚步。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在街角的小广场“Place de la Fontaine”停下来，看看那座古老的石砌喷泉，并在这里的旅游信息牌前确认一下阿德莱德凉亭当日是否开放内部参观。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必找到并花至少半小时沉浸在那座精致绝伦的12世纪罗曼式阿德莱德凉亭下，绕着它走一圈，从不同角度欣赏那优雅的双层拱廊和石雕细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从凉亭后面的小径继续向上，穿过更加宁静、住家气息浓厚的居民区，朝着小镇最高处的城堡遗迹和观景台进发。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在曾经的城堡地基上，眼前豁然开朗，将整个比尔拉的红屋顶、远处的阿古河谷和绵延的森林尽收眼底，这是最好的全景拍照时刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着另一条安静的下坡小路返回镇中心，途中可能会邂逅隐蔽的古老石阶和爬满藤蔓的院墙，享受一段无人打扰的探索时光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，回到河畔，在河边的草地上坐一坐，或者找一家能看到桥景的咖啡馆，点一杯“咖啡馆雷”或当地桃红葡萄酒，为这场中世纪漫步画上悠闲的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`阿古河对岸的野餐区侧拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，从河对岸的小径上可以拍摄到古老的石桥、临河房屋与水中倒影构成的完整画面，镜头焦距拉长能压缩出梦幻的层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`阿德莱德凉亭拱廊特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十一点左右，阳光能恰好斜射入凉亭二层的拱廊，站在地面仰拍，可以捕捉到光线在精雕细琢的柱头石雕上跳跃的生动细节，构图时带入一部分爬满墙壁的常春藤更添意境。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`小镇至高点全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时抵达城堡观景台，温暖的夕阳会将所有赭石色屋顶染成金色，使用广角镜头将前景的城堡残垣、中景的密集屋瓦与远景的河谷森林一同收纳，充满故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`石板街巷的纵深感`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚游人稀少时，选择一条有弧度的上坡石板路，利用道路的自然延伸线构图，焦点对准远处的一扇彩色的门或一盏老式街灯，能拍出极具代入感、仿佛穿越时空的巷弄照片。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民和他们的私人住宅时请务必保持尊重，最好先微笑示意或直接避免。小镇的猫咪很多且不怕人，是绝佳的灵动前景，但请勿用闪光灯惊吓它们。无人机飞行在法国历史遗迹上空有严格限制，在比尔拉这样的保护区内基本禁止，请勿使用。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于阿古河畔的“磨坊之家”民宿，由一座古老水磨坊改建，房间窗户正对圣彼得桥，夜晚在潺潺水声中入眠，早晨主人会奉上自家果园的果酱和热腾腾的可颂。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中世纪沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`镇中心一栋15世纪石屋内的“行吟诗人之家”公寓，保留了原始的砖石墙壁和木梁，配备现代化厨房，让你像当地人一样生活在历史的心脏里，晚上可以独享寂静无人的小镇街道。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`庄园奢华度假`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车约8分钟，在周边葡萄园环绕的丘陵上，“拉科斯特庄园”酒店提供五星级服务，房间拥有私人露台可俯瞰整个塔恩河谷，酒店的米其林推荐餐厅能将本地食材烹制成艺术，是探索后极致的放松。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`阿尔比城便捷据点`}</h4>
                  <p className="text-sm text-purple-800">{`如果不满足于小镇的寂静，可以住在15分钟车程外的世界文化遗产之城阿尔比，从设计酒店到百年老宅选择丰富，夜生活和文化活动更多样，方便以阿尔比为基地辐射探索整个区域。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "比尔拉镇内住宿非常有限且抢手，尤其是旅游旺季，务必提前数月预订。选择住在这里意味着享受极致宁静，但晚上七点后几乎所有商铺餐馆都会关门，请提前备好所需。周边乡村治安极好，但夜间照明不足，散步建议携带小手电。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开比尔拉时，我的背包里没有多一件纪念品，但心里却好像被什么东西填满了。那不是一种看过奇观后的激动，而是一种被温柔浸润过的平静。在这个一切追求效率、规模和尖叫值的时代，比尔拉固执地守护着另一种价值：小尺度的美好，含蓄内敛的优雅，以及精神世界曾被如此郑重对待过的痕迹。阿德莱德凉亭那排纤细的拱廊，不是为了震慑你，而是为了邀请你；不是为了歌颂神权或王权，而是为了安放诗歌与爱情。这种“人本”的、追求生活艺术化的气息，即便跨越八百年，依然能直抵内心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了那些被旅游大巴塞满的“必去”景点，如果你渴望一次真正的“抵达”而不仅仅是“路过”，那么，请来比尔拉。这里没有答案，只有氛围；没有解说牌告诉你该感受什么，只有风、水、光和石头在默默诉说。你需要做的，只是放慢脚步，打开感官，让自己沉浸在这片阿古河畔的时光琥珀里。然后你会发现，最深的旅行，不是走了多远，而是你是否找到了那个能让时间变慢、让心灵变得柔软的地方。比尔拉，就是这样一个地方。它或许不会出现在最热门榜单上，但一定会留在你记忆中最柔软的那个角落，像一首听过便不会忘记的老歌，在往后的岁月里，偶尔响起，慰藉凡尘。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/bergerac-dordogne-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝热拉克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bergerac</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sainte-agnes-france" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣阿涅斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sainte-Agnès</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-villandry" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维朗德里城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Villandry</p>
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
