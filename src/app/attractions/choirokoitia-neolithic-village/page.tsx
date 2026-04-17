import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '乔伊鲁科蒂亚 Choirokoitia｜探访7000年前人类圆形家园，地中海最古老的灵魂印记 - 最佳欧洲景点',
  description: '车子拐下主干道，驶上一条安静的乡间小路，窗外的风景从地中海的蔚蓝瞬间切换成塞浦路斯特有的赭石色山丘与灰绿色橄榄树林。空气中弥漫着干燥的草本植物香气，混合着被烈日烘烤过的土壤味道。当“Choirokoitia”那朴素的棕色指示牌出现在路边时，你几乎会错过它——这里没有任何恢弘的预告，只有一片寂静的山坡...',
}

export default function ChoirokoitiaNeolithicVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '乔伊鲁科蒂亚', href: '/attractions/choirokoitia-neolithic-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`乔伊鲁科蒂亚・Choirokoitia・塞浦路斯・拉纳卡区（距离拉纳卡市约48公里）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下主干道，驶上一条安静的乡间小路，窗外的风景从地中海的蔚蓝瞬间切换成塞浦路斯特有的赭石色山丘与灰绿色橄榄树林。空气中弥漫着干燥的草本植物香气，混合着被烈日烘烤过的土壤味道。当“Choirokoitia”那朴素的棕色指示牌出现在路边时，你几乎会错过它——这里没有任何恢弘的预告，只有一片寂静的山坡在等着你。
爬上通往遗址的小坡，第一个撞进眼帘的，不是想象中的断壁残垣，而是五个依原样重建的圆形茅屋，像几个巨大的、温暖的蜂巢，蹲伏在古老的橄榄树下。你的手触摸到墙壁，那是一种粗糙而坚实的触感，由河里的石头和泥巴混合砌成。弯腰钻进低矮的门洞，光线骤然暗下来，一股阴凉、带着尘土气息的空气包裹了你。眼睛需要几秒钟适应，然后你看到中央那可能用于取暖和照明的火塘痕迹，想象着七千年前的夜晚，跳跃的火光将人影投在圆形的墙壁上，外面是地中海的星空与野兽的嚎叫。这一刻，时间不是抽象的“公元前7000年”，而是你脚下踩实的土地，你呼吸的空气，具体得惊人。
走出复原区，沿着木栈道走向真正的考古发掘区，感觉像踏进一个巨大的、露天的记忆剧场。眼前的山坡上，密密麻麻布满了由矮石墙勾勒出的圆形地基，一个紧挨着一个，层层叠叠向山坡顶端蔓延。风声是这里的主旋律，呼啸着穿过山谷，偶尔夹杂着几声遥远的羊铃。你很难听到其他游客的交谈，空间太开阔了，声音一出口就被风吹散了。这里没有精美浮雕，没有辉煌壁画，有的只是人类最原始的生存痕迹——他们如何划下一块地，搬来石头，围成一个圈，然后宣布：这是家。
当地人很少把这里当作一个纯粹的旅游点，它更像一个精神地标。学校会组织孩子们来，不是为了考试，而是让他们直观地触摸“我们从何而来”。你会看到塞浦路斯老人在遗址高处的长椅上静静坐着，眺望远方的大海，那眼神仿佛在连接一条看不见的线，线的这头是智能手机和高速公路，另一头，就系在这片圆形石阵的中心。乔伊鲁科蒂亚最打动人心的，正是这种赤裸的、毫无矫饰的“存在”。它不试图震撼你，只是平静地展示着人类故事的首页。当你站在这里，不再是观看“历史”，而是置身于“时间”本身，感受着那股让最初的人类决定停下流浪脚步、开始建造的原始冲动，依然在你我的血脉中隐隐搏动。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子拐下主干道，驶上一条安静的乡间小路，窗外的风景从地中海的蔚蓝瞬间切换成塞浦路斯特有的赭石色山丘与灰绿色橄榄树林。空气中弥漫着干燥的草本植物香气，混合着被烈日烘烤过的土壤味道。当“Choirokoitia”那朴素的棕色指示牌出现在路边时，你几乎会错过它——这里没有任何恢弘的预告，只有一片寂静的山坡在等着你。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`爬上通往遗址的小坡，第一个撞进眼帘的，不是想象中的断壁残垣，而是五个依原样重建的圆形茅屋，像几个巨大的、温暖的蜂巢，蹲伏在古老的橄榄树下。你的手触摸到墙壁，那是一种粗糙而坚实的触感，由河里的石头和泥巴混合砌成。弯腰钻进低矮的门洞，光线骤然暗下来，一股阴凉、带着尘土气息的空气包裹了你。眼睛需要几秒钟适应，然后你看到中央那可能用于取暖和照明的火塘痕迹，想象着七千年前的夜晚，跳跃的火光将人影投在圆形的墙壁上，外面是地中海的星空与野兽的嚎叫。这一刻，时间不是抽象的“公元前7000年”，而是你脚下踩实的土地，你呼吸的空气，具体得惊人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走出复原区，沿着木栈道走向真正的考古发掘区，感觉像踏进一个巨大的、露天的记忆剧场。眼前的山坡上，密密麻麻布满了由矮石墙勾勒出的圆形地基，一个紧挨着一个，层层叠叠向山坡顶端蔓延。风声是这里的主旋律，呼啸着穿过山谷，偶尔夹杂着几声遥远的羊铃。你很难听到其他游客的交谈，空间太开阔了，声音一出口就被风吹散了。这里没有精美浮雕，没有辉煌壁画，有的只是人类最原始的生存痕迹——他们如何划下一块地，搬来石头，围成一个圈，然后宣布：这是家。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当地人很少把这里当作一个纯粹的旅游点，它更像一个精神地标。学校会组织孩子们来，不是为了考试，而是让他们直观地触摸“我们从何而来”。你会看到塞浦路斯老人在遗址高处的长椅上静静坐着，眺望远方的大海，那眼神仿佛在连接一条看不见的线，线的这头是智能手机和高速公路，另一头，就系在这片圆形石阵的中心。乔伊鲁科蒂亚最打动人心的，正是这种赤裸的、毫无矫饰的“存在”。它不试图震撼你，只是平静地展示着人类故事的首页。当你站在这里，不再是观看“历史”，而是置身于“时间”本身，感受着那股让最初的人类决定停下流浪脚步、开始建造的原始冲动，依然在你我的血脉中隐隐搏动。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`乔伊鲁科蒂亚`} />
                <InfoRow label="英文名称" value={`Choirokoitia`} />
                <InfoRow label="正式名称" value={`Choirokoitia Neolithic Settlement`} />
                <InfoRow label="国家" value={`塞浦路斯`} />
                <InfoRow label="城市" value={`拉纳卡区（距离拉纳卡市约48公里）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`东地中海地区保存最完好的、最重要的新石器时代聚居地之一，将塞浦路斯的人类活动史推前至公元前7000年。`} />
                <InfoRow label="建筑特色" value={`由密集的圆形石砌房屋组成的防御性村落，房屋通过墙体相互连接，形成独特的蜂窝状结构。`} />
                <InfoRow label="建筑风格" value={`新石器时代石砌建筑，体现原始但极具功能性的设计智慧。`} />
                <InfoRow label="文化价值" value={`为研究史前人类从狩猎采集向农业定居社会过渡、早期社会组织形式及技术传播提供了无可替代的实物证据。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`每日开放，夏季（4月16日-9月15日）为8:30-19:30；冬季（9月16日-4月15日）为8:30-17:00。最后入场时间为关闭前半小时。逢主要公共节假日可能关闭或缩短开放时间，建议行前查阅官网。`} />
              <InfoRow label="门票价格" value={`成人票2.5欧元。学生及65岁以上长者享有折扣票1.3欧元。18岁以下青少年及儿童免费。每年特定的文化纪念日（如国际博物馆日）可能免票。`} />
              <InfoRow label="地址" value={`Choirokoitia, Larnaca District, Cyprus`} />
              <InfoRow label="交通方式" value={`从拉纳卡国际机场出发，最佳方式是租车自驾，沿A5和B110公路行驶，全程约50分钟。若从拉纳卡市中心乘坐公共交通，可先搭乘巴士至附近城镇，再转乘出租车（车程约15分钟），但班次较少且耗时，强烈建议自驾或参加从拉纳卡/利马索尔出发的半日游旅行团。遗址入口处有免费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事的开端，没有国王，没有英雄，甚至没有名字。大约在公元前7000年，或者更早，一小群人划着用树干挖成的独木舟，或是趁着冰期末期海平面较低时通过陆桥，从安纳托利亚或黎凡特地区，来到了这座当时还是野兽乐园的岛屿——塞浦路斯。他们为什么来？我们只能猜测：也许是追踪猎物，也许是逃离冲突，也许只是一次勇敢（或绝望）的探险。当他们登上这片海岸，发现岛上没有可怕的大型捕食者，气候温和，有着燧石矿脉和丰富的狩猎资源时，一个划时代的决定诞生了：不走了。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`于是，在离海岸不远，靠近一条季节性河流的一座陡峭山丘上，最初的建造开始了。他们没有选择易于建造的方形，而是不约而同地采用了圆形。考古学家们争论原因：是因为圆形结构更稳固，更能抵御风雨？还是因为模仿了他们曾经居住的洞穴或临时帐篷？又或者，圆形在文化上象征着团结、家庭与宇宙？我们不得而知。但我们看到的结果是，他们用从河里捡来的石灰岩块，垒起高度超过两米、厚度近一米的石墙，墙壁内侧涂抹泥土使其光滑。屋顶用木柱支撑，覆盖芦苇和泥巴。最关键的是，这些房屋不是散落的，它们的墙壁彼此紧贴、共用，形成一道坚固的、连续的、环绕整个山顶定居点的“防御墙”。只有一个狭窄的、由高架木梯通过的入口可以进入这个蜂巢般的社区。这不是随意的聚集，这是一个有严密规划、具备高度集体意识和防御思维的“社会”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个石头围成的世界里，生活缓慢而艰辛，却也充满了新石器革命的生机。男人们用精美的燧石制作箭头和镰刀，女人们用光滑的石膏石碗研磨谷物——考古发现了碳化的小麦和大麦种子，证明农业已经萌芽。他们驯养猪、羊和狗。他们还发展出令人惊叹的“现代”习俗：死者被小心地蜷缩成胎儿的姿势，埋葬在房屋的地板下，陪伴着生者，仿佛死亡只是又一次回归家园。这里出土了来自安纳托利亚的黑曜石工具，证明他们并非与世隔绝，仍与故土保持着贸易联系。这个社群繁荣了将近一千年，人口可能达到数百人。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，大约在公元前6000年，乔伊鲁科蒂亚被突然废弃了。原因成谜。是资源耗竭？是疾病？是外敌入侵（虽然防御坚固）？还是内部的社会崩溃？没有暴力痕迹，就像所有人某一天收拾行装，平静地离开了。随后的一千多年，塞浦路斯岛上似乎再无大规模定居的痕迹，直到新一批移民带来不同的文化。乔伊鲁科蒂亚被彻底遗忘，泥土逐渐掩埋了石墙，橄榄树和刺山柑在废墟上生长，它的故事沉睡在层层黄土之下。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时间的转盘快进到1934年。一位名叫波菲里奥斯·迪凯奥斯的塞浦路斯考古学家，凭着敏锐的直觉和当地农民的线索，开始了首次发掘。当第一圈圆形石基重见天日时，整个地中海考古界为之震动。它不仅改写了塞浦路斯的历史，更为了解人类向欧洲迁徙的关键路径提供了灯塔。随后的系统性发掘，尤其是20世纪70年代法国考古队的杰出工作，一层层揭开了这个失落世界的面貌。为了保护遗址并帮助公众理解，考古学家们在旁边用传统材料和工艺重建了五座房屋，让你能“走进”历史。1998年，联合国教科文组织将乔伊鲁科蒂亚列入世界遗产名录，称其为“证明人类早期智能与适应性的杰出证据”。从此，这片沉默的山坡，正式向世界诉说起七千年前，关于家园、社群与生存的，最古老的地中海故事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受乔伊鲁科蒂亚的魔力，请务必安排一个完整的上午或凉爽的傍晚前来，避开塞浦路斯正午的酷热。整体游览时间建议预留2-3小时，节奏宜慢不宜快。路线设计遵循“先理解，后体验，再沉思”的逻辑：从现代化的游客中心获取背景知识，然后参观重建区获得直观感受，最后沿着栈道深入考古核心区，在绝对的寂静中完成与远古的对话。这样的安排能让你从知识到感官，层层递进地沉浸其中，而不是走马观花地看一堆石头。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双舒适耐磨的徒步鞋，遗址区的石板路和土坡在夏季可能很滑。塞浦路斯阳光极其强烈，帽子、太阳镜、防晒霜和至少一升水是保命装备，遗址内几乎毫无遮荫。如果对考古细节感兴趣，可以考虑预约一位持证导游，他们的讲解能让这些石头开口说话。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先在简洁明亮的游客中心里花二十分钟看完那部制作精良的短片，让那些动画里奔跑的原始人和复原的生活场景，为你接下来的亲眼所见铺上一层想象的底色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`然后径直走向屋外那五座按原样重建的圆形石屋，务必依次弯腰钻进每一个低矮的门洞，用手触摸冰凉的石墙，用身体感受内部空间的尺度与昏暗。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从重建区出来，沿着清晰标识的木栈道缓步上行，正式进入被发掘出的巨大遗址区域，第一个观景平台会让你对这片“石头蜂巢”的规模和布局产生第一声惊叹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`跟着栈道的指引，在那些沉默的圆形地基间慢慢穿行，仔细观察脚下裸露的土层断面，那里可能还嵌着千年前的陶器碎片或烧火的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到遗址的最高点，那里有一张朴素的长椅，请一定坐下来，面朝远方隐约可见的地中海蓝，任凭山风吹过，什么也别做，只是感受时间的深度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下山途中，留意那些标识牌上用简单线条描绘的生活场景：这里是墓葬区，那里是燧石加工点，试着在脑海中复活这个社区的日常喧嚣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开主遗址区前，别忘了去看看那棵巨大的古老橄榄树，它的根须也许缠绕着比人类定居更早的记忆，是这片土地上真正的原住民。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到入口处，在小小的纪念品商店里，或许可以带走一块不起眼的仿制燧石工具，它不是礼物，而是一枚来自时间深处的信物。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`遗址南侧山坡远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`在下午四点后的侧光下，从遗址外围的道路上，用长焦镜头压缩空间，将层层叠叠的圆形地基与背景中的现代村庄同框，形成强烈的时空对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`低角度贴近圆形石基`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏的低角度光线能拉长石头的阴影，将手机或相机贴近地面向上拍摄，以天空为背景，突出石墙粗糙原始的质感和完美的几何弧线。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`走进重建圆形屋内部`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分外界光线最强时，站在屋内，将镜头对准低矮的门洞，捕捉门外那片被框成圆形的、过度曝光的橄榄树与蓝天，形成明暗对比强烈的“世界之窗”。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`古老橄榄树与遗址全景`}</h4>
                  <p className="text-sm text-gray-700">{`从遗址最高点的长椅附近，以那棵姿态虬结的古老橄榄树为前景，拍摄它枝叶框架下延展开的整个遗址全貌，构图充满生命力与历史感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`栈道引导线构图`}</h4>
                  <p className="text-sm text-gray-700">{`利用木栈道天然的引导线条，从栈道起点或某个弯角向前拍摄，让线条将观众的视线一直引向远处山坡上的圆形遗迹，增强画面的纵深感和探索意味。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尽量使用RAW格式拍摄，以便后期调整这片高对比度场景中的阴影与高光细节。尝试黑白模式，能剥离色彩干扰，极度强调石头、泥土和光影的纹理与结构，表现史前的苍茫感。请绝对避免使用无人机，这里是受严格保护的世界遗产，且强风天气多发。尊重遗址，不要为了拍照攀爬或踩踏任何古老的石墙。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在拉纳卡市中心海滨大道旁的家庭式公寓，早上被地中海的海浪声唤醒，晚上在遍布传统小酒馆的街道上享用一顿塞浦路斯拼盘，乘坐便捷的巴士就能开始你的史前之旅。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择遗址附近村庄里由传统石屋改造的乡村客栈，晚上在宁静的星空下入睡，清晨在鸡鸣犬吠和乡村面包房飘来的香气中醒来，真正融入塞浦路斯的乡村节奏。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`入住利马索尔或拉纳卡海岸线上的五星级度假村，在探索完7000年的尘土与艰辛后，回到现代文明的怀抱，在无边泳池边啜饮一杯Commandaria甜酒，享受极致的时空反差与放松。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`建议以拉纳卡为住宿基地，交通和餐饮选择最为丰富。如果追求极致宁静，遗址附近的村庄住宿别有风味，但需自驾且晚餐选择有限。夏季（6-8月）是旺季，务必提前预订，尤其是周末。塞浦路斯治安良好，即使是乡村地区也非常安全友善。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开乔伊鲁科蒂亚的时候，你的鞋底会沾上红色的尘土，皮肤上留着地中海的阳光吻过的痕迹。但更深的变化发生在心里。你会突然对“古老”这个词有了全新的体认——金字塔古老，罗马斗兽场古老，但在这里，你面对的是“古老”本身的原点。它没有讲述权力的更迭或艺术的辉煌，它只讲述一件事：人，如何开始成为“定居的人”。那种在荒芜中建立秩序，在恐惧中构筑安全的原始冲动，是人类所有文明故事的共同开篇。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求速度、迷恋新奇的世界里，乔伊鲁科蒂亚是一剂疗效深厚的“减速剂”。它强迫你慢下来，不是用美景，而是用一片近乎“空无”的沉默。在这里，你会发现，最深度的旅行，有时不是去看多么绚烂的东西，而是去一个能让你清晰听到自己心跳和呼吸的地方。它像一个巨大的时空锚点，让你在纷繁复杂的现代生活中，重新感受到脚下土地的坚实和血脉中流淌的、来自无数代先民的 resilience（韧性）。每一位热爱深度游的旅人，都该来一次这里。不是为了收集另一个世界遗产，而是为了完成一次与人类自身童年期的、无声却震耳欲聋的对话。当你弯腰走进那个圆形石屋的阴影时，你走进的不是历史，是你自己。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/paphos-archaeological-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕福斯考古公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Paphos Archaeological Park</p>
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
