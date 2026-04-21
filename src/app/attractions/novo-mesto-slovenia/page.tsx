import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '诺沃梅斯托 Novo Mesto｜探访克尔卡河优雅回湾与史前琥珀宝藏的静谧古城 - 最佳欧洲景点',
  description: '说实话，在来到诺沃梅斯托之前，我对它的想象是模糊的。但当你真正站在格姆山（Grm Hill）的观景台，第一眼看到它的那一刻，所有模糊都瞬间聚焦，化为一声不由自主的惊叹。脚下，翠绿色的克尔卡河以一种近乎艺术的、极其温柔的姿态，画出了一个无比完美的“Ω”形回湾，而整座老城，就像是被这个河湾小心翼翼地捧在',
}

export default function NovoMestoSloveniaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '诺沃梅斯托', href: '/attractions/novo-mesto-slovenia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`诺沃梅斯托・Novo Mesto・斯洛文尼亚・诺沃梅斯托`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，在来到诺沃梅斯托之前，我对它的想象是模糊的。但当你真正站在格姆山（Grm Hill）的观景台，第一眼看到它的那一刻，所有模糊都瞬间聚焦，化为一声不由自主的惊叹。脚下，翠绿色的克尔卡河以一种近乎艺术的、极其温柔的姿态，画出了一个无比完美的“Ω”形回湾，而整座老城，就像是被这个河湾小心翼翼地捧在手心的一枚珍宝。红瓦屋顶层层叠叠，从河边一直蔓延到山丘顶端，教堂的尖塔优雅地刺破天际线。那种被水流全然拥抱的感觉，宁静、受庇护，充满了地理上的诗意，是我在欧洲其他临水古城很少感受到的独特氛围。
走下观景台，穿过桥，真正进入老城，又是另一番细腻的体验。脚下的鹅卵石路面被岁月打磨得光滑如镜，倒映着两旁蜂蜜色、淡粉色和鹅黄色的巴洛克式建筑立面。空气里有刚烘焙好的波提察甜卷的黄油香，混合着从咖啡馆飘出的咖啡醇香。这里的节奏是慢的，你会看到老爷爷们在主广场的长椅上晒太阳、读报，主妇们提着编织篮从市场出来，互相用斯洛文尼亚语拉着家常。它不是为游客搭建的舞台，而是一个活生生的、呼吸着的家园。它的核心魅力，就在于这种“宜居”的宁静感与脚下沉睡的惊天历史之间形成的奇妙张力——你漫步的寻常街道之下，可能就沉睡着两千多年前酋长的华丽墓穴。
而揭开这层历史面纱的钥匙，就在多莱尼斯博物馆里。那里珍藏的，是让考古学界心跳加速的宝物：来自哈尔施塔特文化时期（公元前8-6世纪）的琥珀首饰和玻璃珠串。想象一下，在铁器时代，来自波罗的海的琥珀和来自地中海的玻璃制造技术，竟在这条克尔卡河的回湾处交汇，被精心制作成项链、胸针，陪伴着地位崇高的逝者长眠。当你在柔和的博物馆灯光下，近距离凝视那些金黄色的琥珀，它们仿佛还带着远古森林的树脂气息，内部封存的气泡像是时间的眼睛；那些色彩斑斓的玻璃珠，蓝如亚得里亚海，红如落日，工艺之精巧，让你瞬间与数千年前的工匠和佩戴者产生了穿越时空的连接。
所以，诺沃梅斯托最打动人的，正是这种双重性。表面上，它是一座风景如画、生活气息浓厚的慵懒河边小镇；本质上，它却是打开东南欧史前文明的一把关键钥匙。这种日常与神圣、当下与远古的和谐共存，让每一次转角都充满发现的惊喜。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，在来到诺沃梅斯托之前，我对它的想象是模糊的。但当你真正站在格姆山（Grm Hill）的观景台，第一眼看到它的那一刻，所有模糊都瞬间聚焦，化为一声不由自主的惊叹。脚下，翠绿色的克尔卡河以一种近乎艺术的、极其温柔的姿态，画出了一个无比完美的“Ω”形回湾，而整座老城，就像是被这个河湾小心翼翼地捧在手心的一枚珍宝。红瓦屋顶层层叠叠，从河边一直蔓延到山丘顶端，教堂的尖塔优雅地刺破天际线。那种被水流全然拥抱的感觉，宁静、受庇护，充满了地理上的诗意，是我在欧洲其他临水古城很少感受到的独特氛围。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走下观景台，穿过桥，真正进入老城，又是另一番细腻的体验。脚下的鹅卵石路面被岁月打磨得光滑如镜，倒映着两旁蜂蜜色、淡粉色和鹅黄色的巴洛克式建筑立面。空气里有刚烘焙好的波提察甜卷的黄油香，混合着从咖啡馆飘出的咖啡醇香。这里的节奏是慢的，你会看到老爷爷们在主广场的长椅上晒太阳、读报，主妇们提着编织篮从市场出来，互相用斯洛文尼亚语拉着家常。它不是为游客搭建的舞台，而是一个活生生的、呼吸着的家园。它的核心魅力，就在于这种“宜居”的宁静感与脚下沉睡的惊天历史之间形成的奇妙张力——你漫步的寻常街道之下，可能就沉睡着两千多年前酋长的华丽墓穴。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而揭开这层历史面纱的钥匙，就在多莱尼斯博物馆里。那里珍藏的，是让考古学界心跳加速的宝物：来自哈尔施塔特文化时期（公元前8-6世纪）的琥珀首饰和玻璃珠串。想象一下，在铁器时代，来自波罗的海的琥珀和来自地中海的玻璃制造技术，竟在这条克尔卡河的回湾处交汇，被精心制作成项链、胸针，陪伴着地位崇高的逝者长眠。当你在柔和的博物馆灯光下，近距离凝视那些金黄色的琥珀，它们仿佛还带着远古森林的树脂气息，内部封存的气泡像是时间的眼睛；那些色彩斑斓的玻璃珠，蓝如亚得里亚海，红如落日，工艺之精巧，让你瞬间与数千年前的工匠和佩戴者产生了穿越时空的连接。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，诺沃梅斯托最打动人的，正是这种双重性。表面上，它是一座风景如画、生活气息浓厚的慵懒河边小镇；本质上，它却是打开东南欧史前文明的一把关键钥匙。这种日常与神圣、当下与远古的和谐共存，让每一次转角都充满发现的惊喜。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`诺沃梅斯托`} />
                <InfoRow label="英文名称" value={`Novo Mesto`} />
                <InfoRow label="正式名称" value={`Novo Mesto`} />
                <InfoRow label="国家" value={`斯洛文尼亚`} />
                <InfoRow label="城市" value={`诺沃梅斯托`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛文尼亚东南部历史悠久的核心，考古学上以“克尔卡河回湾文明”及丰富的哈尔施塔特时期墓葬宝藏而闻名于世。`} />
                <InfoRow label="建筑特色" value={`一座被克尔卡河U形回湾温柔环抱的山丘之城，老城建筑依山势层叠错落，形成天然剧场般的独特景观。`} />
                <InfoRow label="建筑风格" value={`多元融合的风格拼图，从哥特式教堂的基石到巴洛克立面的辉煌，再到新艺术运动建筑的精致点缀，共同诉说着不同时代的故事。`} />
                <InfoRow label="文化价值" value={`一座活生生的地层博物馆，从史前琥珀之路的重要枢纽，到中世纪自治城镇，再到现代区域文化中心，文化层累积丰厚而清晰。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城市公共空间全天开放。多莱尼斯博物馆（Dolenjska Museum）开放时间：夏季（6月至9月）周二至周日 10:00-18:00，周一闭馆；冬季（10月至5月）周二至周日 10:00-17:00，周一闭馆。圣尼古拉斯教堂（St. Nicholas‘ Church）通常每日9:00-17:00开放，但午间（12:00-14:00）可能有短暂关闭，周日礼拜期间游客需保持安静。具体节日安排建议提前查阅官网。`} />
              <InfoRow label="门票价格" value={`多莱尼斯博物馆常设展览门票约8欧元，包含特展的通票约12欧元。学生、老人及团体享有折扣优惠。圣尼古拉斯教堂免费进入，但欢迎自愿捐赠以支持维护。城市导览步行游约15欧元/人，需提前预约。`} />
              <InfoRow label="地址" value={`Glavni trg 1, 8000 Novo Mesto, Slovenia`} />
              <InfoRow label="交通方式" value={`从卢布尔雅那约热·普奇尼克机场出发，最便捷的方式是乘坐出租车或提前预订的接驳车，车程约1小时15分钟，费用约80-100欧元。公共交通：先乘坐机场巴士到卢布尔雅那中央巴士站，换乘前往诺沃梅斯托的长途巴士，班次频繁，约每1-1.5小时一班，总行程约1小时45分钟。从卢布尔雅那火车站也可乘坐火车抵达诺沃梅斯托，班次较少但沿途风景优美，约1小时30分钟。自驾则沿A2高速公路转至诺沃梅斯托出口，非常方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲诺沃梅斯托的故事，我们必须把时针拨回到将近三千年前。那时，罗马帝国尚未崛起，阿尔卑斯山以北的广袤土地上，活跃着一个被称为“哈尔施塔特文化”的社群，他们精于冶铁、贸易和复杂的丧葬仪式。克尔卡河这条蜿蜒的水道，成为了连接北欧与南欧贸易网络的生命线。而诺沃梅斯托所在的这个天然河湾，因其易守难攻的地形和便捷的水陆交通，顺理成章地成为了一个重要的定居点和权力中心。考古学家在这里发现了大量贵族墓葬，墓主人身边陪葬着令人瞠目的财富：不仅有本地锻造的精美铁器，更有来自遥远北方的琥珀和来自南方地中海世界的玻璃与青铜器。这说明，早在公元前，这里的酋长或贵族就已经融入了一个横跨欧洲的奢侈品交换网络，这个河湾小镇，是史前“全球化”贸易的一个耀眼节点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转，中世纪来临。我们今天看到的城市雏形，正式奠基于1365年3月7日，由奥地利哈布斯堡王朝的鲁道夫四世公爵颁发特许状建立，并被命名为“Rudolfswerth”（鲁道夫之岛），这个名字生动地反映了它被河水环绕的地理特征。它被规划为一个典型的中世纪设防城镇，城墙沿河湾而建，中心是主广场，一切行政与商业活动围绕其展开。在奥斯曼土耳其帝国不断威胁欧洲东南部的动荡岁月里，这道河湾与城墙为居民提供了宝贵的安全感。城市在15世纪获得了铸币权，经济逐渐繁荣，哥特式的圣尼古拉斯教堂开始兴建，成为城市的信仰与精神支柱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "16世纪是诺沃梅斯托的“黄金时代”。得益于相对和平的环境和手工业、贸易的发展，城市积累了财富，建筑面貌也为之改变。许多原本朴素的市民房屋被改建或重建，拥有了华丽的文艺复兴晚期或巴洛克风格的外立面，那些精美的门楣、壁画和凸窗，至今仍装饰着主广场周围的建筑。同时，它也成为斯洛文尼亚文化复兴的重要摇篮之一，当地的学者和神职人员致力于推动斯洛文尼亚语言文字的使用和发展。然而，历史并非一帆风顺，17世纪，一场大火几乎吞噬了半个城市，但坚韧的市民又在灰烬中将其重建，并赋予了它更统一的巴洛克风貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪，随着铁路的到来，工业化的春风吹到了克尔卡河畔。城墙被部分拆除，城市开始向河湾以外的平原地区扩展，出现了工厂、火车站和新的住宅区。新艺术运动（Art Nouveau）的风格也悄然登陆，为城市添加了几笔优雅飘逸的曲线。但与此同时，老城的心脏——那个河湾环绕的山丘部分——却奇迹般地保留了中世纪的街道格局和宁静的气质，仿佛时间在这里特意放慢了脚步。两次世界大战给城市带来了创伤，但战后的诺沃梅斯托迅速恢复了活力，并找到了自己新的身份定位：不再是边境要塞，而是下卡尼奥拉地区的行政、经济和文化中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而真正让诺沃梅斯托再次轰动世界的，是20世纪中后期持续进行的考古发掘。当工人们在城市附近的山丘进行施工时，铁锹意外地触碰到了沉睡的远古辉煌。系统性的考古工作揭示了一个庞大的哈尔施塔特时期墓地，出土了超过600座墓葬，其中许多陪葬品之丰富、工艺之精美，彻底改变了学界对这片地区史前文明程度的认知。那些琥珀和玻璃，不再是冰冷的文物，而是变成了讲述权力、信仰、审美和远距离交流的生动语言。从此，诺沃梅斯托的名字，便与“琥珀宝藏”和“回湾文明”紧紧联系在了一起，完成了从一座宁静小城到欧洲考古学地图上重要坐标的华丽转身。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要深度感受诺沃梅斯托的双重灵魂——如画的河湾生活与深邃的史前回响，我建议你安排一整天的时间，从容不迫地跟随河流的节奏。最佳的抵达时间是清晨九点前，这时游客稀少，晨光温柔地洒在河面和红瓦屋顶上，光线最适合拍照，也能听到这座城市最本真的苏醒之声。路线设计上，我们将遵循一个由远及近、由宏观到微观的逻辑：先从格姆山俯瞰全景，建立空间印象；然后下山进入老城，漫步街巷感受生活肌理；接着参观博物馆，沉浸于历史细节；最后沿河漫步，在日落时分回味整天的旅程。这样的节奏张弛有度，既能收获明信片般的风景，也能触摸到这座城市温暖的脉搏和古老的心跳。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`老城街道多为鹅卵石路面，请务必穿一双舒适防滑的步行鞋，高跟鞋在这里绝对是折磨。
博物馆和教堂周一大概率闭馆或开放时间极短，请务必避开周一开始你的游览计划，否则会错过最精华的部分。
夏季阳光明媚，但河畔蚊虫可能较多，建议备上驱蚊液；冬季则湿冷，保暖衣物和防水鞋很重要。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔格姆山顶的观景台，让那个完美的克尔卡河Ω形回湾和红瓦老城全景毫无保留地撞入你的眼帘，奠定整个旅程的视觉基调。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着山坡小径走下，穿过古老的石桥正式进入老城，让双脚感受主街鹅卵石路面的凹凸不平，眼睛扫过两旁色彩柔和的巴洛克建筑立面和精致的店铺橱窗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主广场的露天咖啡馆找把椅子坐下，点一杯传统的斯洛文尼亚咖啡，花二十分钟什么也不做，就看当地人如何在这个城市客厅里问候、闲聊、遛狗，让生活气息慢慢浸润你。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进多莱尼斯博物馆，在静谧的展厅里弯下腰，近距离凝视那些闪耀着温暖光泽的史前琥珀项链和色彩斑斓的玻璃珠，想象它们如何穿越千山万水来到这河湾之地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入广场旁的圣尼古拉斯教堂，抬头仰望那令人屏息的17世纪彩绘木质天花板，上面绘满了圣徒故事，在从彩色玻璃窗透入的光束中仿佛正在缓缓流动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着河岸的休闲步道慢慢行走，看天鹅在碧绿的水面滑行，当地人 jogging 或推着婴儿车散步，感受这座古城被自然怀抱的宁静与安逸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在河岸餐厅选一个能看到老城倒影的露天座位，享用一顿以本地淡水鱼和卡尼奥拉香肠为特色的晚餐，让味蕾也记住这座城市的味道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`趁着日落前的金色时刻，再次走到河湾的某个拐角，回望灯光初上的老城，看白日清晰的轮廓渐渐融入一片温暖的光晕之中，为这一天画上圆满的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`格姆山观景台全景位`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时内或日落前一小时，光线最为柔和金黄，使用广角镜头可以完整捕捉河流回湾的完美几何形态与老城全景的层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`从卡普齐桥回望老城主街`}</h4>
                  <p className="text-sm text-gray-700">{`站在桥中央，以街道两侧的巴洛克建筑作为引导线，将视线引向尽头的圣尼古拉斯教堂钟塔，构图紧凑而富有纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`河湾北侧步行道倒影拍摄点`}</h4>
                  <p className="text-sm text-gray-700">{`在无风的清晨或傍晚，平静的河面会像镜子一样倒映出对岸山丘上的老城建筑，拍摄对称构图，画面宁静如油画。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`多莱尼斯博物馆琥珀特写`}</h4>
                  <p className="text-sm text-gray-700">{`利用展柜的灯光，将相机贴近玻璃，使用大光圈或微距模式，聚焦于某一件琥珀藏品内部的纹理或气泡，拍出穿越千年的晶莹剔透。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`圣尼古拉斯教堂内部仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`选择正午阳光充沛时进入，等待光束透过彩色玻璃窗射入，仰拍绘有精美壁画的天花板，让光影成为画面的神圣主角。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂内部拍摄时请务必关闭闪光灯和快门提示音，保持绝对的安静与尊重，这是基本的礼仪。`}</li>
                <li>• {`使用偏振镜可以有效减少博物馆展柜玻璃的反光，让你拍出更清晰的文物细节。`}</li>
                <li>• {`拍摄当地人生活场景时，建议先微笑示意，获得默许后再拍摄，未经允许不要将镜头直接对准他人的脸部。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城中心精品酒店`}</h4>
                  <p className="text-sm text-blue-800">{`由一栋17世纪贵族宅邸改造而成，房间保留了原始的拱顶石墙和木梁，开窗即是主广场的钟声与生活气息，位置无敌。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河畔设计旅馆`}</h4>
                  <p className="text-sm text-green-800">{`坐落在克尔卡河南岸，现代简约风格，每间客房都拥有面对老城河湾的落地窗或阳台，清晨在枕边就能看到河面升腾的薄雾。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`宁静家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`位于老城边缘一个安静的花园住宅区内，房东妈妈会为你准备丰盛的自制早餐，包括新鲜的酸奶和果酱，体验地道的斯洛文尼亚家庭氛围。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`郊外庄园酒店`}</h4>
                  <p className="text-sm text-purple-800">{`驱车十分钟可达，坐落在一片丘陵葡萄园中，由历史庄园改建，提供水疗中心和本地葡萄酒品鉴，适合追求静谧与奢华体验的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（7-8月）是旅游旺季，以及每年秋季的文化节期间，住宿非常紧张，务必提前至少一个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城内的住宿多有数百年历史，建筑结构所限，部分可能没有电梯，预订时如有大件行李可提前咨询。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "追求极致风景请选择“河景房”，但若对睡眠光线敏感，请注意朝东的房间会迎接清晨第一缕阳光。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开诺沃梅斯托许久，我脑海里时常浮现的不是某个具体的画面，而是一种混合的感觉：是河水环绕带来的那种被包裹的安全感，是琥珀在掌心般大小的地方凝聚的跨越大陆的故事，是午后广场咖啡香里那份不被打扰的从容。这座城市教会我，深度不在于追逐清单上的名胜，而在于学会欣赏一种“层叠的美”。它就像一本活着的立体书，最上面一层是当下河畔悠闲的日常，翻下去是巴洛克立面的优雅与中世纪街巷的蜿蜒，再往下，则是铁器时代琥珀闪耀的幽深光芒。每一层都真实存在，彼此交融，毫不突兀。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求效率、热衷打卡的快节奏世界里，诺沃梅斯托的存在像一种温柔的抵抗。它不喧哗，不张扬，甚至有些害羞地隐藏在欧洲热门的旅游路线之外。但也正因如此，它得以保全了自己完整的呼吸和心跳。对于真正的深度游旅人而言，这里是一个完美的目的地：它足够小，小到一天就能用脚步丈量；它又足够深，深到你需要花费无数个一天去理解它河流的曲线、石头的纹路和历史的地层。来这里，不是为了收集又一个“去过”的地点，而是为了体验时间如何在一处河湾沉淀成诗，以及人类生活与古老遗产如何能达成如此美妙的共生。这，或许才是旅行所能带给我们的，最珍贵的启迪。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/logar-valley-slovenia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛加尔山谷</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Logar Valley</p>
                  </div>
                </div>
              </a>
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
              <a href="/attractions/skofja-loka-medieval-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    什
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">什科菲亚洛卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Škofja Loka</p>
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
