import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '赫乌斯登 Heusden｜探访水上多角星，荷兰保存最完好的中世纪防御小镇 - 最佳欧洲景点',
  description: '车子缓缓驶近，当那片由水道勾勒出的、无比规整的多角星突然完整地铺陈在车窗外时，我还是忍不住轻声“哇”了出来。那不是想象中的古朴杂乱，而像是一件精心摆在绿色天鹅绒上的几何珠宝，精准，冷静，又带着童话般的奇异感。停好车，走过小桥正式进入“星形”的内部，空气立刻变了。护城河的水汽混合着老砖墙在阳光下蒸腾出',
}

export default function HeusdenFortifiedTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '荷兰', href: '/destinations/netherlands' },
            { label: '赫乌斯登', href: '/attractions/heusden-fortified-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`赫乌斯登・Heusden・荷兰・赫乌斯登`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子缓缓驶近，当那片由水道勾勒出的、无比规整的多角星突然完整地铺陈在车窗外时，我还是忍不住轻声“哇”了出来。那不是想象中的古朴杂乱，而像是一件精心摆在绿色天鹅绒上的几何珠宝，精准，冷静，又带着童话般的奇异感。停好车，走过小桥正式进入“星形”的内部，空气立刻变了。护城河的水汽混合着老砖墙在阳光下蒸腾出的淡淡土腥味，扑面而来的是数百年的潮湿与坚固。耳边是荷兰特有的、无处不在的风声，穿过运河边的芦苇，摇晃着系泊小船的缆绳，发出好听的啪啪轻响。
你很快会发现，这里不像某些博物馆式的古镇。它活着。本地居民就住在那些有着巨大窗户的砖房子里，窗台上怒放着天竺葵。有人在自家门口的运河里慢悠悠地清洗着小船；骑自行车的老爷爷叮铃铃地从你身边掠过，拐进一条小巷就不见了。堡垒的斜坡草坪上，躺着晒太阳、读小说的年轻人。这里的节奏，是被运河的水流速度定义的——缓慢，从容，循环往复。你可以花一整个下午，什么“景点”也不进，就沿着内环的运河散步，看鸭子排队游过桥洞，看云朵在平静如镜的水面上复制另一个颠倒的世界。
而它最打动人心的，恰恰是这种举重若轻的平衡。一边是冷峻、严谨、为战争而生的军事建筑，每一个角度都是为了火炮的射界计算；另一边，是温暖、琐碎、充满生活气息的日常图景。这种对比构成了赫乌斯登独一无二的魅力。你会触摸到那些为了抵御法国或西班牙军队而建造的厚重砖墙，下一秒，就看到墙根下开着一丛明艳的野花。历史在这里不是压在肩上的重担，而是被细心编织进了生活的地毯里，踩上去，是坚实而温柔的触感。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子缓缓驶近，当那片由水道勾勒出的、无比规整的多角星突然完整地铺陈在车窗外时，我还是忍不住轻声“哇”了出来。那不是想象中的古朴杂乱，而像是一件精心摆在绿色天鹅绒上的几何珠宝，精准，冷静，又带着童话般的奇异感。停好车，走过小桥正式进入“星形”的内部，空气立刻变了。护城河的水汽混合着老砖墙在阳光下蒸腾出的淡淡土腥味，扑面而来的是数百年的潮湿与坚固。耳边是荷兰特有的、无处不在的风声，穿过运河边的芦苇，摇晃着系泊小船的缆绳，发出好听的啪啪轻响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你很快会发现，这里不像某些博物馆式的古镇。它活着。本地居民就住在那些有着巨大窗户的砖房子里，窗台上怒放着天竺葵。有人在自家门口的运河里慢悠悠地清洗着小船；骑自行车的老爷爷叮铃铃地从你身边掠过，拐进一条小巷就不见了。堡垒的斜坡草坪上，躺着晒太阳、读小说的年轻人。这里的节奏，是被运河的水流速度定义的——缓慢，从容，循环往复。你可以花一整个下午，什么“景点”也不进，就沿着内环的运河散步，看鸭子排队游过桥洞，看云朵在平静如镜的水面上复制另一个颠倒的世界。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而它最打动人心的，恰恰是这种举重若轻的平衡。一边是冷峻、严谨、为战争而生的军事建筑，每一个角度都是为了火炮的射界计算；另一边，是温暖、琐碎、充满生活气息的日常图景。这种对比构成了赫乌斯登独一无二的魅力。你会触摸到那些为了抵御法国或西班牙军队而建造的厚重砖墙，下一秒，就看到墙根下开着一丛明艳的野花。历史在这里不是压在肩上的重担，而是被细心编织进了生活的地毯里，踩上去，是坚实而温柔的触感。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`赫乌斯登`} />
                <InfoRow label="英文名称" value={`Heusden`} />
                <InfoRow label="正式名称" value={`Heusden`} />
                <InfoRow label="国家" value={`荷兰`} />
                <InfoRow label="城市" value={`赫乌斯登`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是荷兰“新荷兰水防线”上至关重要的战略要塞，也是欧洲近代防御工事史上“旧荷兰体系”的经典范本。`} />
                <InfoRow label="建筑特色" value={`一座被护城河完美环绕、呈现清晰几何多角星形状的水上堡垒，城墙、堡垒与水道浑然一体。`} />
                <InfoRow label="建筑风格" value={`以文艺复兴时期军事防御思想为主导的星形要塞建筑，融合了后期修复的中世纪荷兰城镇风格。`} />
                <InfoRow label="文化价值" value={`它代表着荷兰人“与水共生、以水为盾”的民族智慧，是二战废墟中依靠惊人毅力与考据精神“重生”的文化遗产典范。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要博物馆、风车及游客中心开放时间通常为周二至周日 11:00-17:00（夏季可能延长至18:00）。冬季（11月至次年3月）部分室内景点周一关闭，并缩短开放时间。具体景点建议出行前查阅官网，节假日安排常有变动。`} />
              <InfoRow label="门票价格" value={`进入小镇及城墙区域完全免费。参观内部景点需单独购票：赫乌斯登城堡遗址与市立博物馆联票约8欧元；登风车参观约3欧元。持有荷兰博物馆卡可免费进入大部分室内景点。65岁以上老人及13-17岁青少年享有折扣，12岁以下儿童通常免费。`} />
              <InfoRow label="地址" value={`Heusden Vesting, 5256 AT Heusden, Netherlands`} />
              <InfoRow label="交通方式" value={`从阿姆斯特丹史基浦机场出发，最佳路线是先乘坐火车至‘s-Hertogenbosch（登博斯）中央车站，车程约1小时，班次频繁（每15-20分钟一班）。在登博斯车站前乘坐165路或166路公交车，约30-40分钟即可直达赫乌斯登小镇中心的“Heusden Vesting”站。自驾车是最灵活的方式，从阿姆斯特丹出发约1.5小时车程，小镇外围有清晰指示的收费停车场（P1/P2），停好车后步行5分钟进入古镇核心区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`让我们把时钟拨回更早的时候。赫乌斯登的故事，始于中世纪那条宽阔的马斯河。大约在13世纪，一个定居点在这里形成，凭借河流之利，它逐渐发展为一个小型贸易港。最初的防御只是一道简单的土堤和水沟。真正的命运转折，发生在八十年代战争（荷兰独立战争）期间。地处北布拉班特省战略要冲的赫乌斯登，成了兵家必争的“香饽饽”，在西班牙和荷兰起义军之间反复易手，饱受战火蹂躏。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转折点出现在17世纪初。当时最杰出的军事工程师之一，梅尔基奥尔·范·黑茨霍芬，受命将赫乌斯登彻底改造。他清空了杂乱无章的老城区，以惊人的魄力，在图纸上画下了一个完美的多角星。这就是著名的“旧荷兰体系”：不再追求中世纪高耸的塔楼，而是建造低矮厚实的土质城墙，用宽阔的护城河包围，并伸出多个三角形的棱堡。这样，任何进攻的敌人都会暴露在至少两个棱堡的交叉火力之下。赫乌斯登，从此从一个普通河边小镇，蜕变成了一个为战争而生的精密机器。在之后的黄金年代，它静静履行着防御职责，城内则建起了漂亮的市政厅、济贫院和商人宅邸，战与和，在这颗星星里达成了微妙的共存。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，和平并未永恒。到了18世纪末，法国军队入侵，堡垒技术也已过时，赫乌斯登的军事地位一落千丈。驻军撤走，护城河淤塞，棱堡沦为放羊的草坡。更大的灾难在1944年降临。撤退的德军在市政厅塔楼里藏匿了大量弹药，盟军的轰炸机未能识别，一次空袭引发了惊天动地的大爆炸。美丽的古镇中心被炸成一片冒烟的瓦砾堆，那座承载记忆的塔楼，只剩下残缺的基座。战后，人们忙于重建大城市，伤痕累累的赫乌斯登似乎要被遗忘了，沦为地图上一个不起眼的暗淡斑点。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`但奇迹，往往源于不甘心。上世纪70年代，一群有远见的建筑师、历史学家和激情澎湃的本地居民联合起来，发起了一项堪称“时间倒流”的宏伟计划：他们要依照17世纪的原始地图和绘画，一砖一瓦地重建赫乌斯登。这不是简单的修复，而是极度考据的历史重现。他们挖通了淤塞的护城河，重新勾勒出星星的轮廓；按照古法烧制砖块，重建了城墙和棱堡；甚至，他们在原址用旧图纸和幸存的碎片，重新立起了那座哥特式的市政厅塔楼。工程持续了数十年，当最后一笔完成时，人们看到的不是一个假古董，而是一个从历史深处走回来的、呼吸着的完整生命。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正领略这颗“水上星星”的精髓，我强烈建议你安排一整个白天。最佳抵达时间是上午9点-10点，这时游客尚少，晨光斜射，给城墙和运河水面镀上金边，光影构图绝佳。整体游览可以安排3-4小时的舒缓步行，路线呈一个环状，正好契合小镇的星形布局。先从外缘的防御工事开始，理解其军事逻辑，再慢慢走入中心，感受它的生活内核。这样的节奏能让你清晰体会赫乌斯登从“堡垒”到“家园”的双重身份，每一步都有景致和故事的转换。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇内几乎所有街道都是舒适的砖石路，但城墙斜坡和部分棱堡路径是泥土或草地，建议穿一双舒适且耐脏的步行鞋。
小镇餐馆不多，且热门时段可能满座，建议要么提前预定午餐，要么像本地人一样去面包店买些新鲜的三明治，在运河边野餐。
自驾前来务必注意，小镇核心区禁止机动车通行，务必把车停在外围指定停车场，步行进入是最正确的方式。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场（P1）出发，先不急于进镇，而是绕到北侧护城河外的小径，完整地远眺一次星形堡垒的全貌，让那个几何图形深深印入脑海。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`通过古老的“博斯波尔特”城门进入小镇，立刻左转沿着内城墙脚下的蜿蜒小路“Binnensingel”开始漫步，你能最近距离地触摸到厚重的砖石与泥土。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到东北角的“Oude Bossche Poort”棱堡，登上城墙的斜坡，这里是俯瞰内外双重水道与远方田园风光的绝佳高点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下到城墙内，让弯弯曲曲的小巷将你自然引向中心的市政厅广场，在广场边的咖啡馆“De Binnenhaven”挑一个露天座位，点一杯咖啡，静静观察广场上的市井生活。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观广场上重建的哥特式市政厅及其塔楼，别忘了登上塔顶，此刻你将从“星星”的正中心，360度环视你刚刚走过的整个防御体系。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从广场向南溜达，去寻找那三座并排的、如古典画卷般的“Heusden Windmills”风车，它们矗立在旧城堡的土墩上，是小镇最上镜的名片。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着南侧的运河“Hooiport”慢慢往回走，这段路非常安静，能看到最典型的运河住宅后院，家家都有小码头和花园。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，在夕阳西下前，走到西南角的“熔炉棱堡”，坐在长椅上，看金色的阳光将整个小镇、风车和蜿蜒的水道染成温暖的蜜色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`北侧护城河外麦田边`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，从北面田野用长焦镜头压缩空间，能拍到风车、城墙倒影与完整星形轮廓同框的经典画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`市政厅塔楼顶端`}</h4>
                  <p className="text-sm text-gray-700">{`晴天的正午前后，光线充足时登塔，用广角镜头垂直向下拍摄市政厅广场的石砖铺地图案与放射状的小巷，构图极具几何冲击力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“Hooiport”运河中段的小石桥`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，光线柔和时，站在桥中央，拍摄运河笔直延伸、两岸砖房与树木形成完美对称倒影的静谧场景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`西南角“熔炉棱堡”的炮位缺口`}</h4>
                  <p className="text-sm text-gray-700">{`日落时分，将相机放在古老的砖石炮座上，以前景的斑驳砖块为框，拍摄金光洒满整个小镇中心与远处风车的温暖全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`三座风车下的水边栈道`}</h4>
                  <p className="text-sm text-gray-700">{`下午侧光时，走到风车对面的小栈道上，低机位拍摄，让风车的叶片、它们在水中的倒影与天空的流云共同构成动态的画面。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`荷兰天气多变，善用戏剧性的云层和突如其来的光线，往往能拍出比单纯晴天更有故事感的照片。`}</li>
                <li>• {`拍摄居民住宅窗户或后院时请保持尊重和距离，避免打扰私人生活，荷兰人注重隐私。`}</li>
                <li>• {`使用无人机拍摄需格外谨慎，小镇空域可能有管制，且飞行器噪音会破坏这里的宁静，最好事先查询当地法规并远离人群。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸体验`}</h4>
                  <p className="text-sm text-blue-800">{`下榻由17世纪运河边商人宅邸改造的精品酒店‘Het Gouverneurshuis’，睡在带横梁的天花板下，清晨被窗外的潺潺水声与鸭子的嬉闹叫醒。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`设计风尚`}</h4>
                  <p className="text-sm text-green-800">{`选择镇口由古老仓库改建的设计师酒店‘Vesting Hotel’，房间拥有极简的北欧风格与巨大的景观窗，能将护城河与城墙景色尽收眼底。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`特色民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`入住本地艺术家经营的B&B‘Aan de Vesting’，房间装饰着主人的画作，女主人会为你准备一顿丰盛的、采用本地食材的荷兰式早餐。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独特船屋`}</h4>
                  <p className="text-sm text-purple-800">{`在预订平台上寻找停泊在赫乌斯登内港的舒适船屋，体验以水为床、随波轻摇的夜晚，这是融入这座水上要塞最地道的方式。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`赫乌斯登的住宿数量非常有限，尤其是在夏季和周末，务必提前数月预订才能锁定心仪的住处。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇夜晚极其安静祥和，治安良好，你可以放心在星空下的城墙边散步。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`如果订不到镇内的住宿，可以选择住在仅10分钟车程外的沃斯或登博斯市，作为替代方案，但会失去清晨与夜晚独占古镇的珍贵体验。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开赫乌斯登很久以后，我脑海里反复回放的，不是某个具体的建筑画面，而是一种感觉。那是一种被水与土温柔包裹的安全感，一种秩序与散漫奇特地交融在一起的和谐。这座小镇用它自己的存在，讲述了一个关于毁灭与重生、刚硬与温柔的故事。它告诉你，历史不只有一种写法——可以被战火撕裂，也可以被执着的双手一砖一瓦地缝合；可以是为了杀戮而设计，最终却成为安放美好生活的容器。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个追求高效、追求爆炸性体验的快节奏世界里，赫乌斯登像一颗匀速自转的宁静星球。它不提供刺激的游乐项目，没有喧闹的酒吧街，它的宝藏需要你用脚步慢慢丈量，用心静静聆听。它教会我们，最深度的旅行，有时不是去看多么壮丽的奇观，而是去理解一种生存的智慧，去见证一种不向时间与废墟低头的、坚韧的温柔。每一位热爱深度游的旅人，都应该来这里住上一晚，在星空下沿着沉默的城墙走一圈。你会感觉到，自己不仅是在参观一个景点，更是在触摸荷兰民族的灵魂——那生于水、守于水、最终让水化为家园诗篇的灵魂。这颗水上之星，是一首写给坚韧与希望的立体诗，值得你专程前来，轻声诵读。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/roermond-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁尔蒙德老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Roermond Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kasteel-de-cleve" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    克
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">克莱沃城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kasteel de Cleve</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/valkenburg-castle-caves-netherlands" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    法
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">法尔肯堡（隐藏着绵延洞穴与地下圣诞市集的古堡废墟）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Valkenburg Castle Ruins & Caves</p>
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
