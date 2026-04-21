import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨沃卡 Savoca｜《教父》婚礼地原型，深藏木乃伊与海风的双峰小镇 - 最佳欧洲景点',
  description: '车子沿着之字形的山路往上爬，窗外的景色从蔚蓝的爱奥尼亚海平面，逐渐变成漫山遍野的橄榄树与柠檬园。空气变得干爽，风里带着岩石被晒暖的气息和一丝若有若无的野生茴香味道。当你终于把车停在村口那片小空地，推开车门，第一个迎接你的往往是彻底的寂静，以及脚下那片如同融化蓝宝石般铺陈开来的浩瀚海洋。萨沃卡不是一座',
}

export default function SavocaSicilyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '西西里岛墨西拿省', href: '/destinations/italy' },
            { label: '萨沃卡', href: '/attractions/savoca-sicily' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨沃卡・Savoca・意大利・西西里岛墨西拿省`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着之字形的山路往上爬，窗外的景色从蔚蓝的爱奥尼亚海平面，逐渐变成漫山遍野的橄榄树与柠檬园。空气变得干爽，风里带着岩石被晒暖的气息和一丝若有若无的野生茴香味道。当你终于把车停在村口那片小空地，推开车门，第一个迎接你的往往是彻底的寂静，以及脚下那片如同融化蓝宝石般铺陈开来的浩瀚海洋。萨沃卡不是一座喧闹的“景点”，它是一座依然在呼吸、在衰老、在顽强生活的老村庄。时间在这里，是以广场上挪动椅子的老人、墙角打盹的猫、和从不急于关门的杂货店老板来计量的。
走在主街“七教堂街”上，脚下是数百年被脚步磨得发亮甚至凹陷的火山岩石板。两边紧闭的木质门扉，油漆斑驳，门环锈蚀，但窗台上鲜红的天竺葵却开得不管不顾，生机勃勃。你几乎能触摸到那种坚韧的质感——石头是冷的，但生活是热的。当地的老人们聚在阴影里，用你听不懂的西西里方言高声交谈，手势夸张，他们对偶尔经过的游客投来平静的一瞥，那眼神里没有好奇，只有一种土地主人般的坦然。这里的生活节奏，和海平面下那些光鲜的海滨度假地，完全是两个世界。
而萨沃卡最令人着迷的，正是这种巨大的反差感。一面是《教父》电影带来的、弥漫在维泰利酒吧里的那种浪漫化的黑手党传奇与好莱坞星光；另一面，则是仅仅几百米外，卡普钦修道院里那直面死亡、冰冷而肃穆的木乃伊地穴。阳光与阴影，生之喧嚣与死之沉寂，电影的虚构与历史的真实，在这座双峰小镇上被并置、挤压在一起，形成一种难以言喻的张力。它邀请你的，不是简单的打卡，而是一场关于记忆、存在与消失的沉思。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子沿着之字形的山路往上爬，窗外的景色从蔚蓝的爱奥尼亚海平面，逐渐变成漫山遍野的橄榄树与柠檬园。空气变得干爽，风里带着岩石被晒暖的气息和一丝若有若无的野生茴香味道。当你终于把车停在村口那片小空地，推开车门，第一个迎接你的往往是彻底的寂静，以及脚下那片如同融化蓝宝石般铺陈开来的浩瀚海洋。萨沃卡不是一座喧闹的“景点”，它是一座依然在呼吸、在衰老、在顽强生活的老村庄。时间在这里，是以广场上挪动椅子的老人、墙角打盹的猫、和从不急于关门的杂货店老板来计量的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走在主街“七教堂街”上，脚下是数百年被脚步磨得发亮甚至凹陷的火山岩石板。两边紧闭的木质门扉，油漆斑驳，门环锈蚀，但窗台上鲜红的天竺葵却开得不管不顾，生机勃勃。你几乎能触摸到那种坚韧的质感——石头是冷的，但生活是热的。当地的老人们聚在阴影里，用你听不懂的西西里方言高声交谈，手势夸张，他们对偶尔经过的游客投来平静的一瞥，那眼神里没有好奇，只有一种土地主人般的坦然。这里的生活节奏，和海平面下那些光鲜的海滨度假地，完全是两个世界。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而萨沃卡最令人着迷的，正是这种巨大的反差感。一面是《教父》电影带来的、弥漫在维泰利酒吧里的那种浪漫化的黑手党传奇与好莱坞星光；另一面，则是仅仅几百米外，卡普钦修道院里那直面死亡、冰冷而肃穆的木乃伊地穴。阳光与阴影，生之喧嚣与死之沉寂，电影的虚构与历史的真实，在这座双峰小镇上被并置、挤压在一起，形成一种难以言喻的张力。它邀请你的，不是简单的打卡，而是一场关于记忆、存在与消失的沉思。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨沃卡`} />
                <InfoRow label="英文名称" value={`Savoca`} />
                <InfoRow label="正式名称" value={`Savoca`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`西西里岛墨西拿省`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座凝固在时光里的中世纪山城，因电影《教父》中迈克尔·科莱昂的婚礼场景而闻名于世，但其真实历史远比电影更为古老和深邃。`} />
                <InfoRow label="建筑特色" value={`典型的西西里山城风貌，蜂蜜色的砂岩建筑密密麻麻堆叠在双峰之上，狭窄的台阶、隐秘的拱门和饱经风霜的阳台共同构成迷宫般的肌理。`} />
                <InfoRow label="建筑风格" value={`融合了阿拉伯、诺曼和后期巴洛克风格的西西里乡土建筑，质朴而坚固，完全依险峻地形而建。`} />
                <InfoRow label="文化价值" value={`不仅是电影史上的一个地理注脚，更是了解西西内陆传统生活、生死观念以及历史层层积淀的活态博物馆。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇街道与广场全天开放。核心景点维泰利酒吧 (Bar Vitelli) 通常上午9点至午夜开放，夏季可能延长。卡普钦修道院及地下墓穴 (Convento dei Cappuccini e Catacombe) 开放时间较为灵活，一般为周二至周日10:00-13:00及15:00-日落前（冬季可能缩短），周一常闭馆。强烈建议行前通过小镇旅游信息中心或当地住宿确认具体时间，宗教节日期间可能变更。`} />
              <InfoRow label="门票价格" value={`进入萨沃卡小镇免费。维泰利酒吧为营业场所，消费即可进入（一杯咖啡或饮品约2-4欧元）。卡普钦修道院地下墓穴通常收取小额捐赠或门票，约3欧元，用于维护。无强制票价，但建议支持。`} />
              <InfoRow label="地址" value={`Piazza Fossia, 7, 98038 Savoca ME, Italy`} />
              <InfoRow label="交通方式" value={`最近的主要机场是卡塔尼亚丰塔纳罗沙机场。抵达后，最推荐的方式是租车自驾（约1小时车程），沿着A18高速公路往墨西拿方向，在罗卡布鲁纳出口下，跟随“Savoca”棕色旅游指示牌上山，山路狭窄蜿蜒但风景绝美。若无车，可从卡塔尼亚中央车站乘坐火车至陶尔米纳-贾尔迪尼站（约45分钟），再转乘由AST公司运营的前往萨沃卡方向的巴士（班次稀疏，每天约3-4班，车程约40分钟），务必提前在烟草店或车站确认时刻表。更灵活的方法是乘坐出租车从陶尔米纳或海边小镇出发，费用较高但可议价。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨沃卡的名字，据说源于一种当地盛产的野生杉树（Sabucu）。它的故事早在电影镜头对准之前很久就已开始。公元8-9世纪，阿拉伯人统治西西里岛时，看中了这两座易守难攻的山峰，在此建立了最初的定居点。你今日看到的那些蛛网般的小巷和层层叠叠的房屋布局，仍然遗留着鲜明的阿拉伯山地城镇的基因。随后，诺曼人来了，带来了天主教信仰，他们建造了教堂，但并未抹去原有的肌理，只是在上面增添了新的图层。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪和文艺复兴时期，萨沃卡曾是一个繁荣的农业和贸易中心，管辖着山下富饶的沿海土地。那时，七座教堂在山顶矗立，“七教堂街”因此得名。贵族们修建了颇有气派的宅邸，修道院也建立起来。然而，随着海岸线交通的发展，山城的战略和经济地位逐渐衰落，它像许多内陆小镇一样，陷入了漫长的、缓慢的沉睡。年轻一代奔向大城市或海边，留下的是老人、旧屋和越来越沉默的街道。时间仿佛在这里放缓了流速，这也意外地保存了它最原汁原味的中世纪风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在20世纪70年代初。一位名叫弗朗西斯·福特·科波拉的年轻导演，为了寻找他心中“柯里昂家族”的故乡，带着剧组踏上了西西里的土地。他需要一种与美国纽约的摩天大楼截然相反的、充满家族根源感和悲剧宿命感的背景。萨沃卡，这座几乎被世界遗忘的山城，用它沧桑的石墙、质朴的广场和维泰利酒吧那古老的木质阳台，一下子击中了科波拉。电影上映后，迈克尔·科莱昂在这里结婚、复仇的故事震撼了世界，萨沃卡和维泰利酒吧也一夜成名。然而，有趣的是，电影带来的名声并未完全改变小镇的脾性。它接纳了游客，但并未被游客吞噬。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "与电影的光环相比，萨沃卡另一个更古老、更隐秘的身份，是卡普钦修道院的木乃伊地穴。从16世纪到19世纪，当地有身份地位的逝者（主要是神职人员和贵族）会被进行特殊的脱水处理，穿上生前最好的衣服，安置在这地下墓穴的壁龛中或悬挂起来。这是一种在当时被视为荣耀的安葬方式，介于宗教虔诚与对肉体不朽的奇特追求之间。当你走下阴冷的台阶，与这些跨越了几个世纪的目光对视时，你会瞬间明白，萨沃卡的深度，远不止一部电影。它是一本用石头、电影胶片和干枯躯体共同写就的、关于西西里灵魂的复杂之书。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在上午9点左右抵达萨沃卡，此时阳光明媚却还不算酷热，旅游团尚未涌入，小镇正从晨光中苏醒，是最有生活气息的时刻。整个深度游览大约需要4-6小时，节奏宜慢不宜快。路线设计为一条环线，从标志性的维泰利酒吧开始，感受电影的余温；然后深入小镇迷宫般的内核，体验真实的生活脉搏；最后登上另一座山峰，在卡普钦修道院完成一次震撼的生死对话，并以一场面对无敌海景的午餐或晚餐收尾。这样的安排能让你由浅入深，从表面的传奇走入内在的深邃。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着舒适耐磨的步行鞋，小镇所有道路都是凹凸不平的石阶，高跟鞋是灾难。夏季上山一定要带足饮用水和防晒用品，小镇内商店不多。如果对木乃伊地穴感到严重不适或胆怯，不必强迫自己进入，修道院本身和周边景色已足够震撼。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先在维泰利酒吧的古老木阳台上点一杯柠檬 granita，俯瞰迈克尔·科莱昂曾凝视过的同一片山海，仔细看墙上挂满的泛黄电影剧照和导演签名。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着酒吧旁的台阶上行，钻入“七教堂街”那幽深如隧道般的拱廊，用手触摸两侧冰凉的砂岩墙壁，感受光线从头顶缝隙洒下的斑驳变化。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`刻意迷路般地在小镇纵横交错的阶梯和死胡同里穿行，留意那些半掩门扉内传来的电视声、厨房飘出的番茄酱香气，以及阳台上晾晒的鲜艳床单。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找并走进圣尼古拉教堂那朴素却庄严的内部，也许能撞见一位本地老妇正在点燃蜡烛默默祈祷，感受信仰在这里日常而坚实的存在。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从小镇中心向另一座山峰进发，沿着一段相对开阔、两旁长满仙人掌和龙舌兰的步道，步行约15分钟前往孤悬于山崖边的卡普钦修道院。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在修道院肃穆的礼拜堂稍作停留后，鼓起勇气跟随指示走下阴凉的地下阶梯，进入那个保存着数十具木乃伊的寂静墓穴，与他们进行无声的“对视”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开墓穴后，在修道院前方的空地上长舒一口气，让眼前辽阔无垠的爱奥尼亚海景洗涤方才的沉重，你会对“生”与“此地”有全新的感激。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山返回时，不必原路返回，可以选择另一条能眺望萨沃卡双峰全景的小径，最后回到主广场，在广场边的餐厅享用一顿以新鲜捕捞海鱼和本地葡萄酒为主的迟午餐或早晚餐。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`维泰利酒吧阳台转角`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后，阳光变得金黄柔和，以酒吧经典的木格窗和鲜花为前景，将远处山海作为背景，人物可侧身倚栏，营造故事感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从“七教堂街”某个拱门内向外拍`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，拱门形成完美的天然画框，框住门外被烈日照得发白的石板路和一角蓝天，明暗对比强烈，极具几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`在前往卡普钦修道院的步道中途回望`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏，站在步道拐弯处，用长焦镜头压缩空间，将萨沃卡全镇蜂蜜色的房屋堆叠全景与远方海岸线一同纳入镜中。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`木乃伊地穴入口的逆光剪影`}</h4>
                  <p className="text-sm text-gray-700">{`如果获得许可且不影响他人，可在地穴入口的阶梯处，借用地穴深处微弱光线拍下人物向下行走的剪影，神秘而富有叙事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣尼古拉教堂侧面的小巷`}</h4>
                  <p className="text-sm text-gray-700">{`雨后湿润的下午，石阶反射着天光，捕捉一位当地人从小巷深处走来的瞬间，两侧古墙的质感与人物形成生动呼应。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄木乃伊地穴内部是严格禁止的，请绝对尊重这一规定，这是对逝者最基本的敬意。拍摄当地居民时，请先微笑示意并征求同意，他们通常很友善，但不喜欢被突兀地镜头对准。小镇光线强烈，建议携带遮光罩以防眩光。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`融入式体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在小镇石头老屋改造的公寓里，房东可能就住在楼下，晚上能听到广场传来的隐约聊天声，清晨在自家的小阳台上就能看到海平面日出。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色隐居`}</h4>
                  <p className="text-sm text-green-800">{`选择坐落在萨沃卡与周边橄榄园之间的农庄住宿，享受绝对的宁静，品尝主人自产的橄榄油和柑橘，夜空繁星如洗，只有虫鸣相伴。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`便捷海景`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在山脚下沿海小镇圣塔特雷莎 di 萨沃卡的家庭式精品酒店，坐拥沙滩和海景，白天上山探索，傍晚下山游泳晚餐，体验山海双城记。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端历史`}</h4>
                  <p className="text-sm text-purple-800">{`驱车约半小时入住陶尔米纳的五星级历史宫殿酒店，享受世界级的服务与设施，以萨沃卡为一日深度探险的目的地，回来后在奢华环境中回味对比。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨沃卡镇内住宿非常有限且设施古朴，旺季务必提前数月预订。如果选择住在外围或陶尔米纳，确保有可靠的交通工具（自驾最佳）。无论住在哪里，晚上小镇都非常安静安全，是观察西西里乡村星空的绝佳地点。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开萨沃卡的时候，我耳朵里似乎还回响着两种声音：一种是维泰利酒吧里杯碟碰撞的轻响和游客们重温电影对白的低语，那是属于世界的、流行的回声；另一种，则是地下墓穴里那种沉重无边的寂静，以及小镇广场上，风吹过老墙的呜咽，那是属于土地本身的、永恒的沉默。这座小镇教会我的，正是如何在这两种声音之间安放自己的思绪。它不像那些被精心包装的旅游目的地，急于向你展示一切。它更像一位饱经风霜的老者，坐在阳光下，你愿意倾听，他就娓娓道来一段关于家族、信仰、死亡与海洋的故事；你若只是匆匆路过，他便报以沉默的微笑，继续凝视他那片看了千百年的海。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求高效、迷恋表象的时代，萨沃卡是一种珍贵的“减速带”。它让你不得不慢下来，用双脚去丈量每一级不平的台阶，用耐心去等待一幅光影的移动，甚至用勇气去直面死亡最直白的形态。然后，在经历过这一切之后，你坐在悬崖边，看着那片亘古不变的、蓝得令人心醉的爱奥尼亚海，会感到一种奇特的平静。你会发现，所有的传奇、所有的历史、所有的喧嚣与沉寂，最终都沉淀为脚下这座沉默山丘的一部分。这，或许就是深度旅行最极致的意义——不是收集地名，而是在某个意想不到的角落，找到一种理解世界、也理解自己的，更厚重的方式。萨沃卡，就是这样一个角落。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/paestum-temples" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕埃斯图姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Paestum</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trevi-umbria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特雷维</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trevi</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/san-leo-fortress" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    圣
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">圣莱奥</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">San Leo</p>
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
