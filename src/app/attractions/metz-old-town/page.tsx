import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '梅茨老城 Metz Old Town｜德法混血的慢生活美学，在法国东北发现被低估的宝藏古城 - 最佳欧洲景点',
  description: '还记得我刚从梅茨火车站那座宏伟的德式新罗马风格大厅走出来时的情景吗？阳光正好，空气里有种清冽的味道，混合着远处面包房的黄油香和秋天落叶的淡淡腐朽气息。我顺着人流方向，走过一条宽阔的林荫大道，然后，几乎是在一转弯的瞬间，世界就变了。喧闹的车流声被骤然收窄的石板路吸走，眼前铺开的是蜂蜜色的、奶油色的、淡...',
}

export default function MetzOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '梅茨老城', href: '/attractions/metz-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">梅茨老城・Metz Old Town・法国・梅茨</h1>
          <p className="text-lg text-gray-600 mb-6">
            还记得我刚从梅茨火车站那座宏伟的德式新罗马风格大厅走出来时的情景吗？阳光正好，空气里有种清冽的味道，混合着远处面包房的黄油香和秋天落叶的淡淡腐朽气息。我顺着人流方向，走过一条宽阔的林荫大道，然后，几乎是在一转弯的瞬间，世界就变了。喧闹的车流声被骤然收窄的石板路吸走，眼前铺开的是蜂蜜色的、奶油色的、淡鹅黄色的建筑立面，在午后阳光里温暖得像刚出炉的姜饼。这就是梅茨老城给我的第一印象——它不是那种凌厉的、试图用恢弘压倒你的美，而是一种温润的、带着生活质感的邀请。
