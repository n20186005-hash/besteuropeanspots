import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦尔斯 Vals Therme｜隐匿于阿尔卑斯深谷的石英岩光影迷宫 - 最佳欧洲景点',
  description: '车子在阿尔卑斯深谷里不知拐过了第多少个弯，当那个几乎与山体同色、低矮而敦实的建筑群出现在眼前时，你首先感受到的不是震撼，而是一种奇异的安宁。它不像一座建筑，更像一块被溪流和时光冲刷了亿万年的巨大岩石，从瓦尔斯村这片海拔1200多米的山坡上自然生长出来。空气是清冽的，带着松针和雪水的味道，耳边只有远处',
}

export default function ValsThermePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '瓦尔斯', href: '/attractions/vals-therme' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦尔斯・Vals・瑞士・格劳宾登州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在阿尔卑斯深谷里不知拐过了第多少个弯，当那个几乎与山体同色、低矮而敦实的建筑群出现在眼前时，你首先感受到的不是震撼，而是一种奇异的安宁。它不像一座建筑，更像一块被溪流和时光冲刷了亿万年的巨大岩石，从瓦尔斯村这片海拔1200多米的山坡上自然生长出来。空气是清冽的，带着松针和雪水的味道，耳边只有远处瓦尔斯河奔流的白噪音，还有牛铃偶尔从草坡上叮当传来。对当地人来说，这里远不止是一个吸引游客的“景点”，它是村子的心脏，是世代相传的疗愈源泉，也是连接古老山地传统与现代世界的一座静谧桥梁。
推开那扇沉重的、毫不起眼的门，世界瞬间被调换了频道。闷热湿润的空气包裹上来，带着一丝淡淡的、类似于石头的矿物气息。光线陡然变暗，然后你便看到了它们——数万片本地采掘的Valser石英岩，被切割成整齐的片石，像一部巨型的、充满韵律的地质史书，层层叠叠地垒砌成墙壁、天花板和池沿。灯光被精心隐藏在石缝和水下，不是照亮，而是“浸染”。暖黄的光从石壁深处渗出，冷蓝的光在池底静静流淌，光影在水汽的折射下变得朦胧而富有质感，仿佛整座建筑都在缓慢地呼吸。
脱下一切外在的束缚，赤脚踩在微凉而粗糙的石面上，那种触感直接而原始。你会不自觉地压低声音，甚至沉默，因为这里的空间似乎在要求你这样做。水温各异，从冰凉刺骨的“冷水池”到热得让人深吸一口气的“火池”。你可以躺在“室内池”仰望从石顶缝隙中漏下的一线天光，也可以游过一条幽暗的通道，忽然置身于“室外池”——凛冽的山风刮过脸颊，而身体却浸泡在37度的热汤里，眼前是深邃的星空或覆盖着白雪的锯齿状山脊。在这里，沐浴不再是清洁，而成了一种仪式，一种用全身皮肤去阅读石头、水和光的冥想。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在阿尔卑斯深谷里不知拐过了第多少个弯，当那个几乎与山体同色、低矮而敦实的建筑群出现在眼前时，你首先感受到的不是震撼，而是一种奇异的安宁。它不像一座建筑，更像一块被溪流和时光冲刷了亿万年的巨大岩石，从瓦尔斯村这片海拔1200多米的山坡上自然生长出来。空气是清冽的，带着松针和雪水的味道，耳边只有远处瓦尔斯河奔流的白噪音，还有牛铃偶尔从草坡上叮当传来。对当地人来说，这里远不止是一个吸引游客的“景点”，它是村子的心脏，是世代相传的疗愈源泉，也是连接古老山地传统与现代世界的一座静谧桥梁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`推开那扇沉重的、毫不起眼的门，世界瞬间被调换了频道。闷热湿润的空气包裹上来，带着一丝淡淡的、类似于石头的矿物气息。光线陡然变暗，然后你便看到了它们——数万片本地采掘的Valser石英岩，被切割成整齐的片石，像一部巨型的、充满韵律的地质史书，层层叠叠地垒砌成墙壁、天花板和池沿。灯光被精心隐藏在石缝和水下，不是照亮，而是“浸染”。暖黄的光从石壁深处渗出，冷蓝的光在池底静静流淌，光影在水汽的折射下变得朦胧而富有质感，仿佛整座建筑都在缓慢地呼吸。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`脱下一切外在的束缚，赤脚踩在微凉而粗糙的石面上，那种触感直接而原始。你会不自觉地压低声音，甚至沉默，因为这里的空间似乎在要求你这样做。水温各异，从冰凉刺骨的“冷水池”到热得让人深吸一口气的“火池”。你可以躺在“室内池”仰望从石顶缝隙中漏下的一线天光，也可以游过一条幽暗的通道，忽然置身于“室外池”——凛冽的山风刮过脸颊，而身体却浸泡在37度的热汤里，眼前是深邃的星空或覆盖着白雪的锯齿状山脊。在这里，沐浴不再是清洁，而成了一种仪式，一种用全身皮肤去阅读石头、水和光的冥想。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦尔斯`} />
                <InfoRow label="英文名称" value={`Vals`} />
                <InfoRow label="正式名称" value={`瓦尔斯温泉浴场`} />
                <InfoRow label="国家" value={`瑞士`} />
                <InfoRow label="城市" value={`格劳宾登州`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一处将万年地热温泉与二十世纪极简主义建筑哲学完美融合的巅峰之作。`} />
                <InfoRow label="建筑特色" value={`完全由本地开采的层叠石英岩片石砌筑，创造出光线、水体、石材与人体感官交融的洞穴式空间。`} />
                <InfoRow label="建筑风格" value={`极简主义 / 地域主义现代建筑。`} />
                <InfoRow label="文化价值" value={`超越了单纯的洗浴功能，成为一处让人沉思自然、材料与时间关系的“现象学”建筑圣地。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`浴场全年无休，每日开放时间为上午11:00至晚上8:00。桑拿世界（含静默区）开放时间为上午11:00至晚上10:00。请注意，入浴时间最晚为晚上7:00。圣诞节（12月24日）和元旦前夜（12月31日）会提前至下午6点关闭。旺季（冬季滑雪季及夏季徒步季）建议提前查询具体安排。`} />
              <InfoRow label="门票价格" value={`温泉浴场（不含桑拿世界）成人票价为80瑞士法郎/4小时，或90瑞士法郎/全天。桑拿世界通票（含温泉浴场）为130瑞士法郎/全天。住店客人通常享受折扣或免费入场。16-25岁青年及持有瑞士旅行通票者享有优惠票价。6岁以下儿童免费。建议提前在线购票以确保名额，尤其是在周末和节假日。`} />
              <InfoRow label="地址" value={`Therme Vals, 7132 Vals, Switzerland`} />
              <InfoRow label="交通方式" value={`从苏黎世国际机场出发，最便捷的方式是乘坐火车。首先搭乘火车前往库尔（Chur），车程约1小时20分钟，班次频繁。在库尔换乘前往伊兰茨（Ilanz）的区域列车，车程约30分钟。最后在伊兰茨乘坐邮政巴士（PostBus）No. 441，沿着蜿蜒而上的Valsertal山谷公路行驶约40分钟，直达瓦尔斯村，巴士站就在温泉浴场附近。全程约3-3.5小时。自驾则从库尔出发，沿着19号公路行驶，路况良好但多弯道，冬季务必使用雪地轮胎或链条。村子很小，停车位有限，建议提前与住宿处确认。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从地球的脉搏说起。在瓦尔斯深邃的地下，沸腾的温泉已经涌动了数千年，水温恒定在30摄氏度左右，富含独特的矿物质。关于这处泉眼的疗愈力量，最早的文字记录可以追溯到青铜时代，但真正让它融入社区生活的，是1893年建成的第一个简陋的浴室，村民们在这里治疗风湿，洗涤劳作后的疲惫，也交换山谷里的新闻。那时的浴场，功能单纯，就是山民生活的一部分，朴实无华。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间快进到二十世纪下半叶，旅游业的风也吹进了这座偏远的山谷。老浴场进行了现代化扩建，增加了酒店和泳池，试图吸引更多游客。然而，到了1980年代，这套设施已然陈旧过时，经营难以为继，甚至面临被拆除的命运。就在这个关键的十字路口，瓦尔斯村的村民们做出了一个大胆得令人惊讶的决定：他们共同集资买下了浴场，并决定不是简单地翻新，而是要建造一个真正配得上这片土地和泉水的、独一无二的新浴场。他们想要的，不是流行的水上乐园，而是一个能让人感受自然、回归宁静的圣地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，建筑史上传奇的一页在此展开。1990年，当时还名不见经传的瑞士建筑师彼得·卒姆托接到了这个委托。他没有急于画图，而是花了大量时间在瓦尔斯行走、感受，研究当地的石材和光线。他的灵感直接来源于山谷本身：那些层理分明的山崖，溪流切割出的石缝，还有村民们用石英岩片石垒砌谷仓的传统技艺。他提出了一个近乎偏执的概念：新浴场应该像从山体中开采出来的一样，主要使用且只使用本地的一种材料——Valser石英岩。每一块石头都被精确切割成六种标准尺寸，然后像拼图一样干垒，不用砂浆，仅凭重力咬合，创造出既坚固又充满细腻纹理的肌理。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建造过程本身就是一场与材料的对话。石匠们古老的技艺被重新唤醒，他们必须理解每一块石头的个性。1996年，新浴场落成，它立刻震惊了世界建筑界。卒姆托创造的不是一个“房子里的水池”，而是一个连续的、洞穴般的空间序列。光线被设计为建筑的主角之一，狭窄的天窗、墙缝和水下的灯，共同导演了一场永恒的光影戏剧。水在不同形态、温度的空间中流动，引导着人的体验。这里没有多余的装饰，唯一的奢华就是材料本身、空间的比例和涌入的自然。它不仅拯救了温泉，更重新定义了建筑与自然、与传统、与人类感官体验的关系，成为教科书级的现象学建筑典范。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`想要真正沉浸于瓦尔斯的魔力，请务必安排一整个白天甚至过夜。理想的节奏是午后抵达，办理入住后稍作休整，在下午三点左右进入浴场。此时，上午的游客潮已退，而夜晚的桑拿爱好者尚未涌入，你能享有相对宁静的空间。先用1-2小时彻底探索温泉区的每一个水池和角落，让身体适应不同的水温，并观察光影从午后到黄昏的变化。傍晚时分，正是室外池最美的时刻，可以边泡汤边欣赏阿尔卑斯的日落。晚上七点后，可以转战神秘的“桑拿世界”，体验更加热辣和静谧的仪式（需裸体，男女混合或分时段单性别区域，请提前了解当日安排）。最后，带着彻底放松的身心回到房间，在绝对的寂静中沉沉睡去。第二天早上，如果精力允许，可以在晨光中再泡一次，感受山谷苏醒的气息。这样的安排能让你完整经历光线、氛围和身体感受的完整循环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`绝对不要在周末或瑞士公共假期的下午高峰时段前往，否则宁静的冥想体验会大打折扣。
浴场内严禁拍照（手机最好锁进更衣室衣柜），请彻底放下拍摄任务，用眼睛和身体去记录。
务必带上最好的浴袍和拖鞋（酒店通常会提供），并在沐浴后充分补水，高山温泉和桑拿脱水效应比想象中强。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在午后斜阳中第一次推开厚重的石门，让湿润的矿物气息和幽暗的光线包裹全身作为序曲`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赤脚沿着微凉的石英岩地面探索，从水温沁凉的“冷水池”开始，逐步让身体适应并走向温暖的“室内主池”`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主池中央缓缓躺下，漂浮在水中，专注地仰望那道从头顶石缝中倾泻而下的、随时间移动的“光之瀑布”`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找到那条水下通道，深吸一口气潜入，从室内温暖的朦胧游向室外池清冷开阔的豁然开朗`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在室外池将身体浸入热汤，只露出头颅，静静凝视对面雄峻的Piz Aul山崖被夕阳染成金红`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在连接不同水池的、如石窟般幽暗的走廊中慢行，用指尖触摸每一片粗糙而温润的石墙肌理`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分踏入桑拿世界的“火之礼堂”，在滚烫的空气中彻底放空，随后跳进户外的雪地或冷水槽（视季节）`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在浴场附设的宁静酒吧喝一杯温暖的草本茶，让恢复平静的感官回味整个下午的光影与水波记忆`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`酒店客房阳台或窗前`}</h4>
                  <p className="text-sm text-gray-700">{`入住 Therme Hotel 或7132 Hotel部分房型，在清晨七点左右的晨光中，可以框取浴场建筑与背后巍峨山体、晨雾缭绕的经典全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`村庄山坡高处徒步小径`}</h4>
                  <p className="text-sm text-gray-700">{`从浴场后方沿小路上山约15分钟，有一处开阔草坪，下午顺光时分，能拍下浴场低伏于山谷村落中的整体形态与地理关系。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`浴场入口处的水镜面`}</h4>
                  <p className="text-sm text-gray-700">{`在开放时间前或后，利用入口前静态水池的倒影，在晴朗天气的蓝调时刻（日出后或日落前），拍摄建筑简洁几何线条与水中倒影的对称构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`瓦尔斯河桥边`}</h4>
                  <p className="text-sm text-gray-700">{`站在横跨瓦尔斯河的旧石桥上，以奔腾的清澈河水为前景，远眺温泉浴场建筑群，展现其与自然力量的共生关系。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重浴场内部严禁摄影的规定，这是为了保障所有客人的隐私和沉浸体验，将相机精力集中于外部环境与建筑的关系刻画上。`}</li>
                <li>• {`高山光线变化极快且强烈，建议使用偏光镜来消除石墙和水面的反光，更好地捕捉石英岩的质感与色彩。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`极致建筑体验`}</h4>
                  <p className="text-sm text-blue-800">{`直接下榻与浴场融为一体的7132 Hotel，由卒姆托等多位普利兹克奖大师设计房间，部分房型拥有私人温泉接入，是深度感受建筑哲学的终极选择。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`经典温泉酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择Therme Hotel by 7132，房间温馨质朴，房价包含无限次进入温泉浴场，推窗即是山景，性价比之选。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐居山间民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`预订瓦尔斯村里由古老木屋改造的家庭式民宿，例如Gasthof Hof，体验真正的格里松州乡村 hospitality，早晨在牛铃声中醒来，步行片刻即可抵达浴场。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高山小屋情怀`}</h4>
                  <p className="text-sm text-purple-800">{`对于徒步爱好者，可以选择位于更高处山间的登山小屋，在徒步一天后下山泡汤，享受冰火两重天的极致放松。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`瓦尔斯村非常小，住宿选择有限，尤其在滑雪季（12月-4月）和夏季徒步旺季（7月-8月），务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`村子治安极好，夜晚一片静谧，但除了酒店餐厅外，几乎没有夜生活，请准备好享受真正的隐居时光。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开瓦尔斯很久以后，那种由石头、水和光共同编织的感官记忆，依然会不时地浮现。它不像参观一座宏伟教堂或宫殿那样，带来的是历史的压迫感或艺术的冲击力。它提供的是一种“内化”的体验。你在那里度过的时间，是向内行走的。身体感受的冷与热、光滑与粗糙、明亮与幽暗，都在悄然重置你被城市生活钝化的感知系统。你会发现，自己竟然能如此清晰地记得某一块石头的纹理，某一刻光线在水雾中形成的彩虹，以及寂静中自己心跳的声音。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、刺激和碎片化体验的世界里，瓦尔斯的存在像是一个坚定的反叛。它用极致的简约和对材料的忠诚，提醒我们：奢华不必是金碧辉煌，而是与自然元素建立深刻的连接；旅行不必是填满行程，而是留出空白，让一个地方真正地渗透你。它不仅仅是一个温泉，更是一个现代主义的朝圣地，一次关于如何“栖居”的深刻教学。每一位热爱深度游的旅人，都该来此经历一次这样的“感官斋戒”与“精神复元”，你会带走的东西，远比几张照片丰富得多——那是一份重新学会感受的宁静，以及关于建筑如何能拥有灵魂的启示。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/romainmotier-priory" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    罗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">罗曼穆捷隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Romainmôtier Priory</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rhine-falls" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沙
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沙夫豪森莱茵瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rhine Falls</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lunigo-roman-ruins" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    卢
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">卢尼古罗马遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roman Ruins of Lunnigo</p>
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
