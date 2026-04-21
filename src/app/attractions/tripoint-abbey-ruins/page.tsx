import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '三国交界点与圣本笃修道院遗迹 Tripoint & St. Benedict Abbey Ruins｜探寻森林深处消逝的边界与信仰 - 最佳欧洲景点',
  description: '说实话，如果你只是跟着导航开车到停车场，第一眼可能会有点失望。没有巍峨的立面和宏伟的广场，只有一片茂密到近乎幽暗的混合林，空气里是浓重的、带着甜腥气的腐烂树叶和湿润泥土的味道。耳朵里最先捕捉到的，是绝对、彻底的寂静，随后才是风吹过山毛榉和橡树林顶的沙沙声，以及不知藏在何处的啄木鸟发出的、规律得像节拍',
}

export default function TripointAbbeyRuinsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '三国交界点与圣本笃修道院遗迹', href: '/attractions/tripoint-abbey-ruins' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`三国交界点与圣本笃修道院遗迹・Tripoint & St. Benedict Abbey Ruins・比利时・维塞`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`说实话，如果你只是跟着导航开车到停车场，第一眼可能会有点失望。没有巍峨的立面和宏伟的广场，只有一片茂密到近乎幽暗的混合林，空气里是浓重的、带着甜腥气的腐烂树叶和湿润泥土的味道。耳朵里最先捕捉到的，是绝对、彻底的寂静，随后才是风吹过山毛榉和橡树林顶的沙沙声，以及不知藏在何处的啄木鸟发出的、规律得像节拍器一样的“笃笃”声。你需要沿着一条被树根顶得凹凸不平的碎石小径走上一段，才能与它相遇。
然后，景象就豁然开朗了。不，不是那种视觉上的冲击，而是一种时空错置的恍惚感。左边，是几堵沉默的、被苔藓染成墨绿色的残墙，巨大的罗马式拱券轮廓依稀可辨，但中间早已空无一物，只剩下天空。石缝里倔强地探出一丛丛野蔷薇。而右边，不到一百米处，却立着一个极具现代感的、由三根灰色混凝土柱构成的雕塑，它们以一种精确的角度相互依偎，冰冷、抽象、充满设计感。一边是缓慢的、被自然回收的消亡，另一边则是人为的、清晰的标记。这种并置本身，就充满了故事感。
你会发现，来这里的人很少是高声喧哗的游客。有穿着专业徒步装备、挂着登山杖的老人，安静地阅读着遗迹旁的解说牌；有年轻的情侣，手牵手踩着那些散落在草地上的、刻有模糊纹章的石块；甚至能看到附近村庄的居民，只是带着狗来这里例行散步。它不像一个景点，更像一片被当地人内化了的“后花园”，一个可以同时思考历史、自然与政治的冥想之地。它的核心魅力，就在于这种多重层次的叠加：你脚下同时踩着三个现代国家的领土，眼睛看着中世纪信仰的废墟，而身心沉浸在一片不受任何国界约束的、古老森林的呼吸之中。
最打动人的，或许是那种“消逝感”。国界，曾经是需要用堡垒和鲜血捍卫的线条，如今成了一个可以轻松跨越、甚至被做成纪念品印章的概念。修道院，曾经是知识、权力与信仰的中心，如今只剩供人凭吊的骨骼。但在这片土地上，消逝并非终结，而是一种转化。边界转化为了合作的象征，信仰的废墟转化为了美的客体与历史的课堂。这里没有胜利者的喧嚣，只有时间这位终极仲裁者，留下的平静证据。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说实话，如果你只是跟着导航开车到停车场，第一眼可能会有点失望。没有巍峨的立面和宏伟的广场，只有一片茂密到近乎幽暗的混合林，空气里是浓重的、带着甜腥气的腐烂树叶和湿润泥土的味道。耳朵里最先捕捉到的，是绝对、彻底的寂静，随后才是风吹过山毛榉和橡树林顶的沙沙声，以及不知藏在何处的啄木鸟发出的、规律得像节拍器一样的“笃笃”声。你需要沿着一条被树根顶得凹凸不平的碎石小径走上一段，才能与它相遇。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然后，景象就豁然开朗了。不，不是那种视觉上的冲击，而是一种时空错置的恍惚感。左边，是几堵沉默的、被苔藓染成墨绿色的残墙，巨大的罗马式拱券轮廓依稀可辨，但中间早已空无一物，只剩下天空。石缝里倔强地探出一丛丛野蔷薇。而右边，不到一百米处，却立着一个极具现代感的、由三根灰色混凝土柱构成的雕塑，它们以一种精确的角度相互依偎，冰冷、抽象、充满设计感。一边是缓慢的、被自然回收的消亡，另一边则是人为的、清晰的标记。这种并置本身，就充满了故事感。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你会发现，来这里的人很少是高声喧哗的游客。有穿着专业徒步装备、挂着登山杖的老人，安静地阅读着遗迹旁的解说牌；有年轻的情侣，手牵手踩着那些散落在草地上的、刻有模糊纹章的石块；甚至能看到附近村庄的居民，只是带着狗来这里例行散步。它不像一个景点，更像一片被当地人内化了的“后花园”，一个可以同时思考历史、自然与政治的冥想之地。它的核心魅力，就在于这种多重层次的叠加：你脚下同时踩着三个现代国家的领土，眼睛看着中世纪信仰的废墟，而身心沉浸在一片不受任何国界约束的、古老森林的呼吸之中。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人的，或许是那种“消逝感”。国界，曾经是需要用堡垒和鲜血捍卫的线条，如今成了一个可以轻松跨越、甚至被做成纪念品印章的概念。修道院，曾经是知识、权力与信仰的中心，如今只剩供人凭吊的骨骼。但在这片土地上，消逝并非终结，而是一种转化。边界转化为了合作的象征，信仰的废墟转化为了美的客体与历史的课堂。这里没有胜利者的喧嚣，只有时间这位终极仲裁者，留下的平静证据。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`三国交界点与圣本笃修道院遗迹`} />
                <InfoRow label="英文名称" value={`Tripoint & St. Benedict Abbey Ruins`} />
                <InfoRow label="正式名称" value={`Tripoint of Belgium, the Netherlands, and Luxembourg & Ruins of the Abbey of Saint Benedict`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`维塞`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一片见证了欧洲近千年宗教变迁、领土纷争与最终走向一体化的无言之境。`} />
                <InfoRow label="建筑特色" value={`修道院残存的石墙与拱廊线条，与自然界肆意生长的树木藤蔓形成震撼对话，而现代的三国交界点纪念碑则以其极简几何形态，标记着消弭的边界。`} />
                <InfoRow label="建筑风格" value={`修道院遗迹为罗马式与早期哥特式风格的混合体，而交界点纪念碑则是二十世纪末期极简主义设计的代表。`} />
                <InfoRow label="文化价值" value={`它是欧洲微观史的活教材，将宗教灵性、国家主权概念与当代和平共治理念，浓缩在一片静谧的森林之中。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`遗迹区域全天24小时开放，但强烈建议仅在日出至日落间游览。林间信息中心夏季（4月-9月）开放时间为上午9点至下午6点，冬季（10月-3月）为上午10点至下午4点，每周一闭馆。周边徒步小径全年开放，但冬季部分路段可能因冰雪暂时封闭。`} />
              <InfoRow label="门票价格" value={`进入遗迹核心区和三国交界点纪念碑完全免费。林间小型信息中心参观免费，但内有自愿捐款箱用于维护。停车场收费：小型车辆全天5欧元，摩托车3欧元。无导游服务的官方导览手册售价2欧元。`} />
              <InfoRow label="地址" value={`Tripointweg 1, 3770 Riemst, Belgium`} />
              <InfoRow label="交通方式" value={`从最近的列日机场出发，乘坐火车站接驳巴士至列日-吉耶曼火车站（约20分钟）。在列日火车站搭乘前往马斯特里赫特的区域列车（IC线），在兰肯站下车（车程约30分钟，每小时2班）。在兰肯站前乘坐前往维塞镇的53路公交车，在“Drielandenpunt / Tripoint”站下车（车程约15分钟，每小时1班，周末班次减少）。从马斯特里赫特中央火车站出发更便捷，乘坐50路公交直达维塞镇中心（约25分钟），然后换乘53路或直接徒步（约40分钟）进入森林区域。强烈建议下载当地的公交APP（De Lijn）查询实时班次，周末务必提前规划。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让我们把时钟拨回一千多年前。大约在公元10世纪，这片位于马斯河支流畔、森林茂密的丘陵地带，还是一片蛮荒与寂静并存的土地。当时的神圣罗马帝国疆域内，有一股强大的精神运动正在兴起——本笃会修道院制度。一群寻求与世隔绝、通过祈祷和体力劳动侍奉上帝的修士，看中了这里的与世无争。他们伐木垦荒，用当地的石灰岩垒起了最初的祈祷室和宿舍。最初的圣本笃修道院，与其说是一座宏伟建筑，不如说是一个坚固、朴素的信仰前哨站，修士们的日常生活伴随着清规戒律与森林的呼啸声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "修道院的黄金时代伴随着捐赠与特权的积累而来。到了12世纪，它已经发展成为地区重要的宗教与文化中心，拥有自己的图书馆、抄写室和大片田产。罗马式的厚重墙壁被加高，并开始出现了早期哥特式风格的尝试——你可以从残留的一个拱顶上，看到那些试图指向天空的、更纤细的肋骨线条。它不仅是灵魂的庇护所，也成为了过往商旅、附近领主乃至贫困农民寻求帮助、仲裁甚至庇护的地方。修道院的钟声，一度是这片森林最权威的计时方式。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，中世纪的宁静并非永恒。16世纪的宗教改革风暴和随之而来的战乱席卷低地国家。这片土地因其战略位置，开始成为各方势力拉锯的战场。修道院首次遭受了严重的洗劫，部分建筑被焚毁。修士们离散又归来，在断壁残垣中努力恢复生活。但真正的转折点，是近代民族国家边界的精确绘制。1839年，伦敦条约最终划定了比利时与荷兰的边界；1839年，卢森堡的独立地位被确认。原来浑然一体的封建领地，被三条无形的政治线条切割。而这座早已衰败的修道院，恰好位于这三条线交汇点的附近，从宗教领地，一夜之间变成了一个敏感的、具有象征意义的“边境物件”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二十世纪的两次世界大战，给这片土地留下了最深的伤疤。这里不再是修士的静修地，而是成了军队反复争夺、构筑防线的战场。二战初期，比利时在此修建了部分防线工事，试图阻挡德军。修道院的废墟被进一步用作临时掩体或观察所，古老的石墙上增添了新的弹孔与裂痕。战争结束后，欧洲满目疮痍，人们对民族主义与残酷边界产生了深刻反思。冷战时期，这里又一度笼罩在紧张气氛中。直到欧洲一体化进程的春风吹起。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1990年代，为了庆祝欧洲联盟的深化和申根协定带来的无边界的自由，当地人决定不再将这里视为分裂的象征。他们清除了部分战争遗留的障碍物，没有重建修道院（那将是一种虚假的怀旧），而是选择让遗迹保持“诚实”的残缺状态。同时，他们邀请艺术家设计建造了那座三柱合一的纪念碑，以积极、现代的艺术语言，重新定义了这个地点：从分隔的端点，变为联结的节点。昔日的防线，变成了徒步小径；曾经的禁区，变成了共同的历史公园。这片森林，终于从历史的负重中解脱，回归到一种更深沉的、属于和平的宁静。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排整整一个上午或一个下午，总计约4-5小时进行深度游览。最佳抵达时间是清晨9点前或午后2点后，以避开可能出现的零星旅游团，并捕捉到森林中最美妙的光影。整体节奏应该是慢行、观察与沉思的结合，而非赶路打卡。从停车场出发，先深入森林探访修道院遗迹，感受其历史厚重感；然后轻松漫步至三国交界点，体验其现代象征意义；最后登上附近制高点，将一切尽收眼底。这样的顺序，能从历史沉思自然过渡到当代展望，形成完整的情感与认知闭环。请务必穿着坚固防滑的徒步鞋，林间小径潮湿且多树根。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`林间手机信号时有时无，建议提前在信息中心或停车场拍下区域地图。绝对不要试图移走或带走遗迹的任何石块，哪怕是极小的一块，这是受严格保护的文化遗产。冬季部分小径会结薄冰，即使阳光明媚也需格外小心，最好携带简易冰爪。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主停车场出发，先别急着找纪念碑，而是拐进南侧那条标有“Abbaye”字样、布满青苔的狭窄步道，让高耸的树木瞬间将你包裹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在第一个岔路口故意“迷路”，循着隐约的水声找到那条几乎被蕨类植物覆盖的清澈小溪，这是当年修士们的水源。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`用手轻轻触摸修道院主残墙上那些深浅不一的刻痕与风化凹陷，试着分辨哪些是中世纪石匠的标记，哪些是近代战争的创伤。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`坐在半坍塌的回廊拱券下唯一完好的石条上，闭上眼睛，只听风穿过不同高度石墙缝隙时发出的、如同古老管风琴般变幻的呜咽声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开废墟核心区，沿着宽阔的“三国小径”轻松步行约十分钟，来到那座混凝土纪念碑前，绕着它走三圈，每一步都踏在不同的国家领土上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在纪念碑旁的简易木屋咖啡馆买一杯用当地蜂蜜调制的热茶，边喝边翻看游客留言簿上来自几十种语言的和平寄语。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要继续向上，攀爬约十五分钟到达“瞭望塔”山丘，虽然塔已不在，但在那片开阔地上，转身回望，将森林、遗迹与远方的三国田园风光同时收纳进眼底。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`密林仰拍废墟轮廓`}</h4>
                  <p className="text-sm text-gray-700">{`选择下午三四点阳光西斜时，站在废墟东侧约二十米外的山毛榉树下，用广角镜头仰拍，让深色树冠作为画框，捕捉金色阳光刚好勾勒出残破拱券顶端线条的瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`透过石窗捕捉交界点纪念碑`}</h4>
                  <p className="text-sm text-gray-700">{`在修道院遗迹西侧，找到一个仅存的完整石窗，将你的相机镜头紧贴石窗内侧，以石窗为前景框架，将对面的现代纪念碑刚好框在窗口中央，形成古今的强烈对话。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`低角度特写边界碑石`}</h4>
                  <p className="text-sm text-gray-700">{`蹲下来，将相机贴近地面，对准三国交界点那三块嵌在地面的、分别刻有B、NL、L字母的青铜地砖，利用雨后的小水洼拍出完美的倒影，让天空的云彩也融入构图。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`瞭望点全景接片`}</h4>
                  <p className="text-sm text-gray-700">{`在“瞭望塔”山丘的开阔地，使用手机的全景模式或相机的接片功能，从最左侧的荷兰田野地平线开始，缓慢横扫，经过中间的森林树冠（其中隐藏着遗迹），最后落到右侧比利时的村庄教堂尖顶，一张照片收纳三国景致。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`森林内部光线复杂，建议使用RAW格式拍摄以便后期调整阴影与高光细节。使用无人机在此区域是严格禁止的，因其靠近边境且为自然保护区。尊重其他访客的宁静体验，避免使用闪光灯或制造持续的快门噪音。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济优选`}</h4>
                  <p className="text-sm text-blue-800">{`住在维塞镇中心由老邮局改造的家庭旅馆，房间虽小但一尘不染，早餐的奶酪和火腿直接来自房东兄弟的农场，晚上能听到镇上教堂悠远的钟声。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-green-800">{`选择森林边缘唯一一家由守林人小屋扩建的精品民宿，夜晚可见璀璨星河，早晨在露台上享用早餐时，常有松鼠和野鹿好奇地前来张望。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`驱车二十分钟前往马斯河畔的百年城堡酒店，住在带有复古四柱床和河景阳台的套房，在古堡餐厅品尝用阿登森林食材烹调的米其林推荐美食。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "维塞镇非常安全且宁静，夜晚几乎没有任何喧闹。但如果选择森林民宿，务必确认店家提供详细的驾车路线指引，因为GPS在最后一段林间小路经常失灵。夏季和秋季的周末非常紧俏，至少需提前两个月预订。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开的时候，我的背包里没有多任何一件纪念品，但心里却好像被塞进了一整片森林的寂静和八百年的光阴。回望那条重新没入树林的小径，我突然觉得，这里或许展示了旅行的另一种深意：它不在于收集了多少张地标打卡照，而在于你是否找到了一个地方，能让外部的风景与内心的风景发生共振。三国交界点与这片废墟，就是这样一个共振器。它让你同时看到时间的摧毁力与治愈力，看到人类曾如何热衷于划清界限、筑墙设防，又如何艰难地学会拆除心墙、携手前行。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都被加速、信息爆炸的时代，这样一个看似“不起眼”、需要你用心步行去感知的地方，显得尤为珍贵。它不提供即时的感官刺激，却提供悠长的回味。它告诉你，真正的边界，或许从来不在山川河流之间，而在我们如何看待彼此、如何看待历史与未来的观念之中。每一位热爱深度游的旅人，都应该来此站一站，不是为了告诉别人“我到了三国交点”，而是为了让自己获得那片刻的澄明——在森林的呼吸里，在石头的沉默中，重新思考什么是永恒，什么是变迁，什么才是我们真正应该去守护和建造的东西。这是一次走进地图上三条细线交汇点的旅程，更是一次走进自己内心的远足。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/maaseik-historical-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马赛克</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Maaseik</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/mechelen-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    梅
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">梅赫伦老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Mechelen Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/benelux" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    比
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">比利时・荷兰・卢森堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Benelux</p>
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
