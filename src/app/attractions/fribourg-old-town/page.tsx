import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '弗里堡老城 Fribourg Old Town｜悬崖上的双语中世纪瑰宝，瑞士鲜为人知的时光胶囊 - 最佳欧洲景点',
  description: '当我第一眼看到弗里堡老城，是从火车站坐那列慢悠悠的“缆索地铁”升上来的。车厢吱呀作响，像一部老电影的开场，窗外的景色从河谷的现代楼房，陡然变成一片依着悬崖峭壁而建的、密密麻麻的暖黄色屋顶。车门打开，一股清冽的、带着石板湿气和远处面包房黄油香的风扑面而来。这里没有苏黎世班霍夫大街的喧嚣，也没有卢塞恩湖...',
}

export default function FribourgOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '弗里堡老城', href: '/attractions/fribourg-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">弗里堡老城・Fribourg Old Town・瑞士・弗里堡</h1>
          <p className="text-lg text-gray-600 mb-6">
            当我第一眼看到弗里堡老城，是从火车站坐那列慢悠悠的“缆索地铁”升上来的。车厢吱呀作响，像一部老电影的开场，窗外的景色从河谷的现代楼房，陡然变成一片依着悬崖峭壁而建的、密密麻麻的暖黄色屋顶。车门打开，一股清冽的、带着石板湿气和远处面包房黄油香的风扑面而来。这里没有苏黎世班霍夫大街的喧嚣，也没有卢塞恩湖畔游客的密集脚步，只有一种沉静的、被时光浸泡过的嗡嗡声——那是远处圣尼古拉大教堂钟楼传来的悠扬报时，混杂着脚下萨林河深谷里永不停歇的、沉闷的水流声。
