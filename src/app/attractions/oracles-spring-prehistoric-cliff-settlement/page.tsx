import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '圣谕之泉与远古崖居 Oracle\'s Spring｜探秘神谕之泉与史前断崖文明 - 最佳欧洲景点',
  description: '车子拐过最后一个弯道，那片景象就这么毫无预兆地撞进眼里。不是宏伟，不是精致，而是一种近乎野蛮的寂静与崇高。左边，是沐浴在炽烈阳光下的白色石灰岩废墟，像巨兽的骨骸散落在山坡上；右边，几百米之下，爱琴海蓝得让人心慌，那种蓝是带着重量的，沉沉地贴着悬崖的脚踝。风是这里第一个跟你打招呼的居民，它从海上来，卷',
}

export default function OraclesSpringPrehistoricCliffSettlementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '希腊', href: '/destinations/europe' },
            { label: '阿波罗尼亚岛', href: '/destinations/europe' },
            { label: '圣谕之泉与远古崖居', href: '/attractions/oracles-spring-prehistoric-cliff-settlement' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`圣谕之泉与远古崖居・Oracle's Spring and Prehistoric Cliff Settlement・希腊・阿波罗尼亚岛`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐过最后一个弯道，那片景象就这么毫无预兆地撞进眼里。不是宏伟，不是精致，而是一种近乎野蛮的寂静与崇高。左边，是沐浴在炽烈阳光下的白色石灰岩废墟，像巨兽的骨骸散落在山坡上；右边，几百米之下，爱琴海蓝得让人心慌，那种蓝是带着重量的，沉沉地贴着悬崖的脚踝。风是这里第一个跟你打招呼的居民，它从海上来，卷着咸腥的水汽和百里香的干燥香气，呼啸着穿过那些没有屋顶的石头房间，发出呜呜的、类似陶笛的空鸣。一瞬间，你会忘记自己是21世纪的游客，仿佛踏入了某个被时间遗忘的缝隙。
走下停车场，沿着一条被无数脚步磨得发亮的石板小径往遗址深处走。最先迎接你的是声音——不是人声，是远处山坡上零星几只山羊颈间传来的、悠远而清脆的铃声，还有不知名的虫鸣，藏在那些开着黄色小花的刺山柑灌木丛里。当地人，主要是几位看护遗址的老人和一家经营着小咖啡馆的家族，他们的生活节奏似乎也跟这里融为一体，缓慢、重复，带着一种古老的耐心。咖啡馆的老主人会指着远处海面上的一个光点告诉你，那是他儿子今天出海打渔的船。这里不是那种被玻璃罩起来的博物馆，生活还在它周围静静地流淌，废墟是背景，也是主角。
而最摄人心魄的核心，藏在那片看似普通的废墟深处。你需要穿过坍塌的柱廊，沿着一段在天然岩壁上凿出的、湿滑的之字形阶梯向下。光线陡然变暗，温度骤降，空气中弥漫着一种浓重的、类似铁锈和潮湿泥土混合的气味。然后，你看到了它——那眼“圣谕之泉”。它并非喷涌的泉水，而是一个从岩洞深处幽暗石缝中缓慢渗出的水潭，水面如墨玉般漆黑、纹丝不动，只在水潭边缘因极细微的漫溢而泛起丝绒般的光泽。传说，女祭司就是在这里进入通神的状态。站在潭边，万籁俱寂，只能听到自己心跳和那几乎无法察觉的、水滴落入潭中的“叮”的一声，间隔长得令人焦虑。那种深邃的宁静，比任何喧嚣都更有力量，它直接叩问你的内心，让你瞬间理解，为何千年前的人们会相信，神灵的声音就在这里。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子拐过最后一个弯道，那片景象就这么毫无预兆地撞进眼里。不是宏伟，不是精致，而是一种近乎野蛮的寂静与崇高。左边，是沐浴在炽烈阳光下的白色石灰岩废墟，像巨兽的骨骸散落在山坡上；右边，几百米之下，爱琴海蓝得让人心慌，那种蓝是带着重量的，沉沉地贴着悬崖的脚踝。风是这里第一个跟你打招呼的居民，它从海上来，卷着咸腥的水汽和百里香的干燥香气，呼啸着穿过那些没有屋顶的石头房间，发出呜呜的、类似陶笛的空鸣。一瞬间，你会忘记自己是21世纪的游客，仿佛踏入了某个被时间遗忘的缝隙。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走下停车场，沿着一条被无数脚步磨得发亮的石板小径往遗址深处走。最先迎接你的是声音——不是人声，是远处山坡上零星几只山羊颈间传来的、悠远而清脆的铃声，还有不知名的虫鸣，藏在那些开着黄色小花的刺山柑灌木丛里。当地人，主要是几位看护遗址的老人和一家经营着小咖啡馆的家族，他们的生活节奏似乎也跟这里融为一体，缓慢、重复，带着一种古老的耐心。咖啡馆的老主人会指着远处海面上的一个光点告诉你，那是他儿子今天出海打渔的船。这里不是那种被玻璃罩起来的博物馆，生活还在它周围静静地流淌，废墟是背景，也是主角。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "而最摄人心魄的核心，藏在那片看似普通的废墟深处。你需要穿过坍塌的柱廊，沿着一段在天然岩壁上凿出的、湿滑的之字形阶梯向下。光线陡然变暗，温度骤降，空气中弥漫着一种浓重的、类似铁锈和潮湿泥土混合的气味。然后，你看到了它——那眼“圣谕之泉”。它并非喷涌的泉水，而是一个从岩洞深处幽暗石缝中缓慢渗出的水潭，水面如墨玉般漆黑、纹丝不动，只在水潭边缘因极细微的漫溢而泛起丝绒般的光泽。传说，女祭司就是在这里进入通神的状态。站在潭边，万籁俱寂，只能听到自己心跳和那几乎无法察觉的、水滴落入潭中的“叮”的一声，间隔长得令人焦虑。那种深邃的宁静，比任何喧嚣都更有力量，它直接叩问你的内心，让你瞬间理解，为何千年前的人们会相信，神灵的声音就在这里。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`圣谕之泉与远古崖居`} />
                <InfoRow label="英文名称" value={`Oracle's Spring and Prehistoric Cliff Settlement`} />
                <InfoRow label="正式名称" value={`Oracle's Spring and Prehistoric Cliff Settlement`} />
                <InfoRow label="国家" value={`希腊`} />
                <InfoRow label="城市" value={`阿波罗尼亚岛`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`这里曾是爱琴海地区最受尊崇、也最为神秘的神谕发布地之一，其影响力可与德尔斐媲美，是古希腊乃至整个地中海世界王侯将相决策命运前的必访之所。`} />
                <InfoRow label="建筑特色" value={`将天然溶洞圣泉、依险峻海崖而建的阶梯式剧场与蜂窝状史前居所废墟不可思议地融合为一体，是人类顺应并崇拜自然的极端体现。`} />
                <InfoRow label="建筑风格" value={`原始古朴的基克拉泽斯文明风格与后来古典希腊的柱式建筑元素层叠交错，形成独特的时空对话。`} />
                <InfoRow label="文化价值" value={`它不仅是一个祭祀遗址，更是理解古希腊人如何通过神谕沟通人神、以及史前人类如何在地中海极端环境中生存繁衍的关键密码。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`考古遗址与自然步道每日上午8:00开放，关闭时间随季节变化：4月至10月为晚上19:00；11月至次年3月为下午17:00。圣泉内部参观区开放时间为上午9:30至下午16:30，每小时限流进入一次，每次参观不超过15分钟。每周一上午遗址区域关闭进行维护（自然步道仍开放），但若周一是国家法定节假日则正常开放，顺延至次日闭馆。冬季（12月至2月）如遇恶劣天气，通往崖居的步道可能会临时关闭。`} />
              <InfoRow label="门票价格" value={`全价票：12欧元（包含遗址、圣泉内部参观及小型考古博物馆）。优惠票：6欧元（适用于65岁以上欧盟公民、欧盟以外的国际学生持有效证件、以及6人以上的团体）。免票：18岁以下青少年、欧盟国家全日制学生、残障人士及一名陪同者。注意：每年3月6日、4月18日、9月最后一个周末及11月1日至3月31日每个月的第一个星期日对所有游客免票。门票建议在官方网站在线预订，可避免旺季（5-9月）门口长队，并选择精确的圣泉参观时段。`} />
              <InfoRow label="地址" value={`Oracle's Spring, Prehistoric Path, Apollonia 840 05, Greece`} />
              <InfoRow label="交通方式" value={`从雅典国际机场出发，最便捷的方式是乘坐出租车或机场巴士（X93线）到雅典比雷埃夫斯港，车程约1小时。从比雷埃夫斯港乘坐渡轮前往阿波罗尼亚岛，常规渡轮约需5-6小时，高速水翼艇约需2.5小时，班次每日2-4班不等，夏季班次增加，务必提前在船运公司官网（如Blue Star Ferries, Hellenic Seaways）购票。抵达阿波罗尼亚岛港口后，可乘坐本地蓝色巴士“Apollonia Line 2”直达遗址停车场，车程约25分钟，每小时一班；或乘坐出租车，车程约20分钟，费用约15-20欧元。自驾游客可租车沿岛屿东海岸公路行驶约18公里，有明显棕色旅游标识指引。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "关于这片土地的最早记忆，模糊得如同晨雾。考古学家在崖居最底层的灰烬里，发现了可追溯到公元前三千年的陶器碎片，属于基克拉泽斯文明晚期。那时的人选择这里，绝非为了风景。这座面东的悬崖，背靠岛屿山峦，能躲避凶猛的北风，清晨第一缕阳光能最快地驱散夜间的寒气与湿气。悬崖上天然的凹洞和裂隙，成为最初的庇护所。他们捕鱼、种植耐旱的谷物，用黑曜石制作工具，并在崖壁上凿出一个个相连的“房间”，形成了一个小型的垂直村落。他们的生活痕迹，如今只剩下一些圆形的地基和储粮坑，沉默地诉说着与大海和岩石搏斗的生存史。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "转折点大约发生在迈锡尼文明时期。或许是因为一次地震，岩层裂开，那眼含有特殊矿物质、能致人轻微幻觉的泉水被发现了。泉水所在的位置隐秘而富有戏剧性，位于一个面朝大海的岩洞深处，仿佛大地张开的嘴。先民们将这种精神体验视为神启，此地逐渐从一个普通的聚居点，演变为一处圣地。最初可能只是简单的祭祀，但随着口耳相传，它的名声开始越过海洋。到了公元前8世纪左右，随着希腊城邦的兴起和海外殖民的浪潮，人们对神谕的需求爆炸式增长。这里迎来了它的“黄金时代”。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "一位名叫“皮提娅”（与德尔斐的女祭司同名）的传奇女性被记载下来。她并非世袭的祭司，传说原是本岛一位牧羊女，在一次意外跌落岩洞饮用泉水后，展现了预言能力。她被尊奉为阿波罗神在人间的代言人。求谕的仪式复杂而神秘：求问者需先在海中完成洁净仪式，然后奉上珍贵的贡品（通常是金银器或雕塑）。在指定的日子，皮提娅会饮下泉水，坐在圣泉旁一个特设的石椅上，吸入岩洞中可能存在的天然乙烯气体，逐渐进入迷狂状态。她含糊的呓语和呻吟，由守在一旁的男性祭司“翻译”成晦涩的诗句，传递给焦急等待的国王、将军或殖民者领袖。据说，斯巴达的国王曾在此问询出征的吉凶，而叙拉古的僭主则在此求得建立新城的选址启示。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "繁荣持续了数百年，但也引来了觊觎。罗马人征服希腊后，虽然也尊重此地，但更将其视为奇观和旅游胜地。罗马贵族们来此，更多是出于好奇和炫耀，神谕的神圣性逐渐褪色。真正的打击来自公元后。随着基督教的兴起，这种“异教”崇拜成为打击目标。圣泉被宣布为“魔鬼的蛊惑”，岩洞入口被刻意用石块封堵，神庙建筑被 systematically 拆毁，石料被运去修建早期的基督教教堂。地震和海盗的侵扰给了它最后几击，崖居的居民被迫迁往内陆更安全的村庄。曾经喧嚣的圣地，被荒草、尘土和无尽的海风接管，沉睡了上千年。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "它的重新发现，充满了戏剧性。19世纪初，一位法国古董商在岛上收集民间传说时，多次听到关于“会说话的泉水”和“魔鬼居住的悬崖”的故事。他雇佣当地农民清理了岩洞入口的部分封石，首次进入了圣泉空间，并记录了内部结构。真正系统的考古发掘要到20世纪30年代，由希腊和意大利的联合考古队进行。他们不仅清理了圣泉区域，更通过细致的土层分析，首次确认了其下叠压着的史前聚落遗址，将这片土地的历史一下子向前推进了两千多年。断崖上那些曾被当作自然岩洞的孔穴，被证实是人工开凿的居所。从此，神谕圣地和史前家园两个看似无关的身份，在此合二为一，构成了我们今天看到的这幅复杂而迷人的历史拼图。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的探访始于清晨。建议搭乘最早一班渡轮抵达岛屿，争取在上午9点前到达遗址。此时阳光尚且温柔，旅游团大军未至，你能独享圣泉那份原始的静谧。整个游览需留足4-5小时，节奏宜慢不宜快。路线设计为顺时针环形：先从高处俯瞰全景，建立空间感；然后深入核心的圣泉区，体验精神内核；接着在凉爽的博物馆里梳理历史脉络；最后，沿着史前步道攀登至崖居最高点，完成一次从精神到物理的升华，并在傍晚时分收获爱琴海最壮丽的日落作为奖赏。这样的安排既避开了正午参观露天遗址的暴晒，也让旅程的尾声充满视觉和情感的高潮。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`务必穿一双抓地力强的徒步鞋或运动鞋，史前步道的部分路段是天然岩石，布满沙粒，非常湿滑。夏季参观一定要带足饮用水和防晒用品，遗址内遮阴处极少，正午的阳光极为毒辣。警惕“免费导游”的搭讪，他们通常会在停车场或博物馆门口活动，最终目的是带你去合作的纪念品商店进行高额消费。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从停车场出来，先别急着往下走，向左拐上那个长满野花的小土坡，那里是拍摄遗址与大海全景的绝佳起点。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`顺着主步道向下，第一个重大节点是那个半圆形的露天剧场，找一块被阳光晒得微暖的石阶坐下，静静听一会儿风声和海浪的混响。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从剧场侧面的小径下行，目标明确地前往那个不起眼的岩洞入口，准备进入本次旅程最核心也最幽暗的圣谕之泉内部。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从圣泉出来，眼睛需要适应一下阳光，这时正好去旁边的考古博物馆，在阴凉中通过那些出土的还愿祭品和工具，拼凑起失落的世界。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`博物馆后门直接连接着“史前小径”，这是一段略有挑战性的 uphill climb，沿着清晰标记的Z字形路向上，探索那些凿在崖壁上的古老居所洞穴。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`当你气喘吁吁地登上整个遗址的制高点——那个被称为“鹰巢”的瞭望平台时，转过身，360度的蔚蓝海景会让你觉得一切攀登都值得。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下山时选择另一条较平缓的滨海小路，途中会经过一小片安静的鹅卵石海滩，不妨脱掉鞋子，让冰凉的海水冲刷一下疲惫的双脚。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后回到入口处的那家家庭咖啡馆，点一杯用本地香草冲泡的希腊山茶，就着蜂蜜核桃酥，慢慢回味刚才经历的数千年时光。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`全景山坡机位`}</h4>
                  <p className="text-sm text-gray-700">{`清晨或日落前半小时，站在停车场左侧的小土坡上，使用中长焦镜头，将前景的野花、中景的白色遗址废墟与背景的湛蓝爱琴海压缩在同一画面，层次感极强。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣泉岩洞内部`}</h4>
                  <p className="text-sm text-gray-700">{`进入圣泉后，等待眼睛适应黑暗，将相机感光度调高，对准那潭幽黑的泉水，利用岩缝中透入的一缕天光作为唯一光源，拍摄水面和潮湿岩壁的质感，能营造出极度神秘的气氛。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`剧场光影时刻`}</h4>
                  <p className="text-sm text-gray-700">{`下午三至四点，阳光会斜射进半圆形剧场，形成美妙的光影分割线，坐在高处阴影里，拍摄阳光照亮的那几排石凳和远处作为背景的大海，故事感油然而生。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`崖居洞穴框架`}</h4>
                  <p className="text-sm text-gray-700">{`在攀登史前小径的中段，有一个较大的洞穴，站在洞口内侧向外拍摄，以洞穴天然的岩石轮廓作为画框，框住外面无边无际的蓝色海洋和一艘偶然经过的帆船。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`“鹰巢”日落全景`}</h4>
                  <p className="text-sm text-gray-700">{`日落前登顶瞭望平台，使用手机的全景模式或相机的广角端，从左侧的崖居遗迹缓缓扫到右侧沉入海平面的夕阳，记录下金光洒满整个遗址的辉煌一刻。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`圣泉岩洞内部严格禁止使用闪光灯和三脚架，以免惊扰其他参观者并保护脆弱的微环境。拍摄当地居民（如咖啡馆主人、牧羊人）前，请务必先微笑并用手势征求对方同意，这是一种基本的尊重。无人机飞行在遗址上空是完全禁止的，周围有明显的警示标志。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`悬崖边的隐秘石屋`}</h4>
                  <p className="text-sm text-blue-800">{`由传统崖居洞穴改造而成的一室户石屋，位于遗址保护区外但步行仅十分钟，拥有面朝大海的无敌私人露台，夜晚只有星空和海浪声相伴。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`港口小镇的家庭旅馆`}</h4>
                  <p className="text-sm text-green-800">{`住在阿波罗尼亚岛的主要港口小镇上，由一对老夫妇经营的洁白家庭旅馆，房间虽小但一尘不染，早晨能吃到老板娘亲手做的酸奶配自制果酱，充满生活气息。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`岛屿内陆的生态农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`位于岛屿中部山谷里的有机农庄客栈，四周是橄榄树林，提供以自产食材为主的田园晚餐，环境极其静谧，适合想要彻底放松、远离游客区的旅行者。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`高端设计型度假村`}</h4>
                  <p className="text-sm text-purple-800">{`坐落在遗址另一侧隐秘海湾的精品度假村，将现代极简设计与基克拉泽斯风格完美融合，拥有无边泳池和绝佳的夕阳观景餐厅，是蜜月或庆祝特殊日子的完美选择。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "岛上住宿数量有限，尤其是在5月至9月的旺季，务必提前至少两到三个月预订。如果选择住在港口小镇，夜晚非常安全，可以悠闲地散步。但如果选择住在更偏僻的农庄或石屋，建议租一辆小型四轮摩托车（岛上主要交通工具）以方便出行，因为公共交通在晚上班次很少。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开的时候，我背包里多了一块从鹅卵石海滩捡的、被海水磨得光滑的白色石头。它很普通，但握在手里，仿佛能感觉到阳光的温度和海风的形状。圣谕之泉与远古崖居给我的，不是那种看完精美艺术品的赞叹，而是一种更沉静、更持久的震撼。它让我看到，人类的信仰可以如此深邃地扎根于自然的险峻与神秘之中，而生存的意志又能如此坚韧地在悬崖上开凿出家园。这里没有给出任何关于命运的明确答案，就像那潭深不见底的泉水一样。但它提供了一个绝佳的场域，让你停下来，面对浩瀚的大海和亘古的岩石，去倾听自己内心最真实的声音——这在今天这个充斥着嘈杂信息和速成答案的世界里，是一种无比奢侈的体验。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "所以，如果你厌倦了那些被过度包装的景点，如果你想寻找一处能让时间变慢、能让心灵沉淀的地方，请把它列入你的清单。来这里，不只是看一片废墟和一片海，而是完成一次与自己、与自然、与人类古老精神世界的对话。当夕阳把整个悬崖染成金黄，你站在先民们曾经站过的位置，看着同样的海平面，那一刻的连通感，超越所有语言，成为你旅途中最宝贵的收藏。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/dodona-oracle-sanctuary" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    多
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">多多纳</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Dodona</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ancient-theatre-of-epidaurus" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    埃
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">埃皮达鲁斯古剧场</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ancient Theatre of Epidaurus</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/metsovo" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迈
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迈措翁</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Metsovo</p>
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
