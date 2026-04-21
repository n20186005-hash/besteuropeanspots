import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨比莱 Sabilē｜探访吉尼斯认证世界最北露天梯田葡萄园 - 拉脱维亚库尔泽梅秘境',
  description: '车子拐下主路，驶入一条被高大椴树荫庇的安静小道时，你知道，萨比莱到了。这里的空气立刻变得不一样——混合着刚割过的青草香、远处森林飘来的松脂味，以及一种淡淡的、湿润的泥土气息。第一眼望去，它太不起眼了，几排色彩柔和的木头房子，一个静谧得能听见自己心跳的小广场，教堂的白色尖顶安静地指向库尔泽梅永远变幻莫',
}

export default function SabileNorthernmostVineyardLatviaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '拉脱维亚', href: '/destinations/europe' },
            { label: '萨比莱', href: '/destinations/europe' },
            { label: '萨比莱', href: '/attractions/sabile-northernmost-vineyard-latvia' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨比莱・Sabile・拉脱维亚・萨比莱`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下主路，驶入一条被高大椴树荫庇的安静小道时，你知道，萨比莱到了。这里的空气立刻变得不一样——混合着刚割过的青草香、远处森林飘来的松脂味，以及一种淡淡的、湿润的泥土气息。第一眼望去，它太不起眼了，几排色彩柔和的木头房子，一个静谧得能听见自己心跳的小广场，教堂的白色尖顶安静地指向库尔泽梅永远变幻莫测的灰蓝色天空。你几乎要怀疑导航是不是出了错，那个声名远扬的“世界之最”在哪里？
然后，你顺着当地人手指的方向望去，就在小镇的东侧，一整面向阳的山坡像被一只巨人的手精心梳理过，化作一层层整齐而优美的绿色阶梯。那就是葡萄园。它不是托斯卡纳那种辽阔无边的豪迈，而是一种带着北欧克制与精致的秀美。阳光正穿过云隙，洒在那些深绿浅绿的叶子上，每一片都亮晶晶的，像是镶了银边。风从山谷里吹上来，送来沙沙的轻响，那是葡萄叶在相互低语，其间还夹杂着不知名鸟儿的清脆鸣叫，和远处某户人家修剪花园的细微咔嚓声。时间在这里，不是以小时计，而是以葡萄藤抽芽、开花、结果的节奏在流淌。
萨比莱最动人的，是它毫无矫饰的生活感。葡萄园不是围起来的景区，它就是小镇的后花园，是生活的一部分。你会看到老奶奶提着篮子，沿着梯田间的小路慢悠悠地走回家；骑着自行车的少年从坡顶欢叫着冲下来；酒窖的主人可能正扛着工具，准备去修剪枝条。这里没有汹涌的人潮，没有叫卖的商铺，只有一种深植于土地的安宁与满足。它的核心魅力，不在于震撼，而在于一种微小却坚韧的“可能性”的证明——在最严酷的北方，生命依然能找到方式，绽放出甜美的果实。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子拐下主路，驶入一条被高大椴树荫庇的安静小道时，你知道，萨比莱到了。这里的空气立刻变得不一样——混合着刚割过的青草香、远处森林飘来的松脂味，以及一种淡淡的、湿润的泥土气息。第一眼望去，它太不起眼了，几排色彩柔和的木头房子，一个静谧得能听见自己心跳的小广场，教堂的白色尖顶安静地指向库尔泽梅永远变幻莫测的灰蓝色天空。你几乎要怀疑导航是不是出了错，那个声名远扬的“世界之最”在哪里？" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，你顺着当地人手指的方向望去，就在小镇的东侧，一整面向阳的山坡像被一只巨人的手精心梳理过，化作一层层整齐而优美的绿色阶梯。那就是葡萄园。它不是托斯卡纳那种辽阔无边的豪迈，而是一种带着北欧克制与精致的秀美。阳光正穿过云隙，洒在那些深绿浅绿的叶子上，每一片都亮晶晶的，像是镶了银边。风从山谷里吹上来，送来沙沙的轻响，那是葡萄叶在相互低语，其间还夹杂着不知名鸟儿的清脆鸣叫，和远处某户人家修剪花园的细微咔嚓声。时间在这里，不是以小时计，而是以葡萄藤抽芽、开花、结果的节奏在流淌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨比莱最动人的，是它毫无矫饰的生活感。葡萄园不是围起来的景区，它就是小镇的后花园，是生活的一部分。你会看到老奶奶提着篮子，沿着梯田间的小路慢悠悠地走回家；骑着自行车的少年从坡顶欢叫着冲下来；酒窖的主人可能正扛着工具，准备去修剪枝条。这里没有汹涌的人潮，没有叫卖的商铺，只有一种深植于土地的安宁与满足。它的核心魅力，不在于震撼，而在于一种微小却坚韧的“可能性”的证明——在最严酷的北方，生命依然能找到方式，绽放出甜美的果实。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨比莱`} />
                <InfoRow label="英文名称" value={`Sabile`} />
                <InfoRow label="正式名称" value={`Sabile`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`萨比莱`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座用葡萄藤在北极圈门口写下农业奇迹的小镇，拥有吉尼斯世界纪录官方认证的“世界上最北的露天梯田葡萄园”。`} />
                <InfoRow label="建筑特色" value={`依缓坡而建的精致石头梯田，与散落其间的传统木结构库尔兰乡村建筑和谐共生。`} />
                <InfoRow label="建筑风格" value={`朴素的拉脱维亚乡村木构建筑与因地制宜的梯田农业工程相结合。`} />
                <InfoRow label="文化价值" value={`见证了拉脱维亚库尔泽梅地区人民坚韧、乐观与创造力的活态文化景观，是人与自然协作的温暖诗篇。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`葡萄园及小镇公共区域全年全天开放。小镇信息中心及葡萄园旁的品酒酒窖开放时间一般为5月至9月，每日10:00-18:00；10月至次年4月开放时间缩短或仅周末开放，行前建议查询当地旅游局官网获取最新信息。冬季大雪后，通往葡萄园山顶的部分小路可能因积雪封闭。`} />
              <InfoRow label="门票价格" value={`进入萨比莱小镇及葡萄园山丘本身完全免费。若参加由信息中心组织的导览游或进入小型地方历史博物馆，建议捐赠2-5欧元。在酒窖品尝本地葡萄酒或特产蜂蜜酒（Medus）费用约为5-10欧元/人，包含3-4种酒品试饮及讲解。`} />
              <InfoRow label="地址" value={`Sabile, Talsu novads, LV-3294, Latvia`} />
              <InfoRow label="交通方式" value={`从拉脱维亚首都里加的国际机场出发，最佳方式是租车自驾。沿A10公路向西北方向行驶，转入P131公路，全程约120公里，车程1小时45分钟，沿途是典型的库尔泽梅乡村风光，森林与田野交替。若乘坐公共交通，先从里加中央巴士站搭乘前往塔尔西（Talsi）的长途巴士，班次约每小时一班，车程约2小时；在塔尔西换乘前往萨比莱的本地巴士（班次较少，约每日3-4班，车程25分钟）。强烈建议自驾，以便灵活探索周边如卡恩达瓦（Kandava）等其他迷人小镇。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说起萨比莱葡萄园的故事，得把时钟拨回到好几个世纪以前。这片土地历史上属于库尔兰公国，而种植葡萄的念头，最初可能跟中世纪那些条顿骑士团有关。传说他们从更温暖的南方带来葡萄枝条，试图在这片寒冷的土地上酿造用于弥撒的圣酒。可以想象，早期的尝试一定充满了失败，寒冷的冬季和短暂的生长季是无情的对手。但库尔兰人骨子里有种执拗的韧性，或许就像他们的民歌里唱的那样，与风霜搏斗是生活的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点发生在17世纪左右，瑞典统治库尔兰的时期。有文献记载，当时的庄园主们进行了一场大胆的“农业实验”。他们看中了萨比莱南向的这面山坡，它像一个大自然的怀抱，能最大限度地吸收和保存太阳的热量。人们用当地的石块，一筐一筐地背上来，垒砌成坚固的挡土墙，形成了最初的梯田。这不仅仅是耕种，更是一种精妙的微气候创造。石墙在白天吸收热量，在寒冷的夜晚缓缓释放，为娇嫩的葡萄藤提供了一个小小的“暖气片”。这智慧，朴素而伟大。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，历史的浪潮起伏不定。战争、政权更迭，尤其是苏联时期，集体农庄制度下，这种小而美的私人葡萄园实验几乎被遗忘，山坡一度荒芜。直到拉脱维亚重新获得独立，沉睡的记忆才被唤醒。上世纪90年代，一群当地的梦想家，包括历史学家、农艺师和普通的萨比莱居民，决定复兴这个传统。他们清理荒草，修补古老的石墙，寻找可能还存活的老藤，或重新引进适合寒冷气候的杂交品种。这不仅仅是为了葡萄，更是为了找回一段属于自己土地的身份叙事。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "他们的努力最终赢得了世界的认可。1999年，吉尼斯世界纪录正式授予萨比莱葡萄园“世界上最北的露天梯田葡萄园”称号。这个头衔听起来有点拗口，但其意义非凡。它不再只是一个地方性的奇观，而成了一个象征——象征着人类在看似不可能的自然条件下，所展现的创造力、耐心与希望。如今，园中种植的大多是如‘Zilga’、 ‘Sukribe’这类抗寒的品种，酿出的酒也许没有法国勃艮第那般复杂，却带着独特的、清新的浆果风味和一股凛冽的、属于北方的筋骨。每一口，都是风土的故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议在春夏或初秋的晴朗早晨抵达萨比莱，预留整整大半天的时间（约5-6小时）进行沉浸式游览。早晨的光线柔和，最适合拍摄梯田全景，且游客稀少，能独享山谷的宁静。游览节奏宜慢不宜快，核心是“体验”而非“打卡”。先从征服葡萄园山丘开始，在制高点唤醒身心；随后下山深入小镇的肌理，感受日常生活；最后以一顿地道的午餐和悠闲的漫步收尾。这样的安排顺应了地理的由高到低，也契合了体验从宏观震撼到微观趣味的自然过渡。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`一定要穿一双舒适防滑的徒步鞋，攀登葡萄园的石阶可能因露水或雨水而湿滑。
酒窖的开放时间可能随季节变动，如果一心想要品酒，最好提前在镇上信息中心确认或电话预约。
小镇商业设施有限，餐馆选择不多且可能较早结束午市，建议安排好用餐时间或自备少许零食。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇口免费的停车场然后沿着缓坡徒步走向那个闻名遐迩的葡萄园山丘脚下。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着古老的石阶开始向上攀登不时停下来回望身后越来越开阔的萨比莱河谷全景。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在葡萄园最高处的观景台转过身俯瞰整个萨比莱河谷红屋顶在绿树中若隐若现像童话里的模型。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着梯田间的蜿蜒小径横穿山坡仔细看看石墙的构造和那些在寒风中依然茁壮的葡萄藤品种牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山后径直去山脚那间由旧农仓改造的舒适酒窖让热情的主人带你品尝用本地葡萄酿造的独特风味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走到镇中心的小广场坐在长椅上看来往不多的居民去古朴的白色圣三一教堂里点一支蜡烛感受宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在推荐的家庭餐厅享用一顿用河谷食材烹制的午餐比如炖蘑菇配黑麦面包和一杯清凉的格瓦斯。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`饭后沿着阿巴瓦河支流散步穿过小桥看野鸭嬉戏最后去手工艺工作室看看用羊毛和亚麻制作的本地纪念品。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`葡萄园山顶观景台全景`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时或傍晚日落前一小时，阳光以低角度照射山谷，能拍出层次极其丰富的梯田曲线与小镇全景，使用广角镜头并将蜿蜒的小径作为视觉引导线。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`梯田石墙特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点后阳光充分照亮山坡时，寻找一处纹理斑驳、覆有青苔的古老石墙，近距离拍摄葡萄藤与石块的质感对比，焦点对准藤蔓的新芽或一串幼果。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`圣三一教堂与葡萄园同框`}</h4>
                  <p className="text-sm text-gray-700">{`站在小镇广场通往葡萄园的小路开端，用长焦镜头压缩空间，将教堂的白色尖顶与背景层叠的绿色梯田框入同一画面，构成信仰与劳作的诗意联结。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`阿巴瓦河支流上的小桥`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗无风的午后，蹲在桥边较低的位置，拍摄木头小桥及其在水中的完美倒影，搭配岸边的野花和远处的屋舍，营造静谧的北欧乡村氛围。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`乡村街道光影`}</h4>
                  <p className="text-sm text-gray-700">{`夏季正午阳光穿过道路两旁高大的树木，在彩色的木屋墙面上投下斑驳的光影，等待一个骑自行车或提着手袋的当地人走入画面，捕捉充满生活气息的瞬间。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拉脱维亚高纬度地区的“黄金时刻”持续时间比南方更长，尤其夏季，日落前后两小时光线都极其迷人，请充分利用。`}</li>
                <li>• {`尊重私人财产，拍摄民居或居民时尽量保持距离，如需特写，一个微笑和友好的手势征得同意是必要的。`}</li>
                <li>• {`使用无人机拍摄前，务必了解当地法规，并注意避开教堂等敏感区域及居民区上空，以尊重他人隐私。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`葡萄园旁的农家民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在经营葡萄园的家族农庄里，房间窗户正对层层梯田，清晨在鸟鸣中醒来，晚上主人可能会邀请你共尝家酿。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河边静谧客栈`}</h4>
                  <p className="text-sm text-green-800">{`位于阿巴瓦河支流畔的翻新木屋客栈，带一个私密的小露台，能听见潺潺水声，内部是简约的斯堪的纳维亚设计风格，提供美味的自制早餐。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`森林边缘度假屋`}</h4>
                  <p className="text-sm text-yellow-800">{`距离小镇约3公里，坐落在宁静的松林旁，是一栋完全用原木打造的传统小屋，配有桑拿房，夜晚可以仰望毫无光污染的璀璨星空。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`塔尔西古城设计酒店`}</h4>
                  <p className="text-sm text-purple-800">{`若想有更多餐饮选择，可驱车25分钟入住附近更大的镇子塔尔西，那里有由历史建筑改造的设计酒店，融合了古典外观与现代舒适，作为探索库尔泽梅地区的完美基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "萨比莱本镇的住宿选择非常有限且极其抢手，尤其是在夏季和葡萄收获季初秋，务必提前数月预订。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "如果选择住在萨比莱，请享受真正的“乡村寂静”，夜晚几乎没有夜生活，只有大自然的声音，这是体验的一部分。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "冬季来访住宿选择更少，但若能订到，将体验被白雪覆盖的童话般葡萄园，是另一种截然不同的、静谧至深的震撼。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开萨比莱的时候，我车里多了一小瓶他们自产的蜂蜜酒，金色的液体在阳光下半透明。但我带走的，远不止这个。我带走的是一种关于“尺度”的思考。在这个追求宏大、壮观、破纪录的世界里，萨比莱提供了一个相反的范本：它的伟大，正在于它的微小和专注。它没有试图成为葡萄酒世界的中心，它只是静静地、倔强地证明了，在这片北纬57度的土地上，葡萄可以生长，生活可以甜美。这种“可以”，本身就是一个温柔的奇迹。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "对于每一个厌倦了快餐式旅行、渴望在旅程中触摸到土地灵魂的人来说，萨比莱是一剂良药。它教你慢下来，用脚步去丈量一层层梯田的高度，用手掌去感受古老石墙的温度，用时间去等待一杯酒里凝结的四季风霜。这里没有喧嚣的答案，只有风吹过葡萄叶时发出的、持续了几个世纪的沙沙提问：什么是可能与不可能？什么是人与自然之间最持久的契约？来这里，不是为了看一个景点，而是为了参与一个依然在呼吸的、关于坚韧与希望的故事。在这北欧的天空下，这片世界上最北的葡萄园，就像一颗倔强的心脏，持续而有力地跳动着，告诉你，生命总会找到自己的出路，在任何纬度。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/ventspils-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    文
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">文茨皮尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ventspils Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/rundale-palace" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    伦
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">伦达莱宫（波罗的海的凡尔赛宫）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Rundāle Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/edole-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃多莱城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ēdole Castle</p>
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
