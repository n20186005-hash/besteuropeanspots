import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '锡古尔达中世纪城堡 Sigulda Medieval Castle｜高亚河谷上的红砖史诗与骑士传说 - 最佳欧洲景点',
  description: '穿过一片笔直高大的松林，空气里满是清冽的树脂和湿润泥土的味道，脚下是厚厚的松针地毯。就在你以为要一直这样走在寂静森林里时，视野毫无征兆地豁然开朗。它就在那儿——一片巨大、厚重、由暗红色砖石砌成的城墙，静静盘踞在山丘之巅，背后是像被巨人用斧头劈开般的翠绿色高亚河谷。第一眼看见锡古尔达城堡，你不会有那种...',
}

export default function SiguldaMedievalCastlePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '拉脱维亚', href: '/destinations/latvia' },
            { label: '锡古尔达中世纪城堡', href: '/attractions/sigulda-medieval-castle' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`锡古尔达中世纪城堡・Sigulda Medieval Castle・拉脱维亚・锡古尔达`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过一片笔直高大的松林，空气里满是清冽的树脂和湿润泥土的味道，脚下是厚厚的松针地毯。就在你以为要一直这样走在寂静森林里时，视野毫无征兆地豁然开朗。它就在那儿——一片巨大、厚重、由暗红色砖石砌成的城墙，静静盘踞在山丘之巅，背后是像被巨人用斧头劈开般的翠绿色高亚河谷。第一眼看见锡古尔达城堡，你不会有那种看到新天鹅堡时童话般的悸动，而是一种更沉重、更真实的历史压迫感。那些砖石的颜色，不是鲜红，更像是凝固了的铁锈，或者干涸了的血渍，在波罗的海特有的、清透而低斜的光线下，沉默地诉说着什么。
走近了，你会听到风声。那风从河谷深处呼啸而上，穿过城墙塌陷的豁口，吹过塔楼空荡的窗洞，发出一种悠长而呜咽的声音，像是古老的号角。偶尔混杂着几声乌鸦的啼叫，更添了几分苍凉。但你若仔细听，风里也夹着山下传来的、属于现代生活的细碎声响：孩子们的欢笑声从附近的冒险公园飘来，自行车轮碾过砂石路的沙沙声——这座城堡并非一个与世隔绝的博物馆标本，它牢牢地扎根在锡古尔达小镇的生活肌理里。当地人在这里遛狗、跑步、约会，把它当作自家后院般庞大的历史公园。
踏入城堡庭院，脚下是凹凸不平的古老石砖，缝隙里长出顽强的青草和苔藓。最打动人的，或许是那种“未完成”的修复感。它没有被过度修缮成崭新的模样，一部分城墙和塔楼得到了坚固的加固，你可以顺着现代的木质阶梯爬上顶端；而另一部分，则坦然保持着残垣断壁的原貌，砖石散落，任由藤蔓缠绕。这种“生”与“死”、“修复”与“遗迹”的并置，形成了一种奇特的张力。你触摸到的，既是坚固冰冷的历史实体，也是时间那无情的、侵蚀一切的力量。这里没有金碧辉煌的大厅，没有奢华的宫廷故事，有的只是一个军事修道院秩序曾经存在的、坚实而朴素的证据，和一片能将整条壮丽河谷尽收眼底的、无与伦比的视野。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过一片笔直高大的松林，空气里满是清冽的树脂和湿润泥土的味道，脚下是厚厚的松针地毯。就在你以为要一直这样走在寂静森林里时，视野毫无征兆地豁然开朗。它就在那儿——一片巨大、厚重、由暗红色砖石砌成的城墙，静静盘踞在山丘之巅，背后是像被巨人用斧头劈开般的翠绿色高亚河谷。第一眼看见锡古尔达城堡，你不会有那种看到新天鹅堡时童话般的悸动，而是一种更沉重、更真实的历史压迫感。那些砖石的颜色，不是鲜红，更像是凝固了的铁锈，或者干涸了的血渍，在波罗的海特有的、清透而低斜的光线下，沉默地诉说着什么。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`走近了，你会听到风声。那风从河谷深处呼啸而上，穿过城墙塌陷的豁口，吹过塔楼空荡的窗洞，发出一种悠长而呜咽的声音，像是古老的号角。偶尔混杂着几声乌鸦的啼叫，更添了几分苍凉。但你若仔细听，风里也夹着山下传来的、属于现代生活的细碎声响：孩子们的欢笑声从附近的冒险公园飘来，自行车轮碾过砂石路的沙沙声——这座城堡并非一个与世隔绝的博物馆标本，它牢牢地扎根在锡古尔达小镇的生活肌理里。当地人在这里遛狗、跑步、约会，把它当作自家后院般庞大的历史公园。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`踏入城堡庭院，脚下是凹凸不平的古老石砖，缝隙里长出顽强的青草和苔藓。最打动人的，或许是那种“未完成”的修复感。它没有被过度修缮成崭新的模样，一部分城墙和塔楼得到了坚固的加固，你可以顺着现代的木质阶梯爬上顶端；而另一部分，则坦然保持着残垣断壁的原貌，砖石散落，任由藤蔓缠绕。这种“生”与“死”、“修复”与“遗迹”的并置，形成了一种奇特的张力。你触摸到的，既是坚固冰冷的历史实体，也是时间那无情的、侵蚀一切的力量。这里没有金碧辉煌的大厅，没有奢华的宫廷故事，有的只是一个军事修道院秩序曾经存在的、坚实而朴素的证据，和一片能将整条壮丽河谷尽收眼底的、无与伦比的视野。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`锡古尔达中世纪城堡`} />
                <InfoRow label="英文名称" value={`Sigulda Medieval Castle`} />
                <InfoRow label="正式名称" value={`Sigulda Medieval Castle`} />
                <InfoRow label="国家" value={`拉脱维亚`} />
                <InfoRow label="城市" value={`锡古尔达`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`拉脱维亚境内保存最完好的利沃尼亚骑士团城堡遗址之一，是高亚河谷中世纪防御体系的核心。`} />
                <InfoRow label="建筑特色" value={`典型的红砖骑士团城堡，由主堡、外墙和护城河构成，其标志性的塔楼俯瞰着蜿蜒的高亚河谷。`} />
                <InfoRow label="建筑风格" value={`波罗的海哥特式风格，融合了防御性城堡与修道院建筑的特点。`} />
                <InfoRow label="文化价值" value={`它不仅是一座军事堡垒的遗存，更是利沃尼亚地区数百年政权更迭、战争与和平的沉默见证者，如今已成为拉脱维亚人国家认同与户外文化的中心地标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`五月中旬至九月底：每日开放，上午10:00至下午19:00。十月至次年五月中旬：仅在周五、周六、周日开放，上午10:00至下午17:00。请注意，冬季（十一月至三月）部分露天区域可能因冰雪关闭，塔楼的开放也视天气情况而定。建议在复活节和圣诞节等公共假期前，务必查询官网确认具体安排。`} />
              <InfoRow label="门票价格" value={`成人票：6欧元。学生及长者票：4欧元。家庭票（2大2小）：14欧元。七岁以下儿童免费。购买门票后，可免费进入城堡内的锡古尔达市历史展览。每年五月的第一个周末（博物馆之夜）及11月18日（拉脱维亚独立日）可免费参观。`} />
              <InfoRow label="地址" value={`Pils iela 18, Sigulda, LV-2150, Latvia`} />
              <InfoRow label="交通方式" value={`从拉脱维亚首都里加出发是最佳选择。在里加中央汽车站（Autoosta）搭乘前往锡古尔达的巴士，班次非常频繁，每20-30分钟一班，车程约1小时。上车后可直接向司机购票，单程票价约3欧元。自驾则沿A2公路向东北方向行驶约50公里，城堡附近有收费停车场。如果乘坐火车，从里加中央火车站到锡古尔达站约需1小时10分钟，但火车站距离城堡还有约1.5公里的步行距离，沿途风景优美，穿过高亚国家公园。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事要从13世纪初说起，那时这片被称为利沃尼亚的土地，是基督教世界与波罗的海南岸异教徒部落交锋的前线。1207年，宝剑骑士团（后来与条顿骑士团合并为利沃尼亚骑士团）征服了当地的利沃尼亚人。为了巩固统治，并控制连接内陆与里加的重要水道——高亚河，骑士团决定在这里建立一个坚固的据点。于是，在1214年左右，第一批石头地基被打下，最初的木堡建立起来。这不仅仅是一座城堡，它更是一个集军事、行政和宗教功能于一体的“骑士团国家”的地方中心。身穿白色斗篷、绣着黑色十字架的骑士们在此驻守，他们既是战士，也是修士，统治着周边的土地和农民。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`接下来的两百年，是城堡不断扩建和加固的时期。最初的木结构被更耐久的红砖取代，主楼、防御城墙、塔楼相继拔地而起，形成了我们今天看到的规模。它见证了这个骑士团国家的鼎盛，也经历了内部的纷争。然而，平静是短暂的。16世纪，随着宗教改革的风暴和北方强权的崛起，利沃尼亚战争爆发。城堡在波兰、瑞典、俄国等多方势力的争夺中数次易手，饱受战火摧残。你可以想象，当年的炮火曾如何轰鸣在这宁静的河谷上空，那些坚固的红砖墙是如何在一次次围攻中崩裂、燃烧。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`战争之后，城堡的军事意义逐渐丧失。它被贵族家族获得，一度被改造为舒适的庄园住宅，增加了些巴洛克风格的窗户和装饰，试图抹去一些中世纪的冷峻。但这温柔的时光并未持续太久。18世纪的北方大战，以及后续的动荡，再次让城堡沦为废墟。最致命的打击或许来自20世纪初的两次世界大战，炮火和 neglect（忽视）让它几乎回归自然。那些散落在庭院各处的巨大砖石，就像巨人的骨骸，无声地躺在那里，任凭风雨和野草覆盖。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`转机发生在拉脱维亚重获独立之后。这个国家急切地需要找回并修复自己断裂的历史记忆。锡古尔达城堡，作为高亚河谷乃至整个国家最醒目的历史地标，其修复工作被赋予了重要的文化意义。但拉脱维亚人并没有选择将它“迪士尼化”。他们的修复哲学非常明智：在确保结构安全、方便游客参观的前提下，最大限度地保留其作为废墟的沧桑感和历史层次感。所以，我们今天看到的，是一个“活着的废墟”——一部分被加固以便登临，另一部分则被小心地维持着残缺的原状。它不再是一个军事堡垒，也不再是贵族私产，而是属于每一个拉脱维亚公民，属于每一个来访者的公共历史空间。它静静地坐在那里，提醒着人们这片土地所经历的征服、信仰、战争与重生，而它脚下奔腾不息的高亚河，则象征着生命与时间永恒的流逝。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`我强烈建议你在一个晴朗的上午，最好是工作日，前来拜访。这样你能避开周末蜂拥而至的里加家庭游客团，独自享受城堡的宁静与河谷的壮阔。整个深度游览至少需要3-4小时，节奏宜慢不宜快。路线将从外围的“感受”开始，逐步深入到城堡的“内部”。先花时间在高亚河对岸的观景台远眺城堡全景，建立整体印象，然后过桥，从山脚慢慢向上步行，体验“接近”这座堡垒的过程。进入城堡后，先别急着爬塔楼，在庭院和废墟间静静走一圈，用手触摸那些砖石，感受不同时代的温度。最后，将登顶塔楼作为高潮，在那里久久停留，俯瞰整个河谷的画卷。这样的安排，能让历史感和空间感层层递进，最终汇聚成一次难忘的体验。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`城堡内部分楼梯非常陡峭且狭窄，穿一双舒适防滑的鞋子至关重要，女士请尽量避免穿裙子或高跟鞋。冬季游览时，塔楼顶部平台可能结冰，务必注意安全并根据现场指示决定是否登顶。景区内没有大型餐厅，只有一个小型咖啡亭，建议自带一瓶水和少量零食，但请务必带走所有垃圾。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`先从高亚河对岸的观景台开始，用长焦镜头或仅仅是双眼，将城堡、河流、森林与天空一同框进心里，这是它最经典也最宏伟的角度。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着古老的木桥跨过潺潺的高亚河，顺着被树根拱起、有些湿滑的林间小径缓缓向上，呼吸着混合了泥土和朽木气息的空气。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡的东侧门洞进入，首先迎接你的是空旷而安静的内庭，踩在凹凸不平的石地上，顺时针慢慢绕行，观察墙壁上不同时期修补的痕迹。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`一定要钻进那座保存完好的主塔楼底层，感受那里终年不变的阴凉与昏暗，以及石壁上散发出的、几个世纪都未曾散尽的潮湿气味。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着现代加固的木质楼梯盘旋而上，脚步声在塔楼筒状空间里发出空洞的回响，每上一层，从狭长窗洞透进的光线和看到的风景都截然不同。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`登上塔楼最顶端的露天平台，让河谷的风毫无遮挡地吹拂你，然后花上至少二十分钟，静静地辨认脚下的锡古尔达小镇、远处的另一座图雷达城堡，以及蜿蜒如绿色丝带的河流。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从塔楼下来后，别忘了去探索西南角那片未加修缮的废墟区域，在倾倒的巨砖和茂盛的野花间坐一会儿，想象它鼎盛与荒芜时的不同模样。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后，从城堡西侧的小门出来，沿着城墙根走一段，你会发现在某个角度，残破的城墙轮廓恰好与远处森林的曲线融为一体，构成一幅完美的自然与人文交织的画面。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`高亚河对岸观景台`}</h4>
                  <p className="text-sm text-gray-700">{`日落前一个小时是最佳时机，夕阳的金色光芒会为红砖城堡染上温暖的橘调，利用河面的倒影可以拍出对称而宁静的绝美全景。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`塔楼螺旋楼梯中段`}</h4>
                  <p className="text-sm text-gray-700">{`选择一个阳光强烈的正午，光线会从楼梯上方的小窗斜射下来，在古老的石壁和木阶上形成强烈的明暗对比与光影线条，用广角镜头仰拍，极具视觉冲击力。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`主塔楼顶层东侧箭孔`}</h4>
                  <p className="text-sm text-gray-700">{`将你的相机或手机镜头紧紧贴住狭窄的箭孔向外拍，这个天然的画框会将河谷、森林和天空压缩成一幅层次分明的风景画，颇有窥探历史一隅的意境。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`城堡西南角废墟与野花`}</h4>
                  <p className="text-sm text-gray-700">{`在春夏季节的清晨，露水还未消散时，蹲下来以低角度拍摄，让前景中色彩斑斓的野花或蒲公英的种子与背景沧桑的红色断壁残垣同框，生与死的对比充满哲学意味。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`从城墙根仰拍塔楼`}</h4>
                  <p className="text-sm text-gray-700">{`站在城堡西侧外墙脚下，用广角镜头向上仰拍，让高耸的塔楼仿佛要刺破蓝天，同时捕捉城墙砖石粗糙的质感，画面充满力量感和历史厚重感。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`使用无人机拍摄前，务必查询拉脱维亚当地最新的无人机法规，因为城堡位于国家公园边缘，可能有飞行限制。拍摄当地人或进行人文纪实摄影时，请始终保持礼貌，先微笑示意并获得对方同意。雨季过后，城堡石壁上的苔藓颜色最为鲜绿饱满，是拍摄细节特写的好时机。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验`}</h4>
                  <p className="text-sm text-blue-800">{`住在高亚河畔由古老水疗建筑改造的精品酒店，房间有着极高的挑空和复古的砖墙，晚上可以听着潺潺水声入眠，清晨步行五分钟即可抵达城堡。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`森林隐居`}</h4>
                  <p className="text-sm text-green-800">{`选择隐藏在锡古尔达旁边森林中的独栋小木屋，全木结构散发着松香，拥有私人的桑拿房，在夜晚可以看见毫无光污染的璀璨星空。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端享受`}</h4>
                  <p className="text-sm text-yellow-800">{`下榻在几公里外、坐落在宁静湖畔的五星级庄园酒店，那里由19世纪贵族宅邸改建，提供顶级的水疗和当地美食，从房间窗户就能看到如镜的湖面与远方的城堡轮廓。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`预算之选`}</h4>
                  <p className="text-sm text-purple-800">{`锡古尔达镇中心温馨的家庭旅馆，主人会热情地为你手绘地图，推荐只有本地人才知道的徒步小径，早晨能吃到女主人自制的黑麦面包和果酱。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`锡古尔达是拉脱维亚的户外运动之都，夏季的周末住宿非常紧俏，务必提前数月预订。冬季来这里可以体验越野滑雪，但许多家庭式民宿可能只在旺季开放，预订前需仔细确认。小镇治安极好，夜间独行也很安全，但森林区域道路灯光较暗，建议携带手电。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开锡古尔达城堡很久以后，我脑海中反复回响的，不是某一段具体的历史年份，也不是某一块砖石的样貌，而是一种混合的感觉——那种坚硬与脆弱并存、永恒与流逝交织的复杂滋味。它站在那里，用红砖的躯体抵抗了八百年风雨，这似乎是永恒的；但你看那些崩塌的墙角、风化的砖面，又无比清晰地感受到时间最终的胜利。这种矛盾，恰恰是它最真实、最动人的地方。它不像那些被完美修复的宫殿，只向你展示辉煌的剪影；它坦诚地展露自己的伤疤与衰老，让你看到历史不仅是王侯将相的故事，更是一段缓慢而坚定的自然侵蚀过程，是石头如何重新变回沙土，人类造物如何最终与森林、河流和解。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个一切都追求崭新、快速、光鲜的世界里，锡古尔达城堡提供了一种截然不同的价值。它邀请你慢下来，不仅是脚步的慢，更是心态的慢。它不提供便捷的电梯、炫目的声光秀，它只提供一片需要你亲自攀爬的废墟，一阵需要你静静聆听的风声，和一幅需要你用心装裱的河谷风景。在这里，你能触摸到拉脱维亚这个民族的性格底色——坚韧、朴实、热爱自然，以及一种在复杂历史中幸存下来的、平静的智慧。对于每一位厌倦了打卡式旅行，渴望与土地和历史进行一场真诚对话的深度旅者来说，锡古尔达中世纪城堡都不该只是一个景点，而是一个值得你花上一整天，去感受、去思考、去与自己相处的精神高地。它会让你明白，最美的风景，往往存在于残缺与完整之间，存在于历史的回响与当下的寂静交汇的那一瞬间。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/stolzenfels-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    施
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">施托尔岑费尔斯城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Stolzenfels Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/trencin-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    特
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">特伦钦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Trenčín Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chateau-de-malbrouck" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔旺城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Château de Malbrouck</p>
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
