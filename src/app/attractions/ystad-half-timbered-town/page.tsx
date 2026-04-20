import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '于斯塔德半木结构小镇 Ystad｜漫步亨宁·曼克尔的犯罪小说舞台与彩绘木屋迷宫 - 最佳欧洲景点',
  description: '穿过火车站旁那道不起眼的拱门，时间仿佛“嘎吱”一声被调慢了。首先迎接你的不是某个地标，而是一种混合的气味——微咸的波罗的海风，混着从街角面包房里飘出的、带着浓郁黄油香的肉桂卷气息，还隐约有一丝老木头在雨后散发的、干净而微甜的味道。眼前就是于斯塔德的老城了，它不是一座孤立的景点，而是当地人日常生活的柔...',
}

export default function YstadHalfTimberedTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '于斯塔德半木结构小镇', href: '/attractions/ystad-half-timbered-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`于斯塔德半木结构小镇・Ystad・瑞典・于斯塔德`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过火车站旁那道不起眼的拱门，时间仿佛“嘎吱”一声被调慢了。首先迎接你的不是某个地标，而是一种混合的气味——微咸的波罗的海风，混着从街角面包房里飘出的、带着浓郁黄油香的肉桂卷气息，还隐约有一丝老木头在雨后散发的、干净而微甜的味道。眼前就是于斯塔德的老城了，它不是一座孤立的景点，而是当地人日常生活的柔软容器。邮差骑着自行车，车筐擦着低矮屋檐下探出的天竺葵花盆而过；一位老先生正用长刷子，无比仔细地为他那栋鹅黄色木屋的窗框补漆，那专注的神情，像是在对待一件传家宝。
阳光在这里变得很具体。它不像在南欧那样泼辣直接，而是斜斜地、温柔地穿过狭窄的街道，在那些由鹅卵石和砖块拼成的路面上，投下窗格和屋檐参差的、明暗分明的影子。你的视线会被无处不在的色彩牵引：草莓红的山墙紧挨着芥末黄的墙面，薄荷绿的门扉映衬着深巧克力色的木梁。这些色彩饱和度很高，却因为历经风雨而褪去了一层火气，呈现出一种温柔又坚定的旧时光质感。你几乎听不到喧哗，只有自己的脚步声、远处港口的隐隐鸥鸣，和某扇虚掩的门后传来的瓷器轻碰的脆响。
这里最奇妙的魅力，在于它双重人格般的特质。表面上，它是明信片般完美、安宁的北欧小镇，是夏日午后躺在草地上晒太阳的慵懒。但每一个书迷都知道，它也是亨宁·曼克尔笔下那个笼罩在迷雾、罪案与人性沉思中的“于斯塔德”。这种现实与虚构的叠影，让漫步其间的体验变得异常丰富。你走过一栋挂着“出售”牌子的可爱小屋，会下意识地想：维兰德探长会不会曾在这里调查过邻居？那种弥漫在清澈空气里的、一丝若有若无的忧郁和悬疑感，才是于斯塔德真正令人着迷的底色。它不是供人远观的标本，而是一个可以走进、触摸、并与之共呼吸的活生生的故事书。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过火车站旁那道不起眼的拱门，时间仿佛“嘎吱”一声被调慢了。首先迎接你的不是某个地标，而是一种混合的气味——微咸的波罗的海风，混着从街角面包房里飘出的、带着浓郁黄油香的肉桂卷气息，还隐约有一丝老木头在雨后散发的、干净而微甜的味道。眼前就是于斯塔德的老城了，它不是一座孤立的景点，而是当地人日常生活的柔软容器。邮差骑着自行车，车筐擦着低矮屋檐下探出的天竺葵花盆而过；一位老先生正用长刷子，无比仔细地为他那栋鹅黄色木屋的窗框补漆，那专注的神情，像是在对待一件传家宝。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`阳光在这里变得很具体。它不像在南欧那样泼辣直接，而是斜斜地、温柔地穿过狭窄的街道，在那些由鹅卵石和砖块拼成的路面上，投下窗格和屋檐参差的、明暗分明的影子。你的视线会被无处不在的色彩牵引：草莓红的山墙紧挨着芥末黄的墙面，薄荷绿的门扉映衬着深巧克力色的木梁。这些色彩饱和度很高，却因为历经风雨而褪去了一层火气，呈现出一种温柔又坚定的旧时光质感。你几乎听不到喧哗，只有自己的脚步声、远处港口的隐隐鸥鸣，和某扇虚掩的门后传来的瓷器轻碰的脆响。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里最奇妙的魅力，在于它双重人格般的特质。表面上，它是明信片般完美、安宁的北欧小镇，是夏日午后躺在草地上晒太阳的慵懒。但每一个书迷都知道，它也是亨宁·曼克尔笔下那个笼罩在迷雾、罪案与人性沉思中的“于斯塔德”。这种现实与虚构的叠影，让漫步其间的体验变得异常丰富。你走过一栋挂着“出售”牌子的可爱小屋，会下意识地想：维兰德探长会不会曾在这里调查过邻居？那种弥漫在清澈空气里的、一丝若有若无的忧郁和悬疑感，才是于斯塔德真正令人着迷的底色。它不是供人远观的标本，而是一个可以走进、触摸、并与之共呼吸的活生生的故事书。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`于斯塔德半木结构小镇`} />
                <InfoRow label="英文名称" value={`Ystad`} />
                <InfoRow label="正式名称" value={`Ystad`} />
                <InfoRow label="国家" value={`瑞典`} />
                <InfoRow label="城市" value={`于斯塔德`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`瑞典保存最完好的半木结构建筑群之一，同时也是世界级犯罪小说大师亨宁·曼克尔笔下“探长维兰德”系列故事的地理与精神故乡。`} />
                <InfoRow label="建筑特色" value={`密集而鲜艳的17-18世纪低矮木结构房屋，白色窗框勾勒出巧克力色的木筋墙，屋顶覆盖着红色或锈红色的陶瓦，形成童话般的街道肌理。`} />
                <InfoRow label="建筑风格" value={`以北欧本土半木结构建筑风格为主，融合了部分德国汉萨同盟时期的影响，质朴而充满生活气息。`} />
                <InfoRow label="文化价值" value={`一座活生生的中世纪小镇博物馆，其宁静祥和的现实生活与全球闻名的犯罪文学中的阴郁氛围形成奇妙而迷人的反差，是理解瑞典斯科讷地区历史与当代文化的独特窗口。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`公共区域全天开放。主要博物馆和景点（如于斯塔德修道院、警察局长故居博物馆）通常开放时间为：夏季（6月至8月）10:00-18:00，每日开放；春秋季（5月、9月）11:00-16:00，周一可能闭馆；冬季（10月至次年4月）开放时间缩短，部分景点仅在周末开放或需预约。重要节日如圣诞节、仲夏夜前夕可能关闭，建议行前在官网确认。`} />
              <InfoRow label="门票价格" value={`小镇本身免费参观。内部各博物馆单独收费，例如于斯塔德修道院成人票约80-100瑞典克朗，警察局长故居博物馆约60瑞典克朗。通常提供联票优惠。18岁以下青少年及儿童免费，学生和老年人享有折扣。建议购买“于斯塔德文化卡”（如有），可畅游多家博物馆。`} />
              <InfoRow label="地址" value={`Stortorget, 271 43 Ystad, Sweden`} />
              <InfoRow label="交通方式" value={`从哥本哈根凯斯楚普机场（CPH）出发最为便捷：搭乘机场火车站（位于航站楼内）的厄勒列车（Öresundståg）直达于斯塔德，车程约1小时15分钟，班次频繁（每小时至少1-2班）。从瑞典马尔默中央车站出发，火车车程仅35-40分钟，班次密集。所有火车票建议提前通过瑞典国铁（SJ）或厄勒列车官网购买，常有折扣。小镇内部核心区域完全步行可达，无需任何公共交通。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`于斯塔德的故事，始于波罗的海波涛拍打的沙滩。早在11世纪，这里就是一个繁忙的渔港和贸易点，它的名字“Ystad”源自古语，意思就是“港口之地”。真正让它成型并繁荣起来的，是中世纪强大的汉萨同盟。作为同盟网络中的一员，来自德国吕贝克的商人和工匠带来了资金、技术和建筑风格。你现在看到的这些半木结构（Fachwerk）房屋的核心建造技艺，正是那个时代文化交流的活化石。木材来自斯堪的纳维亚广袤的森林，而设计与建造的逻辑则带着中欧的印记，它们共同塑造了这座小镇最初的骨架。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，木头之城总是与火的阴影相伴。历史记载中，于斯塔德遭受过数次毁灭性的大火，最严重的一次发生在17世纪中期。灾难之后，小镇并没有放弃这种“脆弱”的建筑方式，反而以更严格的规定进行重建：街道被拓宽（虽然现在看来依然很窄），房屋之间的间距被要求留出，以试图阻止火魔的蔓延。我们今天看到的绝大多数色彩缤纷的木屋，都是那场大火涅槃后的产物。它们不是王公贵族的宫殿，而是普通商人、手工业者和渔民的家。每一根裸露的梁木，每一块填补其间的砖石，都诉说着寻常百姓家对生活的韧性与热爱。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转，当工业革命的钢铁与砖石浪潮席卷欧洲时，偏安一隅的于斯塔德却意外地被“遗忘”了。它没有经历大规模的城市改造，那些低矮的木屋群得以完整保留，仿佛一个被封存在琥珀中的中世纪梦。这份“落后”，在20世纪后成了它最宝贵的财富。当人们开始珍视历史遗产时，于斯塔德几乎原汁原味的街道景观让它一跃成为国宝。保护与修复成了小镇的共识，居民们以近乎执拗的细心维护着房屋的原貌，用的还是传统的颜料和工艺，让历史的色彩在现代阳光下持续焕新。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`当然，让于斯塔德从瑞典走向全球的，是一支笔。当地作家亨宁·曼克尔将这里设定为他笔下忧郁探长库尔特·维兰德一系列破案故事的发生地。曼克尔笔下的于斯塔德，常常是秋雾弥漫、冬夜漫长、犯罪在宁静表面下暗流涌动的地方。奇妙的是，文学并没有吓跑游客，反而为这座小镇披上了一层引人入胜的神秘面纱。全球的书迷和剧迷（BBC曾拍摄电视剧集）纷至沓来，按图索骥地寻找小说中的场景。现实中美如童话的街景，与文学中阴郁沉重的氛围，构成了独一无二的张力，也让于斯塔德完成了从历史古镇到文化符号的华丽转身。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（至少8小时）来沉浸式体验于斯塔德。最好的方式是前一晚住下，次日清晨开始探索。上午九点前抵达老城，此时阳光柔和，游客稀少，店铺刚开，你能看到小镇最本真的苏醒模样。用整个上午慢悠悠地穿行在错综复杂的木屋街区，不设具体目标，允许自己迷路。下午重点参观一两个博物馆，并在咖啡馆静静感受时光。傍晚时分，一定要走到小镇边缘的港口或沙滩，看波罗的海的落日为所有木屋的屋顶镀上金光。这样的节奏既能捕捉光影最美的时刻，也能深入体会小镇日夜交替的不同情绪。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇石板路和鹅卵石路对行李箱轮子和高跟鞋极不友好，务必穿一双绝对舒适耐走的平底鞋。
夏季是旅游旺季，但即便是这时，只要避开正午时分的主广场，钻进小巷里依然能找到清净角落；冬季店铺关门早且氛围冷清萧瑟，却是体验曼克尔小说中阴郁氛围和拍摄无人街景的绝佳时机。
不必执着于寻找某个特定小说场景，整个小镇就是维兰德的世界，沉浸在这种感觉里比打卡更重要。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从古老的圣玛利亚教堂的赭红色砖塔下出发，让钟楼整点的悠扬钟声为你一天的漫步定下舒缓的基调。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`随意拐进教堂后方那条名为“Östergatan”的狭窄巷子，用手指轻轻拂过那些被数百年风雨打磨得温润光滑的深色木梁。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在街角那家总飘着新鲜烘焙香气的小咖啡馆驻足，点一杯醇厚的北欧黑咖啡配上一块苹果派，坐在窗边看来往的当地人亲切地互相问候。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻访那栋挂着“警察局长故居博物馆”铭牌的亮黄色建筑，进去听听这座房子与真实历史中维持小镇秩序的故事，并与虚构的维兰德探长产生联结。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着宁静的“Klostergatan”漫步至于斯塔德修道院遗址，在荒芜的修道院回廊花园里长椅上坐一会儿，感受历史宗教肃穆与如今田园诗意交织的奇特宁静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在下午的斜阳中走向小镇东侧的“Sjukhusparken”公园，从这里回望，能看到层层叠叠、色彩斑斓的木屋屋顶如积木般铺展向远方的海平面。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐前溜达到港口区，看归航的渔船和休闲的帆船在波光粼粼的水面上轻轻摇晃，空气里是清新的海藻味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当夜幕低垂、路灯初上时，再次绕回老城中心广场，看暖黄色的灯光从一扇扇小方格窗户里透出来，将木屋的轮廓烘托得无比温暖而神秘。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`圣玛利亚教堂钟楼顶部俯瞰`}</h4>
                  <p className="text-sm text-gray-700">{`登上教堂钟楼（夏季开放），用广角镜头捕捉整个老城棋盘般规整又斑斓的屋顶海洋与远处深蓝色波罗的海的交汇，最佳光线在日出后或日落前一小时。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`Östergatan与Klostergatan交叉口`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光西斜，能照亮小巷一侧的木屋立面，利用狭窄街道形成的自然引导线构图，拍出木屋屋檐交错、光影深邃的纵深感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`某扇色彩鲜艳的门扉特写`}</h4>
                  <p className="text-sm text-gray-700">{`寻找一扇漆着完美蓝色或绿色、配有黄铜门环和白色蕾丝窗帘的门，用大光圈镜头贴近拍摄，将背景虚化成柔和的光斑，营造故事感十足的细节画面。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`港口防波堤回望小镇`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚蓝调时刻，走到港口的防波堤上，用长焦镜头压缩空间，将港口路灯的暖光、木屋的轮廓线与天空的深蓝一并收纳，拍出小镇静谧的临海之夜。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇边缘的沙滩视角`}</h4>
                  <p className="text-sm text-gray-700">{`退潮时，走到镇东的沙滩上，将前景的潮湿沙面反射的天光、中景的杂草与后景连成片的木屋侧面一同构图，能拍出不同于街道内部的开阔与宁静。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`尊重当地居民隐私，避免将镜头直接对准住户的窗户或私人庭院内部，北欧人非常注重个人空间。`}</li>
                <li>• {`冬季雪后是摄影的黄金时间，白雪覆盖的红色屋顶和彩色的木墙对比极度上镜，但需注意相机保暖和防潮。`}</li>
                <li>• {`利用雨后湿润的石板路反射街灯和房屋倒影，能极大地增加画面的氛围感和色彩饱和度。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`历史沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`下榻于一栋经过精心修复的18世纪半木结构房屋改造的精品酒店，楼梯会随着你的脚步发出悦耳的吱呀声，房间里是裸露的原木横梁和古雅的花卉壁纸，窗台外就是老街风景。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`文艺书迷特供`}</h4>
                  <p className="text-sm text-green-800">{`选择一家以“维兰德”或犯罪文学为主题设计的小型旅馆或民宿，房间里可能放着曼克尔的小说，地图上标出了关键故事地点，主人能跟你聊上一整晚关于小镇的传奇。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`海景静谧享受`}</h4>
                  <p className="text-sm text-yellow-800">{`住在老城边缘或港口附近一家现代设计的舒适酒店，房间拥有全景落地窗，直面波罗的海的日出与帆影，在喧嚣的游客潮退去后，独享一份北欧的宁静与开阔。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-purple-800">{`位于火车站附近步行五分钟内的清新旅舍或公寓式酒店，由老建筑改造，设施现代，方便拖行李，并且能轻松往返马尔默或哥本哈根，是探索斯科讷地区的理想基地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`夏季（6-8月）的住宿非常紧俏，尤其是老城内的特色酒店，务必提前数月预订。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`老城内的酒店大多没有电梯，且房间可能较小，预订时需留意；如果追求空间和安静，港口或稍远一点的居民区是更好选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`许多家庭式民宿提供丰盛的有机早餐，常包含本地特色的奶酪、浆果和黑麦面包，这绝对是开启一天完美探索的重要部分。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开于斯塔德许久后，闭上眼睛，脑海里浮现的不是某个具体的房子或广场，而是一种整体的、氤氲的氛围。那是木头发出的柔和光泽，是海风带来的清冽，是咖啡与肉桂交织的暖香，更是一种在别处罕见的、安宁与悬疑共生的奇妙感受。这座小镇教会我，深度旅行不只是看风景，更是去感知一个地方的“情绪”。于斯塔德的情绪是复杂的，它明媚如童话，却又因文学的浸润而带着一丝人性的深思与忧郁的底色。这种复杂性，让它脱离了单纯的“美丽”范畴，变得有了厚度和嚼头。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都在快速迭代的世界里，于斯塔德像一位笃定的守护者，它用色彩和木头，温柔地抵抗着时间的同质化。它不张扬，不喧哗，只是静静地待在瑞典的南端，告诉你：生活可以有一种更缓慢、更专注的质地。每一扇需要亲手油漆的窗，每一块需要细心维护的木梁，都是这种生活哲学的宣言。对于每一位渴望在旅途中获得内心平静与文化共鸣的深度旅者来说，于斯塔德绝非一个过路站。它是一个值得你停下脚步、住上一晚、让自己的呼吸节奏与小镇的脉搏同步的地方。在这里，你会找到故事，找到色彩，更会找到那个在喧嚣日常中，被我们偶尔遗忘的、宁静而丰盛的自己。它是一本立体的书，一幅行走的画，更是一首关于时间与存在的、悠长的北欧诗篇。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
