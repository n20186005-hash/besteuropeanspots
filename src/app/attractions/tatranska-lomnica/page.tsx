import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '塔特兰斯卡洛姆尼察 Tatranská Lomnica｜乘坐红色缆车冲上云霄，在洛姆尼茨基峰顶触摸斯洛伐克天空 - 最佳欧洲景点',
  description: '你第一眼看见塔特兰斯卡洛姆尼察，可能不会觉得它有多么惊世骇俗。它不像那些巍峨的宫殿，第一眼就夺走你的呼吸。它安安静静地躺在高塔特拉山的怀抱里，一片由深棕色木屋和尖顶小屋组成的村落，屋顶上还积着一层未化的春雪，在阳光下泛着砂糖般细腻的光泽。空气是这里的第一份礼物——凛冽、清澈，带着松针和冷杉被阳光晒暖',
}

export default function TatranskaLomnicaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '斯洛伐克', href: '/destinations/europe' },
            { label: '塔特兰斯卡洛姆尼察', href: '/destinations/europe' },
            { label: '塔特兰斯卡洛姆尼察', href: '/attractions/tatranska-lomnica' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`塔特兰斯卡洛姆尼察・Tatranská Lomnica・斯洛伐克・塔特兰斯卡洛姆尼察`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`你第一眼看见塔特兰斯卡洛姆尼察，可能不会觉得它有多么惊世骇俗。它不像那些巍峨的宫殿，第一眼就夺走你的呼吸。它安安静静地躺在高塔特拉山的怀抱里，一片由深棕色木屋和尖顶小屋组成的村落，屋顶上还积着一层未化的春雪，在阳光下泛着砂糖般细腻的光泽。空气是这里的第一份礼物——凛冽、清澈，带着松针和冷杉被阳光晒暖后逸出的树脂香气，你深吸一口，感觉整个肺部都被洗刷得透明。耳边是持续的、温柔的背景音：溪水融雪后潺潺的流动声，远处缆车绳索划过滑轮的低沉嗡鸣，还有登山杖轻轻点击石阶的“哒、哒”声。
但别被这份宁静欺骗。这里的灵魂，是垂直的。你的目光会不由自主地被牵引，沿着森林覆盖的山坡向上，向上，直到被那座屹立在村子上方、线条简洁有力的红色缆车站截住。再往上，是更令人眩晕的景象：两条钢索如同巨人的琴弦，笔直地、几乎毫不费力地射向云雾缭绕的灰白色山峰。那就是洛姆尼茨基峰，海拔2634米，斯洛伐克的第二高峰。看着那小小的缆车车厢像一颗红色的糖果，沿着琴弦缓缓升入云端，你会立刻明白，这个小镇平静的外表下，跳动着一颗渴望天空和极限的心脏。这里的生活节奏，是由缆车的班次、雪道的状况和徒步者的登山计划来划分的。
清晨，你会看到穿着鲜艳防风衣、背着巨大滑雪板的居民，他们不是在闲逛，而是带着一种沉稳的、目的明确的兴奋感走向缆车站。下午，从山上下来的徒步者，面孔被高山的阳光和风刻得红彤彤的，坐在露天餐馆里，就着一大杯本地酿的蜂蜜酒，声音沙哑却热烈地比划着今天的见闻。傍晚，当最后一班缆车下山，小镇才真正松弛下来，木屋窗户里透出鹅黄色的灯光，厨房里飘出炖牛肉和烤面包的温暖香气。在这里，山不是风景，而是生活的坐标、挑战的场域和精神的寄托。塔特兰斯卡洛姆尼察最打动人心的，正是这种与高山如此亲密无间、融为一体的日常感。它不把你当游客，它邀请你进入一种以山为尺度的生活。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "你第一眼看见塔特兰斯卡洛姆尼察，可能不会觉得它有多么惊世骇俗。它不像那些巍峨的宫殿，第一眼就夺走你的呼吸。它安安静静地躺在高塔特拉山的怀抱里，一片由深棕色木屋和尖顶小屋组成的村落，屋顶上还积着一层未化的春雪，在阳光下泛着砂糖般细腻的光泽。空气是这里的第一份礼物——凛冽、清澈，带着松针和冷杉被阳光晒暖后逸出的树脂香气，你深吸一口，感觉整个肺部都被洗刷得透明。耳边是持续的、温柔的背景音：溪水融雪后潺潺的流动声，远处缆车绳索划过滑轮的低沉嗡鸣，还有登山杖轻轻点击石阶的“哒、哒”声。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "但别被这份宁静欺骗。这里的灵魂，是垂直的。你的目光会不由自主地被牵引，沿着森林覆盖的山坡向上，向上，直到被那座屹立在村子上方、线条简洁有力的红色缆车站截住。再往上，是更令人眩晕的景象：两条钢索如同巨人的琴弦，笔直地、几乎毫不费力地射向云雾缭绕的灰白色山峰。那就是洛姆尼茨基峰，海拔2634米，斯洛伐克的第二高峰。看着那小小的缆车车厢像一颗红色的糖果，沿着琴弦缓缓升入云端，你会立刻明白，这个小镇平静的外表下，跳动着一颗渴望天空和极限的心脏。这里的生活节奏，是由缆车的班次、雪道的状况和徒步者的登山计划来划分的。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "清晨，你会看到穿着鲜艳防风衣、背着巨大滑雪板的居民，他们不是在闲逛，而是带着一种沉稳的、目的明确的兴奋感走向缆车站。下午，从山上下来的徒步者，面孔被高山的阳光和风刻得红彤彤的，坐在露天餐馆里，就着一大杯本地酿的蜂蜜酒，声音沙哑却热烈地比划着今天的见闻。傍晚，当最后一班缆车下山，小镇才真正松弛下来，木屋窗户里透出鹅黄色的灯光，厨房里飘出炖牛肉和烤面包的温暖香气。在这里，山不是风景，而是生活的坐标、挑战的场域和精神的寄托。塔特兰斯卡洛姆尼察最打动人心的，正是这种与高山如此亲密无间、融为一体的日常感。它不把你当游客，它邀请你进入一种以山为尺度的生活。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`塔特兰斯卡洛姆尼察`} />
                <InfoRow label="英文名称" value={`Tatranská Lomnica`} />
                <InfoRow label="正式名称" value={`Tatranská Lomnica`} />
                <InfoRow label="国家" value={`斯洛伐克`} />
                <InfoRow label="城市" value={`塔特兰斯卡洛姆尼察`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`高塔特拉山最早、最著名的山地度假胜地之一，是现代斯洛伐克高山旅游与滑雪运动的摇篮。`} />
                <InfoRow label="建筑特色" value={`以经典的阿尔卑斯风格木屋建筑群为核心，点缀着功能至上的现代化缆车站与酒店，红色缆车成为最耀眼的地标。`} />
                <InfoRow label="建筑风格" value={`中心区为传统的中欧山区木构建筑风格，融合了少许社会主义时期的实用主义建筑和现代简约设计。`} />
                <InfoRow label="文化价值" value={`体现了斯洛伐克民族对塔特拉山脉的深厚情感，是户外文化、自然崇拜与休闲生活方式的完美结合地。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`缆车系统全年运行，但具体时间随季节和天气剧烈变动。夏季（通常6月至9月）首班车上山约在8:30-9:00，末班车下山约在16:30-17:30，高峰时段每15-20分钟一班。冬季（12月至次年4月）运营时间与滑雪场开放时间同步，首班车约7:30，服务于滑雪者，观光客最佳上山窗口通常在9:30之后。塔特拉山植物园开放时间为5月中旬至10月中旬，每天9:00-17:00。所有设施在恶劣天气（强风、雷暴）可能暂停运营，11月和5月常有为期数周的全面检修期。出行前务必查看官网实时公告。`} />
              <InfoRow label="门票价格" value={`缆车票价采用分段制。标准往返票（从塔特兰斯卡洛姆尼察站到洛姆尼茨基峰站）成人票价约为45欧元。持有国际学生证（ISIC）可享受约8折优惠，6-15岁儿童半价，6岁以下免费。家庭套票（2大2小）有优惠。滑雪通行证需单独购买，一日票价格约45-55欧元，有多日套票。塔特拉山植物园门票成人约5欧元，儿童半价。建议购买“Tatry Card”联票，可涵盖区域内多处景点和部分交通，性价比高。`} />
              <InfoRow label="地址" value={`Tatranská Lomnica 059 60, Slovakia`} />
              <InfoRow label="交通方式" value={`最近的主要机场是波普拉德-塔特利机场（Poprad-Tatry Airport, PZY），距离约12公里。从机场可搭乘出租车（约20分钟，30欧元左右）或提前预约接送服务。更经济的方案是乘坐火车或巴士到波普拉德（Poprad）主交通枢纽。从首都布拉迪斯拉发或科希策乘坐火车至波普拉德总站（Poprad hlavná stanica），车程约3.5-4小时。从波普拉德火车站外的巴士站，换乘前往“Tatranská Lomnica”的黄色本地巴士（线路编号通常为182、189等），车程约30-40分钟，班次频繁（约每30分钟一班），票价低廉。自驾沿E50公路至波普拉德，然后顺着清晰路标驶入高塔特拉山区。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "故事要从19世纪末讲起，那时候的塔特兰斯卡洛姆尼察还只是一个藏在深山老林里的牧羊人小村落，只有几条泥泞小径与外界相连。改变一切的是一个叫Ján Husz的匈牙利贵族（当时斯洛伐克属于奥匈帝国），他就像一位发现了璞玉的鉴赏家。1889年，他在这里建起了第一栋像样的别墅，取名“洛姆尼察”，初衷或许只是为了夏日避暑。但他没想到，这栋木屋成了点亮星火的火种。高塔特拉山雄伟而原始的美，开始吸引布拉迪斯拉发、维也纳甚至布达佩斯的艺术家、学者和冒险家。他们跋涉而来，被这里纯净的空气和震撼的景色征服，于是更多的木屋别墅如雨后春笋般出现。一个专为欣赏高山、进行“气候疗养”而生的社区雏形，悄然诞生。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的飞跃，发生在20世纪30年代。人类不再满足于仰望山峰，他们想要征服，至少是轻松地抵达。1937年，一项在当时堪称工程奇迹的壮举开始了——建设通往洛姆尼茨基峰的缆车系统。想象一下，在几乎垂直的岩壁和冰川地貌上，工人们如何凭借最基础的机械，将沉重的钢架和电缆运送上山。1940年，第一段缆车（从山脚到斯图德诺霍斯基酒店）投入运营，它立刻成为整个中欧的明星。人们蜂拥而至，只为体验这种“飞升”的感觉。然而，战争的阴云很快笼罩了一切。建设一度中断，这片世外桃源也无法幸免于战火的波及。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "二战结束后，斯洛伐克成为捷克斯洛伐克社会主义共和国的一部分。时代变了，游客的构成也变了。塔特兰斯卡洛姆尼察被赋予了新的使命：成为劳动人民的疗养胜地和培养社会主义体育健儿的基地。大规模的旅馆和培训设施建了起来，缆车系统在1960年代得以最终完善，建成了直冲峰顶的第二段。风格从昔日的贵族优雅，转向了实用和集体主义。滑雪运动被大力推广，这里诞生了许多优秀的滑雪运动员。那个红色缆车，成为了国家自豪感和全民健身的一个标志。小镇的面貌被深刻地改变了，但它与高山的联结，反而在一种新的集体叙事中得到了加强。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "1989年天鹅绒革命后，一切再次转向。国有酒店被私有化，新的投资涌入。塔特兰斯卡洛姆尼察面临着新的挑战：如何在全球化旅游浪潮中，保持自己的特色和灵魂？它没有变成迪士尼式的主题公园，而是聪明地走了融合之路。古老的传统木屋被精心修复，改建为富有情调的精品酒店和餐厅。现代化的滑雪设施不断升级，以满足国际滑雪爱好者的需求。更重要的是，那种源于19世纪的、对高山自然的敬畏和热爱，被重新珍视和发扬。环保理念被植入旅游开发，塔特拉山国家公园的管理更加严格。今天的塔特兰斯卡洛姆尼察，是一个奇妙的混合体：它身上既有奥匈帝国末期的浪漫遗风，也有社会主义时期的集体记忆，更洋溢着当代欧洲对可持续户外生活的追求。它的历史，就是一部人类如何一步步走近高山、理解高山，并试图与之和谐共存的微型史诗。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`完美的塔特兰斯卡洛姆尼察深度体验需要至少一天半的时间，核心是充分尊重高山的天气和自身的节奏。建议前一晚入住小镇，第二天清晨务必赶上第一或第二班观光缆车（夏季约8:30-9:00，冬季稍晚），这时光线最佳，游客最少，山顶最为宁静。整个上山、山顶漫步、下山的过程约需3.5-4小时。下山后，下午的节奏应该放缓，用2-3小时沉浸式游览塔特拉山植物园，这里是了解塔特拉山生态系统的最佳课堂。傍晚和次日清晨则留给小镇本身，在小径和木屋间漫步，感受山间生活的日常脉搏。这样安排既能体验巅峰的壮阔，又能捕捉山谷的细腻，张弛有度。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`山顶天气瞬息万变，即使山下晴朗也务必携带防风防水外套和保暖衣物，高山失温非常危险。购买缆车票前务必在官网或车站查看山顶实时摄像头和天气公告，避免花钱上云层“洗白”。穿着适合徒步的防滑鞋，即使是缆车站附近的短途步道也可能有冰或碎石。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`赶在第一批观光客之前跳上那列红色的缆车车厢，感受它启动时轻微的晃动然后毫无滞碍地滑入空中，脚下森林瞬间变成绿色的绒毯。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在洛姆尼茨基峰站的观景平台迎着几乎能把人吹透的狂风站稳，看着云海在脚下翻滚而维斯瓦峰等一众巨人仿佛触手可及。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着峰顶标识清晰的短步道慢慢走一圈，仔细观察在极端环境下紧贴岩石生存的高山苔原植物，感受生命的顽强。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`乘缆车下到中间站，参观一下那座历史悠久的斯图德诺霍斯基石屋酒店，在它的露台上喝杯热茶，回味刚才的云端之旅。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`下午走进塔特拉山植物园，跟随蜿蜒的木栈道认识每一株标有名字的本地植物，从高大的松树到微小的高山花朵。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在植物园尽头那间俯瞰山谷的玻璃温室里静静地坐一会儿，看光线透过玻璃在蕨类植物上移动，享受温暖的静谧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`傍晚时分沿着小镇主路后方那条通往森林的小溪边散步，听着水声，寻找那些隐藏在树丛中、造型各异的百年老木屋。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`第二天起个大早，如果天气允许，租一套装备跟随本地向导尝试一段轻松的高山徒步，真正用双脚丈量这片土地。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`红色缆车行进中拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`上山时选择面向山谷的车厢角落，使用中长焦镜头压缩空间，将蜿蜒的森林小路、小镇木屋和远山层层叠叠收纳进一幅画面，清晨的侧光能勾勒出完美的纹理。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`洛姆尼茨基峰顶环形步道`}</h4>
                  <p className="text-sm text-gray-700">{`在步道东侧，以宏伟的维斯瓦峰为背景，等待一位徒步者的剪影走过山脊线，构图时将人物放在画面下方三分之一处，能极致体现人类的渺小与自然的伟大。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`塔特拉山植物园温室内部`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点左右，太阳西斜，光线以低角度射入温室，此时拍摄逆光下的植物叶片，它们会呈现出半透明的翡翠光泽，充满生命的神圣感。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`小镇溪流与老木屋`}</h4>
                  <p className="text-sm text-gray-700">{`清晨日出后一小时，阳光刚好能斜射进溪流边的森林，找到一座最有特色的木屋，将潺潺溪流作为前景，木屋作为中景，晨雾缭绕的山峰作为远景，拍出层次丰富的田园诗。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`斯图德诺霍斯基酒店露台`}</h4>
                  <p className="text-sm text-gray-700">{`利用露台的木质栏杆作为自然框架，拍摄远方缆车在群山间运行的动态场景，高速快门可以凝固缆车，慢速快门则可以拍出它运动的轨迹线条。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`高山紫外线强烈且光线对比大，建议携带偏振镜（CPL）来压暗天空并消除植物和雪地的反光，让色彩更饱和。在保护区（包括植物园和大部分高山区域）请严格遵守指示，不要为了拍照离开步道践踏脆弱的植被。尊重当地居民隐私，拍摄私人木屋时请保持距离。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`山腰木屋民宿`}</h4>
                  <p className="text-sm text-blue-800">{`选择一栋由家族经营、拥有百年历史的纯木制山屋，墙壁上挂着老照片和旧滑雪板，晚上围坐在巨大的瓷砖火炉边，主人会为你端上自家酿的蓝莓酒并讲述他祖父当登山向导的故事。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`精品设计酒店`}</h4>
                  <p className="text-sm text-green-800">{`位于小镇中心步行街旁，由老邮局改建，内部是极简的北欧风格，巨大的窗户正对着洛姆尼茨基峰，你可以在房间的落地窗前一边泡澡一边欣赏雪山日落。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`高端温泉酒店`}</h4>
                  <p className="text-sm text-yellow-800">{`坐落在小镇边缘更幽静的森林中，拥有引自深层地下的天然温泉池，在户外零度的空气中泡在热气腾腾的池水里仰望星空，是攀登一天后最极致的犒赏。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`经济型背包客旅舍`}</h4>
                  <p className="text-sm text-purple-800">{`由一栋社会主义时期建筑改造，干净明亮，公共厨房设施齐全，这里是结识全球徒步和滑雪爱好者的最佳据点，信息板上贴满了拼车和结伴徒步的纸条。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "旺季（冬季滑雪季12月-2月，夏季7月-8月）住宿非常紧张且价格高昂，务必提前至少2-3个月预订。小镇治安极好，但选择过于偏僻的林间住宿时，需考虑夜间没有路灯的步行路程。许多老式木屋民宿不提供空调，夏季夜间凉爽无需担心，但冬季确认暖气是否充足至关重要。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开塔特兰斯卡洛姆尼察许久后，我发现自己最常回味的，不是站在峰顶那一刻的征服感，反而是在下山后，坐在普通小餐馆里，看着窗外那些刚刚结束一天山地活动、面容平静的当地人。他们身上有一种被大山塑造过的踏实和开阔。这里教会我的，不是如何“打卡”一个景点，而是一种与自然相处的节奏和心境。那座红色缆车，更像是一个隐喻：它提供了一条通往极致的捷径，但真正的收获，在于你踏上顶峰后，如何看待脚下的世界，以及如何回归平凡的生活。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个一切都追求即时、快速和流于表面体验的时代，塔特兰斯卡洛姆尼察保持着一种老派的、质朴的深度。它不喧哗，不刻意讨好，只是坦然地将那座伟大的山脉和与之共生的小镇生活呈现给你。它让你经历身体的轻微考验（寒冷、海拔），感官的彻底刷新（纯净的空气、无际的视野），然后获得一种难得的清明和平静。对于每一位厌倦了城市喧嚣、渴望在真实而非虚拟的广阔中重新校准内心坐标的旅人来说，这里都是一剂良药。它不是让你逃离生活，而是邀请你，去体验一种以山为尺、更加本真和壮阔的生活可能。这，或许就是它最值得被列入一生必去清单的理由。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/zvolen-castle" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    兹
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">兹沃伦城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Zvolen Castle</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/ruzomberok-vlkolinec-unesco" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    鲁
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">鲁容贝罗克与维尔科利内茨木屋村</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Ružomberok and Vlkolínec</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/kezmarok-wooden-church-old-town-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    凯
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">凯日马罗克（木制极地教堂及老城）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Kežmarok</p>
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
