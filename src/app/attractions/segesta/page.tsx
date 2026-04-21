import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塞杰斯塔旅游攻略：西西里荒野中孤独的希腊神庙与剧场指南',
  description: '塞杰斯塔(Segesta)深度游攻略：探秘西西里岛荒野中保存完好的古希腊神庙与山顶剧场遗址，提供完整行程、交通门票与避坑指南。',
}

export default function SegestaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '塞杰斯塔', href: '/attractions/segesta' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塞杰斯塔・Segesta・意大利・西西里岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`嘿，朋友，想象一下：开车在西西里岛西部起伏的荒野中，眼前是连绵的褐色山丘和稀疏的橄榄树林，就在你以为这片土地只有粗犷自然时，一座巨大、完整、孤独得令人屏息的古希腊神庙，突然毫无预兆地矗立在山谷之中——这就是塞杰斯塔给你的第一份震撼礼物。今天这份塞杰斯塔私藏旅游攻略，就带你躲开人潮，不只是“打卡”，而是真正走进这片被时光遗忘的土地。这里没有拥挤的旅游团，只有风声、虫鸣和两千五百年的沉默。作为你的专属向导，这份自由行指南请收好，我们会一起揭开这座“未完成的杰作”背后的秘密，告诉你如何用一天时间，沉浸式体验这座荒野神殿与山顶剧场的双重魅力，以及最重要的——如何避开那些让旅行体验大打折扣的“坑”。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`嘿，朋友，想象一下：开车在西西里岛西部起伏的荒野中，眼前是连绵的褐色山丘和稀疏的橄榄树林，就在你以为这片土地只有粗犷自然时，一座巨大、完整、孤独得令人屏息的古希腊神庙，突然毫无预兆地矗立在山谷之中——这就是塞杰斯塔给你的第一份震撼礼物。今天这份塞杰斯塔私藏旅游攻略，就带你躲开人潮，不只是“打卡”，而是真正走进这片被时光遗忘的土地。这里没有拥挤的旅游团，只有风声、虫鸣和两千五百年的沉默。作为你的专属向导，这份自由行指南请收好，我们会一起揭开这座“未完成的杰作”背后的秘密，告诉你如何用一天时间，沉浸式体验这座荒野神殿与山顶剧场的双重魅力，以及最重要的——如何避开那些让旅行体验大打折扣的“坑”。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塞杰斯塔`} />
                <InfoRow label="英文名称" value={`Segesta`} />
                <InfoRow label="正式名称" value={`Segesta`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`西西里岛`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`塞杰斯塔的故事，是一部关于身份、骄傲与未竟之梦的史诗。它并非一个典型的希腊殖民地，而是属于一个神秘的原住民民族——艾利米人。正因如此，这座城市的建立，充满了与周边希腊强邦（尤其是可恨的邻邦塞利农特）的竞争与角力。公元前5世纪，艾利米人为了彰显自己的文明程度不输于希腊人，并争取雅典的支持，决定在这片属于自己血脉的土地上，建造一座足以媲美任何希腊圣地的宏伟神庙。这是一个政治宣言，一部用石头写就的“独立宣言”。然而，历史总是充满戏剧性。神庙的建造不知因何（可能是战争，也可能是政治转向）突然中止，留下了我们今天看到的“未完成”状态——柱体上的凸榫未曾打磨，内部圣所从未建起。但恰恰是这种“未完成”，让它逃过了被改建为教堂或毁于战火的命运，以最纯粹的多立克式希腊风骨，奇迹般地在西西里的荒野中屹立了二十多个世纪。它的山顶剧场，则见证了从希腊戏剧到罗马娱乐的变迁，是古代地中海世界文化交流的活化石。`} />
                <InfoRow label="建筑特色" value={`当你第一眼看到塞杰斯塔神庙，你一定会被它的“孤独感”所击中。它不是坐落在卫城之上与其他建筑为伴，而是独自矗立在一片开阔的谷地中，36根巨大的多立克石柱，撑起一个近乎完美的长方形轮廓。石柱是典型的带有凹槽的柱身，由一块块鼓形石垒成，呈现出一种温暖而斑驳的蜜糖色与浅褐色，这是本地石灰岩在千年阳光与风沙抚摸下的颜色。走近看，你会发现石柱表面并不光滑，许多凹槽里还留着当年石匠粗糙的开凿痕迹，那些未曾被磨平的凸起石榫，像时光凝固的密码。神庙没有屋顶，苍穹便是它的华盖。阳光在不同时辰划过柱列，投下不断变幻的、极具几何美感的长长阴影。环绕它的是干燥的土地、低矮的灌木和飒飒的风声，这种极致的简约与周遭的荒芜，形成了一种无法用言语形容的、近乎神圣的张力。`} />
                <InfoRow label="建筑风格" value={`塞杰斯塔神庙是古希腊多立克柱式的典范之作，堪称“教科书级别”。多立克风格起源于希腊大陆，特点是雄浑、庄严、充满力量感，摒弃了多余的装饰，追求数学般的比例和谐。在这里，你可以清晰地看到这些特征：粗壮的石柱直接立于三级台阶之上，没有柱基，显得稳健有力；柱头是简洁的倒圆锥台（钟形圆饰）和方形顶板；柱身微微向中心倾斜，营造出视觉上的稳定感（这需要极高的工艺）。虽然它未完成，但专家测量发现，其比例（6x14的柱列，以及柱高与直径的比例）极其优美，符合古典盛期的审美准则。特别有趣的是，它在西西里荒野中展现的多立克风格，比在希腊本土看到的少了几分精致，却多了几分与这片粗犷大地相匹配的原始力量和野性美。它不是放在博物馆里的珍宝，而是长在这片土地上的、有生命力的岩石骨骼。`} />
                <InfoRow label="文化价值" value={`塞杰斯塔的价值，早已超越了考古学的范畴，渗入了文化与艺术的领域。对于现代人而言，它是一座“永恒的未完成”纪念碑，象征着所有人类宏愿中那些因命运捉弄而中断的篇章，这种“缺憾美”比完美更动人，更能引发哲学思考。它孤独的形象，成为无数诗人、画家和摄影家的灵感源泉，象征着文明与荒野的对话、逝去时光的尊严。对于西西里人，它则是复杂身份的象征：这片土地既非纯粹的希腊，也非后来的罗马或阿拉伯，而是层叠文明的交汇点。塞杰斯塔证明了早在希腊文化席卷地中海之前，本地文明就已具备了高度的组织能力和审美追求。它提醒着世人，西西里的历史深邃而多元。今天，它所在的自然公园保护着当地的动植物，这座遗址也在无声地教导人们关于保护、传承以及如何与历史和自然共处。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全天开放`} />
              <InfoRow label="门票价格" value={`免费`} />
              <InfoRow label="地址" value={`请参考地图导航`} />
              <InfoRow label="交通方式" value={`建议步行或公共交通`} />
            </div>
          </Section>

          <Section title={`3. 塞杰斯塔一日游打卡路线攻略：从神庙到剧场的完美动线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐自由行路线：沉浸式体验荒野古迹`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`作为你的专属向导，这份自由行指南请收好！我强烈建议你安排一整天给塞杰斯塔，它的美需要慢下来感受。上午（10点前抵达为佳）：一定要早点从巴勒莫或特拉帕尼出发，赶在暑热和大型旅游巴士之前到达。先去游客中心买好门票（包含往返山顶剧场的接驳巴士票）。第一站，直接奔赴神庙。沿着小路步行约10分钟，当神庙全景豁然出现时，请停下脚步，好好感受那份初见的震撼。环绕神庙一周，观察不同角度的光影。中午：在遗址区简单休息（自带干粮和水，这里没有餐饮设施），避开最毒的日头。下午：乘坐接驳巴士上山前往剧场。这段山路风景绝佳。在剧场静坐片刻，想象古代的喧嚣。然后，你可以选择沿着古老的步道（约半小时）从剧场徒步下山，回到神庙区域，这是许多深度游玩家私藏的体验，能让你以古人的视角感受这片土地。傍晚：在日落前离开，金色的夕阳会给神庙披上最华美的外衣。驱车前往附近的山城卡尔塔菲梅享用晚餐，完美结束这一天。`}
                </p>
                
              </div>
              
            </div>
          </Section>

          <Section title="4. 必看亮点">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  第一眼的孤独全景：不要急着冲到神庙脚下！在通往神庙的小径上，有几个天然的观景位。停下，转身。你会看到那36根石柱组成的矩形，像一个巨大的、金色的几何模型，被毫无过渡地“放置”在黄绿交织的荒野山谷中。远处是层叠的宁静山峦，近处只有风声和蝉鸣。这个画面没有任何现代元素的干扰，瞬间把你拉回两千年前。用眼睛，更用心，拍下这份孤独的初见。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  触摸未完成的“凸榫”：走近任何一根石柱，仔细看柱身上那些整齐排列的、微微凸起的方形小石钉。这就是“凸榫”，是当时为了便于运输和吊装而设计的，本应在最后打磨阶段被凿平，与柱身融为一体。但工程戛然而止，它们便永远留在了那里。伸出手（请务必轻柔），触碰这些粗糙的凸起，冰冷的石头仿佛还带着石匠的体温和未尽的叹息，这是与历史最直接的、触觉上的对话。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  剧场石凳上的光影戏法：山顶剧场保存得出奇完好。找一张靠近中央的石凳坐下。下午时分，阳光斜射，在弧形阶梯座位投下清晰锐利的阴影分界线。你一半身体在温暖的阳光下，一半在凉爽的阴影里。抬头望向舞台后方，视线毫无阻挡地越过舞台背景墙的遗迹，投向远方辽阔的山谷与海岸线。古代观众正是在这里，看着戏剧里神与人的故事，背景却是永恒的真实自然——这种观演体验的设计， genius！`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  徒步下山小径的野趣：如果你体力尚可，一定要走一走从剧场下山的那条古老步道。这条路是古代塞杰斯塔市民往返于城市（山顶）与圣所（神庙）之间的通道。踩着碎石土路，经过开着野花的灌木丛，你可能与一只蜥蜴不期而遇。每一步的风景都在变化，回望山顶剧场越来越小，前瞻山谷神庙越来越大。这20-30分钟的步行，是连接两处遗址的灵魂之旅，让你真正用脚步丈量历史。`}</p>
            </div>
          </Section>

          <Section title={`5. 实用避坑指南`}>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-100 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  时间与天气是头号敌人：西西里夏季（6-9月）阳光极其暴烈，神庙区域毫无遮阴。务必早晨10点前或下午4点后游览神庙部分，否则地面热浪和暴晒会迅速消耗你的体力和兴致。春季（4-5月）和秋季（10-11月）是最佳季节，野花盛开或秋色浸染，气候宜人。冬天风大且荒凉，别有韵味，但需防风保暖。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  交通与导航的陷阱：自驾是最佳方式，导航设置“Parco Archeologico di Segesta”而非泛泛的“Segesta”。停车场很大，但旺季下午可能满员。警惕谷歌地图可能把你导到看不见遗址的偏远小路，主路标识很清晰。如果乘坐公共交通，从特拉帕尼或巴勒莫有长途巴士，但班次稀疏，一定要提前查好往返时刻表，错过一班可能等很久！`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`3.  物资准备与穿着建议：遗址区内没有任何商店、咖啡馆或自动售货机！必须自带充足的饮用水（人均至少1升）和简单零食。穿绝对舒适、防滑的徒步鞋，上下山和走在碎石路上都需要。帽子、太阳镜、防晒霜是保命必备。轻装上阵，但备一件防风外套，山顶剧场风可能很大。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`4.  门票与接驳车巧安排：门票包含遗址和往返山顶剧场的接驳巴士（小巴）。建议购买后先坐车上山看剧场，再徒步下山看神庙，这样是下坡路更省力。接驳车班次约20-30分钟一班，留意末班车时间（通常比遗址关门时间早半小时左右）。如果想徒步上下山，也需购买车票以备不时之需。`}</p>
            </div>
          </Section>

          <Section title={`6. 塞杰斯塔周边住宿与美食攻略`}>
            <div className="space-y-6">
              
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`塞杰斯塔本身是纯粹的考古公园，没有住宿和餐饮设施。但它周边散布着极具风情的西西里小镇，是体验当地生活的绝佳补充。推荐住宿区域：卡尔塔菲梅-塞杰斯塔 小镇是最佳选择，它就在遗址附近的山上，拥有俯瞰神庙和山谷的惊人视角。这里有几家由古老石屋改造的民宿（B&B），价格亲民，主人热情，晚上非常宁静，能看见璀璨星空。如果想体验更丰富的夜生活和餐饮，可以住在特拉帕尼（车程约30分钟）或巴勒莫（车程约1小时），这两个城市的选择更多。美食推荐：一定要在卡尔塔菲梅或附近农庄餐厅尝试西西里西部风味。点一份用当地橄榄油和野香草烤制的 “烤羊排（Agnello alla Griglia）” ，肉质鲜嫩带着炭香。前菜可以尝尝 “卡苏梅莱干酪（Caciocavallo）” 和腌菜拼盘。主食少不了 “特拉帕尼风味海鲜面（Pesto alla Trapanese）” ，它是一种用杏仁、番茄、大蒜和罗勒制成的独特青酱意面。配上一杯当地产的黑珍珠（Nero d‘Avola）红酒，对着远方的古迹干杯，这顿饭就吃出了史诗感。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 周边延伸探索">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`1.  埃里切（Erice）：从塞杰斯塔驱车约40分钟，就能到达这座高悬于750米山巅的中世纪云雾小镇。与塞杰斯塔的荒野古典美截然不同，埃里切是石头小巷、诺曼城堡、静谧教堂和手工杏仁甜点店的世界。这里常被云雾笼罩，宛如仙境。站在城堡露台，可以同时眺望特拉帕尼的盐田和第勒尼安海，视野无敌。它是将古希腊遗迹与中世纪风情串联起来的完美选择。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`2.  盐田之路（Via del Sale）与诺里盐场：从塞杰斯塔往特拉帕尼方向，沿海岸线分布着大片古老的盐田，风车林立，在夕阳下呈现出粉红与金色的梦幻色彩。这里是候鸟的天堂，风景独特而宁静。可以参观 “盐田博物馆” ，了解古老的采盐工艺。这是一条非常小众且适合摄影的路线，能将你的文化之旅延伸至自然与工业遗产领域。`}</p>
            </div>
          </Section>

          <Section title="8. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`塞杰斯塔的灵魂，不在于它“是什么”，而在于它“未曾成为什么”，以及它在这片荒野中“一直是什么”。那份凝固在石头里的未竟之志，比任何完整的辉煌都更动人；那份穿越二十五个世纪、与风沙星辰为伴的孤独坚守，比任何喧闹的景点都更有力量。它告诉你，真正的永恒，有时就藏在这份静谧而坚韧的“存在”本身之中。离开时，你会带走一片荒野的风，和一颗被远古宁静洗涤过的心。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/aquileia-archaeological-site" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿奎莱亚考古遗址</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Aquileia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ancient-city-amelia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    阿
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">阿梅利亚古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">The Ancient City of Amelia</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/vicenza-palladian-villas-italy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    维
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">维琴察</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Vicenza</p>
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
