import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '伊瓦尔中世纪小镇 Yvoire｜莱芒湖畔的“鲜花石头镇”，穿越700年的中世纪时光胶囊 - 最佳欧洲景点',
  description: '你第一眼看到伊瓦尔，是从莱芒湖湛蓝的湖面上。它像一枚由时光精心雕刻的灰褐色贝壳，静静地搁浅在岸边，尖顶的城堡主塔是它最坚硬的突起。当你穿过古老的石拱门，真正踏入它的怀抱，一种奇异的静谧感立刻包裹了你。车轮碾压中世纪石板路的辘辘声消失了，取而代之的是你自己的脚步声在狭窄巷弄里的回响，以及不知从哪家院落...',
}

export default function YvoireMedievalVillagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '法国', href: '/destinations/france' },
            { label: '伊瓦尔中世纪小镇', href: '/attractions/yvoire-medieval-village' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`伊瓦尔中世纪小镇・Yvoire・法国・伊瓦尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看到伊瓦尔，是从莱芒湖湛蓝的湖面上。它像一枚由时光精心雕刻的灰褐色贝壳，静静地搁浅在岸边，尖顶的城堡主塔是它最坚硬的突起。当你穿过古老的石拱门，真正踏入它的怀抱，一种奇异的静谧感立刻包裹了你。车轮碾压中世纪石板路的辘辘声消失了，取而代之的是你自己的脚步声在狭窄巷弄里的回响，以及不知从哪家院落里飘出的古典音乐片段。空气里有湿润的湖风味道，混杂着百年老屋石墙上青苔的清新，和从每一个窗台、每一道门廊倾泻而下的天竺葵、绣球花散发出的甜香。
这里的生活节奏，是以鲜花绽放的速度来计量的。当地人似乎把所有的热情都倾注在了园艺上。厚重的花岗岩房屋，因为这些怒放的生命而变得温柔。你会看到一位老奶奶，慢悠悠地在她店铺门口擦拭着早已光可鉴人的铜壶，那壶映照着她身后一整面花墙；面包房飘出的黄油香气，会引导你找到那条被紫藤覆盖的小径。这不是一个空洞的博物馆式小镇，尽管游客如织，但这里仍然是数百位居民的家。你在拍照时，很可能一位提着菜篮的居民会对你微笑，侧身让你先过，因为他要回家给窗台上的花浇水。
伊瓦尔最打动人心的，正是这种极致的反差与和谐。坚不可摧的军事堡垒外壳，包裹着柔软、绚烂、充满生活气息的内核。走在蜿蜒上升的石阶上，你的手会拂过冰凉粗糙、有着几百年历史的石墙，而视线所及，却是一簇簇探出头来、沐浴在阳光下的鲜红凤仙花。历史在这里不是教科书上枯燥的文字，而是你脚下被岁月磨得发亮的石板，是头顶那些为了架设弩箭而开设的狭小窗孔，也是如今从这些窗孔里伸出来的、在微风中轻轻摇曳的蕨类植物。它告诉你，美与坚韧可以并存，而和平年代最伟大的“防御”，或许是守护好日常生活中的每一份诗意。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`你第一眼看到伊瓦尔，是从莱芒湖湛蓝的湖面上。它像一枚由时光精心雕刻的灰褐色贝壳，静静地搁浅在岸边，尖顶的城堡主塔是它最坚硬的突起。当你穿过古老的石拱门，真正踏入它的怀抱，一种奇异的静谧感立刻包裹了你。车轮碾压中世纪石板路的辘辘声消失了，取而代之的是你自己的脚步声在狭窄巷弄里的回响，以及不知从哪家院落里飘出的古典音乐片段。空气里有湿润的湖风味道，混杂着百年老屋石墙上青苔的清新，和从每一个窗台、每一道门廊倾泻而下的天竺葵、绣球花散发出的甜香。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`这里的生活节奏，是以鲜花绽放的速度来计量的。当地人似乎把所有的热情都倾注在了园艺上。厚重的花岗岩房屋，因为这些怒放的生命而变得温柔。你会看到一位老奶奶，慢悠悠地在她店铺门口擦拭着早已光可鉴人的铜壶，那壶映照着她身后一整面花墙；面包房飘出的黄油香气，会引导你找到那条被紫藤覆盖的小径。这不是一个空洞的博物馆式小镇，尽管游客如织，但这里仍然是数百位居民的家。你在拍照时，很可能一位提着菜篮的居民会对你微笑，侧身让你先过，因为他要回家给窗台上的花浇水。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`伊瓦尔最打动人心的，正是这种极致的反差与和谐。坚不可摧的军事堡垒外壳，包裹着柔软、绚烂、充满生活气息的内核。走在蜿蜒上升的石阶上，你的手会拂过冰凉粗糙、有着几百年历史的石墙，而视线所及，却是一簇簇探出头来、沐浴在阳光下的鲜红凤仙花。历史在这里不是教科书上枯燥的文字，而是你脚下被岁月磨得发亮的石板，是头顶那些为了架设弩箭而开设的狭小窗孔，也是如今从这些窗孔里伸出来的、在微风中轻轻摇曳的蕨类植物。它告诉你，美与坚韧可以并存，而和平年代最伟大的“防御”，或许是守护好日常生活中的每一份诗意。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`伊瓦尔中世纪小镇`} />
                <InfoRow label="英文名称" value={`Yvoire`} />
                <InfoRow label="正式名称" value={`Yvoire`} />
                <InfoRow label="国家" value={`法国`} />
                <InfoRow label="城市" value={`伊瓦尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`14世纪初萨伏伊伯爵战略棋盘上的一枚关键要塞，守护着莱芒湖贸易通道。`} />
                <InfoRow label="建筑特色" value={`由厚重花岗岩砌成的防御工事与民居浑然一体，处处点缀着蓬勃的鲜花与绿植，形成“石头与鲜花”的鲜明对比。`} />
                <InfoRow label="建筑风格" value={`典型的中世纪防御城镇布局，保留了完整的城墙、城门、城堡主塔及狭窄的街巷肌理。`} />
                <InfoRow label="文化价值" value={`一个从军事堡垒成功转型为生活美学象征的活化石，展现了欧洲乡村社区如何凭借文化遗产与自然之美获得新生。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`小镇公共区域全年全天开放。主要景点“五大感官花园”开放时间：4月至10月，每天上午10点至傍晚6点（7、8月旺季可能延长至晚上7点）。冬季（11月至次年3月）花园关闭，但小镇依旧可游览，只是部分餐厅和店铺可能歇业或缩短营业时间。小镇无大门，随时可进入。`} />
              <InfoRow label="门票价格" value={`进入伊瓦尔小镇本身完全免费。若参观核心景点“五大感官花园”，需购门票：成人票约12欧元，学生及6-17岁青少年约8欧元，6岁以下儿童免费。家庭套票通常有优惠。花园门票可在入口处直接购买，也建议提前在官网查看是否有在线预订折扣。`} />
              <InfoRow label="地址" value={`Rue de la République, 74140 Yvoire, France`} />
              <InfoRow label="交通方式" value={`最近的国际机场是瑞士日内瓦机场，距离约30公里。从日内瓦机场出发：最佳路线是先乘坐火车（SBB）前往尼翁，车程约25分钟，班次频繁。抵达尼翁火车站后，转乘811路公交车（Compagnie des Bus de la Région Nyonnaise），约20分钟直达伊瓦尔村口，公交每小时1-2班。更诗意的选择是从尼翁码头乘坐莱芒湖游船（CGN公司），夏季班次较多，航行约20分钟便可从湖上欣赏小镇全景后抵达，但冬季班次锐减。自驾可将车停放在村口的大型收费停车场（约每小时2欧元），小镇内部禁止机动车通行。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从14世纪初讲起。那时候，莱芒湖可不是如今这般宁静的旅游胜地，它是萨伏伊伯爵与日内瓦伯爵、法王等多方势力争夺的黄金水道。掌控湖面，就意味着掌控了盐、葡萄酒和布匹贸易的财富密码。1306年，萨伏伊伯爵阿梅迪奥五世目光如炬，看中了这个伸入湖中的小岬角。它易守难攻，视野开阔，是设立关卡、收取过路费的绝佳地点。于是，一座按照最先进军事理念设计的要塞城镇拔地而起。厚厚的双层城墙围合起整个村庄，高高的方形城堡主塔矗立在中央，像一枚钉入土地的巨钉，街巷设计得弯弯绕绕，处处是死角，都是为了巷战时的防御考虑。最初的伊瓦尔，是一个充满警惕和刀剑寒光的士兵之城。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`此后的两百年，伊瓦尔凭借着坚固的城防，安然度过了无数风雨，逐渐繁荣。它成了萨伏伊公国东部边境的盾牌。然而，真正的考验在16世纪到来了。随着宗教改革风暴席卷欧洲，天主教萨伏伊与新教伯尔尼和日内瓦之间的冲突演变成残酷的战争。1536年，伯尔尼的军队席卷而来，伊瓦尔的高墙这次没能完全护住它。小镇遭受了严重的破坏，城堡被部分损毁，荣耀蒙尘。更致命的是，随着战争技术的进步，这种中世纪风格的堡垒逐渐失去了军事价值。伊瓦尔被遗忘了，像一个退役的老兵，慢慢沉入睡梦。石头房子开始风化，街巷长满荒草，它沦为一个默默无闻的渔村，时间在这里仿佛停滞。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机出现在20世纪50年代。一位名叫米歇尔·罗班的法国花园与景观设计师偶然发现了这里。他被小镇惊人的中世纪骨架和与世隔绝的宁静所震撼，但同时也为它的破败感到惋惜。罗班没有选择大拆大建，他看到了另一种可能——用鲜花来唤醒这座石头城堡。他与逐渐回归的居民们一起，开始了“美化家园”的行动。他们不是简单地种花，而是精心设计，让每一处盆栽、每一面花墙都与古老的建筑肌理对话。笨重的石槽里种上缤纷的草花，阴冷的墙角用耐寒的蕨类点缀，阳光充足的窗台则成为天竺葵的舞台。奇迹发生了，坚硬的石头在鲜花的柔化下，散发出前所未有的魅力。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`随着交通的便利和旅游业的兴起，伊瓦尔“鲜花石头镇”的名声不胫而走。但小镇的管理者和居民非常清醒。他们没有允许大型酒店进驻，严格限制车辆，保护了中世纪巷弄的原始尺度和宁静。同时，他们鼓励本地手工艺和小型家族经营，让面包房、陶艺坊、画廊持续焕发生机。2002年，一位植物学家更是在城堡旁创建了“五大感官花园”，将植物的视觉、嗅觉、触觉、听觉甚至味觉体验融入其中，为小镇的文化内涵添上了画龙点睛的一笔。从军事要塞到遗忘之境，再到如今的世界级美丽小镇，伊瓦尔的故事，是一个关于韧性、转变与社区力量的完美范本。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的伊瓦尔之旅，最好安排一个完整的白天，并且强烈建议避开7、8月周末的汹涌人潮，选择春末夏初或初秋的平日清晨前往。理想节奏是“慢”。上午9点前抵达，这时旅游大巴还未到来，阳光柔和，你能独享小镇苏醒时的静谧。整体游览耗时大约5-6小时，无需匆忙赶路。路线设计上，遵循由外而内、由湖至陆、先整体后细节的原则：从港口开始建立第一印象，然后深入迷宫般的街巷，感受生活气息，最后登上高处或走进花园，获得全景与深层体验。预留充足时间发呆、喝咖啡、和店主闲聊，这才是打开伊瓦尔的正确方式。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇石板路多且起伏，务必穿一双绝对舒适防滑的鞋子，高跟鞋在这里是“刑具”。许多私人住宅和庭院外观虽美，但仍是民居，参观时请保持安静，不要擅入或过于贴近窗户张望。如果想获得最宁静的体验，冬季来访别有风味，虽然花朵凋零，但萧索的石头建筑在湖边的薄雾中更具中世纪苍凉感。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从港口码头踏上栈桥，以莱芒湖辽阔的蓝色为画布，将小镇完整的石头剪影和城堡塔楼收入第一个镜头。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过低矮的拱形“港口门”，立刻右转钻进第一条狭窄巷弄，让脚步跟随光滑石板路的自然坡度向上探索。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在主街“共和国路”稍作停留，别只逛商店，留意那些铁艺招牌的细节和从门缝里飘出的烹饪香气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要找到“五大感官花园”的隐蔽入口，花至少一小时沉浸在由声、香、触、味、色构筑的植物迷宫中。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开花园后，放弃地图，任由自己迷失在那些没有名字的、仅容一人通过的阶梯小巷里，与每一户的窗台花园不期而遇。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`尝试寻找通往老城墙遗迹的小路，站在残存的墙垛边，透过树隙眺望阳光下波光粼粼的莱芒湖。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`回到港口区，找一张面朝湖水的长椅坐下，什么都不做，只看天鹅游弋，等待黄昏为石头房子镀上金边。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐不必追求高级餐厅，找一家有家庭氛围的小馆，尝尝用湖鱼做的特色鱼派，和邻桌的退休船长聊聊天。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`港口栈桥尽头回头拍`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或傍晚，利用湖面作为前景和倒影，将石屋群、城堡塔楼和背后的远山一并框入，营造层次感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`五大感官花园顶层观景台俯拍`}</h4>
                  <p className="text-sm text-gray-700">{`下午时分，从这里可以拍到花园几何图案的树篱与远处小镇红色屋顶、教堂尖顶和湛蓝湖面的同框。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`“工匠巷”阶梯光影`}</h4>
                  <p className="text-sm text-gray-700">{`正午阳光直射时，找到一条有强烈明暗对比的狭窄阶梯小巷，蹲下低角度拍摄，让光线分割古老的石墙和地面的石板。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城墙西北角眺望点`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一小时，从此处用长焦镜头压缩空间，捕捉城堡塔楼与港口停泊的复古帆船组成的古典画面。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`湖边餐厅“Le Pré de la Tour”的露台`}</h4>
                  <p className="text-sm text-gray-700">{`华灯初上时，用慢门拍摄对岸瑞士尼翁的灯火与湖中游船的灯轨，以小镇安静的轮廓为陪衬。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`建议携带一枚24-70mm的标准变焦镜头和一支70-200mm的长焦镜头，分别应对街巷场景和压缩远景。拍摄民居和居民时，请务必先微笑示意并获得同意，尊重隐私。三脚架在白天拥挤的小巷中几乎无法使用，更适合在清晨或夜晚的港口区域施展。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`沉浸之选`}</h4>
                  <p className="text-sm text-blue-800">{`住在小镇唯一一家位于城墙内的精品酒店“Le Vieux Logis”，由16世纪建筑改建，房间木梁低矮，推开窗就是爬满藤蔓的庭院，彻底融入中世纪夜晚的宁静。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`湖景首选`}</h4>
                  <p className="text-sm text-green-800">{`港口旁的“Hotel du Port”家庭旅馆，房间不大但一尘不染，早餐在面朝湖水的露台进行，晚上能听着温柔的波浪声入睡。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`田园牧歌`}</h4>
                  <p className="text-sm text-yellow-800">{`小镇外步行10分钟范围内的农庄民宿，主人会提供 homemade 的果酱和晚餐，在院子里就能远眺小镇全景，享受真正的本地家庭氛围。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`设计风格`}</h4>
                  <p className="text-sm text-purple-800">{`距离伊瓦尔车程15分钟的现代风格设计师酒店，融合了阿尔卑斯木屋与极简主义，适合追求舒适与美学并重、且想探索周边更多湖边小镇的旅客。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`小镇内住宿极其有限，务必提前数月预订，尤其是旺季。住在镇外民宿通常性价比更高且更安静，但需注意晚间步行回程时小路照明较暗，最好备个小手电。无论是镇内还是镇外，体验当地“半膳宿”（含早晚餐）往往是品尝地道家厨美味的最佳方式。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开伊瓦尔许久，我脑海里最清晰的画面，不是某一朵具体的花，而是那种“石头与鲜花”共生共长的状态。它像一则温柔的隐喻，告诉我们，历史不必总是沉重和伤痕累累的。那些为战争而建的冰冷城墙，最终可以被藤蔓拥抱；那些瞭望敌情的箭孔，如今框住了一盆盛放的天空葵。伊瓦尔的重生，不是靠宏大的重建计划，而是靠每一户居民日复一日，用耐心和美感，为家园添上一抹颜色。这种力量，比任何城墙都更坚韧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个追求效率、一切都在快速迭代的世界里，伊瓦尔的存在是一种珍贵的“钝感”。它提醒我们，有些价值需要缓慢的守护才能显现。来这里，你不是为了打卡一个景点，而是为了体验一种时间流速不同的生活样本。它让你相信，美可以是一种日常实践，社区可以是一种守护力量，而一段跨越七百年的历史，最终可以凝结成窗前一次心无旁骛的浇花。这就是为什么，每一位渴望在旅途中找到内心宁静与连续感的旅人，都应该来伊瓦尔住上一晚，听石头低语，看鲜花叙事。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/le-puy-cathedral" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    勒
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">勒皮圣母大教堂</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Le Puy Cathedral</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/peillon-medieval-cliff-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    佩
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">佩永悬崖小镇</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Peillon</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/provins-medieval-city" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    普
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">普罗万中世纪古城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Provins</p>
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
