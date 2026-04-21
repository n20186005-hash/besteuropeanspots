import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '诺韦赫拉迪 Nové Hrady｜探秘捷克边境的时光琥珀，帝国风华与修道院寂静在此交融 - 最佳欧洲景点',
  description: '车子驶离捷克布杰约维采的平坦农田，拐进起伏的丘陵与森林地带时，你大概会以为自己走错了路。导航的目的地“Nové Hrady”在捷克语里意为“新城堡”，听起来本该是个气势汹汹的地方。但当这座小镇终于从林间道路的尽头浮现时，第一眼冲击你的，绝非峥嵘的防御工事，而是一种近乎梦幻的、秩序井然的宁静。空气里是',
}

export default function NoveHradyCzechPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '捷克', href: '/destinations/europe' },
            { label: '南波希米亚州', href: '/destinations/europe' },
            { label: '诺韦赫拉迪', href: '/attractions/nove-hrady-czech' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`诺韦赫拉迪・Nové Hrady・捷克・南波希米亚州`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子驶离捷克布杰约维采的平坦农田，拐进起伏的丘陵与森林地带时，你大概会以为自己走错了路。导航的目的地“Nové Hrady”在捷克语里意为“新城堡”，听起来本该是个气势汹汹的地方。但当这座小镇终于从林间道路的尽头浮现时，第一眼冲击你的，绝非峥嵘的防御工事，而是一种近乎梦幻的、秩序井然的宁静。空气里是初夏割草后清冽的草香，混合着远处老房子石墙上藤蔓植物的湿润气息。阳光把广场上那些鹅黄色、淡粉色外墙的帝国风格宅邸照得透亮，每扇窗都规整得像用尺子画过，三角形的山花墙优雅地指向纯净的蓝天。时间在这里，仿佛被小心翼翼地抚平、对折，收藏在了19世纪初的某个完美午后。
你很快会发现，这里的“静”非同一般。没有蜂拥的旅行团，甚至没有多少游客的嘈杂。广场长椅上坐着翻阅报纸的老人，偶尔有自行车铃铛清脆地响过。那种感觉，就像闯入了一本被遗忘的贵族家庭相册，主角们已悄然退场，却把最体面、最温馨的家居场景原封不动地留给了阳光与微风。这里的一切——从广场中央的瘟疫柱，到巷弄里每一个精致的门楣——都透露着一种经过精心计算的美，一种试图在偏僻边境复制维也纳或巴黎沙龙文化的执着。然而，当你抬头望向小镇边缘的山坡，那座有着巨大斜屋顶和简洁立面的诺韦赫拉迪城堡（更像一座宫殿）沉默地俯瞰着一切，你又会被提醒：这宁静之下，藏着多么深厚的财富与权力。
而这座城的灵魂，远不止眼前这幅明媚的帝国风情画。最动人的部分，需要你有一点探险精神。沿着一条被高大椴树荫蔽的古老小径，向镇外步行约二十分钟，周遭的世界渐渐褪去色彩与修饰。当一片开阔的林间草地中央，那座由红砖与粗粝石材砌成的克拉塞洛夫修道院毫无预警地出现在眼前时，你会瞬间屏住呼吸。与镇上的华丽截然相反，这里是极致的朴素、厚重与内省。风穿过废墟拱廊的声音，鸟在残破屋顶筑巢的啼鸣，空气中弥漫着苔藓与古老木头的味道。这一富丽一至简，一喧嚣（曾经的）一寂静，相隔不过咫尺，却构成了诺韦赫拉迪最不可言喻的魔力。它逼着你思考：那些建造了镇上豪华宫殿的显贵们，为何又要在此资助修建这样一座远离尘嚣的苦修之所？答案，就藏在它层叠的历史褶皱里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子驶离捷克布杰约维采的平坦农田，拐进起伏的丘陵与森林地带时，你大概会以为自己走错了路。导航的目的地“Nové Hrady”在捷克语里意为“新城堡”，听起来本该是个气势汹汹的地方。但当这座小镇终于从林间道路的尽头浮现时，第一眼冲击你的，绝非峥嵘的防御工事，而是一种近乎梦幻的、秩序井然的宁静。空气里是初夏割草后清冽的草香，混合着远处老房子石墙上藤蔓植物的湿润气息。阳光把广场上那些鹅黄色、淡粉色外墙的帝国风格宅邸照得透亮，每扇窗都规整得像用尺子画过，三角形的山花墙优雅地指向纯净的蓝天。时间在这里，仿佛被小心翼翼地抚平、对折，收藏在了19世纪初的某个完美午后。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你很快会发现，这里的“静”非同一般。没有蜂拥的旅行团，甚至没有多少游客的嘈杂。广场长椅上坐着翻阅报纸的老人，偶尔有自行车铃铛清脆地响过。那种感觉，就像闯入了一本被遗忘的贵族家庭相册，主角们已悄然退场，却把最体面、最温馨的家居场景原封不动地留给了阳光与微风。这里的一切——从广场中央的瘟疫柱，到巷弄里每一个精致的门楣——都透露着一种经过精心计算的美，一种试图在偏僻边境复制维也纳或巴黎沙龙文化的执着。然而，当你抬头望向小镇边缘的山坡，那座有着巨大斜屋顶和简洁立面的诺韦赫拉迪城堡（更像一座宫殿）沉默地俯瞰着一切，你又会被提醒：这宁静之下，藏着多么深厚的财富与权力。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而这座城的灵魂，远不止眼前这幅明媚的帝国风情画。最动人的部分，需要你有一点探险精神。沿着一条被高大椴树荫蔽的古老小径，向镇外步行约二十分钟，周遭的世界渐渐褪去色彩与修饰。当一片开阔的林间草地中央，那座由红砖与粗粝石材砌成的克拉塞洛夫修道院毫无预警地出现在眼前时，你会瞬间屏住呼吸。与镇上的华丽截然相反，这里是极致的朴素、厚重与内省。风穿过废墟拱廊的声音，鸟在残破屋顶筑巢的啼鸣，空气中弥漫着苔藓与古老木头的味道。这一富丽一至简，一喧嚣（曾经的）一寂静，相隔不过咫尺，却构成了诺韦赫拉迪最不可言喻的魔力。它逼着你思考：那些建造了镇上豪华宫殿的显贵们，为何又要在此资助修建这样一座远离尘嚣的苦修之所？答案，就藏在它层叠的历史褶皱里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`诺韦赫拉迪`} />
                <InfoRow label="英文名称" value={`Nové Hrady`} />
                <InfoRow label="正式名称" value={`Nové Hrady`} />
                <InfoRow label="国家" value={`捷克`} />
                <InfoRow label="城市" value={`南波希米亚州`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在波希米亚、奥地利与欧洲贵族文化夹缝中生长并绽放出独特华彩的边境要塞与贵族领地。`} />
                <InfoRow label="建筑特色" value={`惊人的帝国风格（比德迈尔时期与古典主义）贵族宅邸与庞大庄园，与一座深藏林间、极其简朴隐秘的晚期哥特式修道院形成戏剧性对比。`} />
                <InfoRow label="建筑风格" value={`以新古典主义和帝国风格为主导，混搭了本地巴洛克元素与罕见的法式庄园规划理念。`} />
                <InfoRow label="文化价值" value={`宛如一个微缩的欧洲文化交汇实验场，生动体现了中欧贵族在拿破仑时代前后，对时尚、权力与精神归宿的复杂追求。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`古城公共区域全天开放。核心景点诺韦赫拉迪城堡（宫殿）的开放时间一般为每年4月至10月，周二至周日 9:00-17:00，周一闭馆（节假日除外）；冬季（11月至次年3月）仅周末开放或需提前预约。边境修道院（克拉塞洛夫修道院）开放时间较为灵活，通常为5月至9月的每日 10:00-16:00，建议行前在其官网或当地旅游信息中心确认。具体时间可能因年份和修复工程微调。`} />
              <InfoRow label="门票价格" value={`诺韦赫拉迪城堡（宫殿）成人票约180捷克克朗，学生及老人优惠票约120捷克克朗，家庭套票约480捷克克朗。克拉塞洛夫修道院建议捐赠入场，金额通常为50-100捷克克朗。古城内其他公共区域免费。部分季节性展览或导览需额外付费。`} />
              <InfoRow label="地址" value={`Nové Hrady 1, 373 33 Nové Hrady, Czechia`} />
              <InfoRow label="交通方式" value={`从布拉格出发是最常见路线。先从布拉格 hlavní nádraží 中央火车站乘坐火车前往捷克布杰约维采（České Budějovice），车程约2.5小时，班次频繁。抵达后，在捷克布杰约维采汽车站换乘前往诺韦赫拉迪（Nové Hrady）的区域巴士，车程约1小时，每天约有4-6班车，周末班次减少，务必提前在捷克巴士官网（IDOS）查询时刻表。自驾是最灵活的方式，从布拉格沿E55/D3高速公路向南，再转接地方道路，全程约180公里，需2.5-3小时。小镇内部完全适合步行探索。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "说起诺韦赫拉迪的起源，我们必须把时钟拨回到13世纪中叶。那时，这里确实是名副其实的“新城堡”——波希米亚王国为了守护其南部与奥地利接壤的动荡边境，在此建立了一座坚固的皇家城堡。最初的岁月充满了刀光剑影，它屹立在贸易路线与军事要冲上，见证了普热米斯尔王朝与哈布斯堡家族早期的摩擦与联姻。然而，真正决定这座城镇命运走向的，并非持续不断的战火，而是一纸和平的契约。随着政治格局变化，它从一个前线堡垒，逐渐转变为一片庞大世袭领地的行政与文化中心。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "历史的转折点在1620年之后到来。白山战役后，波希米亚的命运急转直下，大量本地贵族的土地被没收并赏赐给效忠于哈布斯堡王朝的外来贵族。诺韦赫拉迪的广阔领地，就这样落入了布科夫斯基家族手中。这个家族并非传统的捷克贵族，他们更贴近维也纳的宫廷，眼界开阔，财力雄厚。到了18世纪末19世纪初，在约翰·内波穆克·布科夫斯基伯爵的统治时期，诺韦赫拉迪迎来了它的“黄金时代”。这位伯爵是个典型的启蒙时代人物，热爱艺术、科学与一切美好的事物。他看腻了阴冷的中世纪堡垒，决心为自己和家族打造一个配得上其地位与品味的现代居所。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "于是，一场轰轰烈烈的“造梦”工程开始了。旧城堡被大规模改建和装饰，内部充满了当时最时髦的新古典主义与帝国风格家具、壁画和收藏。但这还不够。伯爵以惊人的魄力，几乎将整个城镇重新规划。他聘请建筑师，围绕着中心广场，修建起一连串风格统一、色彩柔和、立面优雅的贵族宅邸、行政办公楼和市民住宅。你如今看到的那个如模型般精美的广场，很大程度上就是他的杰作。他甚至引入了先进的城市供水系统。更让人惊叹的是，这种规划中隐约透露出法式庄园的对称与秩序感，在捷克地区极为罕见。可以说，他用财富和审美，在偏远的南波希米亚丘陵中，硬生生造出了一个微型的、理想化的帝国城镇样板。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "然而，与这极致的世俗荣耀并行的，是一种深刻的精神渴求。同样是这位布科夫斯基伯爵，同时也是附近克拉塞洛夫修道院的重要资助者和推动者。这座修道院的历史更久远，可追溯到15世纪，属于严苛的保罗修道会。在伯爵的时代，修道院得到了修缮和一定程度的扩建。想想看，一位在维也纳舞会上谈笑风生、在宫殿里收藏古董的显贵，同时也会深入这片寂静森林，关心修士们的居所和精神世界。这种矛盾统一，恰恰是中欧贵族文化中非常典型的一面：他们在尽情享受文艺复兴和启蒙运动带来的世俗快乐的同时，灵魂深处依然为宗教保留着一块不可动摇的基石，尤其是面对死亡与永恒的命题时。修道院就是他们为自己，也为领地子民灵魂救赎所投下的保险。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "好景不长。随着第一次世界大战结束，奥匈帝国解体，布科夫斯基家族的光辉岁月也走到了尽头。城堡和领地被收归国有的命运不可避免。二战后，这里曾一度荒芜，被用作仓库甚至军营，令人扼腕。幸运的是，在捷克独立后，这座珍贵的遗产得到了缓慢而持续的修复。今天的诺韦赫拉迪，就像一位洗净铅华、从容淡定的老贵族，不再谈论昔日的权势，只是安然地坐在南波希米亚的阳光下，向每一个有心人展示着它复杂而迷人的过往——那段关于边境、权力、美学与灵魂寻求的完整故事。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议安排一整天（8-10小时）来彻底沉浸于诺韦赫拉迪的双面魅力。最佳抵达时间是早上9点左右，此时阳光正好洒满东向的广场立面，光线柔和，游客稀少。游览节奏宜张弛有度：上午精力充沛时，重点探索城镇核心的帝国风格建筑群和城堡内部；午后前往修道院，享受林间徒步的宁静与哲学性的沉思时光；傍晚回到镇上，感受日落时分暖色调的光影变幻，并用一顿地道的波希米亚晚餐为旅程收尾。这样的安排既避免了午间暴晒下的长途步行，也让人能体会小镇从清晨苏醒到夜幕低垂的完整韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇餐饮选择有限，尤其晚餐，建议提前向住宿地主人询问并预订心仪的餐厅，避免晚上饿肚子。前往修道院的小径虽清晰，但部分路段是土路，雨后可能泥泞，请穿一双舒适防滑的步行鞋。小镇和修道院都极度宁静，请主动降低音量，避免打扰当地居民和这片土地的沉思氛围。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`把车停在镇外免费的停车场，顺着坡道慢悠悠地走上主广场，让那些糖果色的帝国风格立面在晨光中给你一个温柔的拥抱。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`推开诺韦赫拉迪城堡（宫殿）那扇厚重的大门，立刻被前厅那新古典主义的恢宏楼梯间震慑，然后跟着导览去探寻一个个装满家族记忆、瓷器收藏和帝国风格家具的华丽房间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡花园的侧门溜出来，沿着一条开满野花的小径漫步，从后方和侧面欣赏这座建筑宏大的体量与简洁有力的轮廓。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到主广场，不急着进博物馆，而是先绕到广场背面那些安静的住宅街巷，寻找门楣上精致的浮雕和铸铁阳台，想象两百年前贵族马车驶过的声音。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在广场边的传统咖啡馆“U Zlatého lva”坐下，点一杯醇厚的捷克咖啡和一块罂粟籽蛋糕，像当地人一样观察广场上缓慢流动的时光。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`午后，带上一点水，从镇子西侧沿着古老的“修道院之路”标志开始一段约20分钟的舒适林间徒步，让心情从华美逐渐过渡到沉静。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当克拉塞洛夫修道院那红色砖墙从森林缺口赫然出现时，放慢脚步，先在草地边缘的长椅上静坐几分钟，感受这片废墟空间强大的静默磁场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走入修道院残存的教堂中殿，仰头看天空代替了崩塌的穹顶，阳光从没有玻璃的窗洞直射下来，在古老的砖石地面上画出移动的光斑。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`主广场东南角仰拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨八至九点，站在广场靠近瘟疫柱的东南角，用广角镜头仰拍，可以将一排色彩柔和的帝国风格宅邸与后方城堡的塔楼一同纳入画面，构图饱满富有层次。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`城堡花园背后的山坡上`}</h4>
                  <p className="text-sm text-gray-700">{`下午三四点，阳光转为侧光，从城堡后方的小山坡（通往修道院的小径起点附近）回望，可以拍到城堡宏伟的背面全景与花园，树木作为自然画框。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`修道院废墟拱门框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`任何时候，但晴天的下午光线最佳，站在修道院内院，透过某个完好的砖石拱门框架，拍摄对面另一片废墟或远处森林，形成强烈的“景中景”和古今对话感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`林间小径终点第一眼`}</h4>
                  <p className="text-sm text-gray-700">{`在徒步接近修道院、即将走出森林的那一瞬，有一个固定视角，可以用长焦镜头压缩空间，拍下修道院如同海市蜃楼般浮现在林间空地中央的孤寂全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`城堡内部楼梯光影`}</h4>
                  <p className="text-sm text-gray-700">{`参观城堡时，留意从高层窗户射入楼梯间的光束（约在上午十一点后），拍摄旋梯的曲线与光影明暗的交织，捕捉建筑内部的空间韵律美。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`城堡内部通常禁止使用闪光灯和三脚架，高感光度相机和大光圈镜头在这里是利器。拍摄当地居民和私人住宅时请务必保持尊重，最好先微笑示意或直接避免。修道院的废墟之美在于其沧桑感，尝试用黑白模式拍摄，更能突出其材质肌理和历史厚重感。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`温馨家庭民宿`}</h4>
                  <p className="text-sm text-blue-800">{`住在主广场旁一栋有200年历史的柠檬黄色宅邸里，房东老奶奶会为你准备丰盛的自家制早餐，在爬满葡萄藤的小露台上享用。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色庄园体验`}</h4>
                  <p className="text-sm text-green-800">{`距离小镇几分钟车程的修复贵族庄园酒店，房间宽敞充满复古气息，自带大片草地和池塘，晚上可以看见璀璨的银河。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`森林隐居小屋`}</h4>
                  <p className="text-sm text-yellow-800">{`靠近修道院方向的独栋小木屋，被高大的云杉环绕，配有壁炉和露天热水浴缸，是体验极致宁静、聆听自然声音的完美选择。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`实用型小镇旅馆`}</h4>
                  <p className="text-sm text-purple-800">{`位于镇中心，由传统建筑改造的舒适旅馆，设施现代可靠，老板是本地通，能给你提供最地道的徒步和美食地图。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "诺韦赫拉迪的住宿数量非常有限，尤其在夏季和周末，务必提前数月预订。小镇治安极好，夜晚安静得能听到自己的心跳，是真正的避世之所。选择住在镇上便于早晚捕捉最佳光影，选择住在周边庄园或森林则能获得更独特的自然体验。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开诺韦赫拉迪很久以后，脑海里反复回放的，不是某个具体的房间或雕塑，而是那种强烈的、并置的感官记忆。一边是鹅黄色墙壁上阳光的温热触感，是咖啡与蛋糕的甜香，是广场石板路被晒得发烫的、令人安心的世俗气息；另一边则是森林里潮湿的泥土味，是修道院红砖被雨水冲刷后的矿物气息，是万籁俱寂中只有风声穿过残破拱券的、直击灵魂的嗡鸣。这座小镇最了不起的成就，或许就是如此诚实、如此完整地保存了人类精神的两个极端面向——对现世美的极致追求，与对永恒宁静的深沉渴望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个人人追求“效率”和“网红同款”的旅行时代，诺韦赫拉迪像一块固执的时光琥珀。它不提供惊心动魄的景观，不贩卖廉价的异域风情。它要求你慢下来，用脚步丈量从广场到修道院的那段不长不短的距离，而这恰好也是一段从外在荣耀走向内心省思的精神旅程。它让你看到，历史不是单薄的标签，而是活生生的、充满矛盾的复杂生命体。在这里，你能触摸到中欧贵族文化最精致的皮毛，也能窥见他们灵魂深处的不安与救赎。对于任何厌倦了浮光掠影，渴望在旅途中进行一场宁静而深刻对话的旅人来说，南波希米亚边境上的这颗隐秘宝石，都值得你专程绕一段路，花上一整天，去细细聆听它低语的、双重的古老歌谣。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/navarino-fortress-pylos" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    纳
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">纳瓦里诺要塞（皮洛斯）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Navarino Fortress (Pylos)</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/bad-mergentheim" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    巴
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">巴特梅根特海姆</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Bad Mergentheim</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/siurana" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    休
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">休拉纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Siurana</p>
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
