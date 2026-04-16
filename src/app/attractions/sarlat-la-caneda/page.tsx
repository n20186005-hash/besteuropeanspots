import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨尔拉拉卡内达 Sarlat-la-Canéda｜法国最完整的文艺复兴古城，时光琥珀里的黑松露与鹅肝香 - 最佳欧洲景点',
  description: '第一次走进萨尔拉，你一定会愣住。那感觉不像踏入一个“景点”，倒像是毫无防备地掉进了一块巨大的、温润的时光琥珀。空气里有种独特的味道——不是巴黎那种咖啡混着香烟的都市气息，而是陈年石头被正午阳光晒暖后散发出的干燥粉尘味，里头还狡猾地缠着一丝从某扇半掩的门后飘来的、浓郁到化不开的鹅肝酱和烤核桃的甜香。脚...',
}

export default function SarlatLaCanedaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '萨尔拉拉卡内达', href: '/attractions/sarlat-la-caneda' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">萨尔拉拉卡内达・Sarlat-la-Canéda・法国・萨尔拉拉卡内达</h1>
          <p className="text-lg text-gray-600 mb-6">
            第一次走进萨尔拉，你一定会愣住。那感觉不像踏入一个“景点”，倒像是毫无防备地掉进了一块巨大的、温润的时光琥珀。空气里有种独特的味道——不是巴黎那种咖啡混着香烟的都市气息，而是陈年石头被正午阳光晒暖后散发出的干燥粉尘味，里头还狡猾地缠着一丝从某扇半掩的门后飘来的、浓郁到化不开的鹅肝酱和烤核桃的甜香。脚下的鹅卵石小路被几个世纪的脚步磨得油光水滑，在夕阳下泛着蜜糖般的金色光泽，你得稍微小心点走，不然会被这些调皮的石子绊个趔趄。
