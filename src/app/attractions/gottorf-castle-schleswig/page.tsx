import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '戈托尔夫城堡 Gottorf Castle｜峡湾岛屿上的北欧权力王座与艺术殿堂 - 最佳欧洲景点',
  description: '想象一下，你穿过一座古老的石桥，脚下是墨绿色、几乎静止的护城河水，然后整个世界豁然开朗。眼前是一座巨大的、用红砖与砂岩构筑的宫殿，它不是高高在上地立在山巅，而是沉稳地坐落在岛屿之上，被水温柔地环抱着。这就是你对戈托尔夫城堡的第一眼——不是威慑，而是一种庄严的邀请。风从附近的施莱湾吹来，带着北海特有的',
}

export default function GottorfCastleSchleswigPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '戈托尔夫城堡', href: '/attractions/gottorf-castle-schleswig' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`戈托尔夫城堡・Gottorf Castle・德国・石勒苏益格`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`想象一下，你穿过一座古老的石桥，脚下是墨绿色、几乎静止的护城河水，然后整个世界豁然开朗。眼前是一座巨大的、用红砖与砂岩构筑的宫殿，它不是高高在上地立在山巅，而是沉稳地坐落在岛屿之上，被水温柔地环抱着。这就是你对戈托尔夫城堡的第一眼——不是威慑，而是一种庄严的邀请。风从附近的施莱湾吹来，带着北海特有的、微咸而清冽的气息，海鸥的叫声划破长空，混着庭院里修剪整齐的草坪散发的淡淡青草香。这里安静得能听到自己的脚步声在石板地上回响，时间仿佛和护城河的水一样，流得特别慢。
在当地人眼里，这里远不止是个景点。周末你会看到一家老小推着婴儿车，在广阔的雕塑公园里散步；艺术系的学生抱着素描本，对着一尊古老的石像发呆；老先生们坐在长椅上，眯眼看着宫殿的轮廓，也许在回想他们童年时来这里远足的往事。它早已褪去了政治权力的冰冷外衣，变成了社区的大客厅和灵魂的后花园。它最动人的，正是这种双重身份：一边是承载了数百年刀光剑影、王室权谋的厚重历史实体，另一边又是充满生活气息、向所有人敞开怀抱的现代文化绿洲。
走进宫殿内部，那种反差感更强烈了。厚重的橡木门后，可能是挂满华丽壁毯、讲述着北欧神话的宴会厅；穿过一条幽暗的走廊，却突然进入一个光线充沛的白色展厅，里面陈列着跨越千年的考古珍宝，从维京人的头盔到中世纪的金饰，玻璃展柜反射着柔和的灯光。你能同时闻到老木头陈年的味道、博物馆里一丝不苟的清洁剂气味，还有从某个敞开的高窗飘进来的、带着水汽的微风。这种感官的混合，就像这座城堡本身的历史层次，丰富得让人着迷。
它的核心魅力，在于这种“岛屿”的象征意义。它不仅在物理上是一座水中央的孤岛，在精神上也像是一座时间的孤岛。在这里，你能清晰地触摸到荷尔斯泰因公国曾经作为一个独立、强大且文化昌盛的实体那段历史。它没有被后来统一的德国叙事完全吞没，反而倔强地保留着自己的故事，并通过那些无与伦比的艺术收藏——比如著名的“戈托尔夫鹿”和全球最重要的冰川时期考古发现之一——向世界低语着这片土地与北海、与斯堪的纳维亚更为紧密的血脉联结。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`想象一下，你穿过一座古老的石桥，脚下是墨绿色、几乎静止的护城河水，然后整个世界豁然开朗。眼前是一座巨大的、用红砖与砂岩构筑的宫殿，它不是高高在上地立在山巅，而是沉稳地坐落在岛屿之上，被水温柔地环抱着。这就是你对戈托尔夫城堡的第一眼——不是威慑，而是一种庄严的邀请。风从附近的施莱湾吹来，带着北海特有的、微咸而清冽的气息，海鸥的叫声划破长空，混着庭院里修剪整齐的草坪散发的淡淡青草香。这里安静得能听到自己的脚步声在石板地上回响，时间仿佛和护城河的水一样，流得特别慢。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当地人眼里，这里远不止是个景点。周末你会看到一家老小推着婴儿车，在广阔的雕塑公园里散步；艺术系的学生抱着素描本，对着一尊古老的石像发呆；老先生们坐在长椅上，眯眼看着宫殿的轮廓，也许在回想他们童年时来这里远足的往事。它早已褪去了政治权力的冰冷外衣，变成了社区的大客厅和灵魂的后花园。它最动人的，正是这种双重身份：一边是承载了数百年刀光剑影、王室权谋的厚重历史实体，另一边又是充满生活气息、向所有人敞开怀抱的现代文化绿洲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走进宫殿内部，那种反差感更强烈了。厚重的橡木门后，可能是挂满华丽壁毯、讲述着北欧神话的宴会厅；穿过一条幽暗的走廊，却突然进入一个光线充沛的白色展厅，里面陈列着跨越千年的考古珍宝，从维京人的头盔到中世纪的金饰，玻璃展柜反射着柔和的灯光。你能同时闻到老木头陈年的味道、博物馆里一丝不苟的清洁剂气味，还有从某个敞开的高窗飘进来的、带着水汽的微风。这种感官的混合，就像这座城堡本身的历史层次，丰富得让人着迷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它的核心魅力，在于这种“岛屿”的象征意义。它不仅在物理上是一座水中央的孤岛，在精神上也像是一座时间的孤岛。在这里，你能清晰地触摸到荷尔斯泰因公国曾经作为一个独立、强大且文化昌盛的实体那段历史。它没有被后来统一的德国叙事完全吞没，反而倔强地保留着自己的故事，并通过那些无与伦比的艺术收藏——比如著名的“戈托尔夫鹿”和全球最重要的冰川时期考古发现之一——向世界低语着这片土地与北海、与斯堪的纳维亚更为紧密的血脉联结。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`戈托尔夫城堡`} />
                <InfoRow label="英文名称" value={`Gottorf Castle`} />
                <InfoRow label="正式名称" value={`Schloss Gottorf`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`石勒苏益格`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`曾是荷尔斯泰因公国的统治中心，北欧地区最重要的文艺复兴宫殿之一。`} />
                <InfoRow label="建筑特色" value={`一座被宽阔护城河环绕的庞大岛屿宫殿，融合了防御工事的坚实与皇家居所的优雅。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴风格为主，并在多次扩建中融入了巴洛克及历史主义元素。`} />
                <InfoRow label="文化价值" value={`从军事堡垒转变为顶级博物馆，象征着权力向公共文化的华丽转身，是理解德国北部与斯堪的纳维亚历史交融的关键。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`城堡及博物馆开放时间因季节和展馆而异。通常情况如下：四月至十月，每天上午10点至下午6点；十一月至次年三月，周二至周日上午10点至下午4点，周一闭馆。请注意，位于城堡内的石勒苏益格-荷尔斯泰因州立博物馆与戈托尔夫雕塑公园的开放时间可能略有不同。圣诞节前夕、圣诞节当天及元旦通常全天闭馆。强烈建议出行前在其官网核实最新时间表。`} />
              <InfoRow label="门票价格" value={`实行联票制。标准成人联票（包含州立博物馆所有常设展览及雕塑公园）约为12欧元。仅参观雕塑公园票价约为8欧元。优惠票（学生、残疾人、团体等）约为8欧元。18岁以下儿童及青少年免费。每月第一个周五下午可能设有免费入场时段，详情需查询官网。`} />
              <InfoRow label="地址" value={`Schlossinsel 1, 24837 Schleswig, Germany`} />
              <InfoRow label="交通方式" value={`最近的国际机场是汉堡机场。从汉堡机场出发，最便捷的方式是乘坐火车。在机场火车站乘坐区域列车（RB或RE）前往石勒苏益格主火车站，车程约1小时40分钟至2小时，班次每小时1-2班，无需提前购票，可在车站自动售票机或德铁APP购买。抵达石勒苏益格火车站后，出站步行约25分钟即可抵达城堡，路线清晰，会穿过宁静的老城区并沿着施莱湾漫步，是很好的预热。也可以乘坐当地的6路或7路公交车，在“Schloss Gottorf”站下车。如果你自驾，城堡外设有收费停车场。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从一块被水环绕的战略要地开始讲起。大约在1110年，一位名叫“戈托尔夫”的贵族在这里建造了一座坚固的城堡，城堡的名字就来源于他。但真正让这座城堡登上历史舞台的，是石勒苏益格的主教们和后来统治这里的绍恩堡伯爵。他们看中了这片伸入施莱湾的狭长陆地，在这里建起了防御工事，控制着通往波罗的海和内陆的水陆要道。最初，它只是一座带有木制结构的土垒城堡，功能纯粹是军事化的，耳边充斥的是士兵的操练声和铁匠铺的敲打声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点出现在15世纪，当这片土地成为荷尔斯泰因公国的中心时，戈托尔夫城堡的命运彻底改变了。它从一座边境堡垒，一跃成为了统治者的宫廷。但让它脱胎换骨的，是16世纪那位雄心勃勃的公爵——弗里德里希一世和他的儿子。他们深受南方文艺复兴思潮的影响，决心要打造一座配得上其权力与野心的“北方的明珠”。于是，城堡开始了长达百年的扩建与美化。意大利和荷兰的建筑师、艺术家被请到这里，中世纪粗糙的防御墙被推倒，取而代之的是对称的翼楼、装饰着浮雕的华丽山墙、以及宽敞明亮的窗户。城堡的中心，建起了那个令人叹为观止的“巨人厅”，据说当时是为了举办盛大宴会，甚至能容纳一头全牛烤制的宴会。城堡不再是单纯的军事据点，它成了政治、文化与艺术的沙龙。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`城堡的黄金时代与一个女人的名字紧密相连：赫德维希女王。她来自丹麦王室，嫁入戈托尔夫，是一位极具艺术品味的收藏家。在她的推动下，城堡里不仅充盈着来自欧洲各地的画作、挂毯和奇珍异宝，还建立了一个对后世影响深远的“艺术柜”，这是现代博物馆最早的雏形之一。正是在这个时期，那尊举世闻名的“戈托尔夫鹿”——一具公元前3世纪的泥炭沼泽保存完好的驯鹿雕像——被纳入了收藏。然而，权力的游戏从未停歇。随着丹麦与瑞典的北方战争，以及公国继承权的纷争，城堡几度易手，经历过围困，也见证过衰落。18世纪后，随着统治中心转移，它一度被用作兵营和仓库，昔日的繁华蒙上了灰尘。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它最大的劫难来自二战末期。1945年，一场灾难性的大火席卷了城堡，木制结构几乎全部焚毁，只留下被熏黑的外墙和残破的骨架，如同一个巨大的、悲伤的纪念碑。许多人以为它的故事就此终结了。但战后，人们做出了一个勇敢而浪漫的决定：不是拆除，而是重建。这不是简单的复原，而是一次凤凰涅槃。重建工程持续了数十年，人们在尊重历史轮廓的基础上，用现代的技术和材料让其重生。而更重要的是，人们赋予了它全新的灵魂——石勒苏益格-荷尔斯泰因州立博物馆在此安家。于是，那些在战火中幸存下来的珍贵收藏，连同在全州范围内发掘的考古和历史宝藏，重新回到了这座宫殿。权力离开了，艺术和记忆永久地住了进来。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要完整感受戈托尔夫城堡的魔力，建议至少预留出大半天的时间，约4-5小时为佳。最佳的抵达时间是上午10点开馆前后，这时晨光柔和，旅游团尚未大批涌入，你能独享护城河畔的宁静和雕塑公园清晨的露水。整体的游览节奏应该是“由外至内，由广至深”。先从外部环境和雕塑公园开始，建立整体的空间感和历史氛围，然后进入宫殿内部，沉浸于具体的展厅和历史房间，最后以一个俯瞰全局的高点视野作为结束。这样的安排能让你像剥洋葱一样，层层深入地理解这个地方。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着舒适的步行鞋，城堡内外地面多为石板或砂石路，且塔楼的楼梯非常狭窄陡峭。博物馆内部许多展厅禁止使用闪光灯，请注意标识，做一个文明的参观者。如果时间有限，建议提前在官网研究展厅地图，锁定你最感兴趣的常设展（如考古艺术收藏）和可能的特展，避免在庞大的宫殿里迷失方向。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡北侧那条安静的林间小路开始，让巨大的宫殿倒影第一次完整地映入护城河如镜的水面，确立你对它的第一印象。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过古老的石桥进入城堡岛，别急着进门，先在广阔的巴洛克风格雕塑公园里随意走走，让那些沉默的石像在绿树蓝天下给你讲个关于永恒的小故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从公园侧门进入宫殿主体，直接登上宏伟的“巨人厅”，站在空旷大厅的中央，想象这里曾举办过的喧嚣宴会，感受脚下历史传来的轻微震动。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着指示牌探索州立博物馆的考古收藏，重点寻找那尊神秘的“戈托尔夫鹿”和金光闪闪的中世纪珍宝柜，与几千年前的工匠进行一次无声的对话。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`不要错过重建的文艺复兴时期礼拜堂，坐在长椅上抬头看彩绘的木质穹顶，阳光透过高高的窗户，灰尘在光柱中舞蹈，时间在这里变得神圣而缓慢。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻找通往北塔楼顶的狭窄螺旋楼梯，鼓起勇气爬上去，让施莱湾的万顷波光、红色的老城屋顶和绵延的草地一次性全部涌进你的眼帘。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开主堡，绕到城堡岛的南端，那里有一片安静的河畔草地，是野餐和发呆的完美地点，看着小船缓缓划过水面，让刚才汲取的所有历史信息慢慢沉淀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后从西门离开，在过桥前回头再看一眼夕阳下城堡的剪影，这时灯火初上，它又从白天的博物馆变回了夜晚那座神秘的岛屿宫殿。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`护城河东岸的步道中点`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光时分，能将城堡主体、其在水中的完美倒影以及前景的芦苇一同纳入镜框，构图平衡而富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`北塔楼顶的垛口处`}</h4>
                  <p className="text-sm text-gray-700">{`全天皆可，但以晴朗的傍晚为佳，使用广角镜头可以拍下城堡屋顶、雕塑公园的几何图案与远方施莱湾的三重全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`雕塑公园的“人像走廊”`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前，低角度的阳光会拉长白色大理石雕塑的影子，找一个对称的拱门框架，拍摄人物穿行其中的剪影，故事感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`“巨人厅”二层的拱廊窗户边`}</h4>
                  <p className="text-sm text-gray-700">{`中午左右，阳光会穿透窗户在厅内地面形成规律的光斑，从拱廊内向主厅拍摄，能捕捉到光线切割巨大空间的建筑几何美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡西桥的入口处`}</h4>
                  <p className="text-sm text-gray-700">{`华灯初上时的蓝调时刻，以桥洞或石栏杆为前景框架，拍摄对面灯火通明的城堡立面，营造出穿越时空的梦幻入口之感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄雕塑公园时，请尊重艺术品，不要触摸或攀爬雕塑。使用无人机在城堡及博物馆上空飞行通常被严格禁止，除非获得特殊许可。在室内展厅，务必遵守摄影规定，有些脆弱展品可能完全禁止拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`老城情怀之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在石勒苏益格老城中心由半木结构房屋改造的家庭旅馆，早晨在鹅卵石巷弄里散步，路过面包店的热气腾腾，五分钟就能走到海湾边。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`城堡旁的静谧`}</h4>
                  <p className="text-sm text-green-800">{`预订一家位于城堡岛对岸、紧邻水边的精品设计酒店，房间带有一个小阳台，晚上可以就着一杯葡萄酒，看城堡的灯光星星点点洒在漆黑的水面上。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`现代艺术体验`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻由港口旧仓库改造而成的LOFT风格酒店，工业风的设计与厚重的历史感形成有趣对话，而且这里通常是当地创意人士的聚集地。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`田园诗画逃脱`}</h4>
                  <p className="text-sm text-purple-800">{`如果你有车，不妨选择驱车15分钟外、坐落在田间小路尽头的乡村民宿，享受纯粹的田园宁静，第二天在奶牛铃铛声中醒来再去探索城堡。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`石勒苏益格是个非常安全宁静的小城，夜间独自散步也无需担心。夏季旅游旺季和当地节庆期间（如石勒苏益格航海节），住宿会非常紧张，务必提前数月预订。选择老城住宿时，如果对噪音敏感，可以询问房间是否朝向安静的庭院而非主街。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开戈托尔夫城堡很久以后，我脑海里反复回响的不是某一件具体的展品，而是那种复杂的、交织的感觉。水的柔软与砖石的坚硬，权力的喧嚣与艺术的静默，战火的灼热与重建的耐心——所有这些截然相反的特质，竟然在这座岛屿宫殿里达成了奇妙的和解。它没有试图隐藏自己伤疤（那些火灾后重修的痕迹清晰可辨），也没有炫耀自己昔日的荣光，只是平静地存在着，像一位历经沧桑却眼神清澈的老者，把所有的故事都化作了护城河上淡淡的涟漪。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都在快速迭代的世界里，戈托尔夫提供了一种截然不同的时间维度。它告诉我们，有些东西可以被摧毁，但记忆和文化可以被小心拾起、精心修复；一个地方的权力功能会消亡，但它作为文明容器的价值却可以历久弥新。它不仅是荷尔斯泰因的历史档案，更是一个关于韧性、转变与重生的鲜活隐喻。每一位热爱深度游的旅人，都该来这个“北方的岛屿”站一站。在这里，你不仅能眺望施莱湾开阔的水域，更能窥见历史长河中，人类如何在动荡里守护美，如何在灰烬中重建意义。这种力量，远比任何国王的权杖都更动人。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/lorsch-abbey" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    洛
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">洛尔施隐修院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lorsch Abbey</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rakotzbr-cke-kromlau-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    拉
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">拉科茨桥（魔鬼桥）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rakotzbrücke (Devil‘s Bridge)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lindau" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    林
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">林道老城区</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lindau Old Town</p>
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
