import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '波利斯 Polis Chrysochous｜潜入塞浦路斯最后的宁静海岸，探访神话中爱与美的源头 - 最佳欧洲景点',
  description: '车子刚拐下主路，进入波利斯的地界，整个世界的声音就好像被调低了音量。第一口呼吸，是咸湿清澈的海风，混杂着路边野生茴香和百里香的辛辣香气，瞬间洗掉了所有长途奔波的倦意。眼前没有想象中的“景点”阵仗，只有一条懒洋洋的主街，几家咖啡馆把藤椅歪歪斜斜地摆在太阳底下，几个老爷爷穿着洗得发白的衬衫，在玩永远也下',
}

export default function PolisChrysochousPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '波利斯', href: '/attractions/polis-chrysochous' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`波利斯・Polis Chrysochous・塞浦路斯・帕福斯区`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子刚拐下主路，进入波利斯的地界，整个世界的声音就好像被调低了音量。第一口呼吸，是咸湿清澈的海风，混杂着路边野生茴香和百里香的辛辣香气，瞬间洗掉了所有长途奔波的倦意。眼前没有想象中的“景点”阵仗，只有一条懒洋洋的主街，几家咖啡馆把藤椅歪歪斜斜地摆在太阳底下，几个老爷爷穿着洗得发白的衬衫，在玩永远也下不完的一盘西洋双陆棋。啪嗒，啪嗒，棋子的声音和远处海浪舔舐鹅卵石滩的沙沙声，构成了这里永恒的背景音。时间在这里不是被节省的，而是被用来沉浸和浪费的。
往海边走，一个小巧的渔港映入眼帘。这里的蓝不是那种炫目的、明信片式的蓝，而是一种被时光磨得无比温润的蓝绿色，像一块巨大的、微微颤动的猫眼石。几艘蓝白相间的小渔船随着波浪轻轻摇晃，发出木头摩擦的咯吱声。渔民们收拾渔网的姿态从容不迫，仿佛捕鱼不是为了生计，而是每日与大海进行的一场友好对话。你会发现，波利斯的美，不在于“观看”，而在于“进入”。你进入它的节奏，你的脚步会不自觉放慢，肩膀会自然放松，你会开始注意到一只白鹭单腿立在防波堤上的优雅，会闻到某户人家院子里飘出的炖羊肉和月桂叶的浓郁香气。
这里最打动人心的，是一种彻底的、毫不费力的真实性。它不是为游客搭建的舞台，它就是它自己——一个恰好坐落在天堂角落，并慷慨允许你分享片刻宁静的生活现场。镇上的小餐馆里，菜单是用带着擦痕的粉笔写在黑板上的，服务员会笑着纠正你的发音，然后端上来的章鱼可能就来自早上你看到的那艘小船。波利斯就像一个温柔的序章，它用绝对的宁静为你充满电，然后轻声告诉你：更大的自然奇迹，就在身后的那片原始半岛里等着你呢。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子刚拐下主路，进入波利斯的地界，整个世界的声音就好像被调低了音量。第一口呼吸，是咸湿清澈的海风，混杂着路边野生茴香和百里香的辛辣香气，瞬间洗掉了所有长途奔波的倦意。眼前没有想象中的“景点”阵仗，只有一条懒洋洋的主街，几家咖啡馆把藤椅歪歪斜斜地摆在太阳底下，几个老爷爷穿着洗得发白的衬衫，在玩永远也下不完的一盘西洋双陆棋。啪嗒，啪嗒，棋子的声音和远处海浪舔舐鹅卵石滩的沙沙声，构成了这里永恒的背景音。时间在这里不是被节省的，而是被用来沉浸和浪费的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "往海边走，一个小巧的渔港映入眼帘。这里的蓝不是那种炫目的、明信片式的蓝，而是一种被时光磨得无比温润的蓝绿色，像一块巨大的、微微颤动的猫眼石。几艘蓝白相间的小渔船随着波浪轻轻摇晃，发出木头摩擦的咯吱声。渔民们收拾渔网的姿态从容不迫，仿佛捕鱼不是为了生计，而是每日与大海进行的一场友好对话。你会发现，波利斯的美，不在于“观看”，而在于“进入”。你进入它的节奏，你的脚步会不自觉放慢，肩膀会自然放松，你会开始注意到一只白鹭单腿立在防波堤上的优雅，会闻到某户人家院子里飘出的炖羊肉和月桂叶的浓郁香气。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "这里最打动人心的，是一种彻底的、毫不费力的真实性。它不是为游客搭建的舞台，它就是它自己——一个恰好坐落在天堂角落，并慷慨允许你分享片刻宁静的生活现场。镇上的小餐馆里，菜单是用带着擦痕的粉笔写在黑板上的，服务员会笑着纠正你的发音，然后端上来的章鱼可能就来自早上你看到的那艘小船。波利斯就像一个温柔的序章，它用绝对的宁静为你充满电，然后轻声告诉你：更大的自然奇迹，就在身后的那片原始半岛里等着你呢。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`波利斯`} />
                <InfoRow label="英文名称" value={`Polis Chrysochous`} />
                <InfoRow label="正式名称" value={`Polis Chrysochous`} />
                <InfoRow label="国家" value={`塞浦路斯`} />
                <InfoRow label="城市" value={`帕福斯区`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这片海湾曾是古希腊城邦马里恩的所在地，历经沧桑后沉淀为一个守护着塞浦路斯最后一片原始荒野的宁静渔村门户。`} />
                <InfoRow label="建筑特色" value={`低矮的白色屋舍与彩色的百叶窗随意散落在柠檬树与九重葛之间，没有任何恢弘的建筑，只有与山海浑然一成的闲适与和谐。`} />
                <InfoRow label="建筑风格" value={`典型的地中海乡村风格，混搭着拜占庭时期遗留的简朴石砌遗迹和现代实用的度假屋。`} />
                <InfoRow label="文化价值" value={`它是现代塞浦路斯慢生活哲学的缩影，更是连接古希腊神话世界与当今地中海生态保护意识的一座活着的桥梁。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`波利斯小镇本身全天开放。作为其核心的自然门户——阿卡马斯半岛自然保护区，其开放入口与徒步小径的时间通常为日出至日落（约早上6点至晚上8点，随季节调整）。游客中心开放时间一般为周一至周五 8:00-16:00，周末可能缩短或关闭。前往“阿芙罗狄蒂之浴”等具体地点的无围栏小径可随时进入，但强烈建议在白天光线充足时前往。冬季（11月至次年3月）部分服务设施可能减少。`} />
              <InfoRow label="门票价格" value={`进入波利斯小镇及漫步其海滨区域完全免费。驱车或徒步进入阿卡马斯半岛自然保护区亦无需门票。若参加当地运营商组织的吉普车越野之旅、乘船游览或导游徒步团，费用通常在每人40-80欧元不等。租用自行车或小摩托探索海岸线，日租金约15-25欧元。`} />
              <InfoRow label="地址" value={`Poli Crysochous, 帕福斯区, 塞浦路斯`} />
              <InfoRow label="交通方式" value={`从最近的帕福斯国际机场出发，最便捷的方式是租车自驾。取车后沿B7公路向西北方向行驶，全程约45公里，车程50分钟到1小时，沿途是迷人的丘陵和海景。若乘坐公共交通，可从帕福斯市中心Karavella汽车站搭乘645路巴士前往波利斯，车程约1.5小时，但班次较少，每天约4-5班，需提前在车站查看确切时刻表。从更远的利马索尔或拉纳卡机场出发，强烈建议租车，车程分别约为2小时和2.5小时。小镇内部完全可以步行探索，去往阿卡马斯半岛的起点则需要交通工具或参加团队。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "要讲波利斯的故事，我们得先把时钟拨回将近三千年前。你现在脚下踩着的这片宁静土地，在公元前6世纪左右，可是一个叫做“马里恩”的繁荣城邦的心脏地带。得益于附近丰富的铜矿资源，马里恩曾是地中海东岸重要的贸易中心，将自己的财富与影响力辐射到整个爱琴海世界。想象一下，当时的海湾里停泊的不是今天的小渔船，而是满载着铜锭、陶器和橄榄油的商船，空气里弥漫着码头集市上的喧嚣和异国香料的气味。考古学家在这里挖出了令人惊叹的金银珠宝和精美的陶器，无声地诉说着昔日的辉煌。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，地中海的棋局风云变幻。到了公元前4世纪末，著名的托勒密一世在争夺塞浦路斯的控制权时，因怀疑马里恩城支持他的对手，一怒之下将这座城市夷为平地。历史的尘埃落下，繁华转眼成空。不过，生命总能在废墟上找到出路。幸存的人们没有远去，而是在原址附近重建了家园，并给它起了一个更谦卑、更直白的名字——“阿尔西诺伊”，后来渐渐演变成了“波利斯”（在希腊语中意为“城”）。此后的千年里，它褪去了帝国的野心，回归到一个依靠农业和渔业为生的滨海聚落的本质，在拜占庭、十字军、威尼斯和奥斯曼帝国的更迭中，安静地偏安一隅。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正让它与永恒的神话世界产生联系的，是它身后那片广袤而崎岖的阿卡马斯半岛。在古希腊诗人的吟唱中，爱与美的女神阿芙罗狄蒂（维纳斯）就诞生在塞浦路斯的海浪泡沫中。传说她时常来到阿卡马斯半岛一处隐秘的瀑布水潭中沐浴，那潭水因而拥有了神奇的美容力量，被称为“阿芙罗狄蒂之浴”。千百年来，这个传说像野花一样在这片土地上生长，为这片粗犷的自然景观披上了一层浪漫而神秘的面纱。波利斯，就这样成了通往女神后花园的世俗门户。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "近代的波利斯继续着它缓慢的节奏，直到20世纪后期，当塞浦路斯其他海岸线被旅游开发的热潮席卷时，阿卡马斯半岛因其独特而脆弱的地中海生态系统，被明智地划为了自然保护区。这个决定，意外地保护了波利斯的灵魂。它没有变成另一个喧闹的度假地，反而因其“守门人”的身份，吸引来了那些厌倦了人潮、渴望真正宁静与原始自然的旅行者。今天的波利斯，巧妙地平衡着传统与现代。它依然是一个功能完整的渔村，本地人在广场上的咖啡店讨论天气和收成；同时，它也容纳了一些低调的生态旅馆和家庭餐馆，迎接那些前来徒步、观鸟、寻找神话痕迹的访客。它的历史，从青铜时代的财富，到神话时代的回声，再到今天生态时代的守护者，像一首层层递进的交响诗，最终在轻柔的海浪声中归于平和与深邃。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的波利斯一日游，应该是一场从人间烟火到神话自然的渐进式沉浸。建议在早上九点左右抵达，此时阳光温暖而不炙热，小镇刚刚苏醒，市场里最为鲜活。整个行程耗时约8-10小时，节奏张弛有度。上午将完全交给波利斯小镇本身，用慢走的步伐去感受它的脉搏；中午享用一顿悠长的本地午餐，为下午的徒步储备能量；午后则是探险时间，深入阿卡马斯半岛，寻找传说中的女神浴池，并在日落前返回海岸。这样的安排既能充分体验小镇生活，又能捕捉到自然保护区在一天中最美的光影，最后以一场辉煌的地中海日落作为结束，圆满而充实。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`进入阿卡马斯半岛徒步务必带上足够的水、防晒霜和一双坚固耐走的鞋子，小径虽美但原始，凉鞋是万万不可的。如果想体验“阿芙罗狄蒂之浴”的清凉，记得带上泳衣和毛巾，但请绝对尊重环境，不要使用任何化学防晒或护肤品。夏季（7-8月）午后的半岛内非常炎热，建议将徒步安排在清晨或傍晚，或者干脆选择春季或秋季前来，那时野花盛开，气候最为宜人。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从主广场的“人民之树”——那棵巨大的老榕树下开始，看当地人在树荫下读报、闲聊，把自己调频到塞浦路斯慢速。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`信步穿过满是茉莉花香的小巷，走到老渔港边，看归航的渔船卸下银光闪闪的渔获，听渔民用希腊语大声交谈。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着海岸线向东漫步到波利斯海滩，脱下鞋子，感受黑色沙滩与温暖海水的独特触感，看海龟保护区（季节允许时）的警示牌。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`找一家海边的传统酒馆，点一份用当地橄榄油和柠檬烤制的章鱼，配上一杯冰爽的本地白葡萄酒，让午餐时光融化在涛声里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后驱车或租一辆自行车前往阿卡马斯半岛入口，从“爱神之路”徒步小径的起点开始，走进满是野花、蝴蝶和奇岩怪石的世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着标记清晰的步道徒步约半小时，抵达隐藏在峡谷中的“阿芙罗狄蒂之浴”，触摸那清凉的瀑布泉水，感受穿越千年的神话气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在日落前一小时返回波利斯，在海滨长廊找一张长椅坐下，看着夕阳将天空、海面和整个小镇染成一片温暖的金红色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐后不要急着离开，在星光下再次漫步到安静的渔港，也许能邂逅夜间捕鱼的小船点起的渔火，像海上的星星。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`老渔港的晨光侧影`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时，阳光以低角度照亮港口，站在防波堤西侧，以蓝白渔船为前景，波光粼粼的海面和远处朦胧的半岛为背景，构图宁静而富有生活气息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`阿卡马斯半岛“爱神之路”俯瞰点`}</h4>
                  <p className="text-sm text-gray-700">{`徒步约15分钟后会到达一个开阔的岩石平台，在下午四点的阳光下，从此处回拍波利斯小镇全景，它就像镶嵌在蓝色海湾里的一簇白色贝壳，广角镜头能收纳山海城的壮阔关系。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“阿芙罗狄蒂之浴”瀑布微距`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射入峡谷时，瀑布水潭周围会形成迷人的光斑，使用大光圈镜头贴近潭边的蕨类植物或湿润的岩石，捕捉水珠滴落瞬间的晶莹和绿色的盎然生机。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`波利斯海滩日落剪影`}</h4>
                  <p className="text-sm text-gray-700">{`日落前二十分钟，面对夕阳西下的方向，拍摄走在黑色沙滩上的行人或孤独的礁石剪影，将天空绚烂的晚霞作为饱满的背景，色调浓郁充满戏剧感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`小镇巷弄的细节光影`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前后，阳光斜射进狭窄的巷子，捕捉一扇有着斑驳蓝色油漆的木门、门口摆放的陶罐与盛开的三角梅，光影对比强烈，充满地中海式的诗意与偶然。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在渔港和镇内拍摄当地人，尤其是长者，请务必先微笑示意并获得默许，尊重他们的隐私和宁静。拍摄自然保护区的动植物时，请使用长焦镜头，避免打扰或过度接近。海边的光线反射强烈，建议随身携带一块偏振镜（CPL），它能有效消除水面和叶片上的反光，让画面的蓝色更深邃、绿色更纯净。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`海滨简约风`}</h4>
                  <p className="text-sm text-blue-800">{`一家由家庭经营的白色小屋旅馆，房间不大但一尘不染，推开窗户就是九重葛的花丛和无垠的海面，老板娘的早餐果酱是自家院子里种的柑橘熬的。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`传统石屋庭院`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇安静一隅的翻新石屋民宿，厚厚的石墙带来天然的凉爽，私人小庭院里种着石榴树，晚上可以躺在躺椅上数星星，体验真正的塞浦路斯乡村居住感。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`生态设计酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇边缘靠近半岛入口处的设计型酒店，采用环保材料建造，拥有一个可眺望山谷的无边泳池，风格现代简约，是探索自然后的完美休憩所。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`独立海滨别墅`}</h4>
                  <p className="text-sm text-purple-800">{`适合家庭或小团体，带私人花园和直接通往小海滩的路径，设施齐全，可以自己从市场买回新鲜海产烹饪，享受完全自在的“临时居民”生活。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "波利斯是一个非常安全、夜晚极其宁静的地方，你可以放心在星空下散步。大部分住宿规模不大，在夏季（6-9月）和复活节等假期非常紧俏，建议至少提前两个月预订。选择住在镇中心可以更方便地融入当地生活，而住在靠近半岛的住处则能获得更贴近自然的体验和更开阔的视野。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开波利斯好多天了，耳边似乎还能听见那种混合着海浪、棋声和远处教堂钟鸣的宁静交响。这个地方教给我的，不是关于历史的宏大叙事，而是一种关于“存在”的微小哲学。它告诉我，一个地方最动人的魅力，未必在于它有多少辉煌的遗迹（尽管它脚下确实埋着一座古城），而在于它如何与时间、与自然、与自身的生活达成了一种优雅的和解。波利斯没有试图成为任何别的东西，它只是一个通往神话与荒野的、活生生的门户，一个让你卸下所有旅行“任务清单”、真正开始“感受”的起点。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个快得令人眩晕的世界里，波利斯的存在就像一个深长的呼吸。它提醒我们，旅行的意义有时不在于收集多少地标，而在于找到那样一个角落：在那里，你的内心节奏终于能与外界同步，你能听见自己思想的声音，也能听见神话在风中低语。每一位热爱深度游的旅人，都应该来一次波利斯。不是为了打卡，而是为了完成一次内心的校准。在这里的阳光下发会儿呆，在海风中读几页书，跟着本地人的步调走一段路，然后，带着被山海和神话重新滋养过的灵魂，更有力量地回到自己的生活里去。这，或许就是波利斯，这个塞浦路斯西北角安静渔村，所能赠予你的最珍贵的礼物。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/kourion-archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    库
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">库里翁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kourion</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/paphos-archaeological-park" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    帕
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">帕福斯考古公园</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Paphos Archaeological Park</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/lefkara-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    莱
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">莱夫卡拉</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Lefkara</p>
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
