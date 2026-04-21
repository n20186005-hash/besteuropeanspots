import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '维丁 Baba Vida Fortress｜多瑙河畔的沉睡要塞，保加利亚保存最完好的中世纪城堡 - 最佳欧洲景点',
  description: '当火车缓缓驶入维丁站台，第一口呼吸到的空气就带着多瑙河特有的、混合了湿润水汽与远方草场清甜的气息。走出车站，这座小城以一种近乎沉睡的宁静迎接你，街道宽阔，行人寥寥，时间仿佛被调慢了半拍。然而，当你沿着笔直的道路向河边走去，拐过一个弯，那片厚重的、土黄色的巨大轮廓便毫无预警地撞进视野——巴巴维达要塞就',
}

export default function BabaVidaFortressVidinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '保加利亚', href: '/destinations/europe' },
            { label: '维丁', href: '/destinations/europe' },
            { label: '维丁', href: '/attractions/baba-vida-fortress-vidin' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`维丁・Vidin・保加利亚・维丁`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当火车缓缓驶入维丁站台，第一口呼吸到的空气就带着多瑙河特有的、混合了湿润水汽与远方草场清甜的气息。走出车站，这座小城以一种近乎沉睡的宁静迎接你，街道宽阔，行人寥寥，时间仿佛被调慢了半拍。然而，当你沿着笔直的道路向河边走去，拐过一个弯，那片厚重的、土黄色的巨大轮廓便毫无预警地撞进视野——巴巴维达要塞就那样沉默地蹲伏在河岸上，像一头打盹的、由石头和时光铸成的巨兽。多瑙河在这里是沉静的蓝灰色，平缓宽阔，对岸就是罗马尼亚的茂密树林，城堡的倒影在水面微微晃动，那一刻，你立刻明白了“边境”二字的全部重量。
走近它，感官的细节变得无比清晰。脚踩在通往主入口的碎石路上沙沙作响，风从多瑙河面吹来，掠过城墙时发出低沉的呜咽，仿佛在复述古老的哨兵低语。护城河早已干涸，长满了郁郁葱葱的野草和野花，蜜蜂在紫色的蓟花丛中嗡嗡忙碌，与城堡的肃杀形成了奇妙的共生。触摸城墙，石材粗粝而冰凉，上面布满了深浅不一的凿痕和岁月侵蚀的孔洞，阳光斜射，在墙面上投下明明暗暗的光影，仿佛一部石头的编年史。最令人心动的是，这里没有蜂拥而至的旅游团，偶尔有几个本地孩子在城墙下追逐，或是老夫妻挽着手在河边散步，城堡就这样自然地嵌在他们的日常生活里，是散步的背景，是历史的 playground，而非被玻璃罩起来的标本。
进入内庭，世界瞬间安静下来。喧嚣的河风被高墙隔绝，只剩下你自己的脚步声在空荡的庭院里回荡。抬头仰望，四方天空被锯齿状的城墙和塔楼切割成一块蓝盈盈的画布。你可以随意攀爬狭窄陡峭的石阶，登上其中一座塔楼。当你的手抓住冰冷的铁质扶手，身体挤过仅容一人通过的通道，最终站在塔顶的垛口后时，豁然开朗。眼前是多瑙河无与伦比的壮丽全景，河水像一条巨大的银带蜿蜒向东西两侧无尽延伸，河上的货船缓慢移动，对岸的田园风光尽收眼底。这一刻，你不再是游客，你仿佛成为了几个世纪前的守军，肩负着守望整个王国西北大门的重任，孤独，但拥有整个世界。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当火车缓缓驶入维丁站台，第一口呼吸到的空气就带着多瑙河特有的、混合了湿润水汽与远方草场清甜的气息。走出车站，这座小城以一种近乎沉睡的宁静迎接你，街道宽阔，行人寥寥，时间仿佛被调慢了半拍。然而，当你沿着笔直的道路向河边走去，拐过一个弯，那片厚重的、土黄色的巨大轮廓便毫无预警地撞进视野——巴巴维达要塞就那样沉默地蹲伏在河岸上，像一头打盹的、由石头和时光铸成的巨兽。多瑙河在这里是沉静的蓝灰色，平缓宽阔，对岸就是罗马尼亚的茂密树林，城堡的倒影在水面微微晃动，那一刻，你立刻明白了“边境”二字的全部重量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近它，感官的细节变得无比清晰。脚踩在通往主入口的碎石路上沙沙作响，风从多瑙河面吹来，掠过城墙时发出低沉的呜咽，仿佛在复述古老的哨兵低语。护城河早已干涸，长满了郁郁葱葱的野草和野花，蜜蜂在紫色的蓟花丛中嗡嗡忙碌，与城堡的肃杀形成了奇妙的共生。触摸城墙，石材粗粝而冰凉，上面布满了深浅不一的凿痕和岁月侵蚀的孔洞，阳光斜射，在墙面上投下明明暗暗的光影，仿佛一部石头的编年史。最令人心动的是，这里没有蜂拥而至的旅游团，偶尔有几个本地孩子在城墙下追逐，或是老夫妻挽着手在河边散步，城堡就这样自然地嵌在他们的日常生活里，是散步的背景，是历史的 playground，而非被玻璃罩起来的标本。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入内庭，世界瞬间安静下来。喧嚣的河风被高墙隔绝，只剩下你自己的脚步声在空荡的庭院里回荡。抬头仰望，四方天空被锯齿状的城墙和塔楼切割成一块蓝盈盈的画布。你可以随意攀爬狭窄陡峭的石阶，登上其中一座塔楼。当你的手抓住冰冷的铁质扶手，身体挤过仅容一人通过的通道，最终站在塔顶的垛口后时，豁然开朗。眼前是多瑙河无与伦比的壮丽全景，河水像一条巨大的银带蜿蜒向东西两侧无尽延伸，河上的货船缓慢移动，对岸的田园风光尽收眼底。这一刻，你不再是游客，你仿佛成为了几个世纪前的守军，肩负着守望整个王国西北大门的重任，孤独，但拥有整个世界。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`维丁`} />
                <InfoRow label="英文名称" value={`Vidin`} />
                <InfoRow label="正式名称" value={`巴巴维达中世纪要塞 (Baba Vida Medieval Fortress)`} />
                <InfoRow label="国家" value={`保加利亚`} />
                <InfoRow label="城市" value={`维丁`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为保加利亚境内唯一完整保存下来的中世纪城堡，它是保加利亚第二帝国西北边疆的终极守护者，见证了帝国兴衰与多瑙河畔近千年的地缘博弈。`} />
                <InfoRow label="建筑特色" value={`一座由双重厚重石墙、四座坚固塔楼和护城河（部分已干涸）构成的经典中世纪水岸要塞，其平面近似不规则四边形，完美适应了多瑙河岸的地形。`} />
                <InfoRow label="建筑风格" value={`以拜占庭军事建筑传统为基础，融合了保加利亚中世纪石砌技艺，并在后期受到奥斯曼帝国军事建筑影响的要塞风格。`} />
                <InfoRow label="文化价值" value={`不仅是军事建筑瑰宝，更深深植根于当地民间传说（“巴巴·维达”老妇传说），是维丁城市身份与多瑙河历史的鲜活记忆核心。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月至10月）：每日上午9:00至下午6:00，最晚入场时间为下午5:30。
冬季（11月至3月）：每日上午9:00至下午5:00，最晚入场时间为下午4:30。
每周一闭馆（若周一是国家法定节假日，则顺延至周二闭馆）。圣诞节（12月24-26日）和元旦（1月1日）全天闭馆。具体开放时间可能因天气或特殊活动微调，建议行前在其社交媒体页面查看公告。`} />
              <InfoRow label="门票价格" value={`成人票：6保加利亚列弗（约3欧元）。
学生票（凭有效国际学生证）及60岁以上长者票：3保加利亚列弗。
18岁以下儿童及残疾人免费。
提供家庭套票（两位成人+最多三名儿童）：12列弗。
门票费用包含进入要塞所有开放区域，包括城墙、塔楼和内部的小型博物馆展厅。`} />
              <InfoRow label="地址" value={`Baba Vida, 3700 Vidin, Bulgaria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是罗马尼亚的布加勒斯特机场（OTP）或保加利亚首都的索菲亚机场（SOF）。从索菲亚出发最为常见：在索菲亚中央火车站（Sofia Central Railway Station）搭乘开往维丁的直达火车，车程约5-6小时，每日有2-3班次，沿途风景如画，强烈建议选择白天车次。火车票可在保加利亚国家铁路（BDZ）官网提前预订，现场购票也方便。抵达维丁火车站后，要塞就在步行范围内：出站后沿着“Knyaz Boris I”大街向多瑙河方向直行约15-20分钟即可看到城堡雄姿。城内也有出租车，费用低廉，告诉司机“Baba Vida”即可。若自驾，从索菲亚沿A6/E79高速公路向西北方向行驶约200公里，导航设置上述地址，城堡附近有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "巴巴维达的故事，始于多瑙河畔一个关于坚守与失去的传说。据说在保加利亚第一帝国时期，一位名叫维达的贵族拥有三座城堡，临终前让三个女儿挑选。大女儿库拉选择了山中城堡，二女儿甘佳选择了田野城堡，而小女儿维达则说：“我要建造一座新城堡，在多瑙河上，我会用我的生命守护它。”于是，她终身未嫁，在河岸上筑起高墙，抵御外敌，这座城堡便以她的名字命名，“巴巴”在保加利亚语中是对年长妇女的尊称，“巴巴·维达”意为“老妇维达”。这个美丽的传说，为这座石头堡垒注入了第一缕人性的温度与悲壮的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真实的历史车轮远比传说更沉重。我们今天看到的城堡主体，主要建于13至14世纪，正值保加利亚第二帝国的鼎盛时期。当时的沙皇伊万·亚历山大将维丁作为重要的边境要塞和王室行宫之一，进行了大规模扩建和加固。厚重的双重城墙、四座高耸的塔楼以及引多瑙河水形成的护城河体系，都是为了抵御来自北方的匈牙利王国和后来的奥斯曼帝国的威胁。城堡内部不仅有兵营和武器库，还建有教堂和贵族居所，是一个功能完备的微型城市。那段时期，巴巴维达是多瑙河上令人望而生畏的雄关，是帝国荣耀与力量的象征，商船经过此地，都必须向城堡致意。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，荣耀未能永恒。1396年，随着保加利亚全境落入奥斯曼帝国之手，巴巴维达也结束了它作为保加利亚王国要塞的使命。但它的军事价值并未消失，征服者们立刻认识到了它的重要性。奥斯曼帝国将其改造，加固了部分城墙，并在此后的几个世纪里，将其用作重要的戍卫点和——令人唏嘘地——监狱。那些曾经保卫王国自由的塔楼和地牢，转而关押反抗奥斯曼统治的起义者和重要的政治犯。墙壁上或许还残留着那个黑暗时期刻下的绝望印记。城堡从一个防御外敌的盾牌，变成了镇压内部的铁笼，其角色转换，正是整个巴尔干半岛复杂历史的缩影。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时光流转到近代，随着火炮技术的发展，中世纪城堡的军事意义逐渐消亡。巴巴维达一度被荒废，任由风雨侵蚀。直到保加利亚获得解放后，它作为国家级古迹的价值才被重新发现。20世纪进行了系统性的考古发掘和修复工程，清除了后期的杂乱加建，尽可能地恢复了其中世纪鼎盛时期的原貌。1964年，它被正式辟为博物馆向公众开放。修复者们小心翼翼，没有把它变成崭新的“假古董”，而是保留了石头本身的沧桑感和各个历史时期留下的痕迹。你会发现，某些墙砖上刻着中世纪的石匠标记，而另一些地方则有奥斯曼时期修补的明显不同质地的石材。这种“层累的历史”本身，就是最生动的展览。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今天，当你漫步其中，它不仅仅是一座博物馆。它还是维丁市民文化生活的中心。夏季的夜晚，古老的庭院会变身为露天剧场，上演莎士比亚的戏剧或保加利亚的民族歌剧。音响效果出奇地好，演员的声音在高墙间回荡，历史与现实在那一刻完美交融。孩子们在这里参加历史主题的夏令营，学习射箭和制作中世纪手工艺品。巴巴维达早已超越了其最初的军事定义，它活过来了，成为了一座连接过去与现在、承载集体记忆与社区活动的鲜活建筑。从维达公主的传说，到沙皇的堡垒，再到奥斯曼的监狱，最终成为人民的文化殿堂，它的每一块石头，都吟唱着一段关于生存、适应与重生的史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受巴巴维达的魂，建议安排至少3-4小时的沉浸式游览。最佳抵达时间是上午9点开门后不久，或下午3点之后。上午光线清澈柔和，适合拍照，且游客极少，你能独享整个城堡的宁静。下午则能捕捉到夕阳为石墙镀金的魔幻时刻，并在塔楼上欣赏多瑙河的日落。整体节奏宜慢不宜快，先从外围感受其气势，再深入内部探索细节。路线设计为由外而内、由下而上，最后以全景视野收尾，完成一次从宏观到微观再到宏观的完整体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季中午阳光暴晒，城堡内几乎没有遮阴处，务必携带帽子、太阳镜和充足饮用水。
部分塔楼梯阶非常陡峭且磨损严重，务必穿着防滑舒适的徒步鞋或运动鞋，上下楼梯时注意安全。
城堡内几乎没有商业设施，只有入口处有一个极小的纪念品柜台，建议自备少量零食，但请务必带走所有垃圾。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从火车站或市中心沿着绿树成荫的街道漫步至多瑙河岸，第一眼从河堤公园的远处眺望城堡与河流构成的完整画面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要急着进入，先沿着干涸的护城河外围走半圈，用手触摸外墙粗粝的质感，观察不同时期修补的砖石和墙基。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口的木吊桥（现为固定石桥）进入外堡区域，感受两道高墙形成的压抑与威严的军事氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`步入阳光洒落的中心庭院，顺时针绕行一周，仔细观看墙上嵌着的各种历史信息板和出土文物展示柜。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`钻进东南角塔楼底层的小型博物馆，花些时间了解从罗马时期到奥斯曼时期本地出土的陶器、武器和日常用品。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`挑战自己，攀爬西北角那座最为高大的主塔楼内部狭窄昏暗的螺旋石阶，过程中感受心跳加速与历史迫近的混合体验。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上主塔楼的顶层垛口，静静地靠在冰凉的石头旁，花至少二十分钟俯瞰多瑙河两岸风光，看船只来往，让想象穿越时空。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，沿着内墙下的阴影处漫步至出口，在城堡西门外的河岸长椅上坐下，回味整个过程，看城堡在暮色中渐渐亮起温柔的灯光。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`多瑙河对岸（罗马尼亚一侧）的堤岸上`}</h4>
                  <p className="text-sm text-gray-700">{`使用长焦镜头，在日落前约一小时，可以拍到城堡连同它在河水中金色倒影的完美侧影，构图时将城堡置于画面一侧，留出广阔的河面与天空。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主塔楼顶层西侧垛口`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点到六点间，面向多瑙河向西拍摄，阳光为河面和对岸的罗马尼亚森林披上暖色调，将垛口作为前景框架，拍摄河流与天际线的壮丽画卷。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`护城河外侧的西南角`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八点左右，阳光刚好照亮城堡东南面，站在长满野花的护城河沟底向上仰拍，可以捕捉到城墙高耸入云的压迫感与野趣生机的对比。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`中心庭院仰望天空`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光直射，站在庭院正中心向上拍摄，将四周锯齿状的城墙轮廓与塔楼一角纳入画面，形成一个独特的“天空之井”构图。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡西门外的河滨步道`}</h4>
                  <p className="text-sm text-gray-700">{`蓝调时刻（日落后半小时内），以亮起暖黄色灯光的城堡为背景，拍摄散步的当地人剪影或静静停泊的小船，充满生活与故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人对于拍照非常友好，但拍摄人物时（尤其是老人和孩子），一个微笑和简单的手势征求同意是很好的礼节。`}</li>
                <li>• {`使用无人机需要特别谨慎，最好提前了解当地法规，城堡本身作为古迹通常禁止无人机近距离飞行，但在多瑙河对岸公共区域远距离拍摄全景可能是可行的。`}</li>
                <li>• {`室内博物馆展区通常禁止使用闪光灯，以保护脆弱的古老文物。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河景公寓之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于城堡仅一街之隔的老建筑顶层公寓，带有一个可俯瞰多瑙河与城堡全景的小阳台，夜晚听着河水声入睡，由热情房东提供自制果酱早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`精品设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`坐落在维丁市中心翻新过的19世纪新古典主义建筑内，设计融合了保加利亚民族图案与现代极简风，步行至城堡仅十分钟，酒店餐厅的多瑙河鱼汤是一绝。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`隐藏在宁静居民区里的独立屋，拥有开满玫瑰的花园，主人是一对退休教师夫妇，会为你手绘维丁老城探索地图并讲述书本上没有的本地轶事。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`多瑙河畔庄园体验`}</h4>
                  <p className="text-sm text-purple-800">{`位于维丁郊区一处19世纪贵族庄园改造的乡村酒店，被广阔的葡萄园环绕，适合自驾者，提供骑马和多瑙河垂钓等深度体验，远离喧嚣。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维丁的旅游旺季是夏季（6-8月），但即便旺季住宿也远非紧张，不过带有河景或独特风格的住处仍建议提前1-2周预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城区域非常安全，夜晚安静祥和，可以放心散步。大部分住宿都不提供电梯，如果行李沉重，预订时最好确认一下。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择住在市中心或河畔，更能体验到小镇黄昏后本地人在广场咖啡馆闲坐、在河堤遛狗的慢生活节奏，这才是维丁真正的魅力所在。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开巴巴维达许久，指尖似乎还残留着那些城墙石块的粗粝与凉意。它不像那些被精心打磨、挤满游客的著名城堡，更像一位经历了太多故事而变得沉默寡言的老兵，就坐在多瑙河边的长椅上，看着河水千年如一日的流淌。它没有金碧辉煌的装饰，没有错综复杂的秘道，它的美在于那种赤裸裸的、未经修饰的诚实。每一道风雨侵蚀的痕迹，每一块颜色深浅不一的补石，都在坦然诉说着它所经历的围困、炮火、囚禁与遗忘。这种诚实，在当今世界愈发显得珍贵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在一切都被加速、被美颜、被商品化的时代，巴巴维达提供了一种截然不同的旅行价值：一种关于“边缘”与“沉淀”的沉思。它地处欧洲的“边缘”，远离主流旅游线路，也因此保存了自身的节奏和呼吸。来这里，你需要一点耐心，需要愿意把时间“浪费”在看似无意义的发呆上——看河水流淌，看云影掠过塔楼，看本地老人坐在长椅上一下午。这座城堡教会你的，或许不是某个具体的历史知识点，而是一种状态：如何在宏伟的历史遗产面前保持谦卑，如何在一座“沉睡”的小城里找到内心的宁静，以及如何理解，真正的坚守往往意味着长久的孤独与默默的承载。对于每一位渴望逃离表面喧嚣、触碰历史真实纹理的深度旅人来说，维丁和它的巴巴维达，是一剂温和而有效的解药，也是一次通往内心深处的朝圣。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/koprivshtitsa-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科普里夫什蒂察</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Koprivshtitsa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/belogradchik-fortress-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    贝
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">贝洛格拉奇克要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Belogradchik Fortress</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ivanovo-rock-hewn-churches" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伊
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伊万诺沃岩凿教堂群</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ivanovo Rock-Hewn Churches</p>
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