你仔细听，声音是分层的。脚下是行李箱轮子碾过古老卵石路的咕噜声，间或混杂着咖啡馆外瓷杯轻碰的脆响。空气中飘来可丽饼在铁板上滋啦作响的油香，混合着旁边巧克力店里浓郁的可可甜腻。拐进一条更小的巷子，你可能会听到从某扇半开的门里流泻出的古典钢琴练习曲，又或者，在路过圣埃蒂安大教堂时，被那巨大管风琴的低沉吟诵瞬间笼罩，声音仿佛有了形状和重量，沉甸甸地压在胸口，然后又化作一种奇异的宁静。这里的生活节奏是慢板。下午三四点，广场上的露天座就陆续被当地人占据，一杯啤酒，一小碟橄榄，一场漫无目的的闲聊，能持续到天色将晚。你会意识到，这座古城不是博物馆里的标本，它是梅茨人实实在在的客厅、走廊和厨房。
而最迷人的，莫过于那条摩泽尔河与它的支流塞尔河，它们像温柔的臂弯，将老城中心的主岛区轻轻环抱。河水是沉静的墨绿色，倒映着两岸色彩斑驳的老房子和教堂尖塔的完美剪影。站在古老的“德意志门”桥上，向左看是厚重的中世纪塔楼，向右看，蓬皮杜中心梅茨分馆那顶白色树脂制成的巨大“中国帽”屋顶，正在阳光下闪着未来主义的光芒。这种时间的并置与对话，毫无冲突，反而生出一种奇妙的和谐感。你会感觉到，历史在这里不是一层层被覆盖的尘土，而是一股持续流淌的活水，从罗马时代，流经神圣罗马帝国，穿过德意志第二帝国的雄心，最终汇入现代法兰西的日常之中，滋养出了这座古城独一无二、从容不迫的混血灵魂。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">还记得我刚从梅茨火车站那座宏伟的德式新罗马风格大厅走出来时的情景吗？阳光正好，空气里有种清冽的味道，混合着远处面包房的黄油香和秋天落叶的淡淡腐朽气息。我顺着人流方向，走过一条宽阔的林荫大道，然后，几乎是在一转弯的瞬间，世界就变了。喧闹的车流声被骤然收窄的石板路吸走，眼前铺开的是蜂蜜色的、奶油色的、淡鹅黄色的建筑立面，在午后阳光里温暖得像刚出炉的姜饼。这就是梅茨老城给我的第一印象——它不是那种凌厉的、试图用恢弘压倒你的美，而是一种温润的、带着生活质感的邀请。</p>
              <p className="text-gray-700 leading-relaxed mb-4">你仔细听，声音是分层的。脚下是行李箱轮子碾过古老卵石路的咕噜声，间或混杂着咖啡馆外瓷杯轻碰的脆响。空气中飘来可丽饼在铁板上滋啦作响的油香，混合着旁边巧克力店里浓郁的可可甜腻。拐进一条更小的巷子，你可能会听到从某扇半开的门里流泻出的古典钢琴练习曲，又或者，在路过圣埃蒂安大教堂时，被那巨大管风琴的低沉吟诵瞬间笼罩，声音仿佛有了形状和重量，沉甸甸地压在胸口，然后又化作一种奇异的宁静。这里的生活节奏是慢板。下午三四点，广场上的露天座就陆续被当地人占据，一杯啤酒，一小碟橄榄，一场漫无目的的闲聊，能持续到天色将晚。你会意识到，这座古城不是博物馆里的标本，它是梅茨人实实在在的客厅、走廊和厨房。</p>
              <p className="text-gray-700 leading-relaxed mb-4">而最迷人的，莫过于那条摩泽尔河与它的支流塞尔河，它们像温柔的臂弯，将老城中心的主岛区轻轻环抱。河水是沉静的墨绿色，倒映着两岸色彩斑驳的老房子和教堂尖塔的完美剪影。站在古老的“德意志门”桥上，向左看是厚重的中世纪塔楼，向右看，蓬皮杜中心梅茨分馆那顶白色树脂制成的巨大“中国帽”屋顶，正在阳光下闪着未来主义的光芒。这种时间的并置与对话，毫无冲突，反而生出一种奇妙的和谐感。你会感觉到，历史在这里不是一层层被覆盖的尘土，而是一股持续流淌的活水，从罗马时代，流经神圣罗马帝国，穿过德意志第二帝国的雄心，最终汇入现代法兰西的日常之中，滋养出了这座古城独一无二、从容不迫的混血灵魂。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="梅茨老城" />
                <InfoRow label="英文名称" value="Metz Old Town" />
                <InfoRow label="正式名称" value="Metz Old Town" />
                <InfoRow label="国家" value="法国" />
                <InfoRow label="城市" value="梅茨" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="一座历经罗马、法兰克、神圣罗马帝国、德意志第二帝国及现代法国统治的千年古城，是德法文化交融的活见证。" />
                <InfoRow label="建筑特色" value="“黄砂岩之城”，建筑色彩与质感独特，宏伟的德式新罗马与新哥特风格公共建筑与轻盈法式庭院和谐共存。" />
                <InfoRow label="建筑风格" value="以德式新罗马风与洛林哥特式为主干，巧妙融合了文艺复兴、新艺术运动及现当代建筑元素。" />
                <InfoRow label="文化价值" value="不仅保存了中世纪以来的城市肌理，更以蓬皮杜中心梅茨分馆等现代地标，完成了从历史名城到当代艺术十字路口的华丽转身。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="老城区街道及公共广场全天开放。区域内主要景点如圣埃蒂安大教堂开放时间为周一至周六上午8:00至下午7:00，周日下午2:00至7:00；梅茨中心市场开放时间为周二、周四及周六上午7:00至下午1:00；各博物馆开放时间不一，通常为上午10:00至下午6:00，周一或周二闭馆。建议行前具体查询。" />
              <InfoRow label="门票价格" value="漫步老城本身免费。内部景点：圣埃蒂安大教堂免费参观（登塔及珍宝室需少量费用）；梅茨蓬皮杜中心常设展览约7-12欧元；梅茨城市历史博物馆约5欧元。学生、青年及团体通常享有优惠。" />
              <InfoRow label="地址" value="Ville de Metz, 57000 Metz, France" />
              <InfoRow label="交通方式" value="从最近的梅茨-南希洛林机场（ETZ）出发，搭乘出租车约30分钟可达老城中心，费用约40-50欧元。最方便的方式是乘坐火车：从巴黎东站乘坐TGV高速列车，约1小时20分钟直达梅茨火车站（Gare de Metz-Ville），班次频繁。火车站本身是一座壮丽的德式建筑，出站后步行约10-15分钟即可踏入老城核心区。城市内公共交通便利，但探索老城最佳方式是步行。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">说起梅茨的故事，我们得把时钟拨回到两千多年前。那时候，这里住着一个叫“梅迪奥马特里奇”的高卢部落，“梅茨”这个名字正是从他们而来。罗马人来了，看中了这里两条河流交汇的战略要地，建起了坚固的城堡和高架水渠，那些沉默的石块，至今还零星散落在城市的某些角落，是老城最古老的底色。但真正让梅茨登上历史舞台中央的，是教堂。中世纪早期，梅茨成了法兰克王国的一个重要主教区，圣埃蒂安大教堂的前身，一座宏伟的罗曼式教堂开始奠基。到了十三世纪，他们决定玩个大的——用当时最新潮的哥特式风格，建一座“上帝之灯”。</p>
              <p className="text-gray-700 leading-relaxed mb-4">于是，你看到了今天圣埃蒂安大教堂那惊人的彩绘玻璃窗阵列，总面积近6500平方米，从13世纪到20世纪的杰作都有，包括现代艺术大师夏加尔的手笔。建造它花了几百年，这期间，梅茨作为独立的共和国（虽名义上属于神圣罗马帝国）繁荣起来，商人和工匠行会势力强大，留下了今天老城里那些漂亮的同业公会建筑和繁华的市场广场。但命运的风向在1870年彻底改变。普法战争法国战败，梅茨连同整个阿尔萨斯-洛林地区，被割让给了新成立的德意志第二帝国。</p>
              <p className="text-gray-700 leading-relaxed mb-4">德国人把梅茨当作帝国西部的前哨堡垒来经营。他们拆掉了一部分法国风格的中世纪城墙，以惊人的手笔，建造了一系列我们今天看到的宏伟公共建筑：那个像宫殿一样的火车站、新哥特风格的邮政总局、庞大的德意志帝国区建筑群。用的都是本地特产的茹埃夫黄色砂岩，在阳光下金灿灿的，带着一种严谨、肃穆又充满力量的德意志美学。这一时期，梅茨的城市面积扩大了一倍，德国人想在这里打造一个“模范德国城市”。对于当时的梅茨人（绝大多数仍讲法语）来说，这是一段复杂、充满压抑与抗争的岁月，但客观上，它给城市肌理留下了不可磨灭的、厚重的一笔。</p>
              <p className="text-gray-700 leading-relaxed mb-4">两次世界大战的炮火都曾掠过梅茨的天空。一战后它回归法国，二战后再次经历占领与解放。战后的梅茨，面临着如何消化这段复杂历史、重塑城市身份的挑战。他们没有选择简单地“去德国化”，而是以一种惊人的包容和远见，将这段历史层积接纳为自身独特遗产的一部分。直到2010年，蓬皮杜中心梅茨分馆的落成，像一个宣言，宣告了这座古老城市的当代雄心。他们把法国最顶尖的现代艺术博物馆，放在了昔日德意志帝国区的边缘，用充满想象力的建筑，与厚重的历史对话。今天的梅茨老城，每一块黄砂岩，每一扇彩绘玻璃，每一道河水泛起的波纹，都在轻声讲述这个关于交融、创伤、重生与超越的漫长故事。它不是非此即彼，而是亦此亦彼，这种复杂性，正是它最深邃的魅力所在。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  我强烈建议你把一整个下午和傍晚的时间留给梅茨老城，这是它最美、最生动的时刻。路线可以从午后阳光最充沛时开始，先拜访那座“上帝之灯”吸取视觉震撼，然后在老城巷弄里慢慢迷失，感受生活气息，接着沿河岸漫步，欣赏水光倒影，最后在黄昏时分抵达中心广场，融入当地人享受夜晚的松弛节奏。全程步行，节奏宜慢不宜快，核心是感受而非打卡。大约需要4-5小时，穿一双绝对舒适的步行鞋是唯一且最重要的装备。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>老城的石板路对拉杆箱和高跟鞋极不友好，务必选择舒适平底鞋。部分小巷在夜晚照明较暗，单独出行建议避开过于偏僻的小径。许多小店和餐馆在下午两点到傍晚七点之间可能休息，安排用餐时间需注意。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">午后第一站直奔圣埃蒂安大教堂，让那从数十米高彩绘玻璃窗倾泻而下的、宛如宝石熔化的绚丽光影给你一个最震撼的欢迎礼。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从教堂侧门出来立刻拐进后面迷宫般的狭窄巷子，让你的嗅觉引领你——跟着新鲜面包、咖啡香或某家餐馆炖肉的浓郁香气去发现惊喜。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">一定要去探访古老的“谷物市场”，哪怕不买东西，也要看看那座文艺复兴风格的木筋墙建筑和感受一下市场里鲜活嘈杂的生活脉搏。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着塞尔河的河岸慢慢走，穿过一座又一座古桥，从不同角度欣赏老房子倒映在水中的斑斓色彩和完美对称。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">找到那座连接岛区与德意志帝国区的“德意志门”桥，站在桥中央，感受左手中世纪塔楼与右手现代蓬皮杜中心“白帽子”形成的时空对话。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">在黄昏降临前，钻进圣路易广场或喜剧院广场周边的任意一家咖啡馆或酒吧，像当地人一样点一杯“Mirabelle”李子酒，看广场灯光渐次亮起。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">如果还有余力，晚餐后可以散步到摩泽尔河的新桥边，回望夜色中灯火通明的老城岛区，宛如一座浮在墨色河水上的金色宫殿。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 圣埃蒂安大教堂内部中殿仰拍彩绘玻璃</h4>
                  <p className="text-sm text-gray-700">下午三点后的斜阳能穿透西立面及耳堂的巨幅玻璃，在中殿石柱上投下无比绚丽的光谱，蹲低身体用广角镜头向上拍摄，将人与光影一同纳入镜中。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 摩泽尔河新桥（Pont du Nouveau Monde）远眺全景</h4>
                  <p className="text-sm text-gray-700">日落前后半小时，站在桥的人行道上，使用长焦镜头压缩空间，将岛区圣埃蒂安大教堂的尖顶、古老的房屋屋顶与水中倒影一并框入，构成一幅金色调的古典油画。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. “德意志门”桥上的对称构图</h4>
                  <p className="text-sm text-gray-700">清晨或傍晚光线柔和时，站在桥的拱顶最高处，将桥两侧的石砌护栏作为引导线，一侧对准老城岛区的传统屋宇，另一侧对准蓬皮杜中心的现代轮廓，形成强烈的时代对比。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 喜剧院广场的夜晚氛围</h4>
                  <p className="text-sm text-gray-700">华灯初上时，找一家咖啡馆的室外座位作为前景，用大光圈虚化近处的酒杯与人影，清晰捕捉广场中央的雕像、被灯光温柔打亮的古典建筑立面以及悠闲的人群，营造故事感。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 拍摄教堂内部时请绝对关闭闪光灯，以免损害珍贵的彩绘玻璃并影响他人。使用三脚架需谨慎，繁忙时段可能不被允许。当地人对于被直接拍摄可能敏感，建议以环境人像或获取同意为主，尊重隐私。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">性价比之选</h4>
                  <p className="text-sm text-blue-800">藏身于老城中心一条安静小巷里的百年老宅民宿，木梁天花板嘎吱作响却充满情调，女主人会为你准备一篮地道的洛林玛德琳蛋糕作为欢迎礼。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">特色体验</h4>
                  <p className="text-sm text-green-800">位于塞尔河畔由古老磨坊改造的精品设计酒店，房间的落地窗正对潺潺流水与对岸的历史建筑，晚上枕着水声入眠，清晨在河面升腾的薄雾中醒来。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">高端享受</h4>
                  <p className="text-sm text-yellow-800">坐落在德意志帝国区一座修复的19世纪宫殿内的五星级酒店，内部是新艺术风格的奢华装饰，步行至老城仅五分钟，既能享受极致宁静又置身历史中心。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">艺术爱好者之选</h4>
                  <p className="text-sm text-purple-800">蓬皮杜中心梅茨分馆附近的现代设计师公寓，拥有开阔的视野能将蓬皮杜的白色屋顶与圣埃蒂安大教堂的尖顶同时收入眼底，空间充满当代艺术气息。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城岛区内的住宿最具氛围，但夜间可能更热闹；河对岸的住宿更为宁静。梅茨整体治安良好，但选择住宿时仍建议查看夜间周边环境。旺季（夏季及圣诞市场期间）需提前很久预订，平日选择则充裕得多。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开梅茨很久以后，我脑海里反复回响的，不是某个具体的建筑细节，而是一种感觉。一种奇妙的“平衡感”。在这里，厚重与轻盈平衡，历史与当下平衡，德国的严谨秩序与法国的浪漫随性平衡，甚至游客的喧闹与居民的日常也平衡得恰到好处。它没有巴黎那种令人窒息的辉煌，也没有某些古镇那种凝固在时光里的做作。它坦然展示着自己的每一道历史疤痕与每一次文化嫁接，并将它们全部转化为今天从容生活的一部分。这种自信与包容，在今日这个越来越趋向于对立和简化的世界里，显得尤为珍贵。</p>
              <p className="text-gray-700 leading-relaxed mb-4">所以，如果你厌倦了那些被游客大军淹没的“必去”名单，如果你渴望一场能同时喂饱眼睛、心灵和胃囊，还能引发些许历史沉思的旅行，那么，请把梅茨老城放进你的地图。它不会用惊声尖叫的奇观来取悦你，却会用一种涓涓细流般的温柔，慢慢浸润你。你会在这里学会慢下来，学会欣赏混血的美丽，学会在一杯本地啤酒的泡沫里，品尝出一个千年边境之城的复杂滋味。这不仅仅是一次观光，更是一次关于时间、文化与身份的和解之旅。梅茨，这位低调的“洛林美人”，值得你专程前来，与她共度一段悠长的、闪着金黄色泽的午后时光。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
