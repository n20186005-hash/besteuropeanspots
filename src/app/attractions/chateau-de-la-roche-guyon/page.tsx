import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '拉罗什吉永城堡 Château de La Roche-Guyon｜探秘白崖腹地的千年要塞与隆美尔地下指挥所 - 最佳欧洲景点',
  description: '第一眼看到拉罗什吉永，你会怀疑自己走进了一幅超现实的油画。它不像那些突兀地矗立在平原上的城堡，而是从塞纳河畔一道巨大的、泛着象牙白光泽的石灰岩悬崖里“生长”出来的。城堡的塔楼和屋宇仿佛只是这面巨大岩壁谦逊的冠冕，真正的躯体深深埋藏在山体之中。塞纳河在这里拐了一个温柔而坚定的弯，河水是灰绿色的，静静倒',
}

export default function ChateauDeLaRocheGuyonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '法国', href: '/destinations/france' },
            { label: '瓦兹河谷省（法兰西岛大区）', href: '/destinations/france' },
            { label: '拉罗什吉永城堡', href: '/attractions/chateau-de-la-roche-guyon' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`拉罗什吉永城堡・Château de La Roche-Guyon・法国・瓦兹河谷省（法兰西岛大区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一眼看到拉罗什吉永，你会怀疑自己走进了一幅超现实的油画。它不像那些突兀地矗立在平原上的城堡，而是从塞纳河畔一道巨大的、泛着象牙白光泽的石灰岩悬崖里“生长”出来的。城堡的塔楼和屋宇仿佛只是这面巨大岩壁谦逊的冠冕，真正的躯体深深埋藏在山体之中。塞纳河在这里拐了一个温柔而坚定的弯，河水是灰绿色的，静静倒映着白崖与城堡沉默的侧影，空气中混合着河水微腥的水汽、崖壁上野生苔藓的土腥味，以及远处果园飘来的若有若无的花香。一切都安静得只剩下风声和偶尔划过水面的鸟鸣。
当你走近，压迫感与好奇同时袭来。那些看似典雅的窗户下，是粗糙原始的岩壁；平整的花坛下方，隐藏着深不可测的洞口。当地人遛狗会悠闲地走过城堡前的广场，孩子们在古老的悬铃木下嬉戏，仿佛这座庞然大物只是他们后院一个再平常不过的邻居。但当你与咖啡馆老板娘闲聊，她会压低声音告诉你：“下面，很深的地方，是另一个世界。” 这种日常与隐秘、光明与地下的强烈对比，正是它最初始、最扣人心弦的魅力。
进入城堡内部，光线骤然变化。从洒满阳光、装饰着古典油画的沙龙房间，走到一段昏暗的走廊尽头，一扇厚重的门后，可能就连接着通往地心深处的螺旋石阶。空气瞬间变冷，带着岩石特有的、恒久的凉意和一丝若有若无的陈旧气息。你能听到自己的脚步声在狭窄的通道里产生空旷的回响，指尖划过墙壁，是数百年前人工开凿留下的、清晰而粗粝的痕迹。这种物理空间的转换，极其直观地把你从路易十五时代的优雅客厅，拽入了充满计谋与焦虑的二战指挥中心，时光在这里不是线性的，而是垂直堆叠的。
最打动人的，或许是这种“层叠感”。这里没有单一的故事。骑士的铠甲、侯爵夫人的书信、隆美尔指挥部里地图上的箭头、地道里士兵涂鸦的痕迹……所有时代的印记都被这座白垩岩山体忠诚地保存、压缩在一起。它不是一个被供奉在玻璃柜里的博物馆，而是一个依然在呼吸、在诉说的地质生命体。你来，不只是看一座城堡，而是进行一次通往不同历史断层的垂直穿越。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "第一眼看到拉罗什吉永，你会怀疑自己走进了一幅超现实的油画。它不像那些突兀地矗立在平原上的城堡，而是从塞纳河畔一道巨大的、泛着象牙白光泽的石灰岩悬崖里“生长”出来的。城堡的塔楼和屋宇仿佛只是这面巨大岩壁谦逊的冠冕，真正的躯体深深埋藏在山体之中。塞纳河在这里拐了一个温柔而坚定的弯，河水是灰绿色的，静静倒映着白崖与城堡沉默的侧影，空气中混合着河水微腥的水汽、崖壁上野生苔藓的土腥味，以及远处果园飘来的若有若无的花香。一切都安静得只剩下风声和偶尔划过水面的鸟鸣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你走近，压迫感与好奇同时袭来。那些看似典雅的窗户下，是粗糙原始的岩壁；平整的花坛下方，隐藏着深不可测的洞口。当地人遛狗会悠闲地走过城堡前的广场，孩子们在古老的悬铃木下嬉戏，仿佛这座庞然大物只是他们后院一个再平常不过的邻居。但当你与咖啡馆老板娘闲聊，她会压低声音告诉你：“下面，很深的地方，是另一个世界。” 这种日常与隐秘、光明与地下的强烈对比，正是它最初始、最扣人心弦的魅力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入城堡内部，光线骤然变化。从洒满阳光、装饰着古典油画的沙龙房间，走到一段昏暗的走廊尽头，一扇厚重的门后，可能就连接着通往地心深处的螺旋石阶。空气瞬间变冷，带着岩石特有的、恒久的凉意和一丝若有若无的陈旧气息。你能听到自己的脚步声在狭窄的通道里产生空旷的回响，指尖划过墙壁，是数百年前人工开凿留下的、清晰而粗粝的痕迹。这种物理空间的转换，极其直观地把你从路易十五时代的优雅客厅，拽入了充满计谋与焦虑的二战指挥中心，时光在这里不是线性的，而是垂直堆叠的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人的，或许是这种“层叠感”。这里没有单一的故事。骑士的铠甲、侯爵夫人的书信、隆美尔指挥部里地图上的箭头、地道里士兵涂鸦的痕迹……所有时代的印记都被这座白垩岩山体忠诚地保存、压缩在一起。它不是一个被供奉在玻璃柜里的博物馆，而是一个依然在呼吸、在诉说的地质生命体。你来，不只是看一座城堡，而是进行一次通往不同历史断层的垂直穿越。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`拉罗什吉永城堡`} />
                <InfoRow label="英文名称" value={`Château de La Roche-Guyon`} />
                <InfoRow label="正式名称" value={`Château de La Roche-Guyon`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`瓦兹河谷省（法兰西岛大区）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座从12世纪军事前哨演变为18世纪启蒙沙龙，再到20世纪纳粹德国西线防御核心指挥部的层叠史书。`} />
                <InfoRow label="建筑特色" value={`完美与自然地貌融合，下部是凿入百米高白垩岩悬崖的庞大洞穴与地道体系，上部是依山而建的典雅城堡与阶梯式法式花园。`} />
                <InfoRow label="建筑风格" value={`中世纪防御工事与18世纪古典主义庄园建筑的惊人结合。`} />
                <InfoRow label="文化价值" value={`见证了法国贵族社会的兴衰、启蒙思想的传播与二战欧洲战场的决定性时刻，是地质、建筑与军事历史的罕见三维载体。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡主体及花园通常在每年四月初至十一月初开放，具体为周三至周一，上午10点至下午6点（最后入场时间为下午5点15分）。冬季（十一月至次年三月）仅周末开放或完全关闭进行维护，行前务必查阅官网确认。内部地道参观有固定导览团，每日场次有限，强烈建议提前在线预订。节假日开放时间可能调整。`} />
              <InfoRow label="门票价格" value={`标准成人票约12欧元，包含城堡、花园及常设展览。仅参观花园票价约6欧元。地道专项导览团票价约8-10欧元，需额外购买。18岁以下青少年、学生及特定团体享有优惠票价。持有巴黎博物馆通票等可能不适用，请提前核实。官网时常推出家庭套票。`} />
              <InfoRow label="地址" value={`1 Rue de l'Audience, 95780 La Roche-Guyon, France`} />
              <InfoRow label="交通方式" value={`从巴黎出发最为便捷。在巴黎圣拉扎尔火车站乘坐开往鲁昂方向的区域快线列车，在韦尔农站下车，车程约50分钟，班次每小时1-2班。出站后转乘50号或100号公交车（方向拉罗什吉永），约20分钟车程直达村口，步行5分钟至城堡。公交车班次较稀疏，务必提前查好时刻表衔接。自驾是最灵活的方式，从巴黎市中心沿A13/A15高速公路驶出，转入D913公路，约1小时车程，城堡入口处有付费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从塞纳河说起。这条伟大的河流不仅是贸易通道，也是入侵的路径。大约12世纪，某位目光犀利的领主看中了这个河湾处高耸的石灰岩山嘴。在这里建一个哨所，简直是天赐的防御点——背靠无法攀爬的绝壁，俯瞰整个河道，易守难攻。最初的建筑简陋而实用：就是在岩壁上凿出洞穴、架起木制防御工事。拉罗什（岩石）吉永（领主家族名）的名字便由此诞生。在英法百年战争的动荡岁月里，这个岩石要塞多次易主，见证了无数小规模的冲突与对峙，它的石头浸透了中世纪欧洲那种粗粝、直接的地方权力争夺的气息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间的河流静静流淌，城堡的军事重要性逐渐让位于居住的舒适与象征的地位。18世纪，它迎来了辉煌的转变。当时的领主，拉罗什富科家族（没错，就是那个出了著名格言作家的家族）的成员，特别是极具影响力的侯爵夫人，将这里打造成了一个启蒙时代的文化沙龙。她聘请了著名建筑师，在悬崖上方建造了我们现在看到的优雅的古典主义风格城堡主体，并修建了精美的阶梯式法式花园。哲学家、作家、科学家受邀在此聚会，畅谈理性、自然与艺术。你能想象吗？在曾经只有兵器和铠甲回响的岩洞里，如今飘荡着关于卢梭思想的辩论和莫扎特钢琴曲的音符。城堡从一座军事堡垒，蜕变为思想与美的殿堂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的车轮再次剧烈转向。1944年春天，盟军登陆前夕，整个欧洲的命运紧绷如弦。德国陆军元帅隆美尔，被希特勒任命为负责防御法国海岸的“B集团军群”司令。他需要找一个靠近前线（诺曼底）、隐蔽、坚固且通讯便利的指挥部。拉罗什吉永城堡几乎是为这个需求量身定做的：它距离诺曼底海岸仅100多公里，背靠的白垩岩山体能抵御最猛烈的空袭，内部早已存在并可能被德军进一步扩建的庞大地道网络，是绝佳的防空与指挥中心。于是，城堡被德军征用。隆美尔本人频繁在此驻扎，那些曾经举办沙龙的华丽房间，挂满了巨大的军事地图；幽深的地道里，电报机滴滴作响，军官们神色凝重地穿梭。城堡成了纳粹德国“大西洋壁垒”防御体系的大脑之一。据说，隆美尔常常在塞纳河边的花园里独自踱步，思考着那场即将到来的、他内心或许已预见到失败结局的战役。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战结束，城堡回归法国，但已伤痕累累，一度被遗弃。直到本世纪初，经过大规模、精心的修复，它才向公众揭开面纱。修复者没有抹去任何时代的痕迹。你可以看到18世纪彩绘的天花板，也能看到二战时期简陋的砖墙隔断和锈蚀的通风管道。最令人震撼的是对地下世界的系统性发掘和开放。那条长达数百米、深入山腹的地道，如今在安全的灯光引导下，向游客完整展现。冰冷的空气中，当年用粉笔写在墙上的方向箭头、房间编号依然清晰可见，那种临战前的压抑与仓促，穿越数十年的时光，直接击中来访者的心房。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天的时间进行深度探索，最佳抵达时间是上午9点半左右，城堡一开门就进去。这样你能在相对清净的环境中感受地面建筑的氛围，并确保能赶上上午或中午的地道导览团（这是精华，绝对不能错过）。整体节奏宜慢不宜快，遵循“由上至下，由明至暗”的逻辑：先参观上部城堡的房间和展览，建立历史框架和审美印象；然后在花园放松，从外部欣赏城堡与悬崖的关系；最后参加地道导览，完成这次历史穿越的“压轴戏”。下午光线柔和时，是环绕城堡外围和河边步道拍照的黄金时间。这样的安排能让你层层递进地理解这个地方的复杂层次。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`地道导览团是核心体验，务必在官网提前数天甚至数周预订，现场几乎不可能有空位。参观地道部分温度常年只有12-14度，且阶梯陡峭潮湿，务必穿防滑且保暖的鞋子，带一件薄外套。城堡和花园的参观区域不小，加上地道导览全程步行距离较长，请预留至少4-5小时，保持轻松心态，这不是一个可以匆匆打卡的地方。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`早晨趁着薄雾未散时抵达，从村庄的石板路拾级而上，第一眼看到城堡与巨岩合体的庞然身影倒映在宁静的塞纳河中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在城堡入口购票后先别急着下去，花一小时慢慢逛完二层和三层的贵族套房，留意那些精致家具与墙上二战时期地图并置的奇异对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过城堡底层的拱廊门洞，走进被高大黄杨树篱分割的法式阶梯花园，一直走到最上层的观景平台，回望城堡如何“坐”在悬崖的肩膀上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`提前预约并准时加入地下指挥所导览团，跟随向导的手电光束，沿着潮湿的螺旋阶梯深入山腹，感受温度骤降和空气变重。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在地道最深处一个空旷的“大厅”里驻足，关掉手电筒片刻，体验绝对的黑暗与寂静，想象1944年春天这里充斥的电台噪音和紧张低语。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`导览结束后回到阳光之下，到城堡河对岸的小径上散步，从最佳角度凝视这座从岩壁中诞生的建筑奇观。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间充裕，拜访村庄里那家名为“隆美尔角落”的老书店，店主收藏了大量关于本地历史和二战军事的珍贵旧书与照片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`日落时分，在城堡脚下临河的露天咖啡馆点一杯苹果酒，看夕阳给白色的悬崖和古老的塔楼镀上温暖的金红色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`塞纳河对岸的D100公路沿线`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时段，将蜿蜒的河流、绿色的河岸、白色的悬崖以及城堡的塔楼一同纳入取景框，构成一幅完美的地理与建筑剖面图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡主入口前的广场`}</h4>
                  <p className="text-sm text-gray-700">{`利用清晨或傍晚的斜射光线，拍摄城堡石墙与背后巨岩的质感对比，让人物以小比例出现在画面下方，突出建筑的雄伟。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`法式花园最上层的平台`}</h4>
                  <p className="text-sm text-gray-700">{`以修剪整齐的树篱作为引导线，将视线引向下方层层叠叠的花坛和尽头的城堡主体，构图严谨而富有纵深感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`地下指挥所地道入口内部`}</h4>
                  <p className="text-sm text-gray-700">{`在导览允许且不影响他人的情况下，利用地道内微弱的灯光，拍摄深邃的、消失在黑暗中的隧道轮廓，营造强烈的神秘与历史感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡西侧塔楼的螺旋石梯`}</h4>
                  <p className="text-sm text-gray-700">{`从楼梯底部向上仰拍，捕捉石阶盘旋上升的优美曲线和从高处小窗透入的一束“天光”，极具戏剧性。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部房间和地下指挥所有些区域明确禁止使用闪光灯和三脚架，请务必遵守规定，保护脆弱的展品和历史痕迹。拍摄村庄和周边风景时，请尊重当地居民隐私，避免将私人住宅庭院作为主要背景。地道内光线极暗，建议使用大光圈镜头和高感光度性能好的相机，或干脆用眼睛和心灵去记录那份独特的氛围。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`静谧河岸之家`}</h4>
                  <p className="text-sm text-blue-800">{`位于城堡所在村庄里，由一栋18世纪石屋改造的精品民宿，房间窗户正对塞纳河与城堡侧面，主人会为你准备装满当地食材的野餐篮。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`韦尔农古镇中心酒店`}</h4>
                  <p className="text-sm text-green-800">{`距离城堡约20分钟车程的周边小镇上，一家三星级舒适酒店，性价比极高，方便探索更广阔的诺曼底门户地区，晚上可以在古镇鹅卵石街道散步。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐秘葡萄园旅馆`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在城堡后方山丘上的独立农庄，被私人葡萄园环绕，提供自酿的苹果酒和葡萄酒，在房间阳台可以看到城堡塔尖和广阔的河谷全景。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`巴黎左岸历史酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果选择巴黎作为基地，推荐塞纳河左岸一家充满文学气息的家庭式小酒店，搭乘早班火车前来一日游，晚上回到巴黎享受法式夜生活，体验古今穿梭的对比乐趣。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "拉罗什吉永 village 内的住宿选择非常有限且极其抢手，尤其是在旅游旺季和周末，必须提前数月预订。如果订不到，选择邻近的韦尔农或甚至以巴黎为基地都是更实际的选择。村庄治安极好，夜晚非常安静，是逃离城市喧嚣的绝佳去处。预订时不妨询问房东是否了解关于城堡不为人知的小故事，他们往往是活的指南书。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开拉罗什吉永很久以后，闭上眼睛，我依然能清晰感受到那种触觉的记忆：指尖划过冰冷粗糙的岩壁，然后是阳光下花园里温暖光滑的石栏杆；鼻腔里先是一阵地道深处陈年的、带着尘土味的凉气，接着是河边青草与河水交织的清新气息。这座城堡教给我的，是历史并非一条平铺直叙的线，而是一座可以垂直挖掘的深渊。在同一经纬度的坐标上，不同的时代如何像地质层一样沉积、挤压、变形，最终呈现出今天这样令人惊叹的断面。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求速度、喜欢扁平化叙事的世界里，拉罗什吉永提供了一种珍贵的“深度游”范式。它要求你慢下来，不仅仅用眼睛看，更要用手去触摸，用脚去丈量从上到下的高度差，用心去感受光明与黑暗、优雅与粗粝、沙龙笑语与战争密语的强烈反差。它不是一个被完美修复的、单一主题的景点，而是一个依然留有疤痕、充满复杂张力、邀请你参与解读的活的历史现场。每一位不满足于表面观光，渴望触摸时间纹理、聆听历史多重奏的旅人，都应该来这里，进行一次真正意义上的“地下”探索。这趟旅程，最终探访的不仅是岩石中的迷宫，更是我们自身对时间、战争、文明与记忆的深层理解。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chateau-de-meillant" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅扬城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Meillant</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/brantome-venice-of-perigord" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩里戈尔的布朗托姆（法国威尼斯）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Brantôme</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-malbrouck" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Malbrouck</p>
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
