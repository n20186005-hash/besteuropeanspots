import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '萨莫拉大教堂 Zamora Cathedral｜探访西班牙“十二座罗马式教堂之城”的隐秘冠冕 - 最佳欧洲景点',
  description: '第一次见到萨莫拉大教堂，是在一个卡斯蒂利亚高原典型的、阳光烈得能把影子烙在地上的下午。我穿过那道著名的“忠诚之门”，从拥挤的、散发着橄榄油面包香气的小巷里猛地钻出来，眼前豁然开朗。它就那样毫无预警地矗立在一片开阔的砾石广场上，背后是杜罗河深深的河谷和远方的旷野。那一瞬间的感觉很难形容，不是惊艳，更像...',
}

export default function ZamoraCathedralPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '西班牙', href: '/destinations/spain' },
            { label: '萨莫拉大教堂', href: '/attractions/zamora-cathedral' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`萨莫拉大教堂・Zamora Cathedral・西班牙・萨莫拉`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`第一次见到萨莫拉大教堂，是在一个卡斯蒂利亚高原典型的、阳光烈得能把影子烙在地上的下午。我穿过那道著名的“忠诚之门”，从拥挤的、散发着橄榄油面包香气的小巷里猛地钻出来，眼前豁然开朗。它就那样毫无预警地矗立在一片开阔的砾石广场上，背后是杜罗河深深的河谷和远方的旷野。那一瞬间的感觉很难形容，不是惊艳，更像是一种沉重的、带着历史温度的撞击。它不像其他大教堂那样拼命向天空刺去，而是稳稳地、几乎是倔强地“坐”在山丘之巅，赭石色的墙体在夕阳下泛着蜂蜜般的光泽，带着被风沙和岁月磨砺出的粗粝质感。
走近了，你会立刻被它的“矛盾”所吸引。整体是典型的罗马式厚重与封闭，墙壁厚实，窗户窄小，仿佛一座随时准备迎接战火的堡垒。但你的视线一定会被那个独一无二的圆顶牢牢抓住——那不是哥特式的尖耸，也不是文艺复兴的浑圆，而是一个覆盖着灰黑色板岩“鳞片”的圆锥体，层层叠叠，像一件巨大的、古老的盔甲，又像松果或龙背，在蓝天下呈现出奇异的几何美感。四周环绕着四座小塔楼，让整个结构看起来既庄严又充满异域风情。当地人管这叫“鸡笼顶”，带着点亲切的揶揄，但你会听出里面的自豪。广场上并不总是游客，更多是推着婴儿车散步的母亲，坐在长椅上晒太阳、用很快的西班牙语聊天的老人，鸽子扑棱棱地飞过塔楼。教堂的钟声响起时，声音沉郁而洪亮，在周围的石头房子间来回碰撞，最后消散在干燥的空气里，那一刻你会觉得，这座教堂从未离开过生活，它依然是这座城市跳动的心脏和最坚固的脊梁。
最打动人的，或许是它那份“边境的孤独感”。萨莫拉在历史上是“荒原之城”，是基督教王国对抗南方的先锋堡垒。这座教堂的建筑语言里，没有后来托莱多或布尔戈斯大教堂那种彰显帝国权威的繁复与奢华，有的是一种在困境中凝聚出的、混杂着警惕、坚韧与创造力的独特美学。它把防御的实用与信仰的崇高不可思议地糅合在了一起。站在它面前，你能闻到石头被晒热的气味，听到风声穿过塔楼孔洞的呜咽，触摸到门廊上被无数代信徒手掌磨得光滑的浮雕。它不试图讨好你，只是沉默地展示着时间的力量和人类在动荡年代里对永恒之美的执着追求。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`第一次见到萨莫拉大教堂，是在一个卡斯蒂利亚高原典型的、阳光烈得能把影子烙在地上的下午。我穿过那道著名的“忠诚之门”，从拥挤的、散发着橄榄油面包香气的小巷里猛地钻出来，眼前豁然开朗。它就那样毫无预警地矗立在一片开阔的砾石广场上，背后是杜罗河深深的河谷和远方的旷野。那一瞬间的感觉很难形容，不是惊艳，更像是一种沉重的、带着历史温度的撞击。它不像其他大教堂那样拼命向天空刺去，而是稳稳地、几乎是倔强地“坐”在山丘之巅，赭石色的墙体在夕阳下泛着蜂蜜般的光泽，带着被风沙和岁月磨砺出的粗粝质感。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会立刻被它的“矛盾”所吸引。整体是典型的罗马式厚重与封闭，墙壁厚实，窗户窄小，仿佛一座随时准备迎接战火的堡垒。但你的视线一定会被那个独一无二的圆顶牢牢抓住——那不是哥特式的尖耸，也不是文艺复兴的浑圆，而是一个覆盖着灰黑色板岩“鳞片”的圆锥体，层层叠叠，像一件巨大的、古老的盔甲，又像松果或龙背，在蓝天下呈现出奇异的几何美感。四周环绕着四座小塔楼，让整个结构看起来既庄严又充满异域风情。当地人管这叫“鸡笼顶”，带着点亲切的揶揄，但你会听出里面的自豪。广场上并不总是游客，更多是推着婴儿车散步的母亲，坐在长椅上晒太阳、用很快的西班牙语聊天的老人，鸽子扑棱棱地飞过塔楼。教堂的钟声响起时，声音沉郁而洪亮，在周围的石头房子间来回碰撞，最后消散在干燥的空气里，那一刻你会觉得，这座教堂从未离开过生活，它依然是这座城市跳动的心脏和最坚固的脊梁。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最打动人的，或许是它那份“边境的孤独感”。萨莫拉在历史上是“荒原之城”，是基督教王国对抗南方的先锋堡垒。这座教堂的建筑语言里，没有后来托莱多或布尔戈斯大教堂那种彰显帝国权威的繁复与奢华，有的是一种在困境中凝聚出的、混杂着警惕、坚韧与创造力的独特美学。它把防御的实用与信仰的崇高不可思议地糅合在了一起。站在它面前，你能闻到石头被晒热的气味，听到风声穿过塔楼孔洞的呜咽，触摸到门廊上被无数代信徒手掌磨得光滑的浮雕。它不试图讨好你，只是沉默地展示着时间的力量和人类在动荡年代里对永恒之美的执着追求。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`萨莫拉大教堂`} />
                <InfoRow label="英文名称" value={`Zamora Cathedral`} />
                <InfoRow label="正式名称" value={`圣萨尔瓦多与圣伊尔德丰索大教堂`} />
                <InfoRow label="国家" value={`西班牙`} />
                <InfoRow label="城市" value={`萨莫拉`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`它是西班牙杜罗河畔“罗马式教堂之路”上最璀璨的明珠，被誉为伊比利亚半岛罗马式建筑向哥特式过渡的活化石。`} />
                <InfoRow label="建筑特色" value={`以其独一无二的“拜占庭式”鳞片状圆顶和宛如城堡般敦实的西侧塔楼而震撼人心。`} />
                <InfoRow label="建筑风格" value={`以纯粹的罗马式风格为基底，巧妙融入了西哥特、阿拉伯穆德哈尔以及早期哥特式的元素。`} />
                <InfoRow label="文化价值" value={`它不仅是一座宗教圣殿，更是萨莫拉这座城市作为中世纪边境要塞的石头史书，见证了基督教王国与阿拉伯政权长达数个世纪的拉锯与融合。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`冬季（10月至次年3月）周一至周六上午10:00至下午2:00，下午4:30至6:30；夏季（4月至9月）周一至周六上午10:00至下午2:00，下午5:00至晚上8:00。周日及宗教节日全天仅对礼拜者开放，游客可在弥撒间隙入内参观。请注意，中午通常有较长的闭门休息时间（约2-3小时），具体变动会张贴于门口。每年1月1日、1月6日、12月25日全天关闭。`} />
              <InfoRow label="门票价格" value={`普通门票6欧元。65岁以上老人、持有学生证的学生、12人以上团体票价为4欧元。每周四下午（冬季4:30后，夏季5:00后）可免费入内参观。持有“萨莫拉罗马式艺术通票”（约12欧元，包含城内多处景点）可享受折扣。12岁以下儿童在成人陪同下免票。`} />
              <InfoRow label="地址" value={`Plaza de la Catedral, s/n, 49001 Zamora, Spain`} />
              <InfoRow label="交通方式" value={`从马德里出发最为方便。在马德里查马丁火车站乘坐Renfe火车，前往萨莫拉-卡斯蒂利亚火车站，车程约2小时15分钟至3小时，每日有5-6班列车，建议提前在Renfe官网购票，通常越早价格越优。从萨拉曼卡出发也可乘坐区域巴士，车程约1小时，班次较多但舒适度不及火车。抵达萨莫拉后，大教堂位于老城区的最高点，从火车站或巴士站步行前往约需20-25分钟，全程是上坡的石板路，拖着大行李会有些吃力，但沿途穿越老城墙和巷弄的体验本身就很棒。城内也有出租车，费用不高。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`说起萨莫拉大教堂的故事，得把时钟拨回到12世纪中叶，那是一个信仰与刀剑激烈碰撞的时代。基督教王国从北向南的“收复失地运动”正进行到关键阶段，萨莫拉这座杜罗河畔的战略要地，刚刚从阿拉伯人手中夺回不久，百废待兴。为了彰显基督教的胜利并巩固统治，国王阿方索七世决定在这里建造一座与王国地位相称的主教座堂。大约在1151年前后，工程在旧西哥特教堂的遗址上启动了。谁是总建筑师？历史没有留下他的名字，这反而给这座建筑增添了一丝神秘色彩。人们只知道，这位（或这群）匠师一定见识非凡，他们不仅精通当时伊比利亚半岛最纯正的罗马式技艺，其目光很可能还越过了比利牛斯山，甚至遥望了东方。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`最有力的证据就是那个传奇的圆顶。学者们为此争论不休：它的灵感是来自法国阿基坦地区的教堂？还是随着十字军东征带来的、对君士坦丁堡圣索菲亚大教堂的模糊记忆？抑或是本地工匠对阿拉伯建筑中砖砌穹顶技术的石头转化？答案可能是以上全部。这就是萨莫拉大教堂最迷人的地方——它是一个文化杂交的产物。在建造它的那些年里，萨莫拉是前线，也是交流站。基督徒、穆斯林、犹太工匠可能曾在一起工作，把各自的符号与技艺，在不经意间垒进了这座上帝的殿堂。那鳞片状的圆顶，既有罗马式的结构逻辑，又闪烁着拜占庭甚至伊斯兰的幻影，它是在战争的夹缝中开出的一朵奇异的艺术之花。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`教堂的主体在13世纪初基本建成，随后便开始了漫长的内部装饰和增补。14世纪，那个带有穆德哈尔风格（基督教统治下穆斯林工匠的艺术）的精美回廊被添加进来，红砖与白石交织的拱券，柔和了教堂外部的冷峻。16世纪，文艺复兴的春风吹到了这里，主祭坛被华丽的金色木雕所覆盖，唱诗班的席位也雕刻得精美绝伦。然而，历史并未一直眷顾这里。拿破仑战争期间，法国军队曾将教堂当作马厩和仓库，造成了不小的破坏。19世纪的“没收教产”运动又让许多附属建筑被拆毁或改作他用，我们今天看到的开阔广场，其实部分是那时“清理”出来的结果。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`它真正被重新发现和珍视，要等到20世纪。艺术史学家们像发现新大陆一样，重新评估了这座偏远大教堂的价值，将它定义为“罗马式艺术的巅峰之作”和“风格转折的关键见证”。漫长的修复工作开始了，工匠们小心翼翼地拂去几个世纪的尘埃和拙劣的修补，让那些古老的石刻重新呼吸。1998年，萨莫拉古城连同这座大教堂，被列入世界遗产预备名单。如今，当你穿行其中，每一步踩着的都是层层叠加的时间：12世纪地基的冰冷，16世纪木雕的温润，19世纪修复的补痕，以及当下游客轻微的脚步声。它不再仅仅是一座教堂，而是一部用石头写就的、关于生存、信仰、毁灭与重生的史诗，静静地立在杜罗河畔，讲述着西班牙灵魂深处那段复杂而辉煌的往事。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议将整个游览安排半天时间（约4小时）。最佳抵达时间是上午10点开门前，这样你可以先在广场上静静欣赏教堂的全貌和光影变化，避开随后可能到来的小型旅游团。进入后，先从右手边的侧门登上钟楼（如果开放），从制高点建立对城市和教堂布局的全局观。然后回到地面，从西门主入口开始正式的内部参观，按照中殿、耳堂、圆顶下方、主祭坛、回廊的顺序，细细品味建筑与艺术的细节。最后一定要去毗邻的主教座博物馆，那里收藏的镇馆之宝——一组15世纪的弗朗德拉斯绣帷——绝对会让你不虚此行。中午阳光最烈时，你刚好可以在凉爽的回廊或博物馆内活动。整个节奏应该是先宏观后微观，先建筑后艺术，让历史的层次感在脑海中缓缓展开。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`教堂内部地面多为光滑的石板和大理石，建议穿防滑舒适的鞋子，女性避免细高跟鞋，否则走在倾斜的古老地面上会很吃力。夏季卡斯蒂利亚高原紫外线极强，教堂广场毫无遮蔽，务必做好防晒。教堂内部分区域（如祭坛前）禁止拍照或需关闭闪光灯，请务必遵守指示牌规定，管理人员对此很严格。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上午开门前先环绕教堂外部走一圈，用手触摸不同朝向墙体温度的差异，观察晨曦如何一点点照亮那鳞片状的圆顶。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从西侧那扇朴素而庄严的“主教之门”进入，让眼睛适应内部的昏暗，第一时间去感受从中殿尽头圆顶下方倾泻而下的那束神圣而静谧的光柱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`站在耳堂中央，彻底仰起头，花十分钟凝视那个从内部看更加复杂的穹顶，数一数那些支撑鼓座的拱肋，想象12世纪的工匠是如何完成这计算与美学的奇迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走近主祭坛，屏息细看那些镀金的文艺复兴木雕，在柔和的射灯下寻找讲述圣经故事的精微细节，以及雕刻师可能偷偷留下的世俗面孔。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过一扇小门进入回廊，光线和氛围陡然一变，红白相间的拱廊围出一方宁静的天地，找条石凳坐下，听喷泉的潺潺水声，看橘树在方形庭院中投下的影子。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要拜访主教座博物馆，在略显幽暗的展厅里，近距离面对那幅巨大的《塔罗的胜利》绣帷，看丝线如何在五百年前织出依然鲜活的愤怒、悲伤与荣耀。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从博物馆出来，绕到教堂的东侧下方，那里是观赏教堂雄踞于山崖、与下方古城屋顶及杜罗河构成绝佳画面的秘密角度。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`杜罗河对岸观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前两小时，带上长焦镜头，可以完美捕捉大教堂连同老城墙的剪影，以及它在河水中金色的倒影，这是萨莫拉的经典明信片角度。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`回廊东南角拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`午后阳光斜射时，利用拱门形成天然画框，聚焦庭院中央的橘树或喷泉，红砖白石的光影交错能拍出极具几何美感和宁静氛围的作品。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主教座博物馆二楼窗户`}</h4>
                  <p className="text-sm text-gray-700">{`从博物馆内部的某个朝西的窗口向外拍，可以将古老的绣帷作为前景虚影，框住窗外实景的大教堂圆顶，形成历史与建筑的时空对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`南侧“忠诚之门”入口巷道`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，巷子两侧建筑投下深长的阴影，利用巷道的纵深感，将尽头露出的大教堂局部作为引导线的终点，拍出富有故事感的街头摄影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部允许摄影的区域通常禁止使用三脚架和自拍杆，以免阻碍通道或影响其他参观者。使用手机或手持相机拍摄时，尽量调高ISO而非依赖闪光灯，以保持室内庄严的自然光影氛围。拍摄外部时，尊重当地居民隐私，避免将镜头直接对准私人住宅的窗户。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`古城心脏体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在广场旁由16世纪贵族宅邸改造的精品酒店，推开厚重的木窗，大教堂的侧影就直接映入房间，夜晚整个广场归于寂静，只有教堂的钟声陪你入眠。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`河景与宁静之选`}</h4>
                  <p className="text-sm text-green-800">{`杜罗河畔一栋现代设计风格的家庭旅馆，拥有直面河流和老城天际线的露台，清晨在鸟鸣和水流声中醒来，步行上山游览教堂也只需十分钟。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`修道院沉浸之旅`}</h4>
                  <p className="text-sm text-yellow-800">{`选择一家由古老修道院建筑精心修复的旅馆，保留了石拱回廊和静谧的中庭，房间高挑简朴，让你完全沉浸在中世纪的时空氛围里，性价比极高。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`乡村庄园奢华 retreat`}</h4>
                  <p className="text-sm text-purple-800">{`如果自驾，不妨考虑城外十分钟车程的一座19世纪庄园酒店，拥有大片私人橡树林和泳池，在一天的古城探索后，回到这里享受极致的宁静与奢华服务。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`萨莫拉老城内的酒店多由古建筑改造，隔音可能一般，但 charm 十足，且夜间极为安全宁静。若在七月的圣周或九月的罗马式艺术节期间到访，务必提前至少两三个月预订。夏季夜间凉爽，许多老房子没有空调也足够舒适。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开萨莫拉很久以后，我脑海里最常浮现的，不是它那个著名的圆顶，而是那天下午在回廊里，偶然看到的一幕：一位满头银发的老太太，独自坐在石凳上，膝盖上放着一本磨旧了的祈祷书，她并没有在看，只是静静地望着庭院中央那棵橘树，阳光把她的白发和白色的石柱染成同一种温暖的颜色。那一刻，时光仿佛凝固了。我突然明白了这座大教堂最深层的力量——它不是博物馆里冰冷的标本，而是一个依然在呼吸、在接纳生命悲喜的容器。千百年来，人们的信仰、渴望、哀悼与欢庆，都沉淀在这些石头里，让这座建筑拥有了一种近乎人性的温度。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求速度与尖叫式体验的时代，萨莫拉大教堂提供了一种截然不同的旅行价值：它教你慢下来，去凝视一道缝隙里的光，去辨认一块被磨去棱角的石头上的刻痕，去倾听风声穿过不同世纪留下的回音。它不给你即刻的狂欢，而是馈赠一种缓慢发酵的宁静与深思。在这里，你能触摸到西班牙灵魂中那份混合着坚韧、孤独与创造力的复杂底色。对于任何一位厌倦了打卡、渴望与历史进行一场诚实而深刻对话的旅人来说，萨莫拉大教堂都是一处不可错过的精神高地。它会在你心里种下一颗种子，一颗关于时间、关于永恒、关于人类在无常世界中创造有常之美的种子，然后，安静地，陪你走很长很长的路。`}</p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