你一下子就掉进了一个立体的迷宫。这里几乎没有一块平地。道路是顺着山脊的走向自然生长的，时而宽阔成一个小广场，立着喷泉和穿着古老服饰的雕像；时而又急剧收缩成一条只容一人通过的“缝隙街”，两侧砂岩墙高耸，抬头只能看见一线被屋瓦切割的天空。你的脚底感受着被无数代人鞋底打磨得光滑甚至有些凹陷的石板路，坡度陡得让你不由自主地抓住旁边的铁扶手。每一个转角都可能藏着惊喜：也许是一幅褪色的古老壁画，也许是一家门口摆满天竺葵花盆的百年铸铁作坊，也许是一条骤然向下、通往深谷河畔的、令人眩晕的阶梯。
最动人的是它的“声音地图”。在上城的法语区，咖啡馆外的交谈声轻柔如歌；拐过一个街角，走下几段台阶，进入下城的德语区，声音的质地似乎都变得更为低沉直接。而统一这一切的，是空气中弥漫的、淡淡的奶酪火锅（Fondue）和拉可雷特奶酪（Raclette）的温暖醇香，从那些地下餐厅石头拱窗里飘出来，混合着教堂木门开合时逸出的陈旧蜡烛与木头的气息。这不是一个供人观赏的博物馆沙盘，而是一个依然在深深呼吸、带着自身独特体温的有机生命体。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">当我第一眼看到弗里堡老城，是从火车站坐那列慢悠悠的“缆索地铁”升上来的。车厢吱呀作响，像一部老电影的开场，窗外的景色从河谷的现代楼房，陡然变成一片依着悬崖峭壁而建的、密密麻麻的暖黄色屋顶。车门打开，一股清冽的、带着石板湿气和远处面包房黄油香的风扑面而来。这里没有苏黎世班霍夫大街的喧嚣，也没有卢塞恩湖畔游客的密集脚步，只有一种沉静的、被时光浸泡过的嗡嗡声——那是远处圣尼古拉大教堂钟楼传来的悠扬报时，混杂着脚下萨林河深谷里永不停歇的、沉闷的水流声。</p>
              <p className="text-gray-700 leading-relaxed mb-4">你一下子就掉进了一个立体的迷宫。这里几乎没有一块平地。道路是顺着山脊的走向自然生长的，时而宽阔成一个小广场，立着喷泉和穿着古老服饰的雕像；时而又急剧收缩成一条只容一人通过的“缝隙街”，两侧砂岩墙高耸，抬头只能看见一线被屋瓦切割的天空。你的脚底感受着被无数代人鞋底打磨得光滑甚至有些凹陷的石板路，坡度陡得让你不由自主地抓住旁边的铁扶手。每一个转角都可能藏着惊喜：也许是一幅褪色的古老壁画，也许是一家门口摆满天竺葵花盆的百年铸铁作坊，也许是一条骤然向下、通往深谷河畔的、令人眩晕的阶梯。</p>
              <p className="text-gray-700 leading-relaxed mb-4">最动人的是它的“声音地图”。在上城的法语区，咖啡馆外的交谈声轻柔如歌；拐过一个街角，走下几段台阶，进入下城的德语区，声音的质地似乎都变得更为低沉直接。而统一这一切的，是空气中弥漫的、淡淡的奶酪火锅（Fondue）和拉可雷特奶酪（Raclette）的温暖醇香，从那些地下餐厅石头拱窗里飘出来，混合着教堂木门开合时逸出的陈旧蜡烛与木头的气息。这不是一个供人观赏的博物馆沙盘，而是一个依然在深深呼吸、带着自身独特体温的有机生命体。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="弗里堡老城" />
                <InfoRow label="英文名称" value="Fribourg Old Town" />
                <InfoRow label="正式名称" value="Fribourg Old Town" />
                <InfoRow label="国家" value="瑞士" />
                <InfoRow label="城市" value="弗里堡" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="一座完美保留了中世纪城市肌理与精神的双语（法语/德语）要塞之城，是瑞士从宗教纷争走向文化共存的独特见证。" />
                <InfoRow label="建筑特色" value="建于险峻河岸与山脊之上，密集的哥特式砂岩建筑、蜿蜒陡峭的阶梯小巷、古老的防御塔楼与多座跨越深谷的桥梁共同构成立体迷宫。" />
                <InfoRow label="建筑风格" value="以中世纪哥特式民用和宗教建筑为主，混合了后哥特、文艺复兴及巴洛克风格的装饰元素，整体呈现出统一的砂岩暖色调。" />
                <InfoRow label="文化价值" value="作为瑞士天主教文化堡垒和重要的大学城，它体现了拉丁（法语）文化与日耳曼（德语）文化数个世纪以来和谐交融的“瑞式智慧”。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城街区全天开放。但内部景点如圣尼古拉大教堂开放时间通常为周一至周六 9:00-18:00，周日 13:00-18:00（冬季会提前至17:00关闭）。市政厅等公共建筑在工作日办公时间可参观部分区域。各个博物馆开放时间各异，一般为周二至周日 10:00-17:00。建议行前查询具体景点官网，注意瑞士的节假日（如国庆日8月1日、圣诞节）多数室内景点会关闭。" />
              <InfoRow label="门票价格" value="进入老城区域免费。圣尼古拉大教堂免费进入，登塔费用约为5瑞士法郎。州立美术与历史博物馆门票约10-15瑞士法郎。弗里堡大学的一些历史庭院可免费参观。持有瑞士旅行通票（Swiss Travel Pass）可免费进入绝大多数博物馆。" />
              <InfoRow label="地址" value="Fribourg Old Town, 1700 Fribourg, Switzerland" />
              <InfoRow label="交通方式" value="从苏黎世机场出发：最便捷方式是乘坐瑞士联邦铁路（SBB）的直达火车，车程约1小时20分钟，班次频繁（约半小时一班）。从日内瓦机场出发：同样有直达火车，车程约1小时40分钟。弗里堡火车站（Fribourg/Freiburg Bahnhof）就位于萨林河（Saane/Sarine）河谷下方，出站后，你可以选择步行（约10-15分钟上坡路）、乘坐1路或2路公交车（到“Bourg”或“Place Python”站），或者体验一下老城边缘的“缆索地铁”（Funiculaire），只需几分钟就能从火车站河谷直接升至老城上方的“上城”（Basse-Ville），这是融入当地生活最有趣的开场。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">要理解弗里堡，你得从它的地形开始想象。1182年，策林根公爵贝尔希托尔德四世选中了萨林河这个近乎马蹄形的险峻弯道，在石灰岩山脊上打下了第一块基石。这绝非偶然的浪漫选择，而是精明的军事与商业算计。陡峭的河谷是天生的护城河，山脊是完美的防御城墙，而控制河流渡口，就等于扼住了从伯尔尼通往罗马帝国古老道路的咽喉。最初的弗里堡，就是一个标准的、带有严密网格街道的军事殖民地，它的名字“Fribourg”本身就源自德语的“自由城堡”，宣示着这是一块享有特权的公爵领地。</p>
              <p className="text-gray-700 leading-relaxed mb-4">石头筑起了城市，而信仰塑造了它的灵魂。13世纪，方济各会和多明我会的修士们相继到来，带来了严谨的教义与精美的建筑艺术。1283年开始建造的圣尼古拉大教堂，就像一根定海神针，在此后近三个世纪的漫长修建中，逐渐长成了今天这座令人叹为观止的哥特式杰作。它的钟楼直到1490年才完工，高达76米，成为整个城市乃至地区的精神灯塔。中世纪的弗里堡凭借毛皮贸易和皮革加工富庶起来，那些华丽的山墙、凸窗和彩绘立面，都是行会财富的无声炫耀。</p>
              <p className="text-gray-700 leading-relaxed mb-4">历史的转折点伴随着宗教改革的惊涛骇浪到来。当加尔文的新教浪潮席卷瑞士许多地区时，弗里堡，在强有力的贵族和天主教会的领导下，成为了坚守旧信仰的坚固堡垒。它甚至与同样信奉天主教的卢塞恩、索洛图恩等州结成“天主教联盟”，与苏黎世、伯尔尼等新教州分庭抗礼。这道深刻的宗教裂痕，意外地凝固了这座城市的文化样貌。它没有经历新教地区那种“清教徒式”的简化与破坏，巴洛克艺术的绚烂得以在17、18世纪继续装饰它的教堂和贵族宅邸。也正是这一时期，为了彰显天主教的力量，耶稣会士们在此建立了学院，这成为了后来弗里堡大学的核心，让这座城市在坚守信仰的同时，也播下了深厚人文主义的种子。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，弗里堡最了不起的篇章，写在近代的妥协与融合之中。1848年瑞士联邦宪法确立了宗教信仰自由，德语和法语被同时定为官方语言。身处文化和语言的断层线上，弗里堡自然而然地成为了双语实践的先锋。1889年，弗里堡大学正式成为瑞士唯一一所持续提供法、德双语教学的高等学府。走在老城里，你看到的路牌、听到的交谈、读到的菜单，都在无声演绎着这种日常的和谐共存。战争与和平的痕迹同样刻在石头上：那些坚固的塔楼曾抵御过伯尔尼人的进攻，而今天，它们脚下开满了鲜花；二战期间，它又以其特殊的中立文化地位，成为许多知识分子的避风港。如今的它，不再是一座防御要塞，而是一座沟通的桥梁，一个让两种强大欧洲文明在方寸之间握手言欢的、活生生的实验室。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  建议在上午9点左右抵达，这时阳光刚好洒满上城的屋顶，游客尚未涌入，咖啡馆里坐着看报的本地人，是最有生活气息的时刻。整体游览需要一整天（6-8小时），节奏宜慢。核心逻辑是从高处的“上城”（法语文化区）开始，逐步向下探索“下城”（德语文化区），最后抵达河谷河畔，完成一次从精神到世俗、从典雅到质朴的垂直穿越。中午可以在老城中心用餐，傍晚时分则适合在河边的某座古桥上看落日余晖染红砂岩城墙。这样的安排能最大程度地体验老城的立体层次和光影变化。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>穿一双绝对防滑、支撑好的步行鞋，这里的石板路在潮湿时非常滑，且上下坡极多，高跟鞋是自找苦吃。老城很多小巷没有明确的餐厅标识，跟着奶酪和咖啡的香味走，或者观察哪家门口有本地老人进出，往往是地道好店。周日除了教堂和少数咖啡馆，几乎所有商店和博物馆都关门，街道会异常宁静，适合纯粹的城市漫步和拍照，但请务必提前备好食物。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从“缆索地铁”上站台出来，先别急着深入，在“上城”边缘的观景平台凭栏远眺，将老城如折叠盆景般的全景和脚下深谷里的萨林河尽收眼底。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着铺满阳光的“大喷泉街”缓步向下，用手触摸那些温暖粗糙的砂岩墙，留意脚下石板路上可能出现的古老徽记和导水渠痕迹。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在庄严肃穆的圣尼古拉大教堂里花上至少一小时，不仅要仰望那精美绝伦的彩绘玻璃和管风琴，更要尝试登上钟楼，在呼啸的风中聆听钟声并俯瞰迷宫般的街巷。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从教堂侧门溜出来，钻入狭窄如隧道的“法官巷”，感受两侧高墙带来的压迫感与清凉，一直走到豁然开朗的市政厅广场，看彩绘雕像在阳光下讲故事。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">找一家地下岩洞风格的餐厅坐下，点一份用本地格吕耶尔奶酪制作的火锅，让浓郁奶香驱散石头的寒意，像当地人一样用长叉扎着面包慢慢聊。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">午后沿着“伯尔尼门”附近的城墙步道散步，然后顺着“下城”那些近乎垂直的阶梯“嘎腾”一路向下，探索河岸边那些最古老、散发着湿气与水车声的工匠街区。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一定要走过那座古老的“扎林根桥”到对岸，回头仰望，你会看到老城建筑从河床上拔地而起、层叠错落的真正堡垒姿态。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">如果还有余力，在黄昏时分去州立美术与历史博物馆，不是为了看展品，而是坐在它那面向河谷的露台咖啡馆，看着对岸老城的灯火逐一亮起，像星星落入凡间。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 缆索地铁上站观景台全景</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚，用长焦镜头压缩空间，将前景的老城屋顶、中景的圣尼古拉大教堂钟楼和远景的阿尔卑斯山前麓一同纳入画面，构图饱满。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 圣尼古拉大教堂钟楼内部螺旋石梯俯拍</h4>
                  <p className="text-sm text-gray-700">正午阳光从顶楼小窗射入时，站在楼梯中段向上仰拍或向下俯拍，能捕捉到深邃的、充满几何美感的螺旋光线与阴影。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. “法官巷”或类似窄巷的纵深构图</h4>
                  <p className="text-sm text-gray-700">下午三四点，阳光斜射入巷口时，站在巷子一端，利用两侧高耸的砂岩墙形成的天然引导线，拍摄走向巷子深处的人物剪影或光影分割。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 扎林根桥上的经典回头望</h4>
                  <p className="text-sm text-gray-700">日落前半小时，走到桥中央，转身用广角镜头拍摄老城建筑群在河面上的倒影，以及悬崖上层层叠叠的房屋被夕阳染成金红色的壮丽景象。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 州立博物馆露台夜景</h4>
                  <p className="text-sm text-gray-700">日落后蓝调时刻，在博物馆露台用三脚架长曝光，拍摄对岸老城灯火与深蓝色天空下萨林河如丝缎般的流水，画面宁静而富有诗意。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 老城居民注重隐私，拍摄民居窗户或阳台时请保持距离并快速抓拍，避免长时间对准室内。教堂内部通常允许非商业拍摄，但请关闭闪光灯并保持安静，弥撒期间绝对不要拍摄。使用偏振镜可以很好地消除砂岩墙壁的反光，让色彩更加饱和厚重。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">历史沉浸之选</h4>
                  <p className="text-sm text-blue-800">下城河岸边由15世纪磨坊改造的精品酒店，房间保留了原始的石墙和木梁，晚上枕着潺潺水声入眠，清晨在私人阳台上看雾气从河面升腾缠绕古桥。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">学院风情之选</h4>
                  <p className="text-sm text-green-800">上城靠近大学的一栋19世纪优雅联排别墅内的家庭式旅馆，房东教授会为你准备丰盛的早餐并分享老城的奇闻轶事，书架上摆满了各种语言的书籍。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">设计美学之选</h4>
                  <p className="text-sm text-yellow-800">位于老城边缘一栋经过极简主义改造的历史建筑里的设计师酒店，古典外壳下是温暖的北欧风内饰，屋顶露台拥有俯瞰整个老城天际线的无敌视角。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">经济实用之选</h4>
                  <p className="text-sm text-purple-800">火车站附近由本地青年经营的现代化旅社，虽不在老城内，但交通极其方便，公共厨房设施齐全，是结识全球背包客、交换旅行故事的好地方。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的住宿数量有限且非常热门，尤其是周末和夏季，务必提前数月预订。住在“上城”更安静、文化氛围浓；住在“下城”或河边则更有生活气息，但夜晚可能稍显寂静。无论住在哪里，请做好爬坡的心理和体力准备，这是体验弗里堡不可或缺的一部分。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开弗里堡很久以后，我记忆中最清晰的，不是某个具体的建筑细节，而是一种“失衡”的体感——那种因为道路过于倾斜，身体需要不断调整重心，从而对脚下每一块石头都变得异常敏感的状态。这种感觉奇妙地隐喻了这座城市的核心精神：它始终处于一种动态的平衡之中。在高与低、法语与德语、信仰与理性、坚固的防御与开放的沟通之间，它找到了一种非静止的、充满张力的和谐。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求效率、追求扁平化的时代，弗里堡老城像一位固执而优雅的隐士，提醒着我们“深度”与“层次”的价值。它拒绝被轻易浏览，你必须用脚步去丈量它的垂直维度，用耐心去解开它平面的迷宫。在这里，旅行不再是平面的位移，而是一场全身心的沉浸。你会喘着气，会流汗，会在某个陡峭的阶梯前犹豫，但当你最终站在某个意外的角落，看到阳光把对面教堂的玫瑰窗投影在古老的墙壁上时，那种发现的喜悦是无可替代的。它告诉你，最美的风景，往往藏在那些需要你稍微费点力气才能抵达的、不平衡的地方。这，或许就是深度旅行的终极意义。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
