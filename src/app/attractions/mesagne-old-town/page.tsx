import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { InfoRow } from '@/components/InfoRow'
import { Breadcrumb } from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: '梅萨涅 Mesagne｜阿庇亚古道上的心形瑰宝，邂逅诺曼城堡与巴洛克广场 - 最佳欧洲景点',
  description: '车子拐下那条笔直得仿佛通向时间尽头的现代公路，一片由蜜糖色石头和暖白色房屋组成的密集建筑群突然出现在普利亚平坦的橄榄树原野上。第一眼望去，梅萨涅并没有什么惊世骇俗的天际线，但它有一种沉静的、笃定的存在感，像一块被岁月反复摩挲温润了的古老琥珀。直到你爬上旁边的小山坡回望——天啊，那个传说是真的！那些层',
}

export default function MesagneOldTownPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: '首页', href: '/' },
            { label: '景点百科', href: '/category/encyclopedia' },
            { label: '意大利', href: '/destinations/italy' },
            { label: '梅萨涅', href: '/destinations/italy' },
            { label: '梅萨涅', href: '/attractions/mesagne-old-town' },
          ]}
        />

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{`梅萨涅・Mesagne・意大利・梅萨涅`}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {`车子拐下那条笔直得仿佛通向时间尽头的现代公路，一片由蜜糖色石头和暖白色房屋组成的密集建筑群突然出现在普利亚平坦的橄榄树原野上。第一眼望去，梅萨涅并没有什么惊世骇俗的天际线，但它有一种沉静的、笃定的存在感，像一块被岁月反复摩挲温润了的古老琥珀。直到你爬上旁边的小山坡回望——天啊，那个传说是真的！那些层层叠叠的屋顶、高高低低的塔楼，它们勾勒出的，不正是一个巨大、温柔而完整的心形吗？这不是人为规划的结果，而是千年来人们依着地势，围着城堡，自然而然地“生长”出的形状。一种莫名的感动瞬间击中了你，这大概是历史写给大地最浪漫的情书。
走进这个“心”的内部，则是另一番沸腾的生活图景。空气里弥漫着好几种味道交织的协奏曲：刚出炉的“佛卡夏”面包带着橄榄油和迷迭香的温热香气；从某扇虚掩的门后飘出的浓郁番茄酱汁正在慢炖的“嘶嘶”声；还有石头墙壁被正午阳光炙烤后散发出的、干燥而安全的气息。脚下的石板路被几个世纪的脚步磨得光滑如镜，在缝隙里挣扎出点点青苔。你的耳朵会被意大利语的元音充满——不是游客的喧哗，而是老太太们在阳台上隔空聊天的洪亮嗓音，五金店老板和熟客讨价还价的爽朗笑声，还有 Vespa 小摩托穿过狭窄巷道时清脆的回响。在这里，雄伟的城堡和巴洛克教堂的立面，不是被围栏隔开的景点，而就是邻居家的一面墙，是你去买咖啡时会路过的一段风景。
最打动人心的，莫过于那种“层叠感”。在一条小巷里，你可能同时看到：一栋16世纪贵族府邸精雕细琢的石质阳台；阳台下方，是嵌在墙里的古罗马时期雕刻碎块，被后人随意拿来当了建筑材料；而墙角边，则摆放着今人精心照料的几盆天竺葵，开得如火如荼。历史在这里不是按顺序陈列的，而是被揉碎了，和生活搅拌在一起，成为一种呼吸般的日常。诺曼-斯瓦比亚城堡那敦厚而略带忧郁的方塔，俯瞰着脚下广场上巴洛克风格的华丽教堂立面，两者风格迥异却毫不冲突，共同守护着广场上永远在喝咖啡、看报纸、追逐嬉戏的人们。这种穿越时空的和谐共处，便是梅萨涅最核心的魅力——它告诉你，伟大的历史，最终是为了承载鲜活的人生。`}
          </p>
        </div>

        <div className="space-y-8">

          <Section title="1. 景点介绍">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "车子拐下那条笔直得仿佛通向时间尽头的现代公路，一片由蜜糖色石头和暖白色房屋组成的密集建筑群突然出现在普利亚平坦的橄榄树原野上。第一眼望去，梅萨涅并没有什么惊世骇俗的天际线，但它有一种沉静的、笃定的存在感，像一块被岁月反复摩挲温润了的古老琥珀。直到你爬上旁边的小山坡回望——天啊，那个传说是真的！那些层层叠叠的屋顶、高高低低的塔楼，它们勾勒出的，不正是一个巨大、温柔而完整的心形吗？这不是人为规划的结果，而是千年来人们依着地势，围着城堡，自然而然地“生长”出的形状。一种莫名的感动瞬间击中了你，这大概是历史写给大地最浪漫的情书。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "走进这个“心”的内部，则是另一番沸腾的生活图景。空气里弥漫着好几种味道交织的协奏曲：刚出炉的“佛卡夏”面包带着橄榄油和迷迭香的温热香气；从某扇虚掩的门后飘出的浓郁番茄酱汁正在慢炖的“嘶嘶”声；还有石头墙壁被正午阳光炙烤后散发出的、干燥而安全的气息。脚下的石板路被几个世纪的脚步磨得光滑如镜，在缝隙里挣扎出点点青苔。你的耳朵会被意大利语的元音充满——不是游客的喧哗，而是老太太们在阳台上隔空聊天的洪亮嗓音，五金店老板和熟客讨价还价的爽朗笑声，还有 Vespa 小摩托穿过狭窄巷道时清脆的回响。在这里，雄伟的城堡和巴洛克教堂的立面，不是被围栏隔开的景点，而就是邻居家的一面墙，是你去买咖啡时会路过的一段风景。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "最打动人心的，莫过于那种“层叠感”。在一条小巷里，你可能同时看到：一栋16世纪贵族府邸精雕细琢的石质阳台；阳台下方，是嵌在墙里的古罗马时期雕刻碎块，被后人随意拿来当了建筑材料；而墙角边，则摆放着今人精心照料的几盆天竺葵，开得如火如荼。历史在这里不是按顺序陈列的，而是被揉碎了，和生活搅拌在一起，成为一种呼吸般的日常。诺曼-斯瓦比亚城堡那敦厚而略带忧郁的方塔，俯瞰着脚下广场上巴洛克风格的华丽教堂立面，两者风格迥异却毫不冲突，共同守护着广场上永远在喝咖啡、看报纸、追逐嬉戏的人们。这种穿越时空的和谐共处，便是梅萨涅最核心的魅力——它告诉你，伟大的历史，最终是为了承载鲜活的人生。" }} />
          </Section>

          <Section title="2. 基本信息">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <InfoRow label="中文名称" value={`梅萨涅`} />
                <InfoRow label="英文名称" value={`Mesagne`} />
                <InfoRow label="正式名称" value={`Mesagne`} />
                <InfoRow label="国家" value={`意大利`} />
                <InfoRow label="城市" value={`梅萨涅`} />
              </div>
              
              <div className="space-y-4">
                <InfoRow label="历史地位" value={`一座在古罗马阿庇亚大道旁生长起来，历经诺曼、斯瓦比亚、安茹和西班牙统治层叠积淀的“活化石”古城。`} />
                <InfoRow label="建筑特色" value={`其最奇妙的特质在于从高空俯瞰，整个老城中心呈现出近乎完美的天然心形轮廓，由密密麻麻的白色房屋和蜿蜒小巷自然勾勒而成。`} />
                <InfoRow label="建筑风格" value={`以庄严的诺曼-斯瓦比亚城堡为防御核心，外围包裹着大量经过17-18世纪巴洛克风格“美化”的教堂与贵族宫殿，形成一种粗犷军事与华丽繁复的独特融合。`} />
                <InfoRow label="文化价值" value={`它并非一个僵化的博物馆，而是一个仍然充满日常活力的社区，是理解普利亚大区历史断层与民间虔诚信仰的微观窗口。`} />
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <InfoRow label="开放时间" value={`老城区域全天开放。核心景点梅萨涅城堡（Castello Normanno-Svevo）的开放时间通常为周二至周日，夏季（4月至9月）上午9:30至下午1:00，下午5:00至晚上8:00；冬季（10月至3月）上午9:30至下午1:00，下午4:00至晚上7:00；周一闭馆。市政博物馆和圣墓教堂（Chiesa del Santissimo Crocifisso）的开放时间与城堡类似，但可能有细微调整，建议行前在当地旅游局官网核实。节假日开放时间可能缩短或关闭。`} />
              <InfoRow label="门票价格" value={`漫步于迷宫般的心形老城小巷是完全免费的。进入梅萨涅城堡及内部的市政博物馆需购买门票，全票约5欧元，优惠票（学生、65岁以上老人等）约3欧元。有时会推出包含城堡、博物馆和圣墓教堂的联票，约7欧元。具体票价可能随展览内容微调。`} />
              <InfoRow label="地址" value={`Piazza Vittorio Emanuele II, 72023 Mesagne BR, Italy`} />
              <InfoRow label="交通方式" value={`最近的机场是布林迪西机场（BDS），距离梅萨涅约20公里。从机场可乘坐出租车前往，车程约25分钟，费用约40-50欧元。更经济的方式是搭乘机场巴士到布林迪西中央火车站（Brindisi Centrale），然后转乘火车。从布林迪西火车站到梅萨涅站的区间火车班次频繁，车程仅15-20分钟，单程票价约2-3欧元，建议在车站自动售票机购买。若自驾，从布林迪斯沿SS7公路（即古阿庇亚大道）向南行驶约15分钟即可抵达，老城周边有付费停车场（如Parcheggio Via Mazzini）。`} />
            </div>
          </Section>

          <Section title="3. 历史背景">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "让我们把时钟拨回两千多年前。那时，这里还只是阿庇亚大道旁一个不起眼的驿站。这条“女王之路”从罗马直通布林迪西港口，帝国的军队、商人、政客和思想在这条石路上川流不息。梅萨涅最初的脉搏，便随着这条大动脉的节奏一起跳动。一些定居者留了下来，在道路旁建立家园，或许也为往来的旅人提供食宿。罗马帝国衰落后，这里一度沉寂，但地理位置的战略意义从未被遗忘。它就像一颗种子，深埋在历史的土壤里，等待着下一次萌发的时机。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "真正的转折点出现在11世纪，诺曼人来了。这些来自北方的彪悍骑士，在征服南意大利后，亟需巩固统治。他们看中了梅萨涅控制周边平原和交通要道的位置，于是，一座坚固的城堡开始在地势略高处拔地而起。最初的城堡是功能性的：高墙、深壕、坚固的塔楼，充满了冷兵器的防御美学。但城堡的建立，就像投下一块磁石，迅速吸引了寻求庇护的平民、手工艺人和商贾在它的周围聚集。房屋像藤蔓一样沿着城堡的围墙蔓延开来，街道自然成形，社区的雏形诞生了。这颗“心”开始有了最初的跳动。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "随后到来的斯瓦比亚王朝，特别是那位传奇的皇帝腓特烈二世，为城堡乃至整个地区留下了更深的印记。这位被称为“世界惊奇”的君主，不仅是军事家，更是学者、立法者和艺术赞助人。在他统治下，城堡可能得到了加固和扩建，被赋予了更复合的功能。更重要的是，他所倡导的那种融合了北欧严谨、阿拉伯智慧和古典复兴的宫廷文化，像一阵微风，吹拂过这片土地，为本地文化注入了一丝 cosmopolitan 的基因。诺曼-斯瓦比亚城堡这个名字，便凝固了这段双雄统治的岁月。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "时间滚滚向前，战争的阴云与王朝的更迭从未停止。安茹家族、阿拉贡王室……城堡的主人换了一茬又一茬，城墙在一次又一次的围困中破损又修复。但梅萨涅的生命力顽强得惊人。到了17、18世纪，和平相对降临，经济复苏，一股巴洛克艺术的狂潮席卷了整个南意大利。梅萨涅的贵族和富商们争先恐后地想要“现代化”自己的家园。于是，你看到了今天老城中最炫目的景象：无数教堂的正面被覆上了层层叠叠、充满动感的涡卷、天使雕像和华丽装饰；私人宫殿的大门变得气派非凡，内部庭院出现了精巧的楼梯和壁画。巴洛克风格像一层奢华的糖霜，涂抹在了中世纪粗糙的石结构上。这不是破坏，而是一次盛大的“化妆舞会”，表达了人们对美、对繁荣、对神圣荣耀的崭新渴望。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "经历了统一运动的波澜，以及二十世纪的现代化冲击，梅萨涅却奇迹般地保持了它古老的核心。二战后的经济腾飞时期，许多意大利老城进行了大刀阔斧的改造，但梅萨涅的心形老城，或许是因为规模适中，或许是因为居民固执的眷恋，被完整地保留了下来。今天的它，不再肩负军事防御或交通枢纽的重任，而是蜕变成一个宁静、自足、充满生活质感的历史社区。那些巴洛克教堂里依然举行着礼拜，城堡变成了博物馆和文化活动中心，小巷里的作坊依然传来手工匠人的敲打声。它的历史，最终没有终结在博物馆的橱窗里，而是流淌在每一个寻常的日子里。" }} />
            </div>
          </Section>

          <Section title={`4. 游览路线`}>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{`推荐路线`}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {`要给梅萨涅这颗“心”完整的温柔触摸，建议你留出一整天的时间。最佳抵达时间是清晨九点前，此时游客未至，阳光斜照，老城刚刚苏醒，空气清新。整体游览节奏应该是“先外后内，先高后低，先静后动”。上午先聚焦于宏大的历史地标——城堡和主广场，感受其庄严气度；下午则像当地人一样迷失在小巷深处，发现意外的惊喜和生动的细节。傍晚时分，则是登高或找一处露天咖啡馆，欣赏日落时分金色光线为老城披上的盛装。这样的安排能让你在光线最佳时捕捉建筑之美，也能充分体验小镇从宁静到热闹再到温馨的全天韵律。`}
                </p>
                <div className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  <strong>建议：</strong>{`小镇石头小路多且不平，务必穿一双舒适耐磨的平底鞋，高跟鞋在这里是“灾难”。午后的广场和开阔地带阳光非常强烈，准备好帽子、太阳镜和防晒霜。周日许多小商店和部分博物馆可能关门，但教堂活动和广场上的市民生活反而更浓郁，可以根据你的兴趣选择日期。`}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 1 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`从城堡脚下的 Piazza Vittorio Emanuele II 出发，仰望着那座敦实的诺曼-斯瓦比亚方塔，感受它作为城市“心脏起搏器”的古老威严。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 2 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`花上一个小时沉浸在城堡内部的市政博物馆里，用手指隔空触摸那些从古罗马陶器到中世纪铁器的碎片，听它们无声讲述地层般堆积的故事。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 3 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`穿过拱门走进老城腹地，立刻让自己“迷失”在那些狭窄如峡谷的“vicoli”小巷中，抬头看一线蓝天，两侧是挂着晾衣绳的斑驳墙壁和突然出现的巴洛克窗棂。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 4 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`循着咖啡香和嘈杂的人声找到核心的 Piazza Orsini del Balzo 广场，在遮阳伞下点一杯意式浓缩，看孩子们绕着中央的巴洛克喷泉追逐，时间在这里仿佛慢了下来。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 5 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`拜访广场一侧的圣墓教堂，踏入那片近乎戏剧性的巴洛克内饰海洋，感受金光璀璨的祭坛与幽暗侧廊间营造出的强烈神秘与虔诚氛围。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 6 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`按照当地主妇的采购路线，去老城边缘的露天市场转一转，那里色彩斑斓的蔬果、成堆的奶酪和橄榄，以及摊主热情的吆喝，是小镇最鲜活的生命力证明。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 7 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`在夕阳西下前，想办法登上老城墙的某一段残垣或某栋允许进入的古老塔楼（有时咖啡馆的露台就是绝佳位置），等待金色光线将整个心形屋顶的海洋染成蜜糖色。`}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">第 8 步</h4>
                  <p className="text-sm text-gray-700 mb-2">{`晚餐时间，放弃主广场旁的餐厅，钻进某条小巷深处寻找家庭经营的“osteri”，用一盘手工猫耳朵面配西兰花拉贝和一杯本地普里米蒂沃红酒，为这一天画上最地道的句号。`}</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="5. 拍照机位">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">1. {`城堡前广场仰拍方塔与蓝天`}</h4>
                  <p className="text-sm text-gray-700">{`上午十点前，阳光从东侧照亮城堡主塔的正面，站在广场喷泉附近，用广角镜头将威严的塔楼与广场上巴洛克建筑的一角同时纳入画面，形成时空对话。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">2. {`圣墓教堂塔楼（如开放）或周边高层露台俯瞰心形全景`}</h4>
                  <p className="text-sm text-gray-700">{`这是解锁梅萨涅标志性视角的关键，日落前一小时光线最柔和，能清晰勾勒老城屋顶的起伏轮廓和心形边缘，长焦镜头可以压缩空间，突出密集感。`}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">3. {`任意一条狭窄小巷（如 Via Castello 附近）捕捉光影戏剧`}</h4>
                  <p className="text-sm text-gray-700">{`正午时分，阳光近乎垂直射入窄巷，在古老的石墙上切割出明暗分明的几何图案，等待一个当地居民或一只猫走过，为静态的画面注入灵魂。`}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">4. {`老城西侧城墙遗迹远眺田园风光`}</h4>
                  <p className="text-sm text-gray-700">{`傍晚时分，从这里可以拍摄到老城建筑群作为前景，后方是辽阔的普利亚橄榄园与远山的画面，暖色调的光线将历史与自然完美缝合。`}</p>
                </div>
              </div>

            </div>
            
            <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-800 mb-2">拍照小贴士</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• {`拍摄居民尤其是老人和孩子的正面特写前，请务必微笑并用手势征得对方同意，尊重是最好的沟通语言。教堂内部通常允许拍照，但严禁使用闪光灯和三脚架，并保持绝对安静。小巷拍照时注意避让居民的通勤摩托车，他们是这里速度的主宰。`}</li>
              </ul>
            </div>
          </Section>

          <Section title={`6. 住宿与餐饮推荐`}>
            <div className="space-y-6">
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">{`心臟地帶的巴洛克宫殿`}</h4>
                  <p className="text-sm text-blue-800">{`入住由17世纪贵族宫殿精心修复的精品酒店，睡在有拱顶的石砌房间，清晨打开木百叶窗，楼下广场的面包店香味和教堂钟声一同飘入。`}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">{`古老修道院的静谧庭院`}</h4>
                  <p className="text-sm text-green-800">{`选择一家由修道院改建的住宿，环绕着回廊与柠檬树花园，夜晚异常宁静，只有泉水的淙淙声，是冥想与深度休息的绝佳之所。`}</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">{`城墙外的橄榄园农庄`}</h4>
                  <p className="text-sm text-yellow-800">{`住在老城步行十分钟可达的乡村农庄，独享一片私人橄榄园，泳池边享用农场自产的早餐，体验“出则田野，入则古城”的双重乐趣。`}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">{`火车站旁的家庭式公寓`}</h4>
                  <p className="text-sm text-purple-800">{`预算有限的明智之选，现代舒适的公寓配备小厨房，友善的房东会给你手绘老城觅食地图，像当地人一样生活几天。`}</p>
                </div>
              </div>
              <div className="text-gray-700 leading-relaxed">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "老城中心的住宿往往位于保护建筑内，没有电梯且房间格局独特（这就是魅力的一部分），预订时请确认是否有行李搬运服务。夏季（7-8月）是本地海滩度假旺季，尽管梅萨涅不算最热门，但仍建议提前数月预订心仪的特色住所。小镇治安良好，夜晚漫步很安全，但老城部分小巷灯光昏暗，建议结伴而行。" }} />
              </div>
            </div>
          </Section>

          <Section title="7. 总结感悟">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "离开梅萨涅许久后，那个心形的轮廓依然会时常浮现在脑海。但它让我怀念的，远不止一个奇妙的空中视角。我怀念的，是那种被厚重时间温柔包裹的感觉。在这里，历史不是教科书上需要背诵的章节，也不是玻璃后面冷冰冰的器物。它是你指尖触碰到的、被阳光晒得微温的石头；是转角处，巴洛克涡卷装饰阴影里打盹的老猫；是集市上，卖菜大叔递给你一个无花果时，那和千年前罗马农夫或许并无二致的灿烂笑容。梅萨涅教会我，最深度的旅行，不是收集了多少地标打卡照，而是你是否允许自己慢下来，去聆听一座城镇的呼吸和心跳。" }} />
              <p className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: "在这个崇尚速度和效率的世界里，梅萨涅这样的地方是一座珍贵的“反义词”。它不急于向你证明什么，不炫耀，不喧嚣。它只是静静地在那里，按照自己的节奏日升月落，将辉煌的、破碎的、朴素的所有历史层，都消化成日常生活的养分。来这里，你会重新发现“附近”的魅力，发现一条小巷、一扇旧门、一场街角闲聊里蕴含的无限风景。它或许不会让你肾上腺素飙升，但会像一股暖流，缓缓注入你因奔波而疲惫的心田。对于每一位渴望在旅行中寻找真实连接、而不仅仅是消费风景的深度旅人来说，梅萨涅这颗阿庇亚古道旁的“心”，值得你跨越千里，前来与它同频跳动一次。" }} />
            </div>
          </Section>


          <Section title="猜你喜欢">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <a href="/attractions/tihany-benedictine-abbey-history" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    蒂
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">蒂豪尼修道院与半岛</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Tihany Abbey & Peninsula</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/cascata-delle-marmore" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    马
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">马尔莫雷瀑布</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Cascata delle Marmore</p>
                  </div>
                </div>
              </a>
              <a href="/attractions/novara-di-sicilia" className="block group">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-100 flex items-center justify-center text-4xl font-serif text-gray-300">
                    诺
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">诺瓦拉迪西西里</h4>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">Novara di Sicilia</p>
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
