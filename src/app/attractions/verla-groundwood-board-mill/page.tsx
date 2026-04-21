import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '韦尔拉木浆纸板厂 Verla Mill｜19世纪工业革命的森林琥珀，被时光冻结的芬兰记忆 - 最佳欧洲景点',
  description: '车子在芬兰南部连绵的森林公路上转了几个弯，当导航显示即将抵达时，你或许还在怀疑是不是走错了地方。这里太安静了，只有风穿过松林顶端的沙沙声，和隐约的水流轰鸣。直到你把车停在那片小小的碎石停车场，走下一段缓坡，眼前豁然开朗——几栋优雅的红砖建筑，安静地卧在葱郁的森林怀抱里，旁边是一条碧绿湍急的河流，和一...',
}

export default function VerlaGroundwoodBoardMillPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '芬兰', href: '/destinations/finland' },
            { label: '韦尔拉木浆纸板厂', href: '/attractions/verla-groundwood-board-mill' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`韦尔拉木浆纸板厂・Verla Mill・芬兰・屈米河谷区（Jaala, Kouvola）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在芬兰南部连绵的森林公路上转了几个弯，当导航显示即将抵达时，你或许还在怀疑是不是走错了地方。这里太安静了，只有风穿过松林顶端的沙沙声，和隐约的水流轰鸣。直到你把车停在那片小小的碎石停车场，走下一段缓坡，眼前豁然开朗——几栋优雅的红砖建筑，安静地卧在葱郁的森林怀抱里，旁边是一条碧绿湍急的河流，和一座白色的水坝。没有高耸的烟囱喷吐黑烟，没有机器的喧嚣。那一刻，你感觉闯入的不是一个工厂，而是一座被施了沉睡魔法的森林庄园。
空气里的味道很特别。清冽的松针和湿润苔藓的气息是主调，这是芬兰森林的标配。但仔细嗅闻，一股更深沉、更厚重的味道潜藏其中——那是陈年木材经过岁月浸润后的微甜，是百年砖石在雨后散发出的微凉土腥，或许，还有一丝早已沁入砖缝的、若有若无的机油和纸浆的痕迹。这种气味混合体，瞬间为你定下了探访的基调：这里的一切，都处于一种精妙的平衡态。工业的痕迹并未远去，但自然已然温柔地接管。
最打动人的，是那种“戛然而止”的生活感。走进工人的住宅区，那些淡黄色的小木屋窗台上，仿佛昨天还有人摆上了一盆天竺葵。主厂房的大门虚掩着，里面的机器擦得锃亮，却静止不动，阳光从高高的窗户斜射进来，照亮空气中飞舞的微尘。它不是一座被掏空、仅供观瞻的博物馆壳体，而更像是在某个普通的1890年的下午，工人们刚刚下班离开，而第二天，他们再也没有回来上班。时间在这里，被完好地封装了起来。
你会发现，韦尔拉不仅仅是一个生产纸板的地方。它是一个完整的微型社会：工厂、老板住宅、工人宿舍、仓库、甚至最初的小学校。它讲述的，是森林如何通过人的智慧和机器的力量，变成纸张，进而变成知识、文化和沟通的故事。在当今这个数字信息爆炸的时代，站在这些制造物理纸张的古老机器前，你会对“信息载体”产生一种前所未有的、近乎虔诚的触动。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子在芬兰南部连绵的森林公路上转了几个弯，当导航显示即将抵达时，你或许还在怀疑是不是走错了地方。这里太安静了，只有风穿过松林顶端的沙沙声，和隐约的水流轰鸣。直到你把车停在那片小小的碎石停车场，走下一段缓坡，眼前豁然开朗——几栋优雅的红砖建筑，安静地卧在葱郁的森林怀抱里，旁边是一条碧绿湍急的河流，和一座白色的水坝。没有高耸的烟囱喷吐黑烟，没有机器的喧嚣。那一刻，你感觉闯入的不是一个工厂，而是一座被施了沉睡魔法的森林庄园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`空气里的味道很特别。清冽的松针和湿润苔藓的气息是主调，这是芬兰森林的标配。但仔细嗅闻，一股更深沉、更厚重的味道潜藏其中——那是陈年木材经过岁月浸润后的微甜，是百年砖石在雨后散发出的微凉土腥，或许，还有一丝早已沁入砖缝的、若有若无的机油和纸浆的痕迹。这种气味混合体，瞬间为你定下了探访的基调：这里的一切，都处于一种精妙的平衡态。工业的痕迹并未远去，但自然已然温柔地接管。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种“戛然而止”的生活感。走进工人的住宅区，那些淡黄色的小木屋窗台上，仿佛昨天还有人摆上了一盆天竺葵。主厂房的大门虚掩着，里面的机器擦得锃亮，却静止不动，阳光从高高的窗户斜射进来，照亮空气中飞舞的微尘。它不是一座被掏空、仅供观瞻的博物馆壳体，而更像是在某个普通的1890年的下午，工人们刚刚下班离开，而第二天，他们再也没有回来上班。时间在这里，被完好地封装了起来。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，韦尔拉不仅仅是一个生产纸板的地方。它是一个完整的微型社会：工厂、老板住宅、工人宿舍、仓库、甚至最初的小学校。它讲述的，是森林如何通过人的智慧和机器的力量，变成纸张，进而变成知识、文化和沟通的故事。在当今这个数字信息爆炸的时代，站在这些制造物理纸张的古老机器前，你会对“信息载体”产生一种前所未有的、近乎虔诚的触动。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`韦尔拉木浆纸板厂`} />
                <InfoRow label="英文名称" value={`Verla Mill`} />
                <InfoRow label="正式名称" value={`Verla Groundwood and Board Mill`} />
                <InfoRow label="国家" value={`芬兰`} />
                <InfoRow label="城市" value={`屈米河谷区（Jaala, Kouvola）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这是北欧乃至全球保存最完好的19世纪乡村木浆纸板厂工业遗址，如同一枚凝固了早期工业化时代的“时间胶囊”。`} />
                <InfoRow label="建筑特色" value={`红砖主体厂房与木质附属建筑错落有致地镶嵌在原始森林与瀑布之间，构成一幅工业与自然诗意共存的独特画面。`} />
                <InfoRow label="建筑风格" value={`融合了19世纪末实用的工业建筑风格与芬兰本土的传统木构技艺。`} />
                <InfoRow label="文化价值" value={`它不仅是芬兰森林工业崛起的鲜活见证，更代表了工业化初期“工厂与社区一体”的人文理想，是 UNESCO 认定的世界文化遗产。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（6月1日至8月31日）每日开放，时间为上午10点至下午5点。春秋季（5月、9月）通常为周二至周日，上午10点至下午4点。冬季（10月至次年4月）仅限预约的团队参观，或于特定周末有限开放。具体开放时间每年可能有微调，出发前务必在官网“Museoverkot”上确认。`} />
              <InfoRow label="门票价格" value={`成人票15欧元，优惠票（学生、老人）12欧元，7-17岁儿童7欧元，7岁以下免费。家庭票（2大3小）38欧元。门票包含导游讲解（夏季通常为固定时段英语导览，其他时间可预约）。持有芬兰国家博物馆年卡可免费进入。`} />
              <InfoRow label="地址" value={`Verlantie 295, 47850 Verla, Finland`} />
              <InfoRow label="交通方式" value={`从赫尔辛基出发是最佳选择。自驾是最方便的方式，沿E18/E75高速公路向东行驶约140公里，从Kouvola出口下，再根据路标前往Verla，全程约1小时45分钟。公共交通稍复杂：先从赫尔辛基中央火车站乘坐火车至Kouvola站（约1.5-2小时，班次频繁），然后在Kouvola公交站换乘前往Jaala方向的本地巴士（如52路），在“Verla”站下车，步行几分钟即到。巴士班次较少，务必提前在“Matkahuolto”应用或网站上查好时刻表，全程公共交通耗时约2.5-3小时。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从19世纪下半叶说起了。那时的芬兰，还沐浴在俄罗斯帝国的余晖下，但一股工业化的春风已经从西欧吹到了这片“千湖之国”的森林深处。森林，是芬兰流淌的绿色血液。有远见的商人们开始琢磨，如何让这些沉默的云杉和松树，创造出比木材更多的价值。1872年，一位名叫胡戈·纽曼的工程师和一位德国商人威廉·迪特里希，在韦尔拉河湍急的水流边，相中了这块宝地。水力，是那个时代最可靠的工业动力来源。他们建起了一座小型的木浆磨坊，利用水流的力量驱动磨石，将木材磨成纤维，再制成纸板。这，就是韦尔拉最初的脉搏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，早期的创业充满艰辛。一场无情的大火在几年后就将初生的磨坊吞噬殆尽。就在一切看似要化为灰烬时，故事迎来了转折点。1876年，一位名叫戈特利布·克莱德尔的奥地利商人，和他的芬兰合伙人路易斯·哈恩，接过了这块烫手山芋。但他们没有选择放弃，而是看到了更大的蓝图。他们引进了当时最先进的德国技术，并得到了来自挪威的资本支持。1885年，一个更大、更现代化、用坚固红砖砌成的全新工厂拔地而起。这次，他们成功了。韦尔拉生产的优质纸板，光滑、坚韧，特别适合用来做书籍的封面和精美的包装盒，很快行销俄罗斯乃至整个欧洲市场。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`工厂的“黄金时代”持续了几十年。你可以想象那时的景象：水轮（后来是涡轮机）在河水的冲击下永不停歇地轰鸣，磨石碾压木材的沉闷声响回荡在车间，空气中弥漫着湿润木浆的独特气味。工人们——大多是来自附近农庄的村民——在这里找到了稳定的生计。工厂主不仅提供了工作，还建造了整齐的工人住宅、澡堂、仓库，甚至为工人们的孩子开设了学校。韦尔拉形成了一个自给自足、关系紧密的社区。老板的白色宅邸坐落在山坡上，俯瞰着工厂和工人的家，这是一种带有旧时代印记的、家长式的关怀，但也确实让这里成为了一个充满归属感的地方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但是，工业的浪潮滚滚向前。进入20世纪，特别是二战后，更大型、更高效、使用化学方法制浆的现代化纸浆厂在芬兰沿海地区纷纷建立。坐落在内陆森林深处、依靠水力和小规模机械生产的韦尔拉，其工艺虽然精良，但产量和成本已无法与巨头竞争。机器的轰鸣声越来越微弱，工人的身影逐渐减少。1964年7月18日，这是一个平静的夏日上午，最后一张纸板从生产线上缓缓滑出。工厂经理召集了所有剩余的工人，宣布了停产的决定。据说，工人们默默地清理了机器，给它们上了油，打扫了车间，然后锁上了大门。他们没有将工厂拆卸变卖，而是像告别一位老友一样，让它保持着最后工作日的模样。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`正是这种充满敬意的告别，为后世留下了无价之宝。停产后的韦尔拉很快被意识到其独特的历史价值。1972年，它被辟为工业博物馆。1996年，联合国教科文组织将韦尔拉木浆纸板厂列入世界遗产名录，评语中精准地抓住了它的灵魂：“……为19世纪中小型乡村工业建筑提供了杰出的例证，这些工业致力于利用水力发电和原始木材生产纸板。该遗址及其周边环境以一种格外生动和完整的方式，展现了这一曾经遍布北欧和北美地区的工业门类。” 它不是最宏伟的，但却是最完整、最真实的。它像一颗被松脂包裹的昆虫，将19世纪末北欧工业生活的每一个细节，完美地保存了下来。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在下午早些时候（比如1-2点）抵达。这个时间通常避开了上午可能存在的少量团队游客，你有充足的时间沉浸其中。整体游览需要大约3-4小时，节奏应是缓慢而专注的。安排如下：先用1小时跟随导览或自行参观主厂房博物馆，了解核心工艺和历史；然后用1-1.5小时自由探索厂区、水电站、老板住宅和工人村，感受空间与氛围；最后留出半小时到一小时，沿着工厂旁的森林小径走到上游的水坝和河边，从自然的角度回望整个遗址。这样的顺序让你从“知其然”到“沉浸其境”，最后在自然的怀抱中完成对整个场所的感悟。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季蚊虫较多，务必携带有效的驱蚊液，尤其是在森林小径漫步时。
工厂内部部分地板光滑且楼梯较陡，建议穿着舒适防滑的鞋子。
导游讲解是精华所在，尽量参加（通常包含在门票内），能听到许多生动的小故事和细节。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在游客中心买好票后，先别急着进厂，绕到建筑侧面，站在那座小铁桥上，看着韦尔拉河碧绿湍急的河水从脚下奔涌而过，冲向下游的白色水坝。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟随导览员或拿着解说图，推开主厂房厚重的木门，让眼睛适应内部略暗的光线，然后凝视那些被保养得闪闪发光、仿佛随时会启动的巨大磨石和造纸机器。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走上连接不同车间的木质楼梯和廊桥，从高处俯瞰整个生产线的布局，听着脚下木板发出的吱呀声，想象着工人在此间忙碌穿行的景象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观完厂房后，漫步到静谧的工人住宅区，看看那些漆成淡黄和白色的小木屋、公共桑拿房，以及屋前如今种着马铃薯和鲜花的小花园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要去山坡上那栋漂亮的白色老板住宅看看，内部陈设保持着19世纪末的优雅风格，从它的窗户望出去，正好能将整个工厂社区尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着河边标识清晰的森林小径向上游漫步，走到水坝的另一侧，回头看看被森林层层环抱的红砖工厂，那是明信片上也找不到的绝佳视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间允许，在游客中心的小咖啡角喝一杯用传统方法烘焙的芬兰咖啡，尝尝当地特色的莓果派，让感官从历史的厚重中慢慢回到当下。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`森林掩映全景位`}</h4>
                  <p className="text-sm text-gray-700">{`从工厂河对岸的森林边缘，用长焦镜头压缩空间，将红砖厂房、白色水坝和葱郁的森林同时纳入画面，最佳时间是午后，阳光为建筑勾上金边。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`主厂房内部光影走廊`}</h4>
                  <p className="text-sm text-gray-700">{`站在一层到二层的木质楼梯转角处，等待阳光从高处的小窗射入，形成一道光柱照亮漂浮的尘埃和古老的机械，构图时将延伸的走廊和机器作为引导线。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`水坝与旧机器细节`}</h4>
                  <p className="text-sm text-gray-700">{`在水电站附近，找到那些覆盖着青苔和锈迹的废弃管道、阀轮，用微距或浅景深镜头贴近拍摄，将工业遗骸与蓬勃的绿色苔藓同框，讲述时间的力量。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`工人村窗景`}</h4>
                  <p className="text-sm text-gray-700">{`选择一栋工人小屋，从窗外向内拍摄，聚焦于窗台上可能存在的旧花盆、蕾丝窗帘，或屋内一张老桌椅，营造“生活突然暂停”的故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`韦尔拉河慢门流水`}</h4>
                  <p className="text-sm text-gray-700">{`在水坝下游的平缓处，使用三脚架和减光镜，将河水拍成丝绸般的雾状，以岸边的岩石或倒下的枯木为前景，画面宁静而富有禅意。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`厂房内部允许拍照，但请勿使用闪光灯，以免损害古老的展品。`}</li>
                <li>• {`使用无人机拍摄前，务必咨询管理方，因为这里是受保护的世界遗产区域，可能有飞行限制。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`森林湖畔小屋`}</h4>
                  <p className="text-sm text-blue-800">{`在距离韦尔拉车程15分钟内的湖边，租一栋传统的芬兰湖畔木屋，夜晚在桑拿房蒸烤后跳进清凉的湖中，抬头便是璀璨的星河，体验真正的芬兰式静谧。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`屈米河区设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`住在附近城镇Kouvola或Hamina由旧建筑改造的设计酒店，将工业风的现代舒适与地域历史感结合，是品味北欧设计的绝佳选择。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色民宿农场`}</h4>
                  <p className="text-sm text-yellow-800">{`选择遗址周边乡村的家族经营农场民宿，清晨在鸡鸣声中醒来，主人会奉上自家产的鸡蛋、浆果和新鲜牛奶，深度体验芬兰乡村生活。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`赫尔辛基基日返`}</h4>
                  <p className="text-sm text-purple-800">{`如果行程紧凑，可以选择住宿在赫尔辛基，当日往返韦尔拉，这样能享受首都丰富的餐饮和夜生活，但需准备好一天较长的交通时间。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）是芬兰的旅游旺季，湖畔小屋和特色民宿非常紧俏，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`芬兰乡村地区治安极好，但服务设施（如餐厅、商店）关门较早且分布稀疏，入住民宿或小屋时建议提前采购好食材和必需品。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开韦尔拉的时候，天色或许将晚，森林被染上一层温柔的蓝调。你会发现自己带走的，不是几张纸板的实物，而是一种极其复杂的情绪。那里有对精巧机械的赞叹，有对往昔勤劳生活的感怀，但更多的，是一种深深的宁静与慰藉。它向你展示了工业化的另一种可能——不是野蛮的掠夺与破坏，而是可以与自然对话，与社区共生，并且在功成身退之后，能留下一个值得被铭记和沉思的美丽背影。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都在追求更快、更高效、更虚拟化的时代，韦尔拉像一个坚定的反义词。它让你慢下来，去触摸真实的木材纹理、冰凉的铁质手柄，去呼吸混合了历史与森林的空气。它提醒我们，所有我们司空见惯的文明产物，哪怕是一张最普通的纸，都曾来源于自然，经过人的双手与智慧。它不仅仅是一个“景点”，更是一堂关于时间、记忆与可持续性的沉默课程。每一位热爱深度游的旅人，都应该来一次韦尔拉，不只是为了看一个旧工厂，而是为了在一个被精心保存的“昨天”里，重新思考我们的“今天”与“明天”。在这里，你会明白，真正的遗产，不是冷冰冰的遗迹，而是一个依然能与你进行灵魂对话的、完整的生命场域。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/naantali-presidential-summer-resident-and-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    楠
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">楠塔利（芬兰总统夏宫及木屋老城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Naantali</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lappeenranta-fortress-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉彭兰塔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lappeenranta</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/turku-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    图
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">图尔库城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Turku Castle</p>
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
