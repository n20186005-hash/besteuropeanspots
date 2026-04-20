import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '埃武拉罗马神庙 Roman Temple of Évora｜穿越两千年的石柱交响诗，屹立在白色山城之巅 - 最佳欧洲景点',
  description: '让我告诉你，第一眼看到它时的那种不真实感。你不是在意大利，也不是在希腊，你是在葡萄牙南部一座被阳光晒得发白的山顶小城里。转过一个街角，一片密集的白色房屋突然让开，眼前豁然开朗：十几根巨大的、带着精细槽线的花岗岩柱子，顶着雕刻繁复的科林斯柱头，就这样沉默而傲慢地耸立在蓝天之下。午后的阳光把它们染成蜂蜜...',
}

export default function EvoraRomanTemplePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '埃武拉罗马神庙', href: '/attractions/evora-roman-temple' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`埃武拉罗马神庙・Roman Temple of Évora・葡萄牙・埃武拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`让我告诉你，第一眼看到它时的那种不真实感。你不是在意大利，也不是在希腊，你是在葡萄牙南部一座被阳光晒得发白的山顶小城里。转过一个街角，一片密集的白色房屋突然让开，眼前豁然开朗：十几根巨大的、带着精细槽线的花岗岩柱子，顶着雕刻繁复的科林斯柱头，就这样沉默而傲慢地耸立在蓝天之下。午后的阳光把它们染成蜂蜜色，在平整的石板广场上投下长长的、坚硬的影子。那种感觉太震撼了，就像一个来自古罗马的巨人，穿越了时空，稳稳地坐在这座中世纪城市的客厅中央。
周围的声音很奇妙。神庙脚下就是露天咖啡座，你能听到咖啡杯碟轻微的碰撞声、游客低语的葡萄牙语和各国语言，还有广场上鸽子扑棱翅膀的声音。但当你走近那些石柱，仿佛进入了一个声音的结界，城市的喧嚣自动退后了。你能听到的只有风吹过柱廊的呜咽，也许还有你自己心跳的声音。空气里弥漫着干燥的石粉味、远处飘来的烤栗子香，以及属于地中海的、那种干净的阳光味道。几个本地老人就坐在广场边的长椅上，眯着眼晒太阳，对身后的千年奇迹习以为常——这一幕最打动我，它不是什么被圈起来仅供瞻仰的标本，而是真真切切融入了埃武拉人日常呼吸的背景。
它的核心魅力，就在于这种极致的反差与和谐。想象一下：神庙的左侧，是一座用它的石头改建的、厚重的中世纪塔楼；它的背后，是线条优雅的文艺复兴时期宫殿；而它的正面，俯瞰着的却是现代的城市广场和咖啡馆。两千年的历史，就像一本被同时摊开的书页，层次分明却又无缝衔接。它不是孤独的遗迹，而是这座城市所有故事的起点和永恒的背景板。每一块石头，都同时诉说着罗马帝国的荣光、中世纪信仰的改造力量，以及现代人对历史的温柔守护。
站在它的基座下，伸手触摸那些冰凉粗糙、被岁月打磨得光滑却依然坚不可摧的花岗岩。你会突然明白，伟大从来不是喧嚣的。它就是这样静静地屹立着，任凭王朝更迭、宗教轮换、城市兴衰，它只是在那里，用它绝对的几何形体和物质重量，对抗着时间的流逝，给予每一个到访者一次与永恒面对面的机会。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我告诉你，第一眼看到它时的那种不真实感。你不是在意大利，也不是在希腊，你是在葡萄牙南部一座被阳光晒得发白的山顶小城里。转过一个街角，一片密集的白色房屋突然让开，眼前豁然开朗：十几根巨大的、带着精细槽线的花岗岩柱子，顶着雕刻繁复的科林斯柱头，就这样沉默而傲慢地耸立在蓝天之下。午后的阳光把它们染成蜂蜜色，在平整的石板广场上投下长长的、坚硬的影子。那种感觉太震撼了，就像一个来自古罗马的巨人，穿越了时空，稳稳地坐在这座中世纪城市的客厅中央。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`周围的声音很奇妙。神庙脚下就是露天咖啡座，你能听到咖啡杯碟轻微的碰撞声、游客低语的葡萄牙语和各国语言，还有广场上鸽子扑棱翅膀的声音。但当你走近那些石柱，仿佛进入了一个声音的结界，城市的喧嚣自动退后了。你能听到的只有风吹过柱廊的呜咽，也许还有你自己心跳的声音。空气里弥漫着干燥的石粉味、远处飘来的烤栗子香，以及属于地中海的、那种干净的阳光味道。几个本地老人就坐在广场边的长椅上，眯着眼晒太阳，对身后的千年奇迹习以为常——这一幕最打动我，它不是什么被圈起来仅供瞻仰的标本，而是真真切切融入了埃武拉人日常呼吸的背景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，就在于这种极致的反差与和谐。想象一下：神庙的左侧，是一座用它的石头改建的、厚重的中世纪塔楼；它的背后，是线条优雅的文艺复兴时期宫殿；而它的正面，俯瞰着的却是现代的城市广场和咖啡馆。两千年的历史，就像一本被同时摊开的书页，层次分明却又无缝衔接。它不是孤独的遗迹，而是这座城市所有故事的起点和永恒的背景板。每一块石头，都同时诉说着罗马帝国的荣光、中世纪信仰的改造力量，以及现代人对历史的温柔守护。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`站在它的基座下，伸手触摸那些冰凉粗糙、被岁月打磨得光滑却依然坚不可摧的花岗岩。你会突然明白，伟大从来不是喧嚣的。它就是这样静静地屹立着，任凭王朝更迭、宗教轮换、城市兴衰，它只是在那里，用它绝对的几何形体和物质重量，对抗着时间的流逝，给予每一个到访者一次与永恒面对面的机会。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`埃武拉罗马神庙`} />
                <InfoRow label="英文名称" value={`Roman Temple of Évora`} />
                <InfoRow label="正式名称" value={`Roman Temple of Évora (Templo de Évora)`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`埃武拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`伊比利亚半岛保存最完好、最具标志性的古罗马神庙遗迹之一。`} />
                <InfoRow label="建筑特色" value={`由宏伟的花岗岩科林斯柱和宏伟的台阶基座构成的矩形柱廊，矗立在高台之上，俯瞰城市。`} />
                <InfoRow label="建筑风格" value={`典型的罗马帝国时期建筑风格，深受科林斯柱式和古典神庙形制影响。`} />
                <InfoRow label="文化价值" value={`不仅是罗马帝国在卢西塔尼亚省（今葡萄牙）统治的永恒见证，更是这座城市层层历史叠加的“活化石”，体现了从罗马到中世纪乃至现代的连续文化层。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古迹区域全天24小时开放，可自由环绕参观。神庙本身为露天遗迹，无室内部分，因此不受传统开放时间限制。最佳的游览时间是白天光线充足时，夜晚有景观照明，别有一番风味。旁边的埃武拉博物馆和教堂有其各自的开放时间，通常为上午9点至下午5点。`} />
              <InfoRow label="门票价格" value={`参观神庙遗迹本身完全免费。如果您想进入紧邻的埃武拉博物馆（内部有相关考古发现）或登上教堂的屋顶，则需要购买门票。博物馆门票约3-5欧元，通常有学生和老年人优惠票。`} />
              <InfoRow label="地址" value={`Largo do Conde de Vila Flor, 7000-863 Évora, Portugal`} />
              <InfoRow label="交通方式" value={`从里斯本出发最方便。在里斯本的Oriente或Sete Rios火车站搭乘开往埃武拉的区间火车，车程约1小时20分钟，班次频繁，几乎每小时一班，建议提前在葡萄牙铁路（CP）官网购票。到达埃武拉火车站后，神庙位于历史中心的山顶，步行上山约需15-20分钟，会穿过迷人的白色小巷，本身就是一段美妙的体验。也可以从火车站门口搭乘本地公交，但班次较少，步行是推荐的方式。如果自驾，可将车停在城墙外的公共停车场，然后步行进入老城。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲它的故事，我们得回到公元一世纪。当时，这里不叫埃武拉，而是罗马帝国一个重要省份——卢西塔尼亚的繁华城市“Liberalitas Julia”。罗马人在这里修建广场、浴场、剧院，而这座神庙，很可能就是献给罗马神话中的众神之王朱庇特，或者更可能的是，献给当时被神化的皇帝（可能是奥古斯都）。想想看，在那个时代，这些高耸的柱子表面可能覆盖着雪白的大理石，涂着鲜艳的色彩，金碧辉煌，是城市政治与宗教生活的绝对中心。罗马的工程师和工匠，从遥远的地方运来巨大的花岗岩块，用精准的技术将它们垒起，向这片“边陲之地”展示着帝国无远弗届的权威和文明。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，罗马帝国衰落了。随着西哥特人和后来摩尔人的到来，城市的面貌和信仰彻底改变。有趣的是，神庙并没有被立刻推倒。西哥特人可能对它进行了部分改造，而摩尔人统治的几百年里，它周围的区域变成了城堡的一部分。那些宏伟的柱子，被包裹进了防御工事的墙体里，这反而在无意中保护了它的核心结构，使其免于被彻底拆毁挪作他用。历史有时就是这么讽刺，毁灭性的战争围墙，成了它最坚强的铠甲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的“变形记”发生在基督教重新征服伊比利亚半岛之后。14世纪，葡萄牙王国在这里站稳脚跟，决定围绕这座古老的异教神庙，建造一座全新的、献给圣约翰的教堂。工匠们巧妙地（或者说实用主义地）利用了神庙的坚固基座和部分墙体，将其融入新教堂的结构中。于是，那些曾经供奉朱庇特的石柱，变成了基督教教堂墙壁的一部分。在很长一段时间里，人们看到的只是一个有着奇怪“古老墙基”的普通教堂，完全忘记了它最初的模样。甚至有传说，在16-17世纪，它的一部分空间还被用作……一个小型的屠宰场。从神殿到教堂再到屠宰场，这身份的流转，充满了历史的黑色幽默。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的“重生”要归功于两个关键事件：一是1755年那场摧毁里斯本的大地震，严重损坏了依附于它的教堂，迫使人们不得不进行大规模清理和拆除。在清理废墟时，那些被掩埋了几个世纪的完整罗马柱廊，才逐渐重新露出真容。二是19世纪浪漫主义思潮和考古学的兴起。葡萄牙的学者和艺术家开始用新的眼光审视这些遗迹，不再将其视为需要被基督教“净化”的异教残留，而是本国悠久历史与荣耀的见证。一场认真的考古修复工程展开了，清除了中世纪和近代的附加建筑，小心翼翼地让罗马时期的原始结构重新独立出来，巍然屹立。我们今天看到的，正是这次“剥离手术”后的结果，一座纯净的、穿越时空的罗马纪念碑。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`所以，你现在明白了吗？你眼前的不仅仅是一座神庙，而是一部石头的自传。它经历了崇拜、遗忘、挪用、掩埋、再发现和崇敬。每一道伤痕、每一处修补的痕迹，都是历史书上的一个标点。它没有在战火中粉身碎骨，也没有在时间中彻底消散，而是以这样一种不断适应、不断转化的坚韧生命力，活到了今天。这种“活着”的状态，比任何完美无缺的博物馆藏品，都更动人，更有力量。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你将参观安排在下午。午后的阳光会从西面斜射过来，将石柱照得通体金灿，光影效果达到极致。整个深度游览（包括环绕神庙、感受广场氛围、简单参观旁边的博物馆）大约需要2到3小时，节奏可以放得非常慢。路线从神庙正面的广场开始，由远及近，环绕一圈，再登上附近的高点俯瞰，最后融入傍晚的本地生活。这样安排，你既能欣赏到建筑本身的雄浑细节，又能体会到它作为城市公共空间一部分的鲜活气息，更能在黄昏时分捕捉到一天中最美的光线和氛围。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`石板路和台阶可能不平，务必穿一双舒适耐走的鞋子。葡萄牙南部阳光强烈，即使是下午，也请准备好帽子、太阳镜和饮用水。如果想拍摄无人打扰的空镜，清晨日出时分前来是摄影师们的秘密，但午后到黄昏的光线和氛围是无与伦比的。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从迪亚斯广场的远处找一张长椅坐下，花十分钟静静地看，看光影如何在那些千年石柱的凹槽间缓慢移动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`慢慢走近神庙高耸的基座，仰起头，仔细数一数那些科林斯柱头上雕刻的茛苕叶纹，感受花岗岩的巨大体量带来的压迫感。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要绕到神庙的侧面和后方，触摸那些粗糙的石块，观察地基上不同年代砌砖的明显区别，那是历史层叠的直观教科书。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在神庙北侧阴影下的长椅上坐一会儿，看看本地人如何穿行于此，听听他们聊天的声音，把自己从“游客”模式切换成“观察者”模式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进紧邻的埃武拉博物馆（原为教堂），看看从神庙周边挖掘出的考古文物，特别是那些精美的罗马雕像碎片和铭文。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，如果开放，不妨登上教堂的钟楼或屋顶平台（可能需要单独购票），从这里获得一个俯瞰神庙柱廊全景的独特视角。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`等待黄昏降临，看着夕阳为每一根石柱镶上炽烈的金边，直到天空变成粉紫色，神庙的景观灯悄然亮起。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`夜幕初垂时，就在广场边的露天餐厅选个位置，点一杯当地阿连特茹产区的红酒，在神庙的“注视”下享用晚餐，完成这场穿越千年的对话。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`广场西南角的长椅位置`}</h4>
                  <p className="text-sm text-gray-700">{`下午三到五点，用长焦镜头压缩空间，将神庙的石柱与后方教堂的尖塔、白色的民居一同纳入画面，形成古今同框的经典构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`柱廊之下仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`站在神庙基座的台阶上，贴近其中一根石柱向上拍摄，将精美的科林斯柱头充满画面右上角，让蓝天作为背景，突出建筑的宏伟与细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从埃武拉博物馆二楼窗口俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`这个角度可以将神庙完整的矩形基座和柱廊格局一览无余，特别是当广场上有人走动时，能拍出有生命力的历史场景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`黄昏金色时刻的侧逆光`}</h4>
                  <p className="text-sm text-gray-700">{`太阳落山前半小时，移动到神庙西侧，让阳光从石柱间穿透过来，拍摄人物剪影或捕捉石柱边缘那一道璀璨的金光，温暖而神圣。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`夜景灯光下的特写`}</h4>
                  <p className="text-sm text-gray-700">{`入夜后，景观灯从底部照亮石柱，此时可以尝试提高感光度，拍摄柱头雕刻在昏黄灯光下的神秘质感，与深蓝色的夜空形成对比。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重古迹，切勿为了拍照攀爬石柱或基座。使用三脚架在公共广场上通常是允许的，但注意不要妨碍行人。夜间拍摄建议使用稳固的三脚架和较低的感光度进行长曝光，以获得干净的画面。避免使用闪光灯，它会破坏古迹的自然质感并影响他人。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史中心宝石`}</h4>
                  <p className="text-sm text-blue-800">{`入住由16世纪贵族宅邸改造的精品酒店，厚重的石墙隔绝了现代喧嚣，内部庭院正对着神庙的侧面，在私密的空间里独享千年风景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计师的古今对话`}</h4>
                  <p className="text-sm text-green-800">{`选择广场附近一家现代设计的酒店，房间拥有巨大的落地窗，将神庙的壮观框架成你窗前的巨幅活画，夜晚在窗边小酌看灯火下的古迹别有韵味。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`静谧庄园体验`}</h4>
                  <p className="text-sm text-yellow-800">{`住在埃武拉城墙外不远处的乡间庄园酒店，享受阿连特茹平原的宁静，白天进城探索，晚上回来在星空下的泳池边回味白天的历史震撼。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济友好之选`}</h4>
                  <p className="text-sm text-purple-800">{`老城蜿蜒小巷里的家庭式客栈，由一对热情的老夫妇经营，房间虽小但一尘不染，早餐有家传的果酱，能给你最地道的本地生活建议。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`埃武拉老城很小，几乎所有住宿点步行到神庙都在10分钟以内。旺季（夏季和节假日）务必提前预订，尤其是那些有景观的房间。老城夜晚非常安全宁静，可以放心散步。许多历史建筑改造的酒店没有电梯，预订时如果行李较重可以提前咨询。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开埃武拉很久以后，我脑海里时常浮现的不是某一张具体的照片，而是那个下午坐在广场长椅上的感觉——一种深刻的平静。在那个空间里，时间不再是线性流逝的急流，而变成了一个可以随意漫步的广场。公元前后的罗马帝国、中世纪的虔诚、大航海时代的野心、现代的咖啡香，所有这些时代的声音、色彩和梦想，都同时存在于那几根沉默的石柱周围，互不干扰，却又共同谱写了一曲和谐的多声部合唱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求快速、崭新和刺激的世界里，埃武拉神庙给予我们一种稀缺的礼物：一种关于“持久”的慰藉。它让我们看到，真正的力量不是张扬和征服，而是承受与转化。它经历过被崇拜、被遗忘、被挪用、甚至被褒渎，但它只是在那里，以其物质的真实存在，最终赢得了所有时代的尊重。它教会我们，深度旅行不仅仅是去看不同的风景，更是去触摸不同的时间维度，去理解“永恒”并非不变，而是一种温柔而坚韧的延续。如果你也曾对历史的厚重感到好奇，渴望在一次旅程中与多个时空的灵魂对话，那么，请务必来埃武拉，坐在这个罗马巨人的脚下，听风穿过石柱，为你讲述一个关于石头、时间和 resilience 的漫长故事。这绝对是一生中值得专程前往的相遇。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/coimbra-university-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科英布拉大学城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Coimbra</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/viseu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维塞乌古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Viseu Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/obidos-wedding-town-portugal" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥比杜什婚礼之城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Óbidos</p>
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
