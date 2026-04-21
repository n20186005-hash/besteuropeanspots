import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '费利克斯·罗穆利亚纳 Felix Romuliana｜古罗马皇帝伽列里乌斯极其震撼的紫色斑岩出生地与陵寝 - 最佳欧洲景点',
  description: '车子在塞尔维亚东部平缓的丘陵与葡萄园间穿行，当你开始怀疑导航时，一片突兀的、赭黄色的巨大土墙和残破的塔楼，就那么蛮横地闯入视野。没有过渡，没有预告。这就是费利克斯·罗穆利亚纳给你的第一眼——不像常见的精致罗马遗迹，它更像一头沉睡在农田里的巨兽骸骨，带着原始的、未加修饰的震撼力。空气里是干草和远处松林',
}

export default function FelixRomulianaZajecarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '塞尔维亚', href: '/destinations/europe' },
            { label: '扎耶查尔州，靠近加姆齐格勒镇', href: '/destinations/europe' },
            { label: '费利克斯·罗穆利亚纳', href: '/attractions/felix-romuliana-zajecar' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`费利克斯·罗穆利亚纳・Felix Romuliana (Zaječar)・塞尔维亚・扎耶查尔州，靠近加姆齐格勒镇`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子在塞尔维亚东部平缓的丘陵与葡萄园间穿行，当你开始怀疑导航时，一片突兀的、赭黄色的巨大土墙和残破的塔楼，就那么蛮横地闯入视野。没有过渡，没有预告。这就是费利克斯·罗穆利亚纳给你的第一眼——不像常见的精致罗马遗迹，它更像一头沉睡在农田里的巨兽骸骨，带着原始的、未加修饰的震撼力。空气里是干草和远处松林混合的干燥气味，风吹过废墟孔洞发出低沉的呜咽，除此之外，万籁俱寂。
走近它，世界瞬间被一种颜色主导：紫色。不是娇嫩的紫，而是深沉、厚重、近乎于黑的帝王紫。那是散落一地的斑岩石柱碎片，是雕刻着华丽茛苕叶纹的柱头，是曾经包裹墙面的装饰板材。阳光直射下来，这些坚硬的石头内部仿佛有暗紫色的火焰在流淌。伽列里乌斯皇帝对紫色斑岩的痴迷在这里达到顶峰，因为这种石材在当时等同于皇权神授。你脚下踩着的，不是普通的碎石路，而是被两千年时光打磨光滑的、皇帝御道上的石板。
最奇妙的是它的“活着的”背景。遗址并非孤悬荒野，它的外围城墙外，就是当地村民的屋舍和鸡舍。你能看到老太太在院子里晾晒床单，狗在古老的罗马防御壕沟（如今长满了草）边晒太阳。这个庞大的帝国工程，早已褪去神圣的外衣，成了当地人生活景观里最自然不过的一部分。羊群可能曾在皇帝的宴会厅遗址上吃草，这种时空交错的荒诞与和谐，恰恰是费利克斯·罗穆利亚纳最动人的魅力——权力化为尘土，生活生生不息。
而它的核心魅力，在于那股扑面而来的、几乎能触摸到的“野心”。这不是一个用于治理国家的首都，也不是一个单纯的度假行宫。这是伽列里乌斯为自己和母亲打造的“圣域”，一个从出生到死亡，从人到“神”的完整闭环。行走其间，你能清晰地感觉到那位出身此地的牧童皇帝，在用石头和空间拼命证明着什么，对抗着什么。那种强烈的个人意志，历经千年风雨，依然凝固在每一块斑岩的裂痕里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子在塞尔维亚东部平缓的丘陵与葡萄园间穿行，当你开始怀疑导航时，一片突兀的、赭黄色的巨大土墙和残破的塔楼，就那么蛮横地闯入视野。没有过渡，没有预告。这就是费利克斯·罗穆利亚纳给你的第一眼——不像常见的精致罗马遗迹，它更像一头沉睡在农田里的巨兽骸骨，带着原始的、未加修饰的震撼力。空气里是干草和远处松林混合的干燥气味，风吹过废墟孔洞发出低沉的呜咽，除此之外，万籁俱寂。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走近它，世界瞬间被一种颜色主导：紫色。不是娇嫩的紫，而是深沉、厚重、近乎于黑的帝王紫。那是散落一地的斑岩石柱碎片，是雕刻着华丽茛苕叶纹的柱头，是曾经包裹墙面的装饰板材。阳光直射下来，这些坚硬的石头内部仿佛有暗紫色的火焰在流淌。伽列里乌斯皇帝对紫色斑岩的痴迷在这里达到顶峰，因为这种石材在当时等同于皇权神授。你脚下踩着的，不是普通的碎石路，而是被两千年时光打磨光滑的、皇帝御道上的石板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最奇妙的是它的“活着的”背景。遗址并非孤悬荒野，它的外围城墙外，就是当地村民的屋舍和鸡舍。你能看到老太太在院子里晾晒床单，狗在古老的罗马防御壕沟（如今长满了草）边晒太阳。这个庞大的帝国工程，早已褪去神圣的外衣，成了当地人生活景观里最自然不过的一部分。羊群可能曾在皇帝的宴会厅遗址上吃草，这种时空交错的荒诞与和谐，恰恰是费利克斯·罗穆利亚纳最动人的魅力——权力化为尘土，生活生生不息。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而它的核心魅力，在于那股扑面而来的、几乎能触摸到的“野心”。这不是一个用于治理国家的首都，也不是一个单纯的度假行宫。这是伽列里乌斯为自己和母亲打造的“圣域”，一个从出生到死亡，从人到“神”的完整闭环。行走其间，你能清晰地感觉到那位出身此地的牧童皇帝，在用石头和空间拼命证明着什么，对抗着什么。那种强烈的个人意志，历经千年风雨，依然凝固在每一块斑岩的裂痕里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`费利克斯·罗穆利亚纳`} />
                <InfoRow label="英文名称" value={`Felix Romuliana (Zaječar)`} />
                <InfoRow label="正式名称" value={`Felix Romuliana`} />
                <InfoRow label="国家" value={`塞尔维亚`} />
                <InfoRow label="城市" value={`扎耶查尔州，靠近加姆齐格勒镇`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里是罗马帝国“四帝共治”时期的奥古斯都——伽列里乌斯皇帝的出生地、宫殿，也是他最终与母亲罗慕拉合葬的宏伟陵墓。`} />
                <InfoRow label="建筑特色" value={`规模极其庞大，拥有双重防御城墙，核心是奢华的行宫建筑群，并以独特的紫色斑岩（帝王石）柱、雕塑和装饰闻名于世。`} />
                <InfoRow label="建筑风格" value={`晚期罗马帝国建筑风格，融合了军事堡垒的坚固与皇室宫殿的奢华，并带有明显的个人崇拜与“神圣化”设计。`} />
                <InfoRow label="文化价值" value={`它不仅是罗马帝国在巴尔干地区统治的顶级权力象征，更罕见地完整展现了一位皇帝试图将自己神化并“封圣”于出生之地的全部野心与仪式空间。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`夏季（4月1日至10月31日）：每日上午9点至晚上7点，售票处提前半小时关闭。
冬季（11月1日至3月31日）：每日上午9点至下午4点，周一有时会闭馆维护，出行前建议查询官网。
遗址全年开放，但恶劣天气（如大雪、暴雨）可能临时关闭部分区域。圣诞节和新年当天通常全天关闭。`} />
              <InfoRow label="门票价格" value={`成人票：600第纳尔（约合5欧元）。
学生票、儿童票（7-18岁）：300第纳尔。
7岁以下儿童、残疾人及一名陪同人员免费。
团体票（15人以上）通常享有折扣。
门票包含遗址和现场博物馆的参观。现场仅接受塞尔维亚第纳尔现金，建议提前备好零钱。`} />
              <InfoRow label="地址" value={`Felix Romuliana, 19210 Gamzigrad, Serbia`} />
              <InfoRow label="交通方式" value={`最近的国际机场是塞尔维亚首都贝尔格莱德的尼古拉·特斯拉机场。从贝尔格莱德出发：
自驾：沿E75/E761高速公路向东南方向行驶，经过尼什，转入通往扎耶查尔的道路，全程约230公里，需时3-3.5小时。路况良好，沿途有清晰指示牌指向“Gamzigrad”。
公共交通：从贝尔格莱德中央汽车站乘坐长途巴士前往扎耶查尔市，班次频繁，车程约3.5-4小时。抵达扎耶查尔后，换乘前往“Gamzigrad”或“Felix Romuliana”的当地巴士或出租车，车程约15-20分钟。出租车费用相对低廉，建议提前与司机谈好价格。
火车也可抵达扎耶查尔，但班次较少且耗时更长，不推荐。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事得从一个名叫“伽列里乌斯”的男孩讲起。大约公元250年，他出生在这片当时叫“达契亚”的偏远乡村。母亲罗慕拉是个虔诚的异教女祭司，据说父亲是个牧人。他的童年很可能与羊群和巴尔干的烈风为伴。谁也没想到，这个乡下小子会一路挤进罗马帝国的权力核心。凭借军功，他得到了戴克里先皇帝的赏识，不仅成了女婿，更在公元293年那场著名的“四帝共治”改革中，被任命为凯撒，统治东方大片领土。一个牧童，成了副皇帝。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "权力的巅峰，往往伴随着对根源的执念。大约在3世纪末4世纪初，功成名就、或许也开始思考身后事的伽列里乌斯，决定在自己的出生地大兴土木。他给这里起名为“费利克斯·罗穆利亚纳”，意为“罗慕拉的福地”，以纪念他那被尊为女祭司的母亲。这本身就是一个强烈的信号：他要将个人和家族的荣耀，永久镌刻在这片土地之上。于是，一个庞大的工程开始了。双重城墙被筑起，外墙用于军事防御，内墙则划定了神圣的宫殿区域。宫殿里布满马赛克地画（其中著名的“酒神狄俄尼索斯”马赛克至今可见）、大理石雕塑，而最奢华的，是从埃及远道运来的紫色斑岩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但费利克斯·罗穆利亚纳远不止是一座宫殿。它更是一个精心设计的“神圣化”舞台。在行宫东北方不远处的两座相连山丘上，伽列里乌斯建造了他和母亲的陵墓以及纪念建筑。根据罗马晚期的“封神”仪式，皇帝死后，遗体在陵墓（葬庙）火化，他的灵魂会被象征性地释放，由鹰（朱庇特的象征）携带升天。而在旁边的另一座建筑（神圣化庙）中，他将被正式尊奉为神。整个过程，从山下的宫殿到山上的神坛，构成了一条清晰的、从人到神的仪仗路径。他把自己一生的终点，与起点牢牢绑定，完成了从“伽列里乌斯”到“神”的循环。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史充满了讽刺。伽列里乌斯以残酷迫害基督徒而臭名昭著，而他死后不到几十年，君士坦丁大帝就颁布了《米兰敕令》，基督教开始逆袭。这座充满异教神祇形象（酒神、狩猎女神等）和皇帝崇拜的“圣域”，很快失去了意义。庞大的建筑逐渐被废弃、拆解，石材被附近的居民拉走盖房子、建教堂。它沉沉睡去，被泥土和植被覆盖，在漫长的中世纪里，只存在于零星传说中，被称为“鬼城”或“国王的城堡”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "直到1953年，一次系统的考古发掘才真正掀开了它的面纱。随着马赛克、铭文（尤其是那块刻有“FELIX ROMULIANA”的珍贵门楣）和斑岩遗迹的出土，这座失落宫殿的身份被确认。它的宏伟与独特震惊了学界。2007年，它被联合国教科文组织列入世界遗产名录，理由是它“独一无二地见证了罗马建筑传统与晚期古典时期思想潮流的融合”，以及那套完整的“神圣化”建筑群。如今，牧童皇帝的野心，终于以另一种形式——人类共同的文化遗产，获得了不朽。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`强烈建议安排至少3-4小时进行深度探索。最佳抵达时间是春季或秋季的工作日早晨（9点开门即入），或夏季下午四点半之后。这时光线金黄柔和，气温适宜，游客稀少，你能独享废墟的苍茫与寂静。游览节奏宜慢不宜快，分为两大阶段：第一阶段（约2小时）细致探索城墙内的宫殿遗址，沉浸于斑岩与马赛克的细节；第二阶段（约1小时）徒步登上遗址对面的马古拉山丘，拜访陵墓区，并从制高点俯瞰整个宫殿布局，这是理解此地“神圣化”设计精髓的关键。最后留半小时给现场的小型博物馆，将零散的碎片在脑海中拼合成完整的图像。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着牢固防滑的徒步鞋，遗址内地面不平，碎石多，且登上山丘的路是土坡。夏季请携带足量饮用水和遮阳帽，遗址内几乎没有遮阴处。尊重遗址，不要踩踏或试图带走任何马赛克碎片和石头，包括那些看起来“不起眼”的斑岩碎块。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从西门遗址购票进入，首先驻足在那块刻有“FELIX ROMULIANA”字样的巨大门楣石前，用手触摸冰凉的字母凹痕，开启这场时空之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着内城墙的步道缓行，让你的眼睛适应散落在各处的深紫色斑岩碎片，它们像帝国的血脉一样镶嵌在土黄色地基中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走入宫殿核心区，找到保存完好的“酒神狄俄尼索斯”马赛克地板，蹲下来仔细看那些色彩依旧鲜艳的镶嵌碎片，想象宴会上的歌舞升平。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过曾经的柱廊庭院，站在巨大的地基和墙根之间，感受建筑本身的超人体量，并寻找那些雕刻精美的科林斯柱头。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从东侧出口离开宫殿区，沿着田间小路向对面两座明显的山丘（马古拉山）步行约十分钟，开始攀登。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上第一座山丘的平坦山顶，这里矗立着陵墓（葬庙）的基座，环绕一圈，感受这里的绝对寂静与开阔，只有风声呼啸。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续走到紧邻的第二座山丘平台，这是举行神圣化仪式的庙宇遗址，在此回望脚下的宫殿全貌，那条从“人”到“神”的仪式路径瞬间清晰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山回到入口处，不要错过那个小而精的现场博物馆，里面陈列着从这里出土的最精美的斑岩雕塑头像、珠宝和器物，为你的想象补上最后的实物证据。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`西神庙平台仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午日落前一小时，站在宫殿区东侧，用长焦镜头拉近拍摄马古拉山上的两座陵墓建筑剪影，将它们叠加在金色晚霞与辽阔田野的背景中，营造史诗感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`宫殿迷宫俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或黄昏低角度光线时，登上内城墙的残存段落，向下拍摄宫殿错综复杂的地基和残墙，利用光影的强烈对比突出建筑的几何线条与岁月沧桑。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`斑岩特写微距`}</h4>
                  <p className="text-sm text-gray-700">{`寻找一块纹理和色彩最丰富的紫色斑岩碎片，在柔和的侧光下（上午或下午），用微距镜头贴近拍摄，捕捉石头内部水晶般的闪烁颗粒和历经风化的粗砺质感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`陵墓通道框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在马古拉山陵墓遗址的某个门廊或残墙框口内，将镜头对准山下完整的宫殿废墟，用前景的石框自然构成画框，拍出纵深与故事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`博物馆光影静物`}</h4>
                  <p className="text-sm text-gray-700">{`在博物馆室内，利用窗格射入的自然光线，拍摄那些斑岩皇帝或神祇头像的侧面，重点刻画石头面容上的沉默与裂纹，营造肖像感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`无人机飞行需特别谨慎，最好提前向管理方咨询，因为这里是受保护的考古区域。拍摄当地村民或他们的房屋时，请务必先微笑并用手势征得同意，他们通常很友善。雨季过后，遗址绿草如茵，与斑岩的紫色形成绝佳色彩对比，是出片的好时机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`乡村家庭旅馆`}</h4>
                  <p className="text-sm text-blue-800">{`住在加姆齐格勒镇或附近村庄的家庭式民宿，主人会端来自酿的拉基亚水果白兰地和 homemade ajvar 辣椒酱，晚上在院子里就能仰望毫无光污染的星空，寂静中偶尔传来几声狗吠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`葡萄园农庄酒店`}</h4>
                  <p className="text-sm text-green-800">{`选择遗址周边丘陵上的葡萄酒庄附属住宿，房间简单干净，推窗即是连绵的葡萄园，傍晚向酒庄主人买一瓶本地黑皮诺，在露台上对着废墟的方向小酌，风味最佳。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`山间宁静木屋`}</h4>
                  <p className="text-sm text-yellow-800">{`若追求极致静谧，可以预订距离遗址车程20分钟、隐于东塞尔维亚山林中的传统木屋，白天探索古迹，晚上归来在壁炉旁烤火，听林涛阵阵，彻底脱离现代喧嚣。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`扎耶查尔市中心设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`若不介意短程通勤，返回扎耶查尔市市中心，那里有由社会主义时期建筑改造的现代设计酒店，体验新旧文化的碰撞，且餐饮购物选择丰富得多。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "周边村庄住宿条件朴实，但热情无可比拟，且价格非常低廉，是体验真实塞尔维亚乡村生活的绝佳机会。治安非常好，民风淳朴，但夜间自驾请注意田间小路可能没有路灯。夏季和周末建议提前预订，尤其是葡萄园农庄这类热门选择。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开费利克斯·罗穆利亚纳时，我的背包里沉甸甸的，不是纪念品，而是那种被巨大时空感冲刷后的恍惚。这不是一座令人愉悦的“美丽”废墟，它不提供轻松的历史明信片。它提供的是一种近乎沉重的撞击——关于一个凡人凭借无上权力所能构建的、试图对抗时间与遗忘的终极工程。伽列里乌斯成功了，也失败了。他梦想的永恒神性早已随风而散，但他的恐惧、野心、对母亲的挚爱，以及对出生之地那复杂而强烈的情感，却因这些石头的存留，而变得异常真切、可触可感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在一切都追求快速消费、表面体验的今天，这里是一个需要你慢下来，用脚步丈量，用想象力重构的地方。它教会旅人的，或许不是某个具体的历史知识，而是一种更深层的领悟：最动人的遗迹，往往不是那些完美无瑕的，而是像费利克斯·罗穆利亚纳这样，破碎、固执、带着未完成的野心，却因此与周围的土地、生活彻底长在了一起。它提醒我们，所有帝国的尽头都是废墟，但人类试图定义自己、留下痕迹的冲动，以及生活本身那顽强的、在废墟边继续开花的韧性，才是永恒的主题。这就是为什么，每一个愿意聆听石头低语的深度旅人，都应该来此驻足。在这里，你遇见的不是一位冰冷的皇帝，而是一个关于记忆、死亡与归宿的，滚烫的人类故事。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/vrnjacka-banja-serbia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    弗
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">弗尔尼亚奇卡矿泉镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vrnjačka Banja</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sirmium-roman-archaeological-site-sremska-mitrovica" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    西
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">西尔米乌姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sirmium</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/sremski-karlovci-baroque-wine-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯雷姆斯基卡尔洛夫奇（巴洛克酒乡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Sremski Karlovci</p>
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
