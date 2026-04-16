import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞哥维亚罗马水道桥 Segovia Aqueduct｜两千年前的古罗马“摩天楼”，至今仍在城市心脏奔流 - 最佳欧洲景点',
  description: '说实话，没有任何照片能准备好迎接你第一次亲眼看到它的那种震撼。它就这么毫无预兆地、蛮横地闯进你的视野里，不是作为一个被玻璃罩起来的“景点”，而是作为一条横亘在现代化广场中央、贯穿了整条街道的灰色巨石“巨龙”。你从阿索圭霍广场那头的小巷钻出来，一抬头，整个人可能都会愣住几秒。天啊，它可真高。巨大的双层...',
}

export default function SegoviaAqueductPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '塞哥维亚罗马水道桥', href: '/attractions/segovia-aqueduct' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">塞哥维亚罗马水道桥・Segovia Aqueduct・西班牙・塞哥维亚</h1>
          <p className="text-lg text-gray-600 mb-6">
            说实话，没有任何照片能准备好迎接你第一次亲眼看到它的那种震撼。它就这么毫无预兆地、蛮横地闯进你的视野里，不是作为一个被玻璃罩起来的“景点”，而是作为一条横亘在现代化广场中央、贯穿了整条街道的灰色巨石“巨龙”。你从阿索圭霍广场那头的小巷钻出来，一抬头，整个人可能都会愣住几秒。天啊，它可真高。巨大的双层拱门叠罗汉似的向上延伸，最高的地方几乎有十层楼那么高，而最神奇的是，这些历经了近两千年风雨的巨石之间，你看不到一滴水泥的影子。它们就是那么严丝合缝地、骄傲地、仅靠重力咬合在一起，沉默地展示着一种属于古罗马的、近乎狂妄的自信。
