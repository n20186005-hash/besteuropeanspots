import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗尔科利内茨 Vlkolínec｜探访喀尔巴阡山脉深处被封存的时光，活的露天博物馆 - 最佳欧洲景点',
  description: '车子刚拐进山坳，弗尔科利内茨就像一颗被时间不小心遗忘的琥珀，突然撞进眼帘。没有喧嚣，没有招揽生意的招牌，只有一片柔和的色彩安静地趴在大霍霍山翠绿的裙摆上——那是淡黄、浅粉、灰蓝和原木棕的墙壁，像极了孩童用蜡笔认真涂出的方块。摇下车窗，第一股涌入的空气是清冽的，混合着松针、湿润泥土和远处炊烟里一丝丝好...',
}

export default function VkolinecWoodenVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '斯洛伐克', href: '/destinations/slovakia' },
            { label: '弗尔科利内茨', href: '/attractions/vkolinec-wooden-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`弗尔科利内茨・Vlkolínec・斯洛伐克・鲁容贝罗克`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐进山坳，弗尔科利内茨就像一颗被时间不小心遗忘的琥珀，突然撞进眼帘。没有喧嚣，没有招揽生意的招牌，只有一片柔和的色彩安静地趴在大霍霍山翠绿的裙摆上——那是淡黄、浅粉、灰蓝和原木棕的墙壁，像极了孩童用蜡笔认真涂出的方块。摇下车窗，第一股涌入的空气是清冽的，混合着松针、湿润泥土和远处炊烟里一丝丝好闻的木柴燃烧的味道。整个世界的声音仿佛被调低了音量，只剩下风吹过屋顶木瓦片的细微摩擦声，不知谁家后院偶尔传来的一声鸡鸣，还有自己踩在砂石路上那格外清晰的脚步声。这里的时间，粘稠而缓慢。
走近了看，才发现这些木屋的奇妙。它们彼此挨得那么近，共用着篱笆和小径，仿佛在抱团抵御山间的风雪。墙壁是厚厚的、用原木纵横垒砌的“井干式”结构，木头纹理在经年累月的风吹日晒下变得深邃而温润，摸上去有种粗糙的踏实感。窗户小小的，像一双双好奇又略带羞涩的眼睛，窗台上无一例外地摆满了天竺葵，那喷涌而出的绯红与洋红，是这片木质色调海洋里最活泼、最固执的生命信号。你会看到一位包着头巾的老奶奶，正不慌不忙地在屋旁的菜畦里摘豆角；隔壁的木棚下，整齐地堆放着过冬用的劈柴。这里不是一个被围起来的景点，它就是生活本身，一种与现代效率社会平行却依然顽强呼吸着的生活。
最打动人的，是那种浑然天成的和谐感。村落依着平缓的山坡自然生长，最高处矗立着小小的木质钟楼和罗马天主教小教堂，它们守护着整个社区的精神世界。木屋、谷仓、水井、围绕着它们的菜园和果园，以及远处山坡上共享的牧场和森林，共同构成了一个自给自足的微型宇宙。你瞬间就明白了，为什么教科文组织的评语里强调它是“人类与自然环境平衡关系的杰出例证”。在这里，建筑不是征服自然的宣言，而是谦卑的、向自然学习后的产物，每一根木头都诉说着适应当地气候与资源的古老智慧。漫步其中，你仿佛能听见几个世纪以来，村民劈柴、汲水、在壁炉边讲述家族故事的琐碎回音，那是属于平凡人的、坚实而温暖的历史。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子刚拐进山坳，弗尔科利内茨就像一颗被时间不小心遗忘的琥珀，突然撞进眼帘。没有喧嚣，没有招揽生意的招牌，只有一片柔和的色彩安静地趴在大霍霍山翠绿的裙摆上——那是淡黄、浅粉、灰蓝和原木棕的墙壁，像极了孩童用蜡笔认真涂出的方块。摇下车窗，第一股涌入的空气是清冽的，混合着松针、湿润泥土和远处炊烟里一丝丝好闻的木柴燃烧的味道。整个世界的声音仿佛被调低了音量，只剩下风吹过屋顶木瓦片的细微摩擦声，不知谁家后院偶尔传来的一声鸡鸣，还有自己踩在砂石路上那格外清晰的脚步声。这里的时间，粘稠而缓慢。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了看，才发现这些木屋的奇妙。它们彼此挨得那么近，共用着篱笆和小径，仿佛在抱团抵御山间的风雪。墙壁是厚厚的、用原木纵横垒砌的“井干式”结构，木头纹理在经年累月的风吹日晒下变得深邃而温润，摸上去有种粗糙的踏实感。窗户小小的，像一双双好奇又略带羞涩的眼睛，窗台上无一例外地摆满了天竺葵，那喷涌而出的绯红与洋红，是这片木质色调海洋里最活泼、最固执的生命信号。你会看到一位包着头巾的老奶奶，正不慌不忙地在屋旁的菜畦里摘豆角；隔壁的木棚下，整齐地堆放着过冬用的劈柴。这里不是一个被围起来的景点，它就是生活本身，一种与现代效率社会平行却依然顽强呼吸着的生活。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，是那种浑然天成的和谐感。村落依着平缓的山坡自然生长，最高处矗立着小小的木质钟楼和罗马天主教小教堂，它们守护着整个社区的精神世界。木屋、谷仓、水井、围绕着它们的菜园和果园，以及远处山坡上共享的牧场和森林，共同构成了一个自给自足的微型宇宙。你瞬间就明白了，为什么教科文组织的评语里强调它是“人类与自然环境平衡关系的杰出例证”。在这里，建筑不是征服自然的宣言，而是谦卑的、向自然学习后的产物，每一根木头都诉说着适应当地气候与资源的古老智慧。漫步其中，你仿佛能听见几个世纪以来，村民劈柴、汲水、在壁炉边讲述家族故事的琐碎回音，那是属于平凡人的、坚实而温暖的历史。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`弗尔科利内茨`} />
                <InfoRow label="英文名称" value={`Vlkolínec`} />
                <InfoRow label="正式名称" value={`Vlkolínec`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`鲁容贝罗克`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`斯洛伐克境内保存最完整、最原汁原味的传统山地木屋村落，是喀尔巴阡山脉地区民俗建筑的杰出典范，于1993年被列入联合国教科文组织世界文化遗产名录。`} />
                <InfoRow label="建筑特色" value={`由45栋色彩柔和的传统木屋紧密簇拥而成，所有建筑均以原木为框架，填充粘土和稻草，屋顶覆盖着厚重的木片，构成一幅和谐统一的山地聚落全景图。`} />
                <InfoRow label="建筑风格" value={`喀尔巴阡山脉地区独特的民间木结构建筑风格，融合了功能性与朴素的审美，是北欧长屋与本地山地生活智慧结合的产物。`} />
                <InfoRow label="文化价值" value={`它并非一个空壳博物馆，而是一个至今仍有约30位居民真实生活的“活遗产”，生动展示了前工业时代欧洲山地社区与自然共生的可持续生活方式。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`村落公共区域全年全天开放，可自由漫步。其中作为博物馆开放的两栋代表性木屋（编号16和17）的开放时间通常为5月至9月，周二至周日的9:00至16:30，10月至次年4月开放时间缩短或仅周末开放，冬季可能因天气关闭。建议出行前查询鲁容贝罗克市旅游信息中心的最新公告。元旦、复活节、圣诞节等重大节日木屋博物馆大概率关闭。`} />
              <InfoRow label="门票价格" value={`进入村落本身免费。参观编号16和17的木屋博物馆需要购票，成人票约3欧元，学生及儿童票约1.5欧元。有时会提供包含两栋木屋的联票。村口的钟楼内部参观可能需要额外支付少量费用（约1欧元），现场现金支付为主。`} />
              <InfoRow label="地址" value={`Vlkolínec, 034 03 Ružomberok, Slovakia`} />
              <InfoRow label="交通方式" value={`从最近的国际机场（布拉迪斯拉发机场或克拉科夫机场）出发，都需要结合火车和巴士。最经典的路线是从斯洛伐克首都布拉迪斯拉发乘坐火车前往日利纳（Žilina），约2.5-3小时，班次频繁。再从日利纳或更近的鲁容贝罗克（Ružomberok）火车站前，换乘前往“Vlkolínec”的本地巴士。从鲁容贝罗克出发的巴士班次不多，每天大约4-6班，车程约20分钟，上车时告知司机目的地即可购票。自驾是最方便的方式，从鲁容贝罗克市中心沿路标行驶约10分钟即可到达村口停车场，但请注意村落内禁止机动车驶入，需将车停在指定区域。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`弗尔科利内茨的故事，始于喀尔巴阡山脉深处那些无名伐木工和牧羊人的选择。关于它最早的书面记录可以追溯到1376年，但学者们相信，这片背风向阳的山坳，早在13世纪甚至更早，就迎来了第一批定居者。他们为什么在这里停下脚步？答案就在四周的环境里——丰富的森林资源提供了取之不尽的建筑材料和燃料，平缓的坡地适合开垦小片农田，清澈的山泉保证了水源，而高处的牧场则是放牧的天然宝库。最初，这或许只是几个零散的、季节性的定居点，人们在此伐木、放牧，过着半游牧的生活。逐渐地，为了安全与互助，房屋越建越近，形成了今天我们所见的紧密聚落形态。它的名字“Vlkolínec”在当地语中与“狼”有关，或许也暗示了先民们在此与野兽、与严酷自然共生博弈的过往。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在漫长的中世纪和近代，弗尔科利内茨就像欧洲千千万万个偏远山村一样，在历史的宏大叙事边缘默默存在。它隶属于周边的贵族领地，村民多为农奴或自由的农民，生活被季节和劳作严格支配。木材是这里一切的基础。男人们从森林里运回粗大的云杉和冷杉，用斧头和智慧，不费一颗铁钉，就能搭起坚固的屋架。女人们则用粘土、稻草甚至牛粪混合，填充木框架之间的缝隙，创造出保温隔热的墙体。屋顶上覆盖的不是瓦片，而是手工劈制的木瓦，一层压着一层，在雨雪中会自然膨胀闭合，堪称巧妙的生态设计。这种建筑方式代代相传，形成了高度统一又各有细微差别的村落风貌。村中心的钟楼建于1770年，它不仅是报时工具，更是社区凝聚力的象征，其鸣响曾经召集村民、警示危险。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`真正的生存考验来自19世纪末和20世纪。工业化浪潮席卷欧洲，山外的世界日新月异，年轻人开始被工厂和城市吸引，山村不可避免地步向衰落。然而，弗尔科利内茨的偏远，此刻却成了它的“保护伞”。因为交通不便、经济价值不高，它意外地避免了被“现代化改造”的命运，没有铺进水泥路，没有竖起电线杆（直到20世纪中叶），也没有人推倒老屋兴建砖房。它就这样沉睡着，像被按下了暂停键。二战和社会主义时期，集体化运动对这里产生了一定影响，但传统的房屋结构和社区网络依然奇迹般地保存了下来。村民们继续着半农耕半畜牧的生活，只是人口越来越少，房子越来越空。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`命运的转折点发生在20世纪后期。有远见的文化保护者和学者发现了这座“活化石”的非凡价值。1977年，它被宣布为斯洛伐克的“城市保护区”。真正的全球性认可在1993年到来，斯洛伐克独立的同年，弗尔科利内茨被联合国教科文组织列入世界文化遗产名录。评委会被其“真实性”和“完整性”深深打动——这不仅是一片古老的房子，更是一个功能完备、景观和谐的完整社区体系。自此，它从濒临消逝的边缘被拉回，获得了保护与修复的资金。但最可贵的是，保护并没有将居民“请出去”做成空壳博物馆，而是鼓励和支持留下来的居民，在保持传统风貌的前提下改善生活条件。今天，你看到的袅袅炊烟、窗台上的鲜花、菜园里的劳作，都是这份“活态保护”理念最生动的证明。弗尔科利内茨不再仅仅是一个村庄，它成了连接过去与现在、人与自然关系的一把珍贵钥匙。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一个完整的上午或下午，总共预留3-4小时进行沉浸式游览。最佳抵达时间是上午9点或下午2点后，既能避开可能的中午短暂游客潮（如果有旅游巴士的话），光线也更为柔和适合拍照。游览节奏务必“慢”，这里不适合打卡狂奔。从村口停车场的信息板开始，先了解整体布局，然后沿着主路缓步上行，让感官慢慢适应这里的宁静。路线是一个环形，从村口走到最高处的教堂，再从小径迂回下来，沿途细细观察建筑细节和生活场景。这样的安排能让你由远及近、由表及里地体会村落的层次感和生命力。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`请务必保持安静，尊重居民的隐私，不要擅自闯入有围栏或明显是私人居住的院落，拍照时最好先微笑示意。
村落内几乎没有商业设施，仅钟楼附近可能有一个极小的纪念品摊位，请自备饮用水和少量零食，并务必带走所有垃圾。
穿着舒适耐走的平底鞋非常重要，砂石路和山坡小径在雨后可能有些湿滑。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从村口刻有世界遗产标志的木牌和信息板开始，先远眺村落依偎在山怀中的全景，调整呼吸进入慢节奏。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着略微上坡的砂石主路慢慢走，仔细观察右手边第一排木屋各不相同的柔和色彩、精美的木窗框和窗台上争奇斗艳的天竺葵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在村落中心的小空地上驻足，仰望那座深棕色、有着陡峭尖顶的木质钟楼，想象几个世纪以来它的钟声如何统御着这里的日出而作、日落而息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`轻轻推开编号16或17的木屋博物馆虚掩的门（如果开放），弯腰走进低矮的门框，瞬间被古老木材的气味和昏暗但温暖的光线包围，触摸冰冷的传统炉灶和粗糙的木制家具。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`继续上行至村落最高点，站在简朴的罗马天主教小教堂前回望，将层层叠叠的木屋屋顶、远处的森林和山脉一并收入眼底。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从教堂一侧寻找那条更窄、更静谧的下山小径，你会经过居民的后院、堆满柴火的木棚和潺潺流水的古老水井，感受日常生活最私密的一面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`如果体力允许，沿着小径继续往村落边缘的牧场方向走一小段，从稍远的距离再次凝视弗尔科利内茨，看它如何与自然景观完美镶嵌。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`村口停车场旁的观景台`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，用长焦镜头压缩空间，将层层木屋、钟楼和背后的霍霍山一同框入，拍摄村落与自然融合的经典全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`中心钟楼前仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点或下午三点左右，阳光能照亮钟楼本体而非完全逆光时，低角度仰拍，让钟楼的尖顶指向蓝天，木瓦的质感会非常清晰。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`从最高处教堂平台向下俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`下午的光线最佳，可以拍出木屋屋顶木瓦的连绵纹理和丰富色彩，寻找一两个亮色窗台或烟囱作为视觉焦点，让画面更有生气。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`某条小巷的纵深视角`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条两侧木屋排列的小巷，在正午阳光直射时（此时巷内阴影对比强烈）或柔和的漫射光下，聚焦于小巷尽头的光亮处，拍出深邃的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`居民窗台特写`}</h4>
                  <p className="text-sm text-gray-700">{`选择一扇挂着蕾丝窗帘、摆满鲜花的精致木窗，在侧光下拍摄特写，天竺葵的鲜艳与老旧木窗的质感形成强烈对比，充满故事感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尽量避免使用无人机，这会对居民的安宁造成干扰，也可能违反当地规定。拍摄人物，尤其是居民时，请务必先征得对方同意，一个微笑和手势是国际通用语言。多利用自然光影，这里的木材质感在侧光下会展现出惊人的细节。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在山下的鲁容贝罗克市中心，那里有干净舒适的公寓式旅馆或经济型酒店，价格亲民，晚上还能体验斯洛伐克小镇的夜生活，清晨再轻松上山探访古村。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`预订弗尔科利内茨村内极少数由居民经营的“民宿房间”，这通常是屋主将自家闲置房间简单布置而成，条件朴实但位置无敌，让你在游客散尽后独享整个村落的星空与寂静。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车前往附近大拉特里察山区的四星级温泉酒店，那里被森林环绕，拥有完善的温泉SPA和落地窗餐厅，在享受现代舒适的同时，将喀尔巴阡山的壮丽山景作为弗尔科利内茨之旅的完美延续。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`若想入住村内民宿，务必提前数月通过当地旅游网站或鲁容贝罗克旅游信息中心联系预订，数量极少且沟通可能需耐心。鲁容贝罗克小镇治安良好，但夜间娱乐选择不多，更适合喜欢清净的旅行者。山区天气多变，即使夏季夜晚也可能凉爽，预订时请确认住宿是否提供保暖设备。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开弗尔科利内茨许久，那股混合着木头、炊烟和泥土的气息，似乎还萦绕在感官的记忆里。它给我的触动，并非那种面对恢弘教堂或宫殿时的震撼，而是一种深沉的、关于“存在”本身的慰藉。在这个追求更快、更高、更炫目的世界里，它静静地证明着：缓慢、朴素、与周遭环境融为一体，同样是一种强大而坚韧的生存美学。这些木屋没有建筑师签名，却蕴含着比许多现代建筑更深刻的人文与生态智慧。它们不是为永恒而建，却因顺应自然和生活的本质，意外地抵挡了时间的冲刷。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`每一位热爱深度游的旅人，都应该来弗尔科利内茨看一看。它就像一面清澈的镜子，照见我们现代生活中可能已经失落的东西——社区的紧密感、手工的温度、对资源的珍视、与四季同步的节奏。在这里，你会重新思考“进步”的定义。它告诉我们，遗产保护的最高境界，不是将过去制成标本，而是让古老的生命力在当下的呼吸中找到延续的方式。当你穿过那些寂静的小巷，与窗后的老人目光相遇，你会明白，你探访的不是一个景点，而是一个依然跳动的、人类文明的古老心脏。这趟旅程，是一次对宁静的朝圣，也是一次对简单生活可能性的温柔确认。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/spis-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    斯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">斯皮什城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Spiš Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/old-town-presov" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普雷绍夫老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Old Town of Prešov</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trencin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特伦钦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trenčín Castle</p>
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