你的耳朵会立刻忙起来。远处市政厅钟楼传来沉郁的报时声，近处是露天咖啡馆瓷器碰撞的清脆叮当，还有小巷深处传来听不懂却异常欢快的佩里戈尔方言。抬起头，视线立刻被两旁拔地而起的房屋挤满。它们不是那种整齐划一的美，而是各有各的脾气：一栋是威严的哥特式山墙，带着尖顶和瘦长的窗户，像个严肃的修士；隔壁那栋却突然活泼起来，文艺复兴式的窗棂上雕着繁复的葡萄藤和神话人物，像个喝多了本地葡萄酒的贵族。阳光就在这些错落的屋顶和凸出的窗台之间玩着光影游戏，把狭窄的巷子切成明明暗暗的片段。
最打动人的，是这里无比鲜活的生活气。它不是一座仅供瞻仰的空城。那个推着自行车、车篮里装满长棍面包的老先生，正慢悠悠地拐进一扇有七百年历史的拱门；转角书店的老板娘，会把书摊一直摆到中世纪遗留下来的石阶上。自由广场上永远坐着晒太阳的老人，他们看着游客的眼神，与其说是好奇，不如说是一种宽容的、主人般的审视。在这里，辉煌的历史遗产不是被圈养起来的标本，它就是当地人每日生活的背景板，是呼吸的一部分。这份“活着”的质感，才是萨尔拉无可替代的核心魅力。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">第一次走进萨尔拉，你一定会愣住。那感觉不像踏入一个“景点”，倒像是毫无防备地掉进了一块巨大的、温润的时光琥珀。空气里有种独特的味道——不是巴黎那种咖啡混着香烟的都市气息，而是陈年石头被正午阳光晒暖后散发出的干燥粉尘味，里头还狡猾地缠着一丝从某扇半掩的门后飘来的、浓郁到化不开的鹅肝酱和烤核桃的甜香。脚下的鹅卵石小路被几个世纪的脚步磨得油光水滑，在夕阳下泛着蜜糖般的金色光泽，你得稍微小心点走，不然会被这些调皮的石子绊个趔趄。</p>
              <p className="text-gray-700 leading-relaxed mb-4">你的耳朵会立刻忙起来。远处市政厅钟楼传来沉郁的报时声，近处是露天咖啡馆瓷器碰撞的清脆叮当，还有小巷深处传来听不懂却异常欢快的佩里戈尔方言。抬起头，视线立刻被两旁拔地而起的房屋挤满。它们不是那种整齐划一的美，而是各有各的脾气：一栋是威严的哥特式山墙，带着尖顶和瘦长的窗户，像个严肃的修士；隔壁那栋却突然活泼起来，文艺复兴式的窗棂上雕着繁复的葡萄藤和神话人物，像个喝多了本地葡萄酒的贵族。阳光就在这些错落的屋顶和凸出的窗台之间玩着光影游戏，把狭窄的巷子切成明明暗暗的片段。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最打动人的，是这里无比鲜活的生活气。它不是一座仅供瞻仰的空城。那个推着自行车、车篮里装满长棍面包的老先生，正慢悠悠地拐进一扇有七百年历史的拱门；转角书店的老板娘，会把书摊一直摆到中世纪遗留下来的石阶上。自由广场上永远坐着晒太阳的老人，他们看着游客的眼神，与其说是好奇，不如说是一种宽容的、主人般的审视。在这里，辉煌的历史遗产不是被圈养起来的标本，它就是当地人每日生活的背景板，是呼吸的一部分。这份“活着”的质感，才是萨尔拉无可替代的核心魅力。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="萨尔拉拉卡内达" />
                <InfoRow label="英文名称" value="Sarlat-la-Canéda" />
                <InfoRow label="正式名称" value="Sarlat-la-Canéda" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="萨尔拉拉卡内达" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="法国境内保存最完整、规模最大的中世纪与文艺复兴时期建筑群之一，被誉为“佩里戈尔的黑钻石”。" />
                <InfoRow label="建筑特色" value="由金黄色的石灰华石建成，拥有陡峭的板岩屋顶、错综复杂的鹅卵石小巷、华丽的山墙和精致的文艺复兴风格窗棂。" />
                <InfoRow label="建筑风格" value="以中世纪晚期哥特式为基础，融合了法国文艺复兴的优雅元素，形成了独特的佩里戈尔地区风格。" />
                <InfoRow label="文化价值" value="不仅是建筑遗产的丰碑，更是法国西南部生活艺术、美食文化（松露、鹅肝、核桃）和乡土历史的活态博物馆。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="古城本身全天开放，可自由漫步。但内部的主要景点如圣塞克雷多姆主教座堂、自由广场市政厅、拉布瓦西埃公馆等开放时间各异，一般为上午10点至下午6点，冬季可能缩短至下午5点。每周日的早晨是著名的市集时间，从清晨7点持续到下午1点左右，气氛最为热烈。注意大部分室内景点在1月及每周一可能闭馆，具体需查询各景点官网。" />
              <InfoRow label="门票价格" value="进入古城本身无需门票。参观单个历史建筑或博物馆门票通常在5-8欧元之间。推荐购买“Sarlat Pass”通票，约12欧元，可涵盖3-4个主要景点。12岁以下儿童免费，学生及25岁以下青年享有折扣。每周日上午市场期间，部分私人宅邸可能提供免费的内部庭院参观。" />
              <InfoRow label="地址" value="Place de la Liberté, 24200 Sarlat-la-Canéda, France" />
              <InfoRow label="交通方式" value="最近的国际机场是波尔多-梅里尼亚克机场（BOD）或贝尔热拉克机场（EGC）。从巴黎可乘坐TGV高铁至波尔多圣让站，再转乘TER区域火车抵达萨尔拉站，总行程约4-5小时。从波尔多出发，自驾是最方便的选择，沿A89高速公路向东，车程约2小时。古城内大部分区域为步行区，火车站或城外停车场步行至老城中心约需10-15分钟。建议预订停车位，尤其是在夏季和市集日。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要说清楚萨尔拉的故事，得从它脚下这种特别的石头说起——石灰华。这种柔软易开采的黄色石材，是这座古城命运的起点。早在公元9世纪，一座本笃会修道院就在这里扎根，围绕着它，一个市镇慢慢生长起来。得益于通往圣地亚哥-德孔波斯特拉朝圣之路的支线经过，萨尔拉在宗教和商业的双重滋养下，像一块吸饱了水分的海绵，迅速膨胀繁荣。到了中世纪鼎盛时期，它已经成了佩里戈尔地区一个举足轻重的主教区和贸易中心。那时的财富，最先体现在那些宏伟的宗教建筑上，比如圣塞克雷多姆主教座堂，它的地基里就埋藏着这段虔诚而富足的过往。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，真正让萨尔拉穿上今天这件华丽“金色外衣”的，不是战争，也不是某个帝王，而是一种不起眼的真菌——黑松露，以及它的黄金搭档，肥美的鹅肝。时间跳到15、16世纪，百年战争的硝烟散去，法国文艺复兴的春风吹到了这个西南腹地。本地的贵族、主教和因为松露与鹅肝贸易而暴富的商人们，手里有了大把的金钱和全新的审美趣味。他们不满足于父辈那些阴暗、防御性的中世纪堡垒式住宅了。于是，一场轰轰烈烈的“老房改造”运动开始了。</p>
              <p className="text-gray-700 leading-relaxed mb-4">你能想象吗？那些今天让你惊叹的、有着精美雕刻窗棂和优雅对称立面的文艺复兴宅邸，很多都是在老旧的哥特式房屋骨架上“贴”上去的新面孔。比如著名的拉布瓦西埃公馆，它的内核可能仍是中世纪的，但主人请来了意大利或受意大利影响的工匠，为它雕刻了象征丰饶的羊头、月桂花环和寓言人物。窗户被扩大，让阳光更多地涌进室内；内部建起了华丽的螺旋楼梯。这不是推倒重来，而是一种层叠、一种对话。新旧建筑风格在这里不是割裂的，而是像树干与年轮一样生长在一起，记录了从信仰至上到人性享乐的时代变迁。</p>
              <p className="text-gray-700 leading-relaxed mb-4">当然，命运也有它的冷酷面。随着宗教战争和法国大革命的冲击，萨尔拉一度沉寂，它的辉煌被遗忘，建筑也变得破败。转机出现在20世纪60年代，法国颁布了著名的“马尔罗法”，旨在保护历史文化遗产。萨尔拉因其无与伦比的完整性，成为这项法律下第一个被系统性修复的历史区域。这不是简单的粉刷，而是近乎考古般的精细工作。工人们小心翼翼地剥除后来添加的拙劣部分，让原本的石墙和雕刻重见天日。电线被埋入地下，现代招牌被严格限制。这场历时数十年的“手术”，让萨尔拉没有沦为迪士尼式的布景板，而是最大限度地恢复了它原生、有机的肌理，让时光的层次感清晰可见。</p>
              <p className="text-gray-700 leading-relaxed mb-4">所以，今天我们漫步的萨尔拉，是一部用石头写就的立体编年史。它的一砖一石，既诉说着修道院的虔诚、朝圣者的足迹，也炫耀着松露商人的财富、文艺复兴的人文之光，还铭刻着现代人对遗产的敬畏与智慧。它不是一个凝固在某一时刻的标本，而是一场跨越千年的、缓慢而持续的生长与蜕变。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  完美的萨尔拉深度游，应该从周六或周日的清晨开始，这样你就能邂逅它灵魂所在的市集。建议早上8点前抵达，整个游览需要一整天的时间，节奏宜慢不宜快。上午跟随市集的喧嚣与香气，感受古城苏醒的脉搏；午后当游客潮稍微退去，再深入探索那些静谧的小巷和室内景点；傍晚时分，则一定要找个高处，等待金色的夕阳为整个古城披上最华丽的衣裳。这样的安排，能让你体验到萨尔拉从市井到诗意、从喧嚣到宁静的多重面孔。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>市集日人流量极大，看好个人财物，尤其注意相机和钱包。穿着绝对要舒适防滑的鞋子，那些美丽的鹅卵石路面雨天湿滑，平时也极考验脚踝。不要试图在中午12点到下午2点之间寻找营业的餐厅或商店，这是法国南部雷打不动的午休时间，请尊重并享受这份慢节奏。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">清晨八点前赶到自由广场，让自己瞬间淹没在周日市集五颜六色的遮阳棚、堆积如山的鹅肝酱罐、散发着泥土芬芳的黑松露以及热情摊贩的叫卖声中。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">顺着广场东侧的小巷钻进去，用指尖触摸拉布瓦西埃公馆那雕刻着神话场景、被阳光晒得微温的文艺复兴风格立面。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着陡峭的鹅卵石坡道“ Rue des Consuls”向上，在两旁高耸的黄金石屋夹道中穿行，感受中世纪街道的原始尺度与压迫感。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从不起眼的小径拐入圣玛丽教堂改造而成的室内市场，抬头仰望被现代玻璃穹顶覆盖的古老教堂中殿，光线在其中制造出神圣而奇妙的混搭感。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">推开圣塞克雷多姆主教座堂沉重的木门，让眼睛适应内部的昏暗，然后寻找那尊著名的“哭泣的圣母”木雕，静静体会其穿越数百年依然动人的悲悯神情。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在午后三四点，推开一家老石头房子地窖改建的餐厅的门，在拱形石顶下品尝用当地核桃油调制的沙拉和油封鸭腿。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">赶在日落前，找到通往古城西南侧高处的步道，回望整个萨尔拉，看夕阳如何将一片片的板岩屋顶点燃成温暖的铜红色。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">当蓝调时刻降临，街灯次第亮起，再次漫步回中心小巷，听自己的脚步声在寂静的石壁间回响，与白日的喧嚣恍如隔世。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 自由广场东侧咖啡馆二楼窗口</h4>
                  <p className="text-sm text-gray-700">清晨市集刚开始时，从窗口俯拍广场上渐渐聚集的人群和彩色棚顶，以古老的市政厅钟楼为背景，画面充满生活叙事感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. “Rue de la Salamandre”小巷中段</h4>
                  <p className="text-sm text-gray-700">下午三四点的侧光时分，站在巷子中间，利用两侧高耸的金色石墙形成天然画框，拍摄蜿蜒向前、光影斑驳的深邃街道。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 圣玛丽教堂玻璃市场穹顶下</h4>
                  <p className="text-sm text-gray-700">正午阳光直射时进入市场，仰拍现代感十足的玻璃钢结构与古老的教堂石壁、玫瑰花窗同框的奇幻构图。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 古城外围的“L’Ascenseur Panoramique”观景台旁</h4>
                  <p className="text-sm text-gray-700">日落前半小时，在此拍摄萨尔拉古城全景，温暖的光线勾勒出所有建筑的轮廓，板岩屋顶呈现迷人的层次与质感。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 拉布瓦西埃公馆雕刻窗棂特写</h4>
                  <p className="text-sm text-gray-700">选择一个阳光不太强烈的多云天，靠近拍摄窗户上精美的文艺复兴雕刻细节，柔和的光线能完美展现石材的纹理和工匠的技艺。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 尊重当地居民隐私，切勿将镜头直接对准私人住宅的窗户或阳台内的居民。使用无人机在古城上空飞行是严格禁止的，请务必遵守。拍摄市集摊贩前，一个微笑和简单的手势征得同意，会让你收获更友善的回应。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">历史沉浸之选</h4>
                  <p className="text-sm text-blue-800">入住由15世纪贵族宅邸改造的精品酒店，睡在裸露的原始石墙和实木横梁之下，清晨在私密的内庭花园里享用早餐，仿佛成了这座古宅的临时主人。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">宁静花园体验</h4>
                  <p className="text-sm text-green-800">选择位于古城边缘但步行可达的庄园式酒店，房间窗外是静谧的私人花园或葡萄园，既能享受古城的便利，又能 retreat 到一片绿色安宁之中。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">特色公寓民宿</h4>
                  <p className="text-sm text-yellow-800">租住一套藏在古老建筑顶层的复式公寓，拥有自己的小厨房和可以俯瞰一片屋顶海洋的露台，晚上买本地食材回来烹饪，体验一把“萨尔拉居民”的日常。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">性价比之选</h4>
                  <p className="text-sm text-purple-800">住在步行距古城中心10-15分钟的传统家庭式旅馆，由热情的本地夫妇经营，房间简洁舒适，并能获得最地道的餐馆和秘境推荐。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">古城核心区的住宿非常抢手，尤其是夏季和市集周末，务必提前数月预订。选择住在古城内虽然方便，但请注意部分老房子隔音可能不佳，且夜间街道会非常安静。古城外停车更容易，且价格通常更实惠。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开萨尔拉很久之后，那股混合着暖石、鹅肝和旧时光的气味，还会偶尔在记忆里浮现。我常想，这个地方最珍贵的，或许不是它完美保存了多少座文艺复兴建筑——欧洲这样的古城并非独此一家。它真正触动我的，是那种举重若轻的“生活感”。历史在这里没有被供上神坛，而是像呼吸一样自然。你可以坐在十三世纪的石阶上吃一个刚出炉的可颂，可以在十六世纪商人豪宅改成的餐厅里讨论今天的松露价格，这种将千年遗产彻底融入日常的坦然与自信，是一种更高级的文明姿态。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个一切都在追求更新、更快、更炫目的时代，萨尔拉像一个坚定的反义词。它告诉你，缓慢是一种力量，延续是一种智慧，在旧日的骨骼上生长出今日的血肉，是一种值得骄傲的能力。它不只是一座“很美”的古城，更是一个关于如何与时间相处、如何承载记忆而不被其压垮的生动范本。对于每一位渴望深度游的旅人而言，来萨尔拉，不只是看风景，更是来上一堂关于时间、生命与传承的静谧之课。在这里，你会找到那种在飞速旋转的世界里早已稀缺的笃定与安宁。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
