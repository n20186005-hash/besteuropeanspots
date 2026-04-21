import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '基莫洛斯岛 Kimolos｜探访米洛斯旁的隐世火山岛，走进时间静止的纯白村落与古老温泉 - 最佳欧洲景点',
  description: '当渡轮缓缓靠近普萨西港，第一眼看到的基莫洛斯，像一块被随意丢弃在蔚蓝爱琴海中的巨大浮石。空气中弥漫着一股干燥的、混合着咸海风、野生百里香和炙热阳光的气味。码头上没有成群的旅行社揽客者，只有零星几个皮肤晒成古铜色的老人，坐在咖啡馆的阴影里，用深邃的目光平静地打量着每一个上岸的陌生人。这种最初的寂静，不',
}

export default function KimolosIslandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '基莫洛斯镇（亦称霍拉）', href: '/destinations/europe' },
            { label: '基莫洛斯岛', href: '/attractions/kimolos-island' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`基莫洛斯岛・Kimolos・希腊・基莫洛斯镇（亦称霍拉）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当渡轮缓缓靠近普萨西港，第一眼看到的基莫洛斯，像一块被随意丢弃在蔚蓝爱琴海中的巨大浮石。空气中弥漫着一股干燥的、混合着咸海风、野生百里香和炙热阳光的气味。码头上没有成群的旅行社揽客者，只有零星几个皮肤晒成古铜色的老人，坐在咖啡馆的阴影里，用深邃的目光平静地打量着每一个上岸的陌生人。这种最初的寂静，不是荒凉，而是一种充满力量的接纳——仿佛岛屿在告诉你：按照你自己的节奏来。
沿着唯一的主路向上，走向那个悬挂在半山腰的纯白村落——乔里奥。走近了才发现，这白色并非简单的粉刷。房屋的墙体是用本地的火山岩碎块混合灰泥砌成，再涂上厚实的白灰，经过数百年的海风侵蚀，表面形成了粗糙而富有颗粒感的肌理，在正午的阳光下，白得耀眼，白得近乎神圣。穿行在迷宫般的小巷里，脚下是磨损得光滑的火山石板路，两旁是点缀着宝蓝色门窗的雪白墙壁，九重葛的紫红色花朵如瀑布般从墙头倾泻而下。你听不到喧闹的音乐，只有自己的脚步声、远处传来的零星狗吠，以及风穿过狭窄巷弄时发出的、如同叹息般的呜咽声。偶尔，一扇虚掩的木门后，会飘出新鲜咖啡和烘焙甜点的香气，那是某位老奶奶正在为全家人准备下午茶。
这个村落不是博物馆里的模型，它是依然跳动的心脏。你会看到老妇人坐在门前的椅子上剥豆子，她们的黑色头巾与身后的白墙形成鲜明的剪影；猫咪在阴凉处慵懒地打着盹；晾晒的白色床单在微风中轻轻摆动，投下变幻的光影。乔里奥没有为了游客而表演生活，它只是在自顾自地生活着，而你的到来，只是它漫长日子里一个安静的注脚。这种真实感，这种未被商业气息浸染的日常韵律，才是基莫洛斯最核心、也最打动人心的魅力。它让你忘记时间，只想成为这静谧画卷中一个无声的移动像素。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "当渡轮缓缓靠近普萨西港，第一眼看到的基莫洛斯，像一块被随意丢弃在蔚蓝爱琴海中的巨大浮石。空气中弥漫着一股干燥的、混合着咸海风、野生百里香和炙热阳光的气味。码头上没有成群的旅行社揽客者，只有零星几个皮肤晒成古铜色的老人，坐在咖啡馆的阴影里，用深邃的目光平静地打量着每一个上岸的陌生人。这种最初的寂静，不是荒凉，而是一种充满力量的接纳——仿佛岛屿在告诉你：按照你自己的节奏来。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "沿着唯一的主路向上，走向那个悬挂在半山腰的纯白村落——乔里奥。走近了才发现，这白色并非简单的粉刷。房屋的墙体是用本地的火山岩碎块混合灰泥砌成，再涂上厚实的白灰，经过数百年的海风侵蚀，表面形成了粗糙而富有颗粒感的肌理，在正午的阳光下，白得耀眼，白得近乎神圣。穿行在迷宫般的小巷里，脚下是磨损得光滑的火山石板路，两旁是点缀着宝蓝色门窗的雪白墙壁，九重葛的紫红色花朵如瀑布般从墙头倾泻而下。你听不到喧闹的音乐，只有自己的脚步声、远处传来的零星狗吠，以及风穿过狭窄巷弄时发出的、如同叹息般的呜咽声。偶尔，一扇虚掩的木门后，会飘出新鲜咖啡和烘焙甜点的香气，那是某位老奶奶正在为全家人准备下午茶。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这个村落不是博物馆里的模型，它是依然跳动的心脏。你会看到老妇人坐在门前的椅子上剥豆子，她们的黑色头巾与身后的白墙形成鲜明的剪影；猫咪在阴凉处慵懒地打着盹；晾晒的白色床单在微风中轻轻摆动，投下变幻的光影。乔里奥没有为了游客而表演生活，它只是在自顾自地生活着，而你的到来，只是它漫长日子里一个安静的注脚。这种真实感，这种未被商业气息浸染的日常韵律，才是基莫洛斯最核心、也最打动人心的魅力。它让你忘记时间，只想成为这静谧画卷中一个无声的移动像素。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`基莫洛斯岛`} />
                <InfoRow label="英文名称" value={`Kimolos`} />
                <InfoRow label="正式名称" value={`Kimolos`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`基莫洛斯镇（亦称霍拉）`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在爱琴海历史长河中始终保持低调本色的火山岛屿，是基克拉迪群岛文明中鲜活的“隐士”与民俗博物馆。`} />
                <InfoRow label="建筑特色" value={`岛屿核心乔里奥村落是一座由纯白色立方体房屋、曲折小巷和拱形门廊构成的立体迷宫，完美适应了岛上的强风与火山地形。`} />
                <InfoRow label="建筑风格" value={`典型的基克拉迪群岛建筑风格，极简、纯白、阶梯状，功能主义与美学的高度统一。`} />
                <InfoRow label="文化价值" value={`这里保存了一种近乎停滞的、以渔业、采矿和家族传承为核心的岛屿生活方式，是观察未被大众旅游侵蚀的希腊岛屿灵魂的绝佳窗口。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`岛屿全年可到访，但最佳旅游季节为每年5月至10月。岛上主要村落乔里奥（Chorio）的街道和小店全天开放。关键景点：基莫洛斯民俗博物馆开放时间较为灵活，通常在夏季（6-9月）的上午10点至下午2点及下午6点至晚上9点开放，冬季可能仅周末开放或需预约。斯基亚蒂海滩温泉为天然地热区，24小时开放，但建议白天前往。请注意，希腊许多小岛在冬季（11月至次年3月）渡轮班次大幅减少，部分餐厅和旅馆会歇业。`} />
              <InfoRow label="门票价格" value={`进入基莫洛斯岛本身无需门票。主要收费点：基莫洛斯民俗博物馆门票约3欧元。斯基亚蒂天然温泉免费向公众开放。岛上所有教堂均可免费进入参观。`} />
              <InfoRow label="地址" value={`Kimolos, 840 04, 南爱琴大区，希腊`} />
              <InfoRow label="交通方式" value={`基莫洛斯岛没有机场，需通过海路抵达。最常用的路线是：先从雅典国际机场（ATH）乘车或地铁前往雅典的比雷埃夫斯港口（约1小时）。从比雷埃夫斯港乘坐渡轮直达基莫洛斯岛（行程约4-7小时，取决于船型；高速水翼船更快但班次较少且受天气影响），或更常见、更灵活的方式是先乘渡轮到相邻的米洛斯岛（Milos，航程约2.5-5小时）。从米洛斯岛的首府阿达玛斯港，有频繁的短途渡轮（当地人称为“kaïkia”的小船）前往基莫洛斯岛的普萨西港（Psathi），航程仅20-30分钟，几乎每小时一班。建议在抵达米洛斯后现场购买前往基莫洛斯的船票。岛上交通可租借小型摩托车或ATV（全地形车），也可乘坐稀少的本地出租车，但最推荐的是用双脚探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "基莫洛斯的名字，在古希腊语中意为“白垩”，直指它火山起源的本质——岛上富含的硅镁矿，一种柔软的白色土壤，在古代被用作肥皂或粉笔。它的故事，与其辉煌的邻居米洛斯相比，显得格外谦逊而坚韧。神话中，它是巨人与神的战场遗骸，地质学则证实它是一座古老的火山，喷发出的火山灰和浮石塑造了它多孔而苍白的肌体。在青铜时代，它已有人居住，但从未发展出强大的城邦，更像是一个安静的瞭望哨，注视着爱琴海上的风云变幻。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "中世纪的基莫洛斯，命运与其地理紧密相连。为了躲避肆虐的海盗，岛民放弃了沿海的定居点，集体迁往岛屿中央易守难攻的山丘。这就是乔里奥村的起源。他们用当地的火山石，像筑巢的鸟儿一样，一层一层、一户一户地向上堆砌，最终形成了一个外部浑然一体、内部曲折相连的堡垒式村落。狭窄的巷子、高耸的墙壁、隐秘的拱门，所有这些设计最初都是为了防御。威尼斯人和后来的奥斯曼土耳其人都曾统治过这里，但他们留下的痕迹很淡，更像是一层薄薄的釉彩，覆盖在岛屿本身坚硬的底色之上。岛民们始终过着以农业、少量采矿和渔业为生的封闭生活，这种内向性塑造了它保守而团结的社区性格。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "19世纪，随着希腊独立，基莫洛斯迎来了短暂的“白黄金”时代。岛上出产的硅镁矿（当地人称“kimolia”）因其优异的清洁和漂白特性，成为重要的出口商品，远销至埃及甚至欧洲。你可以想象，在那个时代，码头上或许也曾繁忙一时，装载着白色粉末的船只驶向远方。采矿带来了些许繁荣，也在乔里奥催生了几座略显华丽的“豪宅”（以岛上的标准而言）和那令人惊叹的拥有多个穹顶的教堂。然而，这繁荣如同海上的泡沫。随着化学工业的发展，人造清洁剂取代了天然硅镁矿，岛上的经济命脉骤然萎缩。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "正是这种经济的衰落，意外地成为了文化遗产的保鲜剂。当希腊其他岛屿如米科诺斯、圣托里尼在旅游大潮中改头换面时，基莫洛斯因为缺乏“资本”而被时代遗忘在了后面。年轻人大量外流前往雅典或海外谋生，留下的主要是老人。时间在这里仿佛被调慢了速度。那些为了防御海盗而建的巷弄，如今只为猫咪和散步的老人提供荫凉；曾经运输矿石的骡道，现在成了徒步者前往隐秘海滩的小径。这种“停滞”，从发展的角度看或许是悲哀的，但从文化保存的角度看，却是一次珍贵的“冻结”。今天的乔里奥，不是一个重建的“迪士尼式”希腊村落，而是一本依然在缓慢书写的、关于坚韧、适应与寂静的活态编年史。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正品味基莫洛斯，你需要完整的一天，并抱着一颗慢下来的心。建议从米洛斯岛乘坐早班船（约上午9点）抵达普萨西港，这样你就能在日光最柔和、村落最宁静的上午探索乔里奥。整体游览大约需要6-7小时，节奏务必舒缓。这样的安排让你能避开正午最烈的日头在最酷热的时分进行轻松的徒步或海滩活动，并在傍晚享受最柔美的光线。路线将从港口开始，向上征服村落，再向下来到岛屿最具特色的自然奇观，最后以海滩放松收尾，形成一个完美的闭环。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`岛上商店和餐厅营业时间极其随意，甚至看心情，务必随身带一瓶水和一点零食以备不时之需。
徒步前往温泉和海滩时，务必穿一双结实防滑的鞋子，火山岩路面非常粗糙且锋利，凉鞋或拖鞋是冒险行为。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清早从普萨西港下船，别急着坐车，沿着那条蜿蜒的上坡路慢慢步行约20分钟，感受身体逐渐靠近那座悬浮般的白色堡垒。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一头扎进乔里奥村如迷宫般的核心区，放弃地图，任由自己被那些仅容一人通过的拱形小巷和突然出现的死胡同带着走，享受迷路的乐趣。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要在村落中心广场那家老旧的Kafeneio（传统咖啡馆）坐下，点一杯浓厚的希腊咖啡，看老人们玩塔罗牌，听他们用你听不懂的方言高声交谈。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`寻着标志找到基莫洛斯民俗博物馆，在那座古老宅邸里花上一小时，看看那些蕾丝衣物、采矿工具和旧照片，它们会瞬间为你眼前的村落注入灵魂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从村落西侧找一条下山的小径，开始一场约40分钟、风景壮丽的徒步，目标是岛屿西南角那处蒸汽袅袅的斯基亚蒂天然地热温泉。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在温泉区尝试寻找那个被海浪冲刷而成的天然岩池，感受冷热海水交汇的神奇触感，静静聆听蒸汽从火山岩缝隙中嘶嘶冒出的声音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`折返前往岛屿东侧最负盛名的阿利基沙滩，躺在独特的白色鹅卵石上，跳进由绿松石渐变为宝蓝的海水里，彻底洗去疲惫。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在日落前回到普萨西港附近的小酒馆，点上一盘当天捕捞的油炸小鱼和岛产葡萄酒，看着夕阳把白色的乔里奥村染成蜜糖般的金色。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`乔里奥村全景远眺点`}</h4>
                  <p className="text-sm text-gray-700">{`从普萨西港通往村落的半山腰拐弯处，上午顺光，用长焦镜头压缩空间，将蔚蓝大海作为背景，拍下村落层层叠叠、宛若白色积木堆砌的震撼全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`迷宫小巷的构图框`}</h4>
                  <p className="text-sm text-gray-700">{`在乔里奥村内，寻找那些由雪白墙壁和宝蓝色门窗构成的狭长巷弄，利用拱门或门洞作为天然画框，等待一个当地人（尤其是穿黑衣的老妇人）或一只猫咪走入画面的瞬间，捕捉静谧的生活感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`斯基亚蒂天然温泉蒸汽大片`}</h4>
                  <p className="text-sm text-gray-700">{`在温泉区的黑色火山岩海岸，等待海浪退去的间歇，蹲低机位，将蒸腾的白色地热蒸汽作为前景，对焦后方湛蓝的海面和礁石，营造神秘而原始的氛围。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`风车观景台日落`}</h4>
                  <p className="text-sm text-gray-700">{`位于乔里奥村最高点的古老风车遗址，傍晚时分，面向西方，拍摄落日沉入爱琴海，余晖将整个白色村落和风车残骸勾勒出温暖轮廓的经典画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`阿利基沙滩的色彩对比`}</h4>
                  <p className="text-sm text-gray-700">{`在阿利基沙滩，将镜头贴近那些被海水打磨得光滑的纯白色鹅卵石，以它们为前景，背景是层次分明的绿松石色海水和远处海蚀崖的彩色岩层，展现大自然调色盘般的魔力。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄当地居民，尤其是长者，务必先微笑并获得对方默许，尊重他们的隐私，这是最基本的礼节。`}</li>
                <li>• {`正午阳光极其强烈，容易导致画面过曝和生硬阴影，尽量利用清晨和黄昏的“黄金时刻”与“蓝色时刻”进行拍摄。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`港口旁的简约之家`}</h4>
                  <p className="text-sm text-blue-800">{`普萨西港附近由渔民老屋改造的家庭旅馆，主人会送你自制的果酱，晚上能听到轻柔的海浪声，出门就是最早一班渡轮。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`白色迷宫中的传统宅邸`}</h4>
                  <p className="text-sm text-green-800">{`乔里奥村内经过精心修复的石屋，保留了原始的拱顶和厚墙，凉爽无比，拥有一个可以俯瞰层层屋顶和远处大海的私人小露台。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`隐居式精品套房`}</h4>
                  <p className="text-sm text-yellow-800">{`位于岛屿宁静北部海岸的独栋小屋，设计极简而优雅，带私人泳池，完全远离人群，适合追求绝对静谧和星空的情侣或隐士。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`背包客的社交营地`}</h4>
                  <p className="text-sm text-purple-800">{`靠近阿利基沙滩的露营地，提供简单的宿舍床位和帐篷位，氛围轻松友好，是结识国际旅行者、分享故事的好地方。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "基莫洛斯的住宿数量非常有限，且在夏季（7-8月）很快订满，务必提前数月预订，临时找房几乎不可能。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "选择住在乔里奥村意味着需要爬坡，但能获得最地道的体验；选择港口或海滩附近则交通和游泳更方便，但夜间可能更安静（甚至有些冷清）。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开基莫洛斯时，我皮肤上仿佛还残留着火山岩的粗糙触感和海风的咸味，但心里却异常平静。这座岛没有给我任何视觉上的“爆点”或打卡的成就感，它给予的是一种更珍贵的东西：一种关于“存在”本身的质感。在这里，美不是被精心设计和展示的，而是生活的自然流露。那白色的墙壁是为了反射酷暑，弯曲的小巷是为了抵御狂风，安静的节奏是因为人口的老去。一切都有其根源，一切都不为取悦外人而存在。这种“本真性”，在当今被社交媒体和过度旅游重塑的世界里，几乎已成奢侈品。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，基莫洛斯不适合那些追求便利、娱乐和 Instagram 高赞照片的匆匆过客。它是一面镜子，映照出旅人内心的节奏。如果你愿意慢下来，愿意接受一种略显不便的朴素，愿意在寂静中聆听自己的心跳和海风的回声，那么这座小岛就会向你敞开它全部的温柔与深邃。它会告诉你，还有一种旅行，不是为了逃离，而是为了回归——回归到一种更简单、更诚实、与土地和海洋紧密相连的生活节奏里。在这个意义上，探访基莫洛斯，不仅仅是一次地理上的位移，更是一次向内行走的心灵疗愈。它提醒我们，在爱琴海璀璨的星群中，总有一些星辰选择默默发光，而它们的光芒，只为那些懂得仰望寂静夜空的人而存在。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/agios-nikolaos-crete" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿约斯尼古拉奥斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Agios Nikolaos</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/acrocorinth" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿克罗科林斯</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Acrocorinth</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/corfu-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    科
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">科孚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Corfu Old Town</p>
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
