import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '利尔钟楼与贝居安会院 Zimmertoren and Begijnhof of Lier｜时光谜题与隐世庭院的灵魂邂逅 - 最佳欧洲景点',
  description: '穿过利尔老城喧闹的市集广场，拐进一条不起眼的小巷，世界突然就安静了下来。这就是踏入贝居安会院入口拱门下的第一感觉。耳朵里灌满的汽车声、谈话声瞬间被过滤掉了，取而代之的是自己脚步声在鹅卵石上的轻微回响，还有远处不知哪户窗台上，天竺葵在微风里叶子摩擦的沙沙声。鼻尖萦绕着一股清冽的气息，混合着老砖石晒过太...',
}

export default function ZimmertorenBegijnhofLierPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点', href: '/attractions' },
            { label: '利尔钟楼（齐默尔塔）与贝居安会院', href: '/attractions/zimmertoren-begijnhof-lier' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`利尔钟楼（齐默尔塔）与贝居安会院・Zimmertoren and Begijnhof of Lier・比利时・利尔`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`穿过利尔老城喧闹的市集广场，拐进一条不起眼的小巷，世界突然就安静了下来。这就是踏入贝居安会院入口拱门下的第一感觉。耳朵里灌满的汽车声、谈话声瞬间被过滤掉了，取而代之的是自己脚步声在鹅卵石上的轻微回响，还有远处不知哪户窗台上，天竺葵在微风里叶子摩擦的沙沙声。鼻尖萦绕着一股清冽的气息，混合着老砖石晒过太阳后的暖味、修剪过的青草香，以及一丝从古老木门缝隙里透出来的、类似旧书和蜡油的沉稳气味。阳光透过高大的栗树，在那些雪白墙面的小房子上投下晃动光影，每一扇墨绿色的门后，似乎都藏着一个安静了三百年的故事。这里不是博物馆，直到今天，仍有普通居民居住在这些修女曾住过的小屋里，阳台上晾晒着现代衣衫，窗台边摆着自行车，但那种超越时间的安宁，却从未被打破。
而仅仅几步之遥，在城市的中心广场上，齐默尔塔则讲述着另一个关于“时间”的、截然不同的故事。初见这座敦实的钟楼，你或许会觉得它不如布鲁塞尔的市政厅塔楼那般华丽高耸。但当你走进它的腹部，你会瞬间屏住呼吸。那是一个由黄铜、精钢和木头构成的、正在缓慢呼吸和脉动的机械宇宙。巨大的“万年历”齿轮组在昏黄的灯光下闪烁着金属的幽光，数十个大小不一的表盘上，日月星辰、黄道星座、潮汐季节乃至弗兰德斯的集市日历，都在以一种近乎催眠的节奏精确运转。你能听到一种低沉、稳定、充满力量的“嗡”声，那是数百个精密咬合的齿轮共同工作的协奏曲，它不像音乐，更像时间本身的心跳。这座塔楼不是用来仰望天空的，它是将浩瀚无垠的宇宙和时间，浓缩、驯化并呈现在你眼前的一个科学圣殿。
利尔人把这两处珍宝，像呼吸一样自然地融入日常生活。你会看到慢跑者穿过贝居安会院宁静的小径，母亲推着婴儿车在礼拜堂前的长椅上晒太阳；而在齐默尔塔整点报时前，广场上的游客和本地人都会不约而同地抬头，等待着那座复杂机械驱动的小木偶出来上演关于生命与时光的哑剧。最打动人心的，正是这种反差与和谐的统一：一边是人类心智试图捕捉并展现时间全部奥秘的宏伟野心，另一边则是一群女性选择脱离时间洪流、在静默中寻求永恒的简朴庭院。它们共同构成了利尔这座小城的独特灵魂——既对世界充满好奇与探索的激情，又无比珍视内在的宁静与灵性深度。`}
          </p>
        </div>

        <div className="space-y-8">
          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4">{`穿过利尔老城喧闹的市集广场，拐进一条不起眼的小巷，世界突然就安静了下来。这就是踏入贝居安会院入口拱门下的第一感觉。耳朵里灌满的汽车声、谈话声瞬间被过滤掉了，取而代之的是自己脚步声在鹅卵石上的轻微回响，还有远处不知哪户窗台上，天竺葵在微风里叶子摩擦的沙沙声。鼻尖萦绕着一股清冽的气息，混合着老砖石晒过太阳后的暖味、修剪过的青草香，以及一丝从古老木门缝隙里透出来的、类似旧书和蜡油的沉稳气味。阳光透过高大的栗树，在那些雪白墙面的小房子上投下晃动光影，每一扇墨绿色的门后，似乎都藏着一个安静了三百年的故事。这里不是博物馆，直到今天，仍有普通居民居住在这些修女曾住过的小屋里，阳台上晾晒着现代衣衫，窗台边摆着自行车，但那种超越时间的安宁，却从未被打破。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`而仅仅几步之遥，在城市的中心广场上，齐默尔塔则讲述着另一个关于“时间”的、截然不同的故事。初见这座敦实的钟楼，你或许会觉得它不如布鲁塞尔的市政厅塔楼那般华丽高耸。但当你走进它的腹部，你会瞬间屏住呼吸。那是一个由黄铜、精钢和木头构成的、正在缓慢呼吸和脉动的机械宇宙。巨大的“万年历”齿轮组在昏黄的灯光下闪烁着金属的幽光，数十个大小不一的表盘上，日月星辰、黄道星座、潮汐季节乃至弗兰德斯的集市日历，都在以一种近乎催眠的节奏精确运转。你能听到一种低沉、稳定、充满力量的“嗡”声，那是数百个精密咬合的齿轮共同工作的协奏曲，它不像音乐，更像时间本身的心跳。这座塔楼不是用来仰望天空的，它是将浩瀚无垠的宇宙和时间，浓缩、驯化并呈现在你眼前的一个科学圣殿。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`利尔人把这两处珍宝，像呼吸一样自然地融入日常生活。你会看到慢跑者穿过贝居安会院宁静的小径，母亲推着婴儿车在礼拜堂前的长椅上晒太阳；而在齐默尔塔整点报时前，广场上的游客和本地人都会不约而同地抬头，等待着那座复杂机械驱动的小木偶出来上演关于生命与时光的哑剧。最打动人心的，正是这种反差与和谐的统一：一边是人类心智试图捕捉并展现时间全部奥秘的宏伟野心，另一边则是一群女性选择脱离时间洪流、在静默中寻求永恒的简朴庭院。它们共同构成了利尔这座小城的独特灵魂——既对世界充满好奇与探索的激情，又无比珍视内在的宁静与灵性深度。`}</p>
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`利尔钟楼（齐默尔塔）与贝居安会院`} />
                <InfoRow label="英文名称" value={`Zimmertoren and Begijnhof of Lier`} />
                <InfoRow label="正式名称" value={`Zimmertoren and Begijnhof of Lier`} />
                <InfoRow label="国家" value={`比利时`} />
                <InfoRow label="城市" value={`利尔`} />
              </div>
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`齐默尔塔是文艺复兴时期城市钟楼的杰出代表，更因其内部独一无二的“齐默尔天文钟”而被誉为“世界钟表奇迹之一”；利尔贝居安会院则是低地国家保存最完好的贝居安社区之一，见证了中世纪女性独立与灵修生活的重要历史。`} />
                <InfoRow label="建筑特色" value={`齐默尔塔是坚固的砖石结构钟楼，顶层拥有优雅的钟琴与瞭望回廊；其内部核心是一座极度复杂、由数十个表盘和上百个齿轮驱动的天文历法钟。贝居安会院则由近百幢简朴的白墙红瓦小屋、蜿蜒的鹅卵石小径、中央草坪和一座小型哥特式礼拜堂组成，形成一个与世隔绝的宁静矩形社区。`} />
                <InfoRow label="建筑风格" value={`齐默尔塔主体为晚期哥特式与早期文艺复兴风格的融合；贝居安会院的民居建筑主要为17-18世纪的巴洛克及古典风格，布局则保留着中世纪修道院式的封闭社群规划。`} />
                <InfoRow label="文化价值" value={`两者共同代表了利尔的城市灵魂：齐默尔塔象征着人类对宇宙时间和科学知识的永恒追求与艺术表达；贝居安会院则体现了宁静、社群精神与女性宗教生活的文化遗产，二者一动一静，构成了理解低地国家历史与人文精神的完美钥匙。`} />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`齐默尔塔：每日开放，时间为上午10点至下午5点（冬季11月至3月可能缩短至下午4点闭馆，周一常为固定休息日，出行前建议查看官网确认）。贝居安会院：外部庭院及街道全天24小时免费开放，内部圣玛格丽特礼拜堂开放时间较为灵活，通常为白天时段，但不如塔楼固定。两处景点在比利时法定节假日（如7月21日国庆日）通常开放，但圣诞节及新年当天可能关闭。`} />
              <InfoRow label="门票价格" value={`齐默尔塔：成人票8欧元，65岁以上长者、学生及13-18岁青少年票6欧元，12岁及以下儿童免费。提供家庭套票（2成人+2儿童）20欧元。贝居安会院庭院区域免费参观；圣玛格丽特礼拜堂通常免费，但欢迎捐款以支持维护。门票可在塔楼入口处直接购买，仅接受现金（欧元）与主流信用卡。`} />
              <InfoRow label="地址" value={`齐默尔塔：Zimmerplein 1，2500 Lier，比利时。贝居安会院：Begijnhofstraat，2500 Lier，比利时（主要入口）。`} />
              <InfoRow label="交通方式" value={`从布鲁塞尔国际机场出发最便捷。乘坐机场火车前往安特卫普中央火车站（约30分钟，班次频繁），在安特卫普中央站内换乘前往利尔方向的本地列车（方向：Lier / Herentals）。抵达利尔火车站仅需约15分钟，班次约每半小时一班。从利尔火车站步行至齐默尔塔约10分钟，至贝居安会院约15分钟，全程平坦易行。建议使用比利时铁路APP（SNCB/NMBS）购买电子车票，比窗口购票更方便。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`故事得从13世纪那场席卷低地国家的宗教热潮说起。当时，许多女性渴望虔诚的宗教生活，却不愿（或不能）进入与世隔绝、誓言永固的传统修道院。于是，一种独特的半世俗、半宗教的女性社区——贝居安会院应运而生。利尔的贝居安会院大约在13世纪中叶悄然诞生。这些“贝居安女”们不立永誓，可以保留个人财产，随时离开去结婚，她们通过纺织、蕾丝制作、护理病人等劳动自给自足，共同生活在一个封闭的社区里，进行祈祷和慈善工作。这片土地最初位于城墙之外，靠近一条小河，环境清幽。几个世纪里，她们的小屋屡遭火灾和战争破坏，尤其是在16世纪的宗教动荡和西班牙统治时期，但社区总能在灰烬中重建。你现在看到的这些白色巴洛克风格小屋，大多是在17-18世纪的和平岁月里稳固下来的模样。她们不是修女，却创造了一种属于女性的、独立的灵性与生活空间，这种模式在比利时和荷兰的城市中如雨后春笋般出现，而利尔的会院，正是其中保存最完整、最具生活气息的典范。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`时光流转到19世纪，利尔迎来了一位改变城市天际线意义的奇才——钟表匠路易·齐默尔。他原本是当地一位技艺精湛的工匠，但心中怀着一个疯狂的梦想：建造一台能展示“一切时间”的机器。当时，市政厅的老钟楼已经破败不堪。齐默尔没有选择建造一座新塔，而是说服了市政府，将他那台正在日益复杂化的“宇宙机器”装入旧钟楼进行改造。于是，从19世纪30年代开始，他倾尽毕生心血，在原有的哥特式塔楼结构内，创造了一个机械奇迹。这不仅仅是一个钟表，它是一个综合的天文仪、日历和世界现象展示器。他能告诉你今天太阳几点升起、月亮什么形状、潮汐何时涨落，甚至哪一天是利尔的传统市集日。齐默尔于1851年去世，但他的儿子继承了他的工作，不断改进和维护这个庞大的机械系统。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`然而，真正的考验在二十世纪来临。第一次世界大战期间，德国军队占领了利尔，并垂涎塔楼里珍贵的钟琴铜钟，意图熔铸它们用于制造武器。是路易·齐默尔的孙子，冒着巨大的个人风险，将钟琴的关键部件拆卸并隐藏起来，才保住了这珍贵的文化遗产。二战期间，这座塔楼和整个贝居安会院再次面临炮火的威胁。幸运的是，它们都奇迹般地躲过了最严重的破坏。战后的几十年里，齐默尔塔的机械装置经历了精心的修复和现代化改造，加入了电动驱动以保护古老的齿轮，但其核心的机械逻辑和视觉展示，完全保留了齐默尔最初的愿景。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`今天，你看到的不仅仅是一座历史建筑。贝居安会院在1998年与比利时其他类似的会院一起，被列入联合国教科文组织世界遗产名录，被认可为“弗兰德地区的贝居安会院”之一。而齐默尔塔，则继续作为一座仍在运转的科学艺术丰碑，每时每刻都在向参观者低语着关于时间、宇宙和人类智慧的永恒故事。从女性寻求精神独立的宁静庭院，到男性探索宇宙法则的机械高塔，利尔用这两处遗产，讲述了人类面对永恒命题时，两种不同却同样深刻的回应方式。`}</p>
            </div>
          </Section>

          <Section title="4. 游览路线">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">推荐路线</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`建议用一个完整的白天（约6-7小时）来深度体验这对“时空双子星”。最佳安排是上午先探访贝居安会院，因为清晨的柔光和人迹罕至的宁静最能体现其隐修气质。午后当城市活跃起来，再前往齐默尔塔，等待整点的机械表演，并沉浸在塔内那个充满齿轮声响的微观宇宙里。这样的节奏由静入动，由内心的平和导向智识的震撼，能形成完美的情绪递进。记得留出时间在其间的老城区小巷随意漫步，感受利尔日常生活的脉搏，这是连接两个景点的无形纽带。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`贝居安会院内仍有居民，游览时请务必保持安静，不要窥探私人住宅的窗户或花园，这是基本的尊重。齐默尔塔内部空间较窄，楼梯陡峭，穿着舒适的平底鞋至关重要。如果想拍摄塔内机械的精美细节，建议携带一个轻便的三脚架或充分利用现场昏暗光线下的稳定支撑物，因为室内禁止使用闪光灯。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`清晨从会院靠近河流的僻静侧门进入，让自己瞬间被包裹在只有鸟鸣和风吹树叶声的绝对宁静里。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`沿着中央翠绿的草坪边缘漫步，仔细观察每一幢白墙红瓦小屋各不相同的门楣雕塑、门环和窗棂样式。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`走进小巧的圣玛格丽特礼拜堂，在斑驳的彩绘玻璃光影中坐一会儿，感受几个世纪以来在此沉淀的祈祷气息。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在会院北侧的小咖啡馆喝一杯咖啡，看着如今居住在这里的普通市民开始他们平静的一天。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`上午十点半左右离开会院，沿着Netelaan漫步，穿过几条老城商业街，慢慢走向齐默尔塔所在的市中心广场。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在齐默尔塔下的广场长椅坐下，等待整点时分（尤其是正午12点），观看钟面上方小窗户里上演的关于人生阶段（孩童、青年、成年、老年）的机械木偶剧。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`买票进入塔楼内部，花至少一小时逐层参观，从底层的城市历史模型，一直上到环绕着巨大永恒日历和天文仪的核心机械层。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`最后登上塔顶的露天回廊，俯瞰利尔老城的红色屋顶网，并寻找下方如绿色棋盘般规整的贝居安会院，完成一次空间上的呼应。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`贝居安会院主入口拱门向内拍摄`}</h4>
                  <p className="text-sm text-gray-700">{`下午三点后的侧光能完美勾勒出拱门的轮廓，并将视线引向内部纵深的小路与白色小屋，构图力求对称，捕捉那份秩序之美。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`齐默尔塔机械层仰拍全景`}</h4>
                  <p className="text-sm text-gray-700">{`在放置“万年历”的楼层，将相机贴近地面向上拍摄，囊括那些巨大、错综复杂的黄铜齿轮和星盘，利用现场暖色调灯光营造出蒸汽朋克般的科幻史诗感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`贝居安会院圣玛格丽特礼拜堂内彩窗光斑`}</h4>
                  <p className="text-sm text-gray-700">{`晴朗日子的上午，阳光会透过东侧彩绘玻璃，在古老的石砖地面投下绚丽的光斑，等待一位参观者无意走入光区，能拍出极具灵性的瞬间。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`利尔老城运河（Binnennete）河畔拍摄齐默尔塔倒影`}</h4>
                  <p className="text-sm text-gray-700">{`从塔楼步行几分钟即可到达运河边，傍晚时分天空尚有蓝调时，利用平静的水面拍摄塔楼与暖色灯光在水中的对称倒影，画面宁静而富有诗意。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5. {`贝居安会院小巷的纵深视角`}</h4>
                  <p className="text-sm text-gray-700">{`选择一条两旁开满鲜花的狭窄小巷，使用长焦镜头压缩空间，让两侧的白墙和鲜花形成绚丽的引导线，聚焦于小巷尽头的一扇门或一位骑车人的背影。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`在贝居安会院拍摄居民或他们的住宅是极大的禁忌，请将镜头专注于建筑细节、静物和公共空间。齐默尔塔内部机械禁止使用闪光灯，为防止震动影响精密仪器，也请勿倚靠或触碰任何展示柜。`}</li>
              </ul>
            </div>
          </Section>

          <Section title="6. 住宿小贴士">
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`特色体验首选`}</h4>
                  <p className="text-sm text-blue-800">{`贝居安会院内部由古老修女小屋改造的精品民宿，住在世界遗产里，夜晚能听到会院铁门关闭后万籁俱寂的声音，清晨在私人小花园里享受专属的宁静早餐。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`高端享受之选`}</h4>
                  <p className="text-sm text-green-800">{`坐落在利尔老城运河边的四星级设计师酒店，房间拥有全景落地窗，能将古老的齐默尔塔或蜿蜒运河尽收眼底，现代舒适的设施与历史景观形成美妙对话。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`预算友好之选`}</h4>
                  <p className="text-sm text-yellow-800">{`位于利尔火车站附近由家族经营的传统旅馆，房间朴素但一尘不染，主人会热情地为你手绘利尔隐藏 gems 的地图，并推荐只有本地人才知道的地道小餐馆。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`历史氛围沉浸`}</h4>
                  <p className="text-sm text-purple-800">{`老城广场旁一栋16世纪商人住宅改建的酒店，保留了原始的木质横梁和砖石墙壁，住在里面仿佛睡在历史里，下楼就是热闹的咖啡馆和齐默尔塔的钟声。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4">{`若选择会院内的民宿，需特别注意入住时间通常有严格规定，且夜间务必保持绝对安静以尊重邻居。利尔整体治安良好，老城区夜晚散步也很安全。旺季（夏季及周末）建议提前数周预订，尤其是会院内的独特住宿，往往一房难求。`}</p>
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">{`离开利尔许久，我的脑海里依然会交替回响着两种声音：一种是齐默尔塔里那些巨大齿轮沉稳、恒久的嗡鸣，那是人类理性试图丈量无限宇宙的雄心在低吟；另一种，是贝居安会院午后，风吹过栗树顶端，树叶发出的那种无边无际的、轻柔的沙沙声，那是心灵寻求归宿与宁静的自然呼吸。这座城市最奇妙的地方，就在于它将这两种看似对立的状态——极致的动态计算与极致的静态沉思——如此和谐地安置在步行可达的范围之内。`}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{`在这个效率至上、信息爆炸的时代，利尔的这对遗产给了我们一个珍贵的启示：真正的深度，或许不在于看了多少，而在于我们以何种状态去“存在”于一个地方。齐默尔塔邀请我们仰望（通过机械）星空，思考我们在时间长河中的位置；贝居安会院则呼唤我们内观，在简朴与寂静中触摸永恒的边缘。它们共同提醒着我们，旅行的意义，不仅仅是空间的移动，更是时间维度上的沉浸与思维的切换。每一位渴望深度游的旅人，都该来利尔感受这场与“时间”的私密对话。在这里，你不仅能看见历史，更能听见自己内心在喧嚣世界之外，那份对浩瀚与安宁最原始的向往。这趟旅程，最终会成为一次对自我节奏的校准。`}</p>
            </div>
          </Section>

          <Section title="8. 猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/citadelle-de-namur" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    那
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">那慕尔城堡</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadelle de Namur</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/durbuy" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪尔比（世界最小城市）</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Durbuy</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/citadel-of-dinant" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    迪
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">迪南要塞</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Citadel of Dinant</p>
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
