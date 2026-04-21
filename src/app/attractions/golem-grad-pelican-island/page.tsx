import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '大格拉德岛 Golem Grad｜探秘普雷斯帕湖心鹈鹕王国与千年拜占庭废墟 - 最佳欧洲景点',
  description: '当小船的引擎声熄灭，你赤脚踏上大格拉德岛粗粝的沙滩时，第一个迎接你的不是人声，而是翅膀划破空气的哗啦声，混合着浓烈的、带着鱼腥和鸟粪的原始气息。抬头望去，成百上千只白鹈鹕和鸬鹚像一片片移动的云，栖息在悬崖边的枯松上，或优雅地掠过碧蓝如镜的湖面。这里的一切都提醒你：人类是访客，它们才是岛主。岛上的寂静',
}

export default function GolemGradPelicanIslandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '北马其顿', href: '/destinations/europe' },
            { label: '西南大区，临近普雷斯帕湖边的村庄如奥特谢沃（Oteshevo）', href: '/destinations/europe' },
            { label: '大格拉德岛（鹈鹕岛）', href: '/attractions/golem-grad-pelican-island' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`大格拉德岛（鹈鹕岛）・Golem Grad・北马其顿・西南大区，临近普雷斯帕湖边的村庄如奥特谢沃（Oteshevo）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当小船的引擎声熄灭，你赤脚踏上大格拉德岛粗粝的沙滩时，第一个迎接你的不是人声，而是翅膀划破空气的哗啦声，混合着浓烈的、带着鱼腥和鸟粪的原始气息。抬头望去，成百上千只白鹈鹕和鸬鹚像一片片移动的云，栖息在悬崖边的枯松上，或优雅地掠过碧蓝如镜的湖面。这里的一切都提醒你：人类是访客，它们才是岛主。岛上的寂静是厚重的，能听到风穿过松针，远处鹈鹕低沉的咕噜声，还有自己踩在松软腐殖土和碎陶片上的脚步声。
穿过一片低矮的松林和茂密的灌木，那些沉睡的石头才开始显露真容。它们不是宏伟的宫殿，而是谦卑的、几乎要被大地重新吞没的废墟。半塌的拱门从荆棘中探出，墙基的线条在树根下蜿蜒。阳光透过枝叶，在刻有模糊十字架的砂岩上投下斑驳光影。你会忍不住伸手触摸那些石头，冰凉粗糙的质感，带着湖区的湿气，仿佛能直接触碰到一千五百年前的祷告。最奇妙的感觉来了——在这里，时间不是线性的。古罗马修士的虔诚、拜占庭工匠的汗水、战乱难民的恐惧，以及数百年来鹈鹕一代代的繁衍，所有这些层叠的时间，都被压缩在这个三平方公里的小岛上，安静得震耳欲聋。
当地人谈起大格拉德岛，眼神里总带着一丝敬畏。它不像普通的旅游景点，更像一个仍然活着的传说。渔夫会告诉你风向如何影响登岛，老人们会说起它“蛇岛”的旧名（虽然现在蛇已罕见）。这里没有咖啡馆，没有纪念品商店，它的魅力正在于这份未被“驯化”的野性。它的核心不是让你消费一段历史，而是让你亲身踏入一段自然与文明共同书写的、仍在呼吸的史诗。在这里，你能最真切地感受到，当人类退场，自然如何温柔又坚定地接管一切，并用羽毛和绿意，为古老的石头唱起永恒的安魂曲。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当小船的引擎声熄灭，你赤脚踏上大格拉德岛粗粝的沙滩时，第一个迎接你的不是人声，而是翅膀划破空气的哗啦声，混合着浓烈的、带着鱼腥和鸟粪的原始气息。抬头望去，成百上千只白鹈鹕和鸬鹚像一片片移动的云，栖息在悬崖边的枯松上，或优雅地掠过碧蓝如镜的湖面。这里的一切都提醒你：人类是访客，它们才是岛主。岛上的寂静是厚重的，能听到风穿过松针，远处鹈鹕低沉的咕噜声，还有自己踩在松软腐殖土和碎陶片上的脚步声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "穿过一片低矮的松林和茂密的灌木，那些沉睡的石头才开始显露真容。它们不是宏伟的宫殿，而是谦卑的、几乎要被大地重新吞没的废墟。半塌的拱门从荆棘中探出，墙基的线条在树根下蜿蜒。阳光透过枝叶，在刻有模糊十字架的砂岩上投下斑驳光影。你会忍不住伸手触摸那些石头，冰凉粗糙的质感，带着湖区的湿气，仿佛能直接触碰到一千五百年前的祷告。最奇妙的感觉来了——在这里，时间不是线性的。古罗马修士的虔诚、拜占庭工匠的汗水、战乱难民的恐惧，以及数百年来鹈鹕一代代的繁衍，所有这些层叠的时间，都被压缩在这个三平方公里的小岛上，安静得震耳欲聋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当地人谈起大格拉德岛，眼神里总带着一丝敬畏。它不像普通的旅游景点，更像一个仍然活着的传说。渔夫会告诉你风向如何影响登岛，老人们会说起它“蛇岛”的旧名（虽然现在蛇已罕见）。这里没有咖啡馆，没有纪念品商店，它的魅力正在于这份未被“驯化”的野性。它的核心不是让你消费一段历史，而是让你亲身踏入一段自然与文明共同书写的、仍在呼吸的史诗。在这里，你能最真切地感受到，当人类退场，自然如何温柔又坚定地接管一切，并用羽毛和绿意，为古老的石头唱起永恒的安魂曲。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`大格拉德岛（鹈鹕岛）`} />
                <InfoRow label="英文名称" value={`Golem Grad`} />
                <InfoRow label="正式名称" value={`Golem Grad (Snake Island)`} />
                <InfoRow label="国家" value={`北马其顿`} />
                <InfoRow label="城市" value={`西南大区，临近普雷斯帕湖边的村庄如奥特谢沃（Oteshevo）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`普雷斯帕湖中唯一有人类定居痕迹的岛屿，曾是早期基督教隐修圣地，后成为战乱时期的避难所。`} />
                <InfoRow label="建筑特色" value={`散落在野生松林与巨石间的早期基督教教堂废墟，由粗糙的当地石灰岩砌成，与自然环境完全融为一体。`} />
                <InfoRow label="建筑风格" value={`主要为古罗马晚期及早期拜占庭风格，带有简单的巴西利卡布局和原始的拱顶结构。`} />
                <InfoRow label="文化价值" value={`一个自然力量最终覆盖并守护人类文明遗迹的绝佳例证，展现了生态、历史与精神的罕见共生。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`通常为每年5月中旬至10月上旬，每日开放。具体登岛时间完全依赖于湖面天气状况及船夫安排，一般为上午9点至下午5点之间。必须通过当地授权导游或船家预约，不可自行前往。冬季及恶劣天气期完全关闭。`} />
              <InfoRow label="门票价格" value={`无独立门票。登岛费用包含在必须聘请的当地向导服务及船只租赁费中，费用因团队人数和船只大小而异，大致每人约20-40欧元（含向导讲解）。没有学生或老人等特殊票价，一切费用需提前与向导协商确定。`} />
              <InfoRow label="地址" value={`Golem Grad, Prespa Lake, 7318 Municipality of Resen, North Macedonia`} />
              <InfoRow label="交通方式" value={`首先需要抵达北马其顿首都斯科普里或邻国阿尔巴尼亚的机场。从斯科普里租车自驾南下至普雷斯帕湖区域（如Resen市或Oteshevo村），车程约3小时。最实际的抵达方式是预先联系好当地持证向导，约定在湖畔特定码头（如斯特尼耶Stenje或奥特谢沃Oteshevo的码头）碰面。向导会安排木质小船载你上岛，船程约20-40分钟，视具体出发码头和风浪情况而定。船只班次完全依赖预约，无固定公共交通。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "大格拉德岛的故事，始于湖水，也归于湖水。早在罗马帝国的余晖中，第一批基督徒就看中了这座湖心孤岛的与世隔绝。想象一下，公元四五世纪，某个决心与尘世告别的修士，划着小船来到这里。松林寂静，湖水环绕，这简直是天然的神圣堡垒。他们砍下树木，搬运湖边滩涂的石头，建起了最初的小型礼拜堂和隐修居所。这些石头建筑简陋却坚固，遵循着早期基督教巴西利卡的形制，空间低矮，光线幽暗，只为服务最纯粹的祷告生活。岛上的淡水泉眼成了上帝的恩赐，支撑着这个小而坚韧的灵性社群。在帝国动荡的年代，这座岛成了一叶诺亚方舟，承载着信仰的火种。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，宁静并未持续数个世纪。随着拜占庭帝国与保加利亚第一帝国在此拉锯，普雷斯帕湖区域成了战略要冲。岛上的定居点从纯粹的修道院，逐渐演变成为附近沿岸居民在战乱时的避难所。人们开始加固建筑，可能还建起了简单的防御工事。那些如今掩埋在树根下的陶罐碎片和工具，或许就属于某个拖家带口、仓皇划船登岛的农民家庭。教堂在原有基础上被扩建或修缮，粗糙的墙壁上也许曾有过简单的湿壁画，描绘着圣徒的面容，给恐慌的心灵以慰藉。岛屿的历史层，从此叠加了世俗的生存重量。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪中期之后，由于更复杂的历史原因和可能的环境变化（如水位上涨或疾病），岛屿上的人类活动逐渐减少，最终被完全放弃。人声消散，门廊倒塌。但自然从未遗忘这里。风带来的松树种子在废墟的裂缝中发芽，水鸟发现了这片没有天敌的完美栖息地。尤其是鹈鹕和鸬鹚，它们庞大的群体开始占领海岸和岩壁，年复一年，用数吨计的鸟粪“粉刷”着岩石，滋养出异常茂盛的植被。人类遗迹被缓慢而有效地包裹、隐藏、转化。大格拉德岛完成了从“人文岛屿”到“鹈鹕王国”的政权交接。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "现代意义上的“重新发现”已是十九世纪末二十世纪初的事。考古学家和博物学家像寻宝者一样来到岛上，他们既为那些几乎被苔藓完全覆盖的教堂地基感到兴奋，也为遮天蔽日的鸟群感到震惊。“鹈鹕岛”的名字不胫而走。近几十年的考古工作小心翼翼地清理了部分主要遗址，确认了三座教堂和一座大型巴西利卡式建筑的遗迹，还发现了古老的墓穴。但为了保护岛上极度敏感的生态系统和考古层，北马其顿政府采取了最审慎的态度：不进行大规模开发，不修建任何永久性设施，将访客数量控制在最低，且必须由专业向导陪同。于是，大格拉德岛得以保持它最珍贵的气质——一个偶然凝固的时空胶囊，让每一位登岛者，都成为小心翼翼的时空穿越客。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的登岛之旅始于清晨。建议前一晚住宿在普雷斯帕湖畔的村庄，与向导约好最早的一班船（通常早上8-9点）。清晨湖面通常最平静，光线也最柔和，能拍到仙境般的湖光山色，鸟类活动也最活跃。整个游览耗时约4-5小时，包括往返船程和在岛上的2.5-3小时步行探索。节奏必须“慢”。这不是打卡之旅，而是沉浸式观察。向导会带领你沿着一条既定的生态小径行走，这条路在保护遗址和鸟巢之间取得了精妙平衡。你会先感受自然王国的震撼，再逐步探寻人类遗迹的余温，最后在岛的高处获得全景视角，完成对这段共生史诗的理解。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必听从向导指挥，绝对不可偏离小径，以免踩踏鸟巢或未发掘的考古遗址。岛上日照强烈且无遮蔽，必须戴帽、涂抹高倍数防晒霜，并携带充足的饮用水。穿着坚固防滑的徒步鞋，道路多碎石和盘根错节。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在向导的带领下从主滩涂轻轻走入松林，立刻被数千只鹈鹕筑巢的喧嚣声和浓烈的生命气息所包围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`弯腰穿过低矮的橡木丛，猝不及防地与第一座小教堂的半圆形后殿相遇，看藤蔓如何如天然帷幔般覆盖着古老的祭坛空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿碎石小径向上，来到规模最大的巴西利卡式教堂遗址，站在中殿想象当年修士们在此吟唱，而如今只有蜥蜴在墙头的十字架雕刻上晒太阳。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在向导的指引下辨认散落林间的陶器碎片和石砌蓄水池的痕迹，触摸这些日常生活沉默的证人。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`攀上岛屿西侧的岩石观景点，眼前豁然开朗，将湛蓝的普雷斯帕湖、对岸希腊和阿尔巴尼亚的群山以及脚下盘踞废墟的鹈鹕王国尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`返回滩涂的路上保持绝对安静，有幸便能观察到成年鹈鹕归巢哺育幼鸟的温馨场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离岛前最后回望，让那片绿意覆盖的石头和漫天飞羽的景象深深印入脑海。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主滩涂仰拍鸟群与松林`}</h4>
                  <p className="text-sm text-gray-700">{`清晨登岛时，回身从湖面方向拍摄岛屿全景，以漫天飞鸟和层叠的绿林为背景，捕捉生机勃勃的第一印象。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`巴西利卡遗址的框景构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在一处完整的门廊废墟内，向外拍摄，用石拱门作为画框，框住远处湖光和林中若隐若现的其他废墟，形成深邃的时空隧道感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`岩石观景点的全景接片`}</h4>
                  <p className="text-sm text-gray-700">{`在岛屿西侧制高点，使用广角镜头或手机全景模式，将湖泊、三国边界线、废墟森林和天空中的鸟群全部容纳进一幅画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`微距下的历史细节`}</h4>
                  <p className="text-sm text-gray-700">{`聚焦于某块刻有清晰十字架或几何图案的建筑石构件，让阳光刚好照亮雕刻的凹陷处，背景虚化成绿色的苔藓或模糊的鸟影。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`鹈鹕剪影与落日湖景`}</h4>
                  <p className="text-sm text-gray-700">{`如果行程允许在傍晚离岛，在船上拍摄鹈鹕群在金色湖面上飞翔的剪影，以对岸的群山为衬。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`避免使用无人机，螺旋桨的噪音和身影会严重惊扰鸟群，且为保护区明令禁止。拍摄鸟类时请使用长焦镜头，切忌为了好镜头而追逐或过分靠近鸟巢。尊重自然永远是第一位。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔家庭民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在奥特谢沃或斯特尼耶村的当地人家中，早晨开窗就是普雷斯帕湖的薄雾和远山，主人会为你准备家常的北马其顿早餐和关于湖区的最生动故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`生态湖畔小屋`}</h4>
                  <p className="text-sm text-green-800">{`选择Resen市附近几家专注于生态旅游的湖畔木屋，设计简约自然，晚上可以伴着蛙声入眠，白天阳台就是观鸟的绝佳前哨。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色山居酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在湖边山坡上由传统石屋改造的精品酒店，拥有俯瞰整个湖泊和无边葡萄园的壮丽视野，在露台上享用晚餐时，大格拉德岛就在你的目光尽头。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`普雷斯帕国家公园旅舍`}</h4>
                  <p className="text-sm text-purple-800">{`最贴近自然的朴素选择，位于国家公园境内，便于第二天一早出发，晚上有机会在专业向导带领下进行夜间自然观察。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "湖畔住宿在夏季（6-8月）相当紧俏，务必提前数月预订。整个湖区治安良好，民风淳朴，但夜间湖区道路照明有限，自驾需谨慎慢行。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开大格拉德岛许久，那种混合着鸟粪、松香和古老石头灰尘的气味，似乎还萦绕在感官里。它给我的触动，远不止于看到了罕见的风景或古迹。而是在这个被快节奏世界遗忘的角落，我亲眼目睹了一种截然不同的时间叙事。在这里，人类历史的章节写得简短而谦卑，随后自然接手，以磅礴的生命力续写了更漫长的篇章。我们总习惯于以“征服自然”、“建造永恒”自居，但大格拉德岛温柔地反驳了这一切。它告诉你，我们的教堂会坍塌，但鹈鹕的王朝会延续；我们的名字会被遗忘，但风与水的雕刻永不停止。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个意义上，大格拉德岛是一面镜子，也是一剂良药。它映照出人类文明在宇宙尺度下的短暂与渺小，却又疗愈了现代人那种无时无刻的焦虑和自大。它让你学会用另一种节奏呼吸，用另一种视角观看——不是把自然当作背景板去征服或消费，而是怀着敬畏之心，走进一个依然由羽毛、岩石和湖水统治的王国。每一位热爱深度游的旅人都该来此，不是为了收集又一个景点，而是为了接受一次无声的洗礼。在这里，你会重新记起，我们本就是自然的一部分，而最深刻的旅程，永远是那趟通往万物共生之谜的、向内又向远的回归之路。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/skopje-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯科普里老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Skopje Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kru-evo-macedonia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克鲁舍沃</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kruševo</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bitola-old-bazaar-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    比
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">比托拉老集市</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bitola Old Bazaar (Shirok Sokak)</p>
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
