import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '福什-杜科布朗 Foz do Cobrão｜深藏松林的葡萄牙“黑金”片岩村落，亚麻与淘金传奇的活态记忆 - 最佳欧洲景点',
  description: '让我告诉你一个秘密：葡萄牙最美的颜色，不是里斯本电车的那抹明黄，也不是波尔图酒液的深红，而是一种沉静的、近乎于黑的石板灰，它铺就在一个名叫福什-杜科布朗的村庄里。车子拐下主路，钻进一片茂密的松林与桉树林，空气瞬间变得清冽，带着松脂和湿润泥土的芬芳。就在你以为导航出错时，森林豁然开朗，一片深色的奇迹猛',
}

export default function FozDoCobrOSchistVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '葡萄牙', href: '/destinations/europe' },
            { label: '卡斯特卢布朗库区', href: '/destinations/europe' },
            { label: '福什-杜科布朗', href: '/attractions/foz-do-cobr-o-schist-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`福什-杜科布朗・Foz do Cobrão・葡萄牙・卡斯特卢布朗库区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`让我告诉你一个秘密：葡萄牙最美的颜色，不是里斯本电车的那抹明黄，也不是波尔图酒液的深红，而是一种沉静的、近乎于黑的石板灰，它铺就在一个名叫福什-杜科布朗的村庄里。车子拐下主路，钻进一片茂密的松林与桉树林，空气瞬间变得清冽，带着松脂和湿润泥土的芬芳。就在你以为导航出错时，森林豁然开朗，一片深色的奇迹猛然撞进视线——不是一栋两栋房子，而是一整个由石板堆砌出的世界，沿着陡峭的山坡层叠而下，最终消失在一片翡翠色梯田和远方波光粼粼的河湾处。那种震撼，是沉默而厚重的。
停好车，脚步踏上第一块被岁月打磨得光滑发亮的石板路，声音的世界也变了。城市的所有嘈杂被过滤干净，只剩下风吹过松林顶端的沙沙声，不知何处传来的潺潺溪流声，以及自己清晰的脚步声。村里的房子几乎没有直角，墙壁是深浅不一的灰黑色片岩自然拼合，屋顶是更厚重的石板，木窗框被刷成褪了色的蓝或绿。这里没有商店的霓虹，没有餐厅的喧哗，你偶尔遇到的，可能是一位老奶奶正把刚洗好的亚麻床单晾晒在门前的石栏上，那抹耀眼的纯白，在深色背景前，成了最生动的艺术。
这个村子最打动人的，是一种“活着”的古朴。它不像一些博物馆式的古镇，这里的一切都还在履行最初的使命。梯田里种着土豆和卷心菜，后院的鸡在踱步，烟囱里飘出燃烧木柴的熟悉气味。你会感觉到，你不是闯入了一个景点，而是轻轻推开了一扇时间的门，走进了几十年前，甚至更久以前，葡萄牙山区人们真实的生活图景里。那种与土地、石材、季节紧密相连的生存节奏，缓慢、坚实，带着一种让人心安的韵律。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让我告诉你一个秘密：葡萄牙最美的颜色，不是里斯本电车的那抹明黄，也不是波尔图酒液的深红，而是一种沉静的、近乎于黑的石板灰，它铺就在一个名叫福什-杜科布朗的村庄里。车子拐下主路，钻进一片茂密的松林与桉树林，空气瞬间变得清冽，带着松脂和湿润泥土的芬芳。就在你以为导航出错时，森林豁然开朗，一片深色的奇迹猛然撞进视线——不是一栋两栋房子，而是一整个由石板堆砌出的世界，沿着陡峭的山坡层叠而下，最终消失在一片翡翠色梯田和远方波光粼粼的河湾处。那种震撼，是沉默而厚重的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "停好车，脚步踏上第一块被岁月打磨得光滑发亮的石板路，声音的世界也变了。城市的所有嘈杂被过滤干净，只剩下风吹过松林顶端的沙沙声，不知何处传来的潺潺溪流声，以及自己清晰的脚步声。村里的房子几乎没有直角，墙壁是深浅不一的灰黑色片岩自然拼合，屋顶是更厚重的石板，木窗框被刷成褪了色的蓝或绿。这里没有商店的霓虹，没有餐厅的喧哗，你偶尔遇到的，可能是一位老奶奶正把刚洗好的亚麻床单晾晒在门前的石栏上，那抹耀眼的纯白，在深色背景前，成了最生动的艺术。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个村子最打动人的，是一种“活着”的古朴。它不像一些博物馆式的古镇，这里的一切都还在履行最初的使命。梯田里种着土豆和卷心菜，后院的鸡在踱步，烟囱里飘出燃烧木柴的熟悉气味。你会感觉到，你不是闯入了一个景点，而是轻轻推开了一扇时间的门，走进了几十年前，甚至更久以前，葡萄牙山区人们真实的生活图景里。那种与土地、石材、季节紧密相连的生存节奏，缓慢、坚实，带着一种让人心安的韵律。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`福什-杜科布朗`} />
                <InfoRow label="英文名称" value={`Foz do Cobrão`} />
                <InfoRow label="正式名称" value={`Foz do Cobrão`} />
                <InfoRow label="国家" value={`葡萄牙`} />
                <InfoRow label="城市" value={`卡斯特卢布朗库区`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一个将人类生存智慧刻进石板与梯田的活化石村落，见证了葡萄牙内陆从黄金淘洗到亚麻纺织的产业变迁与坚韧不拔的山地社群文化。`} />
                <InfoRow label="建筑特色" value={`完全采用当地深色片岩（Xisto）干砌而成的房屋、围墙与小巷，与周围梯田、山林和奥克雷扎河（Rio Ocreza）的河湾地形完美嵌合，仿佛是从大地中生长出来。`} />
                <InfoRow label="建筑风格" value={`葡萄牙中部典型的片岩村落建筑风格，功能至上，形式古朴，体现了与严酷自然环境共生的极简实用主义。`} />
                <InfoRow label="文化价值" value={`是葡萄牙“片岩村落网络”中保存最完好的瑰宝之一，不仅保留了物理空间，更延续了濒临消失的传统手工艺（亚麻处理与编织）和与土地紧密相连的社群生活方式。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村庄公共区域全天开放，自由漫步。部分历史工坊、小型社区博物馆或手工艺人工作室的开放时间较为灵活，通常为上午10点至下午1点，下午3点至6点，建议在村口信息板查看当日活动告示或提前向当地民宿主人咨询。周末和夏季（6月至9月）开放可能性更高。`} />
              <InfoRow label="门票价格" value={`进入村庄及漫步公共区域完全免费。若参加由当地社区组织的导览步行（强烈推荐）、亚麻编织工作坊或传统午餐体验，费用约为每人5-15欧元，现场向组织者支付即可。`} />
              <InfoRow label="地址" value={`Foz do Cobrão, 6100-000 Vila Velha de Ródão, Portugal`} />
              <InfoRow label="交通方式" value={`最推荐的方式是自驾。从里斯本出发，沿A23高速公路向东北方向行驶，在“Vila Velha de Ródão”出口下，转入N18公路，再根据棕色旅游标志“Aldeias do Xisto”（片岩村落）指引，沿蜿蜒但路况良好的山林小路行驶约15分钟即可抵达。全程约2.5小时。公共交通极为不便：可先从里斯本乘火车至阿布兰特什（Abrantes）或卡斯特卢布朗库（Castelo Branco），再转乘班次稀少的地区巴士到维拉韦利亚德罗当（Vila Velha de Ródão），最后可能需要电话预约当地极少的出租车才能进村。强烈不建议依赖公交进行深度游览。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "“福什-杜科布朗”这个名字本身就藏着它的第一段传奇。“Foz”意为河口，“Cobrão”则与“铜”或更广泛意义上的“金属”有关。传说在很久以前，奥克雷扎河的这一段河湾里，闪烁着诱人的金光。是的，这里曾经是一个淘金地。你可以想象，在中世纪甚至更早的时期，人们是如何被这片河流中的财富吸引而来，在河边搭建起简易的住所，用最原始的工具筛洗泥沙，寻找那微小的、却能改变命运的金色颗粒。那些最早的石板房，或许就是为这些淘金者遮风挡雨的产物。黄金带来了第一波聚居，也赋予了这片土地最初的名字与期望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，黄金总有淘尽的一天。当河床里的金光渐渐黯淡，生活在这里的人们必须寻找新的生存之道。于是，故事的第二篇章缓缓展开，主角变成了亚麻。葡萄牙中部的山区气候和土壤，非常适合亚麻生长。村民们从种植蓝色的亚麻花开始，经历收割、浸泡、捶打、梳理等一系列繁复到令人惊叹的工序，最终将植物纤维变成坚韧的亚麻线。在十九世纪到二十世纪中期，福什-杜科布朗成为了一个重要的亚麻纺织中心。几乎家家户户都有织布机，妇女们灵巧的双手能织出精美的桌布、床单和衣物。当时光走到今天，你依然能在村里一些老房子的门楣上，看到当年悬挂亚麻线团的木钩，空气中仿佛还残留着植物纤维的清新气味。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪中后期的城市化浪潮，几乎给了这个深山村落致命一击。就像无数欧洲的偏远乡村一样，年轻人纷纷奔向里斯本、波尔图甚至更远的法国、德国去寻找现代生活的机会。村子迅速衰老、沉寂，许多石板屋开始坍塌，梯田被荒草淹没，织布机的声音彻底停止了。福什-杜科布朗一度走到了被地图彻底遗忘的边缘。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转机出现在世纪之交。一项名为“片岩村落”的振兴计划开始推行，目标就是拯救葡萄牙中部这些散落在山林中、独具特色的石板村落。福什-杜科布朗因其惊人的完整性和独特的历史（淘金与亚麻），被选为重点。资金注入用于谨慎地修复老屋、完善基础设施，但最关键的是，它为那些对故土仍有眷恋、或渴望另一种生活的人们提供了可能。一些外出的村民回来了，一些热爱宁静的艺术家和手工艺人也被吸引而来。他们不仅修复了房子，更尝试复活那些古老的技艺。今天，你能在村里看到的小型亚麻博物馆，或者偶尔举办的工作坊，就是这场温柔复兴的果实。它不再是关于淘金或纺织产业的繁荣，而是关于选择、关于记忆、关于一种可持续的、与自然和谐共处的生活方式的自觉传承。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`理想的方式是安排一整天的时间，从容地感受村庄从晨光到日落的韵律。建议早上8点前抵达，这时游客还未至，村庄正从晨雾和鸡鸣中苏醒，光线柔和，是拍照和享受宁静的黄金时段。整体游览节奏宜慢不宜快，核心是步行探索错综复杂的小巷与梯田系统，并留出时间与可能遇到的村民简单交谈。下午可以安排参加一项手工艺体验或在河边安静地读会儿书。这样安排能让你真正体会到这里的时间尺度，而非匆匆一瞥。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`村里几乎没有商业设施，务必自带足量饮水和小零食，午餐可以提前联系当地民宿预定传统的“山地炖菜”。
穿一双绝对防滑、适合徒步的鞋子，因为石板路和通往河边的步道在潮湿时非常滑，且有很多台阶。
尊重当地居民的隐私，拍照时尽量避免直接对准住户的窗户或院内，一个微笑和一句“下午好”（Boa tarde）是打开友善之门的钥匙。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在村口高处的免费停车场，先别急着进村，站在观景台深吸一口松林空气，俯瞰整个村庄像一幅深色调的拼贴画铺展在翠绿山谷中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着主石板路向下，任由自己迷失在蛛网般交错的小巷里，伸手触摸那些冰凉而粗糙的片岩墙壁，感受每块石头独特的纹理与温度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到并走进那间由老屋改造的“亚麻与记忆”小空间，看看那些老照片和古老的纺织工具，如果幸运遇到负责人，听听他讲述祖辈们“从蓝色花朵到白色床单”的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰标识的步道向奥克雷扎河方向下行，穿过层层拾级而下的梯田，直到听见哗哗水声，在河岸边的巨大岩石上坐一会儿，看河水如何切割出这片栖息地。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从河边另一条小径绕回村庄，挑战自己找到村里那口古老的公共洗衣池，想象当年妇女们在此边劳作边交换新闻的场景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访村庄最高点的那座简朴的小教堂，内部出乎意料地明亮，留意祭坛上可能摆放的、用亚麻布料制作的手工装饰。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果看到有敞开门的工作坊或写着“体验”字样的小牌，不妨鼓起勇气询问，很可能有机会亲眼看到或尝试一下传统的纺线或编织。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在傍晚时分回到停车场附近的观景台，看夕阳如何给每一片石板屋顶和远处的河面镀上温暖的金边，完成一天的视觉循环。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村庄上方松林边缘的官方观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，利用长焦镜头压缩景深，将层层叠叠的黑色石板屋顶、绿色梯田和远方蜿蜒的奥克雷扎河一同纳入画面，营造深邃的层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`梯田迷宫的中心低洼处`}</h4>
                  <p className="text-sm text-gray-700">{`清晨阳光刚刚照亮村庄上半部时，蹲下来以成熟的庄稼或野草作为前景，仰拍被石板屋环绕的天空，捕捉光线与阴影在几何形体上的戏剧性对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`某条狭窄小巷的转角`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分当阳光直射入巷弄，寻找那些被藤蔓植物点缀的墙面，拍摄光影在凹凸不平的片岩表面上形成的抽象图案，聚焦于纹理和细节。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`奥克雷扎河湾的对岸`}</h4>
                  <p className="text-sm text-gray-700">{`下午时段，步行过河（注意安全）或使用无人机（如允许），从水面角度拍摄村庄全貌与其在水中的倒影，展现村落与自然环境的完美融合。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`亚麻工作坊的窗户边`}</h4>
                  <p className="text-sm text-gray-700">{`如果有机会进入，利用从老式木窗透入的侧光，拍摄纺锤、亚麻纤维或老织布机的局部特写，营造静物画般的历史感与故事性。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`这里的魅力在于整体氛围和细节纹理，多尝试不同的视角和焦点，不要只拍摄标准“明信片”视角。`}</li>
                <li>• {`若使用无人机，务必先行确认当地规定，并绝对避免在居民区上空低飞，以免打扰村民生活的宁静。`}</li>
                <li>• {`多利用天气变化，雨后的石板路反光、清晨的薄雾都能为你的照片增添独一无二的情绪和质感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`入住由百年片岩老屋精心修复的“村舍民宿”，睡在厚重的石墙之内，夜晚寂静无声，只有壁炉里柴火的噼啪声，清晨被梯田里的鸟鸣唤醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`生态体验`}</h4>
                  <p className="text-sm text-green-800">{`选择村庄外围一栋独立石屋，配备太阳能和现代生态设施，拥有私人的小菜园和面向山谷的露台，完全沉浸于自给自足的山居幻想中。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`艺术家之家`}</h4>
                  <p className="text-sm text-yellow-800">{`预订村里一位陶艺家或画家经营的客房，不仅住处充满个性装饰，还有机会参观主人的工作室，甚至参与一次晚间的手工创作分享会。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`周边便捷`}</h4>
                  <p className="text-sm text-purple-800">{`若追求更多服务设施，可以住在车程约20分钟的维拉韦利亚德罗当小镇，那里有更标准的旅馆和餐厅，方便作为探索周边多个片岩村落的基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "村内民宿数量极少且非常抢手，尤其在夏季和周末，务必提前数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "入住村庄内部意味着彻底融入其节奏，晚上没有任何夜生活，商店也很早关门，请享受这份珍贵的“与世隔绝”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "山区夜晚即使夏季也可能凉爽，民宿即使有供暖也可能依赖壁炉，询问清楚并准备适当的衣物。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开福什-杜科布朗许久后，我的指尖似乎还能回忆起那片岩墙壁的粗糙触感，鼻腔里萦绕着松脂与湿润泥土混合的独特气味。这个地方教会我的，不是关于宏伟的历史叙事，而是一种“深度的在场”。它让我看到，美并非总是耀眼的、喧哗的，它可以是一种沉静的力量，是数百年来人们用双手将取自山林的石块，一块一块垒成家园的耐心；是将土地开垦成绿毯般梯田的坚韧；是将一株植物转化为一匹布料的智慧。这种美，需要你慢下来，用脚步丈量，用呼吸感受，才能与之共鸣。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在当今这个追求效率、崇尚“网红打卡”的快节奏世界里，福什-杜科布朗的存在，像是一首固执的、轻声吟唱的反叙事诗。它不提供刺激的娱乐，不售卖廉价的纪念品，它只是静静地在那里，保持着自己古老的面貌和心跳。每一位愿意专程跋涉而来的旅人，我想都是在内心深处渴望找回某种连接——与自然材料的连接，与缓慢时间的连接，与一种更本质、更踏实的人类生存状态的连接。来这里，不是检查一个清单项目，而是进行一次温柔的复位。你会带走满心的宁静，和一份确信：世界上还有一些角落，时光保留了它最醇厚的质地，而人类，依然可以如此诗意地栖居在大地之上。这，或许就是深度旅行所能给予我们的，最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/arouca-516-suspension-bridge" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿罗卡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Arouca</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/linhares-da-beira-castle-paragliding" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    利
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">利尼亚雷斯-达贝拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Linhares da Beira</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/alcobaca-monastery" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿尔科巴萨修道院</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Alcobaça Monastery</p>
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
