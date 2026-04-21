import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿约斯尼古拉奥斯 Agios Nikolaos｜无底湖传说与悠闲地中海的完美融合 - 最佳欧洲景点',
  description: '你第一眼看到阿约斯尼古拉奥斯，可能会觉得它不像个“正经”的景点。没有恢弘的卫城，也没有巨大的废墟。它更像一个被太阳晒得懒洋洋的、色彩明丽的梦境。我是傍晚时分到的，车子绕着米拉贝洛湾转了个弯，一片依山而建的白色房子就像撒在蓝色绸缎上的珍珠，猝不及防地跳进眼帘。空气里有强烈的咸味，混合着烤章鱼的焦香和九',
}

export default function AgiosNikolaosCretePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '阿约斯尼古拉奥斯', href: '/destinations/europe' },
            { label: '阿约斯尼古拉奥斯', href: '/attractions/agios-nikolaos-crete' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿约斯尼古拉奥斯・Agios Nikolaos・希腊・阿约斯尼古拉奥斯`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到阿约斯尼古拉奥斯，可能会觉得它不像个“正经”的景点。没有恢弘的卫城，也没有巨大的废墟。它更像一个被太阳晒得懒洋洋的、色彩明丽的梦境。我是傍晚时分到的，车子绕着米拉贝洛湾转了个弯，一片依山而建的白色房子就像撒在蓝色绸缎上的珍珠，猝不及防地跳进眼帘。空气里有强烈的咸味，混合着烤章鱼的焦香和九重葛花的甜腻。摩托车的突突声和咖啡馆里传来清脆的玻璃杯碰撞声，构成了背景音。
但真正让你停下脚步、倒吸一口凉气的，是镇中心那个被称为“武利斯梅尼”的湖。它不像普通湖泊那样安分地躺在那里，而是一个巨大的、深不可测的墨蓝色眼眸，被一圈餐厅和咖啡馆紧紧围住，像个被城市小心珍藏起来的秘密。当地人就在这“眼眸”边喝咖啡、聊天、看报纸，仿佛旁边不是传说中深达64米、与海洋相通的深渊，只是一个再普通不过的社区池塘。这种奇特的松弛感，是阿约斯尼古拉奥斯最迷人的基调——再神秘的事物，在这里也成了日常生活的一部分。
从湖边顺着台阶往下走几分钟，就是老港口。这里的蓝色浓得化不开，海水是钴蓝，停泊的渔船刷着天蓝，遮阳棚是湛蓝，层层叠叠，直到与远处米拉贝洛湾的宝蓝色融为一体。你会看到留着浓密胡须的老水手在修补渔网，皮肤晒成古铜色的游客躺在帆船的甲板上，而猫咪则在阳光下睡得四仰八叉。这里的一切都慢得有理有据。阿约斯尼古拉奥斯的魅力，不在于“看”到什么伟大的建筑，而在于你“进入”了一种状态——一种被阳光、海水、传说和无所事事的悠闲共同浸泡的状态。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你第一眼看到阿约斯尼古拉奥斯，可能会觉得它不像个“正经”的景点。没有恢弘的卫城，也没有巨大的废墟。它更像一个被太阳晒得懒洋洋的、色彩明丽的梦境。我是傍晚时分到的，车子绕着米拉贝洛湾转了个弯，一片依山而建的白色房子就像撒在蓝色绸缎上的珍珠，猝不及防地跳进眼帘。空气里有强烈的咸味，混合着烤章鱼的焦香和九重葛花的甜腻。摩托车的突突声和咖啡馆里传来清脆的玻璃杯碰撞声，构成了背景音。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但真正让你停下脚步、倒吸一口凉气的，是镇中心那个被称为“武利斯梅尼”的湖。它不像普通湖泊那样安分地躺在那里，而是一个巨大的、深不可测的墨蓝色眼眸，被一圈餐厅和咖啡馆紧紧围住，像个被城市小心珍藏起来的秘密。当地人就在这“眼眸”边喝咖啡、聊天、看报纸，仿佛旁边不是传说中深达64米、与海洋相通的深渊，只是一个再普通不过的社区池塘。这种奇特的松弛感，是阿约斯尼古拉奥斯最迷人的基调——再神秘的事物，在这里也成了日常生活的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从湖边顺着台阶往下走几分钟，就是老港口。这里的蓝色浓得化不开，海水是钴蓝，停泊的渔船刷着天蓝，遮阳棚是湛蓝，层层叠叠，直到与远处米拉贝洛湾的宝蓝色融为一体。你会看到留着浓密胡须的老水手在修补渔网，皮肤晒成古铜色的游客躺在帆船的甲板上，而猫咪则在阳光下睡得四仰八叉。这里的一切都慢得有理有据。阿约斯尼古拉奥斯的魅力，不在于“看”到什么伟大的建筑，而在于你“进入”了一种状态——一种被阳光、海水、传说和无所事事的悠闲共同浸泡的状态。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿约斯尼古拉奥斯`} />
                <InfoRow label="英文名称" value={`Agios Nikolaos`} />
                <InfoRow label="正式名称" value={`Agios Nikolaos`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`阿约斯尼古拉奥斯`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`从一个依靠圣尼古拉斯崇拜而生的拜占庭小渔村，演变为威尼斯时期的区域堡垒，最终成为克里特岛东海岸最迷人、最具国际气息的度假胜地。`} />
                <InfoRow label="建筑特色" value={`小巧精致的城镇建筑与陡峭的地形和深邃的湖泊和谐共生，形成了阶梯状环绕港口的独特城市肌理，融合了传统克里特岛白墙蓝窗风格与新古典主义及现代元素。`} />
                <InfoRow label="建筑风格" value={`典型的地中海岛屿风格，深受威尼斯统治时期建筑的影响，混杂着新古典主义和二十世纪中叶的旅游开发印记，呈现出一种轻松、折衷而又和谐的面貌。`} />
                <InfoRow label="文化价值" value={`一个神话传说（雅典娜沐浴）与现实地质奇观（无底湖）交织的地方，完美体现了克里特岛“逍遥自在”的生活哲学，是观察希腊传统渔港如何优雅转型为现代旅游中心的活样本。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城镇的街道、海滨及武利斯梅尼湖等公共区域全天24小时开放。多数商店和咖啡馆的营业时间为上午9点至晚上11点，夏季可能更晚。小型的考古博物馆和民俗博物馆通常在周二至周日上午8:30至下午3:00开放，周一闭馆，冬季开放时间可能缩短，建议行前查询官网确认。`} />
              <InfoRow label="门票价格" value={`进入阿约斯尼古拉奥斯城镇本身免费。考古博物馆门票约4欧元，学生及欧盟青少年有相应优惠。乘坐游览武利斯梅尼湖的传统小船费用约为每人8-10欧元（时长约20分钟）。镇上的各类活动，如租船出海、导游徒步游等需额外付费。`} />
              <InfoRow label="地址" value={`Agios Nikolaos 721 00, Greece`} />
              <InfoRow label="交通方式" value={`从克里特岛的主要机场——伊拉克利翁尼克·卡赞扎基斯国际机场出发，最便捷的方式是乘坐KTEL长途巴士。机场外有前往巴士总站的接驳车。从巴士总站搭乘前往阿约斯尼古拉奥斯的直达巴士，车程约1.5小时，费用约8欧元，班次在夏季每小时一班，冬季班次减少。也可以选择乘坐出租车，车程约1小时，费用约80-100欧元，适合多人同行。自驾是最灵活的方式，沿E75/A90号公路向东行驶约65公里即可抵达，沿途风景优美。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "别看现在这里满是悠闲的游客和漂亮的游艇，阿约斯尼古拉奥斯的故事，起初和浪漫没什么关系。它的名字意为“圣尼古拉斯”，源于一座可能建于8世纪的拜占庭小教堂，守护着当时只是一个简陋渔村的定居点。渔民们在此祈求这位水手保护神的庇佑，村庄便在圣尼古拉斯的庇护下，随着潮起潮落缓慢生长。那时候，武利斯梅尼湖还是个与海隔绝的淡水潭，被当地人视为神秘之地，关于湖底通往往世或藏有宝藏的传说早已流传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点出现在13世纪，威尼斯人占领了克里特岛。精于航海和防御的威尼斯共和国看中了这个天然良港的战略位置。他们在俯瞰海湾的山丘上修建了坚固的堡垒，并将这个定居点重新命名为“圣尼古拉”。湖，也被他们利用起来，据说他们曾试图挖掘一条运河将湖与海连接，以扩大港口，这个大胆的工程是否成功已不可考，但无疑加深了湖与海相关联的想象。威尼斯统治留下了深深的烙印，从某些建筑的石砌工艺和布局中，依然能窥见那个海上帝国时代的影子。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，真正让小镇获得新生的是19世纪的一场悲剧。1864年，克里特岛爆发反抗奥斯曼统治的起义，来自斯皮纳隆加岛对岸的村庄“米拉贝洛”的难民为躲避战火，大量涌入相对安全的圣尼古拉斯地区。这些难民带来了劳动力、技能和社区网络。也是在这个时期，传说中的“无底湖”发生了根本变化。1870年，当地人终于开凿了一条狭窄的运河，将湖水与海湾连接起来。海水涌入，淡水潭变成了咸水湖，水位稳定，小型船只得以进出。这个工程奇迹不仅解决了实际问题，更让那个古老的传说变得“真实”起来——看，它果然通向大海！" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪六十年代，随着克里特岛旅游业的兴起，阿约斯尼古拉奥斯迎来了它的黄金时代。聪明的当地人没有大拆大建，而是利用其独特的自然禀赋：迷人的海港、神秘的湖泊、温和的气候。它吸引了艺术家、作家和寻求宁静的欧洲旅行者，逐渐从渔港转变为精致的度假小镇。湖边的仓库变成了咖啡馆，山坡上的老房子变成了精品酒店。那个曾经庇护渔民的圣尼古拉斯，如今也微笑着庇护着来自世界各地的旅人。它的历史，就像那湖水一样，一层层沉积下来——拜占庭的虔诚、威尼斯的精明、难民的坚韧与旅游时代的闲适，最终融合成了今天这个独一无二的、带着微笑面孔的海滨明珠。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`游览阿约斯尼古拉奥斯，最完美的方式是放任自己迷失，并遵循从“内核”到“外延”的节奏。建议在下午四点左右抵达，此时灼热的正午阳光开始变得温柔。先用两小时沉浸在最核心的湖区与老港口，感受小镇跳动的心脏。傍晚时分，当夕阳染红天空，沿着海滨长廊向北漫步，融入当地人的“ volta”（傍晚散步）仪式。晚餐后，再回到湖边，看它在灯光下变成一面深邃的墨玉。整体耗时约4-5小时，节奏务必放慢，让感官充分吸收这里的色彩、气味和声音。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季湖边和港口餐厅位置紧俏，如果想在黄金位置用餐，最好提前一天预订。
注意港口区域有些过于热情的店员招揽生意，礼貌拒绝即可，选择那些有当地人就餐的餐馆通常不会错。
小镇街道多台阶和坡道，务必穿一双绝对舒适的平底鞋。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先一头扎进镇中心的武利斯梅尼湖边，找一张面向湖水的咖啡馆椅子坐下，点一杯冰镇弗雷普咖啡，静静观察这潭被神话浸润的“无底之水”在日光下的变幻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着湖与海相连的那条短小运河上的小石桥漫步，看悠闲的海鱼在桥下的清澈海水中游弋，感受咸湿的海风从港口方向扑面而来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着阶梯式的小巷向下探索，一直走到老港口的防波堤上，触摸那些被晒得发烫的古老石块，看彩色的渔船“卡伊基亚”随着波浪轻轻摇摆。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从港口折返，爬上一小段坡，寻找那座不起眼的圣尼古拉斯小教堂，感受这座以小镇命名、却朴素得惊人的信仰原点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`混入傍晚海滨长廊上熙熙攘攘的人流，从北端开始向南慢慢走，欣赏米拉贝洛湾的落日如何将海面点燃成一片金红。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`短暂离开海边，钻进老城后街的市场和小店，嗅一嗅香料店的气息，听一听店主用带着浓重口音的英语招揽生意。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力尚可，沿着蜿蜒的道路登上城市西侧的山腰观景台，在夜幕完全降临前，俯瞰整个城镇如钻石项链般环绕海湾和湖泊亮起的灯火。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`武利斯梅尼湖的经典明信片视角`}</h4>
                  <p className="text-sm text-gray-700">{`站在湖北侧的人行道上，将湖心那座标志性的小铁桥、环湖的彩色建筑和后面山坡上的白房子一同纳入取景框，最佳光线在日出后一小时或日落前一小时。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`清晨的老港口防波堤`}</h4>
                  <p className="text-sm text-gray-700">{`趁游船尚未出动、海面如镜时，从防波堤末端用广角镜头拍摄港口全景，彩色的船只在平静的蓝色水面上形成完美的倒影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`阿吉奥伊·潘特斯教堂的蓝色穹顶`}</h4>
                  <p className="text-sm text-gray-700">{`从港口区某个小巷的阶梯向上仰拍，让洁白的墙体、蔚蓝的圆顶与纯净的天空构成经典的希腊三色构图，上午的光线最为清透。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城市北部山腰的观景台`}</h4>
                  <p className="text-sm text-gray-700">{`使用长焦镜头在黄昏“蓝色时刻”拍摄，压缩空间感，让城镇的万家灯火、港口的船只灯光与深蓝色的海湾背景交织成一幅璀璨的画卷。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`湖边咖啡馆的细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`下午利用侧光，聚焦于一杯冒着气泡的希腊咖啡、一本摊开的书和背景中湖水的局部波光，营造慵懒的度假氛围。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`当地人对于被拍摄通常很友好，但拍摄商店店主或渔民时，一个微笑和事先示意会让他们更放松。`}</li>
                <li>• {`日落后的“蓝色时刻”是拍摄港口夜景的魔法时间，天空呈深蓝色而灯光已亮起，记得带上三脚架。`}</li>
                <li>• {`避免在正午顶光下拍摄湖泊和海水，那时水面反光强烈，缺乏层次和色彩。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔梦幻之选`}</h4>
                  <p className="text-sm text-blue-800">{`直接坐落在武利斯梅尼湖边的家族式精品酒店，部分房间的阳台几乎悬在湖水之上，夜晚可以听着细微的水波声入睡，清晨独占第一缕照在湖面上的阳光。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老港口风情`}</h4>
                  <p className="text-sm text-green-800">{`由一艘经过精心改造的传统克里特帆船提供的独特住宿体验，停泊在安静的小湾内，随着海浪轻轻摇晃，让你真正以“海员”的视角醒来。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`悬崖隐居处`}</h4>
                  <p className="text-sm text-yellow-800">{`位于城镇东侧岬角上的白色洞穴风格酒店，房间拥有直面米拉贝洛湾的私人泳池和无边露台，极致的私密性与震撼的海景结合，是蜜月或寻求宁静者的天堂。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`市中心便利居所`}</h4>
                  <p className="text-sm text-purple-800">{`藏身于老城热闹街道后一栋宁静百年宅院内的公寓，拥有鲜花盛开的内庭，由一位热情的老奶奶经营，她能告诉你最地道的 taverna（小酒馆）在哪里。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "七月和八月是绝对旺季，房价飙升且一房难求，如果计划此时前往，至少提前三个月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "小镇治安非常好，夜间行走也很安全，但靠近港口的某些酒吧街在深夜可能比较喧闹，选择住宿时留意评价中关于噪音的反馈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "许多家庭经营的民宿不提供电梯，且位于山坡上，携带大件行李的游客需有所准备。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开阿约斯尼古拉奥斯好些天了，我闭上眼，最先想起的不是某个具体的画面，而是一种混合的感觉：皮肤上残留的地中海阳光的暖意，鼻腔里仿佛还萦绕着咖啡与海水混杂的气味，以及内心深处那份被湖水般的宁静浸润过的平和。这个地方教会我，旅行的意义有时不在于追逐清单上的名胜，而在于找到这样一个“缝隙”——一个让神话自然流淌进日常生活的缝隙，一个让你可以理直气壮地“浪费时间”、只是看着湖水变幻色彩的缝隙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个效率至上的时代，阿约斯尼古拉奥斯像是一个温柔的叛逆者。它拥抱着自己的传说（哪怕那传说可能源于一次工程开挖），也坦然接受着旅游带来的喧嚣，但它没有被任何一方吞噬。它保持着自己的节奏。那个深不可测的湖，就是它最好的隐喻：表面是悠闲的、明媚的、触手可及的生活；深处却连接着古老的海洋与神秘的故事。每一位热爱深度游的旅人都该来此停留几日，不是为了征服某个景点，而是为了让自己的内心也像那湖水一样，与更广阔、更古老、更缓慢的事物重新连接起来，然后带着这份深度的宁静，继续前行。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/portara-naxos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳克索斯波尔塔拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Naxos Portara</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/corfu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科孚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corfu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/papigo-villages-zagori" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕皮戈（扎戈里山区传统石屋村落）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Papigo (Zagori Stone Villages)</p>
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
