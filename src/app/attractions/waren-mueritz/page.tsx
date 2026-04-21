import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '瓦伦（米里茨）Waren (Müritz)｜德国最大湖畔的诗意栖居，通往广袤国家公园的自然门户 - 最佳欧洲景点',
  description: '火车缓缓驶入站台，车门打开的瞬间，一股清冽的、带着水汽和松针气息的空气便涌入车厢，瞬间洗刷了从柏林带来的都市尘埃。这就是瓦伦给你的第一个拥抱——不是视觉的，而是嗅觉的。走出小小的车站，沿着一条坡度舒缓的街道向下走，视野逐渐开阔，一片无垠的、在阳光下碎银般闪烁的蓝色便撞入眼帘。那是米里茨湖，德国胸膛上',
}

export default function WarenMueritzPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '德国', href: '/destinations/europe' },
            { label: '瓦伦（米里茨）', href: '/destinations/europe' },
            { label: '瓦伦（米里茨）', href: '/attractions/waren-mueritz' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`瓦伦（米里茨）・Waren (Müritz)・德国・瓦伦（米里茨）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`火车缓缓驶入站台，车门打开的瞬间，一股清冽的、带着水汽和松针气息的空气便涌入车厢，瞬间洗刷了从柏林带来的都市尘埃。这就是瓦伦给你的第一个拥抱——不是视觉的，而是嗅觉的。走出小小的车站，沿着一条坡度舒缓的街道向下走，视野逐渐开阔，一片无垠的、在阳光下碎银般闪烁的蓝色便撞入眼帘。那是米里茨湖，德国胸膛上最大的一块蓝宝石。空气中弥漫着湖水特有的、微微腥甜的清新味道，混杂着码头边木板栈道被太阳晒暖后散发的松脂香。
你的耳朵会立刻被一种舒缓的白噪音包围：那是风掠过湖面、吹动成千上万片树叶和帆布缆绳的声响，间或夹杂着清脆的海鸥鸣叫，以及码头区咖啡杯碟轻轻碰撞的惬意声响。小镇的中心是安静的，但绝非沉寂。穿着冲锋衣、背着登山杖的徒步者，推着婴儿车的年轻父母，还有头发银白、互相搀扶着漫步的老夫妇，构成了这里的生活主旋律。这里没有急匆匆的脚步，时间仿佛被湖水浸透，变得绵软而悠长。
最打动人的，是那种浑然天成的“过渡感”。瓦伦精致得像明信片的老城广场，铺着鹅卵石的小巷，和那座雄伟的、由暗红色砖块砌成的圣乔治教堂，都明确地告诉你，你身处一个有着数百年历史的北德小镇。然而，只要你从任何一条小巷往南走上十分钟，眼前便是截然不同的世界：无尽的森林小径、芦苇摇曳的沼泽湿地、开阔如海面的湖景。瓦伦就像一个优雅的管家，为你轻轻推开一扇门，门后是整个梅克伦堡湖区最原始、最野性的自然宝库。这种从人文烟火到纯粹自然无缝衔接的体验，正是它最核心的魅力。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "火车缓缓驶入站台，车门打开的瞬间，一股清冽的、带着水汽和松针气息的空气便涌入车厢，瞬间洗刷了从柏林带来的都市尘埃。这就是瓦伦给你的第一个拥抱——不是视觉的，而是嗅觉的。走出小小的车站，沿着一条坡度舒缓的街道向下走，视野逐渐开阔，一片无垠的、在阳光下碎银般闪烁的蓝色便撞入眼帘。那是米里茨湖，德国胸膛上最大的一块蓝宝石。空气中弥漫着湖水特有的、微微腥甜的清新味道，混杂着码头边木板栈道被太阳晒暖后散发的松脂香。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你的耳朵会立刻被一种舒缓的白噪音包围：那是风掠过湖面、吹动成千上万片树叶和帆布缆绳的声响，间或夹杂着清脆的海鸥鸣叫，以及码头区咖啡杯碟轻轻碰撞的惬意声响。小镇的中心是安静的，但绝非沉寂。穿着冲锋衣、背着登山杖的徒步者，推着婴儿车的年轻父母，还有头发银白、互相搀扶着漫步的老夫妇，构成了这里的生活主旋律。这里没有急匆匆的脚步，时间仿佛被湖水浸透，变得绵软而悠长。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人的，是那种浑然天成的“过渡感”。瓦伦精致得像明信片的老城广场，铺着鹅卵石的小巷，和那座雄伟的、由暗红色砖块砌成的圣乔治教堂，都明确地告诉你，你身处一个有着数百年历史的北德小镇。然而，只要你从任何一条小巷往南走上十分钟，眼前便是截然不同的世界：无尽的森林小径、芦苇摇曳的沼泽湿地、开阔如海面的湖景。瓦伦就像一个优雅的管家，为你轻轻推开一扇门，门后是整个梅克伦堡湖区最原始、最野性的自然宝库。这种从人文烟火到纯粹自然无缝衔接的体验，正是它最核心的魅力。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`瓦伦（米里茨）`} />
                <InfoRow label="英文名称" value={`Waren (Müritz)`} />
                <InfoRow label="正式名称" value={`Waren (Müritz)`} />
                <InfoRow label="国家" value={`德国`} />
                <InfoRow label="城市" value={`瓦伦（米里茨）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`梅克伦堡湖区历史悠久的水路贸易枢纽与汉萨同盟成员，如今是探索德国最大内陆湖米里茨湖与广袤国家公园的核心门户。`} />
                <InfoRow label="建筑特色" value={`以醒目的哥特式红砖教堂为天际线中心，环绕着色彩柔和、山墙立面精美的渔民与商人住宅，码头区充满了现代活力的游艇与帆船。`} />
                <InfoRow label="建筑风格" value={`北德经典的砖砌哥特式风格与后期巴洛克、古典主义民居建筑和谐共存。`} />
                <InfoRow label="文化价值" value={`体现了北德湖区居民与水域共生共荣的传统生活智慧，是从繁忙都市遁入宁静自然的疗愈文化的当代典范。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全天开放。主要景点如圣乔治教堂通常在每日上午10点至下午5点开放，冬季（11月至次年3月）开放时间可能缩短至下午4点，周一偶尔闭馆维护。游客信息中心工作日开放时间为9:00-18:00，周末10:00-16:00。国家公园的步道及信息中心全年开放，但部分游客中心在冬季的开放时间会相应调整。建议行前查询具体景点的最新时间表。`} />
              <InfoRow label="门票价格" value={`进入小镇及湖畔区域免费。圣乔治教堂参观免费，但登塔楼参观象征性收取2欧元维护费，儿童免费。米里茨国家公园无需门票。码头游船项目价格因时长和路线而异，经典的一小时环湖游约为12-15欧元。租借自行车每日约10-15欧元，皮划艇约25欧元/半天。`} />
              <InfoRow label="地址" value={`Markt 1, 17192 Waren (Müritz), Germany`} />
              <InfoRow label="交通方式" value={`从柏林出发最为便捷：在柏林中央火车站乘坐开往罗斯托克或斯特拉尔松德的区域快车，在瓦伦（米里茨）站下车，车程约1小时40分钟至2小时，班次每小时至少一班，可通过德国铁路App或网站提前购票，有优惠票可选。从汉堡出发需在新勃兰登堡换乘一次，总时长约3小时。最近的国际机场是柏林勃兰登堡机场，抵达后可按上述方式转乘火车。小镇内部完全适合步行探索，租一辆自行车是前往国家公园边缘地带的绝佳选择。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "瓦伦的故事，始终与这片浩渺的水域紧密相连。早在斯拉夫人时期，这里就是一个重要的定居点和渡口，“Waren”这个名字很可能就源于古斯拉夫语中的“城堡”或“守卫之地”。当德意志的东向殖民浪潮席卷而来，这座湖畔要地的重要性愈发凸显。十三世纪，它获得了卢贝克的城市法，正式成为一座城市，并被纳入强大的汉萨同盟网络。想象一下当年的景象：码头上堆满了来自波罗的海的鲱鱼桶、来自吕贝克的布匹、以及来自内地的木材和粮食，红砖砌成的仓库里人声鼎沸，商人用低地德语高声议价。圣乔治教堂那高耸的塔楼，不仅是信仰的象征，更是为湖上船只指引方向的灯塔，是财富与安全的宣言。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，汉萨同盟的衰落和三十年代战争的蹂躏，让瓦伦的贸易辉煌逐渐褪色。它从一个大区域的商业节点，回归为一个服务于周边农业地区的宁静市场小镇。转折发生在十九世纪，伴随着浪漫主义思潮的兴起，人们开始重新发现自然之美。铁路修到了瓦伦，它不再难以抵达。清澈的湖水、茂密的森林、清新的空气，被医生们推荐为具有疗愈功效。于是，瓦伦迎来了它的第二次生命——作为疗养胜地。湖畔建起了优雅的别墅和疗养院，柏林的市民们乘坐火车来到这里，进行“水疗”或“森林浴”，在湖上泛舟，在林间漫步。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪的动荡似乎特意绕开了这个以水为生的小镇。它幸运地在战火中基本保持了完好。两德统一后，随着人们对高质量生活与生态旅游的追求，瓦伦的价值被重新评估和提升。1990年，包含米里茨湖在内的大片区域被划定为德国最大的国家公园之一——米里茨国家公园。瓦伦，因其绝佳的地理位置和成熟的基础设施，顺理成章地成为了探索这片自然瑰宝的“首都”。昔日的疗养客变成了今天的自然爱好者、徒步者和帆船手。小镇的基因里始终流淌着对水的亲近与利用，从最初的渔猎贸易，到后来的疗养休闲，再到现在的生态旅游，变的是形式，不变的是人与湖之间那份深刻而持久的共生关系。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议你在一个晴朗的早晨抵达瓦伦，用一整天的时间，从容地体验从湖畔人文到原始自然的完美过渡。整体游览节奏宜慢不宜快，核心是感受“呼吸感”。上午光线柔和，适合在码头和老城进行视觉探索和拍照；中午在湖边享受悠闲午餐；下午则将整个身心投入国家公园的怀抱，进行一场轻度徒步。这样的安排既能避开午后最晒的时段进行户外徒步，又能在黄昏时分见证湖区最魔幻的光影时刻。全程以步行为主，辅以短途游船，无需匆忙赶路。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`夏季周末和节假日码头区人会比较多，尽量选择工作日前往体验更佳。国家公园内请严格遵循“留在步道上”的规定，不仅为保护脆弱的生态环境，也避免在沼泽地带发生危险。湖区天气多变，即便夏日也请随身携带一件防风防雨的外套。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨第一站直奔老码头，看晨光为停泊的白色帆船桅杆镀上金边，听湖水轻轻拍打岸边的木桩。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣乔治教堂内部，感受从高窗洒下的静谧光束，并勇敢攀爬那狭窄的螺旋石梯登上塔楼。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在塔楼顶上深吸一口气，将小镇红瓦屋顶、如网格般交织的运河与远方无垠的湖面全景尽收眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`漫步穿过市政厅广场，在周围色彩柔和的巴洛克立面建筑间穿梭，寻找那些讲述渔业历史的小浮雕。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`选一家正对湖面的餐厅享用午餐，务必点一道当地特色的熏鱼，搭配一杯清凉的啤酒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在码头租一艘皮划艇或报名参加环湖游船，从水上的全新视角仰望小镇和亲近湖心岛的鸟类。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着清晰标识的步道向南走进米里茨国家公园的边缘，在观鸟塔上用望远镜寻找白尾海雕的身影。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`黄昏时分回到湖畔的疗养公园，找一张长椅坐下，安静地观看落日将天空、湖面和你的心情一同染成粉紫色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老码头栈桥尽头`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，以低角度拍摄，将木桩、系缆绳的金属环作为前景，引导视线望向湖中帆船和远方教堂塔楼的剪影。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣乔治教堂塔楼顶部`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗日子的上午十点前后，阳光能均匀照亮全镇，使用广角镜头拍摄，将近处陡峭的红瓦屋顶、中景的运河绿树与远景的浩瀚湖面构成三个层次。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`国家公园“费德里希斯霍夫”观鸟塔`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分阳光西斜，站在塔上二层，用长焦镜头捕捉湖泊航道中驶过的帆船，并将其置于大片芦苇荡和森林的背景之中，凸显自然与人文的和谐。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城“酿酒厂小巷”石板路`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时反而能产生强烈明暗对比，拍摄两侧彩色山墙民居投在鹅卵石路面上的几何形光影，画面充满线条与色块的美感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`湖畔疗养公园弧形长椅`}</h4>
                  <p className="text-sm text-gray-700">{`日落黄金半小时，以长椅为视觉中心，人物可背对镜头坐于椅上，面向漫天霞光和波光粼粼的湖面，拍出极具故事感和氛围感的剪影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在教堂塔楼等狭窄空间内拍摄时，请务必注意安全并礼让其他游客。在国家公园拍摄野生动物时，请保持安静并使用长焦镜头，切勿为了拍照而惊扰或靠近它们。航拍爱好者需特别注意，国家公园核心区严格禁飞无人机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`湖畔遗产酒店`}</h4>
                  <p className="text-sm text-blue-800">{`下榻于一栋经过精心修复的十九世纪湖畔别墅，每个房间都拥有独特的湖景视角，在阳台上就能看到天鹅从窗前游过，早餐的蜂蜜来自酒店自己的蜂箱。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`老城中心设计公寓`}</h4>
                  <p className="text-sm text-green-800">{`由一栋古典主义风格民居改造，内部是极简的北欧设计，配有设施齐全的小厨房，位置极佳，下楼就是集市广场和咖啡馆，适合想要自己烹饪当地食材的家庭或朋友。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`森林边缘生态民宿`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇通往国家公园的静谧小径旁，由一对自然主义者夫妇经营，全木质结构，使用太阳能和雨水回收系统，晚上可以在花园里看到绝美的星空。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`码头区现代公寓`}</h4>
                  <p className="text-sm text-purple-800">{`位于活跃的码头建筑上层，拥有超大的落地窗和露台，白天看千帆过境，夜晚看码头灯光倒映在漆黑的水面上，充满现代水岸生活的活力。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "夏季（6月至8月）和重要节假日（如复活节）是绝对的高峰期，住宿非常紧俏，务必提前至少两到三个月预订。小镇治安极好，无论住在中心还是稍边缘的湖畔都很安全。选择住宿时，可以优先考虑提供自行车租借服务的住处，这能极大提升游览的灵活性和乐趣。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开瓦伦许久后，我发现最令我怀念的，并非某一张惊艳的照片或某一道美味，而是一种整体的、弥散在空气中的“呼吸感”。在这个被湖水和森林包裹的小镇里，你的呼吸会不自觉地加深、变慢。吸进去的是清冽如甘泉的空气，呼出来的是积压在胸腔里的都市喧嚣与焦虑。它不像那些声名显赫的大都市，用磅礴的历史与艺术轰炸你的感官；它更像一位温和的向导，牵起你的手，带你从规整优雅的小镇街巷，一步步走向沉默而伟大的自然，让你在漫步中完成一次无声的心灵按摩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个追求效率、迷恋“打卡”的快节奏时代，瓦伦提供了一种截然不同的旅行价值。它告诉你，旅行的意义有时不在于“看到了什么奇观”，而在于“感受到了什么样的节奏”。在这里，你可以重新学习如何浪费时间——浪费在看着湖水发呆上，浪费在辨认一朵野花上，浪费在等待一场毫无预兆的湖上日落上。对于每一位渴望在旅途中找回内心平静、渴望真正与自然对话的深度旅行者来说，瓦伦（米里茨）不仅仅是一个目的地，它更像一个心灵的渡口，渡你从此岸的繁忙，抵达彼岸的安宁。这趟旅程，值得你列入一生的清单，并在需要的时候，一次次归来。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/torgau-hartenfels-castle-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈滕费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hartenfels Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/wolfenbuettel" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    沃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">沃尔芬比特尔</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Wolfenbüttel</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/burg-vischering" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    菲
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">菲舍林城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Burg Vischering</p>
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
