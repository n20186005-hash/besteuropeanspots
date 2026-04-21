import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '诺伊明斯特修道院 Neumünster Abbey｜深藏大峡谷底部的千年回响，从修道院、监狱到文化心脏的传奇重生 - 最佳欧洲景点',
  description: '你得先走下坡。这是拜访诺伊明斯特修道院前必须的，也是最具仪式感的一步。从卢森堡老城那些精致的广场和宫殿边缘，随便找一条蜿蜒的小径往下走，城市喧嚣很快被过滤掉，取而代之的是湿润的、带着苔藓和泥土气息的凉风。参天古树的枝叶在上方交错，过滤出斑驳跳跃的光点。当你感觉膝盖有些发酸，耳朵因为海拔变化微微发胀时',
}

export default function NeumunsterAbbeyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '卢森堡', href: '/destinations/luxembourg' },
            { label: '卢森堡市', href: '/destinations/luxembourg' },
            { label: '诺伊明斯特修道院', href: '/attractions/neumunster-abbey' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`诺伊明斯特修道院・Neumünster Abbey・卢森堡・卢森堡市`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你得先走下坡。这是拜访诺伊明斯特修道院前必须的，也是最具仪式感的一步。从卢森堡老城那些精致的广场和宫殿边缘，随便找一条蜿蜒的小径往下走，城市喧嚣很快被过滤掉，取而代之的是湿润的、带着苔藓和泥土气息的凉风。参天古树的枝叶在上方交错，过滤出斑驳跳跃的光点。当你感觉膝盖有些发酸，耳朵因为海拔变化微微发胀时，一抬头，它就在那儿了——不是高耸入云，而是稳稳地、甚至有些敦实地坐落在峡谷底部，厚重的米黄色石墙仿佛是从这片古老的河床里生长出来的一样。那种感觉，不是仰望圣地，更像是发现了一个被时间精心保管的秘密。
走近了，声音先于视觉变得丰富。峡谷底部阿尔泽特河潺潺的水声是永恒的底色。可能还会隐约听到手风琴声，那或许是街头艺人在附近的桥上演奏。最生动的声音来自修道院开阔的庭院：孩子们追逐鸽子的笑声，游客压低嗓音的惊叹，以及从敞开的门廊里飘出的、可能是某场排练的钢琴音符片段。这里没有一般宗教遗址那种令人屏息的肃穆，而是一种被生活充分浸润的、平和的热闹。你会看到当地老人坐在长椅上晒太阳，读书的年轻人靠着古老的墙根，导游举着小旗子轻声讲解。它不再是高高在上的圣殿，而是峡谷社区一个宽阔而美丽的“客厅”。
触摸它的墙壁，你能感受到历史的层次。底部是粗糙、深色、巨大的石块，那是它作为堡垒和监狱时期冷峻的基底；往上，是雕琢更精细的巴洛克式门窗和装饰线条，诉说着它作为修道院曾经的庄严与辉煌。阳光在一天中不同时分掠过这些石墙，光影戏剧般变化，清晨是清冷的淡金色，正午是饱满的亮白，到了傍晚，则染上蜂蜜般温暖醇厚的色调。站在庭院中央回望，高耸的岩壁和崖顶那些童话般的城堡塔楼构成了它的天然画框。这种被自然和人文双重力量守护的感觉，正是诺伊明斯特最打动人心的核心——它不曾逃离历史的磨难，却在谷底这片宁静中，完成了从禁锢到包容、从伤痕到新生的诗意转变。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你得先走下坡。这是拜访诺伊明斯特修道院前必须的，也是最具仪式感的一步。从卢森堡老城那些精致的广场和宫殿边缘，随便找一条蜿蜒的小径往下走，城市喧嚣很快被过滤掉，取而代之的是湿润的、带着苔藓和泥土气息的凉风。参天古树的枝叶在上方交错，过滤出斑驳跳跃的光点。当你感觉膝盖有些发酸，耳朵因为海拔变化微微发胀时，一抬头，它就在那儿了——不是高耸入云，而是稳稳地、甚至有些敦实地坐落在峡谷底部，厚重的米黄色石墙仿佛是从这片古老的河床里生长出来的一样。那种感觉，不是仰望圣地，更像是发现了一个被时间精心保管的秘密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近了，声音先于视觉变得丰富。峡谷底部阿尔泽特河潺潺的水声是永恒的底色。可能还会隐约听到手风琴声，那或许是街头艺人在附近的桥上演奏。最生动的声音来自修道院开阔的庭院：孩子们追逐鸽子的笑声，游客压低嗓音的惊叹，以及从敞开的门廊里飘出的、可能是某场排练的钢琴音符片段。这里没有一般宗教遗址那种令人屏息的肃穆，而是一种被生活充分浸润的、平和的热闹。你会看到当地老人坐在长椅上晒太阳，读书的年轻人靠着古老的墙根，导游举着小旗子轻声讲解。它不再是高高在上的圣殿，而是峡谷社区一个宽阔而美丽的“客厅”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "触摸它的墙壁，你能感受到历史的层次。底部是粗糙、深色、巨大的石块，那是它作为堡垒和监狱时期冷峻的基底；往上，是雕琢更精细的巴洛克式门窗和装饰线条，诉说着它作为修道院曾经的庄严与辉煌。阳光在一天中不同时分掠过这些石墙，光影戏剧般变化，清晨是清冷的淡金色，正午是饱满的亮白，到了傍晚，则染上蜂蜜般温暖醇厚的色调。站在庭院中央回望，高耸的岩壁和崖顶那些童话般的城堡塔楼构成了它的天然画框。这种被自然和人文双重力量守护的感觉，正是诺伊明斯特最打动人心的核心——它不曾逃离历史的磨难，却在谷底这片宁静中，完成了从禁锢到包容、从伤痕到新生的诗意转变。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`诺伊明斯特修道院`} />
                <InfoRow label="英文名称" value={`Neumünster Abbey`} />
                <InfoRow label="正式名称" value={`Neumünster Abbey`} />
                <InfoRow label="国家" value={`卢森堡`} />
                <InfoRow label="城市" value={`卢森堡市`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在卢森堡历史长河中多次被摧毁、重建并转变身份，最终成为国家文化与和解象征的标志性建筑。`} />
                <InfoRow label="建筑特色" value={`宏伟的巴洛克式立面与厚重的防御工事基底奇妙结合，静卧于深邃的峡谷怀抱之中。`} />
                <InfoRow label="建筑风格" value={`以17-18世纪重建的巴洛克风格为主，融合了更早的罗马式基础结构和防御性建筑元素。`} />
                <InfoRow label="文化价值" value={`从本笃会修道院到军事堡垒、国家监狱，再到如今充满活力的文化中心，它本身就是一部镌刻在石头上的卢森堡多维历史教科书。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`文化中心内部开放时间通常为周二至周日 10:00 - 18:00，具体展厅和活动时间可能不同；修道院建筑外部及庭院可全天自由参观。举办音乐会或特殊活动时夜间也会开放。周一多数室内区域关闭，但庭院仍可进入。建议行前在其文化中心官网核实最新日程。`} />
              <InfoRow label="门票价格" value={`进入修道院庭院、回廊及大部分公共区域免费。参观内部特定历史展览或参加导览团可能需要支付少量费用（约5-10欧元）。音乐会、工作坊等特殊活动需单独购票。学生、老年人和团体通常有折扣。`} />
              <InfoRow label="地址" value={`28 Rue Münster, 2160 Grund, Luxembourg`} />
              <InfoRow label="交通方式" value={`从卢森堡中央火车站（Gare de Luxembourg）出发，步行是最佳方式。出站后，朝着“Grund”或“Vallée de la Pétrusse”（佩特吕斯峡谷）方向走，大约需要15-20分钟的下坡路，穿过风景如画的峡谷公园和桥梁即可抵达底部。从卢森堡芬德尔机场出发，可先乘坐16或29路公交车至中央火车站，再按上述路线步行。城市内公共交通（巴士）也可到达“Grund”站，但步行穿越峡谷的体验本身就是游览的一部分。卢森堡全国公共交通自2020年起已完全免费。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事得从公元7世纪说起，甚至更早。在这片后来被称为“Grund”（基础、谷底）的肥沃河畔，早期的基督教传教士可能已经建立了一个小小的祈祷所。但真正书写下第一章的，是1688年。是的，我们今天看到的巴洛克面貌，始于这个年份。虔诚的本笃会修士们决定在此建立一座新的修道院（“Neumünster”意为“新修道院”），以取代河对岸更古老、已显局促的旧修道院。他们请来了优秀的建筑师，运来坚实的石材，梦想在此创造一个远离尘嚣的灵修中心。工程缓慢而坚定地进行，巴洛克的优雅线条开始在峡谷中显现。然而，卢森堡这座“北方直布罗陀”的命运，从来不由平静主导。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1796年，法国大革命的风暴席卷而来。修道院被世俗政权没收，修士们被驱逐。这仅仅是一连串身份剧变的开始。接下来的几十年，它成了一座兵营，坚实的墙壁回荡着士兵的脚步声和武器的铿锵声。更戏剧性的转变发生在19世纪中叶，普鲁士人控制了卢森堡，他们看中了这里易守难攻的地理位置和坚固的建筑结构，将其彻底改造为一座军事堡垒和……国家监狱。你能想象吗？昔日修士吟唱圣歌的穹顶下，变成了关押囚犯的牢房。其中最著名的“住户”，是卢森堡本国的社会活动家，他们因反抗不公的税收法律而被囚禁于此。神圣与囚禁，在这同一个空间里形成了刺痛人心的反差。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间跳到1941年，二战期间纳粹德国占领了卢森堡。这座建筑再次被征用，成为盖世太保的保安警察监狱和“劳改教育营”。无数抵抗战士、爱国者和被强迫征入德军的卢森堡青年（他们拒绝向希特勒效忠）曾在此受尽折磨。墙壁上的刻痕、地窖中挥之不去的阴冷气息，都是那段黑暗岁月无声的证词。战争结束后，它继续作为监狱使用了一段时间，直到1984年最后一批囚犯被转移。一座满载着如此复杂沉重记忆的建筑，它的未来该走向何方？是任其荒废，还是推倒重建？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "卢森堡人选择了第三条，也是最艰难、最有智慧的一条路：对话与重生。从上世纪90年代开始，一项宏大的修复与改造计划启动。目标不是抹去历史，而是让所有层次的历史都能被看见、被感知，并最终在一个新的共同目标下达成和解。建筑师和历史学家们小心翼翼地进行修复，保留了监狱时期的铁门和牢房结构，也让巴洛克立面的精美重见天日。1997年，一个名为“欧洲修道院”的文化项目进驻，为它注入了全新的灵魂。2004年，全新的诺伊明斯特文化中心正式向公众敞开大门。从此，曾回荡着祈祷声、镣铐声和哭泣声的地方，开始流淌出音乐会、艺术展览、哲学讲座和节日庆典的欢声笑语。它用自己的重生，讲述了卢森堡这个小国如何以文化的力量，直面历史的阴影，并最终将其转化为面向未来的光明。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将拜访诺伊明斯特安排在下午。这样，你可以先享受从老城漫步而下的悠闲，在峡谷森林里感受午后的静谧光影。大约在下午两三点抵达修道院庭院，此时阳光正好能斜射进回廊，适合拍照和初步探索。留出至少两到三个小时，节奏可以从容不迫。先花时间在外部和庭院感受整体氛围，然后进入建筑内部，按照从古老（地窖）到现代（展览空间）的顺序，体验历史的层次。如果碰巧有晚间音乐会或活动，那绝对是完美的高潮。这样的安排让你既能领略日光下的建筑之美，也有机会感受到夜晚灯光点亮时，它完全不同的迷人姿态。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`内部部分区域（如古老地窖）地面不平且光线较暗，建议穿一双舒适防滑的鞋子。周一很多室内展览不开放，如果主要想参观内部，请避开周一。文化中心的活动非常丰富且高质量，行前务必查看官网日程，你可能会邂逅一场意想不到的精彩演出或讲座。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从约翰大公桥（Pont du Grand-Duc Jean）上远眺，将修道院与峡谷、崖顶城堡同框的壮丽全景深深印入脑海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着古老的石阶走下Grund区，让两侧爬满藤蔓的民居和潺潺水声引领你抵达修道院前的开阔广场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开厚重的木门走进中央庭院，立刻被那份由古老石墙围合出的宁静与开放兼具的独特气场包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着阳光斑驳的回廊慢步一圈，手指拂过冰凉的石柱，寻找那些可能被岁月模糊的雕刻细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走下通往地窖的狭窄台阶，在昏暗与清凉中触摸最原始的岩壁，感受此地千年来的根基与作为监狱时期的记忆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`探访主要的展览大厅，看看今天这里正在讲述什么故事——可能是当代艺术展，也可能是关于卢森堡历史的文献陈列。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在庭院角落的咖啡馆外摆一张椅子，点一杯本地啤酒或咖啡，什么也不做，就看光影在墙壁上移动，听现场传来的若有若无的音乐练习声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果运气好，傍晚时分留在庭院或进入礼堂，等待一场可能突然开始的露天小型音乐会或诗歌朗诵会。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`约翰大公桥中段俯拍机位`}</h4>
                  <p className="text-sm text-gray-700">{`下午四至六点，夕阳为峡谷涂上暖色时，在此可以拍到修道院全景静卧于绿色河谷中，阿尔泽特河如缎带般从旁流过的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中央庭院拱廊下`}</h4>
                  <p className="text-sm text-gray-700">{`利用拱廊形成的天然画框，拍摄庭院另一侧的巴洛克立面，最佳时间是阳光能直射入廊柱、形成强烈明暗对比的午后。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`地下古老地窖通道`}</h4>
                  <p className="text-sm text-gray-700">{`借助地窖窗口射入的束状光线（需等待合适角度），拍摄通道的纵深感与粗糙石壁的质感，营造神秘而富有历史感的画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`修道院广场仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`退到广场最边缘，用广角镜头仰拍，将修道院宏伟的巴洛克正立面与后方高耸的悬崖及崖顶城堡一同纳入构图，展现其地理位置的独特性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`回廊转角光影`}</h4>
                  <p className="text-sm text-gray-700">{`晴日上午或午后，阳光斜射入回廊时，捕捉光斑在连续拱券和石板地上形成的韵律感，聚焦于一个行走或静坐的人物剪影会更有故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用广角镜头能更好地捕捉建筑与峡谷环境的壮观关系。室内展览空间拍摄前请注意是否有禁止摄影的标志，并始终关闭闪光灯以保护展品。尊重在此举行宗教仪式（偶尔仍有）或私人活动的场合，避免不当拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`Grund区本地家庭经营的温馨小旅馆，房间窗户正对着修道院的侧面，夜晚能听见清晰的河水声，老板会给你推荐只有当地人才知道的徒步小径。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`由17世纪贵族宅邸改造的精品酒店，位于崖顶老城，拥有俯瞰整个Grund峡谷和诺伊明斯特修道院的绝美露台，在晨雾中享用早餐宛如仙境。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`卢森堡市中心五星级宫殿酒店，提供无与伦比的奢华与服务，步行至峡谷仅需十分钟，让你在探索历史的厚重与享受现代的舒适之间无缝切换。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特尝试`}</h4>
                  <p className="text-sm text-purple-800">{`距离市区稍远但位于摩泽尔河畔的酒庄酒店，乘坐公交即可轻松到达，体验卢森堡乡村的宁静，并以一杯本地起泡酒结束探索历史的一天。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "Grund区夜晚极其安全宁静，但回崖顶老城需爬坡或乘坐电梯，行李多者需考虑。夏季旅游旺季和金融会议期间卢森堡市酒店价格飙升且紧张，务必提前数月预订。住在Grund或老城，才能真正体验峡谷地区早晚不同时段的光影魔力。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开诺伊明斯特修道院，重新爬回崖顶的现代都市时，那种感觉异常奇妙。仿佛进行了一次短暂的时空潜水。谷底的静谧与厚重，与崖上车水马龙的金融中心景象，仅仅相隔几分钟的步程，却像是两个完全不同的世界。这恰恰是诺伊明斯特，乃至整个卢森堡的隐喻：一个不断在历史的层叠废墟上重建，在动荡的地缘政治中寻找平衡，最终将深刻的伤痕转化为文化深度与内在力量的国家。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个地方之所以让人念念不忘，不是因为它有多么无与伦比的华丽装饰（虽然它的巴洛克立面很美），而是因为它那份坦诚的“复杂”。它不试图隐藏自己作为监狱的阴暗过去，也不炫耀自己作为修道院的神圣起源，更不刻意标榜如今文化中心的时髦身份。它让所有这些层次共存，让祈祷与囚禁、绝望与希望、毁灭与重生的声音，在同一片石头墙壁间产生回响。在当今这个常常追求简单标签、非黑即白的世界里，诺伊明斯特教会我们一种更厚重、更包容的视角——真正的力量，不在于忘记过去，而在于有勇气承载全部过去，并依然选择向美、向艺术、向生活敞开大门。每一位热爱深度游的旅人都该来这里，不只是看一座古老的建筑，而是来聆听石头诉说的关于韧性与希望的多声部史诗。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ettelbruck-patton-memorial-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃特尔布吕克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ettelbruck</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/esch-sur-sure-luxembourg" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃施叙尔叙尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Esch-sur-Sûre</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kopstal-travel-guide" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科普斯塔尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kopstal</p>
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
