import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '迪尔比 Durbuy｜探访“世界最小城市”，走进童话般的比利时阿登山区石头小镇 - 最佳欧洲景点',
  description: '你听说过“世界最小城市”吗？在来迪尔比之前，我对这个称号充满好奇，甚至有点怀疑——一个城市，能小到什么程度？可当我真的把车停在乌尔特河对岸，步行过桥，穿过那道低矮的古城门时，所有的疑问瞬间被一种奇妙的亲切感取代了。它不像一座“城”，更像一个被时间精心收藏起来的、放大版的玩具模型。第一眼望去，目光所及...',
}

export default function DurbuyTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '迪尔比', href: '/attractions/durbuy-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`迪尔比・Durbuy・比利时・迪尔比`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你听说过“世界最小城市”吗？在来迪尔比之前，我对这个称号充满好奇，甚至有点怀疑——一个城市，能小到什么程度？可当我真的把车停在乌尔特河对岸，步行过桥，穿过那道低矮的古城门时，所有的疑问瞬间被一种奇妙的亲切感取代了。它不像一座“城”，更像一个被时间精心收藏起来的、放大版的玩具模型。第一眼望去，目光所及几乎就是它的全部：一片密密麻麻的蓝灰色石头屋顶，像一群依偎在一起取暖的甲壳动物，静静地匍匐在墨绿色山丘的怀抱里。空气是清冽的，带着阿登山区森林特有的、混合着苔藓和湿木头的气息。
走在中心广场“集市广场”凹凸不平的鹅卵石路面上，鞋底与石头的摩擦声清脆而空旷。这里没有城市的喧嚣，只有咖啡馆外坐着慢悠悠喝啤酒的老人，和面包店门口飘出的、暖烘烘的黄油焦糖香气。你很快就会发现，所谓的“城市”生活，在这里被浓缩成最日常、最温情的画面：肉铺的老板在橱窗里挂起一排深红色的火腿，花店老板娘正在门口给一盆盆天竺葵浇水，水珠在阳光下闪闪发亮。本地人骑着自行车叮铃铃地从你身边掠过，消失在一条宽度只容一人通过的窄巷里。这里的尺度是以“步”和“米”来计算的，五分钟就能从“城东”走到“城西”，但这种微小，丝毫没有带来局促，反而生出一种无比踏实的安全感。
迪尔比最打动人心的，正是这种极致的“浓缩”与“完整”。它麻雀虽小，五脏俱全：市政厅、教堂、城堡、广场、商铺、民居、河流、桥梁……一个社区该有的一切，它都以一种童话般的比例完美呈现。你不是在参观一个冰冷的景点，而是瞬间跌入了一个仍在平稳呼吸的中世纪梦境。阳光穿过狭窄的巷弄，在古老的石墙上切出锐利的光影，时间在这里仿佛被调成了0.5倍速。你会不自觉地放轻脚步，压低声音，生怕惊扰了这片石头丛林中沉睡的古老灵魂。这里没有宏大的叙事，只有细水长流的生活本身，在每一块被岁月打磨得光滑的台阶上，在每一扇挂着蕾丝窗帘的窗棂后，静静流淌。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你听说过“世界最小城市”吗？在来迪尔比之前，我对这个称号充满好奇，甚至有点怀疑——一个城市，能小到什么程度？可当我真的把车停在乌尔特河对岸，步行过桥，穿过那道低矮的古城门时，所有的疑问瞬间被一种奇妙的亲切感取代了。它不像一座“城”，更像一个被时间精心收藏起来的、放大版的玩具模型。第一眼望去，目光所及几乎就是它的全部：一片密密麻麻的蓝灰色石头屋顶，像一群依偎在一起取暖的甲壳动物，静静地匍匐在墨绿色山丘的怀抱里。空气是清冽的，带着阿登山区森林特有的、混合着苔藓和湿木头的气息。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走在中心广场“集市广场”凹凸不平的鹅卵石路面上，鞋底与石头的摩擦声清脆而空旷。这里没有城市的喧嚣，只有咖啡馆外坐着慢悠悠喝啤酒的老人，和面包店门口飘出的、暖烘烘的黄油焦糖香气。你很快就会发现，所谓的“城市”生活，在这里被浓缩成最日常、最温情的画面：肉铺的老板在橱窗里挂起一排深红色的火腿，花店老板娘正在门口给一盆盆天竺葵浇水，水珠在阳光下闪闪发亮。本地人骑着自行车叮铃铃地从你身边掠过，消失在一条宽度只容一人通过的窄巷里。这里的尺度是以“步”和“米”来计算的，五分钟就能从“城东”走到“城西”，但这种微小，丝毫没有带来局促，反而生出一种无比踏实的安全感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`迪尔比最打动人心的，正是这种极致的“浓缩”与“完整”。它麻雀虽小，五脏俱全：市政厅、教堂、城堡、广场、商铺、民居、河流、桥梁……一个社区该有的一切，它都以一种童话般的比例完美呈现。你不是在参观一个冰冷的景点，而是瞬间跌入了一个仍在平稳呼吸的中世纪梦境。阳光穿过狭窄的巷弄，在古老的石墙上切出锐利的光影，时间在这里仿佛被调成了0.5倍速。你会不自觉地放轻脚步，压低声音，生怕惊扰了这片石头丛林中沉睡的古老灵魂。这里没有宏大的叙事，只有细水长流的生活本身，在每一块被岁月打磨得光滑的台阶上，在每一扇挂着蕾丝窗帘的窗棂后，静静流淌。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`迪尔比`} />
                <InfoRow label="英文名称" value={`Durbuy`} />
                <InfoRow label="正式名称" value={`Durbuy`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`迪尔比`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在1329年被正式授予“城市”宪章的袖珍聚落，并因面积微小而享有“世界最小城市”的独特称号。`} />
                <InfoRow label="建筑特色" value={`几乎完全由当地开采的蓝灰色板岩和石灰岩建造，屋顶是典型的阿登山区石板瓦，房屋依偎在乌尔特河湾的陡峭岩壁下，紧凑而和谐。`} />
                <InfoRow label="建筑风格" value={`以中世纪晚期和文艺复兴时期的瓦隆民居风格为主，融合了本地乡土建筑的坚固与朴素。`} />
                <InfoRow label="文化价值" value={`是欧洲中世纪城市格局保存完好的活化石，展现了人类在狭小地理空间内创造宜居社区的智慧，以及瓦隆地区深厚的乡土文化韧性。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城本身为开放式区域，全天24小时可自由漫步。城内各独立景点（如迪尔比城堡、探险公园等）开放时间各异：城堡花园通常在夏季（4月至10月）的上午10点至下午6点开放，冬季可能关闭或缩短时间；游客信息中心一般为工作日上午9点至下午5点，周末时间可能缩短。建议出行前在官网核实具体日期和时间，公共假期可能会有调整。`} />
              <InfoRow label="门票价格" value={`进入迪尔比古城区域完全免费。城内收费景点票价单独计算：迪尔比城堡花园门票约为7欧元；附近的“迪尔比顶级冒险”公园根据活动项目（如树顶探险、巨石公园）有不同的套票，成人单日通票约30欧元。建议根据兴趣选择性购买。`} />
              <InfoRow label="地址" value={`Place aux Foires 25, 6940 Durbuy, Belgium`} />
              <InfoRow label="交通方式" value={`从最近的布鲁塞尔南沙勒罗瓦机场（CRL）出发：最便捷的方式是租车自驾，沿E411高速公路向东南方向行驶，在20号出口下高速后沿N63公路前往迪尔比，全程约120公里，耗时1小时30分钟左右。公共交通较为周折：先从机场乘巴士到沙勒罗瓦南站，再乘火车前往巴永站，最后转乘TEC 6路或294路巴士抵达迪尔比，总耗时可能超过3小时，班次有限，务必提前查询时刻表。从卢森堡或列日等城市自驾前来更为方便，古城外围有大型付费停车场（P1, P2）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`迪尔比的故事，始于乌尔特河边一块突起的巨大岩石。早在罗马时代，这里可能就有一个小规模的定居点，因为它扼守着通往阿登森林深处的要道。但真正让它在历史上留下名字的，是1331年——哦，更准确地说，是1329年。那一年，卢森堡伯爵约翰·瞎子（John the Blind）——一位在欧洲历史上以勇武著称，最终在克雷西战役中阵亡的传奇骑士——将一份珍贵的礼物赐予了这片他领地上的岩石小镇：一份城市宪章。于是，这个只有几条街道、几百居民的地方，在法律意义上，成为了一个“城市”。这个举动在当时看来或许有些奇特，但结合约翰伯爵的政治野心就不难理解：在封建时代，授予城市地位是领主巩固边境、强化控制、刺激商业的有效手段。迪尔比，就这样凭借其易守难攻的地理位置，获得了与其体量不相称的“名分”。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`中世纪和文艺复兴时期，迪尔比作为一个小型的区域中心缓慢发展。它的财富主要来自板岩开采、铁匠铺和有限的河运贸易。石头，是这里永恒的主题。当地人从附近的山上开采蓝灰色的板岩，建造了足以抵御严冬和时间的房屋。你能看到的那些厚重墙壁、陡峭的石板屋顶、带有拱廊的底层商铺，大多建于16到18世纪。它们挤挤挨挨地建在一起，与其说是城市规划，不如说是一场自然的生长，是居民们为了在有限的平地和陡坡之间争取最大生活空间而达成的默契。没有恢弘的设计，只有实用的智慧。城堡最初是防御工事，后来演变为当地领主的府邸，默默俯瞰着脚下这片小小的、自给自足的石头世界。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的洪流并非总是绕过这座小城。它经历了西班牙统治、法国大革命的风暴、两次世界大战的硝烟。尤其是在二战后期的突出部战役（阿登反击战）中，迪尔比所在的区域是激烈的战场之一。幸运的是，这座石头小城奇迹般地没有遭受毁灭性的破坏，其完整的中世纪肌理得以保存。战后，随着传统产业的衰落，迪尔比一度陷入沉寂，仿佛一个被遗忘在时光角落里的老者。它的“世界最小城市”称号，在很长一段时间里，更像是一个略带自嘲的趣谈，而非旅游卖点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在20世纪后半叶。当人们开始厌倦大都市的喧嚣，渴望寻找 authenticity（本真性）时，迪尔比独一无二的特质被重新发现。它不是重建的“仿古”小镇，而是一个活生生的、保存完好的历史社区。当地政府和居民敏锐地抓住了这个机会，但他们没有进行粗暴的商业化改造，而是以极高的审美和克制进行修复与活化。老房子被改造成精致的精品酒店、美食餐厅和手工艺作坊，但外观依然保持着原貌。古老的城堡花园被精心打理，成为俯瞰全城的绝佳观景台。它没有试图变大，而是精心守护着自己的“小”，并将这种“小”打造成无可替代的魅力核心。从一個沉寂的山区小镇，到如今比利时瓦隆区最受欢迎的旅游目的地之一，迪尔比的复兴，是一个关于尊重历史、拥抱自身独特性并获得成功的经典案例。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味迪尔比的精髓，“慢”是唯一的秘诀。建议你在上午十点前抵达，这时旅游团的大巴还未涌入，小城刚从晨光中苏醒，是最好的漫步时光。整个深度游览可以轻松地用一整天来完成。上午专注于探索迷宫般的古城内部，感受它的建筑细节和宁静氛围；中午在广场找家餐厅享用漫长的瓦隆午餐；下午可以登上城堡花园俯瞰全景，或在乌尔特河边散步，甚至可以尝试一下皮划艇，从水上看小城。傍晚时分，当一日游的游客散去，夕阳给石头染上金红色，才是小城重现本地生活气息、最动人的时刻。这样的节奏能让你从“观光客”模式切换成“体验者”模式，真正住进这个童话故事里。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周末和夏季午后是人流高峰，窄巷里会摩肩接踵，尽量将核心游览安排在上午或傍晚。古城内的街道全是鹅卵石，务必穿一双绝对舒适防滑的鞋子，高跟鞋在这里是“灾难”。自驾前来一定要把车停在城外指定的停车场（P1或P2），古城内严禁外来车辆驶入，且道路极其狭窄。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主入口“Porte de la Chavée”古城门进入，立刻让自己迷失在由光滑鹅卵石铺成、两侧石墙高耸的狭窄巷弄里，用手触摸那冰凉而粗糙的千年石壁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`毫无意外地走到中心的集市广场，在“Le Sanglier des Ardennes”野猪雕像下驻足，观察四周颜色柔和的文艺复兴风格山形墙房屋和它们精致的窗棂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着广场一侧的陡峭小径“Rue du Comte Théodule d'Ursel”向上攀登，抵达迪尔比城堡的观景平台，回望脚下如积木般堆叠的整个古城和如玉带般蜿蜒的乌尔特河。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡下来后，专门寻找那些宽度不足一米的“猫巷”，比如“Ruelle des Amoureux”（情人巷），侧身穿过，体验极致空间带来的奇妙感受。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访广场旁的圣尼古拉斯教堂，进去感受一下内部相对简朴但宁静的氛围，留意那些中世纪留下的石刻细节。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家有百年历史的糖果店“Les Durbuysiennes”，买一袋用传统方法制作的“Durbuy”字样石形糖果，尝尝甜蜜的当地味道。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步到乌尔特河边，走过石桥到对岸，从那个经典的明信片角度，拍摄迪尔比古城背倚青山、面朝绿水的全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果时间充裕，可以前往城外的“迪尔比顶级冒险”公园内的巨石花园，在由天然板岩构成的超现实岩石迷宫中穿行，从另一个维度感受此地地理的奇特。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前一个小时，站在城堡花园的矮墙边，用广角镜头框下古城全景、乌尔特河湾及远处山峦，此时光线柔和，色彩层次最丰富。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`情人巷光影捕捉`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分阳光直射时，走进Ruelle des Amoureux这类极窄的小巷，拍摄阳光在两侧高耸石墙上切割出的强烈明暗对比与几何线条，人物作为剪影点缀其中会很有故事感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`乌尔特河对岸倒影`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗无风的清晨，从古城对岸的河边小径，拍摄古城建筑群在水中的完美倒影，对称构图能突出宁静如画的氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`集市广场生活场景`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，坐在广场咖啡馆的露天座，用长焦镜头捕捉广场上生动的局部——如咖啡馆招牌、窗台上的鲜花、当地人的交谈神态，避开杂乱人群，聚焦细节。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`石板屋顶鸟瞰`}</h4>
                  <p className="text-sm text-gray-700">{`如果你入住古城内较高的酒店，尝试从房间窗口拍摄层层叠叠、错落有致的蓝灰色石板屋顶，这是常人难以看到的迪尔比肌理。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，避免将镜头直接对准民居窗户内或私人庭院。利用早晚的“黄金时刻”和“蓝色时刻”，迪尔比的石头色彩会呈现出戏剧性的变化。多尝试不同的视角，俯拍窄巷，仰拍山墙，细节的特写（如门环、招牌）往往比全景更能传递古镇的韵味。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验首选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由17世纪石屋改造的精品酒店“L‘Esplanade”，房间保留着原始的木梁和石墙，现代舒适的设施一应俱全，最关键的是，它的露台餐厅拥有俯瞰古城屋顶的无敌视野。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`中世纪穿越之梦`}</h4>
                  <p className="text-sm text-green-800">{`选择“Hotel des Roches”或类似的家庭式老旅馆，房间可能不大，但充满旧世界的 charm，木头楼梯吱呀作响，早餐在有着厚重石壁的底楼用餐，氛围感拉满。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端静谧享受`}</h4>
                  <p className="text-sm text-yellow-800">{`住在位于河对岸山坡上的“Ferme de la Forge”，这家由古老农庄修复而成的四星级酒店，远离游客中心，被森林和草地环绕，在露台上享用早餐时，迪尔比古城就像一幅铺在眼前的画。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`露营与自然结合`}</h4>
                  <p className="text-sm text-purple-800">{`对于喜欢户外的人，城外的“Durbuy Camping”营地是个好选择，住在帐篷或小木屋里，白天探索古镇，晚上在星空下伴着流水声入眠，性价比极高。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`旺季（7-8月及圣诞市场期间）住宿非常紧俏，务必提前数月预订。古城内的酒店通常不设电梯，且停车需停在外围停车场，对行李多或行动不便者略有挑战。如果想获得最安静的体验，河对岸或城外的住宿是更明智的选择，步行进城也只需5-10分钟。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开迪尔比的时候，我心里那种充盈的满足感，并非来自看到了多么震撼的奇观，而是源于一种久违的“完整感”。在这个一切都追求更大、更快、更炫目的世界里，迪尔比固执地、优雅地守着自己的“小”。它像一个生活的隐喻，告诉我们：重要的不是疆域的辽阔，而是内容的密度与情感的深度。在这里，你能在一天之内，“认识”整座城市每一条街道的脾气，记住面包店和肉铺的位置，跟咖啡馆老板聊上几句。这种可被感知、可被掌握的尺度，在当代社会是多么奢侈的体验。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它不仅仅是一个旅游目的地，更是一个关于如何与历史相处、与自身和解的温柔示范。没有大拆大建，没有迎合潮流的扭曲，只是静静地梳洗打扮，将最真实的自己呈现给世界。每一位热爱深度游的旅人都该来迪尔比看看，不是为了打卡“世界最小”的纪录，而是来体验一种不同的时间维度，一种更人性化、更贴近大地的生活可能。在这里，你会明白，有时候，“小”本身就是一种强大的力量，一种足以安放灵魂、治愈焦虑的永恒之美。带着这份被石头小镇抚慰过的宁静，再回到广阔而喧嚣的世界里去，你的步伐或许会变得更加从容。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
