import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '梅里达罗马遗址 Mérida Roman Ruins｜邂逅“西班牙小罗马”，在露天博物馆里触摸帝国脉搏 - 最佳欧洲景点',
  description: '想象一下，你正走在西班牙西部一个阳光灿烂的小城街道上，两旁是寻常的白色房子和咖啡馆。然后，毫无预兆地，转过一个街角，一片巨大的、蜂蜜色的石砌阶梯剧场撞入眼帘。那不是模型，也不是复原品，而是实实在在存在了两千年的罗马剧院。早晨九点的阳光斜斜地打在科林斯式柱廊上，把影子拉得老长。空气中有一股干燥的石头气...',
}

export default function MeridaRomanRuinsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '梅里达', href: '/destinations/spain' },
            { label: '梅里达罗马遗址', href: '/attractions/merida-roman-ruins' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`梅里达罗马遗址・Mérida Roman Ruins・西班牙・梅里达`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你正走在西班牙西部一个阳光灿烂的小城街道上，两旁是寻常的白色房子和咖啡馆。然后，毫无预兆地，转过一个街角，一片巨大的、蜂蜜色的石砌阶梯剧场撞入眼帘。那不是模型，也不是复原品，而是实实在在存在了两千年的罗马剧院。早晨九点的阳光斜斜地打在科林斯式柱廊上，把影子拉得老长。空气中有一股干燥的石头气味，混合着附近松树和迷迭香的清香。你耳边听不到旅游团的喧哗，只有风穿过石拱的呜咽声，和远处市政厅隐约传来的钟鸣。
走到舞台中央，仰望那能容纳六千人的半圆形观众席，你会瞬间明白为什么梅里达被叫做“小罗马”。这里没有将遗址圈起来的冰冷围墙，它们是长在城市的肌理里的。白发苍苍的老先生牵着狗从竞技场的古老通道里散步出来；孩子们在水道桥巨大的石拱下骑自行车；年轻的恋人们依偎在黛安娜神庙的残柱旁，晒着太阳分享一个冰淇淋。历史在这里不是被供奉的标本，而是日常呼吸的一部分。那种感觉奇妙极了，就像时间在此地打了个褶，你同时站在公元1世纪和21世纪。
最打动人心的，是那种“完整性”。在别处，你可能看到一座孤零零的罗马桥，或一个修复过的剧场。但在梅里达，你得到的是整整一座功能齐全的罗马城市。从娱乐（剧院、竞技场）、信仰（神庙）、生活（别墅、集市）、到生存（水渠、桥梁、粮仓），所有拼图都散落在方圆几公里内，任你亲手拼接。在这里，你不需要太多想象力，因为城市骨架本身就在说话。走在古罗马桥的桥面上，脚下是瓜迪亚纳河不变的流淌，你会真切地触摸到那个帝国如何在此扎根、繁荣，并将其生活方式烙印在这片土地上，历经千年风雨，骨架依然清晰。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你正走在西班牙西部一个阳光灿烂的小城街道上，两旁是寻常的白色房子和咖啡馆。然后，毫无预兆地，转过一个街角，一片巨大的、蜂蜜色的石砌阶梯剧场撞入眼帘。那不是模型，也不是复原品，而是实实在在存在了两千年的罗马剧院。早晨九点的阳光斜斜地打在科林斯式柱廊上，把影子拉得老长。空气中有一股干燥的石头气味，混合着附近松树和迷迭香的清香。你耳边听不到旅游团的喧哗，只有风穿过石拱的呜咽声，和远处市政厅隐约传来的钟鸣。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走到舞台中央，仰望那能容纳六千人的半圆形观众席，你会瞬间明白为什么梅里达被叫做“小罗马”。这里没有将遗址圈起来的冰冷围墙，它们是长在城市的肌理里的。白发苍苍的老先生牵着狗从竞技场的古老通道里散步出来；孩子们在水道桥巨大的石拱下骑自行车；年轻的恋人们依偎在黛安娜神庙的残柱旁，晒着太阳分享一个冰淇淋。历史在这里不是被供奉的标本，而是日常呼吸的一部分。那种感觉奇妙极了，就像时间在此地打了个褶，你同时站在公元1世纪和21世纪。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人心的，是那种“完整性”。在别处，你可能看到一座孤零零的罗马桥，或一个修复过的剧场。但在梅里达，你得到的是整整一座功能齐全的罗马城市。从娱乐（剧院、竞技场）、信仰（神庙）、生活（别墅、集市）、到生存（水渠、桥梁、粮仓），所有拼图都散落在方圆几公里内，任你亲手拼接。在这里，你不需要太多想象力，因为城市骨架本身就在说话。走在古罗马桥的桥面上，脚下是瓜迪亚纳河不变的流淌，你会真切地触摸到那个帝国如何在此扎根、繁荣，并将其生活方式烙印在这片土地上，历经千年风雨，骨架依然清晰。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`梅里达罗马遗址`} />
                <InfoRow label="英文名称" value={`Mérida Roman Ruins`} />
                <InfoRow label="正式名称" value={`Archaeological Ensemble of Mérida`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`梅里达`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`古罗马帝国在伊比利亚半岛建立的第一个、也是最辉煌的殖民地首都，堪称“西罗马”的微缩模型。`} />
                <InfoRow label="建筑特色" value={`不仅单体建筑宏伟，更以其保存完好的城市功能性建筑群（剧院、竞技场、神庙、桥梁、水道）而震撼，完整呈现了罗马城市生活的全貌。`} />
                <InfoRow label="建筑风格" value={`典型的古罗马帝国时期建筑风格，大量运用本地花岗岩，融合了罗马的工程技术威严与行省的本土适应性。`} />
                <InfoRow label="文化价值" value={`一座跨越两千年的露天历史书，见证了罗马帝国的扩张、衰落，以及基督教、西哥特、伊斯兰等文明在此的层层叠加与对话。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`遗址群内各景点开放时间不一，核心的罗马剧院与竞技场通常在夏季（4月至9月）开放时间为9:00-21:00，冬季（10月至3月）为9:00-18:30；部分露天遗址如古罗马桥、水道桥全天开放。大多数室内博物馆及遗址周一闭馆，节假日开放时间会缩短，具体行前务必在官网二次确认。`} />
              <InfoRow label="门票价格" value={`参观主要遗址可购买联票，成人约15欧元，有效期为参观之日起连续两天。联票涵盖罗马剧院、竞技场、圆形剧场、黛安娜神庙遗址、米特雷奥之家等重要景点。学生、65岁以上老人及欧盟青年卡持有者享有折扣。每月第一个周日多数场馆免费。国家罗马艺术博物馆需单独购票，约3欧元。`} />
              <InfoRow label="地址" value={`Plaza Margarita Xirgu, s/n, 06800 Mérida, Badajoz, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发最方便：乘火车（Renfe）从马德里-查马丁车站直达梅里达站，车程约4.5小时，每日有数班列车。从巴达霍斯机场（距离梅里达约60公里）打车约45分钟，或先乘公交至巴达霍斯火车站再转乘区间火车（约30分钟）。城内景点非常集中，从火车站步行至罗马剧院仅需20分钟，或乘坐本地公交在“Teatro Romano”站下车。建议购买一张一日公交卡，轻松穿梭于略分散的水道桥等遗址。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从公元前25年讲起。那时候，罗马帝国的开国皇帝奥古斯都，正忙着巩固疆域。伊比利亚半岛西北部的战事刚刚平息，为了安置光荣退伍的“第五军团”和“第十军团”的老兵们，也为了牢牢控制这片重要的领土，奥古斯都下令：建立一座新的城市。选址定在了瓜迪亚纳河畔一个战略要地。这座城市被命名为“Emerita Augusta”，意即“奥古斯都的退伍兵之城”。梅里达这个名字，正是从这里演变而来。从一开始，它就背负着帝国的荣耀与统治的使命，是罗马文化向西方边疆投射的一颗璀璨棋子。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在帝国财政和顶尖工程师的支持下，这座新城以惊人的速度拔地而起。它不是简单的军营，而是一座按照最正统罗马城市规划理念建造的完整首都。负责建造的核心人物是奥古斯都的女婿兼得力助手——阿格里帕。正是在他的推动下，那些今天我们看来仍是奇迹的建筑相继落成。剧院、竞技场、宏大的广场、横跨大河的石桥……这座城市很快繁盛起来，成为罗马路西塔尼亚行省的首府，汇聚了来自帝国各地的官员、商人、艺术家和移民。你可以想象，在公元1-2世纪的鼎盛时期，这里的街道上回荡着拉丁语和多神教的祈祷声，剧院里上演着塞内加的悲剧，竞技场上演着角斗士的搏杀，水道桥则将清冽的雪山之水引入千家万户和公共浴场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，帝国的夕阳终会落下。随着罗马帝国的分裂和衰落，梅里达的重要性并未立刻消失，反而以一种新的形态延续。它成了西哥特王国的重要主教区，早期基督教教堂在罗马神庙的废墟旁建立起来。后来，摩尔人来了，他们称这里为“Marida”，并继续使用了那些坚固的罗马桥梁和城墙，只是在其上增添了清真寺和伊斯兰风格的宫殿。每一层征服者都没有将前人的痕迹完全抹去，而是像在画布上叠加新的油彩。中世纪的战火、瘟疫和河流改道让城市规模萎缩，许多宏伟建筑被逐渐掩埋在泥土之下，甚至被当地人当作采石场，石料被挪去建造新的教堂和房屋。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的重生，带着一点偶然和大量的执着。18世纪，一些学者开始注意到这里地下埋藏的财富。但真正系统的考古发掘要到20世纪初才大规模展开。当工人们挖开剧院观众席上堆积了数米的泥土时，那个沉睡了十几个世纪的宏伟剧场再次见到阳光，世界为之震惊。最动人的故事属于一位建筑师——拉斐尔·莫内奥。上世纪80年代，他为保护并展示梅里达无以伦比的罗马马赛克、雕塑和文物，设计建造了国家罗马艺术博物馆。这座博物馆本身就是一座现代建筑杰作，它用巨大的砖拱和天光，为古老的遗物创造了一个永恒的家，也象征着梅里达从历史的尘埃中荣耀回归，成为全人类共同遗产的守护者。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的梅里达深度游，需要一整天时间（至少6-8小时）。建议早上9点前抵达，这时阳光柔和，旅游团尚未涌入，你能独享剧院和竞技场的宁静震撼。整体游览节奏宜“先核心，后发散，中午歇”。上午精力充沛时，集中游览最核心、最震撼的剧院-竞技场-博物馆三角区；午后阳光炽烈时，可以转入室内博物馆细品文物，或沿着绿荫河道散步前往略远的水道桥；傍晚时分，再回到古罗马桥看日落，感受金色光芒洒在千年古石上的温柔。这样的安排能最大程度避免暴晒和疲劳，同时捕捉到遗址在不同光线下的最美瞬间。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季梅里达非常炎热，务必携带充足饮用水、帽子、墨镜和防晒霜，正午时分尽量避免在无遮阴的遗址区长时间暴晒。
购买联票非常划算且能节省多次排队时间，票务中心在罗马剧院入口处，建议开门即去购买。
参观地下遗址或博物馆时，建议带一件薄外套，内外温差可能较大。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第一站毫不犹豫直奔罗马剧院与竞技场，趁着清晨的凉爽和寂静，独自站在空荡荡的舞台中央，感受那份直击灵魂的宏伟与沧桑。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过连接剧院的地下通道走进旁边的罗马竞技场，想象两千年前这里震耳欲聋的欢呼与角斗士沉重的呼吸，触摸那些关押野兽的阴森囚笼石壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从竞技场出来，沿着宁静的居民区小路步行几分钟，去探访藏身于现代建筑之中的黛安娜神庙遗迹，那些科林斯石柱就矗立在一座文艺复兴宫殿的庭院里，时空交错感扑面而来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`接着走向瓜迪亚纳河畔，踏上那座拥有60个拱门的古罗马桥，在桥中央停下来，看白鹳在桥墩上筑巢，河水静静流淌，这是感受罗马工程学不朽生命力的最佳地点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`过桥后，拜访收藏着惊人马赛克画的米特雷奥之家，蹲下身仔细看那些描绘神话场景的精致碎石拼图，惊叹于古罗马中产家庭的居住艺术。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将中午最热的时段留给国家罗马艺术博物馆，在它那教堂般肃穆又明亮的展厅里慢慢行走，让那些残缺却优美的雕塑和文物对你讲述更细腻的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午乘公交或悠闲步行约20分钟，去城郊仰望那座高达25米的洛斯米拉格罗斯水道桥残骸，从它巨大的石拱下穿过，仰望蓝天，感受水利工程的巨人尺度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落前回到古城，随便找一家剧院对面的露天咖啡馆坐下，点一杯本地产的雪莉酒或柠檬啤酒，看着金色的夕阳逐渐为古老的石阶镀上温暖的光泽。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`罗马剧院舞台正中偏右位置`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点间，阳光从西侧照亮大部分观众席，从这个角度能拍出半圆形阶梯被金光笼罩、柱廊影子斜长的经典全景，人物可站在舞台边缘形成剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`竞技场地下通道出口`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏低角度光线射入通道时，站在通道内向外拍摄竞技场沙地，能获得极具戏剧性明暗对比和纵深感的框架构图照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`洛斯米拉格罗斯水道桥正下方仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗的白天任意时间，躺在或站在其中一个巨大拱门正下方，用超广角镜头垂直向上拍摄，能捕捉到石块垒叠的惊人几何结构与天空形成的强烈视觉冲击。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`国家罗马艺术博物馆中央大厅的螺旋楼梯`}</h4>
                  <p className="text-sm text-gray-700">{`利用博物馆顶部的自然天光，站在二楼俯拍或从下往上拍螺旋线条，能将现代建筑的简约力量与馆内罗马文物的古典美融合在一张照片里。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`古罗马桥东侧河岸`}</h4>
                  <p className="text-sm text-gray-700">{`日落前后半小时，在桥的东侧（非主城一侧）河岸边，可以拍到完整的古桥倒影在水中，背景是梅里达老城建筑群，天空色彩变幻万千。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`“黄金时刻”（日出后和日落前一小时）是拍摄所有户外遗址的魔法时间，阳光会让蜂蜜色的石材呈现出温暖的金红光泽，质感无与伦比。`}</li>
                <li>• {`尝试用黑白模式拍摄竞技场、水道桥等场景，能剥离色彩，更突出历史的厚重感、石材质感和光影的戏剧性。`}</li>
                <li>• {`许多遗址内部禁止使用闪光灯和三脚架（小型八爪鱼支架或可通融），拍摄前请留意标识，并始终以保护文物为第一准则。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在由17世纪贵族宅邸改造的老城中心精品酒店，房间围绕着一个安静的罗马式中庭，晚上能听到远处罗马剧场若隐若现的夏季演出声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`本地生活之选`}</h4>
                  <p className="text-sm text-green-800">{`选择瓜迪亚纳河畔的家庭式公寓，房东奶奶会给你送来自家做的西班牙蛋饼，阳台正对古罗马桥，日夜欣赏河流与古桥的风景变幻。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`设计独特之选`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻由古老修道院部分建筑修复而成的特色酒店，保留了原始的砖拱和石墙，但内部是极简现代设计，提供屋顶露台酒吧，俯瞰一片罗马遗址屋顶。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`宁静庄园之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于城郊橄榄园中的乡间酒店，需要短途车程，但能享受绝对的宁静、泳池和星空，适合自驾旅者将梅里达作为探索埃斯特雷马杜拉地区的舒适基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（尤其是八月）和梅里达古典戏剧节期间（七月）住宿非常紧张且价格高昂，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城中心的住宿最能体现“生活在历史中”的感觉，且步行可达所有主要遗址，但夜间可能偶有酒吧区的微弱噪音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`梅里达总体治安良好，但选择住宿时仍建议优先考虑评价高、照明好的区域。许多老建筑酒店没有电梯，预订时如有大件行李需提前确认。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开梅里达好些天了，但闭上眼，那片蜂蜜色的石头光泽，混合着干燥的草本气息和午后灼热的空气，依然清晰地留在感官记忆里。这里给我的触动，远超于看到一堆“古迹”的猎奇。它是一种完整的、依然在呼吸的“过去进行时”。你看到的不是废墟，而是一个伟大文明的骨架，它如此坚实，以至于后来者只能在它的缝隙里生长，而无法将其彻底摧毁。走在其中，你仿佛能听见时间的层理在脚下沙沙作响——罗马军团的步伐、西哥特圣歌的吟唱、摩尔商队的驼铃、现代学生嬉笑跑过——它们并没有消失，只是融入了同一条河流。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求崭新和速度的世界里，梅里达像一座沉稳的锚。它提醒我们，真正的伟大不是凭空创造奇观，而是建立起能跨越千年的、关于生活本身的系统——如何引水，如何通行，如何娱乐，如何信仰。每一位热爱深度游的旅人都该来一次梅里达，不仅仅是为了打卡又一个世界遗产。而是来这里上一堂最生动的“存在主义”历史课。在这里，你会明白，文明的力量不在于永恒的坚固，而在于即使身躯倒下，留下的骨骼依然能为后世提供坐标和养分。当你触摸着竞技场墙上不知名的古罗马游客刻下的字迹时，那种与两千年前的某个瞬间直接相连的战栗，是任何书本和纪录片都无法给予的。这，正是旅行所能带来的、最珍贵的共鸣。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
