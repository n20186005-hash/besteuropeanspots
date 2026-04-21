import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '阿卡迪修道院 Arkadi Monastery｜克里特自由的圣坛与壮烈殉道史诗 - 最佳欧洲景点',
  description: '车子沿着克里特岛腹地的山路盘旋而上，当一片被苍劲柏树和古老橄榄园环绕的赭石色建筑群跃入眼帘时，你第一眼可能会误以为这是一座坚固的堡垒，而非宁静的修道院。它的轮廓在烈日的照耀下显得坚硬而沉默，只有那座雕刻着精美科林斯柱式和旋涡纹饰的威尼斯风格门廊，透露出几分不同寻常的优雅。空气中弥漫着百里香和烈日灼烤',
}

export default function ArkadiMonasteryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/greece' },
            { label: '克里特岛（雷西姆农地区）', href: '/destinations/greece' },
            { label: '阿卡迪修道院', href: '/attractions/arkadi-monastery' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`阿卡迪修道院・Arkadi Monastery・希腊・克里特岛（雷西姆农地区）`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子沿着克里特岛腹地的山路盘旋而上，当一片被苍劲柏树和古老橄榄园环绕的赭石色建筑群跃入眼帘时，你第一眼可能会误以为这是一座坚固的堡垒，而非宁静的修道院。它的轮廓在烈日的照耀下显得坚硬而沉默，只有那座雕刻着精美科林斯柱式和旋涡纹饰的威尼斯风格门廊，透露出几分不同寻常的优雅。空气中弥漫着百里香和烈日灼烤岩石的干燥气味，蝉鸣是这里唯一的背景音，一种庄严的寂静笼罩着一切。
穿过那道著名的巴洛克式正门，如同跨过一道时间的门槛。外部的炽热与喧嚣瞬间被隔绝，庭院内部是另一个世界。中央是一座精致的威尼斯式小教堂，钟楼静静矗立。但最打动人的是一种混合的气息——古老石墙的凉意、烛火上飘出的蜂蜡微甜、以及不知从哪个角落飘来的、存放了几十年的旧书与木头味道。你会看到黑衣修士静静地走过，身影没入拱廊的阴影里，偶尔有当地老人独自坐在长椅上，对着教堂的方向久久凝视。这里的生活节奏，仿佛还停留在几个世纪以前，缓慢、虔诚而内省。
然而，当你漫步在由拱廊围合的回廊中，触摸那些被岁月打磨光滑的石柱，一种深沉的历史重量会逐渐取代最初的宁静感。墙上挂着一些黑白照片和画像，眼神坚毅。你会发现，这里的宁静并非田园牧歌式的平和，而是一种经过巨大苦难淬炼后的、深沉的肃穆。阿卡迪不是一个仅供观赏的古迹，它是一个依然跳动着的心脏，每一次搏动都回响着1866年那个决定性的爆炸声。它最核心的魅力，在于这种极致的反差：建筑形式上的文艺复兴之美，与它所承载的悲剧性历史记忆，共同铸造出一种无法被复制的精神力量。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`车子沿着克里特岛腹地的山路盘旋而上，当一片被苍劲柏树和古老橄榄园环绕的赭石色建筑群跃入眼帘时，你第一眼可能会误以为这是一座坚固的堡垒，而非宁静的修道院。它的轮廓在烈日的照耀下显得坚硬而沉默，只有那座雕刻着精美科林斯柱式和旋涡纹饰的威尼斯风格门廊，透露出几分不同寻常的优雅。空气中弥漫着百里香和烈日灼烤岩石的干燥气味，蝉鸣是这里唯一的背景音，一种庄严的寂静笼罩着一切。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过那道著名的巴洛克式正门，如同跨过一道时间的门槛。外部的炽热与喧嚣瞬间被隔绝，庭院内部是另一个世界。中央是一座精致的威尼斯式小教堂，钟楼静静矗立。但最打动人的是一种混合的气息——古老石墙的凉意、烛火上飘出的蜂蜡微甜、以及不知从哪个角落飘来的、存放了几十年的旧书与木头味道。你会看到黑衣修士静静地走过，身影没入拱廊的阴影里，偶尔有当地老人独自坐在长椅上，对着教堂的方向久久凝视。这里的生活节奏，仿佛还停留在几个世纪以前，缓慢、虔诚而内省。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，当你漫步在由拱廊围合的回廊中，触摸那些被岁月打磨光滑的石柱，一种深沉的历史重量会逐渐取代最初的宁静感。墙上挂着一些黑白照片和画像，眼神坚毅。你会发现，这里的宁静并非田园牧歌式的平和，而是一种经过巨大苦难淬炼后的、深沉的肃穆。阿卡迪不是一个仅供观赏的古迹，它是一个依然跳动着的心脏，每一次搏动都回响着1866年那个决定性的爆炸声。它最核心的魅力，在于这种极致的反差：建筑形式上的文艺复兴之美，与它所承载的悲剧性历史记忆，共同铸造出一种无法被复制的精神力量。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`阿卡迪修道院`} />
                <InfoRow label="英文名称" value={`Arkadi Monastery`} />
                <InfoRow label="正式名称" value={`Arkadi Monastery`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`克里特岛（雷西姆农地区）`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`克里特岛反抗奥斯曼帝国统治的象征，1866年发生震惊欧洲的集体自爆殉难事件，被誉为“自由的圣坛”。`} />
                <InfoRow label="建筑特色" value={`外观融合了威尼斯文艺复兴时期的华丽巴洛克式正门与克里特本地粗犷的防御性石墙，形成强烈对比。`} />
                <InfoRow label="建筑风格" value={`以威尼斯文艺复兴风格为主导，混合了后拜占庭元素与奥斯曼时期影响的克里特本土建筑风格。`} />
                <InfoRow label="文化价值" value={`不仅是东正教修道院，更是现代希腊民族精神与追求自由意志的至高文化地标。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`全年开放，夏季（4月-10月）通常为上午9:00至晚上7:00；冬季（11月-3月）为上午9:00至下午4:00。中午12:30至1:30可能会有短暂的午休关闭。宗教节日（如复活节）和国定假日（3月25日、10月28日）开放时间可能缩短或举行特殊仪式，建议行前官网复核。`} />
              <InfoRow label="门票价格" value={`入场费约为3欧元。学生、65岁以上长者及多孩家庭享有折扣价2欧元。每周日可能免费入场，但并非绝对。购票处位于主入口旁的小亭子，只接受现金欧元。`} />
              <InfoRow label="地址" value={`Arkadi 741 00, Greece`} />
              <InfoRow label="交通方式" value={`最便捷的方式是从克里特岛第二大城雷西姆农（Rethymno）出发。在雷西姆农城际巴士站（KTEL Rethymnou）乘坐前往“Arkadi”的巴士，车程约40分钟，每日班次有限（夏季通常3-4班，冬季更少），务必提前在车站核对时刻表。若自驾，从雷西姆农沿国家公路向东，在“Arkadi”路标处转入山路，约25公里，山路蜿蜒但路况良好，沿途有橄榄园和葡萄园风光。从干尼亚（Chania）机场自驾前往约需1小时15分钟。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`阿卡迪修道院的故事，远比它16世纪建成时的初衷要厚重得多。它的建立可以追溯到威尼斯共和国统治克里特岛的时期，大约在16世纪中叶。富有的克里特家族出资，可能邀请了威尼斯建筑师参与设计，因此才有了那座与岛上其他拜占庭风格修道院截然不同的、华丽丽的文艺复兴式门面。在威尼斯人统治下，这里最初是学术和抄写中心，保存并延续着东正教与希腊文化的火种。拱廊下曾经回荡着学者们的辩论声，羊皮纸的手抄本在这里堆积，修道院如同一个深山中的文化堡垒。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，随着1669年克里特岛落入奥斯曼帝国之手，阿卡迪的角色开始发生根本性的转变。沉重的赋税和宗教压迫接踵而至，但修道院因其偏远的位置和坚固的围墙，成为了反抗活动的天然庇护所和秘密据点。它的墙体内开始藏匿武器，地窖里囤积给养，神职人员的袍服下可能藏着革命的传单。从17世纪到19世纪，它一直是克里特反抗运动的灵魂中心之一，无数寻求自由的战士在这里得到庇护和祝福。修道院的院长不仅是宗教领袖，更逐渐成为民众心目中的政治和精神领袖。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`历史的引爆点终于在1866年11月到来。当时，奥斯曼军队得到消息，大批反抗者及其家属，包括妇女和儿童，藏匿在修道院内。超过一千人被困其中。在指挥官的要求下，修道院院长加布里埃尔拒绝了投降，并做出了一个悲壮的决定。当奥斯曼士兵最终攻破大门涌入弹药库时，一位名叫康斯坦丁斯·扬巴达基斯的克里特战士，点燃了火药桶。震天动地的爆炸吞噬了进攻者，也带走了大多数防御者。关于具体是谁点燃了火药，有不同的传说版本，但这已不重要。重要的是，这一声巨响，以一种极端惨烈的方式，将克里特人的苦难与不屈传遍了整个欧洲。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`爆炸事件引发了巨大的国际舆论浪潮。欧洲的报纸大幅报道，艺术家创作画作，诗人写下篇章。维克多·雨果等文化名人也发声谴责。阿卡迪修道院的殉难，使“克里特问题”从一个边缘的地方冲突，变成了欧洲公众关注的焦点，极大地推动了克里特最终走向自治并回归希腊的进程。从此，阿卡迪不再仅仅是一座修道院，它成了烈士陵园、民族圣坛和自由的代名词。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天你所看到的建筑，大部分是在原址上精心重建的。爆炸几乎摧毁了除教堂正立面以外的多数结构。但希腊人一丝不苟地按照原样修复了它，甚至刻意保留了当年战斗的一些痕迹——外墙上的弹孔，庭院中那棵在爆炸中烧焦又顽强重生的老树。每一块重新垒起的石头，都是对记忆的加固。如今的阿卡迪，日常功能依然是一座活跃的修道院，钟声按时敲响，礼拜照常举行。但每年11月8日左右，这里都会举行盛大的纪念活动，整个克里特岛的人们都会前来，用鲜花、烛光和诗歌，纪念那些为自由而化为星辰的灵魂。`}</p>
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`为了充分感受阿卡迪修道院的双重灵魂——它的建筑之美与历史之重，建议你在一个工作日的上午（最好是9点开门后不久）抵达。此时的阳光足够明亮，能完美展现巴洛克正门的雕刻细节，游客也相对稀少，你能独享庭院里的那份肃静。整体游览时间建议预留至少3小时，节奏宜缓不宜急。先从外部整体感受其堡垒般的雄姿，再进入内部沉浸于宁静的庭院，最后通过博物馆深入那段悲壮的历史。这样的顺序能让你逐渐从感官印象深入到情感共鸣，完成一次完整的精神之旅。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿着得体，遮住肩膀和膝盖，这是进入所有东正教修道院的基本尊重，入口处有时会提供围巾但最好自备。
尽量避开11月纪念日前后的大型活动日，除非你想参与其中，否则届时人潮汹涌，难以静心体验。
山区天气多变，即便夏季上午晴朗，也建议带一件薄外套，因为修道院内石墙厚重，室内外温差大且可能有风。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`将车停在下方停车场，先不要急于上去，站在远处柏树下仰望整个修道院建筑群，感受它如何如同雄鹰之巢般牢牢嵌在山脊之上。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从侧面的坡道缓缓走近，让目光聚焦在那面标志性的、奶油色与赭石色相间的威尼斯巴洛克式正门上，仔细观察柱头上精细的茛苕叶雕刻。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过门洞进入中央庭院，先在威尼斯式小教堂前的空地上静立片刻，感受光线在拱廊间移动的轨迹，聆听风声、钟声和自己的脚步声。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进圣母升天教堂内部，在昏暗的烛光中仰望圣像屏，寻找那些在爆炸中幸存下来的古老圣像，留意空气中特殊的香料与古老木头混合的气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着北侧拱廊慢行，找到通往旧火药库和殉难者遗骨存放室的通道，这里空间低矮，气氛凝重，是历史心脏所在。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`参观位于回廊一侧的博物馆，那里陈列着1866年事件中留下的残破圣器、武器碎片、发黄的照片以及遇难者的个人物品。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在庭院东面的纪念堂前驻足，那里有长明火燃烧，墙上刻满了名字，不妨在此安静地献上一小束在入口处买的野花。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`离开前，坐在南面拱廊下的阴影里，喝一口自备的清水，看着阳光洒在中央的柏树上，将最后的印象定格在这片宁静与记忆交织的时空里。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`停车场下方橄榄园边缘`}</h4>
                  <p className="text-sm text-gray-700">{`下午四至六点，夕阳西下时，从此处可以拍摄到修道院全景沐浴在金色暖光中，背景是深蓝色的克里特山脉，能完美呈现其“圣坛”般的孤高感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`巴洛克正门特写`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点左右，阳光从东南方斜射，能极好地勾勒出门廊上复杂石雕的立体感与阴影细节，建议使用偏振镜减少石面反光。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`中央庭院拱廊框架构图`}</h4>
                  <p className="text-sm text-gray-700">{`站在庭院西北角，利用拱廊形成的天然画框，将中央的威尼斯式小教堂和钟楼框在其中，任何阳光充足的时间均可，能拍出强烈的纵深感与结构美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`教堂内部烛光与圣像`}</h4>
                  <p className="text-sm text-gray-700">{`将相机稳定在矮柱上，使用高感光度和大光圈，捕捉圣像屏前烛火摇曳的静谧氛围，注意绝对不要使用闪光灯，那是极大的不敬。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`纪念堂长明火窗景`}</h4>
                  <p className="text-sm text-gray-700">{`从纪念堂内部向外拍摄，以燃烧的长明火为前景，透过石窗框住庭院中那棵象征重生的柏树，寓意深刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`教堂内部和遗骨存放室严禁一切形式的闪光灯拍摄，手机也不例外，请务必遵守。拍摄神职人员需极其谨慎，最好先征得默许，避免正面直接拍摄。这里的灵魂更适合用心灵去记录，照片只是辅助。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`经济便捷之选`}</h4>
                  <p className="text-sm text-blue-800">{`雷西姆农古城墙内的家庭式公寓，老板会热情地给你手绘一张前往阿卡迪的交通图，晚上归来还能融入老城温暖的夜生活，在港口边就着海浪声吃新鲜的烤鱼。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`特色沉浸体验`}</h4>
                  <p className="text-sm text-green-800">{`位于阿卡迪修道院附近山村（如Adele）的传统石屋民宿，由百年农舍改造，拥有能俯瞰山谷的私人露台，清晨在鸡鸣和教堂钟声中醒来，真正体验克里特乡村的脉搏。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端设计度假`}</h4>
                  <p className="text-sm text-yellow-800">{`雷西姆农东部海岸线上的五星级度假酒店，拥有私人沙滩和无边泳池，在经历了白天沉重历史之旅后，这里能提供极致的放松与海景慰藉，让旅程张弛有度。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`朝圣者之宿`}</h4>
                  <p className="text-sm text-purple-800">{`极少数在更偏远山区由古老修道院客房改造的简易住所，需提前数月联系预定，条件简朴但氛围无与伦比，夜晚星空如盖，万籁俱寂，是进行深度冥想和写作的绝佳之地。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`除非选择山村石屋，否则强烈建议以雷西姆农为住宿基地，餐饮和交通选择多得多。克里特岛租车方便且价格合理，是探索内陆如阿卡迪这类景点的最佳方式，行程自由。旺季（7-8月）所有住宿都需尽早预订，尤其是周末。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开阿卡迪许久，车行驶在回程的山路上，那份混合着烛火气、石头凉意和历史硝烟的复杂气息，似乎还萦绕在感官里。它带给我的触动，远不止于对一段悲壮历史的知晓，更是一种关于“存在”的深刻思考。在这个世界上，有些地方的美是轻盈的、愉悦感官的，而阿卡迪的美，是沉重的、直击心灵的。它告诉我们，建筑不仅是石头与形式的艺术，更是记忆与精神的容器。那扇华丽的威尼斯大门，仿佛一个永恒的隐喻：文明与优雅的形态之下，可能包裹着为捍卫尊严与自由而不惜玉碎的刚烈灵魂。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在当今这个习惯于快速消费、追求表面愉悦的旅行时代，阿卡迪修道院是一剂必要的“清醒剂”。它邀请甚至要求旅人慢下来，去凝视，去触摸，去聆听沉默中的回响。它不提供轻松的度假感，却馈赠一种稀缺的、关于勇气、牺牲与历史纵深的理解。每一位热爱深度游的旅人，都应当来这里一次。不是为了收集又一个景点，而是为了让自己站在那个庭院中，亲身感受一种超越个人生命的宏大叙事如何凝聚于一地，并在此刻依然鲜活地搏动。这趟旅程，最终会成为一次与民族灵魂的对话，一次对“自由”二字重量的切身掂量。你会明白，有些光辉，生于烈焰；有些宁静，来自最深沉的雷鸣。`}</p>
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/chania-venetian-harbour" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尼亚威尼斯港</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chania Venetian Harbour</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/chania-old-town-venetian-harbor-lighthouse" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    哈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">哈尼亚老城</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Chania Old Town</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/symi-island-greece" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    锡
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">锡米岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Symi</p>
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
