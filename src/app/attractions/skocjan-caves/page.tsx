import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '什科茨扬溶洞 Škocjan Caves｜探秘地下大峡谷，行走在雷鸣河流之上的天然奇观 - 最佳欧洲景点',
  description: '朋友，想象一下，当斯洛文尼亚和煦的阳光与喀斯特高原的清风被你留在身后，你跟着向导，低头穿过一道不起眼的岩缝入口。瞬间，一股裹挟着万年水汽的凉意扑面而来，像一块湿润的丝绒拂过你的脸。光线骤然消失，取而代之的是规划好的、柔和的照明灯，它们不是为了炫耀，而是小心翼翼地勾勒出脚下湿滑的木栈道轮廓。你的眼睛需',
}

export default function SkocjanCavesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '斯洛文尼亚', href: '/destinations/slovenia' },
            { label: '什科茨扬溶洞', href: '/attractions/skocjan-caves' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`什科茨扬溶洞・Škocjan Caves・斯洛文尼亚・滨海-喀斯特统计区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`朋友，想象一下，当斯洛文尼亚和煦的阳光与喀斯特高原的清风被你留在身后，你跟着向导，低头穿过一道不起眼的岩缝入口。瞬间，一股裹挟着万年水汽的凉意扑面而来，像一块湿润的丝绒拂过你的脸。光线骤然消失，取而代之的是规划好的、柔和的照明灯，它们不是为了炫耀，而是小心翼翼地勾勒出脚下湿滑的木栈道轮廓。你的眼睛需要几秒钟适应这地心世界的昏暗，耳朵却先一步被唤醒——一种低沉、持续、来自大地深处的轰鸣，隐隐约约，无处不在。那是雷卡河，一条在地下奔腾了数百万年的河流，它在你看不见的深渊里咆哮。
你沿着栈道缓缓下行，空气越来越凉，弥漫着一种干净的、带着矿物质和泥土气息的味道。身边的岩壁在灯光下露出真容，那是时间的年轮，一层层钙化的沉积如同巨大的帷幕，泛着象牙白、赭石黄和铁锈红的微妙光泽。偶尔，一滴冰凉的水珠从近百米高的洞顶落下，精准地砸在你的脖颈，激起一阵小小的战栗，这是洞穴在对你轻声问候。你开始意识到，你并非在参观一个“死”的景点，而是闯入了一个仍在呼吸、生长、流淌的活着的巨人体内。
然后，道路一转，豁然开朗，你会经历此生罕见的心灵震撼。你站在一座人工搭建的、看似纤细的桥梁上，而桥下，是一个巨大到让你瞬间失语的空洞。这就是默哈洞，地下峡谷的主厅。灯光无法照亮它的全部，只能让你瞥见对岸遥不可及的岩壁，以及脚下深不可测的黑暗。那轰鸣的河水声在这里被放大了无数倍，如同地心传来的雷声，回荡在这个巨大的天然共鸣箱里。站在桥中央，扶着冰冷的栏杆向下望，眩晕感与敬畏感会同时攫住你。你仿佛漂浮在宇宙中一个未知的星球内部，人类的尺度在这里彻底失效，只剩下对自然鬼斧神工最纯粹的震撼。
当你最终从另一端的出口重返地面，阳光会显得格外刺眼和温暖。你会忍不住回头，看向那个吞没了光线与声音的静谧入口，心中充满一种奇异的疏离感。刚刚经历的那一个多小时，仿佛是一场穿越到地球骨骼深处的梦境。什科茨扬不属于我们日常的维度，它是一个关于深度、时间与原始力量的永恒故事。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "朋友，想象一下，当斯洛文尼亚和煦的阳光与喀斯特高原的清风被你留在身后，你跟着向导，低头穿过一道不起眼的岩缝入口。瞬间，一股裹挟着万年水汽的凉意扑面而来，像一块湿润的丝绒拂过你的脸。光线骤然消失，取而代之的是规划好的、柔和的照明灯，它们不是为了炫耀，而是小心翼翼地勾勒出脚下湿滑的木栈道轮廓。你的眼睛需要几秒钟适应这地心世界的昏暗，耳朵却先一步被唤醒——一种低沉、持续、来自大地深处的轰鸣，隐隐约约，无处不在。那是雷卡河，一条在地下奔腾了数百万年的河流，它在你看不见的深渊里咆哮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你沿着栈道缓缓下行，空气越来越凉，弥漫着一种干净的、带着矿物质和泥土气息的味道。身边的岩壁在灯光下露出真容，那是时间的年轮，一层层钙化的沉积如同巨大的帷幕，泛着象牙白、赭石黄和铁锈红的微妙光泽。偶尔，一滴冰凉的水珠从近百米高的洞顶落下，精准地砸在你的脖颈，激起一阵小小的战栗，这是洞穴在对你轻声问候。你开始意识到，你并非在参观一个“死”的景点，而是闯入了一个仍在呼吸、生长、流淌的活着的巨人体内。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，道路一转，豁然开朗，你会经历此生罕见的心灵震撼。你站在一座人工搭建的、看似纤细的桥梁上，而桥下，是一个巨大到让你瞬间失语的空洞。这就是默哈洞，地下峡谷的主厅。灯光无法照亮它的全部，只能让你瞥见对岸遥不可及的岩壁，以及脚下深不可测的黑暗。那轰鸣的河水声在这里被放大了无数倍，如同地心传来的雷声，回荡在这个巨大的天然共鸣箱里。站在桥中央，扶着冰冷的栏杆向下望，眩晕感与敬畏感会同时攫住你。你仿佛漂浮在宇宙中一个未知的星球内部，人类的尺度在这里彻底失效，只剩下对自然鬼斧神工最纯粹的震撼。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你最终从另一端的出口重返地面，阳光会显得格外刺眼和温暖。你会忍不住回头，看向那个吞没了光线与声音的静谧入口，心中充满一种奇异的疏离感。刚刚经历的那一个多小时，仿佛是一场穿越到地球骨骼深处的梦境。什科茨扬不属于我们日常的维度，它是一个关于深度、时间与原始力量的永恒故事。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`什科茨扬溶洞`} />
                <InfoRow label="英文名称" value={`Škocjan Caves`} />
                <InfoRow label="正式名称" value={`Škocjan Caves`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`滨海-喀斯特统计区`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`“喀斯特”地貌的命名之源与研究圣地，联合国教科文组织世界自然与文化双重遗产。`} />
                <InfoRow label="建筑特色" value={`非人造建筑，而是由大自然“建造”的、拥有全球最大地下峡谷之一的宏伟溶洞系统。`} />
                <InfoRow label="建筑风格" value={`无特定建筑风格，是典型的喀斯特溶洞地质奇观。`} />
                <InfoRow label="文化价值" value={`见证了人类对自然敬畏与探索的漫长历史，是地质学活教科书与斯洛文尼亚民族精神中的自然图腾。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`溶洞参观仅限由专业导游带领的团队进行。开放时间随季节变化极大：夏季（4月至10月）通常每天有多场英语导览团，最早从上午10点开始，最晚入场时间约为下午5点；冬季（11月至3月）场次大幅减少，通常每天只有1-2场，且强烈建议提前预订。具体日期和场次需在官网提前查询并预约，逢主要节假日可能关闭。`} />
              <InfoRow label="门票价格" value={`成人票约为24欧元。学生、青少年及老年人享有折扣价，约为18欧元。家庭套票有优惠。门票价格已包含专业导游费用。请注意，洞内部分路段险峻，5岁以下儿童不得入内。`} />
              <InfoRow label="地址" value={`Škocjan Caves, Slovanj Gradec 12, 6215 Divača, Slovenia`} />
              <InfoRow label="交通方式" value={`最便捷的方式是自驾，从首都卢布尔雅那出发，沿A1高速公路向科佩尔方向行驶，在Divača出口下，随后跟随棕色旅游指示牌“Škocjanske jame”行驶约5分钟即可到达游客中心，全程约1小时。若使用公共交通，可从卢布尔雅那中央巴士站乘坐前往Divača的巴士，车程约1.5小时，班次有限需提前查好时刻表；或从卢布尔雅那火车站乘坐火车至Divača站，车程约1小时，出站后步行约3公里（上坡路）或乘坐预约的接驳车前往游客中心。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲什科茨扬的故事，我们得先聊聊“喀斯特”这个词本身。你或许不知道，如今全球通用的“喀斯特”地貌术语，就源于斯洛文尼亚的这片高原（当地称“Kras”）。而什科茨扬溶洞，正是这片高原上最璀璨、也最神秘的明珠。早在史前时代，洞口的区域就有人类活动的痕迹，他们或许在洞口躲避风雨，敬畏地看着这深不见底的地下入口，想象着里面居住着神灵或巨龙。但对洞穴深处真正的探索，要等到人类好奇心与勇气并存的近代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪初，随着地理学与地质学的兴起，一些勇敢的探险家带着简单的绳索和油灯，开始尝试深入这条地下雷卡河。记录中最早的深入探索在1819年，当地的一位教区牧师下到了第一个大厅。但真正的突破发生在1884年，一位名叫伊万·舒什特什的工程师和地质学家，组织了一次大规模的勘探。他们克服了黑暗、险滩和深潭，首次系统地测绘了部分洞穴系统，并发现了那个令人叹为观止的大峡谷。你可以想象，当他们的灯火第一次照亮默哈洞那巨大的穹顶时，心中的狂喜与恐惧该是何等强烈。这次探险，让什科茨扬从地方奇观一跃成为世界级的地质发现。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，自然的秘境也难免卷入人世的纷争。在两次世界大战期间，这个深邃、隐蔽的洞穴系统曾扮演过特殊的角色。有记载称，在动荡的年代，洞穴的部分干燥区域曾被当地人用作躲避战火的临时避难所，储存过珍贵的物资。冰冷的岩壁见证了人类的恐惧与求生欲，轰鸣的河水也掩盖过不安的耳语。这给洞穴增添了一层沉静而悲怆的历史回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "20世纪，科学的探索继续深入。人们发现，这条地下雷卡河最终在约34公里外的意大利边境处涌出地面，注入大海。整个水系网络复杂得超乎想象。为了保护这份独一无二的自然遗产，斯洛文尼亚人（当时还属于南斯拉夫）在1986年成功将其申报为联合国教科文组织世界遗产，而且是罕见的“自然与文化双重遗产”，肯定了它不仅是地质奇迹，也承载了人类与之互动的漫长历史。如今，洞内精心设计的步道和桥梁，既是为了游客安全，也最大限度地减少了对脆弱生态环境的干扰。向导们不仅是领路人，更是守护者，他们会轻声提醒你不要触摸岩壁，因为指尖的油脂会阻碍那些需要数百年才能生长一厘米的钟乳石继续呼吸。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，你今天走过的每一步，其实都踩在数百万年的地质演变、两百年的探险史诗、以及斯洛文尼亚人对自然深深敬畏的历史之上。这条地下河流从未停歇，它冲刷出的不仅是岩石，还有我们对这个星球认知的边界。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的什科茨扬之旅是一场精心策划的地心穿越。强烈建议预约上午或中午的导览团，避开下午可能的人流高峰，并且给自己留出足够的时间在游览前后参观优秀的游客中心展览。整个导览步行路程约3公里，耗时约1.5至2小时，全程需上下楼梯和行走在湿滑的栈道上，节奏不算快，但需要一定的体力。路线是单向的，从入口进入，从另一端的出口出来，最后会乘坐穿梭巴士返回起点游客中心。这样的安排让你能完整感受从进入地心到重返人间的叙事感。洞内恒温约12°C，无论外面多热，都要带件外套。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿防滑、耐走的封闭鞋子，洞内栈道常年湿滑，高跟鞋或凉鞋是绝对禁止的。
洞内严禁触摸岩壁、钟乳石，也禁止丢弃任何物品，请严格遵守向导的指令，保护这脆弱的自然遗产。
摄影可以，但禁止使用闪光灯和三脚架（以免阻碍狭窄通道），且某些路段出于安全考虑可能不允许拍照。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在游客中心观看简短的介绍影片，让心灵先对即将面对的地下世界规模和形成过程有个震撼的预习。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随向导从入口缓缓下行，让眼睛适应昏暗，用耳朵捕捉越来越清晰的雷卡河轰鸣，并触摸洞口的空气感受温度的骤降。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个洞厅仰望那些宛如巨人风琴管的巨大钟乳石柱，看灯光如何在水面上投下摇曳的倒影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走上横跨默哈洞大峡谷的“切尔诺夫桥”，停在桥中央，屏住呼吸，感受脚下深渊传来的震动与声响，体验绝对的敬畏时刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过峡谷后，在相对静谧的通道里观察岩壁上精致如蕾丝、如瀑布的流石和卷曲石，感受水滴创造的微观艺术。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着奔腾的雷卡河畔栈道行走一段，看地下河水在灯光下泛着翡翠般的光泽，以极快的速度消失在更深的黑暗中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最终从出口隧道重返天日，在炫目的阳光中回望那个静谧的洞口，完成一次完整的心灵过渡。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘坐接驳车返回游客中心时，别忘了从高处最后俯瞰一次溶洞所在的葱郁石灰岩山谷地表。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`切尔诺夫桥上拍摄峡谷全景`}</h4>
                  <p className="text-sm text-gray-700">{`站在桥靠近入口一侧的三分之一处，将相机镜头稍微向上仰，可以同时捕捉到桥梁的线条、对面巨大的岩壁和深不见底的黑暗，构图极具冲击力，可利用栏杆作为引导线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`默哈洞观景台俯视峡谷`}</h4>
                  <p className="text-sm text-gray-700">{`在过桥后第一个观景台，将相机紧贴防护玻璃，长时间曝光拍摄下方黑暗中隐约可见的雷卡河白色浪花轨迹，能拍出地心河流的动态魔力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`出口前长廊的钟乳石特写`}</h4>
                  <p className="text-sm text-gray-700">{`在游览尾声、光线相对稳定的区域，寻找一簇形态独特的钟乳石或石笋，利用洞内的固定灯光作为侧光或逆光，拍摄它们晶莹剔透的质感和万千变化的形态。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`重返地面时的回头一瞥`}</h4>
                  <p className="text-sm text-gray-700">{`走出出口隧道后，立刻转身，用广角镜头拍摄那镶嵌在绿色山坡中的幽深洞口，将充满生机的植被与神秘入口纳入同一画面，形成强烈对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`洞内光线极度昏暗且复杂，建议使用大光圈镜头和高感光度性能好的相机，手机拍摄效果非常有限。`}</li>
                <li>• {`尊重规定，绝对不要使用闪光灯，它不仅会破坏其他游客的体验，强烈的光线更会对洞穴内长期适应黑暗环境的微生物生态系统造成伤害。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`生态特色之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在溶洞附近村庄由传统石屋改造的民宿，夜晚极其静谧，可以清晰地听到田野的风声，主人通常会端上自家酿制的蜂蜜和草药茶。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`小镇生活体验`}</h4>
                  <p className="text-sm text-green-800">{`选择距离溶洞约15分钟车程的迪瓦恰镇上的家庭旅馆，方便搭乘公共交通，傍晚可以散步去镇上的小餐馆，和本地人一起享用一顿地道的喀斯特晚餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端自然静谧`}</h4>
                  <p className="text-sm text-yellow-800">{`预订坐落在喀斯特高原葡萄园之间的精品庄园酒店，房间拥有开阔的视野，在露台上就能欣赏到典型的石灰岩地貌日落，并品尝产区特有的雷弗斯科红酒。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`海滨联动选择`}</h4>
                  <p className="text-sm text-purple-800">{`如果不介意半小时车程，可以住到斯洛文尼亚短小的海岸线上，比如皮兰或科佩尔，白天探洞，晚上享受亚得里亚海的海风与海鲜，体验从地心到海洋的奇妙组合。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）是斯洛文尼亚旅游旺季，溶洞周边住宿非常紧张，务必提前数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "该地区治安非常好，民风淳朴，但乡村地区夜间几乎没有路灯，自驾的话建议天黑前返回住处。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从什科茨扬出来很久以后，那种来自地心的轰鸣，似乎还在耳膜深处留下了一丝细微的震颤。它不像参观一座辉煌的宫殿或教堂，带给你的是人类才智的巅峰感叹；它带来的，是一种近乎本能的、对原始自然力的谦卑。在那个巨大的黑暗空间里，你会清晰地意识到，我们日常纠结的烦恼、我们建造的都市文明，在一条流淌了数百万年的河流和一座持续生长的山脉面前，是多么短暂和微小。它用一种无声却雷霆万钧的方式，重置了你的内心尺度。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都被加速、被扁平化的时代，什科茨扬提供了一种珍贵的“深度体验”——不仅是地理意义上的深入地下，更是精神意义上的沉潜。它强迫你慢下来，在昏暗光线中小心行走，专注地听、仔细地看、真切地感受温度与湿度的变化。这是一次真正的数字排毒，因为在那里，手机没有信号，你的全部感官只能交给这个古老而鲜活的世界。所以，如果你渴望一场不止于眼睛，更能触及心灵和骨骼的旅行，那么请一定要来斯洛文尼亚，走下这个洞口。它会告诉你，在我们熟悉的地表世界之下，还有一个如此壮阔、轰鸣、而又沉默如谜的平行宇宙。这不仅仅是一次观光，更像是一次对地球生命力的庄严朝圣。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ptuj-castle-slovenia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普图伊城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ptuj Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/piran-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    皮
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">皮兰老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Piran</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/predjama-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普列加马城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Predjama Castle</p>
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