走近了，你会闻到一股属于石头的气味，干燥的、带着些许历史尘埃的味道，混合着旁边咖啡馆飘出的咖啡香。把手掌贴上去，花岗岩的表面在阳光下是温热的，在阴影里则是沁人的凉。你可以清晰地看到每一块石头上被时光和无数只手抚摸得光滑的纹理，还有那些深深的、因为长期滴水而形成的凹槽。耳边是这座小城活生生的背景音：游客各种语言的惊叹，本地老人靠在拱门下聊天的西班牙语碎碎念，街头艺人弹奏的吉他声在拱廊下形成奇妙的回响。它就这么杵在城市的正中心，公交车从它脚下开过，情侣在它旁边的台阶上亲吻，孩子绕着它的基座追逐鸽子——它不是博物馆里的标本，它就是塞哥维亚跳动的心脏本身，是这座城市日常生活最雄伟的背景板。
它的核心魅力，正在于这种“活着”的永恒感。当你仰头凝视，想象着将近两千年前，清澈的雪山融水就从你现在头顶的高度，沿着那条石制水槽，哗啦啦地流过这一百六十多道拱门，奔腾十多公里，最终注入古城最高处的城堡与豪宅。它曾经是血液，是生命线。而今天，水早已干涸，但它作为城市脊梁和精神图腾的功能却从未改变。每一个拱门都像是一个画框，框住了后面层层叠叠的赭石色屋顶、教堂的尖塔和远方的青山。它连接的不再是水源与城市，而是遥远的过去与鲜活的当下，是神迹般的工程智慧与平凡温暖的人间烟火。站在它脚下，你会由衷地感到人类的渺小，同时又为人类能创造出如此不朽的杰作而感到一种沸腾的骄傲。这种复杂的情绪，便是塞哥维亚水道桥送给你最珍贵的礼物。
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">说实话，没有任何照片能准备好迎接你第一次亲眼看到它的那种震撼。它就这么毫无预兆地、蛮横地闯进你的视野里，不是作为一个被玻璃罩起来的“景点”，而是作为一条横亘在现代化广场中央、贯穿了整条街道的灰色巨石“巨龙”。你从阿索圭霍广场那头的小巷钻出来，一抬头，整个人可能都会愣住几秒。天啊，它可真高。巨大的双层拱门叠罗汉似的向上延伸，最高的地方几乎有十层楼那么高，而最神奇的是，这些历经了近两千年风雨的巨石之间，你看不到一滴水泥的影子。它们就是那么严丝合缝地、骄傲地、仅靠重力咬合在一起，沉默地展示着一种属于古罗马的、近乎狂妄的自信。</p>
              <p className="text-gray-700 leading-relaxed mb-4">走近了，你会闻到一股属于石头的气味，干燥的、带着些许历史尘埃的味道，混合着旁边咖啡馆飘出的咖啡香。把手掌贴上去，花岗岩的表面在阳光下是温热的，在阴影里则是沁人的凉。你可以清晰地看到每一块石头上被时光和无数只手抚摸得光滑的纹理，还有那些深深的、因为长期滴水而形成的凹槽。耳边是这座小城活生生的背景音：游客各种语言的惊叹，本地老人靠在拱门下聊天的西班牙语碎碎念，街头艺人弹奏的吉他声在拱廊下形成奇妙的回响。它就这么杵在城市的正中心，公交车从它脚下开过，情侣在它旁边的台阶上亲吻，孩子绕着它的基座追逐鸽子——它不是博物馆里的标本，它就是塞哥维亚跳动的心脏本身，是这座城市日常生活最雄伟的背景板。</p>
              <p className="text-gray-700 leading-relaxed mb-4">它的核心魅力，正在于这种“活着”的永恒感。当你仰头凝视，想象着将近两千年前，清澈的雪山融水就从你现在头顶的高度，沿着那条石制水槽，哗啦啦地流过这一百六十多道拱门，奔腾十多公里，最终注入古城最高处的城堡与豪宅。它曾经是血液，是生命线。而今天，水早已干涸，但它作为城市脊梁和精神图腾的功能却从未改变。每一个拱门都像是一个画框，框住了后面层层叠叠的赭石色屋顶、教堂的尖塔和远方的青山。它连接的不再是水源与城市，而是遥远的过去与鲜活的当下，是神迹般的工程智慧与平凡温暖的人间烟火。站在它脚下，你会由衷地感到人类的渺小，同时又为人类能创造出如此不朽的杰作而感到一种沸腾的骄傲。这种复杂的情绪，便是塞哥维亚水道桥送给你最珍贵的礼物。</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value="塞哥维亚罗马水道桥" />
                <InfoRow label="英文名称" value="Segovia Aqueduct" />
                <InfoRow label="正式名称" value="Segovia Aqueduct" />
                <InfoRow label="国家" value="西班牙" />
                <InfoRow label="城市" value="塞哥维亚" />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value="它是现存规模最大、保存最完好的古罗马水道桥之一，是罗马帝国工程学巅峰成就的活化石，也是塞哥维亚乃至伊比利亚半岛的象征。" />
                <InfoRow label="建筑特色" value="完全不用任何砂浆粘合，仅凭精确切割的花岗岩石块重力垒叠而成的双拱巨构，最高处达28.5米。" />
                <InfoRow label="建筑风格" value="典型的古罗马实用主义公共工程建筑，体现了极致的功能性与不朽的纪念性。" />
                <InfoRow label="文化价值" value="它是城市千年历史的见证者与参与者，从罗马时期的输水命脉演变为塞哥维亚人集体记忆与身份认同的核心地标。" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value="全天24小时开放，可自由在广场及周边观赏其外部宏伟结构。如需登上水道桥顶部或进入游客中心（位于广场旁），开放时间通常为夏季（4月至9月）上午10:00至晚上8:00；冬季（10月至3月）上午10:00至下午6:00。周一可能闭馆或缩短开放时间，重大节日如圣诞节和元旦全天关闭，行前建议查询当地旅游局官网确认。" />
              <InfoRow label="门票价格" value="观赏水道桥外部结构完全免费。登上顶部观景平台或参观游客中心展览的门票约为6欧元。优惠票价约为3-4欧元，适用于65岁以上长者、持学生证者及12-18岁青少年。12岁以下儿童免费。部分塞哥维亚旅游联票包含此项目，性价比更高。" />
              <InfoRow label="地址" value="Plaza del Azoguejo, 1, 40001 Segovia, Spain" />
              <InfoRow label="交通方式" value="从马德里出发是最便捷的选择。搭乘高速列车（AVE）从马德里查马丁火车站到塞哥维亚火车站（Segovia-Guiomar），车程约30分钟，但此站距老城还有20分钟车程，需转乘11路公交车。更推荐从马德里Moncloa长途汽车站乘坐频繁发车的区域巴士（La Sepulvedana公司），车程约1小时15分钟，直达塞哥维亚老城外的公交站，步行10分钟即可到达水道桥脚下。自驾从马德里出发约1.5小时，但老城内停车困难，建议将车停在城外停车场。无论哪种方式，建议早出发以避开一日游的人潮。" />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">关于它的确切出生日期，至今仍是个谜，学者们普遍认为它建于公元1世纪末到2世纪初，也就是图拉真或哈德良皇帝的时代。想象一下那个画面：罗马帝国正处于鼎盛时期，伊比利亚半岛是其重要的行省。塞哥维亚这座军事重镇需要稳定而充沛的水源来维持扩张。于是，一群无名的罗马工程师来到了这里。他们没有现代仪器，只有铅垂线、水平仪和惊人的数学头脑。他们看中了十几公里外瓜达拉马山脉的冰冷清泉，决定开山劈石，建一条“空中河流”把水引过来。这个决定本身就充满了史诗感。</p>
              <p className="text-gray-700 leading-relaxed mb-4">工程的难度超乎想象。为了保持水流依靠重力自然流淌，整个水道必须保持极其精密的坡度——每公里下降仅约一米。这意味着从水源地到城市的落差被完美地计算并分配到这漫长的旅途中。最惊险的部分，就是进入塞哥维亚城前的那段峡谷。城市坐落在高高的岩石山嘴上，水源地势低。怎么办？罗马人的答案是：架桥，造一道凌空飞渡的巨型高架渠。他们就地取材，开采附近山上的花岗岩，每一块石头都被切割成规整的方块，然后像玩一场巨型的、不许失败的积木游戏，全靠石匠的手艺和力学计算，一层一层地垒上去。没有水泥，意味着任何一块石头的尺寸或角度出错，都可能导致灾难性的坍塌。但他们成功了。当第一股清泉顺着高悬的水槽流进城市最高处的蓄水池时，这一定是整个塞哥维亚的节日。</p>
              <p className="text-gray-700 leading-relaxed mb-4">罗马帝国衰落后，水道桥奇迹般地没有沦为废墟。中世纪来了，摩尔人也来了，基督徒又回来了。在漫长的岁月里，它成了城市传说的一部分。基督徒们为它增添了传奇色彩，说它是魔鬼一夜之间建造的，为了换取一个女人的灵魂——当然，那女人最后用十字架破坏了魔鬼的计划，留下了那个著名的“缺失的石块”作为证据。这传说虽然荒诞，却反映了当时人们对这项工程近乎神迹的敬畏。更重要的是，它一直没闲着。摩尔人统治时期，它可能得到了修缮；基督徒收复后，它继续默默输水，直到近代。它甚至经历了战争的考验：据说，为了阻止敌人进攻，曾有人试图破坏它，但它的结构如此坚固，以至于破坏行动极其困难。</p>
              <p className="text-gray-700 leading-relaxed mb-4">然而，时间的侵蚀和现代交通的震动才是它最大的敌人。19世纪，汽车出现了，厚重的石拱门成了天然的“城门”，车辆在其间穿行，震动和污染开始威胁这座千年古迹。到了20世纪70年代，人们终于意识到必须保护它。一场伟大的“手术”开始了：交通被改道，损坏最严重的部分被小心翼翼地拆卸、编号，然后用同样的花岗岩和传统工艺修复，最后再像拼图一样原样装回去。这是一次向古罗马工匠的致敬。如今，你在某些石块上看到的编号，就是那次大修复留下的痕迹。今天，它不再输水，但被完美地融入了城市广场，成为世界文化遗产的核心。它的故事，从一条实用的水渠开始，历经神话、战争、遗忘与重生，最终升华为一个关于坚韧、智慧与永恒的文化符号。每一道拱门，都是一个世纪的页码。</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  完美的水道桥之旅，必须从一场“仰望”开始。强烈建议你在清晨（最好是早上8点前）抵达阿索圭霍广场。这时，旅游大巴还未涌入，金色的朝阳会从东侧斜射过来，为水道桥的东立面打上无比立体而温暖的光影，是拍照和静静感受其磅礴气势的黄金时刻。整体游览节奏宜慢不宜快，建议留出至少3-4小时。路线遵循“由远及近、由下至上、由外至内”的原则：先从远处几个观景点把握其全貌与城市的关系，然后走近触摸、穿越拱门，体验其作为街道的日常感，最后（如果开放）登上顶部或深入老城，从不同视角回望它。这样的安排能让你从宏观到微观，全方位理解这座建筑如何与塞哥维亚的血肉长在一起。
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>绝对不要在上午十点到下午四点之间的高峰时段只待在广场主拱门下，那时人潮会让你完全失去欣赏的心情。穿着舒适耐走的鞋子，因为塞哥维亚老城全是上下坡的鹅卵石路。警惕广场上一些过于热情、要往你手里塞草药或强行给你看手相的吉普赛人，礼貌而坚定地走开即可。
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">第一站直奔阿索圭霍广场最西端，背对老城，用最经典的视角完整拍下水道桥如同巨型管风琴般层层拔起的震撼全景。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">走到广场中央最大的拱门下，仰头转个圈，感受被巨石环形包围的压迫感，并寻找那块传说中因魔鬼诅咒而永远无法严丝合缝的“魔鬼之石”。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">像个本地人一样，顺着水道桥延伸的方向，穿过底下那些如今满是餐厅和纪念品店的拱廊街道，听脚步声在石壁间回响，看阳光透过拱门在石板路上画出移动的光斑。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">沿着 Calle de Juan Bravo 或 Calle de Cervantes 小巷向上坡走，找一个可以侧望水道桥的缝隙或平台，看它如何以绝对主导的姿态嵌入老城赭石色的建筑肌理之中。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">从老城高处，比如圣母教堂附近的观景台，回头俯瞰水道桥，这时它变成了一条贯穿现代城区的灰色线条，连接着远处的旷野与眼前的古城，理解其作为“通道”的原始功能。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">如果顶部通道开放，一定要上去走一走，站在古人修建的水槽旁，以两千年前水流的角度俯瞰脚下广场如蚂蚁般的人群和川流不息的街道。</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">最后，在夕阳西下时，回到广场东侧的一家露天咖啡馆坐下，点一杯当地的葡萄酒，看着晚霞将花岗岩从灰白染成金黄再变成瑰丽的粉紫色，等待灯光亮起，感受古迹从白日的雄浑变为夜晚的魔幻。</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. 阿索圭霍广场西侧仰拍全景</h4>
                  <p className="text-sm text-gray-700">清晨七点到八点半，阳光正好照亮东立面，使用广角镜头蹲低拍摄，将前景的街道和行人纳入，能极致展现其高度与纵深感。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. 穿过中心拱门向内拍</h4>
                  <p className="text-sm text-gray-700">下午三四点，阳光斜射入拱廊街道时，站在阴影里向明亮的街道尽头拍摄，拱门形成强烈的景深框景，人物剪影走动其中故事感十足。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. 从Calle de San Valentín小巷侧拍</h4>
                  <p className="text-sm text-gray-700">全天皆可，但下午光线更佳，这条窄巷提供了一个完美的侧视图，能将水道桥的巨大拱券与小巷的狭窄、老墙的斑驳同框，构成几何与岁月的对话。</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. 老城高处（如Casa de los Picos附近）俯瞰</h4>
                  <p className="text-sm text-gray-700">黄昏时分（黄金一小时），用长焦镜头压缩空间，捕捉水道桥如一条灰色缎带将新旧城区分隔开的独特城市肌理，背景是广阔的卡斯蒂利亚平原。</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. 夜景灯光下的拱门特写</h4>
                  <p className="text-sm text-gray-700">日落后蓝调时刻，使用三脚架，在广场东侧寻找一个能拍到两层拱门重叠的角度，暖黄色的灯光打在石壁上，与深蓝色的天空形成冷暖对比，神秘而庄严。</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• 使用偏振镜可以有效减少花岗岩表面的反光，让石头的纹理和色彩更加饱和浓郁。尊重当地居民隐私，避免将镜头直接对准在拱门下休息或住宅阳台上的当地人。无人机飞行在历史遗迹上空受到严格管制，未经许可请勿起飞。</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">景观首选</h4>
                  <p className="text-sm text-blue-800">坐落在阿索圭霍广场正对面的精品酒店，房间阳台正对着水道桥最宏伟的一段，你可以穿着睡衣就享受无与伦比的私人景观，夜晚看着灯光点亮石拱是最奢侈的体验。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">历史沉浸</h4>
                  <p className="text-sm text-green-800">藏在水道桥后面迷宫般老巷里的百年石屋民宿，由古老贵族宅邸改造，厚重的木梁、石墙和安静的庭院让你彻底融入中世纪氛围，走两步就是热闹的广场却又避开了喧闹。</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">现代舒适</h4>
                  <p className="text-sm text-yellow-800">位于老城边缘但步行可达的现代设计酒店，拥有宽敞的房间和屋顶露台酒吧，既能遥望水道桥的侧面全景，又能享受高品质的设施和宁静的睡眠，适合追求舒适度的家庭或情侣。</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">超值体验</h4>
                  <p className="text-sm text-purple-800">由友善本地家庭经营的公寓，位置稍远但仍在步行15分钟范围内，自带小厨房可以烹饪，让你像当地人一样去市场买菜，然后回家在窗边伴着远方水道桥的轮廓享用晚餐。</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">老城内的酒店大多由历史建筑改造，隔音可能一般且房间格局不规则，这正是魅力的一部分。塞哥维亚非常安全，深夜在老城漫步也无须担心。夏季和节日（如圣周）期间住宿非常紧俏，务必提前数月预订，尤其是那些带景观的房间。</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">离开塞哥维亚很久以后，我发现自己记忆最深的，不是水道桥精确的拱门数量或它的高度数据，而是一些极其细微的瞬间：午后阳光在巨石上移动的缓慢轨迹，鸽子从最高处拱券里突然飞出的扑翅声，还有当地老人靠在它基座上，那副安然自若、仿佛倚靠着一位老朋友的松弛神情。这座桥教会我一件事：真正的伟大，从来不是高高在上、仅供朝拜的。它是在完成了惊世骇俗的使命之后，能谦卑地融入市井，成为人们生活里一道寻常却又不可或缺的风景。</p>
              <p className="text-gray-700 leading-relaxed mb-4">在这个追求速度、迷恋新奇的年代，塞哥维亚水道桥像一位沉静的时间智者。它不言语，只是矗立。但它用每一块没有砂浆却紧密相连的石头，无声地诉说着关于耐心、精准、以及与自然和社群和谐共处的古老智慧。它提醒我们，人类可以创造出穿越千年的东西，不是靠掠夺与征服，而是靠对规律的尊重、对技艺的专注，以及对共同体福祉的担当。每一位热爱深度游的旅人都该来看看它，不仅仅是为了打卡一个世界遗产，更是为了来接受一次“尺度”的洗礼——在这里，个人的烦忧在两千年的存在面前会悄然消解，而人类文明的韧性则会给你注入一股深沉而温暖的力量。你会带着这份力量离开，并在未来某个时刻，忽然想起那道灰色的、坚实的拱门，然后，再次感到脚踏实地。</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
