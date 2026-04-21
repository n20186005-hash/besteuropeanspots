import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '德布勒森大教堂 Great Reformed Church｜匈牙利最大新古典主义教堂 加尔文派的“罗马”精神中心 - 最佳欧洲景点',
  description: '当你从德布勒森老城那些蜿蜒的、飘着咖啡香和新鲜面包气味的街巷里拐出来，突然置身于卡文广场（Kálvin tér）的开阔之中时，第一眼看到它，那种感觉不是惊艳，而是一种沉甸甸的震撼。它不是轻盈的哥特式尖塔直插云霄，而是一座巨大、坚实、通体呈温暖柠檬黄色的立方体，稳稳地坐落在大地之上，头顶着一个巨大的墨...',
}

export default function GreatReformedChurchDebrecenPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '匈牙利', href: '/destinations/hungary' },
            { label: '德布勒森', href: '/destinations/hungary' },
            { label: '德布勒森大教堂', href: '/attractions/great-reformed-church-debrecen' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`德布勒森大教堂・Great Reformed Church・匈牙利・德布勒森`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`当你从德布勒森老城那些蜿蜒的、飘着咖啡香和新鲜面包气味的街巷里拐出来，突然置身于卡文广场（Kálvin tér）的开阔之中时，第一眼看到它，那种感觉不是惊艳，而是一种沉甸甸的震撼。它不是轻盈的哥特式尖塔直插云霄，而是一座巨大、坚实、通体呈温暖柠檬黄色的立方体，稳稳地坐落在大地之上，头顶着一个巨大的墨绿色铜制圆顶，像一位沉思的巨人，守护着整个平原。广场上的鸽子扑棱着翅膀飞过，远处电车的叮当声显得遥远，所有的市井喧哗到了这里，仿佛都被这栋建筑庄严的气场过滤了一层，只剩下风掠过广场的声音，和你自己心跳的咚咚声。
走近了，你会被那种新古典主义的严谨秩序所折服。巨大的科林斯柱廊支撑起三角形的山花墙面，线条干净利落到近乎冷酷。但奇妙的是，当午后的阳光斜射过来，给那柠檬黄的砂岩墙面镀上一层蜂蜜般的光泽时，整个建筑又突然变得温柔而可亲起来。推开那扇厚重的木门，内部景象会给你更强烈的冲击。如果你是看惯了天主教教堂金碧辉煌、满是圣像雕塑的眼睛，那么这里的空旷与简朴会瞬间让你屏住呼吸。高耸的白色中殿一眼望不到头，两侧是深色的木质长廊，光线从高处简洁的窗户洒下，在光洁的木地板和长椅上投下几何形的光斑。空气里弥漫着旧木头、书本和一丝清冷的石材气味。最前方，只有一个巨大的、深色木制的讲坛高高在上，取代了繁复的祭坛。这里是“上帝之言”至高无上的殿堂，所有的装饰都让位于聆听与思考。
你会发现，这座教堂远不止是一个旅游景点。它是这座匈牙利第二大城市跳动的心脏。周日的早晨，你会看到无数家庭，穿着他们最得体的衣裳，从四面八方汇集到这里。男士的深色西装，女士优雅的裙装和头巾，孩子们安静地牵着父母的手。洪亮的管风琴声响起，会众们用匈牙利语齐声咏唱赞美诗，那声音饱满而虔诚，充满整个巨大的空间，直击灵魂深处。而在非礼拜时间，它又像一个宁静的社区客厅，有老人在长廊下静静阅读，有学生靠在柱子上低声讨论。到了夏季夜晚，它前面的广场就变成了市民音乐会和节庆活动的中心，古老的墙壁回响着爵士乐或古典乐的旋律。这种神圣与世俗、庄严与鲜活生活的无缝交融，正是它最动人的魅力。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`当你从德布勒森老城那些蜿蜒的、飘着咖啡香和新鲜面包气味的街巷里拐出来，突然置身于卡文广场（Kálvin tér）的开阔之中时，第一眼看到它，那种感觉不是惊艳，而是一种沉甸甸的震撼。它不是轻盈的哥特式尖塔直插云霄，而是一座巨大、坚实、通体呈温暖柠檬黄色的立方体，稳稳地坐落在大地之上，头顶着一个巨大的墨绿色铜制圆顶，像一位沉思的巨人，守护着整个平原。广场上的鸽子扑棱着翅膀飞过，远处电车的叮当声显得遥远，所有的市井喧哗到了这里，仿佛都被这栋建筑庄严的气场过滤了一层，只剩下风掠过广场的声音，和你自己心跳的咚咚声。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会被那种新古典主义的严谨秩序所折服。巨大的科林斯柱廊支撑起三角形的山花墙面，线条干净利落到近乎冷酷。但奇妙的是，当午后的阳光斜射过来，给那柠檬黄的砂岩墙面镀上一层蜂蜜般的光泽时，整个建筑又突然变得温柔而可亲起来。推开那扇厚重的木门，内部景象会给你更强烈的冲击。如果你是看惯了天主教教堂金碧辉煌、满是圣像雕塑的眼睛，那么这里的空旷与简朴会瞬间让你屏住呼吸。高耸的白色中殿一眼望不到头，两侧是深色的木质长廊，光线从高处简洁的窗户洒下，在光洁的木地板和长椅上投下几何形的光斑。空气里弥漫着旧木头、书本和一丝清冷的石材气味。最前方，只有一个巨大的、深色木制的讲坛高高在上，取代了繁复的祭坛。这里是“上帝之言”至高无上的殿堂，所有的装饰都让位于聆听与思考。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`你会发现，这座教堂远不止是一个旅游景点。它是这座匈牙利第二大城市跳动的心脏。周日的早晨，你会看到无数家庭，穿着他们最得体的衣裳，从四面八方汇集到这里。男士的深色西装，女士优雅的裙装和头巾，孩子们安静地牵着父母的手。洪亮的管风琴声响起，会众们用匈牙利语齐声咏唱赞美诗，那声音饱满而虔诚，充满整个巨大的空间，直击灵魂深处。而在非礼拜时间，它又像一个宁静的社区客厅，有老人在长廊下静静阅读，有学生靠在柱子上低声讨论。到了夏季夜晚，它前面的广场就变成了市民音乐会和节庆活动的中心，古老的墙壁回响着爵士乐或古典乐的旋律。这种神圣与世俗、庄严与鲜活生活的无缝交融，正是它最动人的魅力。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`德布勒森大教堂`} />
                <InfoRow label="英文名称" value={`Great Reformed Church`} />
                <InfoRow label="正式名称" value={`Great Reformed Church of Debrecen`} />
                <InfoRow label="国家" value={`匈牙利`} />
                <InfoRow label="城市" value={`德布勒森`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`德布勒森的精神心脏与匈牙利宗教改革运动的象征，被誉为加尔文宗的“罗马”。`} />
                <InfoRow label="建筑特色" value={`宏伟而肃穆的柠檬黄新古典主义巨构，拥有匈牙利教堂中最大的单体中殿和标志性的绿色铜制圆顶。`} />
                <InfoRow label="建筑风格" value={`严谨、对称、恢弘的新古典主义风格，反映了加尔文教派崇尚简洁与理性的精神内核。`} />
                <InfoRow label="文化价值" value={`超越了宗教场所，是匈牙利东部大平原（阿尔弗尔德）地区文化认同、历史记忆与民族韧性的集中体现。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`教堂主体：周一至周六 9:00-17:00，周日礼拜仪式期间（通常为上午）仅对礼拜者开放，下午1点后恢复对游客开放。请注意，开放时间可能因特殊宗教活动（如婚礼、葬礼）临时调整，冬季（11月至次年3月）关门时间可能提前至16:00。塔楼观景台开放时间较为灵活，通常与教堂开放时间同步，但恶劣天气（如强风、雷雨）会关闭。`} />
              <InfoRow label="门票价格" value={`进入教堂主体免费，欢迎自愿捐赠以支持维护。登塔楼（钟楼）观景台需购票，成人票约1500匈牙利福林，学生及65岁以上老人享有折扣票约1000匈牙利福林，6岁以下儿童免费。门票可在教堂入口处或塔楼底部的售票点购买。`} />
              <InfoRow label="地址" value={`Kálvin tér 1, Debrecen 4026, Hungary`} />
              <InfoRow label="交通方式" value={`德布勒森国际机场（Debrecen International Airport）是最近的机场。从机场出发，搭乘机场巴士（Airport Shuttle Bus）可直达市中心主火车站（Debrecen main railway station），车程约20-30分钟，班次根据航班抵达时间安排。从布达佩斯出发，乘坐火车是最佳选择，从布达佩斯东站（Keleti pályaudvar）或南站（Déli pályaudvar）均有直达德布勒森的列车，车程约2.5小时，班次频繁（每小时至少一班）。抵达德布勒森主火车站后，大教堂位于市中心，步行即可轻松到达（约10-15分钟）。从火车站前的广场，沿着Piac utca街直走，穿过热闹的步行街，就能看到教堂雄伟的轮廓。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`要讲德布勒森大教堂的故事，就得从一场革命说起。我们现在看到的这座宏伟建筑，其实还很“年轻”，它奠基于1805年，竣工于1824年。但它的灵魂，却深深植根于更早的狂风暴雨之中。16世纪，宗教改革的浪潮席卷匈牙利，德布勒森以其开放和学术氛围，迅速成为加尔文宗（新教归正宗）在匈牙利乃至东欧的坚固堡垒，赢得了“加尔文宗罗马”的称号。此前的几百年间，这里已经矗立着一座中世纪教堂，但它在历史的动荡中屡遭损毁。当18世纪末，匈牙利民族意识开始觉醒，德布勒森的市民们决心建造一座配得上他们城市精神地位的、全新的地标。这不仅仅是一座教堂，更是一份民族自信的宣言书。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`建筑师的野心是巨大的。他们选择了当时象征理性、秩序与回归古典美德的新古典主义风格，这恰好与加尔文教派崇尚简朴、反对偶像崇拜的神学理念不谋而合。想象一下，在19世纪初的匈牙利大平原上，要建造如此庞大的工程是何等艰巨。巨大的木材从遥远的喀尔巴阡山运来，优质的石材从各地采集。建筑师约瑟夫·塔拉戈·费舍尔和后来的米哈伊·佩奇，创造了一个前所未有的空间：长达55米、宽约14米的中殿，没有任何柱子支撑，当时在整个欧洲都堪称杰作。当那个标志性的绿色大圆顶终于安放完毕，它立刻成为了整个阿尔弗尔德平原的灯塔，从几十公里外就能望见。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，教堂的基石尚未完全冷却，匈牙利历史上最波澜壮阔的一页就翻开了——1848-1849年的革命与独立战争。德布勒森大教堂的命运，自此与整个民族的命运紧紧捆绑。1849年4月14日，就在这座崭新教堂的讲坛上，匈牙利革命领袖科苏特·拉约什庄严宣布哈布斯堡王朝被废黜，匈牙利独立。这座教堂不再是单纯的礼拜场所，它变成了议会的殿堂，自由的象征，民族精神的烽火台。尽管革命最终失败，但那份“独立宣言在此诞生”的记忆，如同烙印一般，刻进了每一块石头。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的一个多世纪，它见证了更多的苦难与荣光。两次世界大战的炮火都未能将它击垮，尽管彩绘玻璃被震碎，墙壁留下弹痕，但它始终屹立不倒。在冷战时期那些压抑的岁月里，它依然是匈牙利东部地区信仰与文化生活的隐秘中心，是人民保持精神独立的沉默堡垒。直到1989年，匈牙利向民主转型的关键时刻，德布勒森大教堂的钟声再次为自由而鸣响。今天，你抚摸它光滑的木质长椅，脚下的石板被无数足迹磨得发亮，你触摸的不仅是建筑材料，更是一层又一层厚重的历史肌理。它就像一个沉默而坚毅的见证者，看尽了王朝更迭、战争硝烟与时代变迁，却始终以那份新古典主义的冷静与平衡，给予这片土地上的人们以安慰和力量。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要真正感受这座教堂的灵魂，建议安排至少半天时间。最佳抵达时间是工作日的上午9点至10点之间，这时旅行团尚未涌入，教堂内部还保留着晨间礼拜后的肃穆与宁静，阳光正好从东侧的窗户斜射入中殿，光影效果极为神圣。整体游览节奏宜慢不宜快，先从外部的广场感受其宏观气势，再进入内部沉浸于其精神空间，最后登塔俯瞰全城，完成从仰视、平视到俯视的完整视角体验。这样的安排能让你充分体会它作为建筑杰作、信仰中心和历史地标的多重身份。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`周日前往请务必尊重礼拜活动，上午尽量避开，下午前往最佳，进入时请保持安静并避免在仪式区域穿行。虽然内部简朴，但作为重要宗教场所，建议着装得体，避免过于暴露的沙滩装或运动背心。登塔楼的螺旋楼梯较为狭窄陡峭，且通风有限，对行动不便者或患有严重幽闭恐惧症的朋友是个挑战，请量力而行。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从卡文广场的中央喷泉出发，慢慢后退，直到能将教堂雄伟的正立面连同两侧的柱廊和巨大的绿色圆顶完整收入眼帘，感受它如何统领整个城市天际线。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走近正门，仔细观察山花墙面下的浮雕和巨大的科林斯柱的细节，然后推开那扇饱经风霜的厚重木门，让内部那无比空旷、高耸、简洁的空间瞬间包裹你所有感官。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着右侧的走廊缓缓走向祭坛区域，抬头仰望那个极具分量感的巨大木质讲坛，想象科苏特站在其上向全民族发表宣言的历史性时刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花点时间坐在中殿的长椅上，什么也不做，只是静静感受光线在空间中的移动，聆听偶尔响起的脚步声和远处依稀可闻的城市嗡嗡声，让那种极致的宁静沉淀入心。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要登上那高达53米的钟楼，沿着螺旋石阶盘旋而上，在观景台上迎接你的将是整个德布勒森城的红色屋顶海洋，以及一望无际、平坦如毯的匈牙利大平原，这会让你瞬间理解教堂“平原灯塔”的称号。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下楼后别错过教堂侧翼的小型宗教历史博物馆和纪念品店，那里收藏着与教堂及德布勒森宗教改革历史相关的重要文献与器物。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从侧门走出，绕到教堂的东侧和后方的庭院，这里游客稀少，你能看到建筑不同立面的变化，以及一些安静的回廊空间。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`结束参观后，不要急着离开，就在广场边找一家传统的“糕点店”（Cukrászda），点一杯匈牙利咖啡和一块奶油蛋糕，看着教堂在午后阳光下变换色彩，慢慢回味刚才的体验。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`卡文广场西南角的长椅上`}</h4>
                  <p className="text-sm text-gray-700">{`下午四点后的侧光能完美勾勒教堂正立面的立体感和柠檬黄墙面的暖色调，将广场上的行人或喷泉作为前景，能增加画面的生活气息。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`教堂中殿最后方的中央位置`}</h4>
                  <p className="text-sm text-gray-700">{`使用广角镜头，在晴朗日子的正午时分左右，可以捕捉到多束阳光从高侧窗射入，在漫长的走廊和长椅上形成壮丽“神圣光束”的全景。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`塔楼观景台的东南角`}</h4>
                  <p className="text-sm text-gray-700">{`日出后一小时或日落前一小时，光线柔和且带有金色，从这里可以拍摄到教堂的巨大绿色圆顶作为前景，背景是铺展到天际线的城市全景与平原。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`教堂东侧后方的小庭院拱门下`}</h4>
                  <p className="text-sm text-gray-700">{`清晨时分，利用拱门作为自然的画框，构图聚焦于教堂后殿朴素的墙壁和一部分圆顶，营造一种静谧、隐秘的窥探感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`教堂内部二楼回廊的尽头`}</h4>
                  <p className="text-sm text-gray-700">{`从这里可以俯拍中殿的全景，将深色的木质长廊、整齐的长椅以及尽头的讲坛全部纳入镜头，对称构图能极大强化空间的纵深感与秩序感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部允许非商业目的的摄影，但绝对禁止使用闪光灯和三脚架（除非获得特殊许可），以免干扰礼拜者和其他游客。拍摄做礼拜的信众时需极度谨慎，最好事先征得同意或采用不拍清面孔的远景、背影构图。无人机飞行在教堂及广场上空受到严格管制，未经申请严禁起飞。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`位于步行街起点、距离教堂仅五分钟脚程的现代公寓式酒店，房间宽敞明亮，带小厨房，楼下就是超市和咖啡馆，性价比极高。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`历史氛围沉浸`}</h4>
                  <p className="text-sm text-green-800">{`由一栋19世纪新古典主义风格宅邸改造的精品酒店，坐落于宁静的历史街区，房间挑高，装饰复古，早餐在布满绿植的庭院里享用，仿佛住在老电影里。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端全景享受`}</h4>
                  <p className="text-sm text-yellow-800">{`德布勒森最高建筑顶层的五星级酒店，房间拥有落地窗，躺在床上或泡在浴缸里就能无死角俯瞰整个城市，尤其夜晚，教堂的圆顶在泛光灯下成为你窗前的专属艺术品。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`田园牧歌体验`}</h4>
                  <p className="text-sm text-purple-800">{`位于城市边缘、大平原之上的传统“楚庄”民宿，住进可爱的匈牙利乡村风格小屋，早晨在鸡鸣声中醒来，骑马或骑行穿过田野，从远处回望教堂的轮廓，体验截然不同的视角。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`德布勒森的住宿价格相对布达佩斯亲民许多，但在夏季音乐节（如德布勒森花卉嘉年华）和重要学术会议期间，市中心酒店会很快订满，建议提前一个月规划。教堂周边是绝对安全的老城区，夜晚也很热闹。选择稍远的住宿可以体验有轨电车，这是融入当地生活的好方式。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开德布勒森大教堂很久以后，我脑海里反复回响的，不是它有多么雄伟或独特，而是一种奇特的“平衡感”。它宏伟，却不压迫；它神圣，却不疏离；它承载着沉重如国家独立宣言般的历史，却又能轻松地接纳市民夏夜的一场露天音乐会。这种平衡，或许正是这座建筑，乃至德布勒森这座城市，最精髓的魅力所在。它不像许多欧洲古迹那样，仅仅是封存在玻璃罩里供人凭吊的过去式，而是一个活生生的、仍在呼吸、仍在参与时代脉搏的有机体。在这里，你能触摸到匈牙利民族性格中那种坚韧务实与理想主义并存的复杂质地。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个人人追求瞬时刺激、视觉爆炸的快节奏世界里，德布勒森大教堂提供了一种截然相反的旅行价值：一种深度的沉静与思考。它不给你眼花缭乱的装饰去拍照打卡，而是给你一个空旷的空间，让你不得不面对自己内心的声音。它邀请你坐下来，慢下来，去聆听历史在石壁间的回响，去观察信仰如何在简朴的仪式中凝聚一个社区，去理解一种与西欧天主教文化迥异，却同样深厚的精神传统。对于每一位渴望超越表面、去感受欧洲精神地貌多样性与深度的旅人来说，这座矗立在匈牙利大平原上的“加尔文宗罗马”，绝对是一堂无法替代的必修课。它教会你的，不是关于建筑风格的知识，而是一种关于力量、沉默与持久存在的启示。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/szekesfehervar-old-town" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    塞
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">塞克什白堡老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Székesfehérvár Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/holloko-old-village" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    霍
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">霍尔罗克传统村落</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Hollókő</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/tata-water-castle-old-lake" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    陶
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">陶陶（老湖上的水上城堡）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tata (Water Castle on theOld Lake)</p>
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
