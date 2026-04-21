import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊万诺沃岩凿教堂群 Ivanovo Rock-Hewn Churches｜探秘垂直悬崖上的中世纪壁画圣殿 - 最佳欧洲景点',
  description: '说实话，当你第一眼看到它时，可能会有点懵。它不是一座矗立在山顶或平原上的宏伟教堂，而是一片几乎与赭黄色悬崖融为一体的、毫不起眼的洞穴群，高高悬挂在鲁塞山谷的绝壁之上。你需要仰起头，眯起眼睛，才能分辨出那些黑黢黢的洞口和隐约的人工修整痕迹。一种强烈的反差感瞬间击中你：下方是宁静流淌的鲁塞尼卡河与郁郁葱',
}

export default function IvanovoRockHewnChurchesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '保加利亚', href: '/destinations/europe' },
            { label: '鲁塞州', href: '/destinations/europe' },
            { label: '伊万诺沃岩凿教堂群', href: '/attractions/ivanovo-rock-hewn-churches' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`伊万诺沃岩凿教堂群・Ivanovo Rock-Hewn Churches・保加利亚・鲁塞州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，当你第一眼看到它时，可能会有点懵。它不是一座矗立在山顶或平原上的宏伟教堂，而是一片几乎与赭黄色悬崖融为一体的、毫不起眼的洞穴群，高高悬挂在鲁塞山谷的绝壁之上。你需要仰起头，眯起眼睛，才能分辨出那些黑黢黢的洞口和隐约的人工修整痕迹。一种强烈的反差感瞬间击中你：下方是宁静流淌的鲁塞尼卡河与郁郁葱葱的河谷，一片生机盎然；而上方的悬崖却沉默、冷峻，仿佛一个拒绝轻易接近的秘密。
开始攀登通往教堂的木质栈道和石阶，是真正体验的开始。风在耳边呼啸，脚下的木板偶尔发出轻微的吱呀声，提醒你正行走在数十米高的空中。手掌摸到的岩石粗糙而冰凉，带着历经千万年的质感。当你终于抵达第一个教堂的入口，弯腰钻进那个狭小的洞口时，外界所有的光线与声音仿佛瞬间被隔绝。取而代之的是一种凝滞的、带着泥土与古老石灰气息的凉意，包裹住你的皮肤。
而就在这片黑暗中，你的眼睛逐渐适应。然后，你看到了光——不是来自窗外，而是来自墙壁本身。手电或导览灯的光束缓缓扫过岩壁，仿佛唤醒了一个沉睡的梦境。那些十四世纪的圣像、圣经场景、使徒的面容，便从黑暗中一层层浮现出来。壁画的色彩历经七百年依然惊人地鲜活：深沉的绛红、温润的赭石、庄严的群青，还有大量使用的、象征着神圣与永恒的金箔。最震撼的是《最后的晚餐》中基督沉静的眼神，或是某位圣徒衣褶流畅的线条，它们不是画在平整的画布上，而是随着岩壁天然的起伏凹凸而流淌，人物仿佛从石头里生长出来，拥有了岩石的骨骼与生命。那一刻，你理解了“凿石为室，绘壁为灵”的全部意义。
这里早已没有常驻的修士，但它并非死寂的博物馆。在保加利亚人心中，这里依然是民族精神与信仰在奥斯曼统治黑暗时期顽强存续的象征。你会遇到专程前来静静祈祷的当地人，他们的低语在岩壁间轻轻回荡；也能看到艺术系学生带着画板，一坐就是半天，临摹那些永恒的线条。这座悬崖，是他们的精神堡垒，也是一部镌刻在石头里的、沉默而辉煌的史诗。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，当你第一眼看到它时，可能会有点懵。它不是一座矗立在山顶或平原上的宏伟教堂，而是一片几乎与赭黄色悬崖融为一体的、毫不起眼的洞穴群，高高悬挂在鲁塞山谷的绝壁之上。你需要仰起头，眯起眼睛，才能分辨出那些黑黢黢的洞口和隐约的人工修整痕迹。一种强烈的反差感瞬间击中你：下方是宁静流淌的鲁塞尼卡河与郁郁葱葱的河谷，一片生机盎然；而上方的悬崖却沉默、冷峻，仿佛一个拒绝轻易接近的秘密。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "开始攀登通往教堂的木质栈道和石阶，是真正体验的开始。风在耳边呼啸，脚下的木板偶尔发出轻微的吱呀声，提醒你正行走在数十米高的空中。手掌摸到的岩石粗糙而冰凉，带着历经千万年的质感。当你终于抵达第一个教堂的入口，弯腰钻进那个狭小的洞口时，外界所有的光线与声音仿佛瞬间被隔绝。取而代之的是一种凝滞的、带着泥土与古老石灰气息的凉意，包裹住你的皮肤。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而就在这片黑暗中，你的眼睛逐渐适应。然后，你看到了光——不是来自窗外，而是来自墙壁本身。手电或导览灯的光束缓缓扫过岩壁，仿佛唤醒了一个沉睡的梦境。那些十四世纪的圣像、圣经场景、使徒的面容，便从黑暗中一层层浮现出来。壁画的色彩历经七百年依然惊人地鲜活：深沉的绛红、温润的赭石、庄严的群青，还有大量使用的、象征着神圣与永恒的金箔。最震撼的是《最后的晚餐》中基督沉静的眼神，或是某位圣徒衣褶流畅的线条，它们不是画在平整的画布上，而是随着岩壁天然的起伏凹凸而流淌，人物仿佛从石头里生长出来，拥有了岩石的骨骼与生命。那一刻，你理解了“凿石为室，绘壁为灵”的全部意义。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里早已没有常驻的修士，但它并非死寂的博物馆。在保加利亚人心中，这里依然是民族精神与信仰在奥斯曼统治黑暗时期顽强存续的象征。你会遇到专程前来静静祈祷的当地人，他们的低语在岩壁间轻轻回荡；也能看到艺术系学生带着画板，一坐就是半天，临摹那些永恒的线条。这座悬崖，是他们的精神堡垒，也是一部镌刻在石头里的、沉默而辉煌的史诗。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`伊万诺沃岩凿教堂群`} />
                <InfoRow label="英文名称" value={`Ivanovo Rock-Hewn Churches`} />
                <InfoRow label="正式名称" value={`Ivanovo Rock-Hewn Churches`} />
                <InfoRow label="国家" value={`保加利亚`} />
                <InfoRow label="城市" value={`鲁塞州`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`作为联合国教科文组织世界遗产，它代表了保加利亚第二王国时期（13-14世纪）拜占庭艺术在巴尔干地区最辉煌、最独特的岩壁宗教遗存。`} />
                <InfoRow label="建筑特色" value={`并非传统“建造”，而是直接在高达数十米的垂直石灰岩悬崖的天然洞穴与人工开凿的窟室中，“雕刻”出完整的教堂、修道院居所与礼拜空间。`} />
                <InfoRow label="建筑风格" value={`以中世纪拜占庭艺术风格为主导，其建筑形式完全依附并顺应岩壁的天然形态，创造出独一无二的“负空间”建筑。`} />
                <InfoRow label="文化价值" value={`其保存完好的14世纪湿壁画，是理解拜占庭艺术后期发展、保加利亚民族艺术复兴以及东正教隐修传统在困境中存续的无可替代的瑰宝。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，但开放时段有季节性调整。夏季（5月至9月）通常为上午9:00至下午6:00，最晚入园时间下午5:30。冬季（10月至次年4月）开放时间缩短，通常为上午9:00至下午4:00，周一可能闭馆或仅限预约参观。具体开放时间可能在公众假期前临时调整，出发前务必查阅官网或当地旅游信息中心。`} />
              <InfoRow label="门票价格" value={`成人票约为10保加利亚列弗（约5欧元）。学生、65岁以上长者及团体（10人以上）可享受优惠票价，约为5列弗。6岁以下儿童免费。门票包含进入主要教堂遗址区和悬崖栈道。部分深度讲解团或特殊壁画保护区域参观可能需要额外付费预约。`} />
              <InfoRow label="地址" value={`Ivanovo Rock-Hewn Churches, 7088 Ivanovo, Ruse Province, Bulgaria`} />
              <InfoRow label="交通方式" value={`最近的国际机场是罗马尼亚首都布加勒斯特的亨利·科安德国际机场，或保加利亚首都索非亚机场。从布加勒斯特出发更为便捷：从布加勒斯特北站乘坐火车或大巴前往保加利亚的鲁塞市，车程约2-3小时，班次频繁。抵达鲁塞市后，你需要前往中央汽车站，转乘前往伊万诺沃村的小型巴士或合乘出租车，车程约40分钟，班次较少，最好提前确认返程时间。更推荐的方式是在鲁塞市租车自驾，沿70号公路向南行驶约20公里，路况良好且有清晰路标指示，自由度高。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从13世纪说起。当时，保加利亚正处在第二王国的黄金时期，宗教生活异常活跃。一位名叫约阿希姆的修士，据说后来成为了第一位保加利亚籍的特尔诺沃牧首，他看中了鲁塞尼卡河畔这片与世隔绝的悬崖。为什么是这里？也许是因为天然洞穴提供了现成的栖身之所，也许是因为陡峭的崖壁本身就是最好的防御，能确保隐修的绝对宁静。他和他的追随者们用最原始的工具——凿子、锤子、耐心和无穷的信仰，开始扩大这些洞穴，将它们变成祈祷室、礼拜堂和居住的单元格。想象一下那个场景：修士们腰间绑着绳索，悬挂在令人眩晕的高空，一锤一锤地敲打，石灰岩的粉末在阳光下飞舞，他们的祈祷声与敲击声在山谷间交织回响。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "到了14世纪，在伊凡·亚历山大沙皇的统治与资助下，这里迎来了最鼎盛的辉煌。沙皇本人很可能曾到访，并慷慨捐赠。这不再是简单的苦修之所，而成了一个拥有高水平画师和神学家的高级宗教艺术中心。来自君士坦丁堡或塞尔维亚的画师们被邀请至此，他们带来的不仅是颜料和技法，更是当时拜占庭世界最前沿的艺术理念。他们在新开凿的“圣母教堂”等主要窟室内作画。你知道吗，绘制湿壁画是一项与时间赛跑的艺术。画师必须在新鲜的、半湿的石灰泥壁上作画，颜料渗入墙壁，干燥后便成为墙壁永恒的一部分。在幽暗、通风不良的洞穴里，他们举着油灯，一笔一笔地描绘着天国的景象，让基督、圣母和众圣徒在岩石中获得永生。这些壁画风格典雅、表情生动、色彩华丽，尤其是人物眼睛中那种深邃的灵性刻画，达到了巴尔干地区宗教艺术的巅峰。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的急转弯很快到来。14世纪末，奥斯曼帝国的铁蹄踏碎了巴尔干的平静。随着第二保加利亚王国的灭亡，这片悬崖上的宗教绿洲也迅速衰落。资助断绝，修士流散，通往悬崖的小路逐渐被荒草淹没。那些精美的壁画，在随后几个世纪的动荡与遗忘中，独自面对潮湿、盐碱析出和自然风化。令人唏嘘的是，这种“被遗忘”在某种程度上反而成了一种保护。它躲过了大规模的战火破坏，也远离了后世不恰当的修缮改造，就像一枚被时间琥珀封存起来的艺术珍品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的重新发现，要等到19世纪末20世纪初。一些探险家和考古学家开始注意到本地关于“悬崖上的神迹”的传说。当第一批学者艰难地攀上悬崖，清理开洞口的杂物，用手电筒照亮内部时，他们所看到的景象被形容为“令人震惊的考古学与艺术史双重发现”。二十世纪中后期的系统性考古与研究，逐步揭示了其全貌和无可估量的价值。保加利亚政府与国际组织开始了漫长而小心翼翼的修复与加固工作，不仅要保护脆弱的壁画，还要稳定那些开凿在岩体中的、本身结构就充满风险的建筑空间。1997年，联合国教科文组织将其列入世界遗产名录，肯定了它作为“人类天才创造力的杰作”和“文化传统的独特见证”的地位。今天，我们看到的每一寸栈道、每一盏保护性灯光，背后都是无数人为了留住这片“石头中的圣光”所付出的努力。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议安排一整个上午（至少3-4小时）来深度探索这里。最好在开放后不久（比如夏季9:30）抵达，此时光线柔和，游客稀少，你能独享悬崖的宁静。游览节奏应该是“慢-沉浸-感受”。先在山谷底部仰望全景，建立空间感；然后攀登栈道，依次探访几个主要教堂窟室，在每个室内至少停留15-20分钟，让眼睛适应黑暗，细细品味壁画的细节；最后在崖壁平台稍作休息，俯瞰河谷，回味整个过程。千万不要匆忙赶路，这里的价值需要静下心来，用眼睛和想象力去“阅读”岩石与色彩写就的书。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿防滑耐磨的徒步鞋，部分栈道和石窟地面湿滑且不平。洞窟内严禁使用闪光灯，为了壁画保护也请尽量不要长时间用强光手电直射画面。夏季请带足饮用水，攀登过程颇为耗费体力，悬崖上几乎没有补给点。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在山谷底的观景平台驻足五分钟，抬头仰望那片镶嵌着无数黑洞的巨型悬崖，想象七百年前修士们如何在此悬空作业。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着依崖而建的木质栈道开始缓步攀登，感受脚下逐渐升高的视野和耳边越来越清晰的风声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`首先探访保存最完好的“圣母教堂”，猫腰进入低矮的入口，在昏暗中等待手电光慢慢揭示满墙绚烂到令人屏息的14世纪湿壁画真容。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`小心翼翼地触摸窟室内壁，感受人工开凿的凿痕与岩石天然的肌理如何融为一体，理解“建筑”于此地的不同含义。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`前往被称为“画室”的洞穴，据说这里是当年画师们工作和调制颜料的地方，试着寻找岩壁上可能残留的古老色粉痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在连接不同洞穴的露天崖壁走廊上，暂时不看壁画，只是俯瞰下方如绿色丝带般的鲁塞尼卡河与远处平缓的田野，体会修士们选择此地的修行心境。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后参观一个小型的、更为朴素的修士单人修行窟，内部仅容一人盘坐，在此静立片刻，感受极致的孤独与虔诚所能爆发出的惊人创造力。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿另一侧较为平缓的石阶路下山，回望悬崖，此时的教堂群在正午阳光下会呈现出与清晨截然不同的色彩与质感。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`河谷南侧远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，阳光会将整个悬崖染成温暖的金红色，使用长焦镜头可以压缩空间，拍下教堂洞穴如同神秘眼睛般点缀在巨大岩壁上的全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`栈道中途转折平台`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光能侧面照亮一部分岩壁和栈道，人物站在平台上以巨大的悬崖为背景，可以拍出极具探险感和尺度对比的人像照片。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“圣母教堂”入口内部向外拍`}</h4>
                  <p className="text-sm text-gray-700">{`将相机镜头对准低矮的教堂门口，以外面明亮的河谷和天空为过曝背景，框出参观者剪影正在进入黑暗洞穴的瞬间，寓意“步入历史与神圣”。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`壁画细节特写`}</h4>
                  <p className="text-sm text-gray-700">{`在获得管理员允许且不使用闪光灯的前提下，用大光圈镜头近距离捕捉壁画中圣人眼眸、衣饰金箔或天使翅膀的局部，确保画面充满温暖的侧光以表现质感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`悬崖顶部俯瞰视角`}</h4>
                  <p className="text-sm text-gray-700">{`需要无人机或在特定批准区域拍摄，展现教堂群如同悬挂在垂直绿洲上的惊人地形，以及蜿蜒河流环绕的宏观地貌。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`石窟内部极度昏暗，壁画又非常脆弱，提升感光度（ISO）拍摄噪点明显的照片，远比使用破坏性补光灯更有意义。许多最精彩的壁画位于穹顶或高处，尝试低角度仰拍，将岩壁的肌理作为天然画框。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`河畔隐居小屋`}</h4>
                  <p className="text-sm text-blue-800">{`位于鲁塞尼卡河畔，离教堂群仅几步之遥的质朴家庭旅馆，夜晚能听到潺潺水声，清晨在鸟鸣中醒来，老板会为你准备装满当地奶酪和蜂蜜的野餐篮。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`鲁塞市历史中心设计师公寓`}</h4>
                  <p className="text-sm text-green-800">{`住在多瑙河畔的文化名城鲁塞，选择一栋19世纪新巴洛克风格建筑里的现代公寓，白天探访悬崖教堂，晚上享受城市的咖啡馆与河滨漫步，体验古今交替。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色农场民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`在伊万诺沃村附近的传统保加利亚农场住下，石头房子冬暖夏凉，可以参与采摘或品尝家酿葡萄酒，主人能讲述许多关于悬崖教堂不为人知的民间传说。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`多瑙河观景酒店`}</h4>
                  <p className="text-sm text-purple-800">{`如果想追求舒适，鲁塞市有几家坐拥多瑙河壮丽景色的四星级酒店，提供完善的设施，开车前往景点仅需半小时，适合希望将探险与舒适完美结合的旅行者。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果希望获得最沉浸的体验，强烈推荐在伊万诺沃村或附近住一晚，这样你可以在清晨游客大军抵达前，或傍晚日落时分独享教堂群的魔力。鲁塞州整体治安良好，但乡村地区夜晚照明较少，自驾需注意道路上的农用车辆或动物。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开伊万诺沃很久以后，我闭上眼，脑海里浮现的往往不是某一幅具体的壁画，而是那种整体的感觉：一种在绝对险峻与绝对静谧中孕育出的极致美丽。它不像那些坐落于都市中心的宏伟教堂，用高度和奢华宣告神权与王权的结合；它恰恰相反，它选择隐藏、选择艰难、选择与岩石共生共灭。这种选择本身就充满了震撼人心的力量。它告诉你，信仰与艺术的火花，并不总在繁华中绽放，有时它就在绝壁的裂缝里，在需要你付出汗水攀登才能抵达的孤独中，燃烧得最为纯粹、最为炽烈。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求快速打卡、信息过载的时代，伊万诺沃是一个温柔的“反叛者”。它拒绝被轻易消费。你需要为它付出体力、时间和专注。而作为回报，它会给你一种久违的“连接感”——与那些在绝壁上凿刻梦想的中世纪修士连接，与一种将全部精神世界浓缩于方寸岩壁的执着连接，最终，也与那个愿意为追寻深刻体验而离开舒适区的自己连接。这不仅仅是一次观光，更像是一次精神上的轻微跋涉。它静静立在保加利亚北部的山谷里，等待着那些不满足于表面风景的旅人，前去叩响那扇凿在石头上的、通往过去与内心深处的门。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/sozopol-old-town-black-sea" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    索
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">索佐波尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sozopol</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/koprivshtitsa-bulgaria" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科普里夫什蒂察（保加利亚民族复兴时期的彩绘起义小镇）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Koprivshtitsa</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/nesebar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    内
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">内塞巴尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Nesebar</p>
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
