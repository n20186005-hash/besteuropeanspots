import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '帕德博恩 Paderborn｜追寻查理大帝足迹与三兔共耳之谜，漫步德国最短河流的200眼涌泉 - 最佳欧洲景点',
  description: '你第一眼看到帕德博恩，可能不会觉得它像科隆或柏林那样气势逼人。它更像一个被时光轻轻放在北威州绿色丘陵间的秘密宝盒。我的建议是，一定在一个清晨抵达。当雾气还懒洋洋地趴在帕德河的水面上，整个老城的石板路都被沁得湿漉漉的。你听到的第一个声音，不是车马喧嚣，而是无数细微的、咕嘟咕嘟的水流声，从四面八方传来，',
}

export default function PaderbornHistoricCenterPaderSpringsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '帕德博恩', href: '/destinations/europe' },
            { label: '帕德博恩', href: '/attractions/paderborn-historic-center-pader-springs' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`帕德博恩・Paderborn・德国・帕德博恩`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到帕德博恩，可能不会觉得它像科隆或柏林那样气势逼人。它更像一个被时光轻轻放在北威州绿色丘陵间的秘密宝盒。我的建议是，一定在一个清晨抵达。当雾气还懒洋洋地趴在帕德河的水面上，整个老城的石板路都被沁得湿漉漉的。你听到的第一个声音，不是车马喧嚣，而是无数细微的、咕嘟咕嘟的水流声，从四面八方传来，像大地在轻声呼吸。这就是帕德河，德国最短的河，全长只有4公里，但它有超过200个源头泉眼，就在城市的心脏位置汩汩涌出。你沿着水声走，会发现自己置身于一个巨大的、迷宫般的城市公园，绿草如茵，古树参天，清澈见底的水道像蓝色的血管，在古老的建筑根基间肆意流淌。当地人牵着狗慢跑，孩子蹲在木桥边看天鹅，生活与历史，在这里被水完美地缝合在了一起。
然后，你的视线会被水畔那座巨大的、略显敦实的建筑抓住——帕德博恩大教堂。它没有科隆大教堂那种刺破苍穹的尖锐，更像一位历经沧桑、沉稳坐镇的巨人。走进教堂内部，光线是幽暗而庄严的，空气里混合着老木头、冷石壁和淡淡蜡烛的味道。唱诗班的练习声从远处隐隐飘来，在拱顶下产生悠远的回响。你会感受到一种厚重的、扎根于大地的力量。但这还不是它全部的秘密。真正的魔法，藏在连接教堂与回廊的那扇石窗上。
当你站在回廊里，阳光恰好以一个低角度射入时，请停下脚步，仔细寻找。你会看到那扇著名的“三兔共耳”窗。三只兔子，或者说三只野兔，以完美的循环姿态奔跑着，它们每只都只有两只耳朵，但三只兔子却只构成了三只耳朵，彼此共享，形成一个不可思议的、充满动感与哲理的闭环。那一刻，你会忘记自己身在德国的一座教堂，思绪瞬间被拉到了敦煌的壁画，拉到了蒙古的金属器皿，拉到了整个欧亚大陆的文化流转之中。历史在这里，不再是教科书上的文字，变成了一个看得见、摸得着的视觉谜题。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你第一眼看到帕德博恩，可能不会觉得它像科隆或柏林那样气势逼人。它更像一个被时光轻轻放在北威州绿色丘陵间的秘密宝盒。我的建议是，一定在一个清晨抵达。当雾气还懒洋洋地趴在帕德河的水面上，整个老城的石板路都被沁得湿漉漉的。你听到的第一个声音，不是车马喧嚣，而是无数细微的、咕嘟咕嘟的水流声，从四面八方传来，像大地在轻声呼吸。这就是帕德河，德国最短的河，全长只有4公里，但它有超过200个源头泉眼，就在城市的心脏位置汩汩涌出。你沿着水声走，会发现自己置身于一个巨大的、迷宫般的城市公园，绿草如茵，古树参天，清澈见底的水道像蓝色的血管，在古老的建筑根基间肆意流淌。当地人牵着狗慢跑，孩子蹲在木桥边看天鹅，生活与历史，在这里被水完美地缝合在了一起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，你的视线会被水畔那座巨大的、略显敦实的建筑抓住——帕德博恩大教堂。它没有科隆大教堂那种刺破苍穹的尖锐，更像一位历经沧桑、沉稳坐镇的巨人。走进教堂内部，光线是幽暗而庄严的，空气里混合着老木头、冷石壁和淡淡蜡烛的味道。唱诗班的练习声从远处隐隐飘来，在拱顶下产生悠远的回响。你会感受到一种厚重的、扎根于大地的力量。但这还不是它全部的秘密。真正的魔法，藏在连接教堂与回廊的那扇石窗上。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当你站在回廊里，阳光恰好以一个低角度射入时，请停下脚步，仔细寻找。你会看到那扇著名的“三兔共耳”窗。三只兔子，或者说三只野兔，以完美的循环姿态奔跑着，它们每只都只有两只耳朵，但三只兔子却只构成了三只耳朵，彼此共享，形成一个不可思议的、充满动感与哲理的闭环。那一刻，你会忘记自己身在德国的一座教堂，思绪瞬间被拉到了敦煌的壁画，拉到了蒙古的金属器皿，拉到了整个欧亚大陆的文化流转之中。历史在这里，不再是教科书上的文字，变成了一个看得见、摸得着的视觉谜题。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`帕德博恩`} />
                <InfoRow label="英文名称" value={`Paderborn`} />
                <InfoRow label="正式名称" value={`帕德博恩历史中心及帕德源区`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`帕德博恩`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`公元777年，查理大帝在此召开帝国会议，标志着帕德博恩成为法兰克帝国向东传播基督教和巩固权力的重要前哨，是德意志民族神圣罗马帝国早期形成的核心地点之一。`} />
                <InfoRow label="建筑特色" value={`大教堂是罗马式与哥特式风格的融合体，其珍宝馆藏有被誉为“中世纪蒙娜丽莎”的“圣母像”，而最独特的莫过于回廊上那扇神秘的三兔共耳石雕窗。`} />
                <InfoRow label="建筑风格" value={`以神圣罗马帝国时期的罗马式建筑为基石，后历经哥特式、巴洛克式等多次增建与修缮，形成了层叠的历史建筑交响乐。`} />
                <InfoRow label="文化价值" value={`这里是基督教在日耳曼地区传播的活态见证，其“三兔共耳”符号更是东西方文化在丝绸之路上交流的迷人缩影，与脚下生生不息的帕德涌泉共同构成了物质与精神的双重源泉。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`帕德博恩大教堂：全年开放，夏季（4月-10月）通常为周一至周六10:00-18:00，周日及节假日12:00-18:00；冬季（11月-3月）时间略有缩短，通常为10:00-16:30。帕德涌泉区（帕德源公园）为24小时开放的公共绿地。市立博物馆与主教宫博物馆开放时间各异，通常为周二至周日10:00-18:00。具体时间建议出行前查看官网，节假日（如圣诞节、复活节）可能有特殊安排。`} />
              <InfoRow label="门票价格" value={`帕德博恩大教堂：免费进入。教堂珍宝馆与地宫考古遗址：成人票约5欧元，优惠票约3欧元，家庭票约10欧元。登塔楼（如开放）需额外支付约3欧元。帕德源公园：免费。市立博物馆：成人票约6欧元，优惠票约4欧元。多数博物馆对18岁以下青少年免费，并提供联票选项。`} />
              <InfoRow label="地址" value={`帕德博恩大教堂：Domplatz, 33098 Paderborn， 德国。帕德涌泉区：Paderquellgebiet, 33098 Paderborn， 德国。`} />
              <InfoRow label="交通方式" value={`从最近的帕德博恩/利普施塔特机场（PAD）出发：机场较小，主要连接欧洲部分城市。乘出租车至市中心约15分钟，车费约20-25欧元。或乘坐462路公交车至帕德博恩中央火车站，车程约25分钟。从更主要的杜塞尔多夫（DUS）或法兰克福（FRA）机场出发，需先乘高速铁路（ICE）至帕德博恩中央火车站（Hbf），车程分别约为2小时和2.5小时，班次频繁。从帕德博恩中央火车站出发：步行至老城及帕德源区仅需10-15分钟，沿途已有景致。火车站前也有多条公交线路可搭乘，但步行探索是最好方式。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要说清楚帕德博恩的故事，我们得把时钟拨回到罗马帝国时期。不过，真正让这颗星星在历史星图上亮起来的，是那位身材高大、精力无穷的查理大帝。公元777年，他已经征服了萨克森地区的大部分，但要让这些信奉原始日耳曼神祇的彪悍民族归心，光靠剑是不够的，还需要精神的旗帜。于是，他选择了帕德博恩这个泉水丰沛、土地肥沃的地方，召开了一次至关重要的帝国会议。你可以想象那个场景：来自帝国各方的贵族、主教和军事领袖，聚集在这片新兴之地，泉水流淌声仿佛为会议提供了永恒的背景乐。这次会议的核心议题之一，就是如何进一步向东推进基督教。查理大帝在这里建立了主教区，帕德博恩从此成为了法兰克王国向斯拉夫世界传播信仰、巩固统治的“东部首都”。可以说，现代德国的基督教根基，有一块非常重要的基石，就是在这里埋下的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间快进到中世纪鼎盛时期。大约在13世纪末或14世纪初，某位不知名的石匠，在扩建大教堂回廊时，留下了一个让后世无数人着迷的“签名”——三兔共耳窗。这个符号从何而来？它像一个文化的幽灵，几乎同时期出现在欧洲的教堂、中国的敦煌石窟、中东的金属工艺品上。最主流的学者认为，它沿着丝绸之路传播，象征着永生、轮回与三位一体。在帕德博恩，它被巧妙地融入基督教语境，可能暗示着圣父、圣子、圣灵三位一体而又合一的神学概念。这个小小的石窗，成了帕德博恩作为东西方文化交流节点的一个沉默却无比有力的证明。它提醒我们，即使是在宗教壁垒分明的中世纪，思想和艺术的溪流，也从未停止过跨越千山万水的旅行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让我们再把目光从天空的符号收回到脚下的大地。帕德河，这条短到不可思议的河流，它的200多个泉眼，自古就被视为神圣。日耳曼人可能曾在此祭祀他们的水神。基督教化后，泉水被赋予了新的神圣含义，它们哺育了早期的修道院社区，为教堂的洗礼池提供了源源不断的活水。城市围绕着这些泉水生长，水车坊、鞣皮厂、染坊依水而建，泉水是这座城市跳动的心脏和经济命脉。它从未被管道完全覆盖，至今仍以最原始、最慷慨的姿态，在城市的中心公园里歌唱。这种人与自然的亲密关系，在欧洲城市中是如此罕见而珍贵。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的篇章当然不全是宁静与创造。二战末期，帕德博恩作为重要的铁路枢纽和工业基地，遭到了盟军的猛烈轰炸。1945年3月，老城几乎百分之八十五被毁，大教堂也严重受损，塔楼倒塌，珍宝四散。你如今看到的许多“古老”建筑，其实是战后德国“重建历史”运动的杰出作品。德国人像拼图一样，尽可能使用原来的砖石，依照旧照片和图纸，一砖一瓦地让老城重生。所以，你今天漫步的街道，既承载着中世纪的灵魂，也镌刻着20世纪战争与和平、毁灭与重建的深刻记忆。这种层叠的真实，比纯粹的古旧更令人深思。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味帕德博恩，请务必留出一整天时间，并遵循“从水到石，从地到天”的节奏。建议早上9点左右从帕德源公园开始，此时游客尚少，晨光柔和，泉水最为清澈动人。用上午的2-3小时沉浸在水与绿意的自然奇观中，并初步感受大教堂的外观。中午前后进入大教堂内部及回廊，避开可能的人流小高峰，在相对静谧中寻找“三兔共耳”窗，并参观珍宝馆。下午可以登上大教堂塔楼（如果开放）俯瞰全城，然后漫步老城广场和购物街，参观市立博物馆，深入了解城市历史。傍晚时分，最适合回到帕德涌泉区，看夕阳给水面和古建筑镀上金边，找一家传统的威斯特法伦酒馆享用晚餐。这样安排，你既能捕捉到景点最美的光线，又能体验到从静谧到热闹，再回归宁静的完整城市韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`参观教堂内部和回廊时请保持安静，尤其是在举行宗教仪式或音乐会练习期间。穿一双非常舒适防滑的鞋，因为老城石板路湿滑，登塔楼的旋梯也非常狭窄陡峭。帕德源公园面积不小且路径交错，可以免费获取公园地图或使用手机地图，避免错过隐蔽的美丽泉眼。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在帕德源公园的“源泉之盆”开始，蹲下身触摸那直接从地底涌出、冰凉彻骨的泉水，看水草随着水流摇曳。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰标记的水道漫步，数一数你能发现多少个小瀑布和泉眼，感受这座“建在泉水上”的城市独一无二的脉搏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从公园的绿荫中抬头，仰望帕德博恩大教堂雄伟的西门立面，然后沿着缓坡走向教堂前空旷的广场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`直接进入大教堂中殿，让眼睛适应昏暗的光线，静静走到祭坛前欣赏那尊珍贵的11世纪“帕德博恩圣母像”。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`务必找到通往回廊的侧门，在午后阳光斜射时，驻足于那扇传奇的“三兔共耳”石雕窗前，花十分钟观察光影如何赋予它生命。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上大教堂的塔楼（如果开放），在狭窄的旋梯爬行后，获得一个俯瞰红色屋顶、蜿蜒帕德河与远方森林的全景奖励。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过老城热闹的“市巷”步行街，在市政厅广场边的“亚当与夏娃之家”前，欣赏德国最美丽的半木结构房屋之一。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐前，溜达到“三磨坊”酒馆，在传统的木梁厅里点一份威斯特法伦风味的“天堂与地狱”（黑布丁配土豆泥和苹果酱）。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`帕德源公园的“大泉池”木桥边`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，利用平静的水面拍摄大教堂和周围古老建筑的完美倒影，构图时将对称与不对称元素结合。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`大教堂回廊内“三兔共耳”窗特写`}</h4>
                  <p className="text-sm text-gray-700">{`最佳时间是晴天的下午两三点，阳光能以较低角度照亮石雕的细节，使用大光圈镜头虚化背后的石柱，让石窗成为绝对焦点。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从“圣堂花园”仰拍大教堂后殿与塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`这里游人较少，春季或夏季前景会有缤纷的花园花卉，能拍出建筑与自然柔美结合的画面，下午光线最佳。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`帕德河某条分支溪流的小径跟拍`}</h4>
                  <p className="text-sm text-gray-700">{`将相机放低，贴近水面，拍摄溪流引领视线走向远方古老建筑或桥洞的延伸感，这种视角极具动感和叙事性。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`老城“市巷”步行街中段回望`}</h4>
                  <p className="text-sm text-gray-700">{`利用街道的自然曲线作为引导线，捕捉两侧彩色半木结构房屋和熙攘行人构成的生动市井画面，阴天柔光下色彩更浓郁。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部通常允许非闪光灯摄影，但务必留意是否有禁止拍照的标识（尤其在珍宝馆部分）。在帕德源公园拍摄当地人（尤其是儿童）时，请先微笑示意或征得同意，这是基本的礼貌。尝试用慢门拍摄流动的泉水，能将汩汩的泉眼拍出丝绸般的梦幻效果，记得带上便携三脚架。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`泉水边的历史宅邸`}</h4>
                  <p className="text-sm text-blue-800">{`住在帕德源公园旁一栋经过精心修复的17世纪半木结构房屋里，晚上听着潺潺水声入眠，早晨开窗就是满眼绿意与天鹅。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心的现代设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`由一栋古典建筑改造，内部是极简的北欧风格，地理位置无敌，下楼就是购物街和餐厅，适合追求便利与设计感的旅行者。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`前修道院静谧客房`}</h4>
                  <p className="text-sm text-yellow-800">{`位于大教堂附近一个宁静街区，由古老的修道院建筑部分改建，房间挑高极高，保留着原始石墙，氛围沉静而充满灵性。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`城郊田园风格度假屋`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，可以选择稍远一点、被森林和田野环绕的典型威斯特法伦农庄式酒店，享受彻底的宁静和丰盛的农家早餐。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "帕德博恩在大型展会或大学开学季期间住宿会比较紧张，建议提前预订。老城中心的酒店虽然方便，但周末晚上楼下酒馆可能比较热闹，喜欢绝对安静的话可以选择靠近帕德源公园但非主要酒吧街一侧的住宿。许多家庭经营的民宿提供免费的“帕德博恩欢迎卡”，可享受公共交通和部分景点折扣，预订时不妨询问。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开帕德博恩好些日子了，我耳边似乎还能听到那永不停歇的泉水声。它不像那些让人震撼到失语的景点，它更像一股温润的、持续的力量，慢慢渗透进你的记忆里。我想，它的魔力在于那种不可思议的“合一”。最短暂与最恒久在这里合一——只有4公里生命的帕德河，却源自已经流淌了千万年的地下蓄水层，日夜不休。最局部与最全球在这里合一——一个德国小镇教堂里的石雕，却链接着敦煌、波斯与欧洲的广阔文明网络。最毁灭与最重生在这里合一——你脚下精致的广场，曾经是一片焦土，是普通人重建日常生活的信念，让历史得以延续。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个我们习惯于碎片化、快餐式体验的世界里，帕德博恩邀请你进行一场深度的、慢速的阅读。阅读水的纹理，阅读石头的密码，阅读一个城市层叠的伤痛与荣耀。它告诉你，历史不是故纸堆，而是你手边清凉的泉水，是眼前那个需要你转动思维才能解开的视觉谜题。它很小，小到一天就能走完；它也很大，大到能装下整个欧亚大陆文化交流的故事。对于每一位厌倦了表面打卡，渴望触摸历史真实脉搏，并在寻常风景中发现非凡哲思的旅人来说，帕德博恩都是一个不应错过的、低调而丰盈的驿站。来这里，不只是看一个景点，是经历一次关于时间、文明与重生的沉浸式沉思。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/heidecksburg-palace-rudolstadt" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    海
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">海德克斯堡宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Heidecksburg Palace</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/partnachklamm" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕特纳赫峡谷</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Partnachklamm</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/orienburg-palace-gardens" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    奥
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">奥拉宁堡宫</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Oranienburg Palace</p>
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
