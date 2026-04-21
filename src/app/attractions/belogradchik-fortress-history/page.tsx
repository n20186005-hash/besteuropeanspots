import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Belogradchik Fortress历史溯源｜血色巨岩与千年要塞的传奇史诗',
  description: '探秘保加利亚血色岩城！贝洛格拉奇克不只是一座要塞，更是岩石的史诗。从罗马哨所到奥斯曼堡垒，聆听石头的低语与英雄的传说。',
}

export default function BelogradchikFortressHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '历史人文', href: '/category/history' },
            { label: '保加利亚', href: '/destinations/europe' },
            { label: '维丁州贝洛格拉奇克镇', href: '/destinations/europe' },
            { label: '贝洛格拉奇克要塞', href: '/attractions/belogradchik-fortress-history' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`贝洛格拉奇克要塞・Belogradchik Fortress・保加利亚・维丁州贝洛格拉奇克镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {``}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 导语">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在保加利亚西北部，时间以岩石的形态凝固。<strong>贝洛格拉奇克</strong>，这座与2亿年历史的红色怪岩群共生千年的堡垒，本身就是一部雕刻在大地上的史书。它并非诞生于王侯的虚荣，而是源于大地骨骼与人类战意的奇妙交融。在这里，每一块绯红的砂岩都是一位沉默的士兵，每一道城墙的缝隙都藏着帝国交锋的尘埃。抛开游玩攻略，走进<strong>贝洛格拉奇克</strong>的尘封往事，遇见属于它的时光与传奇。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`贝洛格拉奇克要塞`} />
                <InfoRow label="英文名称" value={`Belogradchik Fortress`} />
                <InfoRow label="正式名称" value={`Belogradchik Fortress`} />
                <InfoRow label="国家" value={`保加利亚`} />
                <InfoRow label="城市" value={`维丁州贝洛格拉奇克镇`} />
              </div>
              
            </div>
            
          </Section>

          <Section title="3. 城市/景点起源">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "贝洛格拉奇克的故事，始于岩石，而非砖石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这片令人屏息的奇异景观，源于<strong>距今约2.3亿年前</strong>。那时，这里还是一片浅海。砂砾、矿物质与铁氧化物层层沉积，经过板块运动的抬升与千万年的风化，最终塑造出这些高达200米、形态诡异的暗红色岩群。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "人类在此筑城，则要晚得多。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最初的起点，可追溯至<strong>公元1-2世纪的罗马帝国</strong>。罗马人最先看中了这群天然屏障的战略价值。他们在几块最巨大的岩石之间，巧妙地利用地形，修建了简易的<strong>瞭望哨所和城墙</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "其目的非常务实：守卫通往帝国腹地道路，并监控周边地区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“贝洛格拉奇克”（Belogradchik）这个名字本身，就充满了历史的层次感。它源自斯拉夫语，“<strong>Belo</strong>”意为“白色”，“<strong>Grad</strong>”意为“城镇、堡垒”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一个有趣的矛盾出现了：这里的岩石明明是炽烈的红色，为何被称为“白色”？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最可信的解释指向了建筑材质。早期堡垒或附近民居，大量使用了当地开采的浅色石灰岩。远远望去，嵌在红岩中的白色墙体格外醒目，“白色小镇”或“白色堡垒”之名便由此流传。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从罗马的简易据点，到后来成为保加利亚帝国、奥斯曼帝国反复争夺、扩建的雄关，这座要塞的根基，深深扎在了地球古老的记忆之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的起源，是一场自然鬼斧神工与人类军事智慧跨越亿年的对话。" }} />
            </div>
          </Section>

          <Section title="4. 镌刻时光的历史印记">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这座要塞的城墙，记录着巴尔干半岛风起云涌的千年史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一个深刻印记，刻在保加利亚第一帝国的辉煌期。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "罗马哨所沉寂数百年后，斯拉夫与保加尔人建立的<strong>保加利亚帝国</strong>在此重生。在<strong>13-14世纪</strong>，帝国进入第二黄金时代。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当时的统治者意识到此地天险可恃，开始大规模扩建。他们<strong>以巨岩为天然城墙</strong>，在岩柱间的空隙修筑石墙和塔楼，将其从一个前哨站升级为真正的军事堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一时期的建设，奠定了要塞与岩石<strong>血肉相连</strong>的独特形态。它不再是建在山上，而是“长”在岩石里。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "“这些岩石本身就是最忠诚、最坚固的卫士，我们只是为它们系上了石头的腰带。”—— 后世保加利亚史学家如此形容中世纪的这次扩建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二个炽热的印记，来自奥斯曼帝国的铁腕改造。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>1396年</strong>，奥斯曼帝国征服保加利亚。征服者同样为这片天然要塞所震撼。但他们带来了新的军事技术——火炮。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在<strong>1805年至1837年</strong>间，奥斯曼帝国对要塞进行了史上最大规模的现代化改造。他们聘请了<strong>法国和意大利的军事工程师</strong>，重新设计堡垒结构，加筑厚重的棱堡和炮台，使其能抵御近代炮击。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "我们今天看到的核心堡垒格局，主要就成型于这个时期。这是一次充满张力的融合：<strong>中世纪的岩石城墙，披上了近代棱堡的外衣。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第三个印记，则是19世纪民族觉醒的血与火。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "进入19世纪，要塞成为保加利亚反抗奥斯曼统治的焦点。<strong>1850年</strong>，它见证了著名的“贝洛格拉奇克起义”，虽然失败，却点燃了民族精神。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最重要的战役发生在<strong>1885年</strong>的塞尔维亚-保加利亚战争期间。此时保加利亚已自治，要塞由保加利亚军队驻守。塞尔维亚军队大举进攻，但守军凭借天险和坚固工事，<strong>顽强坚守</strong>，为保加利亚赢得最终胜利立下关键功勋。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，它从奥斯曼镇压的象征，转变为保加利亚守卫独立的英雄象征。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "每一场争夺，都在岩石上留下了新的划痕。罗马的基石、保加利亚的墙垣、奥斯曼的炮台，共同书写了一部层叠的石头编年史。" }} />
            </div>
          </Section>

          <Section title="5. 与这座城共生的名人传奇">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这片刚毅的风景中，一些名字与传奇被深深镌刻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第一位，是几乎被正史忽略，却与建筑灵魂息息相关的教士——卡洛扬大主教。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>卡洛扬</strong>并非王公将相，而是<strong>14世纪</strong>的一位当地东正教大主教。在保加利亚帝国时期，他管辖着贝洛格拉奇克地区。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的传奇，与要塞的<strong>维内茨塔</strong>紧密相连。这座塔楼孤立在一块拔地而起的巨岩之巅，形势极为险要。民间坚信，正是<strong>卡洛扬大主教</strong>主持并资助了这座关键塔楼的修建。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "更神秘的故事在后面。传说卡洛扬大主教深知堡垒的重要性，为确保其坚固永存，他采取了一种极端而古老的方式——<strong>“活人奠基”</strong>。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "编年史残篇中有模糊记载：“为使塔楼不可征服，他们听取主教之言，将最先路过的一对兄妹砌入了墙基……”这个黑暗的传说在巴尔干多地流传，赋予了维内茨塔一层悲怆而禁忌的色彩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "无论传说真假，卡洛扬的名字已与这座最险要的塔楼绑定。他代表了那个时代，宗教力量与军事防御如何深度交织，共同塑造了这片土地的命运。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>第二位，是19世纪的民族英雄——斯特凡·卡拉贾。</strong>" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "<strong>斯特凡·卡拉贾</strong>出身平凡，却成为<strong>1876年四月起义</strong>中一颗耀眼的流星。他并非长期驻守于此的将领，但他生命的最后光芒，照亮了贝洛格拉奇克的岩石。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "起义爆发后，卡拉贾带领一支游击队活跃在巴尔干山脉北部，屡次重创奥斯曼军队。他的英勇与战术让敌人闻风丧胆。最终，他在维丁地区的战斗中被俘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "奥斯曼当局决定杀一儆百。他们选择在<strong>贝洛格拉奇克要塞</strong>公开处决这位英雄。根据记载，卡拉贾走向刑场时毫无惧色，他向围观的保加利亚同胞高喊反抗到底。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他的鲜血洒在了要塞的广场上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这一事件，彻底改变了要塞在保加利亚人心中的象征意义。它从一个异族统治的压迫工具，变成了<strong>民族牺牲与抗争的圣坛</strong>。卡拉贾的传奇，为冰冷的军事工事注入了滚烫的民族魂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "此后，任何保加利亚爱国者望向这座红色要塞时，眼中不再只有岩石与城墙，更有英雄就义时凛然的背影。他的故事被写入诗歌，代代传唱。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些名人，无论是以建筑者还是殉道者的身份出现，都将个人的命运与这座岩石堡垒永恒地捆绑在一起。他们让历史不再是冰冷的事件，而是有了面孔与温度。" }} />
            </div>
          </Section>

          <Section title="6. 民间传说与人文风情">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这些红色巨岩的成因，地质学有科学的解释，但民间却给出了更浪漫、更悲情的答案。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "流传最广的，是“<strong>石化婚礼</strong>”的传说。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "很久以前，一位美丽的新娘嫁给了一位她并不爱的富商。婚礼在巨岩下的平地上举行，喧闹而奢华。然而，新娘心中思念着远行未归的贫穷恋人。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当牧师问她是否愿意时，她望着天际，沉默地拒绝。愤怒的新郎和宾客们开始诅咒她。就在这时，上天显灵。一道闪电劈下，<strong>所有参加婚礼的人——新娘、新郎、牧师、宾客，甚至乐师与马车——都在瞬间化为了红色的岩石</strong>。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "从此，人们说那最高的岩柱是悲伤的新娘，旁边的蘑菇状岩石是牧师，那些排列整齐的岩石是乐队。风穿过岩缝的呜咽，便是永恒的婚礼挽歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "另一组著名的岩石“<strong>亚当与夏娃</strong>”，则被赋予了守护与背叛的故事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "传说他们本是一对守护此地宝藏的精灵恋人。因亚当偷看了宝藏的秘密，遭到诅咒，两人双双化为石像，永远相望却不得相近。" }} />
              <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 bg-gray-50 py-3 pr-4 rounded-r" dangerouslySetInnerHTML={{ __html: "当地老人会说：“月圆之夜，你能听到亚当的低语，那是他在向夏娃忏悔，岩石上的红色，便是他心中永不干涸的血色思念。”" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这些传说，无不围绕着<strong>爱情、背叛、惩罚与永恒</strong>的主题。坚硬无比的岩石，在人们口耳相传的故事里，承载着最柔软的人类情感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它们解释了奇景的由来，更赋予了景观灵魂。游客看到的不仅是奇特地貌，更是一幕幕凝固的古老戏剧。传说，让石头拥有了生命。" }} />
            </div>
          </Section>

          <Section title="7. 历史回响：读懂这座城的旅行意义">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "今日，当战争的硝烟早已散尽，贝洛格拉奇克要塞的意义已然升华。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它不再是一座单纯的防御工事。它是<strong>一本立体的史书</strong>，用岩石的页码，记录了从罗马、保加利亚帝国、奥斯曼到现代保加利亚的完整层叠。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它是<strong>自然与人文奇迹的共生体</strong>。2亿年的地质运动与1000年的人类历史在此碰撞、融合，创造出世界上绝无仅有的景观——堡垒即岩石，岩石即堡垒。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "读懂贝洛格拉奇克，便是读懂巴尔干半岛坚韧、层叠而又屡经创伤的历史性格。这片土地上的文明，如同这些岩石一样，在一次又一次的冲刷与锻造中，形成了自己独特而顽强的面貌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "站在猩红的巨岩之下，抚摸不同年代砌成的墙砖，你仿佛能听到罗马士兵的号角、保加利亚工匠的凿声、奥斯曼炮火的轰鸣，以及民族英雄就义前的高歌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这是一次穿越地质时间与人类历史的双重旅行。来到这里，你探寻的不仅是一座堡垒的攻略，更是一段大地与文明共同谱写的史诗。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "👉 想看实地游玩攻略？交通、门票、徒步路线与摄影打卡全攻略，请点击相关游记页。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ruse-bulgaria-danube-vienna" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ruse</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/plovdiv-roman-theatre" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗夫迪夫古罗马剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Plovdiv Roman Theatre</p>
                  </div>
                </div>
              </a>
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
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
